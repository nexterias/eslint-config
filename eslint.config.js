// @ts-check

import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

import myConfig from './src/index.js'

export default tseslint.config(...myConfig, prettierConfig)
