import type { RsbuildPlugin } from '@rsbuild/core';

import { resolvePackage } from '@rsbuild/shared';
import { startServer } from './server/server';

const PORT = 3070;

export const pluginConsoleDebug = (): RsbuildPlugin => {
  return {
    name: 'rsbuild-plugin-console-debug',
    setup(api) {
      if (
        api.context.bundlerType === 'webpack' ||
        process.env.NODE_ENV !== 'development'
      ) {
        return;
      }

      api.onAfterStartDevServer(({ port }) => {
        startServer(PORT);
      });

      api.modifyBundlerChain(async (chain, utils) => {
        chain.module
          .rule(utils.CHAIN_ID.RULE.TS)
          .test(/\.(tsx|ts)$/i)
          .use(utils.CHAIN_ID.RULE.TS)
          .loader(resolvePackage('./core/applyConsoleDebug.js', __dirname))
          .options({
            port: PORT,
          })
          .end();
      });
    },
  };
};
