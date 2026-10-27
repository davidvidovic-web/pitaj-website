var yi = Object.defineProperty;
var ki = (t, e, a) => e in t ? yi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var ye = (t, e, a) => ki(t, typeof e != "symbol" ? e + "" : e, a);
var qe, X, Ot, _e, yt, Vt, qt, Kt, rt, Je, Xe, Le = {}, Wt = [], _i = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ke = Array.isArray;
function be(t, e) {
  for (var a in e) t[a] = e[a];
  return t;
}
function nt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Ni(t, e, a) {
  var r, o, n, p = {};
  for (n in e) n == "key" ? r = e[n] : n == "ref" ? o = e[n] : p[n] = e[n];
  if (arguments.length > 2 && (p.children = arguments.length > 3 ? qe.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) p[n] === void 0 && (p[n] = t.defaultProps[n]);
  return Re(t, p, r, o, null);
}
function Re(t, e, a, r, o) {
  var n = { type: t, props: e, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ot, __i: -1, __u: 0 };
  return o == null && X.vnode != null && X.vnode(n), n;
}
function ue(t) {
  return t.children;
}
function He(t, e) {
  this.props = t, this.context = e;
}
function ze(t, e) {
  if (e == null) return t.__ ? ze(t.__, t.__i + 1) : null;
  for (var a; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) return a.__e;
  return typeof t.type == "function" ? ze(t) : null;
}
function Zt(t) {
  var e, a;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) {
      t.__e = t.__c.base = a.__e;
      break;
    }
    return Zt(t);
  }
}
function kt(t) {
  (!t.__d && (t.__d = !0) && _e.push(t) && !Ve.__r++ || yt !== X.debounceRendering) && ((yt = X.debounceRendering) || Vt)(Ve);
}
function Ve() {
  for (var t, e, a, r, o, n, p, l = 1; _e.length; ) _e.length > l && _e.sort(qt), t = _e.shift(), l = _e.length, t.__d && (a = void 0, o = (r = (e = t).__v).__e, n = [], p = [], e.__P && ((a = be({}, r)).__v = r.__v + 1, X.vnode && X.vnode(a), ot(e.__P, a, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, n, o ?? ze(r), !!(32 & r.__u), p), a.__v = r.__v, a.__.__k[a.__i] = a, Qt(n, a, p), a.__e != o && Zt(a)));
  Ve.__r = 0;
}
function Gt(t, e, a, r, o, n, p, l, f, c, m) {
  var d, g, u, h, k, N, _ = r && r.__k || Wt, z = e.length;
  for (f = zi(a, e, _, f, z), d = 0; d < z; d++) (u = a.__k[d]) != null && (g = u.__i === -1 ? Le : _[u.__i] || Le, u.__i = d, N = ot(t, u, g, o, n, p, l, f, c, m), h = u.__e, u.ref && g.ref != u.ref && (g.ref && st(g.ref, null, u), m.push(u.ref, u.__c || h, u)), k == null && h != null && (k = h), 4 & u.__u || g.__k === u.__k ? f = Yt(u, f, t) : typeof u.type == "function" && N !== void 0 ? f = N : h && (f = h.nextSibling), u.__u &= -7);
  return a.__e = k, f;
}
function zi(t, e, a, r, o) {
  var n, p, l, f, c, m = a.length, d = m, g = 0;
  for (t.__k = new Array(o), n = 0; n < o; n++) (p = e[n]) != null && typeof p != "boolean" && typeof p != "function" ? (f = n + g, (p = t.__k[n] = typeof p == "string" || typeof p == "number" || typeof p == "bigint" || p.constructor == String ? Re(null, p, null, null, null) : Ke(p) ? Re(ue, { children: p }, null, null, null) : p.constructor === void 0 && p.__b > 0 ? Re(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p).__ = t, p.__b = t.__b + 1, l = null, (c = p.__i = Mi(p, a, f, d)) !== -1 && (d--, (l = a[c]) && (l.__u |= 2)), l == null || l.__v === null ? (c == -1 && (o > m ? g-- : o < m && g++), typeof p.type != "function" && (p.__u |= 4)) : c != f && (c == f - 1 ? g-- : c == f + 1 ? g++ : (c > f ? g-- : g++, p.__u |= 4))) : t.__k[n] = null;
  if (d) for (n = 0; n < m; n++) (l = a[n]) != null && !(2 & l.__u) && (l.__e == r && (r = ze(l)), Xt(l, l));
  return r;
}
function Yt(t, e, a) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = Yt(r[o], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !a.contains(e) && (e = ze(t)), a.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Mi(t, e, a, r) {
  var o, n, p = t.key, l = t.type, f = e[a];
  if (f === null && t.key == null || f && p == f.key && l === f.type && !(2 & f.__u)) return a;
  if (r > (f != null && !(2 & f.__u) ? 1 : 0)) for (o = a - 1, n = a + 1; o >= 0 || n < e.length; ) {
    if (o >= 0) {
      if ((f = e[o]) && !(2 & f.__u) && p == f.key && l === f.type) return o;
      o--;
    }
    if (n < e.length) {
      if ((f = e[n]) && !(2 & f.__u) && p == f.key && l === f.type) return n;
      n++;
    }
  }
  return -1;
}
function _t(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || _i.test(e) ? a : a + "px";
}
function Be(t, e, a, r, o) {
  var n;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) a && e in a || _t(t.style, e, "");
    if (a) for (e in a) r && a[e] === r[e] || _t(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(Kt, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = a, a ? r ? a.t = r.t : (a.t = rt, t.addEventListener(e, n ? Xe : Je, n)) : t.removeEventListener(e, n ? Xe : Je, n);
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
function Nt(t) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + t];
      if (e.u == null) e.u = rt++;
      else if (e.u < a.t) return;
      return a(X.event ? X.event(e) : e);
    }
  };
}
function ot(t, e, a, r, o, n, p, l, f, c) {
  var m, d, g, u, h, k, N, _, z, C, v, s, I, M, A, V, O, F = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (f = !!(32 & a.__u), n = [l = e.__e = a.__e]), (m = X.__b) && m(e);
  e: if (typeof F == "function") try {
    if (_ = e.props, z = "prototype" in F && F.prototype.render, C = (m = F.contextType) && r[m.__c], v = m ? C ? C.props.value : m.__ : r, a.__c ? N = (d = e.__c = a.__c).__ = d.__E : (z ? e.__c = d = new F(_, v) : (e.__c = d = new He(_, v), d.constructor = F, d.render = $i), C && C.sub(d), d.props = _, d.state || (d.state = {}), d.context = v, d.__n = r, g = d.__d = !0, d.__h = [], d._sb = []), z && d.__s == null && (d.__s = d.state), z && F.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = be({}, d.__s)), be(d.__s, F.getDerivedStateFromProps(_, d.__s))), u = d.props, h = d.state, d.__v = e, g) z && F.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), z && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (z && F.getDerivedStateFromProps == null && _ !== u && d.componentWillReceiveProps != null && d.componentWillReceiveProps(_, v), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(_, d.__s, v) === !1 || e.__v == a.__v)) {
        for (e.__v != a.__v && (d.props = _, d.state = d.__s, d.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(B) {
          B && (B.__ = e);
        }), s = 0; s < d._sb.length; s++) d.__h.push(d._sb[s]);
        d._sb = [], d.__h.length && p.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(_, d.__s, v), z && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(u, h, k);
      });
    }
    if (d.context = v, d.props = _, d.__P = t, d.__e = !1, I = X.__r, M = 0, z) {
      for (d.state = d.__s, d.__d = !1, I && I(e), m = d.render(d.props, d.state, d.context), A = 0; A < d._sb.length; A++) d.__h.push(d._sb[A]);
      d._sb = [];
    } else do
      d.__d = !1, I && I(e), m = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++M < 25);
    d.state = d.__s, d.getChildContext != null && (r = be(be({}, r), d.getChildContext())), z && !g && d.getSnapshotBeforeUpdate != null && (k = d.getSnapshotBeforeUpdate(u, h)), V = m, m != null && m.type === ue && m.key == null && (V = Jt(m.props.children)), l = Gt(t, Ke(V) ? V : [V], e, a, r, o, n, p, l, f, c), d.base = e.__e, e.__u &= -161, d.__h.length && p.push(d), N && (d.__E = d.__ = null);
  } catch (B) {
    if (e.__v = null, f || n != null) if (B.then) {
      for (e.__u |= f ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      n[n.indexOf(l)] = null, e.__e = l;
    } else for (O = n.length; O--; ) nt(n[O]);
    else e.__e = a.__e, e.__k = a.__k;
    X.__e(B, e, a);
  }
  else n == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : l = e.__e = Si(a.__e, e, a, r, o, n, p, f, c);
  return (m = X.diffed) && m(e), 128 & e.__u ? void 0 : l;
}
function Qt(t, e, a) {
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
function Jt(t) {
  return typeof t != "object" || t == null ? t : Ke(t) ? t.map(Jt) : be({}, t);
}
function Si(t, e, a, r, o, n, p, l, f) {
  var c, m, d, g, u, h, k, N = a.props, _ = e.props, z = e.type;
  if (z == "svg" ? o = "http://www.w3.org/2000/svg" : z == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (c = 0; c < n.length; c++) if ((u = n[c]) && "setAttribute" in u == !!z && (z ? u.localName == z : u.nodeType == 3)) {
      t = u, n[c] = null;
      break;
    }
  }
  if (t == null) {
    if (z == null) return document.createTextNode(_);
    t = document.createElementNS(o, z, _.is && _), l && (X.__m && X.__m(e, n), l = !1), n = null;
  }
  if (z === null) N === _ || l && t.data === _ || (t.data = _);
  else {
    if (n = n && qe.call(t.childNodes), N = a.props || Le, !l && n != null) for (N = {}, c = 0; c < t.attributes.length; c++) N[(u = t.attributes[c]).name] = u.value;
    for (c in N) if (u = N[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") d = u;
      else if (!(c in _)) {
        if (c == "value" && "defaultValue" in _ || c == "checked" && "defaultChecked" in _) continue;
        Be(t, c, null, u, o);
      }
    }
    for (c in _) u = _[c], c == "children" ? g = u : c == "dangerouslySetInnerHTML" ? m = u : c == "value" ? h = u : c == "checked" ? k = u : l && typeof u != "function" || N[c] === u || Be(t, c, u, N[c], o);
    if (m) l || d && (m.__html === d.__html || m.__html === t.innerHTML) || (t.innerHTML = m.__html), e.__k = [];
    else if (d && (t.innerHTML = ""), Gt(e.type === "template" ? t.content : t, Ke(g) ? g : [g], e, a, r, z == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, p, n ? n[0] : a.__k && ze(a, 0), l, f), n != null) for (c = n.length; c--; ) nt(n[c]);
    l || (c = "value", z == "progress" && h == null ? t.removeAttribute("value") : h !== void 0 && (h !== t[c] || z == "progress" && !h || z == "option" && h !== N[c]) && Be(t, c, h, N[c], o), c = "checked", k !== void 0 && k !== t[c] && Be(t, c, k, N[c], o));
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
function Xt(t, e, a) {
  var r, o;
  if (X.unmount && X.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || st(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      X.__e(n, e);
    }
    r.base = r.__P = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && Xt(r[o], e, a || typeof t.type != "function");
  a || nt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function $i(t, e, a) {
  return this.constructor(t, a);
}
function zt(t, e, a) {
  var r, o, n, p;
  e == document && (e = document.documentElement), X.__ && X.__(t, e), o = (r = !1) ? null : e.__k, n = [], p = [], ot(e, t = e.__k = Ni(ue, null, [t]), o || Le, Le, e.namespaceURI, o ? null : e.firstChild ? qe.call(e.childNodes) : null, n, o ? o.__e : e.firstChild, r, p), Qt(n, t, p);
}
qe = Wt.slice, X = { __e: function(t, e, a, r) {
  for (var o, n, p; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(t)), p = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), p = o.__d), p) return o.__E = o;
  } catch (l) {
    t = l;
  }
  throw t;
} }, Ot = 0, He.prototype.setState = function(t, e) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = be({}, this.state), typeof t == "function" && (t = t(be({}, a), this.props)), t && be(a, t), t != null && this.__v && (e && this._sb.push(e), kt(this));
}, He.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), kt(this));
}, He.prototype.render = ue, _e = [], Vt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Ve.__r = 0, Kt = /(PointerCapture)$|Capture$/i, rt = 0, Je = Nt(!1), Xe = Nt(!0);
var Ii = 0;
function i(t, e, a, r, o, n) {
  e || (e = {});
  var p, l, f = e;
  if ("ref" in f) for (l in f = {}, e) l == "ref" ? p = e[l] : f[l] = e[l];
  var c = { type: t, props: f, key: a, ref: p, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ii, __i: -1, __u: 0, __source: o, __self: n };
  if (typeof t == "function" && (p = t.defaultProps)) for (l in p) f[l] === void 0 && (f[l] = p[l]);
  return X.vnode && X.vnode(c), c;
}
var Te, se, Ge, Mt, Ee = 0, ei = [], le = X, St = le.__b, $t = le.__r, It = le.diffed, Ct = le.__c, At = le.unmount, Lt = le.__;
function lt(t, e) {
  le.__h && le.__h(se, t, Ee || e), Ee = 0;
  var a = se.__H || (se.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function T(t) {
  return Ee = 1, Ci(ii, t);
}
function Ci(t, e, a) {
  var r = lt(Te++, 2);
  if (r.t = t, !r.__c && (r.__ = [ii(void 0, e), function(l) {
    var f = r.__N ? r.__N[0] : r.__[0], c = r.t(f, l);
    f !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = se, !se.__f)) {
    var o = function(l, f, c) {
      if (!r.__c.__H) return !0;
      var m = r.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (m.every(function(g) {
        return !g.__N;
      })) return !n || n.call(this, l, f, c);
      var d = r.__c.props !== l;
      return m.forEach(function(g) {
        if (g.__N) {
          var u = g.__[0];
          g.__ = g.__N, g.__N = void 0, u !== g.__[0] && (d = !0);
        }
      }), n && n.call(this, l, f, c) || d;
    };
    se.__f = !0;
    var n = se.shouldComponentUpdate, p = se.componentWillUpdate;
    se.componentWillUpdate = function(l, f, c) {
      if (this.__e) {
        var m = n;
        n = void 0, o(l, f, c), n = m;
      }
      p && p.call(this, l, f, c);
    }, se.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Y(t, e) {
  var a = lt(Te++, 3);
  !le.__s && ti(a.__H, e) && (a.__ = t, a.u = e, se.__H.__h.push(a));
}
function te(t) {
  return Ee = 5, we(function() {
    return { current: t };
  }, []);
}
function we(t, e) {
  var a = lt(Te++, 7);
  return ti(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function Q(t, e) {
  return Ee = 8, we(function() {
    return t;
  }, e);
}
function Ai() {
  for (var t; t = ei.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(Oe), t.__H.__h.forEach(et), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], le.__e(e, t.__v);
  }
}
le.__b = function(t) {
  se = null, St && St(t);
}, le.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Lt && Lt(t, e);
}, le.__r = function(t) {
  $t && $t(t), Te = 0;
  var e = (se = t.__c).__H;
  e && (Ge === se ? (e.__h = [], se.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.forEach(Oe), e.__h.forEach(et), e.__h = [], Te = 0)), Ge = se;
}, le.diffed = function(t) {
  It && It(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ei.push(e) !== 1 && Mt === le.requestAnimationFrame || ((Mt = le.requestAnimationFrame) || Li)(Ai)), e.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), Ge = se = null;
}, le.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(Oe), a.__h = a.__h.filter(function(r) {
        return !r.__ || et(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], le.__e(r, a.__v);
    }
  }), Ct && Ct(t, e);
}, le.unmount = function(t) {
  At && At(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.forEach(function(r) {
    try {
      Oe(r);
    } catch (o) {
      e = o;
    }
  }), a.__H = void 0, e && le.__e(e, a.__v));
};
var Tt = typeof requestAnimationFrame == "function";
function Li(t) {
  var e, a = function() {
    clearTimeout(r), Tt && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(a, 100);
  Tt && (e = requestAnimationFrame(a));
}
function Oe(t) {
  var e = se, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), se = e;
}
function et(t) {
  var e = se;
  t.__c = t.__(), se = e;
}
function ti(t, e) {
  return !t || t.length !== e.length || e.some(function(a, r) {
    return a !== t[r];
  });
}
function ii(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function Ti(t, e) {
  const a = t.body;
  if (!a)
    throw new Error("Response body is null");
  const r = a.getReader(), o = new TextDecoder("utf-8");
  let n = "";
  try {
    for (; ; ) {
      const { done: p, value: l } = await r.read();
      if (p)
        break;
      n += o.decode(l, { stream: !0 });
      const f = n.split(/\r?\n/);
      n = f.pop() || "";
      for (const c of f) {
        const m = c.trim();
        if (!(!m || m.startsWith(":")) && m.startsWith("data:")) {
          const d = m.slice(5).trim();
          if (d === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const g = JSON.parse(d);
            if (typeof g == "string")
              e.onChunk(g);
            else if (g && typeof g == "object") {
              (g.chunk || g.token || g.content || g.text) && e.onChunk(g.chunk || g.token || g.content || g.text), g.sources && Array.isArray(g.sources) && e.onSources && e.onSources(g.sources), g.suggestedQuestions && Array.isArray(g.suggestedQuestions) && e.onSuggestedQuestions && e.onSuggestedQuestions(g.suggestedQuestions), e.onConversationId && (g.conversation_id !== void 0 || g.conversationId !== void 0) && e.onConversationId(
                g.conversation_id ?? g.conversationId
              );
              const u = g.ticket_number ?? g.ticketNumber;
              e.onTicketNumber && u !== void 0 && u !== null && String(u).trim() !== "" && String(u).trim() !== "undefined" && String(u).trim() !== "null" && e.onTicketNumber(
                String(u).trim()
              ), e.onActionTrigger && g.triggered_action && typeof g.triggered_action == "object" && e.onActionTrigger(g.triggered_action);
            }
          } catch {
            e.onChunk(d);
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
class ai extends Error {
  constructor(a, r = 60, o) {
    super(a);
    ye(this, "retryAfterSeconds");
    ye(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = r, this.code = o;
  }
}
class ri extends Error {
  constructor(a, r, o, n) {
    super(a);
    ye(this, "status");
    ye(this, "code");
    ye(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = r, this.code = o, this.retryAfterSeconds = n;
  }
}
function Ei(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function Pi(t, e) {
  const a = await t.json().catch(() => null);
  ni(t.status, a, e, t.headers.get("Retry-After"));
}
function ni(t, e, a, r) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, n = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, p = Ei((e == null ? void 0 : e.retry_after) ?? r, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new ai(n, p, o) : new ri(n, t, o, p);
}
function oi(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function pt(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Bi(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return pt(e.of(t));
  } catch {
    return null;
  }
}
function Di() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const r = JSON.parse(a);
        t = oi(
          r.country_code ?? r.countryCode ?? r.visitor_country_code ?? r.visitorCountryCode ?? r.country
        ), e = pt(
          r.country_name ?? r.countryName ?? r.visitor_country_name ?? r.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Bi(t)), { code: t, name: e };
}
const Ui = [
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
], Et = [
  "Razumijem vaše pitanje! Naš AI asistent kontinuirano uči iz baze znanja kako bi vam pružio najtačniji odgovor.",
  "Odlično pitanje. Provjerio sam našu bazu znanja i evo preporučenih informacija za vaš upit.",
  "Drago mi je što mogu pomoći! Ako vam je potrebno detaljnije pojašnjenje ili kontakt sa timom, slobodno javite."
];
async function Fi(t, e) {
  const a = t.toLowerCase(), r = Ui.find(
    (f) => f.keywords.some((c) => a.includes(c))
  ), o = r ? r.reply : `${Et[Math.floor(Math.random() * Et.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, n = r ? r.sources : [], p = r ? r.suggestions : ["Kako funkcionira AI model?", "Mogu li dobiti kontakt podrške?"], l = o.split(" ");
  for (let f = 0; f < l.length; f++) {
    const c = l[f] + (f < l.length - 1 ? " " : "");
    e.onChunk(c), await new Promise((m) => setTimeout(m, 20 + Math.random() * 20));
  }
  e.onSources && n.length > 0 && e.onSources(n), e.onSuggestedQuestions && p.length > 0 && e.onSuggestedQuestions(p), e.onDone && e.onDone();
}
async function Ri(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: r,
    message: o,
    forceNewConversation: n,
    apiUrl: p,
    mockMode: l,
    visitorName: f,
    visitorEmail: c,
    visitorPhone: m,
    visitorCountryCode: d,
    visitorCountryName: g,
    callbacks: u
  } = t;
  if (l || !e || e === "default") {
    await Fi(o, u);
    return;
  }
  const h = (p || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), k = Di(), N = oi(d) ?? k.code ?? void 0, _ = pt(g) ?? k.name ?? void 0, z = `${h}/api/widget/${e}/chat`, C = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, v = await fetch(z, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: C,
      force_new_conversation: n === !0,
      visitor_id: r,
      visitor_name: f || void 0,
      visitor_email: c || void 0,
      visitor_phone: m || void 0,
      visitor_country_code: N,
      visitor_country_name: _
    })
  });
  if (v.ok || await Pi(v, `API greška (${v.status})`), (v.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Ti(v, u);
  else {
    const I = await v.json(), M = I.answer || I.message || "";
    I.conversation_id !== void 0 && u.onConversationId && u.onConversationId(I.conversation_id);
    const A = I.ticket_number ?? I.ticketNumber;
    if (A != null && String(A).trim() !== "" && String(A).trim() !== "undefined" && String(A).trim() !== "null" && u.onTicketNumber && u.onTicketNumber(String(A).trim()), I.triggered_action && u.onActionTrigger && u.onActionTrigger(I.triggered_action), M && M.trim()) {
      const V = M.split(" ");
      for (let O = 0; O < V.length; O++) {
        const F = V[O] + (O < V.length - 1 ? " " : "");
        u.onChunk(F), await new Promise((B) => setTimeout(B, 15));
      }
    }
    u.onDone && u.onDone();
  }
}
async function tt(t) {
  const { widgetId: e, visitorId: a, apiUrl: r, status: o, page: n = 1, perPage: p = 15 } = t, l = (r || "").replace(/\/$/, ""), f = new URLSearchParams({
    visitor_id: a,
    page: String(n),
    per_page: String(p)
  });
  o && f.set("status", o);
  const c = await fetch(`${l}/api/widget/${encodeURIComponent(e)}/tickets?${f}`), m = await c.json().catch(() => null);
  if (!c.ok) throw new Error(m && "error" in m ? m.error : "Tikete nije moguće učitati.");
  const d = (m == null ? void 0 : m.data) || [], g = d.map((k) => ({
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
  })), u = m == null ? void 0 : m.meta, h = (u == null ? void 0 : u.has_more) !== void 0 ? !!u.has_more : d.length >= p;
  return {
    tickets: g,
    hasMore: h,
    total: u == null ? void 0 : u.total,
    currentPage: (u == null ? void 0 : u.current_page) ?? n
  };
}
async function Hi(t, e, a) {
  return (await tt({ widgetId: t, visitorId: e, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function Oi(t, e, a, r, o) {
  const n = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !n)
    return await new Promise((f) => setTimeout(f, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const p = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), l = await fetch(`${p}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!l.ok) {
    const c = (await l.json().catch(() => ({}))).error || (l.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), m = new Error(c);
    throw m.status = l.status, m;
  }
  return await l.json();
}
const Pt = "pitaj_io_visitor_id", Vi = "chat_direkt_visitor_id", qi = "pitaj_io_visitor_meta", Ki = "chat_direkt_visitor_meta";
function si(t) {
  return `pitaj_io_convs_${t}`;
}
function Wi(t) {
  return `chat_direkt_convs_${t}`;
}
function Zi() {
  try {
    let t = localStorage.getItem(Pt) || localStorage.getItem(Vi);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Pt, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Gi = [];
function Yi(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function Qi(t) {
  return t.filter((e) => !Yi(e)).map((e) => {
    const a = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: a };
  });
}
function Bt(t) {
  try {
    const e = localStorage.getItem(si(t)) || localStorage.getItem(Wi(t));
    if (e) {
      const a = JSON.parse(e);
      if (Array.isArray(a))
        return Qi(a);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return Gi;
}
function Ji(t, e) {
  try {
    localStorage.setItem(si(t), JSON.stringify(e));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function Xi(t, e) {
  const [a, r] = T(t), [o, n] = T((e == null ? void 0 : e.startOpen) ?? !1), [p, l] = T((e == null ? void 0 : e.initialScreen) ?? "new-conversation"), [f, c] = T(
    () => Bt(t.companyId)
  ), [m, d] = T(() => {
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const b = Bt(t.companyId);
      return b.length > 0 ? b[0].id : null;
    }
    return null;
  }), [g, u] = T(!1), [h, k] = T(null), [N, _] = T(null), z = te(Zi()), [C, v] = T(() => {
    try {
      const b = localStorage.getItem(qi) || localStorage.getItem(Ki);
      if (b) {
        const y = JSON.parse(b), S = {};
        return typeof y.name == "string" && (S.name = y.name), typeof y.email == "string" && (S.email = y.email), typeof y.phone == "string" && (S.phone = y.phone), S;
      }
    } catch (b) {
      console.warn("[Pitaj.io] Error reading visitor meta", b);
    }
    return {};
  }), s = te(e == null ? void 0 : e.emitEvent);
  s.current = e == null ? void 0 : e.emitEvent;
  const I = te(e == null ? void 0 : e.onActionTrigger);
  I.current = e == null ? void 0 : e.onActionTrigger;
  const M = Q((b, y) => {
    const S = Number.isFinite(b) ? Math.max(1, Math.floor(b)) : 60;
    k((R) => R === null ? S : Math.max(R, S)), _(y || `Previše zahtjeva. Molimo sačekajte ${S}s.`);
  }, []), A = Q((b) => {
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
    var R, E, L, W;
    if (b instanceof ai) {
      M(b.retryAfterSeconds, b.message), (R = s.current) == null || R.call(s, "error_occurred", { code: b.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (b instanceof ri) {
      if (b.code === "COUNTRY_BLOCKED") {
        r((D) => ({ ...D, chatAvailable: !1 })), _(b.message || "Pristup nije dozvoljen u vašoj regiji."), (E = s.current) == null || E.call(s, "error_occurred", { status: b.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      A(b.code), _(b.message || y), (L = s.current) == null || L.call(s, "error_occurred", { status: b.status, code: b.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let S = b instanceof Error ? b.message : y;
    !S || S === "Failed to fetch" || S.includes("NetworkError") ? S = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : S.includes("404") ? S = "Traženi razgovor ili podaci nisu pronađeni." : (S.includes("500") || S.includes("502") || S.includes("503")) && (S = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), _(S || y), (W = s.current) == null || W.call(s, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [M, A]);
  Y(() => {
    Ji(a.companyId, f);
  }, [f, a.companyId]), Y(() => {
    if (h === null || h <= 0) return;
    const b = setInterval(() => {
      k((y) => y && y > 1 ? y - 1 : null);
    }, 1e3);
    return () => clearInterval(b);
  }, [h]), Y(() => {
    if (!a.companyId || a.mockMode) return;
    let b = !0;
    return Hi(a.companyId, z.current, a.apiUrl).then((y) => {
      !b || !y || y.length === 0 || c((S) => {
        let R = !1;
        const E = S.map((L) => {
          const W = y.find((D) => String(D.id) === L.id);
          return W && W.ticketNumber && L.ticketNumber !== W.ticketNumber ? (R = !0, { ...L, ticketNumber: W.ticketNumber }) : L;
        });
        return R ? E : S;
      });
    }).catch(() => {
    }), () => {
      b = !1;
    };
  }, [a.companyId, a.apiUrl, a.mockMode]);
  const O = f.find((b) => b.id === m) || null, F = f.reduce((b, y) => b + (y.unread || 0), 0), B = Q((b) => {
    n((y) => {
      var S;
      return y === b ? y : ((S = s.current) == null || S.call(s, b ? "widget_opened" : "widget_closed"), b);
    });
  }, []), ee = Q((b) => {
    l((y) => {
      var S;
      return y === b ? y : ((S = s.current) == null || S.call(s, "screen_changed", { screen: b }), b);
    });
  }, []), ae = Q((b) => {
    var y;
    d(b.id), c((S) => S.some((E) => E.id === b.id) ? S.map((E) => E.id === b.id ? { ...E, ...b, unread: 0, status: b.status || "active" } : E) : [{ ...b, unread: 0, status: b.status || "active" }, ...S]), l("conversation"), (y = s.current) == null || y.call(s, "conversation_selected", { conversationId: b.id });
  }, []), pe = Q(() => {
    var b;
    c(
      (y) => y.map((S) => S.id === m ? { ...S, status: "ended" } : S)
    ), d(null), l("new-conversation"), (b = s.current) == null || b.call(s, "conversation_ended", { conversationId: m });
  }, [m]), re = Q((b) => {
    c((y) => y.filter((S) => S.id !== b)), d((y) => y === b ? null : y), m === b && l("new-conversation");
  }, [m]), G = Q((b) => {
    var L;
    if (a.chatAvailable === !1) {
      _("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (h !== null) {
      _(`Previše zahtjeva. Molimo sačekajte ${h}s.`);
      return;
    }
    const y = "conv-" + Date.now(), S = (/* @__PURE__ */ new Date()).toISOString(), R = b ? b.length > 40 ? b.slice(0, 40) + "…" : b : "Novo ćaskanje", E = {
      id: y,
      title: R,
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
    c((W) => [E, ...W]), d(y), l("conversation"), (L = s.current) == null || L.call(s, "conversation_started", { conversationId: y, initialMessage: b }), b && $(y, b, [E.messages[0]], !0);
  }, [a.apiUrl, a.chatAvailable, a.companyId, a.mockMode, h, C]), $ = async (b, y, S, R = !1) => {
    var W;
    u(!0), _(null);
    const E = "ai-msg-" + Date.now(), L = {
      id: E,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    c(
      (D) => D.map((Z) => Z.id !== b ? Z : {
        ...Z,
        preview: y,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...Z.messages.filter((U) => U.id !== E), L]
      })
    ), (W = s.current) == null || W.call(s, "stream_started", { conversationId: b });
    try {
      await Ri({
        companyId: a.companyId,
        conversationId: b,
        visitorId: z.current,
        message: y,
        forceNewConversation: R || b.startsWith("conv-"),
        apiUrl: a.apiUrl,
        mockMode: a.mockMode,
        visitorName: C.name,
        visitorEmail: C.email,
        visitorPhone: C.phone,
        callbacks: {
          onConversationId: (D) => {
            const Z = b, U = String(D);
            b = U, d(U), c(
              (ce) => ce.map((K) => K.id === Z || K.messages.some((me) => me.id === E) ? { ...K, id: U } : K)
            );
          },
          onTicketNumber: (D) => {
            const Z = D && String(D).trim() !== "" && String(D).trim() !== "undefined" && String(D).trim() !== "null" ? String(D).trim() : null;
            Z && c(
              (U) => U.map((ce) => ce.id === b || ce.messages.some((me) => me.id === E) ? { ...ce, ticketNumber: Z } : ce)
            );
          },
          onActionTrigger: (D) => {
            var U;
            const Z = D.widget || D.triggered_widget || (D.widget_id && a.widgets ? a.widgets.find((ce) => ce.id === D.widget_id) : null) || null;
            Z && c(
              (ce) => ce.map((K) => K.id === b || K.messages.some((he) => he.id === E) ? {
                ...K,
                messages: K.messages.map(
                  (he) => he.id === E ? { ...he, widget: Z } : he
                )
              } : K)
            ), (U = I.current) == null || U.call(I, D);
          },
          onChunk: (D) => {
            c(
              (Z) => Z.map((U) => U.id === b || U.messages.some((K) => K.id === E) ? {
                ...U,
                messages: U.messages.map(
                  (K) => K.id === E ? { ...K, content: K.content + D } : K
                )
              } : U)
            );
          },
          onSources: (D) => {
            c(
              (Z) => Z.map((U) => U.id === b || U.messages.some((K) => K.id === E) ? {
                ...U,
                messages: U.messages.map(
                  (K) => K.id === E ? { ...K, sources: D } : K
                )
              } : U)
            );
          },
          onSuggestedQuestions: (D) => {
            c(
              (Z) => Z.map((U) => U.id === b || U.messages.some((K) => K.id === E) ? {
                ...U,
                messages: U.messages.map(
                  (K) => K.id === E ? { ...K, suggestedQuestions: D } : K
                )
              } : U)
            );
          },
          onDone: () => {
            var D;
            c(
              (Z) => Z.map((U) => {
                var Me, Se;
                if (!(U.id === b || U.messages.some((fe) => fe.id === E))) return U;
                const K = U.messages.find((fe) => fe.id === E), me = (Me = K == null ? void 0 : K.widget) == null ? void 0 : Me.name, he = (Se = K == null ? void 0 : K.content) == null ? void 0 : Se.trim(), Ze = he ? he.slice(0, 70) : me ? `[${me}]` : U.preview;
                return {
                  ...U,
                  preview: Ze,
                  messages: U.messages.map(
                    (fe) => fe.id === E ? { ...fe, isStreaming: !1 } : fe
                  )
                };
              })
            ), u(!1), (D = s.current) == null || D.call(s, "stream_completed", { conversationId: b });
          },
          onError: (D) => {
            console.error("[Pitaj.io] Stream error:", D), _(D.message || "Došlo je do greške u komunikaciji."), u(!1);
          }
        }
      });
    } catch (D) {
      u(!1), V(D, "Greška pri slanju poruke.");
    }
  }, H = Q((b) => {
    var E;
    const y = b.trim();
    if (!y || g || a.chatAvailable === !1 || h !== null) return;
    if (!m) {
      G(y);
      return;
    }
    const R = {
      id: "usr-msg-" + Date.now(),
      content: y,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    c(
      (L) => L.map((W) => W.id !== m ? W : {
        ...W,
        preview: y,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...W.messages, R]
      })
    ), (E = s.current) == null || E.call(s, "message_sent", { conversationId: m, content: y }), $(m, y, O ? O.messages : []);
  }, [m, g, G, O, a.chatAvailable, a.companyId, a.apiUrl, a.mockMode, h]), J = Q(
    async (b, y, S) => {
      var R;
      if (!a.mockMode)
        try {
          await Oi(
            a.companyId,
            b,
            y,
            a.apiUrl,
            a.mockMode
          );
        } catch (E) {
          console.error("[Pitaj.io] Failed to submit rating:", E);
          const L = (E == null ? void 0 : E.status) === 404 ? "Razgovor ili tiket više nije dostupan." : E != null && E.message && !E.message.includes("failed") && !E.message.includes("404") ? E.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(L);
        }
      c(
        (E) => E.map(
          (L) => L.id === b ? { ...L, satisfaction: y, ratingScore: S ?? L.ratingScore } : L
        )
      ), (R = s.current) == null || R.call(s, "rating_submitted", {
        conversationId: b,
        satisfaction: y,
        score: S
      });
    },
    [a.companyId, a.apiUrl, a.mockMode]
  ), q = Q(
    (b, y, S = "user") => {
      const R = y.trim();
      if (!R) return;
      const E = (/* @__PURE__ */ new Date()).toISOString(), L = `conv-${Date.now()}`, W = typeof b == "string" && b.trim().length > 0 ? b : L, D = {
        id: `local-${S}-msg-${Date.now()}`,
        content: R,
        sender: S,
        timestamp: E,
        status: "sent"
      };
      c(
        (Z) => Z.some((U) => U.id === W) ? Z.map((U) => U.id !== W ? U : {
          ...U,
          preview: R.length > 70 ? `${R.slice(0, 70)}…` : R,
          timestamp: E,
          messages: [...U.messages, D]
        }) : [
          {
            id: W,
            title: "Forma",
            preview: R.length > 70 ? `${R.slice(0, 70)}…` : R,
            timestamp: E,
            unread: 0,
            messages: [D],
            status: "active"
          },
          ...Z
        ]
      ), d(W), l("conversation");
    },
    []
  ), j = (b) => {
    var y;
    return !!((y = b.messages) != null && y.some((S) => S.sender === "ai"));
  };
  return {
    config: a,
    setConfig: r,
    isOpen: o,
    setIsOpen: B,
    screen: p,
    setScreen: ee,
    conversations: f,
    activeConversation: O,
    activeConversationId: m,
    visitorContact: C,
    visitorId: z.current,
    activeConversationHasReply: O ? j(O) : !1,
    totalUnread: F,
    isStreaming: g,
    rateLimitTimer: h,
    errorBanner: N,
    setErrorBanner: _,
    selectConversation: ae,
    startNewConversation: G,
    endConversation: pe,
    deleteConversation: re,
    sendUserMessage: H,
    submitSatisfaction: J,
    appendConversationMessage: q,
    handleApiError: V
  };
}
let Ye = null, li = null;
function Dt(t, e) {
  e === null && t !== null && Ye !== null && Ye !== t || (Ye = e ? t : null, li = e);
}
function ve() {
  return li;
}
function pi(t, e) {
  let a = null;
  const r = () => a || (a = t().then((o) => {
    const n = e ? e(o) : o.default;
    if (!n)
      throw new Error("Lazy component not found");
    return n;
  }));
  return function(n) {
    const [p, l] = T(null);
    return Y(() => {
      let f = !0;
      return r().then((c) => {
        f && l(() => c);
      }).catch((c) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", c);
      }), () => {
        f = !1;
      };
    }, []), p ? /* @__PURE__ */ i(p, { ...n }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function ea({ size: t = 16, className: e = "" }) {
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
function ta({ size: t = 16, className: e = "" }) {
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
function ia({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function Mr({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function je({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function aa({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function ra({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function di({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function na({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function oa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function sa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function la({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function pa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function ui({ size: t = 16, className: e = "" }) {
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
function mi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ i("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ i("path", { d: "M10 9H8" }),
    /* @__PURE__ */ i("path", { d: "M16 13H8" }),
    /* @__PURE__ */ i("path", { d: "M16 17H8" })
  ] });
}
function da({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M7 10v12" }),
    /* @__PURE__ */ i("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function ua({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M17 14V2" }),
    /* @__PURE__ */ i("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function hi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function ma({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function Sr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function $r({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function Ir({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function Cr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function Ar({ size: t = 16, className: e = "" }) {
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
function ga({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function ba({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function xa({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function ja({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function va({ size: t = 14, className: e = "" }) {
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
function wa({ size: t = 14, className: e = "" }) {
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
function ya({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function ka({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function _a({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function Na({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function za({ size: t = 24, className: e = "" }) {
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
function Ma({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Sa({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function $a({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function Ia({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function We({ size: t = 13, className: e = "" }) {
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
function Ca({ size: t = 16, className: e = "" }) {
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
function Aa({
  screen: t,
  activeConversation: e,
  config: a,
  onBack: r,
  onClose: o,
  onNewConversation: n,
  onEndConversation: p,
  onDeleteConversation: l,
  onViewHistory: f,
  onViewTickets: c
}) {
  var C;
  const [m, d] = T(!1), g = te(null), u = t === "conversation" && e, N = u || t === "history" || t === "tickets", _ = a.title || a.name || "Pitaj.io Asistent";
  Y(() => {
    var I;
    const v = (M) => {
      var V, O;
      const A = ((O = (V = M.composedPath) == null ? void 0 : V.call(M)) == null ? void 0 : O[0]) || M.target;
      g.current && A && !g.current.contains(A) && d(!1);
    };
    document.addEventListener("mousedown", v);
    const s = (I = g.current) == null ? void 0 : I.getRootNode();
    return s instanceof ShadowRoot && s.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v), s instanceof ShadowRoot && s.removeEventListener("mousedown", v);
    };
  }, []), Y(() => {
    d(!1);
  }, [t]);
  const z = (v) => {
    d(!1), v == null || v();
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
          children: /* @__PURE__ */ i(ta, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((C = a.content) == null ? void 0 : C.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(We, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: _ }),
        u && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: g, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => d((v) => !v),
            className: `pitaj-icon-btn ${m ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": m,
            title: "Meni",
            children: /* @__PURE__ */ i(aa, { size: 18 })
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
                /* @__PURE__ */ i(ra, { size: 15, className: "pitaj-menu-item-icon" }),
                "Nova konverzacija"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !u,
              onClick: () => z(p),
              children: [
                /* @__PURE__ */ i(oa, { size: 15, className: "pitaj-menu-item-icon" }),
                "Završi konverzaciju"
              ]
            }
          ),
          l && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !u,
              onClick: () => z(l),
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
                /* @__PURE__ */ i(sa, { size: 15, className: "pitaj-menu-item-icon" }),
                "Pogledaj prethodne"
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => z(c), children: [
            /* @__PURE__ */ i(pa, { size: 15, className: "pitaj-menu-item-icon" }),
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
function La({ content: t }) {
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
      const f = p.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: Qe(f) }) }, `ul-${n}`)
      );
      continue;
    }
    const l = p.trim().match(/^(\d+)\.\s+(.*)/);
    if (l) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(l[1], 10), children: /* @__PURE__ */ i("li", { children: Qe(l[2]) }) }, `ol-${n}`)
      );
      continue;
    }
    if (!p.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${n}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: Qe(p) }, `p-${n}`));
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
    o.index > a && e.push(...Ut(t.slice(a, o.index)));
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
      const p = n.slice(1, n.indexOf("](")), l = n.slice(n.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: l, target: "_blank", rel: "noopener noreferrer", children: p }, `a-${o.index}`)
      );
    }
    a = o.index + n.length;
  }
  return a < t.length && e.push(...Ut(t.slice(a))), e;
}
const Ta = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Ea = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, Pa = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), Ba = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Ut(t) {
  const e = [];
  let a;
  for (; (a = Ta.exec(t)) !== null; ) {
    const n = a[0].replace(/[.,;:!?]+$/, "");
    n && e.push({
      start: a.index,
      end: a.index + n.length,
      href: n.startsWith("www.") ? `https://${n}` : n,
      external: !0
    });
  }
  for (; (a = Ea.exec(t)) !== null; )
    e.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = Pa.exec(t)) !== null; ) {
    const n = a[0];
    Ba.test(n) || e.push({
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
function it(t) {
  return (t || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function Da(t) {
  const e = it(t).toLowerCase();
  return e.includes("wi-fi") || e.includes("wifi") || e.includes("internet") ? fa : e.includes("doručak") || e.includes("dorucak") || e.includes("kafa") || e.includes("coffee") ? ga : e.includes("restoran") || e.includes("hrana") || e.includes("dining") ? ba : e.includes("parking") || e.includes("garaža") || e.includes("garaza") || e.includes("auto") ? xa : e.includes("spa") || e.includes("bazen") || e.includes("wellness") ? ja : e.includes("klima") || e.includes("hlađenje") || e.includes("hladjenje") ? va : e.includes("teretana") || e.includes("fitness") || e.includes("gym") ? wa : ya;
}
function Ua({ widget: t, onAction: e }) {
  const a = t.type || "custom_html", r = t.config || {};
  if (r.jsx_template || a === "dynamic_jsx" || a === "ai_builder")
    return /* @__PURE__ */ i(Ya, { config: r, onAction: e });
  switch (a) {
    case "book_demo":
      return /* @__PURE__ */ i(Fa, { config: r, onAction: e });
    case "products":
      return /* @__PURE__ */ i(Ra, { config: r, onAction: e });
    case "cart":
      return /* @__PURE__ */ i(Ha, { config: r, onAction: e });
    case "usage_chart":
      return /* @__PURE__ */ i(Oa, { config: r });
    case "upcoming_classes":
      return /* @__PURE__ */ i(Va, { config: r, onAction: e });
    case "hotel_booking":
      return /* @__PURE__ */ i(qa, { config: r, onAction: e });
    case "contact":
      return /* @__PURE__ */ i(Ka, { config: r, onAction: e });
    case "weather":
      return /* @__PURE__ */ i(Wa, { config: r });
    case "custom_iframe":
      return /* @__PURE__ */ i(Za, { config: r, title: t.name });
    case "custom_html":
    default:
      return /* @__PURE__ */ i(Ga, { config: r, onAction: e });
  }
}
function ct({
  fields: t,
  values: e,
  onChange: a
}) {
  return /* @__PURE__ */ i(ue, { children: t.map((r, o) => {
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
              (r.options || []).map((c, m) => /* @__PURE__ */ i("option", { value: c, children: c }, m))
            ]
          }
        )
      ] }, p);
    const l = r.type === "phone" ? "tel" : r.type === "email" ? "email" : r.type === "date" ? "date" : r.type === "number" ? "number" : "text";
    let f;
    if (r.type === "date") {
      const c = p.toLowerCase();
      if (c.includes("out") || c.includes("odjav") || c.includes("end") || c.includes("do")) {
        const m = e.check_in || e.start || e.od;
        m && typeof m == "string" && (f = m);
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
          type: l,
          required: r.required,
          placeholder: r.placeholder || "",
          min: f,
          value: n,
          onInput: (c) => a(p, c.target.value)
        }
      )
    ] }, p);
  }) });
}
function Fa({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, n] = T({}), [p, l] = T(!1), f = t.title || "Razgovarajte sa prodajom", c = t.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.", m = (g, u) => {
    n((h) => ({ ...h, [g]: u }));
  }, d = (g) => {
    g.preventDefault();
    for (const h of r)
      if (h.required) {
        const k = o[h.key];
        if (h.type === "checkbox" && !k || h.type !== "checkbox" && (!k || !String(k).trim())) return;
      }
    l(!0);
    const u = r.filter((h) => o[h.key] !== void 0 && o[h.key] !== "").map((h) => `- ${h.label}: ${h.type === "checkbox" ? "Da" : o[h.key]}`);
    e == null || e(`Forma: ${f}
${u.join(`
`)}`);
  };
  if (p) {
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
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: c })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: d, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(ct, { fields: r, values: o, onChange: m }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function Ra({ config: t, onAction: e }) {
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
  ], n = Array.isArray(t.products) && t.products.length > 0 ? t.products : o, p = n[a] || n[0], l = () => {
    r((m) => (m + 1) % n.length);
  }, f = () => {
    r((m) => (m - 1 + n.length) % n.length);
  }, c = () => {
    e == null || e(`Zanima me proizvod: ${p.name} (${p.price})`);
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card products-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ka, { size: 14 }) }),
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
          /* @__PURE__ */ i("button", { type: "button", onClick: f, "aria-label": "Prethodni", className: "pitaj-carousel-btn", children: "‹" }),
          /* @__PURE__ */ i("button", { type: "button", onClick: l, "aria-label": "Sljedeći", className: "pitaj-carousel-btn", children: "›" })
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
function Ha({ config: t, onAction: e }) {
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
  ], n = Array.isArray(t.items) && t.items.length > 0 ? t.items : o, p = t.total || "40.90 KM", l = () => {
    r(!0), e == null || e(`Želim dovršiti narudžbu iz korpe (Ukupno: ${p})`);
  };
  return a ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Narudžba je potvrđena!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Iznos od ",
      p,
      " je uspješno obrađen. Detalji su poslani."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(_a, { size: 14 }) }),
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
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-val", children: p })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-payment", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-pay-label", children: "Plaćanje karticom" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-card-pill", children: [
        /* @__PURE__ */ i(Ma, { size: 12, className: "pitaj-pill-icon" }),
        /* @__PURE__ */ i("span", { children: "•• 2683" })
      ] })
    ] }),
    /* @__PURE__ */ i("button", { type: "button", onClick: l, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function Oa({ config: t }) {
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
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(Na, { size: 14 }) }),
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
function Va({ config: t, onAction: e }) {
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
  ], n = Array.isArray(t.classes) && t.classes.length > 0 ? t.classes : o, p = (l, f) => {
    const c = l.id ?? f;
    a.includes(c) || (r((m) => [...m, c]), e == null || e(`Želim rezervisati termin za: ${l.title} (${l.time})`));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ma, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-classes-list", children: n.map((l, f) => {
      const c = l.id ?? f, m = a.includes(c);
      return /* @__PURE__ */ i("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ i("img", { src: l.image, alt: l.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ i("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-class-title", children: l.title }),
            l.level && /* @__PURE__ */ i("span", { className: `pitaj-level-badge level-${l.levelColor || "green"}`, children: l.level })
          ] }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-time", children: l.time }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-instructor", children: l.instructor })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => p(l, f),
            className: `pitaj-book-btn ${m ? "is-booked" : ""}`,
            children: m ? "Rezervisano" : "Rezerviši"
          }
        )
      ] }, c);
    }) })
  ] });
}
function qa({ config: t, onAction: e }) {
  const [a, r] = T({}), [o, n] = T(!1), p = t.name || "Hotel Dark Moon", l = t.price || "220 KM / noć", f = t.location || "Sarajevo, Bosna i Hercegovina", c = t.rating || "4.8 (124 recenzije)", m = t.image || "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80", d = ["Wi-Fi", "Doručak", "Restoran", "Parking", "Spa & Bazen"], u = (Array.isArray(t.amenities) && t.amenities.length > 0 ? t.amenities : d).map(it), h = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], k = Array.isArray(t.fields) ? t.fields : h, N = (z, C) => {
    r((v) => ({ ...v, [z]: C }));
  }, _ = (z) => {
    if (z.preventDefault(), k.length > 0) {
      for (const v of k)
        if (v.required) {
          const s = a[v.key];
          if (v.type === "checkbox" && !s || v.type !== "checkbox" && (!s || !String(s).trim())) return;
        }
    }
    n(!0);
    const C = { ...a };
    if (C.check_in && C.check_out && C.check_out < C.check_in) {
      const v = C.check_in;
      C.check_in = C.check_out, C.check_out = v;
    }
    if (k.length > 0) {
      const v = k.filter((s) => C[s.key] !== void 0 && C[s.key] !== "").map((s) => `- ${s.label}: ${s.type === "checkbox" ? "Da" : C[s.key]}`);
      e == null || e(`Forma: Rezervacija smještaja - ${p}
${v.join(`
`)}`);
    } else
      e == null || e(`Forma: Rezervacija smještaja - ${p}
- Cijena: ${l}
- Lokacija: ${f}`);
  };
  return o ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za rezervaciju je poslan!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Uspješno ste poslali upit za ",
      p,
      ". Naše osoblje će vam se javiti za potvrdu termina."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-image-wrap", children: [
      /* @__PURE__ */ i("img", { src: m, alt: p, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-badge-price", children: l })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ i("div", { className: "pitaj-hotel-name", children: p }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ i(Sa, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ i("span", { children: f })
        ] }),
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ i($a, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ i("span", { children: c })
        ] })
      ] }),
      u.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-amenities-row", children: u.map((z, C) => {
        const v = it(z), s = Da(v);
        return /* @__PURE__ */ i("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ i(s, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ i("span", { children: v })
        ] }, C);
      }) }),
      /* @__PURE__ */ i("form", { onSubmit: _, className: "pitaj-widget-form", children: [
        k.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ i(ct, { fields: k, values: a, onChange: N })
        ] }),
        /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || (k.length > 0 ? "Pošalji upit za rezervaciju" : "Rezerviši sobu") })
      ] })
    ] })
  ] });
}
function Ka({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, n] = T({}), [p, l] = T(!1), f = t.title || "Kontaktirajte nas", c = t.subtitle || "Rado ćemo odgovoriti na vaša pitanja", m = (g, u) => {
    n((h) => ({ ...h, [g]: u }));
  }, d = (g) => {
    g.preventDefault();
    for (const h of r)
      if (h.required) {
        const k = o[h.key];
        if (h.type === "checkbox" && !k || h.type !== "checkbox" && (!k || !String(k).trim())) return;
      }
    l(!0);
    const u = r.filter((h) => o[h.key] !== void 0 && o[h.key] !== "").map((h) => `- ${h.label}: ${h.type === "checkbox" ? "Da" : o[h.key]}`);
    e == null || e(`Forma: ${f}
${u.join(`
`)}`);
  };
  return p ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(je, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Poruka je poslana!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: "Hvala vam na javljanju. Odgovorit ćemo vam uskoro." })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: f }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: c })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: d, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(ct, { fields: r, values: o, onChange: m }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function Wa({ config: t }) {
  const e = t.city || "Sarajevo", a = t.temp || "22°C", r = t.condition || "Sunčano i toplo", o = t.description || "Pretežno sunčano vrijeme uz blagi povjetarac tokom popodneva.";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ i(za, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ i("span", { className: "pitaj-weather-temp", children: a })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-city", children: e }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-cond", children: r }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-desc", children: o })
  ] });
}
function Za({ config: t, title: e }) {
  const [a, r] = T(!0), o = t.url || "https://calendly.com", n = t.height || 380;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(Ia, { size: 14 }) }),
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
function Ga({ config: t, onAction: e }) {
  const a = t.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', r = t.css || "";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (n) => {
    var l;
    const p = (l = n.target) == null ? void 0 : l.closest("[data-chat-action]");
    if (p) {
      const f = p.getAttribute("data-chat-action");
      f && (n.preventDefault(), e == null || e(f));
    }
  }, children: [
    r && /* @__PURE__ */ i("style", { children: r }),
    /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: a } })
  ] });
}
function Ya({ config: t, onAction: e }) {
  const a = t.jsx_template || "", r = t.default_data || t.data || {}, o = we(() => {
    if (!a) return "";
    try {
      let l = a;
      const f = /\{(\w+)\.map\(\((\w+)\)\s*=>\s*\(([\s\S]*?)\)\)\}/g;
      l = l.replace(f, (m, d, g, u) => {
        const h = r[d];
        return Array.isArray(h) ? h.map((k) => {
          let N = u;
          return Object.keys(k).forEach((_) => {
            const z = k[_], C = new RegExp(
              `${g}\\.${_}\\s*\\?\\s*["']([^"']*)["']\\s*:\\s*["']([^"']*)["']`,
              "g"
            );
            N = N.replace(C, z ? "$1" : "$2");
            const v = new RegExp(`\\{?${g}\\.${_}\\}?`, "g");
            N = N.replace(v, String(z ?? ""));
          }), N;
        }).join("") : "";
      }), Object.keys(r).forEach((m) => {
        const d = r[m];
        if (typeof d == "string" || typeof d == "number") {
          const g = new RegExp(`\\{${m}\\}`, "g");
          l = l.replace(g, String(d));
        }
      });
      const c = (m, d) => {
        const g = m.match(new RegExp(`${d}=(?:["']([^"']*)["']|\\{([^}]+)\\})`, "i"));
        return (g ? g[1] ?? g[2] ?? "" : "").trim();
      };
      return l = l.replace(
        /<Card([^>]*)status=\{\{\s*text:\s*([^,\}]+),\s*icon:\s*["']([^"']+)["']\s*\}\}([^>]*)>/gi,
        (m, d, g, u, h) => {
          const k = c(m, "background"), N = k ? `background: ${k};` : "", _ = (g || "").replace(/^["']|["']$/g, "").trim(), z = _ && _.toLowerCase() !== "prompt" && _ !== "{prompt}";
          let C = "";
          if (z) {
            const s = {
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
            }[u] || "";
            C = `<div style="font-size: 11px; color: #64748b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">${s ? `<span>${s}</span>` : ""} ${_}</div>`;
          }
          return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${N}">${C}`;
        }
      ).replace(/<Card([^>]*)>/gi, (m) => {
        const d = c(m, "background");
        return `<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px; ${d ? `background: ${d};` : ""}">`;
      }).replace(/<\/Card>/gi, "</div>").replace(
        /<Row[^>]*justify=["']between["'][^>]*align=["']start["'][^>]*>/gi,
        '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">'
      ).replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*align=["']start["'][^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: flex-start;">').replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: center;">').replace(/<Row[^>]*>/gi, '<div style="display: flex; gap: 8px; align-items: center;">').replace(/<\/Row>/gi, "</div>").replace(/<Col[^>]*flex=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; flex: $1;">').replace(/<Col[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: $1px;">').replace(/<Col[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: 4px;">').replace(/<\/Col>/gi, "</div>").replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*weight=["']bold["'][^>]*\/>/gi, '<h4 style="font-size: 15px; font-weight: 700; margin: 0; line-height: 1.2;">$1</h4>').replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<h4 style="font-size: 14px; font-weight: 600; margin: 0;">$1</h4>').replace(/<Caption[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="font-size: 11px; color: #64748b; margin-top: 2px;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["']success["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dcfce7; color: #166534;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:warning|amber)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fef3c7; color: #92400e;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:error|danger|destructive|red)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fee2e2; color: #991b1b;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:purple|brand)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f3e8ff; color: #6b21a8;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:info|blue)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dbeafe; color: #1e40af;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f1f5f9; color: #475569;">$1</span>').replace(/<Divider[^>]*flush[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px -14px;" />').replace(/<Divider[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px 0;" />').replace(/<Image([^>]*)\/>/gi, (m) => {
        const d = c(m, "src"), g = c(m, "alt"), u = c(m, "height") || "120px", h = c(m, "radius") === "sm" ? "6px" : "10px";
        return `<img src="${d}" alt="${g}" style="width: 100%; height: ${u === "100%" ? "120px" : u}; object-fit: cover; border-radius: ${h}; margin: 4px 0;" />`;
      }).replace(/<Avatar([^>]*)\/>/gi, (m) => {
        const d = c(m, "src"), g = c(m, "name"), u = c(m, "size") === "lg" ? "40px" : "32px";
        if (d)
          return `<img src="${d}" alt="${g}" style="width: ${u}; height: ${u}; border-radius: var(--pitaj-radius-avatar, 9999px); object-fit: cover; flex-shrink: 0;" />`;
        const h = g ? g.charAt(0).toUpperCase() : "U";
        return `<div style="width: ${u}; height: ${u}; border-radius: var(--pitaj-radius-avatar, 9999px); background: #e2e8f0; color: #334155; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0;">${h}</div>`;
      }).replace(/<Input([^>]*)\/>/gi, (m) => {
        const d = c(m, "label"), g = c(m, "placeholder"), u = c(m, "value"), h = c(m, "type") || "text";
        return h === "textarea" ? `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${d}</label><textarea placeholder="${g}" rows="2" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box; resize: vertical;">${u}</textarea></div>` : `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${d}</label><input type="${h}" placeholder="${g}" value="${u}" style="border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-input, 8px); padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box;" /></div>`;
      }).replace(/<BarChart[^>]*\/>/gi, () => {
        const m = Array.isArray(r.bars) ? r.bars : [];
        if (m.length > 0) {
          const d = Math.max(...m.map((u) => Number(u.value || 0)), 1);
          return `<div style="display: flex; gap: 6px; width: 100%; padding: 8px 0; align-items: flex-end;">${m.map(
            (u) => `<div style="display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1;"><div style="width: 100%; background: #e2e8f0; height: 70px; border-radius: 4px; display: flex; align-items: flex-end; overflow: hidden;"><div style="width: 100%; height: ${Math.round(
              Number(u.value || 0) / d * 100
            )}%; background: var(--pitaj-accent, #2563eb); border-radius: 4px 4px 0 0;"></div></div><span style="font-size: 10px; color: #64748b;">${u.label || ""}</span></div>`
          ).join("")}</div>`;
        }
        return '<div style="padding: 12px; text-align: center; color: #94a3b8; font-size: 11px;">Grafikon</div>';
      }).replace(/<Timeline[^>]*\/>/gi, () => {
        const m = Array.isArray(r.timeline) ? r.timeline : Array.isArray(r.items) ? r.items : [];
        return !m || m.length === 0 ? "" : '<div style="display: flex; flex-direction: column; width: 100%; padding: 4px 0;">' + m.map((d, g) => {
          const u = g === m.length - 1, h = !!(d.complete || d.completed), k = !!d.current;
          return `<div style="display: flex; align-items: flex-start; gap: 10px; position: relative;"><div style="display: flex; flex-direction: column; align-items: center; align-self: stretch;"><div style="width: 22px; height: 22px; border-radius: 9999px; background: ${h ? "#dcfce7" : k ? "#e0f2fe" : "#f1f5f9"}; color: ${h ? "#166534" : k ? "#0369a1" : "#94a3b8"}; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; flex-shrink: 0;">${h ? "✓" : k ? "●" : "○"}</div>${u ? "" : `<div style="width: 2px; flex: 1; background: ${h ? "#86efac" : "#e2e8f0"}; margin: 2px 0; min-height: 18px;"></div>`}</div><div style="display: flex; flex-direction: column; flex: 1; min-width: 0; padding-bottom: ${u ? "2px" : "12px"};"><span style="font-size: 12px; font-weight: ${k ? "600" : "500"}; color: #0f172a;">${d.label || ""}</span>${d.detail ? `<span style="font-size: 11px; color: #64748b; margin-top: 2px;">${d.detail}</span>` : ""}</div></div>`;
        }).join("") + "</div>";
      }).replace(
        /<Box[^>]*background=["']green-100["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #dcfce7; color: #166534; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(
        /<Box[^>]*background=["']surface-secondary["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #f1f5f9; color: #94a3b8; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(/<Box([^>]*)>/gi, (m) => {
        const d = c(m, "background"), g = c(m, "radius"), u = c(m, "padding"), h = [];
        return d === "surface-secondary" || d === "muted" ? h.push("background: #f1f5f9") : d && h.push(`background: ${d}`), g === "full" ? h.push("border-radius: 9999px") : g && h.push(`border-radius: ${g === "md" ? "8px" : "4px"}`), u && h.push(`padding: ${u}px`), `<div style="${h.join("; ")}; display: flex; align-items: center; justify-content: center;">`;
      }).replace(/<\/Box>/gi, "</div>").replace(/<Icon[^>]*name=["'](?:check|check-circle)["'][^>]*\/>/gi, "✓").replace(/<Icon[^>]*name=["'](?:clock|time)["'][^>]*\/>/gi, "⏱").replace(/<Icon[^>]*name=["'](?:package|box)["'][^>]*\/>/gi, "📦").replace(/<Icon[^>]*name=["']star["'][^>]*\/>/gi, "⭐").replace(/<Icon[^>]*name=["'](?:map-pin|location)["'][^>]*\/>/gi, "📍").replace(/<Icon[^>]*name=["']calendar["'][^>]*\/>/gi, "📅").replace(/<Icon[^>]*name=["'](?:shopping-bag|shopping-cart|cart)["'][^>]*\/>/gi, "🛍️").replace(/<Icon[^>]*name=["']user["'][^>]*\/>/gi, "👤").replace(/<Icon[^>]*name=["']mail["'][^>]*\/>/gi, "✉️").replace(/<Icon[^>]*name=["']phone["'][^>]*\/>/gi, "📞").replace(/<Icon[^>]*name=["'](?:truck|delivery)["'][^>]*\/>/gi, "🚚").replace(/<Icon[^>]*name=["']credit-card["'][^>]*\/>/gi, "💳").replace(/<Icon[^>]*name=["']sun["'][^>]*\/>/gi, "☀️").replace(/<Icon[^>]*name=["']bell["'][^>]*\/>/gi, "🔔").replace(/<Icon[^>]*name=["'](?:bed|hotel)["'][^>]*\/>/gi, "🏨").replace(/<Icon[^>]*name=["'](?:utensils|dining)["'][^>]*\/>/gi, "🍽️").replace(/<Icon[^>]*name=["']coffee["'][^>]*\/>/gi, "☕").replace(/<Icon[^>]*name=["']wifi["'][^>]*\/>/gi, "📶").replace(/<Icon[^>]*name=["']sparkles["'][^>]*\/>/gi, "✨").replace(/<Icon[^>]*\/>/gi, "•").replace(/<Text[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<p style="font-size: 12px; margin: 0; line-height: 1.3;">$1</p>').replace(/<Button([^>]*)\/>/gi, (m) => {
        const d = c(m, "label") || "Akcija", g = c(m, "action") || d, u = c(m, "variant");
        let h = "background: var(--pitaj-accent, #2563eb); color: white; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;";
        return u === "outline" ? h = "background: transparent; color: #0f172a; border: 1px solid #cbd5e1; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;" : u === "secondary" && (h = "background: #f1f5f9; color: #0f172a; border: none; border-radius: var(--pitaj-radius-btn, 8px); padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;"), `<button type="button" data-chat-action="${g}" style="${h}">${d}</button>`;
      }), l;
    } catch {
      return "";
    }
  }, [a, r]), n = (l) => {
    var c;
    const f = (c = l.target) == null ? void 0 : c.closest("[data-chat-action]");
    if (f) {
      const m = f.getAttribute("data-chat-action");
      m && (l.preventDefault(), e == null || e(m));
    }
  }, p = /<Card/i.test(a || "");
  return /* @__PURE__ */ i("div", { className: `dynamic-jsx-widget ${p ? "" : "pitaj-inline-widget-card"}`, onClick: n, children: /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: o } }) });
}
function fi({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: r,
  containerClassName: o,
  revealDelayMs: n = 0,
  staggerMs: p = 140
}) {
  const l = we(() => Array.isArray(t) && t.length > 0 ? t.map((u) => ({
    text: u.text.trim(),
    children: (u.children ?? []).map((h) => h.trim()).filter(Boolean)
  })).filter((u) => u.text !== "") : (e ?? []).map((u) => u.trim()).filter(Boolean).map((u) => ({ text: u, children: [] })), [e, t]), [f, c] = T(null), [m, d] = T(l.length);
  if (Y(() => {
    c(null);
  }, [l]), Y(() => {
    if (f) {
      d(l.length);
      return;
    }
    if (n <= 0) {
      d(l.length);
      return;
    }
    d(0);
    const u = window.setTimeout(() => {
      d(1);
      const h = window.setInterval(() => {
        d((k) => k >= l.length ? (window.clearInterval(h), k) : k + 1);
      }, Math.max(60, p));
    }, n);
    return () => {
      window.clearTimeout(u);
    };
  }, [f, l.length, n, p]), l.length === 0)
    return null;
  const g = l.find((u) => u.text === f && u.children.length > 0) ?? null;
  return g ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => c(null),
        className: r,
        children: "Nazad"
      }
    ),
    g.children.map((u, h) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(u),
        className: r,
        children: u
      },
      `${g.text}-${h}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: l.slice(0, m).map((u, h) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => u.children.length > 0 ? c(u.text) : a(u.text),
      className: `${r} pitaj-suggestion-enter`,
      children: u.text
    },
    `${u.text}-${h}`
  )) });
}
const Qa = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Ja = [".txt", ".md", ".csv", ".json", ".xml"];
function Xa(t) {
  if (Qa.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Ja.some((a) => e.endsWith(a));
}
async function gi(t) {
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
      const n = Xa(a) ? (await a.text()).slice(0, 4e3) : null;
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
function bi(t) {
  return t.length === 0 ? "" : `

${t.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function er(t) {
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
    const c = await p.json().catch(() => null), d = (() => {
      if (p.status !== 422 || !(c != null && c.errors) || typeof c.errors != "object")
        return null;
      for (const g of Object.values(c.errors))
        if (Array.isArray(g)) {
          for (const u of g)
            if (typeof u == "string" && u.trim() !== "")
              return u;
        }
      return null;
    })();
    ni(
      p.status,
      c,
      typeof d == "string" && d || `Transkripcija nije uspjela (${p.status})`,
      p.headers.get("Retry-After")
    );
  }
  const l = await p.json(), f = typeof (l == null ? void 0 : l.text) == "string" ? l.text.trim() : "";
  if (!f)
    throw new Error("Transkripcija nije vratila tekst.");
  return f;
}
function xi({ widgetId: t, apiUrl: e, onTranscript: a, onError: r }) {
  const n = te(null), p = te(null), l = te([]), f = te(!0), c = te(null), m = te(null), d = te(null), g = te(null), u = te(Array.from({ length: 42 }, () => 0.06)), [h, k] = T(!1), [N, _] = T(!1), [z, C] = T(
    () => Array.from({ length: 42 }, () => 0.06)
  ), v = we(() => {
    var B;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((B = navigator.mediaDevices) != null && B.getUserMedia);
  }, [t]), s = Q(() => {
    p.current && (p.current.getTracks().forEach((B) => B.stop()), p.current = null);
  }, []), I = Q(() => {
    var B;
    c.current !== null && (window.cancelAnimationFrame(c.current), c.current = null), (B = g.current) == null || B.disconnect(), g.current = null, d.current = null, m.current && (m.current.close(), m.current = null);
  }, []), M = Q(() => {
    const B = Array.from({ length: 42 }, () => 0.06);
    u.current = B, C(B);
  }, []), A = Q((B) => {
    const ee = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!ee)
      return;
    const ae = new ee(), pe = ae.createAnalyser();
    pe.fftSize = 2048, pe.smoothingTimeConstant = 0.78;
    const re = ae.createMediaStreamSource(B);
    re.connect(pe), m.current = ae, d.current = pe, g.current = re;
    const G = new Uint8Array(pe.fftSize), $ = () => {
      const H = d.current;
      if (!H) return;
      H.getByteTimeDomainData(G);
      let J = 0;
      for (let y = 0; y < G.length; y += 1) {
        const S = (G[y] - 128) / 128;
        J += S * S;
      }
      const q = Math.sqrt(J / G.length), j = Math.max(0.04, Math.min(1, q * 5.2)), b = u.current.slice(1);
      b.push(j), u.current = b, C(b), c.current = window.requestAnimationFrame($);
    };
    c.current = window.requestAnimationFrame($);
  }, []), V = Q(async () => {
    if (!(!v || N || n.current || h))
      try {
        const ee = await navigator.mediaDevices.getUserMedia({ audio: !0 }), ae = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], re = typeof MediaRecorder.isTypeSupported == "function" ? ae.find(($) => MediaRecorder.isTypeSupported($)) : void 0, G = re ? new MediaRecorder(ee, { mimeType: re }) : new MediaRecorder(ee);
        l.current = [], f.current = !0, p.current = ee, n.current = G, M(), A(ee), G.ondataavailable = ($) => {
          $.data.size > 0 && l.current.push($.data);
        }, G.onstop = async () => {
          k(!1);
          const $ = new Blob(l.current, { type: G.mimeType || "audio/webm" });
          if (l.current = [], n.current = null, s(), I(), $.size === 0) {
            M();
            return;
          }
          if (!f.current) {
            M();
            return;
          }
          _(!0);
          try {
            const H = await er({
              widgetId: t,
              apiUrl: e,
              audio: $
            });
            a(H);
          } catch (H) {
            console.error("[Pitaj.io] Dictation transcription failed", H), r == null || r(H);
          } finally {
            _(!1), M();
          }
        }, G.onerror = () => {
          k(!1), n.current = null, s(), I(), M();
        }, G.start(), k(!0);
      } catch (ee) {
        k(!1), s(), I(), M(), console.error("[Pitaj.io] Dictation microphone access failed", ee);
      }
  }, [e, h, N, v, r, a, M, A, s, I, t]), O = Q(() => {
    const B = n.current;
    !B || !h || N || (f.current = !0, B.stop(), k(!1));
  }, [h, N]), F = Q(() => {
    const B = n.current;
    !B || !h || (f.current = !1, B.stop(), k(!1));
  }, [h]);
  return Y(() => () => {
    const B = n.current;
    B && B.state !== "inactive" && B.stop(), s(), I();
  }, [s, I]), {
    isSupported: v,
    isListening: h,
    isProcessing: N,
    waveformLevels: z,
    start: V,
    stopAndTranscribe: O,
    cancel: F
  };
}
const De = [
  { score: 1, emoji: "😡", label: "Jako loše", color: "#ef4444", satisfaction: "negative" },
  { score: 2, emoji: "🙁", label: "Loše", color: "#f97316", satisfaction: "negative" },
  { score: 3, emoji: "😐", label: "U redu", color: "#eab308", satisfaction: "neutral" },
  { score: 4, emoji: "🙂", label: "Dobro", color: "#84cc16", satisfaction: "positive" },
  { score: 5, emoji: "🤩", label: "Odlično!", color: "#10b981", satisfaction: "positive" }
];
function ji({
  initialScore: t = 5,
  title: e = "Kako biste ocijenili vaše iskustvo?",
  subtitle: a,
  onSubmit: r,
  onDismiss: o,
  compact: n = !1
}) {
  const [p, l] = T(t), [f, c] = T(!1), [m, d] = T(!1), [g, u] = T(null), [h, k] = T(!1), N = De.find((v) => v.score === p) || De[De.length - 1], _ = Q((v) => {
    l(v), u(null), k(!0), setTimeout(() => k(!1), 300);
  }, []), z = Q(async (v) => {
    if (v && (v.stopPropagation(), v.preventDefault()), !(f || m)) {
      c(!0), u(null);
      try {
        await r(N.satisfaction, p), d(!0);
      } catch (s) {
        c(!1), u(
          (s == null ? void 0 : s.message) || "Nismo uspjeli sačuvati ocjenu. Molimo pokušajte ponovo."
        );
      }
    }
  }, [N, p, r, f, m]), C = (p - 1) / 4 * 100;
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
      p,
      "/5)"
    ] })
  ] }) : /* @__PURE__ */ i(
    "div",
    {
      className: `pitaj-satisfaction-card ${n ? "is-compact" : ""}`,
      onClick: (v) => v.stopPropagation(),
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
              /* @__PURE__ */ i("span", { className: `pitaj-mood-pill-emoji ${h ? "is-bouncing" : ""}`, "aria-hidden": "true", children: N.emoji }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-label", children: N.label }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-score", children: [
                p,
                " / 5"
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "pitaj-mood-row", role: "radiogroup", "aria-label": "Ocjena zadovoljstva", children: De.map((v) => {
          const s = p === v.score;
          return /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": s,
              "aria-label": `${v.score} od 5 - ${v.label}`,
              className: `pitaj-mood-btn ${s ? "is-active" : ""}`,
              style: s ? {
                backgroundColor: `${v.color}18`,
                borderColor: v.color,
                boxShadow: `0 4px 14px ${v.color}30`,
                color: v.color
              } : void 0,
              onClick: () => _(v.score),
              children: [
                /* @__PURE__ */ i("span", { className: "pitaj-mood-btn-emoji", children: v.emoji }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: "pitaj-mood-btn-num",
                    style: s ? { color: v.color, fontWeight: 700 } : void 0,
                    children: v.score
                  }
                )
              ]
            },
            `mood-${v.score}`
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
              onInput: (v) => _(Number(v.target.value)),
              className: "pitaj-range-slider",
              "aria-label": `Klizač ocjene: ${p} od 5 (${N.label})`,
              style: {
                color: N.color,
                background: `linear-gradient(to right, ${N.color} 0%, ${N.color} ${C}%, var(--pitaj-border) ${C}%, var(--pitaj-border) 100%)`
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
            disabled: f,
            onClick: z,
            children: f ? "Slanje..." : "Pošalji ocjenu"
          }
        ),
        o && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-satisfaction-dismiss",
            onClick: (v) => {
              v.stopPropagation(), o();
            },
            children: "Možda kasnije"
          }
        ),
        g && /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-error", role: "alert", children: /* @__PURE__ */ i("span", { children: g }) })
      ]
    }
  );
}
const tr = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Ft() {
  const [t, e] = T(0);
  return Y(() => {
    const a = setTimeout(() => e(1), 1600), r = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(r);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(Ca, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: tr[t] }, t)
  ] });
}
function ir(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function ar(t) {
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
    const p = n.slice(2), l = p.indexOf(":");
    if (l < 1) return null;
    const f = p.slice(0, l).trim(), c = p.slice(l + 1).trim();
    return !f || !c ? null : { label: f, value: c };
  }).filter((n) => !!n);
  return o.length < 1 ? null : { title: a, entries: o };
}
function rr({
  conversation: t,
  config: e,
  isStreaming: a,
  rateLimitCountdown: r,
  errorBanner: o,
  onSendMessage: n,
  onApiError: p,
  onSubmitSatisfaction: l,
  isRatingPromptActive: f
}) {
  var H, J, q;
  const [c, m] = T(""), [d, g] = T(!1), [u, h] = T(null), [k, N] = T([]), _ = te(null), z = te(null), C = te(null), v = e.content || {}, s = e.chatAvailable === !1, I = e.transcribeAvailable === !1, M = a || r !== null || s, A = xi({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: Q((j) => {
      m((b) => b ? `${b} ${j}` : j);
    }, []),
    onError: Q((j) => {
      p == null || p(j, "Greška pri transkripciji.");
    }, [p])
  });
  Y(() => {
    const j = _.current;
    j && (j.scrollTop = j.scrollHeight);
  }, [t.messages, a]), Y(() => {
    const j = z.current;
    j && (j.style.height = "auto", j.style.height = `${Math.min(j.scrollHeight, 96)}px`);
  }, [c]), Y(() => {
    g(!1);
  }, [v.dismissibleNotice]);
  const V = (j) => {
    N((b) => {
      const y = b.find((S) => S.id === j);
      if (y != null && y.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(y.previewUrl);
        } catch {
        }
      return b.filter((S) => S.id !== j);
    });
  }, O = (j) => {
    const b = (j ?? c).trim();
    if (!b && k.length === 0 || M) return;
    const y = `${b}${bi(k)}`.trim();
    n(y), k.forEach((S) => {
      if (S.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(S.previewUrl);
        } catch {
        }
    }), N([]), j || (m(""), z.current && (z.current.style.height = "auto"));
  }, F = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), O());
  }, B = v.messagePlaceholder || e.placeholder || "Pitajte bilo šta...", ee = ((H = v.dismissibleNotice) == null ? void 0 : H.trim()) || "", ae = ((J = v.footerText) == null ? void 0 : J.trim()) || "", pe = v.showSuggestedMessages === !1 || v.keepShowingSuggestedMessages !== !0 ? [] : v.suggestedMessageRows || [], re = ((q = [...t.messages].reverse().find((j) => j.sender === "ai")) == null ? void 0 : q.id) ?? null, G = A.isListening, $ = async (j, b) => {
    navigator.clipboard && (await navigator.clipboard.writeText(b), h(j), window.setTimeout(() => {
      h((y) => y === j ? null : y);
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
      t.messages.map((j) => {
        const b = j.sender === "user", y = b ? ar(j.content) : null, S = !b && j.isStreaming && !j.content && !j.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${b ? "user" : "ai"}${j.widget ? " has-widget" : ""}${S ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              b ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${y ? "is-form-submission" : ""}`, children: y ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: y.title.toLowerCase().startsWith("forma") ? y.title : `Forma: ${y.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: y.entries.map((R) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: R.label }),
                  /* @__PURE__ */ i("dd", { children: R.value })
                ] }, `${j.id}-${R.label}`)) })
              ] }) : j.content }) : /* @__PURE__ */ i(ue, { children: [
                j.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(La, { content: j.content }),
                  j.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                j.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Ua, { widget: j.widget, onAction: (R) => O(R) }) }),
                j.isStreaming && !j.content && !j.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ft, {}) })
              ] }),
              !b && j.sources && j.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: "Izvori i dokumentacija:" }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: j.sources.map((R) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: R.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: R.title }),
                      /* @__PURE__ */ i(la, { size: 10 })
                    ]
                  },
                  R.id
                )) })
              ] }),
              !b && j.suggestedQuestions && j.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: j.suggestedQuestions.map((R, E) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => O(R),
                  disabled: M,
                  className: "pitaj-followup-chip",
                  children: R
                },
                `sug-f-${E}`
              )) }),
              (!j.isStreaming || !!j.content || !!j.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: ir(j.timestamp) }),
                !b && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  j.id === re && !a && /* @__PURE__ */ i(ue, { children: v.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(ue, { children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => l == null ? void 0 : l("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": "Korisno",
                        title: "Korisno",
                        children: /* @__PURE__ */ i(da, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => l == null ? void 0 : l("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": "Nije korisno",
                        title: "Nije korisno",
                        children: /* @__PURE__ */ i(ua, { size: 14 })
                      }
                    )
                  ] }) }),
                  j.id === re && !a && v.copyMessageEnabled !== !1 && !!j.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void $(j.id, j.content),
                      className: `pitaj-msg-action-btn ${u === j.id ? "is-active" : ""}`,
                      "aria-label": u === j.id ? "Kopirano" : "Kopiraj odgovor",
                      title: u === j.id ? "Kopirano" : "Kopiraj odgovor",
                      children: u === j.id ? /* @__PURE__ */ i(je, { size: 14 }) : /* @__PURE__ */ i(ca, { size: 14 })
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
      a && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ft, {}) }) }) }),
      (f || t.status === "ended" && !t.satisfaction) && /* @__PURE__ */ i("div", { className: "pitaj-inline-satisfaction", children: /* @__PURE__ */ i(
        ji,
        {
          title: "Ocijenite razgovor sa agentom",
          onSubmit: (j, b) => {
            l == null || l(j, b);
          }
        }
      ) })
    ] }),
    (o || r) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: r ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${r}s.` : o }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        fi,
        {
          rows: pe,
          fallbackQuestions: v.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: O,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      k.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: k.map((j) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: j.previewUrl ? /* @__PURE__ */ i("img", { src: j.previewUrl, alt: j.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(mi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: j.name, children: j.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => V(j.id),
            "aria-label": `Ukloni ${j.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(xe, { size: 10 })
          }
        )
      ] }, j.id)) }),
      ee && !d && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: ee }),
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
      A.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${G ? "is-recording" : ""}`, children: [
        v.attachmentsEnabled && /* @__PURE__ */ i(ue, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: C,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (j) => {
                const b = j.currentTarget.files;
                if (j.currentTarget.value = "", !b || b.length === 0) return;
                const y = await gi(b);
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
                var j;
                return (j = C.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ i(hi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: z,
            value: c,
            onInput: (j) => m(j.target.value),
            onKeyDown: F,
            placeholder: B,
            rows: 1,
            disabled: M,
            className: "pitaj-textarea",
            style: G ? { display: "none" } : void 0
          }
        ),
        G ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => A.cancel(),
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: A.waveformLevels.map((j, b) => /* @__PURE__ */ i(
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
              onClick: () => A.stopAndTranscribe(),
              disabled: M || A.isProcessing,
              children: /* @__PURE__ */ i(je, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(ue, { children: [
          v.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${A.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: A.isProcessing ? "Transkribujem..." : A.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => A.start(),
              disabled: M || I || !A.isSupported || A.isProcessing,
              children: /* @__PURE__ */ i(ui, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => O(),
              disabled: M || !c.trim() && k.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ i(ci, { size: 16 })
            }
          )
        ] })
      ] }),
      ae && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: ae }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(We, { size: 13, className: "pitaj-powered-icon" }),
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
function nr({
  config: t,
  openedByUser: e = !1,
  onStart: a,
  onApiError: r
}) {
  var re, G;
  const [o, n] = T(""), [p, l] = T(!1), [f, c] = T(!1), [m, d] = T([]), g = te(null), u = te(null), h = t.content || {}, k = t.chatAvailable === !1, N = t.transcribeAvailable === !1, _ = xi({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: Q(($) => {
      n((H) => H ? `${H} ${$}` : $);
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
    const $ = window.matchMedia("(max-width: 768px)"), H = () => l($.matches);
    return H(), $.addEventListener("change", H), () => $.removeEventListener("change", H);
  }, []), Y(() => {
    c(!1);
  }, [h.dismissibleNotice]);
  const C = (p && h.useDifferentMessageMobile && h.mobileWelcomeMessage ? h.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map(($) => $.trim()).filter(($) => $.length > 0), v = h.autoShowInitialMessages !== !1 && !e, s = !p || h.showAutoPopupMobile !== !1, I = p && h.useDifferentDurationMobile && typeof h.mobileAutoShowDurationSeconds == "number" ? h.mobileAutoShowDurationSeconds : h.autoShowDurationSeconds ?? 0, M = v && s ? Math.max(0, I) * 1e3 : 0, A = ($) => {
    d((H) => {
      const J = H.find((q) => q.id === $);
      if (J != null && J.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(J.previewUrl);
        } catch {
        }
      return H.filter((q) => q.id !== $);
    });
  }, V = ($) => {
    const H = ($ ?? o).trim();
    if (!H && m.length === 0 || k) return;
    const J = `${H}${bi(m)}`.trim();
    a(J), m.forEach((q) => {
      if (q.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(q.previewUrl);
        } catch {
        }
    }), n(""), d([]);
  }, O = ($) => {
    $.key === "Enter" && !$.shiftKey && ($.preventDefault(), V());
  }, F = h.showSuggestedMessages === !1 ? [] : h.suggestedMessageRows || [], B = h.messagePlaceholder || t.placeholder || "Upišite svoje pitanje...", ee = ((re = h.dismissibleNotice) == null ? void 0 : re.trim()) || "", ae = ((G = h.footerText) == null ? void 0 : G.trim()) || "", pe = _.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (C.length > 0 ? C : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map(($, H) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: $ }) }) }, `welcome-${H}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        fi,
        {
          rows: F,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: V,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: M,
          staggerMs: 150
        }
      ),
      m.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: m.map(($) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: $.previewUrl ? /* @__PURE__ */ i("img", { src: $.previewUrl, alt: $.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(mi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: $.name, children: $.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => A($.id),
            "aria-label": `Ukloni ${$.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(xe, { size: 10 })
          }
        )
      ] }, $.id)) }),
      ee && !f && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: ee }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => c(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(xe, { size: 12 })
          }
        )
      ] }),
      _.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${pe ? "is-recording" : ""}`, children: [
        h.attachmentsEnabled && /* @__PURE__ */ i(ue, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: u,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async ($) => {
                const H = $.currentTarget.files;
                if ($.currentTarget.value = "", !H || H.length === 0) return;
                const J = await gi(H);
                d((q) => [...q, ...J].slice(0, 3));
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
                return ($ = u.current) == null ? void 0 : $.click();
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
            onKeyDown: O,
            placeholder: B,
            rows: 1,
            disabled: k,
            className: "pitaj-textarea",
            style: pe ? { display: "none" } : void 0
          }
        ),
        pe ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
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
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: _.waveformLevels.map(($, H) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + $ * 15))}px` }
            },
            `dict-wave-${H}`
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
          h.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${_.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: _.isProcessing ? "Transkribujem..." : _.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => _.start(),
              disabled: k || N || !_.isSupported || _.isProcessing,
              children: /* @__PURE__ */ i(ui, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => V(),
              disabled: k || !o.trim() && m.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ i(ci, { size: 16 })
            }
          )
        ] })
      ] }),
      ae && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: ae }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(We, { size: 13, className: "pitaj-powered-icon" }),
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
function or({
  isOpen: t,
  onClick: e,
  unreadCount: a = 0,
  config: r
}) {
  var m, d, g, u, h, k;
  const o = ((m = r.content) == null ? void 0 : m.launcherIconStyle) || "message-circle", n = typeof ((d = r.content) == null ? void 0 : d.launcherIconUrl) == "string" ? r.content.launcherIconUrl.trim() : "", p = ((g = r.content) == null ? void 0 : g.launcherShowText) === !0, l = ((u = r.content) == null ? void 0 : u.launcherTextSide) === "left" ? "left" : "right", f = p ? ((k = (h = r.content) == null ? void 0 : h.launcherText) == null ? void 0 : k.trim()) || r.title || r.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${p ? "has-label" : ""} ${p && l === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && n !== "" ? /* @__PURE__ */ i("img", { src: n, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? ea : o === "message-square" ? di : o === "contact" ? na : ia, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(xe, { size: 22 }) })
        ] }),
        f && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: f }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function sr({ isOpen: t, onOpen: e, config: a, pendingRating: r }) {
  var M, A, V, O;
  const [o, n] = T(!1), [p, l] = T(!1), [f, c] = T(!1), [m, d] = T(t), g = te(null);
  Y(() => {
    t && (d(!0), c(!1));
  }, [t]), Y(() => {
    if (r && !t) {
      const F = setTimeout(() => {
        c(!0);
      }, 800);
      return () => clearTimeout(F);
    }
  }, [r, t]), Y(() => {
    const F = () => {
      var ee;
      if (typeof window > "u") return;
      let B = window.innerWidth <= 640;
      if (!B && g.current) {
        const ae = (ee = g.current.closest(".pitaj-root")) == null ? void 0 : ee.parentElement;
        ae && ae.clientWidth > 0 && ae.clientWidth <= 640 && (B = !0);
      }
      n(B);
    };
    return F(), window.addEventListener("resize", F), () => window.removeEventListener("resize", F);
  }, []);
  const u = a.content || {}, h = u.autoShowInitialMessages !== !1, k = u.showAutoPopupMobile !== !1, N = !o || k, _ = o && u.useDifferentDurationMobile && typeof u.mobileAutoShowDurationSeconds == "number" ? u.mobileAutoShowDurationSeconds : u.autoShowDurationSeconds ?? 0;
  if (Y(() => {
    if (r) return;
    if (!h || !N || p || t || m) {
      c(!1);
      return;
    }
    const F = Math.max(0, _) * 1e3, B = setTimeout(() => {
      c(!0);
    }, F);
    return () => clearTimeout(B);
  }, [h, N, p, t, m, _, r]), !f || t)
    return null;
  let z = "";
  o && u.useDifferentMessageMobile && ((M = u.mobileWelcomeMessage) != null && M.trim()) ? z = u.mobileWelcomeMessage.trim() : (A = u.popupMessageText) != null && A.trim() ? z = u.popupMessageText.trim() : (V = a.welcomeMessage) != null && V.trim() ? z = a.welcomeMessage.trim() : (O = a.welcomeHeadline) != null && O.trim() ? z = a.welcomeHeadline.trim() : z = "Zdravo! Kako vam mogu pomoći danas?";
  const C = (F) => {
    F.stopPropagation(), F.preventDefault(), r ? r.onDismiss() : l(!0), c(!1);
  }, v = () => {
    e();
  }, s = a.title || a.name || "Pitaj.io Asistent", I = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: g,
      className: `pitaj-launcher-popup ${r ? "is-rating-popup" : ""}`,
      onClick: v,
      role: "button",
      tabIndex: 0,
      "aria-label": `${s}: ${r ? "Ocijenite razgovor" : z}`,
      onKeyDown: (F) => {
        (F.key === "Enter" || F.key === " ") && (F.preventDefault(), v());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: I ? /* @__PURE__ */ i("img", { src: I, alt: "" }) : /* @__PURE__ */ i(We, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: s }),
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
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: `pitaj-popup-body ${r ? "is-rating-body" : ""}`, children: r ? /* @__PURE__ */ i(
          ji,
          {
            compact: !0,
            title: "Kako biste ocijenili vaše iskustvo?",
            onSubmit: async (F, B) => {
              await r.onSubmitRating(F, B), setTimeout(() => {
                c(!1);
              }, 2e3);
            }
          }
        ) : z }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function lr(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, r = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(r / (1e3 * 60)), n = Math.floor(r / (1e3 * 60 * 60)), p = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : n < 24 ? `prije ${n}h` : p < 7 ? `prije ${p}d` : e.toLocaleDateString();
}
function pr({ config: t, visitorId: e, onSelectTicket: a }) {
  const [r, o] = T([]), [n, p] = T("open"), [l, f] = T(1), [c, m] = T(!0), [d, g] = T(!0), [u, h] = T(!1), [k, N] = T(null), _ = te(null), z = te(null), C = te(!1);
  Y(() => {
    let I = !0;
    return g(!0), o([]), f(1), m(!0), N(null), C.current = !1, tt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: 1,
      perPage: 15
    }).then((M) => {
      I && (o(M.tickets), m(M.hasMore), f(1));
    }).catch((M) => {
      I && N(M instanceof Error ? M.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      I && g(!1);
    }), () => {
      I = !1;
    };
  }, [t.apiUrl, t.companyId, e, n]);
  const v = Q(() => {
    if (d || C.current || !c) return;
    C.current = !0, h(!0);
    const I = l + 1;
    tt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: I,
      perPage: 15
    }).then((M) => {
      o((A) => {
        const V = new Set(A.map((F) => F.id)), O = M.tickets.filter((F) => !V.has(F.id));
        return [...A, ...O];
      }), m(M.hasMore), f(I);
    }).catch((M) => {
      console.error("[Pitaj.io] Error loading more tickets:", M);
    }).finally(() => {
      h(!1), C.current = !1;
    });
  }, [t.apiUrl, t.companyId, c, d, l, n, e]);
  return Y(() => {
    const I = z.current, M = _.current;
    if (!I || !M || !c || d || u) return;
    const A = new IntersectionObserver(
      (V) => {
        var O;
        (O = V[0]) != null && O.isIntersecting && v();
      },
      { root: M, rootMargin: "120px" }
    );
    return A.observe(I), () => A.disconnect();
  }, [c, d, u, v]), /* @__PURE__ */ i(
    "div",
    {
      ref: _,
      className: "pitaj-tickets-screen",
      onScroll: (I) => {
        const M = I.currentTarget;
        !M || !c || d || C.current || M.scrollHeight - M.scrollTop - M.clientHeight < 120 && v();
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
        d ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : k ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: k }) }) : r.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(di, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: n === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: n === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          r.map((I) => {
            const M = I.messages || [], A = M.length > 0 ? M[M.length - 1] : null, V = M.length, O = V === 1 ? "1 poruka" : V >= 2 && V <= 4 ? `${V} poruke` : `${V} poruka`;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => a == null ? void 0 : a(I),
                "aria-label": `Otvori tiket ${I.ticketNumber || I.id}`,
                children: /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ i("strong", { className: "pitaj-ticket-number", children: I.ticketNumber || `Tiket #${I.id}` }),
                    /* @__PURE__ */ i("span", { className: `pitaj-ticket-status-badge ${I.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ i("span", { className: "pitaj-ticket-status-dot" }),
                      I.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  A && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: A.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: lr(I.updatedAt) }),
                    V > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: O })
                  ] })
                ] })
              },
              I.id
            );
          }),
          u && /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ i("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ i("div", { ref: z, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const cr = pi(() => import("./HistoryScreen-CoQ8oZHa.js"), (t) => t.HistoryScreen), dr = pi(() => import("./FormActionsScreen-DxufqPG_.js"), (t) => t.FormActionsScreen);
function Ie(t, e) {
  const a = t.trim(), r = /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a;
  if (!/^#[0-9A-Fa-f]{6}$/.test(r)) return null;
  const o = Number.parseInt(r.slice(1, 3), 16), n = Number.parseInt(r.slice(3, 5), 16), p = Number.parseInt(r.slice(5, 7), 16);
  return `rgba(${o}, ${n}, ${p}, ${e})`;
}
function vi(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? {
    r: Number.parseInt(a.slice(1, 3), 16),
    g: Number.parseInt(a.slice(3, 5), 16),
    b: Number.parseInt(a.slice(5, 7), 16)
  } : null;
}
function ur(t, e, a) {
  const r = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${r(t)}${r(e)}${r(a)}`;
}
function Ae(t) {
  const e = vi(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function mr(t) {
  const e = vi(t);
  if (!e) return t;
  const a = Ae(t) === "#111827", r = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return ur(
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
  isMobile: n,
  isCanvasPreview: p = !1
}) {
  var Me, Se, fe, dt, ut, mt, ht, ft, gt;
  const {
    config: l,
    setConfig: f,
    isOpen: c,
    setIsOpen: m,
    screen: d,
    setScreen: g,
    conversations: u,
    activeConversation: h,
    totalUnread: k,
    isStreaming: N,
    rateLimitTimer: _,
    errorBanner: z,
    selectConversation: C,
    startNewConversation: v,
    endConversation: s,
    deleteConversation: I,
    sendUserMessage: M,
    submitSatisfaction: A,
    visitorContact: V,
    visitorId: O,
    activeConversationId: F,
    appendConversationMessage: B,
    handleApiError: ee
  } = Xi(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: r,
    onActionTrigger: (x) => {
      if (G(!0), m(!0), (d === "history" || d === "new-conversation") && g("conversation"), x.widget_id || x.widget)
        return;
      const P = Number(x.id), w = Number(x.form_id), ie = Number.isInteger(P) && P > 0 ? P : null, ne = Number.isInteger(w) && w > 0 ? -w : null;
      H(ie ?? ne);
    }
  }), ae = te(a), pe = te(e), [re, G] = T(e), [$, H] = T(null), [J, q] = T(null), [j, b] = T(null), [y, S] = T(() => /* @__PURE__ */ new Set()), R = Q(() => {
    d === "conversation" && h && h.messages.length > 0 && !(h.satisfaction && h.satisfaction !== "none") && !y.has(h.id) && b(h.id);
  }, [d, h, y]), E = Q(async (x, P) => {
    j && (await A(j, x, P), b(null));
  }, [j, A]), L = Q(() => {
    j && (S((x) => new Set(x).add(j)), b(null));
  }, [j]), W = te(null), [D, Z] = T(() => typeof n == "boolean" ? n : typeof window < "u" ? window.innerWidth <= 640 : !1);
  Y(() => {
    if (typeof n == "boolean") {
      Z(n);
      return;
    }
    const x = () => {
      if (typeof window > "u") return;
      let P = window.innerWidth <= 640;
      if (!P && W.current) {
        const w = W.current.getRootNode(), ie = w instanceof ShadowRoot ? w.host : W.current.parentElement, ne = (ie == null ? void 0 : ie.parentElement) || ie;
        ne && ne.clientWidth > 0 && ne.clientWidth <= 640 && (P = !0);
      }
      Z(P);
    };
    return x(), window.addEventListener("resize", x), window.addEventListener("orientationchange", x), () => {
      window.removeEventListener("resize", x), window.removeEventListener("orientationchange", x);
    };
  }, [n]), Y(() => {
    if (typeof window > "u") return;
    const x = () => {
      const w = W.current;
      if (!w) return;
      const ie = window.visualViewport;
      if (ie) {
        const ne = ie.height < window.innerHeight - 100;
        w.style.setProperty("--pitaj-viewport-height", `${Math.round(ie.height)}px`), w.style.setProperty("--pitaj-viewport-top", `${Math.round(ie.offsetTop)}px`), w.style.setProperty("--pitaj-viewport-left", `${Math.round(ie.offsetLeft)}px`), w.style.setProperty(
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
    const P = window.visualViewport;
    return P && (P.addEventListener("resize", x), P.addEventListener("scroll", x)), window.addEventListener("resize", x), window.addEventListener("orientationchange", x), () => {
      P && (P.removeEventListener("resize", x), P.removeEventListener("scroll", x)), window.removeEventListener("resize", x), window.removeEventListener("orientationchange", x);
    };
  }, [c, D]), Y(() => {
    if (typeof document > "u" || !c || !D || o || p) return;
    const x = document.body.style.overflow, P = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = x, document.body.style.touchAction = P;
    };
  }, [c, D, o, p]), Y(() => {
    var w;
    if (typeof window > "u" || o) return;
    const x = (w = W.current) == null ? void 0 : w.getRootNode(), P = x instanceof ShadowRoot ? x.host : null;
    if (P) {
      if (p || P.hasAttribute("data-pitaj-preview") || P.classList.contains("pitaj-preview-host")) {
        P.style.width = "100%", P.style.height = "100%", P.style.top = "0", P.style.left = "0", P.style.position = "relative";
        return;
      }
      c && D ? (P.style.top = "0", P.style.left = "0", P.style.width = "100%", P.style.height = "100%", P.setAttribute("data-pitaj-mobile-open", "true")) : (P.style.top = "", P.style.left = "", P.style.width = "0", P.style.height = "0", P.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [c, D, o, p]);
  const U = l.formsEnabled === !0 && l.formsAvailable !== !1, ce = we(() => {
    var w, ie;
    const x = l.actions || [];
    if (x.length > 0 && typeof ((w = x[0]) == null ? void 0 : w.id) == "number")
      return x[0].id;
    const P = l.forms || [];
    return P.length > 0 && typeof ((ie = P[0]) == null ? void 0 : ie.id) == "number" ? -P[0].id : null;
  }, [l.actions, l.forms]), K = we(() => ({
    open: () => {
      G(!0), m(!0);
    },
    close: () => m(!1),
    toggle: () => {
      c || G(!0), m(!c);
    },
    startConversation: (x) => {
      G(!0), m(!0), x && x.trim() ? v(x.trim()) : g("new-conversation");
    },
    setScreen: (x) => g(x),
    setConfig: (x) => {
      f({
        ...l,
        ...x,
        colors: { ...l.colors || {}, ...x.colors || {} },
        content: { ...l.content || {}, ...x.content || {} },
        features: { ...l.features || {}, ...x.features || {} }
      });
    }
  }), [l, c, m, g, v, f]), me = te({});
  Dt(me.current, K), Y(() => () => Dt(me.current, null), []), Y(() => {
    a !== ae.current && (ae.current = a, g(a));
  }, [a, g]), Y(() => {
    e !== pe.current && (pe.current = e, e && G(!0), m(e));
  }, [e, m]), Y(() => {
    if (d === "forms") {
      U && ce !== null && H(ce), g("new-conversation");
      return;
    }
    d === "contact" && g("new-conversation");
  }, [ce, U, d, g]), Y(() => {
    var ie;
    if (typeof document > "u") return;
    const x = (ie = l.content) == null ? void 0 : ie.fontFamily;
    if (!x) return;
    const P = x.trim().toLowerCase();
    let w = "";
    if (P === "inter" ? w = "family=Inter:wght@400;500;600;700" : P === "geist" ? w = "family=Geist:wght@400;500;600;700" : P === "plus jakarta sans" && (w = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), w) {
      const ne = `pitaj-font-${P.replace(/\s+/g, "-")}`;
      if (!document.getElementById(ne)) {
        const ge = document.createElement("link");
        ge.id = ne, ge.rel = "stylesheet", ge.href = `https://fonts.googleapis.com/css2?${w}&display=swap`, document.head.appendChild(ge);
      }
    }
  }, [(Me = l.content) == null ? void 0 : Me.fontFamily]);
  const he = we(() => {
    var Pe, bt, xt, jt, vt;
    const x = l.colors || {}, P = ((Pe = l.content) == null ? void 0 : Pe.themeMode) === "dark" ? "dark" : "light", w = {};
    if (x.primaryColor) {
      w["--pitaj-accent"] = x.primaryColor, w["--pitaj-bubble-user"] = x.primaryColor, w["--pitaj-accent-hover"] = mr(x.primaryColor), w["--pitaj-accent-contrast"] = Ae(x.primaryColor), w["--pitaj-bubble-user-fg"] = Ae(x.primaryColor);
      const de = Ie(x.primaryColor, 0.1), $e = Ie(x.primaryColor, 0.16), wt = Ie(x.primaryColor, 0.35);
      de && (w["--pitaj-accent-soft"] = de), $e && (w["--pitaj-accent-soft-strong"] = $e), wt && (w["--pitaj-accent-ring"] = wt);
    }
    if (x.headerBg && (w["--pitaj-header-bg"] = x.headerBg), x.headerFg) {
      w["--pitaj-header-fg"] = x.headerFg;
      const de = Ie(x.headerFg, 0.1);
      de && (w["--pitaj-header-icon-hover"] = de);
    }
    w["--pitaj-chrome-border"] = P === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", x.surfaceBg && (w["--pitaj-surface"] = x.surfaceBg), x.subtle ? w["--pitaj-surface-subtle"] = x.subtle : x.surfaceBg && (w["--pitaj-surface-subtle"] = Ie(x.surfaceBg, 0.9) || x.surfaceBg), x.bubbleAiBg && (w["--pitaj-bubble-ai"] = x.bubbleAiBg), x.textFg && (w["--pitaj-bubble-ai-fg"] = x.textFg), x.textFg && (w["--pitaj-fg"] = x.textFg), x.mutedFg && (w["--pitaj-muted"] = x.mutedFg), x.border && (w["--pitaj-border"] = x.border), x.hover && (w["--pitaj-hover"] = x.hover), x.sendAccent && (w["--pitaj-send-accent"] = x.sendAccent, w["--pitaj-send-accent-contrast"] = Ae(x.sendAccent));
    const ie = (bt = l.content) == null ? void 0 : bt.launcherButtonColor;
    ie && (w["--pitaj-launcher-bg"] = ie, w["--pitaj-launcher-fg"] = Ae(ie));
    const ne = (xt = l.content) == null ? void 0 : xt.cornerRadius;
    if (ne) {
      const de = ne === "sharp" || ne === "0px" ? "0px" : ne === "small" || ne === "8px" ? "8px" : ne === "medium" || ne === "12px" ? "12px" : ne === "large" || ne === "16px" ? "16px" : ne;
      w["--pitaj-radius"] = de, de === "0px" ? (w["--pitaj-radius-bubble"] = "0px", w["--pitaj-radius-input"] = "0px", w["--pitaj-radius-btn"] = "0px", w["--pitaj-radius-avatar"] = "0px", w["--pitaj-radius-full"] = "0px", w["--pitaj-radius-corner-sm"] = "0px", w["--pitaj-launcher-radius"] = "0px", w["--pitaj-launcher-pill-radius"] = "0px", w["--pitaj-badge-radius"] = "0px") : de === "8px" ? (w["--pitaj-radius-bubble"] = "8px", w["--pitaj-radius-input"] = "8px", w["--pitaj-radius-btn"] = "6px", w["--pitaj-radius-avatar"] = "6px", w["--pitaj-radius-full"] = "8px", w["--pitaj-radius-corner-sm"] = "2px", w["--pitaj-launcher-radius"] = "8px", w["--pitaj-launcher-pill-radius"] = "8px", w["--pitaj-badge-radius"] = "4px") : de === "12px" ? (w["--pitaj-radius-bubble"] = "12px", w["--pitaj-radius-input"] = "12px", w["--pitaj-radius-btn"] = "8px", w["--pitaj-radius-avatar"] = "10px", w["--pitaj-radius-full"] = "12px", w["--pitaj-radius-corner-sm"] = "4px", w["--pitaj-launcher-radius"] = "12px", w["--pitaj-launcher-pill-radius"] = "12px", w["--pitaj-badge-radius"] = "6px") : (w["--pitaj-radius-bubble"] = "18px", w["--pitaj-radius-input"] = "14px", w["--pitaj-radius-btn"] = "10px", w["--pitaj-radius-avatar"] = "50%", w["--pitaj-radius-full"] = "999px", w["--pitaj-radius-corner-sm"] = "4px", w["--pitaj-launcher-radius"] = "50%", w["--pitaj-launcher-pill-radius"] = "999px", w["--pitaj-badge-radius"] = "999px");
    }
    const ge = (jt = l.content) == null ? void 0 : jt.fontFamily;
    if (ge) {
      const de = ge.toLowerCase(), $e = de === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : de === "arial" ? "Arial, Helvetica, sans-serif" : de === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : de === "georgia" ? "Georgia, serif" : de === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : de === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${ge}', 'Inter', system-ui, sans-serif`;
      w["--pitaj-font"] = $e, w.fontFamily = $e;
    }
    const Ne = (vt = l.content) == null ? void 0 : vt.fontSize;
    return Ne && (w["--pitaj-font-size"] = Ne, w.fontSize = Ne), w;
  }, [
    l.colors,
    (Se = l.content) == null ? void 0 : Se.themeMode,
    (fe = l.content) == null ? void 0 : fe.launcherButtonColor,
    (dt = l.content) == null ? void 0 : dt.cornerRadius,
    (ut = l.content) == null ? void 0 : ut.fontFamily,
    (mt = l.content) == null ? void 0 : mt.fontSize
  ]), Ze = `pos-${l.position || "bottom-right"}`;
  return l.enabled === !1 ? /* @__PURE__ */ i(ue, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: W,
      className: `pitaj-root ${Ze} ${c ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${p ? "is-canvas-preview" : ""} ${D ? "is-mobile" : ""} ${o && ((ht = l.content) != null && ht.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: he,
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
                Aa,
                {
                  screen: d,
                  activeConversation: h,
                  config: l,
                  onBack: () => {
                    const x = J || "new-conversation";
                    q(null), g(x);
                  },
                  onClose: () => {
                    R(), m(!1);
                  },
                  onNewConversation: () => {
                    q(null), g("new-conversation");
                  },
                  onEndConversation: () => {
                    R(), s(), m(!1);
                  },
                  onDeleteConversation: ((ft = l.content) == null ? void 0 : ft.deleteConversationsEnabled) !== !1 && h ? () => I(h.id) : void 0,
                  onViewHistory: () => {
                    q(null), g("history");
                  },
                  onViewTickets: () => {
                    q(null), g("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                d === "conversation" && h && /* @__PURE__ */ i(
                  rr,
                  {
                    conversation: h,
                    config: l,
                    isStreaming: N,
                    rateLimitCountdown: _,
                    errorBanner: z,
                    onSendMessage: M,
                    onApiError: ee,
                    onSubmitSatisfaction: (x, P) => A(h.id, x, P),
                    isRatingPromptActive: j === h.id
                  }
                ),
                d === "new-conversation" && /* @__PURE__ */ i(
                  nr,
                  {
                    config: l,
                    openedByUser: re,
                    onStart: (x) => {
                      v(x);
                    },
                    onApiError: ee
                  }
                ),
                d === "history" && /* @__PURE__ */ i(
                  cr,
                  {
                    conversations: u,
                    config: l,
                    onSelectConversation: (x) => {
                      q("history"), C(x);
                    },
                    onNewConversation: () => {
                      q(null), g("new-conversation");
                    },
                    onDeleteConversation: ((gt = l.content) == null ? void 0 : gt.deleteConversationsEnabled) !== !1 ? I : void 0
                  }
                ),
                d === "tickets" && /* @__PURE__ */ i(
                  pr,
                  {
                    config: l,
                    visitorId: O,
                    onSelectTicket: (x) => {
                      var Ne;
                      q("tickets");
                      const P = (Ne = x.messages) == null ? void 0 : Ne.find((Pe) => Pe.sender === "user"), w = x.messages && x.messages.length > 0 ? x.messages[x.messages.length - 1] : null, ie = P ? P.content.length > 40 ? P.content.slice(0, 40) + "…" : P.content : x.ticketNumber || `Tiket #${x.id}`, ge = {
                        id: x.conversationId ? String(x.conversationId) : String(x.id),
                        title: ie,
                        preview: w ? w.content : x.ticketNumber || `Tiket #${x.id}`,
                        timestamp: x.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: x.messages || [],
                        status: x.isResolved ? "ended" : "active",
                        ticketNumber: x.ticketNumber
                      };
                      C(ge);
                    }
                  }
                ),
                (d === "conversation" || d === "new-conversation") && U && $ !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  dr,
                  {
                    embedded: !0,
                    config: l,
                    widgetId: l.companyId,
                    activeConversationId: F,
                    initialActionId: $,
                    visitorContact: V,
                    onApiError: ee,
                    blockedReason: _ !== null ? `Sačekajte ${_}s prije novog zahtjeva.` : null,
                    onSubmitted: (x) => {
                      B(F, x, "user");
                    },
                    onBack: () => H(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!c || !D) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${c ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            sr,
            {
              isOpen: c,
              onOpen: () => {
                G(!0), m(!0);
              },
              config: l,
              pendingRating: j && !c ? {
                conversationId: j,
                onSubmitRating: E,
                onDismiss: L
              } : null
            }
          ),
          /* @__PURE__ */ i(
            or,
            {
              isOpen: c,
              onClick: () => {
                c || G(!0), m(!c);
              },
              unreadCount: k + (j && !c ? 1 : 0),
              config: l
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
function fr(t) {
  const e = t.trim();
  if (!/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), r = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * r + 0.0722 * o) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function gr(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function br(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const r = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, n = Number.parseInt(a.slice(5, 7), 16) / 255, p = Math.max(r, o, n), l = Math.min(r, o, n), f = p - l;
  let c = 0;
  const m = (p + l) / 2, d = f === 0 ? 0 : f / (1 - Math.abs(2 * m - 1));
  if (f !== 0)
    switch (p) {
      case r:
        c = (o - n) / f % 6;
        break;
      case o:
        c = (n - r) / f + 2;
        break;
      default:
        c = (r - o) / f + 4;
        break;
    }
  return { h: Math.round((c * 60 + 360) % 360), s: Math.round(d * 100), l: Math.round(m * 100) };
}
function xr(t) {
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
function jr(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((n) => typeof n == "object" && n !== null).map((n) => ({
      key: typeof n.key == "string" ? n.key : "",
      type: xr(n.type),
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
function vr(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function wr(t, e) {
  var r, o, n, p, l, f, c, m, d;
  if (t === "default")
    return { ...oe, companyId: t || "default" };
  const a = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const g = `${a}/api/widget/${t}/config`, u = await fetch(g, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!u.ok) {
      if (u.status === 403) {
        const L = await u.json().catch(() => null);
        if ((L == null ? void 0 : L.code) === "COUNTRY_BLOCKED" || L != null && L.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...oe,
            companyId: t,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${u.status}), using defaults.`), { ...oe, companyId: t, apiUrl: a };
    }
    const h = await u.json(), k = h.accent_color || ((r = oe.colors) == null ? void 0 : r.primaryColor) || "#2563eb", N = Array.isArray(h.suggested_questions) ? h.suggested_questions.filter((L) => typeof L == "string" && L.trim() !== "").slice(0, 4) : [], _ = Array.isArray(h.contact_fields) ? h.contact_fields.filter(
      (L) => L === "name" || L === "email" || L === "phone"
    ) : [], C = (Array.isArray(h.channels) ? h.channels : []).find(
      (L) => typeof L == "object" && L !== null && L.channel === "chat_bubble"
    ), v = (C == null ? void 0 : C.enabled) !== !1, s = h.widget_content && typeof h.widget_content == "object" ? h.widget_content : null, I = Array.isArray(s == null ? void 0 : s.suggested_message_rows) ? s.suggested_message_rows.filter((L) => typeof L == "object" && L !== null).map((L) => {
      const W = typeof L.text == "string" ? L.text.trim() : "", D = Array.isArray(L.children) ? L.children.filter((Z) => typeof Z == "string" && Z.trim() !== "") : [];
      return {
        text: W,
        children: D.length > 0 ? D : void 0
      };
    }).filter((L) => L.text !== "").slice(0, 4) : [], M = {
      avatarBorder: (s == null ? void 0 : s.avatar_border) !== !1,
      messagePlaceholder: typeof (s == null ? void 0 : s.message_placeholder) == "string" && s.message_placeholder.trim() !== "" ? s.message_placeholder : oe.placeholder,
      dismissibleNotice: typeof (s == null ? void 0 : s.dismissible_notice) == "string" ? s.dismissible_notice : "",
      footerText: typeof (s == null ? void 0 : s.footer_text) == "string" ? s.footer_text : "",
      attachmentsEnabled: (s == null ? void 0 : s.attachments_enabled) === !0,
      voiceToTextEnabled: (s == null ? void 0 : s.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (s == null ? void 0 : s.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (s == null ? void 0 : s.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (s == null ? void 0 : s.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (s == null ? void 0 : s.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (s == null ? void 0 : s.keep_showing_suggested_messages) === !0,
      suggestedMessageRows: I,
      useDifferentMessageMobile: (s == null ? void 0 : s.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (s == null ? void 0 : s.mobile_welcome_message) == "string" ? s.mobile_welcome_message : "",
      autoShowInitialMessages: (s == null ? void 0 : s.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (s == null ? void 0 : s.auto_show_duration_seconds) == "number" ? Math.max(0, s.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (s == null ? void 0 : s.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (s == null ? void 0 : s.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (s == null ? void 0 : s.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, s.mobile_auto_show_duration_seconds) : null,
      popupMessageText: typeof (s == null ? void 0 : s.popup_message_text) == "string" ? s.popup_message_text : "",
      themeMode: (s == null ? void 0 : s.theme_mode) === "dark" ? "dark" : "light",
      tintedGrayscaleEnabled: (s == null ? void 0 : s.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (s == null ? void 0 : s.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (s == null ? void 0 : s.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (s == null ? void 0 : s.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (s == null ? void 0 : s.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(s.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (s == null ? void 0 : s.tinted_grayscale_tint) == "number" ? Math.max(-100, Math.min(100, Math.round(s.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (s == null ? void 0 : s.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(s.tinted_grayscale_shade))) : 0,
      launcherButtonColor: gr(s == null ? void 0 : s.launcher_button_color, "#05070c"),
      launcherIconStyle: (s == null ? void 0 : s.launcher_icon_style) === "sparkles" || (s == null ? void 0 : s.launcher_icon_style) === "message-square" || (s == null ? void 0 : s.launcher_icon_style) === "contact" || (s == null ? void 0 : s.launcher_icon_style) === "custom" ? s.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (s == null ? void 0 : s.launcher_icon_url) == "string" ? s.launcher_icon_url : "",
      launcherShowText: (s == null ? void 0 : s.launcher_show_text) === !0,
      launcherText: typeof (s == null ? void 0 : s.launcher_text) == "string" ? s.launcher_text : "",
      launcherTextSide: (s == null ? void 0 : s.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (s == null ? void 0 : s.show_inline_launcher) === !0,
      cornerRadius: typeof (s == null ? void 0 : s.corner_radius) == "string" ? s.corner_radius : "16px",
      fontFamily: typeof (s == null ? void 0 : s.font_family) == "string" ? s.font_family : "Inter",
      fontSize: typeof (s == null ? void 0 : s.font_size) == "string" ? s.font_size : "14px",
      languageSource: (s == null ? void 0 : s.language_source) === "website" ? "website" : "browser",
      defaultLanguage: typeof (s == null ? void 0 : s.default_language) == "string" ? s.default_language : "en",
      supportedLanguages: Array.isArray(s == null ? void 0 : s.supported_languages) ? s.supported_languages : ["en"],
      guardrails: s == null ? void 0 : s.guardrails
    }, A = M.themeMode === "dark" ? "dark" : "light", V = M.accentColorEnabled !== !1, O = M.accentColorForHeaderEnabled === !0, F = M.accentColorForSendIconEnabled === !0, B = M.tintedGrayscaleEnabled === !0, ee = M.tintedGrayscaleHue ?? 0, ae = M.tintedGrayscaleTint ?? 0, pe = M.tintedGrayscaleShade ?? 0, re = V ? k : A === "dark" ? "#9ca3af" : "#6b7280", $ = (br(re).h + ee + 360) % 360, H = Math.max(0, Math.min(46, 10 + ae * 0.36)), J = Math.max(-24, Math.min(24, pe * 0.24)), q = A === "dark" ? {
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
    if (O && (q.headerBg = re, q.headerFg = fr(re)), B) {
      const L = A === "dark" ? Math.max(8, Math.min(20, 12 + J)) : Math.max(88, Math.min(97, 95 + J * 0.22)), W = A === "dark" ? Math.max(10, Math.min(24, 16 + J)) : Math.max(80, Math.min(94, 89 + J * 0.35)), D = A === "dark" ? Math.max(11, Math.min(26, 18 + J * 0.9)) : Math.max(83, Math.min(95, W + 3)), Z = A === "dark" ? Math.max(22, Math.min(40, 30 + J)) : Math.max(70, Math.min(88, 82 + J * 0.38)), U = A === "dark" ? Math.max(16, Math.min(30, 22 + J)) : Math.max(78, Math.min(92, W - 2));
      q.surfaceBg = `hsl(${$} ${H}% ${L}%)`, q.bubbleAiBg = `hsl(${$} ${Math.max(0, H - 2)}% ${D}%)`, q.subtle = `hsl(${$} ${Math.max(0, H - 4)}% ${W}%)`, q.border = `hsl(${$} ${Math.max(0, H - 5)}% ${Z}%)`, q.hover = `hsl(${$} ${Math.max(0, H - 3)}% ${U}%)`;
    }
    const j = jr(h.forms), b = vr(h.actions).filter(
      (L) => j.some((W) => W.id === L.form_id)
    ), y = h.forms_enabled === !0 && j.length > 0 && b.length > 0, S = h.chat_available !== !1, R = h.transcribe_available !== !1 && S, E = h.forms_available !== !1 && y;
    return {
      ...oe,
      companyId: t,
      enabled: v,
      apiUrl: a,
      name: h.company_name || oe.name,
      title: h.bot_name || oe.title,
      avatar: typeof (s == null ? void 0 : s.avatar_url) == "string" && s.avatar_url.trim() !== "" ? s.avatar_url : oe.avatar,
      welcomeHeadline: h.bot_name ? `Ćaskajte sa ${h.bot_name}` : oe.welcomeHeadline,
      welcomeMessage: h.welcome_message || oe.welcomeMessage,
      placeholder: M.messagePlaceholder || oe.placeholder,
      suggestedQuestions: N,
      contactFields: _.length > 0 ? _ : oe.contactFields,
      contact: {
        enabled: typeof ((o = h.contact) == null ? void 0 : o.enabled) == "boolean" ? h.contact.enabled : (n = oe.contact) == null ? void 0 : n.enabled,
        title: typeof ((p = h.contact) == null ? void 0 : p.title) == "string" && h.contact.title.trim() !== "" ? h.contact.title : (l = oe.contact) == null ? void 0 : l.title,
        subtitle: typeof ((f = h.contact) == null ? void 0 : f.subtitle) == "string" && h.contact.subtitle.trim() !== "" ? h.contact.subtitle : (c = oe.contact) == null ? void 0 : c.subtitle,
        submitLabel: typeof ((m = h.contact) == null ? void 0 : m.submit_label) == "string" && h.contact.submit_label.trim() !== "" ? h.contact.submit_label : (d = oe.contact) == null ? void 0 : d.submitLabel
      },
      poweredBy: h.show_branding !== void 0 ? h.show_branding : oe.poweredBy,
      position: h.position || oe.position,
      accentGradient: Array.isArray(h.accent_gradient) ? h.accent_gradient : [],
      content: {
        ...oe.content || {},
        ...M
      },
      chatAvailable: S,
      transcribeAvailable: R,
      formsAvailable: E,
      formsEnabled: y,
      forms: j,
      actions: b,
      colors: {
        ...oe.colors,
        primaryColor: re,
        bubbleUserBg: re,
        sendAccent: F ? re : A === "dark" ? "#e5e7eb" : "#111827",
        headerBg: q.headerBg,
        headerFg: q.headerFg,
        surfaceBg: q.surfaceBg,
        bubbleAiBg: q.bubbleAiBg,
        textFg: q.textFg,
        mutedFg: q.mutedFg,
        border: q.border,
        hover: q.hover,
        subtle: q.subtle
      }
    };
  } catch (g) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", g), { ...oe, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const yr = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";:host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon-hover: rgba(15, 23, 42, .06);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:100%;height:100%;min-height:0;max-height:100%;align-items:center!important;gap:8px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-btn,.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-wrap{display:none!important}.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-btn,.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-wrap{align-self:flex-end;margin-right:8px}.pitaj-root.is-inline.show-inline-launcher .pitaj-window{height:calc(100% - 62px);max-height:calc(100% - 62px)}.pitaj-root.is-inline .pitaj-window{position:relative;width:min(100%,380px);height:auto;flex:1 1 auto;min-height:0;max-width:380px;max-height:100%;transform:none!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:none;display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background:var(--pitaj-header-bg);color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-border);flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:#fff3;color:var(--pitaj-header-fg);line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-muted);line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-muted)}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg);border-color:#0f172a0d}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}', ke = {};
function wi(t, e) {
  (ke[t] || []).forEach((r) => {
    try {
      r(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function kr(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function _r(t, e) {
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
const Ue = /* @__PURE__ */ new WeakMap();
async function at(t, e = {}) {
  const a = Ue.get(t), r = async () => {
    var u;
    const n = e.widgetId || e.companyId || "default", p = await wr(n, e.apiUrl), l = _r(p, e);
    if (l.enabled === !1 || l.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let f = t.shadowRoot;
    f || (f = t.attachShadow({ mode: "open" })), f.innerHTML = "";
    const c = document.createElement("style");
    c.textContent = yr, f.appendChild(c);
    const m = document.createElement("div");
    m.className = "pitaj-shadow-mount", f.appendChild(m);
    const d = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((u = t.closest) != null && u.call(t, "[data-pitaj-preview]")));
    zt(
      /* @__PURE__ */ i(
        hr,
        {
          config: l,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: d,
          initialScreen: e.initialScreen,
          onEvent: wi
        }
      ),
      m
    );
    const g = ve();
    return g && (t.__pitajController = g), {
      controller: g,
      unmount: () => {
        zt(null, m), f && (f.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(r, r);
  Ue.set(t, o);
  try {
    return await o;
  } finally {
    Ue.get(t) === o && Ue.delete(t);
  }
}
let Ce = null;
const Fe = {
  mount: async (t, e) => {
    const a = await at(t, e);
    return Ce = a.unmount, a;
  },
  unmount: () => {
    Ce && (Ce(), Ce = null);
  },
  init: async (t) => {
    const e = kr(t.containerId || "pitaj-io-widget-root"), a = await at(e, {
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
    wi(t, e);
  }
};
class Nr extends HTMLElement {
  constructor() {
    super(...arguments);
    ye(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", r = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", n = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", p = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: l } = await at(this, { widgetId: a, apiUrl: r, position: o, startOpen: n, isInline: p });
    this.unmountFn = l;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Rt(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const a = t.getAttribute("data-api-url") || void 0, r = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", n = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: r, startOpen: o, isInline: n };
}
var Ht;
if (typeof window < "u") {
  const t = ((Ht = window.PitajIO) == null ? void 0 : Ht._q) || [];
  window.PitajIO = Fe, customElements.get("pitaj-io") || customElements.define("pitaj-io", Nr);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, Fe.init(e).then(() => {
      t.forEach(({ method: a, args: r }) => {
        const o = Fe[a];
        typeof o == "function" && o(...r);
      });
    });
  else {
    const a = document.currentScript;
    let r = Rt(a);
    if (!r) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let n = o.length - 1; n >= 0; n--) {
        const p = o[n];
        if (p.src && /widget(\.iife)?\.js/i.test(p.src) && (r = Rt(p), r))
          break;
      }
    }
    r && Fe.init({ containerId: "pitaj-io-widget-root", ...r });
  }
}
export {
  te as A,
  Cr as C,
  Ar as M,
  We as P,
  we as T,
  Sr as U,
  ta as a,
  je as b,
  ma as c,
  T as d,
  $r as e,
  Ir as f,
  Mr as g,
  xe as h,
  Fe as i,
  ue as k,
  ni as t,
  i as u,
  Y as y
};
