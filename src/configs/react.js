// @ts-check

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPluginRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

const files = [
  'js',
  'mjs',
  'cjs',
  'jsx',
  'mjsx',
  'ts',
  'mts',
  'cts',
  'tsx',
  'mtsx',
].map((ext) => `**/*.${ext}`)

/** @satisfies {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files,
    ...reactPluginRecommended,
  },

  // react-hooks
  {
    files,
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },

  // jsx-a11y
  {
    files: files.filter((it) => it.endsWith('sx')), // only for jsx and tsx files
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      ...jsxA11yPlugin.configs.strict.rules,
    },
  },
]

export default config
