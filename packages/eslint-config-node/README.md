# @nexterias/eslint-config-node

> **Warning** このパッケージは[@nexterias/eslint-config-common](https://npmjs.com/package/@nexterias/eslint-config-common)も合わせて使用する必要があります。

## Installation

```sh
# npm
npm i -D @nexterias/eslint-config-common @nexterias/eslint-config-node eslint

# yarn / berry
yarn add -D @nexterias/eslint-config-common @nexterias/eslint-config-node eslint

# pnpm
pnpm add -D @nexterias/eslint-config-common @nexterias/eslint-config-node eslint
```

## Configuration

```cjs
module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  extends: ['@nexterias/eslint-config-common', '@nexterias/eslint-config-node'],
}
```
