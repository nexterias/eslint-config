'use strict'

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['eslint:recommended'],
  rules: {
    eqeqeq: ['error'],
    'dot-notation': ['error'],
    'no-eval': ['error'],
    'no-return-await': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    strict: ['error'],
    yoda: ['error', 'never'],
    'require-await': ['error'],
    'no-useless-return': ['error'],
    'no-useless-constructor': ['error'],
  },
}

module.exports = config
