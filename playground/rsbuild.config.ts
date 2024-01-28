import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginConsoleDebug } from '../src/index';

export default defineConfig({
  plugins: [pluginReact(), pluginConsoleDebug()],
});
