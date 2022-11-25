'use strict'

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react-hooks/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // TODO: Write rules.
  },
}

module.exports = config
