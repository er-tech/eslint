import typescript from '@rollup/plugin-typescript'
import { ESLint } from 'eslint'
import { readFileSync, rmSync } from 'node:fs'
import { rollup } from 'rollup'
import { SingleBar } from 'cli-progress'
import colours from 'ansi-colors'
import path from 'node:path'
import { defineConfig } from 'eslint/config'
import { lintErAll } from '../../../eslint.linterall.mjs'

class RollupSelfBuild {
  #root = path.join(import.meta.dirname, '../../../')
  #lintErAllRoot = path.join(import.meta.dirname, '../')
  #inputPath = `${this.#lintErAllRoot}/index.ts`

  #buildFolder = `${this.#lintErAllRoot}/${JSON.parse(readFileSync(`${this.#lintErAllRoot}/tsconfig.json`)).compilerOptions.outDir}`
  #tsConfigPath = `${this.#lintErAllRoot}/tsconfig.json`
  #entryFileName = 'eslint.linterall.mjs'
  #outputPath = path.join(this.#root, this.#entryFileName)
  #steps = [
    'loading external dependencies',
    'transpiling TypeScript config with Rollup',
    'bundling config with Rollup',
    'cleaning TypeScript build folder',
    'self linting config bundle',
    'LintErAll self updated',
  ]

  /** Status Bar generator @type Generator<number, void, unknown> */
  #generator
  /** Status Bar @type SingleBar */
  #bar
  /** @type string[] */
  #external
  /** @type RollupBuild */
  #bundle

  constructor () {
    this.#bar = new SingleBar({
      format:            `{step} ${colours.green('{bar}')} {value}/{total}`,
      barCompleteChar:   '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor:        true,
      stopOnComplete:    true,
      clearOnComplete:   true,
    })
    this.#generator = this.#barGenerator()
  }

  async run () {
    this.#setExternal()
    await this.#startRollup()
    await this.#writeBundle()
    this.#cleanBuild()
    await this.#lintResult()
  }

  * #barGenerator () {
    const max = Math.max(...this.#steps.map(step => step.length))

    for (const [index, step] of this.#steps.entries()) {
      const fill = ' '.repeat(max - step.length)
      const message = {
        step: `${step}${fill}`,
      }

      if (index === 0) {
        this.#bar.start(
          5,
          0,
          message,
        )
      } else {
        this.#bar.increment(
          1,
          message,
        )
      }

      yield index
    }
  }

  #updateBar () {
    this.#generator.next()
  }

  #setExternal () {
    this.#updateBar()
    const pack = JSON.parse(readFileSync(path.join(this.#root, 'package.json'), 'utf8'))
    this.#external = [
      ...pack.dependencies ? Object.keys(pack.dependencies) : [],
      ...pack.devDependencies ? Object.keys(pack.devDependencies) : [],
    ]
  }

  async #startRollup () {
    this.#updateBar()
    this.#bundle = await rollup({
      input:    this.#inputPath,
      external: this.#external,
      plugins:  [
        typescript({
          tsconfig: this.#tsConfigPath,
        }),
      ],
    })
  }

  async #writeBundle () {
    this.#updateBar()

    // Write the output
    await this.#bundle.write({
      dir:            this.#root,
      format:         'esm',
      entryFileNames: this.#entryFileName,
    })
  }

  #cleanBuild () {
    this.#updateBar()
    rmSync(this.#buildFolder, { recursive: true, force: true })
  }

  async #lintResult () {
    this.#updateBar()
    const eslint = new ESLint({
      fix:        true,
      baseConfig: defineConfig([
        ...lintErAll.config.recommended,
      ]),
    })

    const results = await eslint.lintFiles([this.#outputPath])
    await ESLint.outputFixes(results)

    this.#updateBar()
  }
}

const update = new RollupSelfBuild()
await update.run()
