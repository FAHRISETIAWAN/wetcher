import {H as Ss} from "./control.hohtrmds.js";
import {a as Ds} from "./separator.Df8yHFeK.js";
import "./index.DwYoDg2H.js";
function Ti(e, t) {
    throw new Ss(e,t)
}
new TextEncoder;
const bi = Ds({
    base: "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none select-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    variants: {
        variant: {
            default: "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
            secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
            destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Nt;
function l() {
    return Nt.apply(null, arguments)
}
function vs(e) {
    Nt = e
}
function R(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
}
function se(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]"
}
function w(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function st(e) {
    if (Object.getOwnPropertyNames)
        return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
        if (w(e, t))
            return !1;
    return !0
}
function T(e) {
    return e === void 0
}
function $(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
}
function Me(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
}
function Wt(e, t) {
    var s = [], r, a = e.length;
    for (r = 0; r < a; ++r)
        s.push(t(e[r], r));
    return s
}
function Q(e, t) {
    for (var s in t)
        w(t, s) && (e[s] = t[s]);
    return w(t, "toString") && (e.toString = t.toString),
    w(t, "valueOf") && (e.valueOf = t.valueOf),
    e
}
function I(e, t, s, r) {
    return es(e, t, s, r, !0).utc()
}
function ps() {
    return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
    }
}
function c(e) {
    return e._pf == null && (e._pf = ps()),
    e._pf
}
var Be;
Array.prototype.some ? Be = Array.prototype.some : Be = function(e) {
    var t = Object(this), s = t.length >>> 0, r;
    for (r = 0; r < s; r++)
        if (r in t && e.call(this, t[r], r, t))
            return !0;
    return !1
}
;
function rt(e) {
    var t = null
      , s = !1
      , r = e._d && !isNaN(e._d.getTime());
    if (r && (t = c(e),
    s = Be.call(t.parsedDateParts, function(a) {
        return a != null
    }),
    r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s),
    e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)),
    Object.isFrozen == null || !Object.isFrozen(e))
        e._isValid = r;
    else
        return r;
    return e._isValid
}
function Fe(e) {
    var t = I(NaN);
    return e != null ? Q(c(t), e) : c(t).userInvalidated = !0,
    t
}
var pt = l.momentProperties = []
  , ze = !1;
function at(e, t) {
    var s, r, a, n = pt.length;
    if (T(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    T(t._i) || (e._i = t._i),
    T(t._f) || (e._f = t._f),
    T(t._l) || (e._l = t._l),
    T(t._strict) || (e._strict = t._strict),
    T(t._tzm) || (e._tzm = t._tzm),
    T(t._isUTC) || (e._isUTC = t._isUTC),
    T(t._offset) || (e._offset = t._offset),
    T(t._pf) || (e._pf = c(t)),
    T(t._locale) || (e._locale = t._locale),
    n > 0)
        for (s = 0; s < n; s++)
            r = pt[s],
            a = t[r],
            T(a) || (e[r] = a);
    return e
}
function Se(e) {
    at(this, e),
    this._d = new Date(e._d != null ? e._d.getTime() : NaN),
    this.isValid() || (this._d = new Date(NaN)),
    ze === !1 && (ze = !0,
    l.updateOffset(this),
    ze = !1)
}
function F(e) {
    return e instanceof Se || e != null && e._isAMomentObject != null
}
function Pt(e) {
    l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
}
function N(e, t) {
    var s = !0;
    return Q(function() {
        if (l.deprecationHandler != null && l.deprecationHandler(null, e),
        s) {
            var r = [], a, n, i, u = arguments.length;
            for (n = 0; n < u; n++) {
                if (a = "",
                typeof arguments[n] == "object") {
                    a += `
[` + n + "] ";
                    for (i in arguments[0])
                        w(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
                    a = a.slice(0, -2)
                } else
                    a = arguments[n];
                r.push(a)
            }
            Pt(e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack),
            s = !1
        }
        return t.apply(this, arguments)
    }, t)
}
var Yt = {};
function Rt(e, t) {
    l.deprecationHandler != null && l.deprecationHandler(e, t),
    Yt[e] || (Pt(t),
    Yt[e] = !0)
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function H(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
}
function Ys(e) {
    var t, s;
    for (s in e)
        w(e, s) && (t = e[s],
        H(t) ? this[s] = t : this["_" + s] = t);
    this._config = e,
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}
function Je(e, t) {
    var s = Q({}, e), r;
    for (r in t)
        w(t, r) && (se(e[r]) && se(t[r]) ? (s[r] = {},
        Q(s[r], e[r]),
        Q(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
    for (r in e)
        w(e, r) && !w(t, r) && se(e[r]) && (s[r] = Q({}, s[r]));
    return s
}
function nt(e) {
    e != null && this.set(e)
}
var Qe;
Object.keys ? Qe = Object.keys : Qe = function(e) {
    var t, s = [];
    for (t in e)
        w(e, t) && s.push(t);
    return s
}
;
var Os = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
};
function Ts(e, t, s) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return H(r) ? r.call(t, s) : r
}
function U(e, t, s) {
    var r = "" + Math.abs(e)
      , a = t - r.length
      , n = e >= 0;
    return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r
}
var it = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
  , pe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
  , Ze = {}
  , oe = {};
function h(e, t, s, r) {
    var a = r;
    typeof r == "string" && (a = function() {
        return this[r]()
    }
    ),
    e && (oe[e] = a),
    t && (oe[t[0]] = function() {
        return U(a.apply(this, arguments), t[1], t[2])
    }
    ),
    s && (oe[s] = function() {
        return this.localeData().ordinal(a.apply(this, arguments), e)
    }
    )
}
function bs(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
}
function xs(e) {
    var t = e.match(it), s, r;
    for (s = 0,
    r = t.length; s < r; s++)
        oe[t[s]] ? t[s] = oe[t[s]] : t[s] = bs(t[s]);
    return function(a) {
        var n = "", i;
        for (i = 0; i < r; i++)
            n += H(t[i]) ? t[i].call(a, e) : t[i];
        return n
    }
}
function Oe(e, t) {
    return e.isValid() ? (t = Ft(t, e.localeData()),
    Ze[t] = Ze[t] || xs(t),
    Ze[t](e)) : e.localeData().invalidDate()
}
function Ft(e, t) {
    var s = 5;
    function r(a) {
        return t.longDateFormat(a) || a
    }
    for (pe.lastIndex = 0; s >= 0 && pe.test(e); )
        e = e.replace(pe, r),
        pe.lastIndex = 0,
        s -= 1;
    return e
}
var Ns = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ws(e) {
    var t = this._longDateFormat[e]
      , s = this._longDateFormat[e.toUpperCase()];
    return t || !s ? t : (this._longDateFormat[e] = s.match(it).map(function(r) {
        return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r
    }).join(""),
    this._longDateFormat[e])
}
var Ps = "Invalid date";
function Rs() {
    return this._invalidDate
}
var Fs = "%d"
  , Cs = /\d{1,2}/;
function Ls(e) {
    return this._ordinal.replace("%d", e)
}
var Us = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
};
function Is(e, t, s, r) {
    var a = this._relativeTime[s];
    return H(a) ? a(e, t, s, r) : a.replace(/%d/i, e)
}
function Hs(e, t) {
    var s = this._relativeTime[e > 0 ? "future" : "past"];
    return H(s) ? s(t) : s.replace(/%s/i, t)
}
var Ot = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
};
function W(e) {
    return typeof e == "string" ? Ot[e] || Ot[e.toLowerCase()] : void 0
}
function ot(e) {
    var t = {}, s, r;
    for (r in e)
        w(e, r) && (s = W(r),
        s && (t[s] = e[r]));
    return t
}
var Es = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
};
function As(e) {
    var t = [], s;
    for (s in e)
        w(e, s) && t.push({
            unit: s,
            priority: Es[s]
        });
    return t.sort(function(r, a) {
        return r.priority - a.priority
    }),
    t
}
var Ct = /\d/, b = /\d\d/, Lt = /\d{3}/, lt = /\d{4}/, Ce = /[+-]?\d{6}/, S = /\d\d?/, Ut = /\d\d\d\d?/, It = /\d\d\d\d\d\d?/, Le = /\d{1,3}/, ut = /\d{1,4}/, Ue = /[+-]?\d{1,6}/, de = /\d+/, Ie = /[+-]?\d+/, Vs = /Z|[+-]\d\d:?\d\d/gi, He = /Z|[+-]\d\d(?::?\d\d)?/gi, Gs = /[+-]?\d+(\.\d{1,3})?/, De = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, he = /^[1-9]\d?/, dt = /^([1-9]\d|\d)/, xe;
xe = {};
function d(e, t, s) {
    xe[e] = H(t) ? t : function(r, a) {
        return r && s ? s : t
    }
}
function js(e, t) {
    return w(xe, e) ? xe[e](t._strict, t._locale) : new RegExp(zs(e))
}
function zs(e) {
    return z(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, s, r, a, n) {
        return s || r || a || n
    }))
}
function z(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}
function x(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
}
function m(e) {
    var t = +e
      , s = 0;
    return t !== 0 && isFinite(t) && (s = x(t)),
    s
}
var Xe = {};
function g(e, t) {
    var s, r = t, a;
    for (typeof e == "string" && (e = [e]),
    $(t) && (r = function(n, i) {
        i[t] = m(n)
    }
    ),
    a = e.length,
    s = 0; s < a; s++)
        Xe[e[s]] = r
}
function ve(e, t) {
    g(e, function(s, r, a, n) {
        a._w = a._w || {},
        t(s, a._w, a, n)
    })
}
function Zs(e, t, s) {
    t != null && w(Xe, e) && Xe[e](t, s._a, s, e)
}
function Ee(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
}
var Y = 0
  , G = 1
  , L = 2
  , p = 3
  , P = 4
  , j = 5
  , te = 6
  , $s = 7
  , qs = 8;
h("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? U(e, 4) : "+" + e
});
h(0, ["YY", 2], 0, function() {
    return this.year() % 100
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", Ie);
d("YY", S, b);
d("YYYY", ut, lt);
d("YYYYY", Ue, Ce);
d("YYYYYY", Ue, Ce);
g(["YYYYY", "YYYYYY"], Y);
g("YYYY", function(e, t) {
    t[Y] = e.length === 2 ? l.parseTwoDigitYear(e) : m(e)
});
g("YY", function(e, t) {
    t[Y] = l.parseTwoDigitYear(e)
});
g("Y", function(e, t) {
    t[Y] = parseInt(e, 10)
});
function _e(e) {
    return Ee(e) ? 366 : 365
}
l.parseTwoDigitYear = function(e) {
    return m(e) + (m(e) > 68 ? 1900 : 2e3)
}
;
var Ht = fe("FullYear", !0);
function Bs() {
    return Ee(this.year())
}
function fe(e, t) {
    return function(s) {
        return s != null ? (Et(this, e, s),
        l.updateOffset(this, t),
        this) : ye(this, e)
    }
}
function ye(e, t) {
    if (!e.isValid())
        return NaN;
    var s = e._d
      , r = e._isUTC;
    switch (t) {
    case "Milliseconds":
        return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
        return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
        return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
        return r ? s.getUTCHours() : s.getHours();
    case "Date":
        return r ? s.getUTCDate() : s.getDate();
    case "Day":
        return r ? s.getUTCDay() : s.getDay();
    case "Month":
        return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
        return r ? s.getUTCFullYear() : s.getFullYear();
    default:
        return NaN
    }
}
function Et(e, t, s) {
    var r, a, n, i, u;
    if (!(!e.isValid() || isNaN(s))) {
        switch (r = e._d,
        a = e._isUTC,
        t) {
        case "Milliseconds":
            return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
        case "Seconds":
            return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
        case "Minutes":
            return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
        case "Hours":
            return void (a ? r.setUTCHours(s) : r.setHours(s));
        case "Date":
            return void (a ? r.setUTCDate(s) : r.setDate(s));
        case "FullYear":
            break;
        default:
            return
        }
        n = s,
        i = e.month(),
        u = e.date(),
        u = u === 29 && i === 1 && !Ee(n) ? 28 : u,
        a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u)
    }
}
function Js(e) {
    return e = W(e),
    H(this[e]) ? this[e]() : this
}
function Qs(e, t) {
    if (typeof e == "object") {
        e = ot(e);
        var s = As(e), r, a = s.length;
        for (r = 0; r < a; r++)
            this[s[r].unit](e[s[r].unit])
    } else if (e = W(e),
    H(this[e]))
        return this[e](t);
    return this
}
function Xs(e, t) {
    return (e % t + t) % t
}
var v;
Array.prototype.indexOf ? v = Array.prototype.indexOf : v = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
        if (this[t] === e)
            return t;
    return -1
}
;
function ht(e, t) {
    if (isNaN(e) || isNaN(t))
        return NaN;
    var s = Xs(t, 12);
    return e += (t - s) / 12,
    s === 1 ? Ee(e) ? 29 : 28 : 31 - s % 7 % 2
}
h("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
});
h("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
});
h("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e)
});
d("M", S, he);
d("MM", S, b);
d("MMM", function(e, t) {
    return t.monthsShortRegex(e)
});
d("MMMM", function(e, t) {
    return t.monthsRegex(e)
});
g(["M", "MM"], function(e, t) {
    t[G] = m(e) - 1
});
g(["MMM", "MMMM"], function(e, t, s, r) {
    var a = s._locale.monthsParse(e, r, s._strict);
    a != null ? t[G] = a : c(s).invalidMonth = e
});
var Ks = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  , At = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
  , Vt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
  , er = De
  , tr = De;
function sr(e, t) {
    return e ? R(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Vt).test(t) ? "format" : "standalone"][e.month()] : R(this._months) ? this._months : this._months.standalone
}
function rr(e, t) {
    return e ? R(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Vt.test(t) ? "format" : "standalone"][e.month()] : R(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}
function ar(e, t, s) {
    var r, a, n, i = e.toLocaleLowerCase();
    if (!this._monthsParse)
        for (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        r = 0; r < 12; ++r)
            n = I([2e3, r]),
            this._shortMonthsParse[r] = this.monthsShort(n, "").toLocaleLowerCase(),
            this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
    return s ? t === "MMM" ? (a = v.call(this._shortMonthsParse, i),
    a !== -1 ? a : null) : (a = v.call(this._longMonthsParse, i),
    a !== -1 ? a : null) : t === "MMM" ? (a = v.call(this._shortMonthsParse, i),
    a !== -1 ? a : (a = v.call(this._longMonthsParse, i),
    a !== -1 ? a : null)) : (a = v.call(this._longMonthsParse, i),
    a !== -1 ? a : (a = v.call(this._shortMonthsParse, i),
    a !== -1 ? a : null))
}
function nr(e, t, s) {
    var r, a, n;
    if (this._monthsParseExact)
        return ar.call(this, e, t, s);
    for (this._monthsParse || (this._monthsParse = [],
    this._longMonthsParse = [],
    this._shortMonthsParse = []),
    r = 0; r < 12; r++) {
        if (a = I([2e3, r]),
        s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$","i"),
        this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$","i")),
        !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""),
        this._monthsParse[r] = new RegExp(n.replace(".", ""),"i")),
        s && t === "MMMM" && this._longMonthsParse[r].test(e))
            return r;
        if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
            return r;
        if (!s && this._monthsParse[r].test(e))
            return r
    }
}
function Gt(e, t) {
    if (!e.isValid())
        return e;
    if (typeof t == "string") {
        if (/^\d+$/.test(t))
            t = m(t);
        else if (t = e.localeData().monthsParse(t),
        !$(t))
            return e
    }
    var s = t
      , r = e.date();
    return r = r < 29 ? r : Math.min(r, ht(e.year(), s)),
    e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r),
    e
}
function jt(e) {
    return e != null ? (Gt(this, e),
    l.updateOffset(this, !0),
    this) : ye(this, "Month")
}
function ir() {
    return ht(this.year(), this.month())
}
function or(e) {
    return this._monthsParseExact ? (w(this, "_monthsRegex") || zt.call(this),
    e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = er),
    this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
}
function lr(e) {
    return this._monthsParseExact ? (w(this, "_monthsRegex") || zt.call(this),
    e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = tr),
    this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
}
function zt() {
    function e(f, _) {
        return _.length - f.length
    }
    var t = [], s = [], r = [], a, n, i, u;
    for (a = 0; a < 12; a++)
        n = I([2e3, a]),
        i = z(this.monthsShort(n, "")),
        u = z(this.months(n, "")),
        t.push(i),
        s.push(u),
        r.push(u),
        r.push(i);
    t.sort(e),
    s.sort(e),
    r.sort(e),
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
    this._monthsShortRegex = this._monthsRegex,
    this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
    this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")","i")
}
function ur(e, t, s, r, a, n, i) {
    var u;
    return e < 100 && e >= 0 ? (u = new Date(e + 400,t,s,r,a,n,i),
    isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e,t,s,r,a,n,i),
    u
}
function we(e) {
    var t, s;
    return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments),
    s[0] = e + 400,
    t = new Date(Date.UTC.apply(null, s)),
    isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
    t
}
function Ne(e, t, s) {
    var r = 7 + t - s
      , a = (7 + we(e, 0, r).getUTCDay() - t) % 7;
    return -a + r - 1
}
function Zt(e, t, s, r, a) {
    var n = (7 + s - r) % 7, i = Ne(e, r, a), u = 1 + 7 * (t - 1) + n + i, f, _;
    return u <= 0 ? (f = e - 1,
    _ = _e(f) + u) : u > _e(e) ? (f = e + 1,
    _ = u - _e(e)) : (f = e,
    _ = u),
    {
        year: f,
        dayOfYear: _
    }
}
function ke(e, t, s) {
    var r = Ne(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
    return a < 1 ? (i = e.year() - 1,
    n = a + Z(i, t, s)) : a > Z(e.year(), t, s) ? (n = a - Z(e.year(), t, s),
    i = e.year() + 1) : (i = e.year(),
    n = a),
    {
        week: n,
        year: i
    }
}
function Z(e, t, s) {
    var r = Ne(e, t, s)
      , a = Ne(e + 1, t, s);
    return (_e(e) - r + a) / 7
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
d("w", S, he);
d("ww", S, b);
d("W", S, he);
d("WW", S, b);
ve(["w", "ww", "W", "WW"], function(e, t, s, r) {
    t[r.substr(0, 1)] = m(e)
});
function dr(e) {
    return ke(e, this._week.dow, this._week.doy).week
}
var hr = {
    dow: 0,
    doy: 6
};
function fr() {
    return this._week.dow
}
function cr() {
    return this._week.doy
}
function mr(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d")
}
function _r(e) {
    var t = ke(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d")
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
});
h("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
});
h("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
d("d", S);
d("e", S);
d("E", S);
d("dd", function(e, t) {
    return t.weekdaysMinRegex(e)
});
d("ddd", function(e, t) {
    return t.weekdaysShortRegex(e)
});
d("dddd", function(e, t) {
    return t.weekdaysRegex(e)
});
ve(["dd", "ddd", "dddd"], function(e, t, s, r) {
    var a = s._locale.weekdaysParse(e, r, s._strict);
    a != null ? t.d = a : c(s).invalidWeekday = e
});
ve(["d", "e", "E"], function(e, t, s, r) {
    t[r] = m(e)
});
function yr(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e),
    typeof e == "number" ? e : null) : parseInt(e, 10)
}
function wr(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
}
function ft(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
}
var kr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
  , $t = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
  , gr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
  , Mr = De
  , Sr = De
  , Dr = De;
function vr(e, t) {
    var s = R(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? ft(s, this._week.dow) : e ? s[e.day()] : s
}
function pr(e) {
    return e === !0 ? ft(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
}
function Yr(e) {
    return e === !0 ? ft(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
}
function Or(e, t, s) {
    var r, a, n, i = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
        for (this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        r = 0; r < 7; ++r)
            n = I([2e3, 1]).day(r),
            this._minWeekdaysParse[r] = this.weekdaysMin(n, "").toLocaleLowerCase(),
            this._shortWeekdaysParse[r] = this.weekdaysShort(n, "").toLocaleLowerCase(),
            this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
    return s ? t === "dddd" ? (a = v.call(this._weekdaysParse, i),
    a !== -1 ? a : null) : t === "ddd" ? (a = v.call(this._shortWeekdaysParse, i),
    a !== -1 ? a : null) : (a = v.call(this._minWeekdaysParse, i),
    a !== -1 ? a : null) : t === "dddd" ? (a = v.call(this._weekdaysParse, i),
    a !== -1 || (a = v.call(this._shortWeekdaysParse, i),
    a !== -1) ? a : (a = v.call(this._minWeekdaysParse, i),
    a !== -1 ? a : null)) : t === "ddd" ? (a = v.call(this._shortWeekdaysParse, i),
    a !== -1 || (a = v.call(this._weekdaysParse, i),
    a !== -1) ? a : (a = v.call(this._minWeekdaysParse, i),
    a !== -1 ? a : null)) : (a = v.call(this._minWeekdaysParse, i),
    a !== -1 || (a = v.call(this._weekdaysParse, i),
    a !== -1) ? a : (a = v.call(this._shortWeekdaysParse, i),
    a !== -1 ? a : null))
}
function Tr(e, t, s) {
    var r, a, n;
    if (this._weekdaysParseExact)
        return Or.call(this, e, t, s);
    for (this._weekdaysParse || (this._weekdaysParse = [],
    this._minWeekdaysParse = [],
    this._shortWeekdaysParse = [],
    this._fullWeekdaysParse = []),
    r = 0; r < 7; r++) {
        if (a = I([2e3, 1]).day(r),
        s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$","i"),
        this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$","i"),
        this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$","i")),
        this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""),
        this._weekdaysParse[r] = new RegExp(n.replace(".", ""),"i")),
        s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
            return r;
        if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
            return r;
        if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
            return r;
        if (!s && this._weekdaysParse[r].test(e))
            return r
    }
}
function br(e) {
    if (!this.isValid())
        return e != null ? this : NaN;
    var t = ye(this, "Day");
    return e != null ? (e = yr(e, this.localeData()),
    this.add(e - t, "d")) : t
}
function xr(e) {
    if (!this.isValid())
        return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d")
}
function Nr(e) {
    if (!this.isValid())
        return e != null ? this : NaN;
    if (e != null) {
        var t = wr(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7)
    } else
        return this.day() || 7
}
function Wr(e) {
    return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || ct.call(this),
    e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = Mr),
    this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
}
function Pr(e) {
    return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || ct.call(this),
    e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Sr),
    this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}
function Rr(e) {
    return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || ct.call(this),
    e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Dr),
    this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}
function ct() {
    function e(O, E) {
        return E.length - O.length
    }
    var t = [], s = [], r = [], a = [], n, i, u, f, _;
    for (n = 0; n < 7; n++)
        i = I([2e3, 1]).day(n),
        u = z(this.weekdaysMin(i, "")),
        f = z(this.weekdaysShort(i, "")),
        _ = z(this.weekdays(i, "")),
        t.push(u),
        s.push(f),
        r.push(_),
        a.push(u),
        a.push(f),
        a.push(_);
    t.sort(e),
    s.sort(e),
    r.sort(e),
    a.sort(e),
    this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")","i"),
    this._weekdaysShortRegex = this._weekdaysRegex,
    this._weekdaysMinRegex = this._weekdaysRegex,
    this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")","i"),
    this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
    this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")","i")
}
function mt() {
    return this.hours() % 12 || 12
}
function Fr() {
    return this.hours() || 24
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, mt);
h("k", ["kk", 2], 0, Fr);
h("hmm", 0, 0, function() {
    return "" + mt.apply(this) + U(this.minutes(), 2)
});
h("hmmss", 0, 0, function() {
    return "" + mt.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
});
h("Hmm", 0, 0, function() {
    return "" + this.hours() + U(this.minutes(), 2)
});
h("Hmmss", 0, 0, function() {
    return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
});
function qt(e, t) {
    h(e, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
}
qt("a", !0);
qt("A", !1);
function Bt(e, t) {
    return t._meridiemParse
}
d("a", Bt);
d("A", Bt);
d("H", S, dt);
d("h", S, he);
d("k", S, he);
d("HH", S, b);
d("hh", S, b);
d("kk", S, b);
d("hmm", Ut);
d("hmmss", It);
d("Hmm", Ut);
d("Hmmss", It);
g(["H", "HH"], p);
g(["k", "kk"], function(e, t, s) {
    var r = m(e);
    t[p] = r === 24 ? 0 : r
});
g(["a", "A"], function(e, t, s) {
    s._isPm = s._locale.isPM(e),
    s._meridiem = e
});
g(["h", "hh"], function(e, t, s) {
    t[p] = m(e),
    c(s).bigHour = !0
});
g("hmm", function(e, t, s) {
    var r = e.length - 2;
    t[p] = m(e.substr(0, r)),
    t[P] = m(e.substr(r)),
    c(s).bigHour = !0
});
g("hmmss", function(e, t, s) {
    var r = e.length - 4
      , a = e.length - 2;
    t[p] = m(e.substr(0, r)),
    t[P] = m(e.substr(r, 2)),
    t[j] = m(e.substr(a)),
    c(s).bigHour = !0
});
g("Hmm", function(e, t, s) {
    var r = e.length - 2;
    t[p] = m(e.substr(0, r)),
    t[P] = m(e.substr(r))
});
g("Hmmss", function(e, t, s) {
    var r = e.length - 4
      , a = e.length - 2;
    t[p] = m(e.substr(0, r)),
    t[P] = m(e.substr(r, 2)),
    t[j] = m(e.substr(a))
});
function Cr(e) {
    return (e + "").toLowerCase().charAt(0) === "p"
}
var Lr = /[ap]\.?m?\.?/i
  , Ur = fe("Hours", !0);
function Ir(e, t, s) {
    return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM"
}
var Jt = {
    calendar: Os,
    longDateFormat: Ns,
    invalidDate: Ps,
    ordinal: Fs,
    dayOfMonthOrdinalParse: Cs,
    relativeTime: Us,
    months: Ks,
    monthsShort: At,
    week: hr,
    weekdays: kr,
    weekdaysMin: gr,
    weekdaysShort: $t,
    meridiemParse: Lr
}, D = {}, ce = {}, ge;
function Hr(e, t) {
    var s, r = Math.min(e.length, t.length);
    for (s = 0; s < r; s += 1)
        if (e[s] !== t[s])
            return s;
    return r
}
function Tt(e) {
    return e && e.toLowerCase().replace("_", "-")
}
function Er(e) {
    for (var t = 0, s, r, a, n; t < e.length; ) {
        for (n = Tt(e[t]).split("-"),
        s = n.length,
        r = Tt(e[t + 1]),
        r = r ? r.split("-") : null; s > 0; ) {
            if (a = Ae(n.slice(0, s).join("-")),
            a)
                return a;
            if (r && r.length >= s && Hr(n, r) >= s - 1)
                break;
            s--
        }
        t++
    }
    return ge
}
function Ar(e) {
    return !!(e && e.match("^[^/\\\\]*$"))
}
function Ae(e) {
    var t = null, s;
    if (D[e] === void 0 && typeof module < "u" && module && module.exports && Ar(e))
        try {
            t = ge._abbr,
            s = require,
            s("./locale/" + e),
            K(t)
        } catch {
            D[e] = null
        }
    return D[e]
}
function K(e, t) {
    var s;
    return e && (T(t) ? s = q(e) : s = _t(e, t),
    s ? ge = s : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
    ge._abbr
}
function _t(e, t) {
    if (t !== null) {
        var s, r = Jt;
        if (t.abbr = e,
        D[e] != null)
            Rt("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            r = D[e]._config;
        else if (t.parentLocale != null)
            if (D[t.parentLocale] != null)
                r = D[t.parentLocale]._config;
            else if (s = Ae(t.parentLocale),
            s != null)
                r = s._config;
            else
                return ce[t.parentLocale] || (ce[t.parentLocale] = []),
                ce[t.parentLocale].push({
                    name: e,
                    config: t
                }),
                null;
        return D[e] = new nt(Je(r, t)),
        ce[e] && ce[e].forEach(function(a) {
            _t(a.name, a.config)
        }),
        K(e),
        D[e]
    } else
        return delete D[e],
        null
}
function Vr(e, t) {
    if (t != null) {
        var s, r, a = Jt;
        D[e] != null && D[e].parentLocale != null ? D[e].set(Je(D[e]._config, t)) : (r = Ae(e),
        r != null && (a = r._config),
        t = Je(a, t),
        r == null && (t.abbr = e),
        s = new nt(t),
        s.parentLocale = D[e],
        D[e] = s),
        K(e)
    } else
        D[e] != null && (D[e].parentLocale != null ? (D[e] = D[e].parentLocale,
        e === K() && K(e)) : D[e] != null && delete D[e]);
    return D[e]
}
function q(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
    !e)
        return ge;
    if (!R(e)) {
        if (t = Ae(e),
        t)
            return t;
        e = [e]
    }
    return Er(e)
}
function Gr() {
    return Qe(D)
}
function yt(e) {
    var t, s = e._a;
    return s && c(e).overflow === -2 && (t = s[G] < 0 || s[G] > 11 ? G : s[L] < 1 || s[L] > ht(s[Y], s[G]) ? L : s[p] < 0 || s[p] > 24 || s[p] === 24 && (s[P] !== 0 || s[j] !== 0 || s[te] !== 0) ? p : s[P] < 0 || s[P] > 59 ? P : s[j] < 0 || s[j] > 59 ? j : s[te] < 0 || s[te] > 999 ? te : -1,
    c(e)._overflowDayOfYear && (t < Y || t > L) && (t = L),
    c(e)._overflowWeeks && t === -1 && (t = $s),
    c(e)._overflowWeekday && t === -1 && (t = qs),
    c(e).overflow = t),
    e
}
var jr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
  , zr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
  , Zr = /Z|[+-]\d\d(?::?\d\d)?/
  , Ye = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
  , $e = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
  , $r = /^\/?Date\((-?\d+)/i
  , qr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
  , Br = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
function Qt(e) {
    var t, s, r = e._i, a = jr.exec(r) || zr.exec(r), n, i, u, f, _ = Ye.length, O = $e.length;
    if (a) {
        for (c(e).iso = !0,
        t = 0,
        s = _; t < s; t++)
            if (Ye[t][1].exec(a[1])) {
                i = Ye[t][0],
                n = Ye[t][2] !== !1;
                break
            }
        if (i == null) {
            e._isValid = !1;
            return
        }
        if (a[3]) {
            for (t = 0,
            s = O; t < s; t++)
                if ($e[t][1].exec(a[3])) {
                    u = (a[2] || " ") + $e[t][0];
                    break
                }
            if (u == null) {
                e._isValid = !1;
                return
            }
        }
        if (!n && u != null) {
            e._isValid = !1;
            return
        }
        if (a[4])
            if (Zr.exec(a[4]))
                f = "Z";
            else {
                e._isValid = !1;
                return
            }
        e._f = i + (u || "") + (f || ""),
        kt(e)
    } else
        e._isValid = !1
}
function Jr(e, t, s, r, a, n) {
    var i = [Qr(e), At.indexOf(t), parseInt(s, 10), parseInt(r, 10), parseInt(a, 10)];
    return n && i.push(parseInt(n, 10)),
    i
}
function Qr(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
}
function Xr(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
function Kr(e, t, s) {
    if (e) {
        var r = $t.indexOf(e)
          , a = new Date(t[0],t[1],t[2]).getDay();
        if (r !== a)
            return c(s).weekdayMismatch = !0,
            s._isValid = !1,
            !1
    }
    return !0
}
function ea(e, t, s) {
    if (e)
        return Br[e];
    if (t)
        return 0;
    var r = parseInt(s, 10)
      , a = r % 100
      , n = (r - a) / 100;
    return n * 60 + a
}
function Xt(e) {
    var t = qr.exec(Xr(e._i)), s;
    if (t) {
        if (s = Jr(t[4], t[3], t[2], t[5], t[6], t[7]),
        !Kr(t[1], s, e))
            return;
        e._a = s,
        e._tzm = ea(t[8], t[9], t[10]),
        e._d = we.apply(null, e._a),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        c(e).rfc2822 = !0
    } else
        e._isValid = !1
}
function ta(e) {
    var t = $r.exec(e._i);
    if (t !== null) {
        e._d = new Date(+t[1]);
        return
    }
    if (Qt(e),
    e._isValid === !1)
        delete e._isValid;
    else
        return;
    if (Xt(e),
    e._isValid === !1)
        delete e._isValid;
    else
        return;
    e._strict ? e._isValid = !1 : l.createFromInputFallback(e)
}
l.createFromInputFallback = N("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
});
function ne(e, t, s) {
    return e ?? t ?? s
}
function sa(e) {
    var t = new Date(l.now());
    return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
}
function wt(e) {
    var t, s, r = [], a, n, i;
    if (!e._d) {
        for (a = sa(e),
        e._w && e._a[L] == null && e._a[G] == null && ra(e),
        e._dayOfYear != null && (i = ne(e._a[Y], a[Y]),
        (e._dayOfYear > _e(i) || e._dayOfYear === 0) && (c(e)._overflowDayOfYear = !0),
        s = we(i, 0, e._dayOfYear),
        e._a[G] = s.getUTCMonth(),
        e._a[L] = s.getUTCDate()),
        t = 0; t < 3 && e._a[t] == null; ++t)
            e._a[t] = r[t] = a[t];
        for (; t < 7; t++)
            e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        e._a[p] === 24 && e._a[P] === 0 && e._a[j] === 0 && e._a[te] === 0 && (e._nextDay = !0,
        e._a[p] = 0),
        e._d = (e._useUTC ? we : ur).apply(null, r),
        n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[p] = 24),
        e._w && typeof e._w.d < "u" && e._w.d !== n && (c(e).weekdayMismatch = !0)
    }
}
function ra(e) {
    var t, s, r, a, n, i, u, f, _;
    t = e._w,
    t.GG != null || t.W != null || t.E != null ? (n = 1,
    i = 4,
    s = ne(t.GG, e._a[Y], ke(M(), 1, 4).year),
    r = ne(t.W, 1),
    a = ne(t.E, 1),
    (a < 1 || a > 7) && (f = !0)) : (n = e._locale._week.dow,
    i = e._locale._week.doy,
    _ = ke(M(), n, i),
    s = ne(t.gg, e._a[Y], _.year),
    r = ne(t.w, _.week),
    t.d != null ? (a = t.d,
    (a < 0 || a > 6) && (f = !0)) : t.e != null ? (a = t.e + n,
    (t.e < 0 || t.e > 6) && (f = !0)) : a = n),
    r < 1 || r > Z(s, n, i) ? c(e)._overflowWeeks = !0 : f != null ? c(e)._overflowWeekday = !0 : (u = Zt(s, r, a, n, i),
    e._a[Y] = u.year,
    e._dayOfYear = u.dayOfYear)
}
l.ISO_8601 = function() {}
;
l.RFC_2822 = function() {}
;
function kt(e) {
    if (e._f === l.ISO_8601) {
        Qt(e);
        return
    }
    if (e._f === l.RFC_2822) {
        Xt(e);
        return
    }
    e._a = [],
    c(e).empty = !0;
    var t = "" + e._i, s, r, a, n, i, u = t.length, f = 0, _, O;
    for (a = Ft(e._f, e._locale).match(it) || [],
    O = a.length,
    s = 0; s < O; s++)
        n = a[s],
        r = (t.match(js(n, e)) || [])[0],
        r && (i = t.substr(0, t.indexOf(r)),
        i.length > 0 && c(e).unusedInput.push(i),
        t = t.slice(t.indexOf(r) + r.length),
        f += r.length),
        oe[n] ? (r ? c(e).empty = !1 : c(e).unusedTokens.push(n),
        Zs(n, r, e)) : e._strict && !r && c(e).unusedTokens.push(n);
    c(e).charsLeftOver = u - f,
    t.length > 0 && c(e).unusedInput.push(t),
    e._a[p] <= 12 && c(e).bigHour === !0 && e._a[p] > 0 && (c(e).bigHour = void 0),
    c(e).parsedDateParts = e._a.slice(0),
    c(e).meridiem = e._meridiem,
    e._a[p] = aa(e._locale, e._a[p], e._meridiem),
    _ = c(e).era,
    _ !== null && (e._a[Y] = e._locale.erasConvertYear(_, e._a[Y])),
    wt(e),
    yt(e)
}
function aa(e, t, s) {
    var r;
    return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s),
    r && t < 12 && (t += 12),
    !r && t === 12 && (t = 0)),
    t)
}
function na(e) {
    var t, s, r, a, n, i, u = !1, f = e._f.length;
    if (f === 0) {
        c(e).invalidFormat = !0,
        e._d = new Date(NaN);
        return
    }
    for (a = 0; a < f; a++)
        n = 0,
        i = !1,
        t = at({}, e),
        e._useUTC != null && (t._useUTC = e._useUTC),
        t._f = e._f[a],
        kt(t),
        rt(t) && (i = !0),
        n += c(t).charsLeftOver,
        n += c(t).unusedTokens.length * 10,
        c(t).score = n,
        u ? n < r && (r = n,
        s = t) : (r == null || n < r || i) && (r = n,
        s = t,
        i && (u = !0));
    Q(e, s || t)
}
function ia(e) {
    if (!e._d) {
        var t = ot(e._i)
          , s = t.day === void 0 ? t.date : t.day;
        e._a = Wt([t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond], function(r) {
            return r && parseInt(r, 10)
        }),
        wt(e)
    }
}
function oa(e) {
    var t = new Se(yt(Kt(e)));
    return t._nextDay && (t.add(1, "d"),
    t._nextDay = void 0),
    t
}
function Kt(e) {
    var t = e._i
      , s = e._f;
    return e._locale = e._locale || q(e._l),
    t === null || s === void 0 && t === "" ? Fe({
        nullInput: !0
    }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
    F(t) ? new Se(yt(t)) : (Me(t) ? e._d = t : R(s) ? na(e) : s ? kt(e) : la(e),
    rt(e) || (e._d = null),
    e))
}
function la(e) {
    var t = e._i;
    T(t) ? e._d = new Date(l.now()) : Me(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ta(e) : R(t) ? (e._a = Wt(t.slice(0), function(s) {
        return parseInt(s, 10)
    }),
    wt(e)) : se(t) ? ia(e) : $(t) ? e._d = new Date(t) : l.createFromInputFallback(e)
}
function es(e, t, s, r, a) {
    var n = {};
    return (t === !0 || t === !1) && (r = t,
    t = void 0),
    (s === !0 || s === !1) && (r = s,
    s = void 0),
    (se(e) && st(e) || R(e) && e.length === 0) && (e = void 0),
    n._isAMomentObject = !0,
    n._useUTC = n._isUTC = a,
    n._l = s,
    n._i = e,
    n._f = t,
    n._strict = r,
    oa(n)
}
function M(e, t, s, r) {
    return es(e, t, s, r, !1)
}
var ua = N("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Fe()
})
  , da = N("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Fe()
});
function ts(e, t) {
    var s, r;
    if (t.length === 1 && R(t[0]) && (t = t[0]),
    !t.length)
        return M();
    for (s = t[0],
    r = 1; r < t.length; ++r)
        (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
    return s
}
function ha() {
    var e = [].slice.call(arguments, 0);
    return ts("isBefore", e)
}
function fa() {
    var e = [].slice.call(arguments, 0);
    return ts("isAfter", e)
}
var ca = function() {
    return Date.now ? Date.now() : +new Date
}
  , me = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
function ma(e) {
    var t, s = !1, r, a = me.length;
    for (t in e)
        if (w(e, t) && !(v.call(me, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
            return !1;
    for (r = 0; r < a; ++r)
        if (e[me[r]]) {
            if (s)
                return !1;
            parseFloat(e[me[r]]) !== m(e[me[r]]) && (s = !0)
        }
    return !0
}
function _a() {
    return this._isValid
}
function ya() {
    return C(NaN)
}
function Ve(e) {
    var t = ot(e)
      , s = t.year || 0
      , r = t.quarter || 0
      , a = t.month || 0
      , n = t.week || t.isoWeek || 0
      , i = t.day || 0
      , u = t.hour || 0
      , f = t.minute || 0
      , _ = t.second || 0
      , O = t.millisecond || 0;
    this._isValid = ma(t),
    this._milliseconds = +O + _ * 1e3 + f * 6e4 + u * 1e3 * 60 * 60,
    this._days = +i + n * 7,
    this._months = +a + r * 3 + s * 12,
    this._data = {},
    this._locale = q(),
    this._bubble()
}
function Te(e) {
    return e instanceof Ve
}
function Ke(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
}
function wa(e, t, s) {
    var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
    for (i = 0; i < r; i++)
        (s && e[i] !== t[i] || !s && m(e[i]) !== m(t[i])) && n++;
    return n + a
}
function ss(e, t) {
    h(e, 0, 0, function() {
        var s = this.utcOffset()
          , r = "+";
        return s < 0 && (s = -s,
        r = "-"),
        r + U(~~(s / 60), 2) + t + U(~~s % 60, 2)
    })
}
ss("Z", ":");
ss("ZZ", "");
d("Z", He);
d("ZZ", He);
g(["Z", "ZZ"], function(e, t, s) {
    s._useUTC = !0,
    s._tzm = gt(He, e)
});
var ka = /([\+\-]|\d\d)/gi;
function gt(e, t) {
    var s = (t || "").match(e), r, a, n;
    return s === null ? null : (r = s[s.length - 1] || [],
    a = (r + "").match(ka) || ["-", 0, 0],
    n = +(a[1] * 60) + m(a[2]),
    n === 0 ? 0 : a[0] === "+" ? n : -n)
}
function Mt(e, t) {
    var s, r;
    return t._isUTC ? (s = t.clone(),
    r = (F(e) || Me(e) ? e.valueOf() : M(e).valueOf()) - s.valueOf(),
    s._d.setTime(s._d.valueOf() + r),
    l.updateOffset(s, !1),
    s) : M(e).local()
}
function et(e) {
    return -Math.round(e._d.getTimezoneOffset())
}
l.updateOffset = function() {}
;
function ga(e, t, s) {
    var r = this._offset || 0, a;
    if (!this.isValid())
        return e != null ? this : NaN;
    if (e != null) {
        if (typeof e == "string") {
            if (e = gt(He, e),
            e === null)
                return this
        } else
            Math.abs(e) < 16 && !s && (e = e * 60);
        return !this._isUTC && t && (a = et(this)),
        this._offset = e,
        this._isUTC = !0,
        a != null && this.add(a, "m"),
        r !== e && (!t || this._changeInProgress ? ns(this, C(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
        l.updateOffset(this, !0),
        this._changeInProgress = null)),
        this
    } else
        return this._isUTC ? r : et(this)
}
function Ma(e, t) {
    return e != null ? (typeof e != "string" && (e = -e),
    this.utcOffset(e, t),
    this) : -this.utcOffset()
}
function Sa(e) {
    return this.utcOffset(0, e)
}
function Da(e) {
    return this._isUTC && (this.utcOffset(0, e),
    this._isUTC = !1,
    e && this.subtract(et(this), "m")),
    this
}
function va() {
    if (this._tzm != null)
        this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
        var e = gt(Vs, this._i);
        e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
}
function pa(e) {
    return this.isValid() ? (e = e ? M(e).utcOffset() : 0,
    (this.utcOffset() - e) % 60 === 0) : !1
}
function Ya() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}
function Oa() {
    if (!T(this._isDSTShifted))
        return this._isDSTShifted;
    var e = {}, t;
    return at(e, this),
    e = Kt(e),
    e._a ? (t = e._isUTC ? I(e._a) : M(e._a),
    this._isDSTShifted = this.isValid() && wa(e._a, t.toArray()) > 0) : this._isDSTShifted = !1,
    this._isDSTShifted
}
function Ta() {
    return this.isValid() ? !this._isUTC : !1
}
function ba() {
    return this.isValid() ? this._isUTC : !1
}
function rs() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
}
var xa = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
  , Na = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function C(e, t) {
    var s = e, r = null, a, n, i;
    return Te(e) ? s = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
    } : $(e) || !isNaN(+e) ? (s = {},
    t ? s[t] = +e : s.milliseconds = +e) : (r = xa.exec(e)) ? (a = r[1] === "-" ? -1 : 1,
    s = {
        y: 0,
        d: m(r[L]) * a,
        h: m(r[p]) * a,
        m: m(r[P]) * a,
        s: m(r[j]) * a,
        ms: m(Ke(r[te] * 1e3)) * a
    }) : (r = Na.exec(e)) ? (a = r[1] === "-" ? -1 : 1,
    s = {
        y: ee(r[2], a),
        M: ee(r[3], a),
        w: ee(r[4], a),
        d: ee(r[5], a),
        h: ee(r[6], a),
        m: ee(r[7], a),
        s: ee(r[8], a)
    }) : s == null ? s = {} : typeof s == "object" && ("from"in s || "to"in s) && (i = Wa(M(s.from), M(s.to)),
    s = {},
    s.ms = i.milliseconds,
    s.M = i.months),
    n = new Ve(s),
    Te(e) && w(e, "_locale") && (n._locale = e._locale),
    Te(e) && w(e, "_isValid") && (n._isValid = e._isValid),
    n
}
C.fn = Ve.prototype;
C.invalid = ya;
function ee(e, t) {
    var s = e && parseFloat(e.replace(",", "."));
    return (isNaN(s) ? 0 : s) * t
}
function bt(e, t) {
    var s = {};
    return s.months = t.month() - e.month() + (t.year() - e.year()) * 12,
    e.clone().add(s.months, "M").isAfter(t) && --s.months,
    s.milliseconds = +t - +e.clone().add(s.months, "M"),
    s
}
function Wa(e, t) {
    var s;
    return e.isValid() && t.isValid() ? (t = Mt(t, e),
    e.isBefore(t) ? s = bt(e, t) : (s = bt(t, e),
    s.milliseconds = -s.milliseconds,
    s.months = -s.months),
    s) : {
        milliseconds: 0,
        months: 0
    }
}
function as(e, t) {
    return function(s, r) {
        var a, n;
        return r !== null && !isNaN(+r) && (Rt(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
        n = s,
        s = r,
        r = n),
        a = C(s, r),
        ns(this, a, e),
        this
    }
}
function ns(e, t, s, r) {
    var a = t._milliseconds
      , n = Ke(t._days)
      , i = Ke(t._months);
    e.isValid() && (r = r ?? !0,
    i && Gt(e, ye(e, "Month") + i * s),
    n && Et(e, "Date", ye(e, "Date") + n * s),
    a && e._d.setTime(e._d.valueOf() + a * s),
    r && l.updateOffset(e, n || i))
}
var Pa = as(1, "add")
  , Ra = as(-1, "subtract");
function is(e) {
    return typeof e == "string" || e instanceof String
}
function Fa(e) {
    return F(e) || Me(e) || is(e) || $(e) || La(e) || Ca(e) || e === null || e === void 0
}
function Ca(e) {
    var t = se(e) && !st(e), s = !1, r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], a, n, i = r.length;
    for (a = 0; a < i; a += 1)
        n = r[a],
        s = s || w(e, n);
    return t && s
}
function La(e) {
    var t = R(e)
      , s = !1;
    return t && (s = e.filter(function(r) {
        return !$(r) && is(e)
    }).length === 0),
    t && s
}
function Ua(e) {
    var t = se(e) && !st(e), s = !1, r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], a, n;
    for (a = 0; a < r.length; a += 1)
        n = r[a],
        s = s || w(e, n);
    return t && s
}
function Ia(e, t) {
    var s = e.diff(t, "days", !0);
    return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse"
}
function Ha(e, t) {
    arguments.length === 1 && (arguments[0] ? Fa(arguments[0]) ? (e = arguments[0],
    t = void 0) : Ua(arguments[0]) && (t = arguments[0],
    e = void 0) : (e = void 0,
    t = void 0));
    var s = e || M()
      , r = Mt(s, this).startOf("day")
      , a = l.calendarFormat(this, r) || "sameElse"
      , n = t && (H(t[a]) ? t[a].call(this, s) : t[a]);
    return this.format(n || this.localeData().calendar(a, this, M(s)))
}
function Ea() {
    return new Se(this)
}
function Aa(e, t) {
    var s = F(e) ? e : M(e);
    return this.isValid() && s.isValid() ? (t = W(t) || "millisecond",
    t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1
}
function Va(e, t) {
    var s = F(e) ? e : M(e);
    return this.isValid() && s.isValid() ? (t = W(t) || "millisecond",
    t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1
}
function Ga(e, t, s, r) {
    var a = F(e) ? e : M(e)
      , n = F(t) ? t : M(t);
    return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()",
    (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1
}
function ja(e, t) {
    var s = F(e) ? e : M(e), r;
    return this.isValid() && s.isValid() ? (t = W(t) || "millisecond",
    t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(),
    this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1
}
function za(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
}
function Za(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
}
function $a(e, t, s) {
    var r, a, n;
    if (!this.isValid())
        return NaN;
    if (r = Mt(e, this),
    !r.isValid())
        return NaN;
    switch (a = (r.utcOffset() - this.utcOffset()) * 6e4,
    t = W(t),
    t) {
    case "year":
        n = be(this, r) / 12;
        break;
    case "month":
        n = be(this, r);
        break;
    case "quarter":
        n = be(this, r) / 3;
        break;
    case "second":
        n = (this - r) / 1e3;
        break;
    case "minute":
        n = (this - r) / 6e4;
        break;
    case "hour":
        n = (this - r) / 36e5;
        break;
    case "day":
        n = (this - r - a) / 864e5;
        break;
    case "week":
        n = (this - r - a) / 6048e5;
        break;
    default:
        n = this - r
    }
    return s ? n : x(n)
}
function be(e, t) {
    if (e.date() < t.date())
        return -be(t, e);
    var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
    return t - r < 0 ? (a = e.clone().add(s - 1, "months"),
    n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"),
    n = (t - r) / (a - r)),
    -(s + n) || 0
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function qa() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}
function Ba(e) {
    if (!this.isValid())
        return null;
    var t = e !== !0
      , s = t ? this.clone().utc() : this;
    return s.year() < 0 || s.year() > 9999 ? Oe(s, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Oe(s, "Z")) : Oe(s, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}
function Ja() {
    if (!this.isValid())
        return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", s, r, a, n;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone",
    t = "Z"),
    s = "[" + e + '("]',
    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
    a = "-MM-DD[T]HH:mm:ss.SSS",
    n = t + '[")]',
    this.format(s + r + a + n)
}
function Qa(e) {
    e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
    var t = Oe(this, e);
    return this.localeData().postformat(t)
}
function Xa(e, t) {
    return this.isValid() && (F(e) && e.isValid() || M(e).isValid()) ? C({
        to: this,
        from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}
function Ka(e) {
    return this.from(M(), e)
}
function en(e, t) {
    return this.isValid() && (F(e) && e.isValid() || M(e).isValid()) ? C({
        from: this,
        to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}
function tn(e) {
    return this.to(M(), e)
}
function os(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = q(e),
    t != null && (this._locale = t),
    this)
}
var ls = N("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
    return e === void 0 ? this.localeData() : this.locale(e)
});
function us() {
    return this._locale
}
var We = 1e3
  , le = 60 * We
  , Pe = 60 * le
  , ds = (365 * 400 + 97) * 24 * Pe;
function ue(e, t) {
    return (e % t + t) % t
}
function hs(e, t, s) {
    return e < 100 && e >= 0 ? new Date(e + 400,t,s) - ds : new Date(e,t,s).valueOf()
}
function fs(e, t, s) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - ds : Date.UTC(e, t, s)
}
function sn(e) {
    var t, s;
    if (e = W(e),
    e === void 0 || e === "millisecond" || !this.isValid())
        return this;
    switch (s = this._isUTC ? fs : hs,
    e) {
    case "year":
        t = s(this.year(), 0, 1);
        break;
    case "quarter":
        t = s(this.year(), this.month() - this.month() % 3, 1);
        break;
    case "month":
        t = s(this.year(), this.month(), 1);
        break;
    case "week":
        t = s(this.year(), this.month(), this.date() - this.weekday());
        break;
    case "isoWeek":
        t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
    case "day":
    case "date":
        t = s(this.year(), this.month(), this.date());
        break;
    case "hour":
        t = this._d.valueOf(),
        t -= ue(t + (this._isUTC ? 0 : this.utcOffset() * le), Pe);
        break;
    case "minute":
        t = this._d.valueOf(),
        t -= ue(t, le);
        break;
    case "second":
        t = this._d.valueOf(),
        t -= ue(t, We);
        break
    }
    return this._d.setTime(t),
    l.updateOffset(this, !0),
    this
}
function rn(e) {
    var t, s;
    if (e = W(e),
    e === void 0 || e === "millisecond" || !this.isValid())
        return this;
    switch (s = this._isUTC ? fs : hs,
    e) {
    case "year":
        t = s(this.year() + 1, 0, 1) - 1;
        break;
    case "quarter":
        t = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
    case "month":
        t = s(this.year(), this.month() + 1, 1) - 1;
        break;
    case "week":
        t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
    case "isoWeek":
        t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
    case "day":
    case "date":
        t = s(this.year(), this.month(), this.date() + 1) - 1;
        break;
    case "hour":
        t = this._d.valueOf(),
        t += Pe - ue(t + (this._isUTC ? 0 : this.utcOffset() * le), Pe) - 1;
        break;
    case "minute":
        t = this._d.valueOf(),
        t += le - ue(t, le) - 1;
        break;
    case "second":
        t = this._d.valueOf(),
        t += We - ue(t, We) - 1;
        break
    }
    return this._d.setTime(t),
    l.updateOffset(this, !0),
    this
}
function an() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
}
function nn() {
    return Math.floor(this.valueOf() / 1e3)
}
function on() {
    return new Date(this.valueOf())
}
function ln() {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
}
function un() {
    var e = this;
    return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds()
    }
}
function dn() {
    return this.isValid() ? this.toISOString() : null
}
function hn() {
    return rt(this)
}
function fn() {
    return Q({}, c(this))
}
function cn() {
    return c(this).overflow
}
function mn() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
d("N", St);
d("NN", St);
d("NNN", St);
d("NNNN", Yn);
d("NNNNN", On);
g(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? c(s).era = a : c(s).invalidEra = e
});
d("y", de);
d("yy", de);
d("yyy", de);
d("yyyy", de);
d("yo", Tn);
g(["y", "yy", "yyy", "yyyy"], Y);
g(["yo"], function(e, t, s, r) {
    var a;
    s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)),
    s._locale.eraYearOrdinalParse ? t[Y] = s._locale.eraYearOrdinalParse(e, a) : t[Y] = parseInt(e, 10)
});
function _n(e, t) {
    var s, r, a, n = this._eras || q("en")._eras;
    for (s = 0,
    r = n.length; s < r; ++s) {
        switch (typeof n[s].since) {
        case "string":
            a = l(n[s].since).startOf("day"),
            n[s].since = a.valueOf();
            break
        }
        switch (typeof n[s].until) {
        case "undefined":
            n[s].until = 1 / 0;
            break;
        case "string":
            a = l(n[s].until).startOf("day").valueOf(),
            n[s].until = a.valueOf();
            break
        }
    }
    return n
}
function yn(e, t, s) {
    var r, a, n = this.eras(), i, u, f;
    for (e = e.toUpperCase(),
    r = 0,
    a = n.length; r < a; ++r)
        if (i = n[r].name.toUpperCase(),
        u = n[r].abbr.toUpperCase(),
        f = n[r].narrow.toUpperCase(),
        s)
            switch (t) {
            case "N":
            case "NN":
            case "NNN":
                if (u === e)
                    return n[r];
                break;
            case "NNNN":
                if (i === e)
                    return n[r];
                break;
            case "NNNNN":
                if (f === e)
                    return n[r];
                break
            }
        else if ([i, u, f].indexOf(e) >= 0)
            return n[r]
}
function wn(e, t) {
    var s = e.since <= e.until ? 1 : -1;
    return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s
}
function kn() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0,
    t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(),
        r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
            return r[e].name;
    return ""
}
function gn() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0,
    t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(),
        r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
            return r[e].narrow;
    return ""
}
function Mn() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0,
    t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(),
        r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
            return r[e].abbr;
    return ""
}
function Sn() {
    var e, t, s, r, a = this.localeData().eras();
    for (e = 0,
    t = a.length; e < t; ++e)
        if (s = a[e].since <= a[e].until ? 1 : -1,
        r = this.clone().startOf("day").valueOf(),
        a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
            return (this.year() - l(a[e].since).year()) * s + a[e].offset;
    return this.year()
}
function Dn(e) {
    return w(this, "_erasNameRegex") || Dt.call(this),
    e ? this._erasNameRegex : this._erasRegex
}
function vn(e) {
    return w(this, "_erasAbbrRegex") || Dt.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
}
function pn(e) {
    return w(this, "_erasNarrowRegex") || Dt.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
}
function St(e, t) {
    return t.erasAbbrRegex(e)
}
function Yn(e, t) {
    return t.erasNameRegex(e)
}
function On(e, t) {
    return t.erasNarrowRegex(e)
}
function Tn(e, t) {
    return t._eraYearOrdinalRegex || de
}
function Dt() {
    var e = [], t = [], s = [], r = [], a, n, i, u, f, _ = this.eras();
    for (a = 0,
    n = _.length; a < n; ++a)
        i = z(_[a].name),
        u = z(_[a].abbr),
        f = z(_[a].narrow),
        t.push(i),
        e.push(u),
        s.push(f),
        r.push(i),
        r.push(u),
        r.push(f);
    this._erasRegex = new RegExp("^(" + r.join("|") + ")","i"),
    this._erasNameRegex = new RegExp("^(" + t.join("|") + ")","i"),
    this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")","i"),
    this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")","i")
}
h(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
});
h(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
});
function Ge(e, t) {
    h(0, [e, e.length], 0, t)
}
Ge("gggg", "weekYear");
Ge("ggggg", "weekYear");
Ge("GGGG", "isoWeekYear");
Ge("GGGGG", "isoWeekYear");
d("G", Ie);
d("g", Ie);
d("GG", S, b);
d("gg", S, b);
d("GGGG", ut, lt);
d("gggg", ut, lt);
d("GGGGG", Ue, Ce);
d("ggggg", Ue, Ce);
ve(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, s, r) {
    t[r.substr(0, 2)] = m(e)
});
ve(["gg", "GG"], function(e, t, s, r) {
    t[r] = l.parseTwoDigitYear(e)
});
function bn(e) {
    return cs.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
}
function xn(e) {
    return cs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
}
function Nn() {
    return Z(this.year(), 1, 4)
}
function Wn() {
    return Z(this.isoWeekYear(), 1, 4)
}
function Pn() {
    var e = this.localeData()._week;
    return Z(this.year(), e.dow, e.doy)
}
function Rn() {
    var e = this.localeData()._week;
    return Z(this.weekYear(), e.dow, e.doy)
}
function cs(e, t, s, r, a) {
    var n;
    return e == null ? ke(this, r, a).year : (n = Z(e, r, a),
    t > n && (t = n),
    Fn.call(this, e, t, s, r, a))
}
function Fn(e, t, s, r, a) {
    var n = Zt(e, t, s, r, a)
      , i = we(n.year, 0, n.dayOfYear);
    return this.year(i.getUTCFullYear()),
    this.month(i.getUTCMonth()),
    this.date(i.getUTCDate()),
    this
}
h("Q", 0, "Qo", "quarter");
d("Q", Ct);
g("Q", function(e, t) {
    t[G] = (m(e) - 1) * 3
});
function Cn(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
}
h("D", ["DD", 2], "Do", "date");
d("D", S, he);
d("DD", S, b);
d("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
});
g(["D", "DD"], L);
g("Do", function(e, t) {
    t[L] = m(e.match(S)[0])
});
var ms = fe("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", Le);
d("DDDD", Lt);
g(["DDD", "DDDD"], function(e, t, s) {
    s._dayOfYear = m(e)
});
function Ln(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return e == null ? t : this.add(e - t, "d")
}
h("m", ["mm", 2], 0, "minute");
d("m", S, dt);
d("mm", S, b);
g(["m", "mm"], P);
var Un = fe("Minutes", !1);
h("s", ["ss", 2], 0, "second");
d("s", S, dt);
d("ss", S, b);
g(["s", "ss"], j);
var In = fe("Seconds", !1);
h("S", 0, 0, function() {
    return ~~(this.millisecond() / 100)
});
h(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10)
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10
});
h(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100
});
h(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3
});
h(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4
});
h(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5
});
h(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6
});
d("S", Le, Ct);
d("SS", Le, b);
d("SSS", Le, Lt);
var X, _s;
for (X = "SSSS"; X.length <= 9; X += "S")
    d(X, de);
function Hn(e, t) {
    t[te] = m(("0." + e) * 1e3)
}
for (X = "S"; X.length <= 9; X += "S")
    g(X, Hn);
_s = fe("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function En() {
    return this._isUTC ? "UTC" : ""
}
function An() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}
var o = Se.prototype;
o.add = Pa;
o.calendar = Ha;
o.clone = Ea;
o.diff = $a;
o.endOf = rn;
o.format = Qa;
o.from = Xa;
o.fromNow = Ka;
o.to = en;
o.toNow = tn;
o.get = Js;
o.invalidAt = cn;
o.isAfter = Aa;
o.isBefore = Va;
o.isBetween = Ga;
o.isSame = ja;
o.isSameOrAfter = za;
o.isSameOrBefore = Za;
o.isValid = hn;
o.lang = ls;
o.locale = os;
o.localeData = us;
o.max = da;
o.min = ua;
o.parsingFlags = fn;
o.set = Qs;
o.startOf = sn;
o.subtract = Ra;
o.toArray = ln;
o.toObject = un;
o.toDate = on;
o.toISOString = Ba;
o.inspect = Ja;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">"
}
);
o.toJSON = dn;
o.toString = qa;
o.unix = nn;
o.valueOf = an;
o.creationData = mn;
o.eraName = kn;
o.eraNarrow = gn;
o.eraAbbr = Mn;
o.eraYear = Sn;
o.year = Ht;
o.isLeapYear = Bs;
o.weekYear = bn;
o.isoWeekYear = xn;
o.quarter = o.quarters = Cn;
o.month = jt;
o.daysInMonth = ir;
o.week = o.weeks = mr;
o.isoWeek = o.isoWeeks = _r;
o.weeksInYear = Pn;
o.weeksInWeekYear = Rn;
o.isoWeeksInYear = Nn;
o.isoWeeksInISOWeekYear = Wn;
o.date = ms;
o.day = o.days = br;
o.weekday = xr;
o.isoWeekday = Nr;
o.dayOfYear = Ln;
o.hour = o.hours = Ur;
o.minute = o.minutes = Un;
o.second = o.seconds = In;
o.millisecond = o.milliseconds = _s;
o.utcOffset = ga;
o.utc = Sa;
o.local = Da;
o.parseZone = va;
o.hasAlignedHourOffset = pa;
o.isDST = Ya;
o.isLocal = Ta;
o.isUtcOffset = ba;
o.isUtc = rs;
o.isUTC = rs;
o.zoneAbbr = En;
o.zoneName = An;
o.dates = N("dates accessor is deprecated. Use date instead.", ms);
o.months = N("months accessor is deprecated. Use month instead", jt);
o.years = N("years accessor is deprecated. Use year instead", Ht);
o.zone = N("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ma);
o.isDSTShifted = N("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Oa);
function Vn(e) {
    return M(e * 1e3)
}
function Gn() {
    return M.apply(null, arguments).parseZone()
}
function ys(e) {
    return e
}
var k = nt.prototype;
k.calendar = Ts;
k.longDateFormat = Ws;
k.invalidDate = Rs;
k.ordinal = Ls;
k.preparse = ys;
k.postformat = ys;
k.relativeTime = Is;
k.pastFuture = Hs;
k.set = Ys;
k.eras = _n;
k.erasParse = yn;
k.erasConvertYear = wn;
k.erasAbbrRegex = vn;
k.erasNameRegex = Dn;
k.erasNarrowRegex = pn;
k.months = sr;
k.monthsShort = rr;
k.monthsParse = nr;
k.monthsRegex = lr;
k.monthsShortRegex = or;
k.week = dr;
k.firstDayOfYear = cr;
k.firstDayOfWeek = fr;
k.weekdays = vr;
k.weekdaysMin = Yr;
k.weekdaysShort = pr;
k.weekdaysParse = Tr;
k.weekdaysRegex = Wr;
k.weekdaysShortRegex = Pr;
k.weekdaysMinRegex = Rr;
k.isPM = Cr;
k.meridiem = Ir;
function Re(e, t, s, r) {
    var a = q()
      , n = I().set(r, t);
    return a[s](n, e)
}
function ws(e, t, s) {
    if ($(e) && (t = e,
    e = void 0),
    e = e || "",
    t != null)
        return Re(e, t, s, "month");
    var r, a = [];
    for (r = 0; r < 12; r++)
        a[r] = Re(e, r, s, "month");
    return a
}
function vt(e, t, s, r) {
    typeof e == "boolean" ? ($(t) && (s = t,
    t = void 0),
    t = t || "") : (t = e,
    s = t,
    e = !1,
    $(t) && (s = t,
    t = void 0),
    t = t || "");
    var a = q(), n = e ? a._week.dow : 0, i, u = [];
    if (s != null)
        return Re(t, (s + n) % 7, r, "day");
    for (i = 0; i < 7; i++)
        u[i] = Re(t, (i + n) % 7, r, "day");
    return u
}
function jn(e, t) {
    return ws(e, t, "months")
}
function zn(e, t) {
    return ws(e, t, "monthsShort")
}
function Zn(e, t, s) {
    return vt(e, t, s, "weekdays")
}
function $n(e, t, s) {
    return vt(e, t, s, "weekdaysShort")
}
function qn(e, t, s) {
    return vt(e, t, s, "weekdaysMin")
}
K("en", {
    eras: [{
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
    }, {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
        var t = e % 10
          , s = m(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
        return e + s
    }
});
l.lang = N("moment.lang is deprecated. Use moment.locale instead.", K);
l.langData = N("moment.langData is deprecated. Use moment.localeData instead.", q);
var A = Math.abs;
function Bn() {
    var e = this._data;
    return this._milliseconds = A(this._milliseconds),
    this._days = A(this._days),
    this._months = A(this._months),
    e.milliseconds = A(e.milliseconds),
    e.seconds = A(e.seconds),
    e.minutes = A(e.minutes),
    e.hours = A(e.hours),
    e.months = A(e.months),
    e.years = A(e.years),
    this
}
function ks(e, t, s, r) {
    var a = C(t, s);
    return e._milliseconds += r * a._milliseconds,
    e._days += r * a._days,
    e._months += r * a._months,
    e._bubble()
}
function Jn(e, t) {
    return ks(this, e, t, 1)
}
function Qn(e, t) {
    return ks(this, e, t, -1)
}
function xt(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
}
function Xn() {
    var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, f;
    return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += xt(tt(s) + t) * 864e5,
    t = 0,
    s = 0),
    r.milliseconds = e % 1e3,
    a = x(e / 1e3),
    r.seconds = a % 60,
    n = x(a / 60),
    r.minutes = n % 60,
    i = x(n / 60),
    r.hours = i % 24,
    t += x(i / 24),
    f = x(gs(t)),
    s += f,
    t -= xt(tt(f)),
    u = x(s / 12),
    s %= 12,
    r.days = t,
    r.months = s,
    r.years = u,
    this
}
function gs(e) {
    return e * 4800 / 146097
}
function tt(e) {
    return e * 146097 / 4800
}
function Kn(e) {
    if (!this.isValid())
        return NaN;
    var t, s, r = this._milliseconds;
    if (e = W(e),
    e === "month" || e === "quarter" || e === "year")
        switch (t = this._days + r / 864e5,
        s = this._months + gs(t),
        e) {
        case "month":
            return s;
        case "quarter":
            return s / 3;
        case "year":
            return s / 12
        }
    else
        switch (t = this._days + Math.round(tt(this._months)),
        e) {
        case "week":
            return t / 7 + r / 6048e5;
        case "day":
            return t + r / 864e5;
        case "hour":
            return t * 24 + r / 36e5;
        case "minute":
            return t * 1440 + r / 6e4;
        case "second":
            return t * 86400 + r / 1e3;
        case "millisecond":
            return Math.floor(t * 864e5) + r;
        default:
            throw new Error("Unknown unit " + e)
        }
}
function B(e) {
    return function() {
        return this.as(e)
    }
}
var Ms = B("ms")
  , ei = B("s")
  , ti = B("m")
  , si = B("h")
  , ri = B("d")
  , ai = B("w")
  , ni = B("M")
  , ii = B("Q")
  , oi = B("y")
  , li = Ms;
function ui() {
    return C(this)
}
function di(e) {
    return e = W(e),
    this.isValid() ? this[e + "s"]() : NaN
}
function re(e) {
    return function() {
        return this.isValid() ? this._data[e] : NaN
    }
}
var hi = re("milliseconds")
  , fi = re("seconds")
  , ci = re("minutes")
  , mi = re("hours")
  , _i = re("days")
  , yi = re("months")
  , wi = re("years");
function ki() {
    return x(this.days() / 7)
}
var V = Math.round
  , ie = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
};
function gi(e, t, s, r, a) {
    return a.relativeTime(t || 1, !!s, e, r)
}
function Mi(e, t, s, r) {
    var a = C(e).abs()
      , n = V(a.as("s"))
      , i = V(a.as("m"))
      , u = V(a.as("h"))
      , f = V(a.as("d"))
      , _ = V(a.as("M"))
      , O = V(a.as("w"))
      , E = V(a.as("y"))
      , J = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || f <= 1 && ["d"] || f < s.d && ["dd", f];
    return s.w != null && (J = J || O <= 1 && ["w"] || O < s.w && ["ww", O]),
    J = J || _ <= 1 && ["M"] || _ < s.M && ["MM", _] || E <= 1 && ["y"] || ["yy", E],
    J[2] = t,
    J[3] = +e > 0,
    J[4] = r,
    gi.apply(null, J)
}
function Si(e) {
    return e === void 0 ? V : typeof e == "function" ? (V = e,
    !0) : !1
}
function Di(e, t) {
    return ie[e] === void 0 ? !1 : t === void 0 ? ie[e] : (ie[e] = t,
    e === "s" && (ie.ss = t - 1),
    !0)
}
function vi(e, t) {
    if (!this.isValid())
        return this.localeData().invalidDate();
    var s = !1, r = ie, a, n;
    return typeof e == "object" && (t = e,
    e = !1),
    typeof e == "boolean" && (s = e),
    typeof t == "object" && (r = Object.assign({}, ie, t),
    t.s != null && t.ss == null && (r.ss = t.s - 1)),
    a = this.localeData(),
    n = Mi(this, !s, r, a),
    s && (n = a.pastFuture(+this, n)),
    a.postformat(n)
}
var qe = Math.abs;
function ae(e) {
    return (e > 0) - (e < 0) || +e
}
function je() {
    if (!this.isValid())
        return this.localeData().invalidDate();
    var e = qe(this._milliseconds) / 1e3, t = qe(this._days), s = qe(this._months), r, a, n, i, u = this.asSeconds(), f, _, O, E;
    return u ? (r = x(e / 60),
    a = x(r / 60),
    e %= 60,
    r %= 60,
    n = x(s / 12),
    s %= 12,
    i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "",
    f = u < 0 ? "-" : "",
    _ = ae(this._months) !== ae(u) ? "-" : "",
    O = ae(this._days) !== ae(u) ? "-" : "",
    E = ae(this._milliseconds) !== ae(u) ? "-" : "",
    f + "P" + (n ? _ + n + "Y" : "") + (s ? _ + s + "M" : "") + (t ? O + t + "D" : "") + (a || r || e ? "T" : "") + (a ? E + a + "H" : "") + (r ? E + r + "M" : "") + (e ? E + i + "S" : "")) : "P0D"
}
var y = Ve.prototype;
y.isValid = _a;
y.abs = Bn;
y.add = Jn;
y.subtract = Qn;
y.as = Kn;
y.asMilliseconds = Ms;
y.asSeconds = ei;
y.asMinutes = ti;
y.asHours = si;
y.asDays = ri;
y.asWeeks = ai;
y.asMonths = ni;
y.asQuarters = ii;
y.asYears = oi;
y.valueOf = li;
y._bubble = Xn;
y.clone = ui;
y.get = di;
y.milliseconds = hi;
y.seconds = fi;
y.minutes = ci;
y.hours = mi;
y.days = _i;
y.weeks = ki;
y.months = yi;
y.years = wi;
y.humanize = vi;
y.toISOString = je;
y.toString = je;
y.toJSON = je;
y.locale = os;
y.localeData = us;
y.toIsoString = N("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", je);
y.lang = ls;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
d("x", Ie);
d("X", Gs);
g("X", function(e, t, s) {
    s._d = new Date(parseFloat(e) * 1e3)
});
g("x", function(e, t, s) {
    s._d = new Date(m(e))
});
//! moment.js
l.version = "2.30.1";
vs(M);
l.fn = o;
l.min = ha;
l.max = fa;
l.now = ca;
l.utc = I;
l.unix = Vn;
l.months = jn;
l.isDate = Me;
l.locale = K;
l.invalid = Fe;
l.duration = C;
l.isMoment = F;
l.weekdays = Zn;
l.parseZone = Gn;
l.localeData = q;
l.isDuration = Te;
l.monthsShort = zn;
l.weekdaysMin = qn;
l.defineLocale = _t;
l.updateLocale = Vr;
l.locales = Gr;
l.weekdaysShort = $n;
l.normalizeUnits = W;
l.relativeTimeRounding = Si;
l.relativeTimeThreshold = Di;
l.calendarFormat = Ia;
l.prototype = o;
l.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
};
export {bi as b, Ti as e, l as h};
