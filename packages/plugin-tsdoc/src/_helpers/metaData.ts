class MetaData {
  url () {
    const url = `https://er-tech.github.io/eslint/packages/plugin-tsdoc/src/rules/${this.#ruleName}/`

    return url
  }

  get #ruleName () {
    // eslint-disable-next-line unicorn/error-message
    const error = new Error()

    Error.prepareStackTrace = (_, stack) => stack

    const stack = error.stack as unknown as any[]

    Error.prepareStackTrace = undefined as any

    return stack[1].getFileName().split('.')[0]
  }
}

const metaData = new MetaData()
export { metaData }
