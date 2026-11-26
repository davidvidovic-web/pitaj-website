var Sa = Object.defineProperty;
var Ma = (t, e, i) => e in t ? Sa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var We = (t, e, i) => Ma(t, typeof e != "symbol" ? e + "" : e, i);
var Dt, se, Wi, Ke, xi, qi, Zi, Vt, Mt, bt, Gi, ti, Gt, Jt, Lt = {}, Tt = [], Na = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Bt = Array.isArray;
function Fe(t, e) {
  for (var i in e) t[i] = e[i];
  return t;
}
function ii(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function za(t, e, i) {
  var a, r, o, l = {};
  for (o in e) o == "key" ? a = e[o] : o == "ref" ? r = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Dt.call(arguments, 2) : i), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) l[o] === void 0 && (l[o] = t.defaultProps[o]);
  return Nt(t, l, a, r, null);
}
function Nt(t, e, i, a, r) {
  var o = { type: t, props: e, key: i, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++Wi, __i: -1, __u: 0 };
  return r == null && se.vnode != null && se.vnode(o), o;
}
function Ee(t) {
  return t.children;
}
function zt(t, e) {
  this.props = t, this.context = e;
}
function Ge(t, e) {
  if (e == null) return t.__ ? Ge(t.__, t.__i + 1) : null;
  for (var i; e < t.__k.length; e++) if ((i = t.__k[e]) != null && i.__e != null) return i.__e;
  return typeof t.type == "function" ? Ge(t) : null;
}
function Aa(t) {
  if (t.__P && t.__d) {
    var e = t.__v, i = e.__e, a = [], r = [], o = Fe({}, e);
    o.__v = e.__v + 1, se.vnode && se.vnode(o), ai(t.__P, o, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [i] : null, a, i ?? Ge(e), !!(32 & e.__u), r), o.__v = e.__v, o.__.__k[o.__i] = o, ta(a, o, r), e.__e = e.__ = null, o.__e != i && Ji(o);
  }
}
function Ji(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Ji(t);
}
function wi(t) {
  (!t.__d && (t.__d = !0) && Ke.push(t) && !Pt.__r++ || xi != se.debounceRendering) && ((xi = se.debounceRendering) || qi)(Pt);
}
function Pt() {
  try {
    for (var t, e = 1; Ke.length; ) Ke.length > e && Ke.sort(Zi), t = Ke.shift(), e = Ke.length, Aa(t);
  } finally {
    Ke.length = Pt.__r = 0;
  }
}
function Qi(t, e, i, a, r, o, l, s, u, d, f) {
  var v, c, b, h, k, z, C = a && a.__k || Tt, _ = e.length;
  for (u = Ia(i, e, C, u, _), v = 0; v < _; v++) (b = i.__k[v]) != null && (c = b.__i != -1 && C[b.__i] || Lt, b.__i = v, z = ai(t, b, c, r, o, l, s, u, d, f), h = b.__e, b.ref && c.ref != b.ref && (c.ref && ni(c.ref, null, b), f.push(b.ref, b.__c || h, b)), k == null && h != null && (k = h), 4 & b.__u ? (u = Xi(b, u, t), c.__e && (c.__e = null)) : typeof b.type == "function" && z !== void 0 ? u = z : h && (u = h.nextSibling), b.__u &= -7);
  return i.__e = k, u;
}
function Ia(t, e, i, a, r) {
  var o, l, s, u, d, f = i.length, v = f, c = 0;
  for (t.__k = new Array(r), o = 0; o < r; o++) (l = e[o]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = t.__k[o] = Nt(null, l, null, null, null) : Bt(l) ? l = t.__k[o] = Nt(Ee, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? l = t.__k[o] = Nt(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : t.__k[o] = l, u = o + c, l.__ = t, l.__b = t.__b + 1, s = null, (d = l.__i = Ca(l, i, u, v)) != -1 && (v--, (s = i[d]) && (s.__u |= 2)), s == null || s.__v == null ? (d == -1 && (r > f ? c-- : r < f && c++), typeof l.type != "function" && (l.__u |= 4)) : d != u && (d == u - 1 ? c-- : d == u + 1 ? c++ : (d > u ? c-- : c++, l.__u |= 4))) : t.__k[o] = null;
  if (v) for (o = 0; o < f; o++) (s = i[o]) != null && (2 & s.__u) == 0 && (s.__e == a && (a = Ge(s)), aa(s, s));
  return a;
}
function Xi(t, e, i) {
  var a, r;
  if (typeof t.type == "function") {
    for (a = t.__k, r = 0; a && r < a.length; r++) a[r] && (a[r].__ = t, e = Xi(a[r], e, i));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = Ge(t)), e = i.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Ca(t, e, i, a) {
  var r, o, l, s = t.key, u = t.type, d = e[i], f = d != null && (2 & d.__u) == 0;
  if (d === null && s == null || f && s == d.key && u == d.type) return i;
  if (a > (f ? 1 : 0)) {
    for (r = i - 1, o = i + 1; r >= 0 || o < e.length; ) if ((d = e[l = r >= 0 ? r-- : o++]) != null && (2 & d.__u) == 0 && s == d.key && u == d.type) return l;
  }
  return -1;
}
function ki(t, e, i) {
  e[0] == "-" ? t.setProperty(e, i ?? "") : t[e] = i == null ? "" : typeof i != "number" || Na.test(e) ? i : i + "px";
}
function kt(t, e, i, a, r) {
  var o, l;
  e: if (e == "style") if (typeof i == "string") t.style.cssText = i;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (e in a) i && e in i || ki(t.style, e, "");
    if (i) for (e in i) a && i[e] == a[e] || ki(t.style, e, i[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(Gi, "$1")), l = e.toLowerCase(), e = l in t || e == "onFocusOut" || e == "onFocusIn" ? l.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = i, i ? a ? i[bt] = a[bt] : (i[bt] = ti, t.addEventListener(e, o ? Jt : Gt, o)) : t.removeEventListener(e, o ? Jt : Gt, o);
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
      if (e[Mt] == null) e[Mt] = ti++;
      else if (e[Mt] < i[bt]) return;
      return i(se.event ? se.event(e) : e);
    }
  };
}
function ai(t, e, i, a, r, o, l, s, u, d) {
  var f, v, c, b, h, k, z, C, _, D, te, F, L, p, X, T, A = e.type;
  if (e.constructor !== void 0) return null;
  128 & i.__u && (u = !!(32 & i.__u), o = [s = e.__e = i.__e]), (f = se.__b) && f(e);
  e: if (typeof A == "function") {
    v = l.length;
    try {
      if (_ = e.props, D = A.prototype && A.prototype.render, te = (f = A.contextType) && a[f.__c], F = f ? te ? te.props.value : f.__ : a, i.__c ? C = (c = e.__c = i.__c).__ = c.__E : (D ? e.__c = c = new A(_, F) : (e.__c = c = new zt(_, F), c.constructor = A, c.render = Ta), te && te.sub(c), c.state || (c.state = {}), c.__n = a, b = c.__d = !0, c.__h = [], c._sb = []), D && c.__s == null && (c.__s = c.state), D && A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Fe({}, c.__s)), Fe(c.__s, A.getDerivedStateFromProps(_, c.__s))), h = c.props, k = c.state, c.__v = e, b) D && A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), D && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (D && A.getDerivedStateFromProps == null && _ !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, F), e.__v == i.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, F) === !1) {
          e.__v != i.__v && (c.props = _, c.state = c.__s, c.__d = !1), e.__e = i.__e, e.__k = i.__k, e.__k.some(function(Z) {
            Z && (Z.__ = e);
          }), Tt.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && l.push(c), s = Ge(i);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, F), D && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(h, k, z);
        });
      }
      if (c.context = F, c.props = _, c.__P = t, c.__e = !1, L = se.__r, p = 0, D) c.state = c.__s, c.__d = !1, L && L(e), f = c.render(c.props, c.state, c.context), Tt.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, L && L(e), f = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++p < 25);
      c.state = c.__s, c.getChildContext != null && (a = Fe(Fe({}, a), c.getChildContext())), D && !b && c.getSnapshotBeforeUpdate != null && (z = c.getSnapshotBeforeUpdate(h, k)), X = f != null && f.type === Ee && f.key == null ? ia(f.props.children) : f, s = Qi(t, Bt(X) ? X : [X], e, i, a, r, o, l, s, u, d), c.base = e.__e, e.__u &= -161, c.__h.length && l.push(c), C && (c.__E = c.__ = null);
    } catch (Z) {
      if (l.length = v, e.__v = null, u || o != null) {
        if (Z.then) {
          for (e.__u |= u ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
          o != null && (o[o.indexOf(s)] = null), e.__e = s;
        } else if (o != null) for (T = o.length; T--; ) ii(o[T]);
      } else e.__e = i.__e;
      e.__k == null && (e.__k = i.__k || []), Z.then || ea(e), se.__e(Z, e, i);
    }
  } else o == null && e.__v == i.__v ? (e.__k = i.__k, e.__e = i.__e) : s = e.__e = La(i.__e, e, i, a, r, o, l, u, d);
  return (f = se.diffed) && f(e), 128 & e.__u ? void 0 : s;
}
function ea(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(ea));
}
function ta(t, e, i) {
  for (var a = 0; a < i.length; a++) ni(i[a], i[++a], i[++a]);
  se.__c && se.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(o) {
        o.call(r);
      });
    } catch (o) {
      se.__e(o, r.__v);
    }
  });
}
function ia(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Bt(t) ? t.map(ia) : t.constructor !== void 0 ? null : Fe({}, t);
}
function La(t, e, i, a, r, o, l, s, u) {
  var d, f, v, c, b, h, k, z = i.props || Lt, C = e.props, _ = e.type;
  if (_ == "svg" ? r = "http://www.w3.org/2000/svg" : _ == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), o != null) {
    for (d = 0; d < o.length; d++) if ((b = o[d]) && "setAttribute" in b == !!_ && (_ ? b.localName == _ : b.nodeType == 3)) {
      t = b, o[d] = null;
      break;
    }
  }
  if (t == null) {
    if (_ == null) return document.createTextNode(C);
    t = document.createElementNS(r, _, C.is && C), s && (se.__m && se.__m(e, o), s = !1), o = null;
  }
  if (_ == null) z === C || s && t.data == C || (t.data = C);
  else {
    if (o = _ == "textarea" && C.defaultValue != null ? null : o && Dt.call(t.childNodes), !s && o != null) for (z = {}, d = 0; d < t.attributes.length; d++) z[(b = t.attributes[d]).name] = b.value;
    for (d in z) b = z[d], d == "dangerouslySetInnerHTML" ? v = b : d == "children" || d in C || d == "value" && "defaultValue" in C || d == "checked" && "defaultChecked" in C || kt(t, d, null, b, r);
    for (d in C) b = C[d], d == "children" ? c = b : d == "dangerouslySetInnerHTML" ? f = b : d == "value" ? h = b : d == "checked" ? k = b : s && typeof b != "function" || z[d] === b || kt(t, d, b, z[d], r);
    if (f) s || v && (f.__html == v.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (v && (t.innerHTML = ""), Qi(e.type == "template" ? t.content : t, Bt(c) ? c : [c], e, i, a, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, o, l, o ? o[0] : i.__k && Ge(i, 0), s, u), o != null) for (d = o.length; d--; ) ii(o[d]);
    s && _ != "textarea" || (d = "value", _ == "progress" && h == null ? t.removeAttribute("value") : h != null && (h !== t[d] || _ == "progress" && !h || _ == "option" && h != z[d]) && kt(t, d, h, z[d], r), d = "checked", k != null && k != t[d] && kt(t, d, k, z[d], r));
  }
  return t;
}
function ni(t, e, i) {
  try {
    if (typeof t == "function") {
      var a = typeof t.__u == "function";
      a && t.__u(), a && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (r) {
    se.__e(r, i);
  }
}
function aa(t, e, i) {
  var a, r;
  if (se.unmount && se.unmount(t), (a = t.ref) && (a.current && a.current != t.__e || ni(a, null, e)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (o) {
      se.__e(o, e);
    }
    a.base = a.__P = a.__n = null;
  }
  if (a = t.__k) for (r = 0; r < a.length; r++) a[r] && aa(a[r], e, i || typeof t.type != "function");
  i || ii(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ta(t, e, i) {
  return this.constructor(t, i);
}
function _i(t, e, i) {
  var a, r, o, l;
  e == document && (e = document.documentElement), se.__ && se.__(t, e), r = (a = !1) ? null : e.__k, o = [], l = [], ai(e, t = e.__k = za(Ee, null, [t]), r || Lt, Lt, e.namespaceURI, r ? null : e.firstChild ? Dt.call(e.childNodes) : null, o, r ? r.__e : e.firstChild, a, l), ta(o, t, l), t.props.children = null;
}
Dt = Tt.slice, se = { __e: function(t, e, i, a) {
  for (var r, o, l; e = e.__; ) if ((r = e.__c) && !r.__) try {
    if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(t)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, a || {}), l = r.__d), l) return r.__E = r;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Wi = 0, zt.prototype.setState = function(t, e) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = Fe({}, this.state), typeof t == "function" && (t = t(Fe({}, i), this.props)), t && Fe(i, t), t != null && this.__v && (e && this._sb.push(e), wi(this));
}, zt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), wi(this));
}, zt.prototype.render = Ee, Ke = [], qi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Zi = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Pt.__r = 0, Vt = Math.random().toString(8), Mt = "__d" + Vt, bt = "__a" + Vt, Gi = /(PointerCapture)$|Capture$/i, ti = 0, Gt = yi(!1), Jt = yi(!0);
var Pa = 0;
function n(t, e, i, a, r, o) {
  e || (e = {});
  var l, s, u = e;
  if ("ref" in u) for (s in u = {}, e) s == "ref" ? l = e[s] : u[s] = e[s];
  var d = { type: t, props: u, key: i, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Pa, __i: -1, __u: 0, __source: r, __self: o };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) u[s] === void 0 && (u[s] = l[s]);
  return se.vnode && se.vnode(d), d;
}
var jt, me, Kt, Si, xt = 0, na = [], fe = se, Mi = fe.__b, Ni = fe.__r, zi = fe.diffed, Ai = fe.__c, Ii = fe.unmount, Ci = fe.__;
function oi(t, e) {
  fe.__h && fe.__h(me, t, xt || e), xt = 0;
  var i = me.__H || (me.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function K(t) {
  return xt = 1, Ea(ra, t);
}
function Ea(t, e, i) {
  var a = oi(jt++, 2);
  if (a.t = t, !a.__c && (a.__ = [ra(void 0, e), function(s) {
    var u = a.__N ? a.__N[0] : a.__[0], d = a.t(u, s);
    u !== d && (a.__N = [d, a.__[1]], a.__c.setState({}));
  }], a.__c = me, !me.__f)) {
    var r = function(s, u, d) {
      if (!a.__c.__H) return !0;
      var f = !1, v = a.__c.props !== s;
      if (a.__c.__H.__.some(function(b) {
        if (b.__N) {
          f = !0;
          var h = b.__[0];
          b.__ = b.__N, b.__N = void 0, h !== b.__[0] && (v = !0);
        }
      }), o) {
        var c = o.call(this, s, u, d);
        return f ? c || v : c;
      }
      return !f || v;
    };
    me.__f = !0;
    var o = me.shouldComponentUpdate, l = me.componentWillUpdate;
    me.componentWillUpdate = function(s, u, d) {
      if (this.__e) {
        var f = o;
        o = void 0, r(s, u, d), o = f;
      }
      l && l.call(this, s, u, d);
    }, me.shouldComponentUpdate = r;
  }
  return a.__N || a.__;
}
function ee(t, e) {
  var i = oi(jt++, 3);
  !fe.__s && oa(i.__H, e) && (i.__ = t, i.u = e, me.__H.__h.push(i));
}
function oe(t) {
  return xt = 5, Ze(function() {
    return { current: t };
  }, []);
}
function Ze(t, e) {
  var i = oi(jt++, 7);
  return oa(i.__H, e) && (i.__ = t(), i.__H = e, i.__h = t), i.__;
}
function pe(t, e) {
  return xt = 8, Ze(function() {
    return t;
  }, e);
}
function $a() {
  for (var t; t = na.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(At), e.__h.some(Qt), e.__h = [];
    } catch (i) {
      e.__h = [], fe.__e(i, t.__v);
    }
  }
}
fe.__b = function(t) {
  me = null, Mi && Mi(t);
}, fe.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ci && Ci(t, e);
}, fe.__r = function(t) {
  Ni && Ni(t), jt = 0;
  var e = (me = t.__c).__H;
  e && (Kt === me ? (e.__h = [], me.__h = [], e.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (e.__h.some(At), e.__h.some(Qt), e.__h = [], jt = 0)), Kt = me;
}, fe.diffed = function(t) {
  zi && zi(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (na.push(e) !== 1 && Si === fe.requestAnimationFrame || ((Si = fe.requestAnimationFrame) || Da)($a)), e.__H.__.some(function(i) {
    i.u && (i.__H = i.u, i.u = void 0);
  })), Kt = me = null;
}, fe.__c = function(t, e) {
  e.some(function(i) {
    try {
      i.__h.some(At), i.__h = i.__h.filter(function(a) {
        return !a.__ || Qt(a);
      });
    } catch (a) {
      e.some(function(r) {
        r.__h && (r.__h = []);
      }), e = [], fe.__e(a, i.__v);
    }
  }), Ai && Ai(t, e);
}, fe.unmount = function(t) {
  Ii && Ii(t);
  var e, i = t.__c;
  i && i.__H && (i.__H.__.some(function(a) {
    try {
      At(a);
    } catch (r) {
      e = r;
    }
  }), i.__H = void 0, e && fe.__e(e, i.__v));
};
var Li = typeof requestAnimationFrame == "function";
function Da(t) {
  var e, i = function() {
    clearTimeout(a), Li && cancelAnimationFrame(e), setTimeout(t);
  }, a = setTimeout(i, 35);
  Li && (e = requestAnimationFrame(i));
}
function At(t) {
  var e = me, i = t.__c;
  typeof i == "function" && (t.__c = void 0, i()), me = e;
}
function Qt(t) {
  var e = me;
  t.__c = t.__(), me = e;
}
function oa(t, e) {
  return !t || t.length !== e.length || e.some(function(i, a) {
    return i !== t[a];
  });
}
function ra(t, e) {
  return typeof e == "function" ? e(t) : e;
}
class sa extends Error {
  constructor(i, a = 60, r) {
    super(i);
    We(this, "retryAfterSeconds");
    We(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = a, this.code = r;
  }
}
class ri extends Error {
  constructor(i, a, r, o) {
    super(i);
    We(this, "status");
    We(this, "code");
    We(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = a, this.code = r, this.retryAfterSeconds = o;
  }
}
function Ba(t, e) {
  const i = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(i) && i > 0 ? Math.floor(i) : e;
}
async function Ht(t, e) {
  const i = await t.json().catch(() => null);
  ca(t.status, i, e, t.headers.get("Retry-After"));
}
function ca(t, e, i, a) {
  const r = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, o = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || i, l = Ba((e == null ? void 0 : e.retry_after) ?? a, 60);
  throw t === 429 || r === "RATE_LIMIT_EXCEEDED" ? new sa(o, l, r) : new ri(o, t, r, l);
}
const Yt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map();
function Ha(t, e) {
  const a = `pitaj_widget_session_v2:${(e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "")}:${t}`;
  ft.delete(a);
  try {
    localStorage.removeItem(a);
  } catch {
  }
}
async function Re(t, e) {
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), a = `pitaj_widget_session_v2:${i}:${t}`;
  if (ft.has(a)) return ft.get(a);
  try {
    const l = localStorage.getItem(a);
    if (l)
      return ft.set(a, l), l;
  } catch {
  }
  const r = Yt.get(a);
  if (r) return r;
  const o = (async () => {
    const l = await fetch(`${i}/api/widget/${encodeURIComponent(t)}/v2/session`, {
      method: "POST",
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!l.ok) throw new Error("Nije moguće pokrenuti sigurnu sesiju.");
    const s = await l.json();
    if (typeof s.token != "string" || !/^[a-f0-9]{64}$/.test(s.token)) throw new Error("Neispravan odgovor sesije.");
    ft.set(a, s.token);
    try {
      localStorage.setItem(a, s.token);
    } catch {
    }
    return s.token;
  })();
  Yt.set(a, o);
  try {
    return await o;
  } finally {
    Yt.delete(a);
  }
}
async function Ua(t, e, i, a, r) {
  if (!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1) throw new Error("Razgovor nije dostupan.");
  const o = (r || window.location.origin).replace(/\/$/, ""), l = await Re(t, r), s = await fetch(`${o}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/action-dismissals`, {
    method: "POST",
    cache: "no-store",
    headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${l}` },
    body: JSON.stringify({ action_id: i, dismissal_uuid: a })
  });
  s.ok || await Ht(s, "Poruku nije moguće sačuvati.");
  const u = await s.json();
  if (typeof u.message != "string" || !u.message.trim() || u.message.length > 1020) throw new Error("Neispravan odgovor.");
  return u.message;
}
function Ra(t, e) {
  var a, r, o, l;
  const i = (r = (a = e.widget) == null ? void 0 : a.config) == null ? void 0 : r.event_key;
  return {
    widgetId: t,
    actionId: e.id,
    name: e.name,
    formId: e.form_id ?? null,
    inlineWidgetId: e.widget_id ?? ((o = e.widget) == null ? void 0 : o.id) ?? null,
    clientActionKey: ((l = e.widget) == null ? void 0 : l.type) === "action_client" && typeof i == "string" && /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(i) ? i : null
  };
}
const Fa = 1200;
let Et = [], vt = null, Je = null;
async function Oa(t, e) {
  if (e.length === 0) return;
  const i = (t.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const a = await Re(t.companyId, t.apiUrl);
    await fetch(`${i}/api/widget/${encodeURIComponent(t.companyId)}/v2/catalog-events`, {
      method: "POST",
      keepalive: !0,
      headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${a}` },
      body: JSON.stringify({
        conversation_id: t.conversationId && /^[1-9]\d*$/.test(t.conversationId) ? Number(t.conversationId) : void 0,
        events: e.slice(0, 20)
      })
    });
  } catch {
  }
}
function Wt() {
  vt && clearTimeout(vt), vt = null;
  const t = Et, e = Je;
  Et = [], Je = null, e && Oa(e, t);
}
function Va(t, e) {
  if (!(!Number.isSafeInteger(e.product_id) || e.product_id < 1)) {
    if (Je && (Je.conversationId !== t.conversationId || Je.companyId !== t.companyId) && Wt(), Je = t, Et.push(e), e.type === "clicked" || Et.length >= 20) {
      Wt();
      return;
    }
    vt || (vt = setTimeout(Wt, Fa));
  }
}
async function Ka(t, e) {
  const i = t.body;
  if (!i)
    throw new Error("Response body is null");
  const a = i.getReader(), r = new TextDecoder("utf-8");
  let o = "";
  try {
    for (; ; ) {
      const { done: l, value: s } = await a.read();
      if (l)
        break;
      o += r.decode(s, { stream: !0 });
      const u = o.split(/\r?\n/);
      o = u.pop() || "";
      for (const d of u) {
        const f = d.trim();
        if (!(!f || f.startsWith(":")) && f.startsWith("data:")) {
          const v = f.slice(5).trim();
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
  } catch (l) {
    if (e.onError)
      e.onError(l);
    else
      throw l;
  }
}
function pa(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function si(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Ya(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return si(e.of(t));
  } catch {
    return null;
  }
}
function Wa() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const i = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (i) {
        const a = JSON.parse(i);
        t = pa(
          a.country_code ?? a.countryCode ?? a.visitor_country_code ?? a.visitorCountryCode ?? a.country
        ), e = si(
          a.country_name ?? a.countryName ?? a.visitor_country_name ?? a.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Ya(t)), { code: t, name: e };
}
const Ti = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function qa(t, e, i, a) {
  var u;
  const r = (a == null ? void 0 : a.action) || (i && i.length > 0 ? i[0] : null);
  if (r && e.onActionTrigger) {
    const v = (!!(r.widget_id || r.widget || a != null && a.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let c = 0; c < v.length; c++) {
      const b = v[c] + (c < v.length - 1 ? " " : "");
      e.onChunk(b), await new Promise((h) => setTimeout(h, 20));
    }
    e.onActionTrigger({
      id: r.id,
      name: r.name,
      form_id: r.form_id,
      widget_id: r.widget_id,
      widget: r.widget || (a == null ? void 0 : a.widget) || null
    }), e.onDone && e.onDone();
    return;
  }
  const o = `${Ti[Math.floor(Math.random() * Ti.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, l = ((u = a == null ? void 0 : a.content) == null ? void 0 : u.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = o.split(" ");
  for (let d = 0; d < s.length; d++) {
    const f = s[d] + (d < s.length - 1 ? " " : "");
    e.onChunk(f), await new Promise((v) => setTimeout(v, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && l.length > 0 && e.onSuggestedQuestions(l), e.onDone && e.onDone();
}
async function Za(t) {
  const {
    companyId: e,
    conversationId: i,
    visitorId: a,
    message: r,
    forceNewConversation: o,
    apiUrl: l,
    mockMode: s,
    visitorName: u,
    visitorEmail: d,
    visitorPhone: f,
    visitorCountryCode: v,
    visitorCountryName: c,
    actions: b,
    previewDraft: h,
    callbacks: k
  } = t;
  if (s || !e || e === "default") {
    await qa(r, k, b, h);
    return;
  }
  const z = (l || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), C = Wa(), _ = pa(v) ?? C.code ?? void 0, D = si(c) ?? C.name ?? void 0, te = await Re(e, l), F = `${z}/api/widget/${encodeURIComponent(e)}/v2/chat`, L = i && !i.startsWith("conv-") ? parseInt(i, 10) : null, p = await fetch(F, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${te}`,
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: r,
      channel: t.channel || void 0,
      conversation_id: L,
      force_new_conversation: o === !0,
      visitor_id: a,
      visitor_language: t.visitorLanguage || void 0,
      visitor_name: u || void 0,
      visitor_email: d || void 0,
      visitor_phone: f || void 0,
      visitor_country_code: _,
      visitor_country_name: D
    })
  });
  if (p.ok || await Ht(p, `API greška (${p.status})`), (p.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Ka(p, k);
  else {
    const T = await p.json(), A = T.answer || T.message || "";
    T.conversation_id !== void 0 && k.onConversationId && k.onConversationId(T.conversation_id);
    const Z = T.ticket_number ?? T.ticketNumber;
    if (Z != null && String(Z).trim() !== "" && String(Z).trim() !== "undefined" && String(Z).trim() !== "null" && k.onTicketNumber && k.onTicketNumber(String(Z).trim()), T.ai_paused === !0 && k.onAiPaused && k.onAiPaused(), T.triggered_action && k.onActionTrigger && k.onActionTrigger(T.triggered_action), A && A.trim()) {
      const H = A.split(" ");
      for (let O = 0; O < H.length; O++) {
        const re = H[O] + (O < H.length - 1 ? " " : "");
        k.onChunk(re), await new Promise((Q) => setTimeout(Q, 15));
      }
    }
    const P = T.suggestedQuestions ?? T.suggested_questions;
    Array.isArray(P) && P.length > 0 && k.onSuggestedQuestions && k.onSuggestedQuestions(P), k.onDone && k.onDone();
  }
}
async function Xt(t) {
  const { widgetId: e, visitorId: i, apiUrl: a, status: r, page: o = 1, perPage: l = 15 } = t, s = (a || "").replace(/\/$/, ""), u = new URLSearchParams({
    page: String(o),
    per_page: String(l)
  });
  r && u.set("status", r), t.summary && u.set("summary", "1");
  const d = await Re(e, a), f = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/v2/tickets?${u}`, { headers: { Authorization: `Bearer ${d}` } }), v = await f.json().catch(() => null);
  if (!f.ok) throw new Error(v && "error" in v ? v.error : "Tikete nije moguće učitati.");
  const c = (v == null ? void 0 : v.data) || [], b = c.map((z) => ({
    id: z.id,
    ticketNumber: z.ticket_number,
    conversationId: z.conversation_id,
    isResolved: !!z.is_resolved,
    updatedAt: z.updated_at,
    messages: (z.messages || []).map((C) => {
      var _;
      return {
        id: String(C.id),
        content: C.content,
        sender: C.role === "user" ? "user" : "ai",
        timestamp: C.created_at,
        status: "sent",
        suggestedQuestions: ((_ = C.meta_json) == null ? void 0 : _.suggested_questions) || void 0
      };
    })
  })), h = v == null ? void 0 : v.meta, k = (h == null ? void 0 : h.has_more) !== void 0 ? !!h.has_more : c.length >= l;
  return {
    tickets: b,
    hasMore: k,
    total: h == null ? void 0 : h.total,
    currentPage: (h == null ? void 0 : h.current_page) ?? o
  };
}
async function Ga(t, e, i) {
  return (await Xt({ widgetId: t, visitorId: e, apiUrl: i, page: 1, perPage: 50, summary: !0 })).tickets;
}
async function Ja(t, e, i, a, r) {
  const o = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || r || !o)
    return await new Promise((d) => setTimeout(d, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: i };
  const l = (a || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await Re(t, a), u = await fetch(`${l}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${s}` },
    body: JSON.stringify({ satisfaction: i })
  });
  if (!u.ok) {
    const f = (await u.json().catch(() => ({}))).error || (u.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), v = new Error(f);
    throw v.status = u.status, v;
  }
  return await u.json();
}
function Pi(t, e = "bs", i = ["bs"]) {
  var d, f;
  const a = (i && i.length > 0 ? i : [e]).map((v) => v.trim().toLowerCase()), r = (e || "bs").trim().toLowerCase();
  let o = "";
  if (t === "website" ? typeof document < "u" && (o = ((d = document.documentElement) == null ? void 0 : d.lang) || ((f = document.querySelector("html")) == null ? void 0 : f.getAttribute("lang")) || "") : typeof navigator < "u" && (o = navigator.language || navigator.languages && navigator.languages[0] || ""), !o || typeof o != "string")
    return r;
  let u = o.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (u === "hr" || u === "sr") && !a.includes(u) && a.includes("bs") && (u = "bs"), a.includes(u) ? u : r;
}
function zo(t, e, i) {
  const a = t.current_step;
  return t.run_id !== e.run_id || t.status !== "waiting_input" || (a == null ? void 0 : a.type) !== "wait_submission" || Object.prototype.hasOwnProperty.call(a, "widget") && (!a.widget || a.widget.id !== a.widget_id) || a.form_revision != null && a.form_revision !== e.form_revision ? null : a.widget_id === i && a.display_node_id === e.display_node_id ? a.node_id : null;
}
function Ei(t, e) {
  var o;
  const i = t.current_step;
  if (!i) return null;
  const a = t.status === "waiting_display" && i.type === "show_widget" ? i.node_id : t.status === "waiting_input" && i.type === "wait_submission" ? i.display_node_id : null;
  if (!a) return null;
  const r = Object.prototype.hasOwnProperty.call(i, "widget") ? i.widget : e.find((l) => l.id === i.widget_id);
  if ((r == null ? void 0 : r.id) !== i.widget_id) return null;
  if (r && t.status === "waiting_display") {
    const l = (o = r.config) == null ? void 0 : o.function_revision, s = i.function_revision;
    if ((l || s) && (!l || !s || l !== s)) return null;
  }
  return r ? { ...r, workflow: { run_id: t.run_id, display_node_id: a, ...t.status === "waiting_input" && i.form_revision ? { form_revision: i.form_revision } : {} } } : null;
}
function Qa(t, e) {
  if (!e.workflow) return t;
  const { run_id: i, display_node_id: a } = e.workflow, r = `workflow-${i}-${a}`, o = t.messages.findIndex((l) => {
    var s, u, d, f;
    return l.id === r || ((u = (s = l.widget) == null ? void 0 : s.workflow) == null ? void 0 : u.run_id) === i && ((f = (d = l.widget) == null ? void 0 : d.workflow) == null ? void 0 : f.display_node_id) === a;
  });
  if (o >= 0) {
    const l = t.messages[o];
    if (JSON.stringify(l.widget) === JSON.stringify(e)) return t;
    const s = [...t.messages];
    return s[o] = { ...l, widget: e }, { ...t, messages: s };
  }
  return { ...t, messages: [...t.messages, { id: r, content: "", sender: "ai", timestamp: (/* @__PURE__ */ new Date()).toISOString(), widget: e }] };
}
function Xa(t, e) {
  let i = !1;
  const a = setTimeout(() => {
    i || (i = !0, e("timeout"));
  }, t);
  return {
    complete(r) {
      return i || !r || typeof r != "object" || typeof r.success != "boolean" ? !1 : (i = !0, clearTimeout(a), e(r.success ? "success" : "failed"), !0);
    },
    cancel() {
      i || (i = !0, clearTimeout(a));
    }
  };
}
async function en(t, e, i, a, r, o) {
  if (!(!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1))
    try {
      const l = (o || window.location.origin).replace(/\/$/, ""), s = await Re(t, o);
      await fetch(`${l}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/client-action-results`, {
        method: "POST",
        cache: "no-store",
        headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${s}` },
        body: JSON.stringify({ action_id: i, event_uuid: a, state: r })
      });
    } catch {
    }
}
async function tn(t) {
  const e = (t.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const i = await Re(t.companyId, t.apiUrl), a = await fetch(
      `${e}/api/widget/${encodeURIComponent(t.companyId)}/v2/conversations/${encodeURIComponent(t.conversationId)}/live?after=${t.after}`,
      { headers: { Authorization: `Bearer ${i}`, Accept: "application/json" }, cache: "no-store" }
    );
    if (!a.ok) return null;
    const r = await a.json();
    return {
      aiPaused: r.ai_paused === !0,
      isResolved: r.is_resolved === !0,
      messages: Array.isArray(r.messages) ? r.messages : []
    };
  } catch {
    return null;
  }
}
async function an(t) {
  const e = (t.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const i = await Re(t.companyId, t.apiUrl);
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
const la = 3e3, nn = 15e3, on = 3e4, $i = 6e4, rn = 1800 * 1e3, It = 60 * 1e3, sn = 2e4, cn = 5 * It;
function pn(t) {
  return !t.hidden && t.idleMs <= cn;
}
function Di(t) {
  const { aiPaused: e, hidden: i, idleMs: a } = t;
  return i || a > rn ? null : e ? a <= 5 * It ? la : 1e4 : a <= 2 * It ? nn : a <= 10 * It ? 3e4 : 6e4;
}
function ln(t, e, i = Math.random()) {
  if (e <= 0) return t;
  const a = Math.min($i, la * 2 ** Math.min(e, 10)), r = Math.round(a * (0.8 + Math.max(0, Math.min(1, i)) * 0.4));
  return Math.max(t, Math.min($i, r));
}
const $t = "op-";
function dn(t) {
  let e = 0;
  for (const i of t) {
    if (!i.isHuman || !i.id.startsWith($t)) continue;
    const a = Number(i.id.slice($t.length));
    Number.isFinite(a) && a > e && (e = a);
  }
  return e;
}
function un(t, e) {
  const i = new Set(t.map((r) => r.id)), a = e.filter((r) => r && typeof r.content == "string" && r.content.trim() !== "" && !i.has($t + r.id)).map((r) => ({
    id: $t + r.id,
    content: r.content,
    sender: "ai",
    timestamp: r.created_at || (/* @__PURE__ */ new Date()).toISOString(),
    status: "sent",
    isHuman: !0,
    authorName: r.author_name || null
  }));
  return { messages: a.length > 0 ? [...t, ...a] : t, added: a.length };
}
const Bi = "pitaj_io_visitor_id", mn = "chat_direkt_visitor_id", hn = "pitaj_io_visitor_meta", fn = "chat_direkt_visitor_meta";
function ci(t) {
  return `pitaj_io_convs_v2_${t}`;
}
function gn() {
  try {
    let t = localStorage.getItem(Bi) || localStorage.getItem(mn);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(Bi, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const bn = [];
function vn(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function jn(t) {
  return t.filter((e) => !vn(e)).map((e) => {
    const i = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: i, messages: (e.messages || []).map((a) => {
      var r, o;
      return ((r = a.widget) == null ? void 0 : r.type) === "action_client" && ((o = a.widget.config) == null ? void 0 : o.client_action_state) === "pending" ? { ...a, widget: { ...a.widget, config: { ...a.widget.config, client_action_state: "unknown" } } } : a;
    }) };
  });
}
function Hi(t) {
  try {
    const e = localStorage.getItem(ci(t));
    if (e) {
      const i = JSON.parse(e);
      if (Array.isArray(i))
        return jn(i);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return bn;
}
function xn(t, e) {
  try {
    localStorage.setItem(ci(t), JSON.stringify(e));
  } catch (i) {
    console.warn("[Pitaj.io] Error saving to localStorage", i);
  }
}
function Ui(t) {
  var r, o, l, s, u, d, f, v, c, b, h, k;
  const e = t.previewDraft, i = (/* @__PURE__ */ new Date()).toISOString(), a = (e == null ? void 0 : e.initialStep) || "idle";
  if (a === "idle") {
    const z = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", C = (r = e == null ? void 0 : e.action) != null && r.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
    return [
      {
        id: "preview-conv-1",
        title: "Pregled akcije",
        preview: z,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-greeting",
            content: z,
            sender: "ai",
            timestamp: i,
            status: "sent",
            suggestedQuestions: C.length > 0 ? C : void 0
          }
        ]
      }
    ];
  }
  if (a === "form") {
    const z = (e == null ? void 0 : e.simulatedUserMessage) || ((o = e == null ? void 0 : e.action) == null ? void 0 : o.trigger_hint) || "Pokreni akciju", _ = !!((l = e == null ? void 0 : e.action) != null && l.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", D = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((u = e == null ? void 0 : e.action) == null ? void 0 : u.name) || "Pregled akcije",
        preview: _,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: z,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai",
            content: _,
            sender: "ai",
            timestamp: i,
            status: "sent",
            widget: D
          }
        ]
      }
    ];
  }
  if (a === "submitted") {
    const z = (e == null ? void 0 : e.simulatedUserMessage) || ((d = e == null ? void 0 : e.action) == null ? void 0 : d.trigger_hint) || "Pokreni akciju", C = ((f = e == null ? void 0 : e.form) == null ? void 0 : f.name) || ((v = e == null ? void 0 : e.action) == null ? void 0 : v.name) || "Forma", _ = ((c = e == null ? void 0 : e.form) == null ? void 0 : c.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: C,
        preview: _,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: z,
            sender: "user",
            timestamp: new Date(Date.now() - 4e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-form-sub",
            content: `Forma: ${C}
- Status: Uspješno poslano`,
            sender: "user",
            timestamp: new Date(Date.now() - 1e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-success",
            content: _,
            sender: "ai",
            timestamp: i,
            status: "sent"
          }
        ]
      }
    ];
  }
  if (a === "dismissed") {
    const z = (e == null ? void 0 : e.simulatedUserMessage) || ((b = e == null ? void 0 : e.action) == null ? void 0 : b.trigger_hint) || "Pokreni akciju", C = ((h = e == null ? void 0 : e.action) == null ? void 0 : h.dismiss_message) || "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((k = e == null ? void 0 : e.action) == null ? void 0 : k.name) || "Pregled akcije",
        preview: C,
        timestamp: i,
        unread: 0,
        status: "active",
        messages: [
          {
            id: "preview-msg-user",
            content: z,
            sender: "user",
            timestamp: new Date(Date.now() - 2e4).toISOString(),
            status: "sent"
          },
          {
            id: "preview-msg-ai-dismiss",
            content: C,
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
function wn(t, e) {
  var Ye, Qe, Xe, et, tt, it, at, nt, ot, rt, st, ct, pt, lt, dt, ut, w, x, S, G, he, ke, He;
  const i = !!(t.isPreview || t.previewDraft), [a, r] = K(t), [o, l] = K((e == null ? void 0 : e.startOpen) ?? !1), [s, u] = K(
    (e == null ? void 0 : e.initialScreen) ?? (i ? "conversation" : "new-conversation")
  ), [d, f] = K(
    () => i ? Ui(t) : Hi(t.companyId)
  ), v = oe([]);
  v.current = d;
  const [c, b] = K(() => {
    if (i) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const g = Hi(t.companyId);
      return g.length > 0 ? g[0].id : null;
    }
    return null;
  }), [h, k] = K(!1), [z, C] = K({}), _ = oe({});
  _.current = z;
  const D = oe(Date.now()), te = oe(Date.now()), [F, L] = K(0), [p, X] = K(null), [T, A] = K(null), [Z, P] = K(!1), [H, O] = K(
    () => {
      var g, y, N;
      return Pi(
        (g = t.content) == null ? void 0 : g.languageSource,
        ((y = t.content) == null ? void 0 : y.defaultLanguage) || "bs",
        ((N = t.content) == null ? void 0 : N.supportedLanguages) || ["bs"]
      );
    }
  );
  ee(() => {
    var y, N, V;
    const g = Pi(
      (y = a.content) == null ? void 0 : y.languageSource,
      ((N = a.content) == null ? void 0 : N.defaultLanguage) || "bs",
      ((V = a.content) == null ? void 0 : V.supportedLanguages) || ["bs"]
    );
    O(g);
  }, [
    (Ye = a.content) == null ? void 0 : Ye.languageSource,
    (Qe = a.content) == null ? void 0 : Qe.defaultLanguage,
    (Xe = a.content) == null ? void 0 : Xe.supportedLanguages
  ]);
  const re = oe(gn()), [Q, le] = K(() => {
    try {
      const g = localStorage.getItem(hn) || localStorage.getItem(fn);
      if (g) {
        const y = JSON.parse(g), N = {};
        return typeof y.name == "string" && (N.name = y.name), typeof y.email == "string" && (N.email = y.email), typeof y.phone == "string" && (N.phone = y.phone), N;
      }
    } catch (g) {
      console.warn("[Pitaj.io] Error reading visitor meta", g);
    }
    return {};
  }), I = oe(e == null ? void 0 : e.emitEvent);
  I.current = e == null ? void 0 : e.emitEvent;
  const M = oe(e == null ? void 0 : e.onActionTrigger);
  M.current = e == null ? void 0 : e.onActionTrigger;
  const B = oe(/* @__PURE__ */ new Map());
  ee(() => () => {
    B.current.forEach((g) => g()), B.current.clear();
  }, []);
  const E = pe((g, y) => {
    const N = Number.isFinite(g) ? Math.max(1, Math.floor(g)) : 60;
    X((V) => V === null ? N : Math.max(V, N)), A(y || `Previše zahtjeva. Molimo sačekajte ${N}s.`);
  }, []), ie = pe((g) => {
    if (g) {
      if (g === "WIDGET_CHAT_DISABLED") {
        r((y) => ({ ...y, chatAvailable: !1 })), A("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (g === "WIDGET_TRANSCRIBE_DISABLED") {
        r((y) => ({ ...y, transcribeAvailable: !1 })), A("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      g === "WIDGET_FORMS_DISABLED" && (r((y) => ({ ...y, formsAvailable: !1, formsEnabled: !1 })), A("Forme su trenutno privremeno nedostupne."));
    }
  }, []), be = pe((g, y = "Došlo je do greške pri obradi zahtjeva.") => {
    var V, m, J, ae;
    if (g instanceof sa) {
      E(g.retryAfterSeconds, g.message), (V = I.current) == null || V.call(I, "error_occurred", { code: g.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (g instanceof ri) {
      if (g.code === "WIDGET_SESSION_INVALID" || g.code === "WIDGET_SESSION_REQUIRED") {
        P(!0), A("Sesija je istekla. Pokrenite novu sesiju za nastavak razgovora.");
        return;
      }
      if (g.code === "COUNTRY_BLOCKED") {
        r((ue) => ({ ...ue, chatAvailable: !1 })), A(g.message || "Pristup nije dozvoljen u vašoj regiji."), (m = I.current) == null || m.call(I, "error_occurred", { status: g.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      ie(g.code), A(g.message || y), (J = I.current) == null || J.call(I, "error_occurred", { status: g.status, code: g.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let N = g instanceof Error ? g.message : y;
    !N || N === "Failed to fetch" || N.includes("NetworkError") ? N = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : N.includes("404") ? N = "Traženi razgovor ili podaci nisu pronađeni." : (N.includes("500") || N.includes("502") || N.includes("503")) && (N = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), A(N || y), (ae = I.current) == null || ae.call(I, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [E, ie]), ge = pe(() => {
    try {
      const g = ci(a.companyId), y = localStorage.getItem(g);
      y && localStorage.setItem(`${g}:archive:${Date.now()}`, y);
    } catch {
    }
    Ha(a.companyId, a.apiUrl), f([]), b(null), P(!1), A(null), u("new-conversation");
  }, [a.companyId, a.apiUrl]);
  ee(() => {
    a.isPreview || a.mockMode || a.companyId === "preview" || xn(a.companyId, d);
  }, [d, a.companyId, a.isPreview, a.mockMode]), ee(() => {
    if (a.isPreview || a.previewDraft) {
      const g = Ui(a);
      f(g), b("preview-conv-1"), u("conversation");
    }
  }, [
    a.isPreview,
    (et = a.previewDraft) == null ? void 0 : et.revision,
    (tt = a.previewDraft) == null ? void 0 : tt.initialStep,
    (at = (it = a.previewDraft) == null ? void 0 : it.action) == null ? void 0 : at.id,
    (ot = (nt = a.previewDraft) == null ? void 0 : nt.action) == null ? void 0 : ot.name,
    (st = (rt = a.previewDraft) == null ? void 0 : rt.action) == null ? void 0 : st.trigger_hint,
    (pt = (ct = a.previewDraft) == null ? void 0 : ct.action) == null ? void 0 : pt.dismiss_message,
    (dt = (lt = a.previewDraft) == null ? void 0 : lt.form) == null ? void 0 : dt.id,
    (w = (ut = a.previewDraft) == null ? void 0 : ut.form) == null ? void 0 : w.name,
    (S = (x = a.previewDraft) == null ? void 0 : x.form) == null ? void 0 : S.success_message,
    (he = (G = a.previewDraft) == null ? void 0 : G.widget) == null ? void 0 : he.id,
    (He = (ke = a.previewDraft) == null ? void 0 : ke.widget) == null ? void 0 : He.type
  ]), ee(() => {
    if (p === null || p <= 0) return;
    const g = setInterval(() => {
      X((y) => y && y > 1 ? y - 1 : null);
    }, 1e3);
    return () => clearInterval(g);
  }, [p]), ee(() => {
    if (!a.companyId || a.mockMode) return;
    let g = !0;
    return Ga(a.companyId, re.current, a.apiUrl).then((y) => {
      !g || !y || y.length === 0 || f((N) => {
        let V = !1;
        const m = N.map((J) => {
          const ae = y.find((ue) => String(ue.id) === J.id);
          return ae && ae.ticketNumber && J.ticketNumber !== ae.ticketNumber ? (V = !0, { ...J, ticketNumber: ae.ticketNumber }) : J;
        });
        return V ? m : N;
      });
    }).catch(() => {
    }), () => {
      g = !1;
    };
  }, [a.companyId, a.apiUrl, a.mockMode]);
  const xe = d.find((g) => g.id === c) || null, Me = d.reduce((g, y) => g + (y.unread || 0), 0), Ae = pe((g) => {
    l((y) => {
      var N;
      return y === g ? y : ((N = I.current) == null || N.call(I, g ? "widget_opened" : "widget_closed"), g);
    });
  }, []), Ie = pe((g) => {
    u((y) => {
      var N;
      return y === g ? y : ((N = I.current) == null || N.call(I, "screen_changed", { screen: g }), g);
    });
  }, []), _e = pe((g) => {
    var y;
    b(g.id), f((N) => N.some((m) => m.id === g.id) ? N.map((m) => m.id === g.id ? { ...m, ...g, unread: 0, status: g.status || "active" } : m) : [{ ...g, unread: 0, status: g.status || "active" }, ...N]), u("conversation"), (y = I.current) == null || y.call(I, "conversation_selected", { conversationId: g.id });
  }, []), Ne = pe(() => {
    var g;
    f(
      (y) => y.map((N) => N.id === c ? { ...N, status: "ended" } : N)
    ), b(null), u("new-conversation"), (g = I.current) == null || g.call(I, "conversation_ended", { conversationId: c });
  }, [c]), ve = pe((g) => {
    f((y) => y.filter((N) => N.id !== g)), b((y) => y === g ? null : y), c === g && u("new-conversation");
  }, [c]), Be = pe((g) => {
    var J;
    if (a.chatAvailable === !1) {
      A("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (p !== null) {
      A(`Previše zahtjeva. Molimo sačekajte ${p}s.`);
      return;
    }
    const y = "conv-" + Date.now(), N = (/* @__PURE__ */ new Date()).toISOString(), V = g ? g.length > 40 ? g.slice(0, 40) + "…" : g : "Novo ćaskanje", m = {
      id: y,
      title: V,
      preview: g || "Započeto novo ćaskanje",
      timestamp: N,
      unread: 0,
      messages: g ? [
        {
          id: "msg-" + Date.now(),
          content: g,
          sender: "user",
          timestamp: N,
          status: "sent"
        }
      ] : []
    };
    f((ae) => [m, ...ae]), b(y), u("conversation"), (J = I.current) == null || J.call(I, "conversation_started", { conversationId: y, initialMessage: g }), g && Pe(y, g, [m.messages[0]], !0);
  }, [a.apiUrl, a.chatAvailable, a.companyId, a.mockMode, p, Q]), Pe = async (g, y, N, V = !1) => {
    var ue;
    k(!0), A(null);
    const m = "ai-msg-" + Date.now(), J = {
      id: m,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    f(
      (W) => W.map((Y) => Y.id !== g ? Y : {
        ...Y,
        preview: y,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...Y.messages.filter((U) => U.id !== m), J]
      })
    ), (ue = I.current) == null || ue.call(I, "stream_started", { conversationId: g }), D.current = Date.now();
    let ae = !1;
    try {
      await Za({
        companyId: a.companyId,
        conversationId: g,
        visitorId: re.current,
        visitorLanguage: H,
        message: y,
        channel: a.layout === "backstage" || a.layout === "help_page" ? "help_page" : "website",
        forceNewConversation: V || g.startsWith("conv-"),
        apiUrl: a.apiUrl,
        mockMode: a.mockMode || a.isPreview,
        visitorName: Q.name,
        visitorEmail: Q.email,
        visitorPhone: Q.phone,
        actions: a.actions,
        previewDraft: a.previewDraft,
        callbacks: {
          onConversationId: (W) => {
            const Y = g, U = String(W);
            g = U, b(U), f(
              (ce) => ce.map(($) => $.id === Y || $.messages.some((ye) => ye.id === m) ? { ...$, id: U } : $)
            );
          },
          onAiPaused: () => {
            ae = !0, C((W) => ({ ...W, [g]: !0 }));
          },
          onTicketNumber: (W) => {
            const Y = W && String(W).trim() !== "" && String(W).trim() !== "undefined" && String(W).trim() !== "null" ? String(W).trim() : null;
            Y && f(
              (U) => U.map((ce) => ce.id === g || ce.messages.some((ye) => ye.id === m) ? { ...ce, ticketNumber: Y } : ce)
            );
          },
          onActionTrigger: (W) => {
            var ce, $, ye;
            let Y = W.widget || W.triggered_widget || (W.widget_id && a.widgets ? a.widgets.find((Se) => Se.id === W.widget_id) : null) || null, U;
            if ((ce = B.current.get(m)) == null || ce(), B.current.delete(m), (Y == null ? void 0 : Y.type) === "action_client" && (($ = Y.config) == null ? void 0 : $.wait_for_response) === !0 && !a.isPreview && !a.mockMode) {
              Y = { ...Y, config: { ...Y.config, client_action_state: "pending" } };
              const Se = crypto.randomUUID(), Ce = Xa(15e3, ($e) => {
                en(a.companyId, g, Number(W.id), Se, $e, a.apiUrl), B.current.get(m) === Ce.cancel && B.current.delete(m), f((Le) => Le.map((ze) => ({ ...ze, messages: ze.messages.map((Ue) => {
                  var Te;
                  return Ue.id === m && ((Te = Ue.widget) == null ? void 0 : Te.type) === "action_client" ? { ...Ue, widget: { ...Ue.widget, config: { ...Ue.widget.config, client_action_state: $e } } } : Ue;
                }) })));
              });
              B.current.set(m, Ce.cancel), U = Ce.complete;
            }
            Y && f(
              (Se) => Se.map((Ce) => Ce.id === g || Ce.messages.some((Le) => Le.id === m) ? {
                ...Ce,
                messages: Ce.messages.map(
                  (Le) => Le.id === m ? { ...Le, widget: Y } : Le
                )
              } : Ce)
            ), (ye = M.current) == null || ye.call(M, Y ? { ...W, widget: Y } : W, U);
          },
          onChunk: (W) => {
            f(
              (Y) => Y.map((U) => U.id === g || U.messages.some(($) => $.id === m) ? {
                ...U,
                messages: U.messages.map(
                  ($) => $.id === m ? { ...$, content: $.content + W } : $
                )
              } : U)
            );
          },
          onSources: (W) => {
            f(
              (Y) => Y.map((U) => U.id === g || U.messages.some(($) => $.id === m) ? {
                ...U,
                messages: U.messages.map(
                  ($) => $.id === m ? { ...$, sources: W } : $
                )
              } : U)
            );
          },
          onSuggestedQuestions: (W) => {
            f(
              (Y) => Y.map((U) => U.id === g || U.messages.some(($) => $.id === m) ? {
                ...U,
                messages: U.messages.map(
                  ($) => $.id === m ? { ...$, suggestedQuestions: W } : $
                )
              } : U)
            );
          },
          onDone: () => {
            var W;
            f(
              (Y) => Y.map((U) => {
                var $e, Le;
                if (!(U.id === g || U.messages.some((ze) => ze.id === m))) return U;
                const $ = U.messages.find((ze) => ze.id === m), ye = ($e = $ == null ? void 0 : $.widget) == null ? void 0 : $e.name, Se = (Le = $ == null ? void 0 : $.content) == null ? void 0 : Le.trim(), Ce = Se ? Se.slice(0, 70) : ye ? `[${ye}]` : U.preview;
                return {
                  ...U,
                  preview: Ce,
                  messages: ae && !($ != null && $.content) && !($ != null && $.widget) ? U.messages.filter((ze) => ze.id !== m) : U.messages.map(
                    (ze) => ze.id === m ? { ...ze, isStreaming: !1 } : ze
                  )
                };
              })
            ), k(!1), (W = I.current) == null || W.call(I, "stream_completed", { conversationId: g });
          },
          onError: (W) => {
            console.error("[Pitaj.io] Stream error:", W), A(W.message || "Došlo je do greške u komunikaciji."), k(!1);
          }
        }
      });
    } catch (W) {
      k(!1), be(W, "Greška pri slanju poruke.");
    }
  };
  ee(() => {
    const g = c, y = !!(g && /^\d+$/.test(g));
    if (i || a.mockMode || !o || !y || !g) return;
    let N = !1, V, m = 0;
    D.current = Date.now();
    const J = () => {
      if (N) return;
      const ue = Di({
        aiPaused: !!_.current[g],
        hidden: typeof document < "u" && document.hidden,
        idleMs: Date.now() - D.current
      });
      V = setTimeout(ae, ue === null ? on : ln(ue, m));
    }, ae = async () => {
      const ue = Date.now() - D.current;
      if (!(Di({ aiPaused: !!_.current[g], hidden: typeof document < "u" && document.hidden, idleMs: ue }) === null)) {
        const Y = v.current.find((ce) => ce.id === g), U = await tn({
          companyId: a.companyId,
          conversationId: g,
          after: Y ? dn(Y.messages) : 0,
          apiUrl: a.apiUrl
        });
        if (N) return;
        U ? (m = 0, C((ce) => !!ce[g] === U.aiPaused ? ce : { ...ce, [g]: U.aiPaused }), U.messages.length > 0 && (D.current = Date.now(), f((ce) => ce.map(($) => {
          if ($.id !== g) return $;
          const ye = un($.messages, U.messages);
          if (ye.added === 0) return $;
          const Se = ye.messages[ye.messages.length - 1];
          return { ...$, messages: ye.messages, preview: Se.content.slice(0, 70), timestamp: Se.timestamp };
        })))) : m = Math.min(m + 1, 10);
      }
      J();
    };
    return V = setTimeout(ae, 1e3), () => {
      N = !0, V && clearTimeout(V);
    };
  }, [c, o, i, a.mockMode, a.companyId, a.apiUrl, F]), ee(() => {
    const g = c, y = !!(g && /^\d+$/.test(g));
    if (i || a.mockMode || !o || !y || !g || typeof document > "u") return;
    let N = !1, V = !1, m;
    te.current = Date.now();
    const J = ($) => {
      an({ companyId: a.companyId, conversationId: g, state: $, apiUrl: a.apiUrl });
    }, ae = () => {
      V && (V = !1, J("leaving"));
    }, ue = () => {
      N || (pn({ hidden: document.hidden, idleMs: Date.now() - te.current }) ? (V = !0, J("active")) : ae(), m = setTimeout(ue, sn));
    }, W = () => {
      m && clearTimeout(m), ue();
    }, Y = () => {
      te.current = Date.now(), !V && !document.hidden && W();
    }, U = () => {
      document.hidden ? ae() : W();
    }, ce = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"];
    return ce.forEach(($) => document.addEventListener($, Y, { capture: !0, passive: !0 })), document.addEventListener("visibilitychange", U), window.addEventListener("pagehide", ae), ue(), () => {
      N = !0, m && clearTimeout(m), ce.forEach(($) => document.removeEventListener($, Y, { capture: !0 })), document.removeEventListener("visibilitychange", U), window.removeEventListener("pagehide", ae), ae();
    };
  }, [c, o, i, a.mockMode, a.companyId, a.apiUrl]);
  const j = pe((g) => {
    var m;
    const y = g.trim();
    if (!y || h || a.chatAvailable === !1 || p !== null) return;
    if (!c) {
      Be(y);
      return;
    }
    const V = {
      id: "usr-msg-" + Date.now(),
      content: y,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    f(
      (J) => J.map((ae) => ae.id !== c ? ae : {
        ...ae,
        preview: y,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...ae.messages, V]
      })
    ), D.current = Date.now(), L((J) => J + 1), (m = I.current) == null || m.call(I, "message_sent", { conversationId: c, content: y }), Pe(c, y, xe ? xe.messages : []);
  }, [c, h, Be, xe, a.chatAvailable, a.companyId, a.apiUrl, a.mockMode, p]), q = pe(
    async (g, y, N) => {
      var V;
      if (!a.mockMode)
        try {
          await Ja(
            a.companyId,
            g,
            y,
            a.apiUrl,
            a.mockMode
          );
        } catch (m) {
          console.error("[Pitaj.io] Failed to submit rating:", m);
          const J = (m == null ? void 0 : m.status) === 404 ? "Razgovor ili tiket više nije dostupan." : m != null && m.message && !m.message.includes("failed") && !m.message.includes("404") ? m.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(J);
        }
      f(
        (m) => m.map(
          (J) => J.id === g ? { ...J, satisfaction: y, ratingScore: N ?? J.ratingScore } : J
        )
      ), (V = I.current) == null || V.call(I, "rating_submitted", {
        conversationId: g,
        satisfaction: y,
        score: N
      });
    },
    [a.companyId, a.apiUrl, a.mockMode]
  ), ne = pe(
    (g, y, N = "user") => {
      const V = y.trim();
      if (!V) return;
      const m = (/* @__PURE__ */ new Date()).toISOString(), J = `conv-${Date.now()}`, ae = typeof g == "string" && g.trim().length > 0 ? g : J, ue = {
        id: `local-${N}-msg-${Date.now()}`,
        content: V,
        sender: N,
        timestamp: m,
        status: "sent"
      };
      f(
        (W) => W.some((Y) => Y.id === ae) ? W.map((Y) => Y.id !== ae ? Y : {
          ...Y,
          preview: V.length > 70 ? `${V.slice(0, 70)}…` : V,
          timestamp: m,
          messages: [...Y.messages, ue]
        }) : [
          {
            id: ae,
            title: "Forma",
            preview: V.length > 70 ? `${V.slice(0, 70)}…` : V,
            timestamp: m,
            unread: 0,
            messages: [ue],
            status: "active"
          },
          ...W
        ]
      ), b(ae), u("conversation");
    },
    []
  ), we = pe((g, y) => {
    y.workflow && f((N) => N.map((V) => V.id === g ? Qa(V, y) : V));
  }, []), je = (g) => {
    var y;
    return !!((y = g.messages) != null && y.some((N) => N.sender === "ai"));
  };
  return {
    config: a,
    setConfig: r,
    isOpen: o,
    setIsOpen: Ae,
    screen: s,
    setScreen: Ie,
    conversations: d,
    activeConversation: xe,
    activeConversationId: c,
    activeConversationHumanActive: !!(c && z[c]),
    visitorContact: Q,
    visitorId: re.current,
    activeConversationHasReply: xe ? je(xe) : !1,
    totalUnread: Me,
    isStreaming: h,
    rateLimitTimer: p,
    errorBanner: T,
    sessionInvalid: Z,
    resetSession: ge,
    setErrorBanner: A,
    activeLanguage: H,
    setActiveLanguage: O,
    selectConversation: _e,
    startNewConversation: Be,
    endConversation: Ne,
    deleteConversation: ve,
    sendUserMessage: j,
    submitSatisfaction: q,
    appendConversationMessage: ne,
    appendWorkflowWidget: we,
    handleApiError: be
  };
}
let qt = null, da = null;
function Ri(t, e) {
  e === null && t !== null && qt !== null && qt !== t || (qt = e ? t : null, da = e);
}
function Ve() {
  return da;
}
function Ut(t, e) {
  let i = null;
  const a = () => i || (i = t().then((r) => {
    const o = e ? e(r) : r.default;
    if (!o)
      throw new Error("Lazy component not found");
    return o;
  }));
  return function(o) {
    const [l, s] = K(null);
    return ee(() => {
      let u = !0;
      return a().then((d) => {
        u && s(() => d);
      }).catch((d) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", d);
      }), () => {
        u = !1;
      };
    }, []), l ? /* @__PURE__ */ n(l, { ...o }) : /* @__PURE__ */ n("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ n("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ n("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ n("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function kn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ n("path", { d: "M5 3v4" }),
    /* @__PURE__ */ n("path", { d: "M19 17v4" }),
    /* @__PURE__ */ n("path", { d: "M3 5h4" }),
    /* @__PURE__ */ n("path", { d: "M17 19h4" })
  ] });
}
function ua({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ n("path", { d: "M12 19V5" })
  ] });
}
function yn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ n("path", { d: "M19 12H5" })
  ] });
}
function Oe({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ n("path", { d: "m6 6 12 12" })
  ] });
}
function _n({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function Ao({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M12 5v14" }),
    /* @__PURE__ */ n("path", { d: "M5 12h14" })
  ] });
}
function Ct({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "M20 6 9 17l-5-5" }) });
}
function Sn({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function Mn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ n("path", { d: "M12 8v6" }),
    /* @__PURE__ */ n("path", { d: "M9 11h6" })
  ] });
}
function ma({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function Nn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ n("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function zn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function Io({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ n("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] });
}
function An({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ n("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ n("path", { d: "M12 7v5l4 2" })
  ] });
}
function In({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ n("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function Cn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ n("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function ha({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ n("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ n("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function Ln({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ n("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function fa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ n("path", { d: "M10 9H8" }),
    /* @__PURE__ */ n("path", { d: "M16 13H8" }),
    /* @__PURE__ */ n("path", { d: "M16 17H8" })
  ] });
}
function Tn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M7 10v12" }),
    /* @__PURE__ */ n("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function Pn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M17 14V2" }),
    /* @__PURE__ */ n("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function ga({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function Co({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M8 2v4" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4" }),
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M3 10h18" })
  ] });
}
function Lo({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M12 16V4" }),
    /* @__PURE__ */ n("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ n("path", { d: "M20 16v4H4v-4" })
  ] });
}
function To({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "m15 18-6-6 6-6" }) });
}
function Po({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "m9 18 6-6-6-6" }) });
}
function Eo({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "m6 9 6 6 6-6" }) });
}
function $o({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("path", { d: "M5 12h14" }) });
}
function En({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M3 6h18" }),
    /* @__PURE__ */ n("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ n("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ n("path", { d: "M10 11v6" }),
    /* @__PURE__ */ n("path", { d: "M14 11v6" })
  ] });
}
function Do({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ n("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ n("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ n("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function Bo({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M10 2v2" }),
    /* @__PURE__ */ n("path", { d: "M14 2v2" }),
    /* @__PURE__ */ n("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ n("path", { d: "M6 2v2" })
  ] });
}
function Ho({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ n("path", { d: "M15 2v19" }),
    /* @__PURE__ */ n("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ n("path", { d: "M8 2v19" })
  ] });
}
function Uo({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ n("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ n("path", { d: "M9 17h6" }),
    /* @__PURE__ */ n("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function Ro({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ n("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ n("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function Fo({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "m10 20-1.25-2.5L6 18" }),
    /* @__PURE__ */ n("path", { d: "M10 4 8.75 6.5 6 6" }),
    /* @__PURE__ */ n("path", { d: "m14 20 1.25-2.5L18 18" }),
    /* @__PURE__ */ n("path", { d: "m14 4 1.25 2.5L18 6" }),
    /* @__PURE__ */ n("path", { d: "m17 21-3-6h-4l-3 6" }),
    /* @__PURE__ */ n("path", { d: "m17 3-3 6h-4L7 3" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20" }),
    /* @__PURE__ */ n("path", { d: "m20 10-2.5 1.25L18 14" }),
    /* @__PURE__ */ n("path", { d: "m4 10 2.5 1.25L6 14" }),
    /* @__PURE__ */ n("path", { d: "m20 14-2.5-1.25L18 10" }),
    /* @__PURE__ */ n("path", { d: "m4 14 2.5-1.25L6 10" })
  ] });
}
function Oo({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "m6.5 6.5 11 11" }),
    /* @__PURE__ */ n("path", { d: "m21 21-1-1" }),
    /* @__PURE__ */ n("path", { d: "m3 3 1 1" }),
    /* @__PURE__ */ n("path", { d: "m18 22 4-4" }),
    /* @__PURE__ */ n("path", { d: "m2 6 4-4" }),
    /* @__PURE__ */ n("path", { d: "m3 10 7-7" }),
    /* @__PURE__ */ n("path", { d: "m14 21 7-7" })
  ] });
}
function Vo({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ n("path", { d: "M7 7h.01" })
  ] });
}
function Ko({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ n("path", { d: "M3 6h18" }),
    /* @__PURE__ */ n("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function Yo({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ n("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function Wo({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ n("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ n("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function qo({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M12 2v2" }),
    /* @__PURE__ */ n("path", { d: "M12 20v2" }),
    /* @__PURE__ */ n("path", { d: "m4.93 4.93 1.41 1.41" }),
    /* @__PURE__ */ n("path", { d: "m17.66 17.66 1.41 1.41" }),
    /* @__PURE__ */ n("path", { d: "M2 12h2" }),
    /* @__PURE__ */ n("path", { d: "M20 12h2" }),
    /* @__PURE__ */ n("path", { d: "m6.34 17.66-1.41 1.41" }),
    /* @__PURE__ */ n("path", { d: "m19.07 4.93-1.41 1.41" })
  ] });
}
function Zo({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ n("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function Go({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function Jo({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ n("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function Qo({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ n("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function Rt({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ n(
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
        /* @__PURE__ */ n("rect", { width: "28", height: "28", rx: "2.5", fill: "#09090b" }),
        /* @__PURE__ */ n(
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
function $n({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `pitaj-ai-spinner ${e}`.trim(),
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ n("path", { className: "pitaj-question-line", d: "M10 10.7a6 6 0 1 1 9 5.2c-2.1 1.2-3 2.2-3 4.1", stroke: "currentColor", strokeWidth: "2.8", strokeLinecap: "round" }),
        /* @__PURE__ */ n("circle", { className: "pitaj-question-dot", cx: "16", cy: "25", r: "1.7", fill: "currentColor" }),
        /* @__PURE__ */ n("circle", { className: "pitaj-question-spark pitaj-question-spark-one", cx: "5.5", cy: "18", r: "1", fill: "currentColor" }),
        /* @__PURE__ */ n("circle", { className: "pitaj-question-spark pitaj-question-spark-two", cx: "26", cy: "18", r: "1.3", fill: "currentColor" })
      ]
    }
  );
}
function Xo({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4" }),
    /* @__PURE__ */ n("path", { d: "M12 8h.01" })
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
function R(t, e = "bs") {
  var r, o;
  const i = (e || "bs").toLowerCase().split(/[-_]/)[0], a = mt[i] || mt.bs || mt.en;
  return a && typeof a[t] == "string" ? a[t] : ((r = mt.bs) == null ? void 0 : r[t]) || ((o = mt.en) == null ? void 0 : o[t]) || t;
}
function Dn({
  screen: t,
  activeConversation: e,
  config: i,
  language: a = "bs",
  onBack: r,
  onClose: o,
  onNewConversation: l,
  onEndConversation: s,
  onDeleteConversation: u,
  onViewHistory: d,
  onViewTickets: f
}) {
  var te;
  const [v, c] = K(!1), b = oe(null), h = t === "conversation" && e, C = h || t === "history" || t === "tickets", _ = i.title || i.name || "Pitaj.io Asistent";
  ee(() => {
    var p;
    const F = (X) => {
      var A, Z;
      const T = ((Z = (A = X.composedPath) == null ? void 0 : A.call(X)) == null ? void 0 : Z[0]) || X.target;
      b.current && T && !b.current.contains(T) && c(!1);
    };
    document.addEventListener("mousedown", F);
    const L = (p = b.current) == null ? void 0 : p.getRootNode();
    return L instanceof ShadowRoot && L.addEventListener("mousedown", F), () => {
      document.removeEventListener("mousedown", F), L instanceof ShadowRoot && L.removeEventListener("mousedown", F);
    };
  }, []), ee(() => {
    c(!1);
  }, [t]);
  const D = (F) => {
    c(!1), F == null || F();
  };
  return /* @__PURE__ */ n("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ n("div", { className: "pitaj-header-info", children: [
      C && /* @__PURE__ */ n(
        "button",
        {
          onClick: r,
          className: "pitaj-icon-btn",
          "aria-label": R("back", a),
          title: R("back", a),
          children: /* @__PURE__ */ n(yn, { size: 18 })
        }
      ),
      /* @__PURE__ */ n("div", { className: `pitaj-avatar ${((te = i.content) == null ? void 0 : te.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: i.logo || i.avatar ? /* @__PURE__ */ n("img", { src: i.logo || i.avatar, alt: i.name || "AI" }) : /* @__PURE__ */ n(Rt, { size: 18 }) }),
      /* @__PURE__ */ n("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ n("div", { className: "pitaj-header-title", children: _ }),
        h && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ n("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ n("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ n("div", { className: "pitaj-header-menu", ref: b, children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: () => c((F) => !F),
            className: `pitaj-icon-btn ${v ? "is-active" : ""}`,
            "aria-label": R("menu", a),
            "aria-expanded": v,
            title: R("menu", a),
            children: /* @__PURE__ */ n(Sn, { size: 18 })
          }
        ),
        v && /* @__PURE__ */ n("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ n(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => D(l),
              children: [
                /* @__PURE__ */ n(Mn, { size: 15, className: "pitaj-menu-item-icon" }),
                R("newConversation", a)
              ]
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !h,
              onClick: () => D(s),
              children: [
                /* @__PURE__ */ n(zn, { size: 15, className: "pitaj-menu-item-icon" }),
                R("endConversation", a)
              ]
            }
          ),
          u && /* @__PURE__ */ n(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !h,
              onClick: () => D(u),
              children: [
                /* @__PURE__ */ n(En, { size: 15, className: "pitaj-menu-item-icon" }),
                R("deleteConversation", a)
              ]
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => D(d),
              children: [
                /* @__PURE__ */ n(An, { size: 15, className: "pitaj-menu-item-icon" }),
                R("viewHistory", a)
              ]
            }
          ),
          /* @__PURE__ */ n("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => D(f), children: [
            /* @__PURE__ */ n(Cn, { size: 15, className: "pitaj-menu-item-icon" }),
            R("viewTickets", a)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": R("close", a),
          title: R("close", a),
          children: /* @__PURE__ */ n(Oe, { size: 18 })
        }
      )
    ] })
  ] });
}
function ba(t, e) {
  var a, r;
  if (!Number.isSafeInteger(t == null ? void 0 : t.run_id) || t.run_id < 1 || e !== void 0 && t.run_id !== e || !["waiting_display", "waiting_input", "completed", "failed", "expired", "cancelled"].includes(t.status))
    throw new Error("Neispravan odgovor procedure.");
  if (t.current_step && (!Number.isSafeInteger(t.current_step.widget_id) || t.current_step.widget_id < 1 || !/^[a-zA-Z0-9_-]{1,80}$/.test(t.current_step.node_id) || !["show_widget", "wait_submission"].includes(t.current_step.type) || t.current_step.display_node_id !== null && (typeof t.current_step.display_node_id != "string" || !/^[a-zA-Z0-9_-]{1,80}$/.test(t.current_step.display_node_id)) || t.current_step.form_revision != null && (typeof t.current_step.form_revision != "string" || !/^[a-f0-9]{64}$/.test(t.current_step.form_revision)) || t.current_step.function_revision != null && (typeof t.current_step.function_revision != "string" || !/^[a-f0-9]{64}$/.test(t.current_step.function_revision))))
    throw new Error("Neispravan korak procedure.");
  const i = (a = t.current_step) == null ? void 0 : a.widget;
  if (i != null && (typeof i != "object" || Array.isArray(i) || i.id !== ((r = t.current_step) == null ? void 0 : r.widget_id) || typeof i.name != "string" || typeof i.type != "string" || !i.config || typeof i.config != "object" || Array.isArray(i.config)))
    throw new Error("Neispravna konfiguracija widgeta procedure.");
  return t;
}
async function Bn(t, e, i, a) {
  if (!/^[1-9]\d*$/.test(e)) throw new Error("Neispravan identifikator razgovora.");
  const r = (i || window.location.origin).replace(/\/$/, ""), o = await Re(t, i), l = await fetch(`${r}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/executable-run`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${o}` },
    cache: "no-store",
    signal: a
  });
  l.ok || await Ht(l, "Nije moguće provjeriti proceduru.");
  const s = await l.json();
  return s.run === null ? null : ba(s.run);
}
async function er(t, e, i, a) {
  if (!Number.isSafeInteger(e) || e < 1) throw new Error("Neispravan identifikator procedure.");
  const r = (i || window.location.origin).replace(/\/$/, ""), o = await Re(t, i), l = `${r}/api/widget/${encodeURIComponent(t)}/v2/executable-runs/${e}`, s = await fetch(a ? `${l}/display-ack` : l, {
    method: a ? "POST" : "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${o}`, ...a ? { "Content-Type": "application/json" } : {} },
    ...a ? { body: JSON.stringify({ node_id: a }) } : {}
  });
  s.ok || await Ht(s, "Status procedure nije dostupan.");
  const u = await s.json();
  return ba(u, e);
}
function Hn({ content: t }) {
  if (!t)
    return /* @__PURE__ */ n("span", {});
  const e = t.split(`
`), i = [];
  let a = !1, r = [];
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    if (l.startsWith("```")) {
      a ? (i.push(
        /* @__PURE__ */ n("pre", { children: /* @__PURE__ */ n("code", { children: r.join(`
`) }) }, `code-${o}`)
      ), r = [], a = !1) : a = !0;
      continue;
    }
    if (a) {
      r.push(l);
      continue;
    }
    if (l.trim().startsWith("- ") || l.trim().startsWith("* ")) {
      const u = l.trim().slice(2);
      i.push(
        /* @__PURE__ */ n("ul", { children: /* @__PURE__ */ n("li", { children: Zt(u) }) }, `ul-${o}`)
      );
      continue;
    }
    const s = l.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      i.push(
        /* @__PURE__ */ n("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ n("li", { children: Zt(s[2]) }) }, `ol-${o}`)
      );
      continue;
    }
    if (!l.trim()) {
      i.push(/* @__PURE__ */ n("div", { style: { height: "6px" } }, `sp-${o}`));
      continue;
    }
    i.push(/* @__PURE__ */ n("p", { children: Zt(l) }, `p-${o}`));
  }
  return a && r.length > 0 && i.push(
    /* @__PURE__ */ n("pre", { children: /* @__PURE__ */ n("code", { children: r.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ n("div", { className: "pitaj-markdown", children: i });
}
function Zt(t) {
  const e = [];
  let i = 0;
  const a = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let r;
  for (; (r = a.exec(t)) !== null; ) {
    r.index > i && e.push(...Fi(t.slice(i, r.index)));
    const o = r[0];
    if (o.startsWith("`") && o.endsWith("`"))
      e.push(
        /* @__PURE__ */ n("code", { children: o.slice(1, -1) }, `c-${r.index}`)
      );
    else if (o.startsWith("**") && o.endsWith("**"))
      e.push(
        /* @__PURE__ */ n("strong", { children: o.slice(2, -2) }, `b-${r.index}`)
      );
    else if (o.startsWith("*") && o.endsWith("*"))
      e.push(
        /* @__PURE__ */ n("em", { children: o.slice(1, -1) }, `i-${r.index}`)
      );
    else if (o.startsWith("[") && o.includes("](")) {
      const l = o.slice(1, o.indexOf("](")), s = o.slice(o.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ n("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: l }, `a-${r.index}`)
      );
    }
    i = r.index + o.length;
  }
  return i < t.length && e.push(...Fi(t.slice(i))), e;
}
const Un = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, Rn = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, Fn = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), On = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Fi(t) {
  const e = [];
  let i;
  for (; (i = Un.exec(t)) !== null; ) {
    const o = i[0].replace(/[.,;:!?]+$/, "");
    o && e.push({
      start: i.index,
      end: i.index + o.length,
      href: o.startsWith("www.") ? `https://${o}` : o,
      external: !0
    });
  }
  for (; (i = Rn.exec(t)) !== null; )
    e.push({
      start: i.index,
      end: i.index + i[0].length,
      href: `mailto:${i[0]}`,
      external: !1
    });
  for (; (i = Fn.exec(t)) !== null; ) {
    const o = i[0];
    On.test(o) || e.push({
      start: i.index,
      end: i.index + o.length,
      href: `tel:${o.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((o, l) => o.start - l.start);
  const a = [];
  let r = 0;
  for (const o of e)
    o.start < r || (o.start > r && a.push(t.slice(r, o.start)), a.push(
      /* @__PURE__ */ n(
        "a",
        {
          href: o.href,
          ...o.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: t.slice(o.start, o.end)
        },
        `l-${o.start}`
      )
    ), r = o.end);
  return r < t.length && a.push(t.slice(r)), a;
}
function va({
  rows: t,
  fallbackQuestions: e,
  onSelect: i,
  buttonClassName: a,
  containerClassName: r,
  revealDelayMs: o = 0,
  staggerMs: l = 140
}) {
  const s = Ze(() => Array.isArray(t) && t.length > 0 ? t.map((b) => ({
    text: b.text.trim(),
    children: (b.children ?? []).map((h) => h.trim()).filter(Boolean)
  })).filter((b) => b.text !== "") : (e ?? []).map((b) => b.trim()).filter(Boolean).map((b) => ({ text: b, children: [] })), [e, t]), [u, d] = K(null), [f, v] = K(s.length);
  if (ee(() => {
    d(null);
  }, [s]), ee(() => {
    if (u) {
      v(s.length);
      return;
    }
    if (o <= 0) {
      v(s.length);
      return;
    }
    v(0);
    const b = window.setTimeout(() => {
      v(1);
      const h = window.setInterval(() => {
        v((k) => k >= s.length ? (window.clearInterval(h), k) : k + 1);
      }, Math.max(60, l));
    }, o);
    return () => {
      window.clearTimeout(b);
    };
  }, [u, s.length, o, l]), s.length === 0)
    return null;
  const c = s.find((b) => b.text === u && b.children.length > 0) ?? null;
  return c ? /* @__PURE__ */ n("div", { className: r, children: [
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        onClick: () => d(null),
        className: a,
        children: "Nazad"
      }
    ),
    c.children.map((b, h) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        onClick: () => i(b),
        className: a,
        children: b
      },
      `${c.text}-${h}`
    ))
  ] }) : /* @__PURE__ */ n("div", { className: r, children: s.slice(0, f).map((b, h) => /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      onClick: () => b.children.length > 0 ? d(b.text) : i(b.text),
      className: `${a} pitaj-suggestion-enter`,
      children: b.text
    },
    `${b.text}-${h}`
  )) });
}
const Vn = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Kn = [".txt", ".md", ".csv", ".json", ".xml"];
function Yn(t) {
  if (Vn.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Kn.some((i) => e.endsWith(i));
}
async function ja(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (i) => {
      const a = i.type.startsWith("image/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(i.name);
      let r = null;
      if (a && typeof URL < "u")
        try {
          r = URL.createObjectURL(i);
        } catch {
          r = null;
        }
      const o = Yn(i) ? (await i.text()).slice(0, 4e3) : null;
      return {
        id: `${i.name}-${i.lastModified}-${i.size}`,
        name: i.name,
        textContent: o,
        previewUrl: r,
        isImage: a
      };
    })
  );
}
function xa(t) {
  return t.length === 0 ? "" : `

${t.map((i) => i.textContent && i.textContent.trim() !== "" ? `[Prilog: ${i.name}]
${i.textContent.trim()}` : `[Prilog: ${i.name}]`).join(`

`)}`;
}
async function Wn(t) {
  const { widgetId: e, audio: i, apiUrl: a } = t, r = (a || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), o = new FormData();
  o.append("audio", i, "dictation.webm");
  const l = await fetch(`${r}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: o,
    headers: {
      Accept: "application/json"
    }
  });
  if (!l.ok) {
    const d = await l.json().catch(() => null), v = (() => {
      if (l.status !== 422 || !(d != null && d.errors) || typeof d.errors != "object")
        return null;
      for (const c of Object.values(d.errors))
        if (Array.isArray(c)) {
          for (const b of c)
            if (typeof b == "string" && b.trim() !== "")
              return b;
        }
      return null;
    })();
    ca(
      l.status,
      d,
      typeof v == "string" && v || `Transkripcija nije uspjela (${l.status})`,
      l.headers.get("Retry-After")
    );
  }
  const s = await l.json(), u = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!u)
    throw new Error("Transkripcija nije vratila tekst.");
  return u;
}
function wa({ widgetId: t, apiUrl: e, onTranscript: i, onError: a }) {
  const o = oe(null), l = oe(null), s = oe([]), u = oe(!0), d = oe(null), f = oe(null), v = oe(null), c = oe(null), b = oe(Array.from({ length: 42 }, () => 0.06)), [h, k] = K(!1), [z, C] = K(!1), [_, D] = K(
    () => Array.from({ length: 42 }, () => 0.06)
  ), te = Ze(() => {
    var P;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((P = navigator.mediaDevices) != null && P.getUserMedia);
  }, [t]), F = pe(() => {
    l.current && (l.current.getTracks().forEach((P) => P.stop()), l.current = null);
  }, []), L = pe(() => {
    var P;
    d.current !== null && (window.cancelAnimationFrame(d.current), d.current = null), (P = c.current) == null || P.disconnect(), c.current = null, v.current = null, f.current && (f.current.close(), f.current = null);
  }, []), p = pe(() => {
    const P = Array.from({ length: 42 }, () => 0.06);
    b.current = P, D(P);
  }, []), X = pe((P) => {
    const H = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!H)
      return;
    const O = new H(), re = O.createAnalyser();
    re.fftSize = 2048, re.smoothingTimeConstant = 0.78;
    const Q = O.createMediaStreamSource(P);
    Q.connect(re), f.current = O, v.current = re, c.current = Q;
    const le = new Uint8Array(re.fftSize), I = () => {
      const M = v.current;
      if (!M) return;
      M.getByteTimeDomainData(le);
      let B = 0;
      for (let ge = 0; ge < le.length; ge += 1) {
        const xe = (le[ge] - 128) / 128;
        B += xe * xe;
      }
      const E = Math.sqrt(B / le.length), ie = Math.max(0.04, Math.min(1, E * 5.2)), be = b.current.slice(1);
      be.push(ie), b.current = be, D(be), d.current = window.requestAnimationFrame(I);
    };
    d.current = window.requestAnimationFrame(I);
  }, []), T = pe(async () => {
    if (!(!te || z || o.current || h))
      try {
        const H = await navigator.mediaDevices.getUserMedia({ audio: !0 }), O = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], Q = typeof MediaRecorder.isTypeSupported == "function" ? O.find((I) => MediaRecorder.isTypeSupported(I)) : void 0, le = Q ? new MediaRecorder(H, { mimeType: Q }) : new MediaRecorder(H);
        s.current = [], u.current = !0, l.current = H, o.current = le, p(), X(H), le.ondataavailable = (I) => {
          I.data.size > 0 && s.current.push(I.data);
        }, le.onstop = async () => {
          k(!1);
          const I = new Blob(s.current, { type: le.mimeType || "audio/webm" });
          if (s.current = [], o.current = null, F(), L(), I.size === 0) {
            p();
            return;
          }
          if (!u.current) {
            p();
            return;
          }
          C(!0);
          try {
            const M = await Wn({
              widgetId: t,
              apiUrl: e,
              audio: I
            });
            i(M);
          } catch (M) {
            console.error("[Pitaj.io] Dictation transcription failed", M), a == null || a(M);
          } finally {
            C(!1), p();
          }
        }, le.onerror = () => {
          k(!1), o.current = null, F(), L(), p();
        }, le.start(), k(!0);
      } catch (H) {
        k(!1), F(), L(), p(), console.error("[Pitaj.io] Dictation microphone access failed", H);
      }
  }, [e, h, z, te, a, i, p, X, F, L, t]), A = pe(() => {
    const P = o.current;
    !P || !h || z || (u.current = !0, P.stop(), k(!1));
  }, [h, z]), Z = pe(() => {
    const P = o.current;
    !P || !h || (u.current = !1, P.stop(), k(!1));
  }, [h]);
  return ee(() => () => {
    const P = o.current;
    P && P.state !== "inactive" && P.stop(), F(), L();
  }, [F, L]), {
    isSupported: te,
    isListening: h,
    isProcessing: z,
    waveformLevels: _,
    start: T,
    stopAndTranscribe: A,
    cancel: Z
  };
}
const qn = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Oi() {
  const [t, e] = K(0);
  return ee(() => {
    const i = setTimeout(() => e(1), 1600), a = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(i), clearTimeout(a);
    };
  }, []), /* @__PURE__ */ n("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ n($n, { size: 20, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ n("span", { className: "pitaj-thinking-text", children: qn[t] }, t)
  ] });
}
const Zn = Ut(
  () => import("./InlineWidgetRenderer-ClZTGtgh.js"),
  (t) => t.InlineWidgetRenderer
);
function Gn(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Jn(t) {
  const e = t.split(`
`).map((o) => o.trim()).filter((o) => o.length > 0);
  if (e.length < 2) return null;
  let i = "Forma";
  const a = e[0];
  if (/^forma:\s*/i.test(a))
    i = a.replace(/^forma:\s*/i, "").trim() || "Forma";
  else if (/^form:\s*/i.test(a))
    i = a.replace(/^form:\s*/i, "").trim() || "Form";
  else if (/^kontakt\s+upit:\s*/i.test(a))
    i = "Kontakt upit";
  else if (/^rezervacija/i.test(a))
    i = a.replace(/:\s*$/, "").trim();
  else if (/^prijava\s+za\s+demo/i.test(a))
    i = "Prijava za demo";
  else
    return null;
  const r = e.slice(1).map((o) => {
    if (!o.startsWith("- ") && !o.startsWith("* ")) return null;
    const l = o.slice(2), s = l.indexOf(":");
    if (s < 1) return null;
    const u = l.slice(0, s).trim(), d = l.slice(s + 1).trim();
    return !u || !d ? null : { label: u, value: d };
  }).filter((o) => !!o);
  return r.length < 1 ? null : { title: i, entries: r };
}
function Qn({
  conversation: t,
  config: e,
  language: i = "bs",
  humanActive: a = !1,
  onProductEvent: r,
  isStreaming: o,
  rateLimitCountdown: l,
  errorBanner: s,
  sessionInvalid: u,
  onResetSession: d,
  onSendMessage: f,
  onApiError: v,
  onWorkflowWidget: c,
  onSubmitSatisfaction: b
}) {
  var ve, Be, Pe;
  const h = (j) => {
    if (!j.current_step || !["waiting_display", "waiting_input"].includes(j.status)) return;
    const ne = Ei(j, e.widgets || []);
    if (!ne) {
      v == null || v(new Error("Sljedeći widget procedure nije dostupan."));
      return;
    }
    c == null || c(ne);
  }, [k, z] = K(""), [C, _] = K(!1), [D, te] = K(0), F = oe(c);
  F.current = c;
  const L = oe(v);
  L.current = v, ee(() => {
    if (o || e.isPreview || e.previewDraft || e.mockMode || t.status === "ended" || !/^[1-9]\d*$/.test(t.id)) return;
    const j = new AbortController();
    return _(!1), Bn(e.companyId, t.id, e.apiUrl, j.signal).then((q) => {
      var we;
      if (j.signal.aborted || !q) return;
      const ne = Ei(q, e.widgets || []);
      if (!ne) {
        _(!0);
        return;
      }
      (we = F.current) == null || we.call(F, ne);
    }).catch((q) => {
      var ne;
      j.signal.aborted || (q instanceof ri && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED"].includes(q.code || "") && ((ne = L.current) == null || ne.call(L, q)), _(!0));
    }), () => j.abort();
  }, [e.companyId, e.apiUrl, e.isPreview, e.previewDraft, e.mockMode, e.widgets, t.id, t.status, D, o]);
  const [p, X] = K(!1), [T, A] = K(null), [Z, P] = K([]), H = oe(null), O = oe(null), re = oe(null), Q = e.content || {}, le = e.chatAvailable === !1, I = e.transcribeAvailable === !1, M = o || l !== null || le, B = wa({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: pe((j) => {
      z((q) => q ? `${q} ${j}` : j);
    }, []),
    onError: pe((j) => {
      v == null || v(j, "Greška pri transkripciji.");
    }, [v])
  });
  ee(() => {
    const j = H.current;
    j && (j.scrollTop = j.scrollHeight);
  }, [t.messages, o]), ee(() => {
    const j = O.current;
    j && (j.style.height = "auto", j.style.height = `${Math.min(j.scrollHeight, 96)}px`);
  }, [k]), ee(() => {
    X(!1);
  }, [Q.dismissibleNotice]);
  const E = (j) => {
    P((q) => {
      const ne = q.find((we) => we.id === j);
      if (ne != null && ne.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ne.previewUrl);
        } catch {
        }
      return q.filter((we) => we.id !== j);
    });
  }, ie = (j) => {
    const q = (j ?? k).trim();
    if (!q && Z.length === 0 || M) return;
    const ne = `${q}${xa(Z)}`.trim();
    f(ne), Z.forEach((we) => {
      if (we.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(we.previewUrl);
        } catch {
        }
    }), P([]), j || (z(""), O.current && (O.current.style.height = "auto"));
  }, be = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), ie());
  }, ge = Q.messagePlaceholder || e.placeholder || R("placeholder", i), xe = ((ve = Q.dismissibleNotice) == null ? void 0 : ve.trim()) || "", Me = ((Be = Q.footerText) == null ? void 0 : Be.trim()) || "", Ae = Q.showSuggestedMessages === !1 || Q.keepShowingSuggestedMessages !== !0 ? [] : Q.suggestedMessageRows || [], Ie = ((Pe = [...t.messages].reverse().find((j) => j.sender === "ai")) == null ? void 0 : Pe.id) ?? null, _e = B.isListening, Ne = async (j, q) => {
    navigator.clipboard && (await navigator.clipboard.writeText(q), A(j), window.setTimeout(() => {
      A((ne) => ne === j ? null : ne);
    }, 1600));
  };
  return /* @__PURE__ */ n("div", { className: "pitaj-chat-screen", children: [
    /* @__PURE__ */ n("div", { ref: H, className: "pitaj-messages-container", children: [
      t.ticketNumber && t.ticketNumber !== "undefined" && t.ticketNumber !== "null" && /* @__PURE__ */ n("div", { className: "pitaj-conversation-ticket-chip-wrap", children: /* @__PURE__ */ n("div", { className: "pitaj-conversation-ticket-chip", children: [
        /* @__PURE__ */ n("span", { className: "pitaj-conversation-ticket-label", children: R("ticketNumber", i) }),
        /* @__PURE__ */ n("strong", { className: "pitaj-conversation-ticket-val", children: t.ticketNumber })
      ] }) }),
      /* @__PURE__ */ n("div", { className: "pitaj-date-divider", children: [
        /* @__PURE__ */ n("div", { className: "pitaj-date-line" }),
        /* @__PURE__ */ n("span", { className: "pitaj-date-label", children: R("today", i) }),
        /* @__PURE__ */ n("div", { className: "pitaj-date-line" })
      ] }),
      a && /* @__PURE__ */ n("div", { className: "pitaj-human-chip", role: "status", children: R("operatorJoined", i) }),
      t.messages.map((j) => {
        const q = j.sender === "user", ne = q ? Jn(j.content) : null, we = !q && j.isStreaming && !j.content && !j.widget;
        return /* @__PURE__ */ n(
          "div",
          {
            className: `pitaj-msg-row ${q ? "user" : "ai"}${j.widget ? " has-widget" : ""}${we ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ n("div", { className: "pitaj-msg-body", children: [
              q ? /* @__PURE__ */ n("div", { className: `pitaj-msg-bubble ${ne ? "is-form-submission" : ""}`, children: ne ? /* @__PURE__ */ n("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ n("div", { className: "pitaj-form-submission-title", children: ne.title.toLowerCase().startsWith("forma") ? ne.title : `Forma: ${ne.title}` }),
                /* @__PURE__ */ n("dl", { className: "pitaj-form-submission-grid", children: ne.entries.map((je) => /* @__PURE__ */ n("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ n("dt", { children: je.label }),
                  /* @__PURE__ */ n("dd", { children: je.value })
                ] }, `${j.id}-${je.label}`)) })
              ] }) : j.content }) : /* @__PURE__ */ n(Ee, { children: [
                j.isHuman && /* @__PURE__ */ n("div", { className: "pitaj-operator-label", children: [
                  R("operatorLabel", i),
                  j.authorName ? ` · ${j.authorName}` : ""
                ] }),
                j.content ? /* @__PURE__ */ n("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ n(Hn, { content: j.content }),
                  j.isStreaming && /* @__PURE__ */ n("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                j.widget && /* @__PURE__ */ n("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ n(Zn, { widget: j.widget, onAction: (je) => ie(je), companyId: e.companyId, apiUrl: e.apiUrl, preview: e.isPreview || e.mockMode, conversationId: t.id, onApiError: v, onWorkflowState: h, onProductEvent: r, language: i }) }),
                j.isStreaming && !j.content && !j.widget && /* @__PURE__ */ n("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ n(Oi, {}) })
              ] }),
              !q && j.sources && j.sources.length > 0 && /* @__PURE__ */ n("div", { className: "pitaj-sources", children: [
                /* @__PURE__ */ n("span", { className: "pitaj-sources-title", children: R("sources", i) }),
                /* @__PURE__ */ n("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: j.sources.map((je) => /* @__PURE__ */ n(
                  "a",
                  {
                    href: je.url || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pitaj-source-pill",
                    children: [
                      /* @__PURE__ */ n("span", { children: je.title }),
                      /* @__PURE__ */ n(In, { size: 10 })
                    ]
                  },
                  je.id
                )) })
              ] }),
              !q && Q.showFollowupSuggestions !== !1 && j.suggestedQuestions && j.suggestedQuestions.length > 0 && /* @__PURE__ */ n("div", { className: "pitaj-followups", children: j.suggestedQuestions.map((je, Ye) => /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => ie(je),
                  disabled: M,
                  className: "pitaj-followup-chip",
                  children: je
                },
                `sug-f-${Ye}`
              )) }),
              (!j.isStreaming || !!j.content || !!j.widget) && /* @__PURE__ */ n("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ n("span", { children: Gn(j.timestamp) }),
                !q && /* @__PURE__ */ n("div", { className: "pitaj-msg-actions", children: [
                  j.id === Ie && !o && !j.isHuman && /* @__PURE__ */ n(Ee, { children: Q.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ n(Ee, { children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        onClick: () => b == null ? void 0 : b("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": R("helpful", i),
                        title: R("helpful", i),
                        children: /* @__PURE__ */ n(Tn, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        onClick: () => b == null ? void 0 : b("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": R("notHelpful", i),
                        title: R("notHelpful", i),
                        children: /* @__PURE__ */ n(Pn, { size: 14 })
                      }
                    )
                  ] }) }),
                  j.id === Ie && !o && Q.copyMessageEnabled !== !1 && !!j.content && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      onClick: () => void Ne(j.id, j.content),
                      className: `pitaj-msg-action-btn ${T === j.id ? "is-active" : ""}`,
                      "aria-label": T === j.id ? R("copied", i) : R("copyAnswer", i),
                      title: T === j.id ? R("copied", i) : R("copyAnswer", i),
                      children: T === j.id ? /* @__PURE__ */ n(Ct, { size: 14 }) : /* @__PURE__ */ n(Ln, { size: 14 })
                    }
                  )
                ] }),
                q && /* @__PURE__ */ n("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ n(
                  Ct,
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
      o && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ n("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ n("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ n("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ n(Oi, {}) }) }) })
    ] }),
    C && /* @__PURE__ */ n("div", { role: "alert", children: [
      "Nije moguće učitati aktivni korak procedure. ",
      /* @__PURE__ */ n("button", { type: "button", onClick: () => te((j) => j + 1), children: "Pokušaj ponovo" })
    ] }),
    (s || l) && /* @__PURE__ */ n("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ n("div", { className: "pitaj-alert-banner", children: [
      /* @__PURE__ */ n("span", { children: l ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${l}s.` : s }),
      u && /* @__PURE__ */ n("button", { type: "button", onClick: d, children: "Pokreni novu sesiju" })
    ] }) }),
    /* @__PURE__ */ n("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ n(
        va,
        {
          rows: Ae,
          fallbackQuestions: Q.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: ie,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      Z.length > 0 && /* @__PURE__ */ n("div", { className: "pitaj-attachment-list", children: Z.map((j) => /* @__PURE__ */ n("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ n("div", { className: "pitaj-attachment-thumb-wrap", children: j.previewUrl ? /* @__PURE__ */ n("img", { src: j.previewUrl, alt: j.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ n("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ n(fa, { size: 14 }) }) }),
        /* @__PURE__ */ n("span", { className: "pitaj-attachment-name", title: j.name, children: j.name }),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => E(j.id),
            "aria-label": `Ukloni ${j.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ n(Oe, { size: 10 })
          }
        )
      ] }, j.id)) }),
      xe && !p && /* @__PURE__ */ n("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ n("span", { className: "pitaj-dismissible-notice-text", children: xe }),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => X(!0),
            "aria-label": R("close", i),
            children: /* @__PURE__ */ n(Oe, { size: 12 })
          }
        )
      ] }),
      B.isProcessing && /* @__PURE__ */ n("div", { className: "pitaj-dictation-processing", children: R("transcribing", i) }),
      /* @__PURE__ */ n("div", { className: `pitaj-input-wrapper ${_e ? "is-recording" : ""}`, children: [
        Q.attachmentsEnabled && /* @__PURE__ */ n(Ee, { children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: re,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (j) => {
                const q = j.currentTarget.files;
                if (j.currentTarget.value = "", !q || q.length === 0) return;
                const ne = await ja(q);
                P((we) => [...we, ...ne].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "pitaj-composer-btn pitaj-attach-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var j;
                return (j = re.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ n(ga, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ n(
          "textarea",
          {
            ref: O,
            value: k,
            onInput: (j) => z(j.target.value),
            onKeyDown: be,
            placeholder: ge,
            rows: 1,
            disabled: M,
            className: "pitaj-textarea",
            style: _e ? { display: "none" } : void 0
          }
        ),
        _e ? /* @__PURE__ */ n("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": R("cancel", i),
              title: R("cancel", i),
              onClick: () => B.cancel(),
              children: /* @__PURE__ */ n(Oe, { size: 14 })
            }
          ),
          /* @__PURE__ */ n("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ n("div", { className: "pitaj-wave", children: B.waveformLevels.map((j, q) => /* @__PURE__ */ n(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + j * 15))}px` }
            },
            `dict-wave-conv-${q}`
          )) }) }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": R("sendAudio", i),
              title: R("sendAudio", i),
              onClick: () => B.stopAndTranscribe(),
              disabled: M || B.isProcessing,
              children: /* @__PURE__ */ n(Ct, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ n(Ee, { children: [
          Q.voiceToTextEnabled !== !1 && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${B.isProcessing ? "is-active" : ""}`,
              "aria-label": R("dictation", i),
              title: B.isProcessing ? R("transcribing", i) : B.isSupported ? R("dictation", i) : "Diktiranje nije podržano",
              onClick: () => B.start(),
              disabled: M || I || !B.isSupported || B.isProcessing,
              children: /* @__PURE__ */ n(ha, { size: 17 })
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => ie(),
              disabled: M || !k.trim() && Z.length === 0,
              className: "pitaj-send-btn",
              "aria-label": R("sendMessage", i),
              children: /* @__PURE__ */ n(ua, { size: 16 })
            }
          )
        ] })
      ] }),
      Me && /* @__PURE__ */ n("div", { className: "pitaj-custom-footer", children: Me }),
      e.poweredBy && /* @__PURE__ */ n("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ n(Rt, { size: 13, className: "pitaj-powered-icon" }),
        e.poweredByText || R("poweredBy", i),
        " ",
        /* @__PURE__ */ n(
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
function Xn({
  config: t,
  language: e = "bs",
  openedByUser: i = !1,
  onStart: a,
  onApiError: r
}) {
  var le, I;
  const [o, l] = K(""), [s, u] = K(!1), [d, f] = K(!1), [v, c] = K([]), b = oe(null), h = oe(null), k = t.content || {}, z = t.chatAvailable === !1, C = t.transcribeAvailable === !1, _ = wa({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: pe((M) => {
      l((B) => B ? `${B} ${M}` : M);
    }, []),
    onError: pe((M) => {
      r == null || r(M, "Greška pri transkripciji.");
    }, [r])
  });
  ee(() => {
    var M;
    i && ((M = b.current) == null || M.focus({ preventScroll: !0 }));
  }, [i]), ee(() => {
    if (typeof window > "u") return;
    const M = window.matchMedia("(max-width: 768px)"), B = () => u(M.matches);
    return B(), M.addEventListener("change", B), () => M.removeEventListener("change", B);
  }, []), ee(() => {
    f(!1);
  }, [k.dismissibleNotice]);
  const te = (s && k.useDifferentMessageMobile && k.mobileWelcomeMessage ? k.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((M) => M.trim()).filter((M) => M.length > 0), F = k.autoShowInitialMessages !== !1 && !i, L = !s || k.showAutoPopupMobile !== !1, p = s && k.useDifferentDurationMobile && typeof k.mobileAutoShowDurationSeconds == "number" ? k.mobileAutoShowDurationSeconds : k.autoShowDurationSeconds ?? 0, X = F && L ? Math.max(0, p) * 1e3 : 0, T = (M) => {
    c((B) => {
      const E = B.find((ie) => ie.id === M);
      if (E != null && E.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(E.previewUrl);
        } catch {
        }
      return B.filter((ie) => ie.id !== M);
    });
  }, A = (M) => {
    const B = (M ?? o).trim();
    if (!B && v.length === 0 || z) return;
    const E = `${B}${xa(v)}`.trim();
    a(E), v.forEach((ie) => {
      if (ie.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ie.previewUrl);
        } catch {
        }
    }), l(""), c([]);
  }, Z = (M) => {
    M.key === "Enter" && !M.shiftKey && (M.preventDefault(), A());
  }, P = k.showSuggestedMessages === !1 ? [] : k.suggestedMessageRows || [], H = k.messagePlaceholder || t.placeholder || R("inputPlaceholder", e), O = ((le = k.dismissibleNotice) == null ? void 0 : le.trim()) || "", re = ((I = k.footerText) == null ? void 0 : I.trim()) || "", Q = _.isListening;
  return /* @__PURE__ */ n("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ n("div", { className: "pitaj-new-screen", children: (te.length > 0 ? te : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((M, B) => /* @__PURE__ */ n("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ n("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ n("div", { className: "pitaj-msg-bubble", children: M }) }) }, `welcome-${B}`)) }),
    /* @__PURE__ */ n("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ n(
        va,
        {
          rows: P,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: A,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: X,
          staggerMs: 150
        }
      ),
      v.length > 0 && /* @__PURE__ */ n("div", { className: "pitaj-attachment-list", children: v.map((M) => /* @__PURE__ */ n("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ n("div", { className: "pitaj-attachment-thumb-wrap", children: M.previewUrl ? /* @__PURE__ */ n("img", { src: M.previewUrl, alt: M.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ n("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ n(fa, { size: 14 }) }) }),
        /* @__PURE__ */ n("span", { className: "pitaj-attachment-name", title: M.name, children: M.name }),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => T(M.id),
            "aria-label": `Ukloni ${M.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ n(Oe, { size: 10 })
          }
        )
      ] }, M.id)) }),
      O && !d && /* @__PURE__ */ n("div", { className: "pitaj-dismissible-notice", children: [
        /* @__PURE__ */ n("span", { className: "pitaj-dismissible-notice-text", children: O }),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "pitaj-dismissible-notice-close",
            onClick: () => f(!0),
            "aria-label": R("close", e),
            children: /* @__PURE__ */ n(Oe, { size: 12 })
          }
        )
      ] }),
      _.isProcessing && /* @__PURE__ */ n("div", { className: "pitaj-dictation-processing", children: R("transcribing", e) }),
      /* @__PURE__ */ n("div", { className: `pitaj-input-wrapper ${Q ? "is-recording" : ""}`, children: [
        k.attachmentsEnabled && /* @__PURE__ */ n(Ee, { children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: h,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (M) => {
                const B = M.currentTarget.files;
                if (M.currentTarget.value = "", !B || B.length === 0) return;
                const E = await ja(B);
                c((ie) => [...ie, ...E].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "pitaj-composer-btn pitaj-attach-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var M;
                return (M = h.current) == null ? void 0 : M.click();
              },
              children: /* @__PURE__ */ n(ga, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ n(
          "textarea",
          {
            ref: b,
            value: o,
            onInput: (M) => l(M.target.value),
            onKeyDown: Z,
            placeholder: H,
            rows: 1,
            disabled: z,
            className: "pitaj-textarea",
            style: Q ? { display: "none" } : void 0
          }
        ),
        Q ? /* @__PURE__ */ n("div", { className: "pitaj-recording-shell", children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-cancel",
              "aria-label": R("cancel", e),
              title: R("cancel", e),
              onClick: () => _.cancel(),
              children: /* @__PURE__ */ n(Oe, { size: 14 })
            }
          ),
          /* @__PURE__ */ n("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ n("div", { className: "pitaj-wave", children: _.waveformLevels.map((M, B) => /* @__PURE__ */ n(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + M * 15))}px` }
            },
            `dict-wave-${B}`
          )) }) }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "pitaj-recording-btn is-confirm",
              "aria-label": R("sendAudio", e),
              title: R("sendAudio", e),
              onClick: () => _.stopAndTranscribe(),
              disabled: z || _.isProcessing,
              children: /* @__PURE__ */ n(Ct, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ n(Ee, { children: [
          k.voiceToTextEnabled !== !1 && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${_.isProcessing ? "is-active" : ""}`,
              "aria-label": R("dictation", e),
              title: _.isProcessing ? R("transcribing", e) : _.isSupported ? R("dictation", e) : "Diktiranje nije podržano",
              onClick: () => _.start(),
              disabled: z || C || !_.isSupported || _.isProcessing,
              children: /* @__PURE__ */ n(ha, { size: 17 })
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => A(),
              disabled: z || !o.trim() && v.length === 0,
              className: "pitaj-send-btn",
              "aria-label": R("sendMessage", e),
              children: /* @__PURE__ */ n(ua, { size: 16 })
            }
          )
        ] })
      ] }),
      re && /* @__PURE__ */ n("div", { className: "pitaj-custom-footer", children: re }),
      t.poweredBy && /* @__PURE__ */ n("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ n(Rt, { size: 13, className: "pitaj-powered-icon" }),
        t.poweredByText || R("poweredBy", e),
        " ",
        /* @__PURE__ */ n(
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
function eo({
  isOpen: t,
  onClick: e,
  unreadCount: i = 0,
  config: a
}) {
  var f, v, c, b, h, k;
  const r = ((f = a.content) == null ? void 0 : f.launcherIconStyle) || "message-circle", o = typeof ((v = a.content) == null ? void 0 : v.launcherIconUrl) == "string" ? a.content.launcherIconUrl.trim() : "", l = ((c = a.content) == null ? void 0 : c.launcherShowText) === !0, s = ((b = a.content) == null ? void 0 : b.launcherTextSide) === "left" ? "left" : "right", u = l ? ((k = (h = a.content) == null ? void 0 : h.launcherText) == null ? void 0 : k.trim()) || a.title || a.name || "Otvori chat" : null;
  return /* @__PURE__ */ n(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${l ? "has-label" : ""} ${l && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ n("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ n("span", { className: "pitaj-launcher-icon open-icon", children: r === "custom" && o !== "" ? /* @__PURE__ */ n("img", { src: o, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ n(r === "sparkles" ? kn : r === "message-square" ? ma : r === "contact" ? Nn : _n, { size: 24 }) }),
          /* @__PURE__ */ n("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ n(Oe, { size: 22 }) })
        ] }),
        u && !t && /* @__PURE__ */ n("span", { className: "pitaj-launcher-label", children: u }),
        i > 0 && !t && /* @__PURE__ */ n("span", { className: "pitaj-unread-badge", children: i > 9 ? "9+" : i })
      ]
    }
  );
}
const to = "pitaj_io_popup_dismissed:";
function io(t) {
  try {
    return sessionStorage.getItem(t) === "1";
  } catch {
    return !1;
  }
}
function Vi(t) {
  try {
    sessionStorage.setItem(t, "1");
  } catch {
  }
}
function ao({ isOpen: t, onOpen: e, config: i }) {
  var X, T, A, Z;
  const [a, r] = K(!1), o = !!i.previewDraft, l = `${to}${i.companyId ?? ""}`, [s, u] = K(() => !o && io(l)), [d, f] = K(!1), [v, c] = K(t), b = oe(null);
  ee(() => {
    t && (c(!0), f(!1), o || Vi(l));
  }, [t]), ee(() => {
    const P = () => {
      var O;
      if (typeof window > "u") return;
      let H = window.innerWidth <= 640;
      if (!H && b.current) {
        const re = (O = b.current.closest(".pitaj-root")) == null ? void 0 : O.parentElement;
        re && re.clientWidth > 0 && re.clientWidth <= 640 && (H = !0);
      }
      r(H);
    };
    return P(), window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
  }, []);
  const h = i.content || {}, k = h.autoShowInitialMessages !== !1, z = h.showAutoPopupMobile !== !1, C = !a || z, _ = a && h.useDifferentDurationMobile && typeof h.mobileAutoShowDurationSeconds == "number" ? h.mobileAutoShowDurationSeconds : h.autoShowDurationSeconds ?? 0;
  if (ee(() => {
    if (!k || !C || s || t || v) {
      f(!1);
      return;
    }
    const P = Math.max(0, _) * 1e3, H = setTimeout(() => {
      f(!0);
    }, P);
    return () => clearTimeout(H);
  }, [k, C, s, t, v, _]), !d || t)
    return null;
  let D = "";
  a && h.useDifferentMessageMobile && ((X = h.mobileWelcomeMessage) != null && X.trim()) ? D = h.mobileWelcomeMessage.trim() : (T = h.popupMessageText) != null && T.trim() ? D = h.popupMessageText.trim() : (A = i.welcomeMessage) != null && A.trim() ? D = i.welcomeMessage.trim() : (Z = i.welcomeHeadline) != null && Z.trim() ? D = i.welcomeHeadline.trim() : D = "Zdravo! Kako vam mogu pomoći danas?";
  const te = (P) => {
    P.stopPropagation(), P.preventDefault(), u(!0), f(!1), o || Vi(l);
  }, F = () => {
    e();
  }, L = i.title || i.name || "Pitaj.io Asistent", p = i.logo || i.avatar;
  return /* @__PURE__ */ n(
    "div",
    {
      ref: b,
      className: "pitaj-launcher-popup",
      onClick: F,
      role: "button",
      tabIndex: 0,
      "aria-label": `${L}: ${D}`,
      onKeyDown: (P) => {
        (P.key === "Enter" || P.key === " ") && (P.preventDefault(), F());
      },
      children: [
        /* @__PURE__ */ n("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ n("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ n("div", { className: "pitaj-popup-avatar", children: p ? /* @__PURE__ */ n("img", { src: p, alt: "" }) : /* @__PURE__ */ n(Rt, { size: 14 }) }),
            /* @__PURE__ */ n("span", { className: "pitaj-popup-title", children: L })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: te,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ n(Oe, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "pitaj-popup-body", children: D }),
        /* @__PURE__ */ n("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function no(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, a = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), r = Math.floor(a / (1e3 * 60)), o = Math.floor(a / (1e3 * 60 * 60)), l = Math.floor(a / (1e3 * 60 * 60 * 24));
  return isNaN(r) || r < 1 ? "sada" : r < 60 ? `prije ${r}m` : o < 24 ? `prije ${o}h` : l < 7 ? `prije ${l}d` : e.toLocaleDateString();
}
function oo({ config: t, visitorId: e, onSelectTicket: i }) {
  const [a, r] = K([]), [o, l] = K("open"), [s, u] = K(1), [d, f] = K(!0), [v, c] = K(!0), [b, h] = K(!1), [k, z] = K(null), C = oe(null), _ = oe(null), D = oe(!1);
  ee(() => {
    let L = !0;
    return c(!0), r([]), u(1), f(!0), z(null), D.current = !1, Xt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: o,
      page: 1,
      perPage: 15
    }).then((p) => {
      L && (r(p.tickets), f(p.hasMore), u(1));
    }).catch((p) => {
      L && z(p instanceof Error ? p.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      L && c(!1);
    }), () => {
      L = !1;
    };
  }, [t.apiUrl, t.companyId, e, o]);
  const te = pe(() => {
    if (v || D.current || !d) return;
    D.current = !0, h(!0);
    const L = s + 1;
    Xt({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: o,
      page: L,
      perPage: 15
    }).then((p) => {
      r((X) => {
        const T = new Set(X.map((Z) => Z.id)), A = p.tickets.filter((Z) => !T.has(Z.id));
        return [...X, ...A];
      }), f(p.hasMore), u(L);
    }).catch((p) => {
      console.error("[Pitaj.io] Error loading more tickets:", p);
    }).finally(() => {
      h(!1), D.current = !1;
    });
  }, [t.apiUrl, t.companyId, d, v, s, o, e]);
  return ee(() => {
    const L = _.current, p = C.current;
    if (!L || !p || !d || v || b) return;
    const X = new IntersectionObserver(
      (T) => {
        var A;
        (A = T[0]) != null && A.isIntersecting && te();
      },
      { root: p, rootMargin: "120px" }
    );
    return X.observe(L), () => X.disconnect();
  }, [d, v, b, te]), /* @__PURE__ */ n(
    "div",
    {
      ref: C,
      className: "pitaj-tickets-screen",
      onScroll: (L) => {
        const p = L.currentTarget;
        !p || !d || v || D.current || p.scrollHeight - p.scrollTop - p.clientHeight < 120 && te();
      },
      tabIndex: 0,
      role: "region",
      "aria-label": "Lista tiketa",
      children: [
        /* @__PURE__ */ n("div", { className: "pitaj-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
          /* @__PURE__ */ n(
            "button",
            {
              className: o === "open" ? "is-active" : "",
              onClick: () => l("open"),
              role: "tab",
              "aria-selected": o === "open",
              children: "Otvoreni"
            }
          ),
          /* @__PURE__ */ n(
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
        v ? /* @__PURE__ */ n("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ n("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ n("span", { children: "Učitavanje tiketa…" })
        ] }) : k ? /* @__PURE__ */ n("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ n("span", { children: k }) }) : a.length === 0 ? /* @__PURE__ */ n("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ n(ma, { size: 30 }),
          /* @__PURE__ */ n("strong", { children: o === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ n("span", { children: o === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ n("div", { className: "pitaj-ticket-list", children: [
          a.map((L) => {
            const p = L.messages || [], X = p.length > 0 ? p[p.length - 1] : null, T = p.length, A = T === 1 ? "1 poruka" : T >= 2 && T <= 4 ? `${T} poruke` : `${T} poruka`;
            return /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: "pitaj-ticket-card",
                onClick: () => i == null ? void 0 : i(L),
                "aria-label": `Otvori tiket ${L.ticketNumber || L.id}`,
                children: /* @__PURE__ */ n("div", { className: "pitaj-ticket-card-content", children: [
                  /* @__PURE__ */ n("div", { className: "pitaj-ticket-card-top", children: [
                    /* @__PURE__ */ n("strong", { className: "pitaj-ticket-number", children: L.ticketNumber || `Tiket #${L.id}` }),
                    /* @__PURE__ */ n("span", { className: `pitaj-ticket-status-badge ${L.isResolved ? "is-closed" : "is-open"}`, children: [
                      /* @__PURE__ */ n("span", { className: "pitaj-ticket-status-dot" }),
                      L.isResolved ? "Zatvoren" : "Otvoren"
                    ] })
                  ] }),
                  X && /* @__PURE__ */ n("div", { className: "pitaj-ticket-card-preview", children: X.content }),
                  /* @__PURE__ */ n("div", { className: "pitaj-ticket-card-footer", children: [
                    /* @__PURE__ */ n("span", { className: "pitaj-ticket-card-time", children: no(L.updatedAt) }),
                    T > 0 && /* @__PURE__ */ n("span", { className: "pitaj-ticket-card-count", children: A })
                  ] })
                ] })
              },
              L.id
            );
          }),
          b && /* @__PURE__ */ n("div", { className: "pitaj-tickets-loading-more", children: [
            /* @__PURE__ */ n("span", { className: "pitaj-tickets-loading-more-spinner" }),
            /* @__PURE__ */ n("span", { children: "Učitavanje još tiketa…" })
          ] }),
          /* @__PURE__ */ n("div", { ref: _, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const ro = Ut(() => import("./HistoryScreen-CA1BTjZs.js"), (t) => t.HistoryScreen), so = Ut(() => import("./FormActionsScreen-K4CQKlxJ.js"), (t) => t.FormActionsScreen), co = Ut(() => import("./BackstageLayout-DLBuUJZL.js"), (t) => t.BackstageLayout);
function wt(t) {
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
  const a = e.match(/^hsla?\(\s*([0-9.]+)(?:deg)?\s*[, ]\s*([0-9.]+)%\s*[, ]\s*([0-9.]+)%/);
  if (a) {
    const r = Number(a[1]) % 360, o = Number(a[2]) / 100, l = Number(a[3]) / 100, s = (1 - Math.abs(2 * l - 1)) * o, u = s * (1 - Math.abs(r / 60 % 2 - 1)), d = l - s / 2;
    let f = 0, v = 0, c = 0;
    return 0 <= r && r < 60 ? (f = s, v = u, c = 0) : 60 <= r && r < 120 ? (f = u, v = s, c = 0) : 120 <= r && r < 180 ? (f = 0, v = s, c = u) : 180 <= r && r < 240 ? (f = 0, v = u, c = s) : 240 <= r && r < 300 ? (f = u, v = 0, c = s) : 300 <= r && r < 360 && (f = s, v = 0, c = u), {
      r: Math.round((f + d) * 255),
      g: Math.round((v + d) * 255),
      b: Math.round((c + d) * 255)
    };
  }
  return null;
}
function po(t) {
  return wt(t);
}
function yt(t, e) {
  const i = wt(t);
  return i ? `rgba(${i.r}, ${i.g}, ${i.b}, ${e})` : null;
}
function lo(t, e, i) {
  const a = (r) => Math.max(0, Math.min(255, Math.round(r))).toString(16).padStart(2, "0");
  return `#${a(t)}${a(e)}${a(i)}`;
}
function gt(t) {
  const e = wt(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function uo(t, e) {
  const i = wt(t);
  if (i)
    return (0.2126 * i.r + 0.7152 * i.g + 0.0722 * i.b) / 255 <= 0.55;
  if (e) {
    const a = wt(e);
    if (a)
      return (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255 > 0.55;
  }
  return !1;
}
function mo(t) {
  const e = po(t);
  if (!e) return t;
  const i = gt(t) === "#111827", a = i ? 0.2 : 0.16, r = i ? 0 : 255;
  return lo(
    e.r + (r - e.r) * a,
    e.g + (r - e.g) * a,
    e.b + (r - e.b) * a
  );
}
function ho({
  config: t,
  startOpen: e = !1,
  initialScreen: i = "new-conversation",
  onEvent: a,
  isInline: r = !1,
  isMobile: o,
  isCanvasPreview: l = !1
}) {
  var je, Ye, Qe, Xe, et, tt, it, at, nt, ot, rt, st, ct, pt, lt, dt, ut;
  const {
    config: s,
    setConfig: u,
    isOpen: d,
    setIsOpen: f,
    screen: v,
    setScreen: c,
    conversations: b,
    activeConversation: h,
    activeConversationHumanActive: k,
    totalUnread: z,
    isStreaming: C,
    rateLimitTimer: _,
    errorBanner: D,
    sessionInvalid: te,
    resetSession: F,
    selectConversation: L,
    startNewConversation: p,
    endConversation: X,
    deleteConversation: T,
    sendUserMessage: A,
    submitSatisfaction: Z,
    visitorContact: P,
    visitorId: H,
    activeConversationId: O,
    activeLanguage: re,
    appendConversationMessage: Q,
    appendWorkflowWidget: le,
    handleApiError: I
  } = wn(t, {
    startOpen: e,
    initialScreen: i,
    emitEvent: a,
    onActionTrigger: (w, x) => {
      if (!s.isPreview && !s.mockMode && (a == null || a("action_triggered", { ...Ra(s.companyId, w), ...x ? { complete: x } : {} })), ie(!0), f(!0), (v === "history" || v === "new-conversation") && c("conversation"), w.widget_id || w.widget)
        return;
      const S = Number(w.id), G = Number(w.form_id), he = Number.isInteger(S) && S > 0 ? S : null, ke = Number.isInteger(G) && G > 0 ? -G : null;
      ge(he ?? ke);
    }
  }), M = oe(i), B = oe(e), [E, ie] = K(e), [be, ge] = K(() => {
    var w, x, S, G;
    return ((w = s.previewDraft) == null ? void 0 : w.initialStep) === "form" && !!!(s.previewDraft.widget || (x = s.previewDraft.action) != null && x.widget || (S = s.previewDraft.action) != null && S.widget_id) ? ((G = s.previewDraft.action) == null ? void 0 : G.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  ee(() => {
    var w, x, S, G, he, ke, He;
    if (((w = s.previewDraft) == null ? void 0 : w.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (x = s.previewDraft.action) != null && x.widget || (S = s.previewDraft.action) != null && S.widget_id)) {
        const y = ((G = s.previewDraft.action) == null ? void 0 : G.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        y !== null && ge(y);
      }
    } else (((he = s.previewDraft) == null ? void 0 : he.initialStep) === "idle" || ((ke = s.previewDraft) == null ? void 0 : ke.initialStep) === "submitted" || ((He = s.previewDraft) == null ? void 0 : He.initialStep) === "dismissed") && ge(null);
  }, [
    (je = s.previewDraft) == null ? void 0 : je.initialStep,
    (Qe = (Ye = s.previewDraft) == null ? void 0 : Ye.action) == null ? void 0 : Qe.id,
    (et = (Xe = s.previewDraft) == null ? void 0 : Xe.form) == null ? void 0 : et.id,
    (tt = s.previewDraft) == null ? void 0 : tt.widget
  ]);
  const [xe, Me] = K(null), Ae = oe(null), [Ie, _e] = K(() => typeof o == "boolean" ? o : r ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  ee(() => {
    if (typeof o == "boolean") {
      _e(o);
      return;
    }
    const w = () => {
      if (typeof window > "u") return;
      if (r) {
        _e(!1);
        return;
      }
      let x = window.innerWidth <= 640;
      if (!x && Ae.current) {
        const S = Ae.current.getRootNode(), G = S instanceof ShadowRoot ? S.host : Ae.current.parentElement, he = (G == null ? void 0 : G.parentElement) || G;
        he && he.clientWidth > 0 && he.clientWidth <= 640 && (x = !0);
      }
      _e(x);
    };
    return w(), window.addEventListener("resize", w), window.addEventListener("orientationchange", w), () => {
      window.removeEventListener("resize", w), window.removeEventListener("orientationchange", w);
    };
  }, [o]), ee(() => {
    if (typeof window > "u") return;
    const w = () => {
      const S = Ae.current;
      if (!S) return;
      const G = window.visualViewport;
      if (G) {
        const he = G.height < window.innerHeight - 100;
        S.style.setProperty("--pitaj-viewport-height", `${Math.round(G.height)}px`), S.style.setProperty("--pitaj-viewport-top", `${Math.round(G.offsetTop)}px`), S.style.setProperty("--pitaj-viewport-left", `${Math.round(G.offsetLeft)}px`), S.style.setProperty(
          "--pitaj-input-safe-bottom",
          he ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        S.style.setProperty("--pitaj-viewport-height", "100dvh"), S.style.setProperty("--pitaj-viewport-top", "0px"), S.style.setProperty("--pitaj-viewport-left", "0px"), S.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    w();
    const x = window.visualViewport;
    return x && (x.addEventListener("resize", w), x.addEventListener("scroll", w)), window.addEventListener("resize", w), window.addEventListener("orientationchange", w), () => {
      x && (x.removeEventListener("resize", w), x.removeEventListener("scroll", w)), window.removeEventListener("resize", w), window.removeEventListener("orientationchange", w);
    };
  }, [d, Ie]), ee(() => {
    if (typeof document > "u" || !d || !Ie || r || l) return;
    const w = document.body.style.overflow, x = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = w, document.body.style.touchAction = x;
    };
  }, [d, Ie, r, l]), ee(() => {
    var S;
    if (typeof window > "u" || r) return;
    const w = (S = Ae.current) == null ? void 0 : S.getRootNode(), x = w instanceof ShadowRoot ? w.host : null;
    if (x) {
      if (l || x.hasAttribute("data-pitaj-preview") || x.classList.contains("pitaj-preview-host")) {
        x.style.width = "100%", x.style.height = "100%", x.style.top = "0", x.style.left = "0", x.style.position = "relative";
        return;
      }
      d && Ie ? (x.style.top = "0", x.style.left = "0", x.style.width = "100%", x.style.height = "100%", x.setAttribute("data-pitaj-mobile-open", "true")) : (x.style.top = "", x.style.left = "", x.style.width = "0", x.style.height = "0", x.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [d, Ie, r, l]);
  const Ne = s.formsEnabled === !0 && s.formsAvailable !== !1, ve = Ze(() => {
    var S, G;
    const w = s.actions || [];
    if (w.length > 0 && typeof ((S = w[0]) == null ? void 0 : S.id) == "number")
      return w[0].id;
    const x = s.forms || [];
    return x.length > 0 && typeof ((G = x[0]) == null ? void 0 : G.id) == "number" ? -x[0].id : null;
  }, [s.actions, s.forms]), Be = Ze(() => ({
    open: () => {
      ie(!0), f(!0);
    },
    close: () => f(!1),
    toggle: () => {
      d || ie(!0), f(!d);
    },
    startConversation: (w) => {
      ie(!0), f(!0), w && w.trim() ? p(w.trim()) : c("new-conversation");
    },
    setScreen: (w) => c(w),
    setConfig: (w) => {
      const x = {
        ...s,
        ...w,
        colors: { ...s.colors || {}, ...w.colors || {} },
        content: { ...s.content || {}, ...w.content || {} },
        features: { ...s.features || {}, ...w.features || {} },
        cssVars: { ...s.cssVars || {}, ...w.cssVars || {} }
      };
      if (x.previewDraft) {
        if (x.previewDraft.action) {
          const S = x.previewDraft.action;
          x.actions = [S, ...(x.actions || []).filter((G) => G.id !== S.id)];
        }
        if (x.previewDraft.form) {
          const S = x.previewDraft.form;
          x.forms = [S, ...(x.forms || []).filter((G) => G.id !== S.id)], x.formsAvailable = !0, x.formsEnabled = !0;
        }
        if (x.previewDraft.widget) {
          const S = x.previewDraft.widget;
          x.widgets = [S, ...(x.widgets || []).filter((G) => G.id !== S.id)];
        }
      }
      u(x);
    }
  }), [s, d, f, c, p, u]), Pe = oe({});
  Ri(Pe.current, Be), ee(() => () => Ri(Pe.current, null), []), ee(() => {
    i !== M.current && (M.current = i, c(i));
  }, [i, c]), ee(() => {
    e !== B.current && (B.current = e, e && ie(!0), f(e));
  }, [e, f]), ee(() => {
    if (v === "forms") {
      Ne && ve !== null && ge(ve), c("new-conversation");
      return;
    }
    v === "contact" && c("new-conversation");
  }, [ve, Ne, v, c]), ee(() => {
    var G;
    if (typeof document > "u") return;
    const w = (G = s.content) == null ? void 0 : G.fontFamily;
    if (!w) return;
    const x = w.trim().toLowerCase();
    let S = "";
    if (x === "inter" ? S = "family=Inter:wght@400;500;600;700" : x === "geist" ? S = "family=Geist:wght@400;500;600;700" : x === "plus jakarta sans" && (S = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), S) {
      const he = `pitaj-font-${x.replace(/\s+/g, "-")}`;
      if (!document.getElementById(he)) {
        const ke = document.createElement("link");
        ke.id = he, ke.rel = "stylesheet", ke.href = `https://fonts.googleapis.com/css2?${S}&display=swap`, document.head.appendChild(ke);
      }
    }
  }, [(it = s.content) == null ? void 0 : it.fontFamily]);
  const j = Ze(() => {
    var li, di, ui, mi, hi, fi, gi, bi, vi;
    const x = (((li = s.content) == null ? void 0 : li.themeMode) === "dark" ? "dark" : "light") === "dark", S = s.colors || {}, G = x ? "#0b1220" : "#ffffff", he = x ? "#111827" : "#f8fafc", ke = x ? "#111827" : "#ffffff", He = x ? "#e5e7eb" : "#0f172a", g = x ? "#9ca3af" : "#64748b", y = x ? "#263246" : "#e2e8f0", N = x ? "#172033" : "#f1f5f9", V = x ? "#111827" : "#ffffff", m = {};
    (di = s.theme) != null && di.css_vars && typeof s.theme.css_vars == "object" && Object.assign(m, s.theme.css_vars);
    const J = S.primaryColor || (x ? "#3b82f6" : "#2563eb");
    m["--pitaj-accent"] = J, m["--pitaj-bubble-user"] = S.bubbleUserBg || J, m["--pitaj-accent-hover"] = mo(J), m["--pitaj-accent-contrast"] = gt(J), m["--pitaj-bubble-user-fg"] = gt(S.bubbleUserBg || J);
    const ae = yt(J, 0.1), ue = yt(J, 0.16), W = yt(J, 0.35);
    ae && (m["--pitaj-accent-soft"] = ae), ue && (m["--pitaj-accent-soft-strong"] = ue), W && (m["--pitaj-accent-ring"] = W);
    const Y = S.sendAccent || (x ? "#e5e7eb" : "#111827");
    m["--pitaj-send-accent"] = Y, m["--pitaj-send-accent-contrast"] = gt(Y);
    const U = S.surfaceBg || G;
    m["--pitaj-surface"] = U, S.subtle ? m["--pitaj-surface-subtle"] = S.subtle : S.surfaceBg ? m["--pitaj-surface-subtle"] = yt(S.surfaceBg, 0.9) || S.surfaceBg : m["--pitaj-surface-subtle"] = he;
    const ce = S.bubbleAiBg || ke;
    m["--pitaj-bubble-ai"] = ce;
    const $ = S.textFg || He;
    m["--pitaj-bubble-ai-fg"] = $, m["--pitaj-fg"] = $;
    const ye = S.mutedFg || g;
    m["--pitaj-muted"] = ye;
    const Se = S.border || y;
    m["--pitaj-border"] = Se, m["--pitaj-card-border"] = Se;
    const Ce = S.hover || N;
    m["--pitaj-hover"] = Ce, m["--pitaj-chrome-border"] = x ? "rgba(148, 163, 184, 0.52)" : "#d1d5db";
    const $e = S.headerBg || V, Le = uo($e, S.headerFg), ze = S.headerFg || (Le ? "#ffffff" : "#0f172a");
    m["--pitaj-header-bg"] = $e, m["--pitaj-header-fg"] = ze, Le ? (m["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)", m["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", m["--pitaj-header-icon-hover"] = "#ffffff", m["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", m["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", m["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", m["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", m["--pitaj-header-badge-fg"] = "#ffffff", m["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (m["--pitaj-header-gradient"] = $e.toLowerCase() === "#ffffff" || $e.toLowerCase() === "#fff" ? "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", m["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", m["--pitaj-header-icon-hover"] = "#0f172a", m["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", m["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", m["--pitaj-header-border"] = Se, m["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", m["--pitaj-header-badge-fg"] = "#0f172a", m["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)");
    const Ue = (ui = s.content) == null ? void 0 : ui.launcherButtonColor;
    Ue && (m["--pitaj-launcher-bg"] = Ue, m["--pitaj-launcher-fg"] = gt(Ue));
    const Te = (mi = s.content) == null ? void 0 : mi.cornerRadius;
    if (Te) {
      const De = Te === "sharp" || Te === "0px" ? "0px" : Te === "small" || Te === "8px" ? "8px" : Te === "medium" || Te === "12px" ? "12px" : Te === "large" || Te === "16px" ? "16px" : Te;
      m["--pitaj-radius"] = De, De === "0px" ? (m["--pitaj-radius-bubble"] = "0px", m["--pitaj-radius-input"] = "0px", m["--pitaj-radius-btn"] = "0px", m["--pitaj-radius-avatar"] = "0px", m["--pitaj-radius-full"] = "0px", m["--pitaj-radius-corner-sm"] = "0px", m["--pitaj-launcher-radius"] = "0px", m["--pitaj-launcher-pill-radius"] = "0px", m["--pitaj-badge-radius"] = "0px") : De === "8px" ? (m["--pitaj-radius-bubble"] = "8px", m["--pitaj-radius-input"] = "8px", m["--pitaj-radius-btn"] = "6px", m["--pitaj-radius-avatar"] = "6px", m["--pitaj-radius-full"] = "8px", m["--pitaj-radius-corner-sm"] = "2px", m["--pitaj-launcher-radius"] = "8px", m["--pitaj-launcher-pill-radius"] = "8px", m["--pitaj-badge-radius"] = "4px") : De === "12px" ? (m["--pitaj-radius-bubble"] = "12px", m["--pitaj-radius-input"] = "12px", m["--pitaj-radius-btn"] = "8px", m["--pitaj-radius-avatar"] = "10px", m["--pitaj-radius-full"] = "12px", m["--pitaj-radius-corner-sm"] = "4px", m["--pitaj-launcher-radius"] = "12px", m["--pitaj-launcher-pill-radius"] = "12px", m["--pitaj-badge-radius"] = "6px") : (m["--pitaj-radius-bubble"] = "18px", m["--pitaj-radius-input"] = "14px", m["--pitaj-radius-btn"] = "10px", m["--pitaj-radius-avatar"] = "50%", m["--pitaj-radius-full"] = "999px", m["--pitaj-radius-corner-sm"] = "4px", m["--pitaj-launcher-radius"] = "50%", m["--pitaj-launcher-pill-radius"] = "999px", m["--pitaj-badge-radius"] = "999px");
    }
    const Ft = (hi = s.content) == null ? void 0 : hi.fontFamily;
    if (Ft) {
      const De = Ft.toLowerCase(), ji = De === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : De === "arial" ? "Arial, Helvetica, sans-serif" : De === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : De === "georgia" ? "Georgia, serif" : De === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : De === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${Ft}', 'Inter', system-ui, sans-serif`;
      m["--pitaj-font"] = ji, m.fontFamily = ji;
    }
    const Ot = (fi = s.content) == null ? void 0 : fi.fontSize;
    Ot && (m["--pitaj-font-size"] = Ot, m.fontSize = Ot);
    const pi = (gi = s.content) != null && gi.dropShadowEnabled ? x ? "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.3)" : "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)" : "none";
    m["--pitaj-window-shadow"] = pi, m["--pitaj-shadow"] = pi;
    const ya = (bi = s.content) != null && bi.dropShadowEnabled ? x ? "0 4px 12px rgba(0, 0, 0, 0.4), 0 10px 24px -4px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(15, 23, 42, 0.15), 0 10px 24px -4px rgba(15, 23, 42, 0.25)" : "none", _a = (vi = s.content) != null && vi.dropShadowEnabled ? x ? "0 6px 16px rgba(0, 0, 0, 0.45), 0 16px 32px -4px rgba(0, 0, 0, 0.6)" : "0 6px 16px rgba(15, 23, 42, 0.18), 0 16px 32px -4px rgba(15, 23, 42, 0.32)" : "none";
    return m["--pitaj-launcher-shadow"] = ya, m["--pitaj-launcher-shadow-hover"] = _a, s.cssVars && typeof s.cssVars == "object" && Object.assign(m, s.cssVars), m;
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
  ]), q = ((pt = s.content) == null ? void 0 : pt.themeMode) === "dark" ? "dark" : "light", ne = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ n(Ee, {}) : s.layout === "backstage" || s.layout === "help_page" ? /* @__PURE__ */ n(
    "div",
    {
      ref: Ae,
      "data-theme": q,
      className: `pitaj-root pitaj-theme-${q} is-backstage-layout ${r ? "is-inline" : ""}`,
      style: j,
      role: "region",
      "aria-label": s.title || s.name || "AI Asistent",
      children: /* @__PURE__ */ n(
        co,
        {
          config: s,
          screen: v,
          setScreen: c,
          conversations: b,
          activeConversation: h,
          activeConversationId: O,
          selectConversation: L,
          deleteConversation: T,
          startNewConversation: p,
          sendUserMessage: A,
          isStreaming: C,
          rateLimitCountdown: _,
          errorBanner: D,
          sessionInvalid: te,
          resetSession: F,
          humanActive: k,
          activeLanguage: re,
          formsEnabled: Ne,
          inlineFormActionId: be,
          setInlineFormActionId: ge,
          visitorContact: P,
          onWorkflowWidget: (w) => O && le(O, w),
          onSubmitSatisfaction: (w, x) => O && Z(O, w, x),
          onApiError: I,
          onProductEvent: (w, x) => {
            a == null || a(w, { companyId: s.companyId, conversationId: O, ...x });
          }
        }
      )
    }
  ) : /* @__PURE__ */ n(
    "div",
    {
      ref: Ae,
      "data-theme": q,
      className: `pitaj-root pitaj-theme-${q} ${ne} ${d ? "is-widget-open" : "is-widget-closed"} ${r ? "is-inline" : ""} ${l ? "is-canvas-preview" : ""} ${Ie ? "is-mobile" : ""} ${r && ((lt = s.content) != null && lt.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: j,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: `pitaj-window ${d ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !d,
            children: [
              /* @__PURE__ */ n(
                Dn,
                {
                  screen: v,
                  activeConversation: h,
                  config: s,
                  language: re,
                  onBack: () => {
                    const w = xe || "new-conversation";
                    Me(null), c(w);
                  },
                  onClose: () => {
                    f(!1);
                  },
                  onNewConversation: () => {
                    Me(null), c("new-conversation");
                  },
                  onEndConversation: () => {
                    X(), f(!1);
                  },
                  onDeleteConversation: ((dt = s.content) == null ? void 0 : dt.deleteConversationsEnabled) !== !1 && h ? () => T(h.id) : void 0,
                  onViewHistory: () => {
                    Me(null), c("history");
                  },
                  onViewTickets: () => {
                    Me(null), c("tickets");
                  }
                }
              ),
              /* @__PURE__ */ n("div", { className: "pitaj-body", children: [
                v === "conversation" && h && /* @__PURE__ */ n(
                  Qn,
                  {
                    conversation: h,
                    config: s,
                    language: re,
                    humanActive: k,
                    onProductEvent: (w, x) => {
                      a == null || a(w, { companyId: s.companyId, conversationId: h.id, ...x }), !s.isPreview && !s.mockMode && Va(
                        { companyId: s.companyId, conversationId: h.id, apiUrl: s.apiUrl },
                        {
                          type: w === "product_clicked" ? "clicked" : "viewed",
                          product_id: Number(x.productId),
                          position: typeof x.position == "number" ? x.position : void 0,
                          kind: x.kind === "buy" ? "buy" : x.kind === "view" ? "view" : void 0
                        }
                      );
                    },
                    isStreaming: C,
                    rateLimitCountdown: _,
                    errorBanner: D,
                    sessionInvalid: te,
                    onResetSession: F,
                    onSendMessage: A,
                    onWorkflowWidget: (w) => le(h.id, w),
                    onApiError: I,
                    onSubmitSatisfaction: (w, x) => Z(h.id, w, x)
                  }
                ),
                v === "new-conversation" && /* @__PURE__ */ n(
                  Xn,
                  {
                    config: s,
                    language: re,
                    openedByUser: E,
                    onStart: (w) => {
                      p(w);
                    },
                    onApiError: I
                  }
                ),
                v === "history" && /* @__PURE__ */ n(
                  ro,
                  {
                    conversations: b,
                    config: s,
                    language: re,
                    onSelectConversation: (w) => {
                      Me("history"), L(w);
                    },
                    onNewConversation: () => {
                      Me(null), c("new-conversation");
                    },
                    onDeleteConversation: ((ut = s.content) == null ? void 0 : ut.deleteConversationsEnabled) !== !1 ? T : void 0
                  }
                ),
                v === "tickets" && /* @__PURE__ */ n(
                  oo,
                  {
                    config: s,
                    visitorId: H,
                    onSelectTicket: (w) => {
                      var He;
                      Me("tickets");
                      const x = (He = w.messages) == null ? void 0 : He.find((g) => g.sender === "user"), S = w.messages && w.messages.length > 0 ? w.messages[w.messages.length - 1] : null, G = x ? x.content.length > 40 ? x.content.slice(0, 40) + "…" : x.content : w.ticketNumber || `Tiket #${w.id}`, ke = {
                        id: w.conversationId ? String(w.conversationId) : String(w.id),
                        title: G,
                        preview: S ? S.content : w.ticketNumber || `Tiket #${w.id}`,
                        timestamp: w.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: w.messages || [],
                        status: w.isResolved ? "ended" : "active",
                        ticketNumber: w.ticketNumber
                      };
                      L(ke);
                    }
                  }
                ),
                (v === "conversation" || v === "new-conversation") && Ne && be !== null ? /* @__PURE__ */ n("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ n(
                  so,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: O,
                    initialActionId: be,
                    visitorContact: P,
                    onApiError: I,
                    blockedReason: _ !== null ? `Sačekajte ${_}s prije novog zahtjeva.` : null,
                    onSubmitted: (w) => {
                      var x, S;
                      if (Q(O, w, "user"), s.mockMode || s.isPreview) {
                        const G = ((S = (x = s.previewDraft) == null ? void 0 : x.form) == null ? void 0 : S.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          Q(O, G, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => ge(null),
                    onDismiss: async (w, x) => {
                      if (!(w != null && w.dismiss_message) || !O) return;
                      const S = s.mockMode || s.isPreview ? w.dismiss_message : await Ua(s.companyId, O, w.id, x, s.apiUrl);
                      Q(O, S, "ai");
                    }
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!d || !Ie) && /* @__PURE__ */ n("div", { className: `pitaj-launcher-wrap ${d ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ n(
            ao,
            {
              isOpen: d,
              onOpen: () => {
                ie(!0), f(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ n(
            eo,
            {
              isOpen: d,
              onClick: () => {
                d || ie(!0), f(!d);
              },
              unreadCount: z,
              config: s
            }
          )
        ] })
      ]
    }
  );
}
const de = {
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
function fo(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const i = Number.parseInt(e.slice(1, 3), 16), a = Number.parseInt(e.slice(3, 5), 16), r = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * i + 0.7152 * a + 0.0722 * r) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function go(t, e) {
  if (typeof t != "string") return e;
  const i = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(i) ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`.toUpperCase() : e;
}
function bo(t) {
  const e = t.trim(), i = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(i))
    return { h: 210, s: 70, l: 50 };
  const a = Number.parseInt(i.slice(1, 3), 16) / 255, r = Number.parseInt(i.slice(3, 5), 16) / 255, o = Number.parseInt(i.slice(5, 7), 16) / 255, l = Math.max(a, r, o), s = Math.min(a, r, o), u = l - s;
  let d = 0;
  const f = (l + s) / 2, v = u === 0 ? 0 : u / (1 - Math.abs(2 * f - 1));
  if (u !== 0)
    switch (l) {
      case a:
        d = (r - o) / u % 6;
        break;
      case r:
        d = (o - a) / u + 2;
        break;
      default:
        d = (a - r) / u + 4;
        break;
    }
  return { h: Math.round((d * 60 + 360) % 360), s: Math.round(v * 100), l: Math.round(f * 100) };
}
function vo(t) {
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
function jo(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const i = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, r = (Array.isArray(i.fields) ? i.fields : []).filter((o) => typeof o == "object" && o !== null).map((o) => ({
      key: typeof o.key == "string" ? o.key : "",
      type: vo(o.type),
      label: typeof o.label == "string" ? o.label : "",
      required: o.required === !0,
      placeholder: typeof o.placeholder == "string" ? o.placeholder : void 0,
      options: Array.isArray(o.options) ? o.options.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
      accept: Array.isArray(o.accept) ? o.accept.filter((l) => typeof l == "string" && l.trim() !== "") : void 0,
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
function xo(t) {
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
async function wo(t, e) {
  var a, r, o, l, s, u, d, f, v;
  if (t === "default")
    return { ...de, companyId: t || "default" };
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
        const E = await b.json().catch(() => null);
        if ((E == null ? void 0 : E.code) === "COUNTRY_BLOCKED" || E != null && E.blocked)
          return console.warn("[ChatWidget] Widget is blocked in this region."), {
            ...de,
            companyId: t,
            apiUrl: i,
            enabled: !1,
            blocked: !0,
            blockedReason: "country"
          };
      }
      return console.warn(`[ChatWidget] Failed to fetch config (${b.status}), using defaults.`), { ...de, companyId: t, apiUrl: i, configLoadFailed: !0 };
    }
    const h = await b.json(), k = h.accent_color || ((a = de.colors) == null ? void 0 : a.primaryColor) || "#2563eb", z = Array.isArray(h.suggested_questions) ? h.suggested_questions.filter((E) => typeof E == "string" && E.trim() !== "").slice(0, 4) : [], C = Array.isArray(h.contact_fields) ? h.contact_fields.filter(
      (E) => E === "name" || E === "email" || E === "phone"
    ) : [], _ = Array.isArray(h.channels) ? h.channels : [], D = _.find(
      (E) => typeof E == "object" && E !== null && E.channel === "chat_bubble"
    ), te = (D == null ? void 0 : D.enabled) !== !1, F = _.find(
      (E) => typeof E == "object" && E !== null && E.channel === "help_page"
    ), L = (F == null ? void 0 : F.enabled) === !0, p = h.widget_content && typeof h.widget_content == "object" ? h.widget_content : null, X = Array.isArray(p == null ? void 0 : p.suggested_message_rows) ? p.suggested_message_rows.filter((E) => typeof E == "object" && E !== null).map((E) => {
      const ie = typeof E.text == "string" ? E.text.trim() : "", be = Array.isArray(E.children) ? E.children.filter((ge) => typeof ge == "string" && ge.trim() !== "") : [];
      return {
        text: ie,
        children: be.length > 0 ? be : void 0
      };
    }).filter((E) => E.text !== "").slice(0, 4) : [], T = {
      avatarBorder: (p == null ? void 0 : p.avatar_border) !== !1,
      messagePlaceholder: typeof (p == null ? void 0 : p.message_placeholder) == "string" && p.message_placeholder.trim() !== "" ? p.message_placeholder : de.placeholder,
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
      suggestedMessageRows: X,
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
      launcherButtonColor: go(p == null ? void 0 : p.launcher_button_color, "#05070c"),
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
    }, A = h.theme && typeof h.theme == "object" ? h.theme : null, Z = A != null && A.css_vars && typeof A.css_vars == "object" ? A.css_vars : void 0, P = A != null && A.colors && typeof A.colors == "object" ? A.colors : null;
    let H = P, O = k;
    if (H)
      P.primaryColor && (O = P.primaryColor);
    else {
      const E = T.themeMode === "dark" ? "dark" : "light", ie = T.accentColorEnabled !== !1, be = T.accentColorForHeaderEnabled === !0, ge = T.tintedGrayscaleEnabled === !0, xe = T.tintedGrayscaleHue ?? 0, Me = T.tintedGrayscaleTint ?? 0, Ae = T.tintedGrayscaleShade ?? 0;
      O = ie ? k : E === "dark" ? "#3b82f6" : "#2563eb";
      const _e = (bo(O).h + xe + 360) % 360, Ne = Math.max(0, Math.min(40, Math.round(Math.max(0, Me) * 0.36))), ve = Math.max(-24, Math.min(24, Ae * 0.24));
      if (H = E === "dark" ? {
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
      }, ie && be && (H.headerBg = O, H.headerFg = fo(O)), ge) {
        const Be = E === "dark" ? Math.max(8, Math.min(20, 12 + ve)) : Math.max(88, Math.min(97, 95 + ve * 0.22)), Pe = E === "dark" ? Math.max(10, Math.min(24, 16 + ve)) : Math.max(80, Math.min(94, 89 + ve * 0.35)), j = E === "dark" ? Math.max(11, Math.min(26, 18 + ve * 0.9)) : Math.max(83, Math.min(95, Pe + 3)), q = E === "dark" ? Math.max(22, Math.min(40, 30 + ve)) : Math.max(70, Math.min(88, 82 + ve * 0.38)), ne = E === "dark" ? Math.max(16, Math.min(30, 22 + ve)) : Math.max(78, Math.min(92, Pe - 2));
        H.surfaceBg = `hsl(${_e} ${Ne}% ${Be}%)`, H.bubbleAiBg = `hsl(${_e} ${Math.max(0, Ne - 2)}% ${j}%)`, H.subtle = `hsl(${_e} ${Math.max(0, Ne - 4)}% ${Pe}%)`, H.border = `hsl(${_e} ${Math.max(0, Ne - 5)}% ${q}%)`, H.hover = `hsl(${_e} ${Math.max(0, Ne - 3)}% ${ne}%)`;
      }
    }
    const re = jo(h.forms), Q = xo(h.actions).filter(
      (E) => re.some((ie) => ie.id === E.form_id)
    ), le = h.forms_enabled === !0 && re.length > 0 && Q.length > 0, I = h.chat_available !== !1, M = h.transcribe_available !== !1 && I, B = h.forms_available !== !1 && le;
    return {
      ...de,
      companyId: t,
      enabled: te,
      helpPageEnabled: L,
      apiUrl: i,
      name: h.company_name || de.name,
      title: h.bot_name || de.title,
      avatar: typeof (p == null ? void 0 : p.avatar_url) == "string" && p.avatar_url.trim() !== "" ? p.avatar_url : de.avatar,
      welcomeHeadline: h.bot_name ? `Ćaskajte sa ${h.bot_name}` : de.welcomeHeadline,
      welcomeMessage: h.welcome_message || de.welcomeMessage,
      placeholder: T.messagePlaceholder || de.placeholder,
      suggestedQuestions: z,
      contactFields: C.length > 0 ? C : de.contactFields,
      contact: {
        enabled: typeof ((r = h.contact) == null ? void 0 : r.enabled) == "boolean" ? h.contact.enabled : (o = de.contact) == null ? void 0 : o.enabled,
        title: typeof ((l = h.contact) == null ? void 0 : l.title) == "string" && h.contact.title.trim() !== "" ? h.contact.title : (s = de.contact) == null ? void 0 : s.title,
        subtitle: typeof ((u = h.contact) == null ? void 0 : u.subtitle) == "string" && h.contact.subtitle.trim() !== "" ? h.contact.subtitle : (d = de.contact) == null ? void 0 : d.subtitle,
        submitLabel: typeof ((f = h.contact) == null ? void 0 : f.submit_label) == "string" && h.contact.submit_label.trim() !== "" ? h.contact.submit_label : (v = de.contact) == null ? void 0 : v.submitLabel
      },
      poweredBy: h.show_branding !== void 0 ? h.show_branding : de.poweredBy,
      position: h.position || de.position,
      accentGradient: Array.isArray(h.accent_gradient) ? h.accent_gradient : [],
      content: {
        ...de.content || {},
        ...T
      },
      chatAvailable: I,
      transcribeAvailable: M,
      formsAvailable: B,
      formsEnabled: le,
      forms: re,
      actions: Q,
      theme: A,
      cssVars: Z,
      colors: {
        ...de.colors,
        primaryColor: O,
        bubbleUserBg: O,
        sendAccent: (P == null ? void 0 : P.sendAccent) || (T.accentColorForSendIconEnabled ? O : T.themeMode === "dark" ? "#e5e7eb" : "#111827"),
        headerBg: H.headerBg,
        headerFg: H.headerFg,
        surfaceBg: H.surfaceBg,
        bubbleAiBg: H.bubbleAiBg,
        textFg: H.textFg,
        mutedFg: H.mutedFg,
        border: H.border,
        hover: H.hover,
        subtle: H.subtle
      }
    };
  } catch (c) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", c), { ...de, companyId: t, apiUrl: i, mockMode: !1, configLoadFailed: !0 };
  }
}
const ko = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-window-shadow: none;--pitaj-shadow: var(--pitaj-window-shadow, none);--pitaj-launcher-shadow: none;--pitaj-launcher-shadow-hover: none;--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host([data-theme="dark"]),.pitaj-root.pitaj-theme-dark,.pitaj-root[data-theme=dark]{color-scheme:dark}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:var(--pitaj-window-shadow, none);border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:none}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent)}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-question-line{stroke-dasharray:30;animation:pitaj-question-draw 2.8s ease-in-out infinite}.pitaj-ai-spinner .pitaj-question-dot,.pitaj-ai-spinner .pitaj-question-spark{animation:pitaj-question-pulse 2.8s ease-in-out infinite}.pitaj-ai-spinner .pitaj-question-spark-one{animation-delay:-.7s}.pitaj-ai-spinner .pitaj-question-spark-two{animation-delay:-1.4s}@keyframes pitaj-question-draw{0%,to{stroke-dashoffset:30;opacity:.45}45%,65%{stroke-dashoffset:0;opacity:1}}@keyframes pitaj-question-pulse{0%,to{opacity:.25}45%,65%{opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media(prefers-reduced-motion:reduce){.pitaj-ai-spinner .pitaj-question-line,.pitaj-ai-spinner .pitaj-question-dot,.pitaj-ai-spinner .pitaj-question-spark,.pitaj-thinking-spinner,.pitaj-thinking-indicator .pitaj-thinking-text{animation:none}.pitaj-thinking-indicator .pitaj-thinking-text{background:none;-webkit-text-fill-color:currentColor}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--pitaj-launcher-border, rgba(255, 255, 255, .16));box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media(max-width:640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.pitaj-human-chip{align-self:center;padding:4px 10px;border-radius:999px;font-size:12px;line-height:1.4;color:var(--pitaj-accent);background:var(--pitaj-accent-soft)}.pitaj-operator-label{font-size:11px;font-weight:600;line-height:1.3;color:var(--pitaj-accent);padding:0 4px}.pitaj-root.is-backstage-layout{position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:100%!important;height:100%!important;min-height:550px!important;max-width:none!important;display:flex!important;flex-direction:column!important;background:var(--pitaj-surface)!important;color:var(--pitaj-fg)!important;font-family:var(--font-satoshi-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)!important;box-sizing:border-box!important;pointer-events:auto!important}.pitaj-backstage-root{display:flex;flex-direction:column;width:100%;height:100%;min-height:100%;overflow:hidden;background:var(--pitaj-surface);box-sizing:border-box}.pitaj-backstage-root *,.pitaj-backstage-root *:before,.pitaj-backstage-root *:after{box-sizing:border-box}.pitaj-backstage-header{height:56px;border-bottom:1px solid var(--pitaj-border);display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;background:var(--pitaj-surface);flex-shrink:0}.pitaj-backstage-header-left{display:flex;align-items:center;gap:8px;min-width:0}.pitaj-backstage-header-right{display:flex;align-items:center;gap:8px}.pitaj-backstage-brand{display:flex;align-items:center;gap:10px}.pitaj-backstage-avatar{width:28px;height:28px;border-radius:50%;object-fit:cover;border:1px solid var(--pitaj-border)}.pitaj-backstage-avatar-fallback{width:28px;height:28px;border-radius:50%;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted)}.pitaj-backstage-brand-text{display:flex;align-items:center;gap:8px}.pitaj-backstage-brand-name{font-weight:700;font-size:15px;color:var(--pitaj-fg);letter-spacing:-.01em}.pitaj-backstage-brand-badge{font-size:11px;padding:2px 8px;border-radius:999px;background:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:500}.pitaj-backstage-divider{color:var(--pitaj-muted);opacity:.45;font-size:14px}.pitaj-backstage-header-title{font-size:14px;font-weight:500;color:var(--pitaj-fg);max-width:240px}.pitaj-backstage-back-btn{display:flex;align-items:center;gap:4px;font-size:15px;font-weight:700;background:none;border:none;color:var(--pitaj-fg);cursor:pointer;padding:0;transition:opacity .15s}.pitaj-backstage-back-btn:hover{opacity:.8}.pitaj-backstage-icon-btn{height:34px;padding:0 12px;border-radius:8px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-fg);display:flex;align-items:center;gap:6px;cursor:pointer;font-size:13px;font-weight:500;transition:all .15s}.pitaj-backstage-icon-btn:hover{background:var(--pitaj-hover)}.pitaj-backstage-icon-btn.pitaj-btn-primary{background:var(--pitaj-fg)!important;color:var(--pitaj-surface)!important;border-color:var(--pitaj-fg)!important}.pitaj-backstage-icon-btn.pitaj-btn-primary:hover{opacity:.9}.pitaj-btn-label{display:inline-block}@media(max-width:600px){.pitaj-btn-label{display:none}}.pitaj-backstage-banner{padding:10px 16px;font-size:13px;text-align:center}.pitaj-backstage-banner.error{background:var(--pitaj-danger-soft);color:var(--pitaj-danger);border-bottom:1px solid rgba(239,68,68,.2)}.pitaj-backstage-main{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden;position:relative}.pitaj-backstage-overview-wrap{flex:1;overflow-y:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2.5rem 1rem}.pitaj-backstage-overview{width:100%;max-width:672px;display:flex;flex-direction:column;gap:1.5rem;margin:auto}.pitaj-backstage-hero{display:flex;flex-direction:column;gap:4px}.pitaj-backstage-hero-title{font-size:30px;font-weight:700;color:var(--pitaj-fg);margin:0;letter-spacing:-.025em;line-height:1.2}.pitaj-backstage-hero-subtitle{font-size:15px;color:var(--pitaj-muted);margin:0;line-height:1.5}.pitaj-backstage-input-card{background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:16px;padding:14px 16px;box-shadow:0 1px 3px #0000000d;transition:border-color .15s,box-shadow .15s;display:flex;flex-direction:column;width:100%}.pitaj-backstage-input-card:focus-within{border-color:#0f172a59;box-shadow:0 0 0 1px #0f172a1f}.pitaj-backstage-input-card.bottom{max-width:768px;margin:0 auto}.pitaj-backstage-textarea{width:100%;border:none;outline:none;background:transparent;font-family:inherit;font-size:14.5px;line-height:1.5;color:var(--pitaj-fg);resize:none;min-height:40px;max-height:180px;box-sizing:border-box;padding:0}.pitaj-backstage-textarea::placeholder{color:var(--pitaj-muted);opacity:.7}.pitaj-backstage-input-actions{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:6px}.pitaj-backstage-input-tools{display:flex;align-items:center;gap:4px}.pitaj-backstage-tool-btn{width:32px;height:32px;border-radius:8px;border:none;background:transparent;color:var(--pitaj-muted);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s,color .15s}.pitaj-backstage-tool-btn:hover{background:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-backstage-tool-btn.is-recording{color:var(--pitaj-danger);background:var(--pitaj-danger-soft);animation:pitaj-recording-pulse 1.4s infinite}@keyframes pitaj-recording-pulse{0%{transform:scale(1)}50%{transform:scale(1.12)}to{transform:scale(1)}}.pitaj-backstage-send-btn{width:34px;height:34px;border-radius:50%;border:none;background:var(--pitaj-fg);color:var(--pitaj-surface);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity .15s,transform .1s}.pitaj-backstage-send-btn:hover:not(:disabled){opacity:.9;transform:scale(1.04)}.pitaj-backstage-send-btn:disabled{opacity:.25;cursor:not-allowed}.pitaj-backstage-attachments-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border)}.pitaj-backstage-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 8px;border-radius:6px;background:var(--pitaj-hover);border:1px solid var(--pitaj-border);font-size:12px;color:var(--pitaj-fg)}.pitaj-chip-name{max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-chip-remove{background:none;border:none;padding:2px;color:var(--pitaj-muted);cursor:pointer;display:flex;align-items:center}.pitaj-chip-remove:hover{color:var(--pitaj-fg)}.pitaj-backstage-prompt-section{display:flex;flex-direction:column;gap:8px;margin-top:4px}.pitaj-backstage-prompt-heading{font-size:12px;font-weight:600;color:var(--pitaj-muted);text-transform:uppercase;letter-spacing:.05em}.pitaj-backstage-prompt-pills{display:flex;flex-wrap:wrap;gap:8px}.pitaj-backstage-prompt-pill{padding:8px 16px;border-radius:999px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);font-size:13px;font-weight:500;color:var(--pitaj-fg);cursor:pointer;transition:all .15s;box-shadow:0 1px 2px #00000005}.pitaj-backstage-prompt-pill:hover{border-color:var(--pitaj-fg);background:var(--pitaj-hover)}.pitaj-backstage-footer-branding{display:flex;justify-content:center;margin-top:1rem}.pitaj-backstage-branding-link{display:flex;align-items:center;gap:5px;font-size:11.5px;color:var(--pitaj-muted);text-decoration:none;opacity:.7;transition:opacity .15s}.pitaj-backstage-branding-link:hover{opacity:1}.pitaj-backstage-conv-container{display:flex;flex-direction:column;height:100%;width:100%;min-height:0}.pitaj-backstage-messages-scroll{flex:1;overflow-y:auto;overflow-x:hidden;scroll-behavior:smooth}.pitaj-backstage-messages-inner{max-width:768px;width:100%;margin:0 auto;padding:24px 16px;display:flex;flex-direction:column;gap:20px}.pitaj-backstage-msg-row{display:flex;gap:12px;width:100%}.pitaj-backstage-msg-row.is-user{justify-content:flex-end}.pitaj-backstage-msg-row.is-ai{justify-content:flex-start}.pitaj-backstage-msg-avatar{width:30px;height:30px;border-radius:50%;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;overflow:hidden;border:1px solid var(--pitaj-border)}.pitaj-backstage-msg-avatar img{width:100%;height:100%;object-fit:cover}.pitaj-backstage-msg-content-wrap{display:flex;flex-direction:column;gap:4px;max-width:82%}.is-user .pitaj-backstage-msg-content-wrap{align-items:flex-end}.pitaj-backstage-msg-bubble{font-size:14.5px;line-height:1.6}.is-user .pitaj-backstage-msg-bubble{background:var(--pitaj-fg);color:var(--pitaj-surface);border-radius:18px 18px 4px;padding:10px 16px;box-shadow:0 1px 2px #0000000a}.is-ai .pitaj-backstage-msg-bubble{background:transparent;color:var(--pitaj-fg);padding:2px 0}.pitaj-backstage-msg-actions{display:flex;align-items:center;gap:10px;margin-top:4px;font-size:12px;color:var(--pitaj-muted)}.pitaj-msg-time{font-size:11px;opacity:.8}.pitaj-action-btn{background:none;border:none;color:var(--pitaj-muted);cursor:pointer;padding:3px;border-radius:4px;display:flex;align-items:center;transition:color .15s}.pitaj-action-btn:hover{color:var(--pitaj-fg)}.pitaj-action-btn.is-active{color:var(--pitaj-accent)}.pitaj-feedback-group{display:flex;align-items:center;gap:4px}.pitaj-backstage-sources{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:6px}.pitaj-sources-title{font-size:11px;font-weight:600;color:var(--pitaj-muted)}.pitaj-source-badge{font-size:11px;padding:2px 8px;border-radius:6px;background:var(--pitaj-hover);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-backstage-inline-widget{margin-top:10px;width:100%}.pitaj-backstage-bottom-input-wrap{border-top:1px solid var(--pitaj-border);background:var(--pitaj-surface);padding:14px 16px 16px;flex-shrink:0}.pitaj-backstage-history-container{flex:1;overflow-y:auto;padding:24px 16px;display:flex;justify-content:center}.pitaj-backstage-history-inner{max-width:768px;width:100%;display:flex;flex-direction:column;gap:16px}.pitaj-history-search-input{width:100%;height:40px;border-radius:10px;border:1px solid var(--pitaj-border);padding:0 14px;font-size:13.5px;background:var(--pitaj-surface);color:var(--pitaj-fg);outline:none;box-sizing:border-box}.pitaj-history-search-input:focus{border-color:var(--pitaj-fg)}.pitaj-backstage-empty-history{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 16px;text-align:center;gap:8px}.pitaj-empty-icon{color:var(--pitaj-muted);opacity:.5;margin-bottom:8px}.pitaj-backstage-empty-history h3{font-size:16px;font-weight:600;margin:0;color:var(--pitaj-fg)}.pitaj-backstage-empty-history p{font-size:13.5px;color:var(--pitaj-muted);margin:0 0 16px}.pitaj-backstage-history-list{display:flex;flex-direction:column;gap:10px}.pitaj-backstage-history-item{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:12px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);cursor:pointer;transition:all .15s}.pitaj-backstage-history-item:hover{background:var(--pitaj-hover);border-color:var(--pitaj-fg)}.pitaj-backstage-history-item.is-active{border-color:var(--pitaj-accent);background:var(--pitaj-accent-soft)}.pitaj-history-item-body{display:flex;flex-direction:column;gap:3px;min-width:0}.pitaj-history-item-title{font-weight:600;font-size:14px;color:var(--pitaj-fg)}.pitaj-history-item-preview{font-size:13px;color:var(--pitaj-muted)}.pitaj-history-item-date{font-size:11px;color:var(--pitaj-muted);opacity:.75;margin-top:2px}.pitaj-history-item-delete{background:none;border:none;color:var(--pitaj-muted);padding:6px;border-radius:6px;cursor:pointer;transition:color .15s}.pitaj-history-item-delete:hover{color:var(--pitaj-danger);background:var(--pitaj-danger-soft)}', yo = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", qe = {};
function ka(t, e) {
  (qe[t] || []).forEach((a) => {
    try {
      a(e);
    } catch (r) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, r);
    }
  });
}
function _o(t, e = !1) {
  let i = document.getElementById(t);
  return i || (i = document.createElement("div"), i.id = t, e ? (i.style.width = "100%", i.style.height = "100%", i.style.minHeight = "550px", i.style.overflow = "visible") : (i.style.position = "fixed", i.style.zIndex = "2147483647", i.style.bottom = "0", i.style.right = "0", i.style.width = "0", i.style.height = "0", i.style.overflow = "visible", i.style.pointerEvents = "none"), document.body.appendChild(i)), i;
}
function So(t, e) {
  const i = e.initialConfig || {}, a = !!(e.isPreview || i.isPreview || t.isPreview), r = e.previewDraft || i.previewDraft || t.previewDraft, o = e.layout || i.layout || t.layout || "bubble";
  let l = i.enabled !== void 0 ? i.enabled : t.enabled;
  (o === "backstage" || o === "help_page") && (i.enabled !== void 0 ? l = i.enabled : t.helpPageEnabled !== void 0 && (l = t.helpPageEnabled));
  const s = {
    ...t,
    ...i,
    enabled: l,
    isPreview: a,
    previewDraft: r,
    mockMode: a ? !0 : i.mockMode ?? t.mockMode,
    position: e.position || i.position || t.position || "bottom-right",
    layout: o,
    apiUrl: e.apiUrl || i.apiUrl || t.apiUrl,
    colors: { ...t.colors || {}, ...i.colors || {} },
    content: { ...t.content || {}, ...i.content || {} },
    features: { ...t.features || {}, ...i.features || {} },
    theme: i.colors ? void 0 : i.theme || t.theme,
    cssVars: i.colors ? void 0 : i.cssVars || t.cssVars
  };
  if (r) {
    if (r.action) {
      const u = r.action;
      s.actions = [u, ...(s.actions || []).filter((d) => d.id !== u.id)];
    }
    if (r.form) {
      const u = r.form;
      s.forms = [u, ...(s.forms || []).filter((d) => d.id !== u.id)], s.formsAvailable = !0, s.formsEnabled = !0;
    }
    if (r.widget) {
      const u = r.widget;
      s.widgets = [u, ...(s.widgets || []).filter((d) => d.id !== u.id)];
    }
  }
  return s;
}
const _t = /* @__PURE__ */ new WeakMap();
async function ei(t, e = {}) {
  const i = _t.get(t), a = async () => {
    var h, k;
    const o = e.widgetId || e.companyId || "default", l = !!(e.isPreview || (h = e.initialConfig) != null && h.isPreview || o === "preview"), s = l && o === "preview" ? { ...de, companyId: o, apiUrl: e.apiUrl, mockMode: !0 } : await wo(o, e.apiUrl), u = So(s, e);
    if (!l && u.configLoadFailed && (u.layout === "backstage" || u.layout === "help_page"))
      return { unavailableReason: "configuration", unmount: () => {
      } };
    if (u.enabled === !1 || u.blocked === !0)
      return {
        controller: void 0,
        unavailableReason: u.blocked ? "blocked" : "disabled",
        unmount: () => {
        }
      };
    let d = t.shadowRoot;
    d || (d = t.attachShadow({ mode: "open" })), d.innerHTML = "";
    const f = document.createElement("style");
    f.textContent = ko, d.appendChild(f);
    const v = document.createElement("div");
    v.className = "pitaj-shadow-mount", d.appendChild(v);
    const c = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((k = t.closest) != null && k.call(t, "[data-pitaj-preview]")));
    if (c) {
      const z = document.createElement("style");
      z.textContent = yo, d.appendChild(z);
    }
    _i(
      /* @__PURE__ */ n(
        ho,
        {
          config: u,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: c,
          initialScreen: e.initialScreen,
          onEvent: ka
        }
      ),
      v
    );
    const b = Ve();
    return b && (t.__pitajController = b), {
      controller: b,
      unmount: () => {
        _i(null, v), d && (d.innerHTML = "");
      }
    };
  }, r = (i || Promise.resolve()).then(a, a);
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
    const i = await ei(t, e);
    return ht = i.unmount, i;
  },
  unmount: () => {
    ht && (ht(), ht = null);
  },
  init: async (t) => {
    const e = t.layout === "backstage" || t.layout === "help_page", i = _o(t.containerId || "pitaj-io-widget-root", e), a = await ei(i, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      layout: t.layout,
      startOpen: t.startOpen,
      isInline: t.isInline ?? e,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return ht = a.unmount, a;
  },
  open: () => {
    var t;
    return (t = Ve()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = Ve()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = Ve()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = Ve()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = Ve()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = Ve()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = Ve()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    qe[t] || (qe[t] = []), qe[t].push(e);
  },
  off: (t, e) => {
    qe[t] && (qe[t] = qe[t].filter((i) => i !== e));
  },
  emit: (t, e) => {
    ka(t, e);
  }
};
class Mo extends HTMLElement {
  constructor() {
    super(...arguments);
    We(this, "unmountFn", null);
  }
  async connectedCallback() {
    const i = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", a = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, r = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", o = this.getAttribute("layout") || this.getAttribute("data-layout") || void 0, l = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", s = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true" || o === "backstage" || o === "help_page", { unmount: u } = await ei(this, { widgetId: i, apiUrl: a, position: r, layout: o, startOpen: l, isInline: s });
    this.unmountFn = u;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function Ki(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const i = t.getAttribute("data-api-url") || void 0, a = t.getAttribute("data-position") || "bottom-right", r = t.getAttribute("data-layout") || t.getAttribute("layout") || void 0, o = t.getAttribute("data-start-open") === "true", l = t.getAttribute("data-inline") === "true" || r === "backstage" || r === "help_page";
  return { companyId: e, apiUrl: i, position: a, layout: r, startOpen: o, isInline: l };
}
var Yi;
if (typeof window < "u") {
  const t = ((Yi = window.PitajIO) == null ? void 0 : Yi._q) || [];
  window.PitajIO = St, customElements.get("pitaj-io") || customElements.define("pitaj-io", Mo);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, St.init(e).then(() => {
      t.forEach(({ method: i, args: a }) => {
        const r = St[i];
        typeof r == "function" && r(...a);
      });
    });
  else {
    const i = document.currentScript;
    let a = Ki(i);
    if (!a) {
      const r = Array.prototype.slice.call(document.scripts || []);
      for (let o = r.length - 1; o >= 0; o--) {
        const l = r[o];
        if (l.src && /widget(\.iife)?\.js/i.test(l.src) && (a = Ki(l), a))
          break;
      }
    }
    a && St.init({ containerId: "pitaj-io-widget-root", ...a });
  }
}
export {
  zn as $,
  oe as A,
  Ut as B,
  Eo as C,
  Ko as D,
  Ht as E,
  fa as F,
  za as G,
  An as H,
  Xo as I,
  Jo as J,
  qo as K,
  Vo as L,
  $o as M,
  Qo as N,
  Bo as O,
  Rt as P,
  Wo as Q,
  kn as R,
  Ee as S,
  Ze as T,
  Lo as U,
  In as V,
  Do as W,
  Zo as X,
  Go as Y,
  Io as Z,
  Yo as _,
  ca as a,
  er as a0,
  zo as a1,
  ri as a2,
  sa as a3,
  Ho as a4,
  Uo as a5,
  Ro as a6,
  Fo as a7,
  Oo as a8,
  St as a9,
  yn as b,
  Ct as c,
  K as d,
  Co as e,
  To as f,
  Po as g,
  ee as h,
  Ao as i,
  Oe as j,
  wa as k,
  ga as l,
  ha as m,
  ua as n,
  Hn as o,
  Ln as p,
  pe as q,
  ja as r,
  Tn as s,
  R as t,
  n as u,
  Pn as v,
  Re as w,
  Oi as x,
  En as y,
  xa as z
};
