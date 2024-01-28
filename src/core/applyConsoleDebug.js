const { parseSync, traverse } = require('@babel/core');
const { composeConsoleLog } = require('./composeConsoleLog');
const path = require('path');
const { default: MagicString } = require('magic-string');

module.exports = function (content) {
  const s = new MagicString(content);

  const { port } = this.getOptions();
  const id = this.resourcePath;
  const projectDir = path.join(process.cwd());
  const fileRelativePath = id.replace(projectDir.replace(/\\/g, '/'), '');

  const ast = parseSync(content, {
    configFile: false,
    filename: id,
    ast: true,
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  });

  traverse(ast, {
    enter({ node }) {
      if (
        node.type === 'MemberExpression' &&
        node.object.name === 'console' &&
        node.property.name === 'log'
      ) {
        const c = composeConsoleLog({
          fileRelativePath,
          fileAbsolutePath: id,
          lineCount: node.loc.start.line,
          endCloumn: node.property.loc.end.column,
          port: port,
        });

        s.appendLeft(node.start + 12, c);
      }
    },
  });

  return s.toString();
};
