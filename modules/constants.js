/**
 * HTML自定义标签正则表达式([!开标签名]/[~闭标签名])
 * >查看定义:@see {@link TAG_REGEX}
 */
const TAG_REGEX = /\[([!~])([^\]\r\n]+)\]/g;
/**
 * HTML自定义标签正则表达式(仅开标签)
 * >查看定义:@see {@link OPENING_TAG_REGEX}
 */
const OPENING_TAG_REGEX = /\[!([^\]\r\n]+)\]\s*$/;
/**
 * 文本片段范围
 * >查看定义:@see {@link TEXT_SNIPPET_RANGE}
 */
const TEXT_SNIPPET_RANGE = 20;
/**
 * 当前包主题(用于突出显示自定义标签,并支持大部分语言的语法高亮)
 * >查看定义:@see {@link RECOMMENDED_THEME}
 */
const RECOMMENDED_THEME = 'Custom Tags Theme';

/**
 * 配置键映射表
 *
 * 存储与 VSCode 编辑器自动补全相关的三个设置项的键名，
 * 用于在自定义标签内部临时禁用建议,离开后恢复原始值。
 *
 * @property {string} QUICK_SUGGESTIONS   - 对应 editor.quickSuggestions,控制键入时是否自动弹出建议
 * @property {string} SUGGEST_ON_TRIGGER  - 对应 editor.suggestOnTriggerCharacters,控制输入触发字符（如 . " 等）时是否显示建议
 * @property {string} WORD_BASED          - 对应 editor.wordBasedSuggestions,控制是否启用基于文档已有单词的补全
 */
const CONFIG_KEYS = {
    QUICK_SUGGESTIONS: 'quickSuggestions',
    SUGGEST_ON_TRIGGER: 'suggestOnTriggerCharacters',
    WORD_BASED: 'wordBasedSuggestions'
};

/**
 * 标签类型(OPENING/CLOSING)
 * >查看定义:@see {@link TAG_TYPES}
 */
const TAG_TYPES = {
    OPENING: 'OPENING',
    CLOSING: 'CLOSING'
};

/**
 * 标签显示的名称(开标签/闭标签)
 * >查看定义:@see {@link TAG_DISPLAY_NAMES}
 */
const TAG_DISPLAY_NAMES = {
    OPENING: '开标签',
    CLOSING: '闭标签'
};

export { TAG_REGEX, OPENING_TAG_REGEX, TEXT_SNIPPET_RANGE, RECOMMENDED_THEME, CONFIG_KEYS, TAG_TYPES, TAG_DISPLAY_NAMES };