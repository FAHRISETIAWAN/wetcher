import {n as l, z as m, u as E, s as S, A as w} from "./scheduler.DzCAVM60.js";
const a = [];
function x(s, e) {
    return {
        subscribe: q(s, e).subscribe
    }
}
function q(s, e=l) {
    let t;
    const n = new Set;
    function u(i) {
        if (S(s, i) && (s = i,
        t)) {
            const o = !a.length;
            for (const r of n)
                r[1](),
                a.push(r, s);
            if (o) {
                for (let r = 0; r < a.length; r += 2)
                    a[r][0](a[r + 1]);
                a.length = 0
            }
        }
    }
    function f(i) {
        u(i(s))
    }
    function b(i, o=l) {
        const r = [i, o];
        return n.add(r),
        n.size === 1 && (t = e(u, f) || l),
        i(s),
        ()=>{
            n.delete(r),
            n.size === 0 && t && (t(),
            t = null)
        }
    }
    return {
        set: u,
        update: f,
        subscribe: b
    }
}
function A(s, e, t) {
    const n = !Array.isArray(s)
      , u = n ? [s] : s;
    if (!u.every(Boolean))
        throw new Error("derived() expects stores as input, got a falsy value");
    const f = e.length < 2;
    return x(t, (b,i)=>{
        let o = !1;
        const r = [];
        let d = 0
          , h = l;
        const g = ()=>{
            if (d)
                return;
            h();
            const c = e(n ? r[0] : r, b, i);
            f ? b(c) : h = w(c) ? c : l
        }
          , y = u.map((c,p)=>m(c, _=>{
            r[p] = _,
            d &= ~(1 << p),
            o && g()
        }
        , ()=>{
            d |= 1 << p
        }
        ));
        return o = !0,
        g(),
        function() {
            E(y),
            h(),
            o = !1
        }
    }
    )
}
function H(s) {
    return {
        subscribe: s.subscribe.bind(s)
    }
}
class R {
    constructor(e, t) {
        this.status = e,
        typeof t == "string" ? this.body = {
            message: t
        } : t ? this.body = t : this.body = {
            message: `Error: ${e}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class v {
    constructor(e, t) {
        this.status = e,
        this.location = t
    }
}
class B extends Error {
    constructor(e, t, n) {
        super(n),
        this.status = e,
        this.text = t
    }
}
export {R as H, v as R, B as S, H as a, A as d, x as r, q as w};
