"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/ChatModal.jsx":
/*!*****************************!*\
  !*** ./pages/ChatModal.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ChatModal = function(param) {\n    var isDarkMode = param.isDarkMode, onClose = param.onClose;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), newMessage = ref1[0], setNewMessage = ref1[1];\n    var chatHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var handleSendMessage = function() {\n        var _ref = _asyncToGenerator(_Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userMessage, serverEndpoint, response, botResponseText, botResponse;\n            return _Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(newMessage.trim() !== '')) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        userMessage = {\n                            text: newMessage,\n                            sender: 'user'\n                        };\n                        setMessages(_toConsumableArray(messages).concat([\n                            userMessage\n                        ]));\n                        setNewMessage('');\n                        _ctx.prev = 4;\n                        serverEndpoint = 'http://54.77.216.40:8000'; // Replace with your server's endpoint URL\n                        _ctx.next = 8;\n                        return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(serverEndpoint, {\n                            message: newMessage\n                        });\n                    case 8:\n                        response = _ctx.sent;\n                        botResponseText = response.data.bot_response;\n                        botResponse = {\n                            text: botResponseText,\n                            sender: 'bot'\n                        };\n                        setMessages(_toConsumableArray(messages).concat([\n                            botResponse\n                        ]));\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.error('Error:', _ctx.t0);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    14\n                ]\n            ]);\n        }));\n        return function handleSendMessage() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (chatHistoryRef.current) {\n            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;\n        }\n    }, [\n        messages\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"chat-modal \".concat(isDarkMode ? 'dark-mode' : ''),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        style: {\n                            paddingLeft: '50px'\n                        },\n                        children: \"Chat History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: onClose,\n                        style: {\n                            backgroundColor: '#704214',\n                            color: 'white',\n                            border: 'none',\n                            padding: '10px 10px'\n                        },\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-history\",\n                ref: chatHistoryRef,\n                children: messages.map(function(message, index) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"message \".concat(message.sender),\n                        children: message.text\n                    }, index, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this1);\n                }).reverse()\n            }, void 0, false, {\n                fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message...\",\n                        value: newMessage,\n                        onChange: function(e) {\n                            return setNewMessage(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this));\n};\n_s(ChatModal, \"wdtYmW0iSAWUs0oMTlIAe4VM/zY=\");\n_c = ChatModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatModal);\nvar _c;\n$RefreshReg$(_c, \"ChatModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ21DLEdBQUcsQ0FBQyxRQUFRLENBQVBwQixPQUFPLEVBQUVxQixLQUFLO2tDQUMzQixNQUFNLCtEQUFMYixDQUFHO3dCQUFhQyxTQUFTLEVBQUcsQ0FBUSxVQUFpQixPQUFmVCxPQUFPLENBQUNGLE1BQU07a0NBQ2xERSxPQUFPLENBQUNILElBQUk7dUJBREx3QixLQUFLOzs7OzttQkFHZEMsT0FBTzs7Ozs7O3dGQUVYZCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Z0dBQ3hCYyxDQUFLO3dCQUNKQyxJQUFJLEVBQUMsQ0FBTTt3QkFDWEMsV0FBVyxFQUFDLENBQXNCO3dCQUNsQ0MsS0FBSyxFQUFFdkMsVUFBVTt3QkFDakJ3QyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLeEMsTUFBTSxDQUFOQSxhQUFhLENBQUN3QyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OztnR0FFOUNiLENBQU07d0JBQUNDLE9BQU8sRUFBRXhCLGlCQUFpQjtrQ0FBRSxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQS9ES1IsU0FBUztLQUFUQSxTQUFTO0FBaUVmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdE1vZGFsLmpzeD9iNWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDaGF0TW9kYWwgPSAoeyBpc0RhcmtNb2RlLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgY2hhdEhpc3RvcnlSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSB7IHRleHQ6IG5ld01lc3NhZ2UsIHNlbmRlcjogJ3VzZXInIH07XG4gICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHVzZXJNZXNzYWdlXSk7XG4gICAgICBzZXROZXdNZXNzYWdlKCcnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VydmVyRW5kcG9pbnQgPSAnaHR0cDovLzU0Ljc3LjIxNi40MDo4MDAwJzsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgc2VydmVyJ3MgZW5kcG9pbnQgVVJMXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChzZXJ2ZXJFbmRwb2ludCwgeyBtZXNzYWdlOiBuZXdNZXNzYWdlIH0pO1xuICAgICAgICBjb25zdCBib3RSZXNwb25zZVRleHQgPSByZXNwb25zZS5kYXRhLmJvdF9yZXNwb25zZTtcbiAgICAgICAgY29uc3QgYm90UmVzcG9uc2UgPSB7IHRleHQ6IGJvdFJlc3BvbnNlVGV4dCwgc2VuZGVyOiAnYm90JyB9O1xuICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIGJvdFJlc3BvbnNlXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYXRIaXN0b3J5UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNoYXRIaXN0b3J5UmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gY2hhdEhpc3RvcnlSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LCBbbWVzc2FnZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hhdC1tb2RhbCAke2lzRGFya01vZGUgPyAnZGFyay1tb2RlJyA6ICcnfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxuICAgICAgICA8aDIgc3R5bGU9e3twYWRkaW5nTGVmdDonNTBweCd9fT5DaGF0IEhpc3Rvcnk8L2gyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgIFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3MDQyMTQnLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDEwcHgnLFxuICAgICAgICB9fVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgID5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGlzdG9yeVwiIHJlZj17Y2hhdEhpc3RvcnlSZWZ9PlxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgbWVzc2FnZSAke21lc3NhZ2Uuc2VuZGVyfWB9PlxuICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSkucmV2ZXJzZSgpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW5wdXRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9PlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdE1vZGFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkNoYXRNb2RhbCIsImlzRGFya01vZGUiLCJvbkNsb3NlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiY2hhdEhpc3RvcnlSZWYiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInVzZXJNZXNzYWdlIiwic2VydmVyRW5kcG9pbnQiLCJyZXNwb25zZSIsImJvdFJlc3BvbnNlVGV4dCIsImJvdFJlc3BvbnNlIiwidHJpbSIsInRleHQiLCJzZW5kZXIiLCJwb3N0IiwibWVzc2FnZSIsImRhdGEiLCJib3RfcmVzcG9uc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdHlsZSIsInBhZGRpbmdMZWZ0IiwiYnV0dG9uIiwib25DbGljayIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsInJlZiIsIm1hcCIsImluZGV4IiwicmV2ZXJzZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ChatModal.jsx\n");

/***/ })

});