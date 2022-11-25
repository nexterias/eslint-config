# @nexterias/eslint-config-common

ESLint rules for NEXTERIAS

> **Note** コードフォーマッターとして[Prettier](https://npmjs.com/package/prettier)を使用することをオススメします。

## Installation

```sh
# npm
npm i -D @nexterias/eslint-config-common eslint

# yarn / berry
yarn add -D @nexterias/eslint-config-common eslint

# pnpm
pnpm add -D @nexterias/eslint-config-common eslint
```

## Configuration

```cjs
module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['@nexterias/eslint-config-common'],
}
```

## Optional rules

- [@nexterias/eslint-config-typescript](https://npmjs.com/package/@nexterias/eslint-config-typescript)
- [@nexterias/eslint-config-react](https://npmjs.com/package/@nexterias/eslint-config-react)
- [@nexterias/eslint-config-node](https://npmjs.com/package/@nexterias/eslint-config-node)
