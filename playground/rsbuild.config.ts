import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginConsoleDebug } from 'rsbuild-plugin-console-debug';

export default defineConfig({
  plugins: [pluginReact(), pluginConsoleDebug()],
});
