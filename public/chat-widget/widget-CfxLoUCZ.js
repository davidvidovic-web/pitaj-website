var ea = Object.defineProperty;
var ta = (t, e, a) => e in t ? ea(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var ze = (t, e, a) => ta(t, typeof e != "symbol" ? e + "" : e, a);
var dt, J, bi, Ce, Gt, vi, ji, xi, St, wt, kt, Qe = {}, wi = [], ia = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ut = Array.isArray;
function ye(t, e) {
  for (var a in e) t[a] = e[a];
  return t;
}
function Nt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function aa(t, e, a) {
  var n, o, r, l = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? o = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? dt.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ot(t, l, n, o, null);
}
function ot(t, e, a, n, o) {
  var r = { type: t, props: e, key: a, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++bi, __i: -1, __u: 0 };
  return o == null && J.vnode != null && J.vnode(r), r;
}
function he(t) {
  return t.children;
}
function st(t, e) {
  this.props = t, this.context = e;
}
function Pe(t, e) {
  if (e == null) return t.__ ? Pe(t.__, t.__i + 1) : null;
  for (var a; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) return a.__e;
  return typeof t.type == "function" ? Pe(t) : null;
}
function ki(t) {
  var e, a;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) {
      t.__e = t.__c.base = a.__e;
      break;
    }
    return ki(t);
  }
}
function Wt(t) {
  (!t.__d && (t.__d = !0) && Ce.push(t) && !lt.__r++ || Gt !== J.debounceRendering) && ((Gt = J.debounceRendering) || vi)(lt);
}
function lt() {
  for (var t, e, a, n, o, r, l, s = 1; Ce.length; ) Ce.length > s && Ce.sort(ji), t = Ce.shift(), s = Ce.length, t.__d && (a = void 0, o = (n = (e = t).__v).__e, r = [], l = [], e.__P && ((a = ye({}, n)).__v = n.__v + 1, J.vnode && J.vnode(a), zt(e.__P, a, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? Pe(n), !!(32 & n.__u), l), a.__v = n.__v, a.__.__k[a.__i] = a, Mi(r, a, l), a.__e != o && ki(a)));
  lt.__r = 0;
}
function yi(t, e, a, n, o, r, l, s, u, d, f) {
  var c, m, g, b, w, z, A = n && n.__k || wi, N = e.length;
  for (u = na(a, e, A, u, N), c = 0; c < N; c++) (g = a.__k[c]) != null && (m = g.__i === -1 ? Qe : A[g.__i] || Qe, g.__i = c, z = zt(t, g, m, o, r, l, s, u, d, f), b = g.__e, g.ref && m.ref != g.ref && (m.ref && At(m.ref, null, g), f.push(g.ref, g.__c || b, g)), w == null && b != null && (w = b), 4 & g.__u || m.__k === g.__k ? u = _i(g, u, t) : typeof g.type == "function" && z !== void 0 ? u = z : b && (u = b.nextSibling), g.__u &= -7);
  return a.__e = w, u;
}
function na(t, e, a, n, o) {
  var r, l, s, u, d, f = a.length, c = f, m = 0;
  for (t.__k = new Array(o), r = 0; r < o; r++) (l = e[r]) != null && typeof l != "boolean" && typeof l != "function" ? (u = r + m, (l = t.__k[r] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? ot(null, l, null, null, null) : ut(l) ? ot(he, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? ot(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, s = null, (d = l.__i = ra(l, a, u, c)) !== -1 && (c--, (s = a[d]) && (s.__u |= 2)), s == null || s.__v === null ? (d == -1 && (o > f ? m-- : o < f && m++), typeof l.type != "function" && (l.__u |= 4)) : d != u && (d == u - 1 ? m-- : d == u + 1 ? m++ : (d > u ? m-- : m++, l.__u |= 4))) : t.__k[r] = null;
  if (c) for (r = 0; r < f; r++) (s = a[r]) != null && !(2 & s.__u) && (s.__e == n && (n = Pe(s)), Ni(s, s));
  return n;
}
function _i(t, e, a) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = _i(n[o], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !a.contains(e) && (e = Pe(t)), a.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ra(t, e, a, n) {
  var o, r, l = t.key, s = t.type, u = e[a];
  if (u === null && t.key == null || u && l == u.key && s === u.type && !(2 & u.__u)) return a;
  if (n > (u != null && !(2 & u.__u) ? 1 : 0)) for (o = a - 1, r = a + 1; o >= 0 || r < e.length; ) {
    if (o >= 0) {
      if ((u = e[o]) && !(2 & u.__u) && l == u.key && s === u.type) return o;
      o--;
    }
    if (r < e.length) {
      if ((u = e[r]) && !(2 & u.__u) && l == u.key && s === u.type) return r;
      r++;
    }
  }
  return -1;
}
function qt(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || ia.test(e) ? a : a + "px";
}
function it(t, e, a, n, o) {
  var r;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) a && e in a || qt(t.style, e, "");
    if (a) for (e in a) n && a[e] === n[e] || qt(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(xi, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = a, a ? n ? a.t = n.t : (a.t = St, t.addEventListener(e, r ? kt : wt, r)) : t.removeEventListener(e, r ? kt : wt, r);
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
function Qt(t) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + t];
      if (e.u == null) e.u = St++;
      else if (e.u < a.t) return;
      return a(J.event ? J.event(e) : e);
    }
  };
}
function zt(t, e, a, n, o, r, l, s, u, d) {
  var f, c, m, g, b, w, z, A, N, Y, $, p, C, I, k, O, E, L = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (u = !!(32 & a.__u), r = [s = e.__e = a.__e]), (f = J.__b) && f(e);
  e: if (typeof L == "function") try {
    if (A = e.props, N = "prototype" in L && L.prototype.render, Y = (f = L.contextType) && n[f.__c], $ = f ? Y ? Y.props.value : f.__ : n, a.__c ? z = (c = e.__c = a.__c).__ = c.__E : (N ? e.__c = c = new L(A, $) : (e.__c = c = new st(A, $), c.constructor = L, c.render = sa), Y && Y.sub(c), c.props = A, c.state || (c.state = {}), c.context = $, c.__n = n, m = c.__d = !0, c.__h = [], c._sb = []), N && c.__s == null && (c.__s = c.state), N && L.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ye({}, c.__s)), ye(c.__s, L.getDerivedStateFromProps(A, c.__s))), g = c.props, b = c.state, c.__v = e, m) N && L.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), N && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (N && L.getDerivedStateFromProps == null && A !== g && c.componentWillReceiveProps != null && c.componentWillReceiveProps(A, $), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(A, c.__s, $) === !1 || e.__v == a.__v)) {
        for (e.__v != a.__v && (c.props = A, c.state = c.__s, c.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(D) {
          D && (D.__ = e);
        }), p = 0; p < c._sb.length; p++) c.__h.push(c._sb[p]);
        c._sb = [], c.__h.length && l.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(A, c.__s, $), N && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(g, b, w);
      });
    }
    if (c.context = $, c.props = A, c.__P = t, c.__e = !1, C = J.__r, I = 0, N) {
      for (c.state = c.__s, c.__d = !1, C && C(e), f = c.render(c.props, c.state, c.context), k = 0; k < c._sb.length; k++) c.__h.push(c._sb[k]);
      c._sb = [];
    } else do
      c.__d = !1, C && C(e), f = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++I < 25);
    c.state = c.__s, c.getChildContext != null && (n = ye(ye({}, n), c.getChildContext())), N && !m && c.getSnapshotBeforeUpdate != null && (w = c.getSnapshotBeforeUpdate(g, b)), O = f, f != null && f.type === he && f.key == null && (O = Si(f.props.children)), s = yi(t, ut(O) ? O : [O], e, a, n, o, r, l, s, u, d), c.base = e.__e, e.__u &= -161, c.__h.length && l.push(c), z && (c.__E = c.__ = null);
  } catch (D) {
    if (e.__v = null, u || r != null) if (D.then) {
      for (e.__u |= u ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      r[r.indexOf(s)] = null, e.__e = s;
    } else for (E = r.length; E--; ) Nt(r[E]);
    else e.__e = a.__e, e.__k = a.__k;
    J.__e(D, e, a);
  }
  else r == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : s = e.__e = oa(a.__e, e, a, n, o, r, l, u, d);
  return (f = J.diffed) && f(e), 128 & e.__u ? void 0 : s;
}
function Mi(t, e, a) {
  for (var n = 0; n < a.length; n++) At(a[n], a[++n], a[++n]);
  J.__c && J.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      J.__e(r, o.__v);
    }
  });
}
function Si(t) {
  return typeof t != "object" || t == null ? t : ut(t) ? t.map(Si) : ye({}, t);
}
function oa(t, e, a, n, o, r, l, s, u) {
  var d, f, c, m, g, b, w, z = a.props, A = e.props, N = e.type;
  if (N == "svg" ? o = "http://www.w3.org/2000/svg" : N == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (d = 0; d < r.length; d++) if ((g = r[d]) && "setAttribute" in g == !!N && (N ? g.localName == N : g.nodeType == 3)) {
      t = g, r[d] = null;
      break;
    }
  }
  if (t == null) {
    if (N == null) return document.createTextNode(A);
    t = document.createElementNS(o, N, A.is && A), s && (J.__m && J.__m(e, r), s = !1), r = null;
  }
  if (N === null) z === A || s && t.data === A || (t.data = A);
  else {
    if (r = r && dt.call(t.childNodes), z = a.props || Qe, !s && r != null) for (z = {}, d = 0; d < t.attributes.length; d++) z[(g = t.attributes[d]).name] = g.value;
    for (d in z) if (g = z[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") c = g;
      else if (!(d in A)) {
        if (d == "value" && "defaultValue" in A || d == "checked" && "defaultChecked" in A) continue;
        it(t, d, null, g, o);
      }
    }
    for (d in A) g = A[d], d == "children" ? m = g : d == "dangerouslySetInnerHTML" ? f = g : d == "value" ? b = g : d == "checked" ? w = g : s && typeof g != "function" || z[d] === g || it(t, d, g, z[d], o);
    if (f) s || c && (f.__html === c.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (c && (t.innerHTML = ""), yi(e.type === "template" ? t.content : t, ut(m) ? m : [m], e, a, n, N == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, l, r ? r[0] : a.__k && Pe(a, 0), s, u), r != null) for (d = r.length; d--; ) Nt(r[d]);
    s || (d = "value", N == "progress" && b == null ? t.removeAttribute("value") : b !== void 0 && (b !== t[d] || N == "progress" && !b || N == "option" && b !== z[d]) && it(t, d, b, z[d], o), d = "checked", w !== void 0 && w !== t[d] && it(t, d, w, z[d], o));
  }
  return t;
}
function At(t, e, a) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    J.__e(o, a);
  }
}
function Ni(t, e, a) {
  var n, o;
  if (J.unmount && J.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || At(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      J.__e(r, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && Ni(n[o], e, a || typeof t.type != "function");
  a || Nt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function sa(t, e, a) {
  return this.constructor(t, a);
}
function Jt(t, e, a) {
  var n, o, r, l;
  e == document && (e = document.documentElement), J.__ && J.__(t, e), o = (n = !1) ? null : e.__k, r = [], l = [], zt(e, t = e.__k = aa(he, null, [t]), o || Qe, Qe, e.namespaceURI, o ? null : e.firstChild ? dt.call(e.childNodes) : null, r, o ? o.__e : e.firstChild, n, l), Mi(r, t, l);
}
dt = wi.slice, J = { __e: function(t, e, a, n) {
  for (var o, r, l; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), l = o.__d), l) return o.__E = o;
  } catch (s) {
    t = s;
  }
  throw t;
} }, bi = 0, st.prototype.setState = function(t, e) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ye({}, this.state), typeof t == "function" && (t = t(ye({}, a), this.props)), t && ye(a, t), t != null && this.__v && (e && this._sb.push(e), Wt(this));
}, st.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Wt(this));
}, st.prototype.render = he, Ce = [], vi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ji = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, lt.__r = 0, xi = /(PointerCapture)$|Capture$/i, St = 0, wt = Qt(!1), kt = Qt(!0);
var ca = 0;
function i(t, e, a, n, o, r) {
  e || (e = {});
  var l, s, u = e;
  if ("ref" in u) for (s in u = {}, e) s == "ref" ? l = e[s] : u[s] = e[s];
  var d = { type: t, props: u, key: a, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ca, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) u[s] === void 0 && (u[s] = l[s]);
  return J.vnode && J.vnode(d), d;
}
var Je, se, vt, Xt, Xe = 0, zi = [], le = J, ei = le.__b, ti = le.__r, ii = le.diffed, ai = le.__c, ni = le.unmount, ri = le.__;
function Ct(t, e) {
  le.__h && le.__h(se, t, Xe || e), Xe = 0;
  var a = se.__H || (se.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function V(t) {
  return Xe = 1, pa(Ci, t);
}
function pa(t, e, a) {
  var n = Ct(Je++, 2);
  if (n.t = t, !n.__c && (n.__ = [Ci(void 0, e), function(s) {
    var u = n.__N ? n.__N[0] : n.__[0], d = n.t(u, s);
    u !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = se, !se.__f)) {
    var o = function(s, u, d) {
      if (!n.__c.__H) return !0;
      var f = n.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (f.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, s, u, d);
      var c = n.__c.props !== s;
      return f.forEach(function(m) {
        if (m.__N) {
          var g = m.__[0];
          m.__ = m.__N, m.__N = void 0, g !== m.__[0] && (c = !0);
        }
      }), r && r.call(this, s, u, d) || c;
    };
    se.__f = !0;
    var r = se.shouldComponentUpdate, l = se.componentWillUpdate;
    se.componentWillUpdate = function(s, u, d) {
      if (this.__e) {
        var f = r;
        r = void 0, o(s, u, d), r = f;
      }
      l && l.call(this, s, u, d);
    }, se.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function q(t, e) {
  var a = Ct(Je++, 3);
  !le.__s && Ai(a.__H, e) && (a.__ = t, a.u = e, se.__H.__h.push(a));
}
function X(t) {
  return Xe = 5, Ie(function() {
    return { current: t };
  }, []);
}
function Ie(t, e) {
  var a = Ct(Je++, 7);
  return Ai(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function te(t, e) {
  return Xe = 8, Ie(function() {
    return t;
  }, e);
}
function la() {
  for (var t; t = zi.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(ct), t.__H.__h.forEach(yt), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], le.__e(e, t.__v);
  }
}
le.__b = function(t) {
  se = null, ei && ei(t);
}, le.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ri && ri(t, e);
}, le.__r = function(t) {
  ti && ti(t), Je = 0;
  var e = (se = t.__c).__H;
  e && (vt === se ? (e.__h = [], se.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.forEach(ct), e.__h.forEach(yt), e.__h = [], Je = 0)), vt = se;
}, le.diffed = function(t) {
  ii && ii(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (zi.push(e) !== 1 && Xt === le.requestAnimationFrame || ((Xt = le.requestAnimationFrame) || da)(la)), e.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), vt = se = null;
}, le.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(ct), a.__h = a.__h.filter(function(n) {
        return !n.__ || yt(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], le.__e(n, a.__v);
    }
  }), ai && ai(t, e);
}, le.unmount = function(t) {
  ni && ni(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.forEach(function(n) {
    try {
      ct(n);
    } catch (o) {
      e = o;
    }
  }), a.__H = void 0, e && le.__e(e, a.__v));
};
var oi = typeof requestAnimationFrame == "function";
function da(t) {
  var e, a = function() {
    clearTimeout(n), oi && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(a, 100);
  oi && (e = requestAnimationFrame(a));
}
function ct(t) {
  var e = se, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), se = e;
}
function yt(t) {
  var e = se;
  t.__c = t.__(), se = e;
}
function Ai(t, e) {
  return !t || t.length !== e.length || e.some(function(a, n) {
    return a !== t[n];
  });
}
function Ci(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function ua(t, e) {
  const a = t.body;
  if (!a)
    throw new Error("Response body is null");
  const n = a.getReader(), o = new TextDecoder("utf-8");
  let r = "";
  try {
    for (; ; ) {
      const { done: l, value: s } = await n.read();
      if (l)
        break;
      r += o.decode(s, { stream: !0 });
      const u = r.split(/\r?\n/);
      r = u.pop() || "";
      for (const d of u) {
        const f = d.trim();
        if (!(!f || f.startsWith(":")) && f.startsWith("data:")) {
          const c = f.slice(5).trim();
          if (c === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const m = JSON.parse(c);
            if (typeof m == "string")
              e.onChunk(m);
            else if (m && typeof m == "object") {
              (m.chunk || m.token || m.content || m.text) && e.onChunk(m.chunk || m.token || m.content || m.text), m.sources && Array.isArray(m.sources) && e.onSources && e.onSources(m.sources);
              const g = m.suggestedQuestions ?? m.suggested_questions;
              Array.isArray(g) && g.length > 0 && e.onSuggestedQuestions && e.onSuggestedQuestions(g), e.onConversationId && (m.conversation_id !== void 0 || m.conversationId !== void 0) && e.onConversationId(
                m.conversation_id ?? m.conversationId
              );
              const b = m.ticket_number ?? m.ticketNumber;
              e.onTicketNumber && b !== void 0 && b !== null && String(b).trim() !== "" && String(b).trim() !== "undefined" && String(b).trim() !== "null" && e.onTicketNumber(
                String(b).trim()
              ), e.onActionTrigger && m.triggered_action && typeof m.triggered_action == "object" && e.onActionTrigger(m.triggered_action);
            }
          } catch {
            e.onChunk(c);
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
class Ii extends Error {
  constructor(a, n = 60, o) {
    super(a);
    ze(this, "retryAfterSeconds");
    ze(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = o;
  }
}
class Ti extends Error {
  constructor(a, n, o, r) {
    super(a);
    ze(this, "status");
    ze(this, "code");
    ze(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = o, this.retryAfterSeconds = r;
  }
}
function ma(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function ha(t, e) {
  const a = await t.json().catch(() => null);
  Li(t.status, a, e, t.headers.get("Retry-After"));
}
function Li(t, e, a, n) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, r = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, l = ma((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new Ii(r, l, o) : new Ti(r, t, o, l);
}
function Pi(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function It(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function fa(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return It(e.of(t));
  } catch {
    return null;
  }
}
function ga() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const n = JSON.parse(a);
        t = Pi(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = It(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = fa(t)), { code: t, name: e };
}
const si = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function ba(t, e, a, n) {
  var u;
  const o = (n == null ? void 0 : n.action) || (a && a.length > 0 ? a[0] : null);
  if (o && e.onActionTrigger) {
    const c = (!!(o.widget_id || o.widget || n != null && n.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let m = 0; m < c.length; m++) {
      const g = c[m] + (m < c.length - 1 ? " " : "");
      e.onChunk(g), await new Promise((b) => setTimeout(b, 20));
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
  const r = `${si[Math.floor(Math.random() * si.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, l = ((u = n == null ? void 0 : n.content) == null ? void 0 : u.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = r.split(" ");
  for (let d = 0; d < s.length; d++) {
    const f = s[d] + (d < s.length - 1 ? " " : "");
    e.onChunk(f), await new Promise((c) => setTimeout(c, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && l.length > 0 && e.onSuggestedQuestions(l), e.onDone && e.onDone();
}
async function va(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: n,
    message: o,
    forceNewConversation: r,
    apiUrl: l,
    mockMode: s,
    visitorName: u,
    visitorEmail: d,
    visitorPhone: f,
    visitorCountryCode: c,
    visitorCountryName: m,
    actions: g,
    previewDraft: b,
    callbacks: w
  } = t;
  if (s || !e || e === "default") {
    await ba(o, w, g, b);
    return;
  }
  const z = (l || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), A = ga(), N = Pi(c) ?? A.code ?? void 0, Y = It(m) ?? A.name ?? void 0, $ = `${z}/api/widget/${e}/chat`, p = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, C = await fetch($, {
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
      visitor_name: u || void 0,
      visitor_email: d || void 0,
      visitor_phone: f || void 0,
      visitor_country_code: N,
      visitor_country_name: Y
    })
  });
  if (C.ok || await ha(C, `API greška (${C.status})`), (C.headers.get("Content-Type") || "").includes("text/event-stream"))
    await ua(C, w);
  else {
    const k = await C.json(), O = k.answer || k.message || "";
    k.conversation_id !== void 0 && w.onConversationId && w.onConversationId(k.conversation_id);
    const E = k.ticket_number ?? k.ticketNumber;
    if (E != null && String(E).trim() !== "" && String(E).trim() !== "undefined" && String(E).trim() !== "null" && w.onTicketNumber && w.onTicketNumber(String(E).trim()), k.triggered_action && w.onActionTrigger && w.onActionTrigger(k.triggered_action), O && O.trim()) {
      const D = O.split(" ");
      for (let Z = 0; Z < D.length; Z++) {
        const ne = D[Z] + (Z < D.length - 1 ? " " : "");
        w.onChunk(ne), await new Promise((re) => setTimeout(re, 15));
      }
    }
    const L = k.suggestedQuestions ?? k.suggested_questions;
    Array.isArray(L) && L.length > 0 && w.onSuggestedQuestions && w.onSuggestedQuestions(L), w.onDone && w.onDone();
  }
}
async function _t(t) {
  const { widgetId: e, visitorId: a, apiUrl: n, status: o, page: r = 1, perPage: l = 15 } = t, s = (n || "").replace(/\/$/, ""), u = new URLSearchParams({
    visitor_id: a,
    page: String(r),
    per_page: String(l)
  });
  o && u.set("status", o);
  const d = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/tickets?${u}`), f = await d.json().catch(() => null);
  if (!d.ok) throw new Error(f && "error" in f ? f.error : "Tikete nije moguće učitati.");
  const c = (f == null ? void 0 : f.data) || [], m = c.map((w) => ({
    id: w.id,
    ticketNumber: w.ticket_number,
    conversationId: w.conversation_id,
    isResolved: !!w.is_resolved,
    updatedAt: w.updated_at,
    messages: (w.messages || []).map((z) => {
      var A;
      return {
        id: String(z.id),
        content: z.content,
        sender: z.role === "user" ? "user" : "ai",
        timestamp: z.created_at,
        status: "sent",
        suggestedQuestions: ((A = z.meta_json) == null ? void 0 : A.suggested_questions) || void 0
      };
    })
  })), g = f == null ? void 0 : f.meta, b = (g == null ? void 0 : g.has_more) !== void 0 ? !!g.has_more : c.length >= l;
  return {
    tickets: m,
    hasMore: b,
    total: g == null ? void 0 : g.total,
    currentPage: (g == null ? void 0 : g.current_page) ?? r
  };
}
async function ja(t, e, a) {
  return (await _t({ widgetId: t, visitorId: e, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function xa(t, e, a, n, o) {
  const r = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !r)
    return await new Promise((u) => setTimeout(u, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const l = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await fetch(`${l}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!s.ok) {
    const d = (await s.json().catch(() => ({}))).error || (s.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), f = new Error(d);
    throw f.status = s.status, f;
  }
  return await s.json();
}
function ci(t, e = "bs", a = ["bs"]) {
  var d, f;
  const n = (a && a.length > 0 ? a : [e]).map((c) => c.trim().toLowerCase()), o = (e || "bs").trim().toLowerCase();
  let r = "";
  if (t === "website" ? typeof document < "u" && (r = ((d = document.documentElement) == null ? void 0 : d.lang) || ((f = document.querySelector("html")) == null ? void 0 : f.getAttribute("lang")) || "") : typeof navigator < "u" && (r = navigator.language || navigator.languages && navigator.languages[0] || ""), !r || typeof r != "string")
    return o;
  let u = r.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (u === "hr" || u === "sr") && !n.includes(u) && n.includes("bs") && (u = "bs"), n.includes(u) ? u : o;
}
const pi = "pitaj_io_visitor_id", wa = "chat_direkt_visitor_id", ka = "pitaj_io_visitor_meta", ya = "chat_direkt_visitor_meta";
function Ei(t) {
  return `pitaj_io_convs_${t}`;
}
function _a(t) {
  return `chat_direkt_convs_${t}`;
}
function Ma() {
  try {
    let t = localStorage.getItem(pi) || localStorage.getItem(wa);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(pi, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Sa = [];
function Na(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function za(t) {
  return t.filter((e) => !Na(e)).map((e) => {
    const a = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: a };
  });
}
function li(t) {
  try {
    const e = localStorage.getItem(Ei(t)) || localStorage.getItem(_a(t));
    if (e) {
      const a = JSON.parse(e);
      if (Array.isArray(a))
        return za(a);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return Sa;
}
function Aa(t, e) {
  try {
    localStorage.setItem(Ei(t), JSON.stringify(e));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function di(t) {
  var o, r, l, s, u, d, f, c, m, g, b;
  const e = t.previewDraft, a = (/* @__PURE__ */ new Date()).toISOString(), n = (e == null ? void 0 : e.initialStep) || "idle";
  if (n === "idle") {
    const w = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", z = (o = e == null ? void 0 : e.action) != null && o.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: w,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: w,
            sender: "ai",
            timestamp: a,
            status: "sent",
            suggestedQuestions: z.length > 0 ? z : void 0
          }
        ]
      }
    ];
  }
  if (n === "form") {
    const w = (e == null ? void 0 : e.simulatedUserMessage) || ((r = e == null ? void 0 : e.action) == null ? void 0 : r.trigger_hint) || "Pokreni akciju", A = !!((l = e == null ? void 0 : e.action) != null && l.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", N = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((u = e == null ? void 0 : e.action) == null ? void 0 : u.name) || "Pregled akcije",
        preview: A,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: w,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai",
            content: A,
            sender: "ai",
            timestamp: a,
            status: "sent",
            widget: N
          }
        ]
      }
    ];
  }
  if (n === "submitted") {
    const w = (e == null ? void 0 : e.simulatedUserMessage) || ((d = e == null ? void 0 : e.action) == null ? void 0 : d.trigger_hint) || "Pokreni akciju", z = ((f = e == null ? void 0 : e.form) == null ? void 0 : f.name) || ((c = e == null ? void 0 : e.action) == null ? void 0 : c.name) || "Forma", A = ((m = e == null ? void 0 : e.form) == null ? void 0 : m.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: z,
        preview: A,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: w,
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
            content: A,
            sender: "ai",
            timestamp: a,
            status: "sent"
          }
        ]
      }
    ];
  }
  if (n === "dismissed") {
    const w = (e == null ? void 0 : e.simulatedUserMessage) || ((g = e == null ? void 0 : e.action) == null ? void 0 : g.trigger_hint) || "Pokreni akciju", z = "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((b = e == null ? void 0 : e.action) == null ? void 0 : b.name) || "Pregled akcije",
        preview: z,
        timestamp: a,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: w,
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
function Ca(t, e) {
  var pe, ue, be, me, Te, we, Le, Se, Ne, Ee, De, He, Be, $e, Fe, Ue, Re, Oe, Ve, Ke, Ye;
  const a = !!(t.isPreview || t.previewDraft), [n, o] = V(t), [r, l] = V((e == null ? void 0 : e.startOpen) ?? !1), [s, u] = V(
    (e == null ? void 0 : e.initialScreen) ?? (a ? "conversation" : "new-conversation")
  ), [d, f] = V(
    () => a ? di(t) : li(t.companyId)
  ), [c, m] = V(() => {
    if (a) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const j = li(t.companyId);
      return j.length > 0 ? j[0].id : null;
    }
    return null;
  }), [g, b] = V(!1), [w, z] = V(null), [A, N] = V(null), [Y, $] = V(
    () => {
      var j, S, T;
      return ci(
        (j = t.content) == null ? void 0 : j.languageSource,
        ((S = t.content) == null ? void 0 : S.defaultLanguage) || "bs",
        ((T = t.content) == null ? void 0 : T.supportedLanguages) || ["bs"]
      );
    }
  );
  q(() => {
    var S, T, x;
    const j = ci(
      (S = n.content) == null ? void 0 : S.languageSource,
      ((T = n.content) == null ? void 0 : T.defaultLanguage) || "bs",
      ((x = n.content) == null ? void 0 : x.supportedLanguages) || ["bs"]
    );
    $(j);
  }, [
    (pe = n.content) == null ? void 0 : pe.languageSource,
    (ue = n.content) == null ? void 0 : ue.defaultLanguage,
    (be = n.content) == null ? void 0 : be.supportedLanguages
  ]);
  const p = X(Ma()), [C, I] = V(() => {
    try {
      const j = localStorage.getItem(ka) || localStorage.getItem(ya);
      if (j) {
        const S = JSON.parse(j), T = {};
        return typeof S.name == "string" && (T.name = S.name), typeof S.email == "string" && (T.email = S.email), typeof S.phone == "string" && (T.phone = S.phone), T;
      }
    } catch (j) {
      console.warn("[Pitaj.io] Error reading visitor meta", j);
    }
    return {};
  }), k = X(e == null ? void 0 : e.emitEvent);
  k.current = e == null ? void 0 : e.emitEvent;
  const O = X(e == null ? void 0 : e.onActionTrigger);
  O.current = e == null ? void 0 : e.onActionTrigger;
  const E = te((j, S) => {
    const T = Number.isFinite(j) ? Math.max(1, Math.floor(j)) : 60;
    z((x) => x === null ? T : Math.max(x, T)), N(S || `Previše zahtjeva. Molimo sačekajte ${T}s.`);
  }, []), L = te((j) => {
    if (j) {
      if (j === "WIDGET_CHAT_DISABLED") {
        o((S) => ({ ...S, chatAvailable: !1 })), N("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (j === "WIDGET_TRANSCRIBE_DISABLED") {
        o((S) => ({ ...S, transcribeAvailable: !1 })), N("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      j === "WIDGET_FORMS_DISABLED" && (o((S) => ({ ...S, formsAvailable: !1, formsEnabled: !1 })), N("Forme su trenutno privremeno nedostupne."));
    }
  }, []), D = te((j, S = "Došlo je do greške pri obradi zahtjeva.") => {
    var x, h, M, P;
    if (j instanceof Ii) {
      E(j.retryAfterSeconds, j.message), (x = k.current) == null || x.call(k, "error_occurred", { code: j.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (j instanceof Ti) {
      if (j.code === "COUNTRY_BLOCKED") {
        o((H) => ({ ...H, chatAvailable: !1 })), N(j.message || "Pristup nije dozvoljen u vašoj regiji."), (h = k.current) == null || h.call(k, "error_occurred", { status: j.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      L(j.code), N(j.message || S), (M = k.current) == null || M.call(k, "error_occurred", { status: j.status, code: j.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let T = j instanceof Error ? j.message : S;
    !T || T === "Failed to fetch" || T.includes("NetworkError") ? T = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : T.includes("404") ? T = "Traženi razgovor ili podaci nisu pronađeni." : (T.includes("500") || T.includes("502") || T.includes("503")) && (T = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), N(T || S), (P = k.current) == null || P.call(k, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [E, L]);
  q(() => {
    n.isPreview || n.mockMode || n.companyId === "preview" || Aa(n.companyId, d);
  }, [d, n.companyId, n.isPreview, n.mockMode]), q(() => {
    if (n.isPreview || n.previewDraft) {
      const j = di(n);
      f(j), m("preview-conv-1"), u("conversation");
    }
  }, [
    n.isPreview,
    (me = n.previewDraft) == null ? void 0 : me.revision,
    (Te = n.previewDraft) == null ? void 0 : Te.initialStep,
    (Le = (we = n.previewDraft) == null ? void 0 : we.action) == null ? void 0 : Le.id,
    (Ne = (Se = n.previewDraft) == null ? void 0 : Se.action) == null ? void 0 : Ne.name,
    (De = (Ee = n.previewDraft) == null ? void 0 : Ee.action) == null ? void 0 : De.trigger_hint,
    (Be = (He = n.previewDraft) == null ? void 0 : He.form) == null ? void 0 : Be.id,
    (Fe = ($e = n.previewDraft) == null ? void 0 : $e.form) == null ? void 0 : Fe.name,
    (Re = (Ue = n.previewDraft) == null ? void 0 : Ue.form) == null ? void 0 : Re.success_message,
    (Ve = (Oe = n.previewDraft) == null ? void 0 : Oe.widget) == null ? void 0 : Ve.id,
    (Ye = (Ke = n.previewDraft) == null ? void 0 : Ke.widget) == null ? void 0 : Ye.type
  ]), q(() => {
    if (w === null || w <= 0) return;
    const j = setInterval(() => {
      z((S) => S && S > 1 ? S - 1 : null);
    }, 1e3);
    return () => clearInterval(j);
  }, [w]), q(() => {
    if (!n.companyId || n.mockMode) return;
    let j = !0;
    return ja(n.companyId, p.current, n.apiUrl).then((S) => {
      !j || !S || S.length === 0 || f((T) => {
        let x = !1;
        const h = T.map((M) => {
          const P = S.find((H) => String(H.id) === M.id);
          return P && P.ticketNumber && M.ticketNumber !== P.ticketNumber ? (x = !0, { ...M, ticketNumber: P.ticketNumber }) : M;
        });
        return x ? h : T;
      });
    }).catch(() => {
    }), () => {
      j = !1;
    };
  }, [n.companyId, n.apiUrl, n.mockMode]);
  const Z = d.find((j) => j.id === c) || null, ne = d.reduce((j, S) => j + (S.unread || 0), 0), re = te((j) => {
    l((S) => {
      var T;
      return S === j ? S : ((T = k.current) == null || T.call(k, j ? "widget_opened" : "widget_closed"), j);
    });
  }, []), ce = te((j) => {
    u((S) => {
      var T;
      return S === j ? S : ((T = k.current) == null || T.call(k, "screen_changed", { screen: j }), j);
    });
  }, []), ee = te((j) => {
    var S;
    m(j.id), f((T) => T.some((h) => h.id === j.id) ? T.map((h) => h.id === j.id ? { ...h, ...j, unread: 0, status: j.status || "active" } : h) : [{ ...j, unread: 0, status: j.status || "active" }, ...T]), u("conversation"), (S = k.current) == null || S.call(k, "conversation_selected", { conversationId: j.id });
  }, []), Q = te(() => {
    var j;
    f(
      (S) => S.map((T) => T.id === c ? { ...T, status: "ended" } : T)
    ), m(null), u("new-conversation"), (j = k.current) == null || j.call(k, "conversation_ended", { conversationId: c });
  }, [c]), y = te((j) => {
    f((S) => S.filter((T) => T.id !== j)), m((S) => S === j ? null : S), c === j && u("new-conversation");
  }, [c]), U = te((j) => {
    var M;
    if (n.chatAvailable === !1) {
      N("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (w !== null) {
      N(`Previše zahtjeva. Molimo sačekajte ${w}s.`);
      return;
    }
    const S = "conv-" + Date.now(), T = (/* @__PURE__ */ new Date()).toISOString(), x = j ? j.length > 40 ? j.slice(0, 40) + "…" : j : "Novo ćaskanje", h = {
      id: S,
      title: x,
      preview: j || "Započeto novo ćaskanje",
      timestamp: T,
      unread: 0,
      messages: j ? [
        {
          id: "msg-" + Date.now(),
          content: j,
          sender: "user",
          timestamp: T,
          status: "sent"
        }
      ] : []
    };
    f((P) => [h, ...P]), m(S), u("conversation"), (M = k.current) == null || M.call(k, "conversation_started", { conversationId: S, initialMessage: j }), j && ie(S, j, [h.messages[0]], !0);
  }, [n.apiUrl, n.chatAvailable, n.companyId, n.mockMode, w, C]), ie = async (j, S, T, x = !1) => {
    var P;
    b(!0), N(null);
    const h = "ai-msg-" + Date.now(), M = {
      id: h,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    f(
      (H) => H.map((G) => G.id !== j ? G : {
        ...G,
        preview: S,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...G.messages.filter((B) => B.id !== h), M]
      })
    ), (P = k.current) == null || P.call(k, "stream_started", { conversationId: j });
    try {
      await va({
        companyId: n.companyId,
        conversationId: j,
        visitorId: p.current,
        visitorLanguage: Y,
        message: S,
        forceNewConversation: x || j.startsWith("conv-"),
        apiUrl: n.apiUrl,
        mockMode: n.mockMode || n.isPreview,
        visitorName: C.name,
        visitorEmail: C.email,
        visitorPhone: C.phone,
        actions: n.actions,
        previewDraft: n.previewDraft,
        callbacks: {
          onConversationId: (H) => {
            const G = j, B = String(H);
            j = B, m(B), f(
              (de) => de.map((R) => R.id === G || R.messages.some((ke) => ke.id === h) ? { ...R, id: B } : R)
            );
          },
          onTicketNumber: (H) => {
            const G = H && String(H).trim() !== "" && String(H).trim() !== "undefined" && String(H).trim() !== "null" ? String(H).trim() : null;
            G && f(
              (B) => B.map((de) => de.id === j || de.messages.some((ke) => ke.id === h) ? { ...de, ticketNumber: G } : de)
            );
          },
          onActionTrigger: (H) => {
            var B;
            const G = H.widget || H.triggered_widget || (H.widget_id && n.widgets ? n.widgets.find((de) => de.id === H.widget_id) : null) || null;
            G && f(
              (de) => de.map((R) => R.id === j || R.messages.some((ve) => ve.id === h) ? {
                ...R,
                messages: R.messages.map(
                  (ve) => ve.id === h ? { ...ve, widget: G } : ve
                )
              } : R)
            ), (B = O.current) == null || B.call(O, H);
          },
          onChunk: (H) => {
            f(
              (G) => G.map((B) => B.id === j || B.messages.some((R) => R.id === h) ? {
                ...B,
                messages: B.messages.map(
                  (R) => R.id === h ? { ...R, content: R.content + H } : R
                )
              } : B)
            );
          },
          onSources: (H) => {
            f(
              (G) => G.map((B) => B.id === j || B.messages.some((R) => R.id === h) ? {
                ...B,
                messages: B.messages.map(
                  (R) => R.id === h ? { ...R, sources: H } : R
                )
              } : B)
            );
          },
          onSuggestedQuestions: (H) => {
            f(
              (G) => G.map((B) => B.id === j || B.messages.some((R) => R.id === h) ? {
                ...B,
                messages: B.messages.map(
                  (R) => R.id === h ? { ...R, suggestedQuestions: H } : R
                )
              } : B)
            );
          },
          onDone: () => {
            var H;
            f(
              (G) => G.map((B) => {
                var fe, Ze;
                if (!(B.id === j || B.messages.some((je) => je.id === h))) return B;
                const R = B.messages.find((je) => je.id === h), ke = (fe = R == null ? void 0 : R.widget) == null ? void 0 : fe.name, ve = (Ze = R == null ? void 0 : R.content) == null ? void 0 : Ze.trim(), _ = ve ? ve.slice(0, 70) : ke ? `[${ke}]` : B.preview;
                return {
                  ...B,
                  preview: _,
                  messages: B.messages.map(
                    (je) => je.id === h ? { ...je, isStreaming: !1 } : je
                  )
                };
              })
            ), b(!1), (H = k.current) == null || H.call(k, "stream_completed", { conversationId: j });
          },
          onError: (H) => {
            console.error("[Pitaj.io] Stream error:", H), N(H.message || "Došlo je do greške u komunikaciji."), b(!1);
          }
        }
      });
    } catch (H) {
      b(!1), D(H, "Greška pri slanju poruke.");
    }
  }, v = te((j) => {
    var h;
    const S = j.trim();
    if (!S || g || n.chatAvailable === !1 || w !== null) return;
    if (!c) {
      U(S);
      return;
    }
    const x = {
      id: "usr-msg-" + Date.now(),
      content: S,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    f(
      (M) => M.map((P) => P.id !== c ? P : {
        ...P,
        preview: S,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...P.messages, x]
      })
    ), (h = k.current) == null || h.call(k, "message_sent", { conversationId: c, content: S }), ie(c, S, Z ? Z.messages : []);
  }, [c, g, U, Z, n.chatAvailable, n.companyId, n.apiUrl, n.mockMode, w]), K = te(
    async (j, S, T) => {
      var x;
      if (!n.mockMode)
        try {
          await xa(
            n.companyId,
            j,
            S,
            n.apiUrl,
            n.mockMode
          );
        } catch (h) {
          console.error("[Pitaj.io] Failed to submit rating:", h);
          const M = (h == null ? void 0 : h.status) === 404 ? "Razgovor ili tiket više nije dostupan." : h != null && h.message && !h.message.includes("failed") && !h.message.includes("404") ? h.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(M);
        }
      f(
        (h) => h.map(
          (M) => M.id === j ? { ...M, satisfaction: S, ratingScore: T ?? M.ratingScore } : M
        )
      ), (x = k.current) == null || x.call(k, "rating_submitted", {
        conversationId: j,
        satisfaction: S,
        score: T
      });
    },
    [n.companyId, n.apiUrl, n.mockMode]
  ), W = te(
    (j, S, T = "user") => {
      const x = S.trim();
      if (!x) return;
      const h = (/* @__PURE__ */ new Date()).toISOString(), M = `conv-${Date.now()}`, P = typeof j == "string" && j.trim().length > 0 ? j : M, H = {
        id: `local-${T}-msg-${Date.now()}`,
        content: x,
        sender: T,
        timestamp: h,
        status: "sent"
      };
      f(
        (G) => G.some((B) => B.id === P) ? G.map((B) => B.id !== P ? B : {
          ...B,
          preview: x.length > 70 ? `${x.slice(0, 70)}…` : x,
          timestamp: h,
          messages: [...B.messages, H]
        }) : [
          {
            id: P,
            title: "Forma",
            preview: x.length > 70 ? `${x.slice(0, 70)}…` : x,
            timestamp: h,
            unread: 0,
            messages: [H],
            status: "active"
          },
          ...G
        ]
      ), m(P), u("conversation");
    },
    []
  ), oe = (j) => {
    var S;
    return !!((S = j.messages) != null && S.some((T) => T.sender === "ai"));
  };
  return {
    config: n,
    setConfig: o,
    isOpen: r,
    setIsOpen: re,
    screen: s,
    setScreen: ce,
    conversations: d,
    activeConversation: Z,
    activeConversationId: c,
    visitorContact: C,
    visitorId: p.current,
    activeConversationHasReply: Z ? oe(Z) : !1,
    totalUnread: ne,
    isStreaming: g,
    rateLimitTimer: w,
    errorBanner: A,
    setErrorBanner: N,
    activeLanguage: Y,
    setActiveLanguage: $,
    selectConversation: ee,
    startNewConversation: U,
    endConversation: Q,
    deleteConversation: y,
    sendUserMessage: v,
    submitSatisfaction: K,
    appendConversationMessage: W,
    handleApiError: D
  };
}
let jt = null, Di = null;
function ui(t, e) {
  e === null && t !== null && jt !== null && jt !== t || (jt = e ? t : null, Di = e);
}
function Me() {
  return Di;
}
function Tt(t, e) {
  let a = null;
  const n = () => a || (a = t().then((o) => {
    const r = e ? e(o) : o.default;
    if (!r)
      throw new Error("Lazy component not found");
    return r;
  }));
  return function(r) {
    const [l, s] = V(null);
    return q(() => {
      let u = !0;
      return n().then((d) => {
        u && s(() => d);
      }).catch((d) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", d);
      }), () => {
        u = !1;
      };
    }, []), l ? /* @__PURE__ */ i(l, { ...r }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function Ia({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ i("path", { d: "M5 3v4" }),
    /* @__PURE__ */ i("path", { d: "M19 17v4" }),
    /* @__PURE__ */ i("path", { d: "M3 5h4" }),
    /* @__PURE__ */ i("path", { d: "M17 19h4" })
  ] });
}
function Hi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ i("path", { d: "M12 19V5" })
  ] });
}
function Ta({ size: t = 16, className: e = "" }) {
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
function La({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function Ln({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function pt({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function Pa({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function Ea({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function Bi({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function Da({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function Ha({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function Pn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] });
}
function Ba({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function $a({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function Fa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function $i({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ i("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function Ua({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function Fi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ i("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ i("path", { d: "M10 9H8" }),
    /* @__PURE__ */ i("path", { d: "M16 13H8" }),
    /* @__PURE__ */ i("path", { d: "M16 17H8" })
  ] });
}
function Ra({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M7 10v12" }),
    /* @__PURE__ */ i("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function Oa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M17 14V2" }),
    /* @__PURE__ */ i("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function Ui({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function En({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function Dn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function Hn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function Bn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function $n({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function Fn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) });
}
function Va({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function Un({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function Rn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function On({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function Vn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function Kn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function Yn({ size: t = 14, className: e = "" }) {
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
function Zn({ size: t = 14, className: e = "" }) {
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
function Gn({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function Wn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function qn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function Qn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function Jn({ size: t = 24, className: e = "" }) {
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
function Xn({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function er({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function tr({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function ir({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function mt({ size: t = 13, className: e = "" }) {
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
function Ka({ size: t = 16, className: e = "" }) {
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
const Ge = {
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
function F(t, e = "bs") {
  var o, r;
  const a = (e || "bs").toLowerCase().split(/[-_]/)[0], n = Ge[a] || Ge.bs || Ge.en;
  return n && typeof n[t] == "string" ? n[t] : ((o = Ge.bs) == null ? void 0 : o[t]) || ((r = Ge.en) == null ? void 0 : r[t]) || t;
}
function Ya({
  screen: t,
  activeConversation: e,
  config: a,
  language: n = "bs",
  onBack: o,
  onClose: r,
  onNewConversation: l,
  onEndConversation: s,
  onDeleteConversation: u,
  onViewHistory: d,
  onViewTickets: f
}) {
  var $;
  const [c, m] = V(!1), g = X(null), b = t === "conversation" && e, A = b || t === "history" || t === "tickets", N = a.title || a.name || "Pitaj.io Asistent";
  q(() => {
    var I;
    const p = (k) => {
      var E, L;
      const O = ((L = (E = k.composedPath) == null ? void 0 : E.call(k)) == null ? void 0 : L[0]) || k.target;
      g.current && O && !g.current.contains(O) && m(!1);
    };
    document.addEventListener("mousedown", p);
    const C = (I = g.current) == null ? void 0 : I.getRootNode();
    return C instanceof ShadowRoot && C.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p), C instanceof ShadowRoot && C.removeEventListener("mousedown", p);
    };
  }, []), q(() => {
    m(!1);
  }, [t]);
  const Y = (p) => {
    m(!1), p == null || p();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      A && /* @__PURE__ */ i(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": F("back", n),
          title: F("back", n),
          children: /* @__PURE__ */ i(Ta, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${(($ = a.content) == null ? void 0 : $.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(mt, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: N }),
        b && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: g, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => m((p) => !p),
            className: `pitaj-icon-btn ${c ? "is-active" : ""}`,
            "aria-label": F("menu", n),
            "aria-expanded": c,
            title: F("menu", n),
            children: /* @__PURE__ */ i(Pa, { size: 18 })
          }
        ),
        c && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => Y(l),
              children: [
                /* @__PURE__ */ i(Ea, { size: 15, className: "pitaj-menu-item-icon" }),
                F("newConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !b,
              onClick: () => Y(s),
              children: [
                /* @__PURE__ */ i(Ha, { size: 15, className: "pitaj-menu-item-icon" }),
                F("endConversation", n)
              ]
            }
          ),
          u && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !b,
              onClick: () => Y(u),
              children: [
                /* @__PURE__ */ i(Va, { size: 15, className: "pitaj-menu-item-icon" }),
                F("deleteConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => Y(d),
              children: [
                /* @__PURE__ */ i(Ba, { size: 15, className: "pitaj-menu-item-icon" }),
                F("viewHistory", n)
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => Y(f), children: [
            /* @__PURE__ */ i(Fa, { size: 15, className: "pitaj-menu-item-icon" }),
            F("viewTickets", n)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": F("close", n),
          title: F("close", n),
          children: /* @__PURE__ */ i(_e, { size: 18 })
        }
      )
    ] })
  ] });
}
function Za({ content: t }) {
  if (!t)
    return /* @__PURE__ */ i("span", {});
  const e = t.split(`
`), a = [];
  let n = !1, o = [];
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    if (l.startsWith("```")) {
      n ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, `code-${r}`)
      ), o = [], n = !1) : n = !0;
      continue;
    }
    if (n) {
      o.push(l);
      continue;
    }
    if (l.trim().startsWith("- ") || l.trim().startsWith("* ")) {
      const u = l.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: xt(u) }) }, `ul-${r}`)
      );
      continue;
    }
    const s = l.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ i("li", { children: xt(s[2]) }) }, `ol-${r}`)
      );
      continue;
    }
    if (!l.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${r}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: xt(l) }, `p-${r}`));
  }
  return n && o.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function xt(t) {
  const e = [];
  let a = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index > a && e.push(...mi(t.slice(a, o.index)));
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
      const l = r.slice(1, r.indexOf("](")), s = r.slice(r.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: l }, `a-${o.index}`)
      );
    }
    a = o.index + r.length;
  }
  return a < t.length && e.push(...mi(t.slice(a))), e;
}
const Ga = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Wa = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, qa = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), Qa = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function mi(t) {
  const e = [];
  let a;
  for (; (a = Ga.exec(t)) !== null; ) {
    const r = a[0].replace(/[.,;:!?]+$/, "");
    r && e.push({
      start: a.index,
      end: a.index + r.length,
      href: r.startsWith("www.") ? `https://${r}` : r,
      external: !0
    });
  }
  for (; (a = Wa.exec(t)) !== null; )
    e.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = qa.exec(t)) !== null; ) {
    const r = a[0];
    Qa.test(r) || e.push({
      start: a.index,
      end: a.index + r.length,
      href: `tel:${r.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((r, l) => r.start - l.start);
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
function Ri({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: n,
  containerClassName: o,
  revealDelayMs: r = 0,
  staggerMs: l = 140
}) {
  const s = Ie(() => Array.isArray(t) && t.length > 0 ? t.map((g) => ({
    text: g.text.trim(),
    children: (g.children ?? []).map((b) => b.trim()).filter(Boolean)
  })).filter((g) => g.text !== "") : (e ?? []).map((g) => g.trim()).filter(Boolean).map((g) => ({ text: g, children: [] })), [e, t]), [u, d] = V(null), [f, c] = V(s.length);
  if (q(() => {
    d(null);
  }, [s]), q(() => {
    if (u) {
      c(s.length);
      return;
    }
    if (r <= 0) {
      c(s.length);
      return;
    }
    c(0);
    const g = window.setTimeout(() => {
      c(1);
      const b = window.setInterval(() => {
        c((w) => w >= s.length ? (window.clearInterval(b), w) : w + 1);
      }, Math.max(60, l));
    }, r);
    return () => {
      window.clearTimeout(g);
    };
  }, [u, s.length, r, l]), s.length === 0)
    return null;
  const m = s.find((g) => g.text === u && g.children.length > 0) ?? null;
  return m ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => d(null),
        className: n,
        children: "Nazad"
      }
    ),
    m.children.map((g, b) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(g),
        className: n,
        children: g
      },
      `${m.text}-${b}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: s.slice(0, f).map((g, b) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => g.children.length > 0 ? d(g.text) : a(g.text),
      className: `${n} pitaj-suggestion-enter`,
      children: g.text
    },
    `${g.text}-${b}`
  )) });
}
const Ja = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Xa = [".txt", ".md", ".csv", ".json", ".xml"];
function en(t) {
  if (Ja.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Xa.some((a) => e.endsWith(a));
}
async function Oi(t) {
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
      const r = en(a) ? (await a.text()).slice(0, 4e3) : null;
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
function Vi(t) {
  return t.length === 0 ? "" : `

${t.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function tn(t) {
  const { widgetId: e, audio: a, apiUrl: n } = t, o = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), r = new FormData();
  r.append("audio", a, "dictation.webm");
  const l = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: r,
    headers: {
      Accept: "application/json"
    }
  });
  if (!l.ok) {
    const d = await l.json().catch(() => null), c = (() => {
      if (l.status !== 422 || !(d != null && d.errors) || typeof d.errors != "object")
        return null;
      for (const m of Object.values(d.errors))
        if (Array.isArray(m)) {
          for (const g of m)
            if (typeof g == "string" && g.trim() !== "")
              return g;
        }
      return null;
    })();
    Li(
      l.status,
      d,
      typeof c == "string" && c || `Transkripcija nije uspjela (${l.status})`,
      l.headers.get("Retry-After")
    );
  }
  const s = await l.json(), u = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!u)
    throw new Error("Transkripcija nije vratila tekst.");
  return u;
}
function Ki({ widgetId: t, apiUrl: e, onTranscript: a, onError: n }) {
  const r = X(null), l = X(null), s = X([]), u = X(!0), d = X(null), f = X(null), c = X(null), m = X(null), g = X(Array.from({ length: 42 }, () => 0.06)), [b, w] = V(!1), [z, A] = V(!1), [N, Y] = V(
    () => Array.from({ length: 42 }, () => 0.06)
  ), $ = Ie(() => {
    var D;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((D = navigator.mediaDevices) != null && D.getUserMedia);
  }, [t]), p = te(() => {
    l.current && (l.current.getTracks().forEach((D) => D.stop()), l.current = null);
  }, []), C = te(() => {
    var D;
    d.current !== null && (window.cancelAnimationFrame(d.current), d.current = null), (D = m.current) == null || D.disconnect(), m.current = null, c.current = null, f.current && (f.current.close(), f.current = null);
  }, []), I = te(() => {
    const D = Array.from({ length: 42 }, () => 0.06);
    g.current = D, Y(D);
  }, []), k = te((D) => {
    const Z = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!Z)
      return;
    const ne = new Z(), re = ne.createAnalyser();
    re.fftSize = 2048, re.smoothingTimeConstant = 0.78;
    const ce = ne.createMediaStreamSource(D);
    ce.connect(re), f.current = ne, c.current = re, m.current = ce;
    const ee = new Uint8Array(re.fftSize), Q = () => {
      const y = c.current;
      if (!y) return;
      y.getByteTimeDomainData(ee);
      let U = 0;
      for (let W = 0; W < ee.length; W += 1) {
        const oe = (ee[W] - 128) / 128;
        U += oe * oe;
      }
      const ie = Math.sqrt(U / ee.length), v = Math.max(0.04, Math.min(1, ie * 5.2)), K = g.current.slice(1);
      K.push(v), g.current = K, Y(K), d.current = window.requestAnimationFrame(Q);
    };
    d.current = window.requestAnimationFrame(Q);
  }, []), O = te(async () => {
    if (!(!$ || z || r.current || b))
      try {
        const Z = await navigator.mediaDevices.getUserMedia({ audio: !0 }), ne = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], ce = typeof MediaRecorder.isTypeSupported == "function" ? ne.find((Q) => MediaRecorder.isTypeSupported(Q)) : void 0, ee = ce ? new MediaRecorder(Z, { mimeType: ce }) : new MediaRecorder(Z);
        s.current = [], u.current = !0, l.current = Z, r.current = ee, I(), k(Z), ee.ondataavailable = (Q) => {
          Q.data.size > 0 && s.current.push(Q.data);
        }, ee.onstop = async () => {
          w(!1);
          const Q = new Blob(s.current, { type: ee.mimeType || "audio/webm" });
          if (s.current = [], r.current = null, p(), C(), Q.size === 0) {
            I();
            return;
          }
          if (!u.current) {
            I();
            return;
          }
          A(!0);
          try {
            const y = await tn({
              widgetId: t,
              apiUrl: e,
              audio: Q
            });
            a(y);
          } catch (y) {
            console.error("[Pitaj.io] Dictation transcription failed", y), n == null || n(y);
          } finally {
            A(!1), I();
          }
        }, ee.onerror = () => {
          w(!1), r.current = null, p(), C(), I();
        }, ee.start(), w(!0);
      } catch (Z) {
        w(!1), p(), C(), I(), console.error("[Pitaj.io] Dictation microphone access failed", Z);
      }
  }, [e, b, z, $, n, a, I, k, p, C, t]), E = te(() => {
    const D = r.current;
    !D || !b || z || (u.current = !0, D.stop(), w(!1));
  }, [b, z]), L = te(() => {
    const D = r.current;
    !D || !b || (u.current = !1, D.stop(), w(!1));
  }, [b]);
  return q(() => () => {
    const D = r.current;
    D && D.state !== "inactive" && D.stop(), p(), C();
  }, [p, C]), {
    isSupported: $,
    isListening: b,
    isProcessing: z,
    waveformLevels: N,
    start: O,
    stopAndTranscribe: E,
    cancel: L
  };
}
const an = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function hi() {
  const [t, e] = V(0);
  return q(() => {
    const a = setTimeout(() => e(1), 1600), n = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(n);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(Ka, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: an[t] }, t)
  ] });
}
const nn = Tt(
  () => import("./InlineWidgetRenderer-CR2hnPOS.js"),
  (t) => t.InlineWidgetRenderer
);
function rn(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function on(t) {
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
    const l = r.slice(2), s = l.indexOf(":");
    if (s < 1) return null;
    const u = l.slice(0, s).trim(), d = l.slice(s + 1).trim();
    return !u || !d ? null : { label: u, value: d };
  }).filter((r) => !!r);
  return o.length < 1 ? null : { title: a, entries: o };
}
function sn({
  conversation: t,
  config: e,
  language: a = "bs",
  isStreaming: n,
  rateLimitCountdown: o,
  errorBanner: r,
  onSendMessage: l,
  onApiError: s,
  onSubmitSatisfaction: u
}) {
  var y, U, ie;
  const [d, f] = V(""), [c, m] = V(!1), [g, b] = V(null), [w, z] = V([]), A = X(null), N = X(null), Y = X(null), $ = e.content || {}, p = e.chatAvailable === !1, C = e.transcribeAvailable === !1, I = n || o !== null || p, k = Ki({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: te((v) => {
      f((K) => K ? `${K} ${v}` : v);
    }, []),
    onError: te((v) => {
      s == null || s(v, "Greška pri transkripciji.");
    }, [s])
  });
  q(() => {
    const v = A.current;
    v && (v.scrollTop = v.scrollHeight);
  }, [t.messages, n]), q(() => {
    const v = N.current;
    v && (v.style.height = "auto", v.style.height = `${Math.min(v.scrollHeight, 96)}px`);
  }, [d]), q(() => {
    m(!1);
  }, [$.dismissibleNotice]);
  const O = (v) => {
    z((K) => {
      const W = K.find((oe) => oe.id === v);
      if (W != null && W.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(W.previewUrl);
        } catch {
        }
      return K.filter((oe) => oe.id !== v);
    });
  }, E = (v) => {
    const K = (v ?? d).trim();
    if (!K && w.length === 0 || I) return;
    const W = `${K}${Vi(w)}`.trim();
    l(W), w.forEach((oe) => {
      if (oe.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(oe.previewUrl);
        } catch {
        }
    }), z([]), v || (f(""), N.current && (N.current.style.height = "auto"));
  }, L = (v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), E());
  }, D = $.messagePlaceholder || e.placeholder || F("placeholder", a), Z = ((y = $.dismissibleNotice) == null ? void 0 : y.trim()) || "", ne = ((U = $.footerText) == null ? void 0 : U.trim()) || "", re = $.showSuggestedMessages === !1 || $.keepShowingSuggestedMessages !== !0 ? [] : $.suggestedMessageRows || [], ce = ((ie = [...t.messages].reverse().find((v) => v.sender === "ai")) == null ? void 0 : ie.id) ?? null, ee = k.isListening, Q = async (v, K) => {
    navigator.clipboard && (await navigator.clipboard.writeText(K), b(v), window.setTimeout(() => {
      b((W) => W === v ? null : W);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: A, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ i("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-conversation-ticket-label", children: F("ticketNumber", a) }),
        /* @__PURE__ */ i("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ i("span", { className: "pitaj-date-label", children: F("today", a) }),
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" })
      ] }),
      t.messages.map((v) => {
        const K = v.sender === "user", W = K ? on(v.content) : null, oe = !K && v.isStreaming && !v.content && !v.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${K ? "user" : "ai"}${v.widget ? " has-widget" : ""}${oe ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              K ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${W ? "is-form-submission" : ""}`, children: W ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: W.title.toLowerCase().startsWith("forma") ? W.title : `Forma: ${W.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: W.entries.map((pe) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: pe.label }),
                  /* @__PURE__ */ i("dd", { children: pe.value })
                ] }, `${v.id}-${pe.label}`)) })
              ] }) : v.content }) : /* @__PURE__ */ i(he, { children: [
                v.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(Za, { content: v.content }),
                  v.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                v.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(nn, { widget: v.widget, onAction: (pe) => E(pe) }) }),
                v.isStreaming && !v.content && !v.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(hi, {}) })
              ] }),
              !K && v.sources && v.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: F("sources", a) }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: v.sources.map((pe) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: pe.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: pe.title }),
                      /* @__PURE__ */ i($a, { size: 10 })
                    ]
                  },
                  pe.id
                )) })
              ] }),
              !K && $.showFollowupSuggestions !== !1 && v.suggestedQuestions && v.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: v.suggestedQuestions.map((pe, ue) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => E(pe),
                  disabled: I,
                  className: "pitaj-followup-chip",
                  children: pe
                },
                `sug-f-${ue}`
              )) }),
              (!v.isStreaming || !!v.content || !!v.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: rn(v.timestamp) }),
                !K && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  v.id === ce && !n && /* @__PURE__ */ i(he, { children: $.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(he, { children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => u == null ? void 0 : u("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": F("helpful", a),
                        title: F("helpful", a),
                        children: /* @__PURE__ */ i(Ra, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => u == null ? void 0 : u("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": F("notHelpful", a),
                        title: F("notHelpful", a),
                        children: /* @__PURE__ */ i(Oa, { size: 14 })
                      }
                    )
                  ] }) }),
                  v.id === ce && !n && $.copyMessageEnabled !== !1 && !!v.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void Q(v.id, v.content),
                      className: `pitaj-msg-action-btn ${g === v.id ? "is-active" : ""}`,
                      "aria-label": g === v.id ? F("copied", a) : F("copyAnswer", a),
                      title: g === v.id ? F("copied", a) : F("copyAnswer", a),
                      children: g === v.id ? /* @__PURE__ */ i(pt, { size: 14 }) : /* @__PURE__ */ i(Ua, { size: 14 })
                    }
                  )
                ] }),
                K && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  pt,
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
      n && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(hi, {}) }) }) })
    ] }),
    (r || o) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: o ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${o}s.` : r }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Ri,
        {
          rows: re,
          fallbackQuestions: $.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: E,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      w.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: w.map((v) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: v.previewUrl ? /* @__PURE__ */ i("img", { src: v.previewUrl, alt: v.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(Fi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: v.name, children: v.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => O(v.id),
            "aria-label": `Ukloni ${v.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(_e, { size: 10 })
          }
        )
      ] }, v.id)) }),
      Z && !c && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: Z }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => m(!0),
            "aria-label": F("close", a),
            children: /* @__PURE__ */ i(_e, { size: 12 })
          }
        )
      ] }),
      k.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: F("transcribing", a) }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${ee ? "is-recording" : ""}`, children: [
        $.attachmentsEnabled && /* @__PURE__ */ i(he, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: Y,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (v) => {
                const K = v.currentTarget.files;
                if (v.currentTarget.value = "", !K || K.length === 0) return;
                const W = await Oi(K);
                z((oe) => [...oe, ...W].slice(0, 3));
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
                return (v = Y.current) == null ? void 0 : v.click();
              },
              children: /* @__PURE__ */ i(Ui, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: N,
            value: d,
            onInput: (v) => f(v.target.value),
            onKeyDown: L,
            placeholder: D,
            rows: 1,
            disabled: I,
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
              "aria-label": F("cancel", a),
              title: F("cancel", a),
              onClick: () => k.cancel(),
              children: /* @__PURE__ */ i(_e, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: k.waveformLevels.map((v, K) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + v * 15))}px` }
            },
            `dict-wave-conv-${K}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": F("sendAudio", a),
              title: F("sendAudio", a),
              onClick: () => k.stopAndTranscribe(),
              disabled: I || k.isProcessing,
              children: /* @__PURE__ */ i(pt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(he, { children: [
          $.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${k.isProcessing ? "is-active" : ""}`,
              "aria-label": F("dictation", a),
              title: k.isProcessing ? F("transcribing", a) : k.isSupported ? F("dictation", a) : "Diktiranje nije podržano",
              onClick: () => k.start(),
              disabled: I || C || !k.isSupported || k.isProcessing,
              children: /* @__PURE__ */ i($i, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => E(),
              disabled: I || !d.trim() && w.length === 0,
              className: "pitaj-send-btn",
              "aria-label": F("sendMessage", a),
              children: /* @__PURE__ */ i(Hi, { size: 16 })
            }
          )
        ] })
      ] }),
      ne && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: ne }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(mt, { size: 13, className: "pitaj-powered-icon" }),
        e.poweredByText || F("poweredBy", a),
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
function cn({
  config: t,
  language: e = "bs",
  openedByUser: a = !1,
  onStart: n,
  onApiError: o
}) {
  var ee, Q;
  const [r, l] = V(""), [s, u] = V(!1), [d, f] = V(!1), [c, m] = V([]), g = X(null), b = X(null), w = t.content || {}, z = t.chatAvailable === !1, A = t.transcribeAvailable === !1, N = Ki({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: te((y) => {
      l((U) => U ? `${U} ${y}` : y);
    }, []),
    onError: te((y) => {
      o == null || o(y, "Greška pri transkripciji.");
    }, [o])
  });
  q(() => {
    var y;
    a && ((y = g.current) == null || y.focus({ preventScroll: !0 }));
  }, [a]), q(() => {
    if (typeof window > "u") return;
    const y = window.matchMedia("(max-width: 768px)"), U = () => u(y.matches);
    return U(), y.addEventListener("change", U), () => y.removeEventListener("change", U);
  }, []), q(() => {
    f(!1);
  }, [w.dismissibleNotice]);
  const $ = (s && w.useDifferentMessageMobile && w.mobileWelcomeMessage ? w.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((y) => y.trim()).filter((y) => y.length > 0), p = w.autoShowInitialMessages !== !1 && !a, C = !s || w.showAutoPopupMobile !== !1, I = s && w.useDifferentDurationMobile && typeof w.mobileAutoShowDurationSeconds == "number" ? w.mobileAutoShowDurationSeconds : w.autoShowDurationSeconds ?? 0, k = p && C ? Math.max(0, I) * 1e3 : 0, O = (y) => {
    m((U) => {
      const ie = U.find((v) => v.id === y);
      if (ie != null && ie.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ie.previewUrl);
        } catch {
        }
      return U.filter((v) => v.id !== y);
    });
  }, E = (y) => {
    const U = (y ?? r).trim();
    if (!U && c.length === 0 || z) return;
    const ie = `${U}${Vi(c)}`.trim();
    n(ie), c.forEach((v) => {
      if (v.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(v.previewUrl);
        } catch {
        }
    }), l(""), m([]);
  }, L = (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), E());
  }, D = w.showSuggestedMessages === !1 ? [] : w.suggestedMessageRows || [], Z = w.messagePlaceholder || t.placeholder || F("inputPlaceholder", e), ne = ((ee = w.dismissibleNotice) == null ? void 0 : ee.trim()) || "", re = ((Q = w.footerText) == null ? void 0 : Q.trim()) || "", ce = N.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: ($.length > 0 ? $ : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((y, U) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: y }) }) }, `welcome-${U}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Ri,
        {
          rows: D,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: E,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: k,
          staggerMs: 150
        }
      ),
      c.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: c.map((y) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: y.previewUrl ? /* @__PURE__ */ i("img", { src: y.previewUrl, alt: y.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(Fi, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: y.name, children: y.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => O(y.id),
            "aria-label": `Ukloni ${y.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(_e, { size: 10 })
          }
        )
      ] }, y.id)) }),
      ne && !d && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: ne }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => f(!0),
            "aria-label": F("close", e),
            children: /* @__PURE__ */ i(_e, { size: 12 })
          }
        )
      ] }),
      N.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: F("transcribing", e) }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${ce ? "is-recording" : ""}`, children: [
        w.attachmentsEnabled && /* @__PURE__ */ i(he, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: b,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (y) => {
                const U = y.currentTarget.files;
                if (y.currentTarget.value = "", !U || U.length === 0) return;
                const ie = await Oi(U);
                m((v) => [...v, ...ie].slice(0, 3));
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
                var y;
                return (y = b.current) == null ? void 0 : y.click();
              },
              children: /* @__PURE__ */ i(Ui, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: g,
            value: r,
            onInput: (y) => l(y.target.value),
            onKeyDown: L,
            placeholder: Z,
            rows: 1,
            disabled: z,
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
              "aria-label": F("cancel", e),
              title: F("cancel", e),
              onClick: () => N.cancel(),
              children: /* @__PURE__ */ i(_e, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: N.waveformLevels.map((y, U) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + y * 15))}px` }
            },
            `dict-wave-${U}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": F("sendAudio", e),
              title: F("sendAudio", e),
              onClick: () => N.stopAndTranscribe(),
              disabled: z || N.isProcessing,
              children: /* @__PURE__ */ i(pt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(he, { children: [
          w.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${N.isProcessing ? "is-active" : ""}`,
              "aria-label": F("dictation", e),
              title: N.isProcessing ? F("transcribing", e) : N.isSupported ? F("dictation", e) : "Diktiranje nije podržano",
              onClick: () => N.start(),
              disabled: z || A || !N.isSupported || N.isProcessing,
              children: /* @__PURE__ */ i($i, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => E(),
              disabled: z || !r.trim() && c.length === 0,
              className: "pitaj-send-btn",
              "aria-label": F("sendMessage", e),
              children: /* @__PURE__ */ i(Hi, { size: 16 })
            }
          )
        ] })
      ] }),
      re && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: re }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(mt, { size: 13, className: "pitaj-powered-icon" }),
        t.poweredByText || F("poweredBy", e),
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
function pn({
  isOpen: t,
  onClick: e,
  unreadCount: a = 0,
  config: n
}) {
  var f, c, m, g, b, w;
  const o = ((f = n.content) == null ? void 0 : f.launcherIconStyle) || "message-circle", r = typeof ((c = n.content) == null ? void 0 : c.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", l = ((m = n.content) == null ? void 0 : m.launcherShowText) === !0, s = ((g = n.content) == null ? void 0 : g.launcherTextSide) === "left" ? "left" : "right", u = l ? ((w = (b = n.content) == null ? void 0 : b.launcherText) == null ? void 0 : w.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${l ? "has-label" : ""} ${l && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && r !== "" ? /* @__PURE__ */ i("img", { src: r, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? Ia : o === "message-square" ? Bi : o === "contact" ? Da : La, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(_e, { size: 22 }) })
        ] }),
        u && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: u }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function ln({ isOpen: t, onOpen: e, config: a }) {
  var C, I, k, O;
  const [n, o] = V(!1), [r, l] = V(!1), [s, u] = V(!1), [d, f] = V(t), c = X(null);
  q(() => {
    t && (f(!0), u(!1));
  }, [t]), q(() => {
    const E = () => {
      var D;
      if (typeof window > "u") return;
      let L = window.innerWidth <= 640;
      if (!L && c.current) {
        const Z = (D = c.current.closest(".pitaj-root")) == null ? void 0 : D.parentElement;
        Z && Z.clientWidth > 0 && Z.clientWidth <= 640 && (L = !0);
      }
      o(L);
    };
    return E(), window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, []);
  const m = a.content || {}, g = m.autoShowInitialMessages !== !1, b = m.showAutoPopupMobile !== !1, w = !n || b, z = n && m.useDifferentDurationMobile && typeof m.mobileAutoShowDurationSeconds == "number" ? m.mobileAutoShowDurationSeconds : m.autoShowDurationSeconds ?? 0;
  if (q(() => {
    if (!g || !w || r || t || d) {
      u(!1);
      return;
    }
    const E = Math.max(0, z) * 1e3, L = setTimeout(() => {
      u(!0);
    }, E);
    return () => clearTimeout(L);
  }, [g, w, r, t, d, z]), !s || t)
    return null;
  let A = "";
  n && m.useDifferentMessageMobile && ((C = m.mobileWelcomeMessage) != null && C.trim()) ? A = m.mobileWelcomeMessage.trim() : (I = m.popupMessageText) != null && I.trim() ? A = m.popupMessageText.trim() : (k = a.welcomeMessage) != null && k.trim() ? A = a.welcomeMessage.trim() : (O = a.welcomeHeadline) != null && O.trim() ? A = a.welcomeHeadline.trim() : A = "Zdravo! Kako vam mogu pomoći danas?";
  const N = (E) => {
    E.stopPropagation(), E.preventDefault(), l(!0), u(!1);
  }, Y = () => {
    e();
  }, $ = a.title || a.name || "Pitaj.io Asistent", p = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: c,
      className: "pitaj-launcher-popup",
      onClick: Y,
      role: "button",
      tabIndex: 0,
      "aria-label": `${$}: ${A}`,
      onKeyDown: (E) => {
        (E.key === "Enter" || E.key === " ") && (E.preventDefault(), Y());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: p ? /* @__PURE__ */ i("img", { src: p, alt: "" }) : /* @__PURE__ */ i(mt, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: $ })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: N,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ i(_e, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-popup-body", children: A }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function dn(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(n / (1e3 * 60)), r = Math.floor(n / (1e3 * 60 * 60)), l = Math.floor(n / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : r < 24 ? `prije ${r}h` : l < 7 ? `prije ${l}d` : e.toLocaleDateString();
}
function un({ config: t, visitorId: e, onSelectTicket: a }) {
  const [n, o] = V([]), [r, l] = V("open"), [s, u] = V(1), [d, f] = V(!0), [c, m] = V(!0), [g, b] = V(!1), [w, z] = V(null), A = X(null), N = X(null), Y = X(!1);
  q(() => {
    let C = !0;
    return m(!0), o([]), u(1), f(!0), z(null), Y.current = !1, _t({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: 1,
      perPage: 15
    }).then((I) => {
      C && (o(I.tickets), f(I.hasMore), u(1));
    }).catch((I) => {
      C && z(I instanceof Error ? I.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      C && m(!1);
    }), () => {
      C = !1;
    };
  }, [t.apiUrl, t.companyId, e, r]);
  const $ = te(() => {
    if (c || Y.current || !d) return;
    Y.current = !0, b(!0);
    const C = s + 1;
    _t({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: C,
      perPage: 15
    }).then((I) => {
      o((k) => {
        const O = new Set(k.map((L) => L.id)), E = I.tickets.filter((L) => !O.has(L.id));
        return [...k, ...E];
      }), f(I.hasMore), u(C);
    }).catch((I) => {
      console.error("[Pitaj.io] Error loading more tickets:", I);
    }).finally(() => {
      b(!1), Y.current = !1;
    });
  }, [t.apiUrl, t.companyId, d, c, s, r, e]);
  return q(() => {
    const C = N.current, I = A.current;
    if (!C || !I || !d || c || g) return;
    const k = new IntersectionObserver(
      (O) => {
        var E;
        (E = O[0]) != null && E.isIntersecting && $();
      },
      { root: I, rootMargin: "120px" }
    );
    return k.observe(C), () => k.disconnect();
  }, [d, c, g, $]), /* @__PURE__ */ i(
    "div",
    {
      ref: A,
      className: "pitaj-tickets-screen",
      onScroll: (C) => {
        const I = C.currentTarget;
        !I || !d || c || Y.current || I.scrollHeight - I.scrollTop - I.clientHeight < 120 && $();
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
              onClick: () => l("open"),
              role: "tab",
              "aria-selected": r === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: r === "closed" ? "is-active" : "",
              onClick: () => l("closed"),
              role: "tab",
              "aria-selected": r === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        c ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : w ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: w }) }) : n.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(Bi, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: r === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: r === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          n.map((C) => {
            const I = C.messages || [], k = I.length > 0 ? I[I.length - 1] : null, O = I.length, E = O === 1 ? "1 poruka" : O >= 2 && O <= 4 ? `${O} poruke` : `${O} poruka`;
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
                  k && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: k.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: dn(C.updatedAt) }),
                    O > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: E })
                  ] })
                ] })
              },
              C.id
            );
          }),
          g && /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ i("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ i("div", { ref: N, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const mn = Tt(() => import("./HistoryScreen-Cg6BWe2H.js"), (t) => t.HistoryScreen), hn = Tt(() => import("./FormActionsScreen-B6yOLrNW.js"), (t) => t.FormActionsScreen);
function et(t) {
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
    const o = Number(n[1]) % 360, r = Number(n[2]) / 100, l = Number(n[3]) / 100, s = (1 - Math.abs(2 * l - 1)) * r, u = s * (1 - Math.abs(o / 60 % 2 - 1)), d = l - s / 2;
    let f = 0, c = 0, m = 0;
    return 0 <= o && o < 60 ? (f = s, c = u, m = 0) : 60 <= o && o < 120 ? (f = u, c = s, m = 0) : 120 <= o && o < 180 ? (f = 0, c = s, m = u) : 180 <= o && o < 240 ? (f = 0, c = u, m = s) : 240 <= o && o < 300 ? (f = u, c = 0, m = s) : 300 <= o && o < 360 && (f = s, c = 0, m = u), {
      r: Math.round((f + d) * 255),
      g: Math.round((c + d) * 255),
      b: Math.round((m + d) * 255)
    };
  }
  return null;
}
function fn(t) {
  return et(t);
}
function at(t, e) {
  const a = et(t);
  return a ? `rgba(${a.r}, ${a.g}, ${a.b}, ${e})` : null;
}
function gn(t, e, a) {
  const n = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(a)}`;
}
function qe(t) {
  const e = et(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function bn(t, e) {
  const a = et(t);
  if (a)
    return (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255 <= 0.55;
  if (e) {
    const n = et(e);
    if (n)
      return (0.2126 * n.r + 0.7152 * n.g + 0.0722 * n.b) / 255 > 0.55;
  }
  return !1;
}
function vn(t) {
  const e = fn(t);
  if (!e) return t;
  const a = qe(t) === "#111827", n = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return gn(
    e.r + (o - e.r) * n,
    e.g + (o - e.g) * n,
    e.b + (o - e.b) * n
  );
}
function jn({
  config: t,
  startOpen: e = !1,
  initialScreen: a = "new-conversation",
  onEvent: n,
  isInline: o = !1,
  isMobile: r,
  isCanvasPreview: l = !1
}) {
  var Se, Ne, Ee, De, He, Be, $e, Fe, Ue, Re, Oe, Ve, Ke, Ye, j, S, T;
  const {
    config: s,
    setConfig: u,
    isOpen: d,
    setIsOpen: f,
    screen: c,
    setScreen: m,
    conversations: g,
    activeConversation: b,
    totalUnread: w,
    isStreaming: z,
    rateLimitTimer: A,
    errorBanner: N,
    selectConversation: Y,
    startNewConversation: $,
    endConversation: p,
    deleteConversation: C,
    sendUserMessage: I,
    submitSatisfaction: k,
    visitorContact: O,
    visitorId: E,
    activeConversationId: L,
    activeLanguage: D,
    appendConversationMessage: Z,
    handleApiError: ne
  } = Ca(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: n,
    onActionTrigger: (x) => {
      if (Q(!0), f(!0), (c === "history" || c === "new-conversation") && m("conversation"), x.widget_id || x.widget)
        return;
      const h = Number(x.id), M = Number(x.form_id), P = Number.isInteger(h) && h > 0 ? h : null, H = Number.isInteger(M) && M > 0 ? -M : null;
      U(P ?? H);
    }
  }), re = X(a), ce = X(e), [ee, Q] = V(e), [y, U] = V(() => {
    var x, h, M, P;
    return ((x = s.previewDraft) == null ? void 0 : x.initialStep) === "form" && !!!(s.previewDraft.widget || (h = s.previewDraft.action) != null && h.widget || (M = s.previewDraft.action) != null && M.widget_id) ? ((P = s.previewDraft.action) == null ? void 0 : P.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  q(() => {
    var x, h, M, P, H, G, B;
    if (((x = s.previewDraft) == null ? void 0 : x.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (h = s.previewDraft.action) != null && h.widget || (M = s.previewDraft.action) != null && M.widget_id)) {
        const R = ((P = s.previewDraft.action) == null ? void 0 : P.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        R !== null && U(R);
      }
    } else (((H = s.previewDraft) == null ? void 0 : H.initialStep) === "idle" || ((G = s.previewDraft) == null ? void 0 : G.initialStep) === "submitted" || ((B = s.previewDraft) == null ? void 0 : B.initialStep) === "dismissed") && U(null);
  }, [
    (Se = s.previewDraft) == null ? void 0 : Se.initialStep,
    (Ee = (Ne = s.previewDraft) == null ? void 0 : Ne.action) == null ? void 0 : Ee.id,
    (He = (De = s.previewDraft) == null ? void 0 : De.form) == null ? void 0 : He.id,
    (Be = s.previewDraft) == null ? void 0 : Be.widget
  ]);
  const [ie, v] = V(null), K = X(null), [W, oe] = V(() => typeof r == "boolean" ? r : o ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  q(() => {
    if (typeof r == "boolean") {
      oe(r);
      return;
    }
    const x = () => {
      if (typeof window > "u") return;
      if (o) {
        oe(!1);
        return;
      }
      let h = window.innerWidth <= 640;
      if (!h && K.current) {
        const M = K.current.getRootNode(), P = M instanceof ShadowRoot ? M.host : K.current.parentElement, H = (P == null ? void 0 : P.parentElement) || P;
        H && H.clientWidth > 0 && H.clientWidth <= 640 && (h = !0);
      }
      oe(h);
    };
    return x(), window.addEventListener("resize", x), window.addEventListener("orientationchange", x), () => {
      window.removeEventListener("resize", x), window.removeEventListener("orientationchange", x);
    };
  }, [r]), q(() => {
    if (typeof window > "u") return;
    const x = () => {
      const M = K.current;
      if (!M) return;
      const P = window.visualViewport;
      if (P) {
        const H = P.height < window.innerHeight - 100;
        M.style.setProperty("--pitaj-viewport-height", `${Math.round(P.height)}px`), M.style.setProperty("--pitaj-viewport-top", `${Math.round(P.offsetTop)}px`), M.style.setProperty("--pitaj-viewport-left", `${Math.round(P.offsetLeft)}px`), M.style.setProperty(
          "--pitaj-input-safe-bottom",
          H ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        M.style.setProperty("--pitaj-viewport-height", "100dvh"), M.style.setProperty("--pitaj-viewport-top", "0px"), M.style.setProperty("--pitaj-viewport-left", "0px"), M.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    x();
    const h = window.visualViewport;
    return h && (h.addEventListener("resize", x), h.addEventListener("scroll", x)), window.addEventListener("resize", x), window.addEventListener("orientationchange", x), () => {
      h && (h.removeEventListener("resize", x), h.removeEventListener("scroll", x)), window.removeEventListener("resize", x), window.removeEventListener("orientationchange", x);
    };
  }, [d, W]), q(() => {
    if (typeof document > "u" || !d || !W || o || l) return;
    const x = document.body.style.overflow, h = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = x, document.body.style.touchAction = h;
    };
  }, [d, W, o, l]), q(() => {
    var M;
    if (typeof window > "u" || o) return;
    const x = (M = K.current) == null ? void 0 : M.getRootNode(), h = x instanceof ShadowRoot ? x.host : null;
    if (h) {
      if (l || h.hasAttribute("data-pitaj-preview") || h.classList.contains("pitaj-preview-host")) {
        h.style.width = "100%", h.style.height = "100%", h.style.top = "0", h.style.left = "0", h.style.position = "relative";
        return;
      }
      d && W ? (h.style.top = "0", h.style.left = "0", h.style.width = "100%", h.style.height = "100%", h.setAttribute("data-pitaj-mobile-open", "true")) : (h.style.top = "", h.style.left = "", h.style.width = "0", h.style.height = "0", h.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [d, W, o, l]);
  const pe = s.formsEnabled === !0 && s.formsAvailable !== !1, ue = Ie(() => {
    var M, P;
    const x = s.actions || [];
    if (x.length > 0 && typeof ((M = x[0]) == null ? void 0 : M.id) == "number")
      return x[0].id;
    const h = s.forms || [];
    return h.length > 0 && typeof ((P = h[0]) == null ? void 0 : P.id) == "number" ? -h[0].id : null;
  }, [s.actions, s.forms]), be = Ie(() => ({
    open: () => {
      Q(!0), f(!0);
    },
    close: () => f(!1),
    toggle: () => {
      d || Q(!0), f(!d);
    },
    startConversation: (x) => {
      Q(!0), f(!0), x && x.trim() ? $(x.trim()) : m("new-conversation");
    },
    setScreen: (x) => m(x),
    setConfig: (x) => {
      const h = {
        ...s,
        ...x,
        colors: { ...s.colors || {}, ...x.colors || {} },
        content: { ...s.content || {}, ...x.content || {} },
        features: { ...s.features || {}, ...x.features || {} },
        cssVars: { ...s.cssVars || {}, ...x.cssVars || {} }
      };
      if (h.previewDraft) {
        if (h.previewDraft.action) {
          const M = h.previewDraft.action;
          h.actions = [M, ...(h.actions || []).filter((P) => P.id !== M.id)];
        }
        if (h.previewDraft.form) {
          const M = h.previewDraft.form;
          h.forms = [M, ...(h.forms || []).filter((P) => P.id !== M.id)], h.formsAvailable = !0, h.formsEnabled = !0;
        }
        if (h.previewDraft.widget) {
          const M = h.previewDraft.widget;
          h.widgets = [M, ...(h.widgets || []).filter((P) => P.id !== M.id)];
        }
      }
      u(h);
    }
  }), [s, d, f, m, $, u]), me = X({});
  ui(me.current, be), q(() => () => ui(me.current, null), []), q(() => {
    a !== re.current && (re.current = a, m(a));
  }, [a, m]), q(() => {
    e !== ce.current && (ce.current = e, e && Q(!0), f(e));
  }, [e, f]), q(() => {
    if (c === "forms") {
      pe && ue !== null && U(ue), m("new-conversation");
      return;
    }
    c === "contact" && m("new-conversation");
  }, [ue, pe, c, m]), q(() => {
    var P;
    if (typeof document > "u") return;
    const x = (P = s.content) == null ? void 0 : P.fontFamily;
    if (!x) return;
    const h = x.trim().toLowerCase();
    let M = "";
    if (h === "inter" ? M = "family=Inter:wght@400;500;600;700" : h === "geist" ? M = "family=Geist:wght@400;500;600;700" : h === "plus jakarta sans" && (M = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), M) {
      const H = `pitaj-font-${h.replace(/\s+/g, "-")}`;
      if (!document.getElementById(H)) {
        const G = document.createElement("link");
        G.id = H, G.rel = "stylesheet", G.href = `https://fonts.googleapis.com/css2?${M}&display=swap`, document.head.appendChild(G);
      }
    }
  }, [($e = s.content) == null ? void 0 : $e.fontFamily]);
  const Te = Ie(() => {
    var Bt, $t, Ft, Ut, Rt, Ot, Vt, Kt, Yt;
    const h = (((Bt = s.content) == null ? void 0 : Bt.themeMode) === "dark" ? "dark" : "light") === "dark", M = s.colors || {}, P = h ? "#0b1220" : "#ffffff", H = h ? "#111827" : "#f8fafc", G = h ? "#111827" : "#ffffff", B = h ? "#e5e7eb" : "#0f172a", de = h ? "#9ca3af" : "#64748b", R = h ? "#263246" : "#e2e8f0", ke = h ? "#172033" : "#f1f5f9", ve = h ? "#111827" : "#ffffff", _ = {};
    ($t = s.theme) != null && $t.css_vars && typeof s.theme.css_vars == "object" && Object.assign(_, s.theme.css_vars);
    const fe = M.primaryColor || (h ? "#3b82f6" : "#2563eb");
    _["--pitaj-accent"] = fe, _["--pitaj-bubble-user"] = M.bubbleUserBg || fe, _["--pitaj-accent-hover"] = vn(fe), _["--pitaj-accent-contrast"] = qe(fe), _["--pitaj-bubble-user-fg"] = qe(M.bubbleUserBg || fe);
    const Ze = at(fe, 0.1), je = at(fe, 0.16), Lt = at(fe, 0.35);
    Ze && (_["--pitaj-accent-soft"] = Ze), je && (_["--pitaj-accent-soft-strong"] = je), Lt && (_["--pitaj-accent-ring"] = Lt);
    const Pt = M.sendAccent || (h ? "#e5e7eb" : "#111827");
    _["--pitaj-send-accent"] = Pt, _["--pitaj-send-accent-contrast"] = qe(Pt);
    const Zi = M.surfaceBg || P;
    _["--pitaj-surface"] = Zi, M.subtle ? _["--pitaj-surface-subtle"] = M.subtle : M.surfaceBg ? _["--pitaj-surface-subtle"] = at(M.surfaceBg, 0.9) || M.surfaceBg : _["--pitaj-surface-subtle"] = H;
    const Gi = M.bubbleAiBg || G;
    _["--pitaj-bubble-ai"] = Gi;
    const Et = M.textFg || B;
    _["--pitaj-bubble-ai-fg"] = Et, _["--pitaj-fg"] = Et;
    const Wi = M.mutedFg || de;
    _["--pitaj-muted"] = Wi;
    const ht = M.border || R;
    _["--pitaj-border"] = ht, _["--pitaj-card-border"] = ht;
    const qi = M.hover || ke;
    _["--pitaj-hover"] = qi, _["--pitaj-chrome-border"] = h ? "rgba(148, 163, 184, 0.52)" : "#d1d5db";
    const tt = M.headerBg || ve, Dt = bn(tt, M.headerFg), Qi = M.headerFg || (Dt ? "#ffffff" : "#0f172a");
    _["--pitaj-header-bg"] = tt, _["--pitaj-header-fg"] = Qi, Dt ? (_["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)", _["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", _["--pitaj-header-icon-hover"] = "#ffffff", _["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", _["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", _["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", _["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", _["--pitaj-header-badge-fg"] = "#ffffff", _["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (_["--pitaj-header-gradient"] = tt.toLowerCase() === "#ffffff" || tt.toLowerCase() === "#fff" ? "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", _["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", _["--pitaj-header-icon-hover"] = "#0f172a", _["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", _["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", _["--pitaj-header-border"] = ht, _["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", _["--pitaj-header-badge-fg"] = "#0f172a", _["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)");
    const ft = (Ft = s.content) == null ? void 0 : Ft.launcherButtonColor;
    ft && (_["--pitaj-launcher-bg"] = ft, _["--pitaj-launcher-fg"] = qe(ft));
    const xe = (Ut = s.content) == null ? void 0 : Ut.cornerRadius;
    if (xe) {
      const ge = xe === "sharp" || xe === "0px" ? "0px" : xe === "small" || xe === "8px" ? "8px" : xe === "medium" || xe === "12px" ? "12px" : xe === "large" || xe === "16px" ? "16px" : xe;
      _["--pitaj-radius"] = ge, ge === "0px" ? (_["--pitaj-radius-bubble"] = "0px", _["--pitaj-radius-input"] = "0px", _["--pitaj-radius-btn"] = "0px", _["--pitaj-radius-avatar"] = "0px", _["--pitaj-radius-full"] = "0px", _["--pitaj-radius-corner-sm"] = "0px", _["--pitaj-launcher-radius"] = "0px", _["--pitaj-launcher-pill-radius"] = "0px", _["--pitaj-badge-radius"] = "0px") : ge === "8px" ? (_["--pitaj-radius-bubble"] = "8px", _["--pitaj-radius-input"] = "8px", _["--pitaj-radius-btn"] = "6px", _["--pitaj-radius-avatar"] = "6px", _["--pitaj-radius-full"] = "8px", _["--pitaj-radius-corner-sm"] = "2px", _["--pitaj-launcher-radius"] = "8px", _["--pitaj-launcher-pill-radius"] = "8px", _["--pitaj-badge-radius"] = "4px") : ge === "12px" ? (_["--pitaj-radius-bubble"] = "12px", _["--pitaj-radius-input"] = "12px", _["--pitaj-radius-btn"] = "8px", _["--pitaj-radius-avatar"] = "10px", _["--pitaj-radius-full"] = "12px", _["--pitaj-radius-corner-sm"] = "4px", _["--pitaj-launcher-radius"] = "12px", _["--pitaj-launcher-pill-radius"] = "12px", _["--pitaj-badge-radius"] = "6px") : (_["--pitaj-radius-bubble"] = "18px", _["--pitaj-radius-input"] = "14px", _["--pitaj-radius-btn"] = "10px", _["--pitaj-radius-avatar"] = "50%", _["--pitaj-radius-full"] = "999px", _["--pitaj-radius-corner-sm"] = "4px", _["--pitaj-launcher-radius"] = "50%", _["--pitaj-launcher-pill-radius"] = "999px", _["--pitaj-badge-radius"] = "999px");
    }
    const gt = (Rt = s.content) == null ? void 0 : Rt.fontFamily;
    if (gt) {
      const ge = gt.toLowerCase(), Zt = ge === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : ge === "arial" ? "Arial, Helvetica, sans-serif" : ge === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : ge === "georgia" ? "Georgia, serif" : ge === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : ge === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${gt}', 'Inter', system-ui, sans-serif`;
      _["--pitaj-font"] = Zt, _.fontFamily = Zt;
    }
    const bt = (Ot = s.content) == null ? void 0 : Ot.fontSize;
    bt && (_["--pitaj-font-size"] = bt, _.fontSize = bt);
    const Ht = (Vt = s.content) != null && Vt.dropShadowEnabled ? h ? "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.3)" : "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)" : "none";
    _["--pitaj-window-shadow"] = Ht, _["--pitaj-shadow"] = Ht;
    const Ji = (Kt = s.content) != null && Kt.dropShadowEnabled ? h ? "0 4px 12px rgba(0, 0, 0, 0.4), 0 10px 24px -4px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(15, 23, 42, 0.15), 0 10px 24px -4px rgba(15, 23, 42, 0.25)" : "none", Xi = (Yt = s.content) != null && Yt.dropShadowEnabled ? h ? "0 6px 16px rgba(0, 0, 0, 0.45), 0 16px 32px -4px rgba(0, 0, 0, 0.6)" : "0 6px 16px rgba(15, 23, 42, 0.18), 0 16px 32px -4px rgba(15, 23, 42, 0.32)" : "none";
    return _["--pitaj-launcher-shadow"] = Ji, _["--pitaj-launcher-shadow-hover"] = Xi, s.cssVars && typeof s.cssVars == "object" && Object.assign(_, s.cssVars), _;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (Fe = s.content) == null ? void 0 : Fe.themeMode,
    (Ue = s.content) == null ? void 0 : Ue.launcherButtonColor,
    (Re = s.content) == null ? void 0 : Re.cornerRadius,
    (Oe = s.content) == null ? void 0 : Oe.fontFamily,
    (Ve = s.content) == null ? void 0 : Ve.fontSize,
    (Ke = s.content) == null ? void 0 : Ke.dropShadowEnabled
  ]), we = ((Ye = s.content) == null ? void 0 : Ye.themeMode) === "dark" ? "dark" : "light", Le = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ i(he, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: K,
      "data-theme": we,
      className: `pitaj-root pitaj-theme-${we} ${Le} ${d ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${l ? "is-canvas-preview" : ""} ${W ? "is-mobile" : ""} ${o && ((j = s.content) != null && j.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: Te,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-window ${d ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !d,
            children: [
              /* @__PURE__ */ i(
                Ya,
                {
                  screen: c,
                  activeConversation: b,
                  config: s,
                  language: D,
                  onBack: () => {
                    const x = ie || "new-conversation";
                    v(null), m(x);
                  },
                  onClose: () => {
                    f(!1);
                  },
                  onNewConversation: () => {
                    v(null), m("new-conversation");
                  },
                  onEndConversation: () => {
                    p(), f(!1);
                  },
                  onDeleteConversation: ((S = s.content) == null ? void 0 : S.deleteConversationsEnabled) !== !1 && b ? () => C(b.id) : void 0,
                  onViewHistory: () => {
                    v(null), m("history");
                  },
                  onViewTickets: () => {
                    v(null), m("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                c === "conversation" && b && /* @__PURE__ */ i(
                  sn,
                  {
                    conversation: b,
                    config: s,
                    language: D,
                    isStreaming: z,
                    rateLimitCountdown: A,
                    errorBanner: N,
                    onSendMessage: I,
                    onApiError: ne,
                    onSubmitSatisfaction: (x, h) => k(b.id, x, h)
                  }
                ),
                c === "new-conversation" && /* @__PURE__ */ i(
                  cn,
                  {
                    config: s,
                    language: D,
                    openedByUser: ee,
                    onStart: (x) => {
                      $(x);
                    },
                    onApiError: ne
                  }
                ),
                c === "history" && /* @__PURE__ */ i(
                  mn,
                  {
                    conversations: g,
                    config: s,
                    language: D,
                    onSelectConversation: (x) => {
                      v("history"), Y(x);
                    },
                    onNewConversation: () => {
                      v(null), m("new-conversation");
                    },
                    onDeleteConversation: ((T = s.content) == null ? void 0 : T.deleteConversationsEnabled) !== !1 ? C : void 0
                  }
                ),
                c === "tickets" && /* @__PURE__ */ i(
                  un,
                  {
                    config: s,
                    visitorId: E,
                    onSelectTicket: (x) => {
                      var B;
                      v("tickets");
                      const h = (B = x.messages) == null ? void 0 : B.find((de) => de.sender === "user"), M = x.messages && x.messages.length > 0 ? x.messages[x.messages.length - 1] : null, P = h ? h.content.length > 40 ? h.content.slice(0, 40) + "…" : h.content : x.ticketNumber || `Tiket #${x.id}`, G = {
                        id: x.conversationId ? String(x.conversationId) : String(x.id),
                        title: P,
                        preview: M ? M.content : x.ticketNumber || `Tiket #${x.id}`,
                        timestamp: x.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: x.messages || [],
                        status: x.isResolved ? "ended" : "active",
                        ticketNumber: x.ticketNumber
                      };
                      Y(G);
                    }
                  }
                ),
                (c === "conversation" || c === "new-conversation") && pe && y !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  hn,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: L,
                    initialActionId: y,
                    visitorContact: O,
                    onApiError: ne,
                    blockedReason: A !== null ? `Sačekajte ${A}s prije novog zahtjeva.` : null,
                    onSubmitted: (x) => {
                      var h, M;
                      if (Z(L, x, "user"), s.mockMode || s.isPreview) {
                        const P = ((M = (h = s.previewDraft) == null ? void 0 : h.form) == null ? void 0 : M.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          Z(L, P, "ai");
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
        (!d || !W) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${d ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            ln,
            {
              isOpen: d,
              onOpen: () => {
                Q(!0), f(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ i(
            pn,
            {
              isOpen: d,
              onClick: () => {
                d || Q(!0), f(!d);
              },
              unreadCount: w,
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const ae = {
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
    dropShadowEnabled: !1,
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
function xn(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * n + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function wn(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function kn(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, r = Number.parseInt(a.slice(5, 7), 16) / 255, l = Math.max(n, o, r), s = Math.min(n, o, r), u = l - s;
  let d = 0;
  const f = (l + s) / 2, c = u === 0 ? 0 : u / (1 - Math.abs(2 * f - 1));
  if (u !== 0)
    switch (l) {
      case n:
        d = (o - r) / u % 6;
        break;
      case o:
        d = (r - n) / u + 2;
        break;
      default:
        d = (n - o) / u + 4;
        break;
    }
  return { h: Math.round((d * 60 + 360) % 360), s: Math.round(c * 100), l: Math.round(f * 100) };
}
function yn(t) {
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
function _n(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((r) => typeof r == "object" && r !== null).map((r) => ({
      key: typeof r.key == "string" ? r.key : "",
      type: yn(r.type),
      label: typeof r.label == "string" ? r.label : "",
      required: r.required === !0,
      placeholder: typeof r.placeholder == "string" ? r.placeholder : void 0,
      options: Array.isArray(r.options) ? r.options.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
      accept: Array.isArray(r.accept) ? r.accept.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
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
function Mn(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function Sn(t, e) {
  var n, o, r, l, s, u, d, f, c;
  if (t === "default")
    return { ...ae, companyId: t || "default" };
  const a = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const m = `${a}/api/widget/${t}/config`, g = await fetch(m, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!g.ok) {
      if (g.status === 403) {
        const y = await g.json().catch(() => null);
        if ((y == null ? void 0 : y.code) === "COUNTRY_BLOCKED" || y != null && y.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...ae,
            companyId: t,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${g.status}), using defaults.`), { ...ae, companyId: t, apiUrl: a };
    }
    const b = await g.json(), w = b.accent_color || ((n = ae.colors) == null ? void 0 : n.primaryColor) || "#2563eb", z = Array.isArray(b.suggested_questions) ? b.suggested_questions.filter((y) => typeof y == "string" && y.trim() !== "").slice(0, 4) : [], A = Array.isArray(b.contact_fields) ? b.contact_fields.filter(
      (y) => y === "name" || y === "email" || y === "phone"
    ) : [], Y = (Array.isArray(b.channels) ? b.channels : []).find(
      (y) => typeof y == "object" && y !== null && y.channel === "chat_bubble"
    ), $ = (Y == null ? void 0 : Y.enabled) !== !1, p = b.widget_content && typeof b.widget_content == "object" ? b.widget_content : null, C = Array.isArray(p == null ? void 0 : p.suggested_message_rows) ? p.suggested_message_rows.filter((y) => typeof y == "object" && y !== null).map((y) => {
      const U = typeof y.text == "string" ? y.text.trim() : "", ie = Array.isArray(y.children) ? y.children.filter((v) => typeof v == "string" && v.trim() !== "") : [];
      return {
        text: U,
        children: ie.length > 0 ? ie : void 0
      };
    }).filter((y) => y.text !== "").slice(0, 4) : [], I = {
      avatarBorder: (p == null ? void 0 : p.avatar_border) !== !1,
      messagePlaceholder: typeof (p == null ? void 0 : p.message_placeholder) == "string" && p.message_placeholder.trim() !== "" ? p.message_placeholder : ae.placeholder,
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
      suggestedMessageRows: C,
      useDifferentMessageMobile: (p == null ? void 0 : p.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (p == null ? void 0 : p.mobile_welcome_message) == "string" ? p.mobile_welcome_message : "",
      autoShowInitialMessages: (p == null ? void 0 : p.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (p == null ? void 0 : p.auto_show_duration_seconds) == "number" ? Math.max(0, p.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (p == null ? void 0 : p.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (p == null ? void 0 : p.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (p == null ? void 0 : p.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, p.mobile_auto_show_duration_seconds) : null,
      popupMessageText: typeof (p == null ? void 0 : p.popup_message_text) == "string" ? p.popup_message_text : "",
      themeMode: (p == null ? void 0 : p.theme_mode) === "dark" ? "dark" : "light",
      dropShadowEnabled: (p == null ? void 0 : p.drop_shadow_enabled) === !0,
      tintedGrayscaleEnabled: (p == null ? void 0 : p.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (p == null ? void 0 : p.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (p == null ? void 0 : p.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (p == null ? void 0 : p.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (p == null ? void 0 : p.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(p.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (p == null ? void 0 : p.tinted_grayscale_tint) == "number" ? Math.max(0, Math.min(100, Math.round(p.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (p == null ? void 0 : p.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(p.tinted_grayscale_shade))) : 0,
      launcherButtonColor: wn(p == null ? void 0 : p.launcher_button_color, "#05070c"),
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
    }, k = b.theme && typeof b.theme == "object" ? b.theme : null, O = k != null && k.css_vars && typeof k.css_vars == "object" ? k.css_vars : void 0, E = k != null && k.colors && typeof k.colors == "object" ? k.colors : null;
    let L = E, D = w;
    if (L)
      E.primaryColor && (D = E.primaryColor);
    else {
      const y = I.themeMode === "dark" ? "dark" : "light", U = I.accentColorEnabled !== !1, ie = I.accentColorForHeaderEnabled === !0, v = I.tintedGrayscaleEnabled === !0, K = I.tintedGrayscaleHue ?? 0, W = I.tintedGrayscaleTint ?? 0, oe = I.tintedGrayscaleShade ?? 0;
      D = U ? w : y === "dark" ? "#3b82f6" : "#2563eb";
      const ue = (kn(D).h + K + 360) % 360, be = Math.max(0, Math.min(40, Math.round(Math.max(0, W) * 0.36))), me = Math.max(-24, Math.min(24, oe * 0.24));
      if (L = y === "dark" ? {
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
      }, U && ie && (L.headerBg = D, L.headerFg = xn(D)), v) {
        const Te = y === "dark" ? Math.max(8, Math.min(20, 12 + me)) : Math.max(88, Math.min(97, 95 + me * 0.22)), we = y === "dark" ? Math.max(10, Math.min(24, 16 + me)) : Math.max(80, Math.min(94, 89 + me * 0.35)), Le = y === "dark" ? Math.max(11, Math.min(26, 18 + me * 0.9)) : Math.max(83, Math.min(95, we + 3)), Se = y === "dark" ? Math.max(22, Math.min(40, 30 + me)) : Math.max(70, Math.min(88, 82 + me * 0.38)), Ne = y === "dark" ? Math.max(16, Math.min(30, 22 + me)) : Math.max(78, Math.min(92, we - 2));
        L.surfaceBg = `hsl(${ue} ${be}% ${Te}%)`, L.bubbleAiBg = `hsl(${ue} ${Math.max(0, be - 2)}% ${Le}%)`, L.subtle = `hsl(${ue} ${Math.max(0, be - 4)}% ${we}%)`, L.border = `hsl(${ue} ${Math.max(0, be - 5)}% ${Se}%)`, L.hover = `hsl(${ue} ${Math.max(0, be - 3)}% ${Ne}%)`;
      }
    }
    const Z = _n(b.forms), ne = Mn(b.actions).filter(
      (y) => Z.some((U) => U.id === y.form_id)
    ), re = b.forms_enabled === !0 && Z.length > 0 && ne.length > 0, ce = b.chat_available !== !1, ee = b.transcribe_available !== !1 && ce, Q = b.forms_available !== !1 && re;
    return {
      ...ae,
      companyId: t,
      enabled: $,
      apiUrl: a,
      name: b.company_name || ae.name,
      title: b.bot_name || ae.title,
      avatar: typeof (p == null ? void 0 : p.avatar_url) == "string" && p.avatar_url.trim() !== "" ? p.avatar_url : ae.avatar,
      welcomeHeadline: b.bot_name ? `Ćaskajte sa ${b.bot_name}` : ae.welcomeHeadline,
      welcomeMessage: b.welcome_message || ae.welcomeMessage,
      placeholder: I.messagePlaceholder || ae.placeholder,
      suggestedQuestions: z,
      contactFields: A.length > 0 ? A : ae.contactFields,
      contact: {
        enabled: typeof ((o = b.contact) == null ? void 0 : o.enabled) == "boolean" ? b.contact.enabled : (r = ae.contact) == null ? void 0 : r.enabled,
        title: typeof ((l = b.contact) == null ? void 0 : l.title) == "string" && b.contact.title.trim() !== "" ? b.contact.title : (s = ae.contact) == null ? void 0 : s.title,
        subtitle: typeof ((u = b.contact) == null ? void 0 : u.subtitle) == "string" && b.contact.subtitle.trim() !== "" ? b.contact.subtitle : (d = ae.contact) == null ? void 0 : d.subtitle,
        submitLabel: typeof ((f = b.contact) == null ? void 0 : f.submit_label) == "string" && b.contact.submit_label.trim() !== "" ? b.contact.submit_label : (c = ae.contact) == null ? void 0 : c.submitLabel
      },
      poweredBy: b.show_branding !== void 0 ? b.show_branding : ae.poweredBy,
      position: b.position || ae.position,
      accentGradient: Array.isArray(b.accent_gradient) ? b.accent_gradient : [],
      content: {
        ...ae.content || {},
        ...I
      },
      chatAvailable: ce,
      transcribeAvailable: ee,
      formsAvailable: Q,
      formsEnabled: re,
      forms: Z,
      actions: ne,
      theme: k,
      cssVars: O,
      colors: {
        ...ae.colors,
        primaryColor: D,
        bubbleUserBg: D,
        sendAccent: (E == null ? void 0 : E.sendAccent) || (I.accentColorForSendIconEnabled ? D : I.themeMode === "dark" ? "#e5e7eb" : "#111827"),
        headerBg: L.headerBg,
        headerFg: L.headerFg,
        surfaceBg: L.surfaceBg,
        bubbleAiBg: L.bubbleAiBg,
        textFg: L.textFg,
        mutedFg: L.mutedFg,
        border: L.border,
        hover: L.hover,
        subtle: L.subtle
      }
    };
  } catch (m) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", m), { ...ae, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const Nn = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-window-shadow: none;--pitaj-shadow: var(--pitaj-window-shadow, none);--pitaj-launcher-shadow: none;--pitaj-launcher-shadow-hover: none;--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host([data-theme="dark"]),.pitaj-root.pitaj-theme-dark,.pitaj-root[data-theme=dark]{color-scheme:dark}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:var(--pitaj-window-shadow, none);border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:none}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--pitaj-launcher-border, rgba(255, 255, 255, .16));box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}', zn = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", Ae = {};
function Yi(t, e) {
  (Ae[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function An(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function Cn(t, e) {
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
      const l = o.action;
      r.actions = [l, ...(r.actions || []).filter((s) => s.id !== l.id)];
    }
    if (o.form) {
      const l = o.form;
      r.forms = [l, ...(r.forms || []).filter((s) => s.id !== l.id)], r.formsAvailable = !0, r.formsEnabled = !0;
    }
    if (o.widget) {
      const l = o.widget;
      r.widgets = [l, ...(r.widgets || []).filter((s) => s.id !== l.id)];
    }
  }
  return r;
}
const nt = /* @__PURE__ */ new WeakMap();
async function Mt(t, e = {}) {
  const a = nt.get(t), n = async () => {
    var b, w;
    const r = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (b = e.initialConfig) != null && b.isPreview || r === "preview") && r === "preview" ? { ...ae, companyId: r, apiUrl: e.apiUrl, mockMode: !0 } : await Sn(r, e.apiUrl), u = Cn(s, e);
    if (u.enabled === !1 || u.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let d = t.shadowRoot;
    d || (d = t.attachShadow({ mode: "open" })), d.innerHTML = "";
    const f = document.createElement("style");
    f.textContent = Nn, d.appendChild(f);
    const c = document.createElement("div");
    c.className = "pitaj-shadow-mount", d.appendChild(c);
    const m = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((w = t.closest) != null && w.call(t, "[data-pitaj-preview]")));
    if (m) {
      const z = document.createElement("style");
      z.textContent = zn, d.appendChild(z);
    }
    Jt(
      /* @__PURE__ */ i(
        jn,
        {
          config: u,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: m,
          initialScreen: e.initialScreen,
          onEvent: Yi
        }
      ),
      c
    );
    const g = Me();
    return g && (t.__pitajController = g), {
      controller: g,
      unmount: () => {
        Jt(null, c), d && (d.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(n, n);
  nt.set(t, o);
  try {
    return await o;
  } finally {
    nt.get(t) === o && nt.delete(t);
  }
}
let We = null;
const rt = {
  mount: async (t, e) => {
    const a = await Mt(t, e);
    return We = a.unmount, a;
  },
  unmount: () => {
    We && (We(), We = null);
  },
  init: async (t) => {
    const e = An(t.containerId || "pitaj-io-widget-root"), a = await Mt(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return We = a.unmount, a;
  },
  open: () => {
    var t;
    return (t = Me()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = Me()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = Me()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = Me()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = Me()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = Me()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = Me()) == null ? void 0 : e.setConfig(t);
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
    Yi(t, e);
  }
};
class In extends HTMLElement {
  constructor() {
    super(...arguments);
    ze(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", r = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", l = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await Mt(this, { widgetId: a, apiUrl: n, position: o, startOpen: r, isInline: l });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function fi(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const a = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", r = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: n, startOpen: o, isInline: r };
}
var gi;
if (typeof window < "u") {
  const t = ((gi = window.PitajIO) == null ? void 0 : gi._q) || [];
  window.PitajIO = rt, customElements.get("pitaj-io") || customElements.define("pitaj-io", In);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, rt.init(e).then(() => {
      t.forEach(({ method: a, args: n }) => {
        const o = rt[a];
        typeof o == "function" && o(...n);
      });
    });
  else {
    const a = document.currentScript;
    let n = fi(a);
    if (!n) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let r = o.length - 1; r >= 0; r--) {
        const l = o[r];
        if (l.src && /widget(\.iife)?\.js/i.test(l.src) && (n = fi(l), n))
          break;
      }
    }
    n && rt.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  X as A,
  Qn as B,
  $n as C,
  Yn as D,
  $a as E,
  Fi as F,
  ir as G,
  Zn as H,
  rt as I,
  Fn as M,
  mt as P,
  tr as S,
  Ie as T,
  Dn as U,
  Un as W,
  aa as _,
  Li as a,
  Ta as b,
  pt as c,
  V as d,
  En as e,
  Hn as f,
  Bn as g,
  Ln as h,
  _e as i,
  Wn as j,
  he as k,
  Jn as l,
  Gn as m,
  Rn as n,
  Ia as o,
  Xn as p,
  er as q,
  Pn as r,
  qn as s,
  F as t,
  i as u,
  Ha as v,
  On as w,
  Vn as x,
  q as y,
  Kn as z
};
