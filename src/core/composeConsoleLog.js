const BaseURL = 'http://localhost:';
const middlewareName = '__open-in-editor';

/**
 *
 * @returns {string}
 */
function generateTime() {
  const date = new Date();
  const hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  const minutes =
    date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  const seconds =
    date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
  return `${hour}:${minutes}:${seconds}`;
}

/**
 *
 * @returns {string}
 */
function generateLogTitle() {
  return `"%c[CONSOLE-LINE - ${generateTime()}]:`;
}

/**
 *
 * @returns {string}
 */
function generateLogTitleStyle() {
  return `"color:#2EB086;padding:2px 5px;font-weight:700;"`;
}

/**
 *
 * @param {string} location
 * @returns {string}
 */
function generateFileLocation(location) {
  return `%cFile: ${location}  `;
}

/**
 *
 * @returns {string}
 */
function generateFileLocationStyle() {
  return `"color: #3AB4F2;"`;
}

/**
 *
 * @param {number}} lineCount
 * @returns {string}
 */
function generateLine(lineCount) {
  return `%cLine: ${lineCount}\\n`;
}

function generateLineStyle() {
  return `"color: #F4CE14;"`;
}

/**
 *
 * @param {number|string} port
 * @param {string} filePath
 * @returns {string}
 */
function generateAddress(port, filePath) {
  return `%cJump to: ${BaseURL + port}/${middlewareName}?file=${filePath}\\n`;
}

/**
 *
 * @returns {string}
 */
function generateAddressStyle() {
  return `"color: #6664C2;"`;
}

/**
 *
 * @returns {string}
 */
function generateNewLine() {
  return '%c\\n"';
}

/**
 *
 * @returns {string}
 */
function generateNewLineStyle() {
  return `"color: inherit"`;
}

/**
 * @param {Object} components
 * @param {string} components.prefix
 * @param {string} components.suffix
 * @param {string} components.fileRelativePath
 * @param {string} components.fileAbsolutePath
 * @param {number} components.lineCount
 * @param {number} components.endCloumn
 * @param {number|string} components.port
 * @param {boolean} components.jump
 * @returns {string}
 */
module.exports.composeConsoleLog = function composeConsoleLog(components) {
  const {
    prefix,
    suffix,
    fileRelativePath,
    fileAbsolutePath,
    lineCount,
    endCloumn,
    port,
    jump,
  } = components;
  return `${
    prefix +
    generateLogTitle() +
    generateFileLocation(fileRelativePath) +
    generateLine(lineCount) +
    (jump
      ? generateAddress(
          port,
          encodeURIComponent(`${fileAbsolutePath}:${lineCount}:${endCloumn}`),
        )
      : '') +
    `${generateNewLine()},` +
    `${generateLogTitleStyle()},` +
    `${generateFileLocationStyle()},` +
    `${generateLineStyle()},` +
    (jump ? `${generateAddressStyle()},` : '') +
    `${generateNewLineStyle()},` +
    suffix
  }`;
}
