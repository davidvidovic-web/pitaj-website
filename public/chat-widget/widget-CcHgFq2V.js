var Ni = Object.defineProperty;
var zi = (t, e, a) => e in t ? Ni(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var Se = (t, e, a) => zi(t, typeof e != "symbol" ? e + "" : e, a);
var pt, Q, Qt, ze, zt, Jt, Xt, ei, xt, ft, gt, We = {}, ti = [], Ai = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, lt = Array.isArray;
function je(t, e) {
  for (var a in e) t[a] = e[a];
  return t;
}
function wt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Ci(t, e, a) {
  var n, o, r, d = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? o = e[r] : d[r] = e[r];
  if (arguments.length > 2 && (d.children = arguments.length > 3 ? pt.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) d[r] === void 0 && (d[r] = t.defaultProps[r]);
  return nt(t, d, n, o, null);
}
function nt(t, e, a, n, o) {
  var r = { type: t, props: e, key: a, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Qt, __i: -1, __u: 0 };
  return o == null && Q.vnode != null && Q.vnode(r), r;
}
function he(t) {
  return t.children;
}
function rt(t, e) {
  this.props = t, this.context = e;
}
function Ie(t, e) {
  if (e == null) return t.__ ? Ie(t.__, t.__i + 1) : null;
  for (var a; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) return a.__e;
  return typeof t.type == "function" ? Ie(t) : null;
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
  (!t.__d && (t.__d = !0) && ze.push(t) && !ct.__r++ || zt !== Q.debounceRendering) && ((zt = Q.debounceRendering) || Jt)(ct);
}
function ct() {
  for (var t, e, a, n, o, r, d, s = 1; ze.length; ) ze.length > s && ze.sort(Xt), t = ze.shift(), s = ze.length, t.__d && (a = void 0, o = (n = (e = t).__v).__e, r = [], d = [], e.__P && ((a = je({}, n)).__v = n.__v + 1, Q.vnode && Q.vnode(a), kt(e.__P, a, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? Ie(n), !!(32 & n.__u), d), a.__v = n.__v, a.__.__k[a.__i] = a, ri(r, a, d), a.__e != o && ii(a)));
  ct.__r = 0;
}
function ai(t, e, a, n, o, r, d, s, h, u, b) {
  var c, f, v, j, k, N, z = n && n.__k || ti, S = e.length;
  for (h = Ii(a, e, z, h, S), c = 0; c < S; c++) (v = a.__k[c]) != null && (f = v.__i === -1 ? We : z[v.__i] || We, v.__i = c, N = kt(t, v, f, o, r, d, s, h, u, b), j = v.__e, v.ref && f.ref != v.ref && (f.ref && yt(f.ref, null, v), b.push(v.ref, v.__c || j, v)), k == null && j != null && (k = j), 4 & v.__u || f.__k === v.__k ? h = ni(v, h, t) : typeof v.type == "function" && N !== void 0 ? h = N : j && (h = j.nextSibling), v.__u &= -7);
  return a.__e = k, h;
}
function Ii(t, e, a, n, o) {
  var r, d, s, h, u, b = a.length, c = b, f = 0;
  for (t.__k = new Array(o), r = 0; r < o; r++) (d = e[r]) != null && typeof d != "boolean" && typeof d != "function" ? (h = r + f, (d = t.__k[r] = typeof d == "string" || typeof d == "number" || typeof d == "bigint" || d.constructor == String ? nt(null, d, null, null, null) : lt(d) ? nt(he, { children: d }, null, null, null) : d.constructor === void 0 && d.__b > 0 ? nt(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d).__ = t, d.__b = t.__b + 1, s = null, (u = d.__i = Ti(d, a, h, c)) !== -1 && (c--, (s = a[u]) && (s.__u |= 2)), s == null || s.__v === null ? (u == -1 && (o > b ? f-- : o < b && f++), typeof d.type != "function" && (d.__u |= 4)) : u != h && (u == h - 1 ? f-- : u == h + 1 ? f++ : (u > h ? f-- : f++, d.__u |= 4))) : t.__k[r] = null;
  if (c) for (r = 0; r < b; r++) (s = a[r]) != null && !(2 & s.__u) && (s.__e == n && (n = Ie(s)), si(s, s));
  return n;
}
function ni(t, e, a) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = ni(n[o], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !a.contains(e) && (e = Ie(t)), a.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Ti(t, e, a, n) {
  var o, r, d = t.key, s = t.type, h = e[a];
  if (h === null && t.key == null || h && d == h.key && s === h.type && !(2 & h.__u)) return a;
  if (n > (h != null && !(2 & h.__u) ? 1 : 0)) for (o = a - 1, r = a + 1; o >= 0 || r < e.length; ) {
    if (o >= 0) {
      if ((h = e[o]) && !(2 & h.__u) && d == h.key && s === h.type) return o;
      o--;
    }
    if (r < e.length) {
      if ((h = e[r]) && !(2 & h.__u) && d == h.key && s === h.type) return r;
      r++;
    }
  }
  return -1;
}
function Ct(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || Ai.test(e) ? a : a + "px";
}
function et(t, e, a, n, o) {
  var r;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) a && e in a || Ct(t.style, e, "");
    if (a) for (e in a) n && a[e] === n[e] || Ct(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(ei, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = a, a ? n ? a.t = n.t : (a.t = xt, t.addEventListener(e, r ? gt : ft, r)) : t.removeEventListener(e, r ? gt : ft, r);
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
function It(t) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + t];
      if (e.u == null) e.u = xt++;
      else if (e.u < a.t) return;
      return a(Q.event ? Q.event(e) : e);
    }
  };
}
function kt(t, e, a, n, o, r, d, s, h, u) {
  var b, c, f, v, j, k, N, z, S, V, E, p, A, C, y, F, T, I = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (h = !!(32 & a.__u), r = [s = e.__e = a.__e]), (b = Q.__b) && b(e);
  e: if (typeof I == "function") try {
    if (z = e.props, S = "prototype" in I && I.prototype.render, V = (b = I.contextType) && n[b.__c], E = b ? V ? V.props.value : b.__ : n, a.__c ? N = (c = e.__c = a.__c).__ = c.__E : (S ? e.__c = c = new I(z, E) : (e.__c = c = new rt(z, E), c.constructor = I, c.render = Pi), V && V.sub(c), c.props = z, c.state || (c.state = {}), c.context = E, c.__n = n, f = c.__d = !0, c.__h = [], c._sb = []), S && c.__s == null && (c.__s = c.state), S && I.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = je({}, c.__s)), je(c.__s, I.getDerivedStateFromProps(z, c.__s))), v = c.props, j = c.state, c.__v = e, f) S && I.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), S && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (S && I.getDerivedStateFromProps == null && z !== v && c.componentWillReceiveProps != null && c.componentWillReceiveProps(z, E), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(z, c.__s, E) === !1 || e.__v == a.__v)) {
        for (e.__v != a.__v && (c.props = z, c.state = c.__s, c.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(L) {
          L && (L.__ = e);
        }), p = 0; p < c._sb.length; p++) c.__h.push(c._sb[p]);
        c._sb = [], c.__h.length && d.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(z, c.__s, E), S && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(v, j, k);
      });
    }
    if (c.context = E, c.props = z, c.__P = t, c.__e = !1, A = Q.__r, C = 0, S) {
      for (c.state = c.__s, c.__d = !1, A && A(e), b = c.render(c.props, c.state, c.context), y = 0; y < c._sb.length; y++) c.__h.push(c._sb[y]);
      c._sb = [];
    } else do
      c.__d = !1, A && A(e), b = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++C < 25);
    c.state = c.__s, c.getChildContext != null && (n = je(je({}, n), c.getChildContext())), S && !f && c.getSnapshotBeforeUpdate != null && (k = c.getSnapshotBeforeUpdate(v, j)), F = b, b != null && b.type === he && b.key == null && (F = oi(b.props.children)), s = ai(t, lt(F) ? F : [F], e, a, n, o, r, d, s, h, u), c.base = e.__e, e.__u &= -161, c.__h.length && d.push(c), N && (c.__E = c.__ = null);
  } catch (L) {
    if (e.__v = null, h || r != null) if (L.then) {
      for (e.__u |= h ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      r[r.indexOf(s)] = null, e.__e = s;
    } else for (T = r.length; T--; ) wt(r[T]);
    else e.__e = a.__e, e.__k = a.__k;
    Q.__e(L, e, a);
  }
  else r == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : s = e.__e = Li(a.__e, e, a, n, o, r, d, h, u);
  return (b = Q.diffed) && b(e), 128 & e.__u ? void 0 : s;
}
function ri(t, e, a) {
  for (var n = 0; n < a.length; n++) yt(a[n], a[++n], a[++n]);
  Q.__c && Q.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      Q.__e(r, o.__v);
    }
  });
}
function oi(t) {
  return typeof t != "object" || t == null ? t : lt(t) ? t.map(oi) : je({}, t);
}
function Li(t, e, a, n, o, r, d, s, h) {
  var u, b, c, f, v, j, k, N = a.props, z = e.props, S = e.type;
  if (S == "svg" ? o = "http://www.w3.org/2000/svg" : S == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (u = 0; u < r.length; u++) if ((v = r[u]) && "setAttribute" in v == !!S && (S ? v.localName == S : v.nodeType == 3)) {
      t = v, r[u] = null;
      break;
    }
  }
  if (t == null) {
    if (S == null) return document.createTextNode(z);
    t = document.createElementNS(o, S, z.is && z), s && (Q.__m && Q.__m(e, r), s = !1), r = null;
  }
  if (S === null) N === z || s && t.data === z || (t.data = z);
  else {
    if (r = r && pt.call(t.childNodes), N = a.props || We, !s && r != null) for (N = {}, u = 0; u < t.attributes.length; u++) N[(v = t.attributes[u]).name] = v.value;
    for (u in N) if (v = N[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = v;
      else if (!(u in z)) {
        if (u == "value" && "defaultValue" in z || u == "checked" && "defaultChecked" in z) continue;
        et(t, u, null, v, o);
      }
    }
    for (u in z) v = z[u], u == "children" ? f = v : u == "dangerouslySetInnerHTML" ? b = v : u == "value" ? j = v : u == "checked" ? k = v : s && typeof v != "function" || N[u] === v || et(t, u, v, N[u], o);
    if (b) s || c && (b.__html === c.__html || b.__html === t.innerHTML) || (t.innerHTML = b.__html), e.__k = [];
    else if (c && (t.innerHTML = ""), ai(e.type === "template" ? t.content : t, lt(f) ? f : [f], e, a, n, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, d, r ? r[0] : a.__k && Ie(a, 0), s, h), r != null) for (u = r.length; u--; ) wt(r[u]);
    s || (u = "value", S == "progress" && j == null ? t.removeAttribute("value") : j !== void 0 && (j !== t[u] || S == "progress" && !j || S == "option" && j !== N[u]) && et(t, u, j, N[u], o), u = "checked", k !== void 0 && k !== t[u] && et(t, u, k, N[u], o));
  }
  return t;
}
function yt(t, e, a) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    Q.__e(o, a);
  }
}
function si(t, e, a) {
  var n, o;
  if (Q.unmount && Q.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || yt(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      Q.__e(r, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && si(n[o], e, a || typeof t.type != "function");
  a || wt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Pi(t, e, a) {
  return this.constructor(t, a);
}
function Tt(t, e, a) {
  var n, o, r, d;
  e == document && (e = document.documentElement), Q.__ && Q.__(t, e), o = (n = !1) ? null : e.__k, r = [], d = [], kt(e, t = e.__k = Ci(he, null, [t]), o || We, We, e.namespaceURI, o ? null : e.firstChild ? pt.call(e.childNodes) : null, r, o ? o.__e : e.firstChild, n, d), ri(r, t, d);
}
pt = ti.slice, Q = { __e: function(t, e, a, n) {
  for (var o, r, d; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), d = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), d = o.__d), d) return o.__E = o;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Qt = 0, rt.prototype.setState = function(t, e) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof t == "function" && (t = t(je({}, a), this.props)), t && je(a, t), t != null && this.__v && (e && this._sb.push(e), At(this));
}, rt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), At(this));
}, rt.prototype.render = he, ze = [], Jt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Xt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, ct.__r = 0, ei = /(PointerCapture)$|Capture$/i, xt = 0, ft = It(!1), gt = It(!0);
var Ei = 0;
function i(t, e, a, n, o, r) {
  e || (e = {});
  var d, s, h = e;
  if ("ref" in h) for (s in h = {}, e) s == "ref" ? d = e[s] : h[s] = e[s];
  var u = { type: t, props: h, key: a, ref: d, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ei, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof t == "function" && (d = t.defaultProps)) for (s in d) h[s] === void 0 && (h[s] = d[s]);
  return Q.vnode && Q.vnode(u), u;
}
var qe, oe, ut, Lt, Qe = 0, ci = [], pe = Q, Pt = pe.__b, Et = pe.__r, Dt = pe.diffed, Ht = pe.__c, $t = pe.unmount, Bt = pe.__;
function _t(t, e) {
  pe.__h && pe.__h(oe, t, Qe || e), Qe = 0;
  var a = oe.__H || (oe.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function R(t) {
  return Qe = 1, Di(li, t);
}
function Di(t, e, a) {
  var n = _t(qe++, 2);
  if (n.t = t, !n.__c && (n.__ = [li(void 0, e), function(s) {
    var h = n.__N ? n.__N[0] : n.__[0], u = n.t(h, s);
    h !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = oe, !oe.__f)) {
    var o = function(s, h, u) {
      if (!n.__c.__H) return !0;
      var b = n.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (b.every(function(f) {
        return !f.__N;
      })) return !r || r.call(this, s, h, u);
      var c = n.__c.props !== s;
      return b.forEach(function(f) {
        if (f.__N) {
          var v = f.__[0];
          f.__ = f.__N, f.__N = void 0, v !== f.__[0] && (c = !0);
        }
      }), r && r.call(this, s, h, u) || c;
    };
    oe.__f = !0;
    var r = oe.shouldComponentUpdate, d = oe.componentWillUpdate;
    oe.componentWillUpdate = function(s, h, u) {
      if (this.__e) {
        var b = r;
        r = void 0, o(s, h, u), r = b;
      }
      d && d.call(this, s, h, u);
    }, oe.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function G(t, e) {
  var a = _t(qe++, 3);
  !pe.__s && pi(a.__H, e) && (a.__ = t, a.u = e, oe.__H.__h.push(a));
}
function J(t) {
  return Qe = 5, Ae(function() {
    return { current: t };
  }, []);
}
function Ae(t, e) {
  var a = _t(qe++, 7);
  return pi(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function ee(t, e) {
  return Qe = 8, Ae(function() {
    return t;
  }, e);
}
function Hi() {
  for (var t; t = ci.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(ot), t.__H.__h.forEach(bt), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], pe.__e(e, t.__v);
  }
}
pe.__b = function(t) {
  oe = null, Pt && Pt(t);
}, pe.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Bt && Bt(t, e);
}, pe.__r = function(t) {
  Et && Et(t), qe = 0;
  var e = (oe = t.__c).__H;
  e && (ut === oe ? (e.__h = [], oe.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.forEach(ot), e.__h.forEach(bt), e.__h = [], qe = 0)), ut = oe;
}, pe.diffed = function(t) {
  Dt && Dt(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ci.push(e) !== 1 && Lt === pe.requestAnimationFrame || ((Lt = pe.requestAnimationFrame) || $i)(Hi)), e.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), ut = oe = null;
}, pe.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(ot), a.__h = a.__h.filter(function(n) {
        return !n.__ || bt(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], pe.__e(n, a.__v);
    }
  }), Ht && Ht(t, e);
}, pe.unmount = function(t) {
  $t && $t(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.forEach(function(n) {
    try {
      ot(n);
    } catch (o) {
      e = o;
    }
  }), a.__H = void 0, e && pe.__e(e, a.__v));
};
var Ft = typeof requestAnimationFrame == "function";
function $i(t) {
  var e, a = function() {
    clearTimeout(n), Ft && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(a, 100);
  Ft && (e = requestAnimationFrame(a));
}
function ot(t) {
  var e = oe, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), oe = e;
}
function bt(t) {
  var e = oe;
  t.__c = t.__(), oe = e;
}
function pi(t, e) {
  return !t || t.length !== e.length || e.some(function(a, n) {
    return a !== t[n];
  });
}
function li(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function Bi(t, e) {
  const a = t.body;
  if (!a)
    throw new Error("Response body is null");
  const n = a.getReader(), o = new TextDecoder("utf-8");
  let r = "";
  try {
    for (; ; ) {
      const { done: d, value: s } = await n.read();
      if (d)
        break;
      r += o.decode(s, { stream: !0 });
      const h = r.split(/\r?\n/);
      r = h.pop() || "";
      for (const u of h) {
        const b = u.trim();
        if (!(!b || b.startsWith(":")) && b.startsWith("data:")) {
          const c = b.slice(5).trim();
          if (c === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const f = JSON.parse(c);
            if (typeof f == "string")
              e.onChunk(f);
            else if (f && typeof f == "object") {
              (f.chunk || f.token || f.content || f.text) && e.onChunk(f.chunk || f.token || f.content || f.text), f.sources && Array.isArray(f.sources) && e.onSources && e.onSources(f.sources);
              const v = f.suggestedQuestions ?? f.suggested_questions;
              Array.isArray(v) && v.length > 0 && e.onSuggestedQuestions && e.onSuggestedQuestions(v), e.onConversationId && (f.conversation_id !== void 0 || f.conversationId !== void 0) && e.onConversationId(
                f.conversation_id ?? f.conversationId
              );
              const j = f.ticket_number ?? f.ticketNumber;
              e.onTicketNumber && j !== void 0 && j !== null && String(j).trim() !== "" && String(j).trim() !== "undefined" && String(j).trim() !== "null" && e.onTicketNumber(
                String(j).trim()
              ), e.onActionTrigger && f.triggered_action && typeof f.triggered_action == "object" && e.onActionTrigger(f.triggered_action);
            }
          } catch {
            e.onChunk(c);
          }
        }
      }
    }
    e.onDone && e.onDone();
  } catch (d) {
    if (e.onError)
      e.onError(d);
    else
      throw d;
  }
}
class di extends Error {
  constructor(a, n = 60, o) {
    super(a);
    Se(this, "retryAfterSeconds");
    Se(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = o;
  }
}
class ui extends Error {
  constructor(a, n, o, r) {
    super(a);
    Se(this, "status");
    Se(this, "code");
    Se(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = o, this.retryAfterSeconds = r;
  }
}
function Fi(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function Ui(t, e) {
  const a = await t.json().catch(() => null);
  mi(t.status, a, e, t.headers.get("Retry-After"));
}
function mi(t, e, a, n) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, r = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, d = Fi((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new di(r, d, o) : new ui(r, t, o, d);
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
        const n = JSON.parse(a);
        t = hi(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = Mt(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Ri(t)), { code: t, name: e };
}
const Ut = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Vi(t, e, a, n) {
  var h;
  const o = (n == null ? void 0 : n.action) || (a && a.length > 0 ? a[0] : null);
  if (o && e.onActionTrigger) {
    const c = (!!(o.widget_id || o.widget || n != null && n.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let f = 0; f < c.length; f++) {
      const v = c[f] + (f < c.length - 1 ? " " : "");
      e.onChunk(v), await new Promise((j) => setTimeout(j, 20));
    }
    e.onActionTrigger({
      id: o.id,
      name: o.name,
      form_id: o.form_id,
      widget_id: o.widget_id,
      widget: o.widget || (n == null ? void 0 : n.widget) || null
    }), e.onDone && e.onDone();
    return;
  }
  const r = `${Ut[Math.floor(Math.random() * Ut.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, d = ((h = n == null ? void 0 : n.content) == null ? void 0 : h.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = r.split(" ");
  for (let u = 0; u < s.length; u++) {
    const b = s[u] + (u < s.length - 1 ? " " : "");
    e.onChunk(b), await new Promise((c) => setTimeout(c, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && d.length > 0 && e.onSuggestedQuestions(d), e.onDone && e.onDone();
}
async function Ki(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: n,
    message: o,
    forceNewConversation: r,
    apiUrl: d,
    mockMode: s,
    visitorName: h,
    visitorEmail: u,
    visitorPhone: b,
    visitorCountryCode: c,
    visitorCountryName: f,
    actions: v,
    previewDraft: j,
    callbacks: k
  } = t;
  if (s || !e || e === "default") {
    await Vi(o, k, v, j);
    return;
  }
  const N = (d || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), z = Oi(), S = hi(c) ?? z.code ?? void 0, V = Mt(f) ?? z.name ?? void 0, E = `${N}/api/widget/${e}/chat`, p = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, A = await fetch(E, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: p,
      force_new_conversation: r === !0,
      visitor_id: n,
      visitor_language: t.visitorLanguage || void 0,
      visitor_name: h || void 0,
      visitor_email: u || void 0,
      visitor_phone: b || void 0,
      visitor_country_code: S,
      visitor_country_name: V
    })
  });
  if (A.ok || await Ui(A, `API greška (${A.status})`), (A.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Bi(A, k);
  else {
    const y = await A.json(), F = y.answer || y.message || "";
    y.conversation_id !== void 0 && k.onConversationId && k.onConversationId(y.conversation_id);
    const T = y.ticket_number ?? y.ticketNumber;
    if (T != null && String(T).trim() !== "" && String(T).trim() !== "undefined" && String(T).trim() !== "null" && k.onTicketNumber && k.onTicketNumber(String(T).trim()), y.triggered_action && k.onActionTrigger && k.onActionTrigger(y.triggered_action), F && F.trim()) {
      const L = F.split(" ");
      for (let K = 0; K < L.length; K++) {
        const ae = L[K] + (K < L.length - 1 ? " " : "");
        k.onChunk(ae), await new Promise((ne) => setTimeout(ne, 15));
      }
    }
    const I = y.suggestedQuestions ?? y.suggested_questions;
    Array.isArray(I) && I.length > 0 && k.onSuggestedQuestions && k.onSuggestedQuestions(I), k.onDone && k.onDone();
  }
}
async function vt(t) {
  const { widgetId: e, visitorId: a, apiUrl: n, status: o, page: r = 1, perPage: d = 15 } = t, s = (n || "").replace(/\/$/, ""), h = new URLSearchParams({
    visitor_id: a,
    page: String(r),
    per_page: String(d)
  });
  o && h.set("status", o);
  const u = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/tickets?${h}`), b = await u.json().catch(() => null);
  if (!u.ok) throw new Error(b && "error" in b ? b.error : "Tikete nije moguće učitati.");
  const c = (b == null ? void 0 : b.data) || [], f = c.map((k) => ({
    id: k.id,
    ticketNumber: k.ticket_number,
    conversationId: k.conversation_id,
    isResolved: !!k.is_resolved,
    updatedAt: k.updated_at,
    messages: (k.messages || []).map((N) => {
      var z;
      return {
        id: String(N.id),
        content: N.content,
        sender: N.role === "user" ? "user" : "ai",
        timestamp: N.created_at,
        status: "sent",
        suggestedQuestions: ((z = N.meta_json) == null ? void 0 : z.suggested_questions) || void 0
      };
    })
  })), v = b == null ? void 0 : b.meta, j = (v == null ? void 0 : v.has_more) !== void 0 ? !!v.has_more : c.length >= d;
  return {
    tickets: f,
    hasMore: j,
    total: v == null ? void 0 : v.total,
    currentPage: (v == null ? void 0 : v.current_page) ?? r
  };
}
async function Yi(t, e, a) {
  return (await vt({ widgetId: t, visitorId: e, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function Zi(t, e, a, n, o) {
  const r = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !r)
    return await new Promise((h) => setTimeout(h, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const d = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await fetch(`${d}/api/widget/${t}/conversations/${e}/rating`, {
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
  const n = (a && a.length > 0 ? a : [e]).map((c) => c.trim().toLowerCase()), o = (e || "bs").trim().toLowerCase();
  let r = "";
  if (t === "website" ? typeof document < "u" && (r = ((u = document.documentElement) == null ? void 0 : u.lang) || ((b = document.querySelector("html")) == null ? void 0 : b.getAttribute("lang")) || "") : typeof navigator < "u" && (r = navigator.language || navigator.languages && navigator.languages[0] || ""), !r || typeof r != "string")
    return o;
  let h = r.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (h === "hr" || h === "sr") && !n.includes(h) && n.includes("bs") && (h = "bs"), n.includes(h) ? h : o;
}
const Ot = "pitaj_io_visitor_id", Gi = "chat_direkt_visitor_id", Wi = "pitaj_io_visitor_meta", qi = "chat_direkt_visitor_meta";
function fi(t) {
  return `pitaj_io_convs_${t}`;
}
function Qi(t) {
  return `chat_direkt_convs_${t}`;
}
function Ji() {
  try {
    let t = localStorage.getItem(Ot) || localStorage.getItem(Gi);
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
function Kt(t) {
  var o, r, d, s, h, u, b, c, f, v, j;
  const e = t.previewDraft, a = (/* @__PURE__ */ new Date()).toISOString(), n = (e == null ? void 0 : e.initialStep) || "idle";
  if (n === "idle") {
    const k = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", N = (o = e == null ? void 0 : e.action) != null && o.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: k,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: k,
            sender: "ai",
            timestamp: a,
            status: "sent",
            suggestedQuestions: N.length > 0 ? N : void 0
          }
        ]
      }
    ];
  }
  if (n === "form") {
    const k = (e == null ? void 0 : e.simulatedUserMessage) || ((r = e == null ? void 0 : e.action) == null ? void 0 : r.trigger_hint) || "Pokreni akciju", z = !!((d = e == null ? void 0 : e.action) != null && d.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", S = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
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
            content: k,
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
            widget: S
          }
        ]
      }
    ];
  }
  if (n === "submitted") {
    const k = (e == null ? void 0 : e.simulatedUserMessage) || ((u = e == null ? void 0 : e.action) == null ? void 0 : u.trigger_hint) || "Pokreni akciju", N = ((b = e == null ? void 0 : e.form) == null ? void 0 : b.name) || ((c = e == null ? void 0 : e.action) == null ? void 0 : c.name) || "Forma", z = ((f = e == null ? void 0 : e.form) == null ? void 0 : f.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: N,
        preview: z,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: k,
            sender: "user",
            timestamp: new Date(Date.now() - 4e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-form-sub",
            content: `Forma: ${N}
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
  if (n === "dismissed") {
    const k = (e == null ? void 0 : e.simulatedUserMessage) || ((v = e == null ? void 0 : e.action) == null ? void 0 : v.trigger_hint) || "Pokreni akciju", N = "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((j = e == null ? void 0 : e.action) == null ? void 0 : j.name) || "Pregled akcije",
        preview: N,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: k,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-dismiss",
            content: N,
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
  var ce, de, ge, ue, Ce, we, ye, _e, Me, Te, Le, Pe, Ee, De, He, $e, Be, Fe, Ue, Re;
  const a = !!(t.isPreview || t.previewDraft), [n, o] = R(t), [r, d] = R((e == null ? void 0 : e.startOpen) ?? !1), [s, h] = R(
    (e == null ? void 0 : e.initialScreen) ?? (a ? "conversation" : "new-conversation")
  ), [u, b] = R(
    () => a ? Kt(t) : Vt(t.companyId)
  ), [c, f] = R(() => {
    if (a) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const w = Vt(t.companyId);
      return w.length > 0 ? w[0].id : null;
    }
    return null;
  }), [v, j] = R(!1), [k, N] = R(null), [z, S] = R(null), [V, E] = R(
    () => {
      var w, l, g;
      return Rt(
        (w = t.content) == null ? void 0 : w.languageSource,
        ((l = t.content) == null ? void 0 : l.defaultLanguage) || "bs",
        ((g = t.content) == null ? void 0 : g.supportedLanguages) || ["bs"]
      );
    }
  );
  G(() => {
    var l, g, m;
    const w = Rt(
      (l = n.content) == null ? void 0 : l.languageSource,
      ((g = n.content) == null ? void 0 : g.defaultLanguage) || "bs",
      ((m = n.content) == null ? void 0 : m.supportedLanguages) || ["bs"]
    );
    E(w);
  }, [
    (ce = n.content) == null ? void 0 : ce.languageSource,
    (de = n.content) == null ? void 0 : de.defaultLanguage,
    (ge = n.content) == null ? void 0 : ge.supportedLanguages
  ]);
  const p = J(Ji()), [A, C] = R(() => {
    try {
      const w = localStorage.getItem(Wi) || localStorage.getItem(qi);
      if (w) {
        const l = JSON.parse(w), g = {};
        return typeof l.name == "string" && (g.name = l.name), typeof l.email == "string" && (g.email = l.email), typeof l.phone == "string" && (g.phone = l.phone), g;
      }
    } catch (w) {
      console.warn("[Pitaj.io] Error reading visitor meta", w);
    }
    return {};
  }), y = J(e == null ? void 0 : e.emitEvent);
  y.current = e == null ? void 0 : e.emitEvent;
  const F = J(e == null ? void 0 : e.onActionTrigger);
  F.current = e == null ? void 0 : e.onActionTrigger;
  const T = ee((w, l) => {
    const g = Number.isFinite(w) ? Math.max(1, Math.floor(w)) : 60;
    N((m) => m === null ? g : Math.max(m, g)), S(l || `Previše zahtjeva. Molimo sačekajte ${g}s.`);
  }, []), I = ee((w) => {
    if (w) {
      if (w === "WIDGET_CHAT_DISABLED") {
        o((l) => ({ ...l, chatAvailable: !1 })), S("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (w === "WIDGET_TRANSCRIBE_DISABLED") {
        o((l) => ({ ...l, transcribeAvailable: !1 })), S("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      w === "WIDGET_FORMS_DISABLED" && (o((l) => ({ ...l, formsAvailable: !1, formsEnabled: !1 })), S("Forme su trenutno privremeno nedostupne."));
    }
  }, []), L = ee((w, l = "Došlo je do greške pri obradi zahtjeva.") => {
    var m, M, H, Y;
    if (w instanceof di) {
      T(w.retryAfterSeconds, w.message), (m = y.current) == null || m.call(y, "error_occurred", { code: w.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (w instanceof ui) {
      if (w.code === "COUNTRY_BLOCKED") {
        o(($) => ({ ...$, chatAvailable: !1 })), S(w.message || "Pristup nije dozvoljen u vašoj regiji."), (M = y.current) == null || M.call(y, "error_occurred", { status: w.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      I(w.code), S(w.message || l), (H = y.current) == null || H.call(y, "error_occurred", { status: w.status, code: w.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let g = w instanceof Error ? w.message : l;
    !g || g === "Failed to fetch" || g.includes("NetworkError") ? g = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : g.includes("404") ? g = "Traženi razgovor ili podaci nisu pronađeni." : (g.includes("500") || g.includes("502") || g.includes("503")) && (g = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), S(g || l), (Y = y.current) == null || Y.call(y, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [T, I]);
  G(() => {
    n.isPreview || n.mockMode || n.companyId === "preview" || ia(n.companyId, u);
  }, [u, n.companyId, n.isPreview, n.mockMode]), G(() => {
    if (n.isPreview || n.previewDraft) {
      const w = Kt(n);
      b(w), f("preview-conv-1"), h("conversation");
    }
  }, [
    n.isPreview,
    (ue = n.previewDraft) == null ? void 0 : ue.initialStep,
    (we = (Ce = n.previewDraft) == null ? void 0 : Ce.action) == null ? void 0 : we.id,
    (_e = (ye = n.previewDraft) == null ? void 0 : ye.action) == null ? void 0 : _e.name,
    (Te = (Me = n.previewDraft) == null ? void 0 : Me.action) == null ? void 0 : Te.trigger_hint,
    (Pe = (Le = n.previewDraft) == null ? void 0 : Le.form) == null ? void 0 : Pe.id,
    (De = (Ee = n.previewDraft) == null ? void 0 : Ee.form) == null ? void 0 : De.name,
    ($e = (He = n.previewDraft) == null ? void 0 : He.form) == null ? void 0 : $e.success_message,
    (Fe = (Be = n.previewDraft) == null ? void 0 : Be.widget) == null ? void 0 : Fe.id,
    (Re = (Ue = n.previewDraft) == null ? void 0 : Ue.widget) == null ? void 0 : Re.type
  ]), G(() => {
    if (k === null || k <= 0) return;
    const w = setInterval(() => {
      N((l) => l && l > 1 ? l - 1 : null);
    }, 1e3);
    return () => clearInterval(w);
  }, [k]), G(() => {
    if (!n.companyId || n.mockMode) return;
    let w = !0;
    return Yi(n.companyId, p.current, n.apiUrl).then((l) => {
      !w || !l || l.length === 0 || b((g) => {
        let m = !1;
        const M = g.map((H) => {
          const Y = l.find(($) => String($.id) === H.id);
          return Y && Y.ticketNumber && H.ticketNumber !== Y.ticketNumber ? (m = !0, { ...H, ticketNumber: Y.ticketNumber }) : H;
        });
        return m ? M : g;
      });
    }).catch(() => {
    }), () => {
      w = !1;
    };
  }, [n.companyId, n.apiUrl, n.mockMode]);
  const K = u.find((w) => w.id === c) || null, ae = u.reduce((w, l) => w + (l.unread || 0), 0), ne = ee((w) => {
    d((l) => {
      var g;
      return l === w ? l : ((g = y.current) == null || g.call(y, w ? "widget_opened" : "widget_closed"), w);
    });
  }, []), se = ee((w) => {
    h((l) => {
      var g;
      return l === w ? l : ((g = y.current) == null || g.call(y, "screen_changed", { screen: w }), w);
    });
  }, []), X = ee((w) => {
    var l;
    f(w.id), b((g) => g.some((M) => M.id === w.id) ? g.map((M) => M.id === w.id ? { ...M, ...w, unread: 0, status: w.status || "active" } : M) : [{ ...w, unread: 0, status: w.status || "active" }, ...g]), h("conversation"), (l = y.current) == null || l.call(y, "conversation_selected", { conversationId: w.id });
  }, []), q = ee(() => {
    var w;
    b(
      (l) => l.map((g) => g.id === c ? { ...g, status: "ended" } : g)
    ), f(null), h("new-conversation"), (w = y.current) == null || w.call(y, "conversation_ended", { conversationId: c });
  }, [c]), _ = ee((w) => {
    b((l) => l.filter((g) => g.id !== w)), f((l) => l === w ? null : l), c === w && h("new-conversation");
  }, [c]), B = ee((w) => {
    var H;
    if (n.chatAvailable === !1) {
      S("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (k !== null) {
      S(`Previše zahtjeva. Molimo sačekajte ${k}s.`);
      return;
    }
    const l = "conv-" + Date.now(), g = (/* @__PURE__ */ new Date()).toISOString(), m = w ? w.length > 40 ? w.slice(0, 40) + "…" : w : "Novo ćaskanje", M = {
      id: l,
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
    b((Y) => [M, ...Y]), f(l), h("conversation"), (H = y.current) == null || H.call(y, "conversation_started", { conversationId: l, initialMessage: w }), w && te(l, w, [M.messages[0]], !0);
  }, [n.apiUrl, n.chatAvailable, n.companyId, n.mockMode, k, A]), te = async (w, l, g, m = !1) => {
    var Y;
    j(!0), S(null);
    const M = "ai-msg-" + Date.now(), H = {
      id: M,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    b(
      ($) => $.map((W) => W.id !== w ? W : {
        ...W,
        preview: l,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...W.messages.filter((P) => P.id !== M), H]
      })
    ), (Y = y.current) == null || Y.call(y, "stream_started", { conversationId: w });
    try {
      await Ki({
        companyId: n.companyId,
        conversationId: w,
        visitorId: p.current,
        visitorLanguage: V,
        message: l,
        forceNewConversation: m || w.startsWith("conv-"),
        apiUrl: n.apiUrl,
        mockMode: n.mockMode || n.isPreview,
        visitorName: A.name,
        visitorEmail: A.email,
        visitorPhone: A.phone,
        actions: n.actions,
        previewDraft: n.previewDraft,
        callbacks: {
          onConversationId: ($) => {
            const W = w, P = String($);
            w = P, f(P), b(
              (le) => le.map((U) => U.id === W || U.messages.some((be) => be.id === M) ? { ...U, id: P } : U)
            );
          },
          onTicketNumber: ($) => {
            const W = $ && String($).trim() !== "" && String($).trim() !== "undefined" && String($).trim() !== "null" ? String($).trim() : null;
            W && b(
              (P) => P.map((le) => le.id === w || le.messages.some((be) => be.id === M) ? { ...le, ticketNumber: W } : le)
            );
          },
          onActionTrigger: ($) => {
            var P;
            const W = $.widget || $.triggered_widget || ($.widget_id && n.widgets ? n.widgets.find((le) => le.id === $.widget_id) : null) || null;
            W && b(
              (le) => le.map((U) => U.id === w || U.messages.some((fe) => fe.id === M) ? {
                ...U,
                messages: U.messages.map(
                  (fe) => fe.id === M ? { ...fe, widget: W } : fe
                )
              } : U)
            ), (P = F.current) == null || P.call(F, $);
          },
          onChunk: ($) => {
            b(
              (W) => W.map((P) => P.id === w || P.messages.some((U) => U.id === M) ? {
                ...P,
                messages: P.messages.map(
                  (U) => U.id === M ? { ...U, content: U.content + $ } : U
                )
              } : P)
            );
          },
          onSources: ($) => {
            b(
              (W) => W.map((P) => P.id === w || P.messages.some((U) => U.id === M) ? {
                ...P,
                messages: P.messages.map(
                  (U) => U.id === M ? { ...U, sources: $ } : U
                )
              } : P)
            );
          },
          onSuggestedQuestions: ($) => {
            b(
              (W) => W.map((P) => P.id === w || P.messages.some((U) => U.id === M) ? {
                ...P,
                messages: P.messages.map(
                  (U) => U.id === M ? { ...U, suggestedQuestions: $ } : U
                )
              } : P)
            );
          },
          onDone: () => {
            var $;
            b(
              (W) => W.map((P) => {
                var Oe, Ve;
                if (!(P.id === w || P.messages.some((ve) => ve.id === M))) return P;
                const U = P.messages.find((ve) => ve.id === M), be = (Oe = U == null ? void 0 : U.widget) == null ? void 0 : Oe.name, fe = (Ve = U == null ? void 0 : U.content) == null ? void 0 : Ve.trim(), Xe = fe ? fe.slice(0, 70) : be ? `[${be}]` : P.preview;
                return {
                  ...P,
                  preview: Xe,
                  messages: P.messages.map(
                    (ve) => ve.id === M ? { ...ve, isStreaming: !1 } : ve
                  )
                };
              })
            ), j(!1), ($ = y.current) == null || $.call(y, "stream_completed", { conversationId: w });
          },
          onError: ($) => {
            console.error("[Pitaj.io] Stream error:", $), S($.message || "Došlo je do greške u komunikaciji."), j(!1);
          }
        }
      });
    } catch ($) {
      j(!1), L($, "Greška pri slanju poruke.");
    }
  }, x = ee((w) => {
    var M;
    const l = w.trim();
    if (!l || v || n.chatAvailable === !1 || k !== null) return;
    if (!c) {
      B(l);
      return;
    }
    const m = {
      id: "usr-msg-" + Date.now(),
      content: l,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    b(
      (H) => H.map((Y) => Y.id !== c ? Y : {
        ...Y,
        preview: l,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...Y.messages, m]
      })
    ), (M = y.current) == null || M.call(y, "message_sent", { conversationId: c, content: l }), te(c, l, K ? K.messages : []);
  }, [c, v, B, K, n.chatAvailable, n.companyId, n.apiUrl, n.mockMode, k]), O = ee(
    async (w, l, g) => {
      var m;
      if (!n.mockMode)
        try {
          await Zi(
            n.companyId,
            w,
            l,
            n.apiUrl,
            n.mockMode
          );
        } catch (M) {
          console.error("[Pitaj.io] Failed to submit rating:", M);
          const H = (M == null ? void 0 : M.status) === 404 ? "Razgovor ili tiket više nije dostupan." : M != null && M.message && !M.message.includes("failed") && !M.message.includes("404") ? M.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(H);
        }
      b(
        (M) => M.map(
          (H) => H.id === w ? { ...H, satisfaction: l, ratingScore: g ?? H.ratingScore } : H
        )
      ), (m = y.current) == null || m.call(y, "rating_submitted", {
        conversationId: w,
        satisfaction: l,
        score: g
      });
    },
    [n.companyId, n.apiUrl, n.mockMode]
  ), Z = ee(
    (w, l, g = "user") => {
      const m = l.trim();
      if (!m) return;
      const M = (/* @__PURE__ */ new Date()).toISOString(), H = `conv-${Date.now()}`, Y = typeof w == "string" && w.trim().length > 0 ? w : H, $ = {
        id: `local-${g}-msg-${Date.now()}`,
        content: m,
        sender: g,
        timestamp: M,
        status: "sent"
      };
      b(
        (W) => W.some((P) => P.id === Y) ? W.map((P) => P.id !== Y ? P : {
          ...P,
          preview: m.length > 70 ? `${m.slice(0, 70)}…` : m,
          timestamp: M,
          messages: [...P.messages, $]
        }) : [
          {
            id: Y,
            title: "Forma",
            preview: m.length > 70 ? `${m.slice(0, 70)}…` : m,
            timestamp: M,
            unread: 0,
            messages: [$],
            status: "active"
          },
          ...W
        ]
      ), f(Y), h("conversation");
    },
    []
  ), re = (w) => {
    var l;
    return !!((l = w.messages) != null && l.some((g) => g.sender === "ai"));
  };
  return {
    config: n,
    setConfig: o,
    isOpen: r,
    setIsOpen: ne,
    screen: s,
    setScreen: se,
    conversations: u,
    activeConversation: K,
    activeConversationId: c,
    visitorContact: A,
    visitorId: p.current,
    activeConversationHasReply: K ? re(K) : !1,
    totalUnread: ae,
    isStreaming: v,
    rateLimitTimer: k,
    errorBanner: z,
    setErrorBanner: S,
    activeLanguage: V,
    setActiveLanguage: E,
    selectConversation: X,
    startNewConversation: B,
    endConversation: q,
    deleteConversation: _,
    sendUserMessage: x,
    submitSatisfaction: O,
    appendConversationMessage: Z,
    handleApiError: L
  };
}
let mt = null, gi = null;
function Yt(t, e) {
  e === null && t !== null && mt !== null && mt !== t || (mt = e ? t : null, gi = e);
}
function ke() {
  return gi;
}
function St(t, e) {
  let a = null;
  const n = () => a || (a = t().then((o) => {
    const r = e ? e(o) : o.default;
    if (!r)
      throw new Error("Lazy component not found");
    return r;
  }));
  return function(r) {
    const [d, s] = R(null);
    return G(() => {
      let h = !0;
      return n().then((u) => {
        h && s(() => u);
      }).catch((u) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", u);
      }), () => {
        h = !1;
      };
    }, []), d ? /* @__PURE__ */ i(d, { ...r }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function na({ size: t = 16, className: e = "" }) {
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
function ra({ size: t = 16, className: e = "" }) {
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
function oa({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function on({ size: t = 18, className: e = "" }) {
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
function ca({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function vi({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function pa({ size: t = 15, className: e = "" }) {
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
function ji({ size: t = 16, className: e = "" }) {
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
function xi({ size: t = 16, className: e = "" }) {
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
function sn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function cn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function pn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function ln({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function dn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function un({ size: t = 16, className: e = "" }) {
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
function mn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function hn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function fn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function gn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function bn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function vn({ size: t = 14, className: e = "" }) {
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
function jn({ size: t = 14, className: e = "" }) {
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
function xn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function wn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function kn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function yn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function _n({ size: t = 24, className: e = "" }) {
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
function Mn({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Sn({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Nn({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function zn({ size: t = 15, className: e = "" }) {
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
const Ye = {
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
  hr: {
    send: "Pošalji",
    sendMessage: "Pošalji poruku",
    sendAudio: "Pošalji snimku",
    placeholder: "Pitajte bilo što...",
    inputPlaceholder: "Upišite svoje pitanje...",
    sending: "Slanje...",
    poweredBy: "Pokreće",
    close: "Zatvori",
    back: "Natrag",
    rateExperience: "Kako biste ocijenili svoje iskustvo?",
    submitRating: "Pošalji ocjenu",
    newConversation: "Novi razgovor",
    endConversation: "Završi razgovor",
    deleteConversation: "Obriši razgovor",
    viewHistory: "Povijest razgovora",
    viewTickets: "Prikaži tikete",
    menu: "Izbornik",
    cancel: "Odustani",
    transcribing: "Pretvaranje glasa u tekst...",
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
  sr: {
    send: "Pošalji",
    sendMessage: "Pošalji poruku",
    sendAudio: "Pošalji snimak",
    placeholder: "Pitajte bilo šta...",
    inputPlaceholder: "Upišite svoje pitanje...",
    sending: "Slanje...",
    poweredBy: "Pokreće",
    close: "Zatvori",
    back: "Nazad",
    rateExperience: "Kako biste ocenili vaše iskustvo?",
    submitRating: "Pošalji ocenu",
    newConversation: "Nova konverzacija",
    endConversation: "Završi konverzaciju",
    deleteConversation: "Obriši konverzaciju",
    viewHistory: "Prethodni razgovori",
    viewTickets: "Pregled tiketa",
    menu: "Meni",
    cancel: "Otkaži",
    transcribing: "Pretvaranje glasa u tekst...",
    dictation: "Diktiranje",
    copyAnswer: "Kopiraj odgovor",
    copied: "Kopirano",
    helpful: "Korisno",
    notHelpful: "Nije korisno",
    sources: "Izvori i dokumentacija:",
    today: "Danas",
    ticketNumber: "Broj tiketa:",
    thankYouFeedback: "Hvala na oceni!",
    maybeLater: "Možda kasnije"
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
  mk: {
    send: "Испрати",
    sendMessage: "Испрати порака",
    sendAudio: "Испрати аудио",
    placeholder: "Прашајте било што...",
    inputPlaceholder: "Внесете го вашето прашање...",
    sending: "Се испраќа...",
    poweredBy: "Овозможено од",
    close: "Затвори",
    back: "Назад",
    rateExperience: "Како би го оцениле вашето искуство?",
    submitRating: "Испрати оцена",
    newConversation: "Нов разговор",
    endConversation: "Заврши разговор",
    deleteConversation: "Избриши разговор",
    viewHistory: "Историја на разговори",
    viewTickets: "Преглед на тикети",
    menu: "Мени",
    cancel: "Откажи",
    transcribing: "Транскрибирање на глас...",
    dictation: "Диктирање",
    copyAnswer: "Копирај одговор",
    copied: "Копирано",
    helpful: "Корисно",
    notHelpful: "Не е корисно",
    sources: "Извори и документација:",
    today: "Денес",
    ticketNumber: "Број на тикет:",
    thankYouFeedback: "Ви благодариме за оцената!",
    maybeLater: "Можеби подоцна"
  },
  sq: {
    send: "Dërgo",
    sendMessage: "Dërgo mesazh",
    sendAudio: "Dërgo regjistrim",
    placeholder: "Pyesni çdo gjë...",
    inputPlaceholder: "Shkruani pyetjen tuaj...",
    sending: "Duke dërguar...",
    poweredBy: "Mundësuar nga",
    close: "Mbyll",
    back: "Prapa",
    rateExperience: "Si do ta vlerësonit përvojën tuaj?",
    submitRating: "Dërgo vlerësimin",
    newConversation: "Bisedë e re",
    endConversation: "Përfundo bisedën",
    deleteConversation: "Fshi bisedën",
    viewHistory: "Shiko historikun",
    viewTickets: "Shiko biletat",
    menu: "Menu",
    cancel: "Anulo",
    transcribing: "Transkriptim zanor...",
    dictation: "Diktat",
    copyAnswer: "Kopjo përgjigjen",
    copied: "U kopjua",
    helpful: "E dobishme",
    notHelpful: "Jo e dobishme",
    sources: "Burimet dhe dokumentacioni:",
    today: "Sot",
    ticketNumber: "Numri i biletës:",
    thankYouFeedback: "Faleminderit për vlerësimin!",
    maybeLater: "Ndoshta më vonë"
  },
  bg: {
    send: "Изпрати",
    sendMessage: "Изпрати съобщение",
    sendAudio: "Изпрати аудио",
    placeholder: "Попитайте каквото и да е...",
    inputPlaceholder: "Въведете вашия въпрос...",
    sending: "Изпращане...",
    poweredBy: "Предоставено от",
    close: "Затвори",
    back: "Назад",
    rateExperience: "Как оценявате вашето преживяване?",
    submitRating: "Изпрати оценка",
    newConversation: "Нов разговор",
    endConversation: "Край на разговора",
    deleteConversation: "Изтрий разговора",
    viewHistory: "История на разговорите",
    viewTickets: "Преглед на запитванията",
    menu: "Меню",
    cancel: "Отказ",
    transcribing: "Преобразуване на глас...",
    dictation: "Диктовка",
    copyAnswer: "Копирай отговора",
    copied: "Копирано",
    helpful: "Полезно",
    notHelpful: "Не е полезно",
    sources: "Източници и документация:",
    today: "Днес",
    ticketNumber: "Номер на запитване:",
    thankYouFeedback: "Благодарим за вашата оценка!",
    maybeLater: "Може би по-късно"
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
  pt: {
    send: "Enviar",
    sendMessage: "Enviar mensagem",
    sendAudio: "Enviar áudio",
    placeholder: "Pergunte qualquer coisa...",
    inputPlaceholder: "Digite sua pergunta...",
    sending: "Enviando...",
    poweredBy: "Desenvolvido por",
    close: "Fechar",
    back: "Voltar",
    rateExperience: "Como você avalia sua experiência?",
    submitRating: "Enviar avaliação",
    newConversation: "Nova conversa",
    endConversation: "Encerrar conversa",
    deleteConversation: "Excluir conversa",
    viewHistory: "Ver histórico",
    viewTickets: "Ver tíquetes",
    menu: "Menu",
    cancel: "Cancelar",
    transcribing: "Transcrevendo voz...",
    dictation: "Ditado",
    copyAnswer: "Copiar resposta",
    copied: "Copiado",
    helpful: "Útil",
    notHelpful: "Não útil",
    sources: "Fontes e documentação:",
    today: "Hoje",
    ticketNumber: "Número do tíquete:",
    thankYouFeedback: "Obrigado pela sua avaliação!",
    maybeLater: "Talvez mais tarde"
  },
  el: {
    send: "Αποστολή",
    sendMessage: "Αποστολή μηνύματος",
    sendAudio: "Αποστολή ηχογράφησης",
    placeholder: "Ρωτήστε οτιδήποτε...",
    inputPlaceholder: "Πληκτρολογήστε την ερώτησή σας...",
    sending: "Αποστολή...",
    poweredBy: "Υποστηρίζεται από",
    close: "Κλείσιμο",
    back: "Πίσω",
    rateExperience: "Πώς θα αξιολογούσατε την εμπειρία σας;",
    submitRating: "Υποβολή αξιολόγησης",
    newConversation: "Νέα συνομιλία",
    endConversation: "Τερματισμός συνομιλίας",
    deleteConversation: "Διαγραφή συνομιλίας",
    viewHistory: "Προβολή ιστορικού",
    viewTickets: "Προβολή αιτημάτων",
    menu: "Μενού",
    cancel: "Ακύρωση",
    transcribing: "Μεταγραφή φωνής...",
    dictation: "Υπαγόρευση",
    copyAnswer: "Αντιγραφή απάντησης",
    copied: "Αντιγράφηκε",
    helpful: "Χρήσιμο",
    notHelpful: "Μη χρήσιμο",
    sources: "Πηγές και τεκμηρίωση:",
    today: "Σήμερα",
    ticketNumber: "Αριθμός αιτήματος:",
    thankYouFeedback: "Ευχαριστούμε για την αξιολόγησή σας!",
    maybeLater: "Ίσως αργότερα"
  },
  mt: {
    send: "Ibgħat",
    sendMessage: "Ibgħat messaġġ",
    sendAudio: "Ibgħat reġistrazzjoni",
    placeholder: "Staqsi kwalunkwe ħaġa...",
    inputPlaceholder: "Ikteb il-mistoqsija tiegħek...",
    sending: "Qed jintbagħat...",
    poweredBy: "Imħaddem minn",
    close: "Agħlaq",
    back: "Lura",
    rateExperience: "Kif tikklassifika l-esperjenza tiegħek?",
    submitRating: "Ibgħat il-klassifikazzjoni",
    newConversation: "Konversazzjoni ġdida",
    endConversation: "Temm il-konversazzjoni",
    deleteConversation: "Ħassar il-konversazzjoni",
    viewHistory: "Ara l-istorja",
    viewTickets: "Ara l-biljetti",
    menu: "Menu",
    cancel: "Ikkanċella",
    transcribing: "Traskrizzjoni tal-vuċi...",
    dictation: "Dittatura",
    copyAnswer: "Ikkopja t-tweġiba",
    copied: "Ikkopjat",
    helpful: "Utli",
    notHelpful: "Mhux utli",
    sources: "Sorsi u dokumentazzjoni:",
    today: "Illum",
    ticketNumber: "Numru tal-biljett:",
    thankYouFeedback: "Grazzi tal-klassifikazzjoni tiegħek!",
    maybeLater: "Forsi aktar tard"
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
  pl: {
    send: "Wyślij",
    sendMessage: "Wyślij wiadomość",
    sendAudio: "Wyślij nagranie",
    placeholder: "Zapytaj o cokolwiek...",
    inputPlaceholder: "Wpisz swoje pytanie...",
    sending: "Wysyłanie...",
    poweredBy: "Obsługiwane przez",
    close: "Zamknij",
    back: "Wstecz",
    rateExperience: "Jak oceniasz swoje doświadczenie?",
    submitRating: "Prześlij ocenę",
    newConversation: "Nowa rozmowa",
    endConversation: "Zakończ rozmowę",
    deleteConversation: "Usuń rozmowę",
    viewHistory: "Historia rozmów",
    viewTickets: "Zobacz zgłoszenia",
    menu: "Menu",
    cancel: "Anuluj",
    transcribing: "Transkrypcja głosu...",
    dictation: "Dyktowanie",
    copyAnswer: "Kopiuj odpowiedź",
    copied: "Skopiowano",
    helpful: "Pomocne",
    notHelpful: "Niepomocne",
    sources: "Źródła i dokumentacja:",
    today: "Dzisiaj",
    ticketNumber: "Numer zgłoszenia:",
    thankYouFeedback: "Dziękujemy za ocenę!",
    maybeLater: "Może później"
  },
  cs: {
    send: "Odeslat",
    sendMessage: "Odeslat zprávu",
    sendAudio: "Odeslat nahrávku",
    placeholder: "Zeptejte se na cokoliv...",
    inputPlaceholder: "Napište svůj dotaz...",
    sending: "Odesílání...",
    poweredBy: "Provozováno na",
    close: "Zavřít",
    back: "Zpět",
    rateExperience: "Jak byste ohodnotili svou zkušenost?",
    submitRating: "Odeslat hodnocení",
    newConversation: "Nová konverzace",
    endConversation: "Ukončit konverzaci",
    deleteConversation: "Smazat konverzaci",
    viewHistory: "Historie konverzací",
    viewTickets: "Zobrazit požadavky",
    menu: "Menu",
    cancel: "Zrušit",
    transcribing: "Přepis hlasu...",
    dictation: "Diktování",
    copyAnswer: "Kopírovat odpověď",
    copied: "Zkopírováno",
    helpful: "Užitečné",
    notHelpful: "Neužitečné",
    sources: "Zdroje a dokumentace:",
    today: "Dnes",
    ticketNumber: "Číslo požadavku:",
    thankYouFeedback: "Děkujeme za hodnocení!",
    maybeLater: "Možná později"
  },
  sk: {
    send: "Odoslať",
    sendMessage: "Odoslať správu",
    sendAudio: "Odoslať nahrávku",
    placeholder: "Opýtajte sa čokoľvek...",
    inputPlaceholder: "Napíšte svoju otázku...",
    sending: "Odosielanie...",
    poweredBy: "Prevádzkuje",
    close: "Zavrieť",
    back: "Späť",
    rateExperience: "Ako by ste ohodnotili svoju skúsenosť?",
    submitRating: "Odoslať hodnotenie",
    newConversation: "Nová konverzácia",
    endConversation: "Ukončiť konverzáciu",
    deleteConversation: "Zmazať konverzáciu",
    viewHistory: "História správ",
    viewTickets: "Zobraziť požiadavky",
    menu: "Menu",
    cancel: "Zrušiť",
    transcribing: "Prepis hlasu...",
    dictation: "Diktovanie",
    copyAnswer: "Kopírovať odpoveď",
    copied: "Skopírované",
    helpful: "Užitočné",
    notHelpful: "Neužitočné",
    sources: "Zdroje a dokumentácia:",
    today: "Dnes",
    ticketNumber: "Číslo požiadavky:",
    thankYouFeedback: "Ďakujeme za hodnotenie!",
    maybeLater: "Možno neskôr"
  },
  hu: {
    send: "Küldés",
    sendMessage: "Üzenet küldése",
    sendAudio: "Hangüzenet küldése",
    placeholder: "Kérdezzen bármit...",
    inputPlaceholder: "Írja be a kérdését...",
    sending: "Küldés folyamatban...",
    poweredBy: "Támogatja a",
    close: "Bezárás",
    back: "Vissza",
    rateExperience: "Hogyan értékelné az élményét?",
    submitRating: "Értékelés elküldése",
    newConversation: "Új beszélgetés",
    endConversation: "Beszélgetés befejezése",
    deleteConversation: "Beszélgetés törlése",
    viewHistory: "Előzmények megtekintése",
    viewTickets: "Hibajegyek megtekintése",
    menu: "Menü",
    cancel: "Mégse",
    transcribing: "Beszéd átírása...",
    dictation: "Diktálás",
    copyAnswer: "Válasz másolása",
    copied: "Másolva",
    helpful: "Hasznos",
    notHelpful: "Nem hasznos",
    sources: "Források és dokumentáció:",
    today: "Ma",
    ticketNumber: "Hibajegy száma:",
    thankYouFeedback: "Köszönjük az értékelést!",
    maybeLater: "Talán később"
  },
  ro: {
    send: "Trimite",
    sendMessage: "Trimite mesaj",
    sendAudio: "Trimite audio",
    placeholder: "Întrebați orice...",
    inputPlaceholder: "Scrieți întrebarea dvs...",
    sending: "Se trimite...",
    poweredBy: "Dezvoltat de",
    close: "Închide",
    back: "Înapoi",
    rateExperience: "Cum ați evalua experiența dvs.?",
    submitRating: "Trimite evaluarea",
    newConversation: "Conversație nouă",
    endConversation: "Încheie conversația",
    deleteConversation: "Șterge conversația",
    viewHistory: "Istoric conversații",
    viewTickets: "Vezi tichetele",
    menu: "Meniu",
    cancel: "Anulează",
    transcribing: "Transcriere vocală...",
    dictation: "Dictare",
    copyAnswer: "Copiază răspunsul",
    copied: "Copiat",
    helpful: "Util",
    notHelpful: "Inutil",
    sources: "Surse și documentație:",
    today: "Astăzi",
    ticketNumber: "Număr tichet:",
    thankYouFeedback: "Vă mulțumim pentru evaluare!",
    maybeLater: "Poate mai târziu"
  },
  uk: {
    send: "Надіслати",
    sendMessage: "Надіслати повідомлення",
    sendAudio: "Надіслати аудіо",
    placeholder: "Запитайте будь-що...",
    inputPlaceholder: "Введіть ваше запитання...",
    sending: "Надсилання...",
    poweredBy: "Працює на базі",
    close: "Закрити",
    back: "Назад",
    rateExperience: "Як ви оцінюєте свій досвід?",
    submitRating: "Надіслати оцінку",
    newConversation: "Нова розмова",
    endConversation: "Завершити розмову",
    deleteConversation: "Видалити розмову",
    viewHistory: "Історія розмов",
    viewTickets: "Переглянути тікети",
    menu: "Меню",
    cancel: "Скасувати",
    transcribing: "Транскрибування голосу...",
    dictation: "Диктування",
    copyAnswer: "Скопіювати відповідь",
    copied: "Скопійовано",
    helpful: "Корисно",
    notHelpful: "Не корисно",
    sources: "Джерела та документація:",
    today: "Сьогодні",
    ticketNumber: "Номер тікета:",
    thankYouFeedback: "Дякуємо за вашу оцінку!",
    maybeLater: "Можливо пізніше"
  },
  ru: {
    send: "Отправить",
    sendMessage: "Отправить сообщение",
    sendAudio: "Отправить аудио",
    placeholder: "Спросите что угодно...",
    inputPlaceholder: "Введите ваш вопрос...",
    sending: "Отправка...",
    poweredBy: "На базе",
    close: "Закрыть",
    back: "Назад",
    rateExperience: "Как бы вы оценили свой опыт?",
    submitRating: "Отправить оценку",
    newConversation: "Новый диалог",
    endConversation: "Завершить диалог",
    deleteConversation: "Удалить диалог",
    viewHistory: "История диалогов",
    viewTickets: "Просмотр тикетов",
    menu: "Меню",
    cancel: "Отмена",
    transcribing: "Транскрибация голоса...",
    dictation: "Диктовка",
    copyAnswer: "Копировать ответ",
    copied: "Скопировано",
    helpful: "Полезно",
    notHelpful: "Не полезно",
    sources: "Источники и документация:",
    today: "Сегодня",
    ticketNumber: "Номер тикета:",
    thankYouFeedback: "Спасибо за вашу оценку!",
    maybeLater: "Может быть позже"
  },
  sv: {
    send: "Skicka",
    sendMessage: "Skicka meddelande",
    sendAudio: "Skicka ljudinspelning",
    placeholder: "Fråga vad som helst...",
    inputPlaceholder: "Skriv din fråga...",
    sending: "Skickar...",
    poweredBy: "Drivs av",
    close: "Stäng",
    back: "Tillbaka",
    rateExperience: "Hur skulle du betygsätta din upplevelse?",
    submitRating: "Skicka betyg",
    newConversation: "Ny konversation",
    endConversation: "Avsluta konversation",
    deleteConversation: "Ta bort konversation",
    viewHistory: "Visa historik",
    viewTickets: "Visa ärenden",
    menu: "Meny",
    cancel: "Avbryt",
    transcribing: "Transkriberar röst...",
    dictation: "Diktamen",
    copyAnswer: "Kopiera svar",
    copied: "Kopierat",
    helpful: "Hjälpsamt",
    notHelpful: "Inte hjälpsamt",
    sources: "Källor och dokumentation:",
    today: "Idag",
    ticketNumber: "Ärendenummer:",
    thankYouFeedback: "Tack för ditt betyg!",
    maybeLater: "Kanske senare"
  },
  da: {
    send: "Send",
    sendMessage: "Send besked",
    sendAudio: "Send lydoptagelse",
    placeholder: "Spørg om hvad som helst...",
    inputPlaceholder: "Skriv dit spørgsmål...",
    sending: "Sender...",
    poweredBy: "Drevet af",
    close: "Luk",
    back: "Tilbage",
    rateExperience: "Hvordan vil du bedømme din oplevelse?",
    submitRating: "Indsend bedømmelse",
    newConversation: "Ny samtale",
    endConversation: "Afslut samtale",
    deleteConversation: "Slet samtale",
    viewHistory: "Vis historik",
    viewTickets: "Vis sager",
    menu: "Menu",
    cancel: "Annuller",
    transcribing: "Transskriberer stemme...",
    dictation: "Diktat",
    copyAnswer: "Kopier svar",
    copied: "Kopieret",
    helpful: "Nyttigt",
    notHelpful: "Ikke nyttigt",
    sources: "Kilder og dokumentation:",
    today: "I dag",
    ticketNumber: "Sagsnummer:",
    thankYouFeedback: "Tak for din bedømmelse!",
    maybeLater: "Måske senere"
  },
  no: {
    send: "Send",
    sendMessage: "Send melding",
    sendAudio: "Send lydopptak",
    placeholder: "Spør om hva som helst...",
    inputPlaceholder: "Skriv inn spørsmålet ditt...",
    sending: "Sender...",
    poweredBy: "Drevet av",
    close: "Lukk",
    back: "Tilbake",
    rateExperience: "Hvordan vil du vurdere opplevelsen din?",
    submitRating: "Send vurdering",
    newConversation: "Ny samtale",
    endConversation: "Avslutt samtale",
    deleteConversation: "Slett samtale",
    viewHistory: "Vis historikk",
    viewTickets: "Vis henvendelser",
    menu: "Meny",
    cancel: "Avbryt",
    transcribing: "Transkriberer tale...",
    dictation: "Diktering",
    copyAnswer: "Kopier svar",
    copied: "Kopiert",
    helpful: "Nyttig",
    notHelpful: "Ikke nyttig",
    sources: "Kilder og dokumentasjon:",
    today: "I dag",
    ticketNumber: "Saksnummer:",
    thankYouFeedback: "Takk for din vurdering!",
    maybeLater: "Kanskje senere"
  },
  fi: {
    send: "Lähetä",
    sendMessage: "Lähetä viesti",
    sendAudio: "Lähetä äänite",
    placeholder: "Kysy mitä vain...",
    inputPlaceholder: "Kirjoita kysymyksesi...",
    sending: "Lähetetään...",
    poweredBy: "Palvelun tarjoaa",
    close: "Sulje",
    back: "Takaisin",
    rateExperience: "Miten arvioisit kokemustasi?",
    submitRating: "Lähetä arvio",
    newConversation: "Uusi keskustelu",
    endConversation: "Lopeta keskustelu",
    deleteConversation: "Poista keskustelu",
    viewHistory: "Näytä historia",
    viewTickets: "Näytä tukipyynnöt",
    menu: "Valikko",
    cancel: "Peruuta",
    transcribing: "Puhetta litteroidaan...",
    dictation: "Sanelu",
    copyAnswer: "Kopioi vastaus",
    copied: "Kopioitu",
    helpful: "Hyödyllinen",
    notHelpful: "Ei hyödyllinen",
    sources: "Lähteet ja dokumentaatio:",
    today: "Tänään",
    ticketNumber: "Tukipyynnön numero:",
    thankYouFeedback: "Kiitos arviostasi!",
    maybeLater: "Ehkä myöhemmin"
  },
  is: {
    send: "Senda",
    sendMessage: "Senda skilaboð",
    sendAudio: "Senda hljóðupptöku",
    placeholder: "Spyrðu um hvað sem er...",
    inputPlaceholder: "Sláðu inn spurningu...",
    sending: "Sendir...",
    poweredBy: "Knúið af",
    close: "Loka",
    back: "Til baka",
    rateExperience: "Hvernig viltu meta upplifun þína?",
    submitRating: "Senda einkunn",
    newConversation: "Nýtt samtal",
    endConversation: "Ljúka samtali",
    deleteConversation: "Eyða samtali",
    viewHistory: "Skoða sögu",
    viewTickets: "Skoða mál",
    menu: "Valmynd",
    cancel: "Hætta við",
    transcribing: "Umritar rödd...",
    dictation: "Talgreining",
    copyAnswer: "Afrita svar",
    copied: "Afritað",
    helpful: "Gagnlegt",
    notHelpful: "Ekki gagnlegt",
    sources: "Heimildir og skjöl:",
    today: "Í dag",
    ticketNumber: "Númer máls:",
    thankYouFeedback: "Takk fyrir einkunnina!",
    maybeLater: "Kannski seinna"
  },
  et: {
    send: "Saada",
    sendMessage: "Saada sõnum",
    sendAudio: "Saada helisalvestis",
    placeholder: "Küsige mida tahes...",
    inputPlaceholder: "Kirjutage oma küsimus...",
    sending: "Saatmine...",
    poweredBy: "Toetab",
    close: "Sulge",
    back: "Tagasi",
    rateExperience: "Kuidas hindate oma kogemust?",
    submitRating: "Saada hinnang",
    newConversation: "Uus vestlus",
    endConversation: "Lõpeta vestlus",
    deleteConversation: "Kustuta vestlus",
    viewHistory: "Vaata ajalugu",
    viewTickets: "Vaata pileteid",
    menu: "Menüü",
    cancel: "Tühista",
    transcribing: "Hääle transkribeerimine...",
    dictation: "Dikteerimine",
    copyAnswer: "Kopeeri vastus",
    copied: "Kopeeritud",
    helpful: "Kasulik",
    notHelpful: "Pole kasulik",
    sources: "Allikad ja dokumentatsioon:",
    today: "Täna",
    ticketNumber: "Pileti number:",
    thankYouFeedback: "Täname hinnangu eest!",
    maybeLater: "Võib-olla hiljem"
  },
  lv: {
    send: "Sūtīt",
    sendMessage: "Sūtīt ziņu",
    sendAudio: "Sūtīt audioierakstu",
    placeholder: "Jautājiet jebko...",
    inputPlaceholder: "Ierakstiet savu jautājumu...",
    sending: "Sūta...",
    poweredBy: "Nodrošina",
    close: "Aizvērt",
    back: "Atpakaļ",
    rateExperience: "Kā jūs novērtētu savu pieredzi?",
    submitRating: "Iesniegt vērtējumu",
    newConversation: "Jauna saruna",
    endConversation: "Pabeigt sarunu",
    deleteConversation: "Dzēst sarunu",
    viewHistory: "Skatīt vēsturi",
    viewTickets: "Skatīt pieteikumus",
    menu: "Izvēlne",
    cancel: "Atcelt",
    transcribing: "Transkribē balsi...",
    dictation: "Diktēšana",
    copyAnswer: "Kopēt atbildi",
    copied: "Kopēts",
    helpful: "Noderīgi",
    notHelpful: "Nav noderīgi",
    sources: "Avoti un dokumentācija:",
    today: "Šodien",
    ticketNumber: "Pieteikuma numurs:",
    thankYouFeedback: "Paldies par vērtējumu!",
    maybeLater: "Varbūt vēlāk"
  },
  lt: {
    send: "Siųsti",
    sendMessage: "Siųsti žinutę",
    sendAudio: "Siųsti garso įrašą",
    placeholder: "Klauskite bet ko...",
    inputPlaceholder: "Įveskite savo klausimą...",
    sending: "Siunčiama...",
    poweredBy: "Teikia",
    close: "Uždaryti",
    back: "Atgal",
    rateExperience: "Kaip vertinate savo patirtį?",
    submitRating: "Pateikti įvertinimą",
    newConversation: "Naujas pokalbis",
    endConversation: "Baigti pokalbį",
    deleteConversation: "Ištrinti pokalbį",
    viewHistory: "Peržiūrėti istoriją",
    viewTickets: "Peržiūrėti užklausas",
    menu: "Meniu",
    cancel: "Atšaukti",
    transcribing: "Transkribuojamas balsas...",
    dictation: "Diktavimas",
    copyAnswer: "Kopijuoti atsakymą",
    copied: "Nukopijuota",
    helpful: "Naudinga",
    notHelpful: "Nenaudinga",
    sources: "Šaltiniai ir dokumentacija:",
    today: "Šiandien",
    ticketNumber: "Užklausos numeris:",
    thankYouFeedback: "Dėkojame už įvertinimą!",
    maybeLater: "Gal vėliau"
  },
  ga: {
    send: "Seol",
    sendMessage: "Seol teachtaireacht",
    sendAudio: "Seol taifeadadh fuaime",
    placeholder: "Cuir ceist ar bith...",
    inputPlaceholder: "Clóscríobh do cheist...",
    sending: "Á sheoladh...",
    poweredBy: "Cumhachtaithe ag",
    close: "Dún",
    back: "Ar ais",
    rateExperience: "Conas a rátálfá do thaithí?",
    submitRating: "Cuir rátáil isteach",
    newConversation: "Comhrá nua",
    endConversation: "Críochnaigh an comhrá",
    deleteConversation: "Scrios an comhrá",
    viewHistory: "Féach ar an stair",
    viewTickets: "Féach ar thicéid",
    menu: "Roghchlár",
    cancel: "Cealaigh",
    transcribing: "Guth á thras-scríobh...",
    dictation: "Deachtú",
    copyAnswer: "Cóipeáil an freagra",
    copied: "Cóipeáilte",
    helpful: "Úsáideach",
    notHelpful: "Gan úsáid",
    sources: "Foinsí agus doiciméadú:",
    today: "Inniu",
    ticketNumber: "Uimhir thicéid:",
    thankYouFeedback: "Go raibh maith agat as do rátáil!",
    maybeLater: "B’fhéidir níos déanaí"
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
  he: {
    send: "שלח",
    sendMessage: "שלח הודעה",
    sendAudio: "שלח הקלטה",
    placeholder: "שאל כל דבר...",
    inputPlaceholder: "הקלד את שאלתך...",
    sending: "שולח...",
    poweredBy: "מופעל על ידי",
    close: "סגור",
    back: "חזרה",
    rateExperience: "איך היית מדרג את החוויה שלך?",
    submitRating: "שלח דירוג",
    newConversation: "שיחה חדשה",
    endConversation: "סיים שיחה",
    deleteConversation: "מחק שיחה",
    viewHistory: "היסטוריית שיחות",
    viewTickets: "צפה בפניות",
    menu: "תפריט",
    cancel: "ביטול",
    transcribing: "מתמלל קול...",
    dictation: "הכתבה",
    copyAnswer: "העתק תשובה",
    copied: "הועתק",
    helpful: "מועיל",
    notHelpful: "לא מועיל",
    sources: "מקורות ותיעוד:",
    today: "היום",
    ticketNumber: "מספר פנייה:",
    thankYouFeedback: "תודה על המשוב שלך!",
    maybeLater: "אולי מאוחר יותר"
  },
  zh: {
    send: "发送",
    sendMessage: "发送消息",
    sendAudio: "发送录音",
    placeholder: "输入任何问题...",
    inputPlaceholder: "输入您的问题...",
    sending: "发送中...",
    poweredBy: "技术支持",
    close: "关闭",
    back: "返回",
    rateExperience: "您如何评价此次体验？",
    submitRating: "提交评价",
    newConversation: "新对话",
    endConversation: "结束对话",
    deleteConversation: "删除对话",
    viewHistory: "查看历史",
    viewTickets: "查看工单",
    menu: "菜单",
    cancel: "取消",
    transcribing: "语音转文字中...",
    dictation: "听写",
    copyAnswer: "复制回答",
    copied: "已复制",
    helpful: "有帮助",
    notHelpful: "没有帮助",
    sources: "来源与文档：",
    today: "今天",
    ticketNumber: "工单编号：",
    thankYouFeedback: "感谢您的评价！",
    maybeLater: "稍后再说"
  },
  ja: {
    send: "送信",
    sendMessage: "メッセージを送信",
    sendAudio: "音声を送信",
    placeholder: "何でも質問してください...",
    inputPlaceholder: "質問を入力してください...",
    sending: "送信中...",
    poweredBy: "提供元",
    close: "閉じる",
    back: "戻る",
    rateExperience: "対応はいかがでしたか？",
    submitRating: "評価を送信",
    newConversation: "新しい会話",
    endConversation: "会話を終了",
    deleteConversation: "会話を削除",
    viewHistory: "履歴を表示",
    viewTickets: "チケットを表示",
    menu: "メニュー",
    cancel: "キャンセル",
    transcribing: "音声を文字変換中...",
    dictation: "ディクテーション",
    copyAnswer: "回答をコピー",
    copied: "コピーしました",
    helpful: "役に立った",
    notHelpful: "役に立たなかった",
    sources: "出典とドキュメント：",
    today: "今日",
    ticketNumber: "チケット番号：",
    thankYouFeedback: "評価ありがとうございます！",
    maybeLater: "後で"
  }
};
function D(t, e = "bs") {
  var o, r;
  const a = (e || "bs").toLowerCase().split(/[-_]/)[0], n = Ye[a] || Ye.bs || Ye.en;
  return n && typeof n[t] == "string" ? n[t] : ((o = Ye.bs) == null ? void 0 : o[t]) || ((r = Ye.en) == null ? void 0 : r[t]) || t;
}
function ja({
  screen: t,
  activeConversation: e,
  config: a,
  language: n = "bs",
  onBack: o,
  onClose: r,
  onNewConversation: d,
  onEndConversation: s,
  onDeleteConversation: h,
  onViewHistory: u,
  onViewTickets: b
}) {
  var E;
  const [c, f] = R(!1), v = J(null), j = t === "conversation" && e, z = j || t === "history" || t === "tickets", S = a.title || a.name || "Pitaj.io Asistent";
  G(() => {
    var C;
    const p = (y) => {
      var T, I;
      const F = ((I = (T = y.composedPath) == null ? void 0 : T.call(y)) == null ? void 0 : I[0]) || y.target;
      v.current && F && !v.current.contains(F) && f(!1);
    };
    document.addEventListener("mousedown", p);
    const A = (C = v.current) == null ? void 0 : C.getRootNode();
    return A instanceof ShadowRoot && A.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p), A instanceof ShadowRoot && A.removeEventListener("mousedown", p);
    };
  }, []), G(() => {
    f(!1);
  }, [t]);
  const V = (p) => {
    f(!1), p == null || p();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      z && /* @__PURE__ */ i(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": D("back", n),
          title: D("back", n),
          children: /* @__PURE__ */ i(ra, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((E = a.content) == null ? void 0 : E.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(dt, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: S }),
        j && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: v, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => f((p) => !p),
            className: `pitaj-icon-btn ${c ? "is-active" : ""}`,
            "aria-label": D("menu", n),
            "aria-expanded": c,
            title: D("menu", n),
            children: /* @__PURE__ */ i(sa, { size: 18 })
          }
        ),
        c && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => V(d),
              children: [
                /* @__PURE__ */ i(ca, { size: 15, className: "pitaj-menu-item-icon" }),
                D("newConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !j,
              onClick: () => V(s),
              children: [
                /* @__PURE__ */ i(la, { size: 15, className: "pitaj-menu-item-icon" }),
                D("endConversation", n)
              ]
            }
          ),
          h && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !j,
              onClick: () => V(h),
              children: [
                /* @__PURE__ */ i(ba, { size: 15, className: "pitaj-menu-item-icon" }),
                D("deleteConversation", n)
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
                D("viewHistory", n)
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => V(b), children: [
            /* @__PURE__ */ i(ma, { size: 15, className: "pitaj-menu-item-icon" }),
            D("viewTickets", n)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": D("close", n),
          title: D("close", n),
          children: /* @__PURE__ */ i(xe, { size: 18 })
        }
      )
    ] })
  ] });
}
function xa({ content: t }) {
  if (!t)
    return /* @__PURE__ */ i("span", {});
  const e = t.split(`
`), a = [];
  let n = !1, o = [];
  for (let r = 0; r < e.length; r++) {
    const d = e[r];
    if (d.startsWith("```")) {
      n ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, `code-${r}`)
      ), o = [], n = !1) : n = !0;
      continue;
    }
    if (n) {
      o.push(d);
      continue;
    }
    if (d.trim().startsWith("- ") || d.trim().startsWith("* ")) {
      const h = d.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: ht(h) }) }, `ul-${r}`)
      );
      continue;
    }
    const s = d.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ i("li", { children: ht(s[2]) }) }, `ol-${r}`)
      );
      continue;
    }
    if (!d.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${r}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: ht(d) }, `p-${r}`));
  }
  return n && o.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function ht(t) {
  const e = [];
  let a = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index > a && e.push(...Zt(t.slice(a, o.index)));
    const r = o[0];
    if (r.startsWith("`") && r.endsWith("`"))
      e.push(
        /* @__PURE__ */ i("code", { children: r.slice(1, -1) }, `c-${o.index}`)
      );
    else if (r.startsWith("**") && r.endsWith("**"))
      e.push(
        /* @__PURE__ */ i("strong", { children: r.slice(2, -2) }, `b-${o.index}`)
      );
    else if (r.startsWith("*") && r.endsWith("*"))
      e.push(
        /* @__PURE__ */ i("em", { children: r.slice(1, -1) }, `i-${o.index}`)
      );
    else if (r.startsWith("[") && r.includes("](")) {
      const d = r.slice(1, r.indexOf("](")), s = r.slice(r.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: d }, `a-${o.index}`)
      );
    }
    a = o.index + r.length;
  }
  return a < t.length && e.push(...Zt(t.slice(a))), e;
}
const wa = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, ka = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, ya = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), _a = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Zt(t) {
  const e = [];
  let a;
  for (; (a = wa.exec(t)) !== null; ) {
    const r = a[0].replace(/[.,;:!?]+$/, "");
    r && e.push({
      start: a.index,
      end: a.index + r.length,
      href: r.startsWith("www.") ? `https://${r}` : r,
      external: !0
    });
  }
  for (; (a = ka.exec(t)) !== null; )
    e.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = ya.exec(t)) !== null; ) {
    const r = a[0];
    _a.test(r) || e.push({
      start: a.index,
      end: a.index + r.length,
      href: `tel:${r.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((r, d) => r.start - d.start);
  const n = [];
  let o = 0;
  for (const r of e)
    r.start < o || (r.start > o && n.push(t.slice(o, r.start)), n.push(
      /* @__PURE__ */ i(
        "a",
        {
          href: r.href,
          ...r.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: t.slice(r.start, r.end)
        },
        `l-${r.start}`
      )
    ), o = r.end);
  return o < t.length && n.push(t.slice(o)), n;
}
function ki({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: n,
  containerClassName: o,
  revealDelayMs: r = 0,
  staggerMs: d = 140
}) {
  const s = Ae(() => Array.isArray(t) && t.length > 0 ? t.map((v) => ({
    text: v.text.trim(),
    children: (v.children ?? []).map((j) => j.trim()).filter(Boolean)
  })).filter((v) => v.text !== "") : (e ?? []).map((v) => v.trim()).filter(Boolean).map((v) => ({ text: v, children: [] })), [e, t]), [h, u] = R(null), [b, c] = R(s.length);
  if (G(() => {
    u(null);
  }, [s]), G(() => {
    if (h) {
      c(s.length);
      return;
    }
    if (r <= 0) {
      c(s.length);
      return;
    }
    c(0);
    const v = window.setTimeout(() => {
      c(1);
      const j = window.setInterval(() => {
        c((k) => k >= s.length ? (window.clearInterval(j), k) : k + 1);
      }, Math.max(60, d));
    }, r);
    return () => {
      window.clearTimeout(v);
    };
  }, [h, s.length, r, d]), s.length === 0)
    return null;
  const f = s.find((v) => v.text === h && v.children.length > 0) ?? null;
  return f ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => u(null),
        className: n,
        children: "Nazad"
      }
    ),
    f.children.map((v, j) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(v),
        className: n,
        children: v
      },
      `${f.text}-${j}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: s.slice(0, b).map((v, j) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => v.children.length > 0 ? u(v.text) : a(v.text),
      className: `${n} pitaj-suggestion-enter`,
      children: v.text
    },
    `${v.text}-${j}`
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
]), Sa = [".txt", ".md", ".csv", ".json", ".xml"];
function Na(t) {
  if (Ma.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Sa.some((a) => e.endsWith(a));
}
async function yi(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (a) => {
      const n = a.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(a.name);
      let o = null;
      if (n && typeof URL < "u")
        try {
          o = URL.createObjectURL(a);
        } catch {
          o = null;
        }
      const r = Na(a) ? (await a.text()).slice(0, 4e3) : null;
      return {
        id: `${a.name}-${a.lastModified}-${a.size}`,
        name: a.name,
        textContent: r,
        previewUrl: o,
        isImage: n
      };
    })
  );
}
function _i(t) {
  return t.length === 0 ? "" : `

${t.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function za(t) {
  const { widgetId: e, audio: a, apiUrl: n } = t, o = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), r = new FormData();
  r.append("audio", a, "dictation.webm");
  const d = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: r,
    headers: {
      Accept: "application/json"
    }
  });
  if (!d.ok) {
    const u = await d.json().catch(() => null), c = (() => {
      if (d.status !== 422 || !(u != null && u.errors) || typeof u.errors != "object")
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
      d.status,
      u,
      typeof c == "string" && c || `Transkripcija nije uspjela (${d.status})`,
      d.headers.get("Retry-After")
    );
  }
  const s = await d.json(), h = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!h)
    throw new Error("Transkripcija nije vratila tekst.");
  return h;
}
function Mi({ widgetId: t, apiUrl: e, onTranscript: a, onError: n }) {
  const r = J(null), d = J(null), s = J([]), h = J(!0), u = J(null), b = J(null), c = J(null), f = J(null), v = J(Array.from({ length: 42 }, () => 0.06)), [j, k] = R(!1), [N, z] = R(!1), [S, V] = R(
    () => Array.from({ length: 42 }, () => 0.06)
  ), E = Ae(() => {
    var L;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((L = navigator.mediaDevices) != null && L.getUserMedia);
  }, [t]), p = ee(() => {
    d.current && (d.current.getTracks().forEach((L) => L.stop()), d.current = null);
  }, []), A = ee(() => {
    var L;
    u.current !== null && (window.cancelAnimationFrame(u.current), u.current = null), (L = f.current) == null || L.disconnect(), f.current = null, c.current = null, b.current && (b.current.close(), b.current = null);
  }, []), C = ee(() => {
    const L = Array.from({ length: 42 }, () => 0.06);
    v.current = L, V(L);
  }, []), y = ee((L) => {
    const K = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!K)
      return;
    const ae = new K(), ne = ae.createAnalyser();
    ne.fftSize = 2048, ne.smoothingTimeConstant = 0.78;
    const se = ae.createMediaStreamSource(L);
    se.connect(ne), b.current = ae, c.current = ne, f.current = se;
    const X = new Uint8Array(ne.fftSize), q = () => {
      const _ = c.current;
      if (!_) return;
      _.getByteTimeDomainData(X);
      let B = 0;
      for (let Z = 0; Z < X.length; Z += 1) {
        const re = (X[Z] - 128) / 128;
        B += re * re;
      }
      const te = Math.sqrt(B / X.length), x = Math.max(0.04, Math.min(1, te * 5.2)), O = v.current.slice(1);
      O.push(x), v.current = O, V(O), u.current = window.requestAnimationFrame(q);
    };
    u.current = window.requestAnimationFrame(q);
  }, []), F = ee(async () => {
    if (!(!E || N || r.current || j))
      try {
        const K = await navigator.mediaDevices.getUserMedia({ audio: !0 }), ae = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], se = typeof MediaRecorder.isTypeSupported == "function" ? ae.find((q) => MediaRecorder.isTypeSupported(q)) : void 0, X = se ? new MediaRecorder(K, { mimeType: se }) : new MediaRecorder(K);
        s.current = [], h.current = !0, d.current = K, r.current = X, C(), y(K), X.ondataavailable = (q) => {
          q.data.size > 0 && s.current.push(q.data);
        }, X.onstop = async () => {
          k(!1);
          const q = new Blob(s.current, { type: X.mimeType || "audio/webm" });
          if (s.current = [], r.current = null, p(), A(), q.size === 0) {
            C();
            return;
          }
          if (!h.current) {
            C();
            return;
          }
          z(!0);
          try {
            const _ = await za({
              widgetId: t,
              apiUrl: e,
              audio: q
            });
            a(_);
          } catch (_) {
            console.error("[Pitaj.io] Dictation transcription failed", _), n == null || n(_);
          } finally {
            z(!1), C();
          }
        }, X.onerror = () => {
          k(!1), r.current = null, p(), A(), C();
        }, X.start(), k(!0);
      } catch (K) {
        k(!1), p(), A(), C(), console.error("[Pitaj.io] Dictation microphone access failed", K);
      }
  }, [e, j, N, E, n, a, C, y, p, A, t]), T = ee(() => {
    const L = r.current;
    !L || !j || N || (h.current = !0, L.stop(), k(!1));
  }, [j, N]), I = ee(() => {
    const L = r.current;
    !L || !j || (h.current = !1, L.stop(), k(!1));
  }, [j]);
  return G(() => () => {
    const L = r.current;
    L && L.state !== "inactive" && L.stop(), p(), A();
  }, [p, A]), {
    isSupported: E,
    isListening: j,
    isProcessing: N,
    waveformLevels: S,
    start: F,
    stopAndTranscribe: T,
    cancel: I
  };
}
const Aa = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Gt() {
  const [t, e] = R(0);
  return G(() => {
    const a = setTimeout(() => e(1), 1600), n = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(n);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(va, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: Aa[t] }, t)
  ] });
}
const Ca = St(
  () => import("./InlineWidgetRenderer-bpYWR9tL.js"),
  (t) => t.InlineWidgetRenderer
);
function Ia(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ta(t) {
  const e = t.split(`
`).map((r) => r.trim()).filter((r) => r.length > 0);
  if (e.length < 2) return null;
  let a = "Forma";
  const n = e[0];
  if (/^forma:\s*/i.test(n))
    a = n.replace(/^forma:\s*/i, "").trim() || "Forma";
  else if (/^form:\s*/i.test(n))
    a = n.replace(/^form:\s*/i, "").trim() || "Form";
  else if (/^kontakt\s+upit:\s*/i.test(n))
    a = "Kontakt upit";
  else if (/^rezervacija/i.test(n))
    a = n.replace(/:\s*$/, "").trim();
  else if (/^prijava\s+za\s+demo/i.test(n))
    a = "Prijava za demo";
  else
    return null;
  const o = e.slice(1).map((r) => {
    if (!r.startsWith("- ") && !r.startsWith("* ")) return null;
    const d = r.slice(2), s = d.indexOf(":");
    if (s < 1) return null;
    const h = d.slice(0, s).trim(), u = d.slice(s + 1).trim();
    return !h || !u ? null : { label: h, value: u };
  }).filter((r) => !!r);
  return o.length < 1 ? null : { title: a, entries: o };
}
function La({
  conversation: t,
  config: e,
  language: a = "bs",
  isStreaming: n,
  rateLimitCountdown: o,
  errorBanner: r,
  onSendMessage: d,
  onApiError: s,
  onSubmitSatisfaction: h
}) {
  var _, B, te;
  const [u, b] = R(""), [c, f] = R(!1), [v, j] = R(null), [k, N] = R([]), z = J(null), S = J(null), V = J(null), E = e.content || {}, p = e.chatAvailable === !1, A = e.transcribeAvailable === !1, C = n || o !== null || p, y = Mi({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: ee((x) => {
      b((O) => O ? `${O} ${x}` : x);
    }, []),
    onError: ee((x) => {
      s == null || s(x, "Greška pri transkripciji.");
    }, [s])
  });
  G(() => {
    const x = z.current;
    x && (x.scrollTop = x.scrollHeight);
  }, [t.messages, n]), G(() => {
    const x = S.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, 96)}px`);
  }, [u]), G(() => {
    f(!1);
  }, [E.dismissibleNotice]);
  const F = (x) => {
    N((O) => {
      const Z = O.find((re) => re.id === x);
      if (Z != null && Z.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(Z.previewUrl);
        } catch {
        }
      return O.filter((re) => re.id !== x);
    });
  }, T = (x) => {
    const O = (x ?? u).trim();
    if (!O && k.length === 0 || C) return;
    const Z = `${O}${_i(k)}`.trim();
    d(Z), k.forEach((re) => {
      if (re.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(re.previewUrl);
        } catch {
        }
    }), N([]), x || (b(""), S.current && (S.current.style.height = "auto"));
  }, I = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), T());
  }, L = E.messagePlaceholder || e.placeholder || D("placeholder", a), K = ((_ = E.dismissibleNotice) == null ? void 0 : _.trim()) || "", ae = ((B = E.footerText) == null ? void 0 : B.trim()) || "", ne = E.showSuggestedMessages === !1 || E.keepShowingSuggestedMessages !== !0 ? [] : E.suggestedMessageRows || [], se = ((te = [...t.messages].reverse().find((x) => x.sender === "ai")) == null ? void 0 : te.id) ?? null, X = y.isListening, q = async (x, O) => {
    navigator.clipboard && (await navigator.clipboard.writeText(O), j(x), window.setTimeout(() => {
      j((Z) => Z === x ? null : Z);
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
      t.messages.map((x) => {
        const O = x.sender === "user", Z = O ? Ta(x.content) : null, re = !O && x.isStreaming && !x.content && !x.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${O ? "user" : "ai"}${x.widget ? " has-widget" : ""}${re ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              O ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${Z ? "is-form-submission" : ""}`, children: Z ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: Z.title.toLowerCase().startsWith("forma") ? Z.title : `Forma: ${Z.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: Z.entries.map((ce) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: ce.label }),
                  /* @__PURE__ */ i("dd", { children: ce.value })
                ] }, `${x.id}-${ce.label}`)) })
              ] }) : x.content }) : /* @__PURE__ */ i(he, { children: [
                x.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(xa, { content: x.content }),
                  x.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                x.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Ca, { widget: x.widget, onAction: (ce) => T(ce) }) }),
                x.isStreaming && !x.content && !x.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Gt, {}) })
              ] }),
              !O && x.sources && x.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: D("sources", a) }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: x.sources.map((ce) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: ce.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: ce.title }),
                      /* @__PURE__ */ i(ua, { size: 10 })
                    ]
                  },
                  ce.id
                )) })
              ] }),
              !O && E.showFollowupSuggestions !== !1 && x.suggestedQuestions && x.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: x.suggestedQuestions.map((ce, de) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => T(ce),
                  disabled: C,
                  className: "pitaj-followup-chip",
                  children: ce
                },
                `sug-f-${de}`
              )) }),
              (!x.isStreaming || !!x.content || !!x.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: Ia(x.timestamp) }),
                !O && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  x.id === se && !n && /* @__PURE__ */ i(he, { children: E.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(he, { children: [
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
                  x.id === se && !n && E.copyMessageEnabled !== !1 && !!x.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void q(x.id, x.content),
                      className: `pitaj-msg-action-btn ${v === x.id ? "is-active" : ""}`,
                      "aria-label": v === x.id ? D("copied", a) : D("copyAnswer", a),
                      title: v === x.id ? D("copied", a) : D("copyAnswer", a),
                      children: v === x.id ? /* @__PURE__ */ i(st, { size: 14 }) : /* @__PURE__ */ i(ha, { size: 14 })
                    }
                  )
                ] }),
                O && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  st,
                  {
                    size: 10,
                    className: x.status === "read" ? "text-accent" : ""
                  }
                ) })
              ] })
            ] })
          },
          x.id
        );
      }),
      n && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Gt, {}) }) }) })
    ] }),
    (r || o) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: o ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${o}s.` : r }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        ki,
        {
          rows: ne,
          fallbackQuestions: E.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: T,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      k.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: k.map((x) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: x.previewUrl ? /* @__PURE__ */ i("img", { src: x.previewUrl, alt: x.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(xi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: x.name, children: x.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => F(x.id),
            "aria-label": `Ukloni ${x.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(xe, { size: 10 })
          }
        )
      ] }, x.id)) }),
      K && !c && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: K }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => f(!0),
            "aria-label": D("close", a),
            children: /* @__PURE__ */ i(xe, { size: 12 })
          }
        )
      ] }),
      y.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: D("transcribing", a) }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${X ? "is-recording" : ""}`, children: [
        E.attachmentsEnabled && /* @__PURE__ */ i(he, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: V,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (x) => {
                const O = x.currentTarget.files;
                if (x.currentTarget.value = "", !O || O.length === 0) return;
                const Z = await yi(O);
                N((re) => [...re, ...Z].slice(0, 3));
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
                var x;
                return (x = V.current) == null ? void 0 : x.click();
              },
              children: /* @__PURE__ */ i(wi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: S,
            value: u,
            onInput: (x) => b(x.target.value),
            onKeyDown: I,
            placeholder: L,
            rows: 1,
            disabled: C,
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
              onClick: () => y.cancel(),
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: y.waveformLevels.map((x, O) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + x * 15))}px` }
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
              onClick: () => y.stopAndTranscribe(),
              disabled: C || y.isProcessing,
              children: /* @__PURE__ */ i(st, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(he, { children: [
          E.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${y.isProcessing ? "is-active" : ""}`,
              "aria-label": D("dictation", a),
              title: y.isProcessing ? D("transcribing", a) : y.isSupported ? D("dictation", a) : "Diktiranje nije podržano",
              onClick: () => y.start(),
              disabled: C || A || !y.isSupported || y.isProcessing,
              children: /* @__PURE__ */ i(ji, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => T(),
              disabled: C || !u.trim() && k.length === 0,
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
function Pa({
  config: t,
  language: e = "bs",
  openedByUser: a = !1,
  onStart: n,
  onApiError: o
}) {
  var X, q;
  const [r, d] = R(""), [s, h] = R(!1), [u, b] = R(!1), [c, f] = R([]), v = J(null), j = J(null), k = t.content || {}, N = t.chatAvailable === !1, z = t.transcribeAvailable === !1, S = Mi({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: ee((_) => {
      d((B) => B ? `${B} ${_}` : _);
    }, []),
    onError: ee((_) => {
      o == null || o(_, "Greška pri transkripciji.");
    }, [o])
  });
  G(() => {
    var _;
    a && ((_ = v.current) == null || _.focus({ preventScroll: !0 }));
  }, [a]), G(() => {
    if (typeof window > "u") return;
    const _ = window.matchMedia("(max-width: 768px)"), B = () => h(_.matches);
    return B(), _.addEventListener("change", B), () => _.removeEventListener("change", B);
  }, []), G(() => {
    b(!1);
  }, [k.dismissibleNotice]);
  const E = (s && k.useDifferentMessageMobile && k.mobileWelcomeMessage ? k.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((_) => _.trim()).filter((_) => _.length > 0), p = k.autoShowInitialMessages !== !1 && !a, A = !s || k.showAutoPopupMobile !== !1, C = s && k.useDifferentDurationMobile && typeof k.mobileAutoShowDurationSeconds == "number" ? k.mobileAutoShowDurationSeconds : k.autoShowDurationSeconds ?? 0, y = p && A ? Math.max(0, C) * 1e3 : 0, F = (_) => {
    f((B) => {
      const te = B.find((x) => x.id === _);
      if (te != null && te.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(te.previewUrl);
        } catch {
        }
      return B.filter((x) => x.id !== _);
    });
  }, T = (_) => {
    const B = (_ ?? r).trim();
    if (!B && c.length === 0 || N) return;
    const te = `${B}${_i(c)}`.trim();
    n(te), c.forEach((x) => {
      if (x.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(x.previewUrl);
        } catch {
        }
    }), d(""), f([]);
  }, I = (_) => {
    _.key === "Enter" && !_.shiftKey && (_.preventDefault(), T());
  }, L = k.showSuggestedMessages === !1 ? [] : k.suggestedMessageRows || [], K = k.messagePlaceholder || t.placeholder || D("inputPlaceholder", e), ae = ((X = k.dismissibleNotice) == null ? void 0 : X.trim()) || "", ne = ((q = k.footerText) == null ? void 0 : q.trim()) || "", se = S.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (E.length > 0 ? E : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((_, B) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: _ }) }) }, `welcome-${B}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        ki,
        {
          rows: L,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: T,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: y,
          staggerMs: 150
        }
      ),
      c.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: c.map((_) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: _.previewUrl ? /* @__PURE__ */ i("img", { src: _.previewUrl, alt: _.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(xi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: _.name, children: _.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => F(_.id),
            "aria-label": `Ukloni ${_.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(xe, { size: 10 })
          }
        )
      ] }, _.id)) }),
      ae && !u && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: ae }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => b(!0),
            "aria-label": D("close", e),
            children: /* @__PURE__ */ i(xe, { size: 12 })
          }
        )
      ] }),
      S.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: D("transcribing", e) }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${se ? "is-recording" : ""}`, children: [
        k.attachmentsEnabled && /* @__PURE__ */ i(he, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: j,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (_) => {
                const B = _.currentTarget.files;
                if (_.currentTarget.value = "", !B || B.length === 0) return;
                const te = await yi(B);
                f((x) => [...x, ...te].slice(0, 3));
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
                var _;
                return (_ = j.current) == null ? void 0 : _.click();
              },
              children: /* @__PURE__ */ i(wi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: v,
            value: r,
            onInput: (_) => d(_.target.value),
            onKeyDown: I,
            placeholder: K,
            rows: 1,
            disabled: N,
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
              onClick: () => S.cancel(),
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: S.waveformLevels.map((_, B) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + _ * 15))}px` }
            },
            `dict-wave-${B}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": D("sendAudio", e),
              title: D("sendAudio", e),
              onClick: () => S.stopAndTranscribe(),
              disabled: N || S.isProcessing,
              children: /* @__PURE__ */ i(st, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(he, { children: [
          k.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${S.isProcessing ? "is-active" : ""}`,
              "aria-label": D("dictation", e),
              title: S.isProcessing ? D("transcribing", e) : S.isSupported ? D("dictation", e) : "Diktiranje nije podržano",
              onClick: () => S.start(),
              disabled: N || z || !S.isSupported || S.isProcessing,
              children: /* @__PURE__ */ i(ji, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => T(),
              disabled: N || !r.trim() && c.length === 0,
              className: "pitaj-send-btn",
              "aria-label": D("sendMessage", e),
              children: /* @__PURE__ */ i(bi, { size: 16 })
            }
          )
        ] })
      ] }),
      ne && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: ne }),
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
  config: n
}) {
  var b, c, f, v, j, k;
  const o = ((b = n.content) == null ? void 0 : b.launcherIconStyle) || "message-circle", r = typeof ((c = n.content) == null ? void 0 : c.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", d = ((f = n.content) == null ? void 0 : f.launcherShowText) === !0, s = ((v = n.content) == null ? void 0 : v.launcherTextSide) === "left" ? "left" : "right", h = d ? ((k = (j = n.content) == null ? void 0 : j.launcherText) == null ? void 0 : k.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${d ? "has-label" : ""} ${d && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && r !== "" ? /* @__PURE__ */ i("img", { src: r, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? na : o === "message-square" ? vi : o === "contact" ? pa : oa, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(xe, { size: 22 }) })
        ] }),
        h && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: h }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function Da({ isOpen: t, onOpen: e, config: a }) {
  var A, C, y, F;
  const [n, o] = R(!1), [r, d] = R(!1), [s, h] = R(!1), [u, b] = R(t), c = J(null);
  G(() => {
    t && (b(!0), h(!1));
  }, [t]), G(() => {
    const T = () => {
      var L;
      if (typeof window > "u") return;
      let I = window.innerWidth <= 640;
      if (!I && c.current) {
        const K = (L = c.current.closest(".pitaj-root")) == null ? void 0 : L.parentElement;
        K && K.clientWidth > 0 && K.clientWidth <= 640 && (I = !0);
      }
      o(I);
    };
    return T(), window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, []);
  const f = a.content || {}, v = f.autoShowInitialMessages !== !1, j = f.showAutoPopupMobile !== !1, k = !n || j, N = n && f.useDifferentDurationMobile && typeof f.mobileAutoShowDurationSeconds == "number" ? f.mobileAutoShowDurationSeconds : f.autoShowDurationSeconds ?? 0;
  if (G(() => {
    if (!v || !k || r || t || u) {
      h(!1);
      return;
    }
    const T = Math.max(0, N) * 1e3, I = setTimeout(() => {
      h(!0);
    }, T);
    return () => clearTimeout(I);
  }, [v, k, r, t, u, N]), !s || t)
    return null;
  let z = "";
  n && f.useDifferentMessageMobile && ((A = f.mobileWelcomeMessage) != null && A.trim()) ? z = f.mobileWelcomeMessage.trim() : (C = f.popupMessageText) != null && C.trim() ? z = f.popupMessageText.trim() : (y = a.welcomeMessage) != null && y.trim() ? z = a.welcomeMessage.trim() : (F = a.welcomeHeadline) != null && F.trim() ? z = a.welcomeHeadline.trim() : z = "Zdravo! Kako vam mogu pomoći danas?";
  const S = (T) => {
    T.stopPropagation(), T.preventDefault(), d(!0), h(!1);
  }, V = () => {
    e();
  }, E = a.title || a.name || "Pitaj.io Asistent", p = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: c,
      className: "pitaj-launcher-popup",
      onClick: V,
      role: "button",
      tabIndex: 0,
      "aria-label": `${E}: ${z}`,
      onKeyDown: (T) => {
        (T.key === "Enter" || T.key === " ") && (T.preventDefault(), V());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: p ? /* @__PURE__ */ i("img", { src: p, alt: "" }) : /* @__PURE__ */ i(dt, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: E })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: S,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ i(xe, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-popup-body", children: z }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function Ha(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(n / (1e3 * 60)), r = Math.floor(n / (1e3 * 60 * 60)), d = Math.floor(n / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : r < 24 ? `prije ${r}h` : d < 7 ? `prije ${d}d` : e.toLocaleDateString();
}
function $a({ config: t, visitorId: e, onSelectTicket: a }) {
  const [n, o] = R([]), [r, d] = R("open"), [s, h] = R(1), [u, b] = R(!0), [c, f] = R(!0), [v, j] = R(!1), [k, N] = R(null), z = J(null), S = J(null), V = J(!1);
  G(() => {
    let A = !0;
    return f(!0), o([]), h(1), b(!0), N(null), V.current = !1, vt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: 1,
      perPage: 15
    }).then((C) => {
      A && (o(C.tickets), b(C.hasMore), h(1));
    }).catch((C) => {
      A && N(C instanceof Error ? C.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      A && f(!1);
    }), () => {
      A = !1;
    };
  }, [t.apiUrl, t.companyId, e, r]);
  const E = ee(() => {
    if (c || V.current || !u) return;
    V.current = !0, j(!0);
    const A = s + 1;
    vt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: A,
      perPage: 15
    }).then((C) => {
      o((y) => {
        const F = new Set(y.map((I) => I.id)), T = C.tickets.filter((I) => !F.has(I.id));
        return [...y, ...T];
      }), b(C.hasMore), h(A);
    }).catch((C) => {
      console.error("[Pitaj.io] Error loading more tickets:", C);
    }).finally(() => {
      j(!1), V.current = !1;
    });
  }, [t.apiUrl, t.companyId, u, c, s, r, e]);
  return G(() => {
    const A = S.current, C = z.current;
    if (!A || !C || !u || c || v) return;
    const y = new IntersectionObserver(
      (F) => {
        var T;
        (T = F[0]) != null && T.isIntersecting && E();
      },
      { root: C, rootMargin: "120px" }
    );
    return y.observe(A), () => y.disconnect();
  }, [u, c, v, E]), /* @__PURE__ */ i(
    "div",
    {
      ref: z,
      className: "pitaj-tickets-screen",
      onScroll: (A) => {
        const C = A.currentTarget;
        !C || !u || c || V.current || C.scrollHeight - C.scrollTop - C.clientHeight < 120 && E();
      },
      tabIndex: 0,
      role: "region",
      "aria-label": "Lista tiketa",
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
          /* @__PURE__ */ i(
            "button",
            {
              className: r === "open" ? "is-active" : "",
              onClick: () => d("open"),
              role: "tab",
              "aria-selected": r === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: r === "closed" ? "is-active" : "",
              onClick: () => d("closed"),
              role: "tab",
              "aria-selected": r === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        c ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : k ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: k }) }) : n.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(vi, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: r === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: r === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          n.map((A) => {
            const C = A.messages || [], y = C.length > 0 ? C[C.length - 1] : null, F = C.length, T = F === 1 ? "1 poruka" : F >= 2 && F <= 4 ? `${F} poruke` : `${F} poruka`;
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
                  y && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: y.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: Ha(A.updatedAt) }),
                    F > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: T })
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
          /* @__PURE__ */ i("div", { ref: S, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const Ba = St(() => import("./HistoryScreen-CAZKmyV0.js"), (t) => t.HistoryScreen), Fa = St(() => import("./FormActionsScreen-DleNRDUl.js"), (t) => t.FormActionsScreen);
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
  const n = e.match(/^hsla?\(\s*([0-9.]+)(?:deg)?\s*[, ]\s*([0-9.]+)%\s*[, ]\s*([0-9.]+)%/);
  if (n) {
    const o = Number(n[1]) % 360, r = Number(n[2]) / 100, d = Number(n[3]) / 100, s = (1 - Math.abs(2 * d - 1)) * r, h = s * (1 - Math.abs(o / 60 % 2 - 1)), u = d - s / 2;
    let b = 0, c = 0, f = 0;
    return 0 <= o && o < 60 ? (b = s, c = h, f = 0) : 60 <= o && o < 120 ? (b = h, c = s, f = 0) : 120 <= o && o < 180 ? (b = 0, c = s, f = h) : 180 <= o && o < 240 ? (b = 0, c = h, f = s) : 240 <= o && o < 300 ? (b = h, c = 0, f = s) : 300 <= o && o < 360 && (b = s, c = 0, f = h), {
      r: Math.round((b + u) * 255),
      g: Math.round((c + u) * 255),
      b: Math.round((f + u) * 255)
    };
  }
  return null;
}
function Ua(t) {
  return Je(t);
}
function tt(t, e) {
  const a = Je(t);
  return a ? `rgba(${a.r}, ${a.g}, ${a.b}, ${e})` : null;
}
function Ra(t, e, a) {
  const n = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(a)}`;
}
function Ge(t) {
  const e = Je(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Oa(t, e) {
  const a = Je(t);
  if (a)
    return (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255 <= 0.55;
  if (e) {
    const n = Je(e);
    if (n)
      return (0.2126 * n.r + 0.7152 * n.g + 0.0722 * n.b) / 255 > 0.55;
  }
  return !1;
}
function Va(t) {
  const e = Ua(t);
  if (!e) return t;
  const a = Ge(t) === "#111827", n = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return Ra(
    e.r + (o - e.r) * n,
    e.g + (o - e.g) * n,
    e.b + (o - e.b) * n
  );
}
function Ka({
  config: t,
  startOpen: e = !1,
  initialScreen: a = "new-conversation",
  onEvent: n,
  isInline: o = !1,
  isMobile: r,
  isCanvasPreview: d = !1
}) {
  var ye, _e, Me, Te, Le, Pe, Ee, De, He, $e, Be, Fe, Ue, Re, w;
  const {
    config: s,
    setConfig: h,
    isOpen: u,
    setIsOpen: b,
    screen: c,
    setScreen: f,
    conversations: v,
    activeConversation: j,
    totalUnread: k,
    isStreaming: N,
    rateLimitTimer: z,
    errorBanner: S,
    selectConversation: V,
    startNewConversation: E,
    endConversation: p,
    deleteConversation: A,
    sendUserMessage: C,
    submitSatisfaction: y,
    visitorContact: F,
    visitorId: T,
    activeConversationId: I,
    activeLanguage: L,
    appendConversationMessage: K,
    handleApiError: ae
  } = aa(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: n,
    onActionTrigger: (l) => {
      if (q(!0), b(!0), (c === "history" || c === "new-conversation") && f("conversation"), l.widget_id || l.widget)
        return;
      const g = Number(l.id), m = Number(l.form_id), M = Number.isInteger(g) && g > 0 ? g : null, H = Number.isInteger(m) && m > 0 ? -m : null;
      B(M ?? H);
    }
  }), ne = J(a), se = J(e), [X, q] = R(e), [_, B] = R(() => {
    var l, g, m, M;
    return ((l = s.previewDraft) == null ? void 0 : l.initialStep) === "form" && !!!(s.previewDraft.widget || (g = s.previewDraft.action) != null && g.widget || (m = s.previewDraft.action) != null && m.widget_id) ? ((M = s.previewDraft.action) == null ? void 0 : M.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  G(() => {
    var l, g, m, M, H, Y, $;
    if (((l = s.previewDraft) == null ? void 0 : l.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (g = s.previewDraft.action) != null && g.widget || (m = s.previewDraft.action) != null && m.widget_id)) {
        const P = ((M = s.previewDraft.action) == null ? void 0 : M.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        P !== null && B(P);
      }
    } else (((H = s.previewDraft) == null ? void 0 : H.initialStep) === "idle" || ((Y = s.previewDraft) == null ? void 0 : Y.initialStep) === "submitted" || (($ = s.previewDraft) == null ? void 0 : $.initialStep) === "dismissed") && B(null);
  }, [
    (ye = s.previewDraft) == null ? void 0 : ye.initialStep,
    (Me = (_e = s.previewDraft) == null ? void 0 : _e.action) == null ? void 0 : Me.id,
    (Le = (Te = s.previewDraft) == null ? void 0 : Te.form) == null ? void 0 : Le.id,
    (Pe = s.previewDraft) == null ? void 0 : Pe.widget
  ]);
  const [te, x] = R(null), O = J(null), [Z, re] = R(() => typeof r == "boolean" ? r : o ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  G(() => {
    if (typeof r == "boolean") {
      re(r);
      return;
    }
    const l = () => {
      if (typeof window > "u") return;
      if (o) {
        re(!1);
        return;
      }
      let g = window.innerWidth <= 640;
      if (!g && O.current) {
        const m = O.current.getRootNode(), M = m instanceof ShadowRoot ? m.host : O.current.parentElement, H = (M == null ? void 0 : M.parentElement) || M;
        H && H.clientWidth > 0 && H.clientWidth <= 640 && (g = !0);
      }
      re(g);
    };
    return l(), window.addEventListener("resize", l), window.addEventListener("orientationchange", l), () => {
      window.removeEventListener("resize", l), window.removeEventListener("orientationchange", l);
    };
  }, [r]), G(() => {
    if (typeof window > "u") return;
    const l = () => {
      const m = O.current;
      if (!m) return;
      const M = window.visualViewport;
      if (M) {
        const H = M.height < window.innerHeight - 100;
        m.style.setProperty("--pitaj-viewport-height", `${Math.round(M.height)}px`), m.style.setProperty("--pitaj-viewport-top", `${Math.round(M.offsetTop)}px`), m.style.setProperty("--pitaj-viewport-left", `${Math.round(M.offsetLeft)}px`), m.style.setProperty(
          "--pitaj-input-safe-bottom",
          H ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        m.style.setProperty("--pitaj-viewport-height", "100dvh"), m.style.setProperty("--pitaj-viewport-top", "0px"), m.style.setProperty("--pitaj-viewport-left", "0px"), m.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    l();
    const g = window.visualViewport;
    return g && (g.addEventListener("resize", l), g.addEventListener("scroll", l)), window.addEventListener("resize", l), window.addEventListener("orientationchange", l), () => {
      g && (g.removeEventListener("resize", l), g.removeEventListener("scroll", l)), window.removeEventListener("resize", l), window.removeEventListener("orientationchange", l);
    };
  }, [u, Z]), G(() => {
    if (typeof document > "u" || !u || !Z || o || d) return;
    const l = document.body.style.overflow, g = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = l, document.body.style.touchAction = g;
    };
  }, [u, Z, o, d]), G(() => {
    var m;
    if (typeof window > "u" || o) return;
    const l = (m = O.current) == null ? void 0 : m.getRootNode(), g = l instanceof ShadowRoot ? l.host : null;
    if (g) {
      if (d || g.hasAttribute("data-pitaj-preview") || g.classList.contains("pitaj-preview-host")) {
        g.style.width = "100%", g.style.height = "100%", g.style.top = "0", g.style.left = "0", g.style.position = "relative";
        return;
      }
      u && Z ? (g.style.top = "0", g.style.left = "0", g.style.width = "100%", g.style.height = "100%", g.setAttribute("data-pitaj-mobile-open", "true")) : (g.style.top = "", g.style.left = "", g.style.width = "0", g.style.height = "0", g.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [u, Z, o, d]);
  const ce = s.formsEnabled === !0 && s.formsAvailable !== !1, de = Ae(() => {
    var m, M;
    const l = s.actions || [];
    if (l.length > 0 && typeof ((m = l[0]) == null ? void 0 : m.id) == "number")
      return l[0].id;
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
    startConversation: (l) => {
      q(!0), b(!0), l && l.trim() ? E(l.trim()) : f("new-conversation");
    },
    setScreen: (l) => f(l),
    setConfig: (l) => {
      const g = {
        ...s,
        ...l,
        colors: { ...s.colors || {}, ...l.colors || {} },
        content: { ...s.content || {}, ...l.content || {} },
        features: { ...s.features || {}, ...l.features || {} }
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
  Yt(ue.current, ge), G(() => () => Yt(ue.current, null), []), G(() => {
    a !== ne.current && (ne.current = a, f(a));
  }, [a, f]), G(() => {
    e !== se.current && (se.current = e, e && q(!0), b(e));
  }, [e, b]), G(() => {
    if (c === "forms") {
      ce && de !== null && B(de), f("new-conversation");
      return;
    }
    c === "contact" && f("new-conversation");
  }, [de, ce, c, f]), G(() => {
    var M;
    if (typeof document > "u") return;
    const l = (M = s.content) == null ? void 0 : M.fontFamily;
    if (!l) return;
    const g = l.trim().toLowerCase();
    let m = "";
    if (g === "inter" ? m = "family=Inter:wght@400;500;600;700" : g === "geist" ? m = "family=Geist:wght@400;500;600;700" : g === "plus jakarta sans" && (m = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), m) {
      const H = `pitaj-font-${g.replace(/\s+/g, "-")}`;
      if (!document.getElementById(H)) {
        const Y = document.createElement("link");
        Y.id = H, Y.rel = "stylesheet", Y.href = `https://fonts.googleapis.com/css2?${m}&display=swap`, document.head.appendChild(Y);
      }
    }
  }, [(Ee = s.content) == null ? void 0 : Ee.fontFamily]);
  const Ce = Ae(() => {
    var be, fe, Xe, Oe, Ve, ve;
    if (s.cssVars && Object.keys(s.cssVars).length > 0)
      return s.cssVars;
    if ((be = s.theme) != null && be.css_vars && Object.keys(s.theme.css_vars).length > 0)
      return s.theme.css_vars;
    const l = s.colors || {}, g = ((fe = s.content) == null ? void 0 : fe.themeMode) === "dark" ? "dark" : "light", m = {};
    if (l.primaryColor) {
      m["--pitaj-accent"] = l.primaryColor, m["--pitaj-bubble-user"] = l.primaryColor, m["--pitaj-accent-hover"] = Va(l.primaryColor), m["--pitaj-accent-contrast"] = Ge(l.primaryColor), m["--pitaj-bubble-user-fg"] = Ge(l.primaryColor);
      const me = tt(l.primaryColor, 0.1), Ke = tt(l.primaryColor, 0.16), Nt = tt(l.primaryColor, 0.35);
      me && (m["--pitaj-accent-soft"] = me), Ke && (m["--pitaj-accent-soft-strong"] = Ke), Nt && (m["--pitaj-accent-ring"] = Nt);
    }
    const M = g === "dark" ? "#111827" : "#ffffff", H = l.headerBg || M, Y = Oa(H, l.headerFg), $ = l.headerFg || (Y ? "#ffffff" : "#0f172a");
    m["--pitaj-header-bg"] = H, m["--pitaj-header-fg"] = $, Y ? m["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)" : H.toLowerCase() === "#ffffff" || H.toLowerCase() === "#fff" ? m["--pitaj-header-gradient"] = "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : m["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", Y ? (m["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", m["--pitaj-header-icon-hover"] = "#ffffff", m["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", m["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", m["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", m["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", m["--pitaj-header-badge-fg"] = "#ffffff", m["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (m["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", m["--pitaj-header-icon-hover"] = "#0f172a", m["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", m["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", m["--pitaj-header-border"] = l.border || "rgba(15, 23, 42, 0.08)", m["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", m["--pitaj-header-badge-fg"] = "#0f172a", m["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)"), m["--pitaj-chrome-border"] = g === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", l.surfaceBg && (m["--pitaj-surface"] = l.surfaceBg), l.subtle ? m["--pitaj-surface-subtle"] = l.subtle : l.surfaceBg && (m["--pitaj-surface-subtle"] = tt(l.surfaceBg, 0.9) || l.surfaceBg), l.bubbleAiBg && (m["--pitaj-bubble-ai"] = l.bubbleAiBg), l.textFg && (m["--pitaj-bubble-ai-fg"] = l.textFg), l.textFg && (m["--pitaj-fg"] = l.textFg), l.mutedFg && (m["--pitaj-muted"] = l.mutedFg), l.border && (m["--pitaj-border"] = l.border), l.hover && (m["--pitaj-hover"] = l.hover), l.sendAccent && (m["--pitaj-send-accent"] = l.sendAccent, m["--pitaj-send-accent-contrast"] = Ge(l.sendAccent));
    const W = (Xe = s.content) == null ? void 0 : Xe.launcherButtonColor;
    W && (m["--pitaj-launcher-bg"] = W, m["--pitaj-launcher-fg"] = Ge(W));
    const P = (Oe = s.content) == null ? void 0 : Oe.cornerRadius;
    if (P) {
      const me = P === "sharp" || P === "0px" ? "0px" : P === "small" || P === "8px" ? "8px" : P === "medium" || P === "12px" ? "12px" : P === "large" || P === "16px" ? "16px" : P;
      m["--pitaj-radius"] = me, me === "0px" ? (m["--pitaj-radius-bubble"] = "0px", m["--pitaj-radius-input"] = "0px", m["--pitaj-radius-btn"] = "0px", m["--pitaj-radius-avatar"] = "0px", m["--pitaj-radius-full"] = "0px", m["--pitaj-radius-corner-sm"] = "0px", m["--pitaj-launcher-radius"] = "0px", m["--pitaj-launcher-pill-radius"] = "0px", m["--pitaj-badge-radius"] = "0px") : me === "8px" ? (m["--pitaj-radius-bubble"] = "8px", m["--pitaj-radius-input"] = "8px", m["--pitaj-radius-btn"] = "6px", m["--pitaj-radius-avatar"] = "6px", m["--pitaj-radius-full"] = "8px", m["--pitaj-radius-corner-sm"] = "2px", m["--pitaj-launcher-radius"] = "8px", m["--pitaj-launcher-pill-radius"] = "8px", m["--pitaj-badge-radius"] = "4px") : me === "12px" ? (m["--pitaj-radius-bubble"] = "12px", m["--pitaj-radius-input"] = "12px", m["--pitaj-radius-btn"] = "8px", m["--pitaj-radius-avatar"] = "10px", m["--pitaj-radius-full"] = "12px", m["--pitaj-radius-corner-sm"] = "4px", m["--pitaj-launcher-radius"] = "12px", m["--pitaj-launcher-pill-radius"] = "12px", m["--pitaj-badge-radius"] = "6px") : (m["--pitaj-radius-bubble"] = "18px", m["--pitaj-radius-input"] = "14px", m["--pitaj-radius-btn"] = "10px", m["--pitaj-radius-avatar"] = "50%", m["--pitaj-radius-full"] = "999px", m["--pitaj-radius-corner-sm"] = "4px", m["--pitaj-launcher-radius"] = "50%", m["--pitaj-launcher-pill-radius"] = "999px", m["--pitaj-badge-radius"] = "999px");
    }
    const le = (Ve = s.content) == null ? void 0 : Ve.fontFamily;
    if (le) {
      const me = le.toLowerCase(), Ke = me === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : me === "arial" ? "Arial, Helvetica, sans-serif" : me === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : me === "georgia" ? "Georgia, serif" : me === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : me === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${le}', 'Inter', system-ui, sans-serif`;
      m["--pitaj-font"] = Ke, m.fontFamily = Ke;
    }
    const U = (ve = s.content) == null ? void 0 : ve.fontSize;
    return U && (m["--pitaj-font-size"] = U, m.fontSize = U), m;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (De = s.content) == null ? void 0 : De.themeMode,
    (He = s.content) == null ? void 0 : He.launcherButtonColor,
    ($e = s.content) == null ? void 0 : $e.cornerRadius,
    (Be = s.content) == null ? void 0 : Be.fontFamily,
    (Fe = s.content) == null ? void 0 : Fe.fontSize
  ]), we = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ i(he, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: O,
      className: `pitaj-root ${we} ${u ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${d ? "is-canvas-preview" : ""} ${Z ? "is-mobile" : ""} ${o && ((Ue = s.content) != null && Ue.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: Ce,
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
                ja,
                {
                  screen: c,
                  activeConversation: j,
                  config: s,
                  language: L,
                  onBack: () => {
                    const l = te || "new-conversation";
                    x(null), f(l);
                  },
                  onClose: () => {
                    b(!1);
                  },
                  onNewConversation: () => {
                    x(null), f("new-conversation");
                  },
                  onEndConversation: () => {
                    p(), b(!1);
                  },
                  onDeleteConversation: ((Re = s.content) == null ? void 0 : Re.deleteConversationsEnabled) !== !1 && j ? () => A(j.id) : void 0,
                  onViewHistory: () => {
                    x(null), f("history");
                  },
                  onViewTickets: () => {
                    x(null), f("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                c === "conversation" && j && /* @__PURE__ */ i(
                  La,
                  {
                    conversation: j,
                    config: s,
                    language: L,
                    isStreaming: N,
                    rateLimitCountdown: z,
                    errorBanner: S,
                    onSendMessage: C,
                    onApiError: ae,
                    onSubmitSatisfaction: (l, g) => y(j.id, l, g)
                  }
                ),
                c === "new-conversation" && /* @__PURE__ */ i(
                  Pa,
                  {
                    config: s,
                    language: L,
                    openedByUser: X,
                    onStart: (l) => {
                      E(l);
                    },
                    onApiError: ae
                  }
                ),
                c === "history" && /* @__PURE__ */ i(
                  Ba,
                  {
                    conversations: v,
                    config: s,
                    language: L,
                    onSelectConversation: (l) => {
                      x("history"), V(l);
                    },
                    onNewConversation: () => {
                      x(null), f("new-conversation");
                    },
                    onDeleteConversation: ((w = s.content) == null ? void 0 : w.deleteConversationsEnabled) !== !1 ? A : void 0
                  }
                ),
                c === "tickets" && /* @__PURE__ */ i(
                  $a,
                  {
                    config: s,
                    visitorId: T,
                    onSelectTicket: (l) => {
                      var $;
                      x("tickets");
                      const g = ($ = l.messages) == null ? void 0 : $.find((W) => W.sender === "user"), m = l.messages && l.messages.length > 0 ? l.messages[l.messages.length - 1] : null, M = g ? g.content.length > 40 ? g.content.slice(0, 40) + "…" : g.content : l.ticketNumber || `Tiket #${l.id}`, Y = {
                        id: l.conversationId ? String(l.conversationId) : String(l.id),
                        title: M,
                        preview: m ? m.content : l.ticketNumber || `Tiket #${l.id}`,
                        timestamp: l.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: l.messages || [],
                        status: l.isResolved ? "ended" : "active",
                        ticketNumber: l.ticketNumber
                      };
                      V(Y);
                    }
                  }
                ),
                (c === "conversation" || c === "new-conversation") && ce && _ !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  Fa,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: I,
                    initialActionId: _,
                    visitorContact: F,
                    onApiError: ae,
                    blockedReason: z !== null ? `Sačekajte ${z}s prije novog zahtjeva.` : null,
                    onSubmitted: (l) => {
                      var g, m;
                      if (K(I, l, "user"), s.mockMode || s.isPreview) {
                        const M = ((m = (g = s.previewDraft) == null ? void 0 : g.form) == null ? void 0 : m.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          K(I, M, "ai");
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
        (!u || !Z) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${u ? "is-widget-open" : "is-widget-closed"}`, children: [
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
              unreadCount: k,
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
function Ya(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * n + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function Za(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function Ga(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, r = Number.parseInt(a.slice(5, 7), 16) / 255, d = Math.max(n, o, r), s = Math.min(n, o, r), h = d - s;
  let u = 0;
  const b = (d + s) / 2, c = h === 0 ? 0 : h / (1 - Math.abs(2 * b - 1));
  if (h !== 0)
    switch (d) {
      case n:
        u = (o - r) / h % 6;
        break;
      case o:
        u = (r - n) / h + 2;
        break;
      default:
        u = (n - o) / h + 4;
        break;
    }
  return { h: Math.round((u * 60 + 360) % 360), s: Math.round(c * 100), l: Math.round(b * 100) };
}
function Wa(t) {
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
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((r) => typeof r == "object" && r !== null).map((r) => ({
      key: typeof r.key == "string" ? r.key : "",
      type: Wa(r.type),
      label: typeof r.label == "string" ? r.label : "",
      required: r.required === !0,
      placeholder: typeof r.placeholder == "string" ? r.placeholder : void 0,
      options: Array.isArray(r.options) ? r.options.filter((d) => typeof d == "string" && d.trim() !== "") : void 0,
      accept: Array.isArray(r.accept) ? r.accept.filter((d) => typeof d == "string" && d.trim() !== "") : void 0,
      max_size_kb: typeof r.max_size_kb == "number" ? r.max_size_kb : void 0,
      value: typeof r.value == "string" ? r.value : void 0
    })).filter((r) => r.key !== "");
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
  var n, o, r, d, s, h, u, b, c;
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
        const _ = await v.json().catch(() => null);
        if ((_ == null ? void 0 : _.code) === "COUNTRY_BLOCKED" || _ != null && _.blocked)
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
    const j = await v.json(), k = j.accent_color || ((n = ie.colors) == null ? void 0 : n.primaryColor) || "#2563eb", N = Array.isArray(j.suggested_questions) ? j.suggested_questions.filter((_) => typeof _ == "string" && _.trim() !== "").slice(0, 4) : [], z = Array.isArray(j.contact_fields) ? j.contact_fields.filter(
      (_) => _ === "name" || _ === "email" || _ === "phone"
    ) : [], V = (Array.isArray(j.channels) ? j.channels : []).find(
      (_) => typeof _ == "object" && _ !== null && _.channel === "chat_bubble"
    ), E = (V == null ? void 0 : V.enabled) !== !1, p = j.widget_content && typeof j.widget_content == "object" ? j.widget_content : null, A = Array.isArray(p == null ? void 0 : p.suggested_message_rows) ? p.suggested_message_rows.filter((_) => typeof _ == "object" && _ !== null).map((_) => {
      const B = typeof _.text == "string" ? _.text.trim() : "", te = Array.isArray(_.children) ? _.children.filter((x) => typeof x == "string" && x.trim() !== "") : [];
      return {
        text: B,
        children: te.length > 0 ? te : void 0
      };
    }).filter((_) => _.text !== "").slice(0, 4) : [], C = {
      avatarBorder: (p == null ? void 0 : p.avatar_border) !== !1,
      messagePlaceholder: typeof (p == null ? void 0 : p.message_placeholder) == "string" && p.message_placeholder.trim() !== "" ? p.message_placeholder : ie.placeholder,
      dismissibleNotice: typeof (p == null ? void 0 : p.dismissible_notice) == "string" ? p.dismissible_notice : "",
      footerText: typeof (p == null ? void 0 : p.footer_text) == "string" ? p.footer_text : "",
      attachmentsEnabled: (p == null ? void 0 : p.attachments_enabled) === !0,
      voiceToTextEnabled: (p == null ? void 0 : p.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (p == null ? void 0 : p.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (p == null ? void 0 : p.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (p == null ? void 0 : p.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (p == null ? void 0 : p.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (p == null ? void 0 : p.keep_showing_suggested_messages) === !0,
      showFollowupSuggestions: (p == null ? void 0 : p.show_followup_suggestions) !== !1,
      suggestedMessageRows: A,
      useDifferentMessageMobile: (p == null ? void 0 : p.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (p == null ? void 0 : p.mobile_welcome_message) == "string" ? p.mobile_welcome_message : "",
      autoShowInitialMessages: (p == null ? void 0 : p.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (p == null ? void 0 : p.auto_show_duration_seconds) == "number" ? Math.max(0, p.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (p == null ? void 0 : p.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (p == null ? void 0 : p.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (p == null ? void 0 : p.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, p.mobile_auto_show_duration_seconds) : null,
      popupMessageText: typeof (p == null ? void 0 : p.popup_message_text) == "string" ? p.popup_message_text : "",
      themeMode: (p == null ? void 0 : p.theme_mode) === "dark" ? "dark" : "light",
      tintedGrayscaleEnabled: (p == null ? void 0 : p.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (p == null ? void 0 : p.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (p == null ? void 0 : p.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (p == null ? void 0 : p.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (p == null ? void 0 : p.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(p.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (p == null ? void 0 : p.tinted_grayscale_tint) == "number" ? Math.max(0, Math.min(100, Math.round(p.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (p == null ? void 0 : p.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(p.tinted_grayscale_shade))) : 0,
      launcherButtonColor: Za(p == null ? void 0 : p.launcher_button_color, "#05070c"),
      launcherIconStyle: (p == null ? void 0 : p.launcher_icon_style) === "sparkles" || (p == null ? void 0 : p.launcher_icon_style) === "message-square" || (p == null ? void 0 : p.launcher_icon_style) === "contact" || (p == null ? void 0 : p.launcher_icon_style) === "custom" ? p.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (p == null ? void 0 : p.launcher_icon_url) == "string" ? p.launcher_icon_url : "",
      launcherShowText: (p == null ? void 0 : p.launcher_show_text) === !0,
      launcherText: typeof (p == null ? void 0 : p.launcher_text) == "string" ? p.launcher_text : "",
      launcherTextSide: (p == null ? void 0 : p.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (p == null ? void 0 : p.show_inline_launcher) === !0,
      cornerRadius: typeof (p == null ? void 0 : p.corner_radius) == "string" ? p.corner_radius : "16px",
      fontFamily: typeof (p == null ? void 0 : p.font_family) == "string" ? p.font_family : "Inter",
      fontSize: typeof (p == null ? void 0 : p.font_size) == "string" ? p.font_size : "14px",
      languageSource: (p == null ? void 0 : p.language_source) === "website" ? "website" : "browser",
      defaultLanguage: typeof (p == null ? void 0 : p.default_language) == "string" ? p.default_language : "bs",
      supportedLanguages: Array.isArray(p == null ? void 0 : p.supported_languages) ? p.supported_languages : ["bs"],
      guardrails: p == null ? void 0 : p.guardrails
    }, y = j.theme && typeof j.theme == "object" ? j.theme : null, F = y != null && y.css_vars && typeof y.css_vars == "object" ? y.css_vars : void 0, T = y != null && y.colors && typeof y.colors == "object" ? y.colors : null;
    let I = T, L = k;
    if (I)
      T.primaryColor && (L = T.primaryColor);
    else {
      const _ = C.themeMode === "dark" ? "dark" : "light", B = C.accentColorEnabled !== !1, te = C.accentColorForHeaderEnabled === !0, x = C.tintedGrayscaleEnabled === !0, O = C.tintedGrayscaleHue ?? 0, Z = C.tintedGrayscaleTint ?? 0, re = C.tintedGrayscaleShade ?? 0;
      L = B ? k : _ === "dark" ? "#3b82f6" : "#2563eb";
      const de = (Ga(L).h + O + 360) % 360, ge = Math.max(0, Math.min(40, Math.round(Math.max(0, Z) * 0.36))), ue = Math.max(-24, Math.min(24, re * 0.24));
      if (I = _ === "dark" ? {
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
      }, B && te && (I.headerBg = L, I.headerFg = Ya(L)), x) {
        const Ce = _ === "dark" ? Math.max(8, Math.min(20, 12 + ue)) : Math.max(88, Math.min(97, 95 + ue * 0.22)), we = _ === "dark" ? Math.max(10, Math.min(24, 16 + ue)) : Math.max(80, Math.min(94, 89 + ue * 0.35)), ye = _ === "dark" ? Math.max(11, Math.min(26, 18 + ue * 0.9)) : Math.max(83, Math.min(95, we + 3)), _e = _ === "dark" ? Math.max(22, Math.min(40, 30 + ue)) : Math.max(70, Math.min(88, 82 + ue * 0.38)), Me = _ === "dark" ? Math.max(16, Math.min(30, 22 + ue)) : Math.max(78, Math.min(92, we - 2));
        I.surfaceBg = `hsl(${de} ${ge}% ${Ce}%)`, I.bubbleAiBg = `hsl(${de} ${Math.max(0, ge - 2)}% ${ye}%)`, I.subtle = `hsl(${de} ${Math.max(0, ge - 4)}% ${we}%)`, I.border = `hsl(${de} ${Math.max(0, ge - 5)}% ${_e}%)`, I.hover = `hsl(${de} ${Math.max(0, ge - 3)}% ${Me}%)`;
      }
    }
    const K = qa(j.forms), ae = Qa(j.actions).filter(
      (_) => K.some((B) => B.id === _.form_id)
    ), ne = j.forms_enabled === !0 && K.length > 0 && ae.length > 0, se = j.chat_available !== !1, X = j.transcribe_available !== !1 && se, q = j.forms_available !== !1 && ne;
    return {
      ...ie,
      companyId: t,
      enabled: E,
      apiUrl: a,
      name: j.company_name || ie.name,
      title: j.bot_name || ie.title,
      avatar: typeof (p == null ? void 0 : p.avatar_url) == "string" && p.avatar_url.trim() !== "" ? p.avatar_url : ie.avatar,
      welcomeHeadline: j.bot_name ? `Ćaskajte sa ${j.bot_name}` : ie.welcomeHeadline,
      welcomeMessage: j.welcome_message || ie.welcomeMessage,
      placeholder: C.messagePlaceholder || ie.placeholder,
      suggestedQuestions: N,
      contactFields: z.length > 0 ? z : ie.contactFields,
      contact: {
        enabled: typeof ((o = j.contact) == null ? void 0 : o.enabled) == "boolean" ? j.contact.enabled : (r = ie.contact) == null ? void 0 : r.enabled,
        title: typeof ((d = j.contact) == null ? void 0 : d.title) == "string" && j.contact.title.trim() !== "" ? j.contact.title : (s = ie.contact) == null ? void 0 : s.title,
        subtitle: typeof ((h = j.contact) == null ? void 0 : h.subtitle) == "string" && j.contact.subtitle.trim() !== "" ? j.contact.subtitle : (u = ie.contact) == null ? void 0 : u.subtitle,
        submitLabel: typeof ((b = j.contact) == null ? void 0 : b.submit_label) == "string" && j.contact.submit_label.trim() !== "" ? j.contact.submit_label : (c = ie.contact) == null ? void 0 : c.submitLabel
      },
      poweredBy: j.show_branding !== void 0 ? j.show_branding : ie.poweredBy,
      position: j.position || ie.position,
      accentGradient: Array.isArray(j.accent_gradient) ? j.accent_gradient : [],
      content: {
        ...ie.content || {},
        ...C
      },
      chatAvailable: se,
      transcribeAvailable: X,
      formsAvailable: q,
      formsEnabled: ne,
      forms: K,
      actions: ae,
      theme: y,
      cssVars: F,
      colors: {
        ...ie.colors,
        primaryColor: L,
        bubbleUserBg: L,
        sendAccent: (T == null ? void 0 : T.sendAccent) || (C.accentColorForSendIconEnabled ? L : C.themeMode === "dark" ? "#e5e7eb" : "#111827"),
        headerBg: I.headerBg,
        headerFg: I.headerFg,
        surfaceBg: I.surfaceBg,
        bubbleAiBg: I.bubbleAiBg,
        textFg: I.textFg,
        mutedFg: I.mutedFg,
        border: I.border,
        hover: I.hover,
        subtle: I.subtle
      }
    };
  } catch (f) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", f), { ...ie, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const Xa = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}', en = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", Ne = {};
function Si(t, e) {
  (Ne[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function tn(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function an(t, e) {
  const a = e.initialConfig || {}, n = !!(e.isPreview || a.isPreview || t.isPreview), o = e.previewDraft || a.previewDraft || t.previewDraft, r = {
    ...t,
    ...a,
    isPreview: n,
    previewDraft: o,
    mockMode: n ? !0 : a.mockMode ?? t.mockMode,
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
      const d = o.action;
      r.actions = [d, ...(r.actions || []).filter((s) => s.id !== d.id)];
    }
    if (o.form) {
      const d = o.form;
      r.forms = [d, ...(r.forms || []).filter((s) => s.id !== d.id)], r.formsAvailable = !0, r.formsEnabled = !0;
    }
    if (o.widget) {
      const d = o.widget;
      r.widgets = [d, ...(r.widgets || []).filter((s) => s.id !== d.id)];
    }
  }
  return r;
}
const it = /* @__PURE__ */ new WeakMap();
async function jt(t, e = {}) {
  const a = it.get(t), n = async () => {
    var j, k;
    const r = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (j = e.initialConfig) != null && j.isPreview || r === "preview") && r === "preview" ? { ...ie, companyId: r, apiUrl: e.apiUrl, mockMode: !0 } : await Ja(r, e.apiUrl), h = an(s, e);
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
    const c = document.createElement("div");
    c.className = "pitaj-shadow-mount", u.appendChild(c);
    const f = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((k = t.closest) != null && k.call(t, "[data-pitaj-preview]")));
    if (f) {
      const N = document.createElement("style");
      N.textContent = en, u.appendChild(N);
    }
    Tt(
      /* @__PURE__ */ i(
        Ka,
        {
          config: h,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: f,
          initialScreen: e.initialScreen,
          onEvent: Si
        }
      ),
      c
    );
    const v = ke();
    return v && (t.__pitajController = v), {
      controller: v,
      unmount: () => {
        Tt(null, c), u && (u.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(n, n);
  it.set(t, o);
  try {
    return await o;
  } finally {
    it.get(t) === o && it.delete(t);
  }
}
let Ze = null;
const at = {
  mount: async (t, e) => {
    const a = await jt(t, e);
    return Ze = a.unmount, a;
  },
  unmount: () => {
    Ze && (Ze(), Ze = null);
  },
  init: async (t) => {
    const e = tn(t.containerId || "pitaj-io-widget-root"), a = await jt(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return Ze = a.unmount, a;
  },
  open: () => {
    var t;
    return (t = ke()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = ke()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = ke()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = ke()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = ke()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = ke()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = ke()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    Ne[t] || (Ne[t] = []), Ne[t].push(e);
  },
  off: (t, e) => {
    Ne[t] && (Ne[t] = Ne[t].filter((a) => a !== e));
  },
  emit: (t, e) => {
    Si(t, e);
  }
};
class nn extends HTMLElement {
  constructor() {
    super(...arguments);
    Se(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", r = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", d = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await jt(this, { widgetId: a, apiUrl: n, position: o, startOpen: r, isInline: d });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Wt(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const a = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", r = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: n, startOpen: o, isInline: r };
}
var qt;
if (typeof window < "u") {
  const t = ((qt = window.PitajIO) == null ? void 0 : qt._q) || [];
  window.PitajIO = at, customElements.get("pitaj-io") || customElements.define("pitaj-io", nn);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, at.init(e).then(() => {
      t.forEach(({ method: a, args: n }) => {
        const o = at[a];
        typeof o == "function" && o(...n);
      });
    });
  else {
    const a = document.currentScript;
    let n = Wt(a);
    if (!n) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let r = o.length - 1; r >= 0; r--) {
        const d = o[r];
        if (d.src && /widget(\.iife)?\.js/i.test(d.src) && (n = Wt(d), n))
          break;
      }
    }
    n && at.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  J as A,
  yn as B,
  dn as C,
  jn as D,
  zn as G,
  un as M,
  dt as P,
  _n as S,
  Ae as T,
  cn as U,
  mn as W,
  mi as a,
  ra as b,
  st as c,
  R as d,
  sn as e,
  pn as f,
  ln as g,
  on as h,
  xe as i,
  Sn as j,
  he as k,
  Nn as l,
  kn as m,
  wn as n,
  Mn as o,
  hn as p,
  fn as q,
  gn as r,
  bn as s,
  D as t,
  i as u,
  vn as v,
  xn as w,
  at as x,
  G as y
};
