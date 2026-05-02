// modules/constants.js

const TAG_REGEX = /\[([!~])([^\]\r\n]+)\]/g;
const OPENING_TAG_REGEX = /\[!([^\]\r\n]+)\]\s*$/;

const CONFIG_KEYS = {
    QUICK_SUGGESTIONS: 'quickSuggestions',
    SUGGEST_ON_TRIGGER: 'suggestOnTriggerCharacters',
    WORD_BASED: 'wordBasedSuggestions'
};

const TEXT_SNIPPET_RANGE = 20;

const TAG_TYPES = {
    OPENING: 'OPENING',
    CLOSING: 'CLOSING'
};

const TAG_DISPLAY_NAMES = {
    OPENING: '开标签',
    CLOSING: '闭标签'
};

const RECOMMENDED_THEME = 'Custom Tags Theme';

export { TAG_REGEX, OPENING_TAG_REGEX, CONFIG_KEYS, TEXT_SNIPPET_RANGE, TAG_TYPES, TAG_DISPLAY_NAMES, RECOMMENDED_THEME };