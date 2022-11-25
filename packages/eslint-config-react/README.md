# @nexterias/eslint-config-react

> **Warning** このパッケージは[@nexterias/eslint-config-common](https://npmjs.com/package/@nexterias/eslint-config-common)も合わせて使用する必要があります。

## Installation

```sh
npm i -D @nexterias/eslint-config-common @nexterias/eslint-config-react

# Yarn
yarn add -D @nexterias/eslint-config-common @nexterias/eslint-config-react

# pnpm
pnpm add -D @nexterias/eslint-config-common @nexterias/eslint-config-react
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
  extends: [
    '@nexterias/eslint-config-common',
    '@nexterias/eslint-config-react',
  ],
}
```
