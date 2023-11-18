import type { RsbuildPlugin } from '@rsbuild/core';

import { resolvePackage } from '@rsbuild/shared';

export const pluginConsoleDebug = (): RsbuildPlugin => {
  return {
    name: 'rsbuild-plugin-console-debug',
    setup(api) {
      if (api.context.bundlerType === 'webpack' || process.env.NODE_ENV !== 'development') {
        return;
      }

      // FIX: not work when modify devServer
      // api.modifyRsbuildConfig((config) => {
      //   const setupMiddlewares = config.dev?.setupMiddlewares || [];

      //   setConfig(config, 'dev.setupMiddlewares', [
      //     ...setupMiddlewares,
      //     ({ unshift }, server) => {
      //       unshift((req, res, next) => {
      //         if (req.url.startsWith('/__open-in-editor1')) {
      //           launchEditorMiddleware()(req, res, next);
      //           return;
      //         }

      //         next();
      //       });
      //     },
      //   ]);
      //   setConfig(config, 'dev.port', 3000)

      //   return config;
      // });

      api.modifyBundlerChain(async (chain, utils) => {
        chain.module
          .rule(utils.CHAIN_ID.RULE.TS)
          .test(/\.(tsx|ts)$/i)
          .use(utils.CHAIN_ID.RULE.TS)
          .loader(resolvePackage('./core/applyConcoleDebug.js', __dirname))
          .options({
            port: api.context?.devServer?.port || 8080,
          })
          .end();
      });
    },
  };
};
