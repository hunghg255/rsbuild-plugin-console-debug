const BaseURL = 'http://localhost:';
const middlewareName = 'client';

/**
 *
 * @param {string} location
 * @returns {string}
 */
function generateFileLocation(location) {
  return `%c 📜 ${location.split('/').pop()}`;
}

/**
 *
 * @param {number|string} port
 * @param {string} filePath
 * @returns {string}
 */
function generateAddress(port, filePath) {
  return `%c 🚀 ${BaseURL + port}/${middlewareName}#${Buffer.from(
    filePath,
    'utf-8',
  ).toString('base64')}`;
}

const getColor = (file) => {
  if (file.includes('ts') || file.includes('tsx')) {
    return 'background:#3fabf3;color:white;';
  }

  if (file.includes('js') || file.includes('jsx')) {
    return 'background:#f1e05a;color:black;';
  }

  return 'background:#80BCBD;color:black;';
};

/**
 * @param {Object} components
 * @param {string} components.fileRelativePath
 * @param {string} components.fileAbsolutePath
 * @param {number} components.lineCount
 * @param {number} components.endCloumn
 * @param {number|string} components.port
 * @returns {string}
 */
module.exports.composeConsoleLog = function composeConsoleLog(components) {
  const { fileRelativePath, fileAbsolutePath, lineCount, endCloumn, port } =
    components;

  return `"${generateFileLocation(
    fileRelativePath,
  )}:${lineCount} ${generateAddress(
    port,
    encodeURIComponent(`${fileAbsolutePath}:${lineCount}:${endCloumn}`),
  )}", "${getColor(
    fileRelativePath,
  )}padding:4px 1px;border-radius:4px 0 0 4px;", "background:#607274;color:white;padding:4px 1px;border-radius:0 4px 4px 0;", \n`;
};
