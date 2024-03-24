import {ac as Ci, H as yt, s as Te, B as ge, j as le, g as q, v as ie, o as V, w as Le, x as se, F as ze, J as ae, e as Be, c as Ke, b as We, a6 as kt, r as ee, L as ue, M as ce, N as fe, u as et, K as He, A as ar, a1 as Ai, a2 as Pi, m as nt, p as ve, n as Mn, Q as Tn} from "./scheduler.DzCAVM60.js";
import {S as Ie, i as De, g as dt, t as M, c as mt, a as L, j as Si, k as Ii, h as Ln, b as Ft, d as Rt, m as Mt, e as Lt} from "./index.DwYoDg2H.js";
import {y as Re, l as at, n as I, w as we, D as ur, E as En, v as Di, j as Fe, F as Ae, d as cr, t as Gt, m as Ce, u as At, z as fr, x as Xe, k as Z, G as Bn, q as ke, H as Yt, I as Qe, J as dr, K as Kn, b as qt, i as mn, o as Ni, g as ye, e as mr, r as gr, f as br, L as hr, c as qe, h as Bt, A as vr, a as pr} from "./separator.Df8yHFeK.js";
import {w as yr, l as _r, c as On} from "./events.CmfBQBaE.js";
import {d as _t, w as he, a as Wn} from "./control.hohtrmds.js";
function wr(t) {
    t.setAttribute("data-highlighted", "")
}
function vt(t) {
    t.removeAttribute("data-highlighted")
}
function xe(t) {
    return new Promise(e=>setTimeout(e, t))
}
let kr = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"
  , Fi = (t=21)=>{
    let e = ""
      , n = t;
    for (; n--; )
        e += kr[Math.random() * 64 | 0];
    return e
}
;
function Tr() {
    return Fi(10)
}
function Vn(t) {
    return t.reduce((e,n)=>(e[n] = Tr(),
    e), {})
}
function Er(t, e=500) {
    let n = null;
    return function(...i) {
        const r = ()=>{
            n = null,
            t(...i)
        }
        ;
        n && clearTimeout(n),
        n = setTimeout(r, e)
    }
}
const Ri = ()=>typeof window < "u";
function Or() {
    const t = navigator.userAgentData;
    return (t == null ? void 0 : t.platform) ?? navigator.platform
}
const Mi = t=>Ri() && t.test(Or().toLowerCase())
  , Cr = ()=>Ri() && !!navigator.maxTouchPoints
  , Ar = ()=>Mi(/^mac/) && !Cr()
  , Pr = ()=>Mi(/mac|iphone|ipad|ipod/i)
  , Sr = ()=>Pr() && !Ar()
  , gn = "data-melt-scroll-lock";
function jn(t, e) {
    if (!t)
        return;
    const n = t.style.cssText;
    return Object.assign(t.style, e),
    ()=>{
        t.style.cssText = n
    }
}
function Ir(t, e, n) {
    if (!t)
        return;
    const i = t.style.getPropertyValue(e);
    return t.style.setProperty(e, n),
    ()=>{
        i ? t.style.setProperty(e, i) : t.style.removeProperty(e)
    }
}
function Dr(t) {
    const e = t.getBoundingClientRect().left;
    return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight"
}
function Nr(t) {
    const e = t ?? document
      , n = e.defaultView ?? window
      , {documentElement: i, body: r} = e;
    if (r.hasAttribute(gn))
        return Re;
    r.setAttribute(gn, "");
    const o = n.innerWidth - i.clientWidth
      , c = ()=>Ir(i, "--scrollbar-width", `${o}px`)
      , l = Dr(i)
      , a = n.getComputedStyle(r)[l]
      , u = ()=>jn(r, {
        overflow: "hidden",
        [l]: `calc(${a} + ${o}px)`
    })
      , f = ()=>{
        const {scrollX: b, scrollY: w, visualViewport: _} = n
          , d = (_ == null ? void 0 : _.offsetLeft) ?? 0
          , g = (_ == null ? void 0 : _.offsetTop) ?? 0
          , y = jn(r, {
            position: "fixed",
            overflow: "hidden",
            top: `${-(w - Math.floor(g))}px`,
            left: `${-(b - Math.floor(d))}px`,
            right: "0",
            [l]: `calc(${a} + ${o}px)`
        });
        return ()=>{
            y == null || y(),
            n.scrollTo(b, w)
        }
    }
      , m = [c(), Sr() ? f() : u()];
    return ()=>{
        m.forEach(b=>b == null ? void 0 : b()),
        r.removeAttribute(gn)
    }
}
function zn(t) {
    const {open: e, forceVisible: n, activeTrigger: i} = t;
    return _t([e, n, i], ([r,s,o])=>(r || s) && o !== null)
}
function _e(t) {
    at && xe(1).then(()=>{
        const e = document.activeElement;
        !I(e) || e === t || (e.tabIndex = -1,
        t && (t.tabIndex = 0,
        t.focus()))
    }
    )
}
function Li() {
    return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'))
}
function Fr(t) {
    const e = Li()
      , i = e.indexOf(t) + 1
      , r = e[i];
    return i < e.length && I(r) ? r : null
}
function Rr(t) {
    const e = Li()
      , i = e.indexOf(t) - 1
      , r = e[i];
    return i >= 0 && I(r) ? r : null
}
const Mr = new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock"])
  , Lr = {
    onMatch: _e,
    getCurrentItem: ()=>document.activeElement
};
function Br(t={}) {
    const e = {
        ...Lr,
        ...t
    }
      , n = we(he([]))
      , i = Er(()=>{
        n.update(()=>[])
    }
    );
    return {
        typed: n,
        resetTyped: i,
        handleTypeaheadSearch: (s,o)=>{
            if (Mr.has(s))
                return;
            const c = e.getCurrentItem()
              , l = Ci(n);
            if (!Array.isArray(l))
                return;
            l.push(s.toLowerCase()),
            n.set(l);
            const a = o.filter(d=>!(d.getAttribute("disabled") === "true" || d.getAttribute("aria-disabled") === "true" || d.hasAttribute("data-disabled")))
              , f = l.length > 1 && l.every(d=>d === l[0]) ? l[0] : l.join("")
              , m = I(c) ? a.indexOf(c) : -1;
            let b = yr(a, Math.max(m, 0));
            f.length === 1 && (b = b.filter(d=>d !== c));
            const _ = b.find(d=>(d == null ? void 0 : d.innerText) && d.innerText.toLowerCase().startsWith(f.toLowerCase()));
            I(_) && _ !== c && e.onMatch(_),
            i()
        }
    }
}
function Kr(t) {
    let e = t.parentElement;
    for (; I(e) && !e.hasAttribute("data-portal"); )
        e = e.parentElement;
    return e || "body"
}
function Hn(t, e) {
    return e !== void 0 ? e : Kr(t) === "body" ? document.body : null
}
async function Wr(t) {
    const {prop: e, defaultEl: n} = t;
    if (await Promise.all([xe(1), yt]),
    e === void 0) {
        n == null || n.focus();
        return
    }
    const i = ur(e) ? e(n) : e;
    if (typeof i == "string") {
        const r = document.querySelector(i);
        if (!I(r))
            return;
        r.focus()
    } else
        I(i) && i.focus()
}
const it = Math.min
  , Pe = Math.max
  , Jt = Math.round
  , zt = Math.floor
  , rt = t=>({
    x: t,
    y: t
})
  , Vr = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , jr = {
    start: "end",
    end: "start"
};
function _n(t, e, n) {
    return Pe(t, it(e, n))
}
function Et(t, e) {
    return typeof t == "function" ? t(e) : t
}
function ot(t) {
    return t.split("-")[0]
}
function Ot(t) {
    return t.split("-")[1]
}
function Bi(t) {
    return t === "x" ? "y" : "x"
}
function Cn(t) {
    return t === "y" ? "height" : "width"
}
function Kt(t) {
    return ["top", "bottom"].includes(ot(t)) ? "y" : "x"
}
function An(t) {
    return Bi(Kt(t))
}
function zr(t, e, n) {
    n === void 0 && (n = !1);
    const i = Ot(t)
      , r = An(t)
      , s = Cn(r);
    let o = r === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[s] > e.floating[s] && (o = Zt(o)),
    [o, Zt(o)]
}
function Hr(t) {
    const e = Zt(t);
    return [wn(t), e, wn(e)]
}
function wn(t) {
    return t.replace(/start|end/g, e=>jr[e])
}
function Ur(t, e, n) {
    const i = ["left", "right"]
      , r = ["right", "left"]
      , s = ["top", "bottom"]
      , o = ["bottom", "top"];
    switch (t) {
    case "top":
    case "bottom":
        return n ? e ? r : i : e ? i : r;
    case "left":
    case "right":
        return e ? s : o;
    default:
        return []
    }
}
function Xr(t, e, n, i) {
    const r = Ot(t);
    let s = Ur(ot(t), n === "start", i);
    return r && (s = s.map(o=>o + "-" + r),
    e && (s = s.concat(s.map(wn)))),
    s
}
function Zt(t) {
    return t.replace(/left|right|bottom|top/g, e=>Vr[e])
}
function Gr(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}
function Ki(t) {
    return typeof t != "number" ? Gr(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}
function Qt(t) {
    return {
        ...t,
        top: t.y,
        left: t.x,
        right: t.x + t.width,
        bottom: t.y + t.height
    }
}
function Un(t, e, n) {
    let {reference: i, floating: r} = t;
    const s = Kt(e)
      , o = An(e)
      , c = Cn(o)
      , l = ot(e)
      , a = s === "y"
      , u = i.x + i.width / 2 - r.width / 2
      , f = i.y + i.height / 2 - r.height / 2
      , m = i[c] / 2 - r[c] / 2;
    let b;
    switch (l) {
    case "top":
        b = {
            x: u,
            y: i.y - r.height
        };
        break;
    case "bottom":
        b = {
            x: u,
            y: i.y + i.height
        };
        break;
    case "right":
        b = {
            x: i.x + i.width,
            y: f
        };
        break;
    case "left":
        b = {
            x: i.x - r.width,
            y: f
        };
        break;
    default:
        b = {
            x: i.x,
            y: i.y
        }
    }
    switch (Ot(e)) {
    case "start":
        b[o] -= m * (n && a ? -1 : 1);
        break;
    case "end":
        b[o] += m * (n && a ? -1 : 1);
        break
    }
    return b
}
const qr = async(t,e,n)=>{
    const {placement: i="bottom", strategy: r="absolute", middleware: s=[], platform: o} = n
      , c = s.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(e));
    let a = await o.getElementRects({
        reference: t,
        floating: e,
        strategy: r
    })
      , {x: u, y: f} = Un(a, i, l)
      , m = i
      , b = {}
      , w = 0;
    for (let _ = 0; _ < c.length; _++) {
        const {name: d, fn: g} = c[_]
          , {x: y, y: N, data: S, reset: D} = await g({
            x: u,
            y: f,
            initialPlacement: i,
            placement: m,
            strategy: r,
            middlewareData: b,
            rects: a,
            platform: o,
            elements: {
                reference: t,
                floating: e
            }
        });
        u = y ?? u,
        f = N ?? f,
        b = {
            ...b,
            [d]: {
                ...b[d],
                ...S
            }
        },
        D && w <= 50 && (w++,
        typeof D == "object" && (D.placement && (m = D.placement),
        D.rects && (a = D.rects === !0 ? await o.getElementRects({
            reference: t,
            floating: e,
            strategy: r
        }) : D.rects),
        {x: u, y: f} = Un(a, m, l)),
        _ = -1)
    }
    return {
        x: u,
        y: f,
        placement: m,
        strategy: r,
        middlewareData: b
    }
}
;
async function Pn(t, e) {
    var n;
    e === void 0 && (e = {});
    const {x: i, y: r, platform: s, rects: o, elements: c, strategy: l} = t
      , {boundary: a="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: m=!1, padding: b=0} = Et(e, t)
      , w = Ki(b)
      , d = c[m ? f === "floating" ? "reference" : "floating" : f]
      , g = Qt(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(d))) == null || n ? d : d.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
        boundary: a,
        rootBoundary: u,
        strategy: l
    }))
      , y = f === "floating" ? {
        ...o.floating,
        x: i,
        y: r
    } : o.reference
      , N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating))
      , S = await (s.isElement == null ? void 0 : s.isElement(N)) ? await (s.getScale == null ? void 0 : s.getScale(N)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , D = Qt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: y,
        offsetParent: N,
        strategy: l
    }) : y);
    return {
        top: (g.top - D.top + w.top) / S.y,
        bottom: (D.bottom - g.bottom + w.bottom) / S.y,
        left: (g.left - D.left + w.left) / S.x,
        right: (D.right - g.right + w.right) / S.x
    }
}
const Yr = t=>({
    name: "arrow",
    options: t,
    async fn(e) {
        const {x: n, y: i, placement: r, rects: s, platform: o, elements: c, middlewareData: l} = e
          , {element: a, padding: u=0} = Et(t, e) || {};
        if (a == null)
            return {};
        const f = Ki(u)
          , m = {
            x: n,
            y: i
        }
          , b = An(r)
          , w = Cn(b)
          , _ = await o.getDimensions(a)
          , d = b === "y"
          , g = d ? "top" : "left"
          , y = d ? "bottom" : "right"
          , N = d ? "clientHeight" : "clientWidth"
          , S = s.reference[w] + s.reference[b] - m[b] - s.floating[w]
          , D = m[b] - s.reference[b]
          , R = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
        let C = R ? R[N] : 0;
        (!C || !await (o.isElement == null ? void 0 : o.isElement(R))) && (C = c.floating[N] || s.floating[w]);
        const x = S / 2 - D / 2
          , P = C / 2 - _[w] / 2 - 1
          , re = it(f[g], P)
          , z = it(f[y], P)
          , h = re
          , v = C - _[w] - z
          , E = C / 2 - _[w] / 2 + x
          , B = _n(h, E, v)
          , K = !l.arrow && Ot(r) != null && E !== B && s.reference[w] / 2 - (E < h ? re : z) - _[w] / 2 < 0
          , U = K ? E < h ? E - h : E - v : 0;
        return {
            [b]: m[b] + U,
            data: {
                [b]: B,
                centerOffset: E - B - U,
                ...K && {
                    alignmentOffset: U
                }
            },
            reset: K
        }
    }
})
  , Jr = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "flip",
        options: t,
        async fn(e) {
            var n, i;
            const {placement: r, middlewareData: s, rects: o, initialPlacement: c, platform: l, elements: a} = e
              , {mainAxis: u=!0, crossAxis: f=!0, fallbackPlacements: m, fallbackStrategy: b="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: _=!0, ...d} = Et(t, e);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const g = ot(r)
              , y = ot(c) === c
              , N = await (l.isRTL == null ? void 0 : l.isRTL(a.floating))
              , S = m || (y || !_ ? [Zt(c)] : Hr(c));
            !m && w !== "none" && S.push(...Xr(c, _, w, N));
            const D = [c, ...S]
              , R = await Pn(e, d)
              , C = [];
            let x = ((i = s.flip) == null ? void 0 : i.overflows) || [];
            if (u && C.push(R[g]),
            f) {
                const h = zr(r, o, N);
                C.push(R[h[0]], R[h[1]])
            }
            if (x = [...x, {
                placement: r,
                overflows: C
            }],
            !C.every(h=>h <= 0)) {
                var P, re;
                const h = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1
                  , v = D[h];
                if (v)
                    return {
                        data: {
                            index: h,
                            overflows: x
                        },
                        reset: {
                            placement: v
                        }
                    };
                let E = (re = x.filter(B=>B.overflows[0] <= 0).sort((B,K)=>B.overflows[1] - K.overflows[1])[0]) == null ? void 0 : re.placement;
                if (!E)
                    switch (b) {
                    case "bestFit":
                        {
                            var z;
                            const B = (z = x.map(K=>[K.placement, K.overflows.filter(U=>U > 0).reduce((U,te)=>U + te, 0)]).sort((K,U)=>K[1] - U[1])[0]) == null ? void 0 : z[0];
                            B && (E = B);
                            break
                        }
                    case "initialPlacement":
                        E = c;
                        break
                    }
                if (r !== E)
                    return {
                        reset: {
                            placement: E
                        }
                    }
            }
            return {}
        }
    }
};
async function Zr(t, e) {
    const {placement: n, platform: i, elements: r} = t
      , s = await (i.isRTL == null ? void 0 : i.isRTL(r.floating))
      , o = ot(n)
      , c = Ot(n)
      , l = Kt(n) === "y"
      , a = ["left", "top"].includes(o) ? -1 : 1
      , u = s && l ? -1 : 1
      , f = Et(e, t);
    let {mainAxis: m, crossAxis: b, alignmentAxis: w} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...f
    };
    return c && typeof w == "number" && (b = c === "end" ? w * -1 : w),
    l ? {
        x: b * u,
        y: m * a
    } : {
        x: m * a,
        y: b * u
    }
}
const Qr = function(t) {
    return t === void 0 && (t = 0),
    {
        name: "offset",
        options: t,
        async fn(e) {
            var n, i;
            const {x: r, y: s, placement: o, middlewareData: c} = e
              , l = await Zr(e, t);
            return o === ((n = c.offset) == null ? void 0 : n.placement) && (i = c.arrow) != null && i.alignmentOffset ? {} : {
                x: r + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , xr = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "shift",
        options: t,
        async fn(e) {
            const {x: n, y: i, placement: r} = e
              , {mainAxis: s=!0, crossAxis: o=!1, limiter: c={
                fn: d=>{
                    let {x: g, y} = d;
                    return {
                        x: g,
                        y
                    }
                }
            }, ...l} = Et(t, e)
              , a = {
                x: n,
                y: i
            }
              , u = await Pn(e, l)
              , f = Kt(ot(r))
              , m = Bi(f);
            let b = a[m]
              , w = a[f];
            if (s) {
                const d = m === "y" ? "top" : "left"
                  , g = m === "y" ? "bottom" : "right"
                  , y = b + u[d]
                  , N = b - u[g];
                b = _n(y, b, N)
            }
            if (o) {
                const d = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , y = w + u[d]
                  , N = w - u[g];
                w = _n(y, w, N)
            }
            const _ = c.fn({
                ...e,
                [m]: b,
                [f]: w
            });
            return {
                ..._,
                data: {
                    x: _.x - n,
                    y: _.y - i
                }
            }
        }
    }
}
  , $r = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "size",
        options: t,
        async fn(e) {
            const {placement: n, rects: i, platform: r, elements: s} = e
              , {apply: o=()=>{}
            , ...c} = Et(t, e)
              , l = await Pn(e, c)
              , a = ot(n)
              , u = Ot(n)
              , f = Kt(n) === "y"
              , {width: m, height: b} = i.floating;
            let w, _;
            a === "top" || a === "bottom" ? (w = a,
            _ = u === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = a,
            w = u === "end" ? "top" : "bottom");
            const d = b - l[w]
              , g = m - l[_]
              , y = !e.middlewareData.shift;
            let N = d
              , S = g;
            if (f) {
                const R = m - l.left - l.right;
                S = u || y ? it(g, R) : R
            } else {
                const R = b - l.top - l.bottom;
                N = u || y ? it(d, R) : R
            }
            if (y && !u) {
                const R = Pe(l.left, 0)
                  , C = Pe(l.right, 0)
                  , x = Pe(l.top, 0)
                  , P = Pe(l.bottom, 0);
                f ? S = m - 2 * (R !== 0 || C !== 0 ? R + C : Pe(l.left, l.right)) : N = b - 2 * (x !== 0 || P !== 0 ? x + P : Pe(l.top, l.bottom))
            }
            await o({
                ...e,
                availableWidth: S,
                availableHeight: N
            });
            const D = await r.getDimensions(s.floating);
            return m !== D.width || b !== D.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function st(t) {
    return Wi(t) ? (t.nodeName || "").toLowerCase() : "#document"
}
function Se(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function tt(t) {
    var e;
    return (e = (Wi(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}
function Wi(t) {
    return t instanceof Node || t instanceof Se(t).Node
}
function $e(t) {
    return t instanceof Element || t instanceof Se(t).Element
}
function Ye(t) {
    return t instanceof HTMLElement || t instanceof Se(t).HTMLElement
}
function Xn(t) {
    return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Se(t).ShadowRoot
}
function Wt(t) {
    const {overflow: e, overflowX: n, overflowY: i, display: r} = Me(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(r)
}
function eo(t) {
    return ["table", "td", "th"].includes(st(t))
}
function Sn(t) {
    const e = In()
      , n = Me(t);
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(i=>(n.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some(i=>(n.contain || "").includes(i))
}
function to(t) {
    let e = Tt(t);
    for (; Ye(e) && !nn(e); ) {
        if (Sn(e))
            return e;
        e = Tt(e)
    }
    return null
}
function In() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function nn(t) {
    return ["html", "body", "#document"].includes(st(t))
}
function Me(t) {
    return Se(t).getComputedStyle(t)
}
function rn(t) {
    return $e(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}
function Tt(t) {
    if (st(t) === "html")
        return t;
    const e = t.assignedSlot || t.parentNode || Xn(t) && t.host || tt(t);
    return Xn(e) ? e.host : e
}
function Vi(t) {
    const e = Tt(t);
    return nn(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Ye(e) && Wt(e) ? e : Vi(e)
}
function Nt(t, e, n) {
    var i;
    e === void 0 && (e = []),
    n === void 0 && (n = !0);
    const r = Vi(t)
      , s = r === ((i = t.ownerDocument) == null ? void 0 : i.body)
      , o = Se(r);
    return s ? e.concat(o, o.visualViewport || [], Wt(r) ? r : [], o.frameElement && n ? Nt(o.frameElement) : []) : e.concat(r, Nt(r, [], n))
}
function ji(t) {
    const e = Me(t);
    let n = parseFloat(e.width) || 0
      , i = parseFloat(e.height) || 0;
    const r = Ye(t)
      , s = r ? t.offsetWidth : n
      , o = r ? t.offsetHeight : i
      , c = Jt(n) !== s || Jt(i) !== o;
    return c && (n = s,
    i = o),
    {
        width: n,
        height: i,
        $: c
    }
}
function Dn(t) {
    return $e(t) ? t : t.contextElement
}
function wt(t) {
    const e = Dn(t);
    if (!Ye(e))
        return rt(1);
    const n = e.getBoundingClientRect()
      , {width: i, height: r, $: s} = ji(e);
    let o = (s ? Jt(n.width) : n.width) / i
      , c = (s ? Jt(n.height) : n.height) / r;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    {
        x: o,
        y: c
    }
}
const no = rt(0);
function zi(t) {
    const e = Se(t);
    return !In() || !e.visualViewport ? no : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function io(t, e, n) {
    return e === void 0 && (e = !1),
    !n || e && n !== Se(t) ? !1 : e
}
function ct(t, e, n, i) {
    e === void 0 && (e = !1),
    n === void 0 && (n = !1);
    const r = t.getBoundingClientRect()
      , s = Dn(t);
    let o = rt(1);
    e && (i ? $e(i) && (o = wt(i)) : o = wt(t));
    const c = io(s, n, i) ? zi(s) : rt(0);
    let l = (r.left + c.x) / o.x
      , a = (r.top + c.y) / o.y
      , u = r.width / o.x
      , f = r.height / o.y;
    if (s) {
        const m = Se(s)
          , b = i && $e(i) ? Se(i) : i;
        let w = m
          , _ = w.frameElement;
        for (; _ && i && b !== w; ) {
            const d = wt(_)
              , g = _.getBoundingClientRect()
              , y = Me(_)
              , N = g.left + (_.clientLeft + parseFloat(y.paddingLeft)) * d.x
              , S = g.top + (_.clientTop + parseFloat(y.paddingTop)) * d.y;
            l *= d.x,
            a *= d.y,
            u *= d.x,
            f *= d.y,
            l += N,
            a += S,
            w = Se(_),
            _ = w.frameElement
        }
    }
    return Qt({
        width: u,
        height: f,
        x: l,
        y: a
    })
}
const ro = [":popover-open", ":modal"];
function Hi(t) {
    return ro.some(e=>{
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    }
    )
}
function oo(t) {
    let {elements: e, rect: n, offsetParent: i, strategy: r} = t;
    const s = r === "fixed"
      , o = tt(i)
      , c = e ? Hi(e.floating) : !1;
    if (i === o || c && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , a = rt(1);
    const u = rt(0)
      , f = Ye(i);
    if ((f || !f && !s) && ((st(i) !== "body" || Wt(o)) && (l = rn(i)),
    Ye(i))) {
        const m = ct(i);
        a = wt(i),
        u.x = m.x + i.clientLeft,
        u.y = m.y + i.clientTop
    }
    return {
        width: n.width * a.x,
        height: n.height * a.y,
        x: n.x * a.x - l.scrollLeft * a.x + u.x,
        y: n.y * a.y - l.scrollTop * a.y + u.y
    }
}
function so(t) {
    return Array.from(t.getClientRects())
}
function Ui(t) {
    return ct(tt(t)).left + rn(t).scrollLeft
}
function lo(t) {
    const e = tt(t)
      , n = rn(t)
      , i = t.ownerDocument.body
      , r = Pe(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth)
      , s = Pe(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let o = -n.scrollLeft + Ui(t);
    const c = -n.scrollTop;
    return Me(i).direction === "rtl" && (o += Pe(e.clientWidth, i.clientWidth) - r),
    {
        width: r,
        height: s,
        x: o,
        y: c
    }
}
function ao(t, e) {
    const n = Se(t)
      , i = tt(t)
      , r = n.visualViewport;
    let s = i.clientWidth
      , o = i.clientHeight
      , c = 0
      , l = 0;
    if (r) {
        s = r.width,
        o = r.height;
        const a = In();
        (!a || a && e === "fixed") && (c = r.offsetLeft,
        l = r.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: c,
        y: l
    }
}
function uo(t, e) {
    const n = ct(t, !0, e === "fixed")
      , i = n.top + t.clientTop
      , r = n.left + t.clientLeft
      , s = Ye(t) ? wt(t) : rt(1)
      , o = t.clientWidth * s.x
      , c = t.clientHeight * s.y
      , l = r * s.x
      , a = i * s.y;
    return {
        width: o,
        height: c,
        x: l,
        y: a
    }
}
function Gn(t, e, n) {
    let i;
    if (e === "viewport")
        i = ao(t, n);
    else if (e === "document")
        i = lo(tt(t));
    else if ($e(e))
        i = uo(e, n);
    else {
        const r = zi(t);
        i = {
            ...e,
            x: e.x - r.x,
            y: e.y - r.y
        }
    }
    return Qt(i)
}
function Xi(t, e) {
    const n = Tt(t);
    return n === e || !$e(n) || nn(n) ? !1 : Me(n).position === "fixed" || Xi(n, e)
}
function co(t, e) {
    const n = e.get(t);
    if (n)
        return n;
    let i = Nt(t, [], !1).filter(c=>$e(c) && st(c) !== "body")
      , r = null;
    const s = Me(t).position === "fixed";
    let o = s ? Tt(t) : t;
    for (; $e(o) && !nn(o); ) {
        const c = Me(o)
          , l = Sn(o);
        !l && c.position === "fixed" && (r = null),
        (s ? !l && !r : !l && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Wt(o) && !l && Xi(t, o)) ? i = i.filter(u=>u !== o) : r = c,
        o = Tt(o)
    }
    return e.set(t, i),
    i
}
function fo(t) {
    let {element: e, boundary: n, rootBoundary: i, strategy: r} = t;
    const o = [...n === "clippingAncestors" ? co(e, this._c) : [].concat(n), i]
      , c = o[0]
      , l = o.reduce((a,u)=>{
        const f = Gn(e, u, r);
        return a.top = Pe(f.top, a.top),
        a.right = it(f.right, a.right),
        a.bottom = it(f.bottom, a.bottom),
        a.left = Pe(f.left, a.left),
        a
    }
    , Gn(e, c, r));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function mo(t) {
    const {width: e, height: n} = ji(t);
    return {
        width: e,
        height: n
    }
}
function go(t, e, n) {
    const i = Ye(e)
      , r = tt(e)
      , s = n === "fixed"
      , o = ct(t, !0, s, e);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = rt(0);
    if (i || !i && !s)
        if ((st(e) !== "body" || Wt(r)) && (c = rn(e)),
        i) {
            const f = ct(e, !0, s, e);
            l.x = f.x + e.clientLeft,
            l.y = f.y + e.clientTop
        } else
            r && (l.x = Ui(r));
    const a = o.left + c.scrollLeft - l.x
      , u = o.top + c.scrollTop - l.y;
    return {
        x: a,
        y: u,
        width: o.width,
        height: o.height
    }
}
function qn(t, e) {
    return !Ye(t) || Me(t).position === "fixed" ? null : e ? e(t) : t.offsetParent
}
function Gi(t, e) {
    const n = Se(t);
    if (!Ye(t) || Hi(t))
        return n;
    let i = qn(t, e);
    for (; i && eo(i) && Me(i).position === "static"; )
        i = qn(i, e);
    return i && (st(i) === "html" || st(i) === "body" && Me(i).position === "static" && !Sn(i)) ? n : i || to(t) || n
}
const bo = async function(t) {
    const e = this.getOffsetParent || Gi
      , n = this.getDimensions;
    return {
        reference: go(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            ...await n(t.floating)
        }
    }
};
function ho(t) {
    return Me(t).direction === "rtl"
}
const vo = {
    convertOffsetParentRelativeRectToViewportRelativeRect: oo,
    getDocumentElement: tt,
    getClippingRect: fo,
    getOffsetParent: Gi,
    getElementRects: bo,
    getClientRects: so,
    getDimensions: mo,
    getScale: wt,
    isElement: $e,
    isRTL: ho
};
function po(t, e) {
    let n = null, i;
    const r = tt(t);
    function s() {
        var c;
        clearTimeout(i),
        (c = n) == null || c.disconnect(),
        n = null
    }
    function o(c, l) {
        c === void 0 && (c = !1),
        l === void 0 && (l = 1),
        s();
        const {left: a, top: u, width: f, height: m} = t.getBoundingClientRect();
        if (c || e(),
        !f || !m)
            return;
        const b = zt(u)
          , w = zt(r.clientWidth - (a + f))
          , _ = zt(r.clientHeight - (u + m))
          , d = zt(a)
          , y = {
            rootMargin: -b + "px " + -w + "px " + -_ + "px " + -d + "px",
            threshold: Pe(0, it(1, l)) || 1
        };
        let N = !0;
        function S(D) {
            const R = D[0].intersectionRatio;
            if (R !== l) {
                if (!N)
                    return o();
                R ? o(!1, R) : i = setTimeout(()=>{
                    o(!1, 1e-7)
                }
                , 100)
            }
            N = !1
        }
        try {
            n = new IntersectionObserver(S,{
                ...y,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(S,y)
        }
        n.observe(t)
    }
    return o(!0),
    s
}
function yo(t, e, n, i) {
    i === void 0 && (i = {});
    const {ancestorScroll: r=!0, ancestorResize: s=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: c=typeof IntersectionObserver == "function", animationFrame: l=!1} = i
      , a = Dn(t)
      , u = r || s ? [...a ? Nt(a) : [], ...Nt(e)] : [];
    u.forEach(g=>{
        r && g.addEventListener("scroll", n, {
            passive: !0
        }),
        s && g.addEventListener("resize", n)
    }
    );
    const f = a && c ? po(a, n) : null;
    let m = -1
      , b = null;
    o && (b = new ResizeObserver(g=>{
        let[y] = g;
        y && y.target === a && b && (b.unobserve(e),
        cancelAnimationFrame(m),
        m = requestAnimationFrame(()=>{
            var N;
            (N = b) == null || N.observe(e)
        }
        )),
        n()
    }
    ),
    a && !l && b.observe(a),
    b.observe(e));
    let w, _ = l ? ct(t) : null;
    l && d();
    function d() {
        const g = ct(t);
        _ && (g.x !== _.x || g.y !== _.y || g.width !== _.width || g.height !== _.height) && n(),
        _ = g,
        w = requestAnimationFrame(d)
    }
    return n(),
    ()=>{
        var g;
        u.forEach(y=>{
            r && y.removeEventListener("scroll", n),
            s && y.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (g = b) == null || g.disconnect(),
        b = null,
        l && cancelAnimationFrame(w)
    }
}
const _o = xr
  , wo = Jr
  , ko = $r
  , To = Yr
  , Eo = (t,e,n)=>{
    const i = new Map
      , r = {
        platform: vo,
        ...n
    }
      , s = {
        ...r.platform,
        _c: i
    };
    return qr(t, e, {
        ...r,
        platform: s
    })
}
  , Oo = {
    strategy: "absolute",
    placement: "top",
    gutter: 5,
    flip: !0,
    sameWidth: !1,
    overflowPadding: 8
}
  , Co = {
    bottom: "rotate(45deg)",
    left: "rotate(135deg)",
    top: "rotate(225deg)",
    right: "rotate(315deg)"
};
function Ao(t, e, n={}) {
    if (!e || !t || n === null)
        return {
            destroy: Re
        };
    const i = {
        ...Oo,
        ...n
    }
      , r = e.querySelector("[data-arrow=true]")
      , s = [];
    i.flip && s.push(wo({
        boundary: i.boundary,
        padding: i.overflowPadding
    }));
    const o = I(r) ? r.offsetHeight / 2 : 0;
    if (i.gutter || i.offset) {
        const l = i.gutter ? {
            mainAxis: i.gutter
        } : i.offset;
        (l == null ? void 0 : l.mainAxis) != null && (l.mainAxis += o),
        s.push(Qr(l))
    }
    s.push(_o({
        boundary: i.boundary,
        crossAxis: i.overlap,
        padding: i.overflowPadding
    })),
    r && s.push(To({
        element: r,
        padding: 8
    })),
    s.push(ko({
        padding: i.overflowPadding,
        apply({rects: l, availableHeight: a, availableWidth: u}) {
            i.sameWidth && Object.assign(e.style, {
                width: `${Math.round(l.reference.width)}px`,
                minWidth: "unset"
            }),
            i.fitViewport && Object.assign(e.style, {
                maxWidth: `${u}px`,
                maxHeight: `${a}px`
            })
        }
    }));
    function c() {
        if (!t || !e || I(t) && !t.ownerDocument.documentElement.contains(t))
            return;
        const {placement: l, strategy: a} = i;
        Eo(t, e, {
            placement: l,
            middleware: s,
            strategy: a
        }).then(u=>{
            const f = Math.round(u.x)
              , m = Math.round(u.y)
              , [b,w] = Po(u.placement);
            if (e.setAttribute("data-side", b),
            e.setAttribute("data-align", w),
            Object.assign(e.style, {
                position: i.strategy,
                top: `${m}px`,
                left: `${f}px`
            }),
            I(r) && u.middlewareData.arrow) {
                const {x: _, y: d} = u.middlewareData.arrow
                  , g = u.placement.split("-")[0];
                r.setAttribute("data-side", g),
                Object.assign(r.style, {
                    position: "absolute",
                    left: _ != null ? `${_}px` : "",
                    top: d != null ? `${d}px` : "",
                    [g]: `calc(100% - ${o}px)`,
                    transform: Co[g],
                    backgroundColor: "inherit",
                    zIndex: "inherit"
                })
            }
            return u
        }
        )
    }
    return Object.assign(e.style, {
        position: i.strategy
    }),
    {
        destroy: yo(t, e, c)
    }
}
function Po(t) {
    const [e,n="center"] = t.split("-");
    return [e, n]
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var qi = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
  , xt = qi.join(",")
  , Yi = typeof Element > "u"
  , ft = Yi ? function() {}
: Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  , $t = !Yi && Element.prototype.getRootNode ? function(t) {
    var e;
    return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t)
}
: function(t) {
    return t == null ? void 0 : t.ownerDocument
}
  , en = function t(e, n) {
    var i;
    n === void 0 && (n = !0);
    var r = e == null || (i = e.getAttribute) === null || i === void 0 ? void 0 : i.call(e, "inert")
      , s = r === "" || r === "true"
      , o = s || n && e && t(e.parentNode);
    return o
}
  , So = function(e) {
    var n, i = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
    return i === "" || i === "true"
}
  , Ji = function(e, n, i) {
    if (en(e))
        return [];
    var r = Array.prototype.slice.apply(e.querySelectorAll(xt));
    return n && ft.call(e, xt) && r.unshift(e),
    r = r.filter(i),
    r
}
  , Zi = function t(e, n, i) {
    for (var r = [], s = Array.from(e); s.length; ) {
        var o = s.shift();
        if (!en(o, !1))
            if (o.tagName === "SLOT") {
                var c = o.assignedElements()
                  , l = c.length ? c : o.children
                  , a = t(l, !0, i);
                i.flatten ? r.push.apply(r, a) : r.push({
                    scopeParent: o,
                    candidates: a
                })
            } else {
                var u = ft.call(o, xt);
                u && i.filter(o) && (n || !e.includes(o)) && r.push(o);
                var f = o.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(o)
                  , m = !en(f, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
                if (f && m) {
                    var b = t(f === !0 ? o.children : f.children, !0, i);
                    i.flatten ? r.push.apply(r, b) : r.push({
                        scopeParent: o,
                        candidates: b
                    })
                } else
                    s.unshift.apply(s, o.children)
            }
    }
    return r
}
  , Qi = function(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
}
  , ut = function(e) {
    if (!e)
        throw new Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || So(e)) && !Qi(e) ? 0 : e.tabIndex
}
  , Io = function(e, n) {
    var i = ut(e);
    return i < 0 && n && !Qi(e) ? 0 : i
}
  , Do = function(e, n) {
    return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex
}
  , xi = function(e) {
    return e.tagName === "INPUT"
}
  , No = function(e) {
    return xi(e) && e.type === "hidden"
}
  , Fo = function(e) {
    var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(i) {
        return i.tagName === "SUMMARY"
    });
    return n
}
  , Ro = function(e, n) {
    for (var i = 0; i < e.length; i++)
        if (e[i].checked && e[i].form === n)
            return e[i]
}
  , Mo = function(e) {
    if (!e.name)
        return !0;
    var n = e.form || $t(e), i = function(c) {
        return n.querySelectorAll('input[type="radio"][name="' + c + '"]')
    }, r;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
        r = i(window.CSS.escape(e.name));
    else
        try {
            r = i(e.name)
        } catch (o) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message),
            !1
        }
    var s = Ro(r, e.form);
    return !s || s === e
}
  , Lo = function(e) {
    return xi(e) && e.type === "radio"
}
  , Bo = function(e) {
    return Lo(e) && !Mo(e)
}
  , Ko = function(e) {
    var n, i = e && $t(e), r = (n = i) === null || n === void 0 ? void 0 : n.host, s = !1;
    if (i && i !== e) {
        var o, c, l;
        for (s = !!((o = r) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(r) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !s && r; ) {
            var a, u, f;
            i = $t(r),
            r = (a = i) === null || a === void 0 ? void 0 : a.host,
            s = !!((u = r) !== null && u !== void 0 && (f = u.ownerDocument) !== null && f !== void 0 && f.contains(r))
        }
    }
    return s
}
  , Yn = function(e) {
    var n = e.getBoundingClientRect()
      , i = n.width
      , r = n.height;
    return i === 0 && r === 0
}
  , Wo = function(e, n) {
    var i = n.displayCheck
      , r = n.getShadowRoot;
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    var s = ft.call(e, "details>summary:first-of-type")
      , o = s ? e.parentElement : e;
    if (ft.call(o, "details:not([open]) *"))
        return !0;
    if (!i || i === "full" || i === "legacy-full") {
        if (typeof r == "function") {
            for (var c = e; e; ) {
                var l = e.parentElement
                  , a = $t(e);
                if (l && !l.shadowRoot && r(l) === !0)
                    return Yn(e);
                e.assignedSlot ? e = e.assignedSlot : !l && a !== e.ownerDocument ? e = a.host : e = l
            }
            e = c
        }
        if (Ko(e))
            return !e.getClientRects().length;
        if (i !== "legacy-full")
            return !0
    } else if (i === "non-zero-area")
        return Yn(e);
    return !1
}
  , Vo = function(e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
        for (var n = e.parentElement; n; ) {
            if (n.tagName === "FIELDSET" && n.disabled) {
                for (var i = 0; i < n.children.length; i++) {
                    var r = n.children.item(i);
                    if (r.tagName === "LEGEND")
                        return ft.call(n, "fieldset[disabled] *") ? !0 : !r.contains(e)
                }
                return !0
            }
            n = n.parentElement
        }
    return !1
}
  , tn = function(e, n) {
    return !(n.disabled || en(n) || No(n) || Wo(n, e) || Fo(n) || Vo(n))
}
  , kn = function(e, n) {
    return !(Bo(n) || ut(n) < 0 || !tn(e, n))
}
  , jo = function(e) {
    var n = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0)
}
  , zo = function t(e) {
    var n = []
      , i = [];
    return e.forEach(function(r, s) {
        var o = !!r.scopeParent
          , c = o ? r.scopeParent : r
          , l = Io(c, o)
          , a = o ? t(r.candidates) : c;
        l === 0 ? o ? n.push.apply(n, a) : n.push(c) : i.push({
            documentOrder: s,
            tabIndex: l,
            item: r,
            isScope: o,
            content: a
        })
    }),
    i.sort(Do).reduce(function(r, s) {
        return s.isScope ? r.push.apply(r, s.content) : r.push(s.content),
        r
    }, []).concat(n)
}
  , Ho = function(e, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Zi([e], n.includeContainer, {
        filter: kn.bind(null, n),
        flatten: !1,
        getShadowRoot: n.getShadowRoot,
        shadowRootFilter: jo
    }) : i = Ji(e, n.includeContainer, kn.bind(null, n)),
    zo(i)
}
  , Uo = function(e, n) {
    n = n || {};
    var i;
    return n.getShadowRoot ? i = Zi([e], n.includeContainer, {
        filter: tn.bind(null, n),
        flatten: !0,
        getShadowRoot: n.getShadowRoot
    }) : i = Ji(e, n.includeContainer, tn.bind(null, n)),
    i
}
  , pt = function(e, n) {
    if (n = n || {},
    !e)
        throw new Error("No node provided");
    return ft.call(e, xt) === !1 ? !1 : kn(n, e)
}
  , Xo = qi.concat("iframe").join(",")
  , bn = function(e, n) {
    if (n = n || {},
    !e)
        throw new Error("No node provided");
    return ft.call(e, Xo) === !1 ? !1 : tn(n, e)
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Jn(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable
        })),
        n.push.apply(n, i)
    }
    return n
}
function Zn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Jn(Object(n), !0).forEach(function(i) {
            Go(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jn(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}
function Go(t, e, n) {
    return e = Yo(e),
    e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function qo(t, e) {
    if (typeof t != "object" || t === null)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e || "default");
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
function Yo(t) {
    var e = qo(t, "string");
    return typeof e == "symbol" ? e : String(e)
}
var Qn = {
    activateTrap: function(e, n) {
        if (e.length > 0) {
            var i = e[e.length - 1];
            i !== n && i.pause()
        }
        var r = e.indexOf(n);
        r === -1 || e.splice(r, 1),
        e.push(n)
    },
    deactivateTrap: function(e, n) {
        var i = e.indexOf(n);
        i !== -1 && e.splice(i, 1),
        e.length > 0 && e[e.length - 1].unpause()
    }
}
  , Jo = function(e) {
    return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function"
}
  , Zo = function(e) {
    return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27
}
  , Dt = function(e) {
    return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9
}
  , Qo = function(e) {
    return Dt(e) && !e.shiftKey
}
  , xo = function(e) {
    return Dt(e) && e.shiftKey
}
  , xn = function(e) {
    return setTimeout(e, 0)
}
  , $n = function(e, n) {
    var i = -1;
    return e.every(function(r, s) {
        return n(r) ? (i = s,
        !1) : !0
    }),
    i
}
  , Pt = function(e) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        i[r - 1] = arguments[r];
    return typeof e == "function" ? e.apply(void 0, i) : e
}
  , Ht = function(e) {
    return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target
}
  , $o = []
  , es = function(e, n) {
    var i = (n == null ? void 0 : n.document) || document, r = (n == null ? void 0 : n.trapStack) || $o, s = Zn({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: Qo,
        isKeyBackward: xo
    }, n), o = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
    }, c, l = function(h, v, E) {
        return h && h[v] !== void 0 ? h[v] : s[E || v]
    }, a = function(h, v) {
        var E = typeof (v == null ? void 0 : v.composedPath) == "function" ? v.composedPath() : void 0;
        return o.containerGroups.findIndex(function(B) {
            var K = B.container
              , U = B.tabbableNodes;
            return K.contains(h) || (E == null ? void 0 : E.includes(K)) || U.find(function(te) {
                return te === h
            })
        })
    }, u = function(h) {
        var v = s[h];
        if (typeof v == "function") {
            for (var E = arguments.length, B = new Array(E > 1 ? E - 1 : 0), K = 1; K < E; K++)
                B[K - 1] = arguments[K];
            v = v.apply(void 0, B)
        }
        if (v === !0 && (v = void 0),
        !v) {
            if (v === void 0 || v === !1)
                return v;
            throw new Error("`".concat(h, "` was specified but was not a node, or did not return a node"))
        }
        var U = v;
        if (typeof v == "string" && (U = i.querySelector(v),
        !U))
            throw new Error("`".concat(h, "` as selector refers to no known node"));
        return U
    }, f = function() {
        var h = u("initialFocus");
        if (h === !1)
            return !1;
        if (h === void 0 || !bn(h, s.tabbableOptions))
            if (a(i.activeElement) >= 0)
                h = i.activeElement;
            else {
                var v = o.tabbableGroups[0]
                  , E = v && v.firstTabbableNode;
                h = E || u("fallbackFocus")
            }
        if (!h)
            throw new Error("Your focus-trap needs to have at least one focusable element");
        return h
    }, m = function() {
        if (o.containerGroups = o.containers.map(function(h) {
            var v = Ho(h, s.tabbableOptions)
              , E = Uo(h, s.tabbableOptions)
              , B = v.length > 0 ? v[0] : void 0
              , K = v.length > 0 ? v[v.length - 1] : void 0
              , U = E.find(function(de) {
                return pt(de)
            })
              , te = E.slice().reverse().find(function(de) {
                return pt(de)
            })
              , be = !!v.find(function(de) {
                return ut(de) > 0
            });
            return {
                container: h,
                tabbableNodes: v,
                focusableNodes: E,
                posTabIndexesFound: be,
                firstTabbableNode: B,
                lastTabbableNode: K,
                firstDomTabbableNode: U,
                lastDomTabbableNode: te,
                nextTabbableNode: function(Ve) {
                    var Je = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
                      , Ne = v.indexOf(Ve);
                    return Ne < 0 ? Je ? E.slice(E.indexOf(Ve) + 1).find(function(Ze) {
                        return pt(Ze)
                    }) : E.slice(0, E.indexOf(Ve)).reverse().find(function(Ze) {
                        return pt(Ze)
                    }) : v[Ne + (Je ? 1 : -1)]
                }
            }
        }),
        o.tabbableGroups = o.containerGroups.filter(function(h) {
            return h.tabbableNodes.length > 0
        }),
        o.tabbableGroups.length <= 0 && !u("fallbackFocus"))
            throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
        if (o.containerGroups.find(function(h) {
            return h.posTabIndexesFound
        }) && o.containerGroups.length > 1)
            throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
    }, b = function z(h) {
        var v = h.activeElement;
        if (v)
            return v.shadowRoot && v.shadowRoot.activeElement !== null ? z(v.shadowRoot) : v
    }, w = function z(h) {
        if (h !== !1 && h !== b(document)) {
            if (!h || !h.focus) {
                z(f());
                return
            }
            h.focus({
                preventScroll: !!s.preventScroll
            }),
            o.mostRecentlyFocusedNode = h,
            Jo(h) && h.select()
        }
    }, _ = function(h) {
        var v = u("setReturnFocus", h);
        return v || (v === !1 ? !1 : h)
    }, d = function(h) {
        var v = h.target
          , E = h.event
          , B = h.isBackward
          , K = B === void 0 ? !1 : B;
        v = v || Ht(E),
        m();
        var U = null;
        if (o.tabbableGroups.length > 0) {
            var te = a(v, E)
              , be = te >= 0 ? o.containerGroups[te] : void 0;
            if (te < 0)
                K ? U = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : U = o.tabbableGroups[0].firstTabbableNode;
            else if (K) {
                var de = $n(o.tabbableGroups, function(Ct) {
                    var bt = Ct.firstTabbableNode;
                    return v === bt
                });
                if (de < 0 && (be.container === v || bn(v, s.tabbableOptions) && !pt(v, s.tabbableOptions) && !be.nextTabbableNode(v, !1)) && (de = te),
                de >= 0) {
                    var Ve = de === 0 ? o.tabbableGroups.length - 1 : de - 1
                      , Je = o.tabbableGroups[Ve];
                    U = ut(v) >= 0 ? Je.lastTabbableNode : Je.lastDomTabbableNode
                } else
                    Dt(E) || (U = be.nextTabbableNode(v, !1))
            } else {
                var Ne = $n(o.tabbableGroups, function(Ct) {
                    var bt = Ct.lastTabbableNode;
                    return v === bt
                });
                if (Ne < 0 && (be.container === v || bn(v, s.tabbableOptions) && !pt(v, s.tabbableOptions) && !be.nextTabbableNode(v)) && (Ne = te),
                Ne >= 0) {
                    var Ze = Ne === o.tabbableGroups.length - 1 ? 0 : Ne + 1
                      , O = o.tabbableGroups[Ze];
                    U = ut(v) >= 0 ? O.firstTabbableNode : O.firstDomTabbableNode
                } else
                    Dt(E) || (U = be.nextTabbableNode(v))
            }
        } else
            U = u("fallbackFocus");
        return U
    }, g = function(h) {
        var v = Ht(h);
        if (!(a(v, h) >= 0)) {
            if (Pt(s.clickOutsideDeactivates, h)) {
                c.deactivate({
                    returnFocus: s.returnFocusOnDeactivate
                });
                return
            }
            Pt(s.allowOutsideClick, h) || h.preventDefault()
        }
    }, y = function(h) {
        var v = Ht(h)
          , E = a(v, h) >= 0;
        if (E || v instanceof Document)
            E && (o.mostRecentlyFocusedNode = v);
        else {
            h.stopImmediatePropagation();
            var B, K = !0;
            if (o.mostRecentlyFocusedNode)
                if (ut(o.mostRecentlyFocusedNode) > 0) {
                    var U = a(o.mostRecentlyFocusedNode)
                      , te = o.containerGroups[U].tabbableNodes;
                    if (te.length > 0) {
                        var be = te.findIndex(function(de) {
                            return de === o.mostRecentlyFocusedNode
                        });
                        be >= 0 && (s.isKeyForward(o.recentNavEvent) ? be + 1 < te.length && (B = te[be + 1],
                        K = !1) : be - 1 >= 0 && (B = te[be - 1],
                        K = !1))
                    }
                } else
                    o.containerGroups.some(function(de) {
                        return de.tabbableNodes.some(function(Ve) {
                            return ut(Ve) > 0
                        })
                    }) || (K = !1);
            else
                K = !1;
            K && (B = d({
                target: o.mostRecentlyFocusedNode,
                isBackward: s.isKeyBackward(o.recentNavEvent)
            })),
            w(B || o.mostRecentlyFocusedNode || f())
        }
        o.recentNavEvent = void 0
    }, N = function(h) {
        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = h;
        var E = d({
            event: h,
            isBackward: v
        });
        E && (Dt(h) && h.preventDefault(),
        w(E))
    }, S = function(h) {
        if (Zo(h) && Pt(s.escapeDeactivates, h) !== !1) {
            h.preventDefault(),
            c.deactivate();
            return
        }
        (s.isKeyForward(h) || s.isKeyBackward(h)) && N(h, s.isKeyBackward(h))
    }, D = function(h) {
        var v = Ht(h);
        a(v, h) >= 0 || Pt(s.clickOutsideDeactivates, h) || Pt(s.allowOutsideClick, h) || (h.preventDefault(),
        h.stopImmediatePropagation())
    }, R = function() {
        if (o.active)
            return Qn.activateTrap(r, c),
            o.delayInitialFocusTimer = s.delayInitialFocus ? xn(function() {
                w(f())
            }) : w(f()),
            i.addEventListener("focusin", y, !0),
            i.addEventListener("mousedown", g, {
                capture: !0,
                passive: !1
            }),
            i.addEventListener("touchstart", g, {
                capture: !0,
                passive: !1
            }),
            i.addEventListener("click", D, {
                capture: !0,
                passive: !1
            }),
            i.addEventListener("keydown", S, {
                capture: !0,
                passive: !1
            }),
            c
    }, C = function() {
        if (o.active)
            return i.removeEventListener("focusin", y, !0),
            i.removeEventListener("mousedown", g, !0),
            i.removeEventListener("touchstart", g, !0),
            i.removeEventListener("click", D, !0),
            i.removeEventListener("keydown", S, !0),
            c
    }, x = function(h) {
        var v = h.some(function(E) {
            var B = Array.from(E.removedNodes);
            return B.some(function(K) {
                return K === o.mostRecentlyFocusedNode
            })
        });
        v && w(f())
    }, P = typeof window < "u" && "MutationObserver"in window ? new MutationObserver(x) : void 0, re = function() {
        P && (P.disconnect(),
        o.active && !o.paused && o.containers.map(function(h) {
            P.observe(h, {
                subtree: !0,
                childList: !0
            })
        }))
    };
    return c = {
        get active() {
            return o.active
        },
        get paused() {
            return o.paused
        },
        activate: function(h) {
            if (o.active)
                return this;
            var v = l(h, "onActivate")
              , E = l(h, "onPostActivate")
              , B = l(h, "checkCanFocusTrap");
            B || m(),
            o.active = !0,
            o.paused = !1,
            o.nodeFocusedBeforeActivation = i.activeElement,
            v == null || v();
            var K = function() {
                B && m(),
                R(),
                re(),
                E == null || E()
            };
            return B ? (B(o.containers.concat()).then(K, K),
            this) : (K(),
            this)
        },
        deactivate: function(h) {
            if (!o.active)
                return this;
            var v = Zn({
                onDeactivate: s.onDeactivate,
                onPostDeactivate: s.onPostDeactivate,
                checkCanReturnFocus: s.checkCanReturnFocus
            }, h);
            clearTimeout(o.delayInitialFocusTimer),
            o.delayInitialFocusTimer = void 0,
            C(),
            o.active = !1,
            o.paused = !1,
            re(),
            Qn.deactivateTrap(r, c);
            var E = l(v, "onDeactivate")
              , B = l(v, "onPostDeactivate")
              , K = l(v, "checkCanReturnFocus")
              , U = l(v, "returnFocus", "returnFocusOnDeactivate");
            E == null || E();
            var te = function() {
                xn(function() {
                    U && w(_(o.nodeFocusedBeforeActivation)),
                    B == null || B()
                })
            };
            return U && K ? (K(_(o.nodeFocusedBeforeActivation)).then(te, te),
            this) : (te(),
            this)
        },
        pause: function(h) {
            if (o.paused || !o.active)
                return this;
            var v = l(h, "onPause")
              , E = l(h, "onPostPause");
            return o.paused = !0,
            v == null || v(),
            C(),
            re(),
            E == null || E(),
            this
        },
        unpause: function(h) {
            if (!o.paused || !o.active)
                return this;
            var v = l(h, "onUnpause")
              , E = l(h, "onPostUnpause");
            return o.paused = !1,
            v == null || v(),
            m(),
            R(),
            re(),
            E == null || E(),
            this
        },
        updateContainerElements: function(h) {
            var v = [].concat(h).filter(Boolean);
            return o.containers = v.map(function(E) {
                return typeof E == "string" ? i.querySelector(E) : E
            }),
            o.active && m(),
            re(),
            this
        }
    },
    c.updateContainerElements(e),
    c
};
function ts(t={}) {
    let e;
    const {immediate: n, ...i} = t
      , r = he(!1)
      , s = he(!1)
      , o = f=>e == null ? void 0 : e.activate(f)
      , c = f=>{
        e == null || e.deactivate(f)
    }
      , l = ()=>{
        e && (e.pause(),
        s.set(!0))
    }
      , a = ()=>{
        e && (e.unpause(),
        s.set(!1))
    }
    ;
    return {
        useFocusTrap: f=>(e = es(f, {
            ...i,
            onActivate() {
                var m;
                r.set(!0),
                (m = t.onActivate) == null || m.call(t)
            },
            onDeactivate() {
                var m;
                r.set(!1),
                (m = t.onDeactivate) == null || m.call(t)
            }
        }),
        n && o(),
        {
            destroy() {
                c(),
                e = void 0
            }
        }),
        hasFocus: Wn(r),
        isPaused: Wn(s),
        activate: o,
        deactivate: c,
        pause: l,
        unpause: a
    }
}
const Ut = [];
function ns(t, e) {
    let n = Re;
    function i() {
        const s = Ut.indexOf(t);
        s >= 0 && Ut.splice(s, 1)
    }
    function r(s) {
        n();
        const {open: o, onClose: c, shouldCloseOnInteractOutside: l, closeOnInteractOutside: a} = s;
        xe(100).then(()=>{
            o ? Ut.push(t) : i()
        }
        );
        function u() {
            return _r(Ut) === t
        }
        function f() {
            u() && c && (c(),
            i())
        }
        function m(w) {
            const _ = w.target;
            En(_) && _ && u() && (w.preventDefault(),
            w.stopPropagation(),
            w.stopImmediatePropagation())
        }
        function b(w) {
            l != null && l(w) && u() && (w.preventDefault(),
            w.stopPropagation(),
            w.stopImmediatePropagation(),
            f())
        }
        n = rs(t, {
            onInteractOutsideStart: m,
            onInteractOutside: a ? b : void 0,
            enabled: o
        }).destroy
    }
    return r(e),
    {
        update: r,
        destroy() {
            i(),
            n()
        }
    }
}
const is = {
    floating: {},
    focusTrap: {},
    modal: {},
    escapeKeydown: {},
    portal: "body"
}
  , ei = (t,e)=>{
    t.dataset.escapee = "";
    const {anchorElement: n, open: i, options: r} = e;
    if (!n || !i || !r)
        return {
            destroy: Re
        };
    const s = {
        ...is,
        ...r
    }
      , o = [];
    if (s.portal !== null) {
        const l = $i(t, s.portal);
        l != null && l.destroy && o.push(l.destroy)
    }
    if (o.push(Ao(n, t, s.floating).destroy),
    s.focusTrap !== null) {
        const {useFocusTrap: l} = ts({
            immediate: !0,
            escapeDeactivates: !1,
            allowOutsideClick: !0,
            returnFocusOnDeactivate: !1,
            fallbackFocus: t,
            ...s.focusTrap
        })
          , a = l(t);
        a != null && a.destroy && o.push(a.destroy)
    }
    s.modal !== null && o.push(ns(t, {
        onClose: ()=>{
            I(n) && (i.set(!1),
            n.focus())
        }
        ,
        shouldCloseOnInteractOutside: l=>!(l.defaultPrevented || I(n) && n.contains(l.target)),
        ...s.modal
    }).destroy),
    s.escapeKeydown !== null && o.push(Di(t, {
        enabled: i,
        handler: ()=>{
            i.set(!1)
        }
        ,
        ...s.escapeKeydown
    }).destroy);
    const c = Fe(...o);
    return {
        destroy() {
            c()
        }
    }
}
  , $i = (t,e="body")=>{
    let n;
    if (!I(e) && typeof e != "string")
        return {
            destroy: Re
        };
    async function i(s) {
        if (e = s,
        typeof e == "string") {
            if (n = document.querySelector(e),
            n === null && (await yt(),
            n = document.querySelector(e)),
            n === null)
                throw new Error(`No element found matching css selector: "${e}"`)
        } else if (e instanceof HTMLElement)
            n = e;
        else
            throw new TypeError(`Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);
        t.dataset.portal = "",
        n.appendChild(t),
        t.hidden = !1
    }
    function r() {
        t.remove()
    }
    return i(e),
    {
        update: i,
        destroy: r
    }
}
;
function rs(t, e) {
    let n = Re
      , i = !1
      , r = !1
      , s = !1;
    function o(a) {
        n();
        const {onInteractOutside: u, onInteractOutsideStart: f, enabled: m} = a;
        if (!m)
            return;
        function b(d) {
            u && ti(d, t) && (f == null || f(d));
            const g = d.target;
            En(g) && er(t, g) && (r = !0),
            i = !0
        }
        function w(d) {
            u == null || u(d)
        }
        const _ = os(t);
        if (typeof PointerEvent < "u") {
            const d = g=>{
                c(g) && w(g),
                l()
            }
            ;
            n = Fe(Ae(_, "pointerdown", b, !0), Ae(_, "pointerup", d, !0))
        } else {
            const d = y=>{
                s ? s = !1 : c(y) && w(y),
                l()
            }
              , g = y=>{
                s = !0,
                c(y) && w(y),
                l()
            }
            ;
            n = Fe(Ae(_, "mousedown", b, !0), Ae(_, "mouseup", d, !0), Ae(_, "touchstart", b, !0), Ae(_, "touchend", g, !0))
        }
    }
    function c(a) {
        return !!(i && !r && ti(a, t))
    }
    function l() {
        i = !1,
        r = !1
    }
    return o(e),
    {
        update: o,
        destroy: n
    }
}
function ti(t, e) {
    if ("button"in t && t.button > 0)
        return !1;
    const n = t.target;
    if (!En(n))
        return !1;
    const i = n.ownerDocument;
    return !i || !i.documentElement.contains(n) ? !1 : e && !er(e, n)
}
function er(t, e) {
    return t === e || t.contains(e)
}
function os(t) {
    return (t == null ? void 0 : t.ownerDocument) ?? document
}
const ss = {
    ltr: [...Yt, ke.ARROW_RIGHT],
    rtl: [...Yt, ke.ARROW_LEFT]
}
  , ls = {
    ltr: [ke.ARROW_LEFT],
    rtl: [ke.ARROW_RIGHT]
}
  , ni = ["menu", "trigger"]
  , as = {
    arrowSize: 8,
    positioning: {
        placement: "bottom"
    },
    preventScroll: !0,
    closeOnEscape: !0,
    closeOnOutsideClick: !0,
    portal: void 0,
    loop: !1,
    dir: "ltr",
    defaultOpen: !1,
    typeahead: !0,
    closeOnItemClick: !0,
    onOutsideClick: void 0
};
function us(t) {
    const {name: e, selector: n} = cr(t.selector)
      , {preventScroll: i, arrowSize: r, positioning: s, closeOnEscape: o, closeOnOutsideClick: c, portal: l, forceVisible: a, typeahead: u, loop: f, closeFocus: m, disableFocusFirstItem: b, closeOnItemClick: w, onOutsideClick: _} = t.rootOptions
      , d = t.rootOpen
      , g = t.rootActiveTrigger
      , y = t.nextFocusable
      , N = t.prevFocusable
      , S = we.writable(!1)
      , D = we(he(0))
      , R = we(he(null))
      , C = we(he("right"))
      , x = we(he(null))
      , P = we(_t([C, R], ([p,k])=>T=>p === (k == null ? void 0 : k.side) && cs(T, k == null ? void 0 : k.area)))
      , {typed: re, handleTypeaheadSearch: z} = Br()
      , h = Gt({
        ...Vn(ni),
        ...t.ids
    })
      , v = zn({
        open: d,
        forceVisible: a,
        activeTrigger: g
    })
      , E = Ce(e(), {
        stores: [v, l, h.menu, h.trigger],
        returned: ([p,k,T,A])=>({
            role: "menu",
            hidden: p ? void 0 : !0,
            style: At({
                display: p ? void 0 : "none"
            }),
            id: T,
            "aria-labelledby": A,
            "data-state": p ? "open" : "closed",
            "data-portal": fr(k),
            tabindex: -1
        }),
        action: p=>{
            let k = Re;
            const T = Xe([v, g, s, c, l, o], ([W,$,Ee,ne,X,Y])=>{
                k(),
                !(!W || !$) && yt().then(()=>{
                    It(p, n);
                    const j = ei(p, {
                        anchorElement: $,
                        open: d,
                        options: {
                            floating: Ee,
                            modal: {
                                closeOnInteractOutside: ne,
                                shouldCloseOnInteractOutside: H=>{
                                    var je;
                                    return (je = _.get()) == null || je(H),
                                    !(H.defaultPrevented || I($) && $.contains(H.target))
                                }
                                ,
                                onClose: ()=>{
                                    d.set(!1),
                                    $.focus()
                                }
                                ,
                                open: W
                            },
                            portal: Hn(p, X),
                            escapeKeydown: Y ? void 0 : null
                        }
                    });
                    j && j.destroy && (k = j.destroy)
                }
                )
            }
            )
              , A = Fe(Z(p, "keydown", W=>{
                const $ = W.target
                  , Ee = W.currentTarget;
                if (!I($) || !I(Ee) || !($.closest('[role="menu"]') === Ee))
                    return;
                if (Bn.includes(W.key) && ri(W, f.get() ?? !1),
                W.key === ke.TAB) {
                    W.preventDefault(),
                    d.set(!1),
                    ii(W, y, N);
                    return
                }
                const X = W.key.length === 1;
                !(W.ctrlKey || W.altKey || W.metaKey) && X && u.get() === !0 && z(W.key, lt(Ee))
            }
            ));
            return {
                destroy() {
                    T(),
                    A(),
                    k()
                }
            }
        }
    })
      , B = Ce(e("trigger"), {
        stores: [d, h.menu, h.trigger],
        returned: ([p,k,T])=>({
            "aria-controls": k,
            "aria-expanded": p,
            "data-state": p ? "open" : "closed",
            id: T,
            tabindex: 0
        }),
        action: p=>(Xt(p),
        g.update(T=>T || p),
        {
            destroy: Fe(Z(p, "click", T=>{
                const A = d.get()
                  , W = T.currentTarget;
                I(W) && (bt(W),
                A || T.preventDefault())
            }
            ), Z(p, "keydown", T=>{
                const A = T.currentTarget;
                if (!I(A) || !(Yt.includes(T.key) || T.key === ke.ARROW_DOWN))
                    return;
                T.preventDefault(),
                bt(A);
                const W = A.getAttribute("aria-controls");
                if (!W)
                    return;
                const $ = document.getElementById(W);
                if (!$)
                    return;
                const Ee = lt($);
                Ee.length && _e(Ee[0])
            }
            ))
        })
    })
      , K = Ce(e("arrow"), {
        stores: r,
        returned: p=>({
            "data-arrow": !0,
            style: At({
                position: "absolute",
                width: `var(--arrow-size, ${p}px)`,
                height: `var(--arrow-size, ${p}px)`
            })
        })
    })
      , U = Ce(e("overlay"), {
        stores: [v],
        returned: ([p])=>({
            hidden: p ? void 0 : !0,
            tabindex: -1,
            style: At({
                display: p ? void 0 : "none"
            }),
            "aria-hidden": "true",
            "data-state": ms(p)
        }),
        action: p=>{
            let k = Re;
            if (o.get()) {
                const A = Di(p, {
                    handler: ()=>{
                        d.set(!1);
                        const W = g.get();
                        W && W.focus()
                    }
                });
                A && A.destroy && (k = A.destroy)
            }
            const T = Xe([l], ([A])=>{
                if (A === null)
                    return Re;
                const W = Hn(p, A);
                if (W === null)
                    return Re;
                const $ = $i(p, W);
                return $ && $.destroy ? $.destroy : Re
            }
            );
            return {
                destroy() {
                    k(),
                    T()
                }
            }
        }
    })
      , te = Ce(e("item"), {
        returned: ()=>({
            role: "menuitem",
            tabindex: -1,
            "data-orientation": "vertical"
        }),
        action: p=>(It(p, n),
        Xt(p),
        {
            destroy: Fe(Z(p, "pointerdown", T=>{
                const A = T.currentTarget;
                if (I(A) && Qe(A)) {
                    T.preventDefault();
                    return
                }
            }
            ), Z(p, "click", T=>{
                const A = T.currentTarget;
                if (I(A)) {
                    if (Qe(A)) {
                        T.preventDefault();
                        return
                    }
                    if (T.defaultPrevented) {
                        _e(A);
                        return
                    }
                    w.get() && xe(1).then(()=>{
                        d.set(!1)
                    }
                    )
                }
            }
            ), Z(p, "keydown", T=>{
                cn(T)
            }
            ), Z(p, "pointermove", T=>{
                an(T)
            }
            ), Z(p, "pointerleave", T=>{
                un(T)
            }
            ), Z(p, "focusin", T=>{
                Vt(T)
            }
            ), Z(p, "focusout", T=>{
                sn(T)
            }
            ))
        })
    })
      , be = Ce(e("group"), {
        returned: ()=>p=>({
            role: "group",
            "aria-labelledby": p
        })
    })
      , de = Ce(e("group-label"), {
        returned: ()=>p=>({
            id: p
        })
    })
      , Ve = {
        defaultChecked: !1,
        disabled: !1
    }
      , Je = p=>{
        const k = {
            ...Ve,
            ...p
        }
          , T = k.checked ?? he(k.defaultChecked ?? null)
          , A = qt(T, k.onCheckedChange)
          , W = he(k.disabled)
          , $ = Ce(e("checkbox-item"), {
            stores: [A, W],
            returned: ([X,Y])=>({
                role: "menuitemcheckbox",
                tabindex: -1,
                "data-orientation": "vertical",
                "aria-checked": fn(X) ? "mixed" : X ? "true" : "false",
                "data-disabled": mn(Y),
                "data-state": rr(X)
            }),
            action: X=>(It(X, n),
            Xt(X),
            {
                destroy: Fe(Z(X, "pointerdown", j=>{
                    const H = j.currentTarget;
                    if (I(H) && Qe(H)) {
                        j.preventDefault();
                        return
                    }
                }
                ), Z(X, "click", j=>{
                    const H = j.currentTarget;
                    if (I(H)) {
                        if (Qe(H)) {
                            j.preventDefault();
                            return
                        }
                        if (j.defaultPrevented) {
                            _e(H);
                            return
                        }
                        A.update(je=>fn(je) ? !0 : !je),
                        w.get() && yt().then(()=>{
                            d.set(!1)
                        }
                        )
                    }
                }
                ), Z(X, "keydown", j=>{
                    cn(j)
                }
                ), Z(X, "pointermove", j=>{
                    const H = j.currentTarget;
                    if (I(H)) {
                        if (Qe(H)) {
                            ln(j);
                            return
                        }
                        an(j, H)
                    }
                }
                ), Z(X, "pointerleave", j=>{
                    un(j)
                }
                ), Z(X, "focusin", j=>{
                    Vt(j)
                }
                ), Z(X, "focusout", j=>{
                    sn(j)
                }
                ))
            })
        })
          , Ee = _t(A, X=>X === !0)
          , ne = _t(A, X=>X === "indeterminate");
        return {
            elements: {
                checkboxItem: $
            },
            states: {
                checked: A
            },
            helpers: {
                isChecked: Ee,
                isIndeterminate: ne
            },
            options: {
                disabled: W
            }
        }
    }
      , Ne = (p={})=>{
        const k = p.value ?? he(p.defaultValue ?? null)
          , T = qt(k, p.onValueChange)
          , A = Ce(e("radio-group"), {
            returned: ()=>({
                role: "group"
            })
        })
          , W = {
            disabled: !1
        }
          , $ = Ce(e("radio-item"), {
            stores: [T],
            returned: ([ne])=>X=>{
                const {value: Y, disabled: j} = {
                    ...W,
                    ...X
                }
                  , H = ne === Y;
                return {
                    disabled: j,
                    role: "menuitemradio",
                    "data-state": H ? "checked" : "unchecked",
                    "aria-checked": H,
                    "data-disabled": mn(j),
                    "data-value": Y,
                    "data-orientation": "vertical",
                    tabindex: -1
                }
            }
            ,
            action: ne=>(It(ne, n),
            {
                destroy: Fe(Z(ne, "pointerdown", Y=>{
                    const j = Y.currentTarget;
                    if (!I(j))
                        return;
                    const H = ne.dataset.value;
                    if (ne.dataset.disabled || H === void 0) {
                        Y.preventDefault();
                        return
                    }
                }
                ), Z(ne, "click", Y=>{
                    const j = Y.currentTarget;
                    if (!I(j))
                        return;
                    const H = ne.dataset.value;
                    if (ne.dataset.disabled || H === void 0) {
                        Y.preventDefault();
                        return
                    }
                    if (Y.defaultPrevented) {
                        if (!I(j))
                            return;
                        _e(j);
                        return
                    }
                    T.set(H),
                    w.get() && yt().then(()=>{
                        d.set(!1)
                    }
                    )
                }
                ), Z(ne, "keydown", Y=>{
                    cn(Y)
                }
                ), Z(ne, "pointermove", Y=>{
                    const j = Y.currentTarget;
                    if (!I(j))
                        return;
                    const H = ne.dataset.value;
                    if (ne.dataset.disabled || H === void 0) {
                        ln(Y);
                        return
                    }
                    an(Y, j)
                }
                ), Z(ne, "pointerleave", Y=>{
                    un(Y)
                }
                ), Z(ne, "focusin", Y=>{
                    Vt(Y)
                }
                ), Z(ne, "focusout", Y=>{
                    sn(Y)
                }
                ))
            })
        })
          , Ee = _t(T, ne=>X=>ne === X);
        return {
            elements: {
                radioGroup: A,
                radioItem: $
            },
            states: {
                value: T
            },
            helpers: {
                isChecked: Ee
            }
        }
    }
      , {elements: {root: Ze}} = dr({
        orientation: "horizontal"
    })
      , O = {
        ...as,
        disabled: !1,
        positioning: {
            placement: "right-start",
            gutter: 8
        }
    }
      , Ct = p=>{
        const k = {
            ...O,
            ...p
        }
          , T = k.open ?? he(!1)
          , A = qt(T, k == null ? void 0 : k.onOpenChange)
          , W = Gt(Ni(k, "ids"))
          , {positioning: $, arrowSize: Ee, disabled: ne} = W
          , X = we(he(null))
          , Y = we(he(null))
          , j = we(he(0))
          , H = Gt({
            ...Vn(ni),
            ...k.ids
        });
        Kn(()=>{
            const G = document.getElementById(H.trigger.get());
            G && X.set(G)
        }
        );
        const je = zn({
            open: A,
            forceVisible: a,
            activeTrigger: X
        })
          , or = Ce(e("submenu"), {
            stores: [je, H.menu, H.trigger],
            returned: ([G,pe,Oe])=>({
                role: "menu",
                hidden: G ? void 0 : !0,
                style: At({
                    display: G ? void 0 : "none"
                }),
                id: pe,
                "aria-labelledby": Oe,
                "data-state": G ? "open" : "closed",
                "data-id": pe,
                tabindex: -1
            }),
            action: G=>{
                let pe = Re;
                const Oe = Xe([je, $], ([F,Q])=>{
                    if (pe(),
                    !F)
                        return;
                    const oe = X.get();
                    oe && yt().then(()=>{
                        const me = Fn(oe)
                          , Ue = ei(G, {
                            anchorElement: oe,
                            open: A,
                            options: {
                                floating: Q,
                                portal: I(me) ? me : void 0,
                                modal: null,
                                focusTrap: null,
                                escapeKeydown: null
                            }
                        });
                        Ue && Ue.destroy && (pe = Ue.destroy)
                    }
                    )
                }
                )
                  , J = Fe(Z(G, "keydown", F=>{
                    if (F.key === ke.ESCAPE)
                        return;
                    const Q = F.target
                      , oe = F.currentTarget;
                    if (!I(Q) || !I(oe) || !(Q.closest('[role="menu"]') === oe))
                        return;
                    if (Bn.includes(F.key)) {
                        F.stopImmediatePropagation(),
                        ri(F, f.get() ?? !1);
                        return
                    }
                    const Ue = ls.ltr.includes(F.key)
                      , ht = F.ctrlKey || F.altKey || F.metaKey
                      , jt = F.key.length === 1;
                    if (Ue) {
                        const Rn = X.get();
                        F.preventDefault(),
                        A.update(()=>(Rn && _e(Rn),
                        !1));
                        return
                    }
                    if (F.key === ke.TAB) {
                        F.preventDefault(),
                        d.set(!1),
                        ii(F, y, N);
                        return
                    }
                    !ht && jt && u.get() === !0 && z(F.key, lt(oe))
                }
                ), Z(G, "pointermove", F=>{
                    ir(F)
                }
                ), Z(G, "focusout", F=>{
                    const Q = X.get();
                    if (S.get()) {
                        const oe = F.target
                          , me = document.getElementById(H.menu.get());
                        if (!I(me) || !I(oe))
                            return;
                        !me.contains(oe) && oe !== Q && A.set(!1)
                    } else {
                        const oe = F.currentTarget
                          , me = F.relatedTarget;
                        if (!I(me) || !I(oe))
                            return;
                        !oe.contains(me) && me !== Q && A.set(!1)
                    }
                }
                ));
                return {
                    destroy() {
                        Oe(),
                        pe(),
                        J()
                    }
                }
            }
        })
          , sr = Ce(e("subtrigger"), {
            stores: [A, ne, H.menu, H.trigger],
            returned: ([G,pe,Oe,J])=>({
                role: "menuitem",
                id: J,
                tabindex: -1,
                "aria-controls": Oe,
                "aria-expanded": G,
                "data-state": G ? "open" : "closed",
                "data-disabled": mn(pe),
                "aria-haspopop": "menu"
            }),
            action: G=>{
                It(G, n),
                Xt(G),
                X.update(J=>J || G);
                const pe = ()=>{
                    hn(Y),
                    window.clearTimeout(j.get()),
                    R.set(null)
                }
                  , Oe = Fe(Z(G, "click", J=>{
                    if (J.defaultPrevented)
                        return;
                    const F = J.currentTarget;
                    !I(F) || Qe(F) || (_e(F),
                    A.get() || A.update(Q=>Q || (X.set(F),
                    !Q)))
                }
                ), Z(G, "keydown", J=>{
                    const F = re.get()
                      , Q = J.currentTarget;
                    if (!(!I(Q) || Qe(Q) || F.length > 0 && J.key === ke.SPACE) && ss.ltr.includes(J.key)) {
                        if (!A.get()) {
                            Q.click(),
                            J.preventDefault();
                            return
                        }
                        const me = Q.getAttribute("aria-controls");
                        if (!me)
                            return;
                        const Ue = document.getElementById(me);
                        if (!I(Ue))
                            return;
                        const ht = lt(Ue)[0];
                        _e(ht)
                    }
                }
                ), Z(G, "pointermove", J=>{
                    if (!St(J) || (Nn(J),
                    J.defaultPrevented))
                        return;
                    const F = J.currentTarget;
                    if (!I(F))
                        return;
                    ds(H.menu.get()) || _e(F);
                    const Q = Y.get();
                    !A.get() && !Q && !Qe(F) && Y.set(window.setTimeout(()=>{
                        A.update(()=>(X.set(F),
                        !0)),
                        hn(Y)
                    }
                    , 100))
                }
                ), Z(G, "pointerleave", J=>{
                    if (!St(J))
                        return;
                    hn(Y);
                    const F = document.getElementById(H.menu.get())
                      , Q = F == null ? void 0 : F.getBoundingClientRect();
                    if (Q) {
                        const oe = F == null ? void 0 : F.dataset.side
                          , me = oe === "right"
                          , Ue = me ? -5 : 5
                          , ht = Q[me ? "left" : "right"]
                          , jt = Q[me ? "right" : "left"];
                        R.set({
                            area: [{
                                x: J.clientX + Ue,
                                y: J.clientY
                            }, {
                                x: ht,
                                y: Q.top
                            }, {
                                x: jt,
                                y: Q.top
                            }, {
                                x: jt,
                                y: Q.bottom
                            }, {
                                x: ht,
                                y: Q.bottom
                            }],
                            side: oe
                        }),
                        window.clearTimeout(j.get()),
                        j.set(window.setTimeout(()=>{
                            R.set(null)
                        }
                        , 300))
                    } else {
                        if (nr(J),
                        J.defaultPrevented)
                            return;
                        R.set(null)
                    }
                }
                ), Z(G, "focusout", J=>{
                    const F = J.currentTarget;
                    if (!I(F))
                        return;
                    vt(F);
                    const Q = J.relatedTarget;
                    if (!I(Q))
                        return;
                    const oe = F.getAttribute("aria-controls");
                    if (!oe)
                        return;
                    const me = document.getElementById(oe);
                    me && !me.contains(Q) && A.set(!1)
                }
                ), Z(G, "focusin", J=>{
                    Vt(J)
                }
                ));
                return {
                    destroy() {
                        pe(),
                        Oe()
                    }
                }
            }
        })
          , lr = Ce(e("subarrow"), {
            stores: Ee,
            returned: G=>({
                "data-arrow": !0,
                style: At({
                    position: "absolute",
                    width: `var(--arrow-size, ${G}px)`,
                    height: `var(--arrow-size, ${G}px)`
                })
            })
        });
        return Xe([d], ([G])=>{
            G || (X.set(null),
            A.set(!1))
        }
        ),
        Xe([R], ([G])=>{
            !at || G || window.clearTimeout(j.get())
        }
        ),
        Xe([A], ([G])=>{
            if (at && (G && S.get() && xe(1).then(()=>{
                const pe = document.getElementById(H.menu.get());
                if (!pe)
                    return;
                const Oe = lt(pe);
                Oe.length && _e(Oe[0])
            }
            ),
            !G)) {
                const pe = x.get()
                  , Oe = document.getElementById(H.trigger.get());
                if (pe && xe(1).then(()=>{
                    const J = document.getElementById(H.menu.get());
                    J && J.contains(pe) && vt(pe)
                }
                ),
                !Oe || document.activeElement === Oe)
                    return;
                vt(Oe)
            }
        }
        ),
        {
            ids: H,
            elements: {
                subTrigger: sr,
                subMenu: or,
                subArrow: lr
            },
            states: {
                subOpen: A
            },
            options: W
        }
    }
    ;
    Kn(()=>{
        const p = document.getElementById(h.trigger.get());
        I(p) && d.get() && g.set(p);
        const k = []
          , T = ()=>S.set(!1)
          , A = ()=>{
            S.set(!0),
            k.push(Fe(Ae(document, "pointerdown", T, {
                capture: !0,
                once: !0
            }), Ae(document, "pointermove", T, {
                capture: !0,
                once: !0
            })))
        }
          , W = $=>{
            if ($.key === ke.ESCAPE && o.get()) {
                d.set(!1);
                return
            }
        }
        ;
        return k.push(Ae(document, "keydown", A, {
            capture: !0
        })),
        k.push(Ae(document, "keydown", W)),
        ()=>{
            k.forEach($=>$())
        }
    }
    ),
    Xe([d, x], ([p,k])=>{
        !p && k && vt(k)
    }
    ),
    Xe([d], ([p])=>{
        if (at && !p) {
            const k = g.get();
            if (!k)
                return;
            const T = m.get();
            !p && k && Wr({
                prop: T,
                defaultEl: k
            })
        }
    }
    ),
    Xe([d, i], ([p,k])=>{
        if (!at)
            return;
        const T = [];
        return t.removeScroll && p && k && T.push(Nr()),
        xe(1).then(()=>{
            const A = document.getElementById(h.menu.get());
            if (A && p && S.get()) {
                if (b.get()) {
                    _e(A);
                    return
                }
                const W = lt(A);
                if (!W.length)
                    return;
                _e(W[0])
            }
        }
        ),
        ()=>{
            T.forEach(A=>A())
        }
    }
    ),
    Xe(d, p=>{
        if (!at)
            return;
        const k = ()=>S.set(!1)
          , T = A=>{
            if (S.set(!0),
            A.key === ke.ESCAPE && p && o.get()) {
                d.set(!1);
                return
            }
        }
        ;
        return Fe(Ae(document, "pointerdown", k, {
            capture: !0,
            once: !0
        }), Ae(document, "pointermove", k, {
            capture: !0,
            once: !0
        }), Ae(document, "keydown", T, {
            capture: !0
        }))
    }
    );
    function bt(p) {
        d.update(k=>{
            const T = !k;
            return T && (y.set(Fr(p)),
            N.set(Rr(p)),
            g.set(p)),
            T
        }
        )
    }
    function Vt(p) {
        const k = p.currentTarget;
        if (!I(k))
            return;
        const T = x.get();
        T && vt(T),
        wr(k),
        x.set(k)
    }
    function sn(p) {
        const k = p.currentTarget;
        I(k) && vt(k)
    }
    function Nn(p) {
        dn(p) && p.preventDefault()
    }
    function ln(p) {
        if (dn(p))
            return;
        const k = p.target;
        if (!I(k))
            return;
        const T = Fn(k);
        T && _e(T)
    }
    function nr(p) {
        dn(p) && p.preventDefault()
    }
    function ir(p) {
        if (!St(p))
            return;
        const k = p.target
          , T = p.currentTarget;
        if (!I(T) || !I(k))
            return;
        const A = D.get()
          , W = A !== p.clientX;
        if (T.contains(k) && W) {
            const $ = p.clientX > A ? "right" : "left";
            C.set($),
            D.set(p.clientX)
        }
    }
    function an(p, k=null) {
        if (!St(p) || (Nn(p),
        p.defaultPrevented))
            return;
        if (k) {
            _e(k);
            return
        }
        const T = p.currentTarget;
        I(T) && _e(T)
    }
    function un(p) {
        St(p) && ln(p)
    }
    function cn(p) {
        if (re.get().length > 0 && p.key === ke.SPACE) {
            p.preventDefault();
            return
        }
        if (Yt.includes(p.key)) {
            p.preventDefault();
            const A = p.currentTarget;
            if (!I(A))
                return;
            A.click()
        }
    }
    function fn(p) {
        return p === "indeterminate"
    }
    function rr(p) {
        return fn(p) ? "indeterminate" : p ? "checked" : "unchecked"
    }
    function dn(p) {
        return P.get()(p)
    }
    function Fn(p) {
        const k = p.closest('[role="menu"]');
        return I(k) ? k : null
    }
    return {
        elements: {
            trigger: B,
            menu: E,
            overlay: U,
            item: te,
            group: be,
            groupLabel: de,
            arrow: K,
            separator: Ze
        },
        builders: {
            createCheckboxItem: Je,
            createSubmenu: Ct,
            createMenuRadioGroup: Ne
        },
        states: {
            open: d
        },
        helpers: {
            handleTypeaheadSearch: z
        },
        ids: h,
        options: t.rootOptions
    }
}
function ii(t, e, n) {
    if (t.shiftKey) {
        const i = n.get();
        i && (t.preventDefault(),
        xe(1).then(()=>i.focus()),
        n.set(null))
    } else {
        const i = e.get();
        i && (t.preventDefault(),
        xe(1).then(()=>i.focus()),
        e.set(null))
    }
}
function lt(t) {
    return Array.from(t.querySelectorAll(`[data-melt-menu-id="${t.id}"]`)).filter(e=>I(e))
}
function Xt(t) {
    !t || !Qe(t) || (t.setAttribute("data-disabled", ""),
    t.setAttribute("aria-disabled", "true"))
}
function hn(t) {
    if (!at)
        return;
    const e = t.get();
    e && (window.clearTimeout(e),
    t.set(null))
}
function St(t) {
    return t.pointerType === "mouse"
}
function It(t, e) {
    if (!t)
        return;
    const n = t.closest(`${e()}, ${e("submenu")}`);
    I(n) && t.setAttribute("data-melt-menu-id", n.id)
}
function ri(t, e) {
    t.preventDefault();
    const n = document.activeElement
      , i = t.currentTarget;
    if (!I(n) || !I(i))
        return;
    const r = lt(i);
    if (!r.length)
        return;
    const s = r.filter(l=>!(l.hasAttribute("data-disabled") || l.getAttribute("disabled") === "true"))
      , o = s.indexOf(n);
    let c;
    switch (t.key) {
    case ke.ARROW_DOWN:
        e ? c = o < s.length - 1 ? o + 1 : 0 : c = o < s.length - 1 ? o + 1 : o;
        break;
    case ke.ARROW_UP:
        e ? c = o > 0 ? o - 1 : s.length - 1 : c = o < 0 ? s.length - 1 : o > 0 ? o - 1 : 0;
        break;
    case ke.HOME:
        c = 0;
        break;
    case ke.END:
        c = s.length - 1;
        break;
    default:
        return
    }
    _e(s[c])
}
function cs(t, e) {
    if (!e)
        return !1;
    const n = {
        x: t.clientX,
        y: t.clientY
    };
    return fs(n, e)
}
function fs(t, e) {
    const {x: n, y: i} = t;
    let r = !1;
    for (let s = 0, o = e.length - 1; s < e.length; o = s++) {
        const c = e[s].x
          , l = e[s].y
          , a = e[o].x
          , u = e[o].y;
        l > i != u > i && n < (a - c) * (i - l) / (u - l) + c && (r = !r)
    }
    return r
}
function ds(t) {
    const e = document.activeElement;
    if (!I(e))
        return !1;
    const n = e.closest(`[data-id="${t}"]`);
    return I(n)
}
function ms(t) {
    return t ? "open" : "closed"
}
const gs = {
    arrowSize: 8,
    positioning: {
        placement: "bottom"
    },
    preventScroll: !0,
    closeOnEscape: !0,
    closeOnOutsideClick: !0,
    portal: void 0,
    loop: !1,
    dir: "ltr",
    defaultOpen: !1,
    forceVisible: !1,
    typeahead: !0,
    closeFocus: void 0,
    disableFocusFirstItem: !1,
    closeOnItemClick: !0,
    onOutsideClick: void 0
};
function bs(t) {
    const e = {
        ...gs,
        ...t
    }
      , n = Gt(Ni(e, "ids"))
      , i = e.open ?? he(e.defaultOpen)
      , r = qt(i, e == null ? void 0 : e.onOpenChange)
      , s = we(he(null))
      , o = we(he(null))
      , c = we(he(null))
      , {elements: l, builders: a, ids: u, states: f, options: m} = us({
        rootOptions: n,
        rootOpen: r,
        rootActiveTrigger: we(s),
        nextFocusable: we(o),
        prevFocusable: we(c),
        selector: "dropdown-menu",
        removeScroll: !0,
        ids: e.ids
    });
    return {
        ids: u,
        elements: l,
        states: f,
        builders: a,
        options: m
    }
}
function tr() {
    return Fi(10)
}
function hs(t, e) {
    const n = [];
    return e.builders.forEach(i=>{
        const r = i.action(t);
        r && n.push(r)
    }
    ),
    {
        destroy: ()=>{
            n.forEach(i=>{
                i.destroy && i.destroy()
            }
            )
        }
    }
}
function oi(t) {
    const e = {};
    return t.forEach(n=>{
        Object.keys(n).forEach(i=>{
            i !== "action" && (e[i] = n[i])
        }
        )
    }
    ),
    e
}
function vs(t) {
    let e = t[1] ? "a" : "button", n, i, r = (t[1] ? "a" : "button") && vn(t);
    return {
        c() {
            r && r.c(),
            n = ge()
        },
        l(s) {
            r && r.l(s),
            n = ge()
        },
        m(s, o) {
            r && r.m(s, o),
            le(s, n, o),
            i = !0
        },
        p(s, o) {
            s[1],
            e ? Te(e, s[1] ? "a" : "button") ? (r.d(1),
            r = vn(s),
            e = s[1] ? "a" : "button",
            r.c(),
            r.m(n.parentNode, n)) : r.p(s, o) : (r = vn(s),
            e = s[1] ? "a" : "button",
            r.c(),
            r.m(n.parentNode, n))
        },
        i(s) {
            i || (L(r, s),
            i = !0)
        },
        o(s) {
            M(r, s),
            i = !1
        },
        d(s) {
            s && q(n),
            r && r.d(s)
        }
    }
}
function ps(t) {
    let e = t[1] ? "a" : "button", n, i, r = (t[1] ? "a" : "button") && pn(t);
    return {
        c() {
            r && r.c(),
            n = ge()
        },
        l(s) {
            r && r.l(s),
            n = ge()
        },
        m(s, o) {
            r && r.m(s, o),
            le(s, n, o),
            i = !0
        },
        p(s, o) {
            s[1],
            e ? Te(e, s[1] ? "a" : "button") ? (r.d(1),
            r = pn(s),
            e = s[1] ? "a" : "button",
            r.c(),
            r.m(n.parentNode, n)) : r.p(s, o) : (r = pn(s),
            e = s[1] ? "a" : "button",
            r.c(),
            r.m(n.parentNode, n))
        },
        i(s) {
            i || (L(r, s),
            i = !0)
        },
        o(s) {
            M(r, s),
            i = !1
        },
        d(s) {
            s && q(n),
            r && r.d(s)
        }
    }
}
function vn(t) {
    let e, n, i, r, s;
    const o = t[7].default
      , c = ae(o, t, t[6], null);
    let l = [{
        type: n = t[1] ? void 0 : t[2]
    }, {
        href: t[1]
    }, {
        tabindex: "0"
    }, t[5], t[4]]
      , a = {};
    for (let u = 0; u < l.length; u += 1)
        a = V(a, l[u]);
    return {
        c() {
            e = Be(t[1] ? "a" : "button"),
            c && c.c(),
            this.h()
        },
        l(u) {
            e = Ke(u, ((t[1] ? "a" : "button") || "null").toUpperCase(), {
                type: !0,
                href: !0,
                tabindex: !0
            });
            var f = We(e);
            c && c.l(f),
            f.forEach(q),
            this.h()
        },
        h() {
            kt(t[1] ? "a" : "button")(e, a)
        },
        m(u, f) {
            le(u, e, f),
            c && c.m(e, null),
            i = !0,
            r || (s = [ee(e, "click", t[14]), ee(e, "change", t[15]), ee(e, "keydown", t[16]), ee(e, "keyup", t[17]), ee(e, "mouseenter", t[18]), ee(e, "mouseleave", t[19])],
            r = !0)
        },
        p(u, f) {
            c && c.p && (!i || f & 64) && ue(c, o, u, u[6], i ? fe(o, u[6], f, null) : ce(u[6]), null),
            kt(u[1] ? "a" : "button")(e, a = ye(l, [(!i || f & 6 && n !== (n = u[1] ? void 0 : u[2])) && {
                type: n
            }, (!i || f & 2) && {
                href: u[1]
            }, {
                tabindex: "0"
            }, f & 32 && u[5], u[4]]))
        },
        i(u) {
            i || (L(c, u),
            i = !0)
        },
        o(u) {
            M(c, u),
            i = !1
        },
        d(u) {
            u && q(e),
            c && c.d(u),
            r = !1,
            et(s)
        }
    }
}
function pn(t) {
    let e, n, i, r, s, o;
    const c = t[7].default
      , l = ae(c, t, t[6], null);
    let a = [{
        type: n = t[1] ? void 0 : t[2]
    }, {
        href: t[1]
    }, {
        tabindex: "0"
    }, oi(t[3]), t[5], t[4]]
      , u = {};
    for (let f = 0; f < a.length; f += 1)
        u = V(u, a[f]);
    return {
        c() {
            e = Be(t[1] ? "a" : "button"),
            l && l.c(),
            this.h()
        },
        l(f) {
            e = Ke(f, ((t[1] ? "a" : "button") || "null").toUpperCase(), {
                type: !0,
                href: !0,
                tabindex: !0
            });
            var m = We(e);
            l && l.l(m),
            m.forEach(q),
            this.h()
        },
        h() {
            kt(t[1] ? "a" : "button")(e, u)
        },
        m(f, m) {
            le(f, e, m),
            l && l.m(e, null),
            t[20](e),
            r = !0,
            s || (o = [ee(e, "click", t[8]), ee(e, "change", t[9]), ee(e, "keydown", t[10]), ee(e, "keyup", t[11]), ee(e, "mouseenter", t[12]), ee(e, "mouseleave", t[13]), He(i = hs.call(null, e, {
                builders: t[3]
            }))],
            s = !0)
        },
        p(f, m) {
            l && l.p && (!r || m & 64) && ue(l, c, f, f[6], r ? fe(c, f[6], m, null) : ce(f[6]), null),
            kt(f[1] ? "a" : "button")(e, u = ye(a, [(!r || m & 6 && n !== (n = f[1] ? void 0 : f[2])) && {
                type: n
            }, (!r || m & 2) && {
                href: f[1]
            }, {
                tabindex: "0"
            }, m & 8 && oi(f[3]), m & 32 && f[5], f[4]])),
            i && ar(i.update) && m & 8 && i.update.call(null, {
                builders: f[3]
            })
        },
        i(f) {
            r || (L(l, f),
            r = !0)
        },
        o(f) {
            M(l, f),
            r = !1
        },
        d(f) {
            f && q(e),
            l && l.d(f),
            t[20](null),
            s = !1,
            et(o)
        }
    }
}
function ys(t) {
    let e, n, i, r;
    const s = [ps, vs]
      , o = [];
    function c(l, a) {
        return l[3] && l[3].length ? 0 : 1
    }
    return e = c(t),
    n = o[e] = s[e](t),
    {
        c() {
            n.c(),
            i = ge()
        },
        l(l) {
            n.l(l),
            i = ge()
        },
        m(l, a) {
            o[e].m(l, a),
            le(l, i, a),
            r = !0
        },
        p(l, [a]) {
            let u = e;
            e = c(l),
            e === u ? o[e].p(l, a) : (dt(),
            M(o[u], 1, 1, ()=>{
                o[u] = null
            }
            ),
            mt(),
            n = o[e],
            n ? n.p(l, a) : (n = o[e] = s[e](l),
            n.c()),
            L(n, 1),
            n.m(i.parentNode, i))
        },
        i(l) {
            r || (L(n),
            r = !0)
        },
        o(l) {
            M(n),
            r = !1
        },
        d(l) {
            l && q(i),
            o[e].d(l)
        }
    }
}
function _s(t, e, n) {
    const i = ["href", "type", "builders", "el"];
    let r = ie(e, i)
      , {$$slots: s={}, $$scope: o} = e
      , {href: c=void 0} = e
      , {type: l=void 0} = e
      , {builders: a=[]} = e
      , {el: u=void 0} = e;
    const f = {
        "data-button-root": ""
    };
    function m(P) {
        se.call(this, t, P)
    }
    function b(P) {
        se.call(this, t, P)
    }
    function w(P) {
        se.call(this, t, P)
    }
    function _(P) {
        se.call(this, t, P)
    }
    function d(P) {
        se.call(this, t, P)
    }
    function g(P) {
        se.call(this, t, P)
    }
    function y(P) {
        se.call(this, t, P)
    }
    function N(P) {
        se.call(this, t, P)
    }
    function S(P) {
        se.call(this, t, P)
    }
    function D(P) {
        se.call(this, t, P)
    }
    function R(P) {
        se.call(this, t, P)
    }
    function C(P) {
        se.call(this, t, P)
    }
    function x(P) {
        ze[P ? "unshift" : "push"](()=>{
            u = P,
            n(0, u)
        }
        )
    }
    return t.$$set = P=>{
        e = V(V({}, e), Le(P)),
        n(5, r = ie(e, i)),
        "href"in P && n(1, c = P.href),
        "type"in P && n(2, l = P.type),
        "builders"in P && n(3, a = P.builders),
        "el"in P && n(0, u = P.el),
        "$$scope"in P && n(6, o = P.$$scope)
    }
    ,
    [u, c, l, a, f, r, o, s, m, b, w, _, d, g, y, N, S, D, R, C, x]
}
let ws = class extends Ie {
    constructor(e) {
        super(),
        De(this, e, _s, ys, Te, {
            href: 1,
            type: 2,
            builders: 3,
            el: 0
        })
    }
}
;
function ks(t) {
    return (e={})=>Ts(t, e)
}
function Ts(t, e) {
    const i = {
        ...{
            side: "bottom",
            align: "center",
            sideOffset: 0,
            alignOffset: 0,
            sameWidth: !1,
            avoidCollisions: !0,
            collisionPadding: 8,
            fitViewport: !1,
            strategy: "absolute",
            overlap: !1
        },
        ...e
    };
    t.update(r=>({
        ...r,
        placement: Es(i.side, i.align),
        offset: {
            ...r.offset,
            mainAxis: i.sideOffset,
            crossAxis: i.alignOffset
        },
        gutter: 0,
        sameWidth: i.sameWidth,
        flip: i.avoidCollisions,
        overflowPadding: i.collisionPadding,
        boundary: i.collisionBoundary,
        fitViewport: i.fitViewport,
        strategy: i.strategy,
        overlap: i.overlap
    }))
}
function Es(t, e) {
    return e === "center" ? t : `${t}-${e}`
}
function on() {
    return {
        NAME: "menu",
        SUB_NAME: "menu-submenu",
        RADIO_GROUP_NAME: "menu-radiogroup",
        CHECKBOX_ITEM_NAME: "menu-checkboxitem",
        RADIO_ITEM_NAME: "menu-radioitem",
        GROUP_NAME: "menu-group",
        PARTS: ["arrow", "checkbox-indicator", "checkbox-item", "content", "group", "item", "label", "radio-group", "radio-item", "radio-indicator", "separator", "sub-content", "sub-trigger", "trigger"]
    }
}
function gt() {
    const {NAME: t} = on();
    return Pi(t)
}
function Os(t) {
    const {NAME: e, PARTS: n} = on()
      , i = mr("menu", n)
      , r = {
        ...bs({
            ...gr(t),
            forceVisible: !0
        }),
        getAttrs: i
    };
    return Ai(e, r),
    {
        ...r,
        updateOption: br(r.options)
    }
}
function Cs() {
    const {GROUP_NAME: t} = on()
      , {elements: {group: e}, getAttrs: n} = gt()
      , i = tr();
    return Ai(t, i),
    {
        group: e,
        id: i,
        getAttrs: n
    }
}
function As() {
    const {GROUP_NAME: t} = on()
      , e = Pi(t) ?? tr()
      , {elements: {groupLabel: n}, getAttrs: i} = gt();
    return {
        groupLabel: n,
        id: e,
        getAttrs: i
    }
}
function Ps(t) {
    const n = {
        ...{
            side: "bottom",
            align: "center"
        },
        ...t
    }
      , {options: {positioning: i}} = gt();
    ks(i)(n)
}
const Ss = t=>({
    builder: t & 8
})
  , si = t=>({
    builder: t[3]
})
  , Is = t=>({
    builder: t & 8
})
  , li = t=>({
    builder: t[3]
});
function Ds(t) {
    let e = t[1] ? "a" : "div", n, i, r = (t[1] ? "a" : "div") && yn(t);
    return {
        c() {
            r && r.c(),
            n = ge()
        },
        l(s) {
            r && r.l(s),
            n = ge()
        },
        m(s, o) {
            r && r.m(s, o),
            le(s, n, o),
            i = !0
        },
        p(s, o) {
            s[1],
            e ? Te(e, s[1] ? "a" : "div") ? (r.d(1),
            r = yn(s),
            e = s[1] ? "a" : "div",
            r.c(),
            r.m(n.parentNode, n)) : r.p(s, o) : (r = yn(s),
            e = s[1] ? "a" : "div",
            r.c(),
            r.m(n.parentNode, n))
        },
        i(s) {
            i || (L(r, s),
            i = !0)
        },
        o(s) {
            M(r, s),
            i = !1
        },
        d(s) {
            s && q(n),
            r && r.d(s)
        }
    }
}
function Ns(t) {
    let e;
    const n = t[11].default
      , i = ae(n, t, t[10], li);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 1032) && ue(i, n, r, r[10], e ? fe(n, r[10], s, Is) : ce(r[10]), li)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function yn(t) {
    let e, n, i, r;
    const s = t[11].default
      , o = ae(s, t, t[10], si);
    let c = [{
        href: t[1]
    }, t[3], t[6]]
      , l = {};
    for (let a = 0; a < c.length; a += 1)
        l = V(l, c[a]);
    return {
        c() {
            e = Be(t[1] ? "a" : "div"),
            o && o.c(),
            this.h()
        },
        l(a) {
            e = Ke(a, ((t[1] ? "a" : "div") || "null").toUpperCase(), {
                href: !0
            });
            var u = We(e);
            o && o.l(u),
            u.forEach(q),
            this.h()
        },
        h() {
            kt(t[1] ? "a" : "div")(e, l)
        },
        m(a, u) {
            le(a, e, u),
            o && o.m(e, null),
            t[12](e),
            n = !0,
            i || (r = [He(t[3].action(e)), ee(e, "m-click", t[5]), ee(e, "m-focusin", t[5]), ee(e, "m-focusout", t[5]), ee(e, "m-keydown", t[5]), ee(e, "m-pointerdown", t[5]), ee(e, "m-pointerleave", t[5]), ee(e, "m-pointermove", t[5])],
            i = !0)
        },
        p(a, u) {
            o && o.p && (!n || u & 1032) && ue(o, s, a, a[10], n ? fe(s, a[10], u, Ss) : ce(a[10]), si),
            kt(a[1] ? "a" : "div")(e, l = ye(c, [(!n || u & 2) && {
                href: a[1]
            }, u & 8 && a[3], u & 64 && a[6]]))
        },
        i(a) {
            n || (L(o, a),
            n = !0)
        },
        o(a) {
            M(o, a),
            n = !1
        },
        d(a) {
            a && q(e),
            o && o.d(a),
            t[12](null),
            i = !1,
            et(r)
        }
    }
}
function Fs(t) {
    let e, n, i, r;
    const s = [Ns, Ds]
      , o = [];
    function c(l, a) {
        return l[2] ? 0 : 1
    }
    return e = c(t),
    n = o[e] = s[e](t),
    {
        c() {
            n.c(),
            i = ge()
        },
        l(l) {
            n.l(l),
            i = ge()
        },
        m(l, a) {
            o[e].m(l, a),
            le(l, i, a),
            r = !0
        },
        p(l, [a]) {
            let u = e;
            e = c(l),
            e === u ? o[e].p(l, a) : (dt(),
            M(o[u], 1, 1, ()=>{
                o[u] = null
            }
            ),
            mt(),
            n = o[e],
            n ? n.p(l, a) : (n = o[e] = s[e](l),
            n.c()),
            L(n, 1),
            n.m(i.parentNode, i))
        },
        i(l) {
            r || (L(n),
            r = !0)
        },
        o(l) {
            M(n),
            r = !1
        },
        d(l) {
            l && q(i),
            o[e].d(l)
        }
    }
}
function Rs(t, e, n) {
    let i, r;
    const s = ["href", "asChild", "disabled", "el"];
    let o = ie(e, s), c, {$$slots: l={}, $$scope: a} = e, {href: u=void 0} = e, {asChild: f=!1} = e, {disabled: m=!1} = e, {el: b=void 0} = e;
    const {elements: {item: w}, getAttrs: _} = gt();
    nt(t, w, y=>n(9, c = y));
    const d = On();
    function g(y) {
        ze[y ? "unshift" : "push"](()=>{
            b = y,
            n(0, b)
        }
        )
    }
    return t.$$set = y=>{
        e = V(V({}, e), Le(y)),
        n(6, o = ie(e, s)),
        "href"in y && n(1, u = y.href),
        "asChild"in y && n(2, f = y.asChild),
        "disabled"in y && n(7, m = y.disabled),
        "el"in y && n(0, b = y.el),
        "$$scope"in y && n(10, a = y.$$scope)
    }
    ,
    t.$$.update = ()=>{
        t.$$.dirty & 512 && n(3, i = c),
        t.$$.dirty & 128 && n(8, r = {
            ..._("item"),
            ...hr(m)
        }),
        t.$$.dirty & 264 && Object.assign(i, r)
    }
    ,
    [b, u, f, i, w, d, o, m, r, c, a, l, g]
}
class Ms extends Ie {
    constructor(e) {
        super(),
        De(this, e, Rs, Fs, Te, {
            href: 1,
            asChild: 2,
            disabled: 7,
            el: 0
        })
    }
}
const Ls = t=>({
    builder: t & 4
})
  , ai = t=>({
    builder: t[2]
})
  , Bs = t=>({
    builder: t & 4
})
  , ui = t=>({
    builder: t[2]
});
function Ks(t) {
    let e, n, i, r;
    const s = t[7].default
      , o = ae(s, t, t[6], ai);
    let c = [t[2], t[4]]
      , l = {};
    for (let a = 0; a < c.length; a += 1)
        l = V(l, c[a]);
    return {
        c() {
            e = Be("div"),
            o && o.c(),
            this.h()
        },
        l(a) {
            e = Ke(a, "DIV", {});
            var u = We(e);
            o && o.l(u),
            u.forEach(q),
            this.h()
        },
        h() {
            ve(e, l)
        },
        m(a, u) {
            le(a, e, u),
            o && o.m(e, null),
            t[8](e),
            n = !0,
            i || (r = He(t[2].action(e)),
            i = !0)
        },
        p(a, u) {
            o && o.p && (!n || u & 68) && ue(o, s, a, a[6], n ? fe(s, a[6], u, Ls) : ce(a[6]), ai),
            ve(e, l = ye(c, [u & 4 && a[2], u & 16 && a[4]]))
        },
        i(a) {
            n || (L(o, a),
            n = !0)
        },
        o(a) {
            M(o, a),
            n = !1
        },
        d(a) {
            a && q(e),
            o && o.d(a),
            t[8](null),
            i = !1,
            r()
        }
    }
}
function Ws(t) {
    let e;
    const n = t[7].default
      , i = ae(n, t, t[6], ui);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 68) && ue(i, n, r, r[6], e ? fe(n, r[6], s, Bs) : ce(r[6]), ui)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function Vs(t) {
    let e, n, i, r;
    const s = [Ws, Ks]
      , o = [];
    function c(l, a) {
        return l[1] ? 0 : 1
    }
    return e = c(t),
    n = o[e] = s[e](t),
    {
        c() {
            n.c(),
            i = ge()
        },
        l(l) {
            n.l(l),
            i = ge()
        },
        m(l, a) {
            o[e].m(l, a),
            le(l, i, a),
            r = !0
        },
        p(l, [a]) {
            let u = e;
            e = c(l),
            e === u ? o[e].p(l, a) : (dt(),
            M(o[u], 1, 1, ()=>{
                o[u] = null
            }
            ),
            mt(),
            n = o[e],
            n ? n.p(l, a) : (n = o[e] = s[e](l),
            n.c()),
            L(n, 1),
            n.m(i.parentNode, i))
        },
        i(l) {
            r || (L(n),
            r = !0)
        },
        o(l) {
            M(n),
            r = !1
        },
        d(l) {
            l && q(i),
            o[e].d(l)
        }
    }
}
function js(t, e, n) {
    let i;
    const r = ["asChild", "el"];
    let s = ie(e, r), o, {$$slots: c={}, $$scope: l} = e, {asChild: a=!1} = e, {el: u=void 0} = e;
    const {group: f, id: m, getAttrs: b} = Cs();
    nt(t, f, d=>n(5, o = d));
    const w = b("group");
    function _(d) {
        ze[d ? "unshift" : "push"](()=>{
            u = d,
            n(0, u)
        }
        )
    }
    return t.$$set = d=>{
        e = V(V({}, e), Le(d)),
        n(4, s = ie(e, r)),
        "asChild"in d && n(1, a = d.asChild),
        "el"in d && n(0, u = d.el),
        "$$scope"in d && n(6, l = d.$$scope)
    }
    ,
    t.$$.update = ()=>{
        t.$$.dirty & 32 && n(2, i = o(m)),
        t.$$.dirty & 4 && Object.assign(i, w)
    }
    ,
    [u, a, i, f, s, o, l, c, _]
}
class zs extends Ie {
    constructor(e) {
        super(),
        De(this, e, js, Vs, Te, {
            asChild: 1,
            el: 0
        })
    }
}
const Hs = t=>({
    builder: t & 4
})
  , ci = t=>({
    builder: t[2]
})
  , Us = t=>({
    builder: t & 4
})
  , fi = t=>({
    builder: t[2]
});
function Xs(t) {
    let e, n, i, r;
    const s = t[7].default
      , o = ae(s, t, t[6], ci);
    let c = [t[2], t[4]]
      , l = {};
    for (let a = 0; a < c.length; a += 1)
        l = V(l, c[a]);
    return {
        c() {
            e = Be("div"),
            o && o.c(),
            this.h()
        },
        l(a) {
            e = Ke(a, "DIV", {});
            var u = We(e);
            o && o.l(u),
            u.forEach(q),
            this.h()
        },
        h() {
            ve(e, l)
        },
        m(a, u) {
            le(a, e, u),
            o && o.m(e, null),
            t[8](e),
            n = !0,
            i || (r = He(t[2].action(e)),
            i = !0)
        },
        p(a, u) {
            o && o.p && (!n || u & 68) && ue(o, s, a, a[6], n ? fe(s, a[6], u, Hs) : ce(a[6]), ci),
            ve(e, l = ye(c, [u & 4 && a[2], u & 16 && a[4]]))
        },
        i(a) {
            n || (L(o, a),
            n = !0)
        },
        o(a) {
            M(o, a),
            n = !1
        },
        d(a) {
            a && q(e),
            o && o.d(a),
            t[8](null),
            i = !1,
            r()
        }
    }
}
function Gs(t) {
    let e;
    const n = t[7].default
      , i = ae(n, t, t[6], fi);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 68) && ue(i, n, r, r[6], e ? fe(n, r[6], s, Us) : ce(r[6]), fi)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function qs(t) {
    let e, n, i, r;
    const s = [Gs, Xs]
      , o = [];
    function c(l, a) {
        return l[1] ? 0 : 1
    }
    return e = c(t),
    n = o[e] = s[e](t),
    {
        c() {
            n.c(),
            i = ge()
        },
        l(l) {
            n.l(l),
            i = ge()
        },
        m(l, a) {
            o[e].m(l, a),
            le(l, i, a),
            r = !0
        },
        p(l, [a]) {
            let u = e;
            e = c(l),
            e === u ? o[e].p(l, a) : (dt(),
            M(o[u], 1, 1, ()=>{
                o[u] = null
            }
            ),
            mt(),
            n = o[e],
            n ? n.p(l, a) : (n = o[e] = s[e](l),
            n.c()),
            L(n, 1),
            n.m(i.parentNode, i))
        },
        i(l) {
            r || (L(n),
            r = !0)
        },
        o(l) {
            M(n),
            r = !1
        },
        d(l) {
            l && q(i),
            o[e].d(l)
        }
    }
}
function Ys(t, e, n) {
    let i;
    const r = ["asChild", "el"];
    let s = ie(e, r), o, {$$slots: c={}, $$scope: l} = e, {asChild: a=!1} = e, {el: u=void 0} = e;
    const {groupLabel: f, id: m, getAttrs: b} = As();
    nt(t, f, d=>n(5, o = d));
    const w = b("label");
    function _(d) {
        ze[d ? "unshift" : "push"](()=>{
            u = d,
            n(0, u)
        }
        )
    }
    return t.$$set = d=>{
        e = V(V({}, e), Le(d)),
        n(4, s = ie(e, r)),
        "asChild"in d && n(1, a = d.asChild),
        "el"in d && n(0, u = d.el),
        "$$scope"in d && n(6, l = d.$$scope)
    }
    ,
    t.$$.update = ()=>{
        t.$$.dirty & 32 && n(2, i = o(m)),
        t.$$.dirty & 4 && Object.assign(i, w)
    }
    ,
    [u, a, i, f, s, o, l, c, _]
}
class Js extends Ie {
    constructor(e) {
        super(),
        De(this, e, Ys, qs, Te, {
            asChild: 1,
            el: 0
        })
    }
}
const Zs = t=>({
    builder: t & 4
})
  , di = t=>({
    builder: t[2]
});
function Qs(t) {
    let e, n, i, r = [t[3], t[5]], s = {};
    for (let o = 0; o < r.length; o += 1)
        s = V(s, r[o]);
    return {
        c() {
            e = Be("div"),
            this.h()
        },
        l(o) {
            e = Ke(o, "DIV", {}),
            We(e).forEach(q),
            this.h()
        },
        h() {
            ve(e, s)
        },
        m(o, c) {
            le(o, e, c),
            t[8](e),
            n || (i = He(t[3].action(e)),
            n = !0)
        },
        p(o, c) {
            ve(e, s = ye(r, [c & 8 && o[3], c & 32 && o[5]]))
        },
        i: Mn,
        o: Mn,
        d(o) {
            o && q(e),
            t[8](null),
            n = !1,
            i()
        }
    }
}
function xs(t) {
    let e;
    const n = t[7].default
      , i = ae(n, t, t[6], di);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 68) && ue(i, n, r, r[6], e ? fe(n, r[6], s, Zs) : ce(r[6]), di)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function $s(t) {
    let e, n, i, r;
    const s = [xs, Qs]
      , o = [];
    function c(l, a) {
        return l[1] ? 0 : 1
    }
    return e = c(t),
    n = o[e] = s[e](t),
    {
        c() {
            n.c(),
            i = ge()
        },
        l(l) {
            n.l(l),
            i = ge()
        },
        m(l, a) {
            o[e].m(l, a),
            le(l, i, a),
            r = !0
        },
        p(l, [a]) {
            let u = e;
            e = c(l),
            e === u ? o[e].p(l, a) : (dt(),
            M(o[u], 1, 1, ()=>{
                o[u] = null
            }
            ),
            mt(),
            n = o[e],
            n ? n.p(l, a) : (n = o[e] = s[e](l),
            n.c()),
            L(n, 1),
            n.m(i.parentNode, i))
        },
        i(l) {
            r || (L(n),
            r = !0)
        },
        o(l) {
            M(n),
            r = !1
        },
        d(l) {
            l && q(i),
            o[e].d(l)
        }
    }
}
function el(t, e, n) {
    let i;
    const r = ["asChild", "el"];
    let s = ie(e, r), o, {$$slots: c={}, $$scope: l} = e, {asChild: a=!1} = e, {el: u=void 0} = e;
    const {elements: {separator: f}, getAttrs: m} = gt();
    nt(t, f, _=>n(3, o = _));
    const b = m("separator");
    function w(_) {
        ze[_ ? "unshift" : "push"](()=>{
            u = _,
            n(0, u)
        }
        )
    }
    return t.$$set = _=>{
        e = V(V({}, e), Le(_)),
        n(5, s = ie(e, r)),
        "asChild"in _ && n(1, a = _.asChild),
        "el"in _ && n(0, u = _.el),
        "$$scope"in _ && n(6, l = _.$$scope)
    }
    ,
    t.$$.update = ()=>{
        t.$$.dirty & 8 && n(2, i = o),
        t.$$.dirty & 4 && Object.assign(i, b)
    }
    ,
    [u, a, i, o, f, s, l, c, w]
}
class tl extends Ie {
    constructor(e) {
        super(),
        De(this, e, el, $s, Te, {
            asChild: 1,
            el: 0
        })
    }
}
const nl = t=>({
    ids: t & 1
})
  , mi = t=>({
    ids: t[0]
});
function il(t) {
    let e;
    const n = t[16].default
      , i = ae(n, t, t[15], mi);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, [s]) {
            i && i.p && (!e || s & 32769) && ue(i, n, r, r[15], e ? fe(n, r[15], s, nl) : ce(r[15]), mi)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function rl(t, e, n) {
    let i, {$$slots: r={}, $$scope: s} = e, {closeOnOutsideClick: o=void 0} = e, {closeOnEscape: c=void 0} = e, {portal: l=void 0} = e, {open: a=void 0} = e, {onOpenChange: u=void 0} = e, {preventScroll: f=void 0} = e, {loop: m=void 0} = e, {dir: b=void 0} = e, {typeahead: w=void 0} = e, {closeFocus: _=void 0} = e, {disableFocusFirstItem: d=void 0} = e, {closeOnItemClick: g=void 0} = e, {onOutsideClick: y=void 0} = e;
    const {states: {open: N}, updateOption: S, ids: D} = Os({
        closeOnOutsideClick: o,
        closeOnEscape: c,
        portal: l,
        forceVisible: !0,
        defaultOpen: a,
        preventScroll: f,
        loop: m,
        dir: b,
        typeahead: w,
        closeFocus: _,
        disableFocusFirstItem: d,
        closeOnItemClick: g,
        onOutsideClick: y,
        onOpenChange: ({next: C})=>(a !== C && (u == null || u(C),
        n(2, a = C)),
        C)
    })
      , R = _t([D.menu, D.trigger], ([C,x])=>({
        menu: C,
        trigger: x
    }));
    return nt(t, R, C=>n(0, i = C)),
    t.$$set = C=>{
        "closeOnOutsideClick"in C && n(3, o = C.closeOnOutsideClick),
        "closeOnEscape"in C && n(4, c = C.closeOnEscape),
        "portal"in C && n(5, l = C.portal),
        "open"in C && n(2, a = C.open),
        "onOpenChange"in C && n(6, u = C.onOpenChange),
        "preventScroll"in C && n(7, f = C.preventScroll),
        "loop"in C && n(8, m = C.loop),
        "dir"in C && n(9, b = C.dir),
        "typeahead"in C && n(10, w = C.typeahead),
        "closeFocus"in C && n(11, _ = C.closeFocus),
        "disableFocusFirstItem"in C && n(12, d = C.disableFocusFirstItem),
        "closeOnItemClick"in C && n(13, g = C.closeOnItemClick),
        "onOutsideClick"in C && n(14, y = C.onOutsideClick),
        "$$scope"in C && n(15, s = C.$$scope)
    }
    ,
    t.$$.update = ()=>{
        t.$$.dirty & 4 && a !== void 0 && N.set(a),
        t.$$.dirty & 8 && S("closeOnOutsideClick", o),
        t.$$.dirty & 16 && S("closeOnEscape", c),
        t.$$.dirty & 32 && S("portal", l),
        t.$$.dirty & 128 && S("preventScroll", f),
        t.$$.dirty & 256 && S("loop", m),
        t.$$.dirty & 512 && S("dir", b),
        t.$$.dirty & 2048 && S("closeFocus", _),
        t.$$.dirty & 4096 && S("disableFocusFirstItem", d),
        t.$$.dirty & 1024 && S("typeahead", w),
        t.$$.dirty & 8192 && S("closeOnItemClick", g),
        t.$$.dirty & 16384 && S("onOutsideClick", y)
    }
    ,
    [i, R, a, o, c, l, u, f, m, b, w, _, d, g, y, s, r]
}
class ol extends Ie {
    constructor(e) {
        super(),
        De(this, e, rl, il, Te, {
            closeOnOutsideClick: 3,
            closeOnEscape: 4,
            portal: 5,
            open: 2,
            onOpenChange: 6,
            preventScroll: 7,
            loop: 8,
            dir: 9,
            typeahead: 10,
            closeFocus: 11,
            disableFocusFirstItem: 12,
            closeOnItemClick: 13,
            onOutsideClick: 14
        })
    }
}
const sl = t=>({
    builder: t[0] & 256
})
  , gi = t=>({
    builder: t[8]
})
  , ll = t=>({
    builder: t[0] & 256
})
  , bi = t=>({
    builder: t[8]
})
  , al = t=>({
    builder: t[0] & 256
})
  , hi = t=>({
    builder: t[8]
})
  , ul = t=>({
    builder: t[0] & 256
})
  , vi = t=>({
    builder: t[8]
})
  , cl = t=>({
    builder: t[0] & 256
})
  , pi = t=>({
    builder: t[8]
})
  , fl = t=>({
    builder: t[0] & 256
})
  , yi = t=>({
    builder: t[8]
});
function dl(t) {
    let e, n, i, r;
    const s = t[28].default
      , o = ae(s, t, t[27], gi);
    let c = [t[8], t[13]]
      , l = {};
    for (let a = 0; a < c.length; a += 1)
        l = V(l, c[a]);
    return {
        c() {
            e = Be("div"),
            o && o.c(),
            this.h()
        },
        l(a) {
            e = Ke(a, "DIV", {});
            var u = We(e);
            o && o.l(u),
            u.forEach(q),
            this.h()
        },
        h() {
            ve(e, l)
        },
        m(a, u) {
            le(a, e, u),
            o && o.m(e, null),
            t[33](e),
            n = !0,
            i || (r = [He(t[8].action(e)), ee(e, "m-keydown", t[12])],
            i = !0)
        },
        p(a, u) {
            o && o.p && (!n || u[0] & 134217984) && ue(o, s, a, a[27], n ? fe(s, a[27], u, sl) : ce(a[27]), gi),
            ve(e, l = ye(c, [u[0] & 256 && a[8], u[0] & 8192 && a[13]]))
        },
        i(a) {
            n || (L(o, a),
            n = !0)
        },
        o(a) {
            M(o, a),
            n = !1
        },
        d(a) {
            a && q(e),
            o && o.d(a),
            t[33](null),
            i = !1,
            et(r)
        }
    }
}
function ml(t) {
    let e, n, i, r, s;
    const o = t[28].default
      , c = ae(o, t, t[27], bi);
    let l = [t[8], t[13]]
      , a = {};
    for (let u = 0; u < l.length; u += 1)
        a = V(a, l[u]);
    return {
        c() {
            e = Be("div"),
            c && c.c(),
            this.h()
        },
        l(u) {
            e = Ke(u, "DIV", {});
            var f = We(e);
            c && c.l(f),
            f.forEach(q),
            this.h()
        },
        h() {
            ve(e, a)
        },
        m(u, f) {
            le(u, e, f),
            c && c.m(e, null),
            t[32](e),
            i = !0,
            r || (s = [He(t[8].action(e)), ee(e, "m-keydown", t[12])],
            r = !0)
        },
        p(u, f) {
            t = u,
            c && c.p && (!i || f[0] & 134217984) && ue(c, o, t, t[27], i ? fe(o, t[27], f, ll) : ce(t[27]), bi),
            ve(e, a = ye(l, [f[0] & 256 && t[8], f[0] & 8192 && t[13]]))
        },
        i(u) {
            i || (L(c, u),
            n && n.end(1),
            i = !0)
        },
        o(u) {
            M(c, u),
            u && (n = Si(e, t[5], t[6])),
            i = !1
        },
        d(u) {
            u && q(e),
            c && c.d(u),
            t[32](null),
            u && n && n.end(),
            r = !1,
            et(s)
        }
    }
}
function gl(t) {
    let e, n, i, r, s;
    const o = t[28].default
      , c = ae(o, t, t[27], hi);
    let l = [t[8], t[13]]
      , a = {};
    for (let u = 0; u < l.length; u += 1)
        a = V(a, l[u]);
    return {
        c() {
            e = Be("div"),
            c && c.c(),
            this.h()
        },
        l(u) {
            e = Ke(u, "DIV", {});
            var f = We(e);
            c && c.l(f),
            f.forEach(q),
            this.h()
        },
        h() {
            ve(e, a)
        },
        m(u, f) {
            le(u, e, f),
            c && c.m(e, null),
            t[31](e),
            i = !0,
            r || (s = [He(t[8].action(e)), ee(e, "m-keydown", t[12])],
            r = !0)
        },
        p(u, f) {
            t = u,
            c && c.p && (!i || f[0] & 134217984) && ue(c, o, t, t[27], i ? fe(o, t[27], f, al) : ce(t[27]), hi),
            ve(e, a = ye(l, [f[0] & 256 && t[8], f[0] & 8192 && t[13]]))
        },
        i(u) {
            i || (L(c, u),
            u && (n || Tn(()=>{
                n = Ii(e, t[3], t[4]),
                n.start()
            }
            )),
            i = !0)
        },
        o(u) {
            M(c, u),
            i = !1
        },
        d(u) {
            u && q(e),
            c && c.d(u),
            t[31](null),
            r = !1,
            et(s)
        }
    }
}
function bl(t) {
    let e, n, i, r, s, o;
    const c = t[28].default
      , l = ae(c, t, t[27], vi);
    let a = [t[8], t[13]]
      , u = {};
    for (let f = 0; f < a.length; f += 1)
        u = V(u, a[f]);
    return {
        c() {
            e = Be("div"),
            l && l.c(),
            this.h()
        },
        l(f) {
            e = Ke(f, "DIV", {});
            var m = We(e);
            l && l.l(m),
            m.forEach(q),
            this.h()
        },
        h() {
            ve(e, u)
        },
        m(f, m) {
            le(f, e, m),
            l && l.m(e, null),
            t[30](e),
            r = !0,
            s || (o = [He(t[8].action(e)), ee(e, "m-keydown", t[12])],
            s = !0)
        },
        p(f, m) {
            t = f,
            l && l.p && (!r || m[0] & 134217984) && ue(l, c, t, t[27], r ? fe(c, t[27], m, ul) : ce(t[27]), vi),
            ve(e, u = ye(a, [m[0] & 256 && t[8], m[0] & 8192 && t[13]]))
        },
        i(f) {
            r || (L(l, f),
            f && Tn(()=>{
                r && (i && i.end(1),
                n = Ii(e, t[3], t[4]),
                n.start())
            }
            ),
            r = !0)
        },
        o(f) {
            M(l, f),
            n && n.invalidate(),
            f && (i = Si(e, t[5], t[6])),
            r = !1
        },
        d(f) {
            f && q(e),
            l && l.d(f),
            t[30](null),
            f && i && i.end(),
            s = !1,
            et(o)
        }
    }
}
function hl(t) {
    let e, n, i, r, s;
    const o = t[28].default
      , c = ae(o, t, t[27], pi);
    let l = [t[8], t[13]]
      , a = {};
    for (let u = 0; u < l.length; u += 1)
        a = V(a, l[u]);
    return {
        c() {
            e = Be("div"),
            c && c.c(),
            this.h()
        },
        l(u) {
            e = Ke(u, "DIV", {});
            var f = We(e);
            c && c.l(f),
            f.forEach(q),
            this.h()
        },
        h() {
            ve(e, a)
        },
        m(u, f) {
            le(u, e, f),
            c && c.m(e, null),
            t[29](e),
            i = !0,
            r || (s = [He(t[8].action(e)), ee(e, "m-keydown", t[12])],
            r = !0)
        },
        p(u, f) {
            t = u,
            c && c.p && (!i || f[0] & 134217984) && ue(c, o, t, t[27], i ? fe(o, t[27], f, cl) : ce(t[27]), pi),
            ve(e, a = ye(l, [f[0] & 256 && t[8], f[0] & 8192 && t[13]]))
        },
        i(u) {
            i || (L(c, u),
            u && Tn(()=>{
                i && (n || (n = Ln(e, t[1], t[2], !0)),
                n.run(1))
            }
            ),
            i = !0)
        },
        o(u) {
            M(c, u),
            u && (n || (n = Ln(e, t[1], t[2], !1)),
            n.run(0)),
            i = !1
        },
        d(u) {
            u && q(e),
            c && c.d(u),
            t[29](null),
            u && n && n.end(),
            r = !1,
            et(s)
        }
    }
}
function vl(t) {
    let e;
    const n = t[28].default
      , i = ae(n, t, t[27], yi);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s[0] & 134217984) && ue(i, n, r, r[27], e ? fe(n, r[27], s, fl) : ce(r[27]), yi)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function pl(t) {
    let e, n, i, r;
    const s = [vl, hl, bl, gl, ml, dl]
      , o = [];
    function c(l, a) {
        return l[7] && l[9] ? 0 : l[1] && l[9] ? 1 : l[3] && l[5] && l[9] ? 2 : l[3] && l[9] ? 3 : l[5] && l[9] ? 4 : l[9] ? 5 : -1
    }
    return ~(e = c(t)) && (n = o[e] = s[e](t)),
    {
        c() {
            n && n.c(),
            i = ge()
        },
        l(l) {
            n && n.l(l),
            i = ge()
        },
        m(l, a) {
            ~e && o[e].m(l, a),
            le(l, i, a),
            r = !0
        },
        p(l, a) {
            let u = e;
            e = c(l),
            e === u ? ~e && o[e].p(l, a) : (n && (dt(),
            M(o[u], 1, 1, ()=>{
                o[u] = null
            }
            ),
            mt()),
            ~e ? (n = o[e],
            n ? n.p(l, a) : (n = o[e] = s[e](l),
            n.c()),
            L(n, 1),
            n.m(i.parentNode, i)) : n = null)
        },
        i(l) {
            r || (L(n),
            r = !0)
        },
        o(l) {
            M(n),
            r = !1
        },
        d(l) {
            l && q(i),
            ~e && o[e].d(l)
        }
    }
}
function yl(t, e, n) {
    let i;
    const r = ["transition", "transitionConfig", "inTransition", "inTransitionConfig", "outTransition", "outTransitionConfig", "asChild", "id", "side", "align", "sideOffset", "alignOffset", "collisionPadding", "avoidCollisions", "collisionBoundary", "sameWidth", "fitViewport", "strategy", "overlap", "el"];
    let s = ie(e, r), o, c, {$$slots: l={}, $$scope: a} = e, {transition: u=void 0} = e, {transitionConfig: f=void 0} = e, {inTransition: m=void 0} = e, {inTransitionConfig: b=void 0} = e, {outTransition: w=void 0} = e, {outTransitionConfig: _=void 0} = e, {asChild: d=!1} = e, {id: g=void 0} = e, {side: y="bottom"} = e, {align: N="center"} = e, {sideOffset: S=0} = e, {alignOffset: D=0} = e, {collisionPadding: R=8} = e, {avoidCollisions: C=!0} = e, {collisionBoundary: x=void 0} = e, {sameWidth: P=!1} = e, {fitViewport: re=!1} = e, {strategy: z="absolute"} = e, {overlap: h=!1} = e, {el: v=void 0} = e;
    const {elements: {menu: E}, states: {open: B}, ids: K, getAttrs: U} = gt();
    nt(t, E, O=>n(26, c = O)),
    nt(t, B, O=>n(9, o = O));
    const te = On()
      , be = U("content");
    function de(O) {
        ze[O ? "unshift" : "push"](()=>{
            v = O,
            n(0, v)
        }
        )
    }
    function Ve(O) {
        ze[O ? "unshift" : "push"](()=>{
            v = O,
            n(0, v)
        }
        )
    }
    function Je(O) {
        ze[O ? "unshift" : "push"](()=>{
            v = O,
            n(0, v)
        }
        )
    }
    function Ne(O) {
        ze[O ? "unshift" : "push"](()=>{
            v = O,
            n(0, v)
        }
        )
    }
    function Ze(O) {
        ze[O ? "unshift" : "push"](()=>{
            v = O,
            n(0, v)
        }
        )
    }
    return t.$$set = O=>{
        e = V(V({}, e), Le(O)),
        n(13, s = ie(e, r)),
        "transition"in O && n(1, u = O.transition),
        "transitionConfig"in O && n(2, f = O.transitionConfig),
        "inTransition"in O && n(3, m = O.inTransition),
        "inTransitionConfig"in O && n(4, b = O.inTransitionConfig),
        "outTransition"in O && n(5, w = O.outTransition),
        "outTransitionConfig"in O && n(6, _ = O.outTransitionConfig),
        "asChild"in O && n(7, d = O.asChild),
        "id"in O && n(14, g = O.id),
        "side"in O && n(15, y = O.side),
        "align"in O && n(16, N = O.align),
        "sideOffset"in O && n(17, S = O.sideOffset),
        "alignOffset"in O && n(18, D = O.alignOffset),
        "collisionPadding"in O && n(19, R = O.collisionPadding),
        "avoidCollisions"in O && n(20, C = O.avoidCollisions),
        "collisionBoundary"in O && n(21, x = O.collisionBoundary),
        "sameWidth"in O && n(22, P = O.sameWidth),
        "fitViewport"in O && n(23, re = O.fitViewport),
        "strategy"in O && n(24, z = O.strategy),
        "overlap"in O && n(25, h = O.overlap),
        "el"in O && n(0, v = O.el),
        "$$scope"in O && n(27, a = O.$$scope)
    }
    ,
    t.$$.update = ()=>{
        t.$$.dirty[0] & 16384 && g && K.menu.set(g),
        t.$$.dirty[0] & 67108864 && n(8, i = c),
        t.$$.dirty[0] & 256 && Object.assign(i, be),
        t.$$.dirty[0] & 67076608 && o && Ps({
            side: y,
            align: N,
            sideOffset: S,
            alignOffset: D,
            collisionPadding: R,
            avoidCollisions: C,
            collisionBoundary: x,
            sameWidth: P,
            fitViewport: re,
            strategy: z,
            overlap: h
        })
    }
    ,
    [v, u, f, m, b, w, _, d, i, o, E, B, te, s, g, y, N, S, D, R, C, x, P, re, z, h, c, a, l, de, Ve, Je, Ne, Ze]
}
class _l extends Ie {
    constructor(e) {
        super(),
        De(this, e, yl, pl, Te, {
            transition: 1,
            transitionConfig: 2,
            inTransition: 3,
            inTransitionConfig: 4,
            outTransition: 5,
            outTransitionConfig: 6,
            asChild: 7,
            id: 14,
            side: 15,
            align: 16,
            sideOffset: 17,
            alignOffset: 18,
            collisionPadding: 19,
            avoidCollisions: 20,
            collisionBoundary: 21,
            sameWidth: 22,
            fitViewport: 23,
            strategy: 24,
            overlap: 25,
            el: 0
        }, null, [-1, -1])
    }
}
const wl = t=>({
    builder: t & 4
})
  , _i = t=>({
    builder: t[2]
})
  , kl = t=>({
    builder: t & 4
})
  , wi = t=>({
    builder: t[2]
});
function Tl(t) {
    let e, n, i, r;
    const s = t[9].default
      , o = ae(s, t, t[8], _i);
    let c = [t[2], {
        type: "button"
    }, t[5]]
      , l = {};
    for (let a = 0; a < c.length; a += 1)
        l = V(l, c[a]);
    return {
        c() {
            e = Be("button"),
            o && o.c(),
            this.h()
        },
        l(a) {
            e = Ke(a, "BUTTON", {
                type: !0
            });
            var u = We(e);
            o && o.l(u),
            u.forEach(q),
            this.h()
        },
        h() {
            ve(e, l)
        },
        m(a, u) {
            le(a, e, u),
            o && o.m(e, null),
            e.autofocus && e.focus(),
            t[10](e),
            n = !0,
            i || (r = [He(t[2].action(e)), ee(e, "m-keydown", t[4]), ee(e, "m-pointerdown", t[4])],
            i = !0)
        },
        p(a, u) {
            o && o.p && (!n || u & 260) && ue(o, s, a, a[8], n ? fe(s, a[8], u, wl) : ce(a[8]), _i),
            ve(e, l = ye(c, [u & 4 && a[2], {
                type: "button"
            }, u & 32 && a[5]]))
        },
        i(a) {
            n || (L(o, a),
            n = !0)
        },
        o(a) {
            M(o, a),
            n = !1
        },
        d(a) {
            a && q(e),
            o && o.d(a),
            t[10](null),
            i = !1,
            et(r)
        }
    }
}
function El(t) {
    let e;
    const n = t[9].default
      , i = ae(n, t, t[8], wi);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 260) && ue(i, n, r, r[8], e ? fe(n, r[8], s, kl) : ce(r[8]), wi)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function Ol(t) {
    let e, n, i, r;
    const s = [El, Tl]
      , o = [];
    function c(l, a) {
        return l[1] ? 0 : 1
    }
    return e = c(t),
    n = o[e] = s[e](t),
    {
        c() {
            n.c(),
            i = ge()
        },
        l(l) {
            n.l(l),
            i = ge()
        },
        m(l, a) {
            o[e].m(l, a),
            le(l, i, a),
            r = !0
        },
        p(l, [a]) {
            let u = e;
            e = c(l),
            e === u ? o[e].p(l, a) : (dt(),
            M(o[u], 1, 1, ()=>{
                o[u] = null
            }
            ),
            mt(),
            n = o[e],
            n ? n.p(l, a) : (n = o[e] = s[e](l),
            n.c()),
            L(n, 1),
            n.m(i.parentNode, i))
        },
        i(l) {
            r || (L(n),
            r = !0)
        },
        o(l) {
            M(n),
            r = !1
        },
        d(l) {
            l && q(i),
            o[e].d(l)
        }
    }
}
function Cl(t, e, n) {
    let i;
    const r = ["asChild", "id", "el"];
    let s = ie(e, r), o, {$$slots: c={}, $$scope: l} = e, {asChild: a=!1} = e, {id: u=void 0} = e, {el: f=void 0} = e;
    const {elements: {trigger: m}, ids: b, getAttrs: w} = gt();
    nt(t, m, y=>n(7, o = y));
    const _ = On()
      , d = w("trigger");
    function g(y) {
        ze[y ? "unshift" : "push"](()=>{
            f = y,
            n(0, f)
        }
        )
    }
    return t.$$set = y=>{
        e = V(V({}, e), Le(y)),
        n(5, s = ie(e, r)),
        "asChild"in y && n(1, a = y.asChild),
        "id"in y && n(6, u = y.id),
        "el"in y && n(0, f = y.el),
        "$$scope"in y && n(8, l = y.$$scope)
    }
    ,
    t.$$.update = ()=>{
        t.$$.dirty & 64 && u && b.trigger.set(u),
        t.$$.dirty & 128 && n(2, i = o),
        t.$$.dirty & 4 && Object.assign(i, d)
    }
    ,
    [f, a, i, m, _, s, u, o, l, c, g]
}
class Al extends Ie {
    constructor(e) {
        super(),
        De(this, e, Cl, Ol, Te, {
            asChild: 1,
            id: 6,
            el: 0
        })
    }
}
function Pl(t) {
    let e;
    const n = t[3].default
      , i = ae(n, t, t[11], null);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 2048) && ue(i, n, r, r[11], e ? fe(n, r[11], s, null) : ce(r[11]), null)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function Sl(t) {
    let e, n;
    const i = [{
        class: qe("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", t[1] && "pl-8", t[0])
    }, t[2]];
    let r = {
        $$slots: {
            default: [Pl]
        },
        $$scope: {
            ctx: t
        }
    };
    for (let s = 0; s < i.length; s += 1)
        r = V(r, i[s]);
    return e = new Ms({
        props: r
    }),
    e.$on("click", t[4]),
    e.$on("keydown", t[5]),
    e.$on("focusin", t[6]),
    e.$on("focusout", t[7]),
    e.$on("pointerdown", t[8]),
    e.$on("pointerleave", t[9]),
    e.$on("pointermove", t[10]),
    {
        c() {
            Ft(e.$$.fragment)
        },
        l(s) {
            Rt(e.$$.fragment, s)
        },
        m(s, o) {
            Mt(e, s, o),
            n = !0
        },
        p(s, [o]) {
            const c = o & 7 ? ye(i, [o & 3 && {
                class: qe("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", s[1] && "pl-8", s[0])
            }, o & 4 && Bt(s[2])]) : {};
            o & 2048 && (c.$$scope = {
                dirty: o,
                ctx: s
            }),
            e.$set(c)
        },
        i(s) {
            n || (L(e.$$.fragment, s),
            n = !0)
        },
        o(s) {
            M(e.$$.fragment, s),
            n = !1
        },
        d(s) {
            Lt(e, s)
        }
    }
}
function Il(t, e, n) {
    const i = ["class", "inset"];
    let r = ie(e, i)
      , {$$slots: s={}, $$scope: o} = e
      , {class: c=void 0} = e
      , {inset: l=void 0} = e;
    function a(d) {
        se.call(this, t, d)
    }
    function u(d) {
        se.call(this, t, d)
    }
    function f(d) {
        se.call(this, t, d)
    }
    function m(d) {
        se.call(this, t, d)
    }
    function b(d) {
        se.call(this, t, d)
    }
    function w(d) {
        se.call(this, t, d)
    }
    function _(d) {
        se.call(this, t, d)
    }
    return t.$$set = d=>{
        e = V(V({}, e), Le(d)),
        n(2, r = ie(e, i)),
        "class"in d && n(0, c = d.class),
        "inset"in d && n(1, l = d.inset),
        "$$scope"in d && n(11, o = d.$$scope)
    }
    ,
    [c, l, r, s, a, u, f, m, b, w, _, o]
}
class Ql extends Ie {
    constructor(e) {
        super(),
        De(this, e, Il, Sl, Te, {
            class: 0,
            inset: 1
        })
    }
}
function Dl(t) {
    let e;
    const n = t[3].default
      , i = ae(n, t, t[4], null);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 16) && ue(i, n, r, r[4], e ? fe(n, r[4], s, null) : ce(r[4]), null)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function Nl(t) {
    let e, n;
    const i = [{
        class: qe("px-2 py-1.5 text-sm font-semibold", t[1] && "pl-8", t[0])
    }, t[2]];
    let r = {
        $$slots: {
            default: [Dl]
        },
        $$scope: {
            ctx: t
        }
    };
    for (let s = 0; s < i.length; s += 1)
        r = V(r, i[s]);
    return e = new Js({
        props: r
    }),
    {
        c() {
            Ft(e.$$.fragment)
        },
        l(s) {
            Rt(e.$$.fragment, s)
        },
        m(s, o) {
            Mt(e, s, o),
            n = !0
        },
        p(s, [o]) {
            const c = o & 7 ? ye(i, [o & 3 && {
                class: qe("px-2 py-1.5 text-sm font-semibold", s[1] && "pl-8", s[0])
            }, o & 4 && Bt(s[2])]) : {};
            o & 16 && (c.$$scope = {
                dirty: o,
                ctx: s
            }),
            e.$set(c)
        },
        i(s) {
            n || (L(e.$$.fragment, s),
            n = !0)
        },
        o(s) {
            M(e.$$.fragment, s),
            n = !1
        },
        d(s) {
            Lt(e, s)
        }
    }
}
function Fl(t, e, n) {
    const i = ["class", "inset"];
    let r = ie(e, i)
      , {$$slots: s={}, $$scope: o} = e
      , {class: c=void 0} = e
      , {inset: l=void 0} = e;
    return t.$$set = a=>{
        e = V(V({}, e), Le(a)),
        n(2, r = ie(e, i)),
        "class"in a && n(0, c = a.class),
        "inset"in a && n(1, l = a.inset),
        "$$scope"in a && n(4, o = a.$$scope)
    }
    ,
    [c, l, r, s, o]
}
class xl extends Ie {
    constructor(e) {
        super(),
        De(this, e, Fl, Nl, Te, {
            class: 0,
            inset: 1
        })
    }
}
function Rl(t) {
    let e;
    const n = t[5].default
      , i = ae(n, t, t[7], null);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 128) && ue(i, n, r, r[7], e ? fe(n, r[7], s, null) : ce(r[7]), null)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function Ml(t) {
    let e, n;
    const i = [{
        transition: t[2]
    }, {
        transitionConfig: t[3]
    }, {
        sideOffset: t[1]
    }, {
        class: qe("z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none", t[0])
    }, t[4]];
    let r = {
        $$slots: {
            default: [Rl]
        },
        $$scope: {
            ctx: t
        }
    };
    for (let s = 0; s < i.length; s += 1)
        r = V(r, i[s]);
    return e = new _l({
        props: r
    }),
    e.$on("keydown", t[6]),
    {
        c() {
            Ft(e.$$.fragment)
        },
        l(s) {
            Rt(e.$$.fragment, s)
        },
        m(s, o) {
            Mt(e, s, o),
            n = !0
        },
        p(s, [o]) {
            const c = o & 31 ? ye(i, [o & 4 && {
                transition: s[2]
            }, o & 8 && {
                transitionConfig: s[3]
            }, o & 2 && {
                sideOffset: s[1]
            }, o & 1 && {
                class: qe("z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none", s[0])
            }, o & 16 && Bt(s[4])]) : {};
            o & 128 && (c.$$scope = {
                dirty: o,
                ctx: s
            }),
            e.$set(c)
        },
        i(s) {
            n || (L(e.$$.fragment, s),
            n = !0)
        },
        o(s) {
            M(e.$$.fragment, s),
            n = !1
        },
        d(s) {
            Lt(e, s)
        }
    }
}
function Ll(t, e, n) {
    const i = ["class", "sideOffset", "transition", "transitionConfig"];
    let r = ie(e, i)
      , {$$slots: s={}, $$scope: o} = e
      , {class: c=void 0} = e
      , {sideOffset: l=4} = e
      , {transition: a=vr} = e
      , {transitionConfig: u=void 0} = e;
    function f(m) {
        se.call(this, t, m)
    }
    return t.$$set = m=>{
        e = V(V({}, e), Le(m)),
        n(4, r = ie(e, i)),
        "class"in m && n(0, c = m.class),
        "sideOffset"in m && n(1, l = m.sideOffset),
        "transition"in m && n(2, a = m.transition),
        "transitionConfig"in m && n(3, u = m.transitionConfig),
        "$$scope"in m && n(7, o = m.$$scope)
    }
    ,
    [c, l, a, u, r, s, f, o]
}
class $l extends Ie {
    constructor(e) {
        super(),
        De(this, e, Ll, Ml, Te, {
            class: 0,
            sideOffset: 1,
            transition: 2,
            transitionConfig: 3
        })
    }
}
function Bl(t) {
    let e, n;
    const i = [{
        class: qe("-mx-1 my-1 h-px bg-muted", t[0])
    }, t[1]];
    let r = {};
    for (let s = 0; s < i.length; s += 1)
        r = V(r, i[s]);
    return e = new tl({
        props: r
    }),
    {
        c() {
            Ft(e.$$.fragment)
        },
        l(s) {
            Rt(e.$$.fragment, s)
        },
        m(s, o) {
            Mt(e, s, o),
            n = !0
        },
        p(s, [o]) {
            const c = o & 3 ? ye(i, [o & 1 && {
                class: qe("-mx-1 my-1 h-px bg-muted", s[0])
            }, o & 2 && Bt(s[1])]) : {};
            e.$set(c)
        },
        i(s) {
            n || (L(e.$$.fragment, s),
            n = !0)
        },
        o(s) {
            M(e.$$.fragment, s),
            n = !1
        },
        d(s) {
            Lt(e, s)
        }
    }
}
function Kl(t, e, n) {
    const i = ["class"];
    let r = ie(e, i)
      , {class: s=void 0} = e;
    return t.$$set = o=>{
        e = V(V({}, e), Le(o)),
        n(1, r = ie(e, i)),
        "class"in o && n(0, s = o.class)
    }
    ,
    [s, r]
}
class ea extends Ie {
    constructor(e) {
        super(),
        De(this, e, Kl, Bl, Te, {
            class: 0
        })
    }
}
const ta = ol
  , na = Al
  , ia = zs;
function ra(...t) {
    return t.filter(Boolean).join(" ")
}
const ki = typeof document < "u";
function Ti(t) {
    const e = he(t);
    function n(r) {
        ki && e.set(r)
    }
    function i(r) {
        ki && e.update(r)
    }
    return {
        subscribe: e.subscribe,
        set: n,
        update: i
    }
}
let Ei = 0;
function Wl() {
    const t = Ti([])
      , e = Ti([]);
    function n(d) {
        t.update(g=>[d, ...g])
    }
    function i(d) {
        var x;
        const {message: g, ...y} = d
          , N = typeof (d == null ? void 0 : d.id) == "number" || d.id && ((x = d.id) == null ? void 0 : x.length) > 0 ? d.id : Ei++
          , S = d.dismissable === void 0 ? !0 : d.dismissable
          , D = d.type === void 0 ? "default" : d.type;
        return Ci(t).find(P=>P.id === N) ? t.update(P=>P.map(re=>re.id === N ? {
            ...re,
            ...d,
            id: N,
            title: g,
            dismissable: S,
            type: D,
            updated: !0
        } : {
            ...re,
            updated: !1
        })) : n({
            ...y,
            id: N,
            title: g,
            dismissable: S,
            type: D
        }),
        N
    }
    function r(d) {
        if (d === void 0) {
            t.set([]);
            return
        }
        return t.update(g=>g.filter(y=>y.id !== d)),
        d
    }
    function s(d, g) {
        return i({
            ...g,
            type: "default",
            message: d
        })
    }
    function o(d, g) {
        return i({
            ...g,
            type: "error",
            message: d
        })
    }
    function c(d, g) {
        return i({
            ...g,
            type: "success",
            message: d
        })
    }
    function l(d, g) {
        return i({
            ...g,
            type: "info",
            message: d
        })
    }
    function a(d, g) {
        return i({
            ...g,
            type: "warning",
            message: d
        })
    }
    function u(d, g) {
        return i({
            ...g,
            type: "loading",
            message: d
        })
    }
    function f(d, g) {
        if (!g)
            return;
        let y;
        g.loading !== void 0 && (y = i({
            ...g,
            promise: d,
            type: "loading",
            message: g.loading
        }));
        const N = d instanceof Promise ? d : d();
        let S = y !== void 0;
        return N.then(D=>{
            if (D && typeof D.ok == "boolean" && !D.ok) {
                S = !1;
                const R = typeof g.error == "function" ? g.error(`HTTP error! status: ${D.status}`) : g.error;
                i({
                    id: y,
                    type: "error",
                    message: R
                })
            } else if (g.success !== void 0) {
                S = !1;
                const R = typeof g.success == "function" ? g.success(D) : g.success;
                i({
                    id: y,
                    type: "success",
                    message: R
                })
            }
        }
        ).catch(D=>{
            if (g.error !== void 0) {
                S = !1;
                const R = typeof g.error == "function" ? g.error(D) : g.error;
                i({
                    id: y,
                    type: "error",
                    message: R
                })
            }
        }
        ).finally(()=>{
            var D;
            S && (r(y),
            y = void 0),
            (D = g.finally) == null || D.call(g)
        }
        ),
        y
    }
    function m(d, g) {
        const y = (g == null ? void 0 : g.id) || Ei++;
        return i({
            component: d,
            id: y,
            ...g
        }),
        y
    }
    function b(d) {
        e.update(g=>g.filter(y=>y.toastId !== d))
    }
    function w(d) {
        e.update(g=>[d, ...g])
    }
    function _() {
        t.set([]),
        e.set([])
    }
    return {
        create: i,
        addToast: n,
        dismiss: r,
        message: s,
        error: o,
        success: c,
        info: l,
        warning: a,
        loading: u,
        promise: f,
        custom: m,
        removeHeight: b,
        addHeight: w,
        reset: _,
        toasts: t,
        heights: e
    }
}
const Ge = Wl();
function Vl(t, e) {
    return Ge.create({
        message: t,
        ...e
    })
}
const jl = Vl
  , oa = Object.assign(jl, {
    success: Ge.success,
    info: Ge.info,
    warning: Ge.warning,
    error: Ge.error,
    custom: Ge.custom,
    message: Ge.message,
    promise: Ge.promise,
    dismiss: Ge.dismiss,
    loading: Ge.loading
})
  , sa = t=>({
    subscribe: t
});
function zl(t) {
    let e;
    const n = t[5].default
      , i = ae(n, t, t[8], null);
    return {
        c() {
            i && i.c()
        },
        l(r) {
            i && i.l(r)
        },
        m(r, s) {
            i && i.m(r, s),
            e = !0
        },
        p(r, s) {
            i && i.p && (!e || s & 256) && ue(i, n, r, r[8], e ? fe(n, r[8], s, null) : ce(r[8]), null)
        },
        i(r) {
            e || (L(i, r),
            e = !0)
        },
        o(r) {
            M(i, r),
            e = !1
        },
        d(r) {
            i && i.d(r)
        }
    }
}
function Hl(t) {
    let e, n;
    const i = [{
        builders: t[3]
    }, {
        class: qe(Oi({
            variant: t[1],
            size: t[2],
            className: t[0]
        }))
    }, {
        type: "button"
    }, t[4]];
    let r = {
        $$slots: {
            default: [zl]
        },
        $$scope: {
            ctx: t
        }
    };
    for (let s = 0; s < i.length; s += 1)
        r = V(r, i[s]);
    return e = new ws({
        props: r
    }),
    e.$on("click", t[6]),
    e.$on("keydown", t[7]),
    {
        c() {
            Ft(e.$$.fragment)
        },
        l(s) {
            Rt(e.$$.fragment, s)
        },
        m(s, o) {
            Mt(e, s, o),
            n = !0
        },
        p(s, [o]) {
            const c = o & 31 ? ye(i, [o & 8 && {
                builders: s[3]
            }, o & 7 && {
                class: qe(Oi({
                    variant: s[1],
                    size: s[2],
                    className: s[0]
                }))
            }, i[2], o & 16 && Bt(s[4])]) : {};
            o & 256 && (c.$$scope = {
                dirty: o,
                ctx: s
            }),
            e.$set(c)
        },
        i(s) {
            n || (L(e.$$.fragment, s),
            n = !0)
        },
        o(s) {
            M(e.$$.fragment, s),
            n = !1
        },
        d(s) {
            Lt(e, s)
        }
    }
}
function Ul(t, e, n) {
    const i = ["class", "variant", "size", "builders"];
    let r = ie(e, i)
      , {$$slots: s={}, $$scope: o} = e
      , {class: c=void 0} = e
      , {variant: l="default"} = e
      , {size: a="default"} = e
      , {builders: u=[]} = e;
    function f(b) {
        se.call(this, t, b)
    }
    function m(b) {
        se.call(this, t, b)
    }
    return t.$$set = b=>{
        e = V(V({}, e), Le(b)),
        n(4, r = ie(e, i)),
        "class"in b && n(0, c = b.class),
        "variant"in b && n(1, l = b.variant),
        "size"in b && n(2, a = b.size),
        "builders"in b && n(3, u = b.builders),
        "$$scope"in b && n(8, o = b.$$scope)
    }
    ,
    [c, l, a, u, r, s, f, m, o]
}
class la extends Ie {
    constructor(e) {
        super(),
        De(this, e, Ul, Hl, Te, {
            class: 0,
            variant: 1,
            size: 2,
            builders: 3
        })
    }
}
const Oi = pr({
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
export {la as B, $l as D, ia as G, ta as R, na as T, Hn as a, $i as b, ts as c, ra as d, sa as e, Oi as f, Vn as g, Wr as h, xl as i, ea as j, Ql as k, oa as l, Nr as r, Ge as t, ns as u};
