'use strict'

/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    commonjs: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script',
  },
  extends: [
    require.resolve('@nexterias/eslint-config-common'),
    require.resolve('@nexterias/eslint-config-node'),
  ],
  rules: {
    'n/no-unpublished-require': [
      'error',
      {
        allowModules: [
          '@nexterias/eslint-config-node',
          '@nexterias/eslint-config-common',
        ],
      },
    ],
  },
}

module.exports = config
