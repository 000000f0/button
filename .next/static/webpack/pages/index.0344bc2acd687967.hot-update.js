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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ChatModal = function(param) {\n    var isDarkMode = param.isDarkMode, onClose = param.onClose;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), newMessage = ref1[0], setNewMessage = ref1[1];\n    var chatHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var handleSendMessage = function() {\n        var _ref = _asyncToGenerator(_Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userMessage, serverEndpoint, response, botResponseText, botResponse;\n            return _Users_williedejongh_button_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(newMessage.trim() !== '')) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        userMessage = {\n                            text: newMessage,\n                            sender: 'user'\n                        };\n                        setMessages(_toConsumableArray(messages).concat([\n                            userMessage\n                        ]));\n                        setNewMessage('');\n                        _ctx.prev = 4;\n                        serverEndpoint = 'http://54.77.216.40:8000'; // Replace with your server's endpoint URL\n                        _ctx.next = 8;\n                        return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(serverEndpoint, {\n                            message: newMessage\n                        });\n                    case 8:\n                        response = _ctx.sent;\n                        botResponseText = response.data.bot_response;\n                        botResponse = {\n                            text: botResponseText,\n                            sender: 'bot'\n                        };\n                        setMessages(_toConsumableArray(messages).concat([\n                            botResponse\n                        ]));\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.error('Error:', _ctx.t0);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    14\n                ]\n            ]);\n        }));\n        return function handleSendMessage() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (chatHistoryRef.current) {\n            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;\n        }\n    }, [\n        messages\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"chat-modal \".concat(isDarkMode ? 'dark-mode' : ''),\n        style: {\n            backgroundColor: isDarkMode ? '#fff' : '#704214'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        style: {\n                            paddingLeft: '100px'\n                        },\n                        children: \"Chat History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: onClose,\n                        style: {\n                            backgroundColor: '#704214',\n                            color: 'white',\n                            border: 'none',\n                            padding: '5px 10px'\n                        },\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-history\",\n                ref: chatHistoryRef,\n                children: messages.map(function(message, index) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"message \".concat(message.sender),\n                        children: message.text\n                    }, index, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this1);\n                }).reverse()\n            }, void 0, false, {\n                fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"chat-input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message...\",\n                        value: newMessage,\n                        onChange: function(e) {\n                            return setNewMessage(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/williedejongh/button/pages/ChatModal.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this));\n};\n_s(ChatModal, \"wdtYmW0iSAWUs0oMTlIAe4VM/zY=\");\n_c = ChatModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatModal);\nvar _c;\n$RefreshReg$(_c, \"ChatModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DaGF0TW9kYWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixHQUFLLENBQUNLLFNBQVMsR0FBRyxRQUFRLFFBQXFCLENBQUM7UUFBM0JDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87OztJQUN0QyxHQUFLLENBQTJCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQXBDTyxRQUFRLEdBQWlCUCxHQUFZLEtBQTNCUSxXQUFXLEdBQUlSLEdBQVk7SUFDNUMsR0FBSyxDQUErQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBeENTLFVBQVUsR0FBbUJULElBQVksS0FBN0JVLGFBQWEsR0FBSVYsSUFBWTtJQUNoRCxHQUFLLENBQUNXLGNBQWMsR0FBR1YsNkNBQU0sQ0FBQyxJQUFJO0lBRWxDLEdBQUssQ0FBQ1csaUJBQWlCOzRLQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUU3QkMsV0FBVyxFQUtUQyxjQUFjLEVBQ2RDLFFBQVEsRUFDUkMsZUFBZSxFQUNmQyxXQUFXOzs7OzhCQVRqQlIsVUFBVSxDQUFDUyxJQUFJLE9BQU8sQ0FBRTs7Ozt3QkFDcEJMLFdBQVcsR0FBRyxDQUFDOzRCQUFDTSxJQUFJLEVBQUVWLFVBQVU7NEJBQUVXLE1BQU0sRUFBRSxDQUFNO3dCQUFDLENBQUM7d0JBQ3hEWixXQUFXLG9CQUFLRCxRQUFRLFNBQVosQ0FBQzs0QkFBYU0sV0FBVzt3QkFBQSxDQUFDO3dCQUN0Q0gsYUFBYSxDQUFDLENBQUU7O3dCQUdSSSxjQUFjLEdBQUcsQ0FBMEIsMEJBQUUsQ0FBMEM7OytCQUN0RVgsa0RBQVUsQ0FBQ1csY0FBYyxFQUFFLENBQUM7NEJBQUNRLE9BQU8sRUFBRWIsVUFBVTt3QkFBQyxDQUFDOzt3QkFBbkVNLFFBQVE7d0JBQ1JDLGVBQWUsR0FBR0QsUUFBUSxDQUFDUSxJQUFJLENBQUNDLFlBQVk7d0JBQzVDUCxXQUFXLEdBQUcsQ0FBQzs0QkFBQ0UsSUFBSSxFQUFFSCxlQUFlOzRCQUFFSSxNQUFNLEVBQUUsQ0FBSzt3QkFBQyxDQUFDO3dCQUM1RFosV0FBVyxvQkFBS0QsUUFBUSxTQUFaLENBQUM7NEJBQWFVLFdBQVc7d0JBQUEsQ0FBQzs7Ozs7O3dCQUV0Q1EsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7UUFHNUIsQ0FBQzt3QkFoQktkLGlCQUFpQjs7OztJQWtCdkJWLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFUyxjQUFjLENBQUNnQixPQUFPLEVBQUUsQ0FBQztZQUMzQmhCLGNBQWMsQ0FBQ2dCLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHakIsY0FBYyxDQUFDZ0IsT0FBTyxDQUFDRSxZQUFZO1FBQ3hFLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ3RCO1FBQUFBLFFBQVE7SUFBQSxDQUFDO0lBRWIsTUFBTSw2RUFDSHVCLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQVcsYUFBZ0MsT0FBOUIxQixVQUFVLEdBQUcsQ0FBVyxhQUFHLENBQUU7UUFBSTJCLEtBQUssRUFBRSxDQUFDQztZQUFBQSxlQUFlLEVBQUU1QixVQUFVLEdBQUUsQ0FBTSxRQUFHLENBQVM7UUFBQSxDQUFDOzt3RkFDcEh5QixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Z0dBQ3pCRyxDQUFFO3dCQUFDRixLQUFLLEVBQUUsQ0FBQ0c7NEJBQUFBLFdBQVcsRUFBQyxDQUFPO3dCQUFBLENBQUM7a0NBQUUsQ0FBWTs7Ozs7O2dHQUM3Q0MsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFL0IsT0FBTzt3QkFFeEIwQixLQUFLLEVBQUUsQ0FBQzs0QkFDTkMsZUFBZSxFQUFFLENBQVM7NEJBQzFCSyxLQUFLLEVBQUUsQ0FBTzs0QkFDZEMsTUFBTSxFQUFFLENBQU07NEJBQ2RDLE9BQU8sRUFBRSxDQUFVO3dCQUNyQixDQUFDO2tDQUdBLENBQUs7Ozs7Ozs7Ozs7Ozt3RkFFUFYsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWM7Z0JBQUNVLEdBQUcsRUFBRTlCLGNBQWM7MEJBQzlDSixRQUFRLENBQUNtQyxHQUFHLENBQUMsUUFBUSxDQUFQcEIsT0FBTyxFQUFFcUIsS0FBSztrQ0FDM0IsTUFBTSwrREFBTGIsQ0FBRzt3QkFBYUMsU0FBUyxFQUFHLENBQVEsVUFBaUIsT0FBZlQsT0FBTyxDQUFDRixNQUFNO2tDQUNsREUsT0FBTyxDQUFDSCxJQUFJO3VCQURMd0IsS0FBSzs7Ozs7bUJBR2RDLE9BQU87Ozs7Ozt3RkFFWGQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVk7O2dHQUN4QmMsQ0FBSzt3QkFDSkMsSUFBSSxFQUFDLENBQU07d0JBQ1hDLFdBQVcsRUFBQyxDQUFzQjt3QkFDbENDLEtBQUssRUFBRXZDLFVBQVU7d0JBQ2pCd0MsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBS3hDLE1BQU0sQ0FBTkEsYUFBYSxDQUFDd0MsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Z0dBRTlDWixDQUFNO3dCQUFDQyxPQUFPLEVBQUV6QixpQkFBaUI7a0NBQUUsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhELENBQUM7R0EvREtSLFNBQVM7S0FBVEEsU0FBUztBQWlFZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NoYXRNb2RhbC5qc3g/YjViNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ2hhdE1vZGFsID0gKHsgaXNEYXJrTW9kZSwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGNoYXRIaXN0b3J5UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChuZXdNZXNzYWdlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0geyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6ICd1c2VyJyB9O1xuICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCB1c2VyTWVzc2FnZV0pO1xuICAgICAgc2V0TmV3TWVzc2FnZSgnJyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlcnZlckVuZHBvaW50ID0gJ2h0dHA6Ly81NC43Ny4yMTYuNDA6ODAwMCc7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHNlcnZlcidzIGVuZHBvaW50IFVSTFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3Qoc2VydmVyRW5kcG9pbnQsIHsgbWVzc2FnZTogbmV3TWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgYm90UmVzcG9uc2VUZXh0ID0gcmVzcG9uc2UuZGF0YS5ib3RfcmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IGJvdFJlc3BvbnNlID0geyB0ZXh0OiBib3RSZXNwb25zZVRleHQsIHNlbmRlcjogJ2JvdCcgfTtcbiAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBib3RSZXNwb25zZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjaGF0SGlzdG9yeVJlZi5jdXJyZW50KSB7XG4gICAgICBjaGF0SGlzdG9yeVJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXRIaXN0b3J5UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfSwgW21lc3NhZ2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNoYXQtbW9kYWwgJHtpc0RhcmtNb2RlID8gJ2RhcmstbW9kZScgOiAnJ31gfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXNEYXJrTW9kZT8gJyNmZmYnIDogJyM3MDQyMTQnfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XG4gICAgICAgIDxoMiBzdHlsZT17e3BhZGRpbmdMZWZ0OicxMDBweCd9fT5DaGF0IEhpc3Rvcnk8L2gyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgIFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3MDQyMTQnLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gICAgICAgIH19XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPkNsb3NlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oaXN0b3J5XCIgcmVmPXtjaGF0SGlzdG9yeVJlZn0+XG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2BtZXNzYWdlICR7bWVzc2FnZS5zZW5kZXJ9YH0+XG4gICAgICAgICAgICB7bWVzc2FnZS50ZXh0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKS5yZXZlcnNlKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1pbnB1dFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0TW9kYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImF4aW9zIiwiQ2hhdE1vZGFsIiwiaXNEYXJrTW9kZSIsIm9uQ2xvc2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJjaGF0SGlzdG9yeVJlZiIsImhhbmRsZVNlbmRNZXNzYWdlIiwidXNlck1lc3NhZ2UiLCJzZXJ2ZXJFbmRwb2ludCIsInJlc3BvbnNlIiwiYm90UmVzcG9uc2VUZXh0IiwiYm90UmVzcG9uc2UiLCJ0cmltIiwidGV4dCIsInNlbmRlciIsInBvc3QiLCJtZXNzYWdlIiwiZGF0YSIsImJvdF9yZXNwb25zZSIsImNvbnNvbGUiLCJlcnJvciIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImgyIiwicGFkZGluZ0xlZnQiLCJidXR0b24iLCJvbkNsaWNrIiwiY29sb3IiLCJib3JkZXIiLCJwYWRkaW5nIiwicmVmIiwibWFwIiwiaW5kZXgiLCJyZXZlcnNlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ChatModal.jsx\n");

/***/ })

});