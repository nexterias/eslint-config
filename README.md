# @nexterias/eslint-config

ESLint configuration for NEXTERIAS projects

## Quick start

### 1. Installation

```bash
$ npm i -D eslint @nexterias/eslint-config
$ pnpm i -D eslint @nexterias/eslint-config
$ bun add -D eslint @nexterias/eslint-config
$ yarn add -D eslint @nexterias/eslint-config
```

### 2. Configuration

Paste the code below into eslint.config.js!

```js
import config from '@nexterias/eslint-config'

export default config
```

## Presets

### React

```bash
$ npm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
$ pnpm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
$ bun add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
$ yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

```js
import config from '@nexterias/eslint-config'
import react from '@nexterias/eslint-config/presets/react'

export default [...config, ...react]
```
