<p align="center">
<a href="https://www.npmjs.com/package/rsbuild-plugin-console-debug" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/bi:plugin.svg?color=%23bbeea0" alt="logo" width='100'/></a>
</p>

<p align="center">
  A plugin console debug for <a href="https://rsbuild.dev" target="_blank" rel="noopener noreferrer">Rsbuild</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rsbuild-plugin-console-debug" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/rsbuild-plugin-console-debug.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/rsbuild-plugin-console-debug" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/rsbuild-plugin-console-debug.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=rsbuild-plugin-console-debug" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/rsbuild-plugin-console-debug" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/rsbuild-plugin-console-debug/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/rsbuild-plugin-console-debug/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/rsbuild-plugin-console-debug" alt="License" /></a>
</p>

## Install

```bash
npm i rsbuild-plugin-console-debug -D
```

<details>
<summary>Rsbuild</summary><br>

```ts
// rsbuild.config.ts
import { pluginConsoleDebug } from 'rsbuild-plugin-console-debug';

export default defineConfig({
  plugins: [
    pluginConsoleDebug(),
  ],
});
```

Example: [`playground/`](./playground/)

<br></details>

## Reference

- [Rsbuild](https://rsbuild.dev/)

## Demo

![demo](./assets/demo.png)
