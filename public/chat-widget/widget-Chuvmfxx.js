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
  var r, s, n, o = {};
  for (n in e) n == "key" ? r = e[n] : n == "ref" ? s = e[n] : o[n] = e[n];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ke.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) o[n] === void 0 && (o[n] = t.defaultProps[n]);
  return He(t, o, r, s, null);
}
function He(t, e, a, r, s) {
  var n = { type: t, props: e, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Ht, __i: -1, __u: 0 };
  return s == null && X.vnode != null && X.vnode(n), n;
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
  for (var t, e, a, r, s, n, o, u = 1; _e.length; ) _e.length > u && _e.sort(Vt), t = _e.shift(), u = _e.length, t.__d && (a = void 0, s = (r = (e = t).__v).__e, n = [], o = [], e.__P && ((a = be({}, r)).__v = r.__v + 1, X.vnode && X.vnode(a), ot(e.__P, a, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [s] : null, n, s ?? ze(r), !!(32 & r.__u), o), a.__v = r.__v, a.__.__k[a.__i] = a, Yt(n, a, o), a.__e != s && Wt(a)));
  qe.__r = 0;
}
function Zt(t, e, a, r, s, n, o, u, h, p, m) {
  var c, g, d, f, k, N, _ = r && r.__k || Kt, z = e.length;
  for (h = Ni(a, e, _, h, z), c = 0; c < z; c++) (d = a.__k[c]) != null && (g = d.__i === -1 ? Le : _[d.__i] || Le, d.__i = c, N = ot(t, d, g, s, n, o, u, h, p, m), f = d.__e, d.ref && g.ref != d.ref && (g.ref && st(g.ref, null, d), m.push(d.ref, d.__c || f, d)), k == null && f != null && (k = f), 4 & d.__u || g.__k === d.__k ? h = Gt(d, h, t) : typeof d.type == "function" && N !== void 0 ? h = N : f && (h = f.nextSibling), d.__u &= -7);
  return a.__e = k, h;
}
function Ni(t, e, a, r, s) {
  var n, o, u, h, p, m = a.length, c = m, g = 0;
  for (t.__k = new Array(s), n = 0; n < s; n++) (o = e[n]) != null && typeof o != "boolean" && typeof o != "function" ? (h = n + g, (o = t.__k[n] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? He(null, o, null, null, null) : We(o) ? He(ue, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? He(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = t, o.__b = t.__b + 1, u = null, (p = o.__i = zi(o, a, h, c)) !== -1 && (c--, (u = a[p]) && (u.__u |= 2)), u == null || u.__v === null ? (p == -1 && (s > m ? g-- : s < m && g++), typeof o.type != "function" && (o.__u |= 4)) : p != h && (p == h - 1 ? g-- : p == h + 1 ? g++ : (p > h ? g-- : g++, o.__u |= 4))) : t.__k[n] = null;
  if (c) for (n = 0; n < m; n++) (u = a[n]) != null && !(2 & u.__u) && (u.__e == r && (r = ze(u)), Jt(u, u));
  return r;
}
function Gt(t, e, a) {
  var r, s;
  if (typeof t.type == "function") {
    for (r = t.__k, s = 0; r && s < r.length; s++) r[s] && (r[s].__ = t, e = Gt(r[s], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !a.contains(e) && (e = ze(t)), a.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function zi(t, e, a, r) {
  var s, n, o = t.key, u = t.type, h = e[a];
  if (h === null && t.key == null || h && o == h.key && u === h.type && !(2 & h.__u)) return a;
  if (r > (h != null && !(2 & h.__u) ? 1 : 0)) for (s = a - 1, n = a + 1; s >= 0 || n < e.length; ) {
    if (s >= 0) {
      if ((h = e[s]) && !(2 & h.__u) && o == h.key && u === h.type) return s;
      s--;
    }
    if (n < e.length) {
      if ((h = e[n]) && !(2 & h.__u) && o == h.key && u === h.type) return n;
      n++;
    }
  }
  return -1;
}
function kt(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || ki.test(e) ? a : a + "px";
}
function De(t, e, a, r, s) {
  var n;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) a && e in a || kt(t.style, e, "");
    if (a) for (e in a) r && a[e] === r[e] || kt(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(qt, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = a, a ? r ? a.t = r.t : (a.t = rt, t.addEventListener(e, n ? Xe : Je, n)) : t.removeEventListener(e, n ? Xe : Je, n);
  else {
    if (s == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
function ot(t, e, a, r, s, n, o, u, h, p) {
  var m, c, g, d, f, k, N, _, z, I, j, l, C, M, L, V, H, U = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (h = !!(32 & a.__u), n = [u = e.__e = a.__e]), (m = X.__b) && m(e);
  e: if (typeof U == "function") try {
    if (_ = e.props, z = "prototype" in U && U.prototype.render, I = (m = U.contextType) && r[m.__c], j = m ? I ? I.props.value : m.__ : r, a.__c ? N = (c = e.__c = a.__c).__ = c.__E : (z ? e.__c = c = new U(_, j) : (e.__c = c = new Oe(_, j), c.constructor = U, c.render = Si), I && I.sub(c), c.props = _, c.state || (c.state = {}), c.context = j, c.__n = r, g = c.__d = !0, c.__h = [], c._sb = []), z && c.__s == null && (c.__s = c.state), z && U.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = be({}, c.__s)), be(c.__s, U.getDerivedStateFromProps(_, c.__s))), d = c.props, f = c.state, c.__v = e, g) z && U.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), z && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (z && U.getDerivedStateFromProps == null && _ !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, j), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, j) === !1 || e.__v == a.__v)) {
        for (e.__v != a.__v && (c.props = _, c.state = c.__s, c.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(P) {
          P && (P.__ = e);
        }), l = 0; l < c._sb.length; l++) c.__h.push(c._sb[l]);
        c._sb = [], c.__h.length && o.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, j), z && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(d, f, k);
      });
    }
    if (c.context = j, c.props = _, c.__P = t, c.__e = !1, C = X.__r, M = 0, z) {
      for (c.state = c.__s, c.__d = !1, C && C(e), m = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++) c.__h.push(c._sb[L]);
      c._sb = [];
    } else do
      c.__d = !1, C && C(e), m = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++M < 25);
    c.state = c.__s, c.getChildContext != null && (r = be(be({}, r), c.getChildContext())), z && !g && c.getSnapshotBeforeUpdate != null && (k = c.getSnapshotBeforeUpdate(d, f)), V = m, m != null && m.type === ue && m.key == null && (V = Qt(m.props.children)), u = Zt(t, We(V) ? V : [V], e, a, r, s, n, o, u, h, p), c.base = e.__e, e.__u &= -161, c.__h.length && o.push(c), N && (c.__E = c.__ = null);
  } catch (P) {
    if (e.__v = null, h || n != null) if (P.then) {
      for (e.__u |= h ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
      n[n.indexOf(u)] = null, e.__e = u;
    } else for (H = n.length; H--; ) nt(n[H]);
    else e.__e = a.__e, e.__k = a.__k;
    X.__e(P, e, a);
  }
  else n == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : u = e.__e = Mi(a.__e, e, a, r, s, n, o, h, p);
  return (m = X.diffed) && m(e), 128 & e.__u ? void 0 : u;
}
function Yt(t, e, a) {
  for (var r = 0; r < a.length; r++) st(a[r], a[++r], a[++r]);
  X.__c && X.__c(e, t), t.some(function(s) {
    try {
      t = s.__h, s.__h = [], t.some(function(n) {
        n.call(s);
      });
    } catch (n) {
      X.__e(n, s.__v);
    }
  });
}
function Qt(t) {
  return typeof t != "object" || t == null ? t : We(t) ? t.map(Qt) : be({}, t);
}
function Mi(t, e, a, r, s, n, o, u, h) {
  var p, m, c, g, d, f, k, N = a.props, _ = e.props, z = e.type;
  if (z == "svg" ? s = "http://www.w3.org/2000/svg" : z == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), n != null) {
    for (p = 0; p < n.length; p++) if ((d = n[p]) && "setAttribute" in d == !!z && (z ? d.localName == z : d.nodeType == 3)) {
      t = d, n[p] = null;
      break;
    }
  }
  if (t == null) {
    if (z == null) return document.createTextNode(_);
    t = document.createElementNS(s, z, _.is && _), u && (X.__m && X.__m(e, n), u = !1), n = null;
  }
  if (z === null) N === _ || u && t.data === _ || (t.data = _);
  else {
    if (n = n && Ke.call(t.childNodes), N = a.props || Le, !u && n != null) for (N = {}, p = 0; p < t.attributes.length; p++) N[(d = t.attributes[p]).name] = d.value;
    for (p in N) if (d = N[p], p != "children") {
      if (p == "dangerouslySetInnerHTML") c = d;
      else if (!(p in _)) {
        if (p == "value" && "defaultValue" in _ || p == "checked" && "defaultChecked" in _) continue;
        De(t, p, null, d, s);
      }
    }
    for (p in _) d = _[p], p == "children" ? g = d : p == "dangerouslySetInnerHTML" ? m = d : p == "value" ? f = d : p == "checked" ? k = d : u && typeof d != "function" || N[p] === d || De(t, p, d, N[p], s);
    if (m) u || c && (m.__html === c.__html || m.__html === t.innerHTML) || (t.innerHTML = m.__html), e.__k = [];
    else if (c && (t.innerHTML = ""), Zt(e.type === "template" ? t.content : t, We(g) ? g : [g], e, a, r, z == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, n, o, n ? n[0] : a.__k && ze(a, 0), u, h), n != null) for (p = n.length; p--; ) nt(n[p]);
    u || (p = "value", z == "progress" && f == null ? t.removeAttribute("value") : f !== void 0 && (f !== t[p] || z == "progress" && !f || z == "option" && f !== N[p]) && De(t, p, f, N[p], s), p = "checked", k !== void 0 && k !== t[p] && De(t, p, k, N[p], s));
  }
  return t;
}
function st(t, e, a) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (s) {
    X.__e(s, a);
  }
}
function Jt(t, e, a) {
  var r, s;
  if (X.unmount && X.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || st(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      X.__e(n, e);
    }
    r.base = r.__P = null;
  }
  if (r = t.__k) for (s = 0; s < r.length; s++) r[s] && Jt(r[s], e, a || typeof t.type != "function");
  a || nt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Si(t, e, a) {
  return this.constructor(t, a);
}
function Nt(t, e, a) {
  var r, s, n, o;
  e == document && (e = document.documentElement), X.__ && X.__(t, e), s = (r = !1) ? null : e.__k, n = [], o = [], ot(e, t = e.__k = _i(ue, null, [t]), s || Le, Le, e.namespaceURI, s ? null : e.firstChild ? Ke.call(e.childNodes) : null, n, s ? s.__e : e.firstChild, r, o), Yt(n, t, o);
}
Ke = Kt.slice, X = { __e: function(t, e, a, r) {
  for (var s, n, o; e = e.__; ) if ((s = e.__c) && !s.__) try {
    if ((n = s.constructor) && n.getDerivedStateFromError != null && (s.setState(n.getDerivedStateFromError(t)), o = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, r || {}), o = s.__d), o) return s.__E = s;
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
function i(t, e, a, r, s, n) {
  e || (e = {});
  var o, u, h = e;
  if ("ref" in h) for (u in h = {}, e) u == "ref" ? o = e[u] : h[u] = e[u];
  var p = { type: t, props: h, key: a, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --$i, __i: -1, __u: 0, __source: s, __self: n };
  if (typeof t == "function" && (o = t.defaultProps)) for (u in o) h[u] === void 0 && (h[u] = o[u]);
  return X.vnode && X.vnode(p), p;
}
var Te, se, Ge, zt, Ee = 0, Xt = [], le = X, Mt = le.__b, St = le.__r, $t = le.diffed, It = le.__c, Ct = le.unmount, At = le.__;
function lt(t, e) {
  le.__h && le.__h(se, t, Ee || e), Ee = 0;
  var a = se.__H || (se.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function T(t) {
  return Ee = 1, Ii(ti, t);
}
function Ii(t, e, a) {
  var r = lt(Te++, 2);
  if (r.t = t, !r.__c && (r.__ = [ti(void 0, e), function(u) {
    var h = r.__N ? r.__N[0] : r.__[0], p = r.t(h, u);
    h !== p && (r.__N = [p, r.__[1]], r.__c.setState({}));
  }], r.__c = se, !se.__f)) {
    var s = function(u, h, p) {
      if (!r.__c.__H) return !0;
      var m = r.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (m.every(function(g) {
        return !g.__N;
      })) return !n || n.call(this, u, h, p);
      var c = r.__c.props !== u;
      return m.forEach(function(g) {
        if (g.__N) {
          var d = g.__[0];
          g.__ = g.__N, g.__N = void 0, d !== g.__[0] && (c = !0);
        }
      }), n && n.call(this, u, h, p) || c;
    };
    se.__f = !0;
    var n = se.shouldComponentUpdate, o = se.componentWillUpdate;
    se.componentWillUpdate = function(u, h, p) {
      if (this.__e) {
        var m = n;
        n = void 0, s(u, h, p), n = m;
      }
      o && o.call(this, u, h, p);
    }, se.shouldComponentUpdate = s;
  }
  return r.__N || r.__;
}
function Y(t, e) {
  var a = lt(Te++, 3);
  !le.__s && ei(a.__H, e) && (a.__ = t, a.u = e, se.__H.__h.push(a));
}
function te(t) {
  return Ee = 5, we(function() {
    return { current: t };
  }, []);
}
function we(t, e) {
  var a = lt(Te++, 7);
  return ei(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function Q(t, e) {
  return Ee = 8, we(function() {
    return t;
  }, e);
}
function Ci() {
  for (var t; t = Xt.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(Ve), t.__H.__h.forEach(et), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], le.__e(e, t.__v);
  }
}
le.__b = function(t) {
  se = null, Mt && Mt(t);
}, le.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), At && At(t, e);
}, le.__r = function(t) {
  St && St(t), Te = 0;
  var e = (se = t.__c).__H;
  e && (Ge === se ? (e.__h = [], se.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.forEach(Ve), e.__h.forEach(et), e.__h = [], Te = 0)), Ge = se;
}, le.diffed = function(t) {
  $t && $t(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Xt.push(e) !== 1 && zt === le.requestAnimationFrame || ((zt = le.requestAnimationFrame) || Ai)(Ci)), e.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), Ge = se = null;
}, le.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(Ve), a.__h = a.__h.filter(function(r) {
        return !r.__ || et(r);
      });
    } catch (r) {
      e.some(function(s) {
        s.__h && (s.__h = []);
      }), e = [], le.__e(r, a.__v);
    }
  }), It && It(t, e);
}, le.unmount = function(t) {
  Ct && Ct(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.forEach(function(r) {
    try {
      Ve(r);
    } catch (s) {
      e = s;
    }
  }), a.__H = void 0, e && le.__e(e, a.__v));
};
var Lt = typeof requestAnimationFrame == "function";
function Ai(t) {
  var e, a = function() {
    clearTimeout(r), Lt && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(a, 100);
  Lt && (e = requestAnimationFrame(a));
}
function Ve(t) {
  var e = se, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), se = e;
}
function et(t) {
  var e = se;
  t.__c = t.__(), se = e;
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
  const r = a.getReader(), s = new TextDecoder("utf-8");
  let n = "";
  try {
    for (; ; ) {
      const { done: o, value: u } = await r.read();
      if (o)
        break;
      n += s.decode(u, { stream: !0 });
      const h = n.split(/\r?\n/);
      n = h.pop() || "";
      for (const p of h) {
        const m = p.trim();
        if (!(!m || m.startsWith(":")) && m.startsWith("data:")) {
          const c = m.slice(5).trim();
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
  } catch (o) {
    if (e.onError)
      e.onError(o);
    else
      throw o;
  }
}
class ii extends Error {
  constructor(a, r = 60, s) {
    super(a);
    ye(this, "retryAfterSeconds");
    ye(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = r, this.code = s;
  }
}
class ai extends Error {
  constructor(a, r, s, n) {
    super(a);
    ye(this, "status");
    ye(this, "code");
    ye(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = r, this.code = s, this.retryAfterSeconds = n;
  }
}
function Ti(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function Ei(t, e) {
  const a = await t.json().catch(() => null);
  ri(t.status, a, e, t.headers.get("Retry-After"));
}
function ri(t, e, a, r) {
  const s = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, n = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, o = Ti((e == null ? void 0 : e.retry_after) ?? r, 60);
  throw t === 429 || s === "RATE_LIMIT_EXCEEDED" ? new ii(n, o, s) : new ai(n, t, s, o);
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
function Pi(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return ct(e.of(t));
  } catch {
    return null;
  }
}
function Bi() {
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
  return !e && t && (e = Pi(t)), { code: t, name: e };
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
    (h) => h.keywords.some((p) => a.includes(p))
  ), s = r ? r.reply : `${Tt[Math.floor(Math.random() * Tt.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, n = r ? r.sources : [], o = r ? r.suggestions : ["Kako funkcionira AI model?", "Mogu li dobiti kontakt podrške?"], u = s.split(" ");
  for (let h = 0; h < u.length; h++) {
    const p = u[h] + (h < u.length - 1 ? " " : "");
    e.onChunk(p), await new Promise((m) => setTimeout(m, 20 + Math.random() * 20));
  }
  e.onSources && n.length > 0 && e.onSources(n), e.onSuggestedQuestions && o.length > 0 && e.onSuggestedQuestions(o), e.onDone && e.onDone();
}
async function Fi(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: r,
    message: s,
    forceNewConversation: n,
    apiUrl: o,
    mockMode: u,
    visitorName: h,
    visitorEmail: p,
    visitorPhone: m,
    visitorCountryCode: c,
    visitorCountryName: g,
    callbacks: d
  } = t;
  if (u || !e || e === "default") {
    await Ui(s, d);
    return;
  }
  const f = (o || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), k = Bi(), N = ni(c) ?? k.code ?? void 0, _ = ct(g) ?? k.name ?? void 0, z = `${f}/api/widget/${e}/chat`, I = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, j = await fetch(z, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: s,
      conversation_id: I,
      force_new_conversation: n === !0,
      visitor_id: r,
      visitor_name: h || void 0,
      visitor_email: p || void 0,
      visitor_phone: m || void 0,
      visitor_country_code: N,
      visitor_country_name: _
    })
  });
  if (j.ok || await Ei(j, `API greška (${j.status})`), (j.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Li(j, d);
  else {
    const C = await j.json(), M = C.answer || C.message || "";
    C.conversation_id !== void 0 && d.onConversationId && d.onConversationId(C.conversation_id);
    const L = C.ticket_number ?? C.ticketNumber;
    if (L != null && String(L).trim() !== "" && String(L).trim() !== "undefined" && String(L).trim() !== "null" && d.onTicketNumber && d.onTicketNumber(String(L).trim()), C.triggered_action && d.onActionTrigger && d.onActionTrigger(C.triggered_action), M && M.trim()) {
      const V = M.split(" ");
      for (let H = 0; H < V.length; H++) {
        const U = V[H] + (H < V.length - 1 ? " " : "");
        d.onChunk(U), await new Promise((P) => setTimeout(P, 15));
      }
    }
    d.onDone && d.onDone();
  }
}
async function tt(t) {
  const { widgetId: e, visitorId: a, apiUrl: r, status: s, page: n = 1, perPage: o = 15 } = t, u = (r || "").replace(/\/$/, ""), h = new URLSearchParams({
    visitor_id: a,
    page: String(n),
    per_page: String(o)
  });
  s && h.set("status", s);
  const p = await fetch(`${u}/api/widget/${encodeURIComponent(e)}/tickets?${h}`), m = await p.json().catch(() => null);
  if (!p.ok) throw new Error(m && "error" in m ? m.error : "Tikete nije moguće učitati.");
  const c = (m == null ? void 0 : m.data) || [], g = c.map((k) => ({
    id: k.id,
    ticketNumber: k.ticket_number,
    conversationId: k.conversation_id,
    isResolved: !!k.is_resolved,
    updatedAt: k.updated_at,
    messages: (k.messages || []).map((N) => ({
      id: String(N.id),
      content: N.content,
      sender: N.role === "user" ? "user" : "ai",
      timestamp: N.created_at,
      status: "sent"
    }))
  })), d = m == null ? void 0 : m.meta, f = (d == null ? void 0 : d.has_more) !== void 0 ? !!d.has_more : c.length >= o;
  return {
    tickets: g,
    hasMore: f,
    total: d == null ? void 0 : d.total,
    currentPage: (d == null ? void 0 : d.current_page) ?? n
  };
}
async function Ri(t, e, a) {
  return (await tt({ widgetId: t, visitorId: e, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function Hi(t, e, a, r, s) {
  const n = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || s || !n)
    return await new Promise((h) => setTimeout(h, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const o = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), u = await fetch(`${o}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!u.ok) {
    const p = (await u.json().catch(() => ({}))).error || (u.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), m = new Error(p);
    throw m.status = u.status, m;
  }
  return await u.json();
}
const Et = "pitaj_io_visitor_id", Oi = "chat_direkt_visitor_id", Vi = "pitaj_io_visitor_meta", qi = "chat_direkt_visitor_meta";
function oi(t) {
  return `pitaj_io_convs_${t}`;
}
function Ki(t) {
  return `chat_direkt_convs_${t}`;
}
function Wi() {
  try {
    let t = localStorage.getItem(Et) || localStorage.getItem(Oi);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Et, t)), t;
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
function Pt(t) {
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
  const [a, r] = T(t), [s, n] = T((e == null ? void 0 : e.startOpen) ?? !1), [o, u] = T((e == null ? void 0 : e.initialScreen) ?? "new-conversation"), [h, p] = T(
    () => Pt(t.companyId)
  ), [m, c] = T(() => {
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const b = Pt(t.companyId);
      return b.length > 0 ? b[0].id : null;
    }
    return null;
  }), [g, d] = T(!1), [f, k] = T(null), [N, _] = T(null), z = te(Wi()), [I, j] = T(() => {
    try {
      const b = localStorage.getItem(Vi) || localStorage.getItem(qi);
      if (b) {
        const y = JSON.parse(b), S = {};
        return typeof y.name == "string" && (S.name = y.name), typeof y.email == "string" && (S.email = y.email), typeof y.phone == "string" && (S.phone = y.phone), S;
      }
    } catch (b) {
      console.warn("[Pitaj.io] Error reading visitor meta", b);
    }
    return {};
  }), l = te(e == null ? void 0 : e.emitEvent);
  l.current = e == null ? void 0 : e.emitEvent;
  const C = te(e == null ? void 0 : e.onActionTrigger);
  C.current = e == null ? void 0 : e.onActionTrigger;
  const M = Q((b, y) => {
    const S = Number.isFinite(b) ? Math.max(1, Math.floor(b)) : 60;
    k((F) => F === null ? S : Math.max(F, S)), _(y || `Previše zahtjeva. Molimo sačekajte ${S}s.`);
  }, []), L = Q((b) => {
    if (b) {
      if (b === "WIDGET_CHAT_DISABLED") {
        r((y) => ({ ...y, chatAvailable: !1 })), _("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (b === "WIDGET_TRANSCRIBE_DISABLED") {
        r((y) => ({ ...y, transcribeAvailable: !1 })), _("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      b === "WIDGET_FORMS_DISABLED" && (r((y) => ({ ...y, formsAvailable: !1, formsEnabled: !1 })), _("Forme su trenutno privremeno nedostupne."));
    }
  }, []), V = Q((b, y = "Došlo je do greške pri obradi zahtjeva.") => {
    var F, E, A, W;
    if (b instanceof ii) {
      M(b.retryAfterSeconds, b.message), (F = l.current) == null || F.call(l, "error_occurred", { code: b.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (b instanceof ai) {
      if (b.code === "COUNTRY_BLOCKED") {
        r((R) => ({ ...R, chatAvailable: !1 })), _(b.message || "Pristup nije dozvoljen u vašoj regiji."), (E = l.current) == null || E.call(l, "error_occurred", { status: b.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      L(b.code), _(b.message || y), (A = l.current) == null || A.call(l, "error_occurred", { status: b.status, code: b.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let S = b instanceof Error ? b.message : y;
    !S || S === "Failed to fetch" || S.includes("NetworkError") ? S = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : S.includes("404") ? S = "Traženi razgovor ili podaci nisu pronađeni." : (S.includes("500") || S.includes("502") || S.includes("503")) && (S = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), _(S || y), (W = l.current) == null || W.call(l, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [M, L]);
  Y(() => {
    Qi(a.companyId, h);
  }, [h, a.companyId]), Y(() => {
    if (f === null || f <= 0) return;
    const b = setInterval(() => {
      k((y) => y && y > 1 ? y - 1 : null);
    }, 1e3);
    return () => clearInterval(b);
  }, [f]), Y(() => {
    if (!a.companyId || a.mockMode) return;
    let b = !0;
    return Ri(a.companyId, z.current, a.apiUrl).then((y) => {
      !b || !y || y.length === 0 || p((S) => {
        let F = !1;
        const E = S.map((A) => {
          const W = y.find((R) => String(R.id) === A.id);
          return W && W.ticketNumber && A.ticketNumber !== W.ticketNumber ? (F = !0, { ...A, ticketNumber: W.ticketNumber }) : A;
        });
        return F ? E : S;
      });
    }).catch(() => {
    }), () => {
      b = !1;
    };
  }, [a.companyId, a.apiUrl, a.mockMode]);
  const H = h.find((b) => b.id === m) || null, U = h.reduce((b, y) => b + (y.unread || 0), 0), P = Q((b) => {
    n((y) => {
      var S;
      return y === b ? y : ((S = l.current) == null || S.call(l, b ? "widget_opened" : "widget_closed"), b);
    });
  }, []), ie = Q((b) => {
    u((y) => {
      var S;
      return y === b ? y : ((S = l.current) == null || S.call(l, "screen_changed", { screen: b }), b);
    });
  }, []), re = Q((b) => {
    var y;
    c(b.id), p((S) => S.some((E) => E.id === b.id) ? S.map((E) => E.id === b.id ? { ...E, ...b, unread: 0, status: b.status || "active" } : E) : [{ ...b, unread: 0, status: b.status || "active" }, ...S]), u("conversation"), (y = l.current) == null || y.call(l, "conversation_selected", { conversationId: b.id });
  }, []), ce = Q(() => {
    var b;
    p(
      (y) => y.map((S) => S.id === m ? { ...S, status: "ended" } : S)
    ), c(null), u("new-conversation"), (b = l.current) == null || b.call(l, "conversation_ended", { conversationId: m });
  }, [m]), J = Q((b) => {
    p((y) => y.filter((S) => S.id !== b)), c((y) => y === b ? null : y), m === b && u("new-conversation");
  }, [m]), ee = Q((b) => {
    var A;
    if (a.chatAvailable === !1) {
      _("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (f !== null) {
      _(`Previše zahtjeva. Molimo sačekajte ${f}s.`);
      return;
    }
    const y = "conv-" + Date.now(), S = (/* @__PURE__ */ new Date()).toISOString(), F = b ? b.length > 40 ? b.slice(0, 40) + "…" : b : "Novo ćaskanje", E = {
      id: y,
      title: F,
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
    p((W) => [E, ...W]), c(y), u("conversation"), (A = l.current) == null || A.call(l, "conversation_started", { conversationId: y, initialMessage: b }), b && $(y, b, [E.messages[0]], !0);
  }, [a.apiUrl, a.chatAvailable, a.companyId, a.mockMode, f, I]), $ = async (b, y, S, F = !1) => {
    var W;
    d(!0), _(null);
    const E = "ai-msg-" + Date.now(), A = {
      id: E,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    p(
      (R) => R.map((G) => G.id !== b ? G : {
        ...G,
        preview: y,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...G.messages.filter((B) => B.id !== E), A]
      })
    ), (W = l.current) == null || W.call(l, "stream_started", { conversationId: b });
    try {
      await Fi({
        companyId: a.companyId,
        conversationId: b,
        visitorId: z.current,
        message: y,
        forceNewConversation: F || b.startsWith("conv-"),
        apiUrl: a.apiUrl,
        mockMode: a.mockMode,
        visitorName: I.name,
        visitorEmail: I.email,
        visitorPhone: I.phone,
        callbacks: {
          onConversationId: (R) => {
            const G = b, B = String(R);
            b = B, c(B), p(
              (de) => de.map((K) => K.id === G || K.messages.some((ge) => ge.id === E) ? { ...K, id: B } : K)
            );
          },
          onTicketNumber: (R) => {
            const G = R && String(R).trim() !== "" && String(R).trim() !== "undefined" && String(R).trim() !== "null" ? String(R).trim() : null;
            G && p(
              (B) => B.map((de) => de.id === b || de.messages.some((ge) => ge.id === E) ? { ...de, ticketNumber: G } : de)
            );
          },
          onActionTrigger: (R) => {
            var B;
            const G = R.widget || R.triggered_widget || (R.widget_id && a.widgets ? a.widgets.find((de) => de.id === R.widget_id) : null) || null;
            G && p(
              (de) => de.map((K) => K.id === b || K.messages.some((me) => me.id === E) ? {
                ...K,
                messages: K.messages.map(
                  (me) => me.id === E ? { ...me, widget: G } : me
                )
              } : K)
            ), (B = C.current) == null || B.call(C, R);
          },
          onChunk: (R) => {
            p(
              (G) => G.map((B) => B.id === b || B.messages.some((K) => K.id === E) ? {
                ...B,
                messages: B.messages.map(
                  (K) => K.id === E ? { ...K, content: K.content + R } : K
                )
              } : B)
            );
          },
          onSources: (R) => {
            p(
              (G) => G.map((B) => B.id === b || B.messages.some((K) => K.id === E) ? {
                ...B,
                messages: B.messages.map(
                  (K) => K.id === E ? { ...K, sources: R } : K
                )
              } : B)
            );
          },
          onSuggestedQuestions: (R) => {
            p(
              (G) => G.map((B) => B.id === b || B.messages.some((K) => K.id === E) ? {
                ...B,
                messages: B.messages.map(
                  (K) => K.id === E ? { ...K, suggestedQuestions: R } : K
                )
              } : B)
            );
          },
          onDone: () => {
            var R;
            p(
              (G) => G.map((B) => {
                var Me, Se;
                if (!(B.id === b || B.messages.some((he) => he.id === E))) return B;
                const K = B.messages.find((he) => he.id === E), ge = (Me = K == null ? void 0 : K.widget) == null ? void 0 : Me.name, me = (Se = K == null ? void 0 : K.content) == null ? void 0 : Se.trim(), Pe = me ? me.slice(0, 70) : ge ? `[${ge}]` : B.preview;
                return {
                  ...B,
                  preview: Pe,
                  messages: B.messages.map(
                    (he) => he.id === E ? { ...he, isStreaming: !1 } : he
                  )
                };
              })
            ), d(!1), (R = l.current) == null || R.call(l, "stream_completed", { conversationId: b });
          },
          onError: (R) => {
            console.error("[Pitaj.io] Stream error:", R), _(R.message || "Došlo je do greške u komunikaciji."), d(!1);
          }
        }
      });
    } catch (R) {
      d(!1), V(R, "Greška pri slanju poruke.");
    }
  }, q = Q((b) => {
    var E;
    const y = b.trim();
    if (!y || g || a.chatAvailable === !1 || f !== null) return;
    if (!m) {
      ee(y);
      return;
    }
    const F = {
      id: "usr-msg-" + Date.now(),
      content: y,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    p(
      (A) => A.map((W) => W.id !== m ? W : {
        ...W,
        preview: y,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...W.messages, F]
      })
    ), (E = l.current) == null || E.call(l, "message_sent", { conversationId: m, content: y }), $(m, y, H ? H.messages : []);
  }, [m, g, ee, H, a.chatAvailable, a.companyId, a.apiUrl, a.mockMode, f]), Z = Q(
    async (b, y, S) => {
      var F;
      if (!a.mockMode)
        try {
          await Hi(
            a.companyId,
            b,
            y,
            a.apiUrl,
            a.mockMode
          );
        } catch (E) {
          console.error("[Pitaj.io] Failed to submit rating:", E);
          const A = (E == null ? void 0 : E.status) === 404 ? "Razgovor ili tiket više nije dostupan." : E != null && E.message && !E.message.includes("failed") && !E.message.includes("404") ? E.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(A);
        }
      p(
        (E) => E.map(
          (A) => A.id === b ? { ...A, satisfaction: y, ratingScore: S ?? A.ratingScore } : A
        )
      ), (F = l.current) == null || F.call(l, "rating_submitted", {
        conversationId: b,
        satisfaction: y,
        score: S
      });
    },
    [a.companyId, a.apiUrl, a.mockMode]
  ), O = Q(
    (b, y, S = "user") => {
      const F = y.trim();
      if (!F) return;
      const E = (/* @__PURE__ */ new Date()).toISOString(), A = `conv-${Date.now()}`, W = typeof b == "string" && b.trim().length > 0 ? b : A, R = {
        id: `local-${S}-msg-${Date.now()}`,
        content: F,
        sender: S,
        timestamp: E,
        status: "sent"
      };
      p(
        (G) => G.some((B) => B.id === W) ? G.map((B) => B.id !== W ? B : {
          ...B,
          preview: F.length > 70 ? `${F.slice(0, 70)}…` : F,
          timestamp: E,
          messages: [...B.messages, R]
        }) : [
          {
            id: W,
            title: "Forma",
            preview: F.length > 70 ? `${F.slice(0, 70)}…` : F,
            timestamp: E,
            unread: 0,
            messages: [R],
            status: "active"
          },
          ...G
        ]
      ), c(W), u("conversation");
    },
    []
  ), v = (b) => {
    var y;
    return !!((y = b.messages) != null && y.some((S) => S.sender === "ai"));
  };
  return {
    config: a,
    setConfig: r,
    isOpen: s,
    setIsOpen: P,
    screen: o,
    setScreen: ie,
    conversations: h,
    activeConversation: H,
    activeConversationId: m,
    visitorContact: I,
    visitorId: z.current,
    activeConversationHasReply: H ? v(H) : !1,
    totalUnread: U,
    isStreaming: g,
    rateLimitTimer: f,
    errorBanner: N,
    setErrorBanner: _,
    selectConversation: re,
    startNewConversation: ee,
    endConversation: ce,
    deleteConversation: J,
    sendUserMessage: q,
    submitSatisfaction: Z,
    appendConversationMessage: O,
    handleApiError: V
  };
}
let Ye = null, si = null;
function Bt(t, e) {
  e === null && t !== null && Ye !== null && Ye !== t || (Ye = e ? t : null, si = e);
}
function ve() {
  return si;
}
function li(t, e) {
  let a = null;
  const r = () => a || (a = t().then((s) => {
    const n = e ? e(s) : s.default;
    if (!n)
      throw new Error("Lazy component not found");
    return n;
  }));
  return function(n) {
    const [o, u] = T(null);
    return Y(() => {
      let h = !0;
      return r().then((p) => {
        h && u(() => p);
      }).catch((p) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", p);
      }), () => {
        h = !1;
      };
    }, []), o ? /* @__PURE__ */ i(o, { ...n }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
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
function mi({ size: t = 16, className: e = "" }) {
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
function ma({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function ha({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function fa({ size: t = 14, className: e = "" }) {
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
  onClose: s,
  onNewConversation: n,
  onEndConversation: o,
  onDeleteConversation: u,
  onViewHistory: h,
  onViewTickets: p
}) {
  var I;
  const [m, c] = T(!1), g = te(null), d = t === "conversation" && e, N = d || t === "history" || t === "tickets", _ = a.title || a.name || "Pitaj.io AI Agent";
  Y(() => {
    var C;
    const j = (M) => {
      var V, H;
      const L = ((H = (V = M.composedPath) == null ? void 0 : V.call(M)) == null ? void 0 : H[0]) || M.target;
      g.current && L && !g.current.contains(L) && c(!1);
    };
    document.addEventListener("mousedown", j);
    const l = (C = g.current) == null ? void 0 : C.getRootNode();
    return l instanceof ShadowRoot && l.addEventListener("mousedown", j), () => {
      document.removeEventListener("mousedown", j), l instanceof ShadowRoot && l.removeEventListener("mousedown", j);
    };
  }, []), Y(() => {
    c(!1);
  }, [t]);
  const z = (j) => {
    c(!1), j == null || j();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      N && /* @__PURE__ */ i(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": "Nazad",
          title: "Nazad",
          children: /* @__PURE__ */ i(ea, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((I = a.content) == null ? void 0 : I.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(Ze, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: _ }),
        d && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: g, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => c((j) => !j),
            className: `pitaj-icon-btn ${m ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": m,
            title: "Meni",
            children: /* @__PURE__ */ i(ia, { size: 18 })
          }
        ),
        m && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
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
              onClick: () => z(o),
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
                /* @__PURE__ */ i(ma, { size: 15, className: "pitaj-menu-item-icon" }),
                "Obriši konverzaciju"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => z(h),
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
          onClick: s,
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
  let r = !1, s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (o.startsWith("```")) {
      r ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: s.join(`
`) }) }, `code-${n}`)
      ), s = [], r = !1) : r = !0;
      continue;
    }
    if (r) {
      s.push(o);
      continue;
    }
    if (o.trim().startsWith("- ") || o.trim().startsWith("* ")) {
      const h = o.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: Qe(h) }) }, `ul-${n}`)
      );
      continue;
    }
    const u = o.trim().match(/^(\d+)\.\s+(.*)/);
    if (u) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(u[1], 10), children: /* @__PURE__ */ i("li", { children: Qe(u[2]) }) }, `ol-${n}`)
      );
      continue;
    }
    if (!o.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${n}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: Qe(o) }, `p-${n}`));
  }
  return r && s.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: s.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function Qe(t) {
  const e = [];
  let a = 0;
  const r = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let s;
  for (; (s = r.exec(t)) !== null; ) {
    s.index > a && e.push(...Dt(t.slice(a, s.index)));
    const n = s[0];
    if (n.startsWith("`") && n.endsWith("`"))
      e.push(
        /* @__PURE__ */ i("code", { children: n.slice(1, -1) }, `c-${s.index}`)
      );
    else if (n.startsWith("**") && n.endsWith("**"))
      e.push(
        /* @__PURE__ */ i("strong", { children: n.slice(2, -2) }, `b-${s.index}`)
      );
    else if (n.startsWith("*") && n.endsWith("*"))
      e.push(
        /* @__PURE__ */ i("em", { children: n.slice(1, -1) }, `i-${s.index}`)
      );
    else if (n.startsWith("[") && n.includes("](")) {
      const o = n.slice(1, n.indexOf("](")), u = n.slice(n.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: u, target: "_blank", rel: "noopener noreferrer", children: o }, `a-${s.index}`)
      );
    }
    a = s.index + n.length;
  }
  return a < t.length && e.push(...Dt(t.slice(a))), e;
}
const La = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Ta = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, Ea = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), Pa = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
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
  for (; (a = Ea.exec(t)) !== null; ) {
    const n = a[0];
    Pa.test(n) || e.push({
      start: a.index,
      end: a.index + n.length,
      href: `tel:${n.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((n, o) => n.start - o.start);
  const r = [];
  let s = 0;
  for (const n of e)
    n.start < s || (n.start > s && r.push(t.slice(s, n.start)), r.push(
      /* @__PURE__ */ i(
        "a",
        {
          href: n.href,
          ...n.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: t.slice(n.start, n.end)
        },
        `l-${n.start}`
      )
    ), s = n.end);
  return s < t.length && r.push(t.slice(s)), r;
}
function it(t) {
  return (t || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function Ba(t) {
  const e = it(t).toLowerCase();
  return e.includes("wi-fi") || e.includes("wifi") || e.includes("internet") ? ha : e.includes("doručak") || e.includes("dorucak") || e.includes("kafa") || e.includes("coffee") ? fa : e.includes("restoran") || e.includes("hrana") || e.includes("dining") ? ga : e.includes("parking") || e.includes("garaža") || e.includes("garaza") || e.includes("auto") ? ba : e.includes("spa") || e.includes("bazen") || e.includes("wellness") ? xa : e.includes("klima") || e.includes("hlađenje") || e.includes("hladjenje") ? ja : e.includes("teretana") || e.includes("fitness") || e.includes("gym") ? va : wa;
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
  return /* @__PURE__ */ i(ue, { children: t.map((r, s) => {
    const n = e[r.key] ?? (r.type === "checkbox" ? !1 : ""), o = r.key || `field_${s}`;
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
            onInput: (p) => a(o, p.target.value)
          }
        )
      ] }, o);
    if (r.type === "checkbox")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ i(
          "input",
          {
            id: `widget-chk-${o}-${s}`,
            type: "checkbox",
            required: r.required,
            checked: !!n,
            onChange: (p) => a(o, p.target.checked)
          }
        ),
        /* @__PURE__ */ i("label", { htmlFor: `widget-chk-${o}-${s}`, children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, o);
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
            onChange: (p) => a(o, p.target.value),
            children: [
              /* @__PURE__ */ i("option", { value: "", children: r.placeholder || "Odaberite..." }),
              (r.options || []).map((p, m) => /* @__PURE__ */ i("option", { value: p, children: p }, m))
            ]
          }
        )
      ] }, o);
    const u = r.type === "phone" ? "tel" : r.type === "email" ? "email" : r.type === "date" ? "date" : r.type === "number" ? "number" : "text";
    let h;
    if (r.type === "date") {
      const p = o.toLowerCase();
      if (p.includes("out") || p.includes("odjav") || p.includes("end") || p.includes("do")) {
        const m = e.check_in || e.start || e.od;
        m && typeof m == "string" && (h = m);
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
          min: h,
          value: n,
          onInput: (p) => a(o, p.target.value)
        }
      )
    ] }, o);
  }) });
}
function Ua({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [s, n] = T({}), [o, u] = T(!1), h = t.title || "Razgovarajte sa prodajom", p = t.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.", m = (g, d) => {
    n((f) => ({ ...f, [g]: d }));
  }, c = (g) => {
    g.preventDefault();
    for (const f of r)
      if (f.required) {
        const k = s[f.key];
        if (f.type === "checkbox" && !k || f.type !== "checkbox" && (!k || !String(k).trim())) return;
      }
    u(!0);
    const d = r.filter((f) => s[f.key] !== void 0 && s[f.key] !== "").map((f) => `- ${f.label}: ${f.type === "checkbox" ? "Da" : s[f.key]}`);
    e == null || e(`Forma: ${h}
${d.join(`
`)}`);
  };
  if (o) {
    const g = s.email ? ` na ${s.email}` : "";
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
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: h }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: p })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: c, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(pt, { fields: r, values: s, onChange: m }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function Fa({ config: t, onAction: e }) {
  const [a, r] = T(0), s = [
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
  ], n = Array.isArray(t.products) && t.products.length > 0 ? t.products : s, o = n[a] || n[0], u = () => {
    r((m) => (m + 1) % n.length);
  }, h = () => {
    r((m) => (m - 1 + n.length) % n.length);
  }, p = () => {
    e == null || e(`Zanima me proizvod: ${o.name} (${o.price})`);
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
        /* @__PURE__ */ i("img", { src: o.image, alt: o.name, className: "pitaj-product-img" }),
        n.length > 1 && /* @__PURE__ */ i("div", { className: "pitaj-carousel-controls", children: [
          /* @__PURE__ */ i("button", { type: "button", onClick: h, "aria-label": "Prethodni", className: "pitaj-carousel-btn", children: "‹" }),
          /* @__PURE__ */ i("button", { type: "button", onClick: u, "aria-label": "Sljedeći", className: "pitaj-carousel-btn", children: "›" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-product-info", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-product-name", children: o.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-sub", children: o.subtitle }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-price", children: o.price }),
        /* @__PURE__ */ i("button", { type: "button", onClick: p, className: "pitaj-widget-btn-primary pitaj-btn-select", children: "Odaberi opcije" })
      ] })
    ] })
  ] });
}
function Ra({ config: t, onAction: e }) {
  const [a, r] = T(!1), s = [
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
  ], n = Array.isArray(t.items) && t.items.length > 0 ? t.items : s, o = t.total || "40.90 KM", u = () => {
    r(!0), e == null || e(`Želim dovršiti narudžbu iz korpe (Ukupno: ${o})`);
  };
  return a ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Narudžba je potvrđena!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Iznos od ",
      o,
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
    /* @__PURE__ */ i("div", { className: "pitaj-cart-items-list", children: n.map((h) => /* @__PURE__ */ i("div", { className: "pitaj-cart-item-row", children: [
      /* @__PURE__ */ i("img", { src: h.image, alt: h.name, className: "pitaj-cart-thumb" }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-details", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-name", children: h.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-sub", children: h.subtitle })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-item-price", children: h.price })
    ] }, h.id)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-divider" }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-val", children: o })
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
  ], s = Array.isArray(t.chart_data) && t.chart_data.length > 0 ? t.chart_data : r;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(_a, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-chart-label", children: e }),
      /* @__PURE__ */ i("div", { className: "pitaj-chart-big-number", children: a }),
      /* @__PURE__ */ i("div", { className: "pitaj-bar-chart-container", children: s.map((n, o) => /* @__PURE__ */ i("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ i(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, n.val))}%` },
            title: `${n.day}: ${n.val}%`
          }
        ) }),
        /* @__PURE__ */ i("span", { className: "pitaj-bar-day", children: n.day })
      ] }, o)) })
    ] })
  ] });
}
function Oa({ config: t, onAction: e }) {
  const [a, r] = T([]), s = [
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
  ], n = Array.isArray(t.classes) && t.classes.length > 0 ? t.classes : s, o = (u, h) => {
    const p = u.id ?? h;
    a.includes(p) || (r((m) => [...m, p]), e == null || e(`Želim rezervisati termin za: ${u.title} (${u.time})`));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ua, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-classes-list", children: n.map((u, h) => {
      const p = u.id ?? h, m = a.includes(p);
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
            onClick: () => o(u, h),
            className: `pitaj-book-btn ${m ? "is-booked" : ""}`,
            children: m ? "Rezervisano" : "Rezerviši"
          }
        )
      ] }, p);
    }) })
  ] });
}
function Va({ config: t, onAction: e }) {
  const [a, r] = T({}), [s, n] = T(!1), o = t.name || "Hotel Dark Moon", u = t.price || "220 KM / noć", h = t.location || "Sarajevo, Bosna i Hercegovina", p = t.rating || "4.8 (124 recenzije)", m = t.image || "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80", c = ["Wi-Fi", "Doručak", "Restoran", "Parking", "Spa & Bazen"], d = (Array.isArray(t.amenities) && t.amenities.length > 0 ? t.amenities : c).map(it), f = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], k = Array.isArray(t.fields) ? t.fields : f, N = (z, I) => {
    r((j) => ({ ...j, [z]: I }));
  }, _ = (z) => {
    if (z.preventDefault(), k.length > 0) {
      for (const j of k)
        if (j.required) {
          const l = a[j.key];
          if (j.type === "checkbox" && !l || j.type !== "checkbox" && (!l || !String(l).trim())) return;
        }
    }
    n(!0);
    const I = { ...a };
    if (I.check_in && I.check_out && I.check_out < I.check_in) {
      const j = I.check_in;
      I.check_in = I.check_out, I.check_out = j;
    }
    if (k.length > 0) {
      const j = k.filter((l) => I[l.key] !== void 0 && I[l.key] !== "").map((l) => `- ${l.label}: ${l.type === "checkbox" ? "Da" : I[l.key]}`);
      e == null || e(`Forma: Rezervacija smještaja - ${o}
${j.join(`
`)}`);
    } else
      e == null || e(`Forma: Rezervacija smještaja - ${o}
- Cijena: ${u}
- Lokacija: ${h}`);
  };
  return s ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za rezervaciju je poslan!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Uspješno ste poslali upit za ",
      o,
      ". Naše osoblje će vam se javiti za potvrdu termina."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-image-wrap", children: [
      /* @__PURE__ */ i("img", { src: m, alt: o, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-badge-price", children: u })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ i("div", { className: "pitaj-hotel-name", children: o }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ i(Ma, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ i("span", { children: h })
        ] }),
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ i(Sa, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ i("span", { children: p })
        ] })
      ] }),
      d.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-amenities-row", children: d.map((z, I) => {
        const j = it(z), l = Ba(j);
        return /* @__PURE__ */ i("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ i(l, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ i("span", { children: j })
        ] }, I);
      }) }),
      /* @__PURE__ */ i("form", { onSubmit: _, className: "pitaj-widget-form", children: [
        k.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ i(pt, { fields: k, values: a, onChange: N })
        ] }),
        /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || (k.length > 0 ? "Pošalji upit za rezervaciju" : "Rezerviši sobu") })
      ] })
    ] })
  ] });
}
function qa({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [s, n] = T({}), [o, u] = T(!1), h = t.title || "Kontaktirajte nas", p = t.subtitle || "Rado ćemo odgovoriti na vaša pitanja", m = (g, d) => {
    n((f) => ({ ...f, [g]: d }));
  }, c = (g) => {
    g.preventDefault();
    for (const f of r)
      if (f.required) {
        const k = s[f.key];
        if (f.type === "checkbox" && !k || f.type !== "checkbox" && (!k || !String(k).trim())) return;
      }
    u(!0);
    const d = r.filter((f) => s[f.key] !== void 0 && s[f.key] !== "").map((f) => `- ${f.label}: ${f.type === "checkbox" ? "Da" : s[f.key]}`);
    e == null || e(`Forma: ${h}
${d.join(`
`)}`);
  };
  return o ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Poruka je poslana!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: "Hvala vam na javljanju. Odgovorit ćemo vam uskoro." })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: h }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: p })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: c, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(pt, { fields: r, values: s, onChange: m }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function Ka({ config: t }) {
  const e = t.city || "Sarajevo", a = t.temp || "22°C", r = t.condition || "Sunčano i toplo", s = t.description || "Pretežno sunčano vrijeme uz blagi povjetarac tokom popodneva.";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ i(Na, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ i("span", { className: "pitaj-weather-temp", children: a })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-city", children: e }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-cond", children: r }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-desc", children: s })
  ] });
}
function Wa({ config: t, title: e }) {
  const [a, r] = T(!0), s = t.url || "https://calendly.com", n = t.height || 380;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i($a, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || e }),
      /* @__PURE__ */ i(
        "a",
        {
          href: s,
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
          src: s,
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
    const o = (u = n.target) == null ? void 0 : u.closest("[data-chat-action]");
    if (o) {
      const h = o.getAttribute("data-chat-action");
      h && (n.preventDefault(), e == null || e(h));
    }
  }, children: [
    r && /* @__PURE__ */ i("style", { children: r }),
    /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: a } })
  ] });
}
function Ga({ config: t, onAction: e }) {
  const a = t.jsx_template || "", r = t.default_data || t.data || {}, s = we(() => {
    if (!a) return "";
    try {
      let u = a;
      const h = /\{(\w+)\.map\(\((\w+)\)\s*=>\s*\(([\s\S]*?)\)\)\}/g;
      u = u.replace(h, (m, c, g, d) => {
        const f = r[c];
        return Array.isArray(f) ? f.map((k) => {
          let N = d;
          return Object.keys(k).forEach((_) => {
            const z = k[_], I = new RegExp(
              `${g}\\.${_}\\s*\\?\\s*["']([^"']*)["']\\s*:\\s*["']([^"']*)["']`,
              "g"
            );
            N = N.replace(I, z ? "$1" : "$2");
            const j = new RegExp(`\\{?${g}\\.${_}\\}?`, "g");
            N = N.replace(j, String(z ?? ""));
          }), N;
        }).join("") : "";
      }), Object.keys(r).forEach((m) => {
        const c = r[m];
        if (typeof c == "string" || typeof c == "number") {
          const g = new RegExp(`\\{${m}\\}`, "g");
          u = u.replace(g, String(c));
        }
      });
      const p = (m, c) => {
        const g = m.match(new RegExp(`${c}=(?:["']([^"']*)["']|\\{([^}]+)\\})`, "i"));
        return (g ? g[1] ?? g[2] ?? "" : "").trim();
      };
      return u = u.replace(
        /<Card([^>]*)status=\{\{\s*text:\s*([^,\}]+),\s*icon:\s*["']([^"']+)["']\s*\}\}([^>]*)>/gi,
        (m, c, g, d, f) => {
          const k = p(m, "background"), N = k ? `background: ${k};` : "", _ = (g || "").replace(/^["']|["']$/g, "").trim(), z = _ && _.toLowerCase() !== "prompt" && _ !== "{prompt}";
          let I = "";
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
            I = `<div style="font-size: 11px; color: #64748b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">${l ? `<span>${l}</span>` : ""} ${_}</div>`;
          }
          return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${N}">${I}`;
        }
      ).replace(/<Card([^>]*)>/gi, (m) => {
        const c = p(m, "background");
        return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${c ? `background: ${c};` : ""}">`;
      }).replace(/<\/Card>/gi, "</div>").replace(
        /<Row[^>]*justify=["']between["'][^>]*align=["']start["'][^>]*>/gi,
        '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">'
      ).replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*align=["']start["'][^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: flex-start;">').replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: center;">').replace(/<Row[^>]*>/gi, '<div style="display: flex; gap: 8px; align-items: center;">').replace(/<\/Row>/gi, "</div>").replace(/<Col[^>]*flex=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; flex: $1;">').replace(/<Col[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: $1px;">').replace(/<Col[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: 4px;">').replace(/<\/Col>/gi, "</div>").replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*weight=["']bold["'][^>]*\/>/gi, '<h4 style="font-size: 15px; font-weight: 700; margin: 0; line-height: 1.2;">$1</h4>').replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<h4 style="font-size: 14px; font-weight: 600; margin: 0;">$1</h4>').replace(/<Caption[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="font-size: 11px; color: #64748b; margin-top: 2px;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["']success["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dcfce7; color: #166534;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:warning|amber)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fef3c7; color: #92400e;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:error|danger|destructive|red)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fee2e2; color: #991b1b;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:purple|brand)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f3e8ff; color: #6b21a8;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:info|blue)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dbeafe; color: #1e40af;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f1f5f9; color: #475569;">$1</span>').replace(/<Divider[^>]*flush[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px -14px;" />').replace(/<Divider[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px 0;" />').replace(/<Image([^>]*)\/>/gi, (m) => {
        const c = p(m, "src"), g = p(m, "alt"), d = p(m, "height") || "120px", f = p(m, "radius") === "sm" ? "6px" : "10px";
        return `<img src="${c}" alt="${g}" style="width: 100%; height: ${d === "100%" ? "120px" : d}; object-fit: cover; border-radius: ${f}; margin: 4px 0;" />`;
      }).replace(/<Avatar([^>]*)\/>/gi, (m) => {
        const c = p(m, "src"), g = p(m, "name"), d = p(m, "size") === "lg" ? "40px" : "32px";
        if (c)
          return `<img src="${c}" alt="${g}" style="width: ${d}; height: ${d}; border-radius: var(--pitaj-radius-avatar, 9999px); object-fit: cover; flex-shrink: 0;" />`;
        const f = g ? g.charAt(0).toUpperCase() : "U";
        return `<div style="width: ${d}; height: ${d}; border-radius: var(--pitaj-radius-avatar, 9999px); background: #e2e8f0; color: #334155; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0;">${f}</div>`;
      }).replace(/<Input([^>]*)\/>/gi, (m) => {
        const c = p(m, "label"), g = p(m, "placeholder"), d = p(m, "value"), f = p(m, "type") || "text";
        return f === "textarea" ? `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${c}</label><textarea placeholder="${g}" rows="2" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box; resize: vertical;">${d}</textarea></div>` : `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${c}</label><input type="${f}" placeholder="${g}" value="${d}" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box;" /></div>`;
      }).replace(/<BarChart[^>]*\/>/gi, () => {
        const m = Array.isArray(r.bars) ? r.bars : [];
        if (m.length > 0) {
          const c = Math.max(...m.map((d) => Number(d.value || 0)), 1);
          return `<div style="display: flex; gap: 6px; width: 100%; padding: 8px 0; align-items: flex-end;">${m.map(
            (d) => `<div style="display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1;"><div style="width: 100%; background: #e2e8f0; height: 70px; border-radius: 4px; display: flex; align-items: flex-end; overflow: hidden;"><div style="width: 100%; height: ${Math.round(
              Number(d.value || 0) / c * 100
            )}%; background: var(--pitaj-accent, #2563eb); border-radius: 4px 4px 0 0;"></div></div><span style="font-size: 10px; color: #64748b;">${d.label || ""}</span></div>`
          ).join("")}</div>`;
        }
        return '<div style="padding: 12px; text-align: center; color: #94a3b8; font-size: 11px;">Grafikon</div>';
      }).replace(/<Timeline[^>]*\/>/gi, () => {
        const m = Array.isArray(r.timeline) ? r.timeline : Array.isArray(r.items) ? r.items : [];
        return !m || m.length === 0 ? "" : '<div style="display: flex; flex-direction: column; width: 100%; padding: 4px 0;">' + m.map((c, g) => {
          const d = g === m.length - 1, f = !!(c.complete || c.completed), k = !!c.current;
          return `<div style="display: flex; align-items: flex-start; gap: 10px; position: relative;"><div style="display: flex; flex-direction: column; align-items: center; align-self: stretch;"><div style="width: 22px; height: 22px; border-radius: 9999px; background: ${f ? "#dcfce7" : k ? "#e0f2fe" : "#f1f5f9"}; color: ${f ? "#166534" : k ? "#0369a1" : "#94a3b8"}; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; flex-shrink: 0;">${f ? "✓" : k ? "●" : "○"}</div>${d ? "" : `<div style="width: 2px; flex: 1; background: ${f ? "#86efac" : "#e2e8f0"}; margin: 2px 0; min-height: 18px;"></div>`}</div><div style="display: flex; flex-direction: column; flex: 1; min-width: 0; padding-bottom: ${d ? "2px" : "12px"};"><span style="font-size: 12px; font-weight: ${k ? "600" : "500"}; color: #0f172a;">${c.label || ""}</span>${c.detail ? `<span style="font-size: 11px; color: #64748b; margin-top: 2px;">${c.detail}</span>` : ""}</div></div>`;
        }).join("") + "</div>";
      }).replace(
        /<Box[^>]*background=["']green-100["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #dcfce7; color: #166534; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(
        /<Box[^>]*background=["']surface-secondary["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #f1f5f9; color: #94a3b8; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(/<Box([^>]*)>/gi, (m) => {
        const c = p(m, "background"), g = p(m, "radius"), d = p(m, "padding"), f = [];
        return c === "surface-secondary" || c === "muted" ? f.push("background: #f1f5f9") : c && f.push(`background: ${c}`), g === "full" ? f.push("border-radius: 9999px") : g && f.push(`border-radius: ${g === "md" ? "8px" : "4px"}`), d && f.push(`padding: ${d}px`), `<div style="${f.join("; ")}; display: flex; align-items: center; justify-content: center;">`;
      }).replace(/<\/Box>/gi, "</div>").replace(/<Icon[^>]*name=["'](?:check|check-circle)["'][^>]*\/>/gi, "✓").replace(/<Icon[^>]*name=["'](?:clock|time)["'][^>]*\/>/gi, "⏱").replace(/<Icon[^>]*name=["'](?:package|box)["'][^>]*\/>/gi, "📦").replace(/<Icon[^>]*name=["']star["'][^>]*\/>/gi, "⭐").replace(/<Icon[^>]*name=["'](?:map-pin|location)["'][^>]*\/>/gi, "📍").replace(/<Icon[^>]*name=["']calendar["'][^>]*\/>/gi, "📅").replace(/<Icon[^>]*name=["'](?:shopping-bag|shopping-cart|cart)["'][^>]*\/>/gi, "🛍️").replace(/<Icon[^>]*name=["']user["'][^>]*\/>/gi, "👤").replace(/<Icon[^>]*name=["']mail["'][^>]*\/>/gi, "✉️").replace(/<Icon[^>]*name=["']phone["'][^>]*\/>/gi, "📞").replace(/<Icon[^>]*name=["'](?:truck|delivery)["'][^>]*\/>/gi, "🚚").replace(/<Icon[^>]*name=["']credit-card["'][^>]*\/>/gi, "💳").replace(/<Icon[^>]*name=["']sun["'][^>]*\/>/gi, "☀️").replace(/<Icon[^>]*name=["']bell["'][^>]*\/>/gi, "🔔").replace(/<Icon[^>]*name=["'](?:bed|hotel)["'][^>]*\/>/gi, "🏨").replace(/<Icon[^>]*name=["'](?:utensils|dining)["'][^>]*\/>/gi, "🍽️").replace(/<Icon[^>]*name=["']coffee["'][^>]*\/>/gi, "☕").replace(/<Icon[^>]*name=["']wifi["'][^>]*\/>/gi, "📶").replace(/<Icon[^>]*name=["']sparkles["'][^>]*\/>/gi, "✨").replace(/<Icon[^>]*\/>/gi, "•").replace(/<Text[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<p style="font-size: 12px; margin: 0; line-height: 1.3;">$1</p>').replace(/<Button([^>]*)\/>/gi, (m) => {
        const c = p(m, "label") || "Akcija", g = p(m, "action") || c, d = p(m, "variant");
        let f = "background: var(--pitaj-accent, #2563eb); color: white; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;";
        return d === "outline" ? f = "background: transparent; color: #0f172a; border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;" : d === "secondary" && (f = "background: #f1f5f9; color: #0f172a; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;"), `<button type="button" data-chat-action="${g}" style="${f}">${c}</button>`;
      }), u;
    } catch {
      return "";
    }
  }, [a, r]), n = (u) => {
    var p;
    const h = (p = u.target) == null ? void 0 : p.closest("[data-chat-action]");
    if (h) {
      const m = h.getAttribute("data-chat-action");
      m && (u.preventDefault(), e == null || e(m));
    }
  }, o = /<Card/i.test(a || "");
  return /* @__PURE__ */ i("div", { className: `dynamic-jsx-widget ${o ? "" : "pitaj-inline-widget-card"}`, onClick: n, children: /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: s } }) });
}
function hi({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: r,
  containerClassName: s,
  revealDelayMs: n = 0,
  staggerMs: o = 140
}) {
  const u = we(() => Array.isArray(t) && t.length > 0 ? t.map((d) => ({
    text: d.text.trim(),
    children: (d.children ?? []).map((f) => f.trim()).filter(Boolean)
  })).filter((d) => d.text !== "") : (e ?? []).map((d) => d.trim()).filter(Boolean).map((d) => ({ text: d, children: [] })), [e, t]), [h, p] = T(null), [m, c] = T(u.length);
  if (Y(() => {
    p(null);
  }, [u]), Y(() => {
    if (h) {
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
      const f = window.setInterval(() => {
        c((k) => k >= u.length ? (window.clearInterval(f), k) : k + 1);
      }, Math.max(60, o));
    }, n);
    return () => {
      window.clearTimeout(d);
    };
  }, [h, u.length, n, o]), u.length === 0)
    return null;
  const g = u.find((d) => d.text === h && d.children.length > 0) ?? null;
  return g ? /* @__PURE__ */ i("div", { className: s, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => p(null),
        className: r,
        children: "Nazad"
      }
    ),
    g.children.map((d, f) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(d),
        className: r,
        children: d
      },
      `${g.text}-${f}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: s, children: u.slice(0, m).map((d, f) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => d.children.length > 0 ? p(d.text) : a(d.text),
      className: `${r} pitaj-suggestion-enter`,
      children: d.text
    },
    `${d.text}-${f}`
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
async function fi(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (a) => {
      const r = a.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(a.name);
      let s = null;
      if (r && typeof URL < "u")
        try {
          s = URL.createObjectURL(a);
        } catch {
          s = null;
        }
      const n = Ja(a) ? (await a.text()).slice(0, 4e3) : null;
      return {
        id: `${a.name}-${a.lastModified}-${a.size}`,
        name: a.name,
        textContent: n,
        previewUrl: s,
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
  const { widgetId: e, audio: a, apiUrl: r } = t, s = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = new FormData();
  n.append("audio", a, "dictation.webm");
  const o = await fetch(`${s}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: n,
    headers: {
      Accept: "application/json"
    }
  });
  if (!o.ok) {
    const p = await o.json().catch(() => null), c = (() => {
      if (o.status !== 422 || !(p != null && p.errors) || typeof p.errors != "object")
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
      o.status,
      p,
      typeof c == "string" && c || `Transkripcija nije uspjela (${o.status})`,
      o.headers.get("Retry-After")
    );
  }
  const u = await o.json(), h = typeof (u == null ? void 0 : u.text) == "string" ? u.text.trim() : "";
  if (!h)
    throw new Error("Transkripcija nije vratila tekst.");
  return h;
}
function bi({ widgetId: t, apiUrl: e, onTranscript: a, onError: r }) {
  const n = te(null), o = te(null), u = te([]), h = te(!0), p = te(null), m = te(null), c = te(null), g = te(null), d = te(Array.from({ length: 42 }, () => 0.06)), [f, k] = T(!1), [N, _] = T(!1), [z, I] = T(
    () => Array.from({ length: 42 }, () => 0.06)
  ), j = we(() => {
    var P;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((P = navigator.mediaDevices) != null && P.getUserMedia);
  }, [t]), l = Q(() => {
    o.current && (o.current.getTracks().forEach((P) => P.stop()), o.current = null);
  }, []), C = Q(() => {
    var P;
    p.current !== null && (window.cancelAnimationFrame(p.current), p.current = null), (P = g.current) == null || P.disconnect(), g.current = null, c.current = null, m.current && (m.current.close(), m.current = null);
  }, []), M = Q(() => {
    const P = Array.from({ length: 42 }, () => 0.06);
    d.current = P, I(P);
  }, []), L = Q((P) => {
    const ie = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!ie)
      return;
    const re = new ie(), ce = re.createAnalyser();
    ce.fftSize = 2048, ce.smoothingTimeConstant = 0.78;
    const J = re.createMediaStreamSource(P);
    J.connect(ce), m.current = re, c.current = ce, g.current = J;
    const ee = new Uint8Array(ce.fftSize), $ = () => {
      const q = c.current;
      if (!q) return;
      q.getByteTimeDomainData(ee);
      let Z = 0;
      for (let y = 0; y < ee.length; y += 1) {
        const S = (ee[y] - 128) / 128;
        Z += S * S;
      }
      const O = Math.sqrt(Z / ee.length), v = Math.max(0.04, Math.min(1, O * 5.2)), b = d.current.slice(1);
      b.push(v), d.current = b, I(b), p.current = window.requestAnimationFrame($);
    };
    p.current = window.requestAnimationFrame($);
  }, []), V = Q(async () => {
    if (!(!j || N || n.current || f))
      try {
        const ie = await navigator.mediaDevices.getUserMedia({ audio: !0 }), re = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], J = typeof MediaRecorder.isTypeSupported == "function" ? re.find(($) => MediaRecorder.isTypeSupported($)) : void 0, ee = J ? new MediaRecorder(ie, { mimeType: J }) : new MediaRecorder(ie);
        u.current = [], h.current = !0, o.current = ie, n.current = ee, M(), L(ie), ee.ondataavailable = ($) => {
          $.data.size > 0 && u.current.push($.data);
        }, ee.onstop = async () => {
          k(!1);
          const $ = new Blob(u.current, { type: ee.mimeType || "audio/webm" });
          if (u.current = [], n.current = null, l(), C(), $.size === 0) {
            M();
            return;
          }
          if (!h.current) {
            M();
            return;
          }
          _(!0);
          try {
            const q = await Xa({
              widgetId: t,
              apiUrl: e,
              audio: $
            });
            a(q);
          } catch (q) {
            console.error("[Pitaj.io] Dictation transcription failed", q), r == null || r(q);
          } finally {
            _(!1), M();
          }
        }, ee.onerror = () => {
          k(!1), n.current = null, l(), C(), M();
        }, ee.start(), k(!0);
      } catch (ie) {
        k(!1), l(), C(), M(), console.error("[Pitaj.io] Dictation microphone access failed", ie);
      }
  }, [e, f, N, j, r, a, M, L, l, C, t]), H = Q(() => {
    const P = n.current;
    !P || !f || N || (h.current = !0, P.stop(), k(!1));
  }, [f, N]), U = Q(() => {
    const P = n.current;
    !P || !f || (h.current = !1, P.stop(), k(!1));
  }, [f]);
  return Y(() => () => {
    const P = n.current;
    P && P.state !== "inactive" && P.stop(), l(), C();
  }, [l, C]), {
    isSupported: j,
    isListening: f,
    isProcessing: N,
    waveformLevels: z,
    start: V,
    stopAndTranscribe: H,
    cancel: U
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
  onDismiss: s,
  compact: n = !1
}) {
  const [o, u] = T(t), [h, p] = T(!1), [m, c] = T(!1), [g, d] = T(null), [f, k] = T(!1), N = Ue.find((j) => j.score === o) || Ue[Ue.length - 1], _ = Q((j) => {
    u(j), d(null), k(!0), setTimeout(() => k(!1), 300);
  }, []), z = Q(async (j) => {
    if (j && (j.stopPropagation(), j.preventDefault()), !(h || m)) {
      p(!0), d(null);
      try {
        await r(N.satisfaction, o), c(!0);
      } catch (l) {
        p(!1), d(
          (l == null ? void 0 : l.message) || "Nismo uspjeli sačuvati ocjenu. Molimo pokušajte ponovo."
        );
      }
    }
  }, [N, o, r, h, m]), I = (o - 1) / 4 * 100;
  return m ? /* @__PURE__ */ i("div", { className: `pitaj-satisfaction-success ${n ? "is-compact" : ""}`, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "pitaj-satisfaction-success-icon",
        style: { backgroundColor: `${N.color}20`, color: N.color },
        children: /* @__PURE__ */ i(je, { size: 20 })
      }
    ),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-title", children: "Hvala na ocjeni!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-desc", children: [
      "Zabilježeno: ",
      N.emoji,
      " ",
      N.label,
      " (",
      o,
      "/5)"
    ] })
  ] }) : /* @__PURE__ */ i(
    "div",
    {
      className: `pitaj-satisfaction-card ${n ? "is-compact" : ""}`,
      onClick: (j) => j.stopPropagation(),
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
              backgroundColor: `${N.color}15`,
              color: N.color,
              borderColor: `${N.color}35`
            },
            children: [
              /* @__PURE__ */ i("span", { className: `pitaj-mood-pill-emoji ${f ? "is-bouncing" : ""}`, "aria-hidden": "true", children: N.emoji }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-label", children: N.label }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-score", children: [
                o,
                " / 5"
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "pitaj-mood-row", role: "radiogroup", "aria-label": "Ocjena zadovoljstva", children: Ue.map((j) => {
          const l = o === j.score;
          return /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": l,
              "aria-label": `${j.score} od 5 - ${j.label}`,
              className: `pitaj-mood-btn ${l ? "is-active" : ""}`,
              style: l ? {
                backgroundColor: `${j.color}18`,
                borderColor: j.color,
                boxShadow: `0 4px 14px ${j.color}30`,
                color: j.color
              } : void 0,
              onClick: () => _(j.score),
              children: [
                /* @__PURE__ */ i("span", { className: "pitaj-mood-btn-emoji", children: j.emoji }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: "pitaj-mood-btn-num",
                    style: l ? { color: j.color, fontWeight: 700 } : void 0,
                    children: j.score
                  }
                )
              ]
            },
            `mood-${j.score}`
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
              value: o,
              onInput: (j) => _(Number(j.target.value)),
              className: "pitaj-range-slider",
              "aria-label": `Klizač ocjene: ${o} od 5 (${N.label})`,
              style: {
                color: N.color,
                background: `linear-gradient(to right, ${N.color} 0%, ${N.color} ${I}%, var(--pitaj-border) ${I}%, var(--pitaj-border) 100%)`
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
              backgroundColor: N.color,
              boxShadow: `0 4px 14px ${N.color}40`
            },
            disabled: h,
            onClick: z,
            children: h ? "Slanje..." : "Pošalji ocjenu"
          }
        ),
        s && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-satisfaction-dismiss",
            onClick: (j) => {
              j.stopPropagation(), s();
            },
            children: "Možda kasnije"
          }
        ),
        g && /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-error", role: "alert", children: /* @__PURE__ */ i("span", { children: g }) })
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
  return Y(() => {
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
  const s = e.slice(1).map((n) => {
    if (!n.startsWith("- ") && !n.startsWith("* ")) return null;
    const o = n.slice(2), u = o.indexOf(":");
    if (u < 1) return null;
    const h = o.slice(0, u).trim(), p = o.slice(u + 1).trim();
    return !h || !p ? null : { label: h, value: p };
  }).filter((n) => !!n);
  return s.length < 1 ? null : { title: a, entries: s };
}
function ar({
  conversation: t,
  config: e,
  isStreaming: a,
  rateLimitCountdown: r,
  errorBanner: s,
  onSendMessage: n,
  onApiError: o,
  onSubmitSatisfaction: u,
  isRatingPromptActive: h
}) {
  var q, Z, O;
  const [p, m] = T(""), [c, g] = T(!1), [d, f] = T(null), [k, N] = T([]), _ = te(null), z = te(null), I = te(null), j = e.content || {}, l = e.chatAvailable === !1, C = e.transcribeAvailable === !1, M = a || r !== null || l, L = bi({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: Q((v) => {
      m((b) => b ? `${b} ${v}` : v);
    }, []),
    onError: Q((v) => {
      o == null || o(v, "Greška pri transkripciji.");
    }, [o])
  });
  Y(() => {
    const v = _.current;
    v && (v.scrollTop = v.scrollHeight);
  }, [t.messages, a]), Y(() => {
    const v = z.current;
    v && (v.style.height = "auto", v.style.height = `${Math.min(v.scrollHeight, 96)}px`);
  }, [p]), Y(() => {
    g(!1);
  }, [j.dismissibleNotice]);
  const V = (v) => {
    N((b) => {
      const y = b.find((S) => S.id === v);
      if (y != null && y.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(y.previewUrl);
        } catch {
        }
      return b.filter((S) => S.id !== v);
    });
  }, H = (v) => {
    const b = (v ?? p).trim();
    if (!b && k.length === 0 || M) return;
    const y = `${b}${gi(k)}`.trim();
    n(y), k.forEach((S) => {
      if (S.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(S.previewUrl);
        } catch {
        }
    }), N([]), v || (m(""), z.current && (z.current.style.height = "auto"));
  }, U = (v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), H());
  }, P = j.messagePlaceholder || e.placeholder || "Pitajte bilo šta...", ie = ((q = j.dismissibleNotice) == null ? void 0 : q.trim()) || "", re = ((Z = j.footerText) == null ? void 0 : Z.trim()) || "", ce = j.showSuggestedMessages === !1 || j.keepShowingSuggestedMessages !== !0 ? [] : j.suggestedMessageRows || [], J = ((O = [...t.messages].reverse().find((v) => v.sender === "ai")) == null ? void 0 : O.id) ?? null, ee = L.isListening, $ = async (v, b) => {
    navigator.clipboard && (await navigator.clipboard.writeText(b), f(v), window.setTimeout(() => {
      f((y) => y === v ? null : y);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: _, className: "pitaj-messages-container", children: [
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
        const b = v.sender === "user", y = b ? ir(v.content) : null, S = !b && v.isStreaming && !v.content && !v.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${b ? "user" : "ai"}${v.widget ? " has-widget" : ""}${S ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              b ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${y ? "is-form-submission" : ""}`, children: y ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: y.title.toLowerCase().startsWith("forma") ? y.title : `Forma: ${y.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: y.entries.map((F) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: F.label }),
                  /* @__PURE__ */ i("dd", { children: F.value })
                ] }, `${v.id}-${F.label}`)) })
              ] }) : v.content }) : /* @__PURE__ */ i(ue, { children: [
                v.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(Aa, { content: v.content }),
                  v.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                v.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Da, { widget: v.widget, onAction: (F) => H(F) }) }),
                v.isStreaming && !v.content && !v.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ut, {}) })
              ] }),
              !b && v.sources && v.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: "Izvori i dokumentacija:" }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: v.sources.map((F) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: F.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: F.title }),
                      /* @__PURE__ */ i(sa, { size: 10 })
                    ]
                  },
                  F.id
                )) })
              ] }),
              !b && v.suggestedQuestions && v.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: v.suggestedQuestions.map((F, E) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => H(F),
                  disabled: M,
                  className: "pitaj-followup-chip",
                  children: F
                },
                `sug-f-${E}`
              )) }),
              (!v.isStreaming || !!v.content || !!v.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: tr(v.timestamp) }),
                !b && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  v.id === J && !a && /* @__PURE__ */ i(ue, { children: j.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(ue, { children: [
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
                  v.id === J && !a && j.copyMessageEnabled !== !1 && !!v.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void $(v.id, v.content),
                      className: `pitaj-msg-action-btn ${d === v.id ? "is-active" : ""}`,
                      "aria-label": d === v.id ? "Kopirano" : "Kopiraj odgovor",
                      title: d === v.id ? "Kopirano" : "Kopiraj odgovor",
                      children: d === v.id ? /* @__PURE__ */ i(je, { size: 14 }) : /* @__PURE__ */ i(ca, { size: 14 })
                    }
                  )
                ] }),
                b && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  je,
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
      a && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ut, {}) }) }) }),
      (h || t.status === "ended" && !t.satisfaction) && /* @__PURE__ */ i("div", { className: "pitaj-inline-satisfaction", children: /* @__PURE__ */ i(
        xi,
        {
          title: "Ocijenite razgovor sa agentom",
          onSubmit: (v, b) => {
            u == null || u(v, b);
          }
        }
      ) })
    ] }),
    (s || r) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: r ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${r}s.` : s }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        hi,
        {
          rows: ce,
          fallbackQuestions: j.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: H,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      k.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: k.map((v) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: v.previewUrl ? /* @__PURE__ */ i("img", { src: v.previewUrl, alt: v.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(ui, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: v.name, children: v.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => V(v.id),
            "aria-label": `Ukloni ${v.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(xe, { size: 10 })
          }
        )
      ] }, v.id)) }),
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
        j.attachmentsEnabled && /* @__PURE__ */ i(ue, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: I,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (v) => {
                const b = v.currentTarget.files;
                if (v.currentTarget.value = "", !b || b.length === 0) return;
                const y = await fi(b);
                N((S) => [...S, ...y].slice(0, 3));
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
                return (v = I.current) == null ? void 0 : v.click();
              },
              children: /* @__PURE__ */ i(mi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: z,
            value: p,
            onInput: (v) => m(v.target.value),
            onKeyDown: U,
            placeholder: P,
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
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: L.waveformLevels.map((v, b) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + v * 15))}px` }
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
          j.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
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
              onClick: () => H(),
              disabled: M || !p.trim() && k.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ i(ci, { size: 16 })
            }
          )
        ] })
      ] }),
      re && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: re }),
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
  var J, ee;
  const [s, n] = T(""), [o, u] = T(!1), [h, p] = T(!1), [m, c] = T([]), g = te(null), d = te(null), f = t.content || {}, k = t.chatAvailable === !1, N = t.transcribeAvailable === !1, _ = bi({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: Q(($) => {
      n((q) => q ? `${q} ${$}` : $);
    }, []),
    onError: Q(($) => {
      r == null || r($, "Greška pri transkripciji.");
    }, [r])
  });
  Y(() => {
    var $;
    e && (($ = g.current) == null || $.focus({ preventScroll: !0 }));
  }, [e]), Y(() => {
    if (typeof window > "u") return;
    const $ = window.matchMedia("(max-width: 768px)"), q = () => u($.matches);
    return q(), $.addEventListener("change", q), () => $.removeEventListener("change", q);
  }, []), Y(() => {
    p(!1);
  }, [f.dismissibleNotice]);
  const I = (o && f.useDifferentMessageMobile && f.mobileWelcomeMessage ? f.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map(($) => $.trim()).filter(($) => $.length > 0), j = f.autoShowInitialMessages !== !1 && !e, l = !o || f.showAutoPopupMobile !== !1, C = o && f.useDifferentDurationMobile && typeof f.mobileAutoShowDurationSeconds == "number" ? f.mobileAutoShowDurationSeconds : f.autoShowDurationSeconds ?? 0, M = j && l ? Math.max(0, C) * 1e3 : 0, L = ($) => {
    c((q) => {
      const Z = q.find((O) => O.id === $);
      if (Z != null && Z.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(Z.previewUrl);
        } catch {
        }
      return q.filter((O) => O.id !== $);
    });
  }, V = ($) => {
    const q = ($ ?? s).trim();
    if (!q && m.length === 0 || k) return;
    const Z = `${q}${gi(m)}`.trim();
    a(Z), m.forEach((O) => {
      if (O.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(O.previewUrl);
        } catch {
        }
    }), n(""), c([]);
  }, H = ($) => {
    $.key === "Enter" && !$.shiftKey && ($.preventDefault(), V());
  }, U = f.showSuggestedMessages === !1 ? [] : f.suggestedMessageRows || [], P = f.messagePlaceholder || t.placeholder || "Upišite svoje pitanje...", ie = ((J = f.dismissibleNotice) == null ? void 0 : J.trim()) || "", re = ((ee = f.footerText) == null ? void 0 : ee.trim()) || "", ce = _.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (I.length > 0 ? I : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map(($, q) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: $ }) }) }, `welcome-${q}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        hi,
        {
          rows: U,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: V,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: M,
          staggerMs: 150
        }
      ),
      m.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: m.map(($) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
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
      ie && !h && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
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
      _.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${ce ? "is-recording" : ""}`, children: [
        f.attachmentsEnabled && /* @__PURE__ */ i(ue, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: d,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async ($) => {
                const q = $.currentTarget.files;
                if ($.currentTarget.value = "", !q || q.length === 0) return;
                const Z = await fi(q);
                c((O) => [...O, ...Z].slice(0, 3));
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
              children: /* @__PURE__ */ i(mi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: g,
            value: s,
            onInput: ($) => n($.target.value),
            onKeyDown: H,
            placeholder: P,
            rows: 1,
            disabled: k,
            className: "pitaj-textarea",
            style: ce ? { display: "none" } : void 0
          }
        ),
        ce ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => _.cancel(),
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: _.waveformLevels.map(($, q) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + $ * 15))}px` }
            },
            `dict-wave-${q}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => _.stopAndTranscribe(),
              disabled: k || _.isProcessing,
              children: /* @__PURE__ */ i(je, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(ue, { children: [
          f.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${_.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: _.isProcessing ? "Transkribujem..." : _.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => _.start(),
              disabled: k || N || !_.isSupported || _.isProcessing,
              children: /* @__PURE__ */ i(di, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => V(),
              disabled: k || !s.trim() && m.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ i(ci, { size: 16 })
            }
          )
        ] })
      ] }),
      re && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: re }),
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
  var m, c, g, d, f, k;
  const s = ((m = r.content) == null ? void 0 : m.launcherIconStyle) || "message-circle", n = typeof ((c = r.content) == null ? void 0 : c.launcherIconUrl) == "string" ? r.content.launcherIconUrl.trim() : "", o = ((g = r.content) == null ? void 0 : g.launcherShowText) === !0, u = ((d = r.content) == null ? void 0 : d.launcherTextSide) === "left" ? "left" : "right", h = o ? ((k = (f = r.content) == null ? void 0 : f.launcherText) == null ? void 0 : k.trim()) || r.title || r.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${o ? "has-label" : ""} ${o && u === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: s === "custom" && n !== "" ? /* @__PURE__ */ i("img", { src: n, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(s === "sparkles" ? Xi : s === "message-square" ? pi : s === "contact" ? ra : ta, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(xe, { size: 22 }) })
        ] }),
        h && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: h }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function or({ isOpen: t, onOpen: e, config: a, pendingRating: r }) {
  var M, L, V, H;
  const [s, n] = T(!1), [o, u] = T(!1), [h, p] = T(!1), [m, c] = T(t), g = te(null);
  Y(() => {
    t && (c(!0), p(!1));
  }, [t]), Y(() => {
    if (r && !t) {
      const U = setTimeout(() => {
        p(!0);
      }, 800);
      return () => clearTimeout(U);
    }
  }, [r, t]), Y(() => {
    const U = () => {
      var ie;
      if (typeof window > "u") return;
      let P = window.innerWidth <= 640;
      if (!P && g.current) {
        const re = (ie = g.current.closest(".pitaj-root")) == null ? void 0 : ie.parentElement;
        re && re.clientWidth > 0 && re.clientWidth <= 640 && (P = !0);
      }
      n(P);
    };
    return U(), window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  }, []);
  const d = a.content || {}, f = d.autoShowInitialMessages !== !1, k = d.showAutoPopupMobile !== !1, N = !s || k, _ = s && d.useDifferentDurationMobile && typeof d.mobileAutoShowDurationSeconds == "number" ? d.mobileAutoShowDurationSeconds : d.autoShowDurationSeconds ?? 0;
  if (Y(() => {
    if (r) return;
    if (!f || !N || o || t || m) {
      p(!1);
      return;
    }
    const U = Math.max(0, _) * 1e3, P = setTimeout(() => {
      p(!0);
    }, U);
    return () => clearTimeout(P);
  }, [f, N, o, t, m, _, r]), !h || t)
    return null;
  let z = "";
  s && d.useDifferentMessageMobile && ((M = d.mobileWelcomeMessage) != null && M.trim()) ? z = d.mobileWelcomeMessage.trim() : (L = d.popupMessageText) != null && L.trim() ? z = d.popupMessageText.trim() : (V = a.welcomeMessage) != null && V.trim() ? z = a.welcomeMessage.trim() : (H = a.welcomeHeadline) != null && H.trim() ? z = a.welcomeHeadline.trim() : z = "Zdravo! Kako vam mogu pomoći danas?";
  const I = (U) => {
    U.stopPropagation(), U.preventDefault(), r ? r.onDismiss() : u(!0), p(!1);
  }, j = () => {
    e();
  }, l = a.title || a.name || "AI Asistent", C = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: g,
      className: `pitaj-launcher-popup ${r ? "is-rating-popup" : ""}`,
      onClick: j,
      role: "button",
      tabIndex: 0,
      "aria-label": `${l}: ${r ? "Ocijenite razgovor" : z}`,
      onKeyDown: (U) => {
        (U.key === "Enter" || U.key === " ") && (U.preventDefault(), j());
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
              onClick: I,
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
            onSubmit: async (U, P) => {
              await r.onSubmitRating(U, P), setTimeout(() => {
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
  const e = typeof t == "string" ? new Date(t) : t, r = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), s = Math.floor(r / (1e3 * 60)), n = Math.floor(r / (1e3 * 60 * 60)), o = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(s) || s < 1 ? "sada" : s < 60 ? `prije ${s}m` : n < 24 ? `prije ${n}h` : o < 7 ? `prije ${o}d` : e.toLocaleDateString();
}
function lr({ config: t, visitorId: e, onSelectTicket: a }) {
  const [r, s] = T([]), [n, o] = T("open"), [u, h] = T(1), [p, m] = T(!0), [c, g] = T(!0), [d, f] = T(!1), [k, N] = T(null), _ = te(null), z = te(null), I = te(!1);
  Y(() => {
    let C = !0;
    return g(!0), s([]), h(1), m(!0), N(null), I.current = !1, tt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: 1,
      perPage: 15
    }).then((M) => {
      C && (s(M.tickets), m(M.hasMore), h(1));
    }).catch((M) => {
      C && N(M instanceof Error ? M.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      C && g(!1);
    }), () => {
      C = !1;
    };
  }, [t.apiUrl, t.companyId, e, n]);
  const j = Q(() => {
    if (c || I.current || !p) return;
    I.current = !0, f(!0);
    const C = u + 1;
    tt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: C,
      perPage: 15
    }).then((M) => {
      s((L) => {
        const V = new Set(L.map((U) => U.id)), H = M.tickets.filter((U) => !V.has(U.id));
        return [...L, ...H];
      }), m(M.hasMore), h(C);
    }).catch((M) => {
      console.error("[Pitaj.io] Error loading more tickets:", M);
    }).finally(() => {
      f(!1), I.current = !1;
    });
  }, [t.apiUrl, t.companyId, p, c, u, n, e]);
  return Y(() => {
    const C = z.current, M = _.current;
    if (!C || !M || !p || c || d) return;
    const L = new IntersectionObserver(
      (V) => {
        var H;
        (H = V[0]) != null && H.isIntersecting && j();
      },
      { root: M, rootMargin: "120px" }
    );
    return L.observe(C), () => L.disconnect();
  }, [p, c, d, j]), /* @__PURE__ */ i(
    "div",
    {
      ref: _,
      className: "pitaj-tickets-screen",
      onScroll: (C) => {
        const M = C.currentTarget;
        !M || !p || c || I.current || M.scrollHeight - M.scrollTop - M.clientHeight < 120 && j();
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
              onClick: () => o("open"),
              role: "tab",
              "aria-selected": n === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: n === "closed" ? "is-active" : "",
              onClick: () => o("closed"),
              role: "tab",
              "aria-selected": n === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        c ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : k ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: k }) }) : r.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(pi, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: n === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: n === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          r.map((C) => {
            const M = C.messages || [], L = M.length > 0 ? M[M.length - 1] : null, V = M.length, H = V === 1 ? "1 poruka" : V >= 2 && V <= 4 ? `${V} poruke` : `${V} poruka`;
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
                    V > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: H })
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
const cr = li(() => import("./HistoryScreen-CwHIKaai.js"), (t) => t.HistoryScreen), pr = li(() => import("./FormActionsScreen-DyhudI5N.js"), (t) => t.FormActionsScreen);
function Ie(t, e) {
  const a = t.trim(), r = /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a;
  if (!/^#[0-9A-Fa-f]{6}$/.test(r)) return null;
  const s = Number.parseInt(r.slice(1, 3), 16), n = Number.parseInt(r.slice(3, 5), 16), o = Number.parseInt(r.slice(5, 7), 16);
  return `rgba(${s}, ${n}, ${o}, ${e})`;
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
  const r = (s) => Math.max(0, Math.min(255, Math.round(s))).toString(16).padStart(2, "0");
  return `#${r(t)}${r(e)}${r(a)}`;
}
function Ae(t) {
  const e = ji(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function ur(t) {
  const e = ji(t);
  if (!e) return t;
  const a = Ae(t) === "#111827", r = a ? 0.2 : 0.16, s = a ? 0 : 255;
  return dr(
    e.r + (s - e.r) * r,
    e.g + (s - e.g) * r,
    e.b + (s - e.b) * r
  );
}
function mr({
  config: t,
  startOpen: e = !1,
  initialScreen: a = "new-conversation",
  onEvent: r,
  isInline: s = !1,
  isMobile: n
}) {
  var Pe, Me, Se, he, dt, ut, mt, ht, ft;
  const {
    config: o,
    setConfig: u,
    isOpen: h,
    setIsOpen: p,
    screen: m,
    setScreen: c,
    conversations: g,
    activeConversation: d,
    totalUnread: f,
    isStreaming: k,
    rateLimitTimer: N,
    errorBanner: _,
    selectConversation: z,
    startNewConversation: I,
    endConversation: j,
    deleteConversation: l,
    sendUserMessage: C,
    submitSatisfaction: M,
    visitorContact: L,
    visitorId: V,
    activeConversationId: H,
    appendConversationMessage: U,
    handleApiError: P
  } = Ji(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: r,
    onActionTrigger: (x) => {
      if (J(!0), p(!0), (m === "history" || m === "new-conversation") && c("conversation"), x.widget_id || x.widget)
        return;
      const D = Number(x.id), w = Number(x.form_id), ae = Number.isInteger(D) && D > 0 ? D : null, ne = Number.isInteger(w) && w > 0 ? -w : null;
      $(ae ?? ne);
    }
  }), ie = te(a), re = te(e), [ce, J] = T(e), [ee, $] = T(null), [q, Z] = T(null), [O, v] = T(null), [b, y] = T(() => /* @__PURE__ */ new Set()), S = Q(() => {
    m === "conversation" && d && d.messages.length > 0 && !(d.satisfaction && d.satisfaction !== "none") && !b.has(d.id) && v(d.id);
  }, [m, d, b]), F = Q(async (x, D) => {
    O && (await M(O, x, D), v(null));
  }, [O, M]), E = Q(() => {
    O && (y((x) => new Set(x).add(O)), v(null));
  }, [O]), A = te(null), [W, R] = T(() => typeof n == "boolean" ? n : typeof window < "u" ? window.innerWidth <= 640 : !1);
  Y(() => {
    if (typeof n == "boolean") {
      R(n);
      return;
    }
    const x = () => {
      if (typeof window > "u") return;
      let D = window.innerWidth <= 640;
      if (!D && A.current) {
        const w = A.current.getRootNode(), ae = w instanceof ShadowRoot ? w.host : A.current.parentElement, ne = (ae == null ? void 0 : ae.parentElement) || ae;
        ne && ne.clientWidth > 0 && ne.clientWidth <= 640 && (D = !0);
      }
      R(D);
    };
    return x(), window.addEventListener("resize", x), window.addEventListener("orientationchange", x), () => {
      window.removeEventListener("resize", x), window.removeEventListener("orientationchange", x);
    };
  }, [n]), Y(() => {
    if (typeof window > "u") return;
    const x = () => {
      const w = A.current;
      if (!w) return;
      const ae = window.visualViewport;
      if (ae) {
        const ne = ae.height < window.innerHeight - 100;
        w.style.setProperty("--pitaj-viewport-height", `${Math.round(ae.height)}px`), w.style.setProperty("--pitaj-viewport-top", `${Math.round(ae.offsetTop)}px`), w.style.setProperty("--pitaj-viewport-left", `${Math.round(ae.offsetLeft)}px`), w.style.setProperty(
          "--pitaj-input-safe-bottom",
          ne ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        w.style.setProperty("--pitaj-viewport-height", "100dvh"), w.style.setProperty("--pitaj-viewport-top", "0px"), w.style.setProperty("--pitaj-viewport-left", "0px"), w.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    x();
    const D = window.visualViewport;
    return D && (D.addEventListener("resize", x), D.addEventListener("scroll", x)), window.addEventListener("resize", x), window.addEventListener("orientationchange", x), () => {
      D && (D.removeEventListener("resize", x), D.removeEventListener("scroll", x)), window.removeEventListener("resize", x), window.removeEventListener("orientationchange", x);
    };
  }, [h, W]), Y(() => {
    if (typeof document > "u" || !h || !W || s) return;
    const x = document.body.style.overflow, D = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = x, document.body.style.touchAction = D;
    };
  }, [h, W, s]), Y(() => {
    var w;
    if (typeof window > "u" || s) return;
    const x = (w = A.current) == null ? void 0 : w.getRootNode(), D = x instanceof ShadowRoot ? x.host : null;
    D && (h && W ? (D.style.top = "0", D.style.left = "0", D.style.width = "100%", D.style.height = "100%", D.setAttribute("data-pitaj-mobile-open", "true")) : (D.style.top = "", D.style.left = "", D.style.width = "0", D.style.height = "0", D.removeAttribute("data-pitaj-mobile-open")));
  }, [h, W, s]);
  const G = o.formsEnabled === !0 && o.formsAvailable !== !1, B = we(() => {
    var w, ae;
    const x = o.actions || [];
    if (x.length > 0 && typeof ((w = x[0]) == null ? void 0 : w.id) == "number")
      return x[0].id;
    const D = o.forms || [];
    return D.length > 0 && typeof ((ae = D[0]) == null ? void 0 : ae.id) == "number" ? -D[0].id : null;
  }, [o.actions, o.forms]), de = we(() => ({
    open: () => {
      J(!0), p(!0);
    },
    close: () => p(!1),
    toggle: () => {
      h || J(!0), p(!h);
    },
    startConversation: (x) => {
      J(!0), p(!0), x && x.trim() ? I(x.trim()) : c("new-conversation");
    },
    setScreen: (x) => c(x),
    setConfig: (x) => {
      u({
        ...o,
        ...x,
        colors: { ...o.colors || {}, ...x.colors || {} },
        content: { ...o.content || {}, ...x.content || {} },
        features: { ...o.features || {}, ...x.features || {} }
      });
    }
  }), [o, h, p, c, I, u]), K = te({});
  Bt(K.current, de), Y(() => () => Bt(K.current, null), []), Y(() => {
    a !== ie.current && (ie.current = a, c(a));
  }, [a, c]), Y(() => {
    e !== re.current && (re.current = e, e && J(!0), p(e));
  }, [e, p]), Y(() => {
    if (m === "forms") {
      G && B !== null && $(B), c("new-conversation");
      return;
    }
    m === "contact" && c("new-conversation");
  }, [B, G, m, c]), Y(() => {
    var ae;
    if (typeof document > "u") return;
    const x = (ae = o.content) == null ? void 0 : ae.fontFamily;
    if (!x) return;
    const D = x.trim().toLowerCase();
    let w = "";
    if (D === "inter" ? w = "family=Inter:wght@400;500;600;700" : D === "geist" ? w = "family=Geist:wght@400;500;600;700" : D === "plus jakarta sans" && (w = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), w) {
      const ne = `pitaj-font-${D.replace(/\s+/g, "-")}`;
      if (!document.getElementById(ne)) {
        const fe = document.createElement("link");
        fe.id = ne, fe.rel = "stylesheet", fe.href = `https://fonts.googleapis.com/css2?${w}&display=swap`, document.head.appendChild(fe);
      }
    }
  }, [(Pe = o.content) == null ? void 0 : Pe.fontFamily]);
  const ge = we(() => {
    var Be, gt, bt, xt, jt;
    const x = o.colors || {}, D = ((Be = o.content) == null ? void 0 : Be.themeMode) === "dark" ? "dark" : "light", w = {};
    if (x.primaryColor) {
      w["--pitaj-accent"] = x.primaryColor, w["--pitaj-bubble-user"] = x.primaryColor, w["--pitaj-accent-hover"] = ur(x.primaryColor), w["--pitaj-accent-contrast"] = Ae(x.primaryColor), w["--pitaj-bubble-user-fg"] = Ae(x.primaryColor);
      const pe = Ie(x.primaryColor, 0.1), $e = Ie(x.primaryColor, 0.16), vt = Ie(x.primaryColor, 0.35);
      pe && (w["--pitaj-accent-soft"] = pe), $e && (w["--pitaj-accent-soft-strong"] = $e), vt && (w["--pitaj-accent-ring"] = vt);
    }
    if (x.headerBg && (w["--pitaj-header-bg"] = x.headerBg), x.headerFg) {
      w["--pitaj-header-fg"] = x.headerFg;
      const pe = Ie(x.headerFg, 0.1);
      pe && (w["--pitaj-header-icon-hover"] = pe);
    }
    w["--pitaj-chrome-border"] = D === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", x.surfaceBg && (w["--pitaj-surface"] = x.surfaceBg), x.subtle ? w["--pitaj-surface-subtle"] = x.subtle : x.surfaceBg && (w["--pitaj-surface-subtle"] = Ie(x.surfaceBg, 0.9) || x.surfaceBg), x.bubbleAiBg && (w["--pitaj-bubble-ai"] = x.bubbleAiBg), x.textFg && (w["--pitaj-bubble-ai-fg"] = x.textFg), x.textFg && (w["--pitaj-fg"] = x.textFg), x.mutedFg && (w["--pitaj-muted"] = x.mutedFg), x.border && (w["--pitaj-border"] = x.border), x.hover && (w["--pitaj-hover"] = x.hover), x.sendAccent && (w["--pitaj-send-accent"] = x.sendAccent, w["--pitaj-send-accent-contrast"] = Ae(x.sendAccent));
    const ae = (gt = o.content) == null ? void 0 : gt.launcherButtonColor;
    ae && (w["--pitaj-launcher-bg"] = ae, w["--pitaj-launcher-fg"] = Ae(ae));
    const ne = (bt = o.content) == null ? void 0 : bt.cornerRadius;
    if (ne) {
      const pe = ne === "sharp" || ne === "0px" ? "0px" : ne === "small" || ne === "8px" ? "8px" : ne === "medium" || ne === "12px" ? "12px" : ne === "large" || ne === "16px" ? "16px" : ne;
      w["--pitaj-radius"] = pe, pe === "0px" ? (w["--pitaj-radius-bubble"] = "0px", w["--pitaj-radius-input"] = "0px", w["--pitaj-radius-btn"] = "0px", w["--pitaj-radius-avatar"] = "0px", w["--pitaj-radius-full"] = "0px", w["--pitaj-radius-corner-sm"] = "0px", w["--pitaj-launcher-radius"] = "0px", w["--pitaj-launcher-pill-radius"] = "0px", w["--pitaj-badge-radius"] = "0px") : pe === "8px" ? (w["--pitaj-radius-bubble"] = "8px", w["--pitaj-radius-input"] = "8px", w["--pitaj-radius-btn"] = "6px", w["--pitaj-radius-avatar"] = "6px", w["--pitaj-radius-full"] = "8px", w["--pitaj-radius-corner-sm"] = "2px", w["--pitaj-launcher-radius"] = "8px", w["--pitaj-launcher-pill-radius"] = "8px", w["--pitaj-badge-radius"] = "4px") : pe === "12px" ? (w["--pitaj-radius-bubble"] = "12px", w["--pitaj-radius-input"] = "12px", w["--pitaj-radius-btn"] = "8px", w["--pitaj-radius-avatar"] = "10px", w["--pitaj-radius-full"] = "12px", w["--pitaj-radius-corner-sm"] = "4px", w["--pitaj-launcher-radius"] = "12px", w["--pitaj-launcher-pill-radius"] = "12px", w["--pitaj-badge-radius"] = "6px") : (w["--pitaj-radius-bubble"] = "18px", w["--pitaj-radius-input"] = "14px", w["--pitaj-radius-btn"] = "10px", w["--pitaj-radius-avatar"] = "50%", w["--pitaj-radius-full"] = "999px", w["--pitaj-radius-corner-sm"] = "4px", w["--pitaj-launcher-radius"] = "50%", w["--pitaj-launcher-pill-radius"] = "999px", w["--pitaj-badge-radius"] = "999px");
    }
    const fe = (xt = o.content) == null ? void 0 : xt.fontFamily;
    if (fe) {
      const pe = fe.toLowerCase(), $e = pe === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : pe === "arial" ? "Arial, Helvetica, sans-serif" : pe === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : pe === "georgia" ? "Georgia, serif" : pe === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : pe === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${fe}', 'Inter', system-ui, sans-serif`;
      w["--pitaj-font"] = $e, w.fontFamily = $e;
    }
    const Ne = (jt = o.content) == null ? void 0 : jt.fontSize;
    return Ne && (w["--pitaj-font-size"] = Ne, w.fontSize = Ne), w;
  }, [
    o.colors,
    (Me = o.content) == null ? void 0 : Me.themeMode,
    (Se = o.content) == null ? void 0 : Se.launcherButtonColor,
    (he = o.content) == null ? void 0 : he.cornerRadius,
    (dt = o.content) == null ? void 0 : dt.fontFamily,
    (ut = o.content) == null ? void 0 : ut.fontSize
  ]), me = `pos-${o.position || "bottom-right"}`;
  return o.enabled === !1 ? /* @__PURE__ */ i(ue, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: A,
      className: `pitaj-root ${me} ${h ? "is-widget-open" : "is-widget-closed"} ${s ? "is-inline" : ""} ${W ? "is-mobile" : ""} ${s && ((mt = o.content) != null && mt.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: ge,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-window ${h ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !h,
            children: [
              /* @__PURE__ */ i(
                Ca,
                {
                  screen: m,
                  activeConversation: d,
                  config: o,
                  onBack: () => {
                    const x = q || "new-conversation";
                    Z(null), c(x);
                  },
                  onClose: () => {
                    S(), p(!1);
                  },
                  onNewConversation: () => {
                    Z(null), c("new-conversation");
                  },
                  onEndConversation: () => {
                    S(), j(), p(!1);
                  },
                  onDeleteConversation: ((ht = o.content) == null ? void 0 : ht.deleteConversationsEnabled) !== !1 && d ? () => l(d.id) : void 0,
                  onViewHistory: () => {
                    Z(null), c("history");
                  },
                  onViewTickets: () => {
                    Z(null), c("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                m === "conversation" && d && /* @__PURE__ */ i(
                  ar,
                  {
                    conversation: d,
                    config: o,
                    isStreaming: k,
                    rateLimitCountdown: N,
                    errorBanner: _,
                    onSendMessage: C,
                    onApiError: P,
                    onSubmitSatisfaction: (x, D) => M(d.id, x, D),
                    isRatingPromptActive: O === d.id
                  }
                ),
                m === "new-conversation" && /* @__PURE__ */ i(
                  rr,
                  {
                    config: o,
                    openedByUser: ce,
                    onStart: (x) => {
                      I(x);
                    },
                    onApiError: P
                  }
                ),
                m === "history" && /* @__PURE__ */ i(
                  cr,
                  {
                    conversations: g,
                    config: o,
                    onSelectConversation: (x) => {
                      Z("history"), z(x);
                    },
                    onNewConversation: () => {
                      Z(null), c("new-conversation");
                    },
                    onDeleteConversation: ((ft = o.content) == null ? void 0 : ft.deleteConversationsEnabled) !== !1 ? l : void 0
                  }
                ),
                m === "tickets" && /* @__PURE__ */ i(
                  lr,
                  {
                    config: o,
                    visitorId: V,
                    onSelectTicket: (x) => {
                      var Ne;
                      Z("tickets");
                      const D = (Ne = x.messages) == null ? void 0 : Ne.find((Be) => Be.sender === "user"), w = x.messages && x.messages.length > 0 ? x.messages[x.messages.length - 1] : null, ae = D ? D.content.length > 40 ? D.content.slice(0, 40) + "…" : D.content : x.ticketNumber || `Tiket #${x.id}`, fe = {
                        id: x.conversationId ? String(x.conversationId) : String(x.id),
                        title: ae,
                        preview: w ? w.content : x.ticketNumber || `Tiket #${x.id}`,
                        timestamp: x.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: x.messages || [],
                        status: x.isResolved ? "ended" : "active",
                        ticketNumber: x.ticketNumber
                      };
                      z(fe);
                    }
                  }
                ),
                (m === "conversation" || m === "new-conversation") && G && ee !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  pr,
                  {
                    embedded: !0,
                    config: o,
                    widgetId: o.companyId,
                    activeConversationId: H,
                    initialActionId: ee,
                    visitorContact: L,
                    onApiError: P,
                    blockedReason: N !== null ? `Sačekajte ${N}s prije novog zahtjeva.` : null,
                    onSubmitted: (x) => {
                      U(H, x, "user");
                    },
                    onBack: () => $(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!h || !W) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${h ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            or,
            {
              isOpen: h,
              onOpen: () => {
                J(!0), p(!0);
              },
              config: o,
              pendingRating: O && !h ? {
                conversationId: O,
                onSubmitRating: F,
                onDismiss: E
              } : null
            }
          ),
          /* @__PURE__ */ i(
            nr,
            {
              isOpen: h,
              onClick: () => {
                h || J(!0), p(!h);
              },
              unreadCount: f + (O && !h ? 1 : 0),
              config: o
            }
          )
        ] })
      ]
    }
  );
}
const oe = {
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
function hr(t) {
  const e = t.trim();
  if (!/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), r = Number.parseInt(e.slice(3, 5), 16), s = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * r + 0.0722 * s) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function fr(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function gr(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const r = Number.parseInt(a.slice(1, 3), 16) / 255, s = Number.parseInt(a.slice(3, 5), 16) / 255, n = Number.parseInt(a.slice(5, 7), 16) / 255, o = Math.max(r, s, n), u = Math.min(r, s, n), h = o - u;
  let p = 0;
  const m = (o + u) / 2, c = h === 0 ? 0 : h / (1 - Math.abs(2 * m - 1));
  if (h !== 0)
    switch (o) {
      case r:
        p = (s - n) / h % 6;
        break;
      case s:
        p = (n - r) / h + 2;
        break;
      default:
        p = (r - s) / h + 4;
        break;
    }
  return { h: Math.round((p * 60 + 360) % 360), s: Math.round(c * 100), l: Math.round(m * 100) };
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
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, s = (Array.isArray(a.fields) ? a.fields : []).filter((n) => typeof n == "object" && n !== null).map((n) => ({
      key: typeof n.key == "string" ? n.key : "",
      type: br(n.type),
      label: typeof n.label == "string" ? n.label : "",
      required: n.required === !0,
      placeholder: typeof n.placeholder == "string" ? n.placeholder : void 0,
      options: Array.isArray(n.options) ? n.options.filter((o) => typeof o == "string" && o.trim() !== "") : void 0,
      accept: Array.isArray(n.accept) ? n.accept.filter((o) => typeof o == "string" && o.trim() !== "") : void 0,
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
      schema_json: { fields: s }
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
  var r, s, n, o, u, h, p, m, c;
  if (t === "default")
    return { ...oe, companyId: t || "default" };
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
            ...oe,
            companyId: t,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${d.status}), using defaults.`), { ...oe, companyId: t, apiUrl: a };
    }
    const f = await d.json(), k = f.accent_color || ((r = oe.colors) == null ? void 0 : r.primaryColor) || "#2563eb", N = Array.isArray(f.suggested_questions) ? f.suggested_questions.filter((A) => typeof A == "string" && A.trim() !== "").slice(0, 4) : [], _ = Array.isArray(f.contact_fields) ? f.contact_fields.filter(
      (A) => A === "name" || A === "email" || A === "phone"
    ) : [], I = (Array.isArray(f.channels) ? f.channels : []).find(
      (A) => typeof A == "object" && A !== null && A.channel === "chat_bubble"
    ), j = (I == null ? void 0 : I.enabled) !== !1, l = f.widget_content && typeof f.widget_content == "object" ? f.widget_content : null, C = Array.isArray(l == null ? void 0 : l.suggested_message_rows) ? l.suggested_message_rows.filter((A) => typeof A == "object" && A !== null).map((A) => {
      const W = typeof A.text == "string" ? A.text.trim() : "", R = Array.isArray(A.children) ? A.children.filter((G) => typeof G == "string" && G.trim() !== "") : [];
      return {
        text: W,
        children: R.length > 0 ? R : void 0
      };
    }).filter((A) => A.text !== "").slice(0, 4) : [], M = {
      avatarBorder: (l == null ? void 0 : l.avatar_border) !== !1,
      messagePlaceholder: typeof (l == null ? void 0 : l.message_placeholder) == "string" && l.message_placeholder.trim() !== "" ? l.message_placeholder : oe.placeholder,
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
      launcherButtonColor: fr(l == null ? void 0 : l.launcher_button_color, "#05070c"),
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
    }, L = M.themeMode === "dark" ? "dark" : "light", V = M.accentColorEnabled !== !1, H = M.accentColorForHeaderEnabled === !0, U = M.accentColorForSendIconEnabled === !0, P = M.tintedGrayscaleEnabled === !0, ie = M.tintedGrayscaleHue ?? 0, re = M.tintedGrayscaleTint ?? 0, ce = M.tintedGrayscaleShade ?? 0, J = V ? k : L === "dark" ? "#9ca3af" : "#6b7280", $ = (gr(J).h + ie + 360) % 360, q = Math.max(0, Math.min(46, 10 + re * 0.36)), Z = Math.max(-24, Math.min(24, ce * 0.24)), O = L === "dark" ? {
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
    if (H && (O.headerBg = J, O.headerFg = hr(J)), P) {
      const A = L === "dark" ? Math.max(8, Math.min(20, 12 + Z)) : Math.max(88, Math.min(97, 95 + Z * 0.22)), W = L === "dark" ? Math.max(10, Math.min(24, 16 + Z)) : Math.max(80, Math.min(94, 89 + Z * 0.35)), R = L === "dark" ? Math.max(11, Math.min(26, 18 + Z * 0.9)) : Math.max(83, Math.min(95, W + 3)), G = L === "dark" ? Math.max(22, Math.min(40, 30 + Z)) : Math.max(70, Math.min(88, 82 + Z * 0.38)), B = L === "dark" ? Math.max(16, Math.min(30, 22 + Z)) : Math.max(78, Math.min(92, W - 2));
      O.surfaceBg = `hsl(${$} ${q}% ${A}%)`, O.bubbleAiBg = `hsl(${$} ${Math.max(0, q - 2)}% ${R}%)`, O.subtle = `hsl(${$} ${Math.max(0, q - 4)}% ${W}%)`, O.border = `hsl(${$} ${Math.max(0, q - 5)}% ${G}%)`, O.hover = `hsl(${$} ${Math.max(0, q - 3)}% ${B}%)`;
    }
    const v = xr(f.forms), b = jr(f.actions).filter(
      (A) => v.some((W) => W.id === A.form_id)
    ), y = f.forms_enabled === !0 && v.length > 0 && b.length > 0, S = f.chat_available !== !1, F = f.transcribe_available !== !1 && S, E = f.forms_available !== !1 && y;
    return {
      ...oe,
      companyId: t,
      enabled: j,
      apiUrl: a,
      name: f.company_name || oe.name,
      title: f.bot_name || oe.title,
      avatar: typeof (l == null ? void 0 : l.avatar_url) == "string" && l.avatar_url.trim() !== "" ? l.avatar_url : oe.avatar,
      welcomeHeadline: f.bot_name ? `Ćaskajte sa ${f.bot_name}` : oe.welcomeHeadline,
      welcomeMessage: f.welcome_message || oe.welcomeMessage,
      placeholder: M.messagePlaceholder || oe.placeholder,
      suggestedQuestions: N,
      contactFields: _.length > 0 ? _ : oe.contactFields,
      contact: {
        enabled: typeof ((s = f.contact) == null ? void 0 : s.enabled) == "boolean" ? f.contact.enabled : (n = oe.contact) == null ? void 0 : n.enabled,
        title: typeof ((o = f.contact) == null ? void 0 : o.title) == "string" && f.contact.title.trim() !== "" ? f.contact.title : (u = oe.contact) == null ? void 0 : u.title,
        subtitle: typeof ((h = f.contact) == null ? void 0 : h.subtitle) == "string" && f.contact.subtitle.trim() !== "" ? f.contact.subtitle : (p = oe.contact) == null ? void 0 : p.subtitle,
        submitLabel: typeof ((m = f.contact) == null ? void 0 : m.submit_label) == "string" && f.contact.submit_label.trim() !== "" ? f.contact.submit_label : (c = oe.contact) == null ? void 0 : c.submitLabel
      },
      poweredBy: f.show_branding !== void 0 ? f.show_branding : oe.poweredBy,
      position: f.position || oe.position,
      accentGradient: Array.isArray(f.accent_gradient) ? f.accent_gradient : [],
      content: {
        ...oe.content || {},
        ...M
      },
      chatAvailable: S,
      transcribeAvailable: F,
      formsAvailable: E,
      formsEnabled: y,
      forms: v,
      actions: b,
      colors: {
        ...oe.colors,
        primaryColor: J,
        bubbleUserBg: J,
        sendAccent: U ? J : L === "dark" ? "#e5e7eb" : "#111827",
        headerBg: O.headerBg,
        headerFg: O.headerFg,
        surfaceBg: O.surfaceBg,
        bubbleAiBg: O.bubbleAiBg,
        textFg: O.textFg,
        mutedFg: O.mutedFg,
        border: O.border,
        hover: O.hover,
        subtle: O.subtle
      }
    };
  } catch (g) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", g), { ...oe, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const wr = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";:host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon-hover: rgba(15, 23, 42, .06);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:100%;height:100%;min-height:0;max-height:100%;align-items:center!important;gap:8px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-btn,.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-wrap{display:none!important}.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-btn,.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-wrap{align-self:flex-end;margin-right:8px}.pitaj-root.is-inline.show-inline-launcher .pitaj-window{height:calc(100% - 62px);max-height:calc(100% - 62px)}.pitaj-root.is-inline .pitaj-window{position:relative;width:min(100%,380px);height:auto;flex:1 1 auto;min-height:0;max-width:380px;max-height:100%;transform:none!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:none;display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background:var(--pitaj-header-bg);color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-border);flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:#fff3;color:var(--pitaj-header-fg);line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-muted);line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-muted)}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg);border-color:#0f172a0d}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}', ke = {};
function vi(t, e) {
  (ke[t] || []).forEach((r) => {
    try {
      r(e);
    } catch (s) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, s);
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
    const n = e.widgetId || e.companyId || "default", o = await vr(n, e.apiUrl), u = kr(o, e);
    if (u.enabled === !1 || u.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let h = t.shadowRoot;
    h || (h = t.attachShadow({ mode: "open" })), h.innerHTML = "";
    const p = document.createElement("style");
    p.textContent = wr, h.appendChild(p);
    const m = document.createElement("div");
    m.className = "pitaj-shadow-mount", h.appendChild(m), Nt(
      /* @__PURE__ */ i(
        mr,
        {
          config: u,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          initialScreen: e.initialScreen,
          onEvent: vi
        }
      ),
      m
    );
    const c = ve();
    return c && (t.__pitajController = c), {
      controller: c,
      unmount: () => {
        Nt(null, m), h && (h.innerHTML = "");
      }
    };
  }, s = (a || Promise.resolve()).then(r, r);
  Fe.set(t, s);
  try {
    return await s;
  } finally {
    Fe.get(t) === s && Fe.delete(t);
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
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", r = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, s = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", n = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", o = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: u } = await at(this, { widgetId: a, apiUrl: r, position: s, startOpen: n, isInline: o });
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
  const a = t.getAttribute("data-api-url") || void 0, r = t.getAttribute("data-position") || "bottom-right", s = t.getAttribute("data-start-open") === "true", n = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: r, startOpen: s, isInline: n };
}
var Rt;
if (typeof window < "u") {
  const t = ((Rt = window.PitajIO) == null ? void 0 : Rt._q) || [];
  window.PitajIO = Re, customElements.get("pitaj-io") || customElements.define("pitaj-io", _r);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, Re.init(e).then(() => {
      t.forEach(({ method: a, args: r }) => {
        const s = Re[a];
        typeof s == "function" && s(...r);
      });
    });
  else {
    const a = document.currentScript;
    let r = Ft(a);
    if (!r) {
      const s = Array.prototype.slice.call(document.scripts || []);
      for (let n = s.length - 1; n >= 0; n--) {
        const o = s[n];
        if (o.src && /widget(\.iife)?\.js/i.test(o.src) && (r = Ft(o), r))
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
  Y as y
};
