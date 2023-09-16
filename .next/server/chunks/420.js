"use strict";
exports.id = 420;
exports.ids = [420];
exports.modules = {

/***/ 420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ChatModal = ({ isDarkMode , onClose  })=>{
    const { 0: messages , 1: setMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: newMessage , 1: setNewMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const chatHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleSendMessage = async ()=>{
        if (newMessage.trim() !== '') {
            const userMessage = {
                text: newMessage,
                sender: 'user'
            };
            // Update the chat history by appending the user's message
            setMessages((prevMessages)=>[
                    ...prevMessages,
                    userMessage
                ]
            );
            setNewMessage('');
            try {
                const serverEndpoint = 'https://deva.ark4.xyz'; // Update with your server URL
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(serverEndpoint, {
                    user_input: newMessage
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const botResponseText = response.data.response;
                const botResponse = {
                    text: botResponseText,
                    sender: 'bot'
                };
                // Append the bot's response to the chat history
                setMessages((prevMessages)=>[
                        ...prevMessages,
                        botResponse
                    ]
                );
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `chat-modal ${isDarkMode ? 'dark-mode' : ''}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chat-header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Chat History"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: onClose,
                        children: "Close"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "chat-history",
                ref: chatHistoryRef,
                children: messages.map((message, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `message ${message.sender}`,
                        children: message.text
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chat-input",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Type your message...",
                        value: newMessage,
                        onChange: (e)=>setNewMessage(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleSendMessage,
                        children: "Send"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;