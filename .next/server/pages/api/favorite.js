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
exports.id = "pages/api/favorite";
exports.ids = ["pages/api/favorite"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./libs/prismadb.ts":
/*!**************************!*\
  !*** ./libs/prismadb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prismadb = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxTQUFTQyxPQUFPQyxRQUFRLElBQUksSUFBSUgsd0RBQVlBO0FBQ2xELElBQUlJLElBQXlCLEVBQWNGLE9BQU9DLFFBQVEsR0FBR0Y7QUFFN0QsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtbW9uZ29kYi8uL2xpYnMvcHJpc21hZGIudHM/N2Q5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsLnByaXNtYWRiIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWFkYiA9IGNsaWVudFxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiLCJwcmlzbWFkYiIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.ts\n");

/***/ }),

/***/ "(api)/./libs/serverAuth.ts":
/*!****************************!*\
  !*** ./libs/serverAuth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].ts\");\n\n\n\nconst serverAuth = async (req, res)=>{\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.email) {\n        throw new Error(\"Not signed in\");\n    }\n    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlckF1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkM7QUFFTjtBQUNzQjtBQUU3RCxNQUFNRyxhQUFhLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUN0RSxNQUFNQyxVQUFVLE1BQU1OLDJEQUFnQkEsQ0FBQ0ksS0FBS0MsS0FBS0gsa0VBQVdBO0lBRTVELElBQUksQ0FBQ0ksU0FBU0MsTUFBTUMsT0FBTztRQUN6QixNQUFNLElBQUlDLE1BQU0saUJBQWlCO0lBQ25DLENBQUM7SUFFRCxNQUFNQyxjQUFjLE1BQU1ULHNFQUF3QixDQUFDO1FBQ2pEVyxPQUFPO1lBQ0xKLE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztRQUMzQjtJQUNGO0lBRUEsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCLE1BQU0sSUFBSUQsTUFBTSxpQkFBaUI7SUFDbkMsQ0FBQztJQUVELE9BQU87UUFBRUM7SUFBWTtBQUN2QjtBQUVBLGlFQUFlUCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLW1vbmdvZGIvLi9saWJzL3NlcnZlckF1dGgudHM/ODU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5cbmltcG9ydCBwcmlzbWFkYiBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCI7XG5cbmNvbnN0IHNlcnZlckF1dGggPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcblxuICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc2lnbmVkIGluJyk7XG4gIH1cblxuICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgfVxuICB9KTtcbiAgXG4gIGlmICghY3VycmVudFVzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzaWduZWQgaW4nKTtcbiAgfVxuXG4gIHJldHVybiB7IGN1cnJlbnRVc2VyIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlckF1dGg7XG4iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsInByaXNtYWRiIiwiYXV0aE9wdGlvbnMiLCJzZXJ2ZXJBdXRoIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsIkVycm9yIiwiY3VycmVudFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID || \"\",\n            clientSecret: process.env.GITHUB_SECRET || \"\"\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"passord\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.hashedPassword) {\n                    throw new Error(\"Email does not exist\");\n                }\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_5__.compare)(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Incorrect password\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    debug: \"development\" === \"development\",\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNNO0FBQ0E7QUFDRTtBQUNBO0FBQ3pCO0FBQ007QUFFaEMsTUFBTU8sY0FBMkI7SUFDdENDLFdBQVc7UUFDVFAsaUVBQWNBLENBQUM7WUFDYlEsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLElBQUk7WUFDbkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYSxJQUFJO1FBQzdDO1FBQ0FaLGlFQUFjQSxDQUFDO1lBQ2JPLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksZ0JBQWdCLElBQUk7WUFDMUNGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CLElBQUk7UUFDcEQ7UUFDQWIsc0VBQVdBLENBQUM7WUFDVmMsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0FDLFVBQVU7b0JBQ1JGLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7WUFDRjtZQUNBLE1BQU1FLFdBQVVMLFdBQVcsRUFBRTtnQkFDM0IsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVU7b0JBQ2pELE1BQU0sSUFBSUUsTUFBTSwrQkFBK0I7Z0JBQ2pELENBQUM7Z0JBRUQsTUFBTUMsT0FBTyxNQUFNcEIsc0VBQXdCLENBQUM7b0JBQUVzQixPQUFPO3dCQUNuRFIsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQUM7Z0JBRUQsSUFBSSxDQUFDTSxRQUFRLENBQUNBLEtBQUtHLGNBQWMsRUFBRTtvQkFDakMsTUFBTSxJQUFJSixNQUFNLHdCQUF3QjtnQkFDMUMsQ0FBQztnQkFFRCxNQUFNSyxvQkFBb0IsTUFBTXpCLCtDQUFPQSxDQUFDYyxZQUFZSSxRQUFRLEVBQUVHLEtBQUtHLGNBQWM7Z0JBRWpGLElBQUksQ0FBQ0MsbUJBQW1CO29CQUN0QixNQUFNLElBQUlMLE1BQU0sc0JBQXNCO2dCQUN4QyxDQUFDO2dCQUVELE9BQU9DO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RLLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLE9BQU92QixrQkFBeUI7SUFDaEN3QixTQUFTOUIsd0VBQWFBLENBQUNFLHNEQUFRQTtJQUMvQjZCLFNBQVM7UUFBRUMsVUFBVTtJQUFNO0lBQzNCQyxLQUFLO1FBQ0hDLFFBQVE1QixRQUFRQyxHQUFHLENBQUM0QixtQkFBbUI7SUFDekM7SUFDQUQsUUFBUTVCLFFBQVFDLEdBQUcsQ0FBQzZCLGVBQWU7QUFDckMsRUFBRTtBQUVGLGlFQUFleEMsZ0RBQVFBLENBQUNPLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtbW9uZ29kYi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgQXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcic7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcbmltcG9ydCBwcmlzbWFkYiBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lEIHx8ICcnLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUIHx8ICcnLFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIHx8ICcnLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCB8fCAnJyxcbiAgICB9KSxcbiAgICBDcmVkZW50aWFscyh7XG4gICAgICBpZDogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICB0eXBlOiAncGFzc29yZCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBhbmQgcGFzc3dvcmQgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZToge1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgICB9fSk7XG5cbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmhhc2hlZFBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLmhhc2hlZFBhc3N3b3JkKTtcblxuICAgICAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgnXG4gIH0sXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWFkYiksXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIH0sXG4gIGp3dDoge1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfSldUX1NFQ1JFVCxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzIiwiUHJpc21hQWRhcHRlciIsImNvbXBhcmUiLCJwcmlzbWFkYiIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJwYWdlcyIsInNpZ25JbiIsImRlYnVnIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsImp3dCIsInNlY3JldCIsIk5FWFRBVVRIX0pXVF9TRUNSRVQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./pages/api/favorite.ts":
/*!*******************************!*\
  !*** ./pages/api/favorite.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n\n\n\nasync function handler(req, res) {\n    try {\n        if (req.method === \"POST\") {\n            const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n            const { movieId  } = req.body;\n            const existingMovie = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movie.findUnique({\n                where: {\n                    id: movieId\n                }\n            });\n            if (!existingMovie) {\n                throw new Error(\"Invalid ID\");\n            }\n            const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.update({\n                where: {\n                    email: currentUser.email || \"\"\n                },\n                data: {\n                    favoriteIds: {\n                        push: movieId\n                    }\n                }\n            });\n            return res.status(200).json(user);\n        }\n        if (req.method === \"DELETE\") {\n            const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n            const { movieId  } = req.body;\n            const existingMovie = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movie.findUnique({\n                where: {\n                    id: movieId\n                }\n            });\n            if (!existingMovie) {\n                throw new Error(\"Invalid ID\");\n            }\n            const updatedFavoriteIds = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(currentUser.favoriteIds, movieId);\n            const updatedUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.update({\n                where: {\n                    email: currentUser.email || \"\"\n                },\n                data: {\n                    favoriteIds: updatedFavoriteIds\n                }\n            });\n            return res.status(200).json(updatedUser);\n        }\n        return res.status(405).end();\n    } catch (error) {\n        console.log(error);\n        return res.status(500).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2b3JpdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDaUM7QUFFTTtBQUNJO0FBRTVCLGVBQWVHLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsSUFBSTtRQUNGLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1lBQ3pCLE1BQU0sRUFBRUMsWUFBVyxFQUFFLEdBQUcsTUFBTUwsNERBQVVBLENBQUNFLEtBQUtDO1lBRTlDLE1BQU0sRUFBRUcsUUFBTyxFQUFFLEdBQUdKLElBQUlLLElBQUk7WUFFNUIsTUFBTUMsZ0JBQWdCLE1BQU1ULHVFQUF5QixDQUFDO2dCQUNwRFksT0FBTztvQkFDTEMsSUFBSU47Z0JBQ047WUFDRjtZQUVBLElBQUksQ0FBQ0UsZUFBZTtnQkFDbEIsTUFBTSxJQUFJSyxNQUFNLGNBQWM7WUFDaEMsQ0FBQztZQUVELE1BQU1DLE9BQU8sTUFBTWYsa0VBQW9CLENBQUM7Z0JBQ3RDWSxPQUFPO29CQUNMSyxPQUFPWCxZQUFZVyxLQUFLLElBQUk7Z0JBQzlCO2dCQUNBQyxNQUFNO29CQUNKQyxhQUFhO3dCQUNYQyxNQUFNYjtvQkFDUjtnQkFDRjtZQUNGO1lBRUEsT0FBT0gsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNQO1FBQzlCLENBQUM7UUFFRCxJQUFJWixJQUFJRSxNQUFNLEtBQUssVUFBVTtZQUMzQixNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHLE1BQU1MLDREQUFVQSxDQUFDRSxLQUFLQztZQUU5QyxNQUFNLEVBQUVHLFFBQU8sRUFBRSxHQUFHSixJQUFJSyxJQUFJO1lBRTVCLE1BQU1DLGdCQUFnQixNQUFNVCx1RUFBeUIsQ0FBQztnQkFDcERZLE9BQU87b0JBQ0xDLElBQUlOO2dCQUNOO1lBQ0Y7WUFFQSxJQUFJLENBQUNFLGVBQWU7Z0JBQ2xCLE1BQU0sSUFBSUssTUFBTSxjQUFjO1lBQ2hDLENBQUM7WUFFRCxNQUFNUyxxQkFBcUJ4QiwrQ0FBT0EsQ0FBQ08sWUFBWWEsV0FBVyxFQUFFWjtZQUU1RCxNQUFNaUIsY0FBYyxNQUFNeEIsa0VBQW9CLENBQUM7Z0JBQzdDWSxPQUFPO29CQUNMSyxPQUFPWCxZQUFZVyxLQUFLLElBQUk7Z0JBQzlCO2dCQUNBQyxNQUFNO29CQUNKQyxhQUFhSTtnQkFDZjtZQUNGO1lBRUEsT0FBT25CLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtRQUM5QixDQUFDO1FBRUQsT0FBT3BCLElBQUlpQixNQUFNLENBQUMsS0FBS0ksR0FBRztJQUM1QixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUVaLE9BQU90QixJQUFJaUIsTUFBTSxDQUFDLEtBQUtJLEdBQUc7SUFDNUI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLW1vbmdvZGIvLi9wYWdlcy9hcGkvZmF2b3JpdGUudHM/YTcyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHdpdGhvdXQgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBwcmlzbWFkYiBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuaW1wb3J0IHNlcnZlckF1dGggZnJvbSBcIkAvbGlicy9zZXJ2ZXJBdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSwgcmVzKTtcblxuICAgICAgY29uc3QgeyBtb3ZpZUlkIH0gPSByZXEuYm9keTtcbiAgXG4gICAgICBjb25zdCBleGlzdGluZ01vdmllID0gYXdhaXQgcHJpc21hZGIubW92aWUuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IG1vdmllSWQsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgICAgIGlmICghZXhpc3RpbmdNb3ZpZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKTtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hZGIudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCB8fCAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGZhdm9yaXRlSWRzOiB7XG4gICAgICAgICAgICBwdXNoOiBtb3ZpZUlkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgfVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSwgcmVzKTtcblxuICAgICAgY29uc3QgeyBtb3ZpZUlkIH0gPSByZXEuYm9keTtcblxuICAgICAgY29uc3QgZXhpc3RpbmdNb3ZpZSA9IGF3YWl0IHByaXNtYWRiLm1vdmllLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBtb3ZpZUlkLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFleGlzdGluZ01vdmllKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBJRCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkRmF2b3JpdGVJZHMgPSB3aXRob3V0KGN1cnJlbnRVc2VyLmZhdm9yaXRlSWRzLCBtb3ZpZUlkKTtcblxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsIHx8ICcnLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZmF2b3JpdGVJZHM6IHVwZGF0ZWRGYXZvcml0ZUlkcyxcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkVXNlcik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5lbmQoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIndpdGhvdXQiLCJwcmlzbWFkYiIsInNlcnZlckF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY3VycmVudFVzZXIiLCJtb3ZpZUlkIiwiYm9keSIsImV4aXN0aW5nTW92aWUiLCJtb3ZpZSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwiRXJyb3IiLCJ1c2VyIiwidXBkYXRlIiwiZW1haWwiLCJkYXRhIiwiZmF2b3JpdGVJZHMiLCJwdXNoIiwic3RhdHVzIiwianNvbiIsInVwZGF0ZWRGYXZvcml0ZUlkcyIsInVwZGF0ZWRVc2VyIiwiZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/favorite.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/favorite.ts"));
module.exports = __webpack_exports__;

})();