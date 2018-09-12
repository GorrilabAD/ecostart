// webpackJsonp([1], {
//     NHnr: function(t, a, s) {
//         "use strict";
//         var d = c,
//             o = {
//                 data: function() {
//                     return {
//                         lang: d
//                     }
//                 },
//                 mounted: function() {}
//             },
//             r = {
//                 render: function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("header", {
//                         staticClass: "site-header is-sticky"
//                     }, [s("div", {
//                         staticClass: "navbar navbar-expand-lg is-transparent",
//                         attrs: {
//                             id: "mainnav"
//                         }
//                     }, [s("nav", {
//                         staticClass: "container"
//                     }, [t._m(0), t._v(" "), t._m(1), t._v(" "), s("div", {
//                         staticClass: "collapse navbar-collapse justify-content-end",
//                         attrs: {
//                             id: "navbarToggle"
//                         }
//                     }, [s("ul", {
//                         staticClass: "navbar-nav animated remove-animation",
//                         attrs: {
//                             "data-animate": "fadeInDown",
//                             "data-delay": ".9"
//                         }
//                     }, [s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#about"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "aboutus")) + " ")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#why"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "services")) + " ")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#roadmap"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "roadmap")))])]), t._v(" "), s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#tokenSale"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "sale")) + " ")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#team"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "team")) + " ")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#docs"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "docs")) + " ")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#faq"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "faq")) + " ")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item",
//                         staticStyle: {
//                             "box-sizing": "unset"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link menu-link",
//                         attrs: {
//                             href: "#contact"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "contacts")) + " ")])])]), t._v(" "), s("ul", {
//                         staticClass: "navbar-btns animated remove-animation",
//                         attrs: {
//                             "data-animate": "fadeInDown",
//                             "data-delay": "1.15"
//                         }
//                     }, [s("li", {
//                         staticClass: "nav-item lang-switch"
//                     }, ["en" === t.lang.current ? s("a", {
//                         attrs: {
//                             href: "#",
//                             "data-toggle": "dropdown"
//                         }
//                     }, [t._v("English "), s("em", {
//                         staticClass: "ti ti-angle-down"
//                     })]) : t._e(), t._v(" "), "ru" === t.lang.current ? s("a", {
//                         attrs: {
//                             href: "#",
//                             "data-toggle": "dropdown"
//                         }
//                     }, [t._v("Русский "), s("em", {
//                         staticClass: "ti ti-angle-down"
//                     })]) : t._e(), t._v(" "), s("div", {
//                         staticClass: "dropdown-menu"
//                     }, [s("a", {
//                         staticClass: "dropdown-item",
//                         attrs: {
//                             href: "javascript:void(0)"
//                         },
//                         on: {
//                             click: function(a) {
//                                 t.lang.change("ru")
//                             }
//                         }
//                     }, [t._v("Русский")]), t._v(" "), s("a", {
//                         staticClass: "dropdown-item",
//                         attrs: {
//                             href: "javascript:void(0)"
//                         },
//                         on: {
//                             click: function(a) {
//                                 t.lang.change("en")
//                             }
//                         }
//                     }, [t._v("English")])])]), t._v(" "), s("li", {
//                         staticClass: "nav-item"
//                     }, [s("a", {
//                         staticClass: "nav-link btn btn-sm btn-outline menu-link",
//                         attrs: {
//                             href: "http://sale.eco-start.com/"
//                         }
//                     }, [t._v(t._s(t.lang.get("menu", "join")))])])])])])]), t._v(" "), s("div", {
//                         staticClass: "banner banner-full d-flex flex-column banner-jasmine",
//                         attrs: {
//                             id: "header"
//                         }
//                     }, [s("div", {
//                         staticClass: "background-shape"
//                     }), t._v(" "), s("div", {
//                         staticClass: "container zi6"
//                     }, [s("div", {
//                         staticClass: "banner-content"
//                     }, [s("div", {
//                         staticClass: "row justify-content-center"
//                     }, [s("div", {
//                         staticClass: "col-lg-8 text-center"
//                     }, [s("div", {
//                         staticClass: "header-txt tab-center mobile-center"
//                     }, [s("h1", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.35"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("header", "h1")) + " "), s("br"), t._v(" " + t._s(t.lang.get("header", "h2")) + " ")]), t._v(" "), s("p", {
//                         staticClass: "lead animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.45"
//                         },
//                         domProps: {
//                             innerHTML: t._s(t.lang.get("header", "p1"))
//                         }
//                     }), t._v(" "), t._m(2)])])])])]), t._v(" "), s("div", {
//                         staticClass: "container mt-auto"
//                     }, [s("div", {
//                         staticClass: "banner-content"
//                     }, [s("div", {
//                         staticClass: "row justify-content-center"
//                     }, [s("div", {
//                         staticClass: "col-lg-8 text-center"
//                     }, [s("div", {
//                         staticClass: "countdown-box text-center"
//                     }, [t._m(3), t._v(" "), s("div", {
//                         staticClass: "row justify-content-center"
//                     }, [s("div", {
//                         staticClass: "col-md-6"
//                     }, [s("h6", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.75"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("header", "p2")))]), t._v(" "), s("div", {
//                         staticClass: "token-countdown d-flex align-content-stretch animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.85",
//                             "data-date": "2018/09/14"
//                         }
//                     }), t._v(" "), s("div", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.95"
//                         }
//                     }, [s("a", {
//                         staticClass: "btn btn-sm",
//                         attrs: {
//                             href: "http://sale.eco-start.com/"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("menu", "join")) + " ")])]), t._v(" "), t._m(4)])])])])])])])])]), t._v(" "), t._m(5)])
//                 },
//                 staticRenderFns: [function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("a", {
//                         staticClass: "navbar-brand animated",
//                         attrs: {
//                             "data-animate": "fadeInDown",
//                             "data-delay": ".65",
//                             href: "./"
//                         }
//                     }, [a("img", {
//                         staticClass: "logo logo-dark",
//                         attrs: {
//                             alt: "logo",
//                             src: "/static/images/logo.png",
//                             srcset: "/static/images/logo2x.png 2x"
//                         }
//                     }), this._v(" "), a("img", {
//                         staticClass: "logo logo-light",
//                         attrs: {
//                             alt: "logo",
//                             src: "/static/images/logo-white.png",
//                             srcset: "/static/images/logo-white2x.png 2x"
//                         }
//                     })])
//                 }, function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("button", {
//                         staticClass: "navbar-toggler",
//                         attrs: {
//                             type: "button",
//                             "data-toggle": "collapse",
//                             "data-target": "#navbarToggle"
//                         }
//                     }, [a("span", {
//                         staticClass: "navbar-toggler-icon"
//                     }, [a("span", {
//                         staticClass: "ti ti-align-justify"
//                     })])])
//                 }, function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("ul", {
//                         staticClass: "btns no-space animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.55"
//                         }
//                     }, [a("li", [a("a", {
//                         staticClass: "btn btn-icon-s2",
//                         attrs: {
//                             target: "_blank",
//                             href: "/static/docs/whitepaper.pdf"
//                         }
//                     }, [a("em", {
//                         staticClass: "ti ti-files"
//                     }), this._v(" White Paper")])]), this._v(" "), a("li", [a("a", {
//                         staticClass: "btn btn-icon-s2",
//                         attrs: {
//                             target: "_blank",
//                             href: "/static/docs/onepager_en.pdf"
//                         }
//                     }, [a("em", {
//                         staticClass: "ti ti-file"
//                     }), this._v(" One Pager")])]), this._v(" "), a("li", [a("a", {
//                         staticClass: "btn btn-icon-s2 video-play",
//                         attrs: {
//                             href: "https://www.youtube.com/watch?v=SSo_EIwHSd4"
//                         }
//                     }, [a("em", {
//                         staticClass: "ti ti-control-play"
//                     }), this._v(" How it works")])])])
//                 }, function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", {
//                         staticClass: "circle-animation animated",
//                         attrs: {
//                             "data-animate": "fadeIn",
//                             "data-delay": "1.65"
//                         }
//                     }, [s("div", {
//                         staticClass: "circle-animation-l1 ca"
//                     }, [s("span", {
//                         staticClass: "circle-animation-l1-d1 ca-dot ca-color-1"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l1-d2 ca-dot ca-color-2"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l1-d3 ca-dot ca-color-3"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l1-d4 ca-dot ca-color-1"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l1-d5 ca-dot ca-color-2"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l1-d6 ca-dot ca-color-3"
//                     })]), t._v(" "), s("div", {
//                         staticClass: "circle-animation-l2 ca"
//                     }, [s("span", {
//                         staticClass: "circle-animation-l2-d1 ca-dot ca-color-1"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l2-d2 ca-dot ca-color-3"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l2-d3 ca-dot ca-color-2"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l2-d4 ca-dot ca-color-1"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l2-d5 ca-dot ca-color-2"
//                     })]), t._v(" "), s("div", {
//                         staticClass: "circle-animation-l3 ca"
//                     }, [s("span", {
//                         staticClass: "circle-animation-l3-d1 ca-dot ca-color-1"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l3-d2 ca-dot ca-color-3"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l3-d3 ca-dot ca-color-2"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l3-d4 ca-dot ca-color-1"
//                     }), t._v(" "), s("span", {
//                         staticClass: "circle-animation-l3-d5 ca-dot ca-color-2"
//                     })])])
//                 }, function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("ul", {
//                         staticClass: "icon-list"
//                     }, [a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "2.0"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-bitcoin"
//                     })]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "2.05"
//                         }
//                     }, [a("em", {
//                         staticClass: "fas fa-won-sign"
//                     })]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "2.1"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-cc-visa"
//                     })]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "2.15"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-cc-mastercard"
//                     })])])
//                 }, function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", {
//                         staticClass: "section section-pad-sm no-pb section-bg"
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row justify-content-center"
//                     }, [s("div", {
//                         staticClass: "col-lg-10"
//                     }, [s("h6", {
//                         staticClass: "heading-sm text-center animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [t._v("Our ratings")]), t._v(" "), s("div", {
//                         staticClass: "gaps"
//                     }), t._v(" "), s("div", {
//                         staticClass: "row rating-list"
//                     }, [s("div", {
//                         staticClass: "col-sm col-4"
//                     }, [s("div", {
//                         staticClass: "rating-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [s("div", {
//                         staticClass: "rating-info"
//                     }, [t._v("\n                                    4.7\n                                    "), s("span", [t._v("/5")])]), t._v(" "), s("div", {
//                         staticClass: "rating-title"
//                     }, [t._v("ICO Bench")])])]), t._v(" "), s("div", {
//                         staticClass: "col-sm col-4"
//                     }, [s("div", {
//                         staticClass: "rating-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [s("div", {
//                         staticClass: "rating-info"
//                     }, [t._v("\n                                    A\n                                ")]), t._v(" "), s("div", {
//                         staticClass: "rating-title"
//                     }, [t._v("ICObazaar")])])]), t._v(" "), s("div", {
//                         staticClass: "col-sm col-4"
//                     }, [s("div", {
//                         staticClass: "rating-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "rating-info"
//                     }, [t._v("\n                                   9.4\n                                   "), s("span", [t._v("/10")])]), t._v(" "), s("div", {
//                         staticClass: "rating-title"
//                     }, [t._v("ICORanker")])])]), t._v(" "), s("div", {
//                         staticClass: "col-sm col-4"
//                     }, [s("div", {
//                         staticClass: "rating-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [s("div", {
//                         staticClass: "rating-info"
//                     }, [t._v("\n                                   4.9\n                                   "), s("span", [t._v("/5")])]), t._v(" "), s("div", {
//                         staticClass: "rating-title"
//                     }, [t._v("Trackico")])])]), t._v(" "), s("div", {
//                         staticClass: "col-sm col-4"
//                     }, [s("div", {
//                         staticClass: "rating-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [s("div", {
//                         staticClass: "rating-info"
//                     }, [t._v("\n                                   5\n                                   "), s("span", [t._v("/5")])]), t._v(" "), s("div", {
//                         staticClass: "rating-title"
//                     }, [t._v("WiserICO")])])]), t._v(" "), s("div", {
//                         staticClass: "col-sm col-4"
//                     }, [s("div", {
//                         staticClass: "rating-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".7"
//                         }
//                     }, [s("div", {
//                         staticClass: "rating-info"
//                     }, [t._v("\n                                   9.1\n                                   "), s("span", [t._v("/10")])]), t._v(" "), s("div", {
//                         staticClass: "rating-title"
//                     }, [t._v("Fundico")])])])])])])])])
//                 }]
//             },
//             v = s("VU/8")(o, r, !1, null, null, null).exports,
//             m = {
//                 data: function() {
//                     return {
//                         lang: d
//                     }
//                 },
//                 mounted: function() {}
//             },
//             p = {
//                 render: function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg-atob",
//                         attrs: {
//                             id: "about"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row align-items-center"
//                     }, [t._m(0), t._v(" "), s("div", {
//                         staticClass: "col-md-6"
//                     }, [s("div", {
//                         staticClass: "text-block"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("about", "h1")))]), t._v(" "), s("h2", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("about", "h2")))]), t._v(" "), s("p", {
//                         staticClass: "lead animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [t._v("\n                                                    " + t._s(t.lang.get("about", "p1")) + "\n                                                ")]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [t._v("\n                                                    " + t._s(t.lang.get("about", "p2")) + "\n                                                ")])])])])])])])
//                 },
//                 staticRenderFns: [function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("div", {
//                         staticClass: "col-md-6"
//                     }, [a("div", {
//                         staticClass: "res-m-btm text-center animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [a("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/graph-jasmine-a.png",
//                             alt: "graph"
//                         }
//                     })])])
//                 }]
//             },
//             _ = s("VU/8")(m, p, !1, null, null, null).exports,
//             C = {
//                 data: function() {
//                     return {
//                         lang: d
//                     }
//                 },
//                 mounted: function() {}
//             },
//             u = {
//                 render: function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad no-pb section-bg"
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row align-items-center justify-content-between"
//                     }, [t._m(0), t._v(" "), s("div", {
//                         staticClass: "col-md-6 order-md-first order-last"
//                     }, [s("div", {
//                         staticClass: "text-block"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("blockchain", "h1")) + " ")]), t._v(" "), s("h2", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("blockchain", "h2")))]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [t._v(t._s(t.lang.get("blockchain", "p1")))]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("blockchain", "p2")) + " ")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "section section-pad no-pb section-bg"
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row align-items-center justify-content-between"
//                     }, [t._m(1), t._v(" "), s("div", {
//                         staticClass: "col-md-6"
//                     }, [s("div", {
//                         staticClass: "text-block"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("community", "h1")) + " ")]), t._v(" "), s("h2", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("community", "h2")))]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [t._v(t._s(t.lang.get("community", "p1")))]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("community", "p2")) + " ")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "section section-pad section-bg"
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row align-items-center justify-content-between"
//                     }, [t._m(2), t._v(" "), s("div", {
//                         staticClass: "col-md-6 order-md-first order-last"
//                     }, [s("div", {
//                         staticClass: "text-block"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("apps", "h1")) + " ")]), t._v(" "), s("h2", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("apps", "h2")))]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [t._v(t._s(t.lang.get("apps", "p1")))]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("apps", "p2")) + " ")])])])])])])])
//                 },
//                 staticRenderFns: [function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("div", {
//                         staticClass: "col-md-6"
//                     }, [a("div", {
//                         staticClass: "res-m-btm animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [a("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/graph-jasmine-b.png",
//                             alt: "graph"
//                         }
//                     })])])
//                 }, function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("div", {
//                         staticClass: "col-md-6"
//                     }, [a("div", {
//                         staticClass: "res-m-btm animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [a("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/graph-jasmine-c.png",
//                             alt: "graph"
//                         }
//                     })])])
//                 }, function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("div", {
//                         staticClass: "col-md-5"
//                     }, [a("div", {
//                         staticClass: "res-m-btm animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [a("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/graph-jasmine-d.png",
//                             alt: "graph"
//                         }
//                     })])])
//                 }]
//             },
//             f = s("VU/8")(C, u, !1, null, null, null).exports,
//             g = {
//                 data: function() {
//                     return {
//                         lang: d
//                     }
//                 },
//                 mounted: function() {}
//             },
//             h = {
//                 render: function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg-alt pb-no",
//                         staticStyle: {
//                             "background-color": "#f9faff"
//                         },
//                         attrs: {
//                             id: "why"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row text-center"
//                     }, [s("div", {
//                         staticClass: "col-md-12"
//                     }, [s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("h3", {
//                         staticClass: "sub-heading ucap text-left animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".8"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("services", "h1")))]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, t._l(t.lang.get("services", "f"), function(a, i) {
//                         return s("div", {
//                             staticClass: "col-md-4 res-m-bttm "
//                         }, [s("div", {
//                             staticClass: "features-box-s3 animated ",
//                             attrs: {
//                                 "data-animate": "fadeInUp",
//                                 "data-delay": "." + i
//                             }
//                         }, [s("div", {
//                             staticClass: "features-icon-s3"
//                         }, [s("img", {
//                             attrs: {
//                                 src: a.image,
//                                 alt: "icon"
//                             }
//                         })]), t._v(" "), s("h5", {
//                             staticClass: "features-title-s3"
//                         }, [t._v(" " + t._s(a.h1))]), t._v(" "), s("span", {
//                             staticClass: "features-subtitle-s3"
//                         }, [t._v(t._s(a.p1))]), t._v(" "), s("p", [t._v(t._s(a.p2))])])])
//                     })), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x d-none d-md-block"
//                     })])])])
//                 },
//                 staticRenderFns: []
//             },
//             b = s("VU/8")(g, h, !1, null, null, null).exports,
//             y = {
//                 data: function() {
//                     return {
//                         lang: d
//                     }
//                 },
//                 mounted: function() {}
//             },
//             k = {
//                 render: function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg",
//                         attrs: {
//                             id: "benifits"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row text-center"
//                     }, [s("div", {
//                         staticClass: "col-md-12"
//                     }, [s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("h3", {
//                         staticClass: "sub-heading ucap text-left animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".8"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("services", "h2")))]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "row mb--x8"
//                     }, t._l(t.lang.get("services", "s"), function(a, i) {
//                         return s("div", {
//                             staticClass: "col-lg-6"
//                         }, [s("div", {
//                             staticClass: "benefits-item animated",
//                             attrs: {
//                                 "data-animate": "fadeInUp",
//                                 "data-delay": "." + i
//                             }
//                         }, [s("div", {
//                             staticClass: "benefits-icon text-center"
//                         }, [s("h1", [t._v(" " + t._s(a.image))])]), t._v(" "), s("div", {
//                             staticClass: "benefits-txt"
//                         }, [s("p", [t._v(t._s(a.p))])])])])
//                     }))])])])
//                 },
//                 staticRenderFns: []
//             },
//             w = s("VU/8")(y, k, !1, null, null, null).exports,
//             I = {
//                 render: function() {
//                     this.$createElement;
//                     this._self._c;
//                     return this._m(0)
//                 },
//                 staticRenderFns: [function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg",
//                         staticStyle: {
//                             "background-color": "#f9faff"
//                         },
//                         attrs: {
//                             id: "roadmap"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-6"
//                     }, [s("div", {
//                         staticClass: "section-head-s6"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [t._v("TECO UPDATES")]), t._v(" "), s("h2", {
//                         staticClass: "section-title-s6 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v("Road Map")])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-1x"
//                     }), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x d-none d-md-block"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "timeline-row timeline-row-odd  animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "row no-gutters text-left text-lg-center justify-content-center"
//                     }, [s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item "
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("SEPTEMBER  2018")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("ICO")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Start PRE-ICO")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item "
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("October 2018")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("ICO")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Start ICO")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item "
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("December 2018")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("Listing")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Listing of tokens on the exchange")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item "
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("January 2019")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("PLATFORM")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Alpha version")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "timeline-row timeline-row-even animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "row no-gutters text-left text-lg-center justify-content-center flex-row-reverse"
//                     }, [s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item "
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("March 2019")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("PLATFORM")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Beta testing platform")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item"
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("April 2019")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("TECO")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Release of TECO Blockchain")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item"
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("June 2019")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("PLATFORM")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Launching a mobile application")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "timeline-row timeline-row-odd timeline-row-last mb--x5 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "row no-gutters text-left text-lg-center justify-content-center"
//                     }, [s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item"
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("July 2019")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("PLATFORM")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Open API for developers")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item"
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("October 2019")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("PLATFORM")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Finish of the project")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg"
//                     }, [s("div", {
//                         staticClass: "timeline-item"
//                     }, [s("span", {
//                         staticClass: "timeline-date"
//                     }, [t._v("December 2019")]), t._v(" "), s("h6", {
//                         staticClass: "timeline-title"
//                     }, [t._v("COMMUNITY")]), t._v(" "), s("ul", {
//                         staticClass: "timeline-info"
//                     }, [s("li", [t._v("Formation of an ecological community on a platform")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x d-lg-none"
//                     })])])])
//                 }]
//             },
//             U = s("VU/8")({
//                 data: function() {
//                     return {}
//                 },
//                 mounted: function() {}
//             }, I, !1, null, null, null).exports,
//             x = {
//                 render: function() {
//                     this.$createElement;
//                     this._self._c;
//                     return this._m(0)
//                 },
//                 staticRenderFns: [function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg",
//                         attrs: {
//                             id: "tokenSale"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-6"
//                     }, [s("div", {
//                         staticClass: "section-head-s6"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [t._v("TECO Token")]), t._v(" "), s("h2", {
//                         staticClass: "section-title-s6 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v("Token Sale")]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v("TECO token is complitable with ERC20 Standart.")])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-7 text-center"
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-sm-4"
//                     }, [s("div", {
//                         staticClass: "token-stage animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-stage-title token-stage-pre"
//                     }, [t._v("PRE SALE")]), t._v(" "), s("div", {
//                         staticClass: "token-stage-date"
//                     }, [s("h6", [t._v("25 August 2018")]), t._v(" "), s("span", [t._v("1 Month")])]), t._v(" "), s("div", {
//                         staticClass: "token-stage-info"
//                     }, [s("span", {
//                         staticClass: "token-stage-bonus"
//                     }, [t._v("45% Bonus")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-sm-4"
//                     }, [s("div", {
//                         staticClass: "token-stage animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-stage-title"
//                     }, [t._v("PRE ICO")]), t._v(" "), s("div", {
//                         staticClass: "token-stage-date"
//                     }, [s("h6", [t._v("24 September 2018")]), t._v(" "), s("span", [t._v("15 Days")])]), t._v(" "), s("div", {
//                         staticClass: "token-stage-info"
//                     }, [s("span", {
//                         staticClass: "token-stage-bonus"
//                     }, [t._v("30% Bonus")]), t._v(" "), s("span", {
//                         staticClass: "token-stage-cap"
//                     }, [t._v("Soft Cap")]), t._v(" "), s("span", {
//                         staticClass: "token-stage-amount"
//                     }, [t._v("500 000 USD")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-sm-4"
//                     }, [s("div", {
//                         staticClass: "token-stage animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-stage-title"
//                     }, [t._v("ICO")]), t._v(" "), s("div", {
//                         staticClass: "token-stage-date"
//                     }, [s("h6", [t._v("15 October 2018")]), t._v(" "), s("span", [t._v("30 Days")])]), t._v(" "), s("div", {
//                         staticClass: "token-stage-info"
//                     }, [s("span", {
//                         staticClass: "token-stage-bonus"
//                     }, [t._v("15% Bonus")]), t._v(" "), s("span", {
//                         staticClass: "token-stage-cap"
//                     }, [t._v("Soft Cap")]), t._v(" "), s("span", {
//                         staticClass: "token-stage-amount"
//                     }, [t._v("1 500 000 USD")])])])])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x d-none d-lg-block"
//                     }), t._v(" "), s("div", {
//                         staticClass: "token-action-box res-m-bttm animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".7"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-action-title"
//                     }, [t._v("Join Our "), s("br"), t._v(" Pre-Sale List")]), t._v(" "), s("div", {
//                         staticClass: "token-action-date"
//                     }, [t._v("Pre-Sale Start at "), s("span", [t._v("03 July 2018")])]), t._v(" "), s("div", {
//                         staticClass: "token-action-btn"
//                     }, [s("a", {
//                         staticClass: "btn btn-lg",
//                         attrs: {
//                             href: "http://sale.eco-start.com/"
//                         }
//                     }, [t._v("Signup & Join")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-5"
//                     }, [s("ul", {
//                         staticClass: "token-details-list animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".8"
//                         }
//                     }, [s("li", [s("span", {
//                         staticClass: "token-details-title"
//                     }, [t._v("Token Symbol")]), t._v(" "), s("span", {
//                         staticClass: "token-details-info"
//                     }, [t._v("TECO")])]), t._v(" "), s("li", [s("span", {
//                         staticClass: "token-details-title"
//                     }, [t._v("Token Sale Start")]), t._v(" "), s("span", {
//                         staticClass: "token-details-info"
//                     }, [t._v("25 August 2018")])]), t._v(" "), s("li", [s("span", {
//                         staticClass: "token-details-title"
//                     }, [t._v("Token Sale End")]), t._v(" "), s("span", {
//                         staticClass: "token-details-info"
//                     }, [t._v("15 November 2018")])]), t._v(" "), s("li", [s("span", {
//                         staticClass: "token-details-title"
//                     }, [t._v("Tokens for sale")]), t._v(" "), s("span", {
//                         staticClass: "token-details-info"
//                     }, [t._v("200,000,000")])]), t._v(" "), s("li", [s("span", {
//                         staticClass: "token-details-title"
//                     }, [t._v("Token Price")]), t._v(" "), s("span", {
//                         staticClass: "token-details-info"
//                     }, [t._v("$0.1 USD")])]), t._v(" "), s("li", [s("span", {
//                         staticClass: "token-details-title"
//                     }, [t._v("Specifications")]), t._v(" "), s("span", {
//                         staticClass: "token-details-info"
//                     }, [t._v("TECO token")])]), t._v(" "), s("li", [s("span", {
//                         staticClass: "token-details-title"
//                     }, [t._v("Max circulating supply")]), t._v(" "), s("span", {
//                         staticClass: "token-details-info"
//                     }, [t._v("130,000,000")])])])])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x d-none d-md-block"
//                     }), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-12"
//                     }, [s("h3", {
//                         staticClass: "sub-heading-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [t._v("Token Allocation")]), t._v(" "), s("div", {
//                         staticClass: "token-bar-chart animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-item tbic1",
//                         staticStyle: {
//                             width: "7%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("2%")]), t._v(" "), s("span", [t._v("Bounty")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic2",
//                         staticStyle: {
//                             width: "58%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("65%")]), t._v(" "), s("span", [t._v("For sale")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic3",
//                         staticStyle: {
//                             width: "22%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("22%")]), t._v(" "), s("span", [t._v("Team & Partners")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic4",
//                         staticStyle: {
//                             width: "3%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("1%")]), t._v(" "), s("span", [t._v("Reserve Fund")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic5",
//                         staticStyle: {
//                             width: "7%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("10%")]), t._v(" "), s("span", [t._v("Miners")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x d-none d-md-block"
//                     }), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-12"
//                     }, [s("h3", {
//                         staticClass: "sub-heading-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v("Operating Allocation")]), t._v(" "), s("div", {
//                         staticClass: "token-bar-chart animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-item tbic5",
//                         staticStyle: {
//                             width: "55%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("55%")]), t._v(" "), s("span", [t._v("Marketing & Advertising")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic4",
//                         staticStyle: {
//                             width: "20%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("20%")]), t._v(" "), s("span", [t._v("Software development")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic3",
//                         staticStyle: {
//                             width: "15%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("15%")]), t._v(" "), s("span", [t._v("Operating")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic2",
//                         staticStyle: {
//                             width: "5%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("5%")]), t._v(" "), s("span", [t._v("Legal")])])]), t._v(" "), s("div", {
//                         staticClass: "token-bar-item tbic5",
//                         staticStyle: {
//                             width: "5%"
//                         }
//                     }, [s("div", {
//                         staticClass: "token-bar-txt"
//                     }, [s("span", [t._v("5%")]), t._v(" "), s("span", [t._v("Insurance Fund")])])])])])])])])])
//                 }]
//             },
//             E = s("VU/8")({
//                 data: function() {
//                     return {}
//                 },
//                 mounted: function() {}
//             }, x, !1, null, null, null).exports,
//             S = {
//                 data: function() {
//                     return {
//                         lang: d
//                     }
//                 },
//                 mounted: function() {}
//             },
//             T = {
//                 render: function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg-alt section-fix",
//                         attrs: {
//                             id: "team"
//                         }
//                     }, [s("div", {
//                         staticClass: "background-shape bs-reverse"
//                     }), t._v(" "), s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-md-12"
//                     }, [s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("h3", {
//                         staticClass: "sub-heading ucap text-left animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".8"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("team", "h1")))]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, t._l(t.lang.get("team", "items"), function(a, i) {
//                         return s("div", {
//                             staticClass: "col-md-6 col-lg-4 offset-lg-2 offset-xl-0 col-xl-3 d-inline-flex justify-content-center animated",
//                             attrs: {
//                                 "data-animate": "fadeInUp",
//                                 "data-delay": "." + i
//                             }
//                         }, [s("div", {
//                             staticClass: "team-member"
//                         }, [s("div", {
//                             staticClass: "team-photo"
//                         }, [s("img", {
//                             attrs: {
//                                 src: a.image,
//                                 alt: "team"
//                             }
//                         }), t._v(" "), s("a", {
//                             staticClass: "expand-trigger content-popup",
//                             attrs: {
//                                 href: "#team-profile-" + i
//                             }
//                         })]), t._v(" "), s("div", {
//                             staticClass: "team-info"
//                         }, [s("h5", {
//                             staticClass: "team-name",
//                             domProps: {
//                                 innerHTML: t._s(a.name)
//                             }
//                         }), t._v(" "), s("span", {
//                             staticClass: "team-title"
//                         }, [t._v(" " + t._s(a.position) + " ")]), t._v(" "), s("ul", {
//                             staticClass: "team-social"
//                         }, t._l(a.networks, function(t) {
//                             return s("li", [s("a", {
//                                 attrs: {
//                                     target: "_blank",
//                                     href: t.url
//                                 }
//                             }, [s("em", {
//                                 class: t.icon
//                             })])])
//                         }))]), t._v(" "), s("div", {
//                             staticClass: "team-profile mfp-hide",
//                             attrs: {
//                                 id: "team-profile-" + i
//                             }
//                         }, [s("button", {
//                             staticClass: "mfp-close",
//                             attrs: {
//                                 title: "Close (Esc)",
//                                 type: "button"
//                             }
//                         }, [t._v("×")]), t._v(" "), s("div", {
//                             staticClass: "container-fluid"
//                         }, [s("div", {
//                             staticClass: "row no-mg"
//                         }, [s("div", {
//                             staticClass: "col-md-6"
//                         }, [s("div", {
//                             staticClass: "team-profile-photo"
//                         }, [s("img", {
//                             attrs: {
//                                 src: a.image,
//                                 alt: "team"
//                             }
//                         })])]), t._v(" "), s("div", {
//                             staticClass: "col-md-6"
//                         }, [s("div", {
//                             staticClass: "team-profile-info"
//                         }, [s("h3", {
//                             staticClass: "name",
//                             domProps: {
//                                 innerHTML: t._s(a.name)
//                             }
//                         }), t._v(" "), s("p", {
//                             staticClass: "sub-title",
//                             domProps: {
//                                 innerHTML: t._s(a.position)
//                             }
//                         }), t._v(" "), s("ul", {
//                             staticClass: "tpi-social"
//                         }, t._l(a.networks, function(t) {
//                             return s("li", [s("a", {
//                                 attrs: {
//                                     target: "_blank",
//                                     href: t.url
//                                 }
//                             }, [s("em", {
//                                 class: t.icon
//                             })])])
//                         })), t._v(" "), s("p", {
//                             domProps: {
//                                 innerHTML: t._s(a.about)
//                             }
//                         })])])])])])])])
//                     })), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-md-12"
//                     }, [s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("h3", {
//                         staticClass: "sub-heading ucap text-left animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".8"
//                         }
//                     }, [t._v(" " + t._s(t.lang.get("advisors", "h1")) + " ")]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, t._l(t.lang.get("advisors", "items"), function(a, i) {
//                         return s("div", {
//                             staticClass: "col-md-6 col-lg-4 offset-lg-2 offset-xl-0 col-xl-3 d-inline-flex justify-content-center animated",
//                             attrs: {
//                                 "data-animate": "fadeInUp",
//                                 "data-delay": ".8"
//                             }
//                         }, [s("div", {
//                             staticClass: "team-member"
//                         }, [s("div", {
//                             staticClass: "team-photo"
//                         }, [s("img", {
//                             attrs: {
//                                 src: a.image,
//                                 alt: "team"
//                             }
//                         }), t._v(" "), s("a", {
//                             staticClass: "expand-trigger content-popup",
//                             attrs: {
//                                 href: "#advisor-profile-" + i
//                             }
//                         })]), t._v(" "), s("div", {
//                             staticClass: "team-info"
//                         }, [s("h5", {
//                             staticClass: "team-name",
//                             domProps: {
//                                 innerHTML: t._s(a.name)
//                             }
//                         }), t._v(" "), s("span", {
//                             staticClass: "team-title"
//                         }, [t._v(" " + t._s(a.position) + " ")]), t._v(" "), s("ul", {
//                             staticClass: "team-social"
//                         }, t._l(a.networks, function(t) {
//                             return s("li", [s("a", {
//                                 attrs: {
//                                     target: "_blank",
//                                     href: t.url
//                                 }
//                             }, [s("em", {
//                                 class: t.icon
//                             })])])
//                         }))]), t._v(" "), s("div", {
//                             staticClass: "team-profile mfp-hide",
//                             attrs: {
//                                 id: "advisor-profile-" + i
//                             }
//                         }, [s("button", {
//                             staticClass: "mfp-close",
//                             attrs: {
//                                 title: "Close (Esc)",
//                                 type: "button"
//                             }
//                         }, [t._v("×")]), t._v(" "), s("div", {
//                             staticClass: "container-fluid"
//                         }, [s("div", {
//                             staticClass: "row no-mg"
//                         }, [s("div", {
//                             staticClass: "col-md-6"
//                         }, [s("div", {
//                             staticClass: "team-profile-photo"
//                         }, [s("img", {
//                             attrs: {
//                                 src: a.image,
//                                 alt: "team"
//                             }
//                         })])]), t._v(" "), s("div", {
//                             staticClass: "col-md-6"
//                         }, [s("div", {
//                             staticClass: "team-profile-info"
//                         }, [s("h3", {
//                             staticClass: "name",
//                             domProps: {
//                                 innerHTML: t._s(a.name)
//                             }
//                         }), t._v(" "), s("p", {
//                             staticClass: "sub-title",
//                             domProps: {
//                                 innerHTML: t._s(a.position)
//                             }
//                         }), t._v(" "), s("ul", {
//                             staticClass: "tpi-social"
//                         }, t._l(a.networks, function(t) {
//                             return s("li", [s("a", {
//                                 attrs: {
//                                     target: "_blank",
//                                     href: t.url
//                                 }
//                             }, [s("em", {
//                                 class: t.icon
//                             })])])
//                         })), t._v(" "), s("p", {
//                             domProps: {
//                                 innerHTML: t._s(a.about)
//                             }
//                         })])])])])])])])
//                     }))])])])
//                 },
//                 staticRenderFns: []
//             },
//             j = s("VU/8")(S, T, !1, null, null, null).exports,
//             O = {
//                 render: function() {
//                     this.$createElement;
//                     this._self._c;
//                     return this._m(0)
//                 },
//                 staticRenderFns: [function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg-alt",
//                         attrs: {
//                             id: "docs"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-6"
//                     }, [s("div", {
//                         staticClass: "section-head-s6"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [t._v("Download DOCUMENTS")]), t._v(" "), s("h2", {
//                         staticClass: "section-title-s6 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v("Read Our Documents")]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v("Here is our full documents that help you to understand about us.")])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-3 col-md-6 res-m-bttm animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "document-item"
//                     }, [s("div", {
//                         staticClass: "document-img"
//                     }, [s("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/doc-a.png",
//                             alt: "doc"
//                         }
//                     })]), t._v(" "), s("h6", {
//                         staticClass: "document-title"
//                     }, [t._v("Whitepaper")]), t._v(" "), s("ul", {
//                         staticClass: "document-links"
//                     }, [s("li", [s("a", {
//                         attrs: {
//                             href: "/static/docs/whitepaper.pdf",
//                             target: "_blank"
//                         }
//                     }, [t._v("ENG")])])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-3 col-md-6 res-m-bttm animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [s("div", {
//                         staticClass: "document-item"
//                     }, [s("div", {
//                         staticClass: "document-img"
//                     }, [s("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/doc-b.png",
//                             alt: "doc"
//                         }
//                     })]), t._v(" "), s("h6", {
//                         staticClass: "document-title"
//                     }, [t._v("Onepager")]), t._v(" "), s("ul", {
//                         staticClass: "document-links"
//                     }, [s("li", [s("a", {
//                         attrs: {
//                             href: "/static/docs/onepager_en.pdf",
//                             target: "_blank"
//                         }
//                     }, [t._v("ENG")])]), t._v(" "), s("li", [s("a", {
//                         attrs: {
//                             href: "/static/docs/onepager_ru.pdf",
//                             target: "_blank"
//                         }
//                     }, [t._v("RUS")])])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-3 col-md-6 res-m-bttm animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [s("div", {
//                         staticClass: "document-item"
//                     }, [s("div", {
//                         staticClass: "document-img"
//                     }, [s("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/doc-c.png",
//                             alt: "doc"
//                         }
//                     })]), t._v(" "), s("h6", {
//                         staticClass: "document-title"
//                     }, [t._v("Privacy Policy")]), t._v(" "), s("ul", {
//                         staticClass: "document-links"
//                     }, [s("li", [s("a", {
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [t._v("ENG")])])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-3 col-md-6 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".7"
//                         }
//                     }, [s("div", {
//                         staticClass: "document-item"
//                     }, [s("div", {
//                         staticClass: "document-img"
//                     }, [s("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/doc-d.png",
//                             alt: "doc"
//                         }
//                     })]), t._v(" "), s("h6", {
//                         staticClass: "document-title"
//                     }, [t._v("Terms of Sales")]), t._v(" "), s("ul", {
//                         staticClass: "document-links"
//                     }, [s("li", [s("a", {
//                         attrs: {
//                             href: "/static/docs/terms.pdf",
//                             target: "_blank"
//                         }
//                     }, [t._v("ENG")])])])])])])])])])
//                 }]
//             },
//             z = s("VU/8")({
//                 data: function() {
//                     return {}
//                 },
//                 mounted: function() {}
//             }, O, !1, null, null, null).exports,
//             F = {
//                 render: function() {
//                     this.$createElement;
//                     this._self._c;
//                     return this._m(0)
//                 },
//                 staticRenderFns: [function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad section-bg-alt",
//                         attrs: {
//                             id: "faq"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-7"
//                     }, [s("div", {
//                         staticClass: "section-head-s6"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [t._v("Faq")]), t._v(" "), s("h2", {
//                         staticClass: "section-title-s6 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v("Frequently asked questions")]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v("Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch using the contact form below.")])]), t._v(" "), s("div", {
//                         staticClass: "gaps size-1x"
//                     })])]), t._v(" "), s("div", {
//                         staticClass: "row align-items-center"
//                     }, [s("div", {
//                         staticClass: "col-lg-8 res-m-bttm"
//                     }, [s("div", {
//                         staticClass: "tab-custom-s3"
//                     }, [s("ul", {
//                         staticClass: "nav nav-tabs text-center"
//                     }, [s("li", {
//                         staticClass: "nav-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link active",
//                         attrs: {
//                             "data-toggle": "tab",
//                             href: "#tab-1"
//                         }
//                     }, [t._v("General")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link",
//                         attrs: {
//                             "data-toggle": "tab",
//                             href: "#tab-2"
//                         }
//                     }, [t._v("Pre-ICO & ICO")])]), t._v(" "), s("li", {
//                         staticClass: "nav-item animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [s("a", {
//                         staticClass: "nav-link",
//                         attrs: {
//                             "data-toggle": "tab",
//                             href: "#tab-3"
//                         }
//                     }, [t._v("Tokens")])])]), t._v(" "), s("div", {
//                         staticClass: "tab-content"
//                     }, [s("div", {
//                         staticClass: "tab-pane fade show active",
//                         attrs: {
//                             id: "tab-1"
//                         }
//                     }, [s("div", {
//                         staticClass: "accordion-s2",
//                         attrs: {
//                             id: "accordion-1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card active animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-1-1"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tWhat is the EcoStart Ecosystem?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse show",
//                         attrs: {
//                             id: "collapse-1-1",
//                             "data-parent": "#accordion-1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("Ecostart is an innovative solution for the global market for environmental projects. Ecostart is implemented in the form of a public\n                                                                                                    distributed cryptographic platform for creating applications and software solutions on an open block system to support\n                                                                                                    environmental and nature protection projects. Issue of EcoCoin crypto currency will be the first step towards our goal. It will be\n                                                                                                    followed decentralized investment environmental fund (тикер IEF), fundraising application - service for creating a personal digital token\n                                                                                                    and more.\n                                                                                                ")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-1-2"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  What is our mission?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-1-2",
//                             "data-parent": "#accordion-1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v(" \n                                                                                                    Our mission is to completely democratize process of investment of environmental projects by eliminating intermediaries and\n                                                                                                    placing the power and control where it belongs - entirely into the hands of investors and ECN crypto currency holders.\n                                                                                                ")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-1-3"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  How is a IEF Fund different from a traditional investment fund?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-1-3",
//                             "data-parent": "#accordion-1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("\n                                                                                                A IEF Fund invests in crypto assets only and does not have a central power of authority. There is no fund manager to make\n                                                                                                decision on behalf of investors. This is where you can feel the power of the wisdom of the crowd. All participants are given the\n                                                                                                chance to vote and to decide the future of the next investment.\n                                                                                            ")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-1-4"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  When will the EcoStart platform be launched?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-1-4",
//                             "data-parent": "#accordion-1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("EcoStart Beta will be launched in Q4 2018 The official launch of the EcoStart Platform will follow in Q2 2019")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-1-5"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  Do you have a prototype?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-1-5",
//                             "data-parent": "#accordion-1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("Our platform unites a number of serious tech solutions in a single system. Some parts of the technology already exist and are being employed.\nAs of now we have aerospace monitoring application of the earth's surface.")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "tab-pane fade",
//                         attrs: {
//                             id: "tab-2"
//                         }
//                     }, [s("div", {
//                         staticClass: "accordion-s2",
//                         attrs: {
//                             id: "accordion-2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-2-2"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tWhat currencies are accepted for payment?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-2-2",
//                             "data-parent": "#accordion-2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("The following currencies are accepted for payment: Ethereum (тикер ETH), Bitcoin (тикер BTC) Litecoin (тикер LTC) and US Dollar (тикер USD).")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-2-4"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  Which countries or nationalities are eligible to purchase ECT tokens?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-2-4",
//                             "data-parent": "#accordion-2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("Citizens of any country except USA may take part in the project.")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-2-3"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  I transferred ETH to your account, but while the transaction was being processed, ICO ended. What will happen to my ETH?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-2-3",
//                             "data-parent": "#accordion-2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("If the ETH is transferred to the project's wallet after the ICO is finished, it is returned to the sender's wallet according to the current exchange\nrate with no conversion. For example, after the ICO is completed, if the project wallet is funded with 1 ETH, the same amount will be returned to\nthe sender's wallet, disregarding the ETH quote at the moment the ETH was sent. To prevent such situations, we recommend setting the\nappropriate transaction commission for timely processing and considering the ICO timeframe. The same process will be activated for any other\ncryptocurrency.")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-2-4"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  What is the minimum target? What happens if the required amount is not raised?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-2-4",
//                             "data-parent": "#accordion-2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("Minimum target equals $1 million. If the amount is not raised, we will return all the raised funds back to the wallets of the crowdsale participants.\ncryptocurrency.")])])])])])]), t._v(" "), s("div", {
//                         staticClass: "tab-pane fade",
//                         attrs: {
//                             id: "tab-3"
//                         }
//                     }, [s("div", {
//                         staticClass: "accordion-s2",
//                         attrs: {
//                             id: "accordion-3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card active animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-3-1"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tWhen will the bounty payouts take place?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse show",
//                         attrs: {
//                             id: "collapse-3-1",
//                             "data-parent": "#accordion-3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("Bounty payouts will be paid to the participants within one week after the ICO.")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-3-2"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  When will your tokens be listed on exchanges?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-3-2",
//                             "data-parent": "#accordion-3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("We plan to list ECT tokens on several major exchanges within one month after the ICO.")])])])]), t._v(" "), s("div", {
//                         staticClass: "card animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         staticClass: "collapsed",
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-3-3"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  Which blockchain will you use?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse",
//                         attrs: {
//                             id: "collapse-3-3",
//                             "data-parent": "#accordion-3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("\n                                                                                                    At the current stage, we will use Ethereum smart contracts. Additionally, we are not platform or instrument dependent (we are not tied to a\n                                                                                                    particular platform or instrument in the blockchain). We will create our own blockbuster platform that will match that best meets our requirements\n                                                                                                    for speed, reliability, and cost.\n                                                                                                ")])])])]), t._v(" "), s("div", {
//                         staticClass: "card active animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-header"
//                     }, [s("h5", [s("a", {
//                         attrs: {
//                             "data-toggle": "collapse",
//                             "data-target": "#collapse-3-4"
//                         }
//                     }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t  What is the service of creating a personal digital token?"), s("span", {
//                         staticClass: "plus-minus"
//                     }, [s("span", {
//                         staticClass: "ti ti-angle-up"
//                     })])])])]), t._v(" "), s("div", {
//                         staticClass: "collapse show",
//                         attrs: {
//                             id: "collapse-3-4",
//                             "data-parent": "#accordion-3"
//                         }
//                     }, [s("div", {
//                         staticClass: "card-body"
//                     }, [s("p", [t._v("The service for creating personal digital tokens and ICO will provide an opportunity for environmental project initiators to create\ntheir own token using the easy-to-use interface of the EcoStart platform. The initial offer of coins will allow to participate in\nfinancing the project literally to all comers. The issue of own tokens will be carried out on the basis of the EchoCoin crypto\ncurrency protocol. ECT Tokens can serve as a product token, electronic cryptovexel, share in the project and participation\ncertificates. For each token, you can specify your own name, output volume, number of decimal places and other parameters\nand\nproperties.")])])])])])])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-4"
//                     }, [s("div", {
//                         staticClass: "fake-class animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [s("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/graph-jasmine-e.png",
//                             alt: "graph"
//                         }
//                     })])])])])])])
//                 }]
//             },
//             R = s("VU/8")({
//                 data: function() {
//                     return {}
//                 },
//                 mounted: function() {}
//             }, F, !1, null, null, null).exports,
//             P = {
//                 render: function() {
//                     this.$createElement;
//                     this._self._c;
//                     return this._m(0)
//                 },
//                 staticRenderFns: [function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("div", {
//                         staticClass: "section section-pad-md section-bg",
//                         attrs: {
//                             id: "contact"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-3 col-md-5"
//                     }, [s("div", {
//                         staticClass: "section-head-s6"
//                     }, [s("h6", {
//                         staticClass: "heading-sm-s2 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [t._v("Contact")]), t._v(" "), s("h2", {
//                         staticClass: "section-title-s6 animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [t._v("Get In Touch")]), t._v(" "), s("p", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [t._v("Any question? Reach out to us and we’ll get back to you shortly.")])]), t._v(" "), s("ul", {
//                         staticClass: "contact-info-alt"
//                     }, [s("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [s("em", {
//                         staticClass: "fa fa-phone"
//                     }), s("span", [t._v("+44 0123 4567")])]), t._v(" "), s("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [s("em", {
//                         staticClass: "fa fa-envelope"
//                     }), s("span", [t._v("info@yourcompany.com")])]), t._v(" "), s("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [s("em", {
//                         staticClass: "fa fa-paper-plane"
//                     }), s("span", [t._v("Join us on Telegram")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-4 col-md-7 offset-lg-1 offset-md-0 res-m-bttm"
//                     }, [s("div", {
//                         staticClass: "gaps size-3x d-none d-md-block"
//                     }), t._v(" "), s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("form", {
//                         staticClass: "form-message form-message-s2 text-left",
//                         attrs: {
//                             id: "contact-form",
//                             action: "form/contact.php",
//                             method: "post"
//                         }
//                     }, [s("div", {
//                         staticClass: "form-results"
//                     }), t._v(" "), s("div", {
//                         staticClass: "input-field animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".7"
//                         }
//                     }, [s("input", {
//                         staticClass: "input-border required",
//                         attrs: {
//                             name: "contact-name",
//                             type: "text",
//                             placeholder: "Your Name"
//                         }
//                     })]), t._v(" "), s("div", {
//                         staticClass: "input-field animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".8"
//                         }
//                     }, [s("input", {
//                         staticClass: "input-border required email",
//                         attrs: {
//                             name: "contact-email",
//                             type: "email",
//                             placeholder: "Your Email"
//                         }
//                     })]), t._v(" "), s("div", {
//                         staticClass: "input-field animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".9"
//                         }
//                     }, [s("textarea", {
//                         staticClass: "txtarea input-border required",
//                         attrs: {
//                             name: "contact-message",
//                             placeholder: "Your Message"
//                         }
//                     })]), t._v(" "), s("input", {
//                         staticClass: "d-none",
//                         attrs: {
//                             type: "text",
//                             name: "form-anti-honeypot",
//                             value: ""
//                         }
//                     }), t._v(" "), s("div", {
//                         staticClass: "input-field animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.0"
//                         }
//                     }, [s("button", {
//                         staticClass: "btn",
//                         attrs: {
//                             type: "submit"
//                         }
//                     }, [t._v("Submit")])])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-4 align-self-center"
//                     }, [s("div", {
//                         staticClass: "fake-class animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": "1.1"
//                         }
//                     }, [s("img", {
//                         attrs: {
//                             src: "/static/images/jasmine/graph-jasmine-f.png",
//                             alt: "graph"
//                         }
//                     })])])])])]), t._v(" "), s("div", {
//                         staticClass: "section subscribe-section-s2 section-bg section-dark",
//                         attrs: {
//                             id: "join"
//                         }
//                     }, [s("div", {
//                         staticClass: "container"
//                     }, [s("div", {
//                         staticClass: "subscribe-box animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [s("div", {
//                         staticClass: "row"
//                     }, [s("div", {
//                         staticClass: "col-lg-6"
//                     }, [s("div", {
//                         staticClass: "heading-sm-s3"
//                     }, [s("h5", [t._v("Don't miss out, Stay updated")])])]), t._v(" "), s("div", {
//                         staticClass: "col-lg-6"
//                     }, [s("div", {
//                         staticClass: "gaps size-2x"
//                     }), t._v(" "), s("form", {
//                         staticClass: "subscription-form inline-form-s2",
//                         attrs: {
//                             id: "subscribe-form",
//                             action: "form/subscribe.php",
//                             method: "post"
//                         }
//                     }, [s("input", {
//                         staticClass: "input-round-s2 required email",
//                         attrs: {
//                             type: "text",
//                             name: "youremail",
//                             placeholder: "Enter your email address"
//                         }
//                     }), t._v(" "), s("input", {
//                         staticClass: "d-none",
//                         attrs: {
//                             type: "text",
//                             name: "form-anti-honeypot",
//                             value: ""
//                         }
//                     }), t._v(" "), s("button", {
//                         staticClass: "btn btn-plane",
//                         attrs: {
//                             type: "submit"
//                         }
//                     }, [t._v("Subscribe")]), t._v(" "), s("div", {
//                         staticClass: "subscribe-results"
//                     })])])])])])])])
//                 }]
//             },
//             M = s("VU/8")({
//                 data: function() {
//                     return {}
//                 },
//                 mounted: function() {}
//             }, P, !1, null, null, null).exports,
//             A = {
//                 render: function() {
//                     this.$createElement;
//                     this._self._c;
//                     return this._m(0)
//                 },
//                 staticRenderFns: [function() {
//                     var t = this.$createElement,
//                         a = this._self._c || t;
//                     return a("div", [a("div", {
//                         staticClass: "section footer-scetion footer-jasmine"
//                     }, [a("div", {
//                         staticClass: "container"
//                     }, [a("div", {
//                         staticClass: "row text-center"
//                     }, [a("div", {
//                         staticClass: "col-md-12"
//                     }, [a("ul", {
//                         staticClass: "social"
//                     }, [a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".1"
//                         }
//                     }, [a("a", {
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-facebook-f"
//                     })])]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".2"
//                         }
//                     }, [a("a", {
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-twitter"
//                     })])]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".3"
//                         }
//                     }, [a("a", {
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-youtube"
//                     })])]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".4"
//                         }
//                     }, [a("a", {
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-github"
//                     })])]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".5"
//                         }
//                     }, [a("a", {
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-bitcoin"
//                     })])]), this._v(" "), a("li", {
//                         staticClass: "animated",
//                         attrs: {
//                             "data-animate": "fadeInUp",
//                             "data-delay": ".6"
//                         }
//                     }, [a("a", {
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [a("em", {
//                         staticClass: "fab fa-medium-m"
//                     })])])]), this._v(" "), a("a", {
//                         staticClass: "footer-logo",
//                         attrs: {
//                             href: "#"
//                         }
//                     }, [a("img", {
//                         attrs: {
//                             src: "/static/images/logo.png",
//                             alt: "logo2x",
//                             srcset: "/static/images/logo2x.png 2x"
//                         }
//                     })])])])])])])
//                 }]
//             },
//             B = s("VU/8")({
//                 data: function() {
//                     return {}
//                 },
//                 mounted: function() {}
//             }, A, !1, null, null, null).exports;
//         i.a.component("headerBlock", v), i.a.component("whatBlock", _), i.a.component("servicesBlock", f), i.a.component("nextBlock", b), i.a.component("futureBlock", w), i.a.component("roadMap", U), i.a.component("sale", E), i.a.component("team", j), i.a.component("docs", z), i.a.component("faq", R), i.a.component("contacts", M), i.a.component("footerBlock", B);
//         var L = {
//                 render: function() {
//                     var t = this,
//                         a = t.$createElement,
//                         s = t._self._c || a;
//                     return s("div", [s("headerBlock"), t._v(" "), s("whatBlock"), t._v(" "), s("servicesBlock"), t._v(" "), s("nextBlock"), t._v(" "), s("futureBlock"), t._v(" "), s("roadMap"), t._v(" "), s("sale"), t._v(" "), s("team"), t._v(" "), s("docs"), t._v(" "), s("faq"), t._v(" "), s("contacts"), t._v(" "), s("footerBlock")], 1)
//                 },
//                 staticRenderFns: []
//             },
//             H = s("VU/8")({
//                 data: function() {
//                     return {}
//                 },
//                 mounted: function() {}
//             }, L, !1, null, null, null).exports;
//         i.a.use(l.a);
//         var q = new l.a({
//             routes: [{
//                 path: "/",
//                 component: H
//             }]
//         });
//         i.a.config.productionTip = !1, new i.a({
//             el: "#app",
//             router: q,
//             components: {
//                 App: n
//             },
//             template: "<App/>"
//         })
//     }
// }, ["NHnr"]);
// //# sourceMappingURL=app.24b07cc7c2370c9697ee.js.map
