var ti = Object.defineProperty;
var ii = (t, e, a) => e in t ? ti(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var me = (t, e, a) => ii(t, typeof e != "symbol" ? e + "" : e, a);
var De, q, wt, pe, at, kt, Nt, Fe, ze, _e, Mt, Ze, Oe, Ve, Le = {}, Be = [], ai = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Pe = Array.isArray;
function ce(t, e) {
  for (var a in e) t[a] = e[a];
  return t;
}
function Ge(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function ri(t, e, a) {
  var n, o, r, s = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? o = e[r] : s[r] = e[r];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? De.call(arguments, 2) : a), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) s[r] === void 0 && (s[r] = t.defaultProps[r]);
  return Ce(t, s, n, o, null);
}
function Ce(t, e, a, n, o) {
  var r = { type: t, props: e, key: a, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++wt, __i: -1, __u: 0 };
  return o == null && q.vnode != null && q.vnode(r), r;
}
function oe(t) {
  return t.children;
}
function Ae(t, e) {
  this.props = t, this.context = e;
}
function be(t, e) {
  if (e == null) return t.__ ? be(t.__, t.__i + 1) : null;
  for (var a; e < t.__k.length; e++) if ((a = t.__k[e]) != null && a.__e != null) return a.__e;
  return typeof t.type == "function" ? be(t) : null;
}
function ni(t) {
  if (t.__P && t.__d) {
    var e = t.__v, a = e.__e, n = [], o = [], r = ce({}, e);
    r.__v = e.__v + 1, q.vnode && q.vnode(r), Ye(t.__P, r, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [a] : null, n, a ?? be(e), !!(32 & e.__u), o), r.__v = e.__v, r.__.__k[r.__i] = r, Ct(n, r, o), e.__e = e.__ = null, r.__e != a && It(r);
  }
}
function It(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), It(t);
}
function rt(t) {
  (!t.__d && (t.__d = !0) && pe.push(t) && !Ee.__r++ || at != q.debounceRendering) && ((at = q.debounceRendering) || kt)(Ee);
}
function Ee() {
  try {
    for (var t, e = 1; pe.length; ) pe.length > e && pe.sort(Nt), t = pe.shift(), e = pe.length, ni(t);
  } finally {
    pe.length = Ee.__r = 0;
  }
}
function $t(t, e, a, n, o, r, s, p, u, l, h) {
  var g, c, m, f, y, L, _ = n && n.__k || Be, M = e.length;
  for (u = oi(a, e, _, u, M), g = 0; g < M; g++) (m = a.__k[g]) != null && (c = m.__i != -1 && _[m.__i] || Le, m.__i = g, L = Ye(t, m, c, o, r, s, p, u, l, h), f = m.__e, m.ref && c.ref != m.ref && (c.ref && Qe(c.ref, null, m), h.push(m.ref, m.__c || f, m)), y == null && f != null && (y = f), 4 & m.__u ? (u = St(m, u, t), c.__e && (c.__e = null)) : typeof m.type == "function" && L !== void 0 ? u = L : f && (u = f.nextSibling), m.__u &= -7);
  return a.__e = y, u;
}
function oi(t, e, a, n, o) {
  var r, s, p, u, l, h = a.length, g = h, c = 0;
  for (t.__k = new Array(o), r = 0; r < o; r++) (s = e[r]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[r] = Ce(null, s, null, null, null) : Pe(s) ? s = t.__k[r] = Ce(oe, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[r] = Ce(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[r] = s, u = r + c, s.__ = t, s.__b = t.__b + 1, p = null, (l = s.__i = si(s, a, u, g)) != -1 && (g--, (p = a[l]) && (p.__u |= 2)), p == null || p.__v == null ? (l == -1 && (o > h ? c-- : o < h && c++), typeof s.type != "function" && (s.__u |= 4)) : l != u && (l == u - 1 ? c-- : l == u + 1 ? c++ : (l > u ? c-- : c++, s.__u |= 4))) : t.__k[r] = null;
  if (g) for (r = 0; r < h; r++) (p = a[r]) != null && (2 & p.__u) == 0 && (p.__e == n && (n = be(p)), Tt(p, p));
  return n;
}
function St(t, e, a) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = St(n[o], e, a));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = be(t)), e = a.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function si(t, e, a, n) {
  var o, r, s, p = t.key, u = t.type, l = e[a], h = l != null && (2 & l.__u) == 0;
  if (l === null && p == null || h && p == l.key && u == l.type) return a;
  if (n > (h ? 1 : 0)) {
    for (o = a - 1, r = a + 1; o >= 0 || r < e.length; ) if ((l = e[s = o >= 0 ? o-- : r++]) != null && (2 & l.__u) == 0 && p == l.key && u == l.type) return s;
  }
  return -1;
}
function nt(t, e, a) {
  e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || ai.test(e) ? a : a + "px";
}
function Ie(t, e, a, n, o) {
  var r, s;
  e: if (e == "style") if (typeof a == "string") t.style.cssText = a;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) a && e in a || nt(t.style, e, "");
    if (a) for (e in a) n && a[e] == n[e] || nt(t.style, e, a[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(Mt, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = a, a ? n ? a[_e] = n[_e] : (a[_e] = Ze, t.addEventListener(e, r ? Ve : Oe, r)) : t.removeEventListener(e, r ? Ve : Oe, r);
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
function ot(t) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + t];
      if (e[ze] == null) e[ze] = Ze++;
      else if (e[ze] < a[_e]) return;
      return a(q.event ? q.event(e) : e);
    }
  };
}
function Ye(t, e, a, n, o, r, s, p, u, l) {
  var h, g, c, m, f, y, L, _, M, w, $, d, E, S, F, K, O = e.type;
  if (e.constructor !== void 0) return null;
  128 & a.__u && (u = !!(32 & a.__u), r = [p = e.__e = a.__e]), (h = q.__b) && h(e);
  e: if (typeof O == "function") {
    g = s.length;
    try {
      if (M = e.props, w = O.prototype && O.prototype.render, $ = (h = O.contextType) && n[h.__c], d = h ? $ ? $.props.value : h.__ : n, a.__c ? _ = (c = e.__c = a.__c).__ = c.__E : (w ? e.__c = c = new O(M, d) : (e.__c = c = new Ae(M, d), c.constructor = O, c.render = ci), $ && $.sub(c), c.state || (c.state = {}), c.__n = n, m = c.__d = !0, c.__h = [], c._sb = []), w && c.__s == null && (c.__s = c.state), w && O.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ce({}, c.__s)), ce(c.__s, O.getDerivedStateFromProps(M, c.__s))), f = c.props, y = c.state, c.__v = e, m) w && O.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), w && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (w && O.getDerivedStateFromProps == null && M !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(M, d), e.__v == a.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(M, c.__s, d) === !1) {
          e.__v != a.__v && (c.props = M, c.state = c.__s, c.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.some(function(G) {
            G && (G.__ = e);
          }), Be.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && s.push(c), p = be(a);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(M, c.__s, d), w && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(f, y, L);
        });
      }
      if (c.context = d, c.props = M, c.__P = t, c.__e = !1, E = q.__r, S = 0, w) c.state = c.__s, c.__d = !1, E && E(e), h = c.render(c.props, c.state, c.context), Be.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, E && E(e), h = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++S < 25);
      c.state = c.__s, c.getChildContext != null && (n = ce(ce({}, n), c.getChildContext())), w && !m && c.getSnapshotBeforeUpdate != null && (L = c.getSnapshotBeforeUpdate(f, y)), F = h != null && h.type === oe && h.key == null ? At(h.props.children) : h, p = $t(t, Pe(F) ? F : [F], e, a, n, o, r, s, p, u, l), c.base = e.__e, e.__u &= -161, c.__h.length && s.push(c), _ && (c.__E = c.__ = null);
    } catch (G) {
      if (s.length = g, e.__v = null, u || r != null) {
        if (G.then) {
          for (e.__u |= u ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          r != null && (r[r.indexOf(p)] = null), e.__e = p;
        } else if (r != null) for (K = r.length; K--; ) Ge(r[K]);
      } else e.__e = a.__e;
      e.__k == null && (e.__k = a.__k || []), G.then || zt(e), q.__e(G, e, a);
    }
  } else r == null && e.__v == a.__v ? (e.__k = a.__k, e.__e = a.__e) : p = e.__e = li(a.__e, e, a, n, o, r, s, u, l);
  return (h = q.diffed) && h(e), 128 & e.__u ? void 0 : p;
}
function zt(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(zt));
}
function Ct(t, e, a) {
  for (var n = 0; n < a.length; n++) Qe(a[n], a[++n], a[++n]);
  q.__c && q.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      q.__e(r, o.__v);
    }
  });
}
function At(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Pe(t) ? t.map(At) : t.constructor !== void 0 ? null : ce({}, t);
}
function li(t, e, a, n, o, r, s, p, u) {
  var l, h, g, c, m, f, y, L = a.props || Le, _ = e.props, M = e.type;
  if (M == "svg" ? o = "http://www.w3.org/2000/svg" : M == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (l = 0; l < r.length; l++) if ((m = r[l]) && "setAttribute" in m == !!M && (M ? m.localName == M : m.nodeType == 3)) {
      t = m, r[l] = null;
      break;
    }
  }
  if (t == null) {
    if (M == null) return document.createTextNode(_);
    t = document.createElementNS(o, M, _.is && _), p && (q.__m && q.__m(e, r), p = !1), r = null;
  }
  if (M == null) L === _ || p && t.data == _ || (t.data = _);
  else {
    if (r = M == "textarea" && _.defaultValue != null ? null : r && De.call(t.childNodes), !p && r != null) for (L = {}, l = 0; l < t.attributes.length; l++) L[(m = t.attributes[l]).name] = m.value;
    for (l in L) m = L[l], l == "dangerouslySetInnerHTML" ? g = m : l == "children" || l in _ || l == "value" && "defaultValue" in _ || l == "checked" && "defaultChecked" in _ || Ie(t, l, null, m, o);
    for (l in _) m = _[l], l == "children" ? c = m : l == "dangerouslySetInnerHTML" ? h = m : l == "value" ? f = m : l == "checked" ? y = m : p && typeof m != "function" || L[l] === m || Ie(t, l, m, L[l], o);
    if (h) p || g && (h.__html == g.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (g && (t.innerHTML = ""), $t(e.type == "template" ? t.content : t, Pe(c) ? c : [c], e, a, n, M == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, s, r ? r[0] : a.__k && be(a, 0), p, u), r != null) for (l = r.length; l--; ) Ge(r[l]);
    p && M != "textarea" || (l = "value", M == "progress" && f == null ? t.removeAttribute("value") : f != null && (f !== t[l] || M == "progress" && !f || M == "option" && f != L[l]) && Ie(t, l, f, L[l], o), l = "checked", y != null && y != t[l] && Ie(t, l, y, L[l], o));
  }
  return t;
}
function Qe(t, e, a) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    q.__e(o, a);
  }
}
function Tt(t, e, a) {
  var n, o;
  if (q.unmount && q.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || Qe(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      q.__e(r, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && Tt(n[o], e, a || typeof t.type != "function");
  a || Ge(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ci(t, e, a) {
  return this.constructor(t, a);
}
function st(t, e, a) {
  var n, o, r, s;
  e == document && (e = document.documentElement), q.__ && q.__(t, e), o = (n = !1) ? null : e.__k, r = [], s = [], Ye(e, t = e.__k = ri(oe, null, [t]), o || Le, Le, e.namespaceURI, o ? null : e.firstChild ? De.call(e.childNodes) : null, r, o ? o.__e : e.firstChild, n, s), Ct(r, t, s), t.props.children = null;
}
De = Be.slice, q = { __e: function(t, e, a, n) {
  for (var o, r, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), s = o.__d), s) return o.__E = o;
  } catch (p) {
    t = p;
  }
  throw t;
} }, wt = 0, Ae.prototype.setState = function(t, e) {
  var a;
  a = this.__s != null && this.__s != this.state ? this.__s : this.__s = ce({}, this.state), typeof t == "function" && (t = t(ce({}, a), this.props)), t && ce(a, t), t != null && this.__v && (e && this._sb.push(e), rt(this));
}, Ae.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), rt(this));
}, Ae.prototype.render = oe, pe = [], kt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Nt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Ee.__r = 0, Fe = Math.random().toString(8), ze = "__d" + Fe, _e = "__a" + Fe, Mt = /(PointerCapture)$|Capture$/i, Ze = 0, Oe = ot(!1), Ve = ot(!0);
var di = 0;
function i(t, e, a, n, o, r) {
  e || (e = {});
  var s, p, u = e;
  if ("ref" in u) for (p in u = {}, e) p == "ref" ? s = e[p] : u[p] = e[p];
  var l = { type: t, props: u, key: a, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --di, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof t == "function" && (s = t.defaultProps)) for (p in s) u[p] === void 0 && (u[p] = s[p]);
  return q.vnode && q.vnode(l), l;
}
var ke, te, Re, lt, Ne = 0, Lt = [], ie = q, ct = ie.__b, dt = ie.__r, pt = ie.diffed, ut = ie.__c, ht = ie.unmount, ft = ie.__;
function Je(t, e) {
  ie.__h && ie.__h(te, t, Ne || e), Ne = 0;
  var a = te.__H || (te.__H = { __: [], __h: [] });
  return t >= a.__.length && a.__.push({}), a.__[t];
}
function D(t) {
  return Ne = 1, pi(Et, t);
}
function pi(t, e, a) {
  var n = Je(ke++, 2);
  if (n.t = t, !n.__c && (n.__ = [Et(void 0, e), function(p) {
    var u = n.__N ? n.__N[0] : n.__[0], l = n.t(u, p);
    u !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = te, !te.__f)) {
    var o = function(p, u, l) {
      if (!n.__c.__H) return !0;
      var h = !1, g = n.__c.props !== p;
      if (n.__c.__H.__.some(function(m) {
        if (m.__N) {
          h = !0;
          var f = m.__[0];
          m.__ = m.__N, m.__N = void 0, f !== m.__[0] && (g = !0);
        }
      }), r) {
        var c = r.call(this, p, u, l);
        return h ? c || g : c;
      }
      return !h || g;
    };
    te.__f = !0;
    var r = te.shouldComponentUpdate, s = te.componentWillUpdate;
    te.componentWillUpdate = function(p, u, l) {
      if (this.__e) {
        var h = r;
        r = void 0, o(p, u, l), r = h;
      }
      s && s.call(this, p, u, l);
    }, te.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function ae(t, e) {
  var a = Je(ke++, 3);
  !ie.__s && Bt(a.__H, e) && (a.__ = t, a.u = e, te.__H.__h.push(a));
}
function ee(t) {
  return Ne = 5, ue(function() {
    return { current: t };
  }, []);
}
function ue(t, e) {
  var a = Je(ke++, 7);
  return Bt(a.__H, e) && (a.__ = t(), a.__H = e, a.__h = t), a.__;
}
function Y(t, e) {
  return Ne = 8, ue(function() {
    return t;
  }, e);
}
function ui() {
  for (var t; t = Lt.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Te), e.__h.some(qe), e.__h = [];
    } catch (a) {
      e.__h = [], ie.__e(a, t.__v);
    }
  }
}
ie.__b = function(t) {
  te = null, ct && ct(t);
}, ie.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ft && ft(t, e);
}, ie.__r = function(t) {
  dt && dt(t), ke = 0;
  var e = (te = t.__c).__H;
  e && (Re === te ? (e.__h = [], te.__h = [], e.__.some(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (e.__h.some(Te), e.__h.some(qe), e.__h = [], ke = 0)), Re = te;
}, ie.diffed = function(t) {
  pt && pt(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Lt.push(e) !== 1 && lt === ie.requestAnimationFrame || ((lt = ie.requestAnimationFrame) || hi)(ui)), e.__H.__.some(function(a) {
    a.u && (a.__H = a.u, a.u = void 0);
  })), Re = te = null;
}, ie.__c = function(t, e) {
  e.some(function(a) {
    try {
      a.__h.some(Te), a.__h = a.__h.filter(function(n) {
        return !n.__ || qe(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], ie.__e(n, a.__v);
    }
  }), ut && ut(t, e);
}, ie.unmount = function(t) {
  ht && ht(t);
  var e, a = t.__c;
  a && a.__H && (a.__H.__.some(function(n) {
    try {
      Te(n);
    } catch (o) {
      e = o;
    }
  }), a.__H = void 0, e && ie.__e(e, a.__v));
};
var mt = typeof requestAnimationFrame == "function";
function hi(t) {
  var e, a = function() {
    clearTimeout(n), mt && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(a, 35);
  mt && (e = requestAnimationFrame(a));
}
function Te(t) {
  var e = te, a = t.__c;
  typeof a == "function" && (t.__c = void 0, a()), te = e;
}
function qe(t) {
  var e = te;
  t.__c = t.__(), te = e;
}
function Bt(t, e) {
  return !t || t.length !== e.length || e.some(function(a, n) {
    return a !== t[n];
  });
}
function Et(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function fi(t, e) {
  const a = t.body;
  if (!a)
    throw new Error("Response body is null");
  const n = a.getReader(), o = new TextDecoder("utf-8");
  let r = "";
  try {
    for (; ; ) {
      const { done: s, value: p } = await n.read();
      if (s)
        break;
      r += o.decode(p, { stream: !0 });
      const u = r.split(/\r?\n/);
      r = u.pop() || "";
      for (const l of u) {
        const h = l.trim();
        if (!(!h || h.startsWith(":")) && h.startsWith("data:")) {
          const g = h.slice(5).trim();
          if (g === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const c = JSON.parse(g);
            typeof c == "string" ? e.onChunk(c) : c && typeof c == "object" && ((c.chunk || c.token || c.content || c.text) && e.onChunk(c.chunk || c.token || c.content || c.text), c.sources && Array.isArray(c.sources) && e.onSources && e.onSources(c.sources), c.suggestedQuestions && Array.isArray(c.suggestedQuestions) && e.onSuggestedQuestions && e.onSuggestedQuestions(c.suggestedQuestions), e.onConversationId && (c.conversation_id !== void 0 || c.conversationId !== void 0) && e.onConversationId(
              c.conversation_id ?? c.conversationId
            ), e.onActionTrigger && c.triggered_action && typeof c.triggered_action == "object" && e.onActionTrigger(c.triggered_action));
          } catch {
            e.onChunk(g);
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
class Dt extends Error {
  constructor(a, n = 60, o) {
    super(a);
    me(this, "retryAfterSeconds");
    me(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = o;
  }
}
class Pt extends Error {
  constructor(a, n, o, r) {
    super(a);
    me(this, "status");
    me(this, "code");
    me(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = o, this.retryAfterSeconds = r;
  }
}
function mi(t, e) {
  const a = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : e;
}
async function gi(t, e) {
  const a = await t.json().catch(() => null);
  Ft(t.status, a, e, t.headers.get("Retry-After"));
}
function Ft(t, e, a, n) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, r = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || a, s = mi((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new Dt(r, s, o) : new Pt(r, t, o, s);
}
function Rt(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function Xe(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function bi(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return Xe(e.of(t));
  } catch {
    return null;
  }
}
function xi() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const n = JSON.parse(a);
        t = Rt(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = Xe(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = bi(t)), { code: t, name: e };
}
const ji = [
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
], gt = [
  "Razumijem vaše pitanje! Naš AI asistent kontinuirano uči iz baze znanja kako bi vam pružio najtačniji odgovor.",
  "Odlično pitanje. Provjerio sam našu bazu znanja i evo preporučenih informacija za vaš upit.",
  "Drago mi je što mogu pomoći! Ako vam je potrebno detaljnije pojašnjenje ili kontakt sa timom, slobodno javite."
];
async function vi(t, e) {
  const a = t.toLowerCase(), n = ji.find(
    (u) => u.keywords.some((l) => a.includes(l))
  ), o = n ? n.reply : `${gt[Math.floor(Math.random() * gt.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, r = n ? n.sources : [], s = n ? n.suggestions : ["Kako funkcionira AI model?", "Mogu li dobiti kontakt podrške?"], p = o.split(" ");
  for (let u = 0; u < p.length; u++) {
    const l = p[u] + (u < p.length - 1 ? " " : "");
    e.onChunk(l), await new Promise((h) => setTimeout(h, 20 + Math.random() * 20));
  }
  e.onSources && r.length > 0 && e.onSources(r), e.onSuggestedQuestions && s.length > 0 && e.onSuggestedQuestions(s), e.onDone && e.onDone();
}
async function yi(t) {
  const {
    companyId: e,
    conversationId: a,
    visitorId: n,
    message: o,
    forceNewConversation: r,
    apiUrl: s,
    mockMode: p,
    visitorName: u,
    visitorEmail: l,
    visitorPhone: h,
    visitorCountryCode: g,
    visitorCountryName: c,
    callbacks: m
  } = t;
  if (p || !e || e === "default") {
    await vi(o, m);
    return;
  }
  const f = (s || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), y = xi(), L = Rt(g) ?? y.code ?? void 0, _ = Xe(c) ?? y.name ?? void 0, M = `${f}/api/widget/${e}/chat`, w = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, $ = await fetch(M, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: w,
      force_new_conversation: r === !0,
      visitor_id: n,
      visitor_name: u || void 0,
      visitor_email: l || void 0,
      visitor_phone: h || void 0,
      visitor_country_code: L,
      visitor_country_name: _
    })
  });
  if ($.ok || await gi($, `API greška (${$.status})`), ($.headers.get("Content-Type") || "").includes("text/event-stream"))
    await fi($, m);
  else {
    const E = await $.json(), S = E.answer || E.message || "";
    if (E.conversation_id !== void 0 && m.onConversationId && m.onConversationId(E.conversation_id), E.triggered_action && m.onActionTrigger && m.onActionTrigger(E.triggered_action), S && S.trim()) {
      const F = S.split(" ");
      for (let K = 0; K < F.length; K++) {
        const O = F[K] + (K < F.length - 1 ? " " : "");
        m.onChunk(O), await new Promise((G) => setTimeout(G, 15));
      }
    }
    m.onDone && m.onDone();
  }
}
async function _i(t, e, a, n, o) {
  const r = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !r)
    return await new Promise((u) => setTimeout(u, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const s = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), p = await fetch(`${s}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!p.ok) {
    const u = await p.json().catch(() => ({}));
    throw new Error(u.error || `Rating failed (${p.status})`);
  }
  return await p.json();
}
const bt = "pitaj_io_visitor_id", wi = "chat_direkt_visitor_id", ki = "pitaj_io_visitor_meta", Ni = "chat_direkt_visitor_meta";
function Ut(t) {
  return `pitaj_io_convs_${t}`;
}
function Mi(t) {
  return `chat_direkt_convs_${t}`;
}
function Ii() {
  try {
    let t = localStorage.getItem(bt) || localStorage.getItem(wi);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(bt, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const $i = [];
function Si(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function zi(t) {
  return t.filter((e) => !Si(e));
}
function xt(t) {
  try {
    const e = localStorage.getItem(Ut(t)) || localStorage.getItem(Mi(t));
    if (e) {
      const a = JSON.parse(e);
      if (Array.isArray(a))
        return zi(a);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return $i;
}
function Ci(t, e) {
  try {
    localStorage.setItem(Ut(t), JSON.stringify(e));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function Ai(t, e) {
  const [a, n] = D(t), [o, r] = D((e == null ? void 0 : e.startOpen) ?? !1), [s, p] = D((e == null ? void 0 : e.initialScreen) ?? "new-conversation"), [u, l] = D(
    () => xt(t.companyId)
  ), [h, g] = D(() => {
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const b = xt(t.companyId);
      return b.length > 0 ? b[0].id : null;
    }
    return null;
  }), [c, m] = D(!1), [f, y] = D(null), [L, _] = D(null), M = ee(Ii()), [w, $] = D(() => {
    try {
      const b = localStorage.getItem(ki) || localStorage.getItem(Ni);
      if (b) {
        const v = JSON.parse(b), A = {};
        return typeof v.name == "string" && (A.name = v.name), typeof v.email == "string" && (A.email = v.email), typeof v.phone == "string" && (A.phone = v.phone), A;
      }
    } catch (b) {
      console.warn("[Pitaj.io] Error reading visitor meta", b);
    }
    return {};
  }), d = ee(e == null ? void 0 : e.emitEvent);
  d.current = e == null ? void 0 : e.emitEvent;
  const E = ee(e == null ? void 0 : e.onActionTrigger);
  E.current = e == null ? void 0 : e.onActionTrigger;
  const S = Y((b, v) => {
    const A = Number.isFinite(b) ? Math.max(1, Math.floor(b)) : 60;
    y((H) => H === null ? A : Math.max(H, A)), _(v || `Previše zahtjeva. Molimo sačekajte ${A}s.`);
  }, []), F = Y((b) => {
    if (b) {
      if (b === "WIDGET_CHAT_DISABLED") {
        n((v) => ({ ...v, chatAvailable: !1 })), _("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (b === "WIDGET_TRANSCRIBE_DISABLED") {
        n((v) => ({ ...v, transcribeAvailable: !1 })), _("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      b === "WIDGET_FORMS_DISABLED" && (n((v) => ({ ...v, formsAvailable: !1, formsEnabled: !1 })), _("Forme su trenutno privremeno nedostupne."));
    }
  }, []), K = Y((b, v = "Greška pri obradi zahtjeva.") => {
    var H, U, T, x;
    if (b instanceof Dt) {
      S(b.retryAfterSeconds, b.message), (H = d.current) == null || H.call(d, "error_occurred", { code: b.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (b instanceof Pt) {
      if (b.code === "COUNTRY_BLOCKED") {
        n((B) => ({ ...B, chatAvailable: !1 })), _(b.message || "Pristup nije dozvoljen u vašoj regiji."), (U = d.current) == null || U.call(d, "error_occurred", { status: b.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      F(b.code), _(b.message || v), (T = d.current) == null || T.call(d, "error_occurred", { status: b.status, code: b.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    const A = b instanceof Error ? b.message : v;
    _(A || v), (x = d.current) == null || x.call(d, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [S, F]);
  ae(() => {
    Ci(a.companyId, u);
  }, [u, a.companyId]), ae(() => {
    if (f === null || f <= 0) return;
    const b = setInterval(() => {
      y((v) => v && v > 1 ? v - 1 : null);
    }, 1e3);
    return () => clearInterval(b);
  }, [f]);
  const O = u.find((b) => b.id === h) || null, G = u.reduce((b, v) => b + (v.unread || 0), 0), R = Y((b) => {
    r((v) => {
      var A;
      return v === b ? v : ((A = d.current) == null || A.call(d, b ? "widget_opened" : "widget_closed"), b);
    });
  }, []), X = Y((b) => {
    p((v) => {
      var A;
      return v === b ? v : ((A = d.current) == null || A.call(d, "screen_changed", { screen: b }), b);
    });
  }, []), re = Y((b) => {
    var v;
    g(b.id), l(
      (A) => A.map((H) => H.id === b.id ? { ...H, unread: 0, status: "active" } : H)
    ), p("conversation"), (v = d.current) == null || v.call(d, "conversation_selected", { conversationId: b.id });
  }, []), Z = Y(() => {
    var b;
    l(
      (v) => v.map((A) => A.id === h ? { ...A, status: "ended" } : A)
    ), g(null), p("new-conversation"), (b = d.current) == null || b.call(d, "conversation_ended", { conversationId: h });
  }, [h]), Q = Y((b) => {
    l((v) => v.filter((A) => A.id !== b)), g((v) => v === b ? null : v), h === b && p("new-conversation");
  }, [h]), k = Y((b) => {
    var T;
    if (a.chatAvailable === !1) {
      _("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (f !== null) {
      _(`Previše zahtjeva. Molimo sačekajte ${f}s.`);
      return;
    }
    const v = "conv-" + Date.now(), A = (/* @__PURE__ */ new Date()).toISOString(), H = b ? b.length > 40 ? b.slice(0, 40) + "…" : b : "Novo ćaskanje", U = {
      id: v,
      title: H,
      preview: b || "Započeto novo ćaskanje",
      timestamp: A,
      unread: 0,
      messages: b ? [
        {
          id: "msg-" + Date.now(),
          content: b,
          sender: "user",
          timestamp: A,
          status: "sent"
        }
      ] : []
    };
    l((x) => [U, ...x]), g(v), p("conversation"), (T = d.current) == null || T.call(d, "conversation_started", { conversationId: v, initialMessage: b }), b && C(v, b, [U.messages[0]], !0);
  }, [a.apiUrl, a.chatAvailable, a.companyId, a.mockMode, f, w]), C = async (b, v, A, H = !1) => {
    var x;
    m(!0), _(null);
    const U = "ai-msg-" + Date.now(), T = {
      id: U,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    l(
      (B) => B.map((N) => N.id !== b ? N : {
        ...N,
        preview: v,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...N.messages.filter((I) => I.id !== U), T]
      })
    ), (x = d.current) == null || x.call(d, "stream_started", { conversationId: b });
    try {
      await yi({
        companyId: a.companyId,
        conversationId: b,
        visitorId: M.current,
        message: v,
        forceNewConversation: H || b.startsWith("conv-"),
        apiUrl: a.apiUrl,
        mockMode: a.mockMode,
        visitorName: w.name,
        visitorEmail: w.email,
        visitorPhone: w.phone,
        callbacks: {
          onConversationId: (B) => {
            const N = b, I = String(B);
            b = I, g(I), l(
              (ne) => ne.map((P) => P.id === N || P.messages.some((se) => se.id === U) ? { ...P, id: I } : P)
            );
          },
          onActionTrigger: (B) => {
            var I;
            const N = B.widget || B.triggered_widget || (B.widget_id && a.widgets ? a.widgets.find((ne) => ne.id === B.widget_id) : null) || null;
            N && l(
              (ne) => ne.map((P) => P.id === b || P.messages.some((le) => le.id === U) ? {
                ...P,
                messages: P.messages.map(
                  (le) => le.id === U ? { ...le, widget: N } : le
                )
              } : P)
            ), (I = E.current) == null || I.call(E, B);
          },
          onChunk: (B) => {
            l(
              (N) => N.map((I) => I.id === b || I.messages.some((P) => P.id === U) ? {
                ...I,
                messages: I.messages.map(
                  (P) => P.id === U ? { ...P, content: P.content + B } : P
                )
              } : I)
            );
          },
          onSources: (B) => {
            l(
              (N) => N.map((I) => I.id === b || I.messages.some((P) => P.id === U) ? {
                ...I,
                messages: I.messages.map(
                  (P) => P.id === U ? { ...P, sources: B } : P
                )
              } : I)
            );
          },
          onSuggestedQuestions: (B) => {
            l(
              (N) => N.map((I) => I.id === b || I.messages.some((P) => P.id === U) ? {
                ...I,
                messages: I.messages.map(
                  (P) => P.id === U ? { ...P, suggestedQuestions: B } : P
                )
              } : I)
            );
          },
          onDone: () => {
            var B;
            l(
              (N) => N.map((I) => {
                var tt, it;
                if (!(I.id === b || I.messages.some((fe) => fe.id === U))) return I;
                const P = I.messages.find((fe) => fe.id === U), se = (tt = P == null ? void 0 : P.widget) == null ? void 0 : tt.name, le = (it = P == null ? void 0 : P.content) == null ? void 0 : it.trim(), Me = le ? le.slice(0, 70) : se ? `[${se}]` : I.preview;
                return {
                  ...I,
                  preview: Me,
                  messages: I.messages.map(
                    (fe) => fe.id === U ? { ...fe, isStreaming: !1 } : fe
                  )
                };
              })
            ), m(!1), (B = d.current) == null || B.call(d, "stream_completed", { conversationId: b });
          },
          onError: (B) => {
            console.error("[Pitaj.io] Stream error:", B), _(B.message || "Došlo je do greške u komunikaciji."), m(!1);
          }
        }
      });
    } catch (B) {
      m(!1), K(B, "Greška pri slanju poruke.");
    }
  }, V = Y((b) => {
    var U;
    const v = b.trim();
    if (!v || c || a.chatAvailable === !1 || f !== null) return;
    if (!h) {
      k(v);
      return;
    }
    const H = {
      id: "usr-msg-" + Date.now(),
      content: v,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    l(
      (T) => T.map((x) => x.id !== h ? x : {
        ...x,
        preview: v,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...x.messages, H]
      })
    ), (U = d.current) == null || U.call(d, "message_sent", { conversationId: h, content: v }), C(h, v, O ? O.messages : []);
  }, [h, c, k, O, a.chatAvailable, a.companyId, a.apiUrl, a.mockMode, f]), j = Y(
    async (b, v) => {
      var A;
      if (!a.mockMode)
        try {
          await _i(
            a.companyId,
            b,
            v,
            a.apiUrl,
            a.mockMode
          );
        } catch (H) {
          console.error("[Pitaj.io] Failed to submit rating:", H), _(H.message || "Greška pri slanju ocijene.");
          return;
        }
      l(
        (H) => H.map(
          (U) => U.id === b ? { ...U, satisfaction: v } : U
        )
      ), (A = d.current) == null || A.call(d, "rating_submitted", {
        conversationId: b,
        satisfaction: v
      });
    },
    [a.companyId, a.apiUrl, a.mockMode]
  ), z = Y(
    (b, v, A = "user") => {
      const H = v.trim();
      if (!H) return;
      const U = (/* @__PURE__ */ new Date()).toISOString(), T = `conv-${Date.now()}`, x = typeof b == "string" && b.trim().length > 0 ? b : T, B = {
        id: `local-${A}-msg-${Date.now()}`,
        content: H,
        sender: A,
        timestamp: U,
        status: "sent"
      };
      l(
        (N) => N.some((I) => I.id === x) ? N.map((I) => I.id !== x ? I : {
          ...I,
          preview: H.length > 70 ? `${H.slice(0, 70)}…` : H,
          timestamp: U,
          messages: [...I.messages, B]
        }) : [
          {
            id: x,
            title: "Forma",
            preview: H.length > 70 ? `${H.slice(0, 70)}…` : H,
            timestamp: U,
            unread: 0,
            messages: [B],
            status: "active"
          },
          ...N
        ]
      ), g(x), p("conversation");
    },
    []
  ), W = (b) => {
    var v;
    return !!((v = b.messages) != null && v.some((A) => A.sender === "ai"));
  };
  return {
    config: a,
    setConfig: n,
    isOpen: o,
    setIsOpen: R,
    screen: s,
    setScreen: X,
    conversations: u,
    activeConversation: O,
    activeConversationId: h,
    visitorContact: w,
    visitorId: M.current,
    activeConversationHasReply: O ? W(O) : !1,
    totalUnread: G,
    isStreaming: c,
    rateLimitTimer: f,
    errorBanner: L,
    setErrorBanner: _,
    selectConversation: re,
    startNewConversation: k,
    endConversation: Z,
    deleteConversation: Q,
    sendUserMessage: V,
    submitSatisfaction: j,
    appendConversationMessage: z,
    handleApiError: K
  };
}
let Ue = null, Ht = null;
function jt(t, e) {
  e === null && t !== null && Ue !== null && Ue !== t || (Ue = e ? t : null, Ht = e);
}
function de() {
  return Ht;
}
function Ot(t, e) {
  let a = null;
  const n = () => a || (a = t().then((o) => {
    const r = e ? e(o) : o.default;
    if (!r)
      throw new Error("Lazy component not found");
    return r;
  }));
  return function(r) {
    const [s, p] = D(null);
    return ae(() => {
      let u = !0;
      return n().then((l) => {
        u && p(() => l);
      }).catch((l) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", l);
      }), () => {
        u = !1;
      };
    }, []), s ? /* @__PURE__ */ i(s, { ...r }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function Ti({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ i("path", { d: "M5 3v4" }),
    /* @__PURE__ */ i("path", { d: "M19 17v4" }),
    /* @__PURE__ */ i("path", { d: "M3 5h4" }),
    /* @__PURE__ */ i("path", { d: "M17 19h4" })
  ] });
}
function Vt({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m22 2-7 20-4-9-9-4Z" }),
    /* @__PURE__ */ i("path", { d: "M22 2 11 13" })
  ] });
}
function Li({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ i("path", { d: "M19 12H5" })
  ] });
}
function he({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ i("path", { d: "m6 6 12 12" })
  ] });
}
function Bi({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function ir({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function xe({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function Ei({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function Di({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function qt({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function Pi({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function Fi({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function Ri({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function Ui({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function Kt({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function Wt({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { x: "9", y: "2", width: "6", height: "12", rx: "3" }),
    /* @__PURE__ */ i("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ i("path", { d: "M12 19v3" }),
    /* @__PURE__ */ i("path", { d: "M8 22h8" })
  ] });
}
function Hi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: /* @__PURE__ */ i("path", { d: "M8 8h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Zm-3 7H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1h-2V4H4v9h1v2Z" }) });
}
function Oi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: /* @__PURE__ */ i("path", { d: "M3 10h4v11H3V10Zm6 11h8.5a2 2 0 0 0 1.96-1.61l1.18-6A2 2 0 0 0 18.68 11H14V6.5A2.5 2.5 0 0 0 11.5 4L9 8v13Z" }) });
}
function Vi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: /* @__PURE__ */ i("path", { d: "M17 14h4V3h-4v11ZM15 3H6.5a2 2 0 0 0-1.96 1.61l-1.18 6A2 2 0 0 0 5.32 13H10v4.5A2.5 2.5 0 0 0 12.5 20L15 16V3Z" }) });
}
function Zt({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function qi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function ar({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function rr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function nr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function or({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function sr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) });
}
function Ki({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function Wi({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function Zi({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function Gi({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function Yi({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function Qi({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function Ji({ size: t = 14, className: e = "" }) {
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
function Xi({ size: t = 14, className: e = "" }) {
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
function ea({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function ta({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function ia({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function aa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function ra({ size: t = 24, className: e = "" }) {
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
function na({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function oa({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function sa({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function la({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ i("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function we({ size: t = 13, className: e = "" }) {
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
function ca({
  screen: t,
  activeConversation: e,
  config: a,
  onBack: n,
  onClose: o,
  onNewConversation: r,
  onEndConversation: s,
  onDeleteConversation: p,
  onViewHistory: u,
  onViewTickets: l
}) {
  var w;
  const [h, g] = D(!1), c = ee(null), m = t === "conversation" && e, L = m || t === "history" || t === "tickets", _ = a.title || a.name || "Pitaj.io AI Agent";
  ae(() => {
    var E;
    const $ = (S) => {
      var K, O;
      const F = ((O = (K = S.composedPath) == null ? void 0 : K.call(S)) == null ? void 0 : O[0]) || S.target;
      c.current && F && !c.current.contains(F) && g(!1);
    };
    document.addEventListener("mousedown", $);
    const d = (E = c.current) == null ? void 0 : E.getRootNode();
    return d instanceof ShadowRoot && d.addEventListener("mousedown", $), () => {
      document.removeEventListener("mousedown", $), d instanceof ShadowRoot && d.removeEventListener("mousedown", $);
    };
  }, []), ae(() => {
    g(!1);
  }, [t]);
  const M = ($) => {
    g(!1), $ == null || $();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      L && /* @__PURE__ */ i(
        "button",
        {
          onClick: n,
          className: "pitaj-icon-btn",
          "aria-label": "Nazad",
          title: "Nazad",
          children: /* @__PURE__ */ i(Li, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((w = a.content) == null ? void 0 : w.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(we, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: _ }) })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: c, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => g(($) => !$),
            className: `pitaj-icon-btn ${h ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": h,
            title: "Meni",
            children: /* @__PURE__ */ i(Ei, { size: 18 })
          }
        ),
        h && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => M(r),
              children: [
                /* @__PURE__ */ i(Di, { size: 15, className: "pitaj-menu-item-icon" }),
                "Nova konverzacija"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !m,
              onClick: () => M(s),
              children: [
                /* @__PURE__ */ i(Fi, { size: 15, className: "pitaj-menu-item-icon" }),
                "Završi konverzaciju"
              ]
            }
          ),
          p && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !m,
              onClick: () => M(p),
              children: [
                /* @__PURE__ */ i(Ki, { size: 15, className: "pitaj-menu-item-icon" }),
                "Obriši konverzaciju"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => M(u),
              children: [
                /* @__PURE__ */ i(Ri, { size: 15, className: "pitaj-menu-item-icon" }),
                "Pogledaj prethodne"
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => M(l), children: [
            /* @__PURE__ */ i(Kt, { size: 15, className: "pitaj-menu-item-icon" }),
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
          children: /* @__PURE__ */ i(he, { size: 18 })
        }
      )
    ] })
  ] });
}
function da({ content: t }) {
  if (!t)
    return /* @__PURE__ */ i("span", {});
  const e = t.split(`
`), a = [];
  let n = !1, o = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (s.startsWith("```")) {
      n ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, `code-${r}`)
      ), o = [], n = !1) : n = !0;
      continue;
    }
    if (n) {
      o.push(s);
      continue;
    }
    if (s.trim().startsWith("- ") || s.trim().startsWith("* ")) {
      const u = s.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: He(u) }) }, `ul-${r}`)
      );
      continue;
    }
    const p = s.trim().match(/^(\d+)\.\s+(.*)/);
    if (p) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(p[1], 10), children: /* @__PURE__ */ i("li", { children: He(p[2]) }) }, `ol-${r}`)
      );
      continue;
    }
    if (!s.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${r}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: He(s) }, `p-${r}`));
  }
  return n && o.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function He(t) {
  const e = [];
  let a = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index > a && e.push(...vt(t.slice(a, o.index)));
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
      const s = r.slice(1, r.indexOf("](")), p = r.slice(r.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ i("a", { href: p, target: "_blank", rel: "noopener noreferrer", children: s }, `a-${o.index}`)
      );
    }
    a = o.index + r.length;
  }
  return a < t.length && e.push(...vt(t.slice(a))), e;
}
const pa = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, ua = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, ha = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), fa = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function vt(t) {
  const e = [];
  let a;
  for (; (a = pa.exec(t)) !== null; ) {
    const r = a[0].replace(/[.,;:!?]+$/, "");
    r && e.push({
      start: a.index,
      end: a.index + r.length,
      href: r.startsWith("www.") ? `https://${r}` : r,
      external: !0
    });
  }
  for (; (a = ua.exec(t)) !== null; )
    e.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = ha.exec(t)) !== null; ) {
    const r = a[0];
    fa.test(r) || e.push({
      start: a.index,
      end: a.index + r.length,
      href: `tel:${r.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((r, s) => r.start - s.start);
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
function Ke(t) {
  return (t || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function ma(t) {
  const e = Ke(t).toLowerCase();
  return e.includes("wi-fi") || e.includes("wifi") || e.includes("internet") ? Wi : e.includes("doručak") || e.includes("dorucak") || e.includes("kafa") || e.includes("coffee") ? Zi : e.includes("restoran") || e.includes("hrana") || e.includes("dining") ? Gi : e.includes("parking") || e.includes("garaža") || e.includes("garaza") || e.includes("auto") ? Yi : e.includes("spa") || e.includes("bazen") || e.includes("wellness") ? Qi : e.includes("klima") || e.includes("hlađenje") || e.includes("hladjenje") ? Ji : e.includes("teretana") || e.includes("fitness") || e.includes("gym") ? Xi : ea;
}
function ga({ widget: t, onAction: e }) {
  const a = t.type || "custom_html", n = t.config || {};
  if (n.jsx_template || a === "dynamic_jsx" || a === "ai_builder")
    return /* @__PURE__ */ i(Ia, { config: n, onAction: e });
  switch (a) {
    case "book_demo":
      return /* @__PURE__ */ i(ba, { config: n, onAction: e });
    case "products":
      return /* @__PURE__ */ i(xa, { config: n, onAction: e });
    case "cart":
      return /* @__PURE__ */ i(ja, { config: n, onAction: e });
    case "usage_chart":
      return /* @__PURE__ */ i(va, { config: n });
    case "upcoming_classes":
      return /* @__PURE__ */ i(ya, { config: n, onAction: e });
    case "hotel_booking":
      return /* @__PURE__ */ i(_a, { config: n, onAction: e });
    case "contact":
      return /* @__PURE__ */ i(wa, { config: n, onAction: e });
    case "weather":
      return /* @__PURE__ */ i(ka, { config: n });
    case "custom_iframe":
      return /* @__PURE__ */ i(Na, { config: n, title: t.name });
    case "custom_html":
    default:
      return /* @__PURE__ */ i(Ma, { config: n, onAction: e });
  }
}
function et({
  fields: t,
  values: e,
  onChange: a
}) {
  return /* @__PURE__ */ i(oe, { children: t.map((n, o) => {
    const r = e[n.key] ?? (n.type === "checkbox" ? !1 : ""), s = n.key || `field_${o}`;
    if (n.type === "textarea")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ i("label", { children: [
          n.label,
          " ",
          n.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            required: n.required,
            rows: 3,
            placeholder: n.placeholder || "",
            value: r,
            onInput: (l) => a(s, l.target.value)
          }
        )
      ] }, s);
    if (n.type === "checkbox")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ i(
          "input",
          {
            id: `widget-chk-${s}-${o}`,
            type: "checkbox",
            required: n.required,
            checked: !!r,
            onChange: (l) => a(s, l.target.checked)
          }
        ),
        /* @__PURE__ */ i("label", { htmlFor: `widget-chk-${s}-${o}`, children: [
          n.label,
          " ",
          n.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, s);
    if (n.type === "select")
      return /* @__PURE__ */ i("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ i("label", { children: [
          n.label,
          " ",
          n.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ i(
          "select",
          {
            required: n.required,
            value: r,
            onChange: (l) => a(s, l.target.value),
            children: [
              /* @__PURE__ */ i("option", { value: "", children: n.placeholder || "Odaberite..." }),
              (n.options || []).map((l, h) => /* @__PURE__ */ i("option", { value: l, children: l }, h))
            ]
          }
        )
      ] }, s);
    const p = n.type === "phone" ? "tel" : n.type === "email" ? "email" : n.type === "date" ? "date" : n.type === "number" ? "number" : "text";
    let u;
    if (n.type === "date") {
      const l = s.toLowerCase();
      if (l.includes("out") || l.includes("odjav") || l.includes("end") || l.includes("do")) {
        const h = e.check_in || e.start || e.od;
        h && typeof h == "string" && (u = h);
      }
    }
    return /* @__PURE__ */ i("div", { className: "pitaj-widget-field", children: [
      /* @__PURE__ */ i("label", { children: [
        n.label,
        " ",
        n.required && /* @__PURE__ */ i("span", { style: { color: "#ef4444" }, children: "*" })
      ] }),
      /* @__PURE__ */ i(
        "input",
        {
          type: p,
          required: n.required,
          placeholder: n.placeholder || "",
          min: u,
          value: r,
          onInput: (l) => a(s, l.target.value)
        }
      )
    ] }, s);
  }) });
}
function ba({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], n = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, r] = D({}), [s, p] = D(!1), u = t.title || "Razgovarajte sa prodajom", l = t.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.", h = (c, m) => {
    r((f) => ({ ...f, [c]: m }));
  }, g = (c) => {
    c.preventDefault();
    for (const f of n)
      if (f.required) {
        const y = o[f.key];
        if (f.type === "checkbox" && !y || f.type !== "checkbox" && (!y || !String(y).trim())) return;
      }
    p(!0);
    const m = n.filter((f) => o[f.key] !== void 0 && o[f.key] !== "").map((f) => `- ${f.label}: ${f.type === "checkbox" ? "Da" : o[f.key]}`);
    e == null || e(`Forma: ${u}
${m.join(`
`)}`);
  };
  if (s) {
    const c = o.email ? ` na ${o.email}` : "";
    return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(xe, { size: 20 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za demo je poslan!" }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
        "Naš tim će vas kontaktirati u najkraćem roku",
        c,
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: u }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: l })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: g, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(et, { fields: n, values: o, onChange: h }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function xa({ config: t, onAction: e }) {
  const [a, n] = D(0), o = [
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
  ], r = Array.isArray(t.products) && t.products.length > 0 ? t.products : o, s = r[a] || r[0], p = () => {
    n((h) => (h + 1) % r.length);
  }, u = () => {
    n((h) => (h - 1 + r.length) % r.length);
  }, l = () => {
    e == null || e(`Zanima me proizvod: ${s.name} (${s.price})`);
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card products-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ta, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Izbor artikala" }),
      r.length > 1 && /* @__PURE__ */ i("span", { className: "pitaj-widget-counter", children: [
        a + 1,
        " / ",
        r.length
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-product-card", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-product-image-wrap", children: [
        /* @__PURE__ */ i("img", { src: s.image, alt: s.name, className: "pitaj-product-img" }),
        r.length > 1 && /* @__PURE__ */ i("div", { className: "pitaj-carousel-controls", children: [
          /* @__PURE__ */ i("button", { type: "button", onClick: u, "aria-label": "Prethodni", className: "pitaj-carousel-btn", children: "‹" }),
          /* @__PURE__ */ i("button", { type: "button", onClick: p, "aria-label": "Sljedeći", className: "pitaj-carousel-btn", children: "›" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-product-info", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-product-name", children: s.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-sub", children: s.subtitle }),
        /* @__PURE__ */ i("div", { className: "pitaj-product-price", children: s.price }),
        /* @__PURE__ */ i("button", { type: "button", onClick: l, className: "pitaj-widget-btn-primary pitaj-btn-select", children: "Odaberi opcije" })
      ] })
    ] })
  ] });
}
function ja({ config: t, onAction: e }) {
  const [a, n] = D(!1), o = [
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
  ], r = Array.isArray(t.items) && t.items.length > 0 ? t.items : o, s = t.total || "40.90 KM", p = () => {
    n(!0), e == null || e(`Želim dovršiti narudžbu iz korpe (Ukupno: ${s})`);
  };
  return a ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(xe, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Narudžba je potvrđena!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Iznos od ",
      s,
      " je uspješno obrađen. Detalji su poslani."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(ia, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: [
        r.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-items-list", children: r.map((u) => /* @__PURE__ */ i("div", { className: "pitaj-cart-item-row", children: [
      /* @__PURE__ */ i("img", { src: u.image, alt: u.name, className: "pitaj-cart-thumb" }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-details", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-name", children: u.name }),
        /* @__PURE__ */ i("div", { className: "pitaj-cart-item-sub", children: u.subtitle })
      ] }),
      /* @__PURE__ */ i("div", { className: "pitaj-cart-item-price", children: u.price })
    ] }, u.id)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-divider" }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-total-val", children: s })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-cart-payment", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-cart-pay-label", children: "Plaćanje karticom" }),
      /* @__PURE__ */ i("span", { className: "pitaj-cart-card-pill", children: [
        /* @__PURE__ */ i(na, { size: 12, className: "pitaj-pill-icon" }),
        /* @__PURE__ */ i("span", { children: "•• 2683" })
      ] })
    ] }),
    /* @__PURE__ */ i("button", { type: "button", onClick: p, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function va({ config: t }) {
  const e = t.metric_label || "Ukupno potrošeno kredita", a = t.metric_value || "2,214", n = [
    { day: "N", val: 75 },
    { day: "P", val: 40 },
    { day: "U", val: 65 },
    { day: "S", val: 85 },
    { day: "Č", val: 25 },
    { day: "P", val: 70 },
    { day: "S", val: 95 }
  ], o = Array.isArray(t.chart_data) && t.chart_data.length > 0 ? t.chart_data : n;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(aa, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-chart-label", children: e }),
      /* @__PURE__ */ i("div", { className: "pitaj-chart-big-number", children: a }),
      /* @__PURE__ */ i("div", { className: "pitaj-bar-chart-container", children: o.map((r, s) => /* @__PURE__ */ i("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ i(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, r.val))}%` },
            title: `${r.day}: ${r.val}%`
          }
        ) }),
        /* @__PURE__ */ i("span", { className: "pitaj-bar-day", children: r.day })
      ] }, s)) })
    ] })
  ] });
}
function ya({ config: t, onAction: e }) {
  const [a, n] = D([]), o = [
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
  ], r = Array.isArray(t.classes) && t.classes.length > 0 ? t.classes : o, s = (p, u) => {
    const l = p.id ?? u;
    a.includes(l) || (n((h) => [...h, l]), e == null || e(`Želim rezervisati termin za: ${p.title} (${p.time})`));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(qi, { size: 14 }) }),
      /* @__PURE__ */ i("span", { className: "pitaj-widget-bar-title", children: t.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-classes-list", children: r.map((p, u) => {
      const l = p.id ?? u, h = a.includes(l);
      return /* @__PURE__ */ i("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ i("img", { src: p.image, alt: p.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ i("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-class-title", children: p.title }),
            p.level && /* @__PURE__ */ i("span", { className: `pitaj-level-badge level-${p.levelColor || "green"}`, children: p.level })
          ] }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-time", children: p.time }),
          /* @__PURE__ */ i("div", { className: "pitaj-class-instructor", children: p.instructor })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => s(p, u),
            className: `pitaj-book-btn ${h ? "is-booked" : ""}`,
            children: h ? "Rezervisano" : "Rezerviši"
          }
        )
      ] }, l);
    }) })
  ] });
}
function _a({ config: t, onAction: e }) {
  const [a, n] = D({}), [o, r] = D(!1), s = t.name || "Hotel Dark Moon", p = t.price || "220 KM / noć", u = t.location || "Sarajevo, Bosna i Hercegovina", l = t.rating || "4.8 (124 recenzije)", h = t.image || "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80", g = ["Wi-Fi", "Doručak", "Restoran", "Parking", "Spa & Bazen"], m = (Array.isArray(t.amenities) && t.amenities.length > 0 ? t.amenities : g).map(Ke), f = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], y = Array.isArray(t.fields) ? t.fields : f, L = (M, w) => {
    n(($) => ({ ...$, [M]: w }));
  }, _ = (M) => {
    if (M.preventDefault(), y.length > 0) {
      for (const $ of y)
        if ($.required) {
          const d = a[$.key];
          if ($.type === "checkbox" && !d || $.type !== "checkbox" && (!d || !String(d).trim())) return;
        }
    }
    r(!0);
    const w = { ...a };
    if (w.check_in && w.check_out && w.check_out < w.check_in) {
      const $ = w.check_in;
      w.check_in = w.check_out, w.check_out = $;
    }
    if (y.length > 0) {
      const $ = y.filter((d) => w[d.key] !== void 0 && w[d.key] !== "").map((d) => `- ${d.label}: ${d.type === "checkbox" ? "Da" : w[d.key]}`);
      e == null || e(`Forma: Rezervacija smještaja - ${s}
${$.join(`
`)}`);
    } else
      e == null || e(`Forma: Rezervacija smještaja - ${s}
- Cijena: ${p}
- Lokacija: ${u}`);
  };
  return o ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(xe, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Zahtjev za rezervaciju je poslan!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: [
      "Uspješno ste poslali upit za ",
      s,
      ". Naše osoblje će vam se javiti za potvrdu termina."
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-image-wrap", children: [
      /* @__PURE__ */ i("img", { src: h, alt: s, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-badge-price", children: p })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ i("div", { className: "pitaj-hotel-name", children: s }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ i(oa, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ i("span", { children: u })
        ] }),
        /* @__PURE__ */ i("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ i(sa, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ i("span", { children: l })
        ] })
      ] }),
      m.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-amenities-row", children: m.map((M, w) => {
        const $ = Ke(M), d = ma($);
        return /* @__PURE__ */ i("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ i(d, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ i("span", { children: $ })
        ] }, w);
      }) }),
      /* @__PURE__ */ i("form", { onSubmit: _, className: "pitaj-widget-form", children: [
        y.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ i(et, { fields: y, values: a, onChange: L })
        ] }),
        /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || (y.length > 0 ? "Pošalji upit za rezervaciju" : "Rezerviši sobu") })
      ] })
    ] })
  ] });
}
function wa({ config: t, onAction: e }) {
  const a = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], n = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : a, [o, r] = D({}), [s, p] = D(!1), u = t.title || "Kontaktirajte nas", l = t.subtitle || "Rado ćemo odgovoriti na vaša pitanja", h = (c, m) => {
    r((f) => ({ ...f, [c]: m }));
  }, g = (c) => {
    c.preventDefault();
    for (const f of n)
      if (f.required) {
        const y = o[f.key];
        if (f.type === "checkbox" && !y || f.type !== "checkbox" && (!y || !String(y).trim())) return;
      }
    p(!0);
    const m = n.filter((f) => o[f.key] !== void 0 && o[f.key] !== "").map((f) => `- ${f.label}: ${f.type === "checkbox" ? "Da" : o[f.key]}`);
    e == null || e(`Forma: ${u}
${m.join(`
`)}`);
  };
  return s ? /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card is-success", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-icon", children: /* @__PURE__ */ i(xe, { size: 20 }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-title", children: "Poruka je poslana!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-widget-success-desc", children: "Hvala vam na javljanju. Odgovorit ćemo vam uskoro." })
  ] }) : /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-widget-title", children: u }),
      /* @__PURE__ */ i("div", { className: "pitaj-widget-subtitle", children: l })
    ] }),
    /* @__PURE__ */ i("form", { onSubmit: g, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ i(et, { fields: n, values: o, onChange: h }),
      /* @__PURE__ */ i("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function ka({ config: t }) {
  const e = t.city || "Sarajevo", a = t.temp || "22°C", n = t.condition || "Sunčano i toplo", o = t.description || "Pretežno sunčano vrijeme uz blagi povjetarac tokom popodneva.";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ i(ra, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ i("span", { className: "pitaj-weather-temp", children: a })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-city", children: e }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-cond", children: n }),
    /* @__PURE__ */ i("div", { className: "pitaj-weather-desc", children: o })
  ] });
}
function Na({ config: t, title: e }) {
  const [a, n] = D(!0), o = t.url || "https://calendly.com", r = t.height || 380;
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ i(la, { size: 14 }) }),
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
    /* @__PURE__ */ i("div", { className: "pitaj-iframe-container", style: { height: `${r}px` }, children: [
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
          onLoad: () => n(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function Ma({ config: t, onAction: e }) {
  const a = t.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', n = t.css || "";
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (r) => {
    var p;
    const s = (p = r.target) == null ? void 0 : p.closest("[data-chat-action]");
    if (s) {
      const u = s.getAttribute("data-chat-action");
      u && (r.preventDefault(), e == null || e(u));
    }
  }, children: [
    n && /* @__PURE__ */ i("style", { children: n }),
    /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: a } })
  ] });
}
function Ia({ config: t, onAction: e }) {
  const a = t.jsx_template || "", n = t.default_data || t.data || {}, o = ue(() => {
    if (!a) return "";
    try {
      let s = a;
      const p = /\{(\w+)\.map\(\((\w+)\)\s*=>\s*\(([\s\S]*?)\)\)\}/g;
      s = s.replace(p, (l, h, g, c) => {
        const m = n[h];
        return Array.isArray(m) ? m.map((f) => {
          let y = c;
          return Object.keys(f).forEach((L) => {
            const _ = f[L], M = new RegExp(
              `${g}\\.${L}\\s*\\?\\s*["']([^"']*)["']\\s*:\\s*["']([^"']*)["']`,
              "g"
            );
            y = y.replace(M, _ ? "$1" : "$2");
            const w = new RegExp(`\\{?${g}\\.${L}\\}?`, "g");
            y = y.replace(w, String(_ ?? ""));
          }), y;
        }).join("") : "";
      }), Object.keys(n).forEach((l) => {
        const h = n[l];
        if (typeof h == "string" || typeof h == "number") {
          const g = new RegExp(`\\{${l}\\}`, "g");
          s = s.replace(g, String(h));
        }
      });
      const u = (l, h) => {
        const g = l.match(new RegExp(`${h}=(?:["']([^"']*)["']|\\{([^}]+)\\})`, "i"));
        return (g ? g[1] ?? g[2] ?? "" : "").trim();
      };
      return s = s.replace(
        /<Card[^>]*size=["']?([^"'\s>]+)?["']?[^>]*status=\{\{\s*text:\s*([^,\}]+),\s*icon:\s*["']([^"']+)["']\s*\}\}[^>]*>/gi,
        '<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px;"><div style="font-size: 11px; color: #64748b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">📦 $2</div>'
      ).replace(/<Card[^>]*>/gi, '<div class="pitaj-inline-widget-card" style="padding: 14px; border-radius: 16px;">').replace(/<\/Card>/gi, "</div>").replace(
        /<Row[^>]*justify=["']between["'][^>]*align=["']start["'][^>]*>/gi,
        '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">'
      ).replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*align=["']start["'][^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: flex-start;">').replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: center;">').replace(/<Row[^>]*>/gi, '<div style="display: flex; gap: 8px; align-items: center;">').replace(/<\/Row>/gi, "</div>").replace(/<Col[^>]*flex=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; flex: $1;">').replace(/<Col[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: $1px;">').replace(/<Col[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: 4px;">').replace(/<\/Col>/gi, "</div>").replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*weight=["']bold["'][^>]*\/>/gi, '<h4 style="font-size: 15px; font-weight: 700; margin: 0; line-height: 1.2;">$1</h4>').replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<h4 style="font-size: 14px; font-weight: 600; margin: 0;">$1</h4>').replace(/<Caption[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="font-size: 11px; color: #64748b; margin-top: 2px;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["']success["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dcfce7; color: #166534;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:warning|amber)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fef3c7; color: #92400e;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:error|danger|destructive|red)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #fee2e2; color: #991b1b;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:purple|brand)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f3e8ff; color: #6b21a8;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["'](?:info|blue)["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dbeafe; color: #1e40af;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f1f5f9; color: #475569;">$1</span>').replace(/<Divider[^>]*flush[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px -14px;" />').replace(/<Divider[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px 0;" />').replace(/<Image([^>]*)\/>/gi, (l) => {
        const h = u(l, "src"), g = u(l, "alt"), c = u(l, "height") || "120px", m = u(l, "radius") === "sm" ? "6px" : "10px";
        return `<img src="${h}" alt="${g}" style="width: 100%; height: ${c === "100%" ? "120px" : c}; object-fit: cover; border-radius: ${m}; margin: 4px 0;" />`;
      }).replace(/<Avatar([^>]*)\/>/gi, (l) => {
        const h = u(l, "src"), g = u(l, "name"), c = u(l, "size") === "lg" ? "40px" : "32px";
        if (h)
          return `<img src="${h}" alt="${g}" style="width: ${c}; height: ${c}; border-radius: 9999px; object-fit: cover; flex-shrink: 0;" />`;
        const m = g ? g.charAt(0).toUpperCase() : "U";
        return `<div style="width: ${c}; height: ${c}; border-radius: 9999px; background: #e2e8f0; color: #334155; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0;">${m}</div>`;
      }).replace(/<Input([^>]*)\/>/gi, (l) => {
        const h = u(l, "label"), g = u(l, "placeholder"), c = u(l, "value"), m = u(l, "type") || "text";
        return m === "textarea" ? `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${h}</label><textarea placeholder="${g}" rows="2" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box; resize: vertical;">${c}</textarea></div>` : `<div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;"><label style="font-size: 11px; font-weight: 600; color: #64748b;">${h}</label><input type="${m}" placeholder="${g}" value="${c}" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 6px 10px; font-size: 12px; width: 100%; box-sizing: border-box;" /></div>`;
      }).replace(/<BarChart[^>]*\/>/gi, () => {
        const l = Array.isArray(n.bars) ? n.bars : [];
        if (l.length > 0) {
          const h = Math.max(...l.map((c) => Number(c.value || 0)), 1);
          return `<div style="display: flex; gap: 6px; width: 100%; padding: 8px 0; align-items: flex-end;">${l.map(
            (c) => `<div style="display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1;"><div style="width: 100%; background: #e2e8f0; height: 70px; border-radius: 4px; display: flex; align-items: flex-end; overflow: hidden;"><div style="width: 100%; height: ${Math.round(
              Number(c.value || 0) / h * 100
            )}%; background: var(--pitaj-accent, #2563eb); border-radius: 4px 4px 0 0;"></div></div><span style="font-size: 10px; color: #64748b;">${c.label || ""}</span></div>`
          ).join("")}</div>`;
        }
        return '<div style="padding: 12px; text-align: center; color: #94a3b8; font-size: 11px;">Grafikon</div>';
      }).replace(
        /<Box[^>]*background=["']green-100["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #dcfce7; color: #166534; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(
        /<Box[^>]*background=["']surface-secondary["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #f1f5f9; color: #94a3b8; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(/<Box([^>]*)>/gi, (l) => {
        const h = u(l, "background"), g = u(l, "radius"), c = u(l, "padding"), m = [];
        return h === "surface-secondary" || h === "muted" ? m.push("background: #f1f5f9") : h && m.push(`background: ${h}`), g === "full" ? m.push("border-radius: 9999px") : g && m.push(`border-radius: ${g === "md" ? "8px" : "4px"}`), c && m.push(`padding: ${c}px`), `<div style="${m.join("; ")}; display: flex; align-items: center; justify-content: center;">`;
      }).replace(/<\/Box>/gi, "</div>").replace(/<Icon[^>]*name=["'](?:check|check-circle)["'][^>]*\/>/gi, "✓").replace(/<Icon[^>]*name=["'](?:clock|time)["'][^>]*\/>/gi, "⏱").replace(/<Icon[^>]*name=["'](?:package|box)["'][^>]*\/>/gi, "📦").replace(/<Icon[^>]*name=["']star["'][^>]*\/>/gi, "⭐").replace(/<Icon[^>]*name=["'](?:map-pin|location)["'][^>]*\/>/gi, "📍").replace(/<Icon[^>]*name=["']calendar["'][^>]*\/>/gi, "📅").replace(/<Icon[^>]*name=["'](?:shopping-bag|shopping-cart|cart)["'][^>]*\/>/gi, "🛍️").replace(/<Icon[^>]*name=["']user["'][^>]*\/>/gi, "👤").replace(/<Icon[^>]*name=["']mail["'][^>]*\/>/gi, "✉️").replace(/<Icon[^>]*name=["']phone["'][^>]*\/>/gi, "📞").replace(/<Icon[^>]*name=["'](?:truck|delivery)["'][^>]*\/>/gi, "🚚").replace(/<Icon[^>]*name=["']credit-card["'][^>]*\/>/gi, "💳").replace(/<Icon[^>]*name=["']sun["'][^>]*\/>/gi, "☀️").replace(/<Icon[^>]*name=["']bell["'][^>]*\/>/gi, "🔔").replace(/<Icon[^>]*name=["'](?:bed|hotel)["'][^>]*\/>/gi, "🏨").replace(/<Icon[^>]*name=["'](?:utensils|dining)["'][^>]*\/>/gi, "🍽️").replace(/<Icon[^>]*name=["']coffee["'][^>]*\/>/gi, "☕").replace(/<Icon[^>]*name=["']wifi["'][^>]*\/>/gi, "📶").replace(/<Icon[^>]*name=["']sparkles["'][^>]*\/>/gi, "✨").replace(/<Icon[^>]*\/>/gi, "•").replace(/<Text[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<p style="font-size: 12px; margin: 0; line-height: 1.3;">$1</p>').replace(/<Button([^>]*)\/>/gi, (l) => {
        const h = u(l, "label") || "Akcija", g = u(l, "action") || h, c = u(l, "variant");
        let m = "background: var(--pitaj-accent, #2563eb); color: white; border: none; border-radius: 8px; padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;";
        return c === "outline" ? m = "background: transparent; color: #0f172a; border: 1px solid #cbd5e1; border-radius: 8px; padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;" : c === "secondary" && (m = "background: #f1f5f9; color: #0f172a; border: none; border-radius: 8px; padding: 7px 14px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px; display: inline-flex; align-items: center; justify-content: center; width: 100%; box-sizing: border-box;"), `<button type="button" data-chat-action="${g}" style="${m}">${h}</button>`;
      }), s;
    } catch {
      return "";
    }
  }, [a, n]);
  return /* @__PURE__ */ i("div", { className: "pitaj-inline-widget-card dynamic-jsx-widget", onClick: (s) => {
    var u;
    const p = (u = s.target) == null ? void 0 : u.closest("[data-chat-action]");
    if (p) {
      const l = p.getAttribute("data-chat-action");
      l && (s.preventDefault(), e == null || e(l));
    }
  }, children: /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: o } }) });
}
function Gt({
  rows: t,
  fallbackQuestions: e,
  onSelect: a,
  buttonClassName: n,
  containerClassName: o,
  revealDelayMs: r = 0,
  staggerMs: s = 140
}) {
  const p = ue(() => Array.isArray(t) && t.length > 0 ? t.map((m) => ({
    text: m.text.trim(),
    children: (m.children ?? []).map((f) => f.trim()).filter(Boolean)
  })).filter((m) => m.text !== "") : (e ?? []).map((m) => m.trim()).filter(Boolean).map((m) => ({ text: m, children: [] })), [e, t]), [u, l] = D(null), [h, g] = D(p.length);
  if (ae(() => {
    l(null);
  }, [p]), ae(() => {
    if (u) {
      g(p.length);
      return;
    }
    if (r <= 0) {
      g(p.length);
      return;
    }
    g(0);
    const m = window.setTimeout(() => {
      g(1);
      const f = window.setInterval(() => {
        g((y) => y >= p.length ? (window.clearInterval(f), y) : y + 1);
      }, Math.max(60, s));
    }, r);
    return () => {
      window.clearTimeout(m);
    };
  }, [u, p.length, r, s]), p.length === 0)
    return null;
  const c = p.find((m) => m.text === u && m.children.length > 0) ?? null;
  return c ? /* @__PURE__ */ i("div", { className: o, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => l(null),
        className: n,
        children: "Nazad"
      }
    ),
    c.children.map((m, f) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(m),
        className: n,
        children: m
      },
      `${c.text}-${f}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: o, children: p.slice(0, h).map((m, f) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => m.children.length > 0 ? l(m.text) : a(m.text),
      className: `${n} pitaj-suggestion-enter`,
      children: m.text
    },
    `${m.text}-${f}`
  )) });
}
const $a = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Sa = [".txt", ".md", ".csv", ".json", ".xml"];
function za(t) {
  if ($a.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Sa.some((a) => e.endsWith(a));
}
async function Yt(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (a) => {
      const n = za(a) ? (await a.text()).slice(0, 4e3) : null;
      return {
        id: `${a.name}-${a.lastModified}-${a.size}`,
        name: a.name,
        textContent: n
      };
    })
  );
}
function Qt(t) {
  return t.length === 0 ? "" : `

${t.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function Ca(t) {
  const { widgetId: e, audio: a, apiUrl: n } = t, o = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), r = new FormData();
  r.append("audio", a, "dictation.webm");
  const s = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: r,
    headers: {
      Accept: "application/json"
    }
  });
  if (!s.ok) {
    const l = await s.json().catch(() => null), g = (() => {
      if (s.status !== 422 || !(l != null && l.errors) || typeof l.errors != "object")
        return null;
      for (const c of Object.values(l.errors))
        if (Array.isArray(c)) {
          for (const m of c)
            if (typeof m == "string" && m.trim() !== "")
              return m;
        }
      return null;
    })();
    Ft(
      s.status,
      l,
      typeof g == "string" && g || `Transkripcija nije uspjela (${s.status})`,
      s.headers.get("Retry-After")
    );
  }
  const p = await s.json(), u = typeof (p == null ? void 0 : p.text) == "string" ? p.text.trim() : "";
  if (!u)
    throw new Error("Transkripcija nije vratila tekst.");
  return u;
}
function Jt({ widgetId: t, apiUrl: e, onTranscript: a, onError: n }) {
  const r = ee(null), s = ee(null), p = ee([]), u = ee(!0), l = ee(null), h = ee(null), g = ee(null), c = ee(null), m = ee(Array.from({ length: 42 }, () => 0.06)), [f, y] = D(!1), [L, _] = D(!1), [M, w] = D(
    () => Array.from({ length: 42 }, () => 0.06)
  ), $ = ue(() => {
    var R;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((R = navigator.mediaDevices) != null && R.getUserMedia);
  }, [t]), d = Y(() => {
    s.current && (s.current.getTracks().forEach((R) => R.stop()), s.current = null);
  }, []), E = Y(() => {
    var R;
    l.current !== null && (window.cancelAnimationFrame(l.current), l.current = null), (R = c.current) == null || R.disconnect(), c.current = null, g.current = null, h.current && (h.current.close(), h.current = null);
  }, []), S = Y(() => {
    const R = Array.from({ length: 42 }, () => 0.06);
    m.current = R, w(R);
  }, []), F = Y((R) => {
    const X = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!X)
      return;
    const re = new X(), Z = re.createAnalyser();
    Z.fftSize = 2048, Z.smoothingTimeConstant = 0.78;
    const Q = re.createMediaStreamSource(R);
    Q.connect(Z), h.current = re, g.current = Z, c.current = Q;
    const k = new Uint8Array(Z.fftSize), C = () => {
      const V = g.current;
      if (!V) return;
      V.getByteTimeDomainData(k);
      let j = 0;
      for (let v = 0; v < k.length; v += 1) {
        const A = (k[v] - 128) / 128;
        j += A * A;
      }
      const z = Math.sqrt(j / k.length), W = Math.max(0.04, Math.min(1, z * 5.2)), b = m.current.slice(1);
      b.push(W), m.current = b, w(b), l.current = window.requestAnimationFrame(C);
    };
    l.current = window.requestAnimationFrame(C);
  }, []), K = Y(async () => {
    if (!(!$ || L || r.current || f))
      try {
        const X = await navigator.mediaDevices.getUserMedia({ audio: !0 }), re = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], Q = typeof MediaRecorder.isTypeSupported == "function" ? re.find((C) => MediaRecorder.isTypeSupported(C)) : void 0, k = Q ? new MediaRecorder(X, { mimeType: Q }) : new MediaRecorder(X);
        p.current = [], u.current = !0, s.current = X, r.current = k, S(), F(X), k.ondataavailable = (C) => {
          C.data.size > 0 && p.current.push(C.data);
        }, k.onstop = async () => {
          y(!1);
          const C = new Blob(p.current, { type: k.mimeType || "audio/webm" });
          if (p.current = [], r.current = null, d(), E(), C.size === 0) {
            S();
            return;
          }
          if (!u.current) {
            S();
            return;
          }
          _(!0);
          try {
            const V = await Ca({
              widgetId: t,
              apiUrl: e,
              audio: C
            });
            a(V);
          } catch (V) {
            console.error("[Pitaj.io] Dictation transcription failed", V), n == null || n(V);
          } finally {
            _(!1), S();
          }
        }, k.onerror = () => {
          y(!1), r.current = null, d(), E(), S();
        }, k.start(), y(!0);
      } catch (X) {
        y(!1), d(), E(), S(), console.error("[Pitaj.io] Dictation microphone access failed", X);
      }
  }, [e, f, L, $, n, a, S, F, d, E, t]), O = Y(() => {
    const R = r.current;
    !R || !f || L || (u.current = !0, R.stop(), y(!1));
  }, [f, L]), G = Y(() => {
    const R = r.current;
    !R || !f || (u.current = !1, R.stop(), y(!1));
  }, [f]);
  return ae(() => () => {
    const R = r.current;
    R && R.state !== "inactive" && R.stop(), d(), E();
  }, [d, E]), {
    isSupported: $,
    isListening: f,
    isProcessing: L,
    waveformLevels: M,
    start: K,
    stopAndTranscribe: O,
    cancel: G
  };
}
function Aa(t) {
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
    const s = r.slice(2), p = s.indexOf(":");
    if (p < 1) return null;
    const u = s.slice(0, p).trim(), l = s.slice(p + 1).trim();
    return !u || !l ? null : { label: u, value: l };
  }).filter((r) => !!r);
  return o.length < 1 ? null : { title: a, entries: o };
}
function La({
  conversation: t,
  config: e,
  isStreaming: a,
  rateLimitCountdown: n,
  errorBanner: o,
  onSendMessage: r,
  onApiError: s,
  onSubmitSatisfaction: p
}) {
  var k, C, V;
  const [u, l] = D(""), [h, g] = D(!1), [c, m] = D(null), [f, y] = D([]), L = ee(null), _ = ee(null), M = ee(null), w = e.content || {}, $ = e.chatAvailable === !1, d = e.transcribeAvailable === !1, E = a || n !== null || $, S = Jt({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: Y((j) => {
      l((z) => z ? `${z} ${j}` : j);
    }, []),
    onError: Y((j) => {
      s == null || s(j, "Greška pri transkripciji.");
    }, [s])
  });
  ae(() => {
    const j = L.current;
    j && (j.scrollTop = j.scrollHeight);
  }, [t.messages, a]), ae(() => {
    const j = _.current;
    j && (j.style.height = "auto", j.style.height = `${Math.min(j.scrollHeight, 96)}px`);
  }, [u]), ae(() => {
    g(!1);
  }, [w.dismissibleNotice]);
  const F = (j) => {
    const z = (j ?? u).trim();
    if (!z && f.length === 0 || E) return;
    const W = `${z}${Qt(f)}`.trim();
    r(W), y([]), j || (l(""), _.current && (_.current.style.height = "auto"));
  }, K = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), F());
  }, O = w.messagePlaceholder || e.placeholder || "Pitajte bilo šta...", G = ((k = w.dismissibleNotice) == null ? void 0 : k.trim()) || "", R = ((C = w.footerText) == null ? void 0 : C.trim()) || "", X = w.showSuggestedMessages === !1 || w.keepShowingSuggestedMessages !== !0 ? [] : w.suggestedMessageRows || [], re = ((V = [...t.messages].reverse().find((j) => j.sender === "ai")) == null ? void 0 : V.id) ?? null, Z = S.isListening, Q = async (j, z) => {
    navigator.clipboard && (await navigator.clipboard.writeText(z), m(j), window.setTimeout(() => {
      m((W) => W === j ? null : W);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: L, className: "pitaj-messages-container", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ i("span", { className: "pitaj-date-label", children: "Danas" }),
        /* @__PURE__ */ i("div", { className: "pitaj-date-line" })
      ] }),
      t.messages.map((j) => {
        const z = j.sender === "user", W = z ? Ta(j.content) : null;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${z ? "user" : "ai"}${j.widget ? " has-widget" : ""}`,
            children: [
              !z && /* @__PURE__ */ i("div", { className: "pitaj-msg-avatar", children: e.logo || e.avatar ? /* @__PURE__ */ i("img", { src: e.logo || e.avatar, alt: "" }) : /* @__PURE__ */ i(we, { size: 14 }) }),
              /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
                z ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${W ? "is-form-submission" : ""}`, children: W ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                  /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: W.title.toLowerCase().startsWith("forma") ? W.title : `Forma: ${W.title}` }),
                  /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: W.entries.map((b) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                    /* @__PURE__ */ i("dt", { children: b.label }),
                    /* @__PURE__ */ i("dd", { children: b.value })
                  ] }, `${j.id}-${b.label}`)) })
                ] }) : j.content }) : /* @__PURE__ */ i(oe, { children: [
                  j.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: /* @__PURE__ */ i(da, { content: j.content }) }) : null,
                  j.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(ga, { widget: j.widget, onAction: (b) => F(b) }) }),
                  j.isStreaming && !j.content && !j.widget && /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", style: { padding: "8px 12px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-typing-indicator", style: { background: "transparent", padding: "4px 0" }, children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
                    /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
                    /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
                  ] }) })
                ] }),
                !z && j.sources && j.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                  /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: "Izvori i dokumentacija:" }),
                  /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: j.sources.map((b) => /* @__PURE__ */ i(
                    "a",
                    {
                      href: b.url || "#",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "pitaj-source-pill",
                      children: [
                        /* @__PURE__ */ i("span", { children: b.title }),
                        /* @__PURE__ */ i(Ui, { size: 10 })
                      ]
                    },
                    b.id
                  )) })
                ] }),
                !z && j.suggestedQuestions && j.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: j.suggestedQuestions.map((b, v) => /* @__PURE__ */ i(
                  "button",
                  {
                    onClick: () => F(b),
                    disabled: E,
                    className: "pitaj-followup-chip",
                    children: b
                  },
                  `sug-f-${v}`
                )) }),
                /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                  /* @__PURE__ */ i("span", { children: Aa(j.timestamp) }),
                  !z && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                    j.id === re && !a && /* @__PURE__ */ i(oe, { children: w.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(oe, { children: [
                      /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          onClick: () => p == null ? void 0 : p("positive"),
                          className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active" : ""}`,
                          "aria-label": "Korisno",
                          title: "Korisno",
                          children: /* @__PURE__ */ i(Oi, { size: 16 })
                        }
                      ),
                      /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          onClick: () => p == null ? void 0 : p("negative"),
                          className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active" : ""}`,
                          "aria-label": "Nije korisno",
                          title: "Nije korisno",
                          children: /* @__PURE__ */ i(Vi, { size: 16 })
                        }
                      )
                    ] }) }),
                    j.id === re && !a && w.copyMessageEnabled !== !1 && !!j.content && /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => void Q(j.id, j.content),
                        className: `pitaj-msg-action-btn ${c === j.id ? "is-active" : ""}`,
                        "aria-label": c === j.id ? "Kopirano" : "Kopiraj odgovor",
                        title: c === j.id ? "Kopirano" : "Kopiraj odgovor",
                        children: /* @__PURE__ */ i(Hi, { size: 16 })
                      }
                    )
                  ] }),
                  z && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                    xe,
                    {
                      size: 10,
                      className: j.status === "read" ? "text-accent" : ""
                    }
                  ) })
                ] })
              ] })
            ]
          },
          j.id
        );
      }),
      a && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-msg-avatar", children: e.logo || e.avatar ? /* @__PURE__ */ i("img", { src: e.logo || e.avatar, alt: "" }) : /* @__PURE__ */ i(we, { size: 14 }) }),
        /* @__PURE__ */ i("div", { className: "pitaj-typing-indicator", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
          /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
          /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
        ] })
      ] })
    ] }),
    (o || n) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: n ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${n}s.` : o }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Gt,
        {
          rows: X,
          fallbackQuestions: w.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: F,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      f.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: f.map((j) => /* @__PURE__ */ i("span", { className: "pitaj-attachment-chip", children: [
        j.name,
        /* @__PURE__ */ i("button", { type: "button", onClick: () => y((z) => z.filter((W) => W.id !== j.id)), children: /* @__PURE__ */ i(he, { size: 10 }) })
      ] }, j.id)) }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(we, { size: 13, className: "pitaj-powered-icon" }),
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
      ] }),
      G && !h && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: G }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => g(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(he, { size: 12 })
          }
        )
      ] }),
      S.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${Z ? "is-recording" : ""}`, children: [
        w.attachmentsEnabled && /* @__PURE__ */ i(oe, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: M,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (j) => {
                const z = j.currentTarget.files;
                if (j.currentTarget.value = "", !z || z.length === 0) return;
                const W = await Yt(z);
                y((b) => [...b, ...W].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-mic-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var j;
                return (j = M.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ i(Zt, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: _,
            value: u,
            onInput: (j) => l(j.target.value),
            onKeyDown: K,
            placeholder: O,
            rows: 1,
            disabled: E,
            className: "pitaj-textarea",
            style: Z ? { display: "none" } : void 0
          }
        ),
        Z ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => S.cancel(),
              children: /* @__PURE__ */ i(he, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: S.waveformLevels.map((j, z) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + j * 15))}px` }
            },
            `dict-wave-conv-${z}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => S.stopAndTranscribe(),
              disabled: E || S.isProcessing,
              children: /* @__PURE__ */ i(xe, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(oe, { children: [
          w.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-mic-btn ${S.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: S.isProcessing ? "Transkribujem..." : S.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => S.start(),
              disabled: E || d || !S.isSupported || S.isProcessing,
              children: /* @__PURE__ */ i(Wt, { size: 16 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => F(),
              disabled: E || !u.trim() && f.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ i(Vt, { size: 14 })
            }
          )
        ] })
      ] }),
      R && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: R })
    ] })
  ] });
}
function Ba({
  config: t,
  openedByUser: e = !1,
  onStart: a,
  onApiError: n
}) {
  var Z, Q;
  const [o, r] = D(""), [s, p] = D(!1), [u, l] = D(!1), [h, g] = D([]), c = ee(null), m = ee(null), f = t.content || {}, y = t.chatAvailable === !1, L = t.transcribeAvailable === !1, _ = Jt({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: Y((k) => {
      r((C) => C ? `${C} ${k}` : k);
    }, []),
    onError: Y((k) => {
      n == null || n(k, "Greška pri transkripciji.");
    }, [n])
  });
  ae(() => {
    var k;
    e && ((k = c.current) == null || k.focus({ preventScroll: !0 }));
  }, [e]), ae(() => {
    if (typeof window > "u") return;
    const k = window.matchMedia("(max-width: 768px)"), C = () => p(k.matches);
    return C(), k.addEventListener("change", C), () => k.removeEventListener("change", C);
  }, []), ae(() => {
    l(!1);
  }, [f.dismissibleNotice]);
  const w = (s && f.useDifferentMessageMobile && f.mobileWelcomeMessage ? f.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((k) => k.trim()).filter((k) => k.length > 0), $ = f.autoShowInitialMessages !== !1 && !e, d = !s || f.showAutoPopupMobile !== !1, E = s && f.useDifferentDurationMobile && typeof f.mobileAutoShowDurationSeconds == "number" ? f.mobileAutoShowDurationSeconds : f.autoShowDurationSeconds ?? 0, S = $ && d ? Math.max(0, E) * 1e3 : 0, F = (k) => {
    const C = (k ?? o).trim();
    if (!C && h.length === 0 || y) return;
    const V = `${C}${Qt(h)}`.trim();
    a(V), r(""), g([]);
  }, K = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), F());
  }, O = f.showSuggestedMessages === !1 ? [] : f.suggestedMessageRows || [], G = f.messagePlaceholder || t.placeholder || "Upišite svoje pitanje...", R = ((Z = f.dismissibleNotice) == null ? void 0 : Z.trim()) || "", X = ((Q = f.footerText) == null ? void 0 : Q.trim()) || "", re = _.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (w.length > 0 ? w : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((k, C) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: k }) }) }, `welcome-${C}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Gt,
        {
          rows: O,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: F,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: S,
          staggerMs: 150
        }
      ),
      h.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: h.map((k) => /* @__PURE__ */ i("span", { className: "pitaj-attachment-chip", children: [
        k.name,
        /* @__PURE__ */ i("button", { type: "button", onClick: () => g((C) => C.filter((V) => V.id !== k.id)), children: /* @__PURE__ */ i(he, { size: 10 }) })
      ] }, k.id)) }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(we, { size: 13, className: "pitaj-powered-icon" }),
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
      ] }),
      R && !u && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: R }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => l(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(he, { size: 12 })
          }
        )
      ] }),
      _.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${re ? "is-recording" : ""}`, children: [
        f.attachmentsEnabled && /* @__PURE__ */ i(oe, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: m,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (k) => {
                const C = k.currentTarget.files;
                if (k.currentTarget.value = "", !C || C.length === 0) return;
                const V = await Yt(C);
                g((j) => [...j, ...V].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-mic-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var k;
                return (k = m.current) == null ? void 0 : k.click();
              },
              children: /* @__PURE__ */ i(Zt, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: c,
            value: o,
            onInput: (k) => r(k.target.value),
            onKeyDown: K,
            placeholder: G,
            rows: 1,
            disabled: y,
            className: "pitaj-textarea",
            style: re ? { display: "none" } : void 0
          }
        ),
        re ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => _.cancel(),
              children: /* @__PURE__ */ i(he, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: _.waveformLevels.map((k, C) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + k * 15))}px` }
            },
            `dict-wave-${C}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => _.stopAndTranscribe(),
              disabled: y || _.isProcessing,
              children: /* @__PURE__ */ i(xe, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(oe, { children: [
          f.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-mic-btn ${_.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: _.isProcessing ? "Transkribujem..." : _.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => _.start(),
              disabled: y || L || !_.isSupported || _.isProcessing,
              children: /* @__PURE__ */ i(Wt, { size: 16 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => F(),
              disabled: y || !o.trim() && h.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ i(Vt, { size: 14 })
            }
          )
        ] })
      ] }),
      X && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: X })
    ] })
  ] });
}
function Ea({
  isOpen: t,
  onClick: e,
  unreadCount: a = 0,
  config: n
}) {
  var h, g, c, m, f, y;
  const o = ((h = n.content) == null ? void 0 : h.launcherIconStyle) || "message-circle", r = typeof ((g = n.content) == null ? void 0 : g.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", s = ((c = n.content) == null ? void 0 : c.launcherShowText) === !0, p = ((m = n.content) == null ? void 0 : m.launcherTextSide) === "left" ? "left" : "right", u = s ? ((y = (f = n.content) == null ? void 0 : f.launcherText) == null ? void 0 : y.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${s ? "has-label" : ""} ${s && p === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && r !== "" ? /* @__PURE__ */ i("img", { src: r, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(o === "sparkles" ? Ti : o === "message-square" ? qt : o === "contact" ? Pi : Bi, { size: 24 }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(he, { size: 22 }) }),
        u && !t && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: u }),
        a > 0 && !t && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
async function Da(t, e, a) {
  const n = (a || "").replace(/\/$/, ""), o = new URLSearchParams({ visitor_id: e }), r = await fetch(`${n}/api/widget/${encodeURIComponent(t)}/tickets?${o}`), s = await r.json().catch(() => null);
  if (!r.ok) throw new Error(s && "error" in s ? s.error : "Tikete nije moguće učitati.");
  return s.data.map((p) => ({
    id: p.id,
    ticketNumber: p.ticket_number,
    isResolved: p.is_resolved,
    updatedAt: p.updated_at,
    messages: (p.messages || []).map((u) => ({
      id: String(u.id),
      content: u.content,
      sender: u.role === "user" ? "user" : "ai",
      timestamp: u.created_at,
      status: "sent"
    }))
  }));
}
function Pa({ config: t, visitorId: e }) {
  const [a, n] = D([]), [o, r] = D("open"), [s, p] = D(!0), [u, l] = D(null);
  ae(() => {
    let g = !0;
    return p(!0), Da(t.companyId, e, t.apiUrl).then((c) => {
      g && n(c);
    }).catch((c) => {
      g && l(c instanceof Error ? c.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      g && p(!1);
    }), () => {
      g = !1;
    };
  }, [t.apiUrl, t.companyId, e]);
  const h = a.filter((g) => o === "open" ? !g.isResolved : g.isResolved);
  return /* @__PURE__ */ i("div", { className: "pitaj-tickets-screen", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
      /* @__PURE__ */ i("button", { className: o === "open" ? "is-active" : "", onClick: () => r("open"), role: "tab", "aria-selected": o === "open", children: "Otvoreni" }),
      /* @__PURE__ */ i("button", { className: o === "closed" ? "is-active" : "", onClick: () => r("closed"), role: "tab", "aria-selected": o === "closed", children: "Zatvoreni" })
    ] }),
    s ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: "Učitavanje tiketa…" }) : u ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: u }) : h.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
      /* @__PURE__ */ i(qt, { size: 32 }),
      /* @__PURE__ */ i("strong", { children: "Nema tiketa" }),
      /* @__PURE__ */ i("span", { children: "Vaši tiketi će biti prikazani ovdje." })
    ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: h.map((g) => /* @__PURE__ */ i("div", { className: "pitaj-ticket-card", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-icon", children: /* @__PURE__ */ i(Kt, { size: 18 }) }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("strong", { children: g.ticketNumber || `Tiket #${g.id}` }),
        /* @__PURE__ */ i("span", { children: g.isResolved ? "Zatvoren" : "Otvoren" })
      ] })
    ] }, g.id)) })
  ] });
}
const Fa = Ot(() => import("./HistoryScreen-Bgbrikk6.js"), (t) => t.HistoryScreen), Ra = Ot(() => import("./FormActionsScreen-CRLxfcer.js"), (t) => t.FormActionsScreen);
function je(t, e) {
  const a = t.trim(), n = /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a;
  if (!/^#[0-9A-Fa-f]{6}$/.test(n)) return null;
  const o = Number.parseInt(n.slice(1, 3), 16), r = Number.parseInt(n.slice(3, 5), 16), s = Number.parseInt(n.slice(5, 7), 16);
  return `rgba(${o}, ${r}, ${s}, ${e})`;
}
function Xt(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? {
    r: Number.parseInt(a.slice(1, 3), 16),
    g: Number.parseInt(a.slice(3, 5), 16),
    b: Number.parseInt(a.slice(5, 7), 16)
  } : null;
}
function Ua(t, e, a) {
  const n = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(a)}`;
}
function ye(t) {
  const e = Xt(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function Ha(t) {
  const e = Xt(t);
  if (!e) return t;
  const a = ye(t) === "#111827", n = a ? 0.2 : 0.16, o = a ? 0 : 255;
  return Ua(
    e.r + (o - e.r) * n,
    e.g + (o - e.g) * n,
    e.b + (o - e.b) * n
  );
}
function Oa({
  config: t,
  startOpen: e = !1,
  initialScreen: a = "new-conversation",
  onEvent: n,
  isInline: o = !1
}) {
  var v, A, H, U, T;
  const {
    config: r,
    setConfig: s,
    isOpen: p,
    setIsOpen: u,
    screen: l,
    setScreen: h,
    conversations: g,
    activeConversation: c,
    totalUnread: m,
    isStreaming: f,
    rateLimitTimer: y,
    errorBanner: L,
    selectConversation: _,
    startNewConversation: M,
    endConversation: w,
    deleteConversation: $,
    sendUserMessage: d,
    submitSatisfaction: E,
    visitorContact: S,
    visitorId: F,
    activeConversationId: K,
    appendConversationMessage: O,
    handleApiError: G
  } = Ai(t, {
    startOpen: e,
    initialScreen: a,
    emitEvent: n,
    onActionTrigger: (x) => {
      if (Z(!0), u(!0), (l === "history" || l === "new-conversation") && h("conversation"), x.widget_id || x.widget)
        return;
      const B = Number(x.id), N = Number(x.form_id), I = Number.isInteger(B) && B > 0 ? B : null, ne = Number.isInteger(N) && N > 0 ? -N : null;
      k(I ?? ne);
    }
  }), R = ee(a), X = ee(e), [re, Z] = D(e), [Q, k] = D(null), C = r.formsEnabled === !0 && r.formsAvailable !== !1, V = ue(() => {
    var N, I;
    const x = r.actions || [];
    if (x.length > 0 && typeof ((N = x[0]) == null ? void 0 : N.id) == "number")
      return x[0].id;
    const B = r.forms || [];
    return B.length > 0 && typeof ((I = B[0]) == null ? void 0 : I.id) == "number" ? -B[0].id : null;
  }, [r.actions, r.forms]), j = ue(() => ({
    open: () => {
      Z(!0), u(!0);
    },
    close: () => u(!1),
    toggle: () => {
      p || Z(!0), u(!p);
    },
    startConversation: (x) => {
      Z(!0), u(!0), x && x.trim() ? M(x.trim()) : h("new-conversation");
    },
    setScreen: (x) => h(x),
    setConfig: (x) => {
      s({
        ...r,
        ...x,
        colors: { ...r.colors || {}, ...x.colors || {} },
        content: { ...r.content || {}, ...x.content || {} },
        features: { ...r.features || {}, ...x.features || {} }
      });
    }
  }), [r, p, u, h, M, s]), z = ee({});
  jt(z.current, j), ae(() => () => jt(z.current, null), []), ae(() => {
    a !== R.current && (R.current = a, h(a));
  }, [a, h]), ae(() => {
    e !== X.current && (X.current = e, e && Z(!0), u(e));
  }, [e, u]), ae(() => {
    if (l === "forms") {
      C && V !== null && k(V), h("new-conversation");
      return;
    }
    l === "contact" && h("new-conversation");
  }, [V, C, l, h]);
  const W = ue(() => {
    var ne, P;
    const x = r.colors || {}, B = ((ne = r.content) == null ? void 0 : ne.themeMode) === "dark" ? "dark" : "light", N = {};
    if (x.primaryColor) {
      N["--pitaj-accent"] = x.primaryColor, N["--pitaj-bubble-user"] = x.primaryColor, N["--pitaj-accent-hover"] = Ha(x.primaryColor), N["--pitaj-accent-contrast"] = ye(x.primaryColor), N["--pitaj-bubble-user-fg"] = ye(x.primaryColor);
      const se = je(x.primaryColor, 0.1), le = je(x.primaryColor, 0.16), Me = je(x.primaryColor, 0.35);
      se && (N["--pitaj-accent-soft"] = se), le && (N["--pitaj-accent-soft-strong"] = le), Me && (N["--pitaj-accent-ring"] = Me);
    }
    if (x.headerBg && (N["--pitaj-header-bg"] = x.headerBg), x.headerFg) {
      N["--pitaj-header-fg"] = x.headerFg;
      const se = je(x.headerFg, 0.1);
      se && (N["--pitaj-header-icon-hover"] = se);
    }
    N["--pitaj-chrome-border"] = B === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", x.surfaceBg && (N["--pitaj-surface"] = x.surfaceBg), x.subtle ? N["--pitaj-surface-subtle"] = x.subtle : x.surfaceBg && (N["--pitaj-surface-subtle"] = je(x.surfaceBg, 0.9) || x.surfaceBg), x.bubbleAiBg && (N["--pitaj-bubble-ai"] = x.bubbleAiBg), x.textFg && (N["--pitaj-bubble-ai-fg"] = x.textFg), x.textFg && (N["--pitaj-fg"] = x.textFg), x.mutedFg && (N["--pitaj-muted"] = x.mutedFg), x.border && (N["--pitaj-border"] = x.border), x.hover && (N["--pitaj-hover"] = x.hover), x.sendAccent && (N["--pitaj-send-accent"] = x.sendAccent, N["--pitaj-send-accent-contrast"] = ye(x.sendAccent));
    const I = (P = r.content) == null ? void 0 : P.launcherButtonColor;
    return I && (N["--pitaj-launcher-bg"] = I, N["--pitaj-launcher-fg"] = ye(I)), N;
  }, [r.colors, (v = r.content) == null ? void 0 : v.themeMode, (A = r.content) == null ? void 0 : A.launcherButtonColor]), b = `pos-${r.position || "bottom-right"}`;
  return r.enabled === !1 ? /* @__PURE__ */ i(oe, {}) : /* @__PURE__ */ i(
    "div",
    {
      className: `pitaj-root ${b} ${o ? "is-inline" : ""} ${o && ((H = r.content) != null && H.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: W,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-window ${p ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !p,
            children: [
              /* @__PURE__ */ i(
                ca,
                {
                  screen: l,
                  activeConversation: c,
                  config: r,
                  onBack: () => {
                    h("new-conversation");
                  },
                  onClose: () => u(!1),
                  onNewConversation: () => h("new-conversation"),
                  onEndConversation: w,
                  onDeleteConversation: ((U = r.content) == null ? void 0 : U.deleteConversationsEnabled) !== !1 && c ? () => $(c.id) : void 0,
                  onViewHistory: () => h("history"),
                  onViewTickets: () => h("tickets")
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                l === "conversation" && c && /* @__PURE__ */ i(
                  La,
                  {
                    conversation: c,
                    config: r,
                    isStreaming: f,
                    rateLimitCountdown: y,
                    errorBanner: L,
                    onSendMessage: d,
                    onApiError: G,
                    onSubmitSatisfaction: (x) => E(c.id, x)
                  }
                ),
                l === "new-conversation" && /* @__PURE__ */ i(
                  Ba,
                  {
                    config: r,
                    openedByUser: re,
                    onStart: (x) => {
                      M(x);
                    },
                    onApiError: G
                  }
                ),
                l === "history" && /* @__PURE__ */ i(
                  Fa,
                  {
                    conversations: g,
                    config: r,
                    onSelectConversation: _,
                    onNewConversation: () => h("new-conversation"),
                    onDeleteConversation: ((T = r.content) == null ? void 0 : T.deleteConversationsEnabled) !== !1 ? $ : void 0
                  }
                ),
                l === "tickets" && /* @__PURE__ */ i(Pa, { config: r, visitorId: F }),
                (l === "conversation" || l === "new-conversation") && C && Q !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  Ra,
                  {
                    embedded: !0,
                    config: r,
                    widgetId: r.companyId,
                    activeConversationId: K,
                    initialActionId: Q,
                    visitorContact: S,
                    onApiError: G,
                    blockedReason: y !== null ? `Sačekajte ${y}s prije novog zahtjeva.` : null,
                    onSubmitted: (x) => {
                      O(K, x, "user");
                    },
                    onBack: () => k(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        /* @__PURE__ */ i(
          Ea,
          {
            isOpen: p,
            onClick: () => {
              p || Z(!0), u(!p);
            },
            unreadCount: m,
            config: r
          }
        )
      ]
    }
  );
}
const J = {
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
    showInlineLauncher: !1
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
function Va(t) {
  const e = t.trim();
  if (!/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const a = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * n + 0.0722 * o) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function qa(t, e) {
  if (typeof t != "string") return e;
  const a = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : e;
}
function Ka(t) {
  const e = t.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(a.slice(1, 3), 16) / 255, o = Number.parseInt(a.slice(3, 5), 16) / 255, r = Number.parseInt(a.slice(5, 7), 16) / 255, s = Math.max(n, o, r), p = Math.min(n, o, r), u = s - p;
  let l = 0;
  const h = (s + p) / 2, g = u === 0 ? 0 : u / (1 - Math.abs(2 * h - 1));
  if (u !== 0)
    switch (s) {
      case n:
        l = (o - r) / u % 6;
        break;
      case o:
        l = (r - n) / u + 2;
        break;
      default:
        l = (n - o) / u + 4;
        break;
    }
  return { h: Math.round((l * 60 + 360) % 360), s: Math.round(g * 100), l: Math.round(h * 100) };
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
function Za(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const a = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(a.fields) ? a.fields : []).filter((r) => typeof r == "object" && r !== null).map((r) => ({
      key: typeof r.key == "string" ? r.key : "",
      type: Wa(r.type),
      label: typeof r.label == "string" ? r.label : "",
      required: r.required === !0,
      placeholder: typeof r.placeholder == "string" ? r.placeholder : void 0,
      options: Array.isArray(r.options) ? r.options.filter((s) => typeof s == "string" && s.trim() !== "") : void 0,
      accept: Array.isArray(r.accept) ? r.accept.filter((s) => typeof s == "string" && s.trim() !== "") : void 0,
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
function Ga(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function Ya(t, e) {
  var n, o, r, s, p, u, l, h, g;
  if (t === "default")
    return { ...J, companyId: t || "default" };
  const a = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const c = `${a}/api/widget/${t}/config`, m = await fetch(c, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!m.ok) {
      if (m.status === 403) {
        const T = await m.json().catch(() => null);
        if ((T == null ? void 0 : T.code) === "COUNTRY_BLOCKED" || T != null && T.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...J,
            companyId: t,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${m.status}), using defaults.`), { ...J, companyId: t, apiUrl: a };
    }
    const f = await m.json(), y = f.accent_color || ((n = J.colors) == null ? void 0 : n.primaryColor) || "#2563eb", L = Array.isArray(f.suggested_questions) ? f.suggested_questions.filter((T) => typeof T == "string" && T.trim() !== "").slice(0, 4) : [], _ = Array.isArray(f.contact_fields) ? f.contact_fields.filter(
      (T) => T === "name" || T === "email" || T === "phone"
    ) : [], w = (Array.isArray(f.channels) ? f.channels : []).find(
      (T) => typeof T == "object" && T !== null && T.channel === "chat_bubble"
    ), $ = (w == null ? void 0 : w.enabled) !== !1, d = f.widget_content && typeof f.widget_content == "object" ? f.widget_content : null, E = Array.isArray(d == null ? void 0 : d.suggested_message_rows) ? d.suggested_message_rows.filter((T) => typeof T == "object" && T !== null).map((T) => {
      const x = typeof T.text == "string" ? T.text.trim() : "", B = Array.isArray(T.children) ? T.children.filter((N) => typeof N == "string" && N.trim() !== "") : [];
      return {
        text: x,
        children: B.length > 0 ? B : void 0
      };
    }).filter((T) => T.text !== "").slice(0, 4) : [], S = {
      avatarBorder: (d == null ? void 0 : d.avatar_border) !== !1,
      messagePlaceholder: typeof (d == null ? void 0 : d.message_placeholder) == "string" && d.message_placeholder.trim() !== "" ? d.message_placeholder : J.placeholder,
      dismissibleNotice: typeof (d == null ? void 0 : d.dismissible_notice) == "string" ? d.dismissible_notice : "",
      footerText: typeof (d == null ? void 0 : d.footer_text) == "string" ? d.footer_text : "",
      attachmentsEnabled: (d == null ? void 0 : d.attachments_enabled) === !0,
      voiceToTextEnabled: (d == null ? void 0 : d.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (d == null ? void 0 : d.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (d == null ? void 0 : d.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (d == null ? void 0 : d.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (d == null ? void 0 : d.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (d == null ? void 0 : d.keep_showing_suggested_messages) === !0,
      suggestedMessageRows: E,
      useDifferentMessageMobile: (d == null ? void 0 : d.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (d == null ? void 0 : d.mobile_welcome_message) == "string" ? d.mobile_welcome_message : "",
      autoShowInitialMessages: (d == null ? void 0 : d.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (d == null ? void 0 : d.auto_show_duration_seconds) == "number" ? Math.max(0, d.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (d == null ? void 0 : d.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (d == null ? void 0 : d.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (d == null ? void 0 : d.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, d.mobile_auto_show_duration_seconds) : null,
      themeMode: (d == null ? void 0 : d.theme_mode) === "dark" ? "dark" : "light",
      tintedGrayscaleEnabled: (d == null ? void 0 : d.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (d == null ? void 0 : d.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (d == null ? void 0 : d.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (d == null ? void 0 : d.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (d == null ? void 0 : d.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(d.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (d == null ? void 0 : d.tinted_grayscale_tint) == "number" ? Math.max(-100, Math.min(100, Math.round(d.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (d == null ? void 0 : d.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(d.tinted_grayscale_shade))) : 0,
      launcherButtonColor: qa(d == null ? void 0 : d.launcher_button_color, "#05070c"),
      launcherIconStyle: (d == null ? void 0 : d.launcher_icon_style) === "sparkles" || (d == null ? void 0 : d.launcher_icon_style) === "message-square" || (d == null ? void 0 : d.launcher_icon_style) === "contact" || (d == null ? void 0 : d.launcher_icon_style) === "custom" ? d.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (d == null ? void 0 : d.launcher_icon_url) == "string" ? d.launcher_icon_url : "",
      launcherShowText: (d == null ? void 0 : d.launcher_show_text) === !0,
      launcherText: typeof (d == null ? void 0 : d.launcher_text) == "string" ? d.launcher_text : "",
      launcherTextSide: (d == null ? void 0 : d.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (d == null ? void 0 : d.show_inline_launcher) === !0,
      guardrails: d == null ? void 0 : d.guardrails
    }, F = S.themeMode === "dark" ? "dark" : "light", K = S.accentColorEnabled !== !1, O = S.accentColorForHeaderEnabled === !0, G = S.accentColorForSendIconEnabled === !0, R = S.tintedGrayscaleEnabled === !0, X = S.tintedGrayscaleHue ?? 0, re = S.tintedGrayscaleTint ?? 0, Z = S.tintedGrayscaleShade ?? 0, Q = K ? y : F === "dark" ? "#9ca3af" : "#6b7280", C = (Ka(Q).h + X + 360) % 360, V = Math.max(0, Math.min(46, 10 + re * 0.36)), j = Math.max(-24, Math.min(24, Z * 0.24)), z = F === "dark" ? {
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
    if (O && (z.headerBg = Q, z.headerFg = Va(Q)), R) {
      const T = F === "dark" ? Math.max(8, Math.min(20, 12 + j)) : Math.max(88, Math.min(97, 95 + j * 0.22)), x = F === "dark" ? Math.max(10, Math.min(24, 16 + j)) : Math.max(80, Math.min(94, 89 + j * 0.35)), B = F === "dark" ? Math.max(11, Math.min(26, 18 + j * 0.9)) : Math.max(83, Math.min(95, x + 3)), N = F === "dark" ? Math.max(22, Math.min(40, 30 + j)) : Math.max(70, Math.min(88, 82 + j * 0.38)), I = F === "dark" ? Math.max(16, Math.min(30, 22 + j)) : Math.max(78, Math.min(92, x - 2));
      z.surfaceBg = `hsl(${C} ${V}% ${T}%)`, z.bubbleAiBg = `hsl(${C} ${Math.max(0, V - 2)}% ${B}%)`, z.subtle = `hsl(${C} ${Math.max(0, V - 4)}% ${x}%)`, z.border = `hsl(${C} ${Math.max(0, V - 5)}% ${N}%)`, z.hover = `hsl(${C} ${Math.max(0, V - 3)}% ${I}%)`;
    }
    const W = Za(f.forms), b = Ga(f.actions).filter(
      (T) => W.some((x) => x.id === T.form_id)
    ), v = f.forms_enabled === !0 && W.length > 0 && b.length > 0, A = f.chat_available !== !1, H = f.transcribe_available !== !1 && A, U = f.forms_available !== !1 && v;
    return {
      ...J,
      companyId: t,
      enabled: $,
      apiUrl: a,
      name: f.company_name || J.name,
      title: f.bot_name || J.title,
      avatar: typeof (d == null ? void 0 : d.avatar_url) == "string" && d.avatar_url.trim() !== "" ? d.avatar_url : J.avatar,
      welcomeHeadline: f.bot_name ? `Ćaskajte sa ${f.bot_name}` : J.welcomeHeadline,
      welcomeMessage: f.welcome_message || J.welcomeMessage,
      placeholder: S.messagePlaceholder || J.placeholder,
      suggestedQuestions: L,
      contactFields: _.length > 0 ? _ : J.contactFields,
      contact: {
        enabled: typeof ((o = f.contact) == null ? void 0 : o.enabled) == "boolean" ? f.contact.enabled : (r = J.contact) == null ? void 0 : r.enabled,
        title: typeof ((s = f.contact) == null ? void 0 : s.title) == "string" && f.contact.title.trim() !== "" ? f.contact.title : (p = J.contact) == null ? void 0 : p.title,
        subtitle: typeof ((u = f.contact) == null ? void 0 : u.subtitle) == "string" && f.contact.subtitle.trim() !== "" ? f.contact.subtitle : (l = J.contact) == null ? void 0 : l.subtitle,
        submitLabel: typeof ((h = f.contact) == null ? void 0 : h.submit_label) == "string" && f.contact.submit_label.trim() !== "" ? f.contact.submit_label : (g = J.contact) == null ? void 0 : g.submitLabel
      },
      poweredBy: f.show_branding !== void 0 ? f.show_branding : J.poweredBy,
      position: f.position || J.position,
      accentGradient: Array.isArray(f.accent_gradient) ? f.accent_gradient : [],
      content: {
        ...J.content || {},
        ...S
      },
      chatAvailable: A,
      transcribeAvailable: H,
      formsAvailable: U,
      formsEnabled: v,
      forms: W,
      actions: b,
      colors: {
        ...J.colors,
        primaryColor: Q,
        bubbleUserBg: Q,
        sendAccent: G ? Q : F === "dark" ? "#e5e7eb" : "#111827",
        headerBg: z.headerBg,
        headerFg: z.headerFg,
        surfaceBg: z.surfaceBg,
        bubbleAiBg: z.bubbleAiBg,
        textFg: z.textFg,
        mutedFg: z.mutedFg,
        border: z.border,
        hover: z.hover,
        subtle: z.subtle
      }
    };
  } catch (c) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", c), { ...J, companyId: t, apiUrl: a, mockMode: !1 };
  }
}
const Qa = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .1);--pitaj-accent-soft-strong: rgba(37, 99, 235, .16);--pitaj-accent-ring: rgba(37, 99, 235, .35);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #05070c;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon-hover: rgba(15, 23, 42, .1);--pitaj-chrome-border: #d1d5db;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f3f4f6;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #111827;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #6b7280;--pitaj-border: #e5e7eb;--pitaj-hover: #f3f4f6;--pitaj-card-border: #e5e7eb;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .14);--pitaj-success: #10b981;--pitaj-radius: 22px;--pitaj-shadow: 0 30px 70px -26px rgba(15, 23, 42, .42), 0 14px 28px -20px rgba(15, 23, 42, .35);--pitaj-font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;display:block;font-family:var(--pitaj-font);font-size:14px;line-height:1.5;color:var(--pitaj-fg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;gap:12px;pointer-events:none}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:100%;height:100%;min-height:0;max-height:100%;align-items:center!important;gap:8px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline:not(.show-inline-launcher) .pitaj-launcher-btn{display:none!important}.pitaj-root.is-inline.show-inline-launcher .pitaj-launcher-btn{align-self:flex-end;margin-right:8px}.pitaj-root.is-inline.show-inline-launcher .pitaj-window{height:calc(100% - 62px);max-height:calc(100% - 62px)}.pitaj-root.is-inline .pitaj-window{position:relative;width:min(100%,410px);height:auto;flex:1 1 auto;min-height:0;max-width:410px;max-height:100%;transform:none!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important}.pitaj-root.pos-bottom-right{bottom:24px;right:24px;align-items:flex-end}.pitaj-root.pos-bottom-left{bottom:24px;left:24px;align-items:flex-start}.pitaj-root.pos-top-right{top:24px;right:24px;align-items:flex-end;flex-direction:column-reverse}.pitaj-root.pos-top-left{top:24px;left:24px;align-items:flex-start;flex-direction:column-reverse}.pitaj-window{width:410px;height:min(655px,calc(100vh - 48px));max-width:calc(100vw - 32px);max-height:min(655px,calc(100vh - 48px));background-color:var(--pitaj-surface);border-radius:18px;filter:drop-shadow(0 22px 40px rgba(15,23,42,.22)) drop-shadow(0 8px 18px rgba(15,23,42,.16));border:1px solid var(--pitaj-border);display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:all .28s cubic-bezier(.16,1,.3,1);opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.92) translateY(16px);pointer-events:none;visibility:hidden}.pitaj-header{background:var(--pitaj-header-bg);color:var(--pitaj-header-fg);padding:16px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-border);flex-shrink:0}.pitaj-header-info{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.pitaj-avatar{width:30px;height:30px;border-radius:999px;background:transparent;display:flex;align-items:center;justify-content:center;color:var(--pitaj-fg);flex-shrink:0;overflow:hidden}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg)}.pitaj-avatar.with-border{border:1.5px solid var(--pitaj-chrome-border);background-color:transparent}.pitaj-avatar.no-border{border:none}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:cover}.pitaj-header-text{min-width:0;flex:1}.pitaj-header-title{font-size:16px;font-weight:600;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-header-actions{display:flex;align-items:center;gap:6px}.pitaj-icon-btn{width:30px;height:30px;min-width:30px;min-height:30px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:999px;display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:background-color .15s,color .15s,border-color .15s;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-fg)}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-hover);border-color:var(--pitaj-chrome-border);color:var(--pitaj-header-fg)}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:38px;right:0;min-width:200px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:12px;box-shadow:0 10px 30px #0000002e;padding:6px;z-index:30;animation:pitaj-menu-in .15s ease}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:8px;font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;padding:16px;background:var(--pitaj-surface)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:4px;margin-bottom:18px;border:1px solid var(--pitaj-border);border-radius:14px;background:var(--pitaj-hover)}.pitaj-ticket-tabs button{padding:12px;border-radius:10px;color:var(--pitaj-muted);font-weight:600}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);box-shadow:0 1px 4px #00000014}.pitaj-tickets-empty{min-height:430px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:var(--pitaj-muted);text-align:center}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:24px}.pitaj-ticket-list{display:grid;gap:8px}.pitaj-ticket-card{display:flex;align-items:center;gap:12px;padding:14px;border:1px solid var(--pitaj-border);border-radius:12px}.pitaj-ticket-card-icon{color:var(--pitaj-accent)}.pitaj-ticket-card div:last-child{display:grid;gap:4px}.pitaj-ticket-card span{color:var(--pitaj-muted);font-size:12px}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{width:26px;height:26px;border-radius:50%;background-color:transparent;color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-bottom:2px;overflow:hidden}.pitaj-msg-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:cover}.pitaj-msg-body{display:flex;flex-direction:column;max-width:82%;gap:3px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-bubble{padding:12px 16px;font-size:13.5px;line-height:1.5;border-radius:22px;word-break:break-word}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);box-shadow:none;border-bottom-left-radius:22px}.pitaj-msg-row.user .pitaj-msg-bubble{background-color:var(--pitaj-bubble-user);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:4px}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:18px}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12px;background-color:#00000014;padding:2px 5px;border-radius:4px}.pitaj-markdown pre{background-color:#1e293b;color:#f8fafc;padding:10px 12px;border-radius:8px;overflow-x:auto;margin:6px 0;font-size:12px}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:18px;margin:6px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:2px}.pitaj-markdown a:hover{opacity:.85}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:4px}.pitaj-sources-title{font-size:10px;font-weight:600;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:5px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:6px;padding:4px 8px;font-size:11px;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover)}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-accent);color:var(--pitaj-accent);border-radius:999px;padding:5px 12px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s ease}.pitaj-followup-chip:hover{background-color:var(--pitaj-accent-hover);color:var(--pitaj-accent-contrast)}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:999px;padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:999px;background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:16px!important;height:16px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active,.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-typing-indicator{display:flex;align-items:center;gap:4px;padding:10px 14px;background-color:var(--pitaj-bubble-ai);border-radius:16px 16px 16px 4px;width:fit-content}.pitaj-typing-dot{width:6px;height:6px;border-radius:50%;background-color:var(--pitaj-muted);animation:pitaj-bounce 1.4s infinite ease-in-out both}.pitaj-typing-dot:nth-child(1){animation-delay:-.32s}.pitaj-typing-dot:nth-child(2){animation-delay:-.16s}@keyframes pitaj-bounce{0%,80%,to{transform:scale(0);opacity:.4}40%{transform:scale(1);opacity:1}}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:8px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:10px 10px 0 0;background-color:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 10px 20px;margin-bottom:-14px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:transparent;border:1.5px solid var(--pitaj-border);border-radius:999px;min-height:48px;padding:7px 8px 7px 14px;transition:border-color .15s ease,box-shadow .15s ease;position:relative;z-index:2}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{border-color:var(--pitaj-fg);box-shadow:0 0 0 2px #11182714}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:20px;max-height:100px;resize:none;font-size:14px;color:var(--pitaj-fg);line-height:1.4;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:36px;height:36px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:background-color .15s ease,color .15s ease,border-color .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2px;min-height:3px;border-radius:999px;background-color:var(--pitaj-fg);transition:height 80ms linear}.pitaj-mic-btn{width:28px;height:28px;border-radius:999px;color:var(--pitaj-fg);border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;transition:background-color .15s ease,color .15s ease,border-color .15s ease}.pitaj-mic-btn:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border);color:var(--pitaj-fg)}.pitaj-send-btn{width:26px;height:26px;border-radius:50%;border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);color:var(--pitaj-send-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s ease,border-color .15s ease}.pitaj-send-btn:hover:not(:disabled){border-color:var(--pitaj-send-accent);background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);transform:scale(1.04)}.pitaj-send-btn:disabled{opacity:.8;color:var(--pitaj-muted);background-color:var(--pitaj-surface-subtle);cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-fg);font-weight:500;text-decoration:none}.pitaj-footer a:hover{text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:8px}.pitaj-suggestion-pill{max-width:min(100%,280px);padding:8px 16px;border-radius:999px;border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:13px;font-weight:500;color:var(--pitaj-fg);transition:all .15s ease;text-align:left;white-space:normal}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:12px;background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:999px;border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:7px;padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:8px;overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:10px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:999px;padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:8px;background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:10px;background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:7px;color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:7px;font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:8px;border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-btn{position:relative;width:54px;height:54px;min-width:54px;min-height:54px;max-width:54px;max-height:54px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:50%;padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(15,23,42,.18);filter:drop-shadow(0 12px 22px rgba(15,23,42,.3)) drop-shadow(0 4px 10px rgba(15,23,42,.2));cursor:pointer;pointer-events:auto;transition:transform .2s cubic-bezier(.34,1.56,.64,1),filter .2s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);filter:drop-shadow(0 14px 26px rgba(15,23,42,.34)) drop-shadow(0 6px 12px rgba(15,23,42,.24))}.pitaj-launcher-btn:active{transform:scale(.95)}.pitaj-launcher-btn.is-open{width:54px;height:54px;min-width:54px;min-height:54px;max-width:54px;max-height:54px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:50%}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:54px;max-width:none;height:54px;min-height:54px;max-height:54px;aspect-ratio:auto;padding:0 18px;border-radius:999px}.pitaj-launcher-btn.has-label.is-open{width:54px;min-width:54px;height:54px;min-height:54px;max-width:54px;max-height:54px;aspect-ratio:1 / 1;padding:0;border-radius:50%}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:13px;font-weight:600;line-height:1}.pitaj-launcher-icon{display:flex;align-items:center;justify-content:center;transition:all .25s ease}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon,.is-open .pitaj-launcher-icon.open-icon{display:none}.is-open .pitaj-launcher-icon.close-icon{display:flex}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;width:20px;height:20px;border-radius:50%;background-color:#ef4444;color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid #ffffff;box-shadow:0 2px 6px #ef444466}@media(max-width:480px){.pitaj-root.pos-bottom-right,.pitaj-root.pos-bottom-left{bottom:0;right:0;left:0;top:0;align-items:stretch;justify-content:flex-end}.pitaj-window{width:100vw;height:100vh;max-width:100vw;max-height:100vh;border-radius:0;border:none}.pitaj-launcher-btn{position:fixed;bottom:20px;right:20px}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:0}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:12px;padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:7px;border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:8px;cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:6px;object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:6px;object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:14px;cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:8px;overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}', ge = {};
function ei(t, e) {
  (ge[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function Ja(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, document.body.appendChild(e)), e;
}
function Xa(t, e) {
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
const $e = /* @__PURE__ */ new WeakMap();
async function We(t, e = {}) {
  const a = $e.get(t), n = async () => {
    const r = e.widgetId || e.companyId || "default", s = await Ya(r, e.apiUrl), p = Xa(s, e);
    if (p.enabled === !1 || p.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let u = t.shadowRoot;
    u || (u = t.attachShadow({ mode: "open" })), u.innerHTML = "";
    const l = document.createElement("style");
    l.textContent = Qa, u.appendChild(l);
    const h = document.createElement("div");
    h.className = "pitaj-shadow-mount", u.appendChild(h), st(
      /* @__PURE__ */ i(
        Oa,
        {
          config: p,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          initialScreen: e.initialScreen,
          onEvent: ei
        }
      ),
      h
    );
    const g = de();
    return g && (t.__pitajController = g), {
      controller: g,
      unmount: () => {
        st(null, h), u && (u.innerHTML = "");
      }
    };
  }, o = (a || Promise.resolve()).then(n, n);
  $e.set(t, o);
  try {
    return await o;
  } finally {
    $e.get(t) === o && $e.delete(t);
  }
}
let ve = null;
const Se = {
  mount: async (t, e) => {
    const a = await We(t, e);
    return ve = a.unmount, a;
  },
  unmount: () => {
    ve && (ve(), ve = null);
  },
  init: async (t) => {
    const e = Ja(t.containerId || "pitaj-io-widget-root"), a = await We(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return ve = a.unmount, a;
  },
  open: () => {
    var t;
    return (t = de()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = de()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = de()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = de()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = de()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = de()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = de()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    ge[t] || (ge[t] = []), ge[t].push(e);
  },
  off: (t, e) => {
    ge[t] && (ge[t] = ge[t].filter((a) => a !== e));
  },
  emit: (t, e) => {
    ei(t, e);
  }
};
class er extends HTMLElement {
  constructor() {
    super(...arguments);
    me(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", r = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", s = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: p } = await We(this, { widgetId: a, apiUrl: n, position: o, startOpen: r, isInline: s });
    this.unmountFn = p;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function yt(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const a = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", r = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: a, position: n, startOpen: o, isInline: r };
}
var _t;
if (typeof window < "u") {
  const t = ((_t = window.PitajIO) == null ? void 0 : _t._q) || [];
  window.PitajIO = Se, customElements.get("pitaj-io") || customElements.define("pitaj-io", er);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, Se.init(e).then(() => {
      t.forEach(({ method: a, args: n }) => {
        const o = Se[a];
        typeof o == "function" && o(...n);
      });
    });
  else {
    const a = document.currentScript;
    let n = yt(a);
    if (!n) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let r = o.length - 1; r >= 0; r--) {
        const s = o[r];
        if (s.src && /widget(\.iife)?\.js/i.test(s.src) && (n = yt(s), n))
          break;
      }
    }
    n && Se.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  ee as A,
  or as C,
  Bi as M,
  we as P,
  oe as S,
  Ki as T,
  ar as U,
  ue as a,
  Li as b,
  xe as c,
  D as d,
  qi as e,
  rr as f,
  nr as g,
  ae as h,
  sr as i,
  ir as j,
  he as k,
  Se as l,
  Ft as t,
  i as u
};
