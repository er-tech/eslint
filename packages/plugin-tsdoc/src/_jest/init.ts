/* istanbul ignore file */

jest
  .setTimeout(1000 * 60 * 10)
  .useFakeTimers()
  .setSystemTime(new Date('2020-10-25T10:36:00.000Z').getTime())

jest
  .mock('@inquirer/prompts', () => ({
    Separator: jest.fn(),
  }))
  .mock('inquirer-file-selector', () => ({
    fileSelector: jest.fn(),
    Item:         jest.fn(),
    ItemType:     jest.fn(),
    PromptConfig: jest.fn(),
  }))
  .mock('commander')
  .mock('app-root-path')
  .mock('node:fs')

console.log = jest.fn()
console.error = jest.fn()
console.warn = jest.fn()
console.debug = jest.fn()

process.env.JATO_AUTO_KV_NAME = 'keyvaultautomation1'
process.stdout.columns = 84
