// modules/tagUtils.js

const sanitizeTagName = (name) => name.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');

const isInsideTagPosition = (text, char, tagPrefix) => {
    const tagIndex = text.indexOf(tagPrefix);
    if (tagIndex === -1) return false;

    const tagEnd = text.indexOf(']', tagIndex);
    return tagEnd !== -1 && char >= tagIndex && char <= tagEnd + 1;
};

export { sanitizeTagName, isInsideTagPosition };