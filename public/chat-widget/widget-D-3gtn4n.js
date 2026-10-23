var wi = Object.defineProperty;
var yi = (t, e, a) => e in t ? wi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var ye = (t, e, a) => yi(t, typeof e != "symbol" ? e + "" : e, a);
var Ke, X, Ht, _e, wt, Ot, Vt, qt, rt, Je, Xe, Le = {}, Kt = [], ki = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, We = Array.isArray;
function be(t, e) {
  for (var a in e) t[a] = e[a];
  return t;
}
function nt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function _i(t, e, a) {
  var r, o, n, s = {};
  for (n in e) n == "key" ? r = e[n] : n == "ref" ? o = e[n] : s[n] = e[n];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ke.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) s[n] === void 0 && (s[n] = t.defaultProps[n]);
  return He(t, s, r, o, null);
}
function He(t, e, a, r, o) {
  var n = { type: t, props: e, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ht, __i: -1, __u: 0 };
  return o == null && X.vnode != null && X.vnode(n), n;
}
function ue(t) {
  return t.children;
}
function Oe(t, e) {
  this.props = t, this.context = e;
}
function ze(t, e) {
  if (e == null) return t.__ ? ze(t.__, t.__i + 1) : null;
  for (var a; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) return a.__e;
  return typeof t.type == "function" ? ze(t) : null;
}
function Wt(t) {
  var e, a;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) {
      t.__e = t.__c.base = a.__e;
      break;
    }
    return Wt(t);
  }
}
function yt(t) {
  (!t.__d && (t.__d = !0) && _e.push(t) && !qe.__r++ || wt !== X.debounceRendering) && ((wt = X.debounceRendering) || Ot)(qe);
}
function qe() {
  for (var t, e, a, r, o, n, s, u = 1; _e.length; ) _e.length > u && _e.sort(Vt), t = _e.shift(), u = _e.length, t.__d && (a = void 0, o = (r = (e = t).__v).__e, n = [], s = [], e.__P && ((a = be({}, r)).__v = r.__v + 1, X.vnode && X.vnode(a), ot(e.__P, a, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, n, o ?? ze(r), !!(32 & r.__u), s), a.__v = r.__v, a.__.__k[a.__i] = a, Yt(n, a, s), a.__e != o && Wt(a)));
  qe.__r = 0;
}
function Zt(t, e, a, r, o, n, s, u, f, p, h) {
  var c, g, d, m, x, I, y = r && r.__k || Kt, z = e.length;
  for (f = Ni(a, e, y, f, z), c = 0; c < z; c++) (d = a.__k[c]) != null && (g = d.__i === -1 ? Le : y[d.__i] || Le, d.__i = c, I = ot(t, d, g, o, n, s, u, f, p, h), m = d.__e, d.ref && g.ref != d.ref && (g.ref && st(g.ref, null, d), h.push(d.ref, d.__c || m, d)), x == null && m != null && (x = m), 4 & d.__u || g.__k === d.__k ? f = Gt(d, f, t) : typeof d.type == "function" && I !== void 0 ? f = I : m && (f = m.nextSibling), d.__u &= -7);
  return a.__e = x, f;
}
function Ni(t, e, a, r, o) {
  var n, s, u, f, p, h = a.length, c = h, g = 0;
  for (t.__k = new Array(o), n = 0; n < o; n++) (s = e[n]) != null && typeof s != "boolean" && typeof s != "function" ? (f = n + g, (s = t.__k[n] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? He(null, s, null, null, null) : We(s) ? He(ue, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? He(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = t, s.__b = t.__b + 1, u = null, (p = s.__i = zi(s, a, f, c)) !== -1 && (c--, (u = a[p]) && (u.__u |= 2)), u == null || u.__v === null ? (p == -1 && (o > h ? g-- : o < h && g++), typeof s.type != "function" && (s.__u |= 4)) : p != f && (p == f - 1 ? g-- : p == f + 1 ? g++ : (p > f ? g-- : g++, s.__u |= 4))) : t.__k[n] = null;
  if (c) for (n = 0; n < h; n++) (u = a[n]) != null && !(2 & u.__u) && (u.__e == r && (r = ze(u)), Jt(u, u));
  return r;
}
function Gt(t, e, a) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = Gt(r[o], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !a.contains(e) && (e = ze(t)), a.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function zi(t, e, a, r) {
  var o, n, s = t.key, u = t.type, f = e[a];
  if (f === null && t.key == null || f && s == f.key && u === f.type && !(2 & f.__u)) return a;
  if (r > (f != null && !(2 & f.__u) ? 1 : 0)) for (o = a - 1, n = a + 1; o >= 0 || n < e.length; ) {
    if (o >= 0) {
      if ((f = e[o]) && !(2 & f.__u) && s == f.key && u === f.type) return o;
      o--;
    }
    if (n < e.length) {
      if ((f = e[n]) && !(2 & f.__u) && s == f.key && u === f.type) return n;
      n++;
    }
  }
  return -1;
}
function kt(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || ki.test(e) ? a : a + "px";
}
function De(t, e, a, r, o) {
  var n;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) a && e in a || kt(t.style, e, "");
    if (a) for (e in a) r && a[e] === r[e] || kt(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(qt, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = a, a ? r ? a.t = r.t : (a.t = rt, t.addEventListener(e, n ? Xe : Je, n)) : t.removeEventListener(e, n ? Xe : Je, n);
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
function _t(t) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + t];
      if (e.u == null) e.u = rt++;
      else if (e.u < a.t) return;
      return a(X.event ? X.event(e) : e);
    }
  };
}
function ot(t, e, a, r, o, n, s, u, f, p) {
  var h, c, g, d, m, x, I, y, z, _, N, l, C, M, L, O, R, D = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (f = !!(32 & a.__u), n = [u = e.__e = a.__e]), (h = X.__b) && h(e);
  e: if (typeof D == "function") try {
    if (y = e.props, z = "prototype" in D && D.prototype.render, _ = (h = D.contextType) && r[h.__c], N = h ? _ ? _.props.value : h.__ : r, a.__c ? I = (c = e.__c = a.__c).__ = c.__E : (z ? e.__c = c = new D(y, N) : (e.__c = c = new Oe(y, N), c.constructor = D, c.render = Si), _ && _.sub(c), c.props = y, c.state || (c.state = {}), c.context = N, c.__n = r, g = c.__d = !0, c.__h = [], c._sb = []), z && c.__s == null && (c.__s = c.state), z && D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = be({}, c.__s)), be(c.__s, D.getDerivedStateFromProps(y, c.__s))), d = c.props, m = c.state, c.__v = e, g) z && D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), z && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (z && D.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, N), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, N) === !1 || e.__v == a.__v)) {
        for (e.__v != a.__v && (c.props = y, c.state = c.__s, c.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(E) {
          E && (E.__ = e);
        }), l = 0; l < c._sb.length; l++) c.__h.push(c._sb[l]);
        c._sb = [], c.__h.length && s.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, N), z && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(d, m, x);
      });
    }
    if (c.context = N, c.props = y, c.__P = t, c.__e = !1, C = X.__r, M = 0, z) {
      for (c.state = c.__s, c.__d = !1, C && C(e), h = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++) c.__h.push(c._sb[L]);
      c._sb = [];
    } else do
      c.__d = !1, C && C(e), h = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++M < 25);
    c.state = c.__s, c.getChildContext != null && (r = be(be({}, r), c.getChildContext())), z && !g && c.getSnapshotBeforeUpdate != null && (x = c.getSnapshotBeforeUpdate(d, m)), O = h, h != null && h.type === ue && h.key == null && (O = Qt(h.props.children)), u = Zt(t, We(O) ? O : [O], e, a, r, o, n, s, u, f, p), c.base = e.__e, e.__u &= -161, c.__h.length && s.push(c), I && (c.__E = c.__ = null);
  } catch (E) {
    if (e.__v = null, f || n != null) if (E.then) {
      for (e.__u |= f ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
      n[n.indexOf(u)] = null, e.__e = u;
    } else for (R = n.length; R--; ) nt(n[R]);
    else e.__e = a.__e, e.__k = a.__k;
    X.__e(E, e, a);
  }
  else n == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : u = e.__e = Mi(a.__e, e, a, r, o, n, s, f, p);
  return (h = X.diffed) && h(e), 128 & e.__u ? void 0 : u;
}
function Yt(t, e, a) {
  for (var r = 0; r < a.length; r++) st(a[r], a[++r], a[++r]);
  X.__c && X.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      X.__e(n, o.__v);
    }
  });
}
function Qt(t) {
  return typeof t != "object" || t == null ? t : We(t) ? t.map(Qt) : be({}, t);
}
function Mi(t, e, a, r, o, n, s, u, f) {
  var p, h, c, g, d, m, x, I = a.props, y = e.props, z = e.type;
  if (z == "svg" ? o = "http://www.w3.org/2000/svg" : z == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (p = 0; p < n.length; p++) if ((d = n[p]) && "setAttribute" in d == !!z && (z ? d.localName == z : d.nodeType == 3)) {
      t = d, n[p] = null;
      break;
    }
  }
  if (t == null) {
    if (z == null) return document.createTextNode(y);
    t = document.createElementNS(o, z, y.is && y), u && (X.__m && X.__m(e, n), u = !1), n = null;
  }
  if (z === null) I === y || u && t.data === y || (t.data = y);
  else {
    if (n = n && Ke.call(t.childNodes), I = a.props || Le, !u && n != null) for (I = {}, p = 0; p < t.attributes.length; p++) I[(d = t.attributes[p]).name] = d.value;
    for (p in I) if (d = I[p], p != "children") {
      if (p == "dangerouslySetInnerHTML") c = d;
      else if (!(p in y)) {
        if (p == "value" && "defaultValue" in y || p == "checked" && "defaultChecked" in y) continue;
        De(t, p, null, d, o);
      }
    }
    for (p in y) d = y[p], p == "children" ? g = d : p == "dangerouslySetInnerHTML" ? h = d : p == "value" ? m = d : p == "checked" ? x = d : u && typeof d != "function" || I[p] === d || De(t, p, d, I[p], o);
    if (h) u || c && (h.__html === c.__html || h.__html === t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (c && (t.innerHTML = ""), Zt(e.type === "template" ? t.content : t, We(g) ? g : [g], e, a, r, z == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, s, n ? n[0] : a.__k && ze(a, 0), u, f), n != null) for (p = n.length; p--; ) nt(n[p]);
    u || (p = "value", z == "progress" && m == null ? t.removeAttribute("value") : m !== void 0 && (m !== t[p] || z == "progress" && !m || z == "option" && m !== I[p]) && De(t, p, m, I[p], o), p = "checked", x !== void 0 && x !== t[p] && De(t, p, x, I[p], o));
  }
  return t;
}
function st(t, e, a) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    X.__e(o, a);
  }
}
function Jt(t, e, a) {
  var r, o;
  if (X.unmount && X.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || st(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      X.__e(n, e);
    }
    r.base = r.__P = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && Jt(r[o], e, a || typeof t.type != "function");
  a || nt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Si(t, e, a) {
  return this.constructor(t, a);
}
function Nt(t, e, a) {
  var r, o, n, s;
  e == document && (e = document.documentElement), X.__ && X.__(t, e), o = (r = !1) ? null : e.__k, n = [], s = [], ot(e, t = e.__k = _i(ue, null, [t]), o || Le, Le, e.namespaceURI, o ? null : e.firstChild ? Ke.call(e.childNodes) : null, n, o ? o.__e : e.firstChild, r, s), Yt(n, t, s);
}
Ke = Kt.slice, X = { __e: function(t, e, a, r) {
  for (var o, n, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s) return o.__E = o;
  } catch (u) {
    t = u;
  }
  throw t;
} }, Ht = 0, Oe.prototype.setState = function(t, e) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = be({}, this.state), typeof t == "function" && (t = t(be({}, a), this.props)), t && be(a, t), t != null && this.__v && (e && this._sb.push(e), yt(this));
}, Oe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), yt(this));
}, Oe.prototype.render = ue, _e = [], Ot = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Vt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, qe.__r = 0, qt = /(PointerCapture)$|Capture$/i, rt = 0, Je = _t(!1), Xe = _t(!0);
var $i = 0;
function i(t, e, a, r, o, n) {
  e || (e = {});
  var s, u, f = e;
  if ("ref" in f) for (u in f = {}, e) u == "ref" ? s = e[u] : f[u] = e[u];
  var p = { type: t, props: f, key: a, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --$i, __i: -1, __u: 0, __source: o, __self: n };
  if (typeof t == "function" && (s = t.defaultProps)) for (u in s) f[u] === void 0 && (f[u] = s[u]);
  return X.vnode && X.vnode(p), p;
}
var Te, ne, Ge, zt, Be = 0, Xt = [], se = X, Mt = se.__b, St = se.__r, $t = se.diffed, It = se.__c, Ct = se.unmount, At = se.__;
function lt(t, e) {
  se.__h && se.__h(ne, t, Be || e), Be = 0;
  var a = ne.__H || (ne.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function T(t) {
  return Be = 1, Ii(ti, t);
}
function Ii(t, e, a) {
  var r = lt(Te++, 2);
  if (r.t = t, !r.__c && (r.__ = [ti(void 0, e), function(u) {
    var f = r.__N ? r.__N[0] : r.__[0], p = r.t(f, u);
    f !== p && (r.__N = [p, r.__[1]], r.__c.setState({}));
  }], r.__c = ne, !ne.__f)) {
    var o = function(u, f, p) {
      if (!r.__c.__H) return !0;
      var h = r.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (h.every(function(g) {
        return !g.__N;
      })) return !n || n.call(this, u, f, p);
      var c = r.__c.props !== u;
      return h.forEach(function(g) {
        if (g.__N) {
          var d = g.__[0];
          g.__ = g.__N, g.__N = void 0, d !== g.__[0] && (c = !0);
        }
      }), n && n.call(this, u, f, p) || c;
    };
    ne.__f = !0;
    var n = ne.shouldComponentUpdate, s = ne.componentWillUpdate;
    ne.componentWillUpdate = function(u, f, p) {
      if (this.__e) {
        var h = n;
        n = void 0, o(u, f, p), n = h;
      }
      s && s.call(this, u, f, p);
    }, ne.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Q(t, e) {
  var a = lt(Te++, 3);
  !se.__s && ei(a.__H, e) && (a.__ = t, a.u = e, ne.__H.__h.push(a));
}
function te(t) {
  return Be = 5, we(function() {
    return { current: t };
  }, []);
}
function we(t, e) {
  var a = lt(Te++, 7);
  return ei(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function G(t, e) {
  return Be = 8, we(function() {
    return t;
  }, e);
}
function Ci() {
  for (var t; t = Xt.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(Ve), t.__H.__h.forEach(et), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], se.__e(e, t.__v);
  }
}
se.__b = function(t) {
  ne = null, Mt && Mt(t);
}, se.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), At && At(t, e);
}, se.__r = function(t) {
  St && St(t), Te = 0;
  var e = (ne = t.__c).__H;
  e && (Ge === ne ? (e.__h = [], ne.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.forEach(Ve), e.__h.forEach(et), e.__h = [], Te = 0)), Ge = ne;
}, se.diffed = function(t) {
  $t && $t(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Xt.push(e) !== 1 && zt === se.requestAnimationFrame || ((zt = se.requestAnimationFrame) || Ai)(Ci)), e.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), Ge = ne = null;
}, se.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(Ve), a.__h = a.__h.filter(function(r) {
        return !r.__ || et(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], se.__e(r, a.__v);
    }
  }), It && It(t, e);
}, se.unmount = function(t) {
  Ct && Ct(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.forEach(function(r) {
    try {
      Ve(r);
    } catch (o) {
      e = o;
    }
  }), a.__H = void 0, e && se.__e(e, a.__v));
};
var Lt = typeof requestAnimationFrame == "function";
function Ai(t) {
  var e, a = function() {
    clearTimeout(r), Lt && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(a, 100);
  Lt && (e = requestAnimationFrame(a));
}
function Ve(t) {
  var e = ne, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), ne = e;
}
function et(t) {
  var e = ne;
  t.__c = t.__(), ne = e;
}
function ei(t, e) {
  return !t || t.length !== e.length || e.some(function(a, r) {
    return a !== t[r];
  });
}
function ti(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function Li(t, e) {
  const a = t.body;
  if (!a)
    throw new Error("Response body is null");
  const r = a.getReader(), o = new TextDecoder("utf-8");
  let n = "";
  try {
    for (; ; ) {
      const { done: s, value: u } = await r.read();
      if (s)
        break;
      n += o.decode(u, { stream: !0 });
      const f = n.split(/\r?\n/);
      n = f.pop() || "";
      for (const p of f) {
        const h = p.trim();
        if (!(!h || h.startsWith(":")) && h.startsWith("data:")) {
          const c = h.slice(5).trim();
          if (c === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const g = JSON.parse(c);
            if (typeof g == "string")
              e.onChunk(g);
            else if (g && typeof g == "object") {
              (g.chunk || g.token || g.content || g.text) && e.onChunk(g.chunk || g.token || g.content || g.text), g.sources && Array.isArray(g.sources) && e.onSources && e.onSources(g.sources), g.suggestedQuestions && Array.isArray(g.suggestedQuestions) && e.onSuggestedQuestions && e.onSuggestedQuestions(g.suggestedQuestions), e.onConversationId && (g.conversation_id !== void 0 || g.conversationId !== void 0) && e.onConversationId(
                g.conversation_id ?? g.conversationId
              );
              const d = g.ticket_number ?? g.ticketNumber;
              e.onTicketNumber && d !== void 0 && d !== null && String(d).trim() !== "" && String(d).trim() !== "undefined" && String(d).trim() !== "null" && e.onTicketNumber(
                String(d).trim()
              ), e.onActionTrigger && g.triggered_action && typeof g.triggered_action == "object" && e.onActionTrigger(g.triggered_action);
            }
          } catch {
            e.onChunk(c);
          }
        }
      }
    }
    e.onDone && e.onDone();
  } catch (s) {
    if (e.onError)
      e.onError(s);
    else
      throw s;
  }
}
class ii extends Error {
  constructor(a, r = 60, o) {
    super(a);
    ye(this, "retryAfterSeconds");
    ye(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = r, this.code = o;
  }
}
class ai extends Error {
  constructor(a, r, o, n) {
    super(a);
    ye(this, "status");
    ye(this, "code");
    ye(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = r, this.code = o, this.retryAfterSeconds = n;
  }
}
function Ti(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function Bi(t, e) {
  const a = await t.json().catch(() => null);
  ri(t.status, a, e, t.headers.get("Retry-After"));
}
function ri(t, e, a, r) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, n = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, s = Ti((e == null ? void 0 : e.retry_after) ?? r, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new ii(n, s, o) : new ai(n, t, o, s);
}
function ni(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function ct(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Ei(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return ct(e.of(t));
  } catch {
    return null;
  }
}
function Pi() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const r = JSON.parse(a);
        t = ni(
          r.country_code ?? r.countryCode ?? r.visitor_country_code ?? r.visitorCountryCode ?? r.country
        ), e = ct(
          r.country_name ?? r.countryName ?? r.visitor_country_name ?? r.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Ei(t)), { code: t, name: e };
}
const Di = [
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
], Tt = [
  "Razumijem vaše pitanje! Naš AI asistent kontinuirano uči iz baze znanja kako bi vam pružio najtačniji odgovor.",
  "Odlično pitanje. Provjerio sam našu bazu znanja i evo preporučenih informacija za vaš upit.",
  "Drago mi je što mogu pomoći! Ako vam je potrebno detaljnije pojašnjenje ili kontakt sa timom, slobodno javite."
];
async function Ui(t, e) {
  const a = t.toLowerCase(), r = Di.find(
    (f) => f.keywords.some((p) => a.includes(p))
  ), o = r ? r.reply : `${Tt[Math.floor(Math.random() * Tt.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, n = r ? r.sources : [], s = r ? r.suggestions : ["Kako funkcionira AI model?", "Mogu li dobiti kontakt podrške?"], u = o.split(" ");
  for (let f = 0; f < u.length; f++) {
    const p = u[f] + (f < u.length - 1 ? " " : "");
    e.onChunk(p), await new Promise((h) => setTimeout(h, 20 + Math.random() * 20));
  }
  e.onSources && n.length > 0 && e.onSources(n), e.onSuggestedQuestions && s.length > 0 && e.onSuggestedQuestions(s), e.onDone && e.onDone();
}
async function Fi(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: r,
    message: o,
    forceNewConversation: n,
    apiUrl: s,
    mockMode: u,
    visitorName: f,
    visitorEmail: p,
    visitorPhone: h,
    visitorCountryCode: c,
    visitorCountryName: g,
    callbacks: d
  } = t;
  if (u || !e || e === "default") {
    await Ui(o, d);
    return;
  }
  const m = (s || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), x = Pi(), I = ni(c) ?? x.code ?? void 0, y = ct(g) ?? x.name ?? void 0, z = `${m}/api/widget/${e}/chat`, _ = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, N = await fetch(z, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: _,
      force_new_conversation: n === !0,
      visitor_id: r,
      visitor_name: f || void 0,
      visitor_email: p || void 0,
      visitor_phone: h || void 0,
      visitor_country_code: I,
      visitor_country_name: y
    })
  });
  if (N.ok || await Bi(N, `API greška (${N.status})`), (N.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Li(N, d);
  else {
    const C = await N.json(), M = C.answer || C.message || "";
    C.conversation_id !== void 0 && d.onConversationId && d.onConversationId(C.conversation_id);
    const L = C.ticket_number ?? C.ticketNumber;
    if (L != null && String(L).trim() !== "" && String(L).trim() !== "undefined" && String(L).trim() !== "null" && d.onTicketNumber && d.onTicketNumber(String(L).trim()), C.triggered_action && d.onActionTrigger && d.onActionTrigger(C.triggered_action), M && M.trim()) {
      const O = M.split(" ");
      for (let R = 0; R < O.length; R++) {
        const D = O[R] + (R < O.length - 1 ? " " : "");
        d.onChunk(D), await new Promise((E) => setTimeout(E, 15));
      }
    }
    d.onDone && d.onDone();
  }
}
async function tt(t) {
  const { widgetId: e, visitorId: a, apiUrl: r, status: o, page: n = 1, perPage: s = 15 } = t, u = (r || "").replace(/\/$/, ""), f = new URLSearchParams({
    visitor_id: a,
    page: String(n),
    per_page: String(s)
  });
  o && f.set("status", o);
  const p = await fetch(`${u}/api/widget/${encodeURIComponent(e)}/tickets?${f}`), h = await p.json().catch(() => null);
  if (!p.ok) throw new Error(h && "error" in h ? h.error : "Tikete nije moguće učitati.");
  const c = (h == null ? void 0 : h.data) || [], g = c.map((x) => ({
    id: x.id,
    ticketNumber: x.ticket_number,
    conversationId: x.conversation_id,
    isResolved: !!x.is_resolved,
    updatedAt: x.updated_at,
    messages: (x.messages || []).map((I) => ({
      id: String(I.id),
      content: I.content,
      sender: I.role === "user" ? "user" : "ai",
      timestamp: I.created_at,
      status: "sent"
    }))
  })), d = h == null ? void 0 : h.meta, m = (d == null ? void 0 : d.has_more) !== void 0 ? !!d.has_more : c.length >= s;
  return {
    tickets: g,
    hasMore: m,
    total: d == null ? void 0 : d.total,
    currentPage: (d == null ? void 0 : d.current_page) ?? n
  };
}
async function Ri(t, e, a) {
  return (await tt({ widgetId: t, visitorId: e, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function Hi(t, e, a, r, o) {
  const n = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !n)
    return await new Promise((f) => setTimeout(f, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const s = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), u = await fetch(`${s}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!u.ok) {
    const p = (await u.json().catch(() => ({}))).error || (u.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), h = new Error(p);
    throw h.status = u.status, h;
  }
  return await u.json();
}
const Bt = "pitaj_io_visitor_id", Oi = "chat_direkt_visitor_id", Vi = "pitaj_io_visitor_meta", qi = "chat_direkt_visitor_meta";
function oi(t) {
  return `pitaj_io_convs_${t}`;
}
function Ki(t) {
  return `chat_direkt_convs_${t}`;
}
function Wi() {
  try {
    let t = localStorage.getItem(Bt) || localStorage.getItem(Oi);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Bt, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Zi = [];
function Gi(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function Yi(t) {
  return t.filter((e) => !Gi(e)).map((e) => {
    const a = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: a };
  });
}
function Et(t) {
  try {
    const e = localStorage.getItem(oi(t)) || localStorage.getItem(Ki(t));
    if (e) {
      const a = JSON.parse(e);
      if (Array.isArray(a))
        return Yi(a);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return Zi;
}
function Qi(t, e) {
  try {
    localStorage.setItem(oi(t), JSON.stringify(e));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function Ji(t, e) {
  const [a, r] = T(t), [o, n] = T((e == null ? void 0 : e.startOpen) ?? !1), [s, u] = T((e == null ? void 0 : e.initialScreen) ?? "new-conversation"), [f, p] = T(
    () => Et(t.companyId)
  ), [h, c] = T(() => {
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const b = Et(t.companyId);
      return b.length > 0 ? b[0].id : null;
    }
    return null;
  }), [g, d] = T(!1), [m, x] = T(null), [I, y] = T(null), z = te(Wi()), [_, N] = T(() => {
    try {
      const b = localStorage.getItem(Vi) || localStorage.getItem(qi);
      if (b) {
        const v = JSON.parse(b), S = {};
        return typeof v.name == "string" && (S.name = v.name), typeof v.email == "string" && (S.email = v.email), typeof v.phone == "string" && (S.phone = v.phone), S;
      }
    } catch (b) {
      console.warn("[Pitaj.io] Error reading visitor meta", b);
    }
    return {};
  }), l = te(e == null ? void 0 : e.emitEvent);
  l.current = e == null ? void 0 : e.emitEvent;
  const C = te(e == null ? void 0 : e.onActionTrigger);
  C.current = e == null ? void 0 : e.onActionTrigger;
  const M = G((b, v) => {
    const S = Number.isFinite(b) ? Math.max(1, Math.floor(b)) : 60;
    x((U) => U === null ? S : Math.max(U, S)), y(v || `Previše zahtjeva. Molimo sačekajte ${S}s.`);
  }, []), L = G((b) => {
    if (b) {
      if (b === "WIDGET_CHAT_DISABLED") {
        r((v) => ({ ...v, chatAvailable: !1 })), y("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (b === "WIDGET_TRANSCRIBE_DISABLED") {
        r((v) => ({ ...v, transcribeAvailable: !1 })), y("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      b === "WIDGET_FORMS_DISABLED" && (r((v) => ({ ...v, formsAvailable: !1, formsEnabled: !1 })), y("Forme su trenutno privremeno nedostupne."));
    }
  }, []), O = G((b, v = "Došlo je do greške pri obradi zahtjeva.") => {
    var U, B, A, W;
    if (b instanceof ii) {
      M(b.retryAfterSeconds, b.message), (U = l.current) == null || U.call(l, "error_occurred", { code: b.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (b instanceof ai) {
      if (b.code === "COUNTRY_BLOCKED") {
        r((F) => ({ ...F, chatAvailable: !1 })), y(b.message || "Pristup nije dozvoljen u vašoj regiji."), (B = l.current) == null || B.call(l, "error_occurred", { status: b.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      L(b.code), y(b.message || v), (A = l.current) == null || A.call(l, "error_occurred", { status: b.status, code: b.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let S = b instanceof Error ? b.message : v;
    !S || S === "Failed to fetch" || S.includes("NetworkError") ? S = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : S.includes("404") ? S = "Traženi razgovor ili podaci nisu pronađeni." : (S.includes("500") || S.includes("502") || S.includes("503")) && (S = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), y(S || v), (W = l.current) == null || W.call(l, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [M, L]);
  Q(() => {
    Qi(a.companyId, f);
  }, [f, a.companyId]), Q(() => {
    if (m === null || m <= 0) return;
    const b = setInterval(() => {
      x((v) => v && v > 1 ? v - 1 : null);
    }, 1e3);
    return () => clearInterval(b);
  }, [m]), Q(() => {
    if (!a.companyId || a.mockMode) return;
    let b = !0;
    return Ri(a.companyId, z.current, a.apiUrl).then((v) => {
      !b || !v || v.length === 0 || p((S) => {
        let U = !1;
        const B = S.map((A) => {
          const W = v.find((F) => String(F.id) === A.id);
          return W && W.ticketNumber && A.ticketNumber !== W.ticketNumber ? (U = !0, { ...A, ticketNumber: W.ticketNumber }) : A;
        });
        return U ? B : S;
      });
    }).catch(() => {
    }), () => {
      b = !1;
    };
  }, [a.companyId, a.apiUrl, a.mockMode]);
  const R = f.find((b) => b.id === h) || null, D = f.reduce((b, v) => b + (v.unread || 0), 0), E = G((b) => {
    n((v) => {
      var S;
      return v === b ? v : ((S = l.current) == null || S.call(l, b ? "widget_opened" : "widget_closed"), b);
    });
  }, []), ie = G((b) => {
    u((v) => {
      var S;
      return v === b ? v : ((S = l.current) == null || S.call(l, "screen_changed", { screen: b }), b);
    });
  }, []), ae = G((b) => {
    var v;
    c(b.id), p((S) => S.some((B) => B.id === b.id) ? S.map((B) => B.id === b.id ? { ...B, ...b, unread: 0, status: b.status || "active" } : B) : [{ ...b, unread: 0, status: b.status || "active" }, ...S]), u("conversation"), (v = l.current) == null || v.call(l, "conversation_selected", { conversationId: b.id });
  }, []), le = G(() => {
    var b;
    p(
      (v) => v.map((S) => S.id === h ? { ...S, status: "ended" } : S)
    ), c(null), u("new-conversation"), (b = l.current) == null || b.call(l, "conversation_ended", { conversationId: h });
  }, [h]), Y = G((b) => {
    p((v) => v.filter((S) => S.id !== b)), c((v) => v === b ? null : v), h === b && u("new-conversation");
  }, [h]), ee = G((b) => {
    var A;
    if (a.chatAvailable === !1) {
      y("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (m !== null) {
      y(`Previše zahtjeva. Molimo sačekajte ${m}s.`);
      return;
    }
    const v = "conv-" + Date.now(), S = (/* @__PURE__ */ new Date()).toISOString(), U = b ? b.length > 40 ? b.slice(0, 40) + "…" : b : "Novo ćaskanje", B = {
      id: v,
      title: U,
      preview: b || "Započeto novo ćaskanje",
      timestamp: S,
      unread: 0,
      messages: b ? [
        {
          id: "msg-" + Date.now(),
          content: b,
          sender: "user",
          timestamp: S,
          status: "sent"
        }
      ] : []
    };
    p((W) => [B, ...W]), c(v), u("conversation"), (A = l.current) == null || A.call(l, "conversation_started", { conversationId: v, initialMessage: b }), b && $(v, b, [B.messages[0]], !0);
  }, [a.apiUrl, a.chatAvailable, a.companyId, a.mockMode, m, _]), $ = async (b, v, S, U = !1) => {
    var W;
    d(!0), y(null);
    const B = "ai-msg-" + Date.now(), A = {
      id: B,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    p(
      (F) => F.map((Z) => Z.id !== b ? Z : {
        ...Z,
        preview: v,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...Z.messages.filter((P) => P.id !== B), A]
      })
    ), (W = l.current) == null || W.call(l, "stream_started", { conversationId: b });
    try {
      await Fi({
        companyId: a.companyId,
        conversationId: b,
        visitorId: z.current,
        message: v,
        forceNewConversation: U || b.startsWith("conv-"),
        apiUrl: a.apiUrl,
        mockMode: a.mockMode,
        visitorName: _.name,
        visitorEmail: _.email,
        visitorPhone: _.phone,
        callbacks: {
          onConversationId: (F) => {
            const Z = b, P = String(F);
            b = P, c(P), p(
              (de) => de.map((q) => q.id === Z || q.messages.some((ge) => ge.id === B) ? { ...q, id: P } : q)
            );
          },
          onTicketNumber: (F) => {
            const Z = F && String(F).trim() !== "" && String(F).trim() !== "undefined" && String(F).trim() !== "null" ? String(F).trim() : null;
            Z && p(
              (P) => P.map((de) => de.id === b || de.messages.some((ge) => ge.id === B) ? { ...de, ticketNumber: Z } : de)
            );
          },
          onActionTrigger: (F) => {
            var P;
            const Z = F.widget || F.triggered_widget || (F.widget_id && a.widgets ? a.widgets.find((de) => de.id === F.widget_id) : null) || null;
            Z && p(
              (de) => de.map((q) => q.id === b || q.messages.some((he) => he.id === B) ? {
                ...q,
                messages: q.messages.map(
                  (he) => he.id === B ? { ...he, widget: Z } : he
                )
              } : q)
            ), (P = C.current) == null || P.call(C, F);
          },
          onChunk: (F) => {
            p(
              (Z) => Z.map((P) => P.id === b || P.messages.some((q) => q.id === B) ? {
                ...P,
                messages: P.messages.map(
                  (q) => q.id === B ? { ...q, content: q.content + F } : q
                )
              } : P)
            );
          },
          onSources: (F) => {
            p(
              (Z) => Z.map((P) => P.id === b || P.messages.some((q) => q.id === B) ? {
                ...P,
                messages: P.messages.map(
                  (q) => q.id === B ? { ...q, sources: F } : q
                )
              } : P)
            );
          },
          onSuggestedQuestions: (F) => {
            p(
              (Z) => Z.map((P) => P.id === b || P.messages.some((q) => q.id === B) ? {
                ...P,
                messages: P.messages.map(
                  (q) => q.id === B ? { ...q, suggestedQuestions: F } : q
                )
              } : P)
            );
          },
          onDone: () => {
            var F;
            p(
              (Z) => Z.map((P) => {
                var Me, Se;
                if (!(P.id === b || P.messages.some((fe) => fe.id === B))) return P;
                const q = P.messages.find((fe) => fe.id === B), ge = (Me = q == null ? void 0 : q.widget) == null ? void 0 : Me.name, he = (Se = q == null ? void 0 : q.content) == null ? void 0 : Se.trim(), Ee = he ? he.slice(0, 70) : ge ? `[${ge}]` : P.preview;
                return {
                  ...P,
                  preview: Ee,
                  messages: P.messages.map(
                    (fe) => fe.id === B ? { ...fe, isStreaming: !1 } : fe
                  )
                };
              })
            ), d(!1), (F = l.current) == null || F.call(l, "stream_completed", { conversationId: b });
          },
          onError: (F) => {
            console.error("[Pitaj.io] Stream error:", F), y(F.message || "Došlo je do greške u komunikaciji."), d(!1);
          }
        }
      });
    } catch (F) {
      d(!1), O(F, "Greška pri slanju poruke.");
    }
  }, V = G((b) => {
    var B;
    const v = b.trim();
    if (!v || g || a.chatAvailable === !1 || m !== null) return;
    if (!h) {
      ee(v);
      return;
    }
    const U = {
      id: "usr-msg-" + Date.now(),
      content: v,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    p(
      (A) => A.map((W) => W.id !== h ? W : {
        ...W,
        preview: v,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...W.messages, U]
      })
    ), (B = l.current) == null || B.call(l, "message_sent", { conversationId: h, content: v }), $(h, v, R ? R.messages : []);
  }, [h, g, ee, R, a.chatAvailable, a.companyId, a.apiUrl, a.mockMode, m]), K = G(
    async (b, v, S) => {
      var U;
      if (!a.mockMode)
        try {
          await Hi(
            a.companyId,
            b,
            v,
            a.apiUrl,
            a.mockMode
          );
        } catch (B) {
          console.error("[Pitaj.io] Failed to submit rating:", B);
          const A = (B == null ? void 0 : B.status) === 404 ? "Razgovor ili tiket više nije dostupan." : B != null && B.message && !B.message.includes("failed") && !B.message.includes("404") ? B.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(A);
        }
      p(
        (B) => B.map(
          (A) => A.id === b ? { ...A, satisfaction: v, ratingScore: S ?? A.ratingScore } : A
        )
      ), (U = l.current) == null || U.call(l, "rating_submitted", {
        conversationId: b,
        satisfaction: v,
        score: S
      });
    },
    [a.companyId, a.apiUrl, a.mockMode]
  ), H = G(
    (b, v, S = "user") => {
      const U = v.trim();
      if (!U) return;
      const B = (/* @__PURE__ */ new Date()).toISOString(), A = `conv-${Date.now()}`, W = typeof b == "string" && b.trim().length > 0 ? b : A, F = {
        id: `local-${S}-msg-${Date.now()}`,
        content: U,
        sender: S,
        timestamp: B,
        status: "sent"
      };
      p(
        (Z) => Z.some((P) => P.id === W) ? Z.map((P) => P.id !== W ? P : {
          ...P,
          preview: U.length > 70 ? `${U.slice(0, 70)}…` : U,
          timestamp: B,
          messages: [...P.messages, F]
        }) : [
          {
            id: W,
            title: "Forma",
            preview: U.length > 70 ? `${U.slice(0, 70)}…` : U,
            timestamp: B,
            unread: 0,
            messages: [F],
            status: "active"
          },
          ...Z
        ]
      ), c(W), u("conversation");
    },
    []
  ), j = (b) => {
    var v;
    return !!((v = b.messages) != null && v.some((S) => S.sender === "ai"));
  };
  return {
    config: a,
    setConfig: r,
    isOpen: o,
    setIsOpen: E,
    screen: s,
    setScreen: ie,
    conversations: f,
    activeConversation: R,
    activeConversationId: h,
    visitorContact: _,
    visitorId: z.current,
    activeConversationHasReply: R ? j(R) : !1,
    totalUnread: D,
    isStreaming: g,
    rateLimitTimer: m,
    errorBanner: I,
    setErrorBanner: y,
    selectConversation: ae,
    startNewConversation: ee,
    endConversation: le,
    deleteConversation: Y,
    sendUserMessage: V,
    submitSatisfaction: K,
    appendConversationMessage: H,
    handleApiError: O
  };
}
let Ye = null, si = null;
function Pt(t, e) {
  e === null && t !== null && Ye !== null && Ye !== t || (Ye = e ? t : null, si = e);
}
function ve() {
  return si;
}
function li(t, e) {
  let a = null;
  const r = () => a || (a = t().then((o) => {
    const n = e ? e(o) : o.default;
    if (!n)
      throw new Error("Lazy component not found");
    return n;
  }));
  return function(n) {
    const [s, u] = T(null);
    return Q(() => {
      let f = !0;
      return r().then((p) => {
        f && u(() => p);
      }).catch((p) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", p);
      }), () => {
        f = !1;
      };
    }, []), s ? /* @__PURE__ */ i(s, { ...n }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function Xi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ i("path", { d: "M5 3v4" }),
    /* @__PURE__ */ i("path", { d: "M19 17v4" }),
    /* @__PURE__ */ i("path", { d: "M3 5h4" }),
    /* @__PURE__ */ i("path", { d: "M17 19h4" })
  ] });
}
function ci({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ i("path", { d: "M12 19V5" })
  ] });
}
function ea({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ i("path", { d: "M19 12H5" })
  ] });
}
function xe({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ i("path", { d: "m6 6 12 12" })
  ] });
}
function ta({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function zr({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function je({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function ia({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function aa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function pi({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function ra({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function na({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function oa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function sa({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function la({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function di({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ i("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function ca({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function ui({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ i("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ i("path", { d: "M10 9H8" }),
    /* @__PURE__ */ i("path", { d: "M16 13H8" }),
    /* @__PURE__ */ i("path", { d: "M16 17H8" })
  ] });
}
function pa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M7 10v12" }),
    /* @__PURE__ */ i("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function da({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M17 14V2" }),
    /* @__PURE__ */ i("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function hi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function ua({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function Mr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function Sr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function $r({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function Ir({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function Cr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) });
}
function ha({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function fa({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function ma({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function ga({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function ba({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function xa({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function ja({ size: t = 14, className: e = "" }) {
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
function va({ size: t = 14, className: e = "" }) {
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
function wa({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function ya({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function ka({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function _a({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function Na({ size: t = 24, className: e = "" }) {
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
function za({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Ma({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Sa({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function $a({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function Ze({ size: t = 13, className: e = "" }) {
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
function Ia({ size: t = 16, className: e = "" }) {
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
function Ca({
  screen: t,
  activeConversation: e,
  config: a,
  onBack: r,
  onClose: o,
  onNewConversation: n,
  onEndConversation: s,
  onDeleteConversation: u,
  onViewHistory: f,
  onViewTickets: p
}) {
  var _;
  const [h, c] = T(!1), g = te(null), d = t === "conversation" && e, I = d || t === "history" || t === "tickets", y = a.title || a.name || "Pitaj.io AI Agent";
  Q(() => {
    var C;
    const N = (M) => {
      var O, R;
      const L = ((R = (O = M.composedPath) == null ? void 0 : O.call(M)) == null ? void 0 : R[0]) || M.target;
      g.current && L && !g.current.contains(L) && c(!1);
    };
    document.addEventListener("mousedown", N);
    const l = (C = g.current) == null ? void 0 : C.getRootNode();
    return l instanceof ShadowRoot && l.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N), l instanceof ShadowRoot && l.removeEventListener("mousedown", N);
    };
  }, []), Q(() => {
    c(!1);
  }, [t]);
  const z = (N) => {
    c(!1), N == null || N();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      I && /* @__PURE__ */ i(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": "Nazad",
          title: "Nazad",
          children: /* @__PURE__ */ i(ea, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((_ = a.content) == null ? void 0 : _.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(Ze, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: y }),
        d && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: g, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => c((N) => !N),
            className: `pitaj-icon-btn ${h ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": h,
            title: "Meni",
            children: /* @__PURE__ */ i(ia, { size: 18 })
          }
        ),
        h && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => z(n),
              children: [
                /* @__PURE__ */ i(aa, { size: 15, className: "pitaj-menu-item-icon" }),
                "Nova konverzacija"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !d,
              onClick: () => z(s),
              children: [
                /* @__PURE__ */ i(na, { size: 15, className: "pitaj-menu-item-icon" }),
                "Završi konverzaciju"
              ]
            }
          ),
          u && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !d,
              onClick: () => z(u),
              children: [
                /* @__PURE__ */ i(ha, { size: 15, className: "pitaj-menu-item-icon" }),
                "Obriši konverzaciju"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => z(f),
              children: [
                /* @__PURE__ */ i(oa, { size: 15, className: "pitaj-menu-item-icon" }),
                "Pogledaj prethodne"
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => z(p), children: [
            /* @__PURE__ */ i(la, { size: 15, className: "pitaj-menu-item-icon" }),
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
          children: /* @__PURE__ */ i(xe, { size: 18 })
        }
      )
    ] })
  ] });
}
function Aa({ content: t }) {
  if (!t)
    return /* @__PURE__ */ i("span", {});
  const e = t.split(`
`), a = [];
  let r = !1, o = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (s.startsWith("```")) {
      r ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, `code-${n}`)
      ), o = [], r = !1) : r = !0;
      continue;
    }
    if (r) {
      o.push(s);
      continue;
    }
    if (s.trim().startsWith("- ") || s.trim().startsWith("* ")) {
      const f = s.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: Qe(f) }) }, `ul-${n}`)
      );
      continue;
    }
    const u = s.trim().match(/^(\d+)\.\s+(.*)/);
    if (u) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(u[1], 10), children: /* @__PURE__ */ i("li", { children: Qe(u[2]) }) }, `ol-${n}`)
      );
      continue;
    }
    if (!s.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${n}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: Qe(s) }, `p-${n}`));
  }
  return r && o.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function Qe(t) {
  const e = [];
  let a = 0;
  const r = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = r.exec(t)) !== null; ) {
    o.index > a && e.push(...Dt(t.slice(a, o.index)));
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
      const s = n.slice(1, n.indexOf("](")), u = n.slice(n.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: u, target: "_blank", rel: "noopener noreferrer", children: s }, `a-${o.index}`)
      );
    }
    a = o.index + n.length;
  }
  return a < t.length && e.push(...Dt(t.slice(a))), e;
}
const La = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Ta = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, Ba = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), Ea = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Dt(t) {
  const e = [];
  let a;
  for (; (a = La.exec(t)) !== null; ) {
    const n = a[0].replace(/[.,;:!?]+$/, "");
    n && e.push({
      start: a.index,
      end: a.index + n.length,
      href: n.startsWith("www.") ? `https://${n}` : n,
      external: !0
    });
  }
  for (; (a = Ta.exec(t)) !== null; )
    e.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = Ba.exec(t)) !== null; ) {
    const n = a[0];
    Ea.test(n) || e.push({
      start: a.index,
      end: a.index + n.length,
      href: `tel:${n.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((n, s) => n.start - s.start);
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
function it(t) {
  return (t || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function Pa(t) {
  const e = it(t).toLowerCase();
  return e.includes("wi-fi") || e.includes("wifi") || e.includes("internet") ? fa : e.includes("doručak") || e.includes("dorucak") || e.includes("kafa") || e.includes("coffee") ? ma : e.includes("restoran") || e.includes("hrana") || e.includes("dining") ? ga : e.includes("parking") || e.includes("garaža") || e.includes("garaza") || e.includes("auto") ? ba : e.includes("spa") || e.includes("bazen") || e.includes("wellness") ? xa : e.includes("klima") || e.includes("hlađenje") || e.includes("hladjenje") ? ja : e.includes("teretana") || e.includes("fitness") || e.includes("gym") ? va : wa;
}
function Da({ widget: t, onAction: e }) {
  const a = t.type || "custom_html", r = t.config || {};
  if (r.jsx_template || a === "dynamic_jsx" || a === "ai_builder")
    return /* @__PURE__ */ i(Ga, { config: r, onAction: e });
  switch (a) {
    case "book_demo":
      return /* @__PURE__ */ i(Ua, { config: r, onAction: e });
    case "products":
      return /* @__PURE__ */ i(Fa, { config: r, onAction: e });
    case "cart":
      return /* @__PURE__ */ i(Ra, { config: r, onAction: e });
    case "usage_chart":
      return /* @__PURE__ */ i(Ha, { config: r });
    case "upcoming_classes":
      return /* @__PURE__ */ i(Oa, { config: r, onAction: e });
    case "hotel_booking":
      return /* @__PURE__ */ i(Va, { config: r, onAction: e });
    case "contact":
      return /* @__PURE__ */ i(qa, { config: r, onAction: e });
    case "weather":
      return /* @__PURE__ */ i(Ka, { config: r });
    case "custom_iframe":
      return /* @__PURE__ */ i(Wa, { config: r, title: t.name });
    case "custom_html":
    default:
      return /* @__PURE__ */ i(Za, { config: r, onAction: e });
  }
}
function pt({
  fields: t,
  values: e,
  onChange: a
}) {
  return /* @__PURE__ */ i(ue, { children: t.map((r, o) => {
    const n = e[r.key] ?? (r.type === "checkbox" ? !1 : ""), s = r.key || `field_${o}`;
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
            onInput: (p) => a(s, p.target.value)
          }
        )
      ] }, s);
    if (r.type === "checkbox")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ i(
          "input",
          {
            id: `widget-chk-${s}-${o}`,
            type: "checkbox",
            required: r.required,
            checked: !!n,
            onChange: (p) => a(s, p.target.checked)
          }
        ),
        /* @__PURE__ */ i("label", { htmlFor: `widget-chk-${s}-${o}`, children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, s);
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
            onChange: (p) => a(s, p.target.value),
            children: [
              /* @__PURE__ */ i("option", { value: "", children: r.placeholder || "Odaberite..." }),
              (r.options || []).map((p, h) => /* @__PURE__ */ i("option", { value: p, children: p }, h))
            ]
          }
        )
      ] }, s);
    const u = r.type === "phone" ? "tel" : r.type === "email" ? "email" : r.type === "date" ? "date" : r.type === "number" ? "number" : "text";
    let f;
    if (r.type === "date") {
      const p = s.toLowerCase();
      if (p.includes("out") || p.includes("odjav") || p.includes("end") || p.includes("do")) {
        const h = e.check_in || e.start || e.od;
        h && typeof h == "string" && (f = h);
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
          type: u,
          required: r.required,
          placeholder: r.placeholder || "",
          min: f,
          value: n,
          onInput: (p) => a(s, p.target.value)
        }
      )
    ] }, s);
  }) });
}
function Ua({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, n] = T({}), [s, u] = T(!1), f = t.title || "Razgovarajte sa prodajom", p = t.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.", h = (g, d) => {
    n((m) => ({ ...m, [g]: d }));
  }, c = (g) => {
    g.preventDefault();
    for (const m of r)
      if (m.required) {
        const x = o[m.key];
        if (m.type === "checkbox" && !x || m.type !== "checkbox" && (!x || !String(x).trim())) return;
      }
    u(!0);
    const d = r.filter((m) => o[m.key] !== void 0 && o[m.key] !== "").map((m) => `- ${m.label}: ${m.type === "checkbox" ? "Da" : o[m.key]}`);
    e == null || e(`Forma: ${f}
${d.join(`
`)}`);
  };
  if (s) {
    const g = o.email ? ` na ${o.email}` : "";
    return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za demo je poslan!" }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
        "Naš tim će vas kontaktirati u najkraćem roku",
        g,
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: f }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: p })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: c, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(pt, { fields: r, values: o, onChange: h }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function Fa({ config: t, onAction: e }) {
  const [a, r] = T(0), o = [
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
  ], n = Array.isArray(t.products) && t.products.length > 0 ? t.products : o, s = n[a] || n[0], u = () => {
    r((h) => (h + 1) % n.length);
  }, f = () => {
    r((h) => (h - 1 + n.length) % n.length);
  }, p = () => {
    e == null || e(`Zanima me proizvod: ${s.name} (${s.price})`);
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card products-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ya, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Izbor artikala" }),
      n.length > 1 && /* @__PURE__ */ i("span", { className: "pitaj-widget-counter", children: [
        a + 1,
        " / ",
        n.length
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-product-card", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-product-image-wrap", children: [
        /* @__PURE__ */ i("img", { src: s.image, alt: s.name, className: "pitaj-product-img" }),
        n.length > 1 && /* @__PURE__ */ i("div", { className: "pitaj-carousel-controls", children: [
          /* @__PURE__ */ i("button", { type: "button", onClick: f, "aria-label": "Prethodni", className: "pitaj-carousel-btn", children: "‹" }),
          /* @__PURE__ */ i("button", { type: "button", onClick: u, "aria-label": "Sljedeći", className: "pitaj-carousel-btn", children: "›" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-product-info", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-product-name", children: s.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-sub", children: s.subtitle }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-price", children: s.price }),
        /* @__PURE__ */ i("button", { type: "button", onClick: p, className: "pitaj-widget-btn-primary pitaj-btn-select", children: "Odaberi opcije" })
      ] })
    ] })
  ] });
}
function Ra({ config: t, onAction: e }) {
  const [a, r] = T(!1), o = [
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
  ], n = Array.isArray(t.items) && t.items.length > 0 ? t.items : o, s = t.total || "40.90 KM", u = () => {
    r(!0), e == null || e(`Želim dovršiti narudžbu iz korpe (Ukupno: ${s})`);
  };
  return a ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Narudžba je potvrđena!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Iznos od ",
      s,
      " je uspješno obrađen. Detalji su poslani."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ka, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: [
        n.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-items-list", children: n.map((f) => /* @__PURE__ */ i("div", { className: "pitaj-cart-item-row", children: [
      /* @__PURE__ */ i("img", { src: f.image, alt: f.name, className: "pitaj-cart-thumb" }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-details", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-name", children: f.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-sub", children: f.subtitle })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-item-price", children: f.price })
    ] }, f.id)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-divider" }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-val", children: s })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-payment", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-pay-label", children: "Plaćanje karticom" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-card-pill", children: [
        /* @__PURE__ */ i(za, { size: 12, className: "pitaj-pill-icon" }),
        /* @__PURE__ */ i("span", { children: "•• 2683" })
      ] })
    ] }),
    /* @__PURE__ */ i("button", { type: "button", onClick: u, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function Ha({ config: t }) {
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
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(_a, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-chart-label", children: e }),
      /* @__PURE__ */ i("div", { className: "pitaj-chart-big-number", children: a }),
      /* @__PURE__ */ i("div", { className: "pitaj-bar-chart-container", children: o.map((n, s) => /* @__PURE__ */ i("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ i(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, n.val))}%` },
            title: `${n.day}: ${n.val}%`
          }
        ) }),
        /* @__PURE__ */ i("span", { className: "pitaj-bar-day", children: n.day })
      ] }, s)) })
    ] })
  ] });
}
function Oa({ config: t, onAction: e }) {
  const [a, r] = T([]), o = [
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
  ], n = Array.isArray(t.classes) && t.classes.length > 0 ? t.classes : o, s = (u, f) => {
    const p = u.id ?? f;
    a.includes(p) || (r((h) => [...h, p]), e == null || e(`Želim rezervisati termin za: ${u.title} (${u.time})`));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ua, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-classes-list", children: n.map((u, f) => {
      const p = u.id ?? f, h = a.includes(p);
      return /* @__PURE__ */ i("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ i("img", { src: u.image, alt: u.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ i("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-class-title", children: u.title }),
            u.level && /* @__PURE__ */ i("span", { className: `pitaj-level-badge level-${u.levelColor || "green"}`, children: u.level })
          ] }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-time", children: u.time }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-instructor", children: u.instructor })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => s(u, f),
            className: `pitaj-book-btn ${h ? "is-booked" : ""}`,
            children: h ? "Rezervisano" : "Rezerviši"
          }
        )
      ] }, p);
    }) })
  ] });
}
function Va({ config: t, onAction: e }) {
  const [a, r] = T({}), [o, n] = T(!1), s = t.name || "Hotel Dark Moon", u = t.price || "220 KM / noć", f = t.location || "Sarajevo, Bosna i Hercegovina", p = t.rating || "4.8 (124 recenzije)", h = t.image || "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80", c = ["Wi-Fi", "Doručak", "Restoran", "Parking", "Spa & Bazen"], d = (Array.isArray(t.amenities) && t.amenities.length > 0 ? t.amenities : c).map(it), m = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], x = Array.isArray(t.fields) ? t.fields : m, I = (z, _) => {
    r((N) => ({ ...N, [z]: _ }));
  }, y = (z) => {
    if (z.preventDefault(), x.length > 0) {
      for (const N of x)
        if (N.required) {
          const l = a[N.key];
          if (N.type === "checkbox" && !l || N.type !== "checkbox" && (!l || !String(l).trim())) return;
        }
    }
    n(!0);
    const _ = { ...a };
    if (_.check_in && _.check_out && _.check_out < _.check_in) {
      const N = _.check_in;
      _.check_in = _.check_out, _.check_out = N;
    }
    if (x.length > 0) {
      const N = x.filter((l) => _[l.key] !== void 0 && _[l.key] !== "").map((l) => `- ${l.label}: ${l.type === "checkbox" ? "Da" : _[l.key]}`);
      e == null || e(`Forma: Rezervacija smještaja - ${s}
${N.join(`
`)}`);
    } else
      e == null || e(`Forma: Rezervacija smještaja - ${s}
- Cijena: ${u}
- Lokacija: ${f}`);
  };
  return o ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za rezervaciju je poslan!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Uspješno ste poslali upit za ",
      s,
      ". Naše osoblje će vam se javiti za potvrdu termina."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-image-wrap", children: [
      /* @__PURE__ */ i("img", { src: h, alt: s, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-badge-price", children: u })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ i("div", { className: "pitaj-hotel-name", children: s }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ i(Ma, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ i("span", { children: f })
        ] }),
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ i(Sa, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ i("span", { children: p })
        ] })
      ] }),
      d.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-amenities-row", children: d.map((z, _) => {
        const N = it(z), l = Pa(N);
        return /* @__PURE__ */ i("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ i(l, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ i("span", { children: N })
        ] }, _);
      }) }),
      /* @__PURE__ */ i("form", { onSubmit: y, className: "pitaj-widget-form", children: [
        x.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ i(pt, { fields: x, values: a, onChange: I })
        ] }),
        /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || (x.length > 0 ? "Pošalji upit za rezervaciju" : "Rezerviši sobu") })
      ] })
    ] })
  ] });
}
function qa({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, n] = T({}), [s, u] = T(!1), f = t.title || "Kontaktirajte nas", p = t.subtitle || "Rado ćemo odgovoriti na vaša pitanja", h = (g, d) => {
    n((m) => ({ ...m, [g]: d }));
  }, c = (g) => {
    g.preventDefault();
    for (const m of r)
      if (m.required) {
        const x = o[m.key];
        if (m.type === "checkbox" && !x || m.type !== "checkbox" && (!x || !String(x).trim())) return;
      }
    u(!0);
    const d = r.filter((m) => o[m.key] !== void 0 && o[m.key] !== "").map((m) => `- ${m.label}: ${m.type === "checkbox" ? "Da" : o[m.key]}`);
    e == null || e(`Forma: ${f}
${d.join(`
`)}`);
  };
  return s ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Poruka je poslana!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: "Hvala vam na javljanju. Odgovorit ćemo vam uskoro." })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: f }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: p })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: c, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(pt, { fields: r, values: o, onChange: h }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function Ka({ config: t }) {
  const e = t.city || "Sarajevo", a = t.temp || "22°C", r = t.condition || "Sunčano i toplo", o = t.description || "Pretežno sunčano vrijeme uz blagi povjetarac tokom popodneva.";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ i(Na, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ i("span", { className: "pitaj-weather-temp", children: a })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-city", children: e }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-cond", children: r }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-desc", children: o })
  ] });
}
function Wa({ config: t, title: e }) {
  const [a, r] = T(!0), o = t.url || "https://calendly.com", n = t.height || 380;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i($a, { size: 14 }) }),
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
function Za({ config: t, onAction: e }) {
  const a = t.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', r = t.css || "";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (n) => {
    var u;
    const s = (u = n.target) == null ? void 0 : u.closest("[data-chat-action]");
    if (s) {
      const f = s.getAttribute("data-chat-action");
      f && (n.preventDefault(), e == null || e(f));
    }
  }, children: [
    r && /* @__PURE__ */ i("style", { children: r }),
    /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: a } })
  ] });
}
function Ga({ config: t, onAction: e }) {
  const a = t.jsx_template || "", r = t.default_data || t.data || {}, o = we(() => {
    if (!a) return "";
    try {
      let u = a;
      const f = /\{(\w+)\.map\(\((\w+)\)\s*=>\s*\(([\s\S]*?)\)\)\}/g;
      u = u.replace(f, (h, c, g, d) => {
        const m = r[c];
        return Array.isArray(m) ? m.map((x) => {
          let I = d;
          return Object.keys(x).forEach((y) => {
            const z = x[y], _ = new RegExp(
              `${g}\\.${y}\\s*\\?\\s*["']([^"']*)["']\\s*:\\s*["']([^"']*)["']`,
              "g"
            );
            I = I.replace(_, z ? "$1" : "$2");
            const N = new RegExp(`\\{?${g}\\.${y}\\}?`, "g");
            I = I.replace(N, String(z ?? ""));
          }), I;
        }).join("") : "";
      }), Object.keys(r).forEach((h) => {
        const c = r[h];
        if (typeof c == "string" || typeof c == "number") {
          const g = new RegExp(`\\{${h}\\}`, "g");
          u = u.replace(g, String(c));
        }
      });
      const p = (h, c) => {
        const g = h.match(new RegExp(`${c}=(?:["']([^"']*)["']|\\{([^}]+)\\})`, "i"));
        return (g ? g[1] ?? g[2] ?? "" : "").trim();
      };
      return u = u.replace(
        /<Card([^>]*)status=\{\{\s*text:\s*([^,\}]+),\s*icon:\s*["']([^"']+)["']\s*\}\}([^>]*)>/gi,
        (h, c, g, d, m) => {
          const x = p(h, "background"), I = x ? `background: ${x};` : "", y = (g || "").replace(/^["']|["']$/g, "").trim(), z = y && y.toLowerCase() !== "prompt" && y !== "{prompt}";
          let _ = "";
          if (z) {
            const l = {
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
            }[d] || "";
            _ = `<div style="font-size: 11px; color: #64748b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">${l ? `<span>${l}</span>` : ""} ${y}</div>`;
          }
          return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${I}">${_}`;
        }
      ).replace(/<Card([^>]*)>/gi, (h) => {
        const c = p(h, "background");
        return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${c ? `background: ${c};` : ""}">`;
      }).replace(/<\/Card>/gi, "</div>").replace(
        /<Row[^>]*justify=["']between["'][^>]*align=["']start["'][^>]*>/gi,
        '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">'
      ).replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*align=["']start["'][^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: flex-start;">').replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: center;">').replace(/<Row[^>]*>/gi, '<div style="display: flex; gap: 8px; align-items: center;">').replace(/<\/Row>/gi, "</div>").replace(/<Col[^>]*flex=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; flex: $1;">').replace(/<Col[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: $1px;">').replace(/<Col[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: 4px;">').replace(/<\/Col>/gi, "</div>").replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*weight=["']bold["'][^>]*\/>/gi, '<h4 style="font-size: 15px; font-weight: 700; margin: 0; line-height: 1.2;">$1</h4>').replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<h4 style="font-size: 14px; font-weight: 600; margin: 0;">$1</h4>').replace(/<Caption[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="font-size: 11px; color: #64748b; margin-top: 2px;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["']success["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dcfce7; color: #166534;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:warning|amber)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fef3c7; color: #92400e;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:error|danger|destructive|red)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fee2e2; color: #991b1b;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:purple|brand)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f3e8ff; color: #6b21a8;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:info|blue)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dbeafe; color: #1e40af;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f1f5f9; color: #475569;">$1</span>').replace(/<Divider[^>]*flush[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px -14px;" />').replace(/<Divider[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px 0;" />').replace(/<Image([^>]*)\/>/gi, (h) => {
        const c = p(h, "src"), g = p(h, "alt"), d = p(h, "height") || "120px", m = p(h, "radius") === "sm" ? "6px" : "10px";
        return `<img src="${c}" alt="${g}" style="width: 100%; height: ${d === "100%" ? "120px" : d}; object-fit: cover; border-radius: ${m}; margin: 4px 0;" />`;
      }).replace(/<Avatar([^>]*)\/>/gi, (h) => {
        const c = p(h, "src"), g = p(h, "name"), d = p(h, "size") === "lg" ? "40px" : "32px";
        if (c)
          return `<img src="${c}" alt="${g}" style="width: ${d}; height: ${d}; border-radius: var(--pitaj-radius-avatar, 9999px); object-fit: cover; flex-shrink: 0;" />`;
        const m = g ? g.charAt(0).toUpperCase() : "U";
        return `<div style="width: ${d}; height: ${d}; border-radius: var(--pitaj-radius-avatar, 9999px); background: #e2e8f0; color: #334155; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0;">${m}</div>`;
      }).replace(/<Input([^>]*)\/>/gi, (h) => {
        const c = p(h, "label"), g = p(h, "placeholder"), d = p(h, "value"), m = p(h, "type") || "text";
        return m === "textarea" ? `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${c}</label><textarea placeholder="${g}" rows="2" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box; resize: vertical;">${d}</textarea></div>` : `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${c}</label><input type="${m}" placeholder="${g}" value="${d}" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box;" /></div>`;
      }).replace(/<BarChart[^>]*\/>/gi, () => {
        const h = Array.isArray(r.bars) ? r.bars : [];
        if (h.length > 0) {
          const c = Math.max(...h.map((d) => Number(d.value || 0)), 1);
          return `<div style="display: flex; gap: 6px; width: 100%; padding: 8px 0; align-items: flex-end;">${h.map(
            (d) => `<div style="display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1;"><div style="width: 100%; background: #e2e8f0; height: 70px; border-radius: 4px; display: flex; align-items: flex-end; overflow: hidden;"><div style="width: 100%; height: ${Math.round(
              Number(d.value || 0) / c * 100
            )}%; background: var(--pitaj-accent, #2563eb); border-radius: 4px 4px 0 0;"></div></div><span style="font-size: 10px; color: #64748b;">${d.label || ""}</span></div>`
          ).join("")}</div>`;
        }
        return '<div style="padding: 12px; text-align: center; color: #94a3b8; font-size: 11px;">Grafikon</div>';
      }).replace(/<Timeline[^>]*\/>/gi, () => {
        const h = Array.isArray(r.timeline) ? r.timeline : Array.isArray(r.items) ? r.items : [];
        return !h || h.length === 0 ? "" : '<div style="display: flex; flex-direction: column; width: 100%; padding: 4px 0;">' + h.map((c, g) => {
          const d = g === h.length - 1, m = !!(c.complete || c.completed), x = !!c.current;
          return `<div style="display: flex; align-items: flex-start; gap: 10px; position: relative;"><div style="display: flex; flex-direction: column; align-items: center; align-self: stretch;"><div style="width: 22px; height: 22px; border-radius: 9999px; background: ${m ? "#dcfce7" : x ? "#e0f2fe" : "#f1f5f9"}; color: ${m ? "#166534" : x ? "#0369a1" : "#94a3b8"}; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; flex-shrink: 0;">${m ? "✓" : x ? "●" : "○"}</div>${d ? "" : `<div style="width: 2px; flex: 1; background: ${m ? "#86efac" : "#e2e8f0"}; margin: 2px 0; min-height: 18px;"></div>`}</div><div style="display: flex; flex-direction: column; flex: 1; min-width: 0; padding-bottom: ${d ? "2px" : "12px"};"><span style="font-size: 12px; font-weight: ${x ? "600" : "500"}; color: #0f172a;">${c.label || ""}</span>${c.detail ? `<span style="font-size: 11px; color: #64748b; margin-top: 2px;">${c.detail}</span>` : ""}</div></div>`;
        }).join("") + "</div>";
      }).replace(
        /<Box[^>]*background=["']green-100["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #dcfce7; color: #166534; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(
        /<Box[^>]*background=["']surface-secondary["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #f1f5f9; color: #94a3b8; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(/<Box([^>]*)>/gi, (h) => {
        const c = p(h, "background"), g = p(h, "radius"), d = p(h, "padding"), m = [];
        return c === "surface-secondary" || c === "muted" ? m.push("background: #f1f5f9") : c && m.push(`background: ${c}`), g === "full" ? m.push("border-radius: 9999px") : g && m.push(`border-radius: ${g === "md" ? "8px" : "4px"}`), d && m.push(`padding: ${d}px`), `<div style="${m.join("; ")}; display: flex; align-items: center; justify-content: center;">`;
      }).replace(/<\/Box>/gi, "</div>").replace(/<Icon[^>]*name=["'](?:check|check-circle)["'][^>]*\/>/gi, "✓").replace(/<Icon[^>]*name=["'](?:clock|time)["'][^>]*\/>/gi, "⏱").replace(/<Icon[^>]*name=["'](?:package|box)["'][^>]*\/>/gi, "📦").replace(/<Icon[^>]*name=["']star["'][^>]*\/>/gi, "⭐").replace(/<Icon[^>]*name=["'](?:map-pin|location)["'][^>]*\/>/gi, "📍").replace(/<Icon[^>]*name=["']calendar["'][^>]*\/>/gi, "📅").replace(/<Icon[^>]*name=["'](?:shopping-bag|shopping-cart|cart)["'][^>]*\/>/gi, "🛍️").replace(/<Icon[^>]*name=["']user["'][^>]*\/>/gi, "👤").replace(/<Icon[^>]*name=["']mail["'][^>]*\/>/gi, "✉️").replace(/<Icon[^>]*name=["']phone["'][^>]*\/>/gi, "📞").replace(/<Icon[^>]*name=["'](?:truck|delivery)["'][^>]*\/>/gi, "🚚").replace(/<Icon[^>]*name=["']credit-card["'][^>]*\/>/gi, "💳").replace(/<Icon[^>]*name=["']sun["'][^>]*\/>/gi, "☀️").replace(/<Icon[^>]*name=["']bell["'][^>]*\/>/gi, "🔔").replace(/<Icon[^>]*name=["'](?:bed|hotel)["'][^>]*\/>/gi, "🏨").replace(/<Icon[^>]*name=["'](?:utensils|dining)["'][^>]*\/>/gi, "🍽️").replace(/<Icon[^>]*name=["']coffee["'][^>]*\/>/gi, "☕").replace(/<Icon[^>]*name=["']wifi["'][^>]*\/>/gi, "📶").replace(/<Icon[^>]*name=["']sparkles["'][^>]*\/>/gi, "✨").replace(/<Icon[^>]*\/>/gi, "•").replace(/<Text[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<p style="font-size: 12px; margin: 0; line-height: 1.3;">$1</p>').replace(/<Button([^>]*)\/>/gi, (h) => {
        const c = p(h, "label") || "Akcija", g = p(h, "action") || c, d = p(h, "variant");
        let m = "background: var(--pitaj-accent, #2563eb); color: white; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;";
        return d === "outline" ? m = "background: transparent; color: #0f172a; border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;" : d === "secondary" && (m = "background: #f1f5f9; color: #0f172a; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;"), `<button type="button" data-chat-action="${g}" style="${m}">${c}</button>`;
      }), u;
    } catch {
      return "";
    }
  }, [a, r]), n = (u) => {
    var p;
    const f = (p = u.target) == null ? void 0 : p.closest("[data-chat-action]");
    if (f) {
      const h = f.getAttribute("data-chat-action");
      h && (u.preventDefault(), e == null || e(h));
    }
  }, s = /<Card/i.test(a || "");
  return /* @__PURE__ */ i("div", { className: `dynamic-jsx-widget ${s ? "" : "pitaj-inline-widget-card"}`, onClick: n, children: /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: o } }) });
}
function fi({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: r,
  containerClassName: o,
  revealDelayMs: n = 0,
  staggerMs: s = 140
}) {
  const u = we(() => Array.isArray(t) && t.length > 0 ? t.map((d) => ({
    text: d.text.trim(),
    children: (d.children ?? []).map((m) => m.trim()).filter(Boolean)
  })).filter((d) => d.text !== "") : (e ?? []).map((d) => d.trim()).filter(Boolean).map((d) => ({ text: d, children: [] })), [e, t]), [f, p] = T(null), [h, c] = T(u.length);
  if (Q(() => {
    p(null);
  }, [u]), Q(() => {
    if (f) {
      c(u.length);
      return;
    }
    if (n <= 0) {
      c(u.length);
      return;
    }
    c(0);
    const d = window.setTimeout(() => {
      c(1);
      const m = window.setInterval(() => {
        c((x) => x >= u.length ? (window.clearInterval(m), x) : x + 1);
      }, Math.max(60, s));
    }, n);
    return () => {
      window.clearTimeout(d);
    };
  }, [f, u.length, n, s]), u.length === 0)
    return null;
  const g = u.find((d) => d.text === f && d.children.length > 0) ?? null;
  return g ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => p(null),
        className: r,
        children: "Nazad"
      }
    ),
    g.children.map((d, m) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(d),
        className: r,
        children: d
      },
      `${g.text}-${m}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: u.slice(0, h).map((d, m) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => d.children.length > 0 ? p(d.text) : a(d.text),
      className: `${r} pitaj-suggestion-enter`,
      children: d.text
    },
    `${d.text}-${m}`
  )) });
}
const Ya = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Qa = [".txt", ".md", ".csv", ".json", ".xml"];
function Ja(t) {
  if (Ya.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Qa.some((a) => e.endsWith(a));
}
async function mi(t) {
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
      const n = Ja(a) ? (await a.text()).slice(0, 4e3) : null;
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
function gi(t) {
  return t.length === 0 ? "" : `

${t.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function Xa(t) {
  const { widgetId: e, audio: a, apiUrl: r } = t, o = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = new FormData();
  n.append("audio", a, "dictation.webm");
  const s = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: n,
    headers: {
      Accept: "application/json"
    }
  });
  if (!s.ok) {
    const p = await s.json().catch(() => null), c = (() => {
      if (s.status !== 422 || !(p != null && p.errors) || typeof p.errors != "object")
        return null;
      for (const g of Object.values(p.errors))
        if (Array.isArray(g)) {
          for (const d of g)
            if (typeof d == "string" && d.trim() !== "")
              return d;
        }
      return null;
    })();
    ri(
      s.status,
      p,
      typeof c == "string" && c || `Transkripcija nije uspjela (${s.status})`,
      s.headers.get("Retry-After")
    );
  }
  const u = await s.json(), f = typeof (u == null ? void 0 : u.text) == "string" ? u.text.trim() : "";
  if (!f)
    throw new Error("Transkripcija nije vratila tekst.");
  return f;
}
function bi({ widgetId: t, apiUrl: e, onTranscript: a, onError: r }) {
  const n = te(null), s = te(null), u = te([]), f = te(!0), p = te(null), h = te(null), c = te(null), g = te(null), d = te(Array.from({ length: 42 }, () => 0.06)), [m, x] = T(!1), [I, y] = T(!1), [z, _] = T(
    () => Array.from({ length: 42 }, () => 0.06)
  ), N = we(() => {
    var E;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((E = navigator.mediaDevices) != null && E.getUserMedia);
  }, [t]), l = G(() => {
    s.current && (s.current.getTracks().forEach((E) => E.stop()), s.current = null);
  }, []), C = G(() => {
    var E;
    p.current !== null && (window.cancelAnimationFrame(p.current), p.current = null), (E = g.current) == null || E.disconnect(), g.current = null, c.current = null, h.current && (h.current.close(), h.current = null);
  }, []), M = G(() => {
    const E = Array.from({ length: 42 }, () => 0.06);
    d.current = E, _(E);
  }, []), L = G((E) => {
    const ie = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!ie)
      return;
    const ae = new ie(), le = ae.createAnalyser();
    le.fftSize = 2048, le.smoothingTimeConstant = 0.78;
    const Y = ae.createMediaStreamSource(E);
    Y.connect(le), h.current = ae, c.current = le, g.current = Y;
    const ee = new Uint8Array(le.fftSize), $ = () => {
      const V = c.current;
      if (!V) return;
      V.getByteTimeDomainData(ee);
      let K = 0;
      for (let v = 0; v < ee.length; v += 1) {
        const S = (ee[v] - 128) / 128;
        K += S * S;
      }
      const H = Math.sqrt(K / ee.length), j = Math.max(0.04, Math.min(1, H * 5.2)), b = d.current.slice(1);
      b.push(j), d.current = b, _(b), p.current = window.requestAnimationFrame($);
    };
    p.current = window.requestAnimationFrame($);
  }, []), O = G(async () => {
    if (!(!N || I || n.current || m))
      try {
        const ie = await navigator.mediaDevices.getUserMedia({ audio: !0 }), ae = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], Y = typeof MediaRecorder.isTypeSupported == "function" ? ae.find(($) => MediaRecorder.isTypeSupported($)) : void 0, ee = Y ? new MediaRecorder(ie, { mimeType: Y }) : new MediaRecorder(ie);
        u.current = [], f.current = !0, s.current = ie, n.current = ee, M(), L(ie), ee.ondataavailable = ($) => {
          $.data.size > 0 && u.current.push($.data);
        }, ee.onstop = async () => {
          x(!1);
          const $ = new Blob(u.current, { type: ee.mimeType || "audio/webm" });
          if (u.current = [], n.current = null, l(), C(), $.size === 0) {
            M();
            return;
          }
          if (!f.current) {
            M();
            return;
          }
          y(!0);
          try {
            const V = await Xa({
              widgetId: t,
              apiUrl: e,
              audio: $
            });
            a(V);
          } catch (V) {
            console.error("[Pitaj.io] Dictation transcription failed", V), r == null || r(V);
          } finally {
            y(!1), M();
          }
        }, ee.onerror = () => {
          x(!1), n.current = null, l(), C(), M();
        }, ee.start(), x(!0);
      } catch (ie) {
        x(!1), l(), C(), M(), console.error("[Pitaj.io] Dictation microphone access failed", ie);
      }
  }, [e, m, I, N, r, a, M, L, l, C, t]), R = G(() => {
    const E = n.current;
    !E || !m || I || (f.current = !0, E.stop(), x(!1));
  }, [m, I]), D = G(() => {
    const E = n.current;
    !E || !m || (f.current = !1, E.stop(), x(!1));
  }, [m]);
  return Q(() => () => {
    const E = n.current;
    E && E.state !== "inactive" && E.stop(), l(), C();
  }, [l, C]), {
    isSupported: N,
    isListening: m,
    isProcessing: I,
    waveformLevels: z,
    start: O,
    stopAndTranscribe: R,
    cancel: D
  };
}
const Ue = [
  { score: 1, emoji: "😡", label: "Jako loše", color: "#ef4444", satisfaction: "negative" },
  { score: 2, emoji: "🙁", label: "Loše", color: "#f97316", satisfaction: "negative" },
  { score: 3, emoji: "😐", label: "U redu", color: "#eab308", satisfaction: "neutral" },
  { score: 4, emoji: "🙂", label: "Dobro", color: "#84cc16", satisfaction: "positive" },
  { score: 5, emoji: "🤩", label: "Odlično!", color: "#10b981", satisfaction: "positive" }
];
function xi({
  initialScore: t = 5,
  title: e = "Kako biste ocijenili vaše iskustvo?",
  subtitle: a,
  onSubmit: r,
  compact: o = !1
}) {
  const [n, s] = T(t), [u, f] = T(!1), [p, h] = T(!1), [c, g] = T(null), [d, m] = T(!1), x = Ue.find((_) => _.score === n) || Ue[Ue.length - 1], I = G((_) => {
    s(_), g(null), m(!0), setTimeout(() => m(!1), 300);
  }, []), y = G(async (_) => {
    if (_ && (_.stopPropagation(), _.preventDefault()), !(u || p)) {
      f(!0), g(null);
      try {
        await r(x.satisfaction, n), h(!0);
      } catch (N) {
        f(!1), g(
          (N == null ? void 0 : N.message) || "Nismo uspjeli sačuvati ocjenu. Molimo pokušajte ponovo."
        );
      }
    }
  }, [x, n, r, u, p]), z = (n - 1) / 4 * 100;
  return p ? /* @__PURE__ */ i("div", { className: `pitaj-satisfaction-success ${o ? "is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-icon", style: { backgroundColor: `${x.color}20`, color: x.color }, children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-title", children: "Hvala na ocjeni!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-desc", children: [
      "Zabilježeno: ",
      x.emoji,
      " ",
      x.label
    ] })
  ] }) : /* @__PURE__ */ i(
    "div",
    {
      className: `pitaj-satisfaction-card ${o ? "is-compact" : ""}`,
      onClick: (_) => _.stopPropagation(),
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-header", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-satisfaction-prompt", children: e }),
          a && /* @__PURE__ */ i("span", { className: "pitaj-satisfaction-subtitle", children: a })
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-mood-display", children: [
          /* @__PURE__ */ i(
            "span",
            {
              className: `pitaj-mood-emoji ${d ? "is-bouncing" : ""}`,
              style: { textShadow: `0 4px 14px ${x.color}40` },
              "aria-hidden": "true",
              children: x.emoji
            }
          ),
          /* @__PURE__ */ i("span", { className: "pitaj-mood-label", style: { color: x.color }, children: x.label })
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-slider-container", children: [
          /* @__PURE__ */ i(
            "input",
            {
              type: "range",
              min: "1",
              max: "5",
              step: "1",
              value: n,
              onInput: (_) => I(Number(_.target.value)),
              className: "pitaj-range-slider",
              "aria-label": `Ocjena: ${n} od 5 (${x.label})`,
              style: {
                background: `linear-gradient(to right, ${x.color} 0%, ${x.color} ${z}%, var(--pitaj-border) ${z}%, var(--pitaj-border) 100%)`
              }
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-slider-ticks", "aria-hidden": "true", children: Ue.map((_) => /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-slider-tick ${n === _.score ? "is-active" : ""} ${_.score <= n ? "is-filled" : ""}`,
              style: n === _.score ? { borderColor: x.color } : void 0,
              onClick: () => I(_.score),
              title: `${_.score} - ${_.label}`,
              children: /* @__PURE__ */ i("span", { className: "pitaj-slider-tick-dot", style: _.score <= n ? { backgroundColor: x.color } : void 0 })
            },
            `tick-${_.score}`
          )) })
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-slider-scale-labels", "aria-hidden": "true", children: [
          /* @__PURE__ */ i("span", { children: "1" }),
          /* @__PURE__ */ i("span", { children: "2" }),
          /* @__PURE__ */ i("span", { children: "3" }),
          /* @__PURE__ */ i("span", { children: "4" }),
          /* @__PURE__ */ i("span", { children: "5" })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-mood-submit-btn",
            style: {
              backgroundColor: x.color,
              boxShadow: `0 3px 12px ${x.color}45`
            },
            disabled: u,
            onClick: y,
            children: u ? "Slanje..." : "Pošalji ocjenu"
          }
        ),
        c && /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-error", role: "alert", children: /* @__PURE__ */ i("span", { children: c }) })
      ]
    }
  );
}
const er = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Ut() {
  const [t, e] = T(0);
  return Q(() => {
    const a = setTimeout(() => e(1), 1600), r = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(r);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(Ia, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: er[t] }, t)
  ] });
}
function tr(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function ir(t) {
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
    const s = n.slice(2), u = s.indexOf(":");
    if (u < 1) return null;
    const f = s.slice(0, u).trim(), p = s.slice(u + 1).trim();
    return !f || !p ? null : { label: f, value: p };
  }).filter((n) => !!n);
  return o.length < 1 ? null : { title: a, entries: o };
}
function ar({
  conversation: t,
  config: e,
  isStreaming: a,
  rateLimitCountdown: r,
  errorBanner: o,
  onSendMessage: n,
  onApiError: s,
  onSubmitSatisfaction: u,
  isRatingPromptActive: f
}) {
  var V, K, H;
  const [p, h] = T(""), [c, g] = T(!1), [d, m] = T(null), [x, I] = T([]), y = te(null), z = te(null), _ = te(null), N = e.content || {}, l = e.chatAvailable === !1, C = e.transcribeAvailable === !1, M = a || r !== null || l, L = bi({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: G((j) => {
      h((b) => b ? `${b} ${j}` : j);
    }, []),
    onError: G((j) => {
      s == null || s(j, "Greška pri transkripciji.");
    }, [s])
  });
  Q(() => {
    const j = y.current;
    j && (j.scrollTop = j.scrollHeight);
  }, [t.messages, a]), Q(() => {
    const j = z.current;
    j && (j.style.height = "auto", j.style.height = `${Math.min(j.scrollHeight, 96)}px`);
  }, [p]), Q(() => {
    g(!1);
  }, [N.dismissibleNotice]);
  const O = (j) => {
    I((b) => {
      const v = b.find((S) => S.id === j);
      if (v != null && v.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(v.previewUrl);
        } catch {
        }
      return b.filter((S) => S.id !== j);
    });
  }, R = (j) => {
    const b = (j ?? p).trim();
    if (!b && x.length === 0 || M) return;
    const v = `${b}${gi(x)}`.trim();
    n(v), x.forEach((S) => {
      if (S.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(S.previewUrl);
        } catch {
        }
    }), I([]), j || (h(""), z.current && (z.current.style.height = "auto"));
  }, D = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), R());
  }, E = N.messagePlaceholder || e.placeholder || "Pitajte bilo šta...", ie = ((V = N.dismissibleNotice) == null ? void 0 : V.trim()) || "", ae = ((K = N.footerText) == null ? void 0 : K.trim()) || "", le = N.showSuggestedMessages === !1 || N.keepShowingSuggestedMessages !== !0 ? [] : N.suggestedMessageRows || [], Y = ((H = [...t.messages].reverse().find((j) => j.sender === "ai")) == null ? void 0 : H.id) ?? null, ee = L.isListening, $ = async (j, b) => {
    navigator.clipboard && (await navigator.clipboard.writeText(b), m(j), window.setTimeout(() => {
      m((v) => v === j ? null : v);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: y, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-conversation-ticket-label", children: "Broj tiketa:" }),
        /* @__PURE__ */ i("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ i("span", { className: "pitaj-date-label", children: "Danas" }),
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" })
      ] }),
      t.messages.map((j) => {
        const b = j.sender === "user", v = b ? ir(j.content) : null, S = !b && j.isStreaming && !j.content && !j.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${b ? "user" : "ai"}${j.widget ? " has-widget" : ""}${S ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              b ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${v ? "is-form-submission" : ""}`, children: v ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: v.title.toLowerCase().startsWith("forma") ? v.title : `Forma: ${v.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: v.entries.map((U) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: U.label }),
                  /* @__PURE__ */ i("dd", { children: U.value })
                ] }, `${j.id}-${U.label}`)) })
              ] }) : j.content }) : /* @__PURE__ */ i(ue, { children: [
                j.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(Aa, { content: j.content }),
                  j.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                j.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Da, { widget: j.widget, onAction: (U) => R(U) }) }),
                j.isStreaming && !j.content && !j.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ut, {}) })
              ] }),
              !b && j.sources && j.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: "Izvori i dokumentacija:" }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: j.sources.map((U) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: U.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: U.title }),
                      /* @__PURE__ */ i(sa, { size: 10 })
                    ]
                  },
                  U.id
                )) })
              ] }),
              !b && j.suggestedQuestions && j.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: j.suggestedQuestions.map((U, B) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => R(U),
                  disabled: M,
                  className: "pitaj-followup-chip",
                  children: U
                },
                `sug-f-${B}`
              )) }),
              (!j.isStreaming || !!j.content || !!j.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: tr(j.timestamp) }),
                !b && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  j.id === Y && !a && /* @__PURE__ */ i(ue, { children: N.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(ue, { children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => u == null ? void 0 : u("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": "Korisno",
                        title: "Korisno",
                        children: /* @__PURE__ */ i(pa, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => u == null ? void 0 : u("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": "Nije korisno",
                        title: "Nije korisno",
                        children: /* @__PURE__ */ i(da, { size: 14 })
                      }
                    )
                  ] }) }),
                  j.id === Y && !a && N.copyMessageEnabled !== !1 && !!j.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void $(j.id, j.content),
                      className: `pitaj-msg-action-btn ${d === j.id ? "is-active" : ""}`,
                      "aria-label": d === j.id ? "Kopirano" : "Kopiraj odgovor",
                      title: d === j.id ? "Kopirano" : "Kopiraj odgovor",
                      children: d === j.id ? /* @__PURE__ */ i(je, { size: 14 }) : /* @__PURE__ */ i(ca, { size: 14 })
                    }
                  )
                ] }),
                b && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  je,
                  {
                    size: 10,
                    className: j.status === "read" ? "text-accent" : ""
                  }
                ) })
              ] })
            ] })
          },
          j.id
        );
      }),
      a && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ut, {}) }) }) }),
      (f || t.status === "ended" && !t.satisfaction) && /* @__PURE__ */ i("div", { className: "pitaj-inline-satisfaction", children: /* @__PURE__ */ i(
        xi,
        {
          title: "Ocijenite razgovor sa agentom",
          onSubmit: (j, b) => {
            u == null || u(j, b);
          }
        }
      ) })
    ] }),
    (o || r) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: r ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${r}s.` : o }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        fi,
        {
          rows: le,
          fallbackQuestions: N.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: R,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      x.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: x.map((j) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: j.previewUrl ? /* @__PURE__ */ i("img", { src: j.previewUrl, alt: j.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(ui, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: j.name, children: j.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => O(j.id),
            "aria-label": `Ukloni ${j.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(xe, { size: 10 })
          }
        )
      ] }, j.id)) }),
      ie && !c && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: ie }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => g(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(xe, { size: 12 })
          }
        )
      ] }),
      L.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${ee ? "is-recording" : ""}`, children: [
        N.attachmentsEnabled && /* @__PURE__ */ i(ue, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: _,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (j) => {
                const b = j.currentTarget.files;
                if (j.currentTarget.value = "", !b || b.length === 0) return;
                const v = await mi(b);
                I((S) => [...S, ...v].slice(0, 3));
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
                var j;
                return (j = _.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ i(hi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: z,
            value: p,
            onInput: (j) => h(j.target.value),
            onKeyDown: D,
            placeholder: E,
            rows: 1,
            disabled: M,
            className: "pitaj-textarea",
            style: ee ? { display: "none" } : void 0
          }
        ),
        ee ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => L.cancel(),
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: L.waveformLevels.map((j, b) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + j * 15))}px` }
            },
            `dict-wave-conv-${b}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => L.stopAndTranscribe(),
              disabled: M || L.isProcessing,
              children: /* @__PURE__ */ i(je, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(ue, { children: [
          N.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${L.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: L.isProcessing ? "Transkribujem..." : L.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => L.start(),
              disabled: M || C || !L.isSupported || L.isProcessing,
              children: /* @__PURE__ */ i(di, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => R(),
              disabled: M || !p.trim() && x.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ i(ci, { size: 16 })
            }
          )
        ] })
      ] }),
      ae && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: ae }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(Ze, { size: 13, className: "pitaj-powered-icon" }),
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
function rr({
  config: t,
  openedByUser: e = !1,
  onStart: a,
  onApiError: r
}) {
  var Y, ee;
  const [o, n] = T(""), [s, u] = T(!1), [f, p] = T(!1), [h, c] = T([]), g = te(null), d = te(null), m = t.content || {}, x = t.chatAvailable === !1, I = t.transcribeAvailable === !1, y = bi({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: G(($) => {
      n((V) => V ? `${V} ${$}` : $);
    }, []),
    onError: G(($) => {
      r == null || r($, "Greška pri transkripciji.");
    }, [r])
  });
  Q(() => {
    var $;
    e && (($ = g.current) == null || $.focus({ preventScroll: !0 }));
  }, [e]), Q(() => {
    if (typeof window > "u") return;
    const $ = window.matchMedia("(max-width: 768px)"), V = () => u($.matches);
    return V(), $.addEventListener("change", V), () => $.removeEventListener("change", V);
  }, []), Q(() => {
    p(!1);
  }, [m.dismissibleNotice]);
  const _ = (s && m.useDifferentMessageMobile && m.mobileWelcomeMessage ? m.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map(($) => $.trim()).filter(($) => $.length > 0), N = m.autoShowInitialMessages !== !1 && !e, l = !s || m.showAutoPopupMobile !== !1, C = s && m.useDifferentDurationMobile && typeof m.mobileAutoShowDurationSeconds == "number" ? m.mobileAutoShowDurationSeconds : m.autoShowDurationSeconds ?? 0, M = N && l ? Math.max(0, C) * 1e3 : 0, L = ($) => {
    c((V) => {
      const K = V.find((H) => H.id === $);
      if (K != null && K.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(K.previewUrl);
        } catch {
        }
      return V.filter((H) => H.id !== $);
    });
  }, O = ($) => {
    const V = ($ ?? o).trim();
    if (!V && h.length === 0 || x) return;
    const K = `${V}${gi(h)}`.trim();
    a(K), h.forEach((H) => {
      if (H.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(H.previewUrl);
        } catch {
        }
    }), n(""), c([]);
  }, R = ($) => {
    $.key === "Enter" && !$.shiftKey && ($.preventDefault(), O());
  }, D = m.showSuggestedMessages === !1 ? [] : m.suggestedMessageRows || [], E = m.messagePlaceholder || t.placeholder || "Upišite svoje pitanje...", ie = ((Y = m.dismissibleNotice) == null ? void 0 : Y.trim()) || "", ae = ((ee = m.footerText) == null ? void 0 : ee.trim()) || "", le = y.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (_.length > 0 ? _ : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map(($, V) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: $ }) }) }, `welcome-${V}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        fi,
        {
          rows: D,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: O,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: M,
          staggerMs: 150
        }
      ),
      h.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: h.map(($) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: $.previewUrl ? /* @__PURE__ */ i("img", { src: $.previewUrl, alt: $.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(ui, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: $.name, children: $.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => L($.id),
            "aria-label": `Ukloni ${$.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(xe, { size: 10 })
          }
        )
      ] }, $.id)) }),
      ie && !f && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: ie }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => p(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(xe, { size: 12 })
          }
        )
      ] }),
      y.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${le ? "is-recording" : ""}`, children: [
        m.attachmentsEnabled && /* @__PURE__ */ i(ue, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: d,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async ($) => {
                const V = $.currentTarget.files;
                if ($.currentTarget.value = "", !V || V.length === 0) return;
                const K = await mi(V);
                c((H) => [...H, ...K].slice(0, 3));
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
                var $;
                return ($ = d.current) == null ? void 0 : $.click();
              },
              children: /* @__PURE__ */ i(hi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: g,
            value: o,
            onInput: ($) => n($.target.value),
            onKeyDown: R,
            placeholder: E,
            rows: 1,
            disabled: x,
            className: "pitaj-textarea",
            style: le ? { display: "none" } : void 0
          }
        ),
        le ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => y.cancel(),
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: y.waveformLevels.map(($, V) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + $ * 15))}px` }
            },
            `dict-wave-${V}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => y.stopAndTranscribe(),
              disabled: x || y.isProcessing,
              children: /* @__PURE__ */ i(je, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(ue, { children: [
          m.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${y.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: y.isProcessing ? "Transkribujem..." : y.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => y.start(),
              disabled: x || I || !y.isSupported || y.isProcessing,
              children: /* @__PURE__ */ i(di, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => O(),
              disabled: x || !o.trim() && h.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ i(ci, { size: 16 })
            }
          )
        ] })
      ] }),
      ae && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: ae }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(Ze, { size: 13, className: "pitaj-powered-icon" }),
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
function nr({
  isOpen: t,
  onClick: e,
  unreadCount: a = 0,
  config: r
}) {
  var h, c, g, d, m, x;
  const o = ((h = r.content) == null ? void 0 : h.launcherIconStyle) || "message-circle", n = typeof ((c = r.content) == null ? void 0 : c.launcherIconUrl) == "string" ? r.content.launcherIconUrl.trim() : "", s = ((g = r.content) == null ? void 0 : g.launcherShowText) === !0, u = ((d = r.content) == null ? void 0 : d.launcherTextSide) === "left" ? "left" : "right", f = s ? ((x = (m = r.content) == null ? void 0 : m.launcherText) == null ? void 0 : x.trim()) || r.title || r.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${s ? "has-label" : ""} ${s && u === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && n !== "" ? /* @__PURE__ */ i("img", { src: n, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? Xi : o === "message-square" ? pi : o === "contact" ? ra : ta, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(xe, { size: 22 }) })
        ] }),
        f && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: f }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function or({ isOpen: t, onOpen: e, config: a, pendingRating: r }) {
  var M, L, O, R;
  const [o, n] = T(!1), [s, u] = T(!1), [f, p] = T(!1), [h, c] = T(t), g = te(null);
  Q(() => {
    t && (c(!0), p(!1));
  }, [t]), Q(() => {
    if (r && !t) {
      const D = setTimeout(() => {
        p(!0);
      }, 800);
      return () => clearTimeout(D);
    }
  }, [r, t]), Q(() => {
    const D = () => {
      var ie;
      if (typeof window > "u") return;
      let E = window.innerWidth <= 640;
      if (!E && g.current) {
        const ae = (ie = g.current.closest(".pitaj-root")) == null ? void 0 : ie.parentElement;
        ae && ae.clientWidth > 0 && ae.clientWidth <= 640 && (E = !0);
      }
      n(E);
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, []);
  const d = a.content || {}, m = d.autoShowInitialMessages !== !1, x = d.showAutoPopupMobile !== !1, I = !o || x, y = o && d.useDifferentDurationMobile && typeof d.mobileAutoShowDurationSeconds == "number" ? d.mobileAutoShowDurationSeconds : d.autoShowDurationSeconds ?? 0;
  if (Q(() => {
    if (r) return;
    if (!m || !I || s || t || h) {
      p(!1);
      return;
    }
    const D = Math.max(0, y) * 1e3, E = setTimeout(() => {
      p(!0);
    }, D);
    return () => clearTimeout(E);
  }, [m, I, s, t, h, y, r]), !f || t)
    return null;
  let z = "";
  o && d.useDifferentMessageMobile && ((M = d.mobileWelcomeMessage) != null && M.trim()) ? z = d.mobileWelcomeMessage.trim() : (L = d.popupMessageText) != null && L.trim() ? z = d.popupMessageText.trim() : (O = a.welcomeMessage) != null && O.trim() ? z = a.welcomeMessage.trim() : (R = a.welcomeHeadline) != null && R.trim() ? z = a.welcomeHeadline.trim() : z = "Zdravo! Kako vam mogu pomoći danas?";
  const _ = (D) => {
    D.stopPropagation(), D.preventDefault(), r ? r.onDismiss() : u(!0), p(!1);
  }, N = () => {
    e();
  }, l = a.title || a.name || "AI Asistent", C = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: g,
      className: `pitaj-launcher-popup ${r ? "is-rating-popup" : ""}`,
      onClick: N,
      role: "button",
      tabIndex: 0,
      "aria-label": `${l}: ${r ? "Ocijenite razgovor" : z}`,
      onKeyDown: (D) => {
        (D.key === "Enter" || D.key === " ") && (D.preventDefault(), N());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: C ? /* @__PURE__ */ i("img", { src: C, alt: "" }) : /* @__PURE__ */ i(Ze, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: l }),
            r && /* @__PURE__ */ i("span", { className: "pitaj-popup-tag", children: "Nova poruka" })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: _,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: `pitaj-popup-body ${r ? "is-rating-body" : ""}`, children: r ? /* @__PURE__ */ i(
          xi,
          {
            compact: !0,
            title: "Kako biste ocijenili vaše iskustvo?",
            onSubmit: async (D, E) => {
              await r.onSubmitRating(D, E), setTimeout(() => {
                p(!1);
              }, 2e3);
            }
          }
        ) : z }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function sr(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, r = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(r / (1e3 * 60)), n = Math.floor(r / (1e3 * 60 * 60)), s = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : n < 24 ? `prije ${n}h` : s < 7 ? `prije ${s}d` : e.toLocaleDateString();
}
function lr({ config: t, visitorId: e, onSelectTicket: a }) {
  const [r, o] = T([]), [n, s] = T("open"), [u, f] = T(1), [p, h] = T(!0), [c, g] = T(!0), [d, m] = T(!1), [x, I] = T(null), y = te(null), z = te(null), _ = te(!1);
  Q(() => {
    let C = !0;
    return g(!0), o([]), f(1), h(!0), I(null), _.current = !1, tt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: 1,
      perPage: 15
    }).then((M) => {
      C && (o(M.tickets), h(M.hasMore), f(1));
    }).catch((M) => {
      C && I(M instanceof Error ? M.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      C && g(!1);
    }), () => {
      C = !1;
    };
  }, [t.apiUrl, t.companyId, e, n]);
  const N = G(() => {
    if (c || _.current || !p) return;
    _.current = !0, m(!0);
    const C = u + 1;
    tt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: C,
      perPage: 15
    }).then((M) => {
      o((L) => {
        const O = new Set(L.map((D) => D.id)), R = M.tickets.filter((D) => !O.has(D.id));
        return [...L, ...R];
      }), h(M.hasMore), f(C);
    }).catch((M) => {
      console.error("[Pitaj.io] Error loading more tickets:", M);
    }).finally(() => {
      m(!1), _.current = !1;
    });
  }, [t.apiUrl, t.companyId, p, c, u, n, e]);
  return Q(() => {
    const C = z.current, M = y.current;
    if (!C || !M || !p || c || d) return;
    const L = new IntersectionObserver(
      (O) => {
        var R;
        (R = O[0]) != null && R.isIntersecting && N();
      },
      { root: M, rootMargin: "120px" }
    );
    return L.observe(C), () => L.disconnect();
  }, [p, c, d, N]), /* @__PURE__ */ i(
    "div",
    {
      ref: y,
      className: "pitaj-tickets-screen",
      onScroll: (C) => {
        const M = C.currentTarget;
        !M || !p || c || _.current || M.scrollHeight - M.scrollTop - M.clientHeight < 120 && N();
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
              onClick: () => s("open"),
              role: "tab",
              "aria-selected": n === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: n === "closed" ? "is-active" : "",
              onClick: () => s("closed"),
              role: "tab",
              "aria-selected": n === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        c ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : x ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: x }) }) : r.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(pi, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: n === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: n === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          r.map((C) => {
            const M = C.messages || [], L = M.length > 0 ? M[M.length - 1] : null, O = M.length, R = O === 1 ? "1 poruka" : O >= 2 && O <= 4 ? `${O} poruke` : `${O} poruka`;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => a == null ? void 0 : a(C),
                "aria-label": `Otvori tiket ${C.ticketNumber || C.id}`,
                children: /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ i("strong", { className: "pitaj-ticket-number", children: C.ticketNumber || `Tiket #${C.id}` }),
                    /* @__PURE__ */ i("span", { className: `pitaj-ticket-status-badge ${C.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ i("span", { className: "pitaj-ticket-status-dot" }),
                      C.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  L && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: L.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: sr(C.updatedAt) }),
                    O > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: R })
                  ] })
                ] })
              },
              C.id
            );
          }),
          d && /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ i("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ i("div", { ref: z, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const cr = li(() => import("./HistoryScreen-DzDIQwIy.js"), (t) => t.HistoryScreen), pr = li(() => import("./FormActionsScreen-BNFJFdww.js"), (t) => t.FormActionsScreen);
function Ie(t, e) {
  const a = t.trim(), r = /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a;
  if (!/^#[0-9A-Fa-f]{6}$/.test(r)) return null;
  const o = Number.parseInt(r.slice(1, 3), 16), n = Number.parseInt(r.slice(3, 5), 16), s = Number.parseInt(r.slice(5, 7), 16);
  return `rgba(${o}, ${n}, ${s}, ${e})`;
}
function ji(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? {
    r: Number.parseInt(a.slice(1, 3), 16),
    g: Number.parseInt(a.slice(3, 5), 16),
    b: Number.parseInt(a.slice(5, 7), 16)
  } : null;
}
function dr(t, e, a) {
  const r = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${r(t)}${r(e)}${r(a)}`;
}
function Ae(t) {
  const e = ji(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function ur(t) {
  const e = ji(t);
  if (!e) return t;
  const a = Ae(t) === "#111827", r = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return dr(
    e.r + (o - e.r) * r,
    e.g + (o - e.g) * r,
    e.b + (o - e.b) * r
  );
}
function hr({
  config: t,
  startOpen: e = !1,
  initialScreen: a = "new-conversation",
  onEvent: r,
  isInline: o = !1,
  isMobile: n
}) {
  var Ee, Me, Se, fe, dt, ut, ht, ft, mt;
  const {
    config: s,
    setConfig: u,
    isOpen: f,
    setIsOpen: p,
    screen: h,
    setScreen: c,
    conversations: g,
    activeConversation: d,
    totalUnread: m,
    isStreaming: x,
    rateLimitTimer: I,
    errorBanner: y,
    selectConversation: z,
    startNewConversation: _,
    endConversation: N,
    deleteConversation: l,
    sendUserMessage: C,
    submitSatisfaction: M,
    visitorContact: L,
    visitorId: O,
    activeConversationId: R,
    appendConversationMessage: D,
    handleApiError: E
  } = Ji(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: r,
    onActionTrigger: (w) => {
      if (Y(!0), p(!0), (h === "history" || h === "new-conversation") && c("conversation"), w.widget_id || w.widget)
        return;
      const J = Number(w.id), k = Number(w.form_id), ce = Number.isInteger(J) && J > 0 ? J : null, oe = Number.isInteger(k) && k > 0 ? -k : null;
      $(ce ?? oe);
    }
  }), ie = te(a), ae = te(e), [le, Y] = T(e), [ee, $] = T(null), [V, K] = T(null), [H, j] = T(null), [b, v] = T(() => /* @__PURE__ */ new Set()), S = G(() => {
    h === "conversation" && d && d.messages.length > 0 && !(d.satisfaction && d.satisfaction !== "none") && !b.has(d.id) && j(d.id);
  }, [h, d, b]), U = G(async (w, J) => {
    H && (await M(H, w, J), j(null));
  }, [H, M]), B = G(() => {
    H && (v((w) => new Set(w).add(H)), j(null));
  }, [H]), A = te(null), [W, F] = T(() => typeof n == "boolean" ? n : typeof window < "u" ? window.innerWidth <= 640 : !1);
  Q(() => {
    if (typeof n == "boolean") {
      F(n);
      return;
    }
    const w = () => {
      if (typeof window > "u") return;
      let J = window.innerWidth <= 640;
      if (!J && A.current) {
        const k = A.current.getRootNode(), ce = k instanceof ShadowRoot ? k.host : A.current.parentElement, oe = (ce == null ? void 0 : ce.parentElement) || ce;
        oe && oe.clientWidth > 0 && oe.clientWidth <= 640 && (J = !0);
      }
      F(J);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [n]);
  const Z = s.formsEnabled === !0 && s.formsAvailable !== !1, P = we(() => {
    var k, ce;
    const w = s.actions || [];
    if (w.length > 0 && typeof ((k = w[0]) == null ? void 0 : k.id) == "number")
      return w[0].id;
    const J = s.forms || [];
    return J.length > 0 && typeof ((ce = J[0]) == null ? void 0 : ce.id) == "number" ? -J[0].id : null;
  }, [s.actions, s.forms]), de = we(() => ({
    open: () => {
      Y(!0), p(!0);
    },
    close: () => p(!1),
    toggle: () => {
      f || Y(!0), p(!f);
    },
    startConversation: (w) => {
      Y(!0), p(!0), w && w.trim() ? _(w.trim()) : c("new-conversation");
    },
    setScreen: (w) => c(w),
    setConfig: (w) => {
      u({
        ...s,
        ...w,
        colors: { ...s.colors || {}, ...w.colors || {} },
        content: { ...s.content || {}, ...w.content || {} },
        features: { ...s.features || {}, ...w.features || {} }
      });
    }
  }), [s, f, p, c, _, u]), q = te({});
  Pt(q.current, de), Q(() => () => Pt(q.current, null), []), Q(() => {
    a !== ie.current && (ie.current = a, c(a));
  }, [a, c]), Q(() => {
    e !== ae.current && (ae.current = e, e && Y(!0), p(e));
  }, [e, p]), Q(() => {
    if (h === "forms") {
      Z && P !== null && $(P), c("new-conversation");
      return;
    }
    h === "contact" && c("new-conversation");
  }, [P, Z, h, c]), Q(() => {
    var ce;
    if (typeof document > "u") return;
    const w = (ce = s.content) == null ? void 0 : ce.fontFamily;
    if (!w) return;
    const J = w.trim().toLowerCase();
    let k = "";
    if (J === "inter" ? k = "family=Inter:wght@400;500;600;700" : J === "geist" ? k = "family=Geist:wght@400;500;600;700" : J === "plus jakarta sans" && (k = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), k) {
      const oe = `pitaj-font-${J.replace(/\s+/g, "-")}`;
      if (!document.getElementById(oe)) {
        const me = document.createElement("link");
        me.id = oe, me.rel = "stylesheet", me.href = `https://fonts.googleapis.com/css2?${k}&display=swap`, document.head.appendChild(me);
      }
    }
  }, [(Ee = s.content) == null ? void 0 : Ee.fontFamily]);
  const ge = we(() => {
    var Pe, gt, bt, xt, jt;
    const w = s.colors || {}, J = ((Pe = s.content) == null ? void 0 : Pe.themeMode) === "dark" ? "dark" : "light", k = {};
    if (w.primaryColor) {
      k["--pitaj-accent"] = w.primaryColor, k["--pitaj-bubble-user"] = w.primaryColor, k["--pitaj-accent-hover"] = ur(w.primaryColor), k["--pitaj-accent-contrast"] = Ae(w.primaryColor), k["--pitaj-bubble-user-fg"] = Ae(w.primaryColor);
      const pe = Ie(w.primaryColor, 0.1), $e = Ie(w.primaryColor, 0.16), vt = Ie(w.primaryColor, 0.35);
      pe && (k["--pitaj-accent-soft"] = pe), $e && (k["--pitaj-accent-soft-strong"] = $e), vt && (k["--pitaj-accent-ring"] = vt);
    }
    if (w.headerBg && (k["--pitaj-header-bg"] = w.headerBg), w.headerFg) {
      k["--pitaj-header-fg"] = w.headerFg;
      const pe = Ie(w.headerFg, 0.1);
      pe && (k["--pitaj-header-icon-hover"] = pe);
    }
    k["--pitaj-chrome-border"] = J === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", w.surfaceBg && (k["--pitaj-surface"] = w.surfaceBg), w.subtle ? k["--pitaj-surface-subtle"] = w.subtle : w.surfaceBg && (k["--pitaj-surface-subtle"] = Ie(w.surfaceBg, 0.9) || w.surfaceBg), w.bubbleAiBg && (k["--pitaj-bubble-ai"] = w.bubbleAiBg), w.textFg && (k["--pitaj-bubble-ai-fg"] = w.textFg), w.textFg && (k["--pitaj-fg"] = w.textFg), w.mutedFg && (k["--pitaj-muted"] = w.mutedFg), w.border && (k["--pitaj-border"] = w.border), w.hover && (k["--pitaj-hover"] = w.hover), w.sendAccent && (k["--pitaj-send-accent"] = w.sendAccent, k["--pitaj-send-accent-contrast"] = Ae(w.sendAccent));
    const ce = (gt = s.content) == null ? void 0 : gt.launcherButtonColor;
    ce && (k["--pitaj-launcher-bg"] = ce, k["--pitaj-launcher-fg"] = Ae(ce));
    const oe = (bt = s.content) == null ? void 0 : bt.cornerRadius;
    if (oe) {
      const pe = oe === "sharp" || oe === "0px" ? "0px" : oe === "small" || oe === "8px" ? "8px" : oe === "medium" || oe === "12px" ? "12px" : oe === "large" || oe === "16px" ? "16px" : oe;
      k["--pitaj-radius"] = pe, pe === "0px" ? (k["--pitaj-radius-bubble"] = "0px", k["--pitaj-radius-input"] = "0px", k["--pitaj-radius-btn"] = "0px", k["--pitaj-radius-avatar"] = "0px", k["--pitaj-radius-full"] = "0px", k["--pitaj-radius-corner-sm"] = "0px", k["--pitaj-launcher-radius"] = "0px", k["--pitaj-launcher-pill-radius"] = "0px", k["--pitaj-badge-radius"] = "0px") : pe === "8px" ? (k["--pitaj-radius-bubble"] = "8px", k["--pitaj-radius-input"] = "8px", k["--pitaj-radius-btn"] = "6px", k["--pitaj-radius-avatar"] = "6px", k["--pitaj-radius-full"] = "8px", k["--pitaj-radius-corner-sm"] = "2px", k["--pitaj-launcher-radius"] = "8px", k["--pitaj-launcher-pill-radius"] = "8px", k["--pitaj-badge-radius"] = "4px") : pe === "12px" ? (k["--pitaj-radius-bubble"] = "12px", k["--pitaj-radius-input"] = "12px", k["--pitaj-radius-btn"] = "8px", k["--pitaj-radius-avatar"] = "10px", k["--pitaj-radius-full"] = "12px", k["--pitaj-radius-corner-sm"] = "4px", k["--pitaj-launcher-radius"] = "12px", k["--pitaj-launcher-pill-radius"] = "12px", k["--pitaj-badge-radius"] = "6px") : (k["--pitaj-radius-bubble"] = "18px", k["--pitaj-radius-input"] = "14px", k["--pitaj-radius-btn"] = "10px", k["--pitaj-radius-avatar"] = "50%", k["--pitaj-radius-full"] = "999px", k["--pitaj-radius-corner-sm"] = "4px", k["--pitaj-launcher-radius"] = "50%", k["--pitaj-launcher-pill-radius"] = "999px", k["--pitaj-badge-radius"] = "999px");
    }
    const me = (xt = s.content) == null ? void 0 : xt.fontFamily;
    if (me) {
      const pe = me.toLowerCase(), $e = pe === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : pe === "arial" ? "Arial, Helvetica, sans-serif" : pe === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : pe === "georgia" ? "Georgia, serif" : pe === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : pe === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${me}', 'Inter', system-ui, sans-serif`;
      k["--pitaj-font"] = $e, k.fontFamily = $e;
    }
    const Ne = (jt = s.content) == null ? void 0 : jt.fontSize;
    return Ne && (k["--pitaj-font-size"] = Ne, k.fontSize = Ne), k;
  }, [
    s.colors,
    (Me = s.content) == null ? void 0 : Me.themeMode,
    (Se = s.content) == null ? void 0 : Se.launcherButtonColor,
    (fe = s.content) == null ? void 0 : fe.cornerRadius,
    (dt = s.content) == null ? void 0 : dt.fontFamily,
    (ut = s.content) == null ? void 0 : ut.fontSize
  ]), he = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ i(ue, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: A,
      className: `pitaj-root ${he} ${f ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${W ? "is-mobile" : ""} ${o && ((ht = s.content) != null && ht.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: ge,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-window ${f ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !f,
            children: [
              /* @__PURE__ */ i(
                Ca,
                {
                  screen: h,
                  activeConversation: d,
                  config: s,
                  onBack: () => {
                    const w = V || "new-conversation";
                    K(null), c(w);
                  },
                  onClose: () => {
                    S(), p(!1);
                  },
                  onNewConversation: () => {
                    K(null), c("new-conversation");
                  },
                  onEndConversation: () => {
                    S(), N(), p(!1);
                  },
                  onDeleteConversation: ((ft = s.content) == null ? void 0 : ft.deleteConversationsEnabled) !== !1 && d ? () => l(d.id) : void 0,
                  onViewHistory: () => {
                    K(null), c("history");
                  },
                  onViewTickets: () => {
                    K(null), c("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                h === "conversation" && d && /* @__PURE__ */ i(
                  ar,
                  {
                    conversation: d,
                    config: s,
                    isStreaming: x,
                    rateLimitCountdown: I,
                    errorBanner: y,
                    onSendMessage: C,
                    onApiError: E,
                    onSubmitSatisfaction: (w, J) => M(d.id, w, J),
                    isRatingPromptActive: H === d.id
                  }
                ),
                h === "new-conversation" && /* @__PURE__ */ i(
                  rr,
                  {
                    config: s,
                    openedByUser: le,
                    onStart: (w) => {
                      _(w);
                    },
                    onApiError: E
                  }
                ),
                h === "history" && /* @__PURE__ */ i(
                  cr,
                  {
                    conversations: g,
                    config: s,
                    onSelectConversation: (w) => {
                      K("history"), z(w);
                    },
                    onNewConversation: () => {
                      K(null), c("new-conversation");
                    },
                    onDeleteConversation: ((mt = s.content) == null ? void 0 : mt.deleteConversationsEnabled) !== !1 ? l : void 0
                  }
                ),
                h === "tickets" && /* @__PURE__ */ i(
                  lr,
                  {
                    config: s,
                    visitorId: O,
                    onSelectTicket: (w) => {
                      var Ne;
                      K("tickets");
                      const J = (Ne = w.messages) == null ? void 0 : Ne.find((Pe) => Pe.sender === "user"), k = w.messages && w.messages.length > 0 ? w.messages[w.messages.length - 1] : null, ce = J ? J.content.length > 40 ? J.content.slice(0, 40) + "…" : J.content : w.ticketNumber || `Tiket #${w.id}`, me = {
                        id: w.conversationId ? String(w.conversationId) : String(w.id),
                        title: ce,
                        preview: k ? k.content : w.ticketNumber || `Tiket #${w.id}`,
                        timestamp: w.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: w.messages || [],
                        status: w.isResolved ? "ended" : "active",
                        ticketNumber: w.ticketNumber
                      };
                      z(me);
                    }
                  }
                ),
                (h === "conversation" || h === "new-conversation") && Z && ee !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  pr,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: R,
                    initialActionId: ee,
                    visitorContact: L,
                    onApiError: E,
                    blockedReason: I !== null ? `Sačekajte ${I}s prije novog zahtjeva.` : null,
                    onSubmitted: (w) => {
                      D(R, w, "user");
                    },
                    onBack: () => $(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!f || !W) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${f ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            or,
            {
              isOpen: f,
              onOpen: () => {
                Y(!0), p(!0);
              },
              config: s,
              pendingRating: H && !f ? {
                conversationId: H,
                onSubmitRating: U,
                onDismiss: B
              } : null
            }
          ),
          /* @__PURE__ */ i(
            nr,
            {
              isOpen: f,
              onClick: () => {
                f || Y(!0), p(!f);
              },
              unreadCount: m + (H && !f ? 1 : 0),
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const re = {
  companyId: "default",
  enabled: !0,
  name: "AI Podrška",
  title: "AI Asistent",
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
function fr(t) {
  const e = t.trim();
  if (!/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), r = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * r + 0.0722 * o) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function mr(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function gr(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const r = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, n = Number.parseInt(a.slice(5, 7), 16) / 255, s = Math.max(r, o, n), u = Math.min(r, o, n), f = s - u;
  let p = 0;
  const h = (s + u) / 2, c = f === 0 ? 0 : f / (1 - Math.abs(2 * h - 1));
  if (f !== 0)
    switch (s) {
      case r:
        p = (o - n) / f % 6;
        break;
      case o:
        p = (n - r) / f + 2;
        break;
      default:
        p = (r - o) / f + 4;
        break;
    }
  return { h: Math.round((p * 60 + 360) % 360), s: Math.round(c * 100), l: Math.round(h * 100) };
}
function br(t) {
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
function xr(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((n) => typeof n == "object" && n !== null).map((n) => ({
      key: typeof n.key == "string" ? n.key : "",
      type: br(n.type),
      label: typeof n.label == "string" ? n.label : "",
      required: n.required === !0,
      placeholder: typeof n.placeholder == "string" ? n.placeholder : void 0,
      options: Array.isArray(n.options) ? n.options.filter((s) => typeof s == "string" && s.trim() !== "") : void 0,
      accept: Array.isArray(n.accept) ? n.accept.filter((s) => typeof s == "string" && s.trim() !== "") : void 0,
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
function jr(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function vr(t, e) {
  var r, o, n, s, u, f, p, h, c;
  if (t === "default")
    return { ...re, companyId: t || "default" };
  const a = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const g = `${a}/api/widget/${t}/config`, d = await fetch(g, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!d.ok) {
      if (d.status === 403) {
        const A = await d.json().catch(() => null);
        if ((A == null ? void 0 : A.code) === "COUNTRY_BLOCKED" || A != null && A.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...re,
            companyId: t,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${d.status}), using defaults.`), { ...re, companyId: t, apiUrl: a };
    }
    const m = await d.json(), x = m.accent_color || ((r = re.colors) == null ? void 0 : r.primaryColor) || "#2563eb", I = Array.isArray(m.suggested_questions) ? m.suggested_questions.filter((A) => typeof A == "string" && A.trim() !== "").slice(0, 4) : [], y = Array.isArray(m.contact_fields) ? m.contact_fields.filter(
      (A) => A === "name" || A === "email" || A === "phone"
    ) : [], _ = (Array.isArray(m.channels) ? m.channels : []).find(
      (A) => typeof A == "object" && A !== null && A.channel === "chat_bubble"
    ), N = (_ == null ? void 0 : _.enabled) !== !1, l = m.widget_content && typeof m.widget_content == "object" ? m.widget_content : null, C = Array.isArray(l == null ? void 0 : l.suggested_message_rows) ? l.suggested_message_rows.filter((A) => typeof A == "object" && A !== null).map((A) => {
      const W = typeof A.text == "string" ? A.text.trim() : "", F = Array.isArray(A.children) ? A.children.filter((Z) => typeof Z == "string" && Z.trim() !== "") : [];
      return {
        text: W,
        children: F.length > 0 ? F : void 0
      };
    }).filter((A) => A.text !== "").slice(0, 4) : [], M = {
      avatarBorder: (l == null ? void 0 : l.avatar_border) !== !1,
      messagePlaceholder: typeof (l == null ? void 0 : l.message_placeholder) == "string" && l.message_placeholder.trim() !== "" ? l.message_placeholder : re.placeholder,
      dismissibleNotice: typeof (l == null ? void 0 : l.dismissible_notice) == "string" ? l.dismissible_notice : "",
      footerText: typeof (l == null ? void 0 : l.footer_text) == "string" ? l.footer_text : "",
      attachmentsEnabled: (l == null ? void 0 : l.attachments_enabled) === !0,
      voiceToTextEnabled: (l == null ? void 0 : l.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (l == null ? void 0 : l.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (l == null ? void 0 : l.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (l == null ? void 0 : l.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (l == null ? void 0 : l.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (l == null ? void 0 : l.keep_showing_suggested_messages) === !0,
      suggestedMessageRows: C,
      useDifferentMessageMobile: (l == null ? void 0 : l.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (l == null ? void 0 : l.mobile_welcome_message) == "string" ? l.mobile_welcome_message : "",
      autoShowInitialMessages: (l == null ? void 0 : l.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (l == null ? void 0 : l.auto_show_duration_seconds) == "number" ? Math.max(0, l.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (l == null ? void 0 : l.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (l == null ? void 0 : l.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (l == null ? void 0 : l.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, l.mobile_auto_show_duration_seconds) : null,
      popupMessageText: typeof (l == null ? void 0 : l.popup_message_text) == "string" ? l.popup_message_text : "",
      themeMode: (l == null ? void 0 : l.theme_mode) === "dark" ? "dark" : "light",
      tintedGrayscaleEnabled: (l == null ? void 0 : l.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (l == null ? void 0 : l.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (l == null ? void 0 : l.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (l == null ? void 0 : l.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (l == null ? void 0 : l.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(l.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (l == null ? void 0 : l.tinted_grayscale_tint) == "number" ? Math.max(-100, Math.min(100, Math.round(l.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (l == null ? void 0 : l.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(l.tinted_grayscale_shade))) : 0,
      launcherButtonColor: mr(l == null ? void 0 : l.launcher_button_color, "#05070c"),
      launcherIconStyle: (l == null ? void 0 : l.launcher_icon_style) === "sparkles" || (l == null ? void 0 : l.launcher_icon_style) === "message-square" || (l == null ? void 0 : l.launcher_icon_style) === "contact" || (l == null ? void 0 : l.launcher_icon_style) === "custom" ? l.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (l == null ? void 0 : l.launcher_icon_url) == "string" ? l.launcher_icon_url : "",
      launcherShowText: (l == null ? void 0 : l.launcher_show_text) === !0,
      launcherText: typeof (l == null ? void 0 : l.launcher_text) == "string" ? l.launcher_text : "",
      launcherTextSide: (l == null ? void 0 : l.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (l == null ? void 0 : l.show_inline_launcher) === !0,
      cornerRadius: typeof (l == null ? void 0 : l.corner_radius) == "string" ? l.corner_radius : "16px",
      fontFamily: typeof (l == null ? void 0 : l.font_family) == "string" ? l.font_family : "Inter",
      fontSize: typeof (l == null ? void 0 : l.font_size) == "string" ? l.font_size : "14px",
      languageSource: (l == null ? void 0 : l.language_source) === "website" ? "website" : "browser",
      defaultLanguage: typeof (l == null ? void 0 : l.default_language) == "string" ? l.default_language : "en",
      supportedLanguages: Array.isArray(l == null ? void 0 : l.supported_languages) ? l.supported_languages : ["en"],
      guardrails: l == null ? void 0 : l.guardrails
    }, L = M.themeMode === "dark" ? "dark" : "light", O = M.accentColorEnabled !== !1, R = M.accentColorForHeaderEnabled === !0, D = M.accentColorForSendIconEnabled === !0, E = M.tintedGrayscaleEnabled === !0, ie = M.tintedGrayscaleHue ?? 0, ae = M.tintedGrayscaleTint ?? 0, le = M.tintedGrayscaleShade ?? 0, Y = O ? x : L === "dark" ? "#9ca3af" : "#6b7280", $ = (gr(Y).h + ie + 360) % 360, V = Math.max(0, Math.min(46, 10 + ae * 0.36)), K = Math.max(-24, Math.min(24, le * 0.24)), H = L === "dark" ? {
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
    if (R && (H.headerBg = Y, H.headerFg = fr(Y)), E) {
      const A = L === "dark" ? Math.max(8, Math.min(20, 12 + K)) : Math.max(88, Math.min(97, 95 + K * 0.22)), W = L === "dark" ? Math.max(10, Math.min(24, 16 + K)) : Math.max(80, Math.min(94, 89 + K * 0.35)), F = L === "dark" ? Math.max(11, Math.min(26, 18 + K * 0.9)) : Math.max(83, Math.min(95, W + 3)), Z = L === "dark" ? Math.max(22, Math.min(40, 30 + K)) : Math.max(70, Math.min(88, 82 + K * 0.38)), P = L === "dark" ? Math.max(16, Math.min(30, 22 + K)) : Math.max(78, Math.min(92, W - 2));
      H.surfaceBg = `hsl(${$} ${V}% ${A}%)`, H.bubbleAiBg = `hsl(${$} ${Math.max(0, V - 2)}% ${F}%)`, H.subtle = `hsl(${$} ${Math.max(0, V - 4)}% ${W}%)`, H.border = `hsl(${$} ${Math.max(0, V - 5)}% ${Z}%)`, H.hover = `hsl(${$} ${Math.max(0, V - 3)}% ${P}%)`;
    }
    const j = xr(m.forms), b = jr(m.actions).filter(
      (A) => j.some((W) => W.id === A.form_id)
    ), v = m.forms_enabled === !0 && j.length > 0 && b.length > 0, S = m.chat_available !== !1, U = m.transcribe_available !== !1 && S, B = m.forms_available !== !1 && v;
    return {
      ...re,
      companyId: t,
      enabled: N,
      apiUrl: a,
      name: m.company_name || re.name,
      title: m.bot_name || re.title,
      avatar: typeof (l == null ? void 0 : l.avatar_url) == "string" && l.avatar_url.trim() !== "" ? l.avatar_url : re.avatar,
      welcomeHeadline: m.bot_name ? `Ćaskajte sa ${m.bot_name}` : re.welcomeHeadline,
      welcomeMessage: m.welcome_message || re.welcomeMessage,
      placeholder: M.messagePlaceholder || re.placeholder,
      suggestedQuestions: I,
      contactFields: y.length > 0 ? y : re.contactFields,
      contact: {
        enabled: typeof ((o = m.contact) == null ? void 0 : o.enabled) == "boolean" ? m.contact.enabled : (n = re.contact) == null ? void 0 : n.enabled,
        title: typeof ((s = m.contact) == null ? void 0 : s.title) == "string" && m.contact.title.trim() !== "" ? m.contact.title : (u = re.contact) == null ? void 0 : u.title,
        subtitle: typeof ((f = m.contact) == null ? void 0 : f.subtitle) == "string" && m.contact.subtitle.trim() !== "" ? m.contact.subtitle : (p = re.contact) == null ? void 0 : p.subtitle,
        submitLabel: typeof ((h = m.contact) == null ? void 0 : h.submit_label) == "string" && m.contact.submit_label.trim() !== "" ? m.contact.submit_label : (c = re.contact) == null ? void 0 : c.submitLabel
      },
      poweredBy: m.show_branding !== void 0 ? m.show_branding : re.poweredBy,
      position: m.position || re.position,
      accentGradient: Array.isArray(m.accent_gradient) ? m.accent_gradient : [],
      content: {
        ...re.content || {},
        ...M
      },
      chatAvailable: S,
      transcribeAvailable: U,
      formsAvailable: B,
      formsEnabled: v,
      forms: j,
      actions: b,
      colors: {
        ...re.colors,
        primaryColor: Y,
        bubbleUserBg: Y,
        sendAccent: D ? Y : L === "dark" ? "#e5e7eb" : "#111827",
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
  } catch (g) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", g), { ...re, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const wr = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";:host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon-hover: rgba(15, 23, 42, .06);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:100%;height:100%;min-height:0;max-height:100%;align-items:center!important;gap:8px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-btn,.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-wrap{display:none!important}.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-btn,.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-wrap{align-self:flex-end;margin-right:8px}.pitaj-root.is-inline.show-inline-launcher .pitaj-window{height:calc(100% - 62px);max-height:calc(100% - 62px)}.pitaj-root.is-inline .pitaj-window{position:relative;width:min(100%,380px);height:auto;flex:1 1 auto;min-height:0;max-width:380px;max-height:100%;transform:none!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:none;display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background:var(--pitaj-header-bg);color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-border);flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:#fff3;color:var(--pitaj-header-fg);line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-muted);line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-muted)}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg);border-color:#0f172a0d}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:2px}.pitaj-satisfaction-prompt{display:block;font-size:13.5px;font-weight:650;color:var(--pitaj-fg);line-height:1.35}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:2px}.pitaj-mood-display{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:10px 0 6px;gap:3px}.pitaj-mood-emoji{font-size:38px;line-height:1;display:inline-block;transition:transform .22s cubic-bezier(.34,1.56,.64,1);transform-origin:center}.pitaj-mood-emoji.is-bouncing{transform:scale(1.25)}.pitaj-mood-label{font-size:13.5px;font-weight:700;letter-spacing:-.01em;transition:color .18s ease}.pitaj-slider-container{position:relative;width:100%;padding:8px 4px 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:8px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .12s ease,box-shadow .12s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.1);box-shadow:0 3px 10px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.18)}.pitaj-range-slider::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .12s ease,box-shadow .12s ease}.pitaj-range-slider::-moz-range-thumb:hover{transform:scale(1.1)}.pitaj-range-slider::-moz-range-thumb:active{cursor:grabbing;transform:scale(1.18)}.pitaj-slider-ticks{display:flex;justify-content:space-between;align-items:center;position:absolute;top:18px;left:10px;right:10px;pointer-events:none}.pitaj-slider-tick{width:10px;height:10px;border-radius:50%;background:var(--pitaj-surface);border:2px solid var(--pitaj-border);display:flex;align-items:center;justify-content:center;pointer-events:auto;cursor:pointer;padding:0;transition:border-color .15s ease,transform .15s ease}.pitaj-slider-tick:hover{transform:scale(1.2)}.pitaj-slider-tick-dot{width:4px;height:4px;border-radius:50%;background:transparent;transition:background-color .15s ease}.pitaj-slider-scale-labels{display:flex;justify-content:space-between;font-size:11px;font-weight:600;color:var(--pitaj-muted);margin-top:6px;padding:0 6px}.pitaj-mood-submit-btn{width:100%;height:36px;border-radius:10px;border:none;color:#fff;font-size:13px;font-weight:650;cursor:pointer;display:flex;align-items:center;justify-content:center;margin-top:12px;transition:transform .15s ease,filter .15s ease,box-shadow .15s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}@media (max-width: 640px){.pitaj-root:not(.is-inline){position:fixed;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100vw!important;height:100vh!important;max-width:100vw!important;max-height:100vh!important;padding:0!important;margin:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root:not(.is-inline) .pitaj-window{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100vw!important;height:100dvh!important;height:100vh!important;max-width:100vw!important;max-height:100dvh!important;max-height:100vh!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1;z-index:2147483646!important}.pitaj-root:not(.is-inline) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important}.pitaj-root:not(.is-inline) .pitaj-input-area{padding-bottom:calc(14px + env(safe-area-inset-bottom,0px))!important}.pitaj-root:not(.is-inline) .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root:not(.is-inline) .pitaj-launcher-wrap{position:fixed;bottom:16px;right:16px;z-index:2147483647}.pitaj-root:not(.is-inline).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline).pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root:not(.is-inline) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}', ke = {};
function vi(t, e) {
  (ke[t] || []).forEach((r) => {
    try {
      r(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function yr(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function kr(t, e) {
  const a = e.initialConfig || {};
  return {
    ...t,
    ...a,
    position: e.position || a.position || t.position || "bottom-right",
    apiUrl: e.apiUrl || a.apiUrl || t.apiUrl,
    colors: { ...t.colors || {}, ...a.colors || {} },
    content: { ...t.content || {}, ...a.content || {} },
    features: { ...t.features || {}, ...a.features || {} }
  };
}
const Fe = /* @__PURE__ */ new WeakMap();
async function at(t, e = {}) {
  const a = Fe.get(t), r = async () => {
    const n = e.widgetId || e.companyId || "default", s = await vr(n, e.apiUrl), u = kr(s, e);
    if (u.enabled === !1 || u.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let f = t.shadowRoot;
    f || (f = t.attachShadow({ mode: "open" })), f.innerHTML = "";
    const p = document.createElement("style");
    p.textContent = wr, f.appendChild(p);
    const h = document.createElement("div");
    h.className = "pitaj-shadow-mount", f.appendChild(h), Nt(
      /* @__PURE__ */ i(
        hr,
        {
          config: u,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          initialScreen: e.initialScreen,
          onEvent: vi
        }
      ),
      h
    );
    const c = ve();
    return c && (t.__pitajController = c), {
      controller: c,
      unmount: () => {
        Nt(null, h), f && (f.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(r, r);
  Fe.set(t, o);
  try {
    return await o;
  } finally {
    Fe.get(t) === o && Fe.delete(t);
  }
}
let Ce = null;
const Re = {
  mount: async (t, e) => {
    const a = await at(t, e);
    return Ce = a.unmount, a;
  },
  unmount: () => {
    Ce && (Ce(), Ce = null);
  },
  init: async (t) => {
    const e = yr(t.containerId || "pitaj-io-widget-root"), a = await at(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return Ce = a.unmount, a;
  },
  open: () => {
    var t;
    return (t = ve()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = ve()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = ve()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = ve()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = ve()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = ve()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = ve()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    ke[t] || (ke[t] = []), ke[t].push(e);
  },
  off: (t, e) => {
    ke[t] && (ke[t] = ke[t].filter((a) => a !== e));
  },
  emit: (t, e) => {
    vi(t, e);
  }
};
class _r extends HTMLElement {
  constructor() {
    super(...arguments);
    ye(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", r = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", n = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", s = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: u } = await at(this, { widgetId: a, apiUrl: r, position: o, startOpen: n, isInline: s });
    this.unmountFn = u;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Ft(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const a = t.getAttribute("data-api-url") || void 0, r = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", n = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: r, startOpen: o, isInline: n };
}
var Rt;
if (typeof window < "u") {
  const t = ((Rt = window.PitajIO) == null ? void 0 : Rt._q) || [];
  window.PitajIO = Re, customElements.get("pitaj-io") || customElements.define("pitaj-io", _r);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, Re.init(e).then(() => {
      t.forEach(({ method: a, args: r }) => {
        const o = Re[a];
        typeof o == "function" && o(...r);
      });
    });
  else {
    const a = document.currentScript;
    let r = Ft(a);
    if (!r) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let n = o.length - 1; n >= 0; n--) {
        const s = o[n];
        if (s.src && /widget(\.iife)?\.js/i.test(s.src) && (r = Ft(s), r))
          break;
      }
    }
    r && Re.init({ containerId: "pitaj-io-widget-root", ...r });
  }
}
export {
  te as A,
  Ir as C,
  Cr as M,
  Ze as P,
  we as T,
  Mr as U,
  ea as a,
  je as b,
  ua as c,
  T as d,
  Sr as e,
  $r as f,
  zr as g,
  xe as h,
  Re as i,
  ue as k,
  ri as t,
  i as u,
  Q as y
};
