var Z = Object.defineProperty;
var q = (t,e,n)=>e in t ? Z(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var z = (t,e,n)=>(q(t, typeof e != "symbol" ? e + "" : e, n),
n);
import {n as w, O as G, P as H, g as T, u as k, A as P, Q as O, R as J, I as N, S as L, b as K, T as tt, U as et, V as nt, W as it, X as Q, Y as st, Z as rt, _ as at, $ as ot, a0 as ft} from "./scheduler.DzCAVM60.js";
const W = typeof window < "u";
let U = W ? ()=>window.performance.now() : ()=>Date.now()
  , V = W ? t=>requestAnimationFrame(t) : w;
const S = new Set;
function X(t) {
    S.forEach(e=>{
        e.c(t) || (S.delete(e),
        e.f())
    }
    ),
    S.size !== 0 && V(X)
}
function B(t) {
    let e;
    return S.size === 0 && V(X),
    {
        promise: new Promise(n=>{
            S.add(e = {
                c: t,
                f: n
            })
        }
        ),
        abort() {
            S.delete(e)
        }
    }
}
const A = new Map;
let C = 0;
function ut(t) {
    let e = 5381
      , n = t.length;
    for (; n--; )
        e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}
function lt(t, e) {
    const n = {
        stylesheet: H(e),
        rules: {}
    };
    return A.set(t, n),
    n
}
function I(t, e, n, s, u, a, l, i=0) {
    const c = 16.666 / s;
    let r = `{
`;
    for (let $ = 0; $ <= 1; $ += c) {
        const m = e + (n - e) * a($);
        r += $ * 100 + `%{${l(m, 1 - m)}}
`
    }
    const d = r + `100% {${l(n, 1 - n)}}
}`
      , f = `__svelte_${ut(d)}_${i}`
      , g = G(t)
      , {stylesheet: h, rules: o} = A.get(g) || lt(g, t);
    o[f] || (o[f] = !0,
    h.insertRule(`@keyframes ${f} ${d}`, h.cssRules.length));
    const _ = t.style.animation || "";
    return t.style.animation = `${_ ? `${_}, ` : ""}${f} ${s}ms linear ${u}ms 1 both`,
    C += 1,
    f
}
function M(t, e) {
    const n = (t.style.animation || "").split(", ")
      , s = n.filter(e ? a=>a.indexOf(e) < 0 : a=>a.indexOf("__svelte") === -1)
      , u = n.length - s.length;
    u && (t.style.animation = s.join(", "),
    C -= u,
    C || ct())
}
function ct() {
    V(()=>{
        C || (A.forEach(t=>{
            const {ownerNode: e} = t.stylesheet;
            e && T(e)
        }
        ),
        A.clear())
    }
    )
}
let E;
function D() {
    return E || (E = Promise.resolve(),
    E.then(()=>{
        E = null
    }
    )),
    E
}
function v(t, e, n) {
    t.dispatchEvent(J(`${e ? "intro" : "outro"}${n}`))
}
const j = new Set;
let p;
function yt() {
    p = {
        r: 0,
        c: [],
        p
    }
}
function xt() {
    p.r || k(p.c),
    p = p.p
}
function dt(t, e) {
    t && t.i && (j.delete(t),
    t.i(e))
}
function vt(t, e, n, s) {
    if (t && t.o) {
        if (j.has(t))
            return;
        j.add(t),
        p.c.push(()=>{
            j.delete(t),
            s && (n && t.d(1),
            s())
        }
        ),
        t.o(e)
    } else
        s && s()
}
const F = {
    duration: 0
};
function wt(t, e, n) {
    const s = {
        direction: "in"
    };
    let u = e(t, n, s), a = !1, l, i, c = 0;
    function r() {
        l && M(t, l)
    }
    function d() {
        const {delay: g=0, duration: h=300, easing: o=N, tick: _=w, css: $} = u || F;
        $ && (l = I(t, 0, 1, h, g, o, $, c++)),
        _(0, 1);
        const m = U() + g
          , y = m + h;
        i && i.abort(),
        a = !0,
        O(()=>v(t, !0, "start")),
        i = B(x=>{
            if (a) {
                if (x >= y)
                    return _(1, 0),
                    v(t, !0, "end"),
                    r(),
                    a = !1;
                if (x >= m) {
                    const b = o((x - m) / h);
                    _(b, 1 - b)
                }
            }
            return a
        }
        )
    }
    let f = !1;
    return {
        start() {
            f || (f = !0,
            M(t),
            P(u) ? (u = u(s),
            D().then(d)) : d())
        },
        invalidate() {
            f = !1
        },
        end() {
            a && (r(),
            a = !1)
        }
    }
}
function bt(t, e, n) {
    const s = {
        direction: "out"
    };
    let u = e(t, n, s), a = !0, l;
    const i = p;
    i.r += 1;
    let c;
    function r() {
        const {delay: d=0, duration: f=300, easing: g=N, tick: h=w, css: o} = u || F;
        o && (l = I(t, 1, 0, f, d, g, o));
        const _ = U() + d
          , $ = _ + f;
        O(()=>v(t, !1, "start")),
        "inert"in t && (c = t.inert,
        t.inert = !0),
        B(m=>{
            if (a) {
                if (m >= $)
                    return h(0, 1),
                    v(t, !1, "end"),
                    --i.r || k(i.c),
                    !1;
                if (m >= _) {
                    const y = g((m - _) / f);
                    h(1 - y, y)
                }
            }
            return a
        }
        )
    }
    return P(u) ? D().then(()=>{
        u = u(s),
        r()
    }
    ) : r(),
    {
        end(d) {
            d && "inert"in t && (t.inert = c),
            d && u.tick && u.tick(1, 0),
            a && (l && M(t, l),
            a = !1)
        }
    }
}
function St(t, e, n, s) {
    let a = e(t, n, {
        direction: "both"
    }), l = s ? 0 : 1, i = null, c = null, r = null, d;
    function f() {
        r && M(t, r)
    }
    function g(o, _) {
        const $ = o.b - l;
        return _ *= Math.abs($),
        {
            a: l,
            b: o.b,
            d: $,
            duration: _,
            start: o.start,
            end: o.start + _,
            group: o.group
        }
    }
    function h(o) {
        const {delay: _=0, duration: $=300, easing: m=N, tick: y=w, css: x} = a || F
          , b = {
            start: U() + _,
            b: o
        };
        o || (b.group = p,
        p.r += 1),
        "inert"in t && (o ? d !== void 0 && (t.inert = d) : (d = t.inert,
        t.inert = !0)),
        i || c ? c = b : (x && (f(),
        r = I(t, l, o, $, _, m, x)),
        o && y(0, 1),
        i = g(b, $),
        O(()=>v(t, o, "start")),
        B(R=>{
            if (c && R > c.start && (i = g(c, $),
            c = null,
            v(t, i.b, "start"),
            x && (f(),
            r = I(t, l, i.b, i.duration, 0, m, a.css))),
            i) {
                if (R >= i.end)
                    y(l = i.b, 1 - l),
                    v(t, i.b, "end"),
                    c || (i.b ? f() : --i.group.r || k(i.group.c)),
                    i = null;
                else if (R >= i.start) {
                    const Y = R - i.start;
                    l = i.a + i.d * m(Y / i.duration),
                    y(l, 1 - l)
                }
            }
            return !!(i || c)
        }
        ))
    }
    return {
        run(o) {
            P(a) ? D().then(()=>{
                a = a({
                    direction: o ? "in" : "out"
                }),
                h(o)
            }
            ) : h(o)
        },
        end() {
            f(),
            i = c = null
        }
    }
}
function kt(t, e, n) {
    const s = t.$$.props[e];
    s !== void 0 && (t.$$.bound[s] = n,
    n(t.$$.ctx[s]))
}
function Et(t) {
    t && t.c()
}
function Ot(t, e) {
    t && t.l(e)
}
function _t(t, e, n) {
    const {fragment: s, after_update: u} = t.$$;
    s && s.m(e, n),
    O(()=>{
        const a = t.$$.on_mount.map(st).filter(P);
        t.$$.on_destroy ? t.$$.on_destroy.push(...a) : k(a),
        t.$$.on_mount = []
    }
    ),
    u.forEach(O)
}
function $t(t, e) {
    const n = t.$$;
    n.fragment !== null && (nt(n.after_update),
    k(n.on_destroy),
    n.fragment && n.fragment.d(e),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function ht(t, e) {
    t.$$.dirty[0] === -1 && (rt.push(t),
    at(),
    t.$$.dirty.fill(0)),
    t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function Pt(t, e, n, s, u, a, l=null, i=[-1]) {
    const c = it;
    Q(t);
    const r = t.$$ = {
        fragment: null,
        ctx: [],
        props: a,
        update: w,
        not_equal: u,
        bound: L(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: L(),
        dirty: i,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    l && l(r.root);
    let d = !1;
    if (r.ctx = n ? n(t, e.props || {}, (f,g,...h)=>{
        const o = h.length ? h[0] : g;
        return r.ctx && u(r.ctx[f], r.ctx[f] = o) && (!r.skip_bound && r.bound[f] && r.bound[f](o),
        d && ht(t, f)),
        g
    }
    ) : [],
    r.update(),
    d = !0,
    k(r.before_update),
    r.fragment = s ? s(r.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            ot();
            const f = K(e.target);
            r.fragment && r.fragment.l(f),
            f.forEach(T)
        } else
            r.fragment && r.fragment.c();
        e.intro && dt(t.$$.fragment),
        _t(t, e.target, e.anchor),
        ft(),
        tt()
    }
    Q(c)
}
class Rt {
    constructor() {
        z(this, "$$");
        z(this, "$$set")
    }
    $destroy() {
        $t(this, 1),
        this.$destroy = w
    }
    $on(e, n) {
        if (!P(n))
            return w;
        const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return s.push(n),
        ()=>{
            const u = s.indexOf(n);
            u !== -1 && s.splice(u, 1)
        }
    }
    $set(e) {
        this.$$set && !et(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const gt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(gt);
export {Rt as S, dt as a, Et as b, xt as c, Ot as d, $t as e, kt as f, yt as g, St as h, Pt as i, bt as j, wt as k, _t as m, vt as t};
