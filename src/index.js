// @ts-check

import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // eslint
  eslint.configs.recommended,

  // typescript-eslint
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },

  // simple-import-sort plugin
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  // disable type-checking for js files
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
    ...tseslint.configs.disableTypeChecked,
  },

  // prettier
  prettierConfig
)
