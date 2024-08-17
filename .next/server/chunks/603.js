"use strict";
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 4888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ handleMobileDropdown),
/* harmony export */   z: () => (/* binding */ handleDropdown)
/* harmony export */ });
/* harmony import */ var _getSiblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3532);

const handleDropdown = (e)=>{
    (0,_getSiblings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(e.target.parentElement).filter((item)=>item.classList.contains("show")).map((item)=>{
        item.classList.remove("show");
        if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
            item.childNodes[1].classList.remove("show");
        }
    });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = (e)=>{
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};


/***/ }),

/***/ 6603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4888);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9124);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
 //= Scripts
 //= Static Data



const Navbar = ({ lr, theme })=>{
    const navbar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    function handleScroll() {
        if (window.scrollY > 300) {
            navbar.current.classList.add("nav-scroll");
        } else {
            navbar.current.classList.remove("nav-scroll");
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("nav", {
        ref: navbar,
        className: `navbar navbar-expand-lg change ${theme === "light" ? "light" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: "logo",
                    href: "/",
                    children: theme ? theme === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                        ref: lr,
                        src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__/* .darkLogo */ .Q1,
                        alt: "logo"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                        ref: lr,
                        src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__/* .lightLogo */ .E8,
                        alt: "logo"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                        ref: lr,
                        src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__/* .lightLogo */ .E8,
                        alt: "logo"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    onClick: _common_navbar__WEBPACK_IMPORTED_MODULE_4__/* .handleMobileDropdown */ ._,
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                        className: "navbar-nav ml-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                                    className: "nav-link",
                                    href: `/homepage/novotech/`,
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                                    className: "nav-link",
                                    href: `/about/about-dark`,
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                                    className: "nav-link",
                                    href: `/works2/works2-dark/`,
                                    children: "Services"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                                    className: "nav-link",
                                    href: `/blog-list/blog-list-dark`,
                                    children: "Event Updates"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                                    className: "nav-link",
                                    href: `/contact/contact-dark`,
                                    children: "Contact Us"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ })

};
;