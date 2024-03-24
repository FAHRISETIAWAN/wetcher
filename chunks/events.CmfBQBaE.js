import {y as o} from "./scheduler.DzCAVM60.js";
function r(t, n, e=!0) {
    return n === t.length - 1 ? e ? t[0] : t[n] : t[n + 1]
}
function l(t, n, e=!0) {
    return n <= 0 ? e ? t[t.length - 1] : t[0] : t[n - 1]
}
function p(t) {
    return t[t.length - 1]
}
function f(t, n) {
    return t.map((e,u)=>t[(n + u) % t.length])
}
function h() {
    const t = o();
    return n=>{
        const {originalEvent: e} = n.detail
          , {cancelable: u} = n
          , c = e.type;
        t(c, {
            originalEvent: e,
            currentTarget: e.currentTarget
        }, {
            cancelable: u
        }) || n.preventDefault()
    }
}
export {h as c, p as l, r as n, l as p, f as w};
