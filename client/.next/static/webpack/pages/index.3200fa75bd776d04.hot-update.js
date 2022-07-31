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

/***/ "./src/components/body/Body.js":
/*!*************************************!*\
  !*** ./src/components/body/Body.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/Login */ \"./src/components/body/auth/Login.js\");\n/* harmony import */ var _auth_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/Register */ \"./src/components/body/auth/Register.js\");\n/* harmony import */ var _auth_ActivationEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/ActivationEmail */ \"./src/components/body/auth/ActivationEmail.js\");\n/* harmony import */ var _utils_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/NotFound/NotFound */ \"./src/components/utils/NotFound/NotFound.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _body_auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../body/auth/ForgotPassword */ \"./src/components/body/auth/ForgotPassword.js\");\n/* harmony import */ var _body_auth_ResetPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../body/auth/ResetPassword */ \"./src/components/body/auth/ResetPassword.js\");\n/* harmony import */ var _body_profile_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../body/profile/Profile */ \"./src/components/body/profile/Profile.js\");\n/* harmony import */ var _body_profile_EditUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../body/profile/EditUser */ \"./src/components/body/profile/EditUser.js\");\n/* harmony import */ var _body_home_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../body/home/Home */ \"./src/components/body/home/Home.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Body() {\n    _s();\n    var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function(state) {\n        return state.auth;\n    });\n    var isLogged = auth.isLogged, isAdmin = auth.isAdmin;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/\",\n                    component: _body_home_Home__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/login\",\n                    component: isLogged ? _utils_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _auth_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/register\",\n                    component: isLogged ? _utils_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _auth_Register__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/forgot_password\",\n                    component: isLogged ? _utils_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _body_auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/user/reset/:token\",\n                    component: isLogged ? _utils_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _body_auth_ResetPassword__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/user/activate/:activation_token\",\n                    component: _auth_ActivationEmail__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/profile\",\n                    component: isLogged ? _body_profile_Profile__WEBPACK_IMPORTED_MODULE_9__[\"default\"] : _utils_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/edit_user/:id\",\n                    component: isAdmin ? _body_profile_EditUser__WEBPACK_IMPORTED_MODULE_10__[\"default\"] : _utils_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    exact: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PAKISTAN COMPUTER\\\\source\\\\repos\\\\resume-app\\\\client\\\\src\\\\components\\\\body\\\\Body.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, this);\n}\n_s(Body, \"SvwR9yfdOSlAizXx+1ujAxpoAFQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector\n    ];\n});\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNPO0FBQ007QUFDYztBQUNIO0FBQ3JCO0FBRXdCO0FBQ0Y7QUFFTDtBQUNFO0FBRVg7QUFFSzs7QUFFMUMsU0FBU1ksSUFBSSxHQUFHOztJQUNmLElBQU1DLElBQUksR0FBR0YseURBQVcsQ0FBQyxTQUFDRyxLQUFLO2VBQUtBLEtBQUssQ0FBQ0QsSUFBSTtLQUFBLENBQUM7SUFDL0MsSUFBUUUsUUFBUSxHQUFjRixJQUFJLENBQTFCRSxRQUFRLEVBQUVDLE9BQU8sR0FBS0gsSUFBSSxDQUFoQkcsT0FBTztJQUN6QixxQkFDQyw4REFBQ0MsU0FBTztrQkFDUDs7OEJBQ0MsOERBQUNaLGtEQUFJO29CQUFDYSxJQUFJLEVBQUMsR0FBRztvQkFBQ0MsU0FBUyxFQUFFVCx3REFBSTtvQkFBRVUsS0FBSzs7Ozs7d0JBQUc7OEJBRXhDLDhEQUFDZixrREFBSTtvQkFBQ2EsSUFBSSxFQUFDLFFBQVE7b0JBQUNDLFNBQVMsRUFBRUosUUFBUSxHQUFHWCxnRUFBUSxHQUFHSCxtREFBSztvQkFBRW1CLEtBQUs7Ozs7O3dCQUFHOzhCQUNwRSw4REFBQ2Ysa0RBQUk7b0JBQUNhLElBQUksRUFBQyxXQUFXO29CQUFDQyxTQUFTLEVBQUVKLFFBQVEsR0FBR1gsZ0VBQVEsR0FBR0Ysc0RBQVE7b0JBQUVrQixLQUFLOzs7Ozt3QkFBRzs4QkFFMUUsOERBQUNmLGtEQUFJO29CQUFDYSxJQUFJLEVBQUMsa0JBQWtCO29CQUFDQyxTQUFTLEVBQUVKLFFBQVEsR0FBR1gsZ0VBQVEsR0FBR0UsaUVBQVU7b0JBQUVjLEtBQUs7Ozs7O3dCQUFHOzhCQUNuRiw4REFBQ2Ysa0RBQUk7b0JBQUNhLElBQUksRUFBQyxvQkFBb0I7b0JBQUNDLFNBQVMsRUFBRUosUUFBUSxHQUFHWCxnRUFBUSxHQUFHRyxnRUFBUztvQkFBRWEsS0FBSzs7Ozs7d0JBQUc7OEJBRXBGLDhEQUFDZixrREFBSTtvQkFBQ2EsSUFBSSxFQUFDLGtDQUFrQztvQkFBQ0MsU0FBUyxFQUFFaEIsNkRBQWU7b0JBQUVpQixLQUFLOzs7Ozt3QkFBRzs4QkFFbEYsOERBQUNmLGtEQUFJO29CQUFDYSxJQUFJLEVBQUMsVUFBVTtvQkFBQ0MsU0FBUyxFQUFFSixRQUFRLEdBQUdQLDZEQUFPLEdBQUdKLGdFQUFRO29CQUFFZ0IsS0FBSzs7Ozs7d0JBQUc7OEJBQ3hFLDhEQUFDZixrREFBSTtvQkFBQ2EsSUFBSSxFQUFDLGdCQUFnQjtvQkFBQ0MsU0FBUyxFQUFFSCxPQUFPLEdBQUdQLCtEQUFRLEdBQUdMLGdFQUFRO29CQUFFZ0IsS0FBSzs7Ozs7d0JBQUc7O3dCQUM1RTs7Ozs7WUFDTSxDQUNUO0NBQ0Y7R0FyQlFSLElBQUk7O1FBQ0NELHFEQUFXOzs7QUFEaEJDLEtBQUFBLElBQUk7QUF1QmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanM/Yjc3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9hdXRoL0xvZ2luXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9hdXRoL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBBY3RpdmF0aW9uRW1haWwgZnJvbSBcIi4vYXV0aC9BY3RpdmF0aW9uRW1haWxcIjtcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuLi91dGlscy9Ob3RGb3VuZC9Ob3RGb3VuZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgRm9yZ290UGFzcyBmcm9tIFwiLi4vYm9keS9hdXRoL0ZvcmdvdFBhc3N3b3JkXCI7XHJcbmltcG9ydCBSZXNldFBhc3MgZnJvbSBcIi4uL2JvZHkvYXV0aC9SZXNldFBhc3N3b3JkXCI7XHJcblxyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vYm9keS9wcm9maWxlL1Byb2ZpbGVcIjtcclxuaW1wb3J0IEVkaXRVc2VyIGZyb20gXCIuLi9ib2R5L3Byb2ZpbGUvRWRpdFVzZXJcIjtcclxuXHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9ib2R5L2hvbWUvSG9tZVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIEJvZHkoKSB7XHJcblx0Y29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcblx0Y29uc3QgeyBpc0xvZ2dlZCwgaXNBZG1pbiB9ID0gYXV0aDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IGV4YWN0IC8+XHJcblxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjb21wb25lbnQ9e2lzTG9nZ2VkID8gTm90Rm91bmQgOiBMb2dpbn0gZXhhY3QgLz5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgY29tcG9uZW50PXtpc0xvZ2dlZCA/IE5vdEZvdW5kIDogUmVnaXN0ZXJ9IGV4YWN0IC8+XHJcblxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvZm9yZ290X3Bhc3N3b3JkXCIgY29tcG9uZW50PXtpc0xvZ2dlZCA/IE5vdEZvdW5kIDogRm9yZ290UGFzc30gZXhhY3QgLz5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3VzZXIvcmVzZXQvOnRva2VuXCIgY29tcG9uZW50PXtpc0xvZ2dlZCA/IE5vdEZvdW5kIDogUmVzZXRQYXNzfSBleGFjdCAvPlxyXG5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3VzZXIvYWN0aXZhdGUvOmFjdGl2YXRpb25fdG9rZW5cIiBjb21wb25lbnQ9e0FjdGl2YXRpb25FbWFpbH0gZXhhY3QgLz5cclxuXHJcblx0XHRcdFx0PExpbmsgaHJlZj1cIi9wcm9maWxlXCIgY29tcG9uZW50PXtpc0xvZ2dlZCA/IFByb2ZpbGUgOiBOb3RGb3VuZH0gZXhhY3QgLz5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2VkaXRfdXNlci86aWRcIiBjb21wb25lbnQ9e2lzQWRtaW4gPyBFZGl0VXNlciA6IE5vdEZvdW5kfSBleGFjdCAvPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMb2dpbiIsIlJlZ2lzdGVyIiwiQWN0aXZhdGlvbkVtYWlsIiwiTm90Rm91bmQiLCJMaW5rIiwiRm9yZ290UGFzcyIsIlJlc2V0UGFzcyIsIlByb2ZpbGUiLCJFZGl0VXNlciIsIkhvbWUiLCJ1c2VTZWxlY3RvciIsIkJvZHkiLCJhdXRoIiwic3RhdGUiLCJpc0xvZ2dlZCIsImlzQWRtaW4iLCJzZWN0aW9uIiwiaHJlZiIsImNvbXBvbmVudCIsImV4YWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/body/Body.js\n"));

/***/ })

});