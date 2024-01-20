/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object),
        y = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }, x = function (e) {
            return null != e && e === e.window
        }, E = C.document, c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    var f = "3.6.0", S = function (e, t) {
        return new S.fn.init(e, t)
    };

    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    S.fn = S.prototype = {
        jquery: f, constructor: S, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return S.each(this, e)
        }, map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            b(e, { nonce: t && t.nonce }, n)
        }, each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        }, guid: 1, support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0,
            r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) {
                return e === t && (l = !0), 0
            }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, oe = function () {
                T()
            }, ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, { dir: "parentNode", next: "legend" });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        for (e in d = se.support = {}, i = se.isXML = function (e) {
            var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), d.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ce(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, j = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }), C
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
                N(t, !0)
            }
            return 0 < se(t, C, null, [e]).length
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
            return (e + "").replace(re, ie)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = se.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else while (t = e[r++]) n += o(t);
            return n
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [k, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: le(function (e) {
                    var r = [], i = [], s = f(e.replace($, "$1"));
                    return s[S] ? le(function (e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length
                    }
                }), contains: le(function (t) {
                    return t = t.replace(te, ne), function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }), lang: le(function (n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return J.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ve(function () {
                    return [0]
                }), last: ve(function (e, t) {
                    return [t - 1]
                }), eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {
        }

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                }
                c.push(t)
            }
            return we(c)
        }

        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++]) if (s(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e)
        }
        return r
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }

    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/, H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }

    S.fn.extend({
        has: function (e) {
            var t = S(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return h(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        }, next: function (e) {
            return O(e, "nextSibling")
        }, prev: function (e) {
            return O(e, "previousSibling")
        }, nextAll: function (e) {
            return h(e, "nextSibling")
        }, prevAll: function (e) {
            return h(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    S.each(e, function (e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), t && !i && c()), this
            }, remove: function () {
                return S.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || i || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                }, s = {};
            return S.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }

    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(S(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, _ = /^-ms-/, z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            Q.set(e, t, n)
        } else n = void 0;
        return n
    }

    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        }, data: function (e, t, n) {
            return Q.access(e, t, n)
        }, removeData: function (e, t) {
            Q.remove(e, t)
        }, _data: function (e, t, n) {
            return Y.access(e, t, n)
        }, _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) {
            return S.contains(e.ownerDocument, e)
        }, oe = { composed: !0 };
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    S.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1, handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }

    S.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({ elem: l, handlers: o })
            }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        }, addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
                }
            })
        }, fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        }, special: {
            load: { noBubble: !0 }, click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Se(this, e, Ce), !1
            }, trigger: function () {
                return Se(this, e), !0
            }, _default: function () {
                return !0
            }, delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return Ee(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    S.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]); else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0
                }
                n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        }, remove: function (e) {
            return Oe(this, e)
        }, text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        }, prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        }, html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return He(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, Me = function (e, t, n) {
        var r, i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.call(e), t) e.style[i] = o[i];
        return r
    }, Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), i
            }, reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = Be.length;
            while (n--) if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }

    var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/,
        Ve = { position: "absolute", visibility: "hidden", display: "block" },
        Ge = { letterSpacing: "0", fontWeight: "400" };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i,
            a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }

    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
                    return Je(e, u, n)
                })
            }, set: function (e, t, n) {
                var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, { marginLeft: 0 }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0, i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || at(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], rt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || S.style(e, r)
            }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
            })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () {
                var e = lt(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0, n = S.timers;
        for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        et || (et = !0, ot())
    }, S.fx.stop = function () {
        et = null
    }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }

    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: { "for": "htmlFor", "class": "className" }
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                a = 0;
                while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = ht(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                a = 0;
                while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                i !== (s = ht(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = S(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }

    S.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return { name: t.name, value: e.replace(Et, "\r\n") }
                }) : { name: t.name, value: n.replace(Et, "\r\n") }
            }).get()
        }
    });
    var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");

    function It(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {}, u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }

    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
            flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function (e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(),
                b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {
                }), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o }
                        }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : { top: 0, left: 0 } : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({ Height: "height", Width: "width" }, function (a, s) {
        S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Vt = C.jQuery, Gt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function C(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function T(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=a.grid&&a.grid.rows>1&&e.grid;let $;T&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(T&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),C%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),T&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||d([])).each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1);const v=-o[g];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((e,t)=>{d(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/n.length)*n.length;o.push(n.eq(e)[0]),l.unshift(n.eq(n.length-e-1)[0])}for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function L(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!l.noSwipingClass&&""!==l.noSwipingClass,f=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&f&&(h=d(f[0]));const g=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(v?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(g,h[0]):h.closest(g)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const w=o.currentX,b=o.currentY,x=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,y=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(x&&(w<=y||w>=i.innerWidth-y)){if("prevent"!==x)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=b,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function O(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let N=!1;function B(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=L.bind(e),e.onTouchMove=O.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!N&&(t.addEventListener("touchstart",B),N=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function q(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const j={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=i[t]&&i[t].enabled,a=o[t]&&o[t].enabled;s&&!a&&e[t].disable(),!s&&a&&e[t].enable()}));const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},_={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:q(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,_,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children?s.children(i()):d(s).children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(_,e)}static get extendedDefaults(){return _}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function J(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(j).forEach((e=>{Object.keys(j[e]).forEach((t=>{V.prototype[t]=j[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el)),i.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass);let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){const e=t.params.scrollbar,s=t.scrollbar.$el;s&&s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function L(){l&&(l=!1,k("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),e.slideRole&&o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},E=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),y(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",x,!0),t.$el.on("pointerdown",w,!0),t.$el.on("pointerup",b,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&E()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",x,!0),t.$el.off("pointerdown",w,!0),t.$el.off("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1);const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.removeClass(r),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);else for(let e=0;e<i;e+=1)s.slides.eq(t.realIndex+e).addClass(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){let i,r,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();i=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,r=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,r=i>t.previousIndex?"next":"prev";l&&(i+="next"===r?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i=i>o?i-Math.floor(a/2)+1:i+Math.floor(a/2)-1:i>o&&s.params.slidesPerGroup,s.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map

/*!
 * accessible-minimodal v1.1.10
 * https://github.com/imhvost/accessible-minimodal
 *
 */
!function (t) {
    var e = {};

    function o(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = { i: n, l: !1, exports: {} };
        return t[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }

    o.m = t, o.c = e, o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) o.d(n, i, function (e) {
            return t[e]
        }.bind(null, i));
        return n
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 0)
}([function (t, e, o) {
    "use strict";
    o.r(e), o.d(e, "AccessibleMinimodal", (function () {
        return n
    }));
    const n = (() => {
        const t = '\n    button:not([disabled]),\n    [href],\n    input:not([disabled]):not([type="hidden"]):not([aria-hidden]),\n    select:not([disabled]):not([aria-hidden]),\n    textarea:not([disabled]):not([aria-hidden]),\n    [tabindex]:not([tabindex="-1"]),\n    [contenteditable="true"]\n  ',
            e = {
                animationDuration: 400,
                classes: {
                    modal: "modal",
                    wrapp: "modal-wrapp",
                    body: "modal-body",
                    active: "active",
                    open: "open",
                    close: "close"
                },
                disableScroll: !0,
                focus: !0,
                hash: { open: !1, add: !1, remove: !1 },
                multiple: !1,
                on: {
                    beforeOpen: function (t) {
                    }, afterOpen: function (t) {
                    }, beforeClose: function (t) {
                    }, afterClose: function (t) {
                    }
                },
                outsideClose: !0,
                style: { use: !0, width: 400, valign: "center", animation: "from-bottom" },
                triggers: { open: "data-modal-open", close: "data-modal-close" }
            };

        class o {
            constructor(t) {
                this.modal = null, this.backFocusNode = null, this.openingNode = null, this.on = t.on, this.animated = !1, this.config = {
                    animationDuration: t.animationDuration,
                    triggers: t.triggers,
                    disableScroll: t.disableScroll,
                    focus: t.focus,
                    hash: t.hash,
                    style: t.style,
                    classes: t.classes,
                    outsideClose: t.outsideClose,
                    multiple: t.multiple
                }, this.modals = [], this.onKeydown = this.onKeydown.bind(this), this.registerTriggers(), this.addStyles(), this.init()
            }

            init() {
                if (this.config.hash.open) {
                    const t = window.location.hash ? window.location.hash.substr(1) : "";
                    t && this.openModal(t)
                }
                if (this && this.config.disableScroll) {
                    const t = document.querySelector("html");
                    this.config.disableScrollStylesDefault = {
                        html: {
                            overflowY: t.style.overflowY,
                            paddingRight: t.style.paddingRight
                        }, body: { overflowY: document.body.style.overflowY }
                    }
                }
            }

            registerTriggers() {
                document.addEventListener("click", t => {
                    if (t.target.getAttribute(this.config.triggers.open) || t.target.closest(`[${this.config.triggers.open}]`)) {
                        t.preventDefault();
                        const e = t.target.getAttribute(this.config.triggers.open) || t.target.closest(`[${this.config.triggers.open}]`).getAttribute(this.config.triggers.open);
                        this.openModal(e, t.target)
                    }
                    if (null !== t.target.getAttribute(this.config.triggers.close) || t.target.closest(`[${this.config.triggers.close}]`)) {
                        t.preventDefault();
                        const e = t.target.getAttribute(this.config.triggers.close) || t.target.closest(`[${this.config.triggers.close}]`).getAttribute(this.config.triggers.close);
                        this.modal && this.closeModal(e)
                    }
                    this.config.outsideClose && t.target.classList.contains(this.config.classes.wrapp) && (t.preventDefault(), this.modal && this.closeModal(this.modal.id))
                }, !1)
            }

            openModal(e, o, n = !1) {
                const i = this.modal ? this.config.animationDuration : 0;
                if (this.modal) {
                    const t = this.modal.id;
                    this.closeModal(this.modal.id, !1, !0), this.config.multiple && !n && this.modals.push(t)
                }
                setTimeout(() => {
                    if (this.modal = document.getElementById(e), this.modal && !this.animated) {
                        if (this.animated = !0, this.openingNode = o, this.backFocusNode || (this.backFocusNode = o), this.on.beforeOpen(this), this.modal.classList.add(this.config.classes.open), this.config.hash.add && window.history.replaceState("", document.title, "#" + e), this.config.disableScroll) {
                            const t = this.getScrollbarWidth(), e = document.querySelector("html");
                            e.style.overflowY = "hidden", e.style.paddingRight = t + "px", document.body.style.overflowY = "hidden"
                        }
                        this.modal.classList.add(this.config.classes.active), this.modal.setAttribute("aria-hidden", !1), setTimeout(() => {
                            if (this.animated = !1, document.addEventListener("keydown", this.onKeydown), this.config.focus) {
                                const e = this.modal.querySelectorAll(t);
                                if (!e) return;
                                e[0].focus()
                            }
                            this.on.afterOpen(this), this.modal.classList.remove(this.config.classes.open)
                        }, this.config.animationDuration)
                    }
                }, i)
            }

            closeModal(t, e = !0, o = !1) {
                const n = t ? document.getElementById(t) : this.modal;
                if (n && !this.animated && (this.animated = !0, this.on.beforeClose(this), n.classList.add(this.config.classes.close), document.removeEventListener("keydown", this.onKeydown), n.classList.remove(this.config.classes.active), n.setAttribute("aria-hidden", !0), this.config.hash.remove && window.history.replaceState("", document.title, window.location.pathname + window.location.search), setTimeout(() => {
                    if (this.animated = !1, this.config.disableScroll) {
                        const t = document.querySelector("html"), e = this.config.disableScrollStylesDefault;
                        t.style.overflowY = e.html.overflowY, t.style.paddingRight = e.html.paddingRight, document.body.style.overflowY = e.body.overflowY
                    }
                    this.on.afterClose(this), n.classList.remove(this.config.classes.close), this.modal = null, e && this.backFocusNode && this.config.focus && (this.backFocusNode.focus(), this.backFocusNode = null)
                }, this.config.animationDuration), this.config.multiple && !o)) {
                    const t = this.modals.pop();
                    this.openModal(t, !1, !0)
                }
                $('.header, .p-about, .fixedMenuWrap').css('filter','')
            }

            getScrollbarWidth() {
                return window.screen.width - document.documentElement.clientWidth == 0 ? 0 : window.innerWidth - document.documentElement.clientWidth
            }

            onKeydown(t) {
                const e = t.keyCode;
                27 === e && this.closeModal(), 9 === e && this.changeFocus(t)
            }

            changeFocus(e) {
                if (!this.config.focus) return;
                const o = this.modal.querySelectorAll(t);
                if (!o) return;
                const n = o[0], i = o[o.length - 1];
                e.shiftKey ? e.target === n && (i.focus(), e.preventDefault()) : e.target === i && (n.focus(), e.preventDefault())
            }

            addStyles() {
                if (!this.config.style.use) return;
                const t = this.config.classes.modal, e = this.config.classes.wrapp, o = this.config.classes.body,
                    n = this.config.classes.active, i = this.config.triggers.close, s = function (t) {
                        switch (t) {
                            case "top":
                                return "0 auto auto";
                            case "bottom":
                                return "auto auto 0";
                            default:
                                return "auto auto"
                        }
                    }(this.config.style.valign), a = function (t) {
                        switch (t) {
                            case "from-top":
                                return "translateY(-20px)";
                            case "from-left":
                                return "translateX(-20px)";
                            case "from-right":
                                return "translateX(20px)";
                            case "zoom-in":
                                return "scale(.8)";
                            case "zoom-out":
                                return "scale(1.2)";
                            case "fade":
                                return "none";
                            default:
                                return "translateY(20px)"
                        }
                    }(this.config.style.animation), r = this.config.animationDuration,
                    l = `\n.${t} {\nposition: fixed;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 666666;\nopacity: 0;\nvisibility: hidden;\npointer-events: none;\ntransition: opacity ${r}ms, visibility ${r}ms;\n}\n.${t}.${n} {\nopacity: 1;\nvisibility: visible;\npointer-events: auto;\n}\n.${t}.${n} .${o} {\ntransform: none;\n}\n.${e} {\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\nbackground-color: rgba(0, 0, 0, 0.7);\npadding: 40px 20px;\noverflow-y: scroll;\n}\n.${o} {\nbackground-color: #fff;\nflex: none;\nmin-height: 1px;\nborder-radius: 2px;\nwidth: ${this.config.style.width}px;\nmax-width: 100%;\nmargin: ${s};\npadding: 20px;\ntransition: ${r}ms;\ntransform: ${a};\nposition: relative;\n}\n.${o} [${i}] {\nposition: absolute;\nright: 10px;\ntop: 10px;\nwidth: 16px;\nheight: 16px;\nborder: 0;\nbackground: none;\ncursor: pointer;\n}\n.${o} [${i}]:before,\n.${o} [${i}]:after {\ncontent: '';\nposition: absolute;\ntop: 50%;\nleft: 0;\nright: 0;\nmargin-top: -1px;\nbackground-color: currentColor;\nheight: 2px;\n}\n.${o} [${i}]:before {\ntransform: rotate(45deg);\n}\n.${o} [${i}]:after {\ntransform: rotate(-45deg);\n}      \n`;
                document.head.insertAdjacentHTML("beforeend", `<style>${l}</style>`), document.querySelectorAll("." + this.config.classes.modal).forEach(t => {
                    t.style.display = "block"
                })
            }
        }

        return {
            init: t => {
                ["style", "on", "triggers", "hash", "classes"].forEach(o => {
                    t && t[o] && (t[o] = Object.assign({}, e[o], t[o]))
                });
                const n = Object.assign({}, e, t);
                return new o(n)
            }
        }
    })();
    window.AccessibleMinimodal = n
}]);

/*! lazysizes - v5.3.2 */

!function (e) {
    var t = function (u, D, f) {
        "use strict";
        var k, H;
        if (function () {
            var e;
            var t = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                fastLoadedClass: "ls-is-cached",
                iframeLoadMode: 0,
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: true,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: true,
                ricTimeout: 0,
                throttleDelay: 125
            };
            H = u.lazySizesConfig || u.lazysizesConfig || {};
            for (e in t) {
                if (!(e in H)) {
                    H[e] = t[e]
                }
            }
        }(), !D || !D.getElementsByClassName) {
            return {
                init: function () {
                }, cfg: H, noSupport: true
            }
        }
        var O = D.documentElement, i = u.HTMLPictureElement, P = "addEventListener", $ = "getAttribute",
            q = u[P].bind(u), I = u.setTimeout, U = u.requestAnimationFrame || I, o = u.requestIdleCallback,
            j = /^picture$/i, r = ["load", "error", "lazyincluded", "_lazyloaded"], a = {}, G = Array.prototype.forEach,
            J = function (e, t) {
                if (!a[t]) {
                    a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")
                }
                return a[t].test(e[$]("class") || "") && a[t]
            }, K = function (e, t) {
                if (!J(e, t)) {
                    e.setAttribute("class", (e[$]("class") || "").trim() + " " + t)
                }
            }, Q = function (e, t) {
                var a;
                if (a = J(e, t)) {
                    e.setAttribute("class", (e[$]("class") || "").replace(a, " "))
                }
            }, V = function (t, a, e) {
                var i = e ? P : "removeEventListener";
                if (e) {
                    V(t, a)
                }
                r.forEach(function (e) {
                    t[i](e, a)
                })
            }, X = function (e, t, a, i, r) {
                var n = D.createEvent("Event");
                if (!a) {
                    a = {}
                }
                a.instance = k;
                n.initEvent(t, !i, !r);
                n.detail = a;
                e.dispatchEvent(n);
                return n
            }, Y = function (e, t) {
                var a;
                if (!i && (a = u.picturefill || H.pf)) {
                    if (t && t.src && !e[$]("srcset")) {
                        e.setAttribute("srcset", t.src)
                    }
                    a({ reevaluate: true, elements: [e] })
                } else if (t && t.src) {
                    e.src = t.src
                }
            }, Z = function (e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }, s = function (e, t, a) {
                a = a || e.offsetWidth;
                while (a < H.minSize && t && !e._lazysizesWidth) {
                    a = t.offsetWidth;
                    t = t.parentNode
                }
                return a
            }, ee = function () {
                var a, i;
                var t = [];
                var r = [];
                var n = t;
                var s = function () {
                    var e = n;
                    n = t.length ? r : t;
                    a = true;
                    i = false;
                    while (e.length) {
                        e.shift()()
                    }
                    a = false
                };
                var e = function (e, t) {
                    if (a && !t) {
                        e.apply(this, arguments)
                    } else {
                        n.push(e);
                        if (!i) {
                            i = true;
                            (D.hidden ? I : U)(s)
                        }
                    }
                };
                e._lsFlush = s;
                return e
            }(), te = function (a, e) {
                return e ? function () {
                    ee(a)
                } : function () {
                    var e = this;
                    var t = arguments;
                    ee(function () {
                        a.apply(e, t)
                    })
                }
            }, ae = function (e) {
                var a;
                var i = 0;
                var r = H.throttleDelay;
                var n = H.ricTimeout;
                var t = function () {
                    a = false;
                    i = f.now();
                    e()
                };
                var s = o && n > 49 ? function () {
                    o(t, { timeout: n });
                    if (n !== H.ricTimeout) {
                        n = H.ricTimeout
                    }
                } : te(function () {
                    I(t)
                }, true);
                return function (e) {
                    var t;
                    if (e = e === true) {
                        n = 33
                    }
                    if (a) {
                        return
                    }
                    a = true;
                    t = r - (f.now() - i);
                    if (t < 0) {
                        t = 0
                    }
                    if (e || t < 9) {
                        s()
                    } else {
                        I(s, t)
                    }
                }
            }, ie = function (e) {
                var t, a;
                var i = 99;
                var r = function () {
                    t = null;
                    e()
                };
                var n = function () {
                    var e = f.now() - a;
                    if (e < i) {
                        I(n, i - e)
                    } else {
                        (o || r)(r)
                    }
                };
                return function () {
                    a = f.now();
                    if (!t) {
                        t = I(n, i)
                    }
                }
            }, e = function () {
                var v, m, c, h, e;
                var y, z, g, p, C, b, A;
                var n = /^img$/i;
                var d = /^iframe$/i;
                var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
                var _ = 0;
                var w = 0;
                var M = 0;
                var N = -1;
                var L = function (e) {
                    M--;
                    if (!e || M < 0 || !e.target) {
                        M = 0
                    }
                };
                var x = function (e) {
                    if (A == null) {
                        A = Z(D.body, "visibility") == "hidden"
                    }
                    return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden")
                };
                var W = function (e, t) {
                    var a;
                    var i = e;
                    var r = x(e);
                    g -= t;
                    b += t;
                    p -= t;
                    C += t;
                    while (r && (i = i.offsetParent) && i != D.body && i != O) {
                        r = (Z(i, "opacity") || 1) > 0;
                        if (r && Z(i, "overflow") != "visible") {
                            a = i.getBoundingClientRect();
                            r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1
                        }
                    }
                    return r
                };
                var t = function () {
                    var e, t, a, i, r, n, s, o, l, u, f, c;
                    var d = k.elements;
                    if ((h = H.loadMode) && M < 8 && (e = d.length)) {
                        t = 0;
                        N++;
                        for (; t < e; t++) {
                            if (!d[t] || d[t]._lazyRace) {
                                continue
                            }
                            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
                                R(d[t]);
                                continue
                            }
                            if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
                                n = w
                            }
                            if (!u) {
                                u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
                                k._defEx = u;
                                f = u * H.expFactor;
                                c = H.hFac;
                                A = null;
                                if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                                    w = f;
                                    N = 0
                                } else if (h > 1 && N > 1 && M < 6) {
                                    w = u
                                } else {
                                    w = _
                                }
                            }
                            if (l !== n) {
                                y = innerWidth + n * c;
                                z = innerHeight + n;
                                s = n * -1;
                                l = n
                            }
                            a = d[t].getBoundingClientRect();
                            if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) {
                                R(d[t]);
                                r = true;
                                if (M > 9) {
                                    break
                                }
                            } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
                                i = v[0] || d[t]
                            }
                        }
                        if (i && !r) {
                            R(i)
                        }
                    }
                };
                var a = ae(t);
                var S = function (e) {
                    var t = e.target;
                    if (t._lazyCache) {
                        delete t._lazyCache;
                        return
                    }
                    L(e);
                    K(t, H.loadedClass);
                    Q(t, H.loadingClass);
                    V(t, B);
                    X(t, "lazyloaded")
                };
                var i = te(S);
                var B = function (e) {
                    i({ target: e.target })
                };
                var T = function (e, t) {
                    var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;
                    if (a == 0) {
                        e.contentWindow.location.replace(t)
                    } else if (a == 1) {
                        e.src = t
                    }
                };
                var F = function (e) {
                    var t;
                    var a = e[$](H.srcsetAttr);
                    if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
                        e.setAttribute("media", t)
                    }
                    if (a) {
                        e.setAttribute("srcset", a)
                    }
                };
                var s = te(function (t, e, a, i, r) {
                    var n, s, o, l, u, f;
                    if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
                        if (i) {
                            if (a) {
                                K(t, H.autosizesClass)
                            } else {
                                t.setAttribute("sizes", i)
                            }
                        }
                        s = t[$](H.srcsetAttr);
                        n = t[$](H.srcAttr);
                        if (r) {
                            o = t.parentNode;
                            l = o && j.test(o.nodeName || "")
                        }
                        f = e.firesLoad || "src" in t && (s || n || l);
                        u = { target: t };
                        K(t, H.loadingClass);
                        if (f) {
                            clearTimeout(c);
                            c = I(L, 2500);
                            V(t, B, true)
                        }
                        if (l) {
                            G.call(o.getElementsByTagName("source"), F)
                        }
                        if (s) {
                            t.setAttribute("srcset", s)
                        } else if (n && !l) {
                            if (d.test(t.nodeName)) {
                                T(t, n)
                            } else {
                                t.src = n
                            }
                        }
                        if (r && (s || l)) {
                            Y(t, { src: n })
                        }
                    }
                    if (t._lazyRace) {
                        delete t._lazyRace
                    }
                    Q(t, H.lazyClass);
                    ee(function () {
                        var e = t.complete && t.naturalWidth > 1;
                        if (!f || e) {
                            if (e) {
                                K(t, H.fastLoadedClass)
                            }
                            S(u);
                            t._lazyCache = true;
                            I(function () {
                                if ("_lazyCache" in t) {
                                    delete t._lazyCache
                                }
                            }, 9)
                        }
                        if (t.loading == "lazy") {
                            M--
                        }
                    }, true)
                });
                var R = function (e) {
                    if (e._lazyRace) {
                        return
                    }
                    var t;
                    var a = n.test(e.nodeName);
                    var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
                    var r = i == "auto";
                    if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
                        return
                    }
                    t = X(e, "lazyunveilread").detail;
                    if (r) {
                        re.updateElem(e, true, e.offsetWidth)
                    }
                    e._lazyRace = true;
                    M++;
                    s(e, t, r, i, a)
                };
                var r = ie(function () {
                    H.loadMode = 3;
                    a()
                });
                var o = function () {
                    if (H.loadMode == 3) {
                        H.loadMode = 2
                    }
                    r()
                };
                var l = function () {
                    if (m) {
                        return
                    }
                    if (f.now() - e < 999) {
                        I(l, 999);
                        return
                    }
                    m = true;
                    H.loadMode = 3;
                    a();
                    q("scroll", o, true)
                };
                return {
                    _: function () {
                        e = f.now();
                        k.elements = D.getElementsByClassName(H.lazyClass);
                        v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
                        q("scroll", a, true);
                        q("resize", a, true);
                        q("pageshow", function (e) {
                            if (e.persisted) {
                                var t = D.querySelectorAll("." + H.loadingClass);
                                if (t.length && t.forEach) {
                                    U(function () {
                                        t.forEach(function (e) {
                                            if (e.complete) {
                                                R(e)
                                            }
                                        })
                                    })
                                }
                            }
                        });
                        if (u.MutationObserver) {
                            new MutationObserver(a).observe(O, { childList: true, subtree: true, attributes: true })
                        } else {
                            O[P]("DOMNodeInserted", a, true);
                            O[P]("DOMAttrModified", a, true);
                            setInterval(a, 999)
                        }
                        q("hashchange", a, true);
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
                            D[P](e, a, true)
                        });
                        if (/d$|^c/.test(D.readyState)) {
                            l()
                        } else {
                            q("load", l);
                            D[P]("DOMContentLoaded", a);
                            I(l, 2e4)
                        }
                        if (k.elements.length) {
                            t();
                            ee._lsFlush()
                        } else {
                            a()
                        }
                    }, checkElems: a, unveil: R, _aLSL: o
                }
            }(), re = function () {
                var a;
                var n = te(function (e, t, a, i) {
                    var r, n, s;
                    e._lazysizesWidth = i;
                    i += "px";
                    e.setAttribute("sizes", i);
                    if (j.test(t.nodeName || "")) {
                        r = t.getElementsByTagName("source");
                        for (n = 0, s = r.length; n < s; n++) {
                            r[n].setAttribute("sizes", i)
                        }
                    }
                    if (!a.detail.dataAttr) {
                        Y(e, a.detail)
                    }
                });
                var i = function (e, t, a) {
                    var i;
                    var r = e.parentNode;
                    if (r) {
                        a = s(e, r, a);
                        i = X(e, "lazybeforesizes", { width: a, dataAttr: !!t });
                        if (!i.defaultPrevented) {
                            a = i.detail.width;
                            if (a && a !== e._lazysizesWidth) {
                                n(e, r, i, a)
                            }
                        }
                    }
                };
                var e = function () {
                    var e;
                    var t = a.length;
                    if (t) {
                        e = 0;
                        for (; e < t; e++) {
                            i(a[e])
                        }
                    }
                };
                var t = ie(e);
                return {
                    _: function () {
                        a = D.getElementsByClassName(H.autosizesClass);
                        q("resize", t)
                    }, checkElems: t, updateElem: i
                }
            }(), t = function () {
                if (!t.i && D.getElementsByClassName) {
                    t.i = true;
                    re._();
                    e._()
                }
            };
        return I(function () {
            H.init && t()
        }), k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee }
    }(e, e.document, Date);
    e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});

/* https://github.com/WeCodePixels/theia-sticky-sidebar */
!function () {
    var e = function (t, i) {
        function s() {
            this.q = [], this.add = function (e) {
                this.q.push(e)
            };
            var e, t;
            this.call = function () {
                for (e = 0, t = this.q.length; e < t; e++) this.q[e].call()
            }
        }

        function o(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }

        function n(e, t) {
            if (e.resizedAttached) {
                if (e.resizedAttached) return void e.resizedAttached.add(t)
            } else e.resizedAttached = new s, e.resizedAttached.add(t);
            e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                n = "position: absolute; left: 0; top: 0; transition: 0s;";
            e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + n + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + n + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
                fixed: 1,
                absolute: 1
            }[o(e, "position")] || (e.style.position = "relative");
            var d, r, l = e.resizeSensor.childNodes[0], c = l.childNodes[0], h = e.resizeSensor.childNodes[1],
                a = (h.childNodes[0], function () {
                    c.style.width = l.offsetWidth + 10 + "px", c.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, h.scrollLeft = h.scrollWidth, h.scrollTop = h.scrollHeight, d = e.offsetWidth, r = e.offsetHeight
                });
            a();
            var f = function () {
                e.resizedAttached && e.resizedAttached.call()
            }, u = function (e, t, i) {
                e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
            }, p = function () {
                e.offsetWidth == d && e.offsetHeight == r || f(), a()
            };
            u(l, "scroll", p), u(h, "scroll", p)
        }

        var d = Object.prototype.toString.call(t),
            r = "[object Array]" === d || "[object NodeList]" === d || "[object HTMLCollection]" === d || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
        if (r) for (var l = 0, c = t.length; l < c; l++) n(t[l], i); else n(t, i);
        this.detach = function () {
            if (r) for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]); else e.detach(t)
        }
    };
    e.detach = function (e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
    }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : window.ResizeSensor = e
}();
!function (i) {
    i.fn.theiaStickySidebar = function (t) {
        function e(t, e) {
            var a = o(t, e);
            a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)))
        }

        function o(t, e) {
            return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0)
        }

        function a(t, e) {
            t.initialized = !0;
            var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
            0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
                function e() {
                    a.fixedScrollTop = 0, a.sidebar.css({ "min-height": "1px" }), a.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function o(t) {
                    var e = t.height();
                    return t.children().each(function () {
                        e = Math.max(e, i(this).height())
                    }), e
                }

                var a = {};
                if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
                    position: a.options.defaultPosition,
                    overflow: "visible",
                    "-webkit-box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "box-sizing": "border-box"
                }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length) {
                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    a.sidebar.find("script").filter(function (i, t) {
                        return 0 === t.type.length || t.type.match(s)
                    }).remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar)
                }
                a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
                var r = a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight();
                a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function (a) {
                    if (a.stickySidebar.is(":visible")) {
                        if (i("body").width() < a.options.minWidth) return void e();
                        if (a.options.disableOnResponsiveLayouts) {
                            var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
                            if (s + 50 > a.container.width()) return void e()
                        }
                        var r = i(document).scrollTop(), d = "static";
                        if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
                            var c, p = a.paddingTop + t.additionalMarginTop,
                                b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                                l = a.sidebar.offset().top, f = a.sidebar.offset().top + o(a.container),
                                h = 0 + t.additionalMarginTop,
                                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
                            c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
                            var u = l - r + a.paddingTop, S = f - r - a.paddingBottom - a.marginBottom,
                                y = a.stickySidebar.offset().top - r, m = a.previousScrollTop - r;
                            "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight());
                            var k = a.container.height() == a.stickySidebar.outerHeight();
                            d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        if ("fixed" == d) {
                            var v = i(document).scrollLeft();
                            a.stickySidebar.css({
                                position: "fixed",
                                width: n(a.stickySidebar) + "px",
                                transform: "translateY(" + y + "px)",
                                left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == d) {
                            var x = {};
                            "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x)
                        } else "static" == d && e();
                        "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({ "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom }), a.previousScrollTop = r
                    }
                }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a)), i(window).on("resize." + a.options.namespace, function (i) {
                    return function () {
                        i.stickySidebar.css({ position: "static" }), i.onScroll(i)
                    }
                }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a))
            })
        }

        function n(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {
            }
            return "undefined" == typeof t && (t = i.width()), t
        }

        var s = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this
    }
}(jQuery);

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function () {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, o = {}, n = window.Waypoint, r = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint, p = l && h, u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function (t) {
        return o[t.waypointContextKey]
    }, window.onload = function () {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }

    var o = { vertical: {}, horizontal: {} }, n = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] }
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i], n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o]
    }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
                var n = t.extend({}, o, { element: this });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();

/* Scrollspy */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var s = t.fn.jquery.split(" ")[0].split(".");
    if (s[0] < 2 && s[1] < 9 || 1 == s[0] && 9 == s[1] && s[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (t) {
    "use strict";

    function s(e, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(e).is(document.body) ? window : e), this.options = t.extend({}, s.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof e && e;
            o || i.data("bs.scrollspy", o = new s(this, r)), "string" == typeof e && o[e]()
        })
    }

    s.VERSION = "3.3.7", s.DEFAULTS = { offset: 10 }, s.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, s.prototype.refresh = function () {
        var s = this, e = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var s = t(this), o = s.data("target") || s.attr("href"), r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[e]().top + i, o]] || null
        }).sort(function (t, s) {
            return t[0] - s[0]
        }).each(function () {
            s.offsets.push(this[0]), s.targets.push(this[1])
        })
    }, s.prototype.process = function () {
        var t, s = this.$scrollElement.scrollTop() + this.options.offset, e = this.getScrollHeight(),
            i = this.options.offset + e - this.$scrollElement.height(), o = this.offsets, r = this.targets,
            l = this.activeTarget;
        if (this.scrollHeight != e && this.refresh(), s >= i) return l != (t = r[r.length - 1]) && this.activate(t);
        if (l && s < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) l != r[t] && s >= o[t] && (void 0 === o[t + 1] || s < o[t + 1]) && this.activate(r[t])
    }, s.prototype.activate = function (s) {
        this.activeTarget = s, this.clear();
        var e = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"]',
            i = t(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, s.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = e, t.fn.scrollspy.Constructor = s, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var s = t(this);
            e.call(s, s.data())
        })
    })
}(jQuery);

/*FANCYBOX*/
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
    "use strict";

    window.console = window.console || {
        info: function (stuff) {}
    };

    // If there's no jQuery, fancyBox can't work
    // =========================================

    if (!$) {
        return;
    }

    // Check if fancyBox is already initialized
    // ========================================

    if ($.fn.fancybox) {
        console.info("fancyBox already initialized");

        return;
    }

    // Private default settings
    // ========================

    var defaults = {
        // Close existing modals
        // Set this to false if you do not need to stack multiple instances
        closeExisting: false,

        // Enable infinite gallery navigation
        loop: false,

        // Horizontal space between slides
        gutter: 50,

        // Enable keyboard navigation
        keyboard: true,

        // Should allow caption to overlap the content
        preventCaptionOverlap: true,

        // Should display navigation arrows at the screen edges
        arrows: true,

        // Should display counter at the top left corner
        infobar: true,

        // Should display close button (using `btnTpl.smallBtn` template) over the content
        // Can be true, false, "auto"
        // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
        smallBtn: "auto",

        // Should display toolbar (buttons at the top)
        // Can be true, false, "auto"
        // If "auto" - will be automatically hidden if "smallBtn" is enabled
        toolbar: "auto",

        // What buttons should appear in the top right corner.
        // Buttons will be created using templates from `btnTpl` option
        // and they will be placed into toolbar (class="fancybox-toolbar"` element)
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close"
        ],

        // Detect "idle" time in seconds
        idleTime: 3,

        // Disable right-click and use simple image protection for images
        protect: false,

        // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
        modal: false,

        image: {
            // Wait for images to load before displaying
            //   true  - wait for image to load and then display;
            //   false - display thumbnail and load the full-sized image over top,
            //           requires predefined image dimensions (`data-width` and `data-height` attributes)
            preload: false
        },

        ajax: {
            // Object containing settings for ajax request
            settings: {
                // This helps to indicate that request comes from the modal
                // Feel free to change naming
                data: {
                    fancybox: true
                }
            }
        },

        iframe: {
            // Iframe template
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

            // Preload iframe before displaying it
            // This allows to calculate iframe content width and height
            // (note: Due to "Same Origin Policy", you can't get cross domain data).
            preload: true,

            // Custom CSS styling for iframe wrapping element
            // You can use this to set custom iframe dimensions
            css: {},

            // Iframe tag attributes
            attr: {
                scrolling: "auto"
            }
        },

        // For HTML5 video only
        video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
                '<source src="{{src}}" type="{{format}}" />' +
                'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
                "</video>",
            format: "", // custom video format
            autoStart: true
        },

        // Default content type if cannot be detected automatically
        defaultType: "image",

        // Open/close animation type
        // Possible values:
        //   false            - disable
        //   "zoom"           - zoom images from/to thumbnail
        //   "fade"
        //   "zoom-in-out"
        //
        animationEffect: "zoom",

        // Duration in ms for open/close animation
        animationDuration: 366,

        // Should image change opacity while zooming
        // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
        zoomOpacity: "auto",

        // Transition effect between slides
        //
        // Possible values:
        //   false            - disable
        //   "fade'
        //   "slide'
        //   "circular'
        //   "tube'
        //   "zoom-in-out'
        //   "rotate'
        //
        transitionEffect: "fade",

        // Duration in ms for transition animation
        transitionDuration: 366,

        // Custom CSS class for slide element
        slideClass: "",

        // Custom CSS class for layout
        baseClass: "",

        // Base template for layout
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg"></div>' +
            '<div class="fancybox-inner">' +
            '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
            '<div class="fancybox-toolbar">{{buttons}}</div>' +
            '<div class="fancybox-navigation">{{arrows}}</div>' +
            '<div class="fancybox-stage"></div>' +
            '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
            "</div>" +
            "</div>",

        // Loading indicator template
        spinnerTpl: '<div class="fancybox-loading"></div>',

        // Error message template
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

        btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
                "</a>",

            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
                "</button>",

            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
                "</button>",

            // Arrows
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
                "</button>",

            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
                "</button>",

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
                "</button>"
        },

        // Container is injected into this element
        parentEl: "body",

        // Hide browser vertical scrollbars; use at your own risk
        hideScrollbar: true,

        // Focus handling
        // ==============

        // Try to focus on the first focusable element after opening
        autoFocus: true,

        // Put focus back to active element after closing
        backFocus: true,

        // Do not let user to focus on element outside modal content
        trapFocus: true,

        // Module specific options
        // =======================

        fullScreen: {
            autoStart: false
        },

        // Set `touch: false` to disable panning/swiping
        touch: {
            vertical: true, // Allow to drag content vertically
            momentum: true // Continue movement after releasing mouse/touch when panning
        },

        // Hash value when initializing manually,
        // set `false` to disable hash change
        hash: null,

        // Customize or add new media types
        // Example:
        /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
        media: {},

        slideShow: {
            autoStart: false,
            speed: 3000
        },

        thumbs: {
            autoStart: false, // Display thumbnails on opening
            hideOnClose: true, // Hide thumbnail grid when closing animation starts
            parentEl: ".fancybox-container", // Container is injected into this element
            axis: "y" // Vertical (y) or horizontal (x) scrolling
        },

        // Use mousewheel to navigate gallery
        // If 'auto' - enabled for images only
        wheel: "auto",

        // Callbacks
        //==========

        // See Documentation/API/Events for more information
        // Example:
        /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

        onInit: $.noop, // When instance has been initialized

        beforeLoad: $.noop, // Before the content of a slide is being loaded
        afterLoad: $.noop, // When the content of a slide is done loading

        beforeShow: $.noop, // Before open animation starts
        afterShow: $.noop, // When content is done loading and animating

        beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
        afterClose: $.noop, // After instance has been closed

        onActivate: $.noop, // When instance is brought to front
        onDeactivate: $.noop, // When other instance has been activated

        // Interaction
        // ===========

        // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
        // each option can be string or method that returns value.
        //
        // Possible values:
        //   "close"           - close instance
        //   "next"            - move to next gallery item
        //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
        //   "toggleControls"  - show/hide controls
        //   "zoom"            - zoom image (if loaded)
        //   false             - do nothing

        // Clicked on the content
        clickContent: function (current, event) {
            return current.type === "image" ? "zoom" : false;
        },

        // Clicked on the slide
        clickSlide: "close",

        // Clicked on the background (backdrop) element;
        // if you have not changed the layout, then most likely you need to use `clickSlide` option
        clickOutside: "close",

        // Same as previous two, but for double click
        dblclickContent: false,
        dblclickSlide: false,
        dblclickOutside: false,

        // Custom options when mobile device is detected
        // =============================================

        mobile: {
            preventCaptionOverlap: false,
            idleTime: false,
            clickContent: function (current, event) {
                return current.type === "image" ? "toggleControls" : false;
            },
            clickSlide: function (current, event) {
                return current.type === "image" ? "toggleControls" : "close";
            },
            dblclickContent: function (current, event) {
                return current.type === "image" ? "zoom" : false;
            },
            dblclickSlide: function (current, event) {
                return current.type === "image" ? "zoom" : false;
            }
        },

        // Internationalization
        // ====================

        lang: "en",
        i18n: {
            en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom"
            },
            de: {
                CLOSE: "Schlie&szlig;en",
                NEXT: "Weiter",
                PREV: "Zur&uuml;ck",
                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Vergr&ouml;&szlig;ern"
            }
        }
    };

    // Few useful variables and methods
    // ================================

    var $W = $(window);
    var $D = $(document);

    var called = 0;

    // Check if an object is a jQuery object and not a native JavaScript object
    // ========================================================================
    var isQuery = function (obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    };

    // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
    // ===============================================================================
    var requestAFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // if all else fails, use setTimeout
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    var cancelAFrame = (function () {
        return (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            }
        );
    })();

    // Detect the supported transition-end event property name
    // =======================================================
    var transitionEnd = (function () {
        var el = document.createElement("fakeelement"),
            t;

        var transitions = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }

        return "transitionend";
    })();

    // Force redraw on an element.
    // This helps in cases where the browser doesn't redraw an updated element properly
    // ================================================================================
    var forceRedraw = function ($el) {
        return $el && $el.length && $el[0].offsetHeight;
    };

    // Exclude array (`buttons`) options from deep merging
    // ===================================================
    var mergeOpts = function (opts1, opts2) {
        var rez = $.extend(true, {}, opts1, opts2);

        $.each(opts2, function (key, value) {
            if ($.isArray(value)) {
                rez[key] = value;
            }
        });

        return rez;
    };

    // How much of an element is visible in viewport
    // =============================================

    var inViewport = function (elem) {
        var elemCenter, rez;

        if (!elem || elem.ownerDocument !== document) {
            return false;
        }

        $(".fancybox-container").css("pointer-events", "none");

        elemCenter = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };

        rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

        $(".fancybox-container").css("pointer-events", "");

        return rez;
    };

    // Class definition
    // ================

    var FancyBox = function (content, opts, index) {
        var self = this;

        self.opts = mergeOpts({
            index: index
        }, $.fancybox.defaults);

        if ($.isPlainObject(opts)) {
            self.opts = mergeOpts(self.opts, opts);
        }

        if ($.fancybox.isMobile) {
            self.opts = mergeOpts(self.opts, self.opts.mobile);
        }

        self.id = self.opts.id || ++called;

        self.currIndex = parseInt(self.opts.index, 10) || 0;
        self.prevIndex = null;

        self.prevPos = null;
        self.currPos = 0;

        self.firstRun = true;

        // All group items
        self.group = [];

        // Existing slides (for current, next and previous gallery items)
        self.slides = {};

        // Create group elements
        self.addContent(content);

        if (!self.group.length) {
            return;
        }

        self.init();
    };

    $.extend(FancyBox.prototype, {
        // Create DOM structure
        // ====================

        init: function () {
            var self = this,
                firstItem = self.group[self.currIndex],
                firstItemOpts = firstItem.opts,
                $container,
                buttonStr;

            if (firstItemOpts.closeExisting) {
                $.fancybox.close(true);
            }

            // Hide scrollbars
            // ===============

            $("body").addClass("fancybox-active");

            if (
                !$.fancybox.getInstance() &&
                firstItemOpts.hideScrollbar !== false &&
                !$.fancybox.isMobile &&
                document.body.scrollHeight > window.innerHeight
            ) {
                $("head").append(
                    '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                    (window.innerWidth - document.documentElement.clientWidth) +
                    "px;}</style>"
                );

                $("body").addClass("compensate-for-scrollbar");
            }

            // Build html markup and set references
            // ====================================

            // Build html code for buttons and insert into main template
            buttonStr = "";

            $.each(firstItemOpts.buttons, function (index, value) {
                buttonStr += firstItemOpts.btnTpl[value] || "";
            });

            // Create markup from base template, it will be initially hidden to
            // avoid unnecessary work like painting while initializing is not complete
            $container = $(
                self.translate(
                    self,
                    firstItemOpts.baseTpl
                        .replace("{{buttons}}", buttonStr)
                        .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
                )
            )
                .attr("id", "fancybox-container-" + self.id)
                .addClass(firstItemOpts.baseClass)
                .data("FancyBox", self)
                .appendTo(firstItemOpts.parentEl);

            // Create object holding references to jQuery wrapped nodes
            self.$refs = {
                container: $container
            };

            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
                self.$refs[item] = $container.find(".fancybox-" + item);
            });

            self.trigger("onInit");

            // Enable events, deactive previous instances
            self.activate();

            // Build slides, load and reveal content
            self.jumpTo(self.currIndex);
        },

        // Simple i18n support - replaces object keys found in template
        // with corresponding values
        // ============================================================

        translate: function (obj, str) {
            var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

            return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
                return arr[n] === undefined ? match : arr[n];
            });
        },

        // Populate current group with fresh content
        // Check if each object has valid type and content
        // ===============================================

        addContent: function (content) {
            var self = this,
                items = $.makeArray(content),
                thumbs;

            $.each(items, function (i, item) {
                var obj = {},
                    opts = {},
                    $item,
                    type,
                    found,
                    src,
                    srcParts;

                // Step 1 - Make sure we have an object
                // ====================================

                if ($.isPlainObject(item)) {
                    // We probably have manual usage here, something like
                    // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

                    obj = item;
                    opts = item.opts || item;
                } else if ($.type(item) === "object" && $(item).length) {
                    // Here we probably have jQuery collection returned by some selector
                    $item = $(item);

                    // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
                    opts = $item.data() || {};
                    opts = $.extend(true, {}, opts, opts.options);

                    // Here we store clicked element
                    opts.$orig = $item;

                    obj.src = self.opts.src || opts.src || $item.attr("href");

                    // Assume that simple syntax is used, for example:
                    //   `$.fancybox.open( $("#test"), {} );`
                    if (!obj.type && !obj.src) {
                        obj.type = "inline";
                        obj.src = item;
                    }
                } else {
                    // Assume we have a simple html code, for example:
                    //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
                    obj = {
                        type: "html",
                        src: item + ""
                    };
                }

                // Each gallery object has full collection of options
                obj.opts = $.extend(true, {}, self.opts, opts);

                // Do not merge buttons array
                if ($.isArray(opts.buttons)) {
                    obj.opts.buttons = opts.buttons;
                }

                if ($.fancybox.isMobile && obj.opts.mobile) {
                    obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
                }

                // Step 2 - Make sure we have content type, if not - try to guess
                // ==============================================================

                type = obj.type || obj.opts.type;
                src = obj.src || "";

                if (!type && src) {
                    if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
                        type = "video";

                        if (!obj.opts.video.format) {
                            obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
                        }
                    } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
                        type = "image";
                    } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
                        type = "iframe";
                        obj = $.extend(true, obj, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: false
                                }
                            }
                        });
                    } else if (src.charAt(0) === "#") {
                        type = "inline";
                    }
                }

                if (type) {
                    obj.type = type;
                } else {
                    self.trigger("objectNeedsType", obj);
                }

                if (!obj.contentType) {
                    obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
                }

                // Step 3 - Some adjustments
                // =========================

                obj.index = self.group.length;

                if (obj.opts.smallBtn == "auto") {
                    obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
                }

                if (obj.opts.toolbar === "auto") {
                    obj.opts.toolbar = !obj.opts.smallBtn;
                }

                // Find thumbnail image, check if exists and if is in the viewport
                obj.$thumb = obj.opts.$thumb || null;

                if (obj.opts.$trigger && obj.index === self.opts.index) {
                    obj.$thumb = obj.opts.$trigger.find("img:first");

                    if (obj.$thumb.length) {
                        obj.opts.$orig = obj.opts.$trigger;
                    }
                }

                if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
                    obj.$thumb = obj.opts.$orig.find("img:first");
                }

                if (obj.$thumb && !obj.$thumb.length) {
                    obj.$thumb = null;
                }

                obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

                // "caption" is a "special" option, it can be used to customize caption per gallery item
                if ($.type(obj.opts.caption) === "function") {
                    obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
                }

                if ($.type(self.opts.caption) === "function") {
                    obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
                }

                // Make sure we have caption as a string or jQuery object
                if (!(obj.opts.caption instanceof $)) {
                    obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
                }

                // Check if url contains "filter" used to filter the content
                // Example: "ajax.html #something"
                if (obj.type === "ajax") {
                    srcParts = src.split(/\s+/, 2);

                    if (srcParts.length > 1) {
                        obj.src = srcParts.shift();

                        obj.opts.filter = srcParts.shift();
                    }
                }

                // Hide all buttons and disable interactivity for modal items
                if (obj.opts.modal) {
                    obj.opts = $.extend(true, obj.opts, {
                        trapFocus: true,
                        // Remove buttons
                        infobar: 0,
                        toolbar: 0,

                        smallBtn: 0,

                        // Disable keyboard navigation
                        keyboard: 0,

                        // Disable some modules
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,

                        // Disable click event handlers
                        clickContent: false,
                        clickSlide: false,
                        clickOutside: false,
                        dblclickContent: false,
                        dblclickSlide: false,
                        dblclickOutside: false
                    });
                }

                // Step 4 - Add processed object to group
                // ======================================

                self.group.push(obj);
            });

            // Update controls if gallery is already opened
            if (Object.keys(self.slides).length) {
                self.updateControls();

                // Update thumbnails, if needed
                thumbs = self.Thumbs;

                if (thumbs && thumbs.isActive) {
                    thumbs.create();

                    thumbs.focus();
                }
            }
        },

        // Attach an event handler functions for:
        //   - navigation buttons
        //   - browser scrolling, resizing;
        //   - focusing
        //   - keyboard
        //   - detecting inactivity
        // ======================================

        addEvents: function () {
            var self = this;

            self.removeEvents();

            // Make navigation elements clickable
            // ==================================

            self.$refs.container
                .on("click.fb-close", "[data-fancybox-close]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    self.close(e);
                })
                .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    self.previous();
                })
                .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    self.next();
                })
                .on("click.fb", "[data-fancybox-zoom]", function (e) {
                    // Click handler for zoom button
                    self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                });

            // Handle page scrolling and browser resizing
            // ==========================================

            $W.on("orientationchange.fb resize.fb", function (e) {
                if (e && e.originalEvent && e.originalEvent.type === "resize") {
                    if (self.requestId) {
                        cancelAFrame(self.requestId);
                    }

                    self.requestId = requestAFrame(function () {
                        self.update(e);
                    });
                } else {
                    if (self.current && self.current.type === "iframe") {
                        self.$refs.stage.hide();
                    }

                    setTimeout(
                        function () {
                            self.$refs.stage.show();

                            self.update(e);
                        },
                        $.fancybox.isMobile ? 600 : 250
                    );
                }
            });

            $D.on("keydown.fb", function (e) {
                var instance = $.fancybox ? $.fancybox.getInstance() : null,
                    current = instance.current,
                    keycode = e.keyCode || e.which;

                // Trap keyboard focus inside of the modal
                // =======================================

                if (keycode == 9) {
                    if (current.opts.trapFocus) {
                        self.focus(e);
                    }

                    return;
                }

                // Enable keyboard navigation
                // ==========================

                if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
                    return;
                }

                // Backspace and Esc keys
                if (keycode === 8 || keycode === 27) {
                    e.preventDefault();

                    self.close(e);

                    return;
                }

                // Left arrow and Up arrow
                if (keycode === 37 || keycode === 38) {
                    e.preventDefault();

                    self.previous();

                    return;
                }

                // Righ arrow and Down arrow
                if (keycode === 39 || keycode === 40) {
                    e.preventDefault();

                    self.next();

                    return;
                }

                self.trigger("afterKeydown", e, keycode);
            });

            // Hide controls after some inactivity period
            if (self.group[self.currIndex].opts.idleTime) {
                self.idleSecondsCounter = 0;

                $D.on(
                    "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                    function (e) {
                        self.idleSecondsCounter = 0;

                        if (self.isIdle) {
                            self.showControls();
                        }

                        self.isIdle = false;
                    }
                );

                self.idleInterval = window.setInterval(function () {
                    self.idleSecondsCounter++;

                    if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
                        self.isIdle = true;
                        self.idleSecondsCounter = 0;

                        self.hideControls();
                    }
                }, 1000);
            }
        },

        // Remove events added by the core
        // ===============================

        removeEvents: function () {
            var self = this;

            $W.off("orientationchange.fb resize.fb");
            $D.off("keydown.fb .fb-idle");

            this.$refs.container.off(".fb-close .fb-prev .fb-next");

            if (self.idleInterval) {
                window.clearInterval(self.idleInterval);

                self.idleInterval = null;
            }
        },

        // Change to previous gallery item
        // ===============================

        previous: function (duration) {
            return this.jumpTo(this.currPos - 1, duration);
        },

        // Change to next gallery item
        // ===========================

        next: function (duration) {
            return this.jumpTo(this.currPos + 1, duration);
        },

        // Switch to selected gallery item
        // ===============================

        jumpTo: function (pos, duration) {
            var self = this,
                groupLen = self.group.length,
                firstRun,
                isMoved,
                loop,
                current,
                previous,
                slidePos,
                stagePos,
                prop,
                diff;

            if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
                return;
            }

            // Should loop?
            pos = parseInt(pos, 10);
            loop = self.current ? self.current.opts.loop : self.opts.loop;

            if (!loop && (pos < 0 || pos >= groupLen)) {
                return false;
            }

            // Check if opening for the first time; this helps to speed things up
            firstRun = self.firstRun = !Object.keys(self.slides).length;

            // Create slides
            previous = self.current;

            self.prevIndex = self.currIndex;
            self.prevPos = self.currPos;

            current = self.createSlide(pos);

            if (groupLen > 1) {
                if (loop || current.index < groupLen - 1) {
                    self.createSlide(pos + 1);
                }

                if (loop || current.index > 0) {
                    self.createSlide(pos - 1);
                }
            }

            self.current = current;
            self.currIndex = current.index;
            self.currPos = current.pos;

            self.trigger("beforeShow", firstRun);

            self.updateControls();

            // Validate duration length
            current.forcedDuration = undefined;

            if ($.isNumeric(duration)) {
                current.forcedDuration = duration;
            } else {
                duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
            }

            duration = parseInt(duration, 10);

            // Check if user has swiped the slides or if still animating
            isMoved = self.isMoved(current);

            // Make sure current slide is visible
            current.$slide.addClass("fancybox-slide--current");

            // Fresh start - reveal container, current slide and start loading content
            if (firstRun) {
                if (current.opts.animationEffect && duration) {
                    self.$refs.container.css("transition-duration", duration + "ms");
                }

                self.$refs.container.addClass("fancybox-is-open").trigger("focus");

                // Attempt to load content into slide
                // This will later call `afterLoad` -> `revealContent`
                self.loadSlide(current);

                self.preload("image");

                return;
            }

            // Get actual slide/stage positions (before cleaning up)
            slidePos = $.fancybox.getTranslate(previous.$slide);
            stagePos = $.fancybox.getTranslate(self.$refs.stage);

            // Clean up all slides
            $.each(self.slides, function (index, slide) {
                $.fancybox.stop(slide.$slide, true);
            });

            if (previous.pos !== current.pos) {
                previous.isComplete = false;
            }

            previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

            // If slides are out of place, then animate them to correct position
            if (isMoved) {
                // Calculate horizontal swipe distance
                diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

                $.each(self.slides, function (index, slide) {
                    slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
                        return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                    });

                    // Make sure that each slide is in equal distance
                    // This is mostly needed for freshly added slides, because they are not yet positioned
                    var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

                    $.fancybox.setTranslate(slide.$slide, {
                        top: 0,
                        left: leftPos - stagePos.left + diff
                    });

                    if (slide.pos !== current.pos) {
                        slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
                    }

                    // Redraw to make sure that transition will start
                    forceRedraw(slide.$slide);

                    // Animate the slide
                    $.fancybox.animate(
                        slide.$slide, {
                            top: 0,
                            left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
                        },
                        duration,
                        function () {
                            slide.$slide
                                .css({
                                    transform: "",
                                    opacity: ""
                                })
                                .removeClass("fancybox-slide--next fancybox-slide--previous");

                            if (slide.pos === self.currPos) {
                                self.complete();
                            }
                        }
                    );
                });
            } else if (duration && current.opts.transitionEffect) {
                // Set transition effect for previously active slide
                prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

                previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

                $.fancybox.animate(
                    previous.$slide,
                    prop,
                    duration,
                    function () {
                        previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
                    },
                    false
                );
            }

            if (current.isLoaded) {
                self.revealContent(current);
            } else {
                self.loadSlide(current);
            }

            self.preload("image");
        },

        // Create new "slide" element
        // These are gallery items  that are actually added to DOM
        // =======================================================

        createSlide: function (pos) {
            var self = this,
                $slide,
                index;

            index = pos % self.group.length;
            index = index < 0 ? self.group.length + index : index;

            if (!self.slides[pos] && self.group[index]) {
                $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

                self.slides[pos] = $.extend(true, {}, self.group[index], {
                    pos: pos,
                    $slide: $slide,
                    isLoaded: false
                });

                self.updateSlide(self.slides[pos]);
            }

            return self.slides[pos];
        },

        // Scale image to the actual size of the image;
        // x and y values should be relative to the slide
        // ==============================================

        scaleToActual: function (x, y, duration) {
            var self = this,
                current = self.current,
                $content = current.$content,
                canvasWidth = $.fancybox.getTranslate(current.$slide).width,
                canvasHeight = $.fancybox.getTranslate(current.$slide).height,
                newImgWidth = current.width,
                newImgHeight = current.height,
                imgPos,
                posX,
                posY,
                scaleX,
                scaleY;

            if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                return;
            }

            self.isAnimating = true;

            $.fancybox.stop($content);

            x = x === undefined ? canvasWidth * 0.5 : x;
            y = y === undefined ? canvasHeight * 0.5 : y;

            imgPos = $.fancybox.getTranslate($content);

            imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
            imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

            scaleX = newImgWidth / imgPos.width;
            scaleY = newImgHeight / imgPos.height;

            // Get center position for original image
            posX = canvasWidth * 0.5 - newImgWidth * 0.5;
            posY = canvasHeight * 0.5 - newImgHeight * 0.5;

            // Make sure image does not move away from edges
            if (newImgWidth > canvasWidth) {
                posX = imgPos.left * scaleX - (x * scaleX - x);

                if (posX > 0) {
                    posX = 0;
                }

                if (posX < canvasWidth - newImgWidth) {
                    posX = canvasWidth - newImgWidth;
                }
            }

            if (newImgHeight > canvasHeight) {
                posY = imgPos.top * scaleY - (y * scaleY - y);

                if (posY > 0) {
                    posY = 0;
                }

                if (posY < canvasHeight - newImgHeight) {
                    posY = canvasHeight - newImgHeight;
                }
            }

            self.updateCursor(newImgWidth, newImgHeight);

            $.fancybox.animate(
                $content, {
                    top: posY,
                    left: posX,
                    scaleX: scaleX,
                    scaleY: scaleY
                },
                duration || 366,
                function () {
                    self.isAnimating = false;
                }
            );

            // Stop slideshow
            if (self.SlideShow && self.SlideShow.isActive) {
                self.SlideShow.stop();
            }
        },

        // Scale image to fit inside parent element
        // ========================================

        scaleToFit: function (duration) {
            var self = this,
                current = self.current,
                $content = current.$content,
                end;

            if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                return;
            }

            self.isAnimating = true;

            $.fancybox.stop($content);

            end = self.getFitPos(current);

            self.updateCursor(end.width, end.height);

            $.fancybox.animate(
                $content, {
                    top: end.top,
                    left: end.left,
                    scaleX: end.width / $content.width(),
                    scaleY: end.height / $content.height()
                },
                duration || 366,
                function () {
                    self.isAnimating = false;
                }
            );
        },

        // Calculate image size to fit inside viewport
        // ===========================================

        getFitPos: function (slide) {
            var self = this,
                $content = slide.$content,
                $slide = slide.$slide,
                width = slide.width || slide.opts.width,
                height = slide.height || slide.opts.height,
                maxWidth,
                maxHeight,
                minRatio,
                aspectRatio,
                rez = {};

            if (!slide.isLoaded || !$content || !$content.length) {
                return false;
            }

            maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
            maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

            maxWidth -=
                parseFloat($slide.css("paddingLeft")) +
                parseFloat($slide.css("paddingRight")) +
                parseFloat($content.css("marginLeft")) +
                parseFloat($content.css("marginRight"));

            maxHeight -=
                parseFloat($slide.css("paddingTop")) +
                parseFloat($slide.css("paddingBottom")) +
                parseFloat($content.css("marginTop")) +
                parseFloat($content.css("marginBottom"));

            if (!width || !height) {
                width = maxWidth;
                height = maxHeight;
            }

            minRatio = Math.min(1, maxWidth / width, maxHeight / height);

            width = minRatio * width;
            height = minRatio * height;

            // Adjust width/height to precisely fit into container
            if (width > maxWidth - 0.5) {
                width = maxWidth;
            }

            if (height > maxHeight - 0.5) {
                height = maxHeight;
            }

            if (slide.type === "image") {
                rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
                rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
            } else if (slide.contentType === "video") {
                // Force aspect ratio for the video
                // "I say the whole world must learn of our peaceful ways… by force!"
                aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

                if (height > width / aspectRatio) {
                    height = width / aspectRatio;
                } else if (width > height * aspectRatio) {
                    width = height * aspectRatio;
                }
            }

            rez.width = width;
            rez.height = height;

            return rez;
        },

        // Update content size and position for all slides
        // ==============================================

        update: function (e) {
            var self = this;

            $.each(self.slides, function (key, slide) {
                self.updateSlide(slide, e);
            });
        },

        // Update slide content position and size
        // ======================================

        updateSlide: function (slide, e) {
            var self = this,
                $content = slide && slide.$content,
                width = slide.width || slide.opts.width,
                height = slide.height || slide.opts.height,
                $slide = slide.$slide;

            // First, prevent caption overlap, if needed
            self.adjustCaption(slide);

            // Then resize content to fit inside the slide
            if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
                $.fancybox.stop($content);

                $.fancybox.setTranslate($content, self.getFitPos(slide));

                if (slide.pos === self.currPos) {
                    self.isAnimating = false;

                    self.updateCursor();
                }
            }

            // Then some adjustments
            self.adjustLayout(slide);

            if ($slide.length) {
                $slide.trigger("refresh");

                if (slide.pos === self.currPos) {
                    self.$refs.toolbar
                        .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
                        .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
                }
            }

            self.trigger("onUpdate", slide, e);
        },

        // Horizontally center slide
        // =========================

        centerSlide: function (duration) {
            var self = this,
                current = self.current,
                $slide = current.$slide;

            if (self.isClosing || !current) {
                return;
            }

            $slide.siblings().css({
                transform: "",
                opacity: ""
            });

            $slide
                .parent()
                .children()
                .removeClass("fancybox-slide--previous fancybox-slide--next");

            $.fancybox.animate(
                $slide, {
                    top: 0,
                    left: 0,
                    opacity: 1
                },
                duration === undefined ? 0 : duration,
                function () {
                    // Clean up
                    $slide.css({
                        transform: "",
                        opacity: ""
                    });

                    if (!current.isComplete) {
                        self.complete();
                    }
                },
                false
            );
        },

        // Check if current slide is moved (swiped)
        // ========================================

        isMoved: function (slide) {
            var current = slide || this.current,
                slidePos,
                stagePos;

            if (!current) {
                return false;
            }

            stagePos = $.fancybox.getTranslate(this.$refs.stage);
            slidePos = $.fancybox.getTranslate(current.$slide);

            return (
                !current.$slide.hasClass("fancybox-animated") &&
                (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
            );
        },

        // Update cursor style depending if content can be zoomed
        // ======================================================

        updateCursor: function (nextWidth, nextHeight) {
            var self = this,
                current = self.current,
                $container = self.$refs.container,
                canPan,
                isZoomable;

            if (!current || self.isClosing || !self.Guestures) {
                return;
            }

            $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

            canPan = self.canPan(nextWidth, nextHeight);

            isZoomable = canPan ? true : self.isZoomable();

            $container.toggleClass("fancybox-is-zoomable", isZoomable);

            $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

            if (canPan) {
                $container.addClass("fancybox-can-pan");
            } else if (
                isZoomable &&
                (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
            ) {
                $container.addClass("fancybox-can-zoomIn");
            } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
                $container.addClass("fancybox-can-swipe");
            }
        },

        // Check if current slide is zoomable
        // ==================================

        isZoomable: function () {
            var self = this,
                current = self.current,
                fitPos;

            // Assume that slide is zoomable if:
            //   - image is still loading
            //   - actual size of the image is smaller than available area
            if (current && !self.isClosing && current.type === "image" && !current.hasError) {
                if (!current.isLoaded) {
                    return true;
                }

                fitPos = self.getFitPos(current);

                if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
                    return true;
                }
            }

            return false;
        },

        // Check if current image dimensions are smaller than actual
        // =========================================================

        isScaledDown: function (nextWidth, nextHeight) {
            var self = this,
                rez = false,
                current = self.current,
                $content = current.$content;

            if (nextWidth !== undefined && nextHeight !== undefined) {
                rez = nextWidth < current.width && nextHeight < current.height;
            } else if ($content) {
                rez = $.fancybox.getTranslate($content);
                rez = rez.width < current.width && rez.height < current.height;
            }

            return rez;
        },

        // Check if image dimensions exceed parent element
        // ===============================================

        canPan: function (nextWidth, nextHeight) {
            var self = this,
                current = self.current,
                pos = null,
                rez = false;

            if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
                rez = self.getFitPos(current);

                if (nextWidth !== undefined && nextHeight !== undefined) {
                    pos = {
                        width: nextWidth,
                        height: nextHeight
                    };
                } else if (current.isComplete) {
                    pos = $.fancybox.getTranslate(current.$content);
                }

                if (pos && rez) {
                    rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
                }
            }

            return rez;
        },

        // Load content into the slide
        // ===========================

        loadSlide: function (slide) {
            var self = this,
                type,
                $slide,
                ajaxLoad;

            if (slide.isLoading || slide.isLoaded) {
                return;
            }

            slide.isLoading = true;

            if (self.trigger("beforeLoad", slide) === false) {
                slide.isLoading = false;

                return false;
            }

            type = slide.type;
            $slide = slide.$slide;

            $slide
                .off("refresh")
                .trigger("onReset")
                .addClass(slide.opts.slideClass);

            // Create content depending on the type
            switch (type) {
                case "image":
                    self.setImage(slide);

                    break;

                case "iframe":
                    self.setIframe(slide);

                    break;

                case "html":
                    self.setContent(slide, slide.src || slide.content);

                    break;

                case "video":
                    self.setContent(
                        slide,
                        slide.opts.video.tpl
                            .replace(/\{\{src\}\}/gi, slide.src)
                            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
                            .replace("{{poster}}", slide.thumb || "")
                    );

                    break;

                case "inline":
                    if ($(slide.src).length) {
                        self.setContent(slide, $(slide.src));
                    } else {
                        self.setError(slide);
                    }

                    break;

                case "ajax":
                    self.showLoading(slide);

                    ajaxLoad = $.ajax(
                        $.extend({}, slide.opts.ajax.settings, {
                            url: slide.src,
                            success: function (data, textStatus) {
                                if (textStatus === "success") {
                                    self.setContent(slide, data);
                                }
                            },
                            error: function (jqXHR, textStatus) {
                                if (jqXHR && textStatus !== "abort") {
                                    self.setError(slide);
                                }
                            }
                        })
                    );

                    $slide.one("onReset", function () {
                        ajaxLoad.abort();
                    });

                    break;

                default:
                    self.setError(slide);

                    break;
            }

            return true;
        },

        // Use thumbnail image, if possible
        // ================================

        setImage: function (slide) {
            var self = this,
                ghost;

            // Check if need to show loading icon
            setTimeout(function () {
                var $img = slide.$image;

                if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
                    self.showLoading(slide);
                }
            }, 50);

            //Check if image has srcset
            self.checkSrcset(slide);

            // This will be wrapper containing both ghost and actual image
            slide.$content = $('<div class="fancybox-content"></div>')
                .addClass("fancybox-is-hidden")
                .appendTo(slide.$slide.addClass("fancybox-slide--image"));

            // If we have a thumbnail, we can display it while actual image is loading
            // Users will not stare at black screen and actual image will appear gradually
            if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
                slide.width = slide.opts.width;
                slide.height = slide.opts.height;

                ghost = document.createElement("img");

                ghost.onerror = function () {
                    $(this).remove();

                    slide.$ghost = null;
                };

                ghost.onload = function () {
                    self.afterLoad(slide);
                };

                slide.$ghost = $(ghost)
                    .addClass("fancybox-image")
                    .appendTo(slide.$content)
                    .attr("src", slide.thumb);
            }

            // Start loading actual image
            self.setBigImage(slide);
        },

        // Check if image has srcset and get the source
        // ============================================
        checkSrcset: function (slide) {
            var srcset = slide.opts.srcset || slide.opts.image.srcset,
                found,
                temp,
                pxRatio,
                windowWidth;

            // If we have "srcset", then we need to find first matching "src" value.
            // This is necessary, because when you set an src attribute, the browser will preload the image
            // before any javascript or even CSS is applied.
            if (srcset) {
                pxRatio = window.devicePixelRatio || 1;
                windowWidth = window.innerWidth * pxRatio;

                temp = srcset.split(",").map(function (el) {
                    var ret = {};

                    el.trim()
                        .split(/\s+/)
                        .forEach(function (el, i) {
                            var value = parseInt(el.substring(0, el.length - 1), 10);

                            if (i === 0) {
                                return (ret.url = el);
                            }

                            if (value) {
                                ret.value = value;
                                ret.postfix = el[el.length - 1];
                            }
                        });

                    return ret;
                });

                // Sort by value
                temp.sort(function (a, b) {
                    return a.value - b.value;
                });

                // Ok, now we have an array of all srcset values
                for (var j = 0; j < temp.length; j++) {
                    var el = temp[j];

                    if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
                        found = el;
                        break;
                    }
                }

                // If not found, take the last one
                if (!found && temp.length) {
                    found = temp[temp.length - 1];
                }

                if (found) {
                    slide.src = found.url;

                    // If we have default width/height values, we can calculate height for matching source
                    if (slide.width && slide.height && found.postfix == "w") {
                        slide.height = (slide.width / slide.height) * found.value;
                        slide.width = found.value;
                    }

                    slide.opts.srcset = srcset;
                }
            }
        },

        // Create full-size image
        // ======================

        setBigImage: function (slide) {
            var self = this,
                img = document.createElement("img"),
                $img = $(img);

            slide.$image = $img
                .one("error", function () {
                    self.setError(slide);
                })
                .one("load", function () {
                    var sizes;

                    if (!slide.$ghost) {
                        self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

                        self.afterLoad(slide);
                    }

                    if (self.isClosing) {
                        return;
                    }

                    if (slide.opts.srcset) {
                        sizes = slide.opts.sizes;

                        if (!sizes || sizes === "auto") {
                            sizes =
                                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                                "vw";
                        }

                        $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
                    }

                    // Hide temporary image after some delay
                    if (slide.$ghost) {
                        setTimeout(function () {
                            if (slide.$ghost && !self.isClosing) {
                                slide.$ghost.hide();
                            }
                        }, Math.min(300, Math.max(1000, slide.height / 1600)));
                    }

                    self.hideLoading(slide);
                })
                .addClass("fancybox-image")
                .attr("src", slide.src)
                .appendTo(slide.$content);

            if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
                $img.trigger("load");
            } else if (img.error) {
                $img.trigger("error");
            }
        },

        // Computes the slide size from image size and maxWidth/maxHeight
        // ==============================================================

        resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
            var maxWidth = parseInt(slide.opts.width, 10),
                maxHeight = parseInt(slide.opts.height, 10);

            // Sets the default values from the image
            slide.width = imgWidth;
            slide.height = imgHeight;

            if (maxWidth > 0) {
                slide.width = maxWidth;
                slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
            }

            if (maxHeight > 0) {
                slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
                slide.height = maxHeight;
            }
        },

        // Create iframe wrapper, iframe and bindings
        // ==========================================

        setIframe: function (slide) {
            var self = this,
                opts = slide.opts.iframe,
                $slide = slide.$slide,
                $iframe;

            slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
                .css(opts.css)
                .appendTo($slide);

            $slide.addClass("fancybox-slide--" + slide.contentType);

            slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(opts.attr)
                .appendTo(slide.$content);

            if (opts.preload) {
                self.showLoading(slide);

                // Unfortunately, it is not always possible to determine if iframe is successfully loaded
                // (due to browser security policy)

                $iframe.on("load.fb error.fb", function (e) {
                    this.isReady = 1;

                    slide.$slide.trigger("refresh");

                    self.afterLoad(slide);
                });

                // Recalculate iframe content size
                // ===============================

                $slide.on("refresh.fb", function () {
                    var $content = slide.$content,
                        frameWidth = opts.css.width,
                        frameHeight = opts.css.height,
                        $contents,
                        $body;

                    if ($iframe[0].isReady !== 1) {
                        return;
                    }

                    try {
                        $contents = $iframe.contents();
                        $body = $contents.find("body");
                    } catch (ignore) {}

                    // Calculate content dimensions, if it is accessible
                    if ($body && $body.length && $body.children().length) {
                        // Avoid scrolling to top (if multiple instances)
                        $slide.css("overflow", "visible");

                        $content.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        });

                        if (frameWidth === undefined) {
                            frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
                        }

                        $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

                        if (frameHeight === undefined) {
                            frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
                        }

                        $content.css("height", frameHeight ? frameHeight : "");

                        $slide.css("overflow", "auto");
                    }

                    $content.removeClass("fancybox-is-hidden");
                });
            } else {
                self.afterLoad(slide);
            }

            $iframe.attr("src", slide.src);

            // Remove iframe if closing or changing gallery item
            $slide.one("onReset", function () {
                // This helps IE not to throw errors when closing
                try {
                    $(this)
                        .find("iframe")
                        .hide()
                        .unbind()
                        .attr("src", "//about:blank");
                } catch (ignore) {}

                $(this)
                    .off("refresh.fb")
                    .empty();

                slide.isLoaded = false;
                slide.isRevealed = false;
            });
        },

        // Wrap and append content to the slide
        // ======================================

        setContent: function (slide, content) {
            var self = this;

            if (self.isClosing) {
                return;
            }

            self.hideLoading(slide);

            if (slide.$content) {
                $.fancybox.stop(slide.$content);
            }

            slide.$slide.empty();

            // If content is a jQuery object, then it will be moved to the slide.
            // The placeholder is created so we will know where to put it back.
            if (isQuery(content) && content.parent().length) {
                // Make sure content is not already moved to fancyBox
                if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
                    content.parents(".fancybox-slide").trigger("onReset");
                }

                // Create temporary element marking original place of the content
                slide.$placeholder = $("<div>")
                    .hide()
                    .insertAfter(content);

                // Make sure content is visible
                content.css("display", "inline-block");
            } else if (!slide.hasError) {
                // If content is just a plain text, try to convert it to html
                if ($.type(content) === "string") {
                    content = $("<div>")
                        .append($.trim(content))
                        .contents();
                }

                // If "filter" option is provided, then filter content
                if (slide.opts.filter) {
                    content = $("<div>")
                        .html(content)
                        .find(slide.opts.filter);
                }
            }

            slide.$slide.one("onReset", function () {
                // Pause all html5 video/audio
                $(this)
                    .find("video,audio")
                    .trigger("pause");

                // Put content back
                if (slide.$placeholder) {
                    slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

                    slide.$placeholder = null;
                }

                // Remove custom close button
                if (slide.$smallBtn) {
                    slide.$smallBtn.remove();

                    slide.$smallBtn = null;
                }

                // Remove content and mark slide as not loaded
                if (!slide.hasError) {
                    $(this).empty();

                    slide.isLoaded = false;
                    slide.isRevealed = false;
                }
            });

            $(content).appendTo(slide.$slide);

            if ($(content).is("video,audio")) {
                $(content).addClass("fancybox-video");

                $(content).wrap("<div></div>");

                slide.contentType = "video";

                slide.opts.width = slide.opts.width || $(content).attr("width");
                slide.opts.height = slide.opts.height || $(content).attr("height");
            }

            slide.$content = slide.$slide
                .children()
                .filter("div,form,main,video,audio,article,.fancybox-content")
                .first();

            slide.$content.siblings().hide();

            // Re-check if there is a valid content
            // (in some cases, ajax response can contain various elements or plain text)
            if (!slide.$content.length) {
                slide.$content = slide.$slide
                    .wrapInner("<div></div>")
                    .children()
                    .first();
            }

            slide.$content.addClass("fancybox-content");

            slide.$slide.addClass("fancybox-slide--" + slide.contentType);

            self.afterLoad(slide);
        },

        // Display error message
        // =====================

        setError: function (slide) {
            slide.hasError = true;

            slide.$slide
                .trigger("onReset")
                .removeClass("fancybox-slide--" + slide.contentType)
                .addClass("fancybox-slide--error");

            slide.contentType = "html";

            this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

            if (slide.pos === this.currPos) {
                this.isAnimating = false;
            }
        },

        // Show loading icon inside the slide
        // ==================================

        showLoading: function (slide) {
            var self = this;

            slide = slide || self.current;

            if (slide && !slide.$spinner) {
                slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
                    .appendTo(slide.$slide)
                    .hide()
                    .fadeIn("fast");
            }
        },

        // Remove loading icon from the slide
        // ==================================

        hideLoading: function (slide) {
            var self = this;

            slide = slide || self.current;

            if (slide && slide.$spinner) {
                slide.$spinner.stop().remove();

                delete slide.$spinner;
            }
        },

        // Adjustments after slide content has been loaded
        // ===============================================

        afterLoad: function (slide) {
            var self = this;

            if (self.isClosing) {
                return;
            }

            slide.isLoading = false;
            slide.isLoaded = true;

            self.trigger("afterLoad", slide);

            self.hideLoading(slide);

            // Add small close button
            if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
                slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
            }

            // Disable right click
            if (slide.opts.protect && slide.$content && !slide.hasError) {
                slide.$content.on("contextmenu.fb", function (e) {
                    if (e.button == 2) {
                        e.preventDefault();
                    }

                    return true;
                });

                // Add fake element on top of the image
                // This makes a bit harder for user to select image
                if (slide.type === "image") {
                    $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
                }
            }

            self.adjustCaption(slide);

            self.adjustLayout(slide);

            if (slide.pos === self.currPos) {
                self.updateCursor();
            }

            self.revealContent(slide);
        },

        // Prevent caption overlap,
        // fix css inconsistency across browsers
        // =====================================

        adjustCaption: function (slide) {
            var self = this,
                current = slide || self.current,
                caption = current.opts.caption,
                preventOverlap = current.opts.preventCaptionOverlap,
                $caption = self.$refs.caption,
                $clone,
                captionH = false;

            $caption.toggleClass("fancybox-caption--separate", preventOverlap);

            if (preventOverlap && caption && caption.length) {
                if (current.pos !== self.currPos) {
                    $clone = $caption.clone().appendTo($caption.parent());

                    $clone
                        .children()
                        .eq(0)
                        .empty()
                        .html(caption);

                    captionH = $clone.outerHeight(true);

                    $clone.empty().remove();
                } else if (self.$caption) {
                    captionH = self.$caption.outerHeight(true);
                }

                current.$slide.css("padding-bottom", captionH || "");
            }
        },

        // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
        // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
        // ====================================================================================

        adjustLayout: function (slide) {
            var self = this,
                current = slide || self.current,
                scrollHeight,
                marginBottom,
                inlinePadding,
                actualPadding;

            if (current.isLoaded && current.opts.disableLayoutFix !== true) {
                current.$content.css("margin-bottom", "");

                // If we would always set margin-bottom for the content,
                // then it would potentially break vertical align
                if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
                    inlinePadding = current.$slide[0].style["padding-bottom"];
                    actualPadding = current.$slide.css("padding-bottom");

                    if (parseFloat(actualPadding) > 0) {
                        scrollHeight = current.$slide[0].scrollHeight;

                        current.$slide.css("padding-bottom", 0);

                        if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
                            marginBottom = actualPadding;
                        }

                        current.$slide.css("padding-bottom", inlinePadding);
                    }
                }

                current.$content.css("margin-bottom", marginBottom);
            }
        },

        // Make content visible
        // This method is called right after content has been loaded or
        // user navigates gallery and transition should start
        // ============================================================

        revealContent: function (slide) {
            var self = this,
                $slide = slide.$slide,
                end = false,
                start = false,
                isMoved = self.isMoved(slide),
                isRevealed = slide.isRevealed,
                effect,
                effectClassName,
                duration,
                opacity;

            slide.isRevealed = true;

            effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
            duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

            duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

            if (isMoved || slide.pos !== self.currPos || !duration) {
                effect = false;
            }

            // Check if can zoom
            if (effect === "zoom") {
                if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
                    end = self.getFitPos(slide);
                } else {
                    effect = "fade";
                }
            }

            // Zoom animation
            // ==============
            if (effect === "zoom") {
                self.isAnimating = true;

                end.scaleX = end.width / start.width;
                end.scaleY = end.height / start.height;

                // Check if we need to animate opacity
                opacity = slide.opts.zoomOpacity;

                if (opacity == "auto") {
                    opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
                }

                if (opacity) {
                    start.opacity = 0.1;
                    end.opacity = 1;
                }

                // Draw image at start position
                $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

                forceRedraw(slide.$content);

                // Start animation
                $.fancybox.animate(slide.$content, end, duration, function () {
                    self.isAnimating = false;

                    self.complete();
                });

                return;
            }

            self.updateSlide(slide);

            // Simply show content if no effect
            // ================================
            if (!effect) {
                slide.$content.removeClass("fancybox-is-hidden");

                if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
                    slide.$content.hide().fadeIn("fast");
                }

                if (slide.pos === self.currPos) {
                    self.complete();
                }

                return;
            }

            // Prepare for CSS transiton
            // =========================
            $.fancybox.stop($slide);

            //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
            effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

            $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

            slide.$content.removeClass("fancybox-is-hidden");

            // Force reflow
            forceRedraw($slide);

            if (slide.type !== "image") {
                slide.$content.hide().show(0);
            }

            $.fancybox.animate(
                $slide,
                "fancybox-slide--current",
                duration,
                function () {
                    $slide.removeClass(effectClassName).css({
                        transform: "",
                        opacity: ""
                    });

                    if (slide.pos === self.currPos) {
                        self.complete();
                    }
                },
                true
            );
        },

        // Check if we can and have to zoom from thumbnail
        //================================================

        getThumbPos: function (slide) {
            var rez = false,
                $thumb = slide.$thumb,
                thumbPos,
                btw,
                brw,
                bbw,
                blw;

            if (!$thumb || !inViewport($thumb[0])) {
                return false;
            }

            thumbPos = $.fancybox.getTranslate($thumb);

            btw = parseFloat($thumb.css("border-top-width") || 0);
            brw = parseFloat($thumb.css("border-right-width") || 0);
            bbw = parseFloat($thumb.css("border-bottom-width") || 0);
            blw = parseFloat($thumb.css("border-left-width") || 0);

            rez = {
                top: thumbPos.top + btw,
                left: thumbPos.left + blw,
                width: thumbPos.width - brw - blw,
                height: thumbPos.height - btw - bbw,
                scaleX: 1,
                scaleY: 1
            };

            return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
        },

        // Final adjustments after current gallery item is moved to position
        // and it`s content is loaded
        // ==================================================================

        complete: function () {
            var self = this,
                current = self.current,
                slides = {},
                $el;

            if (self.isMoved() || !current.isLoaded) {
                return;
            }

            if (!current.isComplete) {
                current.isComplete = true;

                current.$slide.siblings().trigger("onReset");

                self.preload("inline");

                // Trigger any CSS transiton inside the slide
                forceRedraw(current.$slide);

                current.$slide.addClass("fancybox-slide--complete");

                // Remove unnecessary slides
                $.each(self.slides, function (key, slide) {
                    if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
                        slides[slide.pos] = slide;
                    } else if (slide) {
                        $.fancybox.stop(slide.$slide);

                        slide.$slide.off().remove();
                    }
                });

                self.slides = slides;
            }

            self.isAnimating = false;

            self.updateCursor();

            self.trigger("afterShow");

            // Autoplay first html5 video/audio
            if (!!current.opts.video.autoStart) {
                current.$slide
                    .find("video,audio")
                    .filter(":visible:first")
                    .trigger("play")
                    .one("ended", function () {
                        if (Document.exitFullscreen) {
                            Document.exitFullscreen();
                        } else if (this.webkitExitFullscreen) {
                            this.webkitExitFullscreen();
                        }

                        self.next();
                    });
            }

            // Try to focus on the first focusable element
            if (current.opts.autoFocus && current.contentType === "html") {
                // Look for the first input with autofocus attribute
                $el = current.$content.find("input[autofocus]:enabled:visible:first");

                if ($el.length) {
                    $el.trigger("focus");
                } else {
                    self.focus(null, true);
                }
            }

            // Avoid jumping
            current.$slide.scrollTop(0).scrollLeft(0);
        },

        // Preload next and previous slides
        // ================================

        preload: function (type) {
            var self = this,
                prev,
                next;

            if (self.group.length < 2) {
                return;
            }

            next = self.slides[self.currPos + 1];
            prev = self.slides[self.currPos - 1];

            if (prev && prev.type === type) {
                self.loadSlide(prev);
            }

            if (next && next.type === type) {
                self.loadSlide(next);
            }
        },

        // Try to find and focus on the first focusable element
        // ====================================================

        focus: function (e, firstRun) {
            var self = this,
                focusableStr = [
                    "a[href]",
                    "area[href]",
                    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                    "select:not([disabled]):not([aria-hidden])",
                    "textarea:not([disabled]):not([aria-hidden])",
                    "button:not([disabled]):not([aria-hidden])",
                    "iframe",
                    "object",
                    "embed",
                    "video",
                    "audio",
                    "[contenteditable]",
                    '[tabindex]:not([tabindex^="-"])'
                ].join(","),
                focusableItems,
                focusedItemIndex;

            if (self.isClosing) {
                return;
            }

            if (e || !self.current || !self.current.isComplete) {
                // Focus on any element inside fancybox
                focusableItems = self.$refs.container.find("*:visible");
            } else {
                // Focus inside current slide
                focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
            }

            focusableItems = focusableItems.filter(focusableStr).filter(function () {
                return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
            });

            if (focusableItems.length) {
                focusedItemIndex = focusableItems.index(document.activeElement);

                if (e && e.shiftKey) {
                    // Back tab
                    if (focusedItemIndex < 0 || focusedItemIndex == 0) {
                        e.preventDefault();

                        focusableItems.eq(focusableItems.length - 1).trigger("focus");
                    }
                } else {
                    // Outside or Forward tab
                    if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
                        if (e) {
                            e.preventDefault();
                        }

                        focusableItems.eq(0).trigger("focus");
                    }
                }
            } else {
                self.$refs.container.trigger("focus");
            }
        },

        // Activates current instance - brings container to the front and enables keyboard,
        // notifies other instances about deactivating
        // =================================================================================

        activate: function () {
            var self = this;

            // Deactivate all instances
            $(".fancybox-container").each(function () {
                var instance = $(this).data("FancyBox");

                // Skip self and closing instances
                if (instance && instance.id !== self.id && !instance.isClosing) {
                    instance.trigger("onDeactivate");

                    instance.removeEvents();

                    instance.isVisible = false;
                }
            });

            self.isVisible = true;

            if (self.current || self.isIdle) {
                self.update();

                self.updateControls();
            }

            self.trigger("onActivate");

            self.addEvents();
        },

        // Start closing procedure
        // This will start "zoom-out" animation if needed and clean everything up afterwards
        // =================================================================================

        close: function (e, d) {
            var self = this,
                current = self.current,
                effect,
                duration,
                $content,
                domRect,
                opacity,
                start,
                end;

            var done = function () {
                self.cleanUp(e);
            };

            if (self.isClosing) {
                return false;
            }

            self.isClosing = true;

            // If beforeClose callback prevents closing, make sure content is centered
            if (self.trigger("beforeClose", e) === false) {
                self.isClosing = false;

                requestAFrame(function () {
                    self.update();
                });

                return false;
            }

            // Remove all events
            // If there are multiple instances, they will be set again by "activate" method
            self.removeEvents();

            $content = current.$content;
            effect = current.opts.animationEffect;
            duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

            current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

            if (e !== true) {
                $.fancybox.stop(current.$slide);
            } else {
                effect = false;
            }

            // Remove other slides
            current.$slide
                .siblings()
                .trigger("onReset")
                .remove();

            // Trigger animations
            if (duration) {
                self.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", duration + "ms");
            }

            // Clean up
            self.hideLoading(current);

            self.hideControls(true);

            self.updateCursor();

            // Check if possible to zoom-out
            if (
                effect === "zoom" &&
                !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
            ) {
                effect = "fade";
            }

            if (effect === "zoom") {
                $.fancybox.stop($content);

                domRect = $.fancybox.getTranslate($content);

                start = {
                    top: domRect.top,
                    left: domRect.left,
                    scaleX: domRect.width / end.width,
                    scaleY: domRect.height / end.height,
                    width: end.width,
                    height: end.height
                };

                // Check if we need to animate opacity
                opacity = current.opts.zoomOpacity;

                if (opacity == "auto") {
                    opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
                }

                if (opacity) {
                    end.opacity = 0;
                }

                $.fancybox.setTranslate($content, start);

                forceRedraw($content);

                $.fancybox.animate($content, end, duration, done);

                return true;
            }

            if (effect && duration) {
                $.fancybox.animate(
                    current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
                    "fancybox-animated fancybox-fx-" + effect,
                    duration,
                    done
                );
            } else {
                // If skip animation
                if (e === true) {
                    setTimeout(done, duration);
                } else {
                    done();
                }
            }

            return true;
        },

        // Final adjustments after removing the instance
        // =============================================

        cleanUp: function (e) {
            var self = this,
                instance,
                $focus = self.current.opts.$orig,
                x,
                y;

            self.current.$slide.trigger("onReset");

            self.$refs.container.empty().remove();

            self.trigger("afterClose", e);

            // Place back focus
            if (!!self.current.opts.backFocus) {
                if (!$focus || !$focus.length || !$focus.is(":visible")) {
                    $focus = self.$trigger;
                }

                if ($focus && $focus.length) {
                    x = window.scrollX;
                    y = window.scrollY;

                    $focus.trigger("focus");

                    $("html, body")
                        .scrollTop(y)
                        .scrollLeft(x);
                }
            }

            self.current = null;

            // Check if there are other instances
            instance = $.fancybox.getInstance();

            if (instance) {
                instance.activate();
            } else {
                $("body").removeClass("fancybox-active compensate-for-scrollbar");

                $("#fancybox-style-noscroll").remove();
            }
        },

        // Call callback and trigger an event
        // ==================================

        trigger: function (name, slide) {
            var args = Array.prototype.slice.call(arguments, 1),
                self = this,
                obj = slide && slide.opts ? slide : self.current,
                rez;

            if (obj) {
                args.unshift(obj);
            } else {
                obj = self;
            }

            args.unshift(self);

            if ($.isFunction(obj.opts[name])) {
                rez = obj.opts[name].apply(obj, args);
            }

            if (rez === false) {
                return rez;
            }

            if (name === "afterClose" || !self.$refs) {
                $D.trigger(name + ".fb", args);
            } else {
                self.$refs.container.trigger(name + ".fb", args);
            }
        },

        // Update infobar values, navigation button states and reveal caption
        // ==================================================================

        updateControls: function () {
            var self = this,
                current = self.current,
                index = current.index,
                $container = self.$refs.container,
                $caption = self.$refs.caption,
                caption = current.opts.caption;

            // Recalculate content dimensions
            current.$slide.trigger("refresh");

            // Set caption
            if (caption && caption.length) {
                self.$caption = $caption;

                $caption
                    .children()
                    .eq(0)
                    .html(caption);
            } else {
                self.$caption = null;
            }

            if (!self.hasHiddenControls && !self.isIdle) {
                self.showControls();
            }

            // Update info and navigation elements
            $container.find("[data-fancybox-count]").html(self.group.length);
            $container.find("[data-fancybox-index]").html(index + 1);

            $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
            $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

            if (current.type === "image") {
                // Re-enable buttons; update download button source
                $container
                    .find("[data-fancybox-zoom]")
                    .show()
                    .end()
                    .find("[data-fancybox-download]")
                    .attr("href", current.opts.image.src || current.src)
                    .show();
            } else if (current.opts.toolbar) {
                $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
            }

            // Make sure focus is not on disabled button/element
            if ($(document.activeElement).is(":hidden,[disabled]")) {
                self.$refs.container.trigger("focus");
            }
        },

        // Hide toolbar and caption
        // ========================

        hideControls: function (andCaption) {
            var self = this,
                arr = ["infobar", "toolbar", "nav"];

            if (andCaption || !self.current.opts.preventCaptionOverlap) {
                arr.push("caption");
            }

            this.$refs.container.removeClass(
                arr
                    .map(function (i) {
                        return "fancybox-show-" + i;
                    })
                    .join(" ")
            );

            this.hasHiddenControls = true;
        },

        showControls: function () {
            var self = this,
                opts = self.current ? self.current.opts : self.opts,
                $container = self.$refs.container;

            self.hasHiddenControls = false;
            self.idleSecondsCounter = 0;

            $container
                .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
                .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
                .toggleClass("fancybox-show-caption", !!self.$caption)
                .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
                .toggleClass("fancybox-is-modal", !!opts.modal);
        },

        // Toggle toolbar and caption
        // ==========================

        toggleControls: function () {
            if (this.hasHiddenControls) {
                this.showControls();
            } else {
                this.hideControls();
            }
        }
    });

    $.fancybox = {
        version: "3.5.7",
        defaults: defaults,

        // Get current instance and execute a command.
        //
        // Examples of usage:
        //
        //   $instance = $.fancybox.getInstance();
        //   $.fancybox.getInstance().jumpTo( 1 );
        //   $.fancybox.getInstance( 'jumpTo', 1 );
        //   $.fancybox.getInstance( function() {
        //       console.info( this.currIndex );
        //   });
        // ======================================================

        getInstance: function (command) {
            var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                args = Array.prototype.slice.call(arguments, 1);

            if (instance instanceof FancyBox) {
                if ($.type(command) === "string") {
                    instance[command].apply(instance, args);
                } else if ($.type(command) === "function") {
                    command.apply(instance, args);
                }

                return instance;
            }

            return false;
        },

        // Create new instance
        // ===================

        open: function (items, opts, index) {
            return new FancyBox(items, opts, index);
        },

        // Close current or all instances
        // ==============================

        close: function (all) {
            var instance = this.getInstance();

            if (instance) {
                instance.close();

                // Try to find and close next instance
                if (all === true) {
                    this.close(all);
                }
            }
        },

        // Close all instances and unbind all events
        // =========================================

        destroy: function () {
            this.close(true);

            $D.add("body").off("click.fb-start", "**");
        },

        // Try to detect mobile devices
        // ============================

        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

        // Detect if 'translate3d' support is available
        // ============================================

        use3d: (function () {
            var div = document.createElement("div");

            return (
                window.getComputedStyle &&
                window.getComputedStyle(div) &&
                window.getComputedStyle(div).getPropertyValue("transform") &&
                !(document.documentMode && document.documentMode < 11)
            );
        })(),

        // Helper function to get current visual state of an element
        // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
        // =====================================================================

        getTranslate: function ($el) {
            var domRect;

            if (!$el || !$el.length) {
                return false;
            }

            domRect = $el[0].getBoundingClientRect();

            return {
                top: domRect.top || 0,
                left: domRect.left || 0,
                width: domRect.width,
                height: domRect.height,
                opacity: parseFloat($el.css("opacity"))
            };
        },

        // Shortcut for setting "translate3d" properties for element
        // Can set be used to set opacity, too
        // ========================================================

        setTranslate: function ($el, props) {
            var str = "",
                css = {};

            if (!$el || !props) {
                return;
            }

            if (props.left !== undefined || props.top !== undefined) {
                str =
                    (props.left === undefined ? $el.position().left : props.left) +
                    "px, " +
                    (props.top === undefined ? $el.position().top : props.top) +
                    "px";

                if (this.use3d) {
                    str = "translate3d(" + str + ", 0px)";
                } else {
                    str = "translate(" + str + ")";
                }
            }

            if (props.scaleX !== undefined && props.scaleY !== undefined) {
                str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
            } else if (props.scaleX !== undefined) {
                str += " scaleX(" + props.scaleX + ")";
            }

            if (str.length) {
                css.transform = str;
            }

            if (props.opacity !== undefined) {
                css.opacity = props.opacity;
            }

            if (props.width !== undefined) {
                css.width = props.width;
            }

            if (props.height !== undefined) {
                css.height = props.height;
            }

            return $el.css(css);
        },

        // Simple CSS transition handler
        // =============================

        animate: function ($el, to, duration, callback, leaveAnimationName) {
            var self = this,
                from;

            if ($.isFunction(duration)) {
                callback = duration;
                duration = null;
            }

            self.stop($el);

            from = self.getTranslate($el);

            $el.on(transitionEnd, function (e) {
                // Skip events from child elements and z-index change
                if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
                    return;
                }

                self.stop($el);

                if ($.isNumeric(duration)) {
                    $el.css("transition-duration", "");
                }

                if ($.isPlainObject(to)) {
                    if (to.scaleX !== undefined && to.scaleY !== undefined) {
                        self.setTranslate($el, {
                            top: to.top,
                            left: to.left,
                            width: from.width * to.scaleX,
                            height: from.height * to.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        });
                    }
                } else if (leaveAnimationName !== true) {
                    $el.removeClass(to);
                }

                if ($.isFunction(callback)) {
                    callback(e);
                }
            });

            if ($.isNumeric(duration)) {
                $el.css("transition-duration", duration + "ms");
            }

            // Start animation by changing CSS properties or class name
            if ($.isPlainObject(to)) {
                if (to.scaleX !== undefined && to.scaleY !== undefined) {
                    delete to.width;
                    delete to.height;

                    if ($el.parent().hasClass("fancybox-slide--image")) {
                        $el.parent().addClass("fancybox-is-scaling");
                    }
                }

                $.fancybox.setTranslate($el, to);
            } else {
                $el.addClass(to);
            }

            // Make sure that `transitionend` callback gets fired
            $el.data(
                "timer",
                setTimeout(function () {
                    $el.trigger(transitionEnd);
                }, duration + 33)
            );
        },

        stop: function ($el, callCallback) {
            if ($el && $el.length) {
                clearTimeout($el.data("timer"));

                if (callCallback) {
                    $el.trigger(transitionEnd);
                }

                $el.off(transitionEnd).css("transition-duration", "");

                $el.parent().removeClass("fancybox-is-scaling");
            }
        }
    };

    // Default click handler for "fancyboxed" links
    // ============================================

    function _run(e, opts) {
        var items = [],
            index = 0,
            $target,
            value,
            instance;

        // Avoid opening multiple times
        if (e && e.isDefaultPrevented()) {
            return;
        }

        e.preventDefault();

        opts = opts || {};

        if (e && e.data) {
            opts = mergeOpts(e.data.options, opts);
        }

        $target = opts.$target || $(e.currentTarget).trigger("blur");
        instance = $.fancybox.getInstance();

        if (instance && instance.$trigger && instance.$trigger.is($target)) {
            return;
        }

        if (opts.selector) {
            items = $(opts.selector);
        } else {
            // Get all related items and find index for clicked one
            value = $target.attr("data-fancybox") || "";

            if (value) {
                items = e.data ? e.data.items : [];
                items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
            } else {
                items = [$target];
            }
        }

        index = $(items).index($target);

        // Sometimes current item can not be found
        if (index < 0) {
            index = 0;
        }

        instance = $.fancybox.open(items, opts, index);

        // Save last active element
        instance.$trigger = $target;
    }

    // Create a jQuery plugin
    // ======================

    $.fn.fancybox = function (options) {
        var selector;

        options = options || {};
        selector = options.selector || false;

        if (selector) {
            // Use body element instead of document so it executes first
            $("body")
                .off("click.fb-start", selector)
                .on("click.fb-start", selector, {
                    options: options
                }, _run);
        } else {
            this.off("click.fb-start").on(
                "click.fb-start", {
                    items: this,
                    options: options
                },
                _run
            );
        }

        return this;
    };

    // Self initializing plugin for all elements having `data-fancybox` attribute
    // ==========================================================================

    $D.on("click.fb-start", "[data-fancybox]", _run);

    // Enable "trigger elements"
    // =========================

    $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
        $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
            .eq($(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", {
                $trigger: $(this)
            });
    });

    // Track focus event for better accessibility styling
    // ==================================================
    (function () {
        var buttonStr = ".fancybox-button",
            focusStr = "fancybox-focus",
            $pressed = null;

        $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
            switch (e.type) {
                case "mousedown":
                    $pressed = $(this);
                    break;
                case "mouseup":
                    $pressed = null;
                    break;
                case "focusin":
                    $(buttonStr).removeClass(focusStr);

                    if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
                        $(this).addClass(focusStr);
                    }
                    break;
                case "focusout":
                    $(buttonStr).removeClass(focusStr);
                    break;
            }
        });
    })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
    "use strict";

    // Object containing properties for each media type
    var defaults = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },

        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },

        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },

        // Examples:
        // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
        // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
        // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
        // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (rez) {
                return (
                    "//maps.google." +
                    rez[2] +
                    "/?ll=" +
                    (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
                    "&output=" +
                    (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                );
            }
        },

        // Examples:
        // https://www.google.com/maps/search/Empire+State+Building/
        // https://www.google.com/maps/search/?api=1&query=centurylink+field
        // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (rez) {
                return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
            }
        }
    };

    // Formats matching url to final form
    var format = function (url, rez, params) {
        if (!url) {
            return;
        }

        params = params || "";

        if ($.type(params) === "object") {
            params = $.param(params, true);
        }

        $.each(rez, function (key, value) {
            url = url.replace("$" + key, value || "");
        });

        if (params.length) {
            url += (url.indexOf("?") > 0 ? "&" : "?") + params;
        }

        return url;
    };

    $(document).on("objectNeedsType.fb", function (e, instance, item) {
        var url = item.src || "",
            type = false,
            media,
            thumb,
            rez,
            params,
            urlParams,
            paramObj,
            provider;

        media = $.extend(true, {}, defaults, item.opts.media);

        // Look for any matching media type
        $.each(media, function (providerName, providerOpts) {
            rez = url.match(providerOpts.matcher);

            if (!rez) {
                return;
            }

            type = providerOpts.type;
            provider = providerName;
            paramObj = {};

            if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
                urlParams = rez[providerOpts.paramPlace];

                if (urlParams[0] == "?") {
                    urlParams = urlParams.substring(1);
                }

                urlParams = urlParams.split("&");

                for (var m = 0; m < urlParams.length; ++m) {
                    var p = urlParams[m].split("=", 2);

                    if (p.length == 2) {
                        paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                    }
                }
            }

            params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

            url =
                $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

            thumb =
                $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

            if (providerName === "youtube") {
                url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
                    return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
                });
            } else if (providerName === "vimeo") {
                url = url.replace("&%23", "#");
            }

            return false;
        });

        // If it is found, then change content type and update the url

        if (type) {
            if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
                item.opts.thumb = thumb;
            }

            if (type === "iframe") {
                item.opts = $.extend(true, item.opts, {
                    iframe: {
                        preload: false,
                        attr: {
                            scrolling: "no"
                        }
                    }
                });
            }

            $.extend(item, {
                type: type,
                src: url,
                origSrc: item.src,
                contentSource: provider,
                contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
            });
        } else if (url) {
            item.type = item.opts.defaultType;
        }
    });

    // Load YouTube/Video API on request to detect when video finished playing
    var VideoAPILoader = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: false,
            loaded: false
        },

        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: false,
            loaded: false
        },

        load: function (vendor) {
            var _this = this,
                script;

            if (this[vendor].loaded) {
                setTimeout(function () {
                    _this.done(vendor);
                });
                return;
            }

            if (this[vendor].loading) {
                return;
            }

            this[vendor].loading = true;

            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = this[vendor].src;

            if (vendor === "youtube") {
                window.onYouTubeIframeAPIReady = function () {
                    _this[vendor].loaded = true;
                    _this.done(vendor);
                };
            } else {
                script.onload = function () {
                    _this[vendor].loaded = true;
                    _this.done(vendor);
                };
            }

            document.body.appendChild(script);
        },
        done: function (vendor) {
            var instance, $el, player;

            if (vendor === "youtube") {
                delete window.onYouTubeIframeAPIReady;
            }

            instance = $.fancybox.getInstance();

            if (instance) {
                $el = instance.current.$content.find("iframe");

                if (vendor === "youtube" && YT !== undefined && YT) {
                    player = new YT.Player($el.attr("id"), {
                        events: {
                            onStateChange: function (e) {
                                if (e.data == 0) {
                                    instance.next();
                                }
                            }
                        }
                    });
                } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
                    player = new Vimeo.Player($el);

                    player.on("ended", function () {
                        instance.next();
                    });
                }
            }
        }
    };

    $(document).on({
        "afterShow.fb": function (e, instance, current) {
            if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
                VideoAPILoader.load(current.contentSource);
            }
        }
    });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
    "use strict";

    var requestAFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // if all else fails, use setTimeout
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    var cancelAFrame = (function () {
        return (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            }
        );
    })();

    var getPointerXY = function (e) {
        var result = [];

        e = e.originalEvent || e || window.e;
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

        for (var key in e) {
            if (e[key].pageX) {
                result.push({
                    x: e[key].pageX,
                    y: e[key].pageY
                });
            } else if (e[key].clientX) {
                result.push({
                    x: e[key].clientX,
                    y: e[key].clientY
                });
            }
        }

        return result;
    };

    var distance = function (point2, point1, what) {
        if (!point1 || !point2) {
            return 0;
        }

        if (what === "x") {
            return point2.x - point1.x;
        } else if (what === "y") {
            return point2.y - point1.y;
        }

        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };

    var isClickable = function ($el) {
        if (
            $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
            $.isFunction($el.get(0).onclick) ||
            $el.data("selectable")
        ) {
            return true;
        }

        // Check for attributes like data-fancybox-next or data-fancybox-close
        for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
            if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
                return true;
            }
        }

        return false;
    };

    var hasScrollbars = function (el) {
        var overflowY = window.getComputedStyle(el)["overflow-y"],
            overflowX = window.getComputedStyle(el)["overflow-x"],
            vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
            horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

        return vertical || horizontal;
    };

    var isScrollable = function ($el) {
        var rez = false;

        while (true) {
            rez = hasScrollbars($el.get(0));

            if (rez) {
                break;
            }

            $el = $el.parent();

            if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
                break;
            }
        }

        return rez;
    };

    var Guestures = function (instance) {
        var self = this;

        self.instance = instance;

        self.$bg = instance.$refs.bg;
        self.$stage = instance.$refs.stage;
        self.$container = instance.$refs.container;

        self.destroy();

        self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
    };

    Guestures.prototype.destroy = function () {
        var self = this;

        self.$container.off(".fb.touch");

        $(document).off(".fb.touch");

        if (self.requestId) {
            cancelAFrame(self.requestId);
            self.requestId = null;
        }

        if (self.tapped) {
            clearTimeout(self.tapped);
            self.tapped = null;
        }
    };

    Guestures.prototype.ontouchstart = function (e) {
        var self = this,
            $target = $(e.target),
            instance = self.instance,
            current = instance.current,
            $slide = current.$slide,
            $content = current.$content,
            isTouchDevice = e.type == "touchstart";

        // Do not respond to both (touch and mouse) events
        if (isTouchDevice) {
            self.$container.off("mousedown.fb.touch");
        }

        // Ignore right click
        if (e.originalEvent && e.originalEvent.button == 2) {
            return;
        }

        // Ignore taping on links, buttons, input elements
        if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
            return;
        }
        // Ignore clicks on the scrollbar
        if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
            return;
        }

        // Ignore clicks while zooming or closing
        if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
            e.stopPropagation();
            e.preventDefault();

            return;
        }

        self.realPoints = self.startPoints = getPointerXY(e);

        if (!self.startPoints.length) {
            return;
        }

        // Allow other scripts to catch touch event if "touch" is set to false
        if (current.touch) {
            e.stopPropagation();
        }

        self.startEvent = e;

        self.canTap = true;
        self.$target = $target;
        self.$content = $content;
        self.opts = current.opts.touch;

        self.isPanning = false;
        self.isSwiping = false;
        self.isZooming = false;
        self.isScrolling = false;
        self.canPan = instance.canPan();

        self.startTime = new Date().getTime();
        self.distanceX = self.distanceY = self.distance = 0;

        self.canvasWidth = Math.round($slide[0].clientWidth);
        self.canvasHeight = Math.round($slide[0].clientHeight);

        self.contentLastPos = null;
        self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
            top: 0,
            left: 0
        };
        self.sliderStartPos = $.fancybox.getTranslate($slide);

        // Since position will be absolute, but we need to make it relative to the stage
        self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

        self.sliderStartPos.top -= self.stagePos.top;
        self.sliderStartPos.left -= self.stagePos.left;

        self.contentStartPos.top -= self.stagePos.top;
        self.contentStartPos.left -= self.stagePos.left;

        $(document)
            .off(".fb.touch")
            .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
            .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

        if ($.fancybox.isMobile) {
            document.addEventListener("scroll", self.onscroll, true);
        }

        // Skip if clicked outside the sliding area
        if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
            if ($target.is(".fancybox-image")) {
                e.preventDefault();
            }

            if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
                return;
            }
        }

        self.isScrollable = isScrollable($target) || isScrollable($target.parent());

        // Check if element is scrollable and try to prevent default behavior (scrolling)
        if (!($.fancybox.isMobile && self.isScrollable)) {
            e.preventDefault();
        }

        // One finger or mouse click - swipe or pan an image
        if (self.startPoints.length === 1 || current.hasError) {
            if (self.canPan) {
                $.fancybox.stop(self.$content);

                self.isPanning = true;
            } else {
                self.isSwiping = true;
            }

            self.$container.addClass("fancybox-is-grabbing");
        }

        // Two fingers - zoom image
        if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
            self.canTap = false;
            self.isSwiping = false;
            self.isPanning = false;

            self.isZooming = true;

            $.fancybox.stop(self.$content);

            self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
            self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

            self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
            self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

            self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
        }
    };

    Guestures.prototype.onscroll = function (e) {
        var self = this;

        self.isScrolling = true;

        document.removeEventListener("scroll", self.onscroll, true);
    };

    Guestures.prototype.ontouchmove = function (e) {
        var self = this;

        // Make sure user has not released over iframe or disabled element
        if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
            self.ontouchend(e);
            return;
        }

        if (self.isScrolling) {
            self.canTap = false;
            return;
        }

        self.newPoints = getPointerXY(e);

        if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
            return;
        }

        if (!(self.isSwiping && self.isSwiping === true)) {
            e.preventDefault();
        }

        self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
        self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

        self.distance = distance(self.newPoints[0], self.startPoints[0]);

        // Skip false ontouchmove events (Chrome)
        if (self.distance > 0) {
            if (self.isSwiping) {
                self.onSwipe(e);
            } else if (self.isPanning) {
                self.onPan();
            } else if (self.isZooming) {
                self.onZoom();
            }
        }
    };

    Guestures.prototype.onSwipe = function (e) {
        var self = this,
            instance = self.instance,
            swiping = self.isSwiping,
            left = self.sliderStartPos.left || 0,
            angle;

        // If direction is not yet determined
        if (swiping === true) {
            // We need at least 10px distance to correctly calculate an angle
            if (Math.abs(self.distance) > 10) {
                self.canTap = false;

                if (instance.group.length < 2 && self.opts.vertical) {
                    self.isSwiping = "y";
                } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
                    self.isSwiping = "x";
                } else {
                    angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

                    self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
                }

                if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
                    self.isScrolling = true;

                    return;
                }

                instance.isDragging = self.isSwiping;

                // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
                self.startPoints = self.newPoints;

                $.each(instance.slides, function (index, slide) {
                    var slidePos, stagePos;

                    $.fancybox.stop(slide.$slide);

                    slidePos = $.fancybox.getTranslate(slide.$slide);
                    stagePos = $.fancybox.getTranslate(instance.$refs.stage);

                    slide.$slide
                        .css({
                            transform: "",
                            opacity: "",
                            "transition-duration": ""
                        })
                        .removeClass("fancybox-animated")
                        .removeClass(function (index, className) {
                            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                        });

                    if (slide.pos === instance.current.pos) {
                        self.sliderStartPos.top = slidePos.top - stagePos.top;
                        self.sliderStartPos.left = slidePos.left - stagePos.left;
                    }

                    $.fancybox.setTranslate(slide.$slide, {
                        top: slidePos.top - stagePos.top,
                        left: slidePos.left - stagePos.left
                    });
                });

                // Stop slideshow
                if (instance.SlideShow && instance.SlideShow.isActive) {
                    instance.SlideShow.stop();
                }
            }

            return;
        }

        // Sticky edges
        if (swiping == "x") {
            if (
                self.distanceX > 0 &&
                (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
            ) {
                left = left + Math.pow(self.distanceX, 0.8);
            } else if (
                self.distanceX < 0 &&
                (self.instance.group.length < 2 ||
                    (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
            ) {
                left = left - Math.pow(-self.distanceX, 0.8);
            } else {
                left = left + self.distanceX;
            }
        }

        self.sliderLastPos = {
            top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
            left: left
        };

        if (self.requestId) {
            cancelAFrame(self.requestId);

            self.requestId = null;
        }

        self.requestId = requestAFrame(function () {
            if (self.sliderLastPos) {
                $.each(self.instance.slides, function (index, slide) {
                    var pos = slide.pos - self.instance.currPos;

                    $.fancybox.setTranslate(slide.$slide, {
                        top: self.sliderLastPos.top,
                        left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
                    });
                });

                self.$container.addClass("fancybox-is-sliding");
            }
        });
    };

    Guestures.prototype.onPan = function () {
        var self = this;

        // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
        if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
            self.startPoints = self.newPoints;
            return;
        }

        self.canTap = false;

        self.contentLastPos = self.limitMovement();

        if (self.requestId) {
            cancelAFrame(self.requestId);
        }

        self.requestId = requestAFrame(function () {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });
    };

    // Make panning sticky to the edges
    Guestures.prototype.limitMovement = function () {
        var self = this;

        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        var distanceX = self.distanceX;
        var distanceY = self.distanceY;

        var contentStartPos = self.contentStartPos;

        var currentOffsetX = contentStartPos.left;
        var currentOffsetY = contentStartPos.top;

        var currentWidth = contentStartPos.width;
        var currentHeight = contentStartPos.height;

        var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

        if (currentWidth > canvasWidth) {
            newOffsetX = currentOffsetX + distanceX;
        } else {
            newOffsetX = currentOffsetX;
        }

        newOffsetY = currentOffsetY + distanceY;

        // Slow down proportionally to traveled distance
        minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
        minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

        maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
        maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

        //   ->
        if (distanceX > 0 && newOffsetX > minTranslateX) {
            newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
        }

        //    <-
        if (distanceX < 0 && newOffsetX < maxTranslateX) {
            newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
        }

        //   \/
        if (distanceY > 0 && newOffsetY > minTranslateY) {
            newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
        }

        //   /\
        if (distanceY < 0 && newOffsetY < maxTranslateY) {
            newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
        }

        return {
            top: newOffsetY,
            left: newOffsetX
        };
    };

    Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
        var self = this;

        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        if (newWidth > canvasWidth) {
            newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
            newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
        } else {
            // Center horizontally
            newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
        }

        if (newHeight > canvasHeight) {
            newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
            newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
        } else {
            // Center vertically
            newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
        }

        return {
            top: newOffsetY,
            left: newOffsetX
        };
    };

    Guestures.prototype.onZoom = function () {
        var self = this;

        // Calculate current distance between points to get pinch ratio and new width and height
        var contentStartPos = self.contentStartPos;

        var currentWidth = contentStartPos.width;
        var currentHeight = contentStartPos.height;

        var currentOffsetX = contentStartPos.left;
        var currentOffsetY = contentStartPos.top;

        var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

        var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

        var newWidth = Math.floor(currentWidth * pinchRatio);
        var newHeight = Math.floor(currentHeight * pinchRatio);

        // This is the translation due to pinch-zooming
        var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
        var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

        // Point between the two touches
        var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
        var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

        // And this is the translation due to translation of the centerpoint
        // between the two fingers
        var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
        var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

        // The new offset is the old/current one plus the total translation
        var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
        var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

        var newPos = {
            top: newOffsetY,
            left: newOffsetX,
            scaleX: pinchRatio,
            scaleY: pinchRatio
        };

        self.canTap = false;

        self.newWidth = newWidth;
        self.newHeight = newHeight;

        self.contentLastPos = newPos;

        if (self.requestId) {
            cancelAFrame(self.requestId);
        }

        self.requestId = requestAFrame(function () {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });
    };

    Guestures.prototype.ontouchend = function (e) {
        var self = this;

        var swiping = self.isSwiping;
        var panning = self.isPanning;
        var zooming = self.isZooming;
        var scrolling = self.isScrolling;

        self.endPoints = getPointerXY(e);
        self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

        self.$container.removeClass("fancybox-is-grabbing");

        $(document).off(".fb.touch");

        document.removeEventListener("scroll", self.onscroll, true);

        if (self.requestId) {
            cancelAFrame(self.requestId);

            self.requestId = null;
        }

        self.isSwiping = false;
        self.isPanning = false;
        self.isZooming = false;
        self.isScrolling = false;

        self.instance.isDragging = false;

        if (self.canTap) {
            return self.onTap(e);
        }

        self.speed = 100;

        // Speed in px/ms
        self.velocityX = (self.distanceX / self.dMs) * 0.5;
        self.velocityY = (self.distanceY / self.dMs) * 0.5;

        if (panning) {
            self.endPanning();
        } else if (zooming) {
            self.endZooming();
        } else {
            self.endSwiping(swiping, scrolling);
        }

        return;
    };

    Guestures.prototype.endSwiping = function (swiping, scrolling) {
        var self = this,
            ret = false,
            len = self.instance.group.length,
            distanceX = Math.abs(self.distanceX),
            canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
            speedX = 300;

        self.sliderLastPos = null;

        // Close if swiped vertically / navigate if horizontally
        if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
            // Continue vertical movement
            $.fancybox.animate(
                self.instance.current.$slide, {
                    top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
                    opacity: 0
                },
                200
            );
            ret = self.instance.close(true, 250);
        } else if (canAdvance && self.distanceX > 0) {
            ret = self.instance.previous(speedX);
        } else if (canAdvance && self.distanceX < 0) {
            ret = self.instance.next(speedX);
        }

        if (ret === false && (swiping == "x" || swiping == "y")) {
            self.instance.centerSlide(200);
        }

        self.$container.removeClass("fancybox-is-sliding");
    };

    // Limit panning from edges
    // ========================
    Guestures.prototype.endPanning = function () {
        var self = this,
            newOffsetX,
            newOffsetY,
            newPos;

        if (!self.contentLastPos) {
            return;
        }

        if (self.opts.momentum === false || self.dMs > 350) {
            newOffsetX = self.contentLastPos.left;
            newOffsetY = self.contentLastPos.top;
        } else {
            // Continue movement
            newOffsetX = self.contentLastPos.left + self.velocityX * 500;
            newOffsetY = self.contentLastPos.top + self.velocityY * 500;
        }

        newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

        newPos.width = self.contentStartPos.width;
        newPos.height = self.contentStartPos.height;

        $.fancybox.animate(self.$content, newPos, 366);
    };

    Guestures.prototype.endZooming = function () {
        var self = this;

        var current = self.instance.current;

        var newOffsetX, newOffsetY, newPos, reset;

        var newWidth = self.newWidth;
        var newHeight = self.newHeight;

        if (!self.contentLastPos) {
            return;
        }

        newOffsetX = self.contentLastPos.left;
        newOffsetY = self.contentLastPos.top;

        reset = {
            top: newOffsetY,
            left: newOffsetX,
            width: newWidth,
            height: newHeight,
            scaleX: 1,
            scaleY: 1
        };

        // Reset scalex/scaleY values; this helps for perfomance and does not break animation
        $.fancybox.setTranslate(self.$content, reset);

        if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
            self.instance.scaleToFit(150);
        } else if (newWidth > current.width || newHeight > current.height) {
            self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
        } else {
            newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

            $.fancybox.animate(self.$content, newPos, 150);
        }
    };

    Guestures.prototype.onTap = function (e) {
        var self = this;
        var $target = $(e.target);

        var instance = self.instance;
        var current = instance.current;

        var endPoints = (e && getPointerXY(e)) || self.startPoints;

        var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
        var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

        var where;

        var process = function (prefix) {
            var action = current.opts[prefix];

            if ($.isFunction(action)) {
                action = action.apply(instance, [current, e]);
            }

            if (!action) {
                return;
            }

            switch (action) {
                case "close":
                    instance.close(self.startEvent);

                    break;

                case "toggleControls":
                    instance.toggleControls();

                    break;

                case "next":
                    instance.next();

                    break;

                case "nextOrClose":
                    if (instance.group.length > 1) {
                        instance.next();
                    } else {
                        instance.close(self.startEvent);
                    }

                    break;

                case "zoom":
                    if (current.type == "image" && (current.isLoaded || current.$ghost)) {
                        if (instance.canPan()) {
                            instance.scaleToFit();
                        } else if (instance.isScaledDown()) {
                            instance.scaleToActual(tapX, tapY);
                        } else if (instance.group.length < 2) {
                            instance.close(self.startEvent);
                        }
                    }

                    break;
            }
        };

        // Ignore right click
        if (e.originalEvent && e.originalEvent.button == 2) {
            return;
        }

        // Skip if clicked on the scrollbar
        if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
            return;
        }

        // Check where is clicked
        if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
            where = "Outside";
        } else if ($target.is(".fancybox-slide")) {
            where = "Slide";
        } else if (
            instance.current.$content &&
            instance.current.$content
                .find($target)
                .addBack()
                .filter($target).length
        ) {
            where = "Content";
        } else {
            return;
        }

        // Check if this is a double tap
        if (self.tapped) {
            // Stop previously created single tap
            clearTimeout(self.tapped);
            self.tapped = null;

            // Skip if distance between taps is too big
            if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
                return this;
            }

            // OK, now we assume that this is a double-tap
            process("dblclick" + where);
        } else {
            // Single tap will be processed if user has not clicked second time within 300ms
            // or there is no need to wait for double-tap
            self.tapX = tapX;
            self.tapY = tapY;

            if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
                self.tapped = setTimeout(function () {
                    self.tapped = null;

                    if (!instance.isAnimating) {
                        process("click" + where);
                    }
                }, 500);
            } else {
                process("click" + where);
            }
        }

        return this;
    };

    $(document)
        .on("onActivate.fb", function (e, instance) {
            if (instance && !instance.Guestures) {
                instance.Guestures = new Guestures(instance);
            }
        })
        .on("beforeClose.fb", function (e, instance) {
            if (instance && instance.Guestures) {
                instance.Guestures.destroy();
            }
        });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
    "use strict";

    $.extend(true, $.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
                "</button>"
        },
        slideShow: {
            autoStart: false,
            speed: 3000,
            progress: true
        }
    });

    var SlideShow = function (instance) {
        this.instance = instance;
        this.init();
    };

    $.extend(SlideShow.prototype, {
        timer: null,
        isActive: false,
        $button: null,

        init: function () {
            var self = this,
                instance = self.instance,
                opts = instance.group[instance.currIndex].opts.slideShow;

            self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                self.toggle();
            });

            if (instance.group.length < 2 || !opts) {
                self.$button.hide();
            } else if (opts.progress) {
                self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
            }
        },

        set: function (force) {
            var self = this,
                instance = self.instance,
                current = instance.current;

            // Check if reached last element
            if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
                if (self.isActive && current.contentType !== "video") {
                    if (self.$progress) {
                        $.fancybox.animate(self.$progress.show(), {
                            scaleX: 1
                        }, current.opts.slideShow.speed);
                    }

                    self.timer = setTimeout(function () {
                        if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
                            instance.jumpTo(0);
                        } else {
                            instance.next();
                        }
                    }, current.opts.slideShow.speed);
                }
            } else {
                self.stop();
                instance.idleSecondsCounter = 0;
                instance.showControls();
            }
        },

        clear: function () {
            var self = this;

            clearTimeout(self.timer);

            self.timer = null;

            if (self.$progress) {
                self.$progress.removeAttr("style").hide();
            }
        },

        start: function () {
            var self = this,
                current = self.instance.current;

            if (current) {
                self.$button
                    .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
                    .removeClass("fancybox-button--play")
                    .addClass("fancybox-button--pause");

                self.isActive = true;

                if (current.isComplete) {
                    self.set(true);
                }

                self.instance.trigger("onSlideShowChange", true);
            }
        },

        stop: function () {
            var self = this,
                current = self.instance.current;

            self.clear();

            self.$button
                .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
                .removeClass("fancybox-button--pause")
                .addClass("fancybox-button--play");

            self.isActive = false;

            self.instance.trigger("onSlideShowChange", false);

            if (self.$progress) {
                self.$progress.removeAttr("style").hide();
            }
        },

        toggle: function () {
            var self = this;

            if (self.isActive) {
                self.stop();
            } else {
                self.start();
            }
        }
    });

    $(document).on({
        "onInit.fb": function (e, instance) {
            if (instance && !instance.SlideShow) {
                instance.SlideShow = new SlideShow(instance);
            }
        },

        "beforeShow.fb": function (e, instance, current, firstRun) {
            var SlideShow = instance && instance.SlideShow;

            if (firstRun) {
                if (SlideShow && current.opts.slideShow.autoStart) {
                    SlideShow.start();
                }
            } else if (SlideShow && SlideShow.isActive) {
                SlideShow.clear();
            }
        },

        "afterShow.fb": function (e, instance, current) {
            var SlideShow = instance && instance.SlideShow;

            if (SlideShow && SlideShow.isActive) {
                SlideShow.set();
            }
        },

        "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
            var SlideShow = instance && instance.SlideShow;

            // "P" or Spacebar
            if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
                keypress.preventDefault();

                SlideShow.toggle();
            }
        },

        "beforeClose.fb onDeactivate.fb": function (e, instance) {
            var SlideShow = instance && instance.SlideShow;

            if (SlideShow) {
                SlideShow.stop();
            }
        }
    });

    // Page Visibility API to pause slideshow when window is not active
    $(document).on("visibilitychange", function () {
        var instance = $.fancybox.getInstance(),
            SlideShow = instance && instance.SlideShow;

        if (SlideShow && SlideShow.isActive) {
            if (document.hidden) {
                SlideShow.clear();
            } else {
                SlideShow.set();
            }
        }
    });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
    "use strict";

    // Collection of methods supported by user browser
    var fn = (function () {
        var fnMap = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            // new WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // old WebKit (Safari 5.1)
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];

        var ret = {};

        for (var i = 0; i < fnMap.length; i++) {
            var val = fnMap[i];

            if (val && val[1] in document) {
                for (var j = 0; j < val.length; j++) {
                    ret[fnMap[0][j]] = val[j];
                }

                return ret;
            }
        }

        return false;
    })();

    if (fn) {
        var FullScreen = {
            request: function (elem) {
                elem = elem || document.documentElement;

                elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
            },
            exit: function () {
                document[fn.exitFullscreen]();
            },
            toggle: function (elem) {
                elem = elem || document.documentElement;

                if (this.isFullscreen()) {
                    this.exit();
                } else {
                    this.request(elem);
                }
            },
            isFullscreen: function () {
                return Boolean(document[fn.fullscreenElement]);
            },
            enabled: function () {
                return Boolean(document[fn.fullscreenEnabled]);
            }
        };

        $.extend(true, $.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
                    "</button>"
            },
            fullScreen: {
                autoStart: false
            }
        });

        $(document).on(fn.fullscreenchange, function () {
            var isFullscreen = FullScreen.isFullscreen(),
                instance = $.fancybox.getInstance();

            if (instance) {
                // If image is zooming, then force to stop and reposition properly
                if (instance.current && instance.current.type === "image" && instance.isAnimating) {
                    instance.isAnimating = false;

                    instance.update(true, true, 0);

                    if (!instance.isComplete) {
                        instance.complete();
                    }
                }

                instance.trigger("onFullscreenChange", isFullscreen);

                instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

                instance.$refs.toolbar
                    .find("[data-fancybox-fullscreen]")
                    .toggleClass("fancybox-button--fsenter", !isFullscreen)
                    .toggleClass("fancybox-button--fsexit", isFullscreen);
            }
        });
    }

    $(document).on({
        "onInit.fb": function (e, instance) {
            var $container;

            if (!fn) {
                instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

                return;
            }

            if (instance && instance.group[instance.currIndex].opts.fullScreen) {
                $container = instance.$refs.container;

                $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    FullScreen.toggle();
                });

                if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
                    FullScreen.request();
                }

                // Expose API
                instance.FullScreen = FullScreen;
            } else if (instance) {
                instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
            }
        },

        "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
            // "F"
            if (instance && instance.FullScreen && keycode === 70) {
                keypress.preventDefault();

                instance.FullScreen.toggle();
            }
        },

        "beforeClose.fb": function (e, instance) {
            if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
                FullScreen.exit();
            }
        }
    });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
    "use strict";

    var CLASS = "fancybox-thumbs",
        CLASS_ACTIVE = CLASS + "-active";

    // Make sure there are default values
    $.fancybox.defaults = $.extend(
        true, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
                    "</button>"
            },
            thumbs: {
                autoStart: false, // Display thumbnails on opening
                hideOnClose: true, // Hide thumbnail grid when closing animation starts
                parentEl: ".fancybox-container", // Container is injected into this element
                axis: "y" // Vertical (y) or horizontal (x) scrolling
            }
        },
        $.fancybox.defaults
    );

    var FancyThumbs = function (instance) {
        this.init(instance);
    };

    $.extend(FancyThumbs.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: false,
        isActive: false,

        init: function (instance) {
            var self = this,
                group = instance.group,
                enabled = 0;

            self.instance = instance;
            self.opts = group[instance.currIndex].opts.thumbs;

            instance.Thumbs = self;

            self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

            // Enable thumbs if at least two group items have thumbnails
            for (var i = 0, len = group.length; i < len; i++) {
                if (group[i].thumb) {
                    enabled++;
                }

                if (enabled > 1) {
                    break;
                }
            }

            if (enabled > 1 && !!self.opts) {
                self.$button.removeAttr("style").on("click", function () {
                    self.toggle();
                });

                self.isActive = true;
            } else {
                self.$button.hide();
            }
        },

        create: function () {
            var self = this,
                instance = self.instance,
                parentEl = self.opts.parentEl,
                list = [],
                src;

            if (!self.$grid) {
                // Create main element
                self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
                    instance.$refs.container
                        .find(parentEl)
                        .addBack()
                        .filter(parentEl)
                );

                // Add "click" event that performs gallery navigation
                self.$grid.on("click", "a", function () {
                    instance.jumpTo($(this).attr("data-index"));
                });
            }

            // Build the list
            if (!self.$list) {
                self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
            }

            $.each(instance.group, function (i, item) {
                src = item.thumb;

                if (!src && item.type === "image") {
                    src = item.src;
                }

                list.push(
                    '<a href="javascript:;" tabindex="0" data-index="' +
                    i +
                    '"' +
                    (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
                    "></a>"
                );
            });

            self.$list[0].innerHTML = list.join("");

            if (self.opts.axis === "x") {
                // Set fixed width for list element to enable horizontal scrolling
                self.$list.width(
                    parseInt(self.$grid.css("padding-right"), 10) +
                    instance.group.length *
                    self.$list
                        .children()
                        .eq(0)
                        .outerWidth(true)
                );
            }
        },

        focus: function (duration) {
            var self = this,
                $list = self.$list,
                $grid = self.$grid,
                thumb,
                thumbPos;

            if (!self.instance.current) {
                return;
            }

            thumb = $list
                .children()
                .removeClass(CLASS_ACTIVE)
                .filter('[data-index="' + self.instance.current.index + '"]')
                .addClass(CLASS_ACTIVE);

            thumbPos = thumb.position();

            // Check if need to scroll to make current thumb visible
            if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
                $list.stop().animate({
                        scrollTop: $list.scrollTop() + thumbPos.top
                    },
                    duration
                );
            } else if (
                self.opts.axis === "x" &&
                (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
            ) {
                $list
                    .parent()
                    .stop()
                    .animate({
                            scrollLeft: thumbPos.left
                        },
                        duration
                    );
            }
        },

        update: function () {
            var that = this;
            that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

            if (that.isVisible) {
                if (!that.$grid) {
                    that.create();
                }

                that.instance.trigger("onThumbsShow");

                that.focus(0);
            } else if (that.$grid) {
                that.instance.trigger("onThumbsHide");
            }

            // Update content position
            that.instance.update();
        },

        hide: function () {
            this.isVisible = false;
            this.update();
        },

        show: function () {
            this.isVisible = true;
            this.update();
        },

        toggle: function () {
            this.isVisible = !this.isVisible;
            this.update();
        }
    });

    $(document).on({
        "onInit.fb": function (e, instance) {
            var Thumbs;

            if (instance && !instance.Thumbs) {
                Thumbs = new FancyThumbs(instance);

                if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
                    Thumbs.show();
                }
            }
        },

        "beforeShow.fb": function (e, instance, item, firstRun) {
            var Thumbs = instance && instance.Thumbs;

            if (Thumbs && Thumbs.isVisible) {
                Thumbs.focus(firstRun ? 0 : 250);
            }
        },

        "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
            var Thumbs = instance && instance.Thumbs;

            // "G"
            if (Thumbs && Thumbs.isActive && keycode === 71) {
                keypress.preventDefault();

                Thumbs.toggle();
            }
        },

        "beforeClose.fb": function (e, instance) {
            var Thumbs = instance && instance.Thumbs;

            if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
                Thumbs.$grid.hide();
            }
        }
    });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
    "use strict";

    $.extend(true, $.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
                "</button>"
        },
        share: {
            url: function (instance, item) {
                return (
                    (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
                );
            },
            tpl: '<div class="fancybox-share">' +
                "<h1>{{SHARE}}</h1>" +
                "<p>" +
                '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
                '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
                "<span>Facebook</span>" +
                "</a>" +
                '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
                '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
                "<span>Twitter</span>" +
                "</a>" +
                '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
                '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
                "<span>Pinterest</span>" +
                "</a>" +
                "</p>" +
                '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
                "</div>"
        }
    });

    function escapeHtml(string) {
        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };

        return String(string).replace(/[&<>"'`=\/]/g, function (s) {
            return entityMap[s];
        });
    }

    $(document).on("click", "[data-fancybox-share]", function () {
        var instance = $.fancybox.getInstance(),
            current = instance.current || null,
            url,
            tpl;

        if (!current) {
            return;
        }

        if ($.type(current.opts.share.url) === "function") {
            url = current.opts.share.url.apply(current, [instance, current]);
        }

        tpl = current.opts.share.tpl
            .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
            .replace(/\{\{url\}\}/g, encodeURIComponent(url))
            .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
            .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

        $.fancybox.open({
            src: instance.translate(instance, tpl),
            type: "html",
            opts: {
                touch: false,
                animationEffect: false,
                afterLoad: function (shareInstance, shareCurrent) {
                    // Close self if parent instance is closing
                    instance.$refs.container.one("beforeClose.fb", function () {
                        shareInstance.close(null, 0);
                    });

                    // Opening links in a popup window
                    shareCurrent.$content.find(".fancybox-share__button").click(function () {
                        window.open(this.href, "Share", "width=550, height=450");
                        return false;
                    });
                },
                mobile: {
                    autoFocus: false
                }
            }
        });
    });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
    "use strict";

    // Simple $.escapeSelector polyfill (for jQuery prior v3)
    if (!$.escapeSelector) {
        $.escapeSelector = function (sel) {
            var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            var fcssescape = function (ch, asCodePoint) {
                if (asCodePoint) {
                    // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                    if (ch === "\0") {
                        return "\uFFFD";
                    }

                    // Control characters and (dependent upon position) numbers get escaped as code points
                    return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                }

                // Other potentially-special ASCII characters get backslash-escaped
                return "\\" + ch;
            };

            return (sel + "").replace(rcssescape, fcssescape);
        };
    }

    // Get info about gallery name and current index from url
    function parseUrl() {
        var hash = window.location.hash.substr(1),
            rez = hash.split("-"),
            index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
            gallery = rez.join("-");

        return {
            hash: hash,
            /* Index is starting from 1 */
            index: index < 1 ? 1 : index,
            gallery: gallery
        };
    }

    // Trigger click evnt on links to open new fancyBox instance
    function triggerFromUrl(url) {
        if (url.gallery !== "") {
            // If we can find element matching 'data-fancybox' atribute,
            // then triggering click event should start fancyBox
            $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
                .eq(url.index - 1)
                .focus()
                .trigger("click.fb-start");
        }
    }

    // Get gallery name from current instance
    function getGalleryID(instance) {
        var opts, ret;

        if (!instance) {
            return false;
        }

        opts = instance.current ? instance.current.opts : instance.opts;
        ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

        return ret === "" ? false : ret;
    }

    // Start when DOM becomes ready
    $(function () {
        // Check if user has disabled this module
        if ($.fancybox.defaults.hash === false) {
            return;
        }

        // Update hash when opening/closing fancyBox
        $(document).on({
            "onInit.fb": function (e, instance) {
                var url, gallery;

                if (instance.group[instance.currIndex].opts.hash === false) {
                    return;
                }

                url = parseUrl();
                gallery = getGalleryID(instance);

                // Make sure gallery start index matches index from hash
                if (gallery && url.gallery && gallery == url.gallery) {
                    instance.currIndex = url.index - 1;
                }
            },

            "beforeShow.fb": function (e, instance, current, firstRun) {
                var gallery;

                if (!current || current.opts.hash === false) {
                    return;
                }

                // Check if need to update window hash
                gallery = getGalleryID(instance);

                if (!gallery) {
                    return;
                }

                // Variable containing last hash value set by fancyBox
                // It will be used to determine if fancyBox needs to close after hash change is detected
                instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

                // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
                if (window.location.hash === "#" + instance.currentHash) {
                    return;
                }

                if (firstRun && !instance.origHash) {
                    instance.origHash = window.location.hash;
                }

                if (instance.hashTimer) {
                    clearTimeout(instance.hashTimer);
                }

                // Update hash
                instance.hashTimer = setTimeout(function () {
                    if ("replaceState" in window.history) {
                        window.history[firstRun ? "pushState" : "replaceState"]({},
                            document.title,
                            window.location.pathname + window.location.search + "#" + instance.currentHash
                        );

                        if (firstRun) {
                            instance.hasCreatedHistory = true;
                        }
                    } else {
                        window.location.hash = instance.currentHash;
                    }

                    instance.hashTimer = null;
                }, 300);
            },

            "beforeClose.fb": function (e, instance, current) {
                if (!current || current.opts.hash === false) {
                    return;
                }

                clearTimeout(instance.hashTimer);

                // Goto previous history entry
                if (instance.currentHash && instance.hasCreatedHistory) {
                    window.history.back();
                } else if (instance.currentHash) {
                    if ("replaceState" in window.history) {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
                    } else {
                        window.location.hash = instance.origHash;
                    }
                }

                instance.currentHash = null;
            }
        });

        // Check if need to start/close after url has changed
        $(window).on("hashchange.fb", function () {
            var url = parseUrl(),
                fb = null;

            // Find last fancyBox instance that has "hash"
            $.each(
                $(".fancybox-container")
                    .get()
                    .reverse(),
                function (index, value) {
                    var tmp = $(value).data("FancyBox");

                    if (tmp && tmp.currentHash) {
                        fb = tmp;
                        return false;
                    }
                }
            );

            if (fb) {
                // Now, compare hash values
                if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
                    fb.currentHash = null;

                    fb.close();
                }
            } else if (url.gallery !== "") {
                triggerFromUrl(url);
            }
        });

        // Check current hash and trigger click event on matching element to start fancyBox, if needed
        setTimeout(function () {
            if (!$.fancybox.getInstance()) {
                triggerFromUrl(parseUrl());
            }
        }, 50);
    });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
    "use strict";

    var prevTime = new Date().getTime();

    $(document).on({
        "onInit.fb": function (e, instance, current) {
            instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
                var current = instance.current,
                    currTime = new Date().getTime();

                if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                if (current.$slide.hasClass("fancybox-animated")) {
                    return;
                }

                e = e.originalEvent || e;

                if (currTime - prevTime < 250) {
                    return;
                }

                prevTime = currTime;

                instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
            });
        }
    });
})(document, jQuery);

/* marquee */
(function (factory) { "use strict"; if (typeof define === "function" && define.amd) { define(["jquery"], factory) } else if (typeof exports !== "undefined") { module.exports = factory(require("jquery")) } else { factory(jQuery) } })(function ($) { $.fn.marquee = function (options) { return this.each(function () { var o = $.extend({}, $.fn.marquee.defaults, options), $this = $(this), $marqueeWrapper, containerWidth, animationCss, verticalDir, elWidth, loopCount = 3, playState = "animation-play-state", css3AnimationIsSupported = false, _prefixedEvent = function (element, type, callback) { var pfx = ["webkit", "moz", "MS", "o", ""]; for (var p = 0; p < pfx.length; p++) { if (!pfx[p]) type = type.toLowerCase(); element.addEventListener(pfx[p] + type, callback, false) } }, _objToString = function (obj) { var tabjson = []; for (var p in obj) { if (obj.hasOwnProperty(p)) { tabjson.push(p + ":" + obj[p]) } } tabjson.push(); return "{" + tabjson.join(",") + "}" }, _startAnimationWithDelay = function () { $this.timer = setTimeout(animate, o.delayBeforeStart) }, methods = { pause: function () { if (css3AnimationIsSupported && o.allowCss3Support) { $marqueeWrapper.css(playState, "paused") } else { if ($.fn.pause) { $marqueeWrapper.pause() } } $this.data("runningStatus", "paused"); $this.trigger("paused") }, resume: function () { if (css3AnimationIsSupported && o.allowCss3Support) { $marqueeWrapper.css(playState, "running") } else { if ($.fn.resume) { $marqueeWrapper.resume() } } $this.data("runningStatus", "resumed"); $this.trigger("resumed") }, toggle: function () { methods[$this.data("runningStatus") === "resumed" ? "pause" : "resume"]() }, destroy: function () { clearTimeout($this.timer); $this.find("*").addBack().off(); $this.html($this.find(".js-marquee:first").html()) } }; if (typeof options === "string") { if ($.isFunction(methods[options])) { if (!$marqueeWrapper) { $marqueeWrapper = $this.find(".js-marquee-wrapper") } if ($this.data("css3AnimationIsSupported") === true) { css3AnimationIsSupported = true } methods[options]() } return } var dataAttributes = {}, attr; $.each(o, function (key) { attr = $this.attr("data-" + key); if (typeof attr !== "undefined") { switch (attr) { case "true": attr = true; break; case "false": attr = false; break }o[key] = attr } }); if (o.speed) { o.duration = parseInt($this.width(), 10) / o.speed * 1e3 } verticalDir = o.direction === "up" || o.direction === "down"; o.gap = o.duplicated ? parseInt(o.gap) : 0; $this.wrapInner('<div class="js-marquee"></div>'); var $el = $this.find(".js-marquee").css({ "margin-right": o.gap, float: "left" }); if (o.duplicated) { $el.clone(true).appendTo($this) } $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'); $marqueeWrapper = $this.find(".js-marquee-wrapper"); if (verticalDir) { var containerHeight = $this.height(); $marqueeWrapper.removeAttr("style"); $this.height(containerHeight); $this.find(".js-marquee").css({ float: "none", "margin-bottom": o.gap, "margin-right": 0 }); if (o.duplicated) { $this.find(".js-marquee:last").css({ "margin-bottom": 0 }) } var elHeight = $this.find(".js-marquee:first").height() + o.gap; if (o.startVisible && !o.duplicated) { o._completeDuration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration; o.duration = parseInt(elHeight, 10) / parseInt(containerHeight, 10) * o.duration } else { o.duration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration } } else { elWidth = $this.find(".js-marquee:first").width() + o.gap; containerWidth = $this.width(); if (o.startVisible && !o.duplicated) { o._completeDuration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration; o.duration = parseInt(elWidth, 10) / parseInt(containerWidth, 10) * o.duration } else { o.duration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration } } if (o.duplicated) { o.duration = o.duration / 2 } if (o.allowCss3Support) { var elm = document.body || document.createElement("div"), animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7), domPrefixes = "Webkit Moz O ms Khtml".split(" "), animationString = "animation", animationCss3Str = "", keyframeString = ""; if (elm.style.animation !== undefined) { keyframeString = "@keyframes " + animationName + " "; css3AnimationIsSupported = true } if (css3AnimationIsSupported === false) { for (var i = 0; i < domPrefixes.length; i++) { if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) { var prefix = "-" + domPrefixes[i].toLowerCase() + "-"; animationString = prefix + animationString; playState = prefix + playState; keyframeString = "@" + prefix + "keyframes " + animationName + " "; css3AnimationIsSupported = true; break } } } if (css3AnimationIsSupported) { animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing; $this.data("css3AnimationIsSupported", true) } } var _rePositionVertically = function () { $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + elHeight + "px") + ")") }, _rePositionHorizontally = function () { $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + elWidth + "px") + ")") }; if (o.duplicated) { if (verticalDir) { if (o.startVisible) { $marqueeWrapper.css("transform", "translateY(0)") } else { $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + (elHeight * 2 - o.gap) + "px") + ")") } } else { if (o.startVisible) { $marqueeWrapper.css("transform", "translateX(0)") } else { $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + (elWidth * 2 - o.gap) + "px") + ")") } } if (!o.startVisible) { loopCount = 1 } } else if (o.startVisible) { loopCount = 2 } else { if (verticalDir) { _rePositionVertically() } else { _rePositionHorizontally() } } var animate = function () { if (o.duplicated) { if (loopCount === 1) { o._originalDuration = o.duration; if (verticalDir) { o.duration = o.direction === "up" ? o.duration + containerHeight / (elHeight / o.duration) : o.duration * 2 } else { o.duration = o.direction === "left" ? o.duration + containerWidth / (elWidth / o.duration) : o.duration * 2 } if (animationCss3Str) { animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing } loopCount++ } else if (loopCount === 2) { o.duration = o._originalDuration; if (animationCss3Str) { animationName = animationName + "0"; keyframeString = $.trim(keyframeString) + "0 "; animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing } loopCount++ } } if (verticalDir) { if (o.duplicated) { if (loopCount > 2) { $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? 0 : "-" + elHeight + "px") + ")") } animationCss = { transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : 0) + ")" } } else if (o.startVisible) { if (loopCount === 2) { if (animationCss3Str) { animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing } animationCss = { transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : containerHeight + "px") + ")" }; loopCount++ } else if (loopCount === 3) { o.duration = o._completeDuration; if (animationCss3Str) { animationName = animationName + "0"; keyframeString = $.trim(keyframeString) + "0 "; animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing } _rePositionVertically() } } else { _rePositionVertically(); animationCss = { transform: "translateY(" + (o.direction === "up" ? "-" + $marqueeWrapper.height() + "px" : containerHeight + "px") + ")" } } } else { if (o.duplicated) { if (loopCount > 2) { $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? 0 : "-" + elWidth + "px") + ")") } animationCss = { transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : 0) + ")" } } else if (o.startVisible) { if (loopCount === 2) { if (animationCss3Str) { animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing } animationCss = { transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")" }; loopCount++ } else if (loopCount === 3) { o.duration = o._completeDuration; if (animationCss3Str) { animationName = animationName + "0"; keyframeString = $.trim(keyframeString) + "0 "; animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing } _rePositionHorizontally() } } else { _rePositionHorizontally(); animationCss = { transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")" } } } $this.trigger("beforeStarting"); if (css3AnimationIsSupported) { $marqueeWrapper.css(animationString, animationCss3Str); var keyframeCss = keyframeString + " { 100%  " + _objToString(animationCss) + "}", $styles = $marqueeWrapper.find("style"); if ($styles.length !== 0) { $styles.filter(":last").html(keyframeCss) } else { $("head").append("<style>" + keyframeCss + "</style>") } _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () { $this.trigger("finished") }); _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () { animate(); $this.trigger("finished") }) } else { $marqueeWrapper.animate(animationCss, o.duration, o.easing, function () { $this.trigger("finished"); if (o.pauseOnCycle) { _startAnimationWithDelay() } else { animate() } }) } $this.data("runningStatus", "resumed") }; $this.on("pause", methods.pause); $this.on("resume", methods.resume); if (o.pauseOnHover) { $this.on("mouseenter", methods.pause); $this.on("mouseleave", methods.resume) } if (css3AnimationIsSupported && o.allowCss3Support) { animate() } else { _startAnimationWithDelay() } }) }; $.fn.marquee.defaults = { allowCss3Support: true, css3easing: "linear", easing: "linear", delayBeforeStart: 1e3, direction: "left", duplicated: false, duration: 5e3, speed: 0, gap: 20, pauseOnCycle: false, pauseOnHover: false, startVisible: false } });
'use strict';
/* modal */

var Modal = AccessibleMinimodal.init({
    style: {
        use: false
    },
    on: {
        beforeOpen: function beforeOpen(instance) {
            var scrollbarWidth = instance.getScrollbarWidth();
            $('.header, .promo-img').css('margin-right', scrollbarWidth);
            $('.home-fixed-img').each(function () {
                var postionX = this.style.getPropertyValue('--background-position-x');
                $(this).data('old-position', postionX);
                postionX = Number(postionX.replace(/\D/g, ''));
                postionX += scrollbarWidth;
                this.style.setProperty('--background-position-x', "right ".concat(postionX, "px"));
            });
            var openBtn = $(instance.openingNode);
            var title = openBtn.data('title');
            var modal = $(instance.modal);

            if (title) {
                modal.find('[name="title"]').val(title);
            }
        },
        afterClose: function afterClose() {
            $('.header, .promo-img').css('margin-right', 0);
            // $('.header, .p-about, .fixedMenuWrap').css('filter', '')
            $('.home-fixed-img').each(function () {
                this.style.setProperty('--background-position-x', $(this).data('old-position'));
            });
        }
    }
});
/* header-menu */

$(document).on('click', '.header-menu-open', function (event) {
    var t = $(this);

    if (t.hasClass('active')) {
        closeHeaderMenu();
    } else {
        t.addClass('active');
        $('html').addClass('header-menu-opened header-menu-is-open');
    }

    return false;
});
$(document).on('click', function (event) {
    if ($(event.target).closest('.header-menu-open, .header-nav, .modal').length) return;
    closeHeaderMenu();
});

function closeHeaderMenu() {
    if (!$('html').hasClass('header-menu-is-open')) return;
    $('html').removeClass('header-menu-is-open');
    $('.header-menu-open').removeClass('active');
    setTimeout(function () {
        $('html').removeClass('header-menu-opened');
    }, 400);
}

/* header-fidex */


$(window).on('load resize scroll', function () {
    var inv = false;
    if ($('html').hasClass('dark_bg')) {
        inv = true
    }
    ;

    if ($(this).scrollTop() > 0) {
        inv ? $('html').addClass('header-is-fixed--inv') : $('html').addClass('header-is-fixed');
    } else {
        inv ? $('html').removeClass('header-is-fixed--inv') : $('html').removeClass('header-is-fixed');
    }
});
/* promo */

setPromo();
$(window).on('resize', setPromo);

function setPromo() {
    $('.promo-wrapp').css('min-height', 0);
    $('.promo-body').addClass('flex-none');
    if ($('.promo-wrapp').hasClass('promo-wrapp--edge') && window.screen.width < 768) {
        return
    }
    $('.promo-wrapp').css('min-height', $('.promo-body').innerHeight());
    $('.promo-body').removeClass('flex-none');
}

/* inside-item */


$(document).on('mouseenter', '.inside-item', function () {
    var t = $(this);
    var img = t.find('.inside-item-img-hover');
    img.removeAttr('src');
    t.addClass('hover');
    img.attr('src', img.data('src'));
});
$(document).on('mouseleave', '.inside-item', function () {
    $(this).removeClass('hover');
});
/* sliders */

$('.inside-slider').each(function () {
    var slider;
    var t = $(this);
    initSlider();
    $(window).on('resize', initSlider);

    function initSlider() {
        if (window.matchMedia('(max-width:767px)').matches) {
            if (!slider) {
                slider = new Swiper(t[0], {
                    speed: 400,
                    loop: false,
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                    pagination: {
                        el: t.closest('.inside').find('.slider-dots')[0],
                        type: 'bullets',
                        clickable: true
                    }
                });
            }
        } else {
            if (slider) {
                slider.destroy(true, true);
                slider = null;
            }
        }
    }
});
$('.develop-slider').each(function () {
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        spaceBetween: 16,
        watchOverflow: true,
        navigation: {
            nextEl: t.closest('.develop').find('.slider-arrow-next')[0],
            prevEl: t.closest('.develop').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                slidesOffsetAfter: $(window).width() - 236 - 48
            },
            767: {
                slidesPerView: 'auto',
                slidesOffsetAfter: 0
            },
            1152: {
                slidesPerView: 4,
                slidesOffsetAfter: 0
            }
        }
    });
});
$('.blog-slider').each(function () {
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        // spaceBetween: 16,
        slidesPerView: 'auto',
        watchOverflow: true,
        navigation: {
            nextEl: t.closest('.home-blog').find('.slider-arrow-next')[0],
            prevEl: t.closest('.home-blog').find('.slider-arrow-prev')[0]
        }
    });
});
$('.about-team-slider').each(function () {
    var slider;
    var t = $(this);
    initSlider();
    $(window).on('resize', initSlider);

    function initSlider() {
        if (window.matchMedia('(max-width:767px)').matches) {
            if (!slider) {
                slider = new Swiper(t[0], {
                    speed: 400,
                    loop: false,
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                    pagination: {
                        el: t.closest('.about-team').find('.slider-dots')[0],
                        type: 'bullets',
                        clickable: true
                    }
                });
            }
        } else {
            if (slider) {
                slider.destroy(true, true);
                slider = null;
            }
        }
        if (window.matchMedia('(min-width:1152px)').matches) {
            if (!slider) {
                slider = new Swiper(t[0], {
                    speed: 400,
                    loop: false,
                    slidesPerView: 4,
                    navigation: {
                        nextEl: '.about-team--front .slider-arrow-next',
                        prevEl: '.about-team--front .slider-arrow-prev',
                    },
                });
            }
        } else {
            if (slider && !window.matchMedia('(max-width:767px)').matches) {
                slider.destroy(true, true);
                slider = null;
            }
        }

        if ($('.about-team--front .about-team-slide').length <= 4) {
            $('.swiper-button-disabled').addClass('nav-hidden-arr')
        } else {
            $('.swiper-button-disabled').removeClass('nav-hidden-arr')
        }
    }
});
$('.team-slider').each(function () {
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        spaceBetween: 16,
        watchOverflow: true,
        navigation: {
            nextEl: t.closest('.team').find('.slider-arrow-next')[0],
            prevEl: t.closest('.team').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            1152: {
                slidesPerView: 4
            }
        }
    });
});
$('.mentors-slider').each(function () {
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        spaceBetween: 16,
        watchOverflow: true,
        threshold: 20,
        navigation: {
            nextEl: t.closest('.mentors').find('.slider-arrow-next')[0],
            prevEl: t.closest('.mentors').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto'
            },
            1152: {
                slidesPerView: 4
            }
        }
    });
});
$('.used-slider').each(function () {
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        spaceBetween: 32,
        watchOverflow: true,
        threshold: 20,
        pagination: {
            el: $('.slider__controls-1').find('.slider-dots')[0],
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: t.closest('.mentors').find('.slider-arrow-next')[0],
            prevEl: t.closest('.mentors').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0: {
                slidesPerView: 1.13
            },
            576: {
                slidesPerView: 2.20,
                spaceBetween: 28,
            },
            768: {
                slidesPerView: 2.20,
                spaceBetween: 32,
            },
            992: {
                slidesPerView: 3.33,
                spaceBetween: 32,
            },
            1152: {
                slidesPerView: 4
            }
        }
    });
});
$('.b-articles__slider').each(function () {
    var t = $(this), lastIndex;
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        spaceBetween: 32,
        watchOverflow: true,
        threshold: 20,
        pagination: {
            el: $('.slider__controls-articles').find('.slider-dots')[0],
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: t.closest('.b-articles').find('.slider-arrow-next')[0],
            prevEl: t.closest('.b-articles').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0: {
                slidesPerView: 1.33,
                spaceBetween: 12,
            },
            468: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            1152: {
                slidesPerView: 3
            }
        },
        on: {
            init: function(q) {
                var $zeroEl = $('.b-articles .slider__controls');
                if(q.slides.length > 5) {
                    $zeroEl.addClass('lnews__nav--active-right');
                }
            },
            activeIndexChange: function (q) {
                var $zeroEl = $('.b-articles .slider__controls'),
                    $activeBull = $zeroEl.find('.swiper-pagination-bullet:nth-child(' + (+q.activeIndex + 1) + ')'),
                    $prevActiveBull = $zeroEl.find('.swiper-pagination-bullet:nth-child(' + (+q.activeIndex + 2) + ')'),
                    activeBulPos = $activeBull.position().left;

                if ($prevActiveBull.length > 0) {
                    var prevActiveBulPos = $prevActiveBull.position().left;
                }

                if(q.activeIndex > 2) {
                    $zeroEl.addClass('lnews__nav--active-left');
                } else {
                    $zeroEl.removeClass('lnews__nav--active-left');
                }
                if(q.activeIndex > (q.slides.length - 3 - q.params.slidesPerView)) {
                    $zeroEl.removeClass('lnews__nav--active-right');
                } else {
                    $zeroEl.addClass('lnews__nav--active-right');
                }

                if (activeBulPos > center) {
                    $zeroEl.find('.slider-dots')[0].scrollLeft = activeBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - center;
                }
                if ($prevActiveBull.length > 0 && lastIndex > q.activeIndex + 1) {
                    $zeroEl.find('.slider-dots')[0].scrollLeft = prevActiveBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - 8 - center;
                }

                lastIndex = q.activeIndex + 1;
            }
        }
    });
    if($('.b-articles .slider__controls').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').length > 0) {
        var center = $('.b-articles .slider__controls').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').position().left
    }
});
// $('.p-about__team-slider').each(function () {
//     var slider;
//     var t = $(this);
//     initSlider();
//     $(window).on('resize', initSlider);
//     function initSlider() {
//         if (window.matchMedia('(min-width:1152px)').matches) {
//             if (!slider) {
//                 slider = new Swiper(t[0], {
//                     speed: 400,
//                     loop: false,
//                     spaceBetween: 32,
//                     watchOverflow: true,
//                     threshold: 20,
//                     pagination: {
//                         el: $('.slider__controls-team').find('.slider-dots')[0],
//                         type: 'bullets',
//                         clickable: true
//                     },
//                     navigation: {
//                         nextEl: t.closest('.p-about__team').find('.slider-arrow-next')[0],
//                         prevEl: t.closest('.p-about__team').find('.slider-arrow-prev')[0]
//                     },
//                     breakpoints: {
//                         1152: {
//                             slidesPerView: 3
//                         },
//                         1440: {
//                             slidesPerView: 4
//                         }
//                     }
//                 });
//             }
//         } else {
//             if (slider) {
//                 slider.destroy(true, true);
//                 slider = null;
//             }
//         }
//     }
// });
$('.p-about__products-slider').each(function () {
    var slider;
    var t = $(this);
    initSlider();
    $(window).on('resize', initSlider);
    function initSlider() {
        if (window.matchMedia('(min-width:1152px)').matches) {
            if (!slider) {
                slider = new Swiper(t[0], {
                    speed: 400,
                    loop: false,
                    spaceBetween: 32,
                    watchOverflow: true,
                    threshold: 20,
                    pagination: {
                        el: $('.slider__controls-products').find('.slider-dots')[0],
                        type: 'bullets',
                        clickable: true
                    },
                    navigation: {
                        nextEl: t.closest('.p-about__products').find('.slider-arrow-next')[0],
                        prevEl: t.closest('.p-about__products').find('.slider-arrow-prev')[0]
                    },
                    breakpoints: {
                        1152: {
                            slidesPerView: 3
                        },
                    }
                });
            }
        } else {
            if (slider) {
                slider.destroy(true, true);
                slider = null;
            }
        }
    }
});



var investProgectsItems = $('.p-about__investProgects-item').length

var prevItems = function(){
    if(investProgectsItems >= 4){
        return 4
    }else{
        return 3
    }
}
var slider = new Swiper('.p-about__investProgects-slider', {
    speed: 400,
    loop: false,
    spaceBetween: 32,
    watchOverflow: true,
    threshold: 20,
    pagination: {
        el: $('.slider__controls-investProgects').find('.slider-dots')[0],
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: $('.p-about__investProgects').find('.slider-arrow-next')[0],
        prevEl: $('.p-about__investProgects').find('.slider-arrow-prev')[0]
    },
    breakpoints: {
        0: {
            slidesPerView: 1.33,
            spaceBetween: 13,
        },
        468: {
            slidesPerView: 1.33,
            spaceBetween: 13,
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: prevItems() >= 4 ? 3 : 2
        },
        1152: {
            slidesPerView: prevItems()
        }
    }
});

var slider = new Swiper('.about__publish', {
    speed: 400,
    loop: false,
    spaceBetween: 32,
    watchOverflow: true,
    threshold: 20,
    pagination: {
        el: $('.slider__controls-publish').find('.slider-dots')[0],
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: $('.p-about__investProgectsw').find('.slider-arrow-next')[0],
        prevEl: $('.p-about__investProgectsw').find('.slider-arrow-prev')[0]
    },
    breakpoints: {
        0: {
            slidesPerView: 1.33,
            spaceBetween: 13,
        },
        468: {
            slidesPerView: 1.33,
            spaceBetween: 13,
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1152: {
            slidesPerView: 3
        }
    }
});


$('.news-slider').each(function () {
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        spaceBetween: 32,
        watchOverflow: true,
        threshold: 20,
        navigation: {
            nextEl: t.closest('.news').find('.slider-arrow-next')[0],
            prevEl: t.closest('.news').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0: {
                slidesPerView: 1.33,
                spaceBetween: 13,
            },
            468: {
                slidesPerView: 1.33,
                spaceBetween: 13,
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: prevItems() >= 4 ? 3 : 2
            },
            1152: {
                slidesPerView: prevItems()
            }
        }
    });
});
$('.p-imo__forwhom-slider').each(function () {
    var slider;
    var t = $(this),
        $items = t.find('.p-imo__forwhom-grid-item');

    //console.log((window.matchMedia('(min-width: 768px)').matches));

    if (window.matchMedia('(max-width: 1279px) and (min-width: 768px)').matches || ($items.length > 4 && window.matchMedia('(min-width: 768px)').matches)) {
        initSlider(t);
    }
    // $(window).on('resize', initSlider);
    function initSlider(t) {
        if (!slider) {
            slider = new Swiper(t[0], {
                speed: 400,
                loop: false,
                spaceBetween: 32,
                watchOverflow: true,
                threshold: 20,
                slidesPerView: 1.55,
                pagination: {
                    el: t.find('.slider-dots')[0],
                    type: 'bullets',
                    clickable: true
                },
                navigation: {
                    nextEl: t.closest('.p-imo__forwhom-slider').find('.slider-arrow-next')[0],
                    prevEl: t.closest('.p-imo__forwhom-slider').find('.slider-arrow-prev')[0]
                },
                breakpoints: {
                    1280: {
                        slidesPerView: 4,
                    },
                }
            });
        }
    }
});
$('.news-slider-large').each(function () {
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: false,
        spaceBetween: 16,
        watchOverflow: true,
        navigation: {
            nextEl: t.closest('.news').find('.slider-arrow-next')[0],
            prevEl: t.closest('.news').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto'
            },
            767: {
                slidesPerView: 2
            }
        }
    });
});
$('.partners-slider').each(function () {
    var slider;
    var t = $(this);
    initSlider();
    $(window).on('resize', initSlider);

    function initSlider() {
        if (window.matchMedia('(min-width:1152px)').matches) {
            if (!slider) {
                slider = new Swiper(t[0], {
                    speed: 400,
                    loop: false,
                    slidesPerView: 4,
                    spaceBetween: 16,
                    navigation: {
                        nextEl: t.closest('.slider-wrapp').find('.slider-arrow-next')[0],
                        prevEl: t.closest('.slider-wrapp').find('.slider-arrow-prev')[0]
                    }
                });
            }
        } else {
            if (slider) {
                slider.destroy(true, true);
                slider = null;
            }
        }
    }
});

// $(document).ready(function () {

//     var $root = $('html, body');

//     $('a[href^="#"]').click(function () {
//         if($(this).parents('.info-page-manu-ln').length > 0) {
//             return false;
//         }
//         $root.animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 500);
//         $('.state-selected').removeClass('state-selected');
//         $(this).addClass('state-selected');
//         return false;
//     });

// });

function setDevicesSliderHeight(slider) {
    slider.css('height', 'auto')
    let height = 0;
    let countHeight = 0;
    slider.find('.devices-slide').each(function (index) {
        index++;
        countHeight += $(this).innerHeight();
        console.log($(this).innerHeight());
        if (index % 2 === 0) {
            if (countHeight > height) height = countHeight;
            countHeight = 0;
        }
    })
    height += 16;
    slider.css('height', height);
}

$('.devices-slider').each(function () {
    var slider;
    var t = $(this);
    initSlider();
    $(window).on('resize', initSlider);

    function initSlider() {
        if (window.matchMedia('(min-width:1152px)').matches) {
            if (!slider) {
                slider = new Swiper(t[0], {
                    speed: 400,
                    loop: false,
                    slidesPerView: 1,
                    navigation: {
                        nextEl: t.closest('.slider-wrapp').find('.slider-arrow-next')[0],
                        prevEl: t.closest('.slider-wrapp').find('.slider-arrow-prev')[0]
                    },
                    on: {
                        init: function () {
                            setDevicesSliderHeight(t);
                        },
                        resize: function () {
                            setDevicesSliderHeight(t);
                        },
                    }
                });
            }
        } else {
            if (slider) {
                slider.destroy(true, true);
                slider = null;
            }
        }
    }
});
/* home-accelerator-img */
// setPositionHomeImages();
// $(window).on('resize', setPositionHomeImages);
// function setPositionHomeImages(){
// if(window.matchMedia('(max-width:767px)').matches) return;
// $('.home-fixed-img').each(function(){
// const t = $(this);
// const width = t.innerWidth();
// const offset = $(window).width() - (t.offset().left + width);
// this.style.setProperty('--background-size', `${width}px`);
// this.style.setProperty('--background-position-x', `right ${offset}px`);
// })
// }

$(window).on('load scroll resize', function () {
    if (window.matchMedia('(max-width:767px)').matches) return;
    var scrollTop = $(this).scrollTop();
    var wHeight = $(this).height();
    $('.home-accelerator-content+.home-fixed-img').each(function () {
        var t = $(this);
        var offsetTop = t.offset().top;
        var height = t.innerHeight();

        if (scrollTop + wHeight > offsetTop) {
            var translateY = ((scrollTop + wHeight - offsetTop) / height * 200) - scrollTop * .03;
            if (translateY < 160) {
                translateY = 160;
            }


            t.css('transform', "translate3d(0, ".concat(translateY, "px, 0)"));
        }
    });
});
/* inputs */

var onAutoFillStart = function onAutoFillStart(el) {
    el.closest('.form-block').classList.add('focus');
};

var onAutoFillCancel = function onAutoFillCancel(el) {// el.closest('.form-block').classList.remove('focus')
};

var onAnimationStart = function onAnimationStart(_ref) {
    var target = _ref.target,
        animationName = _ref.animationName;

    switch (animationName) {
        case 'onAutoFillStart':
            return onAutoFillStart(target);

        case 'onAutoFillCancel':
            return onAutoFillCancel(target);
    }
};

$(document).on('input', '.textarea', function () {
    this.parentNode.dataset.replicatedValue = this.value;
});
document.querySelectorAll('.input').forEach(function (el) {
    el.addEventListener('animationstart', onAnimationStart, false);
});
$(document).on('focus', '.input', function () {
    $(this).closest('.form-block').addClass('focus');
});
$(document).on('blur', '.input', function () {
    var t = $(this);

    if (t.val() !== '') {
        t.closest('.form-block').addClass('focus');
    } else {
        t.closest('.form-block').removeClass('focus');
    }
});
$(document).on('focus', '.input[required]', function () {
    $(this).closest('.form-block').removeClass('not-valid valid');
});
$(document).on('input change', '[required]', function () {
    var _this = this;

    setTimeout(function () {
        return validateInput($(_this));
    }, 100);
    var validForm = true;
    var form = $(this).closest('.form');
    form.find('[required]').each(function () {
        if (!validateInput($(this), true)) {
            validForm = false;
            return false;
        }
    });

    if (validForm) {
        form.find('.submit').removeClass('btn-red--disabled');
    } else {
        form.find('.submit').addClass('btn-red--disabled');
    }
});
$(document).on('blur', '[required]', function () {
    var _this2 = this;

    setTimeout(function () {
        return validateInput($(_this2));
    }, 100);
});

function validateInput(t, skipState) {
    var valid = true;
    if (!t.val()) valid = false;

    if (t.attr('type') == 'email') {
        if (!validateEmail(t.val())) valid = false;
    }

    if (t.attr('type') == 'checkbox') {
        if (t.prop('checked')) {
            valid = true;
        } else {
            valid = false;
        }
    }

    if (t.attr('type') == 'radio') {
        var radioChecked = false;
        $('[name="' + t.attr('name') + '"]').each(function () {
            if ($(this).prop('checked')) {
                radioChecked = true;
                return false;
            }
        });
        if (!radioChecked) valid = false;
    }

    if (skipState) return valid;

    if (!valid) {
        t.closest('.form-block').removeClass('valid');
        t.closest('.form-block').addClass('not-valid');
    } else {
        t.closest('.form-block').removeClass('not-valid');
        t.closest('.form-block').addClass('valid');
    }

    return valid;
}

function validateEmail(email) {
    var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return re.test(email);
}

/* checkbox */


$(document).on('change', '.checkbox-input', function () {
    var t = $(this);

    if (t.prop('checked')) {
        t.closest('label').addClass('active');
    } else {
        t.closest('label').removeClass('active');
    }
});
/* form */
function getVal(el){
    var full_number = $('#phone').next().val()
    if(el.attr('id')==='phone'){
        return full_number
    }else{
        return el.val()
    }
}

$(document).on('submit', '.form', function (event) {
    event.preventDefault();
    var t = $(this);
    var formData = new FormData();
    formData.append('action', 'form_action');
    t.find('[name]:not([type="file"], [type="checkbox"], [type="radio"])').each(function () {
        formData.append($(this).attr('name'), getVal($(this)));
    });
    t.find('[name][type="checkbox"], [name][type="radio"]').each(function (index) {
        if ($(this).prop('checked')) {
            formData.append($(this).attr('name'), $(this).val());
        }
    });
    var files = t.find('.file-input').length ? t.find('.file-input')[0].files : false;

    if (files) {
        [].slice.call(files).forEach(function (item, index) {
            formData.append('file-' + index, files[index], item.name);
        });
    }
    // for (var pair of formData.entries()) {
    // console.log(pair[0]+ ', ' + pair[1]);
    // }

    ;

    if (!showErr(t)) {
        return false;
    }
    console.log(formData);
    dataLayer.push({'event': 'fields'});

    var vkGoal = t.attr('data-vk-goal');
    var pixelMailEvent = t.attr('data-pixel-mail');

    $.ajax({
        url: SITE_URL + '/wp-admin/admin-ajax.php',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function() {
            t.find('.btn').attr('disabled','disabled');
        },
        success: function success(answer) {
            if(answer == 'error') {
                t.find('.btn').removeAttr('disabled');
                return;
            }
            if(vkGoal){
                VK.Goal(vkGoal);
            }
            if(pixelMailEvent) {
                _tmr.push({ type: 'reachGoal', id: 3288155, goal: pixelMailEvent});
            }
            if (t.find('[name="form-redir"]').length > 0) {
                document.location.href = t.find('[name="form-redir"]').val();
                return;
            }

            t.find('.submit').removeAttr('disabled');
            t.find('.btn').removeAttr('disabled');
            t.find('.input').each(function () {
                $(this).val('');
            });
            t.find('.form-block').removeClass('focus value valid not-valid');
            t.find('.file-input').val('');
            t.find('.file-label').removeClass('active');
            t.find('[name][type="checkbox"], [name][type="radio"]').prop('checked', false).closest('label').removeClass('active');


            if (t.hasClass('form__subscribe')) {
                Modal.openModal('modal-thunks');
            } else {
                Modal.openModal('modal-sent');
            }


            var event = t.data('gtag-event');
            if (!event) return;
            var label = t.data('gtag-event-label') || '';
            var category = t.data('gtag-event-category') || 'edge_ai';
            if (t.hasClass('form')) {
                gtag('event', event, {
                    'event_category': category,
                    'event_label': label
                });
            }
        }
    });
});
/* blog-main-article */

$('.blog-main-article').theiaStickySidebar({
    additionalMarginTop: 80
});
/* get posts */

$(document).on('click', '.get-posts-btn', function () {
    var t = $(this);
    if (t.hasClass('loading')) return;
    t.addClass('loading');
    var offset = t.data('offset');
    var foundPosts = t.data('found_posts');
    var args = {
        posts_per_page: 8,
        fields: 'ids',
        offset: offset
    };
    var category = t.data('category');

    if (category !== '*') {
        args.category_name = category;
    }

    var postType = t.data('post-type');

    if (postType) {
        args.post_type = postType;
    }

    var postNotIn = String(t.data('post__not_in'));

    if (postNotIn) {
        var postNotInArr = postNotIn.split(',');
        args.post__not_in = postNotInArr;
    }

    ajaxGetPosts('mtsai_get_articles', args, function (answer) {
        setTimeout(function () {
            if (answer) {
                $('.blog-list-more').append("<div class=\"blog-more\">\n\t\t\t\t\t<div class=\"blog-list-row flex-row\">\n\t\t\t\t\t\t".concat(answer, "\n\t\t\t\t\t</div>\n\t\t\t\t</div>"));
                $('.blog-more').slideDown(400);
            }

            t.data('offset', offset + args.posts_per_page);

            if (foundPosts === $('.blog-list-col').length) {
                t.closest('.read-more-btn-wrapp').addClass('hide');
            }

            t.removeClass('loading');
        }, 400);
    });
    return false;
});
$(document).on('click', '.blog-list-menu a', function () {
    var t = $(this);
    $('.blog-list-nav').removeClass('active');
    $('.blog-list-nav-active span').text(t.text());
    if (t.parent().hasClass('active')) return false;
    $('.blog-list-menu').addClass('disabled');
    $('.blog-list-menu li').removeClass('active');
    t.parent().addClass('active');
    $('.blog-list-row').addClass('hide');
    var args = {
        posts_per_page: -1,
        fields: 'ids'
    };
    var category = t.data('category');

    if (category !== '*') {
        args.category_name = category;
    }

    var postNotIn = String(t.closest('.blog-list-menu').data('post__not_in'));

    if (postNotIn) {
        var postNotInArr = postNotIn.split(',');
        args.post__not_in = postNotInArr;
    }

    ajaxGetPosts('mtsai_get_articles', args, function (answer) {
        setTimeout(function () {
            $('.blog-list-more').html('');
            $('.blog-list-row').html(answer);
            $('.blog-list-row').removeClass('hide');
            $('.blog-list-menu').removeClass('disabled');
            var foundPosts = $('.blog-list-col:first-child').data('found-posts');

            if (foundPosts < 8 || !answer) {
                $('.read-more-btn-wrapp').addClass('hide');
            } else {
                var btn = $('.get-posts-btn');
                btn.data('offset', 8);
                btn.data('category', category);
                btn.data('found_posts', foundPosts);
                btn.data('post__not_in', postNotIn);
                $('.read-more-btn-wrapp').removeClass('hide');
            }
        }, 200);
    });
    return false;
});
$(document).on('click', '.blog-list-nav-active', function () {
    $('.blog-list-nav').toggleClass('active');
    return false;
});

function ajaxGetPosts(action, args, callback, $wrap = false) {
    var data = {
        action: action,
        args: args
    };
    Object.keys(args).forEach(function (key) {
        data[key] = args[key];
    });
    // console.log(data);
    $.ajax({
        url: SITE_URL + '/wp-admin/admin-ajax.php',
        type: 'POST',
        data: data,
        beforeSend: function() {
            if($wrap) {
                $wrap.css('opacity', .3)
            }
        },
        success: function success(answer) {
            if (callback) callback(answer);
            if($wrap) {
                $wrap.css('opacity', 1)
            }
        }
    });
}

/* share */


$(document).on('click', '.share-link', function () {
    var t = $(this);
    var url = t.attr('href');
    var title = t.closest('.share-list').data('title');
    var width = 600;
    var height = 600;
    var left = screen.width / 2 - width / 2;
    var top = screen.height / 2 - height / 2;
    window.open(url, title, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=".concat(width, ", height=").concat(height, ", top=").concat(top, ", left=").concat(left));
    return false;
});
/* share-copy-link */

$(document).on('click', '.share-copy-link', function () {
    var t = $(this);
    copyTextToClipboard(t.data('link'));
    t.addClass('active');
    setTimeout(function () {
        t.removeClass('active');
    }, 2000);
    return false;
});

function fallbackCopyTextToClipboard(text) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    };
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.bottom = '100%';
    textarea.style.right = '100%';
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
        var successful = document.execCommand('copy');
        callback();
    } catch (err) {
        console.error(err);
    }

    document.body.removeChild(textarea);
}

function copyTextToClipboard(text) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    };

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text, callback);
        return;
    }

    navigator.clipboard.writeText(text).then(function () {
        callback();
    }, function (err) {
        console.error(err);
    });
}

/* form-section */


$(window).on('load scroll resize', function () {

    var section = $('.form-section');
    if (!section.length) return;
    var scrollTop = $(this).scrollTop();
    var offsetTop = section.offset().top;
    var wHeight = $(this).height();

    if (wHeight + scrollTop >= offsetTop) {
        $('html').css('min-height', $('html').innerHeight());
        $('html').addClass('form-section-active');
    } else {
        $('html').removeClass('form-section-active');
        $('html').css('min-height', 0);
    }

    if (wHeight / 2 + scrollTop >= offsetTop) {
        $('html').addClass('form-section-is-visible');
    } else {
        $('html').removeClass('form-section-is-visible');
    }
});

function highlight(){
    let content = $('.md__content')
    let startHeight= []
    let finishHeight= []
    let scroll = $(window).scrollTop() + 80;
    let $links = $('.menu__aside .scroll-to-btn');
    let $test = content.find('[id]').not('span, strong, p, a, td')
    $test.each(function () {
        startHeight.push($(this).offset().top)
        finishHeight.push($(this).offset().top)
    });
    finishHeight.shift();
    if ($(window).width() > 767){
        for (let i=0;i<=finishHeight.length;i++){
            if (scroll >= startHeight[i] && scroll < finishHeight[i]){
                const $current = $(`.menu__aside .scroll-to-btn[data-num="section-${i}"]`)
                $links.removeClass('active');
                $current.addClass('active');
                let $parents = $current.parents('.sub-menu');
                $parents.each(function(){
                    if($(this).css('display') == 'none'){
                        $(this).prev().addClass('active')
                    }
                })
            }
        }
    } else {
        for (let i=0;i<=finishHeight.length;i++){
            if ((scroll + 120)>= startHeight[i] && (scroll + 120) < (finishHeight[i] + 120)){
                const $current = $(`.menu__aside .scroll-to-btn[data-num="section-${i}"]`)
                $links.removeClass('active');
                $current.addClass('active');
                let $parents = $current.parents('.sub-menu');
                $parents.each(function(){
                    if($(this).css('display') == 'none'){
                        $(this).prev().addClass('active')
                    }
                })
            }
        }
    }
}
$(window).on('load scroll resize', function () {
    highlight()
});
let $ids = $('.md__content').find('a[id]');

if($ids){
    $ids.each(function(){
        let href = $(this).attr('href');
        $(this).attr({
            'id' : '',
            'href' : '',
            'data-href' : href
        })
        $(this).addClass('scroll-to-btn')
    })}
/* scroll */

$('.scroll-to-btn').on('click', function () {
    let offset;
    if($(window).width() > 767){
        offset = $(this).data('scroll-offset') !== undefined ? $(this).data('scroll-offset') : 80;
    } else {
        offset = $(this).data('scroll-offset') !== undefined ? $(this).data('scroll-offset') : 120;
    }
    if($(this).attr('data-href')) {
        scrollToBlock($(this).attr('data-href'), 1000, offset);
    } else {
        scrollToBlock($(this).attr('href'), 1000, offset);
    }
    return false;
});

function scrollToBlock(to, speed, offset) {
    if (typeof to === 'string') to = $(to);
    if (!to[0]) return;
    offset = offset || 0;
    speed = speed || 1000;
    $('html, body').stop().animate({
        scrollTop: to.offset().top - offset
    }, speed);
}



/* file */


$(document).on('change', '.file-input', function (event) {
    var t = $(this);
    var label = t.closest('.file-label');
    var title = label.find('.file-title-name');
    var fileName = '';

    if (t[0].files && t[0].files.length > 1) {
        fileName = t[0].files.length + ' Files';
    } else {
        fileName = event.target.value.split('\\').pop();
    }

    if (fileName) {
        title.text(fileName);
        label.addClass('active');
    } else {
        label.removeClass('active');
    }
});
$(document).on('dragenter', '.file-input', function () {
    $(this).closest('.file-label').addClass('hover');
});
$(document).on('dragleave drop', '.file-input', function () {
    $(this).closest('.file-label').removeClass('hover');
});
/* page-404-img */

if ($('.page-404').length) {
    var cursor = $('.page-404-cursor');
    var img = $('.page-404-img-hover');
    $(document).on('mouseenter mousemove', '.page-404-img', function (event) {
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        cursor.addClass('active');
        cursor.css({
            left: event.clientX,
            top: event.clientY
        });
        img.css('clip-path', "circle(100px at ".concat(x, "px ").concat(y, "px)"));
    });
    $(document).on('mouseleave', '.page-404-img', function () {
        cursor.removeClass('active');
        img.css('clip-path', 'circle(0 at 0 0)');
    });
}
/* anim */


$('[data-anim]').each(function () {
    var t = $(this);
    var animClass = t.data('anim') || 'anim';
    var offset = t.data('offset') || '90%';
    var timeout = t.data('timeout');
    t.waypoint({
        handler: function handler(direction) {
            if (direction === 'down') {
                if (t.hasClass(animClass)) return;

                if (timeout) {
                    t.css('transition-delay', timeout + 'ms');
                }

                setTimeout(function () {
                    return t.addClass(animClass);
                }, 200);
            }
        },
        offset: offset
    });
});
/* modal-program-details */

$('#modal-program-details .modal-wrapp').on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var closeBtn = $('#modal-program-details .modal-close-btn');
    var paddingTop = parseInt($(this).css('padding-top'));

    if (scrollTop > paddingTop) {
        var body = $(this).find('.modal-body');
        var left = body.offset().left + body.innerWidth() - 60;
        if (window.matchMedia('(max-width:767px)').matches) left += 20;
        closeBtn.addClass('fixed').css('left', left);
    } else {
        closeBtn.removeClass('fixed').css('left', 'auto');
    }
});
/* about-mission */

$('.about-mission').theiaStickySidebar({
    additionalMarginTop: 80
});
/* single-share */

$('.single-share').theiaStickySidebar({
    additionalMarginTop: 120
});
/* cookie */

if (!localStorage.getItem('cookie')) {
    $('.cookie').addClass('active');
}

$(document).on('click', '.cookie-close-btn', function () {
    localStorage.setItem('cookie', true);
    $('.cookie').removeClass('active');
    return false;
});
$(document).on('click', '.cookie-close-link', function () {
    localStorage.setItem('cookie', true);
});
/* gtag */

$('[data-gtag-event]').each(function () {
    var t = $(this);
    var event = t.data('gtag-event');
    var label = t.data('gtag-event-label') || '';
    var category = t.data('gtag-event-category') || 'edge_ai';
    t.on('click', function () {
        if (t.hasClass('form')) return;
        if (!gtag) return;

        gtag('event', event, {
            'event_category': category,
            'event_label': label
        });
    });
});

if (document.querySelector('.footer-menu a[href*="usage-policy"]')) {
    document.querySelector('.footer-menu a[href*="usage-policy"]').classList.add('cookies_policy');
    document.querySelector('.footer-menu a[href*="usage-policy"]').addEventListener('click', (e) => {
        gtag('event', 'click_footer', {
            'event_category': '/',
            'event_label': 'cookies_policy '
        });
    });
}
if (document.querySelector('.footer-menu a[href*="privacy-policy"]')) {
    document.querySelector('.footer-menu a[href*="privacy-policy"]').classList.add('terms_of_use');
}

$('[data-layer-event]').each(function () {
    var t = $(this);
    var event = t.data('layer-event');
    var label = t.data('layer-event-label') || '';
    var category = t.data('layer-event-category') || 'edge_ai';
    t.on('click', function () {
        if (t.hasClass('form')) return;
        if (!gtag) return;

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event',
            'eventCategory': category,
            'eventAction': event,
            'eventLabel': label
        })

    });
});
/* fbq */

$('[data-fbq]').each(function () {
    var t = $(this);
    var event = t.data('fbq') || 'trackSingleCustom';
    var type = t.data('fbq-type') || 'new_users_registration';
    t.on('click', function () {
        if (!fbq) return;
        fbq(event, type);
    });
});
/* mentors */

$(document).on('click', '.mentor-item-link', function () {
    var t = $(this);
    if (t.hasClass('disabled')) return false;
    $('.mentor-item-link').addClass('disabled');
    var postID = t.data('post-id');
    var formData = new FormData();
    formData.append('action', 'mtsai_get_mentor_post');
    formData.append('post_id', postID);
    $.ajax({
        url: SITE_URL + '/wp-admin/admin-ajax.php',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function success(answer) {
            $('.modal-mentor-content').html(answer);
            $('.mentor-body .mentor-content').css('min-height', $('.mentor-aside')[0].scrollHeight);
            Modal.openModal('modal-mentor');
            $('.mentor-body').on('scroll', function () {
                $('.mentor-aside').scrollTop($(this).scrollTop());
            });
            $('.mentor-item-link').removeClass('disabled');
        }
    });
    return false;
});

$(document).ready(function () {
    $(document).on('click', '.header li, .footer li, .header .logo, .header .lang-item, .footer .footer-email', function (e) {
        menu_gtag($(this));
    })
})

function menu_gtag(t) {
    var page = window.location.pathname.replace('/ru/', '').replaceAll('/', ''),
        pageEvent,
        zone,
        eventLbl,
        arrEvent = [],
        activeElem;

    arrEvent['menu-item-1649'] = 'edje_ai_header';
    arrEvent['menu-item-1647'] = 'edje_ai_header';
    arrEvent['menu-item-30'] = 'blog_header';
    arrEvent['menu-item-240'] = 'blog_header';
    arrEvent['footer-email'] = 'email_info@mts.ru';
    arrEvent['tw'] = 'go_to_twitter';
    arrEvent['fb'] = 'go_to_facebook';
    arrEvent['in'] = 'go_to_linkedin';
    arrEvent['inst'] = 'go_to_instagram';
    arrEvent[''] = 'goto_fund';

    switch (page) {
        case 'about':
        case 'about-us':
            pageEvent = 'about-us';
            break;
        case 'ai-inside':
        case 'blog':
            pageEvent = 'blog';
            break;
        case 'fund':
            pageEvent = 'fund';
            break;
        case 'accelerator':
            pageEvent = 'accelerator';
            break;
        default:
            pageEvent = '/';
    }

    if (t.parents('.header').length != 0) {
        zone = 'click_menu';
    }

    if (t.parents('.footer').length != 0) {
        zone = 'click_footer';
    }
    var classList = t.attr('class').split(/\s+/);
    $.each(classList, function (index, item) {
        if (arrEvent[item]) {
            activeElem = arrEvent[item];
        }
    });

    // gtag('event', 'click',
    //     {
    //         'event_category': 'edge_ai',
    //         'event_label': activeElem
    //     }
    // );

}


/* gtag при скролле поста блога до конца */
$(document).ready(function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ссылка на оригинальное изображение хранится в атрибуте "data-src"
                gtag('event', 'click_menu', {
                    'event_category': 'blog',
                    'event_label': 'end_post'
                });

                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 1 })

    $('.single-content.content-text p:last-child').each(function (index, item) {
        observer.observe(item);
    });
});

/* page-info */

$('.info-page-col-nav').theiaStickySidebar({
    additionalMarginTop: 100
});
$('body').scrollspy({
    target: '.info-page-nav',
    offset: 100
});
$('.info-page-manu a').on('click', function () {
    scrollToBlock($(this).attr('href'), 1000, 72);
    return false;
});

$(document).on('click', '.info-section-title, .info-page-title', function () {
    if (window.matchMedia('(min-width:768px)').matches) return;
    var t = $(this);
    t.toggleClass('active');
    t.closest('.info-section').find('.info-section-body').slideToggle(400);
});

$(document).ready(function () {
    var promo = new Swiper('.promo-imgs', {
        speed: 400,
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 0,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
    });
    $(document).on('click', '[data-layer]', function () {
        var lableName = $(this).attr('data-layer');

        dataLayer.push({ 'event': lableName });
    })

    $(document).on('click', '[data-setup-cookie]', function () {
        Modal.openModal('modal-cookie');
    })
    $(document).on('click', '[data-cookie-close]', function () {
        var $analitic = $('.modal__body--cookie input[name="analitic"]'),
            $market = $('.modal__body--cookie input[name="market"]'),
            $third = $('.modal__body--cookie input[name="third"]');

        setCookie('ANALITICS_HIDE', !$analitic.prop('checked') ? 1 : 0);

        setCookie('MARKET_HIDE', !$market.prop('checked') ? 1 : 0);
        setCookie('THIRD_HIDE', !$third.prop('checked') ? 1 : 0);
        localStorage.setItem('cookie', true);

        location.reload();

        Modal.closeModal('modal-cookie');
    })
    !(function() {
        var lastIndex;
        var promo = new Swiper('.lnews__slider', {
            speed: 400,
            slidesPerView: 1.4,
            spaceBetween: 32,
            pagination: {
                el: $('.lnews__nav_init').find('.slider-dots')[0],
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                prevEl: $('.lnews .lnews__nav_init').find('.lnews__arrow')[0],
                nextEl: $('.lnews .lnews__nav_init').find('.lnews__arrow+.lnews__arrow')[0]
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.33,
                    spaceBetween: 11.8,
                },
                376: {
                    slidesPerView: 1.33,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
                1051: {
                    slidesPerView: 3
                },
                1279: {
                    slidesPerView: 3
                }
            },
            on: {
                init: function(q) {
                    var $zeroEl = $('.lnews .lnews__nav_init');
                    if(q.slides.length > 5) {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }
                },
                activeIndexChange: function(q) {
                    var $zeroEl = $('.lnews .lnews__nav_init'),
                        $activeBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+1)+')'),
                        $prevActiveBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+2)+')'),
                        activeBulPos = $activeBull.position().left;
                    if($prevActiveBull.length > 0) {
                        var prevActiveBulPos = $prevActiveBull.position().left;
                    }
                    if(q.activeIndex > 2) {
                        $zeroEl.addClass('lnews__nav--active-left');
                    } else {
                        $zeroEl.removeClass('lnews__nav--active-left');
                    }
                    if(q.activeIndex > (q.slides.length - 3 - q.params.slidesPerView)) {
                        $zeroEl.removeClass('lnews__nav--active-right');
                    } else {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }

                    if(activeBulPos > center) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = activeBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - center;
                    }
                    if ($prevActiveBull.length > 0 && lastIndex > q.activeIndex+1) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = prevActiveBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - 8 - center;
                    }

                    lastIndex = q.activeIndex+1;
                }
            }
        });
        if($('.lnews__nav_init').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').length > 0) {
            var center = $('.lnews__nav_init').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').position().left
        }
        var apl = new Swiper('.p-vsaas__apl-swiper', {
            speed: 400,
            slidesPerView: 1.55,
            spaceBetween: 32,
            observer:true,
            pagination: {
                el: $('.p-vsaas__apl-swiper-controls').find('.slider-dots')[0],
                type: 'bullets',
                clickable: true
            },
            navigation: {
                prevEl: $('.p-vsaas__apl-swiper-controls').find('.slider-arrow')[0],
                nextEl: $('.p-vsaas__apl-swiper-controls').find('.slider-arrow+.slider-arrow')[0]
            },
            breakpoints:{
                551:{
                    slidesPerView: 1.55,
                    direction:'horizontal',
                },
                0:{
                    slidesPerView: 'auto',
                    direction:'vertical',
                    spaceBetween: 40,
                }
            },
            on: {
                init: function(q) {
                    var $zeroEl = $('.p-vsaas__applied .p-vsaas__apl-swiper-controls');
                    if(q.slides.length > 5) {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }
                },
                activeIndexChange: function(q) {
                    var $zeroEl = $('.p-vsaas__applied .p-vsaas__apl-swiper-controls'),
                        $activeBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+1)+')'),
                        $prevActiveBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+2)+')'),
                        activeBulPos = $activeBull.position().left;
                    if($prevActiveBull.length > 0) {
                        var prevActiveBulPos = $prevActiveBull.position().left;
                    }
                    if(q.activeIndex > 2) {
                        $zeroEl.addClass('lnews__nav--active-left');
                    } else {
                        $zeroEl.removeClass('lnews__nav--active-left');
                    }
                    if(q.activeIndex > (q.slides.length - 3 - q.params.slidesPerView)) {
                        $zeroEl.removeClass('lnews__nav--active-right');
                    } else {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }

                    if(activeBulPos > center) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = activeBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - center;
                    }
                    if ($prevActiveBull.length > 0 && lastIndex > q.activeIndex+1) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = prevActiveBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - 8 - center;
                    }

                    lastIndex = q.activeIndex+1;
                }
            }
        });
        if($('.p-vsaas__apl-swiper-controls').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').length > 0) {
            var center = $('.p-vsaas__apl-swiper-controls').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').position().left
        }
    })()


    if (!window.matchMedia('(min-width:768px)').matches) {
        $(document).on('click', '.info-section', function () {
            var t = $(this);

            if ($('.info-page-row__cookie').hasClass('info-page-row__list')) return;

            t.toggleClass('info-page-title--active').find('.info-section-text').slideToggle();
        })
    }

    /* Check dark */
    if ($('html').hasClass('dark_bg')) {
        $('.header .container').addClass('container--dark');
    }
})

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
$(document).ready(function () {
    $('.marq__text').marquee({
        duration: 15000,
        delayBeforeStart: 0,
        gap: 50,
        direction: 'left',
        duplicated: true
    });

    var case_timer = 5000;
    var promo_timer = 5000;
    var swiper_case = new Swiper('.case__slider', {
        watchSlidesProgress: true,
        // autoplay: {
        //     delay: case_timer,
        //     disableOnInteraction: false,
        // },
        effect: "fade",
        // navigation: {
        //     nextEl: ".case__right",
        //     prevEl: ".case__left",
        // },
        onlyExternal: true,
        allowTouchMove: false,
        loop: true,
        on: {
            activeIndexChange: slideTimer
        }
    });

    if($('.case__slider-mobile').length>0){
        var slider = new Swiper('.case__slider-mobile', {
            speed: 400,
            loop: true,
            spaceBetween: 12,
            watchOverflow: true,
            slidesPerView:1.5,
            pagination: {
                el: $('.lnews__nav').find('.slider-dots')[0],
                type: 'bullets',
                clickable: true
            },
            navigation: {
                prevEl: $('.case .lnews__nav').find('.lnews__arrow')[0],
                nextEl: $('.case .lnews__nav').find('.lnews__arrow+.lnews__arrow')[0]
            },

        });

    }

    if($('.promo-swiper .promo-slide').length > 1) {
        var swiper_banner = new Swiper('.promo-swiper', {
            watchSlidesProgress: true,
            autoplay: {
                delay: promo_timer,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".prom__right",
                prevEl: ".prom__left",
            },
            speed: 800,
            onlyExternal: true,
            // allowTouchMove: false,
            loop: true,
            on: {
                activeIndexChange: slideTimerPromo,
            }
        });
    } else {
        $('.promo-swiper .promo-slide').addClass('swiper-slide-active')
    }

    $(document).on('click', '[data-promo-page]', function () {
        var t = $(this),
            num_page = t.attr('data-promo-page');

        swiper_banner.slideTo(num_page);
    })

    $(document).on('click', '[data-case-page]', function () {
        var t = $(this),
            num_page = t.attr('data-case-page');

        num_page > swiper_case.activeIndex ? rightSlide() : leftSlide();

        setTimeout(function () {
            swiper_case.slideTo(num_page);
        }, 900)
    })

    $(document).on('change input', '[data-requied]', function () {
        var t = $(this),
            parent = t.parents('form'),
            success = true;

        parent.find('[data-requied]').each(function () {
            var $input = $(this);

            if ($input.find('input').length > 0) {
                if ($input.find('input').val() === '') success = false;
            }

            if ($input.find('textarea').length > 0) {
                if ($input.find('textarea').val() === '') success = false;
            }

            if ($input.find('input[type="checkbox"]').length > 0) {
                if (!$input.find('input[type="checkbox"]').prop('checked')) success = false;
            }

            if ($input.find('input[type="radio"]').length > 0) {
                if($input.find('input[type="radio"]:checked').length == 0) success = false;
            }

            /* success code */

            if (success) {
                parent.find('[data-checkbox-btn]').removeClass('btn-red--disabled');
                parent.addClass('sent-to-ga');
            } else {
                parent.find('[data-checkbox-btn]').addClass('btn-red--disabled')
                parent.removeClass('sent-to-ga');
            }
        })
    })

    $(document).on('click', '.case__right', function () {
        rightSlide()
        setTimeout(function () {
            swiper_case.slideNext();
        }, 900)
    });
    $(document).on('click', '.case__left', function () {
        leftSlide()
        setTimeout(function () {
            swiper_case.slidePrev();
        }, 900)
    });

    $(document).on('input change', '.has-error input', function () {
        var t = $(this);
        if(t.attr('type') == 'checkbox' && t.prop('checked') == true){
            t.parents('.has-error').removeClass('has-error');
        }
        // t.parents('.has-error').removeClass('has-error');

    })
})

var circulTimer;
var circulTimerDelay;

function slideTimer(swiper) {
    var delay = 20000;
    var activeIndex = ++swiper.realIndex;
    var isNext = swiper.previousIndex < swiper.activeIndex;
    $('.case__bar--status').removeAttr('style');
    $('.case__col--active').removeClass('case__col--active');
    $('[data-case-page=' + activeIndex + ']').addClass('case__col--active');

    $('.case__col--active .case__bar--status').css('width', 0);
    $('.case__col--active .case__bar--status').stop(true).animate({
        width: '100%'
    }, delay)

    clearTimeout(circulTimerDelay);
    clearTimeout(circulTimer);

    circulTimerDelay = setTimeout(function () {
        rightSlide();
    }, delay - 600)

    circulTimer = setTimeout(function () {
        swiper.slideNext();
    }, delay)
}

function slideTimerPromo(swiper) {
    var activeIndex = ++swiper.realIndex;
    $('.pagin__progress--active').removeAttr('style');
    $('.pagin__progress--active').removeClass('pagin__progress--active');
    $('[data-promo-page=' + activeIndex + ']').addClass('pagin__progress--active');

    $('.pagin__progress--active .pagin__progress--status').css('width', 0);
    $('.pagin__progress--active .pagin__progress--status').stop(true).animate({
        width: '100%'
    }, swiper.params.autoplay.delay)
}

var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
    if (click) {
        sliding = true;
        curpage--;
        svg = true;
        setTimeout(() => {
            move();
        }, 1);
    }
}

function rightSlide() {
    if (click) {
        sliding = true;
        curpage++;
        svg = false;
        setTimeout(() => {
            move();
        }, 1);;
    }
}

function move() {
    if (sliding) {
        sliding = false;
        if (svg) {
            for (j = 1; j <= 9; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
            }
        } else {
            for (j = 10; j <= 18; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
            }
        }
        setTimeout(() => {
            sliding = true;
        }, 600);
        setTimeout(() => {
            click = true;
        }, 1700);

        setTimeout(() => {
            if (svg) {
                for (j = 1; j <= 9; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", transitionPrefix + j + " steap");
                }
            } else {
                for (j = 10; j <= 18; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", transitionPrefix + j + " steap");
                }
                sliding = true;
            }
        }, 850);
        setTimeout(() => {
            click = true;
        }, 1700);
    }
}

function showErr(form) {
    var success = true;
    form.find('[data-check]').each(function () {
        var elem_success = true;
        var t = $(this);
        $input = t.find('input'),
            $error = t.find('.invalid-feedback');

        if ($input.val() == '' || ($input.attr('type') == 'checkbox' && $input.prop('checked') == false)) {
            t.addClass('has-error');

            success = false;
            elem_success = false;
        }

        if ($input.attr('name') == 'email' && !validateEmail($input.val())) {
            t.addClass('has-error');

            success = false;
            elem_success = false;
        }

        if(t.find('.mixed-choices').length > 0) {
            if(t.find('.pnp-checkboxes input:checked').length < 1) {
                t.addClass('has-error');

                success = false;
                elem_success = false;
            }
        }
        if(elem_success == true) t.removeClass('has-error');
    })

    return success;
}

$(document).ready(function () {
    $(".p-vsaas__applied-col:first-child").addClass("state-active");
    setTimeout(autoAddClass, 12000);
});

function autoAddClass() {
    var next = $(".state-active").removeClass("state-active").next();
    if (next.length)
        $(next).addClass('state-active');
    else
        $('.p-vsaas__applied-col:first-child').addClass('state-active');
    setTimeout(autoAddClass, 12000);
}



var countItems = function(elems){
    switch(elems){
        case  1 :
            return 2
        case  2 :
            return 2
        case 3 :
            return 3
        case 4 :
            return 4
        default:
            return 4

    }
};
var breakpointsCount = function(elems){
    switch(elems){
        case  1 :
            return 2
        case  2 :
            return 2
        default:
            return 3

    }
};

//console.log(countItems())

$('.p-vsaas__technology-slider').each(function () {
    var elems = $(this).find('.p-vsaas__technology-item').length
    var t = $(this);
    var slider = new Swiper(t[0], {
        speed: 400,
        loop: countItems(elems)>=4 ? true : false,
        spaceBetween: 32,
        watchOverflow: true,
        slidesPerView:countItems(elems),
        pagination: {
            el: t.closest('.p-vsaas__technology').find('.slider-dots')[0],
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: t.closest('.p-vsaas__technology').find('.slider-arrow-next')[0],
            prevEl: t.closest('.p-vsaas__technology').find('.slider-arrow-prev')[0]
        },
        breakpoints: {
            0:{
                slidesPerView: 1
            },
            768: {
                slidesPerView: breakpointsCount(elems) - .6
            },

            1280: {
                slidesPerView: countItems(elems)
            },
            1440: {
                slidesPerView: countItems(elems)
            }


        }

    });
});
$(window).on('scroll',function(){
    if($('.p-vsaas__applied').length > 0){
        var apliyedOffset = $('.p-vsaas__applied').offset().top
        var apliyedHeight = $('.p-vsaas__applied').height()
        var list = $('.p-vsaas__benefits-list')
        var gb = apliyedOffset + apliyedHeight
        var currentScroll = $(this).scrollTop();

        if(currentScroll >= gb){
            list.addClass('gradient-active')
        }else{
            list.removeClass('gradient-active')
        }

    }

})

$('.p-vsaas__viddeo-plyaer').on('click',function(){
    $(this).addClass('active');
    $(this).find('video')[0].play();
})

function addListenerToGtag(cssClass, action_listner, event, cat, label) {
    $(document).on(action_listner, cssClass, function() {
        gtag('event', event,
            {
                'event_category': cat,
                'event_label': label
            }
        );
    })
}

!function() {
    var global;

    /* vsaas page */
    global = '.page-template-page-vsaas';
    addListenerToGtag(global+' .promo-btns .btn-red', 'click', 'click', '/', 'demo_request');
    addListenerToGtag(global+' .promo-btns .btn--gray', 'click', 'click', '/', 'learn_more');
    addListenerToGtag(global+' .p-vsaas__viddeo-plyaer', 'click', 'click', '/', 'play_video');
    addListenerToGtag(global+' .form--white form', 'submit', 'click', '/', 'contact_us');
    addListenerToGtag(global+' .form__mail a', 'click', 'click', '/', 'email');
    addListenerToGtag(global+' .lnews--vsaas .lnews__all', 'click', 'click', '/', 'all_article');
}();


/* Vacancy smart filter */

document.addEventListener("DOMContentLoaded", function(event) {

    if( document.querySelector('.p-hr__vacancies') ) {
        const filter = {
            "data-location": document.querySelectorAll('.select-location input'),
            "data-schedule" : document.querySelectorAll('.select-schedule input'),
            "data-profession": document.querySelectorAll('.select-profession input')
        }

        const checked = {
            "data-location": [],
            "data-schedule" : [],
            "data-profession": [],
            "data-department": []
        }

        for (let [key, value] of Object.entries(filter)) {
            value.forEach( element => {
                element.addEventListener('click', (e) => {
                    let attr = element.getAttribute('data-search');
                    let searchValue =  element.getAttribute('name');
                    setDisplayVacancies('');
                    if(element.checked) {
                        checked[attr].push(searchValue);
                    } else {
                        let index = checked[attr].indexOf(searchValue);
                        if (index !== -1) {
                            checked[attr].splice(index, 1);
                        }
                    }
                    refreshBlocks(checked);
                    updateInputLists(filter)
                });
            });
        }

        function updateInputLists(filter){

            for (let [key, value] of Object.entries(filter)) {

                let choiceArr = [];
                let blocks =  document.querySelectorAll(`.p-hr__vacancy-item[${key}]`);
                blocks.forEach(element => {
                    if(element.style.display == 'block' || element.style.display == '')
                        choiceArr = choiceArr.concat(element.getAttribute(key).split(','));
                });
                choiceArr = choiceArr.map(el => el.trim());
                unique = [...new Set(choiceArr)];
                renderInputs(key, unique);
            }
        }

        function renderInputs(attr, fields) {

            let inputs =  document.querySelectorAll(`input[data-search="${attr}"]`);
            if(inputs) {
                inputs.forEach( element => {
                    if(element.getAttribute('data-search') != 'data-profession') { /* exclude profession*/
                        if(fields.indexOf(element.getAttribute('name')) != -1){
                            element.parentElement.classList.remove('disabled-input');
                            element.removeAttribute('disabled');
                        } else {
                            element.parentElement.classList.add('disabled-input');
                            // element.setAttribute('disabled', 'disabled');
                        }
                    }
                });
            }
        }

        function refreshBlocks(filter) {
            const blocks = document.querySelectorAll('.p-hr__vacancy-item');

            if(blocks){
                blocks.forEach( block => {
                    for (let [key, value] of Object.entries(filter)) {
                        fields = block.getAttribute(key).split(',');
                        fields = fields.map(el => el.trim());
                        if(filter[key].length == 0) {
                            continue;
                        } else {
                            value.forEach(name => {
                                if(fields.indexOf(name) != -1 && block.style.display != 'none'){
                                    block.style.display='';
                                }else {
                                    block.style.display='none';
                                }
                            });
                        }
                    }
                });
            }
        }
        function setDisplayVacancies(status) {
            const vacancies = document.querySelectorAll('.p-hr__vacancy-item');
            if(vacancies) {
                vacancies.forEach( item => {
                    item.style.display=status;
                })
            }
        }
        const department =  document.querySelectorAll('.department-item');
        if(department) {
            department.forEach( element => {
                element.addEventListener('click', (e) => {
                    e.preventDefault()
                    document.querySelector('.swiper-slide-active.department-item').classList.remove('swiper-slide-active');
                    element.classList.add('swiper-slide-active');
                    checked['data-department'].splice(0, checked['data-department'].length);
                    if(element.getAttribute('data-search') != 'all'){
                        checked['data-department'].push(element.getAttribute('data-search'));
                    }
                    setDisplayVacancies('');
                    refreshBlocks(checked);
                });
            })
        }

        const clearSelects = document.querySelectorAll('.p-hr__vacancies .close-select');
        if(clearSelects){
            clearSelects.forEach( (closeBtn) => {
                closeBtn.addEventListener('click', (e) => {
                    closeBtn.parentElement.querySelectorAll('input').forEach((choice) => {
                        if(choice.checked) choice.click();
                        choice.removeAttribute('disabled');
                    });
                });
            });
        }
    }

});


/* Drag and drop files logic*/

document.addEventListener("DOMContentLoaded", function(event) {

    if(document.querySelector('.drag-and-drop')){

        let dropArea = document.querySelector('.form__attach-inner');

        ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false)
            document.body.addEventListener(eventName, preventDefaults, false)
        })

        dropArea.addEventListener('drop', handleDrop, false);

        let inputFile = document.getElementById('fileElem').onchange = function(e){
            handleFiles(e.target.files);
        };

    }

    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    function handleDrop(e) {
        var dt = e.dataTransfer
        var files = dt.files

        handleFiles(files)
    }

    function handleFiles(files) {

        files = [...files]
        let fileContainer = document.querySelector('.form__attach-files');
        const dT = new DataTransfer();

        files.forEach(file => {

            if(file.size < AllowedFileSize() && correctFileFormat(file) && !alreadyExists(file)) {
                dT.items.add(file);
                addFileTemplate('.form__attach-file.sample-correct', file, fileContainer, true)
            } else {
                addFileTemplate('.form__attach-file.sample-error', file, fileContainer, false)
            }

        });

        addFilesToForm(dT.files);
    }

    function addFilesToForm(files){

        const dT = new DataTransfer();

        let addedFiles = [...document.getElementById('gatheredFiles').files].concat([...files]);
        if(addedFiles.length > 0) addedFiles.forEach(file => { dT.items.add(file) });
        document.getElementById('gatheredFiles').files  = dT.files;

    }

    function removeFile(fileContainer){

        let fileId = fileContainer.getAttribute('data-id');
        let files = [...document.getElementById('gatheredFiles').files];

        const dT = new DataTransfer();
        files.forEach(file => {
            if(file.lastModified != fileId) {
                dT.items.add(file)
            }
        });

        document.getElementById('gatheredFiles').files  = dT.files;
        fileContainer.remove();
    }

    function AllowedFileSize(){
        return 2097152;
    }

    function addFileTemplate(template, file, fileContainer, succes){

        let newFile  = document.querySelector(template).cloneNode(true);
        newFile.querySelector('.form__attach-file-name div').innerText = file.name;

        if(succes) {
            newFile.setAttribute('data-id', file.lastModified);
            newFile.classList.remove('sample-correct');
            let progressContainer = newFile.querySelector('.form__attach-progress');
            let progressbar = progressContainer.querySelector('.form__attach-progress-fill');
            progressbar.style.width = '100%';
            setTimeout(() => {
                progressContainer.remove();
                let sizeFile = document.createElement('div');
                sizeFile.classList.add('form__attach-file-size');
                sizeFile.innerText = formatBytes(file.size);
                newFile.querySelector('.form__attach-file-name').appendChild(sizeFile);
            }, 500);
        } else {
            newFile.classList.remove('sample-error');
        }

        fileContainer.appendChild(newFile);

        newFile.querySelector('.form__attach-file-delete').addEventListener('click', (e) => {
            removeFile(newFile);
        });

    }

    function correctFileFormat(file){
        let format = file.name.split('.').pop().toLowerCase();
        const allowed = ['doc', 'docx', 'pdf', 'jpeg', 'jpg', 'png', 'ppt', 'pptx'];
        if(allowed.indexOf(format) != -1){
            return true;
        }
        return false;
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    function alreadyExists(newFile){

        let exists = false;
        [...document.getElementById('gatheredFiles').files].forEach(file => {
            if(file.lastModified == newFile.lastModified) exists = true;
        });
        return exists;
    }

});

/* END Drag and drop files logic*/

var navSwiper = undefined;
var lengthLinks = $('.newsbox__navscroll .newsbox__link').length>3
function filterSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 768 && navSwiper == undefined && lengthLinks) {

        // if (window.location.search.indexOf("category=") > -1) {
        //    let category = (new URLSearchParams(window.location.search)).get("category");
        //    console.log(category);
        // }
        navSwiper = new Swiper('.newsbox__navscroll', {
            // spaceBetween : 10,
            slidesPerView: 'auto',
            centeredSlides: true,
            watchOverflow: true,
            centerInsufficientSlides: true,
            slideToClickedSlide:true,
            centeredSlidesBounds: true,
            loop:true,
        });
    } else if (screenWidth > 768 && navSwiper != undefined) {
        navSwiper.destroy();
        navSwiper = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');
    }

}

filterSwiper();
$(window).on('resize', function(){
    filterSwiper();
});


/*BEGIN PAGE NEWS FILTER*/
if(document.querySelector('.page-template-page-filter') || document.querySelector('.page-template-page-press')){


    document.addEventListener('DOMContentLoaded', function () {

        $('.newsbox__navscroll .swiper-slide-active').trigger('click')
        var option = $('.newsbox__navscroll .option').get(0)
        var ind = $(option).attr('data-swiper-slide-index')
        if(navSwiper){
            $(option).trigger('click')
            navSwiper.slideTo(ind)
        }

        document.querySelectorAll('.bottom__nav .newsbox__link').forEach( link => {
            link.addEventListener('click', (e) => {
                window.scrollTo({top: 0, behavior: 'smooth'})
                let slug = e.currentTarget.getAttribute('data-slug');
                let topLink = $(`.newsbox__navscroll [data-slug="${slug}"]`).get(0)
                $(topLink).trigger('click')
                if(navSwiper){
                    let indexSlide = $(topLink).attr('data-swiper-slide-index')
                    navSwiper.slideTo(indexSlide)
                }
            });
        });

        document.querySelectorAll('.newsbox__link').forEach( link => {
            link.addEventListener('click', (e) => {

                let slug = e.currentTarget.dataset.slug
                let box  = e.currentTarget.dataset.box
                let lang = window.location.href.includes('/ru/') ? '/ru/' : '/';

                if(window.location.href.includes('/news/')) {
                    window.history.replaceState({}, '', `${lang}news/${slug}/`);
                }

                removeClass('.newsbox__link','option');
                removeClass('.newsbox__content','active');
                document.querySelectorAll(`.newsbox__link[data-slug="${slug}"]`).forEach( item => { item.classList.add('option')});
                document.querySelector(`#${box}`).classList.add('active');
                if(document.querySelector('.news-last__container')) {
                    ajaxGetPosts('mtsai_get_news',
                        {category: slug, excluded: getExcludedNews('data-news-id'), navCategories : getNavCategories()},
                        function (answer) {
                            let answerContainer = document.createElement('div');
                            answerContainer.innerHTML = answer;
                            document.querySelector('.news-last__container').innerHTML =
                                answerContainer.querySelector('.news-last__container').innerHTML;
                            document.querySelector('.new-provider__list').innerHTML =
                                answerContainer.querySelector('.new-provider__list').innerHTML;
                            document.querySelector('.poginator-item[data-page="1"]').click();
                            if(window.matchMedia("(max-width: 768px)").matches) {
                                var promo = new Swiper('.row-news', {
                                    speed: 400,
                                    slidesPerView: 1.4,
                                    spaceBetween: 16,
                                    pagination: {
                                        el: $('.no-gutters').find('.slider-dots')[0],
                                        type: 'bullets',
                                        clickable: true
                                    },
                                    navigation: {
                                        prevEl: $('.no-gutters').find('.lnews__arrow')[0],
                                        nextEl: $('.no-gutters').find('.lnews__arrow+.lnews__arrow')[0]
                                    },
                                });
                            }
                        }, $('.news-last__container'));


                }
            });
        });

        /*pagination */
        addPaginationListner();
        nextPageListner();

    });


    function removeClass(elements, cl){
        document.querySelectorAll(elements).forEach(i=>{
            i.classList.remove(cl)
        })
    }

    function getExcludedNews(attr)
    {
        let excludedNews = [];
        document.querySelectorAll(`[${attr}]`).forEach( news => {
            excludedNews.push(news.getAttribute(attr));
        });
        return excludedNews.toString();
    }

    function getNavCategories(selector = '.bottom__nav .newsbox__link', attr = 'data-slug'){
        let navList = [];
        document.querySelectorAll(selector).forEach( nav => {
            navList.push(nav.getAttribute(attr));
        });
        return navList.toString();
    }

    function addPaginationListner()
    {
        document.querySelectorAll('.poginator-item').forEach( item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let page = item.getAttribute('data-page');
                if(page == '…') {
                    item.previousElementSibling.click();
                } else {
                    let slug = document.querySelector('.newsbox__link.option').getAttribute('data-slug');
                    ajaxGetPosts('mtsai_get_othernews',
                        {category: slug, excluded: getExcludedNews('data-news-id'), page: page, navCategories : getNavCategories()},
                        function (answer) {
                            let answerContainer = document.createElement('div');
                            answerContainer.innerHTML = answer;
                            document.querySelector('.new-provider__list').innerHTML =
                                answerContainer.querySelector('.new-provider__list').innerHTML;
                            document.querySelector('.new-provider__paginator').innerHTML =
                                answerContainer.querySelector('.new-provider__paginator').innerHTML;
                            nextPageListner();
                            addPaginationListner();
                        }, $('.new-provider__list'));
                }
            });
        });
    }

    function nextPageListner()
    {
        if(document.querySelector('.poginator-item.next-offset')){
            document.querySelector('.poginator-item.next-offset').addEventListener('click', (e) => {
                document.querySelector('.poginator-item.active').nextElementSibling.click();
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    $('.subscribers__email').on('input', function() {
        var t = $(this);
        var btn = $('.subscribers__button');
        if(validateEmail(t.val()) && $('#sub').is(":checked")) {
            btn.removeAttr('disabled');
            btn.addClass('approved');
        } else {
            // btn.attr('disabled','disabled');
            btn.removeClass('approved');
        }
    });
    $('#sub').on('input', function() {
        var t = $(this);
        var btn = $('.subscribers__button');
        if(!$(this).is(":checked")){
            btn.removeClass('approved');
        } else if (validateEmail($('.subscribers__email').val()) && $('#sub').is(":checked")){
            btn.removeAttr('disabled');
            btn.addClass('approved');
        }
    });

});

/*END PAGE NEWS FILTER*/
/* about page */
/**
 * smooth scroll to section - up to 100 px
 */




document.addEventListener('DOMContentLoaded', () => {
    $(document).on('click', '[data-copy-self]', function() {
        var t = $(this);
        copyTextToClipboard(t.attr('data-copy-self'));
        return false;
    })
    if(document.querySelector('.p-about__content')){
        $('.p-about__content .p-about__nav ul li').each(function(i,el){
            $(el).css('order',i)

        })
        let position = 0;

        let fixedMenuWrap = $('<div>',{
            class:'fixedMenuWrap',
            html:'<div class="container__new">'+$('.p-about__nav').prop('outerHTML')+'</div>'
        })
        $('body').prepend(fixedMenuWrap)

        let sections = $('[data-tag]')
        $(document).on('scroll',function(){
            let current = $(this).scrollTop()
            if(current > $('.p-about .p-about__nav').offset().top - $('.header').innerHeight()){
                $('.p-about__nav').addClass('indexed')
            }else{
                $('.p-about__nav').removeClass('indexed')
            }
            if(current >= $('.p-about .p-about__nav').offset().top){
                $('.p-about__nav').addClass('fixed')
                fixedMenuWrap.addClass('active')
            }else{
                $('.p-about__nav').removeClass('fixed')
                fixedMenuWrap.removeClass('active')
            }

            if(current > position){
                fixedMenuWrap.removeAttr('style')
                if(fixedMenuWrap.closest('.page-template-page-pnp')){
                    fixedMenuWrap.removeClass('white')
                }
                $('.header').removeClass('zindex-100')
            }else{
                $('.header').addClass('zindex-100')
                fixedMenuWrap.css('top',$('.header').innerHeight())
                if(fixedMenuWrap.closest('.page-template-page-pnp')){
                    fixedMenuWrap.addClass('white')
                }
            }

            sections.each(function(i,e){
                if($(e).offset().top - 100 - fixedMenuWrap.innerHeight() <= current){
                    var id = $(e).attr('id');
                    if(id.length > 0) {
                        $('.p-about__nav ul li a').removeClass('state-selected');
                        $('.p-about__content .p-about__nav ul li a[href="'+id+'"]').addClass('state-selected');
                        $('.fixedMenuWrap .p-about__nav ul li a[href="'+id+'"]').addClass('state-selected');
                    }
                }
            })
            let containerPaddingLeft = +$('.container__new').css('paddingLeft').replace('px','')
            let containerPaddingRight = +$('.container__new').css('paddingRight').replace('px','')
            let sumPadding = containerPaddingLeft + containerPaddingRight
            let ww = $(window).innerWidth() - sumPadding

            if(ww - $('.fixedMenuWrap .state-selected').position()?.left < ($('.fixedMenuWrap .state-selected').innerWidth() + + $('.fixedMenuWrap .state-selected').parents('li').css('marginRight')?.replace('px','')) || $('.fixedMenuWrap .state-selected').position()?.left < 0){

                document.querySelector('.fixedMenuWrap ul').scrollLeft+=($('.fixedMenuWrap .state-selected').position().left - (ww/2 - ($('.fixedMenuWrap .state-selected').innerWidth()/2 + +  $('.fixedMenuWrap .state-selected').css('marginRight')?.replace('px',''))))
            }

            position = current

        })
        !function() {
            let aboutNav =  document.querySelectorAll('.p-about__nav ul li a,.p-about__nav .p-about__nav-item-button a'),
                topScroll,
                isInProgress = false;
            if(aboutNav) {
                aboutNav.forEach( el => {
                    el.addEventListener('click', (e) => {
                        e.preventDefault();
                        isInProgress = true;
                        var diff = 100;
                        if($(el).attr('data-href') == 0) {
                            topScroll = document.querySelector(`[data-tag="${el.getAttribute('href').replace("#", "")}"]`).getBoundingClientRect().top - diff + window.scrollY;
                        } else {
                            topScroll = document.querySelector(`[data-tag="${el.getAttribute('data-href').replace("#", "")}"]`).getBoundingClientRect().top - diff + window.scrollY;
                        }
                        e.preventDefault();
                        window.scroll({
                            top: topScroll,
                            behavior: 'smooth'
                        })
                    });
                })
                $(window).scroll(function(){
                    if(Math.ceil(topScroll) == window.scrollY) {
                        window.scroll({
                            top: topScroll + 1,
                            behavior: 'smooth'
                        })
                        topScroll = -1;
                        isInProgress = false;
                        $('.header').removeClass('zindex-100');
                        $('.fixedMenuWrap').removeAttr('style');
                    }
                    if(isInProgress) {
                        $('.header').removeClass('zindex-100');
                        $('.fixedMenuWrap').removeAttr('style');
                    }
                    // window.scroll({
                    //     top: document.querySelector(
                    //         `[data-tag="${el.getAttribute('href').replace("#", "")}"]`
                    //                                 ).getBoundingClientRect().top - diff + window.scrollY + 1,
                    //     behavior: 'smooth'
                    // });
                })
            }
        }()

    }


    function onDsk(){
        $('.menu-child-wrapper').removeAttr('style')
        $('.header-menu-open').removeClass('active')
        $('html').removeClass('header-menu-is-open')
        $('.header-menu .parent').find('.parent-icon').removeClass('active')
        $('.header-menu .parent').on('mouseenter',function(e){

            $(this).find('.menu-child-wrapper').slideDown('fast').stop()
            $(this).find('.parent-icon').addClass('active')
            $('.fixedMenuWrap.active').addClass('zIndex')
        })
        $('.header-menu .parent').on('mouseleave',function(e){
            $(this).find('.menu-child-wrapper').slideUp('fast')
            $(this).find('.parent-icon').removeClass('active')
            $('.fixedMenuWrap.active').removeClass('zIndex')
        })
        $('.header-menu .parent').off('click')

    }
    function onTab(){
        $('.header-menu .parent').off('mouseenter').off('mouseleave')
        $('.menu-child-wrapper').removeAttr('style')
        $('.header-menu .parent').find('.parent-icon').removeClass('active')
        $('.fixedMenuWrap.active').removeClass('zIndex')
        $('.header-menu .parent').on('click',function(e){
            // if (e.target.nodeName !== 'A') {
            console.log(88);
            var t = $(this).find('.parent-icon');
            t.toggleClass('active');
            t.siblings('.menu-child-wrapper').slideToggle();

            if($(e.target).parents('.menu-child-wrapper').length == 0) {
                e.preventDefault();
                return false;
            }
            // }
        })
    }

    let mediaQuery = window.matchMedia('(min-width: 1152px)')
    function handleTabletChange(e) {
        if (e.matches) {
            onDsk()
        }else{
            onTab()
        }

    }

    if($(window).width()>=1152){
        onDsk()
    }else{
        onTab()
    }

    mediaQuery.addEventListener('change',()=>{
        handleTabletChange(mediaQuery)
    })

});
/* */

if (window.matchMedia('(max-width:767px)').matches) {
    $('.p-imo__button-app').hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 450) {
            $('.p-imo__button-app').show().fadeIn();
        } else {
            $('.p-imo__button-app').fadeOut().hide();
        }
    });
}

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

$(document).ready(function() {
    var slides = 1.7;

    if(window.matchMedia('(max-width:576px)').matches) {
        slides = 1;
    }
    if((window.matchMedia('(min-width:1279px)').matches) && $('.expert__list--slider .swiper-wrapper').children().length > 3) {
        slides = 3;
        $('.expert__list--slider .swiper-wrapper').children().css('margin-left', 0)
    }
    if ((window.matchMedia('(max-width:1279px)').matches && window.matchMedia('(min-width:768px)').matches)
        || $('.expert__list--slider .swiper-wrapper').children().length > 3) {
        var lastIndex;
        var slider = new Swiper('.expert__list--slider', {
            speed: 400,
            spaceBetween: 16,
            slidesPerView: slides,
            slidesPerGroup:1,
            navigation: {
                nextEl: $('.pnp-arrow-js').find('.slider-arrow-next')[0],
                prevEl: $('.pnp-arrow-js').find('.slider-arrow-prev')[0]
            },
            pagination: {
                el: $('.pnp-arrow-js').find('.slider-dots')[0],
                type: 'bullets',
                clickable: true
            },
            on: {
                init: function(q) {
                    var $zeroEl = $('.expert__wrap--more .slider__controls');
                    if(q.slides.length > 5) {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }
                },
                activeIndexChange: function(q) {
                    var $zeroEl = $('.expert__wrap--more .slider__controls'),
                        $activeBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+1)+')'),
                        $prevActiveBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+2)+')'),
                        activeBulPos = $activeBull.position().left;
                    if($prevActiveBull.length > 0) {
                        var prevActiveBulPos = $prevActiveBull.position().left;
                    }
                    if(activeBulPos > center) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = activeBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - center;
                    }
                    if ($prevActiveBull.length > 0 && lastIndex > q.activeIndex+1) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = prevActiveBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - 8 - center;
                    }
                    if(q.activeIndex > 2) {
                        $zeroEl.addClass('lnews__nav--active-left');
                    } else {
                        $zeroEl.removeClass('lnews__nav--active-left');
                    }
                    if(q.activeIndex > (q.slides.length - 3 - q.params.slidesPerView)) {
                        $zeroEl.removeClass('lnews__nav--active-right');
                    } else {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }

                    lastIndex = q.activeIndex+1;
                }
            }
        });
        if($('.expert__wrap--more').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').length > 0) {
            var center = $('.expert__wrap--more').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').position().left
        }
        var changed = false;
        $(".expert__list--slider + .slider__controls .slider-arrow-next").on('click', function () {
            if (changed === true) {
                changed = false;
                slider.slideTo(0);
            }
            if (slider.isEnd) changed = true;
        })
        slider.on('slideChange', function() {
            $(".expert__list--slider + .slider__controls .slider-arrow-next").prop('disabled', false);
            $(".expert__list--slider + .slider__controls .slider-arrow-prev").prop('disabled', false);
            $(".expert__list--slider + .slider__controls .swiper-button-disabled").removeClass('swiper-button-disabled');
        })
    }
    $(document).on('change','[data-checkbox-input] input', function() {
        var t = $(this),
            $wrap = t.parents('[data-checkbox-wrap]'),
            $text = $wrap.find('[data-checkbox-text]'),
            text = '';

        $wrap.find('[data-checkbox-input] input:checked').each(function() {
            var t = $(this),
                val = t.val(),
                txt = t.next().find('span').html();
            text += '<span data-check-text="'+val+'">'+txt+'</span>';
        });

        if($wrap.find('[data-checkbox-input] input:checked').length == 0) {
            text = $text.attr('data-checkbox-text');
        }

        $text.html(text);

    })
    $(document).on('click','[data-check-text]', function() {
        var t = $(this),
            $wrap = t.parents('[data-checkbox-wrap]');
        if($wrap.find('[data-id-open]').length < 1) {
            $wrap.find('input[value="' + t.attr('data-check-text') + '"]').prop('checked', false).trigger('change');
        }
    })

    $(document).on('click', function(e) {
        var div = $("[data-checkbox-wrap]");
        if($('.form__control').hasClass('active')) {
            if (!div.is(e.target) && div.has(e.target).length === 0 ) {
                div.removeClass('active');
                div.find('.pnp-checkboxes').hide();
            }
        }
    })

    $('.whom__next').click(function() {
        var t = $(this);
        if(window.matchMedia('(max-width:768px)').matches) {
            t.parents('.p-imo__forwhom-grid-item').find('.p-imo__forwhom--hide').show();
            t.hide();
        } else {
            $('.p-imo__forwhom-grid-item').find('.p-imo__forwhom--hide').show();
            $('.whom__next').hide();
        }
    })
    var activeTab =  $('.services__tab');
    $('.services__slider').each(function() {
        var t = $(this);
        var service = new Swiper(t[0],{
            slidesPerView: 1.13,
            spaceBetween: 20,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: t.find('.services__right--mob')[0],
                prevEl: t.find('.services__left--mob')[0]
            },
            pagination: {
                el: ".services .slider-dots",
            },
            on: {
                init(swiper) {
                    $('.services__tab:nth-child(1)').addClass('services__tab--active');

                    $('.services__tab--active .progress__val').css('width', 0);
                    $('.services__tab--active .progress__val').stop(true).animate({
                        width: '100%'
                    }, swiper.params.autoplay.delay)
                },
                activeIndexChange(swiper) {
                    var activeIndex = ++swiper.realIndex;
                    $('.services__tab .progress__val').removeAttr('style');
                    $('.services__tab--active').removeClass('services__tab--active');
                    $('.services__tab:nth-child(' + activeIndex + ')').addClass('services__tab--active');

                    $('.services__tab--active .progress__val').css('width', 0);
                    $('.services__tab--active .progress__val').stop(true).animate({
                        width: '100%'
                    }, swiper.params.autoplay.delay)
                }
            },
            loop: true,
            breakpoints: {
                1279: {
                    slidesPerView: 1,
                    navigation: {
                        nextEl: t.find('.case__right')[0],
                        prevEl: t.find('.case__left')[0]
                    },
                },
                767: {
                    slidesPerView: 1,
                    navigation: {
                        nextEl: t.find('.services__right--mob')[0],
                        prevEl: t.find('.services__left--mob')[0]
                    },
                },
            },

        });
        service.loopDestroy();
        service.loopCreate();

        $(document).on('click', '[data-service-tab]', function() {
            var t = $(this),
                index = t.attr('data-service-tab');

            service.slideTo(++index);
        })
    })

    $('.case__row').each(function() {
        var t = $(this),lastIndex;
        var cases = new Swiper(t[0], {
            slidesPerView: 1, pagination: {
                el: ".case__row .case__paginat",
            }, navigation: {
                nextEl: t.find('.case__right--mob')[0], prevEl: t.find('.case__left--mob')[0]
            }, breakpoints: {
                1279: {
                    slidesPerView: 2, spaceBetween: 32,
                },
            }, on: {
                init: function(q) {
                    var $zeroEl = $('.case .audiogram-sw__controls');
                    if(q.slides.length > 5) {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }
                },
                activeIndexChange: function (q) {
                    var $zeroEl = $('.case .audiogram-sw__controls'),
                        $activeBull = $zeroEl.find('.swiper-pagination-bullet:nth-child(' + (+q.activeIndex + 1) + ')'),
                        $prevActiveBull = $zeroEl.find('.swiper-pagination-bullet:nth-child(' + (+q.activeIndex + 2) + ')'),
                        activeBulPos = $activeBull.position().left;

                    if ($prevActiveBull.length > 0) {
                        var prevActiveBulPos = $prevActiveBull.position().left;
                    }

                    if(q.activeIndex > 2) {
                        $zeroEl.addClass('lnews__nav--active-left');
                    } else {
                        $zeroEl.removeClass('lnews__nav--active-left');
                    }
                    if(q.activeIndex > (q.slides.length - 3 - q.params.slidesPerView)) {
                        $zeroEl.removeClass('lnews__nav--active-right');
                    } else {
                        $zeroEl.addClass('lnews__nav--active-right');
                    }

                    if (activeBulPos > center) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = activeBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - center;
                    }
                    if ($prevActiveBull.length > 0 && lastIndex > q.activeIndex + 1) {
                        $zeroEl.find('.slider-dots')[0].scrollLeft = prevActiveBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft - 8 - center;
                    }

                    lastIndex = q.activeIndex + 1;
                }
            }
        })
        if($('.audiogram-sw__controls').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').length > 0) {
            var center = $('.audiogram-sw__controls').find('.slider-dots .swiper-pagination-bullet:nth-child(3)').position().left
        }
    })
    $(document).on('click','[data-more-why]', function() {
        var t = $(this);
        t.toggleClass('why__more--active');
        $('.why__list').toggleClass('why__list--full')
    })
})

function validateOneInput($input) {
    return $input.val().length > 0;
}

$(function() {
    $(document).on('blur','[data-requied] input', function() {
        var t = $(this);
        if(!validateOneInput(t)) {
            t.parents('[data-requied]').addClass('has-error')
        }
        else t.parents('[data-requied]').removeClass('has-error');
    })

    $(document).on('click','[data-id-open] input', function() {
        var _this = $(this),
            isCheck = _this.prop('checked');
        $('[data-id-open] input').prop('checked', false);
        if(!isCheck) {
            _this.prop('checked', false);
        } else {
            _this.prop('checked', true);
        }
        openUpChain(_this);
        showCheckedInput();
        console.log()
        $('[data-requied]').trigger('input');
        console.log(_this);
    })
})

function openUpChain($elem) {
    var $parent;
    if($elem.parents('[data-id-to-open]').length > 0) {
        $parent = $('[data-id-open="'+$elem.parents('[data-id-to-open]').attr('data-id-to-open')+'"]');
        $parent.find('input').prop('checked', true);
        openUpChain($elem.children())
        checkText();
    }
}

function showCheckedInput() {
    $('[data-id-open] input').each(function() {
        var t = $(this),
            $parent = t.parents('[data-id-open]'),
            attr = $parent.attr('data-id-open'),
            $target;

        if(attr && attr.length > 0) {
            $target = $('[data-id-to-open="'+attr+'"]');
        }
        if($target && $target.length > 0) {
            if(t.prop('checked')) {
                $target.removeClass('input--hidden');
                if($target.find('.form__row__check').length < 1) {
                    $target.attr('data-requied', '').attr('data-check', '')
                }
            } else {
                $target.addClass('input--hidden')
                $target.removeAttr('data-requied').removeAttr('data-check')
            }


        }
    })
}

function checkText() {
    $('[data-checkbox-wrap]').each(function() {
        var t = $(this);
        if(t.find('.pnp-checkboxes input:checked').length == 0) {
            t.find('.pnp-select__title').html(t.find('.pnp-select__title').attr('data-checkbox-text'));
        }
    })
}

$(function() {
    if($('.p-about').length) {
        var aboutTop = $('.p-about').position().top;
        $(window).on('scroll load', function () {
            if (window.scrollY + window.innerHeight > aboutTop) {
                $('.p-about__nav').addClass('btn-fixed');
            } else {
                $('.p-about__nav').removeClass('btn-fixed');
            }
        })
    }

})

const $touchScroller = $('.md pre, .md table');

if ($touchScroller.length) {

    $touchScroller.on('mousedown', function (e) {
        const $t = $(this);
        const startX = $t.scrollLeft() + e.pageX;

        $touchScroller.on('mousemove', function (e) {

            $t.scrollLeft(startX - e.pageX)

        });
    });

    $touchScroller.on('mouseup', function (e) {
        const $t = $(this);

        $touchScroller.off("mousemove");

    });

    $touchScroller.on('mouseleave', function () {
        $touchScroller.mouseup();
    })
}

let hasSubMenu = $('.menu-item-has-children .js-show-more');

hasSubMenu.on('click',function(e){
    let $nextBtn = $(this).closest('.menu-item-has-children').find('.scroll-to-btn')
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).closest('.menu-item-has-children').find('.sub-menu').slideUp(300);
        $(this).closest('.menu-item-has-children').find('.js-show-more').removeClass('active');
        let openedMenu = $('.menu__aside .js-show-more.active')
        if(!openedMenu.length){
            $('.aside__wrapper').removeClass('opened');
        };
        setTimeout(() => {
            height();
            highlight();
        }, 310);
    } else {
        $(this).addClass('active');
        $(this).closest('.menu-item-has-children').find('.sub-menu').eq(0).slideDown(300);

        setTimeout(() => {
            height();
            highlight();
        }, 310);
    }
})
function height(){
    let listHeight = menuAside.height();
    if (listHeight > maxHeight) {
        $('.aside .theiaStickySidebar').addClass('opened')
    } else {
        $('.aside .theiaStickySidebar').removeClass('opened')
    }
}

let menuAside = $('.menu__aside')
let maxHeight = window.innerHeight - $('.header').height() - 120;
$(window).on('load resize scroll', function(){
    let asideWrapper = $('.aside .theiaStickySidebar')
    if ($(window).width() > 767){
        maxHeight = window.innerHeight - $('.header').height() - 120;
        asideWrapper.css({
            'max-height' : maxHeight,
        });
        if (menuAside.height() > maxHeight){
            $('.aside__wrapper').addClass('opened')
        } else {
            $('.aside__wrapper').removeClass('opened')
        }
    } else {
        asideWrapper.css({
            'max-height' : '',
            'top' : 'unset'
        });
    }
})
$('.aside').theiaStickySidebar({
    additionalMarginTop: 112,
    minWidth: 768
});
const $tablinks = $('.js-show-popup');
const $tabcontent = $('.tabcontent');
$tablinks.on('click', function (e){
    Modal.openModal('modal-s');
    $('.header, .p-about, .fixedMenuWrap').css('filter','blur(6px)')
    const $t = $(this);
    const $cl = $t.closest('.swiper-slide');
    const id = $cl.data('tab');
    const $tab = $(`.tabcontent[data-tab=${id}]`);
    $tabcontent.removeClass('show');

    $tab.addClass('show');
})
$('.aside__js').on('click',function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle(300);
    $('.aside').toggleClass('opened');
    $('.menu__aside').toggleClass('opened');
})
// Footer schema
$(document).ready(function(){
    let $prod = $('.pr__1')
    let $pr = $('.pr__1 > a')
    $prod.each(function (){
        $(this).attr({
            'itemscope' : '',
            'itemtype' : "https://schema.org/Product"
        })
    })
    $pr.each(function (){
        let val = $(this).text();
        $(this).append(`<meta itemprop="name" content="` + val + `" />`)
    })

    $('.wrk_1').attr({
        'itemscope' : '',
        'itemtype' : "https://schema.org/ItemList"
    })
    $('.wrk_1 > a ').append(`<meta itemprop="name" content="` + $('.wrk_1 > a').text() + `" />`)

    $('.doc_1').attr({
        'itemscope' : '',
        'itemtype' : "https://schema.org/DigitalDocument"
    })
    $('.doc_1 > a').append(`<meta itemprop="name" content="` + $('.doc_1 > a').text() + `" />`)

    let $desc = $('.desc_1')
    let $des = $('.desc_1 > a')

    $desc.each(function(){
        $(this).attr({
            'itemscope':"",
            'itemtype':"https://schema.org/description"
        })
    })

    $des.each(function(){
        let val = $(this).text();
        $(this).append(`<meta itemprop="name" content="` + val + `" />`)
    })

    let $nws = $('.new_1')
    let $nw = $('.new_1 > a')

    $nws.each(function(){
        $(this).attr({
            'itemscope':"",
            'itemtype':"news"
        })
    })

    $nw.each(function(){
        let val = $(this).text();
        $(this).append(`<meta itemprop="name" content="` + val + `" />`)
    })
})
