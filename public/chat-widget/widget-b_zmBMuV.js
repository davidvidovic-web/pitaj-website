var _i = Object.defineProperty;
var ki = (e, t, a) => t in e ? _i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var Mt = (e, t, a) => ki(e, typeof t != "symbol" ? t + "" : t, a);
var ie, Q, Ge, St, Me, Ze, Ye, qe, me, pe, ce, Ot = {}, Qe = [], Mi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ae = Array.isArray;
function vt(e, t) {
  for (var a in t) e[a] = t[a];
  return e;
}
function fe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Ni(e, t, a) {
  var r, o, n, l = {};
  for (n in t) n == "key" ? r = t[n] : n == "ref" ? o = t[n] : l[n] = t[n];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ie.call(arguments, 2) : a), typeof e == "function" && e.defaultProps != null) for (n in e.defaultProps) l[n] === void 0 && (l[n] = e.defaultProps[n]);
  return Qt(e, l, r, o, null);
}
function Qt(e, t, a, r, o) {
  var n = { type: e, props: t, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ge, __i: -1, __u: 0 };
  return o == null && Q.vnode != null && Q.vnode(n), n;
}
function mt(e) {
  return e.children;
}
function Jt(e, t) {
  this.props = e, this.context = t;
}
function Lt(e, t) {
  if (t == null) return e.__ ? Lt(e.__, e.__i + 1) : null;
  for (var a; t < e.__k.length; t++) if ((a = e.__k[t]) != null && a.__e != null) return a.__e;
  return typeof e.type == "function" ? Lt(e) : null;
}
function Je(e) {
  var t, a;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((a = e.__k[t]) != null && a.__e != null) {
      e.__e = e.__c.base = a.__e;
      break;
    }
    return Je(e);
  }
}
function Ne(e) {
  (!e.__d && (e.__d = !0) && St.push(e) && !ee.__r++ || Me !== Q.debounceRendering) && ((Me = Q.debounceRendering) || Ze)(ee);
}
function ee() {
  for (var e, t, a, r, o, n, l, s = 1; St.length; ) St.length > s && St.sort(Ye), e = St.shift(), s = St.length, e.__d && (a = void 0, o = (r = (t = e).__v).__e, n = [], l = [], t.__P && ((a = vt({}, r)).__v = r.__v + 1, Q.vnode && Q.vnode(a), he(t.__P, a, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, n, o ?? Lt(r), !!(32 & r.__u), l), a.__v = r.__v, a.__.__k[a.__i] = a, ei(n, a, l), a.__e != o && Je(a)));
  ee.__r = 0;
}
function Xe(e, t, a, r, o, n, l, s, f, u, g) {
  var p, m, x, h, _, z, k = r && r.__k || Qe, L = t.length;
  for (f = Si(a, t, k, f, L), p = 0; p < L; p++) (x = a.__k[p]) != null && (m = x.__i === -1 ? Ot : k[x.__i] || Ot, x.__i = p, z = he(e, x, m, o, n, l, s, f, u, g), h = x.__e, x.ref && m.ref != x.ref && (m.ref && ge(m.ref, null, x), g.push(x.ref, x.__c || h, x)), _ == null && h != null && (_ = h), 4 & x.__u || m.__k === x.__k ? f = ti(x, f, e) : typeof x.type == "function" && z !== void 0 ? f = z : h && (f = h.nextSibling), x.__u &= -7);
  return a.__e = _, f;
}
function Si(e, t, a, r, o) {
  var n, l, s, f, u, g = a.length, p = g, m = 0;
  for (e.__k = new Array(o), n = 0; n < o; n++) (l = t[n]) != null && typeof l != "boolean" && typeof l != "function" ? (f = n + m, (l = e.__k[n] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? Qt(null, l, null, null, null) : ae(l) ? Qt(mt, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? Qt(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, s = null, (u = l.__i = Ii(l, a, f, p)) !== -1 && (p--, (s = a[u]) && (s.__u |= 2)), s == null || s.__v === null ? (u == -1 && (o > g ? m-- : o < g && m++), typeof l.type != "function" && (l.__u |= 4)) : u != f && (u == f - 1 ? m-- : u == f + 1 ? m++ : (u > f ? m-- : m++, l.__u |= 4))) : e.__k[n] = null;
  if (p) for (n = 0; n < g; n++) (s = a[n]) != null && !(2 & s.__u) && (s.__e == r && (r = Lt(s)), ai(s, s));
  return r;
}
function ti(e, t, a) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = ti(r[o], t, a));
    return t;
  }
  e.__e != t && (t && e.type && !a.contains(t) && (t = Lt(e)), a.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ii(e, t, a, r) {
  var o, n, l = e.key, s = e.type, f = t[a];
  if (f === null && e.key == null || f && l == f.key && s === f.type && !(2 & f.__u)) return a;
  if (r > (f != null && !(2 & f.__u) ? 1 : 0)) for (o = a - 1, n = a + 1; o >= 0 || n < t.length; ) {
    if (o >= 0) {
      if ((f = t[o]) && !(2 & f.__u) && l == f.key && s === f.type) return o;
      o--;
    }
    if (n < t.length) {
      if ((f = t[n]) && !(2 & f.__u) && l == f.key && s === f.type) return n;
      n++;
    }
  }
  return -1;
}
function Se(e, t, a) {
  t[0] == "-" ? e.setProperty(t, a ?? "") : e[t] = a == null ? "" : typeof a != "number" || Mi.test(t) ? a : a + "px";
}
function Gt(e, t, a, r, o) {
  var n;
  t: if (t == "style") if (typeof a == "string") e.style.cssText = a;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) a && t in a || Se(e.style, t, "");
    if (a) for (t in a) r && a[t] === r[t] || Se(e.style, t, a[t]);
  }
  else if (t[0] == "o" && t[1] == "n") n = t != (t = t.replace(qe, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + n] = a, a ? r ? a.t = r.t : (a.t = me, e.addEventListener(t, n ? ce : pe, n)) : e.removeEventListener(t, n ? ce : pe, n);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = a ?? "";
      break t;
    } catch {
    }
    typeof a == "function" || (a == null || a === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && a == 1 ? "" : a));
  }
}
function Ie(e) {
  return function(t) {
    if (this.l) {
      var a = this.l[t.type + e];
      if (t.u == null) t.u = me++;
      else if (t.u < a.t) return;
      return a(Q.event ? Q.event(t) : t);
    }
  };
}
function he(e, t, a, r, o, n, l, s, f, u) {
  var g, p, m, x, h, _, z, k, L, U, F, c, w, N, E, R, B, $ = t.type;
  if (t.constructor !== void 0) return null;
  128 & a.__u && (f = !!(32 & a.__u), n = [s = t.__e = a.__e]), (g = Q.__b) && g(t);
  t: if (typeof $ == "function") try {
    if (k = t.props, L = "prototype" in $ && $.prototype.render, U = (g = $.contextType) && r[g.__c], F = g ? U ? U.props.value : g.__ : r, a.__c ? z = (p = t.__c = a.__c).__ = p.__E : (L ? t.__c = p = new $(k, F) : (t.__c = p = new Jt(k, F), p.constructor = $, p.render = Ai), U && U.sub(p), p.props = k, p.state || (p.state = {}), p.context = F, p.__n = r, m = p.__d = !0, p.__h = [], p._sb = []), L && p.__s == null && (p.__s = p.state), L && $.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = vt({}, p.__s)), vt(p.__s, $.getDerivedStateFromProps(k, p.__s))), x = p.props, h = p.state, p.__v = t, m) L && $.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), L && p.componentDidMount != null && p.__h.push(p.componentDidMount);
    else {
      if (L && $.getDerivedStateFromProps == null && k !== x && p.componentWillReceiveProps != null && p.componentWillReceiveProps(k, F), !p.__e && (p.shouldComponentUpdate != null && p.shouldComponentUpdate(k, p.__s, F) === !1 || t.__v == a.__v)) {
        for (t.__v != a.__v && (p.props = k, p.state = p.__s, p.__d = !1), t.__e = a.__e, t.__k = a.__k, t.__k.some(function(C) {
          C && (C.__ = t);
        }), c = 0; c < p._sb.length; c++) p.__h.push(p._sb[c]);
        p._sb = [], p.__h.length && l.push(p);
        break t;
      }
      p.componentWillUpdate != null && p.componentWillUpdate(k, p.__s, F), L && p.componentDidUpdate != null && p.__h.push(function() {
        p.componentDidUpdate(x, h, _);
      });
    }
    if (p.context = F, p.props = k, p.__P = e, p.__e = !1, w = Q.__r, N = 0, L) {
      for (p.state = p.__s, p.__d = !1, w && w(t), g = p.render(p.props, p.state, p.context), E = 0; E < p._sb.length; E++) p.__h.push(p._sb[E]);
      p._sb = [];
    } else do
      p.__d = !1, w && w(t), g = p.render(p.props, p.state, p.context), p.state = p.__s;
    while (p.__d && ++N < 25);
    p.state = p.__s, p.getChildContext != null && (r = vt(vt({}, r), p.getChildContext())), L && !m && p.getSnapshotBeforeUpdate != null && (_ = p.getSnapshotBeforeUpdate(x, h)), R = g, g != null && g.type === mt && g.key == null && (R = ii(g.props.children)), s = Xe(e, ae(R) ? R : [R], t, a, r, o, n, l, s, f, u), p.base = t.__e, t.__u &= -161, p.__h.length && l.push(p), z && (p.__E = p.__ = null);
  } catch (C) {
    if (t.__v = null, f || n != null) if (C.then) {
      for (t.__u |= f ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      n[n.indexOf(s)] = null, t.__e = s;
    } else for (B = n.length; B--; ) fe(n[B]);
    else t.__e = a.__e, t.__k = a.__k;
    Q.__e(C, t, a);
  }
  else n == null && t.__v == a.__v ? (t.__k = a.__k, t.__e = a.__e) : s = t.__e = zi(a.__e, t, a, r, o, n, l, f, u);
  return (g = Q.diffed) && g(t), 128 & t.__u ? void 0 : s;
}
function ei(e, t, a) {
  for (var r = 0; r < a.length; r++) ge(a[r], a[++r], a[++r]);
  Q.__c && Q.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      Q.__e(n, o.__v);
    }
  });
}
function ii(e) {
  return typeof e != "object" || e == null ? e : ae(e) ? e.map(ii) : vt({}, e);
}
function zi(e, t, a, r, o, n, l, s, f) {
  var u, g, p, m, x, h, _, z = a.props, k = t.props, L = t.type;
  if (L == "svg" ? o = "http://www.w3.org/2000/svg" : L == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (u = 0; u < n.length; u++) if ((x = n[u]) && "setAttribute" in x == !!L && (L ? x.localName == L : x.nodeType == 3)) {
      e = x, n[u] = null;
      break;
    }
  }
  if (e == null) {
    if (L == null) return document.createTextNode(k);
    e = document.createElementNS(o, L, k.is && k), s && (Q.__m && Q.__m(t, n), s = !1), n = null;
  }
  if (L === null) z === k || s && e.data === k || (e.data = k);
  else {
    if (n = n && ie.call(e.childNodes), z = a.props || Ot, !s && n != null) for (z = {}, u = 0; u < e.attributes.length; u++) z[(x = e.attributes[u]).name] = x.value;
    for (u in z) if (x = z[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") p = x;
      else if (!(u in k)) {
        if (u == "value" && "defaultValue" in k || u == "checked" && "defaultChecked" in k) continue;
        Gt(e, u, null, x, o);
      }
    }
    for (u in k) x = k[u], u == "children" ? m = x : u == "dangerouslySetInnerHTML" ? g = x : u == "value" ? h = x : u == "checked" ? _ = x : s && typeof x != "function" || z[u] === x || Gt(e, u, x, z[u], o);
    if (g) s || p && (g.__html === p.__html || g.__html === e.innerHTML) || (e.innerHTML = g.__html), t.__k = [];
    else if (p && (e.innerHTML = ""), Xe(t.type === "template" ? e.content : e, ae(m) ? m : [m], t, a, r, L == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, l, n ? n[0] : a.__k && Lt(a, 0), s, f), n != null) for (u = n.length; u--; ) fe(n[u]);
    s || (u = "value", L == "progress" && h == null ? e.removeAttribute("value") : h !== void 0 && (h !== e[u] || L == "progress" && !h || L == "option" && h !== z[u]) && Gt(e, u, h, z[u], o), u = "checked", _ !== void 0 && _ !== e[u] && Gt(e, u, _, z[u], o));
  }
  return e;
}
function ge(e, t, a) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    Q.__e(o, a);
  }
}
function ai(e, t, a) {
  var r, o;
  if (Q.unmount && Q.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ge(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      Q.__e(n, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && ai(r[o], t, a || typeof e.type != "function");
  a || fe(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ai(e, t, a) {
  return this.constructor(e, a);
}
function ze(e, t, a) {
  var r, o, n, l;
  t == document && (t = document.documentElement), Q.__ && Q.__(e, t), o = (r = !1) ? null : t.__k, n = [], l = [], he(t, e = t.__k = Ni(mt, null, [e]), o || Ot, Ot, t.namespaceURI, o ? null : t.firstChild ? ie.call(t.childNodes) : null, n, o ? o.__e : t.firstChild, r, l), ei(n, e, l);
}
ie = Qe.slice, Q = { __e: function(e, t, a, r) {
  for (var o, n, l; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), l = o.__d), l) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, Ge = 0, Jt.prototype.setState = function(e, t) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = vt({}, this.state), typeof e == "function" && (e = e(vt({}, a), this.props)), e && vt(a, e), e != null && this.__v && (t && this._sb.push(t), Ne(this));
}, Jt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ne(this));
}, Jt.prototype.render = mt, St = [], Ze = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ye = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ee.__r = 0, qe = /(PointerCapture)$|Capture$/i, me = 0, pe = Ie(!1), ce = Ie(!0);
var Li = 0;
function i(e, t, a, r, o, n) {
  t || (t = {});
  var l, s, f = t;
  if ("ref" in f) for (s in f = {}, t) s == "ref" ? l = t[s] : f[s] = t[s];
  var u = { type: e, props: f, key: a, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Li, __i: -1, __u: 0, __source: o, __self: n };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) f[s] === void 0 && (f[s] = l[s]);
  return Q.vnode && Q.vnode(u), u;
}
var Vt, ot, ne, Ae, Wt = 0, ri = [], pt = Q, Le = pt.__b, Te = pt.__r, $e = pt.diffed, Ce = pt.__c, De = pt.unmount, Ee = pt.__;
function be(e, t) {
  pt.__h && pt.__h(ot, e, Wt || t), Wt = 0;
  var a = ot.__H || (ot.__H = { __: [], __h: [] });
  return e >= a.__.length && a.__.push({}), a.__[e];
}
function V(e) {
  return Wt = 1, Ti(oi, e);
}
function Ti(e, t, a) {
  var r = be(Vt++, 2);
  if (r.t = e, !r.__c && (r.__ = [oi(void 0, t), function(s) {
    var f = r.__N ? r.__N[0] : r.__[0], u = r.t(f, s);
    f !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = ot, !ot.__f)) {
    var o = function(s, f, u) {
      if (!r.__c.__H) return !0;
      var g = r.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (g.every(function(m) {
        return !m.__N;
      })) return !n || n.call(this, s, f, u);
      var p = r.__c.props !== s;
      return g.forEach(function(m) {
        if (m.__N) {
          var x = m.__[0];
          m.__ = m.__N, m.__N = void 0, x !== m.__[0] && (p = !0);
        }
      }), n && n.call(this, s, f, u) || p;
    };
    ot.__f = !0;
    var n = ot.shouldComponentUpdate, l = ot.componentWillUpdate;
    ot.componentWillUpdate = function(s, f, u) {
      if (this.__e) {
        var g = n;
        n = void 0, o(s, f, u), n = g;
      }
      l && l.call(this, s, f, u);
    }, ot.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function G(e, t) {
  var a = be(Vt++, 3);
  !pt.__s && ni(a.__H, t) && (a.__ = e, a.u = t, ot.__H.__h.push(a));
}
function J(e) {
  return Wt = 5, It(function() {
    return { current: e };
  }, []);
}
function It(e, t) {
  var a = be(Vt++, 7);
  return ni(a.__H, t) && (a.__ = e(), a.__H = t, a.__h = e), a.__;
}
function et(e, t) {
  return Wt = 8, It(function() {
    return e;
  }, t);
}
function $i() {
  for (var e; e = ri.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Xt), e.__H.__h.forEach(le), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], pt.__e(t, e.__v);
  }
}
pt.__b = function(e) {
  ot = null, Le && Le(e);
}, pt.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ee && Ee(e, t);
}, pt.__r = function(e) {
  Te && Te(e), Vt = 0;
  var t = (ot = e.__c).__H;
  t && (ne === ot ? (t.__h = [], ot.__h = [], t.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (t.__h.forEach(Xt), t.__h.forEach(le), t.__h = [], Vt = 0)), ne = ot;
}, pt.diffed = function(e) {
  $e && $e(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ri.push(t) !== 1 && Ae === pt.requestAnimationFrame || ((Ae = pt.requestAnimationFrame) || Ci)($i)), t.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), ne = ot = null;
}, pt.__c = function(e, t) {
  t.some(function(a) {
    try {
      a.__h.forEach(Xt), a.__h = a.__h.filter(function(r) {
        return !r.__ || le(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], pt.__e(r, a.__v);
    }
  }), Ce && Ce(e, t);
}, pt.unmount = function(e) {
  De && De(e);
  var t, a = e.__c;
  a && a.__H && (a.__H.__.forEach(function(r) {
    try {
      Xt(r);
    } catch (o) {
      t = o;
    }
  }), a.__H = void 0, t && pt.__e(t, a.__v));
};
var Pe = typeof requestAnimationFrame == "function";
function Ci(e) {
  var t, a = function() {
    clearTimeout(r), Pe && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(a, 100);
  Pe && (t = requestAnimationFrame(a));
}
function Xt(e) {
  var t = ot, a = e.__c;
  typeof a == "function" && (e.__c = void 0, a()), ot = t;
}
function le(e) {
  var t = ot;
  e.__c = e.__(), ot = t;
}
function ni(e, t) {
  return !e || e.length !== t.length || t.some(function(a, r) {
    return a !== e[r];
  });
}
function oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
async function Di(e, t) {
  const a = e.body;
  if (!a)
    throw new Error("Response body is null");
  const r = a.getReader(), o = new TextDecoder("utf-8");
  let n = "";
  try {
    for (; ; ) {
      const { done: l, value: s } = await r.read();
      if (l)
        break;
      n += o.decode(s, { stream: !0 });
      const f = n.split(/\r?\n/);
      n = f.pop() || "";
      for (const u of f) {
        const g = u.trim();
        if (!(!g || g.startsWith(":")) && g.startsWith("data:")) {
          const p = g.slice(5).trim();
          if (p === "[DONE]") {
            t.onDone && t.onDone();
            return;
          }
          try {
            const m = JSON.parse(p);
            if (typeof m == "string")
              t.onChunk(m);
            else if (m && typeof m == "object") {
              (m.chunk || m.token || m.content || m.text) && t.onChunk(m.chunk || m.token || m.content || m.text), m.sources && Array.isArray(m.sources) && t.onSources && t.onSources(m.sources);
              const x = m.suggestedQuestions ?? m.suggested_questions;
              Array.isArray(x) && x.length > 0 && t.onSuggestedQuestions && t.onSuggestedQuestions(x), t.onConversationId && (m.conversation_id !== void 0 || m.conversationId !== void 0) && t.onConversationId(
                m.conversation_id ?? m.conversationId
              );
              const h = m.ticket_number ?? m.ticketNumber;
              t.onTicketNumber && h !== void 0 && h !== null && String(h).trim() !== "" && String(h).trim() !== "undefined" && String(h).trim() !== "null" && t.onTicketNumber(
                String(h).trim()
              ), t.onActionTrigger && m.triggered_action && typeof m.triggered_action == "object" && t.onActionTrigger(m.triggered_action);
            }
          } catch {
            t.onChunk(p);
          }
        }
      }
    }
    t.onDone && t.onDone();
  } catch (l) {
    if (t.onError)
      t.onError(l);
    else
      throw l;
  }
}
class si extends Error {
  constructor(a, r = 60, o) {
    super(a);
    Mt(this, "retryAfterSeconds");
    Mt(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = r, this.code = o;
  }
}
class pi extends Error {
  constructor(a, r, o, n) {
    super(a);
    Mt(this, "status");
    Mt(this, "code");
    Mt(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = r, this.code = o, this.retryAfterSeconds = n;
  }
}
function Ei(e, t) {
  const a = typeof e == "number" ? e : typeof e == "string" ? parseInt(e, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : t;
}
async function Pi(e, t) {
  const a = await e.json().catch(() => null);
  ci(e.status, a, t, e.headers.get("Retry-After"));
}
function ci(e, t, a, r) {
  const o = typeof (t == null ? void 0 : t.code) == "string" ? t.code : void 0, n = (t == null ? void 0 : t.error) || (t == null ? void 0 : t.message) || a, l = Ei((t == null ? void 0 : t.retry_after) ?? r, 60);
  throw e === 429 || o === "RATE_LIMIT_EXCEEDED" ? new si(n, l, o) : new pi(n, e, o, l);
}
function li(e) {
  if (typeof e != "string") return null;
  const t = e.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(t) || t === "XX" ? null : t;
}
function xe(e) {
  if (typeof e != "string") return null;
  const t = e.trim();
  return t.length > 0 ? t : null;
}
function Bi(e) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const t = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return xe(t.of(e));
  } catch {
    return null;
  }
}
function Ui() {
  let e = null, t = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const r = JSON.parse(a);
        e = li(
          r.country_code ?? r.countryCode ?? r.visitor_country_code ?? r.visitorCountryCode ?? r.country
        ), t = xe(
          r.country_name ?? r.countryName ?? r.visitor_country_name ?? r.visitorCountryName
        );
      }
    } catch {
    }
  return !t && e && (t = Bi(e)), { code: e, name: t };
}
const Be = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Fi(e, t, a, r) {
  var f;
  const o = (r == null ? void 0 : r.action) || (a && a.length > 0 ? a[0] : null);
  if (o && t.onActionTrigger) {
    const p = (!!(o.widget_id || o.widget || r != null && r.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let m = 0; m < p.length; m++) {
      const x = p[m] + (m < p.length - 1 ? " " : "");
      t.onChunk(x), await new Promise((h) => setTimeout(h, 20));
    }
    t.onActionTrigger({
      id: o.id,
      name: o.name,
      form_id: o.form_id,
      widget_id: o.widget_id,
      widget: o.widget || (r == null ? void 0 : r.widget) || null
    }), t.onDone && t.onDone();
    return;
  }
  const n = `${Be[Math.floor(Math.random() * Be.length)]}

Vaše pitanje: *"${e}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, l = ((f = r == null ? void 0 : r.content) == null ? void 0 : f.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = n.split(" ");
  for (let u = 0; u < s.length; u++) {
    const g = s[u] + (u < s.length - 1 ? " " : "");
    t.onChunk(g), await new Promise((p) => setTimeout(p, 20 + Math.random() * 20));
  }
  t.onSuggestedQuestions && l.length > 0 && t.onSuggestedQuestions(l), t.onDone && t.onDone();
}
async function Ri(e) {
  const {
    companyId: t,
    conversationId: a,
    visitorId: r,
    message: o,
    forceNewConversation: n,
    apiUrl: l,
    mockMode: s,
    visitorName: f,
    visitorEmail: u,
    visitorPhone: g,
    visitorCountryCode: p,
    visitorCountryName: m,
    actions: x,
    previewDraft: h,
    callbacks: _
  } = e;
  if (s || !t || t === "default") {
    await Fi(o, _, x, h);
    return;
  }
  const z = (l || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), k = Ui(), L = li(p) ?? k.code ?? void 0, U = xe(m) ?? k.name ?? void 0, F = `${z}/api/widget/${t}/chat`, c = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, w = await fetch(F, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: c,
      force_new_conversation: n === !0,
      visitor_id: r,
      visitor_name: f || void 0,
      visitor_email: u || void 0,
      visitor_phone: g || void 0,
      visitor_country_code: L,
      visitor_country_name: U
    })
  });
  if (w.ok || await Pi(w, `API greška (${w.status})`), (w.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Di(w, _);
  else {
    const E = await w.json(), R = E.answer || E.message || "";
    E.conversation_id !== void 0 && _.onConversationId && _.onConversationId(E.conversation_id);
    const B = E.ticket_number ?? E.ticketNumber;
    if (B != null && String(B).trim() !== "" && String(B).trim() !== "undefined" && String(B).trim() !== "null" && _.onTicketNumber && _.onTicketNumber(String(B).trim()), E.triggered_action && _.onActionTrigger && _.onActionTrigger(E.triggered_action), R && R.trim()) {
      const C = R.split(" ");
      for (let W = 0; W < C.length; W++) {
        const st = C[W] + (W < C.length - 1 ? " " : "");
        _.onChunk(st), await new Promise((it) => setTimeout(it, 15));
      }
    }
    const $ = E.suggestedQuestions ?? E.suggested_questions;
    Array.isArray($) && $.length > 0 && _.onSuggestedQuestions && _.onSuggestedQuestions($), _.onDone && _.onDone();
  }
}
async function de(e) {
  const { widgetId: t, visitorId: a, apiUrl: r, status: o, page: n = 1, perPage: l = 15 } = e, s = (r || "").replace(/\/$/, ""), f = new URLSearchParams({
    visitor_id: a,
    page: String(n),
    per_page: String(l)
  });
  o && f.set("status", o);
  const u = await fetch(`${s}/api/widget/${encodeURIComponent(t)}/tickets?${f}`), g = await u.json().catch(() => null);
  if (!u.ok) throw new Error(g && "error" in g ? g.error : "Tikete nije moguće učitati.");
  const p = (g == null ? void 0 : g.data) || [], m = p.map((_) => ({
    id: _.id,
    ticketNumber: _.ticket_number,
    conversationId: _.conversation_id,
    isResolved: !!_.is_resolved,
    updatedAt: _.updated_at,
    messages: (_.messages || []).map((z) => {
      var k;
      return {
        id: String(z.id),
        content: z.content,
        sender: z.role === "user" ? "user" : "ai",
        timestamp: z.created_at,
        status: "sent",
        suggestedQuestions: ((k = z.meta_json) == null ? void 0 : k.suggested_questions) || void 0
      };
    })
  })), x = g == null ? void 0 : g.meta, h = (x == null ? void 0 : x.has_more) !== void 0 ? !!x.has_more : p.length >= l;
  return {
    tickets: m,
    hasMore: h,
    total: x == null ? void 0 : x.total,
    currentPage: (x == null ? void 0 : x.current_page) ?? n
  };
}
async function Hi(e, t, a) {
  return (await de({ widgetId: e, visitorId: t, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function Oi(e, t, a, r, o) {
  const n = !!t && !t.startsWith("conv-");
  if (!e || e === "default" || o || !n)
    return await new Promise((f) => setTimeout(f, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const l = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await fetch(`${l}/api/widget/${e}/conversations/${t}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!s.ok) {
    const u = (await s.json().catch(() => ({}))).error || (s.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), g = new Error(u);
    throw g.status = s.status, g;
  }
  return await s.json();
}
const Ue = "pitaj_io_visitor_id", Vi = "chat_direkt_visitor_id", Wi = "pitaj_io_visitor_meta", Ki = "chat_direkt_visitor_meta";
function di(e) {
  return `pitaj_io_convs_${e}`;
}
function Gi(e) {
  return `chat_direkt_convs_${e}`;
}
function Zi() {
  try {
    let e = localStorage.getItem(Ue) || localStorage.getItem(Vi);
    return e || (e = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Ue, e)), e;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Yi = [];
function qi(e) {
  return !!(e.id.startsWith("conv-sample-") || e.title === "Kako da resetujem lozinku?" || e.title === "Mogu li izvesti podatke u CSV?");
}
function Qi(e) {
  return e.filter((t) => !qi(t)).map((t) => {
    const a = t.ticketNumber && String(t.ticketNumber).trim() !== "" && String(t.ticketNumber).trim() !== "undefined" && String(t.ticketNumber).trim() !== "null" ? String(t.ticketNumber).trim() : null;
    return { ...t, ticketNumber: a };
  });
}
function Fe(e) {
  try {
    const t = localStorage.getItem(di(e)) || localStorage.getItem(Gi(e));
    if (t) {
      const a = JSON.parse(t);
      if (Array.isArray(a))
        return Qi(a);
    }
  } catch (t) {
    console.warn("[Pitaj.io] Error reading from localStorage", t);
  }
  return Yi;
}
function Ji(e, t) {
  try {
    localStorage.setItem(di(e), JSON.stringify(t));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function Re(e) {
  var o, n, l, s, f, u, g, p, m, x, h;
  const t = e.previewDraft, a = (/* @__PURE__ */ new Date()).toISOString(), r = (t == null ? void 0 : t.initialStep) || "idle";
  if (r === "idle") {
    const _ = (t == null ? void 0 : t.simulatedGreeting) || e.welcomeHeadline || e.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", z = (o = t == null ? void 0 : t.action) != null && o.trigger_hint ? [t.action.trigger_hint] : e.suggestedQuestions && e.suggestedQuestions.length > 0 ? e.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: _,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: _,
            sender: "ai",
            timestamp: a,
            status: "sent",
            suggestedQuestions: z.length > 0 ? z : void 0
          }
        ]
      }
    ];
  }
  if (r === "form") {
    const _ = (t == null ? void 0 : t.simulatedUserMessage) || ((n = t == null ? void 0 : t.action) == null ? void 0 : n.trigger_hint) || "Pokreni akciju", k = !!((l = t == null ? void 0 : t.action) != null && l.widget || t != null && t.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", L = (t == null ? void 0 : t.widget) || ((s = t == null ? void 0 : t.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((f = t == null ? void 0 : t.action) == null ? void 0 : f.name) || "Pregled akcije",
        preview: k,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: _,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai",
            content: k,
            sender: "ai",
            timestamp: a,
            status: "sent",
            widget: L
          }
        ]
      }
    ];
  }
  if (r === "submitted") {
    const _ = (t == null ? void 0 : t.simulatedUserMessage) || ((u = t == null ? void 0 : t.action) == null ? void 0 : u.trigger_hint) || "Pokreni akciju", z = ((g = t == null ? void 0 : t.form) == null ? void 0 : g.name) || ((p = t == null ? void 0 : t.action) == null ? void 0 : p.name) || "Forma", k = ((m = t == null ? void 0 : t.form) == null ? void 0 : m.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: z,
        preview: k,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: _,
            sender: "user",
            timestamp: new Date(Date.now() - 4e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-form-sub",
            content: `Forma: ${z}
- Status: Uspješno poslano`,
            sender: "user",
            timestamp: new Date(Date.now() - 1e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-success",
            content: k,
            sender: "ai",
            timestamp: a,
            status: "sent"
          }
        ]
      }
    ];
  }
  if (r === "dismissed") {
    const _ = (t == null ? void 0 : t.simulatedUserMessage) || ((x = t == null ? void 0 : t.action) == null ? void 0 : x.trigger_hint) || "Pokreni akciju", z = "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((h = t == null ? void 0 : t.action) == null ? void 0 : h.name) || "Pregled akcije",
        preview: z,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: _,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-dismiss",
            content: z,
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
function Xi(e, t) {
  var at, tt, bt, ht, ft, ut, zt, xt, yt, _t, kt, Tt, $t, Ct, Dt, Et, Pt;
  const a = !!(e.isPreview || e.previewDraft), [r, o] = V(e), [n, l] = V((t == null ? void 0 : t.startOpen) ?? !1), [s, f] = V(
    (t == null ? void 0 : t.initialScreen) ?? (a ? "conversation" : "new-conversation")
  ), [u, g] = V(
    () => a ? Re(e) : Fe(e.companyId)
  ), [p, m] = V(() => {
    if (a) return "preview-conv-1";
    if ((t == null ? void 0 : t.initialScreen) === "conversation") {
      const j = Fe(e.companyId);
      return j.length > 0 ? j[0].id : null;
    }
    return null;
  }), [x, h] = V(!1), [_, z] = V(null), [k, L] = V(null), U = J(Zi()), [F, c] = V(() => {
    try {
      const j = localStorage.getItem(Wi) || localStorage.getItem(Ki);
      if (j) {
        const S = JSON.parse(j), D = {};
        return typeof S.name == "string" && (D.name = S.name), typeof S.email == "string" && (D.email = S.email), typeof S.phone == "string" && (D.phone = S.phone), D;
      }
    } catch (j) {
      console.warn("[Pitaj.io] Error reading visitor meta", j);
    }
    return {};
  }), w = J(t == null ? void 0 : t.emitEvent);
  w.current = t == null ? void 0 : t.emitEvent;
  const N = J(t == null ? void 0 : t.onActionTrigger);
  N.current = t == null ? void 0 : t.onActionTrigger;
  const E = et((j, S) => {
    const D = Number.isFinite(j) ? Math.max(1, Math.floor(j)) : 60;
    z((Z) => Z === null ? D : Math.max(Z, D)), L(S || `Previše zahtjeva. Molimo sačekajte ${D}s.`);
  }, []), R = et((j) => {
    if (j) {
      if (j === "WIDGET_CHAT_DISABLED") {
        o((S) => ({ ...S, chatAvailable: !1 })), L("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (j === "WIDGET_TRANSCRIBE_DISABLED") {
        o((S) => ({ ...S, transcribeAvailable: !1 })), L("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      j === "WIDGET_FORMS_DISABLED" && (o((S) => ({ ...S, formsAvailable: !1, formsEnabled: !1 })), L("Forme su trenutno privremeno nedostupne."));
    }
  }, []), B = et((j, S = "Došlo je do greške pri obradi zahtjeva.") => {
    var Z, P, b, y;
    if (j instanceof si) {
      E(j.retryAfterSeconds, j.message), (Z = w.current) == null || Z.call(w, "error_occurred", { code: j.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (j instanceof pi) {
      if (j.code === "COUNTRY_BLOCKED") {
        o((d) => ({ ...d, chatAvailable: !1 })), L(j.message || "Pristup nije dozvoljen u vašoj regiji."), (P = w.current) == null || P.call(w, "error_occurred", { status: j.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      R(j.code), L(j.message || S), (b = w.current) == null || b.call(w, "error_occurred", { status: j.status, code: j.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let D = j instanceof Error ? j.message : S;
    !D || D === "Failed to fetch" || D.includes("NetworkError") ? D = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : D.includes("404") ? D = "Traženi razgovor ili podaci nisu pronađeni." : (D.includes("500") || D.includes("502") || D.includes("503")) && (D = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), L(D || S), (y = w.current) == null || y.call(w, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [E, R]);
  G(() => {
    r.isPreview || r.mockMode || r.companyId === "preview" || Ji(r.companyId, u);
  }, [u, r.companyId, r.isPreview, r.mockMode]), G(() => {
    if (r.isPreview || r.previewDraft) {
      const j = Re(r);
      g(j), m("preview-conv-1"), f("conversation");
    }
  }, [
    r.isPreview,
    (at = r.previewDraft) == null ? void 0 : at.initialStep,
    (bt = (tt = r.previewDraft) == null ? void 0 : tt.action) == null ? void 0 : bt.id,
    (ft = (ht = r.previewDraft) == null ? void 0 : ht.action) == null ? void 0 : ft.name,
    (zt = (ut = r.previewDraft) == null ? void 0 : ut.action) == null ? void 0 : zt.trigger_hint,
    (yt = (xt = r.previewDraft) == null ? void 0 : xt.form) == null ? void 0 : yt.id,
    (kt = (_t = r.previewDraft) == null ? void 0 : _t.form) == null ? void 0 : kt.name,
    ($t = (Tt = r.previewDraft) == null ? void 0 : Tt.form) == null ? void 0 : $t.success_message,
    (Dt = (Ct = r.previewDraft) == null ? void 0 : Ct.widget) == null ? void 0 : Dt.id,
    (Pt = (Et = r.previewDraft) == null ? void 0 : Et.widget) == null ? void 0 : Pt.type
  ]), G(() => {
    if (_ === null || _ <= 0) return;
    const j = setInterval(() => {
      z((S) => S && S > 1 ? S - 1 : null);
    }, 1e3);
    return () => clearInterval(j);
  }, [_]), G(() => {
    if (!r.companyId || r.mockMode) return;
    let j = !0;
    return Hi(r.companyId, U.current, r.apiUrl).then((S) => {
      !j || !S || S.length === 0 || g((D) => {
        let Z = !1;
        const P = D.map((b) => {
          const y = S.find((d) => String(d.id) === b.id);
          return y && y.ticketNumber && b.ticketNumber !== y.ticketNumber ? (Z = !0, { ...b, ticketNumber: y.ticketNumber }) : b;
        });
        return Z ? P : D;
      });
    }).catch(() => {
    }), () => {
      j = !1;
    };
  }, [r.companyId, r.apiUrl, r.mockMode]);
  const $ = u.find((j) => j.id === p) || null, C = u.reduce((j, S) => j + (S.unread || 0), 0), W = et((j) => {
    l((S) => {
      var D;
      return S === j ? S : ((D = w.current) == null || D.call(w, j ? "widget_opened" : "widget_closed"), j);
    });
  }, []), st = et((j) => {
    f((S) => {
      var D;
      return S === j ? S : ((D = w.current) == null || D.call(w, "screen_changed", { screen: j }), j);
    });
  }, []), it = et((j) => {
    var S;
    m(j.id), g((D) => D.some((P) => P.id === j.id) ? D.map((P) => P.id === j.id ? { ...P, ...j, unread: 0, status: j.status || "active" } : P) : [{ ...j, unread: 0, status: j.status || "active" }, ...D]), f("conversation"), (S = w.current) == null || S.call(w, "conversation_selected", { conversationId: j.id });
  }, []), ct = et(() => {
    var j;
    g(
      (S) => S.map((D) => D.id === p ? { ...D, status: "ended" } : D)
    ), m(null), f("new-conversation"), (j = w.current) == null || j.call(w, "conversation_ended", { conversationId: p });
  }, [p]), Y = et((j) => {
    g((S) => S.filter((D) => D.id !== j)), m((S) => S === j ? null : S), p === j && f("new-conversation");
  }, [p]), I = et((j) => {
    var b;
    if (r.chatAvailable === !1) {
      L("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (_ !== null) {
      L(`Previše zahtjeva. Molimo sačekajte ${_}s.`);
      return;
    }
    const S = "conv-" + Date.now(), D = (/* @__PURE__ */ new Date()).toISOString(), Z = j ? j.length > 40 ? j.slice(0, 40) + "…" : j : "Novo ćaskanje", P = {
      id: S,
      title: Z,
      preview: j || "Započeto novo ćaskanje",
      timestamp: D,
      unread: 0,
      messages: j ? [
        {
          id: "msg-" + Date.now(),
          content: j,
          sender: "user",
          timestamp: D,
          status: "sent"
        }
      ] : []
    };
    g((y) => [P, ...y]), m(S), f("conversation"), (b = w.current) == null || b.call(w, "conversation_started", { conversationId: S, initialMessage: j }), j && M(S, j, [P.messages[0]], !0);
  }, [r.apiUrl, r.chatAvailable, r.companyId, r.mockMode, _, F]), M = async (j, S, D, Z = !1) => {
    var y;
    h(!0), L(null);
    const P = "ai-msg-" + Date.now(), b = {
      id: P,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    g(
      (d) => d.map((T) => T.id !== j ? T : {
        ...T,
        preview: S,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...T.messages.filter((A) => A.id !== P), b]
      })
    ), (y = w.current) == null || y.call(w, "stream_started", { conversationId: j });
    try {
      await Ri({
        companyId: r.companyId,
        conversationId: j,
        visitorId: U.current,
        message: S,
        forceNewConversation: Z || j.startsWith("conv-"),
        apiUrl: r.apiUrl,
        mockMode: r.mockMode || r.isPreview,
        visitorName: F.name,
        visitorEmail: F.email,
        visitorPhone: F.phone,
        actions: r.actions,
        previewDraft: r.previewDraft,
        callbacks: {
          onConversationId: (d) => {
            const T = j, A = String(d);
            j = A, m(A), g(
              (q) => q.map((H) => H.id === T || H.messages.some((lt) => lt.id === P) ? { ...H, id: A } : H)
            );
          },
          onTicketNumber: (d) => {
            const T = d && String(d).trim() !== "" && String(d).trim() !== "undefined" && String(d).trim() !== "null" ? String(d).trim() : null;
            T && g(
              (A) => A.map((q) => q.id === j || q.messages.some((lt) => lt.id === P) ? { ...q, ticketNumber: T } : q)
            );
          },
          onActionTrigger: (d) => {
            var A;
            const T = d.widget || d.triggered_widget || (d.widget_id && r.widgets ? r.widgets.find((q) => q.id === d.widget_id) : null) || null;
            T && g(
              (q) => q.map((H) => H.id === j || H.messages.some((nt) => nt.id === P) ? {
                ...H,
                messages: H.messages.map(
                  (nt) => nt.id === P ? { ...nt, widget: T } : nt
                )
              } : H)
            ), (A = N.current) == null || A.call(N, d);
          },
          onChunk: (d) => {
            g(
              (T) => T.map((A) => A.id === j || A.messages.some((H) => H.id === P) ? {
                ...A,
                messages: A.messages.map(
                  (H) => H.id === P ? { ...H, content: H.content + d } : H
                )
              } : A)
            );
          },
          onSources: (d) => {
            g(
              (T) => T.map((A) => A.id === j || A.messages.some((H) => H.id === P) ? {
                ...A,
                messages: A.messages.map(
                  (H) => H.id === P ? { ...H, sources: d } : H
                )
              } : A)
            );
          },
          onSuggestedQuestions: (d) => {
            g(
              (T) => T.map((A) => A.id === j || A.messages.some((H) => H.id === P) ? {
                ...A,
                messages: A.messages.map(
                  (H) => H.id === P ? { ...H, suggestedQuestions: d } : H
                )
              } : A)
            );
          },
          onDone: () => {
            var d;
            g(
              (T) => T.map((A) => {
                var At, Ut;
                if (!(A.id === j || A.messages.some((gt) => gt.id === P))) return A;
                const H = A.messages.find((gt) => gt.id === P), lt = (At = H == null ? void 0 : H.widget) == null ? void 0 : At.name, nt = (Ut = H == null ? void 0 : H.content) == null ? void 0 : Ut.trim(), Bt = nt ? nt.slice(0, 70) : lt ? `[${lt}]` : A.preview;
                return {
                  ...A,
                  preview: Bt,
                  messages: A.messages.map(
                    (gt) => gt.id === P ? { ...gt, isStreaming: !1 } : gt
                  )
                };
              })
            ), h(!1), (d = w.current) == null || d.call(w, "stream_completed", { conversationId: j });
          },
          onError: (d) => {
            console.error("[Pitaj.io] Stream error:", d), L(d.message || "Došlo je do greške u komunikaciji."), h(!1);
          }
        }
      });
    } catch (d) {
      h(!1), B(d, "Greška pri slanju poruke.");
    }
  }, X = et((j) => {
    var P;
    const S = j.trim();
    if (!S || x || r.chatAvailable === !1 || _ !== null) return;
    if (!p) {
      I(S);
      return;
    }
    const Z = {
      id: "usr-msg-" + Date.now(),
      content: S,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    g(
      (b) => b.map((y) => y.id !== p ? y : {
        ...y,
        preview: S,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...y.messages, Z]
      })
    ), (P = w.current) == null || P.call(w, "message_sent", { conversationId: p, content: S }), M(p, S, $ ? $.messages : []);
  }, [p, x, I, $, r.chatAvailable, r.companyId, r.apiUrl, r.mockMode, _]), v = et(
    async (j, S, D) => {
      var Z;
      if (!r.mockMode)
        try {
          await Oi(
            r.companyId,
            j,
            S,
            r.apiUrl,
            r.mockMode
          );
        } catch (P) {
          console.error("[Pitaj.io] Failed to submit rating:", P);
          const b = (P == null ? void 0 : P.status) === 404 ? "Razgovor ili tiket više nije dostupan." : P != null && P.message && !P.message.includes("failed") && !P.message.includes("404") ? P.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(b);
        }
      g(
        (P) => P.map(
          (b) => b.id === j ? { ...b, satisfaction: S, ratingScore: D ?? b.ratingScore } : b
        )
      ), (Z = w.current) == null || Z.call(w, "rating_submitted", {
        conversationId: j,
        satisfaction: S,
        score: D
      });
    },
    [r.companyId, r.apiUrl, r.mockMode]
  ), O = et(
    (j, S, D = "user") => {
      const Z = S.trim();
      if (!Z) return;
      const P = (/* @__PURE__ */ new Date()).toISOString(), b = `conv-${Date.now()}`, y = typeof j == "string" && j.trim().length > 0 ? j : b, d = {
        id: `local-${D}-msg-${Date.now()}`,
        content: Z,
        sender: D,
        timestamp: P,
        status: "sent"
      };
      g(
        (T) => T.some((A) => A.id === y) ? T.map((A) => A.id !== y ? A : {
          ...A,
          preview: Z.length > 70 ? `${Z.slice(0, 70)}…` : Z,
          timestamp: P,
          messages: [...A.messages, d]
        }) : [
          {
            id: y,
            title: "Forma",
            preview: Z.length > 70 ? `${Z.slice(0, 70)}…` : Z,
            timestamp: P,
            unread: 0,
            messages: [d],
            status: "active"
          },
          ...T
        ]
      ), m(y), f("conversation");
    },
    []
  ), K = (j) => {
    var S;
    return !!((S = j.messages) != null && S.some((D) => D.sender === "ai"));
  };
  return {
    config: r,
    setConfig: o,
    isOpen: n,
    setIsOpen: W,
    screen: s,
    setScreen: st,
    conversations: u,
    activeConversation: $,
    activeConversationId: p,
    visitorContact: F,
    visitorId: U.current,
    activeConversationHasReply: $ ? K($) : !1,
    totalUnread: C,
    isStreaming: x,
    rateLimitTimer: _,
    errorBanner: k,
    setErrorBanner: L,
    selectConversation: it,
    startNewConversation: I,
    endConversation: ct,
    deleteConversation: Y,
    sendUserMessage: X,
    submitSatisfaction: v,
    appendConversationMessage: O,
    handleApiError: B
  };
}
let oe = null, ui = null;
function He(e, t) {
  t === null && e !== null && oe !== null && oe !== e || (oe = t ? e : null, ui = t);
}
function wt() {
  return ui;
}
function ve(e, t) {
  let a = null;
  const r = () => a || (a = e().then((o) => {
    const n = t ? t(o) : o.default;
    if (!n)
      throw new Error("Lazy component not found");
    return n;
  }));
  return function(n) {
    const [l, s] = V(null);
    return G(() => {
      let f = !0;
      return r().then((u) => {
        f && s(() => u);
      }).catch((u) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", u);
      }), () => {
        f = !1;
      };
    }, []), l ? /* @__PURE__ */ i(l, { ...n }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function ta({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ i("path", { d: "M5 3v4" }),
    /* @__PURE__ */ i("path", { d: "M19 17v4" }),
    /* @__PURE__ */ i("path", { d: "M3 5h4" }),
    /* @__PURE__ */ i("path", { d: "M17 19h4" })
  ] });
}
function mi({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ i("path", { d: "M12 19V5" })
  ] });
}
function ea({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ i("path", { d: "M19 12H5" })
  ] });
}
function jt({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ i("path", { d: "m6 6 12 12" })
  ] });
}
function ia({ size: e = 24, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function er({ size: e = 18, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function te({ size: e = 12, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function aa({ size: e = 18, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "currentColor", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function ra({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function fi({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function na({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function oa({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function sa({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function pa({ size: e = 12, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function ca({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function hi({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ i("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function la({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function gi({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ i("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ i("path", { d: "M10 9H8" }),
    /* @__PURE__ */ i("path", { d: "M16 13H8" }),
    /* @__PURE__ */ i("path", { d: "M16 17H8" })
  ] });
}
function da({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M7 10v12" }),
    /* @__PURE__ */ i("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function ua({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M17 14V2" }),
    /* @__PURE__ */ i("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function bi({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function ir({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function ar({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function rr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function nr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function or({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function sr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) });
}
function ma({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function pr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function cr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function lr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function dr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function ur({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function mr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
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
function fr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "m6.5 6.5 11 11" }),
    /* @__PURE__ */ i("path", { d: "m21 21-1-1" }),
    /* @__PURE__ */ i("path", { d: "m3 3 1 1" }),
    /* @__PURE__ */ i("path", { d: "m18 22 4-4" }),
    /* @__PURE__ */ i("path", { d: "m2 6 4-4" }),
    /* @__PURE__ */ i("path", { d: "m3 10 7-7" }),
    /* @__PURE__ */ i("path", { d: "m14 21 7-7" })
  ] });
}
function hr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function gr({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function br({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function xr({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function vr({ size: e = 24, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
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
function jr({ size: e = 13, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function wr({ size: e = 13, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function yr({ size: e = 12, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function _r({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function re({ size: e = 13, className: t = "" }) {
  return /* @__PURE__ */ i(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
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
function fa({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 100 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `pitaj-ai-spinner ${t}`.trim(),
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
function ha({
  screen: e,
  activeConversation: t,
  config: a,
  onBack: r,
  onClose: o,
  onNewConversation: n,
  onEndConversation: l,
  onDeleteConversation: s,
  onViewHistory: f,
  onViewTickets: u
}) {
  var U;
  const [g, p] = V(!1), m = J(null), x = e === "conversation" && t, z = x || e === "history" || e === "tickets", k = a.title || a.name || "Pitaj.io Asistent";
  G(() => {
    var w;
    const F = (N) => {
      var R, B;
      const E = ((B = (R = N.composedPath) == null ? void 0 : R.call(N)) == null ? void 0 : B[0]) || N.target;
      m.current && E && !m.current.contains(E) && p(!1);
    };
    document.addEventListener("mousedown", F);
    const c = (w = m.current) == null ? void 0 : w.getRootNode();
    return c instanceof ShadowRoot && c.addEventListener("mousedown", F), () => {
      document.removeEventListener("mousedown", F), c instanceof ShadowRoot && c.removeEventListener("mousedown", F);
    };
  }, []), G(() => {
    p(!1);
  }, [e]);
  const L = (F) => {
    p(!1), F == null || F();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      z && /* @__PURE__ */ i(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": "Nazad",
          title: "Nazad",
          children: /* @__PURE__ */ i(ea, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((U = a.content) == null ? void 0 : U.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(re, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: k }),
        x && !!(t != null && t.ticketNumber) && (t == null ? void 0 : t.ticketNumber) !== "undefined" && (t == null ? void 0 : t.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: t == null ? void 0 : t.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: m, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => p((F) => !F),
            className: `pitaj-icon-btn ${g ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": g,
            title: "Meni",
            children: /* @__PURE__ */ i(aa, { size: 18 })
          }
        ),
        g && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => L(n),
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
              disabled: !x,
              onClick: () => L(l),
              children: [
                /* @__PURE__ */ i(oa, { size: 15, className: "pitaj-menu-item-icon" }),
                "Završi konverzaciju"
              ]
            }
          ),
          s && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !x,
              onClick: () => L(s),
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
              onClick: () => L(f),
              children: [
                /* @__PURE__ */ i(sa, { size: 15, className: "pitaj-menu-item-icon" }),
                "Pogledaj prethodne"
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => L(u), children: [
            /* @__PURE__ */ i(ca, { size: 15, className: "pitaj-menu-item-icon" }),
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
          children: /* @__PURE__ */ i(jt, { size: 18 })
        }
      )
    ] })
  ] });
}
function ga({ content: e }) {
  if (!e)
    return /* @__PURE__ */ i("span", {});
  const t = e.split(`
`), a = [];
  let r = !1, o = [];
  for (let n = 0; n < t.length; n++) {
    const l = t[n];
    if (l.startsWith("```")) {
      r ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, `code-${n}`)
      ), o = [], r = !1) : r = !0;
      continue;
    }
    if (r) {
      o.push(l);
      continue;
    }
    if (l.trim().startsWith("- ") || l.trim().startsWith("* ")) {
      const f = l.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: se(f) }) }, `ul-${n}`)
      );
      continue;
    }
    const s = l.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ i("li", { children: se(s[2]) }) }, `ol-${n}`)
      );
      continue;
    }
    if (!l.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${n}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: se(l) }, `p-${n}`));
  }
  return r && o.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function se(e) {
  const t = [];
  let a = 0;
  const r = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = r.exec(e)) !== null; ) {
    o.index > a && t.push(...Oe(e.slice(a, o.index)));
    const n = o[0];
    if (n.startsWith("`") && n.endsWith("`"))
      t.push(
        /* @__PURE__ */ i("code", { children: n.slice(1, -1) }, `c-${o.index}`)
      );
    else if (n.startsWith("**") && n.endsWith("**"))
      t.push(
        /* @__PURE__ */ i("strong", { children: n.slice(2, -2) }, `b-${o.index}`)
      );
    else if (n.startsWith("*") && n.endsWith("*"))
      t.push(
        /* @__PURE__ */ i("em", { children: n.slice(1, -1) }, `i-${o.index}`)
      );
    else if (n.startsWith("[") && n.includes("](")) {
      const l = n.slice(1, n.indexOf("](")), s = n.slice(n.indexOf("](") + 2, -1);
      t.push(
        /* @__PURE__ */ i("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: l }, `a-${o.index}`)
      );
    }
    a = o.index + n.length;
  }
  return a < e.length && t.push(...Oe(e.slice(a))), t;
}
const ba = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, xa = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, va = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), ja = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Oe(e) {
  const t = [];
  let a;
  for (; (a = ba.exec(e)) !== null; ) {
    const n = a[0].replace(/[.,;:!?]+$/, "");
    n && t.push({
      start: a.index,
      end: a.index + n.length,
      href: n.startsWith("www.") ? `https://${n}` : n,
      external: !0
    });
  }
  for (; (a = xa.exec(e)) !== null; )
    t.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = va.exec(e)) !== null; ) {
    const n = a[0];
    ja.test(n) || t.push({
      start: a.index,
      end: a.index + n.length,
      href: `tel:${n.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  t.sort((n, l) => n.start - l.start);
  const r = [];
  let o = 0;
  for (const n of t)
    n.start < o || (n.start > o && r.push(e.slice(o, n.start)), r.push(
      /* @__PURE__ */ i(
        "a",
        {
          href: n.href,
          ...n.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: e.slice(n.start, n.end)
        },
        `l-${n.start}`
      )
    ), o = n.end);
  return o < e.length && r.push(e.slice(o)), r;
}
function xi({
  rows: e,
  fallbackQuestions: t,
  onSelect: a,
  buttonClassName: r,
  containerClassName: o,
  revealDelayMs: n = 0,
  staggerMs: l = 140
}) {
  const s = It(() => Array.isArray(e) && e.length > 0 ? e.map((x) => ({
    text: x.text.trim(),
    children: (x.children ?? []).map((h) => h.trim()).filter(Boolean)
  })).filter((x) => x.text !== "") : (t ?? []).map((x) => x.trim()).filter(Boolean).map((x) => ({ text: x, children: [] })), [t, e]), [f, u] = V(null), [g, p] = V(s.length);
  if (G(() => {
    u(null);
  }, [s]), G(() => {
    if (f) {
      p(s.length);
      return;
    }
    if (n <= 0) {
      p(s.length);
      return;
    }
    p(0);
    const x = window.setTimeout(() => {
      p(1);
      const h = window.setInterval(() => {
        p((_) => _ >= s.length ? (window.clearInterval(h), _) : _ + 1);
      }, Math.max(60, l));
    }, n);
    return () => {
      window.clearTimeout(x);
    };
  }, [f, s.length, n, l]), s.length === 0)
    return null;
  const m = s.find((x) => x.text === f && x.children.length > 0) ?? null;
  return m ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => u(null),
        className: r,
        children: "Nazad"
      }
    ),
    m.children.map((x, h) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(x),
        className: r,
        children: x
      },
      `${m.text}-${h}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: s.slice(0, g).map((x, h) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => x.children.length > 0 ? u(x.text) : a(x.text),
      className: `${r} pitaj-suggestion-enter`,
      children: x.text
    },
    `${x.text}-${h}`
  )) });
}
const wa = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), ya = [".txt", ".md", ".csv", ".json", ".xml"];
function _a(e) {
  if (wa.has(e.type))
    return !0;
  const t = e.name.toLowerCase();
  return ya.some((a) => t.endsWith(a));
}
async function vi(e) {
  const t = Array.from(e).slice(0, 3);
  return Promise.all(
    t.map(async (a) => {
      const r = a.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(a.name);
      let o = null;
      if (r && typeof URL < "u")
        try {
          o = URL.createObjectURL(a);
        } catch {
          o = null;
        }
      const n = _a(a) ? (await a.text()).slice(0, 4e3) : null;
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
function ji(e) {
  return e.length === 0 ? "" : `

${e.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function ka(e) {
  const { widgetId: t, audio: a, apiUrl: r } = e, o = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = new FormData();
  n.append("audio", a, "dictation.webm");
  const l = await fetch(`${o}/api/widget/${t}/transcribe`, {
    method: "POST",
    body: n,
    headers: {
      Accept: "application/json"
    }
  });
  if (!l.ok) {
    const u = await l.json().catch(() => null), p = (() => {
      if (l.status !== 422 || !(u != null && u.errors) || typeof u.errors != "object")
        return null;
      for (const m of Object.values(u.errors))
        if (Array.isArray(m)) {
          for (const x of m)
            if (typeof x == "string" && x.trim() !== "")
              return x;
        }
      return null;
    })();
    ci(
      l.status,
      u,
      typeof p == "string" && p || `Transkripcija nije uspjela (${l.status})`,
      l.headers.get("Retry-After")
    );
  }
  const s = await l.json(), f = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!f)
    throw new Error("Transkripcija nije vratila tekst.");
  return f;
}
function wi({ widgetId: e, apiUrl: t, onTranscript: a, onError: r }) {
  const n = J(null), l = J(null), s = J([]), f = J(!0), u = J(null), g = J(null), p = J(null), m = J(null), x = J(Array.from({ length: 42 }, () => 0.06)), [h, _] = V(!1), [z, k] = V(!1), [L, U] = V(
    () => Array.from({ length: 42 }, () => 0.06)
  ), F = It(() => {
    var C;
    return typeof window > "u" || !e || e === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((C = navigator.mediaDevices) != null && C.getUserMedia);
  }, [e]), c = et(() => {
    l.current && (l.current.getTracks().forEach((C) => C.stop()), l.current = null);
  }, []), w = et(() => {
    var C;
    u.current !== null && (window.cancelAnimationFrame(u.current), u.current = null), (C = m.current) == null || C.disconnect(), m.current = null, p.current = null, g.current && (g.current.close(), g.current = null);
  }, []), N = et(() => {
    const C = Array.from({ length: 42 }, () => 0.06);
    x.current = C, U(C);
  }, []), E = et((C) => {
    const W = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!W)
      return;
    const st = new W(), it = st.createAnalyser();
    it.fftSize = 2048, it.smoothingTimeConstant = 0.78;
    const ct = st.createMediaStreamSource(C);
    ct.connect(it), g.current = st, p.current = it, m.current = ct;
    const Y = new Uint8Array(it.fftSize), I = () => {
      const M = p.current;
      if (!M) return;
      M.getByteTimeDomainData(Y);
      let X = 0;
      for (let at = 0; at < Y.length; at += 1) {
        const tt = (Y[at] - 128) / 128;
        X += tt * tt;
      }
      const v = Math.sqrt(X / Y.length), O = Math.max(0.04, Math.min(1, v * 5.2)), K = x.current.slice(1);
      K.push(O), x.current = K, U(K), u.current = window.requestAnimationFrame(I);
    };
    u.current = window.requestAnimationFrame(I);
  }, []), R = et(async () => {
    if (!(!F || z || n.current || h))
      try {
        const W = await navigator.mediaDevices.getUserMedia({ audio: !0 }), st = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], ct = typeof MediaRecorder.isTypeSupported == "function" ? st.find((I) => MediaRecorder.isTypeSupported(I)) : void 0, Y = ct ? new MediaRecorder(W, { mimeType: ct }) : new MediaRecorder(W);
        s.current = [], f.current = !0, l.current = W, n.current = Y, N(), E(W), Y.ondataavailable = (I) => {
          I.data.size > 0 && s.current.push(I.data);
        }, Y.onstop = async () => {
          _(!1);
          const I = new Blob(s.current, { type: Y.mimeType || "audio/webm" });
          if (s.current = [], n.current = null, c(), w(), I.size === 0) {
            N();
            return;
          }
          if (!f.current) {
            N();
            return;
          }
          k(!0);
          try {
            const M = await ka({
              widgetId: e,
              apiUrl: t,
              audio: I
            });
            a(M);
          } catch (M) {
            console.error("[Pitaj.io] Dictation transcription failed", M), r == null || r(M);
          } finally {
            k(!1), N();
          }
        }, Y.onerror = () => {
          _(!1), n.current = null, c(), w(), N();
        }, Y.start(), _(!0);
      } catch (W) {
        _(!1), c(), w(), N(), console.error("[Pitaj.io] Dictation microphone access failed", W);
      }
  }, [t, h, z, F, r, a, N, E, c, w, e]), B = et(() => {
    const C = n.current;
    !C || !h || z || (f.current = !0, C.stop(), _(!1));
  }, [h, z]), $ = et(() => {
    const C = n.current;
    !C || !h || (f.current = !1, C.stop(), _(!1));
  }, [h]);
  return G(() => () => {
    const C = n.current;
    C && C.state !== "inactive" && C.stop(), c(), w();
  }, [c, w]), {
    isSupported: F,
    isListening: h,
    isProcessing: z,
    waveformLevels: L,
    start: R,
    stopAndTranscribe: B,
    cancel: $
  };
}
const Ma = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Ve() {
  const [e, t] = V(0);
  return G(() => {
    const a = setTimeout(() => t(1), 1600), r = setTimeout(() => t(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(r);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(fa, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: Ma[e] }, e)
  ] });
}
const Na = ve(
  () => import("./InlineWidgetRenderer-DLRBVJ_H.js"),
  (e) => e.InlineWidgetRenderer
);
function Sa(e) {
  const t = typeof e == "string" ? new Date(e) : e;
  return isNaN(t.getTime()) ? "" : t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ia(e) {
  const t = e.split(`
`).map((n) => n.trim()).filter((n) => n.length > 0);
  if (t.length < 2) return null;
  let a = "Forma";
  const r = t[0];
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
  const o = t.slice(1).map((n) => {
    if (!n.startsWith("- ") && !n.startsWith("* ")) return null;
    const l = n.slice(2), s = l.indexOf(":");
    if (s < 1) return null;
    const f = l.slice(0, s).trim(), u = l.slice(s + 1).trim();
    return !f || !u ? null : { label: f, value: u };
  }).filter((n) => !!n);
  return o.length < 1 ? null : { title: a, entries: o };
}
function za({
  conversation: e,
  config: t,
  isStreaming: a,
  rateLimitCountdown: r,
  errorBanner: o,
  onSendMessage: n,
  onApiError: l,
  onSubmitSatisfaction: s
}) {
  var I, M, X;
  const [f, u] = V(""), [g, p] = V(!1), [m, x] = V(null), [h, _] = V([]), z = J(null), k = J(null), L = J(null), U = t.content || {}, F = t.chatAvailable === !1, c = t.transcribeAvailable === !1, w = a || r !== null || F, N = wi({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: et((v) => {
      u((O) => O ? `${O} ${v}` : v);
    }, []),
    onError: et((v) => {
      l == null || l(v, "Greška pri transkripciji.");
    }, [l])
  });
  G(() => {
    const v = z.current;
    v && (v.scrollTop = v.scrollHeight);
  }, [e.messages, a]), G(() => {
    const v = k.current;
    v && (v.style.height = "auto", v.style.height = `${Math.min(v.scrollHeight, 96)}px`);
  }, [f]), G(() => {
    p(!1);
  }, [U.dismissibleNotice]);
  const E = (v) => {
    _((O) => {
      const K = O.find((at) => at.id === v);
      if (K != null && K.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(K.previewUrl);
        } catch {
        }
      return O.filter((at) => at.id !== v);
    });
  }, R = (v) => {
    const O = (v ?? f).trim();
    if (!O && h.length === 0 || w) return;
    const K = `${O}${ji(h)}`.trim();
    n(K), h.forEach((at) => {
      if (at.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(at.previewUrl);
        } catch {
        }
    }), _([]), v || (u(""), k.current && (k.current.style.height = "auto"));
  }, B = (v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), R());
  }, $ = U.messagePlaceholder || t.placeholder || "Pitajte bilo šta...", C = ((I = U.dismissibleNotice) == null ? void 0 : I.trim()) || "", W = ((M = U.footerText) == null ? void 0 : M.trim()) || "", st = U.showSuggestedMessages === !1 || U.keepShowingSuggestedMessages !== !0 ? [] : U.suggestedMessageRows || [], it = ((X = [...e.messages].reverse().find((v) => v.sender === "ai")) == null ? void 0 : X.id) ?? null, ct = N.isListening, Y = async (v, O) => {
    navigator.clipboard && (await navigator.clipboard.writeText(O), x(v), window.setTimeout(() => {
      x((K) => K === v ? null : K);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: z, className: "pitaj-messages-container", children: [
      e.ticketNumber && e.ticketNumber !== "undefined" && e.ticketNumber !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-conversation-ticket-label", children: "Broj tiketa:" }),
        /* @__PURE__ */ i("strong", { className: "pitaj-conversation-ticket-val", children: e.ticketNumber })
      ] }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ i("span", { className: "pitaj-date-label", children: "Danas" }),
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" })
      ] }),
      e.messages.map((v) => {
        const O = v.sender === "user", K = O ? Ia(v.content) : null, at = !O && v.isStreaming && !v.content && !v.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${O ? "user" : "ai"}${v.widget ? " has-widget" : ""}${at ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              O ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${K ? "is-form-submission" : ""}`, children: K ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: K.title.toLowerCase().startsWith("forma") ? K.title : `Forma: ${K.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: K.entries.map((tt) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: tt.label }),
                  /* @__PURE__ */ i("dd", { children: tt.value })
                ] }, `${v.id}-${tt.label}`)) })
              ] }) : v.content }) : /* @__PURE__ */ i(mt, { children: [
                v.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(ga, { content: v.content }),
                  v.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                v.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Na, { widget: v.widget, onAction: (tt) => R(tt) }) }),
                v.isStreaming && !v.content && !v.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ve, {}) })
              ] }),
              !O && v.sources && v.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: "Izvori i dokumentacija:" }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: v.sources.map((tt) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: tt.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: tt.title }),
                      /* @__PURE__ */ i(pa, { size: 10 })
                    ]
                  },
                  tt.id
                )) })
              ] }),
              !O && U.showFollowupSuggestions !== !1 && v.suggestedQuestions && v.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: v.suggestedQuestions.map((tt, bt) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => R(tt),
                  disabled: w,
                  className: "pitaj-followup-chip",
                  children: tt
                },
                `sug-f-${bt}`
              )) }),
              (!v.isStreaming || !!v.content || !!v.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: Sa(v.timestamp) }),
                !O && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  v.id === it && !a && /* @__PURE__ */ i(mt, { children: U.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(mt, { children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => s == null ? void 0 : s("positive"),
                        className: `pitaj-msg-action-btn ${e.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": "Korisno",
                        title: "Korisno",
                        children: /* @__PURE__ */ i(da, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => s == null ? void 0 : s("negative"),
                        className: `pitaj-msg-action-btn ${e.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": "Nije korisno",
                        title: "Nije korisno",
                        children: /* @__PURE__ */ i(ua, { size: 14 })
                      }
                    )
                  ] }) }),
                  v.id === it && !a && U.copyMessageEnabled !== !1 && !!v.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void Y(v.id, v.content),
                      className: `pitaj-msg-action-btn ${m === v.id ? "is-active" : ""}`,
                      "aria-label": m === v.id ? "Kopirano" : "Kopiraj odgovor",
                      title: m === v.id ? "Kopirano" : "Kopiraj odgovor",
                      children: m === v.id ? /* @__PURE__ */ i(te, { size: 14 }) : /* @__PURE__ */ i(la, { size: 14 })
                    }
                  )
                ] }),
                O && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  te,
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
      a && e.messages.length > 0 && e.messages[e.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Ve, {}) }) }) })
    ] }),
    (o || r) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: r ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${r}s.` : o }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        xi,
        {
          rows: st,
          fallbackQuestions: U.keepShowingSuggestedMessages ? t.suggestedQuestions : [],
          onSelect: R,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      h.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: h.map((v) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: v.previewUrl ? /* @__PURE__ */ i("img", { src: v.previewUrl, alt: v.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(gi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: v.name, children: v.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => E(v.id),
            "aria-label": `Ukloni ${v.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(jt, { size: 10 })
          }
        )
      ] }, v.id)) }),
      C && !g && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: C }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => p(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(jt, { size: 12 })
          }
        )
      ] }),
      N.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${ct ? "is-recording" : ""}`, children: [
        U.attachmentsEnabled && /* @__PURE__ */ i(mt, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: L,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (v) => {
                const O = v.currentTarget.files;
                if (v.currentTarget.value = "", !O || O.length === 0) return;
                const K = await vi(O);
                _((at) => [...at, ...K].slice(0, 3));
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
                return (v = L.current) == null ? void 0 : v.click();
              },
              children: /* @__PURE__ */ i(bi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: k,
            value: f,
            onInput: (v) => u(v.target.value),
            onKeyDown: B,
            placeholder: $,
            rows: 1,
            disabled: w,
            className: "pitaj-textarea",
            style: ct ? { display: "none" } : void 0
          }
        ),
        ct ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => N.cancel(),
              children: /* @__PURE__ */ i(jt, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: N.waveformLevels.map((v, O) => /* @__PURE__ */ i(
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
              onClick: () => N.stopAndTranscribe(),
              disabled: w || N.isProcessing,
              children: /* @__PURE__ */ i(te, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(mt, { children: [
          U.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${N.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: N.isProcessing ? "Transkribujem..." : N.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => N.start(),
              disabled: w || c || !N.isSupported || N.isProcessing,
              children: /* @__PURE__ */ i(hi, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => R(),
              disabled: w || !f.trim() && h.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ i(mi, { size: 16 })
            }
          )
        ] })
      ] }),
      W && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: W }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(re, { size: 13, className: "pitaj-powered-icon" }),
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
function Aa({
  config: e,
  openedByUser: t = !1,
  onStart: a,
  onApiError: r
}) {
  var ct, Y;
  const [o, n] = V(""), [l, s] = V(!1), [f, u] = V(!1), [g, p] = V([]), m = J(null), x = J(null), h = e.content || {}, _ = e.chatAvailable === !1, z = e.transcribeAvailable === !1, k = wi({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: et((I) => {
      n((M) => M ? `${M} ${I}` : I);
    }, []),
    onError: et((I) => {
      r == null || r(I, "Greška pri transkripciji.");
    }, [r])
  });
  G(() => {
    var I;
    t && ((I = m.current) == null || I.focus({ preventScroll: !0 }));
  }, [t]), G(() => {
    if (typeof window > "u") return;
    const I = window.matchMedia("(max-width: 768px)"), M = () => s(I.matches);
    return M(), I.addEventListener("change", M), () => I.removeEventListener("change", M);
  }, []), G(() => {
    u(!1);
  }, [h.dismissibleNotice]);
  const U = (l && h.useDifferentMessageMobile && h.mobileWelcomeMessage ? h.mobileWelcomeMessage : e.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((I) => I.trim()).filter((I) => I.length > 0), F = h.autoShowInitialMessages !== !1 && !t, c = !l || h.showAutoPopupMobile !== !1, w = l && h.useDifferentDurationMobile && typeof h.mobileAutoShowDurationSeconds == "number" ? h.mobileAutoShowDurationSeconds : h.autoShowDurationSeconds ?? 0, N = F && c ? Math.max(0, w) * 1e3 : 0, E = (I) => {
    p((M) => {
      const X = M.find((v) => v.id === I);
      if (X != null && X.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(X.previewUrl);
        } catch {
        }
      return M.filter((v) => v.id !== I);
    });
  }, R = (I) => {
    const M = (I ?? o).trim();
    if (!M && g.length === 0 || _) return;
    const X = `${M}${ji(g)}`.trim();
    a(X), g.forEach((v) => {
      if (v.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(v.previewUrl);
        } catch {
        }
    }), n(""), p([]);
  }, B = (I) => {
    I.key === "Enter" && !I.shiftKey && (I.preventDefault(), R());
  }, $ = h.showSuggestedMessages === !1 ? [] : h.suggestedMessageRows || [], C = h.messagePlaceholder || e.placeholder || "Upišite svoje pitanje...", W = ((ct = h.dismissibleNotice) == null ? void 0 : ct.trim()) || "", st = ((Y = h.footerText) == null ? void 0 : Y.trim()) || "", it = k.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (U.length > 0 ? U : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((I, M) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: I }) }) }, `welcome-${M}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        xi,
        {
          rows: $,
          fallbackQuestions: e.suggestedQuestions,
          onSelect: R,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: N,
          staggerMs: 150
        }
      ),
      g.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: g.map((I) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: I.previewUrl ? /* @__PURE__ */ i("img", { src: I.previewUrl, alt: I.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(gi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: I.name, children: I.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => E(I.id),
            "aria-label": `Ukloni ${I.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(jt, { size: 10 })
          }
        )
      ] }, I.id)) }),
      W && !f && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: W }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => u(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(jt, { size: 12 })
          }
        )
      ] }),
      k.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${it ? "is-recording" : ""}`, children: [
        h.attachmentsEnabled && /* @__PURE__ */ i(mt, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: x,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (I) => {
                const M = I.currentTarget.files;
                if (I.currentTarget.value = "", !M || M.length === 0) return;
                const X = await vi(M);
                p((v) => [...v, ...X].slice(0, 3));
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
                var I;
                return (I = x.current) == null ? void 0 : I.click();
              },
              children: /* @__PURE__ */ i(bi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: m,
            value: o,
            onInput: (I) => n(I.target.value),
            onKeyDown: B,
            placeholder: C,
            rows: 1,
            disabled: _,
            className: "pitaj-textarea",
            style: it ? { display: "none" } : void 0
          }
        ),
        it ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => k.cancel(),
              children: /* @__PURE__ */ i(jt, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: k.waveformLevels.map((I, M) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + I * 15))}px` }
            },
            `dict-wave-${M}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => k.stopAndTranscribe(),
              disabled: _ || k.isProcessing,
              children: /* @__PURE__ */ i(te, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(mt, { children: [
          h.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${k.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: k.isProcessing ? "Transkribujem..." : k.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => k.start(),
              disabled: _ || z || !k.isSupported || k.isProcessing,
              children: /* @__PURE__ */ i(hi, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => R(),
              disabled: _ || !o.trim() && g.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ i(mi, { size: 16 })
            }
          )
        ] })
      ] }),
      st && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: st }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(re, { size: 13, className: "pitaj-powered-icon" }),
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
function La({
  isOpen: e,
  onClick: t,
  unreadCount: a = 0,
  config: r
}) {
  var g, p, m, x, h, _;
  const o = ((g = r.content) == null ? void 0 : g.launcherIconStyle) || "message-circle", n = typeof ((p = r.content) == null ? void 0 : p.launcherIconUrl) == "string" ? r.content.launcherIconUrl.trim() : "", l = ((m = r.content) == null ? void 0 : m.launcherShowText) === !0, s = ((x = r.content) == null ? void 0 : x.launcherTextSide) === "left" ? "left" : "right", f = l ? ((_ = (h = r.content) == null ? void 0 : h.launcherText) == null ? void 0 : _.trim()) || r.title || r.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: t,
      className: `pitaj-launcher-btn ${e ? "is-open" : ""} ${l ? "has-label" : ""} ${l && s === "left" ? "label-left" : ""}`,
      "aria-label": e ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": e,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && n !== "" ? /* @__PURE__ */ i("img", { src: n, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? ta : o === "message-square" ? fi : o === "contact" ? na : ia, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(jt, { size: 22 }) })
        ] }),
        f && !e && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: f }),
        a > 0 && !e && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function Ta({ isOpen: e, onOpen: t, config: a }) {
  var w, N, E, R;
  const [r, o] = V(!1), [n, l] = V(!1), [s, f] = V(!1), [u, g] = V(e), p = J(null);
  G(() => {
    e && (g(!0), f(!1));
  }, [e]), G(() => {
    const B = () => {
      var C;
      if (typeof window > "u") return;
      let $ = window.innerWidth <= 640;
      if (!$ && p.current) {
        const W = (C = p.current.closest(".pitaj-root")) == null ? void 0 : C.parentElement;
        W && W.clientWidth > 0 && W.clientWidth <= 640 && ($ = !0);
      }
      o($);
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, []);
  const m = a.content || {}, x = m.autoShowInitialMessages !== !1, h = m.showAutoPopupMobile !== !1, _ = !r || h, z = r && m.useDifferentDurationMobile && typeof m.mobileAutoShowDurationSeconds == "number" ? m.mobileAutoShowDurationSeconds : m.autoShowDurationSeconds ?? 0;
  if (G(() => {
    if (!x || !_ || n || e || u) {
      f(!1);
      return;
    }
    const B = Math.max(0, z) * 1e3, $ = setTimeout(() => {
      f(!0);
    }, B);
    return () => clearTimeout($);
  }, [x, _, n, e, u, z]), !s || e)
    return null;
  let k = "";
  r && m.useDifferentMessageMobile && ((w = m.mobileWelcomeMessage) != null && w.trim()) ? k = m.mobileWelcomeMessage.trim() : (N = m.popupMessageText) != null && N.trim() ? k = m.popupMessageText.trim() : (E = a.welcomeMessage) != null && E.trim() ? k = a.welcomeMessage.trim() : (R = a.welcomeHeadline) != null && R.trim() ? k = a.welcomeHeadline.trim() : k = "Zdravo! Kako vam mogu pomoći danas?";
  const L = (B) => {
    B.stopPropagation(), B.preventDefault(), l(!0), f(!1);
  }, U = () => {
    t();
  }, F = a.title || a.name || "Pitaj.io Asistent", c = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: p,
      className: "pitaj-launcher-popup",
      onClick: U,
      role: "button",
      tabIndex: 0,
      "aria-label": `${F}: ${k}`,
      onKeyDown: (B) => {
        (B.key === "Enter" || B.key === " ") && (B.preventDefault(), U());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: c ? /* @__PURE__ */ i("img", { src: c, alt: "" }) : /* @__PURE__ */ i(re, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: F })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: L,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ i(jt, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-popup-body", children: k }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function $a(e) {
  if (!e) return "";
  const t = typeof e == "string" ? new Date(e) : e, r = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), o = Math.floor(r / (1e3 * 60)), n = Math.floor(r / (1e3 * 60 * 60)), l = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : n < 24 ? `prije ${n}h` : l < 7 ? `prije ${l}d` : t.toLocaleDateString();
}
function Ca({ config: e, visitorId: t, onSelectTicket: a }) {
  const [r, o] = V([]), [n, l] = V("open"), [s, f] = V(1), [u, g] = V(!0), [p, m] = V(!0), [x, h] = V(!1), [_, z] = V(null), k = J(null), L = J(null), U = J(!1);
  G(() => {
    let w = !0;
    return m(!0), o([]), f(1), g(!0), z(null), U.current = !1, de({
      widgetId: e.companyId,
      visitorId: t,
      apiUrl: e.apiUrl,
      status: n,
      page: 1,
      perPage: 15
    }).then((N) => {
      w && (o(N.tickets), g(N.hasMore), f(1));
    }).catch((N) => {
      w && z(N instanceof Error ? N.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      w && m(!1);
    }), () => {
      w = !1;
    };
  }, [e.apiUrl, e.companyId, t, n]);
  const F = et(() => {
    if (p || U.current || !u) return;
    U.current = !0, h(!0);
    const w = s + 1;
    de({
      widgetId: e.companyId,
      visitorId: t,
      apiUrl: e.apiUrl,
      status: n,
      page: w,
      perPage: 15
    }).then((N) => {
      o((E) => {
        const R = new Set(E.map(($) => $.id)), B = N.tickets.filter(($) => !R.has($.id));
        return [...E, ...B];
      }), g(N.hasMore), f(w);
    }).catch((N) => {
      console.error("[Pitaj.io] Error loading more tickets:", N);
    }).finally(() => {
      h(!1), U.current = !1;
    });
  }, [e.apiUrl, e.companyId, u, p, s, n, t]);
  return G(() => {
    const w = L.current, N = k.current;
    if (!w || !N || !u || p || x) return;
    const E = new IntersectionObserver(
      (R) => {
        var B;
        (B = R[0]) != null && B.isIntersecting && F();
      },
      { root: N, rootMargin: "120px" }
    );
    return E.observe(w), () => E.disconnect();
  }, [u, p, x, F]), /* @__PURE__ */ i(
    "div",
    {
      ref: k,
      className: "pitaj-tickets-screen",
      onScroll: (w) => {
        const N = w.currentTarget;
        !N || !u || p || U.current || N.scrollHeight - N.scrollTop - N.clientHeight < 120 && F();
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
              onClick: () => l("open"),
              role: "tab",
              "aria-selected": n === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: n === "closed" ? "is-active" : "",
              onClick: () => l("closed"),
              role: "tab",
              "aria-selected": n === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        p ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : _ ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: _ }) }) : r.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(fi, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: n === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: n === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          r.map((w) => {
            const N = w.messages || [], E = N.length > 0 ? N[N.length - 1] : null, R = N.length, B = R === 1 ? "1 poruka" : R >= 2 && R <= 4 ? `${R} poruke` : `${R} poruka`;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => a == null ? void 0 : a(w),
                "aria-label": `Otvori tiket ${w.ticketNumber || w.id}`,
                children: /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ i("strong", { className: "pitaj-ticket-number", children: w.ticketNumber || `Tiket #${w.id}` }),
                    /* @__PURE__ */ i("span", { className: `pitaj-ticket-status-badge ${w.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ i("span", { className: "pitaj-ticket-status-dot" }),
                      w.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  E && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: E.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: $a(w.updatedAt) }),
                    R > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: B })
                  ] })
                ] })
              },
              w.id
            );
          }),
          x && /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ i("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ i("div", { ref: L, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const Da = ve(() => import("./HistoryScreen-DTg6E8DF.js"), (e) => e.HistoryScreen), Ea = ve(() => import("./FormActionsScreen-Bnssblp9.js"), (e) => e.FormActionsScreen);
function Kt(e) {
  if (!e || typeof e != "string") return null;
  const t = e.trim().toLowerCase();
  if (t === "transparent") return { r: 0, g: 0, b: 0 };
  if (t === "white") return { r: 255, g: 255, b: 255 };
  if (t === "black") return { r: 0, g: 0, b: 0 };
  if (t.startsWith("#")) {
    const o = t.slice(1);
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
  const a = t.match(/^rgba?\(\s*([0-9.]+)\s*[, ]\s*([0-9.]+)\s*[, ]\s*([0-9.]+)/);
  if (a)
    return {
      r: Math.round(Number(a[1])),
      g: Math.round(Number(a[2])),
      b: Math.round(Number(a[3]))
    };
  const r = t.match(/^hsla?\(\s*([0-9.]+)(?:deg)?\s*[, ]\s*([0-9.]+)%\s*[, ]\s*([0-9.]+)%/);
  if (r) {
    const o = Number(r[1]) % 360, n = Number(r[2]) / 100, l = Number(r[3]) / 100, s = (1 - Math.abs(2 * l - 1)) * n, f = s * (1 - Math.abs(o / 60 % 2 - 1)), u = l - s / 2;
    let g = 0, p = 0, m = 0;
    return 0 <= o && o < 60 ? (g = s, p = f, m = 0) : 60 <= o && o < 120 ? (g = f, p = s, m = 0) : 120 <= o && o < 180 ? (g = 0, p = s, m = f) : 180 <= o && o < 240 ? (g = 0, p = f, m = s) : 240 <= o && o < 300 ? (g = f, p = 0, m = s) : 300 <= o && o < 360 && (g = s, p = 0, m = f), {
      r: Math.round((g + u) * 255),
      g: Math.round((p + u) * 255),
      b: Math.round((m + u) * 255)
    };
  }
  return null;
}
function Pa(e) {
  return Kt(e);
}
function Zt(e, t) {
  const a = Kt(e);
  return a ? `rgba(${a.r}, ${a.g}, ${a.b}, ${t})` : null;
}
function Ba(e, t, a) {
  const r = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(a)}`;
}
function Ht(e) {
  const t = Kt(e);
  return t && (0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Ua(e, t) {
  const a = Kt(e);
  if (a)
    return (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255 <= 0.55;
  if (t) {
    const r = Kt(t);
    if (r)
      return (0.2126 * r.r + 0.7152 * r.g + 0.0722 * r.b) / 255 > 0.55;
  }
  return !1;
}
function Fa(e) {
  const t = Pa(e);
  if (!t) return e;
  const a = Ht(e) === "#111827", r = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return Ba(
    t.r + (o - t.r) * r,
    t.g + (o - t.g) * r,
    t.b + (o - t.b) * r
  );
}
function Ra({
  config: e,
  startOpen: t = !1,
  initialScreen: a = "new-conversation",
  onEvent: r,
  isInline: o = !1,
  isMobile: n,
  isCanvasPreview: l = !1
}) {
  var xt, yt, _t, kt, Tt, $t, Ct, Dt, Et, Pt, j, S, D, Z, P;
  const {
    config: s,
    setConfig: f,
    isOpen: u,
    setIsOpen: g,
    screen: p,
    setScreen: m,
    conversations: x,
    activeConversation: h,
    totalUnread: _,
    isStreaming: z,
    rateLimitTimer: k,
    errorBanner: L,
    selectConversation: U,
    startNewConversation: F,
    endConversation: c,
    deleteConversation: w,
    sendUserMessage: N,
    submitSatisfaction: E,
    visitorContact: R,
    visitorId: B,
    activeConversationId: $,
    appendConversationMessage: C,
    handleApiError: W
  } = Xi(e, {
    startOpen: t,
    initialScreen: a,
    emitEvent: r,
    onActionTrigger: (b) => {
      if (Y(!0), g(!0), (p === "history" || p === "new-conversation") && m("conversation"), b.widget_id || b.widget)
        return;
      const y = Number(b.id), d = Number(b.form_id), T = Number.isInteger(y) && y > 0 ? y : null, A = Number.isInteger(d) && d > 0 ? -d : null;
      M(T ?? A);
    }
  }), st = J(a), it = J(t), [ct, Y] = V(t), [I, M] = V(() => {
    var b, y, d, T;
    return ((b = s.previewDraft) == null ? void 0 : b.initialStep) === "form" && !!!(s.previewDraft.widget || (y = s.previewDraft.action) != null && y.widget || (d = s.previewDraft.action) != null && d.widget_id) ? ((T = s.previewDraft.action) == null ? void 0 : T.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  G(() => {
    var b, y, d, T, A, q, H;
    if (((b = s.previewDraft) == null ? void 0 : b.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (y = s.previewDraft.action) != null && y.widget || (d = s.previewDraft.action) != null && d.widget_id)) {
        const nt = ((T = s.previewDraft.action) == null ? void 0 : T.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        nt !== null && M(nt);
      }
    } else (((A = s.previewDraft) == null ? void 0 : A.initialStep) === "idle" || ((q = s.previewDraft) == null ? void 0 : q.initialStep) === "submitted" || ((H = s.previewDraft) == null ? void 0 : H.initialStep) === "dismissed") && M(null);
  }, [
    (xt = s.previewDraft) == null ? void 0 : xt.initialStep,
    (_t = (yt = s.previewDraft) == null ? void 0 : yt.action) == null ? void 0 : _t.id,
    (Tt = (kt = s.previewDraft) == null ? void 0 : kt.form) == null ? void 0 : Tt.id,
    ($t = s.previewDraft) == null ? void 0 : $t.widget
  ]);
  const [X, v] = V(null), O = J(null), [K, at] = V(() => typeof n == "boolean" ? n : o ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  G(() => {
    if (typeof n == "boolean") {
      at(n);
      return;
    }
    const b = () => {
      if (typeof window > "u") return;
      if (o) {
        at(!1);
        return;
      }
      let y = window.innerWidth <= 640;
      if (!y && O.current) {
        const d = O.current.getRootNode(), T = d instanceof ShadowRoot ? d.host : O.current.parentElement, A = (T == null ? void 0 : T.parentElement) || T;
        A && A.clientWidth > 0 && A.clientWidth <= 640 && (y = !0);
      }
      at(y);
    };
    return b(), window.addEventListener("resize", b), window.addEventListener("orientationchange", b), () => {
      window.removeEventListener("resize", b), window.removeEventListener("orientationchange", b);
    };
  }, [n]), G(() => {
    if (typeof window > "u") return;
    const b = () => {
      const d = O.current;
      if (!d) return;
      const T = window.visualViewport;
      if (T) {
        const A = T.height < window.innerHeight - 100;
        d.style.setProperty("--pitaj-viewport-height", `${Math.round(T.height)}px`), d.style.setProperty("--pitaj-viewport-top", `${Math.round(T.offsetTop)}px`), d.style.setProperty("--pitaj-viewport-left", `${Math.round(T.offsetLeft)}px`), d.style.setProperty(
          "--pitaj-input-safe-bottom",
          A ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        d.style.setProperty("--pitaj-viewport-height", "100dvh"), d.style.setProperty("--pitaj-viewport-top", "0px"), d.style.setProperty("--pitaj-viewport-left", "0px"), d.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    b();
    const y = window.visualViewport;
    return y && (y.addEventListener("resize", b), y.addEventListener("scroll", b)), window.addEventListener("resize", b), window.addEventListener("orientationchange", b), () => {
      y && (y.removeEventListener("resize", b), y.removeEventListener("scroll", b)), window.removeEventListener("resize", b), window.removeEventListener("orientationchange", b);
    };
  }, [u, K]), G(() => {
    if (typeof document > "u" || !u || !K || o || l) return;
    const b = document.body.style.overflow, y = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = b, document.body.style.touchAction = y;
    };
  }, [u, K, o, l]), G(() => {
    var d;
    if (typeof window > "u" || o) return;
    const b = (d = O.current) == null ? void 0 : d.getRootNode(), y = b instanceof ShadowRoot ? b.host : null;
    if (y) {
      if (l || y.hasAttribute("data-pitaj-preview") || y.classList.contains("pitaj-preview-host")) {
        y.style.width = "100%", y.style.height = "100%", y.style.top = "0", y.style.left = "0", y.style.position = "relative";
        return;
      }
      u && K ? (y.style.top = "0", y.style.left = "0", y.style.width = "100%", y.style.height = "100%", y.setAttribute("data-pitaj-mobile-open", "true")) : (y.style.top = "", y.style.left = "", y.style.width = "0", y.style.height = "0", y.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [u, K, o, l]);
  const tt = s.formsEnabled === !0 && s.formsAvailable !== !1, bt = It(() => {
    var d, T;
    const b = s.actions || [];
    if (b.length > 0 && typeof ((d = b[0]) == null ? void 0 : d.id) == "number")
      return b[0].id;
    const y = s.forms || [];
    return y.length > 0 && typeof ((T = y[0]) == null ? void 0 : T.id) == "number" ? -y[0].id : null;
  }, [s.actions, s.forms]), ht = It(() => ({
    open: () => {
      Y(!0), g(!0);
    },
    close: () => g(!1),
    toggle: () => {
      u || Y(!0), g(!u);
    },
    startConversation: (b) => {
      Y(!0), g(!0), b && b.trim() ? F(b.trim()) : m("new-conversation");
    },
    setScreen: (b) => m(b),
    setConfig: (b) => {
      const y = {
        ...s,
        ...b,
        colors: { ...s.colors || {}, ...b.colors || {} },
        content: { ...s.content || {}, ...b.content || {} },
        features: { ...s.features || {}, ...b.features || {} }
      };
      if (y.previewDraft) {
        if (y.previewDraft.action) {
          const d = y.previewDraft.action;
          y.actions = [d, ...(y.actions || []).filter((T) => T.id !== d.id)];
        }
        if (y.previewDraft.form) {
          const d = y.previewDraft.form;
          y.forms = [d, ...(y.forms || []).filter((T) => T.id !== d.id)], y.formsAvailable = !0, y.formsEnabled = !0;
        }
        if (y.previewDraft.widget) {
          const d = y.previewDraft.widget;
          y.widgets = [d, ...(y.widgets || []).filter((T) => T.id !== d.id)];
        }
      }
      f(y);
    }
  }), [s, u, g, m, F, f]), ft = J({});
  He(ft.current, ht), G(() => () => He(ft.current, null), []), G(() => {
    a !== st.current && (st.current = a, m(a));
  }, [a, m]), G(() => {
    t !== it.current && (it.current = t, t && Y(!0), g(t));
  }, [t, g]), G(() => {
    if (p === "forms") {
      tt && bt !== null && M(bt), m("new-conversation");
      return;
    }
    p === "contact" && m("new-conversation");
  }, [bt, tt, p, m]), G(() => {
    var T;
    if (typeof document > "u") return;
    const b = (T = s.content) == null ? void 0 : T.fontFamily;
    if (!b) return;
    const y = b.trim().toLowerCase();
    let d = "";
    if (y === "inter" ? d = "family=Inter:wght@400;500;600;700" : y === "geist" ? d = "family=Geist:wght@400;500;600;700" : y === "plus jakarta sans" && (d = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), d) {
      const A = `pitaj-font-${y.replace(/\s+/g, "-")}`;
      if (!document.getElementById(A)) {
        const q = document.createElement("link");
        q.id = A, q.rel = "stylesheet", q.href = `https://fonts.googleapis.com/css2?${d}&display=swap`, document.head.appendChild(q);
      }
    }
  }, [(Ct = s.content) == null ? void 0 : Ct.fontFamily]);
  const ut = It(() => {
    var Ut, gt, je, we, ye, _e;
    if (s.cssVars && Object.keys(s.cssVars).length > 0)
      return s.cssVars;
    if ((Ut = s.theme) != null && Ut.css_vars && Object.keys(s.theme.css_vars).length > 0)
      return s.theme.css_vars;
    const b = s.colors || {}, y = ((gt = s.content) == null ? void 0 : gt.themeMode) === "dark" ? "dark" : "light", d = {};
    if (b.primaryColor) {
      d["--pitaj-accent"] = b.primaryColor, d["--pitaj-bubble-user"] = b.primaryColor, d["--pitaj-accent-hover"] = Fa(b.primaryColor), d["--pitaj-accent-contrast"] = Ht(b.primaryColor), d["--pitaj-bubble-user-fg"] = Ht(b.primaryColor);
      const dt = Zt(b.primaryColor, 0.1), Ft = Zt(b.primaryColor, 0.16), ke = Zt(b.primaryColor, 0.35);
      dt && (d["--pitaj-accent-soft"] = dt), Ft && (d["--pitaj-accent-soft-strong"] = Ft), ke && (d["--pitaj-accent-ring"] = ke);
    }
    const T = y === "dark" ? "#111827" : "#ffffff", A = b.headerBg || T, q = Ua(A, b.headerFg), H = b.headerFg || (q ? "#ffffff" : "#0f172a");
    d["--pitaj-header-bg"] = A, d["--pitaj-header-fg"] = H, q ? d["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)" : A.toLowerCase() === "#ffffff" || A.toLowerCase() === "#fff" ? d["--pitaj-header-gradient"] = "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : d["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", q ? (d["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", d["--pitaj-header-icon-hover"] = "#ffffff", d["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", d["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", d["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", d["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", d["--pitaj-header-badge-fg"] = "#ffffff", d["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (d["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", d["--pitaj-header-icon-hover"] = "#0f172a", d["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", d["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", d["--pitaj-header-border"] = b.border || "rgba(15, 23, 42, 0.08)", d["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", d["--pitaj-header-badge-fg"] = "#0f172a", d["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)"), d["--pitaj-chrome-border"] = y === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", b.surfaceBg && (d["--pitaj-surface"] = b.surfaceBg), b.subtle ? d["--pitaj-surface-subtle"] = b.subtle : b.surfaceBg && (d["--pitaj-surface-subtle"] = Zt(b.surfaceBg, 0.9) || b.surfaceBg), b.bubbleAiBg && (d["--pitaj-bubble-ai"] = b.bubbleAiBg), b.textFg && (d["--pitaj-bubble-ai-fg"] = b.textFg), b.textFg && (d["--pitaj-fg"] = b.textFg), b.mutedFg && (d["--pitaj-muted"] = b.mutedFg), b.border && (d["--pitaj-border"] = b.border), b.hover && (d["--pitaj-hover"] = b.hover), b.sendAccent && (d["--pitaj-send-accent"] = b.sendAccent, d["--pitaj-send-accent-contrast"] = Ht(b.sendAccent));
    const lt = (je = s.content) == null ? void 0 : je.launcherButtonColor;
    lt && (d["--pitaj-launcher-bg"] = lt, d["--pitaj-launcher-fg"] = Ht(lt));
    const nt = (we = s.content) == null ? void 0 : we.cornerRadius;
    if (nt) {
      const dt = nt === "sharp" || nt === "0px" ? "0px" : nt === "small" || nt === "8px" ? "8px" : nt === "medium" || nt === "12px" ? "12px" : nt === "large" || nt === "16px" ? "16px" : nt;
      d["--pitaj-radius"] = dt, dt === "0px" ? (d["--pitaj-radius-bubble"] = "0px", d["--pitaj-radius-input"] = "0px", d["--pitaj-radius-btn"] = "0px", d["--pitaj-radius-avatar"] = "0px", d["--pitaj-radius-full"] = "0px", d["--pitaj-radius-corner-sm"] = "0px", d["--pitaj-launcher-radius"] = "0px", d["--pitaj-launcher-pill-radius"] = "0px", d["--pitaj-badge-radius"] = "0px") : dt === "8px" ? (d["--pitaj-radius-bubble"] = "8px", d["--pitaj-radius-input"] = "8px", d["--pitaj-radius-btn"] = "6px", d["--pitaj-radius-avatar"] = "6px", d["--pitaj-radius-full"] = "8px", d["--pitaj-radius-corner-sm"] = "2px", d["--pitaj-launcher-radius"] = "8px", d["--pitaj-launcher-pill-radius"] = "8px", d["--pitaj-badge-radius"] = "4px") : dt === "12px" ? (d["--pitaj-radius-bubble"] = "12px", d["--pitaj-radius-input"] = "12px", d["--pitaj-radius-btn"] = "8px", d["--pitaj-radius-avatar"] = "10px", d["--pitaj-radius-full"] = "12px", d["--pitaj-radius-corner-sm"] = "4px", d["--pitaj-launcher-radius"] = "12px", d["--pitaj-launcher-pill-radius"] = "12px", d["--pitaj-badge-radius"] = "6px") : (d["--pitaj-radius-bubble"] = "18px", d["--pitaj-radius-input"] = "14px", d["--pitaj-radius-btn"] = "10px", d["--pitaj-radius-avatar"] = "50%", d["--pitaj-radius-full"] = "999px", d["--pitaj-radius-corner-sm"] = "4px", d["--pitaj-launcher-radius"] = "50%", d["--pitaj-launcher-pill-radius"] = "999px", d["--pitaj-badge-radius"] = "999px");
    }
    const Bt = (ye = s.content) == null ? void 0 : ye.fontFamily;
    if (Bt) {
      const dt = Bt.toLowerCase(), Ft = dt === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : dt === "arial" ? "Arial, Helvetica, sans-serif" : dt === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : dt === "georgia" ? "Georgia, serif" : dt === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : dt === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${Bt}', 'Inter', system-ui, sans-serif`;
      d["--pitaj-font"] = Ft, d.fontFamily = Ft;
    }
    const At = (_e = s.content) == null ? void 0 : _e.fontSize;
    return At && (d["--pitaj-font-size"] = At, d.fontSize = At), d;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (Dt = s.content) == null ? void 0 : Dt.themeMode,
    (Et = s.content) == null ? void 0 : Et.launcherButtonColor,
    (Pt = s.content) == null ? void 0 : Pt.cornerRadius,
    (j = s.content) == null ? void 0 : j.fontFamily,
    (S = s.content) == null ? void 0 : S.fontSize
  ]), zt = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ i(mt, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: O,
      className: `pitaj-root ${zt} ${u ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${l ? "is-canvas-preview" : ""} ${K ? "is-mobile" : ""} ${o && ((D = s.content) != null && D.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: ut,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-window ${u ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !u,
            children: [
              /* @__PURE__ */ i(
                ha,
                {
                  screen: p,
                  activeConversation: h,
                  config: s,
                  onBack: () => {
                    const b = X || "new-conversation";
                    v(null), m(b);
                  },
                  onClose: () => {
                    g(!1);
                  },
                  onNewConversation: () => {
                    v(null), m("new-conversation");
                  },
                  onEndConversation: () => {
                    c(), g(!1);
                  },
                  onDeleteConversation: ((Z = s.content) == null ? void 0 : Z.deleteConversationsEnabled) !== !1 && h ? () => w(h.id) : void 0,
                  onViewHistory: () => {
                    v(null), m("history");
                  },
                  onViewTickets: () => {
                    v(null), m("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                p === "conversation" && h && /* @__PURE__ */ i(
                  za,
                  {
                    conversation: h,
                    config: s,
                    isStreaming: z,
                    rateLimitCountdown: k,
                    errorBanner: L,
                    onSendMessage: N,
                    onApiError: W,
                    onSubmitSatisfaction: (b, y) => E(h.id, b, y)
                  }
                ),
                p === "new-conversation" && /* @__PURE__ */ i(
                  Aa,
                  {
                    config: s,
                    openedByUser: ct,
                    onStart: (b) => {
                      F(b);
                    },
                    onApiError: W
                  }
                ),
                p === "history" && /* @__PURE__ */ i(
                  Da,
                  {
                    conversations: x,
                    config: s,
                    onSelectConversation: (b) => {
                      v("history"), U(b);
                    },
                    onNewConversation: () => {
                      v(null), m("new-conversation");
                    },
                    onDeleteConversation: ((P = s.content) == null ? void 0 : P.deleteConversationsEnabled) !== !1 ? w : void 0
                  }
                ),
                p === "tickets" && /* @__PURE__ */ i(
                  Ca,
                  {
                    config: s,
                    visitorId: B,
                    onSelectTicket: (b) => {
                      var H;
                      v("tickets");
                      const y = (H = b.messages) == null ? void 0 : H.find((lt) => lt.sender === "user"), d = b.messages && b.messages.length > 0 ? b.messages[b.messages.length - 1] : null, T = y ? y.content.length > 40 ? y.content.slice(0, 40) + "…" : y.content : b.ticketNumber || `Tiket #${b.id}`, q = {
                        id: b.conversationId ? String(b.conversationId) : String(b.id),
                        title: T,
                        preview: d ? d.content : b.ticketNumber || `Tiket #${b.id}`,
                        timestamp: b.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: b.messages || [],
                        status: b.isResolved ? "ended" : "active",
                        ticketNumber: b.ticketNumber
                      };
                      U(q);
                    }
                  }
                ),
                (p === "conversation" || p === "new-conversation") && tt && I !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  Ea,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: $,
                    initialActionId: I,
                    visitorContact: R,
                    onApiError: W,
                    blockedReason: k !== null ? `Sačekajte ${k}s prije novog zahtjeva.` : null,
                    onSubmitted: (b) => {
                      var y, d;
                      if (C($, b, "user"), s.mockMode || s.isPreview) {
                        const T = ((d = (y = s.previewDraft) == null ? void 0 : y.form) == null ? void 0 : d.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          C($, T, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => M(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!u || !K) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${u ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            Ta,
            {
              isOpen: u,
              onOpen: () => {
                Y(!0), g(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ i(
            La,
            {
              isOpen: u,
              onClick: () => {
                u || Y(!0), g(!u);
              },
              unreadCount: _,
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const rt = {
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
    showFollowupSuggestions: !0,
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
function Ha(e) {
  if (typeof e != "string") return "#ffffff";
  let t = e.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(t) && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(t)) return "#ffffff";
  const a = Number.parseInt(t.slice(1, 3), 16), r = Number.parseInt(t.slice(3, 5), 16), o = Number.parseInt(t.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * r + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function Oa(e, t) {
  if (typeof e != "string") return t;
  const a = e.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : t;
}
function Va(e) {
  const t = e.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(t) ? `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}` : t;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const r = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, n = Number.parseInt(a.slice(5, 7), 16) / 255, l = Math.max(r, o, n), s = Math.min(r, o, n), f = l - s;
  let u = 0;
  const g = (l + s) / 2, p = f === 0 ? 0 : f / (1 - Math.abs(2 * g - 1));
  if (f !== 0)
    switch (l) {
      case r:
        u = (o - n) / f % 6;
        break;
      case o:
        u = (n - r) / f + 2;
        break;
      default:
        u = (r - o) / f + 4;
        break;
    }
  return { h: Math.round((u * 60 + 360) % 360), s: Math.round(p * 100), l: Math.round(g * 100) };
}
function Wa(e) {
  const t = typeof e == "string" ? e : "";
  switch (t) {
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
      return t;
    default:
      return "text";
  }
}
function Ka(e) {
  return Array.isArray(e) ? e.filter((t) => typeof t == "object" && t !== null).map((t) => {
    const a = t.schema_json && typeof t.schema_json == "object" ? t.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((n) => typeof n == "object" && n !== null).map((n) => ({
      key: typeof n.key == "string" ? n.key : "",
      type: Wa(n.type),
      label: typeof n.label == "string" ? n.label : "",
      required: n.required === !0,
      placeholder: typeof n.placeholder == "string" ? n.placeholder : void 0,
      options: Array.isArray(n.options) ? n.options.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
      accept: Array.isArray(n.accept) ? n.accept.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
      max_size_kb: typeof n.max_size_kb == "number" ? n.max_size_kb : void 0,
      value: typeof n.value == "string" ? n.value : void 0
    })).filter((n) => n.key !== "");
    return {
      id: typeof t.id == "number" ? t.id : 0,
      name: typeof t.name == "string" ? t.name : "",
      description: typeof t.description == "string" ? t.description : null,
      submit_label: typeof t.submit_label == "string" ? t.submit_label : "Pošalji",
      success_message: typeof t.success_message == "string" ? t.success_message : void 0,
      schema_version: typeof t.schema_version == "string" ? t.schema_version : "v1",
      schema_json: { fields: o }
    };
  }).filter((t) => t.id > 0 && t.name.trim() !== "" && t.schema_json.fields.length > 0) : [];
}
function Ga(e) {
  return Array.isArray(e) ? e.filter((t) => typeof t == "object" && t !== null).map((t) => ({
    id: typeof t.id == "number" ? t.id : 0,
    name: typeof t.name == "string" ? t.name : "",
    description: typeof t.description == "string" ? t.description : null,
    trigger_hint: typeof t.trigger_hint == "string" ? t.trigger_hint : null,
    form_id: typeof t.form_id == "number" ? t.form_id : 0,
    form_name: typeof t.form_name == "string" ? t.form_name : null
  })).filter((t) => t.id > 0 && t.form_id > 0 && t.name.trim() !== "") : [];
}
async function Za(e, t) {
  var r, o, n, l, s, f, u, g, p;
  if (e === "default")
    return { ...rt, companyId: e || "default" };
  const a = (t || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const m = `${a}/api/widget/${e}/config`, x = await fetch(m, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!x.ok) {
      if (x.status === 403) {
        const M = await x.json().catch(() => null);
        if ((M == null ? void 0 : M.code) === "COUNTRY_BLOCKED" || M != null && M.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...rt,
            companyId: e,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${x.status}), using defaults.`), { ...rt, companyId: e, apiUrl: a };
    }
    const h = await x.json(), _ = h.accent_color || ((r = rt.colors) == null ? void 0 : r.primaryColor) || "#2563eb", z = Array.isArray(h.suggested_questions) ? h.suggested_questions.filter((M) => typeof M == "string" && M.trim() !== "").slice(0, 4) : [], k = Array.isArray(h.contact_fields) ? h.contact_fields.filter(
      (M) => M === "name" || M === "email" || M === "phone"
    ) : [], U = (Array.isArray(h.channels) ? h.channels : []).find(
      (M) => typeof M == "object" && M !== null && M.channel === "chat_bubble"
    ), F = (U == null ? void 0 : U.enabled) !== !1, c = h.widget_content && typeof h.widget_content == "object" ? h.widget_content : null, w = Array.isArray(c == null ? void 0 : c.suggested_message_rows) ? c.suggested_message_rows.filter((M) => typeof M == "object" && M !== null).map((M) => {
      const X = typeof M.text == "string" ? M.text.trim() : "", v = Array.isArray(M.children) ? M.children.filter((O) => typeof O == "string" && O.trim() !== "") : [];
      return {
        text: X,
        children: v.length > 0 ? v : void 0
      };
    }).filter((M) => M.text !== "").slice(0, 4) : [], N = {
      avatarBorder: (c == null ? void 0 : c.avatar_border) !== !1,
      messagePlaceholder: typeof (c == null ? void 0 : c.message_placeholder) == "string" && c.message_placeholder.trim() !== "" ? c.message_placeholder : rt.placeholder,
      dismissibleNotice: typeof (c == null ? void 0 : c.dismissible_notice) == "string" ? c.dismissible_notice : "",
      footerText: typeof (c == null ? void 0 : c.footer_text) == "string" ? c.footer_text : "",
      attachmentsEnabled: (c == null ? void 0 : c.attachments_enabled) === !0,
      voiceToTextEnabled: (c == null ? void 0 : c.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (c == null ? void 0 : c.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (c == null ? void 0 : c.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (c == null ? void 0 : c.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (c == null ? void 0 : c.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (c == null ? void 0 : c.keep_showing_suggested_messages) === !0,
      showFollowupSuggestions: (c == null ? void 0 : c.show_followup_suggestions) !== !1,
      suggestedMessageRows: w,
      useDifferentMessageMobile: (c == null ? void 0 : c.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (c == null ? void 0 : c.mobile_welcome_message) == "string" ? c.mobile_welcome_message : "",
      autoShowInitialMessages: (c == null ? void 0 : c.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (c == null ? void 0 : c.auto_show_duration_seconds) == "number" ? Math.max(0, c.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (c == null ? void 0 : c.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (c == null ? void 0 : c.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (c == null ? void 0 : c.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, c.mobile_auto_show_duration_seconds) : null,
      popupMessageText: typeof (c == null ? void 0 : c.popup_message_text) == "string" ? c.popup_message_text : "",
      themeMode: (c == null ? void 0 : c.theme_mode) === "dark" ? "dark" : "light",
      tintedGrayscaleEnabled: (c == null ? void 0 : c.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (c == null ? void 0 : c.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (c == null ? void 0 : c.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (c == null ? void 0 : c.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (c == null ? void 0 : c.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(c.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (c == null ? void 0 : c.tinted_grayscale_tint) == "number" ? Math.max(-100, Math.min(100, Math.round(c.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (c == null ? void 0 : c.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(c.tinted_grayscale_shade))) : 0,
      launcherButtonColor: Oa(c == null ? void 0 : c.launcher_button_color, "#05070c"),
      launcherIconStyle: (c == null ? void 0 : c.launcher_icon_style) === "sparkles" || (c == null ? void 0 : c.launcher_icon_style) === "message-square" || (c == null ? void 0 : c.launcher_icon_style) === "contact" || (c == null ? void 0 : c.launcher_icon_style) === "custom" ? c.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (c == null ? void 0 : c.launcher_icon_url) == "string" ? c.launcher_icon_url : "",
      launcherShowText: (c == null ? void 0 : c.launcher_show_text) === !0,
      launcherText: typeof (c == null ? void 0 : c.launcher_text) == "string" ? c.launcher_text : "",
      launcherTextSide: (c == null ? void 0 : c.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (c == null ? void 0 : c.show_inline_launcher) === !0,
      cornerRadius: typeof (c == null ? void 0 : c.corner_radius) == "string" ? c.corner_radius : "16px",
      fontFamily: typeof (c == null ? void 0 : c.font_family) == "string" ? c.font_family : "Inter",
      fontSize: typeof (c == null ? void 0 : c.font_size) == "string" ? c.font_size : "14px",
      languageSource: (c == null ? void 0 : c.language_source) === "website" ? "website" : "browser",
      defaultLanguage: typeof (c == null ? void 0 : c.default_language) == "string" ? c.default_language : "en",
      supportedLanguages: Array.isArray(c == null ? void 0 : c.supported_languages) ? c.supported_languages : ["en"],
      guardrails: c == null ? void 0 : c.guardrails
    }, E = h.theme && typeof h.theme == "object" ? h.theme : null, R = E != null && E.css_vars && typeof E.css_vars == "object" ? E.css_vars : void 0, B = E != null && E.colors && typeof E.colors == "object" ? E.colors : null;
    let $ = B, C = _;
    if ($)
      B.primaryColor && (C = B.primaryColor);
    else {
      const M = N.themeMode === "dark" ? "dark" : "light", X = N.accentColorEnabled !== !1, v = N.accentColorForHeaderEnabled === !0, O = N.tintedGrayscaleEnabled === !0, K = N.tintedGrayscaleHue ?? 0, at = N.tintedGrayscaleTint ?? 0, tt = N.tintedGrayscaleShade ?? 0;
      C = X ? _ : M === "dark" ? "#3b82f6" : "#2563eb";
      const ht = (Va(C).h + K + 360) % 360, ft = Math.max(0, Math.min(46, 10 + at * 0.36)), ut = Math.max(-24, Math.min(24, tt * 0.24));
      if ($ = M === "dark" ? {
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
      }, X && v && ($.headerBg = C, $.headerFg = Ha(C)), O) {
        const zt = M === "dark" ? Math.max(8, Math.min(20, 12 + ut)) : Math.max(88, Math.min(97, 95 + ut * 0.22)), xt = M === "dark" ? Math.max(10, Math.min(24, 16 + ut)) : Math.max(80, Math.min(94, 89 + ut * 0.35)), yt = M === "dark" ? Math.max(11, Math.min(26, 18 + ut * 0.9)) : Math.max(83, Math.min(95, xt + 3)), _t = M === "dark" ? Math.max(22, Math.min(40, 30 + ut)) : Math.max(70, Math.min(88, 82 + ut * 0.38)), kt = M === "dark" ? Math.max(16, Math.min(30, 22 + ut)) : Math.max(78, Math.min(92, xt - 2));
        $.surfaceBg = `hsl(${ht} ${ft}% ${zt}%)`, $.bubbleAiBg = `hsl(${ht} ${Math.max(0, ft - 2)}% ${yt}%)`, $.subtle = `hsl(${ht} ${Math.max(0, ft - 4)}% ${xt}%)`, $.border = `hsl(${ht} ${Math.max(0, ft - 5)}% ${_t}%)`, $.hover = `hsl(${ht} ${Math.max(0, ft - 3)}% ${kt}%)`;
      }
    }
    const W = Ka(h.forms), st = Ga(h.actions).filter(
      (M) => W.some((X) => X.id === M.form_id)
    ), it = h.forms_enabled === !0 && W.length > 0 && st.length > 0, ct = h.chat_available !== !1, Y = h.transcribe_available !== !1 && ct, I = h.forms_available !== !1 && it;
    return {
      ...rt,
      companyId: e,
      enabled: F,
      apiUrl: a,
      name: h.company_name || rt.name,
      title: h.bot_name || rt.title,
      avatar: typeof (c == null ? void 0 : c.avatar_url) == "string" && c.avatar_url.trim() !== "" ? c.avatar_url : rt.avatar,
      welcomeHeadline: h.bot_name ? `Ćaskajte sa ${h.bot_name}` : rt.welcomeHeadline,
      welcomeMessage: h.welcome_message || rt.welcomeMessage,
      placeholder: N.messagePlaceholder || rt.placeholder,
      suggestedQuestions: z,
      contactFields: k.length > 0 ? k : rt.contactFields,
      contact: {
        enabled: typeof ((o = h.contact) == null ? void 0 : o.enabled) == "boolean" ? h.contact.enabled : (n = rt.contact) == null ? void 0 : n.enabled,
        title: typeof ((l = h.contact) == null ? void 0 : l.title) == "string" && h.contact.title.trim() !== "" ? h.contact.title : (s = rt.contact) == null ? void 0 : s.title,
        subtitle: typeof ((f = h.contact) == null ? void 0 : f.subtitle) == "string" && h.contact.subtitle.trim() !== "" ? h.contact.subtitle : (u = rt.contact) == null ? void 0 : u.subtitle,
        submitLabel: typeof ((g = h.contact) == null ? void 0 : g.submit_label) == "string" && h.contact.submit_label.trim() !== "" ? h.contact.submit_label : (p = rt.contact) == null ? void 0 : p.submitLabel
      },
      poweredBy: h.show_branding !== void 0 ? h.show_branding : rt.poweredBy,
      position: h.position || rt.position,
      accentGradient: Array.isArray(h.accent_gradient) ? h.accent_gradient : [],
      content: {
        ...rt.content || {},
        ...N
      },
      chatAvailable: ct,
      transcribeAvailable: Y,
      formsAvailable: I,
      formsEnabled: it,
      forms: W,
      actions: st,
      theme: E,
      cssVars: R,
      colors: {
        ...rt.colors,
        primaryColor: C,
        bubbleUserBg: C,
        sendAccent: (B == null ? void 0 : B.sendAccent) || (N.accentColorForSendIconEnabled ? C : N.themeMode === "dark" ? "#e5e7eb" : "#111827"),
        headerBg: $.headerBg,
        headerFg: $.headerFg,
        surfaceBg: $.surfaceBg,
        bubbleAiBg: $.bubbleAiBg,
        textFg: $.textFg,
        mutedFg: $.mutedFg,
        border: $.border,
        hover: $.hover,
        subtle: $.subtle
      }
    };
  } catch (m) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", m), { ...rt, companyId: e, apiUrl: a, mockMode: !1 };
  }
}
const Ya = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}', qa = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", Nt = {};
function yi(e, t) {
  (Nt[e] || []).forEach((r) => {
    try {
      r(t);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${e}:`, o);
    }
  });
}
function Qa(e) {
  let t = document.getElementById(e);
  return t || (t = document.createElement("div"), t.id = e, t.style.position = "fixed", t.style.zIndex = "2147483647", t.style.bottom = "0", t.style.right = "0", t.style.width = "0", t.style.height = "0", t.style.overflow = "visible", t.style.pointerEvents = "none", document.body.appendChild(t)), t;
}
function Ja(e, t) {
  const a = t.initialConfig || {}, r = !!(t.isPreview || a.isPreview || e.isPreview), o = t.previewDraft || a.previewDraft || e.previewDraft, n = {
    ...e,
    ...a,
    isPreview: r,
    previewDraft: o,
    mockMode: r ? !0 : a.mockMode ?? e.mockMode,
    position: t.position || a.position || e.position || "bottom-right",
    apiUrl: t.apiUrl || a.apiUrl || e.apiUrl,
    colors: { ...e.colors || {}, ...a.colors || {} },
    content: { ...e.content || {}, ...a.content || {} },
    features: { ...e.features || {}, ...a.features || {} },
    theme: a.colors ? void 0 : a.theme || e.theme,
    cssVars: a.colors ? void 0 : a.cssVars || e.cssVars
  };
  if (o) {
    if (o.action) {
      const l = o.action;
      n.actions = [l, ...(n.actions || []).filter((s) => s.id !== l.id)];
    }
    if (o.form) {
      const l = o.form;
      n.forms = [l, ...(n.forms || []).filter((s) => s.id !== l.id)], n.formsAvailable = !0, n.formsEnabled = !0;
    }
    if (o.widget) {
      const l = o.widget;
      n.widgets = [l, ...(n.widgets || []).filter((s) => s.id !== l.id)];
    }
  }
  return n;
}
const Yt = /* @__PURE__ */ new WeakMap();
async function ue(e, t = {}) {
  const a = Yt.get(e), r = async () => {
    var h, _;
    const n = t.widgetId || t.companyId || "default", s = !!(t.isPreview || (h = t.initialConfig) != null && h.isPreview || n === "preview") && n === "preview" ? { ...rt, companyId: n, apiUrl: t.apiUrl, mockMode: !0 } : await Za(n, t.apiUrl), f = Ja(s, t);
    if (f.enabled === !1 || f.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let u = e.shadowRoot;
    u || (u = e.attachShadow({ mode: "open" })), u.innerHTML = "";
    const g = document.createElement("style");
    g.textContent = Ya, u.appendChild(g);
    const p = document.createElement("div");
    p.className = "pitaj-shadow-mount", u.appendChild(p);
    const m = t.isCanvasPreview ?? (e.hasAttribute("data-pitaj-preview") || e.classList.contains("pitaj-preview-host") || !!((_ = e.closest) != null && _.call(e, "[data-pitaj-preview]")));
    if (m) {
      const z = document.createElement("style");
      z.textContent = qa, u.appendChild(z);
    }
    ze(
      /* @__PURE__ */ i(
        Ra,
        {
          config: f,
          startOpen: t.startOpen ?? !1,
          isInline: t.isInline ?? !1,
          isMobile: t.isMobile,
          isCanvasPreview: m,
          initialScreen: t.initialScreen,
          onEvent: yi
        }
      ),
      p
    );
    const x = wt();
    return x && (e.__pitajController = x), {
      controller: x,
      unmount: () => {
        ze(null, p), u && (u.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(r, r);
  Yt.set(e, o);
  try {
    return await o;
  } finally {
    Yt.get(e) === o && Yt.delete(e);
  }
}
let Rt = null;
const qt = {
  mount: async (e, t) => {
    const a = await ue(e, t);
    return Rt = a.unmount, a;
  },
  unmount: () => {
    Rt && (Rt(), Rt = null);
  },
  init: async (e) => {
    const t = Qa(e.containerId || "pitaj-io-widget-root"), a = await ue(t, {
      widgetId: e.widgetId,
      companyId: e.companyId,
      apiUrl: e.apiUrl,
      position: e.position,
      startOpen: e.startOpen,
      isInline: e.isInline,
      initialScreen: e.initialScreen,
      initialConfig: e.config
    });
    return Rt = a.unmount, a;
  },
  open: () => {
    var e;
    return (e = wt()) == null ? void 0 : e.open();
  },
  close: () => {
    var e;
    return (e = wt()) == null ? void 0 : e.close();
  },
  toggle: () => {
    var e;
    return (e = wt()) == null ? void 0 : e.toggle();
  },
  startConversation: (e) => {
    var t;
    return (t = wt()) == null ? void 0 : t.startConversation(e);
  },
  setScreen: (e) => {
    var t;
    return (t = wt()) == null ? void 0 : t.setScreen(e);
  },
  setCompanyId: (e) => {
    var t;
    return (t = wt()) == null ? void 0 : t.setConfig({ companyId: e });
  },
  setConfig: (e) => {
    var t;
    return (t = wt()) == null ? void 0 : t.setConfig(e);
  },
  identify: (e) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(e)), e.id && localStorage.setItem("pitaj_io_visitor_id", e.id);
    } catch {
    }
  },
  on: (e, t) => {
    Nt[e] || (Nt[e] = []), Nt[e].push(t);
  },
  off: (e, t) => {
    Nt[e] && (Nt[e] = Nt[e].filter((a) => a !== t));
  },
  emit: (e, t) => {
    yi(e, t);
  }
};
class Xa extends HTMLElement {
  constructor() {
    super(...arguments);
    Mt(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", r = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", n = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", l = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await ue(this, { widgetId: a, apiUrl: r, position: o, startOpen: n, isInline: l });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function We(e) {
  if (!e) return null;
  const t = e.getAttribute("data-company") || e.getAttribute("data-widget-id") || e.getAttribute("data-company-id") || e.getAttribute("company") || e.getAttribute("company-id") || void 0;
  if (!t) return null;
  const a = e.getAttribute("data-api-url") || void 0, r = e.getAttribute("data-position") || "bottom-right", o = e.getAttribute("data-start-open") === "true", n = e.getAttribute("data-inline") === "true";
  return { companyId: t, apiUrl: a, position: r, startOpen: o, isInline: n };
}
var Ke;
if (typeof window < "u") {
  const e = ((Ke = window.PitajIO) == null ? void 0 : Ke._q) || [];
  window.PitajIO = qt, customElements.get("pitaj-io") || customElements.define("pitaj-io", Xa);
  const t = window.__pitajIoInit;
  if (t)
    window.__pitajIoInit = void 0, qt.init(t).then(() => {
      e.forEach(({ method: a, args: r }) => {
        const o = qt[a];
        typeof o == "function" && o(...r);
      });
    });
  else {
    const a = document.currentScript;
    let r = We(a);
    if (!r) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let n = o.length - 1; n >= 0; n--) {
        const l = o[n];
        if (l.src && /widget(\.iife)?\.js/i.test(l.src) && (r = We(l), r))
          break;
      }
    }
    r && qt.init({ containerId: "pitaj-io-widget-root", ...r });
  }
}
export {
  J as A,
  xr as B,
  or as C,
  fr as D,
  _r as G,
  sr as M,
  re as P,
  vr as S,
  It as T,
  ar as U,
  pr as W,
  ea as a,
  te as b,
  ir as c,
  V as d,
  rr as e,
  nr as f,
  er as g,
  jt as h,
  wr as i,
  yr as j,
  mt as k,
  br as l,
  gr as m,
  jr as n,
  cr as o,
  lr as p,
  dr as q,
  ur as r,
  mr as s,
  ci as t,
  i as u,
  hr as v,
  qt as w,
  G as y
};
