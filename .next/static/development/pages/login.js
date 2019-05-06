(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\login.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CRahul%5CDesktop%5Cnext-first-app%5Cpages%5Clogin.js!./":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CRahul%5CDesktop%5Cnext-first-app%5Cpages%5Clogin.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/login", function() {
      var page = __webpack_require__(/*! ./pages/login.js */ "./pages/login.js")
      if(true) {
        module.hot.accept(/*! ./pages/login.js */ "./pages/login.js", function() {
          if(!next.router.components["/login"]) return
          var updatedPage = __webpack_require__(/*! ./pages/login.js */ "./pages/login.js")
          next.router.update("/login", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_6dc2816e14fab51b8269 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_6dc2816e14fab51b8269 */ "dll-reference dll_6dc2816e14fab51b8269"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container",
    style: {
      padding: 40,
      marginTop: 50,
      border: '1px solid grey'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      textAlign: "center"
    }
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "/login",
    method: "POST"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "exampleInputEmail1"
  }, "Email address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "username",
    type: "email",
    class: "form-control",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    id: "emailHelp",
    class: "form-text text-muted"
  }, "We'll never share your email with anyone else.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "exampleInputPassword1"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "password",
    type: "password",
    class: "form-control",
    placeholder: "Password"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "form-group form-check"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    class: "form-check-input",
    id: "exampleCheck1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "form-check-label",
    for: "exampleCheck1"
  }, "Check me out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    class: "btn btn-primary"
  }, "Login"))));
});

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CRahul%5CDesktop%5Cnext-first-app%5Cpages%5Clogin.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CRahul%5CDesktop%5Cnext-first-app%5Cpages%5Clogin.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CRahul%5CDesktop%5Cnext-first-app%5Cpages%5Clogin.js!./");


/***/ }),

/***/ "dll-reference dll_6dc2816e14fab51b8269":
/*!*******************************************!*\
  !*** external "dll_6dc2816e14fab51b8269" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_6dc2816e14fab51b8269;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=login.js.map