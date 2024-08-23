"use strict";
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 3394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const thumparallaxDown = ()=>{
    var imageDown = document.getElementsByClassName("thumparallax-down");
    if (imageDown) {
        new simpleParallax(imageDown, {
            orientation: "down",
            delay: 1,
            scale: 1.1
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thumparallaxDown);


/***/ }),

/***/ 2575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Split({ children }) {
    const target = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        split();
    }, []);
    function split() {
        if (target.current) {
            Splitting({
                target: target.current
            });
        }
    }
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        ref: target,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 3414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Team1)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = ()=>{
    let teamSection = document.querySelector(".team-crv");
    if (teamSection) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (window.pageYOffset > teamSection.offsetTop - 200) {
                    item.style.width = myVal;
                }
            });
        });
    }
};
/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);

// EXTERNAL MODULE: ./src/common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(4158);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"f":[{"id":1,"image":"/img/team/1.png","title":"Mr. NIDAL AL-SHEKHAH","sub":"CEO"},{"id":2,"image":"/img/team/2.png","title":"HANYA ZIA UL HAQ","sub":"Lead Web Developer - IT MANAGER"},{"id":3,"image":"/img/team/3.png","title":"SABRINE IJBAR","sub":"Marketing Specialist"},{"id":4,"image":"/img/team/4.png","title":"ALI AFIFI","sub":"Designer - SMM"}],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"},{"id":3,"text":"Digital Marketing","value":"90%"}]}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Team/Team1.jsx
/* __next_internal_client_entry_do_not_use__ default auto */  //= Scripts

 //= Static Data



const Team = ()=>{
    (0,react_.useEffect)(()=>{
        common_teamSkillsProgress();
        setTimeout(()=>{
            (0,tooltipEffect/* default */.Z)();
        }, 500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "team-crv section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content wow fadeInUp md-mb30",
                            "data-wow-delay": ".5s",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Our Staff"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "co-tit mb-15",
                                    children: "We help to create visual strategies."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: '"Our Passionate Team combines Technical Expertise with Creative Flair to provide Outstanding Solutions in Graphic Design, Social Media Marketing, and Application Development."'
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "skills-box mt-40",
                                    children: team_namespaceObject.n.map((skill)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "skill-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "custom-font",
                                                    children: skill.text
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "skill-progress",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progres",
                                                        "data-value": skill.value
                                                    })
                                                })
                                            ]
                                        }, skill.id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-box",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6 toright",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "full-width",
                                            children: team_namespaceObject.f.slice(0, 2).map((team, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(0, 2).length ? "mb-30" : null}`,
                                                        "data-tooltip-tit": team.title,
                                                        "data-tooltip-sub": team.sub,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: team.image,
                                                            alt: "",
                                                            className: "imago wow"
                                                        })
                                                    })
                                                }, team.id))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6 toleft valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "full-width text-left",
                                            children: team_namespaceObject.f.slice(2, 4).map((team, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(2, 4).length ? "mb-30" : null}`,
                                                        "data-tooltip-tit": team.title,
                                                        "data-tooltip-sub": team.sub,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: team.image,
                                                            alt: "",
                                                            className: "imago wow"
                                                        })
                                                    })
                                                }, team.id))
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Team1 = (Team);


/***/ })

};
;