define("ff27d66d-4f07-4809-a9a0-d5d86e5519aa_0.0.1", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base","SpfxCabaUserModuleWebPartStrings","@microsoft/sp-lodash-subset"], function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_112__, __WEBPACK_EXTERNAL_MODULE_113__, __WEBPACK_EXTERNAL_MODULE_555__, __WEBPACK_EXTERNAL_MODULE_560__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 554);
/******/ })
/************************************************************************/
/******/ ({

/***/ 110:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_112__;

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_113__;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_webpart_base__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_webpart_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__microsoft_sp_webpart_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_SpfxCabaUserModuleWebPartStrings__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_SpfxCabaUserModuleWebPartStrings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_SpfxCabaUserModuleWebPartStrings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SpfxCabaUserModule__ = __webpack_require__(556);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SpfxCabaUserModuleWebPart = (function (_super) {
    __extends(SpfxCabaUserModuleWebPart, _super);
    function SpfxCabaUserModuleWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxCabaUserModuleWebPart.prototype.render = function () {
        var element = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_SpfxCabaUserModule__["a" /* default */], {
            description: this.properties.description
        });
        __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](element, this.domElement);
    };
    SpfxCabaUserModuleWebPart.prototype.onDispose = function () {
        __WEBPACK_IMPORTED_MODULE_1_react_dom__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(SpfxCabaUserModuleWebPart.prototype, "dataVersion", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxCabaUserModuleWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: __WEBPACK_IMPORTED_MODULE_4_SpfxCabaUserModuleWebPartStrings__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: __WEBPACK_IMPORTED_MODULE_4_SpfxCabaUserModuleWebPartStrings__["BasicGroupName"],
                            groupFields: [
                                Object(__WEBPACK_IMPORTED_MODULE_3__microsoft_sp_webpart_base__["PropertyPaneTextField"])('description', {
                                    label: __WEBPACK_IMPORTED_MODULE_4_SpfxCabaUserModuleWebPartStrings__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpfxCabaUserModuleWebPart;
}(__WEBPACK_IMPORTED_MODULE_3__microsoft_sp_webpart_base__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (SpfxCabaUserModuleWebPart);



/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_555__;

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_lodash_subset__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_lodash_subset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_lodash_subset__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SpfxCabaUserModule = (function (_super) {
    __extends(SpfxCabaUserModule, _super);
    function SpfxCabaUserModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxCabaUserModule.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].spfxCabaUserModule },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].container },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].row },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].column },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].title }, "Welcome to SharePoint!"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].subTitle }, "Customize SharePoint experiences using Web Parts."),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].description }, Object(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_lodash_subset__["escape"])(this.props.description)),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://aka.ms/spfx', className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].button },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1__SpfxCabaUserModule_module_scss__["a" /* default */].label }, "Learn more")))))));
    };
    return SpfxCabaUserModule;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (SpfxCabaUserModule);



/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(558);
var styles = {
    spfxCabaUserModule: 'spfxCabaUserModule_1712fdfe',
    container: 'container_1712fdfe',
    row: 'row_1712fdfe',
    column: 'column_1712fdfe',
    'ms-Grid': 'ms-Grid_1712fdfe',
    title: 'title_1712fdfe',
    subTitle: 'subTitle_1712fdfe',
    description: 'description_1712fdfe',
    button: 'button_1712fdfe',
    label: 'label_1712fdfe',
};
/* harmony default export */ __webpack_exports__["a"] = (styles);
/* tslint:enable */ 



/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(559);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// imports


// module
exports.push([module.i, ".spfxCabaUserModule_1712fdfe .container_1712fdfe{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.spfxCabaUserModule_1712fdfe .row_1712fdfe{margin:0 -8px;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";background-color:\"[theme:themeDark, default: #005a9e]\";padding:20px}.spfxCabaUserModule_1712fdfe .row_1712fdfe:after,.spfxCabaUserModule_1712fdfe .row_1712fdfe:before{display:table;content:\"\";line-height:0}.spfxCabaUserModule_1712fdfe .row_1712fdfe:after{clear:both}.spfxCabaUserModule_1712fdfe .column_1712fdfe{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .spfxCabaUserModule_1712fdfe .column_1712fdfe{float:left}[dir=rtl] .spfxCabaUserModule_1712fdfe .column_1712fdfe{float:right}.spfxCabaUserModule_1712fdfe .column_1712fdfe .ms-Grid_1712fdfe{padding:0}@media (min-width:640px){.spfxCabaUserModule_1712fdfe .column_1712fdfe{width:83.33333333333334%}}@media (min-width:1024px){.spfxCabaUserModule_1712fdfe .column_1712fdfe{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .spfxCabaUserModule_1712fdfe .column_1712fdfe{left:16.66667%}[dir=rtl] .spfxCabaUserModule_1712fdfe .column_1712fdfe{right:16.66667%}}@media (min-width:640px){[dir=ltr] .spfxCabaUserModule_1712fdfe .column_1712fdfe{left:8.33333%}[dir=rtl] .spfxCabaUserModule_1712fdfe .column_1712fdfe{right:8.33333%}}.spfxCabaUserModule_1712fdfe .title_1712fdfe{font-size:21px;font-weight:100;color:\"[theme:white, default: #ffffff]\"}.spfxCabaUserModule_1712fdfe .description_1712fdfe,.spfxCabaUserModule_1712fdfe .subTitle_1712fdfe{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.spfxCabaUserModule_1712fdfe .button_1712fdfe{text-decoration:none;height:32px;min-width:80px;background-color:\"[theme:themePrimary, default: #0078d7]\";border-color:\"[theme:themePrimary, default: #0078d7]\";color:\"[theme:white, default: #ffffff]\";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.spfxCabaUserModule_1712fdfe .button_1712fdfe .label_1712fdfe{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);

// exports


/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_560__;

/***/ })

/******/ })});;
//# sourceMappingURL=spfx-caba-user-module-web-part.js.map