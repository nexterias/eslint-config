'use strict'

/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    commonjs: true,
    es2022: true,
    node: true,
  },
  extends: [require.resolve('@nexterias/eslint-config-common')],
}

module.exports = config
