var Li = Object.defineProperty;
var Ti = (t, e, a) => e in t ? Li(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var Ce = (t, e, a) => Ti(t, typeof e != "symbol" ? e + "" : e, a);
var ot, ie, ti, Le, Lt, ii, ai, ri, vt, ht, ft, Ve = {}, ni = [], Di = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, st = Array.isArray;
function ke(t, e) {
  for (var a in e) t[a] = e[a];
  return t;
}
function wt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Pi(t, e, a) {
  var r, o, n, p = {};
  for (n in e) n == "key" ? r = e[n] : n == "ref" ? o = e[n] : p[n] = e[n];
  if (arguments.length > 2 && (p.children = arguments.length > 3 ? ot.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) p[n] === void 0 && (p[n] = t.defaultProps[n]);
  return it(t, p, r, o, null);
}
function it(t, e, a, r, o) {
  var n = { type: t, props: e, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ti, __i: -1, __u: 0 };
  return o == null && ie.vnode != null && ie.vnode(n), n;
}
function we(t) {
  return t.children;
}
function at(t, e) {
  this.props = t, this.context = e;
}
function Pe(t, e) {
  if (e == null) return t.__ ? Pe(t.__, t.__i + 1) : null;
  for (var a; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) return a.__e;
  return typeof t.type == "function" ? Pe(t) : null;
}
function oi(t) {
  var e, a;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) {
      t.__e = t.__c.base = a.__e;
      break;
    }
    return oi(t);
  }
}
function Tt(t) {
  (!t.__d && (t.__d = !0) && Le.push(t) && !nt.__r++ || Lt !== ie.debounceRendering) && ((Lt = ie.debounceRendering) || ii)(nt);
}
function nt() {
  for (var t, e, a, r, o, n, p, s = 1; Le.length; ) Le.length > s && Le.sort(ai), t = Le.shift(), s = Le.length, t.__d && (a = void 0, o = (r = (e = t).__v).__e, n = [], p = [], e.__P && ((a = ke({}, r)).__v = r.__v + 1, ie.vnode && ie.vnode(a), yt(e.__P, a, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, n, o ?? Pe(r), !!(32 & r.__u), p), a.__v = r.__v, a.__.__k[a.__i] = a, pi(n, a, p), a.__e != o && oi(a)));
  nt.__r = 0;
}
function si(t, e, a, r, o, n, p, s, g, c, u) {
  var l, f, h, m, x, _, z = r && r.__k || ni, M = e.length;
  for (g = Ei(a, e, z, g, M), l = 0; l < M; l++) (h = a.__k[l]) != null && (f = h.__i === -1 ? Ve : z[h.__i] || Ve, h.__i = l, _ = yt(t, h, f, o, n, p, s, g, c, u), m = h.__e, h.ref && f.ref != h.ref && (f.ref && kt(f.ref, null, h), u.push(h.ref, h.__c || m, h)), x == null && m != null && (x = m), 4 & h.__u || f.__k === h.__k ? g = li(h, g, t) : typeof h.type == "function" && _ !== void 0 ? g = _ : m && (g = m.nextSibling), h.__u &= -7);
  return a.__e = x, g;
}
function Ei(t, e, a, r, o) {
  var n, p, s, g, c, u = a.length, l = u, f = 0;
  for (t.__k = new Array(o), n = 0; n < o; n++) (p = e[n]) != null && typeof p != "boolean" && typeof p != "function" ? (g = n + f, (p = t.__k[n] = typeof p == "string" || typeof p == "number" || typeof p == "bigint" || p.constructor == String ? it(null, p, null, null, null) : st(p) ? it(we, { children: p }, null, null, null) : p.constructor === void 0 && p.__b > 0 ? it(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p).__ = t, p.__b = t.__b + 1, s = null, (c = p.__i = Bi(p, a, g, l)) !== -1 && (l--, (s = a[c]) && (s.__u |= 2)), s == null || s.__v === null ? (c == -1 && (o > u ? f-- : o < u && f++), typeof p.type != "function" && (p.__u |= 4)) : c != g && (c == g - 1 ? f-- : c == g + 1 ? f++ : (c > g ? f-- : f++, p.__u |= 4))) : t.__k[n] = null;
  if (l) for (n = 0; n < u; n++) (s = a[n]) != null && !(2 & s.__u) && (s.__e == r && (r = Pe(s)), di(s, s));
  return r;
}
function li(t, e, a) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = li(r[o], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !a.contains(e) && (e = Pe(t)), a.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Bi(t, e, a, r) {
  var o, n, p = t.key, s = t.type, g = e[a];
  if (g === null && t.key == null || g && p == g.key && s === g.type && !(2 & g.__u)) return a;
  if (r > (g != null && !(2 & g.__u) ? 1 : 0)) for (o = a - 1, n = a + 1; o >= 0 || n < e.length; ) {
    if (o >= 0) {
      if ((g = e[o]) && !(2 & g.__u) && p == g.key && s === g.type) return o;
      o--;
    }
    if (n < e.length) {
      if ((g = e[n]) && !(2 & g.__u) && p == g.key && s === g.type) return n;
      n++;
    }
  }
  return -1;
}
function Dt(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || Di.test(e) ? a : a + "px";
}
function Qe(t, e, a, r, o) {
  var n;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) a && e in a || Dt(t.style, e, "");
    if (a) for (e in a) r && a[e] === r[e] || Dt(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(ri, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = a, a ? r ? a.t = r.t : (a.t = vt, t.addEventListener(e, n ? ft : ht, n)) : t.removeEventListener(e, n ? ft : ht, n);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = a ?? "";
      break e;
    } catch {
    }
    typeof a == "function" || (a == null || a === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && a == 1 ? "" : a));
  }
}
function Pt(t) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + t];
      if (e.u == null) e.u = vt++;
      else if (e.u < a.t) return;
      return a(ie.event ? ie.event(e) : e);
    }
  };
}
function yt(t, e, a, r, o, n, p, s, g, c) {
  var u, l, f, h, m, x, _, z, M, C, y, d, k, I, A, R, F, D = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (g = !!(32 & a.__u), n = [s = e.__e = a.__e]), (u = ie.__b) && u(e);
  e: if (typeof D == "function") try {
    if (z = e.props, M = "prototype" in D && D.prototype.render, C = (u = D.contextType) && r[u.__c], y = u ? C ? C.props.value : u.__ : r, a.__c ? _ = (l = e.__c = a.__c).__ = l.__E : (M ? e.__c = l = new D(z, y) : (e.__c = l = new at(z, y), l.constructor = D, l.render = Ri), C && C.sub(l), l.props = z, l.state || (l.state = {}), l.context = y, l.__n = r, f = l.__d = !0, l.__h = [], l._sb = []), M && l.__s == null && (l.__s = l.state), M && D.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ke({}, l.__s)), ke(l.__s, D.getDerivedStateFromProps(z, l.__s))), h = l.props, m = l.state, l.__v = e, f) M && D.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), M && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (M && D.getDerivedStateFromProps == null && z !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(z, y), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(z, l.__s, y) === !1 || e.__v == a.__v)) {
        for (e.__v != a.__v && (l.props = z, l.state = l.__s, l.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(P) {
          P && (P.__ = e);
        }), d = 0; d < l._sb.length; d++) l.__h.push(l._sb[d]);
        l._sb = [], l.__h.length && p.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(z, l.__s, y), M && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(h, m, x);
      });
    }
    if (l.context = y, l.props = z, l.__P = t, l.__e = !1, k = ie.__r, I = 0, M) {
      for (l.state = l.__s, l.__d = !1, k && k(e), u = l.render(l.props, l.state, l.context), A = 0; A < l._sb.length; A++) l.__h.push(l._sb[A]);
      l._sb = [];
    } else do
      l.__d = !1, k && k(e), u = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++I < 25);
    l.state = l.__s, l.getChildContext != null && (r = ke(ke({}, r), l.getChildContext())), M && !f && l.getSnapshotBeforeUpdate != null && (x = l.getSnapshotBeforeUpdate(h, m)), R = u, u != null && u.type === we && u.key == null && (R = ci(u.props.children)), s = si(t, st(R) ? R : [R], e, a, r, o, n, p, s, g, c), l.base = e.__e, e.__u &= -161, l.__h.length && p.push(l), _ && (l.__E = l.__ = null);
  } catch (P) {
    if (e.__v = null, g || n != null) if (P.then) {
      for (e.__u |= g ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      n[n.indexOf(s)] = null, e.__e = s;
    } else for (F = n.length; F--; ) wt(n[F]);
    else e.__e = a.__e, e.__k = a.__k;
    ie.__e(P, e, a);
  }
  else n == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : s = e.__e = Ui(a.__e, e, a, r, o, n, p, g, c);
  return (u = ie.diffed) && u(e), 128 & e.__u ? void 0 : s;
}
function pi(t, e, a) {
  for (var r = 0; r < a.length; r++) kt(a[r], a[++r], a[++r]);
  ie.__c && ie.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      ie.__e(n, o.__v);
    }
  });
}
function ci(t) {
  return typeof t != "object" || t == null ? t : st(t) ? t.map(ci) : ke({}, t);
}
function Ui(t, e, a, r, o, n, p, s, g) {
  var c, u, l, f, h, m, x, _ = a.props, z = e.props, M = e.type;
  if (M == "svg" ? o = "http://www.w3.org/2000/svg" : M == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (c = 0; c < n.length; c++) if ((h = n[c]) && "setAttribute" in h == !!M && (M ? h.localName == M : h.nodeType == 3)) {
      t = h, n[c] = null;
      break;
    }
  }
  if (t == null) {
    if (M == null) return document.createTextNode(z);
    t = document.createElementNS(o, M, z.is && z), s && (ie.__m && ie.__m(e, n), s = !1), n = null;
  }
  if (M === null) _ === z || s && t.data === z || (t.data = z);
  else {
    if (n = n && ot.call(t.childNodes), _ = a.props || Ve, !s && n != null) for (_ = {}, c = 0; c < t.attributes.length; c++) _[(h = t.attributes[c]).name] = h.value;
    for (c in _) if (h = _[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") l = h;
      else if (!(c in z)) {
        if (c == "value" && "defaultValue" in z || c == "checked" && "defaultChecked" in z) continue;
        Qe(t, c, null, h, o);
      }
    }
    for (c in z) h = z[c], c == "children" ? f = h : c == "dangerouslySetInnerHTML" ? u = h : c == "value" ? m = h : c == "checked" ? x = h : s && typeof h != "function" || _[c] === h || Qe(t, c, h, _[c], o);
    if (u) s || l && (u.__html === l.__html || u.__html === t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
    else if (l && (t.innerHTML = ""), si(e.type === "template" ? t.content : t, st(f) ? f : [f], e, a, r, M == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, p, n ? n[0] : a.__k && Pe(a, 0), s, g), n != null) for (c = n.length; c--; ) wt(n[c]);
    s || (c = "value", M == "progress" && m == null ? t.removeAttribute("value") : m !== void 0 && (m !== t[c] || M == "progress" && !m || M == "option" && m !== _[c]) && Qe(t, c, m, _[c], o), c = "checked", x !== void 0 && x !== t[c] && Qe(t, c, x, _[c], o));
  }
  return t;
}
function kt(t, e, a) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    ie.__e(o, a);
  }
}
function di(t, e, a) {
  var r, o;
  if (ie.unmount && ie.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || kt(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      ie.__e(n, e);
    }
    r.base = r.__P = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && di(r[o], e, a || typeof t.type != "function");
  a || wt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ri(t, e, a) {
  return this.constructor(t, a);
}
function Et(t, e, a) {
  var r, o, n, p;
  e == document && (e = document.documentElement), ie.__ && ie.__(t, e), o = (r = !1) ? null : e.__k, n = [], p = [], yt(e, t = e.__k = Pi(we, null, [t]), o || Ve, Ve, e.namespaceURI, o ? null : e.firstChild ? ot.call(e.childNodes) : null, n, o ? o.__e : e.firstChild, r, p), pi(n, t, p);
}
ot = ni.slice, ie = { __e: function(t, e, a, r) {
  for (var o, n, p; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(t)), p = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), p = o.__d), p) return o.__E = o;
  } catch (s) {
    t = s;
  }
  throw t;
} }, ti = 0, at.prototype.setState = function(t, e) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ke({}, this.state), typeof t == "function" && (t = t(ke({}, a), this.props)), t && ke(a, t), t != null && this.__v && (e && this._sb.push(e), Tt(this));
}, at.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Tt(this));
}, at.prototype.render = we, Le = [], ii = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ai = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, nt.__r = 0, ri = /(PointerCapture)$|Capture$/i, vt = 0, ht = Pt(!1), ft = Pt(!0);
var Fi = 0;
function i(t, e, a, r, o, n) {
  e || (e = {});
  var p, s, g = e;
  if ("ref" in g) for (s in g = {}, e) s == "ref" ? p = e[s] : g[s] = e[s];
  var c = { type: t, props: g, key: a, ref: p, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Fi, __i: -1, __u: 0, __source: o, __self: n };
  if (typeof t == "function" && (p = t.defaultProps)) for (s in p) g[s] === void 0 && (g[s] = p[s]);
  return ie.vnode && ie.vnode(c), c;
}
var We, de, dt, Bt, qe = 0, ui = [], he = ie, Ut = he.__b, Rt = he.__r, Ft = he.diffed, Ht = he.__c, Ot = he.unmount, Vt = he.__;
function _t(t, e) {
  he.__h && he.__h(de, t, qe || e), qe = 0;
  var a = de.__H || (de.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function L(t) {
  return qe = 1, Hi(hi, t);
}
function Hi(t, e, a) {
  var r = _t(We++, 2);
  if (r.t = t, !r.__c && (r.__ = [hi(void 0, e), function(s) {
    var g = r.__N ? r.__N[0] : r.__[0], c = r.t(g, s);
    g !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = de, !de.__f)) {
    var o = function(s, g, c) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (u.every(function(f) {
        return !f.__N;
      })) return !n || n.call(this, s, g, c);
      var l = r.__c.props !== s;
      return u.forEach(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (l = !0);
        }
      }), n && n.call(this, s, g, c) || l;
    };
    de.__f = !0;
    var n = de.shouldComponentUpdate, p = de.componentWillUpdate;
    de.componentWillUpdate = function(s, g, c) {
      if (this.__e) {
        var u = n;
        n = void 0, o(s, g, c), n = u;
      }
      p && p.call(this, s, g, c);
    }, de.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Z(t, e) {
  var a = _t(We++, 3);
  !he.__s && mi(a.__H, e) && (a.__ = t, a.u = e, de.__H.__h.push(a));
}
function re(t) {
  return qe = 5, $e(function() {
    return { current: t };
  }, []);
}
function $e(t, e) {
  var a = _t(We++, 7);
  return mi(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function J(t, e) {
  return qe = 8, $e(function() {
    return t;
  }, e);
}
function Oi() {
  for (var t; t = ui.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(rt), t.__H.__h.forEach(gt), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], he.__e(e, t.__v);
  }
}
he.__b = function(t) {
  de = null, Ut && Ut(t);
}, he.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Vt && Vt(t, e);
}, he.__r = function(t) {
  Rt && Rt(t), We = 0;
  var e = (de = t.__c).__H;
  e && (dt === de ? (e.__h = [], de.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.forEach(rt), e.__h.forEach(gt), e.__h = [], We = 0)), dt = de;
}, he.diffed = function(t) {
  Ft && Ft(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ui.push(e) !== 1 && Bt === he.requestAnimationFrame || ((Bt = he.requestAnimationFrame) || Vi)(Oi)), e.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), dt = de = null;
}, he.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(rt), a.__h = a.__h.filter(function(r) {
        return !r.__ || gt(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], he.__e(r, a.__v);
    }
  }), Ht && Ht(t, e);
}, he.unmount = function(t) {
  Ot && Ot(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.forEach(function(r) {
    try {
      rt(r);
    } catch (o) {
      e = o;
    }
  }), a.__H = void 0, e && he.__e(e, a.__v));
};
var Wt = typeof requestAnimationFrame == "function";
function Vi(t) {
  var e, a = function() {
    clearTimeout(r), Wt && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(a, 100);
  Wt && (e = requestAnimationFrame(a));
}
function rt(t) {
  var e = de, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), de = e;
}
function gt(t) {
  var e = de;
  t.__c = t.__(), de = e;
}
function mi(t, e) {
  return !t || t.length !== e.length || e.some(function(a, r) {
    return a !== t[r];
  });
}
function hi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function Wi(t, e) {
  const a = t.body;
  if (!a)
    throw new Error("Response body is null");
  const r = a.getReader(), o = new TextDecoder("utf-8");
  let n = "";
  try {
    for (; ; ) {
      const { done: p, value: s } = await r.read();
      if (p)
        break;
      n += o.decode(s, { stream: !0 });
      const g = n.split(/\r?\n/);
      n = g.pop() || "";
      for (const c of g) {
        const u = c.trim();
        if (!(!u || u.startsWith(":")) && u.startsWith("data:")) {
          const l = u.slice(5).trim();
          if (l === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const f = JSON.parse(l);
            if (typeof f == "string")
              e.onChunk(f);
            else if (f && typeof f == "object") {
              (f.chunk || f.token || f.content || f.text) && e.onChunk(f.chunk || f.token || f.content || f.text), f.sources && Array.isArray(f.sources) && e.onSources && e.onSources(f.sources), f.suggestedQuestions && Array.isArray(f.suggestedQuestions) && e.onSuggestedQuestions && e.onSuggestedQuestions(f.suggestedQuestions), e.onConversationId && (f.conversation_id !== void 0 || f.conversationId !== void 0) && e.onConversationId(
                f.conversation_id ?? f.conversationId
              );
              const h = f.ticket_number ?? f.ticketNumber;
              e.onTicketNumber && h !== void 0 && h !== null && String(h).trim() !== "" && String(h).trim() !== "undefined" && String(h).trim() !== "null" && e.onTicketNumber(
                String(h).trim()
              ), e.onActionTrigger && f.triggered_action && typeof f.triggered_action == "object" && e.onActionTrigger(f.triggered_action);
            }
          } catch {
            e.onChunk(l);
          }
        }
      }
    }
    e.onDone && e.onDone();
  } catch (p) {
    if (e.onError)
      e.onError(p);
    else
      throw p;
  }
}
class fi extends Error {
  constructor(a, r = 60, o) {
    super(a);
    Ce(this, "retryAfterSeconds");
    Ce(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = r, this.code = o;
  }
}
class gi extends Error {
  constructor(a, r, o, n) {
    super(a);
    Ce(this, "status");
    Ce(this, "code");
    Ce(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = r, this.code = o, this.retryAfterSeconds = n;
  }
}
function qi(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function Ki(t, e) {
  const a = await t.json().catch(() => null);
  bi(t.status, a, e, t.headers.get("Retry-After"));
}
function bi(t, e, a, r) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, n = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, p = qi((e == null ? void 0 : e.retry_after) ?? r, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new fi(n, p, o) : new gi(n, t, o, p);
}
function ji(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function Nt(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Zi(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return Nt(e.of(t));
  } catch {
    return null;
  }
}
function Gi() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const r = JSON.parse(a);
        t = ji(
          r.country_code ?? r.countryCode ?? r.visitor_country_code ?? r.visitorCountryCode ?? r.country
        ), e = Nt(
          r.country_name ?? r.countryName ?? r.visitor_country_name ?? r.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Zi(t)), { code: t, name: e };
}
const Yi = [
  {
    keywords: ["lozink", "password", "reset", "zaboravljena"],
    reply: `Lozinku možete vrlo jednostavno resetovati prateći ove korake:

1. Idite na stranicu za prijavu i kliknite na **"Zaboravljena lozinka"**.
2. Unesite email adresu povezanu sa vašim nalogom.
3. Otvorite email koji vam pošaljemo i kliknite na sigurnosni link za resetovanje.

*Napomena: Link za resetovanje ističe nakon 30 minuta.*`,
    sources: [
      { id: "s1", title: "Centar za pomoć — Sigurnost naloga", url: "#" }
    ],
    suggestions: ["Šta ako ne primim email?", "Kako omogućiti 2FA?"]
  },
  {
    keywords: ["cijena", "paket", "pretplat", "plan", "pricing", "pro"],
    reply: `Naš **Pro paket** nudi sve što je potrebno za rast vašeg poslovanja:

- **Neograničene AI konverzacije** sa prilagođenom bazom znanja
- **Prioritetna podrška** 24/7
- **Prilagođeni brending** (vaš logo i boje)
- **Do 10 članova tima** sa rolama i dozvolama

Cijena je **€49/mjesečno** uz 20% popusta za godišnje plaćanje.`,
    sources: [
      { id: "s2", title: "Cjenovnik i paketi usluga", url: "#" }
    ],
    suggestions: ["Probaj besplatno", "Kako funkcionira plaćanje?"]
  },
  {
    keywords: ["integracij", "embed", "wordpress", "shopify", "kod", "widget"],
    reply: `Integracija widgeta na vašu web stranicu traje manje od **2 minute**:

Jednostavno dodajte sljedeći kod prije zatvaranja \`</body>\` taga:

\`\`\`html
<script 
  src="https://cdn.pitaj.io/widget.js" 
  data-widget-id="abc123" 
  defer>
<\/script>
\`\`\`

Widget automatski izolira svoje stilove koristeći **Shadow DOM**, tako da neće uticati na dizajn vaše web stranice.`,
    sources: [
      { id: "s3", title: "Vodič za integraciju", url: "#" }
    ],
    suggestions: ["Podržava li WordPress?", "Mogu li promijeniti boje?"]
  }
], qt = [
  "Razumijem vaše pitanje! Naš AI asistent kontinuirano uči iz baze znanja kako bi vam pružio najtačniji odgovor.",
  "Odlično pitanje. Provjerio sam našu bazu znanja i evo preporučenih informacija za vaš upit.",
  "Drago mi je što mogu pomoći! Ako vam je potrebno detaljnije pojašnjenje ili kontakt sa timom, slobodno javite."
];
async function Qi(t, e, a, r) {
  const o = t.toLowerCase(), n = (r == null ? void 0 : r.action) || (a && a.length > 0 ? a[0] : null);
  if (n && e.onActionTrigger) {
    const h = (!!(n.widget_id || n.widget || r != null && r.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let m = 0; m < h.length; m++) {
      const x = h[m] + (m < h.length - 1 ? " " : "");
      e.onChunk(x), await new Promise((_) => setTimeout(_, 20));
    }
    e.onActionTrigger({
      id: n.id,
      name: n.name,
      form_id: n.form_id,
      widget_id: n.widget_id,
      widget: n.widget || (r == null ? void 0 : r.widget) || null
    }), e.onDone && e.onDone();
    return;
  }
  const p = Yi.find(
    (l) => l.keywords.some((f) => o.includes(f))
  ), s = p ? p.reply : `${qt[Math.floor(Math.random() * qt.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, g = p ? p.sources : [], c = p ? p.suggestions : ["Kako funkcionira AI model?", "Mogu li dobiti kontakt podrške?"], u = s.split(" ");
  for (let l = 0; l < u.length; l++) {
    const f = u[l] + (l < u.length - 1 ? " " : "");
    e.onChunk(f), await new Promise((h) => setTimeout(h, 20 + Math.random() * 20));
  }
  e.onSources && g.length > 0 && e.onSources(g), e.onSuggestedQuestions && c.length > 0 && e.onSuggestedQuestions(c), e.onDone && e.onDone();
}
async function Ji(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: r,
    message: o,
    forceNewConversation: n,
    apiUrl: p,
    mockMode: s,
    visitorName: g,
    visitorEmail: c,
    visitorPhone: u,
    visitorCountryCode: l,
    visitorCountryName: f,
    actions: h,
    previewDraft: m,
    callbacks: x
  } = t;
  if (s || !e || e === "default") {
    await Qi(o, x, h, m);
    return;
  }
  const _ = (p || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), z = Gi(), M = ji(l) ?? z.code ?? void 0, C = Nt(f) ?? z.name ?? void 0, y = `${_}/api/widget/${e}/chat`, d = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, k = await fetch(y, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: d,
      force_new_conversation: n === !0,
      visitor_id: r,
      visitor_name: g || void 0,
      visitor_email: c || void 0,
      visitor_phone: u || void 0,
      visitor_country_code: M,
      visitor_country_name: C
    })
  });
  if (k.ok || await Ki(k, `API greška (${k.status})`), (k.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Wi(k, x);
  else {
    const A = await k.json(), R = A.answer || A.message || "";
    A.conversation_id !== void 0 && x.onConversationId && x.onConversationId(A.conversation_id);
    const F = A.ticket_number ?? A.ticketNumber;
    if (F != null && String(F).trim() !== "" && String(F).trim() !== "undefined" && String(F).trim() !== "null" && x.onTicketNumber && x.onTicketNumber(String(F).trim()), A.triggered_action && x.onActionTrigger && x.onActionTrigger(A.triggered_action), R && R.trim()) {
      const D = R.split(" ");
      for (let P = 0; P < D.length; P++) {
        const X = D[P] + (P < D.length - 1 ? " " : "");
        x.onChunk(X), await new Promise((oe) => setTimeout(oe, 15));
      }
    }
    x.onDone && x.onDone();
  }
}
async function bt(t) {
  const { widgetId: e, visitorId: a, apiUrl: r, status: o, page: n = 1, perPage: p = 15 } = t, s = (r || "").replace(/\/$/, ""), g = new URLSearchParams({
    visitor_id: a,
    page: String(n),
    per_page: String(p)
  });
  o && g.set("status", o);
  const c = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/tickets?${g}`), u = await c.json().catch(() => null);
  if (!c.ok) throw new Error(u && "error" in u ? u.error : "Tikete nije moguće učitati.");
  const l = (u == null ? void 0 : u.data) || [], f = l.map((x) => ({
    id: x.id,
    ticketNumber: x.ticket_number,
    conversationId: x.conversation_id,
    isResolved: !!x.is_resolved,
    updatedAt: x.updated_at,
    messages: (x.messages || []).map((_) => ({
      id: String(_.id),
      content: _.content,
      sender: _.role === "user" ? "user" : "ai",
      timestamp: _.created_at,
      status: "sent"
    }))
  })), h = u == null ? void 0 : u.meta, m = (h == null ? void 0 : h.has_more) !== void 0 ? !!h.has_more : l.length >= p;
  return {
    tickets: f,
    hasMore: m,
    total: h == null ? void 0 : h.total,
    currentPage: (h == null ? void 0 : h.current_page) ?? n
  };
}
async function Xi(t, e, a) {
  return (await bt({ widgetId: t, visitorId: e, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function ea(t, e, a, r, o) {
  const n = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !n)
    return await new Promise((g) => setTimeout(g, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const p = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await fetch(`${p}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!s.ok) {
    const c = (await s.json().catch(() => ({}))).error || (s.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), u = new Error(c);
    throw u.status = s.status, u;
  }
  return await s.json();
}
const Kt = "pitaj_io_visitor_id", ta = "chat_direkt_visitor_id", ia = "pitaj_io_visitor_meta", aa = "chat_direkt_visitor_meta";
function xi(t) {
  return `pitaj_io_convs_${t}`;
}
function ra(t) {
  return `chat_direkt_convs_${t}`;
}
function na() {
  try {
    let t = localStorage.getItem(Kt) || localStorage.getItem(ta);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Kt, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const oa = [];
function sa(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function la(t) {
  return t.filter((e) => !sa(e)).map((e) => {
    const a = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: a };
  });
}
function Zt(t) {
  try {
    const e = localStorage.getItem(xi(t)) || localStorage.getItem(ra(t));
    if (e) {
      const a = JSON.parse(e);
      if (Array.isArray(a))
        return la(a);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return oa;
}
function pa(t, e) {
  try {
    localStorage.setItem(xi(t), JSON.stringify(e));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function Gt(t) {
  var o, n, p, s, g, c, u, l, f, h, m;
  const e = t.previewDraft, a = (/* @__PURE__ */ new Date()).toISOString(), r = (e == null ? void 0 : e.initialStep) || "idle";
  if (r === "idle") {
    const x = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", _ = (o = e == null ? void 0 : e.action) != null && o.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: x,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: x,
            sender: "ai",
            timestamp: a,
            status: "sent",
            suggestedQuestions: _.length > 0 ? _ : void 0
          }
        ]
      }
    ];
  }
  if (r === "form") {
    const x = (e == null ? void 0 : e.simulatedUserMessage) || ((n = e == null ? void 0 : e.action) == null ? void 0 : n.trigger_hint) || "Pokreni akciju", z = !!((p = e == null ? void 0 : e.action) != null && p.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", M = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((g = e == null ? void 0 : e.action) == null ? void 0 : g.name) || "Pregled akcije",
        preview: z,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: x,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai",
            content: z,
            sender: "ai",
            timestamp: a,
            status: "sent",
            widget: M
          }
        ]
      }
    ];
  }
  if (r === "submitted") {
    const x = (e == null ? void 0 : e.simulatedUserMessage) || ((c = e == null ? void 0 : e.action) == null ? void 0 : c.trigger_hint) || "Pokreni akciju", _ = ((u = e == null ? void 0 : e.form) == null ? void 0 : u.name) || ((l = e == null ? void 0 : e.action) == null ? void 0 : l.name) || "Forma", z = ((f = e == null ? void 0 : e.form) == null ? void 0 : f.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: _,
        preview: z,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: x,
            sender: "user",
            timestamp: new Date(Date.now() - 4e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-form-sub",
            content: `Forma: ${_}
- Status: Uspješno poslano`,
            sender: "user",
            timestamp: new Date(Date.now() - 1e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-success",
            content: z,
            sender: "ai",
            timestamp: a,
            status: "sent"
          }
        ]
      }
    ];
  }
  if (r === "dismissed") {
    const x = (e == null ? void 0 : e.simulatedUserMessage) || ((h = e == null ? void 0 : e.action) == null ? void 0 : h.trigger_hint) || "Pokreni akciju", _ = "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((m = e == null ? void 0 : e.action) == null ? void 0 : m.name) || "Pregled akcije",
        preview: _,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: x,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-dismiss",
            content: _,
            sender: "ai",
            timestamp: a,
            status: "sent"
          }
        ]
      }
    ];
  }
  return [];
}
function ca(t, e) {
  var G, pe, ue, ze, K, ge, je, ye, Me, Te, Ze, Ee, Ge, Ye, Be, Ue, Re;
  const a = !!(t.isPreview || t.previewDraft), [r, o] = L(t), [n, p] = L((e == null ? void 0 : e.startOpen) ?? !1), [s, g] = L(
    (e == null ? void 0 : e.initialScreen) ?? (a ? "conversation" : "new-conversation")
  ), [c, u] = L(
    () => a ? Gt(t) : Zt(t.companyId)
  ), [l, f] = L(() => {
    if (a) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const w = Zt(t.companyId);
      return w.length > 0 ? w[0].id : null;
    }
    return null;
  }), [h, m] = L(!1), [x, _] = L(null), [z, M] = L(null), C = re(na()), [y, d] = L(() => {
    try {
      const w = localStorage.getItem(ia) || localStorage.getItem(aa);
      if (w) {
        const $ = JSON.parse(w), T = {};
        return typeof $.name == "string" && (T.name = $.name), typeof $.email == "string" && (T.email = $.email), typeof $.phone == "string" && (T.phone = $.phone), T;
      }
    } catch (w) {
      console.warn("[Pitaj.io] Error reading visitor meta", w);
    }
    return {};
  }), k = re(e == null ? void 0 : e.emitEvent);
  k.current = e == null ? void 0 : e.emitEvent;
  const I = re(e == null ? void 0 : e.onActionTrigger);
  I.current = e == null ? void 0 : e.onActionTrigger;
  const A = J((w, $) => {
    const T = Number.isFinite(w) ? Math.max(1, Math.floor(w)) : 60;
    _((Y) => Y === null ? T : Math.max(Y, T)), M($ || `Previše zahtjeva. Molimo sačekajte ${T}s.`);
  }, []), R = J((w) => {
    if (w) {
      if (w === "WIDGET_CHAT_DISABLED") {
        o(($) => ({ ...$, chatAvailable: !1 })), M("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (w === "WIDGET_TRANSCRIBE_DISABLED") {
        o(($) => ({ ...$, transcribeAvailable: !1 })), M("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      w === "WIDGET_FORMS_DISABLED" && (o(($) => ({ ...$, formsAvailable: !1, formsEnabled: !1 })), M("Forme su trenutno privremeno nedostupne."));
    }
  }, []), F = J((w, $ = "Došlo je do greške pri obradi zahtjeva.") => {
    var Y, E, ae, ne;
    if (w instanceof fi) {
      A(w.retryAfterSeconds, w.message), (Y = k.current) == null || Y.call(k, "error_occurred", { code: w.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (w instanceof gi) {
      if (w.code === "COUNTRY_BLOCKED") {
        o((W) => ({ ...W, chatAvailable: !1 })), M(w.message || "Pristup nije dozvoljen u vašoj regiji."), (E = k.current) == null || E.call(k, "error_occurred", { status: w.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      R(w.code), M(w.message || $), (ae = k.current) == null || ae.call(k, "error_occurred", { status: w.status, code: w.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let T = w instanceof Error ? w.message : $;
    !T || T === "Failed to fetch" || T.includes("NetworkError") ? T = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : T.includes("404") ? T = "Traženi razgovor ili podaci nisu pronađeni." : (T.includes("500") || T.includes("502") || T.includes("503")) && (T = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), M(T || $), (ne = k.current) == null || ne.call(k, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [A, R]);
  Z(() => {
    r.isPreview || r.mockMode || r.companyId === "preview" || pa(r.companyId, c);
  }, [c, r.companyId, r.isPreview, r.mockMode]), Z(() => {
    if (r.isPreview || r.previewDraft) {
      const w = Gt(r);
      u(w), f("preview-conv-1"), g("conversation");
    }
  }, [
    r.isPreview,
    (G = r.previewDraft) == null ? void 0 : G.initialStep,
    (ue = (pe = r.previewDraft) == null ? void 0 : pe.action) == null ? void 0 : ue.id,
    (K = (ze = r.previewDraft) == null ? void 0 : ze.action) == null ? void 0 : K.name,
    (je = (ge = r.previewDraft) == null ? void 0 : ge.action) == null ? void 0 : je.trigger_hint,
    (Me = (ye = r.previewDraft) == null ? void 0 : ye.form) == null ? void 0 : Me.id,
    (Ze = (Te = r.previewDraft) == null ? void 0 : Te.form) == null ? void 0 : Ze.name,
    (Ge = (Ee = r.previewDraft) == null ? void 0 : Ee.form) == null ? void 0 : Ge.success_message,
    (Be = (Ye = r.previewDraft) == null ? void 0 : Ye.widget) == null ? void 0 : Be.id,
    (Re = (Ue = r.previewDraft) == null ? void 0 : Ue.widget) == null ? void 0 : Re.type
  ]), Z(() => {
    if (x === null || x <= 0) return;
    const w = setInterval(() => {
      _(($) => $ && $ > 1 ? $ - 1 : null);
    }, 1e3);
    return () => clearInterval(w);
  }, [x]), Z(() => {
    if (!r.companyId || r.mockMode) return;
    let w = !0;
    return Xi(r.companyId, C.current, r.apiUrl).then(($) => {
      !w || !$ || $.length === 0 || u((T) => {
        let Y = !1;
        const E = T.map((ae) => {
          const ne = $.find((W) => String(W.id) === ae.id);
          return ne && ne.ticketNumber && ae.ticketNumber !== ne.ticketNumber ? (Y = !0, { ...ae, ticketNumber: ne.ticketNumber }) : ae;
        });
        return Y ? E : T;
      });
    }).catch(() => {
    }), () => {
      w = !1;
    };
  }, [r.companyId, r.apiUrl, r.mockMode]);
  const D = c.find((w) => w.id === l) || null, P = c.reduce((w, $) => w + ($.unread || 0), 0), X = J((w) => {
    p(($) => {
      var T;
      return $ === w ? $ : ((T = k.current) == null || T.call(k, w ? "widget_opened" : "widget_closed"), w);
    });
  }, []), oe = J((w) => {
    g(($) => {
      var T;
      return $ === w ? $ : ((T = k.current) == null || T.call(k, "screen_changed", { screen: w }), w);
    });
  }, []), fe = J((w) => {
    var $;
    f(w.id), u((T) => T.some((E) => E.id === w.id) ? T.map((E) => E.id === w.id ? { ...E, ...w, unread: 0, status: w.status || "active" } : E) : [{ ...w, unread: 0, status: w.status || "active" }, ...T]), g("conversation"), ($ = k.current) == null || $.call(k, "conversation_selected", { conversationId: w.id });
  }, []), le = J(() => {
    var w;
    u(
      ($) => $.map((T) => T.id === l ? { ...T, status: "ended" } : T)
    ), f(null), g("new-conversation"), (w = k.current) == null || w.call(k, "conversation_ended", { conversationId: l });
  }, [l]), Q = J((w) => {
    u(($) => $.filter((T) => T.id !== w)), f(($) => $ === w ? null : $), l === w && g("new-conversation");
  }, [l]), S = J((w) => {
    var ae;
    if (r.chatAvailable === !1) {
      M("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (x !== null) {
      M(`Previše zahtjeva. Molimo sačekajte ${x}s.`);
      return;
    }
    const $ = "conv-" + Date.now(), T = (/* @__PURE__ */ new Date()).toISOString(), Y = w ? w.length > 40 ? w.slice(0, 40) + "…" : w : "Novo ćaskanje", E = {
      id: $,
      title: Y,
      preview: w || "Započeto novo ćaskanje",
      timestamp: T,
      unread: 0,
      messages: w ? [
        {
          id: "msg-" + Date.now(),
          content: w,
          sender: "user",
          timestamp: T,
          status: "sent"
        }
      ] : []
    };
    u((ne) => [E, ...ne]), f($), g("conversation"), (ae = k.current) == null || ae.call(k, "conversation_started", { conversationId: $, initialMessage: w }), w && B($, w, [E.messages[0]], !0);
  }, [r.apiUrl, r.chatAvailable, r.companyId, r.mockMode, x, y]), B = async (w, $, T, Y = !1) => {
    var ne;
    m(!0), M(null);
    const E = "ai-msg-" + Date.now(), ae = {
      id: E,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    u(
      (W) => W.map((te) => te.id !== w ? te : {
        ...te,
        preview: $,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...te.messages.filter((U) => U.id !== E), ae]
      })
    ), (ne = k.current) == null || ne.call(k, "stream_started", { conversationId: w });
    try {
      await Ji({
        companyId: r.companyId,
        conversationId: w,
        visitorId: C.current,
        message: $,
        forceNewConversation: Y || w.startsWith("conv-"),
        apiUrl: r.apiUrl,
        mockMode: r.mockMode || r.isPreview,
        visitorName: y.name,
        visitorEmail: y.email,
        visitorPhone: y.phone,
        actions: r.actions,
        previewDraft: r.previewDraft,
        callbacks: {
          onConversationId: (W) => {
            const te = w, U = String(W);
            w = U, f(U), u(
              (be) => be.map((V) => V.id === te || V.messages.some((j) => j.id === E) ? { ...V, id: U } : V)
            );
          },
          onTicketNumber: (W) => {
            const te = W && String(W).trim() !== "" && String(W).trim() !== "undefined" && String(W).trim() !== "null" ? String(W).trim() : null;
            te && u(
              (U) => U.map((be) => be.id === w || be.messages.some((j) => j.id === E) ? { ...be, ticketNumber: te } : be)
            );
          },
          onActionTrigger: (W) => {
            var U;
            const te = W.widget || W.triggered_widget || (W.widget_id && r.widgets ? r.widgets.find((be) => be.id === W.widget_id) : null) || null;
            te && u(
              (be) => be.map((V) => V.id === w || V.messages.some((N) => N.id === E) ? {
                ...V,
                messages: V.messages.map(
                  (N) => N.id === E ? { ...N, widget: te } : N
                )
              } : V)
            ), (U = I.current) == null || U.call(I, W);
          },
          onChunk: (W) => {
            u(
              (te) => te.map((U) => U.id === w || U.messages.some((V) => V.id === E) ? {
                ...U,
                messages: U.messages.map(
                  (V) => V.id === E ? { ...V, content: V.content + W } : V
                )
              } : U)
            );
          },
          onSources: (W) => {
            u(
              (te) => te.map((U) => U.id === w || U.messages.some((V) => V.id === E) ? {
                ...U,
                messages: U.messages.map(
                  (V) => V.id === E ? { ...V, sources: W } : V
                )
              } : U)
            );
          },
          onSuggestedQuestions: (W) => {
            u(
              (te) => te.map((U) => U.id === w || U.messages.some((V) => V.id === E) ? {
                ...U,
                messages: U.messages.map(
                  (V) => V.id === E ? { ...V, suggestedQuestions: W } : V
                )
              } : U)
            );
          },
          onDone: () => {
            var W;
            u(
              (te) => te.map((U) => {
                var q, ce;
                if (!(U.id === w || U.messages.some((me) => me.id === E))) return U;
                const V = U.messages.find((me) => me.id === E), j = (q = V == null ? void 0 : V.widget) == null ? void 0 : q.name, N = (ce = V == null ? void 0 : V.content) == null ? void 0 : ce.trim(), b = N ? N.slice(0, 70) : j ? `[${j}]` : U.preview;
                return {
                  ...U,
                  preview: b,
                  messages: U.messages.map(
                    (me) => me.id === E ? { ...me, isStreaming: !1 } : me
                  )
                };
              })
            ), m(!1), (W = k.current) == null || W.call(k, "stream_completed", { conversationId: w });
          },
          onError: (W) => {
            console.error("[Pitaj.io] Stream error:", W), M(W.message || "Došlo je do greške u komunikaciji."), m(!1);
          }
        }
      });
    } catch (W) {
      m(!1), F(W, "Greška pri slanju poruke.");
    }
  }, ee = J((w) => {
    var E;
    const $ = w.trim();
    if (!$ || h || r.chatAvailable === !1 || x !== null) return;
    if (!l) {
      S($);
      return;
    }
    const Y = {
      id: "usr-msg-" + Date.now(),
      content: $,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    u(
      (ae) => ae.map((ne) => ne.id !== l ? ne : {
        ...ne,
        preview: $,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...ne.messages, Y]
      })
    ), (E = k.current) == null || E.call(k, "message_sent", { conversationId: l, content: $ }), B(l, $, D ? D.messages : []);
  }, [l, h, S, D, r.chatAvailable, r.companyId, r.apiUrl, r.mockMode, x]), H = J(
    async (w, $, T) => {
      var Y;
      if (!r.mockMode)
        try {
          await ea(
            r.companyId,
            w,
            $,
            r.apiUrl,
            r.mockMode
          );
        } catch (E) {
          console.error("[Pitaj.io] Failed to submit rating:", E);
          const ae = (E == null ? void 0 : E.status) === 404 ? "Razgovor ili tiket više nije dostupan." : E != null && E.message && !E.message.includes("failed") && !E.message.includes("404") ? E.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(ae);
        }
      u(
        (E) => E.map(
          (ae) => ae.id === w ? { ...ae, satisfaction: $, ratingScore: T ?? ae.ratingScore } : ae
        )
      ), (Y = k.current) == null || Y.call(k, "rating_submitted", {
        conversationId: w,
        satisfaction: $,
        score: T
      });
    },
    [r.companyId, r.apiUrl, r.mockMode]
  ), v = J(
    (w, $, T = "user") => {
      const Y = $.trim();
      if (!Y) return;
      const E = (/* @__PURE__ */ new Date()).toISOString(), ae = `conv-${Date.now()}`, ne = typeof w == "string" && w.trim().length > 0 ? w : ae, W = {
        id: `local-${T}-msg-${Date.now()}`,
        content: Y,
        sender: T,
        timestamp: E,
        status: "sent"
      };
      u(
        (te) => te.some((U) => U.id === ne) ? te.map((U) => U.id !== ne ? U : {
          ...U,
          preview: Y.length > 70 ? `${Y.slice(0, 70)}…` : Y,
          timestamp: E,
          messages: [...U.messages, W]
        }) : [
          {
            id: ne,
            title: "Forma",
            preview: Y.length > 70 ? `${Y.slice(0, 70)}…` : Y,
            timestamp: E,
            unread: 0,
            messages: [W],
            status: "active"
          },
          ...te
        ]
      ), f(ne), g("conversation");
    },
    []
  ), O = (w) => {
    var $;
    return !!(($ = w.messages) != null && $.some((T) => T.sender === "ai"));
  };
  return {
    config: r,
    setConfig: o,
    isOpen: n,
    setIsOpen: X,
    screen: s,
    setScreen: oe,
    conversations: c,
    activeConversation: D,
    activeConversationId: l,
    visitorContact: y,
    visitorId: C.current,
    activeConversationHasReply: D ? O(D) : !1,
    totalUnread: P,
    isStreaming: h,
    rateLimitTimer: x,
    errorBanner: z,
    setErrorBanner: M,
    selectConversation: fe,
    startNewConversation: S,
    endConversation: le,
    deleteConversation: Q,
    sendUserMessage: ee,
    submitSatisfaction: H,
    appendConversationMessage: v,
    handleApiError: F
  };
}
let ut = null, vi = null;
function Yt(t, e) {
  e === null && t !== null && ut !== null && ut !== t || (ut = e ? t : null, vi = e);
}
function Se() {
  return vi;
}
function wi(t, e) {
  let a = null;
  const r = () => a || (a = t().then((o) => {
    const n = e ? e(o) : o.default;
    if (!n)
      throw new Error("Lazy component not found");
    return n;
  }));
  return function(n) {
    const [p, s] = L(null);
    return Z(() => {
      let g = !0;
      return r().then((c) => {
        g && s(() => c);
      }).catch((c) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", c);
      }), () => {
        g = !1;
      };
    }, []), p ? /* @__PURE__ */ i(p, { ...n }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function da({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ i("path", { d: "M5 3v4" }),
    /* @__PURE__ */ i("path", { d: "M19 17v4" }),
    /* @__PURE__ */ i("path", { d: "M3 5h4" }),
    /* @__PURE__ */ i("path", { d: "M17 19h4" })
  ] });
}
function yi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ i("path", { d: "M12 19V5" })
  ] });
}
function ua({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ i("path", { d: "M19 12H5" })
  ] });
}
function _e({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ i("path", { d: "m6 6 12 12" })
  ] });
}
function ma({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function Rr({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function Ne({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function ha({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function fa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function ki({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function ga({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function ba({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function ja({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function xa({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function va({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function _i({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ i("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function wa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function Ni({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ i("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ i("path", { d: "M10 9H8" }),
    /* @__PURE__ */ i("path", { d: "M16 13H8" }),
    /* @__PURE__ */ i("path", { d: "M16 17H8" })
  ] });
}
function ya({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M7 10v12" }),
    /* @__PURE__ */ i("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function ka({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M17 14V2" }),
    /* @__PURE__ */ i("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function zi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function _a({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function Fr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function Hr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function Or({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function Vr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function Wr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) });
}
function Na({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function za({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function Ma({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function Sa({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function $a({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function Ia({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function Ca({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m10 20-1.25-2.5L6 18" }),
    /* @__PURE__ */ i("path", { d: "M10 4 8.75 6.5 6 6" }),
    /* @__PURE__ */ i("path", { d: "m14 20 1.25-2.5L18 18" }),
    /* @__PURE__ */ i("path", { d: "m14 4 1.25 2.5L18 6" }),
    /* @__PURE__ */ i("path", { d: "m17 21-3-6h-4l-3 6" }),
    /* @__PURE__ */ i("path", { d: "m17 3-3 6h-4L7 3" }),
    /* @__PURE__ */ i("path", { d: "M2 12h20" }),
    /* @__PURE__ */ i("path", { d: "m20 10-2.5 1.25L18 14" }),
    /* @__PURE__ */ i("path", { d: "m4 10 2.5 1.25L6 14" }),
    /* @__PURE__ */ i("path", { d: "m20 14-2.5-1.25L18 10" }),
    /* @__PURE__ */ i("path", { d: "m4 14 2.5-1.25L6 10" })
  ] });
}
function Aa({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m6.5 6.5 11 11" }),
    /* @__PURE__ */ i("path", { d: "m21 21-1-1" }),
    /* @__PURE__ */ i("path", { d: "m3 3 1 1" }),
    /* @__PURE__ */ i("path", { d: "m18 22 4-4" }),
    /* @__PURE__ */ i("path", { d: "m2 6 4-4" }),
    /* @__PURE__ */ i("path", { d: "m3 10 7-7" }),
    /* @__PURE__ */ i("path", { d: "m14 21 7-7" })
  ] });
}
function La({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function Ta({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function Da({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function Pa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function Ea({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ i("path", { d: "M12 2v2" }),
    /* @__PURE__ */ i("path", { d: "M12 20v2" }),
    /* @__PURE__ */ i("path", { d: "m4.93 4.93 1.41 1.41" }),
    /* @__PURE__ */ i("path", { d: "m17.66 17.66 1.41 1.41" }),
    /* @__PURE__ */ i("path", { d: "M2 12h2" }),
    /* @__PURE__ */ i("path", { d: "M20 12h2" }),
    /* @__PURE__ */ i("path", { d: "m6.34 17.66-1.41 1.41" }),
    /* @__PURE__ */ i("path", { d: "m19.07 4.93-1.41 1.41" })
  ] });
}
function Ba({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Ua({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Ra({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function Fa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function lt({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      className: e,
      style: { display: "inline-block", verticalAlign: "middle", flexShrink: 0 },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i("rect", { width: "28", height: "28", rx: "2.5", fill: "#09090b" }),
        /* @__PURE__ */ i(
          "path",
          {
            fill: "#ffffff",
            fillRule: "evenodd",
            d: "M6.1 23V5H15.8 C19.4 5 21.6 7.2 21.6 10.6 C21.6 14 19.4 16.2 15.8 16.2 H11V23H6.1Z M11 9.1V12.2H15.4 C16.6 12.2 17.3 11.6 17.3 10.6 C17.3 9.6 16.6 9.1 15.4 9.1H11Z"
          }
        )
      ]
    }
  );
}
function Ha({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 100 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `pitaj-ai-spinner ${e}`.trim(),
      "aria-hidden": "true",
      children: /* @__PURE__ */ i("g", { fill: "currentColor", children: [
        /* @__PURE__ */ i("g", { className: "pitaj-spinner-segments", children: [
          /* @__PURE__ */ i("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5" }),
          /* @__PURE__ */ i("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(60 50 50)" }),
          /* @__PURE__ */ i("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(120 50 50)" }),
          /* @__PURE__ */ i("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(180 50 50)" }),
          /* @__PURE__ */ i("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(240 50 50)" }),
          /* @__PURE__ */ i("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(300 50 50)" })
        ] }),
        /* @__PURE__ */ i(
          "path",
          {
            className: "pitaj-spinner-sparkle",
            d: "M50 33.5C52.8 42.7 57.3 47.2 66.5 50C57.3 52.8 52.8 57.3 50 66.5C47.2 57.3 42.7 52.8 33.5 50C42.7 47.2 47.2 42.7 50 33.5Z"
          }
        )
      ] })
    }
  );
}
function Oa({
  screen: t,
  activeConversation: e,
  config: a,
  onBack: r,
  onClose: o,
  onNewConversation: n,
  onEndConversation: p,
  onDeleteConversation: s,
  onViewHistory: g,
  onViewTickets: c
}) {
  var C;
  const [u, l] = L(!1), f = re(null), h = t === "conversation" && e, _ = h || t === "history" || t === "tickets", z = a.title || a.name || "Pitaj.io Asistent";
  Z(() => {
    var k;
    const y = (I) => {
      var R, F;
      const A = ((F = (R = I.composedPath) == null ? void 0 : R.call(I)) == null ? void 0 : F[0]) || I.target;
      f.current && A && !f.current.contains(A) && l(!1);
    };
    document.addEventListener("mousedown", y);
    const d = (k = f.current) == null ? void 0 : k.getRootNode();
    return d instanceof ShadowRoot && d.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y), d instanceof ShadowRoot && d.removeEventListener("mousedown", y);
    };
  }, []), Z(() => {
    l(!1);
  }, [t]);
  const M = (y) => {
    l(!1), y == null || y();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      _ && /* @__PURE__ */ i(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": "Nazad",
          title: "Nazad",
          children: /* @__PURE__ */ i(ua, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((C = a.content) == null ? void 0 : C.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(lt, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: z }),
        h && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: f, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => l((y) => !y),
            className: `pitaj-icon-btn ${u ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": u,
            title: "Meni",
            children: /* @__PURE__ */ i(ha, { size: 18 })
          }
        ),
        u && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => M(n),
              children: [
                /* @__PURE__ */ i(fa, { size: 15, className: "pitaj-menu-item-icon" }),
                "Nova konverzacija"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !h,
              onClick: () => M(p),
              children: [
                /* @__PURE__ */ i(ba, { size: 15, className: "pitaj-menu-item-icon" }),
                "Završi konverzaciju"
              ]
            }
          ),
          s && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !h,
              onClick: () => M(s),
              children: [
                /* @__PURE__ */ i(Na, { size: 15, className: "pitaj-menu-item-icon" }),
                "Obriši konverzaciju"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => M(g),
              children: [
                /* @__PURE__ */ i(ja, { size: 15, className: "pitaj-menu-item-icon" }),
                "Pogledaj prethodne"
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => M(c), children: [
            /* @__PURE__ */ i(va, { size: 15, className: "pitaj-menu-item-icon" }),
            "Pogledaj tikete"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": "Zatvori prozor",
          title: "Zatvori",
          children: /* @__PURE__ */ i(_e, { size: 18 })
        }
      )
    ] })
  ] });
}
function Va({ content: t }) {
  if (!t)
    return /* @__PURE__ */ i("span", {});
  const e = t.split(`
`), a = [];
  let r = !1, o = [];
  for (let n = 0; n < e.length; n++) {
    const p = e[n];
    if (p.startsWith("```")) {
      r ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, `code-${n}`)
      ), o = [], r = !1) : r = !0;
      continue;
    }
    if (r) {
      o.push(p);
      continue;
    }
    if (p.trim().startsWith("- ") || p.trim().startsWith("* ")) {
      const g = p.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: mt(g) }) }, `ul-${n}`)
      );
      continue;
    }
    const s = p.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ i("li", { children: mt(s[2]) }) }, `ol-${n}`)
      );
      continue;
    }
    if (!p.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${n}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: mt(p) }, `p-${n}`));
  }
  return r && o.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function mt(t) {
  const e = [];
  let a = 0;
  const r = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = r.exec(t)) !== null; ) {
    o.index > a && e.push(...Qt(t.slice(a, o.index)));
    const n = o[0];
    if (n.startsWith("`") && n.endsWith("`"))
      e.push(
        /* @__PURE__ */ i("code", { children: n.slice(1, -1) }, `c-${o.index}`)
      );
    else if (n.startsWith("**") && n.endsWith("**"))
      e.push(
        /* @__PURE__ */ i("strong", { children: n.slice(2, -2) }, `b-${o.index}`)
      );
    else if (n.startsWith("*") && n.endsWith("*"))
      e.push(
        /* @__PURE__ */ i("em", { children: n.slice(1, -1) }, `i-${o.index}`)
      );
    else if (n.startsWith("[") && n.includes("](")) {
      const p = n.slice(1, n.indexOf("](")), s = n.slice(n.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: p }, `a-${o.index}`)
      );
    }
    a = o.index + n.length;
  }
  return a < t.length && e.push(...Qt(t.slice(a))), e;
}
const Wa = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, qa = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, Ka = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), Za = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Qt(t) {
  const e = [];
  let a;
  for (; (a = Wa.exec(t)) !== null; ) {
    const n = a[0].replace(/[.,;:!?]+$/, "");
    n && e.push({
      start: a.index,
      end: a.index + n.length,
      href: n.startsWith("www.") ? `https://${n}` : n,
      external: !0
    });
  }
  for (; (a = qa.exec(t)) !== null; )
    e.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = Ka.exec(t)) !== null; ) {
    const n = a[0];
    Za.test(n) || e.push({
      start: a.index,
      end: a.index + n.length,
      href: `tel:${n.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((n, p) => n.start - p.start);
  const r = [];
  let o = 0;
  for (const n of e)
    n.start < o || (n.start > o && r.push(t.slice(o, n.start)), r.push(
      /* @__PURE__ */ i(
        "a",
        {
          href: n.href,
          ...n.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: t.slice(n.start, n.end)
        },
        `l-${n.start}`
      )
    ), o = n.end);
  return o < t.length && r.push(t.slice(o)), r;
}
function jt(t) {
  return (t || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function Ga(t) {
  const e = jt(t).toLowerCase();
  return e.includes("wi-fi") || e.includes("wifi") || e.includes("internet") ? za : e.includes("doručak") || e.includes("dorucak") || e.includes("kafa") || e.includes("coffee") ? Ma : e.includes("restoran") || e.includes("hrana") || e.includes("dining") ? Sa : e.includes("parking") || e.includes("garaža") || e.includes("garaza") || e.includes("auto") ? $a : e.includes("spa") || e.includes("bazen") || e.includes("wellness") ? Ia : e.includes("klima") || e.includes("hlađenje") || e.includes("hladjenje") ? Ca : e.includes("teretana") || e.includes("fitness") || e.includes("gym") ? Aa : La;
}
function Ya({ widget: t, onAction: e }) {
  const a = t.type || "custom_html", r = t.config || {};
  if (r.jsx_template || a === "dynamic_jsx" || a === "ai_builder")
    return /* @__PURE__ */ i(sr, { config: r, onAction: e });
  switch (a) {
    case "book_demo":
      return /* @__PURE__ */ i(Qa, { config: r, onAction: e });
    case "products":
      return /* @__PURE__ */ i(Ja, { config: r, onAction: e });
    case "cart":
      return /* @__PURE__ */ i(Xa, { config: r, onAction: e });
    case "usage_chart":
      return /* @__PURE__ */ i(er, { config: r });
    case "upcoming_classes":
      return /* @__PURE__ */ i(tr, { config: r, onAction: e });
    case "hotel_booking":
      return /* @__PURE__ */ i(ir, { config: r, onAction: e });
    case "contact":
      return /* @__PURE__ */ i(ar, { config: r, onAction: e });
    case "weather":
      return /* @__PURE__ */ i(rr, { config: r });
    case "custom_iframe":
      return /* @__PURE__ */ i(nr, { config: r, title: t.name });
    case "custom_html":
    default:
      return /* @__PURE__ */ i(or, { config: r, onAction: e });
  }
}
function zt({
  fields: t,
  values: e,
  onChange: a
}) {
  return /* @__PURE__ */ i(we, { children: t.map((r, o) => {
    const n = e[r.key] ?? (r.type === "checkbox" ? !1 : ""), p = r.key || `field_${o}`;
    if (r.type === "textarea")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ i("label", { children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            required: r.required,
            rows: 3,
            placeholder: r.placeholder || "",
            value: n,
            onInput: (c) => a(p, c.target.value)
          }
        )
      ] }, p);
    if (r.type === "checkbox")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ i(
          "input",
          {
            id: `widget-chk-${p}-${o}`,
            type: "checkbox",
            required: r.required,
            checked: !!n,
            onChange: (c) => a(p, c.target.checked)
          }
        ),
        /* @__PURE__ */ i("label", { htmlFor: `widget-chk-${p}-${o}`, children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, p);
    if (r.type === "select")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ i("label", { children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ i(
          "select",
          {
            required: r.required,
            value: n,
            onChange: (c) => a(p, c.target.value),
            children: [
              /* @__PURE__ */ i("option", { value: "", children: r.placeholder || "Odaberite..." }),
              (r.options || []).map((c, u) => /* @__PURE__ */ i("option", { value: c, children: c }, u))
            ]
          }
        )
      ] }, p);
    const s = r.type === "phone" ? "tel" : r.type === "email" ? "email" : r.type === "date" ? "date" : r.type === "number" ? "number" : "text";
    let g;
    if (r.type === "date") {
      const c = p.toLowerCase();
      if (c.includes("out") || c.includes("odjav") || c.includes("end") || c.includes("do")) {
        const u = e.check_in || e.start || e.od;
        u && typeof u == "string" && (g = u);
      }
    }
    return /* @__PURE__ */ i("div", { className: "pitaj-widget-field", children: [
      /* @__PURE__ */ i("label", { children: [
        r.label,
        " ",
        r.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
      ] }),
      /* @__PURE__ */ i(
        "input",
        {
          type: s,
          required: r.required,
          placeholder: r.placeholder || "",
          min: g,
          value: n,
          onInput: (c) => a(p, c.target.value)
        }
      )
    ] }, p);
  }) });
}
function Qa({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, n] = L({}), [p, s] = L(!1), g = t.title || "Razgovarajte sa prodajom", c = t.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.", u = (f, h) => {
    n((m) => ({ ...m, [f]: h }));
  }, l = (f) => {
    f.preventDefault();
    for (const m of r)
      if (m.required) {
        const x = o[m.key];
        if (m.type === "checkbox" && !x || m.type !== "checkbox" && (!x || !String(x).trim())) return;
      }
    s(!0);
    const h = r.filter((m) => o[m.key] !== void 0 && o[m.key] !== "").map((m) => `- ${m.label}: ${m.type === "checkbox" ? "Da" : o[m.key]}`);
    e == null || e(`Forma: ${g}
${h.join(`
`)}`);
  };
  if (p) {
    const f = o.email ? ` na ${o.email}` : "";
    return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(Ne, { size: 20 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za demo je poslan!" }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
        "Naš tim će vas kontaktirati u najkraćem roku",
        f,
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: g }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: c })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: l, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(zt, { fields: r, values: o, onChange: u }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function Ja({ config: t, onAction: e }) {
  const [a, r] = L(0), o = [
    {
      id: 1,
      name: "XY Metcon 64",
      subtitle: "Muške patike za trening",
      price: "16.00 KM",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Air Zoom Runner Pro",
      subtitle: "Patike za trčanje",
      price: "19.50 KM",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Air Max Pulse X",
      subtitle: "Sportske patike",
      price: "24.00 KM",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&auto=format&fit=crop&q=80"
    }
  ], n = Array.isArray(t.products) && t.products.length > 0 ? t.products : o, p = n[a] || n[0], s = () => {
    r((u) => (u + 1) % n.length);
  }, g = () => {
    r((u) => (u - 1 + n.length) % n.length);
  }, c = () => {
    e == null || e(`Zanima me proizvod: ${p.name} (${p.price})`);
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card products-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(Ta, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Izbor artikala" }),
      n.length > 1 && /* @__PURE__ */ i("span", { className: "pitaj-widget-counter", children: [
        a + 1,
        " / ",
        n.length
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-product-card", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-product-image-wrap", children: [
        /* @__PURE__ */ i("img", { src: p.image, alt: p.name, className: "pitaj-product-img" }),
        n.length > 1 && /* @__PURE__ */ i("div", { className: "pitaj-carousel-controls", children: [
          /* @__PURE__ */ i("button", { type: "button", onClick: g, "aria-label": "Prethodni", className: "pitaj-carousel-btn", children: "‹" }),
          /* @__PURE__ */ i("button", { type: "button", onClick: s, "aria-label": "Sljedeći", className: "pitaj-carousel-btn", children: "›" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-product-info", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-product-name", children: p.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-sub", children: p.subtitle }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-price", children: p.price }),
        /* @__PURE__ */ i("button", { type: "button", onClick: c, className: "pitaj-widget-btn-primary pitaj-btn-select", children: "Odaberi opcije" })
      ] })
    ] })
  ] });
}
function Xa({ config: t, onAction: e }) {
  const [a, r] = L(!1), o = [
    {
      id: 1,
      name: "XY Metcon 64",
      subtitle: "Muške patike za trening",
      price: "16.00 KM",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "XY V2 Run",
      subtitle: "Muške patike za trening",
      price: "24.90 KM",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=120&auto=format&fit=crop&q=80"
    }
  ], n = Array.isArray(t.items) && t.items.length > 0 ? t.items : o, p = t.total || "40.90 KM", s = () => {
    r(!0), e == null || e(`Želim dovršiti narudžbu iz korpe (Ukupno: ${p})`);
  };
  return a ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(Ne, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Narudžba je potvrđena!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Iznos od ",
      p,
      " je uspješno obrađen. Detalji su poslani."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(Da, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: [
        n.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-items-list", children: n.map((g) => /* @__PURE__ */ i("div", { className: "pitaj-cart-item-row", children: [
      /* @__PURE__ */ i("img", { src: g.image, alt: g.name, className: "pitaj-cart-thumb" }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-details", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-name", children: g.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-sub", children: g.subtitle })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-item-price", children: g.price })
    ] }, g.id)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-divider" }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-val", children: p })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-payment", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-pay-label", children: "Plaćanje karticom" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-card-pill", children: [
        /* @__PURE__ */ i(Ba, { size: 12, className: "pitaj-pill-icon" }),
        /* @__PURE__ */ i("span", { children: "•• 2683" })
      ] })
    ] }),
    /* @__PURE__ */ i("button", { type: "button", onClick: s, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function er({ config: t }) {
  const e = t.metric_label || "Ukupno potrošeno kredita", a = t.metric_value || "2,214", r = [
    { day: "N", val: 75 },
    { day: "P", val: 40 },
    { day: "U", val: 65 },
    { day: "S", val: 85 },
    { day: "Č", val: 25 },
    { day: "P", val: 70 },
    { day: "S", val: 95 }
  ], o = Array.isArray(t.chart_data) && t.chart_data.length > 0 ? t.chart_data : r;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(Pa, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-chart-label", children: e }),
      /* @__PURE__ */ i("div", { className: "pitaj-chart-big-number", children: a }),
      /* @__PURE__ */ i("div", { className: "pitaj-bar-chart-container", children: o.map((n, p) => /* @__PURE__ */ i("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ i(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, n.val))}%` },
            title: `${n.day}: ${n.val}%`
          }
        ) }),
        /* @__PURE__ */ i("span", { className: "pitaj-bar-day", children: n.day })
      ] }, p)) })
    ] })
  ] });
}
function tr({ config: t, onAction: e }) {
  const [a, r] = L([]), o = [
    {
      id: 1,
      title: "Zumba trening",
      level: "Početni",
      levelColor: "green",
      time: "Pon • 18:00",
      instructor: "Trener Amina • 45 min",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=160&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Jutarnja joga",
      level: "Srednji",
      levelColor: "purple",
      time: "Sri • 07:30",
      instructor: "Trener Emir • 60 min",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=160&auto=format&fit=crop&q=80"
    }
  ], n = Array.isArray(t.classes) && t.classes.length > 0 ? t.classes : o, p = (s, g) => {
    const c = s.id ?? g;
    a.includes(c) || (r((u) => [...u, c]), e == null || e(`Želim rezervisati termin za: ${s.title} (${s.time})`));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(_a, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-classes-list", children: n.map((s, g) => {
      const c = s.id ?? g, u = a.includes(c);
      return /* @__PURE__ */ i("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ i("img", { src: s.image, alt: s.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ i("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-class-title", children: s.title }),
            s.level && /* @__PURE__ */ i("span", { className: `pitaj-level-badge level-${s.levelColor || "green"}`, children: s.level })
          ] }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-time", children: s.time }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-instructor", children: s.instructor })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => p(s, g),
            className: `pitaj-book-btn ${u ? "is-booked" : ""}`,
            children: u ? "Rezervisano" : "Rezerviši"
          }
        )
      ] }, c);
    }) })
  ] });
}
function ir({ config: t, onAction: e }) {
  const [a, r] = L({}), [o, n] = L(!1), p = t.name || "Hotel Dark Moon", s = t.price || "220 KM / noć", g = t.location || "Sarajevo, Bosna i Hercegovina", c = t.rating || "4.8 (124 recenzije)", u = t.image || "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80", l = ["Wi-Fi", "Doručak", "Restoran", "Parking", "Spa & Bazen"], h = (Array.isArray(t.amenities) && t.amenities.length > 0 ? t.amenities : l).map(jt), m = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], x = Array.isArray(t.fields) ? t.fields : m, _ = (M, C) => {
    r((y) => ({ ...y, [M]: C }));
  }, z = (M) => {
    if (M.preventDefault(), x.length > 0) {
      for (const y of x)
        if (y.required) {
          const d = a[y.key];
          if (y.type === "checkbox" && !d || y.type !== "checkbox" && (!d || !String(d).trim())) return;
        }
    }
    n(!0);
    const C = { ...a };
    if (C.check_in && C.check_out && C.check_out < C.check_in) {
      const y = C.check_in;
      C.check_in = C.check_out, C.check_out = y;
    }
    if (x.length > 0) {
      const y = x.filter((d) => C[d.key] !== void 0 && C[d.key] !== "").map((d) => `- ${d.label}: ${d.type === "checkbox" ? "Da" : C[d.key]}`);
      e == null || e(`Forma: Rezervacija smještaja - ${p}
${y.join(`
`)}`);
    } else
      e == null || e(`Forma: Rezervacija smještaja - ${p}
- Cijena: ${s}
- Lokacija: ${g}`);
  };
  return o ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(Ne, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za rezervaciju je poslan!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Uspješno ste poslali upit za ",
      p,
      ". Naše osoblje će vam se javiti za potvrdu termina."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-image-wrap", children: [
      /* @__PURE__ */ i("img", { src: u, alt: p, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-badge-price", children: s })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ i("div", { className: "pitaj-hotel-name", children: p }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ i(Ua, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ i("span", { children: g })
        ] }),
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ i(Ra, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ i("span", { children: c })
        ] })
      ] }),
      h.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-amenities-row", children: h.map((M, C) => {
        const y = jt(M), d = Ga(y);
        return /* @__PURE__ */ i("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ i(d, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ i("span", { children: y })
        ] }, C);
      }) }),
      /* @__PURE__ */ i("form", { onSubmit: z, className: "pitaj-widget-form", children: [
        x.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ i(zt, { fields: x, values: a, onChange: _ })
        ] }),
        /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || (x.length > 0 ? "Pošalji upit za rezervaciju" : "Rezerviši sobu") })
      ] })
    ] })
  ] });
}
function ar({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, n] = L({}), [p, s] = L(!1), g = t.title || "Kontaktirajte nas", c = t.subtitle || "Rado ćemo odgovoriti na vaša pitanja", u = (f, h) => {
    n((m) => ({ ...m, [f]: h }));
  }, l = (f) => {
    f.preventDefault();
    for (const m of r)
      if (m.required) {
        const x = o[m.key];
        if (m.type === "checkbox" && !x || m.type !== "checkbox" && (!x || !String(x).trim())) return;
      }
    s(!0);
    const h = r.filter((m) => o[m.key] !== void 0 && o[m.key] !== "").map((m) => `- ${m.label}: ${m.type === "checkbox" ? "Da" : o[m.key]}`);
    e == null || e(`Forma: ${g}
${h.join(`
`)}`);
  };
  return p ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(Ne, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Poruka je poslana!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: "Hvala vam na javljanju. Odgovorit ćemo vam uskoro." })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: g }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: c })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: l, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(zt, { fields: r, values: o, onChange: u }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function rr({ config: t }) {
  const e = t.city || "Sarajevo", a = t.temp || "22°C", r = t.condition || "Sunčano i toplo", o = t.description || "Pretežno sunčano vrijeme uz blagi povjetarac tokom popodneva.";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ i(Ea, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ i("span", { className: "pitaj-weather-temp", children: a })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-city", children: e }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-cond", children: r }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-desc", children: o })
  ] });
}
function nr({ config: t, title: e }) {
  const [a, r] = L(!0), o = t.url || "https://calendly.com", n = t.height || 380;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(Fa, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || e }),
      /* @__PURE__ */ i(
        "a",
        {
          href: o,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "pitaj-iframe-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-iframe-container", style: { height: `${n}px` }, children: [
      a && /* @__PURE__ */ i("div", { className: "pitaj-iframe-loading", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ i(
        "iframe",
        {
          src: o,
          title: e,
          className: "pitaj-iframe-frame",
          onLoad: () => r(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function or({ config: t, onAction: e }) {
  const a = t.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', r = t.css || "";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (n) => {
    var s;
    const p = (s = n.target) == null ? void 0 : s.closest("[data-chat-action]");
    if (p) {
      const g = p.getAttribute("data-chat-action");
      g && (n.preventDefault(), e == null || e(g));
    }
  }, children: [
    r && /* @__PURE__ */ i("style", { children: r }),
    /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: a } })
  ] });
}
function sr({ config: t, onAction: e }) {
  const a = t.jsx_template || "", r = t.default_data || t.data || {}, o = $e(() => {
    if (!a) return "";
    try {
      let s = a;
      const g = /\{(\w+)\.map\(\((\w+)\)\s*=>\s*\(([\s\S]*?)\)\)\}/g;
      s = s.replace(g, (u, l, f, h) => {
        const m = r[l];
        return Array.isArray(m) ? m.map((x) => {
          let _ = h;
          return Object.keys(x).forEach((z) => {
            const M = x[z], C = new RegExp(
              `${f}\\.${z}\\s*\\?\\s*["']([^"']*)["']\\s*:\\s*["']([^"']*)["']`,
              "g"
            );
            _ = _.replace(C, M ? "$1" : "$2");
            const y = new RegExp(`\\{?${f}\\.${z}\\}?`, "g");
            _ = _.replace(y, String(M ?? ""));
          }), _;
        }).join("") : "";
      }), Object.keys(r).forEach((u) => {
        const l = r[u];
        if (typeof l == "string" || typeof l == "number") {
          const f = new RegExp(`\\{${u}\\}`, "g");
          s = s.replace(f, String(l));
        }
      });
      const c = (u, l) => {
        const f = u.match(new RegExp(`${l}=(?:["']([^"']*)["']|\\{([^}]+)\\})`, "i"));
        return (f ? f[1] ?? f[2] ?? "" : "").trim();
      };
      return s = s.replace(
        /<Card([^>]*)status=\{\{\s*text:\s*([^,\}]+),\s*icon:\s*["']([^"']+)["']\s*\}\}([^>]*)>/gi,
        (u, l, f, h, m) => {
          const x = c(u, "background"), _ = x ? `background: ${x};` : "", z = (f || "").replace(/^["']|["']$/g, "").trim(), M = z && z.toLowerCase() !== "prompt" && z !== "{prompt}";
          let C = "";
          if (M) {
            const d = {
              package: "📦",
              box: "📦",
              chart: "📊",
              calendar: "📅",
              clock: "⏱",
              time: "⏱",
              check: "✓",
              user: "👤",
              mail: "✉️",
              sun: "☀️",
              shield: "🛡️",
              star: "⭐",
              "map-pin": "📍",
              location: "📍",
              "shopping-bag": "🛍️",
              cart: "🛍️",
              bell: "🔔",
              dollar: "💳",
              "credit-card": "💳",
              sparkles: "✨"
            }[h] || "";
            C = `<div style="font-size: 11px; color: #64748b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">${d ? `<span>${d}</span>` : ""} ${z}</div>`;
          }
          return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${_}">${C}`;
        }
      ).replace(/<Card([^>]*)>/gi, (u) => {
        const l = c(u, "background");
        return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${l ? `background: ${l};` : ""}">`;
      }).replace(/<\/Card>/gi, "</div>").replace(
        /<Row[^>]*justify=["']between["'][^>]*align=["']start["'][^>]*>/gi,
        '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">'
      ).replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*align=["']start["'][^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: flex-start;">').replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: center;">').replace(/<Row[^>]*>/gi, '<div style="display: flex; gap: 8px; align-items: center;">').replace(/<\/Row>/gi, "</div>").replace(/<Col[^>]*flex=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; flex: $1;">').replace(/<Col[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: $1px;">').replace(/<Col[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: 4px;">').replace(/<\/Col>/gi, "</div>").replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*weight=["']bold["'][^>]*\/>/gi, '<h4 style="font-size: 15px; font-weight: 700; margin: 0; line-height: 1.2;">$1</h4>').replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<h4 style="font-size: 14px; font-weight: 600; margin: 0;">$1</h4>').replace(/<Caption[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="font-size: 11px; color: #64748b; margin-top: 2px;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["']success["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dcfce7; color: #166534;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:warning|amber)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fef3c7; color: #92400e;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:error|danger|destructive|red)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fee2e2; color: #991b1b;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:purple|brand)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f3e8ff; color: #6b21a8;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:info|blue)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dbeafe; color: #1e40af;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f1f5f9; color: #475569;">$1</span>').replace(/<Divider[^>]*flush[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px -14px;" />').replace(/<Divider[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px 0;" />').replace(/<Image([^>]*)\/>/gi, (u) => {
        const l = c(u, "src"), f = c(u, "alt"), h = c(u, "height") || "120px", m = c(u, "radius") === "sm" ? "6px" : "10px";
        return `<img src="${l}" alt="${f}" style="width: 100%; height: ${h === "100%" ? "120px" : h}; object-fit: cover; border-radius: ${m}; margin: 4px 0;" />`;
      }).replace(/<Avatar([^>]*)\/>/gi, (u) => {
        const l = c(u, "src"), f = c(u, "name"), h = c(u, "size") === "lg" ? "40px" : "32px";
        if (l)
          return `<img src="${l}" alt="${f}" style="width: ${h}; height: ${h}; border-radius: var(--pitaj-radius-avatar, 9999px); object-fit: cover; flex-shrink: 0;" />`;
        const m = f ? f.charAt(0).toUpperCase() : "U";
        return `<div style="width: ${h}; height: ${h}; border-radius: var(--pitaj-radius-avatar, 9999px); background: #e2e8f0; color: #334155; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0;">${m}</div>`;
      }).replace(/<Input([^>]*)\/>/gi, (u) => {
        const l = c(u, "label"), f = c(u, "placeholder"), h = c(u, "value"), m = c(u, "type") || "text";
        return m === "textarea" ? `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${l}</label><textarea placeholder="${f}" rows="2" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box; resize: vertical;">${h}</textarea></div>` : `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${l}</label><input type="${m}" placeholder="${f}" value="${h}" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box;" /></div>`;
      }).replace(/<BarChart[^>]*\/>/gi, () => {
        const u = Array.isArray(r.bars) ? r.bars : [];
        if (u.length > 0) {
          const l = Math.max(...u.map((h) => Number(h.value || 0)), 1);
          return `<div style="display: flex; gap: 6px; width: 100%; padding: 8px 0; align-items: flex-end;">${u.map(
            (h) => `<div style="display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1;"><div style="width: 100%; background: #e2e8f0; height: 70px; border-radius: 4px; display: flex; align-items: flex-end; overflow: hidden;"><div style="width: 100%; height: ${Math.round(
              Number(h.value || 0) / l * 100
            )}%; background: var(--pitaj-accent, #2563eb); border-radius: 4px 4px 0 0;"></div></div><span style="font-size: 10px; color: #64748b;">${h.label || ""}</span></div>`
          ).join("")}</div>`;
        }
        return '<div style="padding: 12px; text-align: center; color: #94a3b8; font-size: 11px;">Grafikon</div>';
      }).replace(/<Timeline[^>]*\/>/gi, () => {
        const u = Array.isArray(r.timeline) ? r.timeline : Array.isArray(r.items) ? r.items : [];
        return !u || u.length === 0 ? "" : '<div style="display: flex; flex-direction: column; width: 100%; padding: 4px 0;">' + u.map((l, f) => {
          const h = f === u.length - 1, m = !!(l.complete || l.completed), x = !!l.current;
          return `<div style="display: flex; align-items: flex-start; gap: 10px; position: relative;"><div style="display: flex; flex-direction: column; align-items: center; align-self: stretch;"><div style="width: 22px; height: 22px; border-radius: 9999px; background: ${m ? "#dcfce7" : x ? "#e0f2fe" : "#f1f5f9"}; color: ${m ? "#166534" : x ? "#0369a1" : "#94a3b8"}; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; flex-shrink: 0;">${m ? "✓" : x ? "●" : "○"}</div>${h ? "" : `<div style="width: 2px; flex: 1; background: ${m ? "#86efac" : "#e2e8f0"}; margin: 2px 0; min-height: 18px;"></div>`}</div><div style="display: flex; flex-direction: column; flex: 1; min-width: 0; padding-bottom: ${h ? "2px" : "12px"};"><span style="font-size: 12px; font-weight: ${x ? "600" : "500"}; color: #0f172a;">${l.label || ""}</span>${l.detail ? `<span style="font-size: 11px; color: #64748b; margin-top: 2px;">${l.detail}</span>` : ""}</div></div>`;
        }).join("") + "</div>";
      }).replace(
        /<Box[^>]*background=["']green-100["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #dcfce7; color: #166534; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(
        /<Box[^>]*background=["']surface-secondary["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #f1f5f9; color: #94a3b8; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(/<Box([^>]*)>/gi, (u) => {
        const l = c(u, "background"), f = c(u, "radius"), h = c(u, "padding"), m = [];
        return l === "surface-secondary" || l === "muted" ? m.push("background: #f1f5f9") : l && m.push(`background: ${l}`), f === "full" ? m.push("border-radius: 9999px") : f && m.push(`border-radius: ${f === "md" ? "8px" : "4px"}`), h && m.push(`padding: ${h}px`), `<div style="${m.join("; ")}; display: flex; align-items: center; justify-content: center;">`;
      }).replace(/<\/Box>/gi, "</div>").replace(/<Icon[^>]*name=["'](?:check|check-circle)["'][^>]*\/>/gi, "✓").replace(/<Icon[^>]*name=["'](?:clock|time)["'][^>]*\/>/gi, "⏱").replace(/<Icon[^>]*name=["'](?:package|box)["'][^>]*\/>/gi, "📦").replace(/<Icon[^>]*name=["']star["'][^>]*\/>/gi, "⭐").replace(/<Icon[^>]*name=["'](?:map-pin|location)["'][^>]*\/>/gi, "📍").replace(/<Icon[^>]*name=["']calendar["'][^>]*\/>/gi, "📅").replace(/<Icon[^>]*name=["'](?:shopping-bag|shopping-cart|cart)["'][^>]*\/>/gi, "🛍️").replace(/<Icon[^>]*name=["']user["'][^>]*\/>/gi, "👤").replace(/<Icon[^>]*name=["']mail["'][^>]*\/>/gi, "✉️").replace(/<Icon[^>]*name=["']phone["'][^>]*\/>/gi, "📞").replace(/<Icon[^>]*name=["'](?:truck|delivery)["'][^>]*\/>/gi, "🚚").replace(/<Icon[^>]*name=["']credit-card["'][^>]*\/>/gi, "💳").replace(/<Icon[^>]*name=["']sun["'][^>]*\/>/gi, "☀️").replace(/<Icon[^>]*name=["']bell["'][^>]*\/>/gi, "🔔").replace(/<Icon[^>]*name=["'](?:bed|hotel)["'][^>]*\/>/gi, "🏨").replace(/<Icon[^>]*name=["'](?:utensils|dining)["'][^>]*\/>/gi, "🍽️").replace(/<Icon[^>]*name=["']coffee["'][^>]*\/>/gi, "☕").replace(/<Icon[^>]*name=["']wifi["'][^>]*\/>/gi, "📶").replace(/<Icon[^>]*name=["']sparkles["'][^>]*\/>/gi, "✨").replace(/<Icon[^>]*\/>/gi, "•").replace(/<Text[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<p style="font-size: 12px; margin: 0; line-height: 1.3;">$1</p>').replace(/<Button([^>]*)\/>/gi, (u) => {
        const l = c(u, "label") || "Akcija", f = c(u, "action") || l, h = c(u, "variant");
        let m = "background: var(--pitaj-accent, #2563eb); color: white; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;";
        return h === "outline" ? m = "background: transparent; color: #0f172a; border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;" : h === "secondary" && (m = "background: #f1f5f9; color: #0f172a; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;"), `<button type="button" data-chat-action="${f}" style="${m}">${l}</button>`;
      }), s;
    } catch {
      return "";
    }
  }, [a, r]), n = (s) => {
    var c;
    const g = (c = s.target) == null ? void 0 : c.closest("[data-chat-action]");
    if (g) {
      const u = g.getAttribute("data-chat-action");
      u && (s.preventDefault(), e == null || e(u));
    }
  }, p = /<Card/i.test(a || "");
  return /* @__PURE__ */ i("div", { className: `dynamic-jsx-widget ${p ? "" : "pitaj-inline-widget-card"}`, onClick: n, children: /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: o } }) });
}
function Mi({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: r,
  containerClassName: o,
  revealDelayMs: n = 0,
  staggerMs: p = 140
}) {
  const s = $e(() => Array.isArray(t) && t.length > 0 ? t.map((h) => ({
    text: h.text.trim(),
    children: (h.children ?? []).map((m) => m.trim()).filter(Boolean)
  })).filter((h) => h.text !== "") : (e ?? []).map((h) => h.trim()).filter(Boolean).map((h) => ({ text: h, children: [] })), [e, t]), [g, c] = L(null), [u, l] = L(s.length);
  if (Z(() => {
    c(null);
  }, [s]), Z(() => {
    if (g) {
      l(s.length);
      return;
    }
    if (n <= 0) {
      l(s.length);
      return;
    }
    l(0);
    const h = window.setTimeout(() => {
      l(1);
      const m = window.setInterval(() => {
        l((x) => x >= s.length ? (window.clearInterval(m), x) : x + 1);
      }, Math.max(60, p));
    }, n);
    return () => {
      window.clearTimeout(h);
    };
  }, [g, s.length, n, p]), s.length === 0)
    return null;
  const f = s.find((h) => h.text === g && h.children.length > 0) ?? null;
  return f ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => c(null),
        className: r,
        children: "Nazad"
      }
    ),
    f.children.map((h, m) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(h),
        className: r,
        children: h
      },
      `${f.text}-${m}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: s.slice(0, u).map((h, m) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => h.children.length > 0 ? c(h.text) : a(h.text),
      className: `${r} pitaj-suggestion-enter`,
      children: h.text
    },
    `${h.text}-${m}`
  )) });
}
const lr = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), pr = [".txt", ".md", ".csv", ".json", ".xml"];
function cr(t) {
  if (lr.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return pr.some((a) => e.endsWith(a));
}
async function Si(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (a) => {
      const r = a.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(a.name);
      let o = null;
      if (r && typeof URL < "u")
        try {
          o = URL.createObjectURL(a);
        } catch {
          o = null;
        }
      const n = cr(a) ? (await a.text()).slice(0, 4e3) : null;
      return {
        id: `${a.name}-${a.lastModified}-${a.size}`,
        name: a.name,
        textContent: n,
        previewUrl: o,
        isImage: r
      };
    })
  );
}
function $i(t) {
  return t.length === 0 ? "" : `

${t.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function dr(t) {
  const { widgetId: e, audio: a, apiUrl: r } = t, o = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = new FormData();
  n.append("audio", a, "dictation.webm");
  const p = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: n,
    headers: {
      Accept: "application/json"
    }
  });
  if (!p.ok) {
    const c = await p.json().catch(() => null), l = (() => {
      if (p.status !== 422 || !(c != null && c.errors) || typeof c.errors != "object")
        return null;
      for (const f of Object.values(c.errors))
        if (Array.isArray(f)) {
          for (const h of f)
            if (typeof h == "string" && h.trim() !== "")
              return h;
        }
      return null;
    })();
    bi(
      p.status,
      c,
      typeof l == "string" && l || `Transkripcija nije uspjela (${p.status})`,
      p.headers.get("Retry-After")
    );
  }
  const s = await p.json(), g = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!g)
    throw new Error("Transkripcija nije vratila tekst.");
  return g;
}
function Ii({ widgetId: t, apiUrl: e, onTranscript: a, onError: r }) {
  const n = re(null), p = re(null), s = re([]), g = re(!0), c = re(null), u = re(null), l = re(null), f = re(null), h = re(Array.from({ length: 42 }, () => 0.06)), [m, x] = L(!1), [_, z] = L(!1), [M, C] = L(
    () => Array.from({ length: 42 }, () => 0.06)
  ), y = $e(() => {
    var P;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((P = navigator.mediaDevices) != null && P.getUserMedia);
  }, [t]), d = J(() => {
    p.current && (p.current.getTracks().forEach((P) => P.stop()), p.current = null);
  }, []), k = J(() => {
    var P;
    c.current !== null && (window.cancelAnimationFrame(c.current), c.current = null), (P = f.current) == null || P.disconnect(), f.current = null, l.current = null, u.current && (u.current.close(), u.current = null);
  }, []), I = J(() => {
    const P = Array.from({ length: 42 }, () => 0.06);
    h.current = P, C(P);
  }, []), A = J((P) => {
    const X = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!X)
      return;
    const oe = new X(), fe = oe.createAnalyser();
    fe.fftSize = 2048, fe.smoothingTimeConstant = 0.78;
    const le = oe.createMediaStreamSource(P);
    le.connect(fe), u.current = oe, l.current = fe, f.current = le;
    const Q = new Uint8Array(fe.fftSize), S = () => {
      const B = l.current;
      if (!B) return;
      B.getByteTimeDomainData(Q);
      let ee = 0;
      for (let G = 0; G < Q.length; G += 1) {
        const pe = (Q[G] - 128) / 128;
        ee += pe * pe;
      }
      const H = Math.sqrt(ee / Q.length), v = Math.max(0.04, Math.min(1, H * 5.2)), O = h.current.slice(1);
      O.push(v), h.current = O, C(O), c.current = window.requestAnimationFrame(S);
    };
    c.current = window.requestAnimationFrame(S);
  }, []), R = J(async () => {
    if (!(!y || _ || n.current || m))
      try {
        const X = await navigator.mediaDevices.getUserMedia({ audio: !0 }), oe = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], le = typeof MediaRecorder.isTypeSupported == "function" ? oe.find((S) => MediaRecorder.isTypeSupported(S)) : void 0, Q = le ? new MediaRecorder(X, { mimeType: le }) : new MediaRecorder(X);
        s.current = [], g.current = !0, p.current = X, n.current = Q, I(), A(X), Q.ondataavailable = (S) => {
          S.data.size > 0 && s.current.push(S.data);
        }, Q.onstop = async () => {
          x(!1);
          const S = new Blob(s.current, { type: Q.mimeType || "audio/webm" });
          if (s.current = [], n.current = null, d(), k(), S.size === 0) {
            I();
            return;
          }
          if (!g.current) {
            I();
            return;
          }
          z(!0);
          try {
            const B = await dr({
              widgetId: t,
              apiUrl: e,
              audio: S
            });
            a(B);
          } catch (B) {
            console.error("[Pitaj.io] Dictation transcription failed", B), r == null || r(B);
          } finally {
            z(!1), I();
          }
        }, Q.onerror = () => {
          x(!1), n.current = null, d(), k(), I();
        }, Q.start(), x(!0);
      } catch (X) {
        x(!1), d(), k(), I(), console.error("[Pitaj.io] Dictation microphone access failed", X);
      }
  }, [e, m, _, y, r, a, I, A, d, k, t]), F = J(() => {
    const P = n.current;
    !P || !m || _ || (g.current = !0, P.stop(), x(!1));
  }, [m, _]), D = J(() => {
    const P = n.current;
    !P || !m || (g.current = !1, P.stop(), x(!1));
  }, [m]);
  return Z(() => () => {
    const P = n.current;
    P && P.state !== "inactive" && P.stop(), d(), k();
  }, [d, k]), {
    isSupported: y,
    isListening: m,
    isProcessing: _,
    waveformLevels: M,
    start: R,
    stopAndTranscribe: F,
    cancel: D
  };
}
const Je = [
  { score: 1, emoji: "😡", label: "Jako loše", color: "#ef4444", satisfaction: "negative" },
  { score: 2, emoji: "🙁", label: "Loše", color: "#f97316", satisfaction: "negative" },
  { score: 3, emoji: "😐", label: "U redu", color: "#eab308", satisfaction: "neutral" },
  { score: 4, emoji: "🙂", label: "Dobro", color: "#84cc16", satisfaction: "positive" },
  { score: 5, emoji: "🤩", label: "Odlično!", color: "#10b981", satisfaction: "positive" }
];
function Ci({
  initialScore: t = 5,
  title: e = "Kako biste ocijenili vaše iskustvo?",
  subtitle: a,
  onSubmit: r,
  onDismiss: o,
  compact: n = !1
}) {
  const [p, s] = L(t), [g, c] = L(!1), [u, l] = L(!1), [f, h] = L(null), [m, x] = L(!1), _ = Je.find((y) => y.score === p) || Je[Je.length - 1], z = J((y) => {
    s(y), h(null), x(!0), setTimeout(() => x(!1), 300);
  }, []), M = J(async (y) => {
    if (y && (y.stopPropagation(), y.preventDefault()), !(g || u)) {
      c(!0), h(null);
      try {
        await r(_.satisfaction, p), l(!0);
      } catch (d) {
        c(!1), h(
          (d == null ? void 0 : d.message) || "Nismo uspjeli sačuvati ocjenu. Molimo pokušajte ponovo."
        );
      }
    }
  }, [_, p, r, g, u]), C = (p - 1) / 4 * 100;
  return u ? /* @__PURE__ */ i("div", { className: `pitaj-satisfaction-success ${n ? "is-compact" : ""}`, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "pitaj-satisfaction-success-icon",
        style: { backgroundColor: `${_.color}20`, color: _.color },
        children: /* @__PURE__ */ i(Ne, { size: 20 })
      }
    ),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-title", children: "Hvala na ocjeni!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-desc", children: [
      "Zabilježeno: ",
      _.emoji,
      " ",
      _.label,
      " (",
      p,
      "/5)"
    ] })
  ] }) : /* @__PURE__ */ i(
    "div",
    {
      className: `pitaj-satisfaction-card ${n ? "is-compact" : ""}`,
      onClick: (y) => y.stopPropagation(),
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-header", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-satisfaction-prompt", children: e }),
          a && /* @__PURE__ */ i("span", { className: "pitaj-satisfaction-subtitle", children: a })
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-mood-pill-wrap", children: /* @__PURE__ */ i(
          "div",
          {
            className: "pitaj-mood-pill",
            style: {
              backgroundColor: `${_.color}15`,
              color: _.color,
              borderColor: `${_.color}35`
            },
            children: [
              /* @__PURE__ */ i("span", { className: `pitaj-mood-pill-emoji ${m ? "is-bouncing" : ""}`, "aria-hidden": "true", children: _.emoji }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-label", children: _.label }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-score", children: [
                p,
                " / 5"
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "pitaj-mood-row", role: "radiogroup", "aria-label": "Ocjena zadovoljstva", children: Je.map((y) => {
          const d = p === y.score;
          return /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": d,
              "aria-label": `${y.score} od 5 - ${y.label}`,
              className: `pitaj-mood-btn ${d ? "is-active" : ""}`,
              style: d ? {
                backgroundColor: `${y.color}18`,
                borderColor: y.color,
                boxShadow: `0 4px 14px ${y.color}30`,
                color: y.color
              } : void 0,
              onClick: () => z(y.score),
              children: [
                /* @__PURE__ */ i("span", { className: "pitaj-mood-btn-emoji", children: y.emoji }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: "pitaj-mood-btn-num",
                    style: d ? { color: y.color, fontWeight: 700 } : void 0,
                    children: y.score
                  }
                )
              ]
            },
            `mood-${y.score}`
          );
        }) }),
        /* @__PURE__ */ i("div", { className: "pitaj-slider-track-wrap", children: [
          /* @__PURE__ */ i(
            "input",
            {
              type: "range",
              min: "1",
              max: "5",
              step: "1",
              value: p,
              onInput: (y) => z(Number(y.target.value)),
              className: "pitaj-range-slider",
              "aria-label": `Klizač ocjene: ${p} od 5 (${_.label})`,
              style: {
                color: _.color,
                background: `linear-gradient(to right, ${_.color} 0%, ${_.color} ${C}%, var(--pitaj-border) ${C}%, var(--pitaj-border) 100%)`
              }
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-slider-segments", "aria-hidden": "true", children: [
            /* @__PURE__ */ i("span", { children: "1" }),
            /* @__PURE__ */ i("span", { children: "2" }),
            /* @__PURE__ */ i("span", { children: "3" }),
            /* @__PURE__ */ i("span", { children: "4" }),
            /* @__PURE__ */ i("span", { children: "5" })
          ] })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-mood-submit-btn",
            style: {
              backgroundColor: _.color,
              boxShadow: `0 4px 14px ${_.color}40`
            },
            disabled: g,
            onClick: M,
            children: g ? "Slanje..." : "Pošalji ocjenu"
          }
        ),
        o && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-satisfaction-dismiss",
            onClick: (y) => {
              y.stopPropagation(), o();
            },
            children: "Možda kasnije"
          }
        ),
        f && /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-error", role: "alert", children: /* @__PURE__ */ i("span", { children: f }) })
      ]
    }
  );
}
const ur = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Jt() {
  const [t, e] = L(0);
  return Z(() => {
    const a = setTimeout(() => e(1), 1600), r = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(r);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(Ha, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: ur[t] }, t)
  ] });
}
function mr(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function hr(t) {
  const e = t.split(`
`).map((n) => n.trim()).filter((n) => n.length > 0);
  if (e.length < 2) return null;
  let a = "Forma";
  const r = e[0];
  if (/^forma:\s*/i.test(r))
    a = r.replace(/^forma:\s*/i, "").trim() || "Forma";
  else if (/^form:\s*/i.test(r))
    a = r.replace(/^form:\s*/i, "").trim() || "Form";
  else if (/^kontakt\s+upit:\s*/i.test(r))
    a = "Kontakt upit";
  else if (/^rezervacija/i.test(r))
    a = r.replace(/:\s*$/, "").trim();
  else if (/^prijava\s+za\s+demo/i.test(r))
    a = "Prijava za demo";
  else
    return null;
  const o = e.slice(1).map((n) => {
    if (!n.startsWith("- ") && !n.startsWith("* ")) return null;
    const p = n.slice(2), s = p.indexOf(":");
    if (s < 1) return null;
    const g = p.slice(0, s).trim(), c = p.slice(s + 1).trim();
    return !g || !c ? null : { label: g, value: c };
  }).filter((n) => !!n);
  return o.length < 1 ? null : { title: a, entries: o };
}
function fr({
  conversation: t,
  config: e,
  isStreaming: a,
  rateLimitCountdown: r,
  errorBanner: o,
  onSendMessage: n,
  onApiError: p,
  onSubmitSatisfaction: s,
  isRatingPromptActive: g
}) {
  var B, ee, H;
  const [c, u] = L(""), [l, f] = L(!1), [h, m] = L(null), [x, _] = L([]), z = re(null), M = re(null), C = re(null), y = e.content || {}, d = e.chatAvailable === !1, k = e.transcribeAvailable === !1, I = a || r !== null || d, A = Ii({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: J((v) => {
      u((O) => O ? `${O} ${v}` : v);
    }, []),
    onError: J((v) => {
      p == null || p(v, "Greška pri transkripciji.");
    }, [p])
  });
  Z(() => {
    const v = z.current;
    v && (v.scrollTop = v.scrollHeight);
  }, [t.messages, a]), Z(() => {
    const v = M.current;
    v && (v.style.height = "auto", v.style.height = `${Math.min(v.scrollHeight, 96)}px`);
  }, [c]), Z(() => {
    f(!1);
  }, [y.dismissibleNotice]);
  const R = (v) => {
    _((O) => {
      const G = O.find((pe) => pe.id === v);
      if (G != null && G.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(G.previewUrl);
        } catch {
        }
      return O.filter((pe) => pe.id !== v);
    });
  }, F = (v) => {
    const O = (v ?? c).trim();
    if (!O && x.length === 0 || I) return;
    const G = `${O}${$i(x)}`.trim();
    n(G), x.forEach((pe) => {
      if (pe.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(pe.previewUrl);
        } catch {
        }
    }), _([]), v || (u(""), M.current && (M.current.style.height = "auto"));
  }, D = (v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), F());
  }, P = y.messagePlaceholder || e.placeholder || "Pitajte bilo šta...", X = ((B = y.dismissibleNotice) == null ? void 0 : B.trim()) || "", oe = ((ee = y.footerText) == null ? void 0 : ee.trim()) || "", fe = y.showSuggestedMessages === !1 || y.keepShowingSuggestedMessages !== !0 ? [] : y.suggestedMessageRows || [], le = ((H = [...t.messages].reverse().find((v) => v.sender === "ai")) == null ? void 0 : H.id) ?? null, Q = A.isListening, S = async (v, O) => {
    navigator.clipboard && (await navigator.clipboard.writeText(O), m(v), window.setTimeout(() => {
      m((G) => G === v ? null : G);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: z, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-conversation-ticket-label", children: "Broj tiketa:" }),
        /* @__PURE__ */ i("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ i("span", { className: "pitaj-date-label", children: "Danas" }),
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" })
      ] }),
      t.messages.map((v) => {
        const O = v.sender === "user", G = O ? hr(v.content) : null, pe = !O && v.isStreaming && !v.content && !v.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${O ? "user" : "ai"}${v.widget ? " has-widget" : ""}${pe ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              O ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${G ? "is-form-submission" : ""}`, children: G ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: G.title.toLowerCase().startsWith("forma") ? G.title : `Forma: ${G.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: G.entries.map((ue) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: ue.label }),
                  /* @__PURE__ */ i("dd", { children: ue.value })
                ] }, `${v.id}-${ue.label}`)) })
              ] }) : v.content }) : /* @__PURE__ */ i(we, { children: [
                v.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(Va, { content: v.content }),
                  v.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                v.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Ya, { widget: v.widget, onAction: (ue) => F(ue) }) }),
                v.isStreaming && !v.content && !v.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Jt, {}) })
              ] }),
              !O && v.sources && v.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: "Izvori i dokumentacija:" }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: v.sources.map((ue) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: ue.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: ue.title }),
                      /* @__PURE__ */ i(xa, { size: 10 })
                    ]
                  },
                  ue.id
                )) })
              ] }),
              !O && v.suggestedQuestions && v.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: v.suggestedQuestions.map((ue, ze) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => F(ue),
                  disabled: I,
                  className: "pitaj-followup-chip",
                  children: ue
                },
                `sug-f-${ze}`
              )) }),
              (!v.isStreaming || !!v.content || !!v.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: mr(v.timestamp) }),
                !O && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  v.id === le && !a && /* @__PURE__ */ i(we, { children: y.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(we, { children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => s == null ? void 0 : s("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": "Korisno",
                        title: "Korisno",
                        children: /* @__PURE__ */ i(ya, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => s == null ? void 0 : s("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": "Nije korisno",
                        title: "Nije korisno",
                        children: /* @__PURE__ */ i(ka, { size: 14 })
                      }
                    )
                  ] }) }),
                  v.id === le && !a && y.copyMessageEnabled !== !1 && !!v.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void S(v.id, v.content),
                      className: `pitaj-msg-action-btn ${h === v.id ? "is-active" : ""}`,
                      "aria-label": h === v.id ? "Kopirano" : "Kopiraj odgovor",
                      title: h === v.id ? "Kopirano" : "Kopiraj odgovor",
                      children: h === v.id ? /* @__PURE__ */ i(Ne, { size: 14 }) : /* @__PURE__ */ i(wa, { size: 14 })
                    }
                  )
                ] }),
                O && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  Ne,
                  {
                    size: 10,
                    className: v.status === "read" ? "text-accent" : ""
                  }
                ) })
              ] })
            ] })
          },
          v.id
        );
      }),
      a && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Jt, {}) }) }) }),
      (g || t.status === "ended" && !t.satisfaction) && /* @__PURE__ */ i("div", { className: "pitaj-inline-satisfaction", children: /* @__PURE__ */ i(
        Ci,
        {
          title: "Ocijenite razgovor sa agentom",
          onSubmit: (v, O) => {
            s == null || s(v, O);
          }
        }
      ) })
    ] }),
    (o || r) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: r ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${r}s.` : o }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Mi,
        {
          rows: fe,
          fallbackQuestions: y.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: F,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      x.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: x.map((v) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: v.previewUrl ? /* @__PURE__ */ i("img", { src: v.previewUrl, alt: v.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(Ni, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: v.name, children: v.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => R(v.id),
            "aria-label": `Ukloni ${v.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(_e, { size: 10 })
          }
        )
      ] }, v.id)) }),
      X && !l && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: X }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => f(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(_e, { size: 12 })
          }
        )
      ] }),
      A.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${Q ? "is-recording" : ""}`, children: [
        y.attachmentsEnabled && /* @__PURE__ */ i(we, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: C,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (v) => {
                const O = v.currentTarget.files;
                if (v.currentTarget.value = "", !O || O.length === 0) return;
                const G = await Si(O);
                _((pe) => [...pe, ...G].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-composer-btn pitaj-attach-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var v;
                return (v = C.current) == null ? void 0 : v.click();
              },
              children: /* @__PURE__ */ i(zi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: M,
            value: c,
            onInput: (v) => u(v.target.value),
            onKeyDown: D,
            placeholder: P,
            rows: 1,
            disabled: I,
            className: "pitaj-textarea",
            style: Q ? { display: "none" } : void 0
          }
        ),
        Q ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => A.cancel(),
              children: /* @__PURE__ */ i(_e, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: A.waveformLevels.map((v, O) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + v * 15))}px` }
            },
            `dict-wave-conv-${O}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => A.stopAndTranscribe(),
              disabled: I || A.isProcessing,
              children: /* @__PURE__ */ i(Ne, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(we, { children: [
          y.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${A.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: A.isProcessing ? "Transkribujem..." : A.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => A.start(),
              disabled: I || k || !A.isSupported || A.isProcessing,
              children: /* @__PURE__ */ i(_i, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => F(),
              disabled: I || !c.trim() && x.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ i(yi, { size: 16 })
            }
          )
        ] })
      ] }),
      oe && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: oe }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(lt, { size: 13, className: "pitaj-powered-icon" }),
        e.poweredByText || "Pokreće",
        " ",
        /* @__PURE__ */ i(
          "a",
          {
            href: e.poweredByUrl || "https://pitaj.io",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Pitaj.io AI"
          }
        )
      ] })
    ] })
  ] });
}
function gr({
  config: t,
  openedByUser: e = !1,
  onStart: a,
  onApiError: r
}) {
  var le, Q;
  const [o, n] = L(""), [p, s] = L(!1), [g, c] = L(!1), [u, l] = L([]), f = re(null), h = re(null), m = t.content || {}, x = t.chatAvailable === !1, _ = t.transcribeAvailable === !1, z = Ii({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: J((S) => {
      n((B) => B ? `${B} ${S}` : S);
    }, []),
    onError: J((S) => {
      r == null || r(S, "Greška pri transkripciji.");
    }, [r])
  });
  Z(() => {
    var S;
    e && ((S = f.current) == null || S.focus({ preventScroll: !0 }));
  }, [e]), Z(() => {
    if (typeof window > "u") return;
    const S = window.matchMedia("(max-width: 768px)"), B = () => s(S.matches);
    return B(), S.addEventListener("change", B), () => S.removeEventListener("change", B);
  }, []), Z(() => {
    c(!1);
  }, [m.dismissibleNotice]);
  const C = (p && m.useDifferentMessageMobile && m.mobileWelcomeMessage ? m.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((S) => S.trim()).filter((S) => S.length > 0), y = m.autoShowInitialMessages !== !1 && !e, d = !p || m.showAutoPopupMobile !== !1, k = p && m.useDifferentDurationMobile && typeof m.mobileAutoShowDurationSeconds == "number" ? m.mobileAutoShowDurationSeconds : m.autoShowDurationSeconds ?? 0, I = y && d ? Math.max(0, k) * 1e3 : 0, A = (S) => {
    l((B) => {
      const ee = B.find((H) => H.id === S);
      if (ee != null && ee.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ee.previewUrl);
        } catch {
        }
      return B.filter((H) => H.id !== S);
    });
  }, R = (S) => {
    const B = (S ?? o).trim();
    if (!B && u.length === 0 || x) return;
    const ee = `${B}${$i(u)}`.trim();
    a(ee), u.forEach((H) => {
      if (H.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(H.previewUrl);
        } catch {
        }
    }), n(""), l([]);
  }, F = (S) => {
    S.key === "Enter" && !S.shiftKey && (S.preventDefault(), R());
  }, D = m.showSuggestedMessages === !1 ? [] : m.suggestedMessageRows || [], P = m.messagePlaceholder || t.placeholder || "Upišite svoje pitanje...", X = ((le = m.dismissibleNotice) == null ? void 0 : le.trim()) || "", oe = ((Q = m.footerText) == null ? void 0 : Q.trim()) || "", fe = z.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (C.length > 0 ? C : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((S, B) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: S }) }) }, `welcome-${B}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Mi,
        {
          rows: D,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: R,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: I,
          staggerMs: 150
        }
      ),
      u.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: u.map((S) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: S.previewUrl ? /* @__PURE__ */ i("img", { src: S.previewUrl, alt: S.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(Ni, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: S.name, children: S.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => A(S.id),
            "aria-label": `Ukloni ${S.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(_e, { size: 10 })
          }
        )
      ] }, S.id)) }),
      X && !g && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: X }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => c(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(_e, { size: 12 })
          }
        )
      ] }),
      z.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${fe ? "is-recording" : ""}`, children: [
        m.attachmentsEnabled && /* @__PURE__ */ i(we, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: h,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (S) => {
                const B = S.currentTarget.files;
                if (S.currentTarget.value = "", !B || B.length === 0) return;
                const ee = await Si(B);
                l((H) => [...H, ...ee].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-composer-btn pitaj-attach-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var S;
                return (S = h.current) == null ? void 0 : S.click();
              },
              children: /* @__PURE__ */ i(zi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: f,
            value: o,
            onInput: (S) => n(S.target.value),
            onKeyDown: F,
            placeholder: P,
            rows: 1,
            disabled: x,
            className: "pitaj-textarea",
            style: fe ? { display: "none" } : void 0
          }
        ),
        fe ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => z.cancel(),
              children: /* @__PURE__ */ i(_e, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: z.waveformLevels.map((S, B) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + S * 15))}px` }
            },
            `dict-wave-${B}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => z.stopAndTranscribe(),
              disabled: x || z.isProcessing,
              children: /* @__PURE__ */ i(Ne, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(we, { children: [
          m.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${z.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: z.isProcessing ? "Transkribujem..." : z.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => z.start(),
              disabled: x || _ || !z.isSupported || z.isProcessing,
              children: /* @__PURE__ */ i(_i, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => R(),
              disabled: x || !o.trim() && u.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ i(yi, { size: 16 })
            }
          )
        ] })
      ] }),
      oe && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: oe }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(lt, { size: 13, className: "pitaj-powered-icon" }),
        t.poweredByText || "Pokreće",
        " ",
        /* @__PURE__ */ i(
          "a",
          {
            href: t.poweredByUrl || "https://pitaj.io",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Pitaj.io AI"
          }
        )
      ] })
    ] })
  ] });
}
function br({
  isOpen: t,
  onClick: e,
  unreadCount: a = 0,
  config: r
}) {
  var u, l, f, h, m, x;
  const o = ((u = r.content) == null ? void 0 : u.launcherIconStyle) || "message-circle", n = typeof ((l = r.content) == null ? void 0 : l.launcherIconUrl) == "string" ? r.content.launcherIconUrl.trim() : "", p = ((f = r.content) == null ? void 0 : f.launcherShowText) === !0, s = ((h = r.content) == null ? void 0 : h.launcherTextSide) === "left" ? "left" : "right", g = p ? ((x = (m = r.content) == null ? void 0 : m.launcherText) == null ? void 0 : x.trim()) || r.title || r.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${p ? "has-label" : ""} ${p && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && n !== "" ? /* @__PURE__ */ i("img", { src: n, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? da : o === "message-square" ? ki : o === "contact" ? ga : ma, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(_e, { size: 22 }) })
        ] }),
        g && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: g }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function jr({ isOpen: t, onOpen: e, config: a, pendingRating: r }) {
  var I, A, R, F;
  const [o, n] = L(!1), [p, s] = L(!1), [g, c] = L(!1), [u, l] = L(t), f = re(null);
  Z(() => {
    t && (l(!0), c(!1));
  }, [t]), Z(() => {
    if (r && !t) {
      const D = setTimeout(() => {
        c(!0);
      }, 800);
      return () => clearTimeout(D);
    }
  }, [r, t]), Z(() => {
    const D = () => {
      var X;
      if (typeof window > "u") return;
      let P = window.innerWidth <= 640;
      if (!P && f.current) {
        const oe = (X = f.current.closest(".pitaj-root")) == null ? void 0 : X.parentElement;
        oe && oe.clientWidth > 0 && oe.clientWidth <= 640 && (P = !0);
      }
      n(P);
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, []);
  const h = a.content || {}, m = h.autoShowInitialMessages !== !1, x = h.showAutoPopupMobile !== !1, _ = !o || x, z = o && h.useDifferentDurationMobile && typeof h.mobileAutoShowDurationSeconds == "number" ? h.mobileAutoShowDurationSeconds : h.autoShowDurationSeconds ?? 0;
  if (Z(() => {
    if (r) return;
    if (!m || !_ || p || t || u) {
      c(!1);
      return;
    }
    const D = Math.max(0, z) * 1e3, P = setTimeout(() => {
      c(!0);
    }, D);
    return () => clearTimeout(P);
  }, [m, _, p, t, u, z, r]), !g || t)
    return null;
  let M = "";
  o && h.useDifferentMessageMobile && ((I = h.mobileWelcomeMessage) != null && I.trim()) ? M = h.mobileWelcomeMessage.trim() : (A = h.popupMessageText) != null && A.trim() ? M = h.popupMessageText.trim() : (R = a.welcomeMessage) != null && R.trim() ? M = a.welcomeMessage.trim() : (F = a.welcomeHeadline) != null && F.trim() ? M = a.welcomeHeadline.trim() : M = "Zdravo! Kako vam mogu pomoći danas?";
  const C = (D) => {
    D.stopPropagation(), D.preventDefault(), r ? r.onDismiss() : s(!0), c(!1);
  }, y = () => {
    e();
  }, d = a.title || a.name || "Pitaj.io Asistent", k = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: f,
      className: `pitaj-launcher-popup ${r ? "is-rating-popup" : ""}`,
      onClick: y,
      role: "button",
      tabIndex: 0,
      "aria-label": `${d}: ${r ? "Ocijenite razgovor" : M}`,
      onKeyDown: (D) => {
        (D.key === "Enter" || D.key === " ") && (D.preventDefault(), y());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: k ? /* @__PURE__ */ i("img", { src: k, alt: "" }) : /* @__PURE__ */ i(lt, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: d }),
            r && /* @__PURE__ */ i("span", { className: "pitaj-popup-tag", children: "Nova poruka" })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: C,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ i(_e, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: `pitaj-popup-body ${r ? "is-rating-body" : ""}`, children: r ? /* @__PURE__ */ i(
          Ci,
          {
            compact: !0,
            title: "Kako biste ocijenili vaše iskustvo?",
            onSubmit: async (D, P) => {
              await r.onSubmitRating(D, P), setTimeout(() => {
                c(!1);
              }, 2e3);
            }
          }
        ) : M }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function xr(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, r = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(r / (1e3 * 60)), n = Math.floor(r / (1e3 * 60 * 60)), p = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : n < 24 ? `prije ${n}h` : p < 7 ? `prije ${p}d` : e.toLocaleDateString();
}
function vr({ config: t, visitorId: e, onSelectTicket: a }) {
  const [r, o] = L([]), [n, p] = L("open"), [s, g] = L(1), [c, u] = L(!0), [l, f] = L(!0), [h, m] = L(!1), [x, _] = L(null), z = re(null), M = re(null), C = re(!1);
  Z(() => {
    let k = !0;
    return f(!0), o([]), g(1), u(!0), _(null), C.current = !1, bt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: 1,
      perPage: 15
    }).then((I) => {
      k && (o(I.tickets), u(I.hasMore), g(1));
    }).catch((I) => {
      k && _(I instanceof Error ? I.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      k && f(!1);
    }), () => {
      k = !1;
    };
  }, [t.apiUrl, t.companyId, e, n]);
  const y = J(() => {
    if (l || C.current || !c) return;
    C.current = !0, m(!0);
    const k = s + 1;
    bt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: k,
      perPage: 15
    }).then((I) => {
      o((A) => {
        const R = new Set(A.map((D) => D.id)), F = I.tickets.filter((D) => !R.has(D.id));
        return [...A, ...F];
      }), u(I.hasMore), g(k);
    }).catch((I) => {
      console.error("[Pitaj.io] Error loading more tickets:", I);
    }).finally(() => {
      m(!1), C.current = !1;
    });
  }, [t.apiUrl, t.companyId, c, l, s, n, e]);
  return Z(() => {
    const k = M.current, I = z.current;
    if (!k || !I || !c || l || h) return;
    const A = new IntersectionObserver(
      (R) => {
        var F;
        (F = R[0]) != null && F.isIntersecting && y();
      },
      { root: I, rootMargin: "120px" }
    );
    return A.observe(k), () => A.disconnect();
  }, [c, l, h, y]), /* @__PURE__ */ i(
    "div",
    {
      ref: z,
      className: "pitaj-tickets-screen",
      onScroll: (k) => {
        const I = k.currentTarget;
        !I || !c || l || C.current || I.scrollHeight - I.scrollTop - I.clientHeight < 120 && y();
      },
      tabIndex: 0,
      role: "region",
      "aria-label": "Lista tiketa",
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
          /* @__PURE__ */ i(
            "button",
            {
              className: n === "open" ? "is-active" : "",
              onClick: () => p("open"),
              role: "tab",
              "aria-selected": n === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: n === "closed" ? "is-active" : "",
              onClick: () => p("closed"),
              role: "tab",
              "aria-selected": n === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        l ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : x ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: x }) }) : r.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(ki, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: n === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: n === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          r.map((k) => {
            const I = k.messages || [], A = I.length > 0 ? I[I.length - 1] : null, R = I.length, F = R === 1 ? "1 poruka" : R >= 2 && R <= 4 ? `${R} poruke` : `${R} poruka`;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => a == null ? void 0 : a(k),
                "aria-label": `Otvori tiket ${k.ticketNumber || k.id}`,
                children: /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ i("strong", { className: "pitaj-ticket-number", children: k.ticketNumber || `Tiket #${k.id}` }),
                    /* @__PURE__ */ i("span", { className: `pitaj-ticket-status-badge ${k.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ i("span", { className: "pitaj-ticket-status-dot" }),
                      k.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  A && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: A.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: xr(k.updatedAt) }),
                    R > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: F })
                  ] })
                ] })
              },
              k.id
            );
          }),
          h && /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ i("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ i("div", { ref: M, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const wr = wi(() => import("./HistoryScreen-K-dfZuva.js"), (t) => t.HistoryScreen), yr = wi(() => import("./FormActionsScreen-DVTlbB9x.js"), (t) => t.FormActionsScreen);
function Ke(t) {
  if (!t || typeof t != "string") return null;
  const e = t.trim().toLowerCase();
  if (e === "transparent") return { r: 0, g: 0, b: 0 };
  if (e === "white") return { r: 255, g: 255, b: 255 };
  if (e === "black") return { r: 0, g: 0, b: 0 };
  if (e.startsWith("#")) {
    const o = e.slice(1);
    return o.length === 3 || o.length === 4 ? {
      r: Number.parseInt(o[0] + o[0], 16),
      g: Number.parseInt(o[1] + o[1], 16),
      b: Number.parseInt(o[2] + o[2], 16)
    } : o.length === 6 || o.length === 8 ? {
      r: Number.parseInt(o.slice(0, 2), 16),
      g: Number.parseInt(o.slice(2, 4), 16),
      b: Number.parseInt(o.slice(4, 6), 16)
    } : null;
  }
  const a = e.match(/^rgba?\(\s*([0-9.]+)\s*[, ]\s*([0-9.]+)\s*[, ]\s*([0-9.]+)/);
  if (a)
    return {
      r: Math.round(Number(a[1])),
      g: Math.round(Number(a[2])),
      b: Math.round(Number(a[3]))
    };
  const r = e.match(/^hsla?\(\s*([0-9.]+)(?:deg)?\s*[, ]\s*([0-9.]+)%\s*[, ]\s*([0-9.]+)%/);
  if (r) {
    const o = Number(r[1]) % 360, n = Number(r[2]) / 100, p = Number(r[3]) / 100, s = (1 - Math.abs(2 * p - 1)) * n, g = s * (1 - Math.abs(o / 60 % 2 - 1)), c = p - s / 2;
    let u = 0, l = 0, f = 0;
    return 0 <= o && o < 60 ? (u = s, l = g, f = 0) : 60 <= o && o < 120 ? (u = g, l = s, f = 0) : 120 <= o && o < 180 ? (u = 0, l = s, f = g) : 180 <= o && o < 240 ? (u = 0, l = g, f = s) : 240 <= o && o < 300 ? (u = g, l = 0, f = s) : 300 <= o && o < 360 && (u = s, l = 0, f = g), {
      r: Math.round((u + c) * 255),
      g: Math.round((l + c) * 255),
      b: Math.round((f + c) * 255)
    };
  }
  return null;
}
function kr(t) {
  return Ke(t);
}
function Xe(t, e) {
  const a = Ke(t);
  return a ? `rgba(${a.r}, ${a.g}, ${a.b}, ${e})` : null;
}
function _r(t, e, a) {
  const r = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${r(t)}${r(e)}${r(a)}`;
}
function Oe(t) {
  const e = Ke(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Nr(t, e) {
  if (e) {
    const r = Ke(e);
    if (r)
      return (0.2126 * r.r + 0.7152 * r.g + 0.0722 * r.b) / 255 > 0.6;
  }
  const a = Ke(t);
  return a ? (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255 <= 0.6 : !1;
}
function zr(t) {
  const e = kr(t);
  if (!e) return t;
  const a = Oe(t) === "#111827", r = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return _r(
    e.r + (o - e.r) * r,
    e.g + (o - e.g) * r,
    e.b + (o - e.b) * r
  );
}
function Mr({
  config: t,
  startOpen: e = !1,
  initialScreen: a = "new-conversation",
  onEvent: r,
  isInline: o = !1,
  isMobile: n,
  isCanvasPreview: p = !1
}) {
  var Be, Ue, Re, w, $, T, Y, E, ae, ne, W, te, U, be, V;
  const {
    config: s,
    setConfig: g,
    isOpen: c,
    setIsOpen: u,
    screen: l,
    setScreen: f,
    conversations: h,
    activeConversation: m,
    totalUnread: x,
    isStreaming: _,
    rateLimitTimer: z,
    errorBanner: M,
    selectConversation: C,
    startNewConversation: y,
    endConversation: d,
    deleteConversation: k,
    sendUserMessage: I,
    submitSatisfaction: A,
    visitorContact: R,
    visitorId: F,
    activeConversationId: D,
    appendConversationMessage: P,
    handleApiError: X
  } = ca(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: r,
    onActionTrigger: (j) => {
      if (Q(!0), u(!0), (l === "history" || l === "new-conversation") && f("conversation"), j.widget_id || j.widget)
        return;
      const N = Number(j.id), b = Number(j.form_id), q = Number.isInteger(N) && N > 0 ? N : null, ce = Number.isInteger(b) && b > 0 ? -b : null;
      B(q ?? ce);
    }
  }), oe = re(a), fe = re(e), [le, Q] = L(e), [S, B] = L(() => {
    var j, N, b, q;
    return ((j = s.previewDraft) == null ? void 0 : j.initialStep) === "form" && !!!(s.previewDraft.widget || (N = s.previewDraft.action) != null && N.widget || (b = s.previewDraft.action) != null && b.widget_id) ? ((q = s.previewDraft.action) == null ? void 0 : q.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  Z(() => {
    var j, N, b, q, ce, me, Ie;
    if (((j = s.previewDraft) == null ? void 0 : j.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (N = s.previewDraft.action) != null && N.widget || (b = s.previewDraft.action) != null && b.widget_id)) {
        const ve = ((q = s.previewDraft.action) == null ? void 0 : q.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        ve !== null && B(ve);
      }
    } else (((ce = s.previewDraft) == null ? void 0 : ce.initialStep) === "idle" || ((me = s.previewDraft) == null ? void 0 : me.initialStep) === "submitted" || ((Ie = s.previewDraft) == null ? void 0 : Ie.initialStep) === "dismissed") && B(null);
  }, [
    (Be = s.previewDraft) == null ? void 0 : Be.initialStep,
    (Re = (Ue = s.previewDraft) == null ? void 0 : Ue.action) == null ? void 0 : Re.id,
    ($ = (w = s.previewDraft) == null ? void 0 : w.form) == null ? void 0 : $.id,
    (T = s.previewDraft) == null ? void 0 : T.widget
  ]);
  const [ee, H] = L(null), [v, O] = L(null), [G, pe] = L(() => /* @__PURE__ */ new Set()), ue = J(() => {
    l === "conversation" && m && m.messages.length > 0 && !(m.satisfaction && m.satisfaction !== "none") && !G.has(m.id) && O(m.id);
  }, [l, m, G]), ze = J(async (j, N) => {
    v && (await A(v, j, N), O(null));
  }, [v, A]), K = J(() => {
    v && (pe((j) => new Set(j).add(v)), O(null));
  }, [v]), ge = re(null), [je, ye] = L(() => typeof n == "boolean" ? n : typeof window < "u" ? window.innerWidth <= 640 : !1);
  Z(() => {
    if (typeof n == "boolean") {
      ye(n);
      return;
    }
    const j = () => {
      if (typeof window > "u") return;
      let N = window.innerWidth <= 640;
      if (!N && ge.current) {
        const b = ge.current.getRootNode(), q = b instanceof ShadowRoot ? b.host : ge.current.parentElement, ce = (q == null ? void 0 : q.parentElement) || q;
        ce && ce.clientWidth > 0 && ce.clientWidth <= 640 && (N = !0);
      }
      ye(N);
    };
    return j(), window.addEventListener("resize", j), window.addEventListener("orientationchange", j), () => {
      window.removeEventListener("resize", j), window.removeEventListener("orientationchange", j);
    };
  }, [n]), Z(() => {
    if (typeof window > "u") return;
    const j = () => {
      const b = ge.current;
      if (!b) return;
      const q = window.visualViewport;
      if (q) {
        const ce = q.height < window.innerHeight - 100;
        b.style.setProperty("--pitaj-viewport-height", `${Math.round(q.height)}px`), b.style.setProperty("--pitaj-viewport-top", `${Math.round(q.offsetTop)}px`), b.style.setProperty("--pitaj-viewport-left", `${Math.round(q.offsetLeft)}px`), b.style.setProperty(
          "--pitaj-input-safe-bottom",
          ce ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        b.style.setProperty("--pitaj-viewport-height", "100dvh"), b.style.setProperty("--pitaj-viewport-top", "0px"), b.style.setProperty("--pitaj-viewport-left", "0px"), b.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    j();
    const N = window.visualViewport;
    return N && (N.addEventListener("resize", j), N.addEventListener("scroll", j)), window.addEventListener("resize", j), window.addEventListener("orientationchange", j), () => {
      N && (N.removeEventListener("resize", j), N.removeEventListener("scroll", j)), window.removeEventListener("resize", j), window.removeEventListener("orientationchange", j);
    };
  }, [c, je]), Z(() => {
    if (typeof document > "u" || !c || !je || o || p) return;
    const j = document.body.style.overflow, N = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = j, document.body.style.touchAction = N;
    };
  }, [c, je, o, p]), Z(() => {
    var b;
    if (typeof window > "u" || o) return;
    const j = (b = ge.current) == null ? void 0 : b.getRootNode(), N = j instanceof ShadowRoot ? j.host : null;
    if (N) {
      if (p || N.hasAttribute("data-pitaj-preview") || N.classList.contains("pitaj-preview-host")) {
        N.style.width = "100%", N.style.height = "100%", N.style.top = "0", N.style.left = "0", N.style.position = "relative";
        return;
      }
      c && je ? (N.style.top = "0", N.style.left = "0", N.style.width = "100%", N.style.height = "100%", N.setAttribute("data-pitaj-mobile-open", "true")) : (N.style.top = "", N.style.left = "", N.style.width = "0", N.style.height = "0", N.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [c, je, o, p]);
  const Me = s.formsEnabled === !0 && s.formsAvailable !== !1, Te = $e(() => {
    var b, q;
    const j = s.actions || [];
    if (j.length > 0 && typeof ((b = j[0]) == null ? void 0 : b.id) == "number")
      return j[0].id;
    const N = s.forms || [];
    return N.length > 0 && typeof ((q = N[0]) == null ? void 0 : q.id) == "number" ? -N[0].id : null;
  }, [s.actions, s.forms]), Ze = $e(() => ({
    open: () => {
      Q(!0), u(!0);
    },
    close: () => u(!1),
    toggle: () => {
      c || Q(!0), u(!c);
    },
    startConversation: (j) => {
      Q(!0), u(!0), j && j.trim() ? y(j.trim()) : f("new-conversation");
    },
    setScreen: (j) => f(j),
    setConfig: (j) => {
      const N = {
        ...s,
        ...j,
        colors: { ...s.colors || {}, ...j.colors || {} },
        content: { ...s.content || {}, ...j.content || {} },
        features: { ...s.features || {}, ...j.features || {} }
      };
      if (N.previewDraft) {
        if (N.previewDraft.action) {
          const b = N.previewDraft.action;
          N.actions = [b, ...(N.actions || []).filter((q) => q.id !== b.id)];
        }
        if (N.previewDraft.form) {
          const b = N.previewDraft.form;
          N.forms = [b, ...(N.forms || []).filter((q) => q.id !== b.id)], N.formsAvailable = !0, N.formsEnabled = !0;
        }
        if (N.previewDraft.widget) {
          const b = N.previewDraft.widget;
          N.widgets = [b, ...(N.widgets || []).filter((q) => q.id !== b.id)];
        }
      }
      g(N);
    }
  }), [s, c, u, f, y, g]), Ee = re({});
  Yt(Ee.current, Ze), Z(() => () => Yt(Ee.current, null), []), Z(() => {
    a !== oe.current && (oe.current = a, f(a));
  }, [a, f]), Z(() => {
    e !== fe.current && (fe.current = e, e && Q(!0), u(e));
  }, [e, u]), Z(() => {
    if (l === "forms") {
      Me && Te !== null && B(Te), f("new-conversation");
      return;
    }
    l === "contact" && f("new-conversation");
  }, [Te, Me, l, f]), Z(() => {
    var q;
    if (typeof document > "u") return;
    const j = (q = s.content) == null ? void 0 : q.fontFamily;
    if (!j) return;
    const N = j.trim().toLowerCase();
    let b = "";
    if (N === "inter" ? b = "family=Inter:wght@400;500;600;700" : N === "geist" ? b = "family=Geist:wght@400;500;600;700" : N === "plus jakarta sans" && (b = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), b) {
      const ce = `pitaj-font-${N.replace(/\s+/g, "-")}`;
      if (!document.getElementById(ce)) {
        const me = document.createElement("link");
        me.id = ce, me.rel = "stylesheet", me.href = `https://fonts.googleapis.com/css2?${b}&display=swap`, document.head.appendChild(me);
      }
    }
  }, [(Y = s.content) == null ? void 0 : Y.fontFamily]);
  const Ge = $e(() => {
    var Mt, St, $t, It, Ct;
    const j = s.colors || {}, N = ((Mt = s.content) == null ? void 0 : Mt.themeMode) === "dark" ? "dark" : "light", b = {};
    if (j.primaryColor) {
      b["--pitaj-accent"] = j.primaryColor, b["--pitaj-bubble-user"] = j.primaryColor, b["--pitaj-accent-hover"] = zr(j.primaryColor), b["--pitaj-accent-contrast"] = Oe(j.primaryColor), b["--pitaj-bubble-user-fg"] = Oe(j.primaryColor);
      const xe = Xe(j.primaryColor, 0.1), Fe = Xe(j.primaryColor, 0.16), At = Xe(j.primaryColor, 0.35);
      xe && (b["--pitaj-accent-soft"] = xe), Fe && (b["--pitaj-accent-soft-strong"] = Fe), At && (b["--pitaj-accent-ring"] = At);
    }
    const q = N === "dark" ? "#111827" : "#ffffff", ce = j.headerBg || q, me = Nr(ce, j.headerFg), Ie = j.headerFg || (me ? "#ffffff" : "#0f172a");
    b["--pitaj-header-bg"] = ce, b["--pitaj-header-fg"] = Ie, me ? (b["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", b["--pitaj-header-icon-hover"] = "#ffffff", b["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", b["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", b["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", b["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", b["--pitaj-header-badge-fg"] = "#ffffff", b["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (b["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", b["--pitaj-header-icon-hover"] = "#0f172a", b["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", b["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", b["--pitaj-header-border"] = j.border || "rgba(15, 23, 42, 0.08)", b["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", b["--pitaj-header-badge-fg"] = "#0f172a", b["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)"), b["--pitaj-chrome-border"] = N === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", j.surfaceBg && (b["--pitaj-surface"] = j.surfaceBg), j.subtle ? b["--pitaj-surface-subtle"] = j.subtle : j.surfaceBg && (b["--pitaj-surface-subtle"] = Xe(j.surfaceBg, 0.9) || j.surfaceBg), j.bubbleAiBg && (b["--pitaj-bubble-ai"] = j.bubbleAiBg), j.textFg && (b["--pitaj-bubble-ai-fg"] = j.textFg), j.textFg && (b["--pitaj-fg"] = j.textFg), j.mutedFg && (b["--pitaj-muted"] = j.mutedFg), j.border && (b["--pitaj-border"] = j.border), j.hover && (b["--pitaj-hover"] = j.hover), j.sendAccent && (b["--pitaj-send-accent"] = j.sendAccent, b["--pitaj-send-accent-contrast"] = Oe(j.sendAccent));
    const De = (St = s.content) == null ? void 0 : St.launcherButtonColor;
    De && (b["--pitaj-launcher-bg"] = De, b["--pitaj-launcher-fg"] = Oe(De));
    const ve = ($t = s.content) == null ? void 0 : $t.cornerRadius;
    if (ve) {
      const xe = ve === "sharp" || ve === "0px" ? "0px" : ve === "small" || ve === "8px" ? "8px" : ve === "medium" || ve === "12px" ? "12px" : ve === "large" || ve === "16px" ? "16px" : ve;
      b["--pitaj-radius"] = xe, xe === "0px" ? (b["--pitaj-radius-bubble"] = "0px", b["--pitaj-radius-input"] = "0px", b["--pitaj-radius-btn"] = "0px", b["--pitaj-radius-avatar"] = "0px", b["--pitaj-radius-full"] = "0px", b["--pitaj-radius-corner-sm"] = "0px", b["--pitaj-launcher-radius"] = "0px", b["--pitaj-launcher-pill-radius"] = "0px", b["--pitaj-badge-radius"] = "0px") : xe === "8px" ? (b["--pitaj-radius-bubble"] = "8px", b["--pitaj-radius-input"] = "8px", b["--pitaj-radius-btn"] = "6px", b["--pitaj-radius-avatar"] = "6px", b["--pitaj-radius-full"] = "8px", b["--pitaj-radius-corner-sm"] = "2px", b["--pitaj-launcher-radius"] = "8px", b["--pitaj-launcher-pill-radius"] = "8px", b["--pitaj-badge-radius"] = "4px") : xe === "12px" ? (b["--pitaj-radius-bubble"] = "12px", b["--pitaj-radius-input"] = "12px", b["--pitaj-radius-btn"] = "8px", b["--pitaj-radius-avatar"] = "10px", b["--pitaj-radius-full"] = "12px", b["--pitaj-radius-corner-sm"] = "4px", b["--pitaj-launcher-radius"] = "12px", b["--pitaj-launcher-pill-radius"] = "12px", b["--pitaj-badge-radius"] = "6px") : (b["--pitaj-radius-bubble"] = "18px", b["--pitaj-radius-input"] = "14px", b["--pitaj-radius-btn"] = "10px", b["--pitaj-radius-avatar"] = "50%", b["--pitaj-radius-full"] = "999px", b["--pitaj-radius-corner-sm"] = "4px", b["--pitaj-launcher-radius"] = "50%", b["--pitaj-launcher-pill-radius"] = "999px", b["--pitaj-badge-radius"] = "999px");
    }
    const pt = (It = s.content) == null ? void 0 : It.fontFamily;
    if (pt) {
      const xe = pt.toLowerCase(), Fe = xe === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : xe === "arial" ? "Arial, Helvetica, sans-serif" : xe === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : xe === "georgia" ? "Georgia, serif" : xe === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : xe === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${pt}', 'Inter', system-ui, sans-serif`;
      b["--pitaj-font"] = Fe, b.fontFamily = Fe;
    }
    const ct = (Ct = s.content) == null ? void 0 : Ct.fontSize;
    return ct && (b["--pitaj-font-size"] = ct, b.fontSize = ct), b;
  }, [
    s.colors,
    (E = s.content) == null ? void 0 : E.themeMode,
    (ae = s.content) == null ? void 0 : ae.launcherButtonColor,
    (ne = s.content) == null ? void 0 : ne.cornerRadius,
    (W = s.content) == null ? void 0 : W.fontFamily,
    (te = s.content) == null ? void 0 : te.fontSize
  ]), Ye = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ i(we, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: ge,
      className: `pitaj-root ${Ye} ${c ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${p ? "is-canvas-preview" : ""} ${je ? "is-mobile" : ""} ${o && ((U = s.content) != null && U.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: Ge,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-window ${c ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !c,
            children: [
              /* @__PURE__ */ i(
                Oa,
                {
                  screen: l,
                  activeConversation: m,
                  config: s,
                  onBack: () => {
                    const j = ee || "new-conversation";
                    H(null), f(j);
                  },
                  onClose: () => {
                    ue(), u(!1);
                  },
                  onNewConversation: () => {
                    H(null), f("new-conversation");
                  },
                  onEndConversation: () => {
                    ue(), d(), u(!1);
                  },
                  onDeleteConversation: ((be = s.content) == null ? void 0 : be.deleteConversationsEnabled) !== !1 && m ? () => k(m.id) : void 0,
                  onViewHistory: () => {
                    H(null), f("history");
                  },
                  onViewTickets: () => {
                    H(null), f("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                l === "conversation" && m && /* @__PURE__ */ i(
                  fr,
                  {
                    conversation: m,
                    config: s,
                    isStreaming: _,
                    rateLimitCountdown: z,
                    errorBanner: M,
                    onSendMessage: I,
                    onApiError: X,
                    onSubmitSatisfaction: (j, N) => A(m.id, j, N),
                    isRatingPromptActive: v === m.id
                  }
                ),
                l === "new-conversation" && /* @__PURE__ */ i(
                  gr,
                  {
                    config: s,
                    openedByUser: le,
                    onStart: (j) => {
                      y(j);
                    },
                    onApiError: X
                  }
                ),
                l === "history" && /* @__PURE__ */ i(
                  wr,
                  {
                    conversations: h,
                    config: s,
                    onSelectConversation: (j) => {
                      H("history"), C(j);
                    },
                    onNewConversation: () => {
                      H(null), f("new-conversation");
                    },
                    onDeleteConversation: ((V = s.content) == null ? void 0 : V.deleteConversationsEnabled) !== !1 ? k : void 0
                  }
                ),
                l === "tickets" && /* @__PURE__ */ i(
                  vr,
                  {
                    config: s,
                    visitorId: F,
                    onSelectTicket: (j) => {
                      var Ie;
                      H("tickets");
                      const N = (Ie = j.messages) == null ? void 0 : Ie.find((De) => De.sender === "user"), b = j.messages && j.messages.length > 0 ? j.messages[j.messages.length - 1] : null, q = N ? N.content.length > 40 ? N.content.slice(0, 40) + "…" : N.content : j.ticketNumber || `Tiket #${j.id}`, me = {
                        id: j.conversationId ? String(j.conversationId) : String(j.id),
                        title: q,
                        preview: b ? b.content : j.ticketNumber || `Tiket #${j.id}`,
                        timestamp: j.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: j.messages || [],
                        status: j.isResolved ? "ended" : "active",
                        ticketNumber: j.ticketNumber
                      };
                      C(me);
                    }
                  }
                ),
                (l === "conversation" || l === "new-conversation") && Me && S !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  yr,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: D,
                    initialActionId: S,
                    visitorContact: R,
                    onApiError: X,
                    blockedReason: z !== null ? `Sačekajte ${z}s prije novog zahtjeva.` : null,
                    onSubmitted: (j) => {
                      var N, b;
                      if (P(D, j, "user"), s.mockMode || s.isPreview) {
                        const q = ((b = (N = s.previewDraft) == null ? void 0 : N.form) == null ? void 0 : b.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          P(D, q, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => B(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!c || !je) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${c ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            jr,
            {
              isOpen: c,
              onOpen: () => {
                Q(!0), u(!0);
              },
              config: s,
              pendingRating: v && !c ? {
                conversationId: v,
                onSubmitRating: ze,
                onDismiss: K
              } : null
            }
          ),
          /* @__PURE__ */ i(
            br,
            {
              isOpen: c,
              onClick: () => {
                c || Q(!0), u(!c);
              },
              unreadCount: x + (v && !c ? 1 : 0),
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const se = {
  companyId: "default",
  enabled: !0,
  name: "AI Podrška",
  title: "Pitaj.io Asistent",
  position: "bottom-right",
  welcomeHeadline: "Zdravo! Kako mogu pomoći danas?",
  welcomeMessage: "Pitajte me bilo šta o našim uslugama i cijenama. Odgovaram odmah 24/7.",
  placeholder: "Napišite poruku...",
  suggestedQuestions: [],
  poweredBy: !0,
  poweredByText: "Pokreće",
  poweredByUrl: "https://pitaj.io",
  mockMode: !1,
  accentGradient: [],
  contactFields: ["name"],
  contact: {
    enabled: !0,
    title: "Kontakt",
    subtitle: "Ostavite nam podatke da vas možemo kontaktirati.",
    submitLabel: "Pošalji kontakt podatke"
  },
  content: {
    avatarBorder: !0,
    messagePlaceholder: "Napišite poruku...",
    dismissibleNotice: "",
    footerText: "",
    attachmentsEnabled: !1,
    voiceToTextEnabled: !0,
    copyMessageEnabled: !0,
    collectUserFeedbackEnabled: !0,
    deleteConversationsEnabled: !0,
    showSuggestedMessages: !0,
    keepShowingSuggestedMessages: !1,
    suggestedMessageRows: [],
    useDifferentMessageMobile: !1,
    mobileWelcomeMessage: "",
    autoShowInitialMessages: !0,
    autoShowDurationSeconds: 0,
    showAutoPopupMobile: !0,
    useDifferentDurationMobile: !1,
    mobileAutoShowDurationSeconds: null,
    popupMessageText: "",
    themeMode: "light",
    tintedGrayscaleEnabled: !1,
    accentColorEnabled: !0,
    accentColorForHeaderEnabled: !1,
    accentColorForSendIconEnabled: !1,
    tintedGrayscaleHue: 0,
    tintedGrayscaleTint: 0,
    tintedGrayscaleShade: 0,
    launcherButtonColor: "#05070c",
    launcherIconStyle: "message-circle",
    launcherIconUrl: "",
    launcherShowText: !1,
    launcherText: "",
    launcherTextSide: "right",
    showInlineLauncher: !1,
    cornerRadius: "16px",
    fontFamily: "Inter",
    fontSize: "14px",
    languageSource: "browser",
    defaultLanguage: "en",
    supportedLanguages: ["en"]
  },
  features: {
    allowMultipleConversations: !0,
    showTypingIndicator: !0,
    showSources: !0,
    showSuggestedQuestions: !0,
    enableSound: !1
  },
  chatAvailable: !0,
  transcribeAvailable: !0,
  formsAvailable: !1,
  formsEnabled: !1,
  forms: [],
  actions: [],
  colors: {
    primaryColor: "#2563eb",
    headerBg: "#ffffff",
    headerFg: "#0f172a",
    surfaceBg: "#ffffff",
    bubbleAiBg: "#ffffff",
    bubbleUserBg: "#2563eb",
    textFg: "#0f172a",
    mutedFg: "#6b7280",
    border: "#e5e7eb",
    sendAccent: "#2563eb"
  }
};
function Sr(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), r = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * r + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function $r(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function Ir(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const r = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, n = Number.parseInt(a.slice(5, 7), 16) / 255, p = Math.max(r, o, n), s = Math.min(r, o, n), g = p - s;
  let c = 0;
  const u = (p + s) / 2, l = g === 0 ? 0 : g / (1 - Math.abs(2 * u - 1));
  if (g !== 0)
    switch (p) {
      case r:
        c = (o - n) / g % 6;
        break;
      case o:
        c = (n - r) / g + 2;
        break;
      default:
        c = (r - o) / g + 4;
        break;
    }
  return { h: Math.round((c * 60 + 360) % 360), s: Math.round(l * 100), l: Math.round(u * 100) };
}
function Cr(t) {
  const e = typeof t == "string" ? t : "";
  switch (e) {
    case "text":
    case "email":
    case "phone":
    case "number":
    case "select":
    case "radio":
    case "checkbox":
    case "textarea":
    case "date":
    case "file":
    case "hidden":
      return e;
    default:
      return "text";
  }
}
function Ar(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((n) => typeof n == "object" && n !== null).map((n) => ({
      key: typeof n.key == "string" ? n.key : "",
      type: Cr(n.type),
      label: typeof n.label == "string" ? n.label : "",
      required: n.required === !0,
      placeholder: typeof n.placeholder == "string" ? n.placeholder : void 0,
      options: Array.isArray(n.options) ? n.options.filter((p) => typeof p == "string" && p.trim() !== "") : void 0,
      accept: Array.isArray(n.accept) ? n.accept.filter((p) => typeof p == "string" && p.trim() !== "") : void 0,
      max_size_kb: typeof n.max_size_kb == "number" ? n.max_size_kb : void 0,
      value: typeof n.value == "string" ? n.value : void 0
    })).filter((n) => n.key !== "");
    return {
      id: typeof e.id == "number" ? e.id : 0,
      name: typeof e.name == "string" ? e.name : "",
      description: typeof e.description == "string" ? e.description : null,
      submit_label: typeof e.submit_label == "string" ? e.submit_label : "Pošalji",
      success_message: typeof e.success_message == "string" ? e.success_message : void 0,
      schema_version: typeof e.schema_version == "string" ? e.schema_version : "v1",
      schema_json: { fields: o }
    };
  }).filter((e) => e.id > 0 && e.name.trim() !== "" && e.schema_json.fields.length > 0) : [];
}
function Lr(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function Tr(t, e) {
  var r, o, n, p, s, g, c, u, l;
  if (t === "default")
    return { ...se, companyId: t || "default" };
  const a = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const f = `${a}/api/widget/${t}/config`, h = await fetch(f, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!h.ok) {
      if (h.status === 403) {
        const K = await h.json().catch(() => null);
        if ((K == null ? void 0 : K.code) === "COUNTRY_BLOCKED" || K != null && K.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...se,
            companyId: t,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${h.status}), using defaults.`), { ...se, companyId: t, apiUrl: a };
    }
    const m = await h.json(), x = m.accent_color || ((r = se.colors) == null ? void 0 : r.primaryColor) || "#2563eb", _ = Array.isArray(m.suggested_questions) ? m.suggested_questions.filter((K) => typeof K == "string" && K.trim() !== "").slice(0, 4) : [], z = Array.isArray(m.contact_fields) ? m.contact_fields.filter(
      (K) => K === "name" || K === "email" || K === "phone"
    ) : [], C = (Array.isArray(m.channels) ? m.channels : []).find(
      (K) => typeof K == "object" && K !== null && K.channel === "chat_bubble"
    ), y = (C == null ? void 0 : C.enabled) !== !1, d = m.widget_content && typeof m.widget_content == "object" ? m.widget_content : null, k = Array.isArray(d == null ? void 0 : d.suggested_message_rows) ? d.suggested_message_rows.filter((K) => typeof K == "object" && K !== null).map((K) => {
      const ge = typeof K.text == "string" ? K.text.trim() : "", je = Array.isArray(K.children) ? K.children.filter((ye) => typeof ye == "string" && ye.trim() !== "") : [];
      return {
        text: ge,
        children: je.length > 0 ? je : void 0
      };
    }).filter((K) => K.text !== "").slice(0, 4) : [], I = {
      avatarBorder: (d == null ? void 0 : d.avatar_border) !== !1,
      messagePlaceholder: typeof (d == null ? void 0 : d.message_placeholder) == "string" && d.message_placeholder.trim() !== "" ? d.message_placeholder : se.placeholder,
      dismissibleNotice: typeof (d == null ? void 0 : d.dismissible_notice) == "string" ? d.dismissible_notice : "",
      footerText: typeof (d == null ? void 0 : d.footer_text) == "string" ? d.footer_text : "",
      attachmentsEnabled: (d == null ? void 0 : d.attachments_enabled) === !0,
      voiceToTextEnabled: (d == null ? void 0 : d.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (d == null ? void 0 : d.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (d == null ? void 0 : d.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (d == null ? void 0 : d.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (d == null ? void 0 : d.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (d == null ? void 0 : d.keep_showing_suggested_messages) === !0,
      suggestedMessageRows: k,
      useDifferentMessageMobile: (d == null ? void 0 : d.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (d == null ? void 0 : d.mobile_welcome_message) == "string" ? d.mobile_welcome_message : "",
      autoShowInitialMessages: (d == null ? void 0 : d.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (d == null ? void 0 : d.auto_show_duration_seconds) == "number" ? Math.max(0, d.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (d == null ? void 0 : d.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (d == null ? void 0 : d.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (d == null ? void 0 : d.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, d.mobile_auto_show_duration_seconds) : null,
      popupMessageText: typeof (d == null ? void 0 : d.popup_message_text) == "string" ? d.popup_message_text : "",
      themeMode: (d == null ? void 0 : d.theme_mode) === "dark" ? "dark" : "light",
      tintedGrayscaleEnabled: (d == null ? void 0 : d.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (d == null ? void 0 : d.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (d == null ? void 0 : d.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (d == null ? void 0 : d.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (d == null ? void 0 : d.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(d.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (d == null ? void 0 : d.tinted_grayscale_tint) == "number" ? Math.max(-100, Math.min(100, Math.round(d.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (d == null ? void 0 : d.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(d.tinted_grayscale_shade))) : 0,
      launcherButtonColor: $r(d == null ? void 0 : d.launcher_button_color, "#05070c"),
      launcherIconStyle: (d == null ? void 0 : d.launcher_icon_style) === "sparkles" || (d == null ? void 0 : d.launcher_icon_style) === "message-square" || (d == null ? void 0 : d.launcher_icon_style) === "contact" || (d == null ? void 0 : d.launcher_icon_style) === "custom" ? d.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (d == null ? void 0 : d.launcher_icon_url) == "string" ? d.launcher_icon_url : "",
      launcherShowText: (d == null ? void 0 : d.launcher_show_text) === !0,
      launcherText: typeof (d == null ? void 0 : d.launcher_text) == "string" ? d.launcher_text : "",
      launcherTextSide: (d == null ? void 0 : d.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (d == null ? void 0 : d.show_inline_launcher) === !0,
      cornerRadius: typeof (d == null ? void 0 : d.corner_radius) == "string" ? d.corner_radius : "16px",
      fontFamily: typeof (d == null ? void 0 : d.font_family) == "string" ? d.font_family : "Inter",
      fontSize: typeof (d == null ? void 0 : d.font_size) == "string" ? d.font_size : "14px",
      languageSource: (d == null ? void 0 : d.language_source) === "website" ? "website" : "browser",
      defaultLanguage: typeof (d == null ? void 0 : d.default_language) == "string" ? d.default_language : "en",
      supportedLanguages: Array.isArray(d == null ? void 0 : d.supported_languages) ? d.supported_languages : ["en"],
      guardrails: d == null ? void 0 : d.guardrails
    }, A = I.themeMode === "dark" ? "dark" : "light", R = I.accentColorEnabled !== !1, F = I.accentColorForHeaderEnabled === !0, D = I.accentColorForSendIconEnabled === !0, P = I.tintedGrayscaleEnabled === !0, X = I.tintedGrayscaleHue ?? 0, oe = I.tintedGrayscaleTint ?? 0, fe = I.tintedGrayscaleShade ?? 0, le = R ? x : A === "dark" ? "#9ca3af" : "#6b7280", S = (Ir(le).h + X + 360) % 360, B = Math.max(0, Math.min(46, 10 + oe * 0.36)), ee = Math.max(-24, Math.min(24, fe * 0.24)), H = A === "dark" ? {
      surfaceBg: "#0b1220",
      headerBg: "#111827",
      headerFg: "#f9fafb",
      bubbleAiBg: "#111827",
      textFg: "#e5e7eb",
      mutedFg: "#9ca3af",
      border: "#263246",
      hover: "#172033",
      subtle: "#111827"
    } : {
      surfaceBg: "#ffffff",
      headerBg: "#ffffff",
      headerFg: "#0f172a",
      bubbleAiBg: "#ffffff",
      textFg: "#0f172a",
      mutedFg: "#6b7280",
      border: "#e5e7eb",
      hover: "#f3f4f6",
      subtle: "#f3f4f6"
    };
    if (F && (H.headerBg = le, H.headerFg = Sr(le)), P) {
      const K = A === "dark" ? Math.max(8, Math.min(20, 12 + ee)) : Math.max(88, Math.min(97, 95 + ee * 0.22)), ge = A === "dark" ? Math.max(10, Math.min(24, 16 + ee)) : Math.max(80, Math.min(94, 89 + ee * 0.35)), je = A === "dark" ? Math.max(11, Math.min(26, 18 + ee * 0.9)) : Math.max(83, Math.min(95, ge + 3)), ye = A === "dark" ? Math.max(22, Math.min(40, 30 + ee)) : Math.max(70, Math.min(88, 82 + ee * 0.38)), Me = A === "dark" ? Math.max(16, Math.min(30, 22 + ee)) : Math.max(78, Math.min(92, ge - 2));
      H.surfaceBg = `hsl(${S} ${B}% ${K}%)`, H.bubbleAiBg = `hsl(${S} ${Math.max(0, B - 2)}% ${je}%)`, H.subtle = `hsl(${S} ${Math.max(0, B - 4)}% ${ge}%)`, H.border = `hsl(${S} ${Math.max(0, B - 5)}% ${ye}%)`, H.hover = `hsl(${S} ${Math.max(0, B - 3)}% ${Me}%)`;
    }
    const v = Ar(m.forms), O = Lr(m.actions).filter(
      (K) => v.some((ge) => ge.id === K.form_id)
    ), G = m.forms_enabled === !0 && v.length > 0 && O.length > 0, pe = m.chat_available !== !1, ue = m.transcribe_available !== !1 && pe, ze = m.forms_available !== !1 && G;
    return {
      ...se,
      companyId: t,
      enabled: y,
      apiUrl: a,
      name: m.company_name || se.name,
      title: m.bot_name || se.title,
      avatar: typeof (d == null ? void 0 : d.avatar_url) == "string" && d.avatar_url.trim() !== "" ? d.avatar_url : se.avatar,
      welcomeHeadline: m.bot_name ? `Ćaskajte sa ${m.bot_name}` : se.welcomeHeadline,
      welcomeMessage: m.welcome_message || se.welcomeMessage,
      placeholder: I.messagePlaceholder || se.placeholder,
      suggestedQuestions: _,
      contactFields: z.length > 0 ? z : se.contactFields,
      contact: {
        enabled: typeof ((o = m.contact) == null ? void 0 : o.enabled) == "boolean" ? m.contact.enabled : (n = se.contact) == null ? void 0 : n.enabled,
        title: typeof ((p = m.contact) == null ? void 0 : p.title) == "string" && m.contact.title.trim() !== "" ? m.contact.title : (s = se.contact) == null ? void 0 : s.title,
        subtitle: typeof ((g = m.contact) == null ? void 0 : g.subtitle) == "string" && m.contact.subtitle.trim() !== "" ? m.contact.subtitle : (c = se.contact) == null ? void 0 : c.subtitle,
        submitLabel: typeof ((u = m.contact) == null ? void 0 : u.submit_label) == "string" && m.contact.submit_label.trim() !== "" ? m.contact.submit_label : (l = se.contact) == null ? void 0 : l.submitLabel
      },
      poweredBy: m.show_branding !== void 0 ? m.show_branding : se.poweredBy,
      position: m.position || se.position,
      accentGradient: Array.isArray(m.accent_gradient) ? m.accent_gradient : [],
      content: {
        ...se.content || {},
        ...I
      },
      chatAvailable: pe,
      transcribeAvailable: ue,
      formsAvailable: ze,
      formsEnabled: G,
      forms: v,
      actions: O,
      colors: {
        ...se.colors,
        primaryColor: le,
        bubbleUserBg: le,
        sendAccent: D ? le : A === "dark" ? "#e5e7eb" : "#111827",
        headerBg: H.headerBg,
        headerFg: H.headerFg,
        surfaceBg: H.surfaceBg,
        bubbleAiBg: H.bubbleAiBg,
        textFg: H.textFg,
        mutedFg: H.mutedFg,
        border: H.border,
        hover: H.hover,
        subtle: H.subtle
      }
    };
  } catch (f) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", f), { ...se, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const Dr = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";:host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:100%;height:100%;min-height:0;max-height:100%;align-items:center!important;gap:8px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-btn,.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-wrap{display:none!important}.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-btn,.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-wrap{align-self:flex-end;margin-right:8px}.pitaj-root.is-inline.show-inline-launcher .pitaj-window{height:calc(100% - 62px);max-height:calc(100% - 62px)}.pitaj-root.is-inline .pitaj-window{position:relative;width:min(100%,380px);height:auto;flex:1 1 auto;min-height:0;max-width:380px;max-height:100%;transform:none!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:none;display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background:var(--pitaj-header-bg);color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}', Ae = {};
function Ai(t, e) {
  (Ae[t] || []).forEach((r) => {
    try {
      r(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function Pr(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function Er(t, e) {
  const a = e.initialConfig || {}, r = !!(e.isPreview || a.isPreview || t.isPreview), o = e.previewDraft || a.previewDraft || t.previewDraft, n = {
    ...t,
    ...a,
    isPreview: r,
    previewDraft: o,
    mockMode: r ? !0 : a.mockMode ?? t.mockMode,
    position: e.position || a.position || t.position || "bottom-right",
    apiUrl: e.apiUrl || a.apiUrl || t.apiUrl,
    colors: { ...t.colors || {}, ...a.colors || {} },
    content: { ...t.content || {}, ...a.content || {} },
    features: { ...t.features || {}, ...a.features || {} }
  };
  if (o) {
    if (o.action) {
      const p = o.action;
      n.actions = [p, ...(n.actions || []).filter((s) => s.id !== p.id)];
    }
    if (o.form) {
      const p = o.form;
      n.forms = [p, ...(n.forms || []).filter((s) => s.id !== p.id)], n.formsAvailable = !0, n.formsEnabled = !0;
    }
    if (o.widget) {
      const p = o.widget;
      n.widgets = [p, ...(n.widgets || []).filter((s) => s.id !== p.id)];
    }
  }
  return n;
}
const et = /* @__PURE__ */ new WeakMap();
async function xt(t, e = {}) {
  const a = et.get(t), r = async () => {
    var m, x;
    const n = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (m = e.initialConfig) != null && m.isPreview || n === "preview") && n === "preview" ? { ...se, companyId: n, apiUrl: e.apiUrl, mockMode: !0 } : await Tr(n, e.apiUrl), g = Er(s, e);
    if (g.enabled === !1 || g.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let c = t.shadowRoot;
    c || (c = t.attachShadow({ mode: "open" })), c.innerHTML = "";
    const u = document.createElement("style");
    u.textContent = Dr, c.appendChild(u);
    const l = document.createElement("div");
    l.className = "pitaj-shadow-mount", c.appendChild(l);
    const f = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((x = t.closest) != null && x.call(t, "[data-pitaj-preview]")));
    Et(
      /* @__PURE__ */ i(
        Mr,
        {
          config: g,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: f,
          initialScreen: e.initialScreen,
          onEvent: Ai
        }
      ),
      l
    );
    const h = Se();
    return h && (t.__pitajController = h), {
      controller: h,
      unmount: () => {
        Et(null, l), c && (c.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(r, r);
  et.set(t, o);
  try {
    return await o;
  } finally {
    et.get(t) === o && et.delete(t);
  }
}
let He = null;
const tt = {
  mount: async (t, e) => {
    const a = await xt(t, e);
    return He = a.unmount, a;
  },
  unmount: () => {
    He && (He(), He = null);
  },
  init: async (t) => {
    const e = Pr(t.containerId || "pitaj-io-widget-root"), a = await xt(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return He = a.unmount, a;
  },
  open: () => {
    var t;
    return (t = Se()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = Se()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = Se()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = Se()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = Se()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = Se()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = Se()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    Ae[t] || (Ae[t] = []), Ae[t].push(e);
  },
  off: (t, e) => {
    Ae[t] && (Ae[t] = Ae[t].filter((a) => a !== e));
  },
  emit: (t, e) => {
    Ai(t, e);
  }
};
class Br extends HTMLElement {
  constructor() {
    super(...arguments);
    Ce(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", r = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", n = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", p = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await xt(this, { widgetId: a, apiUrl: r, position: o, startOpen: n, isInline: p });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Xt(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const a = t.getAttribute("data-api-url") || void 0, r = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", n = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: r, startOpen: o, isInline: n };
}
var ei;
if (typeof window < "u") {
  const t = ((ei = window.PitajIO) == null ? void 0 : ei._q) || [];
  window.PitajIO = tt, customElements.get("pitaj-io") || customElements.define("pitaj-io", Br);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, tt.init(e).then(() => {
      t.forEach(({ method: a, args: r }) => {
        const o = tt[a];
        typeof o == "function" && o(...r);
      });
    });
  else {
    const a = document.currentScript;
    let r = Xt(a);
    if (!r) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let n = o.length - 1; n >= 0; n--) {
        const p = o[n];
        if (p.src && /widget(\.iife)?\.js/i.test(p.src) && (r = Xt(p), r))
          break;
      }
    }
    r && tt.init({ containerId: "pitaj-io-widget-root", ...r });
  }
}
export {
  re as A,
  Vr as C,
  Wr as M,
  lt as P,
  $e as T,
  Fr as U,
  ua as a,
  Ne as b,
  _a as c,
  L as d,
  Hr as e,
  Or as f,
  Rr as g,
  _e as h,
  tt as i,
  we as k,
  bi as t,
  i as u,
  Z as y
};
