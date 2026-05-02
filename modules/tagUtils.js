/**
 * 清理和转义标签名称
 * >查看定义:@see {@link sanitizeTagName}
 * @param {string} name - 标签名称
 * @returns {string} 转义后的标签名称
 */
const sanitizeTagName = name => name.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * 检查位置是否在标签内部
 * >查看定义:@see {@link isInsideTagPosition}
 * @param {string} text - 文本内容
 * @param {number} char - 字符位置
 * @param {string} tagPrefix - 标签前缀
 * @returns {boolean} 是否在标签内部
 */
const isInsideTagPosition = (text, char, tagPrefix) => {
    const tagIndex = text.indexOf(tagPrefix);
    if (tagIndex === -1) return false;

    const tagEnd = text.indexOf(']', tagIndex);
    return tagEnd !== -1 && char >= tagIndex && char <= tagEnd + 1;
};

export { sanitizeTagName, isInsideTagPosition };