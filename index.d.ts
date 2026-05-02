import {
    TAG_REGEX, OPENING_TAG_REGEX, TEXT_SNIPPET_RANGE, RECOMMENDED_THEME, CONFIG_KEYS, TAG_TYPES, TAG_DISPLAY_NAMES
} from './modules/constants.js';
import { generateTagDetailsHTML } from './modules/tagDetailsTemplate.js';
import { sanitizeTagName, isInsideTagPosition } from './modules/tagUtils.js';

// =================================== modules/constants.js ===================================
/**
 * ```js
 * // 文件导出内容
 * const TAG_REGEX;              // 用于匹配HTML自定义标签(开闭标签)的正则表达式
 * const OPENING_TAG_REGEX;      // 用于匹配HTML自定义标签(仅开标签)的正则表达式
 * const TEXT_SNIPPET_RANGE;     // 用于定义文本片段的范围
 * const RECOMMENDED_THEME;      // 用于定义推荐的主题
 * const CONFIG_KEYS = {};       // 用于定义配置键
 * const TAG_TYPES = {};         // 用于定义标签类型(OPENING/CLOSING)
 * const TAG_DISPLAY_NAMES = {}; // 用于定义标签显示名称(开标签/闭标签)
 * ```
 * >查看定义:@see {@link TAG_REGEX}、{@link OPENING_TAG_REGEX}、{@link TEXT_SNIPPET_RANGE}、{@link RECOMMENDED_THEME}、
 * {@link CONFIG_KEYS}、{@link TAG_TYPES}、{@link TAG_DISPLAY_NAMES}
 *
 */
declare module './modules/constants.js' {
    export * from './modules/constants.js';
}

// =================================== modules/tagDetailsTemplate.js ===================================
/**
 * ```js
 * // 文件导出内容
 * generateTagDetailsHTML(); // 用于生成HTML自定义标签的详细信息(包含标签类型、标签名称、标签属性、个数等)的HTML字符串
 * ```
 * >查看定义:@see {@link generateTagDetailsHTML}
 */
declare module './modules/tagDetailsTemplate.js' {
    export * from './modules/tagDetailsTemplate.js';
}

// =================================== modules/tagUtils.js ===================================
/**
 * ```js
 * // 文件导出内容
 * sanitizeTagName();     // 用于清理和转义标签名称
 * isInsideTagPosition(); // 用于检查位置是否在标签内部
 * ```
 * >查看定义:@see {@link sanitizeTagName}、{@link isInsideTagPosition}
 */
declare module './modules/tagUtils.js' {
    export * from './modules/tagUtils.js';
}