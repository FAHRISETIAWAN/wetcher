import {H as lt} from "./scheduler.DzCAVM60.js";
import {w as ye, H as ne, S as we, R as Fe} from "./control.hohtrmds.js";
new URL("sveltekit-internal://");
function ft(e, n) {
    return e === "/" || n === "ignore" ? e : n === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : n === "always" && !e.endsWith("/") ? e + "/" : e
}
function ut(e) {
    return e.split("%25").map(decodeURI).join("%25")
}
function dt(e) {
    for (const n in e)
        e[n] = decodeURIComponent(e[n]);
    return e
}
function ue({href: e}) {
    return e.split("#")[0]
}
const ht = ["href", "pathname", "search", "toString", "toJSON"];
function pt(e, n, t) {
    const r = new URL(e);
    Object.defineProperty(r, "searchParams", {
        value: new Proxy(r.searchParams,{
            get(a, o) {
                if (o === "get" || o === "getAll" || o === "has")
                    return i=>(t(i),
                    a[o](i));
                n();
                const s = Reflect.get(a, o);
                return typeof s == "function" ? s.bind(a) : s
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    for (const a of ht)
        Object.defineProperty(r, a, {
            get() {
                return n(),
                e[a]
            },
            enumerable: !0,
            configurable: !0
        });
    return r
}
const gt = "/__data.json"
  , mt = ".html__data.json";
function _t(e) {
    return e.endsWith(".html") ? e.replace(/\.html$/, mt) : e.replace(/\/$/, "") + gt
}
function yt(...e) {
    let n = 5381;
    for (const t of e)
        if (typeof t == "string") {
            let r = t.length;
            for (; r; )
                n = n * 33 ^ t.charCodeAt(--r)
        } else if (ArrayBuffer.isView(t)) {
            const r = new Uint8Array(t.buffer,t.byteOffset,t.byteLength);
            let a = r.length;
            for (; a; )
                n = n * 33 ^ r[--a]
        } else
            throw new TypeError("value must be a string or TypedArray");
    return (n >>> 0).toString(36)
}
function wt(e) {
    const n = atob(e)
      , t = new Uint8Array(n.length);
    for (let r = 0; r < n.length; r++)
        t[r] = n.charCodeAt(r);
    return t.buffer
}
const He = window.fetch;
window.fetch = (e,n)=>((e instanceof Request ? e.method : (n == null ? void 0 : n.method) || "GET") !== "GET" && G.delete(ve(e)),
He(e, n));
const G = new Map;
function vt(e, n) {
    const t = ve(e, n)
      , r = document.querySelector(t);
    if (r != null && r.textContent) {
        let {body: a, ...o} = JSON.parse(r.textContent);
        const s = r.getAttribute("data-ttl");
        return s && G.set(t, {
            body: a,
            init: o,
            ttl: 1e3 * Number(s)
        }),
        r.getAttribute("data-b64") !== null && (a = wt(a)),
        Promise.resolve(new Response(a,o))
    }
    return window.fetch(e, n)
}
function bt(e, n, t) {
    if (G.size > 0) {
        const r = ve(e, t)
          , a = G.get(r);
        if (a) {
            if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(t == null ? void 0 : t.cache))
                return new Response(a.body,a.init);
            G.delete(r)
        }
    }
    return window.fetch(n, t)
}
function ve(e, n) {
    let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(einstanceof Request ? e.url : e)}]`;
    if (n != null && n.headers || n != null && n.body) {
        const a = [];
        n.headers && a.push([...new Headers(n.headers)].join(",")),
        n.body && (typeof n.body == "string" || ArrayBuffer.isView(n.body)) && a.push(n.body),
        r += `[data-hash="${yt(...a)}"]`
    }
    return r
}
const kt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Et(e) {
    const n = [];
    return {
        pattern: e === "/" ? /^\/$/ : new RegExp(`^${At(e).map(r=>{
            const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
            if (a)
                return n.push({
                    name: a[1],
                    matcher: a[2],
                    optional: !1,
                    rest: !0,
                    chained: !0
                }),
                "(?:/(.*))?";
            const o = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
            if (o)
                return n.push({
                    name: o[1],
                    matcher: o[2],
                    optional: !0,
                    rest: !1,
                    chained: !0
                }),
                "(?:/([^/]+))?";
            if (!r)
                return;
            const s = r.split(/\[(.+?)\](?!\])/);
            return "/" + s.map((c,f)=>{
                if (f % 2) {
                    if (c.startsWith("x+"))
                        return de(String.fromCharCode(parseInt(c.slice(2), 16)));
                    if (c.startsWith("u+"))
                        return de(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l, 16))));
                    const u = kt.exec(c)
                      , [,h,g,d,_] = u;
                    return n.push({
                        name: d,
                        matcher: _,
                        optional: !!h,
                        rest: !!g,
                        chained: g ? f === 1 && s[0] === "" : !1
                    }),
                    g ? "(.*?)" : h ? "([^/]*)?" : "([^/]+?)"
                }
                return de(c)
            }
            ).join("")
        }
        ).join("")}/?$`),
        params: n
    }
}
function St(e) {
    return !/^\([^)]+\)$/.test(e)
}
function At(e) {
    return e.slice(1).split("/").filter(St)
}
function Rt(e, n, t) {
    const r = {}
      , a = e.slice(1)
      , o = a.filter(i=>i !== void 0);
    let s = 0;
    for (let i = 0; i < n.length; i += 1) {
        const c = n[i];
        let f = a[i - s];
        if (c.chained && c.rest && s && (f = a.slice(i - s, i + 1).filter(u=>u).join("/"),
        s = 0),
        f === void 0) {
            c.rest && (r[c.name] = "");
            continue
        }
        if (!c.matcher || t[c.matcher](f)) {
            r[c.name] = f;
            const u = n[i + 1]
              , h = a[i + 1];
            u && !u.rest && u.optional && h && c.chained && (s = 0),
            !u && !h && Object.keys(r).length === o.length && (s = 0);
            continue
        }
        if (c.optional && c.chained) {
            s++;
            continue
        }
        return
    }
    if (!s)
        return r
}
function de(e) {
    return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
function It({nodes: e, server_loads: n, dictionary: t, matchers: r}) {
    const a = new Set(n);
    return Object.entries(t).map(([i,[c,f,u]])=>{
        const {pattern: h, params: g} = Et(i)
          , d = {
            id: i,
            exec: _=>{
                const l = h.exec(_);
                if (l)
                    return Rt(l, g, r)
            }
            ,
            errors: [1, ...u || []].map(_=>e[_]),
            layouts: [0, ...f || []].map(s),
            leaf: o(c)
        };
        return d.errors.length = d.layouts.length = Math.max(d.errors.length, d.layouts.length),
        d
    }
    );
    function o(i) {
        const c = i < 0;
        return c && (i = ~i),
        [c, e[i]]
    }
    function s(i) {
        return i === void 0 ? i : [a.has(i), e[i]]
    }
}
function Ge(e, n=JSON.parse) {
    try {
        return n(sessionStorage[e])
    } catch {}
}
function Ue(e, n, t=JSON.stringify) {
    const r = t(n);
    try {
        sessionStorage[e] = r
    } catch {}
}
var Ce;
const P = ((Ce = globalThis.__sveltekit_1xi0yc3) == null ? void 0 : Ce.base) ?? "";
var Ve;
const Lt = ((Ve = globalThis.__sveltekit_1xi0yc3) == null ? void 0 : Ve.assets) ?? P
  , Pt = "1711220217455"
  , Me = "sveltekit:snapshot"
  , qe = "sveltekit:scroll"
  , Be = "sveltekit:states"
  , Ut = "sveltekit:pageurl"
  , D = "sveltekit:history"
  , q = "sveltekit:navigation"
  , z = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
}
  , Y = location.origin;
function Ke(e) {
    if (e instanceof URL)
        return e;
    let n = document.baseURI;
    if (!n) {
        const t = document.getElementsByTagName("base");
        n = t.length ? t[0].href : document.URL
    }
    return new URL(e,n)
}
function be() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}
function O(e, n) {
    return e.getAttribute(`data-sveltekit-${n}`)
}
const Te = {
    ...z,
    "": z.hover
};
function Ye(e) {
    let n = e.assignedSlot ?? e.parentNode;
    return (n == null ? void 0 : n.nodeType) === 11 && (n = n.host),
    n
}
function We(e, n) {
    for (; e && e !== n; ) {
        if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href"))
            return e;
        e = Ye(e)
    }
}
function ge(e, n) {
    let t;
    try {
        t = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href,document.baseURI)
    } catch {}
    const r = e instanceof SVGAElement ? e.target.baseVal : e.target
      , a = !t || !!r || ae(t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external")
      , o = (t == null ? void 0 : t.origin) === Y && e.hasAttribute("download");
    return {
        url: t,
        external: a,
        target: r,
        download: o
    }
}
function J(e) {
    let n = null
      , t = null
      , r = null
      , a = null
      , o = null
      , s = null
      , i = e;
    for (; i && i !== document.documentElement; )
        r === null && (r = O(i, "preload-code")),
        a === null && (a = O(i, "preload-data")),
        n === null && (n = O(i, "keepfocus")),
        t === null && (t = O(i, "noscroll")),
        o === null && (o = O(i, "reload")),
        s === null && (s = O(i, "replacestate")),
        i = Ye(i);
    function c(f) {
        switch (f) {
        case "":
        case "true":
            return !0;
        case "off":
        case "false":
            return !1;
        default:
            return
        }
    }
    return {
        preload_code: Te[r ?? "off"],
        preload_data: Te[a ?? "off"],
        keepfocus: c(n),
        noscroll: c(t),
        reload: c(o),
        replace_state: c(s)
    }
}
function xe(e) {
    const n = ye(e);
    let t = !0;
    function r() {
        t = !0,
        n.update(s=>s)
    }
    function a(s) {
        t = !1,
        n.set(s)
    }
    function o(s) {
        let i;
        return n.subscribe(c=>{
            (i === void 0 || t && c !== i) && s(i = c)
        }
        )
    }
    return {
        notify: r,
        set: a,
        subscribe: o
    }
}
function Tt() {
    const {set: e, subscribe: n} = ye(!1);
    let t;
    async function r() {
        clearTimeout(t);
        try {
            const a = await fetch(`${Lt}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!a.ok)
                return !1;
            const s = (await a.json()).version !== Pt;
            return s && (e(!0),
            clearTimeout(t)),
            s
        } catch {
            return !1
        }
    }
    return {
        subscribe: n,
        check: r
    }
}
function ae(e, n) {
    return e.origin !== Y || !e.pathname.startsWith(n)
}
const xt = -1
  , Nt = -2
  , Ot = -3
  , jt = -4
  , Dt = -5
  , $t = -6;
function Ct(e, n) {
    if (typeof e == "number")
        return a(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const t = e
      , r = Array(t.length);
    function a(o, s=!1) {
        if (o === xt)
            return;
        if (o === Ot)
            return NaN;
        if (o === jt)
            return 1 / 0;
        if (o === Dt)
            return -1 / 0;
        if (o === $t)
            return -0;
        if (s)
            throw new Error("Invalid input");
        if (o in r)
            return r[o];
        const i = t[o];
        if (!i || typeof i != "object")
            r[o] = i;
        else if (Array.isArray(i))
            if (typeof i[0] == "string") {
                const c = i[0]
                  , f = n == null ? void 0 : n[c];
                if (f)
                    return r[o] = f(a(i[1]));
                switch (c) {
                case "Date":
                    r[o] = new Date(i[1]);
                    break;
                case "Set":
                    const u = new Set;
                    r[o] = u;
                    for (let d = 1; d < i.length; d += 1)
                        u.add(a(i[d]));
                    break;
                case "Map":
                    const h = new Map;
                    r[o] = h;
                    for (let d = 1; d < i.length; d += 2)
                        h.set(a(i[d]), a(i[d + 1]));
                    break;
                case "RegExp":
                    r[o] = new RegExp(i[1],i[2]);
                    break;
                case "Object":
                    r[o] = Object(i[1]);
                    break;
                case "BigInt":
                    r[o] = BigInt(i[1]);
                    break;
                case "null":
                    const g = Object.create(null);
                    r[o] = g;
                    for (let d = 1; d < i.length; d += 2)
                        g[i[d]] = a(i[d + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(i.length);
                r[o] = c;
                for (let f = 0; f < i.length; f += 1) {
                    const u = i[f];
                    u !== Nt && (c[f] = a(u))
                }
            }
        else {
            const c = {};
            r[o] = c;
            for (const f in i) {
                const u = i[f];
                c[f] = a(u)
            }
        }
        return r[o]
    }
    return a(0)
}
const ze = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...ze];
const Vt = new Set([...ze]);
[...Vt];
function Ft(e) {
    return e.filter(n=>n != null)
}
const Ht = "x-sveltekit-invalidated"
  , Gt = "x-sveltekit-trailing-slash";
function X(e) {
    return e instanceof ne || e instanceof we ? e.status : 500
}
function Mt(e) {
    return e instanceof we ? e.text : "Internal Error"
}
const N = Ge(qe) ?? {}
  , B = Ge(Me) ?? {}
  , T = {
    url: xe({}),
    page: xe({}),
    navigating: ye(null),
    updated: Tt()
};
function ke(e) {
    N[e] = be()
}
function qt(e, n) {
    let t = e + 1;
    for (; N[t]; )
        delete N[t],
        t += 1;
    for (t = n + 1; B[t]; )
        delete B[t],
        t += 1
}
function C(e) {
    return location.href = e.href,
    new Promise(()=>{}
    )
}
function Ne() {}
let re, me, Z, U, _e, F;
const Je = []
  , Q = [];
let R = null;
const Xe = []
  , Bt = [];
let j = [], y = {
    branch: [],
    error: null,
    url: null
}, Ee = !1, ee = !1, Oe = !0, K = !1, H = !1, Ze = !1, oe = !1, ie, S, L, I, V;
const M = new Set;
let he;
async function an(e, n, t) {
    var a, o;
    document.URL !== location.href && (location.href = location.href),
    F = e,
    re = It(e),
    U = document.documentElement,
    _e = n,
    me = e.nodes[0],
    Z = e.nodes[1],
    me(),
    Z(),
    S = (a = history.state) == null ? void 0 : a[D],
    L = (o = history.state) == null ? void 0 : o[q],
    S || (S = L = Date.now(),
    history.replaceState({
        ...history.state,
        [D]: S,
        [q]: L
    }, ""));
    const r = N[S];
    r && (history.scrollRestoration = "manual",
    scrollTo(r.x, r.y)),
    t ? await Qt(_e, t) : Xt(location.href, {
        replaceState: !0
    }),
    Zt()
}
async function Kt() {
    if (await (he || (he = Promise.resolve())),
    !he)
        return;
    he = null;
    const e = ce(y.url, !0);
    R = null;
    const n = V = {}
      , t = e && await Ie(e);
    if (!(!t || n !== V)) {
        if (t.type === "redirect")
            return Se(new URL(t.location,y.url).href, {}, 1, n);
        t.props.page && (I = t.props.page),
        y = t.state,
        Qe(),
        ie.$set(t.props)
    }
}
function Qe() {
    Je.length = 0,
    oe = !1
}
function et(e) {
    Q.some(n=>n == null ? void 0 : n.snapshot) && (B[e] = Q.map(n=>{
        var t;
        return (t = n == null ? void 0 : n.snapshot) == null ? void 0 : t.capture()
    }
    ))
}
function tt(e) {
    var n;
    (n = B[e]) == null || n.forEach((t,r)=>{
        var a, o;
        (o = (a = Q[r]) == null ? void 0 : a.snapshot) == null || o.restore(t)
    }
    )
}
function je() {
    ke(S),
    Ue(qe, N),
    et(L),
    Ue(Me, B)
}
async function Se(e, n, t, r) {
    return W({
        type: "goto",
        url: Ke(e),
        keepfocus: n.keepFocus,
        noscroll: n.noScroll,
        replace_state: n.replaceState,
        state: n.state,
        redirect_count: t,
        nav_token: r,
        accept: ()=>{
            n.invalidateAll && (oe = !0)
        }
    })
}
async function Yt(e) {
    if (e.id !== (R == null ? void 0 : R.id)) {
        const n = {};
        M.add(n),
        R = {
            id: e.id,
            token: n,
            promise: Ie({
                ...e,
                preload: n
            }).then(t=>(M.delete(n),
            t.type === "loaded" && t.state.error && (R = null),
            t))
        }
    }
    return R.promise
}
async function pe(e) {
    const n = re.find(t=>t.exec(at(e)));
    n && await Promise.all([...n.layouts, n.leaf].map(t=>t == null ? void 0 : t[1]()))
}
function nt(e, n) {
    var a;
    y = e.state;
    const t = document.querySelector("style[data-sveltekit]");
    t && t.remove(),
    I = e.props.page,
    ie = new F.root({
        target: n,
        props: {
            ...e.props,
            stores: T,
            components: Q
        },
        hydrate: !0
    }),
    tt(L);
    const r = {
        from: null,
        to: {
            params: y.params,
            route: {
                id: ((a = y.route) == null ? void 0 : a.id) ?? null
            },
            url: new URL(location.href)
        },
        willUnload: !1,
        type: "enter",
        complete: Promise.resolve()
    };
    j.forEach(o=>o(r)),
    ee = !0
}
async function te({url: e, params: n, branch: t, status: r, error: a, route: o, form: s}) {
    let i = "never";
    if (P && (e.pathname === P || e.pathname === P + "/"))
        i = "always";
    else
        for (const d of t)
            (d == null ? void 0 : d.slash) !== void 0 && (i = d.slash);
    e.pathname = ft(e.pathname, i),
    e.search = e.search;
    const c = {
        type: "loaded",
        state: {
            url: e,
            params: n,
            branch: t,
            error: a,
            route: o
        },
        props: {
            constructors: Ft(t).map(d=>d.node.component),
            page: I
        }
    };
    s !== void 0 && (c.props.form = s);
    let f = {}
      , u = !I
      , h = 0;
    for (let d = 0; d < Math.max(t.length, y.branch.length); d += 1) {
        const _ = t[d]
          , l = y.branch[d];
        (_ == null ? void 0 : _.data) !== (l == null ? void 0 : l.data) && (u = !0),
        _ && (f = {
            ...f,
            ..._.data
        },
        u && (c.props[`data_${h}`] = f),
        h += 1)
    }
    return (!y.url || e.href !== y.url.href || y.error !== a || s !== void 0 && s !== I.form || u) && (c.props.page = {
        error: a,
        params: n,
        route: {
            id: (o == null ? void 0 : o.id) ?? null
        },
        state: {},
        status: r,
        url: new URL(e),
        form: s ?? null,
        data: u ? f : I.data
    }),
    c
}
async function Ae({loader: e, parent: n, url: t, params: r, route: a, server_data_node: o}) {
    var u, h, g;
    let s = null
      , i = !0;
    const c = {
        dependencies: new Set,
        params: new Set,
        parent: !1,
        route: !1,
        url: !1,
        search_params: new Set
    }
      , f = await e();
    if ((u = f.universal) != null && u.load) {
        let d = function(...l) {
            for (const m of l) {
                const {href: b} = new URL(m,t);
                c.dependencies.add(b)
            }
        };
        const _ = {
            route: new Proxy(a,{
                get: (l,m)=>(i && (c.route = !0),
                l[m])
            }),
            params: new Proxy(r,{
                get: (l,m)=>(i && c.params.add(m),
                l[m])
            }),
            data: (o == null ? void 0 : o.data) ?? null,
            url: pt(t, ()=>{
                i && (c.url = !0)
            }
            , l=>{
                i && c.search_params.add(l)
            }
            ),
            async fetch(l, m) {
                let b;
                l instanceof Request ? (b = l.url,
                m = {
                    body: l.method === "GET" || l.method === "HEAD" ? void 0 : await l.blob(),
                    cache: l.cache,
                    credentials: l.credentials,
                    headers: l.headers,
                    integrity: l.integrity,
                    keepalive: l.keepalive,
                    method: l.method,
                    mode: l.mode,
                    redirect: l.redirect,
                    referrer: l.referrer,
                    referrerPolicy: l.referrerPolicy,
                    signal: l.signal,
                    ...m
                }) : b = l;
                const A = new URL(b,t);
                return i && d(A.href),
                A.origin === t.origin && (b = A.href.slice(t.origin.length)),
                ee ? bt(b, A.href, m) : vt(b, m)
            },
            setHeaders: ()=>{}
            ,
            depends: d,
            parent() {
                return i && (c.parent = !0),
                n()
            },
            untrack(l) {
                i = !1;
                try {
                    return l()
                } finally {
                    i = !0
                }
            }
        };
        s = await f.universal.load.call(null, _) ?? null
    }
    return {
        node: f,
        loader: e,
        server: o,
        universal: (h = f.universal) != null && h.load ? {
            type: "data",
            data: s,
            uses: c
        } : null,
        data: s ?? (o == null ? void 0 : o.data) ?? null,
        slash: ((g = f.universal) == null ? void 0 : g.trailingSlash) ?? (o == null ? void 0 : o.slash)
    }
}
function De(e, n, t, r, a, o) {
    if (oe)
        return !0;
    if (!a)
        return !1;
    if (a.parent && e || a.route && n || a.url && t)
        return !0;
    for (const s of a.search_params)
        if (r.has(s))
            return !0;
    for (const s of a.params)
        if (o[s] !== y.params[s])
            return !0;
    for (const s of a.dependencies)
        if (Je.some(i=>i(new URL(s))))
            return !0;
    return !1
}
function Re(e, n) {
    return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? n ?? null : null
}
function Wt(e, n) {
    if (!e)
        return new Set(n.searchParams.keys());
    const t = new Set([...e.searchParams.keys(), ...n.searchParams.keys()]);
    for (const r of t) {
        const a = e.searchParams.getAll(r)
          , o = n.searchParams.getAll(r);
        a.every(s=>o.includes(s)) && o.every(s=>a.includes(s)) && t.delete(r)
    }
    return t
}
function $e({error: e, url: n, route: t, params: r}) {
    return {
        type: "loaded",
        state: {
            error: e,
            url: n,
            route: t,
            params: r,
            branch: []
        },
        props: {
            page: I,
            constructors: []
        }
    }
}
async function Ie({id: e, invalidating: n, url: t, params: r, route: a, preload: o}) {
    if ((R == null ? void 0 : R.id) === e)
        return M.delete(R.token),
        R.promise;
    const {errors: s, layouts: i, leaf: c} = a
      , f = [...i, c];
    s.forEach(p=>p == null ? void 0 : p().catch(()=>{}
    )),
    f.forEach(p=>p == null ? void 0 : p[1]().catch(()=>{}
    ));
    let u = null;
    const h = y.url ? e !== y.url.pathname + y.url.search : !1
      , g = y.route ? a.id !== y.route.id : !1
      , d = Wt(y.url, t);
    let _ = !1;
    const l = f.map((p,v)=>{
        var x;
        const k = y.branch[v]
          , E = !!(p != null && p[0]) && ((k == null ? void 0 : k.loader) !== p[1] || De(_, g, h, d, (x = k.server) == null ? void 0 : x.uses, r));
        return E && (_ = !0),
        E
    }
    );
    if (l.some(Boolean)) {
        try {
            u = await it(t, l)
        } catch (p) {
            const v = await $(p, {
                url: t,
                params: r,
                route: {
                    id: e
                }
            });
            return M.has(o) ? $e({
                error: v,
                url: t,
                params: r,
                route: a
            }) : se({
                status: X(p),
                error: v,
                url: t,
                route: a
            })
        }
        if (u.type === "redirect")
            return u
    }
    const m = u == null ? void 0 : u.nodes;
    let b = !1;
    const A = f.map(async(p,v)=>{
        var le;
        if (!p)
            return;
        const k = y.branch[v]
          , E = m == null ? void 0 : m[v];
        if ((!E || E.type === "skip") && p[1] === (k == null ? void 0 : k.loader) && !De(b, g, h, d, (le = k.universal) == null ? void 0 : le.uses, r))
            return k;
        if (b = !0,
        (E == null ? void 0 : E.type) === "error")
            throw E;
        return Ae({
            loader: p[1],
            url: t,
            params: r,
            route: a,
            parent: async()=>{
                var Pe;
                const Le = {};
                for (let fe = 0; fe < v; fe += 1)
                    Object.assign(Le, (Pe = await A[fe]) == null ? void 0 : Pe.data);
                return Le
            }
            ,
            server_data_node: Re(E === void 0 && p[0] ? {
                type: "skip"
            } : E ?? null, p[0] ? k == null ? void 0 : k.server : void 0)
        })
    }
    );
    for (const p of A)
        p.catch(()=>{}
        );
    const w = [];
    for (let p = 0; p < f.length; p += 1)
        if (f[p])
            try {
                w.push(await A[p])
            } catch (v) {
                if (v instanceof Fe)
                    return {
                        type: "redirect",
                        location: v.location
                    };
                if (M.has(o))
                    return $e({
                        error: await $(v, {
                            params: r,
                            url: t,
                            route: {
                                id: a.id
                            }
                        }),
                        url: t,
                        params: r,
                        route: a
                    });
                let k = X(v), E;
                if (m != null && m.includes(v))
                    k = v.status ?? k,
                    E = v.error;
                else if (v instanceof ne)
                    E = v.body;
                else {
                    if (await T.updated.check())
                        return await C(t);
                    E = await $(v, {
                        params: r,
                        url: t,
                        route: {
                            id: a.id
                        }
                    })
                }
                const x = await zt(p, w, s);
                return x ? await te({
                    url: t,
                    params: r,
                    branch: w.slice(0, x.idx).concat(x.node),
                    status: k,
                    error: E,
                    route: a
                }) : await ot(t, {
                    id: a.id
                }, E, k)
            }
        else
            w.push(void 0);
    return await te({
        url: t,
        params: r,
        branch: w,
        status: 200,
        error: null,
        route: a,
        form: n ? void 0 : null
    })
}
async function zt(e, n, t) {
    for (; e--; )
        if (t[e]) {
            let r = e;
            for (; !n[r]; )
                r -= 1;
            try {
                return {
                    idx: r + 1,
                    node: {
                        node: await t[e](),
                        loader: t[e],
                        data: {},
                        server: null,
                        universal: null
                    }
                }
            } catch {
                continue
            }
        }
}
async function se({status: e, error: n, url: t, route: r}) {
    const a = {};
    let o = null;
    if (F.server_loads[0] === 0)
        try {
            const f = await it(t, [!0]);
            if (f.type !== "data" || f.nodes[0] && f.nodes[0].type !== "data")
                throw 0;
            o = f.nodes[0] ?? null
        } catch {
            (t.origin !== Y || t.pathname !== location.pathname || Ee) && await C(t)
        }
    const i = await Ae({
        loader: me,
        url: t,
        params: a,
        route: r,
        parent: ()=>Promise.resolve({}),
        server_data_node: Re(o)
    })
      , c = {
        node: await Z(),
        loader: Z,
        universal: null,
        server: null,
        data: null
    };
    return await te({
        url: t,
        params: a,
        branch: [i, c],
        status: e,
        error: n,
        route: null
    })
}
function ce(e, n) {
    if (!e || ae(e, P))
        return;
    let t;
    try {
        t = F.hooks.reroute({
            url: new URL(e)
        }) ?? e.pathname
    } catch {
        return
    }
    const r = at(t);
    for (const a of re) {
        const o = a.exec(r);
        if (o)
            return {
                id: e.pathname + e.search,
                invalidating: n,
                route: a,
                params: dt(o),
                url: e
            }
    }
}
function at(e) {
    return ut(e.slice(P.length) || "/")
}
function rt({url: e, type: n, intent: t, delta: r}) {
    let a = !1;
    const o = ct(y, t, e, n);
    r !== void 0 && (o.navigation.delta = r);
    const s = {
        ...o.navigation,
        cancel: ()=>{
            a = !0,
            o.reject(new Error("navigation cancelled"))
        }
    };
    return K || Xe.forEach(i=>i(s)),
    a ? null : o
}
async function W({type: e, url: n, popped: t, keepfocus: r, noscroll: a, replace_state: o, state: s={}, redirect_count: i=0, nav_token: c={}, accept: f=Ne, block: u=Ne}) {
    const h = ce(n, !1)
      , g = rt({
        url: n,
        type: e,
        delta: t == null ? void 0 : t.delta,
        intent: h
    });
    if (!g) {
        u();
        return
    }
    const d = S
      , _ = L;
    f(),
    K = !0,
    ee && T.navigating.set(g.navigation),
    V = c;
    let l = h && await Ie(h);
    if (!l) {
        if (ae(n, P))
            return await C(n);
        l = await ot(n, {
            id: null
        }, await $(new we(404,"Not Found",`Not found: ${n.pathname}`), {
            url: n,
            params: {},
            route: {
                id: null
            }
        }), 404)
    }
    if (n = (h == null ? void 0 : h.url) || n,
    V !== c)
        return g.reject(new Error("navigation aborted")),
        !1;
    if (l.type === "redirect")
        if (i >= 20)
            l = await se({
                status: 500,
                error: await $(new Error("Redirect loop"), {
                    url: n,
                    params: {},
                    route: {
                        id: null
                    }
                }),
                url: n,
                route: {
                    id: null
                }
            });
        else
            return Se(new URL(l.location,n).href, {}, i + 1, c),
            !1;
    else
        l.props.page.status >= 400 && await T.updated.check() && await C(n);
    if (Qe(),
    ke(d),
    et(_),
    l.props.page.url.pathname !== n.pathname && (n.pathname = l.props.page.url.pathname),
    s = t ? t.state : s,
    !t) {
        const w = o ? 0 : 1
          , p = {
            [D]: S += w,
            [q]: L += w,
            [Be]: s
        };
        (o ? history.replaceState : history.pushState).call(history, p, "", n),
        o || qt(S, L)
    }
    if (R = null,
    l.props.page.state = s,
    ee) {
        y = l.state,
        l.props.page && (l.props.page.url = n);
        const w = (await Promise.all(Bt.map(p=>p(g.navigation)))).filter(p=>typeof p == "function");
        if (w.length > 0) {
            let p = function() {
                j = j.filter(v=>!w.includes(v))
            };
            w.push(p),
            j.push(...w)
        }
        ie.$set(l.props),
        Ze = !0
    } else
        nt(l, _e);
    const {activeElement: m} = document;
    await lt();
    const b = t ? t.scroll : a ? be() : null;
    if (Oe) {
        const w = n.hash && document.getElementById(decodeURIComponent(n.hash.slice(1)));
        b ? scrollTo(b.x, b.y) : w ? w.scrollIntoView() : scrollTo(0, 0)
    }
    const A = document.activeElement !== m && document.activeElement !== document.body;
    !r && !A && en(),
    Oe = !0,
    l.props.page && (I = l.props.page),
    K = !1,
    e === "popstate" && tt(L),
    g.fulfil(void 0),
    j.forEach(w=>w(g.navigation)),
    T.navigating.set(null)
}
async function ot(e, n, t, r) {
    return e.origin === Y && e.pathname === location.pathname && !Ee ? await se({
        status: r,
        error: t,
        url: e,
        route: n
    }) : await C(e)
}
function Jt() {
    let e;
    U.addEventListener("mousemove", o=>{
        const s = o.target;
        clearTimeout(e),
        e = setTimeout(()=>{
            r(s, 2)
        }
        , 20)
    }
    );
    function n(o) {
        r(o.composedPath()[0], 1)
    }
    U.addEventListener("mousedown", n),
    U.addEventListener("touchstart", n, {
        passive: !0
    });
    const t = new IntersectionObserver(o=>{
        for (const s of o)
            s.isIntersecting && (pe(s.target.href),
            t.unobserve(s.target))
    }
    ,{
        threshold: 0
    });
    function r(o, s) {
        const i = We(o, U);
        if (!i)
            return;
        const {url: c, external: f, download: u} = ge(i, P);
        if (f || u)
            return;
        const h = J(i);
        if (!h.reload)
            if (s <= h.preload_data) {
                const g = ce(c, !1);
                g && Yt(g)
            } else
                s <= h.preload_code && pe(c.pathname)
    }
    function a() {
        t.disconnect();
        for (const o of U.querySelectorAll("a")) {
            const {url: s, external: i, download: c} = ge(o, P);
            if (i || c)
                continue;
            const f = J(o);
            f.reload || (f.preload_code === z.viewport && t.observe(o),
            f.preload_code === z.eager && pe(s.pathname))
        }
    }
    j.push(a),
    a()
}
function $(e, n) {
    if (e instanceof ne)
        return e.body;
    const t = X(e)
      , r = Mt(e);
    return F.hooks.handleError({
        error: e,
        event: n,
        status: t,
        message: r
    }) ?? {
        message: r
    }
}
function Xt(e, n={}) {
    return e = Ke(e),
    e.origin !== Y ? Promise.reject(new Error("goto: invalid URL")) : Se(e, n, 0)
}
function rn() {
    return oe = !0,
    Kt()
}
function Zt() {
    var n;
    history.scrollRestoration = "manual",
    addEventListener("beforeunload", t=>{
        let r = !1;
        if (je(),
        !K) {
            const a = ct(y, void 0, null, "leave")
              , o = {
                ...a.navigation,
                cancel: ()=>{
                    r = !0,
                    a.reject(new Error("navigation cancelled"))
                }
            };
            Xe.forEach(s=>s(o))
        }
        r ? (t.preventDefault(),
        t.returnValue = "") : history.scrollRestoration = "auto"
    }
    ),
    addEventListener("visibilitychange", ()=>{
        document.visibilityState === "hidden" && je()
    }
    ),
    (n = navigator.connection) != null && n.saveData || Jt(),
    U.addEventListener("click", t=>{
        var g;
        if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented)
            return;
        const r = We(t.composedPath()[0], U);
        if (!r)
            return;
        const {url: a, external: o, target: s, download: i} = ge(r, P);
        if (!a)
            return;
        if (s === "_parent" || s === "_top") {
            if (window.parent !== window)
                return
        } else if (s && s !== "_self")
            return;
        const c = J(r);
        if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || i)
            return;
        if (o || c.reload) {
            rt({
                url: a,
                type: "link"
            }) ? K = !0 : t.preventDefault();
            return
        }
        const [u,h] = a.href.split("#");
        if (h !== void 0 && u === ue(location)) {
            const [,d] = y.url.href.split("#");
            if (d === h) {
                t.preventDefault(),
                h === "" || h === "top" && r.ownerDocument.getElementById("top") === null ? window.scrollTo({
                    top: 0
                }) : (g = r.ownerDocument.getElementById(h)) == null || g.scrollIntoView();
                return
            }
            if (H = !0,
            ke(S),
            e(a),
            !c.replace_state)
                return;
            H = !1
        }
        t.preventDefault(),
        W({
            type: "link",
            url: a,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ?? a.href === location.href
        })
    }
    ),
    U.addEventListener("submit", t=>{
        if (t.defaultPrevented)
            return;
        const r = HTMLFormElement.prototype.cloneNode.call(t.target)
          , a = t.submitter;
        if (((a == null ? void 0 : a.formMethod) || r.method) !== "get")
            return;
        const s = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
        if (ae(s, P))
            return;
        const i = t.target
          , c = J(i);
        if (c.reload)
            return;
        t.preventDefault(),
        t.stopPropagation();
        const f = new FormData(i)
          , u = a == null ? void 0 : a.getAttribute("name");
        u && f.append(u, (a == null ? void 0 : a.getAttribute("value")) ?? ""),
        s.search = new URLSearchParams(f).toString(),
        W({
            type: "form",
            url: s,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ?? s.href === location.href
        })
    }
    ),
    addEventListener("popstate", async t=>{
        var r;
        if ((r = t.state) != null && r[D]) {
            const a = t.state[D];
            if (V = {},
            a === S)
                return;
            const o = N[a]
              , s = t.state[Be] ?? {}
              , i = new URL(t.state[Ut] ?? location.href)
              , c = t.state[q]
              , f = ue(location) === ue(y.url);
            if (c === L && (Ze || f)) {
                e(i),
                N[S] = be(),
                o && scrollTo(o.x, o.y),
                s !== I.state && (I = {
                    ...I,
                    state: s
                },
                ie.$set({
                    page: I
                })),
                S = a;
                return
            }
            const h = a - S;
            await W({
                type: "popstate",
                url: i,
                popped: {
                    state: s,
                    scroll: o,
                    delta: h
                },
                accept: ()=>{
                    S = a,
                    L = c
                }
                ,
                block: ()=>{
                    history.go(-h)
                }
                ,
                nav_token: V
            })
        } else if (!H) {
            const a = new URL(location.href);
            e(a)
        }
    }
    ),
    addEventListener("hashchange", ()=>{
        H && (H = !1,
        history.replaceState({
            ...history.state,
            [D]: ++S,
            [q]: L
        }, "", location.href))
    }
    );
    for (const t of document.querySelectorAll("link"))
        t.rel === "icon" && (t.href = t.href);
    addEventListener("pageshow", t=>{
        t.persisted && T.navigating.set(null)
    }
    );
    function e(t) {
        y.url = t,
        T.page.set({
            ...I,
            url: t
        }),
        T.page.notify()
    }
}
async function Qt(e, {status: n=200, error: t, node_ids: r, params: a, route: o, data: s, form: i}) {
    Ee = !0;
    const c = new URL(location.href);
    ({params: a={}, route: o={
        id: null
    }} = ce(c, !1) || {});
    let f;
    try {
        const u = r.map(async(d,_)=>{
            const l = s[_];
            return l != null && l.uses && (l.uses = st(l.uses)),
            Ae({
                loader: F.nodes[d],
                url: c,
                params: a,
                route: o,
                parent: async()=>{
                    const m = {};
                    for (let b = 0; b < _; b += 1)
                        Object.assign(m, (await u[b]).data);
                    return m
                }
                ,
                server_data_node: Re(l)
            })
        }
        )
          , h = await Promise.all(u)
          , g = re.find(({id: d})=>d === o.id);
        if (g) {
            const d = g.layouts;
            for (let _ = 0; _ < d.length; _++)
                d[_] || h.splice(_, 0, void 0)
        }
        f = await te({
            url: c,
            params: a,
            branch: h,
            status: n,
            error: t,
            form: i,
            route: g ?? null
        })
    } catch (u) {
        if (u instanceof Fe) {
            await C(new URL(u.location,location.href));
            return
        }
        f = await se({
            status: X(u),
            error: await $(u, {
                url: c,
                params: a,
                route: o
            }),
            url: c,
            route: o
        })
    }
    f.props.page && (f.props.page.state = {}),
    nt(f, e)
}
async function it(e, n) {
    var a;
    const t = new URL(e);
    t.pathname = _t(e.pathname),
    e.pathname.endsWith("/") && t.searchParams.append(Gt, "1"),
    t.searchParams.append(Ht, n.map(o=>o ? "1" : "0").join(""));
    const r = await He(t.href);
    if (!r.ok) {
        let o;
        throw (a = r.headers.get("content-type")) != null && a.includes("application/json") ? o = await r.json() : r.status === 404 ? o = "Not Found" : r.status === 500 && (o = "Internal Error"),
        new ne(r.status,o)
    }
    return new Promise(async o=>{
        var h;
        const s = new Map
          , i = r.body.getReader()
          , c = new TextDecoder;
        function f(g) {
            return Ct(g, {
                Promise: d=>new Promise((_,l)=>{
                    s.set(d, {
                        fulfil: _,
                        reject: l
                    })
                }
                )
            })
        }
        let u = "";
        for (; ; ) {
            const {done: g, value: d} = await i.read();
            if (g && !u)
                break;
            for (u += !d && u ? `
` : c.decode(d, {
                stream: !0
            }); ; ) {
                const _ = u.indexOf(`
`);
                if (_ === -1)
                    break;
                const l = JSON.parse(u.slice(0, _));
                if (u = u.slice(_ + 1),
                l.type === "redirect")
                    return o(l);
                if (l.type === "data")
                    (h = l.nodes) == null || h.forEach(m=>{
                        (m == null ? void 0 : m.type) === "data" && (m.uses = st(m.uses),
                        m.data = f(m.data))
                    }
                    ),
                    o(l);
                else if (l.type === "chunk") {
                    const {id: m, data: b, error: A} = l
                      , w = s.get(m);
                    s.delete(m),
                    A ? w.reject(f(A)) : w.fulfil(f(b))
                }
            }
        }
    }
    )
}
function st(e) {
    return {
        dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
        params: new Set((e == null ? void 0 : e.params) ?? []),
        parent: !!(e != null && e.parent),
        route: !!(e != null && e.route),
        url: !!(e != null && e.url),
        search_params: new Set((e == null ? void 0 : e.search_params) ?? [])
    }
}
function en() {
    const e = document.querySelector("[autofocus]");
    if (e)
        e.focus();
    else {
        const n = document.body
          , t = n.getAttribute("tabindex");
        n.tabIndex = -1,
        n.focus({
            preventScroll: !0,
            focusVisible: !1
        }),
        t !== null ? n.setAttribute("tabindex", t) : n.removeAttribute("tabindex");
        const r = getSelection();
        if (r && r.type !== "None") {
            const a = [];
            for (let o = 0; o < r.rangeCount; o += 1)
                a.push(r.getRangeAt(o));
            setTimeout(()=>{
                if (r.rangeCount === a.length) {
                    for (let o = 0; o < r.rangeCount; o += 1) {
                        const s = a[o]
                          , i = r.getRangeAt(o);
                        if (s.commonAncestorContainer !== i.commonAncestorContainer || s.startContainer !== i.startContainer || s.endContainer !== i.endContainer || s.startOffset !== i.startOffset || s.endOffset !== i.endOffset)
                            return
                    }
                    r.removeAllRanges()
                }
            }
            )
        }
    }
}
function ct(e, n, t, r) {
    var c, f;
    let a, o;
    const s = new Promise((u,h)=>{
        a = u,
        o = h
    }
    );
    return s.catch(()=>{}
    ),
    {
        navigation: {
            from: {
                params: e.params,
                route: {
                    id: ((c = e.route) == null ? void 0 : c.id) ?? null
                },
                url: e.url
            },
            to: t && {
                params: (n == null ? void 0 : n.params) ?? null,
                route: {
                    id: ((f = n == null ? void 0 : n.route) == null ? void 0 : f.id) ?? null
                },
                url: t
            },
            willUnload: !n,
            type: r,
            complete: s
        },
        fulfil: a,
        reject: o
    }
}
export {an as a, Xt as g, rn as i, T as s};
