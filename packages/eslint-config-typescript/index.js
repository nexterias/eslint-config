'use strict'

/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/array-type': [
          'error',
          { default: 'generic', readonly: 'generic' },
        ],
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-indexed-object-style': [
          'error',
          'record',
        ],
        '@typescript-eslint/consistent-type-exports': [
          'error',
          { fixMixedExportsWithInlineTypeSpecifier: false },
        ],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
          },
        ],
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      },
    },
  ],
}

module.exports = config
