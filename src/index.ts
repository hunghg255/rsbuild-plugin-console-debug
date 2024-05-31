import type { RsbuildPlugin } from '@rsbuild/core';

import { resolvePackage } from '@rsbuild/shared';
import { startServer } from './server/server';
import { getRandomPort } from 'get-port-please';

export const pluginConsoleDebug = (): RsbuildPlugin => {
  return {
    name: 'rsbuild-plugin-console-debug',
    async setup(api) {
      if (
        api.context.bundlerType === 'webpack' ||
        process.env.NODE_ENV !== 'development'
      ) {
        return;
      }

      const port = await getRandomPort();

      api.onAfterStartDevServer(async () => {
        startServer(port);
      });

      api.modifyBundlerChain(async (chain, utils) => {
        chain.module
          .rule(utils.CHAIN_ID.RULE.JS)
          .test(/\.(j|t)sx?$/)
          .use(utils.CHAIN_ID.USE.TS)
          .loader(resolvePackage('./core/applyConsoleDebug.js', __dirname))
          .options({
            port,
          })
          .end();
      });
    },
  };
};
