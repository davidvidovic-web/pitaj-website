var rr = Object.defineProperty;
var ir = (t, e, i) => e in t ? rr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var me = (t, e, i) => ir(t, typeof e != "symbol" ? e + "" : e, i);
var Ee, q, wt, he, it, jt, Nt, Fe, Ce, ye, Mt, Ze, Oe, Ve, Te = {}, Le = [], ar = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Pe = Array.isArray;
function de(t, e) {
  for (var i in e) t[i] = e[i];
  return t;
}
function Ge(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function nr(t, e, i) {
  var n, o, a, c = {};
  for (a in e) a == "key" ? n = e[a] : a == "ref" ? o = e[a] : c[a] = e[a];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? Ee.call(arguments, 2) : i), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) c[a] === void 0 && (c[a] = t.defaultProps[a]);
  return ze(t, c, n, o, null);
}
function ze(t, e, i, n, o) {
  var a = { type: t, props: e, key: i, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++wt, __i: -1, __u: 0 };
  return o == null && q.vnode != null && q.vnode(a), a;
}
function oe(t) {
  return t.children;
}
function $e(t, e) {
  this.props = t, this.context = e;
}
function ke(t, e) {
  if (e == null) return t.__ ? ke(t.__, t.__i + 1) : null;
  for (var i; e < t.__k.length; e++) if ((i = t.__k[e]) != null && i.__e != null) return i.__e;
  return typeof t.type == "function" ? ke(t) : null;
}
function or(t) {
  if (t.__P && t.__d) {
    var e = t.__v, i = e.__e, n = [], o = [], a = de({}, e);
    a.__v = e.__v + 1, q.vnode && q.vnode(a), Qe(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [i] : null, n, i ?? ke(e), !!(32 & e.__u), o), a.__v = e.__v, a.__.__k[a.__i] = a, $t(n, a, o), e.__e = e.__ = null, a.__e != i && St(a);
  }
}
function St(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), St(t);
}
function at(t) {
  (!t.__d && (t.__d = !0) && he.push(t) && !Be.__r++ || it != q.debounceRendering) && ((it = q.debounceRendering) || jt)(Be);
}
function Be() {
  try {
    for (var t, e = 1; he.length; ) he.length > e && he.sort(Nt), t = he.shift(), e = he.length, or(t);
  } finally {
    he.length = Be.__r = 0;
  }
}
function It(t, e, i, n, o, a, c, h, u, l, f) {
  var k, d, m, p, _, T, y = n && n.__k || Le, M = e.length;
  for (u = cr(i, e, y, u, M), k = 0; k < M; k++) (m = i.__k[k]) != null && (d = m.__i != -1 && y[m.__i] || Te, m.__i = k, T = Qe(t, m, d, o, a, c, h, u, l, f), p = m.__e, m.ref && d.ref != m.ref && (d.ref && Ye(d.ref, null, m), f.push(m.ref, m.__c || p, m)), _ == null && p != null && (_ = p), 4 & m.__u ? (u = Ct(m, u, t), d.__e && (d.__e = null)) : typeof m.type == "function" && T !== void 0 ? u = T : p && (u = p.nextSibling), m.__u &= -7);
  return i.__e = _, u;
}
function cr(t, e, i, n, o) {
  var a, c, h, u, l, f = i.length, k = f, d = 0;
  for (t.__k = new Array(o), a = 0; a < o; a++) (c = e[a]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[a] = ze(null, c, null, null, null) : Pe(c) ? c = t.__k[a] = ze(oe, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[a] = ze(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[a] = c, u = a + d, c.__ = t, c.__b = t.__b + 1, h = null, (l = c.__i = sr(c, i, u, k)) != -1 && (k--, (h = i[l]) && (h.__u |= 2)), h == null || h.__v == null ? (l == -1 && (o > f ? d-- : o < f && d++), typeof c.type != "function" && (c.__u |= 4)) : l != u && (l == u - 1 ? d-- : l == u + 1 ? d++ : (l > u ? d-- : d++, c.__u |= 4))) : t.__k[a] = null;
  if (k) for (a = 0; a < f; a++) (h = i[a]) != null && (2 & h.__u) == 0 && (h.__e == n && (n = ke(h)), Tt(h, h));
  return n;
}
function Ct(t, e, i) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = Ct(n[o], e, i));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = ke(t)), e = i.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function sr(t, e, i, n) {
  var o, a, c, h = t.key, u = t.type, l = e[i], f = l != null && (2 & l.__u) == 0;
  if (l === null && h == null || f && h == l.key && u == l.type) return i;
  if (n > (f ? 1 : 0)) {
    for (o = i - 1, a = i + 1; o >= 0 || a < e.length; ) if ((l = e[c = o >= 0 ? o-- : a++]) != null && (2 & l.__u) == 0 && h == l.key && u == l.type) return c;
  }
  return -1;
}
function nt(t, e, i) {
  e[0] == "-" ? t.setProperty(e, i ?? "") : t[e] = i == null ? "" : typeof i != "number" || ar.test(e) ? i : i + "px";
}
function Me(t, e, i, n, o) {
  var a, c;
  e: if (e == "style") if (typeof i == "string") t.style.cssText = i;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) i && e in i || nt(t.style, e, "");
    if (i) for (e in i) n && i[e] == n[e] || nt(t.style, e, i[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(Mt, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = i, i ? n ? i[ye] = n[ye] : (i[ye] = Ze, t.addEventListener(e, a ? Ve : Oe, a)) : t.removeEventListener(e, a ? Ve : Oe, a);
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
function ot(t) {
  return function(e) {
    if (this.l) {
      var i = this.l[e.type + t];
      if (e[Ce] == null) e[Ce] = Ze++;
      else if (e[Ce] < i[ye]) return;
      return i(q.event ? q.event(e) : e);
    }
  };
}
function Qe(t, e, i, n, o, a, c, h, u, l) {
  var f, k, d, m, p, _, T, y, M, w, I, s, B, C, F, W, U = e.type;
  if (e.constructor !== void 0) return null;
  128 & i.__u && (u = !!(32 & i.__u), a = [h = e.__e = i.__e]), (f = q.__b) && f(e);
  e: if (typeof U == "function") {
    k = c.length;
    try {
      if (M = e.props, w = U.prototype && U.prototype.render, I = (f = U.contextType) && n[f.__c], s = f ? I ? I.props.value : f.__ : n, i.__c ? y = (d = e.__c = i.__c).__ = d.__E : (w ? e.__c = d = new U(M, s) : (e.__c = d = new $e(M, s), d.constructor = U, d.render = lr), I && I.sub(d), d.state || (d.state = {}), d.__n = n, m = d.__d = !0, d.__h = [], d._sb = []), w && d.__s == null && (d.__s = d.state), w && U.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = de({}, d.__s)), de(d.__s, U.getDerivedStateFromProps(M, d.__s))), p = d.props, _ = d.state, d.__v = e, m) w && U.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), w && d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (w && U.getDerivedStateFromProps == null && M !== p && d.componentWillReceiveProps != null && d.componentWillReceiveProps(M, s), e.__v == i.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(M, d.__s, s) === !1) {
          e.__v != i.__v && (d.props = M, d.state = d.__s, d.__d = !1), e.__e = i.__e, e.__k = i.__k, e.__k.some(function(G) {
            G && (G.__ = e);
          }), Le.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && c.push(d), h = ke(i);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(M, d.__s, s), w && d.componentDidUpdate != null && d.__h.push(function() {
          d.componentDidUpdate(p, _, T);
        });
      }
      if (d.context = s, d.props = M, d.__P = t, d.__e = !1, B = q.__r, C = 0, w) d.state = d.__s, d.__d = !1, B && B(e), f = d.render(d.props, d.state, d.context), Le.push.apply(d.__h, d._sb), d._sb = [];
      else do
        d.__d = !1, B && B(e), f = d.render(d.props, d.state, d.context), d.state = d.__s;
      while (d.__d && ++C < 25);
      d.state = d.__s, d.getChildContext != null && (n = de(de({}, n), d.getChildContext())), w && !m && d.getSnapshotBeforeUpdate != null && (T = d.getSnapshotBeforeUpdate(p, _)), F = f != null && f.type === oe && f.key == null ? At(f.props.children) : f, h = It(t, Pe(F) ? F : [F], e, i, n, o, a, c, h, u, l), d.base = e.__e, e.__u &= -161, d.__h.length && c.push(d), y && (d.__E = d.__ = null);
    } catch (G) {
      if (c.length = k, e.__v = null, u || a != null) {
        if (G.then) {
          for (e.__u |= u ? 160 : 128; h && h.nodeType == 8 && h.nextSibling; ) h = h.nextSibling;
          a != null && (a[a.indexOf(h)] = null), e.__e = h;
        } else if (a != null) for (W = a.length; W--; ) Ge(a[W]);
      } else e.__e = i.__e;
      e.__k == null && (e.__k = i.__k || []), G.then || zt(e), q.__e(G, e, i);
    }
  } else a == null && e.__v == i.__v ? (e.__k = i.__k, e.__e = i.__e) : h = e.__e = dr(i.__e, e, i, n, o, a, c, u, l);
  return (f = q.diffed) && f(e), 128 & e.__u ? void 0 : h;
}
function zt(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(zt));
}
function $t(t, e, i) {
  for (var n = 0; n < i.length; n++) Ye(i[n], i[++n], i[++n]);
  q.__c && q.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      q.__e(a, o.__v);
    }
  });
}
function At(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Pe(t) ? t.map(At) : t.constructor !== void 0 ? null : de({}, t);
}
function dr(t, e, i, n, o, a, c, h, u) {
  var l, f, k, d, m, p, _, T = i.props || Te, y = e.props, M = e.type;
  if (M == "svg" ? o = "http://www.w3.org/2000/svg" : M == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (l = 0; l < a.length; l++) if ((m = a[l]) && "setAttribute" in m == !!M && (M ? m.localName == M : m.nodeType == 3)) {
      t = m, a[l] = null;
      break;
    }
  }
  if (t == null) {
    if (M == null) return document.createTextNode(y);
    t = document.createElementNS(o, M, y.is && y), h && (q.__m && q.__m(e, a), h = !1), a = null;
  }
  if (M == null) T === y || h && t.data == y || (t.data = y);
  else {
    if (a = M == "textarea" && y.defaultValue != null ? null : a && Ee.call(t.childNodes), !h && a != null) for (T = {}, l = 0; l < t.attributes.length; l++) T[(m = t.attributes[l]).name] = m.value;
    for (l in T) m = T[l], l == "dangerouslySetInnerHTML" ? k = m : l == "children" || l in y || l == "value" && "defaultValue" in y || l == "checked" && "defaultChecked" in y || Me(t, l, null, m, o);
    for (l in y) m = y[l], l == "children" ? d = m : l == "dangerouslySetInnerHTML" ? f = m : l == "value" ? p = m : l == "checked" ? _ = m : h && typeof m != "function" || T[l] === m || Me(t, l, m, T[l], o);
    if (f) h || k && (f.__html == k.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (k && (t.innerHTML = ""), It(e.type == "template" ? t.content : t, Pe(d) ? d : [d], e, i, n, M == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, c, a ? a[0] : i.__k && ke(i, 0), h, u), a != null) for (l = a.length; l--; ) Ge(a[l]);
    h && M != "textarea" || (l = "value", M == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[l] || M == "progress" && !p || M == "option" && p != T[l]) && Me(t, l, p, T[l], o), l = "checked", _ != null && _ != t[l] && Me(t, l, _, T[l], o));
  }
  return t;
}
function Ye(t, e, i) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    q.__e(o, i);
  }
}
function Tt(t, e, i) {
  var n, o;
  if (q.unmount && q.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || Ye(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (a) {
      q.__e(a, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && Tt(n[o], e, i || typeof t.type != "function");
  i || Ge(t.__e), t.__c = t.__ = t.__e = void 0;
}
function lr(t, e, i) {
  return this.constructor(t, i);
}
function ct(t, e, i) {
  var n, o, a, c;
  e == document && (e = document.documentElement), q.__ && q.__(t, e), o = (n = !1) ? null : e.__k, a = [], c = [], Qe(e, t = e.__k = nr(oe, null, [t]), o || Te, Te, e.namespaceURI, o ? null : e.firstChild ? Ee.call(e.childNodes) : null, a, o ? o.__e : e.firstChild, n, c), $t(a, t, c), t.props.children = null;
}
Ee = Le.slice, q = { __e: function(t, e, i, n) {
  for (var o, a, c; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(t)), c = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), c = o.__d), c) return o.__E = o;
  } catch (h) {
    t = h;
  }
  throw t;
} }, wt = 0, $e.prototype.setState = function(t, e) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = de({}, this.state), typeof t == "function" && (t = t(de({}, i), this.props)), t && de(i, t), t != null && this.__v && (e && this._sb.push(e), at(this));
}, $e.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), at(this));
}, $e.prototype.render = oe, he = [], jt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Nt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Be.__r = 0, Fe = Math.random().toString(8), Ce = "__d" + Fe, ye = "__a" + Fe, Mt = /(PointerCapture)$|Capture$/i, Ze = 0, Oe = ot(!1), Ve = ot(!0);
var hr = 0;
function r(t, e, i, n, o, a) {
  e || (e = {});
  var c, h, u = e;
  if ("ref" in u) for (h in u = {}, e) h == "ref" ? c = e[h] : u[h] = e[h];
  var l = { type: t, props: u, key: i, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --hr, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof t == "function" && (c = t.defaultProps)) for (h in c) u[h] === void 0 && (u[h] = c[h]);
  return q.vnode && q.vnode(l), l;
}
var we, te, Re, st, je = 0, Lt = [], re = q, dt = re.__b, lt = re.__r, ht = re.diffed, ut = re.__c, pt = re.unmount, ft = re.__;
function Je(t, e) {
  re.__h && re.__h(te, t, je || e), je = 0;
  var i = te.__H || (te.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function D(t) {
  return je = 1, ur(Dt, t);
}
function ur(t, e, i) {
  var n = Je(we++, 2);
  if (n.t = t, !n.__c && (n.__ = [Dt(void 0, e), function(h) {
    var u = n.__N ? n.__N[0] : n.__[0], l = n.t(u, h);
    u !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = te, !te.__f)) {
    var o = function(h, u, l) {
      if (!n.__c.__H) return !0;
      var f = !1, k = n.__c.props !== h;
      if (n.__c.__H.__.some(function(m) {
        if (m.__N) {
          f = !0;
          var p = m.__[0];
          m.__ = m.__N, m.__N = void 0, p !== m.__[0] && (k = !0);
        }
      }), a) {
        var d = a.call(this, h, u, l);
        return f ? d || k : d;
      }
      return !f || k;
    };
    te.__f = !0;
    var a = te.shouldComponentUpdate, c = te.componentWillUpdate;
    te.componentWillUpdate = function(h, u, l) {
      if (this.__e) {
        var f = a;
        a = void 0, o(h, u, l), a = f;
      }
      c && c.call(this, h, u, l);
    }, te.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function ie(t, e) {
  var i = Je(we++, 3);
  !re.__s && Bt(i.__H, e) && (i.__ = t, i.u = e, te.__H.__h.push(i));
}
function ee(t) {
  return je = 5, ue(function() {
    return { current: t };
  }, []);
}
function ue(t, e) {
  var i = Je(we++, 7);
  return Bt(i.__H, e) && (i.__ = t(), i.__H = e, i.__h = t), i.__;
}
function Q(t, e) {
  return je = 8, ue(function() {
    return t;
  }, e);
}
function pr() {
  for (var t; t = Lt.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Ae), e.__h.some(qe), e.__h = [];
    } catch (i) {
      e.__h = [], re.__e(i, t.__v);
    }
  }
}
re.__b = function(t) {
  te = null, dt && dt(t);
}, re.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ft && ft(t, e);
}, re.__r = function(t) {
  lt && lt(t), we = 0;
  var e = (te = t.__c).__H;
  e && (Re === te ? (e.__h = [], te.__h = [], e.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (e.__h.some(Ae), e.__h.some(qe), e.__h = [], we = 0)), Re = te;
}, re.diffed = function(t) {
  ht && ht(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Lt.push(e) !== 1 && st === re.requestAnimationFrame || ((st = re.requestAnimationFrame) || fr)(pr)), e.__H.__.some(function(i) {
    i.u && (i.__H = i.u, i.u = void 0);
  })), Re = te = null;
}, re.__c = function(t, e) {
  e.some(function(i) {
    try {
      i.__h.some(Ae), i.__h = i.__h.filter(function(n) {
        return !n.__ || qe(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], re.__e(n, i.__v);
    }
  }), ut && ut(t, e);
}, re.unmount = function(t) {
  pt && pt(t);
  var e, i = t.__c;
  i && i.__H && (i.__H.__.some(function(n) {
    try {
      Ae(n);
    } catch (o) {
      e = o;
    }
  }), i.__H = void 0, e && re.__e(e, i.__v));
};
var mt = typeof requestAnimationFrame == "function";
function fr(t) {
  var e, i = function() {
    clearTimeout(n), mt && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(i, 35);
  mt && (e = requestAnimationFrame(i));
}
function Ae(t) {
  var e = te, i = t.__c;
  typeof i == "function" && (t.__c = void 0, i()), te = e;
}
function qe(t) {
  var e = te;
  t.__c = t.__(), te = e;
}
function Bt(t, e) {
  return !t || t.length !== e.length || e.some(function(i, n) {
    return i !== t[n];
  });
}
function Dt(t, e) {
  return typeof e == "function" ? e(t) : e;
}
async function mr(t, e) {
  const i = t.body;
  if (!i)
    throw new Error("Response body is null");
  const n = i.getReader(), o = new TextDecoder("utf-8");
  let a = "";
  try {
    for (; ; ) {
      const { done: c, value: h } = await n.read();
      if (c)
        break;
      a += o.decode(h, { stream: !0 });
      const u = a.split(/\r?\n/);
      a = u.pop() || "";
      for (const l of u) {
        const f = l.trim();
        if (!(!f || f.startsWith(":")) && f.startsWith("data:")) {
          const k = f.slice(5).trim();
          if (k === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const d = JSON.parse(k);
            typeof d == "string" ? e.onChunk(d) : d && typeof d == "object" && ((d.chunk || d.token || d.content || d.text) && e.onChunk(d.chunk || d.token || d.content || d.text), d.sources && Array.isArray(d.sources) && e.onSources && e.onSources(d.sources), d.suggestedQuestions && Array.isArray(d.suggestedQuestions) && e.onSuggestedQuestions && e.onSuggestedQuestions(d.suggestedQuestions), e.onConversationId && (d.conversation_id !== void 0 || d.conversationId !== void 0) && e.onConversationId(
              d.conversation_id ?? d.conversationId
            ), e.onActionTrigger && d.triggered_action && typeof d.triggered_action == "object" && e.onActionTrigger(d.triggered_action));
          } catch {
            e.onChunk(k);
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
class Et extends Error {
  constructor(i, n = 60, o) {
    super(i);
    me(this, "retryAfterSeconds");
    me(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = o;
  }
}
class Pt extends Error {
  constructor(i, n, o, a) {
    super(i);
    me(this, "status");
    me(this, "code");
    me(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = o, this.retryAfterSeconds = a;
  }
}
function gr(t, e) {
  const i = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(i) && i > 0 ? Math.floor(i) : e;
}
async function kr(t, e) {
  const i = await t.json().catch(() => null);
  Ft(t.status, i, e, t.headers.get("Retry-After"));
}
function Ft(t, e, i, n) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, a = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || i, c = gr((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new Et(a, c, o) : new Pt(a, t, o, c);
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
function br(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return Xe(e.of(t));
  } catch {
    return null;
  }
}
function vr() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const i = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (i) {
        const n = JSON.parse(i);
        t = Rt(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = Xe(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = br(t)), { code: t, name: e };
}
const xr = [
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
async function _r(t, e) {
  const i = t.toLowerCase(), n = xr.find(
    (u) => u.keywords.some((l) => i.includes(l))
  ), o = n ? n.reply : `${gt[Math.floor(Math.random() * gt.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, a = n ? n.sources : [], c = n ? n.suggestions : ["Kako funkcionira AI model?", "Mogu li dobiti kontakt podrške?"], h = o.split(" ");
  for (let u = 0; u < h.length; u++) {
    const l = h[u] + (u < h.length - 1 ? " " : "");
    e.onChunk(l), await new Promise((f) => setTimeout(f, 20 + Math.random() * 20));
  }
  e.onSources && a.length > 0 && e.onSources(a), e.onSuggestedQuestions && c.length > 0 && e.onSuggestedQuestions(c), e.onDone && e.onDone();
}
async function yr(t) {
  const {
    companyId: e,
    conversationId: i,
    visitorId: n,
    message: o,
    forceNewConversation: a,
    apiUrl: c,
    mockMode: h,
    visitorName: u,
    visitorEmail: l,
    visitorPhone: f,
    visitorCountryCode: k,
    visitorCountryName: d,
    callbacks: m
  } = t;
  if (h || !e || e === "default") {
    await _r(o, m);
    return;
  }
  const p = (c || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), _ = vr(), T = Rt(k) ?? _.code ?? void 0, y = Xe(d) ?? _.name ?? void 0, M = `${p}/api/widget/${e}/chat`, w = i && !i.startsWith("conv-") ? parseInt(i, 10) : null, I = await fetch(M, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: w,
      force_new_conversation: a === !0,
      visitor_id: n,
      visitor_name: u || void 0,
      visitor_email: l || void 0,
      visitor_phone: f || void 0,
      visitor_country_code: T,
      visitor_country_name: y
    })
  });
  if (I.ok || await kr(I, `API greška (${I.status})`), (I.headers.get("Content-Type") || "").includes("text/event-stream"))
    await mr(I, m);
  else {
    const B = await I.json(), C = B.answer || B.message || "";
    if (B.conversation_id !== void 0 && m.onConversationId && m.onConversationId(B.conversation_id), B.triggered_action && m.onActionTrigger && m.onActionTrigger(B.triggered_action), C && C.trim()) {
      const F = C.split(" ");
      for (let W = 0; W < F.length; W++) {
        const U = F[W] + (W < F.length - 1 ? " " : "");
        m.onChunk(U), await new Promise((G) => setTimeout(G, 15));
      }
    }
    m.onDone && m.onDone();
  }
}
async function wr(t, e, i, n, o) {
  const a = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !a)
    return await new Promise((u) => setTimeout(u, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: i };
  const c = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), h = await fetch(`${c}/api/widget/${t}/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ satisfaction: i })
  });
  if (!h.ok) {
    const u = await h.json().catch(() => ({}));
    throw new Error(u.error || `Rating failed (${h.status})`);
  }
  return await h.json();
}
const kt = "pitaj_io_visitor_id", jr = "chat_direkt_visitor_id", Nr = "pitaj_io_visitor_meta", Mr = "chat_direkt_visitor_meta";
function Ht(t) {
  return `pitaj_io_convs_${t}`;
}
function Sr(t) {
  return `chat_direkt_convs_${t}`;
}
function Ir() {
  try {
    let t = localStorage.getItem(kt) || localStorage.getItem(jr);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(kt, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Cr = [];
function zr(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function $r(t) {
  return t.filter((e) => !zr(e));
}
function bt(t) {
  try {
    const e = localStorage.getItem(Ht(t)) || localStorage.getItem(Sr(t));
    if (e) {
      const i = JSON.parse(e);
      if (Array.isArray(i))
        return $r(i);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return Cr;
}
function Ar(t, e) {
  try {
    localStorage.setItem(Ht(t), JSON.stringify(e));
  } catch (i) {
    console.warn("[Pitaj.io] Error saving to localStorage", i);
  }
}
function Tr(t, e) {
  const [i, n] = D(t), [o, a] = D((e == null ? void 0 : e.startOpen) ?? !1), [c, h] = D((e == null ? void 0 : e.initialScreen) ?? "new-conversation"), [u, l] = D(
    () => bt(t.companyId)
  ), [f, k] = D(() => {
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const g = bt(t.companyId);
      return g.length > 0 ? g[0].id : null;
    }
    return null;
  }), [d, m] = D(!1), [p, _] = D(null), [T, y] = D(null), M = ee(Ir()), [w, I] = D(() => {
    try {
      const g = localStorage.getItem(Nr) || localStorage.getItem(Mr);
      if (g) {
        const x = JSON.parse(g), A = {};
        return typeof x.name == "string" && (A.name = x.name), typeof x.email == "string" && (A.email = x.email), typeof x.phone == "string" && (A.phone = x.phone), A;
      }
    } catch (g) {
      console.warn("[Pitaj.io] Error reading visitor meta", g);
    }
    return {};
  }), s = ee(e == null ? void 0 : e.emitEvent);
  s.current = e == null ? void 0 : e.emitEvent;
  const B = ee(e == null ? void 0 : e.onActionTrigger);
  B.current = e == null ? void 0 : e.onActionTrigger;
  const C = Q((g) => {
    const x = Number.isFinite(g) ? Math.max(1, Math.floor(g)) : 60;
    _((A) => A === null ? x : Math.max(A, x)), y(`Previše zahtjeva. Molimo sačekajte ${x}s.`);
  }, []), F = Q((g) => {
    if (g) {
      if (g === "WIDGET_CHAT_DISABLED") {
        n((x) => ({ ...x, chatAvailable: !1 })), y("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (g === "WIDGET_TRANSCRIBE_DISABLED") {
        n((x) => ({ ...x, transcribeAvailable: !1 })), y("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      g === "WIDGET_FORMS_DISABLED" && (n((x) => ({ ...x, formsAvailable: !1, formsEnabled: !1 })), y("Forme su trenutno privremeno nedostupne."));
    }
  }, []), W = Q((g, x = "Greška pri obradi zahtjeva.") => {
    var O, H, E;
    if (g instanceof Et) {
      C(g.retryAfterSeconds), (O = s.current) == null || O.call(s, "error_occurred", { code: g.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (g instanceof Pt) {
      F(g.code), y(g.message || x), (H = s.current) == null || H.call(s, "error_occurred", { status: g.status, code: g.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    const A = g instanceof Error ? g.message : x;
    y(A || x), (E = s.current) == null || E.call(s, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [C, F]);
  ie(() => {
    Ar(i.companyId, u);
  }, [u, i.companyId]), ie(() => {
    if (p === null || p <= 0) return;
    const g = setInterval(() => {
      _((x) => x && x > 1 ? x - 1 : null);
    }, 1e3);
    return () => clearInterval(g);
  }, [p]);
  const U = u.find((g) => g.id === f) || null, G = u.reduce((g, x) => g + (x.unread || 0), 0), R = Q((g) => {
    a((x) => {
      var A;
      return x === g ? x : ((A = s.current) == null || A.call(s, g ? "widget_opened" : "widget_closed"), g);
    });
  }, []), J = Q((g) => {
    h((x) => {
      var A;
      return x === g ? x : ((A = s.current) == null || A.call(s, "screen_changed", { screen: g }), g);
    });
  }, []), ae = Q((g) => {
    var x;
    k(g.id), l(
      (A) => A.map((O) => O.id === g.id ? { ...O, unread: 0, status: "active" } : O)
    ), h("conversation"), (x = s.current) == null || x.call(s, "conversation_selected", { conversationId: g.id });
  }, []), Z = Q(() => {
    var g;
    l(
      (x) => x.map((A) => A.id === f ? { ...A, status: "ended" } : A)
    ), k(null), h("new-conversation"), (g = s.current) == null || g.call(s, "conversation_ended", { conversationId: f });
  }, [f]), Y = Q((g) => {
    l((x) => x.filter((A) => A.id !== g)), k((x) => x === g ? null : x), f === g && h("new-conversation");
  }, [f]), j = Q((g) => {
    var E;
    if (i.chatAvailable === !1) {
      y("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (p !== null) {
      y(`Previše zahtjeva. Molimo sačekajte ${p}s.`);
      return;
    }
    const x = "conv-" + Date.now(), A = (/* @__PURE__ */ new Date()).toISOString(), O = g ? g.length > 40 ? g.slice(0, 40) + "…" : g : "Novo ćaskanje", H = {
      id: x,
      title: O,
      preview: g || "Započeto novo ćaskanje",
      timestamp: A,
      unread: 0,
      messages: g ? [
        {
          id: "msg-" + Date.now(),
          content: g,
          sender: "user",
          timestamp: A,
          status: "sent"
        }
      ] : []
    };
    l((v) => [H, ...v]), k(x), h("conversation"), (E = s.current) == null || E.call(s, "conversation_started", { conversationId: x, initialMessage: g }), g && $(x, g, [H.messages[0]], !0);
  }, [i.apiUrl, i.chatAvailable, i.companyId, i.mockMode, p, w]), $ = async (g, x, A, O = !1) => {
    var v;
    m(!0), y(null);
    const H = "ai-msg-" + Date.now(), E = {
      id: H,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    l(
      (L) => L.map((N) => N.id !== g ? N : {
        ...N,
        preview: x,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...N.messages.filter((S) => S.id !== H), E]
      })
    ), (v = s.current) == null || v.call(s, "stream_started", { conversationId: g });
    try {
      await yr({
        companyId: i.companyId,
        conversationId: g,
        visitorId: M.current,
        message: x,
        forceNewConversation: O || g.startsWith("conv-"),
        apiUrl: i.apiUrl,
        mockMode: i.mockMode,
        visitorName: w.name,
        visitorEmail: w.email,
        visitorPhone: w.phone,
        callbacks: {
          onConversationId: (L) => {
            const N = g, S = String(L);
            g = S, k(S), l(
              (ne) => ne.map((P) => P.id === N || P.messages.some((ce) => ce.id === H) ? { ...P, id: S } : P)
            );
          },
          onActionTrigger: (L) => {
            var S;
            const N = L.widget || L.triggered_widget || (L.widget_id && i.widgets ? i.widgets.find((ne) => ne.id === L.widget_id) : null) || null;
            N && l(
              (ne) => ne.map((P) => P.id === g || P.messages.some((se) => se.id === H) ? {
                ...P,
                messages: P.messages.map(
                  (se) => se.id === H ? { ...se, widget: N } : se
                )
              } : P)
            ), (S = B.current) == null || S.call(B, L);
          },
          onChunk: (L) => {
            l(
              (N) => N.map((S) => S.id === g || S.messages.some((P) => P.id === H) ? {
                ...S,
                messages: S.messages.map(
                  (P) => P.id === H ? { ...P, content: P.content + L } : P
                )
              } : S)
            );
          },
          onSources: (L) => {
            l(
              (N) => N.map((S) => S.id === g || S.messages.some((P) => P.id === H) ? {
                ...S,
                messages: S.messages.map(
                  (P) => P.id === H ? { ...P, sources: L } : P
                )
              } : S)
            );
          },
          onSuggestedQuestions: (L) => {
            l(
              (N) => N.map((S) => S.id === g || S.messages.some((P) => P.id === H) ? {
                ...S,
                messages: S.messages.map(
                  (P) => P.id === H ? { ...P, suggestedQuestions: L } : P
                )
              } : S)
            );
          },
          onDone: () => {
            var L;
            l(
              (N) => N.map((S) => {
                var tt, rt;
                if (!(S.id === g || S.messages.some((fe) => fe.id === H))) return S;
                const P = S.messages.find((fe) => fe.id === H), ce = (tt = P == null ? void 0 : P.widget) == null ? void 0 : tt.name, se = (rt = P == null ? void 0 : P.content) == null ? void 0 : rt.trim(), Ne = se ? se.slice(0, 70) : ce ? `[${ce}]` : S.preview;
                return {
                  ...S,
                  preview: Ne,
                  messages: S.messages.map(
                    (fe) => fe.id === H ? { ...fe, isStreaming: !1 } : fe
                  )
                };
              })
            ), m(!1), (L = s.current) == null || L.call(s, "stream_completed", { conversationId: g });
          },
          onError: (L) => {
            console.error("[Pitaj.io] Stream error:", L), y(L.message || "Došlo je do greške u komunikaciji."), m(!1);
          }
        }
      });
    } catch (L) {
      m(!1), W(L, "Greška pri slanju poruke.");
    }
  }, V = Q((g) => {
    var H;
    const x = g.trim();
    if (!x || d || i.chatAvailable === !1 || p !== null) return;
    if (!f) {
      j(x);
      return;
    }
    const O = {
      id: "usr-msg-" + Date.now(),
      content: x,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    l(
      (E) => E.map((v) => v.id !== f ? v : {
        ...v,
        preview: x,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...v.messages, O]
      })
    ), (H = s.current) == null || H.call(s, "message_sent", { conversationId: f, content: x }), $(f, x, U ? U.messages : []);
  }, [f, d, j, U, i.chatAvailable, i.companyId, i.apiUrl, i.mockMode, p]), b = Q(
    async (g, x) => {
      var A;
      if (!i.mockMode)
        try {
          await wr(
            i.companyId,
            g,
            x,
            i.apiUrl,
            i.mockMode
          );
        } catch (O) {
          console.error("[Pitaj.io] Failed to submit rating:", O), y(O.message || "Greška pri slanju ocijene.");
          return;
        }
      l(
        (O) => O.map(
          (H) => H.id === g ? { ...H, satisfaction: x } : H
        )
      ), (A = s.current) == null || A.call(s, "rating_submitted", {
        conversationId: g,
        satisfaction: x
      });
    },
    [i.companyId, i.apiUrl, i.mockMode]
  ), z = Q(
    (g, x, A = "user") => {
      const O = x.trim();
      if (!O) return;
      const H = (/* @__PURE__ */ new Date()).toISOString(), E = `conv-${Date.now()}`, v = typeof g == "string" && g.trim().length > 0 ? g : E, L = {
        id: `local-${A}-msg-${Date.now()}`,
        content: O,
        sender: A,
        timestamp: H,
        status: "sent"
      };
      l(
        (N) => N.some((S) => S.id === v) ? N.map((S) => S.id !== v ? S : {
          ...S,
          preview: O.length > 70 ? `${O.slice(0, 70)}…` : O,
          timestamp: H,
          messages: [...S.messages, L]
        }) : [
          {
            id: v,
            title: "Forma",
            preview: O.length > 70 ? `${O.slice(0, 70)}…` : O,
            timestamp: H,
            unread: 0,
            messages: [L],
            status: "active"
          },
          ...N
        ]
      ), k(v), h("conversation");
    },
    []
  ), K = (g) => {
    var x;
    return !!((x = g.messages) != null && x.some((A) => A.sender === "ai"));
  };
  return {
    config: i,
    setConfig: n,
    isOpen: o,
    setIsOpen: R,
    screen: c,
    setScreen: J,
    conversations: u,
    activeConversation: U,
    activeConversationId: f,
    visitorContact: w,
    visitorId: M.current,
    activeConversationHasReply: U ? K(U) : !1,
    totalUnread: G,
    isStreaming: d,
    rateLimitTimer: p,
    errorBanner: T,
    setErrorBanner: y,
    selectConversation: ae,
    startNewConversation: j,
    endConversation: Z,
    deleteConversation: Y,
    sendUserMessage: V,
    submitSatisfaction: b,
    appendConversationMessage: z,
    handleApiError: W
  };
}
let He = null, Ut = null;
function vt(t, e) {
  e === null && t !== null && He !== null && He !== t || (He = e ? t : null, Ut = e);
}
function le() {
  return Ut;
}
function Ot(t, e) {
  let i = null;
  const n = () => i || (i = t().then((o) => {
    const a = e ? e(o) : o.default;
    if (!a)
      throw new Error("Lazy component not found");
    return a;
  }));
  return function(a) {
    const [c, h] = D(null);
    return ie(() => {
      let u = !0;
      return n().then((l) => {
        u && h(() => l);
      }).catch((l) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", l);
      }), () => {
        u = !1;
      };
    }, []), c ? /* @__PURE__ */ r(c, { ...a }) : /* @__PURE__ */ r("div", { className: "chat-direkt-lazy-loading", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" })
    ] });
  };
}
function De({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ r("path", { d: "M5 3v4" }),
    /* @__PURE__ */ r("path", { d: "M19 17v4" }),
    /* @__PURE__ */ r("path", { d: "M3 5h4" }),
    /* @__PURE__ */ r("path", { d: "M17 19h4" })
  ] });
}
function Vt({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "m22 2-7 20-4-9-9-4Z" }),
    /* @__PURE__ */ r("path", { d: "M22 2 11 13" })
  ] });
}
function Lr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ r("path", { d: "M19 12H5" })
  ] });
}
function pe({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ r("path", { d: "m6 6 12 12" })
  ] });
}
function Br({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function ra({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M12 5v14" }),
    /* @__PURE__ */ r("path", { d: "M5 12h14" })
  ] });
}
function be({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "M20 6 9 17l-5-5" }) });
}
function Dr({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function Er({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ r("path", { d: "M12 8v6" }),
    /* @__PURE__ */ r("path", { d: "M9 11h6" })
  ] });
}
function qt({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function Pr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ r("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function Fr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function Rr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ r("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ r("path", { d: "M12 7v5l4 2" })
  ] });
}
function Hr({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ r("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ r("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function Wt({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ r("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function Kt({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("rect", { x: "9", y: "2", width: "6", height: "12", rx: "3" }),
    /* @__PURE__ */ r("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ r("path", { d: "M12 19v3" }),
    /* @__PURE__ */ r("path", { d: "M8 22h8" })
  ] });
}
function Ur({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: /* @__PURE__ */ r("path", { d: "M8 8h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Zm-3 7H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1h-2V4H4v9h1v2Z" }) });
}
function Or({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: /* @__PURE__ */ r("path", { d: "M3 10h4v11H3V10Zm6 11h8.5a2 2 0 0 0 1.96-1.61l1.18-6A2 2 0 0 0 18.68 11H14V6.5A2.5 2.5 0 0 0 11.5 4L9 8v13Z" }) });
}
function Vr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: /* @__PURE__ */ r("path", { d: "M17 14h4V3h-4v11ZM15 3H6.5a2 2 0 0 0-1.96 1.61l-1.18 6A2 2 0 0 0 5.32 13H10v4.5A2.5 2.5 0 0 0 12.5 20L15 16V3Z" }) });
}
function Zt({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function qr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M8 2v4" }),
    /* @__PURE__ */ r("path", { d: "M16 2v4" }),
    /* @__PURE__ */ r("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M3 10h18" })
  ] });
}
function ia({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M12 16V4" }),
    /* @__PURE__ */ r("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ r("path", { d: "M20 16v4H4v-4" })
  ] });
}
function aa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "m15 18-6-6 6-6" }) });
}
function na({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "m9 18 6-6-6-6" }) });
}
function oa({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "m6 9 6 6 6-6" }) });
}
function ca({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("path", { d: "M5 12h14" }) });
}
function Wr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M3 6h18" }),
    /* @__PURE__ */ r("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ r("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ r("path", { d: "M10 11v6" }),
    /* @__PURE__ */ r("path", { d: "M14 11v6" })
  ] });
}
function Kr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ r("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ r("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ r("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function Zr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M10 2v2" }),
    /* @__PURE__ */ r("path", { d: "M14 2v2" }),
    /* @__PURE__ */ r("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ r("path", { d: "M6 2v2" })
  ] });
}
function Gr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ r("path", { d: "M15 2v19" }),
    /* @__PURE__ */ r("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ r("path", { d: "M8 2v19" })
  ] });
}
function Qr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ r("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ r("path", { d: "M9 17h6" }),
    /* @__PURE__ */ r("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function Yr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ r("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ r("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function Jr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "m10 20-1.25-2.5L6 18" }),
    /* @__PURE__ */ r("path", { d: "M10 4 8.75 6.5 6 6" }),
    /* @__PURE__ */ r("path", { d: "m14 20 1.25-2.5L18 18" }),
    /* @__PURE__ */ r("path", { d: "m14 4 1.25 2.5L18 6" }),
    /* @__PURE__ */ r("path", { d: "m17 21-3-6h-4l-3 6" }),
    /* @__PURE__ */ r("path", { d: "m17 3-3 6h-4L7 3" }),
    /* @__PURE__ */ r("path", { d: "M2 12h20" }),
    /* @__PURE__ */ r("path", { d: "m20 10-2.5 1.25L18 14" }),
    /* @__PURE__ */ r("path", { d: "m4 10 2.5 1.25L6 14" }),
    /* @__PURE__ */ r("path", { d: "m20 14-2.5-1.25L18 10" }),
    /* @__PURE__ */ r("path", { d: "m4 14 2.5-1.25L6 10" })
  ] });
}
function Xr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "m6.5 6.5 11 11" }),
    /* @__PURE__ */ r("path", { d: "m21 21-1-1" }),
    /* @__PURE__ */ r("path", { d: "m3 3 1 1" }),
    /* @__PURE__ */ r("path", { d: "m18 22 4-4" }),
    /* @__PURE__ */ r("path", { d: "m2 6 4-4" }),
    /* @__PURE__ */ r("path", { d: "m3 10 7-7" }),
    /* @__PURE__ */ r("path", { d: "m14 21 7-7" })
  ] });
}
function ei({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ r("path", { d: "M7 7h.01" })
  ] });
}
function ti({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ r("path", { d: "M3 6h18" }),
    /* @__PURE__ */ r("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function ri({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ r("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ r("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function ii({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ r("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ r("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function ai({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ r("path", { d: "M12 2v2" }),
    /* @__PURE__ */ r("path", { d: "M12 20v2" }),
    /* @__PURE__ */ r("path", { d: "m4.93 4.93 1.41 1.41" }),
    /* @__PURE__ */ r("path", { d: "m17.66 17.66 1.41 1.41" }),
    /* @__PURE__ */ r("path", { d: "M2 12h2" }),
    /* @__PURE__ */ r("path", { d: "M20 12h2" }),
    /* @__PURE__ */ r("path", { d: "m6.34 17.66-1.41 1.41" }),
    /* @__PURE__ */ r("path", { d: "m19.07 4.93-1.41 1.41" })
  ] });
}
function ni({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ r("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function oi({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function ci({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ r("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function si({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ r("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ r("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function Gt({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ r(
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
        /* @__PURE__ */ r("rect", { width: "28", height: "28", rx: "2.5", fill: "#09090b" }),
        /* @__PURE__ */ r(
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
function di({
  screen: t,
  activeConversation: e,
  config: i,
  onBack: n,
  onClose: o,
  onNewConversation: a,
  onEndConversation: c,
  onDeleteConversation: h,
  onViewHistory: u,
  onViewTickets: l
}) {
  var w;
  const [f, k] = D(!1), d = ee(null), m = t === "conversation" && e, T = m || t === "history" || t === "tickets", y = i.title || i.name || "Pitaj.io AI Agent";
  ie(() => {
    var B;
    const I = (C) => {
      var W, U;
      const F = ((U = (W = C.composedPath) == null ? void 0 : W.call(C)) == null ? void 0 : U[0]) || C.target;
      d.current && F && !d.current.contains(F) && k(!1);
    };
    document.addEventListener("mousedown", I);
    const s = (B = d.current) == null ? void 0 : B.getRootNode();
    return s instanceof ShadowRoot && s.addEventListener("mousedown", I), () => {
      document.removeEventListener("mousedown", I), s instanceof ShadowRoot && s.removeEventListener("mousedown", I);
    };
  }, []), ie(() => {
    k(!1);
  }, [t]);
  const M = (I) => {
    k(!1), I == null || I();
  };
  return /* @__PURE__ */ r("header", { className: "chat-direkt-header", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-header-info", children: [
      T && /* @__PURE__ */ r(
        "button",
        {
          onClick: n,
          className: "chat-direkt-icon-btn",
          "aria-label": "Nazad",
          title: "Nazad",
          children: /* @__PURE__ */ r(Lr, { size: 18 })
        }
      ),
      /* @__PURE__ */ r("div", { className: `chat-direkt-avatar ${((w = i.content) == null ? void 0 : w.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: i.logo || i.avatar ? /* @__PURE__ */ r("img", { src: i.logo || i.avatar, alt: i.name || "AI" }) : /* @__PURE__ */ r(De, { size: 16 }) }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-header-text", children: /* @__PURE__ */ r("div", { className: "chat-direkt-header-title", children: y }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-header-actions", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-header-menu", ref: d, children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: () => k((I) => !I),
            className: `chat-direkt-icon-btn ${f ? "is-active" : ""}`,
            "aria-label": "Meni",
            "aria-expanded": f,
            title: "Meni",
            children: /* @__PURE__ */ r(Dr, { size: 18 })
          }
        ),
        f && /* @__PURE__ */ r("div", { className: "chat-direkt-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ r(
            "button",
            {
              role: "menuitem",
              className: "chat-direkt-menu-item",
              onClick: () => M(a),
              children: [
                /* @__PURE__ */ r(Er, { size: 15, className: "chat-direkt-menu-item-icon" }),
                "Nova konverzacija"
              ]
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              role: "menuitem",
              className: "chat-direkt-menu-item",
              disabled: !m,
              onClick: () => M(c),
              children: [
                /* @__PURE__ */ r(Fr, { size: 15, className: "chat-direkt-menu-item-icon" }),
                "Završi konverzaciju"
              ]
            }
          ),
          h && /* @__PURE__ */ r(
            "button",
            {
              role: "menuitem",
              className: "chat-direkt-menu-item",
              disabled: !m,
              onClick: () => M(h),
              children: [
                /* @__PURE__ */ r(Wr, { size: 15, className: "chat-direkt-menu-item-icon" }),
                "Obriši konverzaciju"
              ]
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              role: "menuitem",
              className: "chat-direkt-menu-item",
              onClick: () => M(u),
              children: [
                /* @__PURE__ */ r(Rr, { size: 15, className: "chat-direkt-menu-item-icon" }),
                "Pogledaj prethodne"
              ]
            }
          ),
          /* @__PURE__ */ r("button", { role: "menuitem", className: "chat-direkt-menu-item", onClick: () => M(l), children: [
            /* @__PURE__ */ r(Wt, { size: 15, className: "chat-direkt-menu-item-icon" }),
            "Pogledaj tikete"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: o,
          className: "chat-direkt-icon-btn",
          "aria-label": "Zatvori prozor",
          title: "Zatvori",
          children: /* @__PURE__ */ r(pe, { size: 18 })
        }
      )
    ] })
  ] });
}
function li({ content: t }) {
  if (!t)
    return /* @__PURE__ */ r("span", {});
  const e = t.split(`
`), i = [];
  let n = !1, o = [];
  for (let a = 0; a < e.length; a++) {
    const c = e[a];
    if (c.startsWith("```")) {
      n ? (i.push(
        /* @__PURE__ */ r("pre", { children: /* @__PURE__ */ r("code", { children: o.join(`
`) }) }, `code-${a}`)
      ), o = [], n = !1) : n = !0;
      continue;
    }
    if (n) {
      o.push(c);
      continue;
    }
    if (c.trim().startsWith("- ") || c.trim().startsWith("* ")) {
      const u = c.trim().slice(2);
      i.push(
        /* @__PURE__ */ r("ul", { children: /* @__PURE__ */ r("li", { children: Ue(u) }) }, `ul-${a}`)
      );
      continue;
    }
    const h = c.trim().match(/^(\d+)\.\s+(.*)/);
    if (h) {
      i.push(
        /* @__PURE__ */ r("ol", { start: parseInt(h[1], 10), children: /* @__PURE__ */ r("li", { children: Ue(h[2]) }) }, `ol-${a}`)
      );
      continue;
    }
    if (!c.trim()) {
      i.push(/* @__PURE__ */ r("div", { style: { height: "6px" } }, `sp-${a}`));
      continue;
    }
    i.push(/* @__PURE__ */ r("p", { children: Ue(c) }, `p-${a}`));
  }
  return n && o.length > 0 && i.push(
    /* @__PURE__ */ r("pre", { children: /* @__PURE__ */ r("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ r("div", { className: "chat-direkt-markdown", children: i });
}
function Ue(t) {
  const e = [];
  let i = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index > i && e.push(...xt(t.slice(i, o.index)));
    const a = o[0];
    if (a.startsWith("`") && a.endsWith("`"))
      e.push(
        /* @__PURE__ */ r("code", { children: a.slice(1, -1) }, `c-${o.index}`)
      );
    else if (a.startsWith("**") && a.endsWith("**"))
      e.push(
        /* @__PURE__ */ r("strong", { children: a.slice(2, -2) }, `b-${o.index}`)
      );
    else if (a.startsWith("*") && a.endsWith("*"))
      e.push(
        /* @__PURE__ */ r("em", { children: a.slice(1, -1) }, `i-${o.index}`)
      );
    else if (a.startsWith("[") && a.includes("](")) {
      const c = a.slice(1, a.indexOf("](")), h = a.slice(a.indexOf("](") + 2, -1);
      e.push(
        /* @__PURE__ */ r("a", { href: h, target: "_blank", rel: "noopener noreferrer", children: c }, `a-${o.index}`)
      );
    }
    i = o.index + a.length;
  }
  return i < t.length && e.push(...xt(t.slice(i))), e;
}
const hi = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, ui = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, pi = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), fi = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function xt(t) {
  const e = [];
  let i;
  for (; (i = hi.exec(t)) !== null; ) {
    const a = i[0].replace(/[.,;:!?]+$/, "");
    a && e.push({
      start: i.index,
      end: i.index + a.length,
      href: a.startsWith("www.") ? `https://${a}` : a,
      external: !0
    });
  }
  for (; (i = ui.exec(t)) !== null; )
    e.push({
      start: i.index,
      end: i.index + i[0].length,
      href: `mailto:${i[0]}`,
      external: !1
    });
  for (; (i = pi.exec(t)) !== null; ) {
    const a = i[0];
    fi.test(a) || e.push({
      start: i.index,
      end: i.index + a.length,
      href: `tel:${a.replace(/[^\d+]/g, "")}`,
      external: !1
    });
  }
  e.sort((a, c) => a.start - c.start);
  const n = [];
  let o = 0;
  for (const a of e)
    a.start < o || (a.start > o && n.push(t.slice(o, a.start)), n.push(
      /* @__PURE__ */ r(
        "a",
        {
          href: a.href,
          ...a.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: t.slice(a.start, a.end)
        },
        `l-${a.start}`
      )
    ), o = a.end);
  return o < t.length && n.push(t.slice(o)), n;
}
function We(t) {
  return (t || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function mi(t) {
  const e = We(t).toLowerCase();
  return e.includes("wi-fi") || e.includes("wifi") || e.includes("internet") ? Kr : e.includes("doručak") || e.includes("dorucak") || e.includes("kafa") || e.includes("coffee") ? Zr : e.includes("restoran") || e.includes("hrana") || e.includes("dining") ? Gr : e.includes("parking") || e.includes("garaža") || e.includes("garaza") || e.includes("auto") ? Qr : e.includes("spa") || e.includes("bazen") || e.includes("wellness") ? Yr : e.includes("klima") || e.includes("hlađenje") || e.includes("hladjenje") ? Jr : e.includes("teretana") || e.includes("fitness") || e.includes("gym") ? Xr : ei;
}
function gi({ widget: t, onAction: e }) {
  const i = t.type || "custom_html", n = t.config || {};
  if (n.jsx_template || i === "dynamic_jsx" || i === "ai_builder")
    return /* @__PURE__ */ r(Si, { config: n, onAction: e });
  switch (i) {
    case "book_demo":
      return /* @__PURE__ */ r(ki, { config: n, onAction: e });
    case "products":
      return /* @__PURE__ */ r(bi, { config: n, onAction: e });
    case "cart":
      return /* @__PURE__ */ r(vi, { config: n, onAction: e });
    case "usage_chart":
      return /* @__PURE__ */ r(xi, { config: n });
    case "upcoming_classes":
      return /* @__PURE__ */ r(_i, { config: n, onAction: e });
    case "hotel_booking":
      return /* @__PURE__ */ r(yi, { config: n, onAction: e });
    case "contact":
      return /* @__PURE__ */ r(wi, { config: n, onAction: e });
    case "weather":
      return /* @__PURE__ */ r(ji, { config: n });
    case "custom_iframe":
      return /* @__PURE__ */ r(Ni, { config: n, title: t.name });
    case "custom_html":
    default:
      return /* @__PURE__ */ r(Mi, { config: n, onAction: e });
  }
}
function et({
  fields: t,
  values: e,
  onChange: i
}) {
  return /* @__PURE__ */ r(oe, { children: t.map((n, o) => {
    const a = e[n.key] ?? (n.type === "checkbox" ? !1 : ""), c = n.key || `field_${o}`;
    if (n.type === "textarea")
      return /* @__PURE__ */ r("div", { className: "chat-direkt-widget-field", children: [
        /* @__PURE__ */ r("label", { children: [
          n.label,
          " ",
          n.required && /* @__PURE__ */ r("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ r(
          "textarea",
          {
            required: n.required,
            rows: 3,
            placeholder: n.placeholder || "",
            value: a,
            onInput: (l) => i(c, l.target.value)
          }
        )
      ] }, c);
    if (n.type === "checkbox")
      return /* @__PURE__ */ r("div", { className: "chat-direkt-widget-checkbox-row", children: [
        /* @__PURE__ */ r(
          "input",
          {
            id: `widget-chk-${c}-${o}`,
            type: "checkbox",
            required: n.required,
            checked: !!a,
            onChange: (l) => i(c, l.target.checked)
          }
        ),
        /* @__PURE__ */ r("label", { htmlFor: `widget-chk-${c}-${o}`, children: [
          n.label,
          " ",
          n.required && /* @__PURE__ */ r("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, c);
    if (n.type === "select")
      return /* @__PURE__ */ r("div", { className: "chat-direkt-widget-field", children: [
        /* @__PURE__ */ r("label", { children: [
          n.label,
          " ",
          n.required && /* @__PURE__ */ r("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ r(
          "select",
          {
            required: n.required,
            value: a,
            onChange: (l) => i(c, l.target.value),
            children: [
              /* @__PURE__ */ r("option", { value: "", children: n.placeholder || "Odaberite..." }),
              (n.options || []).map((l, f) => /* @__PURE__ */ r("option", { value: l, children: l }, f))
            ]
          }
        )
      ] }, c);
    const h = n.type === "phone" ? "tel" : n.type === "email" ? "email" : n.type === "date" ? "date" : n.type === "number" ? "number" : "text";
    let u;
    if (n.type === "date") {
      const l = c.toLowerCase();
      if (l.includes("out") || l.includes("odjav") || l.includes("end") || l.includes("do")) {
        const f = e.check_in || e.start || e.od;
        f && typeof f == "string" && (u = f);
      }
    }
    return /* @__PURE__ */ r("div", { className: "chat-direkt-widget-field", children: [
      /* @__PURE__ */ r("label", { children: [
        n.label,
        " ",
        n.required && /* @__PURE__ */ r("span", { style: { color: "#ef4444" }, children: "*" })
      ] }),
      /* @__PURE__ */ r(
        "input",
        {
          type: h,
          required: n.required,
          placeholder: n.placeholder || "",
          min: u,
          value: a,
          onInput: (l) => i(c, l.target.value)
        }
      )
    ] }, c);
  }) });
}
function ki({ config: t, onAction: e }) {
  const i = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], n = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : i, [o, a] = D({}), [c, h] = D(!1), u = t.title || "Razgovarajte sa prodajom", l = t.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.", f = (d, m) => {
    a((p) => ({ ...p, [d]: m }));
  }, k = (d) => {
    d.preventDefault();
    for (const p of n)
      if (p.required) {
        const _ = o[p.key];
        if (p.type === "checkbox" && !_ || p.type !== "checkbox" && (!_ || !String(_).trim())) return;
      }
    h(!0);
    const m = n.filter((p) => o[p.key] !== void 0 && o[p.key] !== "").map((p) => `- ${p.label}: ${p.type === "checkbox" ? "Da" : o[p.key]}`);
    e == null || e(`Forma: ${u}
${m.join(`
`)}`);
  };
  if (c) {
    const d = o.email ? ` na ${o.email}` : "";
    return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card is-success", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-icon", children: /* @__PURE__ */ r(be, { size: 20 }) }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-title", children: "Zahtjev za demo je poslan!" }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-desc", children: [
        "Naš tim će vas kontaktirati u najkraćem roku",
        d,
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-header", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-widget-title", children: u }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-widget-subtitle", children: l })
    ] }),
    /* @__PURE__ */ r("form", { onSubmit: k, className: "chat-direkt-widget-form", children: [
      /* @__PURE__ */ r(et, { fields: n, values: o, onChange: f }),
      /* @__PURE__ */ r("button", { type: "submit", className: "chat-direkt-widget-btn-primary", children: t.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function bi({ config: t, onAction: e }) {
  const [i, n] = D(0), o = [
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
  ], a = Array.isArray(t.products) && t.products.length > 0 ? t.products : o, c = a[i] || a[0], h = () => {
    n((f) => (f + 1) % a.length);
  }, u = () => {
    n((f) => (f - 1 + a.length) % a.length);
  }, l = () => {
    e == null || e(`Zanima me proizvod: ${c.name} (${c.price})`);
  };
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card products-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-bar", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-badge-icon", children: /* @__PURE__ */ r(ti, { size: 14 }) }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-bar-title", children: t.title || "Izbor artikala" }),
      a.length > 1 && /* @__PURE__ */ r("span", { className: "chat-direkt-widget-counter", children: [
        i + 1,
        " / ",
        a.length
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-product-card", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-product-image-wrap", children: [
        /* @__PURE__ */ r("img", { src: c.image, alt: c.name, className: "chat-direkt-product-img" }),
        a.length > 1 && /* @__PURE__ */ r("div", { className: "chat-direkt-carousel-controls", children: [
          /* @__PURE__ */ r("button", { type: "button", onClick: u, "aria-label": "Prethodni", className: "chat-direkt-carousel-btn", children: "‹" }),
          /* @__PURE__ */ r("button", { type: "button", onClick: h, "aria-label": "Sljedeći", className: "chat-direkt-carousel-btn", children: "›" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-product-info", children: [
        /* @__PURE__ */ r("div", { className: "chat-direkt-product-name", children: c.name }),
        /* @__PURE__ */ r("div", { className: "chat-direkt-product-sub", children: c.subtitle }),
        /* @__PURE__ */ r("div", { className: "chat-direkt-product-price", children: c.price }),
        /* @__PURE__ */ r("button", { type: "button", onClick: l, className: "chat-direkt-widget-btn-primary chat-direkt-btn-select", children: "Odaberi opcije" })
      ] })
    ] })
  ] });
}
function vi({ config: t, onAction: e }) {
  const [i, n] = D(!1), o = [
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
  ], a = Array.isArray(t.items) && t.items.length > 0 ? t.items : o, c = t.total || "40.90 KM", h = () => {
    n(!0), e == null || e(`Želim dovršiti narudžbu iz korpe (Ukupno: ${c})`);
  };
  return i ? /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card is-success", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-icon", children: /* @__PURE__ */ r(be, { size: 20 }) }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-title", children: "Narudžba je potvrđena!" }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-desc", children: [
      "Iznos od ",
      c,
      " je uspješno obrađen. Detalji su poslani."
    ] })
  ] }) : /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-bar", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-badge-icon", children: /* @__PURE__ */ r(ri, { size: 14 }) }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-bar-title", children: [
        a.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-cart-items-list", children: a.map((u) => /* @__PURE__ */ r("div", { className: "chat-direkt-cart-item-row", children: [
      /* @__PURE__ */ r("img", { src: u.image, alt: u.name, className: "chat-direkt-cart-thumb" }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-cart-details", children: [
        /* @__PURE__ */ r("div", { className: "chat-direkt-cart-item-name", children: u.name }),
        /* @__PURE__ */ r("div", { className: "chat-direkt-cart-item-sub", children: u.subtitle })
      ] }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-cart-item-price", children: u.price })
    ] }, u.id)) }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-cart-divider" }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-cart-summary", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-cart-total-val", children: c })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-cart-payment", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-cart-pay-label", children: "Plaćanje karticom" }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-cart-card-pill", children: [
        /* @__PURE__ */ r(ni, { size: 12, className: "chat-direkt-pill-icon" }),
        /* @__PURE__ */ r("span", { children: "•• 2683" })
      ] })
    ] }),
    /* @__PURE__ */ r("button", { type: "button", onClick: h, className: "chat-direkt-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function xi({ config: t }) {
  const e = t.metric_label || "Ukupno potrošeno kredita", i = t.metric_value || "2,214", n = [
    { day: "N", val: 75 },
    { day: "P", val: 40 },
    { day: "U", val: 65 },
    { day: "S", val: 85 },
    { day: "Č", val: 25 },
    { day: "P", val: 70 },
    { day: "S", val: 95 }
  ], o = Array.isArray(t.chart_data) && t.chart_data.length > 0 ? t.chart_data : n;
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-bar", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-badge-icon", children: /* @__PURE__ */ r(ii, { size: 14 }) }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-bar-title", children: t.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-chart-body", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-chart-label", children: e }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-chart-big-number", children: i }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-bar-chart-container", children: o.map((a, c) => /* @__PURE__ */ r("div", { className: "chat-direkt-bar-col", children: [
        /* @__PURE__ */ r("div", { className: "chat-direkt-bar-track", children: /* @__PURE__ */ r(
          "div",
          {
            className: "chat-direkt-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, a.val))}%` },
            title: `${a.day}: ${a.val}%`
          }
        ) }),
        /* @__PURE__ */ r("span", { className: "chat-direkt-bar-day", children: a.day })
      ] }, c)) })
    ] })
  ] });
}
function _i({ config: t, onAction: e }) {
  const [i, n] = D([]), o = [
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
  ], a = Array.isArray(t.classes) && t.classes.length > 0 ? t.classes : o, c = (h, u) => {
    const l = h.id ?? u;
    i.includes(l) || (n((f) => [...f, l]), e == null || e(`Želim rezervisati termin za: ${h.title} (${h.time})`));
  };
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-bar", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-badge-icon", children: /* @__PURE__ */ r(qr, { size: 14 }) }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-bar-title", children: t.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-classes-list", children: a.map((h, u) => {
      const l = h.id ?? u, f = i.includes(l);
      return /* @__PURE__ */ r("div", { className: "chat-direkt-class-item", children: [
        /* @__PURE__ */ r("img", { src: h.image, alt: h.title, className: "chat-direkt-class-thumb" }),
        /* @__PURE__ */ r("div", { className: "chat-direkt-class-info", children: [
          /* @__PURE__ */ r("div", { className: "chat-direkt-class-header", children: [
            /* @__PURE__ */ r("span", { className: "chat-direkt-class-title", children: h.title }),
            h.level && /* @__PURE__ */ r("span", { className: `chat-direkt-level-badge level-${h.levelColor || "green"}`, children: h.level })
          ] }),
          /* @__PURE__ */ r("div", { className: "chat-direkt-class-time", children: h.time }),
          /* @__PURE__ */ r("div", { className: "chat-direkt-class-instructor", children: h.instructor })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: () => c(h, u),
            className: `chat-direkt-book-btn ${f ? "is-booked" : ""}`,
            children: f ? "Rezervisano" : "Rezerviši"
          }
        )
      ] }, l);
    }) })
  ] });
}
function yi({ config: t, onAction: e }) {
  const [i, n] = D({}), [o, a] = D(!1), c = t.name || "Hotel Dark Moon", h = t.price || "220 KM / noć", u = t.location || "Sarajevo, Bosna i Hercegovina", l = t.rating || "4.8 (124 recenzije)", f = t.image || "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80", k = ["Wi-Fi", "Doručak", "Restoran", "Parking", "Spa & Bazen"], m = (Array.isArray(t.amenities) && t.amenities.length > 0 ? t.amenities : k).map(We), p = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], _ = Array.isArray(t.fields) ? t.fields : p, T = (M, w) => {
    n((I) => ({ ...I, [M]: w }));
  }, y = (M) => {
    if (M.preventDefault(), _.length > 0) {
      for (const I of _)
        if (I.required) {
          const s = i[I.key];
          if (I.type === "checkbox" && !s || I.type !== "checkbox" && (!s || !String(s).trim())) return;
        }
    }
    a(!0);
    const w = { ...i };
    if (w.check_in && w.check_out && w.check_out < w.check_in) {
      const I = w.check_in;
      w.check_in = w.check_out, w.check_out = I;
    }
    if (_.length > 0) {
      const I = _.filter((s) => w[s.key] !== void 0 && w[s.key] !== "").map((s) => `- ${s.label}: ${s.type === "checkbox" ? "Da" : w[s.key]}`);
      e == null || e(`Forma: Rezervacija smještaja - ${c}
${I.join(`
`)}`);
    } else
      e == null || e(`Forma: Rezervacija smještaja - ${c}
- Cijena: ${h}
- Lokacija: ${u}`);
  };
  return o ? /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card is-success", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-icon", children: /* @__PURE__ */ r(be, { size: 20 }) }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-title", children: "Zahtjev za rezervaciju je poslan!" }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-desc", children: [
      "Uspješno ste poslali upit za ",
      c,
      ". Naše osoblje će vam se javiti za potvrdu termina."
    ] })
  ] }) : /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-image-wrap", children: [
      /* @__PURE__ */ r("img", { src: f, alt: c, className: "chat-direkt-hotel-img" }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-badge-price", children: h })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-content", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-title-row", children: /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-name", children: c }) }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-meta", children: [
        /* @__PURE__ */ r("span", { className: "chat-direkt-meta-item", children: [
          /* @__PURE__ */ r(oi, { size: 12, className: "chat-direkt-meta-icon" }),
          /* @__PURE__ */ r("span", { children: u })
        ] }),
        /* @__PURE__ */ r("span", { className: "chat-direkt-meta-item chat-direkt-rating", children: [
          /* @__PURE__ */ r(ci, { size: 11, className: "chat-direkt-star-icon" }),
          /* @__PURE__ */ r("span", { children: l })
        ] })
      ] }),
      m.length > 0 && /* @__PURE__ */ r("div", { className: "chat-direkt-amenities-row", children: m.map((M, w) => {
        const I = We(M), s = mi(I);
        return /* @__PURE__ */ r("span", { className: "chat-direkt-amenity-chip", children: [
          /* @__PURE__ */ r(s, { size: 12, className: "chat-direkt-amenity-icon" }),
          /* @__PURE__ */ r("span", { children: I })
        ] }, w);
      }) }),
      /* @__PURE__ */ r("form", { onSubmit: y, className: "chat-direkt-widget-form", children: [
        _.length > 0 && /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-booking-section", children: [
          /* @__PURE__ */ r("div", { className: "chat-direkt-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ r(et, { fields: _, values: i, onChange: T })
        ] }),
        /* @__PURE__ */ r("button", { type: "submit", className: "chat-direkt-widget-btn-primary", children: t.submit_label || (_.length > 0 ? "Pošalji upit za rezervaciju" : "Rezerviši sobu") })
      ] })
    ] })
  ] });
}
function wi({ config: t, onAction: e }) {
  const i = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], n = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : i, [o, a] = D({}), [c, h] = D(!1), u = t.title || "Kontaktirajte nas", l = t.subtitle || "Rado ćemo odgovoriti na vaša pitanja", f = (d, m) => {
    a((p) => ({ ...p, [d]: m }));
  }, k = (d) => {
    d.preventDefault();
    for (const p of n)
      if (p.required) {
        const _ = o[p.key];
        if (p.type === "checkbox" && !_ || p.type !== "checkbox" && (!_ || !String(_).trim())) return;
      }
    h(!0);
    const m = n.filter((p) => o[p.key] !== void 0 && o[p.key] !== "").map((p) => `- ${p.label}: ${p.type === "checkbox" ? "Da" : o[p.key]}`);
    e == null || e(`Forma: ${u}
${m.join(`
`)}`);
  };
  return c ? /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card is-success", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-icon", children: /* @__PURE__ */ r(be, { size: 20 }) }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-title", children: "Poruka je poslana!" }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-success-desc", children: "Hvala vam na javljanju. Odgovorit ćemo vam uskoro." })
  ] }) : /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-header", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-widget-title", children: u }),
      /* @__PURE__ */ r("div", { className: "chat-direkt-widget-subtitle", children: l })
    ] }),
    /* @__PURE__ */ r("form", { onSubmit: k, className: "chat-direkt-widget-form", children: [
      /* @__PURE__ */ r(et, { fields: n, values: o, onChange: f }),
      /* @__PURE__ */ r("button", { type: "submit", className: "chat-direkt-widget-btn-primary", children: t.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function ji({ config: t }) {
  const e = t.city || "Sarajevo", i = t.temp || "22°C", n = t.condition || "Sunčano i toplo", o = t.description || "Pretežno sunčano vrijeme uz blagi povjetarac tokom popodneva.";
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-weather-top", children: [
      /* @__PURE__ */ r(ai, { size: 32, className: "chat-direkt-weather-svg" }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-weather-temp", children: i })
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-weather-city", children: e }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-weather-cond", children: n }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-weather-desc", children: o })
  ] });
}
function Ni({ config: t, title: e }) {
  const [i, n] = D(!0), o = t.url || "https://calendly.com", a = t.height || 380;
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-widget-bar", children: [
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-badge-icon", children: /* @__PURE__ */ r(si, { size: 14 }) }),
      /* @__PURE__ */ r("span", { className: "chat-direkt-widget-bar-title", children: t.title || e }),
      /* @__PURE__ */ r(
        "a",
        {
          href: o,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "chat-direkt-iframe-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-iframe-container", style: { height: `${a}px` }, children: [
      i && /* @__PURE__ */ r("div", { className: "chat-direkt-iframe-loading", children: [
        /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
        /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
        /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" })
      ] }),
      /* @__PURE__ */ r(
        "iframe",
        {
          src: o,
          title: e,
          className: "chat-direkt-iframe-frame",
          onLoad: () => n(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function Mi({ config: t, onAction: e }) {
  const i = t.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', n = t.css || "";
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card custom-html-widget", onClick: (a) => {
    var h;
    const c = (h = a.target) == null ? void 0 : h.closest("[data-chat-action]");
    if (c) {
      const u = c.getAttribute("data-chat-action");
      u && (a.preventDefault(), e == null || e(u));
    }
  }, children: [
    n && /* @__PURE__ */ r("style", { children: n }),
    /* @__PURE__ */ r("div", { dangerouslySetInnerHTML: { __html: i } })
  ] });
}
function Si({ config: t, onAction: e }) {
  const i = t.jsx_template || "", n = t.default_data || t.data || {}, o = ue(() => {
    if (!i) return "";
    try {
      let c = i;
      const h = /\{(\w+)\.map\(\((\w+)\)\s*=>\s*\(([\s\S]*?)\)\)\}/g;
      return c = c.replace(h, (u, l, f, k) => {
        const d = n[l];
        return Array.isArray(d) ? d.map((m) => {
          let p = k;
          return Object.keys(m).forEach((_) => {
            const T = m[_], y = new RegExp(
              `${f}\\.${_}\\s*\\?\\s*["']([^"']*)["']\\s*:\\s*["']([^"']*)["']`,
              "g"
            );
            p = p.replace(y, T ? "$1" : "$2");
            const M = new RegExp(`\\{?${f}\\.${_}\\}?`, "g");
            p = p.replace(M, String(T ?? ""));
          }), p;
        }).join("") : "";
      }), Object.keys(n).forEach((u) => {
        const l = n[u];
        if (typeof l == "string" || typeof l == "number") {
          const f = new RegExp(`\\{${u}\\}`, "g");
          c = c.replace(f, String(l));
        }
      }), c = c.replace(
        /<Card[^>]*size=["']?([^"'\s>]+)?["']?[^>]*status=\{\{\s*text:\s*([^,\}]+),\s*icon:\s*["']([^"']+)["']\s*\}\}[^>]*>/gi,
        '<div class="chat-direkt-inline-widget-card" style="padding: 14px; border-radius: 16px;"><div style="font-size: 11px; color: #64748b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">📦 $2</div>'
      ).replace(/<Card[^>]*>/gi, '<div class="chat-direkt-inline-widget-card" style="padding: 14px; border-radius: 16px;">').replace(/<\/Card>/gi, "</div>").replace(
        /<Row[^>]*justify=["']between["'][^>]*align=["']start["'][^>]*>/gi,
        '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">'
      ).replace(/<Row[^>]*gap=\{?(\d+)\}?[^>]*align=["']start["'][^>]*>/gi, '<div style="display: flex; gap: $1px; align-items: flex-start;">').replace(/<Row[^>]*>/gi, '<div style="display: flex; gap: 8px; align-items: center;">').replace(/<\/Row>/gi, "</div>").replace(/<Col[^>]*flex=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; flex: $1;">').replace(/<Col[^>]*gap=\{?(\d+)\}?[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: $1px;">').replace(/<Col[^>]*>/gi, '<div style="display: flex; flex-direction: column; gap: 4px;">').replace(/<\/Col>/gi, "</div>").replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*weight=["']bold["'][^>]*\/>/gi, '<h4 style="font-size: 15px; font-weight: 700; margin: 0; line-height: 1.2;">$1</h4>').replace(/<Title[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<h4 style="font-size: 14px; font-weight: 600; margin: 0;">$1</h4>').replace(/<Caption[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="font-size: 11px; color: #64748b; margin-top: 2px;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*color=["']success["'][^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #dcfce7; color: #166534;">$1</span>').replace(/<Badge[^>]*label=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: #f1f5f9; color: #475569;">$1</span>').replace(/<Divider[^>]*flush[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px -14px;" />').replace(/<Divider[^>]*\/>/gi, '<hr style="border: 0; border-bottom: 1px solid rgba(0,0,0,0.08); margin: 10px 0;" />').replace(
        /<Box[^>]*background=["']green-100["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #dcfce7; color: #166534; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(
        /<Box[^>]*background=["']surface-secondary["'][^>]*radius=["']full["'][^>]*padding=\{?(\d+)\}?[^>]*>/gi,
        '<div style="background: #f1f5f9; color: #94a3b8; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">'
      ).replace(/<Box[^>]*>/gi, '<div style="display: flex; align-items: center; justify-content: center;">').replace(/<\/Box>/gi, "</div>").replace(/<Icon[^>]*name=["']check["'][^>]*\/>/gi, "✓").replace(/<Icon[^>]*name=["']clock["'][^>]*\/>/gi, "⏱").replace(/<Icon[^>]*name=["']package["'][^>]*\/>/gi, "📦").replace(/<Icon[^>]*\/>/gi, "•").replace(/<Text[^>]*value=\{?([^}>\s]+)\}?[^>]*\/>/gi, '<p style="font-size: 12px; margin: 0; line-height: 1.3;">$1</p>').replace(
        /<Button[^>]*label=["']?([^"'>]+)["']?[^>]*action=["']?([^"'>]+)["']?[^>]*\/>/gi,
        '<button type="button" data-chat-action="$2" style="background: #0f172a; color: white; border: none; border-radius: 8px; padding: 6px 12px; font-size: 12px; font-weight: 500; cursor: pointer; margin-top: 6px;">$1</button>'
      ), c;
    } catch {
      return "";
    }
  }, [i, n]);
  return /* @__PURE__ */ r("div", { className: "chat-direkt-inline-widget-card dynamic-jsx-widget", onClick: (c) => {
    var u;
    const h = (u = c.target) == null ? void 0 : u.closest("[data-chat-action]");
    if (h) {
      const l = h.getAttribute("data-chat-action");
      l && (c.preventDefault(), e == null || e(l));
    }
  }, children: /* @__PURE__ */ r("div", { dangerouslySetInnerHTML: { __html: o } }) });
}
function Qt({
  rows: t,
  fallbackQuestions: e,
  onSelect: i,
  buttonClassName: n,
  containerClassName: o,
  revealDelayMs: a = 0,
  staggerMs: c = 140
}) {
  const h = ue(() => Array.isArray(t) && t.length > 0 ? t.map((m) => ({
    text: m.text.trim(),
    children: (m.children ?? []).map((p) => p.trim()).filter(Boolean)
  })).filter((m) => m.text !== "") : (e ?? []).map((m) => m.trim()).filter(Boolean).map((m) => ({ text: m, children: [] })), [e, t]), [u, l] = D(null), [f, k] = D(h.length);
  if (ie(() => {
    l(null);
  }, [h]), ie(() => {
    if (u) {
      k(h.length);
      return;
    }
    if (a <= 0) {
      k(h.length);
      return;
    }
    k(0);
    const m = window.setTimeout(() => {
      k(1);
      const p = window.setInterval(() => {
        k((_) => _ >= h.length ? (window.clearInterval(p), _) : _ + 1);
      }, Math.max(60, c));
    }, a);
    return () => {
      window.clearTimeout(m);
    };
  }, [u, h.length, a, c]), h.length === 0)
    return null;
  const d = h.find((m) => m.text === u && m.children.length > 0) ?? null;
  return d ? /* @__PURE__ */ r("div", { className: o, children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        onClick: () => l(null),
        className: n,
        children: "Nazad"
      }
    ),
    d.children.map((m, p) => /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        onClick: () => i(m),
        className: n,
        children: m
      },
      `${d.text}-${p}`
    ))
  ] }) : /* @__PURE__ */ r("div", { className: o, children: h.slice(0, f).map((m, p) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: () => m.children.length > 0 ? l(m.text) : i(m.text),
      className: `${n} chat-direkt-suggestion-enter`,
      children: m.text
    },
    `${m.text}-${p}`
  )) });
}
const Ii = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), Ci = [".txt", ".md", ".csv", ".json", ".xml"];
function zi(t) {
  if (Ii.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return Ci.some((i) => e.endsWith(i));
}
async function Yt(t) {
  const e = Array.from(t).slice(0, 3);
  return Promise.all(
    e.map(async (i) => {
      const n = zi(i) ? (await i.text()).slice(0, 4e3) : null;
      return {
        id: `${i.name}-${i.lastModified}-${i.size}`,
        name: i.name,
        textContent: n
      };
    })
  );
}
function Jt(t) {
  return t.length === 0 ? "" : `

${t.map((i) => i.textContent && i.textContent.trim() !== "" ? `[Prilog: ${i.name}]
${i.textContent.trim()}` : `[Prilog: ${i.name}]`).join(`

`)}`;
}
async function $i(t) {
  const { widgetId: e, audio: i, apiUrl: n } = t, o = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), a = new FormData();
  a.append("audio", i, "dictation.webm");
  const c = await fetch(`${o}/api/widget/${e}/transcribe`, {
    method: "POST",
    body: a,
    headers: {
      Accept: "application/json"
    }
  });
  if (!c.ok) {
    const l = await c.json().catch(() => null), k = (() => {
      if (c.status !== 422 || !(l != null && l.errors) || typeof l.errors != "object")
        return null;
      for (const d of Object.values(l.errors))
        if (Array.isArray(d)) {
          for (const m of d)
            if (typeof m == "string" && m.trim() !== "")
              return m;
        }
      return null;
    })();
    Ft(
      c.status,
      l,
      typeof k == "string" && k || `Transkripcija nije uspjela (${c.status})`,
      c.headers.get("Retry-After")
    );
  }
  const h = await c.json(), u = typeof (h == null ? void 0 : h.text) == "string" ? h.text.trim() : "";
  if (!u)
    throw new Error("Transkripcija nije vratila tekst.");
  return u;
}
function Xt({ widgetId: t, apiUrl: e, onTranscript: i, onError: n }) {
  const a = ee(null), c = ee(null), h = ee([]), u = ee(!0), l = ee(null), f = ee(null), k = ee(null), d = ee(null), m = ee(Array.from({ length: 42 }, () => 0.06)), [p, _] = D(!1), [T, y] = D(!1), [M, w] = D(
    () => Array.from({ length: 42 }, () => 0.06)
  ), I = ue(() => {
    var R;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((R = navigator.mediaDevices) != null && R.getUserMedia);
  }, [t]), s = Q(() => {
    c.current && (c.current.getTracks().forEach((R) => R.stop()), c.current = null);
  }, []), B = Q(() => {
    var R;
    l.current !== null && (window.cancelAnimationFrame(l.current), l.current = null), (R = d.current) == null || R.disconnect(), d.current = null, k.current = null, f.current && (f.current.close(), f.current = null);
  }, []), C = Q(() => {
    const R = Array.from({ length: 42 }, () => 0.06);
    m.current = R, w(R);
  }, []), F = Q((R) => {
    const J = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!J)
      return;
    const ae = new J(), Z = ae.createAnalyser();
    Z.fftSize = 2048, Z.smoothingTimeConstant = 0.78;
    const Y = ae.createMediaStreamSource(R);
    Y.connect(Z), f.current = ae, k.current = Z, d.current = Y;
    const j = new Uint8Array(Z.fftSize), $ = () => {
      const V = k.current;
      if (!V) return;
      V.getByteTimeDomainData(j);
      let b = 0;
      for (let x = 0; x < j.length; x += 1) {
        const A = (j[x] - 128) / 128;
        b += A * A;
      }
      const z = Math.sqrt(b / j.length), K = Math.max(0.04, Math.min(1, z * 5.2)), g = m.current.slice(1);
      g.push(K), m.current = g, w(g), l.current = window.requestAnimationFrame($);
    };
    l.current = window.requestAnimationFrame($);
  }, []), W = Q(async () => {
    if (!(!I || T || a.current || p))
      try {
        const J = await navigator.mediaDevices.getUserMedia({ audio: !0 }), ae = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], Y = typeof MediaRecorder.isTypeSupported == "function" ? ae.find(($) => MediaRecorder.isTypeSupported($)) : void 0, j = Y ? new MediaRecorder(J, { mimeType: Y }) : new MediaRecorder(J);
        h.current = [], u.current = !0, c.current = J, a.current = j, C(), F(J), j.ondataavailable = ($) => {
          $.data.size > 0 && h.current.push($.data);
        }, j.onstop = async () => {
          _(!1);
          const $ = new Blob(h.current, { type: j.mimeType || "audio/webm" });
          if (h.current = [], a.current = null, s(), B(), $.size === 0) {
            C();
            return;
          }
          if (!u.current) {
            C();
            return;
          }
          y(!0);
          try {
            const V = await $i({
              widgetId: t,
              apiUrl: e,
              audio: $
            });
            i(V);
          } catch (V) {
            console.error("[Pitaj.io] Dictation transcription failed", V), n == null || n(V);
          } finally {
            y(!1), C();
          }
        }, j.onerror = () => {
          _(!1), a.current = null, s(), B(), C();
        }, j.start(), _(!0);
      } catch (J) {
        _(!1), s(), B(), C(), console.error("[Pitaj.io] Dictation microphone access failed", J);
      }
  }, [e, p, T, I, n, i, C, F, s, B, t]), U = Q(() => {
    const R = a.current;
    !R || !p || T || (u.current = !0, R.stop(), _(!1));
  }, [p, T]), G = Q(() => {
    const R = a.current;
    !R || !p || (u.current = !1, R.stop(), _(!1));
  }, [p]);
  return ie(() => () => {
    const R = a.current;
    R && R.state !== "inactive" && R.stop(), s(), B();
  }, [s, B]), {
    isSupported: I,
    isListening: p,
    isProcessing: T,
    waveformLevels: M,
    start: W,
    stopAndTranscribe: U,
    cancel: G
  };
}
function Ai(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ti(t) {
  const e = t.split(`
`).map((a) => a.trim()).filter((a) => a.length > 0);
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
  const o = e.slice(1).map((a) => {
    if (!a.startsWith("- ") && !a.startsWith("* ")) return null;
    const c = a.slice(2), h = c.indexOf(":");
    if (h < 1) return null;
    const u = c.slice(0, h).trim(), l = c.slice(h + 1).trim();
    return !u || !l ? null : { label: u, value: l };
  }).filter((a) => !!a);
  return o.length < 1 ? null : { title: i, entries: o };
}
function Li({
  conversation: t,
  config: e,
  isStreaming: i,
  rateLimitCountdown: n,
  errorBanner: o,
  onSendMessage: a,
  onApiError: c,
  onSubmitSatisfaction: h
}) {
  var j, $, V;
  const [u, l] = D(""), [f, k] = D(!1), [d, m] = D(null), [p, _] = D([]), T = ee(null), y = ee(null), M = ee(null), w = e.content || {}, I = e.chatAvailable === !1, s = e.transcribeAvailable === !1, B = i || n !== null || I, C = Xt({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: Q((b) => {
      l((z) => z ? `${z} ${b}` : b);
    }, []),
    onError: Q((b) => {
      c == null || c(b, "Greška pri transkripciji.");
    }, [c])
  });
  ie(() => {
    const b = T.current;
    b && (b.scrollTop = b.scrollHeight);
  }, [t.messages, i]), ie(() => {
    const b = y.current;
    b && (b.style.height = "auto", b.style.height = `${Math.min(b.scrollHeight, 96)}px`);
  }, [u]), ie(() => {
    k(!1);
  }, [w.dismissibleNotice]);
  const F = (b) => {
    const z = (b ?? u).trim();
    if (!z && p.length === 0 || B) return;
    const K = `${z}${Jt(p)}`.trim();
    a(K), _([]), b || (l(""), y.current && (y.current.style.height = "auto"));
  }, W = (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), F());
  }, U = w.messagePlaceholder || e.placeholder || "Pitajte bilo šta...", G = ((j = w.dismissibleNotice) == null ? void 0 : j.trim()) || "", R = (($ = w.footerText) == null ? void 0 : $.trim()) || "", J = w.showSuggestedMessages === !1 || w.keepShowingSuggestedMessages !== !0 ? [] : w.suggestedMessageRows || [], ae = ((V = [...t.messages].reverse().find((b) => b.sender === "ai")) == null ? void 0 : V.id) ?? null, Z = C.isListening, Y = async (b, z) => {
    navigator.clipboard && (await navigator.clipboard.writeText(z), m(b), window.setTimeout(() => {
      m((K) => K === b ? null : K);
    }, 1600));
  };
  return /* @__PURE__ */ r("div", { className: "chat-direkt-chat-screen", children: [
    /* @__PURE__ */ r("div", { ref: T, className: "chat-direkt-messages-container", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-date-divider", children: [
        /* @__PURE__ */ r("div", { className: "chat-direkt-date-line" }),
        /* @__PURE__ */ r("span", { className: "chat-direkt-date-label", children: "Danas" }),
        /* @__PURE__ */ r("div", { className: "chat-direkt-date-line" })
      ] }),
      t.messages.map((b) => {
        const z = b.sender === "user", K = z ? Ti(b.content) : null;
        return /* @__PURE__ */ r(
          "div",
          {
            className: `chat-direkt-msg-row ${z ? "user" : "ai"}${b.widget ? " has-widget" : ""}`,
            children: [
              !z && /* @__PURE__ */ r("div", { className: "chat-direkt-msg-avatar", children: /* @__PURE__ */ r(De, { size: 14 }) }),
              /* @__PURE__ */ r("div", { className: "chat-direkt-msg-body", children: [
                z ? /* @__PURE__ */ r("div", { className: `chat-direkt-msg-bubble ${K ? "is-form-submission" : ""}`, children: K ? /* @__PURE__ */ r("div", { className: "chat-direkt-form-submission-card", children: [
                  /* @__PURE__ */ r("div", { className: "chat-direkt-form-submission-title", children: K.title.toLowerCase().startsWith("forma") ? K.title : `Forma: ${K.title}` }),
                  /* @__PURE__ */ r("dl", { className: "chat-direkt-form-submission-grid", children: K.entries.map((g) => /* @__PURE__ */ r("div", { className: "chat-direkt-form-submission-row", children: [
                    /* @__PURE__ */ r("dt", { children: g.label }),
                    /* @__PURE__ */ r("dd", { children: g.value })
                  ] }, `${b.id}-${g.label}`)) })
                ] }) : b.content }) : /* @__PURE__ */ r(oe, { children: [
                  b.content ? /* @__PURE__ */ r("div", { className: "chat-direkt-msg-bubble", children: /* @__PURE__ */ r(li, { content: b.content }) }) : null,
                  b.widget && /* @__PURE__ */ r("div", { className: "chat-direkt-widget-wrapper", children: /* @__PURE__ */ r(gi, { widget: b.widget, onAction: (g) => F(g) }) }),
                  b.isStreaming && !b.content && !b.widget && /* @__PURE__ */ r("div", { className: "chat-direkt-msg-bubble", style: { padding: "8px 12px" }, children: /* @__PURE__ */ r("div", { className: "chat-direkt-typing-indicator", style: { background: "transparent", padding: "4px 0" }, children: [
                    /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
                    /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
                    /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" })
                  ] }) })
                ] }),
                !z && b.sources && b.sources.length > 0 && /* @__PURE__ */ r("div", { className: "chat-direkt-sources", children: [
                  /* @__PURE__ */ r("span", { className: "chat-direkt-sources-title", children: "Izvori i dokumentacija:" }),
                  /* @__PURE__ */ r("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: b.sources.map((g) => /* @__PURE__ */ r(
                    "a",
                    {
                      href: g.url || "#",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "chat-direkt-source-pill",
                      children: [
                        /* @__PURE__ */ r("span", { children: g.title }),
                        /* @__PURE__ */ r(Hr, { size: 10 })
                      ]
                    },
                    g.id
                  )) })
                ] }),
                !z && b.suggestedQuestions && b.suggestedQuestions.length > 0 && /* @__PURE__ */ r("div", { className: "chat-direkt-followups", children: b.suggestedQuestions.map((g, x) => /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: () => F(g),
                    disabled: B,
                    className: "chat-direkt-followup-chip",
                    children: g
                  },
                  `sug-f-${x}`
                )) }),
                /* @__PURE__ */ r("div", { className: "chat-direkt-msg-meta", children: [
                  /* @__PURE__ */ r("span", { children: Ai(b.timestamp) }),
                  !z && /* @__PURE__ */ r("div", { className: "chat-direkt-msg-actions", children: [
                    b.id === ae && !i && /* @__PURE__ */ r(oe, { children: w.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ r(oe, { children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          onClick: () => h == null ? void 0 : h("positive"),
                          className: `chat-direkt-msg-action-btn ${t.satisfaction === "positive" ? "is-active" : ""}`,
                          "aria-label": "Korisno",
                          title: "Korisno",
                          children: /* @__PURE__ */ r(Or, { size: 16 })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          onClick: () => h == null ? void 0 : h("negative"),
                          className: `chat-direkt-msg-action-btn ${t.satisfaction === "negative" ? "is-active" : ""}`,
                          "aria-label": "Nije korisno",
                          title: "Nije korisno",
                          children: /* @__PURE__ */ r(Vr, { size: 16 })
                        }
                      )
                    ] }) }),
                    b.id === ae && !i && w.copyMessageEnabled !== !1 && !!b.content && /* @__PURE__ */ r(
                      "button",
                      {
                        type: "button",
                        onClick: () => void Y(b.id, b.content),
                        className: `chat-direkt-msg-action-btn ${d === b.id ? "is-active" : ""}`,
                        "aria-label": d === b.id ? "Kopirano" : "Kopiraj odgovor",
                        title: d === b.id ? "Kopirano" : "Kopiraj odgovor",
                        children: /* @__PURE__ */ r(Ur, { size: 16 })
                      }
                    )
                  ] }),
                  z && /* @__PURE__ */ r("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ r(
                    be,
                    {
                      size: 10,
                      className: b.status === "read" ? "text-accent" : ""
                    }
                  ) })
                ] })
              ] })
            ]
          },
          b.id
        );
      }),
      i && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ r("div", { className: "chat-direkt-msg-row ai", children: [
        /* @__PURE__ */ r("div", { className: "chat-direkt-msg-avatar", children: /* @__PURE__ */ r(De, { size: 14 }) }),
        /* @__PURE__ */ r("div", { className: "chat-direkt-typing-indicator", children: [
          /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
          /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" }),
          /* @__PURE__ */ r("span", { className: "chat-direkt-typing-dot" })
        ] })
      ] })
    ] }),
    (o || n) && /* @__PURE__ */ r("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ r("div", { className: "chat-direkt-alert-banner", children: /* @__PURE__ */ r("span", { children: n ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${n}s.` : o }) }) }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-input-area", children: [
      /* @__PURE__ */ r(
        Qt,
        {
          rows: J,
          fallbackQuestions: w.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: F,
          containerClassName: "chat-direkt-suggestion-pills",
          buttonClassName: "chat-direkt-suggestion-pill"
        }
      ),
      p.length > 0 && /* @__PURE__ */ r("div", { className: "chat-direkt-attachment-list", children: p.map((b) => /* @__PURE__ */ r("span", { className: "chat-direkt-attachment-chip", children: [
        b.name,
        /* @__PURE__ */ r("button", { type: "button", onClick: () => _((z) => z.filter((K) => K.id !== b.id)), children: /* @__PURE__ */ r(pe, { size: 10 }) })
      ] }, b.id)) }),
      e.poweredBy && /* @__PURE__ */ r("div", { className: "chat-direkt-footer", children: [
        /* @__PURE__ */ r(Gt, { size: 13, className: "chat-direkt-powered-icon" }),
        e.poweredByText || "Pokreće",
        " ",
        /* @__PURE__ */ r(
          "a",
          {
            href: e.poweredByUrl || "https://pitaj.io",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Pitaj.io AI"
          }
        )
      ] }),
      G && !f && /* @__PURE__ */ r("div", { className: "chat-direkt-dismissible-notice", children: [
        /* @__PURE__ */ r("span", { className: "chat-direkt-dismissible-notice-text", children: G }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: "chat-direkt-dismissible-notice-close",
            onClick: () => k(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ r(pe, { size: 12 })
          }
        )
      ] }),
      C.isProcessing && /* @__PURE__ */ r("div", { className: "chat-direkt-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ r("div", { className: `chat-direkt-input-wrapper ${Z ? "is-recording" : ""}`, children: [
        w.attachmentsEnabled && /* @__PURE__ */ r(oe, { children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: M,
              type: "file",
              multiple: !0,
              className: "chat-direkt-hidden-input",
              onChange: async (b) => {
                const z = b.currentTarget.files;
                if (b.currentTarget.value = "", !z || z.length === 0) return;
                const K = await Yt(z);
                _((g) => [...g, ...K].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: "chat-direkt-mic-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var b;
                return (b = M.current) == null ? void 0 : b.click();
              },
              children: /* @__PURE__ */ r(Zt, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ r(
          "textarea",
          {
            ref: y,
            value: u,
            onInput: (b) => l(b.target.value),
            onKeyDown: W,
            placeholder: U,
            rows: 1,
            disabled: B,
            className: "chat-direkt-textarea",
            style: Z ? { display: "none" } : void 0
          }
        ),
        Z ? /* @__PURE__ */ r("div", { className: "chat-direkt-recording-shell", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: "chat-direkt-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => C.cancel(),
              children: /* @__PURE__ */ r(pe, { size: 14 })
            }
          ),
          /* @__PURE__ */ r("div", { className: "chat-direkt-wave-track", children: /* @__PURE__ */ r("div", { className: "chat-direkt-wave", children: C.waveformLevels.map((b, z) => /* @__PURE__ */ r(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + b * 15))}px` }
            },
            `dict-wave-conv-${z}`
          )) }) }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: "chat-direkt-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => C.stopAndTranscribe(),
              disabled: B || C.isProcessing,
              children: /* @__PURE__ */ r(be, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ r(oe, { children: [
          w.voiceToTextEnabled !== !1 && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: `chat-direkt-mic-btn ${C.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: C.isProcessing ? "Transkribujem..." : C.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => C.start(),
              disabled: B || s || !C.isSupported || C.isProcessing,
              children: /* @__PURE__ */ r(Kt, { size: 16 })
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              onClick: () => F(),
              disabled: B || !u.trim() && p.length === 0,
              className: "chat-direkt-send-btn",
              "aria-label": "Pošalji poruku",
              children: /* @__PURE__ */ r(Vt, { size: 14 })
            }
          )
        ] })
      ] }),
      R && /* @__PURE__ */ r("div", { className: "chat-direkt-custom-footer", children: R })
    ] })
  ] });
}
function Bi({
  config: t,
  openedByUser: e = !1,
  onStart: i,
  onApiError: n
}) {
  var Z, Y;
  const [o, a] = D(""), [c, h] = D(!1), [u, l] = D(!1), [f, k] = D([]), d = ee(null), m = ee(null), p = t.content || {}, _ = t.chatAvailable === !1, T = t.transcribeAvailable === !1, y = Xt({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: Q((j) => {
      a(($) => $ ? `${$} ${j}` : j);
    }, []),
    onError: Q((j) => {
      n == null || n(j, "Greška pri transkripciji.");
    }, [n])
  });
  ie(() => {
    var j;
    e && ((j = d.current) == null || j.focus({ preventScroll: !0 }));
  }, [e]), ie(() => {
    if (typeof window > "u") return;
    const j = window.matchMedia("(max-width: 768px)"), $ = () => h(j.matches);
    return $(), j.addEventListener("change", $), () => j.removeEventListener("change", $);
  }, []), ie(() => {
    l(!1);
  }, [p.dismissibleNotice]);
  const w = (c && p.useDifferentMessageMobile && p.mobileWelcomeMessage ? p.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((j) => j.trim()).filter((j) => j.length > 0), I = p.autoShowInitialMessages !== !1 && !e, s = !c || p.showAutoPopupMobile !== !1, B = c && p.useDifferentDurationMobile && typeof p.mobileAutoShowDurationSeconds == "number" ? p.mobileAutoShowDurationSeconds : p.autoShowDurationSeconds ?? 0, C = I && s ? Math.max(0, B) * 1e3 : 0, F = (j) => {
    const $ = (j ?? o).trim();
    if (!$ && f.length === 0 || _) return;
    const V = `${$}${Jt(f)}`.trim();
    i(V), a(""), k([]);
  }, W = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), F());
  }, U = p.showSuggestedMessages === !1 ? [] : p.suggestedMessageRows || [], G = p.messagePlaceholder || t.placeholder || "Upišite svoje pitanje...", R = ((Z = p.dismissibleNotice) == null ? void 0 : Z.trim()) || "", J = ((Y = p.footerText) == null ? void 0 : Y.trim()) || "", ae = y.isListening;
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-new-screen", children: (w.length > 0 ? w : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((j, $) => /* @__PURE__ */ r("div", { className: "chat-direkt-msg-row ai", children: /* @__PURE__ */ r("div", { className: "chat-direkt-msg-body", children: /* @__PURE__ */ r("div", { className: "chat-direkt-msg-bubble", children: j }) }) }, `welcome-${$}`)) }),
    /* @__PURE__ */ r("div", { className: "chat-direkt-input-area", children: [
      /* @__PURE__ */ r(
        Qt,
        {
          rows: U,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: F,
          containerClassName: "chat-direkt-suggestion-pills",
          buttonClassName: "chat-direkt-suggestion-pill",
          revealDelayMs: C,
          staggerMs: 150
        }
      ),
      f.length > 0 && /* @__PURE__ */ r("div", { className: "chat-direkt-attachment-list", children: f.map((j) => /* @__PURE__ */ r("span", { className: "chat-direkt-attachment-chip", children: [
        j.name,
        /* @__PURE__ */ r("button", { type: "button", onClick: () => k(($) => $.filter((V) => V.id !== j.id)), children: /* @__PURE__ */ r(pe, { size: 10 }) })
      ] }, j.id)) }),
      t.poweredBy && /* @__PURE__ */ r("div", { className: "chat-direkt-footer", children: [
        /* @__PURE__ */ r(Gt, { size: 13, className: "chat-direkt-powered-icon" }),
        t.poweredByText || "Pokreće",
        " ",
        /* @__PURE__ */ r(
          "a",
          {
            href: t.poweredByUrl || "https://pitaj.io",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Pitaj.io AI"
          }
        )
      ] }),
      R && !u && /* @__PURE__ */ r("div", { className: "chat-direkt-dismissible-notice", children: [
        /* @__PURE__ */ r("span", { className: "chat-direkt-dismissible-notice-text", children: R }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: "chat-direkt-dismissible-notice-close",
            onClick: () => l(!0),
            "aria-label": "Zatvori obavijest",
            children: /* @__PURE__ */ r(pe, { size: 12 })
          }
        )
      ] }),
      y.isProcessing && /* @__PURE__ */ r("div", { className: "chat-direkt-dictation-processing", children: "Transkribujem glas..." }),
      /* @__PURE__ */ r("div", { className: `chat-direkt-input-wrapper ${ae ? "is-recording" : ""}`, children: [
        p.attachmentsEnabled && /* @__PURE__ */ r(oe, { children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: m,
              type: "file",
              multiple: !0,
              className: "chat-direkt-hidden-input",
              onChange: async (j) => {
                const $ = j.currentTarget.files;
                if (j.currentTarget.value = "", !$ || $.length === 0) return;
                const V = await Yt($);
                k((b) => [...b, ...V].slice(0, 3));
              }
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: "chat-direkt-mic-btn",
              "aria-label": "Dodaj attachment",
              title: "Dodaj attachment",
              onClick: () => {
                var j;
                return (j = m.current) == null ? void 0 : j.click();
              },
              children: /* @__PURE__ */ r(Zt, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ r(
          "textarea",
          {
            ref: d,
            value: o,
            onInput: (j) => a(j.target.value),
            onKeyDown: W,
            placeholder: G,
            rows: 1,
            disabled: _,
            className: "chat-direkt-textarea",
            style: ae ? { display: "none" } : void 0
          }
        ),
        ae ? /* @__PURE__ */ r("div", { className: "chat-direkt-recording-shell", children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: "chat-direkt-recording-btn is-cancel",
              "aria-label": "Otkaži snimanje",
              title: "Otkaži snimanje",
              onClick: () => y.cancel(),
              children: /* @__PURE__ */ r(pe, { size: 14 })
            }
          ),
          /* @__PURE__ */ r("div", { className: "chat-direkt-wave-track", children: /* @__PURE__ */ r("div", { className: "chat-direkt-wave", children: y.waveformLevels.map((j, $) => /* @__PURE__ */ r(
            "span",
            {
              style: { height: `${Math.max(3, Math.round(3 + j * 15))}px` }
            },
            `dict-wave-${$}`
          )) }) }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: "chat-direkt-recording-btn is-confirm",
              "aria-label": "Pošalji snimak",
              title: "Pošalji snimak",
              onClick: () => y.stopAndTranscribe(),
              disabled: _ || y.isProcessing,
              children: /* @__PURE__ */ r(be, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ r(oe, { children: [
          p.voiceToTextEnabled !== !1 && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: `chat-direkt-mic-btn ${y.isProcessing ? "is-active" : ""}`,
              "aria-label": "Diktiranje",
              title: y.isProcessing ? "Transkribujem..." : y.isSupported ? "Diktiranje" : "Diktiranje nije podržano",
              onClick: () => y.start(),
              disabled: _ || T || !y.isSupported || y.isProcessing,
              children: /* @__PURE__ */ r(Kt, { size: 16 })
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              onClick: () => F(),
              disabled: _ || !o.trim() && f.length === 0,
              className: "chat-direkt-send-btn",
              "aria-label": "Pošalji pitanje",
              children: /* @__PURE__ */ r(Vt, { size: 14 })
            }
          )
        ] })
      ] }),
      J && /* @__PURE__ */ r("div", { className: "chat-direkt-custom-footer", children: J })
    ] })
  ] });
}
function Di({
  isOpen: t,
  onClick: e,
  unreadCount: i = 0,
  config: n
}) {
  var f, k, d, m, p, _;
  const o = ((f = n.content) == null ? void 0 : f.launcherIconStyle) || "message-circle", a = typeof ((k = n.content) == null ? void 0 : k.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", c = ((d = n.content) == null ? void 0 : d.launcherShowText) === !0, h = ((m = n.content) == null ? void 0 : m.launcherTextSide) === "left" ? "left" : "right", u = c ? ((_ = (p = n.content) == null ? void 0 : p.launcherText) == null ? void 0 : _.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ r(
    "button",
    {
      onClick: e,
      className: `chat-direkt-launcher-btn ${t ? "is-open" : ""} ${c ? "has-label" : ""} ${c && h === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ r("span", { className: "chat-direkt-launcher-icon open-icon", children: o === "custom" && a !== "" ? /* @__PURE__ */ r("img", { src: a, alt: "", className: "chat-direkt-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ r(o === "sparkles" ? De : o === "message-square" ? qt : o === "contact" ? Pr : Br, { size: 24 }) }),
        /* @__PURE__ */ r("span", { className: "chat-direkt-launcher-icon close-icon", children: /* @__PURE__ */ r(pe, { size: 22 }) }),
        u && !t && /* @__PURE__ */ r("span", { className: "chat-direkt-launcher-label", children: u }),
        i > 0 && !t && /* @__PURE__ */ r("span", { className: "chat-direkt-unread-badge", children: i > 9 ? "9+" : i })
      ]
    }
  );
}
async function Ei(t, e, i) {
  const n = (i || "").replace(/\/$/, ""), o = new URLSearchParams({ visitor_id: e }), a = await fetch(`${n}/api/widget/${encodeURIComponent(t)}/tickets?${o}`), c = await a.json().catch(() => null);
  if (!a.ok) throw new Error(c && "error" in c ? c.error : "Tikete nije moguće učitati.");
  return c.data.map((h) => ({
    id: h.id,
    ticketNumber: h.ticket_number,
    isResolved: h.is_resolved,
    updatedAt: h.updated_at,
    messages: (h.messages || []).map((u) => ({
      id: String(u.id),
      content: u.content,
      sender: u.role === "user" ? "user" : "ai",
      timestamp: u.created_at,
      status: "sent"
    }))
  }));
}
function Pi({ config: t, visitorId: e }) {
  const [i, n] = D([]), [o, a] = D("open"), [c, h] = D(!0), [u, l] = D(null);
  ie(() => {
    let k = !0;
    return h(!0), Ei(t.companyId, e, t.apiUrl).then((d) => {
      k && n(d);
    }).catch((d) => {
      k && l(d instanceof Error ? d.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      k && h(!1);
    }), () => {
      k = !1;
    };
  }, [t.apiUrl, t.companyId, e]);
  const f = i.filter((k) => o === "open" ? !k.isResolved : k.isResolved);
  return /* @__PURE__ */ r("div", { className: "chat-direkt-tickets-screen", children: [
    /* @__PURE__ */ r("div", { className: "chat-direkt-ticket-tabs", role: "tablist", "aria-label": "Status tiketa", children: [
      /* @__PURE__ */ r("button", { className: o === "open" ? "is-active" : "", onClick: () => a("open"), role: "tab", "aria-selected": o === "open", children: "Otvoreni" }),
      /* @__PURE__ */ r("button", { className: o === "closed" ? "is-active" : "", onClick: () => a("closed"), role: "tab", "aria-selected": o === "closed", children: "Zatvoreni" })
    ] }),
    c ? /* @__PURE__ */ r("div", { className: "chat-direkt-tickets-empty", children: "Učitavanje tiketa…" }) : u ? /* @__PURE__ */ r("div", { className: "chat-direkt-tickets-empty", children: u }) : f.length === 0 ? /* @__PURE__ */ r("div", { className: "chat-direkt-tickets-empty", children: [
      /* @__PURE__ */ r(qt, { size: 32 }),
      /* @__PURE__ */ r("strong", { children: "Nema tiketa" }),
      /* @__PURE__ */ r("span", { children: "Vaši tiketi će biti prikazani ovdje." })
    ] }) : /* @__PURE__ */ r("div", { className: "chat-direkt-ticket-list", children: f.map((k) => /* @__PURE__ */ r("div", { className: "chat-direkt-ticket-card", children: [
      /* @__PURE__ */ r("div", { className: "chat-direkt-ticket-card-icon", children: /* @__PURE__ */ r(Wt, { size: 18 }) }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("strong", { children: k.ticketNumber || `Tiket #${k.id}` }),
        /* @__PURE__ */ r("span", { children: k.isResolved ? "Zatvoren" : "Otvoren" })
      ] })
    ] }, k.id)) })
  ] });
}
const Fi = Ot(() => import("./HistoryScreen-2E82mol5.js"), (t) => t.HistoryScreen), Ri = Ot(() => import("./FormActionsScreen-Bl1C5ZvY.js"), (t) => t.FormActionsScreen);
function ve(t, e) {
  const i = t.trim(), n = /^#[0-9A-Fa-f]{3}$/.test(i) ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}` : i;
  if (!/^#[0-9A-Fa-f]{6}$/.test(n)) return null;
  const o = Number.parseInt(n.slice(1, 3), 16), a = Number.parseInt(n.slice(3, 5), 16), c = Number.parseInt(n.slice(5, 7), 16);
  return `rgba(${o}, ${a}, ${c}, ${e})`;
}
function er(t) {
  const e = t.trim(), i = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  return /^#[0-9A-Fa-f]{6}$/.test(i) ? {
    r: Number.parseInt(i.slice(1, 3), 16),
    g: Number.parseInt(i.slice(3, 5), 16),
    b: Number.parseInt(i.slice(5, 7), 16)
  } : null;
}
function Hi(t, e, i) {
  const n = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(i)}`;
}
function _e(t) {
  const e = er(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function Ui(t) {
  const e = er(t);
  if (!e) return t;
  const i = _e(t) === "#111827", n = i ? 0.2 : 0.16, o = i ? 0 : 255;
  return Hi(
    e.r + (o - e.r) * n,
    e.g + (o - e.g) * n,
    e.b + (o - e.b) * n
  );
}
function Oi({
  config: t,
  startOpen: e = !1,
  initialScreen: i = "new-conversation",
  onEvent: n,
  isInline: o = !1
}) {
  var x, A, O, H, E;
  const {
    config: a,
    setConfig: c,
    isOpen: h,
    setIsOpen: u,
    screen: l,
    setScreen: f,
    conversations: k,
    activeConversation: d,
    totalUnread: m,
    isStreaming: p,
    rateLimitTimer: _,
    errorBanner: T,
    selectConversation: y,
    startNewConversation: M,
    endConversation: w,
    deleteConversation: I,
    sendUserMessage: s,
    submitSatisfaction: B,
    visitorContact: C,
    visitorId: F,
    activeConversationId: W,
    appendConversationMessage: U,
    handleApiError: G
  } = Tr(t, {
    startOpen: e,
    initialScreen: i,
    emitEvent: n,
    onActionTrigger: (v) => {
      if (Z(!0), u(!0), (l === "history" || l === "new-conversation") && f("conversation"), v.widget_id || v.widget)
        return;
      const L = Number(v.id), N = Number(v.form_id), S = Number.isInteger(L) && L > 0 ? L : null, ne = Number.isInteger(N) && N > 0 ? -N : null;
      j(S ?? ne);
    }
  }), R = ee(i), J = ee(e), [ae, Z] = D(e), [Y, j] = D(null), $ = a.formsEnabled === !0 && a.formsAvailable !== !1, V = ue(() => {
    var N, S;
    const v = a.actions || [];
    if (v.length > 0 && typeof ((N = v[0]) == null ? void 0 : N.id) == "number")
      return v[0].id;
    const L = a.forms || [];
    return L.length > 0 && typeof ((S = L[0]) == null ? void 0 : S.id) == "number" ? -L[0].id : null;
  }, [a.actions, a.forms]), b = ue(() => ({
    open: () => {
      Z(!0), u(!0);
    },
    close: () => u(!1),
    toggle: () => {
      h || Z(!0), u(!h);
    },
    startConversation: (v) => {
      Z(!0), u(!0), v && v.trim() ? M(v.trim()) : f("new-conversation");
    },
    setScreen: (v) => f(v),
    setConfig: (v) => {
      c({
        ...a,
        ...v,
        colors: { ...a.colors || {}, ...v.colors || {} },
        content: { ...a.content || {}, ...v.content || {} },
        features: { ...a.features || {}, ...v.features || {} }
      });
    }
  }), [a, h, u, f, M, c]), z = ee({});
  vt(z.current, b), ie(() => () => vt(z.current, null), []), ie(() => {
    i !== R.current && (R.current = i, f(i));
  }, [i, f]), ie(() => {
    e !== J.current && (J.current = e, e && Z(!0), u(e));
  }, [e, u]), ie(() => {
    if (l === "forms") {
      $ && V !== null && j(V), f("new-conversation");
      return;
    }
    l === "contact" && f("new-conversation");
  }, [V, $, l, f]);
  const K = ue(() => {
    var ne, P;
    const v = a.colors || {}, L = ((ne = a.content) == null ? void 0 : ne.themeMode) === "dark" ? "dark" : "light", N = {};
    if (v.primaryColor) {
      N["--chat-direkt-accent"] = v.primaryColor, N["--chat-direkt-bubble-user"] = v.primaryColor, N["--chat-direkt-accent-hover"] = Ui(v.primaryColor), N["--chat-direkt-accent-contrast"] = _e(v.primaryColor), N["--chat-direkt-bubble-user-fg"] = _e(v.primaryColor);
      const ce = ve(v.primaryColor, 0.1), se = ve(v.primaryColor, 0.16), Ne = ve(v.primaryColor, 0.35);
      ce && (N["--chat-direkt-accent-soft"] = ce), se && (N["--chat-direkt-accent-soft-strong"] = se), Ne && (N["--chat-direkt-accent-ring"] = Ne);
    }
    if (v.headerBg && (N["--chat-direkt-header-bg"] = v.headerBg), v.headerFg) {
      N["--chat-direkt-header-fg"] = v.headerFg;
      const ce = ve(v.headerFg, 0.1);
      ce && (N["--chat-direkt-header-icon-hover"] = ce);
    }
    N["--chat-direkt-chrome-border"] = L === "dark" ? "rgba(148, 163, 184, 0.52)" : "#d1d5db", v.surfaceBg && (N["--chat-direkt-surface"] = v.surfaceBg), v.subtle ? N["--chat-direkt-surface-subtle"] = v.subtle : v.surfaceBg && (N["--chat-direkt-surface-subtle"] = ve(v.surfaceBg, 0.9) || v.surfaceBg), v.bubbleAiBg && (N["--chat-direkt-bubble-ai"] = v.bubbleAiBg), v.textFg && (N["--chat-direkt-bubble-ai-fg"] = v.textFg), v.textFg && (N["--chat-direkt-fg"] = v.textFg), v.mutedFg && (N["--chat-direkt-muted"] = v.mutedFg), v.border && (N["--chat-direkt-border"] = v.border), v.hover && (N["--chat-direkt-hover"] = v.hover), v.sendAccent && (N["--chat-direkt-send-accent"] = v.sendAccent, N["--chat-direkt-send-accent-contrast"] = _e(v.sendAccent));
    const S = (P = a.content) == null ? void 0 : P.launcherButtonColor;
    return S && (N["--chat-direkt-launcher-bg"] = S, N["--chat-direkt-launcher-fg"] = _e(S)), N;
  }, [a.colors, (x = a.content) == null ? void 0 : x.themeMode, (A = a.content) == null ? void 0 : A.launcherButtonColor]), g = `pos-${a.position || "bottom-right"}`;
  return a.enabled === !1 ? /* @__PURE__ */ r(oe, {}) : /* @__PURE__ */ r(
    "div",
    {
      className: `chat-direkt-root ${g} ${o ? "is-inline" : ""} ${o && ((O = a.content) != null && O.showInlineLauncher) ? "show-inline-launcher" : ""}`,
      style: K,
      role: "region",
      "aria-label": "AI Chat Asistent",
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: `chat-direkt-window ${h ? "is-open" : "is-closed"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !h,
            children: [
              /* @__PURE__ */ r(
                di,
                {
                  screen: l,
                  activeConversation: d,
                  config: a,
                  onBack: () => {
                    f("new-conversation");
                  },
                  onClose: () => u(!1),
                  onNewConversation: () => f("new-conversation"),
                  onEndConversation: w,
                  onDeleteConversation: ((H = a.content) == null ? void 0 : H.deleteConversationsEnabled) !== !1 && d ? () => I(d.id) : void 0,
                  onViewHistory: () => f("history"),
                  onViewTickets: () => f("tickets")
                }
              ),
              /* @__PURE__ */ r("div", { className: "chat-direkt-body", children: [
                l === "conversation" && d && /* @__PURE__ */ r(
                  Li,
                  {
                    conversation: d,
                    config: a,
                    isStreaming: p,
                    rateLimitCountdown: _,
                    errorBanner: T,
                    onSendMessage: s,
                    onApiError: G,
                    onSubmitSatisfaction: (v) => B(d.id, v)
                  }
                ),
                l === "new-conversation" && /* @__PURE__ */ r(
                  Bi,
                  {
                    config: a,
                    openedByUser: ae,
                    onStart: (v) => {
                      M(v);
                    },
                    onApiError: G
                  }
                ),
                l === "history" && /* @__PURE__ */ r(
                  Fi,
                  {
                    conversations: k,
                    config: a,
                    onSelectConversation: y,
                    onNewConversation: () => f("new-conversation"),
                    onDeleteConversation: ((E = a.content) == null ? void 0 : E.deleteConversationsEnabled) !== !1 ? I : void 0
                  }
                ),
                l === "tickets" && /* @__PURE__ */ r(Pi, { config: a, visitorId: F }),
                (l === "conversation" || l === "new-conversation") && $ && Y !== null ? /* @__PURE__ */ r("div", { className: "chat-direkt-inline-form-shell", children: /* @__PURE__ */ r(
                  Ri,
                  {
                    embedded: !0,
                    config: a,
                    widgetId: a.companyId,
                    activeConversationId: W,
                    initialActionId: Y,
                    visitorContact: C,
                    onApiError: G,
                    blockedReason: _ !== null ? `Sačekajte ${_}s prije novog zahtjeva.` : null,
                    onSubmitted: (v) => {
                      U(W, v, "user");
                    },
                    onBack: () => j(null)
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        /* @__PURE__ */ r(
          Di,
          {
            isOpen: h,
            onClick: () => {
              h || Z(!0), u(!h);
            },
            unreadCount: m,
            config: a
          }
        )
      ]
    }
  );
}
const X = {
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
function Vi(t) {
  const e = t.trim();
  if (!/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const i = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * i + 0.7152 * n + 0.0722 * o) / 255 > 0.62 ? "#111827" : "#ffffff";
}
function qi(t, e) {
  if (typeof t != "string") return e;
  const i = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(i) ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`.toUpperCase() : e;
}
function Wi(t) {
  const e = t.trim(), i = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(i))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(i.slice(1, 3), 16) / 255, o = Number.parseInt(i.slice(3, 5), 16) / 255, a = Number.parseInt(i.slice(5, 7), 16) / 255, c = Math.max(n, o, a), h = Math.min(n, o, a), u = c - h;
  let l = 0;
  const f = (c + h) / 2, k = u === 0 ? 0 : u / (1 - Math.abs(2 * f - 1));
  if (u !== 0)
    switch (c) {
      case n:
        l = (o - a) / u % 6;
        break;
      case o:
        l = (a - n) / u + 2;
        break;
      default:
        l = (n - o) / u + 4;
        break;
    }
  return { h: Math.round((l * 60 + 360) % 360), s: Math.round(k * 100), l: Math.round(f * 100) };
}
function Ki(t) {
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
function Zi(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const i = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(i.fields) ? i.fields : []).filter((a) => typeof a == "object" && a !== null).map((a) => ({
      key: typeof a.key == "string" ? a.key : "",
      type: Ki(a.type),
      label: typeof a.label == "string" ? a.label : "",
      required: a.required === !0,
      placeholder: typeof a.placeholder == "string" ? a.placeholder : void 0,
      options: Array.isArray(a.options) ? a.options.filter((c) => typeof c == "string" && c.trim() !== "") : void 0,
      accept: Array.isArray(a.accept) ? a.accept.filter((c) => typeof c == "string" && c.trim() !== "") : void 0,
      max_size_kb: typeof a.max_size_kb == "number" ? a.max_size_kb : void 0,
      value: typeof a.value == "string" ? a.value : void 0
    })).filter((a) => a.key !== "");
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
function Gi(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => ({
    id: typeof e.id == "number" ? e.id : 0,
    name: typeof e.name == "string" ? e.name : "",
    description: typeof e.description == "string" ? e.description : null,
    trigger_hint: typeof e.trigger_hint == "string" ? e.trigger_hint : null,
    form_id: typeof e.form_id == "number" ? e.form_id : 0,
    form_name: typeof e.form_name == "string" ? e.form_name : null
  })).filter((e) => e.id > 0 && e.form_id > 0 && e.name.trim() !== "") : [];
}
async function Qi(t, e) {
  var n, o, a, c, h, u, l, f, k;
  if (t === "default")
    return { ...X, companyId: t || "default" };
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const d = `${i}/api/widget/${t}/config`, m = await fetch(d, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!m.ok)
      return console.warn(`[ChatWidget] Failed to fetch config (${m.status}), using defaults.`), { ...X, companyId: t, apiUrl: i };
    const p = await m.json(), _ = p.accent_color || ((n = X.colors) == null ? void 0 : n.primaryColor) || "#2563eb", T = Array.isArray(p.suggested_questions) ? p.suggested_questions.filter((E) => typeof E == "string" && E.trim() !== "").slice(0, 4) : [], y = Array.isArray(p.contact_fields) ? p.contact_fields.filter(
      (E) => E === "name" || E === "email" || E === "phone"
    ) : [], w = (Array.isArray(p.channels) ? p.channels : []).find(
      (E) => typeof E == "object" && E !== null && E.channel === "chat_bubble"
    ), I = (w == null ? void 0 : w.enabled) !== !1, s = p.widget_content && typeof p.widget_content == "object" ? p.widget_content : null, B = Array.isArray(s == null ? void 0 : s.suggested_message_rows) ? s.suggested_message_rows.filter((E) => typeof E == "object" && E !== null).map((E) => {
      const v = typeof E.text == "string" ? E.text.trim() : "", L = Array.isArray(E.children) ? E.children.filter((N) => typeof N == "string" && N.trim() !== "") : [];
      return {
        text: v,
        children: L.length > 0 ? L : void 0
      };
    }).filter((E) => E.text !== "").slice(0, 4) : [], C = {
      avatarBorder: (s == null ? void 0 : s.avatar_border) !== !1,
      messagePlaceholder: typeof (s == null ? void 0 : s.message_placeholder) == "string" && s.message_placeholder.trim() !== "" ? s.message_placeholder : X.placeholder,
      dismissibleNotice: typeof (s == null ? void 0 : s.dismissible_notice) == "string" ? s.dismissible_notice : "",
      footerText: typeof (s == null ? void 0 : s.footer_text) == "string" ? s.footer_text : "",
      attachmentsEnabled: (s == null ? void 0 : s.attachments_enabled) === !0,
      voiceToTextEnabled: (s == null ? void 0 : s.voice_to_text_enabled) !== !1,
      copyMessageEnabled: (s == null ? void 0 : s.copy_message_enabled) !== !1,
      collectUserFeedbackEnabled: (s == null ? void 0 : s.collect_user_feedback_enabled) !== !1,
      deleteConversationsEnabled: (s == null ? void 0 : s.delete_conversations_enabled) !== !1,
      showSuggestedMessages: (s == null ? void 0 : s.show_suggested_messages) !== !1,
      keepShowingSuggestedMessages: (s == null ? void 0 : s.keep_showing_suggested_messages) === !0,
      suggestedMessageRows: B,
      useDifferentMessageMobile: (s == null ? void 0 : s.use_different_message_mobile) === !0,
      mobileWelcomeMessage: typeof (s == null ? void 0 : s.mobile_welcome_message) == "string" ? s.mobile_welcome_message : "",
      autoShowInitialMessages: (s == null ? void 0 : s.auto_show_initial_messages) !== !1,
      autoShowDurationSeconds: typeof (s == null ? void 0 : s.auto_show_duration_seconds) == "number" ? Math.max(0, s.auto_show_duration_seconds) : 0,
      showAutoPopupMobile: (s == null ? void 0 : s.show_auto_popup_mobile) !== !1,
      useDifferentDurationMobile: (s == null ? void 0 : s.use_different_duration_mobile) === !0,
      mobileAutoShowDurationSeconds: typeof (s == null ? void 0 : s.mobile_auto_show_duration_seconds) == "number" ? Math.max(0, s.mobile_auto_show_duration_seconds) : null,
      themeMode: (s == null ? void 0 : s.theme_mode) === "dark" ? "dark" : "light",
      tintedGrayscaleEnabled: (s == null ? void 0 : s.tinted_grayscale_enabled) === !0,
      accentColorEnabled: (s == null ? void 0 : s.accent_color_enabled) !== !1,
      accentColorForHeaderEnabled: (s == null ? void 0 : s.accent_color_for_header_enabled) === !0,
      accentColorForSendIconEnabled: (s == null ? void 0 : s.accent_color_for_send_icon_enabled) === !0,
      tintedGrayscaleHue: typeof (s == null ? void 0 : s.tinted_grayscale_hue) == "number" ? Math.max(-180, Math.min(180, Math.round(s.tinted_grayscale_hue))) : 0,
      tintedGrayscaleTint: typeof (s == null ? void 0 : s.tinted_grayscale_tint) == "number" ? Math.max(-100, Math.min(100, Math.round(s.tinted_grayscale_tint))) : 0,
      tintedGrayscaleShade: typeof (s == null ? void 0 : s.tinted_grayscale_shade) == "number" ? Math.max(-100, Math.min(100, Math.round(s.tinted_grayscale_shade))) : 0,
      launcherButtonColor: qi(s == null ? void 0 : s.launcher_button_color, "#05070c"),
      launcherIconStyle: (s == null ? void 0 : s.launcher_icon_style) === "sparkles" || (s == null ? void 0 : s.launcher_icon_style) === "message-square" || (s == null ? void 0 : s.launcher_icon_style) === "contact" || (s == null ? void 0 : s.launcher_icon_style) === "custom" ? s.launcher_icon_style : "message-circle",
      launcherIconUrl: typeof (s == null ? void 0 : s.launcher_icon_url) == "string" ? s.launcher_icon_url : "",
      launcherShowText: (s == null ? void 0 : s.launcher_show_text) === !0,
      launcherText: typeof (s == null ? void 0 : s.launcher_text) == "string" ? s.launcher_text : "",
      launcherTextSide: (s == null ? void 0 : s.launcher_text_side) === "left" ? "left" : "right",
      showInlineLauncher: (s == null ? void 0 : s.show_inline_launcher) === !0
    }, F = C.themeMode === "dark" ? "dark" : "light", W = C.accentColorEnabled !== !1, U = C.accentColorForHeaderEnabled === !0, G = C.accentColorForSendIconEnabled === !0, R = C.tintedGrayscaleEnabled === !0, J = C.tintedGrayscaleHue ?? 0, ae = C.tintedGrayscaleTint ?? 0, Z = C.tintedGrayscaleShade ?? 0, Y = W ? _ : F === "dark" ? "#9ca3af" : "#6b7280", $ = (Wi(Y).h + J + 360) % 360, V = Math.max(0, Math.min(46, 10 + ae * 0.36)), b = Math.max(-24, Math.min(24, Z * 0.24)), z = F === "dark" ? {
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
    if (U && (z.headerBg = Y, z.headerFg = Vi(Y)), R) {
      const E = F === "dark" ? Math.max(8, Math.min(20, 12 + b)) : Math.max(88, Math.min(97, 95 + b * 0.22)), v = F === "dark" ? Math.max(10, Math.min(24, 16 + b)) : Math.max(80, Math.min(94, 89 + b * 0.35)), L = F === "dark" ? Math.max(11, Math.min(26, 18 + b * 0.9)) : Math.max(83, Math.min(95, v + 3)), N = F === "dark" ? Math.max(22, Math.min(40, 30 + b)) : Math.max(70, Math.min(88, 82 + b * 0.38)), S = F === "dark" ? Math.max(16, Math.min(30, 22 + b)) : Math.max(78, Math.min(92, v - 2));
      z.surfaceBg = `hsl(${$} ${V}% ${E}%)`, z.bubbleAiBg = `hsl(${$} ${Math.max(0, V - 2)}% ${L}%)`, z.subtle = `hsl(${$} ${Math.max(0, V - 4)}% ${v}%)`, z.border = `hsl(${$} ${Math.max(0, V - 5)}% ${N}%)`, z.hover = `hsl(${$} ${Math.max(0, V - 3)}% ${S}%)`;
    }
    const K = Zi(p.forms), g = Gi(p.actions).filter(
      (E) => K.some((v) => v.id === E.form_id)
    ), x = p.forms_enabled === !0 && K.length > 0 && g.length > 0, A = p.chat_available !== !1, O = p.transcribe_available !== !1 && A, H = p.forms_available !== !1 && x;
    return {
      ...X,
      companyId: t,
      enabled: I,
      apiUrl: i,
      name: p.company_name || X.name,
      title: p.bot_name || X.title,
      avatar: typeof (s == null ? void 0 : s.avatar_url) == "string" && s.avatar_url.trim() !== "" ? s.avatar_url : X.avatar,
      welcomeHeadline: p.bot_name ? `Ćaskajte sa ${p.bot_name}` : X.welcomeHeadline,
      welcomeMessage: p.welcome_message || X.welcomeMessage,
      placeholder: C.messagePlaceholder || X.placeholder,
      suggestedQuestions: T,
      contactFields: y.length > 0 ? y : X.contactFields,
      contact: {
        enabled: typeof ((o = p.contact) == null ? void 0 : o.enabled) == "boolean" ? p.contact.enabled : (a = X.contact) == null ? void 0 : a.enabled,
        title: typeof ((c = p.contact) == null ? void 0 : c.title) == "string" && p.contact.title.trim() !== "" ? p.contact.title : (h = X.contact) == null ? void 0 : h.title,
        subtitle: typeof ((u = p.contact) == null ? void 0 : u.subtitle) == "string" && p.contact.subtitle.trim() !== "" ? p.contact.subtitle : (l = X.contact) == null ? void 0 : l.subtitle,
        submitLabel: typeof ((f = p.contact) == null ? void 0 : f.submit_label) == "string" && p.contact.submit_label.trim() !== "" ? p.contact.submit_label : (k = X.contact) == null ? void 0 : k.submitLabel
      },
      poweredBy: p.show_branding !== void 0 ? p.show_branding : X.poweredBy,
      position: p.position || X.position,
      accentGradient: Array.isArray(p.accent_gradient) ? p.accent_gradient : [],
      content: {
        ...X.content || {},
        ...C
      },
      chatAvailable: A,
      transcribeAvailable: O,
      formsAvailable: H,
      formsEnabled: x,
      forms: K,
      actions: g,
      colors: {
        ...X.colors,
        primaryColor: Y,
        bubbleUserBg: Y,
        sendAccent: G ? Y : F === "dark" ? "#e5e7eb" : "#111827",
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
  } catch (d) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", d), { ...X, companyId: t, apiUrl: i, mockMode: !1 };
  }
}
const Yi = ':host{--chat-direkt-accent: #2563eb;--chat-direkt-accent-hover: #1d4ed8;--chat-direkt-accent-contrast: #ffffff;--chat-direkt-accent-soft: rgba(37, 99, 235, .1);--chat-direkt-accent-soft-strong: rgba(37, 99, 235, .16);--chat-direkt-accent-ring: rgba(37, 99, 235, .35);--chat-direkt-send-accent: #2563eb;--chat-direkt-send-accent-contrast: #ffffff;--chat-direkt-launcher-bg: #05070c;--chat-direkt-launcher-fg: #ffffff;--chat-direkt-header-bg: #ffffff;--chat-direkt-header-fg: #0f172a;--chat-direkt-header-icon-hover: rgba(15, 23, 42, .1);--chat-direkt-chrome-border: #d1d5db;--chat-direkt-surface: #ffffff;--chat-direkt-surface-subtle: #f3f4f6;--chat-direkt-bubble-ai: #ffffff;--chat-direkt-bubble-ai-fg: #111827;--chat-direkt-bubble-user: #2563eb;--chat-direkt-bubble-user-fg: #ffffff;--chat-direkt-fg: #0f172a;--chat-direkt-muted: #6b7280;--chat-direkt-border: #e5e7eb;--chat-direkt-hover: #f3f4f6;--chat-direkt-card-border: #e5e7eb;--chat-direkt-danger: #ef4444;--chat-direkt-danger-soft: rgba(239, 68, 68, .14);--chat-direkt-success: #10b981;--chat-direkt-radius: 22px;--chat-direkt-shadow: 0 30px 70px -26px rgba(15, 23, 42, .42), 0 14px 28px -20px rgba(15, 23, 42, .35);--chat-direkt-font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;display:block;font-family:var(--chat-direkt-font);font-size:14px;line-height:1.5;color:var(--chat-direkt-fg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--chat-direkt-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.chat-direkt-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.chat-direkt-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;gap:12px;pointer-events:none}.chat-direkt-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:100%;height:100%;min-height:0;max-height:100%;align-items:center!important;gap:8px;z-index:auto;pointer-events:auto;overflow:visible}.chat-direkt-root.is-inline:not(.show-inline-launcher) .chat-direkt-launcher-btn{display:none!important}.chat-direkt-root.is-inline.show-inline-launcher .chat-direkt-launcher-btn{align-self:flex-end;margin-right:8px}.chat-direkt-root.is-inline.show-inline-launcher .chat-direkt-window{height:calc(100% - 62px);max-height:calc(100% - 62px)}.chat-direkt-root.is-inline .chat-direkt-window{position:relative;width:min(100%,410px);height:auto;flex:1 1 auto;min-height:0;max-width:410px;max-height:100%;transform:none!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important}.chat-direkt-root.pos-bottom-right{bottom:24px;right:24px;align-items:flex-end}.chat-direkt-root.pos-bottom-left{bottom:24px;left:24px;align-items:flex-start}.chat-direkt-root.pos-top-right{top:24px;right:24px;align-items:flex-end;flex-direction:column-reverse}.chat-direkt-root.pos-top-left{top:24px;left:24px;align-items:flex-start;flex-direction:column-reverse}.chat-direkt-window{width:410px;height:min(655px,calc(100vh - 48px));max-width:calc(100vw - 32px);max-height:min(655px,calc(100vh - 48px));background-color:var(--chat-direkt-surface);border-radius:18px;filter:drop-shadow(0 22px 40px rgba(15,23,42,.22)) drop-shadow(0 8px 18px rgba(15,23,42,.16));border:1px solid var(--chat-direkt-border);display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:all .28s cubic-bezier(.16,1,.3,1);opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .chat-direkt-window{transform-origin:bottom left}.chat-direkt-window.is-closed{opacity:0;transform:scale(.92) translateY(16px);pointer-events:none;visibility:hidden}.chat-direkt-header{background:var(--chat-direkt-header-bg);color:var(--chat-direkt-header-fg);padding:16px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--chat-direkt-border);flex-shrink:0}.chat-direkt-header-info{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.chat-direkt-avatar{width:30px;height:30px;border-radius:999px;background:transparent;display:flex;align-items:center;justify-content:center;color:var(--chat-direkt-fg);flex-shrink:0;overflow:hidden}.chat-direkt-header .chat-direkt-avatar{color:var(--chat-direkt-header-fg)}.chat-direkt-avatar.with-border{border:1.5px solid var(--chat-direkt-chrome-border);background-color:transparent}.chat-direkt-avatar.no-border{border:none}.chat-direkt-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:cover}.chat-direkt-header-text{min-width:0;flex:1}.chat-direkt-header-title{font-size:16px;font-weight:600;color:var(--chat-direkt-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chat-direkt-header-actions{display:flex;align-items:center;gap:6px}.chat-direkt-icon-btn{width:30px;height:30px;min-width:30px;min-height:30px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:999px;display:flex;align-items:center;justify-content:center;color:var(--chat-direkt-muted);transition:background-color .15s,color .15s,border-color .15s;border:1px solid transparent}.chat-direkt-header .chat-direkt-icon-btn{color:var(--chat-direkt-header-fg)}.chat-direkt-icon-btn:hover{background-color:var(--chat-direkt-hover);border-color:var(--chat-direkt-border);color:var(--chat-direkt-fg)}.chat-direkt-header .chat-direkt-icon-btn:hover,.chat-direkt-header .chat-direkt-icon-btn.is-active{background-color:var(--chat-direkt-header-icon-hover);border-color:var(--chat-direkt-chrome-border);color:var(--chat-direkt-header-fg)}.chat-direkt-icon-btn.is-active{background-color:var(--chat-direkt-hover);color:var(--chat-direkt-fg)}.chat-direkt-header-menu{position:relative}.chat-direkt-menu-dropdown{position:absolute;top:38px;right:0;min-width:200px;background-color:var(--chat-direkt-surface);border:1px solid var(--chat-direkt-border);border-radius:12px;box-shadow:0 10px 30px #0000002e;padding:6px;z-index:30;animation:chat-direkt-menu-in .15s ease}@keyframes chat-direkt-menu-in{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.chat-direkt-menu-item{width:100%;padding:10px 12px;border-radius:8px;font-size:13px;font-weight:500;color:var(--chat-direkt-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.chat-direkt-menu-item-icon{color:currentColor;flex-shrink:0}.chat-direkt-menu-item:hover:not(:disabled){background-color:var(--chat-direkt-hover)}.chat-direkt-menu-item:disabled{color:var(--chat-direkt-muted);cursor:not-allowed;opacity:.6}.chat-direkt-menu-item:disabled .chat-direkt-menu-item-icon{color:var(--chat-direkt-muted)}.chat-direkt-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.chat-direkt-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--chat-direkt-surface)}.chat-direkt-history-screen::-webkit-scrollbar{display:none}.chat-direkt-tickets-screen{flex:1;overflow-y:auto;padding:16px;background:var(--chat-direkt-surface)}.chat-direkt-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:4px;margin-bottom:18px;border:1px solid var(--chat-direkt-border);border-radius:14px;background:var(--chat-direkt-hover)}.chat-direkt-ticket-tabs button{padding:12px;border-radius:10px;color:var(--chat-direkt-muted);font-weight:600}.chat-direkt-ticket-tabs button.is-active{background:var(--chat-direkt-surface);color:var(--chat-direkt-fg);box-shadow:0 1px 4px #00000014}.chat-direkt-tickets-empty{min-height:430px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:var(--chat-direkt-muted);text-align:center}.chat-direkt-tickets-empty strong{color:var(--chat-direkt-fg);font-size:24px}.chat-direkt-ticket-list{display:grid;gap:8px}.chat-direkt-ticket-card{display:flex;align-items:center;gap:12px;padding:14px;border:1px solid var(--chat-direkt-border);border-radius:12px}.chat-direkt-ticket-card-icon{color:var(--chat-direkt-accent)}.chat-direkt-ticket-card div:last-child{display:grid;gap:4px}.chat-direkt-ticket-card span{color:var(--chat-direkt-muted);font-size:12px}.chat-direkt-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.chat-direkt-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.chat-direkt-history-item:hover{background-color:var(--chat-direkt-hover)}.chat-direkt-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--chat-direkt-hover);color:var(--chat-direkt-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.chat-direkt-history-content{flex:1;min-width:0}.chat-direkt-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.chat-direkt-history-title{font-size:13px;font-weight:500;color:var(--chat-direkt-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chat-direkt-history-time{font-size:10px;color:var(--chat-direkt-muted);flex-shrink:0}.chat-direkt-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.chat-direkt-history-preview{font-size:12px;color:var(--chat-direkt-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.chat-direkt-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--chat-direkt-muted);border:1px solid var(--chat-direkt-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.chat-direkt-history-unread{background-color:var(--chat-direkt-accent);color:var(--chat-direkt-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.chat-direkt-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--chat-direkt-muted)}.chat-direkt-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--chat-direkt-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--chat-direkt-muted)}.chat-direkt-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--chat-direkt-accent);color:var(--chat-direkt-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.chat-direkt-history-cta:hover{background-color:var(--chat-direkt-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.chat-direkt-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--chat-direkt-surface-subtle)}.chat-direkt-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--chat-direkt-border) transparent;background-color:var(--chat-direkt-surface-subtle)}.chat-direkt-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.chat-direkt-date-line{flex:1;height:1px;background-color:var(--chat-direkt-border)}.chat-direkt-date-label{font-size:10px;font-weight:500;color:var(--chat-direkt-muted);text-transform:uppercase}.chat-direkt-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.chat-direkt-msg-row.user{flex-direction:row-reverse}.chat-direkt-msg-avatar{width:26px;height:26px;border-radius:50%;background-color:#2563eb1f;color:var(--chat-direkt-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-bottom:2px}.chat-direkt-msg-body{display:flex;flex-direction:column;max-width:82%;gap:3px}.chat-direkt-msg-row.user .chat-direkt-msg-body{align-items:flex-end}.chat-direkt-msg-bubble{padding:12px 16px;font-size:13.5px;line-height:1.5;border-radius:22px;word-break:break-word}.chat-direkt-msg-row.ai .chat-direkt-msg-bubble{background-color:var(--chat-direkt-bubble-ai);color:var(--chat-direkt-bubble-ai-fg);border:1px solid var(--chat-direkt-border);box-shadow:none;border-bottom-left-radius:22px}.chat-direkt-msg-row.user .chat-direkt-msg-bubble{background-color:var(--chat-direkt-bubble-user);color:var(--chat-direkt-bubble-user-fg);border-bottom-right-radius:4px}.chat-direkt-msg-row.user .chat-direkt-msg-bubble.is-form-submission{background-color:var(--chat-direkt-surface);color:var(--chat-direkt-fg);border:1px solid var(--chat-direkt-border);border-bottom-right-radius:18px}.chat-direkt-form-submission-card{display:grid;gap:8px;min-width:230px}.chat-direkt-form-submission-title{font-size:12px;font-weight:700;color:var(--chat-direkt-accent)}.chat-direkt-form-submission-grid{display:grid;gap:6px}.chat-direkt-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.chat-direkt-form-submission-row dt{font-size:11px;color:var(--chat-direkt-muted)}.chat-direkt-form-submission-row dd{font-size:12px;font-weight:600;color:var(--chat-direkt-fg);word-break:break-word;text-align:right}.chat-direkt-markdown p{margin-bottom:8px}.chat-direkt-markdown p:last-child{margin-bottom:0}.chat-direkt-markdown strong{font-weight:600}.chat-direkt-markdown em{font-style:italic}.chat-direkt-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12px;background-color:#00000014;padding:2px 5px;border-radius:4px}.chat-direkt-markdown pre{background-color:#1e293b;color:#f8fafc;padding:10px 12px;border-radius:8px;overflow-x:auto;margin:6px 0;font-size:12px}.chat-direkt-markdown pre code{background:transparent;padding:0;color:inherit}.chat-direkt-markdown ul,.chat-direkt-markdown ol{padding-left:18px;margin:6px 0}.chat-direkt-markdown li{margin-bottom:4px}.chat-direkt-markdown a{color:var(--chat-direkt-accent);text-decoration:underline;text-underline-offset:2px}.chat-direkt-markdown a:hover{opacity:.85}.chat-direkt-sources{margin-top:8px;display:flex;flex-direction:column;gap:4px}.chat-direkt-sources-title{font-size:10px;font-weight:600;text-transform:uppercase;color:var(--chat-direkt-muted)}.chat-direkt-source-pill{display:inline-flex;align-items:center;gap:5px;background-color:var(--chat-direkt-surface);border:1px solid var(--chat-direkt-border);border-radius:6px;padding:4px 8px;font-size:11px;color:var(--chat-direkt-fg);text-decoration:none;transition:all .15s ease}.chat-direkt-source-pill:hover{border-color:var(--chat-direkt-accent);background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent-hover)}.chat-direkt-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.chat-direkt-followup-chip{background-color:var(--chat-direkt-surface);border:1px solid var(--chat-direkt-accent);color:var(--chat-direkt-accent);border-radius:999px;padding:5px 12px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s ease}.chat-direkt-followup-chip:hover{background-color:var(--chat-direkt-accent-hover);color:var(--chat-direkt-accent-contrast)}.chat-direkt-hidden-input{display:none}.chat-direkt-attachment-list{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.chat-direkt-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--chat-direkt-border);background:var(--chat-direkt-surface);border-radius:999px;padding:4px 10px;font-size:11px;color:var(--chat-direkt-fg)}.chat-direkt-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--chat-direkt-muted);padding:0;cursor:pointer}.chat-direkt-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--chat-direkt-muted);padding:0 4px}.chat-direkt-msg-actions{display:inline-flex;align-items:center;gap:6px}.chat-direkt-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:999px;background:transparent;color:var(--chat-direkt-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.chat-direkt-msg-action-btn svg{width:16px!important;height:16px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.chat-direkt-msg-action-btn:hover{color:var(--chat-direkt-fg);background-color:var(--chat-direkt-hover)}.chat-direkt-msg-action-btn:active{transform:scale(.94)}.chat-direkt-msg-action-btn:focus-visible{outline:2px solid var(--chat-direkt-accent, #2563eb);outline-offset:1px}.chat-direkt-msg-action-btn.is-active,.chat-direkt-mic-btn.is-active{color:var(--chat-direkt-accent, #2563eb);background-color:#2563eb1a}.chat-direkt-history-item-wrap{position:relative}.chat-direkt-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--chat-direkt-surface);border:1px solid var(--chat-direkt-border);color:var(--chat-direkt-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.chat-direkt-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.chat-direkt-typing-indicator{display:flex;align-items:center;gap:4px;padding:10px 14px;background-color:var(--chat-direkt-bubble-ai);border-radius:16px 16px 16px 4px;width:fit-content}.chat-direkt-typing-dot{width:6px;height:6px;border-radius:50%;background-color:var(--chat-direkt-muted);animation:chat-direkt-bounce 1.4s infinite ease-in-out both}.chat-direkt-typing-dot:nth-child(1){animation-delay:-.32s}.chat-direkt-typing-dot:nth-child(2){animation-delay:-.16s}@keyframes chat-direkt-bounce{0%,80%,to{transform:scale(0);opacity:.4}40%{transform:scale(1);opacity:1}}.chat-direkt-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:8px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.chat-direkt-input-area{background-color:var(--chat-direkt-surface-subtle);padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0}.chat-direkt-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:10px 10px 0 0;background-color:var(--chat-direkt-surface-subtle);border:1px solid var(--chat-direkt-border);border-bottom:none;padding:8px 10px 20px;margin-bottom:-14px;position:relative;z-index:1}.chat-direkt-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--chat-direkt-border);border-right:1px solid var(--chat-direkt-border);background-color:var(--chat-direkt-surface-subtle);pointer-events:none}.chat-direkt-dismissible-notice-text{font-size:12px;color:var(--chat-direkt-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chat-direkt-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--chat-direkt-muted);flex-shrink:0}.chat-direkt-dismissible-notice-close:hover{background-color:var(--chat-direkt-hover);color:var(--chat-direkt-fg)}.chat-direkt-input-wrapper{display:flex;align-items:center;gap:8px;background-color:transparent;border:1.5px solid var(--chat-direkt-border);border-radius:999px;min-height:48px;padding:7px 8px 7px 14px;transition:border-color .15s ease,box-shadow .15s ease;position:relative;z-index:2}.chat-direkt-input-wrapper.is-recording{padding-right:10px}.chat-direkt-input-wrapper:focus-within{border-color:var(--chat-direkt-fg);box-shadow:0 0 0 2px #11182714}.chat-direkt-dictation-processing{font-size:12px;color:var(--chat-direkt-muted);padding:0 2px}.chat-direkt-textarea{flex:1;min-height:20px;max-height:100px;resize:none;font-size:14px;color:var(--chat-direkt-fg);line-height:1.4;padding:2px 0;align-content:center;scrollbar-width:none}.chat-direkt-textarea::-webkit-scrollbar{display:none}.chat-direkt-textarea::placeholder{color:var(--chat-direkt-muted)}.chat-direkt-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.chat-direkt-recording-btn{width:36px;height:36px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--chat-direkt-border);background:var(--chat-direkt-surface);color:var(--chat-direkt-muted);transition:background-color .15s ease,color .15s ease,border-color .15s ease}.chat-direkt-recording-btn:hover:not(:disabled){background-color:var(--chat-direkt-hover);color:var(--chat-direkt-fg)}.chat-direkt-recording-btn.is-confirm{background-color:var(--chat-direkt-send-accent);color:var(--chat-direkt-send-accent-contrast);border-color:var(--chat-direkt-send-accent)}.chat-direkt-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--chat-direkt-send-accent-contrast)}.chat-direkt-recording-btn:disabled{opacity:.6;cursor:not-allowed}.chat-direkt-wave-track{position:relative;flex:1;min-width:90px;height:22px}.chat-direkt-wave-track:before{content:none}.chat-direkt-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.chat-direkt-wave>span{width:2px;min-height:3px;border-radius:999px;background-color:var(--chat-direkt-fg);transition:height 80ms linear}.chat-direkt-mic-btn{width:28px;height:28px;border-radius:999px;color:var(--chat-direkt-fg);border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;transition:background-color .15s ease,color .15s ease,border-color .15s ease}.chat-direkt-mic-btn:hover{background-color:var(--chat-direkt-hover);border-color:var(--chat-direkt-border);color:var(--chat-direkt-fg)}.chat-direkt-send-btn{width:26px;height:26px;border-radius:50%;border:1px solid var(--chat-direkt-border);background-color:var(--chat-direkt-surface);color:var(--chat-direkt-send-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s ease,border-color .15s ease}.chat-direkt-send-btn:hover:not(:disabled){border-color:var(--chat-direkt-send-accent);background-color:var(--chat-direkt-send-accent);color:var(--chat-direkt-send-accent-contrast);transform:scale(1.04)}.chat-direkt-send-btn:disabled{opacity:.8;color:var(--chat-direkt-muted);background-color:var(--chat-direkt-surface-subtle);cursor:not-allowed}.chat-direkt-custom-footer{text-align:center;font-size:11px;color:var(--chat-direkt-muted);margin-top:-2px}.chat-direkt-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--chat-direkt-muted);padding:2px 0 0;background-color:transparent}.chat-direkt-history-screen .chat-direkt-footer{background-color:var(--chat-direkt-surface);padding:10px 12px 12px}.chat-direkt-footer a{color:var(--chat-direkt-fg);font-weight:500;text-decoration:none}.chat-direkt-footer a:hover{text-decoration:underline}.chat-direkt-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.chat-direkt-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--chat-direkt-surface-subtle)}.chat-direkt-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:8px}.chat-direkt-suggestion-pill{max-width:min(100%,280px);padding:8px 16px;border-radius:999px;border:1px solid var(--chat-direkt-border);background-color:var(--chat-direkt-surface);font-size:13px;font-weight:500;color:var(--chat-direkt-fg);transition:all .15s ease;text-align:left;white-space:normal}.chat-direkt-suggestion-pill:hover{border-color:var(--chat-direkt-accent);background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent-hover)}.chat-direkt-suggestion-enter{animation:chat-direkt-suggestion-fade-in .18s ease}@keyframes chat-direkt-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.chat-direkt-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.chat-direkt-contact-screen::-webkit-scrollbar{display:none}.chat-direkt-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.chat-direkt-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--chat-direkt-border);border-radius:12px;background:var(--chat-direkt-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.chat-direkt-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.chat-direkt-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:999px;border:1px solid var(--chat-direkt-accent-ring);background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.chat-direkt-contact-entry:hover{border-color:var(--chat-direkt-accent);background-color:var(--chat-direkt-accent-soft-strong)}.chat-direkt-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.chat-direkt-contact-title{font-size:15px;font-weight:700;color:var(--chat-direkt-fg)}.chat-direkt-contact-sub{font-size:12px;color:var(--chat-direkt-muted);line-height:1.4}.chat-direkt-contact-form{display:flex;flex-direction:column;gap:12px}.chat-direkt-contact-field{display:flex;flex-direction:column;gap:5px}.chat-direkt-contact-label{font-size:12px;font-weight:600;color:var(--chat-direkt-fg)}.chat-direkt-required-indicator{color:var(--chat-direkt-danger);font-weight:700}.chat-direkt-contact-input{width:100%;padding:10px 12px;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface-subtle);font-size:13.5px;color:var(--chat-direkt-fg);transition:border-color .15s ease,background-color .15s ease}.chat-direkt-contact-field textarea.chat-direkt-contact-input{min-height:90px;resize:vertical}.chat-direkt-contact-input:focus{border-color:var(--chat-direkt-accent);background-color:var(--chat-direkt-surface)}.chat-direkt-contact-input::placeholder{color:var(--chat-direkt-muted)}.chat-direkt-contact-input.has-error{border-color:var(--chat-direkt-danger);background-color:var(--chat-direkt-danger-soft)}.chat-direkt-custom-select{position:relative}.chat-direkt-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface-subtle);color:var(--chat-direkt-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.chat-direkt-custom-select-trigger:hover{border-color:var(--chat-direkt-accent-ring);background-color:var(--chat-direkt-surface)}.chat-direkt-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.chat-direkt-custom-select.has-error .chat-direkt-custom-select-trigger{border-color:var(--chat-direkt-danger);background-color:var(--chat-direkt-danger-soft)}.chat-direkt-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.chat-direkt-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:7px;padding:7px 8px;color:var(--chat-direkt-fg);font-size:12.5px;border:1px solid transparent}.chat-direkt-custom-select-option:hover{background-color:var(--chat-direkt-hover);border-color:var(--chat-direkt-border)}.chat-direkt-custom-select-option.is-active{background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent);font-weight:600;border-color:var(--chat-direkt-accent-ring)}.chat-direkt-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--chat-direkt-border);border-radius:8px;overflow:hidden;background-color:var(--chat-direkt-surface-subtle)}.chat-direkt-number-stepper.has-error{border-color:var(--chat-direkt-danger);background-color:var(--chat-direkt-danger-soft)}.chat-direkt-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--chat-direkt-muted);background-color:transparent}.chat-direkt-number-stepper-btn:hover{background-color:var(--chat-direkt-hover);color:var(--chat-direkt-fg)}.chat-direkt-number-stepper .chat-direkt-contact-input{border:0;border-left:1px solid var(--chat-direkt-border);border-right:1px solid var(--chat-direkt-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.chat-direkt-number-stepper .chat-direkt-contact-input:focus{background:transparent}.chat-direkt-number-stepper .chat-direkt-contact-input:-webkit-autofill,.chat-direkt-number-stepper .chat-direkt-contact-input:-webkit-autofill:hover,.chat-direkt-number-stepper .chat-direkt-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--chat-direkt-fg);-webkit-box-shadow:0 0 0 1000px var(--chat-direkt-surface-subtle) inset}.chat-direkt-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.chat-direkt-contact-error{font-size:11.5px;color:var(--chat-direkt-danger)}.chat-direkt-contact-submit{margin-top:4px;padding:11px 16px;border-radius:10px;background-color:var(--chat-direkt-accent);color:var(--chat-direkt-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.chat-direkt-contact-submit:hover{background-color:var(--chat-direkt-accent-hover);transform:translateY(-1px)}.chat-direkt-contact-submit:disabled{opacity:.84;cursor:wait}.chat-direkt-contact-submit.is-success{background-color:var(--chat-direkt-success);animation:chat-direkt-submit-pop .24s ease}.chat-direkt-contact-submit.is-error{background-color:var(--chat-direkt-danger);animation:chat-direkt-submit-shake .28s ease}@keyframes chat-direkt-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes chat-direkt-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.chat-direkt-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.chat-direkt-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--chat-direkt-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.chat-direkt-contact-btn{margin-top:10px;padding:10px 18px;border-radius:999px;background-color:var(--chat-direkt-accent);color:var(--chat-direkt-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.chat-direkt-contact-btn:hover{background-color:var(--chat-direkt-accent-hover)}.chat-direkt-form-actions{display:flex;flex-wrap:wrap;gap:8px}.chat-direkt-form-action-chip{border:1px solid var(--chat-direkt-border);background-color:var(--chat-direkt-surface-subtle);color:var(--chat-direkt-fg);border-radius:999px;padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.chat-direkt-form-action-chip.is-active{border-color:var(--chat-direkt-accent);background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent)}.chat-direkt-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--chat-direkt-fg)}.chat-direkt-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface-subtle);padding:10px 12px}.chat-direkt-form-option-group.has-error{border-color:var(--chat-direkt-danger);background-color:var(--chat-direkt-danger-soft)}.chat-direkt-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--chat-direkt-fg)}.chat-direkt-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface);color:var(--chat-direkt-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.chat-direkt-form-radio-option:hover{border-color:var(--chat-direkt-accent-ring);background-color:var(--chat-direkt-hover)}.chat-direkt-form-radio-option.is-active{border-color:var(--chat-direkt-accent);background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent)}.chat-direkt-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.chat-direkt-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.chat-direkt-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.chat-direkt-form-radio-option.is-active .chat-direkt-form-radio-dot{transform:scale(1);opacity:1}.chat-direkt-form-radio-text{font-size:12.5px;font-weight:600}.chat-direkt-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface);color:var(--chat-direkt-fg);padding:8px 10px;font-size:12.5px}.chat-direkt-multi-option.is-active{border-color:var(--chat-direkt-accent);background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent)}.chat-direkt-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.chat-direkt-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface-subtle);padding:8px}.chat-direkt-file-picker.has-error{border-color:var(--chat-direkt-danger);background-color:var(--chat-direkt-danger-soft)}.chat-direkt-file-hidden-input{display:none}.chat-direkt-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface);color:var(--chat-direkt-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.chat-direkt-file-name{font-size:12px;color:var(--chat-direkt-muted)}.chat-direkt-file-uploading{font-size:11.5px;color:var(--chat-direkt-accent);font-weight:600}.chat-direkt-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--chat-direkt-border-soft);overflow:hidden}.chat-direkt-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--chat-direkt-accent),var(--chat-direkt-accent-hover));transition:width .2s ease}.chat-direkt-date-picker{position:relative}.chat-direkt-date-picker.has-error .chat-direkt-date-trigger{border-color:var(--chat-direkt-danger);background-color:var(--chat-direkt-danger-soft)}.chat-direkt-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--chat-direkt-border);border-radius:8px;background-color:var(--chat-direkt-surface-subtle);color:var(--chat-direkt-fg);padding:10px 12px;font-size:13.5px}.chat-direkt-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--chat-direkt-border);border-radius:10px;background-color:var(--chat-direkt-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.chat-direkt-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.chat-direkt-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--chat-direkt-fg)}.chat-direkt-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--chat-direkt-border);border-radius:7px;color:var(--chat-direkt-muted)}.chat-direkt-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.chat-direkt-calendar-weekdays span{text-align:center;font-size:11px;color:var(--chat-direkt-muted)}.chat-direkt-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.chat-direkt-calendar-day{height:28px;border-radius:7px;font-size:12px;color:var(--chat-direkt-fg)}.chat-direkt-calendar-day.is-muted{color:var(--chat-direkt-muted);opacity:.6}.chat-direkt-calendar-day.is-selected{background-color:var(--chat-direkt-accent-soft);color:var(--chat-direkt-accent);font-weight:700}.chat-direkt-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:8px;border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--chat-direkt-success);padding:8px 10px;font-size:12.5px}.chat-direkt-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--chat-direkt-danger)}.chat-direkt-launcher-btn{position:relative;width:54px;height:54px;min-width:54px;min-height:54px;max-width:54px;max-height:54px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:50%;padding:0;background-color:var(--chat-direkt-launcher-bg);color:var(--chat-direkt-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(15,23,42,.18);filter:drop-shadow(0 12px 22px rgba(15,23,42,.3)) drop-shadow(0 4px 10px rgba(15,23,42,.2));cursor:pointer;pointer-events:auto;transition:transform .2s cubic-bezier(.34,1.56,.64,1),filter .2s ease}.chat-direkt-launcher-btn:hover{transform:scale(1.06);filter:drop-shadow(0 14px 26px rgba(15,23,42,.34)) drop-shadow(0 6px 12px rgba(15,23,42,.24))}.chat-direkt-launcher-btn:active{transform:scale(.95)}.chat-direkt-launcher-btn.is-open{width:54px;height:54px;min-width:54px;min-height:54px;max-width:54px;max-height:54px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:50%}.chat-direkt-launcher-label{display:none}.chat-direkt-launcher-btn.has-label{width:auto;min-width:54px;max-width:none;height:54px;min-height:54px;max-height:54px;aspect-ratio:auto;padding:0 18px;border-radius:999px}.chat-direkt-launcher-btn.has-label.is-open{width:54px;min-width:54px;height:54px;min-height:54px;max-width:54px;max-height:54px;aspect-ratio:1 / 1;padding:0;border-radius:50%}.chat-direkt-launcher-btn.has-label.label-left{flex-direction:row-reverse}.chat-direkt-launcher-btn.has-label .chat-direkt-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:13px;font-weight:600;line-height:1}.chat-direkt-launcher-icon{display:flex;align-items:center;justify-content:center;transition:all .25s ease}.chat-direkt-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.chat-direkt-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.chat-direkt-launcher-icon.close-icon,.is-open .chat-direkt-launcher-icon.open-icon{display:none}.is-open .chat-direkt-launcher-icon.close-icon{display:flex}.chat-direkt-unread-badge{position:absolute;top:-2px;right:-2px;width:20px;height:20px;border-radius:50%;background-color:#ef4444;color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid #ffffff;box-shadow:0 2px 6px #ef444466}@media(max-width:480px){.chat-direkt-root.pos-bottom-right,.chat-direkt-root.pos-bottom-left{bottom:0;right:0;left:0;top:0;align-items:stretch;justify-content:flex-end}.chat-direkt-window{width:100vw;height:100vh;max-width:100vw;max-height:100vh;border-radius:0;border:none}.chat-direkt-launcher-btn{position:fixed;bottom:20px;right:20px}}.chat-direkt-msg-row.has-widget{align-items:flex-start}.chat-direkt-msg-row.has-widget .chat-direkt-msg-body{max-width:95%;width:100%}.chat-direkt-msg-row.has-widget .chat-direkt-msg-bubble{width:fit-content;max-width:100%}.chat-direkt-widget-wrapper{width:100%;margin-top:0}.chat-direkt-inline-widget-card{margin-top:0;background:var(--chat-direkt-surface, #ffffff);border:1px solid var(--chat-direkt-border, #e5e7eb);border-radius:12px;padding:12px;font-family:inherit;color:var(--chat-direkt-fg, #111827);overflow:hidden;max-width:100%}.chat-direkt-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.chat-direkt-inline-widget-card.iframe-widget{padding:0}.chat-direkt-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.chat-direkt-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.chat-direkt-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.chat-direkt-widget-success-desc{font-size:13px;color:#166534}.chat-direkt-widget-header{margin-bottom:12px}.chat-direkt-widget-title{font-size:15px;font-weight:600;color:var(--chat-direkt-fg, #111827)}.chat-direkt-widget-subtitle{font-size:12.5px;color:var(--chat-direkt-muted, #6b7280);margin-top:2px}.chat-direkt-widget-form{display:flex;flex-direction:column;gap:10px}.chat-direkt-widget-field{display:flex;flex-direction:column;gap:4px}.chat-direkt-widget-field label{font-size:11.5px;font-weight:500;color:var(--chat-direkt-muted, #4b5563)}.chat-direkt-widget-field input,.chat-direkt-widget-field textarea,.chat-direkt-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:7px;border:1px solid var(--chat-direkt-border, #d1d5db);background:var(--chat-direkt-surface, #ffffff);color:var(--chat-direkt-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.chat-direkt-widget-field input:focus,.chat-direkt-widget-field textarea:focus,.chat-direkt-widget-field select:focus{border-color:var(--chat-direkt-accent, #2563eb)}.chat-direkt-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.chat-direkt-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--chat-direkt-accent, #2563eb)}.chat-direkt-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--chat-direkt-fg, #111827);-webkit-user-select:none;user-select:none}.chat-direkt-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--chat-direkt-border, #e5e7eb)}.chat-direkt-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--chat-direkt-fg, #111827)}.chat-direkt-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--chat-direkt-accent, #0f172a);color:var(--chat-direkt-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:8px;cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.chat-direkt-widget-btn-primary:hover{opacity:.92}.chat-direkt-widget-btn-primary:active{transform:scale(.99)}.chat-direkt-widget-btn-primary.is-booked{background-color:#16a34a}.chat-direkt-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--chat-direkt-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.chat-direkt-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--chat-direkt-muted, #64748b)}.chat-direkt-widget-bar-title{flex:1}.chat-direkt-widget-counter{font-size:11.5px;font-weight:500;color:var(--chat-direkt-muted, #9ca3af);background:var(--chat-direkt-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}.chat-direkt-product-card{display:flex;flex-direction:column;gap:10px}.chat-direkt-product-image-wrap{position:relative;width:100%;height:160px;border-radius:8px;overflow:hidden;background:#f8fafc}.chat-direkt-product-img{width:100%;height:100%;object-fit:cover}.chat-direkt-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.chat-direkt-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.chat-direkt-product-info{display:flex;flex-direction:column;gap:4px}.chat-direkt-product-name{font-size:14.5px;font-weight:600}.chat-direkt-product-sub{font-size:12px;color:var(--chat-direkt-muted, #64748b)}.chat-direkt-product-price{font-size:15px;font-weight:700;color:var(--chat-direkt-accent, #0f172a);margin-top:2px}.chat-direkt-cart-items-list{display:flex;flex-direction:column;gap:10px}.chat-direkt-cart-item-row{display:flex;align-items:center;gap:10px}.chat-direkt-cart-thumb{width:44px;height:44px;border-radius:6px;object-fit:cover;background:#f1f5f9}.chat-direkt-cart-details{flex:1;min-width:0}.chat-direkt-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chat-direkt-cart-item-sub{font-size:11.5px;color:var(--chat-direkt-muted, #64748b)}.chat-direkt-cart-item-price{font-size:13.5px;font-weight:600}.chat-direkt-cart-divider{height:1px;background:var(--chat-direkt-border, #e5e7eb);margin:10px 0}.chat-direkt-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.chat-direkt-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--chat-direkt-muted, #64748b);margin-bottom:12px}.chat-direkt-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .chat-direkt-chart-label{font-size:12px;color:var(--chat-direkt-muted, #64748b)}.chart-widget .chat-direkt-chart-big-number{font-size:26px;font-weight:700;color:var(--chat-direkt-fg, #0f172a);margin:4px 0 16px}.chat-direkt-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--chat-direkt-border, #e2e8f0)}.chat-direkt-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.chat-direkt-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.chat-direkt-bar-fill{width:100%;background:var(--chat-direkt-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.chat-direkt-bar-day{font-size:10px;color:var(--chat-direkt-muted, #94a3b8);font-weight:600}.chat-direkt-classes-list{display:flex;flex-direction:column;gap:10px}.chat-direkt-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;background:var(--chat-direkt-surface-subtle, #f8fafc);border:1px solid var(--chat-direkt-border, #e2e8f0)}.chat-direkt-class-thumb{width:52px;height:52px;border-radius:6px;object-fit:cover}.chat-direkt-class-info{flex:1;min-width:0}.chat-direkt-class-header{display:flex;align-items:center;gap:6px}.chat-direkt-class-title{font-size:13px;font-weight:600}.chat-direkt-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.chat-direkt-level-badge.level-green{background:#dcfce7;color:#15803d}.chat-direkt-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.chat-direkt-class-time{font-size:11.5px;font-weight:500;color:var(--chat-direkt-fg, #1e293b);margin-top:1px}.chat-direkt-class-instructor{font-size:10.5px;color:var(--chat-direkt-muted, #64748b)}.chat-direkt-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:14px;cursor:pointer;white-space:nowrap}.chat-direkt-book-btn.is-booked{background:#e2e8f0;color:#475569}.chat-direkt-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:8px;overflow:hidden;margin-bottom:10px}.chat-direkt-hotel-img{width:100%;height:100%;object-fit:cover}.chat-direkt-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.chat-direkt-hotel-name{font-size:15px;font-weight:600}.chat-direkt-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--chat-direkt-muted, #64748b);margin:4px 0 10px}.chat-direkt-meta-item{display:inline-flex;align-items:center;gap:4px}.chat-direkt-meta-icon{color:var(--chat-direkt-muted, #64748b)}.chat-direkt-rating{color:#f59e0b;font-weight:600}.chat-direkt-star-icon{color:#f59e0b}.chat-direkt-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.chat-direkt-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--chat-direkt-surface-subtle, #f1f5f9);border:1px solid var(--chat-direkt-border, #e2e8f0);border-radius:6px;color:var(--chat-direkt-fg, #334155)}.chat-direkt-amenity-icon{flex-shrink:0;color:var(--chat-direkt-muted, #64748b)}.chat-direkt-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.chat-direkt-weather-top{display:flex;align-items:center;justify-content:space-between}.chat-direkt-weather-svg{color:#fef08a}.chat-direkt-weather-temp{font-size:32px;font-weight:700}.chat-direkt-weather-city{font-size:16px;font-weight:600;margin-top:6px}.chat-direkt-weather-cond{font-size:13px;font-weight:500;opacity:.9}.chat-direkt-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.chat-direkt-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.chat-direkt-iframe-frame{width:100%;height:100%;border:none}.chat-direkt-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.chat-direkt-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--chat-direkt-muted, #64748b);padding:2px 6px;border-radius:4px}.chat-direkt-iframe-open-btn:hover{background:var(--chat-direkt-surface-subtle, #f1f5f9);color:var(--chat-direkt-fg, #0f172a)}', ge = {};
function tr(t, e) {
  (ge[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function Ji(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, document.body.appendChild(e)), e;
}
function Xi(t, e) {
  const i = e.initialConfig || {};
  return {
    ...t,
    ...i,
    position: e.position || i.position || t.position || "bottom-right",
    apiUrl: e.apiUrl || i.apiUrl || t.apiUrl,
    colors: { ...t.colors || {}, ...i.colors || {} },
    content: { ...t.content || {}, ...i.content || {} },
    features: { ...t.features || {}, ...i.features || {} }
  };
}
const Se = /* @__PURE__ */ new WeakMap();
async function Ke(t, e = {}) {
  const i = Se.get(t), n = async () => {
    const a = e.widgetId || e.companyId || "default", c = await Qi(a, e.apiUrl), h = Xi(c, e);
    let u = t.shadowRoot;
    u || (u = t.attachShadow({ mode: "open" })), u.innerHTML = "";
    const l = document.createElement("style");
    l.textContent = Yi, u.appendChild(l);
    const f = document.createElement("div");
    f.className = "chat-direkt-shadow-mount", u.appendChild(f), ct(
      /* @__PURE__ */ r(
        Oi,
        {
          config: h,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          initialScreen: e.initialScreen,
          onEvent: tr
        }
      ),
      f
    );
    const k = le();
    return k && (t.__pitajController = k), {
      controller: k,
      unmount: () => {
        ct(null, f), u && (u.innerHTML = "");
      }
    };
  }, o = (i || Promise.resolve()).then(n, n);
  Se.set(t, o);
  try {
    return await o;
  } finally {
    Se.get(t) === o && Se.delete(t);
  }
}
let xe = null;
const Ie = {
  mount: async (t, e) => {
    const i = await Ke(t, e);
    return xe = i.unmount, i;
  },
  unmount: () => {
    xe && (xe(), xe = null);
  },
  init: async (t) => {
    const e = Ji(t.containerId || "pitaj-io-widget-root"), i = await Ke(e, {
      widgetId: t.widgetId,
      companyId: t.companyId,
      apiUrl: t.apiUrl,
      position: t.position,
      startOpen: t.startOpen,
      isInline: t.isInline,
      initialScreen: t.initialScreen,
      initialConfig: t.config
    });
    return xe = i.unmount, i;
  },
  open: () => {
    var t;
    return (t = le()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = le()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = le()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = le()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = le()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = le()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = le()) == null ? void 0 : e.setConfig(t);
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
    ge[t] && (ge[t] = ge[t].filter((i) => i !== e));
  },
  emit: (t, e) => {
    tr(t, e);
  }
};
class ea extends HTMLElement {
  constructor() {
    super(...arguments);
    me(this, "unmountFn", null);
  }
  async connectedCallback() {
    const i = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", a = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", c = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: h } = await Ke(this, { widgetId: i, apiUrl: n, position: o, startOpen: a, isInline: c });
    this.unmountFn = h;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function _t(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const i = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", a = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: i, position: n, startOpen: o, isInline: a };
}
var yt;
if (typeof window < "u") {
  const t = ((yt = window.PitajIO) == null ? void 0 : yt._q) || [];
  window.PitajIO = Ie, customElements.get("pitaj-io") || customElements.define("pitaj-io", ea);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, Ie.init(e).then(() => {
      t.forEach(({ method: i, args: n }) => {
        const o = Ie[i];
        typeof o == "function" && o(...n);
      });
    });
  else {
    const i = document.currentScript;
    let n = _t(i);
    if (!n) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let a = o.length - 1; a >= 0; a--) {
        const c = o[a];
        if (c.src && /widget(\.iife)?\.js/i.test(c.src) && (n = _t(c), n))
          break;
      }
    }
    n && Ie.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  ee as A,
  oa as C,
  Br as M,
  ra as P,
  De as S,
  Wr as T,
  ia as U,
  ue as a,
  Lr as b,
  be as c,
  D as d,
  oe as e,
  qr as f,
  aa as g,
  ie as h,
  na as i,
  ca as j,
  pe as k,
  Ie as l,
  Ft as t,
  r as u
};
