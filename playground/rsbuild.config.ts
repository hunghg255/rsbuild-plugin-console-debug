import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import launchEditorMiddleware from 'launch-editor-middleware';
// import { pluginConsoleDebug } from '../src/index';
import { pluginConsoleDebug } from 'rsbuild-plugin-console-debug';

export default defineConfig({
  dev: {
    setupMiddlewares: [
      ({ unshift }, server) => {
        unshift((req, res, next) => {
          if (req.url.startsWith('/__open-in-editor')) {
            launchEditorMiddleware()(req, res, next);
            return;
          }

          next();
        });
      },
    ],
  },
  plugins: [pluginReact(), pluginConsoleDebug()],
});
