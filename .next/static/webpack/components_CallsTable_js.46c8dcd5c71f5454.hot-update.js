"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_CallsTable_js",{

/***/ "./components/ClientCallRow.js":
/*!*************************************!*\
  !*** ./components/ClientCallRow.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Chip,TableCell,TableRow!=!@mui/material */ \"__barrel_optimize__?names=Chip,TableCell,TableRow!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _hooks_useTotalCallDuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useTotalCallDuration */ \"./hooks/useTotalCallDuration.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ClientCallRow = (param)=>{\n    let { call, allCalls } = param;\n    _s();\n    console.log(\"All Calls:\", allCalls);\n    const totalDurations = (0,_hooks_useTotalCallDuration__WEBPACK_IMPORTED_MODULE_1__.useTotalCallDuration)(allCalls);\n    const getStatusLabel = (status)=>{\n        switch(status){\n            case \"Completed\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip, {\n                    label: \"Completed\",\n                    sx: {\n                        minWidth: \"90px\",\n                        backgroundColor: \"#dcfce7\",\n                        color: \"#166534\",\n                        border: \"1px solid #86efac\",\n                        \"&:hover\": {\n                            backgroundColor: \"#bbf7d0\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, undefined);\n            case \"Pending\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip, {\n                    label: \"Pending\",\n                    sx: {\n                        minWidth: \"90px\",\n                        backgroundColor: \"#fef9c3\",\n                        color: \"#854d0e\",\n                        border: \"1px solid #fde047\",\n                        \"&:hover\": {\n                            backgroundColor: \"#fef08a\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined);\n            case \"Failed\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip, {\n                    label: \"Failed\",\n                    sx: {\n                        minWidth: \"90px\",\n                        backgroundColor: \"#fee2e2\",\n                        color: \"#991b1b\",\n                        border: \"1px solid #fca5a5\",\n                        \"&:hover\": {\n                            backgroundColor: \"#fecaca\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip, {\n                    label: \"Unknown\",\n                    sx: {\n                        minWidth: \"90px\",\n                        backgroundColor: \"#f8fafc\",\n                        color: \"#64748b\",\n                        border: \"1px solid #cbd5e1\",\n                        \"&:hover\": {\n                            backgroundColor: \"#f1f5f9\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n        sx: {\n            \"&:hover\": {\n                backgroundColor: \"#f8fafc\",\n                transition: \"background-color 0.2s ease-in-out\"\n            },\n            \"& td\": {\n                borderBottom: \"1px solid #e2e8f0\",\n                color: \"#475569\",\n                padding: \"16px\"\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: call.call_id\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: getStatusLabel(call.call_status)\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: new Date(call.start_timestamp).toLocaleString()\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: call.duration\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: call.customer_name\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: [\n                    \"$\",\n                    call.combined_cost.toFixed(2)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                sx: {\n                    maxWidth: \"200px\",\n                    overflow: \"hidden\",\n                    textOverflow: \"ellipsis\",\n                    whiteSpace: \"nowrap\"\n                },\n                children: call.call_summary\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: call.user_sentiment\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip, {\n                    label: call.call_successful ? \"Yes\" : \"No\",\n                    size: \"small\",\n                    sx: {\n                        backgroundColor: call.call_successful ? \"#dcfce7\" : \"#fee2e2\",\n                        color: call.call_successful ? \"#166534\" : \"#991b1b\",\n                        fontWeight: 500\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: call.agent_task_completion_rating\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: call.call_completion_rating\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Chip_TableCell_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                children: totalDurations === null || totalDurations === void 0 ? void 0 : totalDurations[call.customer_name]\n            }, void 0, false, {\n                fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sofiaetchepare/Gritppo/grit-webhook/components/ClientCallRow.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ClientCallRow, \"wyfGwbo1kYnqhxsQyKituNODOWU=\", false, function() {\n    return [\n        _hooks_useTotalCallDuration__WEBPACK_IMPORTED_MODULE_1__.useTotalCallDuration\n    ];\n});\n_c = ClientCallRow;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientCallRow);\nvar _c;\n$RefreshReg$(_c, \"ClientCallRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsaWVudENhbGxSb3cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNXO0FBRXJFLE1BQU1JLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFOztJQUN2Q0MsUUFBUUMsR0FBRyxDQUFDLGNBQWNGO0lBQzFCLE1BQU1HLGlCQUFpQk4saUZBQW9CQSxDQUFDRztJQUU1QyxNQUFNSSxpQkFBaUIsQ0FBQ0M7UUFDdEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDVCw2RkFBSUE7b0JBQ0hVLE9BQU07b0JBQ05DLElBQUk7d0JBQ0ZDLFVBQVU7d0JBQ1ZDLGlCQUFpQjt3QkFDakJDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1IsV0FBVzs0QkFDVEYsaUJBQWlCO3dCQUNuQjtvQkFDRjs7Ozs7O1lBR04sS0FBSztnQkFDSCxxQkFDRSw4REFBQ2IsNkZBQUlBO29CQUNIVSxPQUFNO29CQUNOQyxJQUFJO3dCQUNGQyxVQUFVO3dCQUNWQyxpQkFBaUI7d0JBQ2pCQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSLFdBQVc7NEJBQ1RGLGlCQUFpQjt3QkFDbkI7b0JBQ0Y7Ozs7OztZQUdOLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNiLDZGQUFJQTtvQkFDSFUsT0FBTTtvQkFDTkMsSUFBSTt3QkFDRkMsVUFBVTt3QkFDVkMsaUJBQWlCO3dCQUNqQkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUixXQUFXOzRCQUNURixpQkFBaUI7d0JBQ25CO29CQUNGOzs7Ozs7WUFHTjtnQkFDRSxxQkFDRSw4REFBQ2IsNkZBQUlBO29CQUNIVSxPQUFNO29CQUNOQyxJQUFJO3dCQUNGQyxVQUFVO3dCQUNWQyxpQkFBaUI7d0JBQ2pCQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSLFdBQVc7NEJBQ1RGLGlCQUFpQjt3QkFDbkI7b0JBQ0Y7Ozs7OztRQUdSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2QsaUdBQVFBO1FBQ1BZLElBQUk7WUFDRixXQUFXO2dCQUNURSxpQkFBaUI7Z0JBQ2pCRyxZQUFZO1lBQ2Q7WUFDQSxRQUFRO2dCQUNOQyxjQUFjO2dCQUNkSCxPQUFPO2dCQUNQSSxTQUFTO1lBQ1g7UUFDRjs7MEJBRUEsOERBQUNwQixrR0FBU0E7MEJBQUVLLEtBQUtnQixPQUFPOzs7Ozs7MEJBQ3hCLDhEQUFDckIsa0dBQVNBOzBCQUFFVSxlQUFlTCxLQUFLaUIsV0FBVzs7Ozs7OzBCQUMzQyw4REFBQ3RCLGtHQUFTQTswQkFBRSxJQUFJdUIsS0FBS2xCLEtBQUttQixlQUFlLEVBQUVDLGNBQWM7Ozs7OzswQkFDekQsOERBQUN6QixrR0FBU0E7MEJBQUVLLEtBQUtxQixRQUFROzs7Ozs7MEJBQ3pCLDhEQUFDMUIsa0dBQVNBOzBCQUFFSyxLQUFLc0IsYUFBYTs7Ozs7OzBCQUM5Qiw4REFBQzNCLGtHQUFTQTs7b0JBQUM7b0JBQUVLLEtBQUt1QixhQUFhLENBQUNDLE9BQU8sQ0FBQzs7Ozs7OzswQkFDeEMsOERBQUM3QixrR0FBU0E7Z0JBQ1JhLElBQUk7b0JBQ0ZpQixVQUFVO29CQUNWQyxVQUFVO29CQUNWQyxjQUFjO29CQUNkQyxZQUFZO2dCQUNkOzBCQUVDNUIsS0FBSzZCLFlBQVk7Ozs7OzswQkFFcEIsOERBQUNsQyxrR0FBU0E7MEJBQUVLLEtBQUs4QixjQUFjOzs7Ozs7MEJBQy9CLDhEQUFDbkMsa0dBQVNBOzBCQUNSLDRFQUFDRSw2RkFBSUE7b0JBQ0hVLE9BQU9QLEtBQUsrQixlQUFlLEdBQUcsUUFBUTtvQkFDdENDLE1BQUs7b0JBQ0x4QixJQUFJO3dCQUNGRSxpQkFBaUJWLEtBQUsrQixlQUFlLEdBQUcsWUFBWTt3QkFDcERwQixPQUFPWCxLQUFLK0IsZUFBZSxHQUFHLFlBQVk7d0JBQzFDRSxZQUFZO29CQUNkOzs7Ozs7Ozs7OzswQkFHSiw4REFBQ3RDLGtHQUFTQTswQkFBRUssS0FBS2tDLDRCQUE0Qjs7Ozs7OzBCQUM3Qyw4REFBQ3ZDLGtHQUFTQTswQkFBRUssS0FBS21DLHNCQUFzQjs7Ozs7OzBCQUN2Qyw4REFBQ3hDLGtHQUFTQTswQkFBRVMsMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDSixLQUFLc0IsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7QUFHdEQ7R0FwSE12Qjs7UUFFbUJELDZFQUFvQkE7OztLQUZ2Q0M7QUFzSE4saUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2ZpYWV0Y2hlcGFyZS9Hcml0cHBvL2dyaXQtd2ViaG9vay9jb21wb25lbnRzL0NsaWVudENhbGxSb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGVDZWxsLCBUYWJsZVJvdywgQ2hpcCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VUb3RhbENhbGxEdXJhdGlvbiB9IGZyb20gXCIuLi9ob29rcy91c2VUb3RhbENhbGxEdXJhdGlvblwiO1xuXG5jb25zdCBDbGllbnRDYWxsUm93ID0gKHsgY2FsbCwgYWxsQ2FsbHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkFsbCBDYWxsczpcIiwgYWxsQ2FsbHMpO1xuICBjb25zdCB0b3RhbER1cmF0aW9ucyA9IHVzZVRvdGFsQ2FsbER1cmF0aW9uKGFsbENhbGxzKTtcblxuICBjb25zdCBnZXRTdGF0dXNMYWJlbCA9IChzdGF0dXMpID0+IHtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBcIkNvbXBsZXRlZFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBsYWJlbD1cIkNvbXBsZXRlZFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtaW5XaWR0aDogXCI5MHB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGNmY2U3XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMxNjY1MzRcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjODZlZmFjXCIsXG4gICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiYmY3ZDBcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJQZW5kaW5nXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIGxhYmVsPVwiUGVuZGluZ1wiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtaW5XaWR0aDogXCI5MHB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmVmOWMzXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM4NTRkMGVcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZmRlMDQ3XCIsXG4gICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWYwOGFcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJGYWlsZWRcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgbGFiZWw9XCJGYWlsZWRcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWluV2lkdGg6IFwiOTBweFwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlZTJlMlwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjOTkxYjFiXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZjYTVhNVwiLFxuICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmVjYWNhXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBsYWJlbD1cIlVua25vd25cIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWluV2lkdGg6IFwiOTBweFwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZmFmY1wiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjNjQ3NDhiXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NiZDVlMVwiLFxuICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmNWY5XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlUm93XG4gICAgICBzeD17e1xuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmYWZjXCIsXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCImIHRkXCI6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNlMmU4ZjBcIixcbiAgICAgICAgICBjb2xvcjogXCIjNDc1NTY5XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUYWJsZUNlbGw+e2NhbGwuY2FsbF9pZH08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2dldFN0YXR1c0xhYmVsKGNhbGwuY2FsbF9zdGF0dXMpfTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57bmV3IERhdGUoY2FsbC5zdGFydF90aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCl9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntjYWxsLmR1cmF0aW9ufTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57Y2FsbC5jdXN0b21lcl9uYW1lfTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD4ke2NhbGwuY29tYmluZWRfY29zdC50b0ZpeGVkKDIpfTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiBcIjIwMHB4XCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NhbGwuY2FsbF9zdW1tYXJ5fVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntjYWxsLnVzZXJfc2VudGltZW50fTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgPENoaXBcbiAgICAgICAgICBsYWJlbD17Y2FsbC5jYWxsX3N1Y2Nlc3NmdWwgPyBcIlllc1wiIDogXCJOb1wifVxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2FsbC5jYWxsX3N1Y2Nlc3NmdWwgPyBcIiNkY2ZjZTdcIiA6IFwiI2ZlZTJlMlwiLFxuICAgICAgICAgICAgY29sb3I6IGNhbGwuY2FsbF9zdWNjZXNzZnVsID8gXCIjMTY2NTM0XCIgOiBcIiM5OTFiMWJcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntjYWxsLmFnZW50X3Rhc2tfY29tcGxldGlvbl9yYXRpbmd9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntjYWxsLmNhbGxfY29tcGxldGlvbl9yYXRpbmd9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPnt0b3RhbER1cmF0aW9ucz8uW2NhbGwuY3VzdG9tZXJfbmFtZV19PC9UYWJsZUNlbGw+XG4gICAgPC9UYWJsZVJvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudENhbGxSb3c7XG4iXSwibmFtZXMiOlsiVGFibGVDZWxsIiwiVGFibGVSb3ciLCJDaGlwIiwidXNlVG90YWxDYWxsRHVyYXRpb24iLCJDbGllbnRDYWxsUm93IiwiY2FsbCIsImFsbENhbGxzIiwiY29uc29sZSIsImxvZyIsInRvdGFsRHVyYXRpb25zIiwiZ2V0U3RhdHVzTGFiZWwiLCJzdGF0dXMiLCJsYWJlbCIsInN4IiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlciIsInRyYW5zaXRpb24iLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwiY2FsbF9pZCIsImNhbGxfc3RhdHVzIiwiRGF0ZSIsInN0YXJ0X3RpbWVzdGFtcCIsInRvTG9jYWxlU3RyaW5nIiwiZHVyYXRpb24iLCJjdXN0b21lcl9uYW1lIiwiY29tYmluZWRfY29zdCIsInRvRml4ZWQiLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImNhbGxfc3VtbWFyeSIsInVzZXJfc2VudGltZW50IiwiY2FsbF9zdWNjZXNzZnVsIiwic2l6ZSIsImZvbnRXZWlnaHQiLCJhZ2VudF90YXNrX2NvbXBsZXRpb25fcmF0aW5nIiwiY2FsbF9jb21wbGV0aW9uX3JhdGluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClientCallRow.js\n"));

/***/ })

});