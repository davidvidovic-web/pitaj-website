var la = Object.defineProperty;
var da = (t, e, i) => e in t ? la(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Ee = (t, e, i) => da(t, typeof e != "symbol" ? e + "" : e, i);
var wt, ne, Ci, De, ri, Ii, Ti, Li, Bt, Lt, Pt, st = {}, Pi = [], ua = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, kt = Array.isArray;
function Ce(t, e) {
  for (var i in e) t[i] = e[i];
  return t;
}
function Ht(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function ma(t, e, i) {
  var n, o, r, p = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? o = e[r] : p[r] = e[r];
  if (arguments.length > 2 && (p.children = arguments.length > 3 ? wt.call(arguments, 2) : i), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) p[r] === void 0 && (p[r] = t.defaultProps[r]);
  return gt(t, p, n, o, null);
}
function gt(t, e, i, n, o) {
  var r = { type: t, props: e, key: i, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ci, __i: -1, __u: 0 };
  return o == null && ne.vnode != null && ne.vnode(r), r;
}
function Se(t) {
  return t.children;
}
function bt(t, e) {
  this.props = t, this.context = e;
}
function He(t, e) {
  if (e == null) return t.__ ? He(t.__, t.__i + 1) : null;
  for (var i; e < t.__k.length; e++) if ((i = t.__k[e]) != null && i.__e != null) return i.__e;
  return typeof t.type == "function" ? He(t) : null;
}
function Ei(t) {
  var e, i;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((i = t.__k[e]) != null && i.__e != null) {
      t.__e = t.__c.base = i.__e;
      break;
    }
    return Ei(t);
  }
}
function oi(t) {
  (!t.__d && (t.__d = !0) && De.push(t) && !xt.__r++ || ri !== ne.debounceRendering) && ((ri = ne.debounceRendering) || Ii)(xt);
}
function xt() {
  for (var t, e, i, n, o, r, p, s = 1; De.length; ) De.length > s && De.sort(Ti), t = De.shift(), s = De.length, t.__d && (i = void 0, o = (n = (e = t).__v).__e, r = [], p = [], e.__P && ((i = Ce({}, n)).__v = n.__v + 1, ne.vnode && ne.vnode(i), Ut(e.__P, i, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? He(n), !!(32 & n.__u), p), i.__v = n.__v, i.__.__k[i.__i] = i, Bi(r, i, p), i.__e != o && Ei(i)));
  xt.__r = 0;
}
function $i(t, e, i, n, o, r, p, s, m, u, b) {
  var c, g, v, f, _, I, A = n && n.__k || Pi, S = e.length;
  for (m = ha(i, e, A, m, S), c = 0; c < S; c++) (v = i.__k[c]) != null && (g = v.__i === -1 ? st : A[v.__i] || st, v.__i = c, I = Ut(t, v, g, o, r, p, s, m, u, b), f = v.__e, v.ref && g.ref != v.ref && (g.ref && Ft(g.ref, null, v), b.push(v.ref, v.__c || f, v)), _ == null && f != null && (_ = f), 4 & v.__u || g.__k === v.__k ? m = Di(v, m, t) : typeof v.type == "function" && I !== void 0 ? m = I : f && (m = f.nextSibling), v.__u &= -7);
  return i.__e = _, m;
}
function ha(t, e, i, n, o) {
  var r, p, s, m, u, b = i.length, c = b, g = 0;
  for (t.__k = new Array(o), r = 0; r < o; r++) (p = e[r]) != null && typeof p != "boolean" && typeof p != "function" ? (m = r + g, (p = t.__k[r] = typeof p == "string" || typeof p == "number" || typeof p == "bigint" || p.constructor == String ? gt(null, p, null, null, null) : kt(p) ? gt(Se, { children: p }, null, null, null) : p.constructor === void 0 && p.__b > 0 ? gt(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p).__ = t, p.__b = t.__b + 1, s = null, (u = p.__i = fa(p, i, m, c)) !== -1 && (c--, (s = i[u]) && (s.__u |= 2)), s == null || s.__v === null ? (u == -1 && (o > b ? g-- : o < b && g++), typeof p.type != "function" && (p.__u |= 4)) : u != m && (u == m - 1 ? g-- : u == m + 1 ? g++ : (u > m ? g-- : g++, p.__u |= 4))) : t.__k[r] = null;
  if (c) for (r = 0; r < b; r++) (s = i[r]) != null && !(2 & s.__u) && (s.__e == n && (n = He(s)), Ui(s, s));
  return n;
}
function Di(t, e, i) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = Di(n[o], e, i));
    return e;
  }
  t.__e != e && (e && t.type && !i.contains(e) && (e = He(t)), i.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function fa(t, e, i, n) {
  var o, r, p = t.key, s = t.type, m = e[i];
  if (m === null && t.key == null || m && p == m.key && s === m.type && !(2 & m.__u)) return i;
  if (n > (m != null && !(2 & m.__u) ? 1 : 0)) for (o = i - 1, r = i + 1; o >= 0 || r < e.length; ) {
    if (o >= 0) {
      if ((m = e[o]) && !(2 & m.__u) && p == m.key && s === m.type) return o;
      o--;
    }
    if (r < e.length) {
      if ((m = e[r]) && !(2 & m.__u) && p == m.key && s === m.type) return r;
      r++;
    }
  }
  return -1;
}
function si(t, e, i) {
  e[0] == "-" ? t.setProperty(e, i ?? "") : t[e] = i == null ? "" : typeof i != "number" || ua.test(e) ? i : i + "px";
}
function ut(t, e, i, n, o) {
  var r;
  e: if (e == "style") if (typeof i == "string") t.style.cssText = i;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) i && e in i || si(t.style, e, "");
    if (i) for (e in i) n && i[e] === n[e] || si(t.style, e, i[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(Li, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = i, i ? n ? i.t = n.t : (i.t = Bt, t.addEventListener(e, r ? Pt : Lt, r)) : t.removeEventListener(e, r ? Pt : Lt, r);
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
function ci(t) {
  return function(e) {
    if (this.l) {
      var i = this.l[e.type + t];
      if (e.u == null) e.u = Bt++;
      else if (e.u < i.t) return;
      return i(ne.event ? ne.event(e) : e);
    }
  };
}
function Ut(t, e, i, n, o, r, p, s, m, u) {
  var b, c, g, v, f, _, I, A, S, D, Y, d, T, N, E, $, M, L = e.type;
  if (e.constructor !== void 0) return null;
  128 & i.__u && (m = !!(32 & i.__u), r = [s = e.__e = i.__e]), (b = ne.__b) && b(e);
  e: if (typeof L == "function") try {
    if (A = e.props, S = "prototype" in L && L.prototype.render, D = (b = L.contextType) && n[b.__c], Y = b ? D ? D.props.value : b.__ : n, i.__c ? I = (c = e.__c = i.__c).__ = c.__E : (S ? e.__c = c = new L(A, Y) : (e.__c = c = new bt(A, Y), c.constructor = L, c.render = ba), D && D.sub(c), c.props = A, c.state || (c.state = {}), c.context = Y, c.__n = n, g = c.__d = !0, c.__h = [], c._sb = []), S && c.__s == null && (c.__s = c.state), S && L.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Ce({}, c.__s)), Ce(c.__s, L.getDerivedStateFromProps(A, c.__s))), v = c.props, f = c.state, c.__v = e, g) S && L.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), S && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (S && L.getDerivedStateFromProps == null && A !== v && c.componentWillReceiveProps != null && c.componentWillReceiveProps(A, Y), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(A, c.__s, Y) === !1 || e.__v == i.__v)) {
        for (e.__v != i.__v && (c.props = A, c.state = c.__s, c.__d = !1), e.__e = i.__e, e.__k = i.__k, e.__k.some(function(z) {
          z && (z.__ = e);
        }), d = 0; d < c._sb.length; d++) c.__h.push(c._sb[d]);
        c._sb = [], c.__h.length && p.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(A, c.__s, Y), S && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(v, f, _);
      });
    }
    if (c.context = Y, c.props = A, c.__P = t, c.__e = !1, T = ne.__r, N = 0, S) {
      for (c.state = c.__s, c.__d = !1, T && T(e), b = c.render(c.props, c.state, c.context), E = 0; E < c._sb.length; E++) c.__h.push(c._sb[E]);
      c._sb = [];
    } else do
      c.__d = !1, T && T(e), b = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++N < 25);
    c.state = c.__s, c.getChildContext != null && (n = Ce(Ce({}, n), c.getChildContext())), S && !g && c.getSnapshotBeforeUpdate != null && (_ = c.getSnapshotBeforeUpdate(v, f)), $ = b, b != null && b.type === Se && b.key == null && ($ = Hi(b.props.children)), s = $i(t, kt($) ? $ : [$], e, i, n, o, r, p, s, m, u), c.base = e.__e, e.__u &= -161, c.__h.length && p.push(c), I && (c.__E = c.__ = null);
  } catch (z) {
    if (e.__v = null, m || r != null) if (z.then) {
      for (e.__u |= m ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      r[r.indexOf(s)] = null, e.__e = s;
    } else for (M = r.length; M--; ) Ht(r[M]);
    else e.__e = i.__e, e.__k = i.__k;
    ne.__e(z, e, i);
  }
  else r == null && e.__v == i.__v ? (e.__k = i.__k, e.__e = i.__e) : s = e.__e = ga(i.__e, e, i, n, o, r, p, m, u);
  return (b = ne.diffed) && b(e), 128 & e.__u ? void 0 : s;
}
function Bi(t, e, i) {
  for (var n = 0; n < i.length; n++) Ft(i[n], i[++n], i[++n]);
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
function Hi(t) {
  return typeof t != "object" || t == null ? t : kt(t) ? t.map(Hi) : Ce({}, t);
}
function ga(t, e, i, n, o, r, p, s, m) {
  var u, b, c, g, v, f, _, I = i.props, A = e.props, S = e.type;
  if (S == "svg" ? o = "http://www.w3.org/2000/svg" : S == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (u = 0; u < r.length; u++) if ((v = r[u]) && "setAttribute" in v == !!S && (S ? v.localName == S : v.nodeType == 3)) {
      t = v, r[u] = null;
      break;
    }
  }
  if (t == null) {
    if (S == null) return document.createTextNode(A);
    t = document.createElementNS(o, S, A.is && A), s && (ne.__m && ne.__m(e, r), s = !1), r = null;
  }
  if (S === null) I === A || s && t.data === A || (t.data = A);
  else {
    if (r = r && wt.call(t.childNodes), I = i.props || st, !s && r != null) for (I = {}, u = 0; u < t.attributes.length; u++) I[(v = t.attributes[u]).name] = v.value;
    for (u in I) if (v = I[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = v;
      else if (!(u in A)) {
        if (u == "value" && "defaultValue" in A || u == "checked" && "defaultChecked" in A) continue;
        ut(t, u, null, v, o);
      }
    }
    for (u in A) v = A[u], u == "children" ? g = v : u == "dangerouslySetInnerHTML" ? b = v : u == "value" ? f = v : u == "checked" ? _ = v : s && typeof v != "function" || I[u] === v || ut(t, u, v, I[u], o);
    if (b) s || c && (b.__html === c.__html || b.__html === t.innerHTML) || (t.innerHTML = b.__html), e.__k = [];
    else if (c && (t.innerHTML = ""), $i(e.type === "template" ? t.content : t, kt(g) ? g : [g], e, i, n, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, p, r ? r[0] : i.__k && He(i, 0), s, m), r != null) for (u = r.length; u--; ) Ht(r[u]);
    s || (u = "value", S == "progress" && f == null ? t.removeAttribute("value") : f !== void 0 && (f !== t[u] || S == "progress" && !f || S == "option" && f !== I[u]) && ut(t, u, f, I[u], o), u = "checked", _ !== void 0 && _ !== t[u] && ut(t, u, _, I[u], o));
  }
  return t;
}
function Ft(t, e, i) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    ne.__e(o, i);
  }
}
function Ui(t, e, i) {
  var n, o;
  if (ne.unmount && ne.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Ft(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      ne.__e(r, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (o = 0; o < n.length; o++) n[o] && Ui(n[o], e, i || typeof t.type != "function");
  i || Ht(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ba(t, e, i) {
  return this.constructor(t, i);
}
function pi(t, e, i) {
  var n, o, r, p;
  e == document && (e = document.documentElement), ne.__ && ne.__(t, e), o = (n = !1) ? null : e.__k, r = [], p = [], Ut(e, t = e.__k = ma(Se, null, [t]), o || st, st, e.namespaceURI, o ? null : e.firstChild ? wt.call(e.childNodes) : null, r, o ? o.__e : e.firstChild, n, p), Bi(r, t, p);
}
wt = Pi.slice, ne = { __e: function(t, e, i, n) {
  for (var o, r, p; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), p = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), p = o.__d), p) return o.__E = o;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Ci = 0, bt.prototype.setState = function(t, e) {
  var i;
  i = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof t == "function" && (t = t(Ce({}, i), this.props)), t && Ce(i, t), t != null && this.__v && (e && this._sb.push(e), oi(this));
}, bt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), oi(this));
}, bt.prototype.render = Se, De = [], Ii = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ti = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, xt.__r = 0, Li = /(PointerCapture)$|Capture$/i, Bt = 0, Lt = ci(!1), Pt = ci(!0);
var va = 0;
function a(t, e, i, n, o, r) {
  e || (e = {});
  var p, s, m = e;
  if ("ref" in m) for (s in m = {}, e) s == "ref" ? p = e[s] : m[s] = e[s];
  var u = { type: t, props: m, key: i, ref: p, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --va, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof t == "function" && (p = t.defaultProps)) for (s in p) m[s] === void 0 && (m[s] = p[s]);
  return ne.vnode && ne.vnode(u), u;
}
var ct, ce, At, li, pt = 0, Fi = [], le = ne, di = le.__b, ui = le.__r, mi = le.diffed, hi = le.__c, fi = le.unmount, gi = le.__;
function Rt(t, e) {
  le.__h && le.__h(ce, t, pt || e), pt = 0;
  var i = ce.__H || (ce.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function U(t) {
  return pt = 1, ja(Oi, t);
}
function ja(t, e, i) {
  var n = Rt(ct++, 2);
  if (n.t = t, !n.__c && (n.__ = [Oi(void 0, e), function(s) {
    var m = n.__N ? n.__N[0] : n.__[0], u = n.t(m, s);
    m !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = ce, !ce.__f)) {
    var o = function(s, m, u) {
      if (!n.__c.__H) return !0;
      var b = n.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (b.every(function(g) {
        return !g.__N;
      })) return !r || r.call(this, s, m, u);
      var c = n.__c.props !== s;
      return b.forEach(function(g) {
        if (g.__N) {
          var v = g.__[0];
          g.__ = g.__N, g.__N = void 0, v !== g.__[0] && (c = !0);
        }
      }), r && r.call(this, s, m, u) || c;
    };
    ce.__f = !0;
    var r = ce.shouldComponentUpdate, p = ce.componentWillUpdate;
    ce.componentWillUpdate = function(s, m, u) {
      if (this.__e) {
        var b = r;
        r = void 0, o(s, m, u), r = b;
      }
      p && p.call(this, s, m, u);
    }, ce.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function q(t, e) {
  var i = Rt(ct++, 3);
  !le.__s && Ri(i.__H, e) && (i.__ = t, i.u = e, ce.__H.__h.push(i));
}
function ee(t) {
  return pt = 5, Be(function() {
    return { current: t };
  }, []);
}
function Be(t, e) {
  var i = Rt(ct++, 7);
  return Ri(i.__H, e) && (i.__ = t(), i.__H = e, i.__h = t), i.__;
}
function re(t, e) {
  return pt = 8, Be(function() {
    return t;
  }, e);
}
function xa() {
  for (var t; t = Fi.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(vt), t.__H.__h.forEach(Et), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], le.__e(e, t.__v);
  }
}
le.__b = function(t) {
  ce = null, di && di(t);
}, le.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), gi && gi(t, e);
}, le.__r = function(t) {
  ui && ui(t), ct = 0;
  var e = (ce = t.__c).__H;
  e && (At === ce ? (e.__h = [], ce.__h = [], e.__.forEach(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (e.__h.forEach(vt), e.__h.forEach(Et), e.__h = [], ct = 0)), At = ce;
}, le.diffed = function(t) {
  mi && mi(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Fi.push(e) !== 1 && li === le.requestAnimationFrame || ((li = le.requestAnimationFrame) || wa)(xa)), e.__H.__.forEach(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), At = ce = null;
}, le.__c = function(t, e) {
  e.some(function(i) {
    try {
      i.__h.forEach(vt), i.__h = i.__h.filter(function(n) {
        return !n.__ || Et(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], le.__e(n, i.__v);
    }
  }), hi && hi(t, e);
}, le.unmount = function(t) {
  fi && fi(t);
  var e, i = t.__c;
  i && i.__H && (i.__H.__.forEach(function(n) {
    try {
      vt(n);
    } catch (o) {
      e = o;
    }
  }), i.__H = void 0, e && le.__e(e, i.__v));
};
var bi = typeof requestAnimationFrame == "function";
function wa(t) {
  var e, i = function() {
    clearTimeout(n), bi && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(i, 100);
  bi && (e = requestAnimationFrame(i));
}
function vt(t) {
  var e = ce, i = t.__c;
  typeof i == "function" && (t.__c = void 0, i()), ce = e;
}
function Et(t) {
  var e = ce;
  t.__c = t.__(), ce = e;
}
function Ri(t, e) {
  return !t || t.length !== e.length || e.some(function(i, n) {
    return i !== t[n];
  });
}
function Oi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
class Vi extends Error {
  constructor(i, n = 60, o) {
    super(i);
    Ee(this, "retryAfterSeconds");
    Ee(this, "code");
    this.name = "RateLimitError", this.retryAfterSeconds = n, this.code = o;
  }
}
class Ot extends Error {
  constructor(i, n, o, r) {
    super(i);
    Ee(this, "status");
    Ee(this, "code");
    Ee(this, "retryAfterSeconds");
    this.name = "WidgetApiError", this.status = n, this.code = o, this.retryAfterSeconds = r;
  }
}
function ka(t, e) {
  const i = typeof t == "number" ? t : typeof t == "string" ? parseInt(t, 10) : NaN;
  return Number.isFinite(i) && i > 0 ? Math.floor(i) : e;
}
async function yt(t, e) {
  const i = await t.json().catch(() => null);
  Ki(t.status, i, e, t.headers.get("Retry-After"));
}
function Ki(t, e, i, n) {
  const o = typeof (e == null ? void 0 : e.code) == "string" ? e.code : void 0, r = (e == null ? void 0 : e.error) || (e == null ? void 0 : e.message) || i, p = ka((e == null ? void 0 : e.retry_after) ?? n, 60);
  throw t === 429 || o === "RATE_LIMIT_EXCEEDED" ? new Vi(r, p, o) : new Ot(r, t, o, p);
}
const Ct = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
function ya(t, e) {
  const n = `pitaj_widget_session_v2:${(e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "")}:${t}`;
  rt.delete(n);
  try {
    localStorage.removeItem(n);
  } catch {
  }
}
async function Ue(t, e) {
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), n = `pitaj_widget_session_v2:${i}:${t}`;
  if (rt.has(n)) return rt.get(n);
  try {
    const p = localStorage.getItem(n);
    if (p)
      return rt.set(n, p), p;
  } catch {
  }
  const o = Ct.get(n);
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
    rt.set(n, s.token);
    try {
      localStorage.setItem(n, s.token);
    } catch {
    }
    return s.token;
  })();
  Ct.set(n, r);
  try {
    return await r;
  } finally {
    Ct.delete(n);
  }
}
async function _a(t, e, i, n, o) {
  if (!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(i) || i < 1) throw new Error("Razgovor nije dostupan.");
  const r = (o || window.location.origin).replace(/\/$/, ""), p = await Ue(t, o), s = await fetch(`${r}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/action-dismissals`, {
    method: "POST",
    cache: "no-store",
    headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${p}` },
    body: JSON.stringify({ action_id: i, dismissal_uuid: n })
  });
  s.ok || await yt(s, "Poruku nije moguće sačuvati.");
  const m = await s.json();
  if (typeof m.message != "string" || !m.message.trim() || m.message.length > 1020) throw new Error("Neispravan odgovor.");
  return m.message;
}
function Sa(t, e) {
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
async function Ma(t, e) {
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
      const m = r.split(/\r?\n/);
      r = m.pop() || "";
      for (const u of m) {
        const b = u.trim();
        if (!(!b || b.startsWith(":")) && b.startsWith("data:")) {
          const c = b.slice(5).trim();
          if (c === "[DONE]") {
            e.onDone && e.onDone();
            return;
          }
          try {
            const g = JSON.parse(c);
            if (typeof g == "string")
              e.onChunk(g);
            else if (g && typeof g == "object") {
              (g.chunk || g.token || g.content || g.text) && e.onChunk(g.chunk || g.token || g.content || g.text), g.sources && Array.isArray(g.sources) && e.onSources && e.onSources(g.sources);
              const v = g.suggestedQuestions ?? g.suggested_questions;
              Array.isArray(v) && v.length > 0 && e.onSuggestedQuestions && e.onSuggestedQuestions(v), e.onConversationId && (g.conversation_id !== void 0 || g.conversationId !== void 0) && e.onConversationId(
                g.conversation_id ?? g.conversationId
              );
              const f = g.ticket_number ?? g.ticketNumber;
              e.onTicketNumber && f !== void 0 && f !== null && String(f).trim() !== "" && String(f).trim() !== "undefined" && String(f).trim() !== "null" && e.onTicketNumber(
                String(f).trim()
              ), e.onActionTrigger && g.triggered_action && typeof g.triggered_action == "object" && e.onActionTrigger(g.triggered_action);
            }
          } catch {
            e.onChunk(c);
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
function Yi(t) {
  if (typeof t != "string") return null;
  const e = t.trim().toUpperCase();
  return !/^[A-Z]{2}$/.test(e) || e === "XX" ? null : e;
}
function Vt(t) {
  if (typeof t != "string") return null;
  const e = t.trim();
  return e.length > 0 ? e : null;
}
function Na(t) {
  if (typeof Intl > "u" || typeof Intl.DisplayNames > "u")
    return null;
  try {
    const e = new Intl.DisplayNames(["bs", "hr", "sr", "en"], { type: "region" });
    return Vt(e.of(t));
  } catch {
    return null;
  }
}
function za() {
  let t = null, e = null;
  if (typeof window < "u")
    try {
      const i = localStorage.getItem("pitaj_io_visitor_meta") || localStorage.getItem("chat_direkt_visitor_meta");
      if (i) {
        const n = JSON.parse(i);
        t = Yi(
          n.country_code ?? n.countryCode ?? n.visitor_country_code ?? n.visitorCountryCode ?? n.country
        ), e = Vt(
          n.country_name ?? n.countryName ?? n.visitor_country_name ?? n.visitorCountryName
        );
      }
    } catch {
    }
  return !e && t && (e = Na(t)), { code: t, name: e };
}
const vi = [
  "Razumijem vaše pitanje! Naš AI asistent vam stoji na raspolaganju.",
  "Hvala na upitu! Provjerio sam bazu znanja i stojim vam na raspolaganju za sve detalje."
];
async function Aa(t, e, i, n) {
  var m;
  const o = (n == null ? void 0 : n.action) || (i && i.length > 0 ? i[0] : null);
  if (o && e.onActionTrigger) {
    const c = (!!(o.widget_id || o.widget || n != null && n.widget) ? "Evo traženih informacija i pregleda:" : "Za ovu radnju pripremio sam formu ispod. Molimo popunite tražene podatke:").split(" ");
    for (let g = 0; g < c.length; g++) {
      const v = c[g] + (g < c.length - 1 ? " " : "");
      e.onChunk(v), await new Promise((f) => setTimeout(f, 20));
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
  const r = `${vi[Math.floor(Math.random() * vi.length)]}

Vaše pitanje: *"${t}"* je zabilježeno. Ukoliko trebate dodatnu asistenciju, tu sam 24/7!`, p = ((m = n == null ? void 0 : n.content) == null ? void 0 : m.showFollowupSuggestions) === !1 ? [] : ["Kako funkcionira asistent?", "Mogu li dobiti kontakt podrške?"], s = r.split(" ");
  for (let u = 0; u < s.length; u++) {
    const b = s[u] + (u < s.length - 1 ? " " : "");
    e.onChunk(b), await new Promise((c) => setTimeout(c, 20 + Math.random() * 20));
  }
  e.onSuggestedQuestions && p.length > 0 && e.onSuggestedQuestions(p), e.onDone && e.onDone();
}
async function Ca(t) {
  const {
    companyId: e,
    conversationId: i,
    visitorId: n,
    message: o,
    forceNewConversation: r,
    apiUrl: p,
    mockMode: s,
    visitorName: m,
    visitorEmail: u,
    visitorPhone: b,
    visitorCountryCode: c,
    visitorCountryName: g,
    actions: v,
    previewDraft: f,
    callbacks: _
  } = t;
  if (s || !e || e === "default") {
    await Aa(o, _, v, f);
    return;
  }
  const I = (p || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), A = za(), S = Yi(c) ?? A.code ?? void 0, D = Vt(g) ?? A.name ?? void 0, Y = await Ue(e, p), d = `${I}/api/widget/${encodeURIComponent(e)}/v2/chat`, T = i && !i.startsWith("conv-") ? parseInt(i, 10) : null, N = await fetch(d, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Y}`,
      Accept: "text/event-stream, application/json"
    },
    body: JSON.stringify({
      message: o,
      conversation_id: T,
      force_new_conversation: r === !0,
      visitor_id: n,
      visitor_language: t.visitorLanguage || void 0,
      visitor_name: m || void 0,
      visitor_email: u || void 0,
      visitor_phone: b || void 0,
      visitor_country_code: S,
      visitor_country_name: D
    })
  });
  if (N.ok || await yt(N, `API greška (${N.status})`), (N.headers.get("Content-Type") || "").includes("text/event-stream"))
    await Ma(N, _);
  else {
    const $ = await N.json(), M = $.answer || $.message || "";
    $.conversation_id !== void 0 && _.onConversationId && _.onConversationId($.conversation_id);
    const L = $.ticket_number ?? $.ticketNumber;
    if (L != null && String(L).trim() !== "" && String(L).trim() !== "undefined" && String(L).trim() !== "null" && _.onTicketNumber && _.onTicketNumber(String(L).trim()), $.triggered_action && _.onActionTrigger && _.onActionTrigger($.triggered_action), M && M.trim()) {
      const W = M.split(" ");
      for (let O = 0; O < W.length; O++) {
        const te = W[O] + (O < W.length - 1 ? " " : "");
        _.onChunk(te), await new Promise((pe) => setTimeout(pe, 15));
      }
    }
    const z = $.suggestedQuestions ?? $.suggested_questions;
    Array.isArray(z) && z.length > 0 && _.onSuggestedQuestions && _.onSuggestedQuestions(z), _.onDone && _.onDone();
  }
}
async function $t(t) {
  const { widgetId: e, visitorId: i, apiUrl: n, status: o, page: r = 1, perPage: p = 15 } = t, s = (n || "").replace(/\/$/, ""), m = new URLSearchParams({
    page: String(r),
    per_page: String(p)
  });
  o && m.set("status", o);
  const u = await Ue(e, n), b = await fetch(`${s}/api/widget/${encodeURIComponent(e)}/v2/tickets?${m}`, { headers: { Authorization: `Bearer ${u}` } }), c = await b.json().catch(() => null);
  if (!b.ok) throw new Error(c && "error" in c ? c.error : "Tikete nije moguće učitati.");
  const g = (c == null ? void 0 : c.data) || [], v = g.map((I) => ({
    id: I.id,
    ticketNumber: I.ticket_number,
    conversationId: I.conversation_id,
    isResolved: !!I.is_resolved,
    updatedAt: I.updated_at,
    messages: (I.messages || []).map((A) => {
      var S;
      return {
        id: String(A.id),
        content: A.content,
        sender: A.role === "user" ? "user" : "ai",
        timestamp: A.created_at,
        status: "sent",
        suggestedQuestions: ((S = A.meta_json) == null ? void 0 : S.suggested_questions) || void 0
      };
    })
  })), f = c == null ? void 0 : c.meta, _ = (f == null ? void 0 : f.has_more) !== void 0 ? !!f.has_more : g.length >= p;
  return {
    tickets: v,
    hasMore: _,
    total: f == null ? void 0 : f.total,
    currentPage: (f == null ? void 0 : f.current_page) ?? r
  };
}
async function Ia(t, e, i) {
  return (await $t({ widgetId: t, visitorId: e, apiUrl: i, page: 1, perPage: 50 })).tickets;
}
async function Ta(t, e, i, n, o) {
  const r = !!e && !e.startsWith("conv-");
  if (!t || t === "default" || o || !r)
    return await new Promise((u) => setTimeout(u, 100)), { message: "Satisfaction rating recorded (mock).", satisfaction: i };
  const p = (n || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, ""), s = await Ue(t, n), m = await fetch(`${p}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/rating`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${s}` },
    body: JSON.stringify({ satisfaction: i })
  });
  if (!m.ok) {
    const b = (await m.json().catch(() => ({}))).error || (m.status === 404 ? "Razgovor ili tiket nije pronađen." : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo."), c = new Error(b);
    throw c.status = m.status, c;
  }
  return await m.json();
}
function ji(t, e = "bs", i = ["bs"]) {
  var u, b;
  const n = (i && i.length > 0 ? i : [e]).map((c) => c.trim().toLowerCase()), o = (e || "bs").trim().toLowerCase();
  let r = "";
  if (t === "website" ? typeof document < "u" && (r = ((u = document.documentElement) == null ? void 0 : u.lang) || ((b = document.querySelector("html")) == null ? void 0 : b.getAttribute("lang")) || "") : typeof navigator < "u" && (r = navigator.language || navigator.languages && navigator.languages[0] || ""), !r || typeof r != "string")
    return o;
  let m = r.split(";")[0].trim().toLowerCase().split(/[-_]/)[0];
  return (m === "hr" || m === "sr") && !n.includes(m) && n.includes("bs") && (m = "bs"), n.includes(m) ? m : o;
}
function Gn(t, e, i) {
  const n = t.current_step;
  return t.run_id !== e.run_id || t.status !== "waiting_input" || (n == null ? void 0 : n.type) !== "wait_submission" || Object.prototype.hasOwnProperty.call(n, "widget") && (!n.widget || n.widget.id !== n.widget_id) || n.form_revision != null && n.form_revision !== e.form_revision ? null : n.widget_id === i && n.display_node_id === e.display_node_id ? n.node_id : null;
}
function xi(t, e) {
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
function La(t, e) {
  if (!e.workflow) return t;
  const { run_id: i, display_node_id: n } = e.workflow, o = `workflow-${i}-${n}`, r = t.messages.findIndex((p) => {
    var s, m, u, b;
    return p.id === o || ((m = (s = p.widget) == null ? void 0 : s.workflow) == null ? void 0 : m.run_id) === i && ((b = (u = p.widget) == null ? void 0 : u.workflow) == null ? void 0 : b.display_node_id) === n;
  });
  if (r >= 0) {
    const p = t.messages[r];
    if (JSON.stringify(p.widget) === JSON.stringify(e)) return t;
    const s = [...t.messages];
    return s[r] = { ...p, widget: e }, { ...t, messages: s };
  }
  return { ...t, messages: [...t.messages, { id: o, content: "", sender: "ai", timestamp: (/* @__PURE__ */ new Date()).toISOString(), widget: e }] };
}
function Pa(t, e) {
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
const wi = "pitaj_io_visitor_id", Ea = "chat_direkt_visitor_id", $a = "pitaj_io_visitor_meta", Da = "chat_direkt_visitor_meta";
function Kt(t) {
  return `pitaj_io_convs_v2_${t}`;
}
function Ba() {
  try {
    let t = localStorage.getItem(wi) || localStorage.getItem(Ea);
    return t || (t = "v_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), localStorage.setItem(wi, t)), t;
  } catch {
    return "v_" + Math.random().toString(36).substring(2, 11);
  }
}
const Ha = [];
function Ua(t) {
  return !!(t.id.startsWith("conv-sample-") || t.title === "Kako da resetujem lozinku?" || t.title === "Mogu li izvesti podatke u CSV?");
}
function Fa(t) {
  return t.filter((e) => !Ua(e)).map((e) => {
    const i = e.ticketNumber && String(e.ticketNumber).trim() !== "" && String(e.ticketNumber).trim() !== "undefined" && String(e.ticketNumber).trim() !== "null" ? String(e.ticketNumber).trim() : null;
    return { ...e, ticketNumber: i, messages: (e.messages || []).map((n) => {
      var o, r;
      return ((o = n.widget) == null ? void 0 : o.type) === "action_client" && ((r = n.widget.config) == null ? void 0 : r.client_action_state) === "pending" ? { ...n, widget: { ...n.widget, config: { ...n.widget.config, client_action_state: "unknown" } } } : n;
    }) };
  });
}
function ki(t) {
  try {
    const e = localStorage.getItem(Kt(t));
    if (e) {
      const i = JSON.parse(e);
      if (Array.isArray(i))
        return Fa(i);
    }
  } catch (e) {
    console.warn("[Pitaj.io] Error reading from localStorage", e);
  }
  return Ha;
}
function Ra(t, e) {
  try {
    localStorage.setItem(Kt(t), JSON.stringify(e));
  } catch (i) {
    console.warn("[Pitaj.io] Error saving to localStorage", i);
  }
}
function yi(t) {
  var o, r, p, s, m, u, b, c, g, v, f, _;
  const e = t.previewDraft, i = (/* @__PURE__ */ new Date()).toISOString(), n = (e == null ? void 0 : e.initialStep) || "idle";
  if (n === "idle") {
    const I = (e == null ? void 0 : e.simulatedGreeting) || t.welcomeHeadline || t.welcomeMessage || "Zdravo! Kako vam mogu pomoći danas?", A = (o = e == null ? void 0 : e.action) != null && o.trigger_hint ? [e.action.trigger_hint] : t.suggestedQuestions && t.suggestedQuestions.length > 0 ? t.suggestedQuestions : [];
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
            suggestedQuestions: A.length > 0 ? A : void 0
          }
        ]
      }
    ];
  }
  if (n === "form") {
    const I = (e == null ? void 0 : e.simulatedUserMessage) || ((r = e == null ? void 0 : e.action) == null ? void 0 : r.trigger_hint) || "Pokreni akciju", S = !!((p = e == null ? void 0 : e.action) != null && p.widget || e != null && e.widget) ? "Evo detalja koje ste zatražili:" : "Molimo popunite formu ispod kako bismo obradili vaš zahtjev:", D = (e == null ? void 0 : e.widget) || ((s = e == null ? void 0 : e.action) == null ? void 0 : s.widget) || void 0;
    return [
      {
        id: "preview-conv-1",
        title: ((m = e == null ? void 0 : e.action) == null ? void 0 : m.name) || "Pregled akcije",
        preview: S,
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
            content: S,
            sender: "ai",
            timestamp: i,
            status: "sent",
            widget: D
          }
        ]
      }
    ];
  }
  if (n === "submitted") {
    const I = (e == null ? void 0 : e.simulatedUserMessage) || ((u = e == null ? void 0 : e.action) == null ? void 0 : u.trigger_hint) || "Pokreni akciju", A = ((b = e == null ? void 0 : e.form) == null ? void 0 : b.name) || ((c = e == null ? void 0 : e.action) == null ? void 0 : c.name) || "Forma", S = ((g = e == null ? void 0 : e.form) == null ? void 0 : g.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
    return [
      {
        id: "preview-conv-1",
        title: A,
        preview: S,
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
            content: `Forma: ${A}
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
    const I = (e == null ? void 0 : e.simulatedUserMessage) || ((v = e == null ? void 0 : e.action) == null ? void 0 : v.trigger_hint) || "Pokreni akciju", A = ((f = e == null ? void 0 : e.action) == null ? void 0 : f.dismiss_message) || "Zatvorili ste formu. Slobodno nastavite razgovor ako vam zatreba bilo šta drugo!";
    return [
      {
        id: "preview-conv-1",
        title: ((_ = e == null ? void 0 : e.action) == null ? void 0 : _.name) || "Pregled akcije",
        preview: A,
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
            content: A,
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
function Oa(t, e) {
  var Me, x, K, Z, ue, me, Pe, Fe, Re, Oe, Ve, Ke, Ye, We, Ze, Ge, qe, Qe, Je, Xe, et, tt, y;
  const i = !!(t.isPreview || t.previewDraft), [n, o] = U(t), [r, p] = U((e == null ? void 0 : e.startOpen) ?? !1), [s, m] = U(
    (e == null ? void 0 : e.initialScreen) ?? (i ? "conversation" : "new-conversation")
  ), [u, b] = U(
    () => i ? yi(t) : ki(t.companyId)
  ), [c, g] = U(() => {
    if (i) return "preview-conv-1";
    if ((e == null ? void 0 : e.initialScreen) === "conversation") {
      const l = ki(t.companyId);
      return l.length > 0 ? l[0].id : null;
    }
    return null;
  }), [v, f] = U(!1), [_, I] = U(null), [A, S] = U(null), [D, Y] = U(!1), [d, T] = U(
    () => {
      var l, h, w;
      return ji(
        (l = t.content) == null ? void 0 : l.languageSource,
        ((h = t.content) == null ? void 0 : h.defaultLanguage) || "bs",
        ((w = t.content) == null ? void 0 : w.supportedLanguages) || ["bs"]
      );
    }
  );
  q(() => {
    var h, w, P;
    const l = ji(
      (h = n.content) == null ? void 0 : h.languageSource,
      ((w = n.content) == null ? void 0 : w.defaultLanguage) || "bs",
      ((P = n.content) == null ? void 0 : P.supportedLanguages) || ["bs"]
    );
    T(l);
  }, [
    (Me = n.content) == null ? void 0 : Me.languageSource,
    (x = n.content) == null ? void 0 : x.defaultLanguage,
    (K = n.content) == null ? void 0 : K.supportedLanguages
  ]);
  const N = ee(Ba()), [E, $] = U(() => {
    try {
      const l = localStorage.getItem($a) || localStorage.getItem(Da);
      if (l) {
        const h = JSON.parse(l), w = {};
        return typeof h.name == "string" && (w.name = h.name), typeof h.email == "string" && (w.email = h.email), typeof h.phone == "string" && (w.phone = h.phone), w;
      }
    } catch (l) {
      console.warn("[Pitaj.io] Error reading visitor meta", l);
    }
    return {};
  }), M = ee(e == null ? void 0 : e.emitEvent);
  M.current = e == null ? void 0 : e.emitEvent;
  const L = ee(e == null ? void 0 : e.onActionTrigger);
  L.current = e == null ? void 0 : e.onActionTrigger;
  const z = ee(/* @__PURE__ */ new Map());
  q(() => () => {
    z.current.forEach((l) => l()), z.current.clear();
  }, []);
  const W = re((l, h) => {
    const w = Number.isFinite(l) ? Math.max(1, Math.floor(l)) : 60;
    I((P) => P === null ? w : Math.max(P, w)), S(h || `Previše zahtjeva. Molimo sačekajte ${w}s.`);
  }, []), O = re((l) => {
    if (l) {
      if (l === "WIDGET_CHAT_DISABLED") {
        o((h) => ({ ...h, chatAvailable: !1 })), S("Chat je trenutno privremeno nedostupan.");
        return;
      }
      if (l === "WIDGET_TRANSCRIBE_DISABLED") {
        o((h) => ({ ...h, transcribeAvailable: !1 })), S("Diktiranje je trenutno privremeno nedostupno.");
        return;
      }
      l === "WIDGET_FORMS_DISABLED" && (o((h) => ({ ...h, formsAvailable: !1, formsEnabled: !1 })), S("Forme su trenutno privremeno nedostupne."));
    }
  }, []), te = re((l, h = "Došlo je do greške pri obradi zahtjeva.") => {
    var P, C, X, ae;
    if (l instanceof Vi) {
      W(l.retryAfterSeconds, l.message), (P = M.current) == null || P.call(M, "error_occurred", { code: l.code || "RATE_LIMIT_EXCEEDED" });
      return;
    }
    if (l instanceof Ot) {
      if (l.code === "WIDGET_SESSION_INVALID" || l.code === "WIDGET_SESSION_REQUIRED") {
        Y(!0), S("Sesija je istekla. Pokrenite novu sesiju za nastavak razgovora.");
        return;
      }
      if (l.code === "COUNTRY_BLOCKED") {
        o((R) => ({ ...R, chatAvailable: !1 })), S(l.message || "Pristup nije dozvoljen u vašoj regiji."), (C = M.current) == null || C.call(M, "error_occurred", { status: l.status, code: "COUNTRY_BLOCKED" });
        return;
      }
      O(l.code), S(l.message || h), (X = M.current) == null || X.call(M, "error_occurred", { status: l.status, code: l.code || "UNKNOWN_WIDGET_ERROR" });
      return;
    }
    let w = l instanceof Error ? l.message : h;
    !w || w === "Failed to fetch" || w.includes("NetworkError") ? w = "Problem sa povezivanjem na mrežu. Molimo provjerite internet vezu." : w.includes("404") ? w = "Traženi razgovor ili podaci nisu pronađeni." : (w.includes("500") || w.includes("502") || w.includes("503")) && (w = "Chat servis je privremeno nedostupan. Molimo pokušajte za trenutak."), S(w || h), (ae = M.current) == null || ae.call(M, "error_occurred", { code: "UNKNOWN_WIDGET_ERROR" });
  }, [W, O]), pe = re(() => {
    try {
      const l = Kt(n.companyId), h = localStorage.getItem(l);
      h && localStorage.setItem(`${l}:archive:${Date.now()}`, h);
    } catch {
    }
    ya(n.companyId, n.apiUrl), b([]), g(null), Y(!1), S(null), m("new-conversation");
  }, [n.companyId, n.apiUrl]);
  q(() => {
    n.isPreview || n.mockMode || n.companyId === "preview" || Ra(n.companyId, u);
  }, [u, n.companyId, n.isPreview, n.mockMode]), q(() => {
    if (n.isPreview || n.previewDraft) {
      const l = yi(n);
      b(l), g("preview-conv-1"), m("conversation");
    }
  }, [
    n.isPreview,
    (Z = n.previewDraft) == null ? void 0 : Z.revision,
    (ue = n.previewDraft) == null ? void 0 : ue.initialStep,
    (Pe = (me = n.previewDraft) == null ? void 0 : me.action) == null ? void 0 : Pe.id,
    (Re = (Fe = n.previewDraft) == null ? void 0 : Fe.action) == null ? void 0 : Re.name,
    (Ve = (Oe = n.previewDraft) == null ? void 0 : Oe.action) == null ? void 0 : Ve.trigger_hint,
    (Ye = (Ke = n.previewDraft) == null ? void 0 : Ke.action) == null ? void 0 : Ye.dismiss_message,
    (Ze = (We = n.previewDraft) == null ? void 0 : We.form) == null ? void 0 : Ze.id,
    (qe = (Ge = n.previewDraft) == null ? void 0 : Ge.form) == null ? void 0 : qe.name,
    (Je = (Qe = n.previewDraft) == null ? void 0 : Qe.form) == null ? void 0 : Je.success_message,
    (et = (Xe = n.previewDraft) == null ? void 0 : Xe.widget) == null ? void 0 : et.id,
    (y = (tt = n.previewDraft) == null ? void 0 : tt.widget) == null ? void 0 : y.type
  ]), q(() => {
    if (_ === null || _ <= 0) return;
    const l = setInterval(() => {
      I((h) => h && h > 1 ? h - 1 : null);
    }, 1e3);
    return () => clearInterval(l);
  }, [_]), q(() => {
    if (!n.companyId || n.mockMode) return;
    let l = !0;
    return Ia(n.companyId, N.current, n.apiUrl).then((h) => {
      !l || !h || h.length === 0 || b((w) => {
        let P = !1;
        const C = w.map((X) => {
          const ae = h.find((R) => String(R.id) === X.id);
          return ae && ae.ticketNumber && X.ticketNumber !== ae.ticketNumber ? (P = !0, { ...X, ticketNumber: ae.ticketNumber }) : X;
        });
        return P ? C : w;
      });
    }).catch(() => {
    }), () => {
      l = !1;
    };
  }, [n.companyId, n.apiUrl, n.mockMode]);
  const Q = u.find((l) => l.id === c) || null, J = u.reduce((l, h) => l + (h.unread || 0), 0), k = re((l) => {
    p((h) => {
      var w;
      return h === l ? h : ((w = M.current) == null || w.call(M, l ? "widget_opened" : "widget_closed"), l);
    });
  }, []), V = re((l) => {
    m((h) => {
      var w;
      return h === l ? h : ((w = M.current) == null || w.call(M, "screen_changed", { screen: l }), l);
    });
  }, []), ie = re((l) => {
    var h;
    g(l.id), b((w) => w.some((C) => C.id === l.id) ? w.map((C) => C.id === l.id ? { ...C, ...l, unread: 0, status: l.status || "active" } : C) : [{ ...l, unread: 0, status: l.status || "active" }, ...w]), m("conversation"), (h = M.current) == null || h.call(M, "conversation_selected", { conversationId: l.id });
  }, []), se = re(() => {
    var l;
    b(
      (h) => h.map((w) => w.id === c ? { ...w, status: "ended" } : w)
    ), g(null), m("new-conversation"), (l = M.current) == null || l.call(M, "conversation_ended", { conversationId: c });
  }, [c]), ge = re((l) => {
    b((h) => h.filter((w) => w.id !== l)), g((h) => h === l ? null : h), c === l && m("new-conversation");
  }, [c]), ve = re((l) => {
    var X;
    if (n.chatAvailable === !1) {
      S("Chat je trenutno privremeno nedostupan.");
      return;
    }
    if (_ !== null) {
      S(`Previše zahtjeva. Molimo sačekajte ${_}s.`);
      return;
    }
    const h = "conv-" + Date.now(), w = (/* @__PURE__ */ new Date()).toISOString(), P = l ? l.length > 40 ? l.slice(0, 40) + "…" : l : "Novo ćaskanje", C = {
      id: h,
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
    b((ae) => [C, ...ae]), g(h), m("conversation"), (X = M.current) == null || X.call(M, "conversation_started", { conversationId: h, initialMessage: l }), l && he(h, l, [C.messages[0]], !0);
  }, [n.apiUrl, n.chatAvailable, n.companyId, n.mockMode, _, E]), he = async (l, h, w, P = !1) => {
    var ae;
    f(!0), S(null);
    const C = "ai-msg-" + Date.now(), X = {
      id: C,
      content: "",
      sender: "ai",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isStreaming: !0
    };
    b(
      (R) => R.map((G) => G.id !== l ? G : {
        ...G,
        preview: h,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...G.messages.filter((H) => H.id !== C), X]
      })
    ), (ae = M.current) == null || ae.call(M, "stream_started", { conversationId: l });
    try {
      await Ca({
        companyId: n.companyId,
        conversationId: l,
        visitorId: N.current,
        visitorLanguage: d,
        message: h,
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
            const G = l, H = String(R);
            l = H, g(H), b(
              (j) => j.map((F) => F.id === G || F.messages.some((ye) => ye.id === C) ? { ...F, id: H } : F)
            );
          },
          onTicketNumber: (R) => {
            const G = R && String(R).trim() !== "" && String(R).trim() !== "undefined" && String(R).trim() !== "null" ? String(R).trim() : null;
            G && b(
              (H) => H.map((j) => j.id === l || j.messages.some((ye) => ye.id === C) ? { ...j, ticketNumber: G } : j)
            );
          },
          onActionTrigger: (R) => {
            var j, F, ye;
            let G = R.widget || R.triggered_widget || (R.widget_id && n.widgets ? n.widgets.find((xe) => xe.id === R.widget_id) : null) || null, H;
            if ((j = z.current.get(C)) == null || j(), z.current.delete(C), (G == null ? void 0 : G.type) === "action_client" && ((F = G.config) == null ? void 0 : F.wait_for_response) === !0 && !n.isPreview && !n.mockMode) {
              G = { ...G, config: { ...G.config, client_action_state: "pending" } };
              const xe = Pa(15e3, (_e) => {
                z.current.get(C) === xe.cancel && z.current.delete(C), b((Te) => Te.map((we) => ({ ...we, messages: we.messages.map((be) => {
                  var it;
                  return be.id === C && ((it = be.widget) == null ? void 0 : it.type) === "action_client" ? { ...be, widget: { ...be.widget, config: { ...be.widget.config, client_action_state: _e } } } : be;
                }) })));
              });
              z.current.set(C, xe.cancel), H = xe.complete;
            }
            G && b(
              (xe) => xe.map((_e) => _e.id === l || _e.messages.some((we) => we.id === C) ? {
                ..._e,
                messages: _e.messages.map(
                  (we) => we.id === C ? { ...we, widget: G } : we
                )
              } : _e)
            ), (ye = L.current) == null || ye.call(L, G ? { ...R, widget: G } : R, H);
          },
          onChunk: (R) => {
            b(
              (G) => G.map((H) => H.id === l || H.messages.some((F) => F.id === C) ? {
                ...H,
                messages: H.messages.map(
                  (F) => F.id === C ? { ...F, content: F.content + R } : F
                )
              } : H)
            );
          },
          onSources: (R) => {
            b(
              (G) => G.map((H) => H.id === l || H.messages.some((F) => F.id === C) ? {
                ...H,
                messages: H.messages.map(
                  (F) => F.id === C ? { ...F, sources: R } : F
                )
              } : H)
            );
          },
          onSuggestedQuestions: (R) => {
            b(
              (G) => G.map((H) => H.id === l || H.messages.some((F) => F.id === C) ? {
                ...H,
                messages: H.messages.map(
                  (F) => F.id === C ? { ...F, suggestedQuestions: R } : F
                )
              } : H)
            );
          },
          onDone: () => {
            var R;
            b(
              (G) => G.map((H) => {
                var Te, we;
                if (!(H.id === l || H.messages.some((be) => be.id === C))) return H;
                const F = H.messages.find((be) => be.id === C), ye = (Te = F == null ? void 0 : F.widget) == null ? void 0 : Te.name, xe = (we = F == null ? void 0 : F.content) == null ? void 0 : we.trim(), _e = xe ? xe.slice(0, 70) : ye ? `[${ye}]` : H.preview;
                return {
                  ...H,
                  preview: _e,
                  messages: H.messages.map(
                    (be) => be.id === C ? { ...be, isStreaming: !1 } : be
                  )
                };
              })
            ), f(!1), (R = M.current) == null || R.call(M, "stream_completed", { conversationId: l });
          },
          onError: (R) => {
            console.error("[Pitaj.io] Stream error:", R), S(R.message || "Došlo je do greške u komunikaciji."), f(!1);
          }
        }
      });
    } catch (R) {
      f(!1), te(R, "Greška pri slanju poruke.");
    }
  }, ke = re((l) => {
    var C;
    const h = l.trim();
    if (!h || v || n.chatAvailable === !1 || _ !== null) return;
    if (!c) {
      ve(h);
      return;
    }
    const P = {
      id: "usr-msg-" + Date.now(),
      content: h,
      sender: "user",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "sent"
    };
    b(
      (X) => X.map((ae) => ae.id !== c ? ae : {
        ...ae,
        preview: h,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [...ae.messages, P]
      })
    ), (C = M.current) == null || C.call(M, "message_sent", { conversationId: c, content: h }), he(c, h, Q ? Q.messages : []);
  }, [c, v, ve, Q, n.chatAvailable, n.companyId, n.apiUrl, n.mockMode, _]), de = re(
    async (l, h, w) => {
      var P;
      if (!n.mockMode)
        try {
          await Ta(
            n.companyId,
            l,
            h,
            n.apiUrl,
            n.mockMode
          );
        } catch (C) {
          console.error("[Pitaj.io] Failed to submit rating:", C);
          const X = (C == null ? void 0 : C.status) === 404 ? "Razgovor ili tiket više nije dostupan." : C != null && C.message && !C.message.includes("failed") && !C.message.includes("404") ? C.message : "Nismo uspjeli sačuvati vašu ocjenu. Molimo pokušajte ponovo.";
          throw new Error(X);
        }
      b(
        (C) => C.map(
          (X) => X.id === l ? { ...X, satisfaction: h, ratingScore: w ?? X.ratingScore } : X
        )
      ), (P = M.current) == null || P.call(M, "rating_submitted", {
        conversationId: l,
        satisfaction: h,
        score: w
      });
    },
    [n.companyId, n.apiUrl, n.mockMode]
  ), je = re(
    (l, h, w = "user") => {
      const P = h.trim();
      if (!P) return;
      const C = (/* @__PURE__ */ new Date()).toISOString(), X = `conv-${Date.now()}`, ae = typeof l == "string" && l.trim().length > 0 ? l : X, R = {
        id: `local-${w}-msg-${Date.now()}`,
        content: P,
        sender: w,
        timestamp: C,
        status: "sent"
      };
      b(
        (G) => G.some((H) => H.id === ae) ? G.map((H) => H.id !== ae ? H : {
          ...H,
          preview: P.length > 70 ? `${P.slice(0, 70)}…` : P,
          timestamp: C,
          messages: [...H.messages, R]
        }) : [
          {
            id: ae,
            title: "Forma",
            preview: P.length > 70 ? `${P.slice(0, 70)}…` : P,
            timestamp: C,
            unread: 0,
            messages: [R],
            status: "active"
          },
          ...G
        ]
      ), g(ae), m("conversation");
    },
    []
  ), fe = re((l, h) => {
    h.workflow && b((w) => w.map((P) => P.id === l ? La(P, h) : P));
  }, []), ze = (l) => {
    var h;
    return !!((h = l.messages) != null && h.some((w) => w.sender === "ai"));
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
    activeConversationId: c,
    visitorContact: E,
    visitorId: N.current,
    activeConversationHasReply: Q ? ze(Q) : !1,
    totalUnread: J,
    isStreaming: v,
    rateLimitTimer: _,
    errorBanner: A,
    sessionInvalid: D,
    resetSession: pe,
    setErrorBanner: S,
    activeLanguage: d,
    setActiveLanguage: T,
    selectConversation: ie,
    startNewConversation: ve,
    endConversation: se,
    deleteConversation: ge,
    sendUserMessage: ke,
    submitSatisfaction: de,
    appendConversationMessage: je,
    appendWorkflowWidget: fe,
    handleApiError: te
  };
}
let It = null, Wi = null;
function _i(t, e) {
  e === null && t !== null && It !== null && It !== t || (It = e ? t : null, Wi = e);
}
function Le() {
  return Wi;
}
function Yt(t, e) {
  let i = null;
  const n = () => i || (i = t().then((o) => {
    const r = e ? e(o) : o.default;
    if (!r)
      throw new Error("Lazy component not found");
    return r;
  }));
  return function(r) {
    const [p, s] = U(null);
    return q(() => {
      let m = !0;
      return n().then((u) => {
        m && s(() => u);
      }).catch((u) => {
        console.error("[Pitaj.io] Failed to load lazy screen:", u);
      }), () => {
        m = !1;
      };
    }, []), p ? /* @__PURE__ */ a(p, { ...r }) : /* @__PURE__ */ a("div", { className: "pitaj-lazy-loading", children: [
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ a("span", { className: "pitaj-typing-dot" })
    ] });
  };
}
function Va({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ a("path", { d: "M5 3v4" }),
    /* @__PURE__ */ a("path", { d: "M19 17v4" }),
    /* @__PURE__ */ a("path", { d: "M3 5h4" }),
    /* @__PURE__ */ a("path", { d: "M17 19h4" })
  ] });
}
function Zi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m5 12 7-7 7 7" }),
    /* @__PURE__ */ a("path", { d: "M12 19V5" })
  ] });
}
function Ka({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ a("path", { d: "M19 12H5" })
  ] });
}
function Ie({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ a("path", { d: "m6 6 12 12" })
  ] });
}
function Ya({ size: t = 24, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) });
}
function qn({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 5v14" }),
    /* @__PURE__ */ a("path", { d: "M5 12h14" })
  ] });
}
function jt({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M20 6 9 17l-5-5" }) });
}
function Wa({ size: t = 18, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "5", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "1.7" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "19", r: "1.7" })
  ] });
}
function Za({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v6" }),
    /* @__PURE__ */ a("path", { d: "M9 11h6" })
  ] });
}
function Gi({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function Ga({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-3v-7h5" }),
    /* @__PURE__ */ a("path", { d: "M3 13h5v7H5a2 2 0 0 1-2-2z" })
  ] });
}
function qa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function Qn({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] });
}
function Qa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    /* @__PURE__ */ a("path", { d: "M3 3v5h5" }),
    /* @__PURE__ */ a("path", { d: "M12 7v5l4 2" })
  ] });
}
function Ja({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ a("path", { d: "M10 14 21 3" }),
    /* @__PURE__ */ a("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  ] });
}
function Xa({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M4 5h16v4a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4V5Z" }),
    /* @__PURE__ */ a("path", { d: "M12 8v1M12 15v1" })
  ] });
}
function qi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    /* @__PURE__ */ a("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "19", y2: "22" })
  ] });
}
function en({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    /* @__PURE__ */ a("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}
function Qi({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ a("path", { d: "M10 9H8" }),
    /* @__PURE__ */ a("path", { d: "M16 13H8" }),
    /* @__PURE__ */ a("path", { d: "M16 17H8" })
  ] });
}
function tn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M7 10v12" }),
    /* @__PURE__ */ a("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  ] });
}
function an({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M17 14V2" }),
    /* @__PURE__ */ a("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0 1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })
  ] });
}
function Ji({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m21.44 11.05-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a1.5 1.5 0 0 1-2.12-2.13l8.49-8.48" }) });
}
function Jn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M8 2v4" }),
    /* @__PURE__ */ a("path", { d: "M16 2v4" }),
    /* @__PURE__ */ a("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ a("path", { d: "M3 10h18" })
  ] });
}
function Xn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 16V4" }),
    /* @__PURE__ */ a("path", { d: "m7 9 5-5 5 5" }),
    /* @__PURE__ */ a("path", { d: "M20 16v4H4v-4" })
  ] });
}
function er({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m15 18-6-6 6-6" }) });
}
function tr({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m9 18 6-6-6-6" }) });
}
function ir({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "m6 9 6 6 6-6" }) });
}
function ar({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("path", { d: "M5 12h14" }) });
}
function nn({ size: t = 16, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
    /* @__PURE__ */ a("path", { d: "m19 6-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ a("path", { d: "M10 11v6" }),
    /* @__PURE__ */ a("path", { d: "M14 11v6" })
  ] });
}
function nr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 20h.01" }),
    /* @__PURE__ */ a("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    /* @__PURE__ */ a("path", { d: "M5 12.859a10 10 0 0 1 14 0" }),
    /* @__PURE__ */ a("path", { d: "M8.5 16.429a5 5 0 0 1 7 0" })
  ] });
}
function rr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M10 2v2" }),
    /* @__PURE__ */ a("path", { d: "M14 2v2" }),
    /* @__PURE__ */ a("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1" }),
    /* @__PURE__ */ a("path", { d: "M6 2v2" })
  ] });
}
function or({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M15 2v19" }),
    /* @__PURE__ */ a("path", { d: "M5 2v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" }),
    /* @__PURE__ */ a("path", { d: "M8 2v19" })
  ] });
}
function sr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ a("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ a("path", { d: "M9 17h6" }),
    /* @__PURE__ */ a("circle", { cx: "17", cy: "17", r: "2" })
  ] });
}
function cr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }),
    /* @__PURE__ */ a("path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" })
  ] });
}
function pr({ size: t = 14, className: e = "" }) {
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
function lr({ size: t = 14, className: e = "" }) {
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
function dr({ size: t = 14, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ a("path", { d: "M7 7h.01" })
  ] });
}
function ur({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    /* @__PURE__ */ a("path", { d: "M3 6h18" }),
    /* @__PURE__ */ a("path", { d: "M16 10a4 4 0 0 1-8 0" })
  ] });
}
function mr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "8", cy: "21", r: "1" }),
    /* @__PURE__ */ a("circle", { cx: "19", cy: "21", r: "1" }),
    /* @__PURE__ */ a("path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
  ] });
}
function hr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    /* @__PURE__ */ a("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    /* @__PURE__ */ a("line", { x1: "6", x2: "6", y1: "20", y2: "16" })
  ] });
}
function fr({ size: t = 24, className: e = "" }) {
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
function gr({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
  ] });
}
function br({ size: t = 13, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ a("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function vr({ size: t = 12, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: /* @__PURE__ */ a("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
function jr({ size: t = 15, className: e = "" }) {
  return /* @__PURE__ */ a("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e, children: [
    /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ a("line", { x1: "2", x2: "22", y1: "12", y2: "12" }),
    /* @__PURE__ */ a("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function _t({ size: t = 13, className: e = "" }) {
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
function rn({ size: t = 16, className: e = "" }) {
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
function on({
  screen: t,
  activeConversation: e,
  config: i,
  language: n = "bs",
  onBack: o,
  onClose: r,
  onNewConversation: p,
  onEndConversation: s,
  onDeleteConversation: m,
  onViewHistory: u,
  onViewTickets: b
}) {
  var Y;
  const [c, g] = U(!1), v = ee(null), f = t === "conversation" && e, A = f || t === "history" || t === "tickets", S = i.title || i.name || "Pitaj.io Asistent";
  q(() => {
    var N;
    const d = (E) => {
      var M, L;
      const $ = ((L = (M = E.composedPath) == null ? void 0 : M.call(E)) == null ? void 0 : L[0]) || E.target;
      v.current && $ && !v.current.contains($) && g(!1);
    };
    document.addEventListener("mousedown", d);
    const T = (N = v.current) == null ? void 0 : N.getRootNode();
    return T instanceof ShadowRoot && T.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d), T instanceof ShadowRoot && T.removeEventListener("mousedown", d);
    };
  }, []), q(() => {
    g(!1);
  }, [t]);
  const D = (d) => {
    g(!1), d == null || d();
  };
  return /* @__PURE__ */ a("header", { className: "pitaj-header", children: [
    /* @__PURE__ */ a("div", { className: "pitaj-header-info", children: [
      A && /* @__PURE__ */ a(
        "button",
        {
          onClick: o,
          className: "pitaj-icon-btn",
          "aria-label": B("back", n),
          title: B("back", n),
          children: /* @__PURE__ */ a(Ka, { size: 18 })
        }
      ),
      /* @__PURE__ */ a("div", { className: `pitaj-avatar ${((Y = i.content) == null ? void 0 : Y.avatarBorder) === !1 ? "no-border" : "with-border"}`, children: i.logo || i.avatar ? /* @__PURE__ */ a("img", { src: i.logo || i.avatar, alt: i.name || "AI" }) : /* @__PURE__ */ a(_t, { size: 18 }) }),
      /* @__PURE__ */ a("div", { className: "pitaj-header-text", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-header-title", children: S }),
        f && !!(e != null && e.ticketNumber) && (e == null ? void 0 : e.ticketNumber) !== "undefined" && (e == null ? void 0 : e.ticketNumber) !== "null" && /* @__PURE__ */ a("div", { className: "pitaj-header-ticket", children: /* @__PURE__ */ a("span", { className: "pitaj-header-ticket-badge", children: e == null ? void 0 : e.ticketNumber }) })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "pitaj-header-actions", children: [
      /* @__PURE__ */ a("div", { className: "pitaj-header-menu", ref: v, children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: () => g((d) => !d),
            className: `pitaj-icon-btn ${c ? "is-active" : ""}`,
            "aria-label": B("menu", n),
            "aria-expanded": c,
            title: B("menu", n),
            children: /* @__PURE__ */ a(Wa, { size: 18 })
          }
        ),
        c && /* @__PURE__ */ a("div", { className: "pitaj-menu-dropdown", role: "menu", children: [
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => D(p),
              children: [
                /* @__PURE__ */ a(Za, { size: 15, className: "pitaj-menu-item-icon" }),
                B("newConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !f,
              onClick: () => D(s),
              children: [
                /* @__PURE__ */ a(qa, { size: 15, className: "pitaj-menu-item-icon" }),
                B("endConversation", n)
              ]
            }
          ),
          m && /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              disabled: !f,
              onClick: () => D(m),
              children: [
                /* @__PURE__ */ a(nn, { size: 15, className: "pitaj-menu-item-icon" }),
                B("deleteConversation", n)
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              role: "menuitem",
              className: "pitaj-menu-item",
              onClick: () => D(u),
              children: [
                /* @__PURE__ */ a(Qa, { size: 15, className: "pitaj-menu-item-icon" }),
                B("viewHistory", n)
              ]
            }
          ),
          /* @__PURE__ */ a("button", { role: "menuitem", className: "pitaj-menu-item", onClick: () => D(b), children: [
            /* @__PURE__ */ a(Xa, { size: 15, className: "pitaj-menu-item-icon" }),
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
          children: /* @__PURE__ */ a(Ie, { size: 18 })
        }
      )
    ] })
  ] });
}
function Xi(t, e) {
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
async function sn(t, e, i, n) {
  if (!/^[1-9]\d*$/.test(e)) throw new Error("Neispravan identifikator razgovora.");
  const o = (i || window.location.origin).replace(/\/$/, ""), r = await Ue(t, i), p = await fetch(`${o}/api/widget/${encodeURIComponent(t)}/v2/conversations/${e}/executable-run`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${r}` },
    cache: "no-store",
    signal: n
  });
  p.ok || await yt(p, "Nije moguće provjeriti proceduru.");
  const s = await p.json();
  return s.run === null ? null : Xi(s.run);
}
async function xr(t, e, i, n) {
  if (!Number.isSafeInteger(e) || e < 1) throw new Error("Neispravan identifikator procedure.");
  const o = (i || window.location.origin).replace(/\/$/, ""), r = await Ue(t, i), p = `${o}/api/widget/${encodeURIComponent(t)}/v2/executable-runs/${e}`, s = await fetch(n ? `${p}/display-ack` : p, {
    method: n ? "POST" : "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${r}`, ...n ? { "Content-Type": "application/json" } : {} },
    ...n ? { body: JSON.stringify({ node_id: n }) } : {}
  });
  s.ok || await yt(s, "Status procedure nije dostupan.");
  const m = await s.json();
  return Xi(m, e);
}
function cn({ content: t }) {
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
      const m = p.trim().slice(2);
      i.push(
        /* @__PURE__ */ a("ul", { children: /* @__PURE__ */ a("li", { children: Tt(m) }) }, `ul-${r}`)
      );
      continue;
    }
    const s = p.trim().match(/^(\d+)\.\s+(.*)/);
    if (s) {
      i.push(
        /* @__PURE__ */ a("ol", { start: parseInt(s[1], 10), children: /* @__PURE__ */ a("li", { children: Tt(s[2]) }) }, `ol-${r}`)
      );
      continue;
    }
    if (!p.trim()) {
      i.push(/* @__PURE__ */ a("div", { style: { height: "6px" } }, `sp-${r}`));
      continue;
    }
    i.push(/* @__PURE__ */ a("p", { children: Tt(p) }, `p-${r}`));
  }
  return n && o.length > 0 && i.push(
    /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: o.join(`
`) }) }, "code-final")
  ), /* @__PURE__ */ a("div", { className: "pitaj-markdown", children: i });
}
function Tt(t) {
  const e = [];
  let i = 0;
  const n = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let o;
  for (; (o = n.exec(t)) !== null; ) {
    o.index > i && e.push(...Si(t.slice(i, o.index)));
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
  return i < t.length && e.push(...Si(t.slice(i))), e;
}
const pn = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/g, ln = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, dn = new RegExp("(?<![\\d@])\\+?\\d(?:[\\s().\\-/]*\\d){6,}", "g"), un = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/;
function Si(t) {
  const e = [];
  let i;
  for (; (i = pn.exec(t)) !== null; ) {
    const r = i[0].replace(/[.,;:!?]+$/, "");
    r && e.push({
      start: i.index,
      end: i.index + r.length,
      href: r.startsWith("www.") ? `https://${r}` : r,
      external: !0
    });
  }
  for (; (i = ln.exec(t)) !== null; )
    e.push({
      start: i.index,
      end: i.index + i[0].length,
      href: `mailto:${i[0]}`,
      external: !1
    });
  for (; (i = dn.exec(t)) !== null; ) {
    const r = i[0];
    un.test(r) || e.push({
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
function ea({
  rows: t,
  fallbackQuestions: e,
  onSelect: i,
  buttonClassName: n,
  containerClassName: o,
  revealDelayMs: r = 0,
  staggerMs: p = 140
}) {
  const s = Be(() => Array.isArray(t) && t.length > 0 ? t.map((v) => ({
    text: v.text.trim(),
    children: (v.children ?? []).map((f) => f.trim()).filter(Boolean)
  })).filter((v) => v.text !== "") : (e ?? []).map((v) => v.trim()).filter(Boolean).map((v) => ({ text: v, children: [] })), [e, t]), [m, u] = U(null), [b, c] = U(s.length);
  if (q(() => {
    u(null);
  }, [s]), q(() => {
    if (m) {
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
      const f = window.setInterval(() => {
        c((_) => _ >= s.length ? (window.clearInterval(f), _) : _ + 1);
      }, Math.max(60, p));
    }, r);
    return () => {
      window.clearTimeout(v);
    };
  }, [m, s.length, r, p]), s.length === 0)
    return null;
  const g = s.find((v) => v.text === m && v.children.length > 0) ?? null;
  return g ? /* @__PURE__ */ a("div", { className: o, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => u(null),
        className: n,
        children: "Nazad"
      }
    ),
    g.children.map((v, f) => /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => i(v),
        className: n,
        children: v
      },
      `${g.text}-${f}`
    ))
  ] }) : /* @__PURE__ */ a("div", { className: o, children: s.slice(0, b).map((v, f) => /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: () => v.children.length > 0 ? u(v.text) : i(v.text),
      className: `${n} pitaj-suggestion-enter`,
      children: v.text
    },
    `${v.text}-${f}`
  )) });
}
const mn = /* @__PURE__ */ new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/ld+json",
  "application/xml",
  "text/xml"
]), hn = [".txt", ".md", ".csv", ".json", ".xml"];
function fn(t) {
  if (mn.has(t.type))
    return !0;
  const e = t.name.toLowerCase();
  return hn.some((i) => e.endsWith(i));
}
async function ta(t) {
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
      const r = fn(i) ? (await i.text()).slice(0, 4e3) : null;
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
function ia(t) {
  return t.length === 0 ? "" : `

${t.map((i) => i.textContent && i.textContent.trim() !== "" ? `[Prilog: ${i.name}]
${i.textContent.trim()}` : `[Prilog: ${i.name}]`).join(`

`)}`;
}
async function gn(t) {
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
    const u = await p.json().catch(() => null), c = (() => {
      if (p.status !== 422 || !(u != null && u.errors) || typeof u.errors != "object")
        return null;
      for (const g of Object.values(u.errors))
        if (Array.isArray(g)) {
          for (const v of g)
            if (typeof v == "string" && v.trim() !== "")
              return v;
        }
      return null;
    })();
    Ki(
      p.status,
      u,
      typeof c == "string" && c || `Transkripcija nije uspjela (${p.status})`,
      p.headers.get("Retry-After")
    );
  }
  const s = await p.json(), m = typeof (s == null ? void 0 : s.text) == "string" ? s.text.trim() : "";
  if (!m)
    throw new Error("Transkripcija nije vratila tekst.");
  return m;
}
function aa({ widgetId: t, apiUrl: e, onTranscript: i, onError: n }) {
  const r = ee(null), p = ee(null), s = ee([]), m = ee(!0), u = ee(null), b = ee(null), c = ee(null), g = ee(null), v = ee(Array.from({ length: 42 }, () => 0.06)), [f, _] = U(!1), [I, A] = U(!1), [S, D] = U(
    () => Array.from({ length: 42 }, () => 0.06)
  ), Y = Be(() => {
    var z;
    return typeof window > "u" || !t || t === "default" ? !1 : typeof window.MediaRecorder < "u" && !!((z = navigator.mediaDevices) != null && z.getUserMedia);
  }, [t]), d = re(() => {
    p.current && (p.current.getTracks().forEach((z) => z.stop()), p.current = null);
  }, []), T = re(() => {
    var z;
    u.current !== null && (window.cancelAnimationFrame(u.current), u.current = null), (z = g.current) == null || z.disconnect(), g.current = null, c.current = null, b.current && (b.current.close(), b.current = null);
  }, []), N = re(() => {
    const z = Array.from({ length: 42 }, () => 0.06);
    v.current = z, D(z);
  }, []), E = re((z) => {
    const W = window.AudioContext || (window.webkitAudioContext ?? null);
    if (!W)
      return;
    const O = new W(), te = O.createAnalyser();
    te.fftSize = 2048, te.smoothingTimeConstant = 0.78;
    const pe = O.createMediaStreamSource(z);
    pe.connect(te), b.current = O, c.current = te, g.current = pe;
    const Q = new Uint8Array(te.fftSize), J = () => {
      const k = c.current;
      if (!k) return;
      k.getByteTimeDomainData(Q);
      let V = 0;
      for (let ve = 0; ve < Q.length; ve += 1) {
        const he = (Q[ve] - 128) / 128;
        V += he * he;
      }
      const ie = Math.sqrt(V / Q.length), se = Math.max(0.04, Math.min(1, ie * 5.2)), ge = v.current.slice(1);
      ge.push(se), v.current = ge, D(ge), u.current = window.requestAnimationFrame(J);
    };
    u.current = window.requestAnimationFrame(J);
  }, []), $ = re(async () => {
    if (!(!Y || I || r.current || f))
      try {
        const W = await navigator.mediaDevices.getUserMedia({ audio: !0 }), O = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg", "audio/mp4"], pe = typeof MediaRecorder.isTypeSupported == "function" ? O.find((J) => MediaRecorder.isTypeSupported(J)) : void 0, Q = pe ? new MediaRecorder(W, { mimeType: pe }) : new MediaRecorder(W);
        s.current = [], m.current = !0, p.current = W, r.current = Q, N(), E(W), Q.ondataavailable = (J) => {
          J.data.size > 0 && s.current.push(J.data);
        }, Q.onstop = async () => {
          _(!1);
          const J = new Blob(s.current, { type: Q.mimeType || "audio/webm" });
          if (s.current = [], r.current = null, d(), T(), J.size === 0) {
            N();
            return;
          }
          if (!m.current) {
            N();
            return;
          }
          A(!0);
          try {
            const k = await gn({
              widgetId: t,
              apiUrl: e,
              audio: J
            });
            i(k);
          } catch (k) {
            console.error("[Pitaj.io] Dictation transcription failed", k), n == null || n(k);
          } finally {
            A(!1), N();
          }
        }, Q.onerror = () => {
          _(!1), r.current = null, d(), T(), N();
        }, Q.start(), _(!0);
      } catch (W) {
        _(!1), d(), T(), N(), console.error("[Pitaj.io] Dictation microphone access failed", W);
      }
  }, [e, f, I, Y, n, i, N, E, d, T, t]), M = re(() => {
    const z = r.current;
    !z || !f || I || (m.current = !0, z.stop(), _(!1));
  }, [f, I]), L = re(() => {
    const z = r.current;
    !z || !f || (m.current = !1, z.stop(), _(!1));
  }, [f]);
  return q(() => () => {
    const z = r.current;
    z && z.state !== "inactive" && z.stop(), d(), T();
  }, [d, T]), {
    isSupported: Y,
    isListening: f,
    isProcessing: I,
    waveformLevels: S,
    start: $,
    stopAndTranscribe: M,
    cancel: L
  };
}
const bn = [
  "Razmišljam...",
  "Pretražujem...",
  "Pripremam odgovor..."
];
function Mi() {
  const [t, e] = U(0);
  return q(() => {
    const i = setTimeout(() => e(1), 1600), n = setTimeout(() => e(2), 3600);
    return () => {
      clearTimeout(i), clearTimeout(n);
    };
  }, []), /* @__PURE__ */ a("div", { className: "pitaj-thinking-indicator", role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ a(rn, { size: 16, className: "pitaj-thinking-spinner" }),
    /* @__PURE__ */ a("span", { className: "pitaj-thinking-text", children: bn[t] }, t)
  ] });
}
const vn = Yt(
  () => import("./InlineWidgetRenderer-DuIiKQU9.js"),
  (t) => t.InlineWidgetRenderer
);
function jn(t) {
  const e = typeof t == "string" ? new Date(t) : t;
  return isNaN(e.getTime()) ? "" : e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function xn(t) {
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
    const m = p.slice(0, s).trim(), u = p.slice(s + 1).trim();
    return !m || !u ? null : { label: m, value: u };
  }).filter((r) => !!r);
  return o.length < 1 ? null : { title: i, entries: o };
}
function wn({
  conversation: t,
  config: e,
  language: i = "bs",
  isStreaming: n,
  rateLimitCountdown: o,
  errorBanner: r,
  sessionInvalid: p,
  onResetSession: s,
  onSendMessage: m,
  onApiError: u,
  onWorkflowWidget: b,
  onSubmitSatisfaction: c
}) {
  var fe, ze, Me;
  const g = (x) => {
    if (!x.current_step || !["waiting_display", "waiting_input"].includes(x.status)) return;
    const Z = xi(x, e.widgets || []);
    if (!Z) {
      u == null || u(new Error("Sljedeći widget procedure nije dostupan."));
      return;
    }
    b == null || b(Z);
  }, [v, f] = U(""), [_, I] = U(!1), [A, S] = U(0), D = ee(b);
  D.current = b;
  const Y = ee(u);
  Y.current = u, q(() => {
    if (n || e.isPreview || e.previewDraft || e.mockMode || t.status === "ended" || !/^[1-9]\d*$/.test(t.id)) return;
    const x = new AbortController();
    return I(!1), sn(e.companyId, t.id, e.apiUrl, x.signal).then((K) => {
      var ue;
      if (x.signal.aborted || !K) return;
      const Z = xi(K, e.widgets || []);
      if (!Z) {
        I(!0);
        return;
      }
      (ue = D.current) == null || ue.call(D, Z);
    }).catch((K) => {
      var Z;
      x.signal.aborted || (K instanceof Ot && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED"].includes(K.code || "") && ((Z = Y.current) == null || Z.call(Y, K)), I(!0));
    }), () => x.abort();
  }, [e.companyId, e.apiUrl, e.isPreview, e.previewDraft, e.mockMode, e.widgets, t.id, t.status, A, n]);
  const [d, T] = U(!1), [N, E] = U(null), [$, M] = U([]), L = ee(null), z = ee(null), W = ee(null), O = e.content || {}, te = e.chatAvailable === !1, pe = e.transcribeAvailable === !1, Q = n || o !== null || te, J = aa({
    widgetId: e.companyId,
    apiUrl: e.apiUrl,
    onTranscript: re((x) => {
      f((K) => K ? `${K} ${x}` : x);
    }, []),
    onError: re((x) => {
      u == null || u(x, "Greška pri transkripciji.");
    }, [u])
  });
  q(() => {
    const x = L.current;
    x && (x.scrollTop = x.scrollHeight);
  }, [t.messages, n]), q(() => {
    const x = z.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, 96)}px`);
  }, [v]), q(() => {
    T(!1);
  }, [O.dismissibleNotice]);
  const k = (x) => {
    M((K) => {
      const Z = K.find((ue) => ue.id === x);
      if (Z != null && Z.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(Z.previewUrl);
        } catch {
        }
      return K.filter((ue) => ue.id !== x);
    });
  }, V = (x) => {
    const K = (x ?? v).trim();
    if (!K && $.length === 0 || Q) return;
    const Z = `${K}${ia($)}`.trim();
    m(Z), $.forEach((ue) => {
      if (ue.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ue.previewUrl);
        } catch {
        }
    }), M([]), x || (f(""), z.current && (z.current.style.height = "auto"));
  }, ie = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), V());
  }, se = O.messagePlaceholder || e.placeholder || B("placeholder", i), ge = ((fe = O.dismissibleNotice) == null ? void 0 : fe.trim()) || "", ve = ((ze = O.footerText) == null ? void 0 : ze.trim()) || "", he = O.showSuggestedMessages === !1 || O.keepShowingSuggestedMessages !== !0 ? [] : O.suggestedMessageRows || [], ke = ((Me = [...t.messages].reverse().find((x) => x.sender === "ai")) == null ? void 0 : Me.id) ?? null, de = J.isListening, je = async (x, K) => {
    navigator.clipboard && (await navigator.clipboard.writeText(K), E(x), window.setTimeout(() => {
      E((Z) => Z === x ? null : Z);
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
        const K = x.sender === "user", Z = K ? xn(x.content) : null, ue = !K && x.isStreaming && !x.content && !x.widget;
        return /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-msg-row ${K ? "user" : "ai"}${x.widget ? " has-widget" : ""}${ue ? " is-thinking-row" : ""}`,
            children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: [
              K ? /* @__PURE__ */ a("div", { className: `pitaj-msg-bubble ${Z ? "is-form-submission" : ""}`, children: Z ? /* @__PURE__ */ a("div", { className: "pitaj-form-submission-card", children: [
                /* @__PURE__ */ a("div", { className: "pitaj-form-submission-title", children: Z.title.toLowerCase().startsWith("forma") ? Z.title : `Forma: ${Z.title}` }),
                /* @__PURE__ */ a("dl", { className: "pitaj-form-submission-grid", children: Z.entries.map((me) => /* @__PURE__ */ a("div", { className: "pitaj-form-submission-row", children: [
                  /* @__PURE__ */ a("dt", { children: me.label }),
                  /* @__PURE__ */ a("dd", { children: me.value })
                ] }, `${x.id}-${me.label}`)) })
              ] }) : x.content }) : /* @__PURE__ */ a(Se, { children: [
                x.content ? /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: [
                  /* @__PURE__ */ a(cn, { content: x.content }),
                  x.isStreaming && /* @__PURE__ */ a("span", { className: "pitaj-streaming-cursor", "aria-hidden": "true" })
                ] }) : null,
                x.widget && /* @__PURE__ */ a("div", { className: "pitaj-widget-wrapper", children: /* @__PURE__ */ a(vn, { widget: x.widget, onAction: (me) => V(me), companyId: e.companyId, apiUrl: e.apiUrl, preview: e.isPreview || e.mockMode, conversationId: t.id, onApiError: u, onWorkflowState: g }) }),
                x.isStreaming && !x.content && !x.widget && /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Mi, {}) })
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
                      /* @__PURE__ */ a(Ja, { size: 10 })
                    ]
                  },
                  me.id
                )) })
              ] }),
              !K && O.showFollowupSuggestions !== !1 && x.suggestedQuestions && x.suggestedQuestions.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-followups", children: x.suggestedQuestions.map((me, Pe) => /* @__PURE__ */ a(
                "button",
                {
                  onClick: () => V(me),
                  disabled: Q,
                  className: "pitaj-followup-chip",
                  children: me
                },
                `sug-f-${Pe}`
              )) }),
              (!x.isStreaming || !!x.content || !!x.widget) && /* @__PURE__ */ a("div", { className: "pitaj-msg-meta", children: [
                /* @__PURE__ */ a("span", { children: jn(x.timestamp) }),
                !K && /* @__PURE__ */ a("div", { className: "pitaj-msg-actions", children: [
                  x.id === ke && !n && /* @__PURE__ */ a(Se, { children: O.collectUserFeedbackEnabled !== !1 && /* @__PURE__ */ a(Se, { children: [
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => c == null ? void 0 : c("positive"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "positive" ? "is-active is-positive" : ""}`,
                        "aria-label": B("helpful", i),
                        title: B("helpful", i),
                        children: /* @__PURE__ */ a(tn, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        onClick: () => c == null ? void 0 : c("negative"),
                        className: `pitaj-msg-action-btn ${t.satisfaction === "negative" ? "is-active is-negative" : ""}`,
                        "aria-label": B("notHelpful", i),
                        title: B("notHelpful", i),
                        children: /* @__PURE__ */ a(an, { size: 14 })
                      }
                    )
                  ] }) }),
                  x.id === ke && !n && O.copyMessageEnabled !== !1 && !!x.content && /* @__PURE__ */ a(
                    "button",
                    {
                      type: "button",
                      onClick: () => void je(x.id, x.content),
                      className: `pitaj-msg-action-btn ${N === x.id ? "is-active" : ""}`,
                      "aria-label": N === x.id ? B("copied", i) : B("copyAnswer", i),
                      title: N === x.id ? B("copied", i) : B("copyAnswer", i),
                      children: N === x.id ? /* @__PURE__ */ a(jt, { size: 14 }) : /* @__PURE__ */ a(en, { size: 14 })
                    }
                  )
                ] }),
                K && /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ a(
                  jt,
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
      n && t.messages.length > 0 && t.messages[t.messages.length - 1].sender === "user" && /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai is-thinking-row", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-thinking-standalone", children: /* @__PURE__ */ a(Mi, {}) }) }) })
    ] }),
    _ && /* @__PURE__ */ a("div", { role: "alert", children: [
      "Nije moguće učitati aktivni korak procedure. ",
      /* @__PURE__ */ a("button", { type: "button", onClick: () => S((x) => x + 1), children: "Pokušaj ponovo" })
    ] }),
    (r || o) && /* @__PURE__ */ a("div", { style: { padding: "0 14px" }, children: /* @__PURE__ */ a("div", { className: "pitaj-alert-banner", children: [
      /* @__PURE__ */ a("span", { children: o ? `Zahtjevi su privremeno ograničeni. Pokušajte za ${o}s.` : r }),
      p && /* @__PURE__ */ a("button", { type: "button", onClick: s, children: "Pokreni novu sesiju" })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        ea,
        {
          rows: he,
          fallbackQuestions: O.keepShowingSuggestedMessages ? e.suggestedQuestions : [],
          onSelect: V,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill"
        }
      ),
      $.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: $.map((x) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: x.previewUrl ? /* @__PURE__ */ a("img", { src: x.previewUrl, alt: x.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(Qi, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: x.name, children: x.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => k(x.id),
            "aria-label": `Ukloni ${x.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Ie, { size: 10 })
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
            children: /* @__PURE__ */ a(Ie, { size: 12 })
          }
        )
      ] }),
      J.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: B("transcribing", i) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${de ? "is-recording" : ""}`, children: [
        O.attachmentsEnabled && /* @__PURE__ */ a(Se, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: W,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (x) => {
                const K = x.currentTarget.files;
                if (x.currentTarget.value = "", !K || K.length === 0) return;
                const Z = await ta(K);
                M((ue) => [...ue, ...Z].slice(0, 3));
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
                return (x = W.current) == null ? void 0 : x.click();
              },
              children: /* @__PURE__ */ a(Ji, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: z,
            value: v,
            onInput: (x) => f(x.target.value),
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
              children: /* @__PURE__ */ a(Ie, { size: 14 })
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
              children: /* @__PURE__ */ a(jt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(Se, { children: [
          O.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${J.isProcessing ? "is-active" : ""}`,
              "aria-label": B("dictation", i),
              title: J.isProcessing ? B("transcribing", i) : J.isSupported ? B("dictation", i) : "Diktiranje nije podržano",
              onClick: () => J.start(),
              disabled: Q || pe || !J.isSupported || J.isProcessing,
              children: /* @__PURE__ */ a(qi, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => V(),
              disabled: Q || !v.trim() && $.length === 0,
              className: "pitaj-send-btn",
              "aria-label": B("sendMessage", i),
              children: /* @__PURE__ */ a(Zi, { size: 16 })
            }
          )
        ] })
      ] }),
      ve && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: ve }),
      e.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(_t, { size: 13, className: "pitaj-powered-icon" }),
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
function kn({
  config: t,
  language: e = "bs",
  openedByUser: i = !1,
  onStart: n,
  onApiError: o
}) {
  var Q, J;
  const [r, p] = U(""), [s, m] = U(!1), [u, b] = U(!1), [c, g] = U([]), v = ee(null), f = ee(null), _ = t.content || {}, I = t.chatAvailable === !1, A = t.transcribeAvailable === !1, S = aa({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: re((k) => {
      p((V) => V ? `${V} ${k}` : k);
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
    const k = window.matchMedia("(max-width: 768px)"), V = () => m(k.matches);
    return V(), k.addEventListener("change", V), () => k.removeEventListener("change", V);
  }, []), q(() => {
    b(!1);
  }, [_.dismissibleNotice]);
  const Y = (s && _.useDifferentMessageMobile && _.mobileWelcomeMessage ? _.mobileWelcomeMessage : t.welcomeMessage || "👋 Pozdrav! Kako mogu pomoći danas?").split(`
`).map((k) => k.trim()).filter((k) => k.length > 0), d = _.autoShowInitialMessages !== !1 && !i, T = !s || _.showAutoPopupMobile !== !1, N = s && _.useDifferentDurationMobile && typeof _.mobileAutoShowDurationSeconds == "number" ? _.mobileAutoShowDurationSeconds : _.autoShowDurationSeconds ?? 0, E = d && T ? Math.max(0, N) * 1e3 : 0, $ = (k) => {
    g((V) => {
      const ie = V.find((se) => se.id === k);
      if (ie != null && ie.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(ie.previewUrl);
        } catch {
        }
      return V.filter((se) => se.id !== k);
    });
  }, M = (k) => {
    const V = (k ?? r).trim();
    if (!V && c.length === 0 || I) return;
    const ie = `${V}${ia(c)}`.trim();
    n(ie), c.forEach((se) => {
      if (se.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(se.previewUrl);
        } catch {
        }
    }), p(""), g([]);
  }, L = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), M());
  }, z = _.showSuggestedMessages === !1 ? [] : _.suggestedMessageRows || [], W = _.messagePlaceholder || t.placeholder || B("inputPlaceholder", e), O = ((Q = _.dismissibleNotice) == null ? void 0 : Q.trim()) || "", te = ((J = _.footerText) == null ? void 0 : J.trim()) || "", pe = S.isListening;
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ a("div", { className: "pitaj-new-screen", children: (Y.length > 0 ? Y : ["👋 Pozdrav! Kako mogu pomoći danas?"]).map((k, V) => /* @__PURE__ */ a("div", { className: "pitaj-msg-row ai", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-body", children: /* @__PURE__ */ a("div", { className: "pitaj-msg-bubble", children: k }) }) }, `welcome-${V}`)) }),
    /* @__PURE__ */ a("div", { className: "pitaj-input-area", children: [
      /* @__PURE__ */ a(
        ea,
        {
          rows: z,
          fallbackQuestions: t.suggestedQuestions,
          onSelect: M,
          containerClassName: "pitaj-suggestion-pills",
          buttonClassName: "pitaj-suggestion-pill",
          revealDelayMs: E,
          staggerMs: 150
        }
      ),
      c.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-attachment-list", children: c.map((k) => /* @__PURE__ */ a("div", { className: "pitaj-attachment-card", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-attachment-thumb-wrap", children: k.previewUrl ? /* @__PURE__ */ a("img", { src: k.previewUrl, alt: k.name, className: "pitaj-attachment-thumb" }) : /* @__PURE__ */ a("div", { className: "pitaj-attachment-icon-wrap", children: /* @__PURE__ */ a(Qi, { size: 14 }) }) }),
        /* @__PURE__ */ a("span", { className: "pitaj-attachment-name", title: k.name, children: k.name }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-attachment-remove",
            onClick: () => $(k.id),
            "aria-label": `Ukloni ${k.name}`,
            title: "Ukloni prilog",
            children: /* @__PURE__ */ a(Ie, { size: 10 })
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
            onClick: () => b(!0),
            "aria-label": B("close", e),
            children: /* @__PURE__ */ a(Ie, { size: 12 })
          }
        )
      ] }),
      S.isProcessing && /* @__PURE__ */ a("div", { className: "pitaj-dictation-processing", children: B("transcribing", e) }),
      /* @__PURE__ */ a("div", { className: `pitaj-input-wrapper ${pe ? "is-recording" : ""}`, children: [
        _.attachmentsEnabled && /* @__PURE__ */ a(Se, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: f,
              type: "file",
              multiple: !0,
              className: "pitaj-hidden-input",
              onChange: async (k) => {
                const V = k.currentTarget.files;
                if (k.currentTarget.value = "", !V || V.length === 0) return;
                const ie = await ta(V);
                g((se) => [...se, ...ie].slice(0, 3));
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
                return (k = f.current) == null ? void 0 : k.click();
              },
              children: /* @__PURE__ */ a(Ji, { size: 17 })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: v,
            value: r,
            onInput: (k) => p(k.target.value),
            onKeyDown: L,
            placeholder: W,
            rows: 1,
            disabled: I,
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
              onClick: () => S.cancel(),
              children: /* @__PURE__ */ a(Ie, { size: 14 })
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-wave-track", children: /* @__PURE__ */ a("div", { className: "pitaj-wave", children: S.waveformLevels.map((k, V) => /* @__PURE__ */ a(
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
              onClick: () => S.stopAndTranscribe(),
              disabled: I || S.isProcessing,
              children: /* @__PURE__ */ a(jt, { size: 15 })
            }
          )
        ] }) : /* @__PURE__ */ a(Se, { children: [
          _.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: `pitaj-composer-btn pitaj-mic-btn ${S.isProcessing ? "is-active" : ""}`,
              "aria-label": B("dictation", e),
              title: S.isProcessing ? B("transcribing", e) : S.isSupported ? B("dictation", e) : "Diktiranje nije podržano",
              onClick: () => S.start(),
              disabled: I || A || !S.isSupported || S.isProcessing,
              children: /* @__PURE__ */ a(qi, { size: 17 })
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => M(),
              disabled: I || !r.trim() && c.length === 0,
              className: "pitaj-send-btn",
              "aria-label": B("sendMessage", e),
              children: /* @__PURE__ */ a(Zi, { size: 16 })
            }
          )
        ] })
      ] }),
      te && /* @__PURE__ */ a("div", { className: "pitaj-custom-footer", children: te }),
      t.poweredBy && /* @__PURE__ */ a("div", { className: "pitaj-footer", children: [
        /* @__PURE__ */ a(_t, { size: 13, className: "pitaj-powered-icon" }),
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
function yn({
  isOpen: t,
  onClick: e,
  unreadCount: i = 0,
  config: n
}) {
  var b, c, g, v, f, _;
  const o = ((b = n.content) == null ? void 0 : b.launcherIconStyle) || "message-circle", r = typeof ((c = n.content) == null ? void 0 : c.launcherIconUrl) == "string" ? n.content.launcherIconUrl.trim() : "", p = ((g = n.content) == null ? void 0 : g.launcherShowText) === !0, s = ((v = n.content) == null ? void 0 : v.launcherTextSide) === "left" ? "left" : "right", m = p ? ((_ = (f = n.content) == null ? void 0 : f.launcherText) == null ? void 0 : _.trim()) || n.title || n.name || "Otvori chat" : null;
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: e,
      className: `pitaj-launcher-btn ${t ? "is-open" : ""} ${p ? "has-label" : ""} ${p && s === "left" ? "label-left" : ""}`,
      "aria-label": t ? "Zatvori chat" : "Otvori chat",
      "aria-expanded": t,
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-icon-wrap", children: [
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon open-icon", children: o === "custom" && r !== "" ? /* @__PURE__ */ a("img", { src: r, alt: "", className: "pitaj-launcher-custom-icon", "aria-hidden": "true" }) : /* @__PURE__ */ a(o === "sparkles" ? Va : o === "message-square" ? Gi : o === "contact" ? Ga : Ya, { size: 24 }) }),
          /* @__PURE__ */ a("span", { className: "pitaj-launcher-icon close-icon", children: /* @__PURE__ */ a(Ie, { size: 22 }) })
        ] }),
        m && !t && /* @__PURE__ */ a("span", { className: "pitaj-launcher-label", children: m }),
        i > 0 && !t && /* @__PURE__ */ a("span", { className: "pitaj-unread-badge", children: i > 9 ? "9+" : i })
      ]
    }
  );
}
const _n = "pitaj_io_popup_dismissed:";
function Sn(t) {
  try {
    return sessionStorage.getItem(t) === "1";
  } catch {
    return !1;
  }
}
function Ni(t) {
  try {
    sessionStorage.setItem(t, "1");
  } catch {
  }
}
function Mn({ isOpen: t, onOpen: e, config: i }) {
  var E, $, M, L;
  const [n, o] = U(!1), r = !!i.previewDraft, p = `${_n}${i.companyId ?? ""}`, [s, m] = U(() => !r && Sn(p)), [u, b] = U(!1), [c, g] = U(t), v = ee(null);
  q(() => {
    t && (g(!0), b(!1), r || Ni(p));
  }, [t]), q(() => {
    const z = () => {
      var O;
      if (typeof window > "u") return;
      let W = window.innerWidth <= 640;
      if (!W && v.current) {
        const te = (O = v.current.closest(".pitaj-root")) == null ? void 0 : O.parentElement;
        te && te.clientWidth > 0 && te.clientWidth <= 640 && (W = !0);
      }
      o(W);
    };
    return z(), window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, []);
  const f = i.content || {}, _ = f.autoShowInitialMessages !== !1, I = f.showAutoPopupMobile !== !1, A = !n || I, S = n && f.useDifferentDurationMobile && typeof f.mobileAutoShowDurationSeconds == "number" ? f.mobileAutoShowDurationSeconds : f.autoShowDurationSeconds ?? 0;
  if (q(() => {
    if (!_ || !A || s || t || c) {
      b(!1);
      return;
    }
    const z = Math.max(0, S) * 1e3, W = setTimeout(() => {
      b(!0);
    }, z);
    return () => clearTimeout(W);
  }, [_, A, s, t, c, S]), !u || t)
    return null;
  let D = "";
  n && f.useDifferentMessageMobile && ((E = f.mobileWelcomeMessage) != null && E.trim()) ? D = f.mobileWelcomeMessage.trim() : ($ = f.popupMessageText) != null && $.trim() ? D = f.popupMessageText.trim() : (M = i.welcomeMessage) != null && M.trim() ? D = i.welcomeMessage.trim() : (L = i.welcomeHeadline) != null && L.trim() ? D = i.welcomeHeadline.trim() : D = "Zdravo! Kako vam mogu pomoći danas?";
  const Y = (z) => {
    z.stopPropagation(), z.preventDefault(), m(!0), b(!1), r || Ni(p);
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
      "aria-label": `${T}: ${D}`,
      onKeyDown: (z) => {
        (z.key === "Enter" || z.key === " ") && (z.preventDefault(), d());
      },
      children: [
        /* @__PURE__ */ a("div", { className: "pitaj-popup-header", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-popup-author", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-popup-avatar", children: N ? /* @__PURE__ */ a("img", { src: N, alt: "" }) : /* @__PURE__ */ a(_t, { size: 14 }) }),
            /* @__PURE__ */ a("span", { className: "pitaj-popup-title", children: T })
          ] }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-popup-close-btn",
              onClick: Y,
              "aria-label": "Zatvori obavijest",
              title: "Zatvori",
              children: /* @__PURE__ */ a(Ie, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "pitaj-popup-body", children: D }),
        /* @__PURE__ */ a("div", { className: "pitaj-launcher-popup-tail", "aria-hidden": "true" })
      ]
    }
  );
}
function Nn(t) {
  if (!t) return "";
  const e = typeof t == "string" ? new Date(t) : t, n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), o = Math.floor(n / (1e3 * 60)), r = Math.floor(n / (1e3 * 60 * 60)), p = Math.floor(n / (1e3 * 60 * 60 * 24));
  return isNaN(o) || o < 1 ? "sada" : o < 60 ? `prije ${o}m` : r < 24 ? `prije ${r}h` : p < 7 ? `prije ${p}d` : e.toLocaleDateString();
}
function zn({ config: t, visitorId: e, onSelectTicket: i }) {
  const [n, o] = U([]), [r, p] = U("open"), [s, m] = U(1), [u, b] = U(!0), [c, g] = U(!0), [v, f] = U(!1), [_, I] = U(null), A = ee(null), S = ee(null), D = ee(!1);
  q(() => {
    let T = !0;
    return g(!0), o([]), m(1), b(!0), I(null), D.current = !1, $t({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: 1,
      perPage: 15
    }).then((N) => {
      T && (o(N.tickets), b(N.hasMore), m(1));
    }).catch((N) => {
      T && I(N instanceof Error ? N.message : "Tikete nije moguće učitati.");
    }).finally(() => {
      T && g(!1);
    }), () => {
      T = !1;
    };
  }, [t.apiUrl, t.companyId, e, r]);
  const Y = re(() => {
    if (c || D.current || !u) return;
    D.current = !0, f(!0);
    const T = s + 1;
    $t({
      widgetId: t.companyId,
      visitorId: e,
      apiUrl: t.apiUrl,
      status: r,
      page: T,
      perPage: 15
    }).then((N) => {
      o((E) => {
        const $ = new Set(E.map((L) => L.id)), M = N.tickets.filter((L) => !$.has(L.id));
        return [...E, ...M];
      }), b(N.hasMore), m(T);
    }).catch((N) => {
      console.error("[Pitaj.io] Error loading more tickets:", N);
    }).finally(() => {
      f(!1), D.current = !1;
    });
  }, [t.apiUrl, t.companyId, u, c, s, r, e]);
  return q(() => {
    const T = S.current, N = A.current;
    if (!T || !N || !u || c || v) return;
    const E = new IntersectionObserver(
      ($) => {
        var M;
        (M = $[0]) != null && M.isIntersecting && Y();
      },
      { root: N, rootMargin: "120px" }
    );
    return E.observe(T), () => E.disconnect();
  }, [u, c, v, Y]), /* @__PURE__ */ a(
    "div",
    {
      ref: A,
      className: "pitaj-tickets-screen",
      onScroll: (T) => {
        const N = T.currentTarget;
        !N || !u || c || D.current || N.scrollHeight - N.scrollTop - N.clientHeight < 120 && Y();
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
        c ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a("div", { className: "pitaj-tickets-loading-more-spinner", style: { width: "22px", height: "22px", borderWidth: "2.5px" } }),
          /* @__PURE__ */ a("span", { children: "Učitavanje tiketa…" })
        ] }) : _ ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: /* @__PURE__ */ a("span", { children: _ }) }) : n.length === 0 ? /* @__PURE__ */ a("div", { className: "pitaj-tickets-empty", children: [
          /* @__PURE__ */ a(Gi, { size: 30 }),
          /* @__PURE__ */ a("strong", { children: r === "open" ? "Nema otvorenih tiketa" : "Nema zatvorenih tiketa" }),
          /* @__PURE__ */ a("span", { children: r === "open" ? "Svi vaši tiketi su riješeni." : "Nemate arhiviranih tiketa." })
        ] }) : /* @__PURE__ */ a("div", { className: "pitaj-ticket-list", children: [
          n.map((T) => {
            const N = T.messages || [], E = N.length > 0 ? N[N.length - 1] : null, $ = N.length, M = $ === 1 ? "1 poruka" : $ >= 2 && $ <= 4 ? `${$} poruke` : `${$} poruka`;
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
                    /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-time", children: Nn(T.updatedAt) }),
                    $ > 0 && /* @__PURE__ */ a("span", { className: "pitaj-ticket-card-count", children: M })
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
          /* @__PURE__ */ a("div", { ref: S, style: { height: "1px", width: "100%", pointerEvents: "none" } })
        ] })
      ]
    }
  );
}
const An = Yt(() => import("./HistoryScreen-DIrGsSGX.js"), (t) => t.HistoryScreen), Cn = Yt(() => import("./FormActionsScreen-CiC5tnx8.js"), (t) => t.FormActionsScreen);
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
    const o = Number(n[1]) % 360, r = Number(n[2]) / 100, p = Number(n[3]) / 100, s = (1 - Math.abs(2 * p - 1)) * r, m = s * (1 - Math.abs(o / 60 % 2 - 1)), u = p - s / 2;
    let b = 0, c = 0, g = 0;
    return 0 <= o && o < 60 ? (b = s, c = m, g = 0) : 60 <= o && o < 120 ? (b = m, c = s, g = 0) : 120 <= o && o < 180 ? (b = 0, c = s, g = m) : 180 <= o && o < 240 ? (b = 0, c = m, g = s) : 240 <= o && o < 300 ? (b = m, c = 0, g = s) : 300 <= o && o < 360 && (b = s, c = 0, g = m), {
      r: Math.round((b + u) * 255),
      g: Math.round((c + u) * 255),
      b: Math.round((g + u) * 255)
    };
  }
  return null;
}
function In(t) {
  return lt(t);
}
function mt(t, e) {
  const i = lt(t);
  return i ? `rgba(${i.r}, ${i.g}, ${i.b}, ${e})` : null;
}
function Tn(t, e, i) {
  const n = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${n(t)}${n(e)}${n(i)}`;
}
function ot(t) {
  const e = lt(t);
  return e && (0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b) / 255 > 0.6 ? "#111827" : "#ffffff";
}
function Ln(t, e) {
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
function Pn(t) {
  const e = In(t);
  if (!e) return t;
  const i = ot(t) === "#111827", n = i ? 0.2 : 0.16, o = i ? 0 : 255;
  return Tn(
    e.r + (o - e.r) * n,
    e.g + (o - e.g) * n,
    e.b + (o - e.b) * n
  );
}
function En({
  config: t,
  startOpen: e = !1,
  initialScreen: i = "new-conversation",
  onEvent: n,
  isInline: o = !1,
  isMobile: r,
  isCanvasPreview: p = !1
}) {
  var me, Pe, Fe, Re, Oe, Ve, Ke, Ye, We, Ze, Ge, qe, Qe, Je, Xe, et, tt;
  const {
    config: s,
    setConfig: m,
    isOpen: u,
    setIsOpen: b,
    screen: c,
    setScreen: g,
    conversations: v,
    activeConversation: f,
    totalUnread: _,
    isStreaming: I,
    rateLimitTimer: A,
    errorBanner: S,
    sessionInvalid: D,
    resetSession: Y,
    selectConversation: d,
    startNewConversation: T,
    endConversation: N,
    deleteConversation: E,
    sendUserMessage: $,
    submitSatisfaction: M,
    visitorContact: L,
    visitorId: z,
    activeConversationId: W,
    activeLanguage: O,
    appendConversationMessage: te,
    appendWorkflowWidget: pe,
    handleApiError: Q
  } = Oa(t, {
    startOpen: e,
    initialScreen: i,
    emitEvent: n,
    onActionTrigger: (y, l) => {
      if (!s.isPreview && !s.mockMode && (n == null || n("action_triggered", { ...Sa(s.companyId, y), ...l ? { complete: l } : {} })), ie(!0), b(!0), (c === "history" || c === "new-conversation") && g("conversation"), y.widget_id || y.widget)
        return;
      const h = Number(y.id), w = Number(y.form_id), P = Number.isInteger(h) && h > 0 ? h : null, C = Number.isInteger(w) && w > 0 ? -w : null;
      ge(P ?? C);
    }
  }), J = ee(i), k = ee(e), [V, ie] = U(e), [se, ge] = U(() => {
    var y, l, h, w;
    return ((y = s.previewDraft) == null ? void 0 : y.initialStep) === "form" && !!!(s.previewDraft.widget || (l = s.previewDraft.action) != null && l.widget || (h = s.previewDraft.action) != null && h.widget_id) ? ((w = s.previewDraft.action) == null ? void 0 : w.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null) : null;
  });
  q(() => {
    var y, l, h, w, P, C, X;
    if (((y = s.previewDraft) == null ? void 0 : y.initialStep) === "form") {
      if (!!!(s.previewDraft.widget || (l = s.previewDraft.action) != null && l.widget || (h = s.previewDraft.action) != null && h.widget_id)) {
        const R = ((w = s.previewDraft.action) == null ? void 0 : w.id) ?? (s.previewDraft.form ? -s.previewDraft.form.id : null);
        R !== null && ge(R);
      }
    } else (((P = s.previewDraft) == null ? void 0 : P.initialStep) === "idle" || ((C = s.previewDraft) == null ? void 0 : C.initialStep) === "submitted" || ((X = s.previewDraft) == null ? void 0 : X.initialStep) === "dismissed") && ge(null);
  }, [
    (me = s.previewDraft) == null ? void 0 : me.initialStep,
    (Fe = (Pe = s.previewDraft) == null ? void 0 : Pe.action) == null ? void 0 : Fe.id,
    (Oe = (Re = s.previewDraft) == null ? void 0 : Re.form) == null ? void 0 : Oe.id,
    (Ve = s.previewDraft) == null ? void 0 : Ve.widget
  ]);
  const [ve, he] = U(null), ke = ee(null), [de, je] = U(() => typeof r == "boolean" ? r : o ? !1 : typeof window < "u" ? window.innerWidth <= 640 : !1);
  q(() => {
    if (typeof r == "boolean") {
      je(r);
      return;
    }
    const y = () => {
      if (typeof window > "u") return;
      if (o) {
        je(!1);
        return;
      }
      let l = window.innerWidth <= 640;
      if (!l && ke.current) {
        const h = ke.current.getRootNode(), w = h instanceof ShadowRoot ? h.host : ke.current.parentElement, P = (w == null ? void 0 : w.parentElement) || w;
        P && P.clientWidth > 0 && P.clientWidth <= 640 && (l = !0);
      }
      je(l);
    };
    return y(), window.addEventListener("resize", y), window.addEventListener("orientationchange", y), () => {
      window.removeEventListener("resize", y), window.removeEventListener("orientationchange", y);
    };
  }, [r]), q(() => {
    if (typeof window > "u") return;
    const y = () => {
      const h = ke.current;
      if (!h) return;
      const w = window.visualViewport;
      if (w) {
        const P = w.height < window.innerHeight - 100;
        h.style.setProperty("--pitaj-viewport-height", `${Math.round(w.height)}px`), h.style.setProperty("--pitaj-viewport-top", `${Math.round(w.offsetTop)}px`), h.style.setProperty("--pitaj-viewport-left", `${Math.round(w.offsetLeft)}px`), h.style.setProperty(
          "--pitaj-input-safe-bottom",
          P ? "10px" : "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
      } else
        h.style.setProperty("--pitaj-viewport-height", "100dvh"), h.style.setProperty("--pitaj-viewport-top", "0px"), h.style.setProperty("--pitaj-viewport-left", "0px"), h.style.setProperty(
          "--pitaj-input-safe-bottom",
          "calc(12px + env(safe-area-inset-bottom, 0px))"
        );
    };
    y();
    const l = window.visualViewport;
    return l && (l.addEventListener("resize", y), l.addEventListener("scroll", y)), window.addEventListener("resize", y), window.addEventListener("orientationchange", y), () => {
      l && (l.removeEventListener("resize", y), l.removeEventListener("scroll", y)), window.removeEventListener("resize", y), window.removeEventListener("orientationchange", y);
    };
  }, [u, de]), q(() => {
    if (typeof document > "u" || !u || !de || o || p) return;
    const y = document.body.style.overflow, l = document.body.style.touchAction;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = y, document.body.style.touchAction = l;
    };
  }, [u, de, o, p]), q(() => {
    var h;
    if (typeof window > "u" || o) return;
    const y = (h = ke.current) == null ? void 0 : h.getRootNode(), l = y instanceof ShadowRoot ? y.host : null;
    if (l) {
      if (p || l.hasAttribute("data-pitaj-preview") || l.classList.contains("pitaj-preview-host")) {
        l.style.width = "100%", l.style.height = "100%", l.style.top = "0", l.style.left = "0", l.style.position = "relative";
        return;
      }
      u && de ? (l.style.top = "0", l.style.left = "0", l.style.width = "100%", l.style.height = "100%", l.setAttribute("data-pitaj-mobile-open", "true")) : (l.style.top = "", l.style.left = "", l.style.width = "0", l.style.height = "0", l.removeAttribute("data-pitaj-mobile-open"));
    }
  }, [u, de, o, p]);
  const fe = s.formsEnabled === !0 && s.formsAvailable !== !1, ze = Be(() => {
    var h, w;
    const y = s.actions || [];
    if (y.length > 0 && typeof ((h = y[0]) == null ? void 0 : h.id) == "number")
      return y[0].id;
    const l = s.forms || [];
    return l.length > 0 && typeof ((w = l[0]) == null ? void 0 : w.id) == "number" ? -l[0].id : null;
  }, [s.actions, s.forms]), Me = Be(() => ({
    open: () => {
      ie(!0), b(!0);
    },
    close: () => b(!1),
    toggle: () => {
      u || ie(!0), b(!u);
    },
    startConversation: (y) => {
      ie(!0), b(!0), y && y.trim() ? T(y.trim()) : g("new-conversation");
    },
    setScreen: (y) => g(y),
    setConfig: (y) => {
      const l = {
        ...s,
        ...y,
        colors: { ...s.colors || {}, ...y.colors || {} },
        content: { ...s.content || {}, ...y.content || {} },
        features: { ...s.features || {}, ...y.features || {} },
        cssVars: { ...s.cssVars || {}, ...y.cssVars || {} }
      };
      if (l.previewDraft) {
        if (l.previewDraft.action) {
          const h = l.previewDraft.action;
          l.actions = [h, ...(l.actions || []).filter((w) => w.id !== h.id)];
        }
        if (l.previewDraft.form) {
          const h = l.previewDraft.form;
          l.forms = [h, ...(l.forms || []).filter((w) => w.id !== h.id)], l.formsAvailable = !0, l.formsEnabled = !0;
        }
        if (l.previewDraft.widget) {
          const h = l.previewDraft.widget;
          l.widgets = [h, ...(l.widgets || []).filter((w) => w.id !== h.id)];
        }
      }
      m(l);
    }
  }), [s, u, b, g, T, m]), x = ee({});
  _i(x.current, Me), q(() => () => _i(x.current, null), []), q(() => {
    i !== J.current && (J.current = i, g(i));
  }, [i, g]), q(() => {
    e !== k.current && (k.current = e, e && ie(!0), b(e));
  }, [e, b]), q(() => {
    if (c === "forms") {
      fe && ze !== null && ge(ze), g("new-conversation");
      return;
    }
    c === "contact" && g("new-conversation");
  }, [ze, fe, c, g]), q(() => {
    var w;
    if (typeof document > "u") return;
    const y = (w = s.content) == null ? void 0 : w.fontFamily;
    if (!y) return;
    const l = y.trim().toLowerCase();
    let h = "";
    if (l === "inter" ? h = "family=Inter:wght@400;500;600;700" : l === "geist" ? h = "family=Geist:wght@400;500;600;700" : l === "plus jakarta sans" && (h = "family=Plus+Jakarta+Sans:wght@400;500;600;700"), h) {
      const P = `pitaj-font-${l.replace(/\s+/g, "-")}`;
      if (!document.getElementById(P)) {
        const C = document.createElement("link");
        C.id = P, C.rel = "stylesheet", C.href = `https://fonts.googleapis.com/css2?${h}&display=swap`, document.head.appendChild(C);
      }
    }
  }, [(Ke = s.content) == null ? void 0 : Ke.fontFamily]);
  const K = Be(() => {
    var Gt, qt, Qt, Jt, Xt, ei, ti, ii, ai;
    const l = (((Gt = s.content) == null ? void 0 : Gt.themeMode) === "dark" ? "dark" : "light") === "dark", h = s.colors || {}, w = l ? "#0b1220" : "#ffffff", P = l ? "#111827" : "#f8fafc", C = l ? "#111827" : "#ffffff", X = l ? "#e5e7eb" : "#0f172a", ae = l ? "#9ca3af" : "#64748b", R = l ? "#263246" : "#e2e8f0", G = l ? "#172033" : "#f1f5f9", H = l ? "#111827" : "#ffffff", j = {};
    (qt = s.theme) != null && qt.css_vars && typeof s.theme.css_vars == "object" && Object.assign(j, s.theme.css_vars);
    const F = h.primaryColor || (l ? "#3b82f6" : "#2563eb");
    j["--pitaj-accent"] = F, j["--pitaj-bubble-user"] = h.bubbleUserBg || F, j["--pitaj-accent-hover"] = Pn(F), j["--pitaj-accent-contrast"] = ot(F), j["--pitaj-bubble-user-fg"] = ot(h.bubbleUserBg || F);
    const ye = mt(F, 0.1), xe = mt(F, 0.16), _e = mt(F, 0.35);
    ye && (j["--pitaj-accent-soft"] = ye), xe && (j["--pitaj-accent-soft-strong"] = xe), _e && (j["--pitaj-accent-ring"] = _e);
    const Te = h.sendAccent || (l ? "#e5e7eb" : "#111827");
    j["--pitaj-send-accent"] = Te, j["--pitaj-send-accent-contrast"] = ot(Te);
    const we = h.surfaceBg || w;
    j["--pitaj-surface"] = we, h.subtle ? j["--pitaj-surface-subtle"] = h.subtle : h.surfaceBg ? j["--pitaj-surface-subtle"] = mt(h.surfaceBg, 0.9) || h.surfaceBg : j["--pitaj-surface-subtle"] = P;
    const be = h.bubbleAiBg || C;
    j["--pitaj-bubble-ai"] = be;
    const it = h.textFg || X;
    j["--pitaj-bubble-ai-fg"] = it, j["--pitaj-fg"] = it;
    const ra = h.mutedFg || ae;
    j["--pitaj-muted"] = ra;
    const St = h.border || R;
    j["--pitaj-border"] = St, j["--pitaj-card-border"] = St;
    const oa = h.hover || G;
    j["--pitaj-hover"] = oa, j["--pitaj-chrome-border"] = l ? "rgba(148, 163, 184, 0.52)" : "#d1d5db";
    const dt = h.headerBg || H, Wt = Ln(dt, h.headerFg), sa = h.headerFg || (Wt ? "#ffffff" : "#0f172a");
    j["--pitaj-header-bg"] = dt, j["--pitaj-header-fg"] = sa, Wt ? (j["--pitaj-header-gradient"] = "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.14) 100%)", j["--pitaj-header-icon"] = "rgba(255, 255, 255, 0.88)", j["--pitaj-header-icon-hover"] = "#ffffff", j["--pitaj-header-icon-hover-bg"] = "rgba(255, 255, 255, 0.14)", j["--pitaj-header-icon-active-bg"] = "rgba(255, 255, 255, 0.22)", j["--pitaj-header-border"] = "rgba(255, 255, 255, 0.12)", j["--pitaj-header-badge-bg"] = "rgba(255, 255, 255, 0.18)", j["--pitaj-header-badge-fg"] = "#ffffff", j["--pitaj-header-muted"] = "rgba(255, 255, 255, 0.70)") : (j["--pitaj-header-gradient"] = dt.toLowerCase() === "#ffffff" || dt.toLowerCase() === "#fff" ? "linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.05) 100%)", j["--pitaj-header-icon"] = "rgba(15, 23, 42, 0.72)", j["--pitaj-header-icon-hover"] = "#0f172a", j["--pitaj-header-icon-hover-bg"] = "rgba(15, 23, 42, 0.07)", j["--pitaj-header-icon-active-bg"] = "rgba(15, 23, 42, 0.12)", j["--pitaj-header-border"] = St, j["--pitaj-header-badge-bg"] = "rgba(15, 23, 42, 0.08)", j["--pitaj-header-badge-fg"] = "#0f172a", j["--pitaj-header-muted"] = "rgba(15, 23, 42, 0.62)");
    const Mt = (Qt = s.content) == null ? void 0 : Qt.launcherButtonColor;
    Mt && (j["--pitaj-launcher-bg"] = Mt, j["--pitaj-launcher-fg"] = ot(Mt));
    const Ae = (Jt = s.content) == null ? void 0 : Jt.cornerRadius;
    if (Ae) {
      const Ne = Ae === "sharp" || Ae === "0px" ? "0px" : Ae === "small" || Ae === "8px" ? "8px" : Ae === "medium" || Ae === "12px" ? "12px" : Ae === "large" || Ae === "16px" ? "16px" : Ae;
      j["--pitaj-radius"] = Ne, Ne === "0px" ? (j["--pitaj-radius-bubble"] = "0px", j["--pitaj-radius-input"] = "0px", j["--pitaj-radius-btn"] = "0px", j["--pitaj-radius-avatar"] = "0px", j["--pitaj-radius-full"] = "0px", j["--pitaj-radius-corner-sm"] = "0px", j["--pitaj-launcher-radius"] = "0px", j["--pitaj-launcher-pill-radius"] = "0px", j["--pitaj-badge-radius"] = "0px") : Ne === "8px" ? (j["--pitaj-radius-bubble"] = "8px", j["--pitaj-radius-input"] = "8px", j["--pitaj-radius-btn"] = "6px", j["--pitaj-radius-avatar"] = "6px", j["--pitaj-radius-full"] = "8px", j["--pitaj-radius-corner-sm"] = "2px", j["--pitaj-launcher-radius"] = "8px", j["--pitaj-launcher-pill-radius"] = "8px", j["--pitaj-badge-radius"] = "4px") : Ne === "12px" ? (j["--pitaj-radius-bubble"] = "12px", j["--pitaj-radius-input"] = "12px", j["--pitaj-radius-btn"] = "8px", j["--pitaj-radius-avatar"] = "10px", j["--pitaj-radius-full"] = "12px", j["--pitaj-radius-corner-sm"] = "4px", j["--pitaj-launcher-radius"] = "12px", j["--pitaj-launcher-pill-radius"] = "12px", j["--pitaj-badge-radius"] = "6px") : (j["--pitaj-radius-bubble"] = "18px", j["--pitaj-radius-input"] = "14px", j["--pitaj-radius-btn"] = "10px", j["--pitaj-radius-avatar"] = "50%", j["--pitaj-radius-full"] = "999px", j["--pitaj-radius-corner-sm"] = "4px", j["--pitaj-launcher-radius"] = "50%", j["--pitaj-launcher-pill-radius"] = "999px", j["--pitaj-badge-radius"] = "999px");
    }
    const Nt = (Xt = s.content) == null ? void 0 : Xt.fontFamily;
    if (Nt) {
      const Ne = Nt.toLowerCase(), ni = Ne === "system" ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" : Ne === "arial" ? "Arial, Helvetica, sans-serif" : Ne === "helvetica" ? "'Helvetica Neue', Helvetica, Arial, sans-serif" : Ne === "georgia" ? "Georgia, serif" : Ne === "geist" ? "'Geist', system-ui, -apple-system, sans-serif" : Ne === "inter" ? "'Inter', system-ui, -apple-system, sans-serif" : `'${Nt}', 'Inter', system-ui, sans-serif`;
      j["--pitaj-font"] = ni, j.fontFamily = ni;
    }
    const zt = (ei = s.content) == null ? void 0 : ei.fontSize;
    zt && (j["--pitaj-font-size"] = zt, j.fontSize = zt);
    const Zt = (ti = s.content) != null && ti.dropShadowEnabled ? l ? "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.3)" : "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)" : "none";
    j["--pitaj-window-shadow"] = Zt, j["--pitaj-shadow"] = Zt;
    const ca = (ii = s.content) != null && ii.dropShadowEnabled ? l ? "0 4px 12px rgba(0, 0, 0, 0.4), 0 10px 24px -4px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(15, 23, 42, 0.15), 0 10px 24px -4px rgba(15, 23, 42, 0.25)" : "none", pa = (ai = s.content) != null && ai.dropShadowEnabled ? l ? "0 6px 16px rgba(0, 0, 0, 0.45), 0 16px 32px -4px rgba(0, 0, 0, 0.6)" : "0 6px 16px rgba(15, 23, 42, 0.18), 0 16px 32px -4px rgba(15, 23, 42, 0.32)" : "none";
    return j["--pitaj-launcher-shadow"] = ca, j["--pitaj-launcher-shadow-hover"] = pa, s.cssVars && typeof s.cssVars == "object" && Object.assign(j, s.cssVars), j;
  }, [
    s.cssVars,
    s.theme,
    s.colors,
    (Ye = s.content) == null ? void 0 : Ye.themeMode,
    (We = s.content) == null ? void 0 : We.launcherButtonColor,
    (Ze = s.content) == null ? void 0 : Ze.cornerRadius,
    (Ge = s.content) == null ? void 0 : Ge.fontFamily,
    (qe = s.content) == null ? void 0 : qe.fontSize,
    (Qe = s.content) == null ? void 0 : Qe.dropShadowEnabled
  ]), Z = ((Je = s.content) == null ? void 0 : Je.themeMode) === "dark" ? "dark" : "light", ue = `pos-${s.position || "bottom-right"}`;
  return s.enabled === !1 ? /* @__PURE__ */ a(Se, {}) : /* @__PURE__ */ a(
    "div",
    {
      ref: ke,
      "data-theme": Z,
      className: `pitaj-root pitaj-theme-${Z} ${ue} ${u ? "is-widget-open" : "is-widget-closed"} ${o ? "is-inline" : ""} ${p ? "is-canvas-preview" : ""} ${de ? "is-mobile" : ""} ${o && ((Xe = s.content) != null && Xe.showInlineLauncher) ? "show-inline-launcher" : ""}`,
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
                on,
                {
                  screen: c,
                  activeConversation: f,
                  config: s,
                  language: O,
                  onBack: () => {
                    const y = ve || "new-conversation";
                    he(null), g(y);
                  },
                  onClose: () => {
                    b(!1);
                  },
                  onNewConversation: () => {
                    he(null), g("new-conversation");
                  },
                  onEndConversation: () => {
                    N(), b(!1);
                  },
                  onDeleteConversation: ((et = s.content) == null ? void 0 : et.deleteConversationsEnabled) !== !1 && f ? () => E(f.id) : void 0,
                  onViewHistory: () => {
                    he(null), g("history");
                  },
                  onViewTickets: () => {
                    he(null), g("tickets");
                  }
                }
              ),
              /* @__PURE__ */ a("div", { className: "pitaj-body", children: [
                c === "conversation" && f && /* @__PURE__ */ a(
                  wn,
                  {
                    conversation: f,
                    config: s,
                    language: O,
                    isStreaming: I,
                    rateLimitCountdown: A,
                    errorBanner: S,
                    sessionInvalid: D,
                    onResetSession: Y,
                    onSendMessage: $,
                    onWorkflowWidget: (y) => pe(f.id, y),
                    onApiError: Q,
                    onSubmitSatisfaction: (y, l) => M(f.id, y, l)
                  }
                ),
                c === "new-conversation" && /* @__PURE__ */ a(
                  kn,
                  {
                    config: s,
                    language: O,
                    openedByUser: V,
                    onStart: (y) => {
                      T(y);
                    },
                    onApiError: Q
                  }
                ),
                c === "history" && /* @__PURE__ */ a(
                  An,
                  {
                    conversations: v,
                    config: s,
                    language: O,
                    onSelectConversation: (y) => {
                      he("history"), d(y);
                    },
                    onNewConversation: () => {
                      he(null), g("new-conversation");
                    },
                    onDeleteConversation: ((tt = s.content) == null ? void 0 : tt.deleteConversationsEnabled) !== !1 ? E : void 0
                  }
                ),
                c === "tickets" && /* @__PURE__ */ a(
                  zn,
                  {
                    config: s,
                    visitorId: z,
                    onSelectTicket: (y) => {
                      var X;
                      he("tickets");
                      const l = (X = y.messages) == null ? void 0 : X.find((ae) => ae.sender === "user"), h = y.messages && y.messages.length > 0 ? y.messages[y.messages.length - 1] : null, w = l ? l.content.length > 40 ? l.content.slice(0, 40) + "…" : l.content : y.ticketNumber || `Tiket #${y.id}`, C = {
                        id: y.conversationId ? String(y.conversationId) : String(y.id),
                        title: w,
                        preview: h ? h.content : y.ticketNumber || `Tiket #${y.id}`,
                        timestamp: y.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
                        unread: 0,
                        messages: y.messages || [],
                        status: y.isResolved ? "ended" : "active",
                        ticketNumber: y.ticketNumber
                      };
                      d(C);
                    }
                  }
                ),
                (c === "conversation" || c === "new-conversation") && fe && se !== null ? /* @__PURE__ */ a("div", { className: "pitaj-inline-form-shell", children: /* @__PURE__ */ a(
                  Cn,
                  {
                    embedded: !0,
                    config: s,
                    widgetId: s.companyId,
                    activeConversationId: W,
                    initialActionId: se,
                    visitorContact: L,
                    onApiError: Q,
                    blockedReason: A !== null ? `Sačekajte ${A}s prije novog zahtjeva.` : null,
                    onSubmitted: (y) => {
                      var l, h;
                      if (te(W, y, "user"), s.mockMode || s.isPreview) {
                        const w = ((h = (l = s.previewDraft) == null ? void 0 : l.form) == null ? void 0 : h.success_message) || "Hvala vam! Vaš upit je uspješno zaprimljen.";
                        setTimeout(() => {
                          te(W, w, "ai");
                        }, 400);
                      }
                    },
                    onBack: () => ge(null),
                    onDismiss: async (y, l) => {
                      if (!(y != null && y.dismiss_message) || !W) return;
                      const h = s.mockMode || s.isPreview ? y.dismiss_message : await _a(s.companyId, W, y.id, l, s.apiUrl);
                      te(W, h, "ai");
                    }
                  }
                ) }) : null
              ] })
            ]
          }
        ),
        (!u || !de) && /* @__PURE__ */ a("div", { className: `pitaj-launcher-wrap ${u ? "is-widget-open" : "is-widget-closed"}`, children: [
          /* @__PURE__ */ a(
            Mn,
            {
              isOpen: u,
              onOpen: () => {
                ie(!0), b(!0);
              },
              config: s
            }
          ),
          /* @__PURE__ */ a(
            yn,
            {
              isOpen: u,
              onClick: () => {
                u || ie(!0), b(!u);
              },
              unreadCount: _,
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
function $n(t) {
  if (typeof t != "string") return "#ffffff";
  let e = t.trim();
  if (/^#[0-9A-Fa-f]{3}$/.test(e) && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`), !/^#[0-9A-Fa-f]{6}$/.test(e)) return "#ffffff";
  const i = Number.parseInt(e.slice(1, 3), 16), n = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return (0.2126 * i + 0.7152 * n + 0.0722 * o) / 255 > 0.6 ? "#0f172a" : "#ffffff";
}
function Dn(t, e) {
  if (typeof t != "string") return e;
  const i = t.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : /^#[0-9A-Fa-f]{3}$/.test(i) ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`.toUpperCase() : e;
}
function Bn(t) {
  const e = t.trim(), i = /^#[0-9A-Fa-f]{3}$/.test(e) ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
  if (!/^#[0-9A-Fa-f]{6}$/.test(i))
    return { h: 210, s: 70, l: 50 };
  const n = Number.parseInt(i.slice(1, 3), 16) / 255, o = Number.parseInt(i.slice(3, 5), 16) / 255, r = Number.parseInt(i.slice(5, 7), 16) / 255, p = Math.max(n, o, r), s = Math.min(n, o, r), m = p - s;
  let u = 0;
  const b = (p + s) / 2, c = m === 0 ? 0 : m / (1 - Math.abs(2 * b - 1));
  if (m !== 0)
    switch (p) {
      case n:
        u = (o - r) / m % 6;
        break;
      case o:
        u = (r - n) / m + 2;
        break;
      default:
        u = (n - o) / m + 4;
        break;
    }
  return { h: Math.round((u * 60 + 360) % 360), s: Math.round(c * 100), l: Math.round(b * 100) };
}
function Hn(t) {
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
function Un(t) {
  return Array.isArray(t) ? t.filter((e) => typeof e == "object" && e !== null).map((e) => {
    const i = e.schema_json && typeof e.schema_json == "object" ? e.schema_json : {}, o = (Array.isArray(i.fields) ? i.fields : []).filter((r) => typeof r == "object" && r !== null).map((r) => ({
      key: typeof r.key == "string" ? r.key : "",
      type: Hn(r.type),
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
function Fn(t) {
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
async function Rn(t, e) {
  var n, o, r, p, s, m, u, b, c;
  if (t === "default")
    return { ...oe, companyId: t || "default" };
  const i = (e || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  try {
    const g = `${i}/api/widget/${t}/config`, v = await fetch(g, {
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
    const f = await v.json(), _ = f.accent_color || ((n = oe.colors) == null ? void 0 : n.primaryColor) || "#2563eb", I = Array.isArray(f.suggested_questions) ? f.suggested_questions.filter((k) => typeof k == "string" && k.trim() !== "").slice(0, 4) : [], A = Array.isArray(f.contact_fields) ? f.contact_fields.filter(
      (k) => k === "name" || k === "email" || k === "phone"
    ) : [], D = (Array.isArray(f.channels) ? f.channels : []).find(
      (k) => typeof k == "object" && k !== null && k.channel === "chat_bubble"
    ), Y = (D == null ? void 0 : D.enabled) !== !1, d = f.widget_content && typeof f.widget_content == "object" ? f.widget_content : null, T = Array.isArray(d == null ? void 0 : d.suggested_message_rows) ? d.suggested_message_rows.filter((k) => typeof k == "object" && k !== null).map((k) => {
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
      launcherButtonColor: Dn(d == null ? void 0 : d.launcher_button_color, "#05070c"),
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
    }, E = f.theme && typeof f.theme == "object" ? f.theme : null, $ = E != null && E.css_vars && typeof E.css_vars == "object" ? E.css_vars : void 0, M = E != null && E.colors && typeof E.colors == "object" ? E.colors : null;
    let L = M, z = _;
    if (L)
      M.primaryColor && (z = M.primaryColor);
    else {
      const k = N.themeMode === "dark" ? "dark" : "light", V = N.accentColorEnabled !== !1, ie = N.accentColorForHeaderEnabled === !0, se = N.tintedGrayscaleEnabled === !0, ge = N.tintedGrayscaleHue ?? 0, ve = N.tintedGrayscaleTint ?? 0, he = N.tintedGrayscaleShade ?? 0;
      z = V ? _ : k === "dark" ? "#3b82f6" : "#2563eb";
      const de = (Bn(z).h + ge + 360) % 360, je = Math.max(0, Math.min(40, Math.round(Math.max(0, ve) * 0.36))), fe = Math.max(-24, Math.min(24, he * 0.24));
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
      }, V && ie && (L.headerBg = z, L.headerFg = $n(z)), se) {
        const ze = k === "dark" ? Math.max(8, Math.min(20, 12 + fe)) : Math.max(88, Math.min(97, 95 + fe * 0.22)), Me = k === "dark" ? Math.max(10, Math.min(24, 16 + fe)) : Math.max(80, Math.min(94, 89 + fe * 0.35)), x = k === "dark" ? Math.max(11, Math.min(26, 18 + fe * 0.9)) : Math.max(83, Math.min(95, Me + 3)), K = k === "dark" ? Math.max(22, Math.min(40, 30 + fe)) : Math.max(70, Math.min(88, 82 + fe * 0.38)), Z = k === "dark" ? Math.max(16, Math.min(30, 22 + fe)) : Math.max(78, Math.min(92, Me - 2));
        L.surfaceBg = `hsl(${de} ${je}% ${ze}%)`, L.bubbleAiBg = `hsl(${de} ${Math.max(0, je - 2)}% ${x}%)`, L.subtle = `hsl(${de} ${Math.max(0, je - 4)}% ${Me}%)`, L.border = `hsl(${de} ${Math.max(0, je - 5)}% ${K}%)`, L.hover = `hsl(${de} ${Math.max(0, je - 3)}% ${Z}%)`;
      }
    }
    const W = Un(f.forms), O = Fn(f.actions).filter(
      (k) => W.some((V) => V.id === k.form_id)
    ), te = f.forms_enabled === !0 && W.length > 0 && O.length > 0, pe = f.chat_available !== !1, Q = f.transcribe_available !== !1 && pe, J = f.forms_available !== !1 && te;
    return {
      ...oe,
      companyId: t,
      enabled: Y,
      apiUrl: i,
      name: f.company_name || oe.name,
      title: f.bot_name || oe.title,
      avatar: typeof (d == null ? void 0 : d.avatar_url) == "string" && d.avatar_url.trim() !== "" ? d.avatar_url : oe.avatar,
      welcomeHeadline: f.bot_name ? `Ćaskajte sa ${f.bot_name}` : oe.welcomeHeadline,
      welcomeMessage: f.welcome_message || oe.welcomeMessage,
      placeholder: N.messagePlaceholder || oe.placeholder,
      suggestedQuestions: I,
      contactFields: A.length > 0 ? A : oe.contactFields,
      contact: {
        enabled: typeof ((o = f.contact) == null ? void 0 : o.enabled) == "boolean" ? f.contact.enabled : (r = oe.contact) == null ? void 0 : r.enabled,
        title: typeof ((p = f.contact) == null ? void 0 : p.title) == "string" && f.contact.title.trim() !== "" ? f.contact.title : (s = oe.contact) == null ? void 0 : s.title,
        subtitle: typeof ((m = f.contact) == null ? void 0 : m.subtitle) == "string" && f.contact.subtitle.trim() !== "" ? f.contact.subtitle : (u = oe.contact) == null ? void 0 : u.subtitle,
        submitLabel: typeof ((b = f.contact) == null ? void 0 : b.submit_label) == "string" && f.contact.submit_label.trim() !== "" ? f.contact.submit_label : (c = oe.contact) == null ? void 0 : c.submitLabel
      },
      poweredBy: f.show_branding !== void 0 ? f.show_branding : oe.poweredBy,
      position: f.position || oe.position,
      accentGradient: Array.isArray(f.accent_gradient) ? f.accent_gradient : [],
      content: {
        ...oe.content || {},
        ...N
      },
      chatAvailable: pe,
      transcribeAvailable: Q,
      formsAvailable: J,
      formsEnabled: te,
      forms: W,
      actions: O,
      theme: E,
      cssVars: $,
      colors: {
        ...oe.colors,
        primaryColor: z,
        bubbleUserBg: z,
        sendAccent: (M == null ? void 0 : M.sendAccent) || (N.accentColorForSendIconEnabled ? z : N.themeMode === "dark" ? "#e5e7eb" : "#111827"),
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
  } catch (g) {
    return console.warn("[ChatWidget] Network error fetching widget config, falling back to defaults:", g), { ...oe, companyId: t, apiUrl: i, mockMode: !1 };
  }
}
const On = ':host{--pitaj-accent: #2563eb;--pitaj-accent-hover: #1d4ed8;--pitaj-accent-contrast: #ffffff;--pitaj-accent-soft: rgba(37, 99, 235, .08);--pitaj-accent-soft-strong: rgba(37, 99, 235, .14);--pitaj-accent-ring: rgba(37, 99, 235, .25);--pitaj-send-accent: #2563eb;--pitaj-send-accent-contrast: #ffffff;--pitaj-launcher-bg: #090d16;--pitaj-launcher-fg: #ffffff;--pitaj-header-bg: #ffffff;--pitaj-header-fg: #0f172a;--pitaj-header-icon: rgba(15, 23, 42, .72);--pitaj-header-icon-hover: #0f172a;--pitaj-header-icon-hover-bg: rgba(15, 23, 42, .07);--pitaj-header-icon-active-bg: rgba(15, 23, 42, .12);--pitaj-header-border: rgba(15, 23, 42, .08);--pitaj-header-badge-bg: rgba(15, 23, 42, .08);--pitaj-header-badge-fg: #0f172a;--pitaj-header-muted: rgba(15, 23, 42, .62);--pitaj-chrome-border: #e2e8f0;--pitaj-surface: #ffffff;--pitaj-surface-subtle: #f8fafc;--pitaj-bubble-ai: #ffffff;--pitaj-bubble-ai-fg: #0f172a;--pitaj-bubble-user: #2563eb;--pitaj-bubble-user-fg: #ffffff;--pitaj-fg: #0f172a;--pitaj-muted: #64748b;--pitaj-border: #e2e8f0;--pitaj-hover: #f1f5f9;--pitaj-card-border: #e2e8f0;--pitaj-danger: #ef4444;--pitaj-danger-soft: rgba(239, 68, 68, .12);--pitaj-success: #10b981;--pitaj-radius: 16px;--pitaj-radius-bubble: 18px;--pitaj-radius-input: 14px;--pitaj-radius-btn: 10px;--pitaj-radius-avatar: 50%;--pitaj-radius-full: 999px;--pitaj-radius-corner-sm: 4px;--pitaj-launcher-radius: 50%;--pitaj-launcher-pill-radius: 999px;--pitaj-badge-radius: 999px;--pitaj-window-shadow: none;--pitaj-shadow: var(--pitaj-window-shadow, none);--pitaj-launcher-shadow: none;--pitaj-launcher-shadow-hover: none;--pitaj-font: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--pitaj-font-size: 14px;display:block;font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px);line-height:1.5;color:var(--pitaj-fg);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host([data-theme="dark"]),.pitaj-root.pitaj-theme-dark,.pitaj-root[data-theme=dark]{color-scheme:dark}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}button{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;cursor:pointer;padding:0;outline:none}button:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}textarea,input{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;border:none;background:transparent;outline:none}.pitaj-shadow-mount{width:100%;height:100%;min-height:0;max-height:100%;overflow:visible}.pitaj-root{position:fixed;z-index:2147483647;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;gap:12px;pointer-events:none;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);color:var(--pitaj-fg);font-family:var(--pitaj-font);font-size:var(--pitaj-font-size, 14px)}.pitaj-root.is-inline{position:relative;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;width:min(100%,380px);max-width:380px;height:100%;max-height:100%;display:flex;flex-direction:column;justify-content:center!important;gap:12px;z-index:auto;pointer-events:auto;overflow:visible}.pitaj-root.is-inline .pitaj-window.is-closed,.pitaj-root.is-inline.is-widget-closed .pitaj-window{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important}.pitaj-root.is-inline .pitaj-launcher-wrap{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:relative!important;inset:auto!important;margin:0!important;flex-shrink:0;z-index:20}.pitaj-root.is-inline.pos-bottom-right .pitaj-launcher-wrap{align-self:flex-end!important}.pitaj-root.is-inline.pos-bottom-left .pitaj-launcher-wrap{align-self:flex-start!important}.pitaj-root.is-inline.is-widget-closed .pitaj-launcher-wrap{align-self:center!important}.pitaj-root.is-inline .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-inline .pitaj-window{position:relative;width:100%;max-width:380px;height:auto;flex:1 1 auto;min-height:0;max-height:calc(100% - 68px);transform:none;pointer-events:auto;border-radius:var(--pitaj-radius);overflow:hidden}.pitaj-root.pos-bottom-right{bottom:20px;right:20px;top:20px;align-items:flex-end;justify-content:flex-end}.pitaj-root.pos-bottom-left{bottom:20px;left:20px;top:20px;right:auto;align-items:flex-start;justify-content:flex-end}.pitaj-root.pos-top-right{top:20px;right:20px;bottom:20px;align-items:flex-end;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.pos-top-left{top:20px;left:20px;bottom:20px;right:auto;align-items:flex-start;flex-direction:column-reverse;justify-content:flex-start}.pitaj-root.is-inline.is-mobile{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none;justify-content:flex-end;align-items:stretch!important}.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap{position:absolute;bottom:16px;right:16px;z-index:2147483647;margin:0!important}.pitaj-root.is-inline.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root.is-inline.is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-inline.is-mobile.pos-bottom-left .pitaj-launcher-wrap{right:auto;left:16px}.pitaj-root.is-inline.is-mobile .pitaj-launcher-popup{max-width:calc(100% - 32px);min-width:180px}.pitaj-root.is-inline.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1}.pitaj-root.is-inline.is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none}.pitaj-root.is-inline:not(.is-mobile) .pitaj-window{border-radius:var(--pitaj-radius)!important}.pitaj-window{width:380px;max-width:100%;height:590px;max-height:calc(100% - 72px);min-height:0;flex:0 1 590px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border-radius:var(--pitaj-radius);box-shadow:var(--pitaj-window-shadow, none);border:1px solid var(--pitaj-border, rgba(15, 23, 42, .08));display:flex;flex-direction:column;overflow:hidden;pointer-events:auto;transform-origin:bottom right;transition:opacity .24s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1),visibility .24s;opacity:1;transform:scale(1) translateY(0)}.pos-bottom-left .pitaj-window{transform-origin:bottom left}.pitaj-window.is-closed{opacity:0;transform:scale(.94) translateY(14px);pointer-events:none;visibility:hidden}.pitaj-header{background-color:var(--pitaj-header-bg);background-image:var(--pitaj-header-gradient, linear-gradient(180deg, rgba(255, 255, 255, .12) 0%, rgba(0, 0, 0, .04) 100%));color:var(--pitaj-header-fg);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--pitaj-header-border, var(--pitaj-border));border-top-left-radius:var(--pitaj-radius);border-top-right-radius:var(--pitaj-radius);flex-shrink:0;position:relative;z-index:10;box-shadow:none}.pitaj-header-info{display:flex;align-items:center;gap:12px;min-width:0;flex:1}.pitaj-avatar{width:36px;height:36px;border-radius:var(--pitaj-radius-avatar, 50%);background:transparent!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent);flex-shrink:0;overflow:visible;transition:transform .15s ease;box-shadow:none!important;border:none!important}.pitaj-header .pitaj-avatar{color:var(--pitaj-header-fg);background:transparent!important;border:none!important;box-shadow:none!important}.pitaj-avatar.with-border,.pitaj-avatar.no-border{border:none!important}.pitaj-avatar img{width:100%;height:100%;border-radius:inherit;object-fit:contain}.pitaj-header-text{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px}.pitaj-header-title{font-size:calc(var(--pitaj-font-size, 14px) * 1.08);font-weight:600;letter-spacing:-.015em;color:var(--pitaj-header-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.pitaj-header-ticket{display:flex;align-items:center}.pitaj-header-ticket-badge{display:inline-flex;align-items:center;font-size:10.5px;font-weight:600;letter-spacing:.02em;padding:1px 7px;border-radius:999px;background:var(--pitaj-header-badge-bg, rgba(15, 23, 42, .08));color:var(--pitaj-header-badge-fg, var(--pitaj-header-fg));line-height:1.4}.pitaj-header-status{display:inline-flex;align-items:center;gap:6px;font-size:calc(var(--pitaj-font-size, 14px) * .85);font-weight:500;color:var(--pitaj-header-muted, var(--pitaj-muted));line-height:1}.pitaj-status-indicator{position:relative;width:7px;height:7px;display:inline-flex;align-items:center;justify-content:center}.pitaj-status-dot{width:7px;height:7px;border-radius:50%;background-color:var(--pitaj-success)}.pitaj-status-indicator.is-offline .pitaj-status-dot{background-color:var(--pitaj-muted)}.pitaj-status-ping{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:50%;background-color:var(--pitaj-success);opacity:.45;animation:pitaj-ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes pitaj-ping{75%,to{transform:scale(2.2);opacity:0}}.pitaj-header-actions{display:flex;align-items:center;gap:4px}.pitaj-icon-btn{width:32px;height:32px;min-width:32px;min-height:32px;flex-shrink:0;aspect-ratio:1 / 1;border-radius:var(--pitaj-radius-btn, 8px);display:flex;align-items:center;justify-content:center;color:var(--pitaj-muted);transition:all .15s ease;border:1px solid transparent}.pitaj-header .pitaj-icon-btn{color:var(--pitaj-header-icon, var(--pitaj-header-fg));background-color:transparent;border-color:transparent}.pitaj-icon-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header .pitaj-icon-btn:hover{background-color:var(--pitaj-header-icon-hover-bg, rgba(15, 23, 42, .07));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-header .pitaj-icon-btn:active,.pitaj-header .pitaj-icon-btn.is-active{background-color:var(--pitaj-header-icon-active-bg, rgba(15, 23, 42, .12));color:var(--pitaj-header-icon-hover, var(--pitaj-header-fg));border-color:transparent}.pitaj-icon-btn.is-active{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-header-menu{position:relative}.pitaj-menu-dropdown{position:absolute;top:40px;right:0;min-width:210px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);box-shadow:0 12px 30px -4px #0f172a24,0 4px 12px -2px #0f172a14;padding:6px;z-index:30;animation:pitaj-menu-in .15s cubic-bezier(.16,1,.3,1)}@keyframes pitaj-menu-in{0%{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-menu-item{width:100%;padding:10px 12px;border-radius:var(--pitaj-radius-btn, 8px);font-size:13px;font-weight:500;color:var(--pitaj-fg);text-align:left;display:flex;align-items:center;gap:10px;transition:background-color .15s}.pitaj-menu-item-icon{color:currentColor;flex-shrink:0}.pitaj-menu-item:hover:not(:disabled){background-color:var(--pitaj-hover)}.pitaj-menu-item:disabled{color:var(--pitaj-muted);cursor:not-allowed;opacity:.6}.pitaj-menu-item:disabled .pitaj-menu-item-icon{color:var(--pitaj-muted)}.pitaj-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}.pitaj-history-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;background-color:var(--pitaj-surface)}.pitaj-history-screen::-webkit-scrollbar{display:none}.pitaj-tickets-screen{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px 16px;background:var(--pitaj-surface);color:var(--pitaj-fg);box-sizing:border-box;width:100%;max-width:100%;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent}.pitaj-tickets-screen::-webkit-scrollbar{width:6px;height:0px}.pitaj-tickets-screen::-webkit-scrollbar-track{background:transparent}.pitaj-tickets-screen::-webkit-scrollbar-thumb{background-color:var(--pitaj-border);border-radius:9999px;transition:background-color .15s ease}.pitaj-tickets-screen::-webkit-scrollbar-thumb:hover{background-color:var(--pitaj-muted)}.pitaj-ticket-tabs{display:grid;grid-template-columns:1fr 1fr;padding:3px;margin-bottom:14px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 12px);background:var(--pitaj-surface-subtle);width:100%;max-width:100%;box-sizing:border-box}.pitaj-ticket-tabs button{padding:8px 12px;border-radius:var(--pitaj-radius-btn, 9px);color:var(--pitaj-muted);font-size:13px;font-weight:500;transition:all .15s ease;cursor:pointer;text-align:center;border:none;background:transparent}.pitaj-ticket-tabs button.is-active{background:var(--pitaj-surface);color:var(--pitaj-fg);font-weight:600;box-shadow:0 1px 3px #00000014}.pitaj-tickets-empty{min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--pitaj-muted);text-align:center;padding:24px 16px}.pitaj-tickets-empty strong{color:var(--pitaj-fg);font-size:15px;font-weight:600}.pitaj-tickets-empty span{font-size:12.5px;color:var(--pitaj-muted)}.pitaj-ticket-list{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0;box-sizing:border-box}.pitaj-ticket-card{display:flex;align-items:stretch;padding:12px 14px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-bubble, 12px);color:var(--pitaj-fg);transition:background-color .15s ease,border-color .15s ease;width:100%;max-width:100%;min-width:0;box-sizing:border-box;text-align:left;cursor:pointer;font:inherit;outline:none;overflow:hidden}.pitaj-ticket-card:hover{background:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-ticket-card:focus-visible{border-color:var(--pitaj-primary);box-shadow:0 0 0 2px var(--pitaj-accent-soft)}.pitaj-ticket-card-content{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;max-width:100%;box-sizing:border-box;overflow:hidden}.pitaj-ticket-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-number{color:var(--pitaj-fg)!important;font-size:13.5px;font-weight:600;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-ticket-card-preview{font-size:12px;line-height:1.45;color:var(--pitaj-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-top:2px;max-width:100%}.pitaj-ticket-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;width:100%;max-width:100%;min-width:0}.pitaj-ticket-card-time{font-size:11px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-ticket-card-count{font-size:10.5px;color:var(--pitaj-muted);opacity:.85;flex-shrink:0}.pitaj-ticket-status-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;line-height:1.3;flex-shrink:0}.pitaj-ticket-status-badge.is-open{background:#10b98126;color:#10b981;border:1px solid rgba(16,185,129,.3)}.pitaj-ticket-status-badge.is-closed{background:#94a3b826;color:var(--pitaj-muted);border:1px solid var(--pitaj-border)}.pitaj-ticket-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor}.pitaj-tickets-loading-more{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 0 2px;font-size:12px;color:var(--pitaj-muted);width:100%}.pitaj-tickets-loading-more-spinner{width:14px;height:14px;border:2px solid var(--pitaj-border);border-top-color:var(--pitaj-primary);border-radius:50%;animation:pitaj-spin .75s linear infinite;flex-shrink:0}@keyframes pitaj-spin{to{transform:rotate(360deg)}}.pitaj-history-list{display:flex;flex-direction:column;gap:6px;padding:12px;flex:1}.pitaj-history-item{width:100%;padding:10px 12px;border-radius:10px;display:flex;align-items:flex-start;gap:10px;text-align:left;transition:background-color .15s ease}.pitaj-history-item:hover{background-color:var(--pitaj-hover)}.pitaj-history-icon{width:30px;height:30px;border-radius:50%;background-color:var(--pitaj-hover);color:var(--pitaj-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.pitaj-history-content{flex:1;min-width:0}.pitaj-history-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pitaj-history-title-wrap{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.pitaj-history-title{font-size:13px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-history-ticket-badge{font-size:10px;font-weight:600;color:var(--pitaj-primary);background:var(--pitaj-accent-soft);padding:1px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0}.pitaj-conversation-ticket-chip-wrap{display:flex;justify-content:center;margin:4px 0 10px}.pitaj-conversation-ticket-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:11.5px;background:var(--pitaj-surface-subtle);border:1px solid var(--pitaj-border);color:var(--pitaj-muted)}.pitaj-conversation-ticket-chip strong{color:var(--pitaj-fg);font-weight:600}.pitaj-history-time{font-size:10px;color:var(--pitaj-muted);flex-shrink:0}.pitaj-history-bottom{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-history-preview{font-size:12px;color:var(--pitaj-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.pitaj-ended-badge{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--pitaj-muted);border:1px solid var(--pitaj-border);border-radius:999px;padding:2px 7px;flex-shrink:0}.pitaj-history-unread{background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:9px;font-weight:700;min-width:16px;height:16px;border-radius:8px;padding:0 4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-history-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;color:var(--pitaj-muted)}.pitaj-history-empty-icon{width:44px;height:44px;border-radius:50%;background-color:var(--pitaj-hover);display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--pitaj-muted)}.pitaj-history-cta{margin-top:12px;padding:9px 18px;border-radius:999px;background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease}.pitaj-history-cta:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 4px 14px #00000026}.pitaj-chat-screen{flex:1;display:flex;flex-direction:column;height:100%;background-color:var(--pitaj-surface-subtle)}.pitaj-messages-container{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin;scrollbar-color:var(--pitaj-border) transparent;background-color:var(--pitaj-surface-subtle)}.pitaj-date-divider{display:flex;align-items:center;gap:10px;margin:4px 0}.pitaj-date-line{flex:1;height:1px;background-color:var(--pitaj-border)}.pitaj-date-label{font-size:10px;font-weight:500;color:var(--pitaj-muted);text-transform:uppercase}.pitaj-msg-row{display:flex;align-items:flex-end;gap:8px;width:100%}.pitaj-msg-row.user{flex-direction:row-reverse}.pitaj-msg-avatar{display:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}.pitaj-msg-body{display:flex;flex-direction:column;max-width:85%;gap:4px}.pitaj-msg-row.user .pitaj-msg-body{align-items:flex-end}.pitaj-msg-row.ai .pitaj-msg-body{align-items:flex-start}.pitaj-msg-bubble{padding:11px 16px;font-size:var(--pitaj-font-size, 14px);line-height:1.55;border-radius:var(--pitaj-radius-bubble, 18px);word-break:break-word;width:fit-content;max-width:100%;box-sizing:border-box}.pitaj-msg-row.ai .pitaj-msg-bubble{background-color:var(--pitaj-bubble-ai);color:var(--pitaj-bubble-ai-fg);border:1px solid var(--pitaj-border);border-bottom-left-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 1px 2px #0f172a08;width:fit-content;max-width:100%}.pitaj-msg-row.user .pitaj-msg-bubble{background:linear-gradient(135deg,var(--pitaj-accent) 0%,var(--pitaj-accent-hover) 100%);color:var(--pitaj-bubble-user-fg);border-bottom-right-radius:var(--pitaj-radius-corner-sm, 4px);box-shadow:0 2px 8px -1px #2563eb40}.pitaj-msg-row.user .pitaj-msg-bubble.is-form-submission{background:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-bottom-right-radius:var(--pitaj-radius-bubble, 18px);box-shadow:0 1px 3px #0f172a0d}.pitaj-form-submission-card{display:grid;gap:8px;min-width:230px}.pitaj-form-submission-title{font-size:12px;font-weight:700;letter-spacing:-.01em;color:var(--pitaj-accent)}.pitaj-form-submission-grid{display:grid;gap:6px}.pitaj-form-submission-row{display:grid;grid-template-columns:minmax(0,115px) minmax(0,1fr);gap:8px}.pitaj-form-submission-row dt{font-size:11px;color:var(--pitaj-muted)}.pitaj-form-submission-row dd{font-size:12px;font-weight:600;color:var(--pitaj-fg);word-break:break-word;text-align:right}.pitaj-markdown{font-size:var(--pitaj-font-size, 14px);line-height:1.55}.pitaj-markdown p{margin-bottom:8px}.pitaj-markdown p:last-child{margin-bottom:0}.pitaj-markdown strong{font-weight:600;color:var(--pitaj-fg)}.pitaj-markdown em{font-style:italic}.pitaj-markdown code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12.5px;background-color:#0f172a0f;padding:2px 6px;border-radius:5px;border:1px solid rgba(15,23,42,.04)}.pitaj-markdown pre{background-color:#0f172a;color:#f8fafc;padding:12px 14px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:12.5px;border:1px solid rgba(255,255,255,.08)}.pitaj-markdown pre code{background:transparent;padding:0;color:inherit;border:none}.pitaj-markdown ul,.pitaj-markdown ol{padding-left:20px;margin:8px 0}.pitaj-markdown li{margin-bottom:4px}.pitaj-markdown a{color:var(--pitaj-accent);text-decoration:underline;text-underline-offset:3px;font-weight:500}.pitaj-markdown a:hover{color:var(--pitaj-accent-hover)}.pitaj-sources{margin-top:8px;display:flex;flex-direction:column;gap:6px}.pitaj-sources-title{font-size:10.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--pitaj-muted)}.pitaj-source-pill{display:inline-flex;align-items:center;gap:6px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:8px;padding:5px 10px;font-size:11.5px;font-weight:500;color:var(--pitaj-fg);text-decoration:none;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-source-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 2px 5px #2563eb1f}.pitaj-followups{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pitaj-followup-chip{background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-accent);border-radius:var(--pitaj-radius-full, 999px);padding:6px 14px;font-size:12px;font-weight:500;line-height:1.4;text-align:left;cursor:pointer;transition:all .15s ease;box-shadow:0 1px 2px #0f172a08}.pitaj-followup-chip:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);transform:translateY(-1px);box-shadow:0 2px 6px #2563eb33}.pitaj-hidden-input{display:none}.pitaj-attachment-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;padding:0 2px}.pitaj-attachment-card{display:inline-flex;align-items:center;gap:8px;max-width:220px;padding:4px 8px 4px 4px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface);border:1px solid var(--pitaj-border);box-shadow:0 1px 2px #0000000a;transition:border-color .15s ease,box-shadow .15s ease}.pitaj-attachment-card:hover{border-color:var(--pitaj-muted)}.pitaj-attachment-thumb-wrap{width:28px;height:28px;border-radius:var(--pitaj-radius-corner-sm, 6px);overflow:hidden;background:var(--pitaj-hover);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-attachment-thumb{width:100%;height:100%;object-fit:cover;display:block}.pitaj-attachment-icon-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--pitaj-accent)}.pitaj-attachment-name{font-size:11.5px;font-weight:500;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}.pitaj-attachment-remove{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:var(--pitaj-radius-full, 999px);border:0;background:transparent;color:var(--pitaj-muted);cursor:pointer;flex-shrink:0;transition:background-color .15s ease,color .15s ease;padding:0}.pitaj-attachment-remove:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-attachment-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);border-radius:var(--pitaj-radius-full, 999px);padding:4px 10px;font-size:11px;color:var(--pitaj-fg)}.pitaj-attachment-chip button{display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:var(--pitaj-muted);padding:0;cursor:pointer}.pitaj-msg-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:var(--pitaj-muted);padding:0 4px}.pitaj-msg-actions{display:inline-flex;align-items:center;gap:6px}.pitaj-msg-action-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:0;border-radius:var(--pitaj-radius-btn, 999px);background:transparent;color:var(--pitaj-muted);cursor:pointer;transition:color .15s ease,background-color .15s ease,transform .15s ease}.pitaj-msg-action-btn svg{width:14px!important;height:14px!important;display:block;flex-shrink:0;color:currentColor!important;overflow:visible!important;transform:none!important}.pitaj-msg-action-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-msg-action-btn:active{transform:scale(.94)}.pitaj-msg-action-btn:focus-visible{outline:2px solid var(--pitaj-accent, #2563eb);outline-offset:1px}.pitaj-msg-action-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-msg-action-btn.is-positive.is-active{color:#10b981;background-color:#10b9811f}.pitaj-msg-action-btn.is-negative.is-active{color:#ef4444;background-color:#ef44441f}.pitaj-mic-btn.is-active{color:var(--pitaj-accent, #2563eb);background-color:#2563eb1a}.pitaj-history-item-wrap{position:relative}.pitaj-history-delete-btn{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:0;border-radius:999px;background:var(--pitaj-surface);border:1px solid var(--pitaj-border);color:var(--pitaj-muted);cursor:pointer;transition:background-color .15s ease,color .15s ease}.pitaj-history-delete-btn:hover{background:#ef44441a;color:#dc2626}.pitaj-msg-row.ai.is-thinking-row{margin-top:2px;margin-bottom:8px;padding-left:2px}.pitaj-thinking-standalone{display:inline-flex;align-items:center;min-height:28px;padding:4px 2px;-webkit-user-select:none;user-select:none}.pitaj-msg-bubble.is-thinking{padding:8px 14px;display:inline-flex;align-items:center;width:fit-content}.pitaj-thinking-indicator{display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;padding:0;box-shadow:none}.pitaj-ai-spinner{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;line-height:1;color:var(--pitaj-accent);filter:drop-shadow(0 0 5px var(--pitaj-accent-soft-strong, rgba(37, 99, 235, .2)))}.pitaj-thinking-spinner{animation:pitaj-spinner-appear .28s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-spinner-appear{0%{opacity:0;transform:scale(.65)}to{opacity:1;transform:scale(1)}}.pitaj-ai-spinner .pitaj-spinner-segments{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-spinner-rotate 2.4s linear infinite;will-change:transform}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(1){opacity:1}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(2){opacity:.85}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(3){opacity:.7}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(4){opacity:.55}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(5){opacity:.4}.pitaj-ai-spinner .pitaj-spinner-segments rect:nth-child(6){opacity:.25}.pitaj-ai-spinner .pitaj-spinner-sparkle{transform-origin:50px 50px;transform-box:view-box;animation:pitaj-sparkle-breathe 2s ease-in-out infinite;will-change:transform,opacity}@keyframes pitaj-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pitaj-sparkle-breathe{0%,to{transform:scale(.86);opacity:.85}50%{transform:scale(1.14);opacity:1}}.pitaj-streaming-cursor{display:inline-block;width:2px;height:1.15em;margin-left:3px;vertical-align:-.15em;background-color:var(--pitaj-accent);border-radius:1px;animation:pitaj-cursor-blink .85s ease-in-out infinite}@keyframes pitaj-cursor-blink{0%,to{opacity:1}50%{opacity:0}}@media (prefers-reduced-motion: reduce){.pitaj-ai-spinner .pitaj-spinner-segments,.pitaj-ai-spinner .pitaj-spinner-sparkle{animation-duration:6s}}.pitaj-thinking-text{font-size:12.5px;font-weight:400;letter-spacing:-.01em;white-space:nowrap;-webkit-user-select:none;user-select:none;color:var(--pitaj-muted);background:linear-gradient(100deg,var(--pitaj-muted) 15%,var(--pitaj-fg) 48%,var(--pitaj-accent) 65%,var(--pitaj-muted) 85%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pitaj-shimmer-sweep 2.2s cubic-bezier(.4,0,.2,1) infinite,pitaj-thinking-fade .25s cubic-bezier(.16,1,.3,1) forwards}@keyframes pitaj-shimmer-sweep{0%{background-position:120% 0}to{background-position:-80% 0}}@keyframes pitaj-thinking-fade{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}.pitaj-typing-indicator{display:inline-flex;align-items:center;gap:6px;background:transparent;border:none;box-shadow:none;padding:0}.pitaj-typing-dot{width:5px;height:5px;border-radius:50%;background-color:var(--pitaj-accent);opacity:.35;animation:pitaj-thinking-pulse 1.35s cubic-bezier(.4,0,.2,1) infinite}.pitaj-typing-dot:nth-child(1){animation-delay:0s}.pitaj-typing-dot:nth-child(2){animation-delay:.2s}.pitaj-typing-dot:nth-child(3){animation-delay:.4s}.pitaj-alert-banner{background-color:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:8px 12px;border-radius:10px;font-size:12px;display:flex;align-items:center;justify-content:space-between;margin-top:6px}.pitaj-input-area{background-color:var(--pitaj-surface-subtle);border-top:none;padding:10px 14px 14px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;box-shadow:none;border-bottom-left-radius:var(--pitaj-radius);border-bottom-right-radius:var(--pitaj-radius)}.pitaj-dismissible-notice{display:flex;align-items:center;justify-content:space-between;gap:8px;border-radius:12px 12px 0 0;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-bottom:none;padding:8px 12px 18px;margin-bottom:-12px;position:relative;z-index:1}.pitaj-dismissible-notice:after{content:"";position:absolute;left:-1px;right:-1px;bottom:-10px;height:10px;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);pointer-events:none}.pitaj-dismissible-notice-text{font-size:12px;color:var(--pitaj-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pitaj-dismissible-notice-close{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);flex-shrink:0}.pitaj-dismissible-notice-close:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-input-wrapper{display:flex;align-items:center;gap:8px;background-color:var(--pitaj-surface);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 14px);min-height:48px;padding:7px 10px 7px 14px;transition:border-color .18s ease,box-shadow .18s ease,background-color .18s ease;position:relative;z-index:2;box-shadow:0 1px 2px #0f172a08}.pitaj-input-wrapper.is-recording{padding-right:10px}.pitaj-input-wrapper:focus-within{background-color:var(--pitaj-surface);border-color:var(--pitaj-accent);box-shadow:0 0 0 3px var(--pitaj-accent-soft)}.pitaj-dictation-processing{font-size:12px;color:var(--pitaj-muted);padding:0 2px}.pitaj-textarea{flex:1;min-height:22px;max-height:100px;resize:none;font-size:var(--pitaj-font-size, 14px);color:var(--pitaj-fg);line-height:1.45;padding:2px 0;align-content:center;scrollbar-width:none}.pitaj-textarea::-webkit-scrollbar{display:none}.pitaj-textarea::placeholder{color:var(--pitaj-muted)}.pitaj-recording-shell{display:flex;align-items:center;gap:8px;width:100%}.pitaj-recording-btn{width:34px;height:34px;border-radius:var(--pitaj-radius-full, 999px);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--pitaj-border);background:var(--pitaj-surface);color:var(--pitaj-muted);transition:all .15s ease}.pitaj-recording-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-recording-btn.is-confirm{background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);border-color:var(--pitaj-send-accent)}.pitaj-recording-btn.is-confirm:hover:not(:disabled){filter:brightness(.92);color:var(--pitaj-send-accent-contrast)}.pitaj-recording-btn:disabled{opacity:.6;cursor:not-allowed}.pitaj-wave-track{position:relative;flex:1;min-width:90px;height:22px}.pitaj-wave-track:before{content:none}.pitaj-wave{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:2px;z-index:1;padding:0 1px}.pitaj-wave>span{width:2.5px;min-height:3px;border-radius:999px;background-color:var(--pitaj-accent);transition:height 80ms ease-out}.pitaj-composer-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-composer-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-composer-btn:disabled{opacity:.4;cursor:not-allowed}.pitaj-composer-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-attach-btn{color:var(--pitaj-muted)}.pitaj-mic-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 8px);color:var(--pitaj-muted);background:transparent;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;transition:all .15s ease}.pitaj-mic-btn:hover:not(:disabled){background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-mic-btn.is-active{color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft)}.pitaj-send-btn{width:32px;height:32px;border-radius:var(--pitaj-radius-btn, 10px);border:1px solid transparent;background-color:var(--pitaj-send-accent);color:var(--pitaj-send-accent-contrast);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,background-color .15s ease,box-shadow .15s ease;box-shadow:0 2px 6px -1px #2563eb59}.pitaj-send-btn:hover:not(:disabled){transform:scale(1.04);background-color:var(--pitaj-accent-hover);box-shadow:0 4px 10px -1px #2563eb73}.pitaj-send-btn:active:not(:disabled){transform:scale(.96)}.pitaj-send-btn:disabled{opacity:.4;color:var(--pitaj-muted);background-color:var(--pitaj-border);box-shadow:none;cursor:not-allowed}.pitaj-custom-footer{text-align:center;font-size:11px;color:var(--pitaj-muted);margin-top:-2px}.pitaj-footer{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;color:var(--pitaj-muted);padding:2px 0 0;background-color:transparent;letter-spacing:-.01em}.pitaj-history-screen .pitaj-footer{background-color:var(--pitaj-surface);padding:10px 12px 12px}.pitaj-footer a{color:var(--pitaj-muted);font-weight:500;text-decoration:none;transition:color .15s ease}.pitaj-footer a:hover{color:var(--pitaj-fg);text-decoration:underline}.pitaj-powered-icon{width:13px;height:13px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}.pitaj-new-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:18px;gap:14px;scrollbar-width:none;background-color:var(--pitaj-surface-subtle)}.pitaj-suggestion-pills{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pitaj-suggestion-pill{max-width:min(100%,290px);padding:8px 14px;border-radius:var(--pitaj-radius-bubble, 12px);border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface);font-size:calc(var(--pitaj-font-size, 14px) * .93);font-weight:500;color:var(--pitaj-fg);transition:all .15s cubic-bezier(.16,1,.3,1);text-align:left;white-space:normal;box-shadow:0 1px 2px #0f172a05}.pitaj-suggestion-pill:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent-hover);transform:translateY(-1px);box-shadow:0 3px 8px -1px #2563eb1f}.pitaj-suggestion-pill:active{transform:scale(.98)}.pitaj-suggestion-enter{animation:pitaj-suggestion-fade-in .18s ease}@keyframes pitaj-suggestion-fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.pitaj-contact-screen{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:16px;gap:14px;scrollbar-width:none}.pitaj-contact-screen::-webkit-scrollbar{display:none}.pitaj-inline-form-shell{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;display:flex;align-items:stretch;background:#0f172a2e;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);padding:10px}.pitaj-contact-screen-embedded{flex:1;width:100%;max-height:100%;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 12px);background:var(--pitaj-surface);padding-top:12px;box-shadow:0 16px 36px #0f172a38}.pitaj-contact-head-embedded{justify-content:space-between;padding-bottom:2px}.pitaj-contact-entry{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:8px 14px;border-radius:var(--pitaj-radius-full, 999px);border:1px solid var(--pitaj-accent-ring);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-size:12.5px;font-weight:600;transition:all .15s ease}.pitaj-contact-entry:hover{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft-strong)}.pitaj-contact-head{display:flex;align-items:center;gap:10px;padding-bottom:4px}.pitaj-contact-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-contact-sub{font-size:12px;color:var(--pitaj-muted);line-height:1.4}.pitaj-contact-form{display:flex;flex-direction:column;gap:12px}.pitaj-contact-field{display:flex;flex-direction:column;gap:5px}.pitaj-contact-label{font-size:12px;font-weight:600;color:var(--pitaj-fg)}.pitaj-required-indicator{color:var(--pitaj-danger);font-weight:700}.pitaj-contact-input{width:100%;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);font-size:13.5px;color:var(--pitaj-fg);transition:border-color .15s ease,background-color .15s ease}.pitaj-contact-field textarea.pitaj-contact-input{min-height:90px;resize:vertical}.pitaj-contact-input:focus{border-color:var(--pitaj-accent);background-color:var(--pitaj-surface)}.pitaj-contact-input::placeholder{color:var(--pitaj-muted)}.pitaj-contact-input.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select{position:relative}.pitaj-custom-select-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);font-size:13.5px;transition:border-color .15s ease,background-color .15s ease}.pitaj-custom-select-trigger:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-surface)}.pitaj-custom-select-trigger .is-open{transform:rotate(180deg);transition:transform .15s ease}.pitaj-custom-select.has-error .pitaj-custom-select-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-custom-select-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;display:grid;gap:4px;max-height:180px;overflow-y:auto;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:6px}.pitaj-custom-select-option{display:inline-flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;border-radius:var(--pitaj-radius-btn, 7px);padding:7px 8px;color:var(--pitaj-fg);font-size:12.5px;border:1px solid transparent}.pitaj-custom-select-option:hover{background-color:var(--pitaj-hover);border-color:var(--pitaj-border)}.pitaj-custom-select-option.is-active{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:600;border-color:var(--pitaj-accent-ring)}.pitaj-number-stepper{display:grid;grid-template-columns:34px minmax(0,1fr) 34px;align-items:center;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);overflow:hidden;background-color:var(--pitaj-surface-subtle)}.pitaj-number-stepper.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-number-stepper-btn{height:100%;display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted);background-color:transparent}.pitaj-number-stepper-btn:hover{background-color:var(--pitaj-hover);color:var(--pitaj-fg)}.pitaj-number-stepper .pitaj-contact-input{border:0;border-left:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);border-radius:0;background:transparent;text-align:center;padding:10px 6px}.pitaj-number-stepper .pitaj-contact-input:focus{background:transparent}.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:hover,.pitaj-number-stepper .pitaj-contact-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--pitaj-fg);-webkit-box-shadow:0 0 0 1000px var(--pitaj-surface-subtle) inset}.pitaj-number-input{font-variant-numeric:tabular-nums;letter-spacing:.01em}.pitaj-contact-error{font-size:11.5px;color:var(--pitaj-danger)}.pitaj-contact-submit{margin-top:4px;padding:11px 16px;border-radius:var(--pitaj-radius-btn, 10px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13.5px;font-weight:600;transition:background-color .15s ease,transform .15s ease,opacity .15s ease}.pitaj-contact-submit:hover{background-color:var(--pitaj-accent-hover);transform:translateY(-1px)}.pitaj-contact-submit:disabled{opacity:.84;cursor:wait}.pitaj-contact-submit.is-success{background-color:var(--pitaj-success);animation:pitaj-submit-pop .24s ease}.pitaj-contact-submit.is-error{background-color:var(--pitaj-danger);animation:pitaj-submit-shake .28s ease}@keyframes pitaj-submit-pop{0%{transform:scale(.98)}65%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes pitaj-submit-shake{0%{transform:translate(0)}33%{transform:translate(-2px)}66%{transform:translate(2px)}to{transform:translate(0)}}.pitaj-contact-success{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:24px 12px}.pitaj-contact-success-icon{width:52px;height:52px;border-radius:50%;background-color:#10b9811f;color:var(--pitaj-success);display:flex;align-items:center;justify-content:center;margin-bottom:4px}.pitaj-contact-btn{margin-top:10px;padding:10px 18px;border-radius:var(--pitaj-radius-full, 999px);background-color:var(--pitaj-accent);color:var(--pitaj-accent-contrast);font-size:13px;font-weight:600;transition:background-color .15s ease}.pitaj-contact-btn:hover{background-color:var(--pitaj-accent-hover)}.pitaj-form-actions{display:flex;flex-wrap:wrap;gap:8px}.pitaj-form-action-chip{border:1px solid var(--pitaj-border);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);border-radius:var(--pitaj-radius-full, 999px);padding:7px 12px;font-size:12px;font-weight:600;transition:all .15s ease}.pitaj-form-action-chip.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-checkbox{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-option-group{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:10px 12px}.pitaj-form-option-group.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-form-option-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--pitaj-fg)}.pitaj-form-radio-option{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:9px 10px;cursor:pointer;transition:border-color .15s ease,background-color .15s ease,color .15s ease}.pitaj-form-radio-option:hover{border-color:var(--pitaj-accent-ring);background-color:var(--pitaj-hover)}.pitaj-form-radio-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-form-radio-native{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.pitaj-form-radio-indicator{width:17px;height:17px;border-radius:999px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.pitaj-form-radio-dot{width:8px;height:8px;border-radius:999px;background:currentColor;transform:scale(0);opacity:0;transition:transform .15s ease,opacity .15s ease}.pitaj-form-radio-option.is-active .pitaj-form-radio-dot{transform:scale(1);opacity:1}.pitaj-form-radio-text{font-size:12.5px;font-weight:600}.pitaj-multi-option{display:inline-flex;align-items:center;gap:8px;text-align:left;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px}.pitaj-multi-option.is-active{border-color:var(--pitaj-accent);background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent)}.pitaj-multi-option-check{width:16px;height:16px;border:1px solid currentColor;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}.pitaj-file-picker{display:flex;flex-direction:column;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);padding:8px}.pitaj-file-picker.has-error{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-file-hidden-input{display:none}.pitaj-file-trigger{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 8px);background-color:var(--pitaj-surface);color:var(--pitaj-fg);padding:8px 10px;font-size:12.5px;font-weight:600}.pitaj-file-name{font-size:12px;color:var(--pitaj-muted)}.pitaj-file-uploading{font-size:11.5px;color:var(--pitaj-accent);font-weight:600}.pitaj-file-progress{width:100%;height:6px;border-radius:999px;background-color:var(--pitaj-border-soft);overflow:hidden}.pitaj-file-progress-bar{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--pitaj-accent),var(--pitaj-accent-hover));transition:width .2s ease}.pitaj-date-picker{position:relative}.pitaj-date-picker.has-error .pitaj-date-trigger{border-color:var(--pitaj-danger);background-color:var(--pitaj-danger-soft)}.pitaj-date-trigger{width:100%;display:inline-flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 8px);background-color:var(--pitaj-surface-subtle);color:var(--pitaj-fg);padding:10px 12px;font-size:13.5px}.pitaj-calendar-popover{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:20;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-input, 10px);background-color:var(--pitaj-surface);box-shadow:0 12px 30px #0f172a29;padding:8px}.pitaj-calendar-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.pitaj-calendar-head strong{font-size:12px;text-transform:capitalize;color:var(--pitaj-fg)}.pitaj-calendar-nav{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius-btn, 7px);color:var(--pitaj-muted)}.pitaj-calendar-weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;margin-bottom:4px}.pitaj-calendar-weekdays span{text-align:center;font-size:11px;color:var(--pitaj-muted)}.pitaj-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.pitaj-calendar-day{height:28px;border-radius:var(--pitaj-radius-corner-sm, 7px);font-size:12px;color:var(--pitaj-fg)}.pitaj-calendar-day.is-muted{color:var(--pitaj-muted);opacity:.6}.pitaj-calendar-day.is-selected{background-color:var(--pitaj-accent-soft);color:var(--pitaj-accent);font-weight:700}.pitaj-form-success-inline{display:inline-flex;align-items:center;gap:6px;border-radius:var(--pitaj-radius-input, 8px);border:1px solid rgba(16,185,129,.35);background-color:#10b9811f;color:var(--pitaj-success);padding:8px 10px;font-size:12.5px}.pitaj-form-success-inline.is-error{border-color:#ef444466;background-color:#ef44441f;color:var(--pitaj-danger)}.pitaj-launcher-wrap{position:relative;display:flex;flex-direction:column;align-items:flex-end;pointer-events:auto;flex-shrink:0}.pos-bottom-left .pitaj-launcher-wrap{align-items:flex-start}.pos-top-right .pitaj-launcher-wrap{align-items:flex-end}.pos-top-left .pitaj-launcher-wrap{align-items:flex-start}.pitaj-launcher-popup{position:absolute;bottom:calc(100% + 14px);right:0;width:max-content;max-width:310px;min-width:220px;background-color:var(--pitaj-surface);color:var(--pitaj-fg);border:1px solid var(--pitaj-border);border-radius:var(--pitaj-radius, 16px);padding:12px 14px;box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;z-index:20;transform-origin:bottom right;animation:pitaj-popup-in .28s cubic-bezier(.16,1,.3,1) forwards;transition:transform .15s ease,box-shadow .15s ease}.pos-bottom-left .pitaj-launcher-popup{right:auto;left:0;transform-origin:bottom left}.pos-top-right .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);transform-origin:top right}.pos-top-left .pitaj-launcher-popup{bottom:auto;top:calc(100% + 14px);right:auto;left:0;transform-origin:top left}.pitaj-launcher-popup:hover{transform:translateY(-2px);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-popup:focus-visible{outline:2px solid var(--pitaj-accent);outline-offset:2px}@keyframes pitaj-popup-in{0%{opacity:0;transform:translateY(10px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}.pitaj-popup-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px}.pitaj-popup-author{display:flex;align-items:center;gap:7px;min-width:0}.pitaj-popup-avatar{width:22px;height:22px;border-radius:0;overflow:visible;flex-shrink:0;background:transparent!important;border:none!important;box-shadow:none!important;display:flex;align-items:center;justify-content:center;color:var(--pitaj-accent)}.pitaj-popup-avatar img{width:100%;height:100%;object-fit:contain}.pitaj-popup-title{font-size:12.5px;font-weight:600;color:var(--pitaj-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}.pitaj-popup-status-dot{display:none!important}.pitaj-popup-tag{display:inline-flex;align-items:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1.5px 6px;border-radius:var(--pitaj-radius-full, 999px);background:#2563eb1f;color:var(--pitaj-accent);margin-left:4px}.pitaj-popup-close-btn{border:none;background:transparent;padding:3px;margin:-3px -3px 0 0;color:var(--pitaj-muted);cursor:pointer;border-radius:var(--pitaj-radius-btn, 6px);display:flex;align-items:center;justify-content:center;transition:color .15s ease,background-color .15s ease;line-height:1}.pitaj-popup-close-btn:hover{color:var(--pitaj-fg);background-color:var(--pitaj-hover)}.pitaj-popup-body{font-size:calc(var(--pitaj-font-size, 14px) * .93);line-height:1.45;color:var(--pitaj-fg);white-space:pre-line;word-break:break-word;max-height:120px;overflow-y:auto;font-weight:450}.pitaj-launcher-popup.is-rating-popup{max-width:320px;min-width:280px;padding:12px 14px 14px}.pitaj-popup-body.is-rating-body{max-height:none;overflow:visible;padding-top:2px}.pitaj-satisfaction-card{display:flex;flex-direction:column;align-items:stretch;-webkit-user-select:none;user-select:none}.pitaj-satisfaction-header{text-align:center;margin-bottom:12px}.pitaj-satisfaction-prompt{display:block;font-size:14px;font-weight:700;color:var(--pitaj-fg);line-height:1.35;letter-spacing:-.01em}.pitaj-satisfaction-subtitle{display:block;font-size:11.5px;color:var(--pitaj-muted);margin-top:3px}.pitaj-mood-pill-wrap{display:flex;justify-content:center;margin-bottom:14px}.pitaj-mood-pill{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:999px;border:1px solid transparent;font-size:13px;font-weight:700;transition:all .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji{font-size:18px;line-height:1;display:inline-block;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.pitaj-mood-pill-emoji.is-bouncing{transform:scale(1.35)}.pitaj-mood-pill-label{line-height:1}.pitaj-mood-pill-score{font-size:11px;opacity:.75;font-weight:600;padding-left:2px}.pitaj-mood-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}.pitaj-mood-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 4px;border-radius:12px;background:var(--pitaj-surface-subtle);border:1.5px solid transparent;cursor:pointer;transition:all .18s cubic-bezier(.2,.8,.4,1);position:relative;outline:none}.pitaj-mood-btn:hover{transform:translateY(-2px);background:var(--pitaj-surface);border-color:var(--pitaj-border);box-shadow:0 4px 12px #0000000f}.pitaj-mood-btn.is-active{transform:translateY(-2px) scale(1.05)}.pitaj-mood-btn-emoji{font-size:26px;line-height:1.1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.08));transition:transform .18s ease}.pitaj-mood-btn:hover .pitaj-mood-btn-emoji{transform:scale(1.15)}.pitaj-mood-btn.is-active .pitaj-mood-btn-emoji{transform:scale(1.18)}.pitaj-mood-btn-num{font-size:11px;font-weight:700;color:var(--pitaj-muted);margin-top:4px;line-height:1;transition:color .15s ease}.pitaj-slider-track-wrap{position:relative;width:100%;padding:4px 0 2px}.pitaj-range-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:7px;border-radius:999px;outline:none;cursor:pointer;transition:background .15s ease;display:block;margin:0}.pitaj-range-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-range-slider::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 3px 12px #0000004d}.pitaj-range-slider::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.22)}.pitaj-range-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3.5px solid currentColor;box-shadow:0 2px 8px #00000038;cursor:grab;transition:transform .15s ease,box-shadow .15s ease}.pitaj-slider-segments{display:flex;justify-content:space-between;padding:4px 6px 0;font-size:10px;font-weight:700;color:var(--pitaj-muted);letter-spacing:-.01em}.pitaj-mood-submit-btn{width:100%;height:38px;border-radius:11px;border:none;color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;transition:all .18s ease}.pitaj-mood-submit-btn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1.5px)}.pitaj-mood-submit-btn:active:not(:disabled){transform:scale(.98)}.pitaj-satisfaction-dismiss{background:none;border:none;font-size:11.5px;font-weight:600;color:var(--pitaj-muted);margin-top:8px;cursor:pointer;text-align:center;padding:4px;transition:color .15s ease}.pitaj-satisfaction-dismiss:hover{color:var(--pitaj-fg)}.pitaj-satisfaction-error{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;line-height:1.4;color:#b91c1c;background-color:#fef2f2;border:1px solid #fee2e2;border-radius:8px;padding:7px 10px;margin-top:10px;text-align:center;animation:pitaj-popup-in .2s ease-out}.pitaj-theme-dark .pitaj-satisfaction-error{color:#fca5a5;background-color:#ef44441f;border-color:#ef444438}.pitaj-satisfaction-success{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;text-align:center;gap:6px;animation:pitaj-popup-in .25s ease-out}.pitaj-satisfaction-success-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:2px}.is-compact .pitaj-satisfaction-header{margin-bottom:8px}.is-compact .pitaj-satisfaction-prompt{font-size:13px}.is-compact .pitaj-mood-pill-wrap{margin-bottom:10px}.is-compact .pitaj-mood-pill{font-size:12px;padding:3px 10px}.is-compact .pitaj-mood-pill-emoji{font-size:15px}.is-compact .pitaj-mood-row{gap:5px;margin-bottom:10px}.is-compact .pitaj-mood-btn{padding:6px 2px;border-radius:9px}.is-compact .pitaj-mood-btn-emoji{font-size:21px}.is-compact .pitaj-mood-btn-num{font-size:10px;margin-top:2px}.is-compact .pitaj-mood-submit-btn{height:34px;font-size:12.5px;margin-top:10px;border-radius:9px}.pitaj-satisfaction-success-title{font-size:15px;font-weight:700;color:var(--pitaj-fg)}.pitaj-satisfaction-success-desc{font-size:12px;color:var(--pitaj-muted)}.pitaj-inline-satisfaction{margin:10px 14px 4px;padding:12px 14px;border:1px solid var(--pitaj-border);border-radius:16px;background:var(--pitaj-surface);box-shadow:0 2px 10px #0000000a;animation:pitaj-popup-in .25s ease-out}.pitaj-launcher-popup-tail{position:absolute;bottom:-6px;right:22px;width:12px;height:12px;background-color:var(--pitaj-surface);border-bottom:1px solid var(--pitaj-border);border-right:1px solid var(--pitaj-border);transform:rotate(45deg);border-bottom-right-radius:2px}.pos-bottom-left .pitaj-launcher-popup-tail{right:auto;left:22px;border-bottom:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border);border-right:none}.pos-top-right .pitaj-launcher-popup-tail{bottom:auto;top:-6px;right:22px;border-bottom:none;border-right:1px solid var(--pitaj-border);border-top:1px solid var(--pitaj-border)}.pos-top-left .pitaj-launcher-popup-tail{bottom:auto;top:-6px;left:22px;right:auto;border-bottom:none;border-right:none;border-top:1px solid var(--pitaj-border);border-left:1px solid var(--pitaj-border)}.pitaj-launcher-btn{position:relative;width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;box-sizing:border-box;border-radius:var(--pitaj-launcher-radius, 50%);padding:0;background-color:var(--pitaj-launcher-bg);color:var(--pitaj-launcher-fg);display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--pitaj-launcher-border, rgba(255, 255, 255, .16));box-shadow:var(--pitaj-launcher-shadow, none);cursor:pointer;pointer-events:auto;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease}.pitaj-launcher-btn:hover{transform:scale(1.06);box-shadow:var(--pitaj-launcher-shadow-hover, none)}.pitaj-launcher-btn:active{transform:scale(.94)}.pitaj-launcher-btn.is-open{width:56px;height:56px;min-width:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;justify-content:center;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-label{display:none}.pitaj-launcher-btn.has-label{width:auto;min-width:56px;max-width:none;height:56px;min-height:56px;max-height:56px;aspect-ratio:auto;padding:0 20px;border-radius:var(--pitaj-launcher-pill-radius, 999px)}.pitaj-launcher-btn.has-label.is-open{width:56px;min-width:56px;height:56px;min-height:56px;max-width:56px;max-height:56px;aspect-ratio:1 / 1;padding:0;border-radius:var(--pitaj-launcher-radius, 50%)}.pitaj-launcher-btn.has-label.label-left{flex-direction:row-reverse}.pitaj-launcher-btn.has-label .pitaj-launcher-label{display:inline-flex;align-items:center;white-space:nowrap;font-size:var(--pitaj-font-size, 14px);font-weight:600;line-height:1;letter-spacing:-.01em}.pitaj-launcher-icon-wrap{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.pitaj-launcher-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;transition:opacity .22s cubic-bezier(.16,1,.3,1),transform .26s cubic-bezier(.34,1.56,.64,1)}.pitaj-launcher-custom-icon{width:24px;height:24px;object-fit:contain}.pitaj-launcher-icon.open-icon{opacity:1;transform:rotate(0) scale(1)}.pitaj-launcher-icon.close-icon{opacity:0;transform:rotate(-90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.open-icon{opacity:0;transform:rotate(90deg) scale(.6);pointer-events:none}.pitaj-launcher-btn.is-open .pitaj-launcher-icon.close-icon{opacity:1;transform:rotate(0) scale(1);pointer-events:auto}.pitaj-unread-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:var(--pitaj-badge-radius, 999px);background-color:var(--pitaj-danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;justify-content:center;border:2px solid var(--pitaj-surface);box-shadow:0 2px 8px #ef444473;animation:pitaj-badge-pop .3s cubic-bezier(.34,1.56,.64,1),pitaj-badge-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pitaj-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pitaj-badge-pulse{0%,to{transform:scale(1);box-shadow:0 2px 8px #ef444473}50%{transform:scale(1.12);box-shadow:0 0 12px #ef4444b3}}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-mobile .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}@media (max-width: 640px){.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed{position:fixed!important;top:auto!important;left:auto!important;right:16px!important;bottom:16px!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;padding:0!important;margin:0!important;pointer-events:none!important;z-index:2147483647!important;box-shadow:none!important;border:none!important;background:transparent!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed.pos-bottom-left{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-closed .pitaj-launcher-wrap{pointer-events:auto!important;position:relative!important;bottom:auto!important;right:auto!important;left:auto!important;top:auto!important;margin:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;padding:0!important;margin:0!important;pointer-events:auto!important;z-index:2147483647!important;overscroll-behavior:contain!important;justify-content:flex-end;align-items:stretch!important;box-shadow:none!important;border:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window{position:fixed!important;top:var(--pitaj-viewport-top, 0px)!important;left:var(--pitaj-viewport-left, 0px)!important;right:0!important;bottom:auto!important;width:100%!important;width:100dvw!important;max-width:100%!important;height:var(--pitaj-viewport-height, 100dvh)!important;max-height:var(--pitaj-viewport-height, 100dvh)!important;min-height:0!important;border-radius:0!important;border:none!important;box-shadow:none!important;transform:none!important;opacity:1!important;z-index:2147483646!important;overscroll-behavior:contain!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-header{padding-top:calc(14px + env(safe-area-inset-top,0px))!important;flex-shrink:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-body{flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-messages-container{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-input-area{flex-shrink:0!important;padding-bottom:var(--pitaj-input-safe-bottom, calc(12px + env(safe-area-inset-bottom, 0px)) )!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-closed{display:none!important;pointer-events:none!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).is-widget-open .pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-window.is-open~.pitaj-launcher-wrap,.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-wrap.is-widget-open{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview).pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-btn{position:relative;bottom:auto;right:auto}.pitaj-root:not(.is-inline):not(.is-canvas-preview) .pitaj-launcher-popup{max-width:calc(100vw - 32px)}}.pitaj-msg-row.has-widget{align-items:flex-start}.pitaj-msg-row.has-widget .pitaj-msg-body{max-width:95%;width:100%}.pitaj-msg-row.has-widget .pitaj-msg-bubble{width:fit-content;max-width:100%}.pitaj-widget-wrapper{width:100%;margin-top:6px}.pitaj-widget-wrapper:first-child{margin-top:0}.dynamic-jsx-widget{width:100%}.pitaj-inline-widget-card{margin-top:0;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e5e7eb);border-radius:var(--pitaj-radius-bubble, 12px);padding:12px;font-family:inherit;color:var(--pitaj-fg, #111827);overflow:hidden;max-width:100%}.pitaj-inline-widget-card .pitaj-inline-widget-card{border:none!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important}.pitaj-inline-widget-card.custom-html-widget{padding:0;border:none;background:transparent;box-shadow:none;border-radius:0;margin:0;width:100%}.pitaj-inline-widget-card.iframe-widget{padding:0}.pitaj-inline-widget-card.is-success{text-align:center;padding:24px 16px;background:#f0fdf4;border-color:#bbf7d0}.pitaj-widget-success-icon{width:40px;height:40px;border-radius:50%;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;margin-bottom:8px}.pitaj-widget-success-title{font-weight:600;font-size:15px;color:#15803d;margin-bottom:4px}.pitaj-widget-success-desc{font-size:13px;color:#166534}.pitaj-widget-header{margin-bottom:12px}.pitaj-widget-title{font-size:15px;font-weight:600;color:var(--pitaj-fg, #111827)}.pitaj-widget-subtitle{font-size:12.5px;color:var(--pitaj-muted, #6b7280);margin-top:2px}.pitaj-widget-form{display:flex;flex-direction:column;gap:10px}.pitaj-widget-field{display:flex;flex-direction:column;gap:4px}.pitaj-widget-field label{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #4b5563)}.pitaj-widget-field input,.pitaj-widget-field textarea,.pitaj-widget-field select{width:100%;box-sizing:border-box;padding:7px 10px;border-radius:var(--pitaj-radius-input, 7px);border:1px solid var(--pitaj-border, #d1d5db);background:var(--pitaj-surface, #ffffff);color:var(--pitaj-fg, #111827);font-size:13px;font-family:inherit;outline:none;transition:border-color .15s ease}.pitaj-widget-field input:focus,.pitaj-widget-field textarea:focus,.pitaj-widget-field select:focus{border-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row{display:flex;align-items:center;gap:8px;margin-top:3px}.pitaj-widget-checkbox-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--pitaj-accent, #2563eb)}.pitaj-widget-checkbox-row label{font-size:12px;cursor:pointer;color:var(--pitaj-fg, #111827);-webkit-user-select:none;user-select:none}.pitaj-hotel-booking-section{margin-top:12px;padding-top:12px;border-top:1px solid var(--pitaj-border, #e5e7eb)}.pitaj-hotel-booking-title{font-size:12.5px;font-weight:600;margin-bottom:8px;color:var(--pitaj-fg, #111827)}.pitaj-widget-btn-primary{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:9px 14px;background-color:var(--pitaj-accent, #0f172a);color:var(--pitaj-accent-contrast, #ffffff);font-size:13px;font-weight:500;border:none;border-radius:var(--pitaj-radius-btn, 8px);cursor:pointer;transition:opacity .15s ease,transform .1s ease;margin-top:4px}.pitaj-widget-btn-primary:hover{opacity:.92}.pitaj-widget-btn-primary:active{transform:scale(.99)}.pitaj-widget-btn-primary.is-booked{background-color:#16a34a}.pitaj-widget-bar{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--pitaj-border, #f3f4f6);margin-bottom:12px;font-size:13.5px;font-weight:600}.pitaj-widget-badge-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--pitaj-muted, #64748b)}.pitaj-widget-bar-title{flex:1}.pitaj-widget-counter{font-size:11.5px;font-weight:500;color:var(--pitaj-muted, #9ca3af);background:var(--pitaj-surface-subtle, #f3f4f6);padding:2px 7px;border-radius:12px}', Vn = ".pitaj-root.is-canvas-preview{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;margin:0!important;padding:0!important;pointer-events:none!important;overflow:hidden!important;z-index:50!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview,.pitaj-root.is-canvas-preview.is-mobile,.pitaj-root.is-canvas-preview.is-widget-closed,.pitaj-root.is-canvas-preview.is-widget-open,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed,.pitaj-root.is-canvas-preview.is-mobile.is-widget-open{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;pointer-events:none!important;background:transparent!important;box-shadow:none!important;border:none!important}.pitaj-root.is-canvas-preview.pos-bottom-right{align-items:flex-end!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview.pos-bottom-left{align-items:flex-start!important;justify-content:flex-end!important}.pitaj-root.is-canvas-preview .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-launcher-wrap{position:absolute!important;bottom:20px!important;right:20px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-wrap{position:absolute!important;bottom:16px!important;right:16px!important;top:auto!important;left:auto!important;margin:0!important;display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-launcher-btn,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed .pitaj-launcher-btn{display:inline-flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.pitaj-root.is-canvas-preview.is-mobile.pos-bottom-left .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile.is-widget-closed.pos-bottom-left .pitaj-launcher-wrap{right:auto!important;left:16px!important}.pitaj-root.is-canvas-preview.is-mobile.is-widget-open .pitaj-launcher-wrap,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open~.pitaj-launcher-wrap{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window{position:absolute!important;bottom:88px!important;right:20px!important;top:auto!important;left:auto!important;max-height:calc(100% - 108px)!important;width:380px!important;max-width:calc(100% - 40px)!important;height:590px!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview.pos-bottom-left .pitaj-window{right:auto!important;left:20px!important}.pitaj-root.is-canvas-preview.is-mobile .pitaj-window{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;border-radius:0!important;border:none!important;box-shadow:none!important;pointer-events:auto!important;z-index:2147483646!important}.pitaj-root.is-canvas-preview .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-closed,.pitaj-root.is-canvas-preview.is-widget-closed .pitaj-window{display:none!important;pointer-events:none!important;visibility:hidden!important;opacity:0!important}.pitaj-root.is-canvas-preview .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-mobile .pitaj-window.is-open,.pitaj-root.is-canvas-preview.is-widget-open .pitaj-window{display:flex!important;visibility:visible!important;opacity:1!important}", $e = {};
function na(t, e) {
  ($e[t] || []).forEach((n) => {
    try {
      n(e);
    } catch (o) {
      console.error(`[Pitaj.io] Error in event listener for ${t}:`, o);
    }
  });
}
function Kn(t) {
  let e = document.getElementById(t);
  return e || (e = document.createElement("div"), e.id = t, e.style.position = "fixed", e.style.zIndex = "2147483647", e.style.bottom = "0", e.style.right = "0", e.style.width = "0", e.style.height = "0", e.style.overflow = "visible", e.style.pointerEvents = "none", document.body.appendChild(e)), e;
}
function Yn(t, e) {
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
const ht = /* @__PURE__ */ new WeakMap();
async function Dt(t, e = {}) {
  const i = ht.get(t), n = async () => {
    var f, _;
    const r = e.widgetId || e.companyId || "default", s = !!(e.isPreview || (f = e.initialConfig) != null && f.isPreview || r === "preview") && r === "preview" ? { ...oe, companyId: r, apiUrl: e.apiUrl, mockMode: !0 } : await Rn(r, e.apiUrl), m = Yn(s, e);
    if (m.enabled === !1 || m.blocked === !0)
      return {
        controller: void 0,
        unmount: () => {
        }
      };
    let u = t.shadowRoot;
    u || (u = t.attachShadow({ mode: "open" })), u.innerHTML = "";
    const b = document.createElement("style");
    b.textContent = On, u.appendChild(b);
    const c = document.createElement("div");
    c.className = "pitaj-shadow-mount", u.appendChild(c);
    const g = e.isCanvasPreview ?? (t.hasAttribute("data-pitaj-preview") || t.classList.contains("pitaj-preview-host") || !!((_ = t.closest) != null && _.call(t, "[data-pitaj-preview]")));
    if (g) {
      const I = document.createElement("style");
      I.textContent = Vn, u.appendChild(I);
    }
    pi(
      /* @__PURE__ */ a(
        En,
        {
          config: m,
          startOpen: e.startOpen ?? !1,
          isInline: e.isInline ?? !1,
          isMobile: e.isMobile,
          isCanvasPreview: g,
          initialScreen: e.initialScreen,
          onEvent: na
        }
      ),
      c
    );
    const v = Le();
    return v && (t.__pitajController = v), {
      controller: v,
      unmount: () => {
        pi(null, c), u && (u.innerHTML = "");
      }
    };
  }, o = (i || Promise.resolve()).then(n, n);
  ht.set(t, o);
  try {
    return await o;
  } finally {
    ht.get(t) === o && ht.delete(t);
  }
}
let nt = null;
const ft = {
  mount: async (t, e) => {
    const i = await Dt(t, e);
    return nt = i.unmount, i;
  },
  unmount: () => {
    nt && (nt(), nt = null);
  },
  init: async (t) => {
    const e = Kn(t.containerId || "pitaj-io-widget-root"), i = await Dt(e, {
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
    return (t = Le()) == null ? void 0 : t.open();
  },
  close: () => {
    var t;
    return (t = Le()) == null ? void 0 : t.close();
  },
  toggle: () => {
    var t;
    return (t = Le()) == null ? void 0 : t.toggle();
  },
  startConversation: (t) => {
    var e;
    return (e = Le()) == null ? void 0 : e.startConversation(t);
  },
  setScreen: (t) => {
    var e;
    return (e = Le()) == null ? void 0 : e.setScreen(t);
  },
  setCompanyId: (t) => {
    var e;
    return (e = Le()) == null ? void 0 : e.setConfig({ companyId: t });
  },
  setConfig: (t) => {
    var e;
    return (e = Le()) == null ? void 0 : e.setConfig(t);
  },
  identify: (t) => {
    try {
      localStorage.setItem("pitaj_io_visitor_meta", JSON.stringify(t)), t.id && localStorage.setItem("pitaj_io_visitor_id", t.id);
    } catch {
    }
  },
  on: (t, e) => {
    $e[t] || ($e[t] = []), $e[t].push(e);
  },
  off: (t, e) => {
    $e[t] && ($e[t] = $e[t].filter((i) => i !== e));
  },
  emit: (t, e) => {
    na(t, e);
  }
};
class Wn extends HTMLElement {
  constructor() {
    super(...arguments);
    Ee(this, "unmountFn", null);
  }
  async connectedCallback() {
    const i = this.getAttribute("widget-id") || this.getAttribute("data-widget-id") || this.getAttribute("company") || this.getAttribute("company-id") || this.getAttribute("data-company") || "default", n = this.getAttribute("api-url") || this.getAttribute("data-api-url") || void 0, o = this.getAttribute("position") || this.getAttribute("data-position") || "bottom-right", r = (this.getAttribute("start-open") || this.getAttribute("data-start-open")) === "true", p = (this.getAttribute("inline") || this.getAttribute("data-inline")) === "true", { unmount: s } = await Dt(this, { widgetId: i, apiUrl: n, position: o, startOpen: r, isInline: p });
    this.unmountFn = s;
  }
  disconnectedCallback() {
    this.unmountFn && (this.unmountFn(), this.unmountFn = null);
  }
}
function zi(t) {
  if (!t) return null;
  const e = t.getAttribute("data-company") || t.getAttribute("data-widget-id") || t.getAttribute("data-company-id") || t.getAttribute("company") || t.getAttribute("company-id") || void 0;
  if (!e) return null;
  const i = t.getAttribute("data-api-url") || void 0, n = t.getAttribute("data-position") || "bottom-right", o = t.getAttribute("data-start-open") === "true", r = t.getAttribute("data-inline") === "true";
  return { companyId: e, apiUrl: i, position: n, startOpen: o, isInline: r };
}
var Ai;
if (typeof window < "u") {
  const t = ((Ai = window.PitajIO) == null ? void 0 : Ai._q) || [];
  window.PitajIO = ft, customElements.get("pitaj-io") || customElements.define("pitaj-io", Wn);
  const e = window.__pitajIoInit;
  if (e)
    window.__pitajIoInit = void 0, ft.init(e).then(() => {
      t.forEach(({ method: i, args: n }) => {
        const o = ft[i];
        typeof o == "function" && o(...n);
      });
    });
  else {
    const i = document.currentScript;
    let n = zi(i);
    if (!n) {
      const o = Array.prototype.slice.call(document.scripts || []);
      for (let r = o.length - 1; r >= 0; r--) {
        const p = o[r];
        if (p.src && /widget(\.iife)?\.js/i.test(p.src) && (n = zi(p), n))
          break;
      }
    }
    n && ft.init({ containerId: "pitaj-io-widget-root", ...n });
  }
}
export {
  ee as A,
  hr as B,
  ir as C,
  Gn as D,
  Ja as E,
  Qi as F,
  jr as G,
  Ot as H,
  or as I,
  sr as J,
  cr as K,
  pr as L,
  ar as M,
  lr as N,
  ft as O,
  _t as P,
  Vi as R,
  vr as S,
  Be as T,
  Xn as U,
  nr as W,
  ma as _,
  Ki as a,
  Ka as b,
  jt as c,
  U as d,
  Jn as e,
  er as f,
  tr as g,
  qn as h,
  Ie as i,
  ur as j,
  Se as k,
  fr as l,
  dr as m,
  rr as n,
  Va as o,
  yt as p,
  gr as q,
  br as r,
  Qn as s,
  B as t,
  a as u,
  mr as v,
  Ue as w,
  qa as x,
  q as y,
  xr as z
};
