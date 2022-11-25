'use strict'

/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['n'],
  extends: [require.resolve('.'), 'plugin:n/recommended-module'],
}

module.exports = config
