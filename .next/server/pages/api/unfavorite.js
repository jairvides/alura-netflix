"use strict";
(() => {
var exports = {};
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./libs/prismadb.ts
var prismadb = __webpack_require__(3732);
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./pages/api/unfavorite.ts



async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).end();
        }
        const session = await (0,react_namespaceObject.getSession)({
            req
        });
        if (!session?.user?.email) {
            throw new Error("Not signed in");
        }
        const { movieId  } = req.body;
        const existingMovie = await prismadb/* default.movie.findUnique */.Z.movie.findUnique({
            where: {
                id: movieId
            }
        });
        if (!existingMovie) {
            throw new Error("Invalid ID");
        }
        const user = await prismadb/* default.user.findUnique */.Z.user.findUnique({
            where: {
                email: session.user.email
            }
        });
        if (!user) {
            throw new Error("Invalid email");
        }
        const updatedFavoriteIds = (0,external_lodash_.without)(user.favoriteIds, movieId);
        const updatedUser = await prismadb/* default.user.update */.Z.user.update({
            where: {
                email: session.user.email
            },
            data: {
                favoriteIds: updatedFavoriteIds
            }
        });
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(668));
module.exports = __webpack_exports__;

})();