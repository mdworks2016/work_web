(function () {
    function e(t, o) {
        function r(e) {
            if (r[e] !== p)
                return r[e];
            var t;
            if ("bug-string-char-index" == e)
                t = "a" != "a" [0];
            else if ("json" == e)
                t = r("json-stringify") && r("json-parse");
            else {
                var i,
                    n = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if ("json-stringify" == e) {
                    var c = o.stringify,
                        d = "function" == typeof c && _;
                    if (d) {
                        (i = function () {
                            return 1
                        }).toJSON = i;
                        try {
                            d = "0" === c(0) && "0" === c(new s) && '""' == c(new a) && c(g) === p && c(p) === p && c() === p && "1" === c(i) && "[1]" == c([i]) && "[null]" == c([p]) && "null" == c(null) && "[null,null,null]" == c([p, g, null]) && c({
                                a: [
                                    i, !0,
                                    !1,
                                    null,
                                    "\x00\b\n\f\r	"
                                ]
                            }) == n && "1" === c(null, i) && "[\n 1,\n 2\n]" == c([
                                1, 2
                            ], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new u(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new u(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new u(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new u(-1))
                        } catch (l) {
                            d = !1
                        }
                    }
                    t = d
                }
                if ("json-parse" == e) {
                    var m = o.parse;
                    if ("function" == typeof m)
                        try {
                            if (0 === m("0") && !m(!1)) {
                                i = m(n);
                                var f = 5 == i.a.length && 1 === i.a[0];
                                if (f) {
                                    try {
                                        f = !m('"	"')
                                    } catch (l) {}
                                    if (f)
                                        try {
                                            f = 1 !== m("01")
                                        } catch (l) {}
                                    if (f)
                                        try {
                                            f = 1 !== m("1.")
                                        } catch (l) {}
                                    }
                            }
                        } catch (l) {
                            f = !1
                        }
                    t = f
                }
            }
            return r[e] = !!t
        }
        t || (t = n.Object()),
        o || (o = n.Object());
        var s = t.Number || n.Number,
            a = t.String || n.String,
            c = t.Object || n.Object,
            u = t.Date || n.Date,
            d = t.SyntaxError || n.SyntaxError,
            l = t.TypeError || n.TypeError,
            m = t.Math || n.Math,
            f = t.JSON || n.JSON;
        "object" == typeof f && f && (o.stringify = f.stringify, o.parse = f.parse);
        var h,
            v,
            p,
            y = c.prototype,
            g = y.toString,
            _ = new u(-0 xc782b5b800cec);
        try {
            _ = -109252 == _.getUTCFullYear() && 0 === _.getUTCMonth() && 1 === _.getUTCDate() && 10 == _.getUTCHours() && 37 == _.getUTCMinutes() && 6 == _.getUTCSeconds() && 708 == _.getUTCMilliseconds()
        } catch (w) {}
        if (!r("json")) {
            var b = "[object Function]",
                B = "[object Date]",
                E = "[object Number]",
                V = "[object String]",
                M = "[object Array]",
                A = "[object Boolean]",
                C = r("bug-string-char-index");
            if (!_)
                var L = m.floor,
                    R = [
                        0,
                        31,
                        59,
                        90,
                        120,
                        151,
                        181,
                        212,
                        243,
                        273,
                        304,
                        334
                    ],
                    S = function (e, t) {
                        return R[t] + 365 * (e - 1970) + L((e - 1969 + (t = +(t > 1))) / 4) - L((e - 1901 + t) / 100) + L((e - 1601 + t) / 400)
                    };
            if ((h = y.hasOwnProperty) || (h = function (e) {
                var t,
                    i = {};
                return (i.__proto__ = null, i.__proto__ = {
                    toString: 1
                }, i).toString != g
                    ? h = function (e) {
                        var t = this.__proto__,
                            i = e in (this.__proto__ = null, this);
                        return this.__proto__ = t,
                        i
                    }
                    : (t = i.constructor, h = function (e) {
                        var i = (this.constructor || t).prototype;
                        return e in this && !(e in i && this[e] === i[e])
                    }),
                i       = null,
                h.call(this, e)
            }), v = function (e, t) {
                var o,
                    n,
                    r,
                    s = 0;
                (o = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0,
                n                    = new o;
                for (r in n)
                    h.call(n, r) && s++;
                return o = n = null,
                s
                    ? v  = 2 == s
                        ? function (e, t) {
                            var i,
                                o = {},
                                n = g.call(e) == b;
                            for (i in e)
                                n && "prototype" == i || h.call(o, i) || !(o[i] = 1) || !h.call(e, i) || t(i)
                        }
                        : function (e, t) {
                            var i,
                                o,
                                n = g.call(e) == b;
                            for (i in e)
                                n && "prototype" == i || !h.call(e, i) || (o = "constructor" === i) || t(i);

                            (o || h.call(e, i = "constructor")) && t(i)
                        }
                    : (n = [
                        "valueOf",
                        "toString",
                        "toLocaleString",
                        "propertyIsEnumerable",
                        "isPrototypeOf",
                        "hasOwnProperty",
                        "constructor"
                    ], v = function (e, t) {
                        var o,
                            r,
                            s = g.call(e) == b,
                            a = !s && "function" != typeof e.constructor && i[typeof e.hasOwnProperty] && e.hasOwnProperty || h;
                        for (o in e)
                            s && "prototype" == o || !a.call(e, o) || t(o);
                        for (r = n.length; o = n[--r]; a.call(e, o) && t(o)) ;
                        }
                    ),
                v(e, t)
            }, !r("json-stringify")) {
                var T = {
                        10: "\\n",
                        12: "\\f",
                        13: "\\r",
                        34: '\\"',
                        8 : "\\b",
                        9 : "\\t",
                        92: "\\\\"
                    },
                    P = "000000",
                    O = function (e, t) {
                        return (P + (t || 0)).slice(-e)
                    },
                    F = "\\u00",
                    k = function (e) {
                        for (var t = '"', i = 0, o = e.length, n = !C || o > 10, r = n && (C
                            ? e.split("")
                            : e); o > i; i++) {
                            var s = e.charCodeAt(i);
                            switch (s) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += T[s];
                                    break;
                                default:
                                    if (32 > s) {
                                        t += F + O(2, s.toString(16));
                                        break
                                    }
                                    t += n
                                        ? r[i]
                                        : e.charAt(i)
                            }
                        }
                        return t + '"'
                    },
                    D = function (e, t, i, o, n, r, s) {
                        var a,
                            c,
                            u,
                            d,
                            m,
                            f,
                            y,
                            _,
                            w,
                            b,
                            C,
                            R,
                            T,
                            P,
                            F,
                            x;
                        try {
                            a = t[e]
                        } catch (I) {}
                        if ("object" == typeof a && a)
                            if (c = g.call(a), c != B || h.call(a, "toJSON"))
                                "function" == typeof a.toJSON && (c != E && c != V && c != M || h.call(a, "toJSON")) && (a = a.toJSON(e));
                            else if (a > -1 / 0 && 1 / 0 > a) {
                                if (S) {
                                    for (m = L(a / 864e5), u = L(m / 365.2425) + 1970 - 1; S(u + 1, 0) <= m; u++)
                                    ;
                                    for (d = L((m - S(u, 0)) / 30.42); S(u, d + 1) <= m; d++)
                                    ;
                                    m = 1 + m - S(u, d),
                                    f = (a % 864e5 + 864e5) % 864e5,
                                    y = L(f / 36e5) % 24,
                                    _ = L(f / 6e4) % 60,
                                    w = L(f / 1e3) % 60,
                                    b = f % 1e3
                                } else
                                    u = a.getUTCFullYear(),
                                    d = a.getUTCMonth(),
                                    m = a.getUTCDate(),
                                    y = a.getUTCHours(),
                                    _ = a.getUTCMinutes(),
                                    w = a.getUTCSeconds(),
                                    b = a.getUTCMilliseconds();
                                a = (0 >= u || u >= 1e4
                                    ? (0 > u
                                        ? "-"
                                        : "+") + O(6, 0 > u
                                        ? -u
                                        : u)
                                    : O(4, u)) + "-" + O(2, d + 1) + "-" + O(2, m) + "T" + O(2, y) + ":" + O(2, _) +
                                        ":" + O(2, w) + "." + O(3, b) + "Z"
                            } else
                                a = null;
                    if (i && (a = i.call(t, e, a)), null === a)
                            return "null";
                        if (c = g.call(a), c == A)
                            return "" + a;
                        if (c == E)
                            return a > -1 / 0 && 1 / 0 > a
                                ? "" + a
                                : "null";
                        if (c == V)
                            return k("" + a);
                        if ("object" == typeof a) {
                            for (P = s.length; P--;)
                                if (s[P] === a)
                                    throw l();
                        if (s.push(a), C = [], F = r, r += n, c == M) {
                                for (T = 0, P = a.length; P > T; T++)
                                    R = D(T, a, i, o, n, r, s),
                                    C.push(R === p
                                        ? "null"
                                        : R);
                                x = C.length
                                    ? n
                                        ? "[\n" + r + C.join(",\n" + r) + "\n" + F + "]"
                                        : "[" + C.join(",") + "]"
                                    : "[]"
                            } else
                                v(o || a, function (e) {
                                    var t = D(e, a, i, o, n, r, s);
                                    t !== p && C.push(k(e) + ":" + (n
                                        ? " "
                                        : "") + t)
                                }),
                                x = C.length
                                    ? n
                                        ? "{\n" + r + C.join(",\n" + r) + "\n" + F + "}"
                                        : "{" + C.join(",") + "}"
                                    : "{}";
                            return s.pop(),
                            x
                        }
                    };
                o.stringify = function (e, t, o) {
                    var n,
                        r,
                        s,
                        a;
                    if (i[typeof t] && t)
                        if ((a = g.call(t)) == b)
                            r = t;
                        else if (a == M) {
                            s = {};
                            for (var c, u = 0, d = t.length; d > u; c = t[u++], a = g.call(c), (a == V || a == E) && (s[c] = 1)) ;
                            }
                        if (o)
                            if ((a = g.call(o)) == E) {
                                if ((o -= o % 1) > 0)
                                    for (n = "", o > 10 && (o = 10); n.length < o; n += " ") ;
                                    }
                                else
                                a == V && (n = o.length <= 10
                                    ? o
                                    : o.slice(0, 10));
                    return D("", (c = {}, c[""] = e, c), r, s, n, "", [])
                }
            }
            if (!r("json-parse")) {
                var x,
                    I,
                    N = a.fromCharCode,
                    j = {
                        102: "\f",
                        110: "\n",
                        114: "\r",
                        116: "	",
                        34 : '"',
                        47 : "/",
                        92 : "\\",
                        98 : "\b"
                    },
                    U = function () {
                        throw x = I = null,
                        d()
                    },
                    H = function () {
                        for (var e, t, i, o, n, r = I, s = r.length; s > x;)
                            switch (n = r.charCodeAt(x)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    x++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return e = C
                                        ? r.charAt(x)
                                        : r[x],
                                    x++,
                                    e;
                                case 34:
                                    for (e = "@", x++; s > x;)
                                        if (n = r.charCodeAt(x), 32 > n)
                                            U();
                                        else if (92 == n)
                                            switch (n = r.charCodeAt(++x)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += j[n],
                                                    x++;
                                                    break;
                                                case 117:
                                                    for (t = ++x, i = x + 4; i > x; x++)
                                                        n = r.charCodeAt(x),
                                                        n >= 48 && 57 >= n || n >= 97 && 102 >= n || n >= 65 && 70 >= n || U();
                                                    e += N("0x" + r.slice(t, x));
                                                    break;
                                                default:
                                                    U()
                                            }
                                        else {
                                        if (34 == n)
                                            break;
                                        for (n = r.charCodeAt(x), t = x; n >= 32 && 92 != n && 34 != n;)
                                            n = r.charCodeAt(++x);
                                        e += r.slice(t, x)
                                    }
                                    if (34 == r.charCodeAt(x))
                                        return x++,
                                        e;
                                    U();
                                default:
                                    if (t = x, 45 == n && (o = !0, n = r.charCodeAt(++x)), n >= 48 && 57 >= n) {
                                        for (48 == n && (n = r.charCodeAt(x + 1), n >= 48 && 57 >= n) && U(), o = !1; s > x && (n = r.charCodeAt(x), n >= 48 && 57 >= n); x++)
                                        ;
                                        if (46 == r.charCodeAt(x)) {
                                            for (i = ++x; s > i && (n = r.charCodeAt(i), n >= 48 && 57 >= n); i++)
                                            ;
                                            i == x && U(),
                                            x = i
                                        }
                                        if (n = r.charCodeAt(x), 101 == n || 69 == n) {
                                            for (n = r.charCodeAt(++x), 43 != n && 45 != n || x++, i = x; s > i && (n = r.charCodeAt(i), n >= 48 && 57 >= n); i++)
                                            ;
                                            i == x && U(),
                                            x = i
                                        }
                                        return + r.slice(t, x)
                                    }
                                    if (o && U(), "true" == r.slice(x, x + 4))
                                        return x += 4,
                                        !0;
                                    if ("false" == r.slice(x, x + 5))
                                        return x += 5,
                                        !1;
                                    if ("null" == r.slice(x, x + 4))
                                        return x += 4,
                                        null;
                                    U()
                            }
                        return "$"
                    },
                    J = function (e) {
                        var t,
                            i;
                        if ("$" == e && U(), "string" == typeof e) {
                            if ("@" == (C
                                ? e.charAt(0)
                                : e[0]))
                                return e.slice(1);
                            if ("[" == e) {
                                for (t = []; e = H(), "]" != e; i || (i = !0))
                                    i && ("," == e
                                        ? (e = H(), "]" == e && U())
                                        : U()),
                                    "," == e && U(),
                                    t.push(J(e));
                                return t
                            }
                            if ("{" == e) {
                                for (t = {}; e = H(), "}" != e; i || (i = !0))
                                    i && ("," == e
                                        ? (e = H(), "}" == e && U())
                                        : U()),
                                    "," != e && "string" == typeof e && "@" == (C
                                        ? e.charAt(0)
                                        : e[0]) && ":" == H() || U(),
                                    t[e.slice(1)] = J(H());
                                return t
                            }
                            U()
                        }
                        return e
                    },
                    W = function (e, t, i) {
                        var o = X(e, t, i);
                        o === p
                            ? delete e[t]
                            : e[t] = o
                    },
                    X = function (e, t, i) {
                        var o,
                            n = e[t];
                        if ("object" == typeof n && n)
                            if (g.call(n) == M)
                                for (o = n.length; o--;)
                                    W(n, o, i);
                    else
                            v(n, function (e) {
                                W(n, e, i)
                            });
                        return i.call(e, t, n)
                    };
                o.parse = function (e, t) {
                    var i,
                        o;
                    return x = 0,
                    I        = "" + e,
                    i        = J(H()),
                    "$" != H() && U(),
                    x        = I = null,
                    t && g.call(t) == b
                        ? X((o = {}, o[""] = i, o), "", t)
                        : i
                }
            }
        }
        return o.runInContext = e,
        o
    }
    var t = "function" == typeof __define && __define.amd,
        i = {
            "function": !0,
            object    : !0
        },
        o = i[typeof exports] && exports && !exports.nodeType && exports,
        n = i[typeof window] && window || this,
        r = o && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!r || r.global !== r && r.window !== r && r.self !== r || (n = r), o && !t)
        e(n, o);
    else {
        var s = n.UI_JSON,
            a = n.UI_JSON,
            c = !1,
            u = e(n, n.UI_JSON = {
                noConflict: function () {
                    return c || (c = !0, n.UI_JSON = s, n.UI_JSON = a, s = a = null),
                    u
                }
            });
        n.UI_JSON = {
            parse    : u.parse,
            stringify: u.stringify
        }
    }
    t && __define(function () {
        return u
    })
}).call(this),
function (e) {
    function t(e) {
        throw RangeError(S[e])
    }
    function i(e, t) {
        for (var i = e.length, o = []; i--;)
            o[i] = t(e[i]);
        return o
    }
    function o(e, t) {
        var o = e.split("@"),
            n = "";
        o.length > 1 && (n = o[0] + "@", e = o[1]);
        var r = e.split(R),
            s = i(r, t).join(".");
        return n + s
    }
    function n(e) {
        for (var t, i, o = [], n = 0, r = e.length; r > n;)
            t = e.charCodeAt(n++),
            t >= 55296 && 56319 >= t && r > n
                ? (i = e.charCodeAt(n++), 56320 == (64512 & i)
                    ? o.push(((1023 & t) << 10) + (1023 & i) + 65536)
                    : (o.push(t), n--))
                : o.push(t);
        return o
    }
    function r(e) {
        return i(e, function (e) {
            var t = "";
            return e > 65535 && (e -= 65536, t += O(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e),
            t += O(e)
        }).join("")
    }
    function s(e) {
        return 10 > e - 48
            ? e - 22
            : 26 > e - 65
                ? e - 65
                : 26 > e - 97
                    ? e - 97
                    : _
    }
    function a(e, t) {
        return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
    }
    function c(e, t, i) {
        var o = 0;
        for (e = i
            ? P(e / E)
            : e >> 1,
        e += P(e / t); e > T * b >> 1; o += _)
            e = P(e / T);
        return P(o + (T + 1) * e / (e + B))
    }
    function u(e) {
        var i,
            o,
            n,
            a,
            u,
            d,
            l,
            m,
            f,
            h,
            v = [],
            p = e.length,
            y = 0,
            B = M,
            E = V;
        for (o = e.lastIndexOf(A), 0 > o && (o = 0), n = 0; o > n; ++n)
            e.charCodeAt(n) >= 128 && t("not-basic"),
            v.push(e.charCodeAt(n));
        for (a = o > 0
            ? o + 1
            : 0; p > a;) {
            for (u = y, d = 1, l = _; a >= p && t("invalid-input"), m = s(e.charCodeAt(a++)), (m >= _ || m > P((g - y) / d)) && t("overflow"), y += m * d, f = E >= l
                ? w
                : l >= E + b
                    ? b
                    : l - E,
            !(f > m); l += _)
                h = _ - f,
                d > P(g / h) && t("overflow"),
                d *= h;
            i = v.length + 1,
            E = c(y - u, i, 0 == u),
            P(y / i) > g - B && t("overflow"),
            B += P(y / i),
            y %= i,
            v.splice(y++, 0, B)
        }
        return r(v)
    }
    function d(e) {
        var i,
            o,
            r,
            s,
            u,
            d,
            l,
            m,
            f,
            h,
            v,
            p,
            y,
            B,
            E,
            C = [];
        for (e = n(e), p = e.length, i = M, o = 0, u = V, d = 0; p > d; ++d)
            v = e[d],
            128 > v && C.push(O(v));
        for (r = s = C.length, s && C.push(A); p > r;) {
            for (l = g, d = 0; p > d; ++d)
                v = e[d],
                v >= i && l > v && (l = v);
            for (y = r + 1, l - i > P((g - o) / y) && t("overflow"), o += (l - i) * y, i = l, d = 0; p > d; ++d)
                if (v = e[d], i > v && ++o > g && t("overflow"), v == i) {
                    for (m = o, f = _; h = u >= f
                        ? w
                        : f >= u + b
                            ? b
                            : f - u,
                    !(h > m); f += _)
                        E = m - h,
                        B = _ - h,
                        C.push(O(a(h + E % B, 0))),
                        m = P(E / B);
                    C.push(O(a(m, 0))),
                    u = c(o, y, r == s),
                    o = 0,
                    ++r
                }
            ++o,
            ++i
        }
        return C.join("")
    }
    function l(e) {
        return o(e, function (e) {
            return C.test(e)
                ? u(e.slice(4).toLowerCase())
                : e
        })
    }
    function m(e) {
        return o(e, function (e) {
            return L.test(e)
                ? "xn--" + d(e)
                : e
        })
    }
    var f = "object" == typeof exports && exports && !exports.nodeType && exports,
        h = "object" == typeof module && module && !module.nodeType && module,
        v = "object" == typeof global && global;
    v.global !== v && v.window !== v && v.self !== v || (e = v);
    var p,
        y,
        g = 2147483647,
        _ = 36,
        w = 1,
        b = 26,
        B = 38,
        E = 700,
        V = 72,
        M = 128,
        A = "-",
        C = /^xn--/,
        L = /[^\x20-\x7E]/,
        R = /[\x2E\u3002\uFF0E\uFF61]/g,
        S = {
            "invalid-input": "Invalid input",
            "not-basic"    : "Illegal input >= 0x80 (not a basic code point)",
            overflow       : "Overflow: input needs wider integers to process"
        },
        T = _ - w,
        P = Math.floor,
        O = String.fromCharCode;
    if (p = {
        decode   : u,
        encode   : d,
        toASCII  : m,
        toUnicode: l,
        ucs2     : {
            decode: n,
            encode: r
        },
        version  : "1.3.1"
    }, "function" == typeof __define && "object" == typeof __define.amd && __define.amd)
        __define("punycode", function () {
            return p
        });
    else if (f && h)
        if (module.exports == f)
            h.exports = p;
        else
            for (y in p)
                p.hasOwnProperty(y) && (f[y] = p[y]);
else
        e.punycode = p
}(this),
Object.keys || (Object.keys = function () {
    var e = Object.prototype.hasOwnProperty,
        t = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        i = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        o = i.length;
    return function (n) {
        if ("object" != typeof n && "function" != typeof n || null === n)
            throw new TypeError("Object.keys called on non-object");
        var r = [];
        for (var s in n)
            e.call(n, s) && r.push(s);
        if (t)
            for (var a = 0; o > a; a++)
                e.call(n, i[a]) && r.push(i[a]);
    return r
    }
}()),
function () {
    function e(e) {
        for (var t = "0123456789".split(""), i = "", o = 0; e > o; o++)
            i += t[Math.floor(Math.random() * t.length)];
        return i
    }
    function t(t, i, o, n) {
        var r = [],
            s = new Date;
        if (1 == t || 2 == t && -1 == navigator.userAgent.toLowerCase().indexOf("safari"))
            return "";
        if (document.cookie) {
            r = document
                .cookie
                .split(";");
            for (var a = 0; a < r.length; a++) {
                var c = r[a].replace(/^\s+|\s+$/g, ""),
                    u = c.indexOf("=");
                if (c.substring(0, u) == i)
                    return unescape(c.slice(u + 1))
            }
        }
        var d = new Date;
        if (o) {
            var l = d.getTime();
            d.setTime(l + 1e3 * o)
        } else {
            var l = d.getTime();
            d.setTime(l + 63072e6)
        }
        var m = e(4),
            f = s.getMonth() + 1,
            h = s.getDate(),
            v = s.getHours(),
            a = s.getMinutes(),
            p = s.getSeconds(),
            y = String(s.getFullYear()) + (1 == String(f).length
                ? "0"
                : "") + String(f) + (1 == String(h).length
                ? "0"
                : "") + String(h) + (1 == String(v).length
                ? "0"
                : "") + String(v) + (1 == String(a).length
                ? "0"
                : "") + String(a) + (1 == String(p).length
                ? "0"
                : "") + String(p) + String(m),
            g = location.hostname;
        g.match(/^www\./) && (g = g.replace(/^www\./, ""));
        for (var a = 0; a < n.length; a++)
            if (-1 !== (g + " ").indexOf(n[a] + " ")) {
                g = n[a];
                break
            }
        return document.cookie = i + "=" + y + "; expires=" + new Date(d).toUTCString() + "; path=/; domain=" + g,
        y
    }
    function i(t, i) {
        return t
            ? (i = i
                ? i.slice(-4)
                : e(4),
            i % 100 >= t)
            : !1
    }
    function o(e, t) {
        if (t.sample_flag)
            return !1;
        var i = {};
        for (var o in e)
            e.hasOwnProperty(o) && (i[o] = e[o]);
        var n = document.createElement("img");
        n.async = !0;
        for (var r = t.host + "?uisv=" + t.uisv + "&from=ui3", s = [
            "lg_id",
            "sb",
            "ref",
            "uigr_1",
            "uigr_2",
            "uigr_3",
            "uigr_4",
            "uigr_5",
            "uigr_6",
            "uigr_7",
            "uigr_8",
            "uigr_9",
            "uigr_10"
        ], a = 0; a < s.length; a++)
            i[s[a]] && (i[s[a]] = encodeURIComponent(i[s[a]]));
        if (i.url) {
            var c = document.createElement("a");
            c.href = i.url;
            for (var u = new RegExp("^[\\dA-Za-z-]+$", "i"), d = c.hostname.split("."), l = !0, a = 0; a < d.length; a++)
                if (!u.test(d[a])) {
                    var m = punycode.encode(d[a]);
                    "-" != m.slice(-1) && (d[a] = "xn--" + m, l = !1)
                }
            if (!l) {
                var f = d.join(".");
                i.url = c.protocol + "//" + f;
                var h = c.pathname + c.search + c.hash;
                "" != h && "/" != h.substr(0, 1) && (i.url += "/"),
                i.url += h
            }
            i.url = encodeURIComponent(i.url)
        }
        for (var o in i)
            i.hasOwnProperty(o) && i[o] && (r += "&" + o + "=" + i[o]);
        r               += "&eflg=1",
        n.width         = 1,
        n.height        = 1,
        n.style.display = "none",
        n.src           = r
    }
    function n() {
        this.isConversion = !0,
        this.push         = function (e) {
            for (var t = {
                mode: "conv"
            }, i = [
                "id", "rand", "fp"
            ], n = 0; n < i.length; n++) {
                var r = i[n];
                t[r] = _uih[r]
            }
            for (var r in e)
                if (e.hasOwnProperty(r) && e[r]) {
                    var s = "conv_" + r;
                    t[s] = encodeURIComponent(e[r])
                }
            o(t, _uic)
        }
    }
    window._uiconv = window._uiconv || [],
    "undefined" == typeof window.uiinit && (window.uiinit = e(7)),
    _uih.mode = "default",
    "undefined" != typeof uiinit && (_uih.rand = uiinit),
    _uih.rand          = _uih.rand || e(7),
    _uic.safari_mode   = _uic.safari_mode || 2,
    _uic.uisv          = _uih.id % 10,
    50400 == _uih.id && (_uic.uisv = 1),
    _uih.url           = _uih.url || document.URL,
    _uih.sb            = _uih.sb || document.title,
    _uih.ref           = _uih.ref || document.referrer,
    document.documentElement.clientWidth
        ? (_uih.bw = document.documentElement.clientWidth, _uih.bh = document.documentElement.clientHeight)
        : document.body && (_uih.bw = document.body.clientWidth, _uih.bh = document.body.clientHeight),
    _uih.sw            = screen.width,
    _uih.sh            = screen.height,
    _uih.dpr           = void 0 != window.devicePixelRatio
        ? window.devicePixelRatio
        : 0,
    _uic.fp_name       = _uic.fp_name || "__ulfpc",
    "50153" == _uih.id
        ? _uic.fp_mode = 1
        : _uic.fp_mode = _uic.fp_mode || 3,
    _uic.fp_period     = _uic.fp_period || 63072e3,
    _uic.fp_domains    = _uic.fp_domains || [],
    _uih.fp            = t(_uic.fp_mode, _uic.fp_name, _uic.fp_period, _uic.fp_domains),
    _uic.force_behv    = _uic.force_behv || !1,
    _uic.host          = _uic.host || ("https:" == document.location.protocol
        ? "https://bs"
        : "http://c0" + _uic.uisv) + ".nakanohito.jp/b3/";
    var r = r || 0;
    if (_uih.count = _uih.count || 0, _uih.count = r + _uih.count, _uih.count += 1, _uic.sample_flag = i(_uic.sample_rate, _uih.fp), o(_uih, _uic), restartBivalves = function () {
        _uic
            .lb
            .end(),
        _uic.lb.flagEnd = !0,
        Vesicomyid
            .Bivalves
            .removeAllEventListeners();
        var e = new Vesicomyid.Bivalves(_uih.id, _uih.rand);
        Vesicomyid.Bivalves.flagAlreadyInit = void 0,
        e.host                              = _uic.host,
        e.hostssl                           = "https://bs.nakanohito.jp/b3/",
        e.uisv                              = _uic.uisv,
        e.efoFlag                           = !0,
        _uic.efo !== !1 && 0 !== _uic.efo || (e.efoFlag = !1),
        1 == _uic.safari_mode && (e.safariSupport = !1),
        3 == _uic.safari_mode && (e.safariOutBound = !0),
        _uic.report_period && (e.dynMousePositionReportPeriod = _uic.report_period),
        e.init(),
        _uic.lb                             = e,
        e.efoFlag && (_uic.setSubmit = function (e) {
            _uic
                .lb
                .setSubmit(_uic.lb, e)
        }, _uic.onSubmit             = function (e) {
            _uic
                .lb
                .onSubmit(_uic.lb, e)
        })
    }, _uic.send_pv                                                                                                                                                 = function () {
        _uih.rand = Math.floor(9e5 * Math.random()) + 1e6,
        o(_uih, _uic),
        restartBivalves()
    }, _uic.restart_on_anchor_change) {
        var s = function () {
                return document.addEventListener
                    ? function (e, t, i) {
                        e.addEventListener(t, i, !1)
                    }
                    : document.attachEvent
                        ? function (e, t, i) {
                            e.attachEvent("on" + t, function (t) {
                                i.call(e, t)
                            })
                        }
                        : void 0
            }(),
            a = function () {
                var e = document.documentMode;
                return "onhashchange" in window && (void 0 === e || e > 7)
                    ? function (e) {
                        s(window, "hashchange", e)
                    }
                    : function (e) {
                        s(document.body, "click", function () {
                            setTimeout(e, 10)
                        })
                    }
            }();
        a(function () {
            _uih.url != document.URL && (_uih.url = document.URL, _uic.send_pv(_uih, _uic))
        })
    }
    if ("undefined" == typeof _uiconv.isConversion) {
        for (var c = [], u = 0, d = _uiconv.length; d > u; u++)
            c[u] = _uiconv[u];
        _uiconv = new n;
        for (var u = 0; u < c.length; u++)
            _uiconv.push(c[u])
    }
}(),
("undefined" != typeof document.documentElement.style.maxHeight && 1 == _uih.count || _uic.force_behv) && ("undefined" == typeof Vesicomyid && (Vesicomyid = function () {}), "undefined" == typeof Vesicomyid.BivalvesLoading && (Vesicomyid.BivalvesLoading = !0, Vesicomyid.Bivalves                                                                                                    = function (e, t, i) {
    this.id                           = e,
    this.rand                         = t,
    this.beacon_id                    = "Vesicomyid-BEACON" + e,
    this.env                          = new Vesicomyid.Bivalves.Env,
    this["char"]                      = this.env["char"],
    this.dynMousePositionPeriod       = this.env.dynMousePositionPeriod,
    this.freeHash                     = Vesicomyid.bivalvesHash
        ? Vesicomyid.bivalvesHash
        : {},
    this.message                      = Vesicomyid.bivalvesMessage
        ? Vesicomyid.bivalvesMessage
        : {
            comment: "",
            style  : ""
        },
    this.lvl                          = i
        ? i
        : 2,
    this.ratio                        = 0,
    this.safariSupport                = !0,
    this.safariOutBound               = !1,
    this.safariSupportDelayTime       = 500,
    this.safariControlOnClick         = !1,
    this.flagFirefoxSslAccess         = !0,
    this.flagDynMouseReport           = !0,
    this.flagEnd                      = !1,
    this.dynMousePositionReportPeriod = this.env.dynMousePositionReportPeriod,
    this.forceMobileFirefox           = !0,
    this.cookie_off                   = !0,
    this.host                         = "http://bc.test.userlocal.jp/b1/",
    this.hostssl                      = "https://bs.nakanohito.jp/b3/",
    this.efoFlag                      = !0,
    this.uisv                         = 1,
    this.addMouseTime                 = 0,
    this.formSubmitAction             = !1,
    this.formRecord                   = {},
    this.domRecord                    = {},
    this.domInitOrder                 = [],
    this.domAfterOrder                = [],
    this.maxAddFormCount              = 50,
    this.formCount                    = 0,
    this.domIDRecord                  = {},
    this.domLabel                     = {},
    this.checkSetForm                 = !1,
    this.tapEnable                    = !1,
    this.endFlag                      = !1,
    this.max_url_length               = 2040,
    this.focusFlag                    = !1,
    this.focusForm                    = "",
    this.UI_JSON                      = UI_JSON
}, Vesicomyid.Bivalves.checkBrowser                                                                                                                                                                                                                                                                                                                                                        = function (e) {
    var t = window
            .navigator
            .userAgent
            .toLowerCase(),
        i = window
            .navigator
            .appVersion
            .toLowerCase();
    return -1 != t.indexOf("msie")
        ? -1 != i.indexOf(e)
        : -1 != i.indexOf(e)
}, Vesicomyid.Bivalves.Browser                                                                                                                                                                                                                                                                                                                                                             = {
    Chrome       : Vesicomyid
        .Bivalves
        .checkBrowser("chrome"),
    Gecko        : navigator
        .userAgent
        .indexOf("Gecko") > -1 && -1 == navigator
        .userAgent
        .indexOf("KHTML"),
    IE           : !(!window.attachEvent || window.opera),
    IE10         : Vesicomyid
        .Bivalves
        .checkBrowser("msie 10."),
    IE11         : Vesicomyid
        .Bivalves
        .checkBrowser("trident/7."),
    IE6          : Vesicomyid
        .Bivalves
        .checkBrowser("msie 6."),
    IE7          : Vesicomyid
        .Bivalves
        .checkBrowser("msie 7."),
    IE8          : Vesicomyid
        .Bivalves
        .checkBrowser("msie 8."),
    IE9          : Vesicomyid
        .Bivalves
        .checkBrowser("msie 9."),
    MobileAndroid: navigator
        .userAgent
        .indexOf("Android") > -1,
    MobileApple  : navigator
        .userAgent
        .indexOf("iPhone") > -1 || navigator
        .userAgent
        .indexOf("iPod") > -1 || navigator
        .userAgent
        .indexOf("iPad") > -1,
    ModeStd      : document.compatMode && "BackCompat" != document.compatMode,
    Opera        : !!window.opera,
    Safari       : -1 != navigator
        .userAgent
        .toLowerCase()
        .indexOf("safari")
}, Vesicomyid.Bivalves.Env                                                                                                                                                                                                                                                                                                                                                                 = function () {
    return this
}, Vesicomyid.Bivalves.Env.type_prod                                                                                                                                                                                                                                                                                                                                                       = !0, Vesicomyid.Bivalves.Env.prototype.domain1                                                                                                                                                                                                                                                                                                       = "nakanohito.jp", Vesicomyid.Bivalves.Env.prototype.domain2                                                                                                                                                                                                                                          = "userlocal.jp", Vesicomyid.Bivalves.Env.prototype["char"]                                                                                                                                                                              = "null", Vesicomyid.Bivalves.Env.prototype.image_url2                                                                                                                       = "", Vesicomyid.Bivalves.Env.prototype.ssl_image_url2                                                                = "", Vesicomyid.Bivalves.Env.prototype.dynMousePositionPeriod = [
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12
], Vesicomyid.Bivalves.Env.prototype.dynMousePositionReportPeriod                                                                                                                                                                                                                                                                                                                          = [
    10,
    15,
    15,
    15,
    20,
    20,
    20
], Vesicomyid.Bivalves.addEventListener                                                                                                                                                                                                                                                                                                                                                    = function (e, t, i) {
    if (Vesicomyid.Bivalves.listeners || (Vesicomyid.Bivalves.listeners = new Array), Vesicomyid.Bivalves.listeners.push({elem: e, event: t, func: i}), e && e.addEventListener && !Vesicomyid.Bivalves.Browser.Opera) {
        var o = !1;
        this.checkPassiveEventListener() && (o = {
            capture: !1,
            passive: !0
        }),
        e.addEventListener(t, i, o)
    } else
        window.attachEvent && (t = this.convertEvent(t), e.attachEvent("on" + t, i))
}, Vesicomyid.Bivalves.checkPassiveEventListener                                                                                                                                                                                                                                                                                                                                           = function () {
    var e = !1;
    try {
        var t = Object.defineProperty({}, "passive", {
            get: function () {
                e = !0
            }
        });
        window.addEventListener("test", null, t)
    } catch (i) {}
    return e
}, Vesicomyid.Bivalves.removeEventListeners                                                                                                                                                                                                                                                                                                                                                = function (e) {
    if (Vesicomyid.Bivalves.listeners)
        for (var t = 0; t < Vesicomyid.Bivalves.listeners.length; t++) {
            var i = Vesicomyid
                    .Bivalves
                    .listeners[t],
                o = i.elem;
            if (e == o) {
                var n = i.event,
                    r = i.func;
                window.addEventListener && !Vesicomyid.Bivalves.Browser.Opera
                    ? e.removeEventListener(n, r, !1)
                    : window.attachEvent && (n = this.convertEvent(n), e.detachEvent("on" + n, r))
            }
        }
    }, Vesicomyid.Bivalves.removeAllEventListeners                                                                                                                                                                                                                                                                                                                                             = function () {
    if (Vesicomyid.Bivalves.listeners)
        for (var e = 0; e < Vesicomyid.Bivalves.listeners.length; e++) {
            var t = Vesicomyid
                    .Bivalves
                    .listeners[e],
                i = t.elem,
                o = t.event,
                n = t.func;
            window.addEventListener && !Vesicomyid.Bivalves.Browser.Opera
                ? i && i.removeEventListener(o, n, !1)
                : window.attachEvent && (o = this.convertEvent(o), i.detachEvent("on" + o, n))
        }
    }, Vesicomyid.Bivalves.getElementByClassName                                                                                                                                                                                                                                                                                                                                               = function (e) {
    if ("undefined" != typeof document.getElementsByClassName) {
        var t = !0;
        if ("undifinied" != typeof Prototype) {
            var i = window
                .navigator
                .appVersion
                .toLowerCase();
            -1 == i.indexOf("msie 8.") && -1 == i.indexOf("msie 7.") && -1 == i.indexOf("msie 6.") || (t = !1)
        }
        if (t) {
            var o = document.getElementsByClassName(e);
            return o.length && o.length >= 1
                ? o[0]
                : null
        }
    }
    var n = new Array;
    if (document.all)
        var r = document.all;
    else
        var r = document.getElementsByTagName("*");
    for (var s = 0, a = 0; s < r.length; s++)
        r[s].className == e && (n[a] = r[s], a++);
    return n.length && n.length >= 2
        ? n[0]
        : null
}, Vesicomyid.Bivalves.convertEvent                                                                                                                                                                                                                                                                                                                                                        = function (e) {
    return "DOMMouseScroll" == e && (e = "mousewheel"),
    e
}, Vesicomyid.Bivalves.prototype.init                                                                                                                                                                                                                                                                                                                                                      = function () {
    if ("undefined" == typeof Vesicomyid.Bivalves.flagAlreadyInit) {
        Vesicomyid.Bivalves.flagAlreadyInit = !0;
        var e = this;
        if (!this.host.match(this.env.domain1) && !this.host.match(this.env.domain2))
            return !1;
        this.image_url = this.host,
        "31873" != _uih.id && (Vesicomyid.Bivalves.Browser.Gecko && this.flagFirefoxSslAccess && (Vesicomyid.Bivalves.Browser.MobileAndroid || (this.image_url = this.hostssl)), Vesicomyid.Bivalves.Browser.IE && (this.image_url = this.hostssl));
        for (var t = [
            50929, 51042
        ], i = 0; i < t.length; i++)
            _uih.id == t[i] && (this.efoFlag = !1);
        _uih.id || (this.efoFlag = !1);
        for (var o = [
            "mynavi", "plus-agent.com"
        ], i = 0; i < o.length; i++)
            -1 != _uih
                .url
                .indexOf(o[i]) && (this.efoFlag = !1);
        var n = Vesicomyid
            .Bivalves
            .getElementByClassName("class_bivalves");
        if (n && (n.innerHTML = '<img id="' + this.beacon_id + '" width="1" height="1" /><span style="' + this.message.style +
                '" >' + this.message.comment + "</span>"), Vesicomyid.Bivalves.Browser.Safari) {
            var r = function () {
                e.start(),
                2 == e.lvl && e.safariSupport && e.safariOutBound && e.setFilters("A", function (t, i, o) {
                    e.setMouseClick(t, i),
                    e.end(o)
                }),
                Vesicomyid
                    .Bivalves
                    .addEventListener(window, "unload", function () {
                        Vesicomyid
                            .Bivalves
                            .removeAllEventListeners()
                    }),
                2 == e.lvl && e.safariSupport && (document.body && ("onpagehide" in window
                    ? window.addEventListener("pagehide", function (t) {
                        e.end(),
                        Vesicomyid
                            .Bivalves
                            .removeAllEventListeners()
                    })
                    : window.addEventListener("beforeunload", function (t) {
                        e.end(),
                        Vesicomyid
                            .Bivalves
                            .removeAllEventListeners()
                    }),
                Vesicomyid.Bivalves.addEventListener(document.body, "mouseup", function (t) {
                    e.mouseClick(t)
                }),
                Vesicomyid.Bivalves.addEventListener(document.body, "mousewheel", function (t) {
                    e.mouseScroll(t)
                }),
                Vesicomyid.Bivalves.addEventListener(document.body, "mousemove", function (t) {
                    e.mouseMove(t)
                })), "ontouchstart" in document.body && (Vesicomyid.Bivalves.addEventListener(document.body, "touchstart", function (t) {
                    "undefined" != typeof event
                        ? t.pageX || (t = event.touches[0])
                        : t.touches && (t = t.touches[0]),
                    e.mouseMove(t)
                }), Vesicomyid.Bivalves.addEventListener(document.body, "touchmove", function (t) {
                    "undefined" != typeof event
                        ? t.pageX || (t = event.touches[0])
                        : t.touches && (t = t.touches[0]),
                    e.mouseMove(t)
                }), Vesicomyid.Bivalves.addEventListener(document.body, "touchend", function (t) {
                    if ("undefined" != typeof event
                        ? t.pageX || (t = event.touches[0])
                        : t.touches && (t = t.touches[0]),
                    e.tapEnable) {
                        var i = !1;
                        "mouseup" in document.body && (e.removeEventListener("mouseup"), i = !0),
                        e.tapEnable = !1,
                        e.mouseClick(t),
                        i && Vesicomyid
                            .Bivalves
                            .addEventListener(document.body, "mouseup", function (t) {
                                e.mouseClick(t)
                            })
                    }
                })), e.efoFlag && ("complete" == document.readyState
                    ? Vesicomyid.Bivalves.formEventInit(e)
                    : Vesicomyid.Bivalves.addEventListener(document, "readystatechange", function () {
                        "complete" == document.readyState && Vesicomyid
                            .Bivalves
                            .formEventInit(e)
                    })))
            };
            r()
        } else {
            var r = function () {
                e.start()
            };
            r(),
            Vesicomyid
                .Bivalves
                .addEventListener(window, "unload", function () {
                    e.end(),
                    Vesicomyid
                        .Bivalves
                        .removeAllEventListeners()
                }),
            "onpagehide" in window
                ? Vesicomyid
                    .Bivalves
                    .addEventListener(window, "pagehide", function (t) {
                        e.end(),
                        Vesicomyid
                            .Bivalves
                            .removeAllEventListeners()
                    })
                : Vesicomyid
                    .Bivalves
                    .addEventListener(window, "beforeunload", function (t) {
                        e.end(),
                        Vesicomyid
                            .Bivalves
                            .removeAllEventListeners()
                    }),
            2 == e.lvl && document.body && (Vesicomyid.Bivalves.addEventListener(document.body, "mouseup", function (t) {
                e.mouseClick(t)
            }), Vesicomyid.Bivalves.addEventListener(document.body, "DOMMouseScroll", function (t) {
                e.mouseScroll(t)
            }), Vesicomyid.Bivalves.addEventListener(document.body, "mousemove", function (t) {
                e.mouseMove(t)
            }), "ontouchstart" in document.body && (Vesicomyid.Bivalves.addEventListener(document.body, "touchstart", function (t) {
                "undefined" != typeof event
                    ? t.pageX || (t = event.touches[0])
                    : t.touches && (t = t.touches[0]),
                e.mouseMove(t)
            }), Vesicomyid.Bivalves.addEventListener(document.body, "touchmove", function (t) {
                "undefined" != typeof event
                    ? t.pageX || (t = event.touches[0])
                    : t.touches && (t = t.touches[0]),
                e.mouseMove(t)
            }), Vesicomyid.Bivalves.addEventListener(document.body, "touchend", function (t) {
                if ("undefined" != typeof event
                    ? t.pageX || (t = event.touches[0])
                    : t.touches && (t = t.touches[0]),
                e.tapEnable) {
                    var i = !1;
                    "mouseup" in document.body && (e.removeEventListener("mouseup"), i = !0),
                    e.tapEnable = !1,
                    e.mouseClick(t),
                    i && Vesicomyid
                        .Bivalves
                        .addEventListener(document.body, "mouseup", function (t) {
                            e.mouseClick(t)
                        })
                }
            })), e.efoFlag && ("complete" == document.readyState
                ? Vesicomyid.Bivalves.formEventInit(e)
                : Vesicomyid.Bivalves.addEventListener(document, "readystatechange", function () {
                    "complete" == document.readyState && Vesicomyid
                        .Bivalves
                        .formEventInit(e)
                })))
        }
    }
}, Vesicomyid.Bivalves.prototype.start                                                                                                                                                                                                                                                                                                                                                     = function () {
    if (this.startTime = (new Date).getTime(), this.mouseWheelUp = 0, this.mouseWheelDown = 0, this.flagDynMouseReport) {
        this.countDynMouseReport = 0,
        this.timerDynMouseReport = !1,
        this.sendDynMouseReport  = 0;
        var e = !0;
        Vesicomyid.Bivalves.Browser.Gecko && Vesicomyid.Bivalves.Browser.MobileAndroid && (this.forceMobileFirefox || (e = !1)),
        e && this.setNextDynMouseReport()
    }
}, Vesicomyid.Bivalves.prototype.setNextDynMouseReport                                                                                                                                                                                                                                                                                                                                     = function () {
    var e = this.countDynMouseReport;
    if (e >= 0 && e < this.dynMousePositionReportPeriod.length - 1) {
        var t = 1e3 * this.dynMousePositionReportPeriod[e],
            i = this;
        this.timerDynMouseReport = setTimeout(function () {
            i.dynReport()
        }, t)
    }
}, Vesicomyid.Bivalves.prototype.end                                                                                                                                                                                                                                                                                                                                                       = function (e) {
    this.commonReport(0, e)
}, Vesicomyid.Bivalves.prototype.dynReport                                                                                                                                                                                                                                                                                                                                                 = function () {
    this.commonReport(1)
}, Vesicomyid.Bivalves.prototype.commonReport                                                                                                                                                                                                                                                                                                                                              = function (e, t) {
    if (this.flagEnd)
        return !1;
    var i = !1;
    if (1 == e && (this.dynMousePositionRecord
        ? this.sendDynMouseReport == this.dynMousePositionRecord.length && (i = !0)
        : i = !0), !i) {
        var o = new Image(1, 1);
        this.lastTime = (new Date).getTime();
        var n = new Array;
        n.push("uisv=" + this.uisv),
        n.push("from=ui3"),
        n.push("mode=behavior"),
        1 == e
            ? n.push("dyn_report=" + this.countDynMouseReport)
            : this.timerDynMouseReport && (clearTimeout(this.timerDynMouseReport), this.timerDynMouseReport = !1),
        n.push("id=" + this.id),
        n.push("time=" + Math.floor(this.lastTime / 100)),
        0 == e && n.push("char=" + this["char"]),
        n.push("rand=" + this.rand),
        n.push("period=" + Math.floor(this.getPeriod() / 100));
        var r = encodeURIComponent(this.lastClickHref);
        r.length > 500 && (r = r.substr(0, 500)),
        n.push("href=" + r),
        n.push("lastClickTime=" + Math.floor((this.lastClickTime - this.startTime) / 100)),
        (0 == e || 1 == e && 0 == this.sendDynMouseReport) && n.push("startMousePosition=" +
                this.getStartMousePosition()),
        n.push("mouseTimes=" + this.mouseTimes),
        n.push("mouseWheelUp=" + this.mouseWheelUp),
        n.push("mouseWheelDown=" + this.mouseWheelDown),
        n.push("mouse=" + this.getMousePositions()),
        0 == e
            ? n.push("mousePositions=" + this.getDynMousePositions(0))
            : this.dynMousePositionRecord && (n.push("mousePositions=" + this.getDynMousePositions(this.sendDynMouseReport)), this.sendDynMouseReport = this.dynMousePositionRecord.length);
        var s = this.makeFreeHash([
            "mode",
            "lvl",
            "id",
            "time",
            "char",
            "ref",
            "url",
            "cookie",
            "flash",
            "title",
            "width",
            "height",
            "sw",
            "sh"
        ]);
        if (s && n.push(s), 0 != this.ratio && n.push("ratio=" + this.ratio), 0 == e && this.efoFlag)
            if (this.endFlag)
                this.endFlag = !0;
            else {
                if (this.focusFlag && (this.domList(this.formDomList, "form", ["INPUT", "SELECT", "TEXTAREA"]), this.domInitOrder !== this.domAfterOrder && this.margeDomAndForm()), this.formRecord && !this.isEmptyObject(this.formRecord) && !this.isEmptyObject(this.getForm())) {
                    var a = encodeURIComponent(this.UI_JSON.stringify(this.getForm()));
                    a.length <= 3e3 && n.push("form=" + a)
                }
                if (this.domRecord && !this.isEmptyObject(this.domRecord) && !this.isEmptyObject(this.getDom())) {
                    var c = encodeURIComponent(this.UI_JSON.stringify(this.getDom()));
                    c.length <= 4e3 && n.push("dom=" + c)
                }
            }
        n.push("paramend=1"),
        t
            ? o.onload = t
            : o.onload = function () {};
        var u = this.image_url + "?" + n.join("&");
        u.length <= 7e3 && (o.src = u)
    }
    1 == e && (this.countDynMouseReport += 1, this.setNextDynMouseReport())
}, Vesicomyid.Bivalves.prototype.getWindowSize                                                                                                                                                                                                                                                                                                                                             = function () {
    var e = null,
        t = null;
    return Vesicomyid.Bivalves.Browser.ModeStd
        ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight)
        : document.body && (e = document.body.clientWidth, t = document.body.clientHeight), {
        height: t,
        width : e
    }
}, Vesicomyid.Bivalves.prototype.getScreenSize                                                                                                                                                                                                                                                                                                                                             = function () {
    var e = screen.width,
        t = screen.height;
    return {height: t, width: e}
}, Vesicomyid.Bivalves.prototype.makeFreeHash                                                                                                                                                                                                                                                                                                                                              = function (e) {
    if (this.freeHash) {
        for (var t = new Array, i = 0; i < e.length; i++)
            t[e[i]] = !0;
        var o = new Array;
        for (var n in this.freeHash)
            1 != t[n] && o.push(n + "=" + encodeURIComponent(this.freeHash[n]));
        return o.join("&")
    }
    return null
}, Vesicomyid.Bivalves.prototype.getPeriod                                                                                                                                                                                                                                                                                                                                                 = function () {
    return this.startTime && this.lastTime
        ? this.lastTime - this.startTime
        : null
}, Vesicomyid.Bivalves.prototype.mouseClick                                                                                                                                                                                                                                                                                                                                                = function (e) {
    if (!e)
        var e = window.event;
    var t = e.srcElement
        ? e.srcElement
        : e.target;
    t && this.setMouseClick(t, e)
}, Vesicomyid.Bivalves.prototype.setMouseClick                                                                                                                                                                                                                                                                                                                                             = function (e, t) {
    var i = e.nodeName;
    i && ("A" == i.toUpperCase()
        ? (this.lastClickHref = e.href, this.lastClickTime = (new Date).getTime(), this.addMousePosition(t))
        : "INPUT" == i.toUpperCase()
            ? (this.lastClickHref = e.form
                ? e.form.action
                : "",
            this.lastClickTime = (new Date).getTime(),
            this.addMousePosition(t))
            : this.addMousePosition(t))
}, Vesicomyid.Bivalves.prototype.mouseScroll                                                                                                                                                                                                                                                                                                                                               = function (e) {
    if (!e)
        var e = window.event;
    var t = 0;
    e.wheelDelta
        ? (t = e.wheelDelta / 120, window.opera && (t = -t))
        : e.detail && (t = -e.detail / 3),
    t > 0
        ? this.mouseWheelUp += t
        : this.mouseWheelDown += -t
}, Vesicomyid.Bivalves.prototype.mouseMove                                                                                                                                                                                                                                                                                                                                                 = function (e) {
    this.startMousePosition || (this.startMousePosition = this.eventPosition(e)),
    this.dynMousePositionRecord || (this.dynMousePositionRecord = new Array, this.dynMousePositionTime = this.startTime);
    var t = this.dynMousePositionRecord.length;
    if (t < this.dynMousePositionPeriod.length) {
        var i = ((new Date).getTime() - this.dynMousePositionTime) / 1e3;
        if (i > this.dynMousePositionPeriod[t]) {
            this.dynMousePositionTime = (new Date).getTime();
            var o = this.eventPosition(e);
            this
                .dynMousePositionRecord
                .push(o)
        }
    }
}, Vesicomyid.Bivalves.prototype.addMousePosition                                                                                                                                                                                                                                                                                                                                          = function (e) {
    this.mouseTimes || (this.mouseTimes = 0),
    this.mouseTimes++,
    this.mousePositionRecord || (this.mousePositionRecord = new Array);
    var t = this.eventPosition(e);
    Vesicomyid.Bivalves.Browser.IE || Vesicomyid.Bivalves.Browser.IE11
        ? (0 == this.addMouseTime || t.t >= this.addMouseTime + 4) && (this.addMouseTime = t.t, this.mousePositionRecord.push(t), this.mousePositionRecord.length > 10 && this.mousePositionRecord.shift())
        : (this.mousePositionRecord.push(t), this.mousePositionRecord.length > 10 && this.mousePositionRecord.shift())
}, Vesicomyid.Bivalves.prototype.eventPosition                                                                                                                                                                                                                                                                                                                                             = function (e) {
    var t = 0,
        i = 0;
    e.pageX
        ? (t = e.pageX, i = e.pageY)
        : (t = e.clientX + document.documentElement.scrollLeft, i = e.clientY + document.documentElement.scrollTop),
    Vesicomyid.Bivalves.Browser.IE && Vesicomyid.Bivalves.Browser.ModeStd && (t -= 2, i -= 2);
    var o = 0;
    return Vesicomyid.Bivalves.Browser.ModeStd
        ? o = window.pageYOffset || document.documentElement.scrollTop
        : document.body && (o = window.pageYOffset || document.body.scrollTop), {
        st: o,
        t : Math.floor(((new Date).getTime() - this.startTime) / 100),
        x : parseInt(t),
        y : parseInt(i)
    }
}, Vesicomyid.Bivalves.prototype.getStartMousePosition                                                                                                                                                                                                                                                                                                                                     = function () {
    if (this.startMousePosition) {
        var e = this.startMousePosition;
        return e.x + "," + e.y + "," + e.t + "," + e.st
    }
    return null
}, Vesicomyid.Bivalves.prototype.getMousePositions                                                                                                                                                                                                                                                                                                                                         = function () {
    if (this.mousePositionRecord) {
        for (var e = new Array, t = 0; t < this.mousePositionRecord.length; t++) {
            var i = this.mousePositionRecord[t];
            e.push(i.x + "," + i.y + "," + i.t + "," + i.st)
        }
        var o = this.joinShort(e, 200),
            n = o.join("|");
        return o.length > 0 && (n += "|"),
        n
    }
    return null
}, Vesicomyid.Bivalves.prototype.getDynMousePositions                                                                                                                                                                                                                                                                                                                                      = function (e) {
    if (this.dynMousePositionRecord) {
        for (var t = new Array, i = e; i < this.dynMousePositionRecord.length; i++) {
            var o = this.dynMousePositionRecord[i];
            t.push(o.x + "," + o.y + "," + o.t + "," + o.st)
        }
        var n = this.joinShort(t, 200),
            r = n.join("|");
        return n.length > 0 && (r += "|"),
        r
    }
    return null
}, Vesicomyid.Bivalves.prototype.joinShort                                                                                                                                                                                                                                                                                                                                                 = function (e, t) {
    for (var i = new Array, o = e.length + 1, n = 0; n < e.length && (o = o + e[n].length + 1, !(o > t)); n++)
        i.push(e[n]);
    return i
}, Vesicomyid.Bivalves.prototype.searchNodes                                                                                                                                                                                                                                                                                                                                               = function (e, t, i) {
    var o = t.childNodes;
    if (o && o.length)
        for (var n = 0; n < o.length; n++) {
            var r = o[n];
            1 == r.nodeType && (r.nodeName.toUpperCase() == e
                ? i[i.length] = r
                : r.hasChildNodes() && this.searchNodes(e, r, i))
        }
    }, Vesicomyid.Bivalves.prototype.setFilters                                                                                                                                                                                                                                                                                                                                                = function (tag, func) {
    var self  = this,
        lFunc = func,
        arr   = new Array;
    if (document.body) {
        this.searchNodes(tag, document.body, arr);
        for (var i = 0; i < arr.length; i++) {
            var elem         = arr[i],
                prev_onclick = elem.getAttribute("onclick");
            prev_onclick
                ? self.safariControlOnClick && !function (act, lFunc2) {
                    elem.onclick = function (ev) {
                        var res = eval(" var vesicomyid_dummy_function = function() { " + act + "}; ves" +
                                "icomyid_dummy_function.apply(this);");
                        if (res) {
                            var myself = this;
                            myself.flagAlreadyMove = !1,
                            lFunc2(this, ev, function () {
                                myself.flagAlreadyMove || (location.href = myself.href)
                            }),
                            setTimeout(function () {
                                location.href          = myself.href,
                                myself.flagAlreadyMove = !0
                            }, self.safariSupportDelayTime)
                        }
                        return !1
                    }
                }(prev_onclick, lFunc)
                : !function (e) {
                    elem.onclick = function (t) {
                        var i = this;
                        return i.flagAlreadMove = !1,
                        e(this, t, function () {
                            i.flagAlreadyMove || (location.href = i.href, i.flagAlreadMove = !0)
                        }),
                        setTimeout(function () {
                            location.href     = i.href,
                            i.flagAlreadyMove = !0
                        }, self.safariSupportDelayTime),
                        !1
                    }
                }(lFunc)
        }
    }
}, Vesicomyid.Bivalves.formEventInit                                                                                                                                                                                                                                                                                                                                                       = function (e) {
    for (var t = [
        "input", "textarea", "button", "select", "form"
    ], i = 0; i < t.length; i++)
        for (var o = document.getElementsByTagName(t[i]), n = 0; n < o.length; n++)
            "form" == t[i]
                ? (e.checkSetForm = !0, Vesicomyid.Bivalves.addEventListener(o[n], "submit", function (t) {
                    e.formSubmit(t)
                }))
                : ("submit" !== o[n].type.toLowerCase() && ("input" != t[i] || "image" !== o[n].type.toLowerCase()) || Vesicomyid.Bivalves.Browser.IE || Vesicomyid.Bivalves.addEventListener(o[n], "click", function (t) {
                    var i = e.getParentElement("FORM", this, e);
                    i && e.domList(e.formErrorLog, "form", [
                        "INPUT", "SELECT", "TEXTAREA"
                    ], i.getAttribute("action"))
                }), "button" != t[i] && ("radio" === o[n].type.toLowerCase() || "checkbox" === o[n].type.toLocaleLowerCase()
                    ? Vesicomyid.Bivalves.addEventListener(o[n], "change", function (t) {
                        e.formChange(t)
                    })
                    : (Vesicomyid.Bivalves.addEventListener(o[n], "focus", function (t) {
                        e.formFocus(t)
                    }), Vesicomyid.Bivalves.addEventListener(o[n], "blur", function (t) {
                        e.formBlur(t)
                    }))))
        }, Vesicomyid.Bivalves.prototype.formFocus                                                                                                                                                                                                                                                                                                                                                 = function (e) {
    e || (e = window.event);
    var t = e.srcElement
        ? e.srcElement
        : e.target;
    t && this.addFormFocus(t, e)
}, Vesicomyid.Bivalves.prototype.addFormFocus                                                                                                                                                                                                                                                                                                                                              = function (e, t) {
    this.addForm(e, "focus")
}, Vesicomyid.Bivalves.prototype.formBlur                                                                                                                                                                                                                                                                                                                                                  = function (e) {
    e || (e = window.event);
    var t = e.srcElement
        ? e.srcElement
        : e.target;
    t && this.addFormBlur(t, e)
}, Vesicomyid.Bivalves.prototype.addFormBlur                                                                                                                                                                                                                                                                                                                                               = function (e, t) {
    this.addForm(e, "blur")
}, Vesicomyid.Bivalves.prototype.formChange                                                                                                                                                                                                                                                                                                                                                = function (e) {
    e || (e = window.event);
    var t = e.srcElement
        ? e.srcElement
        : e.target;
    t && this.addFormChange(t, e)
}, Vesicomyid.Bivalves.prototype.addFormChange                                                                                                                                                                                                                                                                                                                                             = function (e, t) {
    this.addForm(e, "change")
}, Vesicomyid.Bivalves.prototype.formSubmit                                                                                                                                                                                                                                                                                                                                                = function (e) {
    e || (e = window.event);
    var t = e.srcElement
        ? e.srcElement
        : e.target;
    t && this.addFormSubmit(t, e)
}, Vesicomyid.Bivalves.prototype.addFormSubmit                                                                                                                                                                                                                                                                                                                                             = function (e, t) {
    this.formSubmitAction = !0,
    e.name                = e.name
        ? e.name
        : "",
    this.lastClickTime    = (new Date).getTime(),
    this.addForm(e, "submit")
}, Vesicomyid.Bivalves.prototype.addForm                                                                                                                                                                                                                                                                                                                                                   = function (e, t) {
    this.focusFlag = !0,
    this.isEmptyObject(this.domRecord) && this.domList(this.formDomList, "form", ["INPUT", "SELECT", "TEXTAREA"]);
    var i = document.getElementsByTagName("form");
    if (this.domAfterOrder = [], i)
        for (var o = 0; o < i.length; o = o + 1 | 0)
            this.domAfterOrder[this.domAfterOrder.length] = i[o].getAttribute("action");
if (this.formCount < this.maxAddFormCount) {
        this.formCount = this.formCount + 1;
        var n = "",
            r = "",
            s = "",
            a = "";
        if (e.form && e.form.nodeName) {
            if ("undefined" == typeof e.form.getAttribute("action"))
                return null;
            this.formRecord[
                e
                    .form
                    .getAttribute("action")
            ] || (this.formRecord[
                e
                    .form
                    .getAttribute("action")
            ] = []),
            n = e
                .form
                .getAttribute("action"),
            r = e.name,
            s = e
        } else {
            if ("submit" == t) {
                n = e.getAttribute("action"),
                r = e.name
                    ? e.name
                    : "";
                for (var c = e.getElementsByTagName("input"), u = e.getElementsByTagName("button"), o = 0; o < c.length; o = o + 1 | 0)
                    if (a = c[o].getAttribute("type"), a && ("submit" == a.toLowerCase() || "image" == a.toLowerCase())) {
                        s = c[o];
                        break
                    }
                if ("" == s)
                    for (var o = 0; o < u.length; o = o + 1 | 0)
                        if ("type" in u[o] && (a = u[o].type, a && "submit" == a.toLowerCase())) {
                            s = u[o];
                            break
                        }
                    } else
                "undefined" != typeof e.getAttribute("action") && (n = e.getAttribute("action"), r = e.name
                    ? e.name
                    : "",
                s = e);
            this.formRecord[n] || (this.formRecord[n] = [])
        }
        "" == n && "" == r || "" != s && this.setForm(n, t, r, s)
    }
}, Vesicomyid.Bivalves.prototype.setForm                                                                                                                                                                                                                                                                                                                                                   = function (e, t, i, o) {
    var n = this.getElementPosition(o);
    this.focusForm = e,
    this.formRecord[e][
        this
            .formRecord[e]
            .length
    ]              = [
        t,
        i,
        Math.floor(((new Date).getTime() - this.startTime) / 100),
        n.x,
        n.y
    ]
}, Vesicomyid.Bivalves.prototype.formErrorLog                                                                                                                                                                                                                                                                                                                                              = function (e, t, i) {
    var o = i.amongErrorLog(t);
    o && i.addFormErrorLog(e, t, o, i)
}, Vesicomyid.Bivalves.prototype.amongErrorLog                                                                                                                                                                                                                                                                                                                                             = function (e) {
    switch (!1) {
        case !e.validity.valueMissing:
            return "valMis";
        case !e.validity.typeMismatch:
            return "typeMis";
        case !e.validity.patternMismatch:
            return "patMis";
        case !e.validity.tooLong:
            return "tooLong";
        case !e.validity.rangeUnderflow:
            return "ranUnder";
        case !e.validity.rangeOverflow:
            return "rangeOver";
        case !e.validity.stepMismatch:
            return "stepMis";
        case !e.validity.customError:
            return "cusErr"
    }
    return null
}, Vesicomyid.Bivalves.prototype.addFormErrorLog                                                                                                                                                                                                                                                                                                                                           = function (e, t, i, o) {
    var n = e
            ? e
            : "",
        r = t.name
            ? t.name
            : "";
    o.setFormErrorLog(n, r, i, o)
}, Vesicomyid.Bivalves.prototype.setFormErrorLog                                                                                                                                                                                                                                                                                                                                           = function (e, t, i, o) {
    return "undefined" == typeof e
        ? null
        : (o.formRecord[e] || (o.formRecord[e] = []), void(o.formRecord[e][
            o
                .formRecord[e]
                .length
        ] = ["error", t, i]))
}, Vesicomyid.Bivalves.prototype.domList                                                                                                                                                                                                                                                                                                                                                   = function (e, t, i, o) {
    if (document.querySelectorAll) {
        var n = document.getElementsByTagName(t);
        if (n && this.isEmptyArray(this.domInitOrder)) {
            for (var r = 0; r < n.length; r++)
                this.domInitOrder[this.domInitOrder.length] = n[r].getAttribute("action");
            this.domAfterOrder = this.domInitOrder
        }
        if (o)
            for (var r = 0; r < n.length; r++)
                n[r].getAttribute("action") == o && this.childDomList(n[r], e, i);
    else
            for (var r = 0; r < n.length; r++)
                this.childDomList(n[r], e, i)
    }
}, Vesicomyid.Bivalves.prototype.childDomList                                                                                                                                                                                                                                                                                                                                              = function (e, t, i) {
    if (e.querySelectorAll)
        for (var o = i.join(), n = e.querySelectorAll(o), r = e.getAttribute("action"), s = 0; s < n.length; s = s + 1 | 0) {
            var a = n[s];
            "INPUT" == a.tagName && "hidden" == a
                .type
                .toLowerCase() || t(r, a, this)
        }
    }, Vesicomyid.Bivalves.prototype.formDomList                                                                                                                                                                                                                                                                                                                                               = function (e, t, i) {
    var o = t.required,
        n = "";
    "INPUT" == t.tagName
        ? n = t
            .type
            .toLowerCase()
        : "LABEL" != t.tagName && (n = t.tagName.toLowerCase());
    var r = t.tagName;
    if ("hidden" != n && t) {
        var s = i.getElementPosition(t);
        i.addFormDomList(e, t.name, s.x, s.y, o, i, "", t, n, r)
    }
}, Vesicomyid.Bivalves.prototype.getElementPosition                                                                                                                                                                                                                                                                                                                                        = function (e) {
    var t,
        i,
        o = e.getBoundingClientRect();
    Vesicomyid.Bivalves.Browser.ModeStd
        ? (t = window.pageYOffset || document.documentElement.scrollTop, i = window.pageXOffset || document.documentElement.scrollLeft)
        : document.body && (t = window.pageYOffset || document.body.scrollTop, i = window.pageXOffset || document.body.scrollLeft);
    var n = parseInt(o.left + i),
        r = parseInt(o.top + t);
    return {x: n, y: r}
}, Vesicomyid.Bivalves.prototype.addFormDomList                                                                                                                                                                                                                                                                                                                                            = function (e, t, i, o, n, r, s, a, c, u) {
    if ("undefined" == typeof e)
        return null;
    r.domRecord[e] || (r.domRecord[e] = [], r.domIDRecord[e] = []),
    n || (n = 0);
    var d = 0,
        l = a.value;
    if ("SELECT" == u && "" != l)
        d = 1;
    else if ("INPUT" == u) {
        var m = c;
        if ("radio" == m || "checkbox" == m)
            for (var f = document.getElementsByName(t), h = 0; h < f.length; h = h + 1 | 0)
                f[h].checked && (d = 1);
    else
            "submit" != m && l && (d = 1)
    } else
        l && (d = 1);
    var v = r.getDomNameNumber(t, e);
    v === !1 && (v = r.domRecord[e].length),
    r.domRecord[e][v]   = [
        t,
        i,
        o,
        n,
        s,
        d,
        c
    ],
    r.domIDRecord[e][v] = a.id
}, Vesicomyid.Bivalves.prototype.addLabel                                                                                                                                                                                                                                                                                                                                                  = function (e, t, i) {
    return "undefined" == typeof e
        ? null
        : (i.domLabel[e] || (i.domLabel[e] = []), void(i.domLabel[e][
            i
                .domLabel[e]
                .length
        ] = [t.getAttribute("for"), t.textContent]))
}, Vesicomyid.Bivalves.prototype.getForm                                                                                                                                                                                                                                                                                                                                                   = function () {
    if (this.formRecord) {
        var e = {};
        return e[this.focusForm] = this.formRecord[this.focusForm],
        e
    }
    return null
}, Vesicomyid.Bivalves.prototype.getDom                                                                                                                                                                                                                                                                                                                                                    = function () {
    if (this.domRecord) {
        var e = {};
        return this.domRecord[this.focusForm] && (e[this.focusForm] = this.domRecord[this.focusForm]),
        e
    }
    return null
}, Vesicomyid.Bivalves.prototype.setLabel                                                                                                                                                                                                                                                                                                                                                  = function () {
    return null
}, Vesicomyid.Bivalves.prototype.margeDomAndForm                                                                                                                                                                                                                                                                                                                                           = function () {
    for (var e = this.domInitOrder, t = this.domAfterOrder, i = 0; i < e.length; i++)
        e[i] && t[i] && e[i] != t[i] && (this.domRecord[e[i]] = this.domRecord[t[i]], this.formRecord[t[i]] = this.formRecord[e[i]] = this.pushArray(this.formRecord[e[i]], this.formRecord[t[i]])),
        e[i] && t[i] && t[i] == this.focusForm && (this.focusForm = e[i])
}, Vesicomyid.Bivalves.prototype.pushArray                                                                                                                                                                                                                                                                                                                                                 = function (e, t) {
    for (var i = [], o = 0; o < e.length; o++)
        i[i.length] = e[o];
    for (var o = 0; o < t.length; o++)
        i[i.length] = t[o];
    return i
}, Vesicomyid.Bivalves.prototype.isEmptyObject                                                                                                                                                                                                                                                                                                                                             = function (e) {
    return 0 == Object
        .keys(e)
        .length
}, Vesicomyid.Bivalves.prototype.isEmptyArray                                                                                                                                                                                                                                                                                                                                              = function (e) {
    return 0 == e.length
}, Vesicomyid.Bivalves.prototype.getDomNameNumber                                                                                                                                                                                                                                                                                                                                          = function (e, t) {
    for (var i = 0; i < this.domRecord[t].length; i = i + 1 | 0)
        if (this.domRecord[t][i][0] == e)
            return i;
return !1
}, Vesicomyid.Bivalves.prototype.getParentElement                                                                                                                                                                                                                                                                                                                                          = function (e, t, i) {
    i = i
        ? i
        : this;
    var o = t.parentNode;
    return o.tagName === e
        ? o
        : "HTML" === o.tagName || "BODY" === o.tagName || "HEAD" === o.tagName || "undefined" == typeof o.tagName
            ? !1
            : i.getParentElement(e, o, i)
}, Vesicomyid.Bivalves.prototype.setSubmit                                                                                                                                                                                                                                                                                                                                                 = function (e, t) {
    return "undefined" == typeof t
        ? null
        : (e.formRecord[t] || (e.formRecord[t] = []), e.focusForm = t, void(e.formRecord[t][
            e
                .formRecord[t]
                .length
        ] = [
            "submit",
            "u_submit",
            Math.floor(((new Date).getTime() - e.startTime) / 100),
            0,
            0
        ]))
}, Vesicomyid.Bivalves.prototype.onSubmit = function (e, t) {
    return "undefined" == typeof t
        ? null
        : void this.setSubmit(e, t.getAttribute("action"))
}, Vesicomyid.Bivalves.Loaded = function () {}), function () {
    var e = new Vesicomyid.Bivalves(_uih.id, _uih.rand);
    e.host    = _uic.host,
    e.hostssl = "https://bs.nakanohito.jp/b3/",
    e.uisv    = _uic.uisv,
    e.efoFlag = !0,
    _uic.efo !== !1 && 0 !== _uic.efo || (e.efoFlag = !1),
    1 == _uic.safari_mode && (e.safariSupport = !1),
    3 == _uic.safari_mode && (e.safariOutBound = !0),
    _uic.report_period && (e.dynMousePositionReportPeriod = _uic.report_period),
    _uic.disable_heatmap || _uic.sample_flag || (e.init(), _uic.lb = e, e.efoFlag && (_uic.setSubmit = function (e) {
        _uic
            .lb
            .setSubmit(_uic.lb, e)
    }, _uic.onSubmit                                                                                 = function (e) {
        _uic
            .lb
            .onSubmit(_uic.lb, e)
    }))
}());
