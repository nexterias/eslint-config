# @nexterias/eslint-config-typescript

> **Warning** このパッケージは[@nexterias/eslint-config-common](https://npmjs.com/package/@nexterias/eslint-config-common)も合わせて使用する必要があります。

## Installation

```sh
# npm
npm i -D @nexterias/eslint-config-common @nexterias/eslint-config-typescript typescript eslint

# yarn / berry
yarn add -D @nexterias/eslint-config-common @nexterias/eslint-config-typescript typescript eslint

# pnpm
pnpm add -D @nexterias/eslint-config-common @nexterias/eslint-config-typescript typescript eslint
```

## Configuration

```cjs
module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  extends: [
    '@nexterias/eslint-config-common',
    '@nexterias/eslint-config-typescript',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2022,
  },
}
```
