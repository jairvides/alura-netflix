"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/watch/[movieId]";
exports.ids = ["pages/watch/[movieId]"];
exports.modules = {

/***/ "./hooks/useMovie.ts":
/*!***************************!*\
  !*** ./hooks/useMovie.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/fetcher */ \"./libs/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useMovie = (id)=>{\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id ? `/api/movies/${id}` : null, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        revalidateIfStale: false,\n        revalidateOnFocus: false,\n        revalidateOnReconnect: false\n    });\n    return {\n        data,\n        error,\n        isLoading\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMovie);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VNb3ZpZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0I7QUFDYTtBQUVyQyxNQUFNRSxXQUFXLENBQUNDLEtBQWdCO0lBQ2hDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVMsRUFBRSxHQUFHTiwrQ0FBTUEsQ0FBQ0csS0FBSyxDQUFDLFlBQVksRUFBRUEsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFRixxREFBT0EsRUFBRTtRQUNsRk0sbUJBQW1CLEtBQUs7UUFDeEJDLG1CQUFtQixLQUFLO1FBQ3hCQyx1QkFBdUIsS0FBSztJQUM5QjtJQUNBLE9BQU87UUFDTEw7UUFDQUM7UUFDQUM7SUFDRjtBQUNGO0FBRUEsaUVBQWVKLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtbW9uZ29kYi8uL2hvb2tzL3VzZU1vdmllLnRzPzcxZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAL2xpYnMvZmV0Y2hlcic7XG5cbmNvbnN0IHVzZU1vdmllID0gKGlkPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU3dyKGlkID8gYC9hcGkvbW92aWVzLyR7aWR9YCA6IG51bGwsIGZldGNoZXIsIHtcbiAgICByZXZhbGlkYXRlSWZTdGFsZTogZmFsc2UsXG4gICAgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLFxuICAgIHJldmFsaWRhdGVPblJlY29ubmVjdDogZmFsc2UsXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vdmllO1xuIl0sIm5hbWVzIjpbInVzZVN3ciIsImZldGNoZXIiLCJ1c2VNb3ZpZSIsImlkIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwicmV2YWxpZGF0ZUlmU3RhbGUiLCJyZXZhbGlkYXRlT25Gb2N1cyIsInJldmFsaWRhdGVPblJlY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useMovie.ts\n");

/***/ }),

/***/ "./libs/fetcher.ts":
/*!*************************!*\
  !*** ./libs/fetcher.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((res)=>res.data);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2ZldGNoZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsVUFBVSxDQUFDQyxNQUFnQkYsaURBQVMsQ0FBQ0UsS0FBS0UsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO0FBRXBFLGlFQUFlTCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLW1vbmdvZGIvLi9saWJzL2ZldGNoZXIudHM/NTllZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/fetcher.ts\n");

/***/ }),

/***/ "./pages/watch/[movieId].tsx":
/*!***********************************!*\
  !*** ./pages/watch/[movieId].tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"@heroicons/react/24/outline\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useMovie */ \"./hooks/useMovie.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__]);\n_hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Watch = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { movieId  } = router.query;\n    const { data  } = (0,_hooks_useMovie__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(movieId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowLeftIcon, {\n                        onClick: ()=>router.push(\"/\"),\n                        className: \"w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\usuario\\\\Documents\\\\PROGRAMADOR\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white text-1xl md:text-3xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-light\",\n                                children: \"Watching:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\usuario\\\\Documents\\\\PROGRAMADOR\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            data?.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\usuario\\\\Documents\\\\PROGRAMADOR\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\usuario\\\\Documents\\\\PROGRAMADOR\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"h-full w-full\",\n                autoPlay: true,\n                controls: true,\n                src: data?.videoUrl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\usuario\\\\Documents\\\\PROGRAMADOR\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\usuario\\\\Documents\\\\PROGRAMADOR\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Watch);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bbW92aWVJZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tDO0FBQ3BCO0FBQ0E7QUFFeEMsTUFBTUksUUFBUSxJQUFNO0lBQ2xCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLFFBQU8sRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRWhDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdMLDJEQUFRQSxDQUFDRztJQUUxQixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ1Qsc0VBQWFBO3dCQUFDVyxTQUFTLElBQU1QLE9BQU9RLElBQUksQ0FBQzt3QkFBTUgsV0FBVTs7Ozs7O2tDQUMxRCw4REFBQ0k7d0JBQUVKLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBS0wsV0FBVTswQ0FBYTs7Ozs7OzRCQUFnQjs0QkFBRUYsTUFBTVE7Ozs7Ozs7Ozs7Ozs7MEJBR3pELDhEQUFDQztnQkFBTVAsV0FBVTtnQkFBZ0JRLFFBQVE7Z0JBQUNDLFFBQVE7Z0JBQUNDLEtBQUtaLE1BQU1hOzs7Ozs7Ozs7Ozs7QUFHcEU7QUFFQSxpRUFBZWpCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtbW9uZ29kYi8uL3BhZ2VzL3dhdGNoL1ttb3ZpZUlkXS50c3g/ZmU3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlTW92aWUgZnJvbSAnQC9ob29rcy91c2VNb3ZpZSc7XG5cbmNvbnN0IFdhdGNoID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBtb3ZpZUlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VNb3ZpZShtb3ZpZUlkIGFzIHN0cmluZyk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gYmctYmxhY2tcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgdy1mdWxsIHAtNCB6LTEwIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC04IGJnLWJsYWNrIGJnLW9wYWNpdHktNzBcIj5cbiAgICAgICAgPEFycm93TGVmdEljb24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0gY2xhc3NOYW1lPVwidy00IG1kOnctMTAgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb25cIiAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMXhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbGlnaHRcIj5XYXRjaGluZzo8L3NwYW4+IHtkYXRhPy50aXRsZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9uYXY+XG4gICAgICA8dmlkZW8gY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiIGF1dG9QbGF5IGNvbnRyb2xzIHNyYz17ZGF0YT8udmlkZW9Vcmx9PjwvdmlkZW8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0Y2g7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnJvd0xlZnRJY29uIiwidXNlUm91dGVyIiwidXNlTW92aWUiLCJXYXRjaCIsInJvdXRlciIsIm1vdmllSWQiLCJxdWVyeSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJvbkNsaWNrIiwicHVzaCIsInAiLCJzcGFuIiwidGl0bGUiLCJ2aWRlbyIsImF1dG9QbGF5IiwiY29udHJvbHMiLCJzcmMiLCJ2aWRlb1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/watch/[movieId].tsx\n");

/***/ }),

/***/ "@heroicons/react/24/outline":
/*!**********************************************!*\
  !*** external "@heroicons/react/24/outline" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/watch/[movieId].tsx"));
module.exports = __webpack_exports__;

})();