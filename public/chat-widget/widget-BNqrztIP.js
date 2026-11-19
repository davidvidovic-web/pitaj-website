var ya = Object.defineProperty;
var ka = (t, e, i) => e in t ? ya(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var We = (t, e, i) => ka(t, typeof e != "symbol" ? e + "" : e, i);
var Dt, re, Ki, Ve, ji, Yi, Wi, Ft, Mt, bt, Zi, Xt, Zt, Gt, Lt = {}, Tt = [], _a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Bt = Array.isArray;
function Re(t, e) {
  for (var i in e) t[i] = e[i];
  return t;
}
function ei(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Sa(t, e, i) {
  var n, r, o, p = {};
  for (o in e) o == "key" ? n = e[o] : o == "ref" ? r = e[o] : p[o] = e[o];
  if (arguments.length > 2 && (p.children = arguments.length > 3 ? Dt.call(arguments, 2) : i), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) p[o] === void 0 && (p[o] = t.defaultProps[o]);
  return Nt(t, p, n, r, null);
}
function Nt(t, e, i, n, r) {
  var o = { type: t, props: e, key: i, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++Ki, __i: -1, __u: 0 };
  return r == null && re.vnode != null && re.vnode(o), o;
}
function Le(t) {
  return t.children;
}
function zt(t, e) {
  this.props = t, this.context = e;
}
function Je(t, e) {
  if (e == null) return t.__ ? Je(t.__, t.__i + 1) : null;
  for (var i; e < t.__k.length; e++) if ((i = t.__k[e]) != null && i.__e != null) return i.__e;
  return typeof t.type == "function" ? Je(t) : null;
}
function Ma(t) {
  if (t.__P && t.__d) {
    var e = t.__v, i = e.__e, n = [], r = [], o = Re({}, e);
    o.__v = e.__v + 1, re.vnode && re.vnode(o), ti(t.__P, o, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [i] : null, n, i ?? Je(e), !!(32 & e.__u), r), o.__v = e.__v, o.__.__k[o.__i] = o, Xi(n, o, r), e.__e = e.__ = null, o.__e != i && Gi(o);
  }
}
function Gi(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Gi(t);
}
function wi(t) {
  (!t.__d && (t.__d = !0) && Ve.push(t) && !Pt.__r++ || ji != re.debounceRendering) && ((ji = re.debounceRendering) || Yi)(Pt);
}
function Pt() {
  try {
    for (var t, e = 1; Ve.length; ) Ve.length > e && Ve.sort(Wi), t = Ve.shift(), e = Ve.length, Ma(t);
  } finally {
    Ve.length = Pt.__r = 0;
  }
}
function Ji(t, e, i, n, r, o, p, s, m, d, h) {
  var v, c, g, u, k, I, L = n && n.__k || Tt, M = e.length;
  for (m = Na(i, e, L, m, M), v = 0; v < M; v++) (g = i.__k[v]) != null && (c = g.__i != -1 && L[g.__i] || Lt, g.__i = v, I = ti(t, g, c, r, o, p, s, m, d, h), u = g.__e, g.ref && c.ref != g.ref && (c.ref && ii(c.ref, null, g), h.push(g.ref, g.__c || u, g)), k == null && u != null && (k = u), 4 & g.__u ? (m = qi(g, m, t), c.__e && (c.__e = null)) : typeof g.type == "function" && I !== void 0 ? m = I : u && (m = u.nextSibling), g.__u &= -7);
  return i.__e = k, m;
}
function Na(t, e, i, n, r) {
  var o, p, s, m, d, h = i.length, v = h, c = 0;
  for (t.__k = new Array(r), o = 0; o < r; o++) (p = e[o]) != null && typeof p != "boolean" && typeof p != "function" ? (typeof p == "string" || typeof p == "number" || typeof p == "bigint" || p.constructor == String ? p = t.__k[o] = Nt(null, p, null, null, null) : Bt(p) ? p = t.__k[o] = Nt(Le, { children: p }, null, null, null) : p.constructor === void 0 && p.__b > 0 ? p = t.__k[o] = Nt(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : t.__k[o] = p, m = o + c, p.__ = t, p.__b = t.__b + 1, s = null, (d = p.__i = za(p, i, m, v)) != -1 && (v--, (s = i[d]) && (s.__u |= 2)), s == null || s.__v == null ? (d == -1 && (r > h ? c-- : r < h && c++), typeof p.type != "function" && (p.__u |= 4)) : d != m && (d == m - 1 ? c-- : d == m + 1 ? c++ : (d > m ? c-- : c++, p.__u |= 4))) : t.__k[o] = null;
  if (v) for (o = 0; o < h; o++) (s = i[o]) != null && (2 & s.__u) == 0 && (s.__e == n && (n = Je(s)), ta(s, s));
  return n;
}
function qi(t, e, i) {
  var n, r;
  if (typeof t.type == "function") {
    for (n = t.__k, r = 0; n && r < n.length; r++) n[r] && (n[r].__ = t, e = qi(n[r], e, i));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = Je(t)), e = i.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function za(t, e, i, n) {
  var r, o, p, s = t.key, m = t.type, d = e[i], h = d != null && (2 & d.__u) == 0;
  if (d === null && s == null || h && s == d.key && m == d.type) return i;
  if (n > (h ? 1 : 0)) {
    for (r = i - 1, o = i + 1; r >= 0 || o < e.length; ) if ((d = e[p = r >= 0 ? r-- : o++]) != null && (2 & d.__u) == 0 && s == d.key && m == d.type) return p;
  }
  return -1;
}
function xi(t, e, i) {
  e[0] == "-" ? t.setProperty(e, i ?? "") : t[e] = i == null ? "" : typeof i != "number" || _a.test(e) ? i : i + "px";
}
function yt(t, e, i, n, r) {
  var o, p;
  e: if (e == "style") if (typeof i == "string") t.style.cssText = i;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) i && e in i || xi(t.style, e, "");
    if (i) for (e in i) n && i[e] == n[e] || xi(t.style, e, i[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(Zi, "$1")), p = e.toLowerCase(), e = p in t || e == "onFocusOut" || e == "onFocusIn" ? p.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = i, i ? n ? i[bt] = n[bt] : (i[bt] = Xt, t.addEventListener(e, o ? Gt : Zt, o)) : t.removeEventListener(e, o ? Gt : Zt, o);
  else {
    if (r == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = i ?? "";
      break e;
    } catch {
    }
    typeof i == "function" || (i == null || i === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && i == 1 ? "" : i));
  }
}
function yi(t) {
  return function(e) {
    if (this.l) {
      var i = this.l[e.type + t];
      if (e[Mt] == null) e[Mt] = Xt++;
      else if (e[Mt] < i[bt]) return;
      return i(re.event ? re.event(e) : e);
    }
  };
}
function ti(t, e, i, n, r, o, p, s, m, d) {
  var h, v, c, g, u, k, I, L, M, B, ee, l, T, S, O, R, P = e.type;
  if (e.constructor !== void 0) return null;
  128 & i.__u && (m = !!(32 & i.__u), o = [s = e.__e = i.__e]), (h = re.__b) && h(e);
  e: if (typeof P == "function") {
    v = p.length;
    try {
      if (M = e.props, B = P.prototype && P.prototype.render, ee = (h = P.contextType) && n[h.__c], l = h ? ee ? ee.props.value : h.__ : n, i.__c ? L = (c = e.__c = i.__c).__ = c.__E : (B ? e.__c = c = new P(M, l) : (e.__c = c = new zt(M, l), c.constructor = P, c.render = Ia), ee && ee.sub(c), c.state || (c.state = {}), c.__n = n, g = c.__d = !0, c.__h = [], c._sb = []), B && c.__s == null && (c.__s = c.state), B && P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Re({}, c.__s)), Re(c.__s, P.getDerivedStateFromProps(M, c.__s))), u = c.props, k = c.state, c.__v = e, g) B && P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), B && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (B && P.getDerivedStateFromProps == null && M !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(M, l), e.__v == i.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(M, c.__s, l) === !1) {
          e.__v != i.__v && (c.props = M, c.state = c.__s, c.__d = !1), e.__e = i.__e, e.__k = i.__k, e.__k.some(function($) {
            $ && ($.__ = e);
          }), Tt.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && p.push(c), s = Je(i);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(M, c.__s, l), B && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(u, k, I);
        });
      }
      if (c.context = l, c.props = M, c.__P = t, c.__e = !1, T = re.__r, S = 0, B) c.state = c.__s, c.__d = !1, T && T(e), h = c.render(c.props, c.state, c.context), Tt.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, T && T(e), h = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++S < 25);
      c.state = c.__s, c.getChildContext != null && (n = Re(Re({}, n), c.getChildContext())), B && !g && c.getSnapshotBeforeUpdate != null && (I = c.getSnapshotBeforeUpdate(u, k)), O = h != null && h.type === Le && h.key == null ? ea(h.props.children) : h, s = Ji(t, Bt(O) ? O : [O], e, i, n, r, o, p, s, m, d), c.base = e.__e, e.__u &= -161, c.__h.length && p.push(c), L && (c.__E = c.__ = null);
    } catch ($) {
      if (p.length = v, e.__v = null, m || o != null) {
        if ($.then) {
          for (e.__u |= m ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
          o != null && (o[o.indexOf(s)] = null), e.__e = s;
        } else if (o != null) for (R = o.length; R--; ) ei(o[R]);
      } else e.__e = i.__e;
      e.__k == null && (e.__k = i.__k || []), $.then || Qi(e), re.__e($, e, i);
    }
  } else o == null && e.__v == i.__v ? (e.__k = i.__k, e.__e = i.__e) : s = e.__e = Aa(i.__e, e, i, n, r, o, p, m, d);
  return (h = re.diffed) && h(e), 128 & e.__u ? void 0 : s;
}
function Qi(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Qi));
}
function Xi(t, e, i) {
  for (var n = 0; n < i.length; n++) ii(i[n], i[++n], i[++n]);
  re.__c && re.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(o) {
        o.call(r);
      });
    } catch (o) {
      re.__e(o, r.__v);
    }
  });
}
function ea(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Bt(t) ? t.map(ea) : t.constructor !== void 0 ? null : Re({}, t);
}
function Aa(t, e, i, n, r, o, p, s, m) {
  var d, h, v, c, g, u, k, I = i.props || Lt, L = e.props, M = e.type;
  if (M == "svg" ? r = "http://www.w3.org/2000/svg" : M == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), o != null) {
    for (d = 0; d < o.length; d++) if ((g = o[d]) && "setAttribute" in g == !!M && (M ? g.localName == M : g.nodeType == 3)) {
      t = g, o[d] = null;
      break;
    }
  }
  if (t == null) {
    if (M == null) return document.createTextNode(L);
    t = document.createElementNS(r, M, L.is && L), s && (re.__m && re.__m(e, o), s = !1), o = null;
  }
  if (M == null) I === L || s && t.data == L || (t.data = L);
  else {
    if (o = M == "textarea" && L.defaultValue != null ? null : o && Dt.call(t.childNodes), !s && o != null) for (I = {}, d = 0; d < t.attributes.length; d++) I[(g = t.attributes[d]).name] = g.value;
    for (d in I) g = I[d], d == "dangerouslySetInnerHTML" ? v = g : d == "children" || d in L || d == "value" && "defaultValue" in L || d == "checked" && "defaultChecked" in L || yt(t, d, null, g, r);
    for (d in L) g = L[d], d == "children" ? c = g : d == "dangerouslySetInnerHTML" ? h = g : d == "value" ? u = g : d == "checked" ? k = g : s && typeof g != "function" || I[d] === g || yt(t, d, g, I[d], r);
    if (h) s || v && (h.__html == v.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (v && (t.innerHTML = ""), Ji(e.type == "template" ? t.content : t, Bt(c) ? c : [c], e, i, n, M == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, o, p, o ? o[0] : i.__k && Je(i, 0), s, m), o != null) for (d = o.length; d--; ) ei(o[d]);
    s && M != "textarea" || (d = "value", M == "progress" && u == null ? t.removeAttribute("value") : u != null && (u !== t[d] || M == "progress" && !u || M == "option" && u != I[d]) && yt(t, d, u, I[d], r), d = "checked", k != null && k != t[d] && yt(t, d, k, I[d], r));
  }
  return t;
}
function ii(t, e, i) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (r) {
    re.__e(r, i);
  }
}
function ta(t, e, i) {
  var n, r;
  if (re.unmount && re.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || ii(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (o) {
      re.__e(o, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (r = 0; r < n.length; r++) n[r] && ta(n[r], e, i || typeof t.type != "function");
  i || ei(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ia(t, e, i) {
  return this.constructor(t, i);
}
function ki(t, e, i) {
  var n, r, o, p;
  e == document && (e = document.documentElement), re.__ && re.__(t, e), r = (n = !1) ? null : e.__k, o = [], p = [], ti(e, t = e.__k = Sa(Le, null, [t]), r || Lt, Lt, e.namespaceURI, r ? null : e.firstChild ? Dt.call(e.childNodes) : null, o, r ? r.__e : e.firstChild, n, p), Xi(o, t, p), t.props.children = null;
}
Dt = Tt.slice, re = { __e: function(t, e, i, n) {
  for (var r, o, p; e = e.__; ) if ((r = e.__c) && !r.__) try {
    if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(t)), p = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, n || {}), p = r.__d), p) return r.__E = r;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Ki = 0, zt.prototype.setState = function(t, e) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = Re({}, this.state), typeof t == "function" && (t = t(Re({}, i), this.props)), t && Re(i, t), t != null && this.__v && (e && this._sb.push(e), wi(this));
}, zt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), wi(this));
}, zt.prototype.render = Le, Ve = [], Yi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wi = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Pt.__r = 0, Ft = Math.random().toString(8), Mt = "__d" + Ft, bt = "__a" + Ft, Zi = /(PointerCapture)$|Capture$/i, Xt = 0, Zt = yi(!1), Gt = yi(!0);
var Ca = 0;
function a(t, e, i, n, r, o) {
  e || (e = {});
  var p, s, m = e;
  if ("ref" in m) for (s in m = {}, e) s == "ref" ? p = e[s] : m[s] = e[s];
  var d = { type: t, props: m, key: i, ref: p, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ca, __i: -1, __u: 0, __source: r, __self: o };
  if (typeof t == "function" && (p = t.defaultProps)) for (s in p) m[s] === void 0 && (m[s] = p[s]);
  return re.vnode && re.vnode(d), d;
}
var jt, ue, Ot, _i, wt = 0, ia = [], he = re, Si = he.__b, Mi = he.__r, Ni = he.diffed, zi = he.__c, Ai = he.unmount, Ii = he.__;
function ai(t, e) {
  he.__h && he.__h(ue, t, wt || e), wt = 0;
  var i = ue.__H || (ue.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function Y(t) {
  return wt = 1, La(na, t);
}
function La(t, e, i) {
  var n = ai(jt++, 2);
  if (n.t = t, !n.__c && (n.__ = [na(void 0, e), function(s) {
    var m = n.__N ? n.__N[0] : n.__[0], d = n.t(m, s);
    m !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = ue, !ue.__f)) {
    var r = function(s, m, d) {
      if (!n.__c.__H) return !0;
      var h = !1, v = n.__c.props !== s;
      if (n.__c.__H.__.some(function(g) {
        if (g.__N) {
          h = !0;
          var u = g.__[0];
          g.__ = g.__N, g.__N = void 0, u !== g.__[0] && (v = !0);
        }
      }), o) {
        var c = o.call(this, s, m, d);
        return h ? c || v : c;
      }
      return !h || v;
    };
    ue.__f = !0;
    var o = ue.shouldComponentUpdate, p = ue.componentWillUpdate;
    ue.componentWillUpdate = function(s, m, d) {
      if (this.__e) {
        var h = o;
        o = void 0, r(s, m, d), o = h;
      }
      p && p.call(this, s, m, d);
    }, ue.shouldComponentUpdate = r;
  }
  return n.__N || n.__;
}
function J(t, e) {
  var i = ai(jt++, 3);
  !he.__s && aa(i.__H, e) && (i.__ = t, i.u = e, ue.__H.__h.push(i));
}
function ie(t) {
  return wt = 5, Ge(function() {
    return { current: t };
  }, []);
}
function Ge(t, e) {
  var i = ai(jt++, 7);
  return aa(i.__H, e) && (i.__ = t(), i.__H = e, i.__h = t), i.__;
}
function se(t, e) {
  return wt = 8, Ge(function() {
    return t;
  }, e);
}
function Ta() {
  for (var t; t = ia.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(At), e.__h.some(Jt), e.__h = [];
    } catch (i) {
      e.__h = [], he.__e(i, t.__v);
    }
  }
}
he.__b = function(t) {
  ue = null, Si && Si(t);
}, he.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ii && Ii(t, e);
}, he.__r = function(t) {
  Mi && Mi(t), jt = 0;
  var e = (ue = t.__c).__H;
  e && (Ot === ue ? (e.__h = [], ue.__h = [], e.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (e.__h.some(At), e.__h.some(Jt), e.__h = [], jt = 0)), Ot = ue;
}, he.diffed = function(t) {
  Ni && Ni(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ia.push(e) !== 1 && _i === he.requestAnimationFrame || ((_i = he.requestAnimationFrame) || Pa)(Ta)), e.__H.__.some(function(i) {
    i.u && (i.__H = i.u, i.u = void 0);
  })), Ot = ue = null;
}, he.__c = function(t, e) {
  e.some(function(i) {
    try {
      i.__h.some(At), i.__h = i.__h.filter(function(n) {
        return !n.__ || Jt(n);
      });
    } catch (n) {
      e.some(function(r) {
        r.__h && (r.__h = []);
      }), e = [], he.__e(n, i.__v);
    }
  }), zi && zi(t, e);
}, he.unmount = function(t) {
  Ai && Ai(t);
  var e, i = t.__c;
  i && i.__H && (i.__H.__.some(function(n) {
    try {
      At(n);
    } catch (r) {
      e = r;
    }
  }), i.__H = void 0, e && he.__e(e, i.__v));
};
var Ci = typeof requestAnimationFrame == "function";
function Pa(t) {
  var e, i = function() {
    clearTimeout(n), Ci && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(i, 35);
  Ci && (e = requestAnimationFrame(i));
}
function At(t) {
  var e = ue, i = t.__c;
  typeof i == "function" && (t.__c = void 0, i()), ue = e;
}
function Jt(t) {
  var e = ue;
  t.__c = t.__(), ue = e;
}
function aa(t, e) {
  return !t || t.length !== e.length || e.some(function(i, n) {
    return i !== t[n];
  });
}
function na(t, e) {
  return typeof e == "function" ? e(t) : e;
}
class oa extends Error {
  constructor(i, n = 60, r) {
    super(i);
    We(this, "retryAfterSeconds");
    We(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = r;
  }
}
class ni extends Error {
  constructor(i, n, r, o) {
    super(i);
    We(this, "status");
    We(this, "code");
    We(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = r, this.retryAfterSeconds = o;
  }
}
function Ea(t, e) {
  const i = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(i) && i > 0 ? Math.floor(i) : e;
}
async function Ht(t, e) {
  const i = await t.json().catch(() => null);
  ra(t.status, i, e, t.headers.get("Retry-After"));
}
function ra(t, e, i, n) {
  const r = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, o = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || i, p = Ea((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || r === "RATE_LIMIT_EXCEEDED" ? new oa(o, p, r) : new ni(o, t, r, p);
}
const Vt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map();
function $a(t, e) {
  const n = `pitaj_widget_session_v2:${(e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "")}:${t}`;
  ft.delete(n);
  try {
    localStorage.removeItem(n);
  } catch {
  }
}
async function Be(t, e) {
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = `pitaj_widget_session_v2:${i}:${t}`;
  if (ft.has(n)) return ft.get(n);
  try {
    const p = localStorage.getItem(n);
    if (p)
      return ft.set(n, p), p;
  } catch {
  }
  const r = Vt.get(n);
  if (r) return r;
  const o = (async () => {
    const p = await fetch(`${i}/api/widget/${encodeURIComponent(t)}/v2/session`, {
      method: "POST",
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!p.ok) throw new Error("Nije moguće pokrenuti sigurnu sesiju.");
    const s = await p.json();
    if (typeof s.token != "string" || !/^[a-f0-9]{64}$/.test(s.token)) throw new Error("Neispravan odgovor sesije.");
    ft.set(n, s.token);
    try {
      localStorage.setItem(n, s.token);
    } catch {
    }
    return s.token;
  })();
  Vt.set(n, o);
  try {
    return await o;
  } finally {
    Vt.delete(n);
  }
}
async function Da(t, e, i, n, r) {
  if (!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1) throw new Error("Razgovor nije dostupan.");
  const o = (r || window.location.origin).replace(/\/$/, ""), p = await Be(t, r), s = await fetch(`${o}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/action-dismissals`, {
    method: "POST",
    cache: "no-store",
    headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${p}` },
    body: JSON.stringify({ action_id: i, dismissal_uuid: n })
  });
  s.ok || await Ht(s, "Poruku nije moguće sačuvati.");
  const m = await s.json();
  if (typeof m.message != "string" || !m.message.trim() || m.message.length > 1020) throw new Error("Neispravan odgovor.");
  return m.message;
}
function Ba(t, e) {
  var n, r, o, p;
  const i = (r = (n = e.widget) == null ? void 0 : n.config) == null ? void 0 : r.event_key;
  return {
    widgetId: t,
    actionId: e.id,
    name: e.name,
    formId: e.form_id ?? null,
    inlineWidgetId: e.widget_id ?? ((o = e.widget) == null ? void 0 : o.id) ?? null,
    clientActionKey: ((p = e.widget) == null ? void 0 : p.type) === "action_client" && typeof i == "string" && /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(i) ? i : null
  };
}
const Ha = 1200;
let Et = [], vt = null, Qe = null;
async function Ua(t, e) {
  if (e.length === 0) return;
  const i = (t.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const n = await Be(t.companyId, t.apiUrl);
    await fetch(`${i}/api/widget/${encodeURIComponent(t.companyId)}/v2/catalog-events`, {
      method: "POST",
      keepalive: !0,
      headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${n}` },
      body: JSON.stringify({
        conversation_id: t.conversationId && /^[1-9]\d*$/.test(t.conversationId) ? Number(t.conversationId) : void 0,
        events: e.slice(0, 20)
      })
    });
  } catch {
  }
}
function Kt() {
  vt && clearTimeout(vt), vt = null;
  const t = Et, e = Qe;
  Et = [], Qe = null, e && Ua(e, t);
}
function Ra(t, e) {
  if (!(!Number.isSafeInteger(e.product_id) || e.product_id < 1)) {
    if (Qe && (Qe.conversationId !== t.conversationId || Qe.companyId !== t.companyId) && Kt(), Qe = t, Et.push(e), e.type === "clicked" || Et.length >= 20) {
      Kt();
      return;
    }
    vt || (vt = setTimeout(Kt, Ha));
  }
}
async function Fa(t, e) {
  const i = t.body;
  if (!i)
    throw new Error("Response body is null");
  const n = i.getReader(), r = new TextDecoder("utf-8");
  let o = "";
  try {
    for (; ; ) {
      const { done: p, value: s } = await n.read();
      if (p)
        break;
      o += r.decode(s, { stream: !0 });
      const m = o.split(/\r?\n/);
      o = m.pop() || "";
      for (const d of m) {
        const h = d.trim();
        if (!(!h || h.startsWith(":")) && h.startsWith("data:")) {
          const v = h.slice(5).trim();
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
              const g = c.suggestedQuestions ?? c.suggested_questions;
              Array.isArray(g) && g.length > 0 && e.onSuggestedQuestions && e.onSuggestedQuestions(g), e.onConversationId && (c.conversation_id !== void 0 || c.conversationId !== void 0) && e.onConversationId(
                c.conversation_id ?? c.conversationId
              );
              const u = c.ticket_number ?? c.ticketNumber;
              e.onTicketNumber && u !== void 0 && u !== null && String(u).trim() !== "" && String(u).trim() !== "undefined" && String(u).trim() !== "null" && e.onTicketNumber(
                String(u).trim()
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
function sa(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function oi(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Oa(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return oi(e.of(t));
  } catch {
    return null;
  }
}
function Va() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const i = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (i) {
        const n = JSON.parse(i);
        t = sa(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = oi(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Oa(t)), { code: t, name: e };
}
const Li = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Ka(t, e, i, n) {
  var m;
  const r = (n == null ? void 0 : n.action) || (i && i.length > 0 ? i[0] : null);
  if (r && e.onActionTrigger) {
    const v = (!!(r.widget_id || r.widget || n != null && n.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let c = 0; c < v.length; c++) {
      const g = v[c] + (c < v.length - 1 ? " " : "");
      e.onChunk(g), await new Promise((u) => setTimeout(u, 20));
    }
    e.onActionTrigger({
      id: r.id,
      name: r.name,
      form_id: r.form_id,
      widget_id: r.widget_id,
      widget: r.widget || (n == null ? void 0 : n.widget) || null
    }), e.onDone && e.onDone();
    return;
  }
  const o = `${Li[Math.floor(Math.random() * Li.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, p = ((m = n == null ? void 0 : n.content) == null ? void 0 : m.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = o.split(" ");
  for (let d = 0; d < s.length; d++) {
    const h = s[d] + (d < s.length - 1 ? " " : "");
    e.onChunk(h), await new Promise((v) => setTimeout(v, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && p.length > 0 && e.onSuggestedQuestions(p), e.onDone && e.onDone();
}
async function Ya(t) {
  const {
    companyId: e,
    conversationId: i,
    visitorId: n,
    message: r,
    forceNewConversation: o,
    apiUrl: p,
    mockMode: s,
    visitorName: m,
    visitorEmail: d,
    visitorPhone: h,
    visitorCountryCode: v,
    visitorCountryName: c,
    actions: g,
    previewDraft: u,
    callbacks: k
  } = t;
  if (s || !e || e === "default") {
    await Ka(r, k, g, u);
    return;
  }
  const I = (p || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), L = Va(), M = sa(v) ?? L.code ?? void 0, B = oi(c) ?? L.name ?? void 0, ee = await Be(e, p), l = `${I}/api/widget/${encodeURIComponent(e)}/v2/chat`, T = i && !i.startsWith("conv-") ? parseInt(i, 10) : null, S = await fetch(l, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ee}`,
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: r,
      conversation_id: T,
      force_new_conversation: o === !0,
      visitor_id: n,
      visitor_language: t.visitorLanguage || void 0,
      visitor_name: m || void 0,
      visitor_email: d || void 0,
      visitor_phone: h || void 0,
      visitor_country_code: M,
      visitor_country_name: B
    })
  });
  if (S.ok || await Ht(S, `API greška (${S.status})`), (S.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Fa(S, k);
  else {
    const R = await S.json(), P = R.answer || R.message || "";
    R.conversation_id !== void 0 && k.onConversationId && k.onConversationId(R.conversation_id);
    const $ = R.ticket_number ?? R.ticketNumber;
    if ($ != null && String($).trim() !== "" && String($).trim() !== "undefined" && String($).trim() !== "null" && k.onTicketNumber && k.onTicketNumber(String($).trim()), R.ai_paused === !0 && k.onAiPaused && k.onAiPaused(), R.triggered_action && k.onActionTrigger && k.onActionTrigger(R.triggered_action), P && P.trim()) {
      const te = P.split(" ");
      for (let Q = 0; Q < te.length; Q++) {
        const oe = te[Q] + (Q < te.length - 1 ? " " : "");
        k.onChunk(oe), await new Promise((Z) => setTimeout(Z, 15));
      }
    }
    const E = R.suggestedQuestions ?? R.suggested_questions;
    Array.isArray(E) && E.length > 0 && k.onSuggestedQuestions && k.onSuggestedQuestions(E), k.onDone && k.onDone();
  }
}
async function qt(t) {
  const { widgetId: e, visitorId: i, apiUrl: n, status: r, page: o = 1, perPage: p = 15 } = t, s = (n || "").replace(/\/$/, ""), m = new URLSearchParams({
    page: String(o),
    per_page: String(p)
  });
  r && m.set("status", r);
  const d = await Be(e, n), h = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/v2/tickets?${m}`, { headers: { Authorization: `Bearer ${d}` } }), v = await h.json().catch(() => null);
  if (!h.ok) throw new Error(v && "error" in v ? v.error : "Tikete nije moguće učitati.");
  const c = (v == null ? void 0 : v.data) || [], g = c.map((I) => ({
    id: I.id,
    ticketNumber: I.ticket_number,
    conversationId: I.conversation_id,
    isResolved: !!I.is_resolved,
    updatedAt: I.updated_at,
    messages: (I.messages || []).map((L) => {
      var M;
      return {
        id: String(L.id),
        content: L.content,
        sender: L.role === "user" ? "user" : "ai",
        timestamp: L.created_at,
        status: "sent",
        suggestedQuestions: ((M = L.meta_json) == null ? void 0 : M.suggested_questions) || void 0
      };
    })
  })), u = v == null ? void 0 : v.meta, k = (u == null ? void 0 : u.has_more) !== void 0 ? !!u.has_more : c.length >= p;
  return {
    tickets: g,
    hasMore: k,
    total: u == null ? void 0 : u.total,
    currentPage: (u == null ? void 0 : u.current_page) ?? o
  };
}
async function Wa(t, e, i) {
  return (await qt({ widgetId: t, visitorId: e, apiUrl: i, page: 1, perPage: 50 })).tickets;
}
async function Za(t, e, i, n, r) {
  const o = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || r || !o)
    return await new Promise((d) => setTimeout(d, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: i };
  const p = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await Be(t, n), m = await fetch(`${p}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${s}` },
    body: JSON.stringify({ satisfaction: i })
  });
  if (!m.ok) {
    const h = (await m.json().catch(() => ({}))).error || (m.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), v = new Error(h);
    throw v.status = m.status, v;
  }
  return await m.json();
}
function Ti(t, e = "bs", i = ["bs"]) {
  var d, h;
  const n = (i && i.length > 0 ? i : [e]).map((v) => v.trim().toLowerCase()), r = (e || "bs").trim().toLowerCase();
  let o = "";
  if (t === "website" ? typeof document < "u" && (o = ((d = document.documentElement) == null ? void 0 : d.lang) || ((h = document.querySelector("html")) == null ? void 0 : h.getAttribute("lang")) || "") : typeof navigator < "u" && (o = navigator.language || navigator.languages && navigator.languages[0] || ""), !o || typeof o != "string")
    return r;
  let m = o.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (m === "hr" || m === "sr") && !n.includes(m) && n.includes("bs") && (m = "bs"), n.includes(m) ? m : r;
}
function _o(t, e, i) {
  const n = t.current_step;
  return t.run_id !== e.run_id || t.status !== "waiting_input" || (n == null ? void 0 : n.type) !== "wait_submission" || Object.prototype.hasOwnProperty.call(n, "widget") && (!n.widget || n.widget.id !== n.widget_id) || n.form_revision != null && n.form_revision !== e.form_revision ? null : n.widget_id === i && n.display_node_id === e.display_node_id ? n.node_id : null;
}
function Pi(t, e) {
  var o;
  const i = t.current_step;
  if (!i) return null;
  const n = t.status === "waiting_display" && i.type === "show_widget" ? i.node_id : t.status === "waiting_input" && i.type === "wait_submission" ? i.display_node_id : null;
  if (!n) return null;
  const r = Object.prototype.hasOwnProperty.call(i, "widget") ? i.widget : e.find((p) => p.id === i.widget_id);
  if ((r == null ? void 0 : r.id) !== i.widget_id) return null;
  if (r && t.status === "waiting_display") {
    const p = (o = r.config) == null ? void 0 : o.function_revision, s = i.function_revision;
    if ((p || s) && (!p || !s || p !== s)) return null;
  }
  return r ? { ...r, workflow: { run_id: t.run_id, display_node_id: n, ...t.status === "waiting_input" && i.form_revision ? { form_revision: i.form_revision } : {} } } : null;
}
function Ga(t, e) {
  if (!e.workflow) return t;
  const { run_id: i, display_node_id: n } = e.workflow, r = `workflow-${i}-${n}`, o = t.messages.findIndex((p) => {
    var s, m, d, h;
    return p.id === r || ((m = (s = p.widget) == null ? void 0 : s.workflow) == null ? void 0 : m.run_id) === i && ((h = (d = p.widget) == null ? void 0 : d.workflow) == null ? void 0 : h.display_node_id) === n;
  });
  if (o >= 0) {
    const p = t.messages[o];
    if (JSON.stringify(p.widget) === JSON.stringify(e)) return t;
    const s = [...t.messages];
    return s[o] = { ...p, widget: e }, { ...t, messages: s };
  }
  return { ...t, messages: [...t.messages, { id: r, content: "", sender: "ai", timestamp: (/* @__PURE__ */ new Date()).toISOString(), widget: e }] };
}
function Ja(t, e) {
  let i = !1;
  const n = setTimeout(() => {
    i || (i = !0, e("timeout"));
  }, t);
  return {
    complete(r) {
      return i || !r || typeof r != "object" || typeof r.success != "boolean" ? !1 : (i = !0, clearTimeout(n), e(r.success ? "success" : "failed"), !0);
    },
    cancel() {
      i || (i = !0, clearTimeout(n));
    }
  };
}
async function qa(t, e, i, n, r, o) {
  if (!(!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1))
    try {
      const p = (o || window.location.origin).replace(/\/$/, ""), s = await Be(t, o);
      await fetch(`${p}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/client-action-results`, {
        method: "POST",
        cache: "no-store",
        headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${s}` },
        body: JSON.stringify({ action_id: i, event_uuid: n, state: r })
      });
    } catch {
    }
}
async function Qa(t) {
  const e = (t.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const i = await Be(t.companyId, t.apiUrl), n = await fetch(
      `${e}/api/widget/${encodeURIComponent(t.companyId)}/v2/conversations/${encodeURIComponent(t.conversationId)}/live?after=${t.after}`,
      { headers: { Authorization: `Bearer ${i}`, Accept: "application/json" }, cache: "no-store" }
    );
    if (!n.ok) return null;
    const r = await n.json();
    return {
      aiPaused: r.ai_paused === !0,
      isResolved: r.is_resolved === !0,
      messages: Array.isArray(r.messages) ? r.messages : []
    };
  } catch {
    return null;
  }
}
async function Xa(t) {
  const e = (t.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const i = await Be(t.companyId, t.apiUrl);
    await fetch(
      `${e}/api/widget/${encodeURIComponent(t.companyId)}/v2/conversations/${encodeURIComponent(t.conversationId)}/presence`,
      {
        method: "POST",
        keepalive: !0,
        cache: "no-store",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${i}` },
        body: JSON.stringify({ state: t.state })
      }
    );
  } catch {
  }
}
const en = 3e3, tn = 15e3, an = 3e4, nn = 1800 * 1e3, It = 60 * 1e3, on = 2e4, rn = 5 * It;
function sn(t) {
  return !t.hidden && t.idleMs <= rn;
}
function Ei(t) {
  const { aiPaused: e, hidden: i, idleMs: n } = t;
  return i || n > nn ? null : e ? n <= 5 * It ? en : 1e4 : n <= 2 * It ? tn : n <= 10 * It ? 3e4 : 6e4;
}
const $t = "op-";
function cn(t) {
  let e = 0;
  for (const i of t) {
    if (!i.isHuman || !i.id.startsWith($t)) continue;
    const n = Number(i.id.slice($t.length));
    Number.isFinite(n) && n > e && (e = n);
  }
  return e;
}
function pn(t, e) {
  const i = new Set(t.map((r) => r.id)), n = e.filter((r) => r && typeof r.content == "string" && r.content.trim() !== "" && !i.has($t + r.id)).map((r) => ({
    id: $t + r.id,
    content: r.content,
    sender: "ai",
    timestamp: r.created_at || (/* @__PURE__ */ new Date()).toISOString(),
    status: "sent",
    isHuman: !0,
    authorName: r.author_name || null
  }));
  return { messages: n.length > 0 ? [...t, ...n] : t, added: n.length };
}
const $i = "pitaj_io_visitor_id", ln = "chat_direkt_visitor_id", dn = "pitaj_io_visitor_meta", un = "chat_direkt_visitor_meta";
function ri(t) {
  return `pitaj_io_convs_v2_${t}`;
}
function mn() {
  try {
    let t = localStorage.getItem($i) || localStorage.getItem(ln);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem($i, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const hn = [];
function fn(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function gn(t) {
  return t.filter((e) => !fn(e)).map((e) => {
    const i = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: i, messages: (e.messages || []).map((n) => {
      var r, o;
      return ((r = n.widget) == null ? void 0 : r.type) === "action_client" && ((o = n.widget.config) == null ? void 0 : o.client_action_state) === "pending" ? { ...n, widget: { ...n.widget, config: { ...n.widget.config, client_action_state: "unknown" } } } : n;
    }) };
  });
}
function Di(t) {
  try {
    const e = localStorage.getItem(ri(t));
    if (e) {
      const i = JSON.parse(e);
      if (Array.isArray(i))
        return gn(i);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return hn;
}
function bn(t, e) {
  try {
    localStorage.setItem(ri(t), JSON.stringify(e));
  } catch (i) {
    console.warn("[Pitaj.io] Error saving to localStorage", i);
  }
}
function Bi(t) {
  var r, o, p, s, m, d, h, v, c, g, u, k;
  const e = t.previewDraft, i = (/* @__PURE__ */ new Date()).toISOString(), n = (e == null ? void 0 : e.initialStep) || "idle";
  if (n === "idle") {
    const I = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", L = (r = e == null ? void 0 : e.action) != null && r.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: I,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: I,
            sender: "ai",
            timestamp: i,
            status: "sent",
            suggestedQuestions: L.length > 0 ? L : void 0
          }
        ]
      }
    ];
  }
  if (n === "form") {
    const I = (e == null ? void 0 : e.simulatedUserMessage) || ((o = e == null ? void 0 : e.action) == null ? void 0 : o.trigger_hint) || "Pokreni akciju", M = !!((p = e == null ? void 0 : e.action) != null && p.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", B = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((m = e == null ? void 0 : e.action) == null ? void 0 : m.name) || "Pregled akcije",
        preview: M,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: I,
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
            widget: B
          }
        ]
      }
    ];
  }
  if (n === "submitted") {
    const I = (e == null ? void 0 : e.simulatedUserMessage) || ((d = e == null ? void 0 : e.action) == null ? void 0 : d.trigger_hint) || "Pokreni akciju", L = ((h = e == null ? void 0 : e.form) == null ? void 0 : h.name) || ((v = e == null ? void 0 : e.action) == null ? void 0 : v.name) || "Forma", M = ((c = e == null ? void 0 : e.form) == null ? void 0 : c.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: L,
        preview: M,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: I,
            sender: "user",
            timestamp: new Date(Date.now() - 4e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-form-sub",
            content: `Forma: ${L}
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
    const I = (e == null ? void 0 : e.simulatedUserMessage) || ((g = e == null ? void 0 : e.action) == null ? void 0 : g.trigger_hint) || "Pokreni akciju", L = ((u = e == null ? void 0 : e.action) == null ? void 0 : u.dismiss_message) || "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((k = e == null ? void 0 : e.action) == null ? void 0 : k.name) || "Pregled akcije",
        preview: L,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: I,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-dismiss",
            content: L,
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
function vn(t, e) {
  var Ke, Xe, et, tt, it, at, nt, ot, rt, st, ct, pt, lt, dt, ut, y, x, N, W, me, ke, $e, Ye;
  const i = !!(t.isPreview || t.previewDraft), [n, r] = Y(t), [o, p] = Y((e == null ? void 0 : e.startOpen) ?? !1), [s, m] = Y(
    (e == null ? void 0 : e.initialScreen) ?? (i ? "conversation" : "new-conversation")
  ), [d, h] = Y(
    () => i ? Bi(t) : Di(t.companyId)
  ), v = ie([]);
  v.current = d;
  const [c, g] = Y(() => {
    if (i) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const f = Di(t.companyId);
      return f.length > 0 ? f[0].id : null;
    }
    return null;
  }), [u, k] = Y(!1), [I, L] = Y({}), M = ie({});
  M.current = I;
  const B = ie(Date.now()), ee = ie(Date.now()), [l, T] = Y(0), [S, O] = Y(null), [R, P] = Y(null), [$, E] = Y(!1), [te, Q] = Y(
    () => {
      var f, _, A;
      return Ti(
        (f = t.content) == null ? void 0 : f.languageSource,
        ((_ = t.content) == null ? void 0 : _.defaultLanguage) || "bs",
        ((A = t.content) == null ? void 0 : A.supportedLanguages) || ["bs"]
      );
    }
  );
  J(() => {
    var _, A, b;
    const f = Ti(
      (_ = n.content) == null ? void 0 : _.languageSource,
      ((A = n.content) == null ? void 0 : A.defaultLanguage) || "bs",
      ((b = n.content) == null ? void 0 : b.supportedLanguages) || ["bs"]
    );
    Q(f);
  }, [
    (Ke = n.content) == null ? void 0 : Ke.languageSource,
    (Xe = n.content) == null ? void 0 : Xe.defaultLanguage,
    (et = n.content) == null ? void 0 : et.supportedLanguages
  ]);
  const oe = ie(mn()), [Z, de] = Y(() => {
    try {
      const f = localStorage.getItem(dn) || localStorage.getItem(un);
      if (f) {
        const _ = JSON.parse(f), A = {};
        return typeof _.name == "string" && (A.name = _.name), typeof _.email == "string" && (A.email = _.email), typeof _.phone == "string" && (A.phone = _.phone), A;
      }
    } catch (f) {
      console.warn("[Pitaj.io] Error reading visitor meta", f);
    }
    return {};
  }), C = ie(e == null ? void 0 : e.emitEvent);
  C.current = e == null ? void 0 : e.emitEvent;
  const j = ie(e == null ? void 0 : e.onActionTrigger);
  j.current = e == null ? void 0 : e.onActionTrigger;
  const D = ie(/* @__PURE__ */ new Map());
  J(() => () => {
    D.current.forEach((f) => f()), D.current.clear();
  }, []);
  const le = se((f, _) => {
    const A = Number.isFinite(f) ? Math.max(1, Math.floor(f)) : 60;
    O((b) => b === null ? A : Math.max(b, A)), P(_ || `Previše zahtjeva. Molimo sačekajte ${A}s.`);
  }, []), ae = se((f) => {
    if (f) {
      if (f === "WIDGET_CHAT_DISABLED") {
        r((_) => ({ ..._, chatAvailable: !1 })), P("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (f === "WIDGET_TRANSCRIBE_DISABLED") {
        r((_) => ({ ..._, transcribeAvailable: !1 })), P("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      f === "WIDGET_FORMS_DISABLED" && (r((_) => ({ ..._, formsAvailable: !1, formsEnabled: !1 })), P("Forme su trenutno privremeno nedostupne."));
    }
  }, []), ze = se((f, _ = "Došlo je do greške pri obradi zahtjeva.") => {
    var b, z, X, q;
    if (f instanceof oa) {
      le(f.retryAfterSeconds, f.message), (b = C.current) == null || b.call(C, "error_occurred", { code: f.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (f instanceof ni) {
      if (f.code === "WIDGET_SESSION_INVALID" || f.code === "WIDGET_SESSION_REQUIRED") {
        E(!0), P("Sesija je istekla. Pokrenite novu sesiju za nastavak razgovora.");
        return;
      }
      if (f.code === "COUNTRY_BLOCKED") {
        r((je) => ({ ...je, chatAvailable: !1 })), P(f.message || "Pristup nije dozvoljen u vašoj regiji."), (z = C.current) == null || z.call(C, "error_occurred", { status: f.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      ae(f.code), P(f.message || _), (X = C.current) == null || X.call(C, "error_occurred", { status: f.status, code: f.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let A = f instanceof Error ? f.message : _;
    !A || A === "Failed to fetch" || A.includes("NetworkError") ? A = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : A.includes("404") ? A = "Traženi razgovor ili podaci nisu pronađeni." : (A.includes("500") || A.includes("502") || A.includes("503")) && (A = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), P(A || _), (q = C.current) == null || q.call(C, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [le, ae]), Ne = se(() => {
    try {
      const f = ri(n.companyId), _ = localStorage.getItem(f);
      _ && localStorage.setItem(`${f}:archive:${Date.now()}`, _);
    } catch {
    }
    $a(n.companyId, n.apiUrl), h([]), g(null), E(!1), P(null), m("new-conversation");
  }, [n.companyId, n.apiUrl]);
  J(() => {
    n.isPreview || n.mockMode || n.companyId === "preview" || bn(n.companyId, d);
  }, [d, n.companyId, n.isPreview, n.mockMode]), J(() => {
    if (n.isPreview || n.previewDraft) {
      const f = Bi(n);
      h(f), g("preview-conv-1"), m("conversation");
    }
  }, [
    n.isPreview,
    (tt = n.previewDraft) == null ? void 0 : tt.revision,
    (it = n.previewDraft) == null ? void 0 : it.initialStep,
    (nt = (at = n.previewDraft) == null ? void 0 : at.action) == null ? void 0 : nt.id,
    (rt = (ot = n.previewDraft) == null ? void 0 : ot.action) == null ? void 0 : rt.name,
    (ct = (st = n.previewDraft) == null ? void 0 : st.action) == null ? void 0 : ct.trigger_hint,
    (lt = (pt = n.previewDraft) == null ? void 0 : pt.action) == null ? void 0 : lt.dismiss_message,
    (ut = (dt = n.previewDraft) == null ? void 0 : dt.form) == null ? void 0 : ut.id,
    (x = (y = n.previewDraft) == null ? void 0 : y.form) == null ? void 0 : x.name,
    (W = (N = n.previewDraft) == null ? void 0 : N.form) == null ? void 0 : W.success_message,
    (ke = (me = n.previewDraft) == null ? void 0 : me.widget) == null ? void 0 : ke.id,
    (Ye = ($e = n.previewDraft) == null ? void 0 : $e.widget) == null ? void 0 : Ye.type
  ]), J(() => {
    if (S === null || S <= 0) return;
    const f = setInterval(() => {
      O((_) => _ && _ > 1 ? _ - 1 : null);
    }, 1e3);
    return () => clearInterval(f);
  }, [S]), J(() => {
    if (!n.companyId || n.mockMode) return;
    let f = !0;
    return Wa(n.companyId, oe.current, n.apiUrl).then((_) => {
      !f || !_ || _.length === 0 || h((A) => {
        let b = !1;
        const z = A.map((X) => {
          const q = _.find((je) => String(je.id) === X.id);
          return q && q.ticketNumber && X.ticketNumber !== q.ticketNumber ? (b = !0, { ...X, ticketNumber: q.ticketNumber }) : X;
        });
        return b ? z : A;
      });
    }).catch(() => {
    }), () => {
      f = !1;
    };
  }, [n.companyId, n.apiUrl, n.mockMode]);
  const xe = d.find((f) => f.id === c) || null, Ae = d.reduce((f, _) => f + (_.unread || 0), 0), ye = se((f) => {
    p((_) => {
      var A;
      return _ === f ? _ : ((A = C.current) == null || A.call(C, f ? "widget_opened" : "widget_closed"), f);
    });
  }, []), fe = se((f) => {
    m((_) => {
      var A;
      return _ === f ? _ : ((A = C.current) == null || A.call(C, "screen_changed", { screen: f }), f);
    });
  }, []), ge = se((f) => {
    var _;
    g(f.id), h((A) => A.some((z) => z.id === f.id) ? A.map((z) => z.id === f.id ? { ...z, ...f, unread: 0, status: f.status || "active" } : z) : [{ ...f, unread: 0, status: f.status || "active" }, ...A]), m("conversation"), (_ = C.current) == null || _.call(C, "conversation_selected", { conversationId: f.id });
  }, []), He = se(() => {
    var f;
    h(
      (_) => _.map((A) => A.id === c ? { ...A, status: "ended" } : A)
    ), g(null), m("new-conversation"), (f = C.current) == null || f.call(C, "conversation_ended", { conversationId: c });
  }, [c]), Ie = se((f) => {
    h((_) => _.filter((A) => A.id !== f)), g((_) => _ === f ? null : _), c === f && m("new-conversation");
  }, [c]), Pe = se((f) => {
    var X;
    if (n.chatAvailable === !1) {
      P("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (S !== null) {
      P(`Previše zahtjeva. Molimo sačekajte ${S}s.`);
      return;
    }
    const _ = "conv-" + Date.now(), A = (/* @__PURE__ */ new Date()).toISOString(), b = f ? f.length > 40 ? f.slice(0, 40) + "…" : f : "Novo ćaskanje", z = {
      id: _,
      title: b,
      preview: f || "Započeto novo ćaskanje",
      timestamp: A,
      unread: 0,
      messages: f ? [
        {
          id: "msg-" + Date.now(),
          content: f,
          sender: "user",
          timestamp: A,
          status: "sent"
        }
      ] : []
    };
    h((q) => [z, ...q]), g(_), m("conversation"), (X = C.current) == null || X.call(C, "conversation_started", { conversationId: _, initialMessage: f }), f && Ee(_, f, [z.messages[0]], !0);
  }, [n.apiUrl, n.chatAvailable, n.companyId, n.mockMode, S, Z]), Ee = async (f, _, A, b = !1) => {
    var je;
    k(!0), P(null);
    const z = "ai-msg-" + Date.now(), X = {
      id: z,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    h(
      (K) => K.map((V) => V.id !== f ? V : {
        ...V,
        preview: _,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...V.messages.filter((U) => U.id !== z), X]
      })
    ), (je = C.current) == null || je.call(C, "stream_started", { conversationId: f }), B.current = Date.now();
    let q = !1;
    try {
      await Ya({
        companyId: n.companyId,
        conversationId: f,
        visitorId: oe.current,
        visitorLanguage: te,
        message: _,
        forceNewConversation: b || f.startsWith("conv-"),
        apiUrl: n.apiUrl,
        mockMode: n.mockMode || n.isPreview,
        visitorName: Z.name,
        visitorEmail: Z.email,
        visitorPhone: Z.phone,
        actions: n.actions,
        previewDraft: n.previewDraft,
        callbacks: {
          onConversationId: (K) => {
            const V = f, U = String(K);
            f = U, g(U), h(
              (ce) => ce.map((H) => H.id === V || H.messages.some((_e) => _e.id === z) ? { ...H, id: U } : H)
            );
          },
          onAiPaused: () => {
            q = !0, L((K) => ({ ...K, [f]: !0 }));
          },
          onTicketNumber: (K) => {
            const V = K && String(K).trim() !== "" && String(K).trim() !== "undefined" && String(K).trim() !== "null" ? String(K).trim() : null;
            V && h(
              (U) => U.map((ce) => ce.id === f || ce.messages.some((_e) => _e.id === z) ? { ...ce, ticketNumber: V } : ce)
            );
          },
          onActionTrigger: (K) => {
            var ce, H, _e;
            let V = K.widget || K.triggered_widget || (K.widget_id && n.widgets ? n.widgets.find((De) => De.id === K.widget_id) : null) || null, U;
            if ((ce = D.current.get(z)) == null || ce(), D.current.delete(z), (V == null ? void 0 : V.type) === "action_client" && ((H = V.config) == null ? void 0 : H.wait_for_response) === !0 && !n.isPreview && !n.mockMode) {
              V = { ...V, config: { ...V.config, client_action_state: "pending" } };
              const De = crypto.randomUUID(), Se = Ja(15e3, (Ue) => {
                qa(n.companyId, f, Number(K.id), De, Ue, n.apiUrl), D.current.get(z) === Se.cancel && D.current.delete(z), h((Ce) => Ce.map((Me) => ({ ...Me, messages: Me.messages.map((we) => {
                  var qe;
                  return we.id === z && ((qe = we.widget) == null ? void 0 : qe.type) === "action_client" ? { ...we, widget: { ...we.widget, config: { ...we.widget.config, client_action_state: Ue } } } : we;
                }) })));
              });
              D.current.set(z, Se.cancel), U = Se.complete;
            }
            V && h(
              (De) => De.map((Se) => Se.id === f || Se.messages.some((Ce) => Ce.id === z) ? {
                ...Se,
                messages: Se.messages.map(
                  (Ce) => Ce.id === z ? { ...Ce, widget: V } : Ce
                )
              } : Se)
            ), (_e = j.current) == null || _e.call(j, V ? { ...K, widget: V } : K, U);
          },
          onChunk: (K) => {
            h(
              (V) => V.map((U) => U.id === f || U.messages.some((H) => H.id === z) ? {
                ...U,
                messages: U.messages.map(
                  (H) => H.id === z ? { ...H, content: H.content + K } : H
                )
              } : U)
            );
          },
          onSources: (K) => {
            h(
              (V) => V.map((U) => U.id === f || U.messages.some((H) => H.id === z) ? {
                ...U,
                messages: U.messages.map(
                  (H) => H.id === z ? { ...H, sources: K } : H
                )
              } : U)
            );
          },
          onSuggestedQuestions: (K) => {
            h(
              (V) => V.map((U) => U.id === f || U.messages.some((H) => H.id === z) ? {
                ...U,
                messages: U.messages.map(
                  (H) => H.id === z ? { ...H, suggestedQuestions: K } : H
                )
              } : U)
            );
          },
          onDone: () => {
            var K;
            h(
              (V) => V.map((U) => {
                var Ue, Ce;
                if (!(U.id === f || U.messages.some((Me) => Me.id === z))) return U;
                const H = U.messages.find((Me) => Me.id === z), _e = (Ue = H == null ? void 0 : H.widget) == null ? void 0 : Ue.name, De = (Ce = H == null ? void 0 : H.content) == null ? void 0 : Ce.trim(), Se = De ? De.slice(0, 70) : _e ? `[${_e}]` : U.preview;
                return {
                  ...U,
                  preview: Se,
                  messages: q && !(H != null && H.content) && !(H != null && H.widget) ? U.messages.filter((Me) => Me.id !== z) : U.messages.map(
                    (Me) => Me.id === z ? { ...Me, isStreaming: !1 } : Me
                  )
                };
              })
            ), k(!1), (K = C.current) == null || K.call(C, "stream_completed", { conversationId: f });
          },
          onError: (K) => {
            console.error("[Pitaj.io] Stream error:", K), P(K.message || "Došlo je do greške u komunikaciji."), k(!1);
          }
        }
      });
    } catch (K) {
      k(!1), ze(K, "Greška pri slanju poruke.");
    }
  };
  J(() => {
    const f = c, _ = !!(f && /^\d+$/.test(f));
    if (i || n.mockMode || !o || !_ || !f) return;
    let A = !1, b;
    B.current = Date.now();
    const z = () => {
      if (A) return;
      const q = Ei({
        aiPaused: !!M.current[f],
        hidden: typeof document < "u" && document.hidden,
        idleMs: Date.now() - B.current
      });
      b = setTimeout(X, q ?? an);
    }, X = async () => {
      const q = Date.now() - B.current;
      if (!(Ei({ aiPaused: !!M.current[f], hidden: typeof document < "u" && document.hidden, idleMs: q }) === null)) {
        const K = v.current.find((U) => U.id === f), V = await Qa({
          companyId: n.companyId,
          conversationId: f,
          after: K ? cn(K.messages) : 0,
          apiUrl: n.apiUrl
        });
        if (A) return;
        V && (L((U) => !!U[f] === V.aiPaused ? U : { ...U, [f]: V.aiPaused }), V.messages.length > 0 && (B.current = Date.now(), h((U) => U.map((ce) => {
          if (ce.id !== f) return ce;
          const H = pn(ce.messages, V.messages);
          if (H.added === 0) return ce;
          const _e = H.messages[H.messages.length - 1];
          return { ...ce, messages: H.messages, preview: _e.content.slice(0, 70), timestamp: _e.timestamp };
        }))));
      }
      z();
    };
    return b = setTimeout(X, 1e3), () => {
      A = !0, b && clearTimeout(b);
    };
  }, [c, o, i, n.mockMode, n.companyId, n.apiUrl, l]), J(() => {
    const f = c, _ = !!(f && /^\d+$/.test(f));
    if (i || n.mockMode || !o || !_ || !f || typeof document > "u") return;
    let A = !1, b = !1, z;
    ee.current = Date.now();
    const X = (H) => {
      Xa({ companyId: n.companyId, conversationId: f, state: H, apiUrl: n.apiUrl });
    }, q = () => {
      b && (b = !1, X("leaving"));
    }, je = () => {
      A || (sn({ hidden: document.hidden, idleMs: Date.now() - ee.current }) ? (b = !0, X("active")) : q(), z = setTimeout(je, on));
    }, K = () => {
      z && clearTimeout(z), je();
    }, V = () => {
      ee.current = Date.now(), !b && !document.hidden && K();
    }, U = () => {
      document.hidden ? q() : K();
    }, ce = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"];
    return ce.forEach((H) => document.addEventListener(H, V, { capture: !0, passive: !0 })), document.addEventListener("visibilitychange", U), window.addEventListener("pagehide", q), je(), () => {
      A = !0, z && clearTimeout(z), ce.forEach((H) => document.removeEventListener(H, V, { capture: !0 })), document.removeEventListener("visibilitychange", U), window.removeEventListener("pagehide", q), q();
    };
  }, [c, o, i, n.mockMode, n.companyId, n.apiUrl]);
  const w = se((f) => {
    var z;
    const _ = f.trim();
    if (!_ || u || n.chatAvailable === !1 || S !== null) return;
    if (!c) {
      Pe(_);
      return;
    }
    const b = {
      id: "usr-msg-" + Date.now(),
      content: _,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    h(
      (X) => X.map((q) => q.id !== c ? q : {
        ...q,
        preview: _,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...q.messages, b]
      })
    ), B.current = Date.now(), T((X) => X + 1), (z = C.current) == null || z.call(C, "message_sent", { conversationId: c, content: _ }), Ee(c, _, xe ? xe.messages : []);
  }, [c, u, Pe, xe, n.chatAvailable, n.companyId, n.apiUrl, n.mockMode, S]), G = se(
    async (f, _, A) => {
      var b;
      if (!n.mockMode)
        try {
          await Za(
            n.companyId,
            f,
            _,
            n.apiUrl,
            n.mockMode
          );
        } catch (z) {
          console.error("[Pitaj.io] Failed to submit rating:", z);
          const X = (z == null ? void 0 : z.status) === 404 ? "Razgovor ili tiket više nije dostupan." : z != null && z.message && !z.message.includes("failed") && !z.message.includes("404") ? z.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(X);
        }
      h(
        (z) => z.map(
          (X) => X.id === f ? { ...X, satisfaction: _, ratingScore: A ?? X.ratingScore } : X
        )
      ), (b = C.current) == null || b.call(C, "rating_submitted", {
        conversationId: f,
        satisfaction: _,
        score: A
      });
    },
    [n.companyId, n.apiUrl, n.mockMode]
  ), ne = se(
    (f, _, A = "user") => {
      const b = _.trim();
      if (!b) return;
      const z = (/* @__PURE__ */ new Date()).toISOString(), X = `conv-${Date.now()}`, q = typeof f == "string" && f.trim().length > 0 ? f : X, je = {
        id: `local-${A}-msg-${Date.now()}`,
        content: b,
        sender: A,
        timestamp: z,
        status: "sent"
      };
      h(
        (K) => K.some((V) => V.id === q) ? K.map((V) => V.id !== q ? V : {
          ...V,
          preview: b.length > 70 ? `${b.slice(0, 70)}…` : b,
          timestamp: z,
          messages: [...V.messages, je]
        }) : [
          {
            id: q,
            title: "Forma",
            preview: b.length > 70 ? `${b.slice(0, 70)}…` : b,
            timestamp: z,
            unread: 0,
            messages: [je],
            status: "active"
          },
          ...K
        ]
      ), g(q), m("conversation");
    },
    []
  ), be = se((f, _) => {
    _.workflow && h((A) => A.map((b) => b.id === f ? Ga(b, _) : b));
  }, []), ve = (f) => {
    var _;
    return !!((_ = f.messages) != null && _.some((A) => A.sender === "ai"));
  };
  return {
    config: n,
    setConfig: r,
    isOpen: o,
    setIsOpen: ye,
    screen: s,
    setScreen: fe,
    conversations: d,
    activeConversation: xe,
    activeConversationId: c,
    activeConversationHumanActive: !!(c && I[c]),
    visitorContact: Z,
    visitorId: oe.current,
    activeConversationHasReply: xe ? ve(xe) : !1,
    totalUnread: Ae,
    isStreaming: u,
    rateLimitTimer: S,
    errorBanner: R,
    sessionInvalid: $,
    resetSession: Ne,
    setErrorBanner: P,
    activeLanguage: te,
    setActiveLanguage: Q,
    selectConversation: ge,
    startNewConversation: Pe,
    endConversation: He,
    deleteConversation: Ie,
    sendUserMessage: w,
    submitSatisfaction: G,
    appendConversationMessage: ne,
    appendWorkflowWidget: be,
    handleApiError: ze
  };
}
let Yt = null, ca = null;
function Hi(t, e) {
  e === null && t !== null && Yt !== null && Yt !== t || (Yt = e ? t : null, ca = e);
}
function Oe() {
  return ca;
}
function si(t, e) {
  let i = null;
  const n = () => i || (i = t().then((r) => {
    const o = e ? e(r) : r.default;
    if (!o)
      throw new Error("Lazy component not found");
    return o;
  }));
  return function(o) {
    const [p, s] = Y(null);
    return J(() => {
      let m = !0;
      return n().then((d) => {
        m && s(() => d);
      }).catch((d) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", d);
      }), () => {
        m = !1;
      };
    }, []), p ? /* @__PURE__ */ a(p, { ...o }) : /* @__PURE__ */ a("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function jn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ a("path", { d: "M5 3v4" }),
    /* @__PURE__ */ a("path", { d: "M19 17v4" }),
    /* @__PURE__ */ a("path", { d: "M3 5h4" }),
    /* @__PURE__ */ a("path", { d: "M17 19h4" })
  ] });
}
function pa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ a("path", { d: "M12 19V5" })
  ] });
}
function wn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ a("path", { d: "M19 12H5" })
  ] });
}
function Fe({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ a("path", { d: "m6 6 12 12" })
  ] });
}
function xn({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function So({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 5v14" }),
    /* @__PURE__ */ a("path", { d: "M5 12h14" })
  ] });
}
function Ct({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M20 6 9 17l-5-5" }) });
}
function yn({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function kn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v6" }),
    /* @__PURE__ */ a("path", { d: "M9 11h6" })
  ] });
}
function la({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function _n({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ a("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function Sn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function Mo({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] });
}
function Mn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ a("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ a("path", { d: "M12 7v5l4 2" })
  ] });
}
function Nn({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ a("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ a("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function zn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function da({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ a("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function An({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ a("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function ua({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ a("path", { d: "M10 9H8" }),
    /* @__PURE__ */ a("path", { d: "M16 13H8" }),
    /* @__PURE__ */ a("path", { d: "M16 17H8" })
  ] });
}
function In({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M7 10v12" }),
    /* @__PURE__ */ a("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function Cn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M17 14V2" }),
    /* @__PURE__ */ a("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function ma({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function No({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M8 2v4" }),
    /* @__PURE__ */ a("path", { d: "M16 2v4" }),
    /* @__PURE__ */ a("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ a("path", { d: "M3 10h18" })
  ] });
}
function zo({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 16V4" }),
    /* @__PURE__ */ a("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ a("path", { d: "M20 16v4H4v-4" })
  ] });
}
function Ao({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m15 18-6-6 6-6" }) });
}
function Io({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m9 18 6-6-6-6" }) });
}
function Co({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m6 9 6 6 6-6" }) });
}
function Lo({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M5 12h14" }) });
}
function Ln({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ a("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ a("path", { d: "M10 11v6" }),
    /* @__PURE__ */ a("path", { d: "M14 11v6" })
  ] });
}
function To({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ a("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ a("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ a("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function Po({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M10 2v2" }),
    /* @__PURE__ */ a("path", { d: "M14 2v2" }),
    /* @__PURE__ */ a("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ a("path", { d: "M6 2v2" })
  ] });
}
function Eo({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M15 2v19" }),
    /* @__PURE__ */ a("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M8 2v19" })
  ] });
}
function $o({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ a("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ a("path", { d: "M9 17h6" }),
    /* @__PURE__ */ a("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function Do({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function Bo({ size: t = 14, className: e = "" }) {
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
function Ho({ size: t = 14, className: e = "" }) {
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
function Uo({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ a("path", { d: "M7 7h.01" })
  ] });
}
function Ro({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function Fo({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ a("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ a("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function Oo({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ a("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ a("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function Vo({ size: t = 24, className: e = "" }) {
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
function Ko({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Yo({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Wo({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function Zo({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ a("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function Ut({ size: t = 13, className: e = "" }) {
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
function Tn({ size: t = 16, className: e = "" }) {
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
function Go({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("path", { d: "M12 16v-4" }),
    /* @__PURE__ */ a("path", { d: "M12 8h.01" })
  ] });
}
const mt = {
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
    operatorJoined: "Razgovarate s operaterom",
    priceNoteLabel: "Napomena o cijeni",
    productsTitle: "Proizvodi",
    productsUnavailable: "Proizvodi trenutno nisu dostupni.",
    productsPrevious: "Prethodni proizvodi",
    productsNext: "Sljedeći proizvodi",
    productsFrom: "od",
    productsView: "Pogledaj proizvod",
    productsBuy: "Kupi",
    productsAsk: "Zanima me proizvod:",
    priceStaleNote: "Cijena je važila na dan {date}. Provjerite je na stranici proizvoda.",
    catalogViewTable: "Cjenovnik",
    catalogViewCard: "Proizvod",
    catalogViewCompare: "Poređenje",
    catalogPrice: "Cijena",
    catalogAvailability: "Dostupnost",
    catalogNoData: "Nismo pronašli proizvode za ovaj upit.",
    manualMap: "Mapa",
    manualMore: "Više",
    manualBook: "Želim rezervisati",
    manualEmpty: "Trenutno nema unosa."
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
    operatorJoined: "You are chatting with a support agent",
    priceNoteLabel: "Price note",
    productsTitle: "Products",
    productsUnavailable: "Products are currently unavailable.",
    productsPrevious: "Previous products",
    productsNext: "Next products",
    productsFrom: "from",
    productsView: "View product",
    productsBuy: "Buy",
    productsAsk: "I'm interested in:",
    priceStaleNote: "Price as of {date}. Please check the product page.",
    catalogViewTable: "Price list",
    catalogViewCard: "Product",
    catalogViewCompare: "Comparison",
    catalogPrice: "Price",
    catalogAvailability: "Availability",
    catalogNoData: "We could not find products for this request.",
    manualMap: "Map",
    manualMore: "More",
    manualBook: "I want to book",
    manualEmpty: "There is nothing to show right now."
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
function F(t, e = "bs") {
  var r, o;
  const i = (e || "bs").toLowerCase().split(/[-_]/)[0], n = mt[i] || mt.bs || mt.en;
  return n && typeof n[t] == "string" ? n[t] : ((r = mt.bs) == null ? void 0 : r[t]) || ((o = mt.en) == null ? void 0 : o[t]) || t;
}
function Pn({
  screen: t,
  activeConversation: e,
  config: i,
  language: n = "bs",
  onBack: r,
  onClose: o,
  onNewConversation: p,
  onEndConversation: s,
  onDeleteConversation: m,
  onViewHistory: d,
  onViewTickets: h
}) {
  var ee;
  const [v, c] = Y(!1), g = ie(null), u = t === "conversation" && e, L = u || t === "history" || t === "tickets", M = i.title || i.name || "Pitaj.io Asistent";
  J(() => {
    var S;
    const l = (O) => {
      var P, $;
      const R = (($ = (P = O.composedPath) == null ? void 0 : P.call(O)) == null ? void 0 : $[0]) || O.target;
      g.current && R && !g.current.contains(R) && c(!1);
    };
    document.addEventListener("mousedown", l);
    const T = (S = g.current) == null ? void 0 : S.getRootNode();
    return T instanceof ShadowRoot && T.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l), T instanceof ShadowRoot && T.removeEventListener("mousedown", l);
    };
  }, []), J(() => {
    c(!1);
  }, [t]);
  const B = (l) => {
    c(!1), l == null || l();
  };
  return /* @__PURE__ */ a("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ a("div", { className: "pitaj-header-info", children: [
      L && /* @__PURE__ */ a(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": F("back", n),
          title: F("back", n),
          children: /* @__PURE__ */ a(wn, { size: 18 })
        }
      ),
      /* @__PURE__ */ a("div", { className: `pitaj-avatar ${((ee = i.content) == null ? void 0 : ee.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: i.logo || i.avatar ? /* @__PURE__ */ a("img", { src: i.logo || i.avatar, alt: i.name || "AI" }) : /* @__PURE__ */ a(Ut, { size: 18 }) }),
      /* @__PURE__ */ a("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-header-title", children: M }),
        u && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ a("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ a("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ a("div", { className: "pitaj-header-menu", ref: g, children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: () => c((l) => !l),
            className: `pitaj-icon-btn ${v ? "is-active" : ""}`,
            "aria-label": F("menu", n),
            "aria-expanded": v,
            title: F("menu", n),
            children: /* @__PURE__ */ a(yn, { size: 18 })
          }
        ),
        v && /* @__PURE__ */ a("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => B(p),
              children: [
                /* @__PURE__ */ a(kn, { size: 15, className: "pitaj-menu-item-icon" }),
                F("newConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !u,
              onClick: () => B(s),
              children: [
                /* @__PURE__ */ a(Sn, { size: 15, className: "pitaj-menu-item-icon" }),
                F("endConversation", n)
              ]
            }
          ),
          m && /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !u,
              onClick: () => B(m),
              children: [
                /* @__PURE__ */ a(Ln, { size: 15, className: "pitaj-menu-item-icon" }),
                F("deleteConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => B(d),
              children: [
                /* @__PURE__ */ a(Mn, { size: 15, className: "pitaj-menu-item-icon" }),
                F("viewHistory", n)
              ]
            }
          ),
          /* @__PURE__ */ a("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => B(h), children: [
            /* @__PURE__ */ a(zn, { size: 15, className: "pitaj-menu-item-icon" }),
            F("viewTickets", n)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": F("close", n),
          title: F("close", n),
          children: /* @__PURE__ */ a(Fe, { size: 18 })
        }
      )
    ] })
  ] });
}
function ha(t, e) {
  var n, r;
  if (!Number.isSafeInteger(t == null ? void 0 : t.run_id) || t.run_id < 1 || e !== void 0 && t.run_id !== e || !["waiting_display", "waiting_input", "completed", "failed", "expired", "cancelled"].includes(t.status))
    throw new Error("Neispravan odgovor procedure.");
  if (t.current_step && (!Number.isSafeInteger(t.current_step.widget_id) || t.current_step.widget_id < 1 || !/^[a-zA-Z0-9_-]{1,80}$/.test(t.current_step.node_id) || !["show_widget", "wait_submission"].includes(t.current_step.type) || t.current_step.display_node_id !== null && (typeof t.current_step.display_node_id != "string" || !/^[a-zA-Z0-9_-]{1,80}$/.test(t.current_step.display_node_id)) || t.current_step.form_revision != null && (typeof t.current_step.form_revision != "string" || !/^[a-f0-9]{64}$/.test(t.current_step.form_revision)) || t.current_step.function_revision != null && (typeof t.current_step.function_revision != "string" || !/^[a-f0-9]{64}$/.test(t.current_step.function_revision))))
    throw new Error("Neispravan korak procedure.");
  const i = (n = t.current_step) == null ? void 0 : n.widget;
  if (i != null && (typeof i != "object" || Array.isArray(i) || i.id !== ((r = t.current_step) == null ? void 0 : r.widget_id) || typeof i.name != "string" || typeof i.type != "string" || !i.config || typeof i.config != "object" || Array.isArray(i.config)))
    throw new Error("Neispravna konfiguracija widgeta procedure.");
  return t;
}
async function En(t, e, i, n) {
  if (!/^[1-9]\d*$/.test(e)) throw new Error("Neispravan identifikator razgovora.");
  const r = (i || window.location.origin).replace(/\/$/, ""), o = await Be(t, i), p = await fetch(`${r}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/executable-run`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${o}` },
    cache: "no-store",
    signal: n
  });
  p.ok || await Ht(p, "Nije moguće provjeriti proceduru.");
  const s = await p.json();
  return s.run === null ? null : ha(s.run);
}
async function Jo(t, e, i, n) {
  if (!Number.isSafeInteger(e) || e < 1) throw new Error("Neispravan identifikator procedure.");
  const r = (i || window.location.origin).replace(/\/$/, ""), o = await Be(t, i), p = `${r}/api/widget/${encodeURIComponent(t)}/v2/executable-runs/${e}`, s = await fetch(n ? `${p}/display-ack` : p, {
    method: n ? "POST" : "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${o}`, ...n ? { "Content-Type": "application/json" } : {} },
    ...n ? { body: JSON.stringify({ node_id: n }) } : {}
  });
  s.ok || await Ht(s, "Status procedure nije dostupan.");
  const m = await s.json();
  return ha(m, e);
}
function $n({ content: t }) {
  if (!t)
    return /* @__PURE__ */ a("span", {});
  const e = t.split(`
`), i = [];
  let n = !1, r = [];
  for (let o = 0; o < e.length; o++) {
    const p = e[o];
    if (p.startsWith("```")) {
      n ? (i.push(
        /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: r.join(`
`) }) }, `code-${o}`)
      ), r = [], n = !1) : n = !0;
      continue;
    }
    if (n) {
      r.push(p);
      continue;
    }
    if (p.trim().startsWith("- ") || p.trim().startsWith("* ")) {
      const m = p.trim().slice(2);
      i.push(
        /* @__PURE__ */ a("ul", { children: /* @__PURE__ */ a("li", { children: Wt(m) }) }, `ul-${o}`)
      );
      continue;
    }
    const s = p.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      i.push(
        /* @__PURE__ */ a("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ a("li", { children: Wt(s[2]) }) }, `ol-${o}`)
      );
      continue;
    }
    if (!p.trim()) {
      i.push(/* @__PURE__ */ a("div", { style: { height: "6px" } }, `sp-${o}`));
      continue;
    }
    i.push(/* @__PURE__ */ a("p", { children: Wt(p) }, `p-${o}`));
  }
  return n && r.length > 0 && i.push(
    /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: r.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ a("div", { className: "pitaj-markdown", children: i });
}
function Wt(t) {
  const e = [];
  let i = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let r;
  for (; (r = n.exec(t)) !== null; ) {
    r.index > i && e.push(...Ui(t.slice(i, r.index)));
    const o = r[0];
    if (o.startsWith("`") && o.endsWith("`"))
      e.push(
        /* @__PURE__ */ a("code", { children: o.slice(1, -1) }, `c-${r.index}`)
      );
    else if (o.startsWith("**") && o.endsWith("**"))
      e.push(
        /* @__PURE__ */ a("strong", { children: o.slice(2, -2) }, `b-${r.index}`)
      );
    else if (o.startsWith("*") && o.endsWith("*"))
      e.push(
        /* @__PURE__ */ a("em", { children: o.slice(1, -1) }, `i-${r.index}`)
      );
    else if (o.startsWith("[") && o.includes("](")) {
      const p = o.slice(1, o.indexOf("](")), s = o.slice(o.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ a("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: p }, `a-${r.index}`)
      );
    }
    i = r.index + o.length;
  }
  return i < t.length && e.push(...Ui(t.slice(i))), e;
}
const Dn = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Bn = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, Hn = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), Un = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Ui(t) {
  const e = [];
  let i;
  for (; (i = Dn.exec(t)) !== null; ) {
    const o = i[0].replace(/[.,;:!?]+$/, "");
    o && e.push({
      start: i.index,
      end: i.index + o.length,
      href: o.startsWith("www.") ? `https://${o}` : o,
      external: !0
    });
  }
  for (; (i = Bn.exec(t)) !== null; )
    e.push({
      start: i.index,
      end: i.index + i[0].length,
      href: `mailto:${i[0]}`,
      external: !1
    });
  for (; (i = Hn.exec(t)) !== null; ) {
    const o = i[0];
    Un.test(o) || e.push({
      start: i.index,
      end: i.index + o.length,
      href: `tel:${o.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((o, p) => o.start - p.start);
  const n = [];
  let r = 0;
  for (const o of e)
    o.start < r || (o.start > r && n.push(t.slice(r, o.start)), n.push(
      /* @__PURE__ */ a(
        "a",
        {
          href: o.href,
          ...o.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: t.slice(o.start, o.end)
        },
        `l-${o.start}`
      )
    ), r = o.end);
  return r < t.length && n.push(t.slice(r)), n;
}
function fa({
  rows: t,
  fallbackQuestions: e,
  onSelect: i,
  buttonClassName: n,
  containerClassName: r,
  revealDelayMs: o = 0,
  staggerMs: p = 140
}) {
  const s = Ge(() => Array.isArray(t) && t.length > 0 ? t.map((g) => ({
    text: g.text.trim(),
    children: (g.children ?? []).map((u) => u.trim()).filter(Boolean)
  })).filter((g) => g.text !== "") : (e ?? []).map((g) => g.trim()).filter(Boolean).map((g) => ({ text: g, children: [] })), [e, t]), [m, d] = Y(null), [h, v] = Y(s.length);
  if (J(() => {
    d(null);
  }, [s]), J(() => {
    if (m) {
      v(s.length);
      return;
    }
    if (o <= 0) {
      v(s.length);
      return;
    }
    v(0);
    const g = window.setTimeout(() => {
      v(1);
      const u = window.setInterval(() => {
        v((k) => k >= s.length ? (window.clearInterval(u), k) : k + 1);
      }, Math.max(60, p));
    }, o);
    return () => {
      window.clearTimeout(g);
    };
  }, [m, s.length, o, p]), s.length === 0)
    return null;
  const c = s.find((g) => g.text === m && g.children.length > 0) ?? null;
  return c ? /* @__PURE__ */ a("div", { className: r, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => d(null),
        className: n,
        children: "Nazad"
      }
    ),
    c.children.map((g, u) => /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => i(g),
        className: n,
        children: g
      },
      `${c.text}-${u}`
    ))
  ] }) : /* @__PURE__ */ a("div", { className: r, children: s.slice(0, h).map((g, u) => /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: () => g.children.length > 0 ? d(g.text) : i(g.text),
      className: `${n} pitaj-suggestion-enter`,
      children: g.text
    },
    `${g.text}-${u}`
  )) });
}
const Rn = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Fn = [".txt", ".md", ".csv", ".json", ".xml"];
function On(t) {
  if (Rn.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Fn.some((i) => e.endsWith(i));
}
async function ga(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (i) => {
      const n = i.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(i.name);
      let r = null;
      if (n && typeof URL < "u")
        try {
          r = URL.createObjectURL(i);
        } catch {
          r = null;
        }
      const o = On(i) ? (await i.text()).slice(0, 4e3) : null;
      return {
        id: `${i.name}-${i.lastModified}-${i.size}`,
        name: i.name,
        textContent: o,
        previewUrl: r,
        isImage: n
      };
    })
  );
}
function ba(t) {
  return t.length === 0 ? "" : `

${t.map((i) => i.textContent && i.textContent.trim() !== "" ? `[Prilog: ${i.name}]
${i.textContent.trim()}` : `[Prilog: ${i.name}]`).join(`

`)}`;
}
async function Vn(t) {
  const { widgetId: e, audio: i, apiUrl: n } = t, r = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), o = new FormData();
  o.append("audio", i, "dictation.webm");
  const p = await fetch(`${r}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: o,
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
          for (const g of c)
            if (typeof g == "string" && g.trim() !== "")
              return g;
        }
      return null;
    })();
    ra(
      p.status,
      d,
      typeof v == "string" && v || `Transkripcija nije uspjela (${p.status})`,
      p.headers.get("Retry-After")
    );
  }
  const s = await p.json(), m = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!m)
    throw new Error("Transkripcija nije vratila tekst.");
  return m;
}
function va({ widgetId: t, apiUrl: e, onTranscript: i, onError: n }) {
  const o = ie(null), p = ie(null), s = ie([]), m = ie(!0), d = ie(null), h = ie(null), v = ie(null), c = ie(null), g = ie(Array.from({ length: 42 }, () => 0.06)), [u, k] = Y(!1), [I, L] = Y(!1), [M, B] = Y(
    () => Array.from({ length: 42 }, () => 0.06)
  ), ee = Ge(() => {
    var E;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((E = navigator.mediaDevices) != null && E.getUserMedia);
  }, [t]), l = se(() => {
    p.current && (p.current.getTracks().forEach((E) => E.stop()), p.current = null);
  }, []), T = se(() => {
    var E;
    d.current !== null && (window.cancelAnimationFrame(d.current), d.current = null), (E = c.current) == null || E.disconnect(), c.current = null, v.current = null, h.current && (h.current.close(), h.current = null);
  }, []), S = se(() => {
    const E = Array.from({ length: 42 }, () => 0.06);
    g.current = E, B(E);
  }, []), O = se((E) => {
    const te = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!te)
      return;
    const Q = new te(), oe = Q.createAnalyser();
    oe.fftSize = 2048, oe.smoothingTimeConstant = 0.78;
    const Z = Q.createMediaStreamSource(E);
    Z.connect(oe), h.current = Q, v.current = oe, c.current = Z;
    const de = new Uint8Array(oe.fftSize), C = () => {
      const j = v.current;
      if (!j) return;
      j.getByteTimeDomainData(de);
      let D = 0;
      for (let Ne = 0; Ne < de.length; Ne += 1) {
        const xe = (de[Ne] - 128) / 128;
        D += xe * xe;
      }
      const le = Math.sqrt(D / de.length), ae = Math.max(0.04, Math.min(1, le * 5.2)), ze = g.current.slice(1);
      ze.push(ae), g.current = ze, B(ze), d.current = window.requestAnimationFrame(C);
    };
    d.current = window.requestAnimationFrame(C);
  }, []), R = se(async () => {
    if (!(!ee || I || o.current || u))
      try {
        const te = await navigator.mediaDevices.getUserMedia({ audio: !0 }), Q = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], Z = typeof MediaRecorder.isTypeSupported == "function" ? Q.find((C) => MediaRecorder.isTypeSupported(C)) : void 0, de = Z ? new MediaRecorder(te, { mimeType: Z }) : new MediaRecorder(te);
        s.current = [], m.current = !0, p.current = te, o.current = de, S(), O(te), de.ondataavailable = (C) => {
          C.data.size > 0 && s.current.push(C.data);
        }, de.onstop = async () => {
          k(!1);
          const C = new Blob(s.current, { type: de.mimeType || "audio/webm" });
          if (s.current = [], o.current = null, l(), T(), C.size === 0) {
            S();
            return;
          }
          if (!m.current) {
            S();
            return;
          }
          L(!0);
          try {
            const j = await Vn({
              widgetId: t,
              apiUrl: e,
              audio: C
            });
            i(j);
          } catch (j) {
            console.error("[Pitaj.io] Dictation transcription failed", j), n == null || n(j);
          } finally {
            L(!1), S();
          }
        }, de.onerror = () => {
          k(!1), o.current = null, l(), T(), S();
        }, de.start(), k(!0);
      } catch (te) {
        k(!1), l(), T(), S(), console.error("[Pitaj.io] Dictation microphone access failed", te);
      }
  }, [e, u, I, ee, n, i, S, O, l, T, t]), P = se(() => {
    const E = o.current;
    !E || !u || I || (m.current = !0, E.stop(), k(!1));
  }, [u, I]), $ = se(() => {
    const E = o.current;
    !E || !u || (m.current = !1, E.stop(), k(!1));
  }, [u]);
  return J(() => () => {
    const E = o.current;
    E && E.state !== "inactive" && E.stop(), l(), T();
  }, [l, T]), {
    isSupported: ee,
    isListening: u,
    isProcessing: I,
    waveformLevels: M,
    start: R,
    stopAndTranscribe: P,
    cancel: $
  };
}
const Kn = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Ri() {
  const [t, e] = Y(0);
  return J(() => {
    const i = setTimeout(() => e(1), 1600), n = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(i), clearTimeout(n);
    };
  }, []), /* @__PURE__ */ a("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ a(Tn, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ a("span", { className: "pitaj-thinking-text", children: Kn[t] }, t)
  ] });
}
const Yn = si(
  () => import("./InlineWidgetRenderer-TOav_YiR.js"),
  (t) => t.InlineWidgetRenderer
);
function Wn(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Zn(t) {
  const e = t.split(`
`).map((o) => o.trim()).filter((o) => o.length > 0);
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
  const r = e.slice(1).map((o) => {
    if (!o.startsWith("- ") && !o.startsWith("* ")) return null;
    const p = o.slice(2), s = p.indexOf(":");
    if (s < 1) return null;
    const m = p.slice(0, s).trim(), d = p.slice(s + 1).trim();
    return !m || !d ? null : { label: m, value: d };
  }).filter((o) => !!o);
  return r.length < 1 ? null : { title: i, entries: r };
}
function Gn({
  conversation: t,
  config: e,
  language: i = "bs",
  humanActive: n = !1,
  onProductEvent: r,
  isStreaming: o,
  rateLimitCountdown: p,
  errorBanner: s,
  sessionInvalid: m,
  onResetSession: d,
  onSendMessage: h,
  onApiError: v,
  onWorkflowWidget: c,
  onSubmitSatisfaction: g
}) {
  var Ie, Pe, Ee;
  const u = (w) => {
    if (!w.current_step || !["waiting_display", "waiting_input"].includes(w.status)) return;
    const ne = Pi(w, e.widgets || []);
    if (!ne) {
      v == null || v(new Error("Sljedeći widget procedure nije dostupan."));
      return;
    }
    c == null || c(ne);
  }, [k, I] = Y(""), [L, M] = Y(!1), [B, ee] = Y(0), l = ie(c);
  l.current = c;
  const T = ie(v);
  T.current = v, J(() => {
    if (o || e.isPreview || e.previewDraft || e.mockMode || t.status === "ended" || !/^[1-9]\d*$/.test(t.id)) return;
    const w = new AbortController();
    return M(!1), En(e.companyId, t.id, e.apiUrl, w.signal).then((G) => {
      var be;
      if (w.signal.aborted || !G) return;
      const ne = Pi(G, e.widgets || []);
      if (!ne) {
        M(!0);
        return;
      }
      (be = l.current) == null || be.call(l, ne);
    }).catch((G) => {
      var ne;
      w.signal.aborted || (G instanceof ni && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED"].includes(G.code || "") && ((ne = T.current) == null || ne.call(T, G)), M(!0));
    }), () => w.abort();
  }, [e.companyId, e.apiUrl, e.isPreview, e.previewDraft, e.mockMode, e.widgets, t.id, t.status, B, o]);
  const [S, O] = Y(!1), [R, P] = Y(null), [$, E] = Y([]), te = ie(null), Q = ie(null), oe = ie(null), Z = e.content || {}, de = e.chatAvailable === !1, C = e.transcribeAvailable === !1, j = o || p !== null || de, D = va({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: se((w) => {
      I((G) => G ? `${G} ${w}` : w);
    }, []),
    onError: se((w) => {
      v == null || v(w, "Greška pri transkripciji.");
    }, [v])
  });
  J(() => {
    const w = te.current;
    w && (w.scrollTop = w.scrollHeight);
  }, [t.messages, o]), J(() => {
    const w = Q.current;
    w && (w.style.height = "auto", w.style.height = `${Math.min(w.scrollHeight, 96)}px`);
  }, [k]), J(() => {
    O(!1);
  }, [Z.dismissibleNotice]);
  const le = (w) => {
    E((G) => {
      const ne = G.find((be) => be.id === w);
      if (ne != null && ne.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ne.previewUrl);
        } catch {
        }
      return G.filter((be) => be.id !== w);
    });
  }, ae = (w) => {
    const G = (w ?? k).trim();
    if (!G && $.length === 0 || j) return;
    const ne = `${G}${ba($)}`.trim();
    h(ne), $.forEach((be) => {
      if (be.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(be.previewUrl);
        } catch {
        }
    }), E([]), w || (I(""), Q.current && (Q.current.style.height = "auto"));
  }, ze = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), ae());
  }, Ne = Z.messagePlaceholder || e.placeholder || F("placeholder", i), xe = ((Ie = Z.dismissibleNotice) == null ? void 0 : Ie.trim()) || "", Ae = ((Pe = Z.footerText) == null ? void 0 : Pe.trim()) || "", ye = Z.showSuggestedMessages === !1 || Z.keepShowingSuggestedMessages !== !0 ? [] : Z.suggestedMessageRows || [], fe = ((Ee = [...t.messages].reverse().find((w) => w.sender === "ai")) == null ? void 0 : Ee.id) ?? null, ge = D.isListening, He = async (w, G) => {
    navigator.clipboard && (await navigator.clipboard.writeText(G), P(w), window.setTimeout(() => {
      P((ne) => ne === w ? null : ne);
    }, 1600));
  };
  return /* @__PURE__ */ a("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ a("div", { ref: te, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ a("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-conversation-ticket-label", children: F("ticketNumber", i) }),
        /* @__PURE__ */ a("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ a("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ a("span", { className: "pitaj-date-label", children: F("today", i) }),
        /* @__PURE__ */ a("div", { className: "pitaj-date-line" })
      ] }),
      n && /* @__PURE__ */ a("div", { className: "pitaj-human-chip", role: "status", children: F("operatorJoined", i) }),
      t.messages.map((w) => {
        const G = w.sender === "user", ne = G ? Zn(w.content) : null, be = !G && w.isStreaming && !w.content && !w.widget;
        return /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-msg-row ${G ? "user" : "ai"}${w.widget ? " has-widget" : ""}${be ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: [
              G ? /* @__PURE__ */ a("div", { className: `pitaj-msg-bubble ${ne ? "is-form-submission" : ""}`, children: ne ? /* @__PURE__ */ a("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ a("div", { className: "pitaj-form-submission-title", children: ne.title.toLowerCase().startsWith("forma") ? ne.title : `Forma: ${ne.title}` }),
                /* @__PURE__ */ a("dl", { className: "pitaj-form-submission-grid", children: ne.entries.map((ve) => /* @__PURE__ */ a("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ a("dt", { children: ve.label }),
                  /* @__PURE__ */ a("dd", { children: ve.value })
                ] }, `${w.id}-${ve.label}`)) })
              ] }) : w.content }) : /* @__PURE__ */ a(Le, { children: [
                w.isHuman && /* @__PURE__ */ a("div", { className: "pitaj-operator-label", children: [
                  F("operatorLabel", i),
                  w.authorName ? ` · ${w.authorName}` : ""
                ] }),
                w.content ? /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ a($n, { content: w.content }),
                  w.isStreaming && /* @__PURE__ */ a("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                w.widget && /* @__PURE__ */ a("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ a(Yn, { widget: w.widget, onAction: (ve) => ae(ve), companyId: e.companyId, apiUrl: e.apiUrl, preview: e.isPreview || e.mockMode, conversationId: t.id, onApiError: v, onWorkflowState: u, onProductEvent: r, language: i }) }),
                w.isStreaming && !w.content && !w.widget && /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Ri, {}) })
              ] }),
              !G && w.sources && w.sources.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ a("span", { className: "pitaj-sources-title", children: F("sources", i) }),
                /* @__PURE__ */ a("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: w.sources.map((ve) => /* @__PURE__ */ a(
                  "a",
                  {
                    href: ve.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ a("span", { children: ve.title }),
                      /* @__PURE__ */ a(Nn, { size: 10 })
                    ]
                  },
                  ve.id
                )) })
              ] }),
              !G && Z.showFollowupSuggestions !== !1 && w.suggestedQuestions && w.suggestedQuestions.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-followups", children: w.suggestedQuestions.map((ve, Ke) => /* @__PURE__ */ a(
                "button",
                {
                  onClick: () => ae(ve),
                  disabled: j,
                  className: "pitaj-followup-chip",
                  children: ve
                },
                `sug-f-${Ke}`
              )) }),
              (!w.isStreaming || !!w.content || !!w.widget) && /* @__PURE__ */ a("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ a("span", { children: Wn(w.timestamp) }),
                !G && /* @__PURE__ */ a("div", { className: "pitaj-msg-actions", children: [
                  w.id === fe && !o && !w.isHuman && /* @__PURE__ */ a(Le, { children: Z.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ a(Le, { children: [
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => g == null ? void 0 : g("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": F("helpful", i),
                        title: F("helpful", i),
                        children: /* @__PURE__ */ a(In, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => g == null ? void 0 : g("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": F("notHelpful", i),
                        title: F("notHelpful", i),
                        children: /* @__PURE__ */ a(Cn, { size: 14 })
                      }
                    )
                  ] }) }),
                  w.id === fe && !o && Z.copyMessageEnabled !== !1 && !!w.content && /* @__PURE__ */ a(
                    "button",
                    {
                      type: "button",
                      onClick: () => void He(w.id, w.content),
                      className: `pitaj-msg-action-btn ${R === w.id ? "is-active" : ""}`,
                      "aria-label": R === w.id ? F("copied", i) : F("copyAnswer", i),
                      title: R === w.id ? F("copied", i) : F("copyAnswer", i),
                      children: R === w.id ? /* @__PURE__ */ a(Ct, { size: 14 }) : /* @__PURE__ */ a(An, { size: 14 })
                    }
                  )
                ] }),
                G && /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ a(
                  Ct,
                  {
                    size: 10,
                    className: w.status === "read" ? "text-accent" : ""
                  }
                ) })
              ] })
            ] })
          },
          w.id
        );
      }),
      o && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Ri, {}) }) }) })
    ] }),
    L && /* @__PURE__ */ a("div", { role: "alert", children: [
      "Nije moguće učitati aktivni korak procedure. ",
      /* @__PURE__ */ a("button", { type: "button", onClick: () => ee((w) => w + 1), children: "Pokušaj ponovo" })
    ] }),
    (s || p) && /* @__PURE__ */ a("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ a("div", { className: "pitaj-alert-banner", children: [
      /* @__PURE__ */ a("span", { children: p ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${p}s.` : s }),
      m && /* @__PURE__ */ a("button", { type: "button", onClick: d, children: "Pokreni novu sesiju" })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        fa,
        {
          rows: ye,
          fallbackQuestions: Z.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: ae,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      $.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: $.map((w) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: w.previewUrl ? /* @__PURE__ */ a("img", { src: w.previewUrl, alt: w.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(ua, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: w.name, children: w.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => le(w.id),
            "aria-label": `Ukloni ${w.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Fe, { size: 10 })
          }
        )
      ] }, w.id)) }),
      xe && !S && /* @__PURE__ */ a("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-dismissible-notice-text", children: xe }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => O(!0),
            "aria-label": F("close", i),
            children: /* @__PURE__ */ a(Fe, { size: 12 })
          }
        )
      ] }),
      D.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: F("transcribing", i) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${ge ? "is-recording" : ""}`, children: [
        Z.attachmentsEnabled && /* @__PURE__ */ a(Le, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: oe,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (w) => {
                const G = w.currentTarget.files;
                if (w.currentTarget.value = "", !G || G.length === 0) return;
                const ne = await ga(G);
                E((be) => [...be, ...ne].slice(0, 3));
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
                var w;
                return (w = oe.current) == null ? void 0 : w.click();
              },
              children: /* @__PURE__ */ a(ma, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: Q,
            value: k,
            onInput: (w) => I(w.target.value),
            onKeyDown: ze,
            placeholder: Ne,
            rows: 1,
            disabled: j,
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
              "aria-label": F("cancel", i),
              title: F("cancel", i),
              onClick: () => D.cancel(),
              children: /* @__PURE__ */ a(Fe, { size: 14 })
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ a("div", { className: "pitaj-wave", children: D.waveformLevels.map((w, G) => /* @__PURE__ */ a(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + w * 15))}px` }
            },
            `dict-wave-conv-${G}`
          )) }) }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": F("sendAudio", i),
              title: F("sendAudio", i),
              onClick: () => D.stopAndTranscribe(),
              disabled: j || D.isProcessing,
              children: /* @__PURE__ */ a(Ct, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(Le, { children: [
          Z.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${D.isProcessing ? "is-active" : ""}`,
              "aria-label": F("dictation", i),
              title: D.isProcessing ? F("transcribing", i) : D.isSupported ? F("dictation", i) : "Diktiranje nije podržano",
              onClick: () => D.start(),
              disabled: j || C || !D.isSupported || D.isProcessing,
              children: /* @__PURE__ */ a(da, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => ae(),
              disabled: j || !k.trim() && $.length === 0,
              className: "pitaj-send-btn",
              "aria-label": F("sendMessage", i),
              children: /* @__PURE__ */ a(pa, { size: 16 })
            }
          )
        ] })
      ] }),
      Ae && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: Ae }),
      e.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(Ut, { size: 13, className: "pitaj-powered-icon" }),
        e.poweredByText || F("poweredBy", i),
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
function Jn({
  config: t,
  language: e = "bs",
  openedByUser: i = !1,
  onStart: n,
  onApiError: r
}) {
  var de, C;
  const [o, p] = Y(""), [s, m] = Y(!1), [d, h] = Y(!1), [v, c] = Y([]), g = ie(null), u = ie(null), k = t.content || {}, I = t.chatAvailable === !1, L = t.transcribeAvailable === !1, M = va({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: se((j) => {
      p((D) => D ? `${D} ${j}` : j);
    }, []),
    onError: se((j) => {
      r == null || r(j, "Greška pri transkripciji.");
    }, [r])
  });
  J(() => {
    var j;
    i && ((j = g.current) == null || j.focus({ preventScroll: !0 }));
  }, [i]), J(() => {
    if (typeof window > "u") return;
    const j = window.matchMedia("(max-width: 768px)"), D = () => m(j.matches);
    return D(), j.addEventListener("change", D), () => j.removeEventListener("change", D);
  }, []), J(() => {
    h(!1);
  }, [k.dismissibleNotice]);
  const ee = (s && k.useDifferentMessageMobile && k.mobileWelcomeMessage ? k.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((j) => j.trim()).filter((j) => j.length > 0), l = k.autoShowInitialMessages !== !1 && !i, T = !s || k.showAutoPopupMobile !== !1, S = s && k.useDifferentDurationMobile && typeof k.mobileAutoShowDurationSeconds == "number" ? k.mobileAutoShowDurationSeconds : k.autoShowDurationSeconds ?? 0, O = l && T ? Math.max(0, S) * 1e3 : 0, R = (j) => {
    c((D) => {
      const le = D.find((ae) => ae.id === j);
      if (le != null && le.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(le.previewUrl);
        } catch {
        }
      return D.filter((ae) => ae.id !== j);
    });
  }, P = (j) => {
    const D = (j ?? o).trim();
    if (!D && v.length === 0 || I) return;
    const le = `${D}${ba(v)}`.trim();
    n(le), v.forEach((ae) => {
      if (ae.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ae.previewUrl);
        } catch {
        }
    }), p(""), c([]);
  }, $ = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), P());
  }, E = k.showSuggestedMessages === !1 ? [] : k.suggestedMessageRows || [], te = k.messagePlaceholder || t.placeholder || F("inputPlaceholder", e), Q = ((de = k.dismissibleNotice) == null ? void 0 : de.trim()) || "", oe = ((C = k.footerText) == null ? void 0 : C.trim()) || "", Z = M.isListening;
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ a("div", { className: "pitaj-new-screen", children: (ee.length > 0 ? ee : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((j, D) => /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: j }) }) }, `welcome-${D}`)) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        fa,
        {
          rows: E,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: P,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: O,
          staggerMs: 150
        }
      ),
      v.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: v.map((j) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: j.previewUrl ? /* @__PURE__ */ a("img", { src: j.previewUrl, alt: j.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(ua, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: j.name, children: j.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => R(j.id),
            "aria-label": `Ukloni ${j.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Fe, { size: 10 })
          }
        )
      ] }, j.id)) }),
      Q && !d && /* @__PURE__ */ a("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ a("span", { className: "pitaj-dismissible-notice-text", children: Q }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => h(!0),
            "aria-label": F("close", e),
            children: /* @__PURE__ */ a(Fe, { size: 12 })
          }
        )
      ] }),
      M.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: F("transcribing", e) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${Z ? "is-recording" : ""}`, children: [
        k.attachmentsEnabled && /* @__PURE__ */ a(Le, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: u,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (j) => {
                const D = j.currentTarget.files;
                if (j.currentTarget.value = "", !D || D.length === 0) return;
                const le = await ga(D);
                c((ae) => [...ae, ...le].slice(0, 3));
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
                return (j = u.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ a(ma, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: g,
            value: o,
            onInput: (j) => p(j.target.value),
            onKeyDown: $,
            placeholder: te,
            rows: 1,
            disabled: I,
            className: "pitaj-textarea",
            style: Z ? { display: "none" } : void 0
          }
        ),
        Z ? /* @__PURE__ */ a("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": F("cancel", e),
              title: F("cancel", e),
              onClick: () => M.cancel(),
              children: /* @__PURE__ */ a(Fe, { size: 14 })
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ a("div", { className: "pitaj-wave", children: M.waveformLevels.map((j, D) => /* @__PURE__ */ a(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + j * 15))}px` }
            },
            `dict-wave-${D}`
          )) }) }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": F("sendAudio", e),
              title: F("sendAudio", e),
              onClick: () => M.stopAndTranscribe(),
              disabled: I || M.isProcessing,
              children: /* @__PURE__ */ a(Ct, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(Le, { children: [
          k.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${M.isProcessing ? "is-active" : ""}`,
              "aria-label": F("dictation", e),
              title: M.isProcessing ? F("transcribing", e) : M.isSupported ? F("dictation", e) : "Diktiranje nije podržano",
              onClick: () => M.start(),
              disabled: I || L || !M.isSupported || M.isProcessing,
              children: /* @__PURE__ */ a(da, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => P(),
              disabled: I || !o.trim() && v.length === 0,
              className: "pitaj-send-btn",
              "aria-label": F("sendMessage", e),
              children: /* @__PURE__ */ a(pa, { size: 16 })
            }
          )
        ] })
      ] }),
      oe && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: oe }),
      t.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(Ut, { size: 13, className: "pitaj-powered-icon" }),
        t.poweredByText || F("poweredBy", e),
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
function qn({
  isOpen: t,
  onClick: e,
  unreadCount: i = 0,
  config: n
}) {
  var h, v, c, g, u, k;
  const r = ((h = n.content) == null ? void 0 : h.launcherIconStyle) || "message-circle", o = typeof ((v = n.content) == null ? void 0 : v.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", p = ((c = n.content) == null ? void 0 : c.launcherShowText) === !0, s = ((g = n.content) == null ? void 0 : g.launcherTextSide) === "left" ? "left" : "right", m = p ? ((k = (u = n.content) == null ? void 0 : u.launcherText) == null ? void 0 : k.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${p ? "has-label" : ""} ${p && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon open-icon", children: r === "custom" && o !== "" ? /* @__PURE__ */ a("img", { src: o, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ a(r === "sparkles" ? jn : r === "message-square" ? la : r === "contact" ? _n : xn, { size: 24 }) }),
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ a(Fe, { size: 22 }) })
        ] }),
        m && !t && /* @__PURE__ */ a("span", { className: "pitaj-launcher-label", children: m }),
        i > 0 && !t && /* @__PURE__ */ a("span", { className: "pitaj-unread-badge", children: i > 9 ? "9+" : i })
      ]
    }
  );
}
const Qn = "pitaj_io_popup_dismissed:";
function Xn(t) {
  try {
    return sessionStorage.getItem(t) === "1";
  } catch {
    return !1;
  }
}
function Fi(t) {
  try {
    sessionStorage.setItem(t, "1");
  } catch {
  }
}
function eo({ isOpen: t, onOpen: e, config: i }) {
  var O, R, P, $;
  const [n, r] = Y(!1), o = !!i.previewDraft, p = `${Qn}${i.companyId ?? ""}`, [s, m] = Y(() => !o && Xn(p)), [d, h] = Y(!1), [v, c] = Y(t), g = ie(null);
  J(() => {
    t && (c(!0), h(!1), o || Fi(p));
  }, [t]), J(() => {
    const E = () => {
      var Q;
      if (typeof window > "u") return;
      let te = window.innerWidth <= 640;
      if (!te && g.current) {
        const oe = (Q = g.current.closest(".pitaj-root")) == null ? void 0 : Q.parentElement;
        oe && oe.clientWidth > 0 && oe.clientWidth <= 640 && (te = !0);
      }
      r(te);
    };
    return E(), window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, []);
  const u = i.content || {}, k = u.autoShowInitialMessages !== !1, I = u.showAutoPopupMobile !== !1, L = !n || I, M = n && u.useDifferentDurationMobile && typeof u.mobileAutoShowDurationSeconds == "number" ? u.mobileAutoShowDurationSeconds : u.autoShowDurationSeconds ?? 0;
  if (J(() => {
    if (!k || !L || s || t || v) {
      h(!1);
      return;
    }
    const E = Math.max(0, M) * 1e3, te = setTimeout(() => {
      h(!0);
    }, E);
    return () => clearTimeout(te);
  }, [k, L, s, t, v, M]), !d || t)
    return null;
  let B = "";
  n && u.useDifferentMessageMobile && ((O = u.mobileWelcomeMessage) != null && O.trim()) ? B = u.mobileWelcomeMessage.trim() : (R = u.popupMessageText) != null && R.trim() ? B = u.popupMessageText.trim() : (P = i.welcomeMessage) != null && P.trim() ? B = i.welcomeMessage.trim() : ($ = i.welcomeHeadline) != null && $.trim() ? B = i.welcomeHeadline.trim() : B = "Zdravo! Kako vam mogu pomoći danas?";
  const ee = (E) => {
    E.stopPropagation(), E.preventDefault(), m(!0), h(!1), o || Fi(p);
  }, l = () => {
    e();
  }, T = i.title || i.name || "Pitaj.io Asistent", S = i.logo || i.avatar;
  return /* @__PURE__ */ a(
    "div",
    {
      ref: g,
      className: "pitaj-launcher-popup",
      onClick: l,
      role: "button",
      tabIndex: 0,
      "aria-label": `${T}: ${B}`,
      onKeyDown: (E) => {
        (E.key === "Enter" || E.key === " ") && (E.preventDefault(), l());
      },
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-popup-avatar", children: S ? /* @__PURE__ */ a("img", { src: S, alt: "" }) : /* @__PURE__ */ a(Ut, { size: 14 }) }),
            /* @__PURE__ */ a("span", { className: "pitaj-popup-title", children: T })
          ] }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: ee,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ a(Fe, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "pitaj-popup-body", children: B }),
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function to(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), r = Math.floor(n / (1e3 * 60)), o = Math.floor(n / (1e3 * 60 * 60)), p = Math.floor(n / (1e3 * 60 * 60 * 24));
  return isNaN(r) || r < 1 ? "sada" : r < 60 ? `prije ${r}m` : o < 24 ? `prije ${o}h` : p < 7 ? `prije ${p}d` : e.toLocaleDateString();
}
function io({ config: t, visitorId: e, onSelectTicket: i }) {
  const [n, r] = Y([]), [o, p] = Y("open"), [s, m] = Y(1), [d, h] = Y(!0), [v, c] = Y(!0), [g, u] = Y(!1), [k, I] = Y(null), L = ie(null), M = ie(null), B = ie(!1);
  J(() => {
    let T = !0;
    return c(!0), r([]), m(1), h(!0), I(null), B.current = !1, qt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: o,
      page: 1,
      perPage: 15
    }).then((S) => {
      T && (r(S.tickets), h(S.hasMore), m(1));
    }).catch((S) => {
      T && I(S instanceof Error ? S.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      T && c(!1);
    }), () => {
      T = !1;
    };
  }, [t.apiUrl, t.companyId, e, o]);
  const ee = se(() => {
    if (v || B.current || !d) return;
    B.current = !0, u(!0);
    const T = s + 1;
    qt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: o,
      page: T,
      perPage: 15
    }).then((S) => {
      r((O) => {
        const R = new Set(O.map(($) => $.id)), P = S.tickets.filter(($) => !R.has($.id));
        return [...O, ...P];
      }), h(S.hasMore), m(T);
    }).catch((S) => {
      console.error("[Pitaj.io] Error loading more tickets:", S);
    }).finally(() => {
      u(!1), B.current = !1;
    });
  }, [t.apiUrl, t.companyId, d, v, s, o, e]);
  return J(() => {
    const T = M.current, S = L.current;
    if (!T || !S || !d || v || g) return;
    const O = new IntersectionObserver(
      (R) => {
        var P;
        (P = R[0]) != null && P.isIntersecting && ee();
      },
      { root: S, rootMargin: "120px" }
    );
    return O.observe(T), () => O.disconnect();
  }, [d, v, g, ee]), /* @__PURE__ */ a(
    "div",
    {
      ref: L,
      className: "pitaj-tickets-screen",
      onScroll: (T) => {
        const S = T.currentTarget;
        !S || !d || v || B.current || S.scrollHeight - S.scrollTop - S.clientHeight < 120 && ee();
      },
      tabIndex: 0,
      role: "region",
      "aria-label": "Lista tiketa",
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
          /* @__PURE__ */ a(
            "button",
            {
              className: o === "open" ? "is-active" : "",
              onClick: () => p("open"),
              role: "tab",
              "aria-selected": o === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              className: o === "closed" ? "is-active" : "",
              onClick: () => p("closed"),
              role: "tab",
              "aria-selected": o === "closed",
              children: "Zatvoreni"
            }
          )
        ] }),
        v ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ a("span", { children: "Učitavanje tiketa…" })
        ] }) : k ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ a("span", { children: k }) }) : n.length === 0 ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a(la, { size: 30 }),
          /* @__PURE__ */ a("strong", { children: o === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ a("span", { children: o === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ a("div", { className: "pitaj-ticket-list", children: [
          n.map((T) => {
            const S = T.messages || [], O = S.length > 0 ? S[S.length - 1] : null, R = S.length, P = R === 1 ? "1 poruka" : R >= 2 && R <= 4 ? `${R} poruke` : `${R} poruka`;
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
                  O && /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-preview", children: O.content }),
                  /* @__PURE__ */ a("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-time", children: to(T.updatedAt) }),
                    R > 0 && /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-count", children: P })
                  ] })
                ] })
              },
              T.id
            );
          }),
          g && /* @__PURE__ */ a("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ a("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ a("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ a("div", { ref: M, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const ao = si(() => import("./HistoryScreen-BfBi03gT.js"), (t) => t.HistoryScreen), no = si(() => import("./FormActionsScreen-BIcPZrnR.js"), (t) => t.FormActionsScreen);
function xt(t) {
  if (!t || typeof t != "string") return null;
  const e = t.trim().toLowerCase();
  if (e === "transparent") return { r: 0, g: 0, b: 0 };
  if (e === "white") return { r: 255, g: 255, b: 255 };
  if (e === "black") return { r: 0, g: 0, b: 0 };
  if (e.startsWith("#")) {
    const r = e.slice(1);
    return r.length === 3 || r.length === 4 ? {
      r: Number.parseInt(r[0] + r[0], 16),
      g: Number.parseInt(r[1] + r[1], 16),
      b: Number.parseInt(r[2] + r[2], 16)
    } : r.length === 6 || r.length === 8 ? {
      r: Number.parseInt(r.slice(0, 2), 16),
      g: Number.parseInt(r.slice(2, 4), 16),
      b: Number.parseInt(r.slice(4, 6), 16)
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
    const r = Number(n[1]) % 360, o = Number(n[2]) / 100, p = Number(n[3]) / 100, s = (1 - Math.abs(2 * p - 1)) * o, m = s * (1 - Math.abs(r / 60 % 2 - 1)), d = p - s / 2;
    let h = 0, v = 0, c = 0;
    return 0 <= r && r < 60 ? (h = s, v = m, c = 0) : 60 <= r && r < 120 ? (h = m, v = s, c = 0) : 120 <= r && r < 180 ? (h = 0, v = s, c = m) : 180 <= r && r < 240 ? (h = 0, v = m, c = s) : 240 <= r && r < 300 ? (h = m, v = 0, c = s) : 300 <= r && r < 360 && (h = s, v = 0, c = m), {
      r: Math.round((h + d) * 255),
      g: Math.round((v + d) * 255),
      b: Math.round((c + d) * 255)
    };
  }
  return null;
}
function oo(t) {
  return xt(t);
}
function kt(t, e) {
  const i = xt(t);
  return i ? `rgba(${i.r}, ${i.g}, ${i.b}, ${e})` : null;
}
function ro(t, e, i) {
  const n = (r) => Math.max(0, Math.min(255, Math.round(r))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(i)}`;
}
function gt(t) {
  const e = xt(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function so(t, e) {
  const i = xt(t);
  if (i)
    return (0.2126 * i.r + 0.7152 * i.g + 0.0722 * i.b) / 255 <= 0.55;
  if (e) {
    const n = xt(e);
    if (n)
      return (0.2126 * n.r + 0.7152 * n.g + 0.0722 * n.b) / 255 > 0.55;
  }
  return !1;
}
function co(t) {
  const e = oo(t);
  if (!e) return t;
  const i = gt(t) === "#111827", n = i ? 0.2 : 0.16, r = i ? 0 : 255;
  return ro(
    e.r + (r - e.r) * n,
    e.g + (r - e.g) * n,
    e.b + (r - e.b) * n
  );
}
function po({
  config: t,
  startOpen: e = !1,
  initialScreen: i = "new-conversation",
  onEvent: n,
  isInline: r = !1,
  isMobile: o,
  isCanvasPreview: p = !1
}) {
  var be, ve, Ke, Xe, et, tt, it, at, nt, ot, rt, st, ct, pt, lt, dt, ut;
  const {
    config: s,
    setConfig: m,
    isOpen: d,
    setIsOpen: h,
    screen: v,
    setScreen: c,
    conversations: g,
    activeConversation: u,
    activeConversationHumanActive: k,
    totalUnread: I,
    isStreaming: L,
    rateLimitTimer: M,
    errorBanner: B,
    sessionInvalid: ee,
    resetSession: l,
    selectConversation: T,
    startNewConversation: S,
    endConversation: O,
    deleteConversation: R,
    sendUserMessage: P,
    submitSatisfaction: $,
    visitorContact: E,
    visitorId: te,
    activeConversationId: Q,
    activeLanguage: oe,
    appendConversationMessage: Z,
    appendWorkflowWidget: de,
    handleApiError: C
  } = vn(t, {
    startOpen: e,
    initialScreen: i,
    emitEvent: n,
    onActionTrigger: (y, x) => {
      if (!s.isPreview && !s.mockMode && (n == null || n("action_triggered", { ...Ba(s.companyId, y), ...x ? { complete: x } : {} })), ae(!0), h(!0), (v === "history" || v === "new-conversation") && c("conversation"), y.widget_id || y.widget)
        return;
      const N = Number(y.id), W = Number(y.form_id), me = Number.isInteger(N) && N > 0 ? N : null, ke = Number.isInteger(W) && W > 0 ? -W : null;
      Ne(me ?? ke);
    }
  }), j = ie(i), D = ie(e), [le, ae] = Y(e), [ze, Ne] = Y(() => {
    var y, x, N, W;
    return ((y = s.previewDraft) == null ? void 0 : y.initialStep) === "form" && !!!(s.previewDraft.widget || (x = s.previewDraft.action) != null && x.widget || (N = s.previewDraft.action) != null && N.widget_id) ? ((W = s.previewDraft.action) == null ? void 0 : W.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  J(() => {
    var y, x, N, W, me, ke, $e;
    if (((y = s.previewDraft) == null ? void 0 : y.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (x = s.previewDraft.action) != null && x.widget || (N = s.previewDraft.action) != null && N.widget_id)) {
        const f = ((W = s.previewDraft.action) == null ? void 0 : W.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        f !== null && Ne(f);
      }
    } else (((me = s.previewDraft) == null ? void 0 : me.initialStep) === "idle" || ((ke = s.previewDraft) == null ? void 0 : ke.initialStep) === "submitted" || (($e = s.previewDraft) == null ? void 0 : $e.initialStep) === "dismissed") && Ne(null);
  }, [
    (be = s.previewDraft) == null ? void 0 : be.initialStep,
    (Ke = (ve = s.previewDraft) == null ? void 0 : ve.action) == null ? void 0 : Ke.id,
    (et = (Xe = s.previewDraft) == null ? void 0 : Xe.form) == null ? void 0 : et.id,
    (tt = s.previewDraft) == null ? void 0 : tt.widget
  ]);
  const [xe, Ae] = Y(null), ye = ie(null), [fe, ge] = Y(() => typeof o == "boolean" ? o : r ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  J(() => {
    if (typeof o == "boolean") {
      ge(o);
      return;
    }
    const y = () => {
      if (typeof window > "u") return;
      if (r) {
        ge(!1);
        return;
      }
      let x = window.innerWidth <= 640;
      if (!x && ye.current) {
        const N = ye.current.getRootNode(), W = N instanceof ShadowRoot ? N.host : ye.current.parentElement, me = (W == null ? void 0 : W.parentElement) || W;
        me && me.clientWidth > 0 && me.clientWidth <= 640 && (x = !0);
      }
      ge(x);
    };
    return y(), window.addEventListener("resize", y), window.addEventListener("orientationchange", y), () => {
      window.removeEventListener("resize", y), window.removeEventListener("orientationchange", y);
    };
  }, [o]), J(() => {
    if (typeof window > "u") return;
    const y = () => {
      const N = ye.current;
      if (!N) return;
      const W = window.visualViewport;
      if (W) {
        const me = W.height < window.innerHeight - 100;
        N.style.setProperty("--pitaj-viewport-height", `${Math.round(W.height)}px`), N.style.setProperty("--pitaj-viewport-top", `${Math.round(W.offsetTop)}px`), N.style.setProperty("--pitaj-viewport-left", `${Math.round(W.offsetLeft)}px`), N.style.setProperty(
          "--pitaj-input-safe-bottom",
          me ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        N.style.setProperty("--pitaj-viewport-height", "100dvh"), N.style.setProperty("--pitaj-viewport-top", "0px"), N.style.setProperty("--pitaj-viewport-left", "0px"), N.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    y();
    const x = window.visualViewport;
    return x && (x.addEventListener("resize", y), x.addEventListener("scroll", y)), window.addEventListener("resize", y), window.addEventListener("orientationchange", y), () => {
      x && (x.removeEventListener("resize", y), x.removeEventListener("scroll", y)), window.removeEventListener("resize", y), window.removeEventListener("orientationchange", y);
    };
  }, [d, fe]), J(() => {
    if (typeof document > "u" || !d || !fe || r || p) return;
    const y = document.body.style.overflow, x = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = y, document.body.style.touchAction = x;
    };
  }, [d, fe, r, p]), J(() => {
    var N;
    if (typeof window > "u" || r) return;
    const y = (N = ye.current) == null ? void 0 : N.getRootNode(), x = y instanceof ShadowRoot ? y.host : null;
    if (x) {
      if (p || x.hasAttribute("data-pitaj-preview") || x.classList.contains("pitaj-preview-host")) {
        x.style.width = "100%", x.style.height = "100%", x.style.top = "0", x.style.left = "0", x.style.position = "relative";
        return;
      }
      d && fe ? (x.style.top = "0", x.style.left = "0", x.style.width = "100%", x.style.height = "100%", x.setAttribute("data-pitaj-mobile-open", "true")) : (x.style.top = "", x.style.left = "", x.style.width = "0", x.style.height = "0", x.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [d, fe, r, p]);
  const He = s.formsEnabled === !0 && s.formsAvailable !== !1, Ie = Ge(() => {
    var N, W;
    const y = s.actions || [];
    if (y.length > 0 && typeof ((N = y[0]) == null ? void 0 : N.id) == "number")
      return y[0].id;
    const x = s.forms || [];
    return x.length > 0 && typeof ((W = x[0]) == null ? void 0 : W.id) == "number" ? -x[0].id : null;
  }, [s.actions, s.forms]), Pe = Ge(() => ({
    open: () => {
      ae(!0), h(!0);
    },
    close: () => h(!1),
    toggle: () => {
      d || ae(!0), h(!d);
    },
    startConversation: (y) => {
      ae(!0), h(!0), y && y.trim() ? S(y.trim()) : c("new-conversation");
    },
    setScreen: (y) => c(y),
    setConfig: (y) => {
      const x = {
        ...s,
        ...y,
        colors: { ...s.colors || {}, ...y.colors || {} },
        content: { ...s.content || {}, ...y.content || {} },
        features: { ...s.features || {}, ...y.features || {} },
        cssVars: { ...s.cssVars || {}, ...y.cssVars || {} }
      };
      if (x.previewDraft) {
        if (x.previewDraft.action) {
          const N = x.previewDraft.action;
          x.actions = [N, ...(x.actions || []).filter((W) => W.id !== N.id)];
        }
        if (x.previewDraft.form) {
          const N = x.previewDraft.form;
          x.forms = [N, ...(x.forms || []).filter((W) => W.id !== N.id)], x.formsAvailable = !0, x.formsEnabled = !0;
        }
        if (x.previewDraft.widget) {
          const N = x.previewDraft.widget;
          x.widgets = [N, ...(x.widgets || []).filter((W) => W.id !== N.id)];
        }
      }
      m(x);
    }
  }), [s, d, h, c, S, m]), Ee = ie({});
  Hi(Ee.current, Pe), J(() => () => Hi(Ee.current, null), []), J(() => {
    i !== j.current && (j.current = i, c(i));
  }, [i, c]), J(() => {
    e !== D.current && (D.current = e, e && ae(!0), h(e));
  }, [e, h]), J(() => {
    if (v === "forms") {
      He && Ie !== null && Ne(Ie), c("new-conversation");
      return;
    }
    v === "contact" && c("new-conversation");
  }, [Ie, He, v, c]), J(() => {
    var W;
    if (typeof document > "u") return;
    const y = (W = s.content) == null ? void 0 : W.fontFamily;
    if (!y) return;
    const x = y.trim().toLowerCase();
    let N = "";
    if (x === "inter" ? N = "family=Inter:wght@400;500;600;700" : x === "geist" ? N = "family=Geist:wght@400;500;600;700" : x === "plus jakarta sans" && (N = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), N) {
      const me = `pitaj-font-${x.replace(/\s+/g, "-")}`;
      if (!document.getElementById(me)) {
        const ke = document.createElement("link");
        ke.id = me, ke.rel = "stylesheet", ke.href = `https://fonts.googleapis.com/css2?${N}&display=swap`, document.head.appendChild(ke);
      }
    }
  }, [(it = s.content) == null ? void 0 : it.fontFamily]);
  const w = Ge(() => {
    var pi, li, di, ui, mi, hi, fi, gi, bi;
    const x = (((pi = s.content) == null ? void 0 : pi.themeMode) === "dark" ? "dark" : "light") === "dark", N = s.colors || {}, W = x ? "#0b1220" : "#ffffff", me = x ? "#111827" : "#f8fafc", ke = x ? "#111827" : "#ffffff", $e = x ? "#e5e7eb" : "#0f172a", Ye = x ? "#9ca3af" : "#64748b", f = x ? "#263246" : "#e2e8f0", _ = x ? "#172033" : "#f1f5f9", A = x ? "#111827" : "#ffffff", b = {};
    (li = s.theme) != null && li.css_vars && typeof s.theme.css_vars == "object" && Object.assign(b, s.theme.css_vars);
    const z = N.primaryColor || (x ? "#3b82f6" : "#2563eb");
    b["--pitaj-accent"] = z, b["--pitaj-bubble-user"] = N.bubbleUserBg || z, b["--pitaj-accent-hover"] = co(z), b["--pitaj-accent-contrast"] = gt(z), b["--pitaj-bubble-user-fg"] = gt(N.bubbleUserBg || z);
    const X = kt(z, 0.1), q = kt(z, 0.16), je = kt(z, 0.35);
    X && (b["--pitaj-accent-soft"] = X), q && (b["--pitaj-accent-soft-strong"] = q), je && (b["--pitaj-accent-ring"] = je);
    const K = N.sendAccent || (x ? "#e5e7eb" : "#111827");
    b["--pitaj-send-accent"] = K, b["--pitaj-send-accent-contrast"] = gt(K);
    const V = N.surfaceBg || W;
    b["--pitaj-surface"] = V, N.subtle ? b["--pitaj-surface-subtle"] = N.subtle : N.surfaceBg ? b["--pitaj-surface-subtle"] = kt(N.surfaceBg, 0.9) || N.surfaceBg : b["--pitaj-surface-subtle"] = me;
    const U = N.bubbleAiBg || ke;
    b["--pitaj-bubble-ai"] = U;
    const ce = N.textFg || $e;
    b["--pitaj-bubble-ai-fg"] = ce, b["--pitaj-fg"] = ce;
    const H = N.mutedFg || Ye;
    b["--pitaj-muted"] = H;
    const _e = N.border || f;
    b["--pitaj-border"] = _e, b["--pitaj-card-border"] = _e;
    const De = N.hover || _;
    b["--pitaj-hover"] = De, b["--pitaj-chrome-border"] = x ? "rgba(148, 163, 184, 0.52)" : "#d1d5db";
    const Se = N.headerBg || A, Ue = so(Se, N.headerFg), Ce = N.headerFg || (Ue ? "#ffffff" : "#0f172a");
    b["--pitaj-header-bg"] = Se, b["--pitaj-header-fg"] = Ce, Ue ? (b["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)", b["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", b["--pitaj-header-icon-hover"] = "#ffffff", b["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", b["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", b["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", b["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", b["--pitaj-header-badge-fg"] = "#ffffff", b["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (b["--pitaj-header-gradient"] = Se.toLowerCase() === "#ffffff" || Se.toLowerCase() === "#fff" ? "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", b["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", b["--pitaj-header-icon-hover"] = "#0f172a", b["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", b["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", b["--pitaj-header-border"] = _e, b["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", b["--pitaj-header-badge-fg"] = "#0f172a", b["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)");
    const Me = (di = s.content) == null ? void 0 : di.launcherButtonColor;
    Me && (b["--pitaj-launcher-bg"] = Me, b["--pitaj-launcher-fg"] = gt(Me));
    const we = (ui = s.content) == null ? void 0 : ui.cornerRadius;
    if (we) {
      const Te = we === "sharp" || we === "0px" ? "0px" : we === "small" || we === "8px" ? "8px" : we === "medium" || we === "12px" ? "12px" : we === "large" || we === "16px" ? "16px" : we;
      b["--pitaj-radius"] = Te, Te === "0px" ? (b["--pitaj-radius-bubble"] = "0px", b["--pitaj-radius-input"] = "0px", b["--pitaj-radius-btn"] = "0px", b["--pitaj-radius-avatar"] = "0px", b["--pitaj-radius-full"] = "0px", b["--pitaj-radius-corner-sm"] = "0px", b["--pitaj-launcher-radius"] = "0px", b["--pitaj-launcher-pill-radius"] = "0px", b["--pitaj-badge-radius"] = "0px") : Te === "8px" ? (b["--pitaj-radius-bubble"] = "8px", b["--pitaj-radius-input"] = "8px", b["--pitaj-radius-btn"] = "6px", b["--pitaj-radius-avatar"] = "6px", b["--pitaj-radius-full"] = "8px", b["--pitaj-radius-corner-sm"] = "2px", b["--pitaj-launcher-radius"] = "8px", b["--pitaj-launcher-pill-radius"] = "8px", b["--pitaj-badge-radius"] = "4px") : Te === "12px" ? (b["--pitaj-radius-bubble"] = "12px", b["--pitaj-radius-input"] = "12px", b["--pitaj-radius-btn"] = "8px", b["--pitaj-radius-avatar"] = "10px", b["--pitaj-radius-full"] = "12px", b["--pitaj-radius-corner-sm"] = "4px", b["--pitaj-launcher-radius"] = "12px", b["--pitaj-launcher-pill-radius"] = "12px", b["--pitaj-badge-radius"] = "6px") : (b["--pitaj-radius-bubble"] = "18px", b["--pitaj-radius-input"] = "14px", b["--pitaj-radius-btn"] = "10px", b["--pitaj-radius-avatar"] = "50%", b["--pitaj-radius-full"] = "999px", b["--pitaj-radius-corner-sm"] = "4px", b["--pitaj-launcher-radius"] = "50%", b["--pitaj-launcher-pill-radius"] = "999px", b["--pitaj-badge-radius"] = "999px");
    }
    const qe = (mi = s.content) == null ? void 0 : mi.fontFamily;
    if (qe) {
      const Te = qe.toLowerCase(), vi = Te === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : Te === "arial" ? "Arial, Helvetica, sans-serif" : Te === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : Te === "georgia" ? "Georgia, serif" : Te === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : Te === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${qe}', 'Inter', system-ui, sans-serif`;
      b["--pitaj-font"] = vi, b.fontFamily = vi;
    }
    const Rt = (hi = s.content) == null ? void 0 : hi.fontSize;
    Rt && (b["--pitaj-font-size"] = Rt, b.fontSize = Rt);
    const ci = (fi = s.content) != null && fi.dropShadowEnabled ? x ? "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.3)" : "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)" : "none";
    b["--pitaj-window-shadow"] = ci, b["--pitaj-shadow"] = ci;
    const wa = (gi = s.content) != null && gi.dropShadowEnabled ? x ? "0 4px 12px rgba(0, 0, 0, 0.4), 0 10px 24px -4px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(15, 23, 42, 0.15), 0 10px 24px -4px rgba(15, 23, 42, 0.25)" : "none", xa = (bi = s.content) != null && bi.dropShadowEnabled ? x ? "0 6px 16px rgba(0, 0, 0, 0.45), 0 16px 32px -4px rgba(0, 0, 0, 0.6)" : "0 6px 16px rgba(15, 23, 42, 0.18), 0 16px 32px -4px rgba(15, 23, 42, 0.32)" : "none";
    return b["--pitaj-launcher-shadow"] = wa, b["--pitaj-launcher-shadow-hover"] = xa, s.cssVars && typeof s.cssVars == "object" && Object.assign(b, s.cssVars), b;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (at = s.content) == null ? void 0 : at.themeMode,
    (nt = s.content) == null ? void 0 : nt.launcherButtonColor,
    (ot = s.content) == null ? void 0 : ot.cornerRadius,
    (rt = s.content) == null ? void 0 : rt.fontFamily,
    (st = s.content) == null ? void 0 : st.fontSize,
    (ct = s.content) == null ? void 0 : ct.dropShadowEnabled
  ]), G = ((pt = s.content) == null ? void 0 : pt.themeMode) === "dark" ? "dark" : "light", ne = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ a(Le, {}) : /* @__PURE__ */ a(
    "div",
    {
      ref: ye,
      "data-theme": G,
      className: `pitaj-root pitaj-theme-${G} ${ne} ${d ? "is-widget-open" : "is-widget-closed"} ${r ? "is-inline" : ""} ${p ? "is-canvas-preview" : ""} ${fe ? "is-mobile" : ""} ${r && ((lt = s.content) != null && lt.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: w,
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
                Pn,
                {
                  screen: v,
                  activeConversation: u,
                  config: s,
                  language: oe,
                  onBack: () => {
                    const y = xe || "new-conversation";
                    Ae(null), c(y);
                  },
                  onClose: () => {
                    h(!1);
                  },
                  onNewConversation: () => {
                    Ae(null), c("new-conversation");
                  },
                  onEndConversation: () => {
                    O(), h(!1);
                  },
                  onDeleteConversation: ((dt = s.content) == null ? void 0 : dt.deleteConversationsEnabled) !== !1 && u ? () => R(u.id) : void 0,
                  onViewHistory: () => {
                    Ae(null), c("history");
                  },
                  onViewTickets: () => {
                    Ae(null), c("tickets");
                  }
                }
              ),
              /* @__PURE__ */ a("div", { className: "pitaj-body", children: [
                v === "conversation" && u && /* @__PURE__ */ a(
                  Gn,
                  {
                    conversation: u,
                    config: s,
                    language: oe,
                    humanActive: k,
                    onProductEvent: (y, x) => {
                      n == null || n(y, { companyId: s.companyId, conversationId: u.id, ...x }), !s.isPreview && !s.mockMode && Ra(
                        { companyId: s.companyId, conversationId: u.id, apiUrl: s.apiUrl },
                        {
                          type: y === "product_clicked" ? "clicked" : "viewed",
                          product_id: Number(x.productId),
                          position: typeof x.position == "number" ? x.position : void 0,
                          kind: x.kind === "buy" ? "buy" : x.kind === "view" ? "view" : void 0
                        }
                      );
                    },
                    isStreaming: L,
                    rateLimitCountdown: M,
                    errorBanner: B,
                    sessionInvalid: ee,
                    onResetSession: l,
                    onSendMessage: P,
                    onWorkflowWidget: (y) => de(u.id, y),
                    onApiError: C,
                    onSubmitSatisfaction: (y, x) => $(u.id, y, x)
                  }
                ),
                v === "new-conversation" && /* @__PURE__ */ a(
                  Jn,
                  {
                    config: s,
                    language: oe,
                    openedByUser: le,
                    onStart: (y) => {
                      S(y);
                    },
                    onApiError: C
                  }
                ),
                v === "history" && /* @__PURE__ */ a(
                  ao,
                  {
                    conversations: g,
                    config: s,
                    language: oe,
                    onSelectConversation: (y) => {
                      Ae("history"), T(y);
                    },
                    onNewConversation: () => {
                      Ae(null), c("new-conversation");
                    },
                    onDeleteConversation: ((ut = s.content) == null ? void 0 : ut.deleteConversationsEnabled) !== !1 ? R : void 0
                  }
                ),
                v === "tickets" && /* @__PURE__ */ a(
                  io,
                  {
                    config: s,
                    visitorId: te,
                    onSelectTicket: (y) => {
                      var $e;
                      Ae("tickets");
                      const x = ($e = y.messages) == null ? void 0 : $e.find((Ye) => Ye.sender === "user"), N = y.messages && y.messages.length > 0 ? y.messages[y.messages.length - 1] : null, W = x ? x.content.length > 40 ? x.content.slice(0, 40) + "…" : x.content : y.ticketNumber || `Tiket #${y.id}`, ke = {
                        id: y.conversationId ? String(y.conversationId) : String(y.id),
                        title: W,
                        preview: N ? N.content : y.ticketNumber || `Tiket #${y.id}`,
                        timestamp: y.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: y.messages || [],
                        status: y.isResolved ? "ended" : "active",
                        ticketNumber: y.ticketNumber
                      };
                      T(ke);
                    }
                  }
                ),
                (v === "conversation" || v === "new-conversation") && He && ze !== null ? /* @__PURE__ */ a("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ a(
                  no,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: Q,
                    initialActionId: ze,
                    visitorContact: E,
                    onApiError: C,
                    blockedReason: M !== null ? `Sačekajte ${M}s prije novog zahtjeva.` : null,
                    onSubmitted: (y) => {
                      var x, N;
                      if (Z(Q, y, "user"), s.mockMode || s.isPreview) {
                        const W = ((N = (x = s.previewDraft) == null ? void 0 : x.form) == null ? void 0 : N.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          Z(Q, W, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => Ne(null),
                    onDismiss: async (y, x) => {
                      if (!(y != null && y.dismiss_message) || !Q) return;
                      const N = s.mockMode || s.isPreview ? y.dismiss_message : await Da(s.companyId, Q, y.id, x, s.apiUrl);
                      Z(Q, N, "ai");
                    }
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!d || !fe) && /* @__PURE__ */ a("div", { className: `pitaj-launcher-wrap ${d ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ a(
            eo,
            {
              isOpen: d,
              onOpen: () => {
                ae(!0), h(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ a(
            qn,
            {
              isOpen: d,
              onClick: () => {
                d || ae(!0), h(!d);
              },
              unreadCount: I,
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
function lo(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const i = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), r = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * i + 0.7152 * n + 0.0722 * r) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function uo(t, e) {
  if (typeof t != "string") return e;
  const i = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(i) ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`.toUpperCase() : e;
}
function mo(t) {
  const e = t.trim(), i = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(i))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(i.slice(1, 3), 16) / 255, r = Number.parseInt(i.slice(3, 5), 16) / 255, o = Number.parseInt(i.slice(5, 7), 16) / 255, p = Math.max(n, r, o), s = Math.min(n, r, o), m = p - s;
  let d = 0;
  const h = (p + s) / 2, v = m === 0 ? 0 : m / (1 - Math.abs(2 * h - 1));
  if (m !== 0)
    switch (p) {
      case n:
        d = (r - o) / m % 6;
        break;
      case r:
        d = (o - n) / m + 2;
        break;
      default:
        d = (n - r) / m + 4;
        break;
    }
  return { h: Math.round((d * 60 + 360) % 360), s: Math.round(v * 100), l: Math.round(h * 100) };
}
function ho(t) {
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
function fo(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const i = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, r = (Array.isArray(i.fields) ? i.fields : []).filter((o) => typeof o == "object" && o !== null).map((o) => ({
      key: typeof o.key == "string" ? o.key : "",
      type: ho(o.type),
      label: typeof o.label == "string" ? o.label : "",
      required: o.required === !0,
      placeholder: typeof o.placeholder == "string" ? o.placeholder : void 0,
      options: Array.isArray(o.options) ? o.options.filter((p) => typeof p == "string" && p.trim() !== "") : void 0,
      accept: Array.isArray(o.accept) ? o.accept.filter((p) => typeof p == "string" && p.trim() !== "") : void 0,
      max_size_kb: typeof o.max_size_kb == "number" ? o.max_size_kb : void 0,
      value: typeof o.value == "string" ? o.value : void 0
    })).filter((o) => o.key !== "");
    return {
      id: typeof e.id == "number" ? e.id : 0,
      name: typeof e.name == "string" ? e.name : "",
      description: typeof e.description == "string" ? e.description : null,
      submit_label: typeof e.submit_label == "string" ? e.submit_label : "Pošalji",
      success_message: typeof e.success_message == "string" ? e.success_message : void 0,
      schema_version: typeof e.schema_version == "string" ? e.schema_version : "v1",
      schema_json: { fields: r }
    };
  }).filter((e) => e.id > 0 && e.name.trim() !== "" && e.schema_json.fields.length > 0) : [];
}
function go(t) {
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
async function bo(t, e) {
  var n, r, o, p, s, m, d, h, v;
  if (t === "default")
    return { ...pe, companyId: t || "default" };
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const c = `${i}/api/widget/${t}/config`, g = await fetch(c, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!g.ok) {
      if (g.status === 403) {
        const j = await g.json().catch(() => null);
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
      return console.warn(`[ChatWidget] Failed to fetch config (${g.status}), using defaults.`), { ...pe, companyId: t, apiUrl: i };
    }
    const u = await g.json(), k = u.accent_color || ((n = pe.colors) == null ? void 0 : n.primaryColor) || "#2563eb", I = Array.isArray(u.suggested_questions) ? u.suggested_questions.filter((j) => typeof j == "string" && j.trim() !== "").slice(0, 4) : [], L = Array.isArray(u.contact_fields) ? u.contact_fields.filter(
      (j) => j === "name" || j === "email" || j === "phone"
    ) : [], B = (Array.isArray(u.channels) ? u.channels : []).find(
      (j) => typeof j == "object" && j !== null && j.channel === "chat_bubble"
    ), ee = (B == null ? void 0 : B.enabled) !== !1, l = u.widget_content && typeof u.widget_content == "object" ? u.widget_content : null, T = Array.isArray(l == null ? void 0 : l.suggested_message_rows) ? l.suggested_message_rows.filter((j) => typeof j == "object" && j !== null).map((j) => {
      const D = typeof j.text == "string" ? j.text.trim() : "", le = Array.isArray(j.children) ? j.children.filter((ae) => typeof ae == "string" && ae.trim() !== "") : [];
      return {
        text: D,
        children: le.length > 0 ? le : void 0
      };
    }).filter((j) => j.text !== "").slice(0, 4) : [], S = {
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
      suggestedMessageRows: T,
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
      launcherButtonColor: uo(l == null ? void 0 : l.launcher_button_color, "#05070c"),
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
    }, O = u.theme && typeof u.theme == "object" ? u.theme : null, R = O != null && O.css_vars && typeof O.css_vars == "object" ? O.css_vars : void 0, P = O != null && O.colors && typeof O.colors == "object" ? O.colors : null;
    let $ = P, E = k;
    if ($)
      P.primaryColor && (E = P.primaryColor);
    else {
      const j = S.themeMode === "dark" ? "dark" : "light", D = S.accentColorEnabled !== !1, le = S.accentColorForHeaderEnabled === !0, ae = S.tintedGrayscaleEnabled === !0, ze = S.tintedGrayscaleHue ?? 0, Ne = S.tintedGrayscaleTint ?? 0, xe = S.tintedGrayscaleShade ?? 0;
      E = D ? k : j === "dark" ? "#3b82f6" : "#2563eb";
      const ye = (mo(E).h + ze + 360) % 360, fe = Math.max(0, Math.min(40, Math.round(Math.max(0, Ne) * 0.36))), ge = Math.max(-24, Math.min(24, xe * 0.24));
      if ($ = j === "dark" ? {
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
      }, D && le && ($.headerBg = E, $.headerFg = lo(E)), ae) {
        const He = j === "dark" ? Math.max(8, Math.min(20, 12 + ge)) : Math.max(88, Math.min(97, 95 + ge * 0.22)), Ie = j === "dark" ? Math.max(10, Math.min(24, 16 + ge)) : Math.max(80, Math.min(94, 89 + ge * 0.35)), Pe = j === "dark" ? Math.max(11, Math.min(26, 18 + ge * 0.9)) : Math.max(83, Math.min(95, Ie + 3)), Ee = j === "dark" ? Math.max(22, Math.min(40, 30 + ge)) : Math.max(70, Math.min(88, 82 + ge * 0.38)), w = j === "dark" ? Math.max(16, Math.min(30, 22 + ge)) : Math.max(78, Math.min(92, Ie - 2));
        $.surfaceBg = `hsl(${ye} ${fe}% ${He}%)`, $.bubbleAiBg = `hsl(${ye} ${Math.max(0, fe - 2)}% ${Pe}%)`, $.subtle = `hsl(${ye} ${Math.max(0, fe - 4)}% ${Ie}%)`, $.border = `hsl(${ye} ${Math.max(0, fe - 5)}% ${Ee}%)`, $.hover = `hsl(${ye} ${Math.max(0, fe - 3)}% ${w}%)`;
      }
    }
    const te = fo(u.forms), Q = go(u.actions).filter(
      (j) => te.some((D) => D.id === j.form_id)
    ), oe = u.forms_enabled === !0 && te.length > 0 && Q.length > 0, Z = u.chat_available !== !1, de = u.transcribe_available !== !1 && Z, C = u.forms_available !== !1 && oe;
    return {
      ...pe,
      companyId: t,
      enabled: ee,
      apiUrl: i,
      name: u.company_name || pe.name,
      title: u.bot_name || pe.title,
      avatar: typeof (l == null ? void 0 : l.avatar_url) == "string" && l.avatar_url.trim() !== "" ? l.avatar_url : pe.avatar,
      welcomeHeadline: u.bot_name ? `Ćaskajte sa ${u.bot_name}` : pe.welcomeHeadline,
      welcomeMessage: u.welcome_message || pe.welcomeMessage,
      placeholder: S.messagePlaceholder || pe.placeholder,
      suggestedQuestions: I,
      contactFields: L.length > 0 ? L : pe.contactFields,
      contact: {
        enabled: typeof ((r = u.contact) == null ? void 0 : r.enabled) == "boolean" ? u.contact.enabled : (o = pe.contact) == null ? void 0 : o.enabled,
        title: typeof ((p = u.contact) == null ? void 0 : p.title) == "string" && u.contact.title.trim() !== "" ? u.contact.title : (s = pe.contact) == null ? void 0 : s.title,
        subtitle: typeof ((m = u.contact) == null ? void 0 : m.subtitle) == "string" && u.contact.subtitle.trim() !== "" ? u.contact.subtitle : (d = pe.contact) == null ? void 0 : d.subtitle,
        submitLabel: typeof ((h = u.contact) == null ? void 0 : h.submit_label) == "string" && u.contact.submit_label.trim() !== "" ? u.contact.submit_label : (v = pe.contact) == null ? void 0 : v.submitLabel
      },
      poweredBy: u.show_branding !== void 0 ? u.show_branding : pe.poweredBy,
      position: u.position || pe.position,
      accentGradient: Array.isArray(u.accent_gradient) ? u.accent_gradient : [],
      content: {
        ...pe.content || {},
        ...S
      },
      chatAvailable: Z,
      transcribeAvailable: de,
      formsAvailable: C,
      formsEnabled: oe,
      forms: te,
      actions: Q,
      theme: O,
      cssVars: R,
      colors: {
        ...pe.colors,
        primaryColor: E,
        bubbleUserBg: E,
        sendAccent: (P == null ? void 0 : P.sendAccent) || (S.accentColorForSendIconEnabled ? E : S.themeMode === "dark" ? "#e5e7eb" : "#111827"),
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
  } catch (c) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", c), { ...pe, companyId: t, apiUrl: i, mockMode: !1 };
  }
}
const vo = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-window-shadow: none;--pitaj-shadow: var(--pitaj-window-shadow, none);--pitaj-launcher-shadow: none;--pitaj-launcher-shadow-hover: none;--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host([data-theme="dark"]),.pitaj-root.pitaj-theme-dark,.pitaj-root[data-theme=dark]{color-scheme:dark}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:var(--pitaj-window-shadow, none);border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:none}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media(prefers-reduced-motion:reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--pitaj-launcher-border, rgba(255, 255, 255, .16));box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media(max-width:640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-human-chip{align-self:center;padding:4px 10px;border-radius:999px;font-size:12px;line-height:1.4;color:var(--pitaj-accent);background:var(--pitaj-accent-soft)}.pitaj-operator-label{font-size:11px;font-weight:600;line-height:1.3;color:var(--pitaj-accent);padding:0 4px}', jo = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", Ze = {};
function ja(t, e) {
  (Ze[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (r) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, r);
    }
  });
}
function wo(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function xo(t, e) {
  const i = e.initialConfig || {}, n = !!(e.isPreview || i.isPreview || t.isPreview), r = e.previewDraft || i.previewDraft || t.previewDraft, o = {
    ...t,
    ...i,
    isPreview: n,
    previewDraft: r,
    mockMode: n ? !0 : i.mockMode ?? t.mockMode,
    position: e.position || i.position || t.position || "bottom-right",
    apiUrl: e.apiUrl || i.apiUrl || t.apiUrl,
    colors: { ...t.colors || {}, ...i.colors || {} },
    content: { ...t.content || {}, ...i.content || {} },
    features: { ...t.features || {}, ...i.features || {} },
    theme: i.colors ? void 0 : i.theme || t.theme,
    cssVars: i.colors ? void 0 : i.cssVars || t.cssVars
  };
  if (r) {
    if (r.action) {
      const p = r.action;
      o.actions = [p, ...(o.actions || []).filter((s) => s.id !== p.id)];
    }
    if (r.form) {
      const p = r.form;
      o.forms = [p, ...(o.forms || []).filter((s) => s.id !== p.id)], o.formsAvailable = !0, o.formsEnabled = !0;
    }
    if (r.widget) {
      const p = r.widget;
      o.widgets = [p, ...(o.widgets || []).filter((s) => s.id !== p.id)];
    }
  }
  return o;
}
const _t = /* @__PURE__ */ new WeakMap();
async function Qt(t, e = {}) {
  const i = _t.get(t), n = async () => {
    var u, k;
    const o = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (u = e.initialConfig) != null && u.isPreview || o === "preview") && o === "preview" ? { ...pe, companyId: o, apiUrl: e.apiUrl, mockMode: !0 } : await bo(o, e.apiUrl), m = xo(s, e);
    if (m.enabled === !1 || m.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let d = t.shadowRoot;
    d || (d = t.attachShadow({ mode: "open" })), d.innerHTML = "";
    const h = document.createElement("style");
    h.textContent = vo, d.appendChild(h);
    const v = document.createElement("div");
    v.className = "pitaj-shadow-mount", d.appendChild(v);
    const c = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((k = t.closest) != null && k.call(t, "[data-pitaj-preview]")));
    if (c) {
      const I = document.createElement("style");
      I.textContent = jo, d.appendChild(I);
    }
    ki(
      /* @__PURE__ */ a(
        po,
        {
          config: m,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: c,
          initialScreen: e.initialScreen,
          onEvent: ja
        }
      ),
      v
    );
    const g = Oe();
    return g && (t.__pitajController = g), {
      controller: g,
      unmount: () => {
        ki(null, v), d && (d.innerHTML = "");
      }
    };
  }, r = (i || Promise.resolve()).then(n, n);
  _t.set(t, r);
  try {
    return await r;
  } finally {
    _t.get(t) === r && _t.delete(t);
  }
}
let ht = null;
const St = {
  mount: async (t, e) => {
    const i = await Qt(t, e);
    return ht = i.unmount, i;
  },
  unmount: () => {
    ht && (ht(), ht = null);
  },
  init: async (t) => {
    const e = wo(t.containerId || "pitaj-io-widget-root"), i = await Qt(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return ht = i.unmount, i;
  },
  open: () => {
    var t;
    return (t = Oe()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = Oe()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = Oe()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = Oe()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = Oe()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = Oe()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = Oe()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    Ze[t] || (Ze[t] = []), Ze[t].push(e);
  },
  off: (t, e) => {
    Ze[t] && (Ze[t] = Ze[t].filter((i) => i !== e));
  },
  emit: (t, e) => {
    ja(t, e);
  }
};
class yo extends HTMLElement {
  constructor() {
    super(...arguments);
    We(this, "unmountFn", null);
  }
  async connectedCallback() {
    const i = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, r = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", o = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", p = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await Qt(this, { widgetId: i, apiUrl: n, position: r, startOpen: o, isInline: p });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Oi(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const i = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", r = t.getAttribute("data-start-open") === "true", o = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: i, position: n, startOpen: r, isInline: o };
}
var Vi;
if (typeof window < "u") {
  const t = ((Vi = window.PitajIO) == null ? void 0 : Vi._q) || [];
  window.PitajIO = St, customElements.get("pitaj-io") || customElements.define("pitaj-io", yo);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, St.init(e).then(() => {
      t.forEach(({ method: i, args: n }) => {
        const r = St[i];
        typeof r == "function" && r(...n);
      });
    });
  else {
    const i = document.currentScript;
    let n = Oi(i);
    if (!n) {
      const r = Array.prototype.slice.call(document.scripts || []);
      for (let o = r.length - 1; o >= 0; o--) {
        const p = r[o];
        if (p.src && /widget(\.iife)?\.js/i.test(p.src) && (n = Oi(p), n))
          break;
      }
    }
    n && St.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  ie as A,
  Oo as B,
  Co as C,
  Jo as D,
  Nn as E,
  ua as F,
  Zo as G,
  _o as H,
  Go as I,
  ni as J,
  Eo as K,
  $o as L,
  Lo as M,
  Do as N,
  Bo as O,
  Ut as P,
  Ho as Q,
  oa as R,
  Le as S,
  Ge as T,
  zo as U,
  St as V,
  To as W,
  ra as a,
  wn as b,
  Ct as c,
  Y as d,
  No as e,
  Ao as f,
  Io as g,
  J as h,
  So as i,
  Fe as j,
  Ro as k,
  Sa as l,
  Wo as m,
  Vo as n,
  Uo as o,
  Ht as p,
  Po as q,
  jn as r,
  Ko as s,
  F as t,
  a as u,
  Yo as v,
  Be as w,
  Mo as x,
  Fo as y,
  Sn as z
};
