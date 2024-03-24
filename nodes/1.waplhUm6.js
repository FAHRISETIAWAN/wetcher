import {s as q, e as d, a as I, t as v, c as g, b as E, d as S, f as x, g as b, h as k, i as h, j as w, k as i, l as $, n as j, m as C} from "../chunks/scheduler.DzCAVM60.js";
import {S as D, i as G} from "../chunks/index.DwYoDg2H.js";
import {p as H} from "../chunks/stores.fF1QwH90.js";
function M(c) {
    var y;
    let e, t, n, o, r, m = c[0].status + "", u, _, p = ((y = c[0].error) == null ? void 0 : y.message) + "", f;
    return {
        c() {
            e = d("div"),
            t = d("img"),
            o = I(),
            r = d("h1"),
            u = v(m),
            _ = v(": "),
            f = v(p),
            this.h()
        },
        l(a) {
            e = g(a, "DIV", {
                class: !0
            });
            var s = E(e);
            t = g(s, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
            o = S(s),
            r = g(s, "H1", {});
            var l = E(r);
            u = x(l, m),
            _ = x(l, ": "),
            f = x(l, p),
            l.forEach(b),
            s.forEach(b),
            this.h()
        },
        h() {
            k(t.src, n = "fav.svg") || h(t, "src", n),
            h(t, "class", "w-52"),
            h(t, "alt", ""),
            h(e, "class", "flex flex-col h-[80dvh] items-center text-center justify-center opacity-30 gap-5")
        },
        m(a, s) {
            w(a, e, s),
            i(e, t),
            i(e, o),
            i(e, r),
            i(r, u),
            i(r, _),
            i(r, f)
        },
        p(a, [s]) {
            var l;
            s & 1 && m !== (m = a[0].status + "") && $(u, m),
            s & 1 && p !== (p = ((l = a[0].error) == null ? void 0 : l.message) + "") && $(f, p)
        },
        i: j,
        o: j,
        d(a) {
            a && b(e)
        }
    }
}
function V(c, e, t) {
    let n;
    return C(c, H, o=>t(0, n = o)),
    [n]
}
class F extends D {
    constructor(e) {
        super(),
        G(this, e, V, M, q, {})
    }
}
export {F as component};
