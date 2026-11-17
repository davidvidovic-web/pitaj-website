var va = Object.defineProperty;
var ja = (t, e, i) => e in t ? va(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Ye = (t, e, i) => ja(t, typeof e != "symbol" ? e + "" : e, i);
var Lt, oe, Ui, Oe, fi, Fi, Oi, Bt, yt, ft, Vi, Zt, Vt, Kt, zt = {}, At = [], xa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Tt = Array.isArray;
function Re(t, e) {
  for (var i in e) t[i] = e[i];
  return t;
}
function Jt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function wa(t, e, i) {
  var n, o, r, p = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? o = e[r] : p[r] = e[r];
  if (arguments.length > 2 && (p.children = arguments.length > 3 ? Lt.call(arguments, 2) : i), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) p[r] === void 0 && (p[r] = t.defaultProps[r]);
  return _t(t, p, n, o, null);
}
function _t(t, e, i, n, o) {
  var r = { type: t, props: e, key: i, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ui, __i: -1, __u: 0 };
  return o == null && oe.vnode != null && oe.vnode(r), r;
}
function Le(t) {
  return t.children;
}
function St(t, e) {
  this.props = t, this.context = e;
}
function Ze(t, e) {
  if (e == null) return t.__ ? Ze(t.__, t.__i + 1) : null;
  for (var i; e < t.__k.length; e++) if ((i = t.__k[e]) != null && i.__e != null) return i.__e;
  return typeof t.type == "function" ? Ze(t) : null;
}
function ka(t) {
  if (t.__P && t.__d) {
    var e = t.__v, i = e.__e, n = [], o = [], r = Re({}, e);
    r.__v = e.__v + 1, oe.vnode && oe.vnode(r), qt(t.__P, r, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [i] : null, n, i ?? Ze(e), !!(32 & e.__u), o), r.__v = e.__v, r.__.__k[r.__i] = r, Zi(n, r, o), e.__e = e.__ = null, r.__e != i && Ki(r);
  }
}
function Ki(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Ki(t);
}
function gi(t) {
  (!t.__d && (t.__d = !0) && Oe.push(t) && !Ct.__r++ || fi != oe.debounceRendering) && ((fi = oe.debounceRendering) || Fi)(Ct);
}
function Ct() {
  try {
    for (var t, e = 1; Oe.length; ) Oe.length > e && Oe.sort(Oi), t = Oe.shift(), e = Oe.length, ka(t);
  } finally {
    Oe.length = Ct.__r = 0;
  }
}
function Yi(t, e, i, n, o, r, p, s, f, d, m) {
  var v, c, b, h, y, A, I = n && n.__k || At, S = e.length;
  for (f = ya(i, e, I, f, S), v = 0; v < S; v++) (b = i.__k[v]) != null && (c = b.__i != -1 && I[b.__i] || zt, b.__i = v, A = qt(t, b, c, o, r, p, s, f, d, m), h = b.__e, b.ref && c.ref != b.ref && (c.ref && Qt(c.ref, null, b), m.push(b.ref, b.__c || h, b)), y == null && h != null && (y = h), 4 & b.__u ? (f = Wi(b, f, t), c.__e && (c.__e = null)) : typeof b.type == "function" && A !== void 0 ? f = A : h && (f = h.nextSibling), b.__u &= -7);
  return i.__e = y, f;
}
function ya(t, e, i, n, o) {
  var r, p, s, f, d, m = i.length, v = m, c = 0;
  for (t.__k = new Array(o), r = 0; r < o; r++) (p = e[r]) != null && typeof p != "boolean" && typeof p != "function" ? (typeof p == "string" || typeof p == "number" || typeof p == "bigint" || p.constructor == String ? p = t.__k[r] = _t(null, p, null, null, null) : Tt(p) ? p = t.__k[r] = _t(Le, { children: p }, null, null, null) : p.constructor === void 0 && p.__b > 0 ? p = t.__k[r] = _t(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : t.__k[r] = p, f = r + c, p.__ = t, p.__b = t.__b + 1, s = null, (d = p.__i = _a(p, i, f, v)) != -1 && (v--, (s = i[d]) && (s.__u |= 2)), s == null || s.__v == null ? (d == -1 && (o > m ? c-- : o < m && c++), typeof p.type != "function" && (p.__u |= 4)) : d != f && (d == f - 1 ? c-- : d == f + 1 ? c++ : (d > f ? c-- : c++, p.__u |= 4))) : t.__k[r] = null;
  if (v) for (r = 0; r < m; r++) (s = i[r]) != null && (2 & s.__u) == 0 && (s.__e == n && (n = Ze(s)), qi(s, s));
  return n;
}
function Wi(t, e, i) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = Wi(n[o], e, i));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = Ze(t)), e = i.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function _a(t, e, i, n) {
  var o, r, p, s = t.key, f = t.type, d = e[i], m = d != null && (2 & d.__u) == 0;
  if (d === null && s == null || m && s == d.key && f == d.type) return i;
  if (n > (m ? 1 : 0)) {
    for (o = i - 1, r = i + 1; o >= 0 || r < e.length; ) if ((d = e[p = o >= 0 ? o-- : r++]) != null && (2 & d.__u) == 0 && s == d.key && f == d.type) return p;
  }
  return -1;
}
function bi(t, e, i) {
  e[0] == "-" ? t.setProperty(e, i ?? "") : t[e] = i == null ? "" : typeof i != "number" || xa.test(e) ? i : i + "px";
}
function jt(t, e, i, n, o) {
  var r, p;
  e: if (e == "style") if (typeof i == "string") t.style.cssText = i;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) i && e in i || bi(t.style, e, "");
    if (i) for (e in i) n && i[e] == n[e] || bi(t.style, e, i[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(Vi, "$1")), p = e.toLowerCase(), e = p in t || e == "onFocusOut" || e == "onFocusIn" ? p.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = i, i ? n ? i[ft] = n[ft] : (i[ft] = Zt, t.addEventListener(e, r ? Kt : Vt, r)) : t.removeEventListener(e, r ? Kt : Vt, r);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = i ?? "";
      break e;
    } catch {
    }
    typeof i == "function" || (i == null || i === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && i == 1 ? "" : i));
  }
}
function vi(t) {
  return function(e) {
    if (this.l) {
      var i = this.l[e.type + t];
      if (e[yt] == null) e[yt] = Zt++;
      else if (e[yt] < i[ft]) return;
      return i(oe.event ? oe.event(e) : e);
    }
  };
}
function qt(t, e, i, n, o, r, p, s, f, d) {
  var m, v, c, b, h, y, A, I, S, $, X, l, C, N, B, T, D = e.type;
  if (e.constructor !== void 0) return null;
  128 & i.__u && (f = !!(32 & i.__u), r = [s = e.__e = i.__e]), (m = oe.__b) && m(e);
  e: if (typeof D == "function") {
    v = p.length;
    try {
      if (S = e.props, $ = D.prototype && D.prototype.render, X = (m = D.contextType) && n[m.__c], l = m ? X ? X.props.value : m.__ : n, i.__c ? I = (c = e.__c = i.__c).__ = c.__E : ($ ? e.__c = c = new D(S, l) : (e.__c = c = new St(S, l), c.constructor = D, c.render = Ma), X && X.sub(c), c.state || (c.state = {}), c.__n = n, b = c.__d = !0, c.__h = [], c._sb = []), $ && c.__s == null && (c.__s = c.state), $ && D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Re({}, c.__s)), Re(c.__s, D.getDerivedStateFromProps(S, c.__s))), h = c.props, y = c.state, c.__v = e, b) $ && D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), $ && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if ($ && D.getDerivedStateFromProps == null && S !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(S, l), e.__v == i.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(S, c.__s, l) === !1) {
          e.__v != i.__v && (c.props = S, c.state = c.__s, c.__d = !1), e.__e = i.__e, e.__k = i.__k, e.__k.some(function(E) {
            E && (E.__ = e);
          }), At.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && p.push(c), s = Ze(i);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(S, c.__s, l), $ && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(h, y, A);
        });
      }
      if (c.context = l, c.props = S, c.__P = t, c.__e = !1, C = oe.__r, N = 0, $) c.state = c.__s, c.__d = !1, C && C(e), m = c.render(c.props, c.state, c.context), At.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, C && C(e), m = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++N < 25);
      c.state = c.__s, c.getChildContext != null && (n = Re(Re({}, n), c.getChildContext())), $ && !b && c.getSnapshotBeforeUpdate != null && (A = c.getSnapshotBeforeUpdate(h, y)), B = m != null && m.type === Le && m.key == null ? Ji(m.props.children) : m, s = Yi(t, Tt(B) ? B : [B], e, i, n, o, r, p, s, f, d), c.base = e.__e, e.__u &= -161, c.__h.length && p.push(c), I && (c.__E = c.__ = null);
    } catch (E) {
      if (p.length = v, e.__v = null, f || r != null) {
        if (E.then) {
          for (e.__u |= f ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
          r != null && (r[r.indexOf(s)] = null), e.__e = s;
        } else if (r != null) for (T = r.length; T--; ) Jt(r[T]);
      } else e.__e = i.__e;
      e.__k == null && (e.__k = i.__k || []), E.then || Gi(e), oe.__e(E, e, i);
    }
  } else r == null && e.__v == i.__v ? (e.__k = i.__k, e.__e = i.__e) : s = e.__e = Sa(i.__e, e, i, n, o, r, p, f, d);
  return (m = oe.diffed) && m(e), 128 & e.__u ? void 0 : s;
}
function Gi(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Gi));
}
function Zi(t, e, i) {
  for (var n = 0; n < i.length; n++) Qt(i[n], i[++n], i[++n]);
  oe.__c && oe.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      oe.__e(r, o.__v);
    }
  });
}
function Ji(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Tt(t) ? t.map(Ji) : t.constructor !== void 0 ? null : Re({}, t);
}
function Sa(t, e, i, n, o, r, p, s, f) {
  var d, m, v, c, b, h, y, A = i.props || zt, I = e.props, S = e.type;
  if (S == "svg" ? o = "http://www.w3.org/2000/svg" : S == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (d = 0; d < r.length; d++) if ((b = r[d]) && "setAttribute" in b == !!S && (S ? b.localName == S : b.nodeType == 3)) {
      t = b, r[d] = null;
      break;
    }
  }
  if (t == null) {
    if (S == null) return document.createTextNode(I);
    t = document.createElementNS(o, S, I.is && I), s && (oe.__m && oe.__m(e, r), s = !1), r = null;
  }
  if (S == null) A === I || s && t.data == I || (t.data = I);
  else {
    if (r = S == "textarea" && I.defaultValue != null ? null : r && Lt.call(t.childNodes), !s && r != null) for (A = {}, d = 0; d < t.attributes.length; d++) A[(b = t.attributes[d]).name] = b.value;
    for (d in A) b = A[d], d == "dangerouslySetInnerHTML" ? v = b : d == "children" || d in I || d == "value" && "defaultValue" in I || d == "checked" && "defaultChecked" in I || jt(t, d, null, b, o);
    for (d in I) b = I[d], d == "children" ? c = b : d == "dangerouslySetInnerHTML" ? m = b : d == "value" ? h = b : d == "checked" ? y = b : s && typeof b != "function" || A[d] === b || jt(t, d, b, A[d], o);
    if (m) s || v && (m.__html == v.__html || m.__html == t.innerHTML) || (t.innerHTML = m.__html), e.__k = [];
    else if (v && (t.innerHTML = ""), Yi(e.type == "template" ? t.content : t, Tt(c) ? c : [c], e, i, n, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, p, r ? r[0] : i.__k && Ze(i, 0), s, f), r != null) for (d = r.length; d--; ) Jt(r[d]);
    s && S != "textarea" || (d = "value", S == "progress" && h == null ? t.removeAttribute("value") : h != null && (h !== t[d] || S == "progress" && !h || S == "option" && h != A[d]) && jt(t, d, h, A[d], o), d = "checked", y != null && y != t[d] && jt(t, d, y, A[d], o));
  }
  return t;
}
function Qt(t, e, i) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    oe.__e(o, i);
  }
}
function qi(t, e, i) {
  var n, o;
  if (oe.unmount && oe.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || Qt(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      oe.__e(r, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && qi(n[o], e, i || typeof t.type != "function");
  i || Jt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ma(t, e, i) {
  return this.constructor(t, i);
}
function ji(t, e, i) {
  var n, o, r, p;
  e == document && (e = document.documentElement), oe.__ && oe.__(t, e), o = (n = !1) ? null : e.__k, r = [], p = [], qt(e, t = e.__k = wa(Le, null, [t]), o || zt, zt, e.namespaceURI, o ? null : e.firstChild ? Lt.call(e.childNodes) : null, r, o ? o.__e : e.firstChild, n, p), Zi(r, t, p), t.props.children = null;
}
Lt = At.slice, oe = { __e: function(t, e, i, n) {
  for (var o, r, p; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), p = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), p = o.__d), p) return o.__E = o;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Ui = 0, St.prototype.setState = function(t, e) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = Re({}, this.state), typeof t == "function" && (t = t(Re({}, i), this.props)), t && Re(i, t), t != null && this.__v && (e && this._sb.push(e), gi(this));
}, St.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), gi(this));
}, St.prototype.render = Le, Oe = [], Fi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Oi = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Ct.__r = 0, Bt = Math.random().toString(8), yt = "__d" + Bt, ft = "__a" + Bt, Vi = /(PointerCapture)$|Capture$/i, Zt = 0, Vt = vi(!1), Kt = vi(!0);
var Na = 0;
function a(t, e, i, n, o, r) {
  e || (e = {});
  var p, s, f = e;
  if ("ref" in f) for (s in f = {}, e) s == "ref" ? p = e[s] : f[s] = e[s];
  var d = { type: t, props: f, key: i, ref: p, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Na, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof t == "function" && (p = t.defaultProps)) for (s in p) f[s] === void 0 && (f[s] = p[s]);
  return oe.vnode && oe.vnode(d), d;
}
var gt, me, Ht, xi, bt = 0, Qi = [], fe = oe, wi = fe.__b, ki = fe.__r, yi = fe.diffed, _i = fe.__c, Si = fe.unmount, Mi = fe.__;
function Xt(t, e) {
  fe.__h && fe.__h(me, t, bt || e), bt = 0;
  var i = me.__H || (me.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function F(t) {
  return bt = 1, za(ea, t);
}
function za(t, e, i) {
  var n = Xt(gt++, 2);
  if (n.t = t, !n.__c && (n.__ = [ea(void 0, e), function(s) {
    var f = n.__N ? n.__N[0] : n.__[0], d = n.t(f, s);
    f !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = me, !me.__f)) {
    var o = function(s, f, d) {
      if (!n.__c.__H) return !0;
      var m = !1, v = n.__c.props !== s;
      if (n.__c.__H.__.some(function(b) {
        if (b.__N) {
          m = !0;
          var h = b.__[0];
          b.__ = b.__N, b.__N = void 0, h !== b.__[0] && (v = !0);
        }
      }), r) {
        var c = r.call(this, s, f, d);
        return m ? c || v : c;
      }
      return !m || v;
    };
    me.__f = !0;
    var r = me.shouldComponentUpdate, p = me.componentWillUpdate;
    me.componentWillUpdate = function(s, f, d) {
      if (this.__e) {
        var m = r;
        r = void 0, o(s, f, d), r = m;
      }
      p && p.call(this, s, f, d);
    }, me.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function q(t, e) {
  var i = Xt(gt++, 3);
  !fe.__s && Xi(i.__H, e) && (i.__ = t, i.u = e, me.__H.__h.push(i));
}
function ie(t) {
  return bt = 5, Ge(function() {
    return { current: t };
  }, []);
}
function Ge(t, e) {
  var i = Xt(gt++, 7);
  return Xi(i.__H, e) && (i.__ = t(), i.__H = e, i.__h = t), i.__;
}
function ce(t, e) {
  return bt = 8, Ge(function() {
    return t;
  }, e);
}
function Aa() {
  for (var t; t = Qi.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Mt), e.__h.some(Yt), e.__h = [];
    } catch (i) {
      e.__h = [], fe.__e(i, t.__v);
    }
  }
}
fe.__b = function(t) {
  me = null, wi && wi(t);
}, fe.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Mi && Mi(t, e);
}, fe.__r = function(t) {
  ki && ki(t), gt = 0;
  var e = (me = t.__c).__H;
  e && (Ht === me ? (e.__h = [], me.__h = [], e.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (e.__h.some(Mt), e.__h.some(Yt), e.__h = [], gt = 0)), Ht = me;
}, fe.diffed = function(t) {
  yi && yi(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Qi.push(e) !== 1 && xi === fe.requestAnimationFrame || ((xi = fe.requestAnimationFrame) || Ca)(Aa)), e.__H.__.some(function(i) {
    i.u && (i.__H = i.u, i.u = void 0);
  })), Ht = me = null;
}, fe.__c = function(t, e) {
  e.some(function(i) {
    try {
      i.__h.some(Mt), i.__h = i.__h.filter(function(n) {
        return !n.__ || Yt(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], fe.__e(n, i.__v);
    }
  }), _i && _i(t, e);
}, fe.unmount = function(t) {
  Si && Si(t);
  var e, i = t.__c;
  i && i.__H && (i.__H.__.some(function(n) {
    try {
      Mt(n);
    } catch (o) {
      e = o;
    }
  }), i.__H = void 0, e && fe.__e(e, i.__v));
};
var Ni = typeof requestAnimationFrame == "function";
function Ca(t) {
  var e, i = function() {
    clearTimeout(n), Ni && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(i, 35);
  Ni && (e = requestAnimationFrame(i));
}
function Mt(t) {
  var e = me, i = t.__c;
  typeof i == "function" && (t.__c = void 0, i()), me = e;
}
function Yt(t) {
  var e = me;
  t.__c = t.__(), me = e;
}
function Xi(t, e) {
  return !t || t.length !== e.length || e.some(function(i, n) {
    return i !== t[n];
  });
}
function ea(t, e) {
  return typeof e == "function" ? e(t) : e;
}
class ta extends Error {
  constructor(i, n = 60, o) {
    super(i);
    Ye(this, "retryAfterSeconds");
    Ye(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = o;
  }
}
class ei extends Error {
  constructor(i, n, o, r) {
    super(i);
    Ye(this, "status");
    Ye(this, "code");
    Ye(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = o, this.retryAfterSeconds = r;
  }
}
function Ia(t, e) {
  const i = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(i) && i > 0 ? Math.floor(i) : e;
}
async function Pt(t, e) {
  const i = await t.json().catch(() => null);
  ia(t.status, i, e, t.headers.get("Retry-After"));
}
function ia(t, e, i, n) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, r = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || i, p = Ia((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new ta(r, p, o) : new ei(r, t, o, p);
}
const Rt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map();
function La(t, e) {
  const n = `pitaj_widget_session_v2:${(e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "")}:${t}`;
  mt.delete(n);
  try {
    localStorage.removeItem(n);
  } catch {
  }
}
async function Ve(t, e) {
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = `pitaj_widget_session_v2:${i}:${t}`;
  if (mt.has(n)) return mt.get(n);
  try {
    const p = localStorage.getItem(n);
    if (p)
      return mt.set(n, p), p;
  } catch {
  }
  const o = Rt.get(n);
  if (o) return o;
  const r = (async () => {
    const p = await fetch(`${i}/api/widget/${encodeURIComponent(t)}/v2/session`, {
      method: "POST",
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!p.ok) throw new Error("Nije moguće pokrenuti sigurnu sesiju.");
    const s = await p.json();
    if (typeof s.token != "string" || !/^[a-f0-9]{64}$/.test(s.token)) throw new Error("Neispravan odgovor sesije.");
    mt.set(n, s.token);
    try {
      localStorage.setItem(n, s.token);
    } catch {
    }
    return s.token;
  })();
  Rt.set(n, r);
  try {
    return await r;
  } finally {
    Rt.delete(n);
  }
}
async function Ta(t, e, i, n, o) {
  if (!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1) throw new Error("Razgovor nije dostupan.");
  const r = (o || window.location.origin).replace(/\/$/, ""), p = await Ve(t, o), s = await fetch(`${r}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/action-dismissals`, {
    method: "POST",
    cache: "no-store",
    headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${p}` },
    body: JSON.stringify({ action_id: i, dismissal_uuid: n })
  });
  s.ok || await Pt(s, "Poruku nije moguće sačuvati.");
  const f = await s.json();
  if (typeof f.message != "string" || !f.message.trim() || f.message.length > 1020) throw new Error("Neispravan odgovor.");
  return f.message;
}
function Pa(t, e) {
  var n, o, r, p;
  const i = (o = (n = e.widget) == null ? void 0 : n.config) == null ? void 0 : o.event_key;
  return {
    widgetId: t,
    actionId: e.id,
    name: e.name,
    formId: e.form_id ?? null,
    inlineWidgetId: e.widget_id ?? ((r = e.widget) == null ? void 0 : r.id) ?? null,
    clientActionKey: ((p = e.widget) == null ? void 0 : p.type) === "action_client" && typeof i == "string" && /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(i) ? i : null
  };
}
async function Ea(t, e) {
  const i = t.body;
  if (!i)
    throw new Error("Response body is null");
  const n = i.getReader(), o = new TextDecoder("utf-8");
  let r = "";
  try {
    for (; ; ) {
      const { done: p, value: s } = await n.read();
      if (p)
        break;
      r += o.decode(s, { stream: !0 });
      const f = r.split(/\r?\n/);
      r = f.pop() || "";
      for (const d of f) {
        const m = d.trim();
        if (!(!m || m.startsWith(":")) && m.startsWith("data:")) {
          const v = m.slice(5).trim();
          if (v === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const c = JSON.parse(v);
            if (typeof c == "string")
              e.onChunk(c);
            else if (c && typeof c == "object") {
              (c.chunk || c.token || c.content || c.text) && e.onChunk(c.chunk || c.token || c.content || c.text), c.sources && Array.isArray(c.sources) && e.onSources && e.onSources(c.sources);
              const b = c.suggestedQuestions ?? c.suggested_questions;
              Array.isArray(b) && b.length > 0 && e.onSuggestedQuestions && e.onSuggestedQuestions(b), e.onConversationId && (c.conversation_id !== void 0 || c.conversationId !== void 0) && e.onConversationId(
                c.conversation_id ?? c.conversationId
              );
              const h = c.ticket_number ?? c.ticketNumber;
              e.onTicketNumber && h !== void 0 && h !== null && String(h).trim() !== "" && String(h).trim() !== "undefined" && String(h).trim() !== "null" && e.onTicketNumber(
                String(h).trim()
              ), e.onActionTrigger && c.triggered_action && typeof c.triggered_action == "object" && e.onActionTrigger(c.triggered_action);
            }
          } catch {
            e.onChunk(v);
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
function aa(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function ti(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function $a(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return ti(e.of(t));
  } catch {
    return null;
  }
}
function Da() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const i = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (i) {
        const n = JSON.parse(i);
        t = aa(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = ti(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = $a(t)), { code: t, name: e };
}
const zi = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Ba(t, e, i, n) {
  var f;
  const o = (n == null ? void 0 : n.action) || (i && i.length > 0 ? i[0] : null);
  if (o && e.onActionTrigger) {
    const v = (!!(o.widget_id || o.widget || n != null && n.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let c = 0; c < v.length; c++) {
      const b = v[c] + (c < v.length - 1 ? " " : "");
      e.onChunk(b), await new Promise((h) => setTimeout(h, 20));
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
  const r = `${zi[Math.floor(Math.random() * zi.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, p = ((f = n == null ? void 0 : n.content) == null ? void 0 : f.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = r.split(" ");
  for (let d = 0; d < s.length; d++) {
    const m = s[d] + (d < s.length - 1 ? " " : "");
    e.onChunk(m), await new Promise((v) => setTimeout(v, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && p.length > 0 && e.onSuggestedQuestions(p), e.onDone && e.onDone();
}
async function Ha(t) {
  const {
    companyId: e,
    conversationId: i,
    visitorId: n,
    message: o,
    forceNewConversation: r,
    apiUrl: p,
    mockMode: s,
    visitorName: f,
    visitorEmail: d,
    visitorPhone: m,
    visitorCountryCode: v,
    visitorCountryName: c,
    actions: b,
    previewDraft: h,
    callbacks: y
  } = t;
  if (s || !e || e === "default") {
    await Ba(o, y, b, h);
    return;
  }
  const A = (p || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), I = Da(), S = aa(v) ?? I.code ?? void 0, $ = ti(c) ?? I.name ?? void 0, X = await Ve(e, p), l = `${A}/api/widget/${encodeURIComponent(e)}/v2/chat`, C = i && !i.startsWith("conv-") ? parseInt(i, 10) : null, N = await fetch(l, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${X}`,
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: C,
      force_new_conversation: r === !0,
      visitor_id: n,
      visitor_language: t.visitorLanguage || void 0,
      visitor_name: f || void 0,
      visitor_email: d || void 0,
      visitor_phone: m || void 0,
      visitor_country_code: S,
      visitor_country_name: $
    })
  });
  if (N.ok || await Pt(N, `API greška (${N.status})`), (N.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Ea(N, y);
  else {
    const T = await N.json(), D = T.answer || T.message || "";
    T.conversation_id !== void 0 && y.onConversationId && y.onConversationId(T.conversation_id);
    const E = T.ticket_number ?? T.ticketNumber;
    if (E != null && String(E).trim() !== "" && String(E).trim() !== "undefined" && String(E).trim() !== "null" && y.onTicketNumber && y.onTicketNumber(String(E).trim()), T.ai_paused === !0 && y.onAiPaused && y.onAiPaused(), T.triggered_action && y.onActionTrigger && y.onActionTrigger(T.triggered_action), D && D.trim()) {
      const Q = D.split(" ");
      for (let ee = 0; ee < Q.length; ee++) {
        const V = Q[ee] + (ee < Q.length - 1 ? " " : "");
        y.onChunk(V), await new Promise((le) => setTimeout(le, 15));
      }
    }
    const P = T.suggestedQuestions ?? T.suggested_questions;
    Array.isArray(P) && P.length > 0 && y.onSuggestedQuestions && y.onSuggestedQuestions(P), y.onDone && y.onDone();
  }
}
async function Wt(t) {
  const { widgetId: e, visitorId: i, apiUrl: n, status: o, page: r = 1, perPage: p = 15 } = t, s = (n || "").replace(/\/$/, ""), f = new URLSearchParams({
    page: String(r),
    per_page: String(p)
  });
  o && f.set("status", o);
  const d = await Ve(e, n), m = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/v2/tickets?${f}`, { headers: { Authorization: `Bearer ${d}` } }), v = await m.json().catch(() => null);
  if (!m.ok) throw new Error(v && "error" in v ? v.error : "Tikete nije moguće učitati.");
  const c = (v == null ? void 0 : v.data) || [], b = c.map((A) => ({
    id: A.id,
    ticketNumber: A.ticket_number,
    conversationId: A.conversation_id,
    isResolved: !!A.is_resolved,
    updatedAt: A.updated_at,
    messages: (A.messages || []).map((I) => {
      var S;
      return {
        id: String(I.id),
        content: I.content,
        sender: I.role === "user" ? "user" : "ai",
        timestamp: I.created_at,
        status: "sent",
        suggestedQuestions: ((S = I.meta_json) == null ? void 0 : S.suggested_questions) || void 0
      };
    })
  })), h = v == null ? void 0 : v.meta, y = (h == null ? void 0 : h.has_more) !== void 0 ? !!h.has_more : c.length >= p;
  return {
    tickets: b,
    hasMore: y,
    total: h == null ? void 0 : h.total,
    currentPage: (h == null ? void 0 : h.current_page) ?? r
  };
}
async function Ra(t, e, i) {
  return (await Wt({ widgetId: t, visitorId: e, apiUrl: i, page: 1, perPage: 50 })).tickets;
}
async function Ua(t, e, i, n, o) {
  const r = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !r)
    return await new Promise((d) => setTimeout(d, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: i };
  const p = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await Ve(t, n), f = await fetch(`${p}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${s}` },
    body: JSON.stringify({ satisfaction: i })
  });
  if (!f.ok) {
    const m = (await f.json().catch(() => ({}))).error || (f.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), v = new Error(m);
    throw v.status = f.status, v;
  }
  return await f.json();
}
function Ai(t, e = "bs", i = ["bs"]) {
  var d, m;
  const n = (i && i.length > 0 ? i : [e]).map((v) => v.trim().toLowerCase()), o = (e || "bs").trim().toLowerCase();
  let r = "";
  if (t === "website" ? typeof document < "u" && (r = ((d = document.documentElement) == null ? void 0 : d.lang) || ((m = document.querySelector("html")) == null ? void 0 : m.getAttribute("lang")) || "") : typeof navigator < "u" && (r = navigator.language || navigator.languages && navigator.languages[0] || ""), !r || typeof r != "string")
    return o;
  let f = r.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (f === "hr" || f === "sr") && !n.includes(f) && n.includes("bs") && (f = "bs"), n.includes(f) ? f : o;
}
function ur(t, e, i) {
  const n = t.current_step;
  return t.run_id !== e.run_id || t.status !== "waiting_input" || (n == null ? void 0 : n.type) !== "wait_submission" || Object.prototype.hasOwnProperty.call(n, "widget") && (!n.widget || n.widget.id !== n.widget_id) || n.form_revision != null && n.form_revision !== e.form_revision ? null : n.widget_id === i && n.display_node_id === e.display_node_id ? n.node_id : null;
}
function Ci(t, e) {
  var r;
  const i = t.current_step;
  if (!i) return null;
  const n = t.status === "waiting_display" && i.type === "show_widget" ? i.node_id : t.status === "waiting_input" && i.type === "wait_submission" ? i.display_node_id : null;
  if (!n) return null;
  const o = Object.prototype.hasOwnProperty.call(i, "widget") ? i.widget : e.find((p) => p.id === i.widget_id);
  if ((o == null ? void 0 : o.id) !== i.widget_id) return null;
  if (o && t.status === "waiting_display") {
    const p = (r = o.config) == null ? void 0 : r.function_revision, s = i.function_revision;
    if ((p || s) && (!p || !s || p !== s)) return null;
  }
  return o ? { ...o, workflow: { run_id: t.run_id, display_node_id: n, ...t.status === "waiting_input" && i.form_revision ? { form_revision: i.form_revision } : {} } } : null;
}
function Fa(t, e) {
  if (!e.workflow) return t;
  const { run_id: i, display_node_id: n } = e.workflow, o = `workflow-${i}-${n}`, r = t.messages.findIndex((p) => {
    var s, f, d, m;
    return p.id === o || ((f = (s = p.widget) == null ? void 0 : s.workflow) == null ? void 0 : f.run_id) === i && ((m = (d = p.widget) == null ? void 0 : d.workflow) == null ? void 0 : m.display_node_id) === n;
  });
  if (r >= 0) {
    const p = t.messages[r];
    if (JSON.stringify(p.widget) === JSON.stringify(e)) return t;
    const s = [...t.messages];
    return s[r] = { ...p, widget: e }, { ...t, messages: s };
  }
  return { ...t, messages: [...t.messages, { id: o, content: "", sender: "ai", timestamp: (/* @__PURE__ */ new Date()).toISOString(), widget: e }] };
}
function Oa(t, e) {
  let i = !1;
  const n = setTimeout(() => {
    i || (i = !0, e("timeout"));
  }, t);
  return {
    complete(o) {
      return i || !o || typeof o != "object" || typeof o.success != "boolean" ? !1 : (i = !0, clearTimeout(n), e(o.success ? "success" : "failed"), !0);
    },
    cancel() {
      i || (i = !0, clearTimeout(n));
    }
  };
}
async function Va(t, e, i, n, o, r) {
  if (!(!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1))
    try {
      const p = (r || window.location.origin).replace(/\/$/, ""), s = await Ve(t, r);
      await fetch(`${p}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/client-action-results`, {
        method: "POST",
        cache: "no-store",
        headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${s}` },
        body: JSON.stringify({ action_id: i, event_uuid: n, state: o })
      });
    } catch {
    }
}
async function Ka(t) {
  const e = (t.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const i = await Ve(t.companyId, t.apiUrl), n = await fetch(
      `${e}/api/widget/${encodeURIComponent(t.companyId)}/v2/conversations/${encodeURIComponent(t.conversationId)}/live?after=${t.after}`,
      { headers: { Authorization: `Bearer ${i}`, Accept: "application/json" }, cache: "no-store" }
    );
    if (!n.ok) return null;
    const o = await n.json();
    return {
      aiPaused: o.ai_paused === !0,
      isResolved: o.is_resolved === !0,
      messages: Array.isArray(o.messages) ? o.messages : []
    };
  } catch {
    return null;
  }
}
const Ya = 3e3, Wa = 15e3, Ga = 3e4, Za = 1800 * 1e3, Ut = 60 * 1e3;
function Ii(t) {
  const { aiPaused: e, hidden: i, idleMs: n } = t;
  return i || n > Za ? null : e ? n <= 5 * Ut ? Ya : 1e4 : n <= 2 * Ut ? Wa : n <= 10 * Ut ? 3e4 : 6e4;
}
const It = "op-";
function Ja(t) {
  let e = 0;
  for (const i of t) {
    if (!i.isHuman || !i.id.startsWith(It)) continue;
    const n = Number(i.id.slice(It.length));
    Number.isFinite(n) && n > e && (e = n);
  }
  return e;
}
function qa(t, e) {
  const i = new Set(t.map((o) => o.id)), n = e.filter((o) => o && typeof o.content == "string" && o.content.trim() !== "" && !i.has(It + o.id)).map((o) => ({
    id: It + o.id,
    content: o.content,
    sender: "ai",
    timestamp: o.created_at || (/* @__PURE__ */ new Date()).toISOString(),
    status: "sent",
    isHuman: !0,
    authorName: o.author_name || null
  }));
  return { messages: n.length > 0 ? [...t, ...n] : t, added: n.length };
}
const Li = "pitaj_io_visitor_id", Qa = "chat_direkt_visitor_id", Xa = "pitaj_io_visitor_meta", en = "chat_direkt_visitor_meta";
function ii(t) {
  return `pitaj_io_convs_v2_${t}`;
}
function tn() {
  try {
    let t = localStorage.getItem(Li) || localStorage.getItem(Qa);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Li, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const an = [];
function nn(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function rn(t) {
  return t.filter((e) => !nn(e)).map((e) => {
    const i = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: i, messages: (e.messages || []).map((n) => {
      var o, r;
      return ((o = n.widget) == null ? void 0 : o.type) === "action_client" && ((r = n.widget.config) == null ? void 0 : r.client_action_state) === "pending" ? { ...n, widget: { ...n.widget, config: { ...n.widget.config, client_action_state: "unknown" } } } : n;
    }) };
  });
}
function Ti(t) {
  try {
    const e = localStorage.getItem(ii(t));
    if (e) {
      const i = JSON.parse(e);
      if (Array.isArray(i))
        return rn(i);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return an;
}
function on(t, e) {
  try {
    localStorage.setItem(ii(t), JSON.stringify(e));
  } catch (i) {
    console.warn("[Pitaj.io] Error saving to localStorage", i);
  }
}
function Pi(t) {
  var o, r, p, s, f, d, m, v, c, b, h, y;
  const e = t.previewDraft, i = (/* @__PURE__ */ new Date()).toISOString(), n = (e == null ? void 0 : e.initialStep) || "idle";
  if (n === "idle") {
    const A = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", I = (o = e == null ? void 0 : e.action) != null && o.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: A,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: A,
            sender: "ai",
            timestamp: i,
            status: "sent",
            suggestedQuestions: I.length > 0 ? I : void 0
          }
        ]
      }
    ];
  }
  if (n === "form") {
    const A = (e == null ? void 0 : e.simulatedUserMessage) || ((r = e == null ? void 0 : e.action) == null ? void 0 : r.trigger_hint) || "Pokreni akciju", S = !!((p = e == null ? void 0 : e.action) != null && p.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", $ = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((f = e == null ? void 0 : e.action) == null ? void 0 : f.name) || "Pregled akcije",
        preview: S,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: A,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai",
            content: S,
            sender: "ai",
            timestamp: i,
            status: "sent",
            widget: $
          }
        ]
      }
    ];
  }
  if (n === "submitted") {
    const A = (e == null ? void 0 : e.simulatedUserMessage) || ((d = e == null ? void 0 : e.action) == null ? void 0 : d.trigger_hint) || "Pokreni akciju", I = ((m = e == null ? void 0 : e.form) == null ? void 0 : m.name) || ((v = e == null ? void 0 : e.action) == null ? void 0 : v.name) || "Forma", S = ((c = e == null ? void 0 : e.form) == null ? void 0 : c.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: I,
        preview: S,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: A,
            sender: "user",
            timestamp: new Date(Date.now() - 4e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-form-sub",
            content: `Forma: ${I}
- Status: Uspješno poslano`,
            sender: "user",
            timestamp: new Date(Date.now() - 1e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-success",
            content: S,
            sender: "ai",
            timestamp: i,
            status: "sent"
          }
        ]
      }
    ];
  }
  if (n === "dismissed") {
    const A = (e == null ? void 0 : e.simulatedUserMessage) || ((b = e == null ? void 0 : e.action) == null ? void 0 : b.trigger_hint) || "Pokreni akciju", I = ((h = e == null ? void 0 : e.action) == null ? void 0 : h.dismiss_message) || "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((y = e == null ? void 0 : e.action) == null ? void 0 : y.name) || "Pregled akcije",
        preview: I,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: A,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-dismiss",
            content: I,
            sender: "ai",
            timestamp: i,
            status: "sent"
          }
        ]
      }
    ];
  }
  return [];
}
function sn(t, e) {
  var Ke, Je, qe, Qe, Xe, et, tt, it, at, nt, rt, ot, st, ct, pt, lt, k, w, M, Y, he, we, De;
  const i = !!(t.isPreview || t.previewDraft), [n, o] = F(t), [r, p] = F((e == null ? void 0 : e.startOpen) ?? !1), [s, f] = F(
    (e == null ? void 0 : e.initialScreen) ?? (i ? "conversation" : "new-conversation")
  ), [d, m] = F(
    () => i ? Pi(t) : Ti(t.companyId)
  ), v = ie([]);
  v.current = d;
  const [c, b] = F(() => {
    if (i) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const g = Ti(t.companyId);
      return g.length > 0 ? g[0].id : null;
    }
    return null;
  }), [h, y] = F(!1), [A, I] = F({}), S = ie({});
  S.current = A;
  const $ = ie(Date.now()), [X, l] = F(0), [C, N] = F(null), [B, T] = F(null), [D, E] = F(!1), [P, Q] = F(
    () => {
      var g, _, z;
      return Ai(
        (g = t.content) == null ? void 0 : g.languageSource,
        ((_ = t.content) == null ? void 0 : _.defaultLanguage) || "bs",
        ((z = t.content) == null ? void 0 : z.supportedLanguages) || ["bs"]
      );
    }
  );
  q(() => {
    var _, z, W;
    const g = Ai(
      (_ = n.content) == null ? void 0 : _.languageSource,
      ((z = n.content) == null ? void 0 : z.defaultLanguage) || "bs",
      ((W = n.content) == null ? void 0 : W.supportedLanguages) || ["bs"]
    );
    Q(g);
  }, [
    (Ke = n.content) == null ? void 0 : Ke.languageSource,
    (Je = n.content) == null ? void 0 : Je.defaultLanguage,
    (qe = n.content) == null ? void 0 : qe.supportedLanguages
  ]);
  const ee = ie(tn()), [V, le] = F(() => {
    try {
      const g = localStorage.getItem(Xa) || localStorage.getItem(en);
      if (g) {
        const _ = JSON.parse(g), z = {};
        return typeof _.name == "string" && (z.name = _.name), typeof _.email == "string" && (z.email = _.email), typeof _.phone == "string" && (z.phone = _.phone), z;
      }
    } catch (g) {
      console.warn("[Pitaj.io] Error reading visitor meta", g);
    }
    return {};
  }), L = ie(e == null ? void 0 : e.emitEvent);
  L.current = e == null ? void 0 : e.emitEvent;
  const ae = ie(e == null ? void 0 : e.onActionTrigger);
  ae.current = e == null ? void 0 : e.onActionTrigger;
  const j = ie(/* @__PURE__ */ new Map());
  q(() => () => {
    j.current.forEach((g) => g()), j.current.clear();
  }, []);
  const Z = ce((g, _) => {
    const z = Number.isFinite(g) ? Math.max(1, Math.floor(g)) : 60;
    N((W) => W === null ? z : Math.max(W, z)), T(_ || `Previše zahtjeva. Molimo sačekajte ${z}s.`);
  }, []), se = ce((g) => {
    if (g) {
      if (g === "WIDGET_CHAT_DISABLED") {
        o((_) => ({ ..._, chatAvailable: !1 })), T("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (g === "WIDGET_TRANSCRIBE_DISABLED") {
        o((_) => ({ ..._, transcribeAvailable: !1 })), T("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      g === "WIDGET_FORMS_DISABLED" && (o((_) => ({ ..._, formsAvailable: !1, formsEnabled: !1 })), T("Forme su trenutno privremeno nedostupne."));
    }
  }, []), re = ce((g, _ = "Došlo je do greške pri obradi zahtjeva.") => {
    var W, u, J, ne;
    if (g instanceof ta) {
      Z(g.retryAfterSeconds, g.message), (W = L.current) == null || W.call(L, "error_occurred", { code: g.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (g instanceof ei) {
      if (g.code === "WIDGET_SESSION_INVALID" || g.code === "WIDGET_SESSION_REQUIRED") {
        E(!0), T("Sesija je istekla. Pokrenite novu sesiju za nastavak razgovora.");
        return;
      }
      if (g.code === "COUNTRY_BLOCKED") {
        o((Se) => ({ ...Se, chatAvailable: !1 })), T(g.message || "Pristup nije dozvoljen u vašoj regiji."), (u = L.current) == null || u.call(L, "error_occurred", { status: g.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      se(g.code), T(g.message || _), (J = L.current) == null || J.call(L, "error_occurred", { status: g.status, code: g.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let z = g instanceof Error ? g.message : _;
    !z || z === "Failed to fetch" || z.includes("NetworkError") ? z = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : z.includes("404") ? z = "Traženi razgovor ili podaci nisu pronađeni." : (z.includes("500") || z.includes("502") || z.includes("503")) && (z = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), T(z || _), (ne = L.current) == null || ne.call(L, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [Z, se]), Ae = ce(() => {
    try {
      const g = ii(n.companyId), _ = localStorage.getItem(g);
      _ && localStorage.setItem(`${g}:archive:${Date.now()}`, _);
    } catch {
    }
    La(n.companyId, n.apiUrl), m([]), b(null), E(!1), T(null), f("new-conversation");
  }, [n.companyId, n.apiUrl]);
  q(() => {
    n.isPreview || n.mockMode || n.companyId === "preview" || on(n.companyId, d);
  }, [d, n.companyId, n.isPreview, n.mockMode]), q(() => {
    if (n.isPreview || n.previewDraft) {
      const g = Pi(n);
      m(g), b("preview-conv-1"), f("conversation");
    }
  }, [
    n.isPreview,
    (Qe = n.previewDraft) == null ? void 0 : Qe.revision,
    (Xe = n.previewDraft) == null ? void 0 : Xe.initialStep,
    (tt = (et = n.previewDraft) == null ? void 0 : et.action) == null ? void 0 : tt.id,
    (at = (it = n.previewDraft) == null ? void 0 : it.action) == null ? void 0 : at.name,
    (rt = (nt = n.previewDraft) == null ? void 0 : nt.action) == null ? void 0 : rt.trigger_hint,
    (st = (ot = n.previewDraft) == null ? void 0 : ot.action) == null ? void 0 : st.dismiss_message,
    (pt = (ct = n.previewDraft) == null ? void 0 : ct.form) == null ? void 0 : pt.id,
    (k = (lt = n.previewDraft) == null ? void 0 : lt.form) == null ? void 0 : k.name,
    (M = (w = n.previewDraft) == null ? void 0 : w.form) == null ? void 0 : M.success_message,
    (he = (Y = n.previewDraft) == null ? void 0 : Y.widget) == null ? void 0 : he.id,
    (De = (we = n.previewDraft) == null ? void 0 : we.widget) == null ? void 0 : De.type
  ]), q(() => {
    if (C === null || C <= 0) return;
    const g = setInterval(() => {
      N((_) => _ && _ > 1 ? _ - 1 : null);
    }, 1e3);
    return () => clearInterval(g);
  }, [C]), q(() => {
    if (!n.companyId || n.mockMode) return;
    let g = !0;
    return Ra(n.companyId, ee.current, n.apiUrl).then((_) => {
      !g || !_ || _.length === 0 || m((z) => {
        let W = !1;
        const u = z.map((J) => {
          const ne = _.find((Se) => String(Se.id) === J.id);
          return ne && ne.ticketNumber && J.ticketNumber !== ne.ticketNumber ? (W = !0, { ...J, ticketNumber: ne.ticketNumber }) : J;
        });
        return W ? u : z;
      });
    }).catch(() => {
    }), () => {
      g = !1;
    };
  }, [n.companyId, n.apiUrl, n.mockMode]);
  const de = d.find((g) => g.id === c) || null, Te = d.reduce((g, _) => g + (_.unread || 0), 0), Ce = ce((g) => {
    p((_) => {
      var z;
      return _ === g ? _ : ((z = L.current) == null || z.call(L, g ? "widget_opened" : "widget_closed"), g);
    });
  }, []), be = ce((g) => {
    f((_) => {
      var z;
      return _ === g ? _ : ((z = L.current) == null || z.call(L, "screen_changed", { screen: g }), g);
    });
  }, []), ge = ce((g) => {
    var _;
    b(g.id), m((z) => z.some((u) => u.id === g.id) ? z.map((u) => u.id === g.id ? { ...u, ...g, unread: 0, status: g.status || "active" } : u) : [{ ...g, unread: 0, status: g.status || "active" }, ...z]), f("conversation"), (_ = L.current) == null || _.call(L, "conversation_selected", { conversationId: g.id });
  }, []), xe = ce(() => {
    var g;
    m(
      (_) => _.map((z) => z.id === c ? { ...z, status: "ended" } : z)
    ), b(null), f("new-conversation"), (g = L.current) == null || g.call(L, "conversation_ended", { conversationId: c });
  }, [c]), $e = ce((g) => {
    m((_) => _.filter((z) => z.id !== g)), b((_) => _ === g ? null : _), c === g && f("new-conversation");
  }, [c]), ke = ce((g) => {
    var J;
    if (n.chatAvailable === !1) {
      T("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (C !== null) {
      T(`Previše zahtjeva. Molimo sačekajte ${C}s.`);
      return;
    }
    const _ = "conv-" + Date.now(), z = (/* @__PURE__ */ new Date()).toISOString(), W = g ? g.length > 40 ? g.slice(0, 40) + "…" : g : "Novo ćaskanje", u = {
      id: _,
      title: W,
      preview: g || "Započeto novo ćaskanje",
      timestamp: z,
      unread: 0,
      messages: g ? [
        {
          id: "msg-" + Date.now(),
          content: g,
          sender: "user",
          timestamp: z,
          status: "sent"
        }
      ] : []
    };
    m((ne) => [u, ...ne]), b(_), f("conversation"), (J = L.current) == null || J.call(L, "conversation_started", { conversationId: _, initialMessage: g }), g && He(_, g, [u.messages[0]], !0);
  }, [n.apiUrl, n.chatAvailable, n.companyId, n.mockMode, C, V]), He = async (g, _, z, W = !1) => {
    var Se;
    y(!0), T(null);
    const u = "ai-msg-" + Date.now(), J = {
      id: u,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    m(
      (K) => K.map((O) => O.id !== g ? O : {
        ...O,
        preview: _,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...O.messages.filter((U) => U.id !== u), J]
      })
    ), (Se = L.current) == null || Se.call(L, "stream_started", { conversationId: g }), $.current = Date.now();
    let ne = !1;
    try {
      await Ha({
        companyId: n.companyId,
        conversationId: g,
        visitorId: ee.current,
        visitorLanguage: P,
        message: _,
        forceNewConversation: W || g.startsWith("conv-"),
        apiUrl: n.apiUrl,
        mockMode: n.mockMode || n.isPreview,
        visitorName: V.name,
        visitorEmail: V.email,
        visitorPhone: V.phone,
        actions: n.actions,
        previewDraft: n.previewDraft,
        callbacks: {
          onConversationId: (K) => {
            const O = g, U = String(K);
            g = U, b(U), m(
              (ue) => ue.map((H) => H.id === O || H.messages.some((ye) => ye.id === u) ? { ...H, id: U } : H)
            );
          },
          onAiPaused: () => {
            ne = !0, I((K) => ({ ...K, [g]: !0 }));
          },
          onTicketNumber: (K) => {
            const O = K && String(K).trim() !== "" && String(K).trim() !== "undefined" && String(K).trim() !== "null" ? String(K).trim() : null;
            O && m(
              (U) => U.map((ue) => ue.id === g || ue.messages.some((ye) => ye.id === u) ? { ...ue, ticketNumber: O } : ue)
            );
          },
          onActionTrigger: (K) => {
            var ue, H, ye;
            let O = K.widget || K.triggered_widget || (K.widget_id && n.widgets ? n.widgets.find((Ie) => Ie.id === K.widget_id) : null) || null, U;
            if ((ue = j.current.get(u)) == null || ue(), j.current.delete(u), (O == null ? void 0 : O.type) === "action_client" && ((H = O.config) == null ? void 0 : H.wait_for_response) === !0 && !n.isPreview && !n.mockMode) {
              O = { ...O, config: { ...O.config, client_action_state: "pending" } };
              const Ie = crypto.randomUUID(), Me = Oa(15e3, (Pe) => {
                Va(n.companyId, g, Number(K.id), Ie, Pe, n.apiUrl), j.current.get(u) === Me.cancel && j.current.delete(u), m((Ne) => Ne.map((_e) => ({ ..._e, messages: _e.messages.map((Be) => {
                  var ze;
                  return Be.id === u && ((ze = Be.widget) == null ? void 0 : ze.type) === "action_client" ? { ...Be, widget: { ...Be.widget, config: { ...Be.widget.config, client_action_state: Pe } } } : Be;
                }) })));
              });
              j.current.set(u, Me.cancel), U = Me.complete;
            }
            O && m(
              (Ie) => Ie.map((Me) => Me.id === g || Me.messages.some((Ne) => Ne.id === u) ? {
                ...Me,
                messages: Me.messages.map(
                  (Ne) => Ne.id === u ? { ...Ne, widget: O } : Ne
                )
              } : Me)
            ), (ye = ae.current) == null || ye.call(ae, O ? { ...K, widget: O } : K, U);
          },
          onChunk: (K) => {
            m(
              (O) => O.map((U) => U.id === g || U.messages.some((H) => H.id === u) ? {
                ...U,
                messages: U.messages.map(
                  (H) => H.id === u ? { ...H, content: H.content + K } : H
                )
              } : U)
            );
          },
          onSources: (K) => {
            m(
              (O) => O.map((U) => U.id === g || U.messages.some((H) => H.id === u) ? {
                ...U,
                messages: U.messages.map(
                  (H) => H.id === u ? { ...H, sources: K } : H
                )
              } : U)
            );
          },
          onSuggestedQuestions: (K) => {
            m(
              (O) => O.map((U) => U.id === g || U.messages.some((H) => H.id === u) ? {
                ...U,
                messages: U.messages.map(
                  (H) => H.id === u ? { ...H, suggestedQuestions: K } : H
                )
              } : U)
            );
          },
          onDone: () => {
            var K;
            m(
              (O) => O.map((U) => {
                var Pe, Ne;
                if (!(U.id === g || U.messages.some((_e) => _e.id === u))) return U;
                const H = U.messages.find((_e) => _e.id === u), ye = (Pe = H == null ? void 0 : H.widget) == null ? void 0 : Pe.name, Ie = (Ne = H == null ? void 0 : H.content) == null ? void 0 : Ne.trim(), Me = Ie ? Ie.slice(0, 70) : ye ? `[${ye}]` : U.preview;
                return {
                  ...U,
                  preview: Me,
                  messages: ne && !(H != null && H.content) && !(H != null && H.widget) ? U.messages.filter((_e) => _e.id !== u) : U.messages.map(
                    (_e) => _e.id === u ? { ..._e, isStreaming: !1 } : _e
                  )
                };
              })
            ), y(!1), (K = L.current) == null || K.call(L, "stream_completed", { conversationId: g });
          },
          onError: (K) => {
            console.error("[Pitaj.io] Stream error:", K), T(K.message || "Došlo je do greške u komunikaciji."), y(!1);
          }
        }
      });
    } catch (K) {
      y(!1), re(K, "Greška pri slanju poruke.");
    }
  };
  q(() => {
    const g = c, _ = !!(g && /^\d+$/.test(g));
    if (i || n.mockMode || !r || !_ || !g) return;
    let z = !1, W;
    $.current = Date.now();
    const u = () => {
      if (z) return;
      const ne = Ii({
        aiPaused: !!S.current[g],
        hidden: typeof document < "u" && document.hidden,
        idleMs: Date.now() - $.current
      });
      W = setTimeout(J, ne ?? Ga);
    }, J = async () => {
      const ne = Date.now() - $.current;
      if (!(Ii({ aiPaused: !!S.current[g], hidden: typeof document < "u" && document.hidden, idleMs: ne }) === null)) {
        const K = v.current.find((U) => U.id === g), O = await Ka({
          companyId: n.companyId,
          conversationId: g,
          after: K ? Ja(K.messages) : 0,
          apiUrl: n.apiUrl
        });
        if (z) return;
        O && (I((U) => !!U[g] === O.aiPaused ? U : { ...U, [g]: O.aiPaused }), O.messages.length > 0 && ($.current = Date.now(), m((U) => U.map((ue) => {
          if (ue.id !== g) return ue;
          const H = qa(ue.messages, O.messages);
          if (H.added === 0) return ue;
          const ye = H.messages[H.messages.length - 1];
          return { ...ue, messages: H.messages, preview: ye.content.slice(0, 70), timestamp: ye.timestamp };
        }))));
      }
      u();
    };
    return W = setTimeout(J, 1e3), () => {
      z = !0, W && clearTimeout(W);
    };
  }, [c, r, i, n.mockMode, n.companyId, n.apiUrl, X]);
  const x = ce((g) => {
    var u;
    const _ = g.trim();
    if (!_ || h || n.chatAvailable === !1 || C !== null) return;
    if (!c) {
      ke(_);
      return;
    }
    const W = {
      id: "usr-msg-" + Date.now(),
      content: _,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    m(
      (J) => J.map((ne) => ne.id !== c ? ne : {
        ...ne,
        preview: _,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...ne.messages, W]
      })
    ), $.current = Date.now(), l((J) => J + 1), (u = L.current) == null || u.call(L, "message_sent", { conversationId: c, content: _ }), He(c, _, de ? de.messages : []);
  }, [c, h, ke, de, n.chatAvailable, n.companyId, n.apiUrl, n.mockMode, C]), G = ce(
    async (g, _, z) => {
      var W;
      if (!n.mockMode)
        try {
          await Ua(
            n.companyId,
            g,
            _,
            n.apiUrl,
            n.mockMode
          );
        } catch (u) {
          console.error("[Pitaj.io] Failed to submit rating:", u);
          const J = (u == null ? void 0 : u.status) === 404 ? "Razgovor ili tiket više nije dostupan." : u != null && u.message && !u.message.includes("failed") && !u.message.includes("404") ? u.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(J);
        }
      m(
        (u) => u.map(
          (J) => J.id === g ? { ...J, satisfaction: _, ratingScore: z ?? J.ratingScore } : J
        )
      ), (W = L.current) == null || W.call(L, "rating_submitted", {
        conversationId: g,
        satisfaction: _,
        score: z
      });
    },
    [n.companyId, n.apiUrl, n.mockMode]
  ), te = ce(
    (g, _, z = "user") => {
      const W = _.trim();
      if (!W) return;
      const u = (/* @__PURE__ */ new Date()).toISOString(), J = `conv-${Date.now()}`, ne = typeof g == "string" && g.trim().length > 0 ? g : J, Se = {
        id: `local-${z}-msg-${Date.now()}`,
        content: W,
        sender: z,
        timestamp: u,
        status: "sent"
      };
      m(
        (K) => K.some((O) => O.id === ne) ? K.map((O) => O.id !== ne ? O : {
          ...O,
          preview: W.length > 70 ? `${W.slice(0, 70)}…` : W,
          timestamp: u,
          messages: [...O.messages, Se]
        }) : [
          {
            id: ne,
            title: "Forma",
            preview: W.length > 70 ? `${W.slice(0, 70)}…` : W,
            timestamp: u,
            unread: 0,
            messages: [Se],
            status: "active"
          },
          ...K
        ]
      ), b(ne), f("conversation");
    },
    []
  ), ve = ce((g, _) => {
    _.workflow && m((z) => z.map((W) => W.id === g ? Fa(W, _) : W));
  }, []), je = (g) => {
    var _;
    return !!((_ = g.messages) != null && _.some((z) => z.sender === "ai"));
  };
  return {
    config: n,
    setConfig: o,
    isOpen: r,
    setIsOpen: Ce,
    screen: s,
    setScreen: be,
    conversations: d,
    activeConversation: de,
    activeConversationId: c,
    activeConversationHumanActive: !!(c && A[c]),
    visitorContact: V,
    visitorId: ee.current,
    activeConversationHasReply: de ? je(de) : !1,
    totalUnread: Te,
    isStreaming: h,
    rateLimitTimer: C,
    errorBanner: B,
    sessionInvalid: D,
    resetSession: Ae,
    setErrorBanner: T,
    activeLanguage: P,
    setActiveLanguage: Q,
    selectConversation: ge,
    startNewConversation: ke,
    endConversation: xe,
    deleteConversation: $e,
    sendUserMessage: x,
    submitSatisfaction: G,
    appendConversationMessage: te,
    appendWorkflowWidget: ve,
    handleApiError: re
  };
}
let Ft = null, na = null;
function Ei(t, e) {
  e === null && t !== null && Ft !== null && Ft !== t || (Ft = e ? t : null, na = e);
}
function Fe() {
  return na;
}
function ai(t, e) {
  let i = null;
  const n = () => i || (i = t().then((o) => {
    const r = e ? e(o) : o.default;
    if (!r)
      throw new Error("Lazy component not found");
    return r;
  }));
  return function(r) {
    const [p, s] = F(null);
    return q(() => {
      let f = !0;
      return n().then((d) => {
        f && s(() => d);
      }).catch((d) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", d);
      }), () => {
        f = !1;
      };
    }, []), p ? /* @__PURE__ */ a(p, { ...r }) : /* @__PURE__ */ a("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function cn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ a("path", { d: "M5 3v4" }),
    /* @__PURE__ */ a("path", { d: "M19 17v4" }),
    /* @__PURE__ */ a("path", { d: "M3 5h4" }),
    /* @__PURE__ */ a("path", { d: "M17 19h4" })
  ] });
}
function ra({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ a("path", { d: "M12 19V5" })
  ] });
}
function pn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ a("path", { d: "M19 12H5" })
  ] });
}
function Ue({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ a("path", { d: "m6 6 12 12" })
  ] });
}
function ln({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function mr({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 5v14" }),
    /* @__PURE__ */ a("path", { d: "M5 12h14" })
  ] });
}
function Nt({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M20 6 9 17l-5-5" }) });
}
function dn({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function un({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v6" }),
    /* @__PURE__ */ a("path", { d: "M9 11h6" })
  ] });
}
function oa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function mn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ a("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function hn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function hr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] });
}
function fn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ a("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ a("path", { d: "M12 7v5l4 2" })
  ] });
}
function gn({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ a("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ a("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function bn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function sa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ a("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function vn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ a("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function ca({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ a("path", { d: "M10 9H8" }),
    /* @__PURE__ */ a("path", { d: "M16 13H8" }),
    /* @__PURE__ */ a("path", { d: "M16 17H8" })
  ] });
}
function jn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M7 10v12" }),
    /* @__PURE__ */ a("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function xn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M17 14V2" }),
    /* @__PURE__ */ a("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function pa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function fr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M8 2v4" }),
    /* @__PURE__ */ a("path", { d: "M16 2v4" }),
    /* @__PURE__ */ a("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ a("path", { d: "M3 10h18" })
  ] });
}
function gr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 16V4" }),
    /* @__PURE__ */ a("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ a("path", { d: "M20 16v4H4v-4" })
  ] });
}
function br({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m15 18-6-6 6-6" }) });
}
function vr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m9 18 6-6-6-6" }) });
}
function jr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m6 9 6 6 6-6" }) });
}
function xr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M5 12h14" }) });
}
function wn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ a("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ a("path", { d: "M10 11v6" }),
    /* @__PURE__ */ a("path", { d: "M14 11v6" })
  ] });
}
function wr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ a("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ a("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ a("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function kr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M10 2v2" }),
    /* @__PURE__ */ a("path", { d: "M14 2v2" }),
    /* @__PURE__ */ a("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ a("path", { d: "M6 2v2" })
  ] });
}
function yr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M15 2v19" }),
    /* @__PURE__ */ a("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M8 2v19" })
  ] });
}
function _r({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ a("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ a("path", { d: "M9 17h6" }),
    /* @__PURE__ */ a("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function Sr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function Mr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m10 20-1.25-2.5L6 18" }),
    /* @__PURE__ */ a("path", { d: "M10 4 8.75 6.5 6 6" }),
    /* @__PURE__ */ a("path", { d: "m14 20 1.25-2.5L18 18" }),
    /* @__PURE__ */ a("path", { d: "m14 4 1.25 2.5L18 6" }),
    /* @__PURE__ */ a("path", { d: "m17 21-3-6h-4l-3 6" }),
    /* @__PURE__ */ a("path", { d: "m17 3-3 6h-4L7 3" }),
    /* @__PURE__ */ a("path", { d: "M2 12h20" }),
    /* @__PURE__ */ a("path", { d: "m20 10-2.5 1.25L18 14" }),
    /* @__PURE__ */ a("path", { d: "m4 10 2.5 1.25L6 14" }),
    /* @__PURE__ */ a("path", { d: "m20 14-2.5-1.25L18 10" }),
    /* @__PURE__ */ a("path", { d: "m4 14 2.5-1.25L6 10" })
  ] });
}
function Nr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m6.5 6.5 11 11" }),
    /* @__PURE__ */ a("path", { d: "m21 21-1-1" }),
    /* @__PURE__ */ a("path", { d: "m3 3 1 1" }),
    /* @__PURE__ */ a("path", { d: "m18 22 4-4" }),
    /* @__PURE__ */ a("path", { d: "m2 6 4-4" }),
    /* @__PURE__ */ a("path", { d: "m3 10 7-7" }),
    /* @__PURE__ */ a("path", { d: "m14 21 7-7" })
  ] });
}
function zr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ a("path", { d: "M7 7h.01" })
  ] });
}
function Ar({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function Cr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ a("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ a("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function Ir({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ a("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ a("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function Lr({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ a("path", { d: "M12 2v2" }),
    /* @__PURE__ */ a("path", { d: "M12 20v2" }),
    /* @__PURE__ */ a("path", { d: "m4.93 4.93 1.41 1.41" }),
    /* @__PURE__ */ a("path", { d: "m17.66 17.66 1.41 1.41" }),
    /* @__PURE__ */ a("path", { d: "M2 12h2" }),
    /* @__PURE__ */ a("path", { d: "M20 12h2" }),
    /* @__PURE__ */ a("path", { d: "m6.34 17.66-1.41 1.41" }),
    /* @__PURE__ */ a("path", { d: "m19.07 4.93-1.41 1.41" })
  ] });
}
function Tr({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Pr({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Er({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function $r({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ a("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function Et({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a(
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
        /* @__PURE__ */ a("rect", { width: "28", height: "28", rx: "2.5", fill: "#09090b" }),
        /* @__PURE__ */ a(
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
function kn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 100 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `pitaj-ai-spinner ${e}`.trim(),
      "aria-hidden": "true",
      children: /* @__PURE__ */ a("g", { fill: "currentColor", children: [
        /* @__PURE__ */ a("g", { className: "pitaj-spinner-segments", children: [
          /* @__PURE__ */ a("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5" }),
          /* @__PURE__ */ a("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(60 50 50)" }),
          /* @__PURE__ */ a("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(120 50 50)" }),
          /* @__PURE__ */ a("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(180 50 50)" }),
          /* @__PURE__ */ a("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(240 50 50)" }),
          /* @__PURE__ */ a("rect", { x: "45.5", y: "5", width: "9", height: "23", rx: "4.5", transform: "rotate(300 50 50)" })
        ] }),
        /* @__PURE__ */ a(
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
const dt = {
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
    maybeLater: "Možda kasnije",
    operatorLabel: "Operater",
    operatorJoined: "Razgovarate s operaterom"
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
    maybeLater: "Možda kasnije",
    operatorLabel: "Operater",
    operatorJoined: "Razgovarate s operaterom"
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
    maybeLater: "Možda kasnije",
    operatorLabel: "Operater",
    operatorJoined: "Razgovarate sa operaterom"
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
    maybeLater: "Morda kasneje",
    operatorLabel: "Operater",
    operatorJoined: "Pogovarjate se z operaterjem"
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
    maybeLater: "Можеби подоцна",
    operatorLabel: "Оператор",
    operatorJoined: "Разговарате со оператор"
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
    maybeLater: "Ndoshta më vonë",
    operatorLabel: "Operatori",
    operatorJoined: "Po bisedoni me një operator"
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
    maybeLater: "Може би по-късно",
    operatorLabel: "Оператор",
    operatorJoined: "Разговаряте с оператор"
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
    maybeLater: "Maybe later",
    operatorLabel: "Agent",
    operatorJoined: "You are chatting with a support agent"
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
    maybeLater: "Vielleicht später",
    operatorLabel: "Mitarbeiter",
    operatorJoined: "Sie chatten mit einem Mitarbeiter"
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
    maybeLater: "Peut-être plus tard",
    operatorLabel: "Conseiller",
    operatorJoined: "Vous discutez avec un conseiller"
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
    maybeLater: "Misschien later",
    operatorLabel: "Medewerker",
    operatorJoined: "U chat met een medewerker"
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
    maybeLater: "Forse più tardi",
    operatorLabel: "Operatore",
    operatorJoined: "Stai parlando con un operatore"
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
    maybeLater: "Quizás más tarde",
    operatorLabel: "Agente",
    operatorJoined: "Está chateando con un agente"
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
    maybeLater: "Talvez mais tarde",
    operatorLabel: "Agente",
    operatorJoined: "Está a conversar com um agente"
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
    maybeLater: "Ίσως αργότερα",
    operatorLabel: "Εκπρόσωπος",
    operatorJoined: "Συνομιλείτε με εκπρόσωπο"
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
    maybeLater: "Belki daha sonra",
    operatorLabel: "Temsilci",
    operatorJoined: "Bir temsilciyle görüşüyorsunuz"
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
    maybeLater: "Może później",
    operatorLabel: "Konsultant",
    operatorJoined: "Rozmawiasz z konsultantem"
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
    maybeLater: "Možná později",
    operatorLabel: "Operátor",
    operatorJoined: "Chatujete s operátorem"
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
    maybeLater: "Možno neskôr",
    operatorLabel: "Operátor",
    operatorJoined: "Chatujete s operátorom"
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
    maybeLater: "Talán később",
    operatorLabel: "Munkatárs",
    operatorJoined: "Munkatárssal beszélget"
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
    maybeLater: "Poate mai târziu",
    operatorLabel: "Operator",
    operatorJoined: "Discutați cu un operator"
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
    maybeLater: "Можливо пізніше",
    operatorLabel: "Оператор",
    operatorJoined: "Ви спілкуєтесь з оператором"
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
    maybeLater: "Может быть позже",
    operatorLabel: "Оператор",
    operatorJoined: "Вы общаетесь с оператором"
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
    maybeLater: "Kanske senare",
    operatorLabel: "Medarbetare",
    operatorJoined: "Du chattar med en medarbetare"
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
    maybeLater: "Måske senere",
    operatorLabel: "Medarbejder",
    operatorJoined: "Du chatter med en medarbejder"
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
    maybeLater: "Kanskje senere",
    operatorLabel: "Medarbeider",
    operatorJoined: "Du chatter med en medarbeider"
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
    maybeLater: "Ehkä myöhemmin",
    operatorLabel: "Asiakaspalvelija",
    operatorJoined: "Keskustelet asiakaspalvelijan kanssa"
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
function R(t, e = "bs") {
  var o, r;
  const i = (e || "bs").toLowerCase().split(/[-_]/)[0], n = dt[i] || dt.bs || dt.en;
  return n && typeof n[t] == "string" ? n[t] : ((o = dt.bs) == null ? void 0 : o[t]) || ((r = dt.en) == null ? void 0 : r[t]) || t;
}
function yn({
  screen: t,
  activeConversation: e,
  config: i,
  language: n = "bs",
  onBack: o,
  onClose: r,
  onNewConversation: p,
  onEndConversation: s,
  onDeleteConversation: f,
  onViewHistory: d,
  onViewTickets: m
}) {
  var X;
  const [v, c] = F(!1), b = ie(null), h = t === "conversation" && e, I = h || t === "history" || t === "tickets", S = i.title || i.name || "Pitaj.io Asistent";
  q(() => {
    var N;
    const l = (B) => {
      var D, E;
      const T = ((E = (D = B.composedPath) == null ? void 0 : D.call(B)) == null ? void 0 : E[0]) || B.target;
      b.current && T && !b.current.contains(T) && c(!1);
    };
    document.addEventListener("mousedown", l);
    const C = (N = b.current) == null ? void 0 : N.getRootNode();
    return C instanceof ShadowRoot && C.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l), C instanceof ShadowRoot && C.removeEventListener("mousedown", l);
    };
  }, []), q(() => {
    c(!1);
  }, [t]);
  const $ = (l) => {
    c(!1), l == null || l();
  };
  return /* @__PURE__ */ a("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ a("div", { className: "pitaj-header-info", children: [
      I && /* @__PURE__ */ a(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": R("back", n),
          title: R("back", n),
          children: /* @__PURE__ */ a(pn, { size: 18 })
        }
      ),
      /* @__PURE__ */ a("div", { className: `pitaj-avatar ${((X = i.content) == null ? void 0 : X.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: i.logo || i.avatar ? /* @__PURE__ */ a("img", { src: i.logo || i.avatar, alt: i.name || "AI" }) : /* @__PURE__ */ a(Et, { size: 18 }) }),
      /* @__PURE__ */ a("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-header-title", children: S }),
        h && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ a("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ a("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ a("div", { className: "pitaj-header-menu", ref: b, children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: () => c((l) => !l),
            className: `pitaj-icon-btn ${v ? "is-active" : ""}`,
            "aria-label": R("menu", n),
            "aria-expanded": v,
            title: R("menu", n),
            children: /* @__PURE__ */ a(dn, { size: 18 })
          }
        ),
        v && /* @__PURE__ */ a("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => $(p),
              children: [
                /* @__PURE__ */ a(un, { size: 15, className: "pitaj-menu-item-icon" }),
                R("newConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !h,
              onClick: () => $(s),
              children: [
                /* @__PURE__ */ a(hn, { size: 15, className: "pitaj-menu-item-icon" }),
                R("endConversation", n)
              ]
            }
          ),
          f && /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !h,
              onClick: () => $(f),
              children: [
                /* @__PURE__ */ a(wn, { size: 15, className: "pitaj-menu-item-icon" }),
                R("deleteConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => $(d),
              children: [
                /* @__PURE__ */ a(fn, { size: 15, className: "pitaj-menu-item-icon" }),
                R("viewHistory", n)
              ]
            }
          ),
          /* @__PURE__ */ a("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => $(m), children: [
            /* @__PURE__ */ a(bn, { size: 15, className: "pitaj-menu-item-icon" }),
            R("viewTickets", n)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": R("close", n),
          title: R("close", n),
          children: /* @__PURE__ */ a(Ue, { size: 18 })
        }
      )
    ] })
  ] });
}
function la(t, e) {
  var n, o;
  if (!Number.isSafeInteger(t == null ? void 0 : t.run_id) || t.run_id < 1 || e !== void 0 && t.run_id !== e || !["waiting_display", "waiting_input", "completed", "failed", "expired", "cancelled"].includes(t.status))
    throw new Error("Neispravan odgovor procedure.");
  if (t.current_step && (!Number.isSafeInteger(t.current_step.widget_id) || t.current_step.widget_id < 1 || !/^[a-zA-Z0-9_-]{1,80}$/.test(t.current_step.node_id) || !["show_widget", "wait_submission"].includes(t.current_step.type) || t.current_step.display_node_id !== null && (typeof t.current_step.display_node_id != "string" || !/^[a-zA-Z0-9_-]{1,80}$/.test(t.current_step.display_node_id)) || t.current_step.form_revision != null && (typeof t.current_step.form_revision != "string" || !/^[a-f0-9]{64}$/.test(t.current_step.form_revision)) || t.current_step.function_revision != null && (typeof t.current_step.function_revision != "string" || !/^[a-f0-9]{64}$/.test(t.current_step.function_revision))))
    throw new Error("Neispravan korak procedure.");
  const i = (n = t.current_step) == null ? void 0 : n.widget;
  if (i != null && (typeof i != "object" || Array.isArray(i) || i.id !== ((o = t.current_step) == null ? void 0 : o.widget_id) || typeof i.name != "string" || typeof i.type != "string" || !i.config || typeof i.config != "object" || Array.isArray(i.config)))
    throw new Error("Neispravna konfiguracija widgeta procedure.");
  return t;
}
async function _n(t, e, i, n) {
  if (!/^[1-9]\d*$/.test(e)) throw new Error("Neispravan identifikator razgovora.");
  const o = (i || window.location.origin).replace(/\/$/, ""), r = await Ve(t, i), p = await fetch(`${o}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/executable-run`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${r}` },
    cache: "no-store",
    signal: n
  });
  p.ok || await Pt(p, "Nije moguće provjeriti proceduru.");
  const s = await p.json();
  return s.run === null ? null : la(s.run);
}
async function Dr(t, e, i, n) {
  if (!Number.isSafeInteger(e) || e < 1) throw new Error("Neispravan identifikator procedure.");
  const o = (i || window.location.origin).replace(/\/$/, ""), r = await Ve(t, i), p = `${o}/api/widget/${encodeURIComponent(t)}/v2/executable-runs/${e}`, s = await fetch(n ? `${p}/display-ack` : p, {
    method: n ? "POST" : "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${r}`, ...n ? { "Content-Type": "application/json" } : {} },
    ...n ? { body: JSON.stringify({ node_id: n }) } : {}
  });
  s.ok || await Pt(s, "Status procedure nije dostupan.");
  const f = await s.json();
  return la(f, e);
}
function Sn({ content: t }) {
  if (!t)
    return /* @__PURE__ */ a("span", {});
  const e = t.split(`
`), i = [];
  let n = !1, o = [];
  for (let r = 0; r < e.length; r++) {
    const p = e[r];
    if (p.startsWith("```")) {
      n ? (i.push(
        /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: o.join(`
`) }) }, `code-${r}`)
      ), o = [], n = !1) : n = !0;
      continue;
    }
    if (n) {
      o.push(p);
      continue;
    }
    if (p.trim().startsWith("- ") || p.trim().startsWith("* ")) {
      const f = p.trim().slice(2);
      i.push(
        /* @__PURE__ */ a("ul", { children: /* @__PURE__ */ a("li", { children: Ot(f) }) }, `ul-${r}`)
      );
      continue;
    }
    const s = p.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      i.push(
        /* @__PURE__ */ a("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ a("li", { children: Ot(s[2]) }) }, `ol-${r}`)
      );
      continue;
    }
    if (!p.trim()) {
      i.push(/* @__PURE__ */ a("div", { style: { height: "6px" } }, `sp-${r}`));
      continue;
    }
    i.push(/* @__PURE__ */ a("p", { children: Ot(p) }, `p-${r}`));
  }
  return n && o.length > 0 && i.push(
    /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ a("div", { className: "pitaj-markdown", children: i });
}
function Ot(t) {
  const e = [];
  let i = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index > i && e.push(...$i(t.slice(i, o.index)));
    const r = o[0];
    if (r.startsWith("`") && r.endsWith("`"))
      e.push(
        /* @__PURE__ */ a("code", { children: r.slice(1, -1) }, `c-${o.index}`)
      );
    else if (r.startsWith("**") && r.endsWith("**"))
      e.push(
        /* @__PURE__ */ a("strong", { children: r.slice(2, -2) }, `b-${o.index}`)
      );
    else if (r.startsWith("*") && r.endsWith("*"))
      e.push(
        /* @__PURE__ */ a("em", { children: r.slice(1, -1) }, `i-${o.index}`)
      );
    else if (r.startsWith("[") && r.includes("](")) {
      const p = r.slice(1, r.indexOf("](")), s = r.slice(r.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ a("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: p }, `a-${o.index}`)
      );
    }
    i = o.index + r.length;
  }
  return i < t.length && e.push(...$i(t.slice(i))), e;
}
const Mn = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Nn = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, zn = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), An = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function $i(t) {
  const e = [];
  let i;
  for (; (i = Mn.exec(t)) !== null; ) {
    const r = i[0].replace(/[.,;:!?]+$/, "");
    r && e.push({
      start: i.index,
      end: i.index + r.length,
      href: r.startsWith("www.") ? `https://${r}` : r,
      external: !0
    });
  }
  for (; (i = Nn.exec(t)) !== null; )
    e.push({
      start: i.index,
      end: i.index + i[0].length,
      href: `mailto:${i[0]}`,
      external: !1
    });
  for (; (i = zn.exec(t)) !== null; ) {
    const r = i[0];
    An.test(r) || e.push({
      start: i.index,
      end: i.index + r.length,
      href: `tel:${r.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((r, p) => r.start - p.start);
  const n = [];
  let o = 0;
  for (const r of e)
    r.start < o || (r.start > o && n.push(t.slice(o, r.start)), n.push(
      /* @__PURE__ */ a(
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
function da({
  rows: t,
  fallbackQuestions: e,
  onSelect: i,
  buttonClassName: n,
  containerClassName: o,
  revealDelayMs: r = 0,
  staggerMs: p = 140
}) {
  const s = Ge(() => Array.isArray(t) && t.length > 0 ? t.map((b) => ({
    text: b.text.trim(),
    children: (b.children ?? []).map((h) => h.trim()).filter(Boolean)
  })).filter((b) => b.text !== "") : (e ?? []).map((b) => b.trim()).filter(Boolean).map((b) => ({ text: b, children: [] })), [e, t]), [f, d] = F(null), [m, v] = F(s.length);
  if (q(() => {
    d(null);
  }, [s]), q(() => {
    if (f) {
      v(s.length);
      return;
    }
    if (r <= 0) {
      v(s.length);
      return;
    }
    v(0);
    const b = window.setTimeout(() => {
      v(1);
      const h = window.setInterval(() => {
        v((y) => y >= s.length ? (window.clearInterval(h), y) : y + 1);
      }, Math.max(60, p));
    }, r);
    return () => {
      window.clearTimeout(b);
    };
  }, [f, s.length, r, p]), s.length === 0)
    return null;
  const c = s.find((b) => b.text === f && b.children.length > 0) ?? null;
  return c ? /* @__PURE__ */ a("div", { className: o, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => d(null),
        className: n,
        children: "Nazad"
      }
    ),
    c.children.map((b, h) => /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => i(b),
        className: n,
        children: b
      },
      `${c.text}-${h}`
    ))
  ] }) : /* @__PURE__ */ a("div", { className: o, children: s.slice(0, m).map((b, h) => /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: () => b.children.length > 0 ? d(b.text) : i(b.text),
      className: `${n} pitaj-suggestion-enter`,
      children: b.text
    },
    `${b.text}-${h}`
  )) });
}
const Cn = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), In = [".txt", ".md", ".csv", ".json", ".xml"];
function Ln(t) {
  if (Cn.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return In.some((i) => e.endsWith(i));
}
async function ua(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (i) => {
      const n = i.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(i.name);
      let o = null;
      if (n && typeof URL < "u")
        try {
          o = URL.createObjectURL(i);
        } catch {
          o = null;
        }
      const r = Ln(i) ? (await i.text()).slice(0, 4e3) : null;
      return {
        id: `${i.name}-${i.lastModified}-${i.size}`,
        name: i.name,
        textContent: r,
        previewUrl: o,
        isImage: n
      };
    })
  );
}
function ma(t) {
  return t.length === 0 ? "" : `

${t.map((i) => i.textContent && i.textContent.trim() !== "" ? `[Prilog: ${i.name}]
${i.textContent.trim()}` : `[Prilog: ${i.name}]`).join(`

`)}`;
}
async function Tn(t) {
  const { widgetId: e, audio: i, apiUrl: n } = t, o = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), r = new FormData();
  r.append("audio", i, "dictation.webm");
  const p = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: r,
    headers: {
      Accept: "application/json"
    }
  });
  if (!p.ok) {
    const d = await p.json().catch(() => null), v = (() => {
      if (p.status !== 422 || !(d != null && d.errors) || typeof d.errors != "object")
        return null;
      for (const c of Object.values(d.errors))
        if (Array.isArray(c)) {
          for (const b of c)
            if (typeof b == "string" && b.trim() !== "")
              return b;
        }
      return null;
    })();
    ia(
      p.status,
      d,
      typeof v == "string" && v || `Transkripcija nije uspjela (${p.status})`,
      p.headers.get("Retry-After")
    );
  }
  const s = await p.json(), f = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!f)
    throw new Error("Transkripcija nije vratila tekst.");
  return f;
}
function ha({ widgetId: t, apiUrl: e, onTranscript: i, onError: n }) {
  const r = ie(null), p = ie(null), s = ie([]), f = ie(!0), d = ie(null), m = ie(null), v = ie(null), c = ie(null), b = ie(Array.from({ length: 42 }, () => 0.06)), [h, y] = F(!1), [A, I] = F(!1), [S, $] = F(
    () => Array.from({ length: 42 }, () => 0.06)
  ), X = Ge(() => {
    var P;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((P = navigator.mediaDevices) != null && P.getUserMedia);
  }, [t]), l = ce(() => {
    p.current && (p.current.getTracks().forEach((P) => P.stop()), p.current = null);
  }, []), C = ce(() => {
    var P;
    d.current !== null && (window.cancelAnimationFrame(d.current), d.current = null), (P = c.current) == null || P.disconnect(), c.current = null, v.current = null, m.current && (m.current.close(), m.current = null);
  }, []), N = ce(() => {
    const P = Array.from({ length: 42 }, () => 0.06);
    b.current = P, $(P);
  }, []), B = ce((P) => {
    const Q = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!Q)
      return;
    const ee = new Q(), V = ee.createAnalyser();
    V.fftSize = 2048, V.smoothingTimeConstant = 0.78;
    const le = ee.createMediaStreamSource(P);
    le.connect(V), m.current = ee, v.current = V, c.current = le;
    const L = new Uint8Array(V.fftSize), ae = () => {
      const j = v.current;
      if (!j) return;
      j.getByteTimeDomainData(L);
      let Z = 0;
      for (let de = 0; de < L.length; de += 1) {
        const Te = (L[de] - 128) / 128;
        Z += Te * Te;
      }
      const se = Math.sqrt(Z / L.length), re = Math.max(0.04, Math.min(1, se * 5.2)), Ae = b.current.slice(1);
      Ae.push(re), b.current = Ae, $(Ae), d.current = window.requestAnimationFrame(ae);
    };
    d.current = window.requestAnimationFrame(ae);
  }, []), T = ce(async () => {
    if (!(!X || A || r.current || h))
      try {
        const Q = await navigator.mediaDevices.getUserMedia({ audio: !0 }), ee = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], le = typeof MediaRecorder.isTypeSupported == "function" ? ee.find((ae) => MediaRecorder.isTypeSupported(ae)) : void 0, L = le ? new MediaRecorder(Q, { mimeType: le }) : new MediaRecorder(Q);
        s.current = [], f.current = !0, p.current = Q, r.current = L, N(), B(Q), L.ondataavailable = (ae) => {
          ae.data.size > 0 && s.current.push(ae.data);
        }, L.onstop = async () => {
          y(!1);
          const ae = new Blob(s.current, { type: L.mimeType || "audio/webm" });
          if (s.current = [], r.current = null, l(), C(), ae.size === 0) {
            N();
            return;
          }
          if (!f.current) {
            N();
            return;
          }
          I(!0);
          try {
            const j = await Tn({
              widgetId: t,
              apiUrl: e,
              audio: ae
            });
            i(j);
          } catch (j) {
            console.error("[Pitaj.io] Dictation transcription failed", j), n == null || n(j);
          } finally {
            I(!1), N();
          }
        }, L.onerror = () => {
          y(!1), r.current = null, l(), C(), N();
        }, L.start(), y(!0);
      } catch (Q) {
        y(!1), l(), C(), N(), console.error("[Pitaj.io] Dictation microphone access failed", Q);
      }
  }, [e, h, A, X, n, i, N, B, l, C, t]), D = ce(() => {
    const P = r.current;
    !P || !h || A || (f.current = !0, P.stop(), y(!1));
  }, [h, A]), E = ce(() => {
    const P = r.current;
    !P || !h || (f.current = !1, P.stop(), y(!1));
  }, [h]);
  return q(() => () => {
    const P = r.current;
    P && P.state !== "inactive" && P.stop(), l(), C();
  }, [l, C]), {
    isSupported: X,
    isListening: h,
    isProcessing: A,
    waveformLevels: S,
    start: T,
    stopAndTranscribe: D,
    cancel: E
  };
}
const Pn = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Di() {
  const [t, e] = F(0);
  return q(() => {
    const i = setTimeout(() => e(1), 1600), n = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(i), clearTimeout(n);
    };
  }, []), /* @__PURE__ */ a("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ a(kn, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ a("span", { className: "pitaj-thinking-text", children: Pn[t] }, t)
  ] });
}
const En = ai(
  () => import("./InlineWidgetRenderer-aLaeu1_G.js"),
  (t) => t.InlineWidgetRenderer
);
function $n(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Dn(t) {
  const e = t.split(`
`).map((r) => r.trim()).filter((r) => r.length > 0);
  if (e.length < 2) return null;
  let i = "Forma";
  const n = e[0];
  if (/^forma:\s*/i.test(n))
    i = n.replace(/^forma:\s*/i, "").trim() || "Forma";
  else if (/^form:\s*/i.test(n))
    i = n.replace(/^form:\s*/i, "").trim() || "Form";
  else if (/^kontakt\s+upit:\s*/i.test(n))
    i = "Kontakt upit";
  else if (/^rezervacija/i.test(n))
    i = n.replace(/:\s*$/, "").trim();
  else if (/^prijava\s+za\s+demo/i.test(n))
    i = "Prijava za demo";
  else
    return null;
  const o = e.slice(1).map((r) => {
    if (!r.startsWith("- ") && !r.startsWith("* ")) return null;
    const p = r.slice(2), s = p.indexOf(":");
    if (s < 1) return null;
    const f = p.slice(0, s).trim(), d = p.slice(s + 1).trim();
    return !f || !d ? null : { label: f, value: d };
  }).filter((r) => !!r);
  return o.length < 1 ? null : { title: i, entries: o };
}
function Bn({
  conversation: t,
  config: e,
  language: i = "bs",
  humanActive: n = !1,
  isStreaming: o,
  rateLimitCountdown: r,
  errorBanner: p,
  sessionInvalid: s,
  onResetSession: f,
  onSendMessage: d,
  onApiError: m,
  onWorkflowWidget: v,
  onSubmitSatisfaction: c
}) {
  var $e, ke, He;
  const b = (x) => {
    if (!x.current_step || !["waiting_display", "waiting_input"].includes(x.status)) return;
    const te = Ci(x, e.widgets || []);
    if (!te) {
      m == null || m(new Error("Sljedeći widget procedure nije dostupan."));
      return;
    }
    v == null || v(te);
  }, [h, y] = F(""), [A, I] = F(!1), [S, $] = F(0), X = ie(v);
  X.current = v;
  const l = ie(m);
  l.current = m, q(() => {
    if (o || e.isPreview || e.previewDraft || e.mockMode || t.status === "ended" || !/^[1-9]\d*$/.test(t.id)) return;
    const x = new AbortController();
    return I(!1), _n(e.companyId, t.id, e.apiUrl, x.signal).then((G) => {
      var ve;
      if (x.signal.aborted || !G) return;
      const te = Ci(G, e.widgets || []);
      if (!te) {
        I(!0);
        return;
      }
      (ve = X.current) == null || ve.call(X, te);
    }).catch((G) => {
      var te;
      x.signal.aborted || (G instanceof ei && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED"].includes(G.code || "") && ((te = l.current) == null || te.call(l, G)), I(!0));
    }), () => x.abort();
  }, [e.companyId, e.apiUrl, e.isPreview, e.previewDraft, e.mockMode, e.widgets, t.id, t.status, S, o]);
  const [C, N] = F(!1), [B, T] = F(null), [D, E] = F([]), P = ie(null), Q = ie(null), ee = ie(null), V = e.content || {}, le = e.chatAvailable === !1, L = e.transcribeAvailable === !1, ae = o || r !== null || le, j = ha({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: ce((x) => {
      y((G) => G ? `${G} ${x}` : x);
    }, []),
    onError: ce((x) => {
      m == null || m(x, "Greška pri transkripciji.");
    }, [m])
  });
  q(() => {
    const x = P.current;
    x && (x.scrollTop = x.scrollHeight);
  }, [t.messages, o]), q(() => {
    const x = Q.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, 96)}px`);
  }, [h]), q(() => {
    N(!1);
  }, [V.dismissibleNotice]);
  const Z = (x) => {
    E((G) => {
      const te = G.find((ve) => ve.id === x);
      if (te != null && te.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(te.previewUrl);
        } catch {
        }
      return G.filter((ve) => ve.id !== x);
    });
  }, se = (x) => {
    const G = (x ?? h).trim();
    if (!G && D.length === 0 || ae) return;
    const te = `${G}${ma(D)}`.trim();
    d(te), D.forEach((ve) => {
      if (ve.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ve.previewUrl);
        } catch {
        }
    }), E([]), x || (y(""), Q.current && (Q.current.style.height = "auto"));
  }, re = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), se());
  }, Ae = V.messagePlaceholder || e.placeholder || R("placeholder", i), de = (($e = V.dismissibleNotice) == null ? void 0 : $e.trim()) || "", Te = ((ke = V.footerText) == null ? void 0 : ke.trim()) || "", Ce = V.showSuggestedMessages === !1 || V.keepShowingSuggestedMessages !== !0 ? [] : V.suggestedMessageRows || [], be = ((He = [...t.messages].reverse().find((x) => x.sender === "ai")) == null ? void 0 : He.id) ?? null, ge = j.isListening, xe = async (x, G) => {
    navigator.clipboard && (await navigator.clipboard.writeText(G), T(x), window.setTimeout(() => {
      T((te) => te === x ? null : te);
    }, 1600));
  };
  return /* @__PURE__ */ a("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ a("div", { ref: P, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ a("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-conversation-ticket-label", children: R("ticketNumber", i) }),
        /* @__PURE__ */ a("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ a("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ a("span", { className: "pitaj-date-label", children: R("today", i) }),
        /* @__PURE__ */ a("div", { className: "pitaj-date-line" })
      ] }),
      n && /* @__PURE__ */ a("div", { className: "pitaj-human-chip", role: "status", children: R("operatorJoined", i) }),
      t.messages.map((x) => {
        const G = x.sender === "user", te = G ? Dn(x.content) : null, ve = !G && x.isStreaming && !x.content && !x.widget;
        return /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-msg-row ${G ? "user" : "ai"}${x.widget ? " has-widget" : ""}${ve ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: [
              G ? /* @__PURE__ */ a("div", { className: `pitaj-msg-bubble ${te ? "is-form-submission" : ""}`, children: te ? /* @__PURE__ */ a("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ a("div", { className: "pitaj-form-submission-title", children: te.title.toLowerCase().startsWith("forma") ? te.title : `Forma: ${te.title}` }),
                /* @__PURE__ */ a("dl", { className: "pitaj-form-submission-grid", children: te.entries.map((je) => /* @__PURE__ */ a("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ a("dt", { children: je.label }),
                  /* @__PURE__ */ a("dd", { children: je.value })
                ] }, `${x.id}-${je.label}`)) })
              ] }) : x.content }) : /* @__PURE__ */ a(Le, { children: [
                x.isHuman && /* @__PURE__ */ a("div", { className: "pitaj-operator-label", children: [
                  R("operatorLabel", i),
                  x.authorName ? ` · ${x.authorName}` : ""
                ] }),
                x.content ? /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ a(Sn, { content: x.content }),
                  x.isStreaming && /* @__PURE__ */ a("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                x.widget && /* @__PURE__ */ a("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ a(En, { widget: x.widget, onAction: (je) => se(je), companyId: e.companyId, apiUrl: e.apiUrl, preview: e.isPreview || e.mockMode, conversationId: t.id, onApiError: m, onWorkflowState: b }) }),
                x.isStreaming && !x.content && !x.widget && /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Di, {}) })
              ] }),
              !G && x.sources && x.sources.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ a("span", { className: "pitaj-sources-title", children: R("sources", i) }),
                /* @__PURE__ */ a("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: x.sources.map((je) => /* @__PURE__ */ a(
                  "a",
                  {
                    href: je.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ a("span", { children: je.title }),
                      /* @__PURE__ */ a(gn, { size: 10 })
                    ]
                  },
                  je.id
                )) })
              ] }),
              !G && V.showFollowupSuggestions !== !1 && x.suggestedQuestions && x.suggestedQuestions.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-followups", children: x.suggestedQuestions.map((je, Ke) => /* @__PURE__ */ a(
                "button",
                {
                  onClick: () => se(je),
                  disabled: ae,
                  className: "pitaj-followup-chip",
                  children: je
                },
                `sug-f-${Ke}`
              )) }),
              (!x.isStreaming || !!x.content || !!x.widget) && /* @__PURE__ */ a("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ a("span", { children: $n(x.timestamp) }),
                !G && /* @__PURE__ */ a("div", { className: "pitaj-msg-actions", children: [
                  x.id === be && !o && !x.isHuman && /* @__PURE__ */ a(Le, { children: V.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ a(Le, { children: [
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => c == null ? void 0 : c("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": R("helpful", i),
                        title: R("helpful", i),
                        children: /* @__PURE__ */ a(jn, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => c == null ? void 0 : c("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": R("notHelpful", i),
                        title: R("notHelpful", i),
                        children: /* @__PURE__ */ a(xn, { size: 14 })
                      }
                    )
                  ] }) }),
                  x.id === be && !o && V.copyMessageEnabled !== !1 && !!x.content && /* @__PURE__ */ a(
                    "button",
                    {
                      type: "button",
                      onClick: () => void xe(x.id, x.content),
                      className: `pitaj-msg-action-btn ${B === x.id ? "is-active" : ""}`,
                      "aria-label": B === x.id ? R("copied", i) : R("copyAnswer", i),
                      title: B === x.id ? R("copied", i) : R("copyAnswer", i),
                      children: B === x.id ? /* @__PURE__ */ a(Nt, { size: 14 }) : /* @__PURE__ */ a(vn, { size: 14 })
                    }
                  )
                ] }),
                G && /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ a(
                  Nt,
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
      o && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Di, {}) }) }) })
    ] }),
    A && /* @__PURE__ */ a("div", { role: "alert", children: [
      "Nije moguće učitati aktivni korak procedure. ",
      /* @__PURE__ */ a("button", { type: "button", onClick: () => $((x) => x + 1), children: "Pokušaj ponovo" })
    ] }),
    (p || r) && /* @__PURE__ */ a("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ a("div", { className: "pitaj-alert-banner", children: [
      /* @__PURE__ */ a("span", { children: r ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${r}s.` : p }),
      s && /* @__PURE__ */ a("button", { type: "button", onClick: f, children: "Pokreni novu sesiju" })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        da,
        {
          rows: Ce,
          fallbackQuestions: V.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: se,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      D.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: D.map((x) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: x.previewUrl ? /* @__PURE__ */ a("img", { src: x.previewUrl, alt: x.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(ca, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: x.name, children: x.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => Z(x.id),
            "aria-label": `Ukloni ${x.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Ue, { size: 10 })
          }
        )
      ] }, x.id)) }),
      de && !C && /* @__PURE__ */ a("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-dismissible-notice-text", children: de }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => N(!0),
            "aria-label": R("close", i),
            children: /* @__PURE__ */ a(Ue, { size: 12 })
          }
        )
      ] }),
      j.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: R("transcribing", i) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${ge ? "is-recording" : ""}`, children: [
        V.attachmentsEnabled && /* @__PURE__ */ a(Le, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: ee,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (x) => {
                const G = x.currentTarget.files;
                if (x.currentTarget.value = "", !G || G.length === 0) return;
                const te = await ua(G);
                E((ve) => [...ve, ...te].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-composer-btn pitaj-attach-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var x;
                return (x = ee.current) == null ? void 0 : x.click();
              },
              children: /* @__PURE__ */ a(pa, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: Q,
            value: h,
            onInput: (x) => y(x.target.value),
            onKeyDown: re,
            placeholder: Ae,
            rows: 1,
            disabled: ae,
            className: "pitaj-textarea",
            style: ge ? { display: "none" } : void 0
          }
        ),
        ge ? /* @__PURE__ */ a("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": R("cancel", i),
              title: R("cancel", i),
              onClick: () => j.cancel(),
              children: /* @__PURE__ */ a(Ue, { size: 14 })
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ a("div", { className: "pitaj-wave", children: j.waveformLevels.map((x, G) => /* @__PURE__ */ a(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + x * 15))}px` }
            },
            `dict-wave-conv-${G}`
          )) }) }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": R("sendAudio", i),
              title: R("sendAudio", i),
              onClick: () => j.stopAndTranscribe(),
              disabled: ae || j.isProcessing,
              children: /* @__PURE__ */ a(Nt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(Le, { children: [
          V.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${j.isProcessing ? "is-active" : ""}`,
              "aria-label": R("dictation", i),
              title: j.isProcessing ? R("transcribing", i) : j.isSupported ? R("dictation", i) : "Diktiranje nije podržano",
              onClick: () => j.start(),
              disabled: ae || L || !j.isSupported || j.isProcessing,
              children: /* @__PURE__ */ a(sa, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => se(),
              disabled: ae || !h.trim() && D.length === 0,
              className: "pitaj-send-btn",
              "aria-label": R("sendMessage", i),
              children: /* @__PURE__ */ a(ra, { size: 16 })
            }
          )
        ] })
      ] }),
      Te && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: Te }),
      e.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(Et, { size: 13, className: "pitaj-powered-icon" }),
        e.poweredByText || R("poweredBy", i),
        " ",
        /* @__PURE__ */ a(
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
function Hn({
  config: t,
  language: e = "bs",
  openedByUser: i = !1,
  onStart: n,
  onApiError: o
}) {
  var L, ae;
  const [r, p] = F(""), [s, f] = F(!1), [d, m] = F(!1), [v, c] = F([]), b = ie(null), h = ie(null), y = t.content || {}, A = t.chatAvailable === !1, I = t.transcribeAvailable === !1, S = ha({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: ce((j) => {
      p((Z) => Z ? `${Z} ${j}` : j);
    }, []),
    onError: ce((j) => {
      o == null || o(j, "Greška pri transkripciji.");
    }, [o])
  });
  q(() => {
    var j;
    i && ((j = b.current) == null || j.focus({ preventScroll: !0 }));
  }, [i]), q(() => {
    if (typeof window > "u") return;
    const j = window.matchMedia("(max-width: 768px)"), Z = () => f(j.matches);
    return Z(), j.addEventListener("change", Z), () => j.removeEventListener("change", Z);
  }, []), q(() => {
    m(!1);
  }, [y.dismissibleNotice]);
  const X = (s && y.useDifferentMessageMobile && y.mobileWelcomeMessage ? y.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((j) => j.trim()).filter((j) => j.length > 0), l = y.autoShowInitialMessages !== !1 && !i, C = !s || y.showAutoPopupMobile !== !1, N = s && y.useDifferentDurationMobile && typeof y.mobileAutoShowDurationSeconds == "number" ? y.mobileAutoShowDurationSeconds : y.autoShowDurationSeconds ?? 0, B = l && C ? Math.max(0, N) * 1e3 : 0, T = (j) => {
    c((Z) => {
      const se = Z.find((re) => re.id === j);
      if (se != null && se.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(se.previewUrl);
        } catch {
        }
      return Z.filter((re) => re.id !== j);
    });
  }, D = (j) => {
    const Z = (j ?? r).trim();
    if (!Z && v.length === 0 || A) return;
    const se = `${Z}${ma(v)}`.trim();
    n(se), v.forEach((re) => {
      if (re.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(re.previewUrl);
        } catch {
        }
    }), p(""), c([]);
  }, E = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), D());
  }, P = y.showSuggestedMessages === !1 ? [] : y.suggestedMessageRows || [], Q = y.messagePlaceholder || t.placeholder || R("inputPlaceholder", e), ee = ((L = y.dismissibleNotice) == null ? void 0 : L.trim()) || "", V = ((ae = y.footerText) == null ? void 0 : ae.trim()) || "", le = S.isListening;
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ a("div", { className: "pitaj-new-screen", children: (X.length > 0 ? X : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((j, Z) => /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: j }) }) }, `welcome-${Z}`)) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        da,
        {
          rows: P,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: D,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: B,
          staggerMs: 150
        }
      ),
      v.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: v.map((j) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: j.previewUrl ? /* @__PURE__ */ a("img", { src: j.previewUrl, alt: j.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(ca, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: j.name, children: j.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => T(j.id),
            "aria-label": `Ukloni ${j.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Ue, { size: 10 })
          }
        )
      ] }, j.id)) }),
      ee && !d && /* @__PURE__ */ a("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-dismissible-notice-text", children: ee }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => m(!0),
            "aria-label": R("close", e),
            children: /* @__PURE__ */ a(Ue, { size: 12 })
          }
        )
      ] }),
      S.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: R("transcribing", e) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${le ? "is-recording" : ""}`, children: [
        y.attachmentsEnabled && /* @__PURE__ */ a(Le, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: h,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (j) => {
                const Z = j.currentTarget.files;
                if (j.currentTarget.value = "", !Z || Z.length === 0) return;
                const se = await ua(Z);
                c((re) => [...re, ...se].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-composer-btn pitaj-attach-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var j;
                return (j = h.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ a(pa, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: b,
            value: r,
            onInput: (j) => p(j.target.value),
            onKeyDown: E,
            placeholder: Q,
            rows: 1,
            disabled: A,
            className: "pitaj-textarea",
            style: le ? { display: "none" } : void 0
          }
        ),
        le ? /* @__PURE__ */ a("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": R("cancel", e),
              title: R("cancel", e),
              onClick: () => S.cancel(),
              children: /* @__PURE__ */ a(Ue, { size: 14 })
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ a("div", { className: "pitaj-wave", children: S.waveformLevels.map((j, Z) => /* @__PURE__ */ a(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + j * 15))}px` }
            },
            `dict-wave-${Z}`
          )) }) }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": R("sendAudio", e),
              title: R("sendAudio", e),
              onClick: () => S.stopAndTranscribe(),
              disabled: A || S.isProcessing,
              children: /* @__PURE__ */ a(Nt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(Le, { children: [
          y.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${S.isProcessing ? "is-active" : ""}`,
              "aria-label": R("dictation", e),
              title: S.isProcessing ? R("transcribing", e) : S.isSupported ? R("dictation", e) : "Diktiranje nije podržano",
              onClick: () => S.start(),
              disabled: A || I || !S.isSupported || S.isProcessing,
              children: /* @__PURE__ */ a(sa, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => D(),
              disabled: A || !r.trim() && v.length === 0,
              className: "pitaj-send-btn",
              "aria-label": R("sendMessage", e),
              children: /* @__PURE__ */ a(ra, { size: 16 })
            }
          )
        ] })
      ] }),
      V && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: V }),
      t.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(Et, { size: 13, className: "pitaj-powered-icon" }),
        t.poweredByText || R("poweredBy", e),
        " ",
        /* @__PURE__ */ a(
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
function Rn({
  isOpen: t,
  onClick: e,
  unreadCount: i = 0,
  config: n
}) {
  var m, v, c, b, h, y;
  const o = ((m = n.content) == null ? void 0 : m.launcherIconStyle) || "message-circle", r = typeof ((v = n.content) == null ? void 0 : v.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", p = ((c = n.content) == null ? void 0 : c.launcherShowText) === !0, s = ((b = n.content) == null ? void 0 : b.launcherTextSide) === "left" ? "left" : "right", f = p ? ((y = (h = n.content) == null ? void 0 : h.launcherText) == null ? void 0 : y.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${p ? "has-label" : ""} ${p && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && r !== "" ? /* @__PURE__ */ a("img", { src: r, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ a(o === "sparkles" ? cn : o === "message-square" ? oa : o === "contact" ? mn : ln, { size: 24 }) }),
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ a(Ue, { size: 22 }) })
        ] }),
        f && !t && /* @__PURE__ */ a("span", { className: "pitaj-launcher-label", children: f }),
        i > 0 && !t && /* @__PURE__ */ a("span", { className: "pitaj-unread-badge", children: i > 9 ? "9+" : i })
      ]
    }
  );
}
const Un = "pitaj_io_popup_dismissed:";
function Fn(t) {
  try {
    return sessionStorage.getItem(t) === "1";
  } catch {
    return !1;
  }
}
function Bi(t) {
  try {
    sessionStorage.setItem(t, "1");
  } catch {
  }
}
function On({ isOpen: t, onOpen: e, config: i }) {
  var B, T, D, E;
  const [n, o] = F(!1), r = !!i.previewDraft, p = `${Un}${i.companyId ?? ""}`, [s, f] = F(() => !r && Fn(p)), [d, m] = F(!1), [v, c] = F(t), b = ie(null);
  q(() => {
    t && (c(!0), m(!1), r || Bi(p));
  }, [t]), q(() => {
    const P = () => {
      var ee;
      if (typeof window > "u") return;
      let Q = window.innerWidth <= 640;
      if (!Q && b.current) {
        const V = (ee = b.current.closest(".pitaj-root")) == null ? void 0 : ee.parentElement;
        V && V.clientWidth > 0 && V.clientWidth <= 640 && (Q = !0);
      }
      o(Q);
    };
    return P(), window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
  }, []);
  const h = i.content || {}, y = h.autoShowInitialMessages !== !1, A = h.showAutoPopupMobile !== !1, I = !n || A, S = n && h.useDifferentDurationMobile && typeof h.mobileAutoShowDurationSeconds == "number" ? h.mobileAutoShowDurationSeconds : h.autoShowDurationSeconds ?? 0;
  if (q(() => {
    if (!y || !I || s || t || v) {
      m(!1);
      return;
    }
    const P = Math.max(0, S) * 1e3, Q = setTimeout(() => {
      m(!0);
    }, P);
    return () => clearTimeout(Q);
  }, [y, I, s, t, v, S]), !d || t)
    return null;
  let $ = "";
  n && h.useDifferentMessageMobile && ((B = h.mobileWelcomeMessage) != null && B.trim()) ? $ = h.mobileWelcomeMessage.trim() : (T = h.popupMessageText) != null && T.trim() ? $ = h.popupMessageText.trim() : (D = i.welcomeMessage) != null && D.trim() ? $ = i.welcomeMessage.trim() : (E = i.welcomeHeadline) != null && E.trim() ? $ = i.welcomeHeadline.trim() : $ = "Zdravo! Kako vam mogu pomoći danas?";
  const X = (P) => {
    P.stopPropagation(), P.preventDefault(), f(!0), m(!1), r || Bi(p);
  }, l = () => {
    e();
  }, C = i.title || i.name || "Pitaj.io Asistent", N = i.logo || i.avatar;
  return /* @__PURE__ */ a(
    "div",
    {
      ref: b,
      className: "pitaj-launcher-popup",
      onClick: l,
      role: "button",
      tabIndex: 0,
      "aria-label": `${C}: ${$}`,
      onKeyDown: (P) => {
        (P.key === "Enter" || P.key === " ") && (P.preventDefault(), l());
      },
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-popup-avatar", children: N ? /* @__PURE__ */ a("img", { src: N, alt: "" }) : /* @__PURE__ */ a(Et, { size: 14 }) }),
            /* @__PURE__ */ a("span", { className: "pitaj-popup-title", children: C })
          ] }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: X,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ a(Ue, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "pitaj-popup-body", children: $ }),
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function Vn(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(n / (1e3 * 60)), r = Math.floor(n / (1e3 * 60 * 60)), p = Math.floor(n / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : r < 24 ? `prije ${r}h` : p < 7 ? `prije ${p}d` : e.toLocaleDateString();
}
function Kn({ config: t, visitorId: e, onSelectTicket: i }) {
  const [n, o] = F([]), [r, p] = F("open"), [s, f] = F(1), [d, m] = F(!0), [v, c] = F(!0), [b, h] = F(!1), [y, A] = F(null), I = ie(null), S = ie(null), $ = ie(!1);
  q(() => {
    let C = !0;
    return c(!0), o([]), f(1), m(!0), A(null), $.current = !1, Wt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: 1,
      perPage: 15
    }).then((N) => {
      C && (o(N.tickets), m(N.hasMore), f(1));
    }).catch((N) => {
      C && A(N instanceof Error ? N.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      C && c(!1);
    }), () => {
      C = !1;
    };
  }, [t.apiUrl, t.companyId, e, r]);
  const X = ce(() => {
    if (v || $.current || !d) return;
    $.current = !0, h(!0);
    const C = s + 1;
    Wt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: C,
      perPage: 15
    }).then((N) => {
      o((B) => {
        const T = new Set(B.map((E) => E.id)), D = N.tickets.filter((E) => !T.has(E.id));
        return [...B, ...D];
      }), m(N.hasMore), f(C);
    }).catch((N) => {
      console.error("[Pitaj.io] Error loading more tickets:", N);
    }).finally(() => {
      h(!1), $.current = !1;
    });
  }, [t.apiUrl, t.companyId, d, v, s, r, e]);
  return q(() => {
    const C = S.current, N = I.current;
    if (!C || !N || !d || v || b) return;
    const B = new IntersectionObserver(
      (T) => {
        var D;
        (D = T[0]) != null && D.isIntersecting && X();
      },
      { root: N, rootMargin: "120px" }
    );
    return B.observe(C), () => B.disconnect();
  }, [d, v, b, X]), /* @__PURE__ */ a(
    "div",
    {
      ref: I,
      className: "pitaj-tickets-screen",
      onScroll: (C) => {
        const N = C.currentTarget;
        !N || !d || v || $.current || N.scrollHeight - N.scrollTop - N.clientHeight < 120 && X();
      },
      tabIndex: 0,
      role: "region",
      "aria-label": "Lista tiketa",
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
          /* @__PURE__ */ a(
            "button",
            {
              className: r === "open" ? "is-active" : "",
              onClick: () => p("open"),
              role: "tab",
              "aria-selected": r === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              className: r === "closed" ? "is-active" : "",
              onClick: () => p("closed"),
              role: "tab",
              "aria-selected": r === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        v ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ a("span", { children: "Učitavanje tiketa…" })
        ] }) : y ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ a("span", { children: y }) }) : n.length === 0 ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a(oa, { size: 30 }),
          /* @__PURE__ */ a("strong", { children: r === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ a("span", { children: r === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ a("div", { className: "pitaj-ticket-list", children: [
          n.map((C) => {
            const N = C.messages || [], B = N.length > 0 ? N[N.length - 1] : null, T = N.length, D = T === 1 ? "1 poruka" : T >= 2 && T <= 4 ? `${T} poruke` : `${T} poruka`;
            return /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => i == null ? void 0 : i(C),
                "aria-label": `Otvori tiket ${C.ticketNumber || C.id}`,
                children: /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ a("strong", { className: "pitaj-ticket-number", children: C.ticketNumber || `Tiket #${C.id}` }),
                    /* @__PURE__ */ a("span", { className: `pitaj-ticket-status-badge ${C.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ a("span", { className: "pitaj-ticket-status-dot" }),
                      C.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  B && /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-preview", children: B.content }),
                  /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-time", children: Vn(C.updatedAt) }),
                    T > 0 && /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-count", children: D })
                  ] })
                ] })
              },
              C.id
            );
          }),
          b && /* @__PURE__ */ a("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ a("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ a("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ a("div", { ref: S, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const Yn = ai(() => import("./HistoryScreen-BL0mpP3I.js"), (t) => t.HistoryScreen), Wn = ai(() => import("./FormActionsScreen-y53IU-wf.js"), (t) => t.FormActionsScreen);
function vt(t) {
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
  const i = e.match(/^rgba?\(\s*([0-9.]+)\s*[, ]\s*([0-9.]+)\s*[, ]\s*([0-9.]+)/);
  if (i)
    return {
      r: Math.round(Number(i[1])),
      g: Math.round(Number(i[2])),
      b: Math.round(Number(i[3]))
    };
  const n = e.match(/^hsla?\(\s*([0-9.]+)(?:deg)?\s*[, ]\s*([0-9.]+)%\s*[, ]\s*([0-9.]+)%/);
  if (n) {
    const o = Number(n[1]) % 360, r = Number(n[2]) / 100, p = Number(n[3]) / 100, s = (1 - Math.abs(2 * p - 1)) * r, f = s * (1 - Math.abs(o / 60 % 2 - 1)), d = p - s / 2;
    let m = 0, v = 0, c = 0;
    return 0 <= o && o < 60 ? (m = s, v = f, c = 0) : 60 <= o && o < 120 ? (m = f, v = s, c = 0) : 120 <= o && o < 180 ? (m = 0, v = s, c = f) : 180 <= o && o < 240 ? (m = 0, v = f, c = s) : 240 <= o && o < 300 ? (m = f, v = 0, c = s) : 300 <= o && o < 360 && (m = s, v = 0, c = f), {
      r: Math.round((m + d) * 255),
      g: Math.round((v + d) * 255),
      b: Math.round((c + d) * 255)
    };
  }
  return null;
}
function Gn(t) {
  return vt(t);
}
function xt(t, e) {
  const i = vt(t);
  return i ? `rgba(${i.r}, ${i.g}, ${i.b}, ${e})` : null;
}
function Zn(t, e, i) {
  const n = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(i)}`;
}
function ht(t) {
  const e = vt(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Jn(t, e) {
  const i = vt(t);
  if (i)
    return (0.2126 * i.r + 0.7152 * i.g + 0.0722 * i.b) / 255 <= 0.55;
  if (e) {
    const n = vt(e);
    if (n)
      return (0.2126 * n.r + 0.7152 * n.g + 0.0722 * n.b) / 255 > 0.55;
  }
  return !1;
}
function qn(t) {
  const e = Gn(t);
  if (!e) return t;
  const i = ht(t) === "#111827", n = i ? 0.2 : 0.16, o = i ? 0 : 255;
  return Zn(
    e.r + (o - e.r) * n,
    e.g + (o - e.g) * n,
    e.b + (o - e.b) * n
  );
}
function Qn({
  config: t,
  startOpen: e = !1,
  initialScreen: i = "new-conversation",
  onEvent: n,
  isInline: o = !1,
  isMobile: r,
  isCanvasPreview: p = !1
}) {
  var je, Ke, Je, qe, Qe, Xe, et, tt, it, at, nt, rt, ot, st, ct, pt, lt;
  const {
    config: s,
    setConfig: f,
    isOpen: d,
    setIsOpen: m,
    screen: v,
    setScreen: c,
    conversations: b,
    activeConversation: h,
    activeConversationHumanActive: y,
    totalUnread: A,
    isStreaming: I,
    rateLimitTimer: S,
    errorBanner: $,
    sessionInvalid: X,
    resetSession: l,
    selectConversation: C,
    startNewConversation: N,
    endConversation: B,
    deleteConversation: T,
    sendUserMessage: D,
    submitSatisfaction: E,
    visitorContact: P,
    visitorId: Q,
    activeConversationId: ee,
    activeLanguage: V,
    appendConversationMessage: le,
    appendWorkflowWidget: L,
    handleApiError: ae
  } = sn(t, {
    startOpen: e,
    initialScreen: i,
    emitEvent: n,
    onActionTrigger: (k, w) => {
      if (!s.isPreview && !s.mockMode && (n == null || n("action_triggered", { ...Pa(s.companyId, k), ...w ? { complete: w } : {} })), re(!0), m(!0), (v === "history" || v === "new-conversation") && c("conversation"), k.widget_id || k.widget)
        return;
      const M = Number(k.id), Y = Number(k.form_id), he = Number.isInteger(M) && M > 0 ? M : null, we = Number.isInteger(Y) && Y > 0 ? -Y : null;
      de(he ?? we);
    }
  }), j = ie(i), Z = ie(e), [se, re] = F(e), [Ae, de] = F(() => {
    var k, w, M, Y;
    return ((k = s.previewDraft) == null ? void 0 : k.initialStep) === "form" && !!!(s.previewDraft.widget || (w = s.previewDraft.action) != null && w.widget || (M = s.previewDraft.action) != null && M.widget_id) ? ((Y = s.previewDraft.action) == null ? void 0 : Y.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  q(() => {
    var k, w, M, Y, he, we, De;
    if (((k = s.previewDraft) == null ? void 0 : k.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (w = s.previewDraft.action) != null && w.widget || (M = s.previewDraft.action) != null && M.widget_id)) {
        const _ = ((Y = s.previewDraft.action) == null ? void 0 : Y.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        _ !== null && de(_);
      }
    } else (((he = s.previewDraft) == null ? void 0 : he.initialStep) === "idle" || ((we = s.previewDraft) == null ? void 0 : we.initialStep) === "submitted" || ((De = s.previewDraft) == null ? void 0 : De.initialStep) === "dismissed") && de(null);
  }, [
    (je = s.previewDraft) == null ? void 0 : je.initialStep,
    (Je = (Ke = s.previewDraft) == null ? void 0 : Ke.action) == null ? void 0 : Je.id,
    (Qe = (qe = s.previewDraft) == null ? void 0 : qe.form) == null ? void 0 : Qe.id,
    (Xe = s.previewDraft) == null ? void 0 : Xe.widget
  ]);
  const [Te, Ce] = F(null), be = ie(null), [ge, xe] = F(() => typeof r == "boolean" ? r : o ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  q(() => {
    if (typeof r == "boolean") {
      xe(r);
      return;
    }
    const k = () => {
      if (typeof window > "u") return;
      if (o) {
        xe(!1);
        return;
      }
      let w = window.innerWidth <= 640;
      if (!w && be.current) {
        const M = be.current.getRootNode(), Y = M instanceof ShadowRoot ? M.host : be.current.parentElement, he = (Y == null ? void 0 : Y.parentElement) || Y;
        he && he.clientWidth > 0 && he.clientWidth <= 640 && (w = !0);
      }
      xe(w);
    };
    return k(), window.addEventListener("resize", k), window.addEventListener("orientationchange", k), () => {
      window.removeEventListener("resize", k), window.removeEventListener("orientationchange", k);
    };
  }, [r]), q(() => {
    if (typeof window > "u") return;
    const k = () => {
      const M = be.current;
      if (!M) return;
      const Y = window.visualViewport;
      if (Y) {
        const he = Y.height < window.innerHeight - 100;
        M.style.setProperty("--pitaj-viewport-height", `${Math.round(Y.height)}px`), M.style.setProperty("--pitaj-viewport-top", `${Math.round(Y.offsetTop)}px`), M.style.setProperty("--pitaj-viewport-left", `${Math.round(Y.offsetLeft)}px`), M.style.setProperty(
          "--pitaj-input-safe-bottom",
          he ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        M.style.setProperty("--pitaj-viewport-height", "100dvh"), M.style.setProperty("--pitaj-viewport-top", "0px"), M.style.setProperty("--pitaj-viewport-left", "0px"), M.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    k();
    const w = window.visualViewport;
    return w && (w.addEventListener("resize", k), w.addEventListener("scroll", k)), window.addEventListener("resize", k), window.addEventListener("orientationchange", k), () => {
      w && (w.removeEventListener("resize", k), w.removeEventListener("scroll", k)), window.removeEventListener("resize", k), window.removeEventListener("orientationchange", k);
    };
  }, [d, ge]), q(() => {
    if (typeof document > "u" || !d || !ge || o || p) return;
    const k = document.body.style.overflow, w = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = k, document.body.style.touchAction = w;
    };
  }, [d, ge, o, p]), q(() => {
    var M;
    if (typeof window > "u" || o) return;
    const k = (M = be.current) == null ? void 0 : M.getRootNode(), w = k instanceof ShadowRoot ? k.host : null;
    if (w) {
      if (p || w.hasAttribute("data-pitaj-preview") || w.classList.contains("pitaj-preview-host")) {
        w.style.width = "100%", w.style.height = "100%", w.style.top = "0", w.style.left = "0", w.style.position = "relative";
        return;
      }
      d && ge ? (w.style.top = "0", w.style.left = "0", w.style.width = "100%", w.style.height = "100%", w.setAttribute("data-pitaj-mobile-open", "true")) : (w.style.top = "", w.style.left = "", w.style.width = "0", w.style.height = "0", w.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [d, ge, o, p]);
  const $e = s.formsEnabled === !0 && s.formsAvailable !== !1, ke = Ge(() => {
    var M, Y;
    const k = s.actions || [];
    if (k.length > 0 && typeof ((M = k[0]) == null ? void 0 : M.id) == "number")
      return k[0].id;
    const w = s.forms || [];
    return w.length > 0 && typeof ((Y = w[0]) == null ? void 0 : Y.id) == "number" ? -w[0].id : null;
  }, [s.actions, s.forms]), He = Ge(() => ({
    open: () => {
      re(!0), m(!0);
    },
    close: () => m(!1),
    toggle: () => {
      d || re(!0), m(!d);
    },
    startConversation: (k) => {
      re(!0), m(!0), k && k.trim() ? N(k.trim()) : c("new-conversation");
    },
    setScreen: (k) => c(k),
    setConfig: (k) => {
      const w = {
        ...s,
        ...k,
        colors: { ...s.colors || {}, ...k.colors || {} },
        content: { ...s.content || {}, ...k.content || {} },
        features: { ...s.features || {}, ...k.features || {} },
        cssVars: { ...s.cssVars || {}, ...k.cssVars || {} }
      };
      if (w.previewDraft) {
        if (w.previewDraft.action) {
          const M = w.previewDraft.action;
          w.actions = [M, ...(w.actions || []).filter((Y) => Y.id !== M.id)];
        }
        if (w.previewDraft.form) {
          const M = w.previewDraft.form;
          w.forms = [M, ...(w.forms || []).filter((Y) => Y.id !== M.id)], w.formsAvailable = !0, w.formsEnabled = !0;
        }
        if (w.previewDraft.widget) {
          const M = w.previewDraft.widget;
          w.widgets = [M, ...(w.widgets || []).filter((Y) => Y.id !== M.id)];
        }
      }
      f(w);
    }
  }), [s, d, m, c, N, f]), x = ie({});
  Ei(x.current, He), q(() => () => Ei(x.current, null), []), q(() => {
    i !== j.current && (j.current = i, c(i));
  }, [i, c]), q(() => {
    e !== Z.current && (Z.current = e, e && re(!0), m(e));
  }, [e, m]), q(() => {
    if (v === "forms") {
      $e && ke !== null && de(ke), c("new-conversation");
      return;
    }
    v === "contact" && c("new-conversation");
  }, [ke, $e, v, c]), q(() => {
    var Y;
    if (typeof document > "u") return;
    const k = (Y = s.content) == null ? void 0 : Y.fontFamily;
    if (!k) return;
    const w = k.trim().toLowerCase();
    let M = "";
    if (w === "inter" ? M = "family=Inter:wght@400;500;600;700" : w === "geist" ? M = "family=Geist:wght@400;500;600;700" : w === "plus jakarta sans" && (M = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), M) {
      const he = `pitaj-font-${w.replace(/\s+/g, "-")}`;
      if (!document.getElementById(he)) {
        const we = document.createElement("link");
        we.id = he, we.rel = "stylesheet", we.href = `https://fonts.googleapis.com/css2?${M}&display=swap`, document.head.appendChild(we);
      }
    }
  }, [(et = s.content) == null ? void 0 : et.fontFamily]);
  const G = Ge(() => {
    var ri, oi, si, ci, pi, li, di, ui, mi;
    const w = (((ri = s.content) == null ? void 0 : ri.themeMode) === "dark" ? "dark" : "light") === "dark", M = s.colors || {}, Y = w ? "#0b1220" : "#ffffff", he = w ? "#111827" : "#f8fafc", we = w ? "#111827" : "#ffffff", De = w ? "#e5e7eb" : "#0f172a", g = w ? "#9ca3af" : "#64748b", _ = w ? "#263246" : "#e2e8f0", z = w ? "#172033" : "#f1f5f9", W = w ? "#111827" : "#ffffff", u = {};
    (oi = s.theme) != null && oi.css_vars && typeof s.theme.css_vars == "object" && Object.assign(u, s.theme.css_vars);
    const J = M.primaryColor || (w ? "#3b82f6" : "#2563eb");
    u["--pitaj-accent"] = J, u["--pitaj-bubble-user"] = M.bubbleUserBg || J, u["--pitaj-accent-hover"] = qn(J), u["--pitaj-accent-contrast"] = ht(J), u["--pitaj-bubble-user-fg"] = ht(M.bubbleUserBg || J);
    const ne = xt(J, 0.1), Se = xt(J, 0.16), K = xt(J, 0.35);
    ne && (u["--pitaj-accent-soft"] = ne), Se && (u["--pitaj-accent-soft-strong"] = Se), K && (u["--pitaj-accent-ring"] = K);
    const O = M.sendAccent || (w ? "#e5e7eb" : "#111827");
    u["--pitaj-send-accent"] = O, u["--pitaj-send-accent-contrast"] = ht(O);
    const U = M.surfaceBg || Y;
    u["--pitaj-surface"] = U, M.subtle ? u["--pitaj-surface-subtle"] = M.subtle : M.surfaceBg ? u["--pitaj-surface-subtle"] = xt(M.surfaceBg, 0.9) || M.surfaceBg : u["--pitaj-surface-subtle"] = he;
    const ue = M.bubbleAiBg || we;
    u["--pitaj-bubble-ai"] = ue;
    const H = M.textFg || De;
    u["--pitaj-bubble-ai-fg"] = H, u["--pitaj-fg"] = H;
    const ye = M.mutedFg || g;
    u["--pitaj-muted"] = ye;
    const Ie = M.border || _;
    u["--pitaj-border"] = Ie, u["--pitaj-card-border"] = Ie;
    const Me = M.hover || z;
    u["--pitaj-hover"] = Me, u["--pitaj-chrome-border"] = w ? "rgba(148, 163, 184, 0.52)" : "#d1d5db";
    const Pe = M.headerBg || W, Ne = Jn(Pe, M.headerFg), _e = M.headerFg || (Ne ? "#ffffff" : "#0f172a");
    u["--pitaj-header-bg"] = Pe, u["--pitaj-header-fg"] = _e, Ne ? (u["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)", u["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", u["--pitaj-header-icon-hover"] = "#ffffff", u["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", u["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", u["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", u["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", u["--pitaj-header-badge-fg"] = "#ffffff", u["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (u["--pitaj-header-gradient"] = Pe.toLowerCase() === "#ffffff" || Pe.toLowerCase() === "#fff" ? "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", u["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", u["--pitaj-header-icon-hover"] = "#0f172a", u["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", u["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", u["--pitaj-header-border"] = Ie, u["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", u["--pitaj-header-badge-fg"] = "#0f172a", u["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)");
    const Be = (si = s.content) == null ? void 0 : si.launcherButtonColor;
    Be && (u["--pitaj-launcher-bg"] = Be, u["--pitaj-launcher-fg"] = ht(Be));
    const ze = (ci = s.content) == null ? void 0 : ci.cornerRadius;
    if (ze) {
      const Ee = ze === "sharp" || ze === "0px" ? "0px" : ze === "small" || ze === "8px" ? "8px" : ze === "medium" || ze === "12px" ? "12px" : ze === "large" || ze === "16px" ? "16px" : ze;
      u["--pitaj-radius"] = Ee, Ee === "0px" ? (u["--pitaj-radius-bubble"] = "0px", u["--pitaj-radius-input"] = "0px", u["--pitaj-radius-btn"] = "0px", u["--pitaj-radius-avatar"] = "0px", u["--pitaj-radius-full"] = "0px", u["--pitaj-radius-corner-sm"] = "0px", u["--pitaj-launcher-radius"] = "0px", u["--pitaj-launcher-pill-radius"] = "0px", u["--pitaj-badge-radius"] = "0px") : Ee === "8px" ? (u["--pitaj-radius-bubble"] = "8px", u["--pitaj-radius-input"] = "8px", u["--pitaj-radius-btn"] = "6px", u["--pitaj-radius-avatar"] = "6px", u["--pitaj-radius-full"] = "8px", u["--pitaj-radius-corner-sm"] = "2px", u["--pitaj-launcher-radius"] = "8px", u["--pitaj-launcher-pill-radius"] = "8px", u["--pitaj-badge-radius"] = "4px") : Ee === "12px" ? (u["--pitaj-radius-bubble"] = "12px", u["--pitaj-radius-input"] = "12px", u["--pitaj-radius-btn"] = "8px", u["--pitaj-radius-avatar"] = "10px", u["--pitaj-radius-full"] = "12px", u["--pitaj-radius-corner-sm"] = "4px", u["--pitaj-launcher-radius"] = "12px", u["--pitaj-launcher-pill-radius"] = "12px", u["--pitaj-badge-radius"] = "6px") : (u["--pitaj-radius-bubble"] = "18px", u["--pitaj-radius-input"] = "14px", u["--pitaj-radius-btn"] = "10px", u["--pitaj-radius-avatar"] = "50%", u["--pitaj-radius-full"] = "999px", u["--pitaj-radius-corner-sm"] = "4px", u["--pitaj-launcher-radius"] = "50%", u["--pitaj-launcher-pill-radius"] = "999px", u["--pitaj-badge-radius"] = "999px");
    }
    const $t = (pi = s.content) == null ? void 0 : pi.fontFamily;
    if ($t) {
      const Ee = $t.toLowerCase(), hi = Ee === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : Ee === "arial" ? "Arial, Helvetica, sans-serif" : Ee === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : Ee === "georgia" ? "Georgia, serif" : Ee === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : Ee === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${$t}', 'Inter', system-ui, sans-serif`;
      u["--pitaj-font"] = hi, u.fontFamily = hi;
    }
    const Dt = (li = s.content) == null ? void 0 : li.fontSize;
    Dt && (u["--pitaj-font-size"] = Dt, u.fontSize = Dt);
    const ni = (di = s.content) != null && di.dropShadowEnabled ? w ? "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.3)" : "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)" : "none";
    u["--pitaj-window-shadow"] = ni, u["--pitaj-shadow"] = ni;
    const ga = (ui = s.content) != null && ui.dropShadowEnabled ? w ? "0 4px 12px rgba(0, 0, 0, 0.4), 0 10px 24px -4px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(15, 23, 42, 0.15), 0 10px 24px -4px rgba(15, 23, 42, 0.25)" : "none", ba = (mi = s.content) != null && mi.dropShadowEnabled ? w ? "0 6px 16px rgba(0, 0, 0, 0.45), 0 16px 32px -4px rgba(0, 0, 0, 0.6)" : "0 6px 16px rgba(15, 23, 42, 0.18), 0 16px 32px -4px rgba(15, 23, 42, 0.32)" : "none";
    return u["--pitaj-launcher-shadow"] = ga, u["--pitaj-launcher-shadow-hover"] = ba, s.cssVars && typeof s.cssVars == "object" && Object.assign(u, s.cssVars), u;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (tt = s.content) == null ? void 0 : tt.themeMode,
    (it = s.content) == null ? void 0 : it.launcherButtonColor,
    (at = s.content) == null ? void 0 : at.cornerRadius,
    (nt = s.content) == null ? void 0 : nt.fontFamily,
    (rt = s.content) == null ? void 0 : rt.fontSize,
    (ot = s.content) == null ? void 0 : ot.dropShadowEnabled
  ]), te = ((st = s.content) == null ? void 0 : st.themeMode) === "dark" ? "dark" : "light", ve = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ a(Le, {}) : /* @__PURE__ */ a(
    "div",
    {
      ref: be,
      "data-theme": te,
      className: `pitaj-root pitaj-theme-${te} ${ve} ${d ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${p ? "is-canvas-preview" : ""} ${ge ? "is-mobile" : ""} ${o && ((ct = s.content) != null && ct.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: G,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-window ${d ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !d,
            children: [
              /* @__PURE__ */ a(
                yn,
                {
                  screen: v,
                  activeConversation: h,
                  config: s,
                  language: V,
                  onBack: () => {
                    const k = Te || "new-conversation";
                    Ce(null), c(k);
                  },
                  onClose: () => {
                    m(!1);
                  },
                  onNewConversation: () => {
                    Ce(null), c("new-conversation");
                  },
                  onEndConversation: () => {
                    B(), m(!1);
                  },
                  onDeleteConversation: ((pt = s.content) == null ? void 0 : pt.deleteConversationsEnabled) !== !1 && h ? () => T(h.id) : void 0,
                  onViewHistory: () => {
                    Ce(null), c("history");
                  },
                  onViewTickets: () => {
                    Ce(null), c("tickets");
                  }
                }
              ),
              /* @__PURE__ */ a("div", { className: "pitaj-body", children: [
                v === "conversation" && h && /* @__PURE__ */ a(
                  Bn,
                  {
                    conversation: h,
                    config: s,
                    language: V,
                    humanActive: y,
                    isStreaming: I,
                    rateLimitCountdown: S,
                    errorBanner: $,
                    sessionInvalid: X,
                    onResetSession: l,
                    onSendMessage: D,
                    onWorkflowWidget: (k) => L(h.id, k),
                    onApiError: ae,
                    onSubmitSatisfaction: (k, w) => E(h.id, k, w)
                  }
                ),
                v === "new-conversation" && /* @__PURE__ */ a(
                  Hn,
                  {
                    config: s,
                    language: V,
                    openedByUser: se,
                    onStart: (k) => {
                      N(k);
                    },
                    onApiError: ae
                  }
                ),
                v === "history" && /* @__PURE__ */ a(
                  Yn,
                  {
                    conversations: b,
                    config: s,
                    language: V,
                    onSelectConversation: (k) => {
                      Ce("history"), C(k);
                    },
                    onNewConversation: () => {
                      Ce(null), c("new-conversation");
                    },
                    onDeleteConversation: ((lt = s.content) == null ? void 0 : lt.deleteConversationsEnabled) !== !1 ? T : void 0
                  }
                ),
                v === "tickets" && /* @__PURE__ */ a(
                  Kn,
                  {
                    config: s,
                    visitorId: Q,
                    onSelectTicket: (k) => {
                      var De;
                      Ce("tickets");
                      const w = (De = k.messages) == null ? void 0 : De.find((g) => g.sender === "user"), M = k.messages && k.messages.length > 0 ? k.messages[k.messages.length - 1] : null, Y = w ? w.content.length > 40 ? w.content.slice(0, 40) + "…" : w.content : k.ticketNumber || `Tiket #${k.id}`, we = {
                        id: k.conversationId ? String(k.conversationId) : String(k.id),
                        title: Y,
                        preview: M ? M.content : k.ticketNumber || `Tiket #${k.id}`,
                        timestamp: k.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: k.messages || [],
                        status: k.isResolved ? "ended" : "active",
                        ticketNumber: k.ticketNumber
                      };
                      C(we);
                    }
                  }
                ),
                (v === "conversation" || v === "new-conversation") && $e && Ae !== null ? /* @__PURE__ */ a("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ a(
                  Wn,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: ee,
                    initialActionId: Ae,
                    visitorContact: P,
                    onApiError: ae,
                    blockedReason: S !== null ? `Sačekajte ${S}s prije novog zahtjeva.` : null,
                    onSubmitted: (k) => {
                      var w, M;
                      if (le(ee, k, "user"), s.mockMode || s.isPreview) {
                        const Y = ((M = (w = s.previewDraft) == null ? void 0 : w.form) == null ? void 0 : M.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          le(ee, Y, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => de(null),
                    onDismiss: async (k, w) => {
                      if (!(k != null && k.dismiss_message) || !ee) return;
                      const M = s.mockMode || s.isPreview ? k.dismiss_message : await Ta(s.companyId, ee, k.id, w, s.apiUrl);
                      le(ee, M, "ai");
                    }
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!d || !ge) && /* @__PURE__ */ a("div", { className: `pitaj-launcher-wrap ${d ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ a(
            On,
            {
              isOpen: d,
              onOpen: () => {
                re(!0), m(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ a(
            Rn,
            {
              isOpen: d,
              onClick: () => {
                d || re(!0), m(!d);
              },
              unreadCount: A,
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const pe = {
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
function Xn(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const i = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * i + 0.7152 * n + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function er(t, e) {
  if (typeof t != "string") return e;
  const i = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(i) ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`.toUpperCase() : e;
}
function tr(t) {
  const e = t.trim(), i = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(i))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(i.slice(1, 3), 16) / 255, o = Number.parseInt(i.slice(3, 5), 16) / 255, r = Number.parseInt(i.slice(5, 7), 16) / 255, p = Math.max(n, o, r), s = Math.min(n, o, r), f = p - s;
  let d = 0;
  const m = (p + s) / 2, v = f === 0 ? 0 : f / (1 - Math.abs(2 * m - 1));
  if (f !== 0)
    switch (p) {
      case n:
        d = (o - r) / f % 6;
        break;
      case o:
        d = (r - n) / f + 2;
        break;
      default:
        d = (n - o) / f + 4;
        break;
    }
  return { h: Math.round((d * 60 + 360) % 360), s: Math.round(v * 100), l: Math.round(m * 100) };
}
function ir(t) {
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
function ar(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const i = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(i.fields) ? i.fields : []).filter((r) => typeof r == "object" && r !== null).map((r) => ({
      key: typeof r.key == "string" ? r.key : "",
      type: ir(r.type),
      label: typeof r.label == "string" ? r.label : "",
      required: r.required === !0,
      placeholder: typeof r.placeholder == "string" ? r.placeholder : void 0,
      options: Array.isArray(r.options) ? r.options.filter((p) => typeof p == "string" && p.trim() !== "") : void 0,
      accept: Array.isArray(r.accept) ? r.accept.filter((p) => typeof p == "string" && p.trim() !== "") : void 0,
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
function nr(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    dismiss_message: typeof e.dismiss_message == "string" ? e.dismiss_message.slice(0, 255) : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function rr(t, e) {
  var n, o, r, p, s, f, d, m, v;
  if (t === "default")
    return { ...pe, companyId: t || "default" };
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const c = `${i}/api/widget/${t}/config`, b = await fetch(c, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!b.ok) {
      if (b.status === 403) {
        const j = await b.json().catch(() => null);
        if ((j == null ? void 0 : j.code) === "COUNTRY_BLOCKED" || j != null && j.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...pe,
            companyId: t,
            apiUrl: i,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${b.status}), using defaults.`), { ...pe, companyId: t, apiUrl: i };
    }
    const h = await b.json(), y = h.accent_color || ((n = pe.colors) == null ? void 0 : n.primaryColor) || "#2563eb", A = Array.isArray(h.suggested_questions) ? h.suggested_questions.filter((j) => typeof j == "string" && j.trim() !== "").slice(0, 4) : [], I = Array.isArray(h.contact_fields) ? h.contact_fields.filter(
      (j) => j === "name" || j === "email" || j === "phone"
    ) : [], $ = (Array.isArray(h.channels) ? h.channels : []).find(
      (j) => typeof j == "object" && j !== null && j.channel === "chat_bubble"
    ), X = ($ == null ? void 0 : $.enabled) !== !1, l = h.widget_content && typeof h.widget_content == "object" ? h.widget_content : null, C = Array.isArray(l == null ? void 0 : l.suggested_message_rows) ? l.suggested_message_rows.filter((j) => typeof j == "object" && j !== null).map((j) => {
      const Z = typeof j.text == "string" ? j.text.trim() : "", se = Array.isArray(j.children) ? j.children.filter((re) => typeof re == "string" && re.trim() !== "") : [];
      return {
        text: Z,
        children: se.length > 0 ? se : void 0
      };
    }).filter((j) => j.text !== "").slice(0, 4) : [], N = {
      avatarBorder: (l == null ? void 0 : l.avatar_border) !== !1,
      messagePlaceholder: typeof (l == null ? void 0 : l.message_placeholder) == "string" && l.message_placeholder.trim() !== "" ? l.message_placeholder : pe.placeholder,
      dismissibleNotice: typeof (l == null ? void 0 : l.dismissible_notice) == "string" ? l.dismissible_notice : "",
      footerText: typeof (l == null ? void 0 : l.footer_text) == "string" ? l.footer_text : "",
      attachmentsEnabled: (l == null ? void 0 : l.attachments_enabled) === !0,
      voiceToTextEnabled: (l == null ? void 0 : l.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (l == null ? void 0 : l.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (l == null ? void 0 : l.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (l == null ? void 0 : l.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (l == null ? void 0 : l.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (l == null ? void 0 : l.keep_showing_suggested_messages) === !0,
      showFollowupSuggestions: (l == null ? void 0 : l.show_followup_suggestions) !== !1,
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
      dropShadowEnabled: (l == null ? void 0 : l.drop_shadow_enabled) === !0,
      tintedGrayscaleEnabled: (l == null ? void 0 : l.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (l == null ? void 0 : l.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (l == null ? void 0 : l.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (l == null ? void 0 : l.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (l == null ? void 0 : l.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(l.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (l == null ? void 0 : l.tinted_grayscale_tint) == "number" ? Math.max(0, Math.min(100, Math.round(l.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (l == null ? void 0 : l.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(l.tinted_grayscale_shade))) : 0,
      launcherButtonColor: er(l == null ? void 0 : l.launcher_button_color, "#05070c"),
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
      defaultLanguage: typeof (l == null ? void 0 : l.default_language) == "string" ? l.default_language : "bs",
      supportedLanguages: Array.isArray(l == null ? void 0 : l.supported_languages) ? l.supported_languages : ["bs"],
      guardrails: l == null ? void 0 : l.guardrails
    }, B = h.theme && typeof h.theme == "object" ? h.theme : null, T = B != null && B.css_vars && typeof B.css_vars == "object" ? B.css_vars : void 0, D = B != null && B.colors && typeof B.colors == "object" ? B.colors : null;
    let E = D, P = y;
    if (E)
      D.primaryColor && (P = D.primaryColor);
    else {
      const j = N.themeMode === "dark" ? "dark" : "light", Z = N.accentColorEnabled !== !1, se = N.accentColorForHeaderEnabled === !0, re = N.tintedGrayscaleEnabled === !0, Ae = N.tintedGrayscaleHue ?? 0, de = N.tintedGrayscaleTint ?? 0, Te = N.tintedGrayscaleShade ?? 0;
      P = Z ? y : j === "dark" ? "#3b82f6" : "#2563eb";
      const be = (tr(P).h + Ae + 360) % 360, ge = Math.max(0, Math.min(40, Math.round(Math.max(0, de) * 0.36))), xe = Math.max(-24, Math.min(24, Te * 0.24));
      if (E = j === "dark" ? {
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
      }, Z && se && (E.headerBg = P, E.headerFg = Xn(P)), re) {
        const $e = j === "dark" ? Math.max(8, Math.min(20, 12 + xe)) : Math.max(88, Math.min(97, 95 + xe * 0.22)), ke = j === "dark" ? Math.max(10, Math.min(24, 16 + xe)) : Math.max(80, Math.min(94, 89 + xe * 0.35)), He = j === "dark" ? Math.max(11, Math.min(26, 18 + xe * 0.9)) : Math.max(83, Math.min(95, ke + 3)), x = j === "dark" ? Math.max(22, Math.min(40, 30 + xe)) : Math.max(70, Math.min(88, 82 + xe * 0.38)), G = j === "dark" ? Math.max(16, Math.min(30, 22 + xe)) : Math.max(78, Math.min(92, ke - 2));
        E.surfaceBg = `hsl(${be} ${ge}% ${$e}%)`, E.bubbleAiBg = `hsl(${be} ${Math.max(0, ge - 2)}% ${He}%)`, E.subtle = `hsl(${be} ${Math.max(0, ge - 4)}% ${ke}%)`, E.border = `hsl(${be} ${Math.max(0, ge - 5)}% ${x}%)`, E.hover = `hsl(${be} ${Math.max(0, ge - 3)}% ${G}%)`;
      }
    }
    const Q = ar(h.forms), ee = nr(h.actions).filter(
      (j) => Q.some((Z) => Z.id === j.form_id)
    ), V = h.forms_enabled === !0 && Q.length > 0 && ee.length > 0, le = h.chat_available !== !1, L = h.transcribe_available !== !1 && le, ae = h.forms_available !== !1 && V;
    return {
      ...pe,
      companyId: t,
      enabled: X,
      apiUrl: i,
      name: h.company_name || pe.name,
      title: h.bot_name || pe.title,
      avatar: typeof (l == null ? void 0 : l.avatar_url) == "string" && l.avatar_url.trim() !== "" ? l.avatar_url : pe.avatar,
      welcomeHeadline: h.bot_name ? `Ćaskajte sa ${h.bot_name}` : pe.welcomeHeadline,
      welcomeMessage: h.welcome_message || pe.welcomeMessage,
      placeholder: N.messagePlaceholder || pe.placeholder,
      suggestedQuestions: A,
      contactFields: I.length > 0 ? I : pe.contactFields,
      contact: {
        enabled: typeof ((o = h.contact) == null ? void 0 : o.enabled) == "boolean" ? h.contact.enabled : (r = pe.contact) == null ? void 0 : r.enabled,
        title: typeof ((p = h.contact) == null ? void 0 : p.title) == "string" && h.contact.title.trim() !== "" ? h.contact.title : (s = pe.contact) == null ? void 0 : s.title,
        subtitle: typeof ((f = h.contact) == null ? void 0 : f.subtitle) == "string" && h.contact.subtitle.trim() !== "" ? h.contact.subtitle : (d = pe.contact) == null ? void 0 : d.subtitle,
        submitLabel: typeof ((m = h.contact) == null ? void 0 : m.submit_label) == "string" && h.contact.submit_label.trim() !== "" ? h.contact.submit_label : (v = pe.contact) == null ? void 0 : v.submitLabel
      },
      poweredBy: h.show_branding !== void 0 ? h.show_branding : pe.poweredBy,
      position: h.position || pe.position,
      accentGradient: Array.isArray(h.accent_gradient) ? h.accent_gradient : [],
      content: {
        ...pe.content || {},
        ...N
      },
      chatAvailable: le,
      transcribeAvailable: L,
      formsAvailable: ae,
      formsEnabled: V,
      forms: Q,
      actions: ee,
      theme: B,
      cssVars: T,
      colors: {
        ...pe.colors,
        primaryColor: P,
        bubbleUserBg: P,
        sendAccent: (D == null ? void 0 : D.sendAccent) || (N.accentColorForSendIconEnabled ? P : N.themeMode === "dark" ? "#e5e7eb" : "#111827"),
        headerBg: E.headerBg,
        headerFg: E.headerFg,
        surfaceBg: E.surfaceBg,
        bubbleAiBg: E.bubbleAiBg,
        textFg: E.textFg,
        mutedFg: E.mutedFg,
        border: E.border,
        hover: E.hover,
        subtle: E.subtle
      }
    };
  } catch (c) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", c), { ...pe, companyId: t, apiUrl: i, mockMode: !1 };
  }
}
const or = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-window-shadow: none;--pitaj-shadow: var(--pitaj-window-shadow, none);--pitaj-launcher-shadow: none;--pitaj-launcher-shadow-hover: none;--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host([data-theme="dark"]),.pitaj-root.pitaj-theme-dark,.pitaj-root[data-theme=dark]{color-scheme:dark}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:var(--pitaj-window-shadow, none);border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:none}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media(prefers-reduced-motion:reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--pitaj-launcher-border, rgba(255, 255, 255, .16));box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media(max-width:640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-human-chip{align-self:center;padding:4px 10px;border-radius:999px;font-size:12px;line-height:1.4;color:var(--pitaj-accent);background:var(--pitaj-accent-soft)}.pitaj-operator-label{font-size:11px;font-weight:600;line-height:1.3;color:var(--pitaj-accent);padding:0 4px}', sr = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", We = {};
function fa(t, e) {
  (We[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function cr(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function pr(t, e) {
  const i = e.initialConfig || {}, n = !!(e.isPreview || i.isPreview || t.isPreview), o = e.previewDraft || i.previewDraft || t.previewDraft, r = {
    ...t,
    ...i,
    isPreview: n,
    previewDraft: o,
    mockMode: n ? !0 : i.mockMode ?? t.mockMode,
    position: e.position || i.position || t.position || "bottom-right",
    apiUrl: e.apiUrl || i.apiUrl || t.apiUrl,
    colors: { ...t.colors || {}, ...i.colors || {} },
    content: { ...t.content || {}, ...i.content || {} },
    features: { ...t.features || {}, ...i.features || {} },
    theme: i.colors ? void 0 : i.theme || t.theme,
    cssVars: i.colors ? void 0 : i.cssVars || t.cssVars
  };
  if (o) {
    if (o.action) {
      const p = o.action;
      r.actions = [p, ...(r.actions || []).filter((s) => s.id !== p.id)];
    }
    if (o.form) {
      const p = o.form;
      r.forms = [p, ...(r.forms || []).filter((s) => s.id !== p.id)], r.formsAvailable = !0, r.formsEnabled = !0;
    }
    if (o.widget) {
      const p = o.widget;
      r.widgets = [p, ...(r.widgets || []).filter((s) => s.id !== p.id)];
    }
  }
  return r;
}
const wt = /* @__PURE__ */ new WeakMap();
async function Gt(t, e = {}) {
  const i = wt.get(t), n = async () => {
    var h, y;
    const r = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (h = e.initialConfig) != null && h.isPreview || r === "preview") && r === "preview" ? { ...pe, companyId: r, apiUrl: e.apiUrl, mockMode: !0 } : await rr(r, e.apiUrl), f = pr(s, e);
    if (f.enabled === !1 || f.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let d = t.shadowRoot;
    d || (d = t.attachShadow({ mode: "open" })), d.innerHTML = "";
    const m = document.createElement("style");
    m.textContent = or, d.appendChild(m);
    const v = document.createElement("div");
    v.className = "pitaj-shadow-mount", d.appendChild(v);
    const c = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((y = t.closest) != null && y.call(t, "[data-pitaj-preview]")));
    if (c) {
      const A = document.createElement("style");
      A.textContent = sr, d.appendChild(A);
    }
    ji(
      /* @__PURE__ */ a(
        Qn,
        {
          config: f,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: c,
          initialScreen: e.initialScreen,
          onEvent: fa
        }
      ),
      v
    );
    const b = Fe();
    return b && (t.__pitajController = b), {
      controller: b,
      unmount: () => {
        ji(null, v), d && (d.innerHTML = "");
      }
    };
  }, o = (i || Promise.resolve()).then(n, n);
  wt.set(t, o);
  try {
    return await o;
  } finally {
    wt.get(t) === o && wt.delete(t);
  }
}
let ut = null;
const kt = {
  mount: async (t, e) => {
    const i = await Gt(t, e);
    return ut = i.unmount, i;
  },
  unmount: () => {
    ut && (ut(), ut = null);
  },
  init: async (t) => {
    const e = cr(t.containerId || "pitaj-io-widget-root"), i = await Gt(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return ut = i.unmount, i;
  },
  open: () => {
    var t;
    return (t = Fe()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = Fe()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = Fe()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = Fe()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = Fe()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = Fe()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = Fe()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    We[t] || (We[t] = []), We[t].push(e);
  },
  off: (t, e) => {
    We[t] && (We[t] = We[t].filter((i) => i !== e));
  },
  emit: (t, e) => {
    fa(t, e);
  }
};
class lr extends HTMLElement {
  constructor() {
    super(...arguments);
    Ye(this, "unmountFn", null);
  }
  async connectedCallback() {
    const i = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", r = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", p = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await Gt(this, { widgetId: i, apiUrl: n, position: o, startOpen: r, isInline: p });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Hi(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const i = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", r = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: i, position: n, startOpen: o, isInline: r };
}
var Ri;
if (typeof window < "u") {
  const t = ((Ri = window.PitajIO) == null ? void 0 : Ri._q) || [];
  window.PitajIO = kt, customElements.get("pitaj-io") || customElements.define("pitaj-io", lr);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, kt.init(e).then(() => {
      t.forEach(({ method: i, args: n }) => {
        const o = kt[i];
        typeof o == "function" && o(...n);
      });
    });
  else {
    const i = document.currentScript;
    let n = Hi(i);
    if (!n) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let r = o.length - 1; r >= 0; r--) {
        const p = o[r];
        if (p.src && /widget(\.iife)?\.js/i.test(p.src) && (n = Hi(p), n))
          break;
      }
    }
    n && kt.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  ie as A,
  Ir as B,
  jr as C,
  Dr as D,
  gn as E,
  ca as F,
  $r as G,
  ur as H,
  ei as I,
  yr as J,
  _r as K,
  Sr as L,
  xr as M,
  Mr as N,
  Nr as O,
  Et as P,
  kt as Q,
  ta as R,
  Le as S,
  Ge as T,
  gr as U,
  wr as W,
  ia as a,
  pn as b,
  Nt as c,
  F as d,
  fr as e,
  br as f,
  vr as g,
  q as h,
  mr as i,
  Ue as j,
  wa as k,
  Er as l,
  Ar as m,
  Lr as n,
  zr as o,
  Pt as p,
  kr as q,
  cn as r,
  Tr as s,
  R as t,
  a as u,
  Pr as v,
  Ve as w,
  hr as x,
  Cr as y,
  hn as z
};
