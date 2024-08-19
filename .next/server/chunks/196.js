"use strict";
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 4104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Loader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    Pace.on("start", function() {
        document.querySelector("#preloader").classList.remove("isdone");
        document.querySelector(".loading").classList.remove("isdone");
    });
    Pace.on("done", function() {
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
    }
    window.addEventListener("load", ()=>{
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
        if (document.querySelector(".pace-running.pace-running")) {
            document.querySelector(".pace-running.pace-running").classList.remove("pace-running");
        }
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Common/Loader.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function LoadingScreen() {
    (0,react_.useEffect)(()=>{
        setTimeout(()=>{
            if (typeof Pace !== "undefined") common_loadingPace();
        }, 1000);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hideX",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "loading",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "L"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "o"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "a"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "i"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "n"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "g"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "preloader"
            })
        ]
    });
}
;
/* harmony default export */ const Loader = (LoadingScreen);


/***/ }),

/***/ 2688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/pablo/Desktop/project/src/components/Common/Loader.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;