var ha = Object.defineProperty;
var fa = (t, e, i) => e in t ? ha(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var De = (t, e, i) => fa(t, typeof e != "symbol" ? e + "" : e, i);
var St, ne, $i, $e, li, Ei, Di, Lt, bt, st, Bi, Ot, Bt, Ht, kt = {}, yt = [], ga = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Mt = Array.isArray;
function Te(t, e) {
  for (var i in e) t[i] = e[i];
  return t;
}
function Vt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function ba(t, e, i) {
  var n, o, r, c = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? o = e[r] : c[r] = e[r];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? St.call(arguments, 2) : i), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) c[r] === void 0 && (c[r] = t.defaultProps[r]);
  return vt(t, c, n, o, null);
}
function vt(t, e, i, n, o) {
  var r = { type: t, props: e, key: i, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++$i, __i: -1, __u: 0 };
  return o == null && ne.vnode != null && ne.vnode(r), r;
}
function _e(t) {
  return t.children;
}
function jt(t, e) {
  this.props = t, this.context = e;
}
function Ue(t, e) {
  if (e == null) return t.__ ? Ue(t.__, t.__i + 1) : null;
  for (var i; e < t.__k.length; e++) if ((i = t.__k[e]) != null && i.__e != null) return i.__e;
  return typeof t.type == "function" ? Ue(t) : null;
}
function va(t) {
  if (t.__P && t.__d) {
    var e = t.__v, i = e.__e, n = [], o = [], r = Te({}, e);
    r.__v = e.__v + 1, ne.vnode && ne.vnode(r), Kt(t.__P, r, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [i] : null, n, i ?? Ue(e), !!(32 & e.__u), o), r.__v = e.__v, r.__.__k[r.__i] = r, Oi(n, r, o), e.__e = e.__ = null, r.__e != i && Hi(r);
  }
}
function Hi(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Hi(t);
}
function di(t) {
  (!t.__d && (t.__d = !0) && $e.push(t) && !_t.__r++ || li != ne.debounceRendering) && ((li = ne.debounceRendering) || Ei)(_t);
}
function _t() {
  try {
    for (var t, e = 1; $e.length; ) $e.length > e && $e.sort(Di), t = $e.shift(), e = $e.length, va(t);
  } finally {
    $e.length = _t.__r = 0;
  }
}
function Ui(t, e, i, n, o, r, c, s, f, u, g) {
  var b, p, v, h, y, A, I = n && n.__k || yt, M = e.length;
  for (f = ja(i, e, I, f, M), b = 0; b < M; b++) (v = i.__k[b]) != null && (p = v.__i != -1 && I[v.__i] || kt, v.__i = b, A = Kt(t, v, p, o, r, c, s, f, u, g), h = v.__e, v.ref && p.ref != v.ref && (p.ref && Yt(p.ref, null, v), g.push(v.ref, v.__c || h, v)), y == null && h != null && (y = h), 4 & v.__u ? (f = Ri(v, f, t), p.__e && (p.__e = null)) : typeof v.type == "function" && A !== void 0 ? f = A : h && (f = h.nextSibling), v.__u &= -7);
  return i.__e = y, f;
}
function ja(t, e, i, n, o) {
  var r, c, s, f, u, g = i.length, b = g, p = 0;
  for (t.__k = new Array(o), r = 0; r < o; r++) (c = e[r]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[r] = vt(null, c, null, null, null) : Mt(c) ? c = t.__k[r] = vt(_e, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[r] = vt(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[r] = c, f = r + p, c.__ = t, c.__b = t.__b + 1, s = null, (u = c.__i = xa(c, i, f, b)) != -1 && (b--, (s = i[u]) && (s.__u |= 2)), s == null || s.__v == null ? (u == -1 && (o > g ? p-- : o < g && p++), typeof c.type != "function" && (c.__u |= 4)) : u != f && (u == f - 1 ? p-- : u == f + 1 ? p++ : (u > f ? p-- : p++, c.__u |= 4))) : t.__k[r] = null;
  if (b) for (r = 0; r < g; r++) (s = i[r]) != null && (2 & s.__u) == 0 && (s.__e == n && (n = Ue(s)), Ki(s, s));
  return n;
}
function Ri(t, e, i) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = Ri(n[o], e, i));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = Ue(t)), e = i.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function xa(t, e, i, n) {
  var o, r, c, s = t.key, f = t.type, u = e[i], g = u != null && (2 & u.__u) == 0;
  if (u === null && s == null || g && s == u.key && f == u.type) return i;
  if (n > (g ? 1 : 0)) {
    for (o = i - 1, r = i + 1; o >= 0 || r < e.length; ) if ((u = e[c = o >= 0 ? o-- : r++]) != null && (2 & u.__u) == 0 && s == u.key && f == u.type) return c;
  }
  return -1;
}
function ui(t, e, i) {
  e[0] == "-" ? t.setProperty(e, i ?? "") : t[e] = i == null ? "" : typeof i != "number" || ga.test(e) ? i : i + "px";
}
function mt(t, e, i, n, o) {
  var r, c;
  e: if (e == "style") if (typeof i == "string") t.style.cssText = i;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) i && e in i || ui(t.style, e, "");
    if (i) for (e in i) n && i[e] == n[e] || ui(t.style, e, i[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(Bi, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = i, i ? n ? i[st] = n[st] : (i[st] = Ot, t.addEventListener(e, r ? Ht : Bt, r)) : t.removeEventListener(e, r ? Ht : Bt, r);
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
function mi(t) {
  return function(e) {
    if (this.l) {
      var i = this.l[e.type + t];
      if (e[bt] == null) e[bt] = Ot++;
      else if (e[bt] < i[st]) return;
      return i(ne.event ? ne.event(e) : e);
    }
  };
}
function Kt(t, e, i, n, o, r, c, s, f, u) {
  var g, b, p, v, h, y, A, I, M, $, W, d, T, N, E, D, S = e.type;
  if (e.constructor !== void 0) return null;
  128 & i.__u && (f = !!(32 & i.__u), r = [s = e.__e = i.__e]), (g = ne.__b) && g(e);
  e: if (typeof S == "function") {
    b = c.length;
    try {
      if (M = e.props, $ = S.prototype && S.prototype.render, W = (g = S.contextType) && n[g.__c], d = g ? W ? W.props.value : g.__ : n, i.__c ? I = (p = e.__c = i.__c).__ = p.__E : ($ ? e.__c = p = new S(M, d) : (e.__c = p = new jt(M, d), p.constructor = S, p.render = ka), W && W.sub(p), p.state || (p.state = {}), p.__n = n, v = p.__d = !0, p.__h = [], p._sb = []), $ && p.__s == null && (p.__s = p.state), $ && S.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = Te({}, p.__s)), Te(p.__s, S.getDerivedStateFromProps(M, p.__s))), h = p.props, y = p.state, p.__v = e, v) $ && S.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), $ && p.componentDidMount != null && p.__h.push(p.componentDidMount);
      else {
        if ($ && S.getDerivedStateFromProps == null && M !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(M, d), e.__v == i.__v || !p.__e && p.shouldComponentUpdate != null && p.shouldComponentUpdate(M, p.__s, d) === !1) {
          e.__v != i.__v && (p.props = M, p.state = p.__s, p.__d = !1), e.__e = i.__e, e.__k = i.__k, e.__k.some(function(L) {
            L && (L.__ = e);
          }), yt.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && c.push(p), s = Ue(i);
          break e;
        }
        p.componentWillUpdate != null && p.componentWillUpdate(M, p.__s, d), $ && p.componentDidUpdate != null && p.__h.push(function() {
          p.componentDidUpdate(h, y, A);
        });
      }
      if (p.context = d, p.props = M, p.__P = t, p.__e = !1, T = ne.__r, N = 0, $) p.state = p.__s, p.__d = !1, T && T(e), g = p.render(p.props, p.state, p.context), yt.push.apply(p.__h, p._sb), p._sb = [];
      else do
        p.__d = !1, T && T(e), g = p.render(p.props, p.state, p.context), p.state = p.__s;
      while (p.__d && ++N < 25);
      p.state = p.__s, p.getChildContext != null && (n = Te(Te({}, n), p.getChildContext())), $ && !v && p.getSnapshotBeforeUpdate != null && (A = p.getSnapshotBeforeUpdate(h, y)), E = g != null && g.type === _e && g.key == null ? Vi(g.props.children) : g, s = Ui(t, Mt(E) ? E : [E], e, i, n, o, r, c, s, f, u), p.base = e.__e, e.__u &= -161, p.__h.length && c.push(p), I && (p.__E = p.__ = null);
    } catch (L) {
      if (c.length = b, e.__v = null, f || r != null) {
        if (L.then) {
          for (e.__u |= f ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
          r != null && (r[r.indexOf(s)] = null), e.__e = s;
        } else if (r != null) for (D = r.length; D--; ) Vt(r[D]);
      } else e.__e = i.__e;
      e.__k == null && (e.__k = i.__k || []), L.then || Fi(e), ne.__e(L, e, i);
    }
  } else r == null && e.__v == i.__v ? (e.__k = i.__k, e.__e = i.__e) : s = e.__e = wa(i.__e, e, i, n, o, r, c, f, u);
  return (g = ne.diffed) && g(e), 128 & e.__u ? void 0 : s;
}
function Fi(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Fi));
}
function Oi(t, e, i) {
  for (var n = 0; n < i.length; n++) Yt(i[n], i[++n], i[++n]);
  ne.__c && ne.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      ne.__e(r, o.__v);
    }
  });
}
function Vi(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Mt(t) ? t.map(Vi) : t.constructor !== void 0 ? null : Te({}, t);
}
function wa(t, e, i, n, o, r, c, s, f) {
  var u, g, b, p, v, h, y, A = i.props || kt, I = e.props, M = e.type;
  if (M == "svg" ? o = "http://www.w3.org/2000/svg" : M == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (u = 0; u < r.length; u++) if ((v = r[u]) && "setAttribute" in v == !!M && (M ? v.localName == M : v.nodeType == 3)) {
      t = v, r[u] = null;
      break;
    }
  }
  if (t == null) {
    if (M == null) return document.createTextNode(I);
    t = document.createElementNS(o, M, I.is && I), s && (ne.__m && ne.__m(e, r), s = !1), r = null;
  }
  if (M == null) A === I || s && t.data == I || (t.data = I);
  else {
    if (r = M == "textarea" && I.defaultValue != null ? null : r && St.call(t.childNodes), !s && r != null) for (A = {}, u = 0; u < t.attributes.length; u++) A[(v = t.attributes[u]).name] = v.value;
    for (u in A) v = A[u], u == "dangerouslySetInnerHTML" ? b = v : u == "children" || u in I || u == "value" && "defaultValue" in I || u == "checked" && "defaultChecked" in I || mt(t, u, null, v, o);
    for (u in I) v = I[u], u == "children" ? p = v : u == "dangerouslySetInnerHTML" ? g = v : u == "value" ? h = v : u == "checked" ? y = v : s && typeof v != "function" || A[u] === v || mt(t, u, v, A[u], o);
    if (g) s || b && (g.__html == b.__html || g.__html == t.innerHTML) || (t.innerHTML = g.__html), e.__k = [];
    else if (b && (t.innerHTML = ""), Ui(e.type == "template" ? t.content : t, Mt(p) ? p : [p], e, i, n, M == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, c, r ? r[0] : i.__k && Ue(i, 0), s, f), r != null) for (u = r.length; u--; ) Vt(r[u]);
    s && M != "textarea" || (u = "value", M == "progress" && h == null ? t.removeAttribute("value") : h != null && (h !== t[u] || M == "progress" && !h || M == "option" && h != A[u]) && mt(t, u, h, A[u], o), u = "checked", y != null && y != t[u] && mt(t, u, y, A[u], o));
  }
  return t;
}
function Yt(t, e, i) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    ne.__e(o, i);
  }
}
function Ki(t, e, i) {
  var n, o;
  if (ne.unmount && ne.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || Yt(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      ne.__e(r, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && Ki(n[o], e, i || typeof t.type != "function");
  i || Vt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ka(t, e, i) {
  return this.constructor(t, i);
}
function hi(t, e, i) {
  var n, o, r, c;
  e == document && (e = document.documentElement), ne.__ && ne.__(t, e), o = (n = !1) ? null : e.__k, r = [], c = [], Kt(e, t = e.__k = ba(_e, null, [t]), o || kt, kt, e.namespaceURI, o ? null : e.firstChild ? St.call(e.childNodes) : null, r, o ? o.__e : e.firstChild, n, c), Oi(r, t, c), t.props.children = null;
}
St = yt.slice, ne = { __e: function(t, e, i, n) {
  for (var o, r, c; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), c = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), c = o.__d), c) return o.__E = o;
  } catch (s) {
    t = s;
  }
  throw t;
} }, $i = 0, jt.prototype.setState = function(t, e) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, i), this.props)), t && Te(i, t), t != null && this.__v && (e && this._sb.push(e), di(this));
}, jt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), di(this));
}, jt.prototype.render = _e, $e = [], Ei = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Di = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, _t.__r = 0, Lt = Math.random().toString(8), bt = "__d" + Lt, st = "__a" + Lt, Bi = /(PointerCapture)$|Capture$/i, Ot = 0, Bt = mi(!1), Ht = mi(!0);
var ya = 0;
function a(t, e, i, n, o, r) {
  e || (e = {});
  var c, s, f = e;
  if ("ref" in f) for (s in f = {}, e) s == "ref" ? c = e[s] : f[s] = e[s];
  var u = { type: t, props: f, key: i, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ya, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof t == "function" && (c = t.defaultProps)) for (s in c) f[s] === void 0 && (f[s] = c[s]);
  return ne.vnode && ne.vnode(u), u;
}
var ct, ce, Pt, fi, pt = 0, Yi = [], le = ne, gi = le.__b, bi = le.__r, vi = le.diffed, ji = le.__c, xi = le.unmount, wi = le.__;
function Wt(t, e) {
  le.__h && le.__h(ce, t, pt || e), pt = 0;
  var i = ce.__H || (ce.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function U(t) {
  return pt = 1, _a(Gi, t);
}
function _a(t, e, i) {
  var n = Wt(ct++, 2);
  if (n.t = t, !n.__c && (n.__ = [Gi(void 0, e), function(s) {
    var f = n.__N ? n.__N[0] : n.__[0], u = n.t(f, s);
    f !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = ce, !ce.__f)) {
    var o = function(s, f, u) {
      if (!n.__c.__H) return !0;
      var g = !1, b = n.__c.props !== s;
      if (n.__c.__H.__.some(function(v) {
        if (v.__N) {
          g = !0;
          var h = v.__[0];
          v.__ = v.__N, v.__N = void 0, h !== v.__[0] && (b = !0);
        }
      }), r) {
        var p = r.call(this, s, f, u);
        return g ? p || b : p;
      }
      return !g || b;
    };
    ce.__f = !0;
    var r = ce.shouldComponentUpdate, c = ce.componentWillUpdate;
    ce.componentWillUpdate = function(s, f, u) {
      if (this.__e) {
        var g = r;
        r = void 0, o(s, f, u), r = g;
      }
      c && c.call(this, s, f, u);
    }, ce.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function q(t, e) {
  var i = Wt(ct++, 3);
  !le.__s && Wi(i.__H, e) && (i.__ = t, i.u = e, ce.__H.__h.push(i));
}
function ee(t) {
  return pt = 5, He(function() {
    return { current: t };
  }, []);
}
function He(t, e) {
  var i = Wt(ct++, 7);
  return Wi(i.__H, e) && (i.__ = t(), i.__H = e, i.__h = t), i.__;
}
function re(t, e) {
  return pt = 8, He(function() {
    return t;
  }, e);
}
function Sa() {
  for (var t; t = Yi.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(xt), e.__h.some(Ut), e.__h = [];
    } catch (i) {
      e.__h = [], le.__e(i, t.__v);
    }
  }
}
le.__b = function(t) {
  ce = null, gi && gi(t);
}, le.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), wi && wi(t, e);
}, le.__r = function(t) {
  bi && bi(t), ct = 0;
  var e = (ce = t.__c).__H;
  e && (Pt === ce ? (e.__h = [], ce.__h = [], e.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (e.__h.some(xt), e.__h.some(Ut), e.__h = [], ct = 0)), Pt = ce;
}, le.diffed = function(t) {
  vi && vi(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Yi.push(e) !== 1 && fi === le.requestAnimationFrame || ((fi = le.requestAnimationFrame) || Ma)(Sa)), e.__H.__.some(function(i) {
    i.u && (i.__H = i.u, i.u = void 0);
  })), Pt = ce = null;
}, le.__c = function(t, e) {
  e.some(function(i) {
    try {
      i.__h.some(xt), i.__h = i.__h.filter(function(n) {
        return !n.__ || Ut(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], le.__e(n, i.__v);
    }
  }), ji && ji(t, e);
}, le.unmount = function(t) {
  xi && xi(t);
  var e, i = t.__c;
  i && i.__H && (i.__H.__.some(function(n) {
    try {
      xt(n);
    } catch (o) {
      e = o;
    }
  }), i.__H = void 0, e && le.__e(e, i.__v));
};
var ki = typeof requestAnimationFrame == "function";
function Ma(t) {
  var e, i = function() {
    clearTimeout(n), ki && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(i, 35);
  ki && (e = requestAnimationFrame(i));
}
function xt(t) {
  var e = ce, i = t.__c;
  typeof i == "function" && (t.__c = void 0, i()), ce = e;
}
function Ut(t) {
  var e = ce;
  t.__c = t.__(), ce = e;
}
function Wi(t, e) {
  return !t || t.length !== e.length || e.some(function(i, n) {
    return i !== t[n];
  });
}
function Gi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
class Zi extends Error {
  constructor(i, n = 60, o) {
    super(i);
    De(this, "retryAfterSeconds");
    De(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = o;
  }
}
class Gt extends Error {
  constructor(i, n, o, r) {
    super(i);
    De(this, "status");
    De(this, "code");
    De(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = o, this.retryAfterSeconds = r;
  }
}
function Na(t, e) {
  const i = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(i) && i > 0 ? Math.floor(i) : e;
}
async function Nt(t, e) {
  const i = await t.json().catch(() => null);
  qi(t.status, i, e, t.headers.get("Retry-After"));
}
function qi(t, e, i, n) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, r = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || i, c = Na((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new Zi(r, c, o) : new Gt(r, t, o, c);
}
const $t = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
function za(t, e) {
  const n = `pitaj_widget_session_v2:${(e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "")}:${t}`;
  rt.delete(n);
  try {
    localStorage.removeItem(n);
  } catch {
  }
}
async function Re(t, e) {
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = `pitaj_widget_session_v2:${i}:${t}`;
  if (rt.has(n)) return rt.get(n);
  try {
    const c = localStorage.getItem(n);
    if (c)
      return rt.set(n, c), c;
  } catch {
  }
  const o = $t.get(n);
  if (o) return o;
  const r = (async () => {
    const c = await fetch(`${i}/api/widget/${encodeURIComponent(t)}/v2/session`, {
      method: "POST",
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!c.ok) throw new Error("Nije moguće pokrenuti sigurnu sesiju.");
    const s = await c.json();
    if (typeof s.token != "string" || !/^[a-f0-9]{64}$/.test(s.token)) throw new Error("Neispravan odgovor sesije.");
    rt.set(n, s.token);
    try {
      localStorage.setItem(n, s.token);
    } catch {
    }
    return s.token;
  })();
  $t.set(n, r);
  try {
    return await r;
  } finally {
    $t.delete(n);
  }
}
async function Aa(t, e, i, n, o) {
  if (!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1) throw new Error("Razgovor nije dostupan.");
  const r = (o || window.location.origin).replace(/\/$/, ""), c = await Re(t, o), s = await fetch(`${r}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/action-dismissals`, {
    method: "POST",
    cache: "no-store",
    headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${c}` },
    body: JSON.stringify({ action_id: i, dismissal_uuid: n })
  });
  s.ok || await Nt(s, "Poruku nije moguće sačuvati.");
  const f = await s.json();
  if (typeof f.message != "string" || !f.message.trim() || f.message.length > 1020) throw new Error("Neispravan odgovor.");
  return f.message;
}
function Ca(t, e) {
  var n, o, r, c;
  const i = (o = (n = e.widget) == null ? void 0 : n.config) == null ? void 0 : o.event_key;
  return {
    widgetId: t,
    actionId: e.id,
    name: e.name,
    formId: e.form_id ?? null,
    inlineWidgetId: e.widget_id ?? ((r = e.widget) == null ? void 0 : r.id) ?? null,
    clientActionKey: ((c = e.widget) == null ? void 0 : c.type) === "action_client" && typeof i == "string" && /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(i) ? i : null
  };
}
async function Ia(t, e) {
  const i = t.body;
  if (!i)
    throw new Error("Response body is null");
  const n = i.getReader(), o = new TextDecoder("utf-8");
  let r = "";
  try {
    for (; ; ) {
      const { done: c, value: s } = await n.read();
      if (c)
        break;
      r += o.decode(s, { stream: !0 });
      const f = r.split(/\r?\n/);
      r = f.pop() || "";
      for (const u of f) {
        const g = u.trim();
        if (!(!g || g.startsWith(":")) && g.startsWith("data:")) {
          const b = g.slice(5).trim();
          if (b === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const p = JSON.parse(b);
            if (typeof p == "string")
              e.onChunk(p);
            else if (p && typeof p == "object") {
              (p.chunk || p.token || p.content || p.text) && e.onChunk(p.chunk || p.token || p.content || p.text), p.sources && Array.isArray(p.sources) && e.onSources && e.onSources(p.sources);
              const v = p.suggestedQuestions ?? p.suggested_questions;
              Array.isArray(v) && v.length > 0 && e.onSuggestedQuestions && e.onSuggestedQuestions(v), e.onConversationId && (p.conversation_id !== void 0 || p.conversationId !== void 0) && e.onConversationId(
                p.conversation_id ?? p.conversationId
              );
              const h = p.ticket_number ?? p.ticketNumber;
              e.onTicketNumber && h !== void 0 && h !== null && String(h).trim() !== "" && String(h).trim() !== "undefined" && String(h).trim() !== "null" && e.onTicketNumber(
                String(h).trim()
              ), e.onActionTrigger && p.triggered_action && typeof p.triggered_action == "object" && e.onActionTrigger(p.triggered_action);
            }
          } catch {
            e.onChunk(b);
          }
        }
      }
    }
    e.onDone && e.onDone();
  } catch (c) {
    if (e.onError)
      e.onError(c);
    else
      throw c;
  }
}
function Qi(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function Zt(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Ta(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return Zt(e.of(t));
  } catch {
    return null;
  }
}
function La() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const i = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (i) {
        const n = JSON.parse(i);
        t = Qi(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = Zt(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Ta(t)), { code: t, name: e };
}
const yi = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Pa(t, e, i, n) {
  var f;
  const o = (n == null ? void 0 : n.action) || (i && i.length > 0 ? i[0] : null);
  if (o && e.onActionTrigger) {
    const b = (!!(o.widget_id || o.widget || n != null && n.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let p = 0; p < b.length; p++) {
      const v = b[p] + (p < b.length - 1 ? " " : "");
      e.onChunk(v), await new Promise((h) => setTimeout(h, 20));
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
  const r = `${yi[Math.floor(Math.random() * yi.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, c = ((f = n == null ? void 0 : n.content) == null ? void 0 : f.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = r.split(" ");
  for (let u = 0; u < s.length; u++) {
    const g = s[u] + (u < s.length - 1 ? " " : "");
    e.onChunk(g), await new Promise((b) => setTimeout(b, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && c.length > 0 && e.onSuggestedQuestions(c), e.onDone && e.onDone();
}
async function $a(t) {
  const {
    companyId: e,
    conversationId: i,
    visitorId: n,
    message: o,
    forceNewConversation: r,
    apiUrl: c,
    mockMode: s,
    visitorName: f,
    visitorEmail: u,
    visitorPhone: g,
    visitorCountryCode: b,
    visitorCountryName: p,
    actions: v,
    previewDraft: h,
    callbacks: y
  } = t;
  if (s || !e || e === "default") {
    await Pa(o, y, v, h);
    return;
  }
  const A = (c || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), I = La(), M = Qi(b) ?? I.code ?? void 0, $ = Zt(p) ?? I.name ?? void 0, W = await Re(e, c), d = `${A}/api/widget/${encodeURIComponent(e)}/v2/chat`, T = i && !i.startsWith("conv-") ? parseInt(i, 10) : null, N = await fetch(d, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${W}`,
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: T,
      force_new_conversation: r === !0,
      visitor_id: n,
      visitor_language: t.visitorLanguage || void 0,
      visitor_name: f || void 0,
      visitor_email: u || void 0,
      visitor_phone: g || void 0,
      visitor_country_code: M,
      visitor_country_name: $
    })
  });
  if (N.ok || await Nt(N, `API greška (${N.status})`), (N.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Ia(N, y);
  else {
    const D = await N.json(), S = D.answer || D.message || "";
    D.conversation_id !== void 0 && y.onConversationId && y.onConversationId(D.conversation_id);
    const L = D.ticket_number ?? D.ticketNumber;
    if (L != null && String(L).trim() !== "" && String(L).trim() !== "undefined" && String(L).trim() !== "null" && y.onTicketNumber && y.onTicketNumber(String(L).trim()), D.triggered_action && y.onActionTrigger && y.onActionTrigger(D.triggered_action), S && S.trim()) {
      const Y = S.split(" ");
      for (let O = 0; O < Y.length; O++) {
        const te = Y[O] + (O < Y.length - 1 ? " " : "");
        y.onChunk(te), await new Promise((pe) => setTimeout(pe, 15));
      }
    }
    const C = D.suggestedQuestions ?? D.suggested_questions;
    Array.isArray(C) && C.length > 0 && y.onSuggestedQuestions && y.onSuggestedQuestions(C), y.onDone && y.onDone();
  }
}
async function Rt(t) {
  const { widgetId: e, visitorId: i, apiUrl: n, status: o, page: r = 1, perPage: c = 15 } = t, s = (n || "").replace(/\/$/, ""), f = new URLSearchParams({
    page: String(r),
    per_page: String(c)
  });
  o && f.set("status", o);
  const u = await Re(e, n), g = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/v2/tickets?${f}`, { headers: { Authorization: `Bearer ${u}` } }), b = await g.json().catch(() => null);
  if (!g.ok) throw new Error(b && "error" in b ? b.error : "Tikete nije moguće učitati.");
  const p = (b == null ? void 0 : b.data) || [], v = p.map((A) => ({
    id: A.id,
    ticketNumber: A.ticket_number,
    conversationId: A.conversation_id,
    isResolved: !!A.is_resolved,
    updatedAt: A.updated_at,
    messages: (A.messages || []).map((I) => {
      var M;
      return {
        id: String(I.id),
        content: I.content,
        sender: I.role === "user" ? "user" : "ai",
        timestamp: I.created_at,
        status: "sent",
        suggestedQuestions: ((M = I.meta_json) == null ? void 0 : M.suggested_questions) || void 0
      };
    })
  })), h = b == null ? void 0 : b.meta, y = (h == null ? void 0 : h.has_more) !== void 0 ? !!h.has_more : p.length >= c;
  return {
    tickets: v,
    hasMore: y,
    total: h == null ? void 0 : h.total,
    currentPage: (h == null ? void 0 : h.current_page) ?? r
  };
}
async function Ea(t, e, i) {
  return (await Rt({ widgetId: t, visitorId: e, apiUrl: i, page: 1, perPage: 50 })).tickets;
}
async function Da(t, e, i, n, o) {
  const r = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !r)
    return await new Promise((u) => setTimeout(u, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: i };
  const c = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await Re(t, n), f = await fetch(`${c}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${s}` },
    body: JSON.stringify({ satisfaction: i })
  });
  if (!f.ok) {
    const g = (await f.json().catch(() => ({}))).error || (f.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), b = new Error(g);
    throw b.status = f.status, b;
  }
  return await f.json();
}
function _i(t, e = "bs", i = ["bs"]) {
  var u, g;
  const n = (i && i.length > 0 ? i : [e]).map((b) => b.trim().toLowerCase()), o = (e || "bs").trim().toLowerCase();
  let r = "";
  if (t === "website" ? typeof document < "u" && (r = ((u = document.documentElement) == null ? void 0 : u.lang) || ((g = document.querySelector("html")) == null ? void 0 : g.getAttribute("lang")) || "") : typeof navigator < "u" && (r = navigator.language || navigator.languages && navigator.languages[0] || ""), !r || typeof r != "string")
    return o;
  let f = r.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (f === "hr" || f === "sr") && !n.includes(f) && n.includes("bs") && (f = "bs"), n.includes(f) ? f : o;
}
function tr(t, e, i) {
  const n = t.current_step;
  return t.run_id !== e.run_id || t.status !== "waiting_input" || (n == null ? void 0 : n.type) !== "wait_submission" || Object.prototype.hasOwnProperty.call(n, "widget") && (!n.widget || n.widget.id !== n.widget_id) || n.form_revision != null && n.form_revision !== e.form_revision ? null : n.widget_id === i && n.display_node_id === e.display_node_id ? n.node_id : null;
}
function Si(t, e) {
  var r;
  const i = t.current_step;
  if (!i) return null;
  const n = t.status === "waiting_display" && i.type === "show_widget" ? i.node_id : t.status === "waiting_input" && i.type === "wait_submission" ? i.display_node_id : null;
  if (!n) return null;
  const o = Object.prototype.hasOwnProperty.call(i, "widget") ? i.widget : e.find((c) => c.id === i.widget_id);
  if ((o == null ? void 0 : o.id) !== i.widget_id) return null;
  if (o && t.status === "waiting_display") {
    const c = (r = o.config) == null ? void 0 : r.function_revision, s = i.function_revision;
    if ((c || s) && (!c || !s || c !== s)) return null;
  }
  return o ? { ...o, workflow: { run_id: t.run_id, display_node_id: n, ...t.status === "waiting_input" && i.form_revision ? { form_revision: i.form_revision } : {} } } : null;
}
function Ba(t, e) {
  if (!e.workflow) return t;
  const { run_id: i, display_node_id: n } = e.workflow, o = `workflow-${i}-${n}`, r = t.messages.findIndex((c) => {
    var s, f, u, g;
    return c.id === o || ((f = (s = c.widget) == null ? void 0 : s.workflow) == null ? void 0 : f.run_id) === i && ((g = (u = c.widget) == null ? void 0 : u.workflow) == null ? void 0 : g.display_node_id) === n;
  });
  if (r >= 0) {
    const c = t.messages[r];
    if (JSON.stringify(c.widget) === JSON.stringify(e)) return t;
    const s = [...t.messages];
    return s[r] = { ...c, widget: e }, { ...t, messages: s };
  }
  return { ...t, messages: [...t.messages, { id: o, content: "", sender: "ai", timestamp: (/* @__PURE__ */ new Date()).toISOString(), widget: e }] };
}
function Ha(t, e) {
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
async function Ua(t, e, i, n, o, r) {
  if (!(!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1))
    try {
      const c = (r || window.location.origin).replace(/\/$/, ""), s = await Re(t, r);
      await fetch(`${c}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/client-action-results`, {
        method: "POST",
        cache: "no-store",
        headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${s}` },
        body: JSON.stringify({ action_id: i, event_uuid: n, state: o })
      });
    } catch {
    }
}
const Mi = "pitaj_io_visitor_id", Ra = "chat_direkt_visitor_id", Fa = "pitaj_io_visitor_meta", Oa = "chat_direkt_visitor_meta";
function qt(t) {
  return `pitaj_io_convs_v2_${t}`;
}
function Va() {
  try {
    let t = localStorage.getItem(Mi) || localStorage.getItem(Ra);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Mi, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Ka = [];
function Ya(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function Wa(t) {
  return t.filter((e) => !Ya(e)).map((e) => {
    const i = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: i, messages: (e.messages || []).map((n) => {
      var o, r;
      return ((o = n.widget) == null ? void 0 : o.type) === "action_client" && ((r = n.widget.config) == null ? void 0 : r.client_action_state) === "pending" ? { ...n, widget: { ...n.widget, config: { ...n.widget.config, client_action_state: "unknown" } } } : n;
    }) };
  });
}
function Ni(t) {
  try {
    const e = localStorage.getItem(qt(t));
    if (e) {
      const i = JSON.parse(e);
      if (Array.isArray(i))
        return Wa(i);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return Ka;
}
function Ga(t, e) {
  try {
    localStorage.setItem(qt(t), JSON.stringify(e));
  } catch (i) {
    console.warn("[Pitaj.io] Error saving to localStorage", i);
  }
}
function zi(t) {
  var o, r, c, s, f, u, g, b, p, v, h, y;
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
    const A = (e == null ? void 0 : e.simulatedUserMessage) || ((r = e == null ? void 0 : e.action) == null ? void 0 : r.trigger_hint) || "Pokreni akciju", M = !!((c = e == null ? void 0 : e.action) != null && c.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", $ = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((f = e == null ? void 0 : e.action) == null ? void 0 : f.name) || "Pregled akcije",
        preview: M,
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
            content: M,
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
    const A = (e == null ? void 0 : e.simulatedUserMessage) || ((u = e == null ? void 0 : e.action) == null ? void 0 : u.trigger_hint) || "Pokreni akciju", I = ((g = e == null ? void 0 : e.form) == null ? void 0 : g.name) || ((b = e == null ? void 0 : e.action) == null ? void 0 : b.name) || "Forma", M = ((p = e == null ? void 0 : e.form) == null ? void 0 : p.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: I,
        preview: M,
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
            content: M,
            sender: "ai",
            timestamp: i,
            status: "sent"
          }
        ]
      }
    ];
  }
  if (n === "dismissed") {
    const A = (e == null ? void 0 : e.simulatedUserMessage) || ((v = e == null ? void 0 : e.action) == null ? void 0 : v.trigger_hint) || "Pokreni akciju", I = ((h = e == null ? void 0 : e.action) == null ? void 0 : h.dismiss_message) || "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
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
function Za(t, e) {
  var Se, x, K, G, ue, me, Ee, Fe, Oe, Ve, Ke, Ye, We, Ge, Ze, qe, Qe, Je, Xe, et, tt, it, _;
  const i = !!(t.isPreview || t.previewDraft), [n, o] = U(t), [r, c] = U((e == null ? void 0 : e.startOpen) ?? !1), [s, f] = U(
    (e == null ? void 0 : e.initialScreen) ?? (i ? "conversation" : "new-conversation")
  ), [u, g] = U(
    () => i ? zi(t) : Ni(t.companyId)
  ), [b, p] = U(() => {
    if (i) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const l = Ni(t.companyId);
      return l.length > 0 ? l[0].id : null;
    }
    return null;
  }), [v, h] = U(!1), [y, A] = U(null), [I, M] = U(null), [$, W] = U(!1), [d, T] = U(
    () => {
      var l, m, w;
      return _i(
        (l = t.content) == null ? void 0 : l.languageSource,
        ((m = t.content) == null ? void 0 : m.defaultLanguage) || "bs",
        ((w = t.content) == null ? void 0 : w.supportedLanguages) || ["bs"]
      );
    }
  );
  q(() => {
    var m, w, P;
    const l = _i(
      (m = n.content) == null ? void 0 : m.languageSource,
      ((w = n.content) == null ? void 0 : w.defaultLanguage) || "bs",
      ((P = n.content) == null ? void 0 : P.supportedLanguages) || ["bs"]
    );
    T(l);
  }, [
    (Se = n.content) == null ? void 0 : Se.languageSource,
    (x = n.content) == null ? void 0 : x.defaultLanguage,
    (K = n.content) == null ? void 0 : K.supportedLanguages
  ]);
  const N = ee(Va()), [E, D] = U(() => {
    try {
      const l = localStorage.getItem(Fa) || localStorage.getItem(Oa);
      if (l) {
        const m = JSON.parse(l), w = {};
        return typeof m.name == "string" && (w.name = m.name), typeof m.email == "string" && (w.email = m.email), typeof m.phone == "string" && (w.phone = m.phone), w;
      }
    } catch (l) {
      console.warn("[Pitaj.io] Error reading visitor meta", l);
    }
    return {};
  }), S = ee(e == null ? void 0 : e.emitEvent);
  S.current = e == null ? void 0 : e.emitEvent;
  const L = ee(e == null ? void 0 : e.onActionTrigger);
  L.current = e == null ? void 0 : e.onActionTrigger;
  const C = ee(/* @__PURE__ */ new Map());
  q(() => () => {
    C.current.forEach((l) => l()), C.current.clear();
  }, []);
  const Y = re((l, m) => {
    const w = Number.isFinite(l) ? Math.max(1, Math.floor(l)) : 60;
    A((P) => P === null ? w : Math.max(P, w)), M(m || `Previše zahtjeva. Molimo sačekajte ${w}s.`);
  }, []), O = re((l) => {
    if (l) {
      if (l === "WIDGET_CHAT_DISABLED") {
        o((m) => ({ ...m, chatAvailable: !1 })), M("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (l === "WIDGET_TRANSCRIBE_DISABLED") {
        o((m) => ({ ...m, transcribeAvailable: !1 })), M("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      l === "WIDGET_FORMS_DISABLED" && (o((m) => ({ ...m, formsAvailable: !1, formsEnabled: !1 })), M("Forme su trenutno privremeno nedostupne."));
    }
  }, []), te = re((l, m = "Došlo je do greške pri obradi zahtjeva.") => {
    var P, z, X, ae;
    if (l instanceof Zi) {
      Y(l.retryAfterSeconds, l.message), (P = S.current) == null || P.call(S, "error_occurred", { code: l.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (l instanceof Gt) {
      if (l.code === "WIDGET_SESSION_INVALID" || l.code === "WIDGET_SESSION_REQUIRED") {
        W(!0), M("Sesija je istekla. Pokrenite novu sesiju za nastavak razgovora.");
        return;
      }
      if (l.code === "COUNTRY_BLOCKED") {
        o((R) => ({ ...R, chatAvailable: !1 })), M(l.message || "Pristup nije dozvoljen u vašoj regiji."), (z = S.current) == null || z.call(S, "error_occurred", { status: l.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      O(l.code), M(l.message || m), (X = S.current) == null || X.call(S, "error_occurred", { status: l.status, code: l.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let w = l instanceof Error ? l.message : m;
    !w || w === "Failed to fetch" || w.includes("NetworkError") ? w = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : w.includes("404") ? w = "Traženi razgovor ili podaci nisu pronađeni." : (w.includes("500") || w.includes("502") || w.includes("503")) && (w = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), M(w || m), (ae = S.current) == null || ae.call(S, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [Y, O]), pe = re(() => {
    try {
      const l = qt(n.companyId), m = localStorage.getItem(l);
      m && localStorage.setItem(`${l}:archive:${Date.now()}`, m);
    } catch {
    }
    za(n.companyId, n.apiUrl), g([]), p(null), W(!1), M(null), f("new-conversation");
  }, [n.companyId, n.apiUrl]);
  q(() => {
    n.isPreview || n.mockMode || n.companyId === "preview" || Ga(n.companyId, u);
  }, [u, n.companyId, n.isPreview, n.mockMode]), q(() => {
    if (n.isPreview || n.previewDraft) {
      const l = zi(n);
      g(l), p("preview-conv-1"), f("conversation");
    }
  }, [
    n.isPreview,
    (G = n.previewDraft) == null ? void 0 : G.revision,
    (ue = n.previewDraft) == null ? void 0 : ue.initialStep,
    (Ee = (me = n.previewDraft) == null ? void 0 : me.action) == null ? void 0 : Ee.id,
    (Oe = (Fe = n.previewDraft) == null ? void 0 : Fe.action) == null ? void 0 : Oe.name,
    (Ke = (Ve = n.previewDraft) == null ? void 0 : Ve.action) == null ? void 0 : Ke.trigger_hint,
    (We = (Ye = n.previewDraft) == null ? void 0 : Ye.action) == null ? void 0 : We.dismiss_message,
    (Ze = (Ge = n.previewDraft) == null ? void 0 : Ge.form) == null ? void 0 : Ze.id,
    (Qe = (qe = n.previewDraft) == null ? void 0 : qe.form) == null ? void 0 : Qe.name,
    (Xe = (Je = n.previewDraft) == null ? void 0 : Je.form) == null ? void 0 : Xe.success_message,
    (tt = (et = n.previewDraft) == null ? void 0 : et.widget) == null ? void 0 : tt.id,
    (_ = (it = n.previewDraft) == null ? void 0 : it.widget) == null ? void 0 : _.type
  ]), q(() => {
    if (y === null || y <= 0) return;
    const l = setInterval(() => {
      A((m) => m && m > 1 ? m - 1 : null);
    }, 1e3);
    return () => clearInterval(l);
  }, [y]), q(() => {
    if (!n.companyId || n.mockMode) return;
    let l = !0;
    return Ea(n.companyId, N.current, n.apiUrl).then((m) => {
      !l || !m || m.length === 0 || g((w) => {
        let P = !1;
        const z = w.map((X) => {
          const ae = m.find((R) => String(R.id) === X.id);
          return ae && ae.ticketNumber && X.ticketNumber !== ae.ticketNumber ? (P = !0, { ...X, ticketNumber: ae.ticketNumber }) : X;
        });
        return P ? z : w;
      });
    }).catch(() => {
    }), () => {
      l = !1;
    };
  }, [n.companyId, n.apiUrl, n.mockMode]);
  const Q = u.find((l) => l.id === b) || null, J = u.reduce((l, m) => l + (m.unread || 0), 0), k = re((l) => {
    c((m) => {
      var w;
      return m === l ? m : ((w = S.current) == null || w.call(S, l ? "widget_opened" : "widget_closed"), l);
    });
  }, []), V = re((l) => {
    f((m) => {
      var w;
      return m === l ? m : ((w = S.current) == null || w.call(S, "screen_changed", { screen: l }), l);
    });
  }, []), ie = re((l) => {
    var m;
    p(l.id), g((w) => w.some((z) => z.id === l.id) ? w.map((z) => z.id === l.id ? { ...z, ...l, unread: 0, status: l.status || "active" } : z) : [{ ...l, unread: 0, status: l.status || "active" }, ...w]), f("conversation"), (m = S.current) == null || m.call(S, "conversation_selected", { conversationId: l.id });
  }, []), se = re(() => {
    var l;
    g(
      (m) => m.map((w) => w.id === b ? { ...w, status: "ended" } : w)
    ), p(null), f("new-conversation"), (l = S.current) == null || l.call(S, "conversation_ended", { conversationId: b });
  }, [b]), ge = re((l) => {
    g((m) => m.filter((w) => w.id !== l)), p((m) => m === l ? null : m), b === l && f("new-conversation");
  }, [b]), be = re((l) => {
    var X;
    if (n.chatAvailable === !1) {
      M("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (y !== null) {
      M(`Previše zahtjeva. Molimo sačekajte ${y}s.`);
      return;
    }
    const m = "conv-" + Date.now(), w = (/* @__PURE__ */ new Date()).toISOString(), P = l ? l.length > 40 ? l.slice(0, 40) + "…" : l : "Novo ćaskanje", z = {
      id: m,
      title: P,
      preview: l || "Započeto novo ćaskanje",
      timestamp: w,
      unread: 0,
      messages: l ? [
        {
          id: "msg-" + Date.now(),
          content: l,
          sender: "user",
          timestamp: w,
          status: "sent"
        }
      ] : []
    };
    g((ae) => [z, ...ae]), p(m), f("conversation"), (X = S.current) == null || X.call(S, "conversation_started", { conversationId: m, initialMessage: l }), l && he(m, l, [z.messages[0]], !0);
  }, [n.apiUrl, n.chatAvailable, n.companyId, n.mockMode, y, E]), he = async (l, m, w, P = !1) => {
    var ae;
    h(!0), M(null);
    const z = "ai-msg-" + Date.now(), X = {
      id: z,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    g(
      (R) => R.map((Z) => Z.id !== l ? Z : {
        ...Z,
        preview: m,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...Z.messages.filter((H) => H.id !== z), X]
      })
    ), (ae = S.current) == null || ae.call(S, "stream_started", { conversationId: l });
    try {
      await $a({
        companyId: n.companyId,
        conversationId: l,
        visitorId: N.current,
        visitorLanguage: d,
        message: m,
        forceNewConversation: P || l.startsWith("conv-"),
        apiUrl: n.apiUrl,
        mockMode: n.mockMode || n.isPreview,
        visitorName: E.name,
        visitorEmail: E.email,
        visitorPhone: E.phone,
        actions: n.actions,
        previewDraft: n.previewDraft,
        callbacks: {
          onConversationId: (R) => {
            const Z = l, H = String(R);
            l = H, p(H), g(
              (j) => j.map((F) => F.id === Z || F.messages.some((we) => we.id === z) ? { ...F, id: H } : F)
            );
          },
          onTicketNumber: (R) => {
            const Z = R && String(R).trim() !== "" && String(R).trim() !== "undefined" && String(R).trim() !== "null" ? String(R).trim() : null;
            Z && g(
              (H) => H.map((j) => j.id === l || j.messages.some((we) => we.id === z) ? { ...j, ticketNumber: Z } : j)
            );
          },
          onActionTrigger: (R) => {
            var j, F, we;
            let Z = R.widget || R.triggered_widget || (R.widget_id && n.widgets ? n.widgets.find((Me) => Me.id === R.widget_id) : null) || null, H;
            if ((j = C.current.get(z)) == null || j(), C.current.delete(z), (Z == null ? void 0 : Z.type) === "action_client" && ((F = Z.config) == null ? void 0 : F.wait_for_response) === !0 && !n.isPreview && !n.mockMode) {
              Z = { ...Z, config: { ...Z.config, client_action_state: "pending" } };
              const Me = crypto.randomUUID(), ve = Ha(15e3, (Ce) => {
                Ua(n.companyId, l, Number(R.id), Me, Ce, n.apiUrl), C.current.get(z) === ve.cancel && C.current.delete(z), g((ke) => ke.map((ye) => ({ ...ye, messages: ye.messages.map((Ie) => {
                  var dt;
                  return Ie.id === z && ((dt = Ie.widget) == null ? void 0 : dt.type) === "action_client" ? { ...Ie, widget: { ...Ie.widget, config: { ...Ie.widget.config, client_action_state: Ce } } } : Ie;
                }) })));
              });
              C.current.set(z, ve.cancel), H = ve.complete;
            }
            Z && g(
              (Me) => Me.map((ve) => ve.id === l || ve.messages.some((ke) => ke.id === z) ? {
                ...ve,
                messages: ve.messages.map(
                  (ke) => ke.id === z ? { ...ke, widget: Z } : ke
                )
              } : ve)
            ), (we = L.current) == null || we.call(L, Z ? { ...R, widget: Z } : R, H);
          },
          onChunk: (R) => {
            g(
              (Z) => Z.map((H) => H.id === l || H.messages.some((F) => F.id === z) ? {
                ...H,
                messages: H.messages.map(
                  (F) => F.id === z ? { ...F, content: F.content + R } : F
                )
              } : H)
            );
          },
          onSources: (R) => {
            g(
              (Z) => Z.map((H) => H.id === l || H.messages.some((F) => F.id === z) ? {
                ...H,
                messages: H.messages.map(
                  (F) => F.id === z ? { ...F, sources: R } : F
                )
              } : H)
            );
          },
          onSuggestedQuestions: (R) => {
            g(
              (Z) => Z.map((H) => H.id === l || H.messages.some((F) => F.id === z) ? {
                ...H,
                messages: H.messages.map(
                  (F) => F.id === z ? { ...F, suggestedQuestions: R } : F
                )
              } : H)
            );
          },
          onDone: () => {
            var R;
            g(
              (Z) => Z.map((H) => {
                var Ce, ke;
                if (!(H.id === l || H.messages.some((ye) => ye.id === z))) return H;
                const F = H.messages.find((ye) => ye.id === z), we = (Ce = F == null ? void 0 : F.widget) == null ? void 0 : Ce.name, Me = (ke = F == null ? void 0 : F.content) == null ? void 0 : ke.trim(), ve = Me ? Me.slice(0, 70) : we ? `[${we}]` : H.preview;
                return {
                  ...H,
                  preview: ve,
                  messages: H.messages.map(
                    (ye) => ye.id === z ? { ...ye, isStreaming: !1 } : ye
                  )
                };
              })
            ), h(!1), (R = S.current) == null || R.call(S, "stream_completed", { conversationId: l });
          },
          onError: (R) => {
            console.error("[Pitaj.io] Stream error:", R), M(R.message || "Došlo je do greške u komunikaciji."), h(!1);
          }
        }
      });
    } catch (R) {
      h(!1), te(R, "Greška pri slanju poruke.");
    }
  }, xe = re((l) => {
    var z;
    const m = l.trim();
    if (!m || v || n.chatAvailable === !1 || y !== null) return;
    if (!b) {
      be(m);
      return;
    }
    const P = {
      id: "usr-msg-" + Date.now(),
      content: m,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    g(
      (X) => X.map((ae) => ae.id !== b ? ae : {
        ...ae,
        preview: m,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...ae.messages, P]
      })
    ), (z = S.current) == null || z.call(S, "message_sent", { conversationId: b, content: m }), he(b, m, Q ? Q.messages : []);
  }, [b, v, be, Q, n.chatAvailable, n.companyId, n.apiUrl, n.mockMode, y]), de = re(
    async (l, m, w) => {
      var P;
      if (!n.mockMode)
        try {
          await Da(
            n.companyId,
            l,
            m,
            n.apiUrl,
            n.mockMode
          );
        } catch (z) {
          console.error("[Pitaj.io] Failed to submit rating:", z);
          const X = (z == null ? void 0 : z.status) === 404 ? "Razgovor ili tiket više nije dostupan." : z != null && z.message && !z.message.includes("failed") && !z.message.includes("404") ? z.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(X);
        }
      g(
        (z) => z.map(
          (X) => X.id === l ? { ...X, satisfaction: m, ratingScore: w ?? X.ratingScore } : X
        )
      ), (P = S.current) == null || P.call(S, "rating_submitted", {
        conversationId: l,
        satisfaction: m,
        score: w
      });
    },
    [n.companyId, n.apiUrl, n.mockMode]
  ), je = re(
    (l, m, w = "user") => {
      const P = m.trim();
      if (!P) return;
      const z = (/* @__PURE__ */ new Date()).toISOString(), X = `conv-${Date.now()}`, ae = typeof l == "string" && l.trim().length > 0 ? l : X, R = {
        id: `local-${w}-msg-${Date.now()}`,
        content: P,
        sender: w,
        timestamp: z,
        status: "sent"
      };
      g(
        (Z) => Z.some((H) => H.id === ae) ? Z.map((H) => H.id !== ae ? H : {
          ...H,
          preview: P.length > 70 ? `${P.slice(0, 70)}…` : P,
          timestamp: z,
          messages: [...H.messages, R]
        }) : [
          {
            id: ae,
            title: "Forma",
            preview: P.length > 70 ? `${P.slice(0, 70)}…` : P,
            timestamp: z,
            unread: 0,
            messages: [R],
            status: "active"
          },
          ...Z
        ]
      ), p(ae), f("conversation");
    },
    []
  ), fe = re((l, m) => {
    m.workflow && g((w) => w.map((P) => P.id === l ? Ba(P, m) : P));
  }, []), ze = (l) => {
    var m;
    return !!((m = l.messages) != null && m.some((w) => w.sender === "ai"));
  };
  return {
    config: n,
    setConfig: o,
    isOpen: r,
    setIsOpen: k,
    screen: s,
    setScreen: V,
    conversations: u,
    activeConversation: Q,
    activeConversationId: b,
    visitorContact: E,
    visitorId: N.current,
    activeConversationHasReply: Q ? ze(Q) : !1,
    totalUnread: J,
    isStreaming: v,
    rateLimitTimer: y,
    errorBanner: I,
    sessionInvalid: $,
    resetSession: pe,
    setErrorBanner: M,
    activeLanguage: d,
    setActiveLanguage: T,
    selectConversation: ie,
    startNewConversation: be,
    endConversation: se,
    deleteConversation: ge,
    sendUserMessage: xe,
    submitSatisfaction: de,
    appendConversationMessage: je,
    appendWorkflowWidget: fe,
    handleApiError: te
  };
}
let Et = null, Ji = null;
function Ai(t, e) {
  e === null && t !== null && Et !== null && Et !== t || (Et = e ? t : null, Ji = e);
}
function Pe() {
  return Ji;
}
function Qt(t, e) {
  let i = null;
  const n = () => i || (i = t().then((o) => {
    const r = e ? e(o) : o.default;
    if (!r)
      throw new Error("Lazy component not found");
    return r;
  }));
  return function(r) {
    const [c, s] = U(null);
    return q(() => {
      let f = !0;
      return n().then((u) => {
        f && s(() => u);
      }).catch((u) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", u);
      }), () => {
        f = !1;
      };
    }, []), c ? /* @__PURE__ */ a(c, { ...r }) : /* @__PURE__ */ a("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function qa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ a("path", { d: "M5 3v4" }),
    /* @__PURE__ */ a("path", { d: "M19 17v4" }),
    /* @__PURE__ */ a("path", { d: "M3 5h4" }),
    /* @__PURE__ */ a("path", { d: "M17 19h4" })
  ] });
}
function Xi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ a("path", { d: "M12 19V5" })
  ] });
}
function Qa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ a("path", { d: "M19 12H5" })
  ] });
}
function Le({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ a("path", { d: "m6 6 12 12" })
  ] });
}
function Ja({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function ir({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 5v14" }),
    /* @__PURE__ */ a("path", { d: "M5 12h14" })
  ] });
}
function wt({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M20 6 9 17l-5-5" }) });
}
function Xa({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function en({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v6" }),
    /* @__PURE__ */ a("path", { d: "M9 11h6" })
  ] });
}
function ea({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function tn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ a("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function an({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function ar({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] });
}
function nn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ a("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ a("path", { d: "M12 7v5l4 2" })
  ] });
}
function rn({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ a("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ a("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function on({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function ta({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ a("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function sn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ a("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function ia({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ a("path", { d: "M10 9H8" }),
    /* @__PURE__ */ a("path", { d: "M16 13H8" }),
    /* @__PURE__ */ a("path", { d: "M16 17H8" })
  ] });
}
function cn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M7 10v12" }),
    /* @__PURE__ */ a("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function pn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M17 14V2" }),
    /* @__PURE__ */ a("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function aa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function nr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M8 2v4" }),
    /* @__PURE__ */ a("path", { d: "M16 2v4" }),
    /* @__PURE__ */ a("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ a("path", { d: "M3 10h18" })
  ] });
}
function rr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 16V4" }),
    /* @__PURE__ */ a("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ a("path", { d: "M20 16v4H4v-4" })
  ] });
}
function or({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m15 18-6-6 6-6" }) });
}
function sr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m9 18 6-6-6-6" }) });
}
function cr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m6 9 6 6 6-6" }) });
}
function pr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M5 12h14" }) });
}
function ln({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ a("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ a("path", { d: "M10 11v6" }),
    /* @__PURE__ */ a("path", { d: "M14 11v6" })
  ] });
}
function lr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ a("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ a("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ a("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function dr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M10 2v2" }),
    /* @__PURE__ */ a("path", { d: "M14 2v2" }),
    /* @__PURE__ */ a("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ a("path", { d: "M6 2v2" })
  ] });
}
function ur({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M15 2v19" }),
    /* @__PURE__ */ a("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M8 2v19" })
  ] });
}
function mr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ a("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ a("path", { d: "M9 17h6" }),
    /* @__PURE__ */ a("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function hr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function fr({ size: t = 14, className: e = "" }) {
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
function gr({ size: t = 14, className: e = "" }) {
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
function br({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ a("path", { d: "M7 7h.01" })
  ] });
}
function vr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function jr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ a("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ a("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function xr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ a("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ a("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function wr({ size: t = 24, className: e = "" }) {
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
function kr({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function yr({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function _r({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function Sr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ a("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function zt({ size: t = 13, className: e = "" }) {
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
function dn({ size: t = 16, className: e = "" }) {
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
const at = {
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
function B(t, e = "bs") {
  var o, r;
  const i = (e || "bs").toLowerCase().split(/[-_]/)[0], n = at[i] || at.bs || at.en;
  return n && typeof n[t] == "string" ? n[t] : ((o = at.bs) == null ? void 0 : o[t]) || ((r = at.en) == null ? void 0 : r[t]) || t;
}
function un({
  screen: t,
  activeConversation: e,
  config: i,
  language: n = "bs",
  onBack: o,
  onClose: r,
  onNewConversation: c,
  onEndConversation: s,
  onDeleteConversation: f,
  onViewHistory: u,
  onViewTickets: g
}) {
  var W;
  const [b, p] = U(!1), v = ee(null), h = t === "conversation" && e, I = h || t === "history" || t === "tickets", M = i.title || i.name || "Pitaj.io Asistent";
  q(() => {
    var N;
    const d = (E) => {
      var S, L;
      const D = ((L = (S = E.composedPath) == null ? void 0 : S.call(E)) == null ? void 0 : L[0]) || E.target;
      v.current && D && !v.current.contains(D) && p(!1);
    };
    document.addEventListener("mousedown", d);
    const T = (N = v.current) == null ? void 0 : N.getRootNode();
    return T instanceof ShadowRoot && T.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d), T instanceof ShadowRoot && T.removeEventListener("mousedown", d);
    };
  }, []), q(() => {
    p(!1);
  }, [t]);
  const $ = (d) => {
    p(!1), d == null || d();
  };
  return /* @__PURE__ */ a("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ a("div", { className: "pitaj-header-info", children: [
      I && /* @__PURE__ */ a(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": B("back", n),
          title: B("back", n),
          children: /* @__PURE__ */ a(Qa, { size: 18 })
        }
      ),
      /* @__PURE__ */ a("div", { className: `pitaj-avatar ${((W = i.content) == null ? void 0 : W.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: i.logo || i.avatar ? /* @__PURE__ */ a("img", { src: i.logo || i.avatar, alt: i.name || "AI" }) : /* @__PURE__ */ a(zt, { size: 18 }) }),
      /* @__PURE__ */ a("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-header-title", children: M }),
        h && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ a("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ a("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ a("div", { className: "pitaj-header-menu", ref: v, children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: () => p((d) => !d),
            className: `pitaj-icon-btn ${b ? "is-active" : ""}`,
            "aria-label": B("menu", n),
            "aria-expanded": b,
            title: B("menu", n),
            children: /* @__PURE__ */ a(Xa, { size: 18 })
          }
        ),
        b && /* @__PURE__ */ a("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => $(c),
              children: [
                /* @__PURE__ */ a(en, { size: 15, className: "pitaj-menu-item-icon" }),
                B("newConversation", n)
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
                /* @__PURE__ */ a(an, { size: 15, className: "pitaj-menu-item-icon" }),
                B("endConversation", n)
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
                /* @__PURE__ */ a(ln, { size: 15, className: "pitaj-menu-item-icon" }),
                B("deleteConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => $(u),
              children: [
                /* @__PURE__ */ a(nn, { size: 15, className: "pitaj-menu-item-icon" }),
                B("viewHistory", n)
              ]
            }
          ),
          /* @__PURE__ */ a("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => $(g), children: [
            /* @__PURE__ */ a(on, { size: 15, className: "pitaj-menu-item-icon" }),
            B("viewTickets", n)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": B("close", n),
          title: B("close", n),
          children: /* @__PURE__ */ a(Le, { size: 18 })
        }
      )
    ] })
  ] });
}
function na(t, e) {
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
async function mn(t, e, i, n) {
  if (!/^[1-9]\d*$/.test(e)) throw new Error("Neispravan identifikator razgovora.");
  const o = (i || window.location.origin).replace(/\/$/, ""), r = await Re(t, i), c = await fetch(`${o}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/executable-run`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${r}` },
    cache: "no-store",
    signal: n
  });
  c.ok || await Nt(c, "Nije moguće provjeriti proceduru.");
  const s = await c.json();
  return s.run === null ? null : na(s.run);
}
async function Mr(t, e, i, n) {
  if (!Number.isSafeInteger(e) || e < 1) throw new Error("Neispravan identifikator procedure.");
  const o = (i || window.location.origin).replace(/\/$/, ""), r = await Re(t, i), c = `${o}/api/widget/${encodeURIComponent(t)}/v2/executable-runs/${e}`, s = await fetch(n ? `${c}/display-ack` : c, {
    method: n ? "POST" : "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${r}`, ...n ? { "Content-Type": "application/json" } : {} },
    ...n ? { body: JSON.stringify({ node_id: n }) } : {}
  });
  s.ok || await Nt(s, "Status procedure nije dostupan.");
  const f = await s.json();
  return na(f, e);
}
function hn({ content: t }) {
  if (!t)
    return /* @__PURE__ */ a("span", {});
  const e = t.split(`
`), i = [];
  let n = !1, o = [];
  for (let r = 0; r < e.length; r++) {
    const c = e[r];
    if (c.startsWith("```")) {
      n ? (i.push(
        /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: o.join(`
`) }) }, `code-${r}`)
      ), o = [], n = !1) : n = !0;
      continue;
    }
    if (n) {
      o.push(c);
      continue;
    }
    if (c.trim().startsWith("- ") || c.trim().startsWith("* ")) {
      const f = c.trim().slice(2);
      i.push(
        /* @__PURE__ */ a("ul", { children: /* @__PURE__ */ a("li", { children: Dt(f) }) }, `ul-${r}`)
      );
      continue;
    }
    const s = c.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      i.push(
        /* @__PURE__ */ a("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ a("li", { children: Dt(s[2]) }) }, `ol-${r}`)
      );
      continue;
    }
    if (!c.trim()) {
      i.push(/* @__PURE__ */ a("div", { style: { height: "6px" } }, `sp-${r}`));
      continue;
    }
    i.push(/* @__PURE__ */ a("p", { children: Dt(c) }, `p-${r}`));
  }
  return n && o.length > 0 && i.push(
    /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ a("div", { className: "pitaj-markdown", children: i });
}
function Dt(t) {
  const e = [];
  let i = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index > i && e.push(...Ci(t.slice(i, o.index)));
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
      const c = r.slice(1, r.indexOf("](")), s = r.slice(r.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ a("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: c }, `a-${o.index}`)
      );
    }
    i = o.index + r.length;
  }
  return i < t.length && e.push(...Ci(t.slice(i))), e;
}
const fn = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, gn = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, bn = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), vn = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Ci(t) {
  const e = [];
  let i;
  for (; (i = fn.exec(t)) !== null; ) {
    const r = i[0].replace(/[.,;:!?]+$/, "");
    r && e.push({
      start: i.index,
      end: i.index + r.length,
      href: r.startsWith("www.") ? `https://${r}` : r,
      external: !0
    });
  }
  for (; (i = gn.exec(t)) !== null; )
    e.push({
      start: i.index,
      end: i.index + i[0].length,
      href: `mailto:${i[0]}`,
      external: !1
    });
  for (; (i = bn.exec(t)) !== null; ) {
    const r = i[0];
    vn.test(r) || e.push({
      start: i.index,
      end: i.index + r.length,
      href: `tel:${r.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((r, c) => r.start - c.start);
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
function ra({
  rows: t,
  fallbackQuestions: e,
  onSelect: i,
  buttonClassName: n,
  containerClassName: o,
  revealDelayMs: r = 0,
  staggerMs: c = 140
}) {
  const s = He(() => Array.isArray(t) && t.length > 0 ? t.map((v) => ({
    text: v.text.trim(),
    children: (v.children ?? []).map((h) => h.trim()).filter(Boolean)
  })).filter((v) => v.text !== "") : (e ?? []).map((v) => v.trim()).filter(Boolean).map((v) => ({ text: v, children: [] })), [e, t]), [f, u] = U(null), [g, b] = U(s.length);
  if (q(() => {
    u(null);
  }, [s]), q(() => {
    if (f) {
      b(s.length);
      return;
    }
    if (r <= 0) {
      b(s.length);
      return;
    }
    b(0);
    const v = window.setTimeout(() => {
      b(1);
      const h = window.setInterval(() => {
        b((y) => y >= s.length ? (window.clearInterval(h), y) : y + 1);
      }, Math.max(60, c));
    }, r);
    return () => {
      window.clearTimeout(v);
    };
  }, [f, s.length, r, c]), s.length === 0)
    return null;
  const p = s.find((v) => v.text === f && v.children.length > 0) ?? null;
  return p ? /* @__PURE__ */ a("div", { className: o, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => u(null),
        className: n,
        children: "Nazad"
      }
    ),
    p.children.map((v, h) => /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => i(v),
        className: n,
        children: v
      },
      `${p.text}-${h}`
    ))
  ] }) : /* @__PURE__ */ a("div", { className: o, children: s.slice(0, g).map((v, h) => /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: () => v.children.length > 0 ? u(v.text) : i(v.text),
      className: `${n} pitaj-suggestion-enter`,
      children: v.text
    },
    `${v.text}-${h}`
  )) });
}
const jn = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), xn = [".txt", ".md", ".csv", ".json", ".xml"];
function wn(t) {
  if (jn.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return xn.some((i) => e.endsWith(i));
}
async function oa(t) {
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
      const r = wn(i) ? (await i.text()).slice(0, 4e3) : null;
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
function sa(t) {
  return t.length === 0 ? "" : `

${t.map((i) => i.textContent && i.textContent.trim() !== "" ? `[Prilog: ${i.name}]
${i.textContent.trim()}` : `[Prilog: ${i.name}]`).join(`

`)}`;
}
async function kn(t) {
  const { widgetId: e, audio: i, apiUrl: n } = t, o = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), r = new FormData();
  r.append("audio", i, "dictation.webm");
  const c = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: r,
    headers: {
      Accept: "application/json"
    }
  });
  if (!c.ok) {
    const u = await c.json().catch(() => null), b = (() => {
      if (c.status !== 422 || !(u != null && u.errors) || typeof u.errors != "object")
        return null;
      for (const p of Object.values(u.errors))
        if (Array.isArray(p)) {
          for (const v of p)
            if (typeof v == "string" && v.trim() !== "")
              return v;
        }
      return null;
    })();
    qi(
      c.status,
      u,
      typeof b == "string" && b || `Transkripcija nije uspjela (${c.status})`,
      c.headers.get("Retry-After")
    );
  }
  const s = await c.json(), f = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!f)
    throw new Error("Transkripcija nije vratila tekst.");
  return f;
}
function ca({ widgetId: t, apiUrl: e, onTranscript: i, onError: n }) {
  const r = ee(null), c = ee(null), s = ee([]), f = ee(!0), u = ee(null), g = ee(null), b = ee(null), p = ee(null), v = ee(Array.from({ length: 42 }, () => 0.06)), [h, y] = U(!1), [A, I] = U(!1), [M, $] = U(
    () => Array.from({ length: 42 }, () => 0.06)
  ), W = He(() => {
    var C;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((C = navigator.mediaDevices) != null && C.getUserMedia);
  }, [t]), d = re(() => {
    c.current && (c.current.getTracks().forEach((C) => C.stop()), c.current = null);
  }, []), T = re(() => {
    var C;
    u.current !== null && (window.cancelAnimationFrame(u.current), u.current = null), (C = p.current) == null || C.disconnect(), p.current = null, b.current = null, g.current && (g.current.close(), g.current = null);
  }, []), N = re(() => {
    const C = Array.from({ length: 42 }, () => 0.06);
    v.current = C, $(C);
  }, []), E = re((C) => {
    const Y = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!Y)
      return;
    const O = new Y(), te = O.createAnalyser();
    te.fftSize = 2048, te.smoothingTimeConstant = 0.78;
    const pe = O.createMediaStreamSource(C);
    pe.connect(te), g.current = O, b.current = te, p.current = pe;
    const Q = new Uint8Array(te.fftSize), J = () => {
      const k = b.current;
      if (!k) return;
      k.getByteTimeDomainData(Q);
      let V = 0;
      for (let be = 0; be < Q.length; be += 1) {
        const he = (Q[be] - 128) / 128;
        V += he * he;
      }
      const ie = Math.sqrt(V / Q.length), se = Math.max(0.04, Math.min(1, ie * 5.2)), ge = v.current.slice(1);
      ge.push(se), v.current = ge, $(ge), u.current = window.requestAnimationFrame(J);
    };
    u.current = window.requestAnimationFrame(J);
  }, []), D = re(async () => {
    if (!(!W || A || r.current || h))
      try {
        const Y = await navigator.mediaDevices.getUserMedia({ audio: !0 }), O = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], pe = typeof MediaRecorder.isTypeSupported == "function" ? O.find((J) => MediaRecorder.isTypeSupported(J)) : void 0, Q = pe ? new MediaRecorder(Y, { mimeType: pe }) : new MediaRecorder(Y);
        s.current = [], f.current = !0, c.current = Y, r.current = Q, N(), E(Y), Q.ondataavailable = (J) => {
          J.data.size > 0 && s.current.push(J.data);
        }, Q.onstop = async () => {
          y(!1);
          const J = new Blob(s.current, { type: Q.mimeType || "audio/webm" });
          if (s.current = [], r.current = null, d(), T(), J.size === 0) {
            N();
            return;
          }
          if (!f.current) {
            N();
            return;
          }
          I(!0);
          try {
            const k = await kn({
              widgetId: t,
              apiUrl: e,
              audio: J
            });
            i(k);
          } catch (k) {
            console.error("[Pitaj.io] Dictation transcription failed", k), n == null || n(k);
          } finally {
            I(!1), N();
          }
        }, Q.onerror = () => {
          y(!1), r.current = null, d(), T(), N();
        }, Q.start(), y(!0);
      } catch (Y) {
        y(!1), d(), T(), N(), console.error("[Pitaj.io] Dictation microphone access failed", Y);
      }
  }, [e, h, A, W, n, i, N, E, d, T, t]), S = re(() => {
    const C = r.current;
    !C || !h || A || (f.current = !0, C.stop(), y(!1));
  }, [h, A]), L = re(() => {
    const C = r.current;
    !C || !h || (f.current = !1, C.stop(), y(!1));
  }, [h]);
  return q(() => () => {
    const C = r.current;
    C && C.state !== "inactive" && C.stop(), d(), T();
  }, [d, T]), {
    isSupported: W,
    isListening: h,
    isProcessing: A,
    waveformLevels: M,
    start: D,
    stopAndTranscribe: S,
    cancel: L
  };
}
const yn = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Ii() {
  const [t, e] = U(0);
  return q(() => {
    const i = setTimeout(() => e(1), 1600), n = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(i), clearTimeout(n);
    };
  }, []), /* @__PURE__ */ a("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ a(dn, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ a("span", { className: "pitaj-thinking-text", children: yn[t] }, t)
  ] });
}
const _n = Qt(
  () => import("./InlineWidgetRenderer-DdFw8DHp.js"),
  (t) => t.InlineWidgetRenderer
);
function Sn(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Mn(t) {
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
    const c = r.slice(2), s = c.indexOf(":");
    if (s < 1) return null;
    const f = c.slice(0, s).trim(), u = c.slice(s + 1).trim();
    return !f || !u ? null : { label: f, value: u };
  }).filter((r) => !!r);
  return o.length < 1 ? null : { title: i, entries: o };
}
function Nn({
  conversation: t,
  config: e,
  language: i = "bs",
  isStreaming: n,
  rateLimitCountdown: o,
  errorBanner: r,
  sessionInvalid: c,
  onResetSession: s,
  onSendMessage: f,
  onApiError: u,
  onWorkflowWidget: g,
  onSubmitSatisfaction: b
}) {
  var fe, ze, Se;
  const p = (x) => {
    if (!x.current_step || !["waiting_display", "waiting_input"].includes(x.status)) return;
    const G = Si(x, e.widgets || []);
    if (!G) {
      u == null || u(new Error("Sljedeći widget procedure nije dostupan."));
      return;
    }
    g == null || g(G);
  }, [v, h] = U(""), [y, A] = U(!1), [I, M] = U(0), $ = ee(g);
  $.current = g;
  const W = ee(u);
  W.current = u, q(() => {
    if (n || e.isPreview || e.previewDraft || e.mockMode || t.status === "ended" || !/^[1-9]\d*$/.test(t.id)) return;
    const x = new AbortController();
    return A(!1), mn(e.companyId, t.id, e.apiUrl, x.signal).then((K) => {
      var ue;
      if (x.signal.aborted || !K) return;
      const G = Si(K, e.widgets || []);
      if (!G) {
        A(!0);
        return;
      }
      (ue = $.current) == null || ue.call($, G);
    }).catch((K) => {
      var G;
      x.signal.aborted || (K instanceof Gt && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED"].includes(K.code || "") && ((G = W.current) == null || G.call(W, K)), A(!0));
    }), () => x.abort();
  }, [e.companyId, e.apiUrl, e.isPreview, e.previewDraft, e.mockMode, e.widgets, t.id, t.status, I, n]);
  const [d, T] = U(!1), [N, E] = U(null), [D, S] = U([]), L = ee(null), C = ee(null), Y = ee(null), O = e.content || {}, te = e.chatAvailable === !1, pe = e.transcribeAvailable === !1, Q = n || o !== null || te, J = ca({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: re((x) => {
      h((K) => K ? `${K} ${x}` : x);
    }, []),
    onError: re((x) => {
      u == null || u(x, "Greška pri transkripciji.");
    }, [u])
  });
  q(() => {
    const x = L.current;
    x && (x.scrollTop = x.scrollHeight);
  }, [t.messages, n]), q(() => {
    const x = C.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, 96)}px`);
  }, [v]), q(() => {
    T(!1);
  }, [O.dismissibleNotice]);
  const k = (x) => {
    S((K) => {
      const G = K.find((ue) => ue.id === x);
      if (G != null && G.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(G.previewUrl);
        } catch {
        }
      return K.filter((ue) => ue.id !== x);
    });
  }, V = (x) => {
    const K = (x ?? v).trim();
    if (!K && D.length === 0 || Q) return;
    const G = `${K}${sa(D)}`.trim();
    f(G), D.forEach((ue) => {
      if (ue.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ue.previewUrl);
        } catch {
        }
    }), S([]), x || (h(""), C.current && (C.current.style.height = "auto"));
  }, ie = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), V());
  }, se = O.messagePlaceholder || e.placeholder || B("placeholder", i), ge = ((fe = O.dismissibleNotice) == null ? void 0 : fe.trim()) || "", be = ((ze = O.footerText) == null ? void 0 : ze.trim()) || "", he = O.showSuggestedMessages === !1 || O.keepShowingSuggestedMessages !== !0 ? [] : O.suggestedMessageRows || [], xe = ((Se = [...t.messages].reverse().find((x) => x.sender === "ai")) == null ? void 0 : Se.id) ?? null, de = J.isListening, je = async (x, K) => {
    navigator.clipboard && (await navigator.clipboard.writeText(K), E(x), window.setTimeout(() => {
      E((G) => G === x ? null : G);
    }, 1600));
  };
  return /* @__PURE__ */ a("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ a("div", { ref: L, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ a("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-conversation-ticket-label", children: B("ticketNumber", i) }),
        /* @__PURE__ */ a("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ a("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ a("span", { className: "pitaj-date-label", children: B("today", i) }),
        /* @__PURE__ */ a("div", { className: "pitaj-date-line" })
      ] }),
      t.messages.map((x) => {
        const K = x.sender === "user", G = K ? Mn(x.content) : null, ue = !K && x.isStreaming && !x.content && !x.widget;
        return /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-msg-row ${K ? "user" : "ai"}${x.widget ? " has-widget" : ""}${ue ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: [
              K ? /* @__PURE__ */ a("div", { className: `pitaj-msg-bubble ${G ? "is-form-submission" : ""}`, children: G ? /* @__PURE__ */ a("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ a("div", { className: "pitaj-form-submission-title", children: G.title.toLowerCase().startsWith("forma") ? G.title : `Forma: ${G.title}` }),
                /* @__PURE__ */ a("dl", { className: "pitaj-form-submission-grid", children: G.entries.map((me) => /* @__PURE__ */ a("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ a("dt", { children: me.label }),
                  /* @__PURE__ */ a("dd", { children: me.value })
                ] }, `${x.id}-${me.label}`)) })
              ] }) : x.content }) : /* @__PURE__ */ a(_e, { children: [
                x.content ? /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ a(hn, { content: x.content }),
                  x.isStreaming && /* @__PURE__ */ a("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                x.widget && /* @__PURE__ */ a("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ a(_n, { widget: x.widget, onAction: (me) => V(me), companyId: e.companyId, apiUrl: e.apiUrl, preview: e.isPreview || e.mockMode, conversationId: t.id, onApiError: u, onWorkflowState: p }) }),
                x.isStreaming && !x.content && !x.widget && /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Ii, {}) })
              ] }),
              !K && x.sources && x.sources.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ a("span", { className: "pitaj-sources-title", children: B("sources", i) }),
                /* @__PURE__ */ a("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: x.sources.map((me) => /* @__PURE__ */ a(
                  "a",
                  {
                    href: me.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ a("span", { children: me.title }),
                      /* @__PURE__ */ a(rn, { size: 10 })
                    ]
                  },
                  me.id
                )) })
              ] }),
              !K && O.showFollowupSuggestions !== !1 && x.suggestedQuestions && x.suggestedQuestions.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-followups", children: x.suggestedQuestions.map((me, Ee) => /* @__PURE__ */ a(
                "button",
                {
                  onClick: () => V(me),
                  disabled: Q,
                  className: "pitaj-followup-chip",
                  children: me
                },
                `sug-f-${Ee}`
              )) }),
              (!x.isStreaming || !!x.content || !!x.widget) && /* @__PURE__ */ a("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ a("span", { children: Sn(x.timestamp) }),
                !K && /* @__PURE__ */ a("div", { className: "pitaj-msg-actions", children: [
                  x.id === xe && !n && /* @__PURE__ */ a(_e, { children: O.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ a(_e, { children: [
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => b == null ? void 0 : b("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": B("helpful", i),
                        title: B("helpful", i),
                        children: /* @__PURE__ */ a(cn, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => b == null ? void 0 : b("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": B("notHelpful", i),
                        title: B("notHelpful", i),
                        children: /* @__PURE__ */ a(pn, { size: 14 })
                      }
                    )
                  ] }) }),
                  x.id === xe && !n && O.copyMessageEnabled !== !1 && !!x.content && /* @__PURE__ */ a(
                    "button",
                    {
                      type: "button",
                      onClick: () => void je(x.id, x.content),
                      className: `pitaj-msg-action-btn ${N === x.id ? "is-active" : ""}`,
                      "aria-label": N === x.id ? B("copied", i) : B("copyAnswer", i),
                      title: N === x.id ? B("copied", i) : B("copyAnswer", i),
                      children: N === x.id ? /* @__PURE__ */ a(wt, { size: 14 }) : /* @__PURE__ */ a(sn, { size: 14 })
                    }
                  )
                ] }),
                K && /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ a(
                  wt,
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
      n && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Ii, {}) }) }) })
    ] }),
    y && /* @__PURE__ */ a("div", { role: "alert", children: [
      "Nije moguće učitati aktivni korak procedure. ",
      /* @__PURE__ */ a("button", { type: "button", onClick: () => M((x) => x + 1), children: "Pokušaj ponovo" })
    ] }),
    (r || o) && /* @__PURE__ */ a("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ a("div", { className: "pitaj-alert-banner", children: [
      /* @__PURE__ */ a("span", { children: o ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${o}s.` : r }),
      c && /* @__PURE__ */ a("button", { type: "button", onClick: s, children: "Pokreni novu sesiju" })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        ra,
        {
          rows: he,
          fallbackQuestions: O.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: V,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      D.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: D.map((x) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: x.previewUrl ? /* @__PURE__ */ a("img", { src: x.previewUrl, alt: x.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(ia, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: x.name, children: x.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => k(x.id),
            "aria-label": `Ukloni ${x.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Le, { size: 10 })
          }
        )
      ] }, x.id)) }),
      ge && !d && /* @__PURE__ */ a("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-dismissible-notice-text", children: ge }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => T(!0),
            "aria-label": B("close", i),
            children: /* @__PURE__ */ a(Le, { size: 12 })
          }
        )
      ] }),
      J.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: B("transcribing", i) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${de ? "is-recording" : ""}`, children: [
        O.attachmentsEnabled && /* @__PURE__ */ a(_e, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: Y,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (x) => {
                const K = x.currentTarget.files;
                if (x.currentTarget.value = "", !K || K.length === 0) return;
                const G = await oa(K);
                S((ue) => [...ue, ...G].slice(0, 3));
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
                return (x = Y.current) == null ? void 0 : x.click();
              },
              children: /* @__PURE__ */ a(aa, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: C,
            value: v,
            onInput: (x) => h(x.target.value),
            onKeyDown: ie,
            placeholder: se,
            rows: 1,
            disabled: Q,
            className: "pitaj-textarea",
            style: de ? { display: "none" } : void 0
          }
        ),
        de ? /* @__PURE__ */ a("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": B("cancel", i),
              title: B("cancel", i),
              onClick: () => J.cancel(),
              children: /* @__PURE__ */ a(Le, { size: 14 })
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ a("div", { className: "pitaj-wave", children: J.waveformLevels.map((x, K) => /* @__PURE__ */ a(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + x * 15))}px` }
            },
            `dict-wave-conv-${K}`
          )) }) }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": B("sendAudio", i),
              title: B("sendAudio", i),
              onClick: () => J.stopAndTranscribe(),
              disabled: Q || J.isProcessing,
              children: /* @__PURE__ */ a(wt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(_e, { children: [
          O.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${J.isProcessing ? "is-active" : ""}`,
              "aria-label": B("dictation", i),
              title: J.isProcessing ? B("transcribing", i) : J.isSupported ? B("dictation", i) : "Diktiranje nije podržano",
              onClick: () => J.start(),
              disabled: Q || pe || !J.isSupported || J.isProcessing,
              children: /* @__PURE__ */ a(ta, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => V(),
              disabled: Q || !v.trim() && D.length === 0,
              className: "pitaj-send-btn",
              "aria-label": B("sendMessage", i),
              children: /* @__PURE__ */ a(Xi, { size: 16 })
            }
          )
        ] })
      ] }),
      be && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: be }),
      e.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(zt, { size: 13, className: "pitaj-powered-icon" }),
        e.poweredByText || B("poweredBy", i),
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
function zn({
  config: t,
  language: e = "bs",
  openedByUser: i = !1,
  onStart: n,
  onApiError: o
}) {
  var Q, J;
  const [r, c] = U(""), [s, f] = U(!1), [u, g] = U(!1), [b, p] = U([]), v = ee(null), h = ee(null), y = t.content || {}, A = t.chatAvailable === !1, I = t.transcribeAvailable === !1, M = ca({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: re((k) => {
      c((V) => V ? `${V} ${k}` : k);
    }, []),
    onError: re((k) => {
      o == null || o(k, "Greška pri transkripciji.");
    }, [o])
  });
  q(() => {
    var k;
    i && ((k = v.current) == null || k.focus({ preventScroll: !0 }));
  }, [i]), q(() => {
    if (typeof window > "u") return;
    const k = window.matchMedia("(max-width: 768px)"), V = () => f(k.matches);
    return V(), k.addEventListener("change", V), () => k.removeEventListener("change", V);
  }, []), q(() => {
    g(!1);
  }, [y.dismissibleNotice]);
  const W = (s && y.useDifferentMessageMobile && y.mobileWelcomeMessage ? y.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((k) => k.trim()).filter((k) => k.length > 0), d = y.autoShowInitialMessages !== !1 && !i, T = !s || y.showAutoPopupMobile !== !1, N = s && y.useDifferentDurationMobile && typeof y.mobileAutoShowDurationSeconds == "number" ? y.mobileAutoShowDurationSeconds : y.autoShowDurationSeconds ?? 0, E = d && T ? Math.max(0, N) * 1e3 : 0, D = (k) => {
    p((V) => {
      const ie = V.find((se) => se.id === k);
      if (ie != null && ie.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ie.previewUrl);
        } catch {
        }
      return V.filter((se) => se.id !== k);
    });
  }, S = (k) => {
    const V = (k ?? r).trim();
    if (!V && b.length === 0 || A) return;
    const ie = `${V}${sa(b)}`.trim();
    n(ie), b.forEach((se) => {
      if (se.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(se.previewUrl);
        } catch {
        }
    }), c(""), p([]);
  }, L = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), S());
  }, C = y.showSuggestedMessages === !1 ? [] : y.suggestedMessageRows || [], Y = y.messagePlaceholder || t.placeholder || B("inputPlaceholder", e), O = ((Q = y.dismissibleNotice) == null ? void 0 : Q.trim()) || "", te = ((J = y.footerText) == null ? void 0 : J.trim()) || "", pe = M.isListening;
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ a("div", { className: "pitaj-new-screen", children: (W.length > 0 ? W : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((k, V) => /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: k }) }) }, `welcome-${V}`)) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        ra,
        {
          rows: C,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: S,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: E,
          staggerMs: 150
        }
      ),
      b.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: b.map((k) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: k.previewUrl ? /* @__PURE__ */ a("img", { src: k.previewUrl, alt: k.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(ia, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: k.name, children: k.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => D(k.id),
            "aria-label": `Ukloni ${k.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Le, { size: 10 })
          }
        )
      ] }, k.id)) }),
      O && !u && /* @__PURE__ */ a("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-dismissible-notice-text", children: O }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => g(!0),
            "aria-label": B("close", e),
            children: /* @__PURE__ */ a(Le, { size: 12 })
          }
        )
      ] }),
      M.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: B("transcribing", e) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${pe ? "is-recording" : ""}`, children: [
        y.attachmentsEnabled && /* @__PURE__ */ a(_e, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: h,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (k) => {
                const V = k.currentTarget.files;
                if (k.currentTarget.value = "", !V || V.length === 0) return;
                const ie = await oa(V);
                p((se) => [...se, ...ie].slice(0, 3));
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
                var k;
                return (k = h.current) == null ? void 0 : k.click();
              },
              children: /* @__PURE__ */ a(aa, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: v,
            value: r,
            onInput: (k) => c(k.target.value),
            onKeyDown: L,
            placeholder: Y,
            rows: 1,
            disabled: A,
            className: "pitaj-textarea",
            style: pe ? { display: "none" } : void 0
          }
        ),
        pe ? /* @__PURE__ */ a("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": B("cancel", e),
              title: B("cancel", e),
              onClick: () => M.cancel(),
              children: /* @__PURE__ */ a(Le, { size: 14 })
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ a("div", { className: "pitaj-wave", children: M.waveformLevels.map((k, V) => /* @__PURE__ */ a(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + k * 15))}px` }
            },
            `dict-wave-${V}`
          )) }) }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": B("sendAudio", e),
              title: B("sendAudio", e),
              onClick: () => M.stopAndTranscribe(),
              disabled: A || M.isProcessing,
              children: /* @__PURE__ */ a(wt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(_e, { children: [
          y.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${M.isProcessing ? "is-active" : ""}`,
              "aria-label": B("dictation", e),
              title: M.isProcessing ? B("transcribing", e) : M.isSupported ? B("dictation", e) : "Diktiranje nije podržano",
              onClick: () => M.start(),
              disabled: A || I || !M.isSupported || M.isProcessing,
              children: /* @__PURE__ */ a(ta, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => S(),
              disabled: A || !r.trim() && b.length === 0,
              className: "pitaj-send-btn",
              "aria-label": B("sendMessage", e),
              children: /* @__PURE__ */ a(Xi, { size: 16 })
            }
          )
        ] })
      ] }),
      te && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: te }),
      t.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(zt, { size: 13, className: "pitaj-powered-icon" }),
        t.poweredByText || B("poweredBy", e),
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
function An({
  isOpen: t,
  onClick: e,
  unreadCount: i = 0,
  config: n
}) {
  var g, b, p, v, h, y;
  const o = ((g = n.content) == null ? void 0 : g.launcherIconStyle) || "message-circle", r = typeof ((b = n.content) == null ? void 0 : b.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", c = ((p = n.content) == null ? void 0 : p.launcherShowText) === !0, s = ((v = n.content) == null ? void 0 : v.launcherTextSide) === "left" ? "left" : "right", f = c ? ((y = (h = n.content) == null ? void 0 : h.launcherText) == null ? void 0 : y.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${c ? "has-label" : ""} ${c && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && r !== "" ? /* @__PURE__ */ a("img", { src: r, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ a(o === "sparkles" ? qa : o === "message-square" ? ea : o === "contact" ? tn : Ja, { size: 24 }) }),
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ a(Le, { size: 22 }) })
        ] }),
        f && !t && /* @__PURE__ */ a("span", { className: "pitaj-launcher-label", children: f }),
        i > 0 && !t && /* @__PURE__ */ a("span", { className: "pitaj-unread-badge", children: i > 9 ? "9+" : i })
      ]
    }
  );
}
const Cn = "pitaj_io_popup_dismissed:";
function In(t) {
  try {
    return sessionStorage.getItem(t) === "1";
  } catch {
    return !1;
  }
}
function Ti(t) {
  try {
    sessionStorage.setItem(t, "1");
  } catch {
  }
}
function Tn({ isOpen: t, onOpen: e, config: i }) {
  var E, D, S, L;
  const [n, o] = U(!1), r = !!i.previewDraft, c = `${Cn}${i.companyId ?? ""}`, [s, f] = U(() => !r && In(c)), [u, g] = U(!1), [b, p] = U(t), v = ee(null);
  q(() => {
    t && (p(!0), g(!1), r || Ti(c));
  }, [t]), q(() => {
    const C = () => {
      var O;
      if (typeof window > "u") return;
      let Y = window.innerWidth <= 640;
      if (!Y && v.current) {
        const te = (O = v.current.closest(".pitaj-root")) == null ? void 0 : O.parentElement;
        te && te.clientWidth > 0 && te.clientWidth <= 640 && (Y = !0);
      }
      o(Y);
    };
    return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []);
  const h = i.content || {}, y = h.autoShowInitialMessages !== !1, A = h.showAutoPopupMobile !== !1, I = !n || A, M = n && h.useDifferentDurationMobile && typeof h.mobileAutoShowDurationSeconds == "number" ? h.mobileAutoShowDurationSeconds : h.autoShowDurationSeconds ?? 0;
  if (q(() => {
    if (!y || !I || s || t || b) {
      g(!1);
      return;
    }
    const C = Math.max(0, M) * 1e3, Y = setTimeout(() => {
      g(!0);
    }, C);
    return () => clearTimeout(Y);
  }, [y, I, s, t, b, M]), !u || t)
    return null;
  let $ = "";
  n && h.useDifferentMessageMobile && ((E = h.mobileWelcomeMessage) != null && E.trim()) ? $ = h.mobileWelcomeMessage.trim() : (D = h.popupMessageText) != null && D.trim() ? $ = h.popupMessageText.trim() : (S = i.welcomeMessage) != null && S.trim() ? $ = i.welcomeMessage.trim() : (L = i.welcomeHeadline) != null && L.trim() ? $ = i.welcomeHeadline.trim() : $ = "Zdravo! Kako vam mogu pomoći danas?";
  const W = (C) => {
    C.stopPropagation(), C.preventDefault(), f(!0), g(!1), r || Ti(c);
  }, d = () => {
    e();
  }, T = i.title || i.name || "Pitaj.io Asistent", N = i.logo || i.avatar;
  return /* @__PURE__ */ a(
    "div",
    {
      ref: v,
      className: "pitaj-launcher-popup",
      onClick: d,
      role: "button",
      tabIndex: 0,
      "aria-label": `${T}: ${$}`,
      onKeyDown: (C) => {
        (C.key === "Enter" || C.key === " ") && (C.preventDefault(), d());
      },
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-popup-avatar", children: N ? /* @__PURE__ */ a("img", { src: N, alt: "" }) : /* @__PURE__ */ a(zt, { size: 14 }) }),
            /* @__PURE__ */ a("span", { className: "pitaj-popup-title", children: T })
          ] }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: W,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ a(Le, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "pitaj-popup-body", children: $ }),
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function Ln(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(n / (1e3 * 60)), r = Math.floor(n / (1e3 * 60 * 60)), c = Math.floor(n / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : r < 24 ? `prije ${r}h` : c < 7 ? `prije ${c}d` : e.toLocaleDateString();
}
function Pn({ config: t, visitorId: e, onSelectTicket: i }) {
  const [n, o] = U([]), [r, c] = U("open"), [s, f] = U(1), [u, g] = U(!0), [b, p] = U(!0), [v, h] = U(!1), [y, A] = U(null), I = ee(null), M = ee(null), $ = ee(!1);
  q(() => {
    let T = !0;
    return p(!0), o([]), f(1), g(!0), A(null), $.current = !1, Rt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: 1,
      perPage: 15
    }).then((N) => {
      T && (o(N.tickets), g(N.hasMore), f(1));
    }).catch((N) => {
      T && A(N instanceof Error ? N.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      T && p(!1);
    }), () => {
      T = !1;
    };
  }, [t.apiUrl, t.companyId, e, r]);
  const W = re(() => {
    if (b || $.current || !u) return;
    $.current = !0, h(!0);
    const T = s + 1;
    Rt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: T,
      perPage: 15
    }).then((N) => {
      o((E) => {
        const D = new Set(E.map((L) => L.id)), S = N.tickets.filter((L) => !D.has(L.id));
        return [...E, ...S];
      }), g(N.hasMore), f(T);
    }).catch((N) => {
      console.error("[Pitaj.io] Error loading more tickets:", N);
    }).finally(() => {
      h(!1), $.current = !1;
    });
  }, [t.apiUrl, t.companyId, u, b, s, r, e]);
  return q(() => {
    const T = M.current, N = I.current;
    if (!T || !N || !u || b || v) return;
    const E = new IntersectionObserver(
      (D) => {
        var S;
        (S = D[0]) != null && S.isIntersecting && W();
      },
      { root: N, rootMargin: "120px" }
    );
    return E.observe(T), () => E.disconnect();
  }, [u, b, v, W]), /* @__PURE__ */ a(
    "div",
    {
      ref: I,
      className: "pitaj-tickets-screen",
      onScroll: (T) => {
        const N = T.currentTarget;
        !N || !u || b || $.current || N.scrollHeight - N.scrollTop - N.clientHeight < 120 && W();
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
              onClick: () => c("open"),
              role: "tab",
              "aria-selected": r === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              className: r === "closed" ? "is-active" : "",
              onClick: () => c("closed"),
              role: "tab",
              "aria-selected": r === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        b ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ a("span", { children: "Učitavanje tiketa…" })
        ] }) : y ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ a("span", { children: y }) }) : n.length === 0 ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a(ea, { size: 30 }),
          /* @__PURE__ */ a("strong", { children: r === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ a("span", { children: r === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ a("div", { className: "pitaj-ticket-list", children: [
          n.map((T) => {
            const N = T.messages || [], E = N.length > 0 ? N[N.length - 1] : null, D = N.length, S = D === 1 ? "1 poruka" : D >= 2 && D <= 4 ? `${D} poruke` : `${D} poruka`;
            return /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => i == null ? void 0 : i(T),
                "aria-label": `Otvori tiket ${T.ticketNumber || T.id}`,
                children: /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ a("strong", { className: "pitaj-ticket-number", children: T.ticketNumber || `Tiket #${T.id}` }),
                    /* @__PURE__ */ a("span", { className: `pitaj-ticket-status-badge ${T.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ a("span", { className: "pitaj-ticket-status-dot" }),
                      T.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  E && /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-preview", children: E.content }),
                  /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-time", children: Ln(T.updatedAt) }),
                    D > 0 && /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-count", children: S })
                  ] })
                ] })
              },
              T.id
            );
          }),
          v && /* @__PURE__ */ a("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ a("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ a("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ a("div", { ref: M, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const $n = Qt(() => import("./HistoryScreen-uehVS6KN.js"), (t) => t.HistoryScreen), En = Qt(() => import("./FormActionsScreen-DlQ0p63K.js"), (t) => t.FormActionsScreen);
function lt(t) {
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
    const o = Number(n[1]) % 360, r = Number(n[2]) / 100, c = Number(n[3]) / 100, s = (1 - Math.abs(2 * c - 1)) * r, f = s * (1 - Math.abs(o / 60 % 2 - 1)), u = c - s / 2;
    let g = 0, b = 0, p = 0;
    return 0 <= o && o < 60 ? (g = s, b = f, p = 0) : 60 <= o && o < 120 ? (g = f, b = s, p = 0) : 120 <= o && o < 180 ? (g = 0, b = s, p = f) : 180 <= o && o < 240 ? (g = 0, b = f, p = s) : 240 <= o && o < 300 ? (g = f, b = 0, p = s) : 300 <= o && o < 360 && (g = s, b = 0, p = f), {
      r: Math.round((g + u) * 255),
      g: Math.round((b + u) * 255),
      b: Math.round((p + u) * 255)
    };
  }
  return null;
}
function Dn(t) {
  return lt(t);
}
function ht(t, e) {
  const i = lt(t);
  return i ? `rgba(${i.r}, ${i.g}, ${i.b}, ${e})` : null;
}
function Bn(t, e, i) {
  const n = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(i)}`;
}
function ot(t) {
  const e = lt(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Hn(t, e) {
  const i = lt(t);
  if (i)
    return (0.2126 * i.r + 0.7152 * i.g + 0.0722 * i.b) / 255 <= 0.55;
  if (e) {
    const n = lt(e);
    if (n)
      return (0.2126 * n.r + 0.7152 * n.g + 0.0722 * n.b) / 255 > 0.55;
  }
  return !1;
}
function Un(t) {
  const e = Dn(t);
  if (!e) return t;
  const i = ot(t) === "#111827", n = i ? 0.2 : 0.16, o = i ? 0 : 255;
  return Bn(
    e.r + (o - e.r) * n,
    e.g + (o - e.g) * n,
    e.b + (o - e.b) * n
  );
}
function Rn({
  config: t,
  startOpen: e = !1,
  initialScreen: i = "new-conversation",
  onEvent: n,
  isInline: o = !1,
  isMobile: r,
  isCanvasPreview: c = !1
}) {
  var me, Ee, Fe, Oe, Ve, Ke, Ye, We, Ge, Ze, qe, Qe, Je, Xe, et, tt, it;
  const {
    config: s,
    setConfig: f,
    isOpen: u,
    setIsOpen: g,
    screen: b,
    setScreen: p,
    conversations: v,
    activeConversation: h,
    totalUnread: y,
    isStreaming: A,
    rateLimitTimer: I,
    errorBanner: M,
    sessionInvalid: $,
    resetSession: W,
    selectConversation: d,
    startNewConversation: T,
    endConversation: N,
    deleteConversation: E,
    sendUserMessage: D,
    submitSatisfaction: S,
    visitorContact: L,
    visitorId: C,
    activeConversationId: Y,
    activeLanguage: O,
    appendConversationMessage: te,
    appendWorkflowWidget: pe,
    handleApiError: Q
  } = Za(t, {
    startOpen: e,
    initialScreen: i,
    emitEvent: n,
    onActionTrigger: (_, l) => {
      if (!s.isPreview && !s.mockMode && (n == null || n("action_triggered", { ...Ca(s.companyId, _), ...l ? { complete: l } : {} })), ie(!0), g(!0), (b === "history" || b === "new-conversation") && p("conversation"), _.widget_id || _.widget)
        return;
      const m = Number(_.id), w = Number(_.form_id), P = Number.isInteger(m) && m > 0 ? m : null, z = Number.isInteger(w) && w > 0 ? -w : null;
      ge(P ?? z);
    }
  }), J = ee(i), k = ee(e), [V, ie] = U(e), [se, ge] = U(() => {
    var _, l, m, w;
    return ((_ = s.previewDraft) == null ? void 0 : _.initialStep) === "form" && !!!(s.previewDraft.widget || (l = s.previewDraft.action) != null && l.widget || (m = s.previewDraft.action) != null && m.widget_id) ? ((w = s.previewDraft.action) == null ? void 0 : w.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  q(() => {
    var _, l, m, w, P, z, X;
    if (((_ = s.previewDraft) == null ? void 0 : _.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (l = s.previewDraft.action) != null && l.widget || (m = s.previewDraft.action) != null && m.widget_id)) {
        const R = ((w = s.previewDraft.action) == null ? void 0 : w.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        R !== null && ge(R);
      }
    } else (((P = s.previewDraft) == null ? void 0 : P.initialStep) === "idle" || ((z = s.previewDraft) == null ? void 0 : z.initialStep) === "submitted" || ((X = s.previewDraft) == null ? void 0 : X.initialStep) === "dismissed") && ge(null);
  }, [
    (me = s.previewDraft) == null ? void 0 : me.initialStep,
    (Fe = (Ee = s.previewDraft) == null ? void 0 : Ee.action) == null ? void 0 : Fe.id,
    (Ve = (Oe = s.previewDraft) == null ? void 0 : Oe.form) == null ? void 0 : Ve.id,
    (Ke = s.previewDraft) == null ? void 0 : Ke.widget
  ]);
  const [be, he] = U(null), xe = ee(null), [de, je] = U(() => typeof r == "boolean" ? r : o ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  q(() => {
    if (typeof r == "boolean") {
      je(r);
      return;
    }
    const _ = () => {
      if (typeof window > "u") return;
      if (o) {
        je(!1);
        return;
      }
      let l = window.innerWidth <= 640;
      if (!l && xe.current) {
        const m = xe.current.getRootNode(), w = m instanceof ShadowRoot ? m.host : xe.current.parentElement, P = (w == null ? void 0 : w.parentElement) || w;
        P && P.clientWidth > 0 && P.clientWidth <= 640 && (l = !0);
      }
      je(l);
    };
    return _(), window.addEventListener("resize", _), window.addEventListener("orientationchange", _), () => {
      window.removeEventListener("resize", _), window.removeEventListener("orientationchange", _);
    };
  }, [r]), q(() => {
    if (typeof window > "u") return;
    const _ = () => {
      const m = xe.current;
      if (!m) return;
      const w = window.visualViewport;
      if (w) {
        const P = w.height < window.innerHeight - 100;
        m.style.setProperty("--pitaj-viewport-height", `${Math.round(w.height)}px`), m.style.setProperty("--pitaj-viewport-top", `${Math.round(w.offsetTop)}px`), m.style.setProperty("--pitaj-viewport-left", `${Math.round(w.offsetLeft)}px`), m.style.setProperty(
          "--pitaj-input-safe-bottom",
          P ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        m.style.setProperty("--pitaj-viewport-height", "100dvh"), m.style.setProperty("--pitaj-viewport-top", "0px"), m.style.setProperty("--pitaj-viewport-left", "0px"), m.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    _();
    const l = window.visualViewport;
    return l && (l.addEventListener("resize", _), l.addEventListener("scroll", _)), window.addEventListener("resize", _), window.addEventListener("orientationchange", _), () => {
      l && (l.removeEventListener("resize", _), l.removeEventListener("scroll", _)), window.removeEventListener("resize", _), window.removeEventListener("orientationchange", _);
    };
  }, [u, de]), q(() => {
    if (typeof document > "u" || !u || !de || o || c) return;
    const _ = document.body.style.overflow, l = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = _, document.body.style.touchAction = l;
    };
  }, [u, de, o, c]), q(() => {
    var m;
    if (typeof window > "u" || o) return;
    const _ = (m = xe.current) == null ? void 0 : m.getRootNode(), l = _ instanceof ShadowRoot ? _.host : null;
    if (l) {
      if (c || l.hasAttribute("data-pitaj-preview") || l.classList.contains("pitaj-preview-host")) {
        l.style.width = "100%", l.style.height = "100%", l.style.top = "0", l.style.left = "0", l.style.position = "relative";
        return;
      }
      u && de ? (l.style.top = "0", l.style.left = "0", l.style.width = "100%", l.style.height = "100%", l.setAttribute("data-pitaj-mobile-open", "true")) : (l.style.top = "", l.style.left = "", l.style.width = "0", l.style.height = "0", l.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [u, de, o, c]);
  const fe = s.formsEnabled === !0 && s.formsAvailable !== !1, ze = He(() => {
    var m, w;
    const _ = s.actions || [];
    if (_.length > 0 && typeof ((m = _[0]) == null ? void 0 : m.id) == "number")
      return _[0].id;
    const l = s.forms || [];
    return l.length > 0 && typeof ((w = l[0]) == null ? void 0 : w.id) == "number" ? -l[0].id : null;
  }, [s.actions, s.forms]), Se = He(() => ({
    open: () => {
      ie(!0), g(!0);
    },
    close: () => g(!1),
    toggle: () => {
      u || ie(!0), g(!u);
    },
    startConversation: (_) => {
      ie(!0), g(!0), _ && _.trim() ? T(_.trim()) : p("new-conversation");
    },
    setScreen: (_) => p(_),
    setConfig: (_) => {
      const l = {
        ...s,
        ..._,
        colors: { ...s.colors || {}, ..._.colors || {} },
        content: { ...s.content || {}, ..._.content || {} },
        features: { ...s.features || {}, ..._.features || {} },
        cssVars: { ...s.cssVars || {}, ..._.cssVars || {} }
      };
      if (l.previewDraft) {
        if (l.previewDraft.action) {
          const m = l.previewDraft.action;
          l.actions = [m, ...(l.actions || []).filter((w) => w.id !== m.id)];
        }
        if (l.previewDraft.form) {
          const m = l.previewDraft.form;
          l.forms = [m, ...(l.forms || []).filter((w) => w.id !== m.id)], l.formsAvailable = !0, l.formsEnabled = !0;
        }
        if (l.previewDraft.widget) {
          const m = l.previewDraft.widget;
          l.widgets = [m, ...(l.widgets || []).filter((w) => w.id !== m.id)];
        }
      }
      f(l);
    }
  }), [s, u, g, p, T, f]), x = ee({});
  Ai(x.current, Se), q(() => () => Ai(x.current, null), []), q(() => {
    i !== J.current && (J.current = i, p(i));
  }, [i, p]), q(() => {
    e !== k.current && (k.current = e, e && ie(!0), g(e));
  }, [e, g]), q(() => {
    if (b === "forms") {
      fe && ze !== null && ge(ze), p("new-conversation");
      return;
    }
    b === "contact" && p("new-conversation");
  }, [ze, fe, b, p]), q(() => {
    var w;
    if (typeof document > "u") return;
    const _ = (w = s.content) == null ? void 0 : w.fontFamily;
    if (!_) return;
    const l = _.trim().toLowerCase();
    let m = "";
    if (l === "inter" ? m = "family=Inter:wght@400;500;600;700" : l === "geist" ? m = "family=Geist:wght@400;500;600;700" : l === "plus jakarta sans" && (m = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), m) {
      const P = `pitaj-font-${l.replace(/\s+/g, "-")}`;
      if (!document.getElementById(P)) {
        const z = document.createElement("link");
        z.id = P, z.rel = "stylesheet", z.href = `https://fonts.googleapis.com/css2?${m}&display=swap`, document.head.appendChild(z);
      }
    }
  }, [(Ye = s.content) == null ? void 0 : Ye.fontFamily]);
  const K = He(() => {
    var ei, ti, ii, ai, ni, ri, oi, si, ci;
    const l = (((ei = s.content) == null ? void 0 : ei.themeMode) === "dark" ? "dark" : "light") === "dark", m = s.colors || {}, w = l ? "#0b1220" : "#ffffff", P = l ? "#111827" : "#f8fafc", z = l ? "#111827" : "#ffffff", X = l ? "#e5e7eb" : "#0f172a", ae = l ? "#9ca3af" : "#64748b", R = l ? "#263246" : "#e2e8f0", Z = l ? "#172033" : "#f1f5f9", H = l ? "#111827" : "#ffffff", j = {};
    (ti = s.theme) != null && ti.css_vars && typeof s.theme.css_vars == "object" && Object.assign(j, s.theme.css_vars);
    const F = m.primaryColor || (l ? "#3b82f6" : "#2563eb");
    j["--pitaj-accent"] = F, j["--pitaj-bubble-user"] = m.bubbleUserBg || F, j["--pitaj-accent-hover"] = Un(F), j["--pitaj-accent-contrast"] = ot(F), j["--pitaj-bubble-user-fg"] = ot(m.bubbleUserBg || F);
    const we = ht(F, 0.1), Me = ht(F, 0.16), ve = ht(F, 0.35);
    we && (j["--pitaj-accent-soft"] = we), Me && (j["--pitaj-accent-soft-strong"] = Me), ve && (j["--pitaj-accent-ring"] = ve);
    const Ce = m.sendAccent || (l ? "#e5e7eb" : "#111827");
    j["--pitaj-send-accent"] = Ce, j["--pitaj-send-accent-contrast"] = ot(Ce);
    const ke = m.surfaceBg || w;
    j["--pitaj-surface"] = ke, m.subtle ? j["--pitaj-surface-subtle"] = m.subtle : m.surfaceBg ? j["--pitaj-surface-subtle"] = ht(m.surfaceBg, 0.9) || m.surfaceBg : j["--pitaj-surface-subtle"] = P;
    const ye = m.bubbleAiBg || z;
    j["--pitaj-bubble-ai"] = ye;
    const Ie = m.textFg || X;
    j["--pitaj-bubble-ai-fg"] = Ie, j["--pitaj-fg"] = Ie;
    const dt = m.mutedFg || ae;
    j["--pitaj-muted"] = dt;
    const At = m.border || R;
    j["--pitaj-border"] = At, j["--pitaj-card-border"] = At;
    const la = m.hover || Z;
    j["--pitaj-hover"] = la, j["--pitaj-chrome-border"] = l ? "rgba(148, 163, 184, 0.52)" : "#d1d5db";
    const ut = m.headerBg || H, Jt = Hn(ut, m.headerFg), da = m.headerFg || (Jt ? "#ffffff" : "#0f172a");
    j["--pitaj-header-bg"] = ut, j["--pitaj-header-fg"] = da, Jt ? (j["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)", j["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", j["--pitaj-header-icon-hover"] = "#ffffff", j["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", j["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", j["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", j["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", j["--pitaj-header-badge-fg"] = "#ffffff", j["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (j["--pitaj-header-gradient"] = ut.toLowerCase() === "#ffffff" || ut.toLowerCase() === "#fff" ? "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", j["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", j["--pitaj-header-icon-hover"] = "#0f172a", j["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", j["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", j["--pitaj-header-border"] = At, j["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", j["--pitaj-header-badge-fg"] = "#0f172a", j["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)");
    const Ct = (ii = s.content) == null ? void 0 : ii.launcherButtonColor;
    Ct && (j["--pitaj-launcher-bg"] = Ct, j["--pitaj-launcher-fg"] = ot(Ct));
    const Ae = (ai = s.content) == null ? void 0 : ai.cornerRadius;
    if (Ae) {
      const Ne = Ae === "sharp" || Ae === "0px" ? "0px" : Ae === "small" || Ae === "8px" ? "8px" : Ae === "medium" || Ae === "12px" ? "12px" : Ae === "large" || Ae === "16px" ? "16px" : Ae;
      j["--pitaj-radius"] = Ne, Ne === "0px" ? (j["--pitaj-radius-bubble"] = "0px", j["--pitaj-radius-input"] = "0px", j["--pitaj-radius-btn"] = "0px", j["--pitaj-radius-avatar"] = "0px", j["--pitaj-radius-full"] = "0px", j["--pitaj-radius-corner-sm"] = "0px", j["--pitaj-launcher-radius"] = "0px", j["--pitaj-launcher-pill-radius"] = "0px", j["--pitaj-badge-radius"] = "0px") : Ne === "8px" ? (j["--pitaj-radius-bubble"] = "8px", j["--pitaj-radius-input"] = "8px", j["--pitaj-radius-btn"] = "6px", j["--pitaj-radius-avatar"] = "6px", j["--pitaj-radius-full"] = "8px", j["--pitaj-radius-corner-sm"] = "2px", j["--pitaj-launcher-radius"] = "8px", j["--pitaj-launcher-pill-radius"] = "8px", j["--pitaj-badge-radius"] = "4px") : Ne === "12px" ? (j["--pitaj-radius-bubble"] = "12px", j["--pitaj-radius-input"] = "12px", j["--pitaj-radius-btn"] = "8px", j["--pitaj-radius-avatar"] = "10px", j["--pitaj-radius-full"] = "12px", j["--pitaj-radius-corner-sm"] = "4px", j["--pitaj-launcher-radius"] = "12px", j["--pitaj-launcher-pill-radius"] = "12px", j["--pitaj-badge-radius"] = "6px") : (j["--pitaj-radius-bubble"] = "18px", j["--pitaj-radius-input"] = "14px", j["--pitaj-radius-btn"] = "10px", j["--pitaj-radius-avatar"] = "50%", j["--pitaj-radius-full"] = "999px", j["--pitaj-radius-corner-sm"] = "4px", j["--pitaj-launcher-radius"] = "50%", j["--pitaj-launcher-pill-radius"] = "999px", j["--pitaj-badge-radius"] = "999px");
    }
    const It = (ni = s.content) == null ? void 0 : ni.fontFamily;
    if (It) {
      const Ne = It.toLowerCase(), pi = Ne === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : Ne === "arial" ? "Arial, Helvetica, sans-serif" : Ne === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : Ne === "georgia" ? "Georgia, serif" : Ne === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : Ne === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${It}', 'Inter', system-ui, sans-serif`;
      j["--pitaj-font"] = pi, j.fontFamily = pi;
    }
    const Tt = (ri = s.content) == null ? void 0 : ri.fontSize;
    Tt && (j["--pitaj-font-size"] = Tt, j.fontSize = Tt);
    const Xt = (oi = s.content) != null && oi.dropShadowEnabled ? l ? "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.3)" : "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)" : "none";
    j["--pitaj-window-shadow"] = Xt, j["--pitaj-shadow"] = Xt;
    const ua = (si = s.content) != null && si.dropShadowEnabled ? l ? "0 4px 12px rgba(0, 0, 0, 0.4), 0 10px 24px -4px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(15, 23, 42, 0.15), 0 10px 24px -4px rgba(15, 23, 42, 0.25)" : "none", ma = (ci = s.content) != null && ci.dropShadowEnabled ? l ? "0 6px 16px rgba(0, 0, 0, 0.45), 0 16px 32px -4px rgba(0, 0, 0, 0.6)" : "0 6px 16px rgba(15, 23, 42, 0.18), 0 16px 32px -4px rgba(15, 23, 42, 0.32)" : "none";
    return j["--pitaj-launcher-shadow"] = ua, j["--pitaj-launcher-shadow-hover"] = ma, s.cssVars && typeof s.cssVars == "object" && Object.assign(j, s.cssVars), j;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (We = s.content) == null ? void 0 : We.themeMode,
    (Ge = s.content) == null ? void 0 : Ge.launcherButtonColor,
    (Ze = s.content) == null ? void 0 : Ze.cornerRadius,
    (qe = s.content) == null ? void 0 : qe.fontFamily,
    (Qe = s.content) == null ? void 0 : Qe.fontSize,
    (Je = s.content) == null ? void 0 : Je.dropShadowEnabled
  ]), G = ((Xe = s.content) == null ? void 0 : Xe.themeMode) === "dark" ? "dark" : "light", ue = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ a(_e, {}) : /* @__PURE__ */ a(
    "div",
    {
      ref: xe,
      "data-theme": G,
      className: `pitaj-root pitaj-theme-${G} ${ue} ${u ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${c ? "is-canvas-preview" : ""} ${de ? "is-mobile" : ""} ${o && ((et = s.content) != null && et.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: K,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-window ${u ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !u,
            children: [
              /* @__PURE__ */ a(
                un,
                {
                  screen: b,
                  activeConversation: h,
                  config: s,
                  language: O,
                  onBack: () => {
                    const _ = be || "new-conversation";
                    he(null), p(_);
                  },
                  onClose: () => {
                    g(!1);
                  },
                  onNewConversation: () => {
                    he(null), p("new-conversation");
                  },
                  onEndConversation: () => {
                    N(), g(!1);
                  },
                  onDeleteConversation: ((tt = s.content) == null ? void 0 : tt.deleteConversationsEnabled) !== !1 && h ? () => E(h.id) : void 0,
                  onViewHistory: () => {
                    he(null), p("history");
                  },
                  onViewTickets: () => {
                    he(null), p("tickets");
                  }
                }
              ),
              /* @__PURE__ */ a("div", { className: "pitaj-body", children: [
                b === "conversation" && h && /* @__PURE__ */ a(
                  Nn,
                  {
                    conversation: h,
                    config: s,
                    language: O,
                    isStreaming: A,
                    rateLimitCountdown: I,
                    errorBanner: M,
                    sessionInvalid: $,
                    onResetSession: W,
                    onSendMessage: D,
                    onWorkflowWidget: (_) => pe(h.id, _),
                    onApiError: Q,
                    onSubmitSatisfaction: (_, l) => S(h.id, _, l)
                  }
                ),
                b === "new-conversation" && /* @__PURE__ */ a(
                  zn,
                  {
                    config: s,
                    language: O,
                    openedByUser: V,
                    onStart: (_) => {
                      T(_);
                    },
                    onApiError: Q
                  }
                ),
                b === "history" && /* @__PURE__ */ a(
                  $n,
                  {
                    conversations: v,
                    config: s,
                    language: O,
                    onSelectConversation: (_) => {
                      he("history"), d(_);
                    },
                    onNewConversation: () => {
                      he(null), p("new-conversation");
                    },
                    onDeleteConversation: ((it = s.content) == null ? void 0 : it.deleteConversationsEnabled) !== !1 ? E : void 0
                  }
                ),
                b === "tickets" && /* @__PURE__ */ a(
                  Pn,
                  {
                    config: s,
                    visitorId: C,
                    onSelectTicket: (_) => {
                      var X;
                      he("tickets");
                      const l = (X = _.messages) == null ? void 0 : X.find((ae) => ae.sender === "user"), m = _.messages && _.messages.length > 0 ? _.messages[_.messages.length - 1] : null, w = l ? l.content.length > 40 ? l.content.slice(0, 40) + "…" : l.content : _.ticketNumber || `Tiket #${_.id}`, z = {
                        id: _.conversationId ? String(_.conversationId) : String(_.id),
                        title: w,
                        preview: m ? m.content : _.ticketNumber || `Tiket #${_.id}`,
                        timestamp: _.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: _.messages || [],
                        status: _.isResolved ? "ended" : "active",
                        ticketNumber: _.ticketNumber
                      };
                      d(z);
                    }
                  }
                ),
                (b === "conversation" || b === "new-conversation") && fe && se !== null ? /* @__PURE__ */ a("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ a(
                  En,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: Y,
                    initialActionId: se,
                    visitorContact: L,
                    onApiError: Q,
                    blockedReason: I !== null ? `Sačekajte ${I}s prije novog zahtjeva.` : null,
                    onSubmitted: (_) => {
                      var l, m;
                      if (te(Y, _, "user"), s.mockMode || s.isPreview) {
                        const w = ((m = (l = s.previewDraft) == null ? void 0 : l.form) == null ? void 0 : m.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          te(Y, w, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => ge(null),
                    onDismiss: async (_, l) => {
                      if (!(_ != null && _.dismiss_message) || !Y) return;
                      const m = s.mockMode || s.isPreview ? _.dismiss_message : await Aa(s.companyId, Y, _.id, l, s.apiUrl);
                      te(Y, m, "ai");
                    }
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!u || !de) && /* @__PURE__ */ a("div", { className: `pitaj-launcher-wrap ${u ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ a(
            Tn,
            {
              isOpen: u,
              onOpen: () => {
                ie(!0), g(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ a(
            An,
            {
              isOpen: u,
              onClick: () => {
                u || ie(!0), g(!u);
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
function Fn(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const i = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * i + 0.7152 * n + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function On(t, e) {
  if (typeof t != "string") return e;
  const i = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(i) ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`.toUpperCase() : e;
}
function Vn(t) {
  const e = t.trim(), i = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(i))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(i.slice(1, 3), 16) / 255, o = Number.parseInt(i.slice(3, 5), 16) / 255, r = Number.parseInt(i.slice(5, 7), 16) / 255, c = Math.max(n, o, r), s = Math.min(n, o, r), f = c - s;
  let u = 0;
  const g = (c + s) / 2, b = f === 0 ? 0 : f / (1 - Math.abs(2 * g - 1));
  if (f !== 0)
    switch (c) {
      case n:
        u = (o - r) / f % 6;
        break;
      case o:
        u = (r - n) / f + 2;
        break;
      default:
        u = (n - o) / f + 4;
        break;
    }
  return { h: Math.round((u * 60 + 360) % 360), s: Math.round(b * 100), l: Math.round(g * 100) };
}
function Kn(t) {
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
function Yn(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const i = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(i.fields) ? i.fields : []).filter((r) => typeof r == "object" && r !== null).map((r) => ({
      key: typeof r.key == "string" ? r.key : "",
      type: Kn(r.type),
      label: typeof r.label == "string" ? r.label : "",
      required: r.required === !0,
      placeholder: typeof r.placeholder == "string" ? r.placeholder : void 0,
      options: Array.isArray(r.options) ? r.options.filter((c) => typeof c == "string" && c.trim() !== "") : void 0,
      accept: Array.isArray(r.accept) ? r.accept.filter((c) => typeof c == "string" && c.trim() !== "") : void 0,
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
function Wn(t) {
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
async function Gn(t, e) {
  var n, o, r, c, s, f, u, g, b;
  if (t === "default")
    return { ...oe, companyId: t || "default" };
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const p = `${i}/api/widget/${t}/config`, v = await fetch(p, {
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
            ...oe,
            companyId: t,
            apiUrl: i,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${v.status}), using defaults.`), { ...oe, companyId: t, apiUrl: i };
    }
    const h = await v.json(), y = h.accent_color || ((n = oe.colors) == null ? void 0 : n.primaryColor) || "#2563eb", A = Array.isArray(h.suggested_questions) ? h.suggested_questions.filter((k) => typeof k == "string" && k.trim() !== "").slice(0, 4) : [], I = Array.isArray(h.contact_fields) ? h.contact_fields.filter(
      (k) => k === "name" || k === "email" || k === "phone"
    ) : [], $ = (Array.isArray(h.channels) ? h.channels : []).find(
      (k) => typeof k == "object" && k !== null && k.channel === "chat_bubble"
    ), W = ($ == null ? void 0 : $.enabled) !== !1, d = h.widget_content && typeof h.widget_content == "object" ? h.widget_content : null, T = Array.isArray(d == null ? void 0 : d.suggested_message_rows) ? d.suggested_message_rows.filter((k) => typeof k == "object" && k !== null).map((k) => {
      const V = typeof k.text == "string" ? k.text.trim() : "", ie = Array.isArray(k.children) ? k.children.filter((se) => typeof se == "string" && se.trim() !== "") : [];
      return {
        text: V,
        children: ie.length > 0 ? ie : void 0
      };
    }).filter((k) => k.text !== "").slice(0, 4) : [], N = {
      avatarBorder: (d == null ? void 0 : d.avatar_border) !== !1,
      messagePlaceholder: typeof (d == null ? void 0 : d.message_placeholder) == "string" && d.message_placeholder.trim() !== "" ? d.message_placeholder : oe.placeholder,
      dismissibleNotice: typeof (d == null ? void 0 : d.dismissible_notice) == "string" ? d.dismissible_notice : "",
      footerText: typeof (d == null ? void 0 : d.footer_text) == "string" ? d.footer_text : "",
      attachmentsEnabled: (d == null ? void 0 : d.attachments_enabled) === !0,
      voiceToTextEnabled: (d == null ? void 0 : d.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (d == null ? void 0 : d.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (d == null ? void 0 : d.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (d == null ? void 0 : d.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (d == null ? void 0 : d.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (d == null ? void 0 : d.keep_showing_suggested_messages) === !0,
      showFollowupSuggestions: (d == null ? void 0 : d.show_followup_suggestions) !== !1,
      suggestedMessageRows: T,
      useDifferentMessageMobile: (d == null ? void 0 : d.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (d == null ? void 0 : d.mobile_welcome_message) == "string" ? d.mobile_welcome_message : "",
      autoShowInitialMessages: (d == null ? void 0 : d.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (d == null ? void 0 : d.auto_show_duration_seconds) == "number" ? Math.max(0, d.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (d == null ? void 0 : d.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (d == null ? void 0 : d.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (d == null ? void 0 : d.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, d.mobile_auto_show_duration_seconds) : null,
      popupMessageText: typeof (d == null ? void 0 : d.popup_message_text) == "string" ? d.popup_message_text : "",
      themeMode: (d == null ? void 0 : d.theme_mode) === "dark" ? "dark" : "light",
      dropShadowEnabled: (d == null ? void 0 : d.drop_shadow_enabled) === !0,
      tintedGrayscaleEnabled: (d == null ? void 0 : d.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (d == null ? void 0 : d.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (d == null ? void 0 : d.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (d == null ? void 0 : d.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (d == null ? void 0 : d.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(d.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (d == null ? void 0 : d.tinted_grayscale_tint) == "number" ? Math.max(0, Math.min(100, Math.round(d.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (d == null ? void 0 : d.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(d.tinted_grayscale_shade))) : 0,
      launcherButtonColor: On(d == null ? void 0 : d.launcher_button_color, "#05070c"),
      launcherIconStyle: (d == null ? void 0 : d.launcher_icon_style) === "sparkles" || (d == null ? void 0 : d.launcher_icon_style) === "message-square" || (d == null ? void 0 : d.launcher_icon_style) === "contact" || (d == null ? void 0 : d.launcher_icon_style) === "custom" ? d.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (d == null ? void 0 : d.launcher_icon_url) == "string" ? d.launcher_icon_url : "",
      launcherShowText: (d == null ? void 0 : d.launcher_show_text) === !0,
      launcherText: typeof (d == null ? void 0 : d.launcher_text) == "string" ? d.launcher_text : "",
      launcherTextSide: (d == null ? void 0 : d.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (d == null ? void 0 : d.show_inline_launcher) === !0,
      cornerRadius: typeof (d == null ? void 0 : d.corner_radius) == "string" ? d.corner_radius : "16px",
      fontFamily: typeof (d == null ? void 0 : d.font_family) == "string" ? d.font_family : "Inter",
      fontSize: typeof (d == null ? void 0 : d.font_size) == "string" ? d.font_size : "14px",
      languageSource: (d == null ? void 0 : d.language_source) === "website" ? "website" : "browser",
      defaultLanguage: typeof (d == null ? void 0 : d.default_language) == "string" ? d.default_language : "bs",
      supportedLanguages: Array.isArray(d == null ? void 0 : d.supported_languages) ? d.supported_languages : ["bs"],
      guardrails: d == null ? void 0 : d.guardrails
    }, E = h.theme && typeof h.theme == "object" ? h.theme : null, D = E != null && E.css_vars && typeof E.css_vars == "object" ? E.css_vars : void 0, S = E != null && E.colors && typeof E.colors == "object" ? E.colors : null;
    let L = S, C = y;
    if (L)
      S.primaryColor && (C = S.primaryColor);
    else {
      const k = N.themeMode === "dark" ? "dark" : "light", V = N.accentColorEnabled !== !1, ie = N.accentColorForHeaderEnabled === !0, se = N.tintedGrayscaleEnabled === !0, ge = N.tintedGrayscaleHue ?? 0, be = N.tintedGrayscaleTint ?? 0, he = N.tintedGrayscaleShade ?? 0;
      C = V ? y : k === "dark" ? "#3b82f6" : "#2563eb";
      const de = (Vn(C).h + ge + 360) % 360, je = Math.max(0, Math.min(40, Math.round(Math.max(0, be) * 0.36))), fe = Math.max(-24, Math.min(24, he * 0.24));
      if (L = k === "dark" ? {
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
      }, V && ie && (L.headerBg = C, L.headerFg = Fn(C)), se) {
        const ze = k === "dark" ? Math.max(8, Math.min(20, 12 + fe)) : Math.max(88, Math.min(97, 95 + fe * 0.22)), Se = k === "dark" ? Math.max(10, Math.min(24, 16 + fe)) : Math.max(80, Math.min(94, 89 + fe * 0.35)), x = k === "dark" ? Math.max(11, Math.min(26, 18 + fe * 0.9)) : Math.max(83, Math.min(95, Se + 3)), K = k === "dark" ? Math.max(22, Math.min(40, 30 + fe)) : Math.max(70, Math.min(88, 82 + fe * 0.38)), G = k === "dark" ? Math.max(16, Math.min(30, 22 + fe)) : Math.max(78, Math.min(92, Se - 2));
        L.surfaceBg = `hsl(${de} ${je}% ${ze}%)`, L.bubbleAiBg = `hsl(${de} ${Math.max(0, je - 2)}% ${x}%)`, L.subtle = `hsl(${de} ${Math.max(0, je - 4)}% ${Se}%)`, L.border = `hsl(${de} ${Math.max(0, je - 5)}% ${K}%)`, L.hover = `hsl(${de} ${Math.max(0, je - 3)}% ${G}%)`;
      }
    }
    const Y = Yn(h.forms), O = Wn(h.actions).filter(
      (k) => Y.some((V) => V.id === k.form_id)
    ), te = h.forms_enabled === !0 && Y.length > 0 && O.length > 0, pe = h.chat_available !== !1, Q = h.transcribe_available !== !1 && pe, J = h.forms_available !== !1 && te;
    return {
      ...oe,
      companyId: t,
      enabled: W,
      apiUrl: i,
      name: h.company_name || oe.name,
      title: h.bot_name || oe.title,
      avatar: typeof (d == null ? void 0 : d.avatar_url) == "string" && d.avatar_url.trim() !== "" ? d.avatar_url : oe.avatar,
      welcomeHeadline: h.bot_name ? `Ćaskajte sa ${h.bot_name}` : oe.welcomeHeadline,
      welcomeMessage: h.welcome_message || oe.welcomeMessage,
      placeholder: N.messagePlaceholder || oe.placeholder,
      suggestedQuestions: A,
      contactFields: I.length > 0 ? I : oe.contactFields,
      contact: {
        enabled: typeof ((o = h.contact) == null ? void 0 : o.enabled) == "boolean" ? h.contact.enabled : (r = oe.contact) == null ? void 0 : r.enabled,
        title: typeof ((c = h.contact) == null ? void 0 : c.title) == "string" && h.contact.title.trim() !== "" ? h.contact.title : (s = oe.contact) == null ? void 0 : s.title,
        subtitle: typeof ((f = h.contact) == null ? void 0 : f.subtitle) == "string" && h.contact.subtitle.trim() !== "" ? h.contact.subtitle : (u = oe.contact) == null ? void 0 : u.subtitle,
        submitLabel: typeof ((g = h.contact) == null ? void 0 : g.submit_label) == "string" && h.contact.submit_label.trim() !== "" ? h.contact.submit_label : (b = oe.contact) == null ? void 0 : b.submitLabel
      },
      poweredBy: h.show_branding !== void 0 ? h.show_branding : oe.poweredBy,
      position: h.position || oe.position,
      accentGradient: Array.isArray(h.accent_gradient) ? h.accent_gradient : [],
      content: {
        ...oe.content || {},
        ...N
      },
      chatAvailable: pe,
      transcribeAvailable: Q,
      formsAvailable: J,
      formsEnabled: te,
      forms: Y,
      actions: O,
      theme: E,
      cssVars: D,
      colors: {
        ...oe.colors,
        primaryColor: C,
        bubbleUserBg: C,
        sendAccent: (S == null ? void 0 : S.sendAccent) || (N.accentColorForSendIconEnabled ? C : N.themeMode === "dark" ? "#e5e7eb" : "#111827"),
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
  } catch (p) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", p), { ...oe, companyId: t, apiUrl: i, mockMode: !1 };
  }
}
const Zn = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-window-shadow: none;--pitaj-shadow: var(--pitaj-window-shadow, none);--pitaj-launcher-shadow: none;--pitaj-launcher-shadow-hover: none;--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host([data-theme="dark"]),.pitaj-root.pitaj-theme-dark,.pitaj-root[data-theme=dark]{color-scheme:dark}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:var(--pitaj-window-shadow, none);border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:none}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media(prefers-reduced-motion:reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--pitaj-launcher-border, rgba(255, 255, 255, .16));box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media(max-width:640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}', qn = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", Be = {};
function pa(t, e) {
  (Be[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function Qn(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function Jn(t, e) {
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
      const c = o.action;
      r.actions = [c, ...(r.actions || []).filter((s) => s.id !== c.id)];
    }
    if (o.form) {
      const c = o.form;
      r.forms = [c, ...(r.forms || []).filter((s) => s.id !== c.id)], r.formsAvailable = !0, r.formsEnabled = !0;
    }
    if (o.widget) {
      const c = o.widget;
      r.widgets = [c, ...(r.widgets || []).filter((s) => s.id !== c.id)];
    }
  }
  return r;
}
const ft = /* @__PURE__ */ new WeakMap();
async function Ft(t, e = {}) {
  const i = ft.get(t), n = async () => {
    var h, y;
    const r = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (h = e.initialConfig) != null && h.isPreview || r === "preview") && r === "preview" ? { ...oe, companyId: r, apiUrl: e.apiUrl, mockMode: !0 } : await Gn(r, e.apiUrl), f = Jn(s, e);
    if (f.enabled === !1 || f.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let u = t.shadowRoot;
    u || (u = t.attachShadow({ mode: "open" })), u.innerHTML = "";
    const g = document.createElement("style");
    g.textContent = Zn, u.appendChild(g);
    const b = document.createElement("div");
    b.className = "pitaj-shadow-mount", u.appendChild(b);
    const p = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((y = t.closest) != null && y.call(t, "[data-pitaj-preview]")));
    if (p) {
      const A = document.createElement("style");
      A.textContent = qn, u.appendChild(A);
    }
    hi(
      /* @__PURE__ */ a(
        Rn,
        {
          config: f,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: p,
          initialScreen: e.initialScreen,
          onEvent: pa
        }
      ),
      b
    );
    const v = Pe();
    return v && (t.__pitajController = v), {
      controller: v,
      unmount: () => {
        hi(null, b), u && (u.innerHTML = "");
      }
    };
  }, o = (i || Promise.resolve()).then(n, n);
  ft.set(t, o);
  try {
    return await o;
  } finally {
    ft.get(t) === o && ft.delete(t);
  }
}
let nt = null;
const gt = {
  mount: async (t, e) => {
    const i = await Ft(t, e);
    return nt = i.unmount, i;
  },
  unmount: () => {
    nt && (nt(), nt = null);
  },
  init: async (t) => {
    const e = Qn(t.containerId || "pitaj-io-widget-root"), i = await Ft(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return nt = i.unmount, i;
  },
  open: () => {
    var t;
    return (t = Pe()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = Pe()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = Pe()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = Pe()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = Pe()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = Pe()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = Pe()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    Be[t] || (Be[t] = []), Be[t].push(e);
  },
  off: (t, e) => {
    Be[t] && (Be[t] = Be[t].filter((i) => i !== e));
  },
  emit: (t, e) => {
    pa(t, e);
  }
};
class Xn extends HTMLElement {
  constructor() {
    super(...arguments);
    De(this, "unmountFn", null);
  }
  async connectedCallback() {
    const i = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", r = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", c = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await Ft(this, { widgetId: i, apiUrl: n, position: o, startOpen: r, isInline: c });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Li(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const i = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", r = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: i, position: n, startOpen: o, isInline: r };
}
var Pi;
if (typeof window < "u") {
  const t = ((Pi = window.PitajIO) == null ? void 0 : Pi._q) || [];
  window.PitajIO = gt, customElements.get("pitaj-io") || customElements.define("pitaj-io", Xn);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, gt.init(e).then(() => {
      t.forEach(({ method: i, args: n }) => {
        const o = gt[i];
        typeof o == "function" && o(...n);
      });
    });
  else {
    const i = document.currentScript;
    let n = Li(i);
    if (!n) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let r = o.length - 1; r >= 0; r--) {
        const c = o[r];
        if (c.src && /widget(\.iife)?\.js/i.test(c.src) && (n = Li(c), n))
          break;
      }
    }
    n && gt.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  ee as A,
  xr as B,
  cr as C,
  Mr as D,
  rn as E,
  ia as F,
  Sr as G,
  tr as H,
  Gt as I,
  ur as J,
  mr as K,
  hr as L,
  pr as M,
  fr as N,
  gr as O,
  zt as P,
  gt as Q,
  Zi as R,
  _e as S,
  He as T,
  rr as U,
  lr as W,
  qi as a,
  Qa as b,
  wt as c,
  U as d,
  nr as e,
  or as f,
  sr as g,
  q as h,
  ir as i,
  Le as j,
  ba as k,
  _r as l,
  vr as m,
  wr as n,
  br as o,
  Nt as p,
  dr as q,
  qa as r,
  kr as s,
  B as t,
  a as u,
  yr as v,
  Re as w,
  ar as x,
  jr as y,
  an as z
};
