var Si = Object.defineProperty;
var zi = (t, e, a) => e in t ? Si(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var Ne = (t, e, a) => zi(t, typeof e != "symbol" ? e + "" : e, a);
var ct, Q, Qt, ze, zt, Jt, Xt, ei, jt, ft, gt, Ze = {}, ti = [], Ai = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, lt = Array.isArray;
function xe(t, e) {
  for (var a in e) t[a] = e[a];
  return t;
}
function wt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Ii(t, e, a) {
  var r, o, n, l = {};
  for (n in e) n == "key" ? r = e[n] : n == "ref" ? o = e[n] : l[n] = e[n];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ct.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) l[n] === void 0 && (l[n] = t.defaultProps[n]);
  return rt(t, l, r, o, null);
}
function rt(t, e, a, r, o) {
  var n = { type: t, props: e, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Qt, __i: -1, __u: 0 };
  return o == null && Q.vnode != null && Q.vnode(n), n;
}
function he(t) {
  return t.children;
}
function nt(t, e) {
  this.props = t, this.context = e;
}
function Ce(t, e) {
  if (e == null) return t.__ ? Ce(t.__, t.__i + 1) : null;
  for (var a; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) return a.__e;
  return typeof t.type == "function" ? Ce(t) : null;
}
function ii(t) {
  var e, a;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) {
      t.__e = t.__c.base = a.__e;
      break;
    }
    return ii(t);
  }
}
function At(t) {
  (!t.__d && (t.__d = !0) && ze.push(t) && !pt.__r++ || zt !== Q.debounceRendering) && ((zt = Q.debounceRendering) || Jt)(pt);
}
function pt() {
  for (var t, e, a, r, o, n, l, s = 1; ze.length; ) ze.length > s && ze.sort(Xt), t = ze.shift(), s = ze.length, t.__d && (a = void 0, o = (r = (e = t).__v).__e, n = [], l = [], e.__P && ((a = xe({}, r)).__v = r.__v + 1, Q.vnode && Q.vnode(a), yt(e.__P, a, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, n, o ?? Ce(r), !!(32 & r.__u), l), a.__v = r.__v, a.__.__k[a.__i] = a, ni(n, a, l), a.__e != o && ii(a)));
  pt.__r = 0;
}
function ai(t, e, a, r, o, n, l, s, h, u, b) {
  var p, f, v, x, y, S, z = r && r.__k || ti, N = e.length;
  for (h = Ci(a, e, z, h, N), p = 0; p < N; p++) (v = a.__k[p]) != null && (f = v.__i === -1 ? Ze : z[v.__i] || Ze, v.__i = p, S = yt(t, v, f, o, n, l, s, h, u, b), x = v.__e, v.ref && f.ref != v.ref && (f.ref && _t(f.ref, null, v), b.push(v.ref, v.__c || x, v)), y == null && x != null && (y = x), 4 & v.__u || f.__k === v.__k ? h = ri(v, h, t) : typeof v.type == "function" && S !== void 0 ? h = S : x && (h = x.nextSibling), v.__u &= -7);
  return a.__e = y, h;
}
function Ci(t, e, a, r, o) {
  var n, l, s, h, u, b = a.length, p = b, f = 0;
  for (t.__k = new Array(o), n = 0; n < o; n++) (l = e[n]) != null && typeof l != "boolean" && typeof l != "function" ? (h = n + f, (l = t.__k[n] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? rt(null, l, null, null, null) : lt(l) ? rt(he, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? rt(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, s = null, (u = l.__i = Li(l, a, h, p)) !== -1 && (p--, (s = a[u]) && (s.__u |= 2)), s == null || s.__v === null ? (u == -1 && (o > b ? f-- : o < b && f++), typeof l.type != "function" && (l.__u |= 4)) : u != h && (u == h - 1 ? f-- : u == h + 1 ? f++ : (u > h ? f-- : f++, l.__u |= 4))) : t.__k[n] = null;
  if (p) for (n = 0; n < b; n++) (s = a[n]) != null && !(2 & s.__u) && (s.__e == r && (r = Ce(s)), si(s, s));
  return r;
}
function ri(t, e, a) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = ri(r[o], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !a.contains(e) && (e = Ce(t)), a.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Li(t, e, a, r) {
  var o, n, l = t.key, s = t.type, h = e[a];
  if (h === null && t.key == null || h && l == h.key && s === h.type && !(2 & h.__u)) return a;
  if (r > (h != null && !(2 & h.__u) ? 1 : 0)) for (o = a - 1, n = a + 1; o >= 0 || n < e.length; ) {
    if (o >= 0) {
      if ((h = e[o]) && !(2 & h.__u) && l == h.key && s === h.type) return o;
      o--;
    }
    if (n < e.length) {
      if ((h = e[n]) && !(2 & h.__u) && l == h.key && s === h.type) return n;
      n++;
    }
  }
  return -1;
}
function It(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || Ai.test(e) ? a : a + "px";
}
function et(t, e, a, r, o) {
  var n;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) a && e in a || It(t.style, e, "");
    if (a) for (e in a) r && a[e] === r[e] || It(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(ei, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = a, a ? r ? a.t = r.t : (a.t = jt, t.addEventListener(e, n ? gt : ft, n)) : t.removeEventListener(e, n ? gt : ft, n);
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
function Ct(t) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + t];
      if (e.u == null) e.u = jt++;
      else if (e.u < a.t) return;
      return a(Q.event ? Q.event(e) : e);
    }
  };
}
function yt(t, e, a, r, o, n, l, s, h, u) {
  var b, p, f, v, x, y, S, z, N, V, E, c, A, I, _, H, L, C = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (h = !!(32 & a.__u), n = [s = e.__e = a.__e]), (b = Q.__b) && b(e);
  e: if (typeof C == "function") try {
    if (z = e.props, N = "prototype" in C && C.prototype.render, V = (b = C.contextType) && r[b.__c], E = b ? V ? V.props.value : b.__ : r, a.__c ? S = (p = e.__c = a.__c).__ = p.__E : (N ? e.__c = p = new C(z, E) : (e.__c = p = new nt(z, E), p.constructor = C, p.render = $i), V && V.sub(p), p.props = z, p.state || (p.state = {}), p.context = E, p.__n = r, f = p.__d = !0, p.__h = [], p._sb = []), N && p.__s == null && (p.__s = p.state), N && C.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = xe({}, p.__s)), xe(p.__s, C.getDerivedStateFromProps(z, p.__s))), v = p.props, x = p.state, p.__v = e, f) N && C.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), N && p.componentDidMount != null && p.__h.push(p.componentDidMount);
    else {
      if (N && C.getDerivedStateFromProps == null && z !== v && p.componentWillReceiveProps != null && p.componentWillReceiveProps(z, E), !p.__e && (p.shouldComponentUpdate != null && p.shouldComponentUpdate(z, p.__s, E) === !1 || e.__v == a.__v)) {
        for (e.__v != a.__v && (p.props = z, p.state = p.__s, p.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(T) {
          T && (T.__ = e);
        }), c = 0; c < p._sb.length; c++) p.__h.push(p._sb[c]);
        p._sb = [], p.__h.length && l.push(p);
        break e;
      }
      p.componentWillUpdate != null && p.componentWillUpdate(z, p.__s, E), N && p.componentDidUpdate != null && p.__h.push(function() {
        p.componentDidUpdate(v, x, y);
      });
    }
    if (p.context = E, p.props = z, p.__P = t, p.__e = !1, A = Q.__r, I = 0, N) {
      for (p.state = p.__s, p.__d = !1, A && A(e), b = p.render(p.props, p.state, p.context), _ = 0; _ < p._sb.length; _++) p.__h.push(p._sb[_]);
      p._sb = [];
    } else do
      p.__d = !1, A && A(e), b = p.render(p.props, p.state, p.context), p.state = p.__s;
    while (p.__d && ++I < 25);
    p.state = p.__s, p.getChildContext != null && (r = xe(xe({}, r), p.getChildContext())), N && !f && p.getSnapshotBeforeUpdate != null && (y = p.getSnapshotBeforeUpdate(v, x)), H = b, b != null && b.type === he && b.key == null && (H = oi(b.props.children)), s = ai(t, lt(H) ? H : [H], e, a, r, o, n, l, s, h, u), p.base = e.__e, e.__u &= -161, p.__h.length && l.push(p), S && (p.__E = p.__ = null);
  } catch (T) {
    if (e.__v = null, h || n != null) if (T.then) {
      for (e.__u |= h ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      n[n.indexOf(s)] = null, e.__e = s;
    } else for (L = n.length; L--; ) wt(n[L]);
    else e.__e = a.__e, e.__k = a.__k;
    Q.__e(T, e, a);
  }
  else n == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : s = e.__e = Ti(a.__e, e, a, r, o, n, l, h, u);
  return (b = Q.diffed) && b(e), 128 & e.__u ? void 0 : s;
}
function ni(t, e, a) {
  for (var r = 0; r < a.length; r++) _t(a[r], a[++r], a[++r]);
  Q.__c && Q.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      Q.__e(n, o.__v);
    }
  });
}
function oi(t) {
  return typeof t != "object" || t == null ? t : lt(t) ? t.map(oi) : xe({}, t);
}
function Ti(t, e, a, r, o, n, l, s, h) {
  var u, b, p, f, v, x, y, S = a.props, z = e.props, N = e.type;
  if (N == "svg" ? o = "http://www.w3.org/2000/svg" : N == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (u = 0; u < n.length; u++) if ((v = n[u]) && "setAttribute" in v == !!N && (N ? v.localName == N : v.nodeType == 3)) {
      t = v, n[u] = null;
      break;
    }
  }
  if (t == null) {
    if (N == null) return document.createTextNode(z);
    t = document.createElementNS(o, N, z.is && z), s && (Q.__m && Q.__m(e, n), s = !1), n = null;
  }
  if (N === null) S === z || s && t.data === z || (t.data = z);
  else {
    if (n = n && ct.call(t.childNodes), S = a.props || Ze, !s && n != null) for (S = {}, u = 0; u < t.attributes.length; u++) S[(v = t.attributes[u]).name] = v.value;
    for (u in S) if (v = S[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") p = v;
      else if (!(u in z)) {
        if (u == "value" && "defaultValue" in z || u == "checked" && "defaultChecked" in z) continue;
        et(t, u, null, v, o);
      }
    }
    for (u in z) v = z[u], u == "children" ? f = v : u == "dangerouslySetInnerHTML" ? b = v : u == "value" ? x = v : u == "checked" ? y = v : s && typeof v != "function" || S[u] === v || et(t, u, v, S[u], o);
    if (b) s || p && (b.__html === p.__html || b.__html === t.innerHTML) || (t.innerHTML = b.__html), e.__k = [];
    else if (p && (t.innerHTML = ""), ai(e.type === "template" ? t.content : t, lt(f) ? f : [f], e, a, r, N == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, l, n ? n[0] : a.__k && Ce(a, 0), s, h), n != null) for (u = n.length; u--; ) wt(n[u]);
    s || (u = "value", N == "progress" && x == null ? t.removeAttribute("value") : x !== void 0 && (x !== t[u] || N == "progress" && !x || N == "option" && x !== S[u]) && et(t, u, x, S[u], o), u = "checked", y !== void 0 && y !== t[u] && et(t, u, y, S[u], o));
  }
  return t;
}
function _t(t, e, a) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    Q.__e(o, a);
  }
}
function si(t, e, a) {
  var r, o;
  if (Q.unmount && Q.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || _t(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      Q.__e(n, e);
    }
    r.base = r.__P = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && si(r[o], e, a || typeof t.type != "function");
  a || wt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function $i(t, e, a) {
  return this.constructor(t, a);
}
function Lt(t, e, a) {
  var r, o, n, l;
  e == document && (e = document.documentElement), Q.__ && Q.__(t, e), o = (r = !1) ? null : e.__k, n = [], l = [], yt(e, t = e.__k = Ii(he, null, [t]), o || Ze, Ze, e.namespaceURI, o ? null : e.firstChild ? ct.call(e.childNodes) : null, n, o ? o.__e : e.firstChild, r, l), ni(n, t, l);
}
ct = ti.slice, Q = { __e: function(t, e, a, r) {
  for (var o, n, l; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(t)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), l = o.__d), l) return o.__E = o;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Qt = 0, nt.prototype.setState = function(t, e) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xe({}, this.state), typeof t == "function" && (t = t(xe({}, a), this.props)), t && xe(a, t), t != null && this.__v && (e && this._sb.push(e), At(this));
}, nt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), At(this));
}, nt.prototype.render = he, ze = [], Jt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Xt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, pt.__r = 0, ei = /(PointerCapture)$|Capture$/i, jt = 0, ft = Ct(!1), gt = Ct(!0);
var Ei = 0;
function i(t, e, a, r, o, n) {
  e || (e = {});
  var l, s, h = e;
  if ("ref" in h) for (s in h = {}, e) s == "ref" ? l = e[s] : h[s] = e[s];
  var u = { type: t, props: h, key: a, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ei, __i: -1, __u: 0, __source: o, __self: n };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) h[s] === void 0 && (h[s] = l[s]);
  return Q.vnode && Q.vnode(u), u;
}
var qe, oe, ut, Tt, Qe = 0, pi = [], ce = Q, $t = ce.__b, Et = ce.__r, Dt = ce.diffed, Pt = ce.__c, Bt = ce.unmount, Ut = ce.__;
function kt(t, e) {
  ce.__h && ce.__h(oe, t, Qe || e), Qe = 0;
  var a = oe.__H || (oe.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function R(t) {
  return Qe = 1, Di(li, t);
}
function Di(t, e, a) {
  var r = kt(qe++, 2);
  if (r.t = t, !r.__c && (r.__ = [li(void 0, e), function(s) {
    var h = r.__N ? r.__N[0] : r.__[0], u = r.t(h, s);
    h !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = oe, !oe.__f)) {
    var o = function(s, h, u) {
      if (!r.__c.__H) return !0;
      var b = r.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (b.every(function(f) {
        return !f.__N;
      })) return !n || n.call(this, s, h, u);
      var p = r.__c.props !== s;
      return b.forEach(function(f) {
        if (f.__N) {
          var v = f.__[0];
          f.__ = f.__N, f.__N = void 0, v !== f.__[0] && (p = !0);
        }
      }), n && n.call(this, s, h, u) || p;
    };
    oe.__f = !0;
    var n = oe.shouldComponentUpdate, l = oe.componentWillUpdate;
    oe.componentWillUpdate = function(s, h, u) {
      if (this.__e) {
        var b = n;
        n = void 0, o(s, h, u), n = b;
      }
      l && l.call(this, s, h, u);
    }, oe.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Y(t, e) {
  var a = kt(qe++, 3);
  !ce.__s && ci(a.__H, e) && (a.__ = t, a.u = e, oe.__H.__h.push(a));
}
function J(t) {
  return Qe = 5, Ae(function() {
    return { current: t };
  }, []);
}
function Ae(t, e) {
  var a = kt(qe++, 7);
  return ci(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function ee(t, e) {
  return Qe = 8, Ae(function() {
    return t;
  }, e);
}
function Pi() {
  for (var t; t = pi.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(ot), t.__H.__h.forEach(bt), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], ce.__e(e, t.__v);
  }
}
ce.__b = function(t) {
  oe = null, $t && $t(t);
}, ce.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ut && Ut(t, e);
}, ce.__r = function(t) {
  Et && Et(t), qe = 0;
  var e = (oe = t.__c).__H;
  e && (ut === oe ? (e.__h = [], oe.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.forEach(ot), e.__h.forEach(bt), e.__h = [], qe = 0)), ut = oe;
}, ce.diffed = function(t) {
  Dt && Dt(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (pi.push(e) !== 1 && Tt === ce.requestAnimationFrame || ((Tt = ce.requestAnimationFrame) || Bi)(Pi)), e.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), ut = oe = null;
}, ce.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(ot), a.__h = a.__h.filter(function(r) {
        return !r.__ || bt(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], ce.__e(r, a.__v);
    }
  }), Pt && Pt(t, e);
}, ce.unmount = function(t) {
  Bt && Bt(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.forEach(function(r) {
    try {
      ot(r);
    } catch (o) {
      e = o;
    }
  }), a.__H = void 0, e && ce.__e(e, a.__v));
};
var Ht = typeof requestAnimationFrame == "function";
function Bi(t) {
  var e, a = function() {
    clearTimeout(r), Ht && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(a, 100);
  Ht && (e = requestAnimationFrame(a));
}
function ot(t) {
  var e = oe, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), oe = e;
}
function bt(t) {
  var e = oe;
  t.__c = t.__(), oe = e;
}
function ci(t, e) {
  return !t || t.length !== e.length || e.some(function(a, r) {
    return a !== t[r];
  });
}
function li(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function Ui(t, e) {
  const a = t.body;
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
      const h = n.split(/\r?\n/);
      n = h.pop() || "";
      for (const u of h) {
        const b = u.trim();
        if (!(!b || b.startsWith(":")) && b.startsWith("data:")) {
          const p = b.slice(5).trim();
          if (p === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const f = JSON.parse(p);
            if (typeof f == "string")
              e.onChunk(f);
            else if (f && typeof f == "object") {
              (f.chunk || f.token || f.content || f.text) && e.onChunk(f.chunk || f.token || f.content || f.text), f.sources && Array.isArray(f.sources) && e.onSources && e.onSources(f.sources);
              const v = f.suggestedQuestions ?? f.suggested_questions;
              Array.isArray(v) && v.length > 0 && e.onSuggestedQuestions && e.onSuggestedQuestions(v), e.onConversationId && (f.conversation_id !== void 0 || f.conversationId !== void 0) && e.onConversationId(
                f.conversation_id ?? f.conversationId
              );
              const x = f.ticket_number ?? f.ticketNumber;
              e.onTicketNumber && x !== void 0 && x !== null && String(x).trim() !== "" && String(x).trim() !== "undefined" && String(x).trim() !== "null" && e.onTicketNumber(
                String(x).trim()
              ), e.onActionTrigger && f.triggered_action && typeof f.triggered_action == "object" && e.onActionTrigger(f.triggered_action);
            }
          } catch {
            e.onChunk(p);
          }
        }
      }
    }
    e.onDone && e.onDone();
  } catch (l) {
    if (e.onError)
      e.onError(l);
    else
      throw l;
  }
}
class di extends Error {
  constructor(a, r = 60, o) {
    super(a);
    Ne(this, "retryAfterSeconds");
    Ne(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = r, this.code = o;
  }
}
class ui extends Error {
  constructor(a, r, o, n) {
    super(a);
    Ne(this, "status");
    Ne(this, "code");
    Ne(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = r, this.code = o, this.retryAfterSeconds = n;
  }
}
function Hi(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function Fi(t, e) {
  const a = await t.json().catch(() => null);
  mi(t.status, a, e, t.headers.get("Retry-After"));
}
function mi(t, e, a, r) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, n = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, l = Hi((e == null ? void 0 : e.retry_after) ?? r, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new di(n, l, o) : new ui(n, t, o, l);
}
function hi(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function Mt(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Ri(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return Mt(e.of(t));
  } catch {
    return null;
  }
}
function Oi() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const r = JSON.parse(a);
        t = hi(
          r.country_code ?? r.countryCode ?? r.visitor_country_code ?? r.visitorCountryCode ?? r.country
        ), e = Mt(
          r.country_name ?? r.countryName ?? r.visitor_country_name ?? r.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Ri(t)), { code: t, name: e };
}
const Ft = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Vi(t, e, a, r) {
  var h;
  const o = (r == null ? void 0 : r.action) || (a && a.length > 0 ? a[0] : null);
  if (o && e.onActionTrigger) {
    const p = (!!(o.widget_id || o.widget || r != null && r.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let f = 0; f < p.length; f++) {
      const v = p[f] + (f < p.length - 1 ? " " : "");
      e.onChunk(v), await new Promise((x) => setTimeout(x, 20));
    }
    e.onActionTrigger({
      id: o.id,
      name: o.name,
      form_id: o.form_id,
      widget_id: o.widget_id,
      widget: o.widget || (r == null ? void 0 : r.widget) || null
    }), e.onDone && e.onDone();
    return;
  }
  const n = `${Ft[Math.floor(Math.random() * Ft.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, l = ((h = r == null ? void 0 : r.content) == null ? void 0 : h.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = n.split(" ");
  for (let u = 0; u < s.length; u++) {
    const b = s[u] + (u < s.length - 1 ? " " : "");
    e.onChunk(b), await new Promise((p) => setTimeout(p, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && l.length > 0 && e.onSuggestedQuestions(l), e.onDone && e.onDone();
}
async function Gi(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: r,
    message: o,
    forceNewConversation: n,
    apiUrl: l,
    mockMode: s,
    visitorName: h,
    visitorEmail: u,
    visitorPhone: b,
    visitorCountryCode: p,
    visitorCountryName: f,
    actions: v,
    previewDraft: x,
    callbacks: y
  } = t;
  if (s || !e || e === "default") {
    await Vi(o, y, v, x);
    return;
  }
  const S = (l || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), z = Oi(), N = hi(p) ?? z.code ?? void 0, V = Mt(f) ?? z.name ?? void 0, E = `${S}/api/widget/${e}/chat`, c = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, A = await fetch(E, {
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
      visitor_language: t.visitorLanguage || void 0,
      visitor_name: h || void 0,
      visitor_email: u || void 0,
      visitor_phone: b || void 0,
      visitor_country_code: N,
      visitor_country_name: V
    })
  });
  if (A.ok || await Fi(A, `API greška (${A.status})`), (A.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Ui(A, y);
  else {
    const _ = await A.json(), H = _.answer || _.message || "";
    _.conversation_id !== void 0 && y.onConversationId && y.onConversationId(_.conversation_id);
    const L = _.ticket_number ?? _.ticketNumber;
    if (L != null && String(L).trim() !== "" && String(L).trim() !== "undefined" && String(L).trim() !== "null" && y.onTicketNumber && y.onTicketNumber(String(L).trim()), _.triggered_action && y.onActionTrigger && y.onActionTrigger(_.triggered_action), H && H.trim()) {
      const T = H.split(" ");
      for (let G = 0; G < T.length; G++) {
        const ae = T[G] + (G < T.length - 1 ? " " : "");
        y.onChunk(ae), await new Promise((re) => setTimeout(re, 15));
      }
    }
    const C = _.suggestedQuestions ?? _.suggested_questions;
    Array.isArray(C) && C.length > 0 && y.onSuggestedQuestions && y.onSuggestedQuestions(C), y.onDone && y.onDone();
  }
}
async function vt(t) {
  const { widgetId: e, visitorId: a, apiUrl: r, status: o, page: n = 1, perPage: l = 15 } = t, s = (r || "").replace(/\/$/, ""), h = new URLSearchParams({
    visitor_id: a,
    page: String(n),
    per_page: String(l)
  });
  o && h.set("status", o);
  const u = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/tickets?${h}`), b = await u.json().catch(() => null);
  if (!u.ok) throw new Error(b && "error" in b ? b.error : "Tikete nije moguće učitati.");
  const p = (b == null ? void 0 : b.data) || [], f = p.map((y) => ({
    id: y.id,
    ticketNumber: y.ticket_number,
    conversationId: y.conversation_id,
    isResolved: !!y.is_resolved,
    updatedAt: y.updated_at,
    messages: (y.messages || []).map((S) => {
      var z;
      return {
        id: String(S.id),
        content: S.content,
        sender: S.role === "user" ? "user" : "ai",
        timestamp: S.created_at,
        status: "sent",
        suggestedQuestions: ((z = S.meta_json) == null ? void 0 : z.suggested_questions) || void 0
      };
    })
  })), v = b == null ? void 0 : b.meta, x = (v == null ? void 0 : v.has_more) !== void 0 ? !!v.has_more : p.length >= l;
  return {
    tickets: f,
    hasMore: x,
    total: v == null ? void 0 : v.total,
    currentPage: (v == null ? void 0 : v.current_page) ?? n
  };
}
async function Wi(t, e, a) {
  return (await vt({ widgetId: t, visitorId: e, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function Ki(t, e, a, r, o) {
  const n = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !n)
    return await new Promise((h) => setTimeout(h, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const l = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await fetch(`${l}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!s.ok) {
    const u = (await s.json().catch(() => ({}))).error || (s.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), b = new Error(u);
    throw b.status = s.status, b;
  }
  return await s.json();
}
function Rt(t, e = "bs", a = ["bs"]) {
  var u, b;
  const r = (a && a.length > 0 ? a : [e]).map((p) => p.trim().toLowerCase()), o = (e || "bs").trim().toLowerCase();
  let n = "";
  if (t === "website" ? typeof document < "u" && (n = ((u = document.documentElement) == null ? void 0 : u.lang) || ((b = document.querySelector("html")) == null ? void 0 : b.getAttribute("lang")) || "") : typeof navigator < "u" && (n = navigator.language || navigator.languages && navigator.languages[0] || ""), !n || typeof n != "string")
    return o;
  let h = n.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (h === "hr" || h === "sr") && !r.includes(h) && r.includes("bs") && (h = "bs"), r.includes(h) ? h : o;
}
const Ot = "pitaj_io_visitor_id", Yi = "chat_direkt_visitor_id", Zi = "pitaj_io_visitor_meta", qi = "chat_direkt_visitor_meta";
function fi(t) {
  return `pitaj_io_convs_${t}`;
}
function Qi(t) {
  return `chat_direkt_convs_${t}`;
}
function Ji() {
  try {
    let t = localStorage.getItem(Ot) || localStorage.getItem(Yi);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Ot, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Xi = [];
function ea(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function ta(t) {
  return t.filter((e) => !ea(e)).map((e) => {
    const a = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: a };
  });
}
function Vt(t) {
  try {
    const e = localStorage.getItem(fi(t)) || localStorage.getItem(Qi(t));
    if (e) {
      const a = JSON.parse(e);
      if (Array.isArray(a))
        return ta(a);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return Xi;
}
function ia(t, e) {
  try {
    localStorage.setItem(fi(t), JSON.stringify(e));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function Gt(t) {
  var o, n, l, s, h, u, b, p, f, v, x;
  const e = t.previewDraft, a = (/* @__PURE__ */ new Date()).toISOString(), r = (e == null ? void 0 : e.initialStep) || "idle";
  if (r === "idle") {
    const y = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", S = (o = e == null ? void 0 : e.action) != null && o.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: y,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: y,
            sender: "ai",
            timestamp: a,
            status: "sent",
            suggestedQuestions: S.length > 0 ? S : void 0
          }
        ]
      }
    ];
  }
  if (r === "form") {
    const y = (e == null ? void 0 : e.simulatedUserMessage) || ((n = e == null ? void 0 : e.action) == null ? void 0 : n.trigger_hint) || "Pokreni akciju", z = !!((l = e == null ? void 0 : e.action) != null && l.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", N = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((h = e == null ? void 0 : e.action) == null ? void 0 : h.name) || "Pregled akcije",
        preview: z,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: y,
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
            widget: N
          }
        ]
      }
    ];
  }
  if (r === "submitted") {
    const y = (e == null ? void 0 : e.simulatedUserMessage) || ((u = e == null ? void 0 : e.action) == null ? void 0 : u.trigger_hint) || "Pokreni akciju", S = ((b = e == null ? void 0 : e.form) == null ? void 0 : b.name) || ((p = e == null ? void 0 : e.action) == null ? void 0 : p.name) || "Forma", z = ((f = e == null ? void 0 : e.form) == null ? void 0 : f.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: S,
        preview: z,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: y,
            sender: "user",
            timestamp: new Date(Date.now() - 4e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-form-sub",
            content: `Forma: ${S}
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
    const y = (e == null ? void 0 : e.simulatedUserMessage) || ((v = e == null ? void 0 : e.action) == null ? void 0 : v.trigger_hint) || "Pokreni akciju", S = "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((x = e == null ? void 0 : e.action) == null ? void 0 : x.name) || "Pregled akcije",
        preview: S,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: y,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-dismiss",
            content: S,
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
function aa(t, e) {
  var pe, de, ge, ue, Ie, we, _e, ke, Me, Le, Te, $e, Ee, De, Pe, Be, Ue, He, Fe, Re;
  const a = !!(t.isPreview || t.previewDraft), [r, o] = R(t), [n, l] = R((e == null ? void 0 : e.startOpen) ?? !1), [s, h] = R(
    (e == null ? void 0 : e.initialScreen) ?? (a ? "conversation" : "new-conversation")
  ), [u, b] = R(
    () => a ? Gt(t) : Vt(t.companyId)
  ), [p, f] = R(() => {
    if (a) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const w = Vt(t.companyId);
      return w.length > 0 ? w[0].id : null;
    }
    return null;
  }), [v, x] = R(!1), [y, S] = R(null), [z, N] = R(null), [V, E] = R(
    () => {
      var w, d, g;
      return Rt(
        (w = t.content) == null ? void 0 : w.languageSource,
        ((d = t.content) == null ? void 0 : d.defaultLanguage) || "bs",
        ((g = t.content) == null ? void 0 : g.supportedLanguages) || ["bs"]
      );
    }
  );
  Y(() => {
    var d, g, m;
    const w = Rt(
      (d = r.content) == null ? void 0 : d.languageSource,
      ((g = r.content) == null ? void 0 : g.defaultLanguage) || "bs",
      ((m = r.content) == null ? void 0 : m.supportedLanguages) || ["bs"]
    );
    E(w);
  }, [
    (pe = r.content) == null ? void 0 : pe.languageSource,
    (de = r.content) == null ? void 0 : de.defaultLanguage,
    (ge = r.content) == null ? void 0 : ge.supportedLanguages
  ]);
  const c = J(Ji()), [A, I] = R(() => {
    try {
      const w = localStorage.getItem(Zi) || localStorage.getItem(qi);
      if (w) {
        const d = JSON.parse(w), g = {};
        return typeof d.name == "string" && (g.name = d.name), typeof d.email == "string" && (g.email = d.email), typeof d.phone == "string" && (g.phone = d.phone), g;
      }
    } catch (w) {
      console.warn("[Pitaj.io] Error reading visitor meta", w);
    }
    return {};
  }), _ = J(e == null ? void 0 : e.emitEvent);
  _.current = e == null ? void 0 : e.emitEvent;
  const H = J(e == null ? void 0 : e.onActionTrigger);
  H.current = e == null ? void 0 : e.onActionTrigger;
  const L = ee((w, d) => {
    const g = Number.isFinite(w) ? Math.max(1, Math.floor(w)) : 60;
    S((m) => m === null ? g : Math.max(m, g)), N(d || `Previše zahtjeva. Molimo sačekajte ${g}s.`);
  }, []), C = ee((w) => {
    if (w) {
      if (w === "WIDGET_CHAT_DISABLED") {
        o((d) => ({ ...d, chatAvailable: !1 })), N("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (w === "WIDGET_TRANSCRIBE_DISABLED") {
        o((d) => ({ ...d, transcribeAvailable: !1 })), N("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      w === "WIDGET_FORMS_DISABLED" && (o((d) => ({ ...d, formsAvailable: !1, formsEnabled: !1 })), N("Forme su trenutno privremeno nedostupne."));
    }
  }, []), T = ee((w, d = "Došlo je do greške pri obradi zahtjeva.") => {
    var m, M, P, W;
    if (w instanceof di) {
      L(w.retryAfterSeconds, w.message), (m = _.current) == null || m.call(_, "error_occurred", { code: w.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (w instanceof ui) {
      if (w.code === "COUNTRY_BLOCKED") {
        o((B) => ({ ...B, chatAvailable: !1 })), N(w.message || "Pristup nije dozvoljen u vašoj regiji."), (M = _.current) == null || M.call(_, "error_occurred", { status: w.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      C(w.code), N(w.message || d), (P = _.current) == null || P.call(_, "error_occurred", { status: w.status, code: w.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let g = w instanceof Error ? w.message : d;
    !g || g === "Failed to fetch" || g.includes("NetworkError") ? g = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : g.includes("404") ? g = "Traženi razgovor ili podaci nisu pronađeni." : (g.includes("500") || g.includes("502") || g.includes("503")) && (g = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), N(g || d), (W = _.current) == null || W.call(_, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [L, C]);
  Y(() => {
    r.isPreview || r.mockMode || r.companyId === "preview" || ia(r.companyId, u);
  }, [u, r.companyId, r.isPreview, r.mockMode]), Y(() => {
    if (r.isPreview || r.previewDraft) {
      const w = Gt(r);
      b(w), f("preview-conv-1"), h("conversation");
    }
  }, [
    r.isPreview,
    (ue = r.previewDraft) == null ? void 0 : ue.initialStep,
    (we = (Ie = r.previewDraft) == null ? void 0 : Ie.action) == null ? void 0 : we.id,
    (ke = (_e = r.previewDraft) == null ? void 0 : _e.action) == null ? void 0 : ke.name,
    (Le = (Me = r.previewDraft) == null ? void 0 : Me.action) == null ? void 0 : Le.trigger_hint,
    ($e = (Te = r.previewDraft) == null ? void 0 : Te.form) == null ? void 0 : $e.id,
    (De = (Ee = r.previewDraft) == null ? void 0 : Ee.form) == null ? void 0 : De.name,
    (Be = (Pe = r.previewDraft) == null ? void 0 : Pe.form) == null ? void 0 : Be.success_message,
    (He = (Ue = r.previewDraft) == null ? void 0 : Ue.widget) == null ? void 0 : He.id,
    (Re = (Fe = r.previewDraft) == null ? void 0 : Fe.widget) == null ? void 0 : Re.type
  ]), Y(() => {
    if (y === null || y <= 0) return;
    const w = setInterval(() => {
      S((d) => d && d > 1 ? d - 1 : null);
    }, 1e3);
    return () => clearInterval(w);
  }, [y]), Y(() => {
    if (!r.companyId || r.mockMode) return;
    let w = !0;
    return Wi(r.companyId, c.current, r.apiUrl).then((d) => {
      !w || !d || d.length === 0 || b((g) => {
        let m = !1;
        const M = g.map((P) => {
          const W = d.find((B) => String(B.id) === P.id);
          return W && W.ticketNumber && P.ticketNumber !== W.ticketNumber ? (m = !0, { ...P, ticketNumber: W.ticketNumber }) : P;
        });
        return m ? M : g;
      });
    }).catch(() => {
    }), () => {
      w = !1;
    };
  }, [r.companyId, r.apiUrl, r.mockMode]);
  const G = u.find((w) => w.id === p) || null, ae = u.reduce((w, d) => w + (d.unread || 0), 0), re = ee((w) => {
    l((d) => {
      var g;
      return d === w ? d : ((g = _.current) == null || g.call(_, w ? "widget_opened" : "widget_closed"), w);
    });
  }, []), se = ee((w) => {
    h((d) => {
      var g;
      return d === w ? d : ((g = _.current) == null || g.call(_, "screen_changed", { screen: w }), w);
    });
  }, []), X = ee((w) => {
    var d;
    f(w.id), b((g) => g.some((M) => M.id === w.id) ? g.map((M) => M.id === w.id ? { ...M, ...w, unread: 0, status: w.status || "active" } : M) : [{ ...w, unread: 0, status: w.status || "active" }, ...g]), h("conversation"), (d = _.current) == null || d.call(_, "conversation_selected", { conversationId: w.id });
  }, []), q = ee(() => {
    var w;
    b(
      (d) => d.map((g) => g.id === p ? { ...g, status: "ended" } : g)
    ), f(null), h("new-conversation"), (w = _.current) == null || w.call(_, "conversation_ended", { conversationId: p });
  }, [p]), k = ee((w) => {
    b((d) => d.filter((g) => g.id !== w)), f((d) => d === w ? null : d), p === w && h("new-conversation");
  }, [p]), U = ee((w) => {
    var P;
    if (r.chatAvailable === !1) {
      N("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (y !== null) {
      N(`Previše zahtjeva. Molimo sačekajte ${y}s.`);
      return;
    }
    const d = "conv-" + Date.now(), g = (/* @__PURE__ */ new Date()).toISOString(), m = w ? w.length > 40 ? w.slice(0, 40) + "…" : w : "Novo ćaskanje", M = {
      id: d,
      title: m,
      preview: w || "Započeto novo ćaskanje",
      timestamp: g,
      unread: 0,
      messages: w ? [
        {
          id: "msg-" + Date.now(),
          content: w,
          sender: "user",
          timestamp: g,
          status: "sent"
        }
      ] : []
    };
    b((W) => [M, ...W]), f(d), h("conversation"), (P = _.current) == null || P.call(_, "conversation_started", { conversationId: d, initialMessage: w }), w && te(d, w, [M.messages[0]], !0);
  }, [r.apiUrl, r.chatAvailable, r.companyId, r.mockMode, y, A]), te = async (w, d, g, m = !1) => {
    var W;
    x(!0), N(null);
    const M = "ai-msg-" + Date.now(), P = {
      id: M,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    b(
      (B) => B.map((Z) => Z.id !== w ? Z : {
        ...Z,
        preview: d,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...Z.messages.filter(($) => $.id !== M), P]
      })
    ), (W = _.current) == null || W.call(_, "stream_started", { conversationId: w });
    try {
      await Gi({
        companyId: r.companyId,
        conversationId: w,
        visitorId: c.current,
        visitorLanguage: V,
        message: d,
        forceNewConversation: m || w.startsWith("conv-"),
        apiUrl: r.apiUrl,
        mockMode: r.mockMode || r.isPreview,
        visitorName: A.name,
        visitorEmail: A.email,
        visitorPhone: A.phone,
        actions: r.actions,
        previewDraft: r.previewDraft,
        callbacks: {
          onConversationId: (B) => {
            const Z = w, $ = String(B);
            w = $, f($), b(
              (le) => le.map((F) => F.id === Z || F.messages.some((be) => be.id === M) ? { ...F, id: $ } : F)
            );
          },
          onTicketNumber: (B) => {
            const Z = B && String(B).trim() !== "" && String(B).trim() !== "undefined" && String(B).trim() !== "null" ? String(B).trim() : null;
            Z && b(
              ($) => $.map((le) => le.id === w || le.messages.some((be) => be.id === M) ? { ...le, ticketNumber: Z } : le)
            );
          },
          onActionTrigger: (B) => {
            var $;
            const Z = B.widget || B.triggered_widget || (B.widget_id && r.widgets ? r.widgets.find((le) => le.id === B.widget_id) : null) || null;
            Z && b(
              (le) => le.map((F) => F.id === w || F.messages.some((fe) => fe.id === M) ? {
                ...F,
                messages: F.messages.map(
                  (fe) => fe.id === M ? { ...fe, widget: Z } : fe
                )
              } : F)
            ), ($ = H.current) == null || $.call(H, B);
          },
          onChunk: (B) => {
            b(
              (Z) => Z.map(($) => $.id === w || $.messages.some((F) => F.id === M) ? {
                ...$,
                messages: $.messages.map(
                  (F) => F.id === M ? { ...F, content: F.content + B } : F
                )
              } : $)
            );
          },
          onSources: (B) => {
            b(
              (Z) => Z.map(($) => $.id === w || $.messages.some((F) => F.id === M) ? {
                ...$,
                messages: $.messages.map(
                  (F) => F.id === M ? { ...F, sources: B } : F
                )
              } : $)
            );
          },
          onSuggestedQuestions: (B) => {
            b(
              (Z) => Z.map(($) => $.id === w || $.messages.some((F) => F.id === M) ? {
                ...$,
                messages: $.messages.map(
                  (F) => F.id === M ? { ...F, suggestedQuestions: B } : F
                )
              } : $)
            );
          },
          onDone: () => {
            var B;
            b(
              (Z) => Z.map(($) => {
                var Oe, Ve;
                if (!($.id === w || $.messages.some((ve) => ve.id === M))) return $;
                const F = $.messages.find((ve) => ve.id === M), be = (Oe = F == null ? void 0 : F.widget) == null ? void 0 : Oe.name, fe = (Ve = F == null ? void 0 : F.content) == null ? void 0 : Ve.trim(), Xe = fe ? fe.slice(0, 70) : be ? `[${be}]` : $.preview;
                return {
                  ...$,
                  preview: Xe,
                  messages: $.messages.map(
                    (ve) => ve.id === M ? { ...ve, isStreaming: !1 } : ve
                  )
                };
              })
            ), x(!1), (B = _.current) == null || B.call(_, "stream_completed", { conversationId: w });
          },
          onError: (B) => {
            console.error("[Pitaj.io] Stream error:", B), N(B.message || "Došlo je do greške u komunikaciji."), x(!1);
          }
        }
      });
    } catch (B) {
      x(!1), T(B, "Greška pri slanju poruke.");
    }
  }, j = ee((w) => {
    var M;
    const d = w.trim();
    if (!d || v || r.chatAvailable === !1 || y !== null) return;
    if (!p) {
      U(d);
      return;
    }
    const m = {
      id: "usr-msg-" + Date.now(),
      content: d,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    b(
      (P) => P.map((W) => W.id !== p ? W : {
        ...W,
        preview: d,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...W.messages, m]
      })
    ), (M = _.current) == null || M.call(_, "message_sent", { conversationId: p, content: d }), te(p, d, G ? G.messages : []);
  }, [p, v, U, G, r.chatAvailable, r.companyId, r.apiUrl, r.mockMode, y]), O = ee(
    async (w, d, g) => {
      var m;
      if (!r.mockMode)
        try {
          await Ki(
            r.companyId,
            w,
            d,
            r.apiUrl,
            r.mockMode
          );
        } catch (M) {
          console.error("[Pitaj.io] Failed to submit rating:", M);
          const P = (M == null ? void 0 : M.status) === 404 ? "Razgovor ili tiket više nije dostupan." : M != null && M.message && !M.message.includes("failed") && !M.message.includes("404") ? M.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(P);
        }
      b(
        (M) => M.map(
          (P) => P.id === w ? { ...P, satisfaction: d, ratingScore: g ?? P.ratingScore } : P
        )
      ), (m = _.current) == null || m.call(_, "rating_submitted", {
        conversationId: w,
        satisfaction: d,
        score: g
      });
    },
    [r.companyId, r.apiUrl, r.mockMode]
  ), K = ee(
    (w, d, g = "user") => {
      const m = d.trim();
      if (!m) return;
      const M = (/* @__PURE__ */ new Date()).toISOString(), P = `conv-${Date.now()}`, W = typeof w == "string" && w.trim().length > 0 ? w : P, B = {
        id: `local-${g}-msg-${Date.now()}`,
        content: m,
        sender: g,
        timestamp: M,
        status: "sent"
      };
      b(
        (Z) => Z.some(($) => $.id === W) ? Z.map(($) => $.id !== W ? $ : {
          ...$,
          preview: m.length > 70 ? `${m.slice(0, 70)}…` : m,
          timestamp: M,
          messages: [...$.messages, B]
        }) : [
          {
            id: W,
            title: "Forma",
            preview: m.length > 70 ? `${m.slice(0, 70)}…` : m,
            timestamp: M,
            unread: 0,
            messages: [B],
            status: "active"
          },
          ...Z
        ]
      ), f(W), h("conversation");
    },
    []
  ), ne = (w) => {
    var d;
    return !!((d = w.messages) != null && d.some((g) => g.sender === "ai"));
  };
  return {
    config: r,
    setConfig: o,
    isOpen: n,
    setIsOpen: re,
    screen: s,
    setScreen: se,
    conversations: u,
    activeConversation: G,
    activeConversationId: p,
    visitorContact: A,
    visitorId: c.current,
    activeConversationHasReply: G ? ne(G) : !1,
    totalUnread: ae,
    isStreaming: v,
    rateLimitTimer: y,
    errorBanner: z,
    setErrorBanner: N,
    activeLanguage: V,
    setActiveLanguage: E,
    selectConversation: X,
    startNewConversation: U,
    endConversation: q,
    deleteConversation: k,
    sendUserMessage: j,
    submitSatisfaction: O,
    appendConversationMessage: K,
    handleApiError: T
  };
}
let mt = null, gi = null;
function Wt(t, e) {
  e === null && t !== null && mt !== null && mt !== t || (mt = e ? t : null, gi = e);
}
function ye() {
  return gi;
}
function Nt(t, e) {
  let a = null;
  const r = () => a || (a = t().then((o) => {
    const n = e ? e(o) : o.default;
    if (!n)
      throw new Error("Lazy component not found");
    return n;
  }));
  return function(n) {
    const [l, s] = R(null);
    return Y(() => {
      let h = !0;
      return r().then((u) => {
        h && s(() => u);
      }).catch((u) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", u);
      }), () => {
        h = !1;
      };
    }, []), l ? /* @__PURE__ */ i(l, { ...n }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function ra({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ i("path", { d: "M5 3v4" }),
    /* @__PURE__ */ i("path", { d: "M19 17v4" }),
    /* @__PURE__ */ i("path", { d: "M3 5h4" }),
    /* @__PURE__ */ i("path", { d: "M17 19h4" })
  ] });
}
function bi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ i("path", { d: "M12 19V5" })
  ] });
}
function na({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ i("path", { d: "M19 12H5" })
  ] });
}
function je({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ i("path", { d: "m6 6 12 12" })
  ] });
}
function oa({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function nr({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function st({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function sa({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function pa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function vi({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function ca({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function la({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function da({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function ua({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function ma({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function xi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ i("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function ha({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function ji({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ i("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ i("path", { d: "M10 9H8" }),
    /* @__PURE__ */ i("path", { d: "M16 13H8" }),
    /* @__PURE__ */ i("path", { d: "M16 17H8" })
  ] });
}
function fa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M7 10v12" }),
    /* @__PURE__ */ i("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function ga({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M17 14V2" }),
    /* @__PURE__ */ i("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function wi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function or({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function sr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function pr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function cr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function lr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function dr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) });
}
function ba({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function ur({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function mr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function hr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function fr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function gr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function br({ size: t = 14, className: e = "" }) {
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
function vr({ size: t = 14, className: e = "" }) {
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
function xr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function jr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function wr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function yr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function _r({ size: t = 24, className: e = "" }) {
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
function kr({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Mr({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Nr({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function Sr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function dt({ size: t = 13, className: e = "" }) {
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
function va({ size: t = 16, className: e = "" }) {
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
const We = {
  bs: {
    send: "Pošalji",
    sendMessage: "Pošalji poruku",
    sendAudio: "Pošalji snimak",
    placeholder: "Pitajte bilo šta...",
    inputPlaceholder: "Upišite svoje pitanje...",
    sending: "Slanje...",
    poweredBy: "Pokreće",
    close: "Zatvori",
    back: "Nazad",
    rateExperience: "Kako biste ocijenili vaše iskustvo?",
    submitRating: "Pošalji ocjenu",
    newConversation: "Nova konverzacija",
    endConversation: "Završi konverzaciju",
    deleteConversation: "Obriši konverzaciju",
    viewHistory: "Pogledaj prethodne",
    viewTickets: "Pogledaj tikete",
    menu: "Meni",
    cancel: "Otkaži",
    transcribing: "Transkribujem glas...",
    dictation: "Diktiranje",
    copyAnswer: "Kopiraj odgovor",
    copied: "Kopirano",
    helpful: "Korisno",
    notHelpful: "Nije korisno",
    sources: "Izvori i dokumentacija:",
    today: "Danas",
    ticketNumber: "Broj tiketa:",
    thankYouFeedback: "Hvala na ocjeni!",
    maybeLater: "Možda kasnije"
  },
  en: {
    send: "Send",
    sendMessage: "Send message",
    sendAudio: "Send audio",
    placeholder: "Ask anything...",
    inputPlaceholder: "Type your question...",
    sending: "Sending...",
    poweredBy: "Powered by",
    close: "Close",
    back: "Back",
    rateExperience: "How would you rate your experience?",
    submitRating: "Submit rating",
    newConversation: "New conversation",
    endConversation: "End conversation",
    deleteConversation: "Delete conversation",
    viewHistory: "View history",
    viewTickets: "View tickets",
    menu: "Menu",
    cancel: "Cancel",
    transcribing: "Transcribing voice...",
    dictation: "Dictation",
    copyAnswer: "Copy answer",
    copied: "Copied",
    helpful: "Helpful",
    notHelpful: "Not helpful",
    sources: "Sources and documentation:",
    today: "Today",
    ticketNumber: "Ticket number:",
    thankYouFeedback: "Thank you for your rating!",
    maybeLater: "Maybe later"
  },
  de: {
    send: "Senden",
    sendMessage: "Nachricht senden",
    sendAudio: "Sprachaufnahme senden",
    placeholder: "Fragen Sie etwas...",
    inputPlaceholder: "Geben Sie Ihre Frage ein...",
    sending: "Wird gesendet...",
    poweredBy: "Unterstützt von",
    close: "Schließen",
    back: "Zurück",
    rateExperience: "Wie würden Sie Ihre Erfahrung bewerten?",
    submitRating: "Bewertung absenden",
    newConversation: "Neue Unterhaltung",
    endConversation: "Unterhaltung beenden",
    deleteConversation: "Unterhaltung löschen",
    viewHistory: "Verlauf anzeigen",
    viewTickets: "Tickets anzeigen",
    menu: "Menü",
    cancel: "Abbrechen",
    transcribing: "Sprache wird transkribiert...",
    dictation: "Diktat",
    copyAnswer: "Antwort kopieren",
    copied: "Kopiert",
    helpful: "Hilfreich",
    notHelpful: "Nicht hilfreich",
    sources: "Quellen und Dokumentation:",
    today: "Heute",
    ticketNumber: "Ticket-Nummer:",
    thankYouFeedback: "Vielen Dank für Ihre Bewertung!",
    maybeLater: "Vielleicht später"
  },
  fr: {
    send: "Envoyer",
    sendMessage: "Envoyer le message",
    sendAudio: "Envoyer l'enregistrement",
    placeholder: "Posez votre question...",
    inputPlaceholder: "Écrivez votre question...",
    sending: "Envoi en cours...",
    poweredBy: "Propulsé par",
    close: "Fermer",
    back: "Retour",
    rateExperience: "Comment évaluez-vous votre expérience ?",
    submitRating: "Envoyer l'évaluation",
    newConversation: "Nouvelle conversation",
    endConversation: "Terminer la conversation",
    deleteConversation: "Supprimer la conversation",
    viewHistory: "Voir l'historique",
    viewTickets: "Voir les tickets",
    menu: "Menu",
    cancel: "Annuler",
    transcribing: "Transcription en cours...",
    dictation: "Dictée vocale",
    copyAnswer: "Copier la réponse",
    copied: "Copié",
    helpful: "Utile",
    notHelpful: "Inutile",
    sources: "Sources et documentation :",
    today: "Aujourd'hui",
    ticketNumber: "Numéro de ticket :",
    thankYouFeedback: "Merci pour votre évaluation !",
    maybeLater: "Peut-être plus tard"
  },
  it: {
    send: "Invia",
    sendMessage: "Invia messaggio",
    sendAudio: "Invia registrazione",
    placeholder: "Chiedi qualsiasi cosa...",
    inputPlaceholder: "Scrivi la tua domanda...",
    sending: "Invio in corso...",
    poweredBy: "Offerto da",
    close: "Chiudi",
    back: "Indietro",
    rateExperience: "Come valuteresti la tua esperienza?",
    submitRating: "Invia valutazione",
    newConversation: "Nuova conversazione",
    endConversation: "Termina conversazione",
    deleteConversation: "Elimina conversazione",
    viewHistory: "Cronologia",
    viewTickets: "Visualizza ticket",
    menu: "Menu",
    cancel: "Annulla",
    transcribing: "Trascrizione vocale in corso...",
    dictation: "Dettatura",
    copyAnswer: "Copia risposta",
    copied: "Copiato",
    helpful: "Utile",
    notHelpful: "Non utile",
    sources: "Fonti e documentazione:",
    today: "Oggi",
    ticketNumber: "Numero di ticket:",
    thankYouFeedback: "Grazie per la tua valutazione!",
    maybeLater: "Forse più tardi"
  },
  es: {
    send: "Enviar",
    sendMessage: "Enviar mensaje",
    sendAudio: "Enviar audio",
    placeholder: "Pregunta lo que sea...",
    inputPlaceholder: "Escribe tu pregunta...",
    sending: "Enviando...",
    poweredBy: "Desarrollado por",
    close: "Cerrar",
    back: "Atrás",
    rateExperience: "¿Cómo calificarías tu experiencia?",
    submitRating: "Enviar calificación",
    newConversation: "Nueva conversación",
    endConversation: "Finalizar conversación",
    deleteConversation: "Eliminar conversación",
    viewHistory: "Ver historial",
    viewTickets: "Ver tickets",
    menu: "Menú",
    cancel: "Cancelar",
    transcribing: "Transcribiendo voz...",
    dictation: "Dictado",
    copyAnswer: "Copiar respuesta",
    copied: "Copiado",
    helpful: "Útil",
    notHelpful: "No útil",
    sources: "Fuentes y documentación:",
    today: "Hoy",
    ticketNumber: "Número de ticket:",
    thankYouFeedback: "¡Gracias por tu calificación!",
    maybeLater: "Quizás más tarde"
  },
  tr: {
    send: "Gönder",
    sendMessage: "Mesaj gönder",
    sendAudio: "Ses kaydını gönder",
    placeholder: "Herhangi bir şey sorun...",
    inputPlaceholder: "Sorunuzu yazın...",
    sending: "Gönderiliyor...",
    poweredBy: "Tarafından desteklenmektedir",
    close: "Kapat",
    back: "Geri",
    rateExperience: "Deneyiminizi nasıl değerlendirirsiniz?",
    submitRating: "Değerlendirmeyi gönder",
    newConversation: "Yeni sohbet",
    endConversation: "Sohbeti sonlandır",
    deleteConversation: "Sohbeti sil",
    viewHistory: "Geçmişi görüntüle",
    viewTickets: "Talepleri görüntüle",
    menu: "Menü",
    cancel: "İptal",
    transcribing: "Ses metne dönüştürülüyor...",
    dictation: "Dikte",
    copyAnswer: "Cevabı kopyala",
    copied: "Kopyalandı",
    helpful: "Yararlı",
    notHelpful: "Yararlı değil",
    sources: "Kaynaklar ve belgeler:",
    today: "Bugün",
    ticketNumber: "Talep numarası:",
    thankYouFeedback: "Değerlendirmeniz için teşekkürler!",
    maybeLater: "Belki daha sonra"
  },
  ar: {
    send: "إرسال",
    sendMessage: "إرسال الرسالة",
    sendAudio: "إرسال التسجيل الصوتي",
    placeholder: "اسأل أي شيء...",
    inputPlaceholder: "اكتب سؤالك...",
    sending: "جارٍ الإرسال...",
    poweredBy: "مشغل بواسطة",
    close: "إغلاق",
    back: "رجوع",
    rateExperience: "كيف تقيّم تجربتك؟",
    submitRating: "إرسال التقييم",
    newConversation: "محادثة جديدة",
    endConversation: "إنهاء المحادثة",
    deleteConversation: "حذف المحادثة",
    viewHistory: "عرض السجل",
    viewTickets: "عرض التذاكر",
    menu: "القائمة",
    cancel: "إلغاء",
    transcribing: "جارٍ تحويل الصوت...",
    dictation: "إملاء صوتي",
    copyAnswer: "نسخ الإجابة",
    copied: "تم النسخ",
    helpful: "مفيد",
    notHelpful: "غير مفيد",
    sources: "المصادر والمراجع:",
    today: "اليوم",
    ticketNumber: "رقم التذكرة:",
    thankYouFeedback: "شكراً لتقييمك!",
    maybeLater: "ربما لاحقاً"
  },
  sl: {
    send: "Pošlji",
    sendMessage: "Pošlji sporočilo",
    sendAudio: "Pošlji posnetek",
    placeholder: "Vprašajte karkoli...",
    inputPlaceholder: "Vpišite svoje vprašanje...",
    sending: "Pošiljanje...",
    poweredBy: "Poganja",
    close: "Zapri",
    back: "Nazaj",
    rateExperience: "Kako bi ocenili svojo izkušnjo?",
    submitRating: "Oddaj oceno",
    newConversation: "Nov pogovor",
    endConversation: "Končaj pogovor",
    deleteConversation: "Izbriši pogovor",
    viewHistory: "Zgodovina pogovorov",
    viewTickets: "Prikaži zahtevke",
    menu: "Meni",
    cancel: "Prekliči",
    transcribing: "Pretvarjanje govora...",
    dictation: "Narekovanje",
    copyAnswer: "Kopiraj odgovor",
    copied: "Kopirano",
    helpful: "Uporabno",
    notHelpful: "Ni uporabno",
    sources: "Viri in dokumentacija:",
    today: "Danes",
    ticketNumber: "Številka zahtevka:",
    thankYouFeedback: "Hvala za vašo oceno!",
    maybeLater: "Morda kasneje"
  },
  nl: {
    send: "Verzenden",
    sendMessage: "Bericht verzenden",
    sendAudio: "Audio-opname verzenden",
    placeholder: "Vraag maar raak...",
    inputPlaceholder: "Typ je vraag...",
    sending: "Verzenden...",
    poweredBy: "Mogelijk gemaakt door",
    close: "Sluiten",
    back: "Terug",
    rateExperience: "Hoe beoordeelt u uw ervaring?",
    submitRating: "Beoordeling verzenden",
    newConversation: "Nieuw gesprek",
    endConversation: "Gesprek beëindigen",
    deleteConversation: "Gesprek verwijderen",
    viewHistory: "Geschiedenis bekijken",
    viewTickets: "Tickets bekijken",
    menu: "Menu",
    cancel: "Annuleren",
    transcribing: "Spraak transcriberen...",
    dictation: "Dicteren",
    copyAnswer: "Antwoord kopiëren",
    copied: "Gekopieerd",
    helpful: "Nuttig",
    notHelpful: "Niet nuttig",
    sources: "Bronnen en documentatie:",
    today: "Vandaag",
    ticketNumber: "Ticketnummer:",
    thankYouFeedback: "Bedankt voor uw beoordeling!",
    maybeLater: "Misschien later"
  }
};
function D(t, e = "bs") {
  var n, l;
  const a = (e || "bs").toLowerCase().split(/[-_]/)[0], o = We[a === "hr" || a === "sr" ? "bs" : a] || We.bs || We.en;
  return o && typeof o[t] == "string" ? o[t] : ((n = We.bs) == null ? void 0 : n[t]) || ((l = We.en) == null ? void 0 : l[t]) || t;
}
function xa({
  screen: t,
  activeConversation: e,
  config: a,
  language: r = "bs",
  onBack: o,
  onClose: n,
  onNewConversation: l,
  onEndConversation: s,
  onDeleteConversation: h,
  onViewHistory: u,
  onViewTickets: b
}) {
  var E;
  const [p, f] = R(!1), v = J(null), x = t === "conversation" && e, z = x || t === "history" || t === "tickets", N = a.title || a.name || "Pitaj.io Asistent";
  Y(() => {
    var I;
    const c = (_) => {
      var L, C;
      const H = ((C = (L = _.composedPath) == null ? void 0 : L.call(_)) == null ? void 0 : C[0]) || _.target;
      v.current && H && !v.current.contains(H) && f(!1);
    };
    document.addEventListener("mousedown", c);
    const A = (I = v.current) == null ? void 0 : I.getRootNode();
    return A instanceof ShadowRoot && A.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c), A instanceof ShadowRoot && A.removeEventListener("mousedown", c);
    };
  }, []), Y(() => {
    f(!1);
  }, [t]);
  const V = (c) => {
    f(!1), c == null || c();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      z && /* @__PURE__ */ i(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": D("back", r),
          title: D("back", r),
          children: /* @__PURE__ */ i(na, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((E = a.content) == null ? void 0 : E.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(dt, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: N }),
        x && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: v, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => f((c) => !c),
            className: `pitaj-icon-btn ${p ? "is-active" : ""}`,
            "aria-label": D("menu", r),
            "aria-expanded": p,
            title: D("menu", r),
            children: /* @__PURE__ */ i(sa, { size: 18 })
          }
        ),
        p && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => V(l),
              children: [
                /* @__PURE__ */ i(pa, { size: 15, className: "pitaj-menu-item-icon" }),
                D("newConversation", r)
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !x,
              onClick: () => V(s),
              children: [
                /* @__PURE__ */ i(la, { size: 15, className: "pitaj-menu-item-icon" }),
                D("endConversation", r)
              ]
            }
          ),
          h && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !x,
              onClick: () => V(h),
              children: [
                /* @__PURE__ */ i(ba, { size: 15, className: "pitaj-menu-item-icon" }),
                D("deleteConversation", r)
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => V(u),
              children: [
                /* @__PURE__ */ i(da, { size: 15, className: "pitaj-menu-item-icon" }),
                D("viewHistory", r)
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => V(b), children: [
            /* @__PURE__ */ i(ma, { size: 15, className: "pitaj-menu-item-icon" }),
            D("viewTickets", r)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i(
        "button",
        {
          onClick: n,
          className: "pitaj-icon-btn",
          "aria-label": D("close", r),
          title: D("close", r),
          children: /* @__PURE__ */ i(je, { size: 18 })
        }
      )
    ] })
  ] });
}
function ja({ content: t }) {
  if (!t)
    return /* @__PURE__ */ i("span", {});
  const e = t.split(`
`), a = [];
  let r = !1, o = [];
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
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
      const h = l.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: ht(h) }) }, `ul-${n}`)
      );
      continue;
    }
    const s = l.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ i("li", { children: ht(s[2]) }) }, `ol-${n}`)
      );
      continue;
    }
    if (!l.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${n}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: ht(l) }, `p-${n}`));
  }
  return r && o.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function ht(t) {
  const e = [];
  let a = 0;
  const r = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = r.exec(t)) !== null; ) {
    o.index > a && e.push(...Kt(t.slice(a, o.index)));
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
      const l = n.slice(1, n.indexOf("](")), s = n.slice(n.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: l }, `a-${o.index}`)
      );
    }
    a = o.index + n.length;
  }
  return a < t.length && e.push(...Kt(t.slice(a))), e;
}
const wa = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, ya = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, _a = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), ka = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Kt(t) {
  const e = [];
  let a;
  for (; (a = wa.exec(t)) !== null; ) {
    const n = a[0].replace(/[.,;:!?]+$/, "");
    n && e.push({
      start: a.index,
      end: a.index + n.length,
      href: n.startsWith("www.") ? `https://${n}` : n,
      external: !0
    });
  }
  for (; (a = ya.exec(t)) !== null; )
    e.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = _a.exec(t)) !== null; ) {
    const n = a[0];
    ka.test(n) || e.push({
      start: a.index,
      end: a.index + n.length,
      href: `tel:${n.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((n, l) => n.start - l.start);
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
function yi({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: r,
  containerClassName: o,
  revealDelayMs: n = 0,
  staggerMs: l = 140
}) {
  const s = Ae(() => Array.isArray(t) && t.length > 0 ? t.map((v) => ({
    text: v.text.trim(),
    children: (v.children ?? []).map((x) => x.trim()).filter(Boolean)
  })).filter((v) => v.text !== "") : (e ?? []).map((v) => v.trim()).filter(Boolean).map((v) => ({ text: v, children: [] })), [e, t]), [h, u] = R(null), [b, p] = R(s.length);
  if (Y(() => {
    u(null);
  }, [s]), Y(() => {
    if (h) {
      p(s.length);
      return;
    }
    if (n <= 0) {
      p(s.length);
      return;
    }
    p(0);
    const v = window.setTimeout(() => {
      p(1);
      const x = window.setInterval(() => {
        p((y) => y >= s.length ? (window.clearInterval(x), y) : y + 1);
      }, Math.max(60, l));
    }, n);
    return () => {
      window.clearTimeout(v);
    };
  }, [h, s.length, n, l]), s.length === 0)
    return null;
  const f = s.find((v) => v.text === h && v.children.length > 0) ?? null;
  return f ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => u(null),
        className: r,
        children: "Nazad"
      }
    ),
    f.children.map((v, x) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(v),
        className: r,
        children: v
      },
      `${f.text}-${x}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: s.slice(0, b).map((v, x) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => v.children.length > 0 ? u(v.text) : a(v.text),
      className: `${r} pitaj-suggestion-enter`,
      children: v.text
    },
    `${v.text}-${x}`
  )) });
}
const Ma = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Na = [".txt", ".md", ".csv", ".json", ".xml"];
function Sa(t) {
  if (Ma.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Na.some((a) => e.endsWith(a));
}
async function _i(t) {
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
      const n = Sa(a) ? (await a.text()).slice(0, 4e3) : null;
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
function ki(t) {
  return t.length === 0 ? "" : `

${t.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function za(t) {
  const { widgetId: e, audio: a, apiUrl: r } = t, o = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = new FormData();
  n.append("audio", a, "dictation.webm");
  const l = await fetch(`${o}/api/widget/${e}/transcribe`, {
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
      for (const f of Object.values(u.errors))
        if (Array.isArray(f)) {
          for (const v of f)
            if (typeof v == "string" && v.trim() !== "")
              return v;
        }
      return null;
    })();
    mi(
      l.status,
      u,
      typeof p == "string" && p || `Transkripcija nije uspjela (${l.status})`,
      l.headers.get("Retry-After")
    );
  }
  const s = await l.json(), h = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!h)
    throw new Error("Transkripcija nije vratila tekst.");
  return h;
}
function Mi({ widgetId: t, apiUrl: e, onTranscript: a, onError: r }) {
  const n = J(null), l = J(null), s = J([]), h = J(!0), u = J(null), b = J(null), p = J(null), f = J(null), v = J(Array.from({ length: 42 }, () => 0.06)), [x, y] = R(!1), [S, z] = R(!1), [N, V] = R(
    () => Array.from({ length: 42 }, () => 0.06)
  ), E = Ae(() => {
    var T;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((T = navigator.mediaDevices) != null && T.getUserMedia);
  }, [t]), c = ee(() => {
    l.current && (l.current.getTracks().forEach((T) => T.stop()), l.current = null);
  }, []), A = ee(() => {
    var T;
    u.current !== null && (window.cancelAnimationFrame(u.current), u.current = null), (T = f.current) == null || T.disconnect(), f.current = null, p.current = null, b.current && (b.current.close(), b.current = null);
  }, []), I = ee(() => {
    const T = Array.from({ length: 42 }, () => 0.06);
    v.current = T, V(T);
  }, []), _ = ee((T) => {
    const G = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!G)
      return;
    const ae = new G(), re = ae.createAnalyser();
    re.fftSize = 2048, re.smoothingTimeConstant = 0.78;
    const se = ae.createMediaStreamSource(T);
    se.connect(re), b.current = ae, p.current = re, f.current = se;
    const X = new Uint8Array(re.fftSize), q = () => {
      const k = p.current;
      if (!k) return;
      k.getByteTimeDomainData(X);
      let U = 0;
      for (let K = 0; K < X.length; K += 1) {
        const ne = (X[K] - 128) / 128;
        U += ne * ne;
      }
      const te = Math.sqrt(U / X.length), j = Math.max(0.04, Math.min(1, te * 5.2)), O = v.current.slice(1);
      O.push(j), v.current = O, V(O), u.current = window.requestAnimationFrame(q);
    };
    u.current = window.requestAnimationFrame(q);
  }, []), H = ee(async () => {
    if (!(!E || S || n.current || x))
      try {
        const G = await navigator.mediaDevices.getUserMedia({ audio: !0 }), ae = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], se = typeof MediaRecorder.isTypeSupported == "function" ? ae.find((q) => MediaRecorder.isTypeSupported(q)) : void 0, X = se ? new MediaRecorder(G, { mimeType: se }) : new MediaRecorder(G);
        s.current = [], h.current = !0, l.current = G, n.current = X, I(), _(G), X.ondataavailable = (q) => {
          q.data.size > 0 && s.current.push(q.data);
        }, X.onstop = async () => {
          y(!1);
          const q = new Blob(s.current, { type: X.mimeType || "audio/webm" });
          if (s.current = [], n.current = null, c(), A(), q.size === 0) {
            I();
            return;
          }
          if (!h.current) {
            I();
            return;
          }
          z(!0);
          try {
            const k = await za({
              widgetId: t,
              apiUrl: e,
              audio: q
            });
            a(k);
          } catch (k) {
            console.error("[Pitaj.io] Dictation transcription failed", k), r == null || r(k);
          } finally {
            z(!1), I();
          }
        }, X.onerror = () => {
          y(!1), n.current = null, c(), A(), I();
        }, X.start(), y(!0);
      } catch (G) {
        y(!1), c(), A(), I(), console.error("[Pitaj.io] Dictation microphone access failed", G);
      }
  }, [e, x, S, E, r, a, I, _, c, A, t]), L = ee(() => {
    const T = n.current;
    !T || !x || S || (h.current = !0, T.stop(), y(!1));
  }, [x, S]), C = ee(() => {
    const T = n.current;
    !T || !x || (h.current = !1, T.stop(), y(!1));
  }, [x]);
  return Y(() => () => {
    const T = n.current;
    T && T.state !== "inactive" && T.stop(), c(), A();
  }, [c, A]), {
    isSupported: E,
    isListening: x,
    isProcessing: S,
    waveformLevels: N,
    start: H,
    stopAndTranscribe: L,
    cancel: C
  };
}
const Aa = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Yt() {
  const [t, e] = R(0);
  return Y(() => {
    const a = setTimeout(() => e(1), 1600), r = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(r);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(va, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: Aa[t] }, t)
  ] });
}
const Ia = Nt(
  () => import("./InlineWidgetRenderer-BrOP2XtA.js"),
  (t) => t.InlineWidgetRenderer
);
function Ca(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function La(t) {
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
    const l = n.slice(2), s = l.indexOf(":");
    if (s < 1) return null;
    const h = l.slice(0, s).trim(), u = l.slice(s + 1).trim();
    return !h || !u ? null : { label: h, value: u };
  }).filter((n) => !!n);
  return o.length < 1 ? null : { title: a, entries: o };
}
function Ta({
  conversation: t,
  config: e,
  language: a = "bs",
  isStreaming: r,
  rateLimitCountdown: o,
  errorBanner: n,
  onSendMessage: l,
  onApiError: s,
  onSubmitSatisfaction: h
}) {
  var k, U, te;
  const [u, b] = R(""), [p, f] = R(!1), [v, x] = R(null), [y, S] = R([]), z = J(null), N = J(null), V = J(null), E = e.content || {}, c = e.chatAvailable === !1, A = e.transcribeAvailable === !1, I = r || o !== null || c, _ = Mi({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: ee((j) => {
      b((O) => O ? `${O} ${j}` : j);
    }, []),
    onError: ee((j) => {
      s == null || s(j, "Greška pri transkripciji.");
    }, [s])
  });
  Y(() => {
    const j = z.current;
    j && (j.scrollTop = j.scrollHeight);
  }, [t.messages, r]), Y(() => {
    const j = N.current;
    j && (j.style.height = "auto", j.style.height = `${Math.min(j.scrollHeight, 96)}px`);
  }, [u]), Y(() => {
    f(!1);
  }, [E.dismissibleNotice]);
  const H = (j) => {
    S((O) => {
      const K = O.find((ne) => ne.id === j);
      if (K != null && K.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(K.previewUrl);
        } catch {
        }
      return O.filter((ne) => ne.id !== j);
    });
  }, L = (j) => {
    const O = (j ?? u).trim();
    if (!O && y.length === 0 || I) return;
    const K = `${O}${ki(y)}`.trim();
    l(K), y.forEach((ne) => {
      if (ne.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ne.previewUrl);
        } catch {
        }
    }), S([]), j || (b(""), N.current && (N.current.style.height = "auto"));
  }, C = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), L());
  }, T = E.messagePlaceholder || e.placeholder || D("placeholder", a), G = ((k = E.dismissibleNotice) == null ? void 0 : k.trim()) || "", ae = ((U = E.footerText) == null ? void 0 : U.trim()) || "", re = E.showSuggestedMessages === !1 || E.keepShowingSuggestedMessages !== !0 ? [] : E.suggestedMessageRows || [], se = ((te = [...t.messages].reverse().find((j) => j.sender === "ai")) == null ? void 0 : te.id) ?? null, X = _.isListening, q = async (j, O) => {
    navigator.clipboard && (await navigator.clipboard.writeText(O), x(j), window.setTimeout(() => {
      x((K) => K === j ? null : K);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: z, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-conversation-ticket-label", children: D("ticketNumber", a) }),
        /* @__PURE__ */ i("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ i("span", { className: "pitaj-date-label", children: D("today", a) }),
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" })
      ] }),
      t.messages.map((j) => {
        const O = j.sender === "user", K = O ? La(j.content) : null, ne = !O && j.isStreaming && !j.content && !j.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${O ? "user" : "ai"}${j.widget ? " has-widget" : ""}${ne ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              O ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${K ? "is-form-submission" : ""}`, children: K ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: K.title.toLowerCase().startsWith("forma") ? K.title : `Forma: ${K.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: K.entries.map((pe) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: pe.label }),
                  /* @__PURE__ */ i("dd", { children: pe.value })
                ] }, `${j.id}-${pe.label}`)) })
              ] }) : j.content }) : /* @__PURE__ */ i(he, { children: [
                j.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(ja, { content: j.content }),
                  j.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                j.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Ia, { widget: j.widget, onAction: (pe) => L(pe) }) }),
                j.isStreaming && !j.content && !j.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Yt, {}) })
              ] }),
              !O && j.sources && j.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: D("sources", a) }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: j.sources.map((pe) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: pe.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: pe.title }),
                      /* @__PURE__ */ i(ua, { size: 10 })
                    ]
                  },
                  pe.id
                )) })
              ] }),
              !O && E.showFollowupSuggestions !== !1 && j.suggestedQuestions && j.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: j.suggestedQuestions.map((pe, de) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => L(pe),
                  disabled: I,
                  className: "pitaj-followup-chip",
                  children: pe
                },
                `sug-f-${de}`
              )) }),
              (!j.isStreaming || !!j.content || !!j.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: Ca(j.timestamp) }),
                !O && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  j.id === se && !r && /* @__PURE__ */ i(he, { children: E.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(he, { children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => h == null ? void 0 : h("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": D("helpful", a),
                        title: D("helpful", a),
                        children: /* @__PURE__ */ i(fa, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => h == null ? void 0 : h("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": D("notHelpful", a),
                        title: D("notHelpful", a),
                        children: /* @__PURE__ */ i(ga, { size: 14 })
                      }
                    )
                  ] }) }),
                  j.id === se && !r && E.copyMessageEnabled !== !1 && !!j.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void q(j.id, j.content),
                      className: `pitaj-msg-action-btn ${v === j.id ? "is-active" : ""}`,
                      "aria-label": v === j.id ? D("copied", a) : D("copyAnswer", a),
                      title: v === j.id ? D("copied", a) : D("copyAnswer", a),
                      children: v === j.id ? /* @__PURE__ */ i(st, { size: 14 }) : /* @__PURE__ */ i(ha, { size: 14 })
                    }
                  )
                ] }),
                O && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  st,
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
      r && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Yt, {}) }) }) })
    ] }),
    (n || o) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: o ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${o}s.` : n }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        yi,
        {
          rows: re,
          fallbackQuestions: E.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: L,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      y.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: y.map((j) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: j.previewUrl ? /* @__PURE__ */ i("img", { src: j.previewUrl, alt: j.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(ji, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: j.name, children: j.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => H(j.id),
            "aria-label": `Ukloni ${j.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(je, { size: 10 })
          }
        )
      ] }, j.id)) }),
      G && !p && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: G }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => f(!0),
            "aria-label": D("close", a),
            children: /* @__PURE__ */ i(je, { size: 12 })
          }
        )
      ] }),
      _.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: D("transcribing", a) }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${X ? "is-recording" : ""}`, children: [
        E.attachmentsEnabled && /* @__PURE__ */ i(he, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: V,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (j) => {
                const O = j.currentTarget.files;
                if (j.currentTarget.value = "", !O || O.length === 0) return;
                const K = await _i(O);
                S((ne) => [...ne, ...K].slice(0, 3));
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
                return (j = V.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ i(wi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: N,
            value: u,
            onInput: (j) => b(j.target.value),
            onKeyDown: C,
            placeholder: T,
            rows: 1,
            disabled: I,
            className: "pitaj-textarea",
            style: X ? { display: "none" } : void 0
          }
        ),
        X ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": D("cancel", a),
              title: D("cancel", a),
              onClick: () => _.cancel(),
              children: /* @__PURE__ */ i(je, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: _.waveformLevels.map((j, O) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + j * 15))}px` }
            },
            `dict-wave-conv-${O}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": D("sendAudio", a),
              title: D("sendAudio", a),
              onClick: () => _.stopAndTranscribe(),
              disabled: I || _.isProcessing,
              children: /* @__PURE__ */ i(st, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(he, { children: [
          E.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${_.isProcessing ? "is-active" : ""}`,
              "aria-label": D("dictation", a),
              title: _.isProcessing ? D("transcribing", a) : _.isSupported ? D("dictation", a) : "Diktiranje nije podržano",
              onClick: () => _.start(),
              disabled: I || A || !_.isSupported || _.isProcessing,
              children: /* @__PURE__ */ i(xi, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => L(),
              disabled: I || !u.trim() && y.length === 0,
              className: "pitaj-send-btn",
              "aria-label": D("sendMessage", a),
              children: /* @__PURE__ */ i(bi, { size: 16 })
            }
          )
        ] })
      ] }),
      ae && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: ae }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(dt, { size: 13, className: "pitaj-powered-icon" }),
        e.poweredByText || D("poweredBy", a),
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
function $a({
  config: t,
  language: e = "bs",
  openedByUser: a = !1,
  onStart: r,
  onApiError: o
}) {
  var X, q;
  const [n, l] = R(""), [s, h] = R(!1), [u, b] = R(!1), [p, f] = R([]), v = J(null), x = J(null), y = t.content || {}, S = t.chatAvailable === !1, z = t.transcribeAvailable === !1, N = Mi({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: ee((k) => {
      l((U) => U ? `${U} ${k}` : k);
    }, []),
    onError: ee((k) => {
      o == null || o(k, "Greška pri transkripciji.");
    }, [o])
  });
  Y(() => {
    var k;
    a && ((k = v.current) == null || k.focus({ preventScroll: !0 }));
  }, [a]), Y(() => {
    if (typeof window > "u") return;
    const k = window.matchMedia("(max-width: 768px)"), U = () => h(k.matches);
    return U(), k.addEventListener("change", U), () => k.removeEventListener("change", U);
  }, []), Y(() => {
    b(!1);
  }, [y.dismissibleNotice]);
  const E = (s && y.useDifferentMessageMobile && y.mobileWelcomeMessage ? y.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((k) => k.trim()).filter((k) => k.length > 0), c = y.autoShowInitialMessages !== !1 && !a, A = !s || y.showAutoPopupMobile !== !1, I = s && y.useDifferentDurationMobile && typeof y.mobileAutoShowDurationSeconds == "number" ? y.mobileAutoShowDurationSeconds : y.autoShowDurationSeconds ?? 0, _ = c && A ? Math.max(0, I) * 1e3 : 0, H = (k) => {
    f((U) => {
      const te = U.find((j) => j.id === k);
      if (te != null && te.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(te.previewUrl);
        } catch {
        }
      return U.filter((j) => j.id !== k);
    });
  }, L = (k) => {
    const U = (k ?? n).trim();
    if (!U && p.length === 0 || S) return;
    const te = `${U}${ki(p)}`.trim();
    r(te), p.forEach((j) => {
      if (j.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(j.previewUrl);
        } catch {
        }
    }), l(""), f([]);
  }, C = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), L());
  }, T = y.showSuggestedMessages === !1 ? [] : y.suggestedMessageRows || [], G = y.messagePlaceholder || t.placeholder || D("inputPlaceholder", e), ae = ((X = y.dismissibleNotice) == null ? void 0 : X.trim()) || "", re = ((q = y.footerText) == null ? void 0 : q.trim()) || "", se = N.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (E.length > 0 ? E : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((k, U) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: k }) }) }, `welcome-${U}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        yi,
        {
          rows: T,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: L,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: _,
          staggerMs: 150
        }
      ),
      p.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: p.map((k) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: k.previewUrl ? /* @__PURE__ */ i("img", { src: k.previewUrl, alt: k.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(ji, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: k.name, children: k.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => H(k.id),
            "aria-label": `Ukloni ${k.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(je, { size: 10 })
          }
        )
      ] }, k.id)) }),
      ae && !u && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: ae }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => b(!0),
            "aria-label": D("close", e),
            children: /* @__PURE__ */ i(je, { size: 12 })
          }
        )
      ] }),
      N.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: D("transcribing", e) }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${se ? "is-recording" : ""}`, children: [
        y.attachmentsEnabled && /* @__PURE__ */ i(he, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: x,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (k) => {
                const U = k.currentTarget.files;
                if (k.currentTarget.value = "", !U || U.length === 0) return;
                const te = await _i(U);
                f((j) => [...j, ...te].slice(0, 3));
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
                var k;
                return (k = x.current) == null ? void 0 : k.click();
              },
              children: /* @__PURE__ */ i(wi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: v,
            value: n,
            onInput: (k) => l(k.target.value),
            onKeyDown: C,
            placeholder: G,
            rows: 1,
            disabled: S,
            className: "pitaj-textarea",
            style: se ? { display: "none" } : void 0
          }
        ),
        se ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": D("cancel", e),
              title: D("cancel", e),
              onClick: () => N.cancel(),
              children: /* @__PURE__ */ i(je, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: N.waveformLevels.map((k, U) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + k * 15))}px` }
            },
            `dict-wave-${U}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": D("sendAudio", e),
              title: D("sendAudio", e),
              onClick: () => N.stopAndTranscribe(),
              disabled: S || N.isProcessing,
              children: /* @__PURE__ */ i(st, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(he, { children: [
          y.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${N.isProcessing ? "is-active" : ""}`,
              "aria-label": D("dictation", e),
              title: N.isProcessing ? D("transcribing", e) : N.isSupported ? D("dictation", e) : "Diktiranje nije podržano",
              onClick: () => N.start(),
              disabled: S || z || !N.isSupported || N.isProcessing,
              children: /* @__PURE__ */ i(xi, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => L(),
              disabled: S || !n.trim() && p.length === 0,
              className: "pitaj-send-btn",
              "aria-label": D("sendMessage", e),
              children: /* @__PURE__ */ i(bi, { size: 16 })
            }
          )
        ] })
      ] }),
      re && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: re }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(dt, { size: 13, className: "pitaj-powered-icon" }),
        t.poweredByText || D("poweredBy", e),
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
function Ea({
  isOpen: t,
  onClick: e,
  unreadCount: a = 0,
  config: r
}) {
  var b, p, f, v, x, y;
  const o = ((b = r.content) == null ? void 0 : b.launcherIconStyle) || "message-circle", n = typeof ((p = r.content) == null ? void 0 : p.launcherIconUrl) == "string" ? r.content.launcherIconUrl.trim() : "", l = ((f = r.content) == null ? void 0 : f.launcherShowText) === !0, s = ((v = r.content) == null ? void 0 : v.launcherTextSide) === "left" ? "left" : "right", h = l ? ((y = (x = r.content) == null ? void 0 : x.launcherText) == null ? void 0 : y.trim()) || r.title || r.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${l ? "has-label" : ""} ${l && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && n !== "" ? /* @__PURE__ */ i("img", { src: n, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? ra : o === "message-square" ? vi : o === "contact" ? ca : oa, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(je, { size: 22 }) })
        ] }),
        h && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: h }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function Da({ isOpen: t, onOpen: e, config: a }) {
  var A, I, _, H;
  const [r, o] = R(!1), [n, l] = R(!1), [s, h] = R(!1), [u, b] = R(t), p = J(null);
  Y(() => {
    t && (b(!0), h(!1));
  }, [t]), Y(() => {
    const L = () => {
      var T;
      if (typeof window > "u") return;
      let C = window.innerWidth <= 640;
      if (!C && p.current) {
        const G = (T = p.current.closest(".pitaj-root")) == null ? void 0 : T.parentElement;
        G && G.clientWidth > 0 && G.clientWidth <= 640 && (C = !0);
      }
      o(C);
    };
    return L(), window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
  }, []);
  const f = a.content || {}, v = f.autoShowInitialMessages !== !1, x = f.showAutoPopupMobile !== !1, y = !r || x, S = r && f.useDifferentDurationMobile && typeof f.mobileAutoShowDurationSeconds == "number" ? f.mobileAutoShowDurationSeconds : f.autoShowDurationSeconds ?? 0;
  if (Y(() => {
    if (!v || !y || n || t || u) {
      h(!1);
      return;
    }
    const L = Math.max(0, S) * 1e3, C = setTimeout(() => {
      h(!0);
    }, L);
    return () => clearTimeout(C);
  }, [v, y, n, t, u, S]), !s || t)
    return null;
  let z = "";
  r && f.useDifferentMessageMobile && ((A = f.mobileWelcomeMessage) != null && A.trim()) ? z = f.mobileWelcomeMessage.trim() : (I = f.popupMessageText) != null && I.trim() ? z = f.popupMessageText.trim() : (_ = a.welcomeMessage) != null && _.trim() ? z = a.welcomeMessage.trim() : (H = a.welcomeHeadline) != null && H.trim() ? z = a.welcomeHeadline.trim() : z = "Zdravo! Kako vam mogu pomoći danas?";
  const N = (L) => {
    L.stopPropagation(), L.preventDefault(), l(!0), h(!1);
  }, V = () => {
    e();
  }, E = a.title || a.name || "Pitaj.io Asistent", c = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: p,
      className: "pitaj-launcher-popup",
      onClick: V,
      role: "button",
      tabIndex: 0,
      "aria-label": `${E}: ${z}`,
      onKeyDown: (L) => {
        (L.key === "Enter" || L.key === " ") && (L.preventDefault(), V());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: c ? /* @__PURE__ */ i("img", { src: c, alt: "" }) : /* @__PURE__ */ i(dt, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: E })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: N,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ i(je, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-popup-body", children: z }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function Pa(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, r = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(r / (1e3 * 60)), n = Math.floor(r / (1e3 * 60 * 60)), l = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : n < 24 ? `prije ${n}h` : l < 7 ? `prije ${l}d` : e.toLocaleDateString();
}
function Ba({ config: t, visitorId: e, onSelectTicket: a }) {
  const [r, o] = R([]), [n, l] = R("open"), [s, h] = R(1), [u, b] = R(!0), [p, f] = R(!0), [v, x] = R(!1), [y, S] = R(null), z = J(null), N = J(null), V = J(!1);
  Y(() => {
    let A = !0;
    return f(!0), o([]), h(1), b(!0), S(null), V.current = !1, vt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: 1,
      perPage: 15
    }).then((I) => {
      A && (o(I.tickets), b(I.hasMore), h(1));
    }).catch((I) => {
      A && S(I instanceof Error ? I.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      A && f(!1);
    }), () => {
      A = !1;
    };
  }, [t.apiUrl, t.companyId, e, n]);
  const E = ee(() => {
    if (p || V.current || !u) return;
    V.current = !0, x(!0);
    const A = s + 1;
    vt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: n,
      page: A,
      perPage: 15
    }).then((I) => {
      o((_) => {
        const H = new Set(_.map((C) => C.id)), L = I.tickets.filter((C) => !H.has(C.id));
        return [..._, ...L];
      }), b(I.hasMore), h(A);
    }).catch((I) => {
      console.error("[Pitaj.io] Error loading more tickets:", I);
    }).finally(() => {
      x(!1), V.current = !1;
    });
  }, [t.apiUrl, t.companyId, u, p, s, n, e]);
  return Y(() => {
    const A = N.current, I = z.current;
    if (!A || !I || !u || p || v) return;
    const _ = new IntersectionObserver(
      (H) => {
        var L;
        (L = H[0]) != null && L.isIntersecting && E();
      },
      { root: I, rootMargin: "120px" }
    );
    return _.observe(A), () => _.disconnect();
  }, [u, p, v, E]), /* @__PURE__ */ i(
    "div",
    {
      ref: z,
      className: "pitaj-tickets-screen",
      onScroll: (A) => {
        const I = A.currentTarget;
        !I || !u || p || V.current || I.scrollHeight - I.scrollTop - I.clientHeight < 120 && E();
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
        ] }) : y ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: y }) }) : r.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(vi, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: n === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: n === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          r.map((A) => {
            const I = A.messages || [], _ = I.length > 0 ? I[I.length - 1] : null, H = I.length, L = H === 1 ? "1 poruka" : H >= 2 && H <= 4 ? `${H} poruke` : `${H} poruka`;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => a == null ? void 0 : a(A),
                "aria-label": `Otvori tiket ${A.ticketNumber || A.id}`,
                children: /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ i("strong", { className: "pitaj-ticket-number", children: A.ticketNumber || `Tiket #${A.id}` }),
                    /* @__PURE__ */ i("span", { className: `pitaj-ticket-status-badge ${A.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ i("span", { className: "pitaj-ticket-status-dot" }),
                      A.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  _ && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: _.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: Pa(A.updatedAt) }),
                    H > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: L })
                  ] })
                ] })
              },
              A.id
            );
          }),
          v && /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ i("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ i("div", { ref: N, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const Ua = Nt(() => import("./HistoryScreen-BO8vNAVr.js"), (t) => t.HistoryScreen), Ha = Nt(() => import("./FormActionsScreen-D6wVmc9a.js"), (t) => t.FormActionsScreen);
function Je(t) {
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
    const o = Number(r[1]) % 360, n = Number(r[2]) / 100, l = Number(r[3]) / 100, s = (1 - Math.abs(2 * l - 1)) * n, h = s * (1 - Math.abs(o / 60 % 2 - 1)), u = l - s / 2;
    let b = 0, p = 0, f = 0;
    return 0 <= o && o < 60 ? (b = s, p = h, f = 0) : 60 <= o && o < 120 ? (b = h, p = s, f = 0) : 120 <= o && o < 180 ? (b = 0, p = s, f = h) : 180 <= o && o < 240 ? (b = 0, p = h, f = s) : 240 <= o && o < 300 ? (b = h, p = 0, f = s) : 300 <= o && o < 360 && (b = s, p = 0, f = h), {
      r: Math.round((b + u) * 255),
      g: Math.round((p + u) * 255),
      b: Math.round((f + u) * 255)
    };
  }
  return null;
}
function Fa(t) {
  return Je(t);
}
function tt(t, e) {
  const a = Je(t);
  return a ? `rgba(${a.r}, ${a.g}, ${a.b}, ${e})` : null;
}
function Ra(t, e, a) {
  const r = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${r(t)}${r(e)}${r(a)}`;
}
function Ye(t) {
  const e = Je(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Oa(t, e) {
  const a = Je(t);
  if (a)
    return (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255 <= 0.55;
  if (e) {
    const r = Je(e);
    if (r)
      return (0.2126 * r.r + 0.7152 * r.g + 0.0722 * r.b) / 255 > 0.55;
  }
  return !1;
}
function Va(t) {
  const e = Fa(t);
  if (!e) return t;
  const a = Ye(t) === "#111827", r = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return Ra(
    e.r + (o - e.r) * r,
    e.g + (o - e.g) * r,
    e.b + (o - e.b) * r
  );
}
function Ga({
  config: t,
  startOpen: e = !1,
  initialScreen: a = "new-conversation",
  onEvent: r,
  isInline: o = !1,
  isMobile: n,
  isCanvasPreview: l = !1
}) {
  var _e, ke, Me, Le, Te, $e, Ee, De, Pe, Be, Ue, He, Fe, Re, w;
  const {
    config: s,
    setConfig: h,
    isOpen: u,
    setIsOpen: b,
    screen: p,
    setScreen: f,
    conversations: v,
    activeConversation: x,
    totalUnread: y,
    isStreaming: S,
    rateLimitTimer: z,
    errorBanner: N,
    selectConversation: V,
    startNewConversation: E,
    endConversation: c,
    deleteConversation: A,
    sendUserMessage: I,
    submitSatisfaction: _,
    visitorContact: H,
    visitorId: L,
    activeConversationId: C,
    activeLanguage: T,
    appendConversationMessage: G,
    handleApiError: ae
  } = aa(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: r,
    onActionTrigger: (d) => {
      if (q(!0), b(!0), (p === "history" || p === "new-conversation") && f("conversation"), d.widget_id || d.widget)
        return;
      const g = Number(d.id), m = Number(d.form_id), M = Number.isInteger(g) && g > 0 ? g : null, P = Number.isInteger(m) && m > 0 ? -m : null;
      U(M ?? P);
    }
  }), re = J(a), se = J(e), [X, q] = R(e), [k, U] = R(() => {
    var d, g, m, M;
    return ((d = s.previewDraft) == null ? void 0 : d.initialStep) === "form" && !!!(s.previewDraft.widget || (g = s.previewDraft.action) != null && g.widget || (m = s.previewDraft.action) != null && m.widget_id) ? ((M = s.previewDraft.action) == null ? void 0 : M.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  Y(() => {
    var d, g, m, M, P, W, B;
    if (((d = s.previewDraft) == null ? void 0 : d.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (g = s.previewDraft.action) != null && g.widget || (m = s.previewDraft.action) != null && m.widget_id)) {
        const $ = ((M = s.previewDraft.action) == null ? void 0 : M.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        $ !== null && U($);
      }
    } else (((P = s.previewDraft) == null ? void 0 : P.initialStep) === "idle" || ((W = s.previewDraft) == null ? void 0 : W.initialStep) === "submitted" || ((B = s.previewDraft) == null ? void 0 : B.initialStep) === "dismissed") && U(null);
  }, [
    (_e = s.previewDraft) == null ? void 0 : _e.initialStep,
    (Me = (ke = s.previewDraft) == null ? void 0 : ke.action) == null ? void 0 : Me.id,
    (Te = (Le = s.previewDraft) == null ? void 0 : Le.form) == null ? void 0 : Te.id,
    ($e = s.previewDraft) == null ? void 0 : $e.widget
  ]);
  const [te, j] = R(null), O = J(null), [K, ne] = R(() => typeof n == "boolean" ? n : o ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  Y(() => {
    if (typeof n == "boolean") {
      ne(n);
      return;
    }
    const d = () => {
      if (typeof window > "u") return;
      if (o) {
        ne(!1);
        return;
      }
      let g = window.innerWidth <= 640;
      if (!g && O.current) {
        const m = O.current.getRootNode(), M = m instanceof ShadowRoot ? m.host : O.current.parentElement, P = (M == null ? void 0 : M.parentElement) || M;
        P && P.clientWidth > 0 && P.clientWidth <= 640 && (g = !0);
      }
      ne(g);
    };
    return d(), window.addEventListener("resize", d), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", d), window.removeEventListener("orientationchange", d);
    };
  }, [n]), Y(() => {
    if (typeof window > "u") return;
    const d = () => {
      const m = O.current;
      if (!m) return;
      const M = window.visualViewport;
      if (M) {
        const P = M.height < window.innerHeight - 100;
        m.style.setProperty("--pitaj-viewport-height", `${Math.round(M.height)}px`), m.style.setProperty("--pitaj-viewport-top", `${Math.round(M.offsetTop)}px`), m.style.setProperty("--pitaj-viewport-left", `${Math.round(M.offsetLeft)}px`), m.style.setProperty(
          "--pitaj-input-safe-bottom",
          P ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        m.style.setProperty("--pitaj-viewport-height", "100dvh"), m.style.setProperty("--pitaj-viewport-top", "0px"), m.style.setProperty("--pitaj-viewport-left", "0px"), m.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    d();
    const g = window.visualViewport;
    return g && (g.addEventListener("resize", d), g.addEventListener("scroll", d)), window.addEventListener("resize", d), window.addEventListener("orientationchange", d), () => {
      g && (g.removeEventListener("resize", d), g.removeEventListener("scroll", d)), window.removeEventListener("resize", d), window.removeEventListener("orientationchange", d);
    };
  }, [u, K]), Y(() => {
    if (typeof document > "u" || !u || !K || o || l) return;
    const d = document.body.style.overflow, g = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = d, document.body.style.touchAction = g;
    };
  }, [u, K, o, l]), Y(() => {
    var m;
    if (typeof window > "u" || o) return;
    const d = (m = O.current) == null ? void 0 : m.getRootNode(), g = d instanceof ShadowRoot ? d.host : null;
    if (g) {
      if (l || g.hasAttribute("data-pitaj-preview") || g.classList.contains("pitaj-preview-host")) {
        g.style.width = "100%", g.style.height = "100%", g.style.top = "0", g.style.left = "0", g.style.position = "relative";
        return;
      }
      u && K ? (g.style.top = "0", g.style.left = "0", g.style.width = "100%", g.style.height = "100%", g.setAttribute("data-pitaj-mobile-open", "true")) : (g.style.top = "", g.style.left = "", g.style.width = "0", g.style.height = "0", g.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [u, K, o, l]);
  const pe = s.formsEnabled === !0 && s.formsAvailable !== !1, de = Ae(() => {
    var m, M;
    const d = s.actions || [];
    if (d.length > 0 && typeof ((m = d[0]) == null ? void 0 : m.id) == "number")
      return d[0].id;
    const g = s.forms || [];
    return g.length > 0 && typeof ((M = g[0]) == null ? void 0 : M.id) == "number" ? -g[0].id : null;
  }, [s.actions, s.forms]), ge = Ae(() => ({
    open: () => {
      q(!0), b(!0);
    },
    close: () => b(!1),
    toggle: () => {
      u || q(!0), b(!u);
    },
    startConversation: (d) => {
      q(!0), b(!0), d && d.trim() ? E(d.trim()) : f("new-conversation");
    },
    setScreen: (d) => f(d),
    setConfig: (d) => {
      const g = {
        ...s,
        ...d,
        colors: { ...s.colors || {}, ...d.colors || {} },
        content: { ...s.content || {}, ...d.content || {} },
        features: { ...s.features || {}, ...d.features || {} }
      };
      if (g.previewDraft) {
        if (g.previewDraft.action) {
          const m = g.previewDraft.action;
          g.actions = [m, ...(g.actions || []).filter((M) => M.id !== m.id)];
        }
        if (g.previewDraft.form) {
          const m = g.previewDraft.form;
          g.forms = [m, ...(g.forms || []).filter((M) => M.id !== m.id)], g.formsAvailable = !0, g.formsEnabled = !0;
        }
        if (g.previewDraft.widget) {
          const m = g.previewDraft.widget;
          g.widgets = [m, ...(g.widgets || []).filter((M) => M.id !== m.id)];
        }
      }
      h(g);
    }
  }), [s, u, b, f, E, h]), ue = J({});
  Wt(ue.current, ge), Y(() => () => Wt(ue.current, null), []), Y(() => {
    a !== re.current && (re.current = a, f(a));
  }, [a, f]), Y(() => {
    e !== se.current && (se.current = e, e && q(!0), b(e));
  }, [e, b]), Y(() => {
    if (p === "forms") {
      pe && de !== null && U(de), f("new-conversation");
      return;
    }
    p === "contact" && f("new-conversation");
  }, [de, pe, p, f]), Y(() => {
    var M;
    if (typeof document > "u") return;
    const d = (M = s.content) == null ? void 0 : M.fontFamily;
    if (!d) return;
    const g = d.trim().toLowerCase();
    let m = "";
    if (g === "inter" ? m = "family=Inter:wght@400;500;600;700" : g === "geist" ? m = "family=Geist:wght@400;500;600;700" : g === "plus jakarta sans" && (m = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), m) {
      const P = `pitaj-font-${g.replace(/\s+/g, "-")}`;
      if (!document.getElementById(P)) {
        const W = document.createElement("link");
        W.id = P, W.rel = "stylesheet", W.href = `https://fonts.googleapis.com/css2?${m}&display=swap`, document.head.appendChild(W);
      }
    }
  }, [(Ee = s.content) == null ? void 0 : Ee.fontFamily]);
  const Ie = Ae(() => {
    var be, fe, Xe, Oe, Ve, ve;
    if (s.cssVars && Object.keys(s.cssVars).length > 0)
      return s.cssVars;
    if ((be = s.theme) != null && be.css_vars && Object.keys(s.theme.css_vars).length > 0)
      return s.theme.css_vars;
    const d = s.colors || {}, g = ((fe = s.content) == null ? void 0 : fe.themeMode) === "dark" ? "dark" : "light", m = {};
    if (d.primaryColor) {
      m["--pitaj-accent"] = d.primaryColor, m["--pitaj-bubble-user"] = d.primaryColor, m["--pitaj-accent-hover"] = Va(d.primaryColor), m["--pitaj-accent-contrast"] = Ye(d.primaryColor), m["--pitaj-bubble-user-fg"] = Ye(d.primaryColor);
      const me = tt(d.primaryColor, 0.1), Ge = tt(d.primaryColor, 0.16), St = tt(d.primaryColor, 0.35);
      me && (m["--pitaj-accent-soft"] = me), Ge && (m["--pitaj-accent-soft-strong"] = Ge), St && (m["--pitaj-accent-ring"] = St);
    }
    const M = g === "dark" ? "#111827" : "#ffffff", P = d.headerBg || M, W = Oa(P, d.headerFg), B = d.headerFg || (W ? "#ffffff" : "#0f172a");
    m["--pitaj-header-bg"] = P, m["--pitaj-header-fg"] = B, W ? m["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)" : P.toLowerCase() === "#ffffff" || P.toLowerCase() === "#fff" ? m["--pitaj-header-gradient"] = "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : m["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", W ? (m["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", m["--pitaj-header-icon-hover"] = "#ffffff", m["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", m["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", m["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", m["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", m["--pitaj-header-badge-fg"] = "#ffffff", m["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (m["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", m["--pitaj-header-icon-hover"] = "#0f172a", m["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", m["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", m["--pitaj-header-border"] = d.border || "rgba(15, 23, 42, 0.08)", m["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", m["--pitaj-header-badge-fg"] = "#0f172a", m["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)"), m["--pitaj-chrome-border"] = g === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", d.surfaceBg && (m["--pitaj-surface"] = d.surfaceBg), d.subtle ? m["--pitaj-surface-subtle"] = d.subtle : d.surfaceBg && (m["--pitaj-surface-subtle"] = tt(d.surfaceBg, 0.9) || d.surfaceBg), d.bubbleAiBg && (m["--pitaj-bubble-ai"] = d.bubbleAiBg), d.textFg && (m["--pitaj-bubble-ai-fg"] = d.textFg), d.textFg && (m["--pitaj-fg"] = d.textFg), d.mutedFg && (m["--pitaj-muted"] = d.mutedFg), d.border && (m["--pitaj-border"] = d.border), d.hover && (m["--pitaj-hover"] = d.hover), d.sendAccent && (m["--pitaj-send-accent"] = d.sendAccent, m["--pitaj-send-accent-contrast"] = Ye(d.sendAccent));
    const Z = (Xe = s.content) == null ? void 0 : Xe.launcherButtonColor;
    Z && (m["--pitaj-launcher-bg"] = Z, m["--pitaj-launcher-fg"] = Ye(Z));
    const $ = (Oe = s.content) == null ? void 0 : Oe.cornerRadius;
    if ($) {
      const me = $ === "sharp" || $ === "0px" ? "0px" : $ === "small" || $ === "8px" ? "8px" : $ === "medium" || $ === "12px" ? "12px" : $ === "large" || $ === "16px" ? "16px" : $;
      m["--pitaj-radius"] = me, me === "0px" ? (m["--pitaj-radius-bubble"] = "0px", m["--pitaj-radius-input"] = "0px", m["--pitaj-radius-btn"] = "0px", m["--pitaj-radius-avatar"] = "0px", m["--pitaj-radius-full"] = "0px", m["--pitaj-radius-corner-sm"] = "0px", m["--pitaj-launcher-radius"] = "0px", m["--pitaj-launcher-pill-radius"] = "0px", m["--pitaj-badge-radius"] = "0px") : me === "8px" ? (m["--pitaj-radius-bubble"] = "8px", m["--pitaj-radius-input"] = "8px", m["--pitaj-radius-btn"] = "6px", m["--pitaj-radius-avatar"] = "6px", m["--pitaj-radius-full"] = "8px", m["--pitaj-radius-corner-sm"] = "2px", m["--pitaj-launcher-radius"] = "8px", m["--pitaj-launcher-pill-radius"] = "8px", m["--pitaj-badge-radius"] = "4px") : me === "12px" ? (m["--pitaj-radius-bubble"] = "12px", m["--pitaj-radius-input"] = "12px", m["--pitaj-radius-btn"] = "8px", m["--pitaj-radius-avatar"] = "10px", m["--pitaj-radius-full"] = "12px", m["--pitaj-radius-corner-sm"] = "4px", m["--pitaj-launcher-radius"] = "12px", m["--pitaj-launcher-pill-radius"] = "12px", m["--pitaj-badge-radius"] = "6px") : (m["--pitaj-radius-bubble"] = "18px", m["--pitaj-radius-input"] = "14px", m["--pitaj-radius-btn"] = "10px", m["--pitaj-radius-avatar"] = "50%", m["--pitaj-radius-full"] = "999px", m["--pitaj-radius-corner-sm"] = "4px", m["--pitaj-launcher-radius"] = "50%", m["--pitaj-launcher-pill-radius"] = "999px", m["--pitaj-badge-radius"] = "999px");
    }
    const le = (Ve = s.content) == null ? void 0 : Ve.fontFamily;
    if (le) {
      const me = le.toLowerCase(), Ge = me === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : me === "arial" ? "Arial, Helvetica, sans-serif" : me === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : me === "georgia" ? "Georgia, serif" : me === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : me === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${le}', 'Inter', system-ui, sans-serif`;
      m["--pitaj-font"] = Ge, m.fontFamily = Ge;
    }
    const F = (ve = s.content) == null ? void 0 : ve.fontSize;
    return F && (m["--pitaj-font-size"] = F, m.fontSize = F), m;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (De = s.content) == null ? void 0 : De.themeMode,
    (Pe = s.content) == null ? void 0 : Pe.launcherButtonColor,
    (Be = s.content) == null ? void 0 : Be.cornerRadius,
    (Ue = s.content) == null ? void 0 : Ue.fontFamily,
    (He = s.content) == null ? void 0 : He.fontSize
  ]), we = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ i(he, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: O,
      className: `pitaj-root ${we} ${u ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${l ? "is-canvas-preview" : ""} ${K ? "is-mobile" : ""} ${o && ((Fe = s.content) != null && Fe.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: Ie,
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
                xa,
                {
                  screen: p,
                  activeConversation: x,
                  config: s,
                  language: T,
                  onBack: () => {
                    const d = te || "new-conversation";
                    j(null), f(d);
                  },
                  onClose: () => {
                    b(!1);
                  },
                  onNewConversation: () => {
                    j(null), f("new-conversation");
                  },
                  onEndConversation: () => {
                    c(), b(!1);
                  },
                  onDeleteConversation: ((Re = s.content) == null ? void 0 : Re.deleteConversationsEnabled) !== !1 && x ? () => A(x.id) : void 0,
                  onViewHistory: () => {
                    j(null), f("history");
                  },
                  onViewTickets: () => {
                    j(null), f("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                p === "conversation" && x && /* @__PURE__ */ i(
                  Ta,
                  {
                    conversation: x,
                    config: s,
                    language: T,
                    isStreaming: S,
                    rateLimitCountdown: z,
                    errorBanner: N,
                    onSendMessage: I,
                    onApiError: ae,
                    onSubmitSatisfaction: (d, g) => _(x.id, d, g)
                  }
                ),
                p === "new-conversation" && /* @__PURE__ */ i(
                  $a,
                  {
                    config: s,
                    language: T,
                    openedByUser: X,
                    onStart: (d) => {
                      E(d);
                    },
                    onApiError: ae
                  }
                ),
                p === "history" && /* @__PURE__ */ i(
                  Ua,
                  {
                    conversations: v,
                    config: s,
                    language: T,
                    onSelectConversation: (d) => {
                      j("history"), V(d);
                    },
                    onNewConversation: () => {
                      j(null), f("new-conversation");
                    },
                    onDeleteConversation: ((w = s.content) == null ? void 0 : w.deleteConversationsEnabled) !== !1 ? A : void 0
                  }
                ),
                p === "tickets" && /* @__PURE__ */ i(
                  Ba,
                  {
                    config: s,
                    visitorId: L,
                    onSelectTicket: (d) => {
                      var B;
                      j("tickets");
                      const g = (B = d.messages) == null ? void 0 : B.find((Z) => Z.sender === "user"), m = d.messages && d.messages.length > 0 ? d.messages[d.messages.length - 1] : null, M = g ? g.content.length > 40 ? g.content.slice(0, 40) + "…" : g.content : d.ticketNumber || `Tiket #${d.id}`, W = {
                        id: d.conversationId ? String(d.conversationId) : String(d.id),
                        title: M,
                        preview: m ? m.content : d.ticketNumber || `Tiket #${d.id}`,
                        timestamp: d.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: d.messages || [],
                        status: d.isResolved ? "ended" : "active",
                        ticketNumber: d.ticketNumber
                      };
                      V(W);
                    }
                  }
                ),
                (p === "conversation" || p === "new-conversation") && pe && k !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  Ha,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: C,
                    initialActionId: k,
                    visitorContact: H,
                    onApiError: ae,
                    blockedReason: z !== null ? `Sačekajte ${z}s prije novog zahtjeva.` : null,
                    onSubmitted: (d) => {
                      var g, m;
                      if (G(C, d, "user"), s.mockMode || s.isPreview) {
                        const M = ((m = (g = s.previewDraft) == null ? void 0 : g.form) == null ? void 0 : m.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          G(C, M, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => U(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!u || !K) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${u ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            Da,
            {
              isOpen: u,
              onOpen: () => {
                q(!0), b(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ i(
            Ea,
            {
              isOpen: u,
              onClick: () => {
                u || q(!0), b(!u);
              },
              unreadCount: y,
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const ie = {
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
    defaultLanguage: "bs",
    supportedLanguages: ["bs"]
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
function Wa(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), r = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * r + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function Ka(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function Ya(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const r = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, n = Number.parseInt(a.slice(5, 7), 16) / 255, l = Math.max(r, o, n), s = Math.min(r, o, n), h = l - s;
  let u = 0;
  const b = (l + s) / 2, p = h === 0 ? 0 : h / (1 - Math.abs(2 * b - 1));
  if (h !== 0)
    switch (l) {
      case r:
        u = (o - n) / h % 6;
        break;
      case o:
        u = (n - r) / h + 2;
        break;
      default:
        u = (r - o) / h + 4;
        break;
    }
  return { h: Math.round((u * 60 + 360) % 360), s: Math.round(p * 100), l: Math.round(b * 100) };
}
function Za(t) {
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
function qa(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((n) => typeof n == "object" && n !== null).map((n) => ({
      key: typeof n.key == "string" ? n.key : "",
      type: Za(n.type),
      label: typeof n.label == "string" ? n.label : "",
      required: n.required === !0,
      placeholder: typeof n.placeholder == "string" ? n.placeholder : void 0,
      options: Array.isArray(n.options) ? n.options.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
      accept: Array.isArray(n.accept) ? n.accept.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
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
function Qa(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function Ja(t, e) {
  var r, o, n, l, s, h, u, b, p;
  if (t === "default")
    return { ...ie, companyId: t || "default" };
  const a = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const f = `${a}/api/widget/${t}/config`, v = await fetch(f, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!v.ok) {
      if (v.status === 403) {
        const k = await v.json().catch(() => null);
        if ((k == null ? void 0 : k.code) === "COUNTRY_BLOCKED" || k != null && k.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...ie,
            companyId: t,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${v.status}), using defaults.`), { ...ie, companyId: t, apiUrl: a };
    }
    const x = await v.json(), y = x.accent_color || ((r = ie.colors) == null ? void 0 : r.primaryColor) || "#2563eb", S = Array.isArray(x.suggested_questions) ? x.suggested_questions.filter((k) => typeof k == "string" && k.trim() !== "").slice(0, 4) : [], z = Array.isArray(x.contact_fields) ? x.contact_fields.filter(
      (k) => k === "name" || k === "email" || k === "phone"
    ) : [], V = (Array.isArray(x.channels) ? x.channels : []).find(
      (k) => typeof k == "object" && k !== null && k.channel === "chat_bubble"
    ), E = (V == null ? void 0 : V.enabled) !== !1, c = x.widget_content && typeof x.widget_content == "object" ? x.widget_content : null, A = Array.isArray(c == null ? void 0 : c.suggested_message_rows) ? c.suggested_message_rows.filter((k) => typeof k == "object" && k !== null).map((k) => {
      const U = typeof k.text == "string" ? k.text.trim() : "", te = Array.isArray(k.children) ? k.children.filter((j) => typeof j == "string" && j.trim() !== "") : [];
      return {
        text: U,
        children: te.length > 0 ? te : void 0
      };
    }).filter((k) => k.text !== "").slice(0, 4) : [], I = {
      avatarBorder: (c == null ? void 0 : c.avatar_border) !== !1,
      messagePlaceholder: typeof (c == null ? void 0 : c.message_placeholder) == "string" && c.message_placeholder.trim() !== "" ? c.message_placeholder : ie.placeholder,
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
      suggestedMessageRows: A,
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
      tintedGrayscaleTint: typeof (c == null ? void 0 : c.tinted_grayscale_tint) == "number" ? Math.max(0, Math.min(100, Math.round(c.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (c == null ? void 0 : c.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(c.tinted_grayscale_shade))) : 0,
      launcherButtonColor: Ka(c == null ? void 0 : c.launcher_button_color, "#05070c"),
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
      defaultLanguage: typeof (c == null ? void 0 : c.default_language) == "string" ? c.default_language : "bs",
      supportedLanguages: Array.isArray(c == null ? void 0 : c.supported_languages) ? c.supported_languages : ["bs"],
      guardrails: c == null ? void 0 : c.guardrails
    }, _ = x.theme && typeof x.theme == "object" ? x.theme : null, H = _ != null && _.css_vars && typeof _.css_vars == "object" ? _.css_vars : void 0, L = _ != null && _.colors && typeof _.colors == "object" ? _.colors : null;
    let C = L, T = y;
    if (C)
      L.primaryColor && (T = L.primaryColor);
    else {
      const k = I.themeMode === "dark" ? "dark" : "light", U = I.accentColorEnabled !== !1, te = I.accentColorForHeaderEnabled === !0, j = I.tintedGrayscaleEnabled === !0, O = I.tintedGrayscaleHue ?? 0, K = I.tintedGrayscaleTint ?? 0, ne = I.tintedGrayscaleShade ?? 0;
      T = U ? y : k === "dark" ? "#3b82f6" : "#2563eb";
      const de = (Ya(T).h + O + 360) % 360, ge = Math.max(0, Math.min(40, Math.round(Math.max(0, K) * 0.36))), ue = Math.max(-24, Math.min(24, ne * 0.24));
      if (C = k === "dark" ? {
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
      }, U && te && (C.headerBg = T, C.headerFg = Wa(T)), j) {
        const Ie = k === "dark" ? Math.max(8, Math.min(20, 12 + ue)) : Math.max(88, Math.min(97, 95 + ue * 0.22)), we = k === "dark" ? Math.max(10, Math.min(24, 16 + ue)) : Math.max(80, Math.min(94, 89 + ue * 0.35)), _e = k === "dark" ? Math.max(11, Math.min(26, 18 + ue * 0.9)) : Math.max(83, Math.min(95, we + 3)), ke = k === "dark" ? Math.max(22, Math.min(40, 30 + ue)) : Math.max(70, Math.min(88, 82 + ue * 0.38)), Me = k === "dark" ? Math.max(16, Math.min(30, 22 + ue)) : Math.max(78, Math.min(92, we - 2));
        C.surfaceBg = `hsl(${de} ${ge}% ${Ie}%)`, C.bubbleAiBg = `hsl(${de} ${Math.max(0, ge - 2)}% ${_e}%)`, C.subtle = `hsl(${de} ${Math.max(0, ge - 4)}% ${we}%)`, C.border = `hsl(${de} ${Math.max(0, ge - 5)}% ${ke}%)`, C.hover = `hsl(${de} ${Math.max(0, ge - 3)}% ${Me}%)`;
      }
    }
    const G = qa(x.forms), ae = Qa(x.actions).filter(
      (k) => G.some((U) => U.id === k.form_id)
    ), re = x.forms_enabled === !0 && G.length > 0 && ae.length > 0, se = x.chat_available !== !1, X = x.transcribe_available !== !1 && se, q = x.forms_available !== !1 && re;
    return {
      ...ie,
      companyId: t,
      enabled: E,
      apiUrl: a,
      name: x.company_name || ie.name,
      title: x.bot_name || ie.title,
      avatar: typeof (c == null ? void 0 : c.avatar_url) == "string" && c.avatar_url.trim() !== "" ? c.avatar_url : ie.avatar,
      welcomeHeadline: x.bot_name ? `Ćaskajte sa ${x.bot_name}` : ie.welcomeHeadline,
      welcomeMessage: x.welcome_message || ie.welcomeMessage,
      placeholder: I.messagePlaceholder || ie.placeholder,
      suggestedQuestions: S,
      contactFields: z.length > 0 ? z : ie.contactFields,
      contact: {
        enabled: typeof ((o = x.contact) == null ? void 0 : o.enabled) == "boolean" ? x.contact.enabled : (n = ie.contact) == null ? void 0 : n.enabled,
        title: typeof ((l = x.contact) == null ? void 0 : l.title) == "string" && x.contact.title.trim() !== "" ? x.contact.title : (s = ie.contact) == null ? void 0 : s.title,
        subtitle: typeof ((h = x.contact) == null ? void 0 : h.subtitle) == "string" && x.contact.subtitle.trim() !== "" ? x.contact.subtitle : (u = ie.contact) == null ? void 0 : u.subtitle,
        submitLabel: typeof ((b = x.contact) == null ? void 0 : b.submit_label) == "string" && x.contact.submit_label.trim() !== "" ? x.contact.submit_label : (p = ie.contact) == null ? void 0 : p.submitLabel
      },
      poweredBy: x.show_branding !== void 0 ? x.show_branding : ie.poweredBy,
      position: x.position || ie.position,
      accentGradient: Array.isArray(x.accent_gradient) ? x.accent_gradient : [],
      content: {
        ...ie.content || {},
        ...I
      },
      chatAvailable: se,
      transcribeAvailable: X,
      formsAvailable: q,
      formsEnabled: re,
      forms: G,
      actions: ae,
      theme: _,
      cssVars: H,
      colors: {
        ...ie.colors,
        primaryColor: T,
        bubbleUserBg: T,
        sendAccent: (L == null ? void 0 : L.sendAccent) || (I.accentColorForSendIconEnabled ? T : I.themeMode === "dark" ? "#e5e7eb" : "#111827"),
        headerBg: C.headerBg,
        headerFg: C.headerFg,
        surfaceBg: C.surfaceBg,
        bubbleAiBg: C.bubbleAiBg,
        textFg: C.textFg,
        mutedFg: C.mutedFg,
        border: C.border,
        hover: C.hover,
        subtle: C.subtle
      }
    };
  } catch (f) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", f), { ...ie, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const Xa = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}', er = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", Se = {};
function Ni(t, e) {
  (Se[t] || []).forEach((r) => {
    try {
      r(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function tr(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function ir(t, e) {
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
    features: { ...t.features || {}, ...a.features || {} },
    theme: a.colors ? void 0 : a.theme || t.theme,
    cssVars: a.colors ? void 0 : a.cssVars || t.cssVars
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
const it = /* @__PURE__ */ new WeakMap();
async function xt(t, e = {}) {
  const a = it.get(t), r = async () => {
    var x, y;
    const n = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (x = e.initialConfig) != null && x.isPreview || n === "preview") && n === "preview" ? { ...ie, companyId: n, apiUrl: e.apiUrl, mockMode: !0 } : await Ja(n, e.apiUrl), h = ir(s, e);
    if (h.enabled === !1 || h.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let u = t.shadowRoot;
    u || (u = t.attachShadow({ mode: "open" })), u.innerHTML = "";
    const b = document.createElement("style");
    b.textContent = Xa, u.appendChild(b);
    const p = document.createElement("div");
    p.className = "pitaj-shadow-mount", u.appendChild(p);
    const f = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((y = t.closest) != null && y.call(t, "[data-pitaj-preview]")));
    if (f) {
      const S = document.createElement("style");
      S.textContent = er, u.appendChild(S);
    }
    Lt(
      /* @__PURE__ */ i(
        Ga,
        {
          config: h,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: f,
          initialScreen: e.initialScreen,
          onEvent: Ni
        }
      ),
      p
    );
    const v = ye();
    return v && (t.__pitajController = v), {
      controller: v,
      unmount: () => {
        Lt(null, p), u && (u.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(r, r);
  it.set(t, o);
  try {
    return await o;
  } finally {
    it.get(t) === o && it.delete(t);
  }
}
let Ke = null;
const at = {
  mount: async (t, e) => {
    const a = await xt(t, e);
    return Ke = a.unmount, a;
  },
  unmount: () => {
    Ke && (Ke(), Ke = null);
  },
  init: async (t) => {
    const e = tr(t.containerId || "pitaj-io-widget-root"), a = await xt(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return Ke = a.unmount, a;
  },
  open: () => {
    var t;
    return (t = ye()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = ye()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = ye()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = ye()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = ye()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = ye()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = ye()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    Se[t] || (Se[t] = []), Se[t].push(e);
  },
  off: (t, e) => {
    Se[t] && (Se[t] = Se[t].filter((a) => a !== e));
  },
  emit: (t, e) => {
    Ni(t, e);
  }
};
class ar extends HTMLElement {
  constructor() {
    super(...arguments);
    Ne(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", r = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", n = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", l = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await xt(this, { widgetId: a, apiUrl: r, position: o, startOpen: n, isInline: l });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Zt(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const a = t.getAttribute("data-api-url") || void 0, r = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", n = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: r, startOpen: o, isInline: n };
}
var qt;
if (typeof window < "u") {
  const t = ((qt = window.PitajIO) == null ? void 0 : qt._q) || [];
  window.PitajIO = at, customElements.get("pitaj-io") || customElements.define("pitaj-io", ar);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, at.init(e).then(() => {
      t.forEach(({ method: a, args: r }) => {
        const o = at[a];
        typeof o == "function" && o(...r);
      });
    });
  else {
    const a = document.currentScript;
    let r = Zt(a);
    if (!r) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let n = o.length - 1; n >= 0; n--) {
        const l = o[n];
        if (l.src && /widget(\.iife)?\.js/i.test(l.src) && (r = Zt(l), r))
          break;
      }
    }
    r && at.init({ containerId: "pitaj-io-widget-root", ...r });
  }
}
export {
  J as A,
  yr as B,
  lr as C,
  vr as D,
  Sr as G,
  dr as M,
  dt as P,
  _r as S,
  Ae as T,
  sr as U,
  ur as W,
  mi as a,
  na as b,
  st as c,
  R as d,
  or as e,
  pr as f,
  cr as g,
  nr as h,
  je as i,
  Mr as j,
  he as k,
  Nr as l,
  wr as m,
  jr as n,
  kr as o,
  mr as p,
  hr as q,
  fr as r,
  gr as s,
  D as t,
  i as u,
  br as v,
  xr as w,
  at as x,
  Y as y
};
