/*　エクスクラメーション先頭はbool値を返したいから　*/
! function(n) {
    function base(a) {
      //console.log(e[a]);
        //e[a]に値が入っているかの確認
        if (e[a]) return e[a].exports;
        // 初期値の代入
        var t = e[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        /* テキストの動きはここでリターンされて実行に回されている */
        /* function nのa配列をコールしている */
        /* 関数の数だけoを繰り返している */
      //console.log(n[a]);
        return n[a].call(t.exports, t, t.exports, base), t.loaded = !0, t.exports
        console.log(t.exports);
    }
    /* 配列宣言 */
    var e = {};
    /* 引数とは関係なく、即時関数でbaseが実行される */
    return base(0)
}
/* ここから実行関数 */
/* 関数が配列に入れられている */
([function(n, o, e) {
    "use strict";
    /* 関数1 */
    function a(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }

    function t() {
      /* 動作している */
        window.isMobile = c.default.isMobile(), window.isEnglish = v("body").hasClass("en"), i(), r(), m.default.startMainViewAnimation(), m.default.startMyDrinkAnimation(), s(), d()
    }

    function i() {
    }

    function s() {
    }

    function r() {
    }
/*  動作していない
    function d() {
      console.log('動作');
        var n = window.isEnglish ? "../" : "";
        return window.isMobile ? void v("#videoSection__assetsWrapper").html('<img src="' + n + 'assets/images/video_capture.jpg" width="100%" alt="acure pass video">') : (v("#explanation3__video").html('<video src="' + n + 'assets/videos/explanation3_phone_2.mp4" autoplay loop alt="acure pass app">'), void v("#videoSection__assetsWrapper").html('<video src="' + n + 'assets/videos/video.mp4" class="videoSection__movie" autoplay loop></video>'))
    }*/
    e(1);
    var u = e(3),
        c = a(u),
        f = e(2),
        m = a(f),
        v = window.$;
    window.onload = t
}, function(n, o, e) {
    "use strict";
    /* 関数2 */
    function a(n) {
      /* 動作している */
        return n && n.__esModule ? n : {
            default: n
        }
    }

    function t(n, o) {
      /* 動作している */
        if (!(n instanceof o)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
            //console.log(n);
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        s = function() {
          /* n2 */
            function n(n, o) {
                for (var e = 0; e < o.length; e++) {
                    var a = o[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
                }
            }
            return function(o, e, a) {
                return e && n(o.prototype, e), a && n(o, a), o
            }
        }(),
        l = e(2),
        r = a(l),
        d = function() {
            return document.body.scrollTop || document.documentElement.scrollTop
        },
        u = function() {
            return document.documentElement.clientHeight || window.innerHeight
        },
        c = window.$,
        f = function() {
          /* n3 */
            function n() {
                t(this, n), this.fadeInOffset = 100, this.$targets = c(".js-animate"), this.onScroll = this.onScroll.bind(this), this.onScroll(null, !1, !0), this.on()
            }
            return s(n, [{
                key: "on",
                value: function() {
                    c(window).on("scroll DOMMouseScroll mousewheel", this.onScroll)
                }
            }, {
                key: "off",
                value: function() {
                    c(window).off("scroll DOMMouseScroll mousewheel", this.onScroll)
                }
            }, {
                key: "onScroll",
                value: function(n) {
                    var o = this,
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!this.$targets.length) return void this.off();
                    for (var a = d() + u(), t = function(n, t) {
                            var i = o.$targets.eq(n);
                            if (a > i.offset().top + o.fadeInOffset) return o.$targets.splice(n, 1), e ? (i.removeClass("js-animate"), o.onScroll(null, !0), {
                                v: void 0
                            }) : ("splash" === i.data("type") && (i.data("splashdelay") ? setTimeout(function() {
                                r.default.startBuyJuiceAnimation()
                            }, i.data("splashdelay")) : r.default.startBuyJuiceAnimation(), o.onScroll(null)), i.data("delay") ? setTimeout(function() {
                                return i.addClass("animate")
                            }, +i.data("delay")) : i.addClass("animate"), o.onScroll(null), {
                                v: void 0
                            })
                        }, s = 0, l = this.$targets.length; s < l; s++) {
                        var c = t(s, l);
                        if ("object" === ("undefined" == typeof c ? "undefined" : i(c))) return c.v
                    }
                }
            }]), n
        }();
    new f
    //console.log(f);
}, function(n, o) {
    "use strict";
    /* 関数3 */
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    //【超重要】 window.$;
    //eにjQueryの$を代入させてe()＝$()となるような挙動にしている
    //そのため、同function内部ではe()で統一されている。
    var e = window.$;
    o.default = {
        startMainViewAnimation: function() {
            var n = e("#mainLogo__header"),
                o = e("#mainLogo__subTitle--2");
            n.css({
                display: "block",
                transform: "translate3d(0, " + (window.innerHeight / 2 - n.height() / 2) + "px, 0)"
            }), setTimeout(function() {
                n.css({
                    transition: "all 0.8s"
                })
            }, 10), setTimeout(function() {
                e("#mainview").addClass("show"), e("#mainLogo__playVideo").addClass("show");
                var o = window.innerWidth <= 900 ? 120 : 110;
                n.css({
                    transform: "translate3d(0, " + o + "px, 0)"
                })
            }, 1300);
            for (var a = function(n) {
                    setTimeout(function() {
                        e(o[0].children[n]).addClass("show")
                    }, 100 + 40 * n)
                }, t = 0; t < o[0].children.length; t++) a(t)
        },
        startMyDrinkAnimation: function() {
          // 1e3は1000のショートハンド
            function n() {
                a.addClass("show"), r.addClass("movedown"), d.addClass("show"), setTimeout(function() {
                    t.addClass("show"), r.addClass("movedown2"), d.addClass("movedown"), u.addClass("show")
                }, 1e3 * o), setTimeout(function() {
                    i.addClass("show"), r.addClass("movedown3"), d.addClass("movedown2"), u.addClass("movedown"), c.addClass("show"), a.removeClass("show")
                }, 1e3 * o * 2), setTimeout(function() {
                    s.addClass("show"), r.removeClass("movedown3"), d.addClass("hide"), t.removeClass("show")
                }, 1e3 * o * 3), setTimeout(function() {
                    l.addClass("show"), c.addClass("hide"), u.removeClass("movedown"), r.removeClass("movedown2"), i.removeClass("show"), setTimeout(function() {
                        s.removeClass("show")
                    }, o / 2 * 1e3)
                }, 1e3 * o * 4), setTimeout(function() {
                    l.removeClass("show"), u.addClass("hide"), r.removeClass("movedown"), r.removeClass("movedown movedown2 movedown3 hide"), d.removeClass("movedown movedown2 movedown3 show hide"), u.removeClass("movedown movedown2 movedown3 show hide"), c.removeClass("movedown movedown2 movedown3 show hide")
                }, 1e3 * o * 5)
            }
            var o = 1.2,
                a = e("#explanation1__vm__display--1"),
                t = e("#explanation1__vm__display--2"),
                i = e("#explanation1__vm__display--3"),
                s = e("#explanation1__vm__display--4"),
                l = e("#explanation1__vm__display--5"),
                r = e("#explanation1__phone__display--1"),
                d = e("#explanation1__phone__display--2"),
                u = e("#explanation1__phone__display--3"),
                c = e("#explanation1__phone__display--4");
            //nを実行して、タイマーでn()をループさせている。
            n(), setInterval(function() {
                n()
            }, 6 * o * 1e3)
        }
    }
}, function(n, o) {
    "use strict";

    function e(n, o) {
        if (!(n instanceof o)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var a = function() {
            function n(n, o) {
                for (var e = 0; e < o.length; e++) {
                    var a = o[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
                }
            }
            return function(o, e, a) {
                return e && n(o.prototype, e), a && n(o, a), o
            }
        }(),
        t = function() {
            function n() {
                e(this, n)
            }
            return a(n, null, [{
                key: "isMobile",
                value: function() {
                    return window.innerWidth <= 900
                }
            }]), n
        }();
    o.default = t
}]);
