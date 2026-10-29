var $i = Object.defineProperty;
var Ci = (e, t, a) => t in e ? $i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var At = (e, t, a) => Ci(e, typeof t != "symbol" ? t + "" : t, a);
var ne, tt, ei, $t, Ce, ii, ai, ri, ve, fe, he, Wt = {}, oi = [], Ti = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, se = Array.isArray;
function kt(e, t) {
  for (var a in t) e[a] = t[a];
  return e;
}
function xe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Di(e, t, a) {
  var r, n, o, l = {};
  for (o in t) o == "key" ? r = t[o] : o == "ref" ? n = t[o] : l[o] = t[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ne.call(arguments, 2) : a), typeof e == "function" && e.defaultProps != null) for (o in e.defaultProps) l[o] === void 0 && (l[o] = e.defaultProps[o]);
  return ie(e, l, r, n, null);
}
function ie(e, t, a, r, n) {
  var o = { type: e, props: t, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: n ?? ++ei, __i: -1, __u: 0 };
  return n == null && tt.vnode != null && tt.vnode(o), o;
}
function wt(e) {
  return e.children;
}
function ae(e, t) {
  this.props = e, this.context = t;
}
function Et(e, t) {
  if (t == null) return e.__ ? Et(e.__, e.__i + 1) : null;
  for (var a; t < e.__k.length; t++) if ((a = e.__k[t]) != null && a.__e != null) return a.__e;
  return typeof e.type == "function" ? Et(e) : null;
}
function ni(e) {
  var t, a;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((a = e.__k[t]) != null && a.__e != null) {
      e.__e = e.__c.base = a.__e;
      break;
    }
    return ni(e);
  }
}
function Te(e) {
  (!e.__d && (e.__d = !0) && $t.push(e) && !oe.__r++ || Ce !== tt.debounceRendering) && ((Ce = tt.debounceRendering) || ii)(oe);
}
function oe() {
  for (var e, t, a, r, n, o, l, s = 1; $t.length; ) $t.length > s && $t.sort(ai), e = $t.shift(), s = $t.length, e.__d && (a = void 0, n = (r = (t = e).__v).__e, o = [], l = [], t.__P && ((a = kt({}, r)).__v = r.__v + 1, tt.vnode && tt.vnode(a), we(t.__P, a, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [n] : null, o, n ?? Et(r), !!(32 & r.__u), l), a.__v = r.__v, a.__.__k[a.__i] = a, ci(o, a, l), a.__e != n && ni(a)));
  oe.__r = 0;
}
function si(e, t, a, r, n, o, l, s, f, d, m) {
  var p, h, u, g, y, M, S = r && r.__k || oi, I = t.length;
  for (f = Ei(a, t, S, f, I), p = 0; p < I; p++) (u = a.__k[p]) != null && (h = u.__i === -1 ? Wt : S[u.__i] || Wt, u.__i = p, M = we(e, u, h, n, o, l, s, f, d, m), g = u.__e, u.ref && h.ref != u.ref && (h.ref && ye(h.ref, null, u), m.push(u.ref, u.__c || g, u)), y == null && g != null && (y = g), 4 & u.__u || h.__k === u.__k ? f = pi(u, f, e) : typeof u.type == "function" && M !== void 0 ? f = M : g && (f = g.nextSibling), u.__u &= -7);
  return a.__e = y, f;
}
function Ei(e, t, a, r, n) {
  var o, l, s, f, d, m = a.length, p = m, h = 0;
  for (e.__k = new Array(n), o = 0; o < n; o++) (l = t[o]) != null && typeof l != "boolean" && typeof l != "function" ? (f = o + h, (l = e.__k[o] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? ie(null, l, null, null, null) : se(l) ? ie(wt, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? ie(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, s = null, (d = l.__i = Pi(l, a, f, p)) !== -1 && (p--, (s = a[d]) && (s.__u |= 2)), s == null || s.__v === null ? (d == -1 && (n > m ? h-- : n < m && h++), typeof l.type != "function" && (l.__u |= 4)) : d != f && (d == f - 1 ? h-- : d == f + 1 ? h++ : (d > f ? h-- : h++, l.__u |= 4))) : e.__k[o] = null;
  if (p) for (o = 0; o < m; o++) (s = a[o]) != null && !(2 & s.__u) && (s.__e == r && (r = Et(s)), di(s, s));
  return r;
}
function pi(e, t, a) {
  var r, n;
  if (typeof e.type == "function") {
    for (r = e.__k, n = 0; r && n < r.length; n++) r[n] && (r[n].__ = e, t = pi(r[n], t, a));
    return t;
  }
  e.__e != t && (t && e.type && !a.contains(t) && (t = Et(e)), a.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Pi(e, t, a, r) {
  var n, o, l = e.key, s = e.type, f = t[a];
  if (f === null && e.key == null || f && l == f.key && s === f.type && !(2 & f.__u)) return a;
  if (r > (f != null && !(2 & f.__u) ? 1 : 0)) for (n = a - 1, o = a + 1; n >= 0 || o < t.length; ) {
    if (n >= 0) {
      if ((f = t[n]) && !(2 & f.__u) && l == f.key && s === f.type) return n;
      n--;
    }
    if (o < t.length) {
      if ((f = t[o]) && !(2 & f.__u) && l == f.key && s === f.type) return o;
      o++;
    }
  }
  return -1;
}
function De(e, t, a) {
  t[0] == "-" ? e.setProperty(t, a ?? "") : e[t] = a == null ? "" : typeof a != "number" || Ti.test(t) ? a : a + "px";
}
function Qt(e, t, a, r, n) {
  var o;
  t: if (t == "style") if (typeof a == "string") e.style.cssText = a;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) a && t in a || De(e.style, t, "");
    if (a) for (t in a) r && a[t] === r[t] || De(e.style, t, a[t]);
  }
  else if (t[0] == "o" && t[1] == "n") o = t != (t = t.replace(ri, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = a, a ? r ? a.t = r.t : (a.t = ve, e.addEventListener(t, o ? he : fe, o)) : e.removeEventListener(t, o ? he : fe, o);
  else {
    if (n == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = a ?? "";
      break t;
    } catch {
    }
    typeof a == "function" || (a == null || a === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && a == 1 ? "" : a));
  }
}
function Ee(e) {
  return function(t) {
    if (this.l) {
      var a = this.l[t.type + e];
      if (t.u == null) t.u = ve++;
      else if (t.u < a.t) return;
      return a(tt.event ? tt.event(t) : t);
    }
  };
}
function we(e, t, a, r, n, o, l, s, f, d) {
  var m, p, h, u, g, y, M, S, I, R, k, c, w, z, C, F, U, A = t.type;
  if (t.constructor !== void 0) return null;
  128 & a.__u && (f = !!(32 & a.__u), o = [s = t.__e = a.__e]), (m = tt.__b) && m(t);
  t: if (typeof A == "function") try {
    if (S = t.props, I = "prototype" in A && A.prototype.render, R = (m = A.contextType) && r[m.__c], k = m ? R ? R.props.value : m.__ : r, a.__c ? M = (p = t.__c = a.__c).__ = p.__E : (I ? t.__c = p = new A(S, k) : (t.__c = p = new ae(S, k), p.constructor = A, p.render = Ui), R && R.sub(p), p.props = S, p.state || (p.state = {}), p.context = k, p.__n = r, h = p.__d = !0, p.__h = [], p._sb = []), I && p.__s == null && (p.__s = p.state), I && A.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = kt({}, p.__s)), kt(p.__s, A.getDerivedStateFromProps(S, p.__s))), u = p.props, g = p.state, p.__v = t, h) I && A.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), I && p.componentDidMount != null && p.__h.push(p.componentDidMount);
    else {
      if (I && A.getDerivedStateFromProps == null && S !== u && p.componentWillReceiveProps != null && p.componentWillReceiveProps(S, k), !p.__e && (p.shouldComponentUpdate != null && p.shouldComponentUpdate(S, p.__s, k) === !1 || t.__v == a.__v)) {
        for (t.__v != a.__v && (p.props = S, p.state = p.__s, p.__d = !1), t.__e = a.__e, t.__k = a.__k, t.__k.some(function(T) {
          T && (T.__ = t);
        }), c = 0; c < p._sb.length; c++) p.__h.push(p._sb[c]);
        p._sb = [], p.__h.length && l.push(p);
        break t;
      }
      p.componentWillUpdate != null && p.componentWillUpdate(S, p.__s, k), I && p.componentDidUpdate != null && p.__h.push(function() {
        p.componentDidUpdate(u, g, y);
      });
    }
    if (p.context = k, p.props = S, p.__P = e, p.__e = !1, w = tt.__r, z = 0, I) {
      for (p.state = p.__s, p.__d = !1, w && w(t), m = p.render(p.props, p.state, p.context), C = 0; C < p._sb.length; C++) p.__h.push(p._sb[C]);
      p._sb = [];
    } else do
      p.__d = !1, w && w(t), m = p.render(p.props, p.state, p.context), p.state = p.__s;
    while (p.__d && ++z < 25);
    p.state = p.__s, p.getChildContext != null && (r = kt(kt({}, r), p.getChildContext())), I && !h && p.getSnapshotBeforeUpdate != null && (y = p.getSnapshotBeforeUpdate(u, g)), F = m, m != null && m.type === wt && m.key == null && (F = li(m.props.children)), s = si(e, se(F) ? F : [F], t, a, r, n, o, l, s, f, d), p.base = t.__e, t.__u &= -161, p.__h.length && l.push(p), M && (p.__E = p.__ = null);
  } catch (T) {
    if (t.__v = null, f || o != null) if (T.then) {
      for (t.__u |= f ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      o[o.indexOf(s)] = null, t.__e = s;
    } else for (U = o.length; U--; ) xe(o[U]);
    else t.__e = a.__e, t.__k = a.__k;
    tt.__e(T, t, a);
  }
  else o == null && t.__v == a.__v ? (t.__k = a.__k, t.__e = a.__e) : s = t.__e = Bi(a.__e, t, a, r, n, o, l, f, d);
  return (m = tt.diffed) && m(t), 128 & t.__u ? void 0 : s;
}
function ci(e, t, a) {
  for (var r = 0; r < a.length; r++) ye(a[r], a[++r], a[++r]);
  tt.__c && tt.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      tt.__e(o, n.__v);
    }
  });
}
function li(e) {
  return typeof e != "object" || e == null ? e : se(e) ? e.map(li) : kt({}, e);
}
function Bi(e, t, a, r, n, o, l, s, f) {
  var d, m, p, h, u, g, y, M = a.props, S = t.props, I = t.type;
  if (I == "svg" ? n = "http://www.w3.org/2000/svg" : I == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (d = 0; d < o.length; d++) if ((u = o[d]) && "setAttribute" in u == !!I && (I ? u.localName == I : u.nodeType == 3)) {
      e = u, o[d] = null;
      break;
    }
  }
  if (e == null) {
    if (I == null) return document.createTextNode(S);
    e = document.createElementNS(n, I, S.is && S), s && (tt.__m && tt.__m(t, o), s = !1), o = null;
  }
  if (I === null) M === S || s && e.data === S || (e.data = S);
  else {
    if (o = o && ne.call(e.childNodes), M = a.props || Wt, !s && o != null) for (M = {}, d = 0; d < e.attributes.length; d++) M[(u = e.attributes[d]).name] = u.value;
    for (d in M) if (u = M[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") p = u;
      else if (!(d in S)) {
        if (d == "value" && "defaultValue" in S || d == "checked" && "defaultChecked" in S) continue;
        Qt(e, d, null, u, n);
      }
    }
    for (d in S) u = S[d], d == "children" ? h = u : d == "dangerouslySetInnerHTML" ? m = u : d == "value" ? g = u : d == "checked" ? y = u : s && typeof u != "function" || M[d] === u || Qt(e, d, u, M[d], n);
    if (m) s || p && (m.__html === p.__html || m.__html === e.innerHTML) || (e.innerHTML = m.__html), t.__k = [];
    else if (p && (e.innerHTML = ""), si(t.type === "template" ? e.content : e, se(h) ? h : [h], t, a, r, I == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, l, o ? o[0] : a.__k && Et(a, 0), s, f), o != null) for (d = o.length; d--; ) xe(o[d]);
    s || (d = "value", I == "progress" && g == null ? e.removeAttribute("value") : g !== void 0 && (g !== e[d] || I == "progress" && !g || I == "option" && g !== M[d]) && Qt(e, d, g, M[d], n), d = "checked", y !== void 0 && y !== e[d] && Qt(e, d, y, M[d], n));
  }
  return e;
}
function ye(e, t, a) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (n) {
    tt.__e(n, a);
  }
}
function di(e, t, a) {
  var r, n;
  if (tt.unmount && tt.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ye(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (o) {
      tt.__e(o, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (n = 0; n < r.length; n++) r[n] && di(r[n], t, a || typeof e.type != "function");
  a || xe(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ui(e, t, a) {
  return this.constructor(e, a);
}
function Pe(e, t, a) {
  var r, n, o, l;
  t == document && (t = document.documentElement), tt.__ && tt.__(e, t), n = (r = !1) ? null : t.__k, o = [], l = [], we(t, e = t.__k = Di(wt, null, [e]), n || Wt, Wt, t.namespaceURI, n ? null : t.firstChild ? ne.call(t.childNodes) : null, o, n ? n.__e : t.firstChild, r, l), ci(o, e, l);
}
ne = oi.slice, tt = { __e: function(e, t, a, r) {
  for (var n, o, l; t = t.__; ) if ((n = t.__c) && !n.__) try {
    if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(e)), l = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e, r || {}), l = n.__d), l) return n.__E = n;
  } catch (s) {
    e = s;
  }
  throw e;
} }, ei = 0, ae.prototype.setState = function(e, t) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = kt({}, this.state), typeof e == "function" && (e = e(kt({}, a), this.props)), e && kt(a, e), e != null && this.__v && (t && this._sb.push(t), Te(this));
}, ae.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Te(this));
}, ae.prototype.render = wt, $t = [], ii = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ai = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, oe.__r = 0, ri = /(PointerCapture)$|Capture$/i, ve = 0, fe = Ee(!1), he = Ee(!0);
var Ri = 0;
function i(e, t, a, r, n, o) {
  t || (t = {});
  var l, s, f = t;
  if ("ref" in f) for (s in f = {}, t) s == "ref" ? l = t[s] : f[s] = t[s];
  var d = { type: e, props: f, key: a, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ri, __i: -1, __u: 0, __source: n, __self: o };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) f[s] === void 0 && (f[s] = l[s]);
  return tt.vnode && tt.vnode(d), d;
}
var Kt, ct, de, Be, Gt = 0, ui = [], ut = tt, Ue = ut.__b, Re = ut.__r, Fe = ut.diffed, He = ut.__c, Oe = ut.unmount, Ve = ut.__;
function _e(e, t) {
  ut.__h && ut.__h(ct, e, Gt || t), Gt = 0;
  var a = ct.__H || (ct.__H = { __: [], __h: [] });
  return e >= a.__.length && a.__.push({}), a.__[e];
}
function P(e) {
  return Gt = 1, Fi(fi, e);
}
function Fi(e, t, a) {
  var r = _e(Kt++, 2);
  if (r.t = e, !r.__c && (r.__ = [fi(void 0, t), function(s) {
    var f = r.__N ? r.__N[0] : r.__[0], d = r.t(f, s);
    f !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = ct, !ct.__f)) {
    var n = function(s, f, d) {
      if (!r.__c.__H) return !0;
      var m = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (m.every(function(h) {
        return !h.__N;
      })) return !o || o.call(this, s, f, d);
      var p = r.__c.props !== s;
      return m.forEach(function(h) {
        if (h.__N) {
          var u = h.__[0];
          h.__ = h.__N, h.__N = void 0, u !== h.__[0] && (p = !0);
        }
      }), o && o.call(this, s, f, d) || p;
    };
    ct.__f = !0;
    var o = ct.shouldComponentUpdate, l = ct.componentWillUpdate;
    ct.componentWillUpdate = function(s, f, d) {
      if (this.__e) {
        var m = o;
        o = void 0, n(s, f, d), o = m;
      }
      l && l.call(this, s, f, d);
    }, ct.shouldComponentUpdate = n;
  }
  return r.__N || r.__;
}
function K(e, t) {
  var a = _e(Kt++, 3);
  !ut.__s && mi(a.__H, t) && (a.__ = e, a.u = t, ct.__H.__h.push(a));
}
function it(e) {
  return Gt = 5, Ct(function() {
    return { current: e };
  }, []);
}
function Ct(e, t) {
  var a = _e(Kt++, 7);
  return mi(a.__H, t) && (a.__ = e(), a.__H = t, a.__h = e), a.__;
}
function Q(e, t) {
  return Gt = 8, Ct(function() {
    return e;
  }, t);
}
function Hi() {
  for (var e; e = ui.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(re), e.__H.__h.forEach(ge), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], ut.__e(t, e.__v);
  }
}
ut.__b = function(e) {
  ct = null, Ue && Ue(e);
}, ut.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ve && Ve(e, t);
}, ut.__r = function(e) {
  Re && Re(e), Kt = 0;
  var t = (ct = e.__c).__H;
  t && (de === ct ? (t.__h = [], ct.__h = [], t.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (t.__h.forEach(re), t.__h.forEach(ge), t.__h = [], Kt = 0)), de = ct;
}, ut.diffed = function(e) {
  Fe && Fe(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ui.push(t) !== 1 && Be === ut.requestAnimationFrame || ((Be = ut.requestAnimationFrame) || Oi)(Hi)), t.__H.__.forEach(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), de = ct = null;
}, ut.__c = function(e, t) {
  t.some(function(a) {
    try {
      a.__h.forEach(re), a.__h = a.__h.filter(function(r) {
        return !r.__ || ge(r);
      });
    } catch (r) {
      t.some(function(n) {
        n.__h && (n.__h = []);
      }), t = [], ut.__e(r, a.__v);
    }
  }), He && He(e, t);
}, ut.unmount = function(e) {
  Oe && Oe(e);
  var t, a = e.__c;
  a && a.__H && (a.__H.__.forEach(function(r) {
    try {
      re(r);
    } catch (n) {
      t = n;
    }
  }), a.__H = void 0, t && ut.__e(t, a.__v));
};
var We = typeof requestAnimationFrame == "function";
function Oi(e) {
  var t, a = function() {
    clearTimeout(r), We && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(a, 100);
  We && (t = requestAnimationFrame(a));
}
function re(e) {
  var t = ct, a = e.__c;
  typeof a == "function" && (e.__c = void 0, a()), ct = t;
}
function ge(e) {
  var t = ct;
  e.__c = e.__(), ct = t;
}
function mi(e, t) {
  return !e || e.length !== t.length || t.some(function(a, r) {
    return a !== e[r];
  });
}
function fi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
async function Vi(e, t) {
  const a = e.body;
  if (!a)
    throw new Error("Response body is null");
  const r = a.getReader(), n = new TextDecoder("utf-8");
  let o = "";
  try {
    for (; ; ) {
      const { done: l, value: s } = await r.read();
      if (l)
        break;
      o += n.decode(s, { stream: !0 });
      const f = o.split(/\r?\n/);
      o = f.pop() || "";
      for (const d of f) {
        const m = d.trim();
        if (!(!m || m.startsWith(":")) && m.startsWith("data:")) {
          const p = m.slice(5).trim();
          if (p === "[DONE]") {
            t.onDone && t.onDone();
            return;
          }
          try {
            const h = JSON.parse(p);
            if (typeof h == "string")
              t.onChunk(h);
            else if (h && typeof h == "object") {
              (h.chunk || h.token || h.content || h.text) && t.onChunk(h.chunk || h.token || h.content || h.text), h.sources && Array.isArray(h.sources) && t.onSources && t.onSources(h.sources), h.suggestedQuestions && Array.isArray(h.suggestedQuestions) && t.onSuggestedQuestions && t.onSuggestedQuestions(h.suggestedQuestions), t.onConversationId && (h.conversation_id !== void 0 || h.conversationId !== void 0) && t.onConversationId(
                h.conversation_id ?? h.conversationId
              );
              const u = h.ticket_number ?? h.ticketNumber;
              t.onTicketNumber && u !== void 0 && u !== null && String(u).trim() !== "" && String(u).trim() !== "undefined" && String(u).trim() !== "null" && t.onTicketNumber(
                String(u).trim()
              ), t.onActionTrigger && h.triggered_action && typeof h.triggered_action == "object" && t.onActionTrigger(h.triggered_action);
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
class hi extends Error {
  constructor(a, r = 60, n) {
    super(a);
    At(this, "retryAfterSeconds");
    At(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = r, this.code = n;
  }
}
class gi extends Error {
  constructor(a, r, n, o) {
    super(a);
    At(this, "status");
    At(this, "code");
    At(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = r, this.code = n, this.retryAfterSeconds = o;
  }
}
function Wi(e, t) {
  const a = typeof e == "number" ? e : typeof e == "string" ? parseInt(e, 10) : NaN;
  return Number.isFinite(a) && a > 0 ? Math.floor(a) : t;
}
async function Ki(e, t) {
  const a = await e.json().catch(() => null);
  bi(e.status, a, t, e.headers.get("Retry-After"));
}
function bi(e, t, a, r) {
  const n = typeof (t == null ? void 0 : t.code) == "string" ? t.code : void 0, o = (t == null ? void 0 : t.error) || (t == null ? void 0 : t.message) || a, l = Wi((t == null ? void 0 : t.retry_after) ?? r, 60);
  throw e === 429 || n === "RATE_LIMIT_EXCEEDED" ? new hi(o, l, n) : new gi(o, e, n, l);
}
function ji(e) {
  if (typeof e != "string") return null;
  const t = e.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(t) || t === "XX" ? null : t;
}
function ke(e) {
  if (typeof e != "string") return null;
  const t = e.trim();
  return t.length > 0 ? t : null;
}
function Gi(e) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const t = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return ke(t.of(e));
  } catch {
    return null;
  }
}
function Zi() {
  let e = null, t = null;
  if (typeof window < "u")
    try {
      const a = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (a) {
        const r = JSON.parse(a);
        e = ji(
          r.country_code ?? r.countryCode ?? r.visitor_country_code ?? r.visitorCountryCode ?? r.country
        ), t = ke(
          r.country_name ?? r.countryName ?? r.visitor_country_name ?? r.visitorCountryName
        );
      }
    } catch {
    }
  return !t && e && (t = Gi(e)), { code: e, name: t };
}
const Ke = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Yi(e, t, a, r) {
  const n = (r == null ? void 0 : r.action) || (a && a.length > 0 ? a[0] : null);
  if (n && t.onActionTrigger) {
    const m = (!!(n.widget_id || n.widget || r != null && r.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let p = 0; p < m.length; p++) {
      const h = m[p] + (p < m.length - 1 ? " " : "");
      t.onChunk(h), await new Promise((u) => setTimeout(u, 20));
    }
    t.onActionTrigger({
      id: n.id,
      name: n.name,
      form_id: n.form_id,
      widget_id: n.widget_id,
      widget: n.widget || (r == null ? void 0 : r.widget) || null
    }), t.onDone && t.onDone();
    return;
  }
  const o = `${Ke[Math.floor(Math.random() * Ke.length)]}

Vaše pitanje: *"${e}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, l = ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = o.split(" ");
  for (let f = 0; f < s.length; f++) {
    const d = s[f] + (f < s.length - 1 ? " " : "");
    t.onChunk(d), await new Promise((m) => setTimeout(m, 20 + Math.random() * 20));
  }
  t.onSuggestedQuestions && l.length > 0 && t.onSuggestedQuestions(l), t.onDone && t.onDone();
}
async function qi(e) {
  const {
    companyId: t,
    conversationId: a,
    visitorId: r,
    message: n,
    forceNewConversation: o,
    apiUrl: l,
    mockMode: s,
    visitorName: f,
    visitorEmail: d,
    visitorPhone: m,
    visitorCountryCode: p,
    visitorCountryName: h,
    actions: u,
    previewDraft: g,
    callbacks: y
  } = e;
  if (s || !t || t === "default") {
    await Yi(n, y, u, g);
    return;
  }
  const M = (l || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), S = Zi(), I = ji(p) ?? S.code ?? void 0, R = ke(h) ?? S.name ?? void 0, k = `${M}/api/widget/${t}/chat`, c = a && !a.startsWith("conv-") ? parseInt(a, 10) : null, w = await fetch(k, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: n,
      conversation_id: c,
      force_new_conversation: o === !0,
      visitor_id: r,
      visitor_name: f || void 0,
      visitor_email: d || void 0,
      visitor_phone: m || void 0,
      visitor_country_code: I,
      visitor_country_name: R
    })
  });
  if (w.ok || await Ki(w, `API greška (${w.status})`), (w.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Vi(w, y);
  else {
    const C = await w.json(), F = C.answer || C.message || "";
    C.conversation_id !== void 0 && y.onConversationId && y.onConversationId(C.conversation_id);
    const U = C.ticket_number ?? C.ticketNumber;
    if (U != null && String(U).trim() !== "" && String(U).trim() !== "undefined" && String(U).trim() !== "null" && y.onTicketNumber && y.onTicketNumber(String(U).trim()), C.triggered_action && y.onActionTrigger && y.onActionTrigger(C.triggered_action), F && F.trim()) {
      const A = F.split(" ");
      for (let T = 0; T < A.length; T++) {
        const G = A[T] + (T < A.length - 1 ? " " : "");
        y.onChunk(G), await new Promise((at) => setTimeout(at, 15));
      }
    }
    y.onDone && y.onDone();
  }
}
async function be(e) {
  const { widgetId: t, visitorId: a, apiUrl: r, status: n, page: o = 1, perPage: l = 15 } = e, s = (r || "").replace(/\/$/, ""), f = new URLSearchParams({
    visitor_id: a,
    page: String(o),
    per_page: String(l)
  });
  n && f.set("status", n);
  const d = await fetch(`${s}/api/widget/${encodeURIComponent(t)}/tickets?${f}`), m = await d.json().catch(() => null);
  if (!d.ok) throw new Error(m && "error" in m ? m.error : "Tikete nije moguće učitati.");
  const p = (m == null ? void 0 : m.data) || [], h = p.map((y) => ({
    id: y.id,
    ticketNumber: y.ticket_number,
    conversationId: y.conversation_id,
    isResolved: !!y.is_resolved,
    updatedAt: y.updated_at,
    messages: (y.messages || []).map((M) => ({
      id: String(M.id),
      content: M.content,
      sender: M.role === "user" ? "user" : "ai",
      timestamp: M.created_at,
      status: "sent"
    }))
  })), u = m == null ? void 0 : m.meta, g = (u == null ? void 0 : u.has_more) !== void 0 ? !!u.has_more : p.length >= l;
  return {
    tickets: h,
    hasMore: g,
    total: u == null ? void 0 : u.total,
    currentPage: (u == null ? void 0 : u.current_page) ?? o
  };
}
async function Qi(e, t, a) {
  return (await be({ widgetId: e, visitorId: t, apiUrl: a, page: 1, perPage: 50 })).tickets;
}
async function Ji(e, t, a, r, n) {
  const o = !!t && !t.startsWith("conv-");
  if (!e || e === "default" || n || !o)
    return await new Promise((f) => setTimeout(f, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: a };
  const l = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await fetch(`${l}/api/widget/${e}/conversations/${t}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: a })
  });
  if (!s.ok) {
    const d = (await s.json().catch(() => ({}))).error || (s.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), m = new Error(d);
    throw m.status = s.status, m;
  }
  return await s.json();
}
const Ge = "pitaj_io_visitor_id", Xi = "chat_direkt_visitor_id", ta = "pitaj_io_visitor_meta", ea = "chat_direkt_visitor_meta";
function vi(e) {
  return `pitaj_io_convs_${e}`;
}
function ia(e) {
  return `chat_direkt_convs_${e}`;
}
function aa() {
  try {
    let e = localStorage.getItem(Ge) || localStorage.getItem(Xi);
    return e || (e = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Ge, e)), e;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const ra = [];
function oa(e) {
  return !!(e.id.startsWith("conv-sample-") || e.title === "Kako da resetujem lozinku?" || e.title === "Mogu li izvesti podatke u CSV?");
}
function na(e) {
  return e.filter((t) => !oa(t)).map((t) => {
    const a = t.ticketNumber && String(t.ticketNumber).trim() !== "" && String(t.ticketNumber).trim() !== "undefined" && String(t.ticketNumber).trim() !== "null" ? String(t.ticketNumber).trim() : null;
    return { ...t, ticketNumber: a };
  });
}
function Ze(e) {
  try {
    const t = localStorage.getItem(vi(e)) || localStorage.getItem(ia(e));
    if (t) {
      const a = JSON.parse(t);
      if (Array.isArray(a))
        return na(a);
    }
  } catch (t) {
    console.warn("[Pitaj.io] Error reading from localStorage", t);
  }
  return ra;
}
function sa(e, t) {
  try {
    localStorage.setItem(vi(e), JSON.stringify(t));
  } catch (a) {
    console.warn("[Pitaj.io] Error saving to localStorage", a);
  }
}
function Ye(e) {
  var n, o, l, s, f, d, m, p, h, u, g;
  const t = e.previewDraft, a = (/* @__PURE__ */ new Date()).toISOString(), r = (t == null ? void 0 : t.initialStep) || "idle";
  if (r === "idle") {
    const y = (t == null ? void 0 : t.simulatedGreeting) || e.welcomeHeadline || e.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", M = (n = t == null ? void 0 : t.action) != null && n.trigger_hint ? [t.action.trigger_hint] : e.suggestedQuestions && e.suggestedQuestions.length > 0 ? e.suggestedQuestions : [];
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
            suggestedQuestions: M.length > 0 ? M : void 0
          }
        ]
      }
    ];
  }
  if (r === "form") {
    const y = (t == null ? void 0 : t.simulatedUserMessage) || ((o = t == null ? void 0 : t.action) == null ? void 0 : o.trigger_hint) || "Pokreni akciju", S = !!((l = t == null ? void 0 : t.action) != null && l.widget || t != null && t.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", I = (t == null ? void 0 : t.widget) || ((s = t == null ? void 0 : t.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((f = t == null ? void 0 : t.action) == null ? void 0 : f.name) || "Pregled akcije",
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
            id: "preview-msg-ai",
            content: S,
            sender: "ai",
            timestamp: a,
            status: "sent",
            widget: I
          }
        ]
      }
    ];
  }
  if (r === "submitted") {
    const y = (t == null ? void 0 : t.simulatedUserMessage) || ((d = t == null ? void 0 : t.action) == null ? void 0 : d.trigger_hint) || "Pokreni akciju", M = ((m = t == null ? void 0 : t.form) == null ? void 0 : m.name) || ((p = t == null ? void 0 : t.action) == null ? void 0 : p.name) || "Forma", S = ((h = t == null ? void 0 : t.form) == null ? void 0 : h.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: M,
        preview: S,
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
            content: `Forma: ${M}
- Status: Uspješno poslano`,
            sender: "user",
            timestamp: new Date(Date.now() - 1e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-success",
            content: S,
            sender: "ai",
            timestamp: a,
            status: "sent"
          }
        ]
      }
    ];
  }
  if (r === "dismissed") {
    const y = (t == null ? void 0 : t.simulatedUserMessage) || ((u = t == null ? void 0 : t.action) == null ? void 0 : u.trigger_hint) || "Pokreni akciju", M = "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((g = t == null ? void 0 : t.action) == null ? void 0 : g.name) || "Pregled akcije",
        preview: M,
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
            content: M,
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
function pa(e, t) {
  var Y, dt, mt, vt, yt, ht, xt, _t, Nt, St, Tt, Pt, Yt, qt, Bt, Ut, Rt;
  const a = !!(e.isPreview || e.previewDraft), [r, n] = P(e), [o, l] = P((t == null ? void 0 : t.startOpen) ?? !1), [s, f] = P(
    (t == null ? void 0 : t.initialScreen) ?? (a ? "conversation" : "new-conversation")
  ), [d, m] = P(
    () => a ? Ye(e) : Ze(e.companyId)
  ), [p, h] = P(() => {
    if (a) return "preview-conv-1";
    if ((t == null ? void 0 : t.initialScreen) === "conversation") {
      const x = Ze(e.companyId);
      return x.length > 0 ? x[0].id : null;
    }
    return null;
  }), [u, g] = P(!1), [y, M] = P(null), [S, I] = P(null), R = it(aa()), [k, c] = P(() => {
    try {
      const x = localStorage.getItem(ta) || localStorage.getItem(ea);
      if (x) {
        const L = JSON.parse(x), D = {};
        return typeof L.name == "string" && (D.name = L.name), typeof L.email == "string" && (D.email = L.email), typeof L.phone == "string" && (D.phone = L.phone), D;
      }
    } catch (x) {
      console.warn("[Pitaj.io] Error reading visitor meta", x);
    }
    return {};
  }), w = it(t == null ? void 0 : t.emitEvent);
  w.current = t == null ? void 0 : t.emitEvent;
  const z = it(t == null ? void 0 : t.onActionTrigger);
  z.current = t == null ? void 0 : t.onActionTrigger;
  const C = Q((x, L) => {
    const D = Number.isFinite(x) ? Math.max(1, Math.floor(x)) : 60;
    M((q) => q === null ? D : Math.max(q, D)), I(L || `Previše zahtjeva. Molimo sačekajte ${D}s.`);
  }, []), F = Q((x) => {
    if (x) {
      if (x === "WIDGET_CHAT_DISABLED") {
        n((L) => ({ ...L, chatAvailable: !1 })), I("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (x === "WIDGET_TRANSCRIBE_DISABLED") {
        n((L) => ({ ...L, transcribeAvailable: !1 })), I("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      x === "WIDGET_FORMS_DISABLED" && (n((L) => ({ ...L, formsAvailable: !1, formsEnabled: !1 })), I("Forme su trenutno privremeno nedostupne."));
    }
  }, []), U = Q((x, L = "Došlo je do greške pri obradi zahtjeva.") => {
    var q, E, et, ot;
    if (x instanceof hi) {
      C(x.retryAfterSeconds, x.message), (q = w.current) == null || q.call(w, "error_occurred", { code: x.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (x instanceof gi) {
      if (x.code === "COUNTRY_BLOCKED") {
        n((V) => ({ ...V, chatAvailable: !1 })), I(x.message || "Pristup nije dozvoljen u vašoj regiji."), (E = w.current) == null || E.call(w, "error_occurred", { status: x.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      F(x.code), I(x.message || L), (et = w.current) == null || et.call(w, "error_occurred", { status: x.status, code: x.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let D = x instanceof Error ? x.message : L;
    !D || D === "Failed to fetch" || D.includes("NetworkError") ? D = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : D.includes("404") ? D = "Traženi razgovor ili podaci nisu pronađeni." : (D.includes("500") || D.includes("502") || D.includes("503")) && (D = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), I(D || L), (ot = w.current) == null || ot.call(w, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [C, F]);
  K(() => {
    r.isPreview || r.mockMode || r.companyId === "preview" || sa(r.companyId, d);
  }, [d, r.companyId, r.isPreview, r.mockMode]), K(() => {
    if (r.isPreview || r.previewDraft) {
      const x = Ye(r);
      m(x), h("preview-conv-1"), f("conversation");
    }
  }, [
    r.isPreview,
    (Y = r.previewDraft) == null ? void 0 : Y.initialStep,
    (mt = (dt = r.previewDraft) == null ? void 0 : dt.action) == null ? void 0 : mt.id,
    (yt = (vt = r.previewDraft) == null ? void 0 : vt.action) == null ? void 0 : yt.name,
    (xt = (ht = r.previewDraft) == null ? void 0 : ht.action) == null ? void 0 : xt.trigger_hint,
    (Nt = (_t = r.previewDraft) == null ? void 0 : _t.form) == null ? void 0 : Nt.id,
    (Tt = (St = r.previewDraft) == null ? void 0 : St.form) == null ? void 0 : Tt.name,
    (Yt = (Pt = r.previewDraft) == null ? void 0 : Pt.form) == null ? void 0 : Yt.success_message,
    (Bt = (qt = r.previewDraft) == null ? void 0 : qt.widget) == null ? void 0 : Bt.id,
    (Rt = (Ut = r.previewDraft) == null ? void 0 : Ut.widget) == null ? void 0 : Rt.type
  ]), K(() => {
    if (y === null || y <= 0) return;
    const x = setInterval(() => {
      M((L) => L && L > 1 ? L - 1 : null);
    }, 1e3);
    return () => clearInterval(x);
  }, [y]), K(() => {
    if (!r.companyId || r.mockMode) return;
    let x = !0;
    return Qi(r.companyId, R.current, r.apiUrl).then((L) => {
      !x || !L || L.length === 0 || m((D) => {
        let q = !1;
        const E = D.map((et) => {
          const ot = L.find((V) => String(V.id) === et.id);
          return ot && ot.ticketNumber && et.ticketNumber !== ot.ticketNumber ? (q = !0, { ...et, ticketNumber: ot.ticketNumber }) : et;
        });
        return q ? E : D;
      });
    }).catch(() => {
    }), () => {
      x = !1;
    };
  }, [r.companyId, r.apiUrl, r.mockMode]);
  const A = d.find((x) => x.id === p) || null, T = d.reduce((x, L) => x + (L.unread || 0), 0), G = Q((x) => {
    l((L) => {
      var D;
      return L === x ? L : ((D = w.current) == null || D.call(w, x ? "widget_opened" : "widget_closed"), x);
    });
  }, []), at = Q((x) => {
    f((L) => {
      var D;
      return L === x ? L : ((D = w.current) == null || D.call(w, "screen_changed", { screen: x }), x);
    });
  }, []), lt = Q((x) => {
    var L;
    h(x.id), m((D) => D.some((E) => E.id === x.id) ? D.map((E) => E.id === x.id ? { ...E, ...x, unread: 0, status: x.status || "active" } : E) : [{ ...x, unread: 0, status: x.status || "active" }, ...D]), f("conversation"), (L = w.current) == null || L.call(w, "conversation_selected", { conversationId: x.id });
  }, []), ft = Q(() => {
    var x;
    m(
      (L) => L.map((D) => D.id === p ? { ...D, status: "ended" } : D)
    ), h(null), f("new-conversation"), (x = w.current) == null || x.call(w, "conversation_ended", { conversationId: p });
  }, [p]), Z = Q((x) => {
    m((L) => L.filter((D) => D.id !== x)), h((L) => L === x ? null : L), p === x && f("new-conversation");
  }, [p]), $ = Q((x) => {
    var et;
    if (r.chatAvailable === !1) {
      I("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (y !== null) {
      I(`Previše zahtjeva. Molimo sačekajte ${y}s.`);
      return;
    }
    const L = "conv-" + Date.now(), D = (/* @__PURE__ */ new Date()).toISOString(), q = x ? x.length > 40 ? x.slice(0, 40) + "…" : x : "Novo ćaskanje", E = {
      id: L,
      title: q,
      preview: x || "Započeto novo ćaskanje",
      timestamp: D,
      unread: 0,
      messages: x ? [
        {
          id: "msg-" + Date.now(),
          content: x,
          sender: "user",
          timestamp: D,
          status: "sent"
        }
      ] : []
    };
    m((ot) => [E, ...ot]), h(L), f("conversation"), (et = w.current) == null || et.call(w, "conversation_started", { conversationId: L, initialMessage: x }), x && N(L, x, [E.messages[0]], !0);
  }, [r.apiUrl, r.chatAvailable, r.companyId, r.mockMode, y, k]), N = async (x, L, D, q = !1) => {
    var ot;
    g(!0), I(null);
    const E = "ai-msg-" + Date.now(), et = {
      id: E,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    m(
      (V) => V.map((X) => X.id !== x ? X : {
        ...X,
        preview: L,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...X.messages.filter((B) => B.id !== E), et]
      })
    ), (ot = w.current) == null || ot.call(w, "stream_started", { conversationId: x });
    try {
      await qi({
        companyId: r.companyId,
        conversationId: x,
        visitorId: R.current,
        message: L,
        forceNewConversation: q || x.startsWith("conv-"),
        apiUrl: r.apiUrl,
        mockMode: r.mockMode || r.isPreview,
        visitorName: k.name,
        visitorEmail: k.email,
        visitorPhone: k.phone,
        actions: r.actions,
        previewDraft: r.previewDraft,
        callbacks: {
          onConversationId: (V) => {
            const X = x, B = String(V);
            x = B, h(B), m(
              (gt) => gt.map((H) => H.id === X || H.messages.some((j) => j.id === E) ? { ...H, id: B } : H)
            );
          },
          onTicketNumber: (V) => {
            const X = V && String(V).trim() !== "" && String(V).trim() !== "undefined" && String(V).trim() !== "null" ? String(V).trim() : null;
            X && m(
              (B) => B.map((gt) => gt.id === x || gt.messages.some((j) => j.id === E) ? { ...gt, ticketNumber: X } : gt)
            );
          },
          onActionTrigger: (V) => {
            var B;
            const X = V.widget || V.triggered_widget || (V.widget_id && r.widgets ? r.widgets.find((gt) => gt.id === V.widget_id) : null) || null;
            X && m(
              (gt) => gt.map((H) => H.id === x || H.messages.some((_) => _.id === E) ? {
                ...H,
                messages: H.messages.map(
                  (_) => _.id === E ? { ..._, widget: X } : _
                )
              } : H)
            ), (B = z.current) == null || B.call(z, V);
          },
          onChunk: (V) => {
            m(
              (X) => X.map((B) => B.id === x || B.messages.some((H) => H.id === E) ? {
                ...B,
                messages: B.messages.map(
                  (H) => H.id === E ? { ...H, content: H.content + V } : H
                )
              } : B)
            );
          },
          onSources: (V) => {
            m(
              (X) => X.map((B) => B.id === x || B.messages.some((H) => H.id === E) ? {
                ...B,
                messages: B.messages.map(
                  (H) => H.id === E ? { ...H, sources: V } : H
                )
              } : B)
            );
          },
          onSuggestedQuestions: (V) => {
            m(
              (X) => X.map((B) => B.id === x || B.messages.some((H) => H.id === E) ? {
                ...B,
                messages: B.messages.map(
                  (H) => H.id === E ? { ...H, suggestedQuestions: V } : H
                )
              } : B)
            );
          },
          onDone: () => {
            var V;
            m(
              (X) => X.map((B) => {
                var W, nt;
                if (!(B.id === x || B.messages.some((pt) => pt.id === E))) return B;
                const H = B.messages.find((pt) => pt.id === E), j = (W = H == null ? void 0 : H.widget) == null ? void 0 : W.name, _ = (nt = H == null ? void 0 : H.content) == null ? void 0 : nt.trim(), b = _ ? _.slice(0, 70) : j ? `[${j}]` : B.preview;
                return {
                  ...B,
                  preview: b,
                  messages: B.messages.map(
                    (pt) => pt.id === E ? { ...pt, isStreaming: !1 } : pt
                  )
                };
              })
            ), g(!1), (V = w.current) == null || V.call(w, "stream_completed", { conversationId: x });
          },
          onError: (V) => {
            console.error("[Pitaj.io] Stream error:", V), I(V.message || "Došlo je do greške u komunikaciji."), g(!1);
          }
        }
      });
    } catch (V) {
      g(!1), U(V, "Greška pri slanju poruke.");
    }
  }, rt = Q((x) => {
    var E;
    const L = x.trim();
    if (!L || u || r.chatAvailable === !1 || y !== null) return;
    if (!p) {
      $(L);
      return;
    }
    const q = {
      id: "usr-msg-" + Date.now(),
      content: L,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    m(
      (et) => et.map((ot) => ot.id !== p ? ot : {
        ...ot,
        preview: L,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...ot.messages, q]
      })
    ), (E = w.current) == null || E.call(w, "message_sent", { conversationId: p, content: L }), N(p, L, A ? A.messages : []);
  }, [p, u, $, A, r.chatAvailable, r.companyId, r.apiUrl, r.mockMode, y]), J = Q(
    async (x, L, D) => {
      var q;
      if (!r.mockMode)
        try {
          await Ji(
            r.companyId,
            x,
            L,
            r.apiUrl,
            r.mockMode
          );
        } catch (E) {
          console.error("[Pitaj.io] Failed to submit rating:", E);
          const et = (E == null ? void 0 : E.status) === 404 ? "Razgovor ili tiket više nije dostupan." : E != null && E.message && !E.message.includes("failed") && !E.message.includes("404") ? E.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(et);
        }
      m(
        (E) => E.map(
          (et) => et.id === x ? { ...et, satisfaction: L, ratingScore: D ?? et.ratingScore } : et
        )
      ), (q = w.current) == null || q.call(w, "rating_submitted", {
        conversationId: x,
        satisfaction: L,
        score: D
      });
    },
    [r.companyId, r.apiUrl, r.mockMode]
  ), v = Q(
    (x, L, D = "user") => {
      const q = L.trim();
      if (!q) return;
      const E = (/* @__PURE__ */ new Date()).toISOString(), et = `conv-${Date.now()}`, ot = typeof x == "string" && x.trim().length > 0 ? x : et, V = {
        id: `local-${D}-msg-${Date.now()}`,
        content: q,
        sender: D,
        timestamp: E,
        status: "sent"
      };
      m(
        (X) => X.some((B) => B.id === ot) ? X.map((B) => B.id !== ot ? B : {
          ...B,
          preview: q.length > 70 ? `${q.slice(0, 70)}…` : q,
          timestamp: E,
          messages: [...B.messages, V]
        }) : [
          {
            id: ot,
            title: "Forma",
            preview: q.length > 70 ? `${q.slice(0, 70)}…` : q,
            timestamp: E,
            unread: 0,
            messages: [V],
            status: "active"
          },
          ...X
        ]
      ), h(ot), f("conversation");
    },
    []
  ), O = (x) => {
    var L;
    return !!((L = x.messages) != null && L.some((D) => D.sender === "ai"));
  };
  return {
    config: r,
    setConfig: n,
    isOpen: o,
    setIsOpen: G,
    screen: s,
    setScreen: at,
    conversations: d,
    activeConversation: A,
    activeConversationId: p,
    visitorContact: k,
    visitorId: R.current,
    activeConversationHasReply: A ? O(A) : !1,
    totalUnread: T,
    isStreaming: u,
    rateLimitTimer: y,
    errorBanner: S,
    setErrorBanner: I,
    selectConversation: lt,
    startNewConversation: $,
    endConversation: ft,
    deleteConversation: Z,
    sendUserMessage: rt,
    submitSatisfaction: J,
    appendConversationMessage: v,
    handleApiError: U
  };
}
let ue = null, xi = null;
function qe(e, t) {
  t === null && e !== null && ue !== null && ue !== e || (ue = t ? e : null, xi = t);
}
function It() {
  return xi;
}
function Me(e, t) {
  let a = null;
  const r = () => a || (a = e().then((n) => {
    const o = t ? t(n) : n.default;
    if (!o)
      throw new Error("Lazy component not found");
    return o;
  }));
  return function(o) {
    const [l, s] = P(null);
    return K(() => {
      let f = !0;
      return r().then((d) => {
        f && s(() => d);
      }).catch((d) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", d);
      }), () => {
        f = !1;
      };
    }, []), l ? /* @__PURE__ */ i(l, { ...o }) : /* @__PURE__ */ i("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ i("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function ca({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ i("path", { d: "M5 3v4" }),
    /* @__PURE__ */ i("path", { d: "M19 17v4" }),
    /* @__PURE__ */ i("path", { d: "M3 5h4" }),
    /* @__PURE__ */ i("path", { d: "M17 19h4" })
  ] });
}
function wi({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ i("path", { d: "M12 19V5" })
  ] });
}
function la({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ i("path", { d: "M19 12H5" })
  ] });
}
function Mt({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ i("path", { d: "m6 6 12 12" })
  ] });
}
function da({ size: e = 24, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function lr({ size: e = 18, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 5v14" }),
    /* @__PURE__ */ i("path", { d: "M5 12h14" })
  ] });
}
function Vt({ size: e = 12, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" }) });
}
function ua({ size: e = 18, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "currentColor", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function ma({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v6" }),
    /* @__PURE__ */ i("path", { d: "M9 11h6" })
  ] });
}
function yi({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function fa({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ i("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function ha({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function ga({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ i("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ i("path", { d: "M12 7v5l4 2" })
  ] });
}
function ba({ size: e = 12, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ i("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function ja({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ i("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function _i({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ i("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function va({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function ki({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ i("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ i("path", { d: "M10 9H8" }),
    /* @__PURE__ */ i("path", { d: "M16 13H8" }),
    /* @__PURE__ */ i("path", { d: "M16 17H8" })
  ] });
}
function xa({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M7 10v12" }),
    /* @__PURE__ */ i("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function wa({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M17 14V2" }),
    /* @__PURE__ */ i("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function Mi({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function dr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M8 2v4" }),
    /* @__PURE__ */ i("path", { d: "M16 2v4" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ i("path", { d: "M3 10h18" })
  ] });
}
function ur({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 16V4" }),
    /* @__PURE__ */ i("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ i("path", { d: "M20 16v4H4v-4" })
  ] });
}
function mr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m15 18-6-6 6-6" }) });
}
function fr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m9 18 6-6-6-6" }) });
}
function hr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" }) });
}
function gr({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) });
}
function ya({ size: e = 16, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ i("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ i("path", { d: "M10 11v6" }),
    /* @__PURE__ */ i("path", { d: "M14 11v6" })
  ] });
}
function br({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ i("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ i("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ i("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function jr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M10 2v2" }),
    /* @__PURE__ */ i("path", { d: "M14 2v2" }),
    /* @__PURE__ */ i("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ i("path", { d: "M6 2v2" })
  ] });
}
function vr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M15 2v19" }),
    /* @__PURE__ */ i("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ i("path", { d: "M8 2v19" })
  ] });
}
function xr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ i("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ i("path", { d: "M9 17h6" }),
    /* @__PURE__ */ i("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function wr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ i("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function yr({ size: e = 14, className: t = "" }) {
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
function _r({ size: e = 14, className: t = "" }) {
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
function kr({ size: e = 14, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ i("path", { d: "M7 7h.01" })
  ] });
}
function Mr({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ i("path", { d: "M3 6h18" }),
    /* @__PURE__ */ i("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function Nr({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ i("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ i("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function Sr({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ i("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ i("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function Ir({ size: e = 24, className: t = "" }) {
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
function zr({ size: e = 13, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Ar({ size: e = 13, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Lr({ size: e = 12, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function $r({ size: e = 15, className: t = "" }) {
  return /* @__PURE__ */ i("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function pe({ size: e = 13, className: t = "" }) {
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
function _a({ size: e = 16, className: t = "" }) {
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
function ka({
  screen: e,
  activeConversation: t,
  config: a,
  onBack: r,
  onClose: n,
  onNewConversation: o,
  onEndConversation: l,
  onDeleteConversation: s,
  onViewHistory: f,
  onViewTickets: d
}) {
  var R;
  const [m, p] = P(!1), h = it(null), u = e === "conversation" && t, M = u || e === "history" || e === "tickets", S = a.title || a.name || "Pitaj.io Asistent";
  K(() => {
    var w;
    const k = (z) => {
      var F, U;
      const C = ((U = (F = z.composedPath) == null ? void 0 : F.call(z)) == null ? void 0 : U[0]) || z.target;
      h.current && C && !h.current.contains(C) && p(!1);
    };
    document.addEventListener("mousedown", k);
    const c = (w = h.current) == null ? void 0 : w.getRootNode();
    return c instanceof ShadowRoot && c.addEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k), c instanceof ShadowRoot && c.removeEventListener("mousedown", k);
    };
  }, []), K(() => {
    p(!1);
  }, [e]);
  const I = (k) => {
    p(!1), k == null || k();
  };
  return /* @__PURE__ */ i("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ i("div", { className: "pitaj-header-info", children: [
      M && /* @__PURE__ */ i(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": "Nazad",
          title: "Nazad",
          children: /* @__PURE__ */ i(la, { size: 18 })
        }
      ),
      /* @__PURE__ */ i("div", { className: `pitaj-avatar ${((R = a.content) == null ? void 0 : R.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: a.logo || a.avatar ? /* @__PURE__ */ i("img", { src: a.logo || a.avatar, alt: a.name || "AI" }) : /* @__PURE__ */ i(pe, { size: 18 }) }),
      /* @__PURE__ */ i("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-header-title", children: S }),
        u && !!(t != null && t.ticketNumber) && (t == null ? void 0 : t.ticketNumber) !== "undefined" && (t == null ? void 0 : t.ticketNumber) !== "null" && /* @__PURE__ */ i("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ i("span", { className: "pitaj-header-ticket-badge", children: t == null ? void 0 : t.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ i("div", { className: "pitaj-header-menu", ref: h, children: [
        /* @__PURE__ */ i(
          "button",
          {
            onClick: () => p((k) => !k),
            className: `pitaj-icon-btn ${m ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": m,
            title: "Meni",
            children: /* @__PURE__ */ i(ua, { size: 18 })
          }
        ),
        m && /* @__PURE__ */ i("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => I(o),
              children: [
                /* @__PURE__ */ i(ma, { size: 15, className: "pitaj-menu-item-icon" }),
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
              onClick: () => I(l),
              children: [
                /* @__PURE__ */ i(ha, { size: 15, className: "pitaj-menu-item-icon" }),
                "Završi konverzaciju"
              ]
            }
          ),
          s && /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !u,
              onClick: () => I(s),
              children: [
                /* @__PURE__ */ i(ya, { size: 15, className: "pitaj-menu-item-icon" }),
                "Obriši konverzaciju"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => I(f),
              children: [
                /* @__PURE__ */ i(ga, { size: 15, className: "pitaj-menu-item-icon" }),
                "Pogledaj prethodne"
              ]
            }
          ),
          /* @__PURE__ */ i("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => I(d), children: [
            /* @__PURE__ */ i(ja, { size: 15, className: "pitaj-menu-item-icon" }),
            "Pogledaj tikete"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i(
        "button",
        {
          onClick: n,
          className: "pitaj-icon-btn",
          "aria-label": "Zatvori prozor",
          title: "Zatvori",
          children: /* @__PURE__ */ i(Mt, { size: 18 })
        }
      )
    ] })
  ] });
}
function Ma({ content: e }) {
  if (!e)
    return /* @__PURE__ */ i("span", {});
  const t = e.split(`
`), a = [];
  let r = !1, n = [];
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    if (l.startsWith("```")) {
      r ? (a.push(
        /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: n.join(`
`) }) }, `code-${o}`)
      ), n = [], r = !1) : r = !0;
      continue;
    }
    if (r) {
      n.push(l);
      continue;
    }
    if (l.trim().startsWith("- ") || l.trim().startsWith("* ")) {
      const f = l.trim().slice(2);
      a.push(
        /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: me(f) }) }, `ul-${o}`)
      );
      continue;
    }
    const s = l.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      a.push(
        /* @__PURE__ */ i("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ i("li", { children: me(s[2]) }) }, `ol-${o}`)
      );
      continue;
    }
    if (!l.trim()) {
      a.push(/* @__PURE__ */ i("div", { style: { height: "6px" } }, `sp-${o}`));
      continue;
    }
    a.push(/* @__PURE__ */ i("p", { children: me(l) }, `p-${o}`));
  }
  return r && n.length > 0 && a.push(
    /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: n.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ i("div", { className: "pitaj-markdown", children: a });
}
function me(e) {
  const t = [];
  let a = 0;
  const r = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let n;
  for (; (n = r.exec(e)) !== null; ) {
    n.index > a && t.push(...Qe(e.slice(a, n.index)));
    const o = n[0];
    if (o.startsWith("`") && o.endsWith("`"))
      t.push(
        /* @__PURE__ */ i("code", { children: o.slice(1, -1) }, `c-${n.index}`)
      );
    else if (o.startsWith("**") && o.endsWith("**"))
      t.push(
        /* @__PURE__ */ i("strong", { children: o.slice(2, -2) }, `b-${n.index}`)
      );
    else if (o.startsWith("*") && o.endsWith("*"))
      t.push(
        /* @__PURE__ */ i("em", { children: o.slice(1, -1) }, `i-${n.index}`)
      );
    else if (o.startsWith("[") && o.includes("](")) {
      const l = o.slice(1, o.indexOf("](")), s = o.slice(o.indexOf("](") + 2, -1);
      t.push(
        /* @__PURE__ */ i("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: l }, `a-${n.index}`)
      );
    }
    a = n.index + o.length;
  }
  return a < e.length && t.push(...Qe(e.slice(a))), t;
}
const Na = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Sa = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, Ia = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), za = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Qe(e) {
  const t = [];
  let a;
  for (; (a = Na.exec(e)) !== null; ) {
    const o = a[0].replace(/[.,;:!?]+$/, "");
    o && t.push({
      start: a.index,
      end: a.index + o.length,
      href: o.startsWith("www.") ? `https://${o}` : o,
      external: !0
    });
  }
  for (; (a = Sa.exec(e)) !== null; )
    t.push({
      start: a.index,
      end: a.index + a[0].length,
      href: `mailto:${a[0]}`,
      external: !1
    });
  for (; (a = Ia.exec(e)) !== null; ) {
    const o = a[0];
    za.test(o) || t.push({
      start: a.index,
      end: a.index + o.length,
      href: `tel:${o.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  t.sort((o, l) => o.start - l.start);
  const r = [];
  let n = 0;
  for (const o of t)
    o.start < n || (o.start > n && r.push(e.slice(n, o.start)), r.push(
      /* @__PURE__ */ i(
        "a",
        {
          href: o.href,
          ...o.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: e.slice(o.start, o.end)
        },
        `l-${o.start}`
      )
    ), n = o.end);
  return n < e.length && r.push(e.slice(n)), r;
}
function Ni({
  rows: e,
  fallbackQuestions: t,
  onSelect: a,
  buttonClassName: r,
  containerClassName: n,
  revealDelayMs: o = 0,
  staggerMs: l = 140
}) {
  const s = Ct(() => Array.isArray(e) && e.length > 0 ? e.map((u) => ({
    text: u.text.trim(),
    children: (u.children ?? []).map((g) => g.trim()).filter(Boolean)
  })).filter((u) => u.text !== "") : (t ?? []).map((u) => u.trim()).filter(Boolean).map((u) => ({ text: u, children: [] })), [t, e]), [f, d] = P(null), [m, p] = P(s.length);
  if (K(() => {
    d(null);
  }, [s]), K(() => {
    if (f) {
      p(s.length);
      return;
    }
    if (o <= 0) {
      p(s.length);
      return;
    }
    p(0);
    const u = window.setTimeout(() => {
      p(1);
      const g = window.setInterval(() => {
        p((y) => y >= s.length ? (window.clearInterval(g), y) : y + 1);
      }, Math.max(60, l));
    }, o);
    return () => {
      window.clearTimeout(u);
    };
  }, [f, s.length, o, l]), s.length === 0)
    return null;
  const h = s.find((u) => u.text === f && u.children.length > 0) ?? null;
  return h ? /* @__PURE__ */ i("div", { className: n, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => d(null),
        className: r,
        children: "Nazad"
      }
    ),
    h.children.map((u, g) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => a(u),
        className: r,
        children: u
      },
      `${h.text}-${g}`
    ))
  ] }) : /* @__PURE__ */ i("div", { className: n, children: s.slice(0, m).map((u, g) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      onClick: () => u.children.length > 0 ? d(u.text) : a(u.text),
      className: `${r} pitaj-suggestion-enter`,
      children: u.text
    },
    `${u.text}-${g}`
  )) });
}
const Aa = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), La = [".txt", ".md", ".csv", ".json", ".xml"];
function $a(e) {
  if (Aa.has(e.type))
    return !0;
  const t = e.name.toLowerCase();
  return La.some((a) => t.endsWith(a));
}
async function Si(e) {
  const t = Array.from(e).slice(0, 3);
  return Promise.all(
    t.map(async (a) => {
      const r = a.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(a.name);
      let n = null;
      if (r && typeof URL < "u")
        try {
          n = URL.createObjectURL(a);
        } catch {
          n = null;
        }
      const o = $a(a) ? (await a.text()).slice(0, 4e3) : null;
      return {
        id: `${a.name}-${a.lastModified}-${a.size}`,
        name: a.name,
        textContent: o,
        previewUrl: n,
        isImage: r
      };
    })
  );
}
function Ii(e) {
  return e.length === 0 ? "" : `

${e.map((a) => a.textContent && a.textContent.trim() !== "" ? `[Prilog: ${a.name}]
${a.textContent.trim()}` : `[Prilog: ${a.name}]`).join(`

`)}`;
}
async function Ca(e) {
  const { widgetId: t, audio: a, apiUrl: r } = e, n = (r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), o = new FormData();
  o.append("audio", a, "dictation.webm");
  const l = await fetch(`${n}/api/widget/${t}/transcribe`, {
    method: "POST",
    body: o,
    headers: {
      Accept: "application/json"
    }
  });
  if (!l.ok) {
    const d = await l.json().catch(() => null), p = (() => {
      if (l.status !== 422 || !(d != null && d.errors) || typeof d.errors != "object")
        return null;
      for (const h of Object.values(d.errors))
        if (Array.isArray(h)) {
          for (const u of h)
            if (typeof u == "string" && u.trim() !== "")
              return u;
        }
      return null;
    })();
    bi(
      l.status,
      d,
      typeof p == "string" && p || `Transkripcija nije uspjela (${l.status})`,
      l.headers.get("Retry-After")
    );
  }
  const s = await l.json(), f = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!f)
    throw new Error("Transkripcija nije vratila tekst.");
  return f;
}
function zi({ widgetId: e, apiUrl: t, onTranscript: a, onError: r }) {
  const o = it(null), l = it(null), s = it([]), f = it(!0), d = it(null), m = it(null), p = it(null), h = it(null), u = it(Array.from({ length: 42 }, () => 0.06)), [g, y] = P(!1), [M, S] = P(!1), [I, R] = P(
    () => Array.from({ length: 42 }, () => 0.06)
  ), k = Ct(() => {
    var T;
    return typeof window > "u" || !e || e === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((T = navigator.mediaDevices) != null && T.getUserMedia);
  }, [e]), c = Q(() => {
    l.current && (l.current.getTracks().forEach((T) => T.stop()), l.current = null);
  }, []), w = Q(() => {
    var T;
    d.current !== null && (window.cancelAnimationFrame(d.current), d.current = null), (T = h.current) == null || T.disconnect(), h.current = null, p.current = null, m.current && (m.current.close(), m.current = null);
  }, []), z = Q(() => {
    const T = Array.from({ length: 42 }, () => 0.06);
    u.current = T, R(T);
  }, []), C = Q((T) => {
    const G = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!G)
      return;
    const at = new G(), lt = at.createAnalyser();
    lt.fftSize = 2048, lt.smoothingTimeConstant = 0.78;
    const ft = at.createMediaStreamSource(T);
    ft.connect(lt), m.current = at, p.current = lt, h.current = ft;
    const Z = new Uint8Array(lt.fftSize), $ = () => {
      const N = p.current;
      if (!N) return;
      N.getByteTimeDomainData(Z);
      let rt = 0;
      for (let Y = 0; Y < Z.length; Y += 1) {
        const dt = (Z[Y] - 128) / 128;
        rt += dt * dt;
      }
      const J = Math.sqrt(rt / Z.length), v = Math.max(0.04, Math.min(1, J * 5.2)), O = u.current.slice(1);
      O.push(v), u.current = O, R(O), d.current = window.requestAnimationFrame($);
    };
    d.current = window.requestAnimationFrame($);
  }, []), F = Q(async () => {
    if (!(!k || M || o.current || g))
      try {
        const G = await navigator.mediaDevices.getUserMedia({ audio: !0 }), at = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], ft = typeof MediaRecorder.isTypeSupported == "function" ? at.find(($) => MediaRecorder.isTypeSupported($)) : void 0, Z = ft ? new MediaRecorder(G, { mimeType: ft }) : new MediaRecorder(G);
        s.current = [], f.current = !0, l.current = G, o.current = Z, z(), C(G), Z.ondataavailable = ($) => {
          $.data.size > 0 && s.current.push($.data);
        }, Z.onstop = async () => {
          y(!1);
          const $ = new Blob(s.current, { type: Z.mimeType || "audio/webm" });
          if (s.current = [], o.current = null, c(), w(), $.size === 0) {
            z();
            return;
          }
          if (!f.current) {
            z();
            return;
          }
          S(!0);
          try {
            const N = await Ca({
              widgetId: e,
              apiUrl: t,
              audio: $
            });
            a(N);
          } catch (N) {
            console.error("[Pitaj.io] Dictation transcription failed", N), r == null || r(N);
          } finally {
            S(!1), z();
          }
        }, Z.onerror = () => {
          y(!1), o.current = null, c(), w(), z();
        }, Z.start(), y(!0);
      } catch (G) {
        y(!1), c(), w(), z(), console.error("[Pitaj.io] Dictation microphone access failed", G);
      }
  }, [t, g, M, k, r, a, z, C, c, w, e]), U = Q(() => {
    const T = o.current;
    !T || !g || M || (f.current = !0, T.stop(), y(!1));
  }, [g, M]), A = Q(() => {
    const T = o.current;
    !T || !g || (f.current = !1, T.stop(), y(!1));
  }, [g]);
  return K(() => () => {
    const T = o.current;
    T && T.state !== "inactive" && T.stop(), c(), w();
  }, [c, w]), {
    isSupported: k,
    isListening: g,
    isProcessing: M,
    waveformLevels: I,
    start: F,
    stopAndTranscribe: U,
    cancel: A
  };
}
const Jt = [
  { score: 1, emoji: "😡", label: "Jako loše", color: "#ef4444", satisfaction: "negative" },
  { score: 2, emoji: "🙁", label: "Loše", color: "#f97316", satisfaction: "negative" },
  { score: 3, emoji: "😐", label: "U redu", color: "#eab308", satisfaction: "neutral" },
  { score: 4, emoji: "🙂", label: "Dobro", color: "#84cc16", satisfaction: "positive" },
  { score: 5, emoji: "🤩", label: "Odlično!", color: "#10b981", satisfaction: "positive" }
];
function Ai({
  initialScore: e = 5,
  title: t = "Kako biste ocijenili vaše iskustvo?",
  subtitle: a,
  onSubmit: r,
  onDismiss: n,
  compact: o = !1
}) {
  const [l, s] = P(e), [f, d] = P(!1), [m, p] = P(!1), [h, u] = P(null), [g, y] = P(!1), M = Jt.find((k) => k.score === l) || Jt[Jt.length - 1], S = Q((k) => {
    s(k), u(null), y(!0), setTimeout(() => y(!1), 300);
  }, []), I = Q(async (k) => {
    if (k && (k.stopPropagation(), k.preventDefault()), !(f || m)) {
      d(!0), u(null);
      try {
        await r(M.satisfaction, l), p(!0);
      } catch (c) {
        d(!1), u(
          (c == null ? void 0 : c.message) || "Nismo uspjeli sačuvati ocjenu. Molimo pokušajte ponovo."
        );
      }
    }
  }, [M, l, r, f, m]), R = (l - 1) / 4 * 100;
  return m ? /* @__PURE__ */ i("div", { className: `pitaj-satisfaction-success ${o ? "is-compact" : ""}`, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "pitaj-satisfaction-success-icon",
        style: { backgroundColor: `${M.color}20`, color: M.color },
        children: /* @__PURE__ */ i(Vt, { size: 20 })
      }
    ),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-title", children: "Hvala na ocjeni!" }),
    /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-success-desc", children: [
      "Zabilježeno: ",
      M.emoji,
      " ",
      M.label,
      " (",
      l,
      "/5)"
    ] })
  ] }) : /* @__PURE__ */ i(
    "div",
    {
      className: `pitaj-satisfaction-card ${o ? "is-compact" : ""}`,
      onClick: (k) => k.stopPropagation(),
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-header", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-satisfaction-prompt", children: t }),
          a && /* @__PURE__ */ i("span", { className: "pitaj-satisfaction-subtitle", children: a })
        ] }),
        /* @__PURE__ */ i("div", { className: "pitaj-mood-pill-wrap", children: /* @__PURE__ */ i(
          "div",
          {
            className: "pitaj-mood-pill",
            style: {
              backgroundColor: `${M.color}15`,
              color: M.color,
              borderColor: `${M.color}35`
            },
            children: [
              /* @__PURE__ */ i("span", { className: `pitaj-mood-pill-emoji ${g ? "is-bouncing" : ""}`, "aria-hidden": "true", children: M.emoji }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-label", children: M.label }),
              /* @__PURE__ */ i("span", { className: "pitaj-mood-pill-score", children: [
                l,
                " / 5"
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "pitaj-mood-row", role: "radiogroup", "aria-label": "Ocjena zadovoljstva", children: Jt.map((k) => {
          const c = l === k.score;
          return /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": c,
              "aria-label": `${k.score} od 5 - ${k.label}`,
              className: `pitaj-mood-btn ${c ? "is-active" : ""}`,
              style: c ? {
                backgroundColor: `${k.color}18`,
                borderColor: k.color,
                boxShadow: `0 4px 14px ${k.color}30`,
                color: k.color
              } : void 0,
              onClick: () => S(k.score),
              children: [
                /* @__PURE__ */ i("span", { className: "pitaj-mood-btn-emoji", children: k.emoji }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: "pitaj-mood-btn-num",
                    style: c ? { color: k.color, fontWeight: 700 } : void 0,
                    children: k.score
                  }
                )
              ]
            },
            `mood-${k.score}`
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
              value: l,
              onInput: (k) => S(Number(k.target.value)),
              className: "pitaj-range-slider",
              "aria-label": `Klizač ocjene: ${l} od 5 (${M.label})`,
              style: {
                color: M.color,
                background: `linear-gradient(to right, ${M.color} 0%, ${M.color} ${R}%, var(--pitaj-border) ${R}%, var(--pitaj-border) 100%)`
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
              backgroundColor: M.color,
              boxShadow: `0 4px 14px ${M.color}40`
            },
            disabled: f,
            onClick: I,
            children: f ? "Slanje..." : "Pošalji ocjenu"
          }
        ),
        n && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-satisfaction-dismiss",
            onClick: (k) => {
              k.stopPropagation(), n();
            },
            children: "Možda kasnije"
          }
        ),
        h && /* @__PURE__ */ i("div", { className: "pitaj-satisfaction-error", role: "alert", children: /* @__PURE__ */ i("span", { children: h }) })
      ]
    }
  );
}
const Ta = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Je() {
  const [e, t] = P(0);
  return K(() => {
    const a = setTimeout(() => t(1), 1600), r = setTimeout(() => t(2), 3600);
    return () => {
      clearTimeout(a), clearTimeout(r);
    };
  }, []), /* @__PURE__ */ i("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ i(_a, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ i("span", { className: "pitaj-thinking-text", children: Ta[e] }, e)
  ] });
}
const Da = Me(
  () => import("./InlineWidgetRenderer-UJ_IQAv8.js"),
  (e) => e.InlineWidgetRenderer
);
function Ea(e) {
  const t = typeof e == "string" ? new Date(e) : e;
  return isNaN(t.getTime()) ? "" : t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Pa(e) {
  const t = e.split(`
`).map((o) => o.trim()).filter((o) => o.length > 0);
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
  const n = t.slice(1).map((o) => {
    if (!o.startsWith("- ") && !o.startsWith("* ")) return null;
    const l = o.slice(2), s = l.indexOf(":");
    if (s < 1) return null;
    const f = l.slice(0, s).trim(), d = l.slice(s + 1).trim();
    return !f || !d ? null : { label: f, value: d };
  }).filter((o) => !!o);
  return n.length < 1 ? null : { title: a, entries: n };
}
function Ba({
  conversation: e,
  config: t,
  isStreaming: a,
  rateLimitCountdown: r,
  errorBanner: n,
  onSendMessage: o,
  onApiError: l,
  onSubmitSatisfaction: s,
  isRatingPromptActive: f
}) {
  var N, rt, J;
  const [d, m] = P(""), [p, h] = P(!1), [u, g] = P(null), [y, M] = P([]), S = it(null), I = it(null), R = it(null), k = t.content || {}, c = t.chatAvailable === !1, w = t.transcribeAvailable === !1, z = a || r !== null || c, C = zi({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: Q((v) => {
      m((O) => O ? `${O} ${v}` : v);
    }, []),
    onError: Q((v) => {
      l == null || l(v, "Greška pri transkripciji.");
    }, [l])
  });
  K(() => {
    const v = S.current;
    v && (v.scrollTop = v.scrollHeight);
  }, [e.messages, a]), K(() => {
    const v = I.current;
    v && (v.style.height = "auto", v.style.height = `${Math.min(v.scrollHeight, 96)}px`);
  }, [d]), K(() => {
    h(!1);
  }, [k.dismissibleNotice]);
  const F = (v) => {
    M((O) => {
      const Y = O.find((dt) => dt.id === v);
      if (Y != null && Y.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(Y.previewUrl);
        } catch {
        }
      return O.filter((dt) => dt.id !== v);
    });
  }, U = (v) => {
    const O = (v ?? d).trim();
    if (!O && y.length === 0 || z) return;
    const Y = `${O}${Ii(y)}`.trim();
    o(Y), y.forEach((dt) => {
      if (dt.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(dt.previewUrl);
        } catch {
        }
    }), M([]), v || (m(""), I.current && (I.current.style.height = "auto"));
  }, A = (v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), U());
  }, T = k.messagePlaceholder || t.placeholder || "Pitajte bilo šta...", G = ((N = k.dismissibleNotice) == null ? void 0 : N.trim()) || "", at = ((rt = k.footerText) == null ? void 0 : rt.trim()) || "", lt = k.showSuggestedMessages === !1 || k.keepShowingSuggestedMessages !== !0 ? [] : k.suggestedMessageRows || [], ft = ((J = [...e.messages].reverse().find((v) => v.sender === "ai")) == null ? void 0 : J.id) ?? null, Z = C.isListening, $ = async (v, O) => {
    navigator.clipboard && (await navigator.clipboard.writeText(O), g(v), window.setTimeout(() => {
      g((Y) => Y === v ? null : Y);
    }, 1600));
  };
  return /* @__PURE__ */ i("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ i("div", { ref: S, className: "pitaj-messages-container", children: [
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
        const O = v.sender === "user", Y = O ? Pa(v.content) : null, dt = !O && v.isStreaming && !v.content && !v.widget;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `pitaj-msg-row ${O ? "user" : "ai"}${v.widget ? " has-widget" : ""}${dt ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: [
              O ? /* @__PURE__ */ i("div", { className: `pitaj-msg-bubble ${Y ? "is-form-submission" : ""}`, children: Y ? /* @__PURE__ */ i("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ i("div", { className: "pitaj-form-submission-title", children: Y.title.toLowerCase().startsWith("forma") ? Y.title : `Forma: ${Y.title}` }),
                /* @__PURE__ */ i("dl", { className: "pitaj-form-submission-grid", children: Y.entries.map((mt) => /* @__PURE__ */ i("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ i("dt", { children: mt.label }),
                  /* @__PURE__ */ i("dd", { children: mt.value })
                ] }, `${v.id}-${mt.label}`)) })
              ] }) : v.content }) : /* @__PURE__ */ i(wt, { children: [
                v.content ? /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ i(Ma, { content: v.content }),
                  v.isStreaming && /* @__PURE__ */ i("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                v.widget && /* @__PURE__ */ i("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ i(Da, { widget: v.widget, onAction: (mt) => U(mt) }) }),
                v.isStreaming && !v.content && !v.widget && /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Je, {}) })
              ] }),
              !O && v.sources && v.sources.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ i("span", { className: "pitaj-sources-title", children: "Izvori i dokumentacija:" }),
                /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: v.sources.map((mt) => /* @__PURE__ */ i(
                  "a",
                  {
                    href: mt.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ i("span", { children: mt.title }),
                      /* @__PURE__ */ i(ba, { size: 10 })
                    ]
                  },
                  mt.id
                )) })
              ] }),
              !O && v.suggestedQuestions && v.suggestedQuestions.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-followups", children: v.suggestedQuestions.map((mt, vt) => /* @__PURE__ */ i(
                "button",
                {
                  onClick: () => U(mt),
                  disabled: z,
                  className: "pitaj-followup-chip",
                  children: mt
                },
                `sug-f-${vt}`
              )) }),
              (!v.isStreaming || !!v.content || !!v.widget) && /* @__PURE__ */ i("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ i("span", { children: Ea(v.timestamp) }),
                !O && /* @__PURE__ */ i("div", { className: "pitaj-msg-actions", children: [
                  v.id === ft && !a && /* @__PURE__ */ i(wt, { children: k.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ i(wt, { children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: () => s == null ? void 0 : s("positive"),
                        className: `pitaj-msg-action-btn ${e.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": "Korisno",
                        title: "Korisno",
                        children: /* @__PURE__ */ i(xa, { size: 14 })
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
                        children: /* @__PURE__ */ i(wa, { size: 14 })
                      }
                    )
                  ] }) }),
                  v.id === ft && !a && k.copyMessageEnabled !== !1 && !!v.content && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => void $(v.id, v.content),
                      className: `pitaj-msg-action-btn ${u === v.id ? "is-active" : ""}`,
                      "aria-label": u === v.id ? "Kopirano" : "Kopiraj odgovor",
                      title: u === v.id ? "Kopirano" : "Kopiraj odgovor",
                      children: u === v.id ? /* @__PURE__ */ i(Vt, { size: 14 }) : /* @__PURE__ */ i(va, { size: 14 })
                    }
                  )
                ] }),
                O && /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ i(
                  Vt,
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
      a && e.messages.length > 0 && e.messages[e.messages.length - 1].sender === "user" && /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ i(Je, {}) }) }) }),
      (f || e.status === "ended" && !e.satisfaction) && /* @__PURE__ */ i("div", { className: "pitaj-inline-satisfaction", children: /* @__PURE__ */ i(
        Ai,
        {
          title: "Ocijenite razgovor sa agentom",
          onSubmit: (v, O) => {
            s == null || s(v, O);
          }
        }
      ) })
    ] }),
    (n || r) && /* @__PURE__ */ i("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ i("div", { className: "pitaj-alert-banner", children: /* @__PURE__ */ i("span", { children: r ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${r}s.` : n }) }) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Ni,
        {
          rows: lt,
          fallbackQuestions: k.keepShowingSuggestedMessages ? t.suggestedQuestions : [],
          onSelect: U,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      y.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: y.map((v) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: v.previewUrl ? /* @__PURE__ */ i("img", { src: v.previewUrl, alt: v.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(ki, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: v.name, children: v.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => F(v.id),
            "aria-label": `Ukloni ${v.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(Mt, { size: 10 })
          }
        )
      ] }, v.id)) }),
      G && !p && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: G }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => h(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(Mt, { size: 12 })
          }
        )
      ] }),
      C.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${Z ? "is-recording" : ""}`, children: [
        k.attachmentsEnabled && /* @__PURE__ */ i(wt, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: R,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (v) => {
                const O = v.currentTarget.files;
                if (v.currentTarget.value = "", !O || O.length === 0) return;
                const Y = await Si(O);
                M((dt) => [...dt, ...Y].slice(0, 3));
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
                return (v = R.current) == null ? void 0 : v.click();
              },
              children: /* @__PURE__ */ i(Mi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: I,
            value: d,
            onInput: (v) => m(v.target.value),
            onKeyDown: A,
            placeholder: T,
            rows: 1,
            disabled: z,
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
              onClick: () => C.cancel(),
              children: /* @__PURE__ */ i(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: C.waveformLevels.map((v, O) => /* @__PURE__ */ i(
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
              onClick: () => C.stopAndTranscribe(),
              disabled: z || C.isProcessing,
              children: /* @__PURE__ */ i(Vt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(wt, { children: [
          k.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${C.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: C.isProcessing ? "Transkribujem..." : C.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => C.start(),
              disabled: z || w || !C.isSupported || C.isProcessing,
              children: /* @__PURE__ */ i(_i, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => U(),
              disabled: z || !d.trim() && y.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ i(wi, { size: 16 })
            }
          )
        ] })
      ] }),
      at && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: at }),
      t.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(pe, { size: 13, className: "pitaj-powered-icon" }),
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
function Ua({
  config: e,
  openedByUser: t = !1,
  onStart: a,
  onApiError: r
}) {
  var ft, Z;
  const [n, o] = P(""), [l, s] = P(!1), [f, d] = P(!1), [m, p] = P([]), h = it(null), u = it(null), g = e.content || {}, y = e.chatAvailable === !1, M = e.transcribeAvailable === !1, S = zi({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: Q(($) => {
      o((N) => N ? `${N} ${$}` : $);
    }, []),
    onError: Q(($) => {
      r == null || r($, "Greška pri transkripciji.");
    }, [r])
  });
  K(() => {
    var $;
    t && (($ = h.current) == null || $.focus({ preventScroll: !0 }));
  }, [t]), K(() => {
    if (typeof window > "u") return;
    const $ = window.matchMedia("(max-width: 768px)"), N = () => s($.matches);
    return N(), $.addEventListener("change", N), () => $.removeEventListener("change", N);
  }, []), K(() => {
    d(!1);
  }, [g.dismissibleNotice]);
  const R = (l && g.useDifferentMessageMobile && g.mobileWelcomeMessage ? g.mobileWelcomeMessage : e.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map(($) => $.trim()).filter(($) => $.length > 0), k = g.autoShowInitialMessages !== !1 && !t, c = !l || g.showAutoPopupMobile !== !1, w = l && g.useDifferentDurationMobile && typeof g.mobileAutoShowDurationSeconds == "number" ? g.mobileAutoShowDurationSeconds : g.autoShowDurationSeconds ?? 0, z = k && c ? Math.max(0, w) * 1e3 : 0, C = ($) => {
    p((N) => {
      const rt = N.find((J) => J.id === $);
      if (rt != null && rt.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(rt.previewUrl);
        } catch {
        }
      return N.filter((J) => J.id !== $);
    });
  }, F = ($) => {
    const N = ($ ?? n).trim();
    if (!N && m.length === 0 || y) return;
    const rt = `${N}${Ii(m)}`.trim();
    a(rt), m.forEach((J) => {
      if (J.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(J.previewUrl);
        } catch {
        }
    }), o(""), p([]);
  }, U = ($) => {
    $.key === "Enter" && !$.shiftKey && ($.preventDefault(), F());
  }, A = g.showSuggestedMessages === !1 ? [] : g.suggestedMessageRows || [], T = g.messagePlaceholder || e.placeholder || "Upišite svoje pitanje...", G = ((ft = g.dismissibleNotice) == null ? void 0 : ft.trim()) || "", at = ((Z = g.footerText) == null ? void 0 : Z.trim()) || "", lt = S.isListening;
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ i("div", { className: "pitaj-new-screen", children: (R.length > 0 ? R : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map(($, N) => /* @__PURE__ */ i("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ i("div", { className: "pitaj-msg-bubble", children: $ }) }) }, `welcome-${N}`)) }),
    /* @__PURE__ */ i("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ i(
        Ni,
        {
          rows: A,
          fallbackQuestions: e.suggestedQuestions,
          onSelect: F,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: z,
          staggerMs: 150
        }
      ),
      m.length > 0 && /* @__PURE__ */ i("div", { className: "pitaj-attachment-list", children: m.map(($) => /* @__PURE__ */ i("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ i("div", { className: "pitaj-attachment-thumb-wrap", children: $.previewUrl ? /* @__PURE__ */ i("img", { src: $.previewUrl, alt: $.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ i("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ i(ki, { size: 14 }) }) }),
        /* @__PURE__ */ i("span", { className: "pitaj-attachment-name", title: $.name, children: $.name }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => C($.id),
            "aria-label": `Ukloni ${$.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ i(Mt, { size: 10 })
          }
        )
      ] }, $.id)) }),
      G && !f && /* @__PURE__ */ i("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ i("span", { className: "pitaj-dismissible-notice-text", children: G }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => d(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ i(Mt, { size: 12 })
          }
        )
      ] }),
      S.isProcessing && /* @__PURE__ */ i("div", { className: "pitaj-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ i("div", { className: `pitaj-input-wrapper ${lt ? "is-recording" : ""}`, children: [
        g.attachmentsEnabled && /* @__PURE__ */ i(wt, { children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: u,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async ($) => {
                const N = $.currentTarget.files;
                if ($.currentTarget.value = "", !N || N.length === 0) return;
                const rt = await Si(N);
                p((J) => [...J, ...rt].slice(0, 3));
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
              children: /* @__PURE__ */ i(Mi, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: h,
            value: n,
            onInput: ($) => o($.target.value),
            onKeyDown: U,
            placeholder: T,
            rows: 1,
            disabled: y,
            className: "pitaj-textarea",
            style: lt ? { display: "none" } : void 0
          }
        ),
        lt ? /* @__PURE__ */ i("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => S.cancel(),
              children: /* @__PURE__ */ i(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ i("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ i("div", { className: "pitaj-wave", children: S.waveformLevels.map(($, N) => /* @__PURE__ */ i(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + $ * 15))}px` }
            },
            `dict-wave-${N}`
          )) }) }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => S.stopAndTranscribe(),
              disabled: y || S.isProcessing,
              children: /* @__PURE__ */ i(Vt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ i(wt, { children: [
          g.voiceToTextEnabled !== !1 && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${S.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: S.isProcessing ? "Transkribujem..." : S.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => S.start(),
              disabled: y || M || !S.isSupported || S.isProcessing,
              children: /* @__PURE__ */ i(_i, { size: 17 })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => F(),
              disabled: y || !n.trim() && m.length === 0,
              className: "pitaj-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ i(wi, { size: 16 })
            }
          )
        ] })
      ] }),
      at && /* @__PURE__ */ i("div", { className: "pitaj-custom-footer", children: at }),
      e.poweredBy && /* @__PURE__ */ i("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ i(pe, { size: 13, className: "pitaj-powered-icon" }),
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
function Ra({
  isOpen: e,
  onClick: t,
  unreadCount: a = 0,
  config: r
}) {
  var m, p, h, u, g, y;
  const n = ((m = r.content) == null ? void 0 : m.launcherIconStyle) || "message-circle", o = typeof ((p = r.content) == null ? void 0 : p.launcherIconUrl) == "string" ? r.content.launcherIconUrl.trim() : "", l = ((h = r.content) == null ? void 0 : h.launcherShowText) === !0, s = ((u = r.content) == null ? void 0 : u.launcherTextSide) === "left" ? "left" : "right", f = l ? ((y = (g = r.content) == null ? void 0 : g.launcherText) == null ? void 0 : y.trim()) || r.title || r.name || "Otvori chat" : null;
  return /* @__PURE__ */ i(
    "button",
    {
      onClick: t,
      className: `pitaj-launcher-btn ${e ? "is-open" : ""} ${l ? "has-label" : ""} ${l && s === "left" ? "label-left" : ""}`,
      "aria-label": e ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": e,
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon open-icon", children: n === "custom" && o !== "" ? /* @__PURE__ */ i("img", { src: o, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ i(n === "sparkles" ? ca : n === "message-square" ? yi : n === "contact" ? fa : da, { size: 24 }) }),
          /* @__PURE__ */ i("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ i(Mt, { size: 22 }) })
        ] }),
        f && !e && /* @__PURE__ */ i("span", { className: "pitaj-launcher-label", children: f }),
        a > 0 && !e && /* @__PURE__ */ i("span", { className: "pitaj-unread-badge", children: a > 9 ? "9+" : a })
      ]
    }
  );
}
function Fa({ isOpen: e, onOpen: t, config: a, pendingRating: r }) {
  var z, C, F, U;
  const [n, o] = P(!1), [l, s] = P(!1), [f, d] = P(!1), [m, p] = P(e), h = it(null);
  K(() => {
    e && (p(!0), d(!1));
  }, [e]), K(() => {
    if (r && !e) {
      const A = setTimeout(() => {
        d(!0);
      }, 800);
      return () => clearTimeout(A);
    }
  }, [r, e]), K(() => {
    const A = () => {
      var G;
      if (typeof window > "u") return;
      let T = window.innerWidth <= 640;
      if (!T && h.current) {
        const at = (G = h.current.closest(".pitaj-root")) == null ? void 0 : G.parentElement;
        at && at.clientWidth > 0 && at.clientWidth <= 640 && (T = !0);
      }
      o(T);
    };
    return A(), window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, []);
  const u = a.content || {}, g = u.autoShowInitialMessages !== !1, y = u.showAutoPopupMobile !== !1, M = !n || y, S = n && u.useDifferentDurationMobile && typeof u.mobileAutoShowDurationSeconds == "number" ? u.mobileAutoShowDurationSeconds : u.autoShowDurationSeconds ?? 0;
  if (K(() => {
    if (r) return;
    if (!g || !M || l || e || m) {
      d(!1);
      return;
    }
    const A = Math.max(0, S) * 1e3, T = setTimeout(() => {
      d(!0);
    }, A);
    return () => clearTimeout(T);
  }, [g, M, l, e, m, S, r]), !f || e)
    return null;
  let I = "";
  n && u.useDifferentMessageMobile && ((z = u.mobileWelcomeMessage) != null && z.trim()) ? I = u.mobileWelcomeMessage.trim() : (C = u.popupMessageText) != null && C.trim() ? I = u.popupMessageText.trim() : (F = a.welcomeMessage) != null && F.trim() ? I = a.welcomeMessage.trim() : (U = a.welcomeHeadline) != null && U.trim() ? I = a.welcomeHeadline.trim() : I = "Zdravo! Kako vam mogu pomoći danas?";
  const R = (A) => {
    A.stopPropagation(), A.preventDefault(), r ? r.onDismiss() : s(!0), d(!1);
  }, k = () => {
    t();
  }, c = a.title || a.name || "Pitaj.io Asistent", w = a.logo || a.avatar;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: h,
      className: `pitaj-launcher-popup ${r ? "is-rating-popup" : ""}`,
      onClick: k,
      role: "button",
      tabIndex: 0,
      "aria-label": `${c}: ${r ? "Ocijenite razgovor" : I}`,
      onKeyDown: (A) => {
        (A.key === "Enter" || A.key === " ") && (A.preventDefault(), k());
      },
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ i("div", { className: "pitaj-popup-avatar", children: w ? /* @__PURE__ */ i("img", { src: w, alt: "" }) : /* @__PURE__ */ i(pe, { size: 14 }) }),
            /* @__PURE__ */ i("span", { className: "pitaj-popup-title", children: c }),
            r && /* @__PURE__ */ i("span", { className: "pitaj-popup-tag", children: "Nova poruka" })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: R,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ i(Mt, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: `pitaj-popup-body ${r ? "is-rating-body" : ""}`, children: r ? /* @__PURE__ */ i(
          Ai,
          {
            compact: !0,
            title: "Kako biste ocijenili vaše iskustvo?",
            onSubmit: async (A, T) => {
              await r.onSubmitRating(A, T), setTimeout(() => {
                d(!1);
              }, 2e3);
            }
          }
        ) : I }),
        /* @__PURE__ */ i("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function Ha(e) {
  if (!e) return "";
  const t = typeof e == "string" ? new Date(e) : e, r = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), n = Math.floor(r / (1e3 * 60)), o = Math.floor(r / (1e3 * 60 * 60)), l = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(n) || n < 1 ? "sada" : n < 60 ? `prije ${n}m` : o < 24 ? `prije ${o}h` : l < 7 ? `prije ${l}d` : t.toLocaleDateString();
}
function Oa({ config: e, visitorId: t, onSelectTicket: a }) {
  const [r, n] = P([]), [o, l] = P("open"), [s, f] = P(1), [d, m] = P(!0), [p, h] = P(!0), [u, g] = P(!1), [y, M] = P(null), S = it(null), I = it(null), R = it(!1);
  K(() => {
    let w = !0;
    return h(!0), n([]), f(1), m(!0), M(null), R.current = !1, be({
      widgetId: e.companyId,
      visitorId: t,
      apiUrl: e.apiUrl,
      status: o,
      page: 1,
      perPage: 15
    }).then((z) => {
      w && (n(z.tickets), m(z.hasMore), f(1));
    }).catch((z) => {
      w && M(z instanceof Error ? z.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      w && h(!1);
    }), () => {
      w = !1;
    };
  }, [e.apiUrl, e.companyId, t, o]);
  const k = Q(() => {
    if (p || R.current || !d) return;
    R.current = !0, g(!0);
    const w = s + 1;
    be({
      widgetId: e.companyId,
      visitorId: t,
      apiUrl: e.apiUrl,
      status: o,
      page: w,
      perPage: 15
    }).then((z) => {
      n((C) => {
        const F = new Set(C.map((A) => A.id)), U = z.tickets.filter((A) => !F.has(A.id));
        return [...C, ...U];
      }), m(z.hasMore), f(w);
    }).catch((z) => {
      console.error("[Pitaj.io] Error loading more tickets:", z);
    }).finally(() => {
      g(!1), R.current = !1;
    });
  }, [e.apiUrl, e.companyId, d, p, s, o, t]);
  return K(() => {
    const w = I.current, z = S.current;
    if (!w || !z || !d || p || u) return;
    const C = new IntersectionObserver(
      (F) => {
        var U;
        (U = F[0]) != null && U.isIntersecting && k();
      },
      { root: z, rootMargin: "120px" }
    );
    return C.observe(w), () => C.disconnect();
  }, [d, p, u, k]), /* @__PURE__ */ i(
    "div",
    {
      ref: S,
      className: "pitaj-tickets-screen",
      onScroll: (w) => {
        const z = w.currentTarget;
        !z || !d || p || R.current || z.scrollHeight - z.scrollTop - z.clientHeight < 120 && k();
      },
      tabIndex: 0,
      role: "region",
      "aria-label": "Lista tiketa",
      children: [
        /* @__PURE__ */ i("div", { className: "pitaj-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
          /* @__PURE__ */ i(
            "button",
            {
              className: o === "open" ? "is-active" : "",
              onClick: () => l("open"),
              role: "tab",
              "aria-selected": o === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: o === "closed" ? "is-active" : "",
              onClick: () => l("closed"),
              role: "tab",
              "aria-selected": o === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        p ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ i("span", { children: "Učitavanje tiketa…" })
        ] }) : y ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ i("span", { children: y }) }) : r.length === 0 ? /* @__PURE__ */ i("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ i(yi, { size: 30 }),
          /* @__PURE__ */ i("strong", { children: o === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ i("span", { children: o === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ i("div", { className: "pitaj-ticket-list", children: [
          r.map((w) => {
            const z = w.messages || [], C = z.length > 0 ? z[z.length - 1] : null, F = z.length, U = F === 1 ? "1 poruka" : F >= 2 && F <= 4 ? `${F} poruke` : `${F} poruka`;
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
                  C && /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-preview", children: C.content }),
                  /* @__PURE__ */ i("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-time", children: Ha(w.updatedAt) }),
                    F > 0 && /* @__PURE__ */ i("span", { className: "pitaj-ticket-card-count", children: U })
                  ] })
                ] })
              },
              w.id
            );
          }),
          u && /* @__PURE__ */ i("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ i("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ i("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ i("div", { ref: I, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const Va = Me(() => import("./HistoryScreen-yoUlbBlF.js"), (e) => e.HistoryScreen), Wa = Me(() => import("./FormActionsScreen-DGNgbdAU.js"), (e) => e.FormActionsScreen);
function Zt(e) {
  if (!e || typeof e != "string") return null;
  const t = e.trim().toLowerCase();
  if (t === "transparent") return { r: 0, g: 0, b: 0 };
  if (t === "white") return { r: 255, g: 255, b: 255 };
  if (t === "black") return { r: 0, g: 0, b: 0 };
  if (t.startsWith("#")) {
    const n = t.slice(1);
    return n.length === 3 || n.length === 4 ? {
      r: Number.parseInt(n[0] + n[0], 16),
      g: Number.parseInt(n[1] + n[1], 16),
      b: Number.parseInt(n[2] + n[2], 16)
    } : n.length === 6 || n.length === 8 ? {
      r: Number.parseInt(n.slice(0, 2), 16),
      g: Number.parseInt(n.slice(2, 4), 16),
      b: Number.parseInt(n.slice(4, 6), 16)
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
    const n = Number(r[1]) % 360, o = Number(r[2]) / 100, l = Number(r[3]) / 100, s = (1 - Math.abs(2 * l - 1)) * o, f = s * (1 - Math.abs(n / 60 % 2 - 1)), d = l - s / 2;
    let m = 0, p = 0, h = 0;
    return 0 <= n && n < 60 ? (m = s, p = f, h = 0) : 60 <= n && n < 120 ? (m = f, p = s, h = 0) : 120 <= n && n < 180 ? (m = 0, p = s, h = f) : 180 <= n && n < 240 ? (m = 0, p = f, h = s) : 240 <= n && n < 300 ? (m = f, p = 0, h = s) : 300 <= n && n < 360 && (m = s, p = 0, h = f), {
      r: Math.round((m + d) * 255),
      g: Math.round((p + d) * 255),
      b: Math.round((h + d) * 255)
    };
  }
  return null;
}
function Ka(e) {
  return Zt(e);
}
function Xt(e, t) {
  const a = Zt(e);
  return a ? `rgba(${a.r}, ${a.g}, ${a.b}, ${t})` : null;
}
function Ga(e, t, a) {
  const r = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(a)}`;
}
function Ot(e) {
  const t = Zt(e);
  return t && (0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Za(e, t) {
  const a = Zt(e);
  if (a)
    return (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255 <= 0.55;
  if (t) {
    const r = Zt(t);
    if (r)
      return (0.2126 * r.r + 0.7152 * r.g + 0.0722 * r.b) / 255 > 0.55;
  }
  return !1;
}
function Ya(e) {
  const t = Ka(e);
  if (!t) return e;
  const a = Ot(e) === "#111827", r = a ? 0.2 : 0.16, n = a ? 0 : 255;
  return Ga(
    t.r + (n - t.r) * r,
    t.g + (n - t.g) * r,
    t.b + (n - t.b) * r
  );
}
function qa({
  config: e,
  startOpen: t = !1,
  initialScreen: a = "new-conversation",
  onEvent: r,
  isInline: n = !1,
  isMobile: o,
  isCanvasPreview: l = !1
}) {
  var Bt, Ut, Rt, x, L, D, q, E, et, ot, V, X, B, gt, H;
  const {
    config: s,
    setConfig: f,
    isOpen: d,
    setIsOpen: m,
    screen: p,
    setScreen: h,
    conversations: u,
    activeConversation: g,
    totalUnread: y,
    isStreaming: M,
    rateLimitTimer: S,
    errorBanner: I,
    selectConversation: R,
    startNewConversation: k,
    endConversation: c,
    deleteConversation: w,
    sendUserMessage: z,
    submitSatisfaction: C,
    visitorContact: F,
    visitorId: U,
    activeConversationId: A,
    appendConversationMessage: T,
    handleApiError: G
  } = pa(e, {
    startOpen: t,
    initialScreen: a,
    emitEvent: r,
    onActionTrigger: (j) => {
      if (Z(!0), m(!0), (p === "history" || p === "new-conversation") && h("conversation"), j.widget_id || j.widget)
        return;
      const _ = Number(j.id), b = Number(j.form_id), W = Number.isInteger(_) && _ > 0 ? _ : null, nt = Number.isInteger(b) && b > 0 ? -b : null;
      N(W ?? nt);
    }
  }), at = it(a), lt = it(t), [ft, Z] = P(t), [$, N] = P(() => {
    var j, _, b, W;
    return ((j = s.previewDraft) == null ? void 0 : j.initialStep) === "form" && !!!(s.previewDraft.widget || (_ = s.previewDraft.action) != null && _.widget || (b = s.previewDraft.action) != null && b.widget_id) ? ((W = s.previewDraft.action) == null ? void 0 : W.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  K(() => {
    var j, _, b, W, nt, pt, zt;
    if (((j = s.previewDraft) == null ? void 0 : j.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (_ = s.previewDraft.action) != null && _.widget || (b = s.previewDraft.action) != null && b.widget_id)) {
        const jt = ((W = s.previewDraft.action) == null ? void 0 : W.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        jt !== null && N(jt);
      }
    } else (((nt = s.previewDraft) == null ? void 0 : nt.initialStep) === "idle" || ((pt = s.previewDraft) == null ? void 0 : pt.initialStep) === "submitted" || ((zt = s.previewDraft) == null ? void 0 : zt.initialStep) === "dismissed") && N(null);
  }, [
    (Bt = s.previewDraft) == null ? void 0 : Bt.initialStep,
    (Rt = (Ut = s.previewDraft) == null ? void 0 : Ut.action) == null ? void 0 : Rt.id,
    (L = (x = s.previewDraft) == null ? void 0 : x.form) == null ? void 0 : L.id,
    (D = s.previewDraft) == null ? void 0 : D.widget
  ]);
  const [rt, J] = P(null), [v, O] = P(null), [Y, dt] = P(() => /* @__PURE__ */ new Set()), mt = Q(() => {
    p === "conversation" && g && g.messages.length > 0 && !(g.satisfaction && g.satisfaction !== "none") && !Y.has(g.id) && O(g.id);
  }, [p, g, Y]), vt = Q(async (j, _) => {
    v && (await C(v, j, _), O(null));
  }, [v, C]), yt = Q(() => {
    v && (dt((j) => new Set(j).add(v)), O(null));
  }, [v]), ht = it(null), [xt, _t] = P(() => typeof o == "boolean" ? o : n ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  K(() => {
    if (typeof o == "boolean") {
      _t(o);
      return;
    }
    const j = () => {
      if (typeof window > "u") return;
      if (n) {
        _t(!1);
        return;
      }
      let _ = window.innerWidth <= 640;
      if (!_ && ht.current) {
        const b = ht.current.getRootNode(), W = b instanceof ShadowRoot ? b.host : ht.current.parentElement, nt = (W == null ? void 0 : W.parentElement) || W;
        nt && nt.clientWidth > 0 && nt.clientWidth <= 640 && (_ = !0);
      }
      _t(_);
    };
    return j(), window.addEventListener("resize", j), window.addEventListener("orientationchange", j), () => {
      window.removeEventListener("resize", j), window.removeEventListener("orientationchange", j);
    };
  }, [o]), K(() => {
    if (typeof window > "u") return;
    const j = () => {
      const b = ht.current;
      if (!b) return;
      const W = window.visualViewport;
      if (W) {
        const nt = W.height < window.innerHeight - 100;
        b.style.setProperty("--pitaj-viewport-height", `${Math.round(W.height)}px`), b.style.setProperty("--pitaj-viewport-top", `${Math.round(W.offsetTop)}px`), b.style.setProperty("--pitaj-viewport-left", `${Math.round(W.offsetLeft)}px`), b.style.setProperty(
          "--pitaj-input-safe-bottom",
          nt ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        b.style.setProperty("--pitaj-viewport-height", "100dvh"), b.style.setProperty("--pitaj-viewport-top", "0px"), b.style.setProperty("--pitaj-viewport-left", "0px"), b.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    j();
    const _ = window.visualViewport;
    return _ && (_.addEventListener("resize", j), _.addEventListener("scroll", j)), window.addEventListener("resize", j), window.addEventListener("orientationchange", j), () => {
      _ && (_.removeEventListener("resize", j), _.removeEventListener("scroll", j)), window.removeEventListener("resize", j), window.removeEventListener("orientationchange", j);
    };
  }, [d, xt]), K(() => {
    if (typeof document > "u" || !d || !xt || n || l) return;
    const j = document.body.style.overflow, _ = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = j, document.body.style.touchAction = _;
    };
  }, [d, xt, n, l]), K(() => {
    var b;
    if (typeof window > "u" || n) return;
    const j = (b = ht.current) == null ? void 0 : b.getRootNode(), _ = j instanceof ShadowRoot ? j.host : null;
    if (_) {
      if (l || _.hasAttribute("data-pitaj-preview") || _.classList.contains("pitaj-preview-host")) {
        _.style.width = "100%", _.style.height = "100%", _.style.top = "0", _.style.left = "0", _.style.position = "relative";
        return;
      }
      d && xt ? (_.style.top = "0", _.style.left = "0", _.style.width = "100%", _.style.height = "100%", _.setAttribute("data-pitaj-mobile-open", "true")) : (_.style.top = "", _.style.left = "", _.style.width = "0", _.style.height = "0", _.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [d, xt, n, l]);
  const Nt = s.formsEnabled === !0 && s.formsAvailable !== !1, St = Ct(() => {
    var b, W;
    const j = s.actions || [];
    if (j.length > 0 && typeof ((b = j[0]) == null ? void 0 : b.id) == "number")
      return j[0].id;
    const _ = s.forms || [];
    return _.length > 0 && typeof ((W = _[0]) == null ? void 0 : W.id) == "number" ? -_[0].id : null;
  }, [s.actions, s.forms]), Tt = Ct(() => ({
    open: () => {
      Z(!0), m(!0);
    },
    close: () => m(!1),
    toggle: () => {
      d || Z(!0), m(!d);
    },
    startConversation: (j) => {
      Z(!0), m(!0), j && j.trim() ? k(j.trim()) : h("new-conversation");
    },
    setScreen: (j) => h(j),
    setConfig: (j) => {
      const _ = {
        ...s,
        ...j,
        colors: { ...s.colors || {}, ...j.colors || {} },
        content: { ...s.content || {}, ...j.content || {} },
        features: { ...s.features || {}, ...j.features || {} }
      };
      if (_.previewDraft) {
        if (_.previewDraft.action) {
          const b = _.previewDraft.action;
          _.actions = [b, ...(_.actions || []).filter((W) => W.id !== b.id)];
        }
        if (_.previewDraft.form) {
          const b = _.previewDraft.form;
          _.forms = [b, ...(_.forms || []).filter((W) => W.id !== b.id)], _.formsAvailable = !0, _.formsEnabled = !0;
        }
        if (_.previewDraft.widget) {
          const b = _.previewDraft.widget;
          _.widgets = [b, ...(_.widgets || []).filter((W) => W.id !== b.id)];
        }
      }
      f(_);
    }
  }), [s, d, m, h, k, f]), Pt = it({});
  qe(Pt.current, Tt), K(() => () => qe(Pt.current, null), []), K(() => {
    a !== at.current && (at.current = a, h(a));
  }, [a, h]), K(() => {
    t !== lt.current && (lt.current = t, t && Z(!0), m(t));
  }, [t, m]), K(() => {
    if (p === "forms") {
      Nt && St !== null && N(St), h("new-conversation");
      return;
    }
    p === "contact" && h("new-conversation");
  }, [St, Nt, p, h]), K(() => {
    var W;
    if (typeof document > "u") return;
    const j = (W = s.content) == null ? void 0 : W.fontFamily;
    if (!j) return;
    const _ = j.trim().toLowerCase();
    let b = "";
    if (_ === "inter" ? b = "family=Inter:wght@400;500;600;700" : _ === "geist" ? b = "family=Geist:wght@400;500;600;700" : _ === "plus jakarta sans" && (b = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), b) {
      const nt = `pitaj-font-${_.replace(/\s+/g, "-")}`;
      if (!document.getElementById(nt)) {
        const pt = document.createElement("link");
        pt.id = nt, pt.rel = "stylesheet", pt.href = `https://fonts.googleapis.com/css2?${b}&display=swap`, document.head.appendChild(pt);
      }
    }
  }, [(q = s.content) == null ? void 0 : q.fontFamily]);
  const Yt = Ct(() => {
    var Ne, Se, Ie, ze, Ae, Le;
    if (s.cssVars && Object.keys(s.cssVars).length > 0)
      return s.cssVars;
    if ((Ne = s.theme) != null && Ne.css_vars && Object.keys(s.theme.css_vars).length > 0)
      return s.theme.css_vars;
    const j = s.colors || {}, _ = ((Se = s.content) == null ? void 0 : Se.themeMode) === "dark" ? "dark" : "light", b = {};
    if (j.primaryColor) {
      b["--pitaj-accent"] = j.primaryColor, b["--pitaj-bubble-user"] = j.primaryColor, b["--pitaj-accent-hover"] = Ya(j.primaryColor), b["--pitaj-accent-contrast"] = Ot(j.primaryColor), b["--pitaj-bubble-user-fg"] = Ot(j.primaryColor);
      const bt = Xt(j.primaryColor, 0.1), Ft = Xt(j.primaryColor, 0.16), $e = Xt(j.primaryColor, 0.35);
      bt && (b["--pitaj-accent-soft"] = bt), Ft && (b["--pitaj-accent-soft-strong"] = Ft), $e && (b["--pitaj-accent-ring"] = $e);
    }
    const W = _ === "dark" ? "#111827" : "#ffffff", nt = j.headerBg || W, pt = Za(nt, j.headerFg), zt = j.headerFg || (pt ? "#ffffff" : "#0f172a");
    b["--pitaj-header-bg"] = nt, b["--pitaj-header-fg"] = zt, pt ? b["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)" : nt.toLowerCase() === "#ffffff" || nt.toLowerCase() === "#fff" ? b["--pitaj-header-gradient"] = "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : b["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", pt ? (b["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", b["--pitaj-header-icon-hover"] = "#ffffff", b["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", b["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", b["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", b["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", b["--pitaj-header-badge-fg"] = "#ffffff", b["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (b["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", b["--pitaj-header-icon-hover"] = "#0f172a", b["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", b["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", b["--pitaj-header-border"] = j.border || "rgba(15, 23, 42, 0.08)", b["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", b["--pitaj-header-badge-fg"] = "#0f172a", b["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)"), b["--pitaj-chrome-border"] = _ === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", j.surfaceBg && (b["--pitaj-surface"] = j.surfaceBg), j.subtle ? b["--pitaj-surface-subtle"] = j.subtle : j.surfaceBg && (b["--pitaj-surface-subtle"] = Xt(j.surfaceBg, 0.9) || j.surfaceBg), j.bubbleAiBg && (b["--pitaj-bubble-ai"] = j.bubbleAiBg), j.textFg && (b["--pitaj-bubble-ai-fg"] = j.textFg), j.textFg && (b["--pitaj-fg"] = j.textFg), j.mutedFg && (b["--pitaj-muted"] = j.mutedFg), j.border && (b["--pitaj-border"] = j.border), j.hover && (b["--pitaj-hover"] = j.hover), j.sendAccent && (b["--pitaj-send-accent"] = j.sendAccent, b["--pitaj-send-accent-contrast"] = Ot(j.sendAccent));
    const Dt = (Ie = s.content) == null ? void 0 : Ie.launcherButtonColor;
    Dt && (b["--pitaj-launcher-bg"] = Dt, b["--pitaj-launcher-fg"] = Ot(Dt));
    const jt = (ze = s.content) == null ? void 0 : ze.cornerRadius;
    if (jt) {
      const bt = jt === "sharp" || jt === "0px" ? "0px" : jt === "small" || jt === "8px" ? "8px" : jt === "medium" || jt === "12px" ? "12px" : jt === "large" || jt === "16px" ? "16px" : jt;
      b["--pitaj-radius"] = bt, bt === "0px" ? (b["--pitaj-radius-bubble"] = "0px", b["--pitaj-radius-input"] = "0px", b["--pitaj-radius-btn"] = "0px", b["--pitaj-radius-avatar"] = "0px", b["--pitaj-radius-full"] = "0px", b["--pitaj-radius-corner-sm"] = "0px", b["--pitaj-launcher-radius"] = "0px", b["--pitaj-launcher-pill-radius"] = "0px", b["--pitaj-badge-radius"] = "0px") : bt === "8px" ? (b["--pitaj-radius-bubble"] = "8px", b["--pitaj-radius-input"] = "8px", b["--pitaj-radius-btn"] = "6px", b["--pitaj-radius-avatar"] = "6px", b["--pitaj-radius-full"] = "8px", b["--pitaj-radius-corner-sm"] = "2px", b["--pitaj-launcher-radius"] = "8px", b["--pitaj-launcher-pill-radius"] = "8px", b["--pitaj-badge-radius"] = "4px") : bt === "12px" ? (b["--pitaj-radius-bubble"] = "12px", b["--pitaj-radius-input"] = "12px", b["--pitaj-radius-btn"] = "8px", b["--pitaj-radius-avatar"] = "10px", b["--pitaj-radius-full"] = "12px", b["--pitaj-radius-corner-sm"] = "4px", b["--pitaj-launcher-radius"] = "12px", b["--pitaj-launcher-pill-radius"] = "12px", b["--pitaj-badge-radius"] = "6px") : (b["--pitaj-radius-bubble"] = "18px", b["--pitaj-radius-input"] = "14px", b["--pitaj-radius-btn"] = "10px", b["--pitaj-radius-avatar"] = "50%", b["--pitaj-radius-full"] = "999px", b["--pitaj-radius-corner-sm"] = "4px", b["--pitaj-launcher-radius"] = "50%", b["--pitaj-launcher-pill-radius"] = "999px", b["--pitaj-badge-radius"] = "999px");
    }
    const ce = (Ae = s.content) == null ? void 0 : Ae.fontFamily;
    if (ce) {
      const bt = ce.toLowerCase(), Ft = bt === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : bt === "arial" ? "Arial, Helvetica, sans-serif" : bt === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : bt === "georgia" ? "Georgia, serif" : bt === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : bt === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${ce}', 'Inter', system-ui, sans-serif`;
      b["--pitaj-font"] = Ft, b.fontFamily = Ft;
    }
    const le = (Le = s.content) == null ? void 0 : Le.fontSize;
    return le && (b["--pitaj-font-size"] = le, b.fontSize = le), b;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (E = s.content) == null ? void 0 : E.themeMode,
    (et = s.content) == null ? void 0 : et.launcherButtonColor,
    (ot = s.content) == null ? void 0 : ot.cornerRadius,
    (V = s.content) == null ? void 0 : V.fontFamily,
    (X = s.content) == null ? void 0 : X.fontSize
  ]), qt = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ i(wt, {}) : /* @__PURE__ */ i(
    "div",
    {
      ref: ht,
      className: `pitaj-root ${qt} ${d ? "is-widget-open" : "is-widget-closed"} ${n ? "is-inline" : ""} ${l ? "is-canvas-preview" : ""} ${xt ? "is-mobile" : ""} ${n && ((B = s.content) != null && B.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: Yt,
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
                ka,
                {
                  screen: p,
                  activeConversation: g,
                  config: s,
                  onBack: () => {
                    const j = rt || "new-conversation";
                    J(null), h(j);
                  },
                  onClose: () => {
                    mt(), m(!1);
                  },
                  onNewConversation: () => {
                    J(null), h("new-conversation");
                  },
                  onEndConversation: () => {
                    mt(), c(), m(!1);
                  },
                  onDeleteConversation: ((gt = s.content) == null ? void 0 : gt.deleteConversationsEnabled) !== !1 && g ? () => w(g.id) : void 0,
                  onViewHistory: () => {
                    J(null), h("history");
                  },
                  onViewTickets: () => {
                    J(null), h("tickets");
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: "pitaj-body", children: [
                p === "conversation" && g && /* @__PURE__ */ i(
                  Ba,
                  {
                    conversation: g,
                    config: s,
                    isStreaming: M,
                    rateLimitCountdown: S,
                    errorBanner: I,
                    onSendMessage: z,
                    onApiError: G,
                    onSubmitSatisfaction: (j, _) => C(g.id, j, _),
                    isRatingPromptActive: v === g.id
                  }
                ),
                p === "new-conversation" && /* @__PURE__ */ i(
                  Ua,
                  {
                    config: s,
                    openedByUser: ft,
                    onStart: (j) => {
                      k(j);
                    },
                    onApiError: G
                  }
                ),
                p === "history" && /* @__PURE__ */ i(
                  Va,
                  {
                    conversations: u,
                    config: s,
                    onSelectConversation: (j) => {
                      J("history"), R(j);
                    },
                    onNewConversation: () => {
                      J(null), h("new-conversation");
                    },
                    onDeleteConversation: ((H = s.content) == null ? void 0 : H.deleteConversationsEnabled) !== !1 ? w : void 0
                  }
                ),
                p === "tickets" && /* @__PURE__ */ i(
                  Oa,
                  {
                    config: s,
                    visitorId: U,
                    onSelectTicket: (j) => {
                      var zt;
                      J("tickets");
                      const _ = (zt = j.messages) == null ? void 0 : zt.find((Dt) => Dt.sender === "user"), b = j.messages && j.messages.length > 0 ? j.messages[j.messages.length - 1] : null, W = _ ? _.content.length > 40 ? _.content.slice(0, 40) + "…" : _.content : j.ticketNumber || `Tiket #${j.id}`, pt = {
                        id: j.conversationId ? String(j.conversationId) : String(j.id),
                        title: W,
                        preview: b ? b.content : j.ticketNumber || `Tiket #${j.id}`,
                        timestamp: j.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: j.messages || [],
                        status: j.isResolved ? "ended" : "active",
                        ticketNumber: j.ticketNumber
                      };
                      R(pt);
                    }
                  }
                ),
                (p === "conversation" || p === "new-conversation") && Nt && $ !== null ? /* @__PURE__ */ i("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ i(
                  Wa,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: A,
                    initialActionId: $,
                    visitorContact: F,
                    onApiError: G,
                    blockedReason: S !== null ? `Sačekajte ${S}s prije novog zahtjeva.` : null,
                    onSubmitted: (j) => {
                      var _, b;
                      if (T(A, j, "user"), s.mockMode || s.isPreview) {
                        const W = ((b = (_ = s.previewDraft) == null ? void 0 : _.form) == null ? void 0 : b.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          T(A, W, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => N(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!d || !xt) && /* @__PURE__ */ i("div", { className: `pitaj-launcher-wrap ${d ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ i(
            Fa,
            {
              isOpen: d,
              onOpen: () => {
                Z(!0), m(!0);
              },
              config: s,
              pendingRating: v && !d ? {
                conversationId: v,
                onSubmitRating: vt,
                onDismiss: yt
              } : null
            }
          ),
          /* @__PURE__ */ i(
            Ra,
            {
              isOpen: d,
              onClick: () => {
                d || Z(!0), m(!d);
              },
              unreadCount: y + (v && !d ? 1 : 0),
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const st = {
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
function Qa(e) {
  if (typeof e != "string") return "#ffffff";
  let t = e.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(t) && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(t)) return "#ffffff";
  const a = Number.parseInt(t.slice(1, 3), 16), r = Number.parseInt(t.slice(3, 5), 16), n = Number.parseInt(t.slice(5, 7), 16);
  return (0.2126 * a + 0.7152 * r + 0.0722 * n) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function Ja(e, t) {
  if (typeof e != "string") return t;
  const a = e.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(a) ? a.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(a) ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`.toUpperCase() : t;
}
function Xa(e) {
  const t = e.trim(), a = /^#[0-9A-Fa-f]{3}$/.test(t) ? `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}` : t;
  if (!/^#[0-9A-Fa-f]{6}$/.test(a))
    return { h: 210, s: 70, l: 50 };
  const r = Number.parseInt(a.slice(1, 3), 16) / 255, n = Number.parseInt(a.slice(3, 5), 16) / 255, o = Number.parseInt(a.slice(5, 7), 16) / 255, l = Math.max(r, n, o), s = Math.min(r, n, o), f = l - s;
  let d = 0;
  const m = (l + s) / 2, p = f === 0 ? 0 : f / (1 - Math.abs(2 * m - 1));
  if (f !== 0)
    switch (l) {
      case r:
        d = (n - o) / f % 6;
        break;
      case n:
        d = (o - r) / f + 2;
        break;
      default:
        d = (r - n) / f + 4;
        break;
    }
  return { h: Math.round((d * 60 + 360) % 360), s: Math.round(p * 100), l: Math.round(m * 100) };
}
function tr(e) {
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
function er(e) {
  return Array.isArray(e) ? e.filter((t) => typeof t == "object" && t !== null).map((t) => {
    const a = t.schema_json && typeof t.schema_json == "object" ? t.schema_json : {}, n = (Array.isArray(a.fields) ? a.fields : []).filter((o) => typeof o == "object" && o !== null).map((o) => ({
      key: typeof o.key == "string" ? o.key : "",
      type: tr(o.type),
      label: typeof o.label == "string" ? o.label : "",
      required: o.required === !0,
      placeholder: typeof o.placeholder == "string" ? o.placeholder : void 0,
      options: Array.isArray(o.options) ? o.options.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
      accept: Array.isArray(o.accept) ? o.accept.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
      max_size_kb: typeof o.max_size_kb == "number" ? o.max_size_kb : void 0,
      value: typeof o.value == "string" ? o.value : void 0
    })).filter((o) => o.key !== "");
    return {
      id: typeof t.id == "number" ? t.id : 0,
      name: typeof t.name == "string" ? t.name : "",
      description: typeof t.description == "string" ? t.description : null,
      submit_label: typeof t.submit_label == "string" ? t.submit_label : "Pošalji",
      success_message: typeof t.success_message == "string" ? t.success_message : void 0,
      schema_version: typeof t.schema_version == "string" ? t.schema_version : "v1",
      schema_json: { fields: n }
    };
  }).filter((t) => t.id > 0 && t.name.trim() !== "" && t.schema_json.fields.length > 0) : [];
}
function ir(e) {
  return Array.isArray(e) ? e.filter((t) => typeof t == "object" && t !== null).map((t) => ({
    id: typeof t.id == "number" ? t.id : 0,
    name: typeof t.name == "string" ? t.name : "",
    description: typeof t.description == "string" ? t.description : null,
    trigger_hint: typeof t.trigger_hint == "string" ? t.trigger_hint : null,
    form_id: typeof t.form_id == "number" ? t.form_id : 0,
    form_name: typeof t.form_name == "string" ? t.form_name : null
  })).filter((t) => t.id > 0 && t.form_id > 0 && t.name.trim() !== "") : [];
}
async function ar(e, t) {
  var r, n, o, l, s, f, d, m, p;
  if (e === "default")
    return { ...st, companyId: e || "default" };
  const a = (t || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const h = `${a}/api/widget/${e}/config`, u = await fetch(h, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!u.ok) {
      if (u.status === 403) {
        const N = await u.json().catch(() => null);
        if ((N == null ? void 0 : N.code) === "COUNTRY_BLOCKED" || N != null && N.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...st,
            companyId: e,
            apiUrl: a,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${u.status}), using defaults.`), { ...st, companyId: e, apiUrl: a };
    }
    const g = await u.json(), y = g.accent_color || ((r = st.colors) == null ? void 0 : r.primaryColor) || "#2563eb", M = Array.isArray(g.suggested_questions) ? g.suggested_questions.filter((N) => typeof N == "string" && N.trim() !== "").slice(0, 4) : [], S = Array.isArray(g.contact_fields) ? g.contact_fields.filter(
      (N) => N === "name" || N === "email" || N === "phone"
    ) : [], R = (Array.isArray(g.channels) ? g.channels : []).find(
      (N) => typeof N == "object" && N !== null && N.channel === "chat_bubble"
    ), k = (R == null ? void 0 : R.enabled) !== !1, c = g.widget_content && typeof g.widget_content == "object" ? g.widget_content : null, w = Array.isArray(c == null ? void 0 : c.suggested_message_rows) ? c.suggested_message_rows.filter((N) => typeof N == "object" && N !== null).map((N) => {
      const rt = typeof N.text == "string" ? N.text.trim() : "", J = Array.isArray(N.children) ? N.children.filter((v) => typeof v == "string" && v.trim() !== "") : [];
      return {
        text: rt,
        children: J.length > 0 ? J : void 0
      };
    }).filter((N) => N.text !== "").slice(0, 4) : [], z = {
      avatarBorder: (c == null ? void 0 : c.avatar_border) !== !1,
      messagePlaceholder: typeof (c == null ? void 0 : c.message_placeholder) == "string" && c.message_placeholder.trim() !== "" ? c.message_placeholder : st.placeholder,
      dismissibleNotice: typeof (c == null ? void 0 : c.dismissible_notice) == "string" ? c.dismissible_notice : "",
      footerText: typeof (c == null ? void 0 : c.footer_text) == "string" ? c.footer_text : "",
      attachmentsEnabled: (c == null ? void 0 : c.attachments_enabled) === !0,
      voiceToTextEnabled: (c == null ? void 0 : c.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (c == null ? void 0 : c.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (c == null ? void 0 : c.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (c == null ? void 0 : c.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (c == null ? void 0 : c.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (c == null ? void 0 : c.keep_showing_suggested_messages) === !0,
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
      launcherButtonColor: Ja(c == null ? void 0 : c.launcher_button_color, "#05070c"),
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
    }, C = g.theme && typeof g.theme == "object" ? g.theme : null, F = C != null && C.css_vars && typeof C.css_vars == "object" ? C.css_vars : void 0, U = C != null && C.colors && typeof C.colors == "object" ? C.colors : null;
    let A = U, T = y;
    if (A)
      U.primaryColor && (T = U.primaryColor);
    else {
      const N = z.themeMode === "dark" ? "dark" : "light", rt = z.accentColorEnabled !== !1, J = z.accentColorForHeaderEnabled === !0, v = z.tintedGrayscaleEnabled === !0, O = z.tintedGrayscaleHue ?? 0, Y = z.tintedGrayscaleTint ?? 0, dt = z.tintedGrayscaleShade ?? 0;
      T = rt ? y : N === "dark" ? "#3b82f6" : "#2563eb";
      const vt = (Xa(T).h + O + 360) % 360, yt = Math.max(0, Math.min(46, 10 + Y * 0.36)), ht = Math.max(-24, Math.min(24, dt * 0.24));
      if (A = N === "dark" ? {
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
      }, rt && J && (A.headerBg = T, A.headerFg = Qa(T)), v) {
        const xt = N === "dark" ? Math.max(8, Math.min(20, 12 + ht)) : Math.max(88, Math.min(97, 95 + ht * 0.22)), _t = N === "dark" ? Math.max(10, Math.min(24, 16 + ht)) : Math.max(80, Math.min(94, 89 + ht * 0.35)), Nt = N === "dark" ? Math.max(11, Math.min(26, 18 + ht * 0.9)) : Math.max(83, Math.min(95, _t + 3)), St = N === "dark" ? Math.max(22, Math.min(40, 30 + ht)) : Math.max(70, Math.min(88, 82 + ht * 0.38)), Tt = N === "dark" ? Math.max(16, Math.min(30, 22 + ht)) : Math.max(78, Math.min(92, _t - 2));
        A.surfaceBg = `hsl(${vt} ${yt}% ${xt}%)`, A.bubbleAiBg = `hsl(${vt} ${Math.max(0, yt - 2)}% ${Nt}%)`, A.subtle = `hsl(${vt} ${Math.max(0, yt - 4)}% ${_t}%)`, A.border = `hsl(${vt} ${Math.max(0, yt - 5)}% ${St}%)`, A.hover = `hsl(${vt} ${Math.max(0, yt - 3)}% ${Tt}%)`;
      }
    }
    const G = er(g.forms), at = ir(g.actions).filter(
      (N) => G.some((rt) => rt.id === N.form_id)
    ), lt = g.forms_enabled === !0 && G.length > 0 && at.length > 0, ft = g.chat_available !== !1, Z = g.transcribe_available !== !1 && ft, $ = g.forms_available !== !1 && lt;
    return {
      ...st,
      companyId: e,
      enabled: k,
      apiUrl: a,
      name: g.company_name || st.name,
      title: g.bot_name || st.title,
      avatar: typeof (c == null ? void 0 : c.avatar_url) == "string" && c.avatar_url.trim() !== "" ? c.avatar_url : st.avatar,
      welcomeHeadline: g.bot_name ? `Ćaskajte sa ${g.bot_name}` : st.welcomeHeadline,
      welcomeMessage: g.welcome_message || st.welcomeMessage,
      placeholder: z.messagePlaceholder || st.placeholder,
      suggestedQuestions: M,
      contactFields: S.length > 0 ? S : st.contactFields,
      contact: {
        enabled: typeof ((n = g.contact) == null ? void 0 : n.enabled) == "boolean" ? g.contact.enabled : (o = st.contact) == null ? void 0 : o.enabled,
        title: typeof ((l = g.contact) == null ? void 0 : l.title) == "string" && g.contact.title.trim() !== "" ? g.contact.title : (s = st.contact) == null ? void 0 : s.title,
        subtitle: typeof ((f = g.contact) == null ? void 0 : f.subtitle) == "string" && g.contact.subtitle.trim() !== "" ? g.contact.subtitle : (d = st.contact) == null ? void 0 : d.subtitle,
        submitLabel: typeof ((m = g.contact) == null ? void 0 : m.submit_label) == "string" && g.contact.submit_label.trim() !== "" ? g.contact.submit_label : (p = st.contact) == null ? void 0 : p.submitLabel
      },
      poweredBy: g.show_branding !== void 0 ? g.show_branding : st.poweredBy,
      position: g.position || st.position,
      accentGradient: Array.isArray(g.accent_gradient) ? g.accent_gradient : [],
      content: {
        ...st.content || {},
        ...z
      },
      chatAvailable: ft,
      transcribeAvailable: Z,
      formsAvailable: $,
      formsEnabled: lt,
      forms: G,
      actions: at,
      theme: C,
      cssVars: F,
      colors: {
        ...st.colors,
        primaryColor: T,
        bubbleUserBg: T,
        sendAccent: (U == null ? void 0 : U.sendAccent) || (z.accentColorForSendIconEnabled ? T : z.themeMode === "dark" ? "#e5e7eb" : "#111827"),
        headerBg: A.headerBg,
        headerFg: A.headerFg,
        surfaceBg: A.surfaceBg,
        bubbleAiBg: A.bubbleAiBg,
        textFg: A.textFg,
        mutedFg: A.mutedFg,
        border: A.border,
        hover: A.hover,
        subtle: A.subtle
      }
    };
  } catch (h) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", h), { ...st, companyId: e, apiUrl: a, mockMode: !1 };
  }
}
const rr = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-shadow: 0 0 0 1px rgba(15, 23, 42, .08), 0 12px 32px -4px rgba(15, 23, 42, .12), 0 24px 60px -12px rgba(15, 23, 42, .18);--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:0 0 0 1px #0f172a14,0 12px 32px -4px #0f172a1f,0 24px 60px -12px #0f172a2e;border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:0 1px 2px #0f172a05}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:0 4px 6px -1px #0f172a14,0 12px 28px -4px #0f172a29,0 0 0 1px #0f172a0a;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:0 6px 12px -2px #0f172a1f,0 16px 32px -4px #0f172a33}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 12px #0f172a26,0 10px 24px -4px #0f172a40;cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:0 6px 16px #0f172a2e,0 16px 32px -4px #0f172a52}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}', or = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", Lt = {};
function Li(e, t) {
  (Lt[e] || []).forEach((r) => {
    try {
      r(t);
    } catch (n) {
      console.error(`[Pitaj.io] Error in event listener for ${e}:`, n);
    }
  });
}
function nr(e) {
  let t = document.getElementById(e);
  return t || (t = document.createElement("div"), t.id = e, t.style.position = "fixed", t.style.zIndex = "2147483647", t.style.bottom = "0", t.style.right = "0", t.style.width = "0", t.style.height = "0", t.style.overflow = "visible", t.style.pointerEvents = "none", document.body.appendChild(t)), t;
}
function sr(e, t) {
  const a = t.initialConfig || {}, r = !!(t.isPreview || a.isPreview || e.isPreview), n = t.previewDraft || a.previewDraft || e.previewDraft, o = {
    ...e,
    ...a,
    isPreview: r,
    previewDraft: n,
    mockMode: r ? !0 : a.mockMode ?? e.mockMode,
    position: t.position || a.position || e.position || "bottom-right",
    apiUrl: t.apiUrl || a.apiUrl || e.apiUrl,
    colors: { ...e.colors || {}, ...a.colors || {} },
    content: { ...e.content || {}, ...a.content || {} },
    features: { ...e.features || {}, ...a.features || {} },
    theme: a.colors ? void 0 : a.theme || e.theme,
    cssVars: a.colors ? void 0 : a.cssVars || e.cssVars
  };
  if (n) {
    if (n.action) {
      const l = n.action;
      o.actions = [l, ...(o.actions || []).filter((s) => s.id !== l.id)];
    }
    if (n.form) {
      const l = n.form;
      o.forms = [l, ...(o.forms || []).filter((s) => s.id !== l.id)], o.formsAvailable = !0, o.formsEnabled = !0;
    }
    if (n.widget) {
      const l = n.widget;
      o.widgets = [l, ...(o.widgets || []).filter((s) => s.id !== l.id)];
    }
  }
  return o;
}
const te = /* @__PURE__ */ new WeakMap();
async function je(e, t = {}) {
  const a = te.get(e), r = async () => {
    var g, y;
    const o = t.widgetId || t.companyId || "default", s = !!(t.isPreview || (g = t.initialConfig) != null && g.isPreview || o === "preview") && o === "preview" ? { ...st, companyId: o, apiUrl: t.apiUrl, mockMode: !0 } : await ar(o, t.apiUrl), f = sr(s, t);
    if (f.enabled === !1 || f.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let d = e.shadowRoot;
    d || (d = e.attachShadow({ mode: "open" })), d.innerHTML = "";
    const m = document.createElement("style");
    m.textContent = rr, d.appendChild(m);
    const p = document.createElement("div");
    p.className = "pitaj-shadow-mount", d.appendChild(p);
    const h = t.isCanvasPreview ?? (e.hasAttribute("data-pitaj-preview") || e.classList.contains("pitaj-preview-host") || !!((y = e.closest) != null && y.call(e, "[data-pitaj-preview]")));
    if (h) {
      const M = document.createElement("style");
      M.textContent = or, d.appendChild(M);
    }
    Pe(
      /* @__PURE__ */ i(
        qa,
        {
          config: f,
          startOpen: t.startOpen ?? !1,
          isInline: t.isInline ?? !1,
          isMobile: t.isMobile,
          isCanvasPreview: h,
          initialScreen: t.initialScreen,
          onEvent: Li
        }
      ),
      p
    );
    const u = It();
    return u && (e.__pitajController = u), {
      controller: u,
      unmount: () => {
        Pe(null, p), d && (d.innerHTML = "");
      }
    };
  }, n = (a || Promise.resolve()).then(r, r);
  te.set(e, n);
  try {
    return await n;
  } finally {
    te.get(e) === n && te.delete(e);
  }
}
let Ht = null;
const ee = {
  mount: async (e, t) => {
    const a = await je(e, t);
    return Ht = a.unmount, a;
  },
  unmount: () => {
    Ht && (Ht(), Ht = null);
  },
  init: async (e) => {
    const t = nr(e.containerId || "pitaj-io-widget-root"), a = await je(t, {
      widgetId: e.widgetId,
      companyId: e.companyId,
      apiUrl: e.apiUrl,
      position: e.position,
      startOpen: e.startOpen,
      isInline: e.isInline,
      initialScreen: e.initialScreen,
      initialConfig: e.config
    });
    return Ht = a.unmount, a;
  },
  open: () => {
    var e;
    return (e = It()) == null ? void 0 : e.open();
  },
  close: () => {
    var e;
    return (e = It()) == null ? void 0 : e.close();
  },
  toggle: () => {
    var e;
    return (e = It()) == null ? void 0 : e.toggle();
  },
  startConversation: (e) => {
    var t;
    return (t = It()) == null ? void 0 : t.startConversation(e);
  },
  setScreen: (e) => {
    var t;
    return (t = It()) == null ? void 0 : t.setScreen(e);
  },
  setCompanyId: (e) => {
    var t;
    return (t = It()) == null ? void 0 : t.setConfig({ companyId: e });
  },
  setConfig: (e) => {
    var t;
    return (t = It()) == null ? void 0 : t.setConfig(e);
  },
  identify: (e) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(e)), e.id && localStorage.setItem("pitaj_io_visitor_id", e.id);
    } catch {
    }
  },
  on: (e, t) => {
    Lt[e] || (Lt[e] = []), Lt[e].push(t);
  },
  off: (e, t) => {
    Lt[e] && (Lt[e] = Lt[e].filter((a) => a !== t));
  },
  emit: (e, t) => {
    Li(e, t);
  }
};
class pr extends HTMLElement {
  constructor() {
    super(...arguments);
    At(this, "unmountFn", null);
  }
  async connectedCallback() {
    const a = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", r = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, n = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", o = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", l = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await je(this, { widgetId: a, apiUrl: r, position: n, startOpen: o, isInline: l });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Xe(e) {
  if (!e) return null;
  const t = e.getAttribute("data-company") || e.getAttribute("data-widget-id") || e.getAttribute("data-company-id") || e.getAttribute("company") || e.getAttribute("company-id") || void 0;
  if (!t) return null;
  const a = e.getAttribute("data-api-url") || void 0, r = e.getAttribute("data-position") || "bottom-right", n = e.getAttribute("data-start-open") === "true", o = e.getAttribute("data-inline") === "true";
  return { companyId: t, apiUrl: a, position: r, startOpen: n, isInline: o };
}
var ti;
if (typeof window < "u") {
  const e = ((ti = window.PitajIO) == null ? void 0 : ti._q) || [];
  window.PitajIO = ee, customElements.get("pitaj-io") || customElements.define("pitaj-io", pr);
  const t = window.__pitajIoInit;
  if (t)
    window.__pitajIoInit = void 0, ee.init(t).then(() => {
      e.forEach(({ method: a, args: r }) => {
        const n = ee[a];
        typeof n == "function" && n(...r);
      });
    });
  else {
    const a = document.currentScript;
    let r = Xe(a);
    if (!r) {
      const n = Array.prototype.slice.call(document.scripts || []);
      for (let o = n.length - 1; o >= 0; o--) {
        const l = n[o];
        if (l.src && /widget(\.iife)?\.js/i.test(l.src) && (r = Xe(l), r))
          break;
      }
    }
    r && ee.init({ containerId: "pitaj-io-widget-root", ...r });
  }
}
export {
  it as A,
  Sr as B,
  hr as C,
  _r as D,
  $r as G,
  gr as M,
  pe as P,
  Ir as S,
  Ct as T,
  ur as U,
  br as W,
  la as a,
  Vt as b,
  dr as c,
  P as d,
  mr as e,
  fr as f,
  lr as g,
  Mt as h,
  Ar as i,
  Lr as j,
  wt as k,
  Nr as l,
  zr as m,
  Mr as n,
  jr as o,
  vr as p,
  xr as q,
  wr as r,
  yr as s,
  bi as t,
  i as u,
  kr as v,
  ee as w,
  K as y
};
