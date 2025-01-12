function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["../nodes/0.DJEbrfuE.js", "../chunks/scheduler.DzCAVM60.js", "../chunks/index.DwYoDg2H.js", "../chunks/stores.fF1QwH90.js", "../chunks/entry.SlVfifYU.js", "../chunks/control.hohtrmds.js", "../chunks/progress.qkLjT_E0.js", "../chunks/separator.Df8yHFeK.js", "../chunks/index.CQsdq6w9.js", "../chunks/events.CmfBQBaE.js", "../assets/index.CqNDpgoD.css", "../assets/0.3ffSk005.css", "../nodes/1.waplhUm6.js", "../nodes/2.ko6N8qwz.js", "../chunks/moment.BSLQQzQO.js", "../chunks/input.78UptVJ6.js", "../nodes/3.D38hd0oW.js", "../nodes/4.DtTuLWSx.js", "../nodes/5.B6Nhplu6.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
import {s as B, a as U, B as h, d as q, j as b, g as p, C as j, D as F, e as G, c as H, b as M, i as D, E as d, t as W, f as z, l as J, F as I, G as E, H as K} from "../chunks/scheduler.DzCAVM60.js";
import {S as Q, i as X, t as g, c as P, a as w, g as L, b as v, d as O, m as R, e as y} from "../chunks/index.DwYoDg2H.js";
const Y = "modulepreload"
  , Z = function(a, e) {
    return new URL(a,e).href
}
  , T = {}
  , k = function(e, n, i) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        const c = document.getElementsByTagName("link");
        s = Promise.all(n.map(t=>{
            if (t = Z(t, i),
            t in T)
                return;
            T[t] = !0;
            const r = t.endsWith(".css")
              , l = r ? '[rel="stylesheet"]' : "";
            if (!!i)
                for (let u = c.length - 1; u >= 0; u--) {
                    const m = c[u];
                    if (m.href === t && (!r || m.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${t}"]${l}`))
                return;
            const o = document.createElement("link");
            if (o.rel = r ? "stylesheet" : Y,
            r || (o.as = "script",
            o.crossOrigin = ""),
            o.href = t,
            document.head.appendChild(o),
            r)
                return new Promise((u,m)=>{
                    o.addEventListener("load", u),
                    o.addEventListener("error", ()=>m(new Error(`Unable to preload CSS for ${t}`)))
                }
                )
        }
        ))
    }
    return s.then(()=>e()).catch(c=>{
        const t = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (t.payload = c,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw c
    }
    )
}
  , re = {};
function $(a) {
    let e, n, i;
    var s = a[1][0];
    function c(t, r) {
        return {
            props: {
                data: t[3],
                form: t[2]
            }
        }
    }
    return s && (e = E(s, c(a)),
    a[12](e)),
    {
        c() {
            e && v(e.$$.fragment),
            n = h()
        },
        l(t) {
            e && O(e.$$.fragment, t),
            n = h()
        },
        m(t, r) {
            e && R(e, t, r),
            b(t, n, r),
            i = !0
        },
        p(t, r) {
            if (r & 2 && s !== (s = t[1][0])) {
                if (e) {
                    L();
                    const l = e;
                    g(l.$$.fragment, 1, 0, ()=>{
                        y(l, 1)
                    }
                    ),
                    P()
                }
                s ? (e = E(s, c(t)),
                t[12](e),
                v(e.$$.fragment),
                w(e.$$.fragment, 1),
                R(e, n.parentNode, n)) : e = null
            } else if (s) {
                const l = {};
                r & 8 && (l.data = t[3]),
                r & 4 && (l.form = t[2]),
                e.$set(l)
            }
        },
        i(t) {
            i || (e && w(e.$$.fragment, t),
            i = !0)
        },
        o(t) {
            e && g(e.$$.fragment, t),
            i = !1
        },
        d(t) {
            t && p(n),
            a[12](null),
            e && y(e, t)
        }
    }
}
function x(a) {
    let e, n, i;
    var s = a[1][0];
    function c(t, r) {
        return {
            props: {
                data: t[3],
                $$slots: {
                    default: [ee]
                },
                $$scope: {
                    ctx: t
                }
            }
        }
    }
    return s && (e = E(s, c(a)),
    a[11](e)),
    {
        c() {
            e && v(e.$$.fragment),
            n = h()
        },
        l(t) {
            e && O(e.$$.fragment, t),
            n = h()
        },
        m(t, r) {
            e && R(e, t, r),
            b(t, n, r),
            i = !0
        },
        p(t, r) {
            if (r & 2 && s !== (s = t[1][0])) {
                if (e) {
                    L();
                    const l = e;
                    g(l.$$.fragment, 1, 0, ()=>{
                        y(l, 1)
                    }
                    ),
                    P()
                }
                s ? (e = E(s, c(t)),
                t[11](e),
                v(e.$$.fragment),
                w(e.$$.fragment, 1),
                R(e, n.parentNode, n)) : e = null
            } else if (s) {
                const l = {};
                r & 8 && (l.data = t[3]),
                r & 8215 && (l.$$scope = {
                    dirty: r,
                    ctx: t
                }),
                e.$set(l)
            }
        },
        i(t) {
            i || (e && w(e.$$.fragment, t),
            i = !0)
        },
        o(t) {
            e && g(e.$$.fragment, t),
            i = !1
        },
        d(t) {
            t && p(n),
            a[11](null),
            e && y(e, t)
        }
    }
}
function ee(a) {
    let e, n, i;
    var s = a[1][1];
    function c(t, r) {
        return {
            props: {
                data: t[4],
                form: t[2]
            }
        }
    }
    return s && (e = E(s, c(a)),
    a[10](e)),
    {
        c() {
            e && v(e.$$.fragment),
            n = h()
        },
        l(t) {
            e && O(e.$$.fragment, t),
            n = h()
        },
        m(t, r) {
            e && R(e, t, r),
            b(t, n, r),
            i = !0
        },
        p(t, r) {
            if (r & 2 && s !== (s = t[1][1])) {
                if (e) {
                    L();
                    const l = e;
                    g(l.$$.fragment, 1, 0, ()=>{
                        y(l, 1)
                    }
                    ),
                    P()
                }
                s ? (e = E(s, c(t)),
                t[10](e),
                v(e.$$.fragment),
                w(e.$$.fragment, 1),
                R(e, n.parentNode, n)) : e = null
            } else if (s) {
                const l = {};
                r & 16 && (l.data = t[4]),
                r & 4 && (l.form = t[2]),
                e.$set(l)
            }
        },
        i(t) {
            i || (e && w(e.$$.fragment, t),
            i = !0)
        },
        o(t) {
            e && g(e.$$.fragment, t),
            i = !1
        },
        d(t) {
            t && p(n),
            a[10](null),
            e && y(e, t)
        }
    }
}
function V(a) {
    let e, n = a[6] && A(a);
    return {
        c() {
            e = G("div"),
            n && n.c(),
            this.h()
        },
        l(i) {
            e = H(i, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var s = M(e);
            n && n.l(s),
            s.forEach(p),
            this.h()
        },
        h() {
            D(e, "id", "svelte-announcer"),
            D(e, "aria-live", "assertive"),
            D(e, "aria-atomic", "true"),
            d(e, "position", "absolute"),
            d(e, "left", "0"),
            d(e, "top", "0"),
            d(e, "clip", "rect(0 0 0 0)"),
            d(e, "clip-path", "inset(50%)"),
            d(e, "overflow", "hidden"),
            d(e, "white-space", "nowrap"),
            d(e, "width", "1px"),
            d(e, "height", "1px")
        },
        m(i, s) {
            b(i, e, s),
            n && n.m(e, null)
        },
        p(i, s) {
            i[6] ? n ? n.p(i, s) : (n = A(i),
            n.c(),
            n.m(e, null)) : n && (n.d(1),
            n = null)
        },
        d(i) {
            i && p(e),
            n && n.d()
        }
    }
}
function A(a) {
    let e;
    return {
        c() {
            e = W(a[7])
        },
        l(n) {
            e = z(n, a[7])
        },
        m(n, i) {
            b(n, e, i)
        },
        p(n, i) {
            i & 128 && J(e, n[7])
        },
        d(n) {
            n && p(e)
        }
    }
}
function te(a) {
    let e, n, i, s, c;
    const t = [x, $]
      , r = [];
    function l(o, u) {
        return o[1][1] ? 0 : 1
    }
    e = l(a),
    n = r[e] = t[e](a);
    let _ = a[5] && V(a);
    return {
        c() {
            n.c(),
            i = U(),
            _ && _.c(),
            s = h()
        },
        l(o) {
            n.l(o),
            i = q(o),
            _ && _.l(o),
            s = h()
        },
        m(o, u) {
            r[e].m(o, u),
            b(o, i, u),
            _ && _.m(o, u),
            b(o, s, u),
            c = !0
        },
        p(o, [u]) {
            let m = e;
            e = l(o),
            e === m ? r[e].p(o, u) : (L(),
            g(r[m], 1, 1, ()=>{
                r[m] = null
            }
            ),
            P(),
            n = r[e],
            n ? n.p(o, u) : (n = r[e] = t[e](o),
            n.c()),
            w(n, 1),
            n.m(i.parentNode, i)),
            o[5] ? _ ? _.p(o, u) : (_ = V(o),
            _.c(),
            _.m(s.parentNode, s)) : _ && (_.d(1),
            _ = null)
        },
        i(o) {
            c || (w(n),
            c = !0)
        },
        o(o) {
            g(n),
            c = !1
        },
        d(o) {
            o && (p(i),
            p(s)),
            r[e].d(o),
            _ && _.d(o)
        }
    }
}
function ne(a, e, n) {
    let {stores: i} = e
      , {page: s} = e
      , {constructors: c} = e
      , {components: t=[]} = e
      , {form: r} = e
      , {data_0: l=null} = e
      , {data_1: _=null} = e;
    j(i.page.notify);
    let o = !1
      , u = !1
      , m = null;
    F(()=>{
        const f = i.page.subscribe(()=>{
            o && (n(6, u = !0),
            K().then(()=>{
                n(7, m = document.title || "untitled page")
            }
            ))
        }
        );
        return n(5, o = !0),
        f
    }
    );
    function N(f) {
        I[f ? "unshift" : "push"](()=>{
            t[1] = f,
            n(0, t)
        }
        )
    }
    function S(f) {
        I[f ? "unshift" : "push"](()=>{
            t[0] = f,
            n(0, t)
        }
        )
    }
    function C(f) {
        I[f ? "unshift" : "push"](()=>{
            t[0] = f,
            n(0, t)
        }
        )
    }
    return a.$$set = f=>{
        "stores"in f && n(8, i = f.stores),
        "page"in f && n(9, s = f.page),
        "constructors"in f && n(1, c = f.constructors),
        "components"in f && n(0, t = f.components),
        "form"in f && n(2, r = f.form),
        "data_0"in f && n(3, l = f.data_0),
        "data_1"in f && n(4, _ = f.data_1)
    }
    ,
    a.$$.update = ()=>{
        a.$$.dirty & 768 && i.page.set(s)
    }
    ,
    [t, c, r, l, _, o, u, m, i, s, N, S, C]
}
class oe extends Q {
    constructor(e) {
        super(),
        X(this, e, ne, te, B, {
            stores: 8,
            page: 9,
            constructors: 1,
            components: 0,
            form: 2,
            data_0: 3,
            data_1: 4
        })
    }
}
const ae = [()=>k(()=>import("../nodes/0.DJEbrfuE.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), import.meta.url), ()=>k(()=>import("../nodes/1.waplhUm6.js"), __vite__mapDeps([12, 1, 2, 3, 4, 5]), import.meta.url), ()=>k(()=>import("../nodes/2.ko6N8qwz.js"), __vite__mapDeps([13, 14, 5, 1, 7, 2, 8, 9, 10, 15, 3, 4]), import.meta.url), ()=>k(()=>import("../nodes/3.D38hd0oW.js"), __vite__mapDeps([16, 14, 5, 1, 7, 2, 9]), import.meta.url), ()=>k(()=>import("../nodes/4.DtTuLWSx.js"), __vite__mapDeps([17, 14, 5, 1, 7, 2, 15, 6]), import.meta.url), ()=>k(()=>import("../nodes/5.B6Nhplu6.js"), __vite__mapDeps([18, 1, 2]), import.meta.url)]
  , le = []
  , fe = {
    "/": [2],
    "/chart": [3],
    "/pnl-scanner": [4],
    "/swap": [5]
}
  , ce = {
    handleError: ({error: a})=>{
        console.error(a)
    }
    ,
    reroute: ()=>{}
};
export {fe as dictionary, ce as hooks, re as matchers, ae as nodes, oe as root, le as server_loads};
